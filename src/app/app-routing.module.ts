import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ShoeResolveGuard } from './route-guard';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
