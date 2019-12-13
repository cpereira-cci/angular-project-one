import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component'
import {HomeComponent} from  './home/home.component'

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'user/:username',
    component:UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
