export class Player {
    id: number;
    first_name: string;
    last_name: string;
    position: string;

    constructor(id=0, first_name="", last_name="", position=""){
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.position = position;
    }
}