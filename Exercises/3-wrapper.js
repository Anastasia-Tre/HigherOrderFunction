'use strict';

const contract = (fn, ...types) => (x, y) => {
  if (!types[0](x)) throw Error('TypeError: wrong first argument');

  if (!types[1](y)) throw Error('TypeError: wrong second argument');

  if (typeof types[2](fn(x, y)) !== typeof fn(x, y)) throw Error('TypeError: wrong result of function(third argument)');

  return fn(x, y);
};

{
  const add = (a, b) => a + b;
  const addNumbers = contract(add, Number, Number, Number);
  const res = addNumbers(2, 3);
  console.dir(res);
}



{
  const concat = (s1, s2) => s1 + s2;
  const concatStrings = contract(concat, String, String, String);
  const res = concatStrings('Hello ', 'world!');
  console.dir(res);
}

// const s = 6;
// const q = 5 + '';
// const type = Number(s+q);
// if (type) console.log('=');
// if (!NaN) console.log('=');
// console.log(typeof s+q == typeof type);

module.exports = { contract };
