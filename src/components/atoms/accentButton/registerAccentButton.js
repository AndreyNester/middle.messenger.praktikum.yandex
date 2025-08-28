import "./styles.scss";
import Handlebars from "handlebars";
import accentButtonTemplate from "./accentButton.hbs?raw";

Handlebars.registerPartial("accentButton", accentButtonTemplate);
