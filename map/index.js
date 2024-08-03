const list = [1, 2]

function map(list, callbackFn) {
  const arr = []

  for (let i = 0; i < list.length; i++) {
    arr.push(callbackFn(list[i], i, list))
  }

  return arr
}

const result = map(list, (el, i, arr) => {
    return {
      id: ++i,
      name: `User ${el}`,
      list: arr,
    }
  }
)
