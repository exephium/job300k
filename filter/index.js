function filter(list, callbackFn) {
  const arr = []

  for (let i = 0; i < list.length; i++) {
    if (callbackFn(list[i], i, list))
      arr.push(list[i])
  }

  return arr
}

const result = filter([12, 5, 8, 130, 44], (el) => el >= 10)
