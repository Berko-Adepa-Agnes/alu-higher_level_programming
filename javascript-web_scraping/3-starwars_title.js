#!/usr/bin/node
const request = require('request');
const id = process.argv[2];
const url = 'https://swapi.dev/api/films/' + id + '/';

request(url, function (error, response, body) {
  if (error) {
    console.error('Request error:', error);
    return;
  }
  console.log('Response status code:', response.statusCode);
  console.log('Response body:', body); // Log the response body for debugging
  if (response.statusCode !== 200) {
    console.error(`Invalid status code: ${response.statusCode}`);
    return;
  }
  try {
    const json = JSON.parse(body);
    console.log(json.title);
  } catch (parseError) {
    console.error('JSON parse error:', parseError);
  }
});
