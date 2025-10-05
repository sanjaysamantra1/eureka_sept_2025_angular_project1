import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  imports: [],
  templateUrl: './http-demo1.html',
  styleUrl: './http-demo1.css'
})
export class HttpDemo1 {
  user_api_url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient:HttpClient){}

  ngOnInit() {
    this.fetchUsers_javascript()
    this.fetchUsers_angular()
  }

  fetchUsers_javascript() { // promise
    fetch(this.user_api_url).then(
      (response) => {
        console.log(response);
        response.json().then(
          (finalResponse) => console.log(finalResponse),
          (finalError) => console.log(finalError),
        )
      },
      (error) => {
        console.log(error)
      }
    )
  };

  fetchUsers_angular(){ // observable
    this.httpClient.get(this.user_api_url,{ observe: 'response' }).subscribe(
      (response)=>{console.log(response)},
      (error)=>{console.log(error)}
    );
  }
}
