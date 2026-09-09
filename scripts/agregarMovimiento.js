import { Movimiento } from "../clases/movimientos.js";
import { GestorMovimientos } from "../gestores/gestorMovimientos.js";
let gestorMovimientos = new GestorMovimientos;


document.addEventListener('DOMContentLoaded', function(){

let crearMovimiento = document.getElementById("crearMovimiento");
crearMovimiento.addEventListener('click',function(){
    agregarMovimiento();
})
})

function agregarMovimiento(){

    let movimiento = new Movimiento(
        
        document.getElementById('tipoMovimiento').value,
        document.getElementById('inputfecha').value,
        document.getElementById('inputmonto').value,
        document.getElementById('categoriaMovimiento').value,
        document.getElementById('inputdescripcion').value,
     
        
    )
    console.log(movimiento);

    gestorMovimientos.agregarMovimiento(movimiento);
    
}