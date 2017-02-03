const fs = require('fs');

import shortestPath from './shortestPath';

const directions = fs.readFileSync('src/directions.txt', 'utf8');
console.log(shortestPath(directions));
