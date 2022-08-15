import { Component, OnInit } from '@angular/core';
import { TraductorService } from 'src/app/services/traductor.service';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.css']
})
export class TraductorComponent implements OnInit {
  text!: string;
  translatedText!: string;
  source = 'es';
  target = 'en';

  selectDe: any[] = [
    { value: 'es', nombre: 'Español'},
    { value: 'en', nombre: 'Ingles'},
    { value: 'fr', nombre: 'Frances'},
    { value: 'pt', nombre: 'Portugues'},
  ]

  selectA: any[] = [
    { value: 'es', nombre: 'Español'},
    { value: 'en', nombre: 'Ingles'},
    { value: 'fr', nombre: 'Frances'},
    { value: 'pt', nombre: 'Portugues'},
  ]

  constructor(private traductorService: TraductorService) {}

  traducir(){
    console.log(this.source);
    console.log(this.target);
    this.traductorService.translate(this.source, this.target, this.text).subscribe(
      (result)=>{
        this.translatedText = result.data.translations[0].translatedText;
      },
      (error)=>{
        alert('Error en la peticion.');
      }
    )
  }

  ngOnInit(): void {}
}
