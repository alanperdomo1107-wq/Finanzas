import { Movimiento } from "../clases/movimientos.js";

export class GestorMovimientos {
    constructor(){
        this.movimientos = [];
        let movimientosGuardados = JSON.parse(localStorage.getItem('movimientosGuardados'));
        if(movimientosGuardados){
            for(let i = 0 ;i < movimientosGuardados.length; i++){
                let movimiento = new Movimiento (
                    movimientosGuardados[i]._tipo,
                    movimientosGuardados[i]._fecha,
                    movimientosGuardados[i]._total,
                    movimientosGuardados[i]._categoria,
                    movimientosGuardados[i]._descripcion,
                )
                movimiento._id =
                    movimientosGuardados[i]._id;

                this.movimientos.push(movimiento);


            }
        }
        let numeroGuardado =
            JSON.parse(localStorage.getItem("identificador"));
        if (numeroGuardado != null) {

            this._id = numeroGuardado;


        } else {
            this._id = 1;
        }
    
    }
    guardar(){
        localStorage.setItem('movimientosGuardados', JSON.stringify(this.movimientos))
    }

    agregarMovimiento(movimiento){
        movimiento._id = this._id;

        this._id++;

        localStorage.setItem("identificador",this._id);
        this.movimientos.push(movimiento)
        this.guardar();

    }

    buscarMovimiento(nombre){
        for(let i = 0;i < this.movimientos.length;i++){
            if (this.movimientos[i].nombre.toLowerCase() == nombre.toLowerCase()) {
                return i;
            }
        
        }
        return null;

    }

    eliminarMovimiento(nombre){
        for (let i = 0; i < this.movimientos.length; i++) {

            if (this.movimientos[i].nombre.toLowerCase() == nombre.toLowerCase()) {
                 this.movimientos.splice(i, 1);
                this.guardar();
                return;
            }
     
        }
    }

}