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

_.first = function(array){
  return array[0]
}

console.log(_.first(array1))

_.last = function(array){
  return array[(array.length)-1]
}

console.log(_.last(array1))

_.max = function(array){
  num = 0
  for (i=0; i<array.length; i++){
    if (array[i]>0){
      num = array[i];
    }
  } return num;
}

console.log(_.max(array1))

_.min = function(array){
  num = 999999999
  for(i=0; i<array.length; i++){
    if (array[i]<num){
      num = array[i]
    }
  } return num;
}

console.log(_.min(array1))

_.shuffle = function(array){
  var m =array.length, t, i;
  while (m){
  i = Math.floor(Math.random() * m--);
  t = array[m];
  array[m]=array[i];
  array[i]=t;
} return array;
};

console.log(_.shuffle(array1))
