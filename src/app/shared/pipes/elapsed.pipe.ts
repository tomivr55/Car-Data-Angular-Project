import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'elapsed',
})
export class ElapsedPipe implements PipeTransform {
  transform(date: string, ...args: unknown[]): unknown {
    return moment(date).fromNow();
  }
}
