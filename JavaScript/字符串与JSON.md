1.使用数组拼接出如下字符串 ，其中styles数组里的个数不定
```
var prod = {
    name: '女装',
    styles: ['短款', '冬季', '春装']
};
function getTpl(data){
//todo...
};
var result = getTplStr(prod);  //result为下面的字符串

<dl class="product"><dt>女装</dt><dl>短款</dd<dd>冬季</dd><dd>春装</dd></dl>
```
解答：
```
var prod = {
    name: '女装',
    styles: ['短款', '冬季', '春装']
};
function getTpl(data){
    var str = '<dl class = "product">'
    str = str + '<dt>' + data.name + '</dt>'
    for(var i = 0; i < data.styles.length; i++){
        str = str + '<dd>' + data.styles[i] + '</dd>'
    }
    str = str + '</dl>'
    return str;
};
var result = getTpl(prod); //result为下面的字符串
```
2.写出两种以上声明多行字符串的方法
例如：
```
var str = 'abcdeabcdeabcdeancdeabcdeabcdeabcdeancdeabcdeabcdeabcdeancdeabcdeabcdeabcdeancde'
```
这段字符串很长，如何多行优雅的显示

解答：
```
方法1：
var str = 
'abcdeabcdeabcdeancdeabcdeabcde\
abcdeabcdeabcdeancdeabcdeabcde\
abcdeabcdeabcdeancdeabcdeabcde\
abcdeabcdeabcde
'
方法2：
var str = 
'abcdeabcdeabcde'
+ 'abcdeabcdeabcde'
+ 'abcdeabcdeabcde'
+ 'abcdeabcdeabcde'
+ 'abcdeabcdeabcde'
方法3：
(function() {/*
    abcdeabcdeabcde
    abcdeabcdeabcde
    abcdeabcdeabcde
*/}).toString().split("\n").slice(1,-1).join("/n")
```
3.补全如下代码,让输出结果为字符串: hello\\小谷
```
var str = //补全代码
console.log(str)
```
解答：
```
var str = 'hello \\\\小谷'；
console.log(str)
```
4.以下代码输出什么?为什么
```
var str = 'jirengu\nruoyu'
console.log(str.length)
```
解答：输出13，因为转义字符\n输出的是一个换行符，长度为1.

5.写一个函数，判断一个字符串是回文字符串，如 abcdcba是回文字符串, abcdcbb不是
解答：
```
function palindrome(str) {
    var new_str = str.split("").reverse().join("")
    if ( str === new_str) {
        return true;
    } else {
        return false
    }
}
```
6.写一个函数，统计字符串里出现出现频率最多的字符
解答：
```
function most(str) {
    var a = {};
    for (var i=0; i<str.length; i++) {
        if (a[str[i]]) {
            a[str[i]]++;
        } else {
            a[str[i]] = 1;
        }
    }
    var maxCount=0;
    var maxkey;
    for (var i in a) {
        if (maxCount < a[i]) {
            maxCount = a[i];
            maxKey = i;
        }
    }
    return maxKey
}
```
7.写一个camelize函数，把my-short-string形式的字符串转化成myShortString形式的字符串，如
```
camelize("background-color") == 'backgroundColor'
camelize("list-style-image") == 'listStyleImage'
```
解答：
```
function camelize(str) {
    var arr = str.split("-");
    if (arr.length<2)  {
        return " no can do"
    }
    for (var i=1; i<arr.length; i++) {
        sub1 = arr[i].substring(0, 1)
        sub2 = arr[i].substring(1)
        arr[i] = sub1.toUpperCase() + sub2
    }
    return arr.join("")
}
```
8.写一个 ucFirst函数，返回第一个字母为大写的字符 （***）

ucFirst("hunger") == "Hunger"

解答：
```
function ucFirst(str) {
    var new_str
    sub1 = str.substring(0,1)
    sub2 = str.subString(1)
    return new_str = sub1.toUpperCase() + sub2
}
```
9.写一个函数truncate(str, maxlength), 如果str的长度大于maxlength，会把str截断到maxlength长，并加上...，如
```
truncate("hello, this is hunger valley,", 10) == "hello, thi...";
truncate("hello world", 20) == "hello world"
```
解答：
```
function truncate(str, maxlength) {
    var new_str = str.substr(0, maxlength)
    return (new_str + "...") 
}
```
10.什么是 JSON格式数据？JSON格式数据如何表示对象？window.JSON 是什么？
解答：
JSON格式(JavaScript Object Notation 的缩写)是一种用于数据交换的文本格式。目的是为了取代XML格式。

JSON对值的类型和格式有严格的规定：
。复合类型的值只能是数组或对象，不能是函数，正则表达式对象，日期对象。
。简单类型的值只有四种：字符串， 数值（必须以十进制表示）、布尔值、null(NaN undefined Infinity -Infinity都不能使用)
。字符串必须使用双引号表示，不能使用单引号
。对象的键名必须放在双引号里面
。数组或对象最后一个成员的后面，不能加逗号

window.JSON:
。window.JSON是ECMAScript5定义的一个原生的浏览器内置对象，用于检测JSON的支持情况。
。JSON对象内置了JSON.parse()和JSON.stringify()方法
。当HTML页面指定了DOCTYPE且浏览器模式为IE8时，才支持内置的window.JSON对象，IE8以上才内置支持JSON.parse()函数方法。
11.如何把JSON 格式的字符串转换为 JS 对象？如何把 JS对象转换为 JSON 格式的字符串?
解答：
。JSON.parse方法用于将JSON字符串转化成对象。
```
JSON.parse('{}') // {}
JSON.parse('true') // true
JSON.parse('"foo"') // "foo"
JSON.parse('[1, 5, "false"]') // [1, 5, "false"]
JSON.parse('null') // null

var o = JSON.parse('{"name": "张三"}');
o.name // 张三

```
。JSON.stringify方法用于将一个值转为字符串。该字符串符合JSON格式，并且可以被JSON.parse还原。
```
JSON.stringify('abc') // ""abc""
JSON.stringify(1) // "1"
JSON.stringify(false) // "false"
JSON.stringify([]) // "[]"
JSON.stringify({}) // "{}"

JSON.stringify([1, "false", false])
// '[1,"false",false]'

JSON.stringify({ name: "张三" })
// '{"name":"张三"}'

对于原始类型的字符串，转换结果会带双引号
JSON.stringify('foo') === "foo" // false
JSON.stringify('foo') === "\"foo\"" // true
```