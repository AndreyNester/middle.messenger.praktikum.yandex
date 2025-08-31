import Handlebars from "handlebars";
import signInFormTemplate from "./signInForm.hbs?raw";
import "./styles.scss";

Handlebars.registerPartial("signInForm", signInFormTemplate);
