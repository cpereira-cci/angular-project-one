import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
apiUrl = 'https://api.github.com/'
users ;
  constructor(
    private http:HttpClient
  ) { 
    // this.users =  this.http.get(`${this.apiUrl}users?per_page=10`)
  }

  // getUsers(){
  //   console.log(this.users)
  //   return this.users
  // }

  searchUser(name:string){
    this.http.get(`${this.apiUrl}search/users?q=${name}`).subscribe(usr=>this.users=usr['items'])
    // this.http.get(`${this.apiUrl}users/${name}`).subscribe(usr=>this.users=usr)

    console.log(this.users)
  }
}
