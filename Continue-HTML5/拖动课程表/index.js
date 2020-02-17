var container = document.getElementById('divcontainer')
/**
 * 得到允许拖拽的dom元素,如果没有,返回undefined
 */
function getAllowedDom(target) {
  if (target.dataset.allowed === 'true') {
    return target
  }
  if(target.parentNode.dataset.allowed === 'true') {
    return target.parentNode
  }
}

var curDiv // 拖放源
// 获取被拖动元素(拖放源)
container.ondragstart = function(e) {
  curDiv = e.target
}

// 拖放源拖放经过目标元素(目标元素)
container.ondragover = function(e) {
  e.preventDefault() // 阻止默认拖拽行为
  // 获取目标元素
  var dom = getAllowedDom(e.target)
  if(dom) {
    e.dataTransfer.dropEffect = dom.tagName === 'DIV' ? 'move' : 'drop'
  } else {
    e.dataTransfer.dropEffect = 'none'
  }
}

// 拖放进入目标元素
var beforeEnter // 记录的是之前背景改变的td
container.ondragenter = function(e) {
  var dom = getAllowedDom(e.target)
  if(beforeEnter) {
    beforeEnter.style.background = ''
  }
  if(dom && dom.tagName === 'TD') {
    dom.style.background = '#666'
    beforeEnter = dom
  }
}

// 被拖动元素放置到了目标元素
container.ondrop = function(e) {
  // dom 目标元素
  var dom = getAllowedDom(e.target)
  if(!dom) {
    return;
  }
  // 记录之前背景改变的td
  beforeEnter = null
  dom.style.background = ''
  if(curDiv.parentNode.tagName === 'DIV' && dom.tagName === 'TD') {
    // 复制
    dom.innerHTML = ''
    var newDiv = curDiv.cloneNode(true)
    dom.appendChild(newDiv)
  }
  else if (dom.tagName === 'TD') {
    // 拖动元素和被拖动元素互换移动
    var before = dom.innerHTML
    var parent = curDiv.parentNode
    dom.innerHTML = ''
    dom.appendChild(curDiv)
    parent.innerHTML = before
    // console.log(before)
  } else {
    curDiv.remove()
  }
}