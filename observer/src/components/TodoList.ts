import { Observer } from "../lib/types/Observer";
import { Todo } from "../lib/types/Todo";

class TodoList implements Observer<Todo> {
  public todos: TodoItem[];
  private wrapper: HTMLDivElement;

  constructor(id: string) {
    this.todos = [];
    this.wrapper = document.querySelector(id) as HTMLDivElement;
  }

  static create(id: string) {
    return new TodoList(id);
  }

  update(data: Todo): void {
    this.clear();
    this.addTodo(data);
    this.render();
  }

  addTodo(data: Todo): void {
    this.todos.push(new TodoItem(data));
  }

  clear() {
    this.todos = [];
  }

  render(): void {
    const wrapper = document.createElement("div") as HTMLDivElement;

    this.todos.forEach((todo) => {
      const element = todo.createElement();
      wrapper.appendChild(element);
    });

    this.wrapper.appendChild(wrapper);
  }
}

class TodoItem {
  public title: string;

  constructor({ title }: { title: string }) {
    this.title = title;
  }

  createElement() {
    const html = document.createElement("div");
    html.innerText = `Task Title: ${this.title}`;
    return html;
  }
}

export { TodoList, TodoItem };
