import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoeGridComponent } from './shoe-grid.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShoeGridComponent],
  exports: [ShoeGridComponent]
})
export class ShoeGridModule { }
