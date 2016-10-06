function findWaldo(arr, _found) {

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "Waldo") {
      _found(i);   // execute callback
    }
  }
}



function actionWhenFound(indexNumber) {
  console.log("Found Waldo at index " + indexNumber + " !" );
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);