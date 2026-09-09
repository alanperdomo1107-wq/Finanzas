export class Movimiento {
    constructor(tipo,fecha,total,categoria,descripcion){
        this._tipo = tipo;
        this._fecha = fecha;
        this._total= total;
        this._categoria = categoria;
        this._descripcion = descripcion;
        this._id = null;
    }

    get id(){
        return this._id;
    }
    set id(nuevoID){
        this._id = nuevoID;
    }
    get tipo(){
        return this._tipo;
    }
    set tipo(nuevoTipo){
        this._tipo = nuevoTipo;
    }
    get fecha(){
        return this._fecha;
    }
    set fecha(nuevaFecha){
        this._fecha = nuevaFecha;
    }
    get total(){
        return this._total;
    }
    set total(nuevoTotal){
        this._total = nuevoTotal;
    }
    get categoria(){
        return this._categoria;
    }
    set categoria(nuevaCategoria){
        this._categoria = nuevaCategoria;
    }
    get descripcion(){
        return this._descripcion;
    }
    set descripcion(nuevaDescripcion){
        this._descripcion = nuevaDescripcion;
    }

    modificar(id,tipo,fecha,total,categoria,descripcion) {
        this.id = id;
        this.tipo = tipo;
        this.fecha = fecha;
        this.total= total;
        this.categoria = categoria;
        this.descripcion = descripcion;
    }
    
}