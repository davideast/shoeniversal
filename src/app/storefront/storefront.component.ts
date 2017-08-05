import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreFrontItem } from './storefront-item';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Component({
  selector: 'shu-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.scss']
})
export class StoreFrontComponent {
  
  items: Observable<StoreFrontItem[]>;

  constructor(route: ActivatedRoute) {
    this.items = route.data.map((resolved: any[]) => resolved[0]);
  }

}
