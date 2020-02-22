var citySelect = {
  province: ["北京市", "重庆市", "福建省", "江苏省", "广东省", "辽宁省", "内蒙古", "山西省", "青海省", "四川省", "贵州省", "云南省", "陕西省", "西藏", "宁夏", "新疆", "广西", "海南省", "湖南省", "湖北省", "河南省", "山东省", "江西省", "安徽省", "浙江省", "上海市", "黑龙江省", "吉林省", "甘肃省", "天津市", "河北省"],
  city: {
    "28": [["000", "张掖市"], ["001", "武威市"], ["002", "天水市"], ["003", "庆阳市"], ["004", "平凉市"], ["005", "陇南市"], ["006", "临夏州"], ["007", "兰州市"], ["008", "酒泉市"], ["009", "金昌市"], ["010", "嘉峪关市"], ["011", "甘南藏族自治州"], ["012", "定西市"], ["013", "白银市"]],
    "1": [["014", "重庆市"]],
    "2": [["015", "漳州市"], ["016", "厦门市"], ["017", "三明市"], ["018", "泉州市"], ["019", "莆田市"], ["020", "宁德市"], ["021", "南平市"], ["022", "龙岩市"], ["023", "福州市"]],
    "3": [["024", "镇江市"], ["025", "张家港市"], ["026", "扬州市"], ["027", "盐城市"], ["028", "徐州市"], ["029", "宿迁市"], ["030", "无锡市"], ["031", "泰州市"], ["032", "苏州市"], ["033", "南通市"], ["034", "南京市"], ["035", "连云港市"], ["036", "淮安市"], ["037", "常州市"]],
    "4": [["038", "珠海市"], ["039", "中山市"], ["040", "肇庆市"], ["041", "湛江市"], ["042", "云浮市"], ["043", "阳江市"], ["044", "深圳市"], ["045", "韶关市"], ["046", "汕尾市"], ["047", "汕头市"], ["048", "清远市"], ["049", "梅州市"], ["050", "茂名市"], ["051", "揭阳市"], ["052", "江门市"], ["053", "惠州市"], ["054", "河源市"], ["055", "广州市"], ["056", "佛山市"], ["057", "东莞市"], ["058", "潮州市"]],
    "5": [["059", "营口市"], ["060", "铁岭市"], ["061", "沈阳市"], ["062", "盘锦市"], ["063", "辽阳市"], ["064", "锦州市"], ["065", "葫芦岛市"], ["066", "阜新市"], ["067", "抚顺市"], ["068", "丹东市"], ["069", "大连市"], ["070", "朝阳市"], ["071", "本溪市"], ["072", "鞍山市"]],
    "6": [["073", "兴安盟"], ["074", "锡林郭勒盟"], ["075", "乌兰察布市"], ["076", "乌海市"], ["077", "通辽市"], ["078", "呼伦贝尔市"], ["079", "呼和浩特市"], ["080", "鄂尔多斯市"], ["081", "赤峰市"], ["082", "包头市"], ["083", "巴彦淖尔市"], ["084", "阿拉善盟"]],
    "7": [["085", "长治市"], ["086", "运城市"], ["087", "阳泉市"], ["088", "忻州市"], ["089", "太原市"], ["090", "朔州市"], ["091", "吕梁市"], ["092", "临汾市"], ["093", "晋中市"], ["094", "晋城市"], ["095", "大同市"]],
    "8": [["096", "西宁市"], ["097", "海东市"], ["098", "海西蒙古族藏族自治州"]],
    "9": [["099", "自贡市"], ["100", "资阳市"], ["101", "宜宾市"], ["102", "雅安市"], ["103", "遂宁市"], ["104", "攀枝花市"], ["105", "内江市"], ["106", "南充市"], ["107", "绵阳市"], ["108", "眉山市"], ["109", "泸州市"], ["110", "凉山州"], ["111", "凉山彝族自治州"], ["112", "乐山市"], ["113", "广元市"], ["114", "广安市"], ["115", "甘孜藏族自治州"], ["116", "德阳市"], ["117", "达州市"], ["118", "成都市"], ["119", "巴中市"], ["120", "阿坝藏族羌族自治州"]],
    "10": [["121", "贵阳市"], ["122", "遵义市"], ["123", "铜仁市"], ["124", "黔西南布依族自治州"], ["127", "六盘水市"], ["128", "毕节市"], ["129", "安顺市"]],
    "11": [["130", "昭通市"], ["131", "玉溪市"], ["132", "西双版纳傣族自治州"], ["133", "文山壮族苗族自治州"], ["134", "曲靖市"], ["135", "普洱市"], ["136", "临沧市"], ["137", "丽江市"], ["138", "昆明市"], ["139", "红河哈尼族彝族自治州"], ["140", "德宏傣族景颇族自治州"], ["141", "大理白族自治州"], ["142", "楚雄彝族自治州"], ["143", "保山市"]],
    "12": [["144", "榆林市"], ["145", "延安市"], ["146", "咸阳市"], ["147", "西安市"], ["148", "渭南市"], ["149", "铜川市"], ["150", "商洛市"], ["151", "汉中市"], ["152", "宝鸡市"], ["153", "安康市"],],
    "13": [["154", "咸阳市"], ["155", "拉萨市"]],
    "14": [["156", "银川市"], ["157", "吴忠市"], ["158", "石嘴山市"], ["159", "固原市"]],
    "15": [["160", "乌鲁木齐市"], ["161", "阿拉尔市"], ["162", "伊犁哈萨克自治州"], ["163", "五家渠市"], ["164", "吐鲁番市"], ["165", "石河子市"], ["166", "克拉玛依市"], ["167", "喀什地区"], ["168", "和田地区"], ["169", "哈密市"], ["170", "昌吉回族自治州"], ["171", "巴音郭楞蒙古自治州"], ["172", "阿克苏地区"]],
    "16": [["173", "玉林市"], ["174", "梧州市"], ["175", "钦州市"], ["176", "南宁市"], ["177", "柳州市"], ["178", "来宾市"], ["179", "贺州市"], ["180", "河池市"], ["181", "桂林市"], ["182", "崇左市"], ["183", "北海市"], ["184", "百色市"]],
    "17": [["185", "文昌市"], ["186", "三亚市"], ["187", "琼海市"], ["188", "海口市"]],
    "18": [["189", "株洲市"], ["190", "长沙市"], ["191", "张家界市"], ["192", "岳阳市"], ["193", "永州市"], ["194", "益阳市"], ["195", "湘西土家族苗族自治州"], ["196", "湘潭市"], ["197", "邵阳市"], ["198", "娄底市"], ["199", "怀化市"], ["200", "衡阳市"], ["201", "郴州市"], ["202", "常德市"]],
    "19": [["203", "宜昌市"], ["204", "孝感市"], ["205", "襄阳市"], ["206", "咸宁市"], ["207", "仙桃市"], ["208", "武汉市"], ["209", "天门市"], ["210", "随州市"], ["211", "十堰市"], ["212", "潜江市"], ["213", "荆州市"], ["214", "荆门市"], ["215", "黄石市"], ["216", "黄冈市"], ["217", "恩施土家族苗族自治州"], ["218", "鄂州市"]],
    "20": [["220", "驻马店市"], ["221", "周口市"], ["222", "郑州市"], ["223", "许昌市"], ["224", "信阳市"], ["225", "新乡市"], ["227", "商丘市"], ["228", "三门峡市"], ["229", "濮阳市"], ["230", "平顶山市"], ["231", "南阳市"], ["232", "漯河市"], ["233", "洛阳市"], ["234", "开封市"], ["235", "焦作市"], ["236", "济源市"], ["237", "鹤壁市"], ["238", "安阳市"]],
    "21": [["239", "淄博市"], ["240", "枣庄市"], ["241", "烟台市"], ["242", "潍坊市"], ["243", "威海市"], ["244", "泰安市"], ["245", "日照市"], ["246", "青岛市"], ["247", "临沂市"], ["248", "聊城市"], ["249", "莱芜市"], ["250", "济宁市"], ["251", "济南市"], ["252", "菏泽市"], ["253", "东营市"], ["254", "德州市"], ["255", "滨州市"]],
    "22": [["256", "鹰潭市"], ["257", "宜春市"], ["258", "新余市"], ["259", "上饶市"], ["260", "萍乡市"], ["261", "南昌市"], ["262", "九江市"], ["263", "景德镇市"], ["264", "吉安市"], ["265", "赣州市"], ["266", "抚州市"]],
    "23": [["267", "宣城市"], ["268", "宿州市"], ["269", "芜湖市"], ["270", "铜陵市"], ["271", "马鞍山市"], ["272", "六安市"], ["273", "黄山市"], ["274", "淮南市"], ["275", "淮北市"], ["276", "合肥市"], ["277", "阜阳市"], ["278", "滁州市"], ["279", "池州市"], ["280", "亳州市"], ["281", "蚌埠市"], ["282", "安庆市"]],
    "24": [["283", "舟山市"], ["284", "温州市"], ["285", "台州市"], ["286", "绍兴市"], ["287", "衢州市"], ["288", "宁波市"], ["289", "丽水市"], ["290", "金华市"], ["291", "嘉兴市"], ["292", "湖州市"], ["293", "杭州市"]],
    "25": [["294", "上海市"]],
    "26": [["295", "伊春市"], ["296", "绥化市"], ["297", "双鸭山市"], ["298", "齐齐哈尔市"], ["299", "七台河市"], ["300", "牡丹江市"], ["301", "佳木斯市"], ["302", "鸡西市"], ["303", "黑河市"], ["304", "鹤岗市"], ["305", "哈尔滨市"], ["306", "大兴安岭地区"], ["307", "大庆市"]],
    "27": [["308", "长春市"], ["309", "延边朝鲜族自治州"], ["310", "通化市"], ["311", "松原市"], ["312", "四平市"], ["313", "辽源市"], ["314", "吉林市"], ["315", "白山市"], ["316", "白城市"]],
    "0": [["317", "北京市"]],
    "29": [["318", "天津市"]],
    "30": [["319", "张家口市"], ["320", "邢台市"], ["322", "唐山市"], ["323", "石家庄市"], ["324", "秦皇岛市"], ["325", "廊坊市"], ["326", "衡水市"], ["327", "邯郸市"], ["328", "承德市"], ["329", "沧州市"], ["330", "保定市"]]
  },
  init: function() {
    this.showProvince()
    this.showcity()
  },
  // 背景
  fontStr: document.getElementsByClassName('fontStr')[0],
  showPro: document.getElementsByClassName('dragDown')[0],
  // 三角图标
  iShow: document.getElementsByTagName('i')[0],
  bool: true,
  // 省
  provinceNode: document.getElementsByClassName('province')[0],
  // 城市
  cityNode: document.getElementsByClassName('city')[0],
  ul_province: null,
  ul_city: null,
  li_province: null,
  li_city: null,
  showProvince: function() {
    var self = this;
    this.fontStr.onclick = function(){
      if(self.bool){
        self.bool = false;
        self.showPro.style.display = 'block';
        self.iShow.style.backgroundPosition = '0 '+'-2067px';
      } else{
        self.bool = true;
        self.showPro.style.display = 'none';
        self.iShow.style.backgroundPosition = '0 '+'-2044px';
      }
    }
  },
  showcity: function() {
    var len = this.province.length
    var strProvince = ''
    this.ul_province = this.provinceNode.getElementsByTagName('ul')[0]
    for(var i = 0;i < len; i++) {
      strProvince += '<li>' + this.province[i] + '</li>'
    }
    this.ul_province.innerHTML = ''
    this.ul_province.innerHTML = strProvince

    this.li_province = this.ul_province.getElementsByTagName('li')
    for(var j = 0; j < len; j++) {
      this.li_province[j].index = j
      this.li_province[j].addEventListener('mouseenter', this.citymouseEnter.bind(this))
    }
  },
  citymouseEnter: function(e) {
    for (var j = 0; j < this.li_province.length; j++) {
      this.li_province[j].style.backgroundColor = '#ffffff'
    }
    e.target.style.backgroundColor = '#f1f3f6'
    var citys = this.city[e.target.index]
    var strCity = ''
    this.ul_city = this.cityNode.getElementsByTagName('ul')[0]
    for(var i = 0; i < citys.length; i++) {
      strCity += '<li>' + citys[i][1] + '</li>'
    }
    this.ul_city.innerHTML = ''
    this.ul_city.innerHTML = strCity

    // 鼠标点击城市
    this.li_city = this.ul_city.getElementsByTagName('li')
    for(var k = 0; k < this.li_city.length; k++) {
      this.li_city[k].addEventListener('click', this.cityClick.bind(this))
    }
  },
  cityClick: function(e) {
    var str = e.target.innerHTML
    this.fontStr.innerHTML = str
    this.showPro.style.display = 'none'
    this.iShow.style.backgroundPosition = '0 '+'-2044px'
    this.bool = true
  }
}
citySelect.init() // 触发入口函数