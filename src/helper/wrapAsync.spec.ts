import { describe, expect, it } from '@jest/globals';
import assert from 'assert/strict';
import {
  buildError,
  buildSuccess,
  isErrorResult,
  isSuccessResult,
  wrapAsync,
} from './wrapAsync';

describe('build ActionResult helpers', () => {
  it('should populate error fields correctly with unknown', () => {
    const code = 'test';
    const err = buildError(code);
    expect(err._kind).toBe('error');
    expect(err.code).toBe(code);
    expect(err.unpackedError).toBeUndefined();
  });

  it('should populate success fields correctly', () => {
    const payload = {
      field1: 'test',
    };
    const err = buildSuccess(payload);
    expect(err._kind).toBe('success');
    expect(err.payload).toMatchObject(payload);
  });
});

describe('ActionResult type guards', () => {
  it('should evaluate error results correctly', () => {
    const err = buildError('test');
    expect(isErrorResult(err)).toBe(true);
    expect(isSuccessResult(err)).toBe(false);
  });

  it('should evaluate success results correctly', () => {
    const err = buildSuccess('test');
    expect(isErrorResult(err)).toBe(false);
    expect(isSuccessResult(err)).toBe(true);
  });
});

describe('wrapAsync', () => {
  it('should return the wrapped successful result', async () => {
    const f = async () => {
      return Promise.resolve('test');
    };
    const result = await wrapAsync(f);

    assert(result._kind === 'success');
    expect(result.payload).toBe('test');
  });

  it('should send through the successful result', async () => {
    const f = async () => {
      return Promise.resolve(buildSuccess('test'));
    };
    const result = await wrapAsync(f);

    assert(result._kind === 'success');
    expect(result.payload).toBe('test');
  });

  it('should send through the error result', async () => {
    const f = async () => {
      const err = new ReferenceError('testing');
      return await Promise.resolve(buildError('test', err));
    };
    const result = await wrapAsync(f);

    assert(result._kind === 'error');
    assert(result.unpackedError?.name === 'ReferenceError');
    assert(result.unpackedError?.message === 'testing');
    expect(result.code).toBe('test');
  });

  it('should wrap unhandled error into unknown', async () => {
    const result = await wrapAsync(async () => {
      await Promise.resolve('test');
      throw new Error('test');
    });

    assert(result._kind === 'error');
    expect(result.code).toBe('unknown');
  });
});
