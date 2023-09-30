import {persona} from "./persona";
export class empleado extends persona{
    
    private _anio_de_incorporacion: number;
    public get anio_de_incorporacion(): number {
        return this._anio_de_incorporacion;
    }
    public set anio_de_incorporacion(value: number) {
        this._anio_de_incorporacion = value;
    }
    private _numero_de_despacho: number;
    public get numero_de_despacho(): number {
        return this._numero_de_despacho;
    }
    public set numero_de_despacho(value: number) {
        this._numero_de_despacho = value;
    }
    constructor(nombre: string, apellido: string, numero_de_identificacion: number, estado_civil: string, anio_de_incorporacion: number, numero_de_despacho: number){
        super (nombre, apellido, numero_de_identificacion, estado_civil);

        this._anio_de_incorporacion=anio_de_incorporacion;
        this._numero_de_despacho=numero_de_despacho;
    }
    public reasignación_de_despacho(su_nuevo_despacho:number){
        this.numero_de_despacho=su_nuevo_despacho;
    }
   
}

