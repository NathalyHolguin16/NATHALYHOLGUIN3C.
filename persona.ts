export class persona {
    private _nombre: string;
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    private _apellidos: string;
    public get apellidos(): string {
        return this._apellidos;
    }
    public set apellidos(value: string) {
        this._apellidos = value;
    }
    private _numero_de_identificacion: number;
    public get número_de_identificación(): number {
        return this._numero_de_identificacion;
    }
    public set numero_de_identificacion(value: number) {
        this._numero_de_identificacion = value;
    }
    private _estado_civil: string;
    public get estado_civil(): string {
        return this._estado_civil;
    }
    public set estado_civil(value: string) {
        this._estado_civil = value;
    }
    constructor(nombre: string, apellidos: string, numero_de_identificacion: number, estado_civil: string){
        this._nombre=nombre;
        this._apellidos=apellidos;
        this._numero_de_identificacion=numero_de_identificacion
        this._estado_civil=estado_civil;
    }
    public cambio_de_estado_civil(su_nuevo_estado_civil){
        this._estado_civil=su_nuevo_estado_civil;
    }
    public datos_persona (){
        console.log(`Hola, mi nombre es $ {this.nombre}`);
        console.log(`Mis apellidos son ${this.apellidos}`);
        console.log(`Con número de identificación ${this.numero_de_identificacion}`);
        console.log(`Y mi estado civil ${this.estado_civil}`);

    }

}