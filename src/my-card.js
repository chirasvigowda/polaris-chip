import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Taylor Swift";
    this.image = "";
    this.description = "Taylor Swift is a singer as well as a songwriter who produced her first album in 2006. Since then she has produced 11 albums, and her album called 1989, released in 2014, is her best-selling album to date. Her most recent tour, the Eras Tour, has not only held concerts in the US but internationally as well. This tour has generated over 1 billion dollars in revenue, making it the highest-grossing concert tour of all time.";
    this.fancy = false; 

  }

  static get styles() {
    return css`
      .image1 {
        width: 300px;
        display: block;
        margin: 0 auto;
      }
      :host([fancy]) {
      display: block;
        background-color:  #FFFFE0;
        border: 2px #F6BE00;
        box-shadow: 10px 5px 5px grey;
}
      .card {
        width: 350px;
        height: 700px;
        padding: 8px; 
        background-color: lavender; 
        margin: 8px; 
        display: inline-block; 
        opacity: 0.8; 
        transition: 0.6s all ease-in-out; 
      }
      .title {
        font-size: 35px; 
        color: purple; 
        font-family: "Lucida Handwriting", Brush Script M7, Cursive; 
        margin: 8px; 
        text-align: center; 
      }
      .description {
        font-size: 14px;
        color: purple;
        margin: 25px;
        text-align: center;
      }
      .link{
        font-size: 20px;
        color: purple; 
      }
    `;
  }

  render() {
    return html`
      
      <div class="card">
        <h2 class="title">${this.title}</h2>
        <img src="${this.image}" class="image1" alt="$this.title}"/>
        <p class="description">${this.description}</p>
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Biography</summary>
        <div>
          <slot>${this.text}</slot>
        </div>
      </details>
      </div>  
      `;
  }
  // put this anywhere on the MyCard class; just above render() is probably good
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  static get properties() {
    return {
      title: {type: String },
      image: {type: String }, 
      description: {type: String },
      buttonTitile: {type: String, sttribute: "button-title "},
      fancy: {type: Boolean, reflect: true}
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
