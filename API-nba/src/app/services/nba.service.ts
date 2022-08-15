import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NbaService {

  constructor(private http: HttpClient) {}

  getTeams():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
        'X-RapidAPI-Key': ''
      })
    };
    return this.http.get("https://free-nba.p.rapidapi.com/teams", httpOptions);
  }

  getPlayers():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
        'X-RapidAPI-Key': ''
      })
    };
    return this.http.get("https://free-nba.p.rapidapi.com/players", httpOptions);
  }
}
