'use strict';


// Create a function that uses a callback to go through each item in an array and double it
//

const map = function(data, _transformElm){
  // set a new empty array called "output" into which you're going to push new values (new_value)
    let output = [];
  //reminder that let allows variables to be reassigned -- unlike const

    data.forEach(function(current){
      const new_value = _transformElm(current);
      //note that const allows REASSIGNMENT here but const will *not* allow the variable to actually be changed, like if output = output + [ ]
      //push that into the OUTPUT array -- can do this all in one step, just doing it in two here for expression
      output.push(new_value);
    });

    return output;
    // this is just passing a callback as an anonymous function
}

function dinner(name, elm) {
  console.log("pizza");
}

// function that you are passing as transform
// elm variable here stands for *current element*
const result = map([1, 4, 8, 12], function(num){
  // transform an elm to its double
  return num * 2;
  });

console.log(result);