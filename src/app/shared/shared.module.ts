import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailDirective } from './validators/email.directive';
import { ElapsedPipe } from './pipes/elapsed.pipe';
import { FormatedPipe } from './pipes/formated.pipe';
import { Formated1Pipe } from './pipes/formated1.pipe';

@NgModule({
  declarations: [EmailDirective, ElapsedPipe, FormatedPipe, Formated1Pipe],
  imports: [CommonModule],
  exports: [EmailDirective, ElapsedPipe, FormatedPipe, Formated1Pipe],
})
export class SharedModule {}
