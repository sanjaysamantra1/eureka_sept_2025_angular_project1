import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-aboutus',
  imports: [RouterLink],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.css'
})
export class Aboutus {
  constructor(private router: Router, private location: Location) { }

  doSomethingAndGoHome() {
    console.log('Do Something...')
    this.router.navigate(['/home']);
  }

  goToPreviousPage() {
    this.location.back();
  }

  goToNextPage() {
    this.location.forward()
  }
}
