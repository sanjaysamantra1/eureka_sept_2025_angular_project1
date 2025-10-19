import { CanDeactivateFn } from '@angular/router';

export const canExitGuard: CanDeactivateFn<unknown> = (component: any, currentRoute, currentState, nextState) => {
  if (component.hasChanges) {
    alert('please save your changes before you leave this route');
    return false;
  } else {
    return true;
  }
};
