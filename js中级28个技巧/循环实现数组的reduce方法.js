Array.prototype.selfReduce = function(fn, initalValue) {
  let arr = Array.prototype.slice.call(this)
  let res
  let startIndex
  if(initalValue === undefined) {
    // 找到第一个非空单元的元素和下标
    for(let i = 0; i < arr.length; i++) {
      if(!arr.hasOwnProperty(i)) continue
      startIndex = i
      res = arr[i]
      break
    }
  } else {
    res = initalValue
  }

  for(let i = ++startIndex || 0; i < arr.length; i++) {
    if(!arr.hasOwnProperty(i)) continue
    res = fn.call(null, res, arr[i], i, this)
  }
  return res
}