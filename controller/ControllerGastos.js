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
  let topeMaximo = document.getElementById("topeMaximoInput").value;
  document.getElementById("topeMaximo").innerText = "Tope Máximo: " + topeMaximo;
})

let registrar = document.getElementById('registrar')
registrar.addEventListener('click', function () {
  document.getElementById('sectionListar').style.zIndex = '2'
  document.getElementById('sectionBuscar').style.zIndex = '2'
  document.getElementById('sectionRegistro').style.zIndex = '3'
})
let totalGasto = 0
let btnGuardar = document.getElementById('btnGuardar')
btnGuardar.addEventListener('click', () => {
  let cateSeleccionada = document.getElementById('opciones');
  let fcategoria = cateSeleccionada.value;
  let fdescripcion = document.getElementById('fdescripcion').value;
  let fvalor = parseInt(document.getElementById('fvalor').value);
  totalGasto += fvalor
  console.log(totalGasto)
  console.log(fcategoria)
  document.getElementById('opciones').value = ''
  document.getElementById('fdescripcion').value = ''
  document.getElementById('fvalor').value = ''
  let gasto = {
    id: Math.random() * 10,
    categoria: fcategoria,
    descripcion: fdescripcion,
    valor: fvalor
  }
  if (fvalor >= 1000) {
    gastos.push(gasto)

  } else {
    alert("El gasto debe ser mayor o igual a $1000")
  }

  let topeMaximo = document.getElementById("topeMaximoInput").value;
  let valorTopeMaximo = document.getElementById('topeMaximo')
  let porcentaje = (totalGasto/topeMaximo)*100
  if (porcentaje <= 25){
  valorTopeMaximo.style.backgroundColor = "green";
} else if (porcentaje <=50) {
    valorTopeMaximo.style.backgroundColor = "yellow";
  } else if (porcentaje <=75) {
    valorTopeMaximo.style.backgroundColor = "red";
  } else if (porcentaje <=90) {
    alert((porcentaje - totalGasto) + "falta para llegar al tope maximo ")
  }
})

let buscar = document.getElementById('buscar')
buscar.addEventListener('click', function () {
  document.getElementById('sectionListar').style.zIndex = '2'
  document.getElementById('sectionBuscar').style.zIndex = '3'
  document.getElementById('sectionRegistro').style.zIndex = '2'

  let filtroCategoria = document.getElementById('opciones').value

  gastos.forEach((gasto) => {
    if (filtroCategoria == gasto.categoria) {
      let categoria = document.createElement('p')
      let fecha = document.createElement('p')
      let valor = document.createElement('p')
      let usuario = document.createElement('p')
      categoria.textContent = gasto.categoria
      fecha.dataset
      valor.textContent = gasto.valor
      usuario.textContent = usuario
    }
  })
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


