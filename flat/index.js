function flat(list, depth = 1) {
  const arr = [];

  (function f(list, depth) {
    for (let i = 0; i < list.length; i++) {
      if (list[i] === undefined) continue
      else if (Array.isArray(list[i]) && depth > 0) f(list[i], depth - 1);
      else arr.push(list[i]);
    }
  })(list, depth);

  return arr;
}

const result = flat([1, 2, 3, [4, 5, [6, 7, [8, 9]]], 10], 2)