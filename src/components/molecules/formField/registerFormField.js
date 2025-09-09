import "./styles.scss";
import formFieldTemplate from "./formField.hbs?raw";
import Handlebars from "handlebars";

Handlebars.registerPartial("formField", formFieldTemplate);
