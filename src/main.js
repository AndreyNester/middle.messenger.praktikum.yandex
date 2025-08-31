import "./styles/reset.css";
import "./utils/classnames";
import "./components/atoms/register";
import "./components/molecules/register";
import { renderAuthPage } from "./components/templates/authPage/renderAuthPage";

async function render() {
  // const template = await loadTemplate("/src/templates/hela.hbs");
  const html = renderAuthPage({});

  document.querySelector("#app").innerHTML = html;
}

render();
