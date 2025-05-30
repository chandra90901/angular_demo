import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User, Userinfo } from '../model/users';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Userinfo[]> {
    return this.http.get<{ users: User[] }>(this.apiUrl).pipe(
      map(response =>
        response.users.map(user => ({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        }))
      )
    );
  }

}
