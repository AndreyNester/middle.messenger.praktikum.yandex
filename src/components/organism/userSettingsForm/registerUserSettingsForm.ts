import Handlebars from "handlebars";
import "./styles.scss";
import userSettingsFormTemplate from "./userSettingsForm.hbs?raw";

Handlebars.registerPartial("userSettingsForm", userSettingsFormTemplate);
