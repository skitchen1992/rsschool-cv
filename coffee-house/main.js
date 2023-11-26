import './styles/index.scss'
import Button from "./components/Button/Button.js";
import LinkIcon from "./components/LinkIcon/LinkIcon.js";
import MenuCard from "./components/MenuCard/MenuCard.js";
import Tabs from "./components/Tabs/Tabs.js";

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
    const menu = document.getElementById('menu');
    const offer = document.getElementById('offer');
    const favorite = document.getElementById('favorite');
    const about = document.getElementById('about');
    const mobile = document.getElementById('mobile');

    if (window.location.pathname === "/menu") {
        menu.style.display = 'block';
        offer.style.display = 'none';
        favorite.style.display = 'none';
        about.style.display = 'none';
        mobile.style.display = 'none';
    } else {
        menu.style.display = 'none';
        offer.style.display = 'block';
        favorite.style.display = 'block';
        about.style.display = 'block';
        mobile.style.display = 'block';
    }

    new LinkIcon(".menu_button", "Menu", "./public/coffee-cup.svg", "menu").render();


    new Tabs(
        ".tabs_list",
    ).render();

    new MenuCard(
        "./public/coffee-1.svg",
        "coffee",
        'Irish coffee',
        'Fragrant black coffee with Jameson Irish whiskey and whipped milk',
        "$7.00",
        ".menu_list"
    ).render();
    new MenuCard(
        "./public/coffee-2.svg",
        "coffee",
        'Kahlua coffee',
        'Classic coffee with milk and Kahlua liqueur under a cap of frothed milk',
        "$7.00",
        ".menu_list"
    ).render();
    new MenuCard(
        "./public/coffee-3.svg",
        "coffee",
        'Honey raf',
        'Espresso with frothed milk, cream and aromatic honey',
        "$5.50",
        ".menu_list"
    ).render();
    new MenuCard(
        "./public/coffee-4.svg",
        "coffee",
        'Ice cappuccino',
        'Cappuccino with soft thick foam in summer version with ice',
        "$5.00",
        ".menu_list"
    ).render();
    new MenuCard(
        "./public/coffee-5.svg",
        "coffee",
        'Espresso',
        'Classic black coffee',
        "$4.50",
        ".menu_list"
    ).render();
    new MenuCard(
        "./public/coffee-6.svg",
        "coffee",
        'Latte',
        'Espresso coffee with the addition of steamed milk and dense milk foam',
        "$5.50",
        ".menu_list"
    ).render();
    new MenuCard(
        "./public/coffee-7.svg",
        "coffee",
        'Latte macchiato',
        'Espresso with frothed milk and chocolate',
        "$5.50",
        ".menu_list"
    ).render();
    new MenuCard(
        "./public/coffee-8.svg",
        "coffee",
        'Coffee with cognac',
        'Fragrant black coffee with cognac and whipped cream',
        "$5.50",
        ".menu_list"
    ).render();


    new Button("primary", ".wrapper", "Menu").render();

    new Button("icon_dark", ".slider", "", "./public/arrow-left.svg").render();
    const imgGlass = createImgElement("./public/coffee-slider-1.svg", "glass", "glass");
    addElement(".slider", imgGlass);
    new Button("icon_dark", ".slider", "", "./public/arrow-right.svg").render();

    new Button("icon_light", ".social_media", "", "./public/twitter-light.svg").render();
    new Button("icon_light", ".social_media", "", "./public/instagram-light.svg").render();
    new Button("icon_light", ".social_media", "", "./public/facebook-light.svg").render();

    //new Button("secondary", ".button-group",).render();
    //new Button("icon_dark", ".slider", "", "./public/arrow-right.svg").render();


});
