import * as express from 'express';
import * as functions from 'firebase-functions';
import { angularUniversal } from 'angular-universal-express';

const app = express();

app.get('**', angularUniversal({
  index: __dirname + '/index.html',
  main: __dirname + '/main.bundle',
  enableProdMode: true
}));

export let ssrapp = functions.https.onRequest(app);
