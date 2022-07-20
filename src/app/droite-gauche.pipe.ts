import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'droiteGauche'
})
export class DroiteGauchePipe implements PipeTransform {

  transform(value: any , ...args: unknown[]): unknown {
    return (value.slice(1) + ''+ value.slice(0,1));
  }

}
