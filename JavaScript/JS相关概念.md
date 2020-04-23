1.CSS和JS在网页中的放置顺序是怎样的？
CSS样式放在页面的head中。
js文件放置在body的结尾处。
js所依赖的库（比如jQuery）放置在js的前面。
2.解释白屏和FOUC
浏览器的白屏和无样式内容闪烁（Flash of unstyled content）。是由于浏览器加载与显示页面方式不同造成的：
IE会出现白屏现象，这是因为其等待页面组件包括样式表全部加载完成后才呈现整个页面。 若样式表放在页面底部，将会出现白屏。--样式表在页面中位置并不影响页面中组件的下载时间，但是会影响页面的呈现。IE为什么会这样做？因为样式表仍在加载，构建呈现树就是一种浪费，因为在所有样式表加载并解释完毕之前无需绘制任何东西，否则，在其准备好之前显示的内容会遇到FOUC问题。这样IE就避免了FOUC问题， 也就自然的会出现白屏现象。在IE中，将样式表放在文档底部会导致白屏问题的情形有以下几种：
一、在新窗口中打开时
二、重新加载时
三、作为主页打开时
FireFox当把样式表放在页面底部时，会遇到FOUC问题，因为FireFox为了用户体验，对所有都是对页面中的组件逐步呈现。
此外，引入样式表时，有两种方式：link和@import.
```
link:  <link rel = "stylesheet" href = "styles1.css">
@import : <style type = "text/css">
                    @import url("styles1.css");
                    @import url("styles2.css");
                    ...  ...
           </style>
 ```
一个style块可以包含多个@import规则，但@import规则必须放在所有其他规则之前。使用@import规则需要注意的是：即便把@import规则放在文档的head标签中，可能导致页面组件下载时的无序性，进而导致白屏（对于IE）和FOUC（对于FirFox）问题的产生。

3.async和defer的作用是什么？有什么区别
都是用来异步加载script标签的。
没有defer或async，浏览器会立即加载并执行指定的脚本，“立即”指的是在渲染该script标签之下的文档元素之前，也就是说不等待后续载入的文档元素，读到就加载并执行。
<script async src="script.js"></script>
有async，加载和渲染后续文档元素的过程将和script.js的加载与执行并行进行（异步）。
<script defer src="script.js></script>
有defer，加载后续文档元素的过程将和script.js的加载并行进行（异步），但script.js的执行要在所有元素解析完成之后，DOMContentLoaded事件触发之前完成。

4.简述网页的渲染机制
.解析HTML标签，构建DOM树。
.解析CSS标签，构建CSSOM树。
.把DOM和CSSOM组合成渲染树（render tree）
.把渲染树的基础上进行布局，计算每个节点的几何结构。
.把每个节点绘制到屏幕上（painting）