var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
  
function addElementToBeginningOfArray(array, element) {
  var newChocolateBars = [element, ...array]
  return newChocolateBars
}

function destructivelyaddElementToBeginningOfArray(array, element) {
  chocolateBars = array.unshift(element)
  return chocolateBars
}