import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NotFoundComponent} from './notfound.component';

const appRoutes: Routes = [

  { path: '',   redirectTo: '/user', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
