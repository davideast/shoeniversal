import { angularUniversal } from 'angular-universal-express';
import * as fs from 'fs';

const url = '/';
const request = { path: url } as any;
const response = { 
  send(html) { 
    fs.writeFileSync(__dirname + '/index.static.html', html);
  }
} as any;

angularUniversal({ 
  main: __dirname + '/main.bundle',
  index: __dirname + '/index.s.html',
  enableProdMode: true
})(request, response);
