// type ErrorResponse = { statusCode: number; error: string; message: string };

// const hasError = (res: ErrorResponse): res is ErrorResponse => {
//   return "error" in res;
// };

const get = <T>(key: string): Promise<T> =>
  fetch(key).then((res) => res.json());

const post = <T, S extends Record<string, unknown>>(
  key: string,
  data: S
): Promise<T> =>
  fetch(key, { method: "POST", body: JSON.stringify(data) }).then((res) =>
    res.json()
  );

export const request = { get, post };
