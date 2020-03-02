const isComplexDataType = obj => (typeof obj === 'object' || typeof obj === 'function') && obj !== null

const selfBind = function(bindTarget, ...args1) {
  if(typeof this !== 'function') throw new TypeError('Bind must be a called on a function')
  const originFunc = this
  const boundFunc = function(...args2) {
    // 使用new关键字调用返回新对象
    if(new.target) {
      
    }
  }
}