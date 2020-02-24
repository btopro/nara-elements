import { html, LitElement } from 'lit-element';

export class NaraMenuBarLinks extends LitElement {
  createRenderRoot() {
    /**
     * Render template without shadow DOM. Note that shadow DOM features like 
     * encapsulated CSS and slots are unavailable.
     */
    return this;
  }
  render() {
    return html`
    <style>
      .nara-links-col .title-lp {
        color: #112e51;
        font-size: 20px;
        font-weight: bold;
        font-family: "Source Sans Pro","Helvetica Neue","Helvetica","Roboto","Arial",sans-serif;
      }
      
      .nara-links-col li a {
        color: black;
        text-decoration: none;
        font-weight: normal !important;
        font-size: 16px;
        line-height: 24px;
        font-family: "Source Sans Pro","Helvetica Neue","Helvetica","Roboto","Arial",sans-serif;
      }
      .nara-links-col li a:active,
      .nara-links-col li a:focus {
        outline: 2px grey dotted;
        outline-offset: 2px;
      }

      .nara-links-col li a:hover {
        text-decoration: underline;
      }

      .nara-links-col ul li {  
        margin-bottom: 6px !important;
        font-size: 16px;
        font-weight: normal;
        background: none !important;
        margin: 0px 0px 6px 0px !important;
        padding: 0 !important;
        line-height: 24px;
        list-style: none;
        font-family: "Source Sans Pro","Helvetica Neue","Helvetica","Roboto","Arial",sans-serif;
      }
      @media (max-width: 750px){
        .nara-links-grid {
          display: grid;
          grid-template-columns: 100%;
          grid-column-gap: 10px;
          margin-top: 50px;
        }
      }
      @media (min-width: 750px){
        .nara-links-grid{ 
          display: grid;
          grid-template-columns: 20% 20% 30% 30%;
        }
      }
      .nara-links-col{
        padding: 0 18px !important;
        overflow: hidden;
        font-weight: normal !important;
        width: 100%;
      }
    </style>
    <div class="nara-links-grid">
      <div class="nara-links-col">
        <ul>
          <li class="title-lp">Main Website</li>
          <li><a href="https://www.archives.gov">National Archives</a></li>
          <li class="title-lp">Visit Us</li>
          <li><a href="https://museum.archives.gov/">National Archives Museum</a></li>
          <li><a href="https://www.archives.gov/locations">See All Locations</a></li>
        </ul>
      </div>
        <!--DIV BREAK --> 
      <div class="nara-links-col">
        <ul>
          <li class="title-lp">For Research</li>      
          <li><a href="https://catalog.archives.gov/">Catalog</a></li>
          <li><a href="https://historyhub.history.gov/">History Hub</a></li>
          <li><a href="https://1940census.archives.gov/">1940 Census</a></li>
          <li><a href="https://founders.archives.gov/">Founders Online</a></li>
        </ul>  
        <ul> 
          <li class="title-lp">For Teachers</li> 
          <li><a href="https://www.docsteach.org/">DocsTeach</a></li>
          <li><a href="https://www.ourdocuments.gov/">Our Documents</a></li>
        </ul>
      </div>
    <!--DIV BREAK -->
      <div class="nara-links-col">
        <ul>
          <li class="title-lp">Presidential Libraries</li>
          <li><a href="https://hoover.archives.gov/">Herbert Hoover Library and Museum</a></li>
          <li><a href="https://fdrlibrary.archives.gov/">Franklin D. Roosevelt Library and Museum</a></li>
          <li><a href="https://www.trumanlibrary.gov/">Harry S. Truman Library and Museum</a></li>
          <li><a href="https://www.eisenhowerlibrary.gov/">Dwight D. Eisenhower Library and Museum</a></li>
          <li><a href="https://www.jfklibrary.archives.gov/">John F. Kennedy Library and Museum</a></li>
          <li><a href="https://www.lbjlibrary.archives.gov/">Lyndon B. Johnson Library and Museum</a></li>
          <li><a href="https://www.nixonlibrary.gov/">Richard Nixon Library and Museum</a></li>
        </ul>
      </div>
    <!--DIV BREAK -->
    <div class="nara-links-col">
        <ul>
          <li class="title-lp">Presidential Libraries</li>
          <li><a href="https://www.fordlibrarymuseum.gov/">Gerald R. Ford Library and Museum</a></li>
          <li><a href="https://www.jimmycarterlibrary.gov/">Jimmy Carter Library and Museum</a></li>
          <li><a href="https://www.reaganlibrary.gov/">Ronald Reagan Library and Museum</a></li>
          <li><a href="https://bush41library.tamu.edu/">George Bush Library and Museum</a></li>
          <li><a href="https://www.clintonlibrary.gov/">William J. Clinton Library and Museum</a></li>
          <li><a href="https://www.georgewbushlibrary.smu.edu/">George W. Bush Library and Museum</a></li>
          <li><a href="https://www.obamalibrary.gov/#">Barack Obama Library</a></li>
        </ul>
      </div>
  </div>
    `;
  }
}
window.customElements.define('nara-menu-bar-links', NaraMenuBarLinks);
