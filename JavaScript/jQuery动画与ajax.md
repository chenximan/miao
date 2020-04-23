1： jQuery 中， $(document).ready()是什么意思？
解答：
$(document).ready()的作用是当DOM准备就绪时，指定一个函数来执行。
大多数情况下，只要DOM结构已完全加载时，脚本就可以运行。传递处理函数给.ready()方法，能保证DOM准备好后就执行这个函数。
如果执行的代码需要在元素被加载之后才能使用时，（例如，取得图片的大小需要在图片被加载完后才能知道），就需要将这样的代码放到load事件中。
代码：
```
$(document).ready(handler)
$(handler)
$(function () {
    console.log('ready');
});
```
2： $node.html()和$node.text()的区别?
解答：
$node.html() 获取/设置被选元素的节点包括html结构
代码：
$(".box").html() //获取元素内部的html内容，类似innerHTML
$(".box").html("<p>设置了一个段落</p>") //设置内部元素的html内容，标签生效

$node.text() 获取/设置被选元素的文本节点
代码：
$(".box").text() //获取元素内部的text文本，类似innerText
$(".box").text("设置了一个文本") //设置了元素内部的text文本

3： $.extend 的作用和用法?
解答：
jQuery.extend({target[,object] [,objectN]})
。将两个或更多对象的内容合并到第一个对象
代码：
```
var obj1 = {name: 'chen'}
var obj = {age: 19}
var obj = {name:'cqa',age: 20}
var obj = {}
var obj = $.extend(obj4,obj1,obj2,obj3) //{name: "cqa", age:20}
```
4： jQuery 的链式调用是什么？
解答：
。使用jQuery方法时，对象方法返回的是对象本身，可以调用对此对象的其他jQuery方法，实现连续调用多个方法。
例如：$(this).siblings().removeClass('active')

5： jQuery 中 data 函数的作用
解答：
data([key],[value])
在元素上存放或读取数据，返回jQuery对象。
代码：
```
$("body").data("foo",18);
$("body").data("abc", {name: "text", sex: 20});
$("body").data({cba: [a,b,c]});
$("body").data("foo"); //18
$("body").data() //{foo: 18, abc: {name: "text", sex: 20},cba:{a,b,c}}
```
6：
写出以下功能对应的 jQuery 方法：
。给元素 $node 添加 class active，给元素 $node 删除 class active
代码：
```
$node.addClass('active') //添加
$node.removeClass('active') //删除
```
。展示元素$node, 隐藏元素$node
代码：
```
$node.show(); //展示
$node.hide(); //隐藏
```
。获取元素$node 的 属性: id、src、title， 修改以上属性
代码：
//获取并修改
```
$node.attr('id', 'newId');
$node.attr('src', 'newSrc');
$node.attr('title', 'newTitle');
```
。给$node 添加自定义属性data-src
代码：
$node.attr('data-src', "value");
。在$ct 内部最开头添加元素$node
代码：
$ct.prepend($node)
。在$ct 内部最末尾添加元素$node
代码：
$ct.append($node);
。删除$node
代码：
$node.delete();
。把$ct里内容清空
代码：
$ct.empty();
。在$ct 里设置 html <div class="btn"></div>
代码：
$ct.html("<div class="btn"></div>")
。获取、设置$node 的宽度、高度(分别不包括内边距、包括内边距、包括边框、包括外边距)
代码：
//不包括内边距
$node.width();
$node.height();
//包括内边距
$node.innerWidth();
$node.innerHeight();
//包括内边距、包括边框
$node.outerWidth()
$node.outerHeight()
//包括内边距 、包括边框、包括外边距
$node.outerWidth(true);
$node.outerHeight(true);
。获取窗口滚动条垂直滚动距离
代码：
$(window).scrollTop();
。获取$node 到根节点水平、垂直偏移距离
代码：
$node.offset().left;//水平
$node.offset().top; //垂直
。修改$node 的样式，字体颜色设置红色，字体大小设置14px
代码：
$node.css({color:'red', 'font-size':'14px'});
。遍历节点，把每个节点里面的文本内容重复一遍
代码：
$node.each(function(){
    console.log($(this).text());
});
从$ct 里查找 class 为 .item的子元素
代码：
$ct.find('.item');
。获取$ct 里面的所有孩子
$ct.children();
。对于$node，向上找到 class 为'.ct'的父亲，在从该父亲找到'.panel'的孩子
代码：
$node.parents('.ct').find('.panel')
。获取选择元素的数量
代码：
$node.length;
。获取当前元素在兄弟中的排行
代码：
$node.index();

7：用jQuery实现以下操作
。当点击$btn 时，让 $btn 的背景色变为红色再变为蓝色
。当窗口滚动时，获取垂直滚动距离
。当鼠标放置到$div 上，把$div 背景色改为红色，移出鼠标背景色变为白色
。当鼠标激活 input 输入框时让输入框边框变为蓝色，当输入框内容改变时把输入框里的文字小写变为大写，当输入框失去焦点时去掉边框蓝色，控制台展示输入框里的文字
。当选择 select 后，获取用户选择的内容
代码：
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery基本操作</title>
</head>

<body>
    <style>
        /* 1 */
        .btn {
            padding: 10px;
            border-radius: 3px;
            border: 1px solid #eee;
        }

        .btn:hover {
            cursor: pointer;
        }

        /* 2 */
        .scroll {
            font-size: 12px;
            width: 100px;
            height: 50px;
            background-color: #e22;
        }

        /* 3 */
        .active {
            border-color: blue;
        }

        .colorbox {
            width: 100px;
            height: 100px;
            border: 1px solid #000;
        }

        /* 4 */
        /* 5 */
    </style>
    <h2>用jQuery实现以下操作</h2>
    <h3>当点击$btn 时，让 $btn 的背景色变为红色再变为蓝色</h3>
    <button class="btn">点击变色</button>
    <h3>当窗口滚动时，获取垂直滚动距离</h3>
    <div class="scroll">
        <p>垂直滚动距离为</p>
        <span>0px</span>
    </div>
    <h3>当鼠标放置到$div 上，把$div 背景色改为红色，移出鼠标背景色变为白色</h3>
    <div class="colorbox"></div>
    <h3>当鼠标激活 input 输入框时让输入框边框变为蓝色，当输入框内容改变时把输入框里的文字小写变为大写，当输入框失去焦点时去掉边框蓝色，控制台展示输入框里的文字</h3>
    <input type="text" class="textbox">
    <h3>当选择 select 后，获取用户选择的内容</h3>
    <div class="selectbox">
        <select name="" id="">
            <option value="1">华为</option>
            <option value="2">小米</option>
            <option value="3">OPPO</option>
            <option value="4">VIVO</option>
        </select>
        <p>你选择了<span class="choose"></span></p>
    </div>
    <script src="http://apps.bdimg.com/libs/jquery/1.9.1/jquery.js"></script>
    <script>
        // 1
        $(".btn").on("click", function () {
            $(this).css("backgroundColor", "red");
            setTimeout(function () {
                $(".btn").css("backgroundColor", "blue");
            }, 1000);
        });
        // 2
        $(window).on("scroll", function () {
            $(".scroll span").text($(this).scrollTop() + "px");
        });
        // 3
        $(".colorbox").on("mouseenter", function () {
            $(this).css("background-color", "red");
        });
        $(".colorbox").on("mouseleave", function () {
            $(this).css("background-color", "white");
        });
        // 4
        $(".textbox").on("focus", function () {
            // $(this).css("border-color", "blue");
            $(this).addClass("active");
        });
        $(".textbox").on("keyup", function () {
            $(this).val($(this).val().toUpperCase());
        });
        $(".textbox").on("focusout", function () {
            $(this).removeClass("active");
            console.log($(this).val());
        });
        // 5
        $(".selectbox select").on("change", function () {
            console.log($(this).find("option:selected").text());
            $(".selectbox .choose").text($(this).find("option:selected").text());
        });
    </script>
</body>

</html>
```