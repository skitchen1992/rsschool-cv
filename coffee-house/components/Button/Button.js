import './Button.scss';

class Button {
    // variant = "primary | secondary | icon_dark | icon_light"
    constructor(variant = "primary",  parentSelector, label, iconPath) {
        this.variant = variant;
        this.label = label;
        this.iconPath = iconPath;
        this.parent = document.querySelector(parentSelector);
    }

    createImg() {
        const img = document.createElement('img');
        img.src = this.variant === "primary" ? "../../public/coffee-cup.svg" : this.iconPath;
        img.className = "logo";
        img.alt = "Coffee cup";

        return img;
    }

    createButton() {
        const element = document.createElement('button');

        if (this.variant === "primary") {
            element.classList.add("button-primary")
        }
        if (this.variant === "secondary") {
            element.classList.add("button-secondary")
        }
        if (this.variant === "icon_dark") {
            element.classList.add("button-icon_dark")
        }
        if (this.variant === "icon_light") {
            element.classList.add("button-icon_light")
        }


        element.innerHTML = `${this.label}`;

        return element;
    }

    render() {
        const buttonElement = this.createButton()
        const imgElement = this.createImg()

        if (this.variant === "primary") {
            buttonElement.addEventListener('mouseover', function () {
                buttonElement.append(imgElement)
            });

            buttonElement.addEventListener('mouseout', function () {
                buttonElement.removeChild(imgElement)
            });
        }

        if (this.variant === "icon_dark" || this.variant === "icon_light") {
            buttonElement.append(imgElement)
        }


        this.parent.append(buttonElement);
    }
}

export default Button;
