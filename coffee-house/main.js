import './styles/index.scss'
import Button from "./components/Button/Button.js";
import Header from "./components/Header/Header.js";
import MenuItem from "./components/MenuItem/MenuItem.js";


window.addEventListener('DOMContentLoaded', function () {

    new Header("#app").render();
    new MenuItem(".menu", "Menu", "./public/coffee-cup.svg", "coffee-cup").render();


    // new Button("primary", "#app", "menu").render();
    // new Button("secondary", "#app", "menu").render();
    // new Button("icon_dark", "#app", "", "./public/arrow-right.svg").render();
    // new Button("icon_light", "#app", "", "./public/arrow-right.svg").render();


});
