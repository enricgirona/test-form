const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
let repEmail = document.getElementById("rep-email");
const dni = document.getElementById("dni");
const movil = document.getElementById("movil");
const mailFormat = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const dniFormat = /^(\d{8})([A-Z])$/;

form.addEventListener("submit", e => {
  e.preventDefault();
  validateForm();
});

nombre.onfocus = removeError = () => {
  nombre.className = "field";
  nombre.placeholder = "Nombre";
};

apellido.onfocus = removeError = () => {
  apellido.className = "field";
  apellido.placeholder = "Apellido";
};

email.onfocus = removeError = () => {
  email.className = "field";
  email.placeholder = "Email";
};

repEmail.onfocus = removeError = () => {
  repEmail.className = "field";
  repEmail.placeholder = "Repetir Email";
};

dni.onfocus = removeError = () => {
  dni.className = "field";
  dni.placeholder = "DNI";
};

movil.onfocus = removeError = () => {
  movil.className = "field";
  movil.placeholder = "Móvil";
};

function validateForm() {
  const nombreValue = nombre.value.trim();
  const apellidoValue = apellido.value.trim();
  const emailValue = email.value.trim();
  const repEmailValue = repEmail.value.trim();
  const dniValue = dni.value.trim();
  const movilValue = movil.value.trim();
  let nombreCheck = Boolean;
  let apellidoCheck = Boolean;
  let emailCheck = Boolean;
  let dniCheck = Boolean;
  let movilCheck = Boolean;

  if (nombreValue === "") {
    nombre.className = "field error";
    nombre.placeholder = "Rellene el campo con su nombre.";
    nombreCheck = false;
  } else {
    nombreCheck = true;
  }
  if (apellidoValue === "") {
    apellido.className = "field error";
    apellido.placeholder = "Rellene el campo con su apellido.";
    apellidoCheck = false;
  } else {
    apellidoCheck = true;
  }
  if (repEmailValue === "") {
    repEmail.className = "field error";
    repEmail.placeholder = "Rellene el campo con su email.";
    emailCheck = false;
  }
  if (emailValue === "") {
    email.className = "field error";
    email.placeholder = "Rellene el campo con su email.";
    emailCheck = false;
  } else if (mailFormat.test(emailValue) != true) {
    email.className = "field error";
    email.placeholder = "El formato no es válido";
    email.value = "";
    emailCheck = false;
  } else if (repEmailValue === "") {
    repEmail.className = "field error";
    repEmail.placeholder = "Rellene el campo con su email.";
    emailCheck = false;
  } else if (repEmailValue != emailValue) {
    repEmail.className = "field error";
    repEmail.placeholder = "El email debe coincidir.";
    repEmail.value = "";
    emailCheck = false;
  } else {
    emailCheck = true;
  }
  if (dniValue === "") {
    dni.className = "field error";
    dni.placeholder = "Rellene el campo con su DNI.";
    dniCheck = false;
  } else if (dniValue.length != 9) {
    dni.className = "field error";
    dni.placeholder = "El formato no es válido.";
    dni.value = "";
    dniCheck = false;
  } else if (dniFormat.test(dniValue.toUpperCase()) != true) {
    dni.className = "field error";
    dni.placeholder = "El formato no es válido.";
    dni.value = "";
    dniCheck = false;
  } else {
    dniCheck = true;
  }
  if (movilValue === "") {
    movil.className = "field error";
    movil.placeholder = "Rellene el campo con su móvil.";
    movilCheck = false;
  } else if (movilValue.length != 9) {
    movil.className = "field error";
    movil.placeholder = "El formato no es válido.";
    movil.value = "";
    movilCheck = false;
  } else if (movilValue.charAt() != 6 && movilValue.charAt() != 7) {
    movil.className = "field error";
    movil.placeholder = "El formato no es válido.";
    movil.value = "";
    movilCheck = false;
  } else {
    movilCheck = true;
  }

  if (nombreCheck && apellidoCheck && emailCheck && dniCheck && movilCheck) {
    alert(
      "Nombre:" +
        " " +
        nombreValue +
        "\n" +
        "Apellido:" +
        " " +
        apellidoValue +
        "\n" +
        "Email:" +
        " " +
        emailValue +
        "\n" +
        "DNI:" +
        " " +
        dniValue +
        "\n" +
        "Móvil:" +
        " " +
        movilValue
    );
  }
}
