import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {UserRoutingModule} from './user-routing.module';
import {UserService} from './user.service';
import {UserComponent} from './user.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, UserRoutingModule ],
  declarations: [  UserComponent],
 providers:     [UserService]
})
export class UserModule { }
