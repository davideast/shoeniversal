import * as functions from 'firebase-functions';
// import * as express from 'express';
// import { angularUniversal } from 'angular-universal-express';
import * as angularUniversal from 'angular-universal-express-firebase';

// const app = express();
// app.use((req, res, next) => {
//   res.set('Cache-Control', 'public, max-age=1200, s-maxage=4200');
//   next();
// });

// app.get('**', angularUniversal({
//   index: __dirname + '/index.html',
//   main: __dirname + '/main.bundle',
//   enableProdMode: true
// }));

// export let ssrapp = functions.https.onRequest(app);
const app = angularUniversal.trigger({
  index: __dirname + '/index.html',
  main: __dirname + '/main.bundle',
  enableProdMode: true,
  cdnCacheExpiry: 43200, // 12 hrs
  browserCacheExpiry: 3600 // 1 hr
});

export let ssrapp = app;