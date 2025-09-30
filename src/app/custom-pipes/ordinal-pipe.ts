import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
  pure: true
})
export class OrdinalPipe implements PipeTransform {
  transform(num: number) { // how many times transform()
    console.log('Ordinal pipe called...')
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
