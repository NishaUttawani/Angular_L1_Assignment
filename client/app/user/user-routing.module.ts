import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UserComponent} from './user.component';

const appRoutes: Routes = [
  {path:'user', component:UserComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
