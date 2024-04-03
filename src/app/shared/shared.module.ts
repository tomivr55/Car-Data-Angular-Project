import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailDirective } from './validators/email.directive';
import { ElapsedPipe } from './pipes/elapsed.pipe';
import { FormatedPipe } from './pipes/formated.pipe';

@NgModule({
  declarations: [EmailDirective, ElapsedPipe, FormatedPipe],
  imports: [CommonModule],
  exports: [EmailDirective, ElapsedPipe, FormatedPipe],
})
export class SharedModule {}
