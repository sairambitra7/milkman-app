import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {
  setpassword = new FormControl('', [Validators.required]);
  confirmpassword = new FormControl('',[Validators.required]);
  getErrorMessage() {
    return this.setpassword.hasError('required') ? 'set your password' :'';
  }

  getpasswordError() {
    return this.confirmpassword.hasError('required') ? 'confirm your password' :
    this.confirmpassword.hasError('confirmpassword') ? 'Not a valid password' :'';
  }
  hide = true; 


  constructor() { }

  ngOnInit() {
  }

}
