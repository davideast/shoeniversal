import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

const data = [{
  id: "1",
  name: "Shoe One",
  price: 49.99,
  img: 'pic.jpg'
}, {
  id: "2",
  name: "Shoe Two",
  price: 89.99,
  img: 'pic2.jpg'
}]

@Injectable()
export class ShoeResolveGuard implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    let id = route.paramMap.get('id');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  }
}
