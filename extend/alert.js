window.al=window.alert
window.lg=function(){var s='';for(var y in arguments)s+='arguments['+y+'],';eval("console.log("+s.r(/,$/)+")")}


$($.o).o.push({none:0
,toAlert:function(o,inner){var s="";for(var x in o)s+=x+': '+alert.toS(o[x],'inner').maxLength(alert.lnlen,'...')+(inner?', ':"\n");return !s?'{}':"{"+(inner?'':"\n")+s.r(/, $|\n$/)+(inner?'':"\n")+"}"}
}

$(Array).o.extend({none:0
,toAlert:function(inner){var s='';this.each(function(y,r){s+=alert.toS(r,'inner').maxLength(alert.lnlen,'...')+(inner?', ':"\n")});return !s?'[]':'['+(inner?'':"\n")+s.r(/, $|\n$/)+(inner?'':"\n")+']'}
})

$(Function).o.extend({none:0
,toAlert:function(){return this.toString().m(/\s*\w+\s*\([\w,]*\)/)[0]+'{...}'}
})

$(window.alert=function(){alert.toAlert(arguments)}).o.push({lnlen:70
,toS:function(v,inner){return v===null?'[null]':v===ø?'[undefined]':v===''?"''":v.toAlert?v.toAlert(inner):tof(v)==='o'?$.o.toAlert(v,inner):v.toString()}
,toAlert:function(a){var s='';[].cat(a).each(function(y,r){s+=alert.toS(r)+"\n\n"});al(s)}
,o:function(o){al($.o.toAlert(o))}
})


/*

	deprecated!

*/

$($.o).o.push({none:0
,toA:function(o){var a=[];for(var x in o)a.push(o[x]);return a}
}


$(Number).o.extend({none:0
,decimal:function(){return ((this+'').split('.')[1]||0)*1}
,til:function(pct){if(pct===ø)pct=1;if(pct.isS&&/\%$/.test(pct))pct=pct.r(/\D/g)/100;return this*pct}
})

$(Array).o.extend({none:0
,remove:function(y,n){var a=this;a.splice(y,n);return a}
,toO:function(){var o={},a=this;if(a.dim()===1)a=[a];a.each(function(y,r){r=r.toA();o[r[0]]=r[1]});return o}
})

$(Function).o.extend({none:0
,inherit:function(parentClass){this.prototype=new parentClass();this.prototype.constructor=this;this.prototype.parentClass=parentClass;return this}
,remove:function(n){this.a[n]=null}
})

$($.e).o.push({none:0
,childElementNodes:function(none,e){return [].cat(e.children)}
})

$($.e.style).o.push({none:0
,getRect:function(none,e){
	var x=e.offsetLeft,y=e.offsetTop,e2=e,win=this.rect(ø,window),sT=win.scrollTop,sL=win.scrollLeft,pos='static';
	while(e&&e.tagName){if(pos==='static'){pos=$.e.computedStyle('position',e)||'static';if(pos==='absolute'){sL=sT=0;x=e.offsetLeft;y=e.offsetTop;break}}
	x-=e.scrollLeft||0;y-=e.scrollTop||0;e=e.parentNode};e=e2;
	return {left:pos==='fixed'?e.getBoundingClientRect().left.int():sL+x,top:pos==='fixed'?e.getBoundingClientRect().top.int():sT+y,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop,clientWidth:e.clientWidth,clientHeight:e.clientHeight,right:sL+x+e.offsetWidth,bottom:sT+y+e.offsetHeight,width:e.offsetWidth,height:e.offsetHeight,position:pos}
}
})

// json
$($.o).o.push({none:0
,toS:$(function(v,notation,escaped){var o=$.toS[notation||'js'];switch(tof(v)){
	case 'b':return v?'true':'false';break;case null:return 'null';break
	case 's':return '"'+(escaped?v.escape():v)+'"';break
	case 'a':for(var s=o.abegin,i=0;i<v.length;i++)s+=$.toS(v[i],notation,escaped)+o.acoma;return s.r(eval('/'+o.acoma+'$/'))+o.aend;break
	case 'o':var s=o.obegin;for(x in v)s+=o.oattrbegin+x+o.oattrend+$.toS(v[x],notation,escaped)+o.ocoma;s=s.r(/\,$/);return s+o.oend;break
	default:return (v+'')?v+'':v
}}).o.push({js:{abegin:'[',aend:']',acoma:',',obegin:'{',oend:'}',ocoma:',',oattrbegin:'"',oattrend:'":'}})
})