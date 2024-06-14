const sleep = (ms: number): Promise<void> => {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
};

export const retryPromiseWithDelay = async <T>(
  promise: () => Promise<T>,
  delay: number,
  retries: number = 0,
): Promise<T> => {
  try {
    const res = await promise();
    return res;
  } catch (error) {
    if (retries === 0) return Promise.reject(error);
    await sleep(delay);
    return retryPromiseWithDelay(promise, delay, retries - 1);
  }
};
