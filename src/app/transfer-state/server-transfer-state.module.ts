import { NgModule } from '@angular/core';
import { TransferState } from './transfer-state';
import { ServerTransferState } from './server-transfer-state';

@NgModule({
  providers: [
    { provide: TransferState, useClass: ServerTransferState }
  ]
})
export class ServerTransferStateModule { }
