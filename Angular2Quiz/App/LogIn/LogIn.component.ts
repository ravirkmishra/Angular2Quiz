import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'LogIn-comp',
    templateUrl: 'App/LogIn/LogIn.html',
})
export class LogInComponent
{
   onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
}