"use strict"
// VARIABLES
const input = document.querySelector("input");
let inputValue = "";
const container = document.querySelector(".container");
const liContainer = document.querySelector(".li-container");
const button = document.querySelector(".btn-add");
const list = document.querySelector("ul");
const divEmpty = document.querySelector(".empty");
const divTaskCompleted = document.createElement("div");
container.appendChild(divTaskCompleted).classList.add("completed");
const completed = [];

//EVENT LISTENERS
input.addEventListener("input", () => inputValue = input.value);

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputValue !== "") {
    crearHtmlTareas();
    limpiarInput();
  } else {
    alert("Tienes que escribir algo");
  };
  allTaksCompleted();
});

//FUNCTIONS
function borrarTarea (e){
  e.target.parentElement.remove();
  allTaksCompleted();
};

function limpiarInput () {
  inputValue = '';
  input.value = '';
}

function allTaksCompleted () {
  if ( list.childNodes.length > 0){
    divEmpty.style.visibility = "hidden";
  }else{
    divEmpty.style.visibility = "visible";
  }
}

function crearHtmlTareas(){
  let elementLi = document.createElement("li");
      elementLi.innerHTML = `<p>${inputValue}</p>`;
      const btnRemove = document.createElement('button');
      btnRemove.innerText = 'X';
      btnRemove.classList.add('btn-remove');
      btnRemove.addEventListener('click', borrarTarea);
      elementLi.appendChild(btnRemove);
      list.appendChild(elementLi);
  }




