import { Component, signal, inject,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpService } from './servises/http.service';

import { User } from './model/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {

  private httpService = inject(HttpService);
  protected readonly title = signal('workshop4');
  users:User[]=[];

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
}
