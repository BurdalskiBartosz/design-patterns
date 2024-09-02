import AddTodoNotification from "./components/AddTodoNotification";
import Form from "./components/Form";
import { TodoList } from "./components/TodoList";
import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const form = Form.create("#tasks_form");

  const todoList = TodoList.create("#tasks");

  const addTodoNotification = new AddTodoNotification("#notification");

  form.addObserver(todoList);
  form.addObserver(addTodoNotification);
});
