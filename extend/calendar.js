(function($){
/**/
if(!$.date)$.require('date')
/**
	calendar!

*/$.e.calendar={
 create:function(o){
	if(!this.e)this.renderCalendar();
	var input=$.create($.o.push({tag:'input',css:'calendar-input',valida:'date'},o||{}));
	var ico=$.create({tag:'ico',o:{target:input},push:'&#61555;',css:'calendar-ico',onclick:function(){$.e.calendar.toggle(this.o.target)}});
	return $.create({tag:'span',push:[input,ico]})
 }
 ,locate:function(e){$.e.style({pos:{target:e||$.e.calendar.target}},$.e.calendar.e);return this}
 ,open:function(e){this.target=$.byId(e);if(this.target.disabled)return;this.e.style.display='block';setTimeout(function(){$.e.calendar.isOpen=$.e.calendar.target},10);if(this.target)this.locate();return this}
 ,close:function(){this.e.style.display='none';this.isOpen=false;return this}
 ,toggle:function(e){if($.byId(e).disabled)return;if(this.isOpen&&this.isOpen!==e)this.isOpen=false;return this.isOpen?this.close():this.open(e).draw(e.value||new Date())}
 ,$:function(n){return this[n+this.beginDay]}
 ,select:function(n){this.unselect();var e=this.$(n-1);$.css('(+)selected',e);$.e.focus(50,e);this.day=n;return this}
 ,unselect:function(){if(this.day)$.css('(-)selected',this.$(this.day-1))}
 ,pickDate:function(n){this.select(n).close();this.target.value=this.year.value+'/'+('00'+this.month.value).slice(-2)+'/'+('00'+n).slice(-2)}
 ,draw:function(d,day){
	d=d&&!d.isD?new Date(d):!d?new Date(this.year.value,this.month.value-1,1):d;
	d.sp=d.split();d.setDate(1);this.unselect();this.beginDay=d.dayOfWeek()-1;
	for(var y=0;y<this.beginDay;y++)this[y].style.visibility='hidden';
	for(var m=d.sp.m-1,x=0,y=this.beginDay;y<37;y++){if(d.getMonth()==m){this[y].innerHTML=++x;this[y].style.visibility='visible'}else this[y].style.visibility='hidden';d.setDate(d.getDate()+1)}
	this.month.value=d.sp.m;this.year.value=d.sp.y;
	return this.select(day||d.sp.d)
 }
 ,renderCalendar:function(){if(this.e)return;
	$.e.push(this.e=$.create('calendarpopup'),document.body);
	for(var a=[],i=0,y=0;a[y]=[],y<6;y++)for(var x=1;x<=7;x++)if(i<=36)
		a[y].push(this[i]=$.create({tag:'button',type:'button',o:{indice:i},html:++i,css:'day '+(((i+1)%7==1||(i+2)%7==1)?'feriado':'laboral'),onclick:function(){$.e.calendar.pickDate(this.innerHTML)}}))
	var meses=[].cat($.date.meses),btn=function(img,f){return $.create({tag:'button',css:'navegador',onclick:function(){f();$.e.calendar.draw(ø,1)},css:'p-0 p-w-b',style:'width:30px',push:{tag:'ico',push:img,css:'clean'}})};meses.each(function(y){meses[y][1]=meses[y][1].r(/\\/g)})
	$(this.e,{push:[
		{tag:'div',css:'head',push:{tag:'table',body:[
			[btn('',function(){$.e.calendar.year.value--}),this.year=$.create({tag:'input',css:'year',readonly:true,onchange:function(){$.e.calendar.draw().select(1)}})
				,btn('',function(){$.e.calendar.year.value++})]
			,[
				btn('',function(){$.e.calendar.month.value<=1?$.e.calendar.month.value=12:--$.e.calendar.month.value})
				,this.month=$.create({tag:'select',css:'month',o:{head:false},options:meses,onchange:function(){$.e.calendar.draw().select(1)}})
				,btn('',function(){$.e.calendar.month.value>=12?$.e.calendar.month.value=1:++$.e.calendar.month.value})
			]
		]}}
		,{tag:'table',css:'table',head:['L','M','M','J','V','S','D'],body:a}
	]})
	$.e.onclickout(function(){if($.e.calendar.isOpen)$.e.calendar.close()},this.e)
	this.draw(new Date())
 }
}
/**/
if(!$.css)$.require('style')
$.css.update({
'.calendar-input':"padding-left:15px;width:120px!important"
,'.calendar-ico':"display:inline-block;cursor:pointer;margin:0 24px 0 -24px;opacity:0.6;text-shadow:2px 1px 1px #777"
,'.calendar-ico:hover':"color:<#fc-orange>"
,'calendarpopup':"position:absolute;display:none;<.bg-a>;<.br-sh>;<.br-rd-b>;<.br>;padding:2px;z-index:1000"
,'calendarpopup div.head':"<.bg-b>;padding:5px 0;<.br-top-rd-b>"
,'calendarpopup div.head table':"width:100%"
,'calendarpopup div.head table td':"text-align:center"
,'calendarpopup button.navegador':"width:26px;height:25px;<.br-rd>;box-shadow:none"
,'calendarpopup button':"width:30px;height:25px;<.br-rd>;box-shadow:none"
,'calendarpopup input.year':"text-align:center;width:110px;line-height:25px"
,'calendarpopup select.month':"text-align:center;width:132px"
,'calendarpopup table.table':"border-collapse:separate;border-spacing:1px;font-size:14px"
,'calendarpopup table.table td':"padding:0px"
,'calendarpopup table.table th':"border:solid 1px <#bg-b>;<.br-rd>"
,'calendarpopup button.day':"width:30px;height:25px;<.br-rd>;box-shadow:none"
,'calendarpopup button.day.laboral':"background-color:red!important"
,'calendarpopup button.day.feriado':"<.bg-gr-b>;font-size:80%"
,'calendarpopup button.day.selected,calendarpopup button.day:hover,calendarpopup button.day:focus':"<.bg-gr-orange>!important;"
},1)
/**/
})(jslite)