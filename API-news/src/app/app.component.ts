import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listNoticias: any[] = [];

  constructor(private noticiaService: NoticiasService){

  }

  buscarNoticias(parametros: any){
    console.log('soy el padre');
    console.log(parametros);
    this.noticiaService.getNoticias(parametros).subscribe(data =>{
      console.log(data);
      this.listNoticias = data.articles;
    }, error =>{
      console.log(error);
    })
  }
}
