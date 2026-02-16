// Add to your app.config.ts or main.ts

import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { jwtInterceptor } from './auth/jwt.interceptor';
import { authGuard } from './auth/auth.guard';

// Example route configuration
export const routes = [
  { path: 'login', loadComponent: () => import('./auth/login.component').then(m => m.LoginComponent) },
  { path: 'protected', canActivate: [authGuard], loadComponent: () => import('./some.component').then(m => m.SomeComponent) }
];

// Provider configuration
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([jwtInterceptor]))
  ]
};
