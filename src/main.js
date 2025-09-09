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

document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
  app.render();
});
