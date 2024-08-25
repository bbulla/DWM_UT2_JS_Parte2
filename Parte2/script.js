// ------------------ Filtros ----------------------------

const personas = ["Ana", "Juan", "María", "Carlos", "Laura", "Pedro", "Sofía"];

const lista = document.getElementById("listaDePersonas");
const input = document.getElementById("inputBusquedaPersonas");

function mostrarLista(listaPersonas) {
  lista.innerHTML = listaPersonas
    .map((persona) => `<li>${persona}</li>`)
    .join("");
}

function filtrarPersonas() {
  const busqueda = input.value.toLowerCase();
  const personasFiltradas = personas.filter((persona) =>
    persona.toLowerCase().includes(busqueda)
  );

  mostrarLista(personasFiltradas);
}

mostrarLista(personas);
input.addEventListener("input", filtrarPersonas);

// ------------------ Validación de formularios ------------------

const formulario = document.getElementById("formularioDeRegistro");
const nombre = document.getElementById("inputNombre");
const contraseña = document.getElementById("contraseña");
const email = document.getElementById("email");

const errorNombre = document.getElementById("errorNombre");
const errorContraseña = document.getElementById("errorContraseña");
const errorEmail = document.getElementById("errorEmail");

function validarInput(input, error, funcionValidadora) {
  const esValido = funcionValidadora(input.value);
  error.style.display = esValido ? "none" : "block";
  return esValido;
}

function validarNombre(nombre) {
  return !!nombre;
}

function validarContraseña(contraseña) {
  return contraseña.length >= 8;
}

function validarEmail(email) {
  const regexParaValidarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexParaValidarEmail.test(email);
}

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const esNombreValido = validarInput(nombre, errorNombre, validarNombre);
  const esContraseñaValida = validarInput(
    contraseña,
    errorContraseña,
    validarContraseña
  );
  const esEmailValido = validarInput(email, errorEmail, validarEmail);

  if (esNombreValido && esContraseñaValida && esEmailValido) {
    alert("Formulario enviado");
  }
});

nombre.addEventListener("input", () =>
  validarInput(nombre, errorNombre, validarNombre)
);

contraseña.addEventListener("input", () =>
  validarInput(contraseña, errorContraseña, validarContraseña)
);

email.addEventListener("input", () =>
  validarInput(email, errorEmail, validarEmail)
);
