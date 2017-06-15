import { Injectable } from '@angular/core';

export class User{
  constructor(public id:number, public name:string){}
}

let USERS=[
  new User(1, 'John'),
  new User(2, 'Bob'),
  new User(3, 'George')
];

let usersPromise = Promise.resolve(USERS);

@Injectable()
export class UserService {
  getUsers(){
    return usersPromise;
  }

  addUser(newUser:User){
    usersPromise.then(users=>users.push(newUser));
    console.log(USERS);
  }
}
