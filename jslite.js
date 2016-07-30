/*




*/window.ø=undefined
window.tof=function(v){return v===ø||v===null?v:v.isN&&isNaN(v)?'NaN':v.isN?'n':v.isS?'s':v.isB?'b':v.isA?'a':v.isR?'re':v.isD?'d':v.call?'f':v.tagName?'e':v.length?'arguments':v.constructor===Object?'o':v+''}
window.key=function(ao){if(ao===ø||ao===null)return;for(var x,y=1;y<arguments.length;y++){x=arguments[y];if(ao[x]!==ø)ao=ao[x];else return;}return ao}
window.ev=function(s,ifø){if(!s)return s;try{eval('var v='+s)}catch(err){return ifø===ø?s:ifø};return v}
//
window.jslite=(function(){var $=function(se,so,e){$.current=se;var a=[];switch(tof(se)){case 'o':case 'f':return $;break;case 'e':a=[se];break;case 'a':a=se;break;case 's':a=$.e.selector(se,e);break;default:if(se===window||se===document||se===screen)a=[se]}return so?$.exe(so,a):a}
/*
	object!

*/$.o={
count:function(e){e=e||$.current;var n=0,x;for(x in e)n++;return n}
,push:function(o,e){e=e||$.current;for(var x in o)e[x]=o[x];return e}
,extend:function(o,e){e=e||$.current;for(var x in o)e.prototype[x]=o[x];return e}
,clone:function(s,v){var no;if(s){no=/\(\-\)/.test(s);s=s.r(/\(\-\)|\(\+\)/)}switch(tof(v)){case 'a':var r=[];v.each(function(y,row){r[y]=$.o.clone(ø,row)});break;case 'o':var r={};for(var x in v)if(!s||(no&&!s.word(x))||(!no&&s.word(x)))r[x]=$.o.clone(ø,v[x]);break;default:r=v}return r}
,toAlert:function(o,inner){var s="";for(var x in o)s+=x+': '+alert.toS(o[x],'inner').maxLength(alert.lnlen,'...')+(inner?', ':"\n");return !s?'{}':"{"+(inner?'':"\n")+s.r(/, $|\n$/)+(inner?'':"\n")+"}"}
,steal:function(x,o){if(tof(o)!=='o')return;var attr=$.o.clone(ø,o[x]);o[x]=ø;return attr}
,toA:function(o){var a=[];for(var x in o)a.push(o[x]);return a}
}
/*
	string!

*/$(String).o.extend({isSN:1,isS:1,toA:function(c){return this.split(c||'|')}
,r:function(w,r){return this.replace(w,r||'')}
,m:function(r,ifø){var m=this.match(r)||[];return ifø===ø||m.length>0?m:ifø}
,toO:function(){var s=this;if(tof(s)==='o')return s;if(!s)return {};var a=s.r(/;$/).split(';'),o={};for(var r,y=0;r=(a[y]+'').split(':'),y<a.length;y++)o[r[0]]=r[1];return o}
,toL:function(){return this.toLowerCase()}
,toU:function(){return this.toUpperCase()}
,ord:function(n){return this.charCodeAt(n||0)}
,chr:function(){return String.fromCharCode(this*1)}
,trim:function(c){c=c||'\\s';return this.r(("^"+c+"{1,}|"+c+"{1,}$").toR())}
,toR:function(gi){return /^\/.*\/\w{0,3}$/.test(this)?ev(this):new RegExp(this,gi)}
,strtr:function(o){if(!o)return this;var s=this+'';for(var x in o)s=s.r(x.toR('g'),o[x]);return s}
,encript:function(){var s=this,a=[];s.split('').each(function(y){a.push(s[y].ord()-27)});return a.join('.')}
,decript:function(){var s=this,a=[];s.split('.').each(function(){a.push(s[y].chr()+27)});return a.join('')}
,word:function(s,c){return s.to('word',c||'\\|').toR().test(this)}
,maxLength:function(n,s){return this.length<=n?this:this.substr(0,n)+(s||'')}
,toggle:function(v,c){var s=this,c=c||' ',w=(v+'').m(/\(\+\)|\(\-\)|\(\+\/\-\)|\=\>/)[0]||'',v=w==='=>'?v.split('=>'):v.r(w),re=w==='=>'?'':v.to('word',c).toR('g');switch(w){case '(+)':s=!re.test(s)?s+c+v:s;break;case '(-)':s=s.r(re,c);break;case '(+/-)':s=s.toggle((re.test(s)?'(-)':'(+)')+v,c);break;case '=>':s=s.toggle('(-)'+v[0],c);s=s.toggle('(+)'+v[1],c);break;default:s=v}return s.r(c+c,c).trim(c)}
,escape:function(){return (this+'').strtr({'&':":a;",'\\+':":m;",'à':"á",'è':"é",'ì':"í",'ò':"ó",'ù':"ú",'À':"Á",'È':"É",'Ì':"Í",'Ò':"Ó",'Ù':"Ú",'"':":c;",'%':":p;"})}
,n:function(){return parseFloat(this)}
,int:function(){return parseInt(this)}
,to:function(w,c){var s=this;switch(w){
 case'capital':return s.toL().r(/^(\w)/g, function(s,c){return c.toU()}).r(/ (\w)/g,function(s,c){return ' '+c.toU()});break
 case'title':return s.trim().toCase('capital').strtr({' De ':" de ",' Lo ':" lo ",' Los ':" los ",' La ':" la ",' Las ':" las ",' El ':" el ",' Del ':" del "});break
 case'js':return s.r(/\-(\w)/g, function(s,c){return c.toU()});break
 case'css':return s.replace(/([A-Z])/g,'-$1').toLowerCase();break
 case'word':return ('(^|'+(c||' ')+')'+s+'('+(c||' ')+'|$)');break
 case 'stripTags':return s.r( /<.*?>/g);break;// /<[^p].*?>/g 
}}
})
/*
	number!			(native) toFixed(2)

*/$(Number).o.extend({isSN:1,isN:1,n:function(){return this}
,til:function(pct){if(pct===ø)pct=1;if(pct.isS&&/\%$/.test(pct))pct=pct.r(/\D/g)/100;return this*pct}
,decimal:function(){return ((this+'').split('.')[1]||0)*1}
,each:function(f){for(var v,y=0;y<this;y++)if((v=f(y,this))!==ø)return v;}
,trunc:function(){return this|0}
,abs:function(){return Math.abs(this)}
,chr:function(){return String.fromCharCode(this)}
,int:function(){return parseInt(this)}
})
/*
	array!

*/$(Array).o.extend({isA:1,nativePush:Array.prototype.push,toA:function(){return this}
,remove:function(y,n){var a=this;a.splice(y,n);return a}
,push:function(v){this.nativePush(v);return this}
,dim:function(){return !this.length?0:tof(this[0])==='a'?2:1}
,cat:function(a){for(var y=0;y<a.length;y++)this.push(a[y]);return this}
,each:function(f){for(var y=0;y<this.length;y++){var r=f.call(this[y],y,this[y]);if(r!==ø)return r};return this}
,toO:function(){var o={},a=this;if(a.dim()===1)a=[a];a.each(function(y,r){r=r.toA();o[r[0]]=r[1]});return o}
,toAlert:function(inner){var s='';this.each(function(y,r){s+=alert.toS(r,'inner').maxLength(alert.lnlen,'...')+(inner?', ':"\n")});return !s?'[]':'['+(inner?'':"\n")+s.r(/, $|\n$/)+(inner?'':"\n")+']'}
})
/*
	function!

*/$(Function).o.extend({isF:1
,inherit:function(parentClass){this.prototype=new parentClass();this.prototype.constructor=this;this.prototype.parentClass=parentClass;return this}
,each:function(args,e){var r;this.a.each(function(y,f){if(f)r=f.apply(e,args)});return r}
,add:function(f){if(!this.a)this.a=[];return this.insertId=this.a.push(f).length-1}
,remove:function(n){this.a[n]=null}
,toAlert:function(){return this.toString().m(/\s*\w+\s*\([\w,]*\)/)[0]+'{...}'}
})
$(Boolean).o.extend({isB:1});$(RegExp).o.extend({isR:1});$(Date).o.extend({isD:1})
/**
	$!

*/$.o.push({tmp:{}
,byId:function(s){return !s?ø:!s.isS?s:document.getElementById(s.r('#'))}
,exe:function(o,a){var x;[].cat(a).each(function(y,e){x=$.e.attr(o,e)});return x}
,create:function(o){if(!o)return;if(o.tagName)return o;if(o.isS)return $.e.fix(document.createElement(o));var $t=$.e[o.tag];var e=$.e.fix($t&&$t.create?$t.create(o):document.createElement(o.tag));$.e.attr(o,e);return e}
// json
,toS:$(function(v,notation,escaped){var o=$.toS[notation||'js'];switch(tof(v)){
	case 'b':return v?'true':'false';break;case null:return 'null';break
	case 's':return '"'+(escaped?v.escape():v)+'"';break
	case 'a':for(var s=o.abegin,i=0;i<v.length;i++)s+=$.toS(v[i],notation,escaped)+o.acoma;return s.r(eval('/'+o.acoma+'$/'))+o.aend;break
	case 'o':var s=o.obegin;for(x in v)s+=o.oattrbegin+x+o.oattrend+$.toS(v[x],notation,escaped)+o.ocoma;s=s.r(/\,$/);return s+o.oend;break
	default:return (v+'')?v+'':v
}}).o.push({js:{abegin:'[',aend:']',acoma:',',obegin:'{',oend:'}',ocoma:',',oattrbegin:'"',oattrend:'":'}})
//
,unique:function(s){this.unique.n=this.unique.n||0;return ++this.unique.n}
,isIE:('ActiveXObject' in window?parseInt(navigator.appVersion.toL().split(/msie|rv:/)[1]):0).n()
,cookie:function(v,id){id=id||'json';var s=document.cookie.length?ev(unescape((document.cookie.m(("("+id+"=[^;]*)(;|$)").toR())[1]||'').r(id+'='))):{};if(!v)return s;var d=new Date();d.setTime(d.getTime()+(365*24*60*60*1000));$.o.push(v,s);document.cookie=id+"="+escape($.toS(s))+";expires="+d.toGMTString()+";"}
,url:function(s){if(s.indexOf('>')<0)return s;s=s.split('>');var p=$.url[s[0]];return p.root+(p[s[1]]||s[1])+(s[2]?s[2]:'')}
//
},$)
$.userAgent=($.isIE?'msie':(navigator.userAgent.m(/rekonq|opera|firefox|chrome|konqueror/i)[0]+'').toL())
$.appVersion=($.isIE||(navigator.userAgent.split($.userAgent.toR('i'))[1]||'').m(/\d{1,}/)[0]||0).n()
/*
	element!

*/$.e={prefijo:'',sufijo:''
,tag:function(none,e){return ((e||{}).tagName||'').toL()}
,id:function(s,e){var s=$.e.prefijo&&s?s.r(/^\*/,$.e.prefijo):s;s=$.e.sufijo&&s?s.r(/\*$/,$.e.sufijo):s;return e.id=s}
,fix:function(e){if(e&&e.tagName&&!e.o){e.setAttribute('o','#');e.o={}}return e}
,clean:function(none,e){[].cat(e.childNodes).each(function(){if(!this.tagName)e.removeChild(this)})}
,is:function(s,e){if(!key(e,'tagName'))return;var a=e.parentNode.querySelectorAll(s);for(var y=0;y<a.length;y++)if(e===a[y])return true;return false}
,focus:function(delay,e){if(!e)return;if(!delay){if(e.focus)e.focus();return $.e.is(':focus',e);}else setTimeout(function(){try{e.focus()}catch(err){}},delay||0)}
,selector:function(s,e){if(tof(s)==='e')return [s];e=$.byId(e);return [].cat((key(e,'tagName')?e:document).querySelectorAll(s))}
,computedStyle:function(attr,e){return e.currentStyle?e.currentStyle[attr.to('js')]:window.getComputedStyle?window.getComputedStyle(e,null).getPropertyValue(attr.to('css')):e.style[attr]}
,css:function(v,e){if(!v)return e.className;e.className=e.className.toggle(v)}
//
,remove:function(none,e){if(e&&e.parentNode)e.parentNode.removeChild(e)}
,insert:function(o,e){if(o.tagName||o.tag)o={first:o};for(var x in o){o[x]=$.create(o[x]);switch(x){
	case 'first':if(t=this.firstChild(ø,e))e.insertBefore(o.first,t);else e.appendChild(o.first);break;
	case 'before':e.parentNode.insertBefore(o.before,e);break;
	case 'after':e.parentNode[(t=this.next(ø,e))?'insertBefore':'appendChild'](o.after,t||ø);break;
}}}
,childElementNodes:function(none,e){return [].cat(e.children)}
,siblings:function(none,e){return [].cat(e.parentNode.children).filter(function(r){return r!==e})}
//
,push:function(a,e){var e2;(a.isA?a:[a]).each(function(y,r){switch(tof(r)){case null:break;case 's':case 'n':e.innerHTML+=r+'';break;case 'e':e.appendChild(r);break;case 'o':e.appendChild(e2=$.create(r));break}});return e2||e}
,html:function(v,e){if(v===ø)return e.innerHTML;e.innerHTML='';if(v.isSN)e.innerHTML=v;else $.push(v,e)}
,setAttr:function(x,v,e){e.setAttribute(x,v!==0&&v&&v.isSN?v:'#');return e[x]=v}
,attr:function(o,e){var $t=$.e[(e.tagName||'').toL()]||{},o=o&&o.toO?o.toO():o,v;$.e.fix(e);for(var x in o){v=o[x];if(x==='tag'||x==='create')continue;x=$t[x]&&$t[x].call?$t[x](v,e):$.e[x]&&$.e[x].call?$.e[x](v,e):v&&v.call?$.e.setEvent(x,v,e):v===ø?e[x]:$.e.setAttr(x,v,e)}return x}
//
,valueContent:function(v,e){if(v===ø)return e.value;e.setAttribute('value',v);e.value=v}
,value:function(v,e){var tag=$.e.tag(ø,e);if(tag==='input')return (key($.e,(e.type||'').toL(),'value')||this.valueContent)(v,e);return key($.e[tag],'value','call')?$.e[tag].value(v,e):this.valueContent(v,e)}
,textContent:function(s,e){if(s===ø)return e.textContent||e.innerText||e.innerHTML;e.textContent!==ø?e.textContent=s:e.innerHTML=s.to('textContent');}
,text:function(v,e){var tag=$.e.tag(ø,e);if(tag==='input')return (key($.e,(e.type||'').toL(),'text')||this.valueContent)(v,e);if(tag==='textarea')return e.value;return key($.e[tag],'text','call')?$.e[tag].text(v,e):this.textContent(v,e)}
/**
	event!

*/,event:function(v,e){if(!v||v.e)return v;var o={nativeEvent:v,e:e};for(var x in v)o[x]=v[x];$.o.push({target:v.target||v.srcElement||document,currentTarget:v.currentTarget||e,which:v.which||v.button||0,keyChar:(v.which||'').chr(),specialKey:v.metaKey||v.ctrlKey||v.altKey},o);o.uiKey=(o.specialKey||!o.which||o.which===8);return o}
,setEvent:function(x,f,e){if(!e[x])e[x]=function(event){return e[x].each([$.e.event(event,e)],e)};return e[x].add(f)}
,onenter:function(f,e){return this.setEvent('onkeyup',function(event){if(event.which===$.keys.enter)return f.call(this,event)},e)}
,onclickout:function(f,e){return this.setEvent('onclick',function(event){var t=event.target;do{if(t===e)return;}while(t=t.parentNode);f.call(e,event)},window)}
,keys:{f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,shift:16,ctrl:17,alt:18,tab:9,enter:13,backSpace:8,space:32,del:46,escape:27,left:37,right:39,up:38,down:40,home:36,end:35,pgDown:34,pgUp:33,capsLock:20}
}
/**
	style!

*/$($.e.style=function(o,e){var th=$.e.style,o=o&&o.toO?o.toO():o;for(x in o){var v=o[x],x=th.attrName(x);x=th[x]&&th[x].call?th[x](v,e):key(e.style[x],'call')?e.style[x](v):v===ø?e.style[x]||$.e.computedStyle(x,e):e.style[x]=v}return x}).o.push({
attrName:function(x){return x==='float'?'cssFloat':x.to('js')}
,getRect:function(none,e){var x=e.offsetLeft,y=e.offsetTop,e2=e,win=this.rect(ø,window),sT=win.scrollTop,sL=win.scrollLeft,pos='static';while(e&&e.tagName){if(pos==='static'){pos=$.e.computedStyle('position',e)||'static';if(pos==='absolute'){sL=sT=0;x=e.offsetLeft;y=e.offsetTop;break}}x-=e.scrollLeft||0;y-=e.scrollTop||0;e=e.parentNode};e=e2;return {left:pos==='fixed'?e.getBoundingClientRect().left.int():sL+x,top:pos==='fixed'?e.getBoundingClientRect().top.int():sT+y,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop,clientWidth:e.clientWidth,clientHeight:e.clientHeight,right:sL+x+e.offsetWidth,bottom:sT+y+e.offsetHeight,width:e.offsetWidth,height:e.offsetHeight,position:pos}}
,invisible:function(type,e){if(!$.e.fix(e)||!e.style)return;switch(type){case 'backup':if(e.o.invisible=$.e.style.display(ø,e)==='none')e.style.display=(e.style.position==='absolute')?'block':'';break;case 'restore':if(e.o.invisible)e.style.display=e.o.display;break}}
,rect:function(none,e){switch(e){case window:return {left:0,top:0,height:e.innerHeight,width:e.innerWidth,scrollLeft:(window.pageXOffset||window.pageXOffset===0?window.pageXOffset:document.documentElement.scrollLeft)||0,scrollTop:(window.pageYOffset||window.pageYOffset===0?window.pageYOffset:document.documentElement.scrollTop)||0};break;case screen:return {left:e.screenX||e.screenLeft||0,top:e.screenY||e.screenTop||0,height:e.height,width:e.width};break};this.invisible('backup',e);var o=this.getRect(ø,e);this.invisible('restore',e);return o}
,display:function(s,e){var v=$.e.computedStyle('display',e);if(s===ø)return v;e.style.display=s==='(+/-)'?(v==='none'?'':'none'):s}
})
/**
	color!

*/$.color={
toRGB:function(s){if(s.isA)return s;s=s.r('#').toL();var a=s.length=='3'?[s.charAt(0)+s.charAt(0),s.charAt(1)+s.charAt(1),s.charAt(2)+s.charAt(2)]:[s.substr(0,2),s.substr(2,2),s.substr(4,2)],f=function(c){return parseInt(c,16)};return [f(a[0]),f(a[1]),f(a[2])]}
,toHex:function(a){if(a.isS&&a.indexOf('#')>-1)return a;if(a.isS)a=a.m(/\d{1,}/g);var f=function(n){n=parseInt(n).toString(16);return n.length===1?'0'+n:n};return "#"+f(a[0])+f(a[1])+f(a[2])}
,add:function(col,n){col=this.toRGB(col);n=n*16;col=[col[0]+n,col[1]+n,col[2]+n];return this.toHex(col)}
}
/**
	css!

*/$($.css=function(o,w){return tof(o)==='s'?$.css.theme[o]||$.css.find(o):$.css.update(o,w===ø?'insert':w==='update'?false:w)}).o.push({org:{},o:{},theme:{}
,sheet:function(){if(document.createStyleSheet){var e=document.createStyleSheet();e.cssRules=e.cssRules||e.rules;return e}var e=document.createElement('style');(document.head||document.getElementsByTagName('head')[0]).appendChild(e);return e.sheet}()
,r:function(s,o){s=s.r(/<[\w\.:-]+>/g,function(s){return ((o||$.css.o)[s.r(/[<>]/g)]||s).r(/;$/)});s=s.r(/<[#&][\w-]+>/g,function(s){return (o||$.css.theme)[s.r(/[<>]/g)]||s});s=s.r(/#[\w-]+[\+-][\d\.]+/g,function(s){var r=/[\+\-][\d\.]+/,c=s.m(r)[0],s=s.r(r);return $.color.add(s,c)});s=s.r(/url\('[\w>-_\.\/]+'\)/,function(s){return "url('"+ev("$."+s)+"')"});s=s.r(/toRGB\([\#\w\.]+\)/,function(s){s=s.r('toRGB(').r(')');return $.color.toRGB(s)});return s}
,addRule:function(x,s){if(this.sheet.addRule)return this.sheet.addRule(x,s);this.sheet.insertRule(x+'{'+s+'}',this.sheet.cssRules.length)}
,find:function(w,a){w=w.toL();return (a||[]).cat(this.sheet.cssRules).each(function(){if(this.selectorText.toL()===w)return this})}
,update:function(org,insertOnly){var rule;org=this.toO(org);var o=$.o.clone(ø,org);for(var x in o){if(!this.org[x])this.org[x]=o[x];o[x]=this.r(o[x]);this.o[x]=o[x];if(!insertOnly&&(rule=this.find(x)))$.e.style(o[x],rule);else this.addRule(x,o[x])}}
,toO:function(s){if(tof(s)==='o')return s;var o={};s.r(/\n/g).split('}').each(function(){var tok=this.r(/\n/g).split('{');if(tok[0])o[tok[0].trim()]=tok[1].trim()});return o}
,load:function(theme){var len=this.sheet.cssRules.length;for(var y=len-1;y>-1;y--)this.sheet[this.sheet.deleteRule?'deleteRule':'removeRule'](y);this.o={};$.o.push(theme,this.theme);this.update(this.org,1)}
,defineTheme:function(v,from){var o=!from?{}:$.o.clone(ø,from);for(var x in v)o[x]=$.css.r(v[x],o);return o}
,bgLnGr:function(fst,sec){var s=[].cat(arguments).join(',');s=s.r(/,$/);s="background-color:"+fst+";"+"background:-moz-linear-gradient("+s+");"+"background:-webkit-linear-gradient("+s+");"+"background:-o-linear-gradient("+s+");"+"background-color:linear-gradient("+s+")";return s}
})
/**
	ajax!

*/$(window.Ajax=Ajax=function(){this.http=new XMLHttpRequest()}).o.extend({
request:function(url,send,onready){var t=this,send=send+'&norepeat='+new Date().getTime();t.http.open('POST',url,!!onready);t.http.setRequestHeader('content-type','application/x-www-form-urlencoded;charset=utf-8');if(onready)t.http.onreadystatechange=function(){if(t.http.readyState==4&&t.http.status==200)onready(t.http.responseText)};t.http.send(send);return t.http.responseText.r(/\\r/g)}
})
$.require=function(s){eval(new Ajax().request(/\W/.test(s)?$.url(s):$.url('svr>js>'+s+'.js')))}
/**
	otros

*/window.al=window.alert
$(window.alert=function(){alert.toAlert(arguments)}).o.push({lnlen:70
,toS:function(v,inner){return v===null?'[null]':v===ø?'[undefined]':v===''?"''":v.toAlert?v.toAlert(inner):tof(v)==='o'?$.o.toAlert(v,inner):v.toString()}
,toAlert:function(a){var s='';[].cat(a).each(function(y,r){s+=alert.toS(r)+"\n\n"});al(s)}
,o:function(o){al($.o.toAlert(o))}
})
$('script').each(function(y,r){$.path=r.getAttribute('src');if($.path&&$.path.indexOf('jslite')>-1)return $.path=$.path.r(/js\/jslite\.\w\w.*/)})
$($.url).o.push({svr:{root:$.path,extend:'js/extend/',php:'php/'},app:{root:''},href:(location.href+'').r(/^\w+:\/\//,'/').r(/\w+\.\w+$/).r(/[\w\.]+$/)})
/**
	table!

*/$.e.table={
tHead:function(e){return e.tHead||e.createTHead()}
,tBody:function(e){return (e.tBodies||[])[0]||e.appendChild($.create('tbody'))}
,head:function(o,e){if(tof(o)!=='o')o={a:o.toA()};var tr=$.create('tr'),td,tdAttr,thead=this.tHead(e);o.a.each(function(y,otd){tdAttr=$.o.steal('tdAttr',otd);td=$.create({tag:'th',push:otd});if(o.widths)$.e.style({width:o.widths.toA()[y]},td);if(tdAttr)$.e.attr(tdAttr,td);$(tr,{push:td})});$(thead,{push:tr})}
,body:function(a,e){var tr,td,tdAttr,tbody=this.tBody(e);a.each(function(y,otr){tr=$.create('tr');otr.each(function(x,otd){td=$.create({tag:'td',push:otd});if(e.o.tdAttr&&e.o.tdAttr[x])$.e.attr(e.o.tdAttr[x],td);tdAttr=$.o.steal('tdAttr',otd);if(tdAttr)$.e.attr(tdAttr,td);tr.appendChild(td)});$(tbody,{push:tr});if(y%2&&e.o.zebra!==false)tr.className+=' alt'})}
,remove:function(w,e){if(w)this.remove[w.type||w](w,e);else $.e.remove(w,e)}
}
$($.e.table.remove).o.push({
thead:function(o,e){$.e.remove(1,e.tHead)}
,tbody:function(o,e){$.e.remove(1,(e.tBodies||[])[0])}
,tr:function(n,e){var trs=(e.tBodies||[])[0].children;if(trs.length)$.e.remove(1,trs[n])}
})
/**
	select!

*/$.e.select={
add:function(a,e){a=tof(a)==='a'?a:[a,a];var op=$.create('option');op.value=a[0];op.text=a[1];e.add(op,$.isIE?ø:null);return op}
,options:function(a,e){if(!a)return [].cat(e.options).remove(0,e.o.head?1:0);if(e.o.head!==false)$.e.select.add(e.o.head||['','Seleccione...'],e).className+=' head';a.each(function(y){$.e.select.add(this,e).className+=y%2?' alt':''})}
}
/**/
return $
})()
alert(jslite)