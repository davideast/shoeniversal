import { Injectable, Optional, RendererFactory2, ViewEncapsulation } from '@angular/core';
import { TransferState } from './transfer-state';
import { PlatformState } from '@angular/platform-server';

@Injectable()
export class ServerTransferState extends TransferState {
  constructor(private state: PlatformState, private renderFactory: RendererFactory2) {
    super();
  }

  inject() {
    try {
      const document: any = this.state.getDocument();
      const transferStateString = JSON.stringify(this.toJson());
      const renderer = this.renderFactory.createRenderer(document, {
        id: '-1',
        encapsulation: ViewEncapsulation.None,
        styles: [],
        data: []
      });
      
      const head = document.head;
      if(head.name !== 'head') {
        throw new Error('<head> needs to be the first element in your document');
      }
      const script = renderer.createElement('script');
      renderer.setValue(script, `window['TRANSFER_STATE'] = ${transferStateString}`);
      renderer.appendChild(head, script);
    } catch (e) {
      throw e;
    } 
  }
}
