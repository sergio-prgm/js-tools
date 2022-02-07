export default class NoteJS {
  async getJS() {

    //  VARIABLES 
const NOTE_TITLE = document.querySelector("input#note-title");
const NOTE_CONTENT = document.querySelector("textarea#note-content");
const BTN_OK = document.querySelector("button.btn-note");
const NOTE_SECTION = document.querySelector("section#note-section");

let span = document.getElementsByClassName("close")[0];


//  FUNCIONES
//  Genera la tarjeta donde va la nota y el modal. Este último empieza con display: none desde la clase de CSS. 
function creaNota() {
    let newArticle = document.createElement('article')
    let title = document.createElement('h3')
    let content = document.createElement('p')
    let btnDel = document.createElement('button')

    let modal = document.createElement('div')
    let modalDialog = document.createElement('div')
    let modalContent = document.createElement('div')

    let modalHeader = document.createElement('div')
    let btnClose = document.createElement('button')
    let modalTitle = document.createElement('h5')

    let modalText = document.createElement('p')

    let btnEdit = document.createElement('button')
    
    title.innerText = NOTE_TITLE.value;
    content.innerText = NOTE_CONTENT.value;
    newArticle.className = 'grid-article';
    newArticle.id = title.innerText;
    btnDel.innerText = 'Borrar';
    btnDel.id = 'btnDel';

    modal.className = 'modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto'
    modalDialog.className = 'modal-dialog relative w-auto pointer-events-none'
    modalContent.className = 'modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current'

    modalHeader.className = 'modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md'
    btnClose.className = 'btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus: opacity-100 hover:text-black hover:opacity-75 hover:no-underline';
    btnClose.innerHTML = '&times;';
    modalTitle.innerText = NOTE_TITLE.value;
    modalTitle.className = 'text-xl font-medium leading-normal text-gray-800'

    modalText.innerText = NOTE_CONTENT.value;
    modalText.className = 'modal-body relative p-4'
    btnEdit.innerText = 'Editar';
    btnEdit.id = 'btnEdit';

    newArticle.append(title, content, btnDel);
    NOTE_SECTION.append(newArticle);

    modalHeader.append(modalTitle, btnClose)
    modalContent.append(modalHeader, modalText, btnEdit);
    modalDialog.append(modalContent)
    modal.append(modalDialog);
    NOTE_SECTION.append(modal);

    NOTE_TITLE.value = '';
    NOTE_CONTENT.value = '';
}

//  EVENTOS
//  Crea la nota, alerta si el contenido de la nota es nulo y genera un título si no se le ha dado ninguno
BTN_OK.addEventListener('click', () => {

  if(NOTE_CONTENT.value !== '' && NOTE_TITLE.value !== ''){
    creaNota();
  }
  else if(NOTE_CONTENT.value == ''){
    alert('Debe rellenar la nota');
  }
  else if(NOTE_TITLE.value == ''){
    let sectionInt = document.querySelectorAll('article');
    let newTitle = sectionInt.length + 1;
    NOTE_TITLE.value = `Nota ${newTitle}`;
    creaNota();
  }
});

//  Muestra el modal cuando se clica en el article o en sus hijos (p y h3). También elimina la nota cuando se clica el btnDel
NOTE_SECTION.addEventListener('click', (event) => {
  if (event.target.tagName === 'ARTICLE'){
    let showModal = event.target.nextElementSibling;
    showModal.style.display = 'block';
  }
  if (event.target.parentNode.tagName === 'ARTICLE' && event.target.tagName === 'BUTTON') {
    // NOTE_SECTION.removeChild(event.target.parentNode);
    event.target.parentNode.style.display = 'none';
  }
  else  if (event.target.parentNode.tagName === 'ARTICLE') {
    let modalSibling = event.target.parentNode;
    let showModal = modalSibling.nextElementSibling;
    showModal.style.display = 'block';
  }
});

//  Oculta el modal cuando se clica en la X (span) o fuera del modal. También añade funcionalidad al botón editar.
//  ¡¡¡YA EDITA EL CONTENIDO DE DENTRO DEL MODAL Y AFECTA A LA NOTA ORIGINAL!!!
window.addEventListener('click', (event) => {
  if (event.target.matches('.modal')) {
    let modi = event.target;
    modi.style.display = 'none';
  }
  if (event.target.matches('.btn-close')) {
    let modiC = event.target.parentNode.parentNode;
    let modi = modiC.parentNode.parentNode;
    modi.style.display = 'none';
  }
  if (event.target.id === 'btnEdit') {
    let modalCont = event.target.parentNode;
    let btnEditar = event.target;
    let prevSib = btnEditar.previousSibling;

    if (btnEditar.innerText === 'Editar'){
      let editText = document.createElement('textarea');
      
      btnEditar.innerText = 'Aceptar';
      editText.className = 'textEdit';
      editText.value = prevSib.innerText;
      prevSib.style.display = 'none';
      btnEditar.parentNode.insertBefore(editText, btnEditar);
    } 
    else {
      let editText = prevSib;
      let textGB = prevSib.previousSibling;
      let modTit = modalCont.firstElementChild.nextElementSibling.innerText;
      let ogNote = document.getElementById(modTit);
      let ogContent = ogNote.getElementsByTagName('p')[0];

      btnEditar.innerText = 'Editar';
      textGB.innerText = editText.value;
      textGB.style.display = 'block';
      modalCont.removeChild(editText);
      ogContent.innerText = editText.value;
    }
  }
});
  }
}

//  Estado actual => hacer que funcione el editar texto (l. 129)
//  Falta => estilar las notas creadas, añadir espacio al modal, darle un poco de estilo en general a la página