import { Component, OnInit } from '@angular/core';
import { Peliculas } from 'src/app/models/peliculas';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  peliculas!:Array<Peliculas>;
  pelicula!:Peliculas;
  year: number = 2022;
  genres: string = 'accion';

  genresList: any[] = [
    { value: 'accion', nombre: 'Accion'},
    { value: 'comedia', nombre: 'Comedia'},
    { value: 'crimen', nombre: 'Crimen'},
    { value: 'historia', nombre: 'Historia'},
    { value: 'terror', nombre: 'Terror'},
  ]

  yearList: any[] = [
    { value: 2018, nombre: '2018'},
    { value: 2019, nombre: '2019'},
    { value: 2020, nombre: '2020'},
    { value: 2021, nombre: '2021'},
    { value: 2022, nombre: '2022'},
  ]

  constructor(private peliculasService:PeliculasService) {}

  cargarMovies(){
    this.peliculas = new Array<Peliculas>();
    console.log(this.genres);
    console.log(this.year);
    this.peliculasService.getMovies(this.genres, this.year).subscribe(
      (result)=>{
        result.results.forEach(element =>{
          console.log(element);
          this.pelicula = new Peliculas();
          Object.assign(this.pelicula, element);
          this.peliculas.push(this.pelicula);
        });
      },
      (error)=>{
        alert('Error en la peticion.');
      }
    )
  }

  ngOnInit(): void {}
}
