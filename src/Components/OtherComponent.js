export default class OtherComponent extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.append(OtherComponent.template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ["color", "bg-color"];
    }

    attributeChangedCallback(name, oldValue, newValue){
        switch (name) {
            case "color":
                this.shadowRoot.querySelector('p').style.color = newValue;
                break;

            case "bg-color":
                this.shadowRoot.querySelector('div').style.backgroundColor = newValue;
            break;
        }
    }

}

OtherComponent.template = document.createElement("template");

    OtherComponent.template.innerHTML = `
    <style>
        div {
            background: blue
        }
        p {
            font-weight: bold;
            color: yellow
        }
    </style>
    <div>
        <p>testing custom web components</p>
        <p>testing</p>
    </div>   
    `;
