abstract class Notification {
  private wrapper: HTMLDivElement;

  constructor(id: string) {
    this.wrapper = document.querySelector(id) as HTMLDivElement;
  }

  setMessage(message: string) {
    this.wrapper.innerText = message;
  }

  hide() {
    this.wrapper.classList.add("hidden");
    this.wrapper.innerText = "";
  }

  show() {
    this.wrapper.classList.remove("hidden");

    new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.hide());
      }, 1000);
    }).then(() => {
      console.log("Finished");
    });
  }
}

export default Notification;
