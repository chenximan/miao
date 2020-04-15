1： dom对象的innerText和innerHTML有什么区别？
解答：
innerText返回元素内的文本内容，innerHTML返回元素内的HTML结构（不包括元素本身）
2： elem.children和elem.childNodes的区别？
解答：
elem.childNodes返回所有的子节点，包括HTML元素，属性，文本。elem.children不包括文本节点。
3：查询元素有几种常见的方法？ES5的元素选择方法是什么?
解答：
有：
docoument.getElmentById()
docoument.getElmentByClassName()
docoument.getElmentByTagName()
docoument.getElmentByName()
ES5的元素选择方法是：
document.querySelector(); 方法返回匹配指定的CSS选择器的元素节点,如document.querySelector(".myclass");
document.querySelectorAll(); 方法返回匹配指定的CSS选择器的所有节点
4：如何创建一个元素？如何给元素设置属性？如何删除属性
解答：
var newElement = document.createElement('input'); //创建
newElement.setAttribute('name','user');//设置
newElement.removeAttrribute('name'); //删除
5：如何给页面元素添加子元素？如何删除页面元素下的子元素?
解答：
添加元素：appendChild() insertBefore()
删除元素： removeChild()
代码：
<ul>
    <li></li>
    <li></li>
</ul>
<script>
    var ulnode = document.getElementsByTagName('ul')[0];
    var li = document.createElement('li');
    var context = document.createTextNode('hello');
    li.appendChild(context);
    ulnode.insertBefore(li,ulnode.firstChild);//添加
    /*删除 ulnode.removeChild(li)*/
</script> 
6： element.classList有哪些方法？如何判断一个元素的 class 列表中是包含某个 class？如何添加一个class？如何删除一个class?
解答：
add()在元素中添加一个或多个类名。
contains(class)返回布尔值，判断指定的类名是否存在
item(index)返回类名在元素中的索引值。索引值从0开始。
remove(class1, class2,...)移除元素中一个或多个类名。
toggle(class, trur|false)在元素中切换类名。
利用contains方法来判断class是否存在。
利用removes()删除class
利用add添加class
7： 如何选中如下代码所有的li元素？ 如何选中btn元素？
<div class="mod-tabs">
   <ul>
       <li>list1</li>
       <li>list2</li>
       <li>list3</li>
   </ul>
   <button class="btn">点我</button>
</div>
解答：
<div class="mod-tabs">
   <ul>
       <li>list1</li>
       <li>list2</li>
       <li>list3</li>
   </ul>
   <button class="btn">点我</button>
</div>
<script>
    document.querySelectorAll('.mod-tabs li')
    document.querySelector('.mod-tabs btn')
</script>