node_modules/.bin/ng build --prod
cp src/shoes.json static/
firebase use nonssr
firebase deploy --only hosting
