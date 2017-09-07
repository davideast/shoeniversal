node_modules/.bin/ng build --prod
node_modules/.bin/ng build --prod --app 1 --output-hashing none
tsc -p server/tsconfig.functions.json
mv static/index.html functions/
cp src/shoes.json static/
cp server/package.json functions/
