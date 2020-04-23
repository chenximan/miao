0：库和框架的区别？
解答：
库：里面存放着各种好用的工具，用户各取所需。
框架：对于用户的行为进行了规则性限制，用户要在这个规则下进行创作，不能有太多的自由发挥空间。
使用方式上：我们往往是在遇到一些麻烦的问题时想要简化它，然后我们去查询xx库的文档，找到对应的语法或使用方法。而框架的使用则是我们先查看了文档了解它思想，模式，框架结构，语法，再根据文档里的demo进行开发符合自己需求的产品。
库和框架在一定程度上加速开发，一个在工具层面，一个在思想模式方面。
1： jQuery 能做什么
解答：
jQuery将javaScript的代码进行了封装，处理了兼容性问题，提供API进行调用，可以完成以下工作：
。选择网页元素 。dom操作 。事件操作 。元素样式操作 。特殊效果 。AJAX
2： jQuery 对象和 DOM 原生对象有什么区别？如何转化？
解答：
。DOM原生对象就是原生JS获得的对象
。jQuery对象是DOM原生对象经过包装之后，拥有jQuery的属性和方法，是类数组对象。

转化：
。jQuery对象转化成DOM对象，可以通过[index]的方法
```
i var $node = $("#node"); //jQuery对象
ii var node = $node[0]; //DOM对象
```
。DOM对象转化为jQuery对象吧
```
i var node = document.getElementById("id"); //DOM对象
ii var $node = $(node); //jQuery对象
```
3：jQuery中如何绑定事件？bind、unbind、delegate、live、on、off都有什么作用？推荐使用哪种？使用on绑定事件使用事件代理的写法？
解答：
。bind()向匹配元素附加一个或多个事件处理器
。unbind()从匹配元素移除一个被添加的事件处理器
。delegate()向匹配元素的当前或未来的子元素附加一个或多个事件处理器
。live()附加一个事件处理器到匹配目前选择器的所有元素，现在和未来

以上几种方法是jQuery1.7以前的方法， 现在推荐on()和off()来绑定和解除事件。
。on()在选定的元素上绑定一个或多个事件处理函数
。off()移除一个事件处理函数

代码：
```
//普通的绑定事件，最简单的事件用法
$('div').on('click', function(e){
    console.log(this);
    console.log(e);
});

// 事件代理，想让div下面所有的span绑定事件，可以把事件绑定到div上
$('div').on('click','span', function(e){
    console.log(this);
    console.log(e);
});

// 在绑定事件的时候给事件传递一些参数
$('div').on('click', {name: 'wing', age: 20}, function(e){
    console.log(e.data);
});

```
4：jQuery 如何展示/隐藏元素？
代码1：
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>隐藏/展示元素</title>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background-color: red;
            display: inline-block;
        }
    </style>
</head>

<body>
    <div class="box">
        hello
    </div>
    <button id="btn-box1">show</button>
    <button id="btn-box2">hide</button>
    <script src="http://apps.bdimg.com/libs/jquery/1.9.1/jquery.js"></script>
    <script>
        $('#btn-box1').on('click', function () {
            $('.box').show()
        })
        $('#btn-box2').on('click', function () {
            $('.box').hide()
        })
    </script>
</body>

</html>
```
代码2：
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>toggle()方法来切换hide()和show()</title>
</head>
<body>
    <style>
        .box{
            width: 100px;
            height: 100px;
            background-color: orchid;
            display:inline-block;
        }
    </style>
    <div class="box">
        hello
    </div>
    <button id="btn-box">toggle</button>
    <script src="http://apps.bdimg.com/libs/jquery/1.9.1/jquery.js"></script>
    <script>
        $('#btn-box').on('click',function(){
            $('.box').toggle()
        })
    </script>
</body>
</html>
```

5： jQuery 动画如何使用？
解答：
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animation</title>
</head>

<body>
    <div class="item1"
        style="height: 100px;width:100px;background-color: gery; position: relative;border: 2px solid green;"></div>
    <button class="btn">Change1</button>
    <button class="btn">Change2</button>
    <button class="btn">Change3</button>
    <button class="btn">Change4</button>
    <button class="btn">Change5</button>
    <button class="btn">Change6</button>
    <button class="btn">stop(true,true)</button>
    <button class="btn">stop(true,false)</button>
    <button class="btn">stop(false, true)</button>
    <button class="btn">stop(false, false)</button>
    <button class="btn">finish</button>
    <script src="http://apps.bdimg.com/libs/jquery/1.9.1/jquery.js"></script>
    <script>
        //动画通用的API是.animate()
        //语法：.animate(properties-->object:key-value pair [, duration--->Number or String] [, easing--->String] [,complete--->Function])
        $('.btn').eq(0).on('click', function () {
            $('.item1').eq(0).animate({
                height: 200,
                width: 200
            }, 1000, 'swing', function () {
                $('.item1').eq(0).css('background-color', 'yellow');
            });
        });

        //当进行多步动画时，以往一般思路是在animated的complete回调函数里进行下一个animate调用
        //但是由于jQuery的链式调用的特性。我们可以这样调用：
        $('.btn').eq(1).on('click', function () {
            $('.item1').eq(0).animate({
                height: 200
            }, 1000, 'swing')
                .animate({
                    height: 300
                }, 1000, 'swing')
                .animate({
                    width: 300
                }, 1000, 'swing')
                .animate({
                    width: 300
                }, 1000, 'swing');
        });
        //这样看起来似乎还不够简洁，我们可以将四个运动终点状态抽象出来，将其包装成一个数组，使用$.each对其遍历进行animate调用。
        let motion = [{
            height: 200
        },
        {
            height: 300
        },
        {
            width: 300
        }
        ];
        let $item1 = $('.item1');
        $('.btn').eq(2).on('click', function () {
            $.each(motion, function () {
                $item1.animate(this, 1000)
            })
        });
        //这样的一个缺陷是让分布调用变得抽象，但是无法给每一个分布动画加上不同的运动时间了
        //解决的方法是构造一个数组存储css和duration对象:如下：
        let motionOpt = [{
            css: { height: 200 },
            duration: { duaration: 1000 }
        },
        {
            css: { width: 200 },
            duration: { duration: 1500 }
        },
        {
            css: { height: 300 },
            duration: { duration: 2000 }
        },
        {
            css: { width: 300 },
            duration: { duration: 2500 }
        }
        ];
        $('.btn').eq(3).on('click', function () {
            $.each(motionOpt, function () {
                $item1.animate(this["css"], this["duration"]);
                //同步or异步and队列：每遍历到一个我们调用一次animate，而遍历就像for循环一样瞬间执行完毕，看起来就像"几乎"在同一时刻调用了多次animate
                //会不会使这些动画看起来想同步调用？其实jQuery比较智能的是将对于同一个元素的动画默认加入了队列，按照先后顺序排列动画事件。
                //所以动画还是会一次执行
            });
        });

        //在此之前我们的动画都是一步接着一步，有没有可能让每一步都是同步进行？或者个别步骤是跳出运动步骤与其他步骤同步进行？
        //在animate传入参数中可以传入一个options对象，里面含有一个参数queue，指定动画是否被放置于队列中，如果不放置在队列里，则会直接进行
        $('.btn').eq(4).on('click', function () {
            $('.item1').eq(0).animate({
                height: 300
            }, {
                duration: 1000,
                queue: false
            })
                .animate({
                    width: 300
                }, {
                    duration: 1000,
                    queue: false
                })
                .animate({
                    borderWidth: "50px"
                }, {
                    duration: 1000,
                    queue: false
                })
                .animate({
                    width: 400
                }, {
                    duration: 1500,
                    queue: true
                })
                .animate({
                    height: 400
                }, {
                    duration: 1500,
                    queue: true
                });
            //队列与非队列混合可以观察的更清楚：
            //1500duration与上面3个动画同时进行，当上面3个1000duration走完后，这一个处于队列的动画依然在进行剩下的500ms
            //接着再进行duration1500的高度增加动画。
        });
        //停止动画
        //语法：.stop([clearQueue][,jumpToEnd])/.finish([queue])
        //第一个参数决定是否取消队列动画（不再按队列，停止执行），第二个参数决定是否直接跳入当前队列动画的终点
        $('.btn').eq(5).on('click', function () {
            $('.item1').eq(0).animate({
                top: 300
            }, 2000)
                .animate({
                    left: 300
                }, 2000)
                .animate({
                    top: 0
                }, 2000)
                .animate({
                    left: 0
                }, 2000)
        });
        //以下操作描述为前2000ms时点击按钮所呈现的效果:
        $('.btn').eq(6).on('click', function () {
            $('.item1').eq(0).stop(true, true);
        }); //直接跳至第一个动画的样式终点，不再继续执行下一个队列动画
        $('.btn').eq(7).on('click', function () {
            $('.item1').eq(0).stop(true, false);
        }); //停止在运动当前位置，不再继续执行下一个队列动画
        $('.btn').eq(8).on('click', function () {
            $('.item1').eq(0).stop(false, true);
        });//跳至当前动画终点，并且继续执行队列中下一个动画，
        $('.btn').eq(9).on('click', function () {
            $('.item1').eq(0).stop(false, false);
        }); //停止在运动当前位置，并且继续队列中下一个动画

        //而finish跟stop（true,true)非常相似，但是finish会跳至队列里所有动画的样式终点。
        $('.btn').eq(10).on('click', function () {
            $('.item1').eq(0).finish()
        });
    </script>
</body>

</html>
```
6：如何设置和获取元素内部 HTML 内容？如何设置和获取元素内部文本？
解答：
$(元素).html();//不传参则获取html内容
$(元素).html('<li>111</li>'); //传参则改变元素内部html内容为所传参数
$(元素).text();//不传参则获取元素内部的文字信息
$(元素).text('hi');//元素内部文字信息设置为'hi'.
7：如何设置和获取表单用户输入或者选择的内容？如何设置和获取元素属性？
解答：
读取表单内容：.val([value]) 获取元素属性： attr([attributeName])
代码：
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>读取表单内容</title>
</head>

<body>
    <input type="text" name="" value="" class="text" diy-data="hi hunger">
    <button class="btn">GetValue</button>
    <button class="btn">SetValue</button>
    <button class="btn">GetAttribute</button>
    <button class="btn">SetAttribute</button>
    <script src="http://apps.bdimg.com/libs/jquery/1.9.1/jquery.js"></script>
    <script>
        $('.btn').eq(0).on('click', function () {
            console.log($('.text').eq(0).val());
        }); //输入框输入aaaaa. console.log: aaaaa
        $('.btn').eq(1).on('click', function () {
            console.log($('.text').eq(0).val('hi hunger'));
        }); //输入框内部出现'hi hunger'字样
        $('.btn').eq(2).on('click', function () {
            console.log($('.text').eq(0).attr('diy-data'));
        }); //hi hunger
        $('.btn').eq(3).on('click', function () {
            console.log($('.text').eq(0).attr('diy-data', 'I am a hunger'));
        }); //再去点击GetValue得到console.log: I am a hunger
    </script>
</body>

</html>
```