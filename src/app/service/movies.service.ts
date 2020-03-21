import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { IMovie } from "../models/imovie.model";

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  selectedMovie: IMovie;

  //movies will be saved here
  movies: IMovie[];

  //para movies
  readonly URL_API = "http://localhost:3000/movies"; //readonly is similar to stating it as let or var (it only allows readonly in this case)

  constructor(private http: HttpClient) {
    this.selectedMovie = new IMovie();
  }

  getMovies() {
    return this.http.get(this.URL_API);
  }

  getMovieById(_id: String){
    return this.http.get(`${this.URL_API}/${_id}`)
  }

  //we need the exact address
  postMovie(Movie: IMovie) {
    return this.http.post(this.URL_API + '/add-movie', Movie);
  }

  //we need the exact address
  putMovie(Movie: IMovie) {
    return this.http.put(`${this.URL_API}/${Movie._id}`, Movie);
  }

  deleteMovie(_id: String) {
    console.log("entro")
    return this.http.delete(`${this.URL_API}/delete/${_id}`);
  }
}
