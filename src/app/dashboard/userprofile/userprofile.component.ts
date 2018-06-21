import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  cards=[
    {
    id:'1',
    name:'John',
    phone:'8888888888',
    email:'abc@gmail.com',
    address:'karnataka'
    },
    {
      id:'2',
      name:'Ricky',
      phone:'8888888888',
      email:'abc@gmail.com',
      address:'karnataka'
      },
      {
        id:'3',
        name:'Ms',
        phone:'8888888888',
        email:'abc@gmail.com',
        address:'karnataka'
        },
        {
          id:'4',
          name:'Jack',
          phone:'8888888888',
          email:'abc@gmail.com',
          address:'karnataka'
          },
         
          {
            id:'5',
            name:'Honey',
            phone:'8888888888',
            email:'abc@gmail.com',
            address:'karnataka'
            },
  
            {
              id:'6',
              name:'Mike',
              phone:'8888888888',
              email:'abc@gmail.com',
              address:'karnataka'
            }
  
  ]
  id:any;
  result=[]
  
    constructor(private router:Router, private Activatedroute:ActivatedRoute) { }
    

  
    ngOnInit() {
      this.id=this.Activatedroute.snapshot.params['id'];
      console.log(this.id);
      // for(var i=1;i<=this.cards.length;i++){
      //   i
      // }
      this.cards.forEach(element => {
        // console.log(element)
        if(element.id==this.id){
          console.log(element)
          this.result.push(element);
        }
        
      });
    }
    
  }  