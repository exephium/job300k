function some(list, callbackFn) {
  for (let i = 0; i < list.length; i++) {
    if (callbackFn(list[i], i, list))
      return true
  }

  return false
}

const result = some([1, 2, 3, 4, 5], (el) => el % 2 === 0)