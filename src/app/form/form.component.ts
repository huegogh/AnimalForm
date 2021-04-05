import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  AnimalForm!: FormGroup;
  image!: File;

  constructor(private form: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
    this.AnimalForm = this.form.group({
      category: ['', Validators.required],
      breed: ['', Validators.required],
      image: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      lifespan: ['', Validators.required],
      diet: ['', Validators.required],
      dangerousFoods: ['', Validators.required],
      goodFoods: ['', Validators.required],
      needs: ['', Validators.required],
      habits: ['', Validators.required]
    });
  }

  submitForm() {
    console.log('running submit');
    console.log(this.AnimalForm.value);
  }

  onFileSelected(event: any) {
    this.image = event.target.files[0];
    console.log(this.image);
  }

  Alert() {
    alert("Why would you click that?! How will you open up the window if it were to close?");
  }
}
