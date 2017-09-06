import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';

import { HeaderModule } from '../header';
import { HeroModule } from '../hero';
import { PromoGridModule } from '../promo-grid';
import { ShoeGridModule } from '../shoe-grid';
import { FooterModule } from '../footer';
import { TransferHttpModule } from '../transfer-http';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    HeroModule,
    PromoGridModule,
    ShoeGridModule,
    FooterModule,
    TransferHttpModule
  ],
  declarations: [MainPageComponent],
  exports: [MainPageComponent]
})
export class MainPageModule { }
