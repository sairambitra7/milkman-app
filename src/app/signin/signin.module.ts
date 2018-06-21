import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';



import { LoginComponent } from './login/login.component';

import { SigninserviceService } from './signinservice.service';
import { SetPasswordComponent } from './set-password/set-password.component';

const routes: Routes = [
  {path:'',component:LoginComponent,pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'setpassword', component: SetPasswordComponent}
];



@NgModule({
  declarations: [
    
    LoginComponent,
    SetPasswordComponent
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    MatCardModule,
    MatInputModule,FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    
    
    
  ],
  
  
  
  providers: [SigninserviceService],
  
})
export class SigninModule { }