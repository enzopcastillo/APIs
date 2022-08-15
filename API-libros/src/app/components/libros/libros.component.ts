import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  libro!: Libro;
  libros!: Array<Libro>;
  book_name!: string;

  constructor(private libroService: LibroService) {}

  ngOnInit(): void {}

  obtenerLibros(){
    console.log(this.book_name);
    this.libroService.getBooks(this.book_name).subscribe(
      (result)=>{
        this.libros = new Array<Libro>();
        result.forEach(element =>{
          this.libro = new Libro();
          Object.assign(this.libro, element);
          this.libros.push(this.libro);
        });
      }
    )
  }
}
