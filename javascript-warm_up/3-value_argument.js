#!/usr/bin/node
const process = require('process');
if (process.argv[2] === undefined) {
  console.log('no argument');
} else {
  console(process.argv[2]);
}
