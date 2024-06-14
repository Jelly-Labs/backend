import { describe, it } from '@jest/globals';
import { NotFoundException } from '@nestjs/common';
import { unpackError } from './unpackError';

describe('UnpackedError', () => {
  const ERROR_MESSAGE = 'Testing out error';
  const doThrow = (input: 'generic' | 'notfound') => {
    if (input === 'generic') throw new Error(ERROR_MESSAGE);
    else throw new NotFoundException(ERROR_MESSAGE);
  };
  describe('unpackError', () => {
    it('should return generic error details', () => {
      try {
        doThrow('generic');
      } catch (err) {
        const x = unpackError(err);
        expect(x.name).toBe(Error.name);
        expect(x.statusCode).toBe(500);
        expect(x.message).toBe(ERROR_MESSAGE);
        expect(
          x.stack?.startsWith(
            `${Error.name}: ${ERROR_MESSAGE}\n    at ${doThrow.name}`,
          ),
        ).toBeTruthy();
      }
    });

    it('should return error details with appropriate status code', () => {
      try {
        doThrow('notfound');
      } catch (err) {
        const x = unpackError(err);
        expect(x.name).toBe(NotFoundException.name);
        expect(x.statusCode).toBe(404);
        expect(x.message).toBe(ERROR_MESSAGE);
        expect(
          x.stack?.startsWith(
            `${NotFoundException.name}: ${ERROR_MESSAGE}\n    at ${doThrow.name}`,
          ),
        ).toBeTruthy();
      }
    });
  });
});
