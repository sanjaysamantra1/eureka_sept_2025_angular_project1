import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {
  transform(num: number) {
    const rem = num % 10;
    let result = '';
    if (rem === 1) {
      result = num + 'st'
    }
    else if (rem === 2) {
      result = num + 'nd'
    }
    else if (rem === 3) {
      result = num + 'rd'
    } else {
      result = num + 'th'
    }
    return result;
  }
}
