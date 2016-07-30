window.ø=undefined
window.tof=function(v){return v===ø||v===null?v:v.isN&&isNaN(v)?'NaN':v.isN?'n':v.isS?'s':v.isB?'b':v.isA?'a':v.isR?'re':v.isD?'d':v.call?'f':v.tagName?'e':v.length?'arguments':v.constructor===Object?'o':v+''}
window.key=function(ao){if(ao===ø||ao===null)return;for(var x,y=1;y<arguments.length;y++){x=arguments[y];if(ao[x]!==ø)ao=ao[x];else return;}return ao}
window.ev=function(s,ifø){if(!s)return s;try{eval('var v='+s)}catch(err){return ifø===ø?s:ifø};return v}
window.$=function(se,so,e){$.current=se;var a=[];switch(tof(se)){case 'o':case 'f':return $;break;case 'e':a=[se];break;case 'a':a=se;break;case 's':a=$.form&&se.charAt(0)==='$'?[$.form.byId()]:$.e.selector(se,e);break;default:if(se===window||se===document||se===screen)a=[se];}return so?$.exe(so,a):a}
/*
	object!

*/$.o={
count:function(e){e=e||$.current;var n=0,x;for(x in e)n++;return n}
,push:function(o,e){e=e||$.current;for(var x in o)e[x]=o[x];return e}
,extend:function(o,e){e=e||$.current;for(var x in o)e.prototype[x]=o[x];return e}
,toAlert:function(o,inner){var s="";for(var x in o)s+=x+': '+alert.toS(o[x],'inner').maxLength(alert.lnlen,'...')+(inner?', ':"\n");return !s?'{}':"{"+(inner?'':"\n")+s.r(/, $|\n$/)+(inner?'':"\n")+"}"}
,clone:function(s,v){var no;if(s){no=/\(\-\)/.test(s);s=s.r(/\(\-\)|\(\+\)/)}switch(tof(v)){case 'a':var r=[];v.each(function(y,row){r[y]=$.clone(ø,row)});break;case 'o':var r={};for(var x in v)if(!s||(no&&!s.word(x))||(!no&&s.word(x)))r[x]=$.clone(ø,v[x]);break;default:r=v}return r}
}
/*
	string!

*/$(String).o.extend({isSN:1,isS:1
,r:function(w,r){return this.replace(w,r||'')}
,m:function(r,ifø){var m=this.match(r)||[];return ifø===ø||m.length>0?m:ifø}
,n:function(){return parseFloat(this)}
,toO:function(){var s=this;if(tof(s)==='o')return s;if(!s)return {};var a=s.r(/;$/).split(';'),o={};for(var r,y=0;r=(a[y]+'').split(':'),y<a.length;y++)o[r[0]]=r[1];return o}
,toL:function(){return this.toLowerCase()}
,toU:function(){return this.toUpperCase()}
,ord:function(n){return this.charCodeAt(n||0)}
,trim:function(c){c=c||'\\s';return this.r(("^"+c+"{1,}|"+c+"{1,}$").toR())}
,toR:function(gi){return /^\/.*\/\w{0,3}$/.test(this)?ev(this):new RegExp(this,gi)}
,strtr:function(o){if(!o)return this;var s=this+'';for(var x in o)s=s.r(x.toR('g'),o[x]);return s}
,encript:function(){var s=this,a=[];s.split('').each(function(y){a.push(s[y].ord()-27)});return a.join('.')}
,decript:function(){var s=this,a=[];s.split('.').each(function(){a.push(s[y].chr()+27)});return a.join('')}
,word:function(s,c){return s.to('word',c||'\\|').toR().test(this)}
,maxLength:function(n,s){return this.length<=n?this:this.substr(0,n)+(s||'')}
,toggle:function(v,c){var s=this,c=c||' ',w=(v+'').m(/\(\+\)|\(\-\)|\(\+\/\-\)|\=\>/)[0]||'',v=w==='=>'?v.split('=>'):v.r(w),re=w==='=>'?'':v.to('word',c).toR('g');switch(w){case '(+)':s=!re.test(s)?s+c+v:s;break;case '(-)':s=s.r(re,c);break;case '(+/-)':s=s.toggle((re.test(s)?'(-)':'(+)')+v,c);break;case '=>':s=s.toggle('(-)'+v[0],c);s=s.toggle('(+)'+v[1],c);break;default:s=v}return s.r(c+c,c).trim(c)}
,escape:function(){return (this+'').strtr({'&':":a;",'\\+':":m;",'à':"á",'è':"é",'ì':"í",'ò':"ó",'ù':"ú",'À':"Á",'È':"É",'Ì':"Í",'Ò':"Ó",'Ù':"Ú",'"':":c;",'%':":p;"})}
,to:function(w,c){var s=this;switch(w){
 case'capital':return s.toL().r(/^(\w)/g, function(s,c){return c.toU()}).r(/ (\w)/g,function(s,c){return ' '+c.toU()});break
 case'title':return s.trim().toCase('capital').strtr({' De ':" de ",' Lo ':" lo ",' Los ':" los ",' La ':" la ",' Las ':" las ",' El ':" el ",' Del ':" del "});break
 case'js':return s.r(/\-(\w)/g, function(s,c){return c.toU()});break
 case'css':return s.r(/([A-Z])/g,'-$1').toL();break
 case'word':return ('(^|'+(c||' ')+')'+s+'('+(c||' ')+'|$)');break
 case 'textContent':if(!$.tmp.tc)$.tmp.tc=$.create({tag:'div',id:'textContent',html:s});return $($.tmp.tc,'textContent');break
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
})
/*
	array!

*/$(Array).o.extend({isA:1,nativePush:Array.prototype.push
,push:function(v){this.nativePush(v);return this}
,dim:function(){return !this.length?0:tof(this[0])==='a'?2:1}
,cat:function(a){for(var y=0;y<a.length;y++)this.push(a[y]);return this}
,each:function(f){for(var y=0;y<this.length;y++){var r=f.call(this[y],y,this[y]);if(r!==ø)return r};return this}
,toO:function(){var o={},a=this;if(a.dim()===1)a=[a];a.each(function(y,r){r=r.toA();o[r[0]]=r[1]});return o}
,toAlert:function(inner){var s='';this.each(function(y,r){s+=alert.toS(r,'inner').maxLength(alert.lnlen,'...')+(inner?', ':"\n")});return !s?'[]':'['+(inner?'':"\n")+s.r(/, $|\n$/)+(inner?'':"\n")+']'}
})
/*
	function!

*/$(Function).o.extend({isF:1,a:[],insertId:-1
,inherit:function(parentClass){this.prototype=new parentClass();this.prototype.constructor=this;this.prototype.parentClass=parentClass;return this}
,each:function(args,e){var r;this.a.each(function(y,f){if(f)r=f.apply(e,args)});return r}
,add:function(f){return this.insertId=this.a.push(f).length-1}
,remove:function(n){this.a[n]=null}
,toAlert:function(){return this.toString().m(/\s*\w+\s*\([\w,]*\)/)[0]+'{...}'}
})
$(Boolean).o.extend({isB:1});$(RegExp).o.extend({isR:1});$(Date).o.extend({isD:1})
/**
	$!

*/$.o.push({tmp:{}
,byId:function(s){return !s?ø:!s.isS?s:document.getElementById(s.r('#'))}
,exe:function(o,a){o=o&&o.toO?o.toO():o;var x;(a.isA?a:[a]).each(function(y,e){x=$.e.attr(o,e)});return x}
,create:function(o){// con este metodo no existe create en $.e[e.tagName] y se usa el render en su lugar que devuelve el e principal creado no necesariamente el parent
	if(!o)return;
	if(o.tagName)return o;
	if(o.isS)return $.e.fix(ø,document.createElement(o));
	var $t=$.e[o.tag];
	var e=$.e.fix(ø,$t&&$t.render?$t.render(o):document.createElement(o.tag));
	if($t)for(var x in o)(key($t,x,'isF')?$.e.attr([x,o[x]].toO(),e,$t):$.e.attr([x,o[x]].toO(),e));
	else $.e.attr(o,e)
	return $.create.e=e
}
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
,url:function(s){if((tof(s)!=='s'||!s)||!s.has('>'))return s;s=s.split('>');var p=$.url[s[0]];return p.root+(p[s[1]]||s[1])+(s[2]?s[2]:'')}
,cookie:function(v,id){id=id||'json';var s=document.cookie.length?ev(unescape((document.cookie.m(("("+id+"=[^;]*)(;|$)").toR())[1]||'').r(id+'='))):{};if(!v)return s;var d=new Date();d.setTime(d.getTime()+(365*24*60*60*1000));$.o.push(v,s);document.cookie=id+"="+escape($.toS(s))+";expires="+d.toGMTString()+";"}
//
},$)
$.userAgent=($.isIE?'msie':(navigator.userAgent.m(/rekonq|opera|firefox|chrome|konqueror/i)[0]+'').toL())
$.appVersion=($.isIE||(navigator.userAgent.split($.userAgent.toR('i'))[1]||'').m(/\d{1,}/)[0]||0).n()
/*
	element!

*/$.e={prefijo:'',sufijo:''
,tag:function(none,e){return ((e||{}).tagName||'').toL()}
,id:function(s,e){var s=$.e.prefijo&&s?s.r(/^\*/,$.e.prefijo):s;s=$.e.sufijo&&s?s.r(/\*$/,$.e.sufijo):s;return e.id=s}
,fix:function(ø,e){if(e&&e.tagName&&!e.o){e.setAttribute('o','#');e.o={}}return e}
,clean:function(none,e){[].cat(e.childNodes).each(function(){if(!this.tagName)e.removeChild(this)})}
,is:function(s,e){if(!key(e,'tagName'))return;var a=e.parentNode.querySelectorAll(s);for(var y=0;y<a.length;y++)if(e===a[y])return true;return false}
,focus:function(delay,e){if(!e)return;if(e.focus)e.focus();if(!$.is(':focus',e))return true;setTimeout(function(){try{e.focus()}catch(err){}},delay||0)}
,selector:function(s,e){if(tof(s)==='e')return [s];e=$.byId(e);return [].cat((key(e,'tagName')?e:document).querySelectorAll(s))}
,computedStyle:function(attr,e){if(e.tagName)return (window.getComputedStyle?window.getComputedStyle(e,null).getPropertyValue(attr.to('css')):e.currentStyle[attr.to('js')])||''}
,setAttr:function(x,v,e){e.setAttribute(x,v!==0&&v&&v.isSN?v:'#');return e[x]=v}
,css:function(v,e){if(!v)return e.className;e.className=e.className.toggle(v)}
//
,filter:$(function(f,a){var b=[];if(!a)return b;f=this.filter.def(f);for(var y=0;y<a.length;y++)if(a[y].tagName&&(!f||f(a[y])))b.push(a[y]);return b}).o.push({
	def:function(f){return tof(f)==='s'?ev("function(e){return e.tagName.toL()==='"+f.toL()+"'}"):f}
	,ok:function(f,e){return e&&e.tagName&&(!f||f(e))}
})
,parent:function(f,e){f=this.filter.def(f);while(e=e.parentNode)if(this.filter.ok(f,e))return e}
,childs:function(f,e){if(!e)return [];return this.filter(f,e.childNodes)}
,siblings:function(f,e){f=this.filter.def(f);return this.filter(function(sb){return sb!==e&&(!f||f(sb))},e.parentNode.childNodes)}
,firstChild:function(f,e){if(!e)return;f=this.filter.def(f);e=e.firstChild;if(this.filter.ok(f,e))return e;while(e=e.nextSibling)if(this.filter.ok(f,e))return e}
,lastChild:function(f,e){if(!e)return;f=this.filter.def(f);var a=(e||{}).childNodes||[];for(var y=a.length-1;y>=0;y--)if(this.filter.ok(f,a[y]))return a[y]}
,next:function(f,e){f=this.filter.def(f);while(e=e.nextSibling)if(this.filter.ok(f,e))return e}
,previous:function(f,e){f=this.filter.def(f);while(e=e.previousSibling)if(this.filter.ok(f,e))return e}
//
,remove:function(tag,e){e.parentNode.removeChild(e)}
,insert:function(o,e){if(o.tagName||o.tag)o={first:o};for(var x in o){o[x]=$.create(o[x]);switch(x){
	case 'first':if(t=this.firstChild(ø,e))e.insertBefore(o.first,t);else e.appendChild(o.first);break;
	case 'before':e.parentNode.insertBefore(o.before,e);break;
	case 'after':e.parentNode[(t=this.next(ø,e))?'insertBefore':'appendChild'](o.after,t||ø);break;
	case 'last':e.appendChild(o.last)
}}}
,push:function(a,e){var e2;(a.isA?a:[a]).each(function(y,r){switch(tof(r)){case null:break;case 's':case 'n':e.innerHTML+=r+'';break;case 'e':e.appendChild(r);break;case 'o':e.appendChild(e2=$.create(r));break}});return e||e2}
,html:function(v,e){if(v===ø)return e.innerHTML;e.innerHTML='';if(v.isSN)e.innerHTML=v;else $.push(v,e)}
,attr:function(o,e,$f){var $f=$f||$.e,o=o&&o.toO?o.toO():o,v;$.e.fix(ø,e);
	for(var x in o){v=o[x];
		if(x==='tag')continue;
		x=$f[x]&&$f[x].isF?$f[x](v,e):
					e[x]&&e[x].isF?e[x](v):
						v&&v.isF?$.e.setEvent(x,v,e):
							v===ø?e[x]:
								$.e.setAttr(x,v,e)
	}
	return x
}
//
,valueContent:function(v,e){if(v===ø)return e.value;e.setAttribute('value',v);e.value=v}
,value:function(v,e){var tag=$.e.tag(ø,e);
	if(tag==='input')return (key($.e,(e.type||'').toL(),'value')||this.valueContent)(v,e);
	return key($.e[tag],'value','call')?$.e[tag].value(v,e):this.valueContent(v,e)
}
,textContent:function(s,e){if(s===ø)return e.textContent||e.innerText||e.innerHTML.to('textContent');e.textContent!==ø?e.textContent=s:e.innerHTML=s.to('textContent');}
,text:function(v,e){var tag=$.e.tag(ø,e);
	if(tag==='input')return (key($.e,(e.type||'').toL(),'text')||this.valueContent)(v,e);
	if(tag==='textarea')return e.value;
	return key($.e[tag],'text','call')?$.e[tag].text(v,e):this.textContent(v,e)
}
// event!
,event:function(v,e){
	if(!v||v.e)return v;var o={nativeEvent:v,e:e};
	for(var x in v)o[x]=v[x];
	return $.o.push({
		target:v.target||v.srcElement||document,currentTarget:v.currentTarget||e,which:v.which||v.button||0
		,keyChar:(v.which||'').n().chr(),mod:v.metaKey||v.ctrlKey||v.altKey
	},o)
}
,setEvent:function(x,f,e){e[x]=function(event){return this[x].each([$.e.event(event,this)],this)};return e[x].add(f)}
,onenter:function(f,e){return this.setEvent('onkeyup',function(event){if(event.which===jsKeyEnter)return f.call(this,event)},e)}
,onclickout:function(f,e){return this.setEvent('onclick',function(event){var t=event.target;do{if(t===e)return;}while(t=t.parentNode);f.call(e,event)},window)}
//
}//e
/**
	style!

*/$($.e.style=function(o,e){var th=$.e.style,o=o&&o.toO?o.toO():o;for(x in o){var v=o[x],x=th.attrName(x);x=th[x]&&th[x].call?th[x](v,e):key(e.style[x],'call')?e.style[x](v):v===ø?e.style[x]||$.e.computedStyle(x,e):e.style[x]=v}return x}).o.push({
attrName:function(x){return x==='float'?'cssFloat':x.to('js')}
,getRect:function(none,e){var x=e.offsetLeft,y=e.offsetTop,e2=e,win=this.rect(ø,window),sT=win.scrollTop,sL=win.scrollLeft;while(e=e.parentNode){x-=e.scrollLeft||0;y-=e.scrollTop||0};e=e2;var o={left:x,top:y,height:e.offsetHeight,width:e.offsetWidth};return $.o.push({right:o.left+o.width,bottom:o.top+o.height,scrollTop:e.scrollTop,scrollLeft:e.scrollLeft,clientHeight:e.clientHeight,clientWidth:e.clientWidth,top:sT+o.top,left:sL+o.left,right:sL+o.left+o.width,bottom:sT+o.top+o.height},o)}
,invisible:function(type,e){if(!$.e.fix(ø,e)||!e.style)return;switch(type){case 'backup':if(e.o.invisible=$.e.style.display(ø,e)==='none')e.style.display=(e.style.position==='absolute')?'block':'';break;case 'restore':if(e.o.invisible)e.style.display=e.o.display;break}}
,rect:function(none,e){switch(e){case window:return {left:0,top:0,height:e.innerHeight,width:e.innerWidth,scrollLeft:window.pageXOffset||document.documentElement.scrollLeft,scrollTop:window.pageYOffset||document.documentElement.scrollTop};break;case screen:return {left:e.screenX||e.screenLeft||0,top:e.screenY||e.screenTop||0,height:e.height,width:e.width};break};this.invisible('backup',e);var o=this.getRect(ø,e);this.invisible('restore',e);return o}
,display:function(s,e){var v=$.e.computedStyle('display',e);if(s===ø)return v;e.style.display=s==='(+/-)'?(v==='none'?'':'none'):s}
,opacity:function(v,e){this.invisible('backup',e);if(v===ø){v=($.e.computedStyle('opacity',e)+'').n();return v?(v>1?v/100:v):0};v=v.n();e.style.opacity=v>1?v/100:v;this.invisible('restore',e)}
//
,xywhrb:function(x,v,e){return v===ø?e.style[x]||$.e.computedStyle(x,e):!/^center|^fill/.test(v+'')?(e.style[x]=v*1===v?v+'px':v):ø}
	,lt:function(x,v,e,wh,lt){if(/^center/.test(v)){var win=this.rect(ø,window);e.style[x]=((win[wh]/2)-(this.rect(ø,e)[wh]/2)+win['scroll'+lt.to('capital')])+'px'}if(v==='center-onresize')return $(window,{onresize:function(){$.e.style[x]('center',e)}})}
	,wh:function(x,v,e,tl,br,disp){var f=$.e.computedStyle,calc=0,m,p,b,pN=e.parentNode,inv=$.e.style.invisible;$(e,'siblings').each(function(){inv('backup',this);this.style.display=disp;calc+=this['offset'+x.to('capital')]+(b=f('border-'+tl+'-width',this).n())*2+(m=f('margin-'+br,this).n())*2+(p=f('padding-'+br,this).n())*2;inv('restore',this)});inv('backup',pN);$.e.clean(ø,pN);e.style[x]=(pN['offset'+x.to('capital')]-f('padding-'+tl,pN).n()*2+(p?(p*2)+1:0)-(m?m*(x==='height'?0:2):0)+(b?(b*2):0)-calc-2)+'px';e.style.display=disp;inv('restore',pN);if(v==='fill-onresize')return $(window,{onresize:function(){$.e.style[x]('fill',e)}})}
,left:function(v,e){var x='left',r=this.xywhrb(x,v,e);return r!==ø?r:this.lt(x,v,e,'width','left')}
,top:function(v,e){var x='top',r=this.xywhrb(x,v,e);return r!==ø?r:this.lt(x,v,e,'height','top')}
,height:function(v,e){var x='height',r=this.xywhrb(x,v,e);return r!==ø?r:this.wh(x,v,e,'top','bottom','block')}
,width:function(v,e){var x='width',r=this.xywhrb(x,v,e);return r!==ø?r:this.wh(x,v,e,'left','right','inline-block')}
//
,center:function(s,e){
	var xy=this.rect(ø,e),win=this.rect(ø,window);
	e.style.left=((win.width/2)-(xy.width/2)+win.scrollLeft)+'px';
	e.style.top=((win.height/2)-(xy.height/2)+win.scrollTop)+'px';
	if(v==='onresize')return $(window,{onresize:function(){$.e.style[x](ø,e)}})
}
,repos:function(o,e){o=o.tagName?{target:o}:o;
	var er=this.rect(ø,e),bdyr=this.rect(ø,document.body),winr=this.rect(ø,window),bwr={width:bdyr.width>winr.width?bdyr.width:winr.width,height:bdyr.height>winr.height?bdyr.height:winr.height};
	if(o==='auto')return this({left:er.left<0?0:ø,top:er.top<0?t=0:ø,right:er.right>bwr.width?r=0:ø,bottom:er.bottom>bwr.height?b=0:ø},e);
	o.type=o.type||'bottom-left';var t1=o.type.m(/^\w{1,}/)[0],t2=o.type.m(/\w{1,}$/)[0],tr=this.rect(ø,o.target);
	var repos=function(c1,c2){var x,y,b,r;switch(c1){case'left':x=tr.left-er.width;break;case'top':y=tr.top-er.height;break;case'right':x=tr.right;break;case'bottom':y=tr.bottom;break}switch(c2){case'left':x=tr.left;break;case'top':y=tr.bottom-er.height;break;case'right':x=tr.right-er.width;break;case'bottom':y=tr.top;break;case'center':if(c1==='top'||c1==='bottom')x=tr.left+((tr.width-er.width)/2);if(c1==='left'||c1==='right')y=tr.top+((tr.height-er.height)/2);break}return {left:x,top:y}}
	var recalc=function(c){if(c.top<0)c=repos.call(this,t1=t1==='top'||t1==='center'?'bottom':t1,t2=t2==='top'||t2==='center'?'bottom':t2);if(c.left<0)c=repos.call(this,t1=t1==='left'?'right':t1,t2=t2==='left'?'right':t2);if(c.top+er.height>bwr.height)c=repos.call(this,t1=t1==='bottom'?'top':t1,t2=t2==='bottom'?'top':t2);if(c.left+er.width>bwr.width)c=repos.call(this,t1=t1==='right'?'left':t1,t2=t2==='right'?'left':t2);return c}
	xy=repos.call(this,t1,t2);xy=recalc.call(this,xy);xy=recalc.call(this,xy);this(xy,e);this.repos('auto',e)
}
// ,maximize:function(s,e){
	// var xy=this.rect(ø,e),win=this.rect(ø,window);
	// e.style.left=((win.width/2)-(xy.width/2)+win.scrollLeft)+'px';
	// e.style.top=((win.height/2)-(xy.height/2)+win.scrollTop)+'px';
	// if(s==='auto')e.o.autoCenter=$.e.onresize(function(){$(e,'style:center')},window);
// }
})
/**
	css!

*/$.css={org:{},o:{},color:{},temas:{}
,sheet:function(){if(document.createStyleSheet){var e=document.createStyleSheet();e.cssRules=e.cssRules||e.rules;return e}var e=document.createElement('style');(document.head||document.getElementsByTagName('head')[0]).appendChild(e);return e.sheet}()
,r:function(s){return s.r(/«[\w\.:-]+»/g,function(s){return ($.css.o[s.r(/[«»]/g)]||s).r(/»/g).r(/;$/)}).r(/«[#&][\w-]+»/g,function(s){return $.css.color[s.r(/[«»]/g)]||s}).r(/#[\w-]+[\+-][\d\.]+/g,function(s){var r=/[\+\-][\d\.]+/,c=s.m(r)[0],s=s.r(r);return $.color.add(s,c)}).r(/url\('[\w>-_\.\/]+'\)/,function(s){return "url('"+ev("$."+s)+"')"})}
,addRule:function(x,s){if(this.sheet.addRule)return this.sheet.addRule(x,s);this.sheet.insertRule(x+'{'+s+'}',this.sheet.cssRules.length)}
,find:function(w,a){w=w.toL();return (a||[]).cat(this.sheet.cssRules).each(function(){if(this.selectorText.toL()==w)return this})}
,update:function(org,insertOnly){var rule;org=this.toO(org);var o=$.clone(ø,org);for(var x in o){if(!this.org[x])this.org[x]=o[x];o[x]=this.r(o[x]);this.o[x]=o[x];if(!insertOnly&&(rule=this.find(x)))$.e.style(o[x],rule);else this.addRule(x,o[x])}}
,toO:function(s){if(tof(s)==='o')return s;var o={};s.r(/\n/g).split('}').each(function(){var tok=this.r(/\n/g).split('{');if(tok[0])o[tok[0].trim()]=tok[1].trim()});return o}
,reload:function(color){var len=this.sheet.cssRules.length;document.body.style.visibility='hidden';for(var y=len-1;y>-1;y--)this.sheet[this.sheet.deleteRule?'deleteRule':'removeRule'](y);this.o={};$(this.color,{push:this.temas[color]});this.update(this.org,1);document.body.style.visibility='visible'}
,defineColor:function(v,clone,n){var o=!clone?{}:$.clone(ø,$.css.temas[clone]),n=n||.5;for(var x in v){o[x]=v[x];if(/^#fc$|^#br$|^#bg$/.test(x)){o[x+'-a']=$.color.add(v[x],n);o[x+'-b']=$.color.add(v[x],-n)}};return o}
}
/**
	otros

*/window.al=window.alert
$(window.alert=function(){alert.toAlert(arguments)}).o.push({lnlen:70
,toS:function(v,inner){return v===null?'[null]':v===ø?'[undefined]':v===''?"''":v.toAlert?v.toAlert(inner):tof(v)==='o'?$.o.toAlert(v,inner):v.toString()}
,toAlert:function(a){var s='';[].cat(a).each(function(y,r){s+=alert.toS(r)+"\n\n"});al(s)}
,o:function(o){al($.o.toAlert(o))}
})
/**/
$.loaded=1