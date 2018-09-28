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
  chocolateBars = chocolateBars.unshift(element)
  return chocolateBars
}

function addElementToEndOfArray(array, element) {
  var newChocolateBars = [...array, element]
  return newChocolateBars
}