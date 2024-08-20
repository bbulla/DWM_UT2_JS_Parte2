imagen = document.getElementById("imagen");
nombre = document.getElementById("nombre");

imagen.addEventListener("mouseover", (event) => {
    imagen.src = "https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01.jpg?w=2560&h=1920";
});

imagen.addEventListener("mouseout", (event) => {
    imagen.src = "https://www.ucu.edu.uy/imgnoticias/202309/W950_H580/3113.jpg";
});

nombre.addEventListener("focus", (event) => {
    nombre.style.border = "4px solid black";
}); 

nombre.addEventListener("focusout", (event) => {
    nombre.style.border = "1px solid black";
}); 


