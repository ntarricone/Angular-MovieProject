import { Component, OnInit } from '@angular/core';

import {MoviesService} from '../../service/movies.service'
import { NgForm } from '@angular/forms';
import { IMovie } from 'src/app/models/imovie.model';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
  providers: [MoviesService]
})
export class AddMovieComponent implements OnInit {

  constructor(public movieService: MoviesService) { }

  ngOnInit() {
  }

  addMovie(form: NgForm){
    this.movieService.postMovie(form.value)
    .subscribe(res => {
      this.resetForm(form);
      this.getMovieById(res); //NOT YET WORKING
    })
  }

  //NOT YET WORKING
  getMovieById(results: any){
    this.movieService.getMovieById(results.movie._id)
    .subscribe(res=>{
      console.log(res)
      alert("Movie added")
    })
  }
  //method to reset the form
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.movieService.selectedMovie = new IMovie();
    }
  }
}
