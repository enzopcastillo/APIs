import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) {}

  getCotizaciones():Observable<any>{
    return this.http.get("https://newsapi.org/v2/top-headlines?country=AR&apiKey=");
  }
}
