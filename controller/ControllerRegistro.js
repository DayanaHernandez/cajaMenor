import {registro} from "../model/ModelRegistro"


let registrar = document.getElementById('registrar')
registrar.addEventListener('click',function (){
   document.getElementById('sectionRegistro').style.zIndex ="3"
   document.getElementById('logo').style.zIndex="2"

   var valor = parseFloat(document.getElementById('valor').value)
   var categoria = document.getElementById('opcCategoria').value
   var descripcion = document.getElementById('descripcion').value

    registro.push ({valor,categoria,descripcion})
})