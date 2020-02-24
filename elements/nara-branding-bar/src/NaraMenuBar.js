import { html, css, LitElement } from 'lit-element';

export class NaraMenuBar extends LitElement {
  /**
   * LitElement render styles
   * the :not(:defined) is a CSS trick for slow page loads to show nothing till its ready
   */
  static get styles() {
    return css`
    nara-branding-bar:not(:defined) {
      display: block;
      width: 300px;
      height: 80px;
      background-color: #FFFFFF;
    }
    `;
  }

  /**
   * HTMLElement
   */
  constructor() {
    super();
    // dynamic imports ensure things load faster but only use for elements
    // that are not mission critical. In this case, the branding bar is critcal
    // but has the modal in it which has a lot of code to make work
    // this ensures that when the team implements nara-menu-bar that it's ultra performant
    setTimeout(() => {
      import('./NaraBrandingBar.js');      
    }, 0);
  }

  /**
   * LitElement render
   */
  render() {
    return html`
    <nara-branding-bar @nara-branding-modal-open="${this.modalOpening}">
      <nara-menu-bar-links></nara-menu-bar-links>
    </nara-branding-bar>
    `;
  }

  /**
   * Showing off. This is the event activated when the user clicks on the button below
   * This demonstrates contextually loading things based on the needs of the user.
   * For example, if they never click on the menu to see more info the nara-menu-bar-links
   * will never be loaded. This optimizes delivery / assets that aren't needed aren't
   * delivered to the user. 
   */
  modalOpening() {
    // dynamically import the menu bar links definition when the user has clicked to see them
    import("./NaraMenuBarLinks.js");
  }
}
window.customElements.define('nara-menu-bar', NaraMenuBar);
