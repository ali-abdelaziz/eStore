import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { matchPasswords } from './validators/match-passwords.validator';

@Component({
  selector: 'app-user-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './user-signup.html',
  styleUrl: './user-signup.css',
})
export class UserSignup {
  userSignupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userSignupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      address: [''],
      city: [''],
      state: [''],
      pin: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required,],
    },
    {
      validator: matchPasswords,
    }
  );
  }

  get firstName(): AbstractControl<any, any> | null {
    return this.userSignupForm.get('firstName');
  }
  get email(): AbstractControl<any, any> | null {
    return this.userSignupForm.get('email');
  }
  get password(): AbstractControl<any, any> | null {
    return this.userSignupForm.get('password');
  }
  get confirmPassword(): AbstractControl<any, any> | null {
    return this.userSignupForm.get('confirmPassword');
  }
}
