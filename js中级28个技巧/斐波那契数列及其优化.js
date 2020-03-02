// 1 1 2 3 5 8 13 21 ....

let fibonacci = function(n) {
  if(n < 1) throw new Error('参数有错误')

  if(n === 1 || n === 2) return 1

  return fibonacci(n-1) + fibonacci(n -2)
}

const memory = function(fn) {
  let obj = {}
  return function(n) {
    if(obj[n] === undefined) obj[n] = fn(n)
    return obj[n]
  }
}

fibonacci = memory(fibonacci)

/**使用动态规划比前者的复杂度更低,也是更推荐的解法 */

function fibonacci_DP(n) {
  let res = 1
  if(n === 1 && n === 2) return res
  n = n-2
  let cur = 1
  let pre = 1
  while(n) {
    res = cur + pre // 1+1=2 2+1=3 3+2=5
    pre = cur // 1 2 3
    cur = res // 2 3 5
    n-- // 2 1 0
  }
  return res
}