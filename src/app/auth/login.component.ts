import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <input type="text" formControlName="username" placeholder="Username">
      <input type="password" formControlName="password" placeholder="Password">
      <button type="submit" [disabled]="loginForm.invalid">Login</button>
      <div *ngIf="error">{{error}}</div>
    </form>
  `
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value as any).subscribe({
        next: () => this.router.navigate(['/']),
        error: (err) => this.error = 'Login failed'
      });
    }
  }
}
