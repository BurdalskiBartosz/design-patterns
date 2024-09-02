import { Observer } from "./types/Observer";
import { Subject } from "./types/Subject";
import { Todo } from "./types/Todo";

class FormSubject implements Subject<Todo> {
  observers: Observer<Todo>[];

  constructor() {
    this.observers = [];
  }

  addObserver = (observer: Observer<Todo>) => {
    this.observers.push(observer);
  };

  notifyObservers = (data: Todo) => {
    this.observers.forEach((observer) => observer.update(data));
  };
}

export default FormSubject;
