import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
