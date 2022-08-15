export class Noticia {
    id?:number;
    title?:string;
    description?:string;
    urlToImage?:string;

    constructor(id?:number, title?:string, description?:string, urlToImage?:string){
        this.id = id;
        this.title = title;
        this.description = description;
        this.urlToImage = urlToImage;
    }
}
