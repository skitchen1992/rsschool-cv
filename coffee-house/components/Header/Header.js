import './Header.scss';

class Header {
    constructor(parentSelector) {
        this.parent = document.querySelector(parentSelector);
    }

    createElement() {
        const element = document.createElement('header');
        element.classList.add("header")

        element.innerHTML = `
            <div class="logo">
                <img src="../../public/logo.svg" alt="Logo">
            </div>
            <nav class="nav">
              <a class="a" href="/favorite">Favorite coffee</a>
              <a class="a" href="/about">About</a>
              <a class="a" href="/mobile_app">Mobile app</a>
              <a class="a" href="/contact_us">Contact us</a>
            </nav>
            <div class="menu">
            </div>
            `;

        return element;
    }

    render() {
        this.parent.append(this.createElement());
    }
}

export default Header;
