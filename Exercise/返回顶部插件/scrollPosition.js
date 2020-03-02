/**
 * 将某个元素的滚动条,设置到某个位置
 * 
 * 滚动某个元素到指定位置
 * 
 * interval 帧率
 * 
 * @param {*} scrollTop 返回位置
 * @param {*} options 配置对象 默认值为{}
 */

 function scroll(scrollTop, options = {}) {

  // 默认元素
  var defaultOptions = {
    dom: document.documentElement, // 滚动的元素
    duration: 1000, // 总时长
    tick: 16, // 多少毫秒变化一次
    onStart: undefined, // 开始回调函数
    onEnd: undefined // 结束回调函数
  }
  // 混合 defaultOptions 和 options
  var options = Object.assign(defaultOptions, options)

  // 开始滚动
  startScroll()

  function startScroll() {

    // 判断当前元素是否正在滚动
    if(options.dom.isScroll) {
      return
    }
    if(options.onStart) {
      // 开始调用开始函数
      options.onStart()
    }
    // 每次变化的量 = 总量 / 次数
    // 总量
    var total = scrollTop - options.dom.scrollTop
  }
 }