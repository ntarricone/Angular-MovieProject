import { Component, OnInit } from "@angular/core";

import { MoviesService } from "src/app/service/movies.service";
import { IMovie } from "src/app/models/imovie.model";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  providers: [MoviesService]
})
export class HomeComponent implements OnInit {
  constructor(public movieService: MoviesService) {}
  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getMovies().subscribe(res => {
      this.movieService.movies = res as IMovie[];
      console.log(res);
    });
  }

 

}
