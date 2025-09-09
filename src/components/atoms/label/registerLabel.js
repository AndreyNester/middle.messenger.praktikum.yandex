import labelTemplate from "./label.hbs?raw";
import Handlebars from "handlebars";
import "./styles.scss";

Handlebars.registerPartial("label", labelTemplate);
