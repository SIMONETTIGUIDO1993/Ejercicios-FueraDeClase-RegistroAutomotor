export class RegistroAutomotor{
    protected dominio:string;
    protected año: number;
    protected prenda: boolean;

    constructor(dominio:string,año: number, prenda: boolean){
        this.dominio =dominio;
        this.año = año;
        this.prenda = prenda;
    }

    protected setDominio(dominio:string){
        this.dominio = dominio;
    }
    protected getDominio():void{
        console.log(this.dominio);
    }

    protected setAño(año:number){
        this.año = año;
    }
    protected getAño():void{
        console.log(this.año);
    }

    protected setPrenda(prenda:boolean){
        this.prenda = prenda;
    }
    protected getPrenda():void{
        console.log(this.prenda);
    }

}