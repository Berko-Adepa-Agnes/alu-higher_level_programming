#!/usr/bin/node
const process = require('process');
if (process.argv[2] === undefined) {
  console.log('no argument');
} else {
console.log(process.argv[2]);
}
