function changeBg(){
    var scrollvalue = window.scrollY;
    var navbar = document.getElementById('nav');
    if (scrollvalue <= 10) {
        navbar. classList.remove('bgColor');
    } else {
        navbar. classList.add('bgColor');
    }
}

window.addEventListener('scroll', changeBg);

let modifi = document.getElementById('modifi');

function mostrarInput() {
    modifi.style.display = 'flex';
}

function enviarParrafo() {
    var nuevopa = document.getElementById('edit-acerca').value;
    var parra = document.getElementById('infoyo');
    parra.innerText = nuevopa
    modifi.style.display = 'none';
}

function cerrarInput() {
    modifi.style.display = 'none';
}

