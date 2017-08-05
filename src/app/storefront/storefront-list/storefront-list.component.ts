import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { StoreFrontItem } from '../storefront-item';

@Component({
  selector: 'shu-storefront-list',
  templateUrl: './storefront-list.component.html',
  styleUrls: ['./storefront-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreFrontListComponent implements OnInit {

  @Input() items: StoreFrontItem[];

  constructor() { }

  ngOnInit() {
  }

}
