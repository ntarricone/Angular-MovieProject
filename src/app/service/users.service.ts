import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IUser } from "../models/iuser.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  selectedUser: IUser;
  users: IUser[];
  readonly URL = 'http://localhost:3000/users'

  constructor(private http: HttpClient) { 
    this.selectedUser = new IUser();
  }

  getUsers() {
    return this.http.get(this.URL);
  }

  getUser(_id: String) {
    return this.http.get(this.URL + `/my-profile/${_id}`);
  }

  postUser(User: IUser) {
    return this.http.post(this.URL, User);
  }

  putUser(User: IUser) {
    return this.http.put(this.URL + `/${User._id}`, User);
  }

  deleteUser(_id: String) {
    return this.http.delete(this.URL + `/delete/${_id}`);
  }
}
