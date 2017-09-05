import * as functions from 'firebase-functions';
import * as express from 'express';
import * as fs from 'fs';

const router = express.Router();

router.use((req, res, next) => {
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
});

router.get('*', (req, res) => {
  if(req.path.indexOf('shoes.json')) {
    return fs.readFile(__dirname + '/shoes.json', 'utf8', (err, data) => {
      if(err) { res.status(500).send("error?"); }
      else { res.status(200).send(data); }
    });
  }
});
