import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super()
    this.setTitle("Note Taking")
  }

  async getHtml() {
    return `
    <h1>Note App</h1>
    <section id="input-section">
      <label for="note-title">Título de la nota:</label>
      <input type="text" name="note-title" id="note-title" placeholder="Nota 1" autofocusfdfs>
      <textarea name="note-content" id="note-content" rows="4" placeholder="Escribe tu nueva nota..."></textarea>
      <button class="btn-note">Agregar</button>
    </section>
    <section id="note-section" class="note-section">
  
    </section>
    <script src="jS/app.js"></script>
    `
  }
}