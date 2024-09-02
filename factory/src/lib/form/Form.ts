import { tIndex, tInputDataCreate } from "../../types";
import { IInput } from "./InputFactory/IInput";
import { InputFactory } from "./InputFactory/InputFactory";

abstract class Form {
  public inputs: IInput[];
  public form: HTMLFormElement | null;

  constructor() {
    this.inputs = [];
    this.form = null;
  }

  addInput(data: tInputDataCreate) {
    const input = InputFactory.create(data);
    this.inputs.push(input);
    return this;
  }

  getValues() {
    return this.inputs.reduce((previous, current) => {
      previous[current.id] = current.value;
      return previous;
    }, {} as tIndex);
  }

  init() {
    this.create();
    this.addListener();
    return this.form;
  }

  create() {
    this.form = document.createElement("form");
    this.form.classList.add("form");
    for (const input of this.inputs) {
      input.create();
      this.form.appendChild(input.element);
    }
    const button = document.createElement("button");
    button.innerHTML = "Add";
    this.form.appendChild(button);
  }

  addListener() {
    if (!this.form) return;
    this.form.addEventListener("submit", (e) => this.handleSubmit(e));
  }
  abstract handleSubmit(e: Event): void;
}

export { Form };
