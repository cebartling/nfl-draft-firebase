import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'heightConversion'
})
export class HeightConversionPipe implements PipeTransform {

  transform(valueInMeters: number): string {
    const converted = valueInMeters / 0.3048;
    const feet = Math.floor(converted);
    const inches = Math.round((converted - feet) * 12);
    return `${feet}' ${inches}"`;
  }

}
