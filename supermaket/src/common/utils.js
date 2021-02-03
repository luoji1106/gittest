export function Format(date, fmt) {
  var o = {
  "M+": date.getMonth() + 1, //月份
  "d+": date.getDate(), //日
  "h+": date.getHours(), //小时
  "m+": date.getMinutes(), //分
  "s+": date.getSeconds(), //秒
  "q+": Math.floor((date.getMonth() + 3) / 3), //季度
  "S": date.getMilliseconds() //毫秒
  };
  // 将传入的时间模板里的'yyyy'替换成date对象里的年份，并根据传入y的个数显示多少位
  if(/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  // 判断传入的模板里是否有月日小时等对应的字符串，并替换成date里的对应的时间
  for (var k in o) {
    if(new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  }

  return fmt;
}