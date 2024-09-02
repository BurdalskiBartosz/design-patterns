import { Observer } from "./Observer";

export type Subject<T> = {
  observers: Observer<T>[];

  addObserver: (observer: Observer<T>) => void;

  notifyObservers: (data: T) => void;
};
