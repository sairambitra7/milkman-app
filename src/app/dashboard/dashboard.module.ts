import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DashboardComponent } from './dashboard.component';
import {MatNativeDateModule,  } from '@angular/material';

import { DashboardserviceService } from './dashboardservice.service';
import { HomeComponent } from './home/home.component';
import { CalenderComponent } from './calender/calender.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { PersonalComponent } from './personal/personal.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UseregistrationComponent } from './useregistration/useregistration.component';





const routes: Routes = [

    { path: 'dashboard', component:DashboardComponent,children:[
        {path:'',component:HomeComponent, pathMatch:'full'},
        { path: 'home', component:HomeComponent  },
        { path: 'calender', component:CalenderComponent  },
        { path: 'products', component:ProductsComponent  },
        { path: 'users', component:UsersComponent},
        {path: 'personal', component:PersonalComponent},
        {path:'userprofile/:id', component:UserprofileComponent},
        {path:'userregistration', component:UseregistrationComponent}
        
    ]}

];

@NgModule({
    declarations: [
      
      DashboardComponent,      
      HomeComponent,      
      CalenderComponent,      
      UsersComponent,      
      ProductsComponent, PersonalComponent, UserprofileComponent, UseregistrationComponent
     
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(routes, { useHash: true }),
      MatSidenavModule,
      MatToolbarModule,
      MatCardModule,
      MatIconModule,
      MatSelectModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule, ReactiveFormsModule,
      MatDatepickerModule,
      MatNativeDateModule
      
    ],
    providers: [DashboardserviceService],
    
  })
  export class dashboardModule { 
    Viewdetails(item){
      console.log(item)
    }
  }