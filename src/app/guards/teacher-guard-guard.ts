import { CanActivateFn } from '@angular/router';
import { UserInformationService } from '../services/user-information-service';
import { inject } from '@angular/core';

export const teacherGuard: CanActivateFn = (route, state) => {
  const userInfoService = inject(UserInformationService);
  if (userInfoService.getUserRole() === 'teacher') {
    return true;
  } else {
    alert('Sorry, You dont have access to this page');
    return false;
  }
};
