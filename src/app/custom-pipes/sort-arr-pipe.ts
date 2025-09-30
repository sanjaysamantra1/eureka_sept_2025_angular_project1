import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortArr',
  pure: false
})
export class SortArrPipe implements PipeTransform {

  transform(arr: any) {
    console.log('Sort pipe called...')
    return arr.sort((a: number, b: number) => a - b);
  }

}
