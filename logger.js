'use strict';

const eventEmitter = require('./event');

eventEmitter.addListener('fs-write-done', (payload) => consoleReport('Write Done.'));

eventEmitter.addListener('fs-read-done', (payload) => consoleReport('Read Done.'));

eventEmitter.addListener('fs-read-error', (payload) => consoleReport('Read Error.'));

const consoleReport = (message) => {
  const curriedFunc = (payload) => {
    console.log('Message', payload)
  };
  return curriedFunc;
};

