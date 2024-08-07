function flatMap(list, callbackFn) {

  function map(list, callbackFn) {
    const arr = []
  
    for (let i = 0; i < list.length; i++) {
      arr.push(callbackFn(list[i], i, list))
    }
  
    return arr
  }

  function flat(list, depth = 1) {
    const arr = []
  
    (function f(list, depth) {
      for (let i = 0; i < list.length; i++) {
        if (list[i] === undefined) continue
        else if (Array.isArray(list[i]) && depth > 0) f(list[i], depth - 1)
        else arr.push(list[i])
      }
    })(list, depth)
  
    return arr
  }

  return flat(map(list, callbackFn))
}

const result = flatMap(["it's Sunny in", "", "California"], (x) => x.split(" "))
