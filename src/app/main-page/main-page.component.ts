import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TransferHttp } from '../transfer-http';
import { Http } from '@angular/http';

@Component({
  selector: 'shu-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private transfer: TransferHttp, private http: Http) { }

  ngOnInit() {
    this.cacheTest();
  }

  noCacheTest() {
    this.getShoes().subscribe(console.log);
    setTimeout(() => {
      this.getShoes().subscribe(console.log);
    }, 2000);
  }

  cacheTest() {
    this.getShoesCached().subscribe(console.log);
    setTimeout(() => {
      this.getShoesCached().subscribe(console.log);
    }, 2000);    
  }

  getShoes() {
    return this.http.get('https://shoeniversal.firebaseio.com/shoes.json');    
  }

  getShoesCached() {
    return this.transfer.get('https://shoeniversal.firebaseio.com/shoes.json');
  }

}
