题目1： ajax 是什么？有什么作用？
解答：Ajax是对Asynchronous Javascript +XML的简写，它的诞生使得向服务器请求额外的数据而不用刷新页面，它的优缺点如下：
优点：
。更新数据而不需要刷新页面：它能在不刷新整个页面的前提下与服务器通信维护数据，由于ajax是按照需求请求数据，避免发送那些没有改变的数据。
。异步通信： 它与服务器使用异步的方式通信，不会打断用户的操作（卡死页面）。
。前后端负载均衡： 可以将后端服务器的一些工作转移给客户端，利用客户端限制的能力来处理，减轻了服务器的负担
。数据与呈现分离：利于分工，降低前后耦合。
缺点：
。浏览器历史记录的遗失： 在使用AJAX对页面进行改变后，由于并没有刷新页面，没有改变页面的访问历史，当用户想要回到上一个状态时，无法使用浏览器提供的后退。
。AJAX的安全问题：AJAX的出现就像建立起了一直通服务器的另一条通道，容易遭受到一些攻击。

题目2：前后端开发联调需要注意哪些事情？后端接口完成前如何 mock 数据？
解答：
1.接口叫什么?接口名称，统一命名，定制规范，甚至拟定命名表。
2.接口传什么？数据类型确定，数据大小等限制的确定。
3.接口的相关参数：服务器？端口？方法？请求数据的一些限制?
4.按照上述确认后的版本严格执行。
前端人员可以自己使用服务器框架搭建一个模拟服务器环境，比如使用express&nodejs,更简单的办法是使用server-mock在数据的模拟传输和请求查看上，postman也是一个好工具。

题目3：**点击按钮，使用 ajax 获取数据，如何在数据到来之前防止重复点击?
方法1：
根据交互的形式，如果是使用点击-请求的类型，在提交请求后将按钮disabled就行。
方法2：使用一个全局变量模拟锁。
```
let AjaxLock = false;
//事件触发下面代码
//***start***
if (!AjaxLock){
    AjaxLock = true;
    xhr.onreadystatechange = function(){
        if( xhr.readyState == 4){
            // do something
            AjaxLock = false;
            //当接受完毕请求数据后将被打开
        }
    }
    //ajax配置
    xhr.send();
} else {
    return;
}
//****end****

```

进一步考虑用户体验，如果我们允许用户多次点击，那么实现ajax的防止多次请求的思路可变为：
。多次请求取最后一次
。多次请求在一定时限后的请求都被截止
。取时限前的最后一次
。多次点击触发下设置定时器，将多化少，多次点击只触发较少次数请求，以一定频率提交
。两次请求之间必须大于一定时间