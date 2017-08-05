import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StoreFrontComponent } from './storefront';
import { ShoeResolveGuard } from './route-guard';

const routes: Routes = [
  {
    path: '',
    component: StoreFrontComponent,
    resolve: [ShoeResolveGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
