Math任务
1、写一个函数，返回从min到max之间的 随机整数，包括min不包括max 
解答：
```
function num(min,max){
    var randomNum;
    randomNum=Math.floor(min+Math.random()*(max-min));
    console.log(randomNum);
}
num(-14,19);
```
2、写一个函数，返回从min都max之间的 随机整数，包括min包括max 
解答：
```
function num(min,max){
  var randomNum
  randomNum = Math.floor(min+Math.random()*(max-min+1));
  console.log(randomNum);
}
num(-14,19)
```
3、写一个函数，生成一个长度为 n 的随机字符串，字符串字符的取值范围包括0到9，a到 z，A到Z。
```
function getRandStr(len){
  //补全函数
}
var str = getRandStr(10); // 0a3iJiRZap
```
解答：
```
function getRandStr(len){
  var data = "0123456789abcdefghijklmnopqrstuvwxyzABXDEFGHIJKLMNOPQRSTUVWXYZ";
  var str = '';
  for (var i = 0; i < len; i++) {
    var index = parseInt(Math.random()*data.length);
    str+=data[index];
  }
  return str;
}
var str = getRandStr(10);
console.log(str); 
```
4、写一个函数，生成一个随机 IP 地址，一个合法的 IP 地址为 0.0.0.0~255.255.255.255
```
function getRandIP(){
  //补全
}
var ip = getRandIP()
console.log(ip) // 10.234.121.45
```
解答：
```
function getRandIP(){
  var len = 4;
  var ip = [];
  for (var i = 0; i < len; i++) {
    var num = parseInt(Math.random()*256);
    ip.push(num);
  }
  return(ip.join('.'));
}
var ip = getRandIP()
console.log(ip)
```
5、写一个函数，生成一个随机颜色字符串，合法的颜色为#000000~ #ffffff
```
function getRandColor(){
}
var color = getRandColor()
console.log(color)   // #3e2f1b
```
解答：
```
function getRandColor(){
  var data = "0123456789abcdefABCDEF";
  var str = '#';
  var len = 6;
  for (var i = 0; i < len; i++) {
    var index = parseInt(Math.random()*(data.length));
    str+=data[index];
  }
  return str;
}
var color = getRandColor()
console.log(color) 
```
数组任务
1、数组方法里push、pop、shift、unshift、join、splice分别是什么作用？用 splice函数分别实现push、pop、shift、unshift方法
解答：
.push:在数组末尾添加一项，返回值：添加新项后的数组长度
.pop:删除数组最后一项， 返回值：被删除项
.unshift ：在数组开头添加一项，返回值：添加新项后的数组长度
.shift:删除数组第一项，返回值：被删除项
.join:以传入的参数连接数组为字符串，如果不传递参数，默认为'.'连接
.splice:第一个参数是操作的位置，第二个参数是替换字符的数量，第三个参数是替换为的字符，返回值是被删除的元素组成的数组。
```
function arrMethod(str,method,item){
  var arr = [];
  arr=str.split('');
  switch(method){
    case 'pop':
     arr.splice(arr.length-1,1);
     break;
    case 'push':
     arr.splice(arr.length,0,item);
     break;
    case 'shift':
     arr.splice(0,1);
     break;
    case 'unshift':
     arr.splice(0,0,item);
     break;
    default:
     console.log("输入错误");
  }
  console.log(arr);
}
arrMethod('1234','pop');
arrMethod('1234','push', 5);
arrMethod('1234', 'shift');
arrMethod('1234','unshift', 0)
```
2、写一个函数，操作数组，数组中的每一项变为原来的平方，在原数组上操作
```
function squareArr(arr){
}
var arr = [2, 4, 6]
squareArr(arr)
console.log(arr) // [4, 16, 36]
```
解答：
```
function squareArr(arr){
  for (var i = 0; i < arr.length; i++) {
    arr[i]*=arr[i];
  }
}
var arr = [2, 4, 6]
squareArr(arr)
console.log(arr)
```
3、写一个函数，操作数组，返回一个新数组，新数组中只包含正数，原数组不变
```
function filterPositive(arr){
}
var arr = [3, -1,  2,  '饥人谷', true]
var newArr = filterPositive(arr)
console.log(newArr) //[3, 2]
console.log(arr) //[3, -1,  2,  '饥人谷', true]
```
解答：
```
function filterPositive(arr){
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number'&&arr[i]>0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
var arr = [3, -1,  2,  '饥人谷', true]
var newArr = filterPositive(arr)
console.log(newArr) //[3, 2]
console.log(arr) //[3, -1,  2,  '饥人谷', true]
```
Date 任务
1、 写一个函数getChIntv，获取从当前时间到指定日期的间隔时间
```
var str = getChIntv("2017-02-08");
console.log(str);  // 距除夕还有 20 天 15 小时 20 分 10 秒
```
解答：
```
function getChintv(str){
  var start = new Date().getTime();
  var end = new Date(str).getTime();
  var intevalDay = parseInt((end-start)/(1000*60*60*24));
  var intevalHours = parseInt((end-start)/(1000*60*60*24)/(1000*60*60));
  var intevalMinutes = parseInt((end - start)%(1000*60*60)/(1000*60));
  var intevalSeconds = parseInt((end-start)%(1000*60)/1000);
  var str = "距离高考："
            +intevalDay + "天"
            +intevalHours + "小时"
            +intevalMinutes + "分"
            +intevalSeconds + "秒";
  return str;
}
var str = getChintv("2020-06-07");
console.log(str);
```
2、把hh-mm-dd格式数字日期改成中文日期
```
var str = getChsDate('2015-01-08');
console.log(str);  // 二零一五年一月八日
```
解答：
```
function getChsDate(str){
  var dict = ['零','一','二','三','四','五','六','七','八','九'];
  var arr = str.split('-');
  var year,month,day;

  year=dict[parseInt(arr[0][0])] +
       dict[parseInt(arr[0][1])] +
       dict[parseInt(arr[0][2])] +
       dict[parseInt(arr[0][3])] +'年';
  if (arr[1][0]==0) {
    month=dict[parseInt(arr[1][1])] + '月';
  }else{
    month=dict[parseInt(arr[1][0])] +
          dict[parseInt(arr[1][1])] + '月';
  }
  if (arr[2][0]==0) {
    day=dict[parseInt(arr[2][1])]+ '日';
  }else{
    day=dict[parseInt(arr[2][0])]+
        dict[parseInt(arr[2][1])]+  '日'
  }
  var str = year + month + day;
  return str;
}
var str = getChsDate('2018-02-28');
console.log(str);
```
3、写一个函数，参数为时间对象毫秒数的字符串格式，返回值为字符串。假设参数为时间对象毫秒数t，根据t的时间分别返回如下字符串:

刚刚（ t 距当前时间不到1分钟时间间隔）
3分钟前 (t距当前时间大于等于1分钟，小于1小时)
8小时前 (t 距离当前时间大于等于1小时，小于24小时)
3天前 (t 距离当前时间大于等于24小时，小于30天)
2个月前 (t 距离当前时间大于等于30天小于12个月)
8年前 (t 距离当前时间大于等于12个月)
```
function friendlyDate(time){
}
var str = friendlyDate( '1484286699422' ) //  1分钟前
var str2 = friendlyDate('1483941245793') //4天前
```
解答：
```
function friendlyDate(time){
  var t = new Date().getTime();
  var c = (t-time)/1000;
  switch(true){
    case c < 60:
    console.log('刚刚');
    break;
    case c >= 60 && c < 60*60:
    console.log(parseInt(c/60)+'分钟前');
    break;
    case c >= 3600 && c < 3600*24:
    console.log(parseInt(c/3600)+'小时前');
    break;
    case c >= 3600*24 && c < 3600*24*30:
    console.log(parseInt(c/3600/24)+'天前');
    break;
    case c >= 3600*24*30 && c < 3600*24*30*12:
    console.log(parseInt(c/3600/24/30)+'月前');
    break;
    default:
    console.log(parseInt(c/3600/24/30/12)+'年前');
    break;
  }
}
var str = friendlyDate( '1485584391984' ) 
console.log(str);
var str2 = friendlyDate('1405504991984')
console.log(str2);
```