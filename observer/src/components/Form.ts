import FormSubject from "../lib/FormSubject";

class Form extends FormSubject {
  private wrapper: HTMLFormElement;

  constructor(id: string) {
    super();
    this.wrapper = document.querySelector(id) as HTMLFormElement;
    this.addListener();
  }

  private addListener() {
    this.wrapper.addEventListener("submit", (e) => this.handleSubmit(e));
  }

  private handleSubmit(e: Event) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const title = formData.get("title") as string;

    this.notifyObservers({ title });
  }

  static create(id: string) {
    return new Form(id);
  }
}

export default Form;
