import { html, css, LitElement } from 'lit-element';
import '@lrnwebcomponents/simple-modal/lib/simple-modal-template.js';

export class NaraBrandingBar extends LitElement {
  /**
   * LitElement render styles
   */
  static get styles() {
    return css`
      :host {
        --nara-branding-bar-text-color: #000;
        display: block;
        padding: 25px;
        color: var(--nara-branding-bar-text-color);
      }
      button {
        display: inline-block;
        text-decoration: none;
        font-family: 'Source Sans Pro', 'Helvetica Neue', 'Helvetica', 'Roboto', 'Arial', sans-serif;
        text-align: left;
        outline: none;
        font-size: 14px;
        border: solid 1px #f1f1f1;
        border-radius: 5px;
        height: auto !important;
        background-color: transparent !important;
        color: black;
        font-weight: normal;
        padding: 5px 5px !important;
        margin: 7px 0px !important;
        line-height: 1em !important;
        vertical-align: top;
      }
      nara-logo {
        --nara-logo-width: 230px;
        --nara-logo-height: 30px;
        display: inline-block;
      }
      nara-logo:not(:defined) {
        width: 230px;
        height: 30px;
        display: inline-block;
      }
      simple-modal-template {
        --simple-modal-titlebar-color: black;
        --simple-modal-titlebar-background: #FFFFFF;
        --simple-modal-header-color: black;
        --simple-modal-header-background: #FFFFFF;
        --simple-modal-content-container-color: black;
        --simple-modal-content-container-background: #FFFFFF;
        --simple-modal-titlebar-button-border: 1px solid grey;
        --simple-modal-titlebar-button-padding: 2px;
        --simple-modal-titlebar-button-outline: 2px dotted grey;
        --simple-modal-titlebar-button-outline-offset: 2px;
        --simple-modal-titlebar-icon-width: 25px;
        --simple-modal-titlebar-icon-height: 25px;
      }
    `;
  }

  /**
   * LitElement / popular convention
   */
  static get properties() {
    return {
      title: { type: String },
      exploreText: { type: String, attribute: 'explore-text' },
    };
  }

  /**
   * HTMLElement
   */
  constructor() {
    super();
    this.title = 'US National Archives';
    this.exploreText = 'Explore our Websites';
    // dynamic imports ensure things load faster
    setTimeout(() => {
      import('@nara/nara-logo/nara-logo.js');      
    }, 0);
  }

  /**
   * LitElement properties and shadowRoot ready
   */
  firstUpdated() {
    this.shadowRoot
      .querySelector('[id="smt1"]')
      .associateEvents(this.shadowRoot.querySelector('[controls="smt1"]'));
  }

  /**
   * LitElement render
   */
  render() {
    return html`
      <nara-logo format="horizontal"></nara-logo>
      <button @click="${this.clickEvent}" class="collapsible-mxg" controls="smt1">${this.exploreText}</button>
      <simple-modal-template id="smt1">
        <slot slot="content"></slot>
      </simple-modal-template>
    `;
  }

  /**
   * Notice the click event and redirect it to a specialized event we have
   * @param {Event} e 
   */
  clickEvent() {
    // Events always travel up, properties always travel down
    // this custom message will be registered on the tag
    // the parent can then set an event listener for this custom event
    // this helps us form an internal API / converation between our elements
    // so that they can pass data and user actions
    this.dispatchEvent(new CustomEvent('nara-branding-modal-open'));
  }
}
window.customElements.define('nara-branding-bar', NaraBrandingBar);
