import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';

@Pipe({ name: 'unique' })
export class FilterPipe implements PipeTransform {
  transform(value: any, name?: any): any {
    if (value !== undefined && value !== null) {
      return _.uniqBy(value, name);
    }
    return value;
  }
}
