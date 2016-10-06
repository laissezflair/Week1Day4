'use strict';
// two functions: one countDown, one countUp
// Instead of using two separate functions, can we use closures to create just ONE generator??
function generateCounter(direction){
var countDown = function (n){ ... }
var countUp = function (n){ ... }

function generateCounter(direction){
  if (direction === 'up'){
    return countUp
  } else if (direction == 'down') {
    return countDown;
  }
}

console.log(countDown(100));
console.log(countUp(100));


// the "old way" of doing things:
// var counter = generateCounter('up') // first: create the counter
// counter(100) // second: invoke it