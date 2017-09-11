import { Component, OnInit, NgZone, PLATFORM_ID, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TransferHttp } from '../transfer-http';
import tti from 'tti-polyfill';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { merge } from 'rxjs/observable/merge';
import { of } from 'rxjs/observable/of';

declare var PerformanceObserver;

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
  entries: Observable<any[]>;

  constructor(
    private http: TransferHttp, 
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: string) { }

  ngOnInit() {
    this.shoes = this.getShoes();
    this.banner = this.getBanner();
    this.entries = this.observeMetrics().do(console.log);
    
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

  observeMetrics(): Observable<any> {
    if(this.platformId !== 'browser') {
      return of([]);
    }
    const paint$ = this.observePaint();
    const tti$ = this.observeTTI();
    return merge(paint$, tti$).scan((acc: any[], value: any[]) => {
      return [...acc, ...value];
    });
  }

  observePaint(): Observable<any[]> {
    return new Observable(subscriber => {
      if('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          let entries = [];
          for (const entry of list.getEntries()) {
            const name = entry.name;
            const time = Math.round(entry.startTime + entry.duration);
            entries = entries.concat([{ time, name }]);
          }
          const onNext = this.onNext(subscriber);
          onNext(entries);
        });
        observer.observe({entryTypes: ['paint']});
      }
    });
  }

  observeTTI() {
    return new Observable(subscriber => {
      const ttiPromise = tti.getFirstConsistentlyInteractive()
      .then(time => [{ name: 'tti', time }])
      .then(stats => {
        var onNext = this.onNext(subscriber);
        onNext(stats);
      }).catch(subscriber.error)
    });
  }

  onNext(subscriber) {
    return (value) => this.ngZone.run(() => subscriber.next(value));
  }
}
