import './styles/index.scss'
import Button from "./components/Button/Button.js";
import MenuItem from "./components/MenuItem/MenuItem.js";

const addElement = (parentSelector, element) => {
    const parent = document.querySelector(parentSelector);
    parent.append(element);
}

const createImgElement = (src, className, alt) => {
    const img = document.createElement('img');
    img.src = src;
    img.className = className;
    img.alt = alt;

    return img;
}


window.addEventListener('DOMContentLoaded', function () {
    new MenuItem(".menu", "Menu", "./public/coffee-cup.svg", "coffee-cup").render();


    new Button("primary", ".wrapper", "Menu").render();

    new Button("icon_dark", ".slider", "", "./public/arrow-left.svg").render();
    const imgGlass = createImgElement("./public/coffee-slider-1.svg", "glass", "glass");
    addElement(".slider", imgGlass);
    new Button("icon_dark", ".slider", "", "./public/arrow-right.svg").render();

    // new Button("secondary", "#app", "menu").render();
    //new Button("icon_dark", ".slider", "", "./public/arrow-right.svg").render();


});
