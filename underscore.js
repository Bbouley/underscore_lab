var _ = { average : function(array){
  var total = 0;
  for (i=0; i<array.length; i++){
    var newTotal = (total+= array[i]);
  }return newTotal/array.length
   }
}

var array1 = [1,2,3,4,5]
// console.log(_.average(array1))

_.contains = function(array, num1){
  for (i=0; i < array.length; i++){
    if(array[i] === num1){
     return true;
     }
  } return false;
};

// console.log(_.contains(array1, 6))

_.first = function(array){
  return array[0]
}

// console.log(_.first(array1))

_.last = function(array){
  return array[(array.length)-1]
}

// console.log(_.last(array1))

_.max = function(array){
  num = 0
  for (i=0; i<array.length; i++){
    if (array[i]>0){
      num = array[i];
    }
  } return num;
}

// console.log(_.max(array1))

_.min = function(array){
  num = 999999999
  for(i=0; i<array.length; i++){
    if (array[i]<num){
      num = array[i]
    }
  } return num;
}

// console.log(_.min(array1))

_.shuffle = function(array){
  var m = array.length, t, i;
  while (m){
  i = Math.floor(Math.random() * m--);
  t = array[m];
  array[m]=array[i];
  array[i]=t;
}  return array;
};

// console.log(_.shuffle(array1))

var array2 = ['dog', 'cat', 'cow', 'mouse', 'bear', 'fish']

_.sample = function(array, numOfItems){
  if (numOfItems === undefined || numOfItems === 0){
    numOfItems = 1
  };
  var copyArray = array.slice(0);
  var newArray = [];
    for(i=0; i<numOfItems; i++){
      var randNum = Math.floor(Math.random()*array.length);
      var randIndex = copyArray[randNum];
      newArray.splice(numOfItems-1, i, randIndex);
    } return newArray;
}

// console.log(_.sample(array2, 2))

_.difference = function(array, array2){
   
   var copyArray = array.slice(0);
   var copyArray2 = array2.slice(0);

     for (i=0; i<copyArray.length; i++){
         var tempArray1 = [];
       
       for (j=0; j<copyArray2.length; j++){
         if (copyArray2[j] === copyArray[i]){
           tempArray = copyArray.splice([j], 1);
        }; 
      }; 
    }; 
    return copyArray; 
  }

var num1 = [1,2,3,4,5,6,7,8,9];
var num2 = [1,3,5,7,9];

//console.log(_.difference(num1,num2))

array3 = ['a', 'b', 'c', 'd']

_.indexOf = function(array, value){
  var notInArray = 0;
  if(value>array.length-1){
    return -1;
  } else  {
    for(i = 0; i<array.length; i++){
      if (value === array[i]){
        return i;
      } else { 
        notInArray = -1 };
    };
  }; return notInArray;
};

console.log(_.indexOf(array3, 'c'));
