import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatchValidator, passwordIsCorrect } from './../validators/password-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpClient,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
      phone_number: '',
      address: '',
      position: '',
    }, {
      validators: [passwordIsCorrect(), passwordMatchValidator()]
    });
  }

  onSubmit(): void {
    this.http.post('http://127.0.0.1:8000/api/register', this.registerForm.getRawValue()).subscribe(() => this.router.navigate(['/login']));
  }
}
