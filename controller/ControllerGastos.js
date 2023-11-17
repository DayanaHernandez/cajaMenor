import { gastos } from "../model/ModelGastos.js";
console.log(gastos);

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
// Tope Maximo
var btnAsignar = document.getElementById("btnAsignar");
btnAsignar.addEventListener("click", () => {
  let prueba = document.getElementById("topeMaximoInput").value;
  document.getElementById("topeMaximo").innerText = "Tope Máximo: " + prueba;
  
  // let porcentaje = (contador/prueba) *100
  // if(porcentaje)
})

let registrar = document.getElementById('registrar')
registrar.addEventListener('click', function () {
  document.getElementById('sectionListar').style.zIndex = '2'
  document.getElementById('sectionBuscar').style.zIndex = '2'
  document.getElementById('sectionRegistro').style.zIndex = '3'
})
let btnGuardar = document.getElementById('btnGuardar')
btnGuardar.addEventListener('click', () => {
  let contador
  let fcategoria = document.getElementById('fcategoria').value
  let fdescripcion = document.getElementById('fdescripcion').value
  let fvalor = document.getElementById('fvalor').value
  let gasto = {
    id: Math.random() * 10,
    categoria: fcategoria,
    descripcion: fdescripcion,
    valor: fvalor
  }
  gastos.push(gasto)
  contador += fvalor
  console.log(contador)

})

let buscar = document.getElementById('buscar')
buscar.addEventListener('click', function () {
  document.getElementById('sectionListar').style.zIndex = '2'
  document.getElementById('sectionBuscar').style.zIndex = '3'
  document.getElementById('sectionRegistro').style.zIndex = '2'
})

let listar = document.getElementById('listar')
listar.addEventListener('click', function () {
  document.getElementById('sectionListar').innerHTML = ''//formateador de codigo 
  document.getElementById('sectionListar').style.zIndex = '3'
  document.getElementById('sectionBuscar').style.zIndex = '2'
  document.getElementById('sectionRegistro').style.zIndex = '2'
  //Siempre se debe de trabajar con una funcion dentro del metodo
  gastos.map((gasto) => {
    let categoria = document.createElement('p')
    let descripcion = document.createElement('p')
    let valor = document.createElement('p')
    let card = document.createElement('article')
    categoria.textContent = gasto.categoria
    descripcion.textContent = gasto.descripcion
    valor.textContent = gasto.valor
    card.classList.add('card')
    card.append(categoria, descripcion, valor)
    document.getElementById('sectionListar').append(card)
  })
})


