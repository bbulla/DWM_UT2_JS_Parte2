const botonCambiarTexto = document.getElementById("botonCambiarTexto");

botonCambiarTexto.addEventListener("click", function() {
    const textoNuevo = "Texto cambiado";
    cambiarTexto(textoNuevo);
});

function cambiarTexto(texto) {
    const parrafo = document.querySelector("p");
    parrafo.textContent = texto;
}


const botonInsertarElemento = document.getElementById("botonInsertarElemento");

botonInsertarElemento.addEventListener("click", function() {
    const elementoAInsertar = document.getElementById("elementoAIngresar").value;
    insertarElementoALaLista(elementoAInsertar);
    document.getElementById("elementoAIngresar").value = ""; 
});

function insertarElementoALaLista(texto) {
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = texto;
    document.querySelector("ul").appendChild(nuevoElemento);
}

const botonEliminarUltimoElemento = document.getElementById("botonEliminarUltimoElemento");

botonEliminarUltimoElemento.addEventListener("click", function(){
    eliminarUltimoElemento();
});

function eliminarUltimoElemento(){
    const lista = document.querySelector("ul");
    if (lista.lastElementChild) {
        lista.removeChild(lista.lastElementChild);
    }
}

const botonMostrarOcultar = document.getElementById("botonMostrarOcultar");

botonMostrarOcultar.addEventListener("click", function(){
    mostrarOcultarElemento();
});

function mostrarOcultarElemento(){
    const elemento = document.getElementById("elementoParaOcultarMostrar");
    if (elemento.style.display === "none") {
        elemento.style.display = "block";
    } else {
        elemento.style.display = "none";
    }
}       


const botonIncrementaContador= document.getElementById("botonIncrementaContador");
const contador = document.getElementById("contador");

botonIncrementaContador.addEventListener("click", function(){
    incrementarContador();
});

function incrementarContador(){
    let numeroContador = parseInt(contador.textContent);
    numeroContador += 1;
    contador.textContent = numeroContador.toString();
}