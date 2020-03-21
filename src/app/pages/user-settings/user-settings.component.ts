import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';


import { MoviesService } from '../../service/movies.service'
import { IMovie } from 'src/app/models/imovie.model';
import { NgForm } from '@angular/forms';
import { IUser } from 'src/app/models/iuser.model';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss'],
  providers: [UsersService, MoviesService]
})
export class UserSettingsComponent implements OnInit {

  constructor(public usersService: UsersService, public movieService: MoviesService) { }


  ngOnInit() {
    this.getUsers();
    this.getMovies();
  }

  getUsers() {
    this.usersService.getUsers()
      .subscribe(res => {
        this.usersService.users = res as IUser[];
        console.log(res)
      })
  }

  getMovies() {
    this.movieService.getMovies().subscribe(res => {
      this.movieService.movies = res as IMovie[];
      console.log(res);
    });
  }

  editUser(user: IUser) {
    this.usersService.selectedUser = user;
  }

  updateUser(form: NgForm) {
    if (form.value._id) {
      this.usersService.putUser(form.value)
        .subscribe(res => {
          console.log(res)
          window.alert("usuario actualizado")
        })
    } else {
      this.usersService.postUser(form.value)
      .subscribe(res => {
        window.alert("usuario creado")
          this.getUsers();
      })
    };

    }

    deleteUser(_id: String){
      if (confirm('¿Seguro que deseas eliminarlo?'))
        this.usersService.deleteUser(_id)
          .subscribe(res => {
            this.getUsers();
          });
    }

    //method to reset the form
    resetForm(form ?: NgForm){
      if (form) {
        form.reset();
        this.usersService.selectedUser = new IUser();
      }
    }
  }
