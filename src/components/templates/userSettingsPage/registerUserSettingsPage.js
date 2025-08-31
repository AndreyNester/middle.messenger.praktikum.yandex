import "./styles.scss";
import userSettingsPageTemplate from "./userSettingsPage.hbs?raw";
import Handlebars from "handlebars";

Handlebars.registerPartial("userSettingsPage", userSettingsPageTemplate);
