import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) {}

  public getMovies(genres: string, year: number):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
      'X-RapidAPI-Key': ''
      }),
    }
    return this.http.get("https://movies-app1.p.rapidapi.com/api/movies?page=1&limit=6&sort=rating&year=" +year+ "&genres=" +genres+ "", httpOptions);
  }
}
