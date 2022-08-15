import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HoroscopoService {

  constructor(private http: HttpClient) {}

  getHoroscopo(sign: string, day: string){
    const httpOptions = {
      headers: new HttpHeaders({
        "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
		    "X-RapidAPI-Key": ""
      })
    }
    let body = null;
    return this.http.post("https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=" +sign+ "&day=" +day+"", body, httpOptions);
  }
}
