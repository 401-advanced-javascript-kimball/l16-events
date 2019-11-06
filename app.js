'use strict';

const fs = require('fs');
const eventEmitter = require('./event');
const util = require('util');
require('./logger');

const writeFileWithPromise = util.promisify(fs.writeFile);
const readFileWithPromise = util.promisify(fs.readFile);

const onReadDone = eventEmitter.addListener('fs-read-done', (payload) => transform(payload));

funciton 

const alterFile = (file) => {
  fs.readFile( file, (err, data) => {
    if(err) { throw err; }
    let text = data.toString().toUpperCase();
    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { throw err; }
      console.log(`${file} saved`);
    });
  });
};

let file = process.argv.slice(2).shift();
alterFile(file);
