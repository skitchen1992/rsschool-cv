import './Tabs.scss';

class Tabs {
    constructor(parentSelector, ...classes) {
        this.classes = classes;
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const element = document.createElement('ul');

        if (this.classes.length === 0) {
            this.classes = "tabs";
            element.classList.add(this.classes);
        } else {
            this.classes.forEach(className => element.classList.add(className));
        }

        element.innerHTML = `
                <li class="tab active">
                    <div class="tab__circle active">
                        <img src="../../public/cup.svg" alt="Icon 1">
                    </div>
                    <p>Coffee</p>
                </li>
                <li class="tab">
                    <div class="tab__circle">
                        <img src="../../public/kettle.svg" alt="Icon 2">
                    </div>
                    <p>Tea</p>
                </li>
                <li class="tab">
                    <div class="tab__circle">
                        <img class="tab__img" src="../../public/dessert.svg" alt="Icon 3">
                   </div>
                   <p>Dessert</p> 
                </li>
            `;
        this.parent.append(element);
    }
}

export default Tabs;
