import "./styles/reset.css";
// import "./styles/variables.scss";

import { renderButton } from "./components/atoms/button/renderButton.js";

async function render() {
  // const template = await loadTemplate("/src/templates/hela.hbs");
  const html = renderButton({ buttonText: "Автоуцвф" });

  document.querySelector("#app").innerHTML = html;
}

render();
