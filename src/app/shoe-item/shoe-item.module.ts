import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoeItemComponent } from './shoe-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShoeItemComponent],
  exports: [ShoeItemComponent]
})
export class ShoeItemModule { }
