import { html, render } from "../lib/lit-html.js";

const template = () => html`
    <h1>Cats page</h1>
`;

export default function(){
    render(template());
}