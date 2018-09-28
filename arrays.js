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

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift()
}

function removeElementFromBeginningOfArray(array) {
  newArray = array.slice()
  return array
}
// function removeEleentFromBeginningOfArray(array) {
//   return newArray = array.slice()
// }

// function destructivelyRemoveElementFromEndOfArray(array) {
//   return array.pop()
// }
