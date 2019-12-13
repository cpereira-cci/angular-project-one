import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { Router } from '@angular/router'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(
    private userService : UserService,
    private router: Router
  ) { }

  ngOnInit() {
   
  }

  // onSearch(searchText:string){
  //   this.userService.searchUser(searchText)
  // }

  // public model: any;

  // search = (text$: Observable<string>) =>
  //   text$.pipe(
  //     debounceTime(200),
  //     distinctUntilChanged(),
  //     map(term =>  states.filter(v => v.toLowerCase().indexOf(term.toLowerCase())).slice(0, 10))
  //   )
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map(term =>  this.userService.searchUser(term))
    )
onSearchFocus(){
  this.router.navigateByUrl('');
}

clickSearch(){
  this.router.navigateByUrl('/');
}

clearPage(){
  this.userService.clear()
}

}
