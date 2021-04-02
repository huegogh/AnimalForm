import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  LoginForm!: FormGroup;

  constructor(private form: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
    this.LoginForm = this.form.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitForm() {
    console.log('running submit');
    this.loginService.SignIn(this.LoginForm.value);
  }

  Alert() {
    alert("Why would you click that?! How will you open up the window if it were to close?");
  }
}
