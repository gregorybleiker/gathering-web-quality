import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormGroupDirective,
  NgForm,
  Validators,
  FormControl
} from '@angular/forms';

import { ErrorStateMatcher } from '@angular/material/core';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'bbv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  failureMessage: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.createForm();
  }

  ngOnInit() {
    this.failureMessage = '';
  }

  login() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      () => {
        this.failureMessage = '';
      },
      () => {
        this.failureMessage = 'Login failed. Please check your email & password.';
      }
    );
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }
}
