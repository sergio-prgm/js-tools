import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super()
    this.setTitle("To-Do")
  }

  async getHtml() {
    return `
    <h1 class="text-3xl my-4 font-semibold text-center">Lista de quehaceres</h1>

    <section id="section-input" class="flex justify-center content-center">

      <input class="form-control px-3 py-1.5 text-base font-normal test-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
      type="text" name="item" id="item" placeholder="Añade una nueva tarea flex-grow">

      <i id="btn-OK" class="fa-solid fa-plus text-xl cursor-pointer mx-1 ml-2 p-1 self-center"></i>

      <i id="btn-X" class="fa-solid fa-xmark text-xl cursor-pointer mx-1 p-1 self-center"></i>

    </section>

    <section id="section-list">
      <ul id="list-do"> 
      </ul>
      <ul id="list-X" class="line-through">
      </ul>
    </section>
    `
  }
}