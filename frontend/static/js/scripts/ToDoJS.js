export default class ToDoJS {
  async getJS() {
        //  VARIABLES
    const LIST_DO = document.querySelector('ul#list-do');
    const LIST_X = document.querySelector('ul#list-X');
    const NEW_ITEM = document.getElementById('item');
    const SECTION_LIST = document.getElementById('section-list');

    //  Botones de la sección input
    const BTN_OK = document.querySelector('i#btn-OK');
    const BTN_X = document.querySelector('i#btn-X');


    //  FUNCIONES
    //  crean los botones de los elementos
    function btnItem(li) {
      let btnUp = document.createElement('i');
      btnUp.className = "fa-solid fa-angle-up";
      li.appendChild(btnUp);

      let btnDown = document.createElement('i');
      btnDown.className = "fa-solid fa-angle-down"
      li.append(btnDown);

      let btnDel = document.createElement('i');
      btnDel.className = "fa-solid fa-trash";
      li.append(btnDel);
    }

    //  ADDEVENT
    //  crea un nuevo elemento en la lista
    BTN_OK.addEventListener('click', () => {
      let nuevoItemValue = document.createElement('li');
      let divNuevoItem = document.createElement('div');
      let spanNuevoItem = document.createElement('span');

      divNuevoItem.className = 'btn-container';
      spanNuevoItem.textContent = NEW_ITEM.value;
      spanNuevoItem.className = 'item-container';
      nuevoItemValue.className = 'list-do-item';

      btnItem(divNuevoItem);

      nuevoItemValue.append(spanNuevoItem);
      nuevoItemValue.append(divNuevoItem);
      LIST_DO.append(nuevoItemValue);
      NEW_ITEM.value = '';
    })
    BTN_OK.addEventListener('mouseover', () => {
      BTN_OK.title = 'Agrega el elemento a la lista';
    })

    //  resetea por completo la lista
    BTN_X.addEventListener('click', () => {
      LIST_DO.textContent = '';
      LIST_X.textContent = '';
    })
    BTN_X.addEventListener('mouseover', () => {
      BTN_X.title = 'Elimina TODOS los elementos';
    })

    //  acciones de los botones item
    LIST_DO.addEventListener('click', (event) => {
      if (event.target.tagName == 'I') {
        if (event.target.className == "fa-solid fa-angle-up") {
          let div = event.target.parentNode;
          let li = div.parentNode;
          let prev = li.previousElementSibling;
          let ul = li.parentNode;
          if (prev) {
            ul.insertBefore(li, prev);
          }
        }
        if (event.target.className == "fa-solid fa-angle-down") {
          let div = event.target.parentNode;
          let li = div.parentNode;
          let next = li.nextElementSibling;
          let ul = li.parentNode;
          if (next) {
            ul.insertBefore(next, li);
          }
        }
        if (event.target.className == "fa-solid fa-trash") {
          let div = event.target.parentNode;
          let li = div.parentNode;
          let ul = li.parentNode;
          ul.removeChild(li);
        }
      }
      if (event.target.tagName == 'SPAN'){
        let span = event.target;
        let li = span.parentNode;
        LIST_X.appendChild(li);
        let btnRem = li.querySelector('div');
        li.removeChild(btnRem);
      }
    })

    //  evento para que al hacer hover se visualice la propiedad title
    LIST_DO.addEventListener('mouseover', (event) => {
      if (event.target.tagName == 'I') {
        if (event.target.className == "fa-solid fa-angle-up") {
          let butt = event.target;
          butt.title = 'sube el elemento';
        }
        if (event.target.className == "fa-solid fa-angle-down") {
          let butt = event.target;
          butt.title = 'baja el elemento';
        }
        if (event.target.className == "fa-solid fa-trash") {
          let butt = event.target;
          butt.title = '¡CUIDADO! Elimna el elemento';
        }  
      }
      if (event.target.tagName == 'LI') {
        let butt = event.target;
        butt.title = 'Marcar como realizado';
      }
    })
  }
}