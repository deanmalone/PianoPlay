import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafePipe } from './safe.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [SafePipe],
  providers: [],
  exports: [SafePipe]
})
export class SharedModule { }
