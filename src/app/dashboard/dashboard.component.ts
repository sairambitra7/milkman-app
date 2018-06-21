import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
show:boolean=true;
  toggle(){
this.show!=false;
  }
  constructor() { 
   
  }

  ngOnInit() {
  }

}
