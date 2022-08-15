import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Noticia } from 'src/app/models/noticia';
import { CarouselService } from 'src/app/services/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  showNavigationArrows = true;
  showNavigationIndicators = true;
  
  noticias!: Array<Noticia>;
  noticia: Noticia = new Noticia();
  indice: number = 0;

  constructor(config: NgbCarouselConfig, private noticiaService: CarouselService) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    this.obtenerNoticias();
  }

  obtenerNoticias(){
    this.noticiaService.getNoticias().subscribe(
      (result)=>{
        this.noticias = new Array<Noticia>();
        result['articles'].forEach(element =>{
          this.noticia = new Noticia();
          this.noticia.id = this.getID();
          this.noticia.vigente = true;
          Object.assign(this.noticia, element);
          this.noticias.push(this.noticia);
        });
      },
      (error)=>{
        alert('Error en la peticion.');
      }
    )
  }

  getID():number{
    var pasajeID: number = 0;
    for (var i = 0; i < this.noticias.length; i++){
      if(pasajeID < this.noticias[i].id){
        pasajeID = this.noticias[i].id;
      }
    };
    return (pasajeID + 1);
  }

  desactivarNoticia(noticia: Noticia){
    this.actualizarNoticia(noticia);
    console.log(noticia);
  }

  eliminarNoticia(noticia: Noticia){
    this.deleteNoticia(noticia);
  }


  deleteNoticia(noticia: Noticia){
    let indice: number = this.noticias.findIndex(x=>(x.id == noticia.id));
    this.noticias.splice(indice, 1);
  }

  actualizarNoticia(noticia: Noticia){
    let oldNoticia = this.noticias.find(x=>x.id === noticia.id);  
    oldNoticia.vigente = false;
  }
}
