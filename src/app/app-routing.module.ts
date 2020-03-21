import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { LoginComponent } from './pages/login/login.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';


const routes: Routes = [
  {path: "movies", component: HomeComponent},
  {path:"movies/add-movie",  component: AddMovieComponent},
  {path:"login",  component: LoginComponent},
  {path:"users",  component: UserSettingsComponent},
  {path:"users/my-profile/:id",  component: MyProfileComponent},
  {path:"**", pathMatch: "full", redirectTo: "movies"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
