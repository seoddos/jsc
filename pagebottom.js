var speed=5;var currentpos=1;var timer;var bcolor=document.getElementById('bcolor');var txtcolor=document.getElementById('txtcolor');var fonttype=document.getElementById('fonttype');var scrollspeed=document.getElementById('scrollspeed');function setSpeed()
{speed=parseInt(scrollspeed.value);if(speed<1||speed>10){speed=5;scrollspeed.value=5;}}
function stopScroll()
{clearInterval(timer);}
function beginScroll()
{timer=setInterval("scrolling()",300/speed);}
function scrolling()
{var currentpos=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;window.scroll(0,++currentpos);var nowpos=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;if(currentpos!=nowpos)clearInterval(timer);}
function setCookies(cookieName,cookieValue,expirehours)
{var today=new Date();var expire=new Date();expire.setTime(today.getTime()+3600000*356*24);document.cookie=cookieName+'='+escape(cookieValue)+';expires='+expire.toGMTString()+'; path=/';}
function ReadCookies(cookieName)
{var theCookie=''+document.cookie;var ind=theCookie.indexOf(cookieName);if(ind==-1||cookieName=='')return '';var ind1=theCookie.indexOf(';',ind);if(ind1==-1)ind1=theCookie.length;return unescape(theCookie.substring(ind+cookieName.length+1,ind1));}
function saveSet()
{setCookies("bcolor",bcolor.options[bcolor.selectedIndex].value);setCookies("txtcolor",txtcolor.options[txtcolor.selectedIndex].value);setCookies("fonttype",fonttype.options[fonttype.selectedIndex].value);setCookies("scrollspeed",scrollspeed.options[scrollspeed.selectedIndex].value);}
function loadSet()
{var tmpstr;tmpstr=ReadCookies("bcolor");bcolor.selectedIndex=0;if(tmpstr!="")
{for(var i=0;i<bcolor.length;i++)
{if(bcolor.options[i].value==tmpstr)
{bcolor.selectedIndex=i;break;}}}
tmpstr=ReadCookies("txtcolor");txtcolor.selectedIndex=0;if(tmpstr!="")
{for(var i=0;i<txtcolor.length;i++)
{if(txtcolor.options[i].value==tmpstr)
{txtcolor.selectedIndex=i;break;}}}
tmpstr=ReadCookies("fonttype");fonttype.selectedIndex=0;if(tmpstr!="")
{for(var i=0;i<fonttype.length;i++)
{if(fonttype.options[i].value==tmpstr)
{fonttype.selectedIndex=i;break;}}}
tmpstr=ReadCookies("scrollspeed");if(tmpstr=='')tmpstr=5;scrollspeed.value=tmpstr;setSpeed();document.getElementById('main').style.backgroundColor=bcolor.options[bcolor.selectedIndex].value;contentobj=document.getElementById('content');contentobj.style.fontSize=fonttype.options[fonttype.selectedIndex].value;contentobj.style.color=txtcolor.options[txtcolor.selectedIndex].value;}
document.onmousedown=stopScroll;document.ondblclick=beginScroll;loadSet();