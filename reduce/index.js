function reduce(list, callbackFn, initialValue) {
  let accumulator

  if (!list.length && initialValue) {
    return initialValue
  } else if (!list.length) {
    throw new TypeError('Reduce of empty array with no initial value');
  } else if (list.length === 1) {
    return list[0]
  }
  
  for (let i = 0; i < list.length; i++) {    
    if (initialValue) {
      accumulator = callbackFn(i === 0 ? initialValue : accumulator, list[i], i, list)
      continue
    }

    if (i === list.length - 1)
     return accumulator

    accumulator = callbackFn(i === 0 ? list[i] : accumulator, list[i + 1], i, list)
  }
  
  return accumulator
}

const result = reduce(
  [1, 2, 3, 4],
  (accumulator, currentValue) => accumulator + currentValue,
  10
)
