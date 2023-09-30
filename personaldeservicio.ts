import {empleado} from "./empleado";
export class personaldeservicio extends empleado{
    private _seccion: string;
    public get seccion(): string {
        return this._seccion;
    }
    public set seccion(value: string) {
        this._seccion = value;
    }

    constructor(nombre:string, apellidos: string, numero_de_identificacion: number, estado_civil: string, anio_de_incorporacion: number, numero_de_despacho: number, seccion: string){
        super (nombre, apellidos, numero_de_identificacion, estado_civil, anio_de_incorporacion, numero_de_despacho);
        this._seccion=seccion;
    }   
    public traslado_de_seccion(su_trasladacion_de_seccion:string){
        this._seccion=su_trasladacion_de_seccion;
    }
    datos_personalservicio (){
        console.log(`el año en el que me incorporé fué en: ${this.anio_de_incorporacion}`);
        console.log(`mi nummero de despacho es: ${this.numero_de_despacho}`);
        console.log(`y mi sección asignada es: ${this.seccion}`); 
  
    } 
}
