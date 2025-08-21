import { Component, signal, inject,OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { HttpService } from './servises/http.service';

import { User } from './model/user';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App implements OnInit {

  private httpService = inject(HttpService);
  protected readonly title = signal('workshop4');
  private router = inject(Router);
  
  users = [
    { username: 'Alice', email: 'alice@example.com' },
    { username: 'Bob', email: 'bob@example.com' },
    { username: 'Charlie', email: 'charlie@example.com' }
  ];

  ngOnInit(){
    this.httpService.getUsers().subscribe({
      next:(data) => {
        this.users = data;
      },
      error: (e)=>{console.log("some error occured: ", e)},
      complete:()=>{}
    }
  )
  }

  // Make sure these are class members
  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  logOut(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
