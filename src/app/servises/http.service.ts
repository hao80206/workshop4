import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private httpService = inject(HttpClient);
  private server = "http://localhost:3000";


  getUsers() {
    return this.httpService.get<User[]>(this.server + "/api/user");
  }
  
}
