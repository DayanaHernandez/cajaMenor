import { contrasenas } from "../model/ModelContrasenas.js";
console.log(contrasenas);

let btnIniciar = document.getElementById("btnIniciar");
btnIniciar.addEventListener("click", () => {
  console.log("iniciando sesión");
  let usuario = document.getElementById("usuario").value;
  let contrasena = document.getElementById("usuario").value;
  let correo = document.getElementById("usuario").value;
  console.log(usuario, contrasena, correo);
  // if (usuario == "Dayana") {
  //   if (contrasena == "dayana56") {
  //     if (correo == "dayanahernandezhincapie@gmail.com") {
  //       console.log("Inicio de sesion correcta");
  document.getElementById("spinner").style.display = "block";
  setTimeout(() => {
    document.getElementById("spinner").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("panel").style.display = "block";
  }, 3000);
  //     } else {
  //       console.log("Datos incorrectos");
  //     }
  //   } else {
  //     console.log("Datos incorrectos");
  //   }
  // } else {
  //   console.log("Datos incorrectos");
  // }
});

let cerrarSesion = document.getElementById("cerrarSesion");
cerrarSesion.addEventListener("click", () => {
  document.getElementById("login").style.display = "block";
  document.getElementById("panel").style.display = "none";
});

var btnAsignar = document.getElementById("btnAsignar");
btnAsignar.addEventListener("click", () => {
  let prueba = document.getElementById("topeMaximoInput").value;
  document.getElementById("topeMaximo").innerText = "Tope Maximo: " + prueba;
});


