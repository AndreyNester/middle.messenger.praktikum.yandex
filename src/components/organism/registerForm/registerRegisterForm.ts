import Handlebars from "handlebars";
import "./styles.scss";
import registerFormTemplate from "./registerForm.hbs?raw";

Handlebars.registerPartial("registerForm", registerFormTemplate);
