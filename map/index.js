Object.prototype.customMap = function(callback) {
  const arr = []
  for (let i = 0; i < this.length; i++) {
      arr.push(callback(this[i]))
  }
  return arr
};

const list = [1, 2]

const result = list.customMap(el => {
  return {
      id: el,
      name: `User ${el}`,
  }
})
