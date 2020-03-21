import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../service/users.service";
import { MoviesService } from "../../service/movies.service";
import { IMovie } from "src/app/models/imovie.model";
import { IUser } from "src/app/models/iuser.model";
import { ActivatedRoute, Params } from "@angular/router";
@Component({
  selector: "app-my-profile",
  templateUrl: "./my-profile.component.html",
  styleUrls: ["./my-profile.component.scss"],
  providers: [UsersService, MoviesService]
})
export class MyProfileComponent implements OnInit {
  constructor(
    public usersService: UsersService,
    public movieService: MoviesService,
    private route: ActivatedRoute,
  ) {}
  
  ngOnInit() {
    const prodId = this.route.snapshot.paramMap.get("id");
    this.getUserData(prodId);
  }
  getUserData(_id: String) {
    console.log(_id);
    this.usersService.getUser(_id).subscribe(res => {
      this.usersService.users = res as IUser[];
      console.log(res);
      this.getMovieById(res);
    });
  }
  getMovieById(objeto) {
    let moviesIds = objeto.moviesId;
    var pelis: any = [];
   moviesIds.map(id =>  this.movieService.getMovieById(id).subscribe(res2 =>{
    pelis.push(res2 as IMovie);
    console.log(pelis); 
   }))
   this.movieService.movies = pelis as IMovie[];
  
  }
  
}

