import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weightConversion'
})
export class WeightConversionPipe implements PipeTransform {

  transform(valueInKilograms: number): string {
    const weightInPounds = Math.floor(valueInKilograms / 0.45359237);
    return `${weightInPounds}`;
  }
}
