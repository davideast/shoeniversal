import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { TransferHttp } from './transfer-http';

@NgModule({
  imports: [
    HttpModule
  ],
  providers: [
    TransferHttp
  ]
})
export class TransferHttpModule {}
