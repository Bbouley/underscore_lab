var _ = { average : function(array){
  var total = 0;
  for (i=0; i<array.length; i++){
    var newTotal = (total+= array[i]);
  }return newTotal/array.length
   }
}

var array1 = [1,2,3,4,5]
console.log(_.average(array1))

_.contains = function(array, num1){
  for (i=0; i < array.length; i++){
    if(array[i] === num1){
     return true;
     }
  } return false;
};

console.log(_.contains(array1, 6))
