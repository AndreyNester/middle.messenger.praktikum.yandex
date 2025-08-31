import "./styles.scss";
import regsiterPageTemplate from "./registerPage.hbs?raw";
import Handlebars from "handlebars";

Handlebars.registerPartial("registerPage", regsiterPageTemplate);
