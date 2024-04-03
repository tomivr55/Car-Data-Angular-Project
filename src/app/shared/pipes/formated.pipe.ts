import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'formated',
})
export class FormatedPipe implements PipeTransform {
  transform(date: string, ...args: unknown[]): unknown {
    return moment(date).format('lll');
  }
}
