import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { TransferState } from './transfer-state/transfer-state';

@Component({
  selector: 'shu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'SHOENIVERSAL'; 
  constructor(private cache: TransferState) { }

  ngOnInit() {
    this.cache.set('cached', true);
  }
}
