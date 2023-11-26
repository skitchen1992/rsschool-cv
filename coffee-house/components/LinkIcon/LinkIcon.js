import './LinkIcon.scss';

class LinkIcon {
    constructor(parentSelector, label, iconPath, href) {
        this.parent = document.querySelector(parentSelector);
        this.label = label;
        this.iconPath = iconPath;
        this.href = href;
    }

    createElement() {
        const element = document.createElement('a');
        element.href = this.href;
        element.classList.add("link-icon")

        element.innerHTML = `
                <div class="link-icon__label">${this.label}</div>
                <img src="${this.iconPath}" alt="${this.alt}">
            `;

        return element;
    }

    render() {
        this.parent.append(this.createElement());
    }
}

export default LinkIcon;
