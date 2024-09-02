import { InputTypes } from "../../../enums";
import { tInputDataCreate } from "../../../types";
import { InputDate } from "./InputDate";
import { InputText } from "./InputText";
import { InputTextarea } from "./InputTextarea";

class InputFactory {
  static create({ type, id, label }: tInputDataCreate) {
    switch (type) {
      case InputTypes.text:
        return new InputText(id, label);
      case InputTypes.date:
        return new InputDate(id, label);
      case InputTypes.textarea:
        return new InputTextarea(id, label);
      default:
        return new InputText(id, (label = "deafult"));
    }
  }
}
export { InputFactory };
