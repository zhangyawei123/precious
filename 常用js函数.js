// 去一个范围的随机数
function selectFrom(lowerValue, upperValue) {
		var choices = upperValue - lowerValue + 1;
		return Math.floor(Math.random() * choices + lowerValue);
	}
var num = selectFrom(9, 10);


// 获取一次touchmove的距离
(function () {
    var el = document;
    var startPosition, endPosition, deltaX, deltaY, moveLength;

    el.addEventListener('touchstart', function (e) {
        var touch = e.touches[0];
        startPosition = {
            x: touch.pageX,
            y: touch.pageY
        }
    });

    el.addEventListener('touchmove', function (e) {
        var touch = e.touches[0];
        endPosition = {
            x: touch.pageX,
            y: touch.pageY
        }

        deltaX = endPosition.x - startPosition.x;
        deltaY = endPosition.y - startPosition.y;
        moveLength = Math.sqrt(Math.pow(Math.abs(deltaX), 2) + Math.pow(Math.abs(deltaY), 2));
        console.log(moveLength);
    });
})();

// 提示浏览器升级代码
(function(w){if(!("WebSocket"in w&&2===w.WebSocket.CLOSING)){var d=document.createElement("div");d.className="browsehappy";d.innerHTML='<div style="width:100%;height:100px;font-size:20px;line-height:100px;text-align:center;background-color:#E90D24;color:#fff;margin-bottom:40px;">\u4f60\u7684\u6d4f\u89c8\u5668\u5b9e\u5728<strong>\u592a\u592a\u65e7\u4e86</strong>\uff0c\u592a\u592a\u65e7\u4e86 <a target="_blank" href="http://browsehappy.osfipin.com/" style="background-color:#31b0d5;border-color: #269abc;text-decoration: none;padding: 6px 12px;background-image: none;border: 1px solid transparent;border-radius: 4px;color:#FFEB3B;">\u7acb\u5373\u5347\u7ea7</a></div>';var f=function(){var s=document.getElementsByTagName("body")[0];if("undefined"==typeof(s)){setTimeout(f,10)}else{s.insertBefore(d,s.firstChild)}};f()}}(window));



// 正常情况用阿里的rem布局
!function(e){function t(a){if(i[a])return i[a].exports;var n=i[a]={exports:{},id:a,loaded:!1};return e[a].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=window;t["default"]=i.flex=function(e,t){var a=e||100,n=t||1,r=i.document,o=navigator.userAgent,d=o.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),l=o.match(/U3\/((\d+|\.){5,})/i),c=l&&parseInt(l[1].split(".").join(""),10)>=80,p=navigator.appVersion.match(/(iphone|ipad|ipod)/gi),s=i.devicePixelRatio||1;p||d&&d[1]>534||c||(s=1);var u=1/s,m=r.querySelector('meta[name="viewport"]');m||(m=r.createElement("meta"),m.setAttribute("name","viewport"),r.head.appendChild(m)),m.setAttribute("content","width=device-width,user-scalable=no,initial-scale="+u+",maximum-scale="+u+",minimum-scale="+u),r.documentElement.style.fontSize=a/2*s*n+"px"},e.exports=t["default"]}]);  flex(100, 1);


//第二种rem布局方案
function rem() {
    var width = document.documentElement.clientWidth;
    if ( width > 750 ) width = 750;
    document.documentElement.style.fontSize = width / 7.5 + 'px';
    }
    rem();
    window.addEventListener("orientationchange", function() {
        setTimeout(function () {
        rem();
    },200);
}, false);

//        点击下载或者打开APP
//        判断设备
    var ua = navigator.userAgent;
    $('#confirmDownLoad').click(function () {
        if(ua.match(/iPhone|iPod/i) != null){
            document.location = 'ios地址加参数';
            setTimeout(function() {
                location.href = 'ios下载页';
            }, 250);
            setTimeout(function() {
                location.reload();
            }, 1000);
            setTimeout(function() {history.back()}, 2000);
        }
        else if(ua.match(/Android/i) != null){
            document.location = 'android地址加参数' ;
            
            setTimeout(function() {
                location.href = 'Android下载页';
            }, 250);
            setTimeout(function() {
                location.reload();
            }, 1000);
            setTimeout(function() {history.back()}, 2000);}
        else if(ua.match(/iPad/i) != null){
            document.location = 'ipad地址';
            setTimeout(function() {
                location.href = 'ipad下载页';
            }, 250);
            setTimeout(function() {
                location.reload();
            }, 1000);
            setTimeout(function() {history.back()}, 2000);}
    })



//拼接在网页链接上的参数
function getQueryStringArgs(){
    //取得查询字符串并去掉开头的问号
    var qs = (location.search.length > 0 ? location.search.substring(1) : ""),
    //保存数据的对象
    args = {},
    //取得每一项
    items = qs.length ? qs.split("&") : [],
    item = null,
    name = null,
    value = null,
    //在 for 循环中使用
    i = 0,
    len = items.length;
    //逐个将每一项添加到 args 对象中
    for (i=0; i < len; i++){
        item = items[i].split("=");
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        if (name.length) {
            args[name] = value;
        }
    }
    return args;
}
//假设查询字符串是?q=javascript&num=10
var args = getQueryStringArgs();
alert(args["q"]); //"javascript"
alert(args["num"]); //"10"




//数组按数字大小排序
function compare(value1, value2) {
    if (value1 < value2) {
        return 1;
    } else if (value1 > value2) {
        return -1;
    } else {
        return 0;
    }
}
var values = [0, 1, 5, 10, 15];
values.sort(compare);
alert(values); // 15,10,5,1,0

//窗口滚动时判断元素是否在可视区域内
$(window).scroll(function() {
  var flag = $(window).scrollTop()<($('#item').offset().top-$(window).height()) ||$(window).scrollTop()>($('#item').offset().top+$('#item').outerHeight())
  console.log(flag)
});






