(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function fi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Ef(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var yn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ms={duration:.5,overwrite:!1,delay:0},bu,qt,vt,An=1e8,pt=1/An,ul=Math.PI*2,Im=ul/4,Nm=0,Tf=Math.sqrt,Um=Math.cos,Om=Math.sin,Bt=function(e){return typeof e=="string"},Et=function(e){return typeof e=="function"},xi=function(e){return typeof e=="number"},Eu=function(e){return typeof e>"u"},Zn=function(e){return typeof e=="object"},sn=function(e){return e!==!1},Tu=function(){return typeof window<"u"},Ba=function(e){return Et(e)||Bt(e)},Af=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},jt=Array.isArray,hl=/(?:-?\.?\d|\.)+/gi,wf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ts=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,dc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Rf=/[+-]=-?[.\d]+/,Cf=/[^,'"\[\]\s]+/gi,Fm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,xt,qn,dl,Au,Mn={},Io={},Pf,Lf=function(e){return(Io=Tr(e,Mn))&&un},wu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ma=function(e,t){return!t&&console.warn(e)},Df=function(e,t){return e&&(Mn[e]=t)&&Io&&(Io[e]=t)||Mn},ga=function(){return 0},Bm={suppressEvents:!0,isStart:!0,kill:!1},bo={suppressEvents:!0,kill:!1},zm={suppressEvents:!0},Ru={},qi=[],fl={},If,pn={},fc={},Eh=30,Eo=[],Cu="",Pu=function(e){var t=e[0],n,r;if(Zn(t)||Et(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Eo.length;r--&&!Eo[r].targetTest(t););n=Eo[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new ip(e[r],n)))||e.splice(r,1);return e},xr=function(e){return e._gsap||Pu(wn(e))[0]._gsap},Nf=function(e,t,n){return(n=e[t])&&Et(n)?e[t]():Eu(n)&&e.getAttribute&&e.getAttribute(t)||n},an=function(e,t){return(e=e.split(",")).forEach(t)||e},Tt=function(e){return Math.round(e*1e5)/1e5||0},Nt=function(e){return Math.round(e*1e7)/1e7||0},ss=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},km=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},No=function(){var e=qi.length,t=qi.slice(0),n,r;for(fl={},qi.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Uf=function(e,t,n,r){qi.length&&!qt&&No(),e.render(t,n,qt&&t<0&&(e._initted||e._startAt)),qi.length&&!qt&&No()},Of=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Cf).length<2?t:Bt(e)?e.trim():e},Ff=function(e){return e},Pn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Vm=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Tr=function(e,t){for(var n in t)e[n]=t[n];return e},Th=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Zn(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Uo=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},aa=function(e){var t=e.parent||xt,n=e.keyframes?Vm(jt(e.keyframes)):Pn;if(sn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Hm=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Bf=function(e,t,n,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Zo=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Zi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},yr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Gm=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},pl=function(e,t,n,r){return e._startAt&&(qt?e._startAt.revert(bo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Wm=function i(e){return!e||e._ts&&i(e.parent)},Ah=function(e){return e._repeat?gs(e._tTime,e=e.duration()+e._rDelay)*e:0},gs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Oo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Jo=function(e){return e._end=Nt(e._start+(e._tDur/Math.abs(e._ts||e._rts||pt)||0))},Qo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Nt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Jo(e),n._dirty||yr(n,e)),e},zf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Oo(e.rawTime(),t),(!t._dur||La(0,t.totalDuration(),n)-t._tTime>pt)&&t.render(n,!0)),yr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-pt}},Yn=function(e,t,n,r){return t.parent&&Zi(t),t._start=Nt((xi(n)?n:n||e!==xt?En(e,n,t):e._time)+t._delay),t._end=Nt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Bf(e,t,"_first","_last",e._sort?"_start":0),ml(t)||(e._recent=t),r||zf(e,t),e._ts<0&&Qo(e,e._tTime),e},kf=function(e,t){return(Mn.ScrollTrigger||wu("scrollTrigger",t))&&Mn.ScrollTrigger.create(t,e)},Vf=function(e,t,n,r,s){if(Du(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!qt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&If!==mn.frame)return qi.push(e),e._lazy=[s,r],1},qm=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},ml=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},jm=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&qm(e)&&!(!e._initted&&ml(e))||(e._ts<0||e._dp._ts<0)&&!ml(e))?0:1,o=e._rDelay,c=0,l,u,h;if(o&&e._repeat&&(c=La(0,e._tDur,t),u=gs(c,o),e._yoyo&&u&1&&(a=1-a),u!==gs(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||qt||r||e._zTime===pt||!t&&e._zTime){if(!e._initted&&Vf(e,t,r,n,c))return;for(h=e._zTime,e._zTime=t||(n?pt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&pl(e,t,n,!0),e._onUpdate&&!n&&vn(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&vn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Zi(e,1),!n&&!qt&&(vn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Ym=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},_s=function(e,t,n,r){var s=e._repeat,a=Nt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Nt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Qo(e,e._tTime=e._tDur*o),e.parent&&Jo(e),n||yr(e.parent,e),e},wh=function(e){return e instanceof Jt?yr(e):_s(e,e._dur)},Km={_start:0,endTime:ga,totalDuration:ga},En=function i(e,t,n){var r=e.labels,s=e._recent||Km,a=e.duration()>=An?s.endTime(!1):e._dur,o,c,l;return Bt(t)&&(isNaN(t)||t in r)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?s:n).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&n&&(c=c/100*(jt(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+c:a+c)):t==null?a:+t},oa=function(e,t,n){var r=xi(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,c;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=sn(c.vars.inherit)&&c.parent;a.immediateRender=sn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Rt(t[0],a,t[s+1])},Xi=function(e,t){return e||e===0?t(e):t},La=function(e,t,n){return n<e?e:n>t?t:n},Wt=function(e,t){return!Bt(e)||!(t=Fm.exec(e))?"":t[1]},$m=function(e,t,n){return Xi(n,function(r){return La(e,t,r)})},gl=[].slice,Hf=function(e,t){return e&&Zn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Zn(e[0]))&&!e.nodeType&&e!==qn},Zm=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Bt(r)&&!t||Hf(r,1)?(s=n).push.apply(s,wn(r)):n.push(r)})||n},wn=function(e,t,n){return vt&&!t&&vt.selector?vt.selector(e):Bt(e)&&!n&&(dl||!vs())?gl.call((t||Au).querySelectorAll(e),0):jt(e)?Zm(e,n):Hf(e)?gl.call(e,0):e?[e]:[]},_l=function(e){return e=wn(e)[0]||ma("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return wn(t,n.querySelectorAll?n:n===e?ma("Invalid scope")||Au.createElement("div"):e)}},Gf=function(e){return e.sort(function(){return .5-Math.random()})},Wf=function(e){if(Et(e))return e;var t=Zn(e)?e:{each:e},n=Mr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,c=isNaN(r)||o,l=t.axis,u=r,h=r;return Bt(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!o&&c&&(u=r[0],h=r[1]),function(d,f,g){var _=(g||t).length,m=a[_],p,y,x,v,w,E,A,R,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,An])[1],!M){for(A=-An;A<(A=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=a[_]=[],p=c?Math.min(M,_)*u-.5:r%M,y=M===An?0:c?_*h/M-.5:r/M|0,A=0,R=An,E=0;E<_;E++)x=E%M-p,v=y-(E/M|0),m[E]=w=l?Math.abs(l==="y"?v:x):Tf(x*x+v*v),w>A&&(A=w),w<R&&(R=w);r==="random"&&Gf(m),m.max=A-R,m.min=R,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:l?l==="y"?_/M:M:Math.max(M,_/M))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Wt(t.amount||t.each)||0,n=n&&_<0?ep(n):n}return _=(m[d]-m.min)/m.max||0,Nt(m.b+(n?n(_):_)*m.v)+m.u}},vl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Nt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(xi(n)?0:Wt(n))}},qf=function(e,t){var n=jt(e),r,s;return!n&&Zn(e)&&(r=n=e.radius||An,e.values?(e=wn(e.values),(s=!xi(e[0]))&&(r*=r)):e=vl(e.increment)),Xi(t,n?Et(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),c=parseFloat(s?a.y:0),l=An,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-o,f=e[h].y-c,d=d*d+f*f):d=Math.abs(e[h]-o),d<l&&(l=d,u=h);return u=!r||l<=r?e[u]:a,s||u===a||xi(a)?u:u+Wt(a)}:vl(e))},jf=function(e,t,n,r){return Xi(jt(e)?!t:n===!0?!!(n=0):!r,function(){return jt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},Jm=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},Qm=function(e,t){return function(n){return e(parseFloat(n))+(t||Wt(n))}},Xm=function(e,t,n){return Kf(e,t,0,1,n)},Yf=function(e,t,n){return Xi(n,function(r){return e[~~t(r)]})},eg=function i(e,t,n){var r=t-e;return jt(e)?Yf(e,i(0,e.length),t):Xi(n,function(s){return(r+(s-e)%r)%r+e})},tg=function i(e,t,n){var r=t-e,s=r*2;return jt(e)?Yf(e,i(0,e.length-1),t):Xi(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},_a=function(e){for(var t=0,n="",r,s,a,o;~(r=e.indexOf("random(",t));)a=e.indexOf(")",r),o=e.charAt(r+7)==="[",s=e.substr(r+7,a-r-7).match(o?Cf:hl),n+=e.substr(t,r-t)+jf(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Kf=function(e,t,n,r,s){var a=t-e,o=r-n;return Xi(s,function(c){return n+((c-e)/a*o||0)})},ng=function i(e,t,n,r){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=Bt(e),o={},c,l,u,h,d;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(jt(e)&&!jt(t)){for(u=[],h=e.length,d=h-2,l=1;l<h;l++)u.push(i(e[l-1],e[l]));h--,s=function(g){g*=h;var _=Math.min(d,~~g);return u[_](g-_)},n=t}else r||(e=Tr(jt(e)?[]:{},e));if(!u){for(c in t)Lu.call(o,e,c,"get",t[c]);s=function(g){return Uu(g,o)||(a?e.p:e)}}}return Xi(n,s)},Rh=function(e,t,n){var r=e.labels,s=An,a,o,c;for(a in r)o=r[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(c=a,s=o);return c},vn=function(e,t,n){var r=e.vars,s=r[t],a=vt,o=e._ctx,c,l,u;if(s)return c=r[t+"Params"],l=r.callbackScope||e,n&&qi.length&&No(),o&&(vt=o),u=c?s.apply(l,c):s.call(l),vt=a,u},ea=function(e){return Zi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!qt),e.progress()<1&&vn(e,"onInterrupt"),e},ns,$f=[],Zf=function(e){if(e)if(e=!e.name&&e.default||e,Tu()||e.headless){var t=e.name,n=Et(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ga,render:Uu,add:Lu,kill:vg,modifier:_g,rawVars:0},a={targetTest:0,get:0,getSetter:Nu,aliases:{},register:0};if(vs(),e!==r){if(pn[t])return;Pn(r,Pn(Uo(e,s),a)),Tr(r.prototype,Tr(s,Uo(e,a))),pn[r.prop=t]=r,e.targetTest&&(Eo.push(r),Ru[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Df(t,r),e.register&&e.register(un,r,on)}else $f.push(e)},ut=255,ta={aqua:[0,ut,ut],lime:[0,ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ut],navy:[0,0,128],white:[ut,ut,ut],olive:[128,128,0],yellow:[ut,ut,0],orange:[ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ut,0,0],pink:[ut,192,203],cyan:[0,ut,ut],transparent:[ut,ut,ut,0]},pc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ut+.5|0},Jf=function(e,t,n){var r=e?xi(e)?[e>>16,e>>8&ut,e&ut]:0:ta.black,s,a,o,c,l,u,h,d,f,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ta[e])r=ta[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ut,r&ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ut,e&ut]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(hl),!t)c=+r[0]%360/360,l=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(l+1):u+l-u*l,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=pc(c+1/3,s,a),r[1]=pc(c,s,a),r[2]=pc(c-1/3,s,a);else if(~e.indexOf("="))return r=e.match(wf),n&&r.length<4&&(r[3]=1),r}else r=e.match(hl)||ta.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/ut,a=r[1]/ut,o=r[2]/ut,h=Math.max(s,a,o),d=Math.min(s,a,o),u=(h+d)/2,h===d?c=l=0:(f=h-d,l=u>.5?f/(2-h-d):f/(h+d),c=h===s?(a-o)/f+(a<o?6:0):h===a?(o-s)/f+2:(s-a)/f+4,c*=60),r[0]=~~(c+.5),r[1]=~~(l*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Qf=function(e){var t=[],n=[],r=-1;return e.split(ji).forEach(function(s){var a=s.match(ts)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},Ch=function(e,t,n){var r="",s=(e+r).match(ji),a=t?"hsla(":"rgba(",o=0,c,l,u,h;if(!s)return e;if(s=s.map(function(d){return(d=Jf(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Qf(e),c=n.c,c.join(r)!==u.c.join(r)))for(l=e.replace(ji,"1").split(ts),h=l.length-1;o<h;o++)r+=l[o]+(~c.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!l)for(l=e.split(ji),h=l.length-1;o<h;o++)r+=l[o]+s[o];return r+l[h]},ji=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ta)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),ig=/hsl[a]?\(/,Xf=function(e){var t=e.join(" "),n;if(ji.lastIndex=0,ji.test(t))return n=ig.test(t),e[1]=Ch(e[1],n),e[0]=Ch(e[0],n,Qf(e[1])),!0},va,mn=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,o=[],c,l,u,h,d,f,g=function _(m){var p=i()-r,y=m===!0,x,v,w,E;if((p>e||p<0)&&(n+=p-t),r+=p,w=r-n,x=w-a,(x>0||y)&&(E=++h.frame,d=w-h.time*1e3,h.time=w=w/1e3,a+=x+(x>=s?4:s-x),v=1),y||(c=l(_)),v)for(f=0;f<o.length;f++)o[f](w,d,E,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Pf&&(!dl&&Tu()&&(qn=dl=window,Au=qn.document||{},Mn.gsap=un,(qn.gsapVersions||(qn.gsapVersions=[])).push(un.version),Lf(Io||qn.GreenSockGlobals||!qn.gsap&&qn||{}),$f.forEach(Zf)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&h.sleep(),l=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},va=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),va=0,l=ga},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,p,y){var x=p?function(v,w,E,A){m(v,w,E,A),h.remove(x)}:m;return h.remove(m),o[y?"unshift":"push"](x),vs(),x},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},h})(),vs=function(){return!va&&mn.wake()},Je={},rg=/^[\d.\-M][\d.\-,\s]/,sg=/["']/g,ag=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,o,c,l;s<a;s++)c=n[s],o=s!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[r]=isNaN(l)?l.replace(sg,"").trim():+l,r=c.substr(o+1).trim();return t},og=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},cg=function(e){var t=(e+"").split("("),n=Je[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[ag(t[1])]:og(e).split(",").map(Of)):Je._CE&&rg.test(e)?Je._CE("",e):n},ep=function(e){return function(t){return 1-e(1-t)}},tp=function i(e,t){for(var n=e._first,r;n;)n instanceof Jt?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},Mr=function(e,t){return e&&(Et(e)?e:Je[e]||cg(e))||t},Pr=function(e,t,n,r){n===void 0&&(n=function(c){return 1-t(1-c)}),r===void 0&&(r=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return an(e,function(o){Je[o]=Mn[o]=s,Je[a=o.toLowerCase()]=n;for(var c in s)Je[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Je[o+"."+c]=s[c]}),s},np=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},mc=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/ul*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*Om((u-a)*s)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:np(o);return s=ul/s,c.config=function(l,u){return i(e,l,u)},c},gc=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:np(n);return r.config=function(s){return i(e,s)},r};an("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Pr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Je.Linear.easeNone=Je.none=Je.Linear.easeIn;Pr("Elastic",mc("in"),mc("out"),mc());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<r?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};Pr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Pr("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});Pr("Circ",function(i){return-(Tf(1-i*i)-1)});Pr("Sine",function(i){return i===1?1:-Um(i*Im)+1});Pr("Back",gc("in"),gc("out"),gc());Je.SteppedEase=Je.steps=Mn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-pt;return function(o){return((r*La(0,a,o)|0)+s)*n}}};ms.ease=Je["quad.out"];an("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Cu+=i+","+i+"Params,"});var ip=function(e,t){this.id=Nm++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Nf,this.set=t?t.getSetter:Nu},xa=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,_s(this,+t.duration,1,1),this.data=t.data,vt&&(this._ctx=vt,vt.data.push(this)),va||mn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,_s(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(vs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Qo(this,n),!s._dp||s.parent||zf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Yn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===pt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Uf(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ah(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ah(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?gs(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-pt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Oo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-pt?0:this._rts,this.totalTime(La(-Math.abs(this._delay),this._tDur,s),r!==!1),Jo(this),Gm(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(vs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==pt&&(this._tTime-=pt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Yn(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(sn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Oo(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=zm);var r=qt;return qt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),qt=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,wh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,wh(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(En(this,n),sn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,sn(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-pt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-pt)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this;return new Promise(function(s){var a=Et(n)?n:Ff,o=function(){var l=r.then;r.then=null,Et(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=l),s(a),r.then=l};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},e.kill=function(){ea(this)},i})();Pn(xa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-pt,_prom:0,_ps:!1,_rts:1});var Jt=(function(i){Ef(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=sn(n.sortChildren),xt&&Yn(n.parent||xt,fi(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&kf(fi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return oa(0,arguments,this),this},t.from=function(r,s,a){return oa(1,arguments,this),this},t.fromTo=function(r,s,a,o){return oa(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,aa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Rt(r,s,En(this,a),1),this},t.call=function(r,s,a){return Yn(this,Rt.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,c,l,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=u,a.parent=this,new Rt(r,a,En(this,c)),this},t.staggerFrom=function(r,s,a,o,c,l,u){return a.runBackwards=1,aa(a).immediateRender=sn(a.immediateRender),this.staggerTo(r,s,a,o,c,l,u)},t.staggerFromTo=function(r,s,a,o,c,l,u,h){return o.startAt=a,aa(o).immediateRender=sn(o.immediateRender),this.staggerTo(r,s,o,c,l,u,h)},t.render=function(r,s,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=r<=0?0:Nt(r),h=this._zTime<0!=r<0&&(this._initted||!l),d,f,g,_,m,p,y,x,v,w,E,A;if(this!==xt&&u>c&&r>=0&&(u=c),u!==this._tTime||a||h){if(o!==this._time&&l&&(u+=this._time-o,r+=this._time-o),d=u,v=this._start,x=this._ts,p=!x,h&&(l||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(E=this._yoyo,m=l+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(d=Nt(u%m),u===c?(_=this._repeat,d=l):(_=~~(u/m),_&&_===u/m&&(d=l,_--),d>l&&(d=l)),w=gs(this._tTime,m),!o&&this._tTime&&w!==_&&this._tTime-w*m-this._dur<=0&&(w=_),E&&_&1&&(d=l-d,A=1),_!==w&&!this._lock){var R=E&&w&1,M=R===(E&&_&1);if(_<w&&(R=!R),o=R?0:u%l?l:u,this._lock=1,this.render(o||(A?0:Nt(_*m)),s,!l)._lock=0,this._tTime=u,!s&&this.parent&&vn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,M&&(this._lock=2,o=R?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;tp(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Ym(this,Nt(o),Nt(d)),y&&(u-=d-(d=y._start))),this._tTime=u,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&d&&!s&&!_&&(vn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&r>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=-pt);break}}f=g}else{f=this._last;for(var S=r<0?r:d;f;){if(g=f._prev,(f._act||S<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(S-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(S-f._start)*f._ts,s,a||qt&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=S?-pt:pt);break}}f=g}}if(y&&!s&&(this.pause(),y.render(d>=o?0:-pt)._zTime=d>=o?1:-1,this._ts))return this._start=v,Jo(this),this.render(r,s,a);this._onUpdate&&!s&&vn(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&Zi(this,1),!s&&!(r<0&&!o)&&(u||o||!c)&&(vn(this,u===c&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(xi(s)||(s=En(this,s,r)),!(r instanceof xa)){if(jt(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Bt(r))return this.addLabel(r,s);if(Et(r))r=Rt.delayedCall(0,r);else return this}return this!==r?Yn(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-An);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof Rt?s&&c.push(l):(a&&c.push(l),r&&c.push.apply(c,l.getChildren(!0,s,a)))),l=l._next;return c},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return Bt(r)?this.removeLabel(r):Et(r)?this.killTweensOf(r):(Zo(this,r),r===this._recent&&(this._recent=this._last),yr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Nt(mn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=En(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Rt.delayedCall(0,s||ga,a);return o.data="isPause",this._hasPause=1,Yn(this,o,En(this,r))},t.removePause=function(r){var s=this._first;for(r=En(this,r);s;)s._start===r&&s.data==="isPause"&&Zi(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),c=o.length;c--;)zi!==o[c]&&o[c].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=wn(r),c=this._first,l=xi(s),u;c;)c instanceof Rt?km(c._targets,o)&&(l?(!zi||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&a.push(c):(u=c.getTweensOf(o,s)).length&&a.push.apply(a,u),c=c._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=En(a,r),c=s,l=c.startAt,u=c.onStart,h=c.onStartParams,d=c.immediateRender,f,g=Rt.to(a,Pn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||pt,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());g._dur!==m&&_s(g,m,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,h||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,Pn({startAt:{time:En(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Rh(this,En(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Rh(this,En(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+pt)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var o=this._first,c=this.labels,l;o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(l in c)c[l]>=a&&(c[l]+=r);return yr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),yr(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,c=An,l,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(h=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,Yn(a,o,u-o._delay,1)._lock=0):c=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=l;_s(a,a===xt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(xt._ts&&(Uf(xt,Oo(r,xt)),If=mn.frame),mn.frame>=Eh){Eh+=yn.autoSleep||120;var s=xt._first;if((!s||!s._ts)&&yn.autoSleep&&mn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||mn.sleep()}}},e})(xa);Pn(Jt.prototype,{_lock:0,_hasPause:0,_forcing:0});var lg=function(e,t,n,r,s,a,o){var c=new on(this._pt,e,t,0,1,lp,null,s),l=0,u=0,h,d,f,g,_,m,p,y;for(c.b=n,c.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=_a(r)),a&&(y=[n,r],a(y,e,t),n=y[0],r=y[1]),d=n.match(dc)||[];h=dc.exec(r);)g=h[0],_=r.substring(l,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[u++]&&(m=parseFloat(d[u-1])||0,c._pt={_next:c._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?ss(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},l=dc.lastIndex);return c.c=l<r.length?r.substring(l,r.length):"",c.fp=o,(Rf.test(r)||p)&&(c.e=0),this._pt=c,c},Lu=function(e,t,n,r,s,a,o,c,l,u){Et(r)&&(r=r(s||0,e,a));var h=e[t],d=n!=="get"?n:Et(h)?l?e[t.indexOf("set")||!Et(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,f=Et(h)?l?pg:op:Iu,g;if(Bt(r)&&(~r.indexOf("random(")&&(r=_a(r)),r.charAt(1)==="="&&(g=ss(d,r)+(Wt(d)||0),(g||g===0)&&(r=g))),!u||d!==r||xl)return!isNaN(d*r)&&r!==""?(g=new on(this._pt,e,t,+d||0,r-(d||0),typeof h=="boolean"?gg:cp,0,f),l&&(g.fp=l),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&wu(t,r),lg.call(this,e,t,d,r,f,c||yn.stringFilter,l))},ug=function(e,t,n,r,s){if(Et(e)&&(e=ca(e,s,t,n,r)),!Zn(e)||e.style&&e.nodeType||jt(e)||Af(e))return Bt(e)?ca(e,s,t,n,r):e;var a={},o;for(o in e)a[o]=ca(e[o],s,t,n,r);return a},rp=function(e,t,n,r,s,a){var o,c,l,u;if(pn[e]&&(o=new pn[e]).init(s,o.rawVars?t[e]:ug(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=c=new on(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==ns))for(l=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)l[o._props[u]]=c;return o},zi,xl,Du=function i(e,t,n){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,c=r.lazy,l=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,d=r.keyframes,f=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,y=p&&p.data==="nested"?p.vars.targets:m,x=e._overwrite==="auto"&&!bu,v=e.timeline,w,E,A,R,M,S,L,z,O,W,F,k,q;if(v&&(!d||!s)&&(s="none"),e._ease=Mr(s,ms.ease),e._yEase=h?ep(Mr(h===!0?s:h,ms.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!v&&!!r.runBackwards,!v||d&&!r.stagger){if(z=m[0]?xr(m[0]).harness:0,k=z&&r[z.prop],w=Uo(r,Ru),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&g?bo:Bm),_._lazy=0),a){if(Zi(e._startAt=Rt.set(m,Pn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&sn(c),startAt:null,delay:0,onUpdate:l&&function(){return vn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(qt||!o&&!f)&&e._startAt.revert(bo),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),A=Pn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&sn(c),immediateRender:o,stagger:0,parent:p},w),k&&(A[z.prop]=k),Zi(e._startAt=Rt.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(qt?e._startAt.revert(bo):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,pt,pt);else if(!t)return}for(e._pt=e._ptCache=0,c=g&&sn(c)||c&&!g,E=0;E<m.length;E++){if(M=m[E],L=M._gsap||Pu(m)[E]._gsap,e._ptLookup[E]=W={},fl[L.id]&&qi.length&&No(),F=y===m?E:y.indexOf(M),z&&(O=new z).init(M,k||w,e,F,y)!==!1&&(e._pt=R=new on(e._pt,M,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(V){W[V]=R}),O.priority&&(S=1)),!z||k)for(A in w)pn[A]&&(O=rp(A,w,e,F,M,y))?O.priority&&(S=1):W[A]=R=Lu.call(e,M,A,"get",w[A],F,y,0,r.stringFilter);e._op&&e._op[E]&&e.kill(M,e._op[E]),x&&e._pt&&(zi=e,xt.killTweensOf(M,W,e.globalTime(t)),q=!e.parent,zi=0),e._pt&&c&&(fl[L.id]=1)}S&&up(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!q,d&&t<=0&&v.render(An,!0,!0)},hg=function(e,t,n,r,s,a,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return xl=1,e.vars[t]="+=0",Du(e,o),xl=0,c?ma(t+" not eligible for reset"):1;l.push(u)}for(f=l.length;f--;)h=l[f],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=Tt(n)+Wt(h.e)),h.b&&(h.b=u.s+Wt(h.b))},dg=function(e,t){var n=e[0]?xr(e[0]).harness:0,r=n&&n.aliases,s,a,o,c;if(!r)return t;s=Tr({},t);for(a in r)if(a in s)for(c=r[a].split(","),o=c.length;o--;)s[c[o]]=s[a];return s},fg=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,o;if(jt(t))o=n[e]||(n[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},ca=function(e,t,n,r,s){return Et(e)?e.call(t,n,r,s):Bt(e)&&~e.indexOf("random(")?_a(e):e},sp=Cu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ap={};an(sp+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return ap[i]=1});var Rt=(function(i){Ef(e,i);function e(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:aa(r))||this;var c=o.vars,l=c.duration,u=c.delay,h=c.immediateRender,d=c.stagger,f=c.overwrite,g=c.keyframes,_=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,y=r.parent||xt,x=(jt(n)||Af(n)?xi(n[0]):"length"in r)?[n]:wn(n),v,w,E,A,R,M,S,L;if(o._targets=x.length?Pu(x):ma("GSAP target "+n+" not found. https://gsap.com",!yn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||d||Ba(l)||Ba(u)){if(r=o.vars,v=o.timeline=new Jt({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:x}),v.kill(),v.parent=v._dp=fi(o),v._start=0,d||Ba(l)||Ba(u)){if(A=x.length,S=d&&Wf(d),Zn(d))for(R in d)~sp.indexOf(R)&&(L||(L={}),L[R]=d[R]);for(w=0;w<A;w++)E=Uo(r,ap),E.stagger=0,p&&(E.yoyoEase=p),L&&Tr(E,L),M=x[w],E.duration=+ca(l,fi(o),w,M,x),E.delay=(+ca(u,fi(o),w,M,x)||0)-o._delay,!d&&A===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),v.to(M,E,S?S(w,M,x):0),v._ease=Je.none;v.duration()?l=u=0:o.timeline=0}else if(g){aa(Pn(v.vars.defaults,{ease:"none"})),v._ease=Mr(g.ease||r.ease||"none");var z=0,O,W,F;if(jt(g))g.forEach(function(k){return v.to(x,k,">")}),v.duration();else{E={};for(R in g)R==="ease"||R==="easeEach"||fg(R,g[R],E,g.easeEach);for(R in E)for(O=E[R].sort(function(k,q){return k.t-q.t}),z=0,w=0;w<O.length;w++)W=O[w],F={ease:W.e,duration:(W.t-(w?O[w-1].t:0))/100*l},F[R]=W.v,v.to(x,F,z),z+=F.duration;v.duration()<l&&v.to({},{duration:l-v.duration()})}}l||o.duration(l=v.duration())}else o.timeline=0;return f===!0&&!bu&&(zi=fi(o),xt.killTweensOf(x),zi=0),Yn(y,fi(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(h||!l&&!g&&o._start===Nt(y._time)&&sn(h)&&Wm(fi(o))&&y.data!=="nested")&&(o._tTime=-pt,o.render(Math.max(0,-u)||0)),m&&kf(fi(o),m),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,c=this._tDur,l=this._dur,u=r<0,h=r>c-pt&&!u?c:r<pt?0:r,d,f,g,_,m,p,y,x,v;if(!l)jm(this,r,s,a);else if(h!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,x=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,a);if(d=Nt(h%_),h===c?(g=this._repeat,d=l):(g=~~(h/_),g&&g===Nt(h/_)&&(d=l,g--),d>l&&(d=l)),p=this._yoyo&&g&1,p&&(v=this._yEase,d=l-d),m=gs(this._tTime,_),d===o&&!a&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(x&&this._yEase&&tp(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==_&&this._initted&&(this._lock=a=1,this.render(Nt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Vf(this,u?r:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(l!==this._dur)return this.render(r,s,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(v||this._ease)(d/l),this._from&&(this.ratio=y=1-y),d&&!o&&!s&&!g&&(vn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;x&&x.render(r<0?r:x._dur*x._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&pl(this,r,s,a),vn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&vn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&pl(this,r,!0,!0),(r||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Zi(this,1),!s&&!(u&&!o)&&(h||o||p)&&(vn(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,c){va||mn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Du(this,l),u=this._ease(l/this._dur),hg(this,r,s,a,o,u,l,c)?this.resetTo(r,s,a,o,1):(Qo(this,0),this.parent||Bf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ea(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,zi&&zi.vars.overwrite!==!0)._first||ea(this),this.parent&&a!==this.timeline.totalDuration()&&_s(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=r?wn(r):o,l=this._ptLookup,u=this._pt,h,d,f,g,_,m,p;if((!s||s==="all")&&Hm(o,c))return s==="all"&&(this._pt=0),ea(this);for(h=this._op=this._op||[],s!=="all"&&(Bt(s)&&(_={},an(s,function(y){return _[y]=1}),s=_),s=dg(o,s)),p=o.length;p--;)if(~c.indexOf(o[p])){d=l[p],s==="all"?(h[p]=s,g=d,f={}):(f=h[p]=h[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Zo(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&ea(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return oa(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return oa(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return xt.killTweensOf(r,s,a)},e})(xa);Pn(Rt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});an("staggerTo,staggerFrom,staggerFromTo",function(i){Rt[i]=function(){var e=new Jt,t=gl.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Iu=function(e,t,n){return e[t]=n},op=function(e,t,n){return e[t](n)},pg=function(e,t,n,r){return e[t](r.fp,n)},mg=function(e,t,n){return e.setAttribute(t,n)},Nu=function(e,t){return Et(e[t])?op:Eu(e[t])&&e.setAttribute?mg:Iu},cp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},gg=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},lp=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Uu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},_g=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},vg=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Zo(this,t,"_pt"):t.dep||(n=1),t=r;return!n},xg=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},up=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},on=(function(){function i(t,n,r,s,a,o,c,l,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||cp,this.d=c||this,this.set=l||Iu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=xg,this.m=n,this.mt=s,this.tween=r},i})();an(Cu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Ru[i]=1});Mn.TweenMax=Mn.TweenLite=Rt;Mn.TimelineLite=Mn.TimelineMax=Jt;xt=new Jt({sortChildren:!1,defaults:ms,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});yn.stringFilter=Xf;var Sr=[],To={},yg=[],Ph=0,Mg=0,_c=function(e){return(To[e]||yg).map(function(t){return t()})},yl=function(){var e=Date.now(),t=[];e-Ph>2&&(_c("matchMediaInit"),Sr.forEach(function(n){var r=n.queries,s=n.conditions,a,o,c,l;for(o in r)a=qn.matchMedia(r[o]).matches,a&&(c=1),a!==s[o]&&(s[o]=a,l=1);l&&(n.revert(),c&&t.push(n))}),_c("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Ph=e,_c("matchMedia"))},hp=(function(){function i(t,n){this.selector=n&&_l(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Mg++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Et(n)&&(s=r,r=n,n=Et);var a=this,o=function(){var l=vt,u=a.selector,h;return l&&l!==a&&l.data.push(a),s&&(a.selector=_l(s)),vt=a,h=r.apply(a,arguments),Et(h)&&a._r.push(h),vt=l,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Et?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},e.ignore=function(n){var r=vt;vt=null,n(this),vt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Rt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?(function(){for(var o=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof Jt?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Rt)&&l.revert&&l.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Sr.length;a--;)Sr[a].id===this.id&&Sr.splice(a,1)},e.revert=function(n){this.kill(n||{})},i})(),Sg=(function(){function i(t){this.contexts=[],this.scope=t,vt&&vt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){Zn(n)||(n={matches:n});var a=new hp(0,s||this.scope),o=a.conditions={},c,l,u;vt&&!a.selector&&(a.selector=vt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(l in n)l==="all"?u=1:(c=qn.matchMedia(n[l]),c&&(Sr.indexOf(a)<0&&Sr.push(a),(o[l]=c.matches)&&(u=1),c.addListener?c.addListener(yl):c.addEventListener("change",yl)));return u&&r(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),Fo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Zf(r)})},timeline:function(e){return new Jt(e)},getTweensOf:function(e,t){return xt.getTweensOf(e,t)},getProperty:function(e,t,n,r){Bt(e)&&(e=wn(e)[0]);var s=xr(e||{}).get,a=n?Ff:Of;return n==="native"&&(n=""),e&&(t?a((pn[t]&&pn[t].get||s)(e,t,n,r)):function(o,c,l){return a((pn[o]&&pn[o].get||s)(e,o,c,l))})},quickSetter:function(e,t,n){if(e=wn(e),e.length>1){var r=e.map(function(u){return un.quickSetter(u,t,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var a=pn[t],o=xr(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=a?function(u){var h=new a;ns._pt=0,h.init(e,n?u+n:u,ns,0,[e]),h.render(1,h),ns._pt&&Uu(1,ns)}:o.set(e,c);return a?l:function(u){return l(e,c,n?u+n:u,o,1)}},quickTo:function(e,t,n){var r,s=un.to(e,Tr((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),a=function(c,l,u){return s.resetTo(t,c,l,u)};return a.tween=s,a},isTweening:function(e){return xt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Mr(e.ease,ms.ease)),Th(ms,e||{})},config:function(e){return Th(yn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!pn[o]&&!Mn[o]&&ma(t+" effect requires "+o+" plugin.")}),fc[t]=function(o,c,l){return n(wn(o),Pn(c||{},s),l)},a&&(Jt.prototype[t]=function(o,c,l){return this.add(fc[t](o,Zn(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){Je[e]=Mr(t)},parseEase:function(e,t){return arguments.length?Mr(e,t):Je},getById:function(e){return xt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Jt(e),r,s;for(n.smoothChildTiming=sn(e.smoothChildTiming),xt.remove(n),n._dp=0,n._time=n._tTime=xt._time,r=xt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Rt&&r.vars.onComplete===r._targets[0]))&&Yn(n,r,r._start-r._delay),r=s;return Yn(xt,n,0),n},context:function(e,t){return e?new hp(e,t):vt},matchMedia:function(e){return new Sg(e)},matchMediaRefresh:function(){return Sr.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||yl()},addEventListener:function(e,t){var n=To[e]||(To[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=To[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:eg,wrapYoyo:tg,distribute:Wf,random:jf,snap:qf,normalize:Xm,getUnit:Wt,clamp:$m,splitColor:Jf,toArray:wn,selector:_l,mapRange:Kf,pipe:Jm,unitize:Qm,interpolate:ng,shuffle:Gf},install:Lf,effects:fc,ticker:mn,updateRoot:Jt.updateRoot,plugins:pn,globalTimeline:xt,core:{PropTween:on,globals:Df,Tween:Rt,Timeline:Jt,Animation:xa,getCache:xr,_removeLinkedListItem:Zo,reverting:function(){return qt},context:function(e){return e&&vt&&(vt.data.push(e),e._ctx=vt),vt},suppressOverwrites:function(e){return bu=e}}};an("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Fo[i]=Rt[i]});mn.add(Jt.updateRoot);ns=Fo.to({},{duration:0});var bg=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Eg=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=bg(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},vc=function(e,t){return{name:e,rawVars:1,init:function(r,s,a){a._onInit=function(o){var c,l;if(Bt(s)&&(c={},an(s,function(u){return c[u]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}Eg(o,s)}}}},un=Fo.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,o,c;this.tween=n;for(a in t)c=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(c||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)qt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},vc("roundProps",vl),vc("modifiers"),vc("snap",qf))||Fo;Rt.version=Jt.version=un.version="3.12.5";Pf=1;Tu()&&vs();Je.Power0;Je.Power1;Je.Power2;Je.Power3;Je.Power4;Je.Linear;Je.Quad;Je.Cubic;Je.Quart;Je.Quint;Je.Strong;Je.Elastic;Je.Back;Je.SteppedEase;Je.Bounce;Je.Sine;Je.Expo;Je.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Lh,ki,as,Ou,_r,Dh,Fu,Tg=function(){return typeof window<"u"},yi={},hr=180/Math.PI,os=Math.PI/180,Dr=Math.atan2,Ih=1e8,Bu=/([A-Z])/g,Ag=/(left|right|width|margin|padding|x)/i,wg=/[\s,\(]\S/,Kn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ml=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Rg=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Cg=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Pg=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},dp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},fp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Lg=function(e,t,n){return e.style[t]=n},Dg=function(e,t,n){return e.style.setProperty(t,n)},Ig=function(e,t,n){return e._gsap[t]=n},Ng=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Ug=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Og=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},yt="transform",cn=yt+"Origin",Fg=function i(e,t){var n=this,r=this.target,s=r.style,a=r._gsap;if(e in yi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Kn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=mi(r,o)}):this.tfm[e]=a.x?a[e]:mi(r,e),e===cn&&(this.tfm.zOrigin=a.zOrigin);else return Kn.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(yt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(cn,t,"")),e=yt}(s||t)&&this.props.push(e,t,s[e])},pp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Bg=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Bu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Fu(),(!s||!s.isStart)&&!n[yt]&&(pp(n),r.zOrigin&&n[cn]&&(n[cn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},mp=function(e,t){var n={target:e,props:[],revert:Bg,save:Fg};return e._gsap||un.core.getCache(e),t&&t.split(",").forEach(function(r){return n.save(r)}),n},gp,Sl=function(e,t){var n=ki.createElementNS?ki.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ki.createElement(e);return n&&n.style?n:ki.createElement(e)},$n=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Bu,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,xs(t)||t,1)||""},Nh="O,Moz,ms,Ms,Webkit".split(","),xs=function(e,t,n){var r=t||_r,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Nh[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Nh[a]:"")+e},bl=function(){Tg()&&window.document&&(Lh=window,ki=Lh.document,as=ki.documentElement,_r=Sl("div")||{style:{}},Sl("div"),yt=xs(yt),cn=yt+"Origin",_r.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",gp=!!xs("perspective"),Fu=un.core.reverting,Ou=1)},xc=function i(e){var t=Sl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,a;if(as.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),as.removeChild(t),this.style.cssText=s,a},Uh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},_p=function(e){var t;try{t=e.getBBox()}catch{t=xc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===xc||(t=xc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Uh(e,["x","cx","x1"])||0,y:+Uh(e,["y","cy","y1"])||0,width:0,height:0}:t},vp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&_p(e))},Ar=function(e,t){if(t){var n=e.style,r;t in yi&&t!==cn&&(t=yt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Bu,"-$1").toLowerCase())):n.removeAttribute(t)}},Vi=function(e,t,n,r,s,a){var o=new on(e._pt,t,n,0,1,a?fp:dp);return e._pt=o,o.b=r,o.e=s,e._props.push(n),o},Oh={deg:1,rad:1,turn:1},zg={grid:1,flex:1},Ji=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=_r.style,c=Ag.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,d=r==="px",f=r==="%",g,_,m,p;if(r===a||!s||Oh[r]||Oh[a])return s;if(a!=="px"&&!d&&(s=i(e,t,n,"px")),p=e.getCTM&&vp(e),(f||a==="%")&&(yi[t]||~t.indexOf("adius")))return g=p?e.getBBox()[c?"width":"height"]:e[u],Tt(f?s/g*h:s/100*g);if(o[c?"width":"height"]=h+(d?a:r),_=~t.indexOf("adius")||r==="em"&&e.appendChild&&!l?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ki||!_.appendChild)&&(_=ki.body),m=_._gsap,m&&f&&m.width&&c&&m.time===mn.time&&!m.uncache)return Tt(s/m.width*h);if(f&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=h+r,g=e[u],y?e.style[t]=y:Ar(e,t)}else(f||a==="%")&&!zg[$n(_,"display")]&&(o.position=$n(e,"position")),_===e&&(o.position="static"),_.appendChild(_r),g=_r[u],_.removeChild(_r),o.position="absolute";return c&&f&&(m=xr(_),m.time=mn.time,m.width=_[u]),Tt(d?g*s/h:g&&s?h/g*s:0)},mi=function(e,t,n,r){var s;return Ou||bl(),t in Kn&&t!=="transform"&&(t=Kn[t],~t.indexOf(",")&&(t=t.split(",")[0])),yi[t]&&t!=="transform"?(s=Ma(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:zo($n(e,cn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Bo[t]&&Bo[t](e,t,n)||$n(e,t)||Nf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ji(e,t,s,n)+n:s},kg=function(e,t,n,r){if(!n||n==="none"){var s=xs(t,e,1),a=s&&$n(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=$n(e,"borderTopColor"))}var o=new on(this._pt,e.style,t,0,1,lp),c=0,l=0,u,h,d,f,g,_,m,p,y,x,v,w;if(o.b=n,o.e=r,n+="",r+="",r==="auto"&&(_=e.style[t],e.style[t]=r,r=$n(e,t)||r,_?e.style[t]=_:Ar(e,t)),u=[n,r],Xf(u),n=u[0],r=u[1],d=n.match(ts)||[],w=r.match(ts)||[],w.length){for(;h=ts.exec(r);)m=h[0],y=r.substring(c,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(_=d[l++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),m.charAt(1)==="="&&(m=ss(f,m)+v),p=parseFloat(m),x=m.substr((p+"").length),c=ts.lastIndex-x.length,x||(x=x||yn.units[t]||v,c===r.length&&(r+=x,o.e+=x)),v!==x&&(f=Ji(e,t,_,x)||0),o._pt={_next:o._pt,p:y||l===1?y:",",s:f,c:p-f,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=c<r.length?r.substring(c,r.length):""}else o.r=t==="display"&&r==="none"?fp:dp;return Rf.test(r)&&(o.e=0),this._pt=o,o},Fh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Vg=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Fh[n]||n,t[1]=Fh[r]||r,t.join(" ")},Hg=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,o,c,l;if(s==="all"||s===!0)r.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)o=s[l],yi[o]&&(c=1,o=o==="transformOrigin"?cn:yt),Ar(n,o);c&&(Ar(n,yt),a&&(a.svg&&n.removeAttribute("transform"),Ma(n,1),a.uncache=1,pp(r)))}},Bo={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new on(e._pt,t,n,0,0,Hg);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},ya=[1,0,0,1,0,0],xp={},yp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Bh=function(e){var t=$n(e,yt);return yp(t)?ya:t.substr(7).match(wf).map(Tt)},zu=function(e,t){var n=e._gsap||xr(e),r=e.style,s=Bh(e),a,o,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?ya:s):(s===ya&&!e.offsetParent&&e!==as&&!n.svg&&(c=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(l=1,o=e.nextElementSibling,as.appendChild(e)),s=Bh(e),c?r.display=c:Ar(e,"display"),l&&(o?a.insertBefore(e,o):a?a.appendChild(e):as.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},El=function(e,t,n,r,s,a){var o=e._gsap,c=s||zu(e,!0),l=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,f=c[0],g=c[1],_=c[2],m=c[3],p=c[4],y=c[5],x=t.split(" "),v=parseFloat(x[0])||0,w=parseFloat(x[1])||0,E,A,R,M;n?c!==ya&&(A=f*m-g*_)&&(R=v*(m/A)+w*(-_/A)+(_*y-m*p)/A,M=v*(-g/A)+w*(f/A)-(f*y-g*p)/A,v=R,w=M):(E=_p(e),v=E.x+(~x[0].indexOf("%")?v/100*E.width:v),w=E.y+(~(x[1]||x[0]).indexOf("%")?w/100*E.height:w)),r||r!==!1&&o.smooth?(p=v-l,y=w-u,o.xOffset=h+(p*f+y*_)-p,o.yOffset=d+(p*g+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=w,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[cn]="0px 0px",a&&(Vi(a,o,"xOrigin",l,v),Vi(a,o,"yOrigin",u,w),Vi(a,o,"xOffset",h,o.xOffset),Vi(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+w)},Ma=function(e,t){var n=e._gsap||new ip(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",o="deg",c=getComputedStyle(e),l=$n(e,cn)||"0",u,h,d,f,g,_,m,p,y,x,v,w,E,A,R,M,S,L,z,O,W,F,k,q,V,ie,le,fe,Le,Xe,Y,te;return u=h=d=_=m=p=y=x=v=0,f=g=1,n.svg=!!(e.getCTM&&vp(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(r[yt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[yt]!=="none"?c[yt]:"")),r.scale=r.rotate=r.translate="none"),A=zu(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),l=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),El(e,q||l,!!q||n.originIsAbsolute,n.smooth!==!1,A)),w=n.xOrigin||0,E=n.yOrigin||0,A!==ya&&(L=A[0],z=A[1],O=A[2],W=A[3],u=F=A[4],h=k=A[5],A.length===6?(f=Math.sqrt(L*L+z*z),g=Math.sqrt(W*W+O*O),_=L||z?Dr(z,L)*hr:0,y=O||W?Dr(O,W)*hr+_:0,y&&(g*=Math.abs(Math.cos(y*os))),n.svg&&(u-=w-(w*L+E*O),h-=E-(w*z+E*W))):(te=A[6],Xe=A[7],le=A[8],fe=A[9],Le=A[10],Y=A[11],u=A[12],h=A[13],d=A[14],R=Dr(te,Le),m=R*hr,R&&(M=Math.cos(-R),S=Math.sin(-R),q=F*M+le*S,V=k*M+fe*S,ie=te*M+Le*S,le=F*-S+le*M,fe=k*-S+fe*M,Le=te*-S+Le*M,Y=Xe*-S+Y*M,F=q,k=V,te=ie),R=Dr(-O,Le),p=R*hr,R&&(M=Math.cos(-R),S=Math.sin(-R),q=L*M-le*S,V=z*M-fe*S,ie=O*M-Le*S,Y=W*S+Y*M,L=q,z=V,O=ie),R=Dr(z,L),_=R*hr,R&&(M=Math.cos(R),S=Math.sin(R),q=L*M+z*S,V=F*M+k*S,z=z*M-L*S,k=k*M-F*S,L=q,F=V),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=Tt(Math.sqrt(L*L+z*z+O*O)),g=Tt(Math.sqrt(k*k+te*te)),R=Dr(F,k),y=Math.abs(R)>2e-4?R*hr:0,v=Y?1/(Y<0?-Y:Y):0),n.svg&&(q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!yp($n(e,yt)),q&&e.setAttribute("transform",q))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(f*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Tt(f),n.scaleY=Tt(g),n.rotation=Tt(_)+o,n.rotationX=Tt(m)+o,n.rotationY=Tt(p)+o,n.skewX=y+o,n.skewY=x+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(r[cn]=zo(l)),n.xOffset=n.yOffset=0,n.force3D=yn.force3D,n.renderTransform=n.svg?Wg:gp?Mp:Gg,n.uncache=0,n},zo=function(e){return(e=e.split(" "))[0]+" "+e[1]},yc=function(e,t,n){var r=Wt(t);return Tt(parseFloat(t)+parseFloat(Ji(e,"x",n+"px",r)))+r},Gg=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Mp(e,t)},nr="0deg",ks="0px",ir=") ",Mp=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,x=n.zOrigin,v="",w=p==="auto"&&e&&e!==1||p===!0;if(x&&(h!==nr||u!==nr)){var E=parseFloat(u)*os,A=Math.sin(E),R=Math.cos(E),M;E=parseFloat(h)*os,M=Math.cos(E),a=yc(y,a,A*M*-x),o=yc(y,o,-Math.sin(E)*-x),c=yc(y,c,R*M*-x+x)}m!==ks&&(v+="perspective("+m+ir),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(w||a!==ks||o!==ks||c!==ks)&&(v+=c!==ks||w?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+ir),l!==nr&&(v+="rotate("+l+ir),u!==nr&&(v+="rotateY("+u+ir),h!==nr&&(v+="rotateX("+h+ir),(d!==nr||f!==nr)&&(v+="skew("+d+", "+f+ir),(g!==1||_!==1)&&(v+="scale("+g+", "+_+ir),y.style[yt]=v||"translate(0, 0)"},Wg=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,x=parseFloat(a),v=parseFloat(o),w,E,A,R,M;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=os,l*=os,w=Math.cos(c)*h,E=Math.sin(c)*h,A=Math.sin(c-l)*-d,R=Math.cos(c-l)*d,l&&(u*=os,M=Math.tan(l-u),M=Math.sqrt(1+M*M),A*=M,R*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),w*=M,E*=M)),w=Tt(w),E=Tt(E),A=Tt(A),R=Tt(R)):(w=h,R=d,E=A=0),(x&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(x=Ji(f,"x",a,"px"),v=Ji(f,"y",o,"px")),(g||_||m||p)&&(x=Tt(x+g-(g*w+_*A)+m),v=Tt(v+_-(g*E+_*R)+p)),(r||s)&&(M=f.getBBox(),x=Tt(x+r/100*M.width),v=Tt(v+s/100*M.height)),M="matrix("+w+","+E+","+A+","+R+","+x+","+v+")",f.setAttribute("transform",M),y&&(f.style[yt]=M)},qg=function(e,t,n,r,s){var a=360,o=Bt(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?hr:1),l=c-r,u=r+l+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),h==="cw"&&l<0?l=(l+a*Ih)%a-~~(l/a)*a:h==="ccw"&&l>0&&(l=(l-a*Ih)%a-~~(l/a)*a)),e._pt=d=new on(e._pt,t,n,r,l,Rg),d.e=u,d.u="deg",e._props.push(n),d},zh=function(e,t){for(var n in t)e[n]=t[n];return e},jg=function(e,t,n){var r=zh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,l,u,h,d,f,g;r.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[yt]=t,o=Ma(n,1),Ar(n,yt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[yt],a[yt]=t,o=Ma(n,1),a[yt]=l);for(c in yi)l=r[c],u=o[c],l!==u&&s.indexOf(c)<0&&(f=Wt(l),g=Wt(u),h=f!==g?Ji(n,c,l,g):parseFloat(l),d=parseFloat(u),e._pt=new on(e._pt,o,c,h,d-h,Ml),e._pt.u=g||0,e._props.push(c));zh(o,r)};an("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(o){return e<2?i+o:"border"+o+i});Bo[e>1?"border"+i:i]=function(o,c,l,u,h){var d,f;if(arguments.length<4)return d=a.map(function(g){return mi(o,g,l)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},a.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(c,f,h)}});var Sp={name:"css",register:bl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,o=e.style,c=n.vars.startAt,l,u,h,d,f,g,_,m,p,y,x,v,w,E,A,R;Ou||bl(),this.styles=this.styles||mp(e),R=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(pn[_]&&rp(_,t,n,r,e,s)))){if(f=typeof u,g=Bo[_],f==="function"&&(u=u.call(n,r,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=_a(u)),g)g(this,e,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",ji.lastIndex=0,ji.test(l)||(m=Wt(l),p=Wt(u)),p?m!==p&&(l=Ji(e,_,l,p)+p):m&&(u+=m),this.add(o,"setProperty",l,u,r,s,0,0,_),a.push(_),R.push(_,0,o[_]);else if(f!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,r,e,s):c[_],Bt(l)&&~l.indexOf("random(")&&(l=_a(l)),Wt(l+"")||l==="auto"||(l+=yn.units[_]||Wt(mi(e,_))||""),(l+"").charAt(1)==="="&&(l=mi(e,_))):l=mi(e,_),d=parseFloat(l),y=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),_ in Kn&&(_==="autoAlpha"&&(d===1&&mi(e,"visibility")==="hidden"&&h&&(d=0),R.push("visibility",0,o.visibility),Vi(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Kn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in yi,x){if(this.styles.save(_),v||(w=e._gsap,w.renderTransform&&!t.parseTransform||Ma(e,t.parseTransform),E=t.smoothOrigin!==!1&&w.smooth,v=this._pt=new on(this._pt,o,yt,0,1,w.renderTransform,w,0,-1),v.dep=1),_==="scale")this._pt=new on(this._pt,w,"scaleY",w.scaleY,(y?ss(w.scaleY,y+h):h)-w.scaleY||0,Ml),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(cn,0,o[cn]),u=Vg(u),w.svg?El(e,u,0,E,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==w.zOrigin&&Vi(this,w,"zOrigin",w.zOrigin,p),Vi(this,o,_,zo(l),zo(u)));continue}else if(_==="svgOrigin"){El(e,u,1,E,0,this);continue}else if(_ in xp){qg(this,w,_,d,y?ss(d,y+u):u);continue}else if(_==="smoothOrigin"){Vi(this,w,"smooth",w.smooth,u);continue}else if(_==="force3D"){w[_]=u;continue}else if(_==="transform"){jg(this,u,e);continue}}else _ in o||(_=xs(_)||_);if(x||(h||h===0)&&(d||d===0)&&!wg.test(u)&&_ in o)m=(l+"").substr((d+"").length),h||(h=0),p=Wt(u)||(_ in yn.units?yn.units[_]:m),m!==p&&(d=Ji(e,_,l,p)),this._pt=new on(this._pt,x?w:o,_,d,(y?ss(d,y+h):h)-d,!x&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?Pg:Ml),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=Cg);else if(_ in o)kg.call(this,e,_,l,y?y+u:u);else if(_ in e)this.add(e,_,l||e[_],y?y+u:u,r,s);else if(_!=="parseTransform"){wu(_,u);continue}x||(_ in o?R.push(_,0,o[_]):R.push(_,1,l||e[_])),a.push(_)}}A&&up(this)},render:function(e,t){if(t.tween._time||!Fu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:mi,aliases:Kn,getSetter:function(e,t,n){var r=Kn[t];return r&&r.indexOf(",")<0&&(t=r),t in yi&&t!==cn&&(e._gsap.x||mi(e,"x"))?n&&Dh===n?t==="scale"?Ng:Ig:(Dh=n||{})&&(t==="scale"?Ug:Og):e.style&&!Eu(e.style[t])?Lg:~t.indexOf("-")?Dg:Nu(e,t)},core:{_removeProperty:Ar,_getMatrix:zu}};un.utils.checkPrefix=xs;un.core.getStyleSaver=mp;(function(i,e,t,n){var r=an(i+","+e+","+t,function(s){yi[s]=1});an(e,function(s){yn.units[s]="deg",xp[s]=1}),Kn[r[13]]=i+","+e,an(n,function(s){var a=s.split(":");Kn[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");an("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){yn.units[i]="px"});un.registerPlugin(Sp);var He=un.registerPlugin(Sp)||un;He.core.Tween;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ku="170",Yg=0,kh=1,Kg=2,bp=1,$g=2,di=3,Mi=0,ln=1,gn=2,Yi=0,br=1,ko=2,Vh=3,Hh=4,Zg=5,pr=100,Jg=101,Qg=102,Xg=103,e0=104,t0=200,n0=201,i0=202,r0=203,Tl=204,Al=205,s0=206,a0=207,o0=208,c0=209,l0=210,u0=211,h0=212,d0=213,f0=214,wl=0,Rl=1,Cl=2,ys=3,Pl=4,Ll=5,Dl=6,Il=7,Ep=0,p0=1,m0=2,Ki=0,g0=1,_0=2,v0=3,Tp=4,x0=5,y0=6,M0=7,Gh="attached",S0="detached",Ap=300,Ms=301,Ss=302,Nl=303,Ul=304,Xo=306,bs=1e3,Hi=1001,Vo=1002,Qt=1003,wp=1004,na=1005,xn=1006,Ao=1007,gi=1008,Si=1009,Rp=1010,Cp=1011,Sa=1012,Vu=1013,wr=1014,Bn=1015,Da=1016,Hu=1017,Gu=1018,Es=1020,Pp=35902,Lp=1021,Dp=1022,Rn=1023,Ip=1024,Np=1025,cs=1026,Ts=1027,Wu=1028,qu=1029,Up=1030,ju=1031,Yu=1033,wo=33776,Ro=33777,Co=33778,Po=33779,Ol=35840,Fl=35841,Bl=35842,zl=35843,kl=36196,Vl=37492,Hl=37496,Gl=37808,Wl=37809,ql=37810,jl=37811,Yl=37812,Kl=37813,$l=37814,Zl=37815,Jl=37816,Ql=37817,Xl=37818,eu=37819,tu=37820,nu=37821,Lo=36492,iu=36494,ru=36495,Op=36283,su=36284,au=36285,ou=36286,ba=2300,Ea=2301,Mc=2302,Wh=2400,qh=2401,jh=2402,b0=2500,E0=0,Fp=1,cu=2,T0=3200,A0=3201,Bp=0,w0=1,Bi="",It="srgb",tn="srgb-linear",ec="linear",lt="srgb",Ir=7680,Yh=519,R0=512,C0=513,P0=514,zp=515,L0=516,D0=517,I0=518,N0=519,lu=35044,Kh="300 es",_i=2e3,Ho=2001;class Ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $h=1234567;const ls=Math.PI/180,As=180/Math.PI;function Cn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function Ut(i,e,t){return Math.max(e,Math.min(t,i))}function Ku(i,e){return(i%e+e)%e}function U0(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function O0(i,e,t){return i!==e?(t-i)/(e-i):0}function la(i,e,t){return(1-t)*i+t*e}function F0(i,e,t,n){return la(i,e,1-Math.exp(-t*n))}function B0(i,e=1){return e-Math.abs(Ku(i,e*2)-e)}function z0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function k0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function V0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function H0(i,e){return i+Math.random()*(e-i)}function G0(i){return i*(.5-Math.random())}function W0(i){i!==void 0&&($h=i);let e=$h+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function q0(i){return i*ls}function j0(i){return i*As}function Y0(i){return(i&i-1)===0&&i!==0}function K0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Z0(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const J0={DEG2RAD:ls,RAD2DEG:As,generateUUID:Cn,clamp:Ut,euclideanModulo:Ku,mapLinear:U0,inverseLerp:O0,lerp:la,damp:F0,pingpong:B0,smoothstep:z0,smootherstep:k0,randInt:V0,randFloat:H0,randFloatSpread:G0,seededRandom:W0,degToRad:q0,radToDeg:j0,isPowerOfTwo:Y0,ceilPowerOfTwo:K0,floorPowerOfTwo:$0,setQuaternionFromProperEuler:Z0,normalize:ot,denormalize:Fn};class ee{constructor(e=0,t=0){ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,n,r,s,a,o,c,l){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=r[0],m=r[3],p=r[6],y=r[1],x=r[4],v=r[7],w=r[2],E=r[5],A=r[8];return s[0]=a*_+o*y+c*w,s[3]=a*m+o*x+c*E,s[6]=a*p+o*v+c*A,s[1]=l*_+u*y+h*w,s[4]=l*m+u*x+h*E,s[7]=l*p+u*v+h*A,s[2]=d*_+f*y+g*w,s[5]=d*m+f*x+g*E,s[8]=d*p+f*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*s,f=l*s-a*c,g=t*h+n*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*l-u*n)*_,e[2]=(o*n-r*a)*_,e[3]=d*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Sc.makeScale(e,t)),this}rotate(e){return this.premultiply(Sc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sc=new qe;function kp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ta(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Q0(){const i=Ta("canvas");return i.style.display="block",i}const Zh={};function ia(i){i in Zh||(Zh[i]=!0,console.warn(i))}function X0(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function e_(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function t_(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ze={enabled:!0,workingColorSpace:tn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===lt&&(i.r=vi(i.r),i.g=vi(i.g),i.b=vi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===lt&&(i.r=us(i.r),i.g=us(i.g),i.b=us(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Bi?ec:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Jh=[.64,.33,.3,.6,.15,.06],Qh=[.2126,.7152,.0722],Xh=[.3127,.329],ed=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),td=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ze.define({[tn]:{primaries:Jh,whitePoint:Xh,transfer:ec,toXYZ:ed,fromXYZ:td,luminanceCoefficients:Qh,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:Jh,whitePoint:Xh,transfer:lt,toXYZ:ed,fromXYZ:td,luminanceCoefficients:Qh,outputColorSpaceConfig:{drawingBufferColorSpace:It}}});let Nr;class n_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Nr===void 0&&(Nr=Ta("canvas")),Nr.width=e.width,Nr.height=e.height;const n=Nr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Nr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ta("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=vi(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vi(t[n]/255)*255):t[n]=vi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let i_=0;class Vp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=Cn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(bc(r[a].image)):s.push(bc(r[a]))}else s=bc(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function bc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?n_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let r_=0;class Ot extends Ds{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=Hi,r=Hi,s=xn,a=gi,o=Rn,c=Si,l=Ot.DEFAULT_ANISOTROPY,u=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=Cn(),this.name="",this.source=new Vp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ap)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bs:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case Vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bs:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case Vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Ap;Ot.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,r=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,v=(f+1)/2,w=(p+1)/2,E=(u+d)/4,A=(h+_)/4,R=(g+m)/4;return x>v&&x>w?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=E/n,s=A/n):v>w?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=E/r,s=R/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=A/s,r=R/s),this.set(n,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class s_ extends Ds{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ot(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rr extends s_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hp extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class a_ extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class er{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let m=1-o;const p=c*d+l*f+u*g+h*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const w=Math.sqrt(x),E=Math.atan2(w,p*y);m=Math.sin(m*E)/w,o=Math.sin(o*E)/w}const v=o*y;if(c=c*m+d*v,l=l*m+f*v,u=u*m+g*v,h=h*m+_*v,m===1-o){const w=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=w,l*=w,u*=w,h*=w}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-o*f,e[t+2]=l*g+u*f+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),h=o(s/2),d=c(n/2),f=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ec.copy(this).projectOnVector(e),this.sub(Ec)}reflect(e){return this.sub(Ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ec=new P,nd=new er;class Xn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,In):In.fromBufferAttribute(s,a),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),za.copy(n.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),ka.subVectors(this.max,Vs),Ur.subVectors(e.a,Vs),Or.subVectors(e.b,Vs),Fr.subVectors(e.c,Vs),Ai.subVectors(Or,Ur),wi.subVectors(Fr,Or),rr.subVectors(Ur,Fr);let t=[0,-Ai.z,Ai.y,0,-wi.z,wi.y,0,-rr.z,rr.y,Ai.z,0,-Ai.x,wi.z,0,-wi.x,rr.z,0,-rr.x,-Ai.y,Ai.x,0,-wi.y,wi.x,0,-rr.y,rr.x,0];return!Tc(t,Ur,Or,Fr,ka)||(t=[1,0,0,0,1,0,0,0,1],!Tc(t,Ur,Or,Fr,ka))?!1:(Va.crossVectors(Ai,wi),t=[Va.x,Va.y,Va.z],Tc(t,Ur,Or,Fr,ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new P,new P,new P,new P,new P,new P,new P,new P],In=new P,za=new Xn,Ur=new P,Or=new P,Fr=new P,Ai=new P,wi=new P,rr=new P,Vs=new P,ka=new P,Va=new P,sr=new P;function Tc(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){sr.fromArray(i,s);const o=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),c=e.dot(sr),l=t.dot(sr),u=n.dot(sr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const o_=new Xn,Hs=new P,Ac=new P;class ei{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):o_.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hs.subVectors(e,this.center);const t=Hs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Hs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hs.copy(e.center).add(Ac)),this.expandByPoint(Hs.copy(e.center).sub(Ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new P,wc=new P,Ha=new P,Ri=new P,Rc=new P,Ga=new P,Cc=new P;class tc{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){wc.copy(e).add(t).multiplyScalar(.5),Ha.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(wc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ha),o=Ri.dot(this.direction),c=-Ri.dot(Ha),l=Ri.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*c-o,d=a*o-c,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(wc).addScaledVector(Ha,d),f}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const n=ai.dot(this.direction),r=ai.dot(ai)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,r,s){Rc.subVectors(t,e),Ga.subVectors(n,e),Cc.crossVectors(Rc,Ga);let a=this.direction.dot(Cc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ri.subVectors(this.origin,e);const c=o*this.direction.dot(Ga.crossVectors(Ri,Ga));if(c<0)return null;const l=o*this.direction.dot(Rc.cross(Ri));if(l<0||c+l>a)return null;const u=-o*Ri.dot(Cc);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(e,t,n,r,s,a,o,c,l,u,h,d,f,g,_,m){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,h,d,f,g,_,m)}set(e,t,n,r,s,a,o,c,l,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Br.setFromMatrixColumn(e,0).length(),s=1/Br.setFromMatrixColumn(e,1).length(),a=1/Br.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c_,e,l_)}lookAt(e,t,n){const r=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ci.crossVectors(n,dn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ci.crossVectors(n,dn)),Ci.normalize(),Wa.crossVectors(dn,Ci),r[0]=Ci.x,r[4]=Wa.x,r[8]=dn.x,r[1]=Ci.y,r[5]=Wa.y,r[9]=dn.y,r[2]=Ci.z,r[6]=Wa.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],x=n[7],v=n[11],w=n[15],E=r[0],A=r[4],R=r[8],M=r[12],S=r[1],L=r[5],z=r[9],O=r[13],W=r[2],F=r[6],k=r[10],q=r[14],V=r[3],ie=r[7],le=r[11],fe=r[15];return s[0]=a*E+o*S+c*W+l*V,s[4]=a*A+o*L+c*F+l*ie,s[8]=a*R+o*z+c*k+l*le,s[12]=a*M+o*O+c*q+l*fe,s[1]=u*E+h*S+d*W+f*V,s[5]=u*A+h*L+d*F+f*ie,s[9]=u*R+h*z+d*k+f*le,s[13]=u*M+h*O+d*q+f*fe,s[2]=g*E+_*S+m*W+p*V,s[6]=g*A+_*L+m*F+p*ie,s[10]=g*R+_*z+m*k+p*le,s[14]=g*M+_*O+m*q+p*fe,s[3]=y*E+x*S+v*W+w*V,s[7]=y*A+x*L+v*F+w*ie,s[11]=y*R+x*z+v*k+w*le,s[15]=y*M+x*O+v*q+w*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*h-r*l*h-s*o*d+n*l*d+r*o*f-n*c*f)+_*(+t*c*f-t*l*d+s*a*d-r*a*f+r*l*u-s*c*u)+m*(+t*l*h-t*o*f-s*a*h+n*a*f+s*o*u-n*l*u)+p*(-r*o*u-t*c*h+t*o*d+r*a*h-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=h*m*l-_*d*l+_*c*f-o*m*f-h*c*p+o*d*p,x=g*d*l-u*m*l-g*c*f+a*m*f+u*c*p-a*d*p,v=u*_*l-g*h*l+g*o*f-a*_*f-u*o*p+a*h*p,w=g*h*c-u*_*c-g*o*d+a*_*d+u*o*m-a*h*m,E=t*y+n*x+r*v+s*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=y*A,e[1]=(_*d*s-h*m*s-_*r*f+n*m*f+h*r*p-n*d*p)*A,e[2]=(o*m*s-_*c*s+_*r*l-n*m*l-o*r*p+n*c*p)*A,e[3]=(h*c*s-o*d*s-h*r*l+n*d*l+o*r*f-n*c*f)*A,e[4]=x*A,e[5]=(u*m*s-g*d*s+g*r*f-t*m*f-u*r*p+t*d*p)*A,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*p-t*c*p)*A,e[7]=(a*d*s-u*c*s+u*r*l-t*d*l-a*r*f+t*c*f)*A,e[8]=v*A,e[9]=(g*h*s-u*_*s-g*n*f+t*_*f+u*n*p-t*h*p)*A,e[10]=(a*_*s-g*o*s+g*n*l-t*_*l-a*n*p+t*o*p)*A,e[11]=(u*o*s-a*h*s-u*n*l+t*h*l+a*n*f-t*o*f)*A,e[12]=w*A,e[13]=(u*_*r-g*h*r+g*n*d-t*_*d-u*n*m+t*h*m)*A,e[14]=(g*o*r-a*_*r-g*n*c+t*_*c+a*n*m-t*o*m)*A,e[15]=(a*h*r-u*o*r+u*n*c-t*h*c-a*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,d=s*l,f=s*u,g=s*h,_=a*u,m=a*h,p=o*h,y=c*l,x=c*u,v=c*h,w=n.x,E=n.y,A=n.z;return r[0]=(1-(_+p))*w,r[1]=(f+v)*w,r[2]=(g-x)*w,r[3]=0,r[4]=(f-v)*E,r[5]=(1-(d+p))*E,r[6]=(m+y)*E,r[7]=0,r[8]=(g+x)*A,r[9]=(m-y)*A,r[10]=(1-(d+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Br.set(r[0],r[1],r[2]).length();const a=Br.set(r[4],r[5],r[6]).length(),o=Br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const l=1/s,u=1/a,h=1/o;return Nn.elements[0]*=l,Nn.elements[1]*=l,Nn.elements[2]*=l,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=h,Nn.elements[9]*=h,Nn.elements[10]*=h,t.setFromRotationMatrix(Nn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=_i){const c=this.elements,l=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r);let f,g;if(o===_i)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Ho)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=_i){const c=this.elements,l=1/(t-e),u=1/(n-r),h=1/(a-s),d=(t+e)*l,f=(n+r)*u;let g,_;if(o===_i)g=(a+s)*h,_=-2*h;else if(o===Ho)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Br=new P,Nn=new ke,c_=new P(0,0,0),l_=new P(1,1,1),Ci=new P,Wa=new P,dn=new P,id=new ke,rd=new er;class Jn{constructor(e=0,t=0,n=0,r=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return id.makeRotationFromQuaternion(e),this.setFromRotationMatrix(id,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rd.setFromEuler(this),this.setFromQuaternion(rd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class Gp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let u_=0;const sd=new P,zr=new er,oi=new ke,qa=new P,Gs=new P,h_=new P,d_=new er,ad=new P(1,0,0),od=new P(0,1,0),cd=new P(0,0,1),ld={type:"added"},f_={type:"removed"},kr={type:"childadded",child:null},Pc={type:"childremoved",child:null};class mt extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new P,t=new Jn,n=new er,r=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ke},normalMatrix:{value:new qe}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(ad,e)}rotateY(e){return this.rotateOnAxis(od,e)}rotateZ(e){return this.rotateOnAxis(cd,e)}translateOnAxis(e,t){return sd.copy(e).applyQuaternion(this.quaternion),this.position.add(sd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ad,e)}translateY(e){return this.translateOnAxis(od,e)}translateZ(e){return this.translateOnAxis(cd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qa.copy(e):qa.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Gs,qa,this.up):oi.lookAt(qa,Gs,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),zr.setFromRotationMatrix(oi),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ld),kr.child=e,this.dispatchEvent(kr),kr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(f_),Pc.child=e,this.dispatchEvent(Pc),Pc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ld),kr.child=e,this.dispatchEvent(kr),kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,h_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,d_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}mt.DEFAULT_UP=new P(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new P,ci=new P,Lc=new P,li=new P,Vr=new P,Hr=new P,ud=new P,Dc=new P,Ic=new P,Nc=new P,Uc=new it,Oc=new it,Fc=new it;class _n{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Un.subVectors(e,t),r.cross(Un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Un.subVectors(r,t),ci.subVectors(n,t),Lc.subVectors(e,t);const a=Un.dot(Un),o=Un.dot(ci),c=Un.dot(Lc),l=ci.dot(ci),u=ci.dot(Lc),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,li)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,li.x),c.addScaledVector(a,li.y),c.addScaledVector(o,li.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Uc.setScalar(0),Oc.setScalar(0),Fc.setScalar(0),Uc.fromBufferAttribute(e,t),Oc.fromBufferAttribute(e,n),Fc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Uc,s.x),a.addScaledVector(Oc,s.y),a.addScaledVector(Fc,s.z),a}static isFrontFacing(e,t,n,r){return Un.subVectors(n,t),ci.subVectors(e,t),Un.cross(ci).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Un.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return _n.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Vr.subVectors(r,n),Hr.subVectors(s,n),Dc.subVectors(e,n);const c=Vr.dot(Dc),l=Hr.dot(Dc);if(c<=0&&l<=0)return t.copy(n);Ic.subVectors(e,r);const u=Vr.dot(Ic),h=Hr.dot(Ic);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Vr,a);Nc.subVectors(e,s);const f=Vr.dot(Nc),g=Hr.dot(Nc);if(g>=0&&f<=g)return t.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Hr,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return ud.subVectors(s,r),o=(h-u)/(h-u+(f-g)),t.copy(r).addScaledVector(ud,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(Vr,a).addScaledVector(Hr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},ja={h:0,s:0,l:0};function Bc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class we{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ze.workingColorSpace){if(e=Ku(e,1),t=Ut(t,0,1),n=Ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Bc(a,s,e+1/3),this.g=Bc(a,s,e),this.b=Bc(a,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=It){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const n=Wp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return Ze.fromWorkingColorSpace(Gt.copy(this),e),Math.round(Ut(Gt.r*255,0,255))*65536+Math.round(Ut(Gt.g*255,0,255))*256+Math.round(Ut(Gt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Gt.copy(this),t);const n=Gt.r,r=Gt.g,s=Gt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=It){Ze.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,r=Gt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(ja);const n=la(Pi.h,ja.h,t),r=la(Pi.s,ja.s,t),s=la(Pi.l,ja.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new we;we.NAMES=Wp;let p_=0;class zn extends Ds{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=Cn(),this.name="",this.blending=br,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tl,this.blendDst=Al,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(n.blending=this.blending),this.side!==Mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Tl&&(n.blendSrc=this.blendSrc),this.blendDst!==Al&&(n.blendDst=this.blendDst),this.blendEquation!==pr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ir&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ir&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ir&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class rn extends zn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Ep,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new P,Ya=new ee;class Ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lu,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ya.fromBufferAttribute(this,t),Ya.applyMatrix3(e),this.setXY(t,Ya.x,Ya.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lu&&(e.usage=this.usage),e}}class qp extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jp extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ve extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let m_=0;const bn=new ke,zc=new mt,Gr=new P,fn=new Xn,Ws=new Xn,Dt=new P;class ht extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kp(e)?jp:qp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,n){return bn.makeTranslation(e,t,n),this.applyMatrix4(bn),this}scale(e,t,n){return bn.makeScale(e,t,n),this.applyMatrix4(bn),this}lookAt(e){return zc.lookAt(e),zc.updateMatrix(),this.applyMatrix4(zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ve(n,3))}else{for(let n=0,r=t.count;n<r;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ws.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(fn.min,Ws.min),fn.expandByPoint(Dt),Dt.addVectors(fn.max,Ws.max),fn.expandByPoint(Dt)):(fn.expandByPoint(Ws.min),fn.expandByPoint(Ws.max))}fn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Dt.fromBufferAttribute(o,l),c&&(Gr.fromBufferAttribute(e,l),Dt.add(Gr)),r=Math.max(r,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new P,c[R]=new P;const l=new P,u=new P,h=new P,d=new ee,f=new ee,g=new ee,_=new P,m=new P;function p(R,M,S){l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,S),d.fromBufferAttribute(s,R),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,S),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(L),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),o[R].add(_),o[M].add(_),o[S].add(_),c[R].add(m),c[M].add(m),c[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let R=0,M=y.length;R<M;++R){const S=y[R],L=S.start,z=S.count;for(let O=L,W=L+z;O<W;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const x=new P,v=new P,w=new P,E=new P;function A(R){w.fromBufferAttribute(r,R),E.copy(w);const M=o[R];x.copy(M),x.sub(w.multiplyScalar(w.dot(M))).normalize(),v.crossVectors(E,M);const L=v.dot(c[R])<0?-1:1;a.setXYZW(R,x.x,x.y,x.z,L)}for(let R=0,M=y.length;R<M;++R){const S=y[R],L=S.start,z=S.count;for(let O=L,W=L+z;O<W;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new P,s=new P,a=new P,o=new P,c=new P,l=new P,u=new P,h=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new Ft(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ht,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hd=new ke,ar=new tc,Ka=new ei,dd=new P,$a=new P,Za=new P,Ja=new P,kc=new P,Qa=new P,fd=new P,Xa=new P;class nt extends mt{constructor(e=new ht,t=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Qa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(kc.fromBufferAttribute(h,e),a?Qa.addScaledVector(kc,u):Qa.addScaledVector(kc.sub(t),u))}t.add(Qa)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(Ka.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Ka,dd)===null||ar.origin.distanceToSquared(dd)>(e.far-e.near)**2))&&(hd.copy(s).invert(),ar.copy(e.ray).applyMatrix4(hd),!(n.boundingBox!==null&&ar.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ar)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,w=x;v<w;v+=3){const E=o.getX(v),A=o.getX(v+1),R=o.getX(v+2);r=eo(this,p,e,n,l,u,h,E,A,R),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);r=eo(this,a,e,n,l,u,h,y,x,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,w=x;v<w;v+=3){const E=v,A=v+1,R=v+2;r=eo(this,p,e,n,l,u,h,E,A,R),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,x=m+1,v=m+2;r=eo(this,a,e,n,l,u,h,y,x,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function g_(i,e,t,n,r,s,a,o){let c;if(e.side===ln?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Mi,o),c===null)return null;Xa.copy(o),Xa.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Xa);return l<t.near||l>t.far?null:{distance:l,point:Xa.clone(),object:i}}function eo(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,$a),i.getVertexPosition(c,Za),i.getVertexPosition(l,Ja);const u=g_(i,e,t,n,$a,Za,Ja,fd);if(u){const h=new P;_n.getBarycoord(fd,$a,Za,Ja,h),r&&(u.uv=_n.getInterpolatedAttribute(r,o,c,l,h,new ee)),s&&(u.uv1=_n.getInterpolatedAttribute(s,o,c,l,h,new ee)),a&&(u.normal=_n.getInterpolatedAttribute(a,o,c,l,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new P,materialIndex:0};_n.getNormal($a,Za,Ja,d.normal),u.face=d,u.barycoord=h}return u}class Is extends ht{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Ve(l,3)),this.setAttribute("normal",new Ve(u,3)),this.setAttribute("uv",new Ve(h,2));function g(_,m,p,y,x,v,w,E,A,R,M){const S=v/A,L=w/R,z=v/2,O=w/2,W=E/2,F=A+1,k=R+1;let q=0,V=0;const ie=new P;for(let le=0;le<k;le++){const fe=le*L-O;for(let Le=0;Le<F;Le++){const Xe=Le*S-z;ie[_]=Xe*y,ie[m]=fe*x,ie[p]=W,l.push(ie.x,ie.y,ie.z),ie[_]=0,ie[m]=0,ie[p]=E>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(Le/A),h.push(1-le/R),q+=1}}for(let le=0;le<R;le++)for(let fe=0;fe<A;fe++){const Le=d+fe+F*le,Xe=d+fe+F*(le+1),Y=d+(fe+1)+F*(le+1),te=d+(fe+1)+F*le;c.push(Le,Xe,te),c.push(Xe,Y,te),V+=6}o.addGroup(f,V,M),f+=V,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Kt(i){const e={};for(let t=0;t<i.length;t++){const n=ws(i[t]);for(const r in n)e[r]=n[r]}return e}function __(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Yp(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const v_={clone:ws,merge:Kt};var x_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,y_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends zn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x_,this.fragmentShader=y_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=__(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Kp extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=_i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Li=new P,pd=new ee,md=new ee;class $t extends Kp{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=As*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return As*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,pd,md),t.subVectors(md,pd)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ls*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wr=-90,qr=1;class M_ extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $t(Wr,qr,e,t);r.layers=this.layers,this.add(r);const s=new $t(Wr,qr,e,t);s.layers=this.layers,this.add(s);const a=new $t(Wr,qr,e,t);a.layers=this.layers,this.add(a);const o=new $t(Wr,qr,e,t);o.layers=this.layers,this.add(o);const c=new $t(Wr,qr,e,t);c.layers=this.layers,this.add(c);const l=new $t(Wr,qr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===_i)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class $p extends Ot{constructor(e,t,n,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ms,super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class S_ extends Rr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new $p(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Is(5,5,5),s=new Qn({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Yi});s.uniforms.tEquirect.value=t;const a=new nt(r,s),o=t.minFilter;return t.minFilter===gi&&(t.minFilter=xn),new M_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Vc=new P,b_=new P,E_=new qe;class dr{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Vc.subVectors(n,t).cross(b_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Vc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||E_.getNormalMatrix(e),r=this.coplanarPoint(Vc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new ei,to=new P;class $u{constructor(e=new dr,t=new dr,n=new dr,r=new dr,s=new dr,a=new dr){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_i){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],h=r[6],d=r[7],f=r[8],g=r[9],_=r[10],m=r[11],p=r[12],y=r[13],x=r[14],v=r[15];if(n[0].setComponents(c-s,d-l,m-f,v-p).normalize(),n[1].setComponents(c+s,d+l,m+f,v+p).normalize(),n[2].setComponents(c+a,d+u,m+g,v+y).normalize(),n[3].setComponents(c-a,d-u,m-g,v-y).normalize(),n[4].setComponents(c-o,d-h,m-_,v-x).normalize(),t===_i)n[5].setComponents(c+o,d+h,m+_,v+x).normalize();else if(t===Ho)n[5].setComponents(o,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(to.x=r.normal.x>0?e.max.x:e.min.x,to.y=r.normal.y>0?e.max.y:e.min.y,to.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(to)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zp(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function T_(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class Ia extends ht{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,h=e/o,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*d-a;for(let x=0;x<l;x++){const v=x*h-s;g.push(v,-y,0),_.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const x=y+l*p,v=y+l*(p+1),w=y+1+l*(p+1),E=y+1+l*p;f.push(x,v,E),f.push(v,w,E)}this.setIndex(f),this.setAttribute("position",new Ve(g,3)),this.setAttribute("normal",new Ve(_,3)),this.setAttribute("uv",new Ve(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.width,e.height,e.widthSegments,e.heightSegments)}}var A_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w_=`#ifdef USE_ALPHAHASH
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
#endif`,R_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D_=`#ifdef USE_AOMAP
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
#endif`,I_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N_=`#ifdef USE_BATCHING
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
#endif`,U_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,O_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,F_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,z_=`#ifdef USE_IRIDESCENCE
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
#endif`,k_=`#ifdef USE_BUMPMAP
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
#endif`,V_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,H_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,G_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,j_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Y_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,K_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$_=`#define PI 3.141592653589793
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
} // validated`,Z_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,J_=`vec3 transformedNormal = objectNormal;
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
#endif`,Q_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ev=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nv="gl_FragColor = linearToOutputTexel( gl_FragColor );",iv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rv=`#ifdef USE_ENVMAP
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
#endif`,sv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,av=`#ifdef USE_ENVMAP
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
#endif`,ov=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cv=`#ifdef USE_ENVMAP
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
#endif`,lv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fv=`#ifdef USE_GRADIENTMAP
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
}`,pv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_v=`uniform bool receiveShadow;
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
#endif`,vv=`#ifdef USE_ENVMAP
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
#endif`,xv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bv=`PhysicalMaterial material;
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
#endif`,Ev=`struct PhysicalMaterial {
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
}`,Tv=`
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
#endif`,Av=`#if defined( RE_IndirectDiffuse )
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
#endif`,wv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Uv=`#if defined( USE_POINTS_UV )
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
#endif`,Ov=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vv=`#ifdef USE_MORPHTARGETS
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
#endif`,Hv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kv=`#ifdef USE_NORMALMAP
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
#endif`,$v=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ex=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ax=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ox=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ux=`float getShadowMask() {
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
}`,hx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dx=`#ifdef USE_SKINNING
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
#endif`,fx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,px=`#ifdef USE_SKINNING
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
#endif`,mx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_x=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xx=`#ifdef USE_TRANSMISSION
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
#endif`,yx=`#ifdef USE_TRANSMISSION
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
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ax=`uniform sampler2D t2D;
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
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`#include <common>
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
}`,Dx=`#if DEPTH_PACKING == 3200
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
}`,Ix=`#define DISTANCE
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
}`,Nx=`#define DISTANCE
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
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ox=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`uniform float scale;
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
}`,Bx=`uniform vec3 diffuse;
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
}`,zx=`#include <common>
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
}`,kx=`uniform vec3 diffuse;
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
}`,Vx=`#define LAMBERT
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
}`,Hx=`#define LAMBERT
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
}`,Gx=`#define MATCAP
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
}`,Wx=`#define MATCAP
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
}`,qx=`#define NORMAL
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
}`,jx=`#define NORMAL
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
}`,Yx=`#define PHONG
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
}`,Kx=`#define PHONG
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
}`,$x=`#define STANDARD
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
}`,Zx=`#define STANDARD
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
}`,Jx=`#define TOON
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
}`,Qx=`#define TOON
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
}`,Xx=`uniform float size;
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
}`,ey=`uniform vec3 diffuse;
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
}`,ty=`#include <common>
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
}`,ny=`uniform vec3 color;
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
}`,iy=`uniform float rotation;
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
}`,ry=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:A_,alphahash_pars_fragment:w_,alphamap_fragment:R_,alphamap_pars_fragment:C_,alphatest_fragment:P_,alphatest_pars_fragment:L_,aomap_fragment:D_,aomap_pars_fragment:I_,batching_pars_vertex:N_,batching_vertex:U_,begin_vertex:O_,beginnormal_vertex:F_,bsdfs:B_,iridescence_fragment:z_,bumpmap_pars_fragment:k_,clipping_planes_fragment:V_,clipping_planes_pars_fragment:H_,clipping_planes_pars_vertex:G_,clipping_planes_vertex:W_,color_fragment:q_,color_pars_fragment:j_,color_pars_vertex:Y_,color_vertex:K_,common:$_,cube_uv_reflection_fragment:Z_,defaultnormal_vertex:J_,displacementmap_pars_vertex:Q_,displacementmap_vertex:X_,emissivemap_fragment:ev,emissivemap_pars_fragment:tv,colorspace_fragment:nv,colorspace_pars_fragment:iv,envmap_fragment:rv,envmap_common_pars_fragment:sv,envmap_pars_fragment:av,envmap_pars_vertex:ov,envmap_physical_pars_fragment:vv,envmap_vertex:cv,fog_vertex:lv,fog_pars_vertex:uv,fog_fragment:hv,fog_pars_fragment:dv,gradientmap_pars_fragment:fv,lightmap_pars_fragment:pv,lights_lambert_fragment:mv,lights_lambert_pars_fragment:gv,lights_pars_begin:_v,lights_toon_fragment:xv,lights_toon_pars_fragment:yv,lights_phong_fragment:Mv,lights_phong_pars_fragment:Sv,lights_physical_fragment:bv,lights_physical_pars_fragment:Ev,lights_fragment_begin:Tv,lights_fragment_maps:Av,lights_fragment_end:wv,logdepthbuf_fragment:Rv,logdepthbuf_pars_fragment:Cv,logdepthbuf_pars_vertex:Pv,logdepthbuf_vertex:Lv,map_fragment:Dv,map_pars_fragment:Iv,map_particle_fragment:Nv,map_particle_pars_fragment:Uv,metalnessmap_fragment:Ov,metalnessmap_pars_fragment:Fv,morphinstance_vertex:Bv,morphcolor_vertex:zv,morphnormal_vertex:kv,morphtarget_pars_vertex:Vv,morphtarget_vertex:Hv,normal_fragment_begin:Gv,normal_fragment_maps:Wv,normal_pars_fragment:qv,normal_pars_vertex:jv,normal_vertex:Yv,normalmap_pars_fragment:Kv,clearcoat_normal_fragment_begin:$v,clearcoat_normal_fragment_maps:Zv,clearcoat_pars_fragment:Jv,iridescence_pars_fragment:Qv,opaque_fragment:Xv,packing:ex,premultiplied_alpha_fragment:tx,project_vertex:nx,dithering_fragment:ix,dithering_pars_fragment:rx,roughnessmap_fragment:sx,roughnessmap_pars_fragment:ax,shadowmap_pars_fragment:ox,shadowmap_pars_vertex:cx,shadowmap_vertex:lx,shadowmask_pars_fragment:ux,skinbase_vertex:hx,skinning_pars_vertex:dx,skinning_vertex:fx,skinnormal_vertex:px,specularmap_fragment:mx,specularmap_pars_fragment:gx,tonemapping_fragment:_x,tonemapping_pars_fragment:vx,transmission_fragment:xx,transmission_pars_fragment:yx,uv_pars_fragment:Mx,uv_pars_vertex:Sx,uv_vertex:bx,worldpos_vertex:Ex,background_vert:Tx,background_frag:Ax,backgroundCube_vert:wx,backgroundCube_frag:Rx,cube_vert:Cx,cube_frag:Px,depth_vert:Lx,depth_frag:Dx,distanceRGBA_vert:Ix,distanceRGBA_frag:Nx,equirect_vert:Ux,equirect_frag:Ox,linedashed_vert:Fx,linedashed_frag:Bx,meshbasic_vert:zx,meshbasic_frag:kx,meshlambert_vert:Vx,meshlambert_frag:Hx,meshmatcap_vert:Gx,meshmatcap_frag:Wx,meshnormal_vert:qx,meshnormal_frag:jx,meshphong_vert:Yx,meshphong_frag:Kx,meshphysical_vert:$x,meshphysical_frag:Zx,meshtoon_vert:Jx,meshtoon_frag:Qx,points_vert:Xx,points_frag:ey,shadow_vert:ty,shadow_frag:ny,sprite_vert:iy,sprite_frag:ry},ue={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},jn={basic:{uniforms:Kt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Kt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new we(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Kt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Kt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Kt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new we(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Kt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Kt([ue.points,ue.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Kt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Kt([ue.common,ue.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Kt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Kt([ue.sprite,ue.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Kt([ue.common,ue.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Kt([ue.lights,ue.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};jn.physical={uniforms:Kt([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const no={r:0,b:0,g:0},cr=new Jn,sy=new ke;function ay(i,e,t,n,r,s,a){const o=new we(0);let c=s===!0?0:1,l,u,h=null,d=0,f=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function _(y){let x=!1;const v=g(y);v===null?p(o,c):v&&v.isColor&&(p(v,1),x=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===Xo)?(u===void 0&&(u=new nt(new Is(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:ws(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),cr.copy(x.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(sy.makeRotationFromEuler(cr)),u.material.toneMapped=Ze.getTransfer(v.colorSpace)!==lt,(h!==v||d!==v.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new nt(new Ia(2,2),new Qn({name:"BackgroundMaterial",uniforms:ws(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(v.colorSpace)!==lt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,x){y.getRGB(no,Yp(i)),n.buffers.color.setClear(no.r,no.g,no.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),c=x,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(o,c)},render:_,addToRenderList:m}}function oy(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(S,L,z,O,W){let F=!1;const k=h(O,z,L);s!==k&&(s=k,l(s.object)),F=f(S,O,z,W),F&&g(S,O,z,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,v(S,L,z,O),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,L,z){const O=z.wireframe===!0;let W=n[S.id];W===void 0&&(W={},n[S.id]=W);let F=W[L.id];F===void 0&&(F={},W[L.id]=F);let k=F[O];return k===void 0&&(k=d(c()),F[O]=k),k}function d(S){const L=[],z=[],O=[];for(let W=0;W<t;W++)L[W]=0,z[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:O,object:S,attributes:{},index:null}}function f(S,L,z,O){const W=s.attributes,F=L.attributes;let k=0;const q=z.getAttributes();for(const V in q)if(q[V].location>=0){const le=W[V];let fe=F[V];if(fe===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor)),le===void 0||le.attribute!==fe||fe&&le.data!==fe.data)return!0;k++}return s.attributesNum!==k||s.index!==O}function g(S,L,z,O){const W={},F=L.attributes;let k=0;const q=z.getAttributes();for(const V in q)if(q[V].location>=0){let le=F[V];le===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(le=S.instanceColor));const fe={};fe.attribute=le,le&&le.data&&(fe.data=le.data),W[V]=fe,k++}s.attributes=W,s.attributesNum=k,s.index=O}function _(){const S=s.newAttributes;for(let L=0,z=S.length;L<z;L++)S[L]=0}function m(S){p(S,0)}function p(S,L){const z=s.newAttributes,O=s.enabledAttributes,W=s.attributeDivisors;z[S]=1,O[S]===0&&(i.enableVertexAttribArray(S),O[S]=1),W[S]!==L&&(i.vertexAttribDivisor(S,L),W[S]=L)}function y(){const S=s.newAttributes,L=s.enabledAttributes;for(let z=0,O=L.length;z<O;z++)L[z]!==S[z]&&(i.disableVertexAttribArray(z),L[z]=0)}function x(S,L,z,O,W,F,k){k===!0?i.vertexAttribIPointer(S,L,z,W,F):i.vertexAttribPointer(S,L,z,O,W,F)}function v(S,L,z,O){_();const W=O.attributes,F=z.getAttributes(),k=L.defaultAttributeValues;for(const q in F){const V=F[q];if(V.location>=0){let ie=W[q];if(ie===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),ie!==void 0){const le=ie.normalized,fe=ie.itemSize,Le=e.get(ie);if(Le===void 0)continue;const Xe=Le.buffer,Y=Le.type,te=Le.bytesPerElement,Se=Y===i.INT||Y===i.UNSIGNED_INT||ie.gpuType===Vu;if(ie.isInterleavedBufferAttribute){const oe=ie.data,De=oe.stride,Fe=ie.offset;if(oe.isInstancedInterleavedBuffer){for(let Ue=0;Ue<V.locationSize;Ue++)p(V.location+Ue,oe.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ue=0;Ue<V.locationSize;Ue++)m(V.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let Ue=0;Ue<V.locationSize;Ue++)x(V.location+Ue,fe/V.locationSize,Y,le,De*te,(Fe+fe/V.locationSize*Ue)*te,Se)}else{if(ie.isInstancedBufferAttribute){for(let oe=0;oe<V.locationSize;oe++)p(V.location+oe,ie.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let oe=0;oe<V.locationSize;oe++)m(V.location+oe);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let oe=0;oe<V.locationSize;oe++)x(V.location+oe,fe/V.locationSize,Y,le,fe*te,fe/V.locationSize*oe*te,Se)}}else if(k!==void 0){const le=k[q];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(V.location,le);break;case 3:i.vertexAttrib3fv(V.location,le);break;case 4:i.vertexAttrib4fv(V.location,le);break;default:i.vertexAttrib1fv(V.location,le)}}}}y()}function w(){R();for(const S in n){const L=n[S];for(const z in L){const O=L[z];for(const W in O)u(O[W].object),delete O[W];delete L[z]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const z in L){const O=L[z];for(const W in O)u(O[W].object),delete O[W];delete L[z]}delete n[S.id]}function A(S){for(const L in n){const z=n[L];if(z[S.id]===void 0)continue;const O=z[S.id];for(const W in O)u(O[W].object),delete O[W];delete z[S.id]}}function R(){M(),a=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function cy(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function ly(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Rn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const R=A===Da&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Si&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Bn&&!R)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:w,maxSamples:E}}function uy(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new dr,o=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||r;return r=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const y=s?0:n,x=y*4;let v=p.clippingState||null;c.value=v,v=u(g,d,x,f);for(let w=0;w!==x;++w)v[w]=t[w];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=f;x!==_;++x,v+=4)a.copy(h[x]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function hy(i){let e=new WeakMap;function t(a,o){return o===Nl?a.mapping=Ms:o===Ul&&(a.mapping=Ss),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Nl||o===Ul)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new S_(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Zu extends Kp{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const is=4,gd=[.125,.215,.35,.446,.526,.582],mr=20,Hc=new Zu,_d=new we;let Gc=null,Wc=0,qc=0,jc=!1;const fr=(1+Math.sqrt(5))/2,jr=1/fr,vd=[new P(-fr,jr,0),new P(fr,jr,0),new P(-jr,0,fr),new P(jr,0,fr),new P(0,fr,-jr),new P(0,fr,jr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class uu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gc,Wc,qc),this._renderer.xr.enabled=jc,e.scissorTest=!1,io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ms||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Da,format:Rn,colorSpace:tn,depthBuffer:!1},r=xd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xd(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dy(s)),this._blurMaterial=fy(s,e,t)}return r}_compileMaterial(e){const t=new nt(this._lodPlanes[0],e);this._renderer.compile(t,Hc)}_sceneToCubeUV(e,t,n,r){const o=new $t(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(_d),u.toneMapping=Ki,u.autoClear=!1;const f=new rn({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new nt(new Is,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(_d),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):y===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const x=this._cubeSize;io(r,y*x,p>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ms||e.mapping===Ss;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Md()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yd());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new nt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;io(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Hc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=vd[(r-s-1)%vd.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new nt(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*mr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):mr;m>mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mr}`);const p=[];let y=0;for(let A=0;A<mr;++A){const R=A/_,M=Math.exp(-R*R/2);p.push(M),A===0?y+=M:A<m&&(y+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const v=this._sizeLods[r],w=3*v*(r>x-is?r-x+is:0),E=4*(this._cubeSize-v);io(t,w,E,3*v,2*v),c.setRenderTarget(t),c.render(h,Hc)}}function dy(i){const e=[],t=[],n=[];let r=i;const s=i-is+1+gd.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-is?c=gd[a-i+is-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),x=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let E=0;E<f;E++){const A=E%3*2/3-1,R=E>2?0:-1,M=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];y.set(M,_*g*E),x.set(d,m*g*E);const S=[E,E,E,E,E,E];v.set(S,p*g*E)}const w=new ht;w.setAttribute("position",new Ft(y,_)),w.setAttribute("uv",new Ft(x,m)),w.setAttribute("faceIndex",new Ft(v,p)),e.push(w),r>is&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xd(i,e,t){const n=new Rr(i,e,t);return n.texture.mapping=Xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function io(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function fy(i,e,t){const n=new Float32Array(mr),r=new P(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ju(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function yd(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ju(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Md(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Ju(){return`

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
	`}function py(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Nl||c===Ul,u=c===Ms||c===Ss;if(l||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new uu(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new uu(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function my(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ia("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function gy(i,e,t,n){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],i.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let x=0,v=y.length;x<v;x+=3){const w=y[x+0],E=y[x+1],A=y[x+2];d.push(w,E,E,A,A,w)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const w=x+0,E=x+1,A=x+2;d.push(w,E,E,A,A,w)}}else return;const m=new(kp(d)?jp:qp)(d,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function _y(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,s,d*a),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,s,d*a,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];t.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function vy(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function xy(i,e,t){const n=new WeakMap,r=new it;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let S=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let w=o.attributes.position.count*v,E=1;w>e.maxTextureSize&&(E=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const A=new Float32Array(w*E*4*h),R=new Hp(A,w,E,h);R.type=Bn,R.needsUpdate=!0;const M=v*4;for(let L=0;L<h;L++){const z=p[L],O=y[L],W=x[L],F=w*E*4*L;for(let k=0;k<z.count;k++){const q=k*M;g===!0&&(r.fromBufferAttribute(z,k),A[F+q+0]=r.x,A[F+q+1]=r.y,A[F+q+2]=r.z,A[F+q+3]=0),_===!0&&(r.fromBufferAttribute(O,k),A[F+q+4]=r.x,A[F+q+5]=r.y,A[F+q+6]=r.z,A[F+q+7]=0),m===!0&&(r.fromBufferAttribute(W,k),A[F+q+8]=r.x,A[F+q+9]=r.y,A[F+q+10]=r.z,A[F+q+11]=W.itemSize===4?r.w:1)}}d={count:h,texture:R,size:new ee(w,E)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function yy(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class Jp extends Ot{constructor(e,t,n,r,s,a,o,c,l,u=cs){if(u!==cs&&u!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===cs&&(n=wr),n===void 0&&u===Ts&&(n=Es),super(null,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Qt,this.minFilter=c!==void 0?c:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Qp=new Ot,Sd=new Jp(1,1),Xp=new Hp,em=new a_,tm=new $p,bd=[],Ed=[],Td=new Float32Array(16),Ad=new Float32Array(9),wd=new Float32Array(4);function Ns(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=bd[r];if(s===void 0&&(s=new Float32Array(r),bd[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function nc(i,e){let t=Ed[e];t===void 0&&(t=new Int32Array(e),Ed[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function My(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Sy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function by(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function Ey(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function Ty(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;wd.set(n),i.uniformMatrix2fv(this.addr,!1,wd),Lt(t,n)}}function Ay(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Ad.set(n),i.uniformMatrix3fv(this.addr,!1,Ad),Lt(t,n)}}function wy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Td.set(n),i.uniformMatrix4fv(this.addr,!1,Td),Lt(t,n)}}function Ry(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Cy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function Py(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function Ly(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function Dy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Iy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function Ny(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function Uy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function Oy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Sd.compareFunction=zp,s=Sd):s=Qp,t.setTexture2D(e||s,r)}function Fy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||em,r)}function By(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||tm,r)}function zy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Xp,r)}function ky(i){switch(i){case 5126:return My;case 35664:return Sy;case 35665:return by;case 35666:return Ey;case 35674:return Ty;case 35675:return Ay;case 35676:return wy;case 5124:case 35670:return Ry;case 35667:case 35671:return Cy;case 35668:case 35672:return Py;case 35669:case 35673:return Ly;case 5125:return Dy;case 36294:return Iy;case 36295:return Ny;case 36296:return Uy;case 35678:case 36198:case 36298:case 36306:case 35682:return Oy;case 35679:case 36299:case 36307:return Fy;case 35680:case 36300:case 36308:case 36293:return By;case 36289:case 36303:case 36311:case 36292:return zy}}function Vy(i,e){i.uniform1fv(this.addr,e)}function Hy(i,e){const t=Ns(e,this.size,2);i.uniform2fv(this.addr,t)}function Gy(i,e){const t=Ns(e,this.size,3);i.uniform3fv(this.addr,t)}function Wy(i,e){const t=Ns(e,this.size,4);i.uniform4fv(this.addr,t)}function qy(i,e){const t=Ns(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function jy(i,e){const t=Ns(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Yy(i,e){const t=Ns(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ky(i,e){i.uniform1iv(this.addr,e)}function $y(i,e){i.uniform2iv(this.addr,e)}function Zy(i,e){i.uniform3iv(this.addr,e)}function Jy(i,e){i.uniform4iv(this.addr,e)}function Qy(i,e){i.uniform1uiv(this.addr,e)}function Xy(i,e){i.uniform2uiv(this.addr,e)}function eM(i,e){i.uniform3uiv(this.addr,e)}function tM(i,e){i.uniform4uiv(this.addr,e)}function nM(i,e,t){const n=this.cache,r=e.length,s=nc(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Qp,s[a])}function iM(i,e,t){const n=this.cache,r=e.length,s=nc(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||em,s[a])}function rM(i,e,t){const n=this.cache,r=e.length,s=nc(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||tm,s[a])}function sM(i,e,t){const n=this.cache,r=e.length,s=nc(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Xp,s[a])}function aM(i){switch(i){case 5126:return Vy;case 35664:return Hy;case 35665:return Gy;case 35666:return Wy;case 35674:return qy;case 35675:return jy;case 35676:return Yy;case 5124:case 35670:return Ky;case 35667:case 35671:return $y;case 35668:case 35672:return Zy;case 35669:case 35673:return Jy;case 5125:return Qy;case 36294:return Xy;case 36295:return eM;case 36296:return tM;case 35678:case 36198:case 36298:case 36306:case 35682:return nM;case 35679:case 36299:case 36307:return iM;case 35680:case 36300:case 36308:case 36293:return rM;case 36289:case 36303:case 36311:case 36292:return sM}}class oM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ky(t.type)}}class cM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=aM(t.type)}}class lM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Yc=/(\w+)(\])?(\[|\.)?/g;function Rd(i,e){i.seq.push(e),i.map[e.id]=e}function uM(i,e,t){const n=i.name,r=n.length;for(Yc.lastIndex=0;;){const s=Yc.exec(n),a=Yc.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Rd(t,l===void 0?new oM(o,i,e):new cM(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new lM(o),Rd(t,h)),t=h}}}class Do{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);uM(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Cd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const hM=37297;let dM=0;function fM(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Pd=new qe;function pM(i){Ze._getMatrix(Pd,Ze.workingColorSpace,i);const e=`mat3( ${Pd.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case ec:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ld(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+fM(i.getShaderSource(e),a)}else return r}function mM(i,e){const t=pM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function gM(i,e){let t;switch(e){case g0:t="Linear";break;case _0:t="Reinhard";break;case v0:t="Cineon";break;case Tp:t="ACESFilmic";break;case y0:t="AgX";break;case M0:t="Neutral";break;case x0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ro=new P;function _M(){Ze.getLuminanceCoefficients(ro);const i=ro.x.toFixed(4),e=ro.y.toFixed(4),t=ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function xM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yM(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ra(i){return i!==""}function Dd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Id(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const MM=/^[ \t]*#include +<([\w\d./]+)>/gm;function hu(i){return i.replace(MM,bM)}const SM=new Map;function bM(i,e){let t=Ye[e];if(t===void 0){const n=SM.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return hu(t)}const EM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nd(i){return i.replace(EM,TM)}function TM(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ud(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function AM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===bp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===$g?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function wM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ms:case Ss:e="ENVMAP_TYPE_CUBE";break;case Xo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function RM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ss:e="ENVMAP_MODE_REFRACTION";break}return e}function CM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ep:e="ENVMAP_BLENDING_MULTIPLY";break;case p0:e="ENVMAP_BLENDING_MIX";break;case m0:e="ENVMAP_BLENDING_ADD";break}return e}function PM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function LM(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=AM(t),l=wM(t),u=RM(t),h=CM(t),d=PM(t),f=vM(t),g=xM(s),_=r.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ra).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ra).join(`
`),p.length>0&&(p+=`
`)):(m=[Ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),p=[Ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ki?gM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,mM("linearToOutputTexel",t.outputColorSpace),_M(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ra).join(`
`)),a=hu(a),a=Dd(a,t),a=Id(a,t),o=hu(o),o=Dd(o,t),o=Id(o,t),a=Nd(a),o=Nd(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+a,v=y+p+o,w=Cd(r,r.VERTEX_SHADER,x),E=Cd(r,r.FRAGMENT_SHADER,v);r.attachShader(_,w),r.attachShader(_,E),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(L){if(i.debug.checkShaderErrors){const z=r.getProgramInfoLog(_).trim(),O=r.getShaderInfoLog(w).trim(),W=r.getShaderInfoLog(E).trim();let F=!0,k=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,w,E);else{const q=Ld(r,w,"vertex"),V=Ld(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+q+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||W==="")&&(k=!1);k&&(L.diagnostics={runnable:F,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:W,prefix:p}})}r.deleteShader(w),r.deleteShader(E),R=new Do(r,_),M=yM(r,_)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,hM)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=E,this}let DM=0;class IM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new NM(e),t.set(e,n)),n}}class NM{constructor(e){this.id=DM++,this.code=e,this.usedTimes=0}}function UM(i,e,t,n,r,s,a){const o=new Gp,c=new IM,l=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,S,L,z,O){const W=z.fog,F=O.geometry,k=M.isMeshStandardMaterial?z.environment:null,q=(M.isMeshStandardMaterial?t:e).get(M.envMap||k),V=q&&q.mapping===Xo?q.image.height:null,ie=g[M.type];M.precision!==null&&(f=r.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const le=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,fe=le!==void 0?le.length:0;let Le=0;F.morphAttributes.position!==void 0&&(Le=1),F.morphAttributes.normal!==void 0&&(Le=2),F.morphAttributes.color!==void 0&&(Le=3);let Xe,Y,te,Se;if(ie){const at=jn[ie];Xe=at.vertexShader,Y=at.fragmentShader}else Xe=M.vertexShader,Y=M.fragmentShader,c.update(M),te=c.getVertexShaderID(M),Se=c.getFragmentShaderID(M);const oe=i.getRenderTarget(),De=i.state.buffers.depth.getReversed(),Fe=O.isInstancedMesh===!0,Ue=O.isBatchedMesh===!0,et=!!M.map,Q=!!M.matcap,se=!!q,D=!!M.aoMap,Re=!!M.lightMap,ne=!!M.bumpMap,xe=!!M.normalMap,ce=!!M.displacementMap,Ie=!!M.emissiveMap,_e=!!M.metalnessMap,C=!!M.roughnessMap,b=M.anisotropy>0,B=M.clearcoat>0,$=M.dispersion>0,X=M.iridescence>0,Z=M.sheen>0,be=M.transmission>0,he=b&&!!M.anisotropyMap,ve=B&&!!M.clearcoatMap,$e=B&&!!M.clearcoatNormalMap,re=B&&!!M.clearcoatRoughnessMap,ye=X&&!!M.iridescenceMap,Ne=X&&!!M.iridescenceThicknessMap,Oe=Z&&!!M.sheenColorMap,Me=Z&&!!M.sheenRoughnessMap,Qe=!!M.specularMap,je=!!M.specularColorMap,dt=!!M.specularIntensityMap,I=be&&!!M.transmissionMap,de=be&&!!M.thicknessMap,j=!!M.gradientMap,J=!!M.alphaMap,ge=M.alphaTest>0,pe=!!M.alphaHash,Ge=!!M.extensions;let St=Ki;M.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(St=i.toneMapping);const Vt={shaderID:ie,shaderType:M.type,shaderName:M.name,vertexShader:Xe,fragmentShader:Y,defines:M.defines,customVertexShaderID:te,customFragmentShaderID:Se,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ue,batchingColor:Ue&&O._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&O.instanceColor!==null,instancingMorph:Fe&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:tn,alphaToCoverage:!!M.alphaToCoverage,map:et,matcap:Q,envMap:se,envMapMode:se&&q.mapping,envMapCubeUVHeight:V,aoMap:D,lightMap:Re,bumpMap:ne,normalMap:xe,displacementMap:d&&ce,emissiveMap:Ie,normalMapObjectSpace:xe&&M.normalMapType===w0,normalMapTangentSpace:xe&&M.normalMapType===Bp,metalnessMap:_e,roughnessMap:C,anisotropy:b,anisotropyMap:he,clearcoat:B,clearcoatMap:ve,clearcoatNormalMap:$e,clearcoatRoughnessMap:re,dispersion:$,iridescence:X,iridescenceMap:ye,iridescenceThicknessMap:Ne,sheen:Z,sheenColorMap:Oe,sheenRoughnessMap:Me,specularMap:Qe,specularColorMap:je,specularIntensityMap:dt,transmission:be,transmissionMap:I,thicknessMap:de,gradientMap:j,opaque:M.transparent===!1&&M.blending===br&&M.alphaToCoverage===!1,alphaMap:J,alphaTest:ge,alphaHash:pe,combine:M.combine,mapUv:et&&_(M.map.channel),aoMapUv:D&&_(M.aoMap.channel),lightMapUv:Re&&_(M.lightMap.channel),bumpMapUv:ne&&_(M.bumpMap.channel),normalMapUv:xe&&_(M.normalMap.channel),displacementMapUv:ce&&_(M.displacementMap.channel),emissiveMapUv:Ie&&_(M.emissiveMap.channel),metalnessMapUv:_e&&_(M.metalnessMap.channel),roughnessMapUv:C&&_(M.roughnessMap.channel),anisotropyMapUv:he&&_(M.anisotropyMap.channel),clearcoatMapUv:ve&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:$e&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(M.sheenRoughnessMap.channel),specularMapUv:Qe&&_(M.specularMap.channel),specularColorMapUv:je&&_(M.specularColorMap.channel),specularIntensityMapUv:dt&&_(M.specularIntensityMap.channel),transmissionMapUv:I&&_(M.transmissionMap.channel),thicknessMapUv:de&&_(M.thicknessMap.channel),alphaMapUv:J&&_(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(xe||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!F.attributes.uv&&(et||J),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:De,skinning:O.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Le,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:St,decodeVideoTexture:et&&M.map.isVideoTexture===!0&&Ze.getTransfer(M.map.colorSpace)===lt,decodeVideoTextureEmissive:Ie&&M.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(M.emissiveMap.colorSpace)===lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===gn,flipSided:M.side===ln,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ge&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&M.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)S.push(L),S.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(y(S,M),x(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){const S=g[M.type];let L;if(S){const z=jn[S];L=v_.clone(z.uniforms)}else L=M.uniforms;return L}function w(M,S){let L;for(let z=0,O=u.length;z<O;z++){const W=u[z];if(W.cacheKey===S){L=W,++L.usedTimes;break}}return L===void 0&&(L=new LM(i,S,M,s),u.push(L)),L}function E(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function A(M){c.remove(M)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:w,releaseProgram:E,releaseShaderCache:A,programs:u,dispose:R}}function OM(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function FM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Od(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Fd(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||FM),n.length>1&&n.sort(d||Od),r.length>1&&r.sort(d||Od)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function BM(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Fd,i.set(n,[a])):r>=s.length?(a=new Fd,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function zM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new we};break;case"SpotLight":t={position:new P,direction:new P,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function kM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let VM=0;function HM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function GM(i){const e=new zM,t=kM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const r=new P,s=new ke,a=new ke;function o(l){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,x=0,v=0,w=0,E=0,A=0;l.sort(HM);for(let M=0,S=l.length;M<S;M++){const L=l[M],z=L.color,O=L.intensity,W=L.distance,F=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=z.r*O,h+=z.g*O,d+=z.b*O;else if(L.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(L.sh.coefficients[k],O);A++}else if(L.isDirectionalLight){const k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const q=L.shadow,V=t.get(L);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=L.shadow.matrix,y++}n.directional[f]=k,f++}else if(L.isSpotLight){const k=e.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(z).multiplyScalar(O),k.distance=W,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,n.spot[_]=k;const q=L.shadow;if(L.map&&(n.spotLightMap[w]=L.map,w++,q.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[_]=q.matrix,L.castShadow){const V=t.get(L);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=F,v++}_++}else if(L.isRectAreaLight){const k=e.get(L);k.color.copy(z).multiplyScalar(O),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=k,m++}else if(L.isPointLight){const k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){const q=L.shadow,V=t.get(L);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,V.shadowCameraNear=q.camera.near,V.shadowCameraFar=q.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=L.shadow.matrix,x++}n.point[g]=k,g++}else if(L.isHemisphereLight){const k=e.get(L);k.skyColor.copy(L.color).multiplyScalar(O),k.groundColor.copy(L.groundColor).multiplyScalar(O),n.hemi[p]=k,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==y||R.numPointShadows!==x||R.numSpotShadows!==v||R.numSpotMaps!==w||R.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,R.directionalLength=f,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=y,R.numPointShadows=x,R.numSpotShadows=v,R.numSpotMaps=w,R.numLightProbes=A,n.version=VM++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const x=l[p];if(x.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(x.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Bd(i){const e=new GM(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function WM(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Bd(i),e.set(r,[o])):s>=a.length?(o=new Bd(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class qM extends zn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=T0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jM extends zn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const YM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KM=`uniform sampler2D shadow_pass;
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
}`;function $M(i,e,t){let n=new $u;const r=new ee,s=new ee,a=new it,o=new qM({depthPacking:A0}),c=new jM,l={},u=t.maxTextureSize,h={[Mi]:ln,[ln]:Mi,[gn]:gn},d=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:YM,fragmentShader:KM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ht;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new nt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bp;let p=this.type;this.render=function(E,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const M=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Yi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=p!==di&&this.type===di,W=p===di&&this.type!==di;for(let F=0,k=E.length;F<k;F++){const q=E[F],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ie=V.getFrameExtents();if(r.multiply(ie),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ie.x),r.x=s.x*ie.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ie.y),r.y=s.y*ie.y,V.mapSize.y=s.y)),V.map===null||O===!0||W===!0){const fe=this.type!==di?{minFilter:Qt,magFilter:Qt}:{};V.map!==null&&V.map.dispose(),V.map=new Rr(r.x,r.y,fe),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const le=V.getViewportCount();for(let fe=0;fe<le;fe++){const Le=V.getViewport(fe);a.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),z.viewport(a),V.updateMatrices(q,fe),n=V.getFrustum(),v(A,R,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===di&&y(V,R),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,S,L)};function y(E,A){const R=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Rr(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,R,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,R,f,_,null)}function x(E,A,R,M){let S=null;const L=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)S=L;else if(S=R.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=S.uuid,O=A.uuid;let W=l[z];W===void 0&&(W={},l[z]=W);let F=W[O];F===void 0&&(F=S.clone(),W[O]=F,A.addEventListener("dispose",w)),S=F}if(S.visible=A.visible,S.wireframe=A.wireframe,M===di?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=i.properties.get(S);z.light=R}return S}function v(E,A,R,M,S){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===di)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const O=e.update(E),W=E.material;if(Array.isArray(W)){const F=O.groups;for(let k=0,q=F.length;k<q;k++){const V=F[k],ie=W[V.materialIndex];if(ie&&ie.visible){const le=x(E,ie,M,S);E.onBeforeShadow(i,E,A,R,O,le,V),i.renderBufferDirect(R,null,O,le,E,V),E.onAfterShadow(i,E,A,R,O,le,V)}}}else if(W.visible){const F=x(E,W,M,S);E.onBeforeShadow(i,E,A,R,O,F,null),i.renderBufferDirect(R,null,O,F,E,null),E.onAfterShadow(i,E,A,R,O,F,null)}}const z=E.children;for(let O=0,W=z.length;O<W;O++)v(z[O],A,R,M,S)}function w(E){E.target.removeEventListener("dispose",w);for(const R in l){const M=l[R],S=E.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const ZM={[wl]:Rl,[Cl]:Dl,[Pl]:Il,[ys]:Ll,[Rl]:wl,[Dl]:Cl,[Il]:Pl,[Ll]:ys};function JM(i,e){function t(){let I=!1;const de=new it;let j=null;const J=new it(0,0,0,0);return{setMask:function(ge){j!==ge&&!I&&(i.colorMask(ge,ge,ge,ge),j=ge)},setLocked:function(ge){I=ge},setClear:function(ge,pe,Ge,St,Vt){Vt===!0&&(ge*=St,pe*=St,Ge*=St),de.set(ge,pe,Ge,St),J.equals(de)===!1&&(i.clearColor(ge,pe,Ge,St),J.copy(de))},reset:function(){I=!1,j=null,J.set(-1,0,0,0)}}}function n(){let I=!1,de=!1,j=null,J=null,ge=null;return{setReversed:function(pe){if(de!==pe){const Ge=e.get("EXT_clip_control");de?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);const St=ge;ge=null,this.setClear(St)}de=pe},getReversed:function(){return de},setTest:function(pe){pe?oe(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(pe){j!==pe&&!I&&(i.depthMask(pe),j=pe)},setFunc:function(pe){if(de&&(pe=ZM[pe]),J!==pe){switch(pe){case wl:i.depthFunc(i.NEVER);break;case Rl:i.depthFunc(i.ALWAYS);break;case Cl:i.depthFunc(i.LESS);break;case ys:i.depthFunc(i.LEQUAL);break;case Pl:i.depthFunc(i.EQUAL);break;case Ll:i.depthFunc(i.GEQUAL);break;case Dl:i.depthFunc(i.GREATER);break;case Il:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=pe}},setLocked:function(pe){I=pe},setClear:function(pe){ge!==pe&&(de&&(pe=1-pe),i.clearDepth(pe),ge=pe)},reset:function(){I=!1,j=null,J=null,ge=null,de=!1}}}function r(){let I=!1,de=null,j=null,J=null,ge=null,pe=null,Ge=null,St=null,Vt=null;return{setTest:function(at){I||(at?oe(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(at){de!==at&&!I&&(i.stencilMask(at),de=at)},setFunc:function(at,Ln,ii){(j!==at||J!==Ln||ge!==ii)&&(i.stencilFunc(at,Ln,ii),j=at,J=Ln,ge=ii)},setOp:function(at,Ln,ii){(pe!==at||Ge!==Ln||St!==ii)&&(i.stencilOp(at,Ln,ii),pe=at,Ge=Ln,St=ii)},setLocked:function(at){I=at},setClear:function(at){Vt!==at&&(i.clearStencil(at),Vt=at)},reset:function(){I=!1,de=null,j=null,J=null,ge=null,pe=null,Ge=null,St=null,Vt=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,x=null,v=null,w=null,E=null,A=new we(0,0,0),R=0,M=!1,S=null,L=null,z=null,O=null,W=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,q=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=q>=1):V.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=q>=2);let ie=null,le={};const fe=i.getParameter(i.SCISSOR_BOX),Le=i.getParameter(i.VIEWPORT),Xe=new it().fromArray(fe),Y=new it().fromArray(Le);function te(I,de,j,J){const ge=new Uint8Array(4),pe=i.createTexture();i.bindTexture(I,pe),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<j;Ge++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(de+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return pe}const Se={};Se[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),Se[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Se[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(i.DEPTH_TEST),a.setFunc(ys),ne(!1),xe(kh),oe(i.CULL_FACE),D(Yi);function oe(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function De(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function Fe(I,de){return h[I]!==de?(i.bindFramebuffer(I,de),h[I]=de,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=de),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=de),!0):!1}function Ue(I,de){let j=f,J=!1;if(I){j=d.get(de),j===void 0&&(j=[],d.set(de,j));const ge=I.textures;if(j.length!==ge.length||j[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,Ge=ge.length;pe<Ge;pe++)j[pe]=i.COLOR_ATTACHMENT0+pe;j.length=ge.length,J=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,J=!0);J&&i.drawBuffers(j)}function et(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const Q={[pr]:i.FUNC_ADD,[Jg]:i.FUNC_SUBTRACT,[Qg]:i.FUNC_REVERSE_SUBTRACT};Q[Xg]=i.MIN,Q[e0]=i.MAX;const se={[t0]:i.ZERO,[n0]:i.ONE,[i0]:i.SRC_COLOR,[Tl]:i.SRC_ALPHA,[l0]:i.SRC_ALPHA_SATURATE,[o0]:i.DST_COLOR,[s0]:i.DST_ALPHA,[r0]:i.ONE_MINUS_SRC_COLOR,[Al]:i.ONE_MINUS_SRC_ALPHA,[c0]:i.ONE_MINUS_DST_COLOR,[a0]:i.ONE_MINUS_DST_ALPHA,[u0]:i.CONSTANT_COLOR,[h0]:i.ONE_MINUS_CONSTANT_COLOR,[d0]:i.CONSTANT_ALPHA,[f0]:i.ONE_MINUS_CONSTANT_ALPHA};function D(I,de,j,J,ge,pe,Ge,St,Vt,at){if(I===Yi){_===!0&&(De(i.BLEND),_=!1);return}if(_===!1&&(oe(i.BLEND),_=!0),I!==Zg){if(I!==m||at!==M){if((p!==pr||v!==pr)&&(i.blendEquation(i.FUNC_ADD),p=pr,v=pr),at)switch(I){case br:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ko:i.blendFunc(i.ONE,i.ONE);break;case Vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case br:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ko:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,x=null,w=null,E=null,A.set(0,0,0),R=0,m=I,M=at}return}ge=ge||de,pe=pe||j,Ge=Ge||J,(de!==p||ge!==v)&&(i.blendEquationSeparate(Q[de],Q[ge]),p=de,v=ge),(j!==y||J!==x||pe!==w||Ge!==E)&&(i.blendFuncSeparate(se[j],se[J],se[pe],se[Ge]),y=j,x=J,w=pe,E=Ge),(St.equals(A)===!1||Vt!==R)&&(i.blendColor(St.r,St.g,St.b,Vt),A.copy(St),R=Vt),m=I,M=!1}function Re(I,de){I.side===gn?De(i.CULL_FACE):oe(i.CULL_FACE);let j=I.side===ln;de&&(j=!j),ne(j),I.blending===br&&I.transparent===!1?D(Yi):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const J=I.stencilWrite;o.setTest(J),J&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ie(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(I){S!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),S=I)}function xe(I){I!==Yg?(oe(i.CULL_FACE),I!==L&&(I===kh?i.cullFace(i.BACK):I===Kg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),L=I}function ce(I){I!==z&&(k&&i.lineWidth(I),z=I)}function Ie(I,de,j){I?(oe(i.POLYGON_OFFSET_FILL),(O!==de||W!==j)&&(i.polygonOffset(de,j),O=de,W=j)):De(i.POLYGON_OFFSET_FILL)}function _e(I){I?oe(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function C(I){I===void 0&&(I=i.TEXTURE0+F-1),ie!==I&&(i.activeTexture(I),ie=I)}function b(I,de,j){j===void 0&&(ie===null?j=i.TEXTURE0+F-1:j=ie);let J=le[j];J===void 0&&(J={type:void 0,texture:void 0},le[j]=J),(J.type!==I||J.texture!==de)&&(ie!==j&&(i.activeTexture(j),ie=j),i.bindTexture(I,de||Se[I]),J.type=I,J.texture=de)}function B(){const I=le[ie];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $e(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ne(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Oe(I){Xe.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Xe.copy(I))}function Me(I){Y.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Y.copy(I))}function Qe(I,de){let j=l.get(de);j===void 0&&(j=new WeakMap,l.set(de,j));let J=j.get(I);J===void 0&&(J=i.getUniformBlockIndex(de,I.name),j.set(I,J))}function je(I,de){const J=l.get(de).get(I);c.get(de)!==J&&(i.uniformBlockBinding(de,J,I.__bindingPointIndex),c.set(de,J))}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ie=null,le={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,x=null,v=null,w=null,E=null,A=new we(0,0,0),R=0,M=!1,S=null,L=null,z=null,O=null,W=null,Xe.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:oe,disable:De,bindFramebuffer:Fe,drawBuffers:Ue,useProgram:et,setBlending:D,setMaterial:Re,setFlipSided:ne,setCullFace:xe,setLineWidth:ce,setPolygonOffset:Ie,setScissorTest:_e,activeTexture:C,bindTexture:b,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:X,texImage2D:ye,texImage3D:Ne,updateUBOMapping:Qe,uniformBlockBinding:je,texStorage2D:$e,texStorage3D:re,texSubImage2D:Z,texSubImage3D:be,compressedTexSubImage2D:he,compressedTexSubImage3D:ve,scissor:Oe,viewport:Me,reset:dt}}function zd(i,e,t,n){const r=QM(n);switch(t){case Lp:return i*e;case Ip:return i*e;case Np:return i*e*2;case Wu:return i*e/r.components*r.byteLength;case qu:return i*e/r.components*r.byteLength;case Up:return i*e*2/r.components*r.byteLength;case ju:return i*e*2/r.components*r.byteLength;case Dp:return i*e*3/r.components*r.byteLength;case Rn:return i*e*4/r.components*r.byteLength;case Yu:return i*e*4/r.components*r.byteLength;case wo:case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Co:case Po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fl:case zl:return Math.max(i,16)*Math.max(e,8)/4;case Ol:case Bl:return Math.max(i,8)*Math.max(e,8)/2;case kl:case Vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ql:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case jl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case $l:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case eu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case tu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case nu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Lo:case iu:case ru:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Op:case su:return Math.ceil(i/4)*Math.ceil(e/4)*8;case au:case ou:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function QM(i){switch(i){case Si:case Rp:return{byteLength:1,components:1};case Sa:case Cp:case Da:return{byteLength:2,components:1};case Hu:case Gu:return{byteLength:2,components:4};case wr:case Vu:case Bn:return{byteLength:4,components:1};case Pp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function XM(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ee,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return f?new OffscreenCanvas(C,b):Ta("canvas")}function _(C,b,B){let $=1;const X=_e(C);if((X.width>B||X.height>B)&&($=B/Math.max(X.width,X.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor($*X.width),be=Math.floor($*X.height);h===void 0&&(h=g(Z,be));const he=b?g(Z,be):h;return he.width=Z,he.height=be,he.getContext("2d").drawImage(C,0,0,Z,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+Z+"x"+be+")."),he}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(C,b,B,$,X=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=b;if(b===i.RED&&(B===i.FLOAT&&(Z=i.R32F),B===i.HALF_FLOAT&&(Z=i.R16F),B===i.UNSIGNED_BYTE&&(Z=i.R8)),b===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.R8UI),B===i.UNSIGNED_SHORT&&(Z=i.R16UI),B===i.UNSIGNED_INT&&(Z=i.R32UI),B===i.BYTE&&(Z=i.R8I),B===i.SHORT&&(Z=i.R16I),B===i.INT&&(Z=i.R32I)),b===i.RG&&(B===i.FLOAT&&(Z=i.RG32F),B===i.HALF_FLOAT&&(Z=i.RG16F),B===i.UNSIGNED_BYTE&&(Z=i.RG8)),b===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RG8UI),B===i.UNSIGNED_SHORT&&(Z=i.RG16UI),B===i.UNSIGNED_INT&&(Z=i.RG32UI),B===i.BYTE&&(Z=i.RG8I),B===i.SHORT&&(Z=i.RG16I),B===i.INT&&(Z=i.RG32I)),b===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),B===i.UNSIGNED_INT&&(Z=i.RGB32UI),B===i.BYTE&&(Z=i.RGB8I),B===i.SHORT&&(Z=i.RGB16I),B===i.INT&&(Z=i.RGB32I)),b===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),B===i.UNSIGNED_INT&&(Z=i.RGBA32UI),B===i.BYTE&&(Z=i.RGBA8I),B===i.SHORT&&(Z=i.RGBA16I),B===i.INT&&(Z=i.RGBA32I)),b===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),b===i.RGBA){const be=X?ec:Ze.getTransfer($);B===i.FLOAT&&(Z=i.RGBA32F),B===i.HALF_FLOAT&&(Z=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Z=be===lt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(C,b){let B;return C?b===null||b===wr||b===Es?B=i.DEPTH24_STENCIL8:b===Bn?B=i.DEPTH32F_STENCIL8:b===Sa&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===wr||b===Es?B=i.DEPTH_COMPONENT24:b===Bn?B=i.DEPTH_COMPONENT32F:b===Sa&&(B=i.DEPTH_COMPONENT16),B}function w(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Qt&&C.minFilter!==xn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function E(C){const b=C.target;b.removeEventListener("dispose",E),R(b),b.isVideoTexture&&u.delete(b)}function A(C){const b=C.target;b.removeEventListener("dispose",A),S(b)}function R(C){const b=n.get(C);if(b.__webglInit===void 0)return;const B=C.source,$=d.get(B);if($){const X=$[b.__cacheKey];X.usedTimes--,X.usedTimes===0&&M(C),Object.keys($).length===0&&d.delete(B)}n.remove(C)}function M(C){const b=n.get(C);i.deleteTexture(b.__webglTexture);const B=C.source,$=d.get(B);delete $[b.__cacheKey],a.memory.textures--}function S(C){const b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let X=0;X<b.__webglFramebuffer[$].length;X++)i.deleteFramebuffer(b.__webglFramebuffer[$][X]);else i.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)i.deleteFramebuffer(b.__webglFramebuffer[$]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const B=C.textures;for(let $=0,X=B.length;$<X;$++){const Z=n.get(B[$]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(B[$])}n.remove(C)}let L=0;function z(){L=0}function O(){const C=L;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),L+=1,C}function W(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function F(C,b){const B=n.get(C);if(C.isVideoTexture&&ce(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,C,b);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+b)}function k(C,b){const B=n.get(C);if(C.version>0&&B.__version!==C.version){Y(B,C,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+b)}function q(C,b){const B=n.get(C);if(C.version>0&&B.__version!==C.version){Y(B,C,b);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+b)}function V(C,b){const B=n.get(C);if(C.version>0&&B.__version!==C.version){te(B,C,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+b)}const ie={[bs]:i.REPEAT,[Hi]:i.CLAMP_TO_EDGE,[Vo]:i.MIRRORED_REPEAT},le={[Qt]:i.NEAREST,[wp]:i.NEAREST_MIPMAP_NEAREST,[na]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[Ao]:i.LINEAR_MIPMAP_NEAREST,[gi]:i.LINEAR_MIPMAP_LINEAR},fe={[R0]:i.NEVER,[N0]:i.ALWAYS,[C0]:i.LESS,[zp]:i.LEQUAL,[P0]:i.EQUAL,[I0]:i.GEQUAL,[L0]:i.GREATER,[D0]:i.NOTEQUAL};function Le(C,b){if(b.type===Bn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===xn||b.magFilter===Ao||b.magFilter===na||b.magFilter===gi||b.minFilter===xn||b.minFilter===Ao||b.minFilter===na||b.minFilter===gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ie[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ie[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ie[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,le[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,le[b.minFilter]),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,fe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Qt||b.minFilter!==na&&b.minFilter!==gi||b.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Xe(C,b){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",E));const $=b.source;let X=d.get($);X===void 0&&(X={},d.set($,X));const Z=W(b);if(Z!==C.__cacheKey){X[Z]===void 0&&(X[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),X[Z].usedTimes++;const be=X[C.__cacheKey];be!==void 0&&(X[C.__cacheKey].usedTimes--,be.usedTimes===0&&M(b)),C.__cacheKey=Z,C.__webglTexture=X[Z].texture}return B}function Y(C,b,B){let $=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=i.TEXTURE_3D);const X=Xe(C,b),Z=b.source;t.bindTexture($,C.__webglTexture,i.TEXTURE0+B);const be=n.get(Z);if(Z.version!==be.__version||X===!0){t.activeTexture(i.TEXTURE0+B);const he=Ze.getPrimaries(Ze.workingColorSpace),ve=b.colorSpace===Bi?null:Ze.getPrimaries(b.colorSpace),$e=b.colorSpace===Bi||he===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let re=_(b.image,!1,r.maxTextureSize);re=Ie(b,re);const ye=s.convert(b.format,b.colorSpace),Ne=s.convert(b.type);let Oe=x(b.internalFormat,ye,Ne,b.colorSpace,b.isVideoTexture);Le($,b);let Me;const Qe=b.mipmaps,je=b.isVideoTexture!==!0,dt=be.__version===void 0||X===!0,I=Z.dataReady,de=w(b,re);if(b.isDepthTexture)Oe=v(b.format===Ts,b.type),dt&&(je?t.texStorage2D(i.TEXTURE_2D,1,Oe,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Oe,re.width,re.height,0,ye,Ne,null));else if(b.isDataTexture)if(Qe.length>0){je&&dt&&t.texStorage2D(i.TEXTURE_2D,de,Oe,Qe[0].width,Qe[0].height);for(let j=0,J=Qe.length;j<J;j++)Me=Qe[j],je?I&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Me.width,Me.height,ye,Ne,Me.data):t.texImage2D(i.TEXTURE_2D,j,Oe,Me.width,Me.height,0,ye,Ne,Me.data);b.generateMipmaps=!1}else je?(dt&&t.texStorage2D(i.TEXTURE_2D,de,Oe,re.width,re.height),I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re.width,re.height,ye,Ne,re.data)):t.texImage2D(i.TEXTURE_2D,0,Oe,re.width,re.height,0,ye,Ne,re.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){je&&dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Oe,Qe[0].width,Qe[0].height,re.depth);for(let j=0,J=Qe.length;j<J;j++)if(Me=Qe[j],b.format!==Rn)if(ye!==null)if(je){if(I)if(b.layerUpdates.size>0){const ge=zd(Me.width,Me.height,b.format,b.type);for(const pe of b.layerUpdates){const Ge=Me.data.subarray(pe*ge/Me.data.BYTES_PER_ELEMENT,(pe+1)*ge/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,pe,Me.width,Me.height,1,ye,Ge)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Me.width,Me.height,re.depth,ye,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Oe,Me.width,Me.height,re.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Me.width,Me.height,re.depth,ye,Ne,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,Oe,Me.width,Me.height,re.depth,0,ye,Ne,Me.data)}else{je&&dt&&t.texStorage2D(i.TEXTURE_2D,de,Oe,Qe[0].width,Qe[0].height);for(let j=0,J=Qe.length;j<J;j++)Me=Qe[j],b.format!==Rn?ye!==null?je?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,Me.width,Me.height,ye,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,j,Oe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?I&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Me.width,Me.height,ye,Ne,Me.data):t.texImage2D(i.TEXTURE_2D,j,Oe,Me.width,Me.height,0,ye,Ne,Me.data)}else if(b.isDataArrayTexture)if(je){if(dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Oe,re.width,re.height,re.depth),I)if(b.layerUpdates.size>0){const j=zd(re.width,re.height,b.format,b.type);for(const J of b.layerUpdates){const ge=re.data.subarray(J*j/re.data.BYTES_PER_ELEMENT,(J+1)*j/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,re.width,re.height,1,ye,Ne,ge)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ye,Ne,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,re.width,re.height,re.depth,0,ye,Ne,re.data);else if(b.isData3DTexture)je?(dt&&t.texStorage3D(i.TEXTURE_3D,de,Oe,re.width,re.height,re.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ye,Ne,re.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,re.width,re.height,re.depth,0,ye,Ne,re.data);else if(b.isFramebufferTexture){if(dt)if(je)t.texStorage2D(i.TEXTURE_2D,de,Oe,re.width,re.height);else{let j=re.width,J=re.height;for(let ge=0;ge<de;ge++)t.texImage2D(i.TEXTURE_2D,ge,Oe,j,J,0,ye,Ne,null),j>>=1,J>>=1}}else if(Qe.length>0){if(je&&dt){const j=_e(Qe[0]);t.texStorage2D(i.TEXTURE_2D,de,Oe,j.width,j.height)}for(let j=0,J=Qe.length;j<J;j++)Me=Qe[j],je?I&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ye,Ne,Me):t.texImage2D(i.TEXTURE_2D,j,Oe,ye,Ne,Me);b.generateMipmaps=!1}else if(je){if(dt){const j=_e(re);t.texStorage2D(i.TEXTURE_2D,de,Oe,j.width,j.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,Ne,re)}else t.texImage2D(i.TEXTURE_2D,0,Oe,ye,Ne,re);m(b)&&p($),be.__version=Z.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function te(C,b,B){if(b.image.length!==6)return;const $=Xe(C,b),X=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+B);const Z=n.get(X);if(X.version!==Z.__version||$===!0){t.activeTexture(i.TEXTURE0+B);const be=Ze.getPrimaries(Ze.workingColorSpace),he=b.colorSpace===Bi?null:Ze.getPrimaries(b.colorSpace),ve=b.colorSpace===Bi||be===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const $e=b.isCompressedTexture||b.image[0].isCompressedTexture,re=b.image[0]&&b.image[0].isDataTexture,ye=[];for(let J=0;J<6;J++)!$e&&!re?ye[J]=_(b.image[J],!0,r.maxCubemapSize):ye[J]=re?b.image[J].image:b.image[J],ye[J]=Ie(b,ye[J]);const Ne=ye[0],Oe=s.convert(b.format,b.colorSpace),Me=s.convert(b.type),Qe=x(b.internalFormat,Oe,Me,b.colorSpace),je=b.isVideoTexture!==!0,dt=Z.__version===void 0||$===!0,I=X.dataReady;let de=w(b,Ne);Le(i.TEXTURE_CUBE_MAP,b);let j;if($e){je&&dt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Qe,Ne.width,Ne.height);for(let J=0;J<6;J++){j=ye[J].mipmaps;for(let ge=0;ge<j.length;ge++){const pe=j[ge];b.format!==Rn?Oe!==null?je?I&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge,0,0,pe.width,pe.height,Oe,pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge,Qe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge,0,0,pe.width,pe.height,Oe,Me,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge,Qe,pe.width,pe.height,0,Oe,Me,pe.data)}}}else{if(j=b.mipmaps,je&&dt){j.length>0&&de++;const J=_e(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Qe,J.width,J.height)}for(let J=0;J<6;J++)if(re){je?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ye[J].width,ye[J].height,Oe,Me,ye[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Qe,ye[J].width,ye[J].height,0,Oe,Me,ye[J].data);for(let ge=0;ge<j.length;ge++){const Ge=j[ge].image[J].image;je?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge+1,0,0,Ge.width,Ge.height,Oe,Me,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge+1,Qe,Ge.width,Ge.height,0,Oe,Me,Ge.data)}}else{je?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Oe,Me,ye[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Qe,Oe,Me,ye[J]);for(let ge=0;ge<j.length;ge++){const pe=j[ge];je?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge+1,0,0,Oe,Me,pe.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge+1,Qe,Oe,Me,pe.image[J])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),Z.__version=X.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Se(C,b,B,$,X,Z){const be=s.convert(B.format,B.colorSpace),he=s.convert(B.type),ve=x(B.internalFormat,be,he,B.colorSpace),$e=n.get(b),re=n.get(B);if(re.__renderTarget=b,!$e.__hasExternalTextures){const ye=Math.max(1,b.width>>Z),Ne=Math.max(1,b.height>>Z);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?t.texImage3D(X,Z,ve,ye,Ne,b.depth,0,be,he,null):t.texImage2D(X,Z,ve,ye,Ne,0,be,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),xe(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,X,re.__webglTexture,0,ne(b)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,X,re.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(C,b,B){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer){const $=b.depthTexture,X=$&&$.isDepthTexture?$.type:null,Z=v(b.stencilBuffer,X),be=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=ne(b);xe(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,Z,b.width,b.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,Z,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Z,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,C)}else{const $=b.textures;for(let X=0;X<$.length;X++){const Z=$[X],be=s.convert(Z.format,Z.colorSpace),he=s.convert(Z.type),ve=x(Z.internalFormat,be,he,Z.colorSpace),$e=ne(b);B&&xe(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,ve,b.width,b.height):xe(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e,ve,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ve,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(b.depthTexture);$.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),F(b.depthTexture,0);const X=$.__webglTexture,Z=ne(b);if(b.depthTexture.format===cs)xe(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0);else if(b.depthTexture.format===Ts)xe(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function Fe(C){const b=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){const X=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",X)};$.addEventListener("dispose",X),b.__depthDisposeCallback=X}b.__boundDepthTexture=$}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");De(b.__webglFramebuffer,C)}else if(B){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=i.createRenderbuffer(),oe(b.__webglDepthbuffer[$],C,!1);else{const X=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),oe(b.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,X)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(C,b,B){const $=n.get(C);b!==void 0&&Se($.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Fe(C)}function et(C){const b=C.texture,B=n.get(C),$=n.get(b);C.addEventListener("dispose",A);const X=C.textures,Z=C.isWebGLCubeRenderTarget===!0,be=X.length>1;if(be||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=b.version,a.memory.textures++),Z){B.__webglFramebuffer=[];for(let he=0;he<6;he++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[he]=[];for(let ve=0;ve<b.mipmaps.length;ve++)B.__webglFramebuffer[he][ve]=i.createFramebuffer()}else B.__webglFramebuffer[he]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let he=0;he<b.mipmaps.length;he++)B.__webglFramebuffer[he]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(be)for(let he=0,ve=X.length;he<ve;he++){const $e=n.get(X[he]);$e.__webglTexture===void 0&&($e.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&xe(C)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let he=0;he<X.length;he++){const ve=X[he];B.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[he]);const $e=s.convert(ve.format,ve.colorSpace),re=s.convert(ve.type),ye=x(ve.internalFormat,$e,re,ve.colorSpace,C.isXRRenderTarget===!0),Ne=ne(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,ye,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,B.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(B.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Le(i.TEXTURE_CUBE_MAP,b);for(let he=0;he<6;he++)if(b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)Se(B.__webglFramebuffer[he][ve],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,ve);else Se(B.__webglFramebuffer[he],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(b)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let he=0,ve=X.length;he<ve;he++){const $e=X[he],re=n.get($e);t.bindTexture(i.TEXTURE_2D,re.__webglTexture),Le(i.TEXTURE_2D,$e),Se(B.__webglFramebuffer,C,$e,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,0),m($e)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,$.__webglTexture),Le(he,b),b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)Se(B.__webglFramebuffer[ve],C,b,i.COLOR_ATTACHMENT0,he,ve);else Se(B.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,he,0);m(b)&&p(he),t.unbindTexture()}C.depthBuffer&&Fe(C)}function Q(C){const b=C.textures;for(let B=0,$=b.length;B<$;B++){const X=b[B];if(m(X)){const Z=y(C),be=n.get(X).__webglTexture;t.bindTexture(Z,be),p(Z),t.unbindTexture()}}}const se=[],D=[];function Re(C){if(C.samples>0){if(xe(C)===!1){const b=C.textures,B=C.width,$=C.height;let X=i.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(C),he=b.length>1;if(he)for(let ve=0;ve<b.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ve=0;ve<b.length;ve++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[ve]);const $e=n.get(b[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$e,0)}i.blitFramebuffer(0,0,B,$,0,0,B,$,X,i.NEAREST),c===!0&&(se.length=0,D.length=0,se.push(i.COLOR_ATTACHMENT0+ve),C.depthBuffer&&C.resolveDepthBuffer===!1&&(se.push(Z),D.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let ve=0;ve<b.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,be.__webglColorRenderbuffer[ve]);const $e=n.get(b[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,$e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const b=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ne(C){return Math.min(r.maxSamples,C.samples)}function xe(C){const b=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ce(C){const b=a.render.frame;u.get(C)!==b&&(u.set(C,b),C.update())}function Ie(C,b){const B=C.colorSpace,$=C.format,X=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==tn&&B!==Bi&&(Ze.getTransfer(B)===lt?($!==Rn||X!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),b}function _e(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=F,this.setTexture2DArray=k,this.setTexture3D=q,this.setTextureCube=V,this.rebindTextures=Ue,this.setupRenderTarget=et,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=xe}function eS(i,e){function t(n,r=Bi){let s;const a=Ze.getTransfer(r);if(n===Si)return i.UNSIGNED_BYTE;if(n===Hu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rp)return i.BYTE;if(n===Cp)return i.SHORT;if(n===Sa)return i.UNSIGNED_SHORT;if(n===Vu)return i.INT;if(n===wr)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===Da)return i.HALF_FLOAT;if(n===Lp)return i.ALPHA;if(n===Dp)return i.RGB;if(n===Rn)return i.RGBA;if(n===Ip)return i.LUMINANCE;if(n===Np)return i.LUMINANCE_ALPHA;if(n===cs)return i.DEPTH_COMPONENT;if(n===Ts)return i.DEPTH_STENCIL;if(n===Wu)return i.RED;if(n===qu)return i.RED_INTEGER;if(n===Up)return i.RG;if(n===ju)return i.RG_INTEGER;if(n===Yu)return i.RGBA_INTEGER;if(n===wo||n===Ro||n===Co||n===Po)if(a===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===wo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===wo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ro)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Co)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Po)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ol||n===Fl||n===Bl||n===zl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ol)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kl||n===Vl||n===Hl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===kl||n===Vl)return a===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Hl)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Gl||n===Wl||n===ql||n===jl||n===Yl||n===Kl||n===$l||n===Zl||n===Jl||n===Ql||n===Xl||n===eu||n===tu||n===nu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Gl)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wl)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ql)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jl)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yl)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kl)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$l)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zl)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jl)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ql)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xl)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===eu)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tu)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nu)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lo||n===iu||n===ru)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Lo)return a===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===iu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ru)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Op||n===su||n===au||n===ou)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Lo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===su)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===au)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ou)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class tS extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bt extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nS={type:"move"};class Kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(nS)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const iS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rS=`
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

}`;class sS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Ot,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Qn({vertexShader:iS,fragmentShader:rS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nt(new Ia(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aS extends Ds{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=new sS,m=t.getContextAttributes();let p=null,y=null;const x=[],v=[],w=new ee;let E=null;const A=new $t;A.viewport=new it;const R=new $t;R.viewport=new it;const M=[A,R],S=new tS;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=x[Y];return te===void 0&&(te=new Kc,x[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=x[Y];return te===void 0&&(te=new Kc,x[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=x[Y];return te===void 0&&(te=new Kc,x[Y]=te),te.getHandSpace()};function O(Y){const te=v.indexOf(Y.inputSource);if(te===-1)return;const Se=x[te];Se!==void 0&&(Se.update(Y.inputSource,Y.frame,l||a),Se.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",F);for(let Y=0;Y<x.length;Y++){const te=v[Y];te!==null&&(v[Y]=null,x[Y].disconnect(te))}L=null,z=null,_.reset(),e.setRenderTarget(p),f=null,d=null,h=null,r=null,y=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",W),r.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Rr(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,Se=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?Ts:cs,Se=m.stencil?Es:wr);const De={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(De),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Rr(d.textureWidth,d.textureHeight,{format:Rn,type:Si,depthTexture:new Jp(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Xe.setContext(r),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function F(Y){for(let te=0;te<Y.removed.length;te++){const Se=Y.removed[te],oe=v.indexOf(Se);oe>=0&&(v[oe]=null,x[oe].disconnect(Se))}for(let te=0;te<Y.added.length;te++){const Se=Y.added[te];let oe=v.indexOf(Se);if(oe===-1){for(let Fe=0;Fe<x.length;Fe++)if(Fe>=v.length){v.push(Se),oe=Fe;break}else if(v[Fe]===null){v[Fe]=Se,oe=Fe;break}if(oe===-1)break}const De=x[oe];De&&De.connect(Se)}}const k=new P,q=new P;function V(Y,te,Se){k.setFromMatrixPosition(te.matrixWorld),q.setFromMatrixPosition(Se.matrixWorld);const oe=k.distanceTo(q),De=te.projectionMatrix.elements,Fe=Se.projectionMatrix.elements,Ue=De[14]/(De[10]-1),et=De[14]/(De[10]+1),Q=(De[9]+1)/De[5],se=(De[9]-1)/De[5],D=(De[8]-1)/De[0],Re=(Fe[8]+1)/Fe[0],ne=Ue*D,xe=Ue*Re,ce=oe/(-D+Re),Ie=ce*-D;if(te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ie),Y.translateZ(ce),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),De[10]===-1)Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const _e=Ue+ce,C=et+ce,b=ne-Ie,B=xe+(oe-Ie),$=Q*et/C*_e,X=se*et/C*_e;Y.projectionMatrix.makePerspective(b,B,$,X,_e,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ie(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let te=Y.near,Se=Y.far;_.texture!==null&&(_.depthNear>0&&(te=_.depthNear),_.depthFar>0&&(Se=_.depthFar)),S.near=R.near=A.near=te,S.far=R.far=A.far=Se,(L!==S.near||z!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,z=S.far),A.layers.mask=Y.layers.mask|2,R.layers.mask=Y.layers.mask|4,S.layers.mask=A.layers.mask|R.layers.mask;const oe=Y.parent,De=S.cameras;ie(S,oe);for(let Fe=0;Fe<De.length;Fe++)ie(De[Fe],oe);De.length===2?V(S,A,R):S.projectionMatrix.copy(A.projectionMatrix),le(Y,S,oe)};function le(Y,te,Se){Se===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(Se.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=As*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let fe=null;function Le(Y,te){if(u=te.getViewerPose(l||a),g=te,u!==null){const Se=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let oe=!1;Se.length!==S.cameras.length&&(S.cameras.length=0,oe=!0);for(let Fe=0;Fe<Se.length;Fe++){const Ue=Se[Fe];let et=null;if(f!==null)et=f.getViewport(Ue);else{const se=h.getViewSubImage(d,Ue);et=se.viewport,Fe===0&&(e.setRenderTargetTextures(y,se.colorTexture,d.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(y))}let Q=M[Fe];Q===void 0&&(Q=new $t,Q.layers.enable(Fe),Q.viewport=new it,M[Fe]=Q),Q.matrix.fromArray(Ue.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Ue.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(et.x,et.y,et.width,et.height),Fe===0&&(S.matrix.copy(Q.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),oe===!0&&S.cameras.push(Q)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const Fe=h.getDepthInformation(Se[0]);Fe&&Fe.isValid&&Fe.texture&&_.init(e,Fe,r.renderState)}}for(let Se=0;Se<x.length;Se++){const oe=v[Se],De=x[Se];oe!==null&&De!==void 0&&De.update(oe,te,l||a)}fe&&fe(Y,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const Xe=new Zp;Xe.setAnimationLoop(Le),this.setAnimationLoop=function(Y){fe=Y},this.dispose=function(){}}}const lr=new Jn,oS=new ke;function cS(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Yp(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),x=y.envMap,v=y.envMapRotation;x&&(m.envMap.value=x,lr.copy(v),lr.x*=-1,lr.y*=-1,lr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),m.envMapRotation.value.setFromMatrix4(oS.makeRotationFromEuler(lr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function lS(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function l(y,x){let v=r[y.id];v===void 0&&(g(y),v=u(y),r[y.id]=v,y.addEventListener("dispose",m));const w=x.program;n.updateUBOMapping(y,w);const E=e.render.frame;s[y.id]!==E&&(d(y),s[y.id]=E)}function u(y){const x=h();y.__bindingPointIndex=x;const v=i.createBuffer(),w=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,w,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=r[y.id],v=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,A=v.length;E<A;E++){const R=Array.isArray(v[E])?v[E]:[v[E]];for(let M=0,S=R.length;M<S;M++){const L=R[M];if(f(L,E,M,w)===!0){const z=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let F=0;F<O.length;F++){const k=O[F],q=_(k);typeof k=="number"||typeof k=="boolean"?(L.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,z+W,L.__data)):k.isMatrix3?(L.__data[0]=k.elements[0],L.__data[1]=k.elements[1],L.__data[2]=k.elements[2],L.__data[3]=0,L.__data[4]=k.elements[3],L.__data[5]=k.elements[4],L.__data[6]=k.elements[5],L.__data[7]=0,L.__data[8]=k.elements[6],L.__data[9]=k.elements[7],L.__data[10]=k.elements[8],L.__data[11]=0):(k.toArray(L.__data,W),W+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,x,v,w){const E=y.value,A=x+"_"+v;if(w[A]===void 0)return typeof E=="number"||typeof E=="boolean"?w[A]=E:w[A]=E.clone(),!0;{const R=w[A];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return w[A]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(y){const x=y.uniforms;let v=0;const w=16;for(let A=0,R=x.length;A<R;A++){const M=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,L=M.length;S<L;S++){const z=M[S],O=Array.isArray(z.value)?z.value:[z.value];for(let W=0,F=O.length;W<F;W++){const k=O[W],q=_(k),V=v%w,ie=V%q.boundary,le=V+ie;v+=ie,le!==0&&w-le<q.storage&&(v+=w-le),z.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=q.storage}}}const E=v%w;return E>0&&(v+=w-E),y.__size=v,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}class uS{constructor(e={}){const{canvas:t=Q0(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this.toneMapping=Ki,this.toneMappingExposure=1;const v=this;let w=!1,E=0,A=0,R=null,M=-1,S=null;const L=new it,z=new it;let O=null;const W=new we(0);let F=0,k=t.width,q=t.height,V=1,ie=null,le=null;const fe=new it(0,0,k,q),Le=new it(0,0,k,q);let Xe=!1;const Y=new $u;let te=!1,Se=!1;const oe=new ke,De=new ke,Fe=new P,Ue=new it,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function se(){return R===null?V:1}let D=n;function Re(T,N){return t.getContext(T,N)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ku}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",pe,!1),D===null){const N="webgl2";if(D=Re(N,T),D===null)throw Re(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ne,xe,ce,Ie,_e,C,b,B,$,X,Z,be,he,ve,$e,re,ye,Ne,Oe,Me,Qe,je,dt,I;function de(){ne=new my(D),ne.init(),je=new eS(D,ne),xe=new ly(D,ne,e,je),ce=new JM(D,ne),xe.reverseDepthBuffer&&d&&ce.buffers.depth.setReversed(!0),Ie=new vy(D),_e=new OM,C=new XM(D,ne,ce,_e,xe,je,Ie),b=new hy(v),B=new py(v),$=new T_(D),dt=new oy(D,$),X=new gy(D,$,Ie,dt),Z=new yy(D,X,$,Ie),Oe=new xy(D,xe,C),re=new uy(_e),be=new UM(v,b,B,ne,xe,dt,re),he=new cS(v,_e),ve=new BM,$e=new WM(ne),Ne=new ay(v,b,B,ce,Z,f,c),ye=new $M(v,Z,xe),I=new lS(D,Ie,xe,ce),Me=new cy(D,ne,Ie),Qe=new _y(D,ne,Ie),Ie.programs=be.programs,v.capabilities=xe,v.extensions=ne,v.properties=_e,v.renderLists=ve,v.shadowMap=ye,v.state=ce,v.info=Ie}de();const j=new aS(v,D);this.xr=j,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=ne.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ne.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(k,q,!1))},this.getSize=function(T){return T.set(k,q)},this.setSize=function(T,N,H=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,q=N,t.width=Math.floor(T*V),t.height=Math.floor(N*V),H===!0&&(t.style.width=T+"px",t.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(k*V,q*V).floor()},this.setDrawingBufferSize=function(T,N,H){k=T,q=N,V=H,t.width=Math.floor(T*H),t.height=Math.floor(N*H),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(fe)},this.setViewport=function(T,N,H,G){T.isVector4?fe.set(T.x,T.y,T.z,T.w):fe.set(T,N,H,G),ce.viewport(L.copy(fe).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(Le)},this.setScissor=function(T,N,H,G){T.isVector4?Le.set(T.x,T.y,T.z,T.w):Le.set(T,N,H,G),ce.scissor(z.copy(Le).multiplyScalar(V).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(T){ce.setScissorTest(Xe=T)},this.setOpaqueSort=function(T){ie=T},this.setTransparentSort=function(T){le=T},this.getClearColor=function(T){return T.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(T=!0,N=!0,H=!0){let G=0;if(T){let U=!1;if(R!==null){const ae=R.texture.format;U=ae===Yu||ae===ju||ae===qu}if(U){const ae=R.texture.type,me=ae===Si||ae===wr||ae===Sa||ae===Es||ae===Hu||ae===Gu,Ee=Ne.getClearColor(),Te=Ne.getClearAlpha(),Be=Ee.r,We=Ee.g,Ae=Ee.b;me?(g[0]=Be,g[1]=We,g[2]=Ae,g[3]=Te,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Be,_[1]=We,_[2]=Ae,_[3]=Te,D.clearBufferiv(D.COLOR,0,_))}else G|=D.COLOR_BUFFER_BIT}N&&(G|=D.DEPTH_BUFFER_BIT),H&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ve.dispose(),$e.dispose(),_e.dispose(),b.dispose(),B.dispose(),Z.dispose(),dt.dispose(),I.dispose(),be.dispose(),j.dispose(),j.removeEventListener("sessionstart",gh),j.removeEventListener("sessionend",_h),tr.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const T=Ie.autoReset,N=ye.enabled,H=ye.autoUpdate,G=ye.needsUpdate,U=ye.type;de(),Ie.autoReset=T,ye.enabled=N,ye.autoUpdate=H,ye.needsUpdate=G,ye.type=U}function pe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ge(T){const N=T.target;N.removeEventListener("dispose",Ge),St(N)}function St(T){Vt(T),_e.remove(T)}function Vt(T){const N=_e.get(T).programs;N!==void 0&&(N.forEach(function(H){be.releaseProgram(H)}),T.isShaderMaterial&&be.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,H,G,U,ae){N===null&&(N=et);const me=U.isMesh&&U.matrixWorld.determinant()<0,Ee=Pm(T,N,H,G,U);ce.setMaterial(G,me);let Te=H.index,Be=1;if(G.wireframe===!0){if(Te=X.getWireframeAttribute(H),Te===void 0)return;Be=2}const We=H.drawRange,Ae=H.attributes.position;let tt=We.start*Be,ft=(We.start+We.count)*Be;ae!==null&&(tt=Math.max(tt,ae.start*Be),ft=Math.min(ft,(ae.start+ae.count)*Be)),Te!==null?(tt=Math.max(tt,0),ft=Math.min(ft,Te.count)):Ae!=null&&(tt=Math.max(tt,0),ft=Math.min(ft,Ae.count));const gt=ft-tt;if(gt<0||gt===1/0)return;dt.setup(U,G,Ee,H,Te);let nn,rt=Me;if(Te!==null&&(nn=$.get(Te),rt=Qe,rt.setIndex(nn)),U.isMesh)G.wireframe===!0?(ce.setLineWidth(G.wireframeLinewidth*se()),rt.setMode(D.LINES)):rt.setMode(D.TRIANGLES);else if(U.isLine){let Pe=G.linewidth;Pe===void 0&&(Pe=1),ce.setLineWidth(Pe*se()),U.isLineSegments?rt.setMode(D.LINES):U.isLineLoop?rt.setMode(D.LINE_LOOP):rt.setMode(D.LINE_STRIP)}else U.isPoints?rt.setMode(D.POINTS):U.isSprite&&rt.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)rt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))rt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Pe=U._multiDrawStarts,ri=U._multiDrawCounts,st=U._multiDrawCount,Dn=Te?$.get(Te).bytesPerElement:1,Lr=_e.get(G).currentProgram.getUniforms();for(let hn=0;hn<st;hn++)Lr.setValue(D,"_gl_DrawID",hn),rt.render(Pe[hn]/Dn,ri[hn])}else if(U.isInstancedMesh)rt.renderInstances(tt,gt,U.count);else if(H.isInstancedBufferGeometry){const Pe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ri=Math.min(H.instanceCount,Pe);rt.renderInstances(tt,gt,ri)}else rt.render(tt,gt)};function at(T,N,H){T.transparent===!0&&T.side===gn&&T.forceSinglePass===!1?(T.side=ln,T.needsUpdate=!0,Fa(T,N,H),T.side=Mi,T.needsUpdate=!0,Fa(T,N,H),T.side=gn):Fa(T,N,H)}this.compile=function(T,N,H=null){H===null&&(H=T),p=$e.get(H),p.init(N),x.push(p),H.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),T!==H&&T.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const G=new Set;return T.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ae=U.material;if(ae)if(Array.isArray(ae))for(let me=0;me<ae.length;me++){const Ee=ae[me];at(Ee,H,U),G.add(Ee)}else at(ae,H,U),G.add(ae)}),x.pop(),p=null,G},this.compileAsync=function(T,N,H=null){const G=this.compile(T,N,H);return new Promise(U=>{function ae(){if(G.forEach(function(me){_e.get(me).currentProgram.isReady()&&G.delete(me)}),G.size===0){U(T);return}setTimeout(ae,10)}ne.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Ln=null;function ii(T){Ln&&Ln(T)}function gh(){tr.stop()}function _h(){tr.start()}const tr=new Zp;tr.setAnimationLoop(ii),typeof self<"u"&&tr.setContext(self),this.setAnimationLoop=function(T){Ln=T,j.setAnimationLoop(T),T===null?tr.stop():tr.start()},j.addEventListener("sessionstart",gh),j.addEventListener("sessionend",_h),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(N),N=j.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,N,R),p=$e.get(T,x.length),p.init(N),x.push(p),De.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Y.setFromProjectionMatrix(De),Se=this.localClippingEnabled,te=re.init(this.clippingPlanes,Se),m=ve.get(T,y.length),m.init(),y.push(m),j.enabled===!0&&j.isPresenting===!0){const ae=v.xr.getDepthSensingMesh();ae!==null&&hc(ae,N,-1/0,v.sortObjects)}hc(T,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ie,le),Q=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Q&&Ne.addToRenderList(m,T),this.info.render.frame++,te===!0&&re.beginShadows();const H=p.state.shadowsArray;ye.render(H,T,N),te===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,U=m.transmissive;if(p.setupLights(),N.isArrayCamera){const ae=N.cameras;if(U.length>0)for(let me=0,Ee=ae.length;me<Ee;me++){const Te=ae[me];xh(G,U,T,Te)}Q&&Ne.render(T);for(let me=0,Ee=ae.length;me<Ee;me++){const Te=ae[me];vh(m,T,Te,Te.viewport)}}else U.length>0&&xh(G,U,T,N),Q&&Ne.render(T),vh(m,T,N);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(v,T,N),dt.resetDefaultState(),M=-1,S=null,x.pop(),x.length>0?(p=x[x.length-1],te===!0&&re.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function hc(T,N,H,G){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){G&&Ue.setFromMatrixPosition(T.matrixWorld).applyMatrix4(De);const me=Z.update(T),Ee=T.material;Ee.visible&&m.push(T,me,Ee,H,Ue.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Y.intersectsObject(T))){const me=Z.update(T),Ee=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ue.copy(T.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ue.copy(me.boundingSphere.center)),Ue.applyMatrix4(T.matrixWorld).applyMatrix4(De)),Array.isArray(Ee)){const Te=me.groups;for(let Be=0,We=Te.length;Be<We;Be++){const Ae=Te[Be],tt=Ee[Ae.materialIndex];tt&&tt.visible&&m.push(T,me,tt,H,Ue.z,Ae)}}else Ee.visible&&m.push(T,me,Ee,H,Ue.z,null)}}const ae=T.children;for(let me=0,Ee=ae.length;me<Ee;me++)hc(ae[me],N,H,G)}function vh(T,N,H,G){const U=T.opaque,ae=T.transmissive,me=T.transparent;p.setupLightsView(H),te===!0&&re.setGlobalState(v.clippingPlanes,H),G&&ce.viewport(L.copy(G)),U.length>0&&Oa(U,N,H),ae.length>0&&Oa(ae,N,H),me.length>0&&Oa(me,N,H),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function xh(T,N,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Rr(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Da:Si,minFilter:gi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const ae=p.state.transmissionRenderTarget[G.id],me=G.viewport||L;ae.setSize(me.z,me.w);const Ee=v.getRenderTarget();v.setRenderTarget(ae),v.getClearColor(W),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear(),Q&&Ne.render(H);const Te=v.toneMapping;v.toneMapping=Ki;const Be=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),te===!0&&re.setGlobalState(v.clippingPlanes,G),Oa(T,H,G),C.updateMultisampleRenderTarget(ae),C.updateRenderTargetMipmap(ae),ne.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Ae=0,tt=N.length;Ae<tt;Ae++){const ft=N[Ae],gt=ft.object,nn=ft.geometry,rt=ft.material,Pe=ft.group;if(rt.side===gn&&gt.layers.test(G.layers)){const ri=rt.side;rt.side=ln,rt.needsUpdate=!0,yh(gt,H,G,nn,rt,Pe),rt.side=ri,rt.needsUpdate=!0,We=!0}}We===!0&&(C.updateMultisampleRenderTarget(ae),C.updateRenderTargetMipmap(ae))}v.setRenderTarget(Ee),v.setClearColor(W,F),Be!==void 0&&(G.viewport=Be),v.toneMapping=Te}function Oa(T,N,H){const G=N.isScene===!0?N.overrideMaterial:null;for(let U=0,ae=T.length;U<ae;U++){const me=T[U],Ee=me.object,Te=me.geometry,Be=G===null?me.material:G,We=me.group;Ee.layers.test(H.layers)&&yh(Ee,N,H,Te,Be,We)}}function yh(T,N,H,G,U,ae){T.onBeforeRender(v,N,H,G,U,ae),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),U.onBeforeRender(v,N,H,G,T,ae),U.transparent===!0&&U.side===gn&&U.forceSinglePass===!1?(U.side=ln,U.needsUpdate=!0,v.renderBufferDirect(H,N,G,U,T,ae),U.side=Mi,U.needsUpdate=!0,v.renderBufferDirect(H,N,G,U,T,ae),U.side=gn):v.renderBufferDirect(H,N,G,U,T,ae),T.onAfterRender(v,N,H,G,U,ae)}function Fa(T,N,H){N.isScene!==!0&&(N=et);const G=_e.get(T),U=p.state.lights,ae=p.state.shadowsArray,me=U.state.version,Ee=be.getParameters(T,U.state,ae,N,H),Te=be.getProgramCacheKey(Ee);let Be=G.programs;G.environment=T.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(T.isMeshStandardMaterial?B:b).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Be===void 0&&(T.addEventListener("dispose",Ge),Be=new Map,G.programs=Be);let We=Be.get(Te);if(We!==void 0){if(G.currentProgram===We&&G.lightsStateVersion===me)return Sh(T,Ee),We}else Ee.uniforms=be.getUniforms(T),T.onBeforeCompile(Ee,v),We=be.acquireProgram(Ee,Te),Be.set(Te,We),G.uniforms=Ee.uniforms;const Ae=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ae.clippingPlanes=re.uniform),Sh(T,Ee),G.needsLights=Dm(T),G.lightsStateVersion=me,G.needsLights&&(Ae.ambientLightColor.value=U.state.ambient,Ae.lightProbe.value=U.state.probe,Ae.directionalLights.value=U.state.directional,Ae.directionalLightShadows.value=U.state.directionalShadow,Ae.spotLights.value=U.state.spot,Ae.spotLightShadows.value=U.state.spotShadow,Ae.rectAreaLights.value=U.state.rectArea,Ae.ltc_1.value=U.state.rectAreaLTC1,Ae.ltc_2.value=U.state.rectAreaLTC2,Ae.pointLights.value=U.state.point,Ae.pointLightShadows.value=U.state.pointShadow,Ae.hemisphereLights.value=U.state.hemi,Ae.directionalShadowMap.value=U.state.directionalShadowMap,Ae.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ae.spotShadowMap.value=U.state.spotShadowMap,Ae.spotLightMatrix.value=U.state.spotLightMatrix,Ae.spotLightMap.value=U.state.spotLightMap,Ae.pointShadowMap.value=U.state.pointShadowMap,Ae.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=We,G.uniformsList=null,We}function Mh(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=Do.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function Sh(T,N){const H=_e.get(T);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Pm(T,N,H,G,U){N.isScene!==!0&&(N=et),C.resetTextureUnits();const ae=N.fog,me=G.isMeshStandardMaterial?N.environment:null,Ee=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:tn,Te=(G.isMeshStandardMaterial?B:b).get(G.envMap||me),Be=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,We=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ae=!!H.morphAttributes.position,tt=!!H.morphAttributes.normal,ft=!!H.morphAttributes.color;let gt=Ki;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(gt=v.toneMapping);const nn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,rt=nn!==void 0?nn.length:0,Pe=_e.get(G),ri=p.state.lights;if(te===!0&&(Se===!0||T!==S)){const Sn=T===S&&G.id===M;re.setState(G,T,Sn)}let st=!1;G.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==ri.state.version||Pe.outputColorSpace!==Ee||U.isBatchedMesh&&Pe.batching===!1||!U.isBatchedMesh&&Pe.batching===!0||U.isBatchedMesh&&Pe.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Pe.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Pe.instancing===!1||!U.isInstancedMesh&&Pe.instancing===!0||U.isSkinnedMesh&&Pe.skinning===!1||!U.isSkinnedMesh&&Pe.skinning===!0||U.isInstancedMesh&&Pe.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Pe.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Pe.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Pe.instancingMorph===!1&&U.morphTexture!==null||Pe.envMap!==Te||G.fog===!0&&Pe.fog!==ae||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==re.numPlanes||Pe.numIntersection!==re.numIntersection)||Pe.vertexAlphas!==Be||Pe.vertexTangents!==We||Pe.morphTargets!==Ae||Pe.morphNormals!==tt||Pe.morphColors!==ft||Pe.toneMapping!==gt||Pe.morphTargetsCount!==rt)&&(st=!0):(st=!0,Pe.__version=G.version);let Dn=Pe.currentProgram;st===!0&&(Dn=Fa(G,N,U));let Lr=!1,hn=!1,Bs=!1;const _t=Dn.getUniforms(),Wn=Pe.uniforms;if(ce.useProgram(Dn.program)&&(Lr=!0,hn=!0,Bs=!0),G.id!==M&&(M=G.id,hn=!0),Lr||S!==T){ce.buffers.depth.getReversed()?(oe.copy(T.projectionMatrix),e_(oe),t_(oe),_t.setValue(D,"projectionMatrix",oe)):_t.setValue(D,"projectionMatrix",T.projectionMatrix),_t.setValue(D,"viewMatrix",T.matrixWorldInverse);const Ei=_t.map.cameraPosition;Ei!==void 0&&Ei.setValue(D,Fe.setFromMatrixPosition(T.matrixWorld)),xe.logarithmicDepthBuffer&&_t.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&_t.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,hn=!0,Bs=!0)}if(U.isSkinnedMesh){_t.setOptional(D,U,"bindMatrix"),_t.setOptional(D,U,"bindMatrixInverse");const Sn=U.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),_t.setValue(D,"boneTexture",Sn.boneTexture,C))}U.isBatchedMesh&&(_t.setOptional(D,U,"batchingTexture"),_t.setValue(D,"batchingTexture",U._matricesTexture,C),_t.setOptional(D,U,"batchingIdTexture"),_t.setValue(D,"batchingIdTexture",U._indirectTexture,C),_t.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&_t.setValue(D,"batchingColorTexture",U._colorsTexture,C));const zs=H.morphAttributes;if((zs.position!==void 0||zs.normal!==void 0||zs.color!==void 0)&&Oe.update(U,H,Dn),(hn||Pe.receiveShadow!==U.receiveShadow)&&(Pe.receiveShadow=U.receiveShadow,_t.setValue(D,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Wn.envMap.value=Te,Wn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(Wn.envMapIntensity.value=N.environmentIntensity),hn&&(_t.setValue(D,"toneMappingExposure",v.toneMappingExposure),Pe.needsLights&&Lm(Wn,Bs),ae&&G.fog===!0&&he.refreshFogUniforms(Wn,ae),he.refreshMaterialUniforms(Wn,G,V,q,p.state.transmissionRenderTarget[T.id]),Do.upload(D,Mh(Pe),Wn,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Do.upload(D,Mh(Pe),Wn,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&_t.setValue(D,"center",U.center),_t.setValue(D,"modelViewMatrix",U.modelViewMatrix),_t.setValue(D,"normalMatrix",U.normalMatrix),_t.setValue(D,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Sn=G.uniformsGroups;for(let Ei=0,Ti=Sn.length;Ei<Ti;Ei++){const bh=Sn[Ei];I.update(bh,Dn),I.bind(bh,Dn)}}return Dn}function Lm(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function Dm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,N,H){_e.get(T.texture).__webglTexture=N,_e.get(T.depthTexture).__webglTexture=H;const G=_e.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,N){const H=_e.get(T);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,H=0){R=T,E=N,A=H;let G=!0,U=null,ae=!1,me=!1;if(T){const Te=_e.get(T);if(Te.__useDefaultFramebuffer!==void 0)ce.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(Te.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(Te.__hasExternalTextures)C.rebindTextures(T,_e.get(T.texture).__webglTexture,_e.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ae=T.depthTexture;if(Te.__boundDepthTexture!==Ae){if(Ae!==null&&_e.has(Ae)&&(T.width!==Ae.image.width||T.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}const Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(me=!0);const We=_e.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(We[N])?U=We[N][H]:U=We[N],ae=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?U=_e.get(T).__webglMultisampledFramebuffer:Array.isArray(We)?U=We[H]:U=We,L.copy(T.viewport),z.copy(T.scissor),O=T.scissorTest}else L.copy(fe).multiplyScalar(V).floor(),z.copy(Le).multiplyScalar(V).floor(),O=Xe;if(ce.bindFramebuffer(D.FRAMEBUFFER,U)&&G&&ce.drawBuffers(T,U),ce.viewport(L),ce.scissor(z),ce.setScissorTest(O),ae){const Te=_e.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,Te.__webglTexture,H)}else if(me){const Te=_e.get(T.texture),Be=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Te.__webglTexture,H||0,Be)}M=-1},this.readRenderTargetPixels=function(T,N,H,G,U,ae,me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=_e.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&me!==void 0&&(Ee=Ee[me]),Ee){ce.bindFramebuffer(D.FRAMEBUFFER,Ee);try{const Te=T.texture,Be=Te.format,We=Te.type;if(!xe.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-G&&H>=0&&H<=T.height-U&&D.readPixels(N,H,G,U,je.convert(Be),je.convert(We),ae)}finally{const Te=R!==null?_e.get(R).__webglFramebuffer:null;ce.bindFramebuffer(D.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(T,N,H,G,U,ae,me){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=_e.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&me!==void 0&&(Ee=Ee[me]),Ee){const Te=T.texture,Be=Te.format,We=Te.type;if(!xe.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=T.width-G&&H>=0&&H<=T.height-U){ce.bindFramebuffer(D.FRAMEBUFFER,Ee);const Ae=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ae),D.bufferData(D.PIXEL_PACK_BUFFER,ae.byteLength,D.STREAM_READ),D.readPixels(N,H,G,U,je.convert(Be),je.convert(We),0);const tt=R!==null?_e.get(R).__webglFramebuffer:null;ce.bindFramebuffer(D.FRAMEBUFFER,tt);const ft=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await X0(D,ft,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ae),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ae),D.deleteBuffer(Ae),D.deleteSync(ft),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,N=null,H=0){T.isTexture!==!0&&(ia("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,T=arguments[1]);const G=Math.pow(2,-H),U=Math.floor(T.image.width*G),ae=Math.floor(T.image.height*G),me=N!==null?N.x:0,Ee=N!==null?N.y:0;C.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,me,Ee,U,ae),ce.unbindTexture()},this.copyTextureToTexture=function(T,N,H=null,G=null,U=0){T.isTexture!==!0&&(ia("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1],N=arguments[2],U=arguments[3]||0,H=null);let ae,me,Ee,Te,Be,We,Ae,tt,ft;const gt=T.isCompressedTexture?T.mipmaps[U]:T.image;H!==null?(ae=H.max.x-H.min.x,me=H.max.y-H.min.y,Ee=H.isBox3?H.max.z-H.min.z:1,Te=H.min.x,Be=H.min.y,We=H.isBox3?H.min.z:0):(ae=gt.width,me=gt.height,Ee=gt.depth||1,Te=0,Be=0,We=0),G!==null?(Ae=G.x,tt=G.y,ft=G.z):(Ae=0,tt=0,ft=0);const nn=je.convert(N.format),rt=je.convert(N.type);let Pe;N.isData3DTexture?(C.setTexture3D(N,0),Pe=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(C.setTexture2DArray(N,0),Pe=D.TEXTURE_2D_ARRAY):(C.setTexture2D(N,0),Pe=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const ri=D.getParameter(D.UNPACK_ROW_LENGTH),st=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Dn=D.getParameter(D.UNPACK_SKIP_PIXELS),Lr=D.getParameter(D.UNPACK_SKIP_ROWS),hn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,gt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Te),D.pixelStorei(D.UNPACK_SKIP_ROWS,Be),D.pixelStorei(D.UNPACK_SKIP_IMAGES,We);const Bs=T.isDataArrayTexture||T.isData3DTexture,_t=N.isDataArrayTexture||N.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Wn=_e.get(T),zs=_e.get(N),Sn=_e.get(Wn.__renderTarget),Ei=_e.get(zs.__renderTarget);ce.bindFramebuffer(D.READ_FRAMEBUFFER,Sn.__webglFramebuffer),ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let Ti=0;Ti<Ee;Ti++)Bs&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_e.get(T).__webglTexture,U,We+Ti),T.isDepthTexture?(_t&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_e.get(N).__webglTexture,U,ft+Ti),D.blitFramebuffer(Te,Be,ae,me,Ae,tt,ae,me,D.DEPTH_BUFFER_BIT,D.NEAREST)):_t?D.copyTexSubImage3D(Pe,U,Ae,tt,ft+Ti,Te,Be,ae,me):D.copyTexSubImage2D(Pe,U,Ae,tt,ft+Ti,Te,Be,ae,me);ce.bindFramebuffer(D.READ_FRAMEBUFFER,null),ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else _t?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Pe,U,Ae,tt,ft,ae,me,Ee,nn,rt,gt.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Pe,U,Ae,tt,ft,ae,me,Ee,nn,gt.data):D.texSubImage3D(Pe,U,Ae,tt,ft,ae,me,Ee,nn,rt,gt):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,U,Ae,tt,ae,me,nn,rt,gt.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,U,Ae,tt,gt.width,gt.height,nn,gt.data):D.texSubImage2D(D.TEXTURE_2D,U,Ae,tt,ae,me,nn,rt,gt);D.pixelStorei(D.UNPACK_ROW_LENGTH,ri),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,st),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Dn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Lr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,hn),U===0&&N.generateMipmaps&&D.generateMipmap(Pe),ce.unbindTexture()},this.copyTextureToTexture3D=function(T,N,H=null,G=null,U=0){return T.isTexture!==!0&&(ia("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,T=arguments[2],N=arguments[3],U=arguments[4]||0),ia('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,N,H,G,U)},this.initRenderTarget=function(T){_e.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),ce.unbindTexture()},this.resetState=function(){E=0,A=0,R=null,ce.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}class Qu{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new we(e),this.density=t}clone(){return new Qu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class nm extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class im{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=lu,this.updateRanges=[],this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new P;class Aa{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Aa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class rm extends zn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Yr;const qs=new P,Kr=new P,$r=new P,Zr=new ee,js=new ee,sm=new ke,so=new P,Ys=new P,ao=new P,kd=new ee,$c=new ee,Vd=new ee;class hS extends mt{constructor(e=new rm){if(super(),this.isSprite=!0,this.type="Sprite",Yr===void 0){Yr=new ht;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new im(t,5);Yr.setIndex([0,1,2,0,2,3]),Yr.setAttribute("position",new Aa(n,3,0,!1)),Yr.setAttribute("uv",new Aa(n,2,3,!1))}this.geometry=Yr,this.material=e,this.center=new ee(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Kr.setFromMatrixScale(this.matrixWorld),sm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$r.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Kr.multiplyScalar(-$r.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;oo(so.set(-.5,-.5,0),$r,a,Kr,r,s),oo(Ys.set(.5,-.5,0),$r,a,Kr,r,s),oo(ao.set(.5,.5,0),$r,a,Kr,r,s),kd.set(0,0),$c.set(1,0),Vd.set(1,1);let o=e.ray.intersectTriangle(so,Ys,ao,!1,qs);if(o===null&&(oo(Ys.set(-.5,.5,0),$r,a,Kr,r,s),$c.set(0,1),o=e.ray.intersectTriangle(so,ao,Ys,!1,qs),o===null))return;const c=e.ray.origin.distanceTo(qs);c<e.near||c>e.far||t.push({distance:c,point:qs.clone(),uv:_n.getInterpolation(qs,so,Ys,ao,kd,$c,Vd,new ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function oo(i,e,t,n,r,s){Zr.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(js.x=s*Zr.x-r*Zr.y,js.y=r*Zr.x+s*Zr.y):js.copy(Zr),i.copy(e),i.x+=js.x,i.y+=js.y,i.applyMatrix4(sm)}const Hd=new P,Gd=new it,Wd=new it,dS=new P,qd=new ke,co=new P,Zc=new ei,jd=new ke,Jc=new tc;class fS extends nt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gh,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Xn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,co),this.boundingBox.expandByPoint(co)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ei),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,co),this.boundingSphere.expandByPoint(co)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zc.copy(this.boundingSphere),Zc.applyMatrix4(r),e.ray.intersectsSphere(Zc)!==!1&&(jd.copy(r).invert(),Jc.copy(e.ray).applyMatrix4(jd),!(this.boundingBox!==null&&Jc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Jc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===S0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Gd.fromBufferAttribute(r.attributes.skinIndex,e),Wd.fromBufferAttribute(r.attributes.skinWeight,e),Hd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Wd.getComponent(s);if(a!==0){const o=Gd.getComponent(s);qd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(dS.copy(Hd).applyMatrix4(qd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class am extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class om extends Ot{constructor(e=null,t=1,n=1,r,s,a,o,c,l=Qt,u=Qt,h,d){super(null,a,o,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yd=new ke,pS=new ke;class Xu{constructor(e=[],t=[]){this.uuid=Cn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:pS;Yd.multiplyMatrices(o,t[s]),Yd.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Xu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new om(t,e,e,Rn,Bn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new am),this.bones.push(a),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=n[r];e.boneInverses.push(o.toArray())}return e}}class du extends Ft{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Jr=new ke,Kd=new ke,lo=[],$d=new Xn,mS=new ke,Ks=new nt,$s=new ei;class cm extends nt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new du(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,mS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Jr),$d.copy(e.boundingBox).applyMatrix4(Jr),this.boundingBox.union($d)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Jr),$s.copy(e.boundingSphere).applyMatrix4(Jr),this.boundingSphere.union($s)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Ks.geometry=this.geometry,Ks.material=this.material,Ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(n),e.ray.intersectsSphere($s)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Jr),Kd.multiplyMatrices(n,Jr),Ks.matrixWorld=Kd,Ks.raycast(e,lo);for(let a=0,o=lo.length;a<o;a++){const c=lo[a];c.instanceId=s,c.object=this,t.push(c)}lo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new du(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new om(new Float32Array(r*this.count),r,this.count,Wu,Bn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class wa extends zn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Go=new P,Wo=new P,Zd=new ke,Zs=new tc,uo=new ei,Qc=new P,Jd=new P;class eh extends mt{constructor(e=new ht,t=new wa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Go.fromBufferAttribute(t,r-1),Wo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Go.distanceTo(Wo);e.setAttribute("lineDistance",new Ve(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(r),uo.radius+=s,e.ray.intersectsSphere(uo)===!1)return;Zd.copy(r).invert(),Zs.copy(e.ray).applyMatrix4(Zd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=u.getX(_),y=u.getX(_+1),x=ho(this,e,Zs,c,p,y);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=ho(this,e,Zs,c,_,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=ho(this,e,Zs,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=ho(this,e,Zs,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ho(i,e,t,n,r,s){const a=i.geometry.attributes.position;if(Go.fromBufferAttribute(a,r),Wo.fromBufferAttribute(a,s),t.distanceSqToSegment(Go,Wo,Qc,Jd)>n)return;Qc.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Qc);if(!(c<e.near||c>e.far))return{distance:c,point:Jd.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Qd=new P,Xd=new P;class Oi extends eh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Qd.fromBufferAttribute(t,r),Xd.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Qd.distanceTo(Xd);e.setAttribute("lineDistance",new Ve(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class th extends eh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class nh extends zn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ef=new ke,fu=new tc,fo=new ei,po=new P;class ic extends mt{constructor(e=new ht,t=new nh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(r),fo.radius+=s,e.ray.intersectsSphere(fo)===!1)return;ef.copy(r).invert(),fu.copy(e.ray).applyMatrix4(ef);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);po.fromBufferAttribute(h,m),tf(po,m,c,r,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,_=f;g<_;g++)po.fromBufferAttribute(h,g),tf(po,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function tf(i,e,t,n,r,s,a){const o=fu.distanceSqToPoint(i);if(o<t){const c=new P;fu.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ti{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const u=n[r],d=n[r+1]-u,f=(a-u)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=t||(a.isVector2?new ee:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new P,r=[],s=[],a=[],o=new P,c=new ke;for(let f=0;f<=e;f++){const g=f/e;r[f]=this.getTangentAt(g,new P)}s[0]=new P,a[0]=new P;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ut(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Ut(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],f*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ih extends ti{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ee){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class gS extends ih{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function rh(){let i=0,e=0,t=0,n=0;function r(s,a,o,c){i=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,u,h){let d=(a-s)/l-(o-s)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+h)+(c-o)/h;d*=u,f*=u,r(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const mo=new P,Xc=new rh,el=new rh,tl=new rh;class lm extends ti{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new P){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,u;this.closed||o>0?l=r[(o-1)%s]:(mo.subVectors(r[0],r[1]).add(r[0]),l=mo);const h=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(mo.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=mo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Xc.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,_,m),el.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,_,m),tl.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Xc.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),el.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),tl.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Xc.calc(c),el.calc(c),tl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function nf(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,c=i*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*i+t}function _S(i,e){const t=1-i;return t*t*e}function vS(i,e){return 2*(1-i)*i*e}function xS(i,e){return i*i*e}function ua(i,e,t,n){return _S(i,e)+vS(i,t)+xS(i,n)}function yS(i,e){const t=1-i;return t*t*t*e}function MS(i,e){const t=1-i;return 3*t*t*i*e}function SS(i,e){return 3*(1-i)*i*i*e}function bS(i,e){return i*i*i*e}function ha(i,e,t,n,r){return yS(i,e)+MS(i,t)+SS(i,n)+bS(i,r)}class um extends ti{constructor(e=new ee,t=new ee,n=new ee,r=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ee){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ha(e,r.x,s.x,a.x,o.x),ha(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ES extends ti{constructor(e=new P,t=new P,n=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new P){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ha(e,r.x,s.x,a.x,o.x),ha(e,r.y,s.y,a.y,o.y),ha(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hm extends ti{constructor(e=new ee,t=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ee){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class TS extends ti{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dm extends ti{constructor(e=new ee,t=new ee,n=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ee){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(ua(e,r.x,s.x,a.x),ua(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sh extends ti{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(ua(e,r.x,s.x,a.x),ua(e,r.y,s.y,a.y),ua(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fm extends ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ee){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(nf(o,c.x,l.x,u.x,h.x),nf(o,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new ee().fromArray(r))}return this}}var qo=Object.freeze({__proto__:null,ArcCurve:gS,CatmullRomCurve3:lm,CubicBezierCurve:um,CubicBezierCurve3:ES,EllipseCurve:ih,LineCurve:hm,LineCurve3:TS,QuadraticBezierCurve:dm,QuadraticBezierCurve3:sh,SplineCurve:fm});class AS extends ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new qo[r.type]().fromJSON(r))}return this}}class rf extends AS{constructor(e){super(),this.type="Path",this.currentPoint=new ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new hm(this.currentPoint.clone(),new ee(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new dm(this.currentPoint.clone(),new ee(e,t),new ee(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new um(this.currentPoint.clone(),new ee(e,t),new ee(n,r),new ee(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new fm(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,r,s,a,o,c),this}absellipse(e,t,n,r,s,a,o,c){const l=new ih(e,t,n,r,s,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ah extends ht{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new P,u=new ee;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*r;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Ve(a,3)),this.setAttribute("normal",new Ve(o,3)),this.setAttribute("uv",new Ve(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ah(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class oh extends ht{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),l(n),u(),this.setAttribute("position",new Ve(s,3)),this.setAttribute("normal",new Ve(s.slice(),3)),this.setAttribute("uv",new Ve(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new P,v=new P,w=new P;for(let E=0;E<t.length;E+=3)f(t[E+0],x),f(t[E+1],v),f(t[E+2],w),c(x,v,w,y)}function c(y,x,v,w){const E=w+1,A=[];for(let R=0;R<=E;R++){A[R]=[];const M=y.clone().lerp(v,R/E),S=x.clone().lerp(v,R/E),L=E-R;for(let z=0;z<=L;z++)z===0&&R===E?A[R][z]=M:A[R][z]=M.clone().lerp(S,z/L)}for(let R=0;R<E;R++)for(let M=0;M<2*(E-R)-1;M++){const S=Math.floor(M/2);M%2===0?(d(A[R][S+1]),d(A[R+1][S]),d(A[R][S])):(d(A[R][S+1]),d(A[R+1][S+1]),d(A[R+1][S]))}}function l(y){const x=new P;for(let v=0;v<s.length;v+=3)x.x=s[v+0],x.y=s[v+1],x.z=s[v+2],x.normalize().multiplyScalar(y),s[v+0]=x.x,s[v+1]=x.y,s[v+2]=x.z}function u(){const y=new P;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];const v=m(y)/2/Math.PI+.5,w=p(y)/Math.PI+.5;a.push(v,1-w)}g(),h()}function h(){for(let y=0;y<a.length;y+=6){const x=a[y+0],v=a[y+2],w=a[y+4],E=Math.max(x,v,w),A=Math.min(x,v,w);E>.9&&A<.1&&(x<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),w<.2&&(a[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function f(y,x){const v=y*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function g(){const y=new P,x=new P,v=new P,w=new P,E=new ee,A=new ee,R=new ee;for(let M=0,S=0;M<s.length;M+=9,S+=6){y.set(s[M+0],s[M+1],s[M+2]),x.set(s[M+3],s[M+4],s[M+5]),v.set(s[M+6],s[M+7],s[M+8]),E.set(a[S+0],a[S+1]),A.set(a[S+2],a[S+3]),R.set(a[S+4],a[S+5]),w.copy(y).add(x).add(v).divideScalar(3);const L=m(w);_(E,S+0,y,L),_(A,S+2,x,L),_(R,S+4,v,L)}}function _(y,x,v,w){w<0&&y.x===1&&(a[x]=y.x-1),v.x===0&&v.z===0&&(a[x]=w/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oh(e.vertices,e.indices,e.radius,e.details)}}const go=new P,_o=new P,nl=new P,vo=new _n;class wS extends ht{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(ls*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:m,c:p}=vo;if(_.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),vo.getNormal(nl),h[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){const x=(y+1)%3,v=h[y],w=h[x],E=vo[u[y]],A=vo[u[x]],R=`${v}_${w}`,M=`${w}_${v}`;M in d&&d[M]?(nl.dot(d[M].normal)<=s&&(f.push(E.x,E.y,E.z),f.push(A.x,A.y,A.z)),d[M]=null):R in d||(d[R]={index0:l[y],index1:l[x],normal:nl.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];go.fromBufferAttribute(o,_),_o.fromBufferAttribute(o,m),f.push(go.x,go.y,go.z),f.push(_o.x,_o.y,_o.z)}this.setAttribute("position",new Ve(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class hs extends rf{constructor(e){super(e),this.uuid=Cn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new rf().fromJSON(r))}return this}}const RS={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=pm(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l,u,h,d,f;if(n&&(s=IS(i,e,s,t)),i.length>80*t){o=l=i[0],c=u=i[1];for(let g=t;g<r;g+=t)h=i[g],d=i[g+1],h<o&&(o=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-o,u-c),f=f!==0?32767/f:0}return Ra(s,a,t,o,c,f,0),a}};function pm(i,e,t,n,r){let s,a;if(r===WS(i,e,t,n)>0)for(s=e;s<t;s+=n)a=sf(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=sf(s,i[s],i[s+1],a);return a&&rc(a,a.next)&&(Pa(a),a=a.next),a}function Cr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(rc(t,t.next)||Mt(t.prev,t,t.next)===0)){if(Pa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ra(i,e,t,n,r,s,a){if(!i)return;!a&&s&&BS(i,n,r,s);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?PS(i,n,r,s):CS(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Pa(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=LS(Cr(i),e,t),Ra(i,e,t,n,r,s,2)):a===2&&DS(i,e,t,n,r,s):Ra(Cr(i),e,t,n,r,s,1);break}}}function CS(i){const e=i.prev,t=i,n=i.next;if(Mt(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=r<s?r<a?r:a:s<a?s:a,h=o<c?o<l?o:l:c<l?c:l,d=r>s?r>a?r:a:s>a?s:a,f=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&rs(r,o,s,c,a,l,g.x,g.y)&&Mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function PS(i,e,t,n){const r=i.prev,s=i,a=i.next;if(Mt(r,s,a)>=0)return!1;const o=r.x,c=s.x,l=a.x,u=r.y,h=s.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,_=o>c?o>l?o:l:c>l?c:l,m=u>h?u>d?u:d:h>d?h:d,p=pu(f,g,e,t,n),y=pu(_,m,e,t,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=p&&v&&v.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&rs(o,u,c,h,l,d,x.x,x.y)&&Mt(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&rs(o,u,c,h,l,d,v.x,v.y)&&Mt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&rs(o,u,c,h,l,d,x.x,x.y)&&Mt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&rs(o,u,c,h,l,d,v.x,v.y)&&Mt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function LS(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!rc(r,s)&&mm(r,n,n.next,s)&&Ca(r,s)&&Ca(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Pa(n),Pa(n.next),n=i=s),n=n.next}while(n!==i);return Cr(n)}function DS(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&VS(a,o)){let c=gm(a,o);a=Cr(a,a.next),c=Cr(c,c.next),Ra(a,e,t,n,r,s,0),Ra(c,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function IS(i,e,t,n){const r=[];let s,a,o,c,l;for(s=0,a=e.length;s<a;s++)o=e[s]*n,c=s<a-1?e[s+1]*n:i.length,l=pm(i,o,c,n,!1),l===l.next&&(l.steiner=!0),r.push(kS(l));for(r.sort(NS),s=0;s<r.length;s++)t=US(r[s],t);return t}function NS(i,e){return i.x-e.x}function US(i,e){const t=OS(i,e);if(!t)return e;const n=gm(t,i);return Cr(n,n.next),Cr(t,t.next)}function OS(i,e){let t=e,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,r=t.x<t.next.x?t:t.next,d===s))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,c=r.x,l=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=c&&s!==t.x&&rs(a<l?s:n,a,c,l,a<l?n:s,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(s-t.x),Ca(t,i)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&FS(r,t)))&&(r=t,u=h)),t=t.next;while(t!==o);return r}function FS(i,e){return Mt(i.prev,i,e.prev)<0&&Mt(e.next,i,i.next)<0}function BS(i,e,t,n){let r=i;do r.z===0&&(r.z=pu(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,zS(r)}function zS(i){let e,t,n,r,s,a,o,c,l=1;do{for(t=i,i=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,o--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,l*=2}while(a>1);return i}function pu(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function kS(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function rs(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function VS(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!HS(i,e)&&(Ca(i,e)&&Ca(e,i)&&GS(i,e)&&(Mt(i.prev,i,e.prev)||Mt(i,e.prev,e))||rc(i,e)&&Mt(i.prev,i,i.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function rc(i,e){return i.x===e.x&&i.y===e.y}function mm(i,e,t,n){const r=yo(Mt(i,e,t)),s=yo(Mt(i,e,n)),a=yo(Mt(t,n,i)),o=yo(Mt(t,n,e));return!!(r!==s&&a!==o||r===0&&xo(i,t,e)||s===0&&xo(i,n,e)||a===0&&xo(t,i,n)||o===0&&xo(t,e,n))}function xo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function yo(i){return i>0?1:i<0?-1:0}function HS(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&mm(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ca(i,e){return Mt(i.prev,i,i.next)<0?Mt(i,e,i.next)>=0&&Mt(i,i.prev,e)>=0:Mt(i,e,i.prev)<0||Mt(i,i.next,e)<0}function GS(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function gm(i,e){const t=new mu(i.i,i.x,i.y),n=new mu(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function sf(i,e,t,n){const r=new mu(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Pa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function mu(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function WS(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class $i{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return $i.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];af(e),of(n,e);let a=e.length;t.forEach(af);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,of(n,t[c]);const o=RS.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function af(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function of(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class jo extends ht{constructor(e=new hs([new ee(.5,.5),new ee(-.5,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new Ve(r,3)),this.setAttribute("uv",new Ve(s,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:qS;let x,v=!1,w,E,A,R;p&&(x=p.getSpacedPoints(u),v=!0,d=!1,w=p.computeFrenetFrames(u,!1),E=new P,A=new P,R=new P),d||(m=0,f=0,g=0,_=0);const M=o.extractPoints(l);let S=M.shape;const L=M.holes;if(!$i.isClockWise(S)){S=S.reverse();for(let Q=0,se=L.length;Q<se;Q++){const D=L[Q];$i.isClockWise(D)&&(L[Q]=D.reverse())}}const O=$i.triangulateShape(S,L),W=S;for(let Q=0,se=L.length;Q<se;Q++){const D=L[Q];S=S.concat(D)}function F(Q,se,D){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(se,D)}const k=S.length,q=O.length;function V(Q,se,D){let Re,ne,xe;const ce=Q.x-se.x,Ie=Q.y-se.y,_e=D.x-Q.x,C=D.y-Q.y,b=ce*ce+Ie*Ie,B=ce*C-Ie*_e;if(Math.abs(B)>Number.EPSILON){const $=Math.sqrt(b),X=Math.sqrt(_e*_e+C*C),Z=se.x-Ie/$,be=se.y+ce/$,he=D.x-C/X,ve=D.y+_e/X,$e=((he-Z)*C-(ve-be)*_e)/(ce*C-Ie*_e);Re=Z+ce*$e-Q.x,ne=be+Ie*$e-Q.y;const re=Re*Re+ne*ne;if(re<=2)return new ee(Re,ne);xe=Math.sqrt(re/2)}else{let $=!1;ce>Number.EPSILON?_e>Number.EPSILON&&($=!0):ce<-Number.EPSILON?_e<-Number.EPSILON&&($=!0):Math.sign(Ie)===Math.sign(C)&&($=!0),$?(Re=-Ie,ne=ce,xe=Math.sqrt(b)):(Re=ce,ne=Ie,xe=Math.sqrt(b/2))}return new ee(Re/xe,ne/xe)}const ie=[];for(let Q=0,se=W.length,D=se-1,Re=Q+1;Q<se;Q++,D++,Re++)D===se&&(D=0),Re===se&&(Re=0),ie[Q]=V(W[Q],W[D],W[Re]);const le=[];let fe,Le=ie.concat();for(let Q=0,se=L.length;Q<se;Q++){const D=L[Q];fe=[];for(let Re=0,ne=D.length,xe=ne-1,ce=Re+1;Re<ne;Re++,xe++,ce++)xe===ne&&(xe=0),ce===ne&&(ce=0),fe[Re]=V(D[Re],D[xe],D[ce]);le.push(fe),Le=Le.concat(fe)}for(let Q=0;Q<m;Q++){const se=Q/m,D=f*Math.cos(se*Math.PI/2),Re=g*Math.sin(se*Math.PI/2)+_;for(let ne=0,xe=W.length;ne<xe;ne++){const ce=F(W[ne],ie[ne],Re);oe(ce.x,ce.y,-D)}for(let ne=0,xe=L.length;ne<xe;ne++){const ce=L[ne];fe=le[ne];for(let Ie=0,_e=ce.length;Ie<_e;Ie++){const C=F(ce[Ie],fe[Ie],Re);oe(C.x,C.y,-D)}}}const Xe=g+_;for(let Q=0;Q<k;Q++){const se=d?F(S[Q],Le[Q],Xe):S[Q];v?(A.copy(w.normals[0]).multiplyScalar(se.x),E.copy(w.binormals[0]).multiplyScalar(se.y),R.copy(x[0]).add(A).add(E),oe(R.x,R.y,R.z)):oe(se.x,se.y,0)}for(let Q=1;Q<=u;Q++)for(let se=0;se<k;se++){const D=d?F(S[se],Le[se],Xe):S[se];v?(A.copy(w.normals[Q]).multiplyScalar(D.x),E.copy(w.binormals[Q]).multiplyScalar(D.y),R.copy(x[Q]).add(A).add(E),oe(R.x,R.y,R.z)):oe(D.x,D.y,h/u*Q)}for(let Q=m-1;Q>=0;Q--){const se=Q/m,D=f*Math.cos(se*Math.PI/2),Re=g*Math.sin(se*Math.PI/2)+_;for(let ne=0,xe=W.length;ne<xe;ne++){const ce=F(W[ne],ie[ne],Re);oe(ce.x,ce.y,h+D)}for(let ne=0,xe=L.length;ne<xe;ne++){const ce=L[ne];fe=le[ne];for(let Ie=0,_e=ce.length;Ie<_e;Ie++){const C=F(ce[Ie],fe[Ie],Re);v?oe(C.x,C.y+x[u-1].y,x[u-1].x+D):oe(C.x,C.y,h+D)}}}Y(),te();function Y(){const Q=r.length/3;if(d){let se=0,D=k*se;for(let Re=0;Re<q;Re++){const ne=O[Re];De(ne[2]+D,ne[1]+D,ne[0]+D)}se=u+m*2,D=k*se;for(let Re=0;Re<q;Re++){const ne=O[Re];De(ne[0]+D,ne[1]+D,ne[2]+D)}}else{for(let se=0;se<q;se++){const D=O[se];De(D[2],D[1],D[0])}for(let se=0;se<q;se++){const D=O[se];De(D[0]+k*u,D[1]+k*u,D[2]+k*u)}}n.addGroup(Q,r.length/3-Q,0)}function te(){const Q=r.length/3;let se=0;Se(W,se),se+=W.length;for(let D=0,Re=L.length;D<Re;D++){const ne=L[D];Se(ne,se),se+=ne.length}n.addGroup(Q,r.length/3-Q,1)}function Se(Q,se){let D=Q.length;for(;--D>=0;){const Re=D;let ne=D-1;ne<0&&(ne=Q.length-1);for(let xe=0,ce=u+m*2;xe<ce;xe++){const Ie=k*xe,_e=k*(xe+1),C=se+Re+Ie,b=se+ne+Ie,B=se+ne+_e,$=se+Re+_e;Fe(C,b,B,$)}}}function oe(Q,se,D){c.push(Q),c.push(se),c.push(D)}function De(Q,se,D){Ue(Q),Ue(se),Ue(D);const Re=r.length/3,ne=y.generateTopUV(n,r,Re-3,Re-2,Re-1);et(ne[0]),et(ne[1]),et(ne[2])}function Fe(Q,se,D,Re){Ue(Q),Ue(se),Ue(Re),Ue(se),Ue(D),Ue(Re);const ne=r.length/3,xe=y.generateSideWallUV(n,r,ne-6,ne-3,ne-2,ne-1);et(xe[0]),et(xe[1]),et(xe[3]),et(xe[1]),et(xe[2]),et(xe[3])}function Ue(Q){r.push(c[Q*3+0]),r.push(c[Q*3+1]),r.push(c[Q*3+2])}function et(Q){s.push(Q.x),s.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return jS(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new qo[r.type]().fromJSON(r)),new jo(n,e.options)}}const qS={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[r*3],u=e[r*3+1];return[new ee(s,a),new ee(o,c),new ee(l,u)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[r*3],f=e[r*3+1],g=e[r*3+2],_=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new ee(a,1-c),new ee(l,1-h),new ee(d,1-g),new ee(_,1-p)]:[new ee(o,1-c),new ee(u,1-h),new ee(f,1-g),new ee(m,1-p)]}};function jS(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ch extends oh{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ch(e.radius,e.detail)}}class lh extends ht{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],c=[],l=[],u=[];let h=e;const d=(t-e)/r,f=new P,g=new ee;for(let _=0;_<=r;_++){for(let m=0;m<=n;m++){const p=s+m/n*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<r;_++){const m=_*(n+1);for(let p=0;p<n;p++){const y=p+m,x=y,v=y+n+1,w=y+n+2,E=y+1;o.push(x,v,E),o.push(v,w,E)}}this.setIndex(o),this.setAttribute("position",new Ve(c,3)),this.setAttribute("normal",new Ve(l,3)),this.setAttribute("uv",new Ve(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class sc extends ht{constructor(e=new hs([new ee(0,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ve(r,3)),this.setAttribute("normal",new Ve(s,3)),this.setAttribute("uv",new Ve(a,2));function l(u){const h=r.length/3,d=u.extractPoints(t);let f=d.shape;const g=d.holes;$i.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];$i.isClockWise(y)===!0&&(g[m]=y.reverse())}const _=$i.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){const y=f[m];r.push(y.x,y.y,0),s.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=_.length;m<p;m++){const y=_[m],x=y[0]+h,v=y[1]+h,w=y[2]+h;n.push(x,v,w),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return YS(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];n.push(a)}return new sc(n,e.curveSegments)}}function YS(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class Na extends ht{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new P,d=new P,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],x=p/n;let v=0;p===0&&a===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let w=0;w<=t;w++){const E=w/t;h.x=-e*Math.cos(r+E*s)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(r+E*s)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(E+v,1-x),y.push(l++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const x=u[p][y+1],v=u[p][y],w=u[p+1][y],E=u[p+1][y+1];(p!==0||a>0)&&f.push(x,v,E),(p!==n-1||c<Math.PI)&&f.push(v,w,E)}this.setIndex(f),this.setAttribute("position",new Ve(g,3)),this.setAttribute("normal",new Ve(_,3)),this.setAttribute("uv",new Ve(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vr extends ht{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],l=[],u=new P,h=new P,d=new P;for(let f=0;f<=n;f++)for(let g=0;g<=r;g++){const _=g/r*s,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/r),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=r;g++){const _=(r+1)*f+g-1,m=(r+1)*(f-1)+g-1,p=(r+1)*(f-1)+g,y=(r+1)*f+g;a.push(_,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new Ve(o,3)),this.setAttribute("normal",new Ve(c,3)),this.setAttribute("uv",new Ve(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ac extends ht{constructor(e=new sh(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,c=new P,l=new ee;let u=new P;const h=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Ve(h,3)),this.setAttribute("normal",new Ve(d,3)),this.setAttribute("uv",new Ve(f,2));function _(){for(let x=0;x<t;x++)m(x);m(s===!1?t:0),y(),p()}function m(x){u=e.getPointAt(x/t,u);const v=a.normals[x],w=a.binormals[x];for(let E=0;E<=r;E++){const A=E/r*Math.PI*2,R=Math.sin(A),M=-Math.cos(A);c.x=M*v.x+R*w.x,c.y=M*v.y+R*w.y,c.z=M*v.z+R*w.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,h.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=t;x++)for(let v=1;v<=r;v++){const w=(r+1)*(x-1)+(v-1),E=(r+1)*x+(v-1),A=(r+1)*x+v,R=(r+1)*(x-1)+v;g.push(w,E,R),g.push(E,A,R)}}function y(){for(let x=0;x<=t;x++)for(let v=0;v<=r;v++)l.x=x/t,l.y=v/r,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ac(new qo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Er extends zn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bp,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gn extends Er{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Mo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function KS(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function $S(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function cf(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)r[a++]=i[o+c]}return r}function _m(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}class Ua{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ZS extends Ua{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wh,endingEnd:Wh}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case qh:s=e,o=2*t-n;break;case jh:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case qh:a=e,c=2*n-t;break;case jh:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(r-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let w=0;w!==o;++w)s[w]=p*a[u+w]+y*a[l+w]+x*a[c+w]+v*a[h+w];return s}}class JS extends Ua{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(r-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[l+d]*h+a[c+d]*u;return s}}class QS extends Ua{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ni{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mo(t,this.TimeBufferType),this.values=Mo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Mo(e.times,Array),values:Mo(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new QS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new JS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ZS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ba:t=this.InterpolantFactoryMethodDiscrete;break;case Ea:t=this.InterpolantFactoryMethodLinear;break;case Mc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ba;case this.InterpolantFactoryMethodLinear:return Ea;case this.InterpolantFactoryMethodSmooth:return Mc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&KS(r))for(let o=0,c=r.length;o!==c;++o){const l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Mc,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(r)c=!0;else{const h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=Ea;class Us extends ni{constructor(e,t,n){super(e,t,n)}}Us.prototype.ValueTypeName="bool";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=ba;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;class vm extends ni{}vm.prototype.ValueTypeName="color";class Rs extends ni{}Rs.prototype.ValueTypeName="number";class XS extends Ua{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t);let l=e*o;for(let u=l+o;l!==u;l+=4)er.slerpFlat(s,0,a,l-o,a,l,c);return s}}class Cs extends ni{InterpolantFactoryMethodLinear(e){return new XS(this.times,this.values,this.getValueSize(),e)}}Cs.prototype.ValueTypeName="quaternion";Cs.prototype.InterpolantFactoryMethodSmooth=void 0;class Os extends ni{constructor(e,t,n){super(e,t,n)}}Os.prototype.ValueTypeName="string";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=ba;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;class Ps extends ni{}Ps.prototype.ValueTypeName="vector";class eb{constructor(e="",t=-1,n=[],r=b0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Cn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(nb(n[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(ni.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const u=$S(c);c=cf(c,1,u),l=cf(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Rs(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let d=r[h];d||(r[h]=d=[]),d.push(l)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const m=[],p=[];_m(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){const x=d[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}r.push(new Rs(".morphTargetInfluence["+_+"]",m,p))}c=f.length*a}else{const f=".bones["+t[h].name+"]";n(Ps,f+".position",d,"pos",r),n(Cs,f+".quaternion",d,"rot",r),n(Ps,f+".scale",d,"scl",r)}}return r.length===0?null:new this(s,c,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function tb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Rs;case"vector":case"vector2":case"vector3":case"vector4":return Ps;case"color":return vm;case"quaternion":return Cs;case"bool":case"boolean":return Us;case"string":return Os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function nb(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=tb(i.type);if(i.times===void 0){const t=[],n=[];_m(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Gi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ib{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const rb=new ib;class Fs{constructor(e){this.manager=e!==void 0?e:rb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Fs.DEFAULT_MATERIAL_NAME="__DEFAULT";const ui={};class sb extends Error{constructor(e,t){super(e),this.response=t}}class xm extends Fs{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Gi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ui[e]!==void 0){ui[e].push({onLoad:t,onProgress:n,onError:r});return}ui[e]=[],ui[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ui[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){h.read().then(({done:x,value:v})=>{if(x)p.close();else{_+=v.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let E=0,A=u.length;E<A;E++){const R=u[E];R.onProgress&&R.onProgress(w)}p.enqueue(v),y()}},x=>{p.error(x)})}}});return new Response(m)}else throw new sb(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Gi.add(e,l);const u=ui[e];delete ui[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=ui[e];if(u===void 0)throw this.manager.itemError(e),l;delete ui[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ab extends Fs{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Gi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Ta("img");function c(){u(),Gi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class ym extends Fs{constructor(e){super(e)}load(e,t,n,r){const s=new Ot,a=new ab(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class oc extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ob extends oc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const il=new ke,lf=new P,uf=new P;class uh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $u,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;lf.setFromMatrixPosition(e.matrixWorld),t.position.copy(lf),uf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uf),t.updateMatrixWorld(),il.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(il),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(il)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class cb extends uh{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=As*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class lb extends oc{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new cb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const hf=new ke,Js=new P,rl=new P;class ub extends uh{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ee(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Js.setFromMatrixPosition(e.matrixWorld),n.position.copy(Js),rl.copy(n.position),rl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(rl),n.updateMatrixWorld(),r.makeTranslation(-Js.x,-Js.y,-Js.z),hf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hf)}}class hb extends oc{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new ub}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class db extends uh{constructor(){super(new Zu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gu extends oc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new db}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class da{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class fb extends Fs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Gi.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{r&&r(l)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Gi.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),Gi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Gi.add(e,c),s.manager.itemStart(e)}}const hh="\\[\\]\\.:\\/",pb=new RegExp("["+hh+"]","g"),dh="[^"+hh+"]",mb="[^"+hh.replace("\\.","")+"]",gb=/((?:WC+[\/:])*)/.source.replace("WC",dh),_b=/(WCOD+)?/.source.replace("WCOD",mb),vb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dh),xb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dh),yb=new RegExp("^"+gb+_b+vb+xb+"$"),Mb=["material","materials","bones","map"];class Sb{constructor(e,t,n){const r=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ct{constructor(e,t,n){this.path=t,this.parsedPath=n||ct.parseTrackName(t),this.node=ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ct.Composite(e,t,n):new ct(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pb,"")}static parseTrackName(e){const t=yb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);Mb.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[r];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ct.Composite=Sb;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ku}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ku);function df(i,e){if(e===E0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===cu||e===Fp){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===cu)for(let a=1;a<=n;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class bb extends Fs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Rb(t)}),this.register(function(t){return new Cb(t)}),this.register(function(t){return new Bb(t)}),this.register(function(t){return new zb(t)}),this.register(function(t){return new kb(t)}),this.register(function(t){return new Lb(t)}),this.register(function(t){return new Db(t)}),this.register(function(t){return new Ib(t)}),this.register(function(t){return new Nb(t)}),this.register(function(t){return new wb(t)}),this.register(function(t){return new Ub(t)}),this.register(function(t){return new Pb(t)}),this.register(function(t){return new Fb(t)}),this.register(function(t){return new Ob(t)}),this.register(function(t){return new Tb(t)}),this.register(function(t){return new Vb(t)}),this.register(function(t){return new Hb(t)})}load(e,t,n,r){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=da.extractUrlBase(e);a=da.resolveURL(l,this.path)}else a=da.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new xm(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Mm){try{a[Ke.KHR_BINARY_GLTF]=new Gb(e)}catch(h){r&&r(h);return}s=JSON.parse(a[Ke.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new nE(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case Ke.KHR_MATERIALS_UNLIT:a[h]=new Ab;break;case Ke.KHR_DRACO_MESH_COMPRESSION:a[h]=new Wb(s,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:a[h]=new qb;break;case Ke.KHR_MESH_QUANTIZATION:a[h]=new jb;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function Eb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Tb{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new we(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],tn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new gu(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new hb(u),l.distance=h;break;case"spot":l=new lb(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,pi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class Ab{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return rn}extendParams(e,t,n){const r=[];e.color=new we(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],tn),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,It))}return Promise.all(r)}}class wb{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Rb{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ee(o,o)}return Promise.all(s)}}class Cb{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Pb{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class Lb{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],tn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,It)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class Db{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class Ib{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(o[0],o[1],o[2],tn),Promise.all(s)}}class Nb{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Ub{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(o[0],o[1],o[2],tn),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,It)),Promise.all(s)}}class Ob{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class Fb{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class Bb{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class zb{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class kb{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Vb{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=r.byteOffset||0,l=r.byteLength||0,u=r.count,h=r.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,r.mode,r.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,r.mode,r.filter),f})})}else return null}}class Hb{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const l of r.primitives)if(l.mode!==Tn.TRIANGLES&&l.mode!==Tn.TRIANGLE_STRIP&&l.mode!==Tn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const g of h){const _=new ke,m=new P,p=new er,y=new P(1,1,1),x=new cm(g.geometry,g.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&y.fromBufferAttribute(c.SCALE,v),x.setMatrixAt(v,_.compose(m,p,y));for(const v in c)if(v==="_COLOR_0"){const w=c[v];x.instanceColor=new du(w.array,w.itemSize,w.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);mt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Mm="glTF",Qs=12,ff={JSON:1313821514,BIN:5130562};class Gb{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Qs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Mm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Qs,s=new DataView(e,Qs);let a=0;for(;a<r;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===ff.JSON){const l=new Uint8Array(e,Qs+a,o);this.content=n.decode(l)}else if(c===ff.BIN){const l=Qs+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Wb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const h=_u[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=_u[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],f=ds[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){r.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}h(f)},o,l,tn,d)})})}}class qb{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class jb{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}}class Sm extends Ua{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=r-t,h=(n-t)/u,d=h*h,f=d*h,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,y=1-m,x=p-d+h;for(let v=0;v!==o;v++){const w=a[_+v+o],E=a[_+v+c]*u,A=a[g+v+o],R=a[g+v]*u;s[v]=y*w+x*E+m*A+p*R}return s}}const Yb=new er;class Kb extends Sm{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return Yb.fromArray(s).normalize().toArray(s),s}}const Tn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ds={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},pf={9728:Qt,9729:xn,9984:wp,9985:Ao,9986:na,9987:gi},mf={33071:Hi,33648:Vo,10497:bs},sl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_u={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$b={CUBICSPLINE:void 0,LINEAR:Ea,STEP:ba},al={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Zb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Er({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mi})),i.DefaultMaterial}function ur(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function pi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Jb(i,e,t){let n=!1,r=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(r){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Qb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Xb(i){let e;const t=i.extensions&&i.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ol(t.attributes):e=i.indices+":"+ol(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+ol(i.targets[n]);return e}function ol(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function vu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function eE(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const tE=new ke;class nE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Eb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);r=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&a<98?this.textureLoader=new ym(this.options.manager):this.textureLoader=new fb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new xm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return ur(s,o,r),pi(o,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())s(u,o.children[l])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){n.load(da.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=sl[r.type],o=ds[r.componentType],c=r.normalized===!0,l=new o(r.count*a);return Promise.resolve(new Ft(l,a,c))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=sl[r.type],l=ds[r.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=r.byteOffset||0,f=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(d/f),y="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let x=t.cache.get(y);x||(_=new l(o,p*f,r.count*f/u),x=new im(_,f/u),t.cache.add(y,x)),m=new Aa(x,c,d%f/u,g)}else o===null?_=new l(r.count*c):_=new l(o,d,r.count*c),m=new Ft(_,c,g);if(r.sparse!==void 0){const p=sl.SCALAR,y=ds[r.sparse.indices.componentType],x=r.sparse.indices.byteOffset||0,v=r.sparse.values.byteOffset||0,w=new y(a[1],x,r.sparse.count*p),E=new l(a[2],v,r.sparse.count*c);o!==null&&(m=new Ft(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,R=w.length;A<R;A++){const M=w[A];if(m.setX(M,E[A*c]),c>=2&&m.setY(M,E[A*c+1]),c>=3&&m.setZ(M,E[A*c+2]),c>=4&&m.setW(M,E[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const r=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return u.magFilter=pf[d.magFilter]||xn,u.minFilter=pf[d.minFilter]||gi,u.wrapS=mf[d.wrapS]||bs,u.wrapT=mf[d.wrapT]||bs,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Qt&&u.minFilter!==xn,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=r.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Ot(_);m.needsUpdate=!0,d(m)}),t.load(da.resolveURL(h,s.path),g,void 0,f)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),pi(h,a),h.userData.mimeType=a.mimeType||eE(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Ke.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new nh,zn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new wa,zn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Er}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let a;const o={},c=s.extensions||{},l=[];if(c[Ke.KHR_MATERIALS_UNLIT]){const h=r[Ke.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new we(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],tn),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,It)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=gn);const u=s.alphaMode||al.OPAQUE;if(u===al.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===al.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==rn&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ee(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==rn&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==rn){const h=s.emissiveFactor;o.emissive=new we().setRGB(h[0],h[1],h[2],tn)}return s.emissiveTexture!==void 0&&a!==rn&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,It)),Promise.all(l).then(function(){const h=new a(o);return s.name&&(h.name=s.name),pi(h,s),t.associations.set(h,{materials:e}),s.extensions&&ur(r,h,s),h})}createUniqueName(e){const t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return gf(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=Xb(l),h=r[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=gf(new ht,l,t),r[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?Zb(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=a[f];let p;const y=l[f];if(m.mode===Tn.TRIANGLES||m.mode===Tn.TRIANGLE_STRIP||m.mode===Tn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new fS(_,y):new nt(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Tn.TRIANGLE_STRIP?p.geometry=df(p.geometry,Fp):m.mode===Tn.TRIANGLE_FAN&&(p.geometry=df(p.geometry,cu));else if(m.mode===Tn.LINES)p=new Oi(_,y);else if(m.mode===Tn.LINE_STRIP)p=new eh(_,y);else if(m.mode===Tn.LINE_LOOP)p=new th(_,y);else if(m.mode===Tn.POINTS)p=new ic(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Qb(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),pi(p,s),m.extensions&&ur(r,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return s.extensions&&ur(r,h[0],s),h[0];const d=new bt;s.extensions&&ur(r,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new $t(J0.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Zu(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),pi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),a=r,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const h=a[l];if(h){o.push(h);const d=new ke;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Xu(o,c)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,d=r.channels.length;h<d;h++){const f=r.channels[h],g=r.samplers[f.sampler],_=f.target,m=_.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,y=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let y=0,x=d.length;y<x;y++){const v=d[y],w=f[y],E=g[y],A=_[y],R=m[y];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const M=n._createAnimationTracks(v,w,E,A,R);if(M)for(let S=0;S<M.length;S++)p.push(M[S])}return new eb(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=r.weights.length;c<l;c++)o.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,tE)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(s.isBone===!0?u=new am:l.length>1?u=new bt:l.length===1?u=l[0]:u=new mt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=a),pi(u,s),s.extensions&&ur(n,u,s),s.matrix!==void 0){const h=new ke;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new bt;n.name&&(s.name=r.createUniqueName(n.name)),pi(s,n),n.extensions&&ur(t,s,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(r.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)s.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of r.associations)(d instanceof zn||d instanceof Ot)&&h.set(d,f);return u.traverse(d=>{const f=r.associations.get(d);f!=null&&h.set(d,f)}),h};return r.associations=l(s),s})}_createAnimationTracks(e,t,n,r,s){const a=[],o=e.name?e.name:e.uuid,c=[];Di[s.path]===Di.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Di[s.path]){case Di.weights:l=Rs;break;case Di.rotation:l=Cs;break;case Di.position:case Di.scale:l=Ps;break;default:switch(n.itemSize){case 1:l=Rs;break;case 2:case 3:default:l=Ps;break}break}const u=r.interpolation!==void 0?$b[r.interpolation]:Ea,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+Di[s.path],t.array,h,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=vu(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof Cs?Kb:Sm;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function iE(i,e,t){const n=e.attributes,r=new Xn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(r.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),o.normalized){const u=vu(ds[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new P,c=new P;for(let l=0,u=s.length;l<u;l++){const h=s[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=vu(ds[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;const a=new ei;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function gf(i,e,t){const n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=_u[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return Ze.workingColorSpace!==tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),pi(i,e),iE(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?Jb(i,e.targets,t):i})}const K={capas:{},et:new Map,t:0,stop:!0},Yo="./",ze={lima:"#C7FF27",marfil:"#F5F3EB",lavanda:"#A99BCB",agua:"#6FA3AF",arcilla:"#B58C78",coral:"#E36C4B",petroleo:"#294E59"},fh={A:ze.arcilla,B:ze.lavanda,C:ze.agua,D:ze.coral,E:ze.marfil,F:ze.lima},rE={A:"Dependencia de alimentos externos",B:"Crecimiento poblacional",C:"Valorización del suelo",D:"Especulación inmobiliaria",E:"Gestión de residuos sólidos",F:"Centralización de servicios"},xu={corabastos:[-715,-168],kennedy:[-926,1118],flores:[-451,-469],bavaria:[2119,-1067],mariapaz:[-533,-385],patio:[-2033,-1239],tintal:[-126,-3059],centro:[0,0]},sE=i=>fetch(Yo+i).then(e=>e.json());function wt(i,e,{visible:t=!1}={}){return e.visible=t,e.userData.v=t?1:0,e.traverse(n=>{(n.material?Array.isArray(n.material)?n.material:[n.material]:[]).forEach(s=>{s.userData.op0===void 0&&(s.userData.op0=s.opacity??1),s.transparent=!0})}),K.scene.add(e),K.capas[i]=e,e}function _f(i,e){i.userData.v=e,i.visible=e>.002,i.traverse(t=>{(t.material?Array.isArray(t.material)?t.material:[t.material]:[]).forEach(r=>{var s;(s=r.uniforms)!=null&&s.uOp?r.uniforms.uOp.value=e:r.opacity=r.userData.op0*e})})}function On(i,e=!0,t=.8){const n=K.capas[i];if(!n)return;const r={v:n.userData.v??0};if(He.killTweensOf(n.userData),t<=0)return _f(n,e?1:0);He.to(r,{v:e?1:0,duration:t,ease:e?"expo.out":"expo.in",onUpdate:()=>_f(n,r.v)})}const ph=i=>{var e;return(e=K.capas[i])==null?void 0:e.userData.u};function aE(i){const e=new nm;e.background=new we("#08090C");const t=(s,a,o,c,l)=>{const u=new nt(new Ia(1,1),new rn({color:new we(s).multiplyScalar(a),side:gn}));u.position.set(...o),u.rotation.set(...c),u.scale.set(l[0],l[1],1),e.add(u)};t(ze.marfil,6,[0,6,-9],[0,0,0],[12,2]),t(ze.marfil,3,[0,9,0],[Math.PI/2,0,0],[10,10]),t(ze.lavanda,2.4,[-8,1,3],[0,Math.PI/2,0],[10,3]),t(ze.lima,1.8,[8,-2,2],[0,-Math.PI/2,0],[8,1.5]),t(ze.marfil,2.6,[0,0,10],[0,Math.PI,0],[20,1]),t(ze.coral,1.2,[0,-6,6],[Math.PI/2,0,0],[5,5]);const n=new uu(i),r=n.fromScene(e,.02).texture;return n.dispose(),r}const Ls=(i="#f1f2f5")=>new Gn({color:i,metalness:1,roughness:.12,iridescence:.55,iridescenceIOR:1.4,iridescenceThicknessRange:[180,520],clearcoat:1,clearcoatRoughness:.05,envMapIntensity:2}),fs=()=>{const i=Ls(ze.lima);return i.metalness=.75,i.emissive=new we(ze.lima),i.emissiveIntensity=.3,i};function bm(i,e=28){return new Qn({transparent:!0,depthWrite:!1,blending:ko,uniforms:{uOp:{value:0},uAp:{value:0},uT:{value:0},uC:{value:new we(i)},uS:{value:e},uPix:{value:1}},vertexShader:`attribute float aR; attribute float aK; uniform float uAp, uT, uS, uPix; varying float vA; varying float vK;
      void main(){ float a = clamp((uAp*1.25 - aR)*6.0, 0.0, 1.0); vA = a; vK = aK;
        vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv;
        float pul = 1.0 + 0.25*sin(uT*2.0 + aR*40.0);
        gl_PointSize = uS * aK * a * pul * uPix * (900.0 / -mv.z); }`,fragmentShader:`uniform vec3 uC; uniform float uOp; varying float vA; varying float vK;
      void main(){ vec2 p = gl_PointCoord - .5; float d = length(p); if(d>.5) discard;
        float nucleo = smoothstep(.5, .12, d); float aro = smoothstep(.5,.42,d) - smoothstep(.42,.34,d);
        gl_FragColor = vec4(uC * (nucleo*0.9 + aro*0.8) + vec3(nucleo*nucleo*0.4), (nucleo*0.85 + aro) * uOp * vA); }`})}function Qr(i,e=260,t=140,n=520){return new Qn({transparent:!0,depthWrite:!1,blending:ko,uniforms:{uOp:{value:0},uT:{value:0},uDib:{value:1},uC:{value:new we(i)},uV:{value:e},uL:{value:t},uH:{value:n},uBase:{value:.18}},vertexShader:"attribute float aD; attribute float aDT; varying float vD; varying float vDT; void main(){ vD = aD; vDT = aDT; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform float uOp, uT, uDib, uV, uL, uH, uBase; uniform vec3 uC; varying float vD; varying float vDT;
      void main(){ if (vD > uDib * vDT) discard; float ph = mod(vD - uT*uV, uL + uH); float dash = ph < uL ? 1.0 : 0.0;
        gl_FragColor = vec4(uC, (uBase + dash*0.95) * uOp); }`})}function Xs(i,e=3){const t=[],n=[],r=[];i.forEach(a=>{let o=0;const c=[];for(let l=0;l+3<a.length;l+=2){const u=Math.hypot(a[l+2]-a[l],a[l+3]-a[l+1]);c.push([a[l],a[l+1],a[l+2],a[l+3],o,o+u]),o+=u}c.forEach(([l,u,h,d,f,g])=>{t.push(l,e,u,h,e,d),n.push(f,g),r.push(o,o)})});const s=new ht;return s.setAttribute("position",new Ve(t,3)),s.setAttribute("aD",new Ve(n,1)),s.setAttribute("aDT",new Ve(r,1)),s}function oE(i,e,t,n=8){const r=[],s=[],a=[];i.forEach(l=>{r.push(l[0],n+(l[2]||1)*4,l[1]),s.push(Math.random()),a.push(Math.min(3.5,Math.sqrt(l[2]||1)))});const o=new ht;o.setAttribute("position",new Ve(r,3)),o.setAttribute("aR",new Ve(s,1)),o.setAttribute("aK",new Ve(a,1));const c=new ic(o,bm(e,t));return c.frustumCulled=!1,c}async function cE(i){const e=new uS({canvas:i,antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(1.5,devicePixelRatio)),e.setSize(innerWidth,innerHeight,!1);const t=()=>{r.setViewOffset(innerWidth,innerHeight,-innerWidth*.11,0,innerWidth,innerHeight)};e.toneMapping=Tp,e.toneMappingExposure=1.1;const n=new nm;n.background=new we("#08090C"),n.fog=new Qu("#08090C",85e-6),n.environment=aE(e);const r=new $t(36,innerWidth/innerHeight,5,6e4);Object.assign(K,{r:e,scene:n,cam:r,obj:new P,pos:new P(0,9e3,9e3)}),n.add(new ob("#F5F3EB","#2a2c27",1.1));const s=new gu("#F5F3EB",1.6);s.position.set(-3e3,6e3,2500),n.add(s);const a=new gu(ze.lavanda,.9);a.position.set(4e3,1500,-4e3),n.add(a),addEventListener("resize",()=>{e.setSize(innerWidth,innerHeight,!1),r.aspect=innerWidth/innerHeight,t()}),t();const o=new nt(new vr(26e3,60,8,200),new rn({color:ze.lima,transparent:!0,opacity:.35,fog:!1}));o.rotation.x=Math.PI/2.2,o.position.set(0,-9e3,-24e3),n.add(o),K.arco=o;const c=new ht,l=[];for(let F=0;F<1500;F++)l.push((Math.random()-.5)*16e3,Math.random()*5e3,(Math.random()-.5)*16e3);c.setAttribute("position",new Ve(l,3)),K.polvo=new ic(c,new nh({color:ze.marfil,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:.35,depthWrite:!1})),n.add(K.polvo);const[u,h,d,f,g,_,m]=await Promise.all(["datos/limite.json","datos/vias.json","datos/agua.json","datos/upz.json","datos/lugares.json","datos/contexto.json","datos/pot.json"].map(sE));K.datos={lim:u,vias:h,agua:d,upz:f,lug:g,ctx:_,pot:m};const p=new hs(u.pts.map(([F,k])=>new ee(F,-k))),y=new jo(p,{depth:60,bevelEnabled:!1});y.rotateX(-Math.PI/2),y.translate(0,-60,0);const x=new bt;x.add(new nt(y,new Er({color:"#141613",roughness:.9,metalness:.1})));const v=new th(new ht().setFromPoints(u.pts.map(([F,k])=>new P(F,2,k))),new wa({color:ze.lima,transparent:!0,opacity:.9}));x.add(v),wt("losa",x);const w=Xs(h.vias.map(F=>F.slice(1)),2.5),E=Qr(ze.marfil,0,0,1);E.uniforms.uBase.value=.16,E.blending=br,wt("vias",new Oi(w,E));const A=h.vias.filter(F=>F[0]>=4).map(F=>F.slice(1)),R=Qr(ze.lavanda,420,90,700);R.uniforms.uBase.value=.35,wt("vias-prin",new Oi(Xs(A,4),R)),Xr("vias-prin",R);const M=Object.values(h.flujos||{}).flat(),S=Qr(ze.coral,520,160,420);S.uniforms.uBase.value=.12,wt("flujos",new Oi(Xs(M,9),S)),Xr("flujos",S);const L=new bt;d.agua.forEach(F=>{if(!F.poly||F.poly.length<3)return;const k=new hs(F.poly.map(([V,ie])=>new ee(V,-ie))),q=new sc(k);q.rotateX(-Math.PI/2),q.translate(0,3,0),L.add(new nt(q,new Er({color:ze.agua,roughness:.15,metalness:.6,emissive:ze.petroleo,emissiveIntensity:.6,transparent:!0,opacity:.85})))}),wt("agua",L);const z=new bt;K.upz={},f.upz.forEach(F=>{const k=new hs(F.poly.map(([fe,Le])=>new ee(fe,-Le))),q=new jo(k,{depth:1,bevelEnabled:!1});q.rotateX(-Math.PI/2);const V=new we(ze.lavanda).lerp(new we(ze.coral),Math.min(1,F.dens/440)),ie=new nt(q,new Er({color:V,transparent:!0,opacity:.55,roughness:.4,metalness:.3,emissive:V,emissiveIntensity:.25}));ie.scale.y=.001,ie.userData.h=F.dens*1.5,z.add(ie);const le=new Oi(new wS(q,30),new wa({color:ze.marfil,transparent:!0,opacity:.5}));ie.add(le),K.upz[F.n]={m:ie,u:F}}),wt("upz",z),[..."ABCDEF"].forEach(F=>{const k=g[F].pts,q=oE(k,fh[F],F==="F"?90:F==="B"?10:22,10);wt("p"+F,q),Xr("p"+F,q.material)});const O=(_.iso||[]).map(F=>F.slice(1)),W=Qr(ze.lima,300,60,120);if(W.uniforms.uBase.value=.45,wt("iso",new Oi(Xs(O,12),W)),Xr("iso",W),_.metro){const F=Qr(ze.lavanda,600,300,300);F.uniforms.uBase.value=.5,wt("metro",new Oi(Xs([_.metro.flat()],30),F)),Xr("metro",F)}return await lE(),uE(m),dE(),fE(),pE(),await gE(),vE(),xE(),K}function Xr(i,e){K.capas[i].userData.u=e.uniforms}async function lE(){const i=await fetch(Yo+"datos/edif.bin").then(d=>d.arrayBuffer()),e=new DataView(i),t=e.getUint32(4,!0),n=new Is(1,1,1);n.translate(0,.5,0);const r=new Er({color:"#ffffff",roughness:.55,metalness:.35,envMapIntensity:.6}),s={uSube:{value:0},uOri:{value:new ee(-715,-168)},uR:{value:9e3},uFoco:{value:new ee(-715,-168)},uFR:{value:0},uFC:{value:new we(ze.lima)},uGris:{value:0},uOp:{value:1}};r.onBeforeCompile=d=>{Object.assign(d.uniforms,s),d.vertexShader=`uniform float uSube, uR, uFR; uniform vec2 uOri, uFoco; varying float vF;
`+d.vertexShader.replace("#include <begin_vertex>",`
      vec2 cen = (instanceMatrix * vec4(0.,0.,0.,1.)).xz;
      float ola = clamp((uSube * uR - distance(cen, uOri)) / 380.0, 0.0, 1.0);
      vec3 transformed = vec3(position.x, position.y * ola, position.z);
      vF = uFR > 0. ? 1.0 - smoothstep(uFR*0.55, uFR, distance(cen, uFoco)) : 0.0;`),d.fragmentShader=`uniform vec3 uFC; uniform float uGris; varying float vF;
`+d.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      diffuseColor.rgb = mix(diffuseColor.rgb, uFC, vF*0.85); diffuseColor.rgb *= mix(1.0, 0.35, uGris*(1.0-vF));`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance += uFC * vF * 0.35;`)};const a=new cm(n,r,t),o=new mt,c=new we,l=new we("#3a3c38"),u=new we("#d9dbd2");for(let d=0;d<t;d++){const f=8+d*12,g=e.getInt16(f+10,!0)/2;o.position.set(e.getInt16(f,!0)/2,0,e.getInt16(f+2,!0)/2),o.rotation.set(0,e.getInt16(f+8,!0)/1e4,0),o.scale.set(e.getInt16(f+4,!0)/2,Math.max(3,g*2.2),e.getInt16(f+6,!0)/2),o.updateMatrix(),a.setMatrixAt(d,o.matrix),a.setColorAt(d,c.copy(l).lerp(u,Math.min(1,Math.pow(g/40,.7))))}a.frustumCulled=!1;const h=new bt;h.add(a),wt("edif",h),K.capas.edif.userData.u=s,r.transparent=!1}function uE(i){const e=Object.keys(i.nodos),t=Object.fromEntries(e.map((x,v)=>[x,v])),n=Object.values(i.aristas).filter(x=>t[x.a]!==void 0&&t[x.b]!==void 0),r=new Array(e.length).fill(0);n.forEach(x=>{r[t[x.a]]++,r[t[x.b]]++});let s=7;const a=()=>(s=s*16807%2147483647)/2147483647,o=e.map(()=>new P((a()-.5)*3e3,(a()-.5)*1600,(a()-.5)*3e3));for(let x=0;x<260;x++){const v=o.map(()=>new P);for(let w=0;w<o.length;w++)for(let E=w+1;E<o.length;E++){const A=o[w].clone().sub(o[E]),R=Math.max(60,A.length());A.multiplyScalar(26e5/(R*R*R)),v[w].add(A),v[E].sub(A)}n.forEach(w=>{const E=t[w.a],A=t[w.b],R=o[A].clone().sub(o[E]),M=R.length();R.multiplyScalar((M-560)*.02/Math.max(M,1)),v[E].add(R),v[A].sub(R)}),o.forEach((w,E)=>{v[E].add(w.clone().multiplyScalar(-.004)),w.add(v[E].clampLength(0,120))})}const c=new bt;c.position.set(0,1500,0);const l=Math.max(...r),u=[...r].sort((x,v)=>v-x)[4],h=new Na(1,32,20),d=e.map((x,v)=>{const w=r[v]>=u,E=new nt(h,w?fs():Ls());return E.position.copy(o[v]),E.userData={r:22+Math.sqrt(r[v])*16,hub:w,grado:r[v],nombre:i.nodos[x].nombre,capa:i.nodos[x].capa},E.scale.setScalar(E.userData.r),c.add(E),E}),f=[],g=[],_=[];n.forEach(x=>{const v=o[t[x.a]],w=o[t[x.b]],E=v.distanceTo(w);f.push(v.x,v.y,v.z,w.x,w.y,w.z),g.push(0,E),_.push(E,E)});const m=new ht;m.setAttribute("position",new Ve(f,3)),m.setAttribute("aD",new Ve(g,1)),m.setAttribute("aDT",new Ve(_,1));const p=Qr(ze.marfil,380,50,300);p.uniforms.uBase.value=.3;const y=new Oi(m,p);c.add(y),wt("red-pot",c),K.capas["red-pot"].userData.u=p.uniforms,K.pot={grp:c,nodos:d,aristas:n.length,max:l}}const hE={aristas:[["B","A"],["B","F"],["F","C"],["F","D"],["C","D"],["A","F"],["A","E"],["F","E"]]};function dE(){const i=new bt;i.position.set(0,900,0);const e=["F","A","E","D","C","B"],t={};e.forEach((a,o)=>{if(a==="F")t[a]=new P(0,120,0);else{const c=(o-1)/5*Math.PI*2-Math.PI/2;t[a]=new P(Math.cos(c)*1500,0,Math.sin(c)*1500)}});const n=K.datos.lug;K.red6Suelo={},[..."ABCDEF"].forEach(a=>{var u,h;const o=(h=(u=n[a].hitos)==null?void 0:u[0])==null?void 0:h.p;let c=0,l=0;o?[c,l]=o:(n[a].pts.forEach(d=>{c+=d[0],l+=d[1]}),c/=n[a].pts.length,l/=n[a].pts.length),K.red6Suelo[a]=new P(c,-860,l)});const r={};e.forEach(a=>{const o=new nt(new Na(1,40,24),a==="F"?fs():Ls(fh[a]));o.position.copy(t[a]),o.scale.setScalar(a==="F"?210:140),o.userData.k=a,i.add(o),r[a]=o});const s=hE.aristas.map(([a,o])=>{const c=t[a],l=t[o],u=c.clone().add(l).multiplyScalar(.5).add(new P(0,380,0)),h=new sh(c,u,l),d=new nt(new ac(h,60,14,8,!1),new rn({color:a==="F"||o==="F"?ze.lima:ze.marfil,transparent:!0,opacity:.85}));return d.geometry.setDrawRange(0,0),d.userData={a,b:o,curva:h,total:d.geometry.index.count},i.add(d),d});wt("red6",i),K.red6={grp:i,nod:r,tubos:s,P:t}}function yu(i,e=1){return new nt(new lh(e*.96,e,96),new rn({color:i,transparent:!0,opacity:.9,side:gn,depthWrite:!1}))}function fE(){const i=K.datos.lug,e=K.datos.upz.upz,t=new bt;K.mercados=[],e.forEach(m=>{const p=new bt;p.position.set(m.c[0],14,m.c[1]);const y=yu(ze.lima,1e3);y.rotation.x=-Math.PI/2,y.scale.setScalar(.001),p.add(y);const x=new nt(new ah(1e3,64),new rn({color:ze.lima,transparent:!0,opacity:.07,depthWrite:!1}));x.rotation.x=-Math.PI/2,x.scale.setScalar(.001),p.add(x);const v=new nt(new ch(60),fs());v.position.y=120,p.add(v),p.userData={ar:y,disco:x,n:v},t.add(p),K.mercados.push(p)}),wt("mercados",t);const n=new bt;n.position.set(i.F.hitos[0].p[0],20,i.F.hitos[0].p[1]);const r=new nt(new vr(420,26,16,120),Ls());r.rotation.x=Math.PI/2,n.add(r);const s=new nt(new vr(620,10,12,120),fs());s.rotation.x=Math.PI/2,n.add(s),wt("corabastos",n),K.coraAros=[r,s];const a=i.E.pts,o=[[-533,-385]];for(let m=0;m<5;m++){let p=null,y=-1;for(let x=0;x<a.length;x+=7){const v=a[x],w=Math.min(...o.map(E=>Math.hypot(E[0]-v[0],E[1]-v[1])));w>y&&Math.abs(v[0])<3200&&Math.abs(v[1])<3200&&(y=w,p=[v[0],v[1]])}o.push(p)}const c=new bt;K.estaciones=[],o.forEach(m=>{const p=new bt;p.position.set(m[0],60,m[1]);const y=new nt(new vr(150,30,16,64),fs());y.rotation.x=Math.PI/2,p.add(y);const x=new nt(new vr(100,16,12,64),Ls());p.add(x),p.userData={a:y,b:x},c.add(p),K.estaciones.push(p)}),wt("estaciones",c);const l=K.datos.agua.agua.filter(m=>{var p;return((p=m.poly)==null?void 0:p.length)>2}).map(m=>{let p=0,y=0;return m.poly.forEach(x=>{p+=x[0],y+=x[1]}),new P(p/m.poly.length,30,y/m.poly.length)}).filter(m=>Math.abs(m.x)<4200&&Math.abs(m.z)<4200),u=new Set([0]),h=[l[0]];let d=0;for(;u.size<Math.min(l.length,14);){let m=-1,p=1e9;l.forEach((y,x)=>{if(!u.has(x)){const v=y.distanceTo(l[d]);v<p&&(p=v,m=x)}}),u.add(m),h.push(l[m]),d=m}const f=new lm(h),g=new nt(new ac(f,600,16,10,!1),new rn({color:"#9be15d",transparent:!0,opacity:.75}));g.geometry.setDrawRange(0,0),g.userData.total=g.geometry.index.count;const _=new bt;_.add(g),wt("corredores",_),K.corredor=g,K.parches=h}function pE(){const i=K.datos.vias.vias.filter(o=>o.length>8&&o[0]>=3).slice(0,2600),e=2600,t=new Float32Array(e*3),n=new Float32Array(e),r=[];for(let o=0;o<e;o++){const c=i[o%i.length].slice(1);r.push({v:c,t:Math.random()*(c.length/2-1),s:(.4+Math.random())*(Math.random()<.5?1:-1)}),n[o]=Math.random()}const s=new ht;s.setAttribute("position",new Ft(t,3)),s.setAttribute("aR",new Ft(n,1)),s.setAttribute("aK",new Ft(new Float32Array(e).fill(1),1));const a=new ic(s,bm(ze.marfil,9));a.material.uniforms.uAp.value=1,a.frustumCulled=!1,wt("agentes",a),Xr("agentes",a.material),K.agentes={ag:r,pos:t,g:s,vel:1}}function mE(i){const e=K.agentes;!e||!K.capas.agentes.visible||(e.ag.forEach((t,n)=>{const r=t.v.length/2-1;t.t+=t.s*i*1.6*e.vel,t.t<0&&(t.t=0,t.s*=-1),t.t>r&&(t.t=r,t.s*=-1);const s=Math.floor(Math.min(t.t,r-.001)),a=t.t-s;e.pos[n*3]=t.v[s*2]+(t.v[s*2+2]-t.v[s*2])*a,e.pos[n*3+1]=14,e.pos[n*3+2]=t.v[s*2+1]+(t.v[s*2+3]-t.v[s*2+1])*a}),e.g.attributes.position.needsUpdate=!0)}async function gE(){const i=new bt;K.esp={};const e=new ym,t=(s,a)=>{const o=e.load(Yo+"esp/"+s+".png");o.colorSpace=It;const c=new hS(new rm({map:o,transparent:!0,depthWrite:!1}));return c.scale.set(a,a*.9,1),c},n=K.parches||[new P],r=(s,a,o,c)=>{const l=[];for(let u=0;u<a;u++){const h=t(s,o),d=n[(u*3+s.length)%n.length];h.position.set(d.x+(Math.random()-.5)*600,c+Math.random()*120,d.z+(Math.random()-.5)*600),h.userData={base:h.position.clone(),f:Math.random()*6},i.add(h),l.push(h)}return l};K.esp.mirla=r("mirla",10,150,160),K.esp.tingua=r("tingua_bogotana",8,140,50),K.esp.colibri=r("colibri",6,110,200);try{const s=await new bb().loadAsync(Yo+"esp/abeja.glb");K.esp.abeja=[];for(let a=0;a<14;a++){const o=s.scene.clone(),c=new Xn().setFromObject(o),l=70/Math.max(.001,c.getSize(new P).length());o.scale.setScalar(l);const u=n[a%n.length];o.position.set(u.x+(Math.random()-.5)*500,120+Math.random()*80,u.z+(Math.random()-.5)*500),o.userData={base:o.position.clone(),f:Math.random()*6},i.add(o),K.esp.abeja.push(o)}}catch{K.esp.abeja=[]}wt("especies",i)}function _E(i){var e;(e=K.capas.especies)!=null&&e.visible&&Object.entries(K.esp).forEach(([t,n])=>n.forEach(r=>{const s=r.userData,a=t==="tingua"?60:220;r.position.set(s.base.x+Math.cos(i*.6+s.f)*a,s.base.y+Math.sin(i*2.4+s.f)*(t==="tingua"?6:30),s.base.z+Math.sin(i*.6+s.f)*a),t==="abeja"&&(r.rotation.y=-i*.6-s.f)}))}function vE(){const i=new bt,e=K.datos.lim.pts,t=new hs(e.map(([s,a])=>new ee(s,-a))),n=new sc(t);n.rotateX(-Math.PI/2);const r=[ze.lavanda,ze.agua,ze.arcilla,ze.coral,ze.marfil,ze.lima];K.capasPl=[];for(let s=0;s<18;s++){const a=new nt(n,new rn({color:r[s%r.length],transparent:!0,opacity:.1,side:gn,depthWrite:!1})),o=new th(new ht().setFromPoints(e.map(([c,l])=>new P(c,0,l))),new wa({color:r[s%r.length],transparent:!0,opacity:.7}));a.add(o),a.position.y=200+s*120,a.userData.y0=a.position.y,i.add(a),K.capasPl.push(a)}wt("capas18",i)}function xE(){const i=xu.bavaria,e=new bt;e.position.set(i[0],0,i[1]);const t=yu(ze.lima,700);t.rotation.x=-Math.PI/2,t.position.y=16,e.add(t);const n=yu(ze.lavanda,900);n.rotation.x=-Math.PI/2,n.position.y=16,e.add(n),K.nbic=["N","B","I","C"].map((r,s)=>{const a=new nt(new Na(48,32,20),s===1?fs():Ls());return a.userData={k:r,a:s/4*Math.PI*2},e.add(a),a}),wt("bavaria",e),K.bavAros=[t,n]}function yE(i){var e;(e=K.capas.bavaria)!=null&&e.visible&&(K.nbic.forEach(t=>{const n=t.userData.a+i*.35;t.position.set(Math.cos(n)*520,380+Math.sin(i+t.userData.a)*40,Math.sin(n)*520)}),K.bavAros[0].rotation.z=i*.2,K.bavAros[1].rotation.z=-i*.12)}const Ct={rapido:!1},Ce=i=>Ct.rapido?0:i,kn="expo.out",ME="expo.in",SE=()=>document.getElementById("capa"),Vn=new Map;function kt(i,e){if(Ct.rapido){const{duration:t,delay:n,stagger:r,ease:s,repeat:a,yoyo:o,...c}=e;return He.set(i,c)}return He.to(i,e)}function Xt(i,e,t){if(Ct.rapido){const{duration:n,delay:r,stagger:s,ease:a,repeat:o,yoyo:c,...l}=t;return He.set(i,l)}return He.fromTo(i,e,t)}function Hn(i,e){return Vn.has(i)&&cc(i,!0),e.dataset.id=i,SE().appendChild(e),Vn.set(i,e),bE(e),e}function bE(i){const e=4+Math.random()*5,t=3.6+Math.random()*1.6;i._flota=He.to(i,{"--fy":e+"px",duration:t,yoyo:!0,repeat:-1,ease:"sine.inOut",delay:1})}function cc(i,e=!1){var n;const t=Vn.get(i);if(t){if(Vn.delete(i),(n=t._flota)==null||n.kill(),He.killTweensOf(t),He.killTweensOf(t.querySelectorAll("*")),e||Ct.rapido)return t.remove();He.to(t,{opacity:0,y:"-=30",rotationX:25,filter:"blur(10px)",duration:.4,ease:ME,onComplete:()=>t.remove()})}}function Em(i=[]){[...Vn.keys()].forEach(e=>{i.includes(e)||cc(e)})}function Tm(){[...Vn.keys()].forEach(i=>cc(i,!0)),document.getElementById("etiquetas").innerHTML="",K.et.clear()}const EE=i=>Vn.get(i),en=(i,e,t)=>{const n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.innerHTML=t),n},bi=(i,e)=>{["left","top","right","bottom","width","height"].forEach(t=>{e[t]!==void 0&&(i.style[t]=typeof e[t]=="number"?e[t]+"vw":e[t])})},lc=(i,e=.9,t={})=>Xt(i,{opacity:0,rotationX:-70,z:-400,y:80,filter:"blur(14px)"},{opacity:1,rotationX:0,z:0,y:0,filter:"blur(0px)",duration:Ce(e),ease:kn,...t});function TE(i,e={}){const t=e.id||"tit",n=en("div","tit "+(e.cls||""));if(i.split(/(\*[^*]+\*|~[^~]+~)/).filter(Boolean).forEach(o=>{const c=o.startsWith("*"),l=o.startsWith("~");(c||l?o.slice(1,-1):o).split(/(\s+)/).forEach(h=>{if(!h)return;if(/^\s+$/.test(h)){n.appendChild(document.createTextNode(" "));return}const d=en(l?"s":"span","w"+(c?" kw":"")+(l?" tach":""),h);n.appendChild(d)})}),bi(n,e),Hn(t,n),e.kick){const o=en("div","kick",e.kick);bi(o,e),e.top!==void 0&&(o.style.top=`calc(${typeof e.top=="number"?e.top+"vw":e.top} - 44px)`),Hn(t+"-k",o),Xt(o,{opacity:0,x:-40},{opacity:1,x:0,duration:Ce(.6),ease:kn})}const s=n.querySelectorAll(".w");Xt(s,{opacity:0,y:60,rotationX:-80,filter:"blur(12px)"},{opacity:1,y:0,rotationX:0,filter:"blur(0px)",duration:Ce(.75),ease:kn,stagger:Ce(.07),delay:Ce(e.delay||0)});const a=n.querySelectorAll("s.tach");return a.length&&Xt(a,{"--r":"102%"},{"--r":"-2%",duration:Ce(.5),ease:kn,delay:Ce(1+(e.delay||0)),stagger:Ce(.2)}),n}function AE(i,e={}){const t=en("div","sub",i);return bi(t,e),Hn(e.id||"sub",t),Xt(t,{opacity:0,y:30,filter:"blur(8px)"},{opacity:1,y:0,filter:"blur(0px)",duration:Ce(.7),ease:kn,delay:Ce(e.delay??.3)}),t}const vf="0123456789#%/<>";function wE(i,e){const t=en("div","dato"+(e.chico?" chico":""),`<div class="v"><span class="num"></span>${e.suf?`<em>${e.suf}</em>`:""}</div><div class="l">${e.l||""}</div>`);bi(t,e),Hn(i,t);const n=t.querySelector(".num"),r=e.desde??0,s=e.v,a=e.dec??0,o=u=>(e.pre||"")+u.toLocaleString("es-CO",{minimumFractionDigits:a,maximumFractionDigits:a});if(Ct.rapido)return n.textContent=o(s),t;lc(t,.8);const c={v:r},l=o(s);return He.to(c,{v:s,duration:e.dur??1.4,ease:"expo.out",delay:e.delay||.1,onUpdate:()=>{const u=o(c.v),h=Math.floor((c.v-r)/(s-r||1)*u.length);n.textContent=u.split("").map((d,f)=>f<h||/[.,\s%]/.test(d)?d:vf[Math.random()*vf.length|0]).join("")},onComplete:()=>{n.textContent=l}}),t}function RE(i,e){const t=en("div","vid tarjeta"+(e.cls?" "+e.cls:""),`${e.img?`<img class="ico" src="${e.img}" alt="">`:""}${e.k?`<div class="k">${e.k}</div>`:""}<div class="t">${e.t||""}</div>${e.d?`<div class="d">${e.d}</div>`:""}`);return bi(t,e),e.rz&&(t.style.rotate=e.rz+"deg"),Hn(i,t),lc(t,.85,{delay:Ce(e.delay||0)}),t}function CE(i,e,t=!0){const n=Vn.get(i);n&&n.classList.toggle(e,t)}function PE(i,e){const t=en("div","lista");return bi(t,e),Hn(i,t),e.items.forEach((n,r)=>Am(i,n,r,e.n?e.n[r]:String(r+1).padStart(2,"0"),(e.delay||0)+r*.12)),t}function Am(i,e,t,n,r=0){const s=Vn.get(i);if(!s)return;const a=en("div","it",`<span class="n">${n??String(t+1).padStart(2,"0")}</span><span class="x">${e}</span>`);s.appendChild(a),Xt(a,{opacity:0,x:-60,rotationY:50,filter:"blur(10px)"},{opacity:1,x:0,rotationY:0,filter:"blur(0px)",duration:Ce(.7),ease:kn,delay:Ce(r)})}function LE(i,e){const t=e.video?`<video src="${e.src}" muted loop autoplay playsinline></video>`:`<img src="${e.src}" alt="">`,n=en("figure","foto",t+(e.cap?`<figcaption>${e.cap}</figcaption>`:""));return n.style.margin="0",bi(n,e),Hn(i,n),Xt(n,{opacity:0,rotationY:e.desde==="izq"?75:-75,rotationX:20,z:-600,x:e.desde==="izq"?-200:200},{opacity:1,rotationY:e.ry??-8,rotationX:e.rx??4,z:0,x:0,duration:Ce(1.1),ease:kn,delay:Ce(e.delay||0)}),He.to(n,{rotationY:(e.ry??-8)+6,duration:5,yoyo:!0,repeat:-1,ease:"sine.inOut",delay:1.2}),n}function DE(i,e,t=.9,n=[]){const r=Vn.get(i);if(!r)return;const s=r.querySelector("img"),a=r.querySelector("figcaption");if(Ct.rapido){s.src=e[e.length-1],a&&n.length&&(a.innerHTML=n[n.length-1]);return}const o=He.timeline();e.forEach((c,l)=>o.call(()=>{s.src=c,a&&n[l]&&(a.innerHTML=n[l]),He.fromTo(r,{scale:1.035,rotationZ:(Math.random()-.5)*2},{scale:1,rotationZ:0,duration:.25,ease:"steps(3)"})},null,l*t))}function IE(i,e){const t=(a,o)=>`<div class="lado ${a}"><div class="cab"><span>${a==="sin"?"Sin propuesta":"Con propuesta"}</span><span>${o.t||""}</span></div><div class="vista">${o.video?`<video src="${o.src}" muted loop autoplay playsinline></video>`:o.src?`<img src="${o.src}" alt="">`:""}${o.html||""}<span class="mono" style="position:absolute;right:10px;top:10px;font-size:10px;color:#b9bcb3;background:rgba(8,9,12,.7);padding:4px 8px">captura del simulador</span><div class="met"></div></div></div>`,n=en("div","par",t("sin",e.izq)+t("con",e.der));Hn(i,n);const[r,s]=n.querySelectorAll(".lado");return Xt(r,{opacity:0,rotationY:70,x:-300,z:-500},{opacity:1,rotationY:8,x:0,z:0,duration:Ce(1.1),ease:kn}),Xt(s,{opacity:0,rotationY:-70,x:300,z:-500},{opacity:1,rotationY:-8,x:0,z:0,duration:Ce(1.1),ease:kn,delay:Ce(.15)}),n}function NE(i,e){const t=Vn.get(i);t&&t.querySelectorAll(".met").forEach((n,r)=>{e.forEach((s,a)=>{const o=en("div","fila",`<span>${s}</span><span class="barra"><i></i></span>`);n.appendChild(o),Xt(o,{opacity:0,x:r?40:-40},{opacity:1,x:0,duration:Ce(.5),ease:kn,delay:Ce(a*.12)});const c=o.querySelector("i");He.fromTo(c,{width:"0%",left:"0%"},{width:"35%",left:"65%",duration:1.6,ease:"sine.inOut",repeat:-1,yoyo:!0,delay:a*.2})})})}function UE(i,e={}){const t=en("div","reloj vid",'<div class="k mono" style="color:var(--lima)">tick = 1 semana</div><div class="tick"><span class="sem">0</span><em>semanas</em></div><div class="mono" style="color:#b9bcb3">horizonte · 15 años = 780 semanas</div><div class="mono hora" style="color:var(--lavanda)">06:00</div>');if(bi(t,e),Hn(i,t),lc(t),Ct.rapido)return t.querySelector(".sem").textContent="780",t;const n={s:0};return He.to(n,{s:780,duration:6,ease:"power1.inOut",onUpdate:()=>{t.querySelector(".sem").textContent=Math.round(n.s);const r=Math.floor(n.s*7%24);t.querySelector(".hora").textContent=String(r).padStart(2,"0")+":00 · "+(r<6||r>18?"noche":"día")}}),t}function OE(i="go"){const e=en("div","gameover","GAME OVER");if(Hn(i,e),Ct.rapido)return e;const t=He.timeline();return t.fromTo(e,{opacity:0,scale:1.6,filter:"blur(20px)"},{opacity:1,scale:1,filter:"blur(0px)",duration:.5,ease:"expo.out"}),t.to(e,{x:()=>(Math.random()-.5)*24,skewX:()=>(Math.random()-.5)*14,duration:.08,repeat:9,yoyo:!0,ease:"steps(1)"},"<0.2"),t.to(e,{x:0,skewX:0,duration:.1}),e._flota=He.to(e,{textShadow:"8px 0 0 rgba(199,255,39,.7), -8px 0 0 rgba(169,155,203,.7)",duration:.3,repeat:-1,yoyo:!0,ease:"steps(2)",delay:1.2}),e}function FE(i,e,t={}){const n=en("div",t.cls||"",e);return n.style.position="absolute",bi(n,t),Hn(i,n),lc(n,.85,{delay:Ce(t.delay||0)}),n}function BE(i,e){mh(i,!0);const t=en("div","et "+(e.cls||""),`<i class="p"></i><div class="c"><b>${e.t}</b>${e.s?`<small>${e.s}</small>`:""}</div>`);return e.c&&t.style.setProperty("--c",e.c),document.getElementById("etiquetas").appendChild(t),K.et.set(i,{e:t,p:new P(...e.p),obj:e.obj}),Xt(t.querySelector(".c"),{opacity:0,x:-30,clipPath:"inset(0 100% 0 0)"},{opacity:1,x:0,clipPath:"inset(0 0% 0 0)",duration:Ce(.6),ease:kn,delay:Ce(e.delay||0)}),Xt(t.querySelector(".p"),{scale:0},{scale:1,duration:Ce(.4),ease:"back.out(3)",delay:Ce(e.delay||0)}),t}function mh(i,e=!1){const t=K.et.get(i);if(t){if(K.et.delete(i),e||Ct.rapido)return t.e.remove();He.to(t.e,{opacity:0,duration:.3,onComplete:()=>t.e.remove()})}}function zE(){[...K.et.keys()].forEach(i=>mh(i))}const Ii=new P;function wm(){K.et.forEach(({e:i,p:e,obj:t})=>{Ii.copy(e),t&&t.getWorldPosition(Ii),Ii.project(K.cam);const n=Ii.z<1&&Math.abs(Ii.x)<1.1&&Math.abs(Ii.y)<1.1;i.style.display=n?"":"none",i.style.transform=`translate(${(Ii.x*.5+.5)*innerWidth}px, ${(-Ii.y*.5+.5)*innerHeight}px)`})}const kE=Object.freeze(Object.defineProperty({__proto__:null,D:Ce,R:Ct,agregarItem:Am,bloque:FE,dato:wE,el:EE,et:BE,filas:NE,flipbook:DE,foto:LE,gameover:OE,limpiar:Em,limpiarTodo:Tm,lista:PE,marcar:CE,par:IE,proyectarEts:wm,quitar:cc,quitarEt:mh,quitarEts:zE,reloj:UE,sub:AE,tarjeta:RE,titulo:TE,tw:kt,twf:Xt},Symbol.toStringTag,{value:"Module"})),uc=()=>document.getElementById("trans");function VE(){return K.r.render(K.scene,K.cam),K.r.domElement.toDataURL("image/jpeg",.86)}function Ni(i,e,t,n,r){const s=document.createElement("div");return s.className="pz",Object.assign(s.style,{left:e+"px",top:t+"px",width:n+"px",height:r+"px",backgroundImage:`url(${i})`,backgroundSize:`${innerWidth}px ${innerHeight}px`,backgroundPosition:`${-e}px ${-t}px`}),uc().appendChild(s),s}const xf=()=>{uc().innerHTML=""},yf={pliegue(i){const e=innerWidth/2,t=innerHeight,n=Ni(i,0,0,e,t),r=Ni(i,e,0,e,t);n.style.transformOrigin="0% 50%",r.style.transformOrigin="100% 50%";const s=He.timeline();return s.to(n,{rotationY:105,"--sombra":1,duration:1,ease:"expo.in"},0).to(r,{rotationY:-105,"--sombra":1,duration:1,ease:"expo.in"},.08),s},persiana(i){const t=Math.ceil(innerWidth/16),n=He.timeline();for(let r=0;r<16;r++){const s=Ni(i,r*t,0,t+1,innerHeight);s.style.transformOrigin="0% 50%",n.to(s,{rotationY:-92,"--sombra":1,duration:.55,ease:"power3.in"},r*.04)}return n},escalera(i){const t=Math.ceil(innerHeight/9),n=He.timeline();for(let r=0;r<9;r++){const s=Ni(i,0,r*t,innerWidth,t+1);n.to(s,{x:(r%2?1:-1)*innerWidth*1.1,rotationX:r%2?40:-40,z:-300,duration:.8,ease:"expo.in"},Math.abs(r-9/2)*.05)}return n},recorte(i){const n=Math.ceil(innerWidth/9),r=Math.ceil(innerHeight/5),s=He.timeline();for(let a=0;a<5;a++)for(let o=0;o<9;o++){const c=Ni(i,o*n,a*r,n+1,r+1);s.to(c,{y:innerHeight*(1.2+Math.random()*.4),x:(Math.random()-.5)*300,rotationZ:(Math.random()-.5)*120,rotationX:Math.random()*160,duration:.9+Math.random()*.3,ease:"power2.in"},(5-a)*.06+Math.random()*.25)}return s},cubo(i){const e=Ni(i,0,0,innerWidth,innerHeight);e.style.transformOrigin="100% 50%";const t=He.timeline();return t.to(e,{rotationY:-90,x:-innerWidth*.5,z:-innerWidth*.5,"--sombra":1,duration:1,ease:"expo.inOut"}),He.fromTo("#mundo, #escena",{rotationY:60,x:innerWidth*.4,transformPerspective:1600},{rotationY:0,x:0,duration:1,ease:"expo.inOut",clearProps:"transform"}),t},esquina(i){const e=Ni(i,0,0,innerWidth,innerHeight),t=document.createElement("div");t.className="marco-esq",uc().appendChild(t);const n=He.timeline();return n.fromTo(t,{right:"8vw",top:"10vh",width:40,height:40},{right:"1.5vw",top:"2vh",width:innerWidth*.97,height:innerHeight*.96,duration:.6,ease:"expo.in"}).to(e,{clipPath:"inset(0% 0% 100% 100%)",duration:.7,ease:"expo.inOut"},.35).to(t,{opacity:0,duration:.3},">-0.1"),n},vuelo(i){const e=Ni(i,0,0,innerWidth,innerHeight),t=He.timeline();return t.to(e,{scale:3.2,opacity:0,filter:"blur(18px)",duration:.9,ease:"expo.in"}),He.fromTo("#mundo",{scale:.7,filter:"blur(14px)"},{scale:1,filter:"blur(0px)",duration:1.1,ease:"expo.out",delay:.35,clearProps:"transform,filter"}),t}};async function HE(i,e){var s;const t=VE();xf(),He.timeline({paused:!0}),e();const n=(yf[i]||yf.pliegue)(t),r=document.createElement("div");Object.assign(r.style,{position:"absolute",inset:0,background:"rgba(199,255,39,.18)",pointerEvents:"none"}),uc().appendChild(r),He.to(r,{opacity:0,duration:.18,ease:"steps(2)",delay:.05}),await((s=n.then)==null?void 0:s.call(n)),xf()}const zt=i=>"./img/"+i,Ui=i=>"./esp/"+i+".png",cl=i=>"./vid/"+i,Mf=(i,e,t=0)=>i.et("n"+e,{p:[0,0,0],obj:i.W.red6.nod[e],t:i.NOM_P[e],c:i.COL_P[e],cls:"nodo",delay:t}),hi=(i,e,t,n,r,s=0,a=120)=>i.et(e,{p:[t[0],a,t[1]],t:n,s:r,delay:s}),ps=[{n:"00",nombre:"Kennedy",cam:"portada",tr:"vuelo",base:i=>{i.W.capas.edif.userData.u.uSube.value=0},beats:[{t:"[Portada] Kennedy: modelamiento dinámico y simulación.",a:i=>{i.sube(1,i.LUG.corabastos,5),i.capa("agua"),i.capa("vias-prin"),i.titulo("Kennedy: *modelamiento dinámico* y simulación",{kick:"Sustentación · Modelamiento dinámico y simulación",top:"58vh",width:70}),i.cam("alto",9)}}]},{n:"01",nombre:"Introducción",cam:"alto",tr:"pliegue",base:i=>{i.capa("agua",!0,0)},beats:[{t:"La modernización del abastecimiento, el crecimiento urbano y la transformación del suelo buscaban responder a necesidades diferentes,",a:i=>{i.tarjeta("c1",{k:"01 · abastecimiento",t:"Modernizar el abasto",left:8,top:"22vh",rz:-3}),i.tarjeta("c2",{k:"02 · ciudad",t:"Crecimiento urbano",left:38,top:"48vh",rz:2,delay:.25}),i.tarjeta("c3",{k:"03 · suelo",t:"Transformar el suelo",left:68,top:"24vh",rz:-2,delay:.5})}},{t:"pero sus efectos terminaron entrelazándose,",a:i=>{["c1","c2","c3"].forEach((e,t)=>i.tw(i.el(e),{left:34+t*4+"vw",top:34+t*5+"vh",rotation:(t-1)*9,duration:i.D(1.2),ease:"steps(10)"})),i.capa("flujos"),i.cam("cora",3)}},{t:"intensificando la dependencia alimentaria, la acumulación de residuos y la degradación de los ecosistemas.",a:i=>{i.limpiar(),i.titulo("*dependencia* alimentaria · *residuos* · ecosistemas *degradados*",{top:"14vh",width:60}),i.aparecer("pA"),i.aparecer("pE",1,2.4),i.foco(i.LUG.corabastos,1500,"#E36C4B")}},{t:"Problemas que no fueron consecuencia de una sola decisión, sino de múltiples dinámicas que se reforzaron entre sí.",a:i=>{i.limpiar(),i.sinFoco(),i.titulo("No fue ~una sola decisión~: *múltiples dinámicas* que se refuerzan",{top:"12vh",width:44,cls:"chico"}),i.foto("axo",{src:zt("axo_1956.jpg"),left:50,top:"20vh",width:42,height:"52vh",cap:"<b>1956</b> · Kennedy antes de Kennedy"}),i.flipbook("axo",[zt("axo_1956.jpg"),zt("axo_1972.jpg"),zt("axo_1988.jpg"),zt("axo_2024.jpg")],1.1,["<b>1956</b> · suelo rural","<b>1972</b> · llega Corabastos","<b>1988</b> · la ciudad crece","<b>2024</b> · hoy"])}},{t:"Precisamente, estas dinámicas y las relaciones son el punto central del proyecto de Modelamiento Dinámico y Simulación.",a:i=>{i.limpiar(),i.titulo("Las *relaciones* son el centro del proyecto",{cls:"centro"}),i.capa("vias-prin"),i.cam("alto",3),i.capa("flujos",!1)}},{t:"Su desarrollo comprende el análisis del POT de Bogotá, el diagnóstico y la formulación de los problemas de Kennedy,",a:i=>{i.limpiar(),i.lista("fases",{left:8,top:"22vh",items:["Análisis del POT de Bogotá","Diagnóstico y formulación de los problemas de Kennedy"]}),i.capa("red-pot"),i.cam("pot",3)}},{t:"la construcción de un modelo propio de ciudad y la exploración de sus posibles consecuencias mediante simulaciones.",a:i=>{i.agregarItem("fases","Construcción de un modelo propio de ciudad",2,"03"),i.agregarItem("fases",'Exploración de consecuencias mediante <span style="color:var(--lima)">simulaciones</span>',3,"04",.25),i.capa("red-pot",!1),i.capa("agentes"),i.cam("cora",3)}}]},{n:"02",nombre:"El POT y la ciudad como sistema complejo",cam:"pot",tr:"persiana",base:i=>{i.capa("edif",!0,0),i.gris(.7,0)},beats:[{t:"Como punto de partida, el Plan de Ordenamiento Territorial de Bogotá se reconstruyó como una red",a:i=>{i.capa("red-pot"),i.W.pot.nodos.forEach((e,t)=>i.twf(e.scale,{x:.01,y:.01,z:.01},{x:e.userData.r,y:e.userData.r,z:e.userData.r,duration:i.D(.5),ease:"back.out(2)",delay:i.D(t*.025)})),i.titulo("El POT reconstruido como una *red*",{kick:"02 · Punto de partida",width:40,cls:"chico"})}},{t:"a partir de los aportes de Albert-László Barabási, físico e investigador de la ciencia de redes.",a:i=>{i.tarjeta("bar",{k:"Ciencia de redes",t:"Albert-László Barabási",d:"Físico · los nodos y sus conexiones explican la estructura.",left:7,top:"46vh"}),i.dato("nn",{v:i.W.pot.nodos.length,l:"nodos del POT en el macromodelo",right:"7vw",top:"56vh",chico:!0})}},{t:"Se identificaron los nodos centrales,",a:i=>{i.W.pot.nodos.forEach(e=>{const t=e.userData.hub?e.userData.r*1.8:e.userData.r*.55;i.tw(e.scale,{x:t,y:t,z:t,duration:i.D(.9),ease:"steps(8)"})}),i.W.pot.nodos.filter(e=>e.userData.hub).slice(0,3).forEach((e,t)=>i.et("hub"+t,{p:[0,0,0],obj:e,t:e.userData.nombre.replace(/^[A-Z]+\d+ - /,""),s:e.userData.grado+" conexiones",cls:"nodo",delay:t*.2}))}},{t:"las relaciones de dependencia y las jerarquías que estructuran este modelo de ciudad.",a:i=>{i.uTo("red-pot","uV",900,1),i.uTo("red-pot","uBase",.55,1),i.quitar("bar"),i.quitar("nn"),i.titulo("Dependencias y *jerarquías*",{kick:"02 · Estructura del plan",width:40,cls:"chico"})}},{t:"Esta representación se contrastó con el enfoque de Michael Batty, investigador del urbanismo computacional que estudia las ciudades como sistemas complejos.",a:i=>{i.quitarEts(),i.tarjeta("bat",{k:"Urbanismo computacional",t:"Michael Batty",d:"La ciudad como sistema complejo: agentes, flujos y tiempo.",right:"7vw",top:"24vh"}),i.capa("agentes"),i.gris(0,1.5),i.cam({p:[2600,2300,4800],o:[0,700,0]},2.6)}},{t:"Se comprende que aunque el plan establece relaciones entre sus componentes, su representación no explica suficientemente",a:i=>{i.limpiar(),i.titulo("El plan *relaciona*… pero ~no explica~",{width:50})}},{t:"las interacciones entre agentes, los procesos de retroalimentación, las dinámicas emergentes",a:i=>{i.lista("falta",{left:8,top:"40vh",items:["Interacciones entre agentes","Retroalimentación","Dinámicas emergentes"],n:["↻","↻","↻"]}),i.agentesVel(3),i.uTo("red-pot","uV",1600,1)}},{t:"ni cómo estas transforman y producen problemas a través del tiempo.",a:i=>{i.dato("anio",{v:2026,desde:1972,l:"problemas que se producen a través del tiempo",right:"7vw",top:"58vh",dur:2.4}),i.capa("red-pot",!1,1.6),i.cam("alto",3),i.foco(i.LUG.corabastos,2600,"#E36C4B",2.4)}}]},{n:"03",nombre:"De los mapas a las dinámicas territoriales",cam:"capas",tr:"recorte",base:i=>{i.gris(.8,0)},beats:[{t:"Para comenzar a comprender Kennedy desde la complejidad, se cruzaron dieciocho capas de información satelital,",a:i=>{i.capas18("apila"),i.dato("d18",{v:18,l:"capas de información satelital",left:7,top:"22vh"})}},{t:"a partir de las cuales se construyeron nueve índices territoriales.",a:i=>{i.capas18("nueve"),i.dato("d9",{v:9,l:"índices territoriales",left:7,top:"52vh"})}},{t:"Entre ellos, el índice de concentración comercial y logística y el índice de soporte ecológico.",a:i=>{i.limpiar(),i.capas18("fuera"),i.cam("alto",2.4),i.gris(.4),i.tarjeta("icl",{k:"Índice 01",t:"Concentración comercial y logística",left:7,top:"24vh",cls:"on"}),i.tarjeta("ise",{k:"Índice 02",t:"Soporte ecológico",left:7,top:"46vh",delay:.2})}},{t:"Mientras las actividades comerciales y logísticas se intensificaban alrededor de Corabastos,",a:i=>{i.cam("cora",2.6),i.foco(i.LUG.corabastos,1400,"#E36C4B"),i.capa("flujos"),i.aparecer("pA"),hi(i,"cora",i.LUG.corabastos,"Corabastos","central mayorista",.8,260)}},{t:"el soporte ecológico presentaba discontinuidades y fragmentación de la cobertura vegetal.",a:i=>{i.marcar("icl","on",!1),i.marcar("ise","on"),i.quitarEt("cora"),i.cam("humedal",2.6),i.sinFoco(),i.capa("flujos",!1),i.capa("agua"),i.corredor(.35,2),i.gris(.75),i.titulo("*Fragmentación* de la cobertura vegetal",{right:"6vw",cls:"der chico",top:"14vh"})}},{t:"Al cruzar estos índices se pueden reconocer sectores donde coinciden diferentes presiones urbanas y ecológicas,",a:i=>{i.limpiar(),i.cam("alto",2.4),i.capa("flujos"),i.aparecer("pA"),i.foco(i.LUG.corabastos,2200,"#E36C4B"),i.titulo("Donde *coinciden* las presiones",{kick:"03 · Cruce de índices",width:40,cls:"chico"})}},{t:"identificando relaciones espaciales que orientan el análisis de los problemas.",a:i=>{hi(i,"cora",i.LUG.corabastos,"Corabastos","presión comercial",0),hi(i,"mp",i.LUG.mariapaz,"María Paz","residuos",.2,80),hi(i,"bv",i.LUG.bavaria,"Bavaria","predio de 71 ha",.4)}}]},{n:"04",nombre:"Los problemas de fondo",cam:"alto",tr:"pliegue",base:i=>{i.capa("agua",!0,0)},beats:[{t:"El análisis de estos índices permitió identificar diferentes problemas en Kennedy,",a:i=>{["A","B","C","D","E"].forEach((e,t)=>setTimeout(()=>i.aparecer("p"+e,1,1.2),i.R.rapido?0:t*250))}},{t:"dando paso al estudio de sus causas más profundas y a comprender cómo convergen en un problema estructural más amplio: la fragmentación territorial.",a:i=>{i.titulo("*Fragmentación* territorial",{cls:"centro"}),i.gris(.5),["A","B","C","D","E"].forEach(e=>i.uTo("p"+e,"uS",40,1.5,"steps(8)"))}},{t:"La hiperconcentración del mercado mayorista comienza por la inauguración de Corabastos en 1972 para mejorar la salubridad del abastecimiento,",a:i=>{i.limpiar(),["B","C","D","E"].forEach(e=>i.capa("p"+e,!1)),i.cam("cora",2.6),i.foco(i.LUG.corabastos,900,"#C7FF27"),i.capa("corabastos"),i.dato("a72",{v:1972,desde:1956,l:"se inaugura Corabastos",left:7,top:"20vh",dur:1.8}),i.foto("ax72",{src:zt("axo_1972.jpg"),right:"6vw",top:"22vh",width:34,height:"42vh",cap:"<b>1972</b> · Corabastos"})}},{t:"a medida que se perdió producción agrícola local, aumentó la dependencia de otras regiones y se concentraron los viajes de carga.",a:i=>{i.limpiar(),i.capa("flujos"),i.uTo("flujos","uV",900,1),i.uTo("flujos","uBase",.35,1),i.foto("fp",{src:zt("flujo_pico.jpg"),right:"6vw",top:"20vh",width:38,height:"46vh",cap:"<b>simulador</b> · carga en hora pico"}),i.lista("pc",{left:7,top:"24vh",width:40,items:["Se pierde producción local","Dependencia de otras regiones","Se concentran los viajes de carga"],n:["↓","↑","→"]})}},{t:"El segundo es la saturación de residuos.",a:i=>{i.limpiar(),i.capa("flujos",!1),i.cam("mariapaz",2.4),i.capa("corabastos",!1),i.aparecer("pE"),i.foco(i.LUG.mariapaz,900,"#F5F3EB"),i.titulo("Saturación de *residuos*",{kick:"04 · Problema 02",width:40})}},{t:"La concentración comercial incrementa la generación de desechos que, cuando superan la capacidad de recolección y tratamiento, se acumulan.",a:i=>{i.uTo("pE","uS",60,3,"steps(12)"),i.bloque("cap",'<div class="mono" style="color:#b9bcb3;margin-bottom:8px">capacidad de recolección</div><div style="position:relative;width:26vw;height:18px;border:1px solid rgba(245,243,235,.3)"><i class="llen" style="position:absolute;left:0;top:0;bottom:0;width:0;background:#E36C4B"></i><i style="position:absolute;left:70%;top:-8px;bottom:-8px;width:2px;background:#C7FF27"></i></div>',{left:7,top:"58vh"}),i.tw(i.el("cap").querySelector(".llen"),{width:"100%",duration:i.D(3),ease:"steps(12)",delay:i.D(.6)})}},{t:"A esto se suma la impermeabilización del suelo, que aumenta la escorrentía y el arrastre de contaminantes hacia los cuerpos de agua.",a:i=>{i.limpiar(),i.cam("humedal",2.6),i.gris(.9),i.sinFoco(),i.titulo("Suelo *impermeable* → escorrentía → agua",{width:46,cls:"chico"}),i.tarjeta("lx",{img:Ui("lixiviados"),k:"arrastre",t:"Contaminantes hacia los humedales",right:"7vw",top:"52vh"})}},{t:"Finalmente, la degradación del soporte ecológico está relacionada con la expansión urbana y la pérdida de vegetación, que fragmentan los hábitats",a:i=>{i.limpiar(),i.capa("especies"),i.W.capas.edif.userData.u.uSube.value=.2,i.sube(1,[0,0],4),i.titulo("Expansión urbana que *fragmenta* hábitats",{width:46,cls:"chico"}),i.gsap.delayedCall(i.R.rapido?0:2.6,()=>i.capa("especies",!1,1.4))}}]},{n:"05",nombre:"La red de los seis problemas",cam:"red6",tr:"cubo",base:i=>{i.gris(.85,0),i.capa("red6",!0,0),Object.values(i.W.red6.nod).forEach(e=>e.scale.setScalar(.01))},beats:[{t:"A partir de estas dinámicas identificamos seis problemas relacionados:",a:i=>{Object.entries(i.W.red6.nod).forEach(([e,t],n)=>{const r=e==="F"?210:140;i.twf(t.scale,{x:.01,y:.01,z:.01},{x:r,y:r,z:r,duration:i.D(.7),ease:"back.out(2.2)",delay:i.D(n*.12)})}),i.dato("seis",{v:6,l:"problemas relacionados",left:7,top:"20vh"})}},{t:"la centralización de servicios, el crecimiento poblacional, la valorización del suelo,",a:i=>{i.quitar("seis"),["F","B","C"].forEach((e,t)=>Mf(i,e,t*.35))}},{t:"la especulación inmobiliaria, la dependencia de alimentos externos y la gestión de residuos sólidos.",a:i=>{["D","A","E"].forEach((e,t)=>Mf(i,e,t*.35))}},{t:"Al representarlos como una red, encontramos que el crecimiento poblacional aumenta la demanda de alimentos y servicios,",a:i=>{i.arista(0),i.gsap.delayedCall(i.R.rapido?0:.6,()=>i.arista(1)),i.nodo6("B",180)}},{t:"cuya concentración influye en la valorización y especulación del suelo.",a:i=>{i.arista(2),i.gsap.delayedCall(i.R.rapido?0:.5,()=>i.arista(3)),i.gsap.delayedCall(i.R.rapido?0:1,()=>i.arista(4))}},{t:"A su vez, la dependencia alimentaria concentra el abastecimiento en Corabastos, aumentando la generación de residuos.",a:i=>{i.arista(5),i.gsap.delayedCall(i.R.rapido?0:.6,()=>i.arista(6)),i.gsap.delayedCall(i.R.rapido?0:1.2,()=>i.arista(7))}},{t:"Al ser la centralización de servicios uno de los nodos con mayor número de conexiones, se convierte en un problema prioritario para nuestra propuesta,",a:i=>{i.nodo6("F",330,1),["A","B","C","D","E"].forEach(e=>i.nodo6(e,105)),i.dato("cx",{v:5,l:"conexiones · nodo prioritario",left:7,top:"20vh"})}},{t:"porque su relación con los demás permite identificar dónde una intervención podría generar mayores transformaciones.",a:i=>{i.quitar("cx"),i.titulo("Intervenir donde la red *más se transforma*",{top:"12vh",width:44,cls:"chico"}),i.W.red6.tubos.forEach((e,t)=>{(e.userData.a==="F"||e.userData.b==="F")&&i.twf(e.material.color,{r:1,g:1,b:1},{r:.78,g:1,b:.15,duration:i.D(.6),repeat:i.R.rapido?0:3,yoyo:!0,ease:"steps(3)",delay:i.D(t*.1)})})}},{t:"Mediante la conectografía localizamos los problemas en Kennedy,",a:i=>{i.limpiar(),i.quitarEts(),i.aSuelo(!0),i.cam("mapa",2.6),i.gris(.6),i.titulo("*Conectografía*",{kick:"05 · Localizar los problemas",width:40})}},{t:"identificando dónde se concentran las actividades comerciales, la población, la valorización del suelo y los residuos.",a:i=>{["F","B","C","E"].forEach((e,t)=>{i.gsap.delayedCall(i.R.rapido?0:t*.5,()=>{i.aparecer("p"+e,1,1.2)})}),["F","B","C","E"].forEach((e,t)=>i.et("l"+e,{p:[i.W.red6Suelo[e].x,200,i.W.red6Suelo[e].z],t:i.NOM_P[e],c:i.COL_P[e],cls:"nodo",delay:t*.5}))}},{t:"Esto nos permitió reconocer dónde se manifiestan y establecer criterios de intervención a partir de sus indicadores.",a:i=>{i.limpiar(),i.titulo("De dónde se manifiestan → *criterios de intervención*",{top:"12vh",width:50,cls:"chico"})}}]},{n:"06",nombre:"Del diagnóstico a los criterios de diseño",cam:"cora",tr:"esquina",base:i=>{i.gris(.6,0),i.capa("agua",!0,0)},beats:[{t:"Corabastos y Las Flores concentran el 97 % del volumen mayorista registrado en Bogotá.",a:i=>{i.capa("corabastos"),i.foco(i.LUG.corabastos,900),i.dato("d97",{v:97,suf:"%",l:"del volumen mayorista de Bogotá · Corabastos y Las Flores",left:7,top:"18vh"}),hi(i,"cora",i.LUG.corabastos,"Corabastos","central mayorista",.3,260),hi(i,"fl",i.LUG.flores,"Plaza Las Flores","plaza distrital",.6,160)}},{t:"Para evaluar la accesibilidad a los mercados, tomamos quince minutos como tiempo de referencia.",a:i=>{i.limpiar(),i.quitarEts(),i.cam("alto",2.4),i.capa("iso"),i.dato("d15",{v:15,suf:"min",l:"tiempo de referencia para llegar a un mercado",left:7,top:"18vh"})}},{t:"Bajo este criterio, la cobertura estimada es del 28 %.",a:i=>{i.dato("d28",{v:28,suf:"%",l:"cobertura estimada actual",left:7,top:"50vh"})}},{t:"Por eso, nuestro criterio de diseño es aumentar esta cobertura al 75 %, mediante una red de mercados barriales distribuidos.",a:i=>{i.quitar("d15"),i.dato("d28",{v:75,desde:28,suf:"%",l:"criterio de diseño · red de mercados barriales distribuidos",left:7,top:"50vh",dur:2.2}),i.mercados(!0),i.capa("iso",!1),i.bloque("esq",'<span class="mono" style="color:#b9bcb3">esquema de la red distribuida · un nodo por UPZ</span>',{right:"6vw",bottom:"8vh"})}},{t:"En cuanto al crecimiento poblacional, Patio Bonito registra 435 habitantes por hectárea, frente a 90 en Tintal Norte.",a:i=>{i.limpiar(),i.mercados(!1),i.cam("oeste",2.6),i.capa("upz"),i.upzAlto(!0),i.capa("edif",!1),i.dato("pb",{v:435,l:"hab/ha · Patio Bonito",left:7,top:"18vh",chico:!0}),i.dato("tn",{v:90,l:"hab/ha · Tintal Norte",left:7,top:"46vh",chico:!0,delay:.6}),i.et("upb",{p:[i.LUG.patio[0],700,i.LUG.patio[1]],t:"Patio Bonito",s:"435 hab/ha"}),i.et("utn",{p:[i.LUG.tintal[0],320,i.LUG.tintal[1]],t:"Tintal Norte",s:"90 hab/ha",delay:.6})}},{t:"El criterio no consiste en igualar estas densidades, sino en distribuir servicios de acuerdo con la concentración poblacional y los déficits de cobertura.",a:i=>{i.limpiar(),i.quitarEts(),i.titulo("No ~igualar densidades~: *distribuir servicios* según la demanda",{width:48,cls:"chico"}),i.mercados(!0,.6)}},{t:"En valorización del suelo, el valor catastral de Kennedy aumentó un 33,4 % entre 2022 y 2026.",a:i=>{i.limpiar(),i.mercados(!1),i.upzAlto(!1),i.capa("upz",!1,1.2),i.capa("edif",!0,.2),i.cam("alto",2.4),i.foco([0,0],5200,"#A99BCB",2),i.aparecer("pC"),i.dato("d33",{v:33.4,dec:1,suf:"%",l:"aumento del valor catastral · 2022–2026",left:7,top:"18vh"})}},{t:"Actualmente se valora por el acceso a servicios y transporte, pero nuestro modelo ecocéntrico propone valorarlo por su biodiversidad, interacciones bióticas y conectividad ecológica.",a:i=>{i.limpiar(),i.sinFoco(),i.cam("humedal",2.6),i.titulo("Valorar por ~servicios y transporte~ → por *biodiversidad*, *interacciones* y *conectividad*",{width:52,cls:"chico"}),i.corredor(1,3),i.capa("especies")}},{t:"En especulación inmobiliaria, los precios anunciados cerca del metro aumentan aproximadamente un 12 % anual.",a:i=>{i.limpiar(),i.capa("especies",!1),i.capa("corredores",!1),i.capa("metro"),i.aparecer("pD"),i.cam("alto",2.4),i.dato("d12",{v:12,suf:"% anual",l:"precios anunciados cerca del metro",left:7,top:"18vh"})}},{t:"Nuestra propuesta busca proteger los espacios comunitarios y productivos frente al aumento del precio del suelo.",a:i=>{i.limpiar(),i.titulo("*Proteger* lo comunitario y lo productivo",{width:44}),i.mercados(!0,.35)}},{t:"En dependencia alimentaria, durante 2022 llegaron aproximadamente 2,2 millones de toneladas de alimentos a Corabastos.",a:i=>{i.limpiar(),i.mercados(!1),i.capa("metro",!1),i.capa("pD",!1),i.cam("cora",2.4),i.capa("flujos"),i.uTo("flujos","uBase",.4,1),i.capa("corabastos"),i.dato("d22",{v:2.2,dec:1,suf:"M t",l:"de alimentos llegaron a Corabastos en 2022",left:7,top:"18vh"})}},{t:"Nuestra propuesta busca aumentar la producción local y el abastecimiento distribuido, reduciendo la dependencia de un único nodo.",a:i=>{i.limpiar(),i.cam("alto",2.4),i.uTo("flujos","uBase",.08,2),i.mercados(!0),i.titulo("De *un único nodo* a una *red distribuida*",{width:44,cls:"chico"})}},{t:"Finalmente, en gestión de residuos, identificamos acumulaciones en María Paz de 5 toneladas de residuos orgánicos y 18 de voluminosos.",a:i=>{i.limpiar(),i.mercados(!1),i.capa("flujos",!1),i.capa("corabastos",!1),i.cam("mariapaz",2.4),i.aparecer("pE"),i.foco(i.LUG.mariapaz,600,"#E36C4B"),i.dato("d5",{v:5,suf:"t",l:"residuos orgánicos · María Paz",left:7,top:"18vh",chico:!0}),i.dato("d18",{v:18,suf:"t",l:"residuos voluminosos · María Paz",left:7,top:"46vh",chico:!0,delay:.5}),hi(i,"mp",i.LUG.mariapaz,"María Paz","acumulación de residuos",.4,80)}},{t:"Proponemos Estaciones Circulares para reducir estas acumulaciones y aprovechar la materia orgánica, con la meta de disminuir las toneladas acumuladas y aumentar las aprovechadas.",a:i=>{i.limpiar(),i.quitarEts(),i.sinFoco(),i.estaciones(!0),i.cam("alto",2.4),i.tarjeta("ec",{img:Ui("nutrientes"),k:"propuesta",t:"Estaciones Circulares",d:"↓ toneladas acumuladas · ↑ toneladas aprovechadas",left:7,top:"22vh",cls:"on"})}},{t:"De esta manera, los indicadores se convierten en criterios de localización, dimensionamiento y funcionamiento de las intervenciones.",a:i=>{i.limpiar(),i.mercados(!0,.5),i.titulo("Indicadores → *criterios*",{kick:"06 · De diagnóstico a diseño",width:40}),i.lista("crit",{left:8,top:"42vh",items:["Localización","Dimensionamiento","Funcionamiento"]})}}]},{n:"07",nombre:"Objetivos y macromodelos",cam:"alto",tr:"escalera",base:i=>{i.gris(.5,0),i.capa("agua",!0,0)},beats:[{t:"El objetivo general del proyecto es formular y evaluar, mediante simulaciones, un modelo urbano-arquitectónico ecocéntrico que transforme las relaciones territoriales asociadas a la fragmentación de Kennedy.",a:i=>{i.titulo("Formular y evaluar un modelo urbano-arquitectónico *ecocéntrico*",{kick:"07 · Objetivo general",width:60,cls:"chico"}),i.capa("agentes"),i.corredor(1,4)}},{t:"Para ello se establecieron tres objetivos específicos:",a:i=>{i.limpiar(),i.dato("o3",{v:3,l:"objetivos específicos",left:7,top:"16vh"}),i.lista("obj",{left:8,top:"46vh",width:50,items:[]})}},{t:"Analizar las relaciones espaciales entre los problemas y convertir sus indicadores en criterios de diseño.",a:i=>{i.agregarItem("obj",'Analizar relaciones espaciales → <span style="color:var(--lima)">criterios de diseño</span>',0),i.aparecer("pF",1,1),i.aparecer("pE",1,1)}},{t:"Plantear una red distribuida de equipamientos productivos, infraestructuras circulares y conexiones ecológicas articuladas mediante Bavaria Común.",a:i=>{i.agregarItem("obj",'Red distribuida articulada por <span style="color:var(--lima)">Bavaria Común</span>',1),i.mercados(!0,.5),i.estaciones(!0),i.capa("bavaria")}},{t:"Y evaluar las consecuencias de estas intervenciones mediante simulaciones contrastadas.",a:i=>{i.agregarItem("obj",'Evaluar con <span style="color:var(--lima)">simulaciones contrastadas</span>',2),i.agentesVel(2)}},{t:"El ecocentrismo constituye el macromodelo principal, complementado por dos enfoques que también pueden evaluarse: la circularidad de recursos y el comercio ecológico.",a:i=>{i.limpiar(),i.mercados(!1),i.capa("pF",!1),i.capa("pE",!1),i.tarjeta("m1",{k:"Macromodelo principal",t:"Ecocentrismo",left:37,top:"30vh",cls:"on"}),i.tarjeta("m2",{k:"Enfoque",t:"Circularidad de recursos",left:8,top:"58vh",delay:.3}),i.tarjeta("m3",{k:"Enfoque",t:"Comercio ecológico",right:"8vw",top:"58vh",delay:.5})}},{t:"El primero se comprueba mediante la biodiversidad, las interacciones bióticas, la continuidad de corredores y los ciclos biogeoquímicos.",a:i=>{i.el("m1").querySelector(".t").insertAdjacentHTML("afterend",'<div class="d">biodiversidad · interacciones bióticas · continuidad de corredores · ciclos biogeoquímicos</div>'),i.capa("especies"),i.cam("humedal",2.4)}},{t:"La circularidad se evalúa mediante el aprovechamiento de residuos y la recuperación de nutrientes.",a:i=>{i.marcar("m1","on",!1),i.marcar("m2","on"),i.el("m2").insertAdjacentHTML("beforeend",'<div class="d">aprovechamiento de residuos · recuperación de nutrientes</div>'),i.capa("especies",!1),i.cam("alto",2.4)}},{t:"Y el comercio ecológico, mediante la producción local, la autonomía alimentaria y la accesibilidad al abastecimiento.",a:i=>{i.marcar("m2","on",!1),i.marcar("m3","on"),i.el("m3").insertAdjacentHTML("beforeend",'<div class="d">producción local · autonomía alimentaria · accesibilidad</div>'),i.mercados(!0,.5)}},{t:"Estos indicadores establecen las condiciones que la propuesta busca transformar y que posteriormente se ponen a prueba.",a:i=>{i.limpiar(),i.titulo("Condiciones que se *ponen a prueba*",{cls:"centro"})}}]},{n:"08",nombre:"Bavaria Común y el simulador",cam:"bav",tr:"vuelo",base:i=>{i.gris(.7,0),i.capa("agua",!0,0),i.capa("vias-prin",!0,0)},beats:[{t:"Para materializar estos criterios se plantea Bavaria Común, un Distrito de Tecnologías Convergentes localizado en la antigua cervecería, entre las avenidas Boyacá y Las Américas.",a:i=>{i.capa("bavaria"),i.foco(i.LUG.bavaria,900),i.titulo("Bavaria *Común*",{kick:"08 · Distrito de Tecnologías Convergentes",width:40}),hi(i,"bv",i.LUG.bavaria,"Bavaria Común","Av. Boyacá × Av. Las Américas",.6,300)}},{t:"La intervención parte de la antigua cervecería Bavaria, un espacio actualmente desocupado y sin actividad.",a:i=>{i.limpiar(),i.foto("bvf",{src:zt("bavaria.jpg"),left:6,top:"20vh",width:44,height:"56vh",desde:"izq",ry:8,cap:"<b>simulador</b> · antigua cervecería Bavaria"})}},{t:"Se propone recuperar parte de sus estructuras para transformarlas en espacios de formación, investigación y experimentación.",a:i=>{i.lista("usos",{right:"7vw",top:"24vh",items:["Formación","Investigación","Experimentación"]}),i.cam("bavCerca",2.4)}},{t:"Su programa se fundamenta en los estudios sobre convergencia de tecnologías NBIC, desarrollados por Roco y Bainbridge en un informe científico de 2002.",a:i=>{i.limpiar(),i.quitarEts(),i.titulo("Convergencia *NBIC*",{kick:"Roco y Bainbridge · 2002",width:40}),["N","B","I","C"].forEach((e,t)=>i.et("nb"+e,{p:[0,0,0],obj:i.W.nbic[t],t:e,s:["nanotecnología","biotecnología","información","ciencias cognitivas"][t],cls:"nodo grande",delay:t*.2}))}},{t:"La biotecnología se vincula con la hidroponía, el compostaje y el cultivo experimental de hongos.",a:i=>{i.limpiar(),i.tarjeta("tb",{img:Ui("hongos"),k:"B · biotecnología",t:"Hidroponía · compostaje · hongos",left:7,top:"24vh",cls:"on"})}},{t:"Las tecnologías de la información coordinan pedidos, entregas y excedentes.",a:i=>{i.marcar("tb","on",!1),i.tarjeta("ti",{k:"I · información",t:"Pedidos · entregas · excedentes",left:7,top:"50vh",cls:"on"})}},{t:"Las ciencias cognitivas orientan el aprendizaje y la toma de decisiones, mientras la nanotecnología se incorpora como línea de investigación en materiales para la conservación de alimentos.",a:i=>{i.marcar("ti","on",!1),i.tarjeta("tc",{k:"C · cognitivas",t:"Aprendizaje y decisiones",right:"7vw",top:"24vh",cls:"on"}),i.tarjeta("tn",{k:"N · nanotecnología",t:"Materiales para conservar alimentos",right:"7vw",top:"50vh",delay:.5})}},{t:"Bavaria funciona como clúster de conocimiento y aprendizaje, mientras las capacidades productivas se distribuyen por Kennedy.",a:i=>{i.limpiar(),i.quitarEts(),i.cam("alto",2.6),i.mercados(!0,.5),i.sinFoco(),i.titulo("Conocimiento en *Bavaria*, producción *distribuida*",{width:46,cls:"chico"})}},{t:"Para evaluar estas intervenciones se desarrolló un simulador dirigido a arquitectos, urbanistas y actores vinculados con la transformación territorial.",a:i=>{i.limpiar(),i.mercados(!1),i.capa("bavaria",!1),i.foto("sim",{src:zt("portada_render.jpg"),left:22,top:"16vh",width:56,height:"58vh",cap:"<b>simulador</b> · Kennedy"}),i.bloque("pub",'<span class="mono" style="color:var(--lima)">arquitectos · urbanistas · actores territoriales</span>',{left:22,top:"80vh"})}},{t:"El entorno representa calles, edificios, cubiertas, lotes y humedales,",a:i=>{i.limpiar(),i.cam("humedal",2.4),i.capa("edif",!1,0),i.capa("vias",!1,0),i.capa("agua",!1,0);const e=[["vias","Calles"],["edif","Edificios · cubiertas"],["losa","Lotes"],["agua","Humedales"]];i.lista("ent",{left:7,top:"24vh",items:[]}),e.forEach(([t,n],r)=>i.gsap.delayedCall(i.R.rapido?0:r*.7,()=>{t==="edif"&&(i.W.capas.edif.userData.u.uSube.value=i.R.rapido?1:0),i.capa(t),t==="edif"&&i.sube(1,[-900,900],2),i.agregarItem("ent",n,r)}))}},{t:"junto con agentes que participan en procesos de desplazamiento, producción, consumo y distribución.",a:i=>{i.capa("agentes"),i.agentesVel(2),i.capa("especies"),i.lista("ag",{right:"7vw",top:"24vh",items:["Desplazamiento","Producción","Consumo","Distribución"],n:["●","●","●","●"]})}},{t:"El modelo dinámico-causal organiza sus relaciones, mientras el Game Design Canvas establece los controles, parámetros, reglas e indicadores.",a:i=>{i.limpiar(),i.capa("especies",!1),i.tarjeta("mdc",{k:"relaciones",t:"Modelo dinámico-causal",left:10,top:"30vh",cls:"on"}),i.tarjeta("gdc",{k:"controles · parámetros · reglas · indicadores",t:"Game Design Canvas",right:"10vw",top:"30vh",delay:.4})}},{t:"Cada tick representa una semana, con un horizonte de quince años y un control horario que permite visualizar diferentes momentos del día.",a:i=>{i.limpiar(),i.reloj("rel",{right:"7vw",top:"22vh"}),i.agentesVel(4),i.cam("alto",3)}},{t:"La evaluación se organiza en seis pares de simulaciones, bajo las mismas condiciones iniciales y perturbaciones, diferenciadas por la incorporación de la propuesta.",a:i=>{i.limpiar(),i.agentesVel(1);const e=["Abastecimiento","Movilidad","Residuos","Biodiversidad","Población","Recursos"];i.bloque("pares",`<div style="display:grid;grid-template-columns:repeat(6,1fr);gap:10px;width:84vw">${e.map((t,n)=>`<div class="vid" style="position:relative;padding:14px"><div class="mono" style="color:var(--lima)">par 0${n+1}</div><div style="font:800 22px var(--f);letter-spacing:-.03em;margin:8px 0">${t}</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:6px"><div class="mono" style="padding:8px;border:1px solid rgba(245,243,235,.2);font-size:10px">sin</div><div class="mono" style="padding:8px;border:1px solid #C7FF27;color:#C7FF27;font-size:10px">con</div></div></div>`).join("")}</div>`,{left:8,top:"34vh"}),i.R.rapido||i.gsap.from(i.el("pares").querySelectorAll(".vid"),{rotationY:-90,opacity:0,duration:.6,stagger:.12,ease:"expo.out"}),i.titulo("6 pares · *12 simulaciones*",{width:50,cls:"chico",top:"12vh"})}}]},{n:"09",nombre:"Primer par · abastecimiento y producción distribuida",cam:"cora",tr:"persiana",base:i=>{i.gris(.6,0),i.capa("agua",!0,0)},beats:[{t:"El primer par responde a la dependencia alimentaria y a la baja cobertura de mercados identificada en el diagnóstico.",a:i=>{i.titulo("Par 01 · *Abastecimiento*",{kick:"dependencia alimentaria · baja cobertura",width:44}),i.capa("flujos"),i.aparecer("pA"),i.capa("corabastos")}},{t:"La propuesta incorpora módulos productivos en cubiertas compartidas, colegios y otros espacios habilitados.",a:i=>{i.limpiar(),i.foto("inem",{src:zt("inem.jpg"),right:"6vw",top:"20vh",width:40,height:"50vh",cap:"<b>simulador</b> · módulos en cubiertas y colegios"}),i.lista("mod",{left:7,top:"26vh",items:["Cubiertas compartidas","Colegios","Espacios habilitados"]}),i.foco(i.LUG.corabastos,3e3,"#C7FF27",3)}},{t:"La formación se articula desde Bavaria, mientras las familias y organizaciones participan en la producción, destinando una parte al autoconsumo y otra a los puntos de acopio y mercados barriales.",a:i=>{i.limpiar(),i.sinFoco(),i.cam("alto",2.4),i.capa("bavaria"),i.mercados(!0,.5),i.tarjeta("auto",{k:"una parte",t:"Autoconsumo",left:7,top:"26vh"}),i.tarjeta("acop",{k:"otra parte",t:"Acopio y mercados barriales",left:7,top:"50vh",delay:.4,cls:"on"})}},{t:"Los alimentos que no pueden producirse localmente continúan llegando de otras regiones. Corabastos permanece como uno de los nodos de abastecimiento.",a:i=>{i.limpiar(),i.uTo("flujos","uBase",.2,1),hi(i,"cora",i.LUG.corabastos,"Corabastos","sigue siendo un nodo",.3,260)}},{t:"Al aumentar la demanda, el escenario sin propuesta conserva sus capacidades iniciales. En el segundo se incorporan los módulos productivos y mercados distribuidos.",a:i=>{i.quitarEts(),i.par("p1",{izq:{t:"capacidades iniciales",src:cl("sim_agentes.mp4"),video:!0},der:{t:"módulos + mercados",src:cl("sim_propuesta.mp4"),video:!0}})}},{t:"Comparamos los volúmenes recibidos, las reservas, los déficits, el autoconsumo y la cobertura de mercados a menos de quince minutos.",a:i=>i.filas("p1",["Volúmenes recibidos","Reservas","Déficits","Autoconsumo","Cobertura < 15 min"])},{t:"Así se evalúa si la distribución de capacidades productivas y comerciales responde al criterio de accesibilidad y autonomía alimentaria.",a:i=>{i.limpiar(),i.titulo("¿Responde a la *accesibilidad* y la *autonomía alimentaria*?",{cls:"centro chico"})}}]},{n:"10",nombre:"Segundo par · movilidad y accesibilidad",cam:"alto",tr:"recorte",base:i=>{i.gris(.7,0),i.capa("vias-prin",!0,0)},beats:[{t:"La localización de los mercados también responde a la configuración de la red vial.",a:i=>{i.titulo("Par 02 · *Movilidad*",{kick:"red vial y mercados",width:40}),i.mercados(!0,.4),i.uTo("vias-prin","uBase",.6,1)}},{t:"Mediante la sintaxis espacial, la integración permite reconocer tramos accesibles y la elección identifica recorridos potenciales.",a:i=>{i.limpiar(),i.mercados(!1),i.tarjeta("int",{k:"sintaxis espacial",t:"Integración",d:"tramos accesibles",left:7,top:"24vh",cls:"on"}),i.tarjeta("ele",{k:"sintaxis espacial",t:"Elección",d:"recorridos potenciales",left:7,top:"48vh",delay:.4}),i.uTo("vias-prin","uV",1200,1)}},{t:"En Bavaria, estos análisis orientan nuevos pasajes que conectan las naves recuperadas con las calles del entorno, evitando extender la intervención sobre el bosque.",a:i=>{i.limpiar(),i.cam("bavCerca",2.6),i.capa("bavaria"),i.foco(i.LUG.bavaria,700),i.foto("bv2",{src:zt("bavaria.jpg"),right:"6vw",top:"20vh",width:36,height:"46vh",cap:"<b>pasajes</b> · sin extenderse sobre el bosque"})}},{t:"Al modificar la circulación, observamos cómo los vehículos reorganizan sus recorridos.",a:i=>{i.limpiar(),i.capa("bavaria",!1),i.sinFoco(),i.cam("alto",2.4),i.capa("agentes"),i.agentesVel(4)}},{t:"Con la propuesta, los nuevos destinos comerciales y conexiones modifican parte de los desplazamientos.",a:i=>{i.mercados(!0,.4),i.agentesVel(2),i.titulo("Nuevos destinos → *nuevos recorridos*",{width:44,cls:"chico"})}},{t:"Comparamos los tiempos de viaje, los niveles de congestión y el ruido asociado al tránsito, considerando también sus posibles efectos sobre la fauna.",a:i=>{i.limpiar(),i.par("p2",{izq:{t:"hora pico",src:zt("flujo_pico.jpg")},der:{t:"ruido y fauna",src:zt("ruido.jpg")}}),i.filas("p2",["Tiempos de viaje","Congestión","Ruido del tránsito","Efectos sobre la fauna"])}},{t:"La prueba permite determinar en qué sectores disminuyen o aumentan las presiones y si la reorganización territorial mejora la capacidad de respuesta o traslada parte de la congestión hacia otros lugares.",a:i=>{i.limpiar(),i.titulo("¿Mejora la respuesta o *traslada* la congestión?",{cls:"centro chico"})}}]},{n:"11",nombre:"Tercer par · residuos y circularidad",cam:"mariapaz",tr:"cubo",base:i=>{i.gris(.7,0)},beats:[{t:"Los sectores con acumulación de residuos orientan la localización de Estaciones Circulares distribuidas.",a:i=>{i.titulo("Par 03 · *Residuos*",{kick:"estaciones circulares",width:40}),i.aparecer("pE"),i.estaciones(!0),i.cam("alto",3)}},{t:"Estas infraestructuras incorporan espacios de recepción, separación, almacenamiento y tratamiento de materia orgánica.",a:i=>{i.lista("est",{left:7,top:"40vh",items:["Recepción","Separación","Almacenamiento","Tratamiento orgánico"]})}},{t:"Parte de los residuos puede transformarse en compost y reincorporarse a los cultivos en suelo, relacionando el abastecimiento con la recuperación de nutrientes.",a:i=>{i.limpiar();const e=[["bacterias","compost"],["nutrientes","nutrientes"],["hongos","suelo vivo"],["sauco","cultivos"]];i.bloque("ciclo",`<div class="ciclo" style="position:relative;width:34vw;height:34vw">${e.map(([s,a],o)=>`<div class="cn" style="position:absolute;left:50%;top:50%;width:9vw;text-align:center;translate:-50% -50%"><img src="${Ui(s)}" style="width:7vw;height:7vw;object-fit:contain;filter:drop-shadow(0 6px 14px #000)"><div class="mono" style="color:var(--lima)">${a}</div></div>`).join("")}<div style="position:absolute;inset:12%;border:2px dashed rgba(199,255,39,.6);border-radius:50%"></div></div>`,{right:"8vw",top:"18vh"});const t=i.el("ciclo").querySelectorAll(".cn"),n={a:0},r=()=>t.forEach((s,a)=>{const o=n.a+a*Math.PI/2;s.style.transform=`translate(${Math.cos(o)*13}vw, ${Math.sin(o)*13}vw)`});r(),i.gsap.to(n,{a:Math.PI*2,duration:12,repeat:-1,ease:"none",onUpdate:r}),i.titulo("Residuo → *compost* → cultivo",{width:40,cls:"chico"})}},{t:"En esta prueba aumentamos la generación de residuos orgánicos en ambos escenarios.",a:i=>{i.uTo("pE","uS",70,2.5,"steps(10)"),i.titulo("Perturbación: *más residuos orgánicos* en ambos escenarios",{width:40,cls:"chico abajo"})}},{t:"Sin propuesta, los residuos dependen de las capacidades iniciales de gestión. Con propuesta, se incorporan las nuevas estaciones y sus capacidades de procesamiento.",a:i=>{i.limpiar(),i.par("p3",{izq:{t:"capacidades iniciales",html:`<img src="${Ui("lixiviados")}" style="position:absolute;inset:18% 30%;width:40%;height:auto;object-fit:contain">`},der:{t:"estaciones circulares",html:`<img src="${Ui("nutrientes")}" style="position:absolute;inset:18% 30%;width:40%;height:auto;object-fit:contain">`}})}},{t:"Se comparan las toneladas acumuladas, los residuos aprovechados, el compost recuperado y los momentos de saturación.",a:i=>i.filas("p3",["Toneladas acumuladas","Residuos aprovechados","Compost recuperado","Momentos de saturación"])},{t:"Esto permite evaluar cuánto material se reincorpora al ciclo productivo y bajo qué condiciones las estaciones mantienen su funcionamiento.",a:i=>{i.limpiar(),i.titulo("¿Cuánto material *vuelve al ciclo*?",{cls:"centro chico"})}}]},{n:"12",nombre:"Cuarto par · biodiversidad y conectividad ecológica",cam:"humedal",tr:"pliegue",base:i=>{i.gris(.75,0),i.capa("agua",!0,0)},beats:[{t:"El diagnóstico ecológico identificó discontinuidades entre hábitats y presiones asociadas a las vías, el ruido y la transformación del suelo.",a:i=>{i.titulo("Par 04 · *Biodiversidad*",{kick:"hábitats discontinuos",width:44}),i.capa("vias-prin"),i.foto("rd",{src:zt("ruido.jpg"),right:"6vw",top:"22vh",width:34,height:"40vh",cap:"<b>simulador</b> · ruido del tránsito"})}},{t:"La propuesta incorpora jardines florales, restauración vegetal, recuperación de bordes de humedal y corredores ecológicos.",a:i=>{i.limpiar(),i.corredor(1,3),i.lista("eco",{left:7,top:"24vh",items:["Jardines florales","Restauración vegetal","Bordes de humedal","Corredores ecológicos"]})}},{t:"Su localización responde a las relaciones entre las especies y sus recursos.",a:i=>{i.limpiar(),i.capa("especies"),i.titulo("Especies ↔ *recursos*",{width:40})}},{t:"Las abejas requieren recursos florales para la polinización;",a:i=>{i.limpiar(),i.cam({p:[-700,700,1500],o:[-900,120,900]},2.4),i.tarjeta("ab",{k:"polinización",t:"Abejas",d:"requieren recursos florales",left:7,top:"24vh",cls:"on"})}},{t:"las mirlas participan en la dispersión de semillas,",a:i=>{i.marcar("ab","on",!1),i.tarjeta("mi",{img:Ui("mirla"),k:"dispersión de semillas",t:"Mirlas",left:7,top:"46vh",cls:"on"})}},{t:"mientras las tinguas dependen de las condiciones de los humedales.",a:i=>{i.marcar("mi","on",!1),i.tarjeta("ti",{img:Ui("tingua_bogotana"),k:"humedales",t:"Tinguas",right:"7vw",top:"30vh",cls:"on"})}},{t:"En esta prueba introducimos el deterioro de un parche ecológico y observamos cómo responden las especies en los dos escenarios.",a:i=>{i.limpiar(),i.cam("humedal",2.4);const e=i.W.parches[2];i.foco([e.x,e.z],700,"#E36C4B"),i.et("par",{p:[e.x,150,e.z],t:"Parche deteriorado",s:"perturbación"}),i.titulo("Perturbación: un parche *se deteriora*",{width:44,cls:"chico"})}},{t:"Para comprobar el macromodelo ecocéntrico, analizamos la diversidad de especies, la continuidad de corredores, la conectividad funcional y las interacciones bióticas.",a:i=>{i.limpiar(),i.quitarEts(),i.sinFoco(),i.lista("ind",{left:7,top:"22vh",items:["Diversidad de especies","Continuidad de corredores","Conectividad funcional","Interacciones bióticas"]})}},{t:"También registramos los atropellamientos de fauna para reconocer las vías que dificultan sus desplazamientos.",a:i=>{i.limpiar(),i.cam("alto",2.4),i.uTo("vias-prin","uBase",.8,.6),i.titulo("Atropellamientos: las *vías* como barrera",{width:44,cls:"chico"})}},{t:"La comparación permite reconocer si las intervenciones mantienen las funciones ecológicas o si persisten condiciones de deterioro, a partir de los cambios en la permanencia de especies, sus interacciones y la conectividad de sus hábitats.",a:i=>{i.limpiar(),i.par("p4",{izq:{t:"deterioro",src:cl("sim_humedal.mp4"),video:!0},der:{t:"corredores y restauración",src:zt("arboles.jpg")}}),i.filas("p4",["Permanencia de especies","Interacciones","Conectividad de hábitats"])}}]},{n:"13",nombre:"Quinto par · población y presiones sobre el suelo",cam:"oeste",tr:"esquina",base:i=>{i.gris(.6,0),i.capa("upz",!0,0),i.capa("edif",!1,0)},beats:[{t:"La diferencia de densidad entre Patio Bonito y Tintal Norte evidencia que la demanda de servicios no se distribuye de manera uniforme.",a:i=>{i.upzAlto(!0),i.titulo("Par 05 · *Población*",{kick:"demanda no uniforme",width:40}),i.et("upb",{p:[i.LUG.patio[0],700,i.LUG.patio[1]],t:"Patio Bonito",s:"435 hab/ha",delay:.8}),i.et("utn",{p:[i.LUG.tintal[0],320,i.LUG.tintal[1]],t:"Tintal Norte",s:"90 hab/ha",delay:1.1})}},{t:"Por eso, la propuesta incorpora equipamientos de proximidad en sectores deficitarios y plantea proteger espacios productivos, comunitarios y ecológicos frente a las presiones inmobiliarias.",a:i=>{i.limpiar(),i.quitarEts(),i.mercados(!0,.45),i.aparecer("pD"),i.lista("prox",{left:7,top:"22vh",items:["Equipamientos de proximidad","Proteger lo productivo, comunitario y ecológico"]})}},{t:"En esta prueba introducimos el mismo crecimiento poblacional en ambos escenarios.",a:i=>{i.limpiar(),i.upzAlto(!0,1.35),i.titulo("Mismo *crecimiento* en ambos escenarios",{width:44,cls:"chico"})}},{t:"El análisis permite estudiar dónde se concentra ese crecimiento, qué servicios reciben los habitantes y cómo evolucionan los usos del suelo.",a:i=>{i.limpiar(),i.foto("usos",{src:zt("usos.jpg"),right:"6vw",top:"20vh",width:40,height:"50vh",cap:"<b>simulador</b> · usos del suelo"}),i.lista("q",{left:7,top:"24vh",items:["¿Dónde crece?","¿Qué servicios recibe?","¿Cómo cambian los usos?"],n:["?","?","?"]})}},{t:"Desde el enfoque ecocéntrico, el valor del territorio también se evalúa mediante su capacidad de mantener biodiversidad, conectividad e interacciones ecológicas.",a:i=>{i.limpiar(),i.upzAlto(!1),i.capa("edif",!0,.3),i.mercados(!1),i.capa("pD",!1),i.cam("humedal",2.4),i.capa("agua"),i.corredor(1,2.5),i.capa("especies"),i.titulo("El valor del suelo también es *ecológico*",{width:44,cls:"chico"})}},{t:"Así se reconocen las tensiones entre crecimiento urbano, presión inmobiliaria y capacidad de soporte ecológico.",a:i=>{i.limpiar(),i.tarjeta("t1",{k:"tensión",t:"Crecimiento urbano",left:40,top:"18vh"}),i.tarjeta("t2",{k:"tensión",t:"Presión inmobiliaria",left:14,top:"58vh",delay:.3}),i.tarjeta("t3",{k:"tensión",t:"Soporte ecológico",right:"12vw",top:"58vh",delay:.6,cls:"on"})}}]},{n:"14",nombre:"Sexto par · distribución de recursos",cam:"bav",tr:"escalera",base:i=>{i.gris(.7,0),i.capa("agua",!0,0)},beats:[{t:"La distribución de infraestructuras requiere también capacidades de organización y gestión.",a:i=>{i.titulo("Par 06 · *Recursos*",{kick:"organización y gestión",width:40})}},{t:"Entre los actores del territorio se encuentra el colectivo Salvemos el Bosque de Bavaria, cuya labor se relaciona con la protección de este ecosistema.",a:i=>{i.limpiar(),i.foco(i.LUG.bavaria,800,"#9be15d"),i.capa("bavaria"),i.foto("sbb",{src:zt("logo_bosque_bavaria.png"),right:"8vw",top:"22vh",width:24,height:"24vw",cap:"<b>colectivo</b> · Salvemos el Bosque de Bavaria"})}},{t:"La propuesta plantea una federación de asambleas con vocerías rotativas para coordinar iniciativas comunitarias, productivas y ambientales.",a:i=>{if(i.limpiar(),i.sinFoco(),i.capa("bavaria",!1),i.cam("alto",2.4),i.mercados(!0,.4),i.titulo("Federación de asambleas · vocería *rotativa*",{width:46,cls:"chico"}),!i.R.rapido){let e=0;const t=()=>{i.W.mercados.forEach((n,r)=>n.userData.n.scale.setScalar(r===e%i.W.mercados.length?2.6:1)),e++};t(),i.gsap.to({},{duration:.6,repeat:30,onRepeat:t})}}},{t:"La sexta prueba compara la distribución territorial de recursos limitados ante necesidades simultáneas en diferentes sectores.",a:i=>{i.limpiar(),i.capa("upz"),i.upzAlto(!0,.5),i.titulo("Recursos *limitados*, necesidades *simultáneas*",{width:46,cls:"chico"})}},{t:"Observamos qué equipamientos pueden habilitarse, qué necesidades se atienden y qué sectores permanecen sin cobertura.",a:i=>{i.limpiar(),i.W.mercados.forEach((e,t)=>{t%3===2&&i.tw(e.userData.ar.scale,{x:.001,y:.001,duration:i.D(.6),ease:"steps(4)",delay:i.D(t*.05)})}),i.lista("rec",{left:7,top:"22vh",items:["¿Qué se habilita?","¿Qué se atiende?","¿Qué queda sin cobertura?"],n:["✓","✓","✕"]})}},{t:"Esta simulación explora las consecuencias espaciales de distribuir recursos. La evaluación completa del funcionamiento político de la gobernanza heterárquica permanece como una posibilidad de desarrollo futuro.",a:i=>{i.limpiar(),i.upzAlto(!1),i.titulo("Gobernanza heterárquica: *desarrollo futuro*",{cls:"centro chico"})}}]},{n:"15",nombre:"Indicadores, condiciones críticas y Game Over",cam:"alto",tr:"recorte",base:i=>{i.gris(.8,0),i.capa("agentes",!0,0)},beats:[{t:"Los resultados de las doce simulaciones se comparan en momentos equivalentes, identificando qué condiciones cambian, dónde ocurre esa transformación y durante cuánto tiempo se mantiene.",a:i=>{i.titulo("12 simulaciones · *momentos equivalentes*",{width:50,cls:"chico"}),i.lista("qd",{left:8,top:"44vh",items:["Qué cambia","Dónde","Cuánto dura"]})}},{t:"Desde el comercio ecológico, se evalúa la producción local, la autonomía alimentaria y la accesibilidad a mercados.",a:i=>{i.limpiar(),i.tarjeta("g1",{k:"comercio ecológico",t:"Producción local · autonomía · accesibilidad",left:6,top:"24vh",cls:"on"}),i.mercados(!0,.4)}},{t:"Desde la circularidad, el aprovechamiento de residuos y la reincorporación de nutrientes.",a:i=>{i.marcar("g1","on",!1),i.tarjeta("g2",{k:"circularidad",t:"Residuos aprovechados · nutrientes",left:37,top:"24vh",cls:"on"}),i.estaciones(!0)}},{t:"Y desde el ecocentrismo, la diversidad de especies, las interacciones bióticas, la continuidad de corredores y los ciclos biogeoquímicos del agua, el carbono y los nutrientes.",a:i=>{i.marcar("g2","on",!1),i.tarjeta("g3",{k:"ecocentrismo",t:"Especies · interacciones · corredores · ciclos",right:"6vw",top:"24vh",cls:"on"}),i.corredor(1,2),i.capa("agua")}},{t:"Para identificar los límites de funcionamiento se plantearon condiciones de Game Over.",a:i=>{i.limpiar(),i.mercados(!1),i.gameover(),i.gris(1,.4),i.temblor()}},{t:"En abastecimiento, cuando un sector recibe menos del 80 % de los alimentos que necesita.",a:i=>{i.limpiar(),i.dato("g80",{v:80,pre:"< ",suf:"%",l:"abastecimiento · alimentos recibidos por sector",left:6,top:"22vh",chico:!0}),i.aparecer("pA")}},{t:"En residuos, cuando la acumulación supera la capacidad disponible de almacenamiento.",a:i=>{i.bloque("gres",'<div class="vid" style="position:relative;width:26vw"><div class="mono" style="color:var(--coral)">residuos</div><div style="font:800 36px var(--f);letter-spacing:-.04em;margin-top:8px">acumulación &gt; capacidad</div></div>',{left:37,top:"26vh"}),i.aparecer("pE")}},{t:"Y en biodiversidad, cuando la presencia de especies se reduce un 30 % o más respecto a las condiciones iniciales, según el indicador definido.",a:i=>{i.dato("g30",{v:30,pre:"−",suf:"%",l:"biodiversidad · presencia de especies o más",right:"6vw",top:"22vh",chico:!0})}},{t:"Estas condiciones se comprueban durante cuatro semanas consecutivas para distinguir fluctuaciones temporales de situaciones persistentes.",a:i=>{i.bloque("sem",`<div style="display:flex;gap:12px">${[1,2,3,4].map(e=>`<div class="vid s" style="position:relative;width:13vw;padding:18px"><div class="mono">semana ${e}</div><div class="b" style="height:10px;margin-top:14px;background:rgba(245,243,235,.12)"><i style="display:block;height:100%;width:0;background:var(--coral)"></i></div></div>`).join("")}</div>`,{left:14,top:"62vh"}),i.tw(i.el("sem").querySelectorAll("i"),{width:"100%",duration:i.D(.7),ease:"steps(5)",stagger:i.D(.7)})}},{t:"Basta con que se cumpla una de estas condiciones para activar el Game Over.",a:i=>{i.limpiar(),i.gameover(),i.temblor(),i.foco([0,0],6e3,"#E36C4B",.6)}},{t:"Cuando se alcanza un límite, el simulador registra el indicador afectado, su localización y la semana correspondiente.",a:i=>{i.limpiar(),i.sinFoco(),i.bloque("log",'<div class="vid" style="position:relative;width:40vw;font:500 18px var(--m);line-height:2"><div style="color:var(--coral)">● GAME OVER REGISTRADO</div><div>indicador ......... <span class="ty"></span></div><div>localización ...... <span class="ty"></span></div><div>semana ............ <span class="ty"></span></div></div>',{left:30,top:"30vh"});const e=["afectado","sector","n.º"];i.el("log").querySelectorAll(".ty").forEach((t,n)=>{if(i.R.rapido){t.textContent=e[n];return}const r={n:0};i.gsap.to(r,{n:e[n].length,duration:.6,delay:.5+n*.6,ease:"steps("+e[n].length+")",onUpdate:()=>t.textContent=e[n].slice(0,Math.round(r.n))+"▌"})})}},{t:"La comparación permite identificar cuáles intervenciones responden a los criterios de diseño, cuáles requieren ajustes y qué nuevas vulnerabilidades pueden surgir.",a:i=>{i.limpiar(),i.gris(.5),i.lista("res",{left:8,top:"30vh",items:["Responden a los criterios","Requieren ajustes","Nuevas vulnerabilidades"],n:["✓","↻","!"]})}}]},{n:"16",nombre:"Límites del modelo",cam:"alto",tr:"persiana",base:i=>{i.gris(1,0)},beats:[{t:"Los resultados dependen de las condiciones representadas en el modelo.",a:i=>{i.titulo("Los resultados dependen de lo *representado*",{cls:"centro chico"})}},{t:"La producción alimentaria está limitada por la superficie disponible y el rendimiento de los cultivos.",a:i=>{i.limpiar(),i.tarjeta("l1",{k:"límite",t:"Producción alimentaria",d:"superficie disponible · rendimiento de cultivos",left:7,top:"24vh"})}},{t:"El aprovechamiento de residuos depende de las capacidades de tratamiento, mientras las interacciones ecológicas requieren representar adecuadamente las necesidades de cada especie.",a:i=>{i.tarjeta("l2",{k:"límite",t:"Residuos",d:"capacidades de tratamiento",left:37,top:"24vh"}),i.tarjeta("l3",{k:"límite",t:"Interacciones ecológicas",d:"necesidades de cada especie",right:"6vw",top:"24vh",delay:.4})}},{t:"Por eso, las simulaciones no constituyen una predicción exacta del futuro de Kennedy.",a:i=>{i.limpiar(),i.titulo("No es una ~predicción exacta~",{cls:"centro"})}},{t:"Su aporte consiste en comparar decisiones, explorar sus consecuencias y reconocer las condiciones necesarias para que las intervenciones mantengan su funcionamiento.",a:i=>{i.limpiar(),i.gris(.3,2),i.capa("agentes"),i.lista("ap",{left:8,top:"28vh",items:["Comparar decisiones","Explorar consecuencias","Reconocer condiciones necesarias"]})}}]},{n:"17",nombre:"Cierre · posibilidades futuras",cam:"alto",tr:"vuelo",base:i=>{i.gris(.3,0),i.capa("agua",!0,0)},beats:[{t:"La investigación permitió pasar del análisis del POT al reconocimiento de las relaciones territoriales de Kennedy, convirtiendo los indicadores del diagnóstico en criterios de diseño que orientan una propuesta urbano-arquitectónica.",a:i=>{i.lista("rec",{left:7,top:"24vh",items:["POT","Relaciones territoriales","Indicadores","Criterios de diseño","Propuesta"],n:["→","→","→","→","●"]});const e=["red-pot","red6","mercados"];e.forEach((t,n)=>i.gsap.delayedCall(i.R.rapido?0:n*1.3,()=>{e.forEach(r=>i.capa(r,!1,.3)),t==="mercados"?i.mercados(!0,.5):i.capa(t)}))}},{t:"La evaluación se concentra en el macromodelo ecocéntrico, la circularidad de recursos y el comercio ecológico.",a:i=>{i.limpiar(),i.capas(["red6","red-pot"],!1),i.estaciones(!0),i.corredor(1,2),i.tarjeta("e1",{k:"principal",t:"Ecocentrismo",left:37,top:"22vh",cls:"on"}),i.tarjeta("e2",{t:"Circularidad",left:10,top:"56vh",delay:.3}),i.tarjeta("e3",{t:"Comercio ecológico",right:"10vw",top:"56vh",delay:.5})}},{t:"Sin embargo, otros enfoques, como el hidrocéntrico, el regenerativo, la autonomía territorial, las redes de cuidado y la gobernanza heterárquica, amplían las posibilidades del proyecto",a:i=>{i.limpiar();const e=["Hidrocéntrico","Regenerativo","Autonomía territorial","Redes de cuidado","Gobernanza heterárquica"];e.forEach((t,n)=>{const r=n/e.length*Math.PI*2-Math.PI/2;i.tarjeta("f"+n,{k:"enfoque futuro",t,left:40+Math.cos(r)*30,top:42+Math.sin(r)*28+"vh",delay:n*.18})})}},{t:"y requieren nuevas reglas e indicadores para comprobar su funcionamiento.",a:i=>{i.titulo("Nuevas *reglas* e *indicadores*",{cls:"centro chico"})}},{t:"Kennedy constituye el área de estudio donde se ponen a prueba estas relaciones, permitiendo explorar futuras aplicaciones del modelo a otras escalas de Bogotá.",a:i=>{i.limpiar(),i.mercados(!1),i.cam("lejos",5),i.titulo("Kennedy → *otras escalas* de Bogotá",{width:50,cls:"chico"})}},{t:"Así, el proyecto plantea una forma de diseñar la ciudad desde sus interdependencias, comprendiendo que cada intervención modifica múltiples dinámicas y que sus consecuencias pueden evaluarse antes de su materialización.",a:i=>{i.limpiar(),i.cam("alto",4),i.capa("agentes"),i.capa("flujos"),i.titulo("Diseñar la ciudad desde sus *interdependencias*",{cls:"centro"})}},{t:"Muchas gracias.",a:i=>{i.limpiar(),i.capas(["red6","red-pot"],!1),i.capas(["especies","vias-prin"]),i.titulo("Muchas *gracias*",{cls:"centro"}),i.bloque("aut",'<span class="mono" style="color:#b9bcb3">Kennedy · modelamiento dinámico y simulación</span>',{left:38,top:"64vh"})}}]}],Fi=new BroadcastChannel("kennedy-presentacion"),GE=new URLSearchParams(location.search).has("presentador"),Qi=[];ps.forEach((i,e)=>i.beats.forEach((t,n)=>Qi.push({...t,ci:e,bi:n})));const fa=Qi.length,Mu={alto:{p:[2200,7600,7e3],o:[0,0,300]},portada:{p:[-4200,3200,5200],o:[-500,200,0]},pot:{p:[0,3300,7400],o:[0,1500,0]},capas:{p:[6200,3600,6200],o:[0,1300,0]},red6:{p:[0,3400,4300],o:[0,950,0]},mapa:{p:[0,8800,3600],o:[0,0,200]},cora:{p:[385,1700,2132],o:[-715,0,-168]},coraCerca:{p:[-215,650,782],o:[-715,60,-168]},mariapaz:{p:[167,900,915],o:[-533,0,-385]},bav:{p:[3619,1600,1033],o:[2119,100,-1067]},bavCerca:{p:[2819,750,-67],o:[2119,150,-1067]},oeste:{p:[-1200,4300,5600],o:[-1300,200,-600]},humedal:{p:[-1200,1600,2600],o:[-900,0,900]},lejos:{p:[9e3,26e3,26e3],o:[0,0,0]}},Wi={p:new P(...Mu.portada.p),o:new P(...Mu.portada.o)};function Rm(i,e=2.2){const t=typeof i=="string"?Mu[i]:i;if(Ct.rapido||e===0){Wi.p.set(...t.p),Wi.o.set(...t.o);return}He.to(Wi.p,{x:t.p[0],y:t.p[1],z:t.p[2],duration:e,ease:"expo.inOut"}),He.to(Wi.o,{x:t.o[0],y:t.o[1],z:t.o[2],duration:e,ease:"expo.inOut"})}const Sf=(i,e,t,n=1,r="expo.out")=>{const s=ph(i);s!=null&&s[e]&&kt(s[e],{value:t,duration:Ce(n),ease:r})},Ko={...kE,R:Ct,D:Ce,tw:kt,twf:Xt,gsap:He,W:K,LUG:xu,COL_P:fh,NOM_P:rE,cam:Rm,uTo:Sf,capa:(i,e=!0,t=.9)=>On(i,e,Ce(t)),capas:(i,e=!0)=>i.forEach(t=>On(t,e,Ce(.9))),sube(i=1,e=xu.corabastos,t=3){const n=K.capas.edif.userData.u;n.uOri.value.set(e[0],e[1]),kt(n.uSube,{value:i,duration:Ce(t),ease:"power2.out"})},foco(i,e=900,t="#C7FF27",n=1.2){const r=K.capas.edif.userData.u;i&&r.uFoco.value.set(i[0],i[1]),r.uFC.value.set(t),kt(r.uFR,{value:e,duration:Ce(n),ease:"expo.out"})},sinFoco(i=.8){kt(K.capas.edif.userData.u.uFR,{value:0,duration:Ce(i)})},gris(i=1,e=1){kt(K.capas.edif.userData.u.uGris,{value:i,duration:Ce(e)})},aparecer(i,e=1,t=1.6){On(i,!0,Ce(.2)),Sf(i,"uAp",e,t,"steps(12)")},arista(i,e=1.1){const t=K.red6.tubos[i],n={v:t.geometry.drawRange.count===1/0?0:t.geometry.drawRange.count};kt(n,{v:t.userData.total,duration:Ce(e),ease:"steps(14)",onUpdate:()=>t.geometry.setDrawRange(0,Math.floor(n.v/3)*3)}),Ct.rapido&&t.geometry.setDrawRange(0,t.userData.total)},nodo6(i,e,t=.8){const n=K.red6.nod[i];kt(n.scale,{x:e,y:e,z:e,duration:Ce(t),ease:"back.out(2)"})},aSuelo(i=!0,e=2.4){Object.entries(K.red6.nod).forEach(([t,n],r)=>{const s=i?K.red6Suelo[t]:K.red6.P[t];kt(n.position,{x:s.x,y:s.y,z:s.z,duration:Ce(e),ease:"expo.inOut",delay:Ce(r*.08)})}),K.red6.tubos.forEach(t=>kt(t.material,{opacity:i?0:.85,duration:Ce(.6)}))},upzAlto(i=!0,e=1,t=1.6){Object.values(K.upz).forEach(({m:n},r)=>kt(n.scale,{y:i?n.userData.h*e:.001,duration:Ce(t),ease:"steps(10)",delay:Ce(r*.05)}))},mercados(i=!0,e=1){K.mercados.forEach((t,n)=>{const{ar:r,disco:s,n:a}=t.userData;kt([r.scale,s.scale],{x:i?e:.001,y:i?e:.001,z:1,duration:Ce(1.1),ease:"expo.out",delay:Ce(n*.09)}),kt(a.scale,{x:i?1:.001,y:i?1:.001,z:i?1:.001,duration:Ce(.6),ease:"back.out(2)",delay:Ce(n*.09)})}),i&&On("mercados",!0,Ce(.3))},estaciones(i=!0){On("estaciones",!0,Ce(.2)),K.estaciones.forEach((e,t)=>kt(e.scale,{x:i?1:.001,y:i?1:.001,z:i?1:.001,duration:Ce(.7),ease:"back.out(2)",delay:Ce(t*.12)}))},corredor(i=1,e=2.4){On("corredores",!0,Ce(.2));const t=K.corredor,n={v:t.geometry.drawRange.count===1/0?0:t.geometry.drawRange.count};kt(n,{v:i*t.userData.total,duration:Ce(e),ease:"steps(20)",onUpdate:()=>t.geometry.setDrawRange(0,Math.floor(n.v/3)*3)}),Ct.rapido&&t.geometry.setDrawRange(0,Math.floor(i*t.userData.total/3)*3)},capas18(i){On("capas18",i!=="fuera",Ce(.6)),K.capasPl.forEach((e,t)=>{if(i==="apila"&&Xt(e.position,{y:-200},{y:e.userData.y0,duration:Ce(.6),ease:"expo.out",delay:Ce(t*.08)}),i==="nueve"){const n=Math.floor(t/2);kt(e.position,{y:300+n*240,duration:Ce(1.2),ease:"steps(8)",delay:Ce(n*.05)})}})},agentesVel(i){Ct.rapido?K.agentes.vel=i:He.to(K.agentes,{vel:i,duration:1.5})},temblor(){Ct.rapido||He.fromTo("#mundo, #escena",{x:0},{x:()=>(Math.random()-.5)*30,y:()=>(Math.random()-.5)*20,duration:.06,repeat:8,yoyo:!0,ease:"steps(1)",clearProps:"transform"})}},WE=["losa","edif","vias","vias-prin","flujos","agua","upz","pA","pB","pC","pD","pE","pF","iso","metro","red-pot","red6","mercados","corabastos","estaciones","corredores","agentes","especies","capas18","bavaria"];function qE(){WE.forEach(e=>On(e,!1,0)),[..."ABCDEF"].forEach(e=>{const t=ph("p"+e);t&&(t.uAp.value=0,t.uS.value=e==="F"?90:e==="B"?10:22)});const i=K.capas.edif.userData.u;i.uFR.value=0,i.uGris.value=0,Object.values(K.upz).forEach(({m:e})=>e.scale.y=.001),K.red6.tubos.forEach(e=>{e.geometry.setDrawRange(0,0),e.material.opacity=.85}),Object.entries(K.red6.nod).forEach(([e,t])=>{t.position.copy(K.red6.P[e]),t.scale.setScalar(e==="F"?210:140)}),K.mercados.forEach(e=>{e.userData.ar.scale.setScalar(.001),e.userData.disco.scale.setScalar(.001),e.userData.n.scale.setScalar(.001)}),K.estaciones.forEach(e=>e.scale.setScalar(.001)),K.corredor.geometry.setDrawRange(0,0),K.capasPl.forEach(e=>e.position.y=e.userData.y0),K.pot.nodos.forEach(e=>e.scale.setScalar(e.userData.r)),K.agentes.vel=1}function bf(i){var t;const e=ps[i];qE(),Tm(),On("losa",!0,0),On("edif",!0,0),On("vias",!0,0),K.capas.edif.userData.u.uSube.value=1,(t=e.base)==null||t.call(e,Ko),e.cam&&Rm(e.cam,0),document.querySelector("#hud-sec b").textContent=e.n,document.querySelector("#hud-sec span").textContent=e.nombre}let Zt=-1,$o=!1;async function ll(i,e){var r;const t=Qi[i],n=ps[t.ci];if(t.bi===0)if(e&&!Ct.rapido&&i>0){Em(),await new Promise(s=>setTimeout(s,260)),await HE(n.tr||"pliegue",()=>{var s;bf(t.ci),(s=t.a)==null||s.call(t,Ko)});return}else bf(t.ci);(r=t.a)==null||r.call(t,Ko)}async function gr(i,e=!0){if(i=Math.max(0,Math.min(fa-1,i)),e&&i===Zt+1){$o=!0,Zt=i,Su(),await ll(i,!0),$o=!1;return}const t=Qi[i],n=i-t.bi;He.globalTimeline.clear(),Ct.rapido=!0;for(let r=n;r<i;r++)await ll(r,!1);Ct.rapido=!e,await ll(i,!1),Ct.rapido=!1,Zt=i,Su()}const sa=()=>{$o||gr(Zt+1)},So=()=>{!$o&&Zt>0&&gr(Zt-1)};function Su(){const i=Qi[Zt],e=Qi[Zt+1],t=ps[i.ci];document.getElementById("hud-n").textContent=String(Zt+1).padStart(3,"0")+" / "+fa,document.querySelector("#hud-prog i").style.width=(Zt+1)/fa*100+"%",document.getElementById("subtitulo").textContent=i.t,history.replaceState(null,"","#"+(Zt+1)),Fi.postMessage({tipo:"estado",n:Zt,total:fa,cap:t.n+" · "+t.nombre,ahora:i.t,sig:e?e.t:"— fin —",sigCap:e&&e.bi===0?ps[e.ci].n+" · "+ps[e.ci].nombre:""})}let es=null;function jE(){if(es){clearTimeout(es),es=null,pa();return}const i=()=>{var t;if(Zt>=fa-1){es=null,pa();return}sa();const e=((t=Qi[Zt+1])==null?void 0:t.t.split(/\s+/).length)||8;es=setTimeout(i,Math.max(2600,e*400))};i(),pa()}function pa(){document.getElementById("hud-modo").textContent=[K.stop?"STOP-MOTION 12 FPS":"FLUIDO",es?"AUTO":""].filter(Boolean).join(" · ")}const Cm=document.getElementById("grano");function YE(){const i=document.createElement("canvas");i.width=i.height=256;const e=i.getContext("2d"),t=e.createImageData(256,256);for(let n=0;n<t.data.length;n+=4){const r=Math.random()*255;t.data[n]=t.data[n+1]=t.data[n+2]=r,t.data[n+3]=255}e.putImageData(t,0,0),Cm.style.backgroundImage=`url(${i.toDataURL()})`}function KE(){var r,s,a,o,c;const i=He.ticker.time;K.t=i;const e=K.stop?1/12:He.ticker.deltaRatio()/60,t=Wi.p.clone().sub(Wi.o);t.applyAxisAngle(new P(0,1,0),Math.sin(i*.06)*.22+Math.sin(i*.017)*.15),t.multiplyScalar(1+Math.sin(i*.33)*.015),K.cam.position.copy(Wi.o).add(t);const n=Wi.o.clone();if(K.stop){const l=t.length()*9e-4;K.cam.position.x+=(Math.random()-.5)*l,K.cam.position.y+=(Math.random()-.5)*l,n.x+=(Math.random()-.5)*l}K.cam.lookAt(n),["vias-prin","flujos","iso","metro","red-pot","agentes","pA","pB","pC","pD","pE","pF"].forEach(l=>{const u=ph(l);u!=null&&u.uT&&(u.uT.value=i)}),mE(e),_E(i),yE(i),(r=K.estaciones)==null||r.forEach(l=>{l.userData.a.rotation.z=i*.8,l.userData.b.rotation.y=i*1.3}),(s=K.coraAros)==null||s.forEach((l,u)=>l.rotation.z=i*(u?-.2:.3)),(a=K.mercados)==null||a.forEach((l,u)=>l.userData.n.rotation.y=i*1.2+u),(o=K.pot)!=null&&o.grp&&(K.pot.grp.rotation.y=i*.04),(c=K.red6)!=null&&c.grp&&(K.red6.grp.rotation.y=Math.sin(i*.15)*.12),K.arco.material.opacity=.25+Math.sin(i*1.05)*.12,K.polvo.rotation.y=i*.01,K.r.render(K.scene,K.cam),wm(),K.stop&&(document.getElementById("escena").style.transform=`translate(${(Math.random()-.5)*2}px, ${(Math.random()-.5)*2}px) rotate(${(Math.random()-.5)*.12}deg)`,Cm.style.backgroundPosition=`${Math.random()*256|0}px ${Math.random()*256|0}px`)}function $E(){K.stop=!K.stop,He.ticker.fps(K.stop?12:60),K.stop||(document.getElementById("escena").style.transform=""),pa()}async function ZE(){YE(),await cE(document.getElementById("mundo")),He.ticker.fps(12),He.ticker.add(KE),pa(),window.__k={ir:gr,sig:sa,ant:So,BEATS:Qi,X:Ko,W:K};const i=parseInt(location.hash.slice(1),10),e=()=>{document.getElementById("inicio").remove(),document.body.classList.add("presentando"),i>1?gr(i-1,!1):gr(0)};document.getElementById("empezar").onclick=e,new URLSearchParams(location.search).has("directo")&&e(),addEventListener("keydown",t=>{if(document.getElementById("inicio")){(t.key==="Enter"||t.key===" ")&&e();return}const n=t.key;["ArrowRight","PageDown"," ","Enter","ArrowDown"].includes(n)?(t.preventDefault(),sa()):["ArrowLeft","PageUp","ArrowUp","Backspace"].includes(n)?(t.preventDefault(),So()):n==="f"||n==="F"?document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen():n==="s"||n==="S"?$E():n==="t"||n==="T"?document.body.classList.toggle("subs"):n==="a"||n==="A"?jE():n==="p"||n==="P"?window.open(location.pathname+"?presentador","presentadora","width=1100,height=700"):n==="Home"?gr(0,!1):(n==="b"||n==="B")&&(document.getElementById("escena").style.opacity=document.getElementById("escena").style.opacity==="0"?"":"0")}),addEventListener("click",t=>{!document.getElementById("inicio")&&t.button===0&&sa()}),addEventListener("contextmenu",t=>{t.preventDefault(),So()}),Fi.onmessage=t=>{t.data.cmd==="sig"&&sa(),t.data.cmd==="ant"&&So(),t.data.cmd==="pedir"&&Zt>=0&&Su(),t.data.cmd==="ir"&&gr(t.data.n,!1)}}function JE(){document.body.className="presentadora",document.body.innerHTML=`<div class="pres"><div class="pres-cab"><span id="pc"></span><span class="pres-reloj" id="pr">00:00</span><span><b id="pn"></b></span></div>
    <div class="pres-ahora" id="pa">Esperando la presentación…</div><div class="pres-sig" id="ps"></div>
    <div class="pres-pie"><button id="bA">← Anterior</button><button class="sig" id="bS">Siguiente frase →</button></div></div>`;let i=null;Fi.onmessage=e=>{const t=e.data;t.tipo==="estado"&&(i||(i=Date.now()),document.getElementById("pc").textContent=t.cap,document.getElementById("pn").textContent=t.n+1+" / "+t.total,document.getElementById("pa").textContent=t.ahora,document.getElementById("ps").textContent=(t.sigCap?"["+t.sigCap+"] ":"")+t.sig)},setInterval(()=>{if(!i)return;const e=Math.floor((Date.now()-i)/1e3);document.getElementById("pr").textContent=String(Math.floor(e/60)).padStart(2,"0")+":"+String(e%60).padStart(2,"0")},500),document.getElementById("bS").onclick=()=>Fi.postMessage({cmd:"sig"}),document.getElementById("bA").onclick=()=>Fi.postMessage({cmd:"ant"}),addEventListener("keydown",e=>{["ArrowRight","PageDown"," ","Enter"].includes(e.key)&&(e.preventDefault(),Fi.postMessage({cmd:"sig"})),["ArrowLeft","PageUp"].includes(e.key)&&(e.preventDefault(),Fi.postMessage({cmd:"ant"}))}),Fi.postMessage({cmd:"pedir"})}GE?JE():ZE();
