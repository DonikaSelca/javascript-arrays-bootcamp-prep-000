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

function destructivelyAddElementToBeginningOfArray(array, element) {
  chocolateBars = array.unshift(element)
  return chocolateBars
}function destructivelyAddElementToBeginningOfArray(array, element) {
  chocolateBars = array.unshift(element)
  return chocolateBars
}