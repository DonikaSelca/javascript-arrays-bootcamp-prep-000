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
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var newChocolateBars = [...array, element]
  return newChocolateBars
}

function desstructivelyAddElementToEndOfArray(array, element) {
  chocolateBars = chocolateBars.push(element)
  return chocolateBars
}
