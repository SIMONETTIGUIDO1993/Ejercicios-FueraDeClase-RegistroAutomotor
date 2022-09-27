import { RegistroAutomotor } from "./registroAutomotor";

export class Moto extends RegistroAutomotor {
    private nroCuadro:string;

    constructor(nroCuadro:string,dominio:string,año: number, prenda: boolean){
        super(dominio,año,prenda)
        this.nroCuadro = nroCuadro;

    }

    protected setNroCuadro(nroCuadro:string){
        this.nroCuadro = nroCuadro;
    }
    protected getNroCuadro():void{
        console.log(this.nroCuadro);
    }


}