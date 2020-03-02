const selfMap2 = function(fn, context) {
  let arr = Array.prototype.slice.call(this)
  return arr.reduce((pre,cur,index) => {
    return [...pre, fn.call(context, cur, index, this)]
  },[])
}