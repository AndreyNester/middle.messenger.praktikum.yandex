import "./style.scss";
import Handlebars from "handlebars";
import { renderButton } from "./components/atoms/button/renderButton.js";

async function loadTemplate(url) {
  const res = await fetch(url);
  const text = await res.text();
  return Handlebars.compile(text);
}

async function render() {
  // const template = await loadTemplate("/src/templates/hela.hbs");
  const html = renderButton({});

  document.querySelector("#app").innerHTML = html;
}

render();
