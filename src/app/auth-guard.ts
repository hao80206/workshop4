import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router) {}

  canActivate(): boolean {
    const user = localStorage.getItem('user'); // check if user exists
    if (user) {
      return true; // allow access
    } else {
      this.router.navigate(['/login']); // redirect to login
      return false;
    }
  }
}