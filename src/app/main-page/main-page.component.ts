import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TransferHttp } from '../transfer-http';
import 'rxjs/add/operator/startWith';

export interface Shoe {
  name: string;
  price: string;
  img: string;
}

export interface Banner {
  img: string;
  headings: string[];
}

@Component({
  selector: 'shu-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  shoes: Observable<Shoe[]>;
  banner: Observable<Banner>;

  constructor(private http: TransferHttp) { }

  ngOnInit() {
    this.shoes = this.getShoes();
    this.banner = this.getBanner();
  }

  getBanner() {
    return this.http.get('https://shoeniversal.firebaseio.com/banner.json')
      .map((data: { img: string; title: string }) => {
        const { img, title } = data;
        const headings = title.split(" ");
        return { img, headings };
      }).startWith({ img: '', headings: []});
  }

  getShoes() {
    return this.http.get('https://shoeniversal.firebaseio.com/shoes.json')
      .map(data => data as Shoe[]);
  }

}
