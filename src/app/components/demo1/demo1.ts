import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.html',
  styleUrl: './demo1.css'
})
export class Demo1 {
  showAlert() {
    Swal.fire('Good job!', 'You clicked the button!', 'success');
  }

  showSnackBar() {
    new Snackbar('Helloooo, Good Morning',
      { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
    );
  }
}
