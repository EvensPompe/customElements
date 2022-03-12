import './index.html';
import "./css/index.css";
import "./scss/index.scss";
import TestComponent from './Components/TestComponent';
import OtherComponent from './Components/OtherComponent';
import ParagraphComponent from './Components/ParagraphComponent';

document.addEventListener("DOMContenLoaded",async ()=>{
     const res = await fetch("/api/all");

})

customElements.define("other-component",OtherComponent);
customElements.define("test-component",TestComponent);
customElements.define("paragraph-component",ParagraphComponent, {extends : "p"});
