import { InputTypes } from "../enums";
import { Form } from "../lib/form";
import { tTodoValues } from "../types";

class AddTodoForm extends Form {
  static createInstance() {
    return new AddTodoForm();
  }

  static createForm() {
    const form = this.createInstance();
    form
      .addInput({
        type: InputTypes.text,
        id: "title",
        label: "Task title",
      })
      .addInput({
        type: InputTypes.textarea,
        id: "description",
        label: "Task content",
      })
      .addInput({
        type: InputTypes.date,
        id: "dateToEnd",
        label: "Deadline",
      });
    return form.init();
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    const values = this.getValues();
    this.addToList(values as tTodoValues);
  }

  addToList(todoValue: tTodoValues) {
    console.log(todoValue);
  }
}

export { AddTodoForm };
