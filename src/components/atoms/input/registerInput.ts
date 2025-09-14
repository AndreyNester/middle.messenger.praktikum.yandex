import "./styles.scss";
import inputTemplate from "./input.hbs?raw";
import Handlebars from "handlebars";

Handlebars.registerPartial("input", inputTemplate);
