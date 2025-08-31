import "./styles/reset.css";
import "./utils/classnames";

/////////////////////////////////////////////////////////////////
/////////// Подключаем слои Atomic Design ///////////////////////
import "./components/atoms/register";
import "./components/molecules/register";
import "./components/organism/register";
import "./components/templates/register";
/////////////////////////////////////////////////////////////////

import App from "./App";

async function render() {
  // const template = await loadTemplate("/src/templates/hela.hbs");
  const html = renderErrorPage({});

  document.querySelector("#app").innerHTML = html;
}

render();

document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
  app.render();
});
