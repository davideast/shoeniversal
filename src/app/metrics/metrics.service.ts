import { Injectable, NgZone, PLATFORM_ID, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import tti from 'tti-polyfill';
import { of } from 'rxjs/observable/of';
import { merge } from 'rxjs/observable/merge';
import 'rxjs/add/operator/scan';

declare var PerformanceObserver;

@Injectable()
export class MetricsService {

  constructor(
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: string) { }

  private isNotBrowser() {
    return this.platformId !== 'browser';
  }

  observeMetrics(): Observable<any> {
    if (this.isNotBrowser()) { return of([]); }
    const paint$ = this.observePaint();
    const tti$ = this.observeTTI();
    return merge(paint$, tti$).scan((acc: any[], value: any[]) => {
      return [...acc, ...value];
    });
  }

  observePaint(): Observable<any[]> {
    return new Observable(subscriber => {
      if ('PerformanceObserver' in window) {
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
        observer.observe({ entryTypes: ['paint'] });
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
