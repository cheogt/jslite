tepuy.js
Who has access
Not shared
System properties
Type
Javascript
Size
31 KB
Storage used
52 KB
Location
code
Owner
me
Modified
Aug 27, 2020 by me
Opened
12:01 PM by me
Created
Sep 6, 2017 with Google Drive Web
Add a description
Viewers can download

window.tepuy=(function($){
//'use strict';
$=function(e,o){e=$.selector(e);if(o){var v;e.forEach(function(r){if($.t(r,/[eWDS]/))v=$.e.attr(r,o)});return v}return e};

Object.defineProperty(Function.prototype,'extend',{enumerable:false,configurable:true,writable:true,value:function(o){for(var k in o){Object.defineProperty(this.prototype,k,{enumerable:false,configurable:true,writable:true,value:o[k]});if((typeof o[k])==='function')this.prototype[k].tepuy=1}}});
[[Boolean,'b'],[Element,'e'],[RegExp,'r'],[Date,'d'],[NodeList,'l'],[HTMLCollection,'l'],[Text,'t']].forEach(function(r){r[0].prototype.T=r[1]});
/*
	object!

*/Object.extend({T:'o'
,key:function(k,v){if($.t(k),'-')var a=this.keys(),k=a[k<0?a.length-k:k];if(v===undefined)return $.t(this[k],'-')?'':this[k];this[k]=v;return this}
,keys:function(){return Object.keys(this)}
,push:function(o,_v){if(arguments.length===2)this[o]=_v;else for(var k in o)this[k]=o[k];return this}
,clone:function(){return $.clone(this)}
// ,each:function(f){var v;for(var k in this)if((v=f(this[k],k))!==undefined)return v}
,to:function(w,_a1,_a2){var v=null,o=this;switch(w){
 case'a':v=[];for(var k in this)v.push([k,this[k]]);break;
 case's':v=$.s.parse(_a1,o,_a2);break;
 case'json':v=$.s.to('json',o,_a1);break;
 case'css':v=$.s.to('css',o,_a1);break;
 case'url':v=$.s.to('url',o,_a1);break;
}return v}
});
/*
	function!

*/Function.extend({T:'f'
,isNative:function(){return String(this).r(this.name)===String(Function).r('Function')}
,keys:function(){return Object.keys(this)}
,push:function(o){for(var k in o)this[k]=o[k];return this}
,pushEvent:function(f){if(!this.events)this.events=[];return this.insertId=this.events.push(f).length-1}
});
/*
	array!

*/Array.extend({T:'a',nativePush:Array.prototype.push
,key:function(n,v){n=n<0?this.length-n:n;if(v===undefined){v=this[n];return $.t(v)==='-'?'':v}this[n]=v;return this}
,dim:function(){return !this.length?0:$.t(this[0],'a')?2:1}
,push:function(v){this.nativePush(v);return this}
,cat:function(a){var th=this;if($.t(a,/[gal]/))for(var y=0;y<a.length;y++)this.push(a[y]);else this.push(a);return this}
,has:function(v,ret,n){var t=$.t(v),a=this,n=n||0;for(var y=0;y<a.length;y++)if(t==='r'&&$.t(a[y])==='s'&&v.test(a[y]))return ret==='value'?a[y]:ret==='key'?y+n:true;else if(v===a[y])return ret==='value'?a[y]:ret==='key'?y+n:true;return ret==='value'?null:ret==='key'?-1+n:false}
// ,each:function(o){var a=this,o=$.toO(o,'f');if(o.r)return o.r.each(o.push('a',a));for(var v,y=0;y<a.length;y++){v=o.f(a[y],y);switch(o.t){case'find':if(v===true)return a[y];break;case'indexOf':if(v===true)return y;break;default:if(v!==undefined)return v}}return $.or(o.ifn,o.t==='find'?null:o.t==='indexOf'?-1:false)}
,dbSort:function(sort){if(!sort||!this.length)return this;var len=this[0].length;sort=sort.s(',').map(function(r){return r.s(' ')}).to('o');var val=function(v){return v===undefined||v===null?null:!isNaN(v)?v*1:v.T==='s'?v.toLowerCase():v},toStr=function(a1,a2){return a1.map(function(a,y){var a=val(a),b=val(a2[y]);return !sort[y+1]?'1':sort[y+1]==='asc'?String(a===b?1:a>b?2:0):String(a===b?1:a>b?0:2)}).join('')};return this.sort(function(a,b){var a=toStr(a,b),b='1'.repeat(len);return a===b?0:a>b?1:-1})}
,to:function(w,_a1,_a2){var a=this;switch(w){
 case's':switch(a.dim()){case 1:a=a.join('|');break;case 2:a=a.map(function(r){return r.join('|')}).join('||');break;default:a=''};break;
 case'o':var o={};for(var y=0;y<a.length;y++)o[a[y][0]]=a[y][1];a=o;break;
 case'json':return $.s.to('json',a,_a1);break;
 default:if(a.to[w])a=a.to[w].call(a,_a1,_a2)
}return a}
});
/*
	string!

*/String.push({
to:function(s,w,c,_a2,_a3){switch(w){
 case'boundary':s=s.has('|')?'|':s.has(';')?';':s.has(',')?',':'';break;
 case'U':s=s.toUpperCase();break;case'L':s=s.toLowerCase();break;
 case'n':s=c==='int'?parseInt(s):parseFloat(s);break;
 case'r':var gi=c;var n=s.lastIndexOf('/');if(n>0){gi=gi!==undefined?gi:n>-1?s.substr(n+1)||'':'';s=s.substr(1,n-1)}s=new RegExp(s,gi);break;
 case'r-escape':s=s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');break;
 case'r-word':s=('(\\b)'+s+'(\\b)').to('r',c);break;
 case'r-token':s=('/^'+s+c+'|'+c+s+c+'|'+c+s+'$/').to('r',_a2);break;
 case'a':s=!c&&s.has('||')?s.s('||').map(function(r){return r.s('|')}):s.s(c||s.to('boundary')||' ');break;
 case'o':if(!s)return {};if(/^\w+$/.test(s))return {}.push(s,undefined);s=$.s.parse(c||s.t(),s,{});break;
 case'trim':var gi=_a2,c=c||'\\s';s=s.r(('^'+c+'+|'+c+'+$').to('r',gi||'g'));break;
 case'ord':s=s.charCodeAt(w||0);break;
 case'max':var n=c;c=_a2;s=s.length<=n?s:s.substr(0,n)+(c||'');break;
 case'hex':s=parseInt(s,16);break;
 case'pad':var n=_a2,left=n<0;n=n.to('abs')-s.length;s=n>0?(left?c.repeat(n)+s:s+c.repeat(n)):s;break;
 case'capital':s=s.to('L').replace(/^(\w)/g,function(s,c){return c.to('U')}).replace(/ (\w)/g,function(s,c){return ' '+c.to('U')});break;
 case'js':s=s.replace(/\-(\w)/g,function(s,c){return c.to('U')});break;
 case'css':s=s.replace(/([A-Z])/g,'-$1').to('L');break;
 case'tagless':s=s.replace(/<.*?>/g,'');break;
 case'acuteless':s=s.r([[/[àãâáä]/g,"a"],[/[èẽêéë]/g,"e"],[/[ìĩîìï]/g,"i"],[/[òõôóö]/g,"o"],[/[ùũûúü]/g,"u"],[/[ÀÃÂÁÄ]/g,"A"],[/[ÈẼÊÉË]/g,"E"],[/[ÌĨÎÌÏ]/g,"I"],[/[ÒÕÔÓÖ]/g,"O"],[/[ÙŨÛÚÜ]/g,"U"]]);break;
 case'searchable':s=s.replace(/\<ico.*?\/ico>/g,'').to('tagless').to('acuteless');break;
 case'unicode':switch(c){case'off':s=JSON.parse('"'+s+'"');break;default:var r,v,a=s.s('');for(var y in a){r=a[y];a[y]='\\u'+r.codePointAt(0).toString(16).to('pad','0',-4);for(var x=1;;x++){v=r.codePointAt(x);if(!v)break;a[y]+='\\u'+v.toString(16).to('pad','0',-4)}}s=a.join('');}break;
 case'encode':s=encodeURIComponent(s);break;case'decode':s=decodeURIComponent(s);break;
 case'encript':var a=s.s('').reverse(),s='';for(var y in a)s+=(a[y].to('ord')-27).to('hex')+(90).to('random',65).to('chr');s=s.replace(/[A-Z]$/,'');break;
 case'decript':var a=s.s(/[A-Z]/).reverse(),s='';for(var y in a)s+=(a[y].to('hex')+27).to('chr');break;
}return s}
,toggle:function(s,v,c,gi){var c=c||' ',gi=gi||'i',w=v.m(/\(\+\)|\(-\)|\(\+\/-\)|\=\>/).key(0),v=w==='=>'?v.s('=>'):!w?v:v.r(w).to('a'),re=!w?null:v.map(function(r){return '\\b'+r+'\\b'}).join('|').to('r');if(!v.length)return s;switch(w){case'(+)':s=re.test(s)?s.r(re,'v'):s+c+v[0];break;case'(-)':s=s.r(re);break;case'(+/-)':var m=s.m(re)[0],n=v.indexOf(m);s=n===-1?s+c+v[0]:s.r(re,v[n===(v.length-1)?0:n+1]);break;case'=>':s=s.toggle('(-)'+v[0],c);s=s.toggle('(+)'+v[1],c);break;default:return v};return s.r((c+c).to('r','g'),c).to('trim',' ')}
// ,r:function(s,w,c,_c2){if(_c2!==undefined)s=s.substr(0,w)+_c2+s.substr(c);else if($.t(w,'a'))for(var y in w)s=s.r(w[y][0],w[y][1],w[y][2]);else s=s.replace(w,c||'');return s}
// ,r:function(s,w,c){return s.replace(w,c||'');}
// ,has:function(c,ret,n){n=n||0;return c===null&&c===undefined?(ret==='key'?-1+n:false):c.exec?(ret==='key'?this.search(c)+n:c.test(this)):(ret==='key'?this.indexOf(c)+n:this.indexOf(c)>=0)}
// ,in:function(list,gi){return this.to('r-word',gi).test(list)}
// ,each:function(o){o=$.toO(o,'f');var r=this,a=o.a;if(!r)return;if(a&&r==='..')return a.each(o.f);r=r.s(',');for(var inf,v,y1,y2,x=0;x<r.length;x++){inf=r[x].has('..');r[x]=r[x].s('..');y1=(r[x][0]||0)*1;y2=(r[x].length===1&&inf?(a?a.length:9999):r[x].length===1&&!inf?r[x][0]:r[x][1])*1;for(var y=y1;y<=y2;y++){v=a?o.f($.k(a,y),y):o.f(y);switch(o.t){case'find':if(v===true)return a[y];break;case'indexOf':if(v===true)return y;break;default:if(v!==undefined)return v}}}return $.or(o.ifn,o.t==='find'?null:o.t==='indexOf'?-1:false)}
// ,key:function(n,v){n=n<0?this.length-n:n;if(v===undefined){v=this.charAt(n);return $.t(v)==='-'?'':v}return this.s('').k(n,v).join('')}
// ,nativeSplit:String.prototype.split,split:function(c){return !this?[]:this.nativeSplit(c)}
})

String.extend({T:'s'
,r:function(w,c){return this.replace(w,c||'')}
,ra:function(a){var s=this;for(var y in a)s=s.replace(a[y][0],a[y][1]||'');return s}
,m:function(r,ifn){var m=this.match(r)||[];return m.length>0?m:ifn!==undefined?ifn:m}
,s:function(c){return this?this.split(c):[]}
,has:function(c){return c&&c.T==='r'?c.test(this):this.indexOf(c)>-1}
,t:function(){return (/^[\w_-]+\:/).test(this)?'css':(/^[\w_]+\=|\?[\w_]+\=/).test(this)?'url':(/^\{.*\}$/).test(this)?'json':''}
,div:function(s_re){var s=this,t=$.t(s_re),c=t==='r'?s.m(s_re)[0]:s_re,n=s.has(c);return n===-1?[this]:[s.substr(0,n),s.substr(n+c.length),c]}
,repeat:function(n){for(var s='',y=0;y<n;y++)s+=this;return s}
,toggle:function(v,c,gi){return String.toggle(this,v,c,gi)}
,to:function(w,c,_a2,_a3){return String.to(this,w,c,_a2,_a3)}
});
/*
	number!

*/Number.push({T:'f'
,to:function(n,w,_a1,_a2){switch(w){
 case's':n=String(n);break;
 case'chr':n=String.fromCharCode(n);break;
 case'hex':n=n.toString(16).to('L');break;
 case'abs':n=Math.abs(n);break;
 case'round':n=n.round(w);break;
 case'limit':var min=_a1,max=_a2;n=n<min?min:n>max?max:n;break;
 case'random':var max=n;min=_a1||0;n=Math.floor(Math.random()*(max-min+1))+min;break;
 case'pad':return String(n).to('pad',_a1,_a2);break;
 default:if(n.to[w])n=n.to[w].call(n,_a1,_a2)
}return n}
});
Number.extend({T:'n'
,key:function(){return ''}
,each:function(f){for(var v,y=0;y<this;y++)if((v=f(y,this))!==undefined)return v}
,to:function(w,_a1,_a2){return Number.to(this,w,_a1,_a2)}
,round:function(d){var n=this,d=d||0;if(!(''+n).indexOf('e')>-1)return (+(Math.round(n+'e+'+d)+'e-'+d)).toFixed(d);var a=(''+n).s('e');var sig='';if(+a[1]+d>0)sig='+';return (+(Math.round(+a[0]+'e'+sig+(+a[1]+d))+'e-'+d)).toFixed(d);return n}
// ,in:function(range){var n=this;return range==='..'?true:range.s(',').each(function(r){r=r.s('..');if(r.length===2&&(!r[0]||n>=(r[0]*1))&&(!r[1]||n<=(r[1]*1)))return true;else if(n===(r[0]*1))return true})}
});
/**
	$!

*/$.push({_T:'$'
,unique:function(w){w=w||'current';$.unique[w]=($.unique[w]||0)+1;return new Date().getTime()+'.'+$.unique[w]}
,url:function(s){if(s.indexOf('>')<0)return s;s=s.s('>');var p=$.url[s[0]],s1=p[s[1]]||s[1];return p.root+(s1?'/'+s1:'')+(s[2]?'/'+s[2]:'')}
,g:function(a){var n=a.length;for(var y=a.length-1;y>=0;y--)if(a[y]===undefined)n--;else break;var g={length:n};for(var y in a)g[y]={t:$.t(a[y])};return g}
,inlist:function(v,a){if(a&&a.T==='a'){for(var y=1;y<=a.length;y++)if(v===a[y])return true;return false};for(var y=1;y<=arguments.length;y++)if(v===arguments[y])return true;return false}
,t:function(v,w){var t=v===null||v===undefined?'-':v===screen?'S':v===window?'W':v===document?'D':Object.prototype.toString.call(v)==='[object Arguments]'?'g':v.T?v.T:'u';return w?(w.T==='r'?w.test(t):t===w):t}
,k:function(v){if(!v)return;for(var k,y=1;y<arguments.length;y++){k=arguments[y];if(v[k]!==undefined)v=v[k];else return;}return v}.push({_T:'k'
	// ,has:function(v){if(!v)return;for(var k,y=1;y<arguments.length;y++){k=arguments[y];if(!$.k.hasSimple(v,k))return false;v=v[k]};return true}
	// ,hasSimple:function(v,k){if(!v)return false;for(var kk in v)if(kk===k)return true;return false}
})
,a:function(a){return a&&a.T==='a'?a:(a?[a]:[])}
,o:function(o){return o&&o.T==='o'?o:{}}
// ,toO:function(v,w){return $.t(v,'o')?v:$.t(w,'s')?{}.push(w,v):(w===undefined?{}:w))}
,s:function(v,notation,encode){notation=(notation||'json').to('L');return $.s.to(notation,v,encode)}.push({_T:'s'
	,'json':{ab:'[',ae:']',ac:',',ob:'{',oe:'}',oc:',',oab:'"',oae:'":',sb:'"',se:'"'}
	,'json-ui':{ab:'[',ae:']',ac:',',ob:'{',oe:'}\n',oc:'\n ,',oab:'"',oae:'":',sb:'"',se:'"'}
	,'css':{ab:'[',ae:']',ac:',',ob:'',oe:'',oc:';',oab:'',oae:':',sb:'',se:''}
	,'url':{ab:'[',ae:']',ac:',',ob:'',oe:'',oc:'&',oab:'',oae:'=',sb:'',se:''}
	,parse:function(notation,s,ifn){var o={};switch(notation){case'css':return s.r(/;\s+/,';').r(/;$/).s(';').map(function(r){return r.r(/\.\,/g,';').div(':')}).to('o');break;case'url':s=s.div('?');s=s[2]?s[1]:s[0];var a=s.r(/^&|&$/).s('&');for(var r,y=0;r=(a[y]+'').div('='),y<a.length;y++)o[r[0]]=r[1];break;case'json':try{o=JSON.parse(s)}catch(err){o=ifn};break;}return o}
	,to:function(notation,v,encode){var o=$.s[notation];switch($.t(v)){case'-':return 'null';break;case's':return o.sb+v.to(encode)+o.se;break;case'a':var s=o.ab;for(var y in v)s+=$.s.to(notation,v[y],encode)+o.ac;return s.r(eval('(/'+o.ac+'$/)'))+o.ae;break;case'o':var s=o.ob;for(var k in v)s+=o.oab+k+o.oae+$.s.to(notation,v[k],encode)+o.oc;
		s=s.r(eval('(/'+o.oc.replace(/\n/g,'\\\\n')+'$/)'));
		return s+o.oe;break;}return String(v)
	}
	//s=s.r(eval('(/'+o.oc+'$/)'));return s+o.oe;break;}return String(v)}
})
,eval:function(s,ifn){try{return eval('('+s+')')}catch(err){$.eval.lastError=err;return ifn}}
// ,or:function(v,ifn){return v!==undefined?v:ifn}
,clone:function(v){var c;switch($.t(v)){case 'a':c=[];for(var k=0;k<v.length;k++)c[k]=$.clone(v[k]);break;case 'o':c={};for(var k in v)c[k]=$.clone(v[k]);break;default:c=v}return c}
,update:function(e,o){if($.t(o,'o'))for(var k in o){if($.t(o[k],'o'))e[k]=$.update((e[k]=e[k]||{}),o[k]);else e[k]=o[k];}else e=o;return e}
,cookie:function(id,v){var g=$.g(arguments),s;if(g.length===1&&g[0].t==='o'){var v=id,id='tepuy',s=$.cookie.get(id);s=$.s.parse('json',s,{});s=$.s.parse('json',s.push(v),'encode');}else if(!g.length)id='tepuy';if(!v)return $.cookie.get(id);$.cookie.set(id,v)}.push({_T:'cookie'
 ,get:function(id){return (document.cookie.m(("("+id+"=[^;]*)(;|$)").to('r'))[1]||'').r(id+'=').to('decode').to('unicode','off')}
 ,set:function(id,s){var d=new Date();d.setTime(d.getTime()+(100*24*60*60000));document.cookie=id+"="+s.to('unicode','on')+";expires="+(d.toGMTString())+";sameSite:Strict;Secure"}
})
/**
	elements!

*/,create:function(o){if(!o)return;if(o.T==='e')return $.e(o);if(o.T==='s')return $.e(document.createElement(o));var $t=$.e[o.tag];var e=$.e($t&&$t.create?$t.create(o):document.createElement(o.tag));$.e.attr(e,o);if(o.oncreate)o.oncreate.call(e,o);if(o.onrender)setTimeout(function(){o.onrender.call(e,o)},150);return e}
,selector:function(e){var p=document.body;switch($.t(e)){case'S':case'D':case'W':case'e':return [$.e(e)];break;case'a':if(e.length==2&&$.t(e[1])==='s'){p=e[0];e=e[1];if($.t(p,'s'))p=document.querySelector(p)};break}e=p.querySelectorAll(e)||[];for(var a=[],y=0;y<e.length;y++)a[y]=$.e(e[y]);return a}
})//$
/**
	element! e!

*/$.e=function(e){if(!e||!e.T==='e')return;if(!e.o){e.setAttribute('o','#');e.o={}}return e}.push({
tagName:function(e){return ((e||{}).tagName||'').to('L')}
,o:function(e,o){if(!o)return e.o;if(e.o===undefined){e.setAttribute('o','#');e.o={}};return e.o.push(o)}
/*,is:function(e,s){
	if(!e||!e.parentNode)return false;
	if(/^parent-n\b/.test(s)){
		s=s.s(/[\s:]/);
		return !!$.e.parent(e,function(r){return $.e.style.computed(r,s[1])===s[2]})
	};
	var a=e.parentNode.querySelectorAll(s);
	for(var y=0;y<a.length;y++)if(e===a[y])return true;
	return false
}*/
,is:function(e,s){
	if(!e||!e.parentNode)return false;
	if(s.has(/^parent\b/)){
		//parent position:fixed
		s=s.s(/[\s:]/);
		return !!$.e.parent(e,function(r){return $.e.style.computed(r,s[1])===s[2]})
	}
	var a=e.parentNode.querySelectorAll(s);
	for(var y=0;y<a.length;y++)if(e===a[y])return true;return false
}
,class:function(e,s){if(s===undefined)return e.className;e.className=e.className.toggle(s,' ')}
,tnds:function(e){return [].cat(e.childNodes).filter(function(r){return r.nodeType===Node.TEXT_NODE})}
,text:function(e,s){if(s===undefined)return this.tnds(e).map(function(r){return r.nodeValue}).join('');return e.appendChild(document.createTextNode(s))}
,html:function(e,s){if(s===undefined)return e.innerHTML;if(s&&s.call)e.innerHTML=s.call(e,e.innerHTML);else e.innerHTML+=s}
,ach:function(e,a){var ch;$.a(a).forEach(function(r){e.appendChild(ch=$.t(r,/[ns]/)?document.createTextNode(r):$.create(r));if(ch.onappend)ch.onappend.call(ch)});return ch}
,alines:function(e,ay){
	if(ay.dim()===1)ay=[ay];
	if(e.tagName.to('L')=='table'){
		var eB=e.appendChild(document.createElement('tbody')); //document.createElement('tbody');e.appendChild(eB)
		for(var y=0;y<ay.length;y++){var ax=ay[y];
			var eTr=eB.appendChild(document.createElement('tr'));
			for(var x=0;x<ax.length;x++){var r=ax[x];
				switch(r.T){
				 case's':r=$.create({tag:'td',html:r});break;
				 case'o':
					if(!r.tag)r.tag='td';
					if(r.tag.to('L')!=='td'){
						// var o=r.clone();
						r={tag:'td',ach:r};
					}
					r=$.create(r)
				}
				
				eTr.appendChild(r);
			}
		}
	}
}
,rch:function(e,range){[].cat(e.children).each({r:String(range||''),f:function(r){$.e.remove(r)}})}
,rnd:function(e,range){[].cat(e.childNodes).each({r:String(range||''),f:function(r){$.e.remove(r)}})}
,siblings:function(e){return [].cat(e.parentNode.children).filter(function(r){return r!==e})}
,insert:function(e,org){var o=org.clone(),w=o.where;if(!w)return e.insertBefore($.create(o),e.firstChild);delete(o.where);switch(w){case'before':return e.parentNode.insertBefore($.create(o),e);break;case'after':var sib=e.nextElementSibling;return sib?e.parentNode.insertBefore($.create(o),sib):e.parentNode.appendChild($.create(o));break;}}
,replace:function(e,o){return e.parentNode.replaceChild($.create(o),e)}
,setAttr:function(e,k,v){if(k!=='o'&&isNaN(k))e.setAttribute(k,v);e[k]=v}
,attr:function(e,o){var ret,tag=(e.tagName||'').to('L'),$t=$.e[tag]||{},o=o.to('o')||o,v;$.e(e);
	for(var k in o){v=o[k];if(k==='tag')continue;
		k=$t[k]&&$t[k].call?$t[k](e,v):// metodos propios de la clase
			$.e[k]&&$.e[k].call?$.e[k](e,v)://metodos globales de la libreria
			v&&v.call?$.event(e,k,v)//attach event
			:v===undefined?(e[k]&&e[k].call?e[k]():e[k])//return value
			:$.e.setAttr(e,k,o[k])//attr
	};return k
}
,remove:function(e){return e&&e.parentNode?!!e.parentNode.removeChild(e):false}
,parent:function(e,fns){switch($.t(fns)){case'n':for(var y=0;y<fns;y++)e=e.parentNode;return e;break;case'f':while(e=e.parentNode)if(fns(e))return e;break;case's':while(e=e.parentNode)if($.e.tagName(e)===fns)return e;break;}}
,selection:function(e,s){if(s===undefined)return e.selectionStart+'..'+e.selectionEnd;s=s.s('..');var len=e.value.length,sta=(s[0]||0)*1,end=(s[1]||s[0]||len)*1;e.selectionStart=sta<0?len-sta-1:sta;e.selectionEnd=end<0?len-end-1:end;return $.e.focus(e)}
,focus:function(e,delay){try{e.focus()}catch(err){};return $.e.is(e,':focus')||!setTimeout(function(){try{e.focus()}catch(err){}},delay||100)}
,onenter:function(e,f){return $.event(e,'onkeyup',function(event){if(event.w==='enter')return f.call(this,event)})}
,onclickout:function(e,f){return $.event(window,'onclick',function(event){var t=event.target;do{if(t===e)return;}while(t=t.parentNode);if(f&&f.call)f.call(e,event)})}
})//e
/**
	event!

*/$.event=function(e,k,f){return $.event.setCaller(e,k).pushEvent(f)}.push({_T:'event'
	,parse:function(e,k,args){if(!e||!e.tagName)return [].cat(args);var v=args?args[0]:{};if(!v||v.e)return v;var o=({e:e,name:k,specialKey:v.metaKey||v.ctrlKey||v.altKey}).push(v);if($.inlist(k,'onkeyup','onkeydown','onkeypress')){var klen1=v.key.length===1,sk=(o.metaKey?'meta+':'')+(o.ctrlKey?'ctrl+':'')+(o.altKey?'alt+':'')+(o.shiftKey?'shift+':'');o.char=klen1&&!o.specialKey?v.key:'';o.w=(sk&&sk!==v.key.to('L')+'+'&&v.key!=='Control'?sk+v.key:sk?sk.r(/\+$/):v.key).to('L');if(e.value!==undefined){var s=e.value,ss=e.selectionStart,se=e.selectionEnd;if(o.char)s=e.value.r(ss,se,o.char);else switch(o.w){case 'backspace':s=e.value.r(ss-(ss===se?1:0),se,'');break;case 'delete':s=e.value.r(ss,se+(ss===se?1:0),'');break;}o.futureValue=s}};return [o]}
	,setCaller:function(e,k){var f=e[k]&&!e[k].events?e[k]:null;if(!e[k]||f)e[k]=function(event){return $.event.exec(e,k,$.event.parse(e,k,arguments))};if(f)e[k].addEvent(f);return e[k]}
	,exec:function(e,k,args){return !e[k].events.forEach(function(f){if(f&&f.apply(e,args)===false)return true})}
});
/**
	css! 

*/$.css=function(o){return $.css.insert(o)}.push({_T:'css',o:{},org:{},theme:null,themes:{},sheet:document.head.appendChild(document.createElement('style')).sheet
,fromText:function(s){return this.sheet.insertRule(s,this.sheet.cssRules.length)}
,r:function(s,o){s=s.r(/«[#&]{1,1}[\w\-]+»/g,function(s){return (o||$.css.theme||{})[s.r(/^«|»$/g)]||s})
	.r(/«\.{0,1}[\w\-:]+»/g,function(s){return (o||$.css.o||{})[s.r(/^«|»$/g)]||s})
	.r(/(#\w{3,6})([-+]\d+\.{0,1}\d*)|(rgba{0,1}\([\d\,]+\))([-+]\d+\.{0,1}\d*)/g,function(m,$1,$2){return $.e.style.color.add($1,$2)})
	.r(/url\('[-\w>_./]+'\)/g,function(s){return "url("+eval('(tepuy.'+s+')')+")"});
return s}
,insert:function(o){if($.t(o,'s'))return this.fromText(this.r(o));var s,f=function(target,source){return !target?source:$.s.to('css',(target||'').to('o','css').push(source.to('o','css'))).r(/\:null|\:undefined/g)};for(var k in o){this.org[k]=f(this.org[k],o[k]);s=this.r(o[k]);this.o[k]=f(this.o[k],s);k=this.fromText(k+'{'+s+'}')};return k}
,defineTheme:function(name,o){var from=name.s('.')[0];this.themes[name]=from!==name?this.themes[from].clone():{};for(var k in o)this.themes[name][k]=this.r(o[k],o);return this}
,loadTheme:function(name){if(this.themeName===name)return;this.theme=this.themes[this.themeName=name].clone();this.o=this.org.clone();var len=this.sheet.cssRules.length;for(var y=len-1;y>-1;y--)this.sheet.deleteRule(y);this.insert(this.o)}
});//css
/**
	style!

*/$.e.style=function(e,o){var th=this.style,o=o.T==='o'?o:th.r(o).to('o');for(var k in o){var v=o[k],k=k==='float'?'cssFloat':k.to('js');k=(th[k]&&th[k].call)?th[k](e,v):v===undefined?th.getValue(e,k):th.setValue(e,k,v)}return k}.push({_T:'style',r:$.css.r
,computed:function(e,k){return window.getComputedStyle(e).getPropertyValue(k.to('css'))}
,toggle:function(e,k,v){return /^\([+/-]+\)/.test(v)?this.getValue(e,k).toggle(v):v}
,getValue:function(e,k){return e.style[k]||this.computed(e,k)}
,setValue:function(e,k,v){if(/color$/i.test(k))return this.color(e,v,k);e.style[k]=this.toggle(e,k,v);v;return e}
,color:function(e,s,_k){_k=_k||'color';if(s===undefined)return this.getValue(e,_k);s=s.r(/^[\+-]\d+$|^[\+-]\[[-\d\,]+\]$/,function(s){return $.e.style.color.add($.e.style.computed(e,_k),$.eval(s.r(/^[\+-]/)))});return e.style[_k]=s;}.push({_T:'color'
	,isHex:function(s){return s.T==='s'&&!s.indexOf('#')},isRgb:function(s){return s.T==='s'&&!s.indexOf('rgb')}
	,add:function(s,a){if(a.T!=='a')a=[a,a,a];(s=this.to('a',s)).forEach(function(r,y){s[y]=((r*1)+(a[y]*16)).to('round').to('limit',0,255);});return this.to('hex',s)}
	,to:function(w,v){switch(w){
		case'a':if(v.T==='a')return v;v=this.isHex(v)?(v.length===4?[v[1]+v[1],v[2]+v[2],v[3]+v[3]]:[v[1]+v[2],v[3]+v[4],v[5]+v[6]]).map(function(n){return n.to('hex').to('limit',0,255)}):v.m(/\d+/g).map(function(r){return isNaN(r)?r:r*1});break;
		case'hex':if(this.isHex(v))return v;v=this.to('a',v);return '#'+((1<<24)+((v[0]*1)<<16)+((v[1]*1)<<8)+(v[2]*1)).toString(16).slice(1).toUpperCase();break;
		case'rgb':if(this.isRgb(v))return v;v=this.to('a',v);v='rgb'+(v.length===4?'a':'')+'('+v.map(function(n){return n.to('limit',0,255)}).join(',')+')';break;
	}return v}
})
,invisible:function(e,w){switch(w){case'set':if(e.o.invisible=$.e.style.computed(e,'display')==='none')e.style.display=e.style.position==='absolute'?'block':'';break;case'restore':if(e.o.invisible)e.style.display='none';break}}
,rect:function(e){var o={}.push(e.getBoundingClientRect()||{});delete(o.toJSON);o.e=e;if(e===document.body)o.push({scrollTop:window.pageYOffset||0,scrollLeft:window.pageXOffset||0});return o}
});//style

($.e.style.moveTo=function(e,eT){var o={target:eT};$.e.o(eT);o.type=o.type||'bottom-left';o.push({tRec:this.rect(eT),eRec:this.rect(e,'native'),wRec:this.rect(document.body),t1:o.type.s('-')[0],t2:o.type.s('-')[1]});$.e.style.moveTo.move(1,o,e).move(2,o,e)}).push({
op:function(s){return s==='top'?'bottom':s==='bottom'?'top':s==='left'?'right':s==='right'?'left':''}
,main:function(s){return s==='top'||s==='bottom'?'top':'left'}
,wh:function(s){return /left|right/.test(s)?'width':'height'}
,move:function(w,o,e){var t=o['t'+w],p1=this['pos'+w](t,o,e),p2=this['pos'+w](this.op(t),o,e),wh=this.wh(t);e.style[this.main(t)]=((p1>0&&(p1+o.eRec[wh])<o.wRec[wh])?p1:p2>0?p2:0)+'px';return this}
,pos1:function(w1,o,e){var w2=this.wh(w1);switch(w1){case 'left':case 'top':return o.tRec[w1]-o.eRec[w2];break;default:return o.tRec[w1]}}
,pos2:function(w1,o,e){var w2=this.wh(w1);switch(w1){case 'left':case 'top':return o.tRec[w1];break;default:return o.tRec[w1]-o.eRec[w2]}}
});
/**
	ajax!
	-----------------------------------
	// $.Ajax().request({url:'http://localhost/test/mssql.php',send:{responseType:"json"},onload:function(s){
		// al.i(s)
	// }})
	al.i($.Ajax().request({url:'http://localhost/test/mssql.php',send:{o:{responseType:"json"}}}).ajax.responseJSON)

*/($.Ajax=function(){this.ajax=new XMLHttpRequest()}).extend({T:'j',sendSwLength:1500,txtDivisor:'((tepuy))'
,reset:function(){this.text='';this.hidden='';this.json=null;this.send=this.parseSend();this.method=this.parseMethod();this.contentType=this.parseContentType();this.url=this.parseUrl()}
,parseMethod:function(){return this.g.method||(this.send.length>this.sendSwLength?'POST':'GET')}
,parseSend:function(){var send=this.g.send,s='';switch($.t(send)){case's':s=send+'&';break;case'o':case'f':for(var k in send)s+=k+'='+$.s.to('json',send[k],'encode')+'&';break;default:s='';}return this.send=s}
,parseUrl:function(){var s=this.g.url;s+=(s.has('?')?'&':'?');return s+(this.method==='GET'?this.send:'')+'unique='+(new Date()).getTime()}
,parseCharSet:function(){return this.g.charSet||'utf-8'}
,parseContentType:function(){return this.g.contentType||this.g.xml?'text/xml':this.g.file?'multipart/form-data':this.send&&this.send.keys().length<3?'text/plain':'application/x-www-form-urlencoded'}
,getResponseContentType:function(){return (this.ajax.getResponseHeader('content-type')||'').to('L')}
,to:function(w,s){var s=s||this.ajax.responseText,n=s.indexOf(this.txtDivisor);this.hidden=s.substr(0,n);n=n===-1?0:n+this.txtDivisor.length;this.text=s.substr(n);switch(w){case'json':return this.json=$.s.parse('json',this.text,{});break;case'eval':return this.json=$.eval(this.text,{err:{n:1,s:'Ajax processing data'}});break;case'text':default:return this.text=this.text.replace(/"/g,'\\"').to('unicode','off');break;}return this}
// ,to:function(w,s){var s=s||this.ajax.responseText,n=s.indexOf(this.txtDivisor);this.hidden=s.substr(0,n);n=n===-1?0:n+this.txtDivisor.length;this.text=s.substr(n);switch(w){case'json':return this.json=$.s.parse('json',this.text,{});break;case'eval':return this.json=$.eval(this.text,{err:{n:1,s:'Ajax processing data'}});break;case'text':default:return this.text/*=this.text.replace(/"/g,'\\"').to('unicode','off')*/;break;}return this}
,request:function(o){var th=this;th.g=o.clone();th.reset();//url,method,send,onload,async
	if(th.g.onload)th.ajax.onreadystatechange=function(){if(this.readyState==4){this.responseContentType=th.getResponseContentType();if(this.status===200){var s=this.responseText;if(this.responseContentType.has('json'))s=th.to('json');th.g.onload.call(th,s,this);}else th.g.onfail?th.g.onfail.call(th,this.status):console.log('$.Ajax() : failed!\n'+this.status+'\n'+this.statusText)};th.ajax.timeout=4000;th.ajax.ontimeout=function(){th.ajax.abort();th.g.onfail?th.g.onfail.call(th,this):console.log('$.Ajax() : timeout!')}}
	th.ajax.open(th.method,th.url,!!th.g.onload);
	th.ajax.setRequestHeader('Content-type',this.contentType+';'+this.charSet);
	th.method==='GET'?th.ajax.send():th.ajax.send(th.send);
	if(!th.g.onload){th.ajax.responseContentType=th.getResponseContentType();if(th.ajax.responseContentType.has('json'))th.json=th.to('json')}
	return this
}
});
// (window.Ajax=function(){this.ajax=new XMLHttpRequest()}).extend({T:'j',sendSwLength:1500,txtDivisor:'((tepuy))'
// ,reset:function(){this.text='';this.hidden='';this.json=null;this.send=this.parseSend();this.method=this.parseMethod();this.contentType=this.parseContentType();this.url=this.parseUrl()}
// ,parseMethod:function(){return this.g.method||this.send.length>this.sendSwLength?'POST':'GET'}
// ,parseSend:function(){var send=this.g.send,s='';switch($.t(send)){case's':s=send+'&';break;case'o':case'f':for(var k in send)s+=k+'='+$.s.to('json',send[k],'encode')+'&';break;default:s='';}return this.send=s}
// ,parseUrl:function(){var s=this.g.url;s+=(s.has('?')?'&':'?');return s+(this.method==='GET'?this.send:'')+'unique='+(new Date()).getTime()}
// ,parseCharSet:function(){return this.g.charSet||'utf-8'}
// ,parseContentType:function(){return this.g.contentType||this.g.xml?'text/xml':this.g.file?'multipart/form-data':this.send&&this.send.keys().length<3?'text/plain':'application/x-www-form-urlencoded'}
// ,to:function(w){var s=this.ajax.responseText,n=s.indexOf(this.txtDivisor);this.hidden=s.substr(0,n);n=n===-1?0:n+this.txtDivisor.length;this.text=s.substr(n);switch(w){case'json':return this.json=$.s.parse('json',this.text,{});break;case'eval':return this.json=$.eval(this.text,{err:{n:1,s:'Ajax processing data'}});break;case'text':return this.text=this.text.to('unicode','off');break;}return this}
// ,request:function(o){var th=this;th.g=o.clone();th.reset();//url,method,send,onload,async
	// if(th.g.onload){th.ajax.onreadystatechange=function(){if(this.readyState==4){if(this.status===200)th.g.onload(s);else th.g.onfail?th.g.onfail(this.status):alert('Ajax() : failed!\n'+this.status+'\n'+this.statusText)}};th.ajax.timeout=4000;th.ajax.ontimeout=function(){th.ajax.abort();th.g.onfail?th.g.onfail():alert('Ajax() : timeout!')}}
	// th.ajax.open(th.method,th.url,!!th.g.onload);
	// th.ajax.setRequestHeader('Content-type',this.contentType+';'+this.charSet);
	// console.log({method:this.method,async:!!this.g.onload,url:this.url,send:(this.send||'').to('unicode','off').to('max',100,'...')});
	// th.method==='GET'?this.ajax.send():this.ajax.send(this.send);
	// return this
// }
// });
//
($.ajax=function(o){
	if(!$.t(o,'o'))o={url:o}
	if(!$.ajax.o)$.ajax.o=new $.Ajax();
	if(o.which)o=$.update($.ajax.store[o.which].clone(),o)
	var r=$.ajax.o.request(o);
	return o.onload?r:(r.json||r.to('text'))
}).push({store:{}});
/**
	data!

*/
($.Data=function(o){
	this.load(o)
}).extend({org:null,head:null,body:null
	,page:{size:0,current:0,count:0}
	,records:0
	,exec:function(o){
		var o=$.ajax(o);
		if(!this.head&&o.head){
			this.head=o.head;
			if(this.head_onchange)this.head_onchange(o.head);
		}
		this.body=o.body;
		if(this.body_onchange)this.body_onchange(o.body);
		return this
	}
	,load:function(org){
		this.org=org.clone();
		var o=org.clone();
		this.head=null;
		
		this.page.size=org.pageSize;
		this.page.current=org.page;
		return this.exec(o)
	}
	,reload:function(newo){
		var o=$.update(this.org.clone(),newo.clone());
		return this.exec(o)
	}
});
/**/
$.browser={
	innerWidth:function(){return (window.innerWidth||top.document.documentElement.clientWidth)}
	,innerHeight:function(){return (window.innerHeight||top.document.documentElement.clientHeight)}
	,outerWidth:function(){return window.outerWidth||top.document.documentElement.offsetWidth}
	,outerHeight:function(){return window.outerHeight||top.document.documentElement.offsetHeight}
	// ,outerWidth:function(){return $.isIE?screen.availWidth:top.window.outerWidth}
	// ,outerHeight:function(){return $.isIE?screen.availHeight:top.window.outerHeight}
	// resize:function(o){o={x:o.x||o.left,y:o.y||o.left,w:o.w||o.width,h:o.h||o.height};if(o.x||o.y)window.moveTo(o.x,o.y);if(o.w||o.h)top.window.resizeTo(o.w,o.h)},
	// center:function(){if(!screen.width)return;var x=(this.outerWidth()-this.width())/2,y=(this.outerHeight()-this.height())/2;this.resize({x:x,y:y})},
	// maximize:function(){var n1=$.isLinux?10:2,n2=$.isIE?1:90;this.resize({x:n1/2,y:n1/2,w:screen.availWidth-n2,h:screen.availHeight-n2})},
	// addBookmark:function(name,url){if(window.sidebar)window.sidebar.addPanel(name,url,'');else if(window.external&&window.external.AddFavorite)window.external.AddFavorite(url,name)}
}

return $})();
