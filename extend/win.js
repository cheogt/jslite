(function($){
/**
	win!

*/$.e.win={isWin:1
,create:function(o){
	var e=$.create((o||{}).tag||o);
	e.toString=function(){return "[HTMLWinElement]"}
	e.o.isOpen=false
	e.o.currentTarget=null
	return e;
}
,moveTo:function(){
	
}
,open:function(o,e){
	if(e.onopen&&e.onopen.call(e,o)===false)return;
	$(e,{style:'display:block'});
	e.o.isOpen=true
}
,close:function(o,e){
	if(e.onclose&&e.onclose.call(e,o)===false)return;
	$(e,{style:'display:none'});
	e.o.isOpen=false
}
,toogle:function(o,e){this[e.o.isOpen?'close':'open'](o,e)}
}
$.css({
'win':"display:none; position:absolute; z-index:50; top:0;left:0"
,'win.styled':"background-color:rgba(toRGB(<#bg-color>),.9); <.br-rd-a>; <.box-sh-strong>; padding:10px; margin:0; border:solid 2px <#bg-color>"
})
})(jslite)
