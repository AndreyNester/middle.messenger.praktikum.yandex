import "./styles.scss";
import signInPageTemplate from "./signInPage.hbs?raw";
import Handlebars from "handlebars";

Handlebars.registerPartial("signInPage", signInPageTemplate);
