import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesNo',
})
export class YesNoPipe implements PipeTransform {
  public transform(value: any, ...args: any[]): any {
    return value ? 'Yes' : 'No';
  }
}
