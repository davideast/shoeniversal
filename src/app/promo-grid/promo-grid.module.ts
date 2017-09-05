import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoGridComponent } from './promo-grid.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PromoGridComponent],
  exports: [PromoGridComponent]
})
export class PromoGridModule { }
