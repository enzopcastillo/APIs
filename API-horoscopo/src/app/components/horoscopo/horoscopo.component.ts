import { Component, OnInit } from '@angular/core';
import { HoroscopoService } from 'src/app/services/horoscopo.service';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent implements OnInit {
  sign: string = "";
  day: string = "";
  description!: string;
  date_range!: string;
  current_date!: string;
  color!: string;

  signos: any[] = [
    { value: 'aries', nombre: 'Aries'},
    { value: 'taurus', nombre: 'Tauro'},
    { value: 'gemini', nombre: 'Geminis'},
    { value: 'cancer', nombre: 'Cancer'},
    { value: 'leo', nombre: 'Leo'},
    { value: 'virgo', nombre: 'Virgo'},
    { value: 'libra', nombre: 'Libra'},
    { value: 'scorpio', nombre: 'Escorpio'},
    { value: 'sagittarius', nombre: 'Sagitario'},
    { value: 'Capricorn', nombre: 'Capricornio'},
    { value: 'Aquarius', nombre: 'Aquario'},
    { value: 'Pisces', nombre: 'Piscis'},
  ]

  dias: any[] = [
    { value: 'today', nombre: 'Hoy'},
    { value: 'yesterday', nombre: 'Ayer'},
    { value: 'tomorrow', nombre: 'Mañana'},
  ]

  constructor(private horoscopoService: HoroscopoService) {}

  obtenerHoroscopo(){
    console.log(this.sign);
    console.log(this.day);
    this.horoscopoService.getHoroscopo(this.sign, this.day).subscribe(
      (result)=>{
        this.description = result['description'];
        this.date_range = result['date_range'];
        this.current_date = result['current_date'];
        this.color = result['color'];
      },
      (error)=>{
        alert('Error en la peticion.');
      }
    )
  }

  ngOnInit(): void {}
}
