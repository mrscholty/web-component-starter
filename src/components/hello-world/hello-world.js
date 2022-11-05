import {renderTemplate, tpl} from '../../common/html-renderer.js';

export default class HelloWorld extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const style = tpl`<style>
        :host {display: block}
        </style>`;
        renderTemplate(tpl`${style}<span>Hello world</span>`, this.shadowRoot);
    }

}

customElements.define('hello-world', HelloWorld);