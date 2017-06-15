import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import {NotFoundComponent} from './notfound.component';
import {AppRoutingModule} from './app-routing.module';
import {UserModule} from './user/user.module';

@NgModule({
  imports:      [ BrowserModule,FormsModule,UserModule, AppRoutingModule ],
  declarations: [ AppComponent, NotFoundComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
