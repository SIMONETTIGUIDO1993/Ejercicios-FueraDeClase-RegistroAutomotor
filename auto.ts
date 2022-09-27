import { RegistroAutomotor } from "./registroAutomotor";

export class Auto extends RegistroAutomotor {
    private nroChasis:string;
    private cantPuertas:number;

    constructor(nroChasis:string,cantPuertas:number,dominio:string,año: number, prenda: boolean){
        super(dominio,año,prenda)
        this.nroChasis = nroChasis;
        this.cantPuertas = cantPuertas;
    }

    protected setNroChasis(nroChasis:string){
        this.nroChasis = nroChasis;
    }
    protected getNroChasis():void{
        console.log(this.nroChasis);
    }

    protected setCantPuertas(cantPuertas:number){
        this.cantPuertas = cantPuertas;
    }
    protected getCantPuertas():void{
        console.log(this.cantPuertas);
    }



}