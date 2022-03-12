export default class ParagraphComponent extends HTMLParagraphElement{
    constructor(){
        super();
    }

    connectedCallBack(){
        console.log("connected");
    }
    disconnectedCallBack(){
        console.log("disconnected");
    }   
    adoptedCallback(){
        console.log("adopted");
    }
}
