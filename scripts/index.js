let movimientos = JSON.parse(localStorage.getItem('movimientosGuardados'));
if(!movimientos){
    movimientos = [];
}
let tablaIndex = document.getElementById("datos-tabla");


for(let i = 0; i< movimientos.length;i++){
    tablaIndex.innerHTML += '<tr><td><span>' + movimientos[i]._tipo + ' </span></td><td>' + movimientos[i]._fecha + '</td><td> $'+ movimientos[i]._total + '</td><td>' + movimientos[i]._categoria + '</td><td>' + movimientos[i]._descripcion + '</td></tr>'

}


