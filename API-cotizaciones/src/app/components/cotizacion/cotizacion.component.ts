import { Component, OnInit } from '@angular/core';
import { CotizacionService } from 'src/app/services/cotizacion.service';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {
  fromValue!: number;
  fromType!: string;
  toType!: string;
  resultado!: number;
  cotizacionARS!: number;
  cotizacionEUR!: number;

  selectDe: any[] = [
    { value: 'ARS', nombre: 'Pesos Argentinos (ARS)'},
    { value: 'USD', nombre: 'Dolares Estadounidenses (USD)'},
    { value: 'EUR', nombre: 'Euros (EUR)'},
  ]

  selectA: any[] = [
    { value: 'ARS', nombre: 'Pesos Argentinos (ARS)'},
    { value: 'USD', nombre: 'Dolares Estadounidenses (USD)'},
    { value: 'EUR', nombre: 'Euros (EUR)'},
  ]

  constructor(private cotizacionService: CotizacionService) {
    this.obtenerCotizaciones();
  }

  obtenerCotizacion(){
    console.log(this.fromValue);
    console.log(this.fromType);
    console.log(this.toType);
    this.cotizacionService.getCotizacion(this.fromValue, this.fromType, this.toType).subscribe(
      (result)=>{
        this.resultado = result['result'];
      },
      (error)=>{
        alert('Error en la peticion.');
      }
    )
  }

  obtenerCotizaciones(){
    this.cotizacionService.getCotizaciones().subscribe(
      (result)=>{
        this.cotizacionARS = result.response.rates.ARS;
        this.cotizacionEUR = result.response.rates.EUR;
      },
      (error)=>{
        alert('Error en la peticion.');
      }
    )
  }

  ngOnInit(): void {}
}
