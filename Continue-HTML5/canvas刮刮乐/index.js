/**使用js来绘制图像 */
var isdown = false,
cover = document.getElementById('cover') // 首先找到canvas元素
covercanvas = cover.getContext('2d') // 然后,创建context对象

// 下面两行代码绘制一个灰色的矩形
// 设置fillStyle属性可以是css颜色，渐变,或图案 fillStyle 默认设置是#000000(黑色)
covercanvas.fillStyle='transparent'
covercanvas.fillRect(0,0,400,200)

// canvas 是一个二维网络
// canvans 的左上角坐标为(0,0)

// 上面的fillRect 方法拥有参数(0,0,400,200)
// 意思是: 在画布上绘制一个400 * 200的矩形,从左上角开始(0,0)

function fillter(canvas) {
  canvas.fillStyle = '#ccc'
  canvas.fillRect(0,0,400,200)
}

function isDown(e) {
  e.pareventDefault()
  isdown = true
}

function isUp(e) {
  isdown = false
}

function draw(e) {
  e.pareventDefault()
  if(isdown) {
    if(e.changedTouches) {
      e = e.changedTouches[e.changedTouches.length - 1]
    }
    var _height = parseInt((window.innerHeight - 400) / 2),
    _width = parseInt((window.innerWidth - 400) / 2),
    touchTop = e.clientY - _height,
    touchLeft = e.clientX - _width
    wid
  }
}