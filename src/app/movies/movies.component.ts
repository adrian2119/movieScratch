import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MOVIES } from '../mockMovies';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
    movies = MOVIES;
  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.http.get<Movie[]>('http://localhost:4200/').subscribe((movieData) => {
          
      });
    //   this.getMovies();
  }
  getMovies() {
      return this.movies;
  }

}
