import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailDirective } from './validators/email.directive';
import { ElapsedPipe } from './pipes/elapsed.pipe';

@NgModule({
  declarations: [EmailDirective, ElapsedPipe],
  imports: [CommonModule],
  exports: [EmailDirective, ElapsedPipe],
})
export class SharedModule {}
