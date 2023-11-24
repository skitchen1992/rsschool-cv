import './MenuItem.scss';

class MenuItem {
    constructor(parentSelector, label, iconPath, alt) {
        this.parent = document.querySelector(parentSelector);
        this.label = label;
        this.iconPath = iconPath;
        this.alt = alt;
    }

    createElement() {
        const element = document.createElement('div');
        element.classList.add("menu-item")

        element.innerHTML = `
                <div class="menu-item__label">${this.label}</div>
                <img src="${this.iconPath}" alt="${this.alt}">
            `;

        return element;
    }

    render() {
        this.parent.append(this.createElement());
    }
}

export default MenuItem;
