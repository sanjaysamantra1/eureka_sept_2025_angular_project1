import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {
  private userRole: string = 'student';

  getUserRole() {
    return this.userRole;
  }
}
