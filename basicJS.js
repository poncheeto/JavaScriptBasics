// Iterate through array with for loop
var myArr = [ 2, 3, 4, 5, 6]

var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

// Nesting for loops
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);