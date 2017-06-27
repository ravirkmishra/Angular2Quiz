import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'LogIn-comp',
    templateUrl: 'App/LogIn/SignUp.html',
})
export class LogInComponent
{
   onSubmit(fSignUp: NgForm) {
    console.log(fSignUp.value);  // { first: '', last: '' }
    console.log(fSignUp.valid);  // false
  }
}