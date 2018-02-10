html模板，静态网页模板

## 笔记

Html代码整合，如登录界面，用iframe加载登录框
Ajax跨域问题

Position设置：
	Fixed，absolute脱离文档流，导致父级不会自动撑开
标签有默认margin和padding，设置其值为0

<hr>
setTimeout()和setInterval()经常被用来处理延时和定时任务。setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式,而setInterval()则可以在每隔指定的毫秒数循环调用函数或表达式，直到clearInterval把它清除。
<br/>
从定义上我们可以看到两个函数十分类似，只不过前者执行一次，而后者可以执行多次，两个函数的参数也相同，第一个参数是要执行的code或句柄，第二个是延迟的毫秒数。
<hr/>

### 让浏览器直接输出HTML代码而不解析

将HTML代码嵌入到<script type='text/html' style='display:block'></scipt>中 
如：

`<script type='text/html' style='display:block'>
    <input type="text" />
</scipt>`
