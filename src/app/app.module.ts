import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { CardComponent } from './shared/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    AddMovieComponent,
    UserSettingsComponent,
    MyProfileComponent,
    CardComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule, //necesitas este con su respectivo import arriba
    BrowserModule,  //idem
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
