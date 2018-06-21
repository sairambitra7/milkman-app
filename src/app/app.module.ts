import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';
import {SigninModule} from './signin/signin.module';
import{dashboardModule} from './dashboard/dashboard.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';


import { AppComponent } from './app.component';





@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    BrowserModule,
    RouterModule,
    SigninModule,
    dashboardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
