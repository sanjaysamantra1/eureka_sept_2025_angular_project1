import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    // return this.httpClient.get<User[]>('http://localhost:3000/employees');

    return this.httpClient.get<User[]>('http://localhost:3000/employees').pipe(
      map((responseArr: User[]) => {
        return responseArr.map((userInfo: User) => {
          let { id, firstName, lastName, salary, gender, email } = userInfo;
          return new User(id, firstName, lastName, salary, gender, email);
        });
      })
    );
  }
}
