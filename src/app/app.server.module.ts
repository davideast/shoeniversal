import { NgModule, APP_BOOTSTRAP_LISTENER, ApplicationRef } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { ServerTransferStateModule } from './transfer-state/server-transfer-state.module';
import { TransferState } from './transfer-state/transfer-state';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';

export function onBootstrap(appRef: ApplicationRef, transferState: TransferState) {
  return () => {
    appRef.isStable
      .filter(stable => stable)
      .first()
      .subscribe(() => {
        transferState.inject();
      });
  };
}

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule
  ],
  providers: [
    {
      provide: APP_BOOTSTRAP_LISTENER,
      useFactory: onBootstrap,
      multi: true,
      deps: [
        ApplicationRef,
        TransferState
      ]
    }
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {
  
}
