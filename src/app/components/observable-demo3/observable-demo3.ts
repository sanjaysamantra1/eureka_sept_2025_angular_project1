import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, switchMap, map } from 'rxjs';

@Component({
  selector: 'app-observable-demo3',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './observable-demo3.html',
  styleUrl: './observable-demo3.css'
})
export class ObservableDemo3 {
searchResult$: Observable<any> | undefined;
  searchForm: any;
  constructor(private http: HttpClient) {
    this.searchForm = new FormGroup({
      searchField: new FormControl()
    });
  }
  ngOnInit() {
    this.searchResult$ = this.searchForm.get("searchField").valueChanges.pipe(
      switchMap((term) =>
		  this.http.get<any>(`https://dummyjson.com/users/search?q=${term}`)),
      map((response: any) =>
		 response.users.length > 0 ? response.users : []
    ));
  }
}
