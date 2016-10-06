'use strict';

// How does forEach work?
// A: it is some method that goes over every item within a list (an array)
// In techinical terms, it is a CLEANER alternative to a for loop
// For every element within a list of elements (aka Array), we are going to
  // apply the CALLBACK to each element
  // in a function that looks like this:

[1, 2, 3].forEach(function(num){
  console.log(num);
})

// we are not actually transforming anything yet -- just going through each element
// it INVOKES the callback that we are passing to it

// forEach says: I'm looking at a box full of smaller boxes
// for each box I'm going to inspect I'm going to call the callback function
// i'm going to PASS the current element (cb(1), cb(2), etc.)

const forEach = function(data, _cb){ // data here means ARRAY, _cb means CALLBACK
  // for every element within a list of elements (aka Array)
  for (let i = 0; i < data.length; i++){
    // apply the callback to each element
    // all we have to do here is CALL, not reference, the callback
    console.log('About to call the callback for index ' + i);
    const current = data[i] // we want to read the value of the index, i, that we're at right now
    // data at i is the current elemet ITSELF, not the index number
    _cb(current); // we're literally passing callback the CURRENT number in the index -- think again of box analogy
    // _cb is where all the magic happens, and is where we're getting elm
  }
}



forEach([1, 2, 3], function(curr){ // note that EVERYTHING in here is within the forEach argument
  console.log("Current elemet is: " + curr); //we have gussied this up just so it's printing a full English sentence before num
});