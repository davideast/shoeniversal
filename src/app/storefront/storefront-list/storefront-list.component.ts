import { Component, OnInit, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { StoreFrontItem } from '../storefront-item';

@Component({
  selector: 'shu-storefront-list',
  templateUrl: './storefront-list.component.html',
  styleUrls: ['./storefront-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Native
})
export class StoreFrontListComponent implements OnInit {

  @Input() items: StoreFrontItem[];

  constructor() { }

  ngOnInit() {
  }

}
