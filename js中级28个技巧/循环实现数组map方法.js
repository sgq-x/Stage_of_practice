const selfMap = function(fn, context) {
  let arr = Array.prototype.slice.call(this)
  let mappedArr = Array()
  for(let i = 0; i < arr.length; i++) {
    // 判断稀疏数组的情况
    if(!arr.hasOwnProperty(i)) continue
    mappedArr[i] = fn.call(context, arr[i], i ,this)
  }
  return mappedArr
}

/**
 * 使用方法: 将selfMap 注入到Array.prototype 上
 */

 Array.prototype.selfMap = selfMap

 [1,2,3].selfMap(num => num * 2)  // [2,4,6]