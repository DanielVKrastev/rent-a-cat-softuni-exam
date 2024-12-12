import { html, render as baseRender } from "../../node_modules/lit-html/lit-html.js";

const rootEl = document.getElementById('root');

function render(templateResult){
    return baseRender(templateResult, rootEl);
}

export{
    baseRender,
    render,
    html
};