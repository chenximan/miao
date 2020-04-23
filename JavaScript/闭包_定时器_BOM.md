1: 下面的代码输出多少？修改代码让 fnArr[i]() 输出 i。使用 两种以上的方法?
```
var fnArr = [];
for (var i = 0; i < 10; i ++) {
    fnArr[i] =  function(){
        return i;
    };
}
console.log( fnArr[3]() );  //输出10，执行的时候i等于10，所以整个数组元素执行后都会是10.
```
解答：
// 方法1：
```
var fnArr = [];
for (var i = 0; i < 10; i++){
    (function(i){
        fnArr[i] = function(){
            return i;
        }
    })(i);
}
console.log(fnArr[3]() );  //3
```
// 方法2：
```
var fnArr = [];
for (var i = 0; i < 10; i ++){
    fnArr[i] = (function(i){
        // IIFE & 闭包
        return function(){
            rerturn i;
        }
    })(i);
}
console.log( fnArr[3]() ); //3
```
// 方法3：
```
var fnArr = [];
for (let i = 0; i < 10; i++) {
    //使用ES6：let 
    fnArr[i] = function(){
        rerturn i;
    };
}
console.log( fnArr[3]() );
```
2： 封装一个汽车对象，可以通过如下方式获取汽车状态
```
var Car = (function(){
    var speed = 0;
    function setSpeed(s){
        speed = s
    }
    ...
    return {
       setSpeed: setSpeed,
       ...
    }
 })()
 Car.setSpeed(30);
 Car.getSpeed(); //30
 Car.accelerate();
 Car.getSpeed(); //40;
 Car.decelerate();
 Car.decelerate();
 Car.getSpeed(); //20
 Car.getStatus(); // 'running';
 Car.decelerate(); 
 Car.decelerate();
 Car.getStatus();  //'stop';
 //Car.speed;  //error
 ```
解答：
```
var Car = (function(){
    let  speed = 0;
    function setSpeed(s){
        return speed = s;
    }
    function getSpeed(){
        return speed;
    }
    function accelerate(){
        return speed+=10;
    }
    function decelerate(){
        //速度不能为负数
        return speed>0?speed-=10:speed;
    }
    function getStatus(){
        return speed>0?'running':'stop';
    }
    return {
       "setSpeed": setSpeed,
       "getSpeed": getSpeed,
       "accelerate" : accelerate,
       "decelerate" : decelerate,
       "getStatus" : getStatus
    }
 })()
 Car.setSpeed(30);
 Car.getSpeed(); //30
 Car.accelerate();
 Car.getSpeed(); //40;
 Car.decelerate();
 Car.decelerate();
 Car.getSpeed(); //20
 Car.getStatus(); // 'running';
 Car.decelerate(); 
 Car.decelerate();
 Car.getStatus();  //'stop';
 //Car.speed;  //error
```
 3：下面这段代码输出结果是? 为什么?
 ```
 var a = 1;
 setTimeout(function(){
     a = 2;
     console.log(a);
 }, 0);
 var a ;
 console.log(a);
 a = 3;
 console.log(a);
 ```
 解答：
 ```
 var a = 1;
 setTimeout(function(){
     a = 2;
     console.log(a); //2
 }, 0); //参数为0，被放入执行队列的最后
 var a ;
 console.log(a); // 1
 a = 3; 
 console.log(a); // 3

 所以控制台依次输出 1 3 2

```
 4：下面这段代码输出结果是? 为什么?
 ```
 var flag = true;
 setTimeout(function(){
     flag = false;
 },0)
 while(flag){}
 console.log(flag);
 ```
 解答：
 ```
 var flag = true;
 setTimeout(function(){//等待所有任务结束后执行
     flag = false;
 },0)
 while(flag){} //setTimeout会等待它执行完毕，此时flag永远是true,无线循环，然后你的浏览器就会卡死了
 console.log(flag); //不会执行
```
 5： 下面这段代码输出？如何输出delayer: 0, delayer:1...（使用闭包来实现）
 ```
 for(var i=0;i<5;i++){
	setTimeout(function(){
         console.log('delayer:' + i );
	}, 0);
	console.log(i);
 }
 ```
解答：
```
for(var i=0;i<5;i++){
	setTimeout(function(){
         console.log('delayer:' + i );
	}, 0);
	console.log(i);
 }
// 这段代码输出 0 1 2 3 4 delayer: 5 5次
for(var i=0;i<5;i++){
	setTimeout(function(){
         console.log('delayer:' + i );
	}, 0);
	console.log(i); //这段代码输出 0 1 2 3 4 5 delayer: 5 5次


//用闭包实现输出delayer: 0, delayer:1 ...
for(var i=0; i<5; i++){
    (function(t){
        //参数变量提升 let t;
        return setTimeout(function(){
            console.log('delayer:' + t);
        }, 0);
    })(i);
    console.log(i);
}
```
6： 如何获取元素的真实宽高
解答：
```
function trueStyle(element,pseduoElement){
    //IE不支持window.getComputedStyle(),支持element.currentStyle();
    return element.currentStyle ? element.currentStyle : window.getComputedStyle(element,pseduoElement);
}
let trueWidth = trueStyle('element').width;
let trueHeight = trueStyle('element').height;
```
7： URL 如何编码解码？为什么要编码？
解答：
```
let myURL = 'https://www.google.com/#q=javascript';
//如果我们想编码一个URL并且可以使用它（访问），使用encodeURI（）；
let simpleURL = encodeURI(myURL);//"https://www.google.com/#q=javascript"
//如果我们想编码一个URL并且可以将其放置在某URL的参数中，使用encodeURIComponent();
let completeURL = encodeURIComponent(myURL);
let newURL = 'https://www.google.com/?back=' + completeURL; //"https://www.google.com/?back=https%3A%2F%2Fwww.google.com%2F%23q%3Djavascript"
window.open(simpleURL); //将会打开一个窗口，地址为https://www.google.com/#q=javascript
```
 8： 补全如下函数，判断用户的浏览器类型
 function isAndroid(){
}
function isIphone(){
}
function isIpad(){
}
function isIOS(){
}
解答：
```
function isAndroid(){
    return /Android/.test(navigator.userAgent);
}
function isIphone(){
    return /iPhone/.test(navigator.userAgent);
}
function isIpad(){
    return /iPad/.test(navigator.userAgent);
}
function isIOS(){
    return /(iPhone)|(iPad)/.test(navigator.userAgent);
}
```