import * as angularUniversal from 'angular-universal-express-firebase';

const app = angularUniversal.trigger({
  index: __dirname + '/index.html',
  main: __dirname + '/main.bundle',
  enableProdMode: true,
  cdnCacheExpiry: 43200, // 12 hrs
  browserCacheExpiry: 3600 // 1 hr
});

export let ssrapp = app;
