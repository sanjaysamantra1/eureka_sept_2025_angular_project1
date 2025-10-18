import { RouterLink } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from './../../services/user-service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  imports: [
    RouterLink
  ],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
  userArr = [
    new User(1, 'John', 'Doe', 50000, 'Male', 'john.doe@example.com'),
    new User(2, 'Jane', 'Doe', 60000, 'Female', 'jane.doe@example.com'),
    new User(3, 'Jim', 'Beam', 70000, 'Male', 'jim.beam@example.com')
  ]
}
