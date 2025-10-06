import { User } from '../../models/user';
import { UserService } from './../../services/user-service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
  userArr: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((users: User[]) => {
      this.userArr = users;
      console.log(users)
    })
  }
}
