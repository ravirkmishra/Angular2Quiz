import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'LogIn-comp',
    templateUrl: 'App/LogIn/LogIn.html',
})
export class LogInComponent
{
   onSubmit(fLogIn: NgForm) {
    console.log(fLogIn.value);  // { first: '', last: '' }
    console.log(fLogIn.valid);  // false
  }
}