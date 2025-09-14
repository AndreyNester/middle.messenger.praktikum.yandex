import "./styles.scss";
import errorPageTemplate from "./errorPage.hbs?raw";
import Handlebars from "handlebars";

Handlebars.registerPartial("errorPage", errorPageTemplate);
