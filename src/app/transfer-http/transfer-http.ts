import { Injectable } from '@angular/core';
import { Http, Request, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { TransferState } from '../transfer-state/transfer-state';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/from';

@Injectable()
export class TransferHttp {
  constructor(private http: Http, protected transferState: TransferState) {}

  get(url: string, options?: RequestOptionsArgs): Observable<any> {
    return this.getData(url, options, (url: string, options: RequestOptionsArgs) => {
      return this.http.request(url, options);
    })
  }

  private getData(uri: string | Request, options: RequestOptionsArgs, callback: (uri: string | Request, options?: RequestOptionsArgs) => Observable<Response>) {

    let url = uri;

    if(typeof uri !== 'string') {
      url = uri.url;
    }

    const key = url + JSON.stringify(options);

    try {
      return this.resolveData(key);
    } catch(e) {
      return callback(uri, options)
        .map(res => res.json())
        .do(data => {
          this.setCache(key, data)
        });
    }

  }

  private resolveData(key: string) {
    const data = this.getFromCache(key);

    if (!data) {
      throw new Error();
    }

    return Observable.from(Promise.resolve(data));
  }

  private setCache(key, data) {
    return this.transferState.set(key, data);
  }

  private getFromCache(key): any {
    return this.transferState.get(key);
  }
}

