(function($){
/*
	pos

*/$($.e.style).o.push({
bmp:function(v,e){
	var f=function(s){return $.e.computedStyle(s,e).int()}
	,o={bT:f('border-top-width'),bB:f('border-bottom-width'),bL:f('border-left-width'),bR:f('border-right-width'),mT:f('margin-top'),mB:f('margin-bottom'),mL:f('margin-left'),mR:f('margin-right'),pT:f('padding-top'),pB:f('padding-bottom'),pL:f('padding-left'),pR:f('padding-right')}
	o.bmpX=o.bL+o.bR+o.mL+o.mR+o.pL+o.pR;o.bmpY=o.bT+o.bB+o.mT+o.mB+o.pT+o.pB;return o
}
,center:function(s,e){
	var eRec=this.rect(ø,e),wRec=this.rect(ø,window),fixed=s.hasWord('fixed','-');
	if(s.hasWord('x','-'))e.style.left='calc(50vw - '+eRec.width/2+'px + '+(fixed?0:wRec.scrollLeft)+'px)';
	if(s.hasWord('y','-'))e.style.top='calc(50vh - '+eRec.height/2+'px + '+(fixed?0:wRec.scrollTop)+'px)';
	if(fixed)e.style.position='fixed';
	if(s.hasWord('noscroll','-'))document.body.style.overflow='hidden'
}
,maximize:function(s,e){
	var wRec=this.rect(ø,window),fixed=s.hasWord('fixed','-'),bmp=this.bmp(ø,e);
	if(s.hasWord('x','-')){e.style.left=(fixed?0:wRec.scrollLeft)+'px';e.style.width='calc(100vw - '+bmp.bmpX+'px)'}
	if(s.hasWord('y','-')){e.style.top=(fixed?0:wRec.scrollTop)+'px';e.style.height='calc(100vh - '+bmp.bmpY+'px)'}
	if(fixed)e.style.position='fixed';
	if(s.hasWord('noscroll','-'))document.body.style.overflow='hidden'
}
});
$($.e.style.moveTo=function(o,e){
	if(tof(o)==='e')o={target:o};$.e.fix(o.target);
	o.type=o.type||'bottom-left';
	var isFixed=$.e.parent(function(){return $.e.computedStyle('position',this)==='fixed'},o.target);
	e.style.position=isFixed?'fixed':'absolute';
	$.o.push({tRec:this.rect(isFixed?'native':'rect',o.target),eRec:this.rect(ø,e),bRec:this.rect(ø,document.body),t1:o.type.split('-')[0],t2:o.type.split('-')[1]},o);
	if(o.type.hasWord('onresize','-')&&!e.o.onresizeMoveTo){
		
	}
	this.moveTo.move(1,o,e).move(2,o,e)
}).o.push({
 op:function(s){return s==='top'?'bottom':s==='bottom'?'top':s==='left'?'right':s==='right'?'left':''}
 ,main:function(s){return s==='top'||s==='bottom'?'top':s==='left'||s==='right'?'left':''}
 ,wh:function(s){return /left|right/.test(s)?'width':'height'}
 ,move:function(w,o,e){var t=o['t'+w],p1=this['pos'+w](t,o,e),p2=this['pos'+w](this.op(t),o,e),wh=this.wh(t);e.style[this.main(t)]=((p1>0&&(p1+o.eRec[wh])<o.bRec[wh])?p1:(p2>0&&(p2+o.eRec[wh])<o.bRec[wh])?p2:0)+'px';return this}
 ,pos1:function(w1,o,e){var w2=this.wh(w1);switch(w1){case 'left':case 'top':return o.tRec[w1]-o.eRec[w2];break;default:return o.tRec[w1]}}
 ,pos2:function(w1,o,e){var w2=this.wh(w1);switch(w1){case 'left':case 'top':return o.tRec[w1];break;default:return o.tRec[w1]-o.eRec[w2]}}
})
/**/
})(jslite)