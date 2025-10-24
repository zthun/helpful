export type ZMutable<T> = {
  -readonly [K in keyof T]: T[K];
};

export type ZMutableKeys<T, K extends keyof T> = Omit<T, K> & {
  -readonly [P in K]: T[P];
};
