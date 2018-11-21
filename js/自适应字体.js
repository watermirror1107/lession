var w=document.body.clientWidth;
var a=document.getElementsByTagName('html')[0];
var f=parseInt(window.getComputedStyle(a,null).fontSize);//null是获取伪类元素;
var x='375';//设计稿屏幕宽度
window.onload=function () {
	a.style.fontSize=(100*w)/x+'px'
};
