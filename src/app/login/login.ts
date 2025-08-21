import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../servises/http.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})

export class Login {
  username = '';
  password = '';

  constructor(private httpService: HttpService, private router: Router) {}

  onLogin() {
    this.httpService.login(this.username, this.password).subscribe(user => {
      if (user.valid) {
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/profile']);
      } else {
        alert('Invalid login');
      }
    });
  }
}
