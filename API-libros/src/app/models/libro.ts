export class Libro {
    book_id: number;
    name: string;
    cover: string;
    authors: string;

    constructor(book_id: number = 0, name: string = '', cover: string = '', authors: string = ''){
        this.book_id = book_id;
        this.name = name;
        this.cover = cover;
        this.authors = authors;
    }
}
