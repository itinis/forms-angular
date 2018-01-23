import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

function hasExclamationMark (input: FormControl) {
  const hasExclamation = input.value.indexOf('!') >= 0;

  return hasExclamation ? null : { needsExclamation: true };
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  loginForm: FormGroup;
  username: FormControl;
  password: FormControl;
  constructor (builder: FormBuilder) {
    this.username = new FormControl('', [
    Validators.required,
    Validators.minLength(5) 
    ]);
    this.password = new FormControl('', [Validators.required,hasExclamationMark]);
    this.loginForm = builder.group({
    username: this.username,
    password: this.password
    });
    }
    login () {
    console.log(this.loginForm.value);
    // Attempt Logging in...
    }
     
  ngOnInit() {
  }

}
