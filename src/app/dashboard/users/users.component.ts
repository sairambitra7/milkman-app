import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

cards=[
  {
  id:'1',
  name:'John',
  phone:'8888888888',
  email:'abc@gmail.com',
  address:'karnataka',
  pay:'Payment Due',
  price:'$2000'
  },
  {
    id:'2',
    name:'Ricky',
    phone:'8888888888',
    email:'abc@gmail.com',
    address:'karnataka',
    pay:'Payment Due',
    price:'$2000'
    },
    {
      id:'3',
      name:'Ms',
      phone:'8888888888',
      email:'abc@gmail.com',
      address:'karnataka',
      pay:'Payment Due',
      price:'$2000'
      },
      {
        id:'4',
        name:'Jack',
        phone:'8888888888',
        email:'abc@gmail.com',
        address:'karnataka',
        pay:'Payment Due',
        price:'$2000'
        },
       
        {
          id:'5',
          name:'Honey',
          phone:'8888888888',
          email:'abc@gmail.com',
          address:'karnataka',
          pay:'Payment Due',
          price:'$2000'
          },

          {
            id:'6',
            name:'Mike',
            phone:'8888888888',
            email:'abc@gmail.com',
            address:'karnataka',
            pay:'Payment Due',
            price:'$2000'
            }

]

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onSelect(item:any){
    console.log(item);
    this.router.navigate(['dashboard/userprofile/'+item])

    console.log(item)
  }
}


