import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundDirective } from './directives/background.directive';

@NgModule({
  declarations: [BackgroundDirective],
  imports: [CommonModule],
  exports: [BackgroundDirective],
})
export class SharedModule {}
