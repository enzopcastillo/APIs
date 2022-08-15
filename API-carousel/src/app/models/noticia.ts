export class Noticia {
    id?:number;
    title?:string;
    description?:string;
    urlToImage?:string;
    vigente?: boolean;

    constructor(id?:number, title?:string, description?:string, urlToImage?:string, vigente?: boolean){
        this.id = id;
        this.title = title;
        this.description = description;
        this.urlToImage = urlToImage;
        this.vigente = vigente;
    }
}
