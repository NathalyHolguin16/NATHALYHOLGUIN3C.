import {persona} from "./persona";
export class estudiante extends persona {
    
    private _curso: string;
    public get curso(): string {
        return this._curso;
    }
    public set curso(value: string) {
        this._curso = value;
    }
    constructor(nombre: string, apellidos: string, numero_de_identificacion: number, estado_civil: string, curso: string ){
        super(nombre, apellidos,numero_de_identificacion, estado_civil);
        this._curso = curso;
    }
    public matriculación_de_curso(nuevo_curso:string){
        this._curso = nuevo_curso;
        

    }
    datos_estudiante (){
        super.datos_persona()
    console.log(`Curso: ${this.curso}`);     
    }
}
