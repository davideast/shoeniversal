import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreFrontModule } from './storefront';
import { RouteGuardModule } from './route-guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreFrontModule,
    AppRoutingModule,
    RouteGuardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
