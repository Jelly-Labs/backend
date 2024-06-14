import { noop } from 'rxjs';
import { UnpackedError, unpackError } from './unpackError';

type ErrorResult<T extends string> = {
  readonly _kind: 'error';
  readonly code: T;
  readonly unpackedError: UnpackedError | undefined;
};

type SuccessResult<T> = {
  readonly _kind: 'success';
  readonly payload: T;
};

type ActionResult<TSuccess, TError extends string> =
  | ErrorResult<TError>
  | SuccessResult<TSuccess>;

export type AsyncActionResult<TSuccess, TError extends string> = Promise<
  ActionResult<TSuccess, TError>
>;

export const isSuccessResult = <TSuccess, TError extends string>(
  x: ActionResult<TSuccess, TError>,
): x is SuccessResult<TSuccess> => {
  return x._kind === 'success';
};

export const isErrorCode = <
  TSuccess,
  TError extends string,
  NarrowError extends TError,
>(
  x: ActionResult<TSuccess, TError>,
  code: NarrowError,
): x is ErrorResult<NarrowError> => {
  return isErrorResult(x) && x.code === code;
};

export const isErrorResult = <TSuccess, TError extends string>(
  x: ActionResult<TSuccess, TError>,
): x is ErrorResult<TError> => {
  return x._kind === 'error';
};

export const buildError = <T extends string>(
  x: T,
  err?: unknown,
): ErrorResult<T> => {
  return {
    _kind: 'error',
    code: x,
    unpackedError: err ? unpackError(err) : undefined,
  };
};

export const buildSuccess = <T>(x: T): SuccessResult<T> => {
  return {
    _kind: 'success',
    payload: x,
  };
};

export const buildVoidSuccess = (): SuccessResult<void> => {
  return {
    _kind: 'success',
    payload: undefined,
  };
};

export async function wrapAsync<TSuccess>(
  f: () => Promise<TSuccess>,
  onError?: (error?: UnpackedError) => void,
): AsyncActionResult<TSuccess, 'unknown'>;
export async function wrapAsync<TSuccess, TError extends string>(
  f: () => AsyncActionResult<TSuccess, TError>,
  onError?: (error?: UnpackedError) => void,
): AsyncActionResult<TSuccess, TError>;
export async function wrapAsync<TSuccess, TError extends string>(
  f: () => Promise<TSuccess | ActionResult<TSuccess, TError>>,
  onError?: (error?: UnpackedError) => void,
): AsyncActionResult<TSuccess, TError | 'unknown'> {
  try {
    const result: TSuccess | ActionResult<TSuccess, TError> = await f();

    if (typeof result === 'object' && result != undefined && '_kind' in result)
      return result;
    else return buildSuccess(result as TSuccess);
  } catch (error) {
    const result = buildError('unknown', error);

    if (onError) {
      try {
        onError(result.unpackedError);
      } catch (_err) {
        //catch any issue in the error handler
        //to avoid interfering with the normal flow,
        //but no need to handle it
        noop();
      }
    }

    return result;
  }
}
