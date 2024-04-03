import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'formated1',
})
export class Formated1Pipe implements PipeTransform {
  transform(date: string, ...args: unknown[]): unknown {
    return moment(date).format('LLL');
  }
}
