import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
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

  getAllUsers() {
    return from([
      new User(1, 'John', 'Doe', 50000, 'Male', 'john.doe@example.com'),
      new User(2, 'Jane', 'Doe', 60000, 'Female', 'jane.doe@example.com'),
      new User(3, 'Jim', 'Beam', 70000, 'Male', 'jim.beam@example.com')
    ])
  }
}
