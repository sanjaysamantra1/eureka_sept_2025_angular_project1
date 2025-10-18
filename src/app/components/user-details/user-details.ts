import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css'
})
export class UserDetails {
  userData: any;
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params['id']);
      this.http.get(`https://jsonplaceholder.typicode.com/users/${params['id']}`).subscribe((data) => {
        this.userData = data;
        console.log(this.userData);
      });
    });
  }
}
