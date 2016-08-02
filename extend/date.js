(function($){
/**
	date!

*/$.date={
isValid:function(s,m,d){if(s*1)s=s+'/'+m.fill('0',-2)+'/'+d.fill('0',-2);d=new Date(s);return d.isDate()&&s==d.toString()},
isBisiesto:function(y){return y%4==0&&(y%100!=0||y%400==0)},
meses:[[1,'Enero'],[2,'Febrero'],[3,'\\M\\arzo'],[4,'Abril'],[5,'\\M\\a\\yo'],[6,'Junio'],[7,'Julio'],[8,'Agosto'],[9,'\\Septie\\mbre'],[10,'Octubre'],[11,'Novie\\mbre'],[12,'Dicie\\mbre']],
mesesAbbr:[[1,'Ene'],[2,'Feb'],[3,'\\M\\ar'],[4,'Abr'],[5,'Ma\\y'],[6,'Jun'],[7,'Jul'],[8,'Ago'],[9,'\\Sep'],[10,'Oct'],[11,'Nov'],[12,'Dic']],
dias:[[1,'Lunes'],[2,'\\M\\artes'],[3,'\\Miercoles'],[4,'Jueves'],[5,'Viernes'],[6,'\\Sáb\\a\\do'],[7,'Do\\mingo']],
diasAbbr:[[1,'Lun'],[2,'\\M\\ar'],[3,'\\Mie'],[4,'Jue'],[5,'Vie'],[6,'\\S\\ab'],[7,'Do\\m']],
add:function(o,now){$.o(o,{time:o});o.time=o.time||0;now=now||new Date()
	if(o.years)now.setFullYear(o.years+now.getFullYear());if(o.months)now.setMonth(o.months+now.getMonth());if(o.days)o.time+=o.days*24*60*60*1000;
	if(o.hours)o.time+=o.hours*60*60*1000;if(o.minutes)o.time+=o.minutes*60*1000;if(o.seconds)o.time+=o.seconds*1000;if(o.time)now=new Date(now.getTime()+o.time)
	return now
},
dif:function(d1,d2){var d2=d2||new Date();var s=(((d1.getTime()-d2.getTime())/1000)|0).abs()
	var y=(s/(60*60*24*365))|0,d=(s/(60*60*24))|0,h=(s/(60*60))|0,m=(s/(60))|0;var fullDays=d+1;
	while(d.abs()>=365)d=d-365;while(h.abs()>=24)h=h-24;while(m.abs()>=60)m=m-60;while(s.abs()>=60)s=s-60
	return {years:y,days:d+1,hours:h,minutes:m,seconds:s,fullDays:fullDays}
},
format:function(format,date){format=format||'yy-m-d H:Ma';format=format.r(/.H\D/,function(c){return c[0]!='\\'?'H12'+c[2]:c})
	var yy=date.year()+'',m=(date.month()+'').fill('0',-2),d=(date.day()+'').fill('0',-2),dow=date.dayOfWeek(),M=(date.getMinutes()+'').fill('0',-2),S=(date.getSeconds()+'').fill('0',-2),H=date.getHours()
	var dd=$.date.diasAbbr[dow-1][1],ddd=$.date.dias[dow-1][1],mm=$.date.mesesAbbr[m-1][1],mmm=$.date.meses[m-1][1],y=yy.substr(2,2)
	var H12=H24=H,a='am';if(H>11)a='pm';if(H>12)H12=H-12;if(H==0)H12=12;H12=(H12+'').fill('0',-2);H24=(H24+'').fill('0',-2)
	return format.strtr({mmm:mmm,mm:mm,ddd:ddd,dd:dd}).r(/\\./g,function(c){return '%'+c.r(/\\/g).ord()+'%'}).strtr({H12:H12,H24:H24,H:H,M:M,S:S}).strtr({yy:yy,y:y,m:m,d:d,a:a}).r(/%\d{1,}%/g,function(c){return c.m(/\d{1,}/)[0].chr()})
},
fromISO:function(s){var a=s.split(/\D/);var d=new Date(a[0],a[1]-1,a[2],a[3],a[4],a[5]);d.zone=a[6];return d}
}
//
$(Date).o.extend({isD:1
,split:function(){return {d:this.day(),m:this.month(),y:this.year()}}
,toString:function(){return this.year()+'/'+this.month().fill('0',-2)+'/'+this.day().fill('0',-2)}
,fromString:function(s){var d=new Date(s.r(/-/g,'/'));this.setTime(d.getTime());return this}
,isDate:function(){return !isNaN(this.getTime())}
,isBisiesto:function(){return $.date.isBisiesto(this.getFullYear())}
,year:function(n){if(n){this.setFullYear(n);return this}return this.getFullYear()}
,month:function(n){if(n!==ø){this.setMonth(n-1);return this}return this.getMonth()+1}
,day:function(n){if(n){this.setDate(n);return this}return this.getDate()}
,dayOfWeek:function(){var d=this.getDay();return !d?7:d}
,add:function(o){this.setTime($.date.add(o,this).getTime());return this}
,dif:function(d2){return $.date.dif(this,d2)}
,format:function(format){return $.date.format(format,this)}
})
/**/
})(jslite)