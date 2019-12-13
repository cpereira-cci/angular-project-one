import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { UserService } from '../user.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username:string;
  user
  repos
  date

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit() {
  this.route.params.subscribe(params =>{
    this.username= params['username']
  })

  this.userService.getUser(this.username).subscribe(user=>this.user=user)
  this.userService.getRepos(this.username).subscribe(repo=>this.repos=repo)
  }

  goBack(){
    this.location.back()
  }

  getLastUpdated(user){
    // const updated_date= Date.parse(user.updated_at)
    return user.created_at


  }


}
