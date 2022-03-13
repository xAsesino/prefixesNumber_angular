import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefixesnumber'
})
export class PrefixesnumberPipe implements PipeTransform {

  transform(value: number): string {

    let myNumber : number = value;
    
    return `${myNumber.toString().startsWith('0') ? myNumber.toString().substring(1) : myNumber.toString()}`;
  }

}
