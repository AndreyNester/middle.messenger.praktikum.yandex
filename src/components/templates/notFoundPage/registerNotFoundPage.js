import "./styles.scss";
import notFoundPageTemplate from "./notFoundPage.hbs?raw";
import Handlebars from "handlebars";

Handlebars.registerPartial("notFoundPage", notFoundPageTemplate);
