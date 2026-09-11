let movimientos = JSON.parse(localStorage.getItem('movimientosGuardados'));
let contenedorTablas = document.getElementById('contenedorTablas');
let selectEstadistica = document.getElementById('selectEstadistica');
let contenedorTotal = document.getElementById('total');

selectEstadistica.addEventListener("change",function(){

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
        crearTabla("Ingreso");
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
        crearTabla("Egreso");
        break;
        case "balance":
            contenedorTablas.innerHTML = 
            `<h2>Balance Total</h2>
        <table id="datos-tabla">
        <tr class="p-3">
            <th>Fecha</th>
            <th>Total</th>
            <th>Categoria</th>
            <th>Descripcion</th>
        </tr></table>`
        crearTabla("balance");
        break;


 }

})

function crearTabla(tipo){
    let totalPesos = 0;
    let totalIngreso = 0;
    let totalEgreso = 0;

    for(let i = 0;i< movimientos.length ; i++){
        
        if(movimientos[i]._tipo == tipo){
         
            contenedorTablas.innerHTML += '<tr><td>' + movimientos[i]._fecha + '</td><td> $'+ movimientos[i]._total +' </td><td>'+movimientos[i]._categoria +' </td><td> ' +movimientos[i]._descripcion +'</td></tr><br>';
            if(tipo == 'Egreso'){
                totalPesos -= parseInt(movimientos[i]._total);
            }
            else if(tipo == 'Ingreso'){
              totalPesos += parseInt(movimientos[i]._total);
            }
            
           
        }
        if(tipo == 'balance'){
            contenedorTablas.innerHTML += '<tr><td>' + movimientos[i]._fecha + '</td><td> $'+ movimientos[i]._total +' </td><td>'+movimientos[i]._categoria +' </td><td> ' +movimientos[i]._descripcion +'</td></tr><br>';
            if(movimientos[i]._tipo == 'Egreso'){
                totalEgreso -= parseInt(movimientos[i]._total)
                 
            }
            else if(movimientos[i]._tipo == 'Ingreso'){
              totalIngreso += parseInt(movimientos[i]._total)
            }
            totalPesos = totalIngreso + totalEgreso;

        }
    }
    contenedorTotal.innerHTML = '<p>EL TOTAL ES: $'+totalPesos + '</p'
    
}



