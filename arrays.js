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
  var desChocolateBars = array.unshift(element)
  return desChocolateBars
}