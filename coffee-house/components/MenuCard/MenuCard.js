import './MenuCard.scss';

class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.classes = classes;
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const element = document.createElement('div');

        if (this.classes.length === 0) {
            console.log(this.classes.length === 0)
            this.classes = "menu__item";
            element.classList.add(this.classes);
        } else {
            this.classes.forEach(className => element.classList.add(className));
        }

        element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <div>
                    <h3 class="h3 mt-20">${this.title}</h3>
                    <p class="medium mt-12">${this.descr}</p>
                    <p class="h3">${this.price}</p>
                </div>
            `;
        this.parent.append(element);
    }
}

export default MenuCard;
