var tabs = document.querySelectorAll('#btn li'),
tabLine = document.querySelector('#btn span'),
lis = document.querySelectorAll('#imgWrap li');

var ln = 0;  // 上一个选中的索引
var cn = 0;  // 当前选中的索引
var timer;   // 用来存储定时器

var tabWidth = tabs[0]
