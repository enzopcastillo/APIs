import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticias: Array<Noticia>;
  noticia: Noticia = new Noticia();
  indice: number=1;
  
  constructor(private noticiaService: NoticiaService) {
    this.obtenerNoticias();
  }

  obtenerNoticias(){
    this.noticiaService.getCotizaciones().subscribe(
      (result)=>{
        this.noticias = new Array<Noticia>();
        result['articles'].forEach(element =>{
          this.noticia = new Noticia();
          Object.assign(this.noticia, element);
          this.noticias.push(this.noticia);
        });
      },
      (error)=>{
        alert('Error en la peticion.');
      }
    )
  }

  iniciar(){
    if (this.indice < this.noticias.length){
      this.noticia = this.noticias[this.indice];
    }
  }

  anterior(){
    this.indice = this.indice -1;
    if (this.indice <= this.noticias.length){
      this.noticia = this.noticias[this.indice];
    }
  }

  siguiente(){
    this.indice = this.indice +1;
    if (this.indice < this.noticias.length){
      this.noticia = this.noticias[this.indice];
    }
  }

  ngOnInit(): void {}
}
