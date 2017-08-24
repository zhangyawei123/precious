//获取元素距离左边和顶部的距离
function getElementLeft(element){
	var actualLeft = element.offsetLeft;
	var actualTop = element.offsetTop;
	var current = element.offsetParent;
	while (current !== null){
	actualLeft += current.offsetLeft;
	actualTop += current. offsetTop;
	current = current.offsetParent;
	}
	return {'posLeft': actualLeft,'posTop',actualTop};
}

//跨浏览器的事件处理程序
var EventUtil = {
	addHandler: function(element, type, handler){
		if (element.addEventListener){
			element.addEventListener(type, handler, false);
		} else if (element.attachEvent){
			element.attachEvent("on" + type, handler);
		} else {
			element["on" + type] = handler;
		}
	},
	removeHandler: function(element, type, handler){
		if (element.removeEventListener){
			element.removeEventListener(type, handler, false);
		} else if (element.detachEvent){
			element.detachEvent("on" + type, handler);
		} else {
			element["on" + type] = null;
		}
	}
};


//1。获取鼠标点击的坐标值（相对于文档的位置）2。（clientX,clientY）相对于屏幕的坐标值
var div = document.getElementById("myDiv");
EventUtil.addHandler(div, "click", function(event){
event = EventUtil.getEvent(event);
var pageX = event.pageX,
pageY = event.pageY;
if (pageX === undefined){
pageX = event.clientX + (document.body.scrollLeft ||
document.documentElement.scrollLeft);
}
if (pageY === undefined){
pageY = event.clientY + (document.body.scrollTop ||
document.documentElement.scrollTop);
}
alert("Page coordinates: " + pageX + "," + pageY);
});



















