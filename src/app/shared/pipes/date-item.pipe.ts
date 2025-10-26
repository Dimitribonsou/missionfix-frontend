import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateItem'
})
export class DateItemPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
