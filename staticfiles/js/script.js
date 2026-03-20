// mobile menu

const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");

menu.onclick = () => {

navLinks.classList.toggle("show");

};

// typing animation

const text = ["Django Developer","Python Programmer","Web Designer"];

let i=0;
let j=0;
let current="";
let isDeleting=false;

function type(){

current = text[i];

if(isDeleting){

j--;

}else{

j++;

}

document.querySelector(".typing").textContent = current.substring(0,j);

if(!isDeleting && j === current.length){

isDeleting = true;

setTimeout(type,1000);

return;

}

if(isDeleting && j === 0){

isDeleting=false;

i++;

if(i===text.length){

i=0;

}

}

setTimeout(type,100);

}

type();


// modal

function openModal(title){

document.getElementById("modal").style.display="flex";
document.getElementById("modalTitle").innerText=title;

}

function closeModal(){

document.getElementById("modal").style.display="none";

}