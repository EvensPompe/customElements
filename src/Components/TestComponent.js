 export default class TestComponent extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.append(TestComponent.template.content.cloneNode(true));
    }
}

TestComponent.template = document.createElement("template");

TestComponent.template.innerHTML = `
<style>
    div {
        background: red;
    }
    p {
        font-weight: bold;
        color: blue;
    }
</style>
<div>
    <p>testing custom web components</p>
    <p>testing</p>
</div>   
`;
