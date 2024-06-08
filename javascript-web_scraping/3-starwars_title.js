#!/usr/bin/node
const request = require('request');
const id = process.argv[2];
const url = 'https://swapi.dev/api/films/' + id + '/';

request(url, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    const json = JSON.parse(body);
    console.log(json.title);
  } else {
    console.error('Error:', error);
  }
});
