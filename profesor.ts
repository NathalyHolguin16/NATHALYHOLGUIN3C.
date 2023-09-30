import {empleado} from "./empleado";
export class profesor extends empleado{

    private _departamento: string;
    public get departamento(): string {
        return this._departamento;
    }
    public set departamento(value: string) {
        this._departamento = value;
    }
    constructor(nombre: string, apellidos: string,numero_de_identificacion: number,estado_civil: string, anio_de_incorporacion: number, numero_de_despacho:number, departamento:string ){
        super (nombre, apellidos, numero_de_identificacion, estado_civil, anio_de_incorporacion,numero_de_despacho); 
    
        this._departamento=departamento;
    }
    public cambio_del_departamento(este_su_nuevo_departamento:string){
        this._departamento=este_su_nuevo_departamento;
    }
    datos_profesor(){
        super.datos_persona()
        console.log(`Mi departamento asignado es : ${this.departamento}`);  
    }
}