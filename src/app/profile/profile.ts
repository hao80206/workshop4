import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit {
  currentUser: any = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.currentUser = JSON.parse(userData);
    } else {
      // Not logged in → redirect to login
      this.router.navigate(['/login']);
    }
  }

  saveProfile() {
    // Save updated user to localStorage
    localStorage.setItem('user', JSON.stringify(this.currentUser));
    alert('Profile saved!');
  }

  logOut() {
    localStorage.clear();  // Clear session
    this.router.navigate(['/login']);  // Redirect to login page
  }
}
