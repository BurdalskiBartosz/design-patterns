export type Observer<T> = {
  update: (data: T) => void;
};
