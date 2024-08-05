function every(list, callbackFn) {
  for (let i = 0; i < list.length; i++) {
    if (!callbackFn(list[i]))
      return false
  }

  return true
}

const result = every([12, 5, 8, 130, 44], (el) => el >= 10)