var playerw='100%';//电脑端播放器宽度
var playerh='100%';//电脑端播放器高度
var mplayerw='100%';//手机端播放器宽度
var mplayerh='100%';//手机端播放器高度
var adsPage="";//视频播放前广告页路径
var adsTime=0;//视频播放前广告时间，单位秒
var jxAname="云播放①";
var jxBname="云播放②";
var jxCname="云播放③";
var jxDname="云播放④";
var jxEname="云播放⑤";
var jxAapi="https://";
var jxBapi="https://";
var jxCapi="https://";
var jxDapi="https://";
var jxEapi="https://";
var forcejx="no";
var unforcejx="yunpan#swf#iframe#url#xigua#ffhd#jjvod";
var unforcejxARR = unforcejx.split('#');


function contains(arr, obj) {  
    var i = arr.length;  
    while (i--) {  
        if (arr[i] === obj) {  
            return true;  
        }  
    }  
    return false;  
}

function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
 
var flag = IsPC(); //true为PC端，false为手机端
if(flag==false)
{
	playerw=mplayerw;
	playerh=mplayerh;
}
  //禁用右键（防止右键查看源代码）
        window.oncontextmenu=function(){return false;}
        //禁止任何键盘敲击事件（防止F12和shift+ctrl+i调起开发者工具）
        window.onkeydown = window.onkeyup = window.onkeypress = function () {
            window.event.returnValue = false;
            return false;
        }
       var check = (function () {
  var callbacks = [],
    timeLimit = 50,
    open = false;
  setInterval(loop, 1);
  return {
    addListener: function (fn) {
      callbacks.push(fn);
    },
    cancleListenr: function (fn) {
      callbacks = callbacks.filter(function (v) {
        return v !== fn;
      });
    }
  }

  function loop() {
    var startTime = new Date();
    debugger;
    if (new Date() - startTime > timeLimit) {
      if (!open) {
        callbacks.forEach(function (fn) {
          fn.call(null);
        });
      }
      open = true;
    } else {
      open = false;
    }
  }
})();

check.addListener(function () {}); 