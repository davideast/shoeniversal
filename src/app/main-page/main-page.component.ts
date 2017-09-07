import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TransferHttp } from '../transfer-http';

export interface Shoe {
  name: string;
  price: string;
  img: string;
}

@Component({
  selector: 'shu-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  shoes: Observable<Shoe[]>;

  constructor(private http: TransferHttp) { }

  ngOnInit() {
    this.shoes = this.getShoes();
  }

  getShoes() {
    return this.http.get('https://shoeniversal.firebaseapp.com/shoes.json')
      .map(data => data as Shoe[]);
  }

}
