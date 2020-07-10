import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service';

@Component({
  selector: 'app-display-movies',
  templateUrl: './display-movies.component.html',
  styleUrls: ['./display-movies.component.css']
})
export class DisplayMoviesComponent implements OnInit {

  movies: any;

  constructor(private movieApi : MovieApiService) { }

  ngOnInit() {
    this.getMovies()
  }

  getMovies(){
    this.movieApi.getMovies().subscribe((data) =>{
      this.movies = data
    })
  }

}
