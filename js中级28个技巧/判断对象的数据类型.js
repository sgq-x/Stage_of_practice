const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target)
const isArray = isType('Array')
console.log(isArray([]))  // true
/**
 * 使用Object.prototype.toString 配合闭包,通过传入不同的
 * 判断类型来返回不同的判断函数
 * 注意: 传入type参数时首字母大写
 * 
 * 不推荐将这个函数用来检测可能会产生包装类型的基本数据类型上,
 * 因为call始终会将第一个参数进行装箱操作,导致基本类型和包装类型无法区分
 */