import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConverter',
})
export class tempConverterPipe implements PipeTransform {
  transform(value: number, unit: string) {
    if (value && !isNaN(value)) {
      if (unit === 'C') {
        var temperature = value - 273.15;
        return temperature.toFixed(2);
      } else if (unit === 'K') {
        var temperature = value + 273.15;
        return temperature.toFixed(2);
      }
    }
    return;
  }
}
