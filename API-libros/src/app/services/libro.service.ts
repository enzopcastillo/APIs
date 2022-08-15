import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private http: HttpClient) {}

  getBooks(book_name: string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com',
      'X-RapidAPI-Key': ''
      }),
    }
    return this.http.get("https://hapi-books.p.rapidapi.com/search/" +book_name+ "", httpOptions);
  }
}
