class FormElement {
    constructor(name, type, value) {
        this.name = name;
        this.type = type;
        this.value = value;
    }

    showName() {
        console.log(`Name: ${this.name}`);
    }

    getValue() {
        return this.value;
    }
}

class TextElement extends FormElement {
    constructor({name, type, value, placeholder}) {
        super(name, type, value);
        this.placeholder = placeholder;
    }

    createTextInput() {
        this.element = document.createElement("input");
        this.element.setAttribute("name", this.name);
        this.element.setAttribute("type", this.type);
        this.element.setAttribute("placeholder", this.placeholder);
        this.element.addEventListener("change", () => {
            this.value = this.element.value;
        })
    }
}

const newTextInput = new TextElement({
    name: "userName",
    type: "text",
    placeholder: "Your name"
})
newTextInput.createTextInput();
document.querySelector(".form").append(newTextInput.element);

class CheckBoxElement extends FormElement {
    constructor({type, checked}) {
        super(type);
        this.type = "checkbox";
        this.checked = checked;
    }

    createCheckBox() {
        this._el = document.createElement("input");
        this._el.setAttribute("type", this.type);
        this._el.checked = this.checked;
    }
}

const newCheckBox = new CheckBoxElement({
    checked: false
})
newCheckBox.createCheckBox();
document.querySelector(".form").append(newCheckBox._el);

class ButtonElement extends FormElement {
    constructor({text}) {
        super({});
        this.text = text;
    }

    createButton() {
        this._el = document.createElement("button");
        this._el.innerText = this.text;
    }
}

const newButton = new ButtonElement({
    text: "Register"
})
newButton.createButton();
document.querySelector(".form").appendChild(newButton._el);