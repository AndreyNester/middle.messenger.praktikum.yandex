import tml from "./button.hbs?raw";
import Handlebars from "handlebars";
import "./styles.scss";

export function renderButton(props = {}) {
  const template = Handlebars.compile(tml);
  return template(props);
}
