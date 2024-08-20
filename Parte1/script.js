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

