import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { concatMap, forkJoin, from, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  imports: [],
  templateUrl: './observable-demo2.html',
  styleUrl: './observable-demo2.css'
})
export class ObservableDemo2 {
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    // this.forkjoin_demo();
    // this.mergemap_demo();
    this.concatmap_demo();
  }

  forkjoin_demo() {
    let request_1 = this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    let request_2 = this.httpClient.get('https://jsonplaceholder.typicode.com/comments');
    forkJoin([request_1, request_2]).subscribe(
      {
        next: (responseArr) => console.log('Partial response: ', responseArr),
        error: (err) => console.log(err),
        complete: () => console.log('All data received'),
      });
  }

  moviesArr = [
    { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010 },
    { id: 2, title: "Spirited Away", director: "Hayao Miyazaki", year: 2001 },
    { id: 3, title: "Parasite", director: "Bong Joon-ho", year: 2019 },
    { id: 4, title: "Interstellar", director: "Christopher Nolan", year: 2014 }
  ];
  mergemap_demo() {
    let moviesPublisher = from(this.moviesArr);  // outer observable
    moviesPublisher.pipe(mergeMap(movieResponse => { // movieResponse still doesnt have IMDB data
      return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${movieResponse.id}`)
    })).subscribe(imdbResponse => {
      console.log(imdbResponse)
    });
  }

  concatmap_demo() {
    let moviesPublisher = from(this.moviesArr);  // outer observable
    moviesPublisher.pipe(concatMap(movieResponse => { // movieResponse still doesnt have IMDB data
      return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${movieResponse.id}`)
    })).subscribe(imdbResponse => {
      console.log(imdbResponse)
    });
  }
}
