(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function $i(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function fm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Zn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Mo={duration:.5,overwrite:!1,delay:0},Hh,an,Ut,ui=1e8,Pt=1/ui,Su=Math.PI*2,O_=Su/4,k_=0,dm=Math.sqrt,B_=Math.cos,z_=Math.sin,nn=function(e){return typeof e=="string"},zt=function(e){return typeof e=="function"},cr=function(e){return typeof e=="number"},Gh=function(e){return typeof e>"u"},Fi=function(e){return typeof e=="object"},In=function(e){return e!==!1},Vh=function(){return typeof window<"u"},Go=function(e){return zt(e)||nn(e)},pm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},pn=Array.isArray,H_=/random\([^)]+\)/g,G_=/,\s*/g,Bf=/(?:-?\.?\d|\.)+/gi,mm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ys=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Tl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,gm=/[+-]=-?[.\d]+/,V_=/[^,'"\[\]\s]+/gi,W_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,kt,Ai,Mu,Wh,ei={},qc={},_m,bm=function(e){return(qc=la(e,ei))&&Bn},Xh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},To=function(e,t){return!t&&console.warn(e)},vm=function(e,t){return e&&(ei[e]=t)&&qc&&(qc[e]=t)||ei},Eo=function(){return 0},X_={suppressEvents:!0,isStart:!0,kill:!1},Pc={suppressEvents:!0,kill:!1},j_={suppressEvents:!0},jh={},Ur=[],Tu={},xm,jn={},El={},zf=30,Dc=[],qh="",Yh=function(e){var t=e[0],n,i;if(Fi(t)||zt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Dc.length;i--&&!Dc[i].targetTest(t););n=Dc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Gm(e[i],n)))||e.splice(i,1);return e},us=function(e){return e._gsap||Yh(hi(e))[0]._gsap},ym=function(e,t,n){return(n=e[t])&&zt(n)?e[t]():Gh(n)&&e.getAttribute&&e.getAttribute(t)||n},Un=function(e,t){return(e=e.split(",")).forEach(t)||e},Gt=function(e){return Math.round(e*1e5)/1e5||0},Ot=function(e){return Math.round(e*1e7)/1e7||0},Js=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},q_=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Yc=function(){var e=Ur.length,t=Ur.slice(0),n,i;for(Tu={},Ur.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Kh=function(e){return!!(e._initted||e._startAt||e.add)},Sm=function(e,t,n,i){Ur.length&&!an&&Yc(),e.render(t,n,!!(an&&t<0&&Kh(e))),Ur.length&&!an&&Yc()},Mm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(V_).length<2?t:nn(e)?e.trim():e},Tm=function(e){return e},ti=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Y_=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},la=function(e,t){for(var n in t)e[n]=t[n];return e},Hf=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Fi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Kc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ao=function(e){var t=e.parent||kt,n=e.keyframes?Y_(pn(e.keyframes)):ti;if(In(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},K_=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Em=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},hl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},kr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},hs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Q_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Eu=function(e,t,n,i){return e._startAt&&(an?e._startAt.revert(Pc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},$_=function r(e){return!e||e._ts&&r(e.parent)},Gf=function(e){return e._repeat?ua(e._tTime,e=e.duration()+e._rDelay)*e:0},ua=function(e,t){var n=Math.floor(e=Ot(e/t));return e&&n===e?n-1:n},Qc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},fl=function(e){return e._end=Ot(e._start+(e._tDur/Math.abs(e._ts||e._rts||Pt)||0))},dl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ot(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),fl(e),n._dirty||hs(n,e)),e},Am=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Qc(e.rawTime(),t),(!t._dur||Bo(0,t.totalDuration(),n)-t._tTime>Pt)&&t.render(n,!0)),hs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Pt}},Pi=function(e,t,n,i){return t.parent&&kr(t),t._start=Ot((cr(n)?n:n||e!==kt?si(e,n,t):e._time)+t._delay),t._end=Ot(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Em(e,t,"_first","_last",e._sort?"_start":0),Au(t)||(e._recent=t),i||Am(e,t),e._ts<0&&dl(e,e._tTime),e},wm=function(e,t){return(ei.ScrollTrigger||Xh("scrollTrigger",t))&&ei.ScrollTrigger.create(t,e)},Rm=function(e,t,n,i,s){if($h(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!an&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&xm!==Yn.frame)return Ur.push(e),e._lazy=[s,i],1},J_=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Au=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Z_=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&J_(e)&&!(!e._initted&&Au(e))||(e._ts<0||e._dp._ts<0)&&!Au(e))?0:1,o=e._rDelay,c=0,l,u,h;if(o&&e._repeat&&(c=Bo(0,e._tDur,t),u=ua(c,o),e._yoyo&&u&1&&(a=1-a),u!==ua(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||an||i||e._zTime===Pt||!t&&e._zTime){if(!e._initted&&Rm(e,t,i,n,c))return;for(h=e._zTime,e._zTime=t||(n?Pt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&Eu(e,t,n,!0),e._onUpdate&&!n&&Qn(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&Qn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&kr(e,1),!n&&!an&&(Qn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},eb=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ha=function(e,t,n,i){var s=e._repeat,a=Ot(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Ot(a*(s+1)+e._rDelay*s):a,o>0&&!i&&dl(e,e._tTime=e._tDur*o),e.parent&&fl(e),n||hs(e.parent,e),e},Vf=function(e){return e instanceof Ln?hs(e):ha(e,e._dur)},tb={_start:0,endTime:Eo,totalDuration:Eo},si=function r(e,t,n){var i=e.labels,s=e._recent||tb,a=e.duration()>=ui?s.endTime(!1):e._dur,o,c,l;return nn(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&n&&(c=c/100*(pn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+c:a+c)):t==null?a:+t},oo=function(e,t,n){var i=cr(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,c;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=In(c.vars.inherit)&&c.parent;a.immediateRender=In(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new jt(t[0],a,t[s+1])},Vr=function(e,t){return e||e===0?t(e):t},Bo=function(e,t,n){return n<e?e:n>t?t:n},fn=function(e,t){return!nn(e)||!(t=W_.exec(e))?"":t[1]},nb=function(e,t,n){return Vr(n,function(i){return Bo(e,t,i)})},wu=[].slice,Cm=function(e,t){return e&&Fi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Fi(e[0]))&&!e.nodeType&&e!==Ai},ib=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return nn(i)&&!t||Cm(i,1)?(s=n).push.apply(s,hi(i)):n.push(i)})||n},hi=function(e,t,n){return Ut&&!t&&Ut.selector?Ut.selector(e):nn(e)&&!n&&(Mu||!fa())?wu.call((t||Wh).querySelectorAll(e),0):pn(e)?ib(e,n):Cm(e)?wu.call(e,0):e?[e]:[]},Ru=function(e){return e=hi(e)[0]||To("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return hi(t,n.querySelectorAll?n:n===e?To("Invalid scope")||Wh.createElement("div"):e)}},Pm=function(e){return e.sort(function(){return .5-Math.random()})},Dm=function(e){if(zt(e))return e;var t=Fi(e)?e:{each:e},n=fs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,l=t.axis,u=i,h=i;return nn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||t).length,m=a[_],p,v,y,b,w,R,T,C,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,ui])[1],!M){for(T=-ui;T<(T=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=a[_]=[],p=c?Math.min(M,_)*u-.5:i%M,v=M===ui?0:c?_*h/M-.5:i/M|0,T=0,C=ui,R=0;R<_;R++)y=R%M-p,b=v-(R/M|0),m[R]=w=l?Math.abs(l==="y"?b:y):dm(y*y+b*b),w>T&&(T=w),w<C&&(C=w);i==="random"&&Pm(m),m.max=T-C,m.min=C,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:l?l==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=fn(t.amount||t.each)||0,n=n&&_<0?gb(n):n}return _=(m[f]-m.min)/m.max||0,Ot(m.b+(n?n(_):_)*m.v)+m.u}},Cu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ot(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(cr(n)?0:fn(n))}},Lm=function(e,t){var n=pn(e),i,s;return!n&&Fi(e)&&(i=n=e.radius||ui,e.values?(e=hi(e.values),(s=!cr(e[0]))&&(i*=i)):e=Cu(e.increment)),Vr(t,n?zt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),c=parseFloat(s?a.y:0),l=ui,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-o,d=e[h].y-c,f=f*f+d*d):f=Math.abs(e[h]-o),f<l&&(l=f,u=h);return u=!i||l<=i?e[u]:a,s||u===a||cr(a)?u:u+fn(a)}:Cu(e))},Im=function(e,t,n,i){return Vr(pn(e)?!t:n===!0?!!(n=0):!i,function(){return pn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},rb=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},sb=function(e,t){return function(n){return e(parseFloat(n))+(t||fn(n))}},ab=function(e,t,n){return Nm(e,t,0,1,n)},Um=function(e,t,n){return Vr(n,function(i){return e[~~t(i)]})},ob=function r(e,t,n){var i=t-e;return pn(e)?Um(e,r(0,e.length),t):Vr(n,function(s){return(i+(s-e)%i)%i+e})},cb=function r(e,t,n){var i=t-e,s=i*2;return pn(e)?Um(e,r(0,e.length-1),t):Vr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Ao=function(e){return e.replace(H_,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(G_);return Im(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Nm=function(e,t,n,i,s){var a=t-e,o=i-n;return Vr(s,function(c){return n+((c-e)/a*o||0)})},lb=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=nn(e),o={},c,l,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(pn(e)&&!pn(t)){for(u=[],h=e.length,f=h-2,l=1;l<h;l++)u.push(r(e[l-1],e[l]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=la(pn(e)?[]:{},e));if(!u){for(c in t)Qh.call(o,e,c,"get",t[c]);s=function(g){return ef(g,o)||(a?e.p:e)}}}return Vr(n,s)},Wf=function(e,t,n){var i=e.labels,s=ui,a,o,c;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(c=a,s=o);return c},Qn=function(e,t,n){var i=e.vars,s=i[t],a=Ut,o=e._ctx,c,l,u;if(s)return c=i[t+"Params"],l=i.callbackScope||e,n&&Ur.length&&Yc(),o&&(Ut=o),u=c?s.apply(l,c):s.call(l),Ut=a,u},Ka=function(e){return kr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!an),e.progress()<1&&Qn(e,"onInterrupt"),e},Ks,Fm=[],Om=function(e){if(e)if(e=!e.name&&e.default||e,Vh()||e.headless){var t=e.name,n=zt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Eo,render:ef,add:Qh,kill:Ab,modifier:Eb,rawVars:0},a={targetTest:0,get:0,getSetter:Zh,aliases:{},register:0};if(fa(),e!==i){if(jn[t])return;ti(i,ti(Kc(e,s),a)),la(i.prototype,la(s,Kc(e,a))),jn[i.prop=t]=i,e.targetTest&&(Dc.push(i),jh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}vm(t,i),e.register&&e.register(Bn,i,Nn)}else Fm.push(e)},Ct=255,Qa={aqua:[0,Ct,Ct],lime:[0,Ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ct],navy:[0,0,128],white:[Ct,Ct,Ct],olive:[128,128,0],yellow:[Ct,Ct,0],orange:[Ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ct,0,0],pink:[Ct,192,203],cyan:[0,Ct,Ct],transparent:[Ct,Ct,Ct,0]},Al=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ct+.5|0},km=function(e,t,n){var i=e?cr(e)?[e>>16,e>>8&Ct,e&Ct]:0:Qa.black,s,a,o,c,l,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Qa[e])i=Qa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ct,i&Ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ct,e&Ct]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Bf),!t)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(l+1):u+l-u*l,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Al(c+1/3,s,a),i[1]=Al(c,s,a),i[2]=Al(c-1/3,s,a);else if(~e.indexOf("="))return i=e.match(mm),n&&i.length<4&&(i[3]=1),i}else i=e.match(Bf)||Qa.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Ct,a=i[1]/Ct,o=i[2]/Ct,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?c=l=0:(d=h-f,l=u>.5?d/(2-h-f):d/(h+f),c=h===s?(a-o)/d+(a<o?6:0):h===a?(o-s)/d+2:(s-a)/d+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Bm=function(e){var t=[],n=[],i=-1;return e.split(Nr).forEach(function(s){var a=s.match(Ys)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Xf=function(e,t,n){var i="",s=(e+i).match(Nr),a=t?"hsla(":"rgba(",o=0,c,l,u,h;if(!s)return e;if(s=s.map(function(f){return(f=km(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Bm(e),c=n.c,c.join(i)!==u.c.join(i)))for(l=e.replace(Nr,"1").split(Ys),h=l.length-1;o<h;o++)i+=l[o]+(~c.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!l)for(l=e.split(Nr),h=l.length-1;o<h;o++)i+=l[o]+s[o];return i+l[h]},Nr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Qa)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),ub=/hsl[a]?\(/,zm=function(e){var t=e.join(" "),n;if(Nr.lastIndex=0,Nr.test(t))return n=ub.test(t),e[1]=Xf(e[1],n),e[0]=Xf(e[0],n,Bm(e[1])),!0},wo,Yn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],c,l,u,h,f,d,g=function _(m){var p=r()-i,v=m===!0,y,b,w,R;if((p>e||p<0)&&(n+=p-t),i+=p,w=i-n,y=w-a,(y>0||v)&&(R=++h.frame,f=w-h.time*1e3,h.time=w=w/1e3,a+=y+(y>=s?4:s-y),b=1),v||(c=l(_)),b)for(d=0;d<o.length;d++)o[d](w,f,R,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){_m&&(!Mu&&Vh()&&(Ai=Mu=window,Wh=Ai.document||{},ei.gsap=Bn,(Ai.gsapVersions||(Ai.gsapVersions=[])).push(Bn.version),bm(qc||Ai.GreenSockGlobals||!Ai.gsap&&Ai||{}),Fm.forEach(Om)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&h.sleep(),l=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},wo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),wo=0,l=Eo},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,p,v){var y=p?function(b,w,R,T){m(b,w,R,T),h.remove(y)}:m;return h.remove(m),o[v?"unshift":"push"](y),fa(),y},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},h})(),fa=function(){return!wo&&Yn.wake()},ft={},hb=/^[\d.\-M][\d.\-,\s]/,fb=/["']/g,db=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,c,l;s<a;s++)c=n[s],o=s!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[i]=isNaN(l)?l.replace(fb,"").trim():+l,i=c.substr(o+1).trim();return t},pb=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},mb=function(e){var t=(e+"").split("("),n=ft[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[db(t[1])]:pb(e).split(",").map(Mm)):ft._CE&&hb.test(e)?ft._CE("",e):n},gb=function(e){return function(t){return 1-e(1-t)}},fs=function(e,t){return e&&(zt(e)?e:ft[e]||mb(e))||t},Ms=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Un(e,function(o){ft[o]=ei[o]=s,ft[a=o.toLowerCase()]=n;for(var c in s)ft[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=ft[o+"."+c]=s[c]}),s},Hm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},wl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Su*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*z_((u-a)*s)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:Hm(o);return s=Su/s,c.config=function(l,u){return r(e,l,u)},c},Rl=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Hm(n);return i.config=function(s){return r(e,s)},i};Un("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ms(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ft.Linear.easeNone=ft.none=ft.Linear.easeIn;Ms("Elastic",wl("in"),wl("out"),wl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Ms("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ms("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ms("Circ",function(r){return-(dm(1-r*r)-1)});Ms("Sine",function(r){return r===1?1:-B_(r*O_)+1});Ms("Back",Rl("in"),Rl("out"),Rl());ft.SteppedEase=ft.steps=ei.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Pt;return function(o){return((i*Bo(0,a,o)|0)+s)*n}}};Mo.ease=ft["quad.out"];Un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return qh+=r+","+r+"Params,"});var Gm=function(e,t){this.id=k_++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ym,this.set=t?t.getSetter:Zh},Ro=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ha(this,+t.duration,1,1),this.data=t.data,Ut&&(this._ctx=Ut,Ut.data.push(this)),wo||Yn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ha(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(fa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(dl(this,n),!s._dp||s.parent||Am(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Pi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Pt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Sm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Gf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Gf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ua(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Pt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Qc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Pt?0:this._rts,this.totalTime(Bo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),fl(this),Q_(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(fa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Pt&&(this._tTime-=Pt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ot(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Pi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(In(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Qc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=j_);var i=an;return an=n,Kh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),an=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Vf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Vf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(si(this,n),In(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,In(i)),this._dur||(this._zTime=-Pt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Pt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Pt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=zt(n)?n:Tm,c=function(){var u=i.then;i.then=null,s&&s(),zt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?c():i._prom=c})},e.kill=function(){Ka(this)},r})();ti(Ro.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Pt,_prom:0,_ps:!1,_rts:1});var Ln=(function(r){fm(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=In(n.sortChildren),kt&&Pi(n.parent||kt,$i(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&wm($i(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return oo(0,arguments,this),this},t.from=function(i,s,a){return oo(1,arguments,this),this},t.fromTo=function(i,s,a,o){return oo(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,ao(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new jt(i,s,si(this,a),1),this},t.call=function(i,s,a){return Pi(this,jt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,c,l,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=u,a.parent=this,new jt(i,a,si(this,c)),this},t.staggerFrom=function(i,s,a,o,c,l,u){return a.runBackwards=1,ao(a).immediateRender=In(a.immediateRender),this.staggerTo(i,s,a,o,c,l,u)},t.staggerFromTo=function(i,s,a,o,c,l,u,h){return o.startAt=a,ao(o).immediateRender=In(o.immediateRender),this.staggerTo(i,s,o,c,l,u,h)},t.render=function(i,s,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:Ot(i),h=this._zTime<0!=i<0&&(this._initted||!l),f,d,g,_,m,p,v,y,b,w,R,T;if(this!==kt&&u>c&&i>=0&&(u=c),u!==this._tTime||a||h){if(o!==this._time&&l&&(u+=this._time-o,i+=this._time-o),f=u,b=this._start,y=this._ts,p=!y,h&&(l||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(R=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(f=Ot(u%m),u===c?(_=this._repeat,f=l):(w=Ot(u/m),_=~~w,_&&_===w&&(f=l,_--),f>l&&(f=l)),w=ua(this._tTime,m),!o&&this._tTime&&w!==_&&this._tTime-w*m-this._dur<=0&&(w=_),R&&_&1&&(f=l-f,T=1),_!==w&&!this._lock){var C=R&&w&1,M=C===(R&&_&1);if(_<w&&(C=!C),o=C?0:u%l?l:u,this._lock=1,this.render(o||(T?0:Ot(_*m)),s,!l)._lock=0,this._tTime=u,!s&&this.parent&&Qn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,w=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,M&&(this._lock=2,o=C?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=eb(this,Ot(o),Ot(f)),v&&(u-=f-(f=v._start))),this._tTime=u,this._time=f,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&l&&!s&&!w&&(Qn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!p){v=0,g&&(u+=this._zTime=-Pt);break}}d=g}else{d=this._last;for(var x=i<0?i:f;d;){if(g=d._prev,(d._act||x<=d._end)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(x-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(x-d._start)*d._ts,s,a||an&&Kh(d)),f!==this._time||!this._ts&&!p){v=0,g&&(u+=this._zTime=x?-Pt:Pt);break}}d=g}}if(v&&!s&&(this.pause(),v.render(f>=o?0:-Pt)._zTime=f>=o?1:-1,this._ts))return this._start=b,fl(this),this.render(i,s,a);this._onUpdate&&!s&&Qn(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&o)&&(b===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&kr(this,1),!s&&!(i<0&&!o)&&(u||o||!c)&&(Qn(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(cr(s)||(s=si(this,s,i)),!(i instanceof Ro)){if(pn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(nn(i))return this.addLabel(i,s);if(zt(i))i=jt.delayedCall(0,i);else return this}return this!==i?Pi(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ui);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof jt?s&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,a)))),l=l._next;return c},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return nn(i)?this.removeLabel(i):zt(i)?this.killTweensOf(i):(i.parent===this&&hl(this,i),i===this._recent&&(this._recent=this._last),hs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ot(Yn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=si(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=jt.delayedCall(0,s||Eo,a);return o.data="isPause",this._hasPause=1,Pi(this,o,si(this,i))},t.removePause=function(i){var s=this._first;for(i=si(this,i);s;)s._start===i&&s.data==="isPause"&&kr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)Er!==o[c]&&o[c].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=hi(i),c=this._first,l=cr(s),u;c;)c instanceof jt?q_(c._targets,o)&&(l?(!Er||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&a.push(c):(u=c.getTweensOf(o,s)).length&&a.push.apply(a,u),c=c._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=si(a,i),c=s,l=c.startAt,u=c.onStart,h=c.onStartParams,f=c.immediateRender,d,g=jt.to(a,ti({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||Pt,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());g._dur!==m&&ha(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,ti({startAt:{time:si(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Wf(this,si(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Wf(this,si(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Pt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,c=this.labels,l;for(i=Ot(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(l in c)c[l]>=a&&(c[l]+=i);return hs(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),hs(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,c=ui,l,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,Pi(a,o,u-o._delay,1)._lock=0):c=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=Ot(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=l;ha(a,a===kt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(kt._ts&&(Sm(kt,Qc(i,kt)),xm=Yn.frame),Yn.frame>=zf){zf+=Zn.autoSleep||120;var s=kt._first;if((!s||!s._ts)&&Zn.autoSleep&&Yn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Yn.sleep()}}},e})(Ro);ti(Ln.prototype,{_lock:0,_hasPause:0,_forcing:0});var _b=function(e,t,n,i,s,a,o){var c=new Nn(this._pt,e,t,0,1,Ym,null,s),l=0,u=0,h,f,d,g,_,m,p,v;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ao(i)),a&&(v=[n,i],a(v,e,t),n=v[0],i=v[1]),f=n.match(Tl)||[];h=Tl.exec(i);)g=h[0],_=i.substring(l,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,c._pt={_next:c._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Js(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},l=Tl.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=o,(gm.test(i)||p)&&(c.e=0),this._pt=c,c},Qh=function(e,t,n,i,s,a,o,c,l,u){zt(i)&&(i=i(s||0,e,a));var h=e[t],f=n!=="get"?n:zt(h)?l?e[t.indexOf("set")||!zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,d=zt(h)?l?Sb:jm:Jh,g;if(nn(i)&&(~i.indexOf("random(")&&(i=Ao(i)),i.charAt(1)==="="&&(g=Js(f,i)+(fn(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Pu)return!isNaN(f*i)&&i!==""?(g=new Nn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?Tb:qm,0,d),l&&(g.fp=l),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&Xh(t,i),_b.call(this,e,t,f,i,d,c||Zn.stringFilter,l))},bb=function(e,t,n,i,s){if(zt(e)&&(e=co(e,s,t,n,i)),!Fi(e)||e.style&&e.nodeType||pn(e)||pm(e))return nn(e)?co(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=co(e[o],s,t,n,i);return a},Vm=function(e,t,n,i,s,a){var o,c,l,u;if(jn[e]&&(o=new jn[e]).init(s,o.rawVars?t[e]:bb(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=c=new Nn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Ks))for(l=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)l[o._props[u]]=c;return o},Er,Pu,$h=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:m,y=e._overwrite==="auto"&&!Hh,b=e.timeline,w=i.easeReverse||h,R,T,C,M,x,D,I,N,G,K,X,W,F;if(b&&(!f||!s)&&(s="none"),e._ease=fs(s,Mo.ease),e._rEase=w&&(fs(w)||e._ease),e._from=!b&&!!i.runBackwards,e._from&&(e.ratio=1),!b||f&&!i.stagger){if(N=m[0]?us(m[0]).harness:0,W=N&&i[N.prop],R=Kc(i,jh),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!d?_.render(-1,!0):_.revert(u&&g?Pc:X_),_._lazy=0),a){if(kr(e._startAt=jt.set(m,ti({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&In(c),startAt:null,delay:0,onUpdate:l&&function(){return Qn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(an||!o&&!d)&&e._startAt.revert(Pc),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),C=ti({overwrite:!1,data:"isFromStart",lazy:o&&!_&&In(c),immediateRender:o,stagger:0,parent:p},R),W&&(C[N.prop]=W),kr(e._startAt=jt.set(m,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(an?e._startAt.revert(Pc):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Pt,Pt);else if(!t)return}for(e._pt=e._ptCache=0,c=g&&In(c)||c&&!g,T=0;T<m.length;T++){if(x=m[T],I=x._gsap||Yh(m)[T]._gsap,e._ptLookup[T]=K={},Tu[I.id]&&Ur.length&&Yc(),X=v===m?T:v.indexOf(x),N&&(G=new N).init(x,W||R,e,X,v)!==!1&&(e._pt=M=new Nn(e._pt,x,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(J){K[J]=M}),G.priority&&(D=1)),!N||W)for(C in R)jn[C]&&(G=Vm(C,R,e,X,x,v))?G.priority&&(D=1):K[C]=M=Qh.call(e,x,C,"get",R[C],X,v,0,i.stringFilter);e._op&&e._op[T]&&e.kill(x,e._op[T]),y&&e._pt&&(Er=e,kt.killTweensOf(x,K,e.globalTime(t)),F=!e.parent,Er=0),e._pt&&c&&(Tu[I.id]=1)}D&&Km(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!F,f&&t<=0&&b.render(ui,!0,!0)},vb=function(e,t,n,i,s,a,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Pu=1,e.vars[t]="+=0",$h(e,o),Pu=0,c?To(t+" not eligible for reset. Try splitting into individual properties"):1;l.push(u)}for(d=l.length;d--;)h=l[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=Gt(n)+fn(h.e)),h.b&&(h.b=u.s+fn(h.b))},xb=function(e,t){var n=e[0]?us(e[0]).harness:0,i=n&&n.aliases,s,a,o,c;if(!i)return t;s=la({},t);for(a in i)if(a in s)for(c=i[a].split(","),o=c.length;o--;)s[c[o]]=s[a];return s},yb=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(pn(t))o=n[e]||(n[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},co=function(e,t,n,i,s){return zt(e)?e.call(t,n,i,s):nn(e)&&~e.indexOf("random(")?Ao(e):e},Wm=qh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Xm={};Un(Wm+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Xm[r]=1});var jt=(function(r){fm(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ao(i))||this;var c=o.vars,l=c.duration,u=c.delay,h=c.immediateRender,f=c.stagger,d=c.overwrite,g=c.keyframes,_=c.defaults,m=c.scrollTrigger,p=i.parent||kt,v=(pn(n)||pm(n)?cr(n[0]):"length"in i)?[n]:hi(n),y,b,w,R,T,C,M,x;if(o._targets=v.length?Yh(v):To("GSAP target "+n+" not found. https://gsap.com",!Zn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||f||Go(l)||Go(u)){i=o.vars;var D=i.easeReverse||i.yoyoEase;if(y=o.timeline=new Ln({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:v}),y.kill(),y.parent=y._dp=$i(o),y._start=0,f||Go(l)||Go(u)){if(R=v.length,M=f&&Dm(f),Fi(f))for(T in f)~Wm.indexOf(T)&&(x||(x={}),x[T]=f[T]);for(b=0;b<R;b++)w=Kc(i,Xm),w.stagger=0,D&&(w.easeReverse=D),x&&la(w,x),C=v[b],w.duration=+co(l,$i(o),b,C,v),w.delay=(+co(u,$i(o),b,C,v)||0)-o._delay,!f&&R===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),y.to(C,w,M?M(b,C,v):0),y._ease=ft.none;y.duration()?l=u=0:o.timeline=0}else if(g){ao(ti(y.vars.defaults,{ease:"none"})),y._ease=fs(g.ease||i.ease||"none");var I=0,N,G,K;if(pn(g))g.forEach(function(X){return y.to(v,X,">")}),y.duration();else{w={};for(T in g)T==="ease"||T==="easeEach"||yb(T,g[T],w,g.easeEach);for(T in w)for(N=w[T].sort(function(X,W){return X.t-W.t}),I=0,b=0;b<N.length;b++)G=N[b],K={ease:G.e,duration:(G.t-(b?N[b-1].t:0))/100*l},K[T]=G.v,y.to(v,K,I),I+=K.duration;y.duration()<l&&y.to({},{duration:l-y.duration()})}}l||o.duration(l=y.duration())}else o.timeline=0;return d===!0&&!Hh&&(Er=$i(o),kt.killTweensOf(v),Er=0),Pi(p,$i(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!l&&!g&&o._start===Ot(p._time)&&In(h)&&$_($i(o))&&p.data!=="nested")&&(o._tTime=-Pt,o.render(Math.max(0,-u)||0)),m&&wm($i(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,c=this._tDur,l=this._dur,u=i<0,h=i>c-Pt&&!u?c:i<Pt?0:i,f,d,g,_,m,p,v,y;if(!l)Z_(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,y=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(f=Ot(h%_),h===c?(g=this._repeat,f=l):(m=Ot(h/_),g=~~m,g&&g===m?(f=l,g--):f>l&&(f=l)),p=this._yoyo&&g&1,p&&(f=l-f),m=ua(this._tTime,_),f===o&&!a&&this._initted&&g===m)return this._tTime=h,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(Ot(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Rm(this,u?i:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(l!==this._dur)return this.render(i,s,a)}if(this._rEase){var b=f<o;if(b!==this._inv){var w=b?o:l-o;this._inv=b,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=w?(b?-1:1)/w:0,this._invScale=b?-this.ratio:1-this.ratio,this._invEase=b?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/l);if(this._from&&(this.ratio=v=1-v),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!m&&(Qn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(v,d.d),d=d._next;y&&y.render(i<0?i:y._dur*y._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Eu(this,i,s,a),Qn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Qn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Eu(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&kr(this,1),!s&&!(u&&!o)&&(h||o||p)&&(Qn(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,c){wo||Yn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||$h(this,l),u=this._ease(l/this._dur),vb(this,i,s,a,o,u,l,c)?this.resetTo(i,s,a,o,1):(dl(this,0),this.parent||Em(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ka(this):this.scrollTrigger&&this.scrollTrigger.kill(!!an),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Er&&Er.vars.overwrite!==!0)._first||Ka(this),this.parent&&a!==this.timeline.totalDuration()&&ha(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?hi(i):o,l=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!s||s==="all")&&K_(o,c))return s==="all"&&(this._pt=0),Ka(this);for(h=this._op=this._op||[],s!=="all"&&(nn(s)&&(_={},Un(s,function(v){return _[v]=1}),s=_),s=xb(o,s)),p=o.length;p--;)if(~c.indexOf(o[p])){f=l[p],s==="all"?(h[p]=s,g=f,d={}):(d=h[p]=h[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&hl(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Ka(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return oo(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return oo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return kt.killTweensOf(i,s,a)},e})(Ro);ti(jt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Un("staggerTo,staggerFrom,staggerFromTo",function(r){jt[r]=function(){var e=new Ln,t=wu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Jh=function(e,t,n){return e[t]=n},jm=function(e,t,n){return e[t](n)},Sb=function(e,t,n,i){return e[t](i.fp,n)},Mb=function(e,t,n){return e.setAttribute(t,n)},Zh=function(e,t){return zt(e[t])?jm:Gh(e[t])&&e.setAttribute?Mb:Jh},qm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Tb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ym=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},ef=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Eb=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},Ab=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?hl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},wb=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Km=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Nn=(function(){function r(t,n,i,s,a,o,c,l,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||qm,this.d=c||this,this.set=l||Jh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=wb,this.m=n,this.mt=s,this.tween=i},r})();Un(qh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return jh[r]=1});ei.TweenMax=ei.TweenLite=jt;ei.TimelineLite=ei.TimelineMax=Ln;kt=new Ln({sortChildren:!1,defaults:Mo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Zn.stringFilter=zm;var ds=[],Lc={},Rb=[],jf=0,Cb=0,Cl=function(e){return(Lc[e]||Rb).map(function(t){return t()})},Du=function(){var e=Date.now(),t=[];e-jf>2&&(Cl("matchMediaInit"),ds.forEach(function(n){var i=n.queries,s=n.conditions,a,o,c,l;for(o in i)a=Ai.matchMedia(i[o]).matches,a&&(c=1),a!==s[o]&&(s[o]=a,l=1);l&&(n.revert(),c&&t.push(n))}),Cl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),jf=e,Cl("matchMedia"))},Qm=(function(){function r(t,n){this.selector=n&&Ru(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Cb++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){zt(n)&&(s=i,i=n,n=zt);var a=this,o=function(){var l=Ut,u=a.selector,h;return l&&l!==a&&l.data.push(a),s&&(a.selector=Ru(s)),Ut=a,h=i.apply(a,arguments),zt(h)&&a._r.push(h),Ut=l,a.selector=u,a.isReverted=!1,h};return a.last=o,n===zt?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},e.ignore=function(n){var i=Ut;Ut=null,n(this),Ut=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof jt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof Ln?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof jt)&&l.revert&&l.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=ds.length;a--;)ds[a].id===this.id&&ds.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),Pb=(function(){function r(t){this.contexts=[],this.scope=t,Ut&&Ut.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Fi(n)||(n={matches:n});var a=new Qm(0,s||this.scope),o=a.conditions={},c,l,u;Ut&&!a.selector&&(a.selector=Ut.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(l in n)l==="all"?u=1:(c=Ai.matchMedia(n[l]),c&&(ds.indexOf(a)<0&&ds.push(a),(o[l]=c.matches)&&(u=1),c.addListener?c.addListener(Du):c.addEventListener("change",Du)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),$c={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Om(i)})},timeline:function(e){return new Ln(e)},getTweensOf:function(e,t){return kt.getTweensOf(e,t)},getProperty:function(e,t,n,i){nn(e)&&(e=hi(e)[0]);var s=us(e||{}).get,a=n?Tm:Mm;return n==="native"&&(n=""),e&&(t?a((jn[t]&&jn[t].get||s)(e,t,n,i)):function(o,c,l){return a((jn[o]&&jn[o].get||s)(e,o,c,l))})},quickSetter:function(e,t,n){if(e=hi(e),e.length>1){var i=e.map(function(u){return Bn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var a=jn[t],o=us(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=a?function(u){var h=new a;Ks._pt=0,h.init(e,n?u+n:u,Ks,0,[e]),h.render(1,h),Ks._pt&&ef(1,Ks)}:o.set(e,c);return a?l:function(u){return l(e,c,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Bn.to(e,ti((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(c,l,u){return s.resetTo(t,c,l,u)};return a.tween=s,a},isTweening:function(e){return kt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=fs(e.ease,Mo.ease)),Hf(Mo,e||{})},config:function(e){return Hf(Zn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!jn[o]&&!ei[o]&&To(t+" effect requires "+o+" plugin.")}),El[t]=function(o,c,l){return n(hi(o),ti(c||{},s),l)},a&&(Ln.prototype[t]=function(o,c,l){return this.add(El[t](o,Fi(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){ft[e]=fs(t)},parseEase:function(e,t){return arguments.length?fs(e,t):ft},getById:function(e){return kt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Ln(e),i,s;for(n.smoothChildTiming=In(e.smoothChildTiming),kt.remove(n),n._dp=0,n._time=n._tTime=kt._time,i=kt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof jt&&i.vars.onComplete===i._targets[0]))&&Pi(n,i,i._start-i._delay),i=s;return Pi(kt,n,0),n},context:function(e,t){return e?new Qm(e,t):Ut},matchMedia:function(e){return new Pb(e)},matchMediaRefresh:function(){return ds.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Du()},addEventListener:function(e,t){var n=Lc[e]||(Lc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Lc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:ob,wrapYoyo:cb,distribute:Dm,random:Im,snap:Lm,normalize:ab,getUnit:fn,clamp:nb,splitColor:km,toArray:hi,selector:Ru,mapRange:Nm,pipe:rb,unitize:sb,interpolate:lb,shuffle:Pm},install:bm,effects:El,ticker:Yn,updateRoot:Ln.updateRoot,plugins:jn,globalTimeline:kt,core:{PropTween:Nn,globals:vm,Tween:jt,Timeline:Ln,Animation:Ro,getCache:us,_removeLinkedListItem:hl,reverting:function(){return an},context:function(e){return e&&Ut&&(Ut.data.push(e),e._ctx=Ut),Ut},suppressOverwrites:function(e){return Hh=e}}};Un("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return $c[r]=jt[r]});Yn.add(Ln.updateRoot);Ks=$c.to({},{duration:0});var Db=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Lb=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Db(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Pl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var c,l;if(nn(s)&&(c={},Un(s,function(u){return c[u]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}Lb(o,s)}}}},Bn=$c.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,c;this.tween=n;for(a in t)c=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(c||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)an?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Pl("roundProps",Cu),Pl("modifiers"),Pl("snap",Lm))||$c;jt.version=Ln.version=Bn.version="3.15.0";_m=1;Vh()&&fa();ft.Power0;ft.Power1;ft.Power2;ft.Power3;ft.Power4;ft.Linear;ft.Quad;ft.Cubic;ft.Quart;ft.Quint;ft.Strong;ft.Elastic;ft.Back;ft.SteppedEase;ft.Bounce;ft.Sine;ft.Expo;ft.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var qf,Ar,Zs,tf,cs,Yf,nf,Ib=function(){return typeof window<"u"},lr={},es=180/Math.PI,ea=Math.PI/180,Es=Math.atan2,Kf=1e8,rf=/([A-Z])/g,Ub=/(left|right|width|margin|padding|x)/i,Nb=/[\s,\(]\S/,Li={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Lu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Fb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ob=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},kb=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Bb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},$m=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Jm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},zb=function(e,t,n){return e.style[t]=n},Hb=function(e,t,n){return e.style.setProperty(t,n)},Gb=function(e,t,n){return e._gsap[t]=n},Vb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Wb=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Xb=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Bt="transform",Fn=Bt+"Origin",jb=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in lr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Li[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Zi(i,o)}):this.tfm[e]=a.x?a[e]:Zi(i,e),e===Fn&&(this.tfm.zOrigin=a.zOrigin);else return Li.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Bt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Fn,t,"")),e=Bt}(s||t)&&this.props.push(e,t,s[e])},Zm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},qb=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(rf,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=nf(),(!s||!s.isStart)&&!n[Bt]&&(Zm(n),i.zOrigin&&n[Fn]&&(n[Fn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},eg=function(e,t){var n={target:e,props:[],revert:qb,save:jb};return e._gsap||Bn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},tg,Iu=function(e,t){var n=Ar.createElementNS?Ar.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ar.createElement(e);return n&&n.style?n:Ar.createElement(e)},$n=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(rf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,da(t)||t,1)||""},Qf="O,Moz,ms,Ms,Webkit".split(","),da=function(e,t,n){var i=t||cs,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Qf[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Qf[a]:"")+e},Uu=function(){Ib()&&window.document&&(qf=window,Ar=qf.document,Zs=Ar.documentElement,cs=Iu("div")||{style:{}},Iu("div"),Bt=da(Bt),Fn=Bt+"Origin",cs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",tg=!!da("perspective"),nf=Bn.core.reverting,tf=1)},$f=function(e){var t=e.ownerSVGElement,n=Iu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Zs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Zs.removeChild(n),s},Jf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},ng=function(e){var t,n;try{t=e.getBBox()}catch{t=$f(e),n=1}return t&&(t.width||t.height)||n||(t=$f(e)),t&&!t.width&&!t.x&&!t.y?{x:+Jf(e,["x","cx","x1"])||0,y:+Jf(e,["y","cy","y1"])||0,width:0,height:0}:t},ig=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ng(e))},Br=function(e,t){if(t){var n=e.style,i;t in lr&&t!==Fn&&(t=Bt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(rf,"-$1").toLowerCase())):n.removeAttribute(t)}},wr=function(e,t,n,i,s,a){var o=new Nn(e._pt,t,n,0,1,a?Jm:$m);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Zf={deg:1,rad:1,turn:1},Yb={grid:1,flex:1},zr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=cs.style,c=Ub.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,m,p;if(i===a||!s||Zf[i]||Zf[a])return s;if(a!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&ig(e),(d||a==="%")&&(lr[t]||~t.indexOf("adius")))return g=p?e.getBBox()[c?"width":"height"]:e[u],Gt(d?s/g*h:s/100*g);if(o[c?"width":"height"]=h+(f?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ar||!_.appendChild)&&(_=Ar.body),m=_._gsap,m&&d&&m.width&&c&&m.time===Yn.time&&!m.uncache)return Gt(s/m.width*h);if(d&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=h+i,g=e[u],v?e.style[t]=v:Br(e,t)}else(d||a==="%")&&!Yb[$n(_,"display")]&&(o.position=$n(e,"position")),_===e&&(o.position="static"),_.appendChild(cs),g=cs[u],_.removeChild(cs),o.position="absolute";return c&&d&&(m=us(_),m.time=Yn.time,m.width=_[u]),Gt(f?g*s/h:g&&s?h/g*s:0)},Zi=function(e,t,n,i){var s;return tf||Uu(),t in Li&&t!=="transform"&&(t=Li[t],~t.indexOf(",")&&(t=t.split(",")[0])),lr[t]&&t!=="transform"?(s=Po(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Zc($n(e,Fn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Jc[t]&&Jc[t](e,t,n)||$n(e,t)||ym(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?zr(e,t,s,n)+n:s},Kb=function(e,t,n,i){if(!n||n==="none"){var s=da(t,e,1),a=s&&$n(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=$n(e,"borderTopColor"))}var o=new Nn(this._pt,e.style,t,0,1,Ym),c=0,l=0,u,h,f,d,g,_,m,p,v,y,b,w;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=$n(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=$n(e,t)||i,_?e.style[t]=_:Br(e,t)),u=[n,i],zm(u),n=u[0],i=u[1],f=n.match(Ys)||[],w=i.match(Ys)||[],w.length){for(;h=Ys.exec(i);)m=h[0],v=i.substring(c,h.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=f[l++]||"")&&(d=parseFloat(_)||0,b=_.substr((d+"").length),m.charAt(1)==="="&&(m=Js(d,m)+b),p=parseFloat(m),y=m.substr((p+"").length),c=Ys.lastIndex-y.length,y||(y=y||Zn.units[t]||b,c===i.length&&(i+=y,o.e+=y)),b!==y&&(d=zr(e,t,_,y)||0),o._pt={_next:o._pt,p:v||l===1?v:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=t==="display"&&i==="none"?Jm:$m;return gm.test(i)&&(o.e=0),this._pt=o,o},ed={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Qb=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=ed[n]||n,t[1]=ed[i]||i,t.join(" ")},$b=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)o=s[l],lr[o]&&(c=1,o=o==="transformOrigin"?Fn:Bt),Br(n,o);c&&(Br(n,Bt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Po(n,1),a.uncache=1,Zm(i)))}},Jc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Nn(e._pt,t,n,0,0,$b);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Co=[1,0,0,1,0,0],rg={},sg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},td=function(e){var t=$n(e,Bt);return sg(t)?Co:t.substr(7).match(mm).map(Gt)},sf=function(e,t){var n=e._gsap||us(e),i=e.style,s=td(e),a,o,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?Co:s):(s===Co&&!e.offsetParent&&e!==Zs&&!n.svg&&(c=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,o=e.nextElementSibling,Zs.appendChild(e)),s=td(e),c?i.display=c:Br(e,"display"),l&&(o?a.insertBefore(e,o):a?a.appendChild(e):Zs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Nu=function(e,t,n,i,s,a){var o=e._gsap,c=s||sf(e,!0),l=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=c[0],g=c[1],_=c[2],m=c[3],p=c[4],v=c[5],y=t.split(" "),b=parseFloat(y[0])||0,w=parseFloat(y[1])||0,R,T,C,M;n?c!==Co&&(T=d*m-g*_)&&(C=b*(m/T)+w*(-_/T)+(_*v-m*p)/T,M=b*(-g/T)+w*(d/T)-(d*v-g*p)/T,b=C,w=M):(R=ng(e),b=R.x+(~y[0].indexOf("%")?b/100*R.width:b),w=R.y+(~(y[1]||y[0]).indexOf("%")?w/100*R.height:w)),i||i!==!1&&o.smooth?(p=b-l,v=w-u,o.xOffset=h+(p*d+v*_)-p,o.yOffset=f+(p*g+v*m)-v):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=w,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Fn]="0px 0px",a&&(wr(a,o,"xOrigin",l,b),wr(a,o,"yOrigin",u,w),wr(a,o,"xOffset",h,o.xOffset),wr(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",b+" "+w)},Po=function(e,t){var n=e._gsap||new Gm(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",c=getComputedStyle(e),l=$n(e,Fn)||"0",u,h,f,d,g,_,m,p,v,y,b,w,R,T,C,M,x,D,I,N,G,K,X,W,F,J,P,ce,ve,Pe,Y,re;return u=h=f=_=m=p=v=y=b=0,d=g=1,n.svg=!!(e.getCTM&&ig(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Bt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Bt]!=="none"?c[Bt]:"")),i.scale=i.rotate=i.translate="none"),T=sf(e,n.svg),n.svg&&(n.uncache?(F=e.getBBox(),l=n.xOrigin-F.x+"px "+(n.yOrigin-F.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),Nu(e,W||l,!!W||n.originIsAbsolute,n.smooth!==!1,T)),w=n.xOrigin||0,R=n.yOrigin||0,T!==Co&&(D=T[0],I=T[1],N=T[2],G=T[3],u=K=T[4],h=X=T[5],T.length===6?(d=Math.sqrt(D*D+I*I),g=Math.sqrt(G*G+N*N),_=D||I?Es(I,D)*es:0,v=N||G?Es(N,G)*es+_:0,v&&(g*=Math.abs(Math.cos(v*ea))),n.svg&&(u-=w-(w*D+R*N),h-=R-(w*I+R*G))):(re=T[6],Pe=T[7],P=T[8],ce=T[9],ve=T[10],Y=T[11],u=T[12],h=T[13],f=T[14],C=Es(re,ve),m=C*es,C&&(M=Math.cos(-C),x=Math.sin(-C),W=K*M+P*x,F=X*M+ce*x,J=re*M+ve*x,P=K*-x+P*M,ce=X*-x+ce*M,ve=re*-x+ve*M,Y=Pe*-x+Y*M,K=W,X=F,re=J),C=Es(-N,ve),p=C*es,C&&(M=Math.cos(-C),x=Math.sin(-C),W=D*M-P*x,F=I*M-ce*x,J=N*M-ve*x,Y=G*x+Y*M,D=W,I=F,N=J),C=Es(I,D),_=C*es,C&&(M=Math.cos(C),x=Math.sin(C),W=D*M+I*x,F=K*M+X*x,I=I*M-D*x,X=X*M-K*x,D=W,K=F),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Gt(Math.sqrt(D*D+I*I+N*N)),g=Gt(Math.sqrt(X*X+re*re)),C=Es(K,X),v=Math.abs(C)>2e-4?C*es:0,b=Y?1/(Y<0?-Y:Y):0),n.svg&&(W=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!sg($n(e,Bt)),W&&e.setAttribute("transform",W))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(d*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Gt(d),n.scaleY=Gt(g),n.rotation=Gt(_)+o,n.rotationX=Gt(m)+o,n.rotationY=Gt(p)+o,n.skewX=v+o,n.skewY=y+o,n.transformPerspective=b+a,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Fn]=Zc(l)),n.xOffset=n.yOffset=0,n.force3D=Zn.force3D,n.renderTransform=n.svg?Zb:tg?ag:Jb,n.uncache=0,n},Zc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Dl=function(e,t,n){var i=fn(t);return Gt(parseFloat(t)+parseFloat(zr(e,"x",n+"px",i)))+i},Jb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ag(e,t)},Xr="0deg",Na="0px",jr=") ",ag=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,v=n.target,y=n.zOrigin,b="",w=p==="auto"&&e&&e!==1||p===!0;if(y&&(h!==Xr||u!==Xr)){var R=parseFloat(u)*ea,T=Math.sin(R),C=Math.cos(R),M;R=parseFloat(h)*ea,M=Math.cos(R),a=Dl(v,a,T*M*-y),o=Dl(v,o,-Math.sin(R)*-y),c=Dl(v,c,C*M*-y+y)}m!==Na&&(b+="perspective("+m+jr),(i||s)&&(b+="translate("+i+"%, "+s+"%) "),(w||a!==Na||o!==Na||c!==Na)&&(b+=c!==Na||w?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+jr),l!==Xr&&(b+="rotate("+l+jr),u!==Xr&&(b+="rotateY("+u+jr),h!==Xr&&(b+="rotateX("+h+jr),(f!==Xr||d!==Xr)&&(b+="skew("+f+", "+d+jr),(g!==1||_!==1)&&(b+="scale("+g+", "+_+jr),v.style[Bt]=b||"translate(0, 0)"},Zb=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,v=n.forceCSS,y=parseFloat(a),b=parseFloat(o),w,R,T,C,M;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=ea,l*=ea,w=Math.cos(c)*h,R=Math.sin(c)*h,T=Math.sin(c-l)*-f,C=Math.cos(c-l)*f,l&&(u*=ea,M=Math.tan(l-u),M=Math.sqrt(1+M*M),T*=M,C*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),w*=M,R*=M)),w=Gt(w),R=Gt(R),T=Gt(T),C=Gt(C)):(w=h,C=f,R=T=0),(y&&!~(a+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(y=zr(d,"x",a,"px"),b=zr(d,"y",o,"px")),(g||_||m||p)&&(y=Gt(y+g-(g*w+_*T)+m),b=Gt(b+_-(g*R+_*C)+p)),(i||s)&&(M=d.getBBox(),y=Gt(y+i/100*M.width),b=Gt(b+s/100*M.height)),M="matrix("+w+","+R+","+T+","+C+","+y+","+b+")",d.setAttribute("transform",M),v&&(d.style[Bt]=M)},e0=function(e,t,n,i,s){var a=360,o=nn(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?es:1),l=c-i,u=i+l+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),h==="cw"&&l<0?l=(l+a*Kf)%a-~~(l/a)*a:h==="ccw"&&l>0&&(l=(l-a*Kf)%a-~~(l/a)*a)),e._pt=f=new Nn(e._pt,t,n,i,l,Fb),f.e=u,f.u="deg",e._props.push(n),f},nd=function(e,t){for(var n in t)e[n]=t[n];return e},t0=function(e,t,n){var i=nd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,l,u,h,f,d,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[Bt]=t,o=Po(n,1),Br(n,Bt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Bt],a[Bt]=t,o=Po(n,1),a[Bt]=l);for(c in lr)l=i[c],u=o[c],l!==u&&s.indexOf(c)<0&&(d=fn(l),g=fn(u),h=d!==g?zr(n,c,l,g):parseFloat(l),f=parseFloat(u),e._pt=new Nn(e._pt,o,c,h,f-h,Lu),e._pt.u=g||0,e._props.push(c));nd(o,i)};Un("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Jc[e>1?"border"+r:r]=function(o,c,l,u,h){var f,d;if(arguments.length<4)return f=a.map(function(g){return Zi(o,g,l)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(c,d,h)}});var og={name:"css",register:Uu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,c=n.vars.startAt,l,u,h,f,d,g,_,m,p,v,y,b,w,R,T,C,M;tf||Uu(),this.styles=this.styles||eg(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(jn[_]&&Vm(_,t,n,i,e,s)))){if(d=typeof u,g=Jc[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Ao(u)),g)g(this,e,_,u,n)&&(T=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Nr.lastIndex=0,Nr.test(l)||(m=fn(l),p=fn(u),p?m!==p&&(l=zr(e,_,l,p)+p):m&&(u+=m)),this.add(o,"setProperty",l,u,i,s,0,0,_),a.push(_),C.push(_,0,o[_]);else if(d!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,i,e,s):c[_],nn(l)&&~l.indexOf("random(")&&(l=Ao(l)),fn(l+"")||l==="auto"||(l+=Zn.units[_]||fn(Zi(e,_))||""),(l+"").charAt(1)==="="&&(l=Zi(e,_))):l=Zi(e,_),f=parseFloat(l),v=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),h=parseFloat(u),_ in Li&&(_==="autoAlpha"&&(f===1&&Zi(e,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,o.visibility),wr(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Li[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in lr,y){if(this.styles.save(_),M=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=$n(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var x=e.style.perspective;e.style.perspective=u,u=$n(e,"perspective"),x?e.style.perspective=x:Br(e,"perspective")}h=parseFloat(u)}if(b||(w=e._gsap,w.renderTransform&&!t.parseTransform||Po(e,t.parseTransform),R=t.smoothOrigin!==!1&&w.smooth,b=this._pt=new Nn(this._pt,o,Bt,0,1,w.renderTransform,w,0,-1),b.dep=1),_==="scale")this._pt=new Nn(this._pt,w,"scaleY",w.scaleY,(v?Js(w.scaleY,v+h):h)-w.scaleY||0,Lu),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Fn,0,o[Fn]),u=Qb(u),w.svg?Nu(e,u,0,R,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==w.zOrigin&&wr(this,w,"zOrigin",w.zOrigin,p),wr(this,o,_,Zc(l),Zc(u)));continue}else if(_==="svgOrigin"){Nu(e,u,1,R,0,this);continue}else if(_ in rg){e0(this,w,_,f,v?Js(f,v+u):u);continue}else if(_==="smoothOrigin"){wr(this,w,"smooth",w.smooth,u);continue}else if(_==="force3D"){w[_]=u;continue}else if(_==="transform"){t0(this,u,e);continue}}else _ in o||(_=da(_)||_);if(y||(h||h===0)&&(f||f===0)&&!Nb.test(u)&&_ in o)m=(l+"").substr((f+"").length),h||(h=0),p=fn(u)||(_ in Zn.units?Zn.units[_]:m),m!==p&&(f=zr(e,_,l,p)),this._pt=new Nn(this._pt,y?w:o,_,f,(v?Js(f,v+h):h)-f,!y&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?Bb:Lu),this._pt.u=p||0,y&&M!==u?(this._pt.b=l,this._pt.e=M,this._pt.r=kb):m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=Ob);else if(_ in o)Kb.call(this,e,_,l,v?v+u:u);else if(_ in e)this.add(e,_,l||e[_],v?v+u:u,i,s);else if(_!=="parseTransform"){Xh(_,u);continue}y||(_ in o?C.push(_,0,o[_]):typeof e[_]=="function"?C.push(_,2,e[_]()):C.push(_,1,l||e[_])),a.push(_)}}T&&Km(this)},render:function(e,t){if(t.tween._time||!nf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Zi,aliases:Li,getSetter:function(e,t,n){var i=Li[t];return i&&i.indexOf(",")<0&&(t=i),t in lr&&t!==Fn&&(e._gsap.x||Zi(e,"x"))?n&&Yf===n?t==="scale"?Vb:Gb:(Yf=n||{})&&(t==="scale"?Wb:Xb):e.style&&!Gh(e.style[t])?zb:~t.indexOf("-")?Hb:Zh(e,t)},core:{_removeProperty:Br,_getMatrix:sf}};Bn.utils.checkPrefix=da;Bn.core.getStyleSaver=eg;(function(r,e,t,n){var i=Un(r+","+e+","+t,function(s){lr[s]=1});Un(e,function(s){Zn.units[s]="deg",rg[s]=1}),Li[i[13]]=r+","+e,Un(n,function(s){var a=s.split(":");Li[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Zn.units[r]="px"});Bn.registerPlugin(og);var ht=Bn.registerPlugin(og)||Bn;ht.core.Tween;function n0(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function i0(r,e,t){return e&&n0(r.prototype,e),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var sn,Ic,Kn,Rr,Cr,ta,cg,ts,na,lg,tr,bi,ug,hg=function(){return sn||typeof window<"u"&&(sn=window.gsap)&&sn.registerPlugin&&sn},fg=1,Qs=[],ct=[],Ui=[],lo=Date.now,Fu=function(e,t){return t},r0=function(){var e=na.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ct),i.push.apply(i,Ui),ct=n,Ui=i,Fu=function(a,o){return t[a](o)}},Fr=function(e,t){return~Ui.indexOf(e)&&Ui[Ui.indexOf(e)+1][t]},uo=function(e){return!!~lg.indexOf(e)},vn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},_n=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Vo="scrollLeft",Wo="scrollTop",Ou=function(){return tr&&tr.isPressed||ct.cache++},el=function(e,t){var n=function i(s){if(s||s===0){fg&&(Kn.history.scrollRestoration="manual");var a=tr&&tr.isPressed;s=i.v=Math.round(s)||(tr&&tr.iOS?1:0),e(s),i.cacheID=ct.cache,a&&Fu("ss",s)}else(t||ct.cache!==i.cacheID||Fu("ref"))&&(i.cacheID=ct.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},An={s:Vo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:el(function(r){return arguments.length?Kn.scrollTo(r,Kt.sc()):Kn.pageXOffset||Rr[Vo]||Cr[Vo]||ta[Vo]||0})},Kt={s:Wo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:An,sc:el(function(r){return arguments.length?Kn.scrollTo(An.sc(),r):Kn.pageYOffset||Rr[Wo]||Cr[Wo]||ta[Wo]||0})},Dn=function(e,t){return(t&&t._ctx&&t._ctx.selector||sn.utils.toArray)(e)[0]||(typeof e=="string"&&sn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},s0=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Hr=function(e,t){var n=t.s,i=t.sc;uo(e)&&(e=Rr.scrollingElement||Cr);var s=ct.indexOf(e),a=i===Kt.sc?1:2;!~s&&(s=ct.push(e)-1),ct[s+a]||vn(e,"scroll",Ou);var o=ct[s+a],c=o||(ct[s+a]=el(Fr(e,n),!0)||(uo(e)?i:el(function(l){return arguments.length?e[n]=l:e[n]})));return c.target=e,o||(c.smooth=sn.getProperty(e,"scrollBehavior")==="smooth"),c},ku=function(e,t,n){var i=e,s=e,a=lo(),o=a,c=t||50,l=Math.max(500,c*3),u=function(g,_){var m=lo();_||m-a>c?(s=i,i=g,o=a,a=m):n?i+=g:i=s+(g-s)/(m-o)*(a-o)},h=function(){s=i=n?0:i,o=a=0},f=function(g){var _=o,m=s,p=lo();return(g||g===0)&&g!==i&&u(g),a===o||p-o>l?0:(i+(n?m:-m))/((n?p:a)-_)*1e3};return{update:u,reset:h,getVelocity:f}},Fa=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},id=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},dg=function(){na=sn.core.globals().ScrollTrigger,na&&na.core&&r0()},pg=function(e){return sn=e||hg(),!Ic&&sn&&typeof document<"u"&&document.body&&(Kn=window,Rr=document,Cr=Rr.documentElement,ta=Rr.body,lg=[Kn,Rr,Cr,ta],sn.utils.clamp,ug=sn.core.context||function(){},ts="onpointerenter"in ta?"pointer":"mouse",cg=Vt.isTouch=Kn.matchMedia&&Kn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Kn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,bi=Vt.eventTypes=("ontouchstart"in Cr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Cr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return fg=0},500),Ic=1),na||dg(),Ic};An.op=Kt;ct.cache=0;var Vt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Ic||pg(sn)||console.warn("Please gsap.registerPlugin(Observer)"),na||dg();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,c=n.lineHeight,l=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,v=n.onDrag,y=n.onPress,b=n.onRelease,w=n.onRight,R=n.onLeft,T=n.onUp,C=n.onDown,M=n.onChangeX,x=n.onChangeY,D=n.onChange,I=n.onToggleX,N=n.onToggleY,G=n.onHover,K=n.onHoverEnd,X=n.onMove,W=n.ignoreCheck,F=n.isNormalizer,J=n.onGestureStart,P=n.onGestureEnd,ce=n.onWheel,ve=n.onEnable,Pe=n.onDisable,Y=n.onClick,re=n.scrollSpeed,_e=n.capture,ue=n.allowClicks,Ee=n.lockAxis,De=n.onLockAxis;this.target=o=Dn(o)||Cr,this.vars=n,d&&(d=sn.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,re=re||1,a=a||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(Kn.getComputedStyle(ta).lineHeight)||22);var Ge,$e,Oe,Ue,k,mt,ze,V=this,Ae=0,ie=0,U=n.passive||!u&&n.passive!==!1,E=Hr(o,An),S=Hr(o,Kt),O=E(),Q=S(),Z=~a.indexOf("touch")&&!~a.indexOf("pointer")&&bi[0]==="pointerdown",te=uo(o),ae=o.ownerDocument||Rr,oe=[0,0,0],le=[0,0,0],Me=0,se=function(){return Me=lo()},ne=function(Ce,Je){return(V.event=Ce)&&d&&s0(Ce.target,d)||Je&&Z&&Ce.pointerType!=="touch"||W&&W(Ce,Je)},Ne=function(){V._vx.reset(),V._vy.reset(),$e.pause(),h&&h(V)},Le=function(){var Ce=V.deltaX=id(oe),Je=V.deltaY=id(le),ye=Math.abs(Ce)>=i,Xe=Math.abs(Je)>=i;D&&(ye||Xe)&&D(V,Ce,Je,oe,le),ye&&(w&&V.deltaX>0&&w(V),R&&V.deltaX<0&&R(V),M&&M(V),I&&V.deltaX<0!=Ae<0&&I(V),Ae=V.deltaX,oe[0]=oe[1]=oe[2]=0),Xe&&(C&&V.deltaY>0&&C(V),T&&V.deltaY<0&&T(V),x&&x(V),N&&V.deltaY<0!=ie<0&&N(V),ie=V.deltaY,le[0]=le[1]=le[2]=0),(Ue||Oe)&&(X&&X(V),Oe&&(m&&Oe===1&&m(V),v&&v(V),Oe=0),Ue=!1),mt&&!(mt=!1)&&De&&De(V),k&&(ce(V),k=!1),Ge=0},be=function(Ce,Je,ye){oe[ye]+=Ce,le[ye]+=Je,V._vx.update(Ce),V._vy.update(Je),l?Ge||(Ge=requestAnimationFrame(Le)):Le()},qe=function(Ce,Je){Ee&&!ze&&(V.axis=ze=Math.abs(Ce)>Math.abs(Je)?"x":"y",mt=!0),ze!=="y"&&(oe[2]+=Ce,V._vx.update(Ce,!0)),ze!=="x"&&(le[2]+=Je,V._vy.update(Je,!0)),l?Ge||(Ge=requestAnimationFrame(Le)):Le()},ke=function(Ce){if(!ne(Ce,1)){Ce=Fa(Ce,u);var Je=Ce.clientX,ye=Ce.clientY,Xe=Je-V.x,Ie=ye-V.y,We=V.isDragging;V.x=Je,V.y=ye,(We||(Xe||Ie)&&(Math.abs(V.startX-Je)>=s||Math.abs(V.startY-ye)>=s))&&(Oe||(Oe=We?2:1),We||(V.isDragging=!0),qe(Xe,Ie))}},st=V.onPress=function(xe){ne(xe,1)||xe&&xe.button||(V.axis=ze=null,$e.pause(),V.isPressed=!0,xe=Fa(xe),Ae=ie=0,V.startX=V.x=xe.clientX,V.startY=V.y=xe.clientY,V._vx.reset(),V._vy.reset(),vn(F?o:ae,bi[1],ke,U,!0),V.deltaX=V.deltaY=0,y&&y(V))},L=V.onRelease=function(xe){if(!ne(xe,1)){_n(F?o:ae,bi[1],ke,!0);var Ce=!isNaN(V.y-V.startY),Je=V.isDragging,ye=Je&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),Xe=Fa(xe);!ye&&Ce&&(V._vx.reset(),V._vy.reset(),u&&ue&&sn.delayedCall(.08,function(){if(lo()-Me>300&&!xe.defaultPrevented){if(xe.target.click)xe.target.click();else if(ae.createEvent){var Ie=ae.createEvent("MouseEvents");Ie.initMouseEvent("click",!0,!0,Kn,1,Xe.screenX,Xe.screenY,Xe.clientX,Xe.clientY,!1,!1,!1,!1,0,null),xe.target.dispatchEvent(Ie)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,h&&Je&&!F&&$e.restart(!0),Oe&&Le(),p&&Je&&p(V),b&&b(V,ye)}},me=function(Ce){return Ce.touches&&Ce.touches.length>1&&(V.isGesturing=!0)&&J(Ce,V.isDragging)},$=function(){return(V.isGesturing=!1)||P(V)},ee=function(Ce){if(!ne(Ce)){var Je=E(),ye=S();be((Je-O)*re,(ye-Q)*re,1),O=Je,Q=ye,h&&$e.restart(!0)}},he=function(Ce){if(!ne(Ce)){Ce=Fa(Ce,u),ce&&(k=!0);var Je=(Ce.deltaMode===1?c:Ce.deltaMode===2?Kn.innerHeight:1)*g;be(Ce.deltaX*Je,Ce.deltaY*Je,0),h&&!F&&$e.restart(!0)}},pe=function(Ce){if(!ne(Ce)){var Je=Ce.clientX,ye=Ce.clientY,Xe=Je-V.x,Ie=ye-V.y;V.x=Je,V.y=ye,Ue=!0,h&&$e.restart(!0),(Xe||Ie)&&qe(Xe,Ie)}},Be=function(Ce){V.event=Ce,G(V)},Ke=function(Ce){V.event=Ce,K(V)},At=function(Ce){return ne(Ce)||Fa(Ce,u)&&Y(V)};$e=V._dc=sn.delayedCall(f||.25,Ne).pause(),V.deltaX=V.deltaY=0,V._vx=ku(0,50,!0),V._vy=ku(0,50,!0),V.scrollX=E,V.scrollY=S,V.isDragging=V.isGesturing=V.isPressed=!1,ug(this),V.enable=function(xe){return V.isEnabled||(vn(te?ae:o,"scroll",Ou),a.indexOf("scroll")>=0&&vn(te?ae:o,"scroll",ee,U,_e),a.indexOf("wheel")>=0&&vn(o,"wheel",he,U,_e),(a.indexOf("touch")>=0&&cg||a.indexOf("pointer")>=0)&&(vn(o,bi[0],st,U,_e),vn(ae,bi[2],L),vn(ae,bi[3],L),ue&&vn(o,"click",se,!0,!0),Y&&vn(o,"click",At),J&&vn(ae,"gesturestart",me),P&&vn(ae,"gestureend",$),G&&vn(o,ts+"enter",Be),K&&vn(o,ts+"leave",Ke),X&&vn(o,ts+"move",pe)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=Ue=Oe=!1,V._vx.reset(),V._vy.reset(),O=E(),Q=S(),xe&&xe.type&&st(xe),ve&&ve(V)),V},V.disable=function(){V.isEnabled&&(Qs.filter(function(xe){return xe!==V&&uo(xe.target)}).length||_n(te?ae:o,"scroll",Ou),V.isPressed&&(V._vx.reset(),V._vy.reset(),_n(F?o:ae,bi[1],ke,!0)),_n(te?ae:o,"scroll",ee,_e),_n(o,"wheel",he,_e),_n(o,bi[0],st,_e),_n(ae,bi[2],L),_n(ae,bi[3],L),_n(o,"click",se,!0),_n(o,"click",At),_n(ae,"gesturestart",me),_n(ae,"gestureend",$),_n(o,ts+"enter",Be),_n(o,ts+"leave",Ke),_n(o,ts+"move",pe),V.isEnabled=V.isPressed=V.isDragging=!1,Pe&&Pe(V))},V.kill=V.revert=function(){V.disable();var xe=Qs.indexOf(V);xe>=0&&Qs.splice(xe,1),tr===V&&(tr=0)},Qs.push(V),F&&uo(o)&&(tr=V),V.enable(_)},i0(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Vt.version="3.15.0";Vt.create=function(r){return new Vt(r)};Vt.register=pg;Vt.getAll=function(){return Qs.slice()};Vt.getById=function(r){return Qs.filter(function(e){return e.vars.id===r})[0]};hg()&&sn.registerPlugin(Vt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var we,js,ot,St,qn,yt,af,tl,Do,ho,$a,Xo,ln,pl,Bu,Mn,rd,sd,qs,mg,Ll,gg,Sn,zu,_g,bg,Sr,Hu,of,ia,cf,fo,Gu,Il,jo=1,un=Date.now,Ul=un(),di=0,Ja=0,ad=function(e,t,n){var i=Xn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},od=function(e,t){return t&&(!Xn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},a0=function r(){return Ja&&requestAnimationFrame(r)},cd=function(){return pl=1},ld=function(){return pl=0},wi=function(e){return e},Za=function(e){return Math.round(e*1e5)/1e5||0},vg=function(){return typeof window<"u"},xg=function(){return we||vg()&&(we=window.gsap)&&we.registerPlugin&&we},bs=function(e){return!!~af.indexOf(e)},yg=function(e){return(e==="Height"?cf:ot["inner"+e])||qn["client"+e]||yt["client"+e]},Sg=function(e){return Fr(e,"getBoundingClientRect")||(bs(e)?function(){return kc.width=ot.innerWidth,kc.height=cf,kc}:function(){return er(e)})},o0=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=Fr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?yg(s):e["client"+s])||0}},c0=function(e,t){return!t||~Ui.indexOf(e)?Sg(e):function(){return kc}},Ii=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Fr(e,n))?a()-Sg(e)()[s]:bs(e)?(qn[n]||yt[n])-yg(i):e[n]-e["offset"+i])},qo=function(e,t){for(var n=0;n<qs.length;n+=3)(!t||~t.indexOf(qs[n+1]))&&e(qs[n],qs[n+1],qs[n+2])},Xn=function(e){return typeof e=="string"},dn=function(e){return typeof e=="function"},eo=function(e){return typeof e=="number"},ns=function(e){return typeof e=="object"},Oa=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},As=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},ws=Math.abs,Mg="left",Tg="top",lf="right",uf="bottom",ps="width",ms="height",po="Right",mo="Left",go="Top",_o="Bottom",Xt="padding",oi="margin",pa="Width",hf="Height",Yt="px",ci=function(e){return ot.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},l0=function(e){var t=ci(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},ud=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},er=function(e,t){var n=t&&ci(e)[Bu]!=="matrix(1, 0, 0, 1, 0, 0)"&&we.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},nl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Eg=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},u0=function(e){return function(t){return we.utils.snap(Eg(e),t)}},ff=function(e){var t=we.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},h0=function(e){return function(t,n){return ff(Eg(e))(t,n.direction)}},Yo=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},tn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},en=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ko=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},hd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Qo={toggleActions:"play",anticipatePin:0},il={top:0,left:0,center:.5,bottom:1,right:1},Uc=function(e,t){if(Xn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in il?il[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},$o=function(e,t,n,i,s,a,o,c){var l=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=St.createElement("div"),_=bs(n)||Fr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?yt:n.tagName==="IFRAME"?n.contentDocument.body:n,v=e.indexOf("start")!==-1,y=v?l:u,b="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+((m||c)&&_?"fixed;":"absolute;"),(m||c||!_)&&(b+=(i===Kt?lf:uf)+":"+(a+parseFloat(f))+"px;"),o&&(b+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=b,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Nc(g,0,i,v),g},Nc=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+pa]=1,s["border"+o+pa]=0,s[n.p]=t+"px",we.set(e,s)},rt=[],Vu={},Lo,fd=function(){return un()-di>34&&(Lo||(Lo=requestAnimationFrame(rr)))},Rs=function(){(!Sn||!Sn.isPressed||Sn.startX>yt.clientWidth)&&(ct.cache++,Sn?Lo||(Lo=requestAnimationFrame(rr)):rr(),di||xs("scrollStart"),di=un())},Nl=function(){bg=ot.innerWidth,_g=ot.innerHeight},to=function(e){ct.cache++,(e===!0||!ln&&!gg&&!St.fullscreenElement&&!St.webkitFullscreenElement&&(!zu||bg!==ot.innerWidth||Math.abs(ot.innerHeight-_g)>ot.innerHeight*.25))&&tl.restart(!0)},vs={},f0=[],Ag=function r(){return en(it,"scrollEnd",r)||ls(!0)},xs=function(e){return vs[e]&&vs[e].map(function(t){return t()})||f0},Wn=[],wg=function(e){for(var t=0;t<Wn.length;t+=5)(!e||Wn[t+4]&&Wn[t+4].query===e)&&(Wn[t].style.cssText=Wn[t+1],Wn[t].getBBox&&Wn[t].setAttribute("transform",Wn[t+2]||""),Wn[t+3].uncache=1)},Rg=function(){return ct.forEach(function(e){return dn(e)&&++e.cacheID&&(e.rec=e())})},df=function(e,t){var n;for(Mn=0;Mn<rt.length;Mn++)n=rt[Mn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));fo=!0,t&&wg(t),t||xs("revert")},Cg=function(e,t){ct.cache++,(t||!Tn)&&ct.forEach(function(n){return dn(n)&&n.cacheID++&&(n.rec=0)}),Xn(e)&&(ot.history.scrollRestoration=of=e)},Tn,gs=0,dd,d0=function(){if(dd!==gs){var e=dd=gs;requestAnimationFrame(function(){return e===gs&&ls(!0)})}},Pg=function(){yt.appendChild(ia),cf=!Sn&&ia.offsetHeight||ot.innerHeight,yt.removeChild(ia)},pd=function(e){return Do(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ls=function(e,t){if(qn=St.documentElement,yt=St.body,af=[ot,St,qn,yt],di&&!e&&!fo){tn(it,"scrollEnd",Ag);return}Pg(),Tn=it.isRefreshing=!0,fo||Rg();var n=xs("refreshInit");mg&&it.sort(),t||df(),ct.forEach(function(i){dn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),rt.slice(0).forEach(function(i){return i.refresh()}),fo=!1,rt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Gu=1,pd(!0),rt.forEach(function(i){var s=Ii(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),pd(!1),Gu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ct.forEach(function(i){dn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Cg(of,1),tl.pause(),gs++,Tn=2,rr(2),rt.forEach(function(i){return dn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Tn=it.isRefreshing=!1,xs("refresh")},Wu=0,Fc=1,bo,rr=function(e){if(e===2||!Tn&&!fo){it.isUpdating=!0,bo&&bo.update(0);var t=rt.length,n=un(),i=n-Ul>=50,s=t&&rt[0].scroll();if(Fc=Wu>s?-1:1,Tn||(Wu=s),i&&(di&&!pl&&n-di>200&&(di=0,xs("scrollEnd")),$a=Ul,Ul=n),Fc<0){for(Mn=t;Mn-- >0;)rt[Mn]&&rt[Mn].update(0,i);Fc=1}else for(Mn=0;Mn<t;Mn++)rt[Mn]&&rt[Mn].update(0,i);it.isUpdating=!1}Lo=0},Xu=[Mg,Tg,uf,lf,oi+_o,oi+po,oi+go,oi+mo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Oc=Xu.concat([ps,ms,"boxSizing","max"+pa,"max"+hf,"position",oi,Xt,Xt+go,Xt+po,Xt+_o,Xt+mo]),p0=function(e,t,n){ra(n);var i=e._gsap;if(i.spacerIsNative)ra(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Fl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Xu.length,a=t.style,o=e.style,c;s--;)c=Xu[s],a[c]=n[c];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[uf]=o[lf]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[ps]=nl(e,An)+Yt,a[ms]=nl(e,Kt)+Yt,a[Xt]=o[oi]=o[Tg]=o[Mg]="0",ra(i),o[ps]=o["max"+pa]=n[ps],o[ms]=o["max"+hf]=n[ms],o[Xt]=n[Xt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},m0=/([A-Z])/g,ra=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||we.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(m0,"-$1").toLowerCase())}},Jo=function(e){for(var t=Oc.length,n=e.style,i=[],s=0;s<t;s++)i.push(Oc[s],n[Oc[s]]);return i.t=e,i},g0=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},kc={left:0,top:0},md=function(e,t,n,i,s,a,o,c,l,u,h,f,d,g){dn(e)&&(e=e(c)),Xn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Uc("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,v;if(d&&d.seek(0),isNaN(e)||(e=+e),eo(e))d&&(e=we.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),o&&Nc(o,n,i,!0);else{dn(t)&&(t=t(c));var y=(e||"0").split(" "),b,w,R,T;v=Dn(t,c)||yt,b=er(v)||{},(!b||!b.left&&!b.top)&&ci(v).display==="none"&&(T=v.style.display,v.style.display="block",b=er(v),T?v.style.display=T:v.style.removeProperty("display")),w=Uc(y[0],b[i.d]),R=Uc(y[1]||"0",n),e=b[i.p]-l[i.p]-u+w+s-R,o&&Nc(o,R,i,n-R<20||o._isStart&&R>20),n-=n-R}if(g&&(c[g]=e||-.001,e<0&&(e=0)),a){var C=e+n,M=a._isStart;m="scroll"+i.d2,Nc(a,C,i,M&&C>20||!M&&(h?Math.max(yt[m],qn[m]):a.parentNode[m])<=C+1),h&&(l=er(o),h&&(a.style[i.op.p]=l[i.op.p]-i.op.m-a._offset+Yt))}return d&&v&&(m=er(v),d.seek(f),p=er(v),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},_0=/(webkit|moz|length|cssText|inset)/i,gd=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===yt){e._stOrig=s.cssText,o=ci(e);for(a in o)!+a&&!_0.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;we.core.getCache(e).uncache=1,t.appendChild(e)}},Dg=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Zo=function(e,t,n){var i={};i[t.p]="+="+n,we.set(e,i)},_d=function(e,t){var n=Hr(e,t),i="_scroll"+t.p2,s=function a(o,c,l,u,h){var f=a.tween,d=c.onComplete,g={};l=l||n();var _=Dg(n,l,function(){f.kill(),a.tween=0});return h=u&&h||0,u=u||o-l,f&&f.kill(),c[i]=o,c.inherit=!1,c.modifiers=g,g[i]=function(){return _(l+u*f.ratio+h*f.ratio*f.ratio)},c.onUpdate=function(){ct.cache++,a.tween&&rr()},c.onComplete=function(){a.tween=0,d&&d.call(f)},f=a.tween=we.to(e,c),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},tn(e,"wheel",n.wheelHandler),it.isTouch&&tn(e,"touchmove",n.wheelHandler),s},it=(function(){function r(t,n){js||r.register(we)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Hu(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ja){this.update=this.refresh=this.kill=wi;return}n=ud(Xn(n)||eo(n)||n.nodeType?{trigger:n}:n,Qo);var s=n,a=s.onUpdate,o=s.toggleClass,c=s.id,l=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,v=s.onSnapComplete,y=s.once,b=s.snap,w=s.pinReparent,R=s.pinSpacer,T=s.containerAnimation,C=s.fastScrollEnd,M=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?An:Kt,D=!h&&h!==0,I=Dn(n.scroller||ot),N=we.core.getCache(I),G=bs(I),K=("pinType"in n?n.pinType:Fr(I,"pinType")||G&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],W=D&&n.toggleActions.split(" "),F="markers"in n?n.markers:Qo.markers,J=G?0:parseFloat(ci(I)["border"+x.p2+pa])||0,P=this,ce=n.onRefreshInit&&function(){return n.onRefreshInit(P)},ve=o0(I,G,x),Pe=c0(I,G),Y=0,re=0,_e=0,ue=Hr(I,x),Ee,De,Ge,$e,Oe,Ue,k,mt,ze,V,Ae,ie,U,E,S,O,Q,Z,te,ae,oe,le,Me,se,ne,Ne,Le,be,qe,ke,st,L,me,$,ee,he,pe,Be,Ke;if(P._startClamp=P._endClamp=!1,P._dir=x,m*=45,P.scroller=I,P.scroll=T?T.time.bind(T):ue,$e=ue(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(mg=1,n.refreshPriority===-9999&&(bo=P)),N.tweenScroll=N.tweenScroll||{top:_d(I,Kt),left:_d(I,An)},P.tweenTo=Ee=N.tweenScroll[x.p],P.scrubDuration=function(ye){me=eo(ye)&&ye,me?L?L.duration(ye):L=we.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:me,paused:!0,onComplete:function(){return p&&p(P)}}):(L&&L.progress(1).kill(),L=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(h),ke=0,c||(c=i.vars.id)),b&&((!ns(b)||b.push)&&(b={snapTo:b}),"scrollBehavior"in yt.style&&we.set(G?[yt,qn]:I,{scrollBehavior:"auto"}),ct.forEach(function(ye){return dn(ye)&&ye.target===(G?St.scrollingElement||qn:I)&&(ye.smooth=!1)}),Ge=dn(b.snapTo)?b.snapTo:b.snapTo==="labels"?u0(i):b.snapTo==="labelsDirectional"?h0(i):b.directional!==!1?function(ye,Xe){return ff(b.snapTo)(ye,un()-re<500?0:Xe.direction)}:we.utils.snap(b.snapTo),$=b.duration||{min:.1,max:2},$=ns($)?ho($.min,$.max):ho($,$),ee=we.delayedCall(b.delay||me/2||.1,function(){var ye=ue(),Xe=un()-re<500,Ie=Ee.tween;if((Xe||Math.abs(P.getVelocity())<10)&&!Ie&&!pl&&Y!==ye){var We=(ye-Ue)/E,Ht=i&&!D?i.totalProgress():We,at=Xe?0:(Ht-st)/(un()-$a)*1e3||0,Dt=we.utils.clamp(-We,1-We,ws(at/2)*at/.185),qt=We+(b.inertia===!1?0:Dt),wt,Rt,gt=b,zn=gt.onStart,Lt=gt.onInterrupt,gn=gt.onComplete;if(wt=Ge(qt,P),eo(wt)||(wt=qt),Rt=Math.max(0,Math.round(Ue+wt*E)),ye<=k&&ye>=Ue&&Rt!==ye){if(Ie&&!Ie._initted&&Ie.data<=ws(Rt-ye))return;b.inertia===!1&&(Dt=wt-We),Ee(Rt,{duration:$(ws(Math.max(ws(qt-Ht),ws(wt-Ht))*.185/at/.05||0)),ease:b.ease||"power3",data:ws(Rt-ye),onInterrupt:function(){return ee.restart(!0)&&Lt&&As(P,Lt)},onComplete:function(){P.update(),Y=ue(),i&&!D&&(L?L.resetTo("totalProgress",wt,i._tTime/i._tDur):i.progress(wt)),ke=st=i&&!D?i.totalProgress():P.progress,v&&v(P),gn&&As(P,gn)}},ye,Dt*E,Rt-ye-Dt*E),zn&&As(P,zn,Ee.tween)}}else P.isActive&&Y!==ye&&ee.restart(!0)}).pause()),c&&(Vu[c]=P),f=P.trigger=Dn(f||d!==!0&&d),Ke=f&&f._gsap&&f._gsap.stRevert,Ke&&(Ke=Ke(P)),d=d===!0?f:Dn(d),Xn(o)&&(o={targets:f,className:o}),d&&(g===!1||g===oi||(g=!g&&d.parentNode&&d.parentNode.style&&ci(d.parentNode).display==="flex"?!1:Xt),P.pin=d,De=we.core.getCache(d),De.spacer?S=De.pinState:(R&&(R=Dn(R),R&&!R.nodeType&&(R=R.current||R.nativeElement),De.spacerIsNative=!!R,R&&(De.spacerState=Jo(R))),De.spacer=Z=R||St.createElement("div"),Z.classList.add("pin-spacer"),c&&Z.classList.add("pin-spacer-"+c),De.pinState=S=Jo(d)),n.force3D!==!1&&we.set(d,{force3D:!0}),P.spacer=Z=De.spacer,qe=ci(d),se=qe[g+x.os2],ae=we.getProperty(d),oe=we.quickSetter(d,x.a,Yt),Fl(d,Z,qe),Q=Jo(d)),F){ie=ns(F)?ud(F,hd):hd,V=$o("scroller-start",c,I,x,ie,0),Ae=$o("scroller-end",c,I,x,ie,0,V),te=V["offset"+x.op.d2];var At=Dn(Fr(I,"content")||I);mt=this.markerStart=$o("start",c,At,x,ie,te,0,T),ze=this.markerEnd=$o("end",c,At,x,ie,te,0,T),T&&(Be=we.quickSetter([mt,ze],x.a,Yt)),!K&&!(Ui.length&&Fr(I,"fixedMarkers")===!0)&&(l0(G?yt:I),we.set([V,Ae],{force3D:!0}),Ne=we.quickSetter(V,x.a,Yt),be=we.quickSetter(Ae,x.a,Yt))}if(T){var xe=T.vars.onUpdate,Ce=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){P.update(0,0,1),xe&&xe.apply(T,Ce||[])})}if(P.previous=function(){return rt[rt.indexOf(P)-1]},P.next=function(){return rt[rt.indexOf(P)+1]},P.revert=function(ye,Xe){if(!Xe)return P.kill(!0);var Ie=ye!==!1||!P.enabled,We=ln;Ie!==P.isReverted&&(Ie&&(he=Math.max(ue(),P.scroll.rec||0),_e=P.progress,pe=i&&i.progress()),mt&&[mt,ze,V,Ae].forEach(function(Ht){return Ht.style.display=Ie?"none":"block"}),Ie&&(ln=P,P.update(Ie)),d&&(!w||!P.isActive)&&(Ie?p0(d,Z,S):Fl(d,Z,ci(d),ne)),Ie||P.update(Ie),ln=We,P.isReverted=Ie)},P.refresh=function(ye,Xe,Ie,We){if(!((ln||!P.enabled)&&!Xe)){if(d&&ye&&di){tn(r,"scrollEnd",Ag);return}!Tn&&ce&&ce(P),ln=P,Ee.tween&&!Ie&&(Ee.tween.kill(),Ee.tween=0),L&&L.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Ft){return Ft.vars.immediateRender&&Ft.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Ht=ve(),at=Pe(),Dt=T?T.duration():Ii(I,x),qt=E<=.01||!E,wt=0,Rt=We||0,gt=ns(Ie)?Ie.end:n.end,zn=n.endTrigger||f,Lt=ns(Ie)?Ie.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),gn=P.pinnedContainer=n.pinnedContainer&&Dn(n.pinnedContainer,P),A=f&&Math.max(0,rt.indexOf(P))||0,B=A,j,q,z,fe,de,ge,Te,Ve,Ye,Re,Qe,dt,_t;for(F&&ns(Ie)&&(dt=we.getProperty(V,x.p),_t=we.getProperty(Ae,x.p));B-- >0;)ge=rt[B],ge.end||ge.refresh(0,1)||(ln=P),Te=ge.pin,Te&&(Te===f||Te===d||Te===gn)&&!ge.isReverted&&(Re||(Re=[]),Re.unshift(ge),ge.revert(!0,!0)),ge!==rt[B]&&(A--,B--);for(dn(Lt)&&(Lt=Lt(P)),Lt=ad(Lt,"start",P),Ue=md(Lt,f,Ht,x,ue(),mt,V,P,at,J,K,Dt,T,P._startClamp&&"_startClamp")||(d?-.001:0),dn(gt)&&(gt=gt(P)),Xn(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=(Xn(Lt)?Lt.split(" ")[0]:"")+gt:(wt=Uc(gt.substr(2),Ht),gt=Xn(Lt)?Lt:(T?we.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,Ue):Ue)+wt,zn=f)),gt=ad(gt,"end",P),k=Math.max(Ue,md(gt||(zn?"100% 0":Dt),zn,Ht,x,ue()+wt,ze,Ae,P,at,J,K,Dt,T,P._endClamp&&"_endClamp"))||-.001,wt=0,B=A;B--;)ge=rt[B]||{},Te=ge.pin,Te&&ge.start-ge._pinPush<=Ue&&!T&&ge.end>0&&(j=ge.end-(P._startClamp?Math.max(0,ge.start):ge.start),(Te===f&&ge.start-ge._pinPush<Ue||Te===gn)&&isNaN(Lt)&&(wt+=j*(1-ge.progress)),Te===d&&(Rt+=j));if(Ue+=wt,k+=wt,P._startClamp&&(P._startClamp+=wt),P._endClamp&&!Tn&&(P._endClamp=k||-.001,k=Math.min(k,Ii(I,x))),E=k-Ue||(Ue-=.01)&&.001,qt&&(_e=we.utils.clamp(0,1,we.utils.normalize(Ue,k,he))),P._pinPush=Rt,mt&&wt&&(j={},j[x.a]="+="+wt,gn&&(j[x.p]="-="+ue()),we.set([mt,ze],j)),d&&!(Gu&&P.end>=Ii(I,x)))j=ci(d),fe=x===Kt,z=ue(),le=parseFloat(ae(x.a))+Rt,!Dt&&k>1&&(Qe=(G?St.scrollingElement||qn:I).style,Qe={style:Qe,value:Qe["overflow"+x.a.toUpperCase()]},G&&ci(yt)["overflow"+x.a.toUpperCase()]!=="scroll"&&(Qe.style["overflow"+x.a.toUpperCase()]="scroll")),Fl(d,Z,j),Q=Jo(d),q=er(d,!0),Ve=K&&Hr(I,fe?An:Kt)(),g?(ne=[g+x.os2,E+Rt+Yt],ne.t=Z,B=g===Xt?nl(d,x)+E+Rt:0,B&&(ne.push(x.d,B+Yt),Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=B+Yt)),ra(ne),gn&&rt.forEach(function(Ft){Ft.pin===gn&&Ft.vars.pinSpacing!==!1&&(Ft._subPinOffset=!0)}),K&&ue(he)):(B=nl(d,x),B&&Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=B+Yt)),K&&(de={top:q.top+(fe?z-Ue:Ve)+Yt,left:q.left+(fe?Ve:z-Ue)+Yt,boxSizing:"border-box",position:"fixed"},de[ps]=de["max"+pa]=Math.ceil(q.width)+Yt,de[ms]=de["max"+hf]=Math.ceil(q.height)+Yt,de[oi]=de[oi+go]=de[oi+po]=de[oi+_o]=de[oi+mo]="0",de[Xt]=j[Xt],de[Xt+go]=j[Xt+go],de[Xt+po]=j[Xt+po],de[Xt+_o]=j[Xt+_o],de[Xt+mo]=j[Xt+mo],O=g0(S,de,w),Tn&&ue(0)),i?(Ye=i._initted,Ll(1),i.render(i.duration(),!0,!0),Me=ae(x.a)-le+E+Rt,Le=Math.abs(E-Me)>1,K&&Le&&O.splice(O.length-2,2),i.render(0,!0,!0),Ye||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Ll(0)):Me=E,Qe&&(Qe.value?Qe.style["overflow"+x.a.toUpperCase()]=Qe.value:Qe.style.removeProperty("overflow-"+x.a));else if(f&&ue()&&!T)for(q=f.parentNode;q&&q!==yt;)q._pinOffset&&(Ue-=q._pinOffset,k-=q._pinOffset),q=q.parentNode;Re&&Re.forEach(function(Ft){return Ft.revert(!1,!0)}),P.start=Ue,P.end=k,$e=Oe=Tn?he:ue(),!T&&!Tn&&($e<he&&ue(he),P.scroll.rec=0),P.revert(!1,!0),re=un(),ee&&(Y=-1,ee.restart(!0)),ln=0,i&&D&&(i._initted||pe)&&i.progress()!==pe&&i.progress(pe||0,!0).render(i.time(),!0,!0),(qt||_e!==P.progress||T||_||i&&!i._initted)&&(i&&!D&&(i._initted||_e||i.vars.immediateRender!==!1)&&i.totalProgress(T&&Ue<-.001&&!_e?we.utils.normalize(Ue,k,0):_e,!0),P.progress=qt||($e-Ue)/E===_e?0:_e),d&&g&&(Z._pinOffset=Math.round(P.progress*Me)),L&&L.invalidate(),isNaN(dt)||(dt-=we.getProperty(V,x.p),_t-=we.getProperty(Ae,x.p),Zo(V,x,dt),Zo(mt,x,dt-(We||0)),Zo(Ae,x,_t),Zo(ze,x,_t-(We||0))),qt&&!Tn&&P.update(),u&&!Tn&&!U&&(U=!0,u(P),U=!1)}},P.getVelocity=function(){return(ue()-Oe)/(un()-$a)*1e3||0},P.endAnimation=function(){Oa(P.callbackAnimation),i&&(L?L.progress(1):i.paused()?D||Oa(i,P.direction<0,1):Oa(i,i.reversed()))},P.labelToScroll=function(ye){return i&&i.labels&&(Ue||P.refresh()||Ue)+i.labels[ye]/i.duration()*E||0},P.getTrailing=function(ye){var Xe=rt.indexOf(P),Ie=P.direction>0?rt.slice(0,Xe).reverse():rt.slice(Xe+1);return(Xn(ye)?Ie.filter(function(We){return We.vars.preventOverlaps===ye}):Ie).filter(function(We){return P.direction>0?We.end<=Ue:We.start>=k})},P.update=function(ye,Xe,Ie){if(!(T&&!Ie&&!ye)){var We=Tn===!0?he:P.scroll(),Ht=ye?0:(We-Ue)/E,at=Ht<0?0:Ht>1?1:Ht||0,Dt=P.progress,qt,wt,Rt,gt,zn,Lt,gn,A;if(Xe&&(Oe=$e,$e=T?ue():We,b&&(st=ke,ke=i&&!D?i.totalProgress():at)),m&&d&&!ln&&!jo&&di&&(!at&&Ue<We+(We-Oe)/(un()-$a)*m?at=1e-4:at===1&&k>We+(We-Oe)/(un()-$a)*m&&(at=.9999)),at!==Dt&&P.enabled){if(qt=P.isActive=!!at&&at<1,wt=!!Dt&&Dt<1,Lt=qt!==wt,zn=Lt||!!at!=!!Dt,P.direction=at>Dt?1:-1,P.progress=at,zn&&!ln&&(Rt=at&&!Dt?0:at===1?1:Dt===1?2:3,D&&(gt=!Lt&&W[Rt+1]!=="none"&&W[Rt+1]||W[Rt],A=i&&(gt==="complete"||gt==="reset"||gt in i))),M&&(Lt||A)&&(A||h||!i)&&(dn(M)?M(P):P.getTrailing(M).forEach(function(z){return z.endAnimation()})),D||(L&&!ln&&!jo?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",at,i._tTime/i._tDur):(L.vars.totalProgress=at,L.invalidate().restart())):i&&i.totalProgress(at,!!(ln&&(re||ye)))),d){if(ye&&g&&(Z.style[g+x.os2]=se),!K)oe(Za(le+Me*at));else if(zn){if(gn=!ye&&at>Dt&&k+1>We&&We+1>=Ii(I,x),w)if(!ye&&(qt||gn)){var B=er(d,!0),j=We-Ue;gd(d,yt,B.top+(x===Kt?j:0)+Yt,B.left+(x===Kt?0:j)+Yt)}else gd(d,Z);ra(qt||gn?O:Q),Le&&at<1&&qt||oe(le+(at===1&&!gn?Me:0))}}b&&!Ee.tween&&!ln&&!jo&&ee.restart(!0),o&&(Lt||y&&at&&(at<1||!Il))&&Do(o.targets).forEach(function(z){return z.classList[qt||y?"add":"remove"](o.className)}),a&&!D&&!ye&&a(P),zn&&!ln?(D&&(A&&(gt==="complete"?i.pause().totalProgress(1):gt==="reset"?i.restart(!0).pause():gt==="restart"?i.restart(!0):i[gt]()),a&&a(P)),(Lt||!Il)&&(l&&Lt&&As(P,l),X[Rt]&&As(P,X[Rt]),y&&(at===1?P.kill(!1,1):X[Rt]=0),Lt||(Rt=at===1?1:3,X[Rt]&&As(P,X[Rt]))),C&&!qt&&Math.abs(P.getVelocity())>(eo(C)?C:2500)&&(Oa(P.callbackAnimation),L?L.progress(1):Oa(i,gt==="reverse"?1:!at,1))):D&&a&&!ln&&a(P)}if(be){var q=T?We/T.duration()*(T._caScrollDist||0):We;Ne(q+(V._isFlipped?1:0)),be(q)}Be&&Be(-We/T.duration()*(T._caScrollDist||0))}},P.enable=function(ye,Xe){P.enabled||(P.enabled=!0,tn(I,"resize",to),G||tn(I,"scroll",Rs),ce&&tn(r,"refreshInit",ce),ye!==!1&&(P.progress=_e=0,$e=Oe=Y=ue()),Xe!==!1&&P.refresh())},P.getTween=function(ye){return ye&&Ee?Ee.tween:L},P.setPositions=function(ye,Xe,Ie,We){if(T){var Ht=T.scrollTrigger,at=T.duration(),Dt=Ht.end-Ht.start;ye=Ht.start+Dt*ye/at,Xe=Ht.start+Dt*Xe/at}P.refresh(!1,!1,{start:od(ye,Ie&&!!P._startClamp),end:od(Xe,Ie&&!!P._endClamp)},We),P.update()},P.adjustPinSpacing=function(ye){if(ne&&ye){var Xe=ne.indexOf(x.d)+1;ne[Xe]=parseFloat(ne[Xe])+ye+Yt,ne[1]=parseFloat(ne[1])+ye+Yt,ra(ne)}},P.disable=function(ye,Xe){if(ye!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Xe||L&&L.pause(),he=0,De&&(De.uncache=1),ce&&en(r,"refreshInit",ce),ee&&(ee.pause(),Ee.tween&&Ee.tween.kill()&&(Ee.tween=0)),!G)){for(var Ie=rt.length;Ie--;)if(rt[Ie].scroller===I&&rt[Ie]!==P)return;en(I,"resize",to),G||en(I,"scroll",Rs)}},P.kill=function(ye,Xe){P.disable(ye,Xe),L&&!Xe&&L.kill(),c&&delete Vu[c];var Ie=rt.indexOf(P);Ie>=0&&rt.splice(Ie,1),Ie===Mn&&Fc>0&&Mn--,Ie=0,rt.forEach(function(We){return We.scroller===P.scroller&&(Ie=1)}),Ie||Tn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,ye&&i.revert({kill:!1}),Xe||i.kill()),mt&&[mt,ze,V,Ae].forEach(function(We){return We.parentNode&&We.parentNode.removeChild(We)}),bo===P&&(bo=0),d&&(De&&(De.uncache=1),Ie=0,rt.forEach(function(We){return We.pin===d&&Ie++}),Ie||(De.spacer=0)),n.onKill&&n.onKill(P)},rt.push(P),P.enable(!1,!1),Ke&&Ke(P),i&&i.add&&!E){var Je=P.update;P.update=function(){P.update=Je,ct.cache++,Ue||k||P.refresh()},we.delayedCall(.01,P.update),E=.01,Ue=k=0}else P.refresh();d&&d0()},r.register=function(n){return js||(we=n||xg(),vg()&&window.document&&r.enable(),js=Ja),js},r.defaults=function(n){if(n)for(var i in n)Qo[i]=n[i];return Qo},r.disable=function(n,i){Ja=0,rt.forEach(function(a){return a[i?"kill":"disable"](n)}),en(ot,"wheel",Rs),en(St,"scroll",Rs),clearInterval(Xo),en(St,"touchcancel",wi),en(yt,"touchstart",wi),Yo(en,St,"pointerdown,touchstart,mousedown",cd),Yo(en,St,"pointerup,touchend,mouseup",ld),tl.kill(),qo(en);for(var s=0;s<ct.length;s+=3)Ko(en,ct[s],ct[s+1]),Ko(en,ct[s],ct[s+2])},r.enable=function(){if(ot=window,St=document,qn=St.documentElement,yt=St.body,we){if(Do=we.utils.toArray,ho=we.utils.clamp,Hu=we.core.context||wi,Ll=we.core.suppressOverwrites||wi,of=ot.history.scrollRestoration||"auto",Wu=ot.pageYOffset||0,we.core.globals("ScrollTrigger",r),yt){Ja=1,ia=document.createElement("div"),ia.style.height="100vh",ia.style.position="absolute",Pg(),a0(),Vt.register(we),r.isTouch=Vt.isTouch,Sr=Vt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),zu=Vt.isTouch===1,tn(ot,"wheel",Rs),af=[ot,St,qn,yt],we.matchMedia?(r.matchMedia=function(u){var h=we.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},we.addEventListener("matchMediaInit",function(){Rg(),df()}),we.addEventListener("matchMediaRevert",function(){return wg()}),we.addEventListener("matchMedia",function(){ls(0,1),xs("matchMedia")}),we.matchMedia().add("(orientation: portrait)",function(){return Nl(),Nl})):console.warn("Requires GSAP 3.11.0 or later"),Nl(),tn(St,"scroll",Rs);var n=yt.hasAttribute("style"),i=yt.style,s=i.borderTopStyle,a=we.core.Animation.prototype,o,c;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=er(yt),Kt.m=Math.round(o.top+Kt.sc())||0,An.m=Math.round(o.left+An.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(yt.setAttribute("style",""),yt.removeAttribute("style")),Xo=setInterval(fd,250),we.delayedCall(.5,function(){return jo=0}),tn(St,"touchcancel",wi),tn(yt,"touchstart",wi),Yo(tn,St,"pointerdown,touchstart,mousedown",cd),Yo(tn,St,"pointerup,touchend,mouseup",ld),Bu=we.utils.checkPrefix("transform"),Oc.push(Bu),js=un(),tl=we.delayedCall(.2,ls).pause(),qs=[St,"visibilitychange",function(){var u=ot.innerWidth,h=ot.innerHeight;St.hidden?(rd=u,sd=h):(rd!==u||sd!==h)&&to()},St,"DOMContentLoaded",ls,ot,"load",ls,ot,"resize",to],qo(tn),rt.forEach(function(u){return u.enable(0,1)}),c=0;c<ct.length;c+=3)Ko(en,ct[c],ct[c+1]),Ko(en,ct[c],ct[c+2])}else if(St){var l=function u(){r.enable(),St.removeEventListener("DOMContentLoaded",u)};St.addEventListener("DOMContentLoaded",l)}}},r.config=function(n){"limitCallbacks"in n&&(Il=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Xo)||(Xo=i)&&setInterval(fd,i),"ignoreMobileResize"in n&&(zu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(qo(en)||qo(tn,n.autoRefreshEvents||"none"),gg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Dn(n),a=ct.indexOf(s),o=bs(s);~a&&ct.splice(a,o?6:2),i&&(o?Ui.unshift(ot,i,yt,i,qn,i):Ui.unshift(s,i))},r.clearMatchMedia=function(n){rt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(Xn(n)?Dn(n):n).getBoundingClientRect(),o=a[s?ps:ms]*i||0;return s?a.right-o>0&&a.left+o<ot.innerWidth:a.bottom-o>0&&a.top+o<ot.innerHeight},r.positionInViewport=function(n,i,s){Xn(n)&&(n=Dn(n));var a=n.getBoundingClientRect(),o=a[s?ps:ms],c=i==null?o/2:i in il?il[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+c)/ot.innerWidth:(a.top+c)/ot.innerHeight},r.killAll=function(n){if(rt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=vs.killAll||[];vs={},i.forEach(function(s){return s()})}},r})();it.version="3.15.0";it.saveStyles=function(r){return r?Do(r).forEach(function(e){if(e&&e.style){var t=Wn.indexOf(e);t>=0&&Wn.splice(t,5),Wn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),we.core.getCache(e),Hu())}}):Wn};it.revert=function(r,e){return df(!r,e)};it.create=function(r,e){return new it(r,e)};it.refresh=function(r){return r?to(!0):(js||it.register())&&ls(!0)};it.update=function(r){return++ct.cache&&rr(r===!0?2:0)};it.clearScrollMemory=Cg;it.maxScroll=function(r,e){return Ii(r,e?An:Kt)};it.getScrollFunc=function(r,e){return Hr(Dn(r),e?An:Kt)};it.getById=function(r){return Vu[r]};it.getAll=function(){return rt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};it.isScrolling=function(){return!!di};it.snapDirectional=ff;it.addEventListener=function(r,e){var t=vs[r]||(vs[r]=[]);~t.indexOf(e)||t.push(e)};it.removeEventListener=function(r,e){var t=vs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};it.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(l,u){var h=[],f=[],d=we.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&dn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return dn(s)&&(s=s(),tn(it,"refresh",function(){return s=e.batchMax()})),Do(r).forEach(function(c){var l={};for(o in n)l[o]=n[o];l.trigger=c,t.push(it.create(l))}),t};var bd=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Ol=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Vt.isTouch?" pinch-zoom":""):"none",e===qn&&r(yt,t)},ec={auto:1,scroll:1},b0=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||we.core.getCache(s),o=un(),c;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==yt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ec[(c=ci(s)).overflowY]||ec[c.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!bs(s)&&(ec[(c=ci(s)).overflowY]||ec[c.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Lg=function(e,t,n,i){return Vt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&b0,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&tn(St,Vt.eventTypes[0],xd,!1,!0)},onDisable:function(){return en(St,Vt.eventTypes[0],xd,!0)}})},v0=/(input|label|select|textarea)/i,vd,xd=function(e){var t=v0.test(e.target.tagName);(t||vd)&&(e._gsapAllow=!0,vd=t)},x0=function(e){ns(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,c,l=Dn(e.target)||qn,u=we.core.globals().ScrollSmoother,h=u&&u.get(),f=Sr&&(e.content&&Dn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Hr(l,Kt),g=Hr(l,An),_=1,m=(Vt.isTouch&&ot.visualViewport?ot.visualViewport.scale*ot.visualViewport.width:ot.outerWidth)/ot.innerWidth,p=0,v=dn(i)?function(){return i(o)}:function(){return i||2.8},y,b,w=Lg(l,e.type,!0,s),R=function(){return b=!1},T=wi,C=wi,M=function(){c=Ii(l,Kt),C=ho(Sr?1:0,c),n&&(T=ho(0,Ii(l,An))),y=gs},x=function(){f._gsap.y=Za(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},D=function(){if(b){requestAnimationFrame(R);var F=Za(o.deltaY/2),J=C(d.v-F);if(f&&J!==d.v+d.offset){d.offset=J-d.v;var P=Za((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",d.cacheID=ct.cache,rr()}return!0}d.offset&&x(),b=!0},I,N,G,K,X=function(){M(),I.isActive()&&I.vars.scrollY>c&&(d()>c?I.progress(1)&&d(c):I.resetTo("scrollY",c))};return f&&we.set(f,{y:"+=0"}),e.ignoreCheck=function(W){return Sr&&W.type==="touchmove"&&D()||_>1.05&&W.type!=="touchstart"||o.isGesturing||W.touches&&W.touches.length>1},e.onPress=function(){b=!1;var W=_;_=Za((ot.visualViewport&&ot.visualViewport.scale||1)/m),I.pause(),W!==_&&Ol(l,_>1.01?!0:n?!1:"x"),N=g(),G=d(),M(),y=gs},e.onRelease=e.onGestureStart=function(W,F){if(d.offset&&x(),!F)K.restart(!0);else{ct.cache++;var J=v(),P,ce;n&&(P=g(),ce=P+J*.05*-W.velocityX/.227,J*=bd(g,P,ce,Ii(l,An)),I.vars.scrollX=T(ce)),P=d(),ce=P+J*.05*-W.velocityY/.227,J*=bd(d,P,ce,Ii(l,Kt)),I.vars.scrollY=C(ce),I.invalidate().duration(J).play(.01),(Sr&&I.vars.scrollY>=c||P>=c-1)&&we.to({},{onUpdate:X,duration:J})}a&&a(W)},e.onWheel=function(){I._ts&&I.pause(),un()-p>1e3&&(y=0,p=un())},e.onChange=function(W,F,J,P,ce){if(gs!==y&&M(),F&&n&&g(T(P[2]===F?N+(W.startX-W.x):g()+F-P[1])),J){d.offset&&x();var ve=ce[2]===J,Pe=ve?G+W.startY-W.y:d()+J-ce[1],Y=C(Pe);ve&&Pe!==Y&&(G+=Y-Pe),d(Y)}(J||F)&&rr()},e.onEnable=function(){Ol(l,n?!1:"x"),it.addEventListener("refresh",X),tn(ot,"resize",X),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),w.enable()},e.onDisable=function(){Ol(l,!0),en(ot,"resize",X),it.removeEventListener("refresh",X),w.kill()},e.lockAxis=e.lockAxis!==!1,o=new Vt(e),o.iOS=Sr,Sr&&!d()&&d(1),Sr&&we.ticker.add(wi),K=o._dc,I=we.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Dg(d,d(),function(){return I.pause()})},onUpdate:rr,onComplete:K.vars.onComplete}),o};it.sort=function(r){if(dn(r))return rt.sort(r);var e=ot.pageYOffset||0;return it.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ot.innerHeight}),rt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};it.observe=function(r){return new Vt(r)};it.normalizeScroll=function(r){if(typeof r>"u")return Sn;if(r===!0&&Sn)return Sn.enable();if(r===!1){Sn&&Sn.kill(),Sn=r;return}var e=r instanceof Vt?r:x0(r);return Sn&&Sn.target===e.target&&Sn.kill(),bs(e.target)&&(Sn=e),e};it.core={_getVelocityProp:ku,_inputObserver:Lg,_scrollers:ct,_proxies:Ui,bridge:{ss:function(){di||xs("scrollStart"),di=un()},ref:function(){return ln}}};xg()&&we.registerPlugin(it);function y0(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function S0(r,e,t){return e&&y0(r.prototype,e),r}/*!
 * ScrollSmoother 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var xt,tc,xn,Mr,no,Vi,is,yd,Ze,Ri,nc,Sd,Md,Td,Ed,Ig=function(){return typeof window<"u"},Ug=function(){return xt||Ig()&&(xt=window.gsap)&&xt.registerPlugin&&xt},M0=function(e){return Math.round(e*1e5)/1e5||0},pr=function(e){return Ze.maxScroll(e||xn)},T0=function(e,t){var n=e.parentNode||no,i=e.getBoundingClientRect(),s=n.getBoundingClientRect(),a=s.top-i.top,o=s.bottom-i.bottom,c=(Math.abs(a)>Math.abs(o)?a:o)/(1-t),l=-c*t,u,h;return c>0&&(u=s.height/(xn.innerHeight+s.height),h=u===.5?s.height*2:Math.min(s.height,Math.abs(-c*u/(2*u-1)))*2*(t||1),l+=t?-h*t:-h/2,c+=h),{change:c,offset:l}},E0=function(e){var t=Mr.querySelector(".ScrollSmoother-wrapper");return t||(t=Mr.createElement("div"),t.classList.add("ScrollSmoother-wrapper"),e.parentNode.insertBefore(t,e),t.appendChild(e)),t},ys=(function(){function r(e){var t=this;tc||r.register(xt)||console.warn("Please gsap.registerPlugin(ScrollSmoother)"),e=this.vars=e||{},Ri&&Ri.kill(),Ri=this,Td(this);var n=e,i=n.smoothTouch,s=n.onUpdate,a=n.onStop,o=n.smooth,c=n.onFocusIn,l=n.normalizeScroll,u=n.wholePixels,h,f,d,g,_,m,p,v,y,b,w,R,T,C,M=this,x=e.effectsPrefix||"",D=Ze.getScrollFunc(xn),I=Ze.isTouch===1?i===!0?.8:parseFloat(i)||0:o===0||o===!1?0:parseFloat(o)||.8,N=I&&+e.speed||1,G=0,K=0,X=1,W=Sd(0),F=function(){return W.update(-G)},J={y:0},P=function(){return h.style.overflow="visible"},ce,ve=function(U){U.update();var E=U.getTween();E&&(E.pause(),E._time=E._dur,E._tTime=E._tDur),ce=!1,U.animation.progress(U.progress,!0)},Pe=function(U,E){(U!==G&&!b||E)&&(u&&(U=Math.round(U)),I&&(h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+U+", 0, 1)",h._gsap.y=U+"px"),K=U-G,G=U,Ze.isUpdating||r.isRefreshing||Ze.update())},Y=function(U){return arguments.length?(U<0&&(U=0),J.y=-U,ce=!0,b?G=-U:Pe(-U),Ze.isRefreshing?g.update():D(U/N),this):-G},re=typeof ResizeObserver<"u"&&e.autoResize!==!1&&new ResizeObserver(function(){if(!Ze.isRefreshing){var ie=pr(f)*N;ie<-G&&Y(ie),Ed.restart(!0)}}),_e,ue=function(U){f.scrollTop=0,!(U.target.contains&&U.target.contains(f)||c&&c(t,U)===!1)&&(Ze.isInViewport(U.target)||U.target===_e||t.scrollTo(U.target,!1,"center center"),_e=U.target)},Ee=function(U,E){if(U<E.start)return U;var S=isNaN(E.ratio)?1:E.ratio,O=E.end-E.start,Q=U-E.start,Z=E.offset||0,te=E.pins||[],ae=te.offset||0,oe=E._startClamp&&E.start<=0||E.pins&&E.pins.offset?0:E._endClamp&&E.end===pr()?1:.5;return te.forEach(function(le){O-=le.distance,le.nativeStart<=U&&(Q-=le.distance)}),ae&&(Q*=(O-ae/S)/O),U+(Q-Z*oe)/S-Q},De=function ie(U,E,S){S||(U.pins.length=U.pins.offset=0);var O=U.pins,Q=U.markers,Z,te,ae,oe,le,Me,se,ne;for(se=0;se<E.length;se++)if(ne=E[se],U.trigger&&ne.trigger&&U!==ne&&(ne.trigger===U.trigger||ne.pinnedContainer===U.trigger||U.trigger.contains(ne.trigger))&&(le=ne._startNative||ne._startClamp||ne.start,Me=ne._endNative||ne._endClamp||ne.end,ae=Ee(le,U),oe=ne.pin&&Me>0?ae+(Me-le):Ee(Me,U),ne.setPositions(ae,oe,!0,(ne._startClamp?Math.max(0,ae):ae)-le),ne.markerStart&&Q.push(xt.quickSetter([ne.markerStart,ne.markerEnd],"y","px")),ne.pin&&ne.end>0&&!S)){if(Z=ne.end-ne.start,te=U._startClamp&&ne.start<0,te){if(U.start>0){U.setPositions(0,U.end+(U._startNative-U.start),!0),ie(U,E);return}Z+=ne.start,O.offset=-ne.start}O.push({start:ne.start,nativeStart:le,end:ne.end,distance:Z,trig:ne}),U.setPositions(U.start,U.end+(te?-ne.start:Z),!0)}},Ge=function(U,E){_.forEach(function(S){return De(S,U,E)})},$e=function(){no=Mr.documentElement,Vi=Mr.body,P(),requestAnimationFrame(P),_&&(Ze.getAll().forEach(function(U){U._startNative=U.start,U._endNative=U.end}),_.forEach(function(U){var E=U._startClamp||U.start,S=U.autoSpeed?Math.min(pr(),U.end):E+Math.abs((U.end-E)/U.ratio),O=S-U.end;if(E-=O/2,S-=O/2,E>S){var Q=E;E=S,S=Q}U._startClamp&&E<0?(S=U.ratio<0?pr():U.end/U.ratio,O=S-U.end,E=0):(U.ratio<0||U._endClamp&&S>=pr())&&(S=pr(),E=U.ratio<0||U.ratio>1?0:S-(S-U.start)/U.ratio,O=(S-E)*U.ratio-(U.end-U.start)),U.offset=O||1e-4,U.pins.length=U.pins.offset=0,U.setPositions(E,S,!0)}),Ge(Ze.sort())),W.reset()},Oe=function(){return Ze.addEventListener("refresh",$e)},Ue=function(){return _&&_.forEach(function(U){return U.vars.onRefresh(U)})},k=function(){return _&&_.forEach(function(U){return U.vars.onRefreshInit(U)}),Ue},mt=function(U,E,S,O){return function(){var Q=typeof E=="function"?E(S,O):E;Q||Q===0||(Q=O.getAttribute("data-"+x+U)||(U==="speed"?1:0)),O.setAttribute("data-"+x+U,Q);var Z=(Q+"").substr(0,6)==="clamp(";return{clamp:Z,value:Z?Q.substr(6,Q.length-7):Q}}},ze=function(U,E,S,O,Q){Q=(typeof Q=="function"?Q(O,U):Q)||0;var Z=mt("speed",E,O,U),te=mt("lag",S,O,U),ae=xt.getProperty(U,"y"),oe=U._gsap,le,Me,se,ne,Ne,Le,be=[],qe=function(){E=Z(),S=parseFloat(te().value),le=parseFloat(E.value)||1,se=E.value==="auto",Ne=se||Me&&Me._startClamp&&Me.start<=0||be.offset?0:Me&&Me._endClamp&&Me.end===pr()?1:.5,ne&&ne.kill(),ne=S&&xt.to(U,{ease:nc,overwrite:!1,y:"+=0",duration:S}),Me&&(Me.ratio=le,Me.autoSpeed=se)},ke=function(){oe.y=ae+"px",oe.renderTransform(1),qe()},st=[],L=0,me=function(ee){if(se){ke();var he=T0(U,yd(0,1,-ee.start/(ee.end-ee.start)));L=he.change,Le=he.offset}else Le=be.offset||0,L=(ee.end-ee.start-Le)*(1-le);be.forEach(function(pe){return L-=pe.distance*(1-le)}),ee.offset=L||.001,ee.vars.onUpdate(ee),ne&&ne.progress(1)};return qe(),(le!==1||se||ne)&&(Me=Ze.create({trigger:se?U.parentNode:U,start:function(){return E.clamp?"clamp(top bottom+="+Q+")":"top bottom+="+Q},end:function(){return E.value<0?"max":E.clamp?"clamp(bottom top-="+Q+")":"bottom top-="+Q},scroller:f,scrub:!0,refreshPriority:-999,onRefreshInit:ke,onRefresh:me,onKill:function(ee){var he=_.indexOf(ee);he>=0&&_.splice(he,1),ke()},onUpdate:function(ee){var he=ae+L*(ee.progress-Ne),pe=be.length,Be=0,Ke,At,xe;if(ee.offset){if(pe){for(At=-G,xe=ee.end;pe--;){if(Ke=be[pe],Ke.trig.isActive||At>=Ke.start&&At<=Ke.end){ne&&(Ke.trig.progress+=Ke.trig.direction<0?.001:-.001,Ke.trig.update(0,0,1),ne.resetTo("y",parseFloat(oe.y),-K,!0),X&&ne.progress(1));return}At>Ke.end&&(Be+=Ke.distance),xe-=Ke.distance}he=ae+Be+L*((xt.utils.clamp(ee.start,ee.end,At)-ee.start-Be)/(xe-ee.start)-Ne)}st.length&&!se&&st.forEach(function(Ce){return Ce(he-Be)}),he=M0(he+Le),ne?(ne.resetTo("y",he,-K,!0),X&&ne.progress(1)):(oe.y=he+"px",oe.renderTransform(1))}}}),me(Me),xt.core.getCache(Me.trigger).stRevert=k,Me.startY=ae,Me.pins=be,Me.markers=st,Me.ratio=le,Me.autoSpeed=se,U.style.willChange="transform"),Me};Oe(),Ze.addEventListener("killAll",Oe),xt.delayedCall(.5,function(){return X=0}),this.scrollTop=Y,this.scrollTo=function(ie,U,E){var S=xt.utils.clamp(0,pr(),isNaN(ie)?t.offset(ie,E,!!U&&!b):+ie);U?b?xt.to(t,{duration:I,scrollTop:S,overwrite:"auto",ease:nc}):D(S):Y(S)},this.offset=function(ie,U,E){ie=is(ie)[0];var S=ie.style.cssText,O=Ze.create({trigger:ie,start:U||"top top"}),Q;return _&&(X?Ze.refresh():Ge([O],!0)),Q=O.start/(E?N:1),O.kill(!1),ie.style.cssText=S,xt.core.getCache(ie).uncache=1,Q};function V(){return d=h.clientHeight,h.style.overflow="visible",Vi.style.height=xn.innerHeight+(d-xn.innerHeight)/N+"px",d-xn.innerHeight}this.content=function(ie){if(arguments.length){var U=is(ie||"#smooth-content")[0]||console.warn("ScrollSmoother needs a valid content element.")||Vi.children[0];return U!==h&&(h=U,y=h.getAttribute("style")||"",re&&re.observe(h),xt.set(h,{overflow:"visible",width:"100%",boxSizing:"border-box",y:"+=0"}),I||xt.set(h,{clearProps:"transform"})),this}return h},this.wrapper=function(ie){return arguments.length?(f=is(ie||"#smooth-wrapper")[0]||E0(h),v=f.getAttribute("style")||"",V(),xt.set(f,I?{overflow:"hidden",position:"fixed",height:"100%",width:"100%",top:0,left:0,right:0,bottom:0}:{overflow:"visible",position:"relative",width:"100%",height:"auto",top:"auto",bottom:"auto",left:"auto",right:"auto"}),this):f},this.effects=function(ie,U){var E;if(_||(_=[]),!ie)return _.slice(0);ie=is(ie),ie.forEach(function(le){for(var Me=_.length;Me--;)_[Me].trigger===le&&_[Me].kill()}),U=U||{};var S=U,O=S.speed,Q=S.lag,Z=S.effectsPadding,te=[],ae,oe;for(ae=0;ae<ie.length;ae++)oe=ze(ie[ae],O,Q,ae,Z),oe&&te.push(oe);return(E=_).push.apply(E,te),U.refresh!==!1&&Ze.refresh(),te},this.sections=function(ie,U){var E;if(m||(m=[]),!ie)return m.slice(0);var S=is(ie).map(function(O){return Ze.create({trigger:O,start:"top 120%",end:"bottom -20%",onToggle:function(Z){O.style.opacity=Z.isActive?"1":"0",O.style.pointerEvents=Z.isActive?"all":"none"}})});return U&&U.add?(E=m).push.apply(E,S):m=S.slice(0),S},this.content(e.content),this.wrapper(e.wrapper),this.render=function(ie){return Pe(ie||ie===0?ie:G)},this.getVelocity=function(){return W.getVelocity(-G)},Ze.scrollerProxy(f,{scrollTop:Y,scrollHeight:function(){return V()&&Vi.scrollHeight},fixedMarkers:e.fixedMarkers!==!1&&!!I,content:h,getBoundingClientRect:function(){return{top:0,left:0,width:xn.innerWidth,height:xn.innerHeight}}}),Ze.defaults({scroller:f});var Ae=Ze.getAll().filter(function(ie){return ie.scroller===xn||ie.scroller===f});Ae.forEach(function(ie){return ie.revert(!0,!0)}),g=Ze.create({animation:xt.fromTo(J,{y:function(){return C=0,0}},{y:function(){return C=1,-V()},immediateRender:!1,ease:"none",data:"ScrollSmoother",duration:100,onUpdate:function(){if(C){var U=ce;U&&(ve(g),J.y=G),Pe(J.y,U),F(),s&&!b&&s(M)}}}),onRefreshInit:function(U){if(!r.isRefreshing){if(r.isRefreshing=!0,_){var E=Ze.getAll().filter(function(O){return!!O.pin});_.forEach(function(O){O.vars.pinnedContainer||E.forEach(function(Q){if(Q.pin.contains(O.trigger)){var Z=O.vars;Z.pinnedContainer=Q.pin,O.vars=null,O.init(Z,O.animation)}})})}var S=U.getTween();T=S&&S._end>S._dp._time,R=G,J.y=0,I&&(Ze.isTouch===1&&(f.style.position="absolute"),f.scrollTop=0,Ze.isTouch===1&&(f.style.position="fixed"))}},onRefresh:function(U){U.animation.invalidate(),J.y=0,U.setPositions(U.start,V()/N),T||ve(U),J.y=-D()*N,Pe(J.y),X||(T&&(ce=!1),U.animation.progress(xt.utils.clamp(0,1,R/N/-U.end))),T&&(U.progress-=.001,U.update()),r.isRefreshing=!1},id:"ScrollSmoother",scroller:xn,invalidateOnRefresh:!0,start:0,refreshPriority:-9999,end:function(){return V()/N},onScrubComplete:function(){W.reset(),a&&a(t)},scrub:I||!0}),this.smooth=function(ie){return arguments.length&&(I=ie||0,N=I&&+e.speed||1,g.scrubDuration(ie)),g.getTween()?g.getTween().duration():0},g.getTween()&&(g.getTween().vars.ease=e.ease||nc),this.scrollTrigger=g,e.effects&&this.effects(e.effects===!0?"[data-"+x+"speed], [data-"+x+"lag]":e.effects,{effectsPadding:e.effectsPadding,refresh:!1}),e.sections&&this.sections(e.sections===!0?"[data-section]":e.sections),Ae.forEach(function(ie){ie.vars.scroller=f,ie.revert(!1,!0),ie.init(ie.vars,ie.animation)}),this.paused=function(ie,U){return arguments.length?(!!b!==ie&&(ie?(g.getTween()&&g.getTween().pause(),D(-G/N),W.reset(),w=Ze.normalizeScroll(),w&&w.disable(),b=Ze.observe({preventDefault:!0,type:"wheel,touch,scroll",debounce:!1,allowClicks:!0,onChangeY:function(){return Y(-G)}}),b.nested=Md(no,"wheel,touch,scroll",!0,U!==!1)):(b.nested.kill(),b.kill(),b=0,w&&w.enable(),g.progress=(-G/N-g.start)/(g.end-g.start),ve(g))),this):!!b},this.kill=this.revert=function(){t.paused(!1),ve(g),g.kill();for(var ie=(_||[]).concat(m||[]),U=ie.length;U--;)ie[U].kill();Ze.scrollerProxy(f),Ze.removeEventListener("killAll",Oe),Ze.removeEventListener("refresh",$e),f.style.cssText=v,h.style.cssText=y;var E=Ze.defaults({});E&&E.scroller===f&&Ze.defaults({scroller:xn}),t.normalizer&&Ze.normalizeScroll(!1),clearInterval(p),Ri=null,re&&re.disconnect(),Vi.style.removeProperty("height"),xn.removeEventListener("focusin",ue)},this.refresh=function(ie,U){return g.refresh(ie,U)},l&&(this.normalizer=Ze.normalizeScroll(l===!0?{debounce:!0,content:!I&&h}:l)),Ze.config(e),"scrollBehavior"in xn.getComputedStyle(Vi)&&xt.set([Vi,no],{scrollBehavior:"auto"}),xn.addEventListener("focusin",ue),p=setInterval(F,250),Mr.readyState==="loading"||requestAnimationFrame(function(){return Ze.refresh()})}return r.register=function(t){return tc||(xt=t||Ug(),Ig()&&window.document&&(xn=window,Mr=document,no=Mr.documentElement,Vi=Mr.body),xt&&(is=xt.utils.toArray,yd=xt.utils.clamp,nc=xt.parseEase("expo"),Td=xt.core.context||function(){},Ze=xt.core.globals().ScrollTrigger,xt.core.globals("ScrollSmoother",r),Vi&&Ze&&(Ed=xt.delayedCall(.2,function(){return Ze.isRefreshing||Ri&&Ri.refresh()}).pause(),Sd=Ze.core._getVelocityProp,Md=Ze.core._inputObserver,r.refresh=Ze.refresh,tc=1))),tc},S0(r,[{key:"progress",get:function(){return this.scrollTrigger?this.scrollTrigger.animation._time/100:0}}]),r})();ys.version="3.15.0";ys.create=function(r){return Ri&&r&&Ri.content()===is(r.content)[0]?Ri:new ys(r)};ys.get=function(){return Ri};Ug()&&xt.registerPlugin(ys);/*!
 * SplitText 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2026, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */let ka,Ba,Ad=typeof Symbol=="function"?Symbol():"_split",ju,A0=()=>ju||pf.register(window.gsap),wd=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,Io=r=>r?typeof r=="string"?Io(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((e,t)=>(typeof t=="string"?e.push(...Io(t)):e.push(t),e),[]):[r]:[],Rd=r=>Io(r).filter(e=>e&&e.nodeType===1),qu=[],kl=function(){},w0={add:r=>r()},R0=/\s+/g,Cd=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),rl={left:0,top:0,width:0,height:0},C0=(r,e)=>{for(;++e<r.length&&r[e]===rl;);return r[e]||rl},Pd=({element:r,html:e,ariaL:t,ariaH:n})=>{r.innerHTML=e,t?r.setAttribute("aria-label",t):r.removeAttribute("aria-label"),n?r.setAttribute("aria-hidden",n):r.removeAttribute("aria-hidden")},Dd=(r,e)=>{if(e){let t=new Set(r.join("").match(e)||qu),n=r.length,i,s,a,o;if(t.size)for(;--n>-1;){s=r[n];for(a of t)if(a.startsWith(s)&&a.length>s.length){for(i=0,o=s;a.startsWith(o+=r[n+ ++i])&&o.length<a.length;);if(i&&o.length===a.length){r[n]=a,r.splice(n+1,i);break}}}}return r},Ld=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),Cs=(r,e,t)=>e.insertBefore(typeof r=="string"?document.createTextNode(r):r,t),Yu=(r,e,t)=>{let n=e[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:a=!1}=e,o=r==="line"?"block":"inline-block",c=n.indexOf("++")>-1,l=u=>{let h=document.createElement(i),f=t.length+1;return n&&(h.className=n+(c?" "+n+f:"")),a&&h.style.setProperty("--"+r,f+""),s!=="none"&&h.setAttribute("aria-hidden","true"),i!=="span"&&(h.style.position="relative",h.style.display=o),h.textContent=u,t.push(h),h};return c&&(n=n.replace("++","")),l.collection=t,l},P0=(r,e,t,n)=>{let i=Yu("line",t,n),s=window.getComputedStyle(r).textAlign||"left";return(a,o)=>{let c=i("");for(c.style.textAlign=s,r.insertBefore(c,e[a]);a<o;a++)c.appendChild(e[a]);c.normalize()}},Ng=(r,e,t,n,i,s,a,o,c,l)=>{var u;let h=Array.from(r.childNodes),f=0,{wordDelimiter:d,reduceWhiteSpace:g=!0,prepareText:_}=e,m=r.getBoundingClientRect(),p=m,v=!g&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",y=0,b=t.collection,w,R,T,C,M,x,D,I,N,G,K,X,W,F,J,P,ce,ve;for(typeof d=="object"?(T=d.delimiter||d,R=d.replaceWith||""):R=d===""?"":d||" ",w=R!==" ";f<h.length;f++)if(C=h[f],C.nodeType===3){for(J=C.textContent||"",g?J=J.replace(R0," "):v&&(J=J.replace(/\n/g,R+`
`)),_&&(J=_(J,r)),C.textContent=J,M=R||T?J.split(T||R):J.match(o)||qu,ce=M[M.length-1],I=w?ce.slice(-1)===" ":!ce,ce||M.pop(),p=m,D=w?M[0].charAt(0)===" ":!M[0],D&&Cs(" ",r,C),M[0]||M.shift(),Dd(M,c),s&&l||(C.textContent=""),N=1;N<=M.length;N++)if(P=M[N-1],!g&&v&&P.charAt(0)===`
`&&((u=C.previousSibling)==null||u.remove(),Cs(document.createElement("br"),r,C),P=P.slice(1)),!g&&P==="")Cs(R,r,C);else if(P===" ")r.insertBefore(document.createTextNode(" "),C);else{if(w&&P.charAt(0)===" "&&Cs(" ",r,C),y&&N===1&&!D&&b.indexOf(y.parentNode)>-1?(x=b[b.length-1],x.appendChild(document.createTextNode(n?"":P))):(x=t(n?"":P),Cs(x,r,C),y&&N===1&&!D&&x.insertBefore(y,x.firstChild)),n)for(K=wd?Dd([...wd.segment(P)].map(Pe=>Pe.segment),c):P.match(o)||qu,ve=0;ve<K.length;ve++)x.appendChild(K[ve]===" "?document.createTextNode(" "):n(K[ve]));if(s&&l){if(J=C.textContent=J.substring(P.length+1,J.length),G=x.getBoundingClientRect(),G.top>p.top&&G.left<=p.left){for(X=r.cloneNode(),W=r.childNodes[0];W&&W!==x;)F=W,W=W.nextSibling,X.appendChild(F);r.parentNode.insertBefore(X,r),i&&Ld(X)}p=G}(N<M.length||I)&&Cs(N>=M.length?" ":w&&P.slice(-1)===" "?" "+R:R,r,C)}r.removeChild(C),y=0}else C.nodeType===1&&(a&&a.indexOf(C)>-1?(b.indexOf(C.previousSibling)>-1&&b[b.length-1].appendChild(C),y=C):(Ng(C,e,t,n,i,s,a,o,c,!0),y=0),i&&Ld(C))};const Fg=class Og{constructor(e,t){this.isSplit=!1,A0(),this.elements=Rd(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this.elements.forEach(a=>{var o;t.overwrite!==!1&&((o=a[Ad])==null||o._data.orig.filter(({element:c})=>c===a).forEach(Pd)),a[Ad]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i,s=()=>{let a=n.length,o;for(;a--;){o=n[a];let c=o.element.offsetWidth;if(c!==o.width){o.width=c,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(i),i=setTimeout(s,200)})},kl(this),this.split(t)}split(e){return(this._ctx||w0).add(()=>{this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:s,onSplit:a,autoSplit:o=!1,specialChars:c,mask:l}=this.vars,u=t.indexOf("lines")>-1,h=t.indexOf("chars")>-1,f=t.indexOf("words")>-1,d=h&&!f&&!u,g=c&&("push"in c?new RegExp("(?:"+c.join("|")+")","gu"):c),_=g?new RegExp(g.source+"|"+Cd.source,"gu"):Cd,m=!!e.ignore&&Rd(e.ignore),{orig:p,animTime:v,obs:y}=this._data,b;(h||f||u)&&(this.elements.forEach((w,R)=>{p[R]={element:w,html:w.innerHTML,ariaL:w.getAttribute("aria-label"),ariaH:w.getAttribute("aria-hidden")},n==="auto"?w.setAttribute("aria-label",(w.textContent||"").trim()):n==="hidden"&&w.setAttribute("aria-hidden","true");let T=[],C=[],M=[],x=h?Yu("char",e,T):null,D=Yu("word",e,C),I,N,G,K;if(Ng(w,e,D,x,d,i&&(u||d),m,_,g,!1),u){let X=Io(w.childNodes),W=P0(w,X,e,M),F,J=[],P=0,ce=X.map(Y=>Y.nodeType===1?Y.getBoundingClientRect():rl),ve=rl,Pe;for(I=0;I<X.length;I++)F=X[I],F.nodeType===1&&(F.nodeName==="BR"?((!I||X[I-1].nodeName!=="BR")&&(J.push(F),W(P,I+1)),P=I+1,ve=C0(ce,I)):(Pe=ce[I],I&&Pe.top>ve.top&&Pe.left<ve.left+ve.width-1&&(W(P,I),P=I),ve=Pe));P<I&&W(P,I),J.forEach(Y=>{var re;return(re=Y.parentNode)==null?void 0:re.removeChild(Y)})}if(!f){for(I=0;I<C.length;I++)if(N=C[I],h||!N.nextSibling||N.nextSibling.nodeType!==3)if(s&&!u){for(G=document.createElement("span"),G.style.whiteSpace="nowrap";N.firstChild;)G.appendChild(N.firstChild);N.replaceWith(G)}else N.replaceWith(...N.childNodes);else K=N.nextSibling,K&&K.nodeType===3&&(K.textContent=(N.textContent||"")+(K.textContent||""),N.remove());C.length=0,w.normalize()}this.lines.push(...M),this.words.push(...C),this.chars.push(...T)}),l&&this[l]&&this.masks.push(...this[l].map(w=>{let R=w.cloneNode();return w.replaceWith(R),R.appendChild(w),w.className&&(R.className=w.className.trim().split(" ").map(T=>T+"-mask").join(" ")),R.style.overflow="clip",R}))),this.isSplit=!0,Ba&&u&&o&&Ba.addEventListener("loadingdone",this._split),(b=a&&a(this))&&b.totalTime&&(this._data.anim=v?b.totalTime(v):b),u&&o&&this.elements.forEach((w,R)=>{p[R].width=w.offsetWidth,y&&y.observe(w)})}),this}kill(){let{obs:e}=this._data;e&&e.disconnect(),Ba==null||Ba.removeEventListener("loadingdone",this._split)}revert(){var e,t;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(Pd),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this)}return this}static create(e,t){return new Og(e,t)}static register(e){ka=ka||e||window.gsap,ka&&(Io=ka.utils.toArray,kl=ka.core.context||kl),!ju&&window.innerWidth>0&&(Ba=document.fonts,ju=!0)}};Fg.version="3.15.0";let pf=Fg;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mf="170",D0=0,Id=1,L0=2,kg=1,I0=2,Qi=3,ur=0,On=1,Di=2,sr=0,sa=1,sl=2,Ud=3,Nd=4,U0=5,as=100,N0=101,F0=102,O0=103,k0=104,B0=200,z0=201,H0=202,G0=203,Ku=204,Qu=205,V0=206,W0=207,X0=208,j0=209,q0=210,Y0=211,K0=212,Q0=213,$0=214,$u=0,Ju=1,Zu=2,ma=3,eh=4,th=5,nh=6,ih=7,Bg=0,J0=1,Z0=2,Or=0,zg=1,Hg=2,Gg=3,gf=4,ev=5,Vg=6,Wg=7,Fd="attached",tv="detached",Xg=300,ga=301,_a=302,rh=303,sh=304,ml=306,ba=1e3,Pr=1001,al=1002,Cn=1003,jg=1004,io=1005,Jn=1006,Bc=1007,nr=1008,hr=1009,qg=1010,Yg=1011,Uo=1012,_f=1013,Ss=1014,yi=1015,ar=1016,bf=1017,vf=1018,va=1020,Kg=35902,Qg=1021,$g=1022,fi=1023,Jg=1024,Zg=1025,aa=1026,xa=1027,xf=1028,yf=1029,e_=1030,Sf=1031,Mf=1033,zc=33776,Hc=33777,Gc=33778,Vc=33779,ah=35840,oh=35841,ch=35842,lh=35843,uh=36196,hh=37492,fh=37496,dh=37808,ph=37809,mh=37810,gh=37811,_h=37812,bh=37813,vh=37814,xh=37815,yh=37816,Sh=37817,Mh=37818,Th=37819,Eh=37820,Ah=37821,Wc=36492,wh=36494,Rh=36495,t_=36283,Ch=36284,Ph=36285,Dh=36286,No=2300,Fo=2301,Bl=2302,Od=2400,kd=2401,Bd=2402,nv=2500,iv=0,n_=1,Lh=2,rv=3200,sv=3201,i_=0,av=1,Tr="",rn="srgb",Pn="srgb-linear",gl="linear",Mt="srgb",Ps=7680,zd=519,ov=512,cv=513,lv=514,r_=515,uv=516,hv=517,fv=518,dv=519,Ih=35044,Hd="300 es",ir=2e3,ol=2001;class wa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gd=1234567;const vo=Math.PI/180,ya=180/Math.PI;function Si(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[r&255]+on[r>>8&255]+on[r>>16&255]+on[r>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function hn(r,e,t){return Math.max(e,Math.min(t,r))}function Tf(r,e){return(r%e+e)%e}function pv(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function mv(r,e,t){return r!==e?(t-r)/(e-r):0}function xo(r,e,t){return(1-t)*r+t*e}function gv(r,e,t,n){return xo(r,e,1-Math.exp(-t*n))}function _v(r,e=1){return e-Math.abs(Tf(r,e*2)-e)}function bv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function vv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function xv(r,e){return r+Math.floor(Math.random()*(e-r+1))}function yv(r,e){return r+Math.random()*(e-r)}function Sv(r){return r*(.5-Math.random())}function Mv(r){r!==void 0&&(Gd=r);let e=Gd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Tv(r){return r*vo}function Ev(r){return r*ya}function Av(r){return(r&r-1)===0&&r!==0}function wv(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Rv(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Cv(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),d=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*u,c*h,c*f,o*l);break;case"YZY":r.set(c*f,o*u,c*h,o*l);break;case"ZXZ":r.set(c*h,c*f,o*u,o*l);break;case"XZX":r.set(o*u,c*g,c*d,o*l);break;case"YXY":r.set(c*d,o*u,c*g,o*l);break;case"ZYZ":r.set(c*g,c*d,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function vi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Tt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Pv={DEG2RAD:vo,RAD2DEG:ya,generateUUID:Si,clamp:hn,euclideanModulo:Tf,mapLinear:pv,inverseLerp:mv,lerp:xo,damp:gv,pingpong:_v,smoothstep:bv,smootherstep:vv,randInt:xv,randFloat:yv,randFloatSpread:Sv,seededRandom:Mv,degToRad:Tv,radToDeg:Ev,isPowerOfTwo:Av,ceilPowerOfTwo:wv,floorPowerOfTwo:Rv,setQuaternionFromProperEuler:Cv,normalize:Tt,denormalize:vi};class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(hn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,n,i,s,a,o,c,l){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],y=i[4],b=i[7],w=i[2],R=i[5],T=i[8];return s[0]=a*_+o*v+c*w,s[3]=a*m+o*y+c*R,s[6]=a*p+o*b+c*T,s[1]=l*_+u*v+h*w,s[4]=l*m+u*y+h*R,s[7]=l*p+u*b+h*T,s[2]=f*_+d*v+g*w,s[5]=f*m+d*y+g*R,s[8]=f*p+d*b+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*s,d=l*s-a*c,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*l-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(u*t-i*c)*_,e[5]=(i*s-o*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(zl.makeScale(e,t)),this}rotate(e){return this.premultiply(zl.makeRotation(-e)),this}translate(e,t){return this.premultiply(zl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zl=new et;function s_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Oo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Dv(){const r=Oo("canvas");return r.style.display="block",r}const Vd={};function ro(r){r in Vd||(Vd[r]=!0,console.warn(r))}function Lv(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Iv(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Uv(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ut={enabled:!0,workingColorSpace:Pn,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Mt&&(r.r=or(r.r),r.g=or(r.g),r.b=or(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Mt&&(r.r=oa(r.r),r.g=oa(r.g),r.b=oa(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Tr?gl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function or(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function oa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Wd=[.64,.33,.3,.6,.15,.06],Xd=[.2126,.7152,.0722],jd=[.3127,.329],qd=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yd=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ut.define({[Pn]:{primaries:Wd,whitePoint:jd,transfer:gl,toXYZ:qd,fromXYZ:Yd,luminanceCoefficients:Xd,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:Wd,whitePoint:jd,transfer:Mt,toXYZ:qd,fromXYZ:Yd,luminanceCoefficients:Xd,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}});let Ds;class Nv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ds===void 0&&(Ds=Oo("canvas")),Ds.width=e.width,Ds.height=e.height;const n=Ds.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Oo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=or(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(or(t[n]/255)*255):t[n]=or(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fv=0;class a_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fv++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Hl(i[a].image)):s.push(Hl(i[a]))}else s=Hl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Hl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Nv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ov=0;class Qt extends wa{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,n=Pr,i=Pr,s=Jn,a=nr,o=fi,c=hr,l=Qt.DEFAULT_ANISOTROPY,u=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=Si(),this.name="",this.source=new a_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ba:e.x=e.x-Math.floor(e.x);break;case Pr:e.x=e.x<0?0:1;break;case al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ba:e.y=e.y-Math.floor(e.y);break;case Pr:e.y=e.y<0?0:1;break;case al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Xg;Qt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,i=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,b=(d+1)/2,w=(p+1)/2,R=(u+f)/4,T=(h+_)/4,C=(g+m)/4;return y>b&&y>w?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=R/n,s=T/n):b>w?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=R/i,s=C/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=T/s,i=C/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(f-u)/v,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kv extends wa{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Qt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new a_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends kv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class o_ extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bv extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const f=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==f||l!==d||u!==g){let m=1-o;const p=c*f+l*d+u*g+h*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const w=Math.sqrt(y),R=Math.atan2(w,p*v);m=Math.sin(m*R)/w,o=Math.sin(o*R)/w}const b=o*v;if(c=c*m+f*b,l=l*m+d*b,u=u*m+g*b,h=h*m+_*b,m===1-o){const w=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=w,l*=w,u*=w,h*=w}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*h+c*d-l*f,e[t+1]=c*g+u*f+l*h-o*d,e[t+2]=l*g+u*d+o*f-c*h,e[t+3]=u*g-o*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(s/2),f=c(n/2),d=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+l)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-s*c,this._y=i*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=i+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gl.copy(this).projectOnVector(e),this.sub(Gl)}reflect(e){return this.sub(Gl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(hn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gl=new H,Kd=new Wr;class ki{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mi):mi.fromBufferAttribute(s,a),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ic.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ic.copy(n.boundingBox)),ic.applyMatrix4(e.matrixWorld),this.union(ic)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(za),rc.subVectors(this.max,za),Ls.subVectors(e.a,za),Is.subVectors(e.b,za),Us.subVectors(e.c,za),mr.subVectors(Is,Ls),gr.subVectors(Us,Is),qr.subVectors(Ls,Us);let t=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-qr.z,qr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,qr.z,0,-qr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-qr.y,qr.x,0];return!Vl(t,Ls,Is,Us,rc)||(t=[1,0,0,0,1,0,0,0,1],!Vl(t,Ls,Is,Us,rc))?!1:(sc.crossVectors(mr,gr),t=[sc.x,sc.y,sc.z],Vl(t,Ls,Is,Us,rc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wi=[new H,new H,new H,new H,new H,new H,new H,new H],mi=new H,ic=new ki,Ls=new H,Is=new H,Us=new H,mr=new H,gr=new H,qr=new H,za=new H,rc=new H,sc=new H,Yr=new H;function Vl(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Yr.fromArray(r,s);const o=i.x*Math.abs(Yr.x)+i.y*Math.abs(Yr.y)+i.z*Math.abs(Yr.z),c=e.dot(Yr),l=t.dot(Yr),u=n.dot(Yr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const zv=new ki,Ha=new H,Wl=new H;class Bi{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zv.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ha.subVectors(e,this.center);const t=Ha.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ha,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ha.copy(e.center).add(Wl)),this.expandByPoint(Ha.copy(e.center).sub(Wl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xi=new H,Xl=new H,ac=new H,_r=new H,jl=new H,oc=new H,ql=new H;class _l{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,t),Xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xl.copy(e).add(t).multiplyScalar(.5),ac.copy(t).sub(e).normalize(),_r.copy(this.origin).sub(Xl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ac),o=_r.dot(this.direction),c=-_r.dot(ac),l=_r.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*c-o,f=a*o-c,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Xl).addScaledVector(ac,f),d}intersectSphere(e,t){Xi.subVectors(e.center,this.origin);const n=Xi.dot(this.direction),i=Xi.dot(Xi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,t,n,i,s){jl.subVectors(t,e),oc.subVectors(n,e),ql.crossVectors(jl,oc);let a=this.direction.dot(ql),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_r.subVectors(this.origin,e);const c=o*this.direction.dot(oc.crossVectors(_r,oc));if(c<0)return null;const l=o*this.direction.dot(jl.cross(_r));if(l<0||c+l>a)return null;const u=-o*_r.dot(ql);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,i,s,a,o,c,l,u,h,f,d,g,_,m){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,u,h,f,d,g,_,m)}set(e,t,n,i,s,a,o,c,l,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ns.setFromMatrixColumn(e,0).length(),s=1/Ns.setFromMatrixColumn(e,1).length(),a=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+g*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,g=l*u,_=l*h;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,g=l*u,_=l*h;t[0]=f-_*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=g*l-d,t[8]=f*l+_,t[1]=c*h,t[5]=_*l+f,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*c,d=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+_,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hv,e,Gv)}lookAt(e,t,n){const i=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),br.crossVectors(n,Gn),br.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),br.crossVectors(n,Gn)),br.normalize(),cc.crossVectors(Gn,br),i[0]=br.x,i[4]=cc.x,i[8]=Gn.x,i[1]=br.y,i[5]=cc.y,i[9]=Gn.y,i[2]=br.z,i[6]=cc.z,i[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],y=n[7],b=n[11],w=n[15],R=i[0],T=i[4],C=i[8],M=i[12],x=i[1],D=i[5],I=i[9],N=i[13],G=i[2],K=i[6],X=i[10],W=i[14],F=i[3],J=i[7],P=i[11],ce=i[15];return s[0]=a*R+o*x+c*G+l*F,s[4]=a*T+o*D+c*K+l*J,s[8]=a*C+o*I+c*X+l*P,s[12]=a*M+o*N+c*W+l*ce,s[1]=u*R+h*x+f*G+d*F,s[5]=u*T+h*D+f*K+d*J,s[9]=u*C+h*I+f*X+d*P,s[13]=u*M+h*N+f*W+d*ce,s[2]=g*R+_*x+m*G+p*F,s[6]=g*T+_*D+m*K+p*J,s[10]=g*C+_*I+m*X+p*P,s[14]=g*M+_*N+m*W+p*ce,s[3]=v*R+y*x+b*G+w*F,s[7]=v*T+y*D+b*K+w*J,s[11]=v*C+y*I+b*X+w*P,s[15]=v*M+y*N+b*W+w*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*h-i*l*h-s*o*f+n*l*f+i*o*d-n*c*d)+_*(+t*c*d-t*l*f+s*a*f-i*a*d+i*l*u-s*c*u)+m*(+t*l*h-t*o*d-s*a*h+n*a*d+s*o*u-n*l*u)+p*(-i*o*u-t*c*h+t*o*f+i*a*h-n*a*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=h*m*l-_*f*l+_*c*d-o*m*d-h*c*p+o*f*p,y=g*f*l-u*m*l-g*c*d+a*m*d+u*c*p-a*f*p,b=u*_*l-g*h*l+g*o*d-a*_*d-u*o*p+a*h*p,w=g*h*c-u*_*c-g*o*f+a*_*f+u*o*m-a*h*m,R=t*v+n*y+i*b+s*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=v*T,e[1]=(_*f*s-h*m*s-_*i*d+n*m*d+h*i*p-n*f*p)*T,e[2]=(o*m*s-_*c*s+_*i*l-n*m*l-o*i*p+n*c*p)*T,e[3]=(h*c*s-o*f*s-h*i*l+n*f*l+o*i*d-n*c*d)*T,e[4]=y*T,e[5]=(u*m*s-g*f*s+g*i*d-t*m*d-u*i*p+t*f*p)*T,e[6]=(g*c*s-a*m*s-g*i*l+t*m*l+a*i*p-t*c*p)*T,e[7]=(a*f*s-u*c*s+u*i*l-t*f*l-a*i*d+t*c*d)*T,e[8]=b*T,e[9]=(g*h*s-u*_*s-g*n*d+t*_*d+u*n*p-t*h*p)*T,e[10]=(a*_*s-g*o*s+g*n*l-t*_*l-a*n*p+t*o*p)*T,e[11]=(u*o*s-a*h*s-u*n*l+t*h*l+a*n*d-t*o*d)*T,e[12]=w*T,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*m+t*h*m)*T,e[14]=(g*o*i-a*_*i-g*n*c+t*_*c+a*n*m-t*o*m)*T,e[15]=(a*h*i-u*o*i+u*n*c-t*h*c-a*n*f+t*o*f)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,f=s*l,d=s*u,g=s*h,_=a*u,m=a*h,p=o*h,v=c*l,y=c*u,b=c*h,w=n.x,R=n.y,T=n.z;return i[0]=(1-(_+p))*w,i[1]=(d+b)*w,i[2]=(g-y)*w,i[3]=0,i[4]=(d-b)*R,i[5]=(1-(f+p))*R,i[6]=(m+v)*R,i[7]=0,i[8]=(g+y)*T,i[9]=(m-v)*T,i[10]=(1-(f+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ns.set(i[0],i[1],i[2]).length();const a=Ns.set(i[4],i[5],i[6]).length(),o=Ns.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],gi.copy(this);const l=1/s,u=1/a,h=1/o;return gi.elements[0]*=l,gi.elements[1]*=l,gi.elements[2]*=l,gi.elements[4]*=u,gi.elements[5]*=u,gi.elements[6]*=u,gi.elements[8]*=h,gi.elements[9]*=h,gi.elements[10]*=h,t.setFromRotationMatrix(gi),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=ir){const c=this.elements,l=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,g;if(o===ir)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ol)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=ir){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(a-s),f=(t+e)*l,d=(n+i)*u;let g,_;if(o===ir)g=(a+s)*h,_=-2*h;else if(o===ol)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ns=new H,gi=new tt,Hv=new H(0,0,0),Gv=new H(1,1,1),br=new H,cc=new H,Gn=new H,Qd=new tt,$d=new Wr;class Oi{constructor(e=0,t=0,n=0,i=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(hn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-hn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(hn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-hn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(hn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-hn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $d.setFromEuler(this),this.setFromQuaternion($d,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class c_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vv=0;const Jd=new H,Fs=new Wr,ji=new tt,lc=new H,Ga=new H,Wv=new H,Xv=new Wr,Zd=new H(1,0,0),ep=new H(0,1,0),tp=new H(0,0,1),np={type:"added"},jv={type:"removed"},Os={type:"childadded",child:null},Yl={type:"childremoved",child:null};class Nt extends wa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new H,t=new Oi,n=new Wr,i=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tt},normalMatrix:{value:new et}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new c_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(Zd,e)}rotateY(e){return this.rotateOnAxis(ep,e)}rotateZ(e){return this.rotateOnAxis(tp,e)}translateOnAxis(e,t){return Jd.copy(e).applyQuaternion(this.quaternion),this.position.add(Jd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zd,e)}translateY(e){return this.translateOnAxis(ep,e)}translateZ(e){return this.translateOnAxis(tp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?lc.copy(e):lc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(Ga,lc,this.up):ji.lookAt(lc,Ga,this.up),this.quaternion.setFromRotationMatrix(ji),i&&(ji.extractRotation(i.matrixWorld),Fs.setFromRotationMatrix(ji),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(np),Os.child=e,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jv),Yl.child=e,this.dispatchEvent(Yl),Yl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(np),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,Wv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,Xv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Nt.DEFAULT_UP=new H(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new H,qi=new H,Kl=new H,Yi=new H,ks=new H,Bs=new H,ip=new H,Ql=new H,$l=new H,Jl=new H,Zl=new pt,eu=new pt,tu=new pt;class xi{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),_i.subVectors(e,t),i.cross(_i);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){_i.subVectors(i,t),qi.subVectors(n,t),Kl.subVectors(e,t);const a=_i.dot(_i),o=_i.dot(qi),c=_i.dot(Kl),l=qi.dot(qi),u=qi.dot(Kl),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(l*c-o*u)*f,g=(a*u-o*c)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,Yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Yi.x),c.addScaledVector(a,Yi.y),c.addScaledVector(o,Yi.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return Zl.setScalar(0),eu.setScalar(0),tu.setScalar(0),Zl.fromBufferAttribute(e,t),eu.fromBufferAttribute(e,n),tu.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Zl,s.x),a.addScaledVector(eu,s.y),a.addScaledVector(tu,s.z),a}static isFrontFacing(e,t,n,i){return _i.subVectors(n,t),qi.subVectors(e,t),_i.cross(qi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),_i.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return xi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;ks.subVectors(i,n),Bs.subVectors(s,n),Ql.subVectors(e,n);const c=ks.dot(Ql),l=Bs.dot(Ql);if(c<=0&&l<=0)return t.copy(n);$l.subVectors(e,i);const u=ks.dot($l),h=Bs.dot($l);if(u>=0&&h<=u)return t.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(ks,a);Jl.subVectors(e,s);const d=ks.dot(Jl),g=Bs.dot(Jl);if(g>=0&&d<=g)return t.copy(s);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Bs,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return ip.subVectors(s,i),o=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(ip,o);const p=1/(m+_+f);return a=_*p,o=f*p,t.copy(n).addScaledVector(ks,a).addScaledVector(Bs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const l_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},uc={h:0,s:0,l:0};function nu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ut.workingColorSpace){if(e=Tf(e,1),t=hn(t,0,1),n=hn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=nu(a,s,e+1/3),this.g=nu(a,s,e),this.b=nu(a,s,e-1/3)}return ut.toWorkingColorSpace(this,i),this}setStyle(e,t=rn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){const n=l_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return ut.fromWorkingColorSpace(cn.copy(this),e),Math.round(hn(cn.r*255,0,255))*65536+Math.round(hn(cn.g*255,0,255))*256+Math.round(hn(cn.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(cn.copy(this),t);const n=cn.r,i=cn.g,s=cn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=rn){ut.fromWorkingColorSpace(cn.copy(this),e);const t=cn.r,n=cn.g,i=cn.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+t,vr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vr),e.getHSL(uc);const n=xo(vr.h,uc.h,t),i=xo(vr.s,uc.s,t),s=xo(vr.l,uc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new He;He.NAMES=l_;let qv=0;class Ni extends wa{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qv++}),this.uuid=Si(),this.name="",this.blending=sa,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ku,this.blendDst=Qu,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==sa&&(n.blending=this.blending),this.side!==ur&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ku&&(n.blendSrc=this.blendSrc),this.blendDst!==Qu&&(n.blendDst=this.blendDst),this.blendEquation!==as&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ma&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Dr extends Ni{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Bg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new H,hc=new je;class mn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ih,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hc.fromBufferAttribute(this,t),hc.applyMatrix3(e),this.setXY(t,hc.x,hc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ih&&(e.usage=this.usage),e}}class u_ extends mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class h_ extends mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class kn extends mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Yv=0;const ri=new tt,iu=new Nt,zs=new H,Vn=new ki,Va=new ki,Zt=new H;class ni extends wa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(s_(e)?h_:u_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,n){return ri.makeTranslation(e,t,n),this.applyMatrix4(ri),this}scale(e,t,n){return ri.makeScale(e,t,n),this.applyMatrix4(ri),this}lookAt(e){return iu.lookAt(e),iu.updateMatrix(),this.applyMatrix4(iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new kn(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Va.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(Vn.min,Va.min),Vn.expandByPoint(Zt),Zt.addVectors(Vn.max,Va.max),Vn.expandByPoint(Zt)):(Vn.expandByPoint(Va.min),Vn.expandByPoint(Va.max))}Vn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Zt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Zt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Zt.fromBufferAttribute(o,l),c&&(zs.fromBufferAttribute(e,l),Zt.add(zs)),i=Math.max(i,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new H,c[C]=new H;const l=new H,u=new H,h=new H,f=new je,d=new je,g=new je,_=new H,m=new H;function p(C,M,x){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,x),f.fromBufferAttribute(s,C),d.fromBufferAttribute(s,M),g.fromBufferAttribute(s,x),u.sub(l),h.sub(l),d.sub(f),g.sub(f);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(D),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),o[C].add(_),o[M].add(_),o[x].add(_),c[C].add(m),c[M].add(m),c[x].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,M=v.length;C<M;++C){const x=v[C],D=x.start,I=x.count;for(let N=D,G=D+I;N<G;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const y=new H,b=new H,w=new H,R=new H;function T(C){w.fromBufferAttribute(i,C),R.copy(w);const M=o[C];y.copy(M),y.sub(w.multiplyScalar(w.dot(M))).normalize(),b.crossVectors(R,M);const D=b.dot(c[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,D)}for(let C=0,M=v.length;C<M;++C){const x=v[C],D=x.start,I=x.count;for(let N=D,G=D+I;N<G;N+=3)T(e.getX(N+0)),T(e.getX(N+1)),T(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new H,s=new H,a=new H,o=new H,c=new H,l=new H,u=new H,h=new H;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new mn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ni,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rp=new tt,Kr=new _l,fc=new Bi,sp=new H,dc=new H,pc=new H,mc=new H,ru=new H,gc=new H,ap=new H,_c=new H;class wn extends Nt{constructor(e=new ni,t=new Dr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){gc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(ru.fromBufferAttribute(h,e),a?gc.addScaledVector(ru,u):gc.addScaledVector(ru.sub(t),u))}t.add(gc)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fc.copy(n.boundingSphere),fc.applyMatrix4(s),Kr.copy(e.ray).recast(e.near),!(fc.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(fc,sp)===null||Kr.origin.distanceToSquared(sp)>(e.far-e.near)**2))&&(rp.copy(s).invert(),Kr.copy(e.ray).applyMatrix4(rp),!(n.boundingBox!==null&&Kr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Kr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let b=v,w=y;b<w;b+=3){const R=o.getX(b),T=o.getX(b+1),C=o.getX(b+2);i=bc(this,p,e,n,l,u,h,R,T,C),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=o.getX(m),y=o.getX(m+1),b=o.getX(m+2);i=bc(this,a,e,n,l,u,h,v,y,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let b=v,w=y;b<w;b+=3){const R=b,T=b+1,C=b+2;i=bc(this,p,e,n,l,u,h,R,T,C),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=m,y=m+1,b=m+2;i=bc(this,a,e,n,l,u,h,v,y,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Kv(r,e,t,n,i,s,a,o){let c;if(e.side===On?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===ur,o),c===null)return null;_c.copy(o),_c.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(_c);return l<t.near||l>t.far?null:{distance:l,point:_c.clone(),object:r}}function bc(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,dc),r.getVertexPosition(c,pc),r.getVertexPosition(l,mc);const u=Kv(r,e,t,n,dc,pc,mc,ap);if(u){const h=new H;xi.getBarycoord(ap,dc,pc,mc,h),i&&(u.uv=xi.getInterpolatedAttribute(i,o,c,l,h,new je)),s&&(u.uv1=xi.getInterpolatedAttribute(s,o,c,l,h,new je)),a&&(u.normal=xi.getInterpolatedAttribute(a,o,c,l,h,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new H,materialIndex:0};xi.getNormal(dc,pc,mc,f.normal),u.face=f,u.barycoord=h}return u}class zo extends ni{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new kn(l,3)),this.setAttribute("normal",new kn(u,3)),this.setAttribute("uv",new kn(h,2));function g(_,m,p,v,y,b,w,R,T,C,M){const x=b/T,D=w/C,I=b/2,N=w/2,G=R/2,K=T+1,X=C+1;let W=0,F=0;const J=new H;for(let P=0;P<X;P++){const ce=P*D-N;for(let ve=0;ve<K;ve++){const Pe=ve*x-I;J[_]=Pe*v,J[m]=ce*y,J[p]=G,l.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[p]=R>0?1:-1,u.push(J.x,J.y,J.z),h.push(ve/T),h.push(1-P/C),W+=1}}for(let P=0;P<C;P++)for(let ce=0;ce<T;ce++){const ve=f+ce+K*P,Pe=f+ce+K*(P+1),Y=f+(ce+1)+K*(P+1),re=f+(ce+1)+K*P;c.push(ve,Pe,re),c.push(Pe,Y,re),F+=6}o.addGroup(d,F,M),d+=F,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Sa(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function yn(r){const e={};for(let t=0;t<r.length;t++){const n=Sa(r[t]);for(const i in n)e[i]=n[i]}return e}function Qv(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function f_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const ko={clone:Sa,merge:yn};var $v=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends Ni{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$v,this.fragmentShader=Jv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sa(e.uniforms),this.uniformsGroups=Qv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class d_ extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=ir}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xr=new H,op=new je,cp=new je;class En extends d_{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ya*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ya*2*Math.atan(Math.tan(vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,t){return this.getViewBounds(e,op,cp),t.subVectors(cp,op)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hs=-90,Gs=1;class Zv extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new En(Hs,Gs,e,t);i.layers=this.layers,this.add(i);const s=new En(Hs,Gs,e,t);s.layers=this.layers,this.add(s);const a=new En(Hs,Gs,e,t);a.layers=this.layers,this.add(a);const o=new En(Hs,Gs,e,t);o.layers=this.layers,this.add(o);const c=new En(Hs,Gs,e,t);c.layers=this.layers,this.add(c);const l=new En(Hs,Gs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===ir)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ol)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class p_ extends Qt{constructor(e,t,n,i,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:ga,super(e,t,n,i,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ex extends Mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new p_(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new zo(5,5,5),s=new Rn({name:"CubemapFromEquirect",uniforms:Sa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:sr});s.uniforms.tEquirect.value=t;const a=new wn(i,s),o=t.minFilter;return t.minFilter===nr&&(t.minFilter=Jn),new Zv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const su=new H,tx=new H,nx=new et;class rs{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=su.subVectors(n,t).cross(tx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(su),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||nx.getNormalMatrix(e),i=this.coplanarPoint(su).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qr=new Bi,vc=new H;class Ef{constructor(e=new rs,t=new rs,n=new rs,i=new rs,s=new rs,a=new rs){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ir){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],v=i[13],y=i[14],b=i[15];if(n[0].setComponents(c-s,f-l,m-d,b-p).normalize(),n[1].setComponents(c+s,f+l,m+d,b+p).normalize(),n[2].setComponents(c+a,f+u,m+g,b+v).normalize(),n[3].setComponents(c-a,f-u,m-g,b-v).normalize(),n[4].setComponents(c-o,f-h,m-_,b-y).normalize(),t===ir)n[5].setComponents(c+o,f+h,m+_,b+y).normalize();else if(t===ol)n[5].setComponents(o,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){return Qr.center.set(0,0,0),Qr.radius=.7071067811865476,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(vc.x=i.normal.x>0?e.max.x:e.min.x,vc.y=i.normal.y>0?e.max.y:e.min.y,vc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(vc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function m_(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function ix(r){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,f=r.createBuffer();r.bindBuffer(c,f),r.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=r.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=r.SHORT;else if(l instanceof Uint32Array)d=r.UNSIGNED_INT;else if(l instanceof Int32Array)d=r.INT;else if(l instanceof Int8Array)d=r.BYTE;else if(l instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(r.bindBuffer(l,o),h.length===0)r.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];r.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}class bl extends ni{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=e/o,f=t/c,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const v=p*f-a;for(let y=0;y<l;y++){const b=y*h-s;g.push(b,-v,0),_.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){const y=v+l*p,b=v+l*(p+1),w=v+1+l*(p+1),R=v+1+l*p;d.push(y,b,R),d.push(b,w,R)}this.setIndex(d),this.setAttribute("position",new kn(g,3)),this.setAttribute("normal",new kn(_,3)),this.setAttribute("uv",new kn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.width,e.height,e.widthSegments,e.heightSegments)}}var rx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ax=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ox=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ux=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,px=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_x=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Px=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ix=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ux="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ox=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$x=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ey=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ty=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ny=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ry=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ay=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ly=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,py=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,my=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_y=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,by=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,My=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ty=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ey=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ay=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ry=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Py=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ly=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Iy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ny=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Oy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ky=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,By=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ky=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$y=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_S=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,SS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,TS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ES=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,RS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,LS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,US=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,NS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:rx,alphahash_pars_fragment:sx,alphamap_fragment:ax,alphamap_pars_fragment:ox,alphatest_fragment:cx,alphatest_pars_fragment:lx,aomap_fragment:ux,aomap_pars_fragment:hx,batching_pars_vertex:fx,batching_vertex:dx,begin_vertex:px,beginnormal_vertex:mx,bsdfs:gx,iridescence_fragment:_x,bumpmap_pars_fragment:bx,clipping_planes_fragment:vx,clipping_planes_pars_fragment:xx,clipping_planes_pars_vertex:yx,clipping_planes_vertex:Sx,color_fragment:Mx,color_pars_fragment:Tx,color_pars_vertex:Ex,color_vertex:Ax,common:wx,cube_uv_reflection_fragment:Rx,defaultnormal_vertex:Cx,displacementmap_pars_vertex:Px,displacementmap_vertex:Dx,emissivemap_fragment:Lx,emissivemap_pars_fragment:Ix,colorspace_fragment:Ux,colorspace_pars_fragment:Nx,envmap_fragment:Fx,envmap_common_pars_fragment:Ox,envmap_pars_fragment:kx,envmap_pars_vertex:Bx,envmap_physical_pars_fragment:Qx,envmap_vertex:zx,fog_vertex:Hx,fog_pars_vertex:Gx,fog_fragment:Vx,fog_pars_fragment:Wx,gradientmap_pars_fragment:Xx,lightmap_pars_fragment:jx,lights_lambert_fragment:qx,lights_lambert_pars_fragment:Yx,lights_pars_begin:Kx,lights_toon_fragment:$x,lights_toon_pars_fragment:Jx,lights_phong_fragment:Zx,lights_phong_pars_fragment:ey,lights_physical_fragment:ty,lights_physical_pars_fragment:ny,lights_fragment_begin:iy,lights_fragment_maps:ry,lights_fragment_end:sy,logdepthbuf_fragment:ay,logdepthbuf_pars_fragment:oy,logdepthbuf_pars_vertex:cy,logdepthbuf_vertex:ly,map_fragment:uy,map_pars_fragment:hy,map_particle_fragment:fy,map_particle_pars_fragment:dy,metalnessmap_fragment:py,metalnessmap_pars_fragment:my,morphinstance_vertex:gy,morphcolor_vertex:_y,morphnormal_vertex:by,morphtarget_pars_vertex:vy,morphtarget_vertex:xy,normal_fragment_begin:yy,normal_fragment_maps:Sy,normal_pars_fragment:My,normal_pars_vertex:Ty,normal_vertex:Ey,normalmap_pars_fragment:Ay,clearcoat_normal_fragment_begin:wy,clearcoat_normal_fragment_maps:Ry,clearcoat_pars_fragment:Cy,iridescence_pars_fragment:Py,opaque_fragment:Dy,packing:Ly,premultiplied_alpha_fragment:Iy,project_vertex:Uy,dithering_fragment:Ny,dithering_pars_fragment:Fy,roughnessmap_fragment:Oy,roughnessmap_pars_fragment:ky,shadowmap_pars_fragment:By,shadowmap_pars_vertex:zy,shadowmap_vertex:Hy,shadowmask_pars_fragment:Gy,skinbase_vertex:Vy,skinning_pars_vertex:Wy,skinning_vertex:Xy,skinnormal_vertex:jy,specularmap_fragment:qy,specularmap_pars_fragment:Yy,tonemapping_fragment:Ky,tonemapping_pars_fragment:Qy,transmission_fragment:$y,transmission_pars_fragment:Jy,uv_pars_fragment:Zy,uv_pars_vertex:eS,uv_vertex:tS,worldpos_vertex:nS,background_vert:iS,background_frag:rS,backgroundCube_vert:sS,backgroundCube_frag:aS,cube_vert:oS,cube_frag:cS,depth_vert:lS,depth_frag:uS,distanceRGBA_vert:hS,distanceRGBA_frag:fS,equirect_vert:dS,equirect_frag:pS,linedashed_vert:mS,linedashed_frag:gS,meshbasic_vert:_S,meshbasic_frag:bS,meshlambert_vert:vS,meshlambert_frag:xS,meshmatcap_vert:yS,meshmatcap_frag:SS,meshnormal_vert:MS,meshnormal_frag:TS,meshphong_vert:ES,meshphong_frag:AS,meshphysical_vert:wS,meshphysical_frag:RS,meshtoon_vert:CS,meshtoon_frag:PS,points_vert:DS,points_frag:LS,shadow_vert:IS,shadow_frag:US,sprite_vert:NS,sprite_frag:FS},Se={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Ci={basic:{uniforms:yn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:yn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new He(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:yn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:yn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:yn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new He(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:yn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:yn([Se.points,Se.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:yn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:yn([Se.common,Se.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:yn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:yn([Se.sprite,Se.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:yn([Se.common,Se.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:yn([Se.lights,Se.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Ci.physical={uniforms:yn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const xc={r:0,b:0,g:0},$r=new Oi,OS=new tt;function kS(r,e,t,n,i,s,a){const o=new He(0);let c=s===!0?0:1,l,u,h=null,f=0,d=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function _(v){let y=!1;const b=g(v);b===null?p(o,c):b&&b.isColor&&(p(b,1),y=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(v,y){const b=g(y);b&&(b.isCubeTexture||b.mapping===ml)?(u===void 0&&(u=new wn(new zo(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Sa(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),$r.copy(y.backgroundRotation),$r.x*=-1,$r.y*=-1,$r.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(OS.makeRotationFromEuler($r)),u.material.toneMapped=ut.getTransfer(b.colorSpace)!==Mt,(h!==b||f!==b.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,d=r.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new wn(new bl(2,2),new Rn({name:"BackgroundMaterial",uniforms:Sa(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ut.getTransfer(b.colorSpace)!==Mt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,d=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,y){v.getRGB(xc,f_(r)),n.buffers.color.setClear(xc.r,xc.g,xc.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(o,c)},render:_,addToRenderList:m}}function BS(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(x,D,I,N,G){let K=!1;const X=h(N,I,D);s!==X&&(s=X,l(s.object)),K=d(x,N,I,G),K&&g(x,N,I,G),G!==null&&e.update(G,r.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,b(x,D,I,N),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return r.createVertexArray()}function l(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function h(x,D,I){const N=I.wireframe===!0;let G=n[x.id];G===void 0&&(G={},n[x.id]=G);let K=G[D.id];K===void 0&&(K={},G[D.id]=K);let X=K[N];return X===void 0&&(X=f(c()),K[N]=X),X}function f(x){const D=[],I=[],N=[];for(let G=0;G<t;G++)D[G]=0,I[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:I,attributeDivisors:N,object:x,attributes:{},index:null}}function d(x,D,I,N){const G=s.attributes,K=D.attributes;let X=0;const W=I.getAttributes();for(const F in W)if(W[F].location>=0){const P=G[F];let ce=K[F];if(ce===void 0&&(F==="instanceMatrix"&&x.instanceMatrix&&(ce=x.instanceMatrix),F==="instanceColor"&&x.instanceColor&&(ce=x.instanceColor)),P===void 0||P.attribute!==ce||ce&&P.data!==ce.data)return!0;X++}return s.attributesNum!==X||s.index!==N}function g(x,D,I,N){const G={},K=D.attributes;let X=0;const W=I.getAttributes();for(const F in W)if(W[F].location>=0){let P=K[F];P===void 0&&(F==="instanceMatrix"&&x.instanceMatrix&&(P=x.instanceMatrix),F==="instanceColor"&&x.instanceColor&&(P=x.instanceColor));const ce={};ce.attribute=P,P&&P.data&&(ce.data=P.data),G[F]=ce,X++}s.attributes=G,s.attributesNum=X,s.index=N}function _(){const x=s.newAttributes;for(let D=0,I=x.length;D<I;D++)x[D]=0}function m(x){p(x,0)}function p(x,D){const I=s.newAttributes,N=s.enabledAttributes,G=s.attributeDivisors;I[x]=1,N[x]===0&&(r.enableVertexAttribArray(x),N[x]=1),G[x]!==D&&(r.vertexAttribDivisor(x,D),G[x]=D)}function v(){const x=s.newAttributes,D=s.enabledAttributes;for(let I=0,N=D.length;I<N;I++)D[I]!==x[I]&&(r.disableVertexAttribArray(I),D[I]=0)}function y(x,D,I,N,G,K,X){X===!0?r.vertexAttribIPointer(x,D,I,G,K):r.vertexAttribPointer(x,D,I,N,G,K)}function b(x,D,I,N){_();const G=N.attributes,K=I.getAttributes(),X=D.defaultAttributeValues;for(const W in K){const F=K[W];if(F.location>=0){let J=G[W];if(J===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(J=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(J=x.instanceColor)),J!==void 0){const P=J.normalized,ce=J.itemSize,ve=e.get(J);if(ve===void 0)continue;const Pe=ve.buffer,Y=ve.type,re=ve.bytesPerElement,_e=Y===r.INT||Y===r.UNSIGNED_INT||J.gpuType===_f;if(J.isInterleavedBufferAttribute){const ue=J.data,Ee=ue.stride,De=J.offset;if(ue.isInstancedInterleavedBuffer){for(let Ge=0;Ge<F.locationSize;Ge++)p(F.location+Ge,ue.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ge=0;Ge<F.locationSize;Ge++)m(F.location+Ge);r.bindBuffer(r.ARRAY_BUFFER,Pe);for(let Ge=0;Ge<F.locationSize;Ge++)y(F.location+Ge,ce/F.locationSize,Y,P,Ee*re,(De+ce/F.locationSize*Ge)*re,_e)}else{if(J.isInstancedBufferAttribute){for(let ue=0;ue<F.locationSize;ue++)p(F.location+ue,J.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ue=0;ue<F.locationSize;ue++)m(F.location+ue);r.bindBuffer(r.ARRAY_BUFFER,Pe);for(let ue=0;ue<F.locationSize;ue++)y(F.location+ue,ce/F.locationSize,Y,P,ce*re,ce/F.locationSize*ue*re,_e)}}else if(X!==void 0){const P=X[W];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(F.location,P);break;case 3:r.vertexAttrib3fv(F.location,P);break;case 4:r.vertexAttrib4fv(F.location,P);break;default:r.vertexAttrib1fv(F.location,P)}}}}v()}function w(){C();for(const x in n){const D=n[x];for(const I in D){const N=D[I];for(const G in N)u(N[G].object),delete N[G];delete D[I]}delete n[x]}}function R(x){if(n[x.id]===void 0)return;const D=n[x.id];for(const I in D){const N=D[I];for(const G in N)u(N[G].object),delete N[G];delete D[I]}delete n[x.id]}function T(x){for(const D in n){const I=n[D];if(I[x.id]===void 0)continue;const N=I[x.id];for(const G in N)u(N[G].object),delete N[G];delete I[x.id]}}function C(){M(),a=!0,s!==i&&(s=i,l(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function zS(r,e,t){let n;function i(l){n=l}function s(l,u){r.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(r.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function c(l,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function HS(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==fi&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const C=T===ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==hr&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==yi&&!C)}function c(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,R=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:w,maxSamples:R}}function GS(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new rs,o=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):l();else{const v=s?0:n,y=v*4;let b=p.clippingState||null;c.value=b,b=u(g,f,y,d);for(let w=0;w!==y;++w)b[w]=t[w];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,b=d;y!==_;++y,b+=4)a.copy(h[y]).applyMatrix4(v,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function VS(r){let e=new WeakMap;function t(a,o){return o===rh?a.mapping=ga:o===sh&&(a.mapping=_a),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===rh||o===sh)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new ex(c.height);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class vl extends d_{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $s=4,lp=[.125,.215,.35,.446,.526,.582],os=20,au=new vl,up=new He;let ou=null,cu=0,lu=0,uu=!1;const ss=(1+Math.sqrt(5))/2,Vs=1/ss,hp=[new H(-ss,Vs,0),new H(ss,Vs,0),new H(-Vs,0,ss),new H(Vs,0,ss),new H(0,ss,-Vs),new H(0,ss,Vs),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class fp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ou=this._renderer.getRenderTarget(),cu=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ou,cu,lu),this._renderer.xr.enabled=uu,e.scissorTest=!1,yc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ga||e.mapping===_a?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ou=this._renderer.getRenderTarget(),cu=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:ar,format:fi,colorSpace:Pn,depthBuffer:!1},i=dp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dp(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WS(s)),this._blurMaterial=XS(s,e,t)}return i}_compileMaterial(e){const t=new wn(this._lodPlanes[0],e);this._renderer.compile(t,au)}_sceneToCubeUV(e,t,n,i){const o=new En(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(up),u.toneMapping=Or,u.autoClear=!1;const d=new Dr({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),g=new wn(new zo,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(up),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):v===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const y=this._cubeSize;yc(i,v*y,p>2?y:0,y,y),u.setRenderTarget(i),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ga||e.mapping===_a;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=mp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pp());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new wn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;yc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,au)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=hp[(i-s-1)%hp.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new wn(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*os-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):os;m>os&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${os}`);const p=[];let v=0;for(let T=0;T<os;++T){const C=T/_,M=Math.exp(-C*C/2);p.push(M),T===0?v+=M:T<m&&(v+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const b=this._sizeLods[i],w=3*b*(i>y-$s?i-y+$s:0),R=4*(this._cubeSize-b);yc(t,w,R,3*b,2*b),c.setRenderTarget(t),c.render(h,au)}}function WS(r){const e=[],t=[],n=[];let i=r;const s=r-$s+1+lp.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>r-$s?c=lp[a-r+$s-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*d),y=new Float32Array(m*g*d),b=new Float32Array(p*g*d);for(let R=0;R<d;R++){const T=R%3*2/3-1,C=R>2?0:-1,M=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];v.set(M,_*g*R),y.set(f,m*g*R);const x=[R,R,R,R,R,R];b.set(x,p*g*R)}const w=new ni;w.setAttribute("position",new mn(v,_)),w.setAttribute("uv",new mn(y,m)),w.setAttribute("faceIndex",new mn(b,p)),e.push(w),i>$s&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function dp(r,e,t){const n=new Mi(r,e,t);return n.texture.mapping=ml,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yc(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function XS(r,e,t){const n=new Float32Array(os),i=new H(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function pp(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function mp(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Af(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jS(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===rh||c===sh,u=c===ga||c===_a;if(l||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new fp(r)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return l&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new fp(r)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function qS(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ro("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function YS(r,e,t,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",a),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)e.update(f[g],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],r.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const v=d.array;_=d.version;for(let y=0,b=v.length;y<b;y+=3){const w=v[y+0],R=v[y+1],T=v[y+2];f.push(w,R,R,T,T,w)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,b=v.length/3-1;y<b;y+=3){const w=y+0,R=y+1,T=y+2;f.push(w,R,R,T,T,w)}}else return;const m=new(s_(f)?h_:u_)(f,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function KS(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,d){r.drawElements(n,d,s,f*a),t.update(d,n,1)}function l(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*a,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v]*_[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function QS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function $S(r,e,t){const n=new WeakMap,i=new pt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let x=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),m===!0&&(b=3);let w=o.attributes.position.count*b,R=1;w>e.maxTextureSize&&(R=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const T=new Float32Array(w*R*4*h),C=new o_(T,w,R,h);C.type=yi,C.needsUpdate=!0;const M=b*4;for(let D=0;D<h;D++){const I=p[D],N=v[D],G=y[D],K=w*R*4*D;for(let X=0;X<I.count;X++){const W=X*M;g===!0&&(i.fromBufferAttribute(I,X),T[K+W+0]=i.x,T[K+W+1]=i.y,T[K+W+2]=i.z,T[K+W+3]=0),_===!0&&(i.fromBufferAttribute(N,X),T[K+W+4]=i.x,T[K+W+5]=i.y,T[K+W+6]=i.z,T[K+W+7]=0),m===!0&&(i.fromBufferAttribute(G,X),T[K+W+8]=i.x,T[K+W+9]=i.y,T[K+W+10]=i.z,T[K+W+11]=G.itemSize===4?i.w:1)}}f={count:h,texture:C,size:new je(w,R)},n.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function JS(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return h}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class g_ extends Qt{constructor(e,t,n,i,s,a,o,c,l,u=aa){if(u!==aa&&u!==xa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===aa&&(n=Ss),n===void 0&&u===xa&&(n=va),super(null,i,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Cn,this.minFilter=c!==void 0?c:Cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const __=new Qt,gp=new g_(1,1),b_=new o_,v_=new Bv,x_=new p_,_p=[],bp=[],vp=new Float32Array(16),xp=new Float32Array(9),yp=new Float32Array(4);function Ra(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=_p[i];if(s===void 0&&(s=new Float32Array(i),_p[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function $t(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Jt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function xl(r,e){let t=bp[e];t===void 0&&(t=new Int32Array(e),bp[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function ZS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function eM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2fv(this.addr,e),Jt(t,e)}}function tM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;r.uniform3fv(this.addr,e),Jt(t,e)}}function nM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4fv(this.addr,e),Jt(t,e)}}function iM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if($t(t,n))return;yp.set(n),r.uniformMatrix2fv(this.addr,!1,yp),Jt(t,n)}}function rM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if($t(t,n))return;xp.set(n),r.uniformMatrix3fv(this.addr,!1,xp),Jt(t,n)}}function sM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if($t(t,n))return;vp.set(n),r.uniformMatrix4fv(this.addr,!1,vp),Jt(t,n)}}function aM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function oM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2iv(this.addr,e),Jt(t,e)}}function cM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;r.uniform3iv(this.addr,e),Jt(t,e)}}function lM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4iv(this.addr,e),Jt(t,e)}}function uM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function hM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2uiv(this.addr,e),Jt(t,e)}}function fM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;r.uniform3uiv(this.addr,e),Jt(t,e)}}function dM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4uiv(this.addr,e),Jt(t,e)}}function pM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(gp.compareFunction=r_,s=gp):s=__,t.setTexture2D(e||s,i)}function mM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||v_,i)}function gM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||x_,i)}function _M(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||b_,i)}function bM(r){switch(r){case 5126:return ZS;case 35664:return eM;case 35665:return tM;case 35666:return nM;case 35674:return iM;case 35675:return rM;case 35676:return sM;case 5124:case 35670:return aM;case 35667:case 35671:return oM;case 35668:case 35672:return cM;case 35669:case 35673:return lM;case 5125:return uM;case 36294:return hM;case 36295:return fM;case 36296:return dM;case 35678:case 36198:case 36298:case 36306:case 35682:return pM;case 35679:case 36299:case 36307:return mM;case 35680:case 36300:case 36308:case 36293:return gM;case 36289:case 36303:case 36311:case 36292:return _M}}function vM(r,e){r.uniform1fv(this.addr,e)}function xM(r,e){const t=Ra(e,this.size,2);r.uniform2fv(this.addr,t)}function yM(r,e){const t=Ra(e,this.size,3);r.uniform3fv(this.addr,t)}function SM(r,e){const t=Ra(e,this.size,4);r.uniform4fv(this.addr,t)}function MM(r,e){const t=Ra(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function TM(r,e){const t=Ra(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function EM(r,e){const t=Ra(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function AM(r,e){r.uniform1iv(this.addr,e)}function wM(r,e){r.uniform2iv(this.addr,e)}function RM(r,e){r.uniform3iv(this.addr,e)}function CM(r,e){r.uniform4iv(this.addr,e)}function PM(r,e){r.uniform1uiv(this.addr,e)}function DM(r,e){r.uniform2uiv(this.addr,e)}function LM(r,e){r.uniform3uiv(this.addr,e)}function IM(r,e){r.uniform4uiv(this.addr,e)}function UM(r,e,t){const n=this.cache,i=e.length,s=xl(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||__,s[a])}function NM(r,e,t){const n=this.cache,i=e.length,s=xl(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||v_,s[a])}function FM(r,e,t){const n=this.cache,i=e.length,s=xl(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||x_,s[a])}function OM(r,e,t){const n=this.cache,i=e.length,s=xl(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||b_,s[a])}function kM(r){switch(r){case 5126:return vM;case 35664:return xM;case 35665:return yM;case 35666:return SM;case 35674:return MM;case 35675:return TM;case 35676:return EM;case 5124:case 35670:return AM;case 35667:case 35671:return wM;case 35668:case 35672:return RM;case 35669:case 35673:return CM;case 5125:return PM;case 36294:return DM;case 36295:return LM;case 36296:return IM;case 35678:case 36198:case 36298:case 36306:case 35682:return UM;case 35679:case 36299:case 36307:return NM;case 35680:case 36300:case 36308:case 36293:return FM;case 36289:case 36303:case 36311:case 36292:return OM}}class BM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bM(t.type)}}class zM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kM(t.type)}}class HM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const hu=/(\w+)(\])?(\[|\.)?/g;function Sp(r,e){r.seq.push(e),r.map[e.id]=e}function GM(r,e,t){const n=r.name,i=n.length;for(hu.lastIndex=0;;){const s=hu.exec(n),a=hu.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Sp(t,l===void 0?new BM(o,r,e):new zM(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new HM(o),Sp(t,h)),t=h}}}class Xc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);GM(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Mp(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const VM=37297;let WM=0;function XM(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Tp=new et;function jM(r){ut._getMatrix(Tp,ut.workingColorSpace,r);const e=`mat3( ${Tp.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(r)){case gl:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Ep(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+XM(r.getShaderSource(e),a)}else return i}function qM(r,e){const t=jM(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function YM(r,e){let t;switch(e){case zg:t="Linear";break;case Hg:t="Reinhard";break;case Gg:t="Cineon";break;case gf:t="ACESFilmic";break;case Vg:t="AgX";break;case Wg:t="Neutral";break;case ev:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sc=new H;function KM(){ut.getLuminanceCoefficients(Sc);const r=Sc.x.toFixed(4),e=Sc.y.toFixed(4),t=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function $M(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function JM(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function so(r){return r!==""}function Ap(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uh(r){return r.replace(ZM,tT)}const eT=new Map;function tT(r,e){let t=nt[e];if(t===void 0){const n=eT.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Uh(t)}const nT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rp(r){return r.replace(nT,iT)}function iT(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Cp(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rT(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===kg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===I0?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Qi&&(e="SHADOWMAP_TYPE_VSM"),e}function sT(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ga:case _a:e="ENVMAP_TYPE_CUBE";break;case ml:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aT(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case _a:e="ENVMAP_MODE_REFRACTION";break}return e}function oT(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Bg:e="ENVMAP_BLENDING_MULTIPLY";break;case J0:e="ENVMAP_BLENDING_MIX";break;case Z0:e="ENVMAP_BLENDING_ADD";break}return e}function cT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function lT(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=rT(t),l=sT(t),u=aT(t),h=oT(t),f=cT(t),d=QM(t),g=$M(s),_=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(so).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(so).join(`
`),p.length>0&&(p+=`
`)):(m=[Cp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),p=[Cp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Or?"#define TONE_MAPPING":"",t.toneMapping!==Or?nt.tonemapping_pars_fragment:"",t.toneMapping!==Or?YM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,qM("linearToOutputTexel",t.outputColorSpace),KM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(so).join(`
`)),a=Uh(a),a=Ap(a,t),a=wp(a,t),o=Uh(o),o=Ap(o,t),o=wp(o,t),a=Rp(a),o=Rp(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Hd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+a,b=v+p+o,w=Mp(i,i.VERTEX_SHADER,y),R=Mp(i,i.FRAGMENT_SHADER,b);i.attachShader(_,w),i.attachShader(_,R),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(D){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(_).trim(),N=i.getShaderInfoLog(w).trim(),G=i.getShaderInfoLog(R).trim();let K=!0,X=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,w,R);else{const W=Ep(i,w,"vertex"),F=Ep(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+I+`
`+W+`
`+F)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(N===""||G==="")&&(X=!1);X&&(D.diagnostics={runnable:K,programLog:I,vertexShader:{log:N,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(w),i.deleteShader(R),C=new Xc(i,_),M=JM(i,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,VM)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=WM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=R,this}let uT=0;class hT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new fT(e),t.set(e,n)),n}}class fT{constructor(e){this.id=uT++,this.code=e,this.usedTimes=0}}function dT(r,e,t,n,i,s,a){const o=new c_,c=new hT,l=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,x,D,I,N){const G=I.fog,K=N.geometry,X=M.isMeshStandardMaterial?I.environment:null,W=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),F=W&&W.mapping===ml?W.image.height:null,J=g[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const P=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ce=P!==void 0?P.length:0;let ve=0;K.morphAttributes.position!==void 0&&(ve=1),K.morphAttributes.normal!==void 0&&(ve=2),K.morphAttributes.color!==void 0&&(ve=3);let Pe,Y,re,_e;if(J){const xe=Ci[J];Pe=xe.vertexShader,Y=xe.fragmentShader}else Pe=M.vertexShader,Y=M.fragmentShader,c.update(M),re=c.getVertexShaderID(M),_e=c.getFragmentShaderID(M);const ue=r.getRenderTarget(),Ee=r.state.buffers.depth.getReversed(),De=N.isInstancedMesh===!0,Ge=N.isBatchedMesh===!0,$e=!!M.map,Oe=!!M.matcap,Ue=!!W,k=!!M.aoMap,mt=!!M.lightMap,ze=!!M.bumpMap,V=!!M.normalMap,Ae=!!M.displacementMap,ie=!!M.emissiveMap,U=!!M.metalnessMap,E=!!M.roughnessMap,S=M.anisotropy>0,O=M.clearcoat>0,Q=M.dispersion>0,Z=M.iridescence>0,te=M.sheen>0,ae=M.transmission>0,oe=S&&!!M.anisotropyMap,le=O&&!!M.clearcoatMap,Me=O&&!!M.clearcoatNormalMap,se=O&&!!M.clearcoatRoughnessMap,ne=Z&&!!M.iridescenceMap,Ne=Z&&!!M.iridescenceThicknessMap,Le=te&&!!M.sheenColorMap,be=te&&!!M.sheenRoughnessMap,qe=!!M.specularMap,ke=!!M.specularColorMap,st=!!M.specularIntensityMap,L=ae&&!!M.transmissionMap,me=ae&&!!M.thicknessMap,$=!!M.gradientMap,ee=!!M.alphaMap,he=M.alphaTest>0,pe=!!M.alphaHash,Be=!!M.extensions;let Ke=Or;M.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Ke=r.toneMapping);const At={shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:Pe,fragmentShader:Y,defines:M.defines,customVertexShaderID:re,customFragmentShaderID:_e,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Ge,batchingColor:Ge&&N._colorsTexture!==null,instancing:De,instancingColor:De&&N.instanceColor!==null,instancingMorph:De&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ue===null?r.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Pn,alphaToCoverage:!!M.alphaToCoverage,map:$e,matcap:Oe,envMap:Ue,envMapMode:Ue&&W.mapping,envMapCubeUVHeight:F,aoMap:k,lightMap:mt,bumpMap:ze,normalMap:V,displacementMap:f&&Ae,emissiveMap:ie,normalMapObjectSpace:V&&M.normalMapType===av,normalMapTangentSpace:V&&M.normalMapType===i_,metalnessMap:U,roughnessMap:E,anisotropy:S,anisotropyMap:oe,clearcoat:O,clearcoatMap:le,clearcoatNormalMap:Me,clearcoatRoughnessMap:se,dispersion:Q,iridescence:Z,iridescenceMap:ne,iridescenceThicknessMap:Ne,sheen:te,sheenColorMap:Le,sheenRoughnessMap:be,specularMap:qe,specularColorMap:ke,specularIntensityMap:st,transmission:ae,transmissionMap:L,thicknessMap:me,gradientMap:$,opaque:M.transparent===!1&&M.blending===sa&&M.alphaToCoverage===!1,alphaMap:ee,alphaTest:he,alphaHash:pe,combine:M.combine,mapUv:$e&&_(M.map.channel),aoMapUv:k&&_(M.aoMap.channel),lightMapUv:mt&&_(M.lightMap.channel),bumpMapUv:ze&&_(M.bumpMap.channel),normalMapUv:V&&_(M.normalMap.channel),displacementMapUv:Ae&&_(M.displacementMap.channel),emissiveMapUv:ie&&_(M.emissiveMap.channel),metalnessMapUv:U&&_(M.metalnessMap.channel),roughnessMapUv:E&&_(M.roughnessMap.channel),anisotropyMapUv:oe&&_(M.anisotropyMap.channel),clearcoatMapUv:le&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Me&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:be&&_(M.sheenRoughnessMap.channel),specularMapUv:qe&&_(M.specularMap.channel),specularColorMapUv:ke&&_(M.specularColorMap.channel),specularIntensityMapUv:st&&_(M.specularIntensityMap.channel),transmissionMapUv:L&&_(M.transmissionMap.channel),thicknessMapUv:me&&_(M.thicknessMap.channel),alphaMapUv:ee&&_(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(V||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!K.attributes.uv&&($e||ee),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ee,skinning:N.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:ve,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ke,decodeVideoTexture:$e&&M.map.isVideoTexture===!0&&ut.getTransfer(M.map.colorSpace)===Mt,decodeVideoTextureEmissive:ie&&M.emissiveMap.isVideoTexture===!0&&ut.getTransfer(M.emissiveMap.colorSpace)===Mt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Di,flipSided:M.side===On,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Be&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&M.extensions.multiDraw===!0||Ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return At.vertexUv1s=l.has(1),At.vertexUv2s=l.has(2),At.vertexUv3s=l.has(3),l.clear(),At}function p(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)x.push(D),x.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(v(x,M),y(x,M),x.push(r.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function v(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function y(M,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),M.push(o.mask)}function b(M){const x=g[M.type];let D;if(x){const I=Ci[x];D=ko.clone(I.uniforms)}else D=M.uniforms;return D}function w(M,x){let D;for(let I=0,N=u.length;I<N;I++){const G=u[I];if(G.cacheKey===x){D=G,++D.usedTimes;break}}return D===void 0&&(D=new lT(r,x,M,s),u.push(D)),D}function R(M){if(--M.usedTimes===0){const x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),M.destroy()}}function T(M){c.remove(M)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:w,releaseProgram:R,releaseShaderCache:T,programs:u,dispose:C}}function pT(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function mT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Pp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Dp(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,d,g,_,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||mT),n.length>1&&n.sort(f||Pp),i.length>1&&i.sort(f||Pp)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:u,sort:l}}function gT(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Dp,r.set(n,[a])):i>=s.length?(a=new Dp,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function _T(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new He};break;case"SpotLight":t={position:new H,direction:new H,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new H,halfWidth:new H,halfHeight:new H};break}return r[e.id]=t,t}}}function bT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let vT=0;function xT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function yT(r){const e=new _T,t=bT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new H);const i=new H,s=new tt,a=new tt;function o(l){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,v=0,y=0,b=0,w=0,R=0,T=0;l.sort(xT);for(let M=0,x=l.length;M<x;M++){const D=l[M],I=D.color,N=D.intensity,G=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=I.r*N,h+=I.g*N,f+=I.b*N;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],N);T++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const W=D.shadow,F=t.get(D);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,n.directionalShadow[d]=F,n.directionalShadowMap[d]=K,n.directionalShadowMatrix[d]=D.shadow.matrix,v++}n.directional[d]=X,d++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(I).multiplyScalar(N),X.distance=G,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[_]=X;const W=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,W.updateMatrices(D),D.castShadow&&R++),n.spotLightMatrix[_]=W.matrix,D.castShadow){const F=t.get(D);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,n.spotShadow[_]=F,n.spotShadowMap[_]=K,b++}_++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(I).multiplyScalar(N),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=X,m++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const W=D.shadow,F=t.get(D);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,F.shadowCameraNear=W.camera.near,F.shadowCameraFar=W.camera.far,n.pointShadow[g]=F,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=D.shadow.matrix,y++}n.point[g]=X,g++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(N),X.groundColor.copy(D.groundColor).multiplyScalar(N),n.hemi[p]=X,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==v||C.numPointShadows!==y||C.numSpotShadows!==b||C.numSpotMaps!==w||C.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=b+w-R,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=T,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=v,C.numPointShadows=y,C.numSpotShadows=b,C.numSpotMaps=w,C.numLightProbes=T,n.version=vT++)}function c(l,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const y=l[p];if(y.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),h++}else if(y.isSpotLight){const b=n.spot[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Lp(r){const e=new yT(r),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function ST(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Lp(r),e.set(i,[o])):s>=a.length?(o=new Lp(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class MT extends Ni{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=rv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class TT extends Ni{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ET=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wT(r,e,t){let n=new Ef;const i=new je,s=new je,a=new pt,o=new MT({depthPacking:sv}),c=new TT,l={},u=t.maxTextureSize,h={[ur]:On,[On]:ur,[Di]:Di},f=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:ET,fragmentShader:AT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new ni;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new wn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kg;let p=this.type;this.render=function(R,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const M=r.getRenderTarget(),x=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),I=r.state;I.setBlending(sr),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const N=p!==Qi&&this.type===Qi,G=p===Qi&&this.type!==Qi;for(let K=0,X=R.length;K<X;K++){const W=R[K],F=W.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const J=F.getFrameExtents();if(i.multiply(J),s.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/J.x),i.x=s.x*J.x,F.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/J.y),i.y=s.y*J.y,F.mapSize.y=s.y)),F.map===null||N===!0||G===!0){const ce=this.type!==Qi?{minFilter:Cn,magFilter:Cn}:{};F.map!==null&&F.map.dispose(),F.map=new Mi(i.x,i.y,ce),F.map.texture.name=W.name+".shadowMap",F.camera.updateProjectionMatrix()}r.setRenderTarget(F.map),r.clear();const P=F.getViewportCount();for(let ce=0;ce<P;ce++){const ve=F.getViewport(ce);a.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),I.viewport(a),F.updateMatrices(W,ce),n=F.getFrustum(),b(T,C,F.camera,W,this.type)}F.isPointLightShadow!==!0&&this.type===Qi&&v(F,C),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,x,D)};function v(R,T){const C=e.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Mi(i.x,i.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(T,null,C,f,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(T,null,C,d,_,null)}function y(R,T,C,M){let x=null;const D=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)x=D;else if(x=C.isPointLight===!0?c:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const I=x.uuid,N=T.uuid;let G=l[I];G===void 0&&(G={},l[I]=G);let K=G[N];K===void 0&&(K=x.clone(),G[N]=K,T.addEventListener("dispose",w)),x=K}if(x.visible=T.visible,x.wireframe=T.wireframe,M===Qi?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:h[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const I=r.properties.get(x);I.light=C}return x}function b(R,T,C,M,x){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===Qi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);const N=e.update(R),G=R.material;if(Array.isArray(G)){const K=N.groups;for(let X=0,W=K.length;X<W;X++){const F=K[X],J=G[F.materialIndex];if(J&&J.visible){const P=y(R,J,M,x);R.onBeforeShadow(r,R,T,C,N,P,F),r.renderBufferDirect(C,null,N,P,R,F),R.onAfterShadow(r,R,T,C,N,P,F)}}}else if(G.visible){const K=y(R,G,M,x);R.onBeforeShadow(r,R,T,C,N,K,null),r.renderBufferDirect(C,null,N,K,R,null),R.onAfterShadow(r,R,T,C,N,K,null)}}const I=R.children;for(let N=0,G=I.length;N<G;N++)b(I[N],T,C,M,x)}function w(R){R.target.removeEventListener("dispose",w);for(const C in l){const M=l[C],x=R.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const RT={[$u]:Ju,[Zu]:nh,[eh]:ih,[ma]:th,[Ju]:$u,[nh]:Zu,[ih]:eh,[th]:ma};function CT(r,e){function t(){let L=!1;const me=new pt;let $=null;const ee=new pt(0,0,0,0);return{setMask:function(he){$!==he&&!L&&(r.colorMask(he,he,he,he),$=he)},setLocked:function(he){L=he},setClear:function(he,pe,Be,Ke,At){At===!0&&(he*=Ke,pe*=Ke,Be*=Ke),me.set(he,pe,Be,Ke),ee.equals(me)===!1&&(r.clearColor(he,pe,Be,Ke),ee.copy(me))},reset:function(){L=!1,$=null,ee.set(-1,0,0,0)}}}function n(){let L=!1,me=!1,$=null,ee=null,he=null;return{setReversed:function(pe){if(me!==pe){const Be=e.get("EXT_clip_control");me?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const Ke=he;he=null,this.setClear(Ke)}me=pe},getReversed:function(){return me},setTest:function(pe){pe?ue(r.DEPTH_TEST):Ee(r.DEPTH_TEST)},setMask:function(pe){$!==pe&&!L&&(r.depthMask(pe),$=pe)},setFunc:function(pe){if(me&&(pe=RT[pe]),ee!==pe){switch(pe){case $u:r.depthFunc(r.NEVER);break;case Ju:r.depthFunc(r.ALWAYS);break;case Zu:r.depthFunc(r.LESS);break;case ma:r.depthFunc(r.LEQUAL);break;case eh:r.depthFunc(r.EQUAL);break;case th:r.depthFunc(r.GEQUAL);break;case nh:r.depthFunc(r.GREATER);break;case ih:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ee=pe}},setLocked:function(pe){L=pe},setClear:function(pe){he!==pe&&(me&&(pe=1-pe),r.clearDepth(pe),he=pe)},reset:function(){L=!1,$=null,ee=null,he=null,me=!1}}}function i(){let L=!1,me=null,$=null,ee=null,he=null,pe=null,Be=null,Ke=null,At=null;return{setTest:function(xe){L||(xe?ue(r.STENCIL_TEST):Ee(r.STENCIL_TEST))},setMask:function(xe){me!==xe&&!L&&(r.stencilMask(xe),me=xe)},setFunc:function(xe,Ce,Je){($!==xe||ee!==Ce||he!==Je)&&(r.stencilFunc(xe,Ce,Je),$=xe,ee=Ce,he=Je)},setOp:function(xe,Ce,Je){(pe!==xe||Be!==Ce||Ke!==Je)&&(r.stencilOp(xe,Ce,Je),pe=xe,Be=Ce,Ke=Je)},setLocked:function(xe){L=xe},setClear:function(xe){At!==xe&&(r.clearStencil(xe),At=xe)},reset:function(){L=!1,me=null,$=null,ee=null,he=null,pe=null,Be=null,Ke=null,At=null}}}const s=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,y=null,b=null,w=null,R=null,T=new He(0,0,0),C=0,M=!1,x=null,D=null,I=null,N=null,G=null;const K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,W=0;const F=r.getParameter(r.VERSION);F.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(F)[1]),X=W>=1):F.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),X=W>=2);let J=null,P={};const ce=r.getParameter(r.SCISSOR_BOX),ve=r.getParameter(r.VIEWPORT),Pe=new pt().fromArray(ce),Y=new pt().fromArray(ve);function re(L,me,$,ee){const he=new Uint8Array(4),pe=r.createTexture();r.bindTexture(L,pe),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Be=0;Be<$;Be++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(me,0,r.RGBA,1,1,ee,0,r.RGBA,r.UNSIGNED_BYTE,he):r.texImage2D(me+Be,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,he);return pe}const _e={};_e[r.TEXTURE_2D]=re(r.TEXTURE_2D,r.TEXTURE_2D,1),_e[r.TEXTURE_CUBE_MAP]=re(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[r.TEXTURE_2D_ARRAY]=re(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_e[r.TEXTURE_3D]=re(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(r.DEPTH_TEST),a.setFunc(ma),ze(!1),V(Id),ue(r.CULL_FACE),k(sr);function ue(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function Ee(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function De(L,me){return h[L]!==me?(r.bindFramebuffer(L,me),h[L]=me,L===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=me),L===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=me),!0):!1}function Ge(L,me){let $=d,ee=!1;if(L){$=f.get(me),$===void 0&&($=[],f.set(me,$));const he=L.textures;if($.length!==he.length||$[0]!==r.COLOR_ATTACHMENT0){for(let pe=0,Be=he.length;pe<Be;pe++)$[pe]=r.COLOR_ATTACHMENT0+pe;$.length=he.length,ee=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,ee=!0);ee&&r.drawBuffers($)}function $e(L){return g!==L?(r.useProgram(L),g=L,!0):!1}const Oe={[as]:r.FUNC_ADD,[N0]:r.FUNC_SUBTRACT,[F0]:r.FUNC_REVERSE_SUBTRACT};Oe[O0]=r.MIN,Oe[k0]=r.MAX;const Ue={[B0]:r.ZERO,[z0]:r.ONE,[H0]:r.SRC_COLOR,[Ku]:r.SRC_ALPHA,[q0]:r.SRC_ALPHA_SATURATE,[X0]:r.DST_COLOR,[V0]:r.DST_ALPHA,[G0]:r.ONE_MINUS_SRC_COLOR,[Qu]:r.ONE_MINUS_SRC_ALPHA,[j0]:r.ONE_MINUS_DST_COLOR,[W0]:r.ONE_MINUS_DST_ALPHA,[Y0]:r.CONSTANT_COLOR,[K0]:r.ONE_MINUS_CONSTANT_COLOR,[Q0]:r.CONSTANT_ALPHA,[$0]:r.ONE_MINUS_CONSTANT_ALPHA};function k(L,me,$,ee,he,pe,Be,Ke,At,xe){if(L===sr){_===!0&&(Ee(r.BLEND),_=!1);return}if(_===!1&&(ue(r.BLEND),_=!0),L!==U0){if(L!==m||xe!==M){if((p!==as||b!==as)&&(r.blendEquation(r.FUNC_ADD),p=as,b=as),xe)switch(L){case sa:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sl:r.blendFunc(r.ONE,r.ONE);break;case Ud:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Nd:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case sa:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ud:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Nd:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,y=null,w=null,R=null,T.set(0,0,0),C=0,m=L,M=xe}return}he=he||me,pe=pe||$,Be=Be||ee,(me!==p||he!==b)&&(r.blendEquationSeparate(Oe[me],Oe[he]),p=me,b=he),($!==v||ee!==y||pe!==w||Be!==R)&&(r.blendFuncSeparate(Ue[$],Ue[ee],Ue[pe],Ue[Be]),v=$,y=ee,w=pe,R=Be),(Ke.equals(T)===!1||At!==C)&&(r.blendColor(Ke.r,Ke.g,Ke.b,At),T.copy(Ke),C=At),m=L,M=!1}function mt(L,me){L.side===Di?Ee(r.CULL_FACE):ue(r.CULL_FACE);let $=L.side===On;me&&($=!$),ze($),L.blending===sa&&L.transparent===!1?k(sr):k(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const ee=L.stencilWrite;o.setTest(ee),ee&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ie(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ue(r.SAMPLE_ALPHA_TO_COVERAGE):Ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function ze(L){x!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),x=L)}function V(L){L!==D0?(ue(r.CULL_FACE),L!==D&&(L===Id?r.cullFace(r.BACK):L===L0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ee(r.CULL_FACE),D=L}function Ae(L){L!==I&&(X&&r.lineWidth(L),I=L)}function ie(L,me,$){L?(ue(r.POLYGON_OFFSET_FILL),(N!==me||G!==$)&&(r.polygonOffset(me,$),N=me,G=$)):Ee(r.POLYGON_OFFSET_FILL)}function U(L){L?ue(r.SCISSOR_TEST):Ee(r.SCISSOR_TEST)}function E(L){L===void 0&&(L=r.TEXTURE0+K-1),J!==L&&(r.activeTexture(L),J=L)}function S(L,me,$){$===void 0&&(J===null?$=r.TEXTURE0+K-1:$=J);let ee=P[$];ee===void 0&&(ee={type:void 0,texture:void 0},P[$]=ee),(ee.type!==L||ee.texture!==me)&&(J!==$&&(r.activeTexture($),J=$),r.bindTexture(L,me||_e[L]),ee.type=L,ee.texture=me)}function O(){const L=P[J];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(L){Pe.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Pe.copy(L))}function be(L){Y.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),Y.copy(L))}function qe(L,me){let $=l.get(me);$===void 0&&($=new WeakMap,l.set(me,$));let ee=$.get(L);ee===void 0&&(ee=r.getUniformBlockIndex(me,L.name),$.set(L,ee))}function ke(L,me){const ee=l.get(me).get(L);c.get(me)!==ee&&(r.uniformBlockBinding(me,ee,L.__bindingPointIndex),c.set(me,ee))}function st(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},J=null,P={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,y=null,b=null,w=null,R=null,T=new He(0,0,0),C=0,M=!1,x=null,D=null,I=null,N=null,G=null,Pe.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ue,disable:Ee,bindFramebuffer:De,drawBuffers:Ge,useProgram:$e,setBlending:k,setMaterial:mt,setFlipSided:ze,setCullFace:V,setLineWidth:Ae,setPolygonOffset:ie,setScissorTest:U,activeTexture:E,bindTexture:S,unbindTexture:O,compressedTexImage2D:Q,compressedTexImage3D:Z,texImage2D:ne,texImage3D:Ne,updateUBOMapping:qe,uniformBlockBinding:ke,texStorage2D:Me,texStorage3D:se,texSubImage2D:te,texSubImage3D:ae,compressedTexSubImage2D:oe,compressedTexSubImage3D:le,scissor:Le,viewport:be,reset:st}}function Ip(r,e,t,n){const i=PT(n);switch(t){case Qg:return r*e;case Jg:return r*e;case Zg:return r*e*2;case xf:return r*e/i.components*i.byteLength;case yf:return r*e/i.components*i.byteLength;case e_:return r*e*2/i.components*i.byteLength;case Sf:return r*e*2/i.components*i.byteLength;case $g:return r*e*3/i.components*i.byteLength;case fi:return r*e*4/i.components*i.byteLength;case Mf:return r*e*4/i.components*i.byteLength;case zc:case Hc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Gc:case Vc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case oh:case lh:return Math.max(r,16)*Math.max(e,8)/4;case ah:case ch:return Math.max(r,8)*Math.max(e,8)/2;case uh:case hh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case fh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case dh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ph:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case mh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case gh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case _h:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case bh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case vh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case xh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case yh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Th:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Eh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ah:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Wc:case wh:case Rh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case t_:case Ch:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ph:case Dh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function PT(r){switch(r){case hr:case qg:return{byteLength:1,components:1};case Uo:case Yg:case ar:return{byteLength:2,components:1};case bf:case vf:return{byteLength:2,components:4};case Ss:case _f:case yi:return{byteLength:4,components:1};case Kg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function DT(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new je,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,S){return d?new OffscreenCanvas(E,S):Oo("canvas")}function _(E,S,O){let Q=1;const Z=U(E);if((Z.width>O||Z.height>O)&&(Q=O/Math.max(Z.width,Z.height)),Q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const te=Math.floor(Q*Z.width),ae=Math.floor(Q*Z.height);h===void 0&&(h=g(te,ae));const oe=S?g(te,ae):h;return oe.width=te,oe.height=ae,oe.getContext("2d").drawImage(E,0,0,te,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+te+"x"+ae+")."),oe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){r.generateMipmap(E)}function v(E){return E.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?r.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(E,S,O,Q,Z=!1){if(E!==null){if(r[E]!==void 0)return r[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let te=S;if(S===r.RED&&(O===r.FLOAT&&(te=r.R32F),O===r.HALF_FLOAT&&(te=r.R16F),O===r.UNSIGNED_BYTE&&(te=r.R8)),S===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(te=r.R8UI),O===r.UNSIGNED_SHORT&&(te=r.R16UI),O===r.UNSIGNED_INT&&(te=r.R32UI),O===r.BYTE&&(te=r.R8I),O===r.SHORT&&(te=r.R16I),O===r.INT&&(te=r.R32I)),S===r.RG&&(O===r.FLOAT&&(te=r.RG32F),O===r.HALF_FLOAT&&(te=r.RG16F),O===r.UNSIGNED_BYTE&&(te=r.RG8)),S===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(te=r.RG8UI),O===r.UNSIGNED_SHORT&&(te=r.RG16UI),O===r.UNSIGNED_INT&&(te=r.RG32UI),O===r.BYTE&&(te=r.RG8I),O===r.SHORT&&(te=r.RG16I),O===r.INT&&(te=r.RG32I)),S===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(te=r.RGB8UI),O===r.UNSIGNED_SHORT&&(te=r.RGB16UI),O===r.UNSIGNED_INT&&(te=r.RGB32UI),O===r.BYTE&&(te=r.RGB8I),O===r.SHORT&&(te=r.RGB16I),O===r.INT&&(te=r.RGB32I)),S===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(te=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(te=r.RGBA16UI),O===r.UNSIGNED_INT&&(te=r.RGBA32UI),O===r.BYTE&&(te=r.RGBA8I),O===r.SHORT&&(te=r.RGBA16I),O===r.INT&&(te=r.RGBA32I)),S===r.RGB&&O===r.UNSIGNED_INT_5_9_9_9_REV&&(te=r.RGB9_E5),S===r.RGBA){const ae=Z?gl:ut.getTransfer(Q);O===r.FLOAT&&(te=r.RGBA32F),O===r.HALF_FLOAT&&(te=r.RGBA16F),O===r.UNSIGNED_BYTE&&(te=ae===Mt?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(te=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(te=r.RGB5_A1)}return(te===r.R16F||te===r.R32F||te===r.RG16F||te===r.RG32F||te===r.RGBA16F||te===r.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function b(E,S){let O;return E?S===null||S===Ss||S===va?O=r.DEPTH24_STENCIL8:S===yi?O=r.DEPTH32F_STENCIL8:S===Uo&&(O=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ss||S===va?O=r.DEPTH_COMPONENT24:S===yi?O=r.DEPTH_COMPONENT32F:S===Uo&&(O=r.DEPTH_COMPONENT16),O}function w(E,S){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Cn&&E.minFilter!==Jn?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function R(E){const S=E.target;S.removeEventListener("dispose",R),C(S),S.isVideoTexture&&u.delete(S)}function T(E){const S=E.target;S.removeEventListener("dispose",T),x(S)}function C(E){const S=n.get(E);if(S.__webglInit===void 0)return;const O=E.source,Q=f.get(O);if(Q){const Z=Q[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(E),Object.keys(Q).length===0&&f.delete(O)}n.remove(E)}function M(E){const S=n.get(E);r.deleteTexture(S.__webglTexture);const O=E.source,Q=f.get(O);delete Q[S.__cacheKey],a.memory.textures--}function x(E){const S=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let Z=0;Z<S.__webglFramebuffer[Q].length;Z++)r.deleteFramebuffer(S.__webglFramebuffer[Q][Z]);else r.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)r.deleteFramebuffer(S.__webglFramebuffer[Q]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=E.textures;for(let Q=0,Z=O.length;Q<Z;Q++){const te=n.get(O[Q]);te.__webglTexture&&(r.deleteTexture(te.__webglTexture),a.memory.textures--),n.remove(O[Q])}n.remove(E)}let D=0;function I(){D=0}function N(){const E=D;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),D+=1,E}function G(E){const S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.colorSpace),S.join()}function K(E,S){const O=n.get(E);if(E.isVideoTexture&&Ae(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const Q=E.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,E,S);return}}t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+S)}function X(E,S){const O=n.get(E);if(E.version>0&&O.__version!==E.version){Y(O,E,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+S)}function W(E,S){const O=n.get(E);if(E.version>0&&O.__version!==E.version){Y(O,E,S);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+S)}function F(E,S){const O=n.get(E);if(E.version>0&&O.__version!==E.version){re(O,E,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+S)}const J={[ba]:r.REPEAT,[Pr]:r.CLAMP_TO_EDGE,[al]:r.MIRRORED_REPEAT},P={[Cn]:r.NEAREST,[jg]:r.NEAREST_MIPMAP_NEAREST,[io]:r.NEAREST_MIPMAP_LINEAR,[Jn]:r.LINEAR,[Bc]:r.LINEAR_MIPMAP_NEAREST,[nr]:r.LINEAR_MIPMAP_LINEAR},ce={[ov]:r.NEVER,[dv]:r.ALWAYS,[cv]:r.LESS,[r_]:r.LEQUAL,[lv]:r.EQUAL,[fv]:r.GEQUAL,[uv]:r.GREATER,[hv]:r.NOTEQUAL};function ve(E,S){if(S.type===yi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Jn||S.magFilter===Bc||S.magFilter===io||S.magFilter===nr||S.minFilter===Jn||S.minFilter===Bc||S.minFilter===io||S.minFilter===nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(E,r.TEXTURE_WRAP_S,J[S.wrapS]),r.texParameteri(E,r.TEXTURE_WRAP_T,J[S.wrapT]),(E===r.TEXTURE_3D||E===r.TEXTURE_2D_ARRAY)&&r.texParameteri(E,r.TEXTURE_WRAP_R,J[S.wrapR]),r.texParameteri(E,r.TEXTURE_MAG_FILTER,P[S.magFilter]),r.texParameteri(E,r.TEXTURE_MIN_FILTER,P[S.minFilter]),S.compareFunction&&(r.texParameteri(E,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(E,r.TEXTURE_COMPARE_FUNC,ce[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Cn||S.minFilter!==io&&S.minFilter!==nr||S.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");r.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Pe(E,S){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",R));const Q=S.source;let Z=f.get(Q);Z===void 0&&(Z={},f.set(Q,Z));const te=G(S);if(te!==E.__cacheKey){Z[te]===void 0&&(Z[te]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Z[te].usedTimes++;const ae=Z[E.__cacheKey];ae!==void 0&&(Z[E.__cacheKey].usedTimes--,ae.usedTimes===0&&M(S)),E.__cacheKey=te,E.__webglTexture=Z[te].texture}return O}function Y(E,S,O){let Q=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=r.TEXTURE_3D);const Z=Pe(E,S),te=S.source;t.bindTexture(Q,E.__webglTexture,r.TEXTURE0+O);const ae=n.get(te);if(te.version!==ae.__version||Z===!0){t.activeTexture(r.TEXTURE0+O);const oe=ut.getPrimaries(ut.workingColorSpace),le=S.colorSpace===Tr?null:ut.getPrimaries(S.colorSpace),Me=S.colorSpace===Tr||oe===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let se=_(S.image,!1,i.maxTextureSize);se=ie(S,se);const ne=s.convert(S.format,S.colorSpace),Ne=s.convert(S.type);let Le=y(S.internalFormat,ne,Ne,S.colorSpace,S.isVideoTexture);ve(Q,S);let be;const qe=S.mipmaps,ke=S.isVideoTexture!==!0,st=ae.__version===void 0||Z===!0,L=te.dataReady,me=w(S,se);if(S.isDepthTexture)Le=b(S.format===xa,S.type),st&&(ke?t.texStorage2D(r.TEXTURE_2D,1,Le,se.width,se.height):t.texImage2D(r.TEXTURE_2D,0,Le,se.width,se.height,0,ne,Ne,null));else if(S.isDataTexture)if(qe.length>0){ke&&st&&t.texStorage2D(r.TEXTURE_2D,me,Le,qe[0].width,qe[0].height);for(let $=0,ee=qe.length;$<ee;$++)be=qe[$],ke?L&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,be.width,be.height,ne,Ne,be.data):t.texImage2D(r.TEXTURE_2D,$,Le,be.width,be.height,0,ne,Ne,be.data);S.generateMipmaps=!1}else ke?(st&&t.texStorage2D(r.TEXTURE_2D,me,Le,se.width,se.height),L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se.width,se.height,ne,Ne,se.data)):t.texImage2D(r.TEXTURE_2D,0,Le,se.width,se.height,0,ne,Ne,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ke&&st&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,Le,qe[0].width,qe[0].height,se.depth);for(let $=0,ee=qe.length;$<ee;$++)if(be=qe[$],S.format!==fi)if(ne!==null)if(ke){if(L)if(S.layerUpdates.size>0){const he=Ip(be.width,be.height,S.format,S.type);for(const pe of S.layerUpdates){const Be=be.data.subarray(pe*he/be.data.BYTES_PER_ELEMENT,(pe+1)*he/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,pe,be.width,be.height,1,ne,Be)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,be.width,be.height,se.depth,ne,be.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,Le,be.width,be.height,se.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?L&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,be.width,be.height,se.depth,ne,Ne,be.data):t.texImage3D(r.TEXTURE_2D_ARRAY,$,Le,be.width,be.height,se.depth,0,ne,Ne,be.data)}else{ke&&st&&t.texStorage2D(r.TEXTURE_2D,me,Le,qe[0].width,qe[0].height);for(let $=0,ee=qe.length;$<ee;$++)be=qe[$],S.format!==fi?ne!==null?ke?L&&t.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,be.width,be.height,ne,be.data):t.compressedTexImage2D(r.TEXTURE_2D,$,Le,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?L&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,be.width,be.height,ne,Ne,be.data):t.texImage2D(r.TEXTURE_2D,$,Le,be.width,be.height,0,ne,Ne,be.data)}else if(S.isDataArrayTexture)if(ke){if(st&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,Le,se.width,se.height,se.depth),L)if(S.layerUpdates.size>0){const $=Ip(se.width,se.height,S.format,S.type);for(const ee of S.layerUpdates){const he=se.data.subarray(ee*$/se.data.BYTES_PER_ELEMENT,(ee+1)*$/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ee,se.width,se.height,1,ne,Ne,he)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ne,Ne,se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Le,se.width,se.height,se.depth,0,ne,Ne,se.data);else if(S.isData3DTexture)ke?(st&&t.texStorage3D(r.TEXTURE_3D,me,Le,se.width,se.height,se.depth),L&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ne,Ne,se.data)):t.texImage3D(r.TEXTURE_3D,0,Le,se.width,se.height,se.depth,0,ne,Ne,se.data);else if(S.isFramebufferTexture){if(st)if(ke)t.texStorage2D(r.TEXTURE_2D,me,Le,se.width,se.height);else{let $=se.width,ee=se.height;for(let he=0;he<me;he++)t.texImage2D(r.TEXTURE_2D,he,Le,$,ee,0,ne,Ne,null),$>>=1,ee>>=1}}else if(qe.length>0){if(ke&&st){const $=U(qe[0]);t.texStorage2D(r.TEXTURE_2D,me,Le,$.width,$.height)}for(let $=0,ee=qe.length;$<ee;$++)be=qe[$],ke?L&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,ne,Ne,be):t.texImage2D(r.TEXTURE_2D,$,Le,ne,Ne,be);S.generateMipmaps=!1}else if(ke){if(st){const $=U(se);t.texStorage2D(r.TEXTURE_2D,me,Le,$.width,$.height)}L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ne,Ne,se)}else t.texImage2D(r.TEXTURE_2D,0,Le,ne,Ne,se);m(S)&&p(Q),ae.__version=te.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function re(E,S,O){if(S.image.length!==6)return;const Q=Pe(E,S),Z=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,E.__webglTexture,r.TEXTURE0+O);const te=n.get(Z);if(Z.version!==te.__version||Q===!0){t.activeTexture(r.TEXTURE0+O);const ae=ut.getPrimaries(ut.workingColorSpace),oe=S.colorSpace===Tr?null:ut.getPrimaries(S.colorSpace),le=S.colorSpace===Tr||ae===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const Me=S.isCompressedTexture||S.image[0].isCompressedTexture,se=S.image[0]&&S.image[0].isDataTexture,ne=[];for(let ee=0;ee<6;ee++)!Me&&!se?ne[ee]=_(S.image[ee],!0,i.maxCubemapSize):ne[ee]=se?S.image[ee].image:S.image[ee],ne[ee]=ie(S,ne[ee]);const Ne=ne[0],Le=s.convert(S.format,S.colorSpace),be=s.convert(S.type),qe=y(S.internalFormat,Le,be,S.colorSpace),ke=S.isVideoTexture!==!0,st=te.__version===void 0||Q===!0,L=Z.dataReady;let me=w(S,Ne);ve(r.TEXTURE_CUBE_MAP,S);let $;if(Me){ke&&st&&t.texStorage2D(r.TEXTURE_CUBE_MAP,me,qe,Ne.width,Ne.height);for(let ee=0;ee<6;ee++){$=ne[ee].mipmaps;for(let he=0;he<$.length;he++){const pe=$[he];S.format!==fi?Le!==null?ke?L&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,0,0,pe.width,pe.height,Le,pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,qe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,0,0,pe.width,pe.height,Le,be,pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,qe,pe.width,pe.height,0,Le,be,pe.data)}}}else{if($=S.mipmaps,ke&&st){$.length>0&&me++;const ee=U(ne[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,me,qe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(se){ke?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ne[ee].width,ne[ee].height,Le,be,ne[ee].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,qe,ne[ee].width,ne[ee].height,0,Le,be,ne[ee].data);for(let he=0;he<$.length;he++){const Be=$[he].image[ee].image;ke?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,0,0,Be.width,Be.height,Le,be,Be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,qe,Be.width,Be.height,0,Le,be,Be.data)}}else{ke?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Le,be,ne[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,qe,Le,be,ne[ee]);for(let he=0;he<$.length;he++){const pe=$[he];ke?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,0,0,Le,be,pe.image[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,qe,Le,be,pe.image[ee])}}}m(S)&&p(r.TEXTURE_CUBE_MAP),te.__version=Z.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function _e(E,S,O,Q,Z,te){const ae=s.convert(O.format,O.colorSpace),oe=s.convert(O.type),le=y(O.internalFormat,ae,oe,O.colorSpace),Me=n.get(S),se=n.get(O);if(se.__renderTarget=S,!Me.__hasExternalTextures){const ne=Math.max(1,S.width>>te),Ne=Math.max(1,S.height>>te);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,te,le,ne,Ne,S.depth,0,ae,oe,null):t.texImage2D(Z,te,le,ne,Ne,0,ae,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,E),V(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,Z,se.__webglTexture,0,ze(S)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,Z,se.__webglTexture,te),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ue(E,S,O){if(r.bindRenderbuffer(r.RENDERBUFFER,E),S.depthBuffer){const Q=S.depthTexture,Z=Q&&Q.isDepthTexture?Q.type:null,te=b(S.stencilBuffer,Z),ae=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=ze(S);V(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,te,S.width,S.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,te,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,te,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,E)}else{const Q=S.textures;for(let Z=0;Z<Q.length;Z++){const te=Q[Z],ae=s.convert(te.format,te.colorSpace),oe=s.convert(te.type),le=y(te.internalFormat,ae,oe,te.colorSpace),Me=ze(S);O&&V(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,le,S.width,S.height):V(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Me,le,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,le,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ee(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(S.depthTexture);Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);const Z=Q.__webglTexture,te=ze(S);if(S.depthTexture.format===aa)V(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(S.depthTexture.format===xa)V(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function De(E){const S=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==E.depthTexture){const Q=E.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",Z)};Q.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=Q}if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ee(S.__webglFramebuffer,E)}else if(O){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=r.createRenderbuffer(),ue(S.__webglDepthbuffer[Q],E,!1);else{const Z=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=S.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,te),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,te)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),ue(S.__webglDepthbuffer,E,!1);else{const Q=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,Z)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ge(E,S,O){const Q=n.get(E);S!==void 0&&_e(Q.__webglFramebuffer,E,E.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&De(E)}function $e(E){const S=E.texture,O=n.get(E),Q=n.get(S);E.addEventListener("dispose",T);const Z=E.textures,te=E.isWebGLCubeRenderTarget===!0,ae=Z.length>1;if(ae||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=S.version,a.memory.textures++),te){O.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[oe]=[];for(let le=0;le<S.mipmaps.length;le++)O.__webglFramebuffer[oe][le]=r.createFramebuffer()}else O.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let oe=0;oe<S.mipmaps.length;oe++)O.__webglFramebuffer[oe]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(ae)for(let oe=0,le=Z.length;oe<le;oe++){const Me=n.get(Z[oe]);Me.__webglTexture===void 0&&(Me.__webglTexture=r.createTexture(),a.memory.textures++)}if(E.samples>0&&V(E)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let oe=0;oe<Z.length;oe++){const le=Z[oe];O.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[oe]);const Me=s.convert(le.format,le.colorSpace),se=s.convert(le.type),ne=y(le.internalFormat,Me,se,le.colorSpace,E.isXRRenderTarget===!0),Ne=ze(E);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ne,ne,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,O.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),ue(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(te){t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),ve(r.TEXTURE_CUBE_MAP,S);for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0)for(let le=0;le<S.mipmaps.length;le++)_e(O.__webglFramebuffer[oe][le],E,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,le);else _e(O.__webglFramebuffer[oe],E,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(S)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let oe=0,le=Z.length;oe<le;oe++){const Me=Z[oe],se=n.get(Me);t.bindTexture(r.TEXTURE_2D,se.__webglTexture),ve(r.TEXTURE_2D,Me),_e(O.__webglFramebuffer,E,Me,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,0),m(Me)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(oe=E.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,Q.__webglTexture),ve(oe,S),S.mipmaps&&S.mipmaps.length>0)for(let le=0;le<S.mipmaps.length;le++)_e(O.__webglFramebuffer[le],E,S,r.COLOR_ATTACHMENT0,oe,le);else _e(O.__webglFramebuffer,E,S,r.COLOR_ATTACHMENT0,oe,0);m(S)&&p(oe),t.unbindTexture()}E.depthBuffer&&De(E)}function Oe(E){const S=E.textures;for(let O=0,Q=S.length;O<Q;O++){const Z=S[O];if(m(Z)){const te=v(E),ae=n.get(Z).__webglTexture;t.bindTexture(te,ae),p(te),t.unbindTexture()}}}const Ue=[],k=[];function mt(E){if(E.samples>0){if(V(E)===!1){const S=E.textures,O=E.width,Q=E.height;let Z=r.COLOR_BUFFER_BIT;const te=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=n.get(E),oe=S.length>1;if(oe)for(let le=0;le<S.length;le++)t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let le=0;le<S.length;le++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ae.__webglColorRenderbuffer[le]);const Me=n.get(S[le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Me,0)}r.blitFramebuffer(0,0,O,Q,0,0,O,Q,Z,r.NEAREST),c===!0&&(Ue.length=0,k.length=0,Ue.push(r.COLOR_ATTACHMENT0+le),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Ue.push(te),k.push(te),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,k)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let le=0;le<S.length;le++){t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,ae.__webglColorRenderbuffer[le]);const Me=n.get(S[le]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,Me,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const S=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function ze(E){return Math.min(i.maxSamples,E.samples)}function V(E){const S=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ae(E){const S=a.render.frame;u.get(E)!==S&&(u.set(E,S),E.update())}function ie(E,S){const O=E.colorSpace,Q=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==Pn&&O!==Tr&&(ut.getTransfer(O)===Mt?(Q!==fi||Z!==hr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function U(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=I,this.setTexture2D=K,this.setTexture2DArray=X,this.setTexture3D=W,this.setTextureCube=F,this.rebindTextures=Ge,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=V}function LT(r,e){function t(n,i=Tr){let s;const a=ut.getTransfer(i);if(n===hr)return r.UNSIGNED_BYTE;if(n===bf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===vf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Kg)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===qg)return r.BYTE;if(n===Yg)return r.SHORT;if(n===Uo)return r.UNSIGNED_SHORT;if(n===_f)return r.INT;if(n===Ss)return r.UNSIGNED_INT;if(n===yi)return r.FLOAT;if(n===ar)return r.HALF_FLOAT;if(n===Qg)return r.ALPHA;if(n===$g)return r.RGB;if(n===fi)return r.RGBA;if(n===Jg)return r.LUMINANCE;if(n===Zg)return r.LUMINANCE_ALPHA;if(n===aa)return r.DEPTH_COMPONENT;if(n===xa)return r.DEPTH_STENCIL;if(n===xf)return r.RED;if(n===yf)return r.RED_INTEGER;if(n===e_)return r.RG;if(n===Sf)return r.RG_INTEGER;if(n===Mf)return r.RGBA_INTEGER;if(n===zc||n===Hc||n===Gc||n===Vc)if(a===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===zc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===zc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ah||n===oh||n===ch||n===lh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ah)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ch)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uh||n===hh||n===fh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===uh||n===hh)return a===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===fh)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===dh||n===ph||n===mh||n===gh||n===_h||n===bh||n===vh||n===xh||n===yh||n===Sh||n===Mh||n===Th||n===Eh||n===Ah)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===dh)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ph)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mh)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gh)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_h)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bh)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vh)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xh)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yh)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sh)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mh)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Th)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Eh)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ah)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wc||n===wh||n===Rh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Wc)return a===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===t_||n===Ch||n===Ph||n===Dh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Wc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ch)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ph)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===va?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class IT extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Lr extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UT={type:"move"};class fu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(UT)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Lr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const NT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class OT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Qt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Rn({vertexShader:NT,fragmentShader:FT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wn(new bl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kT extends wa{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const _=new OT,m=t.getContextAttributes();let p=null,v=null;const y=[],b=[],w=new je;let R=null;const T=new En;T.viewport=new pt;const C=new En;C.viewport=new pt;const M=[T,C],x=new IT;let D=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let re=y[Y];return re===void 0&&(re=new fu,y[Y]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Y){let re=y[Y];return re===void 0&&(re=new fu,y[Y]=re),re.getGripSpace()},this.getHand=function(Y){let re=y[Y];return re===void 0&&(re=new fu,y[Y]=re),re.getHandSpace()};function N(Y){const re=b.indexOf(Y.inputSource);if(re===-1)return;const _e=y[re];_e!==void 0&&(_e.update(Y.inputSource,Y.frame,l||a),_e.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",K);for(let Y=0;Y<y.length;Y++){const re=b[Y];re!==null&&(b[Y]=null,y[Y].disconnect(re))}D=null,I=null,_.reset(),e.setRenderTarget(p),d=null,f=null,h=null,i=null,v=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",G),i.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(w),i.renderState.layers===void 0){const re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,re),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Mi(d.framebufferWidth,d.framebufferHeight,{format:fi,type:hr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,_e=null,ue=null;m.depth&&(ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=m.stencil?xa:aa,_e=m.stencil?va:Ss);const Ee={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Ee),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Mi(f.textureWidth,f.textureHeight,{format:fi,type:hr,depthTexture:new g_(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Pe.setContext(i),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(Y){for(let re=0;re<Y.removed.length;re++){const _e=Y.removed[re],ue=b.indexOf(_e);ue>=0&&(b[ue]=null,y[ue].disconnect(_e))}for(let re=0;re<Y.added.length;re++){const _e=Y.added[re];let ue=b.indexOf(_e);if(ue===-1){for(let De=0;De<y.length;De++)if(De>=b.length){b.push(_e),ue=De;break}else if(b[De]===null){b[De]=_e,ue=De;break}if(ue===-1)break}const Ee=y[ue];Ee&&Ee.connect(_e)}}const X=new H,W=new H;function F(Y,re,_e){X.setFromMatrixPosition(re.matrixWorld),W.setFromMatrixPosition(_e.matrixWorld);const ue=X.distanceTo(W),Ee=re.projectionMatrix.elements,De=_e.projectionMatrix.elements,Ge=Ee[14]/(Ee[10]-1),$e=Ee[14]/(Ee[10]+1),Oe=(Ee[9]+1)/Ee[5],Ue=(Ee[9]-1)/Ee[5],k=(Ee[8]-1)/Ee[0],mt=(De[8]+1)/De[0],ze=Ge*k,V=Ge*mt,Ae=ue/(-k+mt),ie=Ae*-k;if(re.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ie),Y.translateZ(Ae),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ee[10]===-1)Y.projectionMatrix.copy(re.projectionMatrix),Y.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const U=Ge+Ae,E=$e+Ae,S=ze-ie,O=V+(ue-ie),Q=Oe*$e/E*U,Z=Ue*$e/E*U;Y.projectionMatrix.makePerspective(S,O,Q,Z,U,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function J(Y,re){re===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(re.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let re=Y.near,_e=Y.far;_.texture!==null&&(_.depthNear>0&&(re=_.depthNear),_.depthFar>0&&(_e=_.depthFar)),x.near=C.near=T.near=re,x.far=C.far=T.far=_e,(D!==x.near||I!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),D=x.near,I=x.far),T.layers.mask=Y.layers.mask|2,C.layers.mask=Y.layers.mask|4,x.layers.mask=T.layers.mask|C.layers.mask;const ue=Y.parent,Ee=x.cameras;J(x,ue);for(let De=0;De<Ee.length;De++)J(Ee[De],ue);Ee.length===2?F(x,T,C):x.projectionMatrix.copy(T.projectionMatrix),P(Y,x,ue)};function P(Y,re,_e){_e===null?Y.matrix.copy(re.matrixWorld):(Y.matrix.copy(_e.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(re.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(re.projectionMatrix),Y.projectionMatrixInverse.copy(re.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ya*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let ce=null;function ve(Y,re){if(u=re.getViewerPose(l||a),g=re,u!==null){const _e=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let ue=!1;_e.length!==x.cameras.length&&(x.cameras.length=0,ue=!0);for(let De=0;De<_e.length;De++){const Ge=_e[De];let $e=null;if(d!==null)$e=d.getViewport(Ge);else{const Ue=h.getViewSubImage(f,Ge);$e=Ue.viewport,De===0&&(e.setRenderTargetTextures(v,Ue.colorTexture,f.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(v))}let Oe=M[De];Oe===void 0&&(Oe=new En,Oe.layers.enable(De),Oe.viewport=new pt,M[De]=Oe),Oe.matrix.fromArray(Ge.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Ge.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set($e.x,$e.y,$e.width,$e.height),De===0&&(x.matrix.copy(Oe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ue===!0&&x.cameras.push(Oe)}const Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const De=h.getDepthInformation(_e[0]);De&&De.isValid&&De.texture&&_.init(e,De,i.renderState)}}for(let _e=0;_e<y.length;_e++){const ue=b[_e],Ee=y[_e];ue!==null&&Ee!==void 0&&Ee.update(ue,re,l||a)}ce&&ce(Y,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),g=null}const Pe=new m_;Pe.setAnimationLoop(ve),this.setAnimationLoop=function(Y){ce=Y},this.dispose=function(){}}}const Jr=new Oi,BT=new tt;function zT(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,f_(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,y,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,v,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===On&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===On&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),y=v.envMap,b=v.envMapRotation;y&&(m.envMap.value=y,Jr.copy(b),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),m.envMapRotation.value.setFromMatrix4(BT.makeRotationFromEuler(Jr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===On&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function HT(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const b=y.program;n.uniformBlockBinding(v,b)}function l(v,y){let b=i[v.id];b===void 0&&(g(v),b=u(v),i[v.id]=b,v.addEventListener("dispose",m));const w=y.program;n.updateUBOMapping(v,w);const R=e.render.frame;s[v.id]!==R&&(f(v),s[v.id]=R)}function u(v){const y=h();v.__bindingPointIndex=y;const b=r.createBuffer(),w=v.__size,R=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,w,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,b),b}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=i[v.id],b=v.uniforms,w=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let R=0,T=b.length;R<T;R++){const C=Array.isArray(b[R])?b[R]:[b[R]];for(let M=0,x=C.length;M<x;M++){const D=C[M];if(d(D,R,M,w)===!0){const I=D.__offset,N=Array.isArray(D.value)?D.value:[D.value];let G=0;for(let K=0;K<N.length;K++){const X=N[K],W=_(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,I+G,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,G),G+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(v,y,b,w){const R=v.value,T=y+"_"+b;if(w[T]===void 0)return typeof R=="number"||typeof R=="boolean"?w[T]=R:w[T]=R.clone(),!0;{const C=w[T];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return w[T]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function g(v){const y=v.uniforms;let b=0;const w=16;for(let T=0,C=y.length;T<C;T++){const M=Array.isArray(y[T])?y[T]:[y[T]];for(let x=0,D=M.length;x<D;x++){const I=M[x],N=Array.isArray(I.value)?I.value:[I.value];for(let G=0,K=N.length;G<K;G++){const X=N[G],W=_(X),F=b%w,J=F%W.boundary,P=F+J;b+=J,P!==0&&w-P<W.storage&&(b+=w-P),I.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=W.storage}}}const R=b%w;return R>0&&(b+=w-R),v.__size=b,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);a=[],i={},s={}}return{bind:c,update:l,dispose:p}}class GT{constructor(e={}){const{canvas:t=Dv(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rn,this.toneMapping=Or,this.toneMappingExposure=1;const b=this;let w=!1,R=0,T=0,C=null,M=-1,x=null;const D=new pt,I=new pt;let N=null;const G=new He(0);let K=0,X=t.width,W=t.height,F=1,J=null,P=null;const ce=new pt(0,0,X,W),ve=new pt(0,0,X,W);let Pe=!1;const Y=new Ef;let re=!1,_e=!1;const ue=new tt,Ee=new tt,De=new H,Ge=new pt,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function Ue(){return C===null?F:1}let k=n;function mt(A,B){return t.getContext(A,B)}try{const A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mf}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",pe,!1),k===null){const B="webgl2";if(k=mt(B,A),k===null)throw mt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ze,V,Ae,ie,U,E,S,O,Q,Z,te,ae,oe,le,Me,se,ne,Ne,Le,be,qe,ke,st,L;function me(){ze=new qS(k),ze.init(),ke=new LT(k,ze),V=new HS(k,ze,e,ke),Ae=new CT(k,ze),V.reverseDepthBuffer&&f&&Ae.buffers.depth.setReversed(!0),ie=new QS(k),U=new pT,E=new DT(k,ze,Ae,U,V,ke,ie),S=new VS(b),O=new jS(b),Q=new ix(k),st=new BS(k,Q),Z=new YS(k,Q,ie,st),te=new JS(k,Z,Q,ie),Le=new $S(k,V,E),se=new GS(U),ae=new dT(b,S,O,ze,V,st,se),oe=new zT(b,U),le=new gT,Me=new ST(ze),Ne=new kS(b,S,O,Ae,te,d,c),ne=new wT(b,te,V),L=new HT(k,ie,V,Ae),be=new zS(k,ze,ie),qe=new KS(k,ze,ie),ie.programs=ae.programs,b.capabilities=V,b.extensions=ze,b.properties=U,b.renderLists=le,b.shadowMap=ne,b.state=Ae,b.info=ie}me();const $=new kT(b,k);this.xr=$,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=ze.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ze.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(X,W,!1))},this.getSize=function(A){return A.set(X,W)},this.setSize=function(A,B,j=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,W=B,t.width=Math.floor(A*F),t.height=Math.floor(B*F),j===!0&&(t.style.width=A+"px",t.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(X*F,W*F).floor()},this.setDrawingBufferSize=function(A,B,j){X=A,W=B,F=j,t.width=Math.floor(A*j),t.height=Math.floor(B*j),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(ce)},this.setViewport=function(A,B,j,q){A.isVector4?ce.set(A.x,A.y,A.z,A.w):ce.set(A,B,j,q),Ae.viewport(D.copy(ce).multiplyScalar(F).round())},this.getScissor=function(A){return A.copy(ve)},this.setScissor=function(A,B,j,q){A.isVector4?ve.set(A.x,A.y,A.z,A.w):ve.set(A,B,j,q),Ae.scissor(I.copy(ve).multiplyScalar(F).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(A){Ae.setScissorTest(Pe=A)},this.setOpaqueSort=function(A){J=A},this.setTransparentSort=function(A){P=A},this.getClearColor=function(A){return A.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(A=!0,B=!0,j=!0){let q=0;if(A){let z=!1;if(C!==null){const fe=C.texture.format;z=fe===Mf||fe===Sf||fe===yf}if(z){const fe=C.texture.type,de=fe===hr||fe===Ss||fe===Uo||fe===va||fe===bf||fe===vf,ge=Ne.getClearColor(),Te=Ne.getClearAlpha(),Ve=ge.r,Ye=ge.g,Re=ge.b;de?(g[0]=Ve,g[1]=Ye,g[2]=Re,g[3]=Te,k.clearBufferuiv(k.COLOR,0,g)):(_[0]=Ve,_[1]=Ye,_[2]=Re,_[3]=Te,k.clearBufferiv(k.COLOR,0,_))}else q|=k.COLOR_BUFFER_BIT}B&&(q|=k.DEPTH_BUFFER_BIT),j&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),le.dispose(),Me.dispose(),U.dispose(),S.dispose(),O.dispose(),te.dispose(),st.dispose(),L.dispose(),ae.dispose(),$.dispose(),$.removeEventListener("sessionstart",ye),$.removeEventListener("sessionend",Xe),Ie.stop()};function ee(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const A=ie.autoReset,B=ne.enabled,j=ne.autoUpdate,q=ne.needsUpdate,z=ne.type;me(),ie.autoReset=A,ne.enabled=B,ne.autoUpdate=j,ne.needsUpdate=q,ne.type=z}function pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Be(A){const B=A.target;B.removeEventListener("dispose",Be),Ke(B)}function Ke(A){At(A),U.remove(A)}function At(A){const B=U.get(A).programs;B!==void 0&&(B.forEach(function(j){ae.releaseProgram(j)}),A.isShaderMaterial&&ae.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,j,q,z,fe){B===null&&(B=$e);const de=z.isMesh&&z.matrixWorld.determinant()<0,ge=zn(A,B,j,q,z);Ae.setMaterial(q,de);let Te=j.index,Ve=1;if(q.wireframe===!0){if(Te=Z.getWireframeAttribute(j),Te===void 0)return;Ve=2}const Ye=j.drawRange,Re=j.attributes.position;let Qe=Ye.start*Ve,dt=(Ye.start+Ye.count)*Ve;fe!==null&&(Qe=Math.max(Qe,fe.start*Ve),dt=Math.min(dt,(fe.start+fe.count)*Ve)),Te!==null?(Qe=Math.max(Qe,0),dt=Math.min(dt,Te.count)):Re!=null&&(Qe=Math.max(Qe,0),dt=Math.min(dt,Re.count));const _t=dt-Qe;if(_t<0||_t===1/0)return;st.setup(z,q,ge,j,Te);let Ft,bt=be;if(Te!==null&&(Ft=Q.get(Te),bt=qe,bt.setIndex(Ft)),z.isMesh)q.wireframe===!0?(Ae.setLineWidth(q.wireframeLinewidth*Ue()),bt.setMode(k.LINES)):bt.setMode(k.TRIANGLES);else if(z.isLine){let Fe=q.linewidth;Fe===void 0&&(Fe=1),Ae.setLineWidth(Fe*Ue()),z.isLineSegments?bt.setMode(k.LINES):z.isLineLoop?bt.setMode(k.LINE_LOOP):bt.setMode(k.LINE_STRIP)}else z.isPoints?bt.setMode(k.POINTS):z.isSprite&&bt.setMode(k.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)bt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))bt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Fe=z._multiDrawStarts,Gi=z._multiDrawCounts,vt=z._multiDrawCount,pi=Te?Q.get(Te).bytesPerElement:1,Ts=U.get(q).currentProgram.getUniforms();for(let Hn=0;Hn<vt;Hn++)Ts.setValue(k,"_gl_DrawID",Hn),bt.render(Fe[Hn]/pi,Gi[Hn])}else if(z.isInstancedMesh)bt.renderInstances(Qe,_t,z.count);else if(j.isInstancedBufferGeometry){const Fe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Gi=Math.min(j.instanceCount,Fe);bt.renderInstances(Qe,_t,Gi)}else bt.render(Qe,_t)};function xe(A,B,j){A.transparent===!0&&A.side===Di&&A.forceSinglePass===!1?(A.side=On,A.needsUpdate=!0,wt(A,B,j),A.side=ur,A.needsUpdate=!0,wt(A,B,j),A.side=Di):wt(A,B,j)}this.compile=function(A,B,j=null){j===null&&(j=A),p=Me.get(j),p.init(B),y.push(p),j.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),A!==j&&A.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const q=new Set;return A.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const fe=z.material;if(fe)if(Array.isArray(fe))for(let de=0;de<fe.length;de++){const ge=fe[de];xe(ge,j,z),q.add(ge)}else xe(fe,j,z),q.add(fe)}),y.pop(),p=null,q},this.compileAsync=function(A,B,j=null){const q=this.compile(A,B,j);return new Promise(z=>{function fe(){if(q.forEach(function(de){U.get(de).currentProgram.isReady()&&q.delete(de)}),q.size===0){z(A);return}setTimeout(fe,10)}ze.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Ce=null;function Je(A){Ce&&Ce(A)}function ye(){Ie.stop()}function Xe(){Ie.start()}const Ie=new m_;Ie.setAnimationLoop(Je),typeof self<"u"&&Ie.setContext(self),this.setAnimationLoop=function(A){Ce=A,$.setAnimationLoop(A),A===null?Ie.stop():Ie.start()},$.addEventListener("sessionstart",ye),$.addEventListener("sessionend",Xe),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(B),B=$.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,B,C),p=Me.get(A,y.length),p.init(B),y.push(p),Ee.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Y.setFromProjectionMatrix(Ee),_e=this.localClippingEnabled,re=se.init(this.clippingPlanes,_e),m=le.get(A,v.length),m.init(),v.push(m),$.enabled===!0&&$.isPresenting===!0){const fe=b.xr.getDepthSensingMesh();fe!==null&&We(fe,B,-1/0,b.sortObjects)}We(A,B,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(J,P),Oe=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Oe&&Ne.addToRenderList(m,A),this.info.render.frame++,re===!0&&se.beginShadows();const j=p.state.shadowsArray;ne.render(j,A,B),re===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,z=m.transmissive;if(p.setupLights(),B.isArrayCamera){const fe=B.cameras;if(z.length>0)for(let de=0,ge=fe.length;de<ge;de++){const Te=fe[de];at(q,z,A,Te)}Oe&&Ne.render(A);for(let de=0,ge=fe.length;de<ge;de++){const Te=fe[de];Ht(m,A,Te,Te.viewport)}}else z.length>0&&at(q,z,A,B),Oe&&Ne.render(A),Ht(m,A,B);C!==null&&(E.updateMultisampleRenderTarget(C),E.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(b,A,B),st.resetDefaultState(),M=-1,x=null,y.pop(),y.length>0?(p=y[y.length-1],re===!0&&se.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function We(A,B,j,q){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){q&&Ge.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ee);const de=te.update(A),ge=A.material;ge.visible&&m.push(A,de,ge,j,Ge.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){const de=te.update(A),ge=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ge.copy(A.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ge.copy(de.boundingSphere.center)),Ge.applyMatrix4(A.matrixWorld).applyMatrix4(Ee)),Array.isArray(ge)){const Te=de.groups;for(let Ve=0,Ye=Te.length;Ve<Ye;Ve++){const Re=Te[Ve],Qe=ge[Re.materialIndex];Qe&&Qe.visible&&m.push(A,de,Qe,j,Ge.z,Re)}}else ge.visible&&m.push(A,de,ge,j,Ge.z,null)}}const fe=A.children;for(let de=0,ge=fe.length;de<ge;de++)We(fe[de],B,j,q)}function Ht(A,B,j,q){const z=A.opaque,fe=A.transmissive,de=A.transparent;p.setupLightsView(j),re===!0&&se.setGlobalState(b.clippingPlanes,j),q&&Ae.viewport(D.copy(q)),z.length>0&&Dt(z,B,j),fe.length>0&&Dt(fe,B,j),de.length>0&&Dt(de,B,j),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function at(A,B,j,q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Mi(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?ar:hr,minFilter:nr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const fe=p.state.transmissionRenderTarget[q.id],de=q.viewport||D;fe.setSize(de.z,de.w);const ge=b.getRenderTarget();b.setRenderTarget(fe),b.getClearColor(G),K=b.getClearAlpha(),K<1&&b.setClearColor(16777215,.5),b.clear(),Oe&&Ne.render(j);const Te=b.toneMapping;b.toneMapping=Or;const Ve=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),re===!0&&se.setGlobalState(b.clippingPlanes,q),Dt(A,j,q),E.updateMultisampleRenderTarget(fe),E.updateRenderTargetMipmap(fe),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Re=0,Qe=B.length;Re<Qe;Re++){const dt=B[Re],_t=dt.object,Ft=dt.geometry,bt=dt.material,Fe=dt.group;if(bt.side===Di&&_t.layers.test(q.layers)){const Gi=bt.side;bt.side=On,bt.needsUpdate=!0,qt(_t,j,q,Ft,bt,Fe),bt.side=Gi,bt.needsUpdate=!0,Ye=!0}}Ye===!0&&(E.updateMultisampleRenderTarget(fe),E.updateRenderTargetMipmap(fe))}b.setRenderTarget(ge),b.setClearColor(G,K),Ve!==void 0&&(q.viewport=Ve),b.toneMapping=Te}function Dt(A,B,j){const q=B.isScene===!0?B.overrideMaterial:null;for(let z=0,fe=A.length;z<fe;z++){const de=A[z],ge=de.object,Te=de.geometry,Ve=q===null?de.material:q,Ye=de.group;ge.layers.test(j.layers)&&qt(ge,B,j,Te,Ve,Ye)}}function qt(A,B,j,q,z,fe){A.onBeforeRender(b,B,j,q,z,fe),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(b,B,j,q,A,fe),z.transparent===!0&&z.side===Di&&z.forceSinglePass===!1?(z.side=On,z.needsUpdate=!0,b.renderBufferDirect(j,B,q,z,A,fe),z.side=ur,z.needsUpdate=!0,b.renderBufferDirect(j,B,q,z,A,fe),z.side=Di):b.renderBufferDirect(j,B,q,z,A,fe),A.onAfterRender(b,B,j,q,z,fe)}function wt(A,B,j){B.isScene!==!0&&(B=$e);const q=U.get(A),z=p.state.lights,fe=p.state.shadowsArray,de=z.state.version,ge=ae.getParameters(A,z.state,fe,B,j),Te=ae.getProgramCacheKey(ge);let Ve=q.programs;q.environment=A.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(A.isMeshStandardMaterial?O:S).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Ve===void 0&&(A.addEventListener("dispose",Be),Ve=new Map,q.programs=Ve);let Ye=Ve.get(Te);if(Ye!==void 0){if(q.currentProgram===Ye&&q.lightsStateVersion===de)return gt(A,ge),Ye}else ge.uniforms=ae.getUniforms(A),A.onBeforeCompile(ge,b),Ye=ae.acquireProgram(ge,Te),Ve.set(Te,Ye),q.uniforms=ge.uniforms;const Re=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Re.clippingPlanes=se.uniform),gt(A,ge),q.needsLights=gn(A),q.lightsStateVersion=de,q.needsLights&&(Re.ambientLightColor.value=z.state.ambient,Re.lightProbe.value=z.state.probe,Re.directionalLights.value=z.state.directional,Re.directionalLightShadows.value=z.state.directionalShadow,Re.spotLights.value=z.state.spot,Re.spotLightShadows.value=z.state.spotShadow,Re.rectAreaLights.value=z.state.rectArea,Re.ltc_1.value=z.state.rectAreaLTC1,Re.ltc_2.value=z.state.rectAreaLTC2,Re.pointLights.value=z.state.point,Re.pointLightShadows.value=z.state.pointShadow,Re.hemisphereLights.value=z.state.hemi,Re.directionalShadowMap.value=z.state.directionalShadowMap,Re.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Re.spotShadowMap.value=z.state.spotShadowMap,Re.spotLightMatrix.value=z.state.spotLightMatrix,Re.spotLightMap.value=z.state.spotLightMap,Re.pointShadowMap.value=z.state.pointShadowMap,Re.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=Ye,q.uniformsList=null,Ye}function Rt(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=Xc.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function gt(A,B){const j=U.get(A);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.batchingColor=B.batchingColor,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.instancingMorph=B.instancingMorph,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function zn(A,B,j,q,z){B.isScene!==!0&&(B=$e),E.resetTextureUnits();const fe=B.fog,de=q.isMeshStandardMaterial?B.environment:null,ge=C===null?b.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Pn,Te=(q.isMeshStandardMaterial?O:S).get(q.envMap||de),Ve=q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ye=!!j.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Re=!!j.morphAttributes.position,Qe=!!j.morphAttributes.normal,dt=!!j.morphAttributes.color;let _t=Or;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(_t=b.toneMapping);const Ft=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,bt=Ft!==void 0?Ft.length:0,Fe=U.get(q),Gi=p.state.lights;if(re===!0&&(_e===!0||A!==x)){const ii=A===x&&q.id===M;se.setState(q,A,ii)}let vt=!1;q.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Gi.state.version||Fe.outputColorSpace!==ge||z.isBatchedMesh&&Fe.batching===!1||!z.isBatchedMesh&&Fe.batching===!0||z.isBatchedMesh&&Fe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Fe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Fe.instancing===!1||!z.isInstancedMesh&&Fe.instancing===!0||z.isSkinnedMesh&&Fe.skinning===!1||!z.isSkinnedMesh&&Fe.skinning===!0||z.isInstancedMesh&&Fe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Fe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Fe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Fe.instancingMorph===!1&&z.morphTexture!==null||Fe.envMap!==Te||q.fog===!0&&Fe.fog!==fe||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==se.numPlanes||Fe.numIntersection!==se.numIntersection)||Fe.vertexAlphas!==Ve||Fe.vertexTangents!==Ye||Fe.morphTargets!==Re||Fe.morphNormals!==Qe||Fe.morphColors!==dt||Fe.toneMapping!==_t||Fe.morphTargetsCount!==bt)&&(vt=!0):(vt=!0,Fe.__version=q.version);let pi=Fe.currentProgram;vt===!0&&(pi=wt(q,B,z));let Ts=!1,Hn=!1,Ia=!1;const It=pi.getUniforms(),Ei=Fe.uniforms;if(Ae.useProgram(pi.program)&&(Ts=!0,Hn=!0,Ia=!0),q.id!==M&&(M=q.id,Hn=!0),Ts||x!==A){Ae.buffers.depth.getReversed()?(ue.copy(A.projectionMatrix),Iv(ue),Uv(ue),It.setValue(k,"projectionMatrix",ue)):It.setValue(k,"projectionMatrix",A.projectionMatrix),It.setValue(k,"viewMatrix",A.matrixWorldInverse);const fr=It.map.cameraPosition;fr!==void 0&&fr.setValue(k,De.setFromMatrixPosition(A.matrixWorld)),V.logarithmicDepthBuffer&&It.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&It.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),x!==A&&(x=A,Hn=!0,Ia=!0)}if(z.isSkinnedMesh){It.setOptional(k,z,"bindMatrix"),It.setOptional(k,z,"bindMatrixInverse");const ii=z.skeleton;ii&&(ii.boneTexture===null&&ii.computeBoneTexture(),It.setValue(k,"boneTexture",ii.boneTexture,E))}z.isBatchedMesh&&(It.setOptional(k,z,"batchingTexture"),It.setValue(k,"batchingTexture",z._matricesTexture,E),It.setOptional(k,z,"batchingIdTexture"),It.setValue(k,"batchingIdTexture",z._indirectTexture,E),It.setOptional(k,z,"batchingColorTexture"),z._colorsTexture!==null&&It.setValue(k,"batchingColorTexture",z._colorsTexture,E));const Ua=j.morphAttributes;if((Ua.position!==void 0||Ua.normal!==void 0||Ua.color!==void 0)&&Le.update(z,j,pi),(Hn||Fe.receiveShadow!==z.receiveShadow)&&(Fe.receiveShadow=z.receiveShadow,It.setValue(k,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Ei.envMap.value=Te,Ei.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(Ei.envMapIntensity.value=B.environmentIntensity),Hn&&(It.setValue(k,"toneMappingExposure",b.toneMappingExposure),Fe.needsLights&&Lt(Ei,Ia),fe&&q.fog===!0&&oe.refreshFogUniforms(Ei,fe),oe.refreshMaterialUniforms(Ei,q,F,W,p.state.transmissionRenderTarget[A.id]),Xc.upload(k,Rt(Fe),Ei,E)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Xc.upload(k,Rt(Fe),Ei,E),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&It.setValue(k,"center",z.center),It.setValue(k,"modelViewMatrix",z.modelViewMatrix),It.setValue(k,"normalMatrix",z.normalMatrix),It.setValue(k,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const ii=q.uniformsGroups;for(let fr=0,dr=ii.length;fr<dr;fr++){const kf=ii[fr];L.update(kf,pi),L.bind(kf,pi)}}return pi}function Lt(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function gn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,B,j){U.get(A.texture).__webglTexture=B,U.get(A.depthTexture).__webglTexture=j;const q=U.get(A);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=j===void 0,q.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,B){const j=U.get(A);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,j=0){C=A,R=B,T=j;let q=!0,z=null,fe=!1,de=!1;if(A){const Te=U.get(A);if(Te.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(k.FRAMEBUFFER,null),q=!1;else if(Te.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Te.__hasExternalTextures)E.rebindTextures(A,U.get(A.texture).__webglTexture,U.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Re=A.depthTexture;if(Te.__boundDepthTexture!==Re){if(Re!==null&&U.has(Re)&&(A.width!==Re.image.width||A.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(de=!0);const Ye=U.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ye[B])?z=Ye[B][j]:z=Ye[B],fe=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?z=U.get(A).__webglMultisampledFramebuffer:Array.isArray(Ye)?z=Ye[j]:z=Ye,D.copy(A.viewport),I.copy(A.scissor),N=A.scissorTest}else D.copy(ce).multiplyScalar(F).floor(),I.copy(ve).multiplyScalar(F).floor(),N=Pe;if(Ae.bindFramebuffer(k.FRAMEBUFFER,z)&&q&&Ae.drawBuffers(A,z),Ae.viewport(D),Ae.scissor(I),Ae.setScissorTest(N),fe){const Te=U.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+B,Te.__webglTexture,j)}else if(de){const Te=U.get(A.texture),Ve=B||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Te.__webglTexture,j||0,Ve)}M=-1},this.readRenderTargetPixels=function(A,B,j,q,z,fe,de){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=U.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge){Ae.bindFramebuffer(k.FRAMEBUFFER,ge);try{const Te=A.texture,Ve=Te.format,Ye=Te.type;if(!V.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-q&&j>=0&&j<=A.height-z&&k.readPixels(B,j,q,z,ke.convert(Ve),ke.convert(Ye),fe)}finally{const Te=C!==null?U.get(C).__webglFramebuffer:null;Ae.bindFramebuffer(k.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(A,B,j,q,z,fe,de){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=U.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge){const Te=A.texture,Ve=Te.format,Ye=Te.type;if(!V.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=A.width-q&&j>=0&&j<=A.height-z){Ae.bindFramebuffer(k.FRAMEBUFFER,ge);const Re=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Re),k.bufferData(k.PIXEL_PACK_BUFFER,fe.byteLength,k.STREAM_READ),k.readPixels(B,j,q,z,ke.convert(Ve),ke.convert(Ye),0);const Qe=C!==null?U.get(C).__webglFramebuffer:null;Ae.bindFramebuffer(k.FRAMEBUFFER,Qe);const dt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Lv(k,dt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Re),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,fe),k.deleteBuffer(Re),k.deleteSync(dt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,B=null,j=0){A.isTexture!==!0&&(ro("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,A=arguments[1]);const q=Math.pow(2,-j),z=Math.floor(A.image.width*q),fe=Math.floor(A.image.height*q),de=B!==null?B.x:0,ge=B!==null?B.y:0;E.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,j,0,0,de,ge,z,fe),Ae.unbindTexture()},this.copyTextureToTexture=function(A,B,j=null,q=null,z=0){A.isTexture!==!0&&(ro("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1],B=arguments[2],z=arguments[3]||0,j=null);let fe,de,ge,Te,Ve,Ye,Re,Qe,dt;const _t=A.isCompressedTexture?A.mipmaps[z]:A.image;j!==null?(fe=j.max.x-j.min.x,de=j.max.y-j.min.y,ge=j.isBox3?j.max.z-j.min.z:1,Te=j.min.x,Ve=j.min.y,Ye=j.isBox3?j.min.z:0):(fe=_t.width,de=_t.height,ge=_t.depth||1,Te=0,Ve=0,Ye=0),q!==null?(Re=q.x,Qe=q.y,dt=q.z):(Re=0,Qe=0,dt=0);const Ft=ke.convert(B.format),bt=ke.convert(B.type);let Fe;B.isData3DTexture?(E.setTexture3D(B,0),Fe=k.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(E.setTexture2DArray(B,0),Fe=k.TEXTURE_2D_ARRAY):(E.setTexture2D(B,0),Fe=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,B.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,B.unpackAlignment);const Gi=k.getParameter(k.UNPACK_ROW_LENGTH),vt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),pi=k.getParameter(k.UNPACK_SKIP_PIXELS),Ts=k.getParameter(k.UNPACK_SKIP_ROWS),Hn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,_t.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,_t.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Te),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ve),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ye);const Ia=A.isDataArrayTexture||A.isData3DTexture,It=B.isDataArrayTexture||B.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Ei=U.get(A),Ua=U.get(B),ii=U.get(Ei.__renderTarget),fr=U.get(Ua.__renderTarget);Ae.bindFramebuffer(k.READ_FRAMEBUFFER,ii.__webglFramebuffer),Ae.bindFramebuffer(k.DRAW_FRAMEBUFFER,fr.__webglFramebuffer);for(let dr=0;dr<ge;dr++)Ia&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,U.get(A).__webglTexture,z,Ye+dr),A.isDepthTexture?(It&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,U.get(B).__webglTexture,z,dt+dr),k.blitFramebuffer(Te,Ve,fe,de,Re,Qe,fe,de,k.DEPTH_BUFFER_BIT,k.NEAREST)):It?k.copyTexSubImage3D(Fe,z,Re,Qe,dt+dr,Te,Ve,fe,de):k.copyTexSubImage2D(Fe,z,Re,Qe,dt+dr,Te,Ve,fe,de);Ae.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else It?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Fe,z,Re,Qe,dt,fe,de,ge,Ft,bt,_t.data):B.isCompressedArrayTexture?k.compressedTexSubImage3D(Fe,z,Re,Qe,dt,fe,de,ge,Ft,_t.data):k.texSubImage3D(Fe,z,Re,Qe,dt,fe,de,ge,Ft,bt,_t):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,z,Re,Qe,fe,de,Ft,bt,_t.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,z,Re,Qe,_t.width,_t.height,Ft,_t.data):k.texSubImage2D(k.TEXTURE_2D,z,Re,Qe,fe,de,Ft,bt,_t);k.pixelStorei(k.UNPACK_ROW_LENGTH,Gi),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,vt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,pi),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ts),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Hn),z===0&&B.generateMipmaps&&k.generateMipmap(Fe),Ae.unbindTexture()},this.copyTextureToTexture3D=function(A,B,j=null,q=null,z=0){return A.isTexture!==!0&&(ro("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,q=arguments[1]||null,A=arguments[2],B=arguments[3],z=arguments[4]||0),ro('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,B,j,q,z)},this.initRenderTarget=function(A){U.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),Ae.unbindTexture()},this.resetState=function(){R=0,T=0,C=null,Ae.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ir}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}class wf{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=t}clone(){return new wf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class VT extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class WT{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ih,this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const bn=new H;class Rf{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Rf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Up=new H,Np=new pt,Fp=new pt,XT=new H,Op=new tt,Mc=new H,du=new Bi,kp=new tt,pu=new _l;class jT extends wn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fd,this.bindMatrix=new tt,this.bindMatrixInverse=new tt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ki),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Mc),this.boundingBox.expandByPoint(Mc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Bi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Mc),this.boundingSphere.expandByPoint(Mc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),du.copy(this.boundingSphere),du.applyMatrix4(i),e.ray.intersectsSphere(du)!==!1&&(kp.copy(i).invert(),pu.copy(e.ray).applyMatrix4(kp),!(this.boundingBox!==null&&pu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,pu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===tv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Np.fromBufferAttribute(i.attributes.skinIndex,e),Fp.fromBufferAttribute(i.attributes.skinWeight,e),Up.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Fp.getComponent(s);if(a!==0){const o=Np.getComponent(s);Op.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(XT.copy(Up).applyMatrix4(Op),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class y_ extends Nt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class S_ extends Qt{constructor(e=null,t=1,n=1,i,s,a,o,c,l=Cn,u=Cn,h,f){super(null,a,o,c,l,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bp=new tt,qT=new tt;class Cf{constructor(e=[],t=[]){this.uuid=Si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new tt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new tt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:qT;Bp.multiplyMatrices(o,t[s]),Bp.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Cf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new S_(t,e,e,fi,yi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new y_),this.bones.push(a),this.boneInverses.push(new tt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Nh extends mn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ws=new tt,zp=new tt,Tc=[],Hp=new ki,YT=new tt,Wa=new wn,Xa=new Bi;class KT extends wn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Nh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,YT)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ki),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ws),Hp.copy(e.boundingBox).applyMatrix4(Ws),this.boundingBox.union(Hp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ws),Xa.copy(e.boundingSphere).applyMatrix4(Ws),this.boundingSphere.union(Xa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Wa.geometry=this.geometry,Wa.material=this.material,Wa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xa.copy(this.boundingSphere),Xa.applyMatrix4(n),e.ray.intersectsSphere(Xa)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ws),zp.multiplyMatrices(n,Ws),Wa.matrixWorld=zp,Wa.raycast(e,Tc);for(let a=0,o=Tc.length;a<o;a++){const c=Tc[a];c.instanceId=s,c.object=this,t.push(c)}Tc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Nh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new S_(new Float32Array(i*this.count),i,this.count,xf,yi));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class M_ extends Ni{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cl=new H,ll=new H,Gp=new tt,ja=new _l,Ec=new Bi,mu=new H,Vp=new H;class Pf extends Nt{constructor(e=new ni,t=new M_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)cl.fromBufferAttribute(t,i-1),ll.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=cl.distanceTo(ll);e.setAttribute("lineDistance",new kn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ec.copy(n.boundingSphere),Ec.applyMatrix4(i),Ec.radius+=s,e.ray.intersectsSphere(Ec)===!1)return;Gp.copy(i).invert(),ja.copy(e.ray).applyMatrix4(Gp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=l){const p=u.getX(_),v=u.getX(_+1),y=Ac(this,e,ja,c,p,v);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=Ac(this,e,ja,c,_,m);p&&t.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=l){const p=Ac(this,e,ja,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Ac(this,e,ja,c,g-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ac(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(cl.fromBufferAttribute(a,i),ll.fromBufferAttribute(a,s),t.distanceSqToSegment(cl,ll,mu,Vp)>n)return;mu.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(mu);if(!(c<e.near||c>e.far))return{distance:c,point:Vp.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const Wp=new H,Xp=new H;class QT extends Pf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Wp.fromBufferAttribute(t,i),Xp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Wp.distanceTo(Xp);e.setAttribute("lineDistance",new kn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $T extends Pf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Df extends Ni{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const jp=new tt,Fh=new _l,wc=new Bi,Rc=new H;class T_ extends Nt{constructor(e=new ni,t=new Df){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wc.copy(n.boundingSphere),wc.applyMatrix4(i),wc.radius+=s,e.ray.intersectsSphere(wc)===!1)return;jp.copy(i).invert(),Fh.copy(e.ray).applyMatrix4(jp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=f,_=d;g<_;g++){const m=l.getX(g);Rc.fromBufferAttribute(h,m),qp(Rc,m,c,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,_=d;g<_;g++)Rc.fromBufferAttribute(h,g),qp(Rc,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function qp(r,e,t,n,i,s,a){const o=Fh.distanceSqToPoint(r);if(o<t){const c=new H;Fh.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class JT extends Qt{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Lf extends ni{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new H,u=new je;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=n+h/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new kn(a,3)),this.setAttribute("normal",new kn(o,3)),this.setAttribute("uv",new kn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ZT extends Rn{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class yl extends Ni{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=i_,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zi extends yl{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return hn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Cc(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function eE(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function tE(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Yp(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function E_(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class Ho{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class nE extends Ho{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Od,endingEnd:Od}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case kd:s=e,o=2*t-n;break;case Bd:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case kd:a=e,c=2*n-t;break;case Bd:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*_+.5*g,b=d*m-d*_;for(let w=0;w!==o;++w)s[w]=p*a[u+w]+v*a[l+w]+y*a[c+w]+b*a[h+w];return s}}class iE extends Ho{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)s[f]=a[l+f]*h+a[c+f]*u;return s}}class rE extends Ho{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Hi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Cc(t,this.TimeBufferType),this.values=Cc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Cc(e.times,Array),values:Cc(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new rE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new iE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case No:t=this.InterpolantFactoryMethodDiscrete;break;case Fo:t=this.InterpolantFactoryMethodLinear;break;case Bl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return No;case this.InterpolantFactoryMethodLinear:return Fo;case this.InterpolantFactoryMethodSmooth:return Bl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&eE(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Bl,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{const h=o*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Hi.prototype.TimeBufferType=Float32Array;Hi.prototype.ValueBufferType=Float32Array;Hi.prototype.DefaultInterpolation=Fo;class Ca extends Hi{constructor(e,t,n){super(e,t,n)}}Ca.prototype.ValueTypeName="bool";Ca.prototype.ValueBufferType=Array;Ca.prototype.DefaultInterpolation=No;Ca.prototype.InterpolantFactoryMethodLinear=void 0;Ca.prototype.InterpolantFactoryMethodSmooth=void 0;class A_ extends Hi{}A_.prototype.ValueTypeName="color";class Ma extends Hi{}Ma.prototype.ValueTypeName="number";class sE extends Ho{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let u=l+o;l!==u;l+=4)Wr.slerpFlat(s,0,a,l-o,a,l,c);return s}}class Ta extends Hi{InterpolantFactoryMethodLinear(e){return new sE(this.times,this.values,this.getValueSize(),e)}}Ta.prototype.ValueTypeName="quaternion";Ta.prototype.InterpolantFactoryMethodSmooth=void 0;class Pa extends Hi{constructor(e,t,n){super(e,t,n)}}Pa.prototype.ValueTypeName="string";Pa.prototype.ValueBufferType=Array;Pa.prototype.DefaultInterpolation=No;Pa.prototype.InterpolantFactoryMethodLinear=void 0;Pa.prototype.InterpolantFactoryMethodSmooth=void 0;class Ea extends Hi{}Ea.prototype.ValueTypeName="vector";class aE{constructor(e="",t=-1,n=[],i=nv){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Si(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(cE(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Hi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const u=tE(c);c=Yp(c,1,u),l=Yp(l,1,u),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Ma(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];E_(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let v=0;v!==f[g].morphTargets.length;++v){const y=f[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new Ma(".morphTargetInfluence["+_+"]",m,p))}c=d.length*a}else{const d=".bones["+t[h].name+"]";n(Ea,d+".position",f,"pos",i),n(Ta,d+".quaternion",f,"rot",i),n(Ea,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function oE(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ma;case"vector":case"vector2":case"vector3":case"vector4":return Ea;case"color":return A_;case"quaternion":return Ta;case"bool":case"boolean":return Ca;case"string":return Pa}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function cE(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=oE(r.type);if(r.times===void 0){const t=[],n=[];E_(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Ir={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class lE{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const uE=new lE;class Da{constructor(e){this.manager=e!==void 0?e:uE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Da.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ki={};class hE extends Error{constructor(e,t){super(e),this.response=t}}class w_ extends Da{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ir.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ki[e]!==void 0){Ki[e].push({onLoad:t,onProgress:n,onError:i});return}Ki[e]=[],Ki[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Ki[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){h.read().then(({done:y,value:b})=>{if(y)p.close();else{_+=b.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let R=0,T=u.length;R<T;R++){const C=u[R];C.onProgress&&C.onProgress(w)}p.enqueue(b),v()}},y=>{p.error(y)})}}});return new Response(m)}else throw new hE(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{Ir.add(e,l);const u=Ki[e];delete Ki[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=Ki[e];if(u===void 0)throw this.manager.itemError(e),l;delete Ki[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class fE extends Da{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ir.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Oo("img");function c(){u(),Ir.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class dE extends Da{constructor(e){super(e)}load(e,t,n,i){const s=new Qt,a=new fE(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Sl extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class pE extends Sl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const gu=new tt,Kp=new H,Qp=new H;class If{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ef,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Kp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kp),Qp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qp),t.updateMatrixWorld(),gu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class mE extends If{constructor(){super(new En(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ya*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class gE extends Sl{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new mE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const $p=new tt,qa=new H,_u=new H;class _E extends If{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new je(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),qa.setFromMatrixPosition(e.matrixWorld),n.position.copy(qa),_u.copy(n.position),_u.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_u),n.updateMatrixWorld(),i.makeTranslation(-qa.x,-qa.y,-qa.z),$p.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($p)}}class jc extends Sl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new _E}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class bE extends If{constructor(){super(new vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class R_ extends Sl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new bE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yo{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class vE extends Da{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ir.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ir.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Ir.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Ir.add(e,c),s.manager.itemStart(e)}}class C_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Jp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Jp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Jp(){return performance.now()}const Uf="\\[\\]\\.:\\/",xE=new RegExp("["+Uf+"]","g"),Nf="[^"+Uf+"]",yE="[^"+Uf.replace("\\.","")+"]",SE=/((?:WC+[\/:])*)/.source.replace("WC",Nf),ME=/(WCOD+)?/.source.replace("WCOD",yE),TE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nf),EE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nf),AE=new RegExp("^"+SE+ME+TE+EE+"$"),wE=["material","materials","bones","map"];class RE{constructor(e,t,n){const i=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Et{constructor(e,t,n){this.path=t,this.parsedPath=n||Et.parseTrackName(t),this.node=Et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Et.Composite(e,t,n):new Et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xE,"")}static parseTrackName(e){const t=AE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);wE.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Et.Composite=RE;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mf);function Zp(r,e){if(e===iv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Lh||e===n_){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Lh)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class CE extends Da{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new UE(t)}),this.register(function(t){return new NE(t)}),this.register(function(t){return new WE(t)}),this.register(function(t){return new XE(t)}),this.register(function(t){return new jE(t)}),this.register(function(t){return new OE(t)}),this.register(function(t){return new kE(t)}),this.register(function(t){return new BE(t)}),this.register(function(t){return new zE(t)}),this.register(function(t){return new IE(t)}),this.register(function(t){return new HE(t)}),this.register(function(t){return new FE(t)}),this.register(function(t){return new VE(t)}),this.register(function(t){return new GE(t)}),this.register(function(t){return new DE(t)}),this.register(function(t){return new qE(t)}),this.register(function(t){return new YE(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=yo.extractUrlBase(e);a=yo.resolveURL(l,this.path)}else a=yo.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new w_(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===P_){try{a[lt.KHR_BINARY_GLTF]=new KE(e)}catch(h){i&&i(h);return}s=JSON.parse(a[lt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new cA(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case lt.KHR_MATERIALS_UNLIT:a[h]=new LE;break;case lt.KHR_DRACO_MESH_COMPRESSION:a[h]=new QE(s,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:a[h]=new $E;break;case lt.KHR_MESH_QUANTIZATION:a[h]=new JE;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function PE(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class DE{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new He(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Pn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new R_(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new jc(u),l.distance=h;break;case"spot":l=new gE(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Ji(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class LE{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return Dr}extendParams(e,t,n){const i=[];e.color=new He(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Pn),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,rn))}return Promise.all(i)}}class IE{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class UE{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new je(o,o)}return Promise.all(s)}}class NE{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class FE{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class OE{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new He(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Pn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,rn)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class kE{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class BE{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new He().setRGB(o[0],o[1],o[2],Pn),Promise.all(s)}}class zE{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class HE{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new He().setRGB(o[0],o[1],o[2],Pn),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,rn)),Promise.all(s)}}class GE{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class VE{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class WE{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class XE{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class jE{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class qE{constructor(e){this.name=lt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class YE{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==ai.TRIANGLES&&l.mode!==ai.TRIANGLE_STRIP&&l.mode!==ai.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(const g of h){const _=new tt,m=new H,p=new Wr,v=new H(1,1,1),y=new KT(g.geometry,g.material,f);for(let b=0;b<f;b++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,b),c.SCALE&&v.fromBufferAttribute(c.SCALE,b),y.setMatrixAt(b,_.compose(m,p,v));for(const b in c)if(b==="_COLOR_0"){const w=c[b];y.instanceColor=new Nh(w.array,w.itemSize,w.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,c[b]);Nt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const P_="glTF",Ya=12,em={JSON:1313821514,BIN:5130562};class KE{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ya),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==P_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ya,s=new DataView(e,Ya);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===em.JSON){const l=new Uint8Array(e,Ya+a,o);this.content=n.decode(l)}else if(c===em.BIN){const l=Ya+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class QE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const h=Oh[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Oh[u]||u.toLowerCase();if(a[u]!==void 0){const f=n.accessors[e.attributes[u]],d=ca[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}h(d)},o,l,Pn,f)})})}}class $E{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class JE{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}}class D_ extends Ho{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*l,_=g-l,m=-2*d+3*f,p=d-f,v=1-m,y=p-f+h;for(let b=0;b!==o;b++){const w=a[_+b+o],R=a[_+b+c]*u,T=a[g+b+o],C=a[g+b]*u;s[b]=v*w+y*R+m*T+p*C}return s}}const ZE=new Wr;class eA extends D_{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return ZE.fromArray(s).normalize().toArray(s),s}}const ai={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ca={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},tm={9728:Cn,9729:Jn,9984:jg,9985:Bc,9986:io,9987:nr},nm={33071:Pr,33648:al,10497:ba},bu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Oh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},yr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tA={CUBICSPLINE:void 0,LINEAR:Fo,STEP:No},vu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nA(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new yl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ur})),r.DefaultMaterial}function Zr(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ji(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function iA(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;a.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;o.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],f=l[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function rA(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sA(r){let e;const t=r.extensions&&r.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+xu(t.attributes):e=r.indices+":"+xu(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+xu(r.targets[n]);return e}function xu(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function kh(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function aA(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const oA=new tt;class cA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new PE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new dE(this.options.manager):this.textureLoader=new vE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new w_(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Zr(s,o,i),Ji(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())s(u,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(yo.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=bu[i.type],o=ca[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new mn(l,a,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=bu[i.type],l=ca[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(d&&d!==h){const p=Math.floor(f/d),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(v);y||(_=new l(o,p*d,i.count*d/u),y=new WT(_,d/u),t.cache.add(v,y)),m=new Rf(y,c,f%d/u,g)}else o===null?_=new l(i.count*c):_=new l(o,f,i.count*c),m=new mn(_,c,g);if(i.sparse!==void 0){const p=bu.SCALAR,v=ca[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,w=new v(a[1],y,i.sparse.count*p),R=new l(a[2],b,i.sparse.count*c);o!==null&&(m=new mn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,C=w.length;T<C;T++){const M=w[T];if(m.setX(M,R[T*c]),c>=2&&m.setY(M,R[T*c+1]),c>=3&&m.setZ(M,R[T*c+2]),c>=4&&m.setW(M,R[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(s.samplers||{})[a.sampler]||{};return u.magFilter=tm[f.magFilter]||Jn,u.minFilter=tm[f.minFilter]||nr,u.wrapS=nm[f.wrapS]||ba,u.wrapT=nm[f.wrapT]||ba,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Cn&&u.minFilter!==Jn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const f=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Qt(_);m.needsUpdate=!0,f(m)}),t.load(yo.resolveURL(h,s.path),g,void 0,d)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),Ji(h,a),h.userData.mimeType=a.mimeType||aA(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[lt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Df,Ni.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new M_,Ni.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return yl}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},c=s.extensions||{},l=[];if(c[lt.KHR_MATERIALS_UNLIT]){const h=i[lt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new He(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Pn),o.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,rn)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Di);const u=s.alphaMode||vu.OPAQUE;if(u===vu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===vu.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Dr&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new je(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==Dr&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Dr){const h=s.emissiveFactor;o.emissive=new He().setRGB(h[0],h[1],h[2],Pn)}return s.emissiveTexture!==void 0&&a!==Dr&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,rn)),Promise.all(l).then(function(){const h=new a(o);return s.name&&(h.name=s.name),Ji(h,s),t.associations.set(h,{materials:e}),s.extensions&&Zr(i,h,s),h})}createUniqueName(e){const t=Et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return im(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=sA(l),h=i[u];if(h)a.push(h.promise);else{let f;l.extensions&&l.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=im(new ni,l,t),i[u]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?nA(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=a[d];let p;const v=l[d];if(m.mode===ai.TRIANGLES||m.mode===ai.TRIANGLE_STRIP||m.mode===ai.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new jT(_,v):new wn(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ai.TRIANGLE_STRIP?p.geometry=Zp(p.geometry,n_):m.mode===ai.TRIANGLE_FAN&&(p.geometry=Zp(p.geometry,Lh));else if(m.mode===ai.LINES)p=new QT(_,v);else if(m.mode===ai.LINE_STRIP)p=new Pf(_,v);else if(m.mode===ai.LINE_LOOP)p=new $T(_,v);else if(m.mode===ai.POINTS)p=new T_(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&rA(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Ji(p,s),m.extensions&&Zr(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&Zr(i,h[0],s),h[0];const f=new Lr;s.extensions&&Zr(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new En(Pv.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new vl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ji(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const h=a[l];if(h){o.push(h);const f=new tt;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Cf(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],g=i.samplers[d.sampler],_=d.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let v=0,y=f.length;v<y;v++){const b=f[v],w=d[v],R=g[v],T=_[v],C=m[v];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const M=n._createAnimationTracks(b,w,R,T,C);if(M)for(let x=0;x<M.length;x++)p.push(M[x])}return new aE(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){const u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,oA)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(s.isBone===!0?u=new y_:l.length>1?u=new Lr:l.length===1?u=l[0]:u=new Nt,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=a),Ji(u,s),s.extensions&&Zr(n,u,s),s.matrix!==void 0){const h=new tt;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Lr;n.name&&(s.name=i.createUniqueName(n.name)),Ji(s,n),n.extensions&&Zr(t,s,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)s.add(c[u]);const l=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Ni||f instanceof Qt)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,c=[];yr[s.path]===yr.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(yr[s.path]){case yr.weights:l=Ma;break;case yr.rotation:l=Ta;break;case yr.position:case yr.scale:l=Ea;break;default:switch(n.itemSize){case 1:l=Ma;break;case 2:case 3:default:l=Ea;break}break}const u=i.interpolation!==void 0?tA[i.interpolation]:Fo,h=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const g=new l(c[f]+"."+yr[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=kh(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ta?eA:D_;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function lA(r,e,t){const n=e.attributes,i=new ki;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new H(c[0],c[1],c[2]),new H(l[0],l[1],l[2])),o.normalized){const u=kh(ca[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new H,c=new H;for(let l=0,u=s.length;l<u;l++){const h=s[l];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=kh(ca[f.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new Bi;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function im(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(const a in n){const o=Oh[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return ut.workingColorSpace!==Pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ut.workingColorSpace}" not supported.`),Ji(r,e),lA(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?iA(r,e.targets,t):r})}var uA=(function(){var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:r,s,a=WebAssembly.instantiate(o(i),{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var v=new Uint8Array(p.length),y=0;y<p.length;++y){var b=p.charCodeAt(y);v[y]=b>96?b-97:b>64?b-39:b+4}for(var w=0,y=0;y<p.length;++y)v[w++]=v[y]<60?n[v[y]]:(v[y]-60)*64+v[++y];return v.buffer.slice(0,w)}function c(p,v,y,b,w,R){var T=s.exports.sbrk,C=y+3&-4,M=T(C*b),x=T(w.length),D=new Uint8Array(s.exports.memory.buffer);D.set(w,x);var I=p(M,y,b,x,w.length);if(I==0&&R&&R(M,C,b),v.set(D.subarray(M,M+y*b)),T(M-T(0)),I!=0)throw new Error("Malformed buffer data: "+I)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],f=0;function d(p){var v={object:new Worker(p),pending:0,requests:{}};return v.object.onmessage=function(y){var b=y.data;v.pending-=b.count,v.requests[b.id][b.action](b.value),delete v.requests[b.id]},v}function g(p){for(var v="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),y=new Blob([v],{type:"text/javascript"}),b=URL.createObjectURL(y),w=0;w<p;++w)h[w]=d(b);URL.revokeObjectURL(b)}function _(p,v,y,b,w){for(var R=h[0],T=1;T<h.length;++T)h[T].pending<R.pending&&(R=h[T]);return new Promise(function(C,M){var x=new Uint8Array(y),D=f++;R.pending+=p,R.requests[D]={resolve:C,reject:M},R.object.postMessage({id:D,count:p,size:v,source:x,mode:b,filter:w},[x.buffer])})}function m(p){a.then(function(){var v=p.data;try{var y=new Uint8Array(v.count*v.size);c(s.exports[v.mode],y,v.count,v.size,v.source,s.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:y},[y.buffer])}catch(b){self.postMessage({id:v.id,count:v.count,action:"reject",value:b})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,v,y,b,w){c(s.exports.meshopt_decodeVertexBuffer,p,v,y,b,s.exports[l[w]])},decodeIndexBuffer:function(p,v,y,b){c(s.exports.meshopt_decodeIndexBuffer,p,v,y,b)},decodeIndexSequence:function(p,v,y,b){c(s.exports.meshopt_decodeIndexSequence,p,v,y,b)},decodeGltfBuffer:function(p,v,y,b,w,R){c(s.exports[u[w]],p,v,y,b,s.exports[l[R]])},decodeGltfBufferAsync:function(p,v,y,b,w){return h.length>0?_(p,v,y,u[b],l[w]):a.then(function(){var R=new Uint8Array(p*v);return c(s.exports[u[b]],R,p,v,y,s.exports[l[w]]),R})}}})();const L_={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class La{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const hA=new vl(-1,1,1,-1,0,1);class fA extends ni{constructor(){super(),this.setAttribute("position",new kn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new kn([0,2,0,0,2,0],2))}}const dA=new fA;class Ff{constructor(e){this._mesh=new wn(dA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,hA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class pA extends La{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Rn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ko.clone(e.uniforms),this.material=new Rn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ff(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class rm extends La{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class mA extends La{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class gA{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new je);this._width=n.width,this._height=n.height,t=new Mi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ar}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new pA(L_),this.copyPass.material.blending=sr,this.clock=new C_}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}rm!==void 0&&(a instanceof rm?n=!0:a instanceof mA&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new je);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class _A extends La{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new He}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const bA={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new He(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Aa extends La{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new je(e.x,e.y):new je(256,256),this.clearColor=new He(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Mi(s,a,{type:ar}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new Mi(s,a,{type:ar});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Mi(s,a,{type:ar});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),a=Math.round(a/2)}const o=bA;this.highPassUniforms=ko.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Rn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new je(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=L_;this.copyUniforms=ko.clone(u.uniforms),this.blendMaterial=new Rn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:sl,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new He,this.oldClearAlpha=1,this.basic=new Dr,this.fsQuad=new Ff(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new je(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=Aa.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Aa.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Rn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new je(.5,.5)},direction:{value:new je(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Rn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Aa.BlurDirectionX=new je(1,0);Aa.BlurDirectionY=new je(0,1);const vA={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class xA extends La{constructor(){super();const e=vA;this.uniforms=ko.clone(e.uniforms),this.material=new ZT({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ff(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ut.getTransfer(this._outputColorSpace)===Mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===zg?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Hg?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Gg?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===gf?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Vg?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Wg&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function yA({canvas:r,onProgress:e,onReady:t,reducedMotion:n=!1}){const i=new GT({canvas:r,antialias:!0,alpha:!1,powerPreference:"high-performance"});i.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),i.setSize(window.innerWidth,window.innerHeight,!1),i.toneMapping=gf,i.toneMappingExposure=.95;const s=new VT;s.background=new He(657417),s.fog=new wf(657417,.045);const a=new En(38,window.innerWidth/window.innerHeight,.1,80),o={x:7.5,y:3,z:8.5,tx:0,ty:1.6,tz:0,yaw:0,fov:38},c={x:0,y:0},l={x:0,y:0};s.add(new pE(3811908,328709,.9));const u=new R_(16766640,1.6);u.position.set(5,9,6),s.add(u);const h=new jc(16723355,55,30,2);h.position.set(-4.5,4.2,-4.5),s.add(h);const f=new jc(16757827,40,24,2);f.position.set(3.5,3.2,4.2),s.add(f);const d=new jc(16726831,28,20,2);d.position.set(-3.2,1.2,4.6),s.add(d);const g=new wn(new Lf(40,64),new yl({color:789003,roughness:.32,metalness:.55}));g.rotation.x=-Math.PI/2,g.position.y=0,s.add(g);const _=420,m=new ni,p=new Float32Array(_*3),v=new Float32Array(_);for(let F=0;F<_;F++)p[F*3]=(Math.random()-.5)*18,p[F*3+1]=Math.random()*7,p[F*3+2]=(Math.random()-.5)*18,v[F]=Math.random()*Math.PI*2;m.setAttribute("position",new mn(p,3));const y=document.createElement("canvas");y.width=y.height=64;const b=y.getContext("2d"),w=b.createRadialGradient(32,32,0,32,32,32);w.addColorStop(0,"rgba(255,255,255,1)"),w.addColorStop(.35,"rgba(255,255,255,0.6)"),w.addColorStop(1,"rgba(255,255,255,0)"),b.fillStyle=w,b.fillRect(0,0,64,64);const R=new JT(y),T=new T_(m,new Df({map:R,color:16757827,size:.09,transparent:!0,opacity:.55,depthWrite:!1,blending:sl,sizeAttenuation:!0}));s.add(T);const C=new Lr;s.add(C);const M=new CE;M.setMeshoptDecoder(uA),M.load("/demo/02-landingpage_3d_restaurant/assets/kiosk.glb",F=>{const J=F.scene,P=new ki().setFromObject(J),ce=P.getCenter(new H);J.position.set(-ce.x,-P.min.y,-ce.z),J.traverse(ve=>{if(!ve.isMesh)return;ve.frustumCulled=!1;const Pe=ve.material;Pe&&Pe.emissive&&(Pe.emissiveIntensity=2.4,Pe.needsUpdate=!0)}),C.add(J),t==null||t()},F=>{F.total?e==null||e(F.loaded/F.total):e==null||e(Math.min(.95,F.loaded/34e5))},F=>{console.error("[stage] model failed to load",F),e==null||e(1),t==null||t()});const D=new gA(i);D.addPass(new _A(s,a));const I=new Aa(new je(window.innerWidth,window.innerHeight),.55,.65,.72);D.addPass(I),D.addPass(new xA);const N=new C_,G=new H;let K=!0;function X(){if(!K)return;const F=N.getElapsedTime();l.x+=(c.x-l.x)*.06,l.y+=(c.y-l.y)*.06;const J=n?0:Math.sin(F*.35)*.02;C.rotation.y=o.yaw+J;const P=n?0:l.x*.6,ce=n?0:l.y*.35,ve=n?0:Math.sin(F*.6)*.05;if(a.position.set(o.x+P,o.y+ce+ve,o.z),G.set(o.tx,o.ty,o.tz),a.lookAt(G),a.fov!==o.fov&&(a.fov=o.fov,a.updateProjectionMatrix()),n||(h.intensity=55+Math.sin(F*17)*4+(Math.random()<.012?-25:0)),!n){const Pe=m.attributes.position.array;for(let Y=0;Y<_;Y++)Pe[Y*3+1]+=.0035+Math.sin(v[Y]+F)*8e-4,Pe[Y*3]+=Math.sin(F*.5+v[Y])*6e-4,Pe[Y*3+1]>7&&(Pe[Y*3+1]=0);m.attributes.position.needsUpdate=!0}D.render()}i.setAnimationLoop(X);function W(){const F=window.innerWidth,J=window.innerHeight;a.aspect=F/J,a.updateProjectionMatrix(),i.setSize(F,J,!1),D.setSize(F,J),I.setSize(F,J)}return window.addEventListener("resize",W),window.addEventListener("pointermove",F=>{c.x=(F.clientX/window.innerWidth-.5)*2,c.y=-(F.clientY/window.innerHeight-.5)*2},{passive:!0}),document.addEventListener("visibilitychange",()=>{K=!document.hidden,K&&i.setAnimationLoop(X)}),{cam:o,camera:a,scene:s,renderer:i,rig:C}}ht.registerPlugin(it,ys,pf);const Ti=window.matchMedia("(prefers-reduced-motion: reduce)").matches,SA=window.matchMedia("(min-width: 1001px)").matches,MA=new URLSearchParams(location.search).has("debug");document.body.classList.add("is-loading");const li={hero:{x:7.5,y:3,z:8.5,tx:-2.6,ty:1.6,tz:0,yaw:0,fov:38},story:{x:5.4,y:2.4,z:9.6,tx:-3,ty:1.9,tz:0,yaw:.6,fov:36},menu:{x:-4.6,y:1.6,z:8.6,tx:.6,ty:1.9,tz:0,yaw:1.3,fov:40},stats:{x:2,y:8.2,z:12.5,tx:0,ty:1,tz:0,yaw:2.4,fov:36},order:{x:7.2,y:2.4,z:8.8,tx:1,ty:1.8,tz:0,yaw:3.3,fov:36},footer:{x:11,y:5.2,z:12.5,tx:0,ty:1.6,tz:0,yaw:4.4,fov:42}};if(!SA){for(const r of Object.values(li))r.fov+=14,r.tx=0;li.hero.ty=3,li.story.ty=3.6,li.order.ty=3.4,li.stats.ty=.4}const TA=document.getElementById("loader-count"),EA=document.getElementById("loader-bar"),Xs={v:0};function sm(r){TA.textContent=String(Math.round(r*100)).padStart(2,"0"),EA.style.transform=`scaleX(${r})`}let am=!1;const Ml=yA({canvas:document.getElementById("scene"),reducedMotion:Ti,onProgress:r=>{am||(ht.killTweensOf(Xs),ht.to(Xs,{v:Math.min(r,.99),duration:.6,ease:"power2.out",onUpdate:()=>sm(Xs.v)}))},onReady:()=>{am=!0,ht.killTweensOf(Xs),ht.to(Xs,{v:1,duration:.5,ease:"power2.out",onUpdate:()=>sm(Xs.v),onComplete:AA})}});Object.assign(Ml.cam,li.hero);let _s=null;Ti||(_s=ys.create({wrapper:"#smooth-wrapper",content:"#smooth-content",smooth:1.3,effects:!1,normalizeScroll:!0,ignoreMobileResize:!0}),_s.paused(!0));const om=document.getElementById("loader");let cm=!1;function AA(){if(cm)return;cm=!0,ht.timeline({defaults:{ease:"power4.inOut"},onComplete:()=>{om.remove(),document.body.classList.remove("is-loading"),_s==null||_s.paused(!1),it.refresh()}}).to(".loader__count, .loader__label, .loader__bar, .loader__foot",{yPercent:-40,opacity:0,duration:.6,stagger:.04,ease:"power3.in"}).to(".loader__kanji",{scale:1.6,opacity:0,duration:.8,ease:"power3.in"},"<").to(om,{yPercent:-100,duration:1.1},"-=0.25").add(wA,"-=0.75")}function wA(){const r=ht.timeline({defaults:{ease:"power3.out"}});return Ti||r.fromTo(Ml.cam,{x:li.hero.x+5,y:li.hero.y+3.2,z:li.hero.z+6,fov:46},{...li.hero,duration:2.2,ease:"power3.out"},0),r.from(".nav",{yPercent:-100,opacity:0,duration:.9},.1).from(".hero__kicker",{opacity:0,x:-16,duration:.7},.25).from(".hero__line",{yPercent:110,duration:1.1,stagger:.09,ease:"power4.out"},.3).from(".hero__sub",{opacity:0,y:18,duration:.8},.85).from(".hero__ctas .btn",{opacity:0,y:14,stagger:.08,duration:.6},1).from(".hero__kanji",{opacity:0,y:24,duration:.9},1).from(".hero__cue, .hero__ticket",{opacity:0,duration:.7},1.25),r}const RA=ht.utils.toArray("[data-station]");Ti||RA.slice(1).forEach(r=>{const e=li[r.dataset.station];e&&ht.to(Ml.cam,{...e,ease:"none",immediateRender:!1,scrollTrigger:{trigger:r,start:"top bottom",end:"top 25%",scrub:1.2,invalidateOnRefresh:!0}})});ht.to("#veil",{opacity:.45,ease:"none",scrollTrigger:{trigger:"#menu",start:"top 80%",end:"top 20%",scrub:!0}});ht.to("#veil",{opacity:1,ease:"none",immediateRender:!1,scrollTrigger:{trigger:"#order",start:"top bottom",end:"top 30%",scrub:!0}});ht.to("#progress",{scaleX:1,ease:"none",scrollTrigger:{trigger:"#content",start:"top top",end:"bottom bottom",scrub:!0}});it.create({trigger:".hero",start:"bottom 90%",onEnter:()=>document.getElementById("nav").classList.add("is-scrolled"),onLeaveBack:()=>document.getElementById("nav").classList.remove("is-scrolled")});const I_=document.getElementById("story-text"),lm=new pf(I_,{type:"words",wordsClass:"w"});Ti?ht.set(lm.words,{opacity:1}):ht.to(lm.words,{opacity:1,stagger:.06,ease:"none",scrollTrigger:{trigger:I_,start:"top 78%",end:"bottom 45%",scrub:.6}});function Gr(r,{y:e=24,stagger:t=.1,start:n="top 88%",duration:i=.8}={}){ht.utils.toArray(r).forEach((s,a)=>{ht.from(s,{opacity:0,y:Ti?0:e,duration:i,delay:a*t,ease:"power3.out",scrollTrigger:{trigger:s,start:n,once:!0}})})}Gr(".story .section__head",{stagger:0});Gr(".fact",{y:30,stagger:.1});Gr(".stats .section__head",{stagger:0});Gr(".order__copy > *",{y:26,stagger:.08});Gr(".order__form",{y:34,stagger:0});Gr(".footer__grid, .footer__bar",{y:20,stagger:.1});ht.from(".footer__logo",{yPercent:40,opacity:0,duration:1.2,ease:"power4.out",scrollTrigger:{trigger:".footer",start:"top 85%",once:!0}});const U_=ht.matchMedia();U_.add("(min-width: 1001px)",()=>{const r=document.getElementById("menu-track"),e=ht.utils.toArray(".dish"),t=()=>r.scrollWidth-window.innerWidth+32,n=()=>t()*1.25,i=ht.to(r,{x:()=>-t(),ease:"none"}),s=it.create({trigger:".menu__pin",start:"top top",end:()=>`+=${n()}`,pin:!0,scrub:.6,anticipatePin:1,invalidateOnRefresh:!0,animation:i}),a=ht.from(".section__head--menu > *",{opacity:0,y:20,stagger:.08,duration:.8,ease:"power3.out",scrollTrigger:{trigger:".menu__pin",start:"top 70%",once:!0}}),o=ht.from(e,{opacity:0,y:40,rotateY:-6,stagger:.07,duration:.9,ease:"power3.out",scrollTrigger:{trigger:".menu__pin",start:"top 60%",once:!0}}),c=[];return Ti||e.forEach(l=>{const u=ht.quickTo(l,"rotateX",{duration:.6,ease:"power3.out"}),h=ht.quickTo(l,"rotateY",{duration:.6,ease:"power3.out"}),f=g=>{const _=l.getBoundingClientRect(),m=(g.clientX-_.left)/_.width-.5,p=(g.clientY-_.top)/_.height-.5;h(m*8),u(-p*8)},d=()=>{u(0),h(0)};l.addEventListener("pointermove",f),l.addEventListener("pointerleave",d),c.push(()=>{l.removeEventListener("pointermove",f),l.removeEventListener("pointerleave",d)})}),()=>{var l,u;s.kill(),i.kill(),(l=a.scrollTrigger)==null||l.kill(),(u=o.scrollTrigger)==null||u.kill(),c.forEach(h=>h()),ht.set([r,...e],{clearProps:"all"})}});U_.add("(max-width: 1000px)",()=>{Gr(".section__head--menu",{stagger:0}),Gr(".dish",{y:30,stagger:.06})});const CA=new Intl.NumberFormat("en-US");ht.utils.toArray("[data-count]").forEach(r=>{const e=parseFloat(r.dataset.count),t=parseInt(r.dataset.decimals||"0",10),n={v:0},i=()=>{r.textContent=r.dataset.format==="m"?CA.format(Math.round(n.v)):n.v.toFixed(t)};i(),ht.to(n,{v:e,duration:Ti?.01:2.2,ease:"power3.out",onUpdate:i,scrollTrigger:{trigger:r,start:"top 85%",once:!0}})});ht.from(".stat",{opacity:0,y:26,stagger:.1,duration:.8,ease:"power3.out",scrollTrigger:{trigger:".stats__grid",start:"top 85%",once:!0}});const Bh=document.getElementById("order-form"),So=document.getElementById("order-done"),PA=document.getElementById("stool-num");Bh.addEventListener("submit",r=>{r.preventDefault();const e=Bh.elements.name;if(!e.value.trim()){ht.fromTo(e,{x:-6},{x:0,duration:.5,ease:"elastic.out(1, 0.3)"}),e.focus();return}PA.textContent=`#0${1+Math.floor(Math.random()*7)}`,ht.timeline().to(".order__fields, .order__form .btn--wide, .order__fine",{opacity:0,y:-10,duration:.35,ease:"power2.in",stagger:.03}).set(So,{visibility:"visible"}).to(So,{opacity:1,duration:.4,ease:"power2.out"}).from(So.children,{opacity:0,y:16,stagger:.08,duration:.6,ease:"power3.out"},"<0.1")});document.getElementById("order-reset").addEventListener("click",()=>{Bh.reset(),ht.timeline().to(So,{opacity:0,duration:.3,ease:"power2.in"}).set(So,{visibility:"hidden"}).to(".order__fields, .order__form .btn--wide, .order__fine",{opacity:1,y:0,duration:.5,ease:"power3.out",stagger:.04})});function DA(r){const e=document.querySelector(r);e&&(_s?_s.scrollTo(e,!0,"top top"):e.scrollIntoView({behavior:Ti?"auto":"smooth"}))}document.querySelectorAll('a[href^="#"]').forEach(r=>{r.addEventListener("click",e=>{const t=r.getAttribute("href");t.length<2||(e.preventDefault(),Of&&N_(!1),DA(t))})});const zh=document.getElementById("burger"),ul=document.getElementById("overlay");let Of=!1;const um=ht.timeline({paused:!0}).set(ul,{visibility:"visible"}).fromTo(ul,{clipPath:"inset(0 0 100% 0)"},{clipPath:"inset(0 0 0% 0)",duration:.7,ease:"power4.inOut"}).from(".overlay__links a",{yPercent:40,opacity:0,stagger:.07,duration:.6,ease:"power3.out"},"-=0.3").from(".overlay__foot",{opacity:0,duration:.4},"-=0.3");function N_(r){Of=r,zh.classList.toggle("is-open",r),zh.setAttribute("aria-expanded",String(r)),ul.classList.toggle("is-open",r),ul.setAttribute("aria-hidden",String(!r)),r?um.timeScale(1).play():um.timeScale(1.6).reverse()}zh.addEventListener("click",()=>N_(!Of));!Ti&&window.matchMedia("(hover: hover) and (pointer: fine)").matches&&document.querySelectorAll("[data-magnetic]").forEach(r=>{const e=ht.quickTo(r,"x",{duration:.5,ease:"power3.out"}),t=ht.quickTo(r,"y",{duration:.5,ease:"power3.out"});r.addEventListener("pointermove",n=>{const i=r.getBoundingClientRect();e((n.clientX-(i.left+i.width/2))*.3),t((n.clientY-(i.top+i.height/2))*.3)}),r.addEventListener("pointerleave",()=>{e(0),t(0)})});const yu=document.getElementById("ticket");let hm=427;function F_(){hm+=1,ht.timeline().to(yu,{yPercent:-60,opacity:0,duration:.25,ease:"power2.in"}).add(()=>{yu.textContent=`#${String(hm).padStart(4,"0")}`}).fromTo(yu,{yPercent:60,opacity:0},{yPercent:0,opacity:1,duration:.35,ease:"power3.out"}),setTimeout(F_,4e3+Math.random()*5e3)}Ti||setTimeout(F_,5e3);MA&&(window.__stage=Ml,window.__STATIONS=li);
