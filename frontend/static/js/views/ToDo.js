import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super()
    this.setTitle("To-Do")
  }

  async getHtml() {
    return `
    <section id="section-input">
    <h1>Lista de quehaceres</h1>
    <input type="text" name="item" id="item" placeholder="Añade una nueva tarea">
    <i id="btn-OK" class="fa-solid fa-plus"></i>
    <i id="btn-X" class="fa-solid fa-xmark"></i>
  </section>
  <section id="section-list">
    <ul id="list-X">
    </ul>
    <ul id="list-do">
    </ul>
  </section>
    `
  }
}