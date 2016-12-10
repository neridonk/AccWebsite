import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ScrollExComponent } from './scrollEx.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [ScrollExComponent],
  exports: [ScrollExComponent],
  providers: []
})
export class ScrollExModule { }
