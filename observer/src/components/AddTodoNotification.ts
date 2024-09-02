import Notification from "../lib/Notification";
import { Observer } from "../lib/types/Observer";
import { Todo } from "../lib/types/Todo";

class AddTodoNotification extends Notification implements Observer<Todo> {
  update(data: Todo) {
    const message = `Task: ${data.title} has been added.`;
    this.setMessage(message);
    this.show();
  }
}

export default AddTodoNotification;
