import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=88c6b326';

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(this.URL);
  }
}