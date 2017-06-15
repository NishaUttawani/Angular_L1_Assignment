import { Component, OnInit } from '@angular/core';
import {UserService, User} from './user.service';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  template: `<h2>Users</h2>
              <form class="well" (submit)="addUser()">
                <div class="form-group">
                <input type="text" [(ngModel)]="name" name="name" class="form-control" placeholder="Enter name">
                </div>
              </form>
             <ul class="items">
               <li *ngFor="let user of users | async"
                 (click)="onSelect(hero)">
                 <span class="badge">{{ user.id }}</span> {{ user.name }}
               </li>
             </ul>`
})
export class UserComponent{
  users: Observable<User[]>;
  name : string;
  selectedId: number;


  constructor(
    private service: UserService,
    private route: ActivatedRoute,
    private router: Router){  }

  ngOnInit(){
    this.users = this.route.params
      .switchMap((params: Params) => {
        return this.service.getUsers();
      });

      console.log(this.users);
  }

  addUser(){

     var newUser:User = {
         name:this.name,
         id:8
     }
     this.service.addUser(newUser);
  }

}
