import { AddTodoForm } from "./components/AddTodoForm";
import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const formWrapper = document.querySelector("#form");

  const form = AddTodoForm.createForm();

  if (form) {
    formWrapper?.appendChild(form);
  }
});
