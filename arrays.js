var chocolateBars = ['snickders','hunderd grand','kitkat','skittles']

function addElementToBeginningOfArray(arry , elem){
   elem="foo";
   var newArray = [elem,...arry]
   return newArray;
}
function destructivelyAddElementToBeginningOfArray(array,elem){
// elem="foo";
  array
var newArray=[elem,...array]
  return newArray;
  
}

function addElementToEndOfArray(array,elem){
 let newArray=[...array,elem]
 return newArray;
}
function destructivelyAddElementToEndOfArray(array,elem){
  let newArray=[...array,elem]
  alert(array);
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
       array.shift(); 
       return array;
}

function removeElementFromBeginngingOfArray(array){
  array.slice(1);
  return array;
  
}
function destructivelyRemoveElementFromeEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  let newArray=array.slice(0,array.length-1)
  return newArray;
}







