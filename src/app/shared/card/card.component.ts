import { Component, OnInit, Input } from '@angular/core';

import { IMovie } from 'src/app/models/imovie.model';
import { MoviesService } from "src/app/service/movies.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() //aqui le dice a card "vas a recibir movie"
  movie;

  constructor(public movieService: MoviesService) {

   }

  ngOnInit() {

  }
  getMovies() {
    this.movieService.getMovies().subscribe(res => {
      this.movieService.movies = res as IMovie[];
      console.log(res);
    });
  }


  deleteMovie(_id: String){
    if(confirm('Estas seguro quieres borrarlo?')){
      this.movieService.deleteMovie(_id)
      .subscribe(res => {
        this.getMovies();
      });
    }
  }


}
