import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreFrontComponent } from './storefront.component';
import { StoreFrontListComponent } from './storefront-list';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StoreFrontComponent, StoreFrontListComponent]
})
export class StoreFrontModule { }
