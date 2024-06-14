import { HttpException, HttpStatus } from '@nestjs/common';

export const UNKNOWN_ERROR = {
  name: 'UnknownError',
  message: 'An unknown error has occurred.',
  stack: '',
};

export const formatUnpackedError = (input?: UnpackedError, prefix?: string) => {
  if (!input) return '';
  else {
    const formattedPrefix = prefix ? `${prefix}: ` : '';
    const { name, statusCode, message, stack } = input;
    return `${formattedPrefix}name:${name} code:${statusCode} message:${message} stack:${stack}`;
  }
};

export interface UnpackedError {
  readonly name: string;
  readonly message: string;
  readonly stack: string;
  readonly statusCode: number;
}

export const unpackError = (maybeError: unknown): UnpackedError => {
  const { name, message, stack } =
    maybeError instanceof Error ? maybeError : UNKNOWN_ERROR;

  const httpStatus =
    maybeError instanceof HttpException
      ? maybeError.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

  return {
    name,
    message,
    stack: stack ?? '',
    statusCode: httpStatus,
  };
};
