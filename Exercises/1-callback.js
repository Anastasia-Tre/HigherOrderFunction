'use strict';

const iterate = (obj, callback) => {
  //if (typeof obj !== 'object') return;
  for (const key in obj) {
    const value = obj[key];
    callback(key, value, obj);
  }
};

const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
  console.log({ key, value });
});


module.exports = { iterate };
