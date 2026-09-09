let movimientos = JSON.parse(localStorage.getItem('movimientosGuardados'));
let contenedorTablas = document.getElementById('contenedorTablas');
let selectEstadistica = document.getElementById('selectEstadistica');
let contenedorTotal = document.getElementById('total');

addEventListener("change",function(){

 switch(selectEstadistica.value){
    case 'ingresos':
        contenedorTablas.innerHTML = 
            `<h2>Ingresos Totales</h2>
        <table id="datos-tabla">
        <tr class="p-3">
            <th>Fecha</th>
            <th>Total</th>
            <th>Categoria</th>
            <th>Descripcion</th>
        </tr></table>`
        crearTabla("ingreso");
        break;
        case "egresos":
            contenedorTablas.innerHTML = 
            `<h2>Egresos Totales</h2>
        <table id="datos-tabla">
        <tr class="p-3">
            <th>Fecha</th>
            <th>Total</th>
            <th>Categoria</th>
            <th>Descripcion</th>
        </tr></table>`
        crearTabla("egreso");
        break;
        case "balance":
            contenedorTablas.innerHTML = 
            `<h2>Egresos Totales</h2>
        <table id="datos-tabla">
        <tr class="p-3">
            <th>Fecha</th>
            <th>Total</th>
            <th>Categoria</th>
            <th>Descripcion</th>
        </tr></table>`
        crearTabla("todo");
        break;


 }

})

function crearTabla(tipo){
    let totalPesos = 0;
    
    for(let i = 0;i< movimientos.length ; i++){
        
        if(movimientos[i]._tipo == tipo){
            console.log('hola');
            console.log(movimientos[i]);
            contenedorTablas.innerHTML += '<tr><td>' + movimientos[i]._fecha + '</td><td> $'+ movimientos[i]._total +' </td><td>'+movimientos[i]._categoria +' </td><td> ' +movimientos[i]._descripcion +'</td></tr><br>';
            if(tipo == 'egreso'){
                totalPesos -= parseInt(movimientos[i]._total);
                console.log(totalPesos); 
            }
            else{
              totalPesos += parseInt(movimientos[i]._total);
            console.log(totalPesos);  
            }
           
        }
    }
    contenedorTotal.innerHTML = '<p>EL TOTAL ES: $'+totalPesos + '</p'
    
}


