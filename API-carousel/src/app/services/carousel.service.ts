import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticia';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  noticias: Noticia[]=[]

  constructor(private http: HttpClient) {}

  getNoticias():Observable<any>{
    return this.http.get("https://newsapi.org/v2/top-headlines?country=AR&apiKey=");
  }
}
