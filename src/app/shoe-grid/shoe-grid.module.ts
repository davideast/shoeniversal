import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoeGridComponent } from './shoe-grid.component';
import { ShoeItemModule } from '../shoe-item'

@NgModule({
  imports: [
    CommonModule,
    ShoeItemModule
  ],
  declarations: [ShoeGridComponent],
  exports: [ShoeGridComponent]
})
export class ShoeGridModule { }
