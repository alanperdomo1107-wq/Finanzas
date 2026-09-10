import { Movimiento } from "../clases/movimientos.js";
import { GestorMovimientos } from "../gestores/gestorMovimientos.js";
let gestorMovimientos = new GestorMovimientos;

let categorias = JSON.parse(localStorage.getItem("categoriasGuardadas"));
console.log(categorias);
if(!categorias){
    categorias = [];
}
let selectCategoria = document.getElementById("categoriaMovimiento");
document.addEventListener("DOMContentLoaded",function(){
    for(let i = 0; i< categorias.length ; i++){
        selectCategoria.innerHTML += '<option>'+ categorias[i] + '</option>'
    }
})

let agregarCategoria = document.getElementById('crearCategoria');

agregarCategoria.addEventListener("click",function(){
        let categoria = document.getElementById("categoriaAgregada").value;
        categorias.push(categoria);
        localStorage.setItem("categoriasGuardadas",JSON.stringify(categorias));
        borrar(2);
})


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
    borrar(1);
    
}

function borrar(numero){
    if(numero == 1){
        document.getElementById('tipoMovimiento').value = '';
        document.getElementById('inputfecha').value = '';
        document.getElementById('inputmonto').value = '';
        document.getElementById('categoriaMovimiento').value = '';
        document.getElementById('inputdescripcion').value = '';
    }
    else if( numero == 2){
        document.getElementById("categoriaAgregada").value = '';
    }
}