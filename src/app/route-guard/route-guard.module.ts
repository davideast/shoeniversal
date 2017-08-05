import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoeResolveGuard } from './shoe-resolve.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ShoeResolveGuard]
})
export class RouteGuardModule { }
