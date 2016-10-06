'use strict';

function findWaldo(arr, _found) {

  let count = 0; // This is the variable replacing the index "i"

  arr.forEach(function(num) {

    if (num == "Waldo") {

      _found(count);  // execute callback
    }
    count++;
  });
}



function actionWhenFound(indexNumber) {
  console.log("Found Waldo at index " + indexNumber + "!" );
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);