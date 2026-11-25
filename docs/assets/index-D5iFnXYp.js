(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Si(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function xp(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var wn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Es={duration:.5,overwrite:!1,delay:0},ed,Qt,xt,Nn=1e8,gt=1/Nn,Bl=Math.PI*2,Cg=Bl/4,Rg=0,yp=Math.sqrt,Pg=Math.cos,Lg=Math.sin,Ht=function(e){return typeof e=="string"},Tt=function(e){return typeof e=="function"},Ci=function(e){return typeof e=="number"},td=function(e){return typeof e>"u"},ci=function(e){return typeof e=="object"},hn=function(e){return e!==!1},nd=function(){return typeof window<"u"},Xa=function(e){return Tt(e)||Ht(e)},Mp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Xt=Array.isArray,zl=/(?:-?\.?\d|\.)+/gi,Sp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ds=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Uc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,bp=/[+-]=-?[.\d]+/,Ep=/[^,'"\[\]\s]+/gi,Dg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,yt,ii,kl,id,An={},nc={},Tp,wp=function(e){return(nc=Or(e,An))&&_n},rd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Pa=function(e,t){return!t&&console.warn(e)},Ap=function(e,t){return e&&(An[e]=t)&&nc&&(nc[e]=t)||An},La=function(){return 0},Ig={suppressEvents:!0,isStart:!0,kill:!1},qo={suppressEvents:!0,kill:!1},Ug={suppressEvents:!0},sd={},er=[],Hl={},Cp,Mn={},Nc={},oh=30,jo=[],ad="",od=function(e){var t=e[0],n,r;if(ci(t)||Tt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=jo.length;r--&&!jo[r].targetTest(t););n=jo[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Qp(e[r],n)))||e.splice(r,1);return e},Cr=function(e){return e._gsap||od(On(e))[0]._gsap},Rp=function(e,t,n){return(n=e[t])&&Tt(n)?e[t]():td(n)&&e.getAttribute&&e.getAttribute(t)||n},fn=function(e,t){return(e=e.split(",")).forEach(t)||e},wt=function(e){return Math.round(e*1e5)/1e5||0},Bt=function(e){return Math.round(e*1e7)/1e7||0},ms=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},Ng=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},ic=function(){var e=er.length,t=er.slice(0),n,r;for(Hl={},er.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Pp=function(e,t,n,r){er.length&&!Qt&&ic(),e.render(t,n,Qt&&t<0&&(e._initted||e._startAt)),er.length&&!Qt&&ic()},Lp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ep).length<2?t:Ht(e)?e.trim():e},Dp=function(e){return e},zn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Og=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Or=function(e,t){for(var n in t)e[n]=t[n];return e},ch=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ci(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},rc=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},ya=function(e){var t=e.parent||yt,n=e.keyframes?Og(Xt(e.keyframes)):zn;if(hn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Fg=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Ip=function(e,t,n,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},xc=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},sr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Rr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Bg=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Vl=function(e,t,n,r){return e._startAt&&(Qt?e._startAt.revert(qo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},zg=function i(e){return!e||e._ts&&i(e.parent)},lh=function(e){return e._repeat?Ts(e._tTime,e=e.duration()+e._rDelay)*e:0},Ts=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},sc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},yc=function(e){return e._end=Bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||gt)||0))},Mc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Bt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),yc(e),n._dirty||Rr(n,e)),e},Up=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=sc(e.rawTime(),t),(!t._dur||Wa(0,t.totalDuration(),n)-t._tTime>gt)&&t.render(n,!0)),Rr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-gt}},ri=function(e,t,n,r){return t.parent&&sr(t),t._start=Bt((Ci(n)?n:n||e!==yt?In(e,n,t):e._time)+t._delay),t._end=Bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ip(e,t,"_first","_last",e._sort?"_start":0),Gl(t)||(e._recent=t),r||Up(e,t),e._ts<0&&Mc(e,e._tTime),e},Np=function(e,t){return(An.ScrollTrigger||rd("scrollTrigger",t))&&An.ScrollTrigger.create(t,e)},Op=function(e,t,n,r,s){if(ld(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Qt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Cp!==Sn.frame)return er.push(e),e._lazy=[s,r],1},kg=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Gl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Hg=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&kg(e)&&!(!e._initted&&Gl(e))||(e._ts<0||e._dp._ts<0)&&!Gl(e))?0:1,o=e._rDelay,c=0,l,u,d;if(o&&e._repeat&&(c=Wa(0,e._tDur,t),u=Ts(c,o),e._yoyo&&u&1&&(a=1-a),u!==Ts(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Qt||r||e._zTime===gt||!t&&e._zTime){if(!e._initted&&Op(e,t,r,n,c))return;for(d=e._zTime,e._zTime=t||(n?gt:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&Vl(e,t,n,!0),e._onUpdate&&!n&&En(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&En(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&sr(e,1),!n&&!Qt&&(En(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Vg=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ws=function(e,t,n,r){var s=e._repeat,a=Bt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Bt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Mc(e,e._tTime=e._tDur*o),e.parent&&yc(e),n||Rr(e.parent,e),e},uh=function(e){return e instanceof sn?Rr(e):ws(e,e._dur)},Gg={_start:0,endTime:La,totalDuration:La},In=function i(e,t,n){var r=e.labels,s=e._recent||Gg,a=e.duration()>=Nn?s.endTime(!1):e._dur,o,c,l;return Ht(t)&&(isNaN(t)||t in r)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?s:n).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&n&&(c=c/100*(Xt(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+c:a+c)):t==null?a:+t},Ma=function(e,t,n){var r=Ci(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,c;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=hn(c.vars.inherit)&&c.parent;a.immediateRender=hn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Lt(t[0],a,t[s+1])},cr=function(e,t){return e||e===0?t(e):t},Wa=function(e,t,n){return n<e?e:n>t?t:n},Zt=function(e,t){return!Ht(e)||!(t=Dg.exec(e))?"":t[1]},Wg=function(e,t,n){return cr(n,function(r){return Wa(e,t,r)})},Wl=[].slice,Fp=function(e,t){return e&&ci(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ci(e[0]))&&!e.nodeType&&e!==ii},qg=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Ht(r)&&!t||Fp(r,1)?(s=n).push.apply(s,On(r)):n.push(r)})||n},On=function(e,t,n){return xt&&!t&&xt.selector?xt.selector(e):Ht(e)&&!n&&(kl||!As())?Wl.call((t||id).querySelectorAll(e),0):Xt(e)?qg(e,n):Fp(e)?Wl.call(e,0):e?[e]:[]},ql=function(e){return e=On(e)[0]||Pa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return On(t,n.querySelectorAll?n:n===e?Pa("Invalid scope")||id.createElement("div"):e)}},Bp=function(e){return e.sort(function(){return .5-Math.random()})},zp=function(e){if(Tt(e))return e;var t=ci(e)?e:{each:e},n=Pr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,c=isNaN(r)||o,l=t.axis,u=r,d=r;return Ht(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!o&&c&&(u=r[0],d=r[1]),function(h,f,g){var _=(g||t).length,p=a[_],m,y,x,v,A,E,w,C,M;if(!p){if(M=t.grid==="auto"?0:(t.grid||[1,Nn])[1],!M){for(w=-Nn;w<(w=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(p=a[_]=[],m=c?Math.min(M,_)*u-.5:r%M,y=M===Nn?0:c?_*d/M-.5:r/M|0,w=0,C=Nn,E=0;E<_;E++)x=E%M-m,v=y-(E/M|0),p[E]=A=l?Math.abs(l==="y"?v:x):yp(x*x+v*v),A>w&&(w=A),A<C&&(C=A);r==="random"&&Bp(p),p.max=w-C,p.min=C,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:l?l==="y"?_/M:M:Math.max(M,_/M))||0)*(r==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Zt(t.amount||t.each)||0,n=n&&_<0?Kp(n):n}return _=(p[h]-p.min)/p.max||0,Bt(p.b+(n?n(_):_)*p.v)+p.u}},jl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Bt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Ci(n)?0:Zt(n))}},kp=function(e,t){var n=Xt(e),r,s;return!n&&ci(e)&&(r=n=e.radius||Nn,e.values?(e=On(e.values),(s=!Ci(e[0]))&&(r*=r)):e=jl(e.increment)),cr(t,n?Tt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),c=parseFloat(s?a.y:0),l=Nn,u=0,d=e.length,h,f;d--;)s?(h=e[d].x-o,f=e[d].y-c,h=h*h+f*f):h=Math.abs(e[d]-o),h<l&&(l=h,u=d);return u=!r||l<=r?e[u]:a,s||u===a||Ci(a)?u:u+Zt(a)}:jl(e))},Hp=function(e,t,n,r){return cr(Xt(e)?!t:n===!0?!!(n=0):!r,function(){return Xt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},jg=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},Yg=function(e,t){return function(n){return e(parseFloat(n))+(t||Zt(n))}},$g=function(e,t,n){return Gp(e,t,0,1,n)},Vp=function(e,t,n){return cr(n,function(r){return e[~~t(r)]})},Kg=function i(e,t,n){var r=t-e;return Xt(e)?Vp(e,i(0,e.length),t):cr(n,function(s){return(r+(s-e)%r)%r+e})},Zg=function i(e,t,n){var r=t-e,s=r*2;return Xt(e)?Vp(e,i(0,e.length-1),t):cr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},Da=function(e){for(var t=0,n="",r,s,a,o;~(r=e.indexOf("random(",t));)a=e.indexOf(")",r),o=e.charAt(r+7)==="[",s=e.substr(r+7,a-r-7).match(o?Ep:zl),n+=e.substr(t,r-t)+Hp(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Gp=function(e,t,n,r,s){var a=t-e,o=r-n;return cr(s,function(c){return n+((c-e)/a*o||0)})},Jg=function i(e,t,n,r){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=Ht(e),o={},c,l,u,d,h;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(Xt(e)&&!Xt(t)){for(u=[],d=e.length,h=d-2,l=1;l<d;l++)u.push(i(e[l-1],e[l]));d--,s=function(g){g*=d;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else r||(e=Or(Xt(e)?[]:{},e));if(!u){for(c in t)cd.call(o,e,c,"get",t[c]);s=function(g){return hd(g,o)||(a?e.p:e)}}}return cr(n,s)},dh=function(e,t,n){var r=e.labels,s=Nn,a,o,c;for(a in r)o=r[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(c=a,s=o);return c},En=function(e,t,n){var r=e.vars,s=r[t],a=xt,o=e._ctx,c,l,u;if(s)return c=r[t+"Params"],l=r.callbackScope||e,n&&er.length&&ic(),o&&(xt=o),u=c?s.apply(l,c):s.call(l),xt=a,u},pa=function(e){return sr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Qt),e.progress()<1&&En(e,"onInterrupt"),e},hs,Wp=[],qp=function(e){if(e)if(e=!e.name&&e.default||e,nd()||e.headless){var t=e.name,n=Tt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:La,render:hd,add:cd,kill:f0,modifier:h0,rawVars:0},a={targetTest:0,get:0,getSetter:dd,aliases:{},register:0};if(As(),e!==r){if(Mn[t])return;zn(r,zn(rc(e,s),a)),Or(r.prototype,Or(s,rc(e,a))),Mn[r.prop=t]=r,e.targetTest&&(jo.push(r),sd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ap(t,r),e.register&&e.register(_n,r,pn)}else Wp.push(e)},ht=255,ma={aqua:[0,ht,ht],lime:[0,ht,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ht],navy:[0,0,128],white:[ht,ht,ht],olive:[128,128,0],yellow:[ht,ht,0],orange:[ht,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ht,0,0],pink:[ht,192,203],cyan:[0,ht,ht],transparent:[ht,ht,ht,0]},Oc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ht+.5|0},jp=function(e,t,n){var r=e?Ci(e)?[e>>16,e>>8&ht,e&ht]:0:ma.black,s,a,o,c,l,u,d,h,f,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ma[e])r=ma[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ht,r&ht,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ht,e&ht]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(zl),!t)c=+r[0]%360/360,l=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(l+1):u+l-u*l,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=Oc(c+1/3,s,a),r[1]=Oc(c,s,a),r[2]=Oc(c-1/3,s,a);else if(~e.indexOf("="))return r=e.match(Sp),n&&r.length<4&&(r[3]=1),r}else r=e.match(zl)||ma.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/ht,a=r[1]/ht,o=r[2]/ht,d=Math.max(s,a,o),h=Math.min(s,a,o),u=(d+h)/2,d===h?c=l=0:(f=d-h,l=u>.5?f/(2-d-h):f/(d+h),c=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,c*=60),r[0]=~~(c+.5),r[1]=~~(l*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Yp=function(e){var t=[],n=[],r=-1;return e.split(tr).forEach(function(s){var a=s.match(ds)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},hh=function(e,t,n){var r="",s=(e+r).match(tr),a=t?"hsla(":"rgba(",o=0,c,l,u,d;if(!s)return e;if(s=s.map(function(h){return(h=jp(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Yp(e),c=n.c,c.join(r)!==u.c.join(r)))for(l=e.replace(tr,"1").split(ds),d=l.length-1;o<d;o++)r+=l[o]+(~c.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!l)for(l=e.split(tr),d=l.length-1;o<d;o++)r+=l[o]+s[o];return r+l[d]},tr=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ma)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),Qg=/hsl[a]?\(/,$p=function(e){var t=e.join(" "),n;if(tr.lastIndex=0,tr.test(t))return n=Qg.test(t),e[1]=hh(e[1],n),e[0]=hh(e[0],n,Yp(e[1])),!0},Ia,Sn=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,o=[],c,l,u,d,h,f,g=function _(p){var m=i()-r,y=p===!0,x,v,A,E;if((m>e||m<0)&&(n+=m-t),r+=m,A=r-n,x=A-a,(x>0||y)&&(E=++d.frame,h=A-d.time*1e3,d.time=A=A/1e3,a+=x+(x>=s?4:s-x),v=1),y||(c=l(_)),v)for(f=0;f<o.length;f++)o[f](A,h,E,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Tp&&(!kl&&nd()&&(ii=kl=window,id=ii.document||{},An.gsap=_n,(ii.gsapVersions||(ii.gsapVersions=[])).push(_n.version),wp(nc||ii.GreenSockGlobals||!ii.gsap&&ii||{}),Wp.forEach(qp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&d.sleep(),l=u||function(p){return setTimeout(p,a-d.time*1e3+1|0)},Ia=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Ia=0,l=La},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,m,y){var x=m?function(v,A,E,w){p(v,A,E,w),d.remove(x)}:p;return d.remove(p),o[y?"unshift":"push"](x),As(),x},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},d})(),As=function(){return!Ia&&Sn.wake()},et={},Xg=/^[\d.\-M][\d.\-,\s]/,e0=/["']/g,t0=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,o,c,l;s<a;s++)c=n[s],o=s!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[r]=isNaN(l)?l.replace(e0,"").trim():+l,r=c.substr(o+1).trim();return t},n0=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},i0=function(e){var t=(e+"").split("("),n=et[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[t0(t[1])]:n0(e).split(",").map(Lp)):et._CE&&Xg.test(e)?et._CE("",e):n},Kp=function(e){return function(t){return 1-e(1-t)}},Zp=function i(e,t){for(var n=e._first,r;n;)n instanceof sn?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},Pr=function(e,t){return e&&(Tt(e)?e:et[e]||i0(e))||t},Hr=function(e,t,n,r){n===void 0&&(n=function(c){return 1-t(1-c)}),r===void 0&&(r=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return fn(e,function(o){et[o]=An[o]=s,et[a=o.toLowerCase()]=n;for(var c in s)et[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=et[o+"."+c]=s[c]}),s},Jp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Fc=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Bl*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*Lg((u-a)*s)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:Jp(o);return s=Bl/s,c.config=function(l,u){return i(e,l,u)},c},Bc=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Jp(n);return r.config=function(s){return i(e,s)},r};fn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Hr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});et.Linear.easeNone=et.none=et.Linear.easeIn;Hr("Elastic",Fc("in"),Fc("out"),Fc());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<r?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};Hr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Hr("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});Hr("Circ",function(i){return-(yp(1-i*i)-1)});Hr("Sine",function(i){return i===1?1:-Pg(i*Cg)+1});Hr("Back",Bc("in"),Bc("out"),Bc());et.SteppedEase=et.steps=An.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-gt;return function(o){return((r*Wa(0,a,o)|0)+s)*n}}};Es.ease=et["quad.out"];fn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return ad+=i+","+i+"Params,"});var Qp=function(e,t){this.id=Rg++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Rp,this.set=t?t.getSetter:dd},Ua=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ws(this,+t.duration,1,1),this.data=t.data,xt&&(this._ctx=xt,xt.data.push(this)),Ia||Sn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ws(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(As(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Mc(this,n),!s._dp||s.parent||Up(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ri(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===gt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Pp(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+lh(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+lh(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Ts(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-gt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?sc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-gt?0:this._rts,this.totalTime(Wa(-Math.abs(this._delay),this._tDur,s),r!==!1),yc(this),Bg(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(As(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==gt&&(this._tTime-=gt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&ri(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(hn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?sc(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Ug);var r=Qt;return Qt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Qt=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,uh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,uh(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(In(this,n),hn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,hn(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-gt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-gt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-gt)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this;return new Promise(function(s){var a=Tt(n)?n:Dp,o=function(){var l=r.then;r.then=null,Tt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=l),s(a),r.then=l};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},e.kill=function(){pa(this)},i})();zn(Ua.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-gt,_prom:0,_ps:!1,_rts:1});var sn=(function(i){xp(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=hn(n.sortChildren),yt&&ri(n.parent||yt,Si(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Np(Si(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return Ma(0,arguments,this),this},t.from=function(r,s,a){return Ma(1,arguments,this),this},t.fromTo=function(r,s,a,o){return Ma(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,ya(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Lt(r,s,In(this,a),1),this},t.call=function(r,s,a){return ri(this,Lt.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,c,l,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=u,a.parent=this,new Lt(r,a,In(this,c)),this},t.staggerFrom=function(r,s,a,o,c,l,u){return a.runBackwards=1,ya(a).immediateRender=hn(a.immediateRender),this.staggerTo(r,s,a,o,c,l,u)},t.staggerFromTo=function(r,s,a,o,c,l,u,d){return o.startAt=a,ya(o).immediateRender=hn(o.immediateRender),this.staggerTo(r,s,o,c,l,u,d)},t.render=function(r,s,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=r<=0?0:Bt(r),d=this._zTime<0!=r<0&&(this._initted||!l),h,f,g,_,p,m,y,x,v,A,E,w;if(this!==yt&&u>c&&r>=0&&(u=c),u!==this._tTime||a||d){if(o!==this._time&&l&&(u+=this._time-o,r+=this._time-o),h=u,v=this._start,x=this._ts,m=!x,d&&(l||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(E=this._yoyo,p=l+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,a);if(h=Bt(u%p),u===c?(_=this._repeat,h=l):(_=~~(u/p),_&&_===u/p&&(h=l,_--),h>l&&(h=l)),A=Ts(this._tTime,p),!o&&this._tTime&&A!==_&&this._tTime-A*p-this._dur<=0&&(A=_),E&&_&1&&(h=l-h,w=1),_!==A&&!this._lock){var C=E&&A&1,M=C===(E&&_&1);if(_<A&&(C=!C),o=C?0:u%l?l:u,this._lock=1,this.render(o||(w?0:Bt(_*p)),s,!l)._lock=0,this._tTime=u,!s&&this.parent&&En(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,M&&(this._lock=2,o=C?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Zp(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Vg(this,Bt(o),Bt(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&h&&!s&&!_&&(En(this,"onStart"),this._tTime!==u))return this;if(h>=o&&r>=0)for(f=this._first;f;){if(g=f._next,(f._act||h>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,a),h!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=-gt);break}}f=g}else{f=this._last;for(var S=r<0?r:h;f;){if(g=f._prev,(f._act||S<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(S-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(S-f._start)*f._ts,s,a||Qt&&(f._initted||f._startAt)),h!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=S?-gt:gt);break}}f=g}}if(y&&!s&&(this.pause(),y.render(h>=o?0:-gt)._zTime=h>=o?1:-1,this._ts))return this._start=v,yc(this),this.render(r,s,a);this._onUpdate&&!s&&En(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&sr(this,1),!s&&!(r<0&&!o)&&(u||o||!c)&&(En(this,u===c&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(Ci(s)||(s=In(this,s,r)),!(r instanceof Ua)){if(Xt(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Ht(r))return this.addLabel(r,s);if(Tt(r))r=Lt.delayedCall(0,r);else return this}return this!==r?ri(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Nn);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof Lt?s&&c.push(l):(a&&c.push(l),r&&c.push.apply(c,l.getChildren(!0,s,a)))),l=l._next;return c},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return Ht(r)?this.removeLabel(r):Tt(r)?this.killTweensOf(r):(xc(this,r),r===this._recent&&(this._recent=this._last),Rr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Bt(Sn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=In(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Lt.delayedCall(0,s||La,a);return o.data="isPause",this._hasPause=1,ri(this,o,In(this,r))},t.removePause=function(r){var s=this._first;for(r=In(this,r);s;)s._start===r&&s.data==="isPause"&&sr(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),c=o.length;c--;)$i!==o[c]&&o[c].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=On(r),c=this._first,l=Ci(s),u;c;)c instanceof Lt?Ng(c._targets,o)&&(l?(!$i||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&a.push(c):(u=c.getTweensOf(o,s)).length&&a.push.apply(a,u),c=c._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=In(a,r),c=s,l=c.startAt,u=c.onStart,d=c.onStartParams,h=c.immediateRender,f,g=Lt.to(a,zn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||gt,onStart:function(){if(a.pause(),!f){var p=s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());g._dur!==p&&ws(g,p,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,d||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,zn({startAt:{time:In(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),dh(this,In(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),dh(this,In(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+gt)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var o=this._first,c=this.labels,l;o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(l in c)c[l]>=a&&(c[l]+=r);return Rr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Rr(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,c=Nn,l,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(d=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,ri(a,o,u-o._delay,1)._lock=0):c=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=l;ws(a,a===yt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(yt._ts&&(Pp(yt,sc(r,yt)),Cp=Sn.frame),Sn.frame>=oh){oh+=wn.autoSleep||120;var s=yt._first;if((!s||!s._ts)&&wn.autoSleep&&Sn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Sn.sleep()}}},e})(Ua);zn(sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var r0=function(e,t,n,r,s,a,o){var c=new pn(this._pt,e,t,0,1,rm,null,s),l=0,u=0,d,h,f,g,_,p,m,y;for(c.b=n,c.e=r,n+="",r+="",(m=~r.indexOf("random("))&&(r=Da(r)),a&&(y=[n,r],a(y,e,t),n=y[0],r=y[1]),h=n.match(Uc)||[];d=Uc.exec(r);)g=d[0],_=r.substring(l,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,c._pt={_next:c._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?ms(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},l=Uc.lastIndex);return c.c=l<r.length?r.substring(l,r.length):"",c.fp=o,(bp.test(r)||m)&&(c.e=0),this._pt=c,c},cd=function(e,t,n,r,s,a,o,c,l,u){Tt(r)&&(r=r(s||0,e,a));var d=e[t],h=n!=="get"?n:Tt(d)?l?e[t.indexOf("set")||!Tt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():d,f=Tt(d)?l?l0:nm:ud,g;if(Ht(r)&&(~r.indexOf("random(")&&(r=Da(r)),r.charAt(1)==="="&&(g=ms(h,r)+(Zt(h)||0),(g||g===0)&&(r=g))),!u||h!==r||Yl)return!isNaN(h*r)&&r!==""?(g=new pn(this._pt,e,t,+h||0,r-(h||0),typeof d=="boolean"?d0:im,0,f),l&&(g.fp=l),o&&g.modifier(o,this,e),this._pt=g):(!d&&!(t in e)&&rd(t,r),r0.call(this,e,t,h,r,f,c||wn.stringFilter,l))},s0=function(e,t,n,r,s){if(Tt(e)&&(e=Sa(e,s,t,n,r)),!ci(e)||e.style&&e.nodeType||Xt(e)||Mp(e))return Ht(e)?Sa(e,s,t,n,r):e;var a={},o;for(o in e)a[o]=Sa(e[o],s,t,n,r);return a},Xp=function(e,t,n,r,s,a){var o,c,l,u;if(Mn[e]&&(o=new Mn[e]).init(s,o.rawVars?t[e]:s0(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=c=new pn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==hs))for(l=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)l[o._props[u]]=c;return o},$i,Yl,ld=function i(e,t,n){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,c=r.lazy,l=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,h=r.keyframes,f=r.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,y=m&&m.data==="nested"?m.vars.targets:p,x=e._overwrite==="auto"&&!ed,v=e.timeline,A,E,w,C,M,S,P,U,I,z,N,k,V;if(v&&(!h||!s)&&(s="none"),e._ease=Pr(s,Es.ease),e._yEase=d?Kp(Pr(d===!0?s:d,Es.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!v&&!!r.runBackwards,!v||h&&!r.stagger){if(U=p[0]?Cr(p[0]).harness:0,k=U&&r[U.prop],A=rc(r,sd),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&g?qo:Ig),_._lazy=0),a){if(sr(e._startAt=Lt.set(p,zn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&hn(c),startAt:null,delay:0,onUpdate:l&&function(){return En(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qt||!o&&!f)&&e._startAt.revert(qo),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),w=zn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&hn(c),immediateRender:o,stagger:0,parent:m},A),k&&(w[U.prop]=k),sr(e._startAt=Lt.set(p,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qt?e._startAt.revert(qo):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,gt,gt);else if(!t)return}for(e._pt=e._ptCache=0,c=g&&hn(c)||c&&!g,E=0;E<p.length;E++){if(M=p[E],P=M._gsap||od(p)[E]._gsap,e._ptLookup[E]=z={},Hl[P.id]&&er.length&&ic(),N=y===p?E:y.indexOf(M),U&&(I=new U).init(M,k||A,e,N,y)!==!1&&(e._pt=C=new pn(e._pt,M,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(G){z[G]=C}),I.priority&&(S=1)),!U||k)for(w in A)Mn[w]&&(I=Xp(w,A,e,N,M,y))?I.priority&&(S=1):z[w]=C=cd.call(e,M,w,"get",A[w],N,y,0,r.stringFilter);e._op&&e._op[E]&&e.kill(M,e._op[E]),x&&e._pt&&($i=e,yt.killTweensOf(M,z,e.globalTime(t)),V=!e.parent,$i=0),e._pt&&c&&(Hl[P.id]=1)}S&&sm(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!V,h&&t<=0&&v.render(Nn,!0,!0)},a0=function(e,t,n,r,s,a,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Yl=1,e.vars[t]="+=0",ld(e,o),Yl=0,c?Pa(t+" not eligible for reset"):1;l.push(u)}for(f=l.length;f--;)d=l[f],u=d._pt||d,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=wt(n)+Zt(d.e)),d.b&&(d.b=u.s+Zt(d.b))},o0=function(e,t){var n=e[0]?Cr(e[0]).harness:0,r=n&&n.aliases,s,a,o,c;if(!r)return t;s=Or({},t);for(a in r)if(a in s)for(c=r[a].split(","),o=c.length;o--;)s[c[o]]=s[a];return s},c0=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,o;if(Xt(t))o=n[e]||(n[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Sa=function(e,t,n,r,s){return Tt(e)?e.call(t,n,r,s):Ht(e)&&~e.indexOf("random(")?Da(e):e},em=ad+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",tm={};fn(em+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return tm[i]=1});var Lt=(function(i){xp(e,i);function e(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:ya(r))||this;var c=o.vars,l=c.duration,u=c.delay,d=c.immediateRender,h=c.stagger,f=c.overwrite,g=c.keyframes,_=c.defaults,p=c.scrollTrigger,m=c.yoyoEase,y=r.parent||yt,x=(Xt(n)||Mp(n)?Ci(n[0]):"length"in r)?[n]:On(n),v,A,E,w,C,M,S,P;if(o._targets=x.length?od(x):Pa("GSAP target "+n+" not found. https://gsap.com",!wn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||h||Xa(l)||Xa(u)){if(r=o.vars,v=o.timeline=new sn({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:x}),v.kill(),v.parent=v._dp=Si(o),v._start=0,h||Xa(l)||Xa(u)){if(w=x.length,S=h&&zp(h),ci(h))for(C in h)~em.indexOf(C)&&(P||(P={}),P[C]=h[C]);for(A=0;A<w;A++)E=rc(r,tm),E.stagger=0,m&&(E.yoyoEase=m),P&&Or(E,P),M=x[A],E.duration=+Sa(l,Si(o),A,M,x),E.delay=(+Sa(u,Si(o),A,M,x)||0)-o._delay,!h&&w===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),v.to(M,E,S?S(A,M,x):0),v._ease=et.none;v.duration()?l=u=0:o.timeline=0}else if(g){ya(zn(v.vars.defaults,{ease:"none"})),v._ease=Pr(g.ease||r.ease||"none");var U=0,I,z,N;if(Xt(g))g.forEach(function(k){return v.to(x,k,">")}),v.duration();else{E={};for(C in g)C==="ease"||C==="easeEach"||c0(C,g[C],E,g.easeEach);for(C in E)for(I=E[C].sort(function(k,V){return k.t-V.t}),U=0,A=0;A<I.length;A++)z=I[A],N={ease:z.e,duration:(z.t-(A?I[A-1].t:0))/100*l},N[C]=z.v,v.to(x,N,U),U+=N.duration;v.duration()<l&&v.to({},{duration:l-v.duration()})}}l||o.duration(l=v.duration())}else o.timeline=0;return f===!0&&!ed&&($i=Si(o),yt.killTweensOf(x),$i=0),ri(y,Si(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(d||!l&&!g&&o._start===Bt(y._time)&&hn(d)&&zg(Si(o))&&y.data!=="nested")&&(o._tTime=-gt,o.render(Math.max(0,-u)||0)),p&&Np(Si(o),p),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,c=this._tDur,l=this._dur,u=r<0,d=r>c-gt&&!u?c:r<gt?0:r,h,f,g,_,p,m,y,x,v;if(!l)Hg(this,r,s,a);else if(d!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=d,x=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,a);if(h=Bt(d%_),d===c?(g=this._repeat,h=l):(g=~~(d/_),g&&g===Bt(d/_)&&(h=l,g--),h>l&&(h=l)),m=this._yoyo&&g&1,m&&(v=this._yEase,h=l-h),p=Ts(this._tTime,_),h===o&&!a&&this._initted&&g===p)return this._tTime=d,this;g!==p&&(x&&this._yEase&&Zp(x,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==_&&this._initted&&(this._lock=a=1,this.render(Bt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Op(this,u?r:h,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(l!==this._dur)return this.render(r,s,a)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(v||this._ease)(h/l),this._from&&(this.ratio=y=1-y),h&&!o&&!s&&!g&&(En(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;x&&x.render(r<0?r:x._dur*x._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Vl(this,r,s,a),En(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&En(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Vl(this,r,!0,!0),(r||!l)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&sr(this,1),!s&&!(u&&!o)&&(d||o||m)&&(En(this,d===c?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,c){Ia||Sn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ld(this,l),u=this._ease(l/this._dur),a0(this,r,s,a,o,u,l,c)?this.resetTo(r,s,a,o,1):(Mc(this,0),this.parent||Ip(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?pa(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,$i&&$i.vars.overwrite!==!0)._first||pa(this),this.parent&&a!==this.timeline.totalDuration()&&ws(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=r?On(r):o,l=this._ptLookup,u=this._pt,d,h,f,g,_,p,m;if((!s||s==="all")&&Fg(o,c))return s==="all"&&(this._pt=0),pa(this);for(d=this._op=this._op||[],s!=="all"&&(Ht(s)&&(_={},fn(s,function(y){return _[y]=1}),s=_),s=o0(o,s)),m=o.length;m--;)if(~c.indexOf(o[m])){h=l[m],s==="all"?(d[m]=s,g=h,f={}):(f=d[m]=d[m]||{},g=s);for(_ in g)p=h&&h[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&xc(this,p,"_pt"),delete h[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&pa(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ma(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return Ma(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return yt.killTweensOf(r,s,a)},e})(Ua);zn(Lt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});fn("staggerTo,staggerFrom,staggerFromTo",function(i){Lt[i]=function(){var e=new sn,t=Wl.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var ud=function(e,t,n){return e[t]=n},nm=function(e,t,n){return e[t](n)},l0=function(e,t,n,r){return e[t](r.fp,n)},u0=function(e,t,n){return e.setAttribute(t,n)},dd=function(e,t){return Tt(e[t])?nm:td(e[t])&&e.setAttribute?u0:ud},im=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},d0=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},rm=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},hd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},h0=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},f0=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?xc(this,t,"_pt"):t.dep||(n=1),t=r;return!n},p0=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},sm=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},pn=(function(){function i(t,n,r,s,a,o,c,l,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||im,this.d=c||this,this.set=l||ud,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=p0,this.m=n,this.mt=s,this.tween=r},i})();fn(ad+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return sd[i]=1});An.TweenMax=An.TweenLite=Lt;An.TimelineLite=An.TimelineMax=sn;yt=new sn({sortChildren:!1,defaults:Es,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});wn.stringFilter=$p;var Lr=[],Yo={},m0=[],fh=0,g0=0,zc=function(e){return(Yo[e]||m0).map(function(t){return t()})},$l=function(){var e=Date.now(),t=[];e-fh>2&&(zc("matchMediaInit"),Lr.forEach(function(n){var r=n.queries,s=n.conditions,a,o,c,l;for(o in r)a=ii.matchMedia(r[o]).matches,a&&(c=1),a!==s[o]&&(s[o]=a,l=1);l&&(n.revert(),c&&t.push(n))}),zc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),fh=e,zc("matchMedia"))},am=(function(){function i(t,n){this.selector=n&&ql(n),this.data=[],this._r=[],this.isReverted=!1,this.id=g0++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Tt(n)&&(s=r,r=n,n=Tt);var a=this,o=function(){var l=xt,u=a.selector,d;return l&&l!==a&&l.data.push(a),s&&(a.selector=ql(s)),xt=a,d=r.apply(a,arguments),Tt(d)&&a._r.push(d),xt=l,a.selector=u,a.isReverted=!1,d};return a.last=o,n===Tt?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},e.ignore=function(n){var r=xt;xt=null,n(this),xt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Lt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?(function(){for(var o=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof sn?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Lt)&&l.revert&&l.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Lr.length;a--;)Lr[a].id===this.id&&Lr.splice(a,1)},e.revert=function(n){this.kill(n||{})},i})(),_0=(function(){function i(t){this.contexts=[],this.scope=t,xt&&xt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){ci(n)||(n={matches:n});var a=new am(0,s||this.scope),o=a.conditions={},c,l,u;xt&&!a.selector&&(a.selector=xt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(l in n)l==="all"?u=1:(c=ii.matchMedia(n[l]),c&&(Lr.indexOf(a)<0&&Lr.push(a),(o[l]=c.matches)&&(u=1),c.addListener?c.addListener($l):c.addEventListener("change",$l)));return u&&r(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),ac={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return qp(r)})},timeline:function(e){return new sn(e)},getTweensOf:function(e,t){return yt.getTweensOf(e,t)},getProperty:function(e,t,n,r){Ht(e)&&(e=On(e)[0]);var s=Cr(e||{}).get,a=n?Dp:Lp;return n==="native"&&(n=""),e&&(t?a((Mn[t]&&Mn[t].get||s)(e,t,n,r)):function(o,c,l){return a((Mn[o]&&Mn[o].get||s)(e,o,c,l))})},quickSetter:function(e,t,n){if(e=On(e),e.length>1){var r=e.map(function(u){return _n.quickSetter(u,t,n)}),s=r.length;return function(u){for(var d=s;d--;)r[d](u)}}e=e[0]||{};var a=Mn[t],o=Cr(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=a?function(u){var d=new a;hs._pt=0,d.init(e,n?u+n:u,hs,0,[e]),d.render(1,d),hs._pt&&hd(1,hs)}:o.set(e,c);return a?l:function(u){return l(e,c,n?u+n:u,o,1)}},quickTo:function(e,t,n){var r,s=_n.to(e,Or((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),a=function(c,l,u){return s.resetTo(t,c,l,u)};return a.tween=s,a},isTweening:function(e){return yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Pr(e.ease,Es.ease)),ch(Es,e||{})},config:function(e){return ch(wn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Mn[o]&&!An[o]&&Pa(t+" effect requires "+o+" plugin.")}),Nc[t]=function(o,c,l){return n(On(o),zn(c||{},s),l)},a&&(sn.prototype[t]=function(o,c,l){return this.add(Nc[t](o,ci(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){et[e]=Pr(t)},parseEase:function(e,t){return arguments.length?Pr(e,t):et},getById:function(e){return yt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new sn(e),r,s;for(n.smoothChildTiming=hn(e.smoothChildTiming),yt.remove(n),n._dp=0,n._time=n._tTime=yt._time,r=yt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Lt&&r.vars.onComplete===r._targets[0]))&&ri(n,r,r._start-r._delay),r=s;return ri(yt,n,0),n},context:function(e,t){return e?new am(e,t):xt},matchMedia:function(e){return new _0(e)},matchMediaRefresh:function(){return Lr.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||$l()},addEventListener:function(e,t){var n=Yo[e]||(Yo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Yo[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Kg,wrapYoyo:Zg,distribute:zp,random:Hp,snap:kp,normalize:$g,getUnit:Zt,clamp:Wg,splitColor:jp,toArray:On,selector:ql,mapRange:Gp,pipe:jg,unitize:Yg,interpolate:Jg,shuffle:Bp},install:wp,effects:Nc,ticker:Sn,updateRoot:sn.updateRoot,plugins:Mn,globalTimeline:yt,core:{PropTween:pn,globals:Ap,Tween:Lt,Timeline:sn,Animation:Ua,getCache:Cr,_removeLinkedListItem:xc,reverting:function(){return Qt},context:function(e){return e&&xt&&(xt.data.push(e),e._ctx=xt),xt},suppressOverwrites:function(e){return ed=e}}};fn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return ac[i]=Lt[i]});Sn.add(sn.updateRoot);hs=ac.to({},{duration:0});var v0=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},x0=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=v0(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},kc=function(e,t){return{name:e,rawVars:1,init:function(r,s,a){a._onInit=function(o){var c,l;if(Ht(s)&&(c={},fn(s,function(u){return c[u]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}x0(o,s)}}}},_n=ac.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,o,c;this.tween=n;for(a in t)c=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(c||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Qt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},kc("roundProps",jl),kc("modifiers"),kc("snap",kp))||ac;Lt.version=sn.version=_n.version="3.12.5";Tp=1;nd()&&As();et.Power0;et.Power1;et.Power2;et.Power3;et.Power4;et.Linear;et.Quad;et.Cubic;et.Quart;et.Quint;et.Strong;et.Elastic;et.Back;et.SteppedEase;et.Bounce;et.Sine;et.Expo;et.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ph,Ki,gs,fd,Ar,mh,pd,y0=function(){return typeof window<"u"},Ri={},yr=180/Math.PI,_s=Math.PI/180,Gr=Math.atan2,gh=1e8,md=/([A-Z])/g,M0=/(left|right|width|margin|padding|x)/i,S0=/[\s,\(]\S/,ai={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Kl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},b0=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},E0=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},T0=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},om=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},cm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},w0=function(e,t,n){return e.style[t]=n},A0=function(e,t,n){return e.style.setProperty(t,n)},C0=function(e,t,n){return e._gsap[t]=n},R0=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},P0=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},L0=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},St="transform",mn=St+"Origin",D0=function i(e,t){var n=this,r=this.target,s=r.style,a=r._gsap;if(e in Ri&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ai[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Ei(r,o)}):this.tfm[e]=a.x?a[e]:Ei(r,e),e===mn&&(this.tfm.zOrigin=a.zOrigin);else return ai.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(St)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(mn,t,"")),e=St}(s||t)&&this.props.push(e,t,s[e])},lm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},I0=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(md,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=pd(),(!s||!s.isStart)&&!n[St]&&(lm(n),r.zOrigin&&n[mn]&&(n[mn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},um=function(e,t){var n={target:e,props:[],revert:I0,save:D0};return e._gsap||_n.core.getCache(e),t&&t.split(",").forEach(function(r){return n.save(r)}),n},dm,Zl=function(e,t){var n=Ki.createElementNS?Ki.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ki.createElement(e);return n&&n.style?n:Ki.createElement(e)},oi=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(md,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Cs(t)||t,1)||""},_h="O,Moz,ms,Ms,Webkit".split(","),Cs=function(e,t,n){var r=t||Ar,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(_h[a]+e in s););return a<0?null:(a===3?"ms":a>=0?_h[a]:"")+e},Jl=function(){y0()&&window.document&&(ph=window,Ki=ph.document,gs=Ki.documentElement,Ar=Zl("div")||{style:{}},Zl("div"),St=Cs(St),mn=St+"Origin",Ar.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",dm=!!Cs("perspective"),pd=_n.core.reverting,fd=1)},Hc=function i(e){var t=Zl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,a;if(gs.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),gs.removeChild(t),this.style.cssText=s,a},vh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},hm=function(e){var t;try{t=e.getBBox()}catch{t=Hc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Hc||(t=Hc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+vh(e,["x","cx","x1"])||0,y:+vh(e,["y","cy","y1"])||0,width:0,height:0}:t},fm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&hm(e))},Fr=function(e,t){if(t){var n=e.style,r;t in Ri&&t!==mn&&(t=St),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(md,"-$1").toLowerCase())):n.removeAttribute(t)}},Zi=function(e,t,n,r,s,a){var o=new pn(e._pt,t,n,0,1,a?cm:om);return e._pt=o,o.b=r,o.e=s,e._props.push(n),o},xh={deg:1,rad:1,turn:1},U0={grid:1,flex:1},ar=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ar.style,c=M0.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),d=100,h=r==="px",f=r==="%",g,_,p,m;if(r===a||!s||xh[r]||xh[a])return s;if(a!=="px"&&!h&&(s=i(e,t,n,"px")),m=e.getCTM&&fm(e),(f||a==="%")&&(Ri[t]||~t.indexOf("adius")))return g=m?e.getBBox()[c?"width":"height"]:e[u],wt(f?s/g*d:s/100*g);if(o[c?"width":"height"]=d+(h?a:r),_=~t.indexOf("adius")||r==="em"&&e.appendChild&&!l?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ki||!_.appendChild)&&(_=Ki.body),p=_._gsap,p&&f&&p.width&&c&&p.time===Sn.time&&!p.uncache)return wt(s/p.width*d);if(f&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=d+r,g=e[u],y?e.style[t]=y:Fr(e,t)}else(f||a==="%")&&!U0[oi(_,"display")]&&(o.position=oi(e,"position")),_===e&&(o.position="static"),_.appendChild(Ar),g=Ar[u],_.removeChild(Ar),o.position="absolute";return c&&f&&(p=Cr(_),p.time=Sn.time,p.width=_[u]),wt(h?g*s/d:g&&s?d/g*s:0)},Ei=function(e,t,n,r){var s;return fd||Jl(),t in ai&&t!=="transform"&&(t=ai[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ri[t]&&t!=="transform"?(s=Oa(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:cc(oi(e,mn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=oc[t]&&oc[t](e,t,n)||oi(e,t)||Rp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ar(e,t,s,n)+n:s},N0=function(e,t,n,r){if(!n||n==="none"){var s=Cs(t,e,1),a=s&&oi(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=oi(e,"borderTopColor"))}var o=new pn(this._pt,e.style,t,0,1,rm),c=0,l=0,u,d,h,f,g,_,p,m,y,x,v,A;if(o.b=n,o.e=r,n+="",r+="",r==="auto"&&(_=e.style[t],e.style[t]=r,r=oi(e,t)||r,_?e.style[t]=_:Fr(e,t)),u=[n,r],$p(u),n=u[0],r=u[1],h=n.match(ds)||[],A=r.match(ds)||[],A.length){for(;d=ds.exec(r);)p=d[0],y=r.substring(c,d.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(_=h[l++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),p.charAt(1)==="="&&(p=ms(f,p)+v),m=parseFloat(p),x=p.substr((m+"").length),c=ds.lastIndex-x.length,x||(x=x||wn.units[t]||v,c===r.length&&(r+=x,o.e+=x)),v!==x&&(f=ar(e,t,_,x)||0),o._pt={_next:o._pt,p:y||l===1?y:",",s:f,c:m-f,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=c<r.length?r.substring(c,r.length):""}else o.r=t==="display"&&r==="none"?cm:om;return bp.test(r)&&(o.e=0),this._pt=o,o},yh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},O0=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=yh[n]||n,t[1]=yh[r]||r,t.join(" ")},F0=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,o,c,l;if(s==="all"||s===!0)r.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)o=s[l],Ri[o]&&(c=1,o=o==="transformOrigin"?mn:St),Fr(n,o);c&&(Fr(n,St),a&&(a.svg&&n.removeAttribute("transform"),Oa(n,1),a.uncache=1,lm(r)))}},oc={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new pn(e._pt,t,n,0,0,F0);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},Na=[1,0,0,1,0,0],pm={},mm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Mh=function(e){var t=oi(e,St);return mm(t)?Na:t.substr(7).match(Sp).map(wt)},gd=function(e,t){var n=e._gsap||Cr(e),r=e.style,s=Mh(e),a,o,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?Na:s):(s===Na&&!e.offsetParent&&e!==gs&&!n.svg&&(c=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(l=1,o=e.nextElementSibling,gs.appendChild(e)),s=Mh(e),c?r.display=c:Fr(e,"display"),l&&(o?a.insertBefore(e,o):a?a.appendChild(e):gs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ql=function(e,t,n,r,s,a){var o=e._gsap,c=s||gd(e,!0),l=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,f=c[0],g=c[1],_=c[2],p=c[3],m=c[4],y=c[5],x=t.split(" "),v=parseFloat(x[0])||0,A=parseFloat(x[1])||0,E,w,C,M;n?c!==Na&&(w=f*p-g*_)&&(C=v*(p/w)+A*(-_/w)+(_*y-p*m)/w,M=v*(-g/w)+A*(f/w)-(f*y-g*m)/w,v=C,A=M):(E=hm(e),v=E.x+(~x[0].indexOf("%")?v/100*E.width:v),A=E.y+(~(x[1]||x[0]).indexOf("%")?A/100*E.height:A)),r||r!==!1&&o.smooth?(m=v-l,y=A-u,o.xOffset=d+(m*f+y*_)-m,o.yOffset=h+(m*g+y*p)-y):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=A,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[mn]="0px 0px",a&&(Zi(a,o,"xOrigin",l,v),Zi(a,o,"yOrigin",u,A),Zi(a,o,"xOffset",d,o.xOffset),Zi(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+A)},Oa=function(e,t){var n=e._gsap||new Qp(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",o="deg",c=getComputedStyle(e),l=oi(e,mn)||"0",u,d,h,f,g,_,p,m,y,x,v,A,E,w,C,M,S,P,U,I,z,N,k,V,G,ie,ue,fe,Le,nt,$,te;return u=d=h=_=p=m=y=x=v=0,f=g=1,n.svg=!!(e.getCTM&&fm(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(r[St]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[St]!=="none"?c[St]:"")),r.scale=r.rotate=r.translate="none"),w=gd(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),l=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",V=""):V=!t&&e.getAttribute("data-svg-origin"),Ql(e,V||l,!!V||n.originIsAbsolute,n.smooth!==!1,w)),A=n.xOrigin||0,E=n.yOrigin||0,w!==Na&&(P=w[0],U=w[1],I=w[2],z=w[3],u=N=w[4],d=k=w[5],w.length===6?(f=Math.sqrt(P*P+U*U),g=Math.sqrt(z*z+I*I),_=P||U?Gr(U,P)*yr:0,y=I||z?Gr(I,z)*yr+_:0,y&&(g*=Math.abs(Math.cos(y*_s))),n.svg&&(u-=A-(A*P+E*I),d-=E-(A*U+E*z))):(te=w[6],nt=w[7],ue=w[8],fe=w[9],Le=w[10],$=w[11],u=w[12],d=w[13],h=w[14],C=Gr(te,Le),p=C*yr,C&&(M=Math.cos(-C),S=Math.sin(-C),V=N*M+ue*S,G=k*M+fe*S,ie=te*M+Le*S,ue=N*-S+ue*M,fe=k*-S+fe*M,Le=te*-S+Le*M,$=nt*-S+$*M,N=V,k=G,te=ie),C=Gr(-I,Le),m=C*yr,C&&(M=Math.cos(-C),S=Math.sin(-C),V=P*M-ue*S,G=U*M-fe*S,ie=I*M-Le*S,$=z*S+$*M,P=V,U=G,I=ie),C=Gr(U,P),_=C*yr,C&&(M=Math.cos(C),S=Math.sin(C),V=P*M+U*S,G=N*M+k*S,U=U*M-P*S,k=k*M-N*S,P=V,N=G),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),f=wt(Math.sqrt(P*P+U*U+I*I)),g=wt(Math.sqrt(k*k+te*te)),C=Gr(N,k),y=Math.abs(C)>2e-4?C*yr:0,v=$?1/($<0?-$:$):0),n.svg&&(V=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!mm(oi(e,St)),V&&e.setAttribute("transform",V))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(f*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=wt(f),n.scaleY=wt(g),n.rotation=wt(_)+o,n.rotationX=wt(p)+o,n.rotationY=wt(m)+o,n.skewX=y+o,n.skewY=x+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(r[mn]=cc(l)),n.xOffset=n.yOffset=0,n.force3D=wn.force3D,n.renderTransform=n.svg?z0:dm?gm:B0,n.uncache=0,n},cc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Vc=function(e,t,n){var r=Zt(t);return wt(parseFloat(t)+parseFloat(ar(e,"x",n+"px",r)))+r},B0=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,gm(e,t)},dr="0deg",Xs="0px",hr=") ",gm=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,x=n.zOrigin,v="",A=m==="auto"&&e&&e!==1||m===!0;if(x&&(d!==dr||u!==dr)){var E=parseFloat(u)*_s,w=Math.sin(E),C=Math.cos(E),M;E=parseFloat(d)*_s,M=Math.cos(E),a=Vc(y,a,w*M*-x),o=Vc(y,o,-Math.sin(E)*-x),c=Vc(y,c,C*M*-x+x)}p!==Xs&&(v+="perspective("+p+hr),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(A||a!==Xs||o!==Xs||c!==Xs)&&(v+=c!==Xs||A?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+hr),l!==dr&&(v+="rotate("+l+hr),u!==dr&&(v+="rotateY("+u+hr),d!==dr&&(v+="rotateX("+d+hr),(h!==dr||f!==dr)&&(v+="skew("+h+", "+f+hr),(g!==1||_!==1)&&(v+="scale("+g+", "+_+hr),y.style[St]=v||"translate(0, 0)"},z0=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,x=parseFloat(a),v=parseFloat(o),A,E,w,C,M;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=_s,l*=_s,A=Math.cos(c)*d,E=Math.sin(c)*d,w=Math.sin(c-l)*-h,C=Math.cos(c-l)*h,l&&(u*=_s,M=Math.tan(l-u),M=Math.sqrt(1+M*M),w*=M,C*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),A*=M,E*=M)),A=wt(A),E=wt(E),w=wt(w),C=wt(C)):(A=d,C=h,E=w=0),(x&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(x=ar(f,"x",a,"px"),v=ar(f,"y",o,"px")),(g||_||p||m)&&(x=wt(x+g-(g*A+_*w)+p),v=wt(v+_-(g*E+_*C)+m)),(r||s)&&(M=f.getBBox(),x=wt(x+r/100*M.width),v=wt(v+s/100*M.height)),M="matrix("+A+","+E+","+w+","+C+","+x+","+v+")",f.setAttribute("transform",M),y&&(f.style[St]=M)},k0=function(e,t,n,r,s){var a=360,o=Ht(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?yr:1),l=c-r,u=r+l+"deg",d,h;return o&&(d=s.split("_")[1],d==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),d==="cw"&&l<0?l=(l+a*gh)%a-~~(l/a)*a:d==="ccw"&&l>0&&(l=(l-a*gh)%a-~~(l/a)*a)),e._pt=h=new pn(e._pt,t,n,r,l,b0),h.e=u,h.u="deg",e._props.push(n),h},Sh=function(e,t){for(var n in t)e[n]=t[n];return e},H0=function(e,t,n){var r=Sh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,l,u,d,h,f,g;r.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[St]=t,o=Oa(n,1),Fr(n,St),n.setAttribute("transform",l)):(l=getComputedStyle(n)[St],a[St]=t,o=Oa(n,1),a[St]=l);for(c in Ri)l=r[c],u=o[c],l!==u&&s.indexOf(c)<0&&(f=Zt(l),g=Zt(u),d=f!==g?ar(n,c,l,g):parseFloat(l),h=parseFloat(u),e._pt=new pn(e._pt,o,c,d,h-d,Kl),e._pt.u=g||0,e._props.push(c));Sh(o,r)};fn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(o){return e<2?i+o:"border"+o+i});oc[e>1?"border"+i:i]=function(o,c,l,u,d){var h,f;if(arguments.length<4)return h=a.map(function(g){return Ei(o,g,l)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},a.forEach(function(g,_){return f[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(c,f,d)}});var _m={name:"css",register:Jl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,o=e.style,c=n.vars.startAt,l,u,d,h,f,g,_,p,m,y,x,v,A,E,w,C;fd||Jl(),this.styles=this.styles||um(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Mn[_]&&Xp(_,t,n,r,e,s)))){if(f=typeof u,g=oc[_],f==="function"&&(u=u.call(n,r,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Da(u)),g)g(this,e,_,u,n)&&(w=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",tr.lastIndex=0,tr.test(l)||(p=Zt(l),m=Zt(u)),m?p!==m&&(l=ar(e,_,l,m)+m):p&&(u+=p),this.add(o,"setProperty",l,u,r,s,0,0,_),a.push(_),C.push(_,0,o[_]);else if(f!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,r,e,s):c[_],Ht(l)&&~l.indexOf("random(")&&(l=Da(l)),Zt(l+"")||l==="auto"||(l+=wn.units[_]||Zt(Ei(e,_))||""),(l+"").charAt(1)==="="&&(l=Ei(e,_))):l=Ei(e,_),h=parseFloat(l),y=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),d=parseFloat(u),_ in ai&&(_==="autoAlpha"&&(h===1&&Ei(e,"visibility")==="hidden"&&d&&(h=0),C.push("visibility",0,o.visibility),Zi(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=ai[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Ri,x){if(this.styles.save(_),v||(A=e._gsap,A.renderTransform&&!t.parseTransform||Oa(e,t.parseTransform),E=t.smoothOrigin!==!1&&A.smooth,v=this._pt=new pn(this._pt,o,St,0,1,A.renderTransform,A,0,-1),v.dep=1),_==="scale")this._pt=new pn(this._pt,A,"scaleY",A.scaleY,(y?ms(A.scaleY,y+d):d)-A.scaleY||0,Kl),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(mn,0,o[mn]),u=O0(u),A.svg?Ql(e,u,0,E,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==A.zOrigin&&Zi(this,A,"zOrigin",A.zOrigin,m),Zi(this,o,_,cc(l),cc(u)));continue}else if(_==="svgOrigin"){Ql(e,u,1,E,0,this);continue}else if(_ in pm){k0(this,A,_,h,y?ms(h,y+u):u);continue}else if(_==="smoothOrigin"){Zi(this,A,"smooth",A.smooth,u);continue}else if(_==="force3D"){A[_]=u;continue}else if(_==="transform"){H0(this,u,e);continue}}else _ in o||(_=Cs(_)||_);if(x||(d||d===0)&&(h||h===0)&&!S0.test(u)&&_ in o)p=(l+"").substr((h+"").length),d||(d=0),m=Zt(u)||(_ in wn.units?wn.units[_]:p),p!==m&&(h=ar(e,_,l,m)),this._pt=new pn(this._pt,x?A:o,_,h,(y?ms(h,y+d):d)-h,!x&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?T0:Kl),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=l,this._pt.r=E0);else if(_ in o)N0.call(this,e,_,l,y?y+u:u);else if(_ in e)this.add(e,_,l||e[_],y?y+u:u,r,s);else if(_!=="parseTransform"){rd(_,u);continue}x||(_ in o?C.push(_,0,o[_]):C.push(_,1,l||e[_])),a.push(_)}}w&&sm(this)},render:function(e,t){if(t.tween._time||!pd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ei,aliases:ai,getSetter:function(e,t,n){var r=ai[t];return r&&r.indexOf(",")<0&&(t=r),t in Ri&&t!==mn&&(e._gsap.x||Ei(e,"x"))?n&&mh===n?t==="scale"?R0:C0:(mh=n||{})&&(t==="scale"?P0:L0):e.style&&!td(e.style[t])?w0:~t.indexOf("-")?A0:dd(e,t)},core:{_removeProperty:Fr,_getMatrix:gd}};_n.utils.checkPrefix=Cs;_n.core.getStyleSaver=um;(function(i,e,t,n){var r=fn(i+","+e+","+t,function(s){Ri[s]=1});fn(e,function(s){wn.units[s]="deg",pm[s]=1}),ai[r[13]]=i+","+e,fn(n,function(s){var a=s.split(":");ai[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");fn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){wn.units[i]="px"});_n.registerPlugin(_m);var Ie=_n.registerPlugin(_m)||_n;Ie.core.Tween;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _d="170",V0=0,bh=1,G0=2,vm=1,W0=2,Mi=3,Pi=0,gn=1,dn=2,nr=0,Dr=1,lc=2,Eh=3,Th=4,q0=5,Er=100,j0=101,Y0=102,$0=103,K0=104,Z0=200,J0=201,Q0=202,X0=203,Xl=204,eu=205,e_=206,t_=207,n_=208,i_=209,r_=210,s_=211,a_=212,o_=213,c_=214,tu=0,nu=1,iu=2,Rs=3,ru=4,su=5,au=6,ou=7,xm=0,l_=1,u_=2,ir=0,d_=1,h_=2,f_=3,ym=4,p_=5,m_=6,g_=7,wh="attached",__="detached",Mm=300,Ps=301,Ls=302,cu=303,lu=304,Sc=306,Ds=1e3,Ji=1001,uc=1002,an=1003,Sm=1004,ga=1005,Tn=1006,$o=1007,Ti=1008,Li=1009,bm=1010,Em=1011,Fa=1012,vd=1013,Br=1014,$n=1015,qa=1016,xd=1017,yd=1018,Is=1020,Tm=35902,wm=1021,Am=1022,Fn=1023,Cm=1024,Rm=1025,vs=1026,Us=1027,Md=1028,Sd=1029,Pm=1030,bd=1031,Ed=1033,Ko=33776,Zo=33777,Jo=33778,Qo=33779,uu=35840,du=35841,hu=35842,fu=35843,pu=36196,mu=37492,gu=37496,_u=37808,vu=37809,xu=37810,yu=37811,Mu=37812,Su=37813,bu=37814,Eu=37815,Tu=37816,wu=37817,Au=37818,Cu=37819,Ru=37820,Pu=37821,Xo=36492,Lu=36494,Du=36495,Lm=36283,Iu=36284,Uu=36285,Nu=36286,Ba=2300,za=2301,Gc=2302,Ah=2400,Ch=2401,Rh=2402,v_=2500,x_=0,Dm=1,Ou=2,y_=3200,M_=3201,Im=0,S_=1,Yi="",Ft="srgb",cn="srgb-linear",bc="linear",dt="srgb",Wr=7680,Ph=519,b_=512,E_=513,T_=514,Um=515,w_=516,A_=517,C_=518,R_=519,Fu=35044,Lh="300 es",wi=2e3,dc=2001;class Gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dh=1234567;const xs=Math.PI/180,Ns=180/Math.PI;function Bn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function It(i,e,t){return Math.max(e,Math.min(t,i))}function Td(i,e){return(i%e+e)%e}function P_(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function L_(i,e,t){return i!==e?(t-i)/(e-i):0}function ba(i,e,t){return(1-t)*i+t*e}function D_(i,e,t,n){return ba(i,e,1-Math.exp(-t*n))}function I_(i,e=1){return e-Math.abs(Td(i,e*2)-e)}function U_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function N_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function O_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function F_(i,e){return i+Math.random()*(e-i)}function B_(i){return i*(.5-Math.random())}function z_(i){i!==void 0&&(Dh=i);let e=Dh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function k_(i){return i*xs}function H_(i){return i*Ns}function V_(i){return(i&i-1)===0&&i!==0}function G_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function W_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function q_(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),d=s((e-n)/2),h=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,c*d,c*h,o*l);break;case"YZY":i.set(c*h,o*u,c*d,o*l);break;case"ZXZ":i.set(c*d,c*h,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const wd={DEG2RAD:xs,RAD2DEG:Ns,generateUUID:Bn,clamp:It,euclideanModulo:Td,mapLinear:P_,inverseLerp:L_,lerp:ba,damp:D_,pingpong:I_,smoothstep:U_,smootherstep:N_,randInt:O_,randFloat:F_,randFloatSpread:B_,seededRandom:z_,degToRad:k_,radToDeg:H_,isPowerOfTwo:V_,ceilPowerOfTwo:G_,floorPowerOfTwo:W_,setQuaternionFromProperEuler:q_,normalize:lt,denormalize:Yn};class X{constructor(e=0,t=0){X.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,n,r,s,a,o,c,l){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=r[0],p=r[3],m=r[6],y=r[1],x=r[4],v=r[7],A=r[2],E=r[5],w=r[8];return s[0]=a*_+o*y+c*A,s[3]=a*p+o*x+c*E,s[6]=a*m+o*v+c*w,s[1]=l*_+u*y+d*A,s[4]=l*p+u*x+d*E,s[7]=l*m+u*v+d*w,s[2]=h*_+f*y+g*A,s[5]=h*p+f*x+g*E,s[8]=h*m+f*v+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,h=o*c-u*s,f=l*s-a*c,g=t*d+n*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*l-u*n)*_,e[2]=(o*n-r*a)*_,e[3]=h*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Wc.makeScale(e,t)),this}rotate(e){return this.premultiply(Wc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wc=new je;function Nm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ka(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function j_(){const i=ka("canvas");return i.style.display="block",i}const Ih={};function _a(i){i in Ih||(Ih[i]=!0,console.warn(i))}function Y_(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function $_(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function K_(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qe={enabled:!0,workingColorSpace:cn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===dt&&(i.r=Ai(i.r),i.g=Ai(i.g),i.b=Ai(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===dt&&(i.r=ys(i.r),i.g=ys(i.g),i.b=ys(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Yi?bc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Uh=[.64,.33,.3,.6,.15,.06],Nh=[.2126,.7152,.0722],Oh=[.3127,.329],Fh=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bh=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe.define({[cn]:{primaries:Uh,whitePoint:Oh,transfer:bc,toXYZ:Fh,fromXYZ:Bh,luminanceCoefficients:Nh,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:Uh,whitePoint:Oh,transfer:dt,toXYZ:Fh,fromXYZ:Bh,luminanceCoefficients:Nh,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}});let qr;class Z_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qr===void 0&&(qr=ka("canvas")),qr.width=e.width,qr.height=e.height;const n=qr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ka("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ai(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ai(t[n]/255)*255):t[n]=Ai(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let J_=0;class Om{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=Bn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(qc(r[a].image)):s.push(qc(r[a]))}else s=qc(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function qc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Z_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Q_=0;class zt extends Gs{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=Ji,r=Ji,s=Tn,a=Ti,o=Fn,c=Li,l=zt.DEFAULT_ANISOTROPY,u=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=Bn(),this.name="",this.source=new Om(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new X(0,0),this.repeat=new X(1,1),this.center=new X(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ds:e.x=e.x-Math.floor(e.x);break;case Ji:e.x=e.x<0?0:1;break;case uc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ds:e.y=e.y-Math.floor(e.y);break;case Ji:e.y=e.y<0?0:1;break;case uc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Mm;zt.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,n=0,r=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,v=(f+1)/2,A=(m+1)/2,E=(u+h)/4,w=(d+_)/4,C=(g+p)/4;return x>v&&x>A?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=E/n,s=w/n):v>A?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=E/r,s=C/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=w/s,r=C/s),this.set(n,r,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-_)/y,this.z=(h-u)/y,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class X_ extends Gs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new zt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Om(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zr extends X_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Fm extends zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ev extends zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],d=n[r+3];const h=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==h||l!==f||u!==g){let p=1-o;const m=c*h+l*f+u*g+d*_,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const A=Math.sqrt(x),E=Math.atan2(A,m*y);p=Math.sin(p*E)/A,o=Math.sin(o*E)/A}const v=o*y;if(c=c*p+h*v,l=l*p+f*v,u=u*p+g*v,d=d*p+_*v,p===1-o){const A=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=A,l*=A,u*=A,d*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],d=s[a],h=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*d+c*f-l*h,e[t+1]=c*g+u*h+l*d-o*f,e[t+2]=l*g+u*f+o*h-c*d,e[t+3]=u*g-o*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),d=o(s/2),h=c(n/2),f=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+c*l+a*d-o*u,this.y=n+c*u+o*l-s*d,this.z=r+c*d+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jc.copy(this).projectOnVector(e),this.sub(jc)}reflect(e){return this.sub(jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jc=new L,zh=new lr;class Pn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gn):Gn.fromBufferAttribute(s,a),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),eo.copy(n.boundingBox)),eo.applyMatrix4(e.matrixWorld),this.union(eo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ea),to.subVectors(this.max,ea),jr.subVectors(e.a,ea),Yr.subVectors(e.b,ea),$r.subVectors(e.c,ea),Ni.subVectors(Yr,jr),Oi.subVectors($r,Yr),fr.subVectors(jr,$r);let t=[0,-Ni.z,Ni.y,0,-Oi.z,Oi.y,0,-fr.z,fr.y,Ni.z,0,-Ni.x,Oi.z,0,-Oi.x,fr.z,0,-fr.x,-Ni.y,Ni.x,0,-Oi.y,Oi.x,0,-fr.y,fr.x,0];return!Yc(t,jr,Yr,$r,to)||(t=[1,0,0,0,1,0,0,0,1],!Yc(t,jr,Yr,$r,to))?!1:(no.crossVectors(Ni,Oi),t=[no.x,no.y,no.z],Yc(t,jr,Yr,$r,to))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pi=[new L,new L,new L,new L,new L,new L,new L,new L],Gn=new L,eo=new Pn,jr=new L,Yr=new L,$r=new L,Ni=new L,Oi=new L,fr=new L,ea=new L,to=new L,no=new L,pr=new L;function Yc(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){pr.fromArray(i,s);const o=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),c=e.dot(pr),l=t.dot(pr),u=n.dot(pr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const tv=new Pn,ta=new L,$c=new L;class kn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):tv.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ta.subVectors(e,this.center);const t=ta.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ta,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ta.copy(e.center).add($c)),this.expandByPoint(ta.copy(e.center).sub($c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new L,Kc=new L,io=new L,Fi=new L,Zc=new L,ro=new L,Jc=new L;class ja{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Kc.copy(e).add(t).multiplyScalar(.5),io.copy(t).sub(e).normalize(),Fi.copy(this.origin).sub(Kc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(io),o=Fi.dot(this.direction),c=-Fi.dot(io),l=Fi.lengthSq(),u=Math.abs(1-a*a);let d,h,f,g;if(u>0)if(d=a*c-o,h=a*o-c,g=s*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Kc).addScaledVector(io,h),f}intersectSphere(e,t){mi.subVectors(e.center,this.origin);const n=mi.dot(this.direction),r=mi.dot(mi)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,n,r,s){Zc.subVectors(t,e),ro.subVectors(n,e),Jc.crossVectors(Zc,ro);let a=this.direction.dot(Jc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fi.subVectors(this.origin,e);const c=o*this.direction.dot(ro.crossVectors(Fi,ro));if(c<0)return null;const l=o*this.direction.dot(Zc.cross(Fi));if(l<0||c+l>a)return null;const u=-o*Fi.dot(Jc);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(e,t,n,r,s,a,o,c,l,u,d,h,f,g,_,p){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,d,h,f,g,_,p)}set(e,t,n,r,s,a,o,c,l,u,d,h,f,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Kr.setFromMatrixColumn(e,0).length(),s=1/Kr.setFromMatrixColumn(e,1).length(),a=1/Kr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,f=a*d,g=o*u,_=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=h-_*l,t[9]=-o*c,t[2]=_-h*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,f=c*d,g=l*u,_=l*d;t[0]=h+_*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,f=c*d,g=l*u,_=l*d;t[0]=h-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,f=a*d,g=o*u,_=o*d;t[0]=c*u,t[4]=g*l-f,t[8]=h*l+_,t[1]=c*d,t[5]=_*l+h,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+_,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nv,e,iv)}lookAt(e,t,n){const r=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Bi.crossVectors(n,xn),Bi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Bi.crossVectors(n,xn)),Bi.normalize(),so.crossVectors(xn,Bi),r[0]=Bi.x,r[4]=so.x,r[8]=xn.x,r[1]=Bi.y,r[5]=so.y,r[9]=xn.y,r[2]=Bi.z,r[6]=so.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],y=n[3],x=n[7],v=n[11],A=n[15],E=r[0],w=r[4],C=r[8],M=r[12],S=r[1],P=r[5],U=r[9],I=r[13],z=r[2],N=r[6],k=r[10],V=r[14],G=r[3],ie=r[7],ue=r[11],fe=r[15];return s[0]=a*E+o*S+c*z+l*G,s[4]=a*w+o*P+c*N+l*ie,s[8]=a*C+o*U+c*k+l*ue,s[12]=a*M+o*I+c*V+l*fe,s[1]=u*E+d*S+h*z+f*G,s[5]=u*w+d*P+h*N+f*ie,s[9]=u*C+d*U+h*k+f*ue,s[13]=u*M+d*I+h*V+f*fe,s[2]=g*E+_*S+p*z+m*G,s[6]=g*w+_*P+p*N+m*ie,s[10]=g*C+_*U+p*k+m*ue,s[14]=g*M+_*I+p*V+m*fe,s[3]=y*E+x*S+v*z+A*G,s[7]=y*w+x*P+v*N+A*ie,s[11]=y*C+x*U+v*k+A*ue,s[15]=y*M+x*I+v*V+A*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*c*d-r*l*d-s*o*h+n*l*h+r*o*f-n*c*f)+_*(+t*c*f-t*l*h+s*a*h-r*a*f+r*l*u-s*c*u)+p*(+t*l*d-t*o*f-s*a*d+n*a*f+s*o*u-n*l*u)+m*(-r*o*u-t*c*d+t*o*h+r*a*d-n*a*h+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],y=d*p*l-_*h*l+_*c*f-o*p*f-d*c*m+o*h*m,x=g*h*l-u*p*l-g*c*f+a*p*f+u*c*m-a*h*m,v=u*_*l-g*d*l+g*o*f-a*_*f-u*o*m+a*d*m,A=g*d*c-u*_*c-g*o*h+a*_*h+u*o*p-a*d*p,E=t*y+n*x+r*v+s*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=y*w,e[1]=(_*h*s-d*p*s-_*r*f+n*p*f+d*r*m-n*h*m)*w,e[2]=(o*p*s-_*c*s+_*r*l-n*p*l-o*r*m+n*c*m)*w,e[3]=(d*c*s-o*h*s-d*r*l+n*h*l+o*r*f-n*c*f)*w,e[4]=x*w,e[5]=(u*p*s-g*h*s+g*r*f-t*p*f-u*r*m+t*h*m)*w,e[6]=(g*c*s-a*p*s-g*r*l+t*p*l+a*r*m-t*c*m)*w,e[7]=(a*h*s-u*c*s+u*r*l-t*h*l-a*r*f+t*c*f)*w,e[8]=v*w,e[9]=(g*d*s-u*_*s-g*n*f+t*_*f+u*n*m-t*d*m)*w,e[10]=(a*_*s-g*o*s+g*n*l-t*_*l-a*n*m+t*o*m)*w,e[11]=(u*o*s-a*d*s-u*n*l+t*d*l+a*n*f-t*o*f)*w,e[12]=A*w,e[13]=(u*_*r-g*d*r+g*n*h-t*_*h-u*n*p+t*d*p)*w,e[14]=(g*o*r-a*_*r-g*n*c+t*_*c+a*n*p-t*o*p)*w,e[15]=(a*d*r-u*o*r+u*n*c-t*d*c-a*n*h+t*o*h)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,d=o+o,h=s*l,f=s*u,g=s*d,_=a*u,p=a*d,m=o*d,y=c*l,x=c*u,v=c*d,A=n.x,E=n.y,w=n.z;return r[0]=(1-(_+m))*A,r[1]=(f+v)*A,r[2]=(g-x)*A,r[3]=0,r[4]=(f-v)*E,r[5]=(1-(h+m))*E,r[6]=(p+y)*E,r[7]=0,r[8]=(g+x)*w,r[9]=(p-y)*w,r[10]=(1-(h+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Kr.set(r[0],r[1],r[2]).length();const a=Kr.set(r[4],r[5],r[6]).length(),o=Kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wn.copy(this);const l=1/s,u=1/a,d=1/o;return Wn.elements[0]*=l,Wn.elements[1]*=l,Wn.elements[2]*=l,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=d,Wn.elements[9]*=d,Wn.elements[10]*=d,t.setFromRotationMatrix(Wn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=wi){const c=this.elements,l=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),h=(n+r)/(n-r);let f,g;if(o===wi)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===dc)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=wi){const c=this.elements,l=1/(t-e),u=1/(n-r),d=1/(a-s),h=(t+e)*l,f=(n+r)*u;let g,_;if(o===wi)g=(a+s)*d,_=-2*d;else if(o===dc)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Kr=new L,Wn=new Fe,nv=new L(0,0,0),iv=new L(1,1,1),Bi=new L,so=new L,xn=new L,kh=new Fe,Hh=new lr;class li{constructor(e=0,t=0,n=0,r=li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-It(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(It(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class Ad{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rv=0;const Vh=new L,Zr=new lr,gi=new Fe,ao=new L,na=new L,sv=new L,av=new lr,Gh=new L(1,0,0),Wh=new L(0,1,0),qh=new L(0,0,1),jh={type:"added"},ov={type:"removed"},Jr={type:"childadded",child:null},Qc={type:"childremoved",child:null};class ft extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rv++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new L,t=new li,n=new lr,r=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Fe},normalMatrix:{value:new je}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ad,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zr.setFromAxisAngle(e,t),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,t){return Zr.setFromAxisAngle(e,t),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(Gh,e)}rotateY(e){return this.rotateOnAxis(Wh,e)}rotateZ(e){return this.rotateOnAxis(qh,e)}translateOnAxis(e,t){return Vh.copy(e).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gh,e)}translateY(e){return this.translateOnAxis(Wh,e)}translateZ(e){return this.translateOnAxis(qh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ao.copy(e):ao.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(na,ao,this.up):gi.lookAt(ao,na,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),Zr.setFromRotationMatrix(gi),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jh),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ov),Qc.child=e,this.dispatchEvent(Qc),Qc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jh),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,e,sv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,av,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ft.DEFAULT_UP=new L(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new L,_i=new L,Xc=new L,vi=new L,Qr=new L,Xr=new L,Yh=new L,el=new L,tl=new L,nl=new L,il=new Je,rl=new Je,sl=new Je;class bn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),qn.subVectors(e,t),r.cross(qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){qn.subVectors(r,t),_i.subVectors(n,t),Xc.subVectors(e,t);const a=qn.dot(qn),o=qn.dot(_i),c=qn.dot(Xc),l=_i.dot(_i),u=_i.dot(Xc),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(l*c-o*u)*h,g=(a*u-o*c)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,vi.x),c.addScaledVector(a,vi.y),c.addScaledVector(o,vi.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return il.setScalar(0),rl.setScalar(0),sl.setScalar(0),il.fromBufferAttribute(e,t),rl.fromBufferAttribute(e,n),sl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(il,s.x),a.addScaledVector(rl,s.y),a.addScaledVector(sl,s.z),a}static isFrontFacing(e,t,n,r){return qn.subVectors(n,t),_i.subVectors(e,t),qn.cross(_i).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),qn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return bn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Qr.subVectors(r,n),Xr.subVectors(s,n),el.subVectors(e,n);const c=Qr.dot(el),l=Xr.dot(el);if(c<=0&&l<=0)return t.copy(n);tl.subVectors(e,r);const u=Qr.dot(tl),d=Xr.dot(tl);if(u>=0&&d<=u)return t.copy(r);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Qr,a);nl.subVectors(e,s);const f=Qr.dot(nl),g=Xr.dot(nl);if(g>=0&&f<=g)return t.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Xr,o);const p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return Yh.subVectors(s,r),o=(d-u)/(d-u+(f-g)),t.copy(r).addScaledVector(Yh,o);const m=1/(p+_+h);return a=_*m,o=h*m,t.copy(n).addScaledVector(Qr,a).addScaledVector(Xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},oo={h:0,s:0,l:0};function al(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Qe.workingColorSpace){if(e=Td(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=al(a,s,e+1/3),this.g=al(a,s,e),this.b=al(a,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,t=Ft){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const n=Bm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return Qe.fromWorkingColorSpace(Kt.copy(this),e),Math.round(It(Kt.r*255,0,255))*65536+Math.round(It(Kt.g*255,0,255))*256+Math.round(It(Kt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Kt.copy(this),t);const n=Kt.r,r=Kt.g,s=Kt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Ft){Qe.fromWorkingColorSpace(Kt.copy(this),e);const t=Kt.r,n=Kt.g,r=Kt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(oo);const n=ba(zi.h,oo.h,t),r=ba(zi.s,oo.s,t),s=ba(zi.l,oo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Te;Te.NAMES=Bm;let cv=0;class Zn extends Gs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=Bn(),this.name="",this.blending=Dr,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xl,this.blendDst=eu,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Dr&&(n.blending=this.blending),this.side!==Pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xl&&(n.blendSrc=this.blendSrc),this.blendDst!==eu&&(n.blendDst=this.blendDst),this.blendEquation!==Er&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ph&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Jt extends Zn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=xm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new L,co=new X;class At{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fu,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)co.fromBufferAttribute(this,t),co.applyMatrix3(e),this.setXY(t,co.x,co.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),r=lt(r,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fu&&(e.usage=this.usage),e}}class zm extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class km extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Be extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}}let lv=0;const Dn=new Fe,ol=new ft,es=new L,yn=new Pn,ia=new Pn,Ot=new L;class st extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nm(e)?km:zm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return ol.lookAt(e),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Be(n,3))}else{for(let n=0,r=t.count;n<r;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ia.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(yn.min,ia.min),yn.expandByPoint(Ot),Ot.addVectors(yn.max,ia.max),yn.expandByPoint(Ot)):(yn.expandByPoint(ia.min),yn.expandByPoint(ia.max))}yn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ot));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ot.fromBufferAttribute(o,l),c&&(es.fromBufferAttribute(e,l),Ot.add(es)),r=Math.max(r,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new L,c[C]=new L;const l=new L,u=new L,d=new L,h=new X,f=new X,g=new X,_=new L,p=new L;function m(C,M,S){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,M),d.fromBufferAttribute(n,S),h.fromBufferAttribute(s,C),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,S),u.sub(l),d.sub(l),f.sub(h),g.sub(h);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),o[C].add(_),o[M].add(_),o[S].add(_),c[C].add(p),c[M].add(p),c[S].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,M=y.length;C<M;++C){const S=y[C],P=S.start,U=S.count;for(let I=P,z=P+U;I<z;I+=3)m(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const x=new L,v=new L,A=new L,E=new L;function w(C){A.fromBufferAttribute(r,C),E.copy(A);const M=o[C];x.copy(M),x.sub(A.multiplyScalar(A.dot(M))).normalize(),v.crossVectors(E,M);const P=v.dot(c[C])<0?-1:1;a.setXYZW(C,x.x,x.y,x.z,P)}for(let C=0,M=y.length;C<M;++C){const S=y[C],P=S.start,U=S.count;for(let I=P,z=P+U;I<z;I+=3)w(e.getX(I+0)),w(e.getX(I+1)),w(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const r=new L,s=new L,a=new L,o=new L,c=new L,l=new L,u=new L,d=new L;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*u;for(let m=0;m<u;m++)h[g++]=l[f++]}return new At(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new st,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=e(h,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $h=new Fe,mr=new ja,lo=new kn,Kh=new L,uo=new L,ho=new L,fo=new L,cl=new L,po=new L,Zh=new L,mo=new L;class Xe extends ft{constructor(e=new st,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){po.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],d=s[c];u!==0&&(cl.fromBufferAttribute(d,e),a?po.addScaledVector(cl,u):po.addScaledVector(cl.sub(t),u))}t.add(po)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(s),mr.copy(e.ray).recast(e.near),!(lo.containsPoint(mr.origin)===!1&&(mr.intersectSphere(lo,Kh)===null||mr.origin.distanceToSquared(Kh)>(e.far-e.near)**2))&&($h.copy(s).invert(),mr.copy(e.ray).applyMatrix4($h),!(n.boundingBox!==null&&mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=a[p.materialIndex],y=Math.max(p.start,f.start),x=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let v=y,A=x;v<A;v+=3){const E=o.getX(v),w=o.getX(v+1),C=o.getX(v+2);r=go(this,m,e,n,l,u,d,E,w,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const y=o.getX(p),x=o.getX(p+1),v=o.getX(p+2);r=go(this,a,e,n,l,u,d,y,x,v),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=a[p.materialIndex],y=Math.max(p.start,f.start),x=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let v=y,A=x;v<A;v+=3){const E=v,w=v+1,C=v+2;r=go(this,m,e,n,l,u,d,E,w,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const y=p,x=p+1,v=p+2;r=go(this,a,e,n,l,u,d,y,x,v),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function uv(i,e,t,n,r,s,a,o){let c;if(e.side===gn?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Pi,o),c===null)return null;mo.copy(o),mo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(mo);return l<t.near||l>t.far?null:{distance:l,point:mo.clone(),object:i}}function go(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,uo),i.getVertexPosition(c,ho),i.getVertexPosition(l,fo);const u=uv(i,e,t,n,uo,ho,fo,Zh);if(u){const d=new L;bn.getBarycoord(Zh,uo,ho,fo,d),r&&(u.uv=bn.getInterpolatedAttribute(r,o,c,l,d,new X)),s&&(u.uv1=bn.getInterpolatedAttribute(s,o,c,l,d,new X)),a&&(u.normal=bn.getInterpolatedAttribute(a,o,c,l,d,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new L,materialIndex:0};bn.getNormal(uo,ho,fo,h.normal),u.face=h,u.barycoord=d}return u}class Ws extends st{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Be(l,3)),this.setAttribute("normal",new Be(u,3)),this.setAttribute("uv",new Be(d,2));function g(_,p,m,y,x,v,A,E,w,C,M){const S=v/w,P=A/C,U=v/2,I=A/2,z=E/2,N=w+1,k=C+1;let V=0,G=0;const ie=new L;for(let ue=0;ue<k;ue++){const fe=ue*P-I;for(let Le=0;Le<N;Le++){const nt=Le*S-U;ie[_]=nt*y,ie[p]=fe*x,ie[m]=z,l.push(ie.x,ie.y,ie.z),ie[_]=0,ie[p]=0,ie[m]=E>0?1:-1,u.push(ie.x,ie.y,ie.z),d.push(Le/w),d.push(1-ue/C),V+=1}}for(let ue=0;ue<C;ue++)for(let fe=0;fe<w;fe++){const Le=h+fe+N*ue,nt=h+fe+N*(ue+1),$=h+(fe+1)+N*(ue+1),te=h+(fe+1)+N*ue;c.push(Le,nt,te),c.push(nt,$,te),G+=6}o.addGroup(f,G,M),f+=G,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ws(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Os(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function tn(i){const e={};for(let t=0;t<i.length;t++){const n=Os(i[t]);for(const r in n)e[r]=n[r]}return e}function dv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Hm(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Cd={clone:Os,merge:tn};var hv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends Zn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hv,this.fragmentShader=fv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=dv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Vm extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ki=new L,Jh=new X,Qh=new X;class nn extends Vm{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,Jh,Qh),t.subVectors(Qh,Jh)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ts=-90,ns=1;class pv extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new nn(ts,ns,e,t);r.layers=this.layers,this.add(r);const s=new nn(ts,ns,e,t);s.layers=this.layers,this.add(s);const a=new nn(ts,ns,e,t);a.layers=this.layers,this.add(a);const o=new nn(ts,ns,e,t);o.layers=this.layers,this.add(o);const c=new nn(ts,ns,e,t);c.layers=this.layers,this.add(c);const l=new nn(ts,ns,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===wi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===dc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Gm extends zt{constructor(e,t,n,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ps,super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mv extends zr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Gm(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ws(5,5,5),s=new Qn({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:nr});s.uniforms.tEquirect.value=t;const a=new Xe(r,s),o=t.minFilter;return t.minFilter===Ti&&(t.minFilter=Tn),new pv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const ll=new L,gv=new L,_v=new je;class qi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ll.subVectors(n,t).cross(gv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ll),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_v.getNormalMatrix(e),r=this.coplanarPoint(ll).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new kn,_o=new L;class Rd{constructor(e=new qi,t=new qi,n=new qi,r=new qi,s=new qi,a=new qi){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wi){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],d=r[6],h=r[7],f=r[8],g=r[9],_=r[10],p=r[11],m=r[12],y=r[13],x=r[14],v=r[15];if(n[0].setComponents(c-s,h-l,p-f,v-m).normalize(),n[1].setComponents(c+s,h+l,p+f,v+m).normalize(),n[2].setComponents(c+a,h+u,p+g,v+y).normalize(),n[3].setComponents(c-a,h-u,p-g,v-y).normalize(),n[4].setComponents(c-o,h-d,p-_,v-x).normalize(),t===wi)n[5].setComponents(c+o,h+d,p+_,v+x).normalize();else if(t===dc)n[5].setComponents(o,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(_o.x=r.normal.x>0?e.max.x:e.min.x,_o.y=r.normal.y>0?e.max.y:e.min.y,_o.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_o)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wm(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function vv(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class qs extends st{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,d=e/o,h=t/c,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const y=m*h-a;for(let x=0;x<l;x++){const v=x*d-s;g.push(v,-y,0),_.push(0,0,1),p.push(x/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<o;y++){const x=y+l*m,v=y+l*(m+1),A=y+1+l*(m+1),E=y+1+l*m;f.push(x,v,E),f.push(v,A,E)}this.setIndex(f),this.setAttribute("position",new Be(g,3)),this.setAttribute("normal",new Be(_,3)),this.setAttribute("uv",new Be(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.widthSegments,e.heightSegments)}}var xv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yv=`#ifdef USE_ALPHAHASH
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
#endif`,Mv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ev=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tv=`#ifdef USE_AOMAP
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
#endif`,wv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Av=`#ifdef USE_BATCHING
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
#endif`,Cv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dv=`#ifdef USE_IRIDESCENCE
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
#endif`,Iv=`#ifdef USE_BUMPMAP
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
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Vv=`#define PI 3.141592653589793
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
} // validated`,Gv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wv=`vec3 transformedNormal = objectNormal;
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
#endif`,qv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$v=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jv=`#ifdef USE_ENVMAP
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
#endif`,Qv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xv=`#ifdef USE_ENVMAP
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
#endif`,ex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
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
#endif`,nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ax=`#ifdef USE_GRADIENTMAP
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
}`,ox=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ux=`uniform bool receiveShadow;
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
#endif`,dx=`#ifdef USE_ENVMAP
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
#endif`,hx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gx=`PhysicalMaterial material;
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
#endif`,_x=`struct PhysicalMaterial {
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
}`,vx=`
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
#endif`,xx=`#if defined( RE_IndirectDiffuse )
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
#endif`,yx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ex=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ax=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cx=`#if defined( USE_POINTS_UV )
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
#endif`,Rx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ix=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ux=`#ifdef USE_MORPHTARGETS
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
#endif`,Nx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ox=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hx=`#ifdef USE_NORMALMAP
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
#endif`,Vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ey=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ty=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ny=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iy=`float getShadowMask() {
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
}`,ry=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sy=`#ifdef USE_SKINNING
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
#endif`,ay=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oy=`#ifdef USE_SKINNING
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
#endif`,cy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ly=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hy=`#ifdef USE_TRANSMISSION
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
#endif`,fy=`#ifdef USE_TRANSMISSION
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
#endif`,py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,my=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_y=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xy=`uniform sampler2D t2D;
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
}`,yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,My=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,by=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`#include <common>
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
}`,Ty=`#if DEPTH_PACKING == 3200
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
}`,wy=`#define DISTANCE
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
}`,Ay=`#define DISTANCE
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
}`,Cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ry=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Py=`uniform float scale;
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
}`,Ly=`uniform vec3 diffuse;
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
}`,Dy=`#include <common>
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
}`,Iy=`uniform vec3 diffuse;
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
}`,Uy=`#define LAMBERT
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
}`,Ny=`#define LAMBERT
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
}`,Oy=`#define MATCAP
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
}`,Fy=`#define MATCAP
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
}`,By=`#define NORMAL
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
}`,zy=`#define NORMAL
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
}`,ky=`#define PHONG
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
}`,Hy=`#define PHONG
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
}`,Vy=`#define STANDARD
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
}`,Gy=`#define STANDARD
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
}`,Wy=`#define TOON
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
}`,qy=`#define TOON
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
}`,jy=`uniform float size;
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
}`,Yy=`uniform vec3 diffuse;
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
}`,$y=`#include <common>
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
}`,Ky=`uniform vec3 color;
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
}`,Zy=`uniform float rotation;
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
}`,Jy=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:xv,alphahash_pars_fragment:yv,alphamap_fragment:Mv,alphamap_pars_fragment:Sv,alphatest_fragment:bv,alphatest_pars_fragment:Ev,aomap_fragment:Tv,aomap_pars_fragment:wv,batching_pars_vertex:Av,batching_vertex:Cv,begin_vertex:Rv,beginnormal_vertex:Pv,bsdfs:Lv,iridescence_fragment:Dv,bumpmap_pars_fragment:Iv,clipping_planes_fragment:Uv,clipping_planes_pars_fragment:Nv,clipping_planes_pars_vertex:Ov,clipping_planes_vertex:Fv,color_fragment:Bv,color_pars_fragment:zv,color_pars_vertex:kv,color_vertex:Hv,common:Vv,cube_uv_reflection_fragment:Gv,defaultnormal_vertex:Wv,displacementmap_pars_vertex:qv,displacementmap_vertex:jv,emissivemap_fragment:Yv,emissivemap_pars_fragment:$v,colorspace_fragment:Kv,colorspace_pars_fragment:Zv,envmap_fragment:Jv,envmap_common_pars_fragment:Qv,envmap_pars_fragment:Xv,envmap_pars_vertex:ex,envmap_physical_pars_fragment:dx,envmap_vertex:tx,fog_vertex:nx,fog_pars_vertex:ix,fog_fragment:rx,fog_pars_fragment:sx,gradientmap_pars_fragment:ax,lightmap_pars_fragment:ox,lights_lambert_fragment:cx,lights_lambert_pars_fragment:lx,lights_pars_begin:ux,lights_toon_fragment:hx,lights_toon_pars_fragment:fx,lights_phong_fragment:px,lights_phong_pars_fragment:mx,lights_physical_fragment:gx,lights_physical_pars_fragment:_x,lights_fragment_begin:vx,lights_fragment_maps:xx,lights_fragment_end:yx,logdepthbuf_fragment:Mx,logdepthbuf_pars_fragment:Sx,logdepthbuf_pars_vertex:bx,logdepthbuf_vertex:Ex,map_fragment:Tx,map_pars_fragment:wx,map_particle_fragment:Ax,map_particle_pars_fragment:Cx,metalnessmap_fragment:Rx,metalnessmap_pars_fragment:Px,morphinstance_vertex:Lx,morphcolor_vertex:Dx,morphnormal_vertex:Ix,morphtarget_pars_vertex:Ux,morphtarget_vertex:Nx,normal_fragment_begin:Ox,normal_fragment_maps:Fx,normal_pars_fragment:Bx,normal_pars_vertex:zx,normal_vertex:kx,normalmap_pars_fragment:Hx,clearcoat_normal_fragment_begin:Vx,clearcoat_normal_fragment_maps:Gx,clearcoat_pars_fragment:Wx,iridescence_pars_fragment:qx,opaque_fragment:jx,packing:Yx,premultiplied_alpha_fragment:$x,project_vertex:Kx,dithering_fragment:Zx,dithering_pars_fragment:Jx,roughnessmap_fragment:Qx,roughnessmap_pars_fragment:Xx,shadowmap_pars_fragment:ey,shadowmap_pars_vertex:ty,shadowmap_vertex:ny,shadowmask_pars_fragment:iy,skinbase_vertex:ry,skinning_pars_vertex:sy,skinning_vertex:ay,skinnormal_vertex:oy,specularmap_fragment:cy,specularmap_pars_fragment:ly,tonemapping_fragment:uy,tonemapping_pars_fragment:dy,transmission_fragment:hy,transmission_pars_fragment:fy,uv_pars_fragment:py,uv_pars_vertex:my,uv_vertex:gy,worldpos_vertex:_y,background_vert:vy,background_frag:xy,backgroundCube_vert:yy,backgroundCube_frag:My,cube_vert:Sy,cube_frag:by,depth_vert:Ey,depth_frag:Ty,distanceRGBA_vert:wy,distanceRGBA_frag:Ay,equirect_vert:Cy,equirect_frag:Ry,linedashed_vert:Py,linedashed_frag:Ly,meshbasic_vert:Dy,meshbasic_frag:Iy,meshlambert_vert:Uy,meshlambert_frag:Ny,meshmatcap_vert:Oy,meshmatcap_frag:Fy,meshnormal_vert:By,meshnormal_frag:zy,meshphong_vert:ky,meshphong_frag:Hy,meshphysical_vert:Vy,meshphysical_frag:Gy,meshtoon_vert:Wy,meshtoon_frag:qy,points_vert:jy,points_frag:Yy,shadow_vert:$y,shadow_frag:Ky,sprite_vert:Zy,sprite_frag:Jy},le={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new X(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new X(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},un={basic:{uniforms:tn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:tn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Te(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:tn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:tn([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:tn([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Te(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:tn([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:tn([le.points,le.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:tn([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:tn([le.common,le.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:tn([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:tn([le.sprite,le.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:tn([le.common,le.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:tn([le.lights,le.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};un.physical={uniforms:tn([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new X(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new X},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new X},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const vo={r:0,b:0,g:0},_r=new li,Qy=new Fe;function Xy(i,e,t,n,r,s,a){const o=new Te(0);let c=s===!0?0:1,l,u,d=null,h=0,f=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function _(y){let x=!1;const v=g(y);v===null?m(o,c):v&&v.isColor&&(m(v,1),x=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(y,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===Sc)?(u===void 0&&(u=new Xe(new Ws(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Os(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),_r.copy(x.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Qy.makeRotationFromEuler(_r)),u.material.toneMapped=Qe.getTransfer(v.colorSpace)!==dt,(d!==v||h!==v.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Xe(new qs(2,2),new Qn({name:"BackgroundMaterial",uniforms:Os(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(v.colorSpace)!==dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=v,h=v.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,x){y.getRGB(vo,Hm(i)),n.buffers.color.setClear(vo.r,vo.g,vo.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),c=x,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,m(o,c)},render:_,addToRenderList:p}}function eM(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(S,P,U,I,z){let N=!1;const k=d(I,U,P);s!==k&&(s=k,l(s.object)),N=f(S,I,U,z),N&&g(S,I,U,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,v(S,P,U,I),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function d(S,P,U){const I=U.wireframe===!0;let z=n[S.id];z===void 0&&(z={},n[S.id]=z);let N=z[P.id];N===void 0&&(N={},z[P.id]=N);let k=N[I];return k===void 0&&(k=h(c()),N[I]=k),k}function h(S){const P=[],U=[],I=[];for(let z=0;z<t;z++)P[z]=0,U[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:I,object:S,attributes:{},index:null}}function f(S,P,U,I){const z=s.attributes,N=P.attributes;let k=0;const V=U.getAttributes();for(const G in V)if(V[G].location>=0){const ue=z[G];let fe=N[G];if(fe===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor)),ue===void 0||ue.attribute!==fe||fe&&ue.data!==fe.data)return!0;k++}return s.attributesNum!==k||s.index!==I}function g(S,P,U,I){const z={},N=P.attributes;let k=0;const V=U.getAttributes();for(const G in V)if(V[G].location>=0){let ue=N[G];ue===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor));const fe={};fe.attribute=ue,ue&&ue.data&&(fe.data=ue.data),z[G]=fe,k++}s.attributes=z,s.attributesNum=k,s.index=I}function _(){const S=s.newAttributes;for(let P=0,U=S.length;P<U;P++)S[P]=0}function p(S){m(S,0)}function m(S,P){const U=s.newAttributes,I=s.enabledAttributes,z=s.attributeDivisors;U[S]=1,I[S]===0&&(i.enableVertexAttribArray(S),I[S]=1),z[S]!==P&&(i.vertexAttribDivisor(S,P),z[S]=P)}function y(){const S=s.newAttributes,P=s.enabledAttributes;for(let U=0,I=P.length;U<I;U++)P[U]!==S[U]&&(i.disableVertexAttribArray(U),P[U]=0)}function x(S,P,U,I,z,N,k){k===!0?i.vertexAttribIPointer(S,P,U,z,N):i.vertexAttribPointer(S,P,U,I,z,N)}function v(S,P,U,I){_();const z=I.attributes,N=U.getAttributes(),k=P.defaultAttributeValues;for(const V in N){const G=N[V];if(G.location>=0){let ie=z[V];if(ie===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),ie!==void 0){const ue=ie.normalized,fe=ie.itemSize,Le=e.get(ie);if(Le===void 0)continue;const nt=Le.buffer,$=Le.type,te=Le.bytesPerElement,be=$===i.INT||$===i.UNSIGNED_INT||ie.gpuType===vd;if(ie.isInterleavedBufferAttribute){const oe=ie.data,De=oe.stride,ke=ie.offset;if(oe.isInstancedInterleavedBuffer){for(let Oe=0;Oe<G.locationSize;Oe++)m(G.location+Oe,oe.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Oe=0;Oe<G.locationSize;Oe++)p(G.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let Oe=0;Oe<G.locationSize;Oe++)x(G.location+Oe,fe/G.locationSize,$,ue,De*te,(ke+fe/G.locationSize*Oe)*te,be)}else{if(ie.isInstancedBufferAttribute){for(let oe=0;oe<G.locationSize;oe++)m(G.location+oe,ie.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let oe=0;oe<G.locationSize;oe++)p(G.location+oe);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let oe=0;oe<G.locationSize;oe++)x(G.location+oe,fe/G.locationSize,$,ue,fe*te,fe/G.locationSize*oe*te,be)}}else if(k!==void 0){const ue=k[V];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(G.location,ue);break;case 3:i.vertexAttrib3fv(G.location,ue);break;case 4:i.vertexAttrib4fv(G.location,ue);break;default:i.vertexAttrib1fv(G.location,ue)}}}}y()}function A(){C();for(const S in n){const P=n[S];for(const U in P){const I=P[U];for(const z in I)u(I[z].object),delete I[z];delete P[U]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const U in P){const I=P[U];for(const z in I)u(I[z].object),delete I[z];delete P[U]}delete n[S.id]}function w(S){for(const P in n){const U=n[P];if(U[S.id]===void 0)continue;const I=U[S.id];for(const z in I)u(I[z].object),delete I[z];delete U[S.id]}}function C(){M(),a=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function tM(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),t.update(u,n,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,n,1)}function c(l,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*h[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function nM(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Fn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const C=w===qa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Li&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==$n&&!C)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:A,maxSamples:E}}function iM(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new qi,o=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||r;return r=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{const y=s?0:n,x=y*4;let v=m.clippingState||null;c.value=v,v=u(g,h,x,f);for(let A=0;A!==x;++A)v[A]=t[A];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const m=f+_*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,v=f;x!==_;++x,v+=4)a.copy(d[x]).applyMatrix4(y,o),a.normal.toArray(p,v),p[v+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function rM(i){let e=new WeakMap;function t(a,o){return o===cu?a.mapping=Ps:o===lu&&(a.mapping=Ls),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===cu||o===lu)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new mv(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Pd extends Vm{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const fs=4,Xh=[.125,.215,.35,.446,.526,.582],Tr=20,ul=new Pd,ef=new Te;let dl=null,hl=0,fl=0,pl=!1;const Mr=(1+Math.sqrt(5))/2,is=1/Mr,tf=[new L(-Mr,is,0),new L(Mr,is,0),new L(-is,0,Mr),new L(is,0,Mr),new L(0,Mr,-is),new L(0,Mr,is),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Bu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){dl=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dl,hl,fl),this._renderer.xr.enabled=pl,e.scissorTest=!1,xo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ps||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dl=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:qa,format:Fn,colorSpace:cn,depthBuffer:!1},r=nf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sM(s)),this._blurMaterial=aM(s,e,t)}return r}_compileMaterial(e){const t=new Xe(this._lodPlanes[0],e);this._renderer.compile(t,ul)}_sceneToCubeUV(e,t,n,r){const o=new nn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(ef),u.toneMapping=ir,u.autoClear=!1;const f=new Jt({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),g=new Xe(new Ws,f);let _=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,_=!0):(f.color.copy(ef),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):y===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));const x=this._cubeSize;xo(r,y*x,m>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ps||e.mapping===Ls;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Xe(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;xo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ul)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=tf[(r-s-1)%tf.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Xe(this._lodPlanes[r],l),h=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Tr-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Tr;p>Tr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Tr}`);const m=[];let y=0;for(let w=0;w<Tr;++w){const C=w/_,M=Math.exp(-C*C/2);m.push(M),w===0?y+=M:w<p&&(y+=2*M)}for(let w=0;w<m.length;w++)m[w]=m[w]/y;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const v=this._sizeLods[r],A=3*v*(r>x-fs?r-x+fs:0),E=4*(this._cubeSize-v);xo(t,A,E,3*v,2*v),c.setRenderTarget(t),c.render(d,ul)}}function sM(i){const e=[],t=[],n=[];let r=i;const s=i-fs+1+Xh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-fs?c=Xh[a-i+fs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,p=2,m=1,y=new Float32Array(_*g*f),x=new Float32Array(p*g*f),v=new Float32Array(m*g*f);for(let E=0;E<f;E++){const w=E%3*2/3-1,C=E>2?0:-1,M=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];y.set(M,_*g*E),x.set(h,p*g*E);const S=[E,E,E,E,E,E];v.set(S,m*g*E)}const A=new st;A.setAttribute("position",new At(y,_)),A.setAttribute("uv",new At(x,p)),A.setAttribute("faceIndex",new At(v,m)),e.push(A),r>fs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nf(i,e,t){const n=new zr(i,e,t);return n.texture.mapping=Sc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function aM(i,e,t){const n=new Float32Array(Tr),r=new L(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ld(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function rf(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ld(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function sf(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Ld(){return`

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
	`}function oM(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===cu||c===lu,u=c===Ps||c===Ls;if(l||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Bu(i)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Bu(i)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function cM(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&_a("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function lM(i,e,t,n){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}h.removeEventListener("dispose",a),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],i.ARRAY_BUFFER)}}function l(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let x=0,v=y.length;x<v;x+=3){const A=y[x+0],E=y[x+1],w=y[x+2];h.push(A,E,E,w,w,A)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const A=x+0,E=x+1,w=x+2;h.push(A,E,E,w,w,A)}}else return;const p=new(Nm(h)?km:zm)(h,1);p.version=_;const m=s.get(d);m&&e.remove(m),s.set(d,p)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function uM(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,f){i.drawElements(n,f,s,h*a),t.update(f,n,1)}function l(h,f,g){g!==0&&(i.drawElementsInstanced(n,f,s,h*a,g),t.update(f,n,g))}function u(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,n,1)}function d(h,f,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)l(h[m]/a,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,_,0,g);let m=0;for(let y=0;y<g;y++)m+=f[y]*_[y];t.update(m,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function dM(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function hM(i,e,t){const n=new WeakMap,r=new Je;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var f=S;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),p===!0&&(v=3);let A=o.attributes.position.count*v,E=1;A>e.maxTextureSize&&(E=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const w=new Float32Array(A*E*4*d),C=new Fm(w,A,E,d);C.type=$n,C.needsUpdate=!0;const M=v*4;for(let P=0;P<d;P++){const U=m[P],I=y[P],z=x[P],N=A*E*4*P;for(let k=0;k<U.count;k++){const V=k*M;g===!0&&(r.fromBufferAttribute(U,k),w[N+V+0]=r.x,w[N+V+1]=r.y,w[N+V+2]=r.z,w[N+V+3]=0),_===!0&&(r.fromBufferAttribute(I,k),w[N+V+4]=r.x,w[N+V+5]=r.y,w[N+V+6]=r.z,w[N+V+7]=0),p===!0&&(r.fromBufferAttribute(z,k),w[N+V+8]=r.x,w[N+V+9]=r.y,w[N+V+10]=r.z,w[N+V+11]=z.itemSize===4?r.w:1)}}h={count:d,texture:C,size:new X(A,E)},n.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function fM(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class qm extends zt{constructor(e,t,n,r,s,a,o,c,l,u=vs){if(u!==vs&&u!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===vs&&(n=Br),n===void 0&&u===Us&&(n=Is),super(null,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:an,this.minFilter=c!==void 0?c:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const jm=new zt,af=new qm(1,1),Ym=new Fm,$m=new ev,Km=new Gm,of=[],cf=[],lf=new Float32Array(16),uf=new Float32Array(9),df=new Float32Array(4);function js(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=of[r];if(s===void 0&&(s=new Float32Array(r),of[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ec(i,e){let t=cf[e];t===void 0&&(t=new Int32Array(e),cf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function pM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function mM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Nt(t,e)}}function gM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Nt(t,e)}}function _M(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Nt(t,e)}}function vM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;df.set(n),i.uniformMatrix2fv(this.addr,!1,df),Nt(t,n)}}function xM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;uf.set(n),i.uniformMatrix3fv(this.addr,!1,uf),Nt(t,n)}}function yM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;lf.set(n),i.uniformMatrix4fv(this.addr,!1,lf),Nt(t,n)}}function MM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function SM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Nt(t,e)}}function bM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Nt(t,e)}}function EM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Nt(t,e)}}function TM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function wM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Nt(t,e)}}function AM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Nt(t,e)}}function CM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Nt(t,e)}}function RM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(af.compareFunction=Um,s=af):s=jm,t.setTexture2D(e||s,r)}function PM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||$m,r)}function LM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Km,r)}function DM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ym,r)}function IM(i){switch(i){case 5126:return pM;case 35664:return mM;case 35665:return gM;case 35666:return _M;case 35674:return vM;case 35675:return xM;case 35676:return yM;case 5124:case 35670:return MM;case 35667:case 35671:return SM;case 35668:case 35672:return bM;case 35669:case 35673:return EM;case 5125:return TM;case 36294:return wM;case 36295:return AM;case 36296:return CM;case 35678:case 36198:case 36298:case 36306:case 35682:return RM;case 35679:case 36299:case 36307:return PM;case 35680:case 36300:case 36308:case 36293:return LM;case 36289:case 36303:case 36311:case 36292:return DM}}function UM(i,e){i.uniform1fv(this.addr,e)}function NM(i,e){const t=js(e,this.size,2);i.uniform2fv(this.addr,t)}function OM(i,e){const t=js(e,this.size,3);i.uniform3fv(this.addr,t)}function FM(i,e){const t=js(e,this.size,4);i.uniform4fv(this.addr,t)}function BM(i,e){const t=js(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function zM(i,e){const t=js(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function kM(i,e){const t=js(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function HM(i,e){i.uniform1iv(this.addr,e)}function VM(i,e){i.uniform2iv(this.addr,e)}function GM(i,e){i.uniform3iv(this.addr,e)}function WM(i,e){i.uniform4iv(this.addr,e)}function qM(i,e){i.uniform1uiv(this.addr,e)}function jM(i,e){i.uniform2uiv(this.addr,e)}function YM(i,e){i.uniform3uiv(this.addr,e)}function $M(i,e){i.uniform4uiv(this.addr,e)}function KM(i,e,t){const n=this.cache,r=e.length,s=Ec(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||jm,s[a])}function ZM(i,e,t){const n=this.cache,r=e.length,s=Ec(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||$m,s[a])}function JM(i,e,t){const n=this.cache,r=e.length,s=Ec(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Km,s[a])}function QM(i,e,t){const n=this.cache,r=e.length,s=Ec(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ym,s[a])}function XM(i){switch(i){case 5126:return UM;case 35664:return NM;case 35665:return OM;case 35666:return FM;case 35674:return BM;case 35675:return zM;case 35676:return kM;case 5124:case 35670:return HM;case 35667:case 35671:return VM;case 35668:case 35672:return GM;case 35669:case 35673:return WM;case 5125:return qM;case 36294:return jM;case 36295:return YM;case 36296:return $M;case 35678:case 36198:case 36298:case 36306:case 35682:return KM;case 35679:case 36299:case 36307:return ZM;case 35680:case 36300:case 36308:case 36293:return JM;case 36289:case 36303:case 36311:case 36292:return QM}}class eS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=IM(t.type)}}class tS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=XM(t.type)}}class nS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ml=/(\w+)(\])?(\[|\.)?/g;function hf(i,e){i.seq.push(e),i.map[e.id]=e}function iS(i,e,t){const n=i.name,r=n.length;for(ml.lastIndex=0;;){const s=ml.exec(n),a=ml.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){hf(t,l===void 0?new eS(o,i,e):new tS(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new nS(o),hf(t,d)),t=d}}}class ec{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);iS(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function ff(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const rS=37297;let sS=0;function aS(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const pf=new je;function oS(i){Qe._getMatrix(pf,Qe.workingColorSpace,i);const e=`mat3( ${pf.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case bc:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function mf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+aS(i.getShaderSource(e),a)}else return r}function cS(i,e){const t=oS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function lS(i,e){let t;switch(e){case d_:t="Linear";break;case h_:t="Reinhard";break;case f_:t="Cineon";break;case ym:t="ACESFilmic";break;case m_:t="AgX";break;case g_:t="Neutral";break;case p_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yo=new L;function uS(){Qe.getLuminanceCoefficients(yo);const i=yo.x.toFixed(4),e=yo.y.toFixed(4),t=yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(va).join(`
`)}function hS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function va(i){return i!==""}function gf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _f(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pS=/^[ \t]*#include +<([\w\d./]+)>/gm;function zu(i){return i.replace(pS,gS)}const mS=new Map;function gS(i,e){let t=$e[e];if(t===void 0){const n=mS.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return zu(t)}const _S=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vf(i){return i.replace(_S,vS)}function vS(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function xS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vm?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===W0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function yS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ps:case Ls:e="ENVMAP_TYPE_CUBE";break;case Sc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MS(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ls:e="ENVMAP_MODE_REFRACTION";break}return e}function SS(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xm:e="ENVMAP_BLENDING_MULTIPLY";break;case l_:e="ENVMAP_BLENDING_MIX";break;case u_:e="ENVMAP_BLENDING_ADD";break}return e}function bS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ES(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=xS(t),l=yS(t),u=MS(t),d=SS(t),h=bS(t),f=dS(t),g=hS(s),_=r.createProgram();let p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(va).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(va).join(`
`),m.length>0&&(m+=`
`)):(p=[xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(va).join(`
`),m=[xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ir?"#define TONE_MAPPING":"",t.toneMapping!==ir?$e.tonemapping_pars_fragment:"",t.toneMapping!==ir?lS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,cS("linearToOutputTexel",t.outputColorSpace),uS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(va).join(`
`)),a=zu(a),a=gf(a,t),a=_f(a,t),o=zu(o),o=gf(o,t),o=_f(o,t),a=vf(a),o=vf(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=y+p+a,v=y+m+o,A=ff(r,r.VERTEX_SHADER,x),E=ff(r,r.FRAGMENT_SHADER,v);r.attachShader(_,A),r.attachShader(_,E),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(P){if(i.debug.checkShaderErrors){const U=r.getProgramInfoLog(_).trim(),I=r.getShaderInfoLog(A).trim(),z=r.getShaderInfoLog(E).trim();let N=!0,k=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,A,E);else{const V=mf(r,A,"vertex"),G=mf(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+V+`
`+G)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(I===""||z==="")&&(k=!1);k&&(P.diagnostics={runnable:N,programLog:U,vertexShader:{log:I,prefix:p},fragmentShader:{log:z,prefix:m}})}r.deleteShader(A),r.deleteShader(E),C=new ec(r,_),M=fS(r,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,rS)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=E,this}let TS=0;class wS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new AS(e),t.set(e,n)),n}}class AS{constructor(e){this.id=TS++,this.code=e,this.usedTimes=0}}function CS(i,e,t,n,r,s,a){const o=new Ad,c=new wS,l=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function p(M,S,P,U,I){const z=U.fog,N=I.geometry,k=M.isMeshStandardMaterial?U.environment:null,V=(M.isMeshStandardMaterial?t:e).get(M.envMap||k),G=V&&V.mapping===Sc?V.image.height:null,ie=g[M.type];M.precision!==null&&(f=r.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const ue=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,fe=ue!==void 0?ue.length:0;let Le=0;N.morphAttributes.position!==void 0&&(Le=1),N.morphAttributes.normal!==void 0&&(Le=2),N.morphAttributes.color!==void 0&&(Le=3);let nt,$,te,be;if(ie){const ct=un[ie];nt=ct.vertexShader,$=ct.fragmentShader}else nt=M.vertexShader,$=M.fragmentShader,c.update(M),te=c.getVertexShaderID(M),be=c.getFragmentShaderID(M);const oe=i.getRenderTarget(),De=i.state.buffers.depth.getReversed(),ke=I.isInstancedMesh===!0,Oe=I.isBatchedMesh===!0,it=!!M.map,Q=!!M.matcap,se=!!V,D=!!M.aoMap,Re=!!M.lightMap,ne=!!M.bumpMap,ye=!!M.normalMap,ce=!!M.displacementMap,Ue=!!M.emissiveMap,ve=!!M.metalnessMap,R=!!M.roughnessMap,b=M.anisotropy>0,H=M.clearcoat>0,K=M.dispersion>0,ee=M.iridescence>0,Z=M.sheen>0,Ee=M.transmission>0,de=b&&!!M.anisotropyMap,xe=H&&!!M.clearcoatMap,Ze=H&&!!M.clearcoatNormalMap,re=H&&!!M.clearcoatRoughnessMap,Me=ee&&!!M.iridescenceMap,Ne=ee&&!!M.iridescenceThicknessMap,ze=Z&&!!M.sheenColorMap,Se=Z&&!!M.sheenRoughnessMap,tt=!!M.specularMap,Ye=!!M.specularColorMap,pt=!!M.specularIntensityMap,O=Ee&&!!M.transmissionMap,he=Ee&&!!M.thicknessMap,Y=!!M.gradientMap,J=!!M.alphaMap,ge=M.alphaTest>0,pe=!!M.alphaHash,Ge=!!M.extensions;let Et=ir;M.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Et=i.toneMapping);const Yt={shaderID:ie,shaderType:M.type,shaderName:M.name,vertexShader:nt,fragmentShader:$,defines:M.defines,customVertexShaderID:te,customFragmentShaderID:be,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Oe,batchingColor:Oe&&I._colorsTexture!==null,instancing:ke,instancingColor:ke&&I.instanceColor!==null,instancingMorph:ke&&I.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:cn,alphaToCoverage:!!M.alphaToCoverage,map:it,matcap:Q,envMap:se,envMapMode:se&&V.mapping,envMapCubeUVHeight:G,aoMap:D,lightMap:Re,bumpMap:ne,normalMap:ye,displacementMap:h&&ce,emissiveMap:Ue,normalMapObjectSpace:ye&&M.normalMapType===S_,normalMapTangentSpace:ye&&M.normalMapType===Im,metalnessMap:ve,roughnessMap:R,anisotropy:b,anisotropyMap:de,clearcoat:H,clearcoatMap:xe,clearcoatNormalMap:Ze,clearcoatRoughnessMap:re,dispersion:K,iridescence:ee,iridescenceMap:Me,iridescenceThicknessMap:Ne,sheen:Z,sheenColorMap:ze,sheenRoughnessMap:Se,specularMap:tt,specularColorMap:Ye,specularIntensityMap:pt,transmission:Ee,transmissionMap:O,thicknessMap:he,gradientMap:Y,opaque:M.transparent===!1&&M.blending===Dr&&M.alphaToCoverage===!1,alphaMap:J,alphaTest:ge,alphaHash:pe,combine:M.combine,mapUv:it&&_(M.map.channel),aoMapUv:D&&_(M.aoMap.channel),lightMapUv:Re&&_(M.lightMap.channel),bumpMapUv:ne&&_(M.bumpMap.channel),normalMapUv:ye&&_(M.normalMap.channel),displacementMapUv:ce&&_(M.displacementMap.channel),emissiveMapUv:Ue&&_(M.emissiveMap.channel),metalnessMapUv:ve&&_(M.metalnessMap.channel),roughnessMapUv:R&&_(M.roughnessMap.channel),anisotropyMapUv:de&&_(M.anisotropyMap.channel),clearcoatMapUv:xe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(M.sheenRoughnessMap.channel),specularMapUv:tt&&_(M.specularMap.channel),specularColorMapUv:Ye&&_(M.specularColorMap.channel),specularIntensityMapUv:pt&&_(M.specularIntensityMap.channel),transmissionMapUv:O&&_(M.transmissionMap.channel),thicknessMapUv:he&&_(M.thicknessMap.channel),alphaMapUv:J&&_(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ye||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(it||J),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:De,skinning:I.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Le,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,decodeVideoTexture:it&&M.map.isVideoTexture===!0&&Qe.getTransfer(M.map.colorSpace)===dt,decodeVideoTextureEmissive:Ue&&M.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(M.emissiveMap.colorSpace)===dt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===dn,flipSided:M.side===gn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ge&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&M.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function m(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)S.push(P),S.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(y(S,M),x(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){const S=g[M.type];let P;if(S){const U=un[S];P=Cd.clone(U.uniforms)}else P=M.uniforms;return P}function A(M,S){let P;for(let U=0,I=u.length;U<I;U++){const z=u[U];if(z.cacheKey===S){P=z,++P.usedTimes;break}}return P===void 0&&(P=new ES(i,S,M,s),u.push(P)),P}function E(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function w(M){c.remove(M)}function C(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:A,releaseProgram:E,releaseShaderCache:w,programs:u,dispose:C}}function RS(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function PS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function yf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Mf(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d,h,f,g,_,p){let m=i[e];return m===void 0?(m={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},i[e]=m):(m.id=d.id,m.object=d,m.geometry=h,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=_,m.group=p),e++,m}function o(d,h,f,g,_,p){const m=a(d,h,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?r.push(m):t.push(m)}function c(d,h,f,g,_,p){const m=a(d,h,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?r.unshift(m):t.unshift(m)}function l(d,h){t.length>1&&t.sort(d||PS),n.length>1&&n.sort(h||yf),r.length>1&&r.sort(h||yf)}function u(){for(let d=e,h=i.length;d<h;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function LS(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Mf,i.set(n,[a])):r>=s.length?(a=new Mf,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function DS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Te};break;case"SpotLight":t={position:new L,direction:new L,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function IS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let US=0;function NS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function OS(i){const e=new DS,t=IS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const r=new L,s=new Fe,a=new Fe;function o(l){let u=0,d=0,h=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,y=0,x=0,v=0,A=0,E=0,w=0;l.sort(NS);for(let M=0,S=l.length;M<S;M++){const P=l[M],U=P.color,I=P.intensity,z=P.distance,N=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=U.r*I,d+=U.g*I,h+=U.b*I;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],I);w++}else if(P.isDirectionalLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const V=P.shadow,G=t.get(P);G.shadowIntensity=V.intensity,G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=N,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=k,f++}else if(P.isSpotLight){const k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(U).multiplyScalar(I),k.distance=z,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[_]=k;const V=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,V.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[_]=V.matrix,P.castShadow){const G=t.get(P);G.shadowIntensity=V.intensity,G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=N,v++}_++}else if(P.isRectAreaLight){const k=e.get(P);k.color.copy(U).multiplyScalar(I),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=k,p++}else if(P.isPointLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const V=P.shadow,G=t.get(P);G.shadowIntensity=V.intensity,G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,G.shadowCameraNear=V.camera.near,G.shadowCameraFar=V.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=k,g++}else if(P.isHemisphereLight){const k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(I),k.groundColor.copy(P.groundColor).multiplyScalar(I),n.hemi[m]=k,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==y||C.numPointShadows!==x||C.numSpotShadows!==v||C.numSpotMaps!==A||C.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=y,C.numPointShadows=x,C.numSpotShadows=v,C.numSpotMaps=A,C.numLightProbes=w,n.version=US++)}function c(l,u){let d=0,h=0,f=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,y=l.length;m<y;m++){const x=l[m];if(x.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),d++}else if(x.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),f++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),a.identity(),s.copy(x.matrixWorld),s.premultiply(p),a.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),h++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:o,setupView:c,state:n}}function Sf(i){const e=new OS(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function FS(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Sf(i),e.set(r,[o])):s>=a.length?(o=new Sf(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class BS extends Zn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=y_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zS extends Zn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HS=`uniform sampler2D shadow_pass;
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
}`;function VS(i,e,t){let n=new Rd;const r=new X,s=new X,a=new Je,o=new BS({depthPacking:M_}),c=new zS,l={},u=t.maxTextureSize,d={[Pi]:gn,[gn]:Pi,[dn]:dn},h=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new X},radius:{value:4}},vertexShader:kS,fragmentShader:HS}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new st;g.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Xe(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vm;let m=this.type;this.render=function(E,w,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const M=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),U=i.state;U.setBlending(nr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const I=m!==Mi&&this.type===Mi,z=m===Mi&&this.type!==Mi;for(let N=0,k=E.length;N<k;N++){const V=E[N],G=V.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ie=G.getFrameExtents();if(r.multiply(ie),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ie.x),r.x=s.x*ie.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ie.y),r.y=s.y*ie.y,G.mapSize.y=s.y)),G.map===null||I===!0||z===!0){const fe=this.type!==Mi?{minFilter:an,magFilter:an}:{};G.map!==null&&G.map.dispose(),G.map=new zr(r.x,r.y,fe),G.map.texture.name=V.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ue=G.getViewportCount();for(let fe=0;fe<ue;fe++){const Le=G.getViewport(fe);a.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),U.viewport(a),G.updateMatrices(V,fe),n=G.getFrustum(),v(w,C,G.camera,V,this.type)}G.isPointLightShadow!==!0&&this.type===Mi&&y(G,C),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(M,S,P)};function y(E,w){const C=e.update(_);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new zr(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,C,h,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,C,f,_,null)}function x(E,w,C,M){let S=null;const P=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)S=P;else if(S=C.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const U=S.uuid,I=w.uuid;let z=l[U];z===void 0&&(z={},l[U]=z);let N=z[I];N===void 0&&(N=S.clone(),z[I]=N,w.addEventListener("dispose",A)),S=N}if(S.visible=w.visible,S.wireframe=w.wireframe,M===Mi?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:d[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=i.properties.get(S);U.light=C}return S}function v(E,w,C,M,S){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Mi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const I=e.update(E),z=E.material;if(Array.isArray(z)){const N=I.groups;for(let k=0,V=N.length;k<V;k++){const G=N[k],ie=z[G.materialIndex];if(ie&&ie.visible){const ue=x(E,ie,M,S);E.onBeforeShadow(i,E,w,C,I,ue,G),i.renderBufferDirect(C,null,I,ue,E,G),E.onAfterShadow(i,E,w,C,I,ue,G)}}}else if(z.visible){const N=x(E,z,M,S);E.onBeforeShadow(i,E,w,C,I,N,null),i.renderBufferDirect(C,null,I,N,E,null),E.onAfterShadow(i,E,w,C,I,N,null)}}const U=E.children;for(let I=0,z=U.length;I<z;I++)v(U[I],w,C,M,S)}function A(E){E.target.removeEventListener("dispose",A);for(const C in l){const M=l[C],S=E.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const GS={[tu]:nu,[iu]:au,[ru]:ou,[Rs]:su,[nu]:tu,[au]:iu,[ou]:ru,[su]:Rs};function WS(i,e){function t(){let O=!1;const he=new Je;let Y=null;const J=new Je(0,0,0,0);return{setMask:function(ge){Y!==ge&&!O&&(i.colorMask(ge,ge,ge,ge),Y=ge)},setLocked:function(ge){O=ge},setClear:function(ge,pe,Ge,Et,Yt){Yt===!0&&(ge*=Et,pe*=Et,Ge*=Et),he.set(ge,pe,Ge,Et),J.equals(he)===!1&&(i.clearColor(ge,pe,Ge,Et),J.copy(he))},reset:function(){O=!1,Y=null,J.set(-1,0,0,0)}}}function n(){let O=!1,he=!1,Y=null,J=null,ge=null;return{setReversed:function(pe){if(he!==pe){const Ge=e.get("EXT_clip_control");he?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);const Et=ge;ge=null,this.setClear(Et)}he=pe},getReversed:function(){return he},setTest:function(pe){pe?oe(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(pe){Y!==pe&&!O&&(i.depthMask(pe),Y=pe)},setFunc:function(pe){if(he&&(pe=GS[pe]),J!==pe){switch(pe){case tu:i.depthFunc(i.NEVER);break;case nu:i.depthFunc(i.ALWAYS);break;case iu:i.depthFunc(i.LESS);break;case Rs:i.depthFunc(i.LEQUAL);break;case ru:i.depthFunc(i.EQUAL);break;case su:i.depthFunc(i.GEQUAL);break;case au:i.depthFunc(i.GREATER);break;case ou:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=pe}},setLocked:function(pe){O=pe},setClear:function(pe){ge!==pe&&(he&&(pe=1-pe),i.clearDepth(pe),ge=pe)},reset:function(){O=!1,Y=null,J=null,ge=null,he=!1}}}function r(){let O=!1,he=null,Y=null,J=null,ge=null,pe=null,Ge=null,Et=null,Yt=null;return{setTest:function(ct){O||(ct?oe(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(ct){he!==ct&&!O&&(i.stencilMask(ct),he=ct)},setFunc:function(ct,Hn,hi){(Y!==ct||J!==Hn||ge!==hi)&&(i.stencilFunc(ct,Hn,hi),Y=ct,J=Hn,ge=hi)},setOp:function(ct,Hn,hi){(pe!==ct||Ge!==Hn||Et!==hi)&&(i.stencilOp(ct,Hn,hi),pe=ct,Ge=Hn,Et=hi)},setLocked:function(ct){O=ct},setClear:function(ct){Yt!==ct&&(i.clearStencil(ct),Yt=ct)},reset:function(){O=!1,he=null,Y=null,J=null,ge=null,pe=null,Ge=null,Et=null,Yt=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,f=[],g=null,_=!1,p=null,m=null,y=null,x=null,v=null,A=null,E=null,w=new Te(0,0,0),C=0,M=!1,S=null,P=null,U=null,I=null,z=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,V=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(G)[1]),k=V>=1):G.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),k=V>=2);let ie=null,ue={};const fe=i.getParameter(i.SCISSOR_BOX),Le=i.getParameter(i.VIEWPORT),nt=new Je().fromArray(fe),$=new Je().fromArray(Le);function te(O,he,Y,J){const ge=new Uint8Array(4),pe=i.createTexture();i.bindTexture(O,pe),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<Y;Ge++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(he+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return pe}const be={};be[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(i.DEPTH_TEST),a.setFunc(Rs),ne(!1),ye(bh),oe(i.CULL_FACE),D(nr);function oe(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function De(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function ke(O,he){return d[O]!==he?(i.bindFramebuffer(O,he),d[O]=he,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=he),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=he),!0):!1}function Oe(O,he){let Y=f,J=!1;if(O){Y=h.get(he),Y===void 0&&(Y=[],h.set(he,Y));const ge=O.textures;if(Y.length!==ge.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,Ge=ge.length;pe<Ge;pe++)Y[pe]=i.COLOR_ATTACHMENT0+pe;Y.length=ge.length,J=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,J=!0);J&&i.drawBuffers(Y)}function it(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const Q={[Er]:i.FUNC_ADD,[j0]:i.FUNC_SUBTRACT,[Y0]:i.FUNC_REVERSE_SUBTRACT};Q[$0]=i.MIN,Q[K0]=i.MAX;const se={[Z0]:i.ZERO,[J0]:i.ONE,[Q0]:i.SRC_COLOR,[Xl]:i.SRC_ALPHA,[r_]:i.SRC_ALPHA_SATURATE,[n_]:i.DST_COLOR,[e_]:i.DST_ALPHA,[X0]:i.ONE_MINUS_SRC_COLOR,[eu]:i.ONE_MINUS_SRC_ALPHA,[i_]:i.ONE_MINUS_DST_COLOR,[t_]:i.ONE_MINUS_DST_ALPHA,[s_]:i.CONSTANT_COLOR,[a_]:i.ONE_MINUS_CONSTANT_COLOR,[o_]:i.CONSTANT_ALPHA,[c_]:i.ONE_MINUS_CONSTANT_ALPHA};function D(O,he,Y,J,ge,pe,Ge,Et,Yt,ct){if(O===nr){_===!0&&(De(i.BLEND),_=!1);return}if(_===!1&&(oe(i.BLEND),_=!0),O!==q0){if(O!==p||ct!==M){if((m!==Er||v!==Er)&&(i.blendEquation(i.FUNC_ADD),m=Er,v=Er),ct)switch(O){case Dr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lc:i.blendFunc(i.ONE,i.ONE);break;case Eh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Th:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Dr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Eh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Th:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,x=null,A=null,E=null,w.set(0,0,0),C=0,p=O,M=ct}return}ge=ge||he,pe=pe||Y,Ge=Ge||J,(he!==m||ge!==v)&&(i.blendEquationSeparate(Q[he],Q[ge]),m=he,v=ge),(Y!==y||J!==x||pe!==A||Ge!==E)&&(i.blendFuncSeparate(se[Y],se[J],se[pe],se[Ge]),y=Y,x=J,A=pe,E=Ge),(Et.equals(w)===!1||Yt!==C)&&(i.blendColor(Et.r,Et.g,Et.b,Yt),w.copy(Et),C=Yt),p=O,M=!1}function Re(O,he){O.side===dn?De(i.CULL_FACE):oe(i.CULL_FACE);let Y=O.side===gn;he&&(Y=!Y),ne(Y),O.blending===Dr&&O.transparent===!1?D(nr):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const J=O.stencilWrite;o.setTest(J),J&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ue(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(O){S!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),S=O)}function ye(O){O!==V0?(oe(i.CULL_FACE),O!==P&&(O===bh?i.cullFace(i.BACK):O===G0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),P=O}function ce(O){O!==U&&(k&&i.lineWidth(O),U=O)}function Ue(O,he,Y){O?(oe(i.POLYGON_OFFSET_FILL),(I!==he||z!==Y)&&(i.polygonOffset(he,Y),I=he,z=Y)):De(i.POLYGON_OFFSET_FILL)}function ve(O){O?oe(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function R(O){O===void 0&&(O=i.TEXTURE0+N-1),ie!==O&&(i.activeTexture(O),ie=O)}function b(O,he,Y){Y===void 0&&(ie===null?Y=i.TEXTURE0+N-1:Y=ie);let J=ue[Y];J===void 0&&(J={type:void 0,texture:void 0},ue[Y]=J),(J.type!==O||J.texture!==he)&&(ie!==Y&&(i.activeTexture(Y),ie=Y),i.bindTexture(O,he||be[O]),J.type=O,J.texture=he)}function H(){const O=ue[ie];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ze(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ze(O){nt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),nt.copy(O))}function Se(O){$.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),$.copy(O))}function tt(O,he){let Y=l.get(he);Y===void 0&&(Y=new WeakMap,l.set(he,Y));let J=Y.get(O);J===void 0&&(J=i.getUniformBlockIndex(he,O.name),Y.set(O,J))}function Ye(O,he){const J=l.get(he).get(O);c.get(he)!==J&&(i.uniformBlockBinding(he,J,O.__bindingPointIndex),c.set(he,J))}function pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ie=null,ue={},d={},h=new WeakMap,f=[],g=null,_=!1,p=null,m=null,y=null,x=null,v=null,A=null,E=null,w=new Te(0,0,0),C=0,M=!1,S=null,P=null,U=null,I=null,z=null,nt.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:oe,disable:De,bindFramebuffer:ke,drawBuffers:Oe,useProgram:it,setBlending:D,setMaterial:Re,setFlipSided:ne,setCullFace:ye,setLineWidth:ce,setPolygonOffset:Ue,setScissorTest:ve,activeTexture:R,bindTexture:b,unbindTexture:H,compressedTexImage2D:K,compressedTexImage3D:ee,texImage2D:Me,texImage3D:Ne,updateUBOMapping:tt,uniformBlockBinding:Ye,texStorage2D:Ze,texStorage3D:re,texSubImage2D:Z,texSubImage3D:Ee,compressedTexSubImage2D:de,compressedTexSubImage3D:xe,scissor:ze,viewport:Se,reset:pt}}function bf(i,e,t,n){const r=qS(n);switch(t){case wm:return i*e;case Cm:return i*e;case Rm:return i*e*2;case Md:return i*e/r.components*r.byteLength;case Sd:return i*e/r.components*r.byteLength;case Pm:return i*e*2/r.components*r.byteLength;case bd:return i*e*2/r.components*r.byteLength;case Am:return i*e*3/r.components*r.byteLength;case Fn:return i*e*4/r.components*r.byteLength;case Ed:return i*e*4/r.components*r.byteLength;case Ko:case Zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Jo:case Qo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case du:case fu:return Math.max(i,16)*Math.max(e,8)/4;case uu:case hu:return Math.max(i,8)*Math.max(e,8)/2;case pu:case mu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _u:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case xu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case yu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Mu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Su:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case bu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Eu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Tu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case wu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Au:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Cu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ru:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Pu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Xo:case Lu:case Du:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Lm:case Iu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Uu:case Nu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qS(i){switch(i){case Li:case bm:return{byteLength:1,components:1};case Fa:case Em:case qa:return{byteLength:2,components:1};case xd:case yd:return{byteLength:2,components:4};case Br:case vd:case $n:return{byteLength:4,components:1};case Tm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function jS(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new X,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return f?new OffscreenCanvas(R,b):ka("canvas")}function _(R,b,H){let K=1;const ee=ve(R);if((ee.width>H||ee.height>H)&&(K=H/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(K*ee.width),Ee=Math.floor(K*ee.height);d===void 0&&(d=g(Z,Ee));const de=b?g(Z,Ee):d;return de.width=Z,de.height=Ee,de.getContext("2d").drawImage(R,0,0,Z,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Z+"x"+Ee+")."),de}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function p(R){return R.generateMipmaps}function m(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(R,b,H,K,ee=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=b;if(b===i.RED&&(H===i.FLOAT&&(Z=i.R32F),H===i.HALF_FLOAT&&(Z=i.R16F),H===i.UNSIGNED_BYTE&&(Z=i.R8)),b===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.R8UI),H===i.UNSIGNED_SHORT&&(Z=i.R16UI),H===i.UNSIGNED_INT&&(Z=i.R32UI),H===i.BYTE&&(Z=i.R8I),H===i.SHORT&&(Z=i.R16I),H===i.INT&&(Z=i.R32I)),b===i.RG&&(H===i.FLOAT&&(Z=i.RG32F),H===i.HALF_FLOAT&&(Z=i.RG16F),H===i.UNSIGNED_BYTE&&(Z=i.RG8)),b===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RG8UI),H===i.UNSIGNED_SHORT&&(Z=i.RG16UI),H===i.UNSIGNED_INT&&(Z=i.RG32UI),H===i.BYTE&&(Z=i.RG8I),H===i.SHORT&&(Z=i.RG16I),H===i.INT&&(Z=i.RG32I)),b===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),H===i.UNSIGNED_INT&&(Z=i.RGB32UI),H===i.BYTE&&(Z=i.RGB8I),H===i.SHORT&&(Z=i.RGB16I),H===i.INT&&(Z=i.RGB32I)),b===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),H===i.UNSIGNED_INT&&(Z=i.RGBA32UI),H===i.BYTE&&(Z=i.RGBA8I),H===i.SHORT&&(Z=i.RGBA16I),H===i.INT&&(Z=i.RGBA32I)),b===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),b===i.RGBA){const Ee=ee?bc:Qe.getTransfer(K);H===i.FLOAT&&(Z=i.RGBA32F),H===i.HALF_FLOAT&&(Z=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Z=Ee===dt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(R,b){let H;return R?b===null||b===Br||b===Is?H=i.DEPTH24_STENCIL8:b===$n?H=i.DEPTH32F_STENCIL8:b===Fa&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Br||b===Is?H=i.DEPTH_COMPONENT24:b===$n?H=i.DEPTH_COMPONENT32F:b===Fa&&(H=i.DEPTH_COMPONENT16),H}function A(R,b){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==an&&R.minFilter!==Tn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function E(R){const b=R.target;b.removeEventListener("dispose",E),C(b),b.isVideoTexture&&u.delete(b)}function w(R){const b=R.target;b.removeEventListener("dispose",w),S(b)}function C(R){const b=n.get(R);if(b.__webglInit===void 0)return;const H=R.source,K=h.get(H);if(K){const ee=K[b.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&M(R),Object.keys(K).length===0&&h.delete(H)}n.remove(R)}function M(R){const b=n.get(R);i.deleteTexture(b.__webglTexture);const H=R.source,K=h.get(H);delete K[b.__cacheKey],a.memory.textures--}function S(R){const b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let ee=0;ee<b.__webglFramebuffer[K].length;ee++)i.deleteFramebuffer(b.__webglFramebuffer[K][ee]);else i.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)i.deleteFramebuffer(b.__webglFramebuffer[K]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const H=R.textures;for(let K=0,ee=H.length;K<ee;K++){const Z=n.get(H[K]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(H[K])}n.remove(R)}let P=0;function U(){P=0}function I(){const R=P;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),P+=1,R}function z(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function N(R,b){const H=n.get(R);if(R.isVideoTexture&&ce(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(H,R,b);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+b)}function k(R,b){const H=n.get(R);if(R.version>0&&H.__version!==R.version){$(H,R,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+b)}function V(R,b){const H=n.get(R);if(R.version>0&&H.__version!==R.version){$(H,R,b);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+b)}function G(R,b){const H=n.get(R);if(R.version>0&&H.__version!==R.version){te(H,R,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+b)}const ie={[Ds]:i.REPEAT,[Ji]:i.CLAMP_TO_EDGE,[uc]:i.MIRRORED_REPEAT},ue={[an]:i.NEAREST,[Sm]:i.NEAREST_MIPMAP_NEAREST,[ga]:i.NEAREST_MIPMAP_LINEAR,[Tn]:i.LINEAR,[$o]:i.LINEAR_MIPMAP_NEAREST,[Ti]:i.LINEAR_MIPMAP_LINEAR},fe={[b_]:i.NEVER,[R_]:i.ALWAYS,[E_]:i.LESS,[Um]:i.LEQUAL,[T_]:i.EQUAL,[C_]:i.GEQUAL,[w_]:i.GREATER,[A_]:i.NOTEQUAL};function Le(R,b){if(b.type===$n&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Tn||b.magFilter===$o||b.magFilter===ga||b.magFilter===Ti||b.minFilter===Tn||b.minFilter===$o||b.minFilter===ga||b.minFilter===Ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ie[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ie[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ie[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ue[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ue[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,fe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===an||b.minFilter!==ga&&b.minFilter!==Ti||b.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function nt(R,b){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",E));const K=b.source;let ee=h.get(K);ee===void 0&&(ee={},h.set(K,ee));const Z=z(b);if(Z!==R.__cacheKey){ee[Z]===void 0&&(ee[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ee[Z].usedTimes++;const Ee=ee[R.__cacheKey];Ee!==void 0&&(ee[R.__cacheKey].usedTimes--,Ee.usedTimes===0&&M(b)),R.__cacheKey=Z,R.__webglTexture=ee[Z].texture}return H}function $(R,b,H){let K=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=i.TEXTURE_3D);const ee=nt(R,b),Z=b.source;t.bindTexture(K,R.__webglTexture,i.TEXTURE0+H);const Ee=n.get(Z);if(Z.version!==Ee.__version||ee===!0){t.activeTexture(i.TEXTURE0+H);const de=Qe.getPrimaries(Qe.workingColorSpace),xe=b.colorSpace===Yi?null:Qe.getPrimaries(b.colorSpace),Ze=b.colorSpace===Yi||de===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let re=_(b.image,!1,r.maxTextureSize);re=Ue(b,re);const Me=s.convert(b.format,b.colorSpace),Ne=s.convert(b.type);let ze=x(b.internalFormat,Me,Ne,b.colorSpace,b.isVideoTexture);Le(K,b);let Se;const tt=b.mipmaps,Ye=b.isVideoTexture!==!0,pt=Ee.__version===void 0||ee===!0,O=Z.dataReady,he=A(b,re);if(b.isDepthTexture)ze=v(b.format===Us,b.type),pt&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,ze,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,ze,re.width,re.height,0,Me,Ne,null));else if(b.isDataTexture)if(tt.length>0){Ye&&pt&&t.texStorage2D(i.TEXTURE_2D,he,ze,tt[0].width,tt[0].height);for(let Y=0,J=tt.length;Y<J;Y++)Se=tt[Y],Ye?O&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,Se.width,Se.height,Me,Ne,Se.data):t.texImage2D(i.TEXTURE_2D,Y,ze,Se.width,Se.height,0,Me,Ne,Se.data);b.generateMipmaps=!1}else Ye?(pt&&t.texStorage2D(i.TEXTURE_2D,he,ze,re.width,re.height),O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re.width,re.height,Me,Ne,re.data)):t.texImage2D(i.TEXTURE_2D,0,ze,re.width,re.height,0,Me,Ne,re.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ye&&pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,ze,tt[0].width,tt[0].height,re.depth);for(let Y=0,J=tt.length;Y<J;Y++)if(Se=tt[Y],b.format!==Fn)if(Me!==null)if(Ye){if(O)if(b.layerUpdates.size>0){const ge=bf(Se.width,Se.height,b.format,b.type);for(const pe of b.layerUpdates){const Ge=Se.data.subarray(pe*ge/Se.data.BYTES_PER_ELEMENT,(pe+1)*ge/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,pe,Se.width,Se.height,1,Me,Ge)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Se.width,Se.height,re.depth,Me,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,ze,Se.width,Se.height,re.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Se.width,Se.height,re.depth,Me,Ne,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,ze,Se.width,Se.height,re.depth,0,Me,Ne,Se.data)}else{Ye&&pt&&t.texStorage2D(i.TEXTURE_2D,he,ze,tt[0].width,tt[0].height);for(let Y=0,J=tt.length;Y<J;Y++)Se=tt[Y],b.format!==Fn?Me!==null?Ye?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,Se.width,Se.height,Me,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,ze,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?O&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,Se.width,Se.height,Me,Ne,Se.data):t.texImage2D(i.TEXTURE_2D,Y,ze,Se.width,Se.height,0,Me,Ne,Se.data)}else if(b.isDataArrayTexture)if(Ye){if(pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,ze,re.width,re.height,re.depth),O)if(b.layerUpdates.size>0){const Y=bf(re.width,re.height,b.format,b.type);for(const J of b.layerUpdates){const ge=re.data.subarray(J*Y/re.data.BYTES_PER_ELEMENT,(J+1)*Y/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,re.width,re.height,1,Me,Ne,ge)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Me,Ne,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ze,re.width,re.height,re.depth,0,Me,Ne,re.data);else if(b.isData3DTexture)Ye?(pt&&t.texStorage3D(i.TEXTURE_3D,he,ze,re.width,re.height,re.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Me,Ne,re.data)):t.texImage3D(i.TEXTURE_3D,0,ze,re.width,re.height,re.depth,0,Me,Ne,re.data);else if(b.isFramebufferTexture){if(pt)if(Ye)t.texStorage2D(i.TEXTURE_2D,he,ze,re.width,re.height);else{let Y=re.width,J=re.height;for(let ge=0;ge<he;ge++)t.texImage2D(i.TEXTURE_2D,ge,ze,Y,J,0,Me,Ne,null),Y>>=1,J>>=1}}else if(tt.length>0){if(Ye&&pt){const Y=ve(tt[0]);t.texStorage2D(i.TEXTURE_2D,he,ze,Y.width,Y.height)}for(let Y=0,J=tt.length;Y<J;Y++)Se=tt[Y],Ye?O&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,Me,Ne,Se):t.texImage2D(i.TEXTURE_2D,Y,ze,Me,Ne,Se);b.generateMipmaps=!1}else if(Ye){if(pt){const Y=ve(re);t.texStorage2D(i.TEXTURE_2D,he,ze,Y.width,Y.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,Ne,re)}else t.texImage2D(i.TEXTURE_2D,0,ze,Me,Ne,re);p(b)&&m(K),Ee.__version=Z.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function te(R,b,H){if(b.image.length!==6)return;const K=nt(R,b),ee=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+H);const Z=n.get(ee);if(ee.version!==Z.__version||K===!0){t.activeTexture(i.TEXTURE0+H);const Ee=Qe.getPrimaries(Qe.workingColorSpace),de=b.colorSpace===Yi?null:Qe.getPrimaries(b.colorSpace),xe=b.colorSpace===Yi||Ee===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ze=b.isCompressedTexture||b.image[0].isCompressedTexture,re=b.image[0]&&b.image[0].isDataTexture,Me=[];for(let J=0;J<6;J++)!Ze&&!re?Me[J]=_(b.image[J],!0,r.maxCubemapSize):Me[J]=re?b.image[J].image:b.image[J],Me[J]=Ue(b,Me[J]);const Ne=Me[0],ze=s.convert(b.format,b.colorSpace),Se=s.convert(b.type),tt=x(b.internalFormat,ze,Se,b.colorSpace),Ye=b.isVideoTexture!==!0,pt=Z.__version===void 0||K===!0,O=ee.dataReady;let he=A(b,Ne);Le(i.TEXTURE_CUBE_MAP,b);let Y;if(Ze){Ye&&pt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,tt,Ne.width,Ne.height);for(let J=0;J<6;J++){Y=Me[J].mipmaps;for(let ge=0;ge<Y.length;ge++){const pe=Y[ge];b.format!==Fn?ze!==null?Ye?O&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge,0,0,pe.width,pe.height,ze,pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge,tt,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge,0,0,pe.width,pe.height,ze,Se,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge,tt,pe.width,pe.height,0,ze,Se,pe.data)}}}else{if(Y=b.mipmaps,Ye&&pt){Y.length>0&&he++;const J=ve(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,tt,J.width,J.height)}for(let J=0;J<6;J++)if(re){Ye?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Me[J].width,Me[J].height,ze,Se,Me[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,tt,Me[J].width,Me[J].height,0,ze,Se,Me[J].data);for(let ge=0;ge<Y.length;ge++){const Ge=Y[ge].image[J].image;Ye?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge+1,0,0,Ge.width,Ge.height,ze,Se,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge+1,tt,Ge.width,Ge.height,0,ze,Se,Ge.data)}}else{Ye?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ze,Se,Me[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,tt,ze,Se,Me[J]);for(let ge=0;ge<Y.length;ge++){const pe=Y[ge];Ye?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge+1,0,0,ze,Se,pe.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge+1,tt,ze,Se,pe.image[J])}}}p(b)&&m(i.TEXTURE_CUBE_MAP),Z.__version=ee.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function be(R,b,H,K,ee,Z){const Ee=s.convert(H.format,H.colorSpace),de=s.convert(H.type),xe=x(H.internalFormat,Ee,de,H.colorSpace),Ze=n.get(b),re=n.get(H);if(re.__renderTarget=b,!Ze.__hasExternalTextures){const Me=Math.max(1,b.width>>Z),Ne=Math.max(1,b.height>>Z);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,Z,xe,Me,Ne,b.depth,0,Ee,de,null):t.texImage2D(ee,Z,xe,Me,Ne,0,Ee,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),ye(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,ee,re.__webglTexture,0,ne(b)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,ee,re.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(R,b,H){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){const K=b.depthTexture,ee=K&&K.isDepthTexture?K.type:null,Z=v(b.stencilBuffer,ee),Ee=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=ne(b);ye(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,Z,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,Z,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Z,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,R)}else{const K=b.textures;for(let ee=0;ee<K.length;ee++){const Z=K[ee],Ee=s.convert(Z.format,Z.colorSpace),de=s.convert(Z.type),xe=x(Z.internalFormat,Ee,de,Z.colorSpace),Ze=ne(b);H&&ye(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,xe,b.width,b.height):ye(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze,xe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,xe,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(b.depthTexture);K.__renderTarget=b,(!K.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),N(b.depthTexture,0);const ee=K.__webglTexture,Z=ne(b);if(b.depthTexture.format===vs)ye(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(b.depthTexture.format===Us)ye(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ke(R){const b=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){const ee=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",ee)};K.addEventListener("dispose",ee),b.__depthDisposeCallback=ee}b.__boundDepthTexture=K}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");De(b.__webglFramebuffer,R)}else if(H){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=i.createRenderbuffer(),oe(b.__webglDepthbuffer[K],R,!1);else{const ee=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),oe(b.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ee)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(R,b,H){const K=n.get(R);b!==void 0&&be(K.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&ke(R)}function it(R){const b=R.texture,H=n.get(R),K=n.get(b);R.addEventListener("dispose",w);const ee=R.textures,Z=R.isWebGLCubeRenderTarget===!0,Ee=ee.length>1;if(Ee||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,a.memory.textures++),Z){H.__webglFramebuffer=[];for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[de]=[];for(let xe=0;xe<b.mipmaps.length;xe++)H.__webglFramebuffer[de][xe]=i.createFramebuffer()}else H.__webglFramebuffer[de]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let de=0;de<b.mipmaps.length;de++)H.__webglFramebuffer[de]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let de=0,xe=ee.length;de<xe;de++){const Ze=n.get(ee[de]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&ye(R)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let de=0;de<ee.length;de++){const xe=ee[de];H.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[de]);const Ze=s.convert(xe.format,xe.colorSpace),re=s.convert(xe.type),Me=x(xe.internalFormat,Ze,re,xe.colorSpace,R.isXRRenderTarget===!0),Ne=ne(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,Me,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,H.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(H.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Le(i.TEXTURE_CUBE_MAP,b);for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0)for(let xe=0;xe<b.mipmaps.length;xe++)be(H.__webglFramebuffer[de][xe],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe);else be(H.__webglFramebuffer[de],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);p(b)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let de=0,xe=ee.length;de<xe;de++){const Ze=ee[de],re=n.get(Ze);t.bindTexture(i.TEXTURE_2D,re.__webglTexture),Le(i.TEXTURE_2D,Ze),be(H.__webglFramebuffer,R,Ze,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),p(Ze)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,K.__webglTexture),Le(de,b),b.mipmaps&&b.mipmaps.length>0)for(let xe=0;xe<b.mipmaps.length;xe++)be(H.__webglFramebuffer[xe],R,b,i.COLOR_ATTACHMENT0,de,xe);else be(H.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,de,0);p(b)&&m(de),t.unbindTexture()}R.depthBuffer&&ke(R)}function Q(R){const b=R.textures;for(let H=0,K=b.length;H<K;H++){const ee=b[H];if(p(ee)){const Z=y(R),Ee=n.get(ee).__webglTexture;t.bindTexture(Z,Ee),m(Z),t.unbindTexture()}}}const se=[],D=[];function Re(R){if(R.samples>0){if(ye(R)===!1){const b=R.textures,H=R.width,K=R.height;let ee=i.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(R),de=b.length>1;if(de)for(let xe=0;xe<b.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let xe=0;xe<b.length;xe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[xe]);const Ze=n.get(b[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ze,0)}i.blitFramebuffer(0,0,H,K,0,0,H,K,ee,i.NEAREST),c===!0&&(se.length=0,D.length=0,se.push(i.COLOR_ATTACHMENT0+xe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(se.push(Z),D.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let xe=0;xe<b.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[xe]);const Ze=n.get(b[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ne(R){return Math.min(r.maxSamples,R.samples)}function ye(R){const b=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ce(R){const b=a.render.frame;u.get(R)!==b&&(u.set(R,b),R.update())}function Ue(R,b){const H=R.colorSpace,K=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==cn&&H!==Yi&&(Qe.getTransfer(H)===dt?(K!==Fn||ee!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}function ve(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=U,this.setTexture2D=N,this.setTexture2DArray=k,this.setTexture3D=V,this.setTextureCube=G,this.rebindTextures=Oe,this.setupRenderTarget=it,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=be,this.useMultisampledRTT=ye}function YS(i,e){function t(n,r=Yi){let s;const a=Qe.getTransfer(r);if(n===Li)return i.UNSIGNED_BYTE;if(n===xd)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Tm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bm)return i.BYTE;if(n===Em)return i.SHORT;if(n===Fa)return i.UNSIGNED_SHORT;if(n===vd)return i.INT;if(n===Br)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===qa)return i.HALF_FLOAT;if(n===wm)return i.ALPHA;if(n===Am)return i.RGB;if(n===Fn)return i.RGBA;if(n===Cm)return i.LUMINANCE;if(n===Rm)return i.LUMINANCE_ALPHA;if(n===vs)return i.DEPTH_COMPONENT;if(n===Us)return i.DEPTH_STENCIL;if(n===Md)return i.RED;if(n===Sd)return i.RED_INTEGER;if(n===Pm)return i.RG;if(n===bd)return i.RG_INTEGER;if(n===Ed)return i.RGBA_INTEGER;if(n===Ko||n===Zo||n===Jo||n===Qo)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ko)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ko)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===uu||n===du||n===hu||n===fu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===uu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===du)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pu||n===mu||n===gu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===pu||n===mu)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===gu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_u||n===vu||n===xu||n===yu||n===Mu||n===Su||n===bu||n===Eu||n===Tu||n===wu||n===Au||n===Cu||n===Ru||n===Pu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===_u)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Su)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Eu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Au)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ru)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xo||n===Lu||n===Du)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Xo)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Du)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lm||n===Iu||n===Uu||n===Nu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Xo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Iu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Uu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class $S extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Mt extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KS={type:"move"};class gl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(KS)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Mt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ZS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JS=`
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

}`;class QS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new zt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Qn({vertexShader:ZS,fragmentShader:JS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xe(new qs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XS extends Gs{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null;const _=new QS,p=t.getContextAttributes();let m=null,y=null;const x=[],v=[],A=new X;let E=null;const w=new nn;w.viewport=new Je;const C=new nn;C.viewport=new Je;const M=[w,C],S=new $S;let P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let te=x[$];return te===void 0&&(te=new gl,x[$]=te),te.getTargetRaySpace()},this.getControllerGrip=function($){let te=x[$];return te===void 0&&(te=new gl,x[$]=te),te.getGripSpace()},this.getHand=function($){let te=x[$];return te===void 0&&(te=new gl,x[$]=te),te.getHandSpace()};function I($){const te=v.indexOf($.inputSource);if(te===-1)return;const be=x[te];be!==void 0&&(be.update($.inputSource,$.frame,l||a),be.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",N);for(let $=0;$<x.length;$++){const te=v[$];te!==null&&(v[$]=null,x[$].disconnect(te))}P=null,U=null,_.reset(),e.setRenderTarget(m),f=null,h=null,d=null,r=null,y=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",z),r.addEventListener("inputsourceschange",N),p.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const te={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new zr(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let te=null,be=null,oe=null;p.depth&&(oe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=p.stencil?Us:vs,be=p.stencil?Is:Br);const De={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(De),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new zr(h.textureWidth,h.textureHeight,{format:Fn,type:Li,depthTexture:new qm(h.textureWidth,h.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),nt.setContext(r),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function N($){for(let te=0;te<$.removed.length;te++){const be=$.removed[te],oe=v.indexOf(be);oe>=0&&(v[oe]=null,x[oe].disconnect(be))}for(let te=0;te<$.added.length;te++){const be=$.added[te];let oe=v.indexOf(be);if(oe===-1){for(let ke=0;ke<x.length;ke++)if(ke>=v.length){v.push(be),oe=ke;break}else if(v[ke]===null){v[ke]=be,oe=ke;break}if(oe===-1)break}const De=x[oe];De&&De.connect(be)}}const k=new L,V=new L;function G($,te,be){k.setFromMatrixPosition(te.matrixWorld),V.setFromMatrixPosition(be.matrixWorld);const oe=k.distanceTo(V),De=te.projectionMatrix.elements,ke=be.projectionMatrix.elements,Oe=De[14]/(De[10]-1),it=De[14]/(De[10]+1),Q=(De[9]+1)/De[5],se=(De[9]-1)/De[5],D=(De[8]-1)/De[0],Re=(ke[8]+1)/ke[0],ne=Oe*D,ye=Oe*Re,ce=oe/(-D+Re),Ue=ce*-D;if(te.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ue),$.translateZ(ce),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),De[10]===-1)$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const ve=Oe+ce,R=it+ce,b=ne-Ue,H=ye+(oe-Ue),K=Q*it/R*ve,ee=se*it/R*ve;$.projectionMatrix.makePerspective(b,H,K,ee,ve,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ie($,te){te===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(te.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let te=$.near,be=$.far;_.texture!==null&&(_.depthNear>0&&(te=_.depthNear),_.depthFar>0&&(be=_.depthFar)),S.near=C.near=w.near=te,S.far=C.far=w.far=be,(P!==S.near||U!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,U=S.far),w.layers.mask=$.layers.mask|2,C.layers.mask=$.layers.mask|4,S.layers.mask=w.layers.mask|C.layers.mask;const oe=$.parent,De=S.cameras;ie(S,oe);for(let ke=0;ke<De.length;ke++)ie(De[ke],oe);De.length===2?G(S,w,C):S.projectionMatrix.copy(w.projectionMatrix),ue($,S,oe)};function ue($,te,be){be===null?$.matrix.copy(te.matrixWorld):($.matrix.copy(be.matrixWorld),$.matrix.invert(),$.matrix.multiply(te.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ns*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let fe=null;function Le($,te){if(u=te.getViewerPose(l||a),g=te,u!==null){const be=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let oe=!1;be.length!==S.cameras.length&&(S.cameras.length=0,oe=!0);for(let ke=0;ke<be.length;ke++){const Oe=be[ke];let it=null;if(f!==null)it=f.getViewport(Oe);else{const se=d.getViewSubImage(h,Oe);it=se.viewport,ke===0&&(e.setRenderTargetTextures(y,se.colorTexture,h.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(y))}let Q=M[ke];Q===void 0&&(Q=new nn,Q.layers.enable(ke),Q.viewport=new Je,M[ke]=Q),Q.matrix.fromArray(Oe.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Oe.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(it.x,it.y,it.width,it.height),ke===0&&(S.matrix.copy(Q.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),oe===!0&&S.cameras.push(Q)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const ke=d.getDepthInformation(be[0]);ke&&ke.isValid&&ke.texture&&_.init(e,ke,r.renderState)}}for(let be=0;be<x.length;be++){const oe=v[be],De=x[be];oe!==null&&De!==void 0&&De.update(oe,te,l||a)}fe&&fe($,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const nt=new Wm;nt.setAnimationLoop(Le),this.setAnimationLoop=function($){fe=$},this.dispose=function(){}}}const vr=new li,eb=new Fe;function tb(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Hm(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,y,x,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,y,x):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===gn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===gn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m),x=y.envMap,v=y.envMapRotation;x&&(p.envMap.value=x,vr.copy(v),vr.x*=-1,vr.y*=-1,vr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),p.envMapRotation.value.setFromMatrix4(eb.makeRotationFromEuler(vr)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,y,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===gn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function nb(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function l(y,x){let v=r[y.id];v===void 0&&(g(y),v=u(y),r[y.id]=v,y.addEventListener("dispose",p));const A=x.program;n.updateUBOMapping(y,A);const E=e.render.frame;s[y.id]!==E&&(h(y),s[y.id]=E)}function u(y){const x=d();y.__bindingPointIndex=x;const v=i.createBuffer(),A=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const x=r[y.id],v=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,w=v.length;E<w;E++){const C=Array.isArray(v[E])?v[E]:[v[E]];for(let M=0,S=C.length;M<S;M++){const P=C[M];if(f(P,E,M,A)===!0){const U=P.__offset,I=Array.isArray(P.value)?P.value:[P.value];let z=0;for(let N=0;N<I.length;N++){const k=I[N],V=_(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,U+z,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,z),z+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,x,v,A){const E=y.value,w=x+"_"+v;if(A[w]===void 0)return typeof E=="number"||typeof E=="boolean"?A[w]=E:A[w]=E.clone(),!0;{const C=A[w];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return A[w]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(y){const x=y.uniforms;let v=0;const A=16;for(let w=0,C=x.length;w<C;w++){const M=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,P=M.length;S<P;S++){const U=M[S],I=Array.isArray(U.value)?U.value:[U.value];for(let z=0,N=I.length;z<N;z++){const k=I[z],V=_(k),G=v%A,ie=G%V.boundary,ue=G+ie;v+=ie,ue!==0&&A-ue<V.storage&&(v+=A-ue),U.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=V.storage}}}const E=v%A;return E>0&&(v+=A-E),y.__size=v,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){const x=y.target;x.removeEventListener("dispose",p);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function m(){for(const y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:c,update:l,dispose:m}}class ib{constructor(e={}){const{canvas:t=j_(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,m=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this.toneMapping=ir,this.toneMappingExposure=1;const v=this;let A=!1,E=0,w=0,C=null,M=-1,S=null;const P=new Je,U=new Je;let I=null;const z=new Te(0);let N=0,k=t.width,V=t.height,G=1,ie=null,ue=null;const fe=new Je(0,0,k,V),Le=new Je(0,0,k,V);let nt=!1;const $=new Rd;let te=!1,be=!1;const oe=new Fe,De=new Fe,ke=new L,Oe=new Je,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function se(){return C===null?G:1}let D=n;function Re(T,F){return t.getContext(T,F)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_d}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",pe,!1),D===null){const F="webgl2";if(D=Re(F,T),D===null)throw Re(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ne,ye,ce,Ue,ve,R,b,H,K,ee,Z,Ee,de,xe,Ze,re,Me,Ne,ze,Se,tt,Ye,pt,O;function he(){ne=new cM(D),ne.init(),Ye=new YS(D,ne),ye=new nM(D,ne,e,Ye),ce=new WS(D,ne),ye.reverseDepthBuffer&&h&&ce.buffers.depth.setReversed(!0),Ue=new dM(D),ve=new RS,R=new jS(D,ne,ce,ve,ye,Ye,Ue),b=new rM(v),H=new oM(v),K=new vv(D),pt=new eM(D,K),ee=new lM(D,K,Ue,pt),Z=new fM(D,ee,K,Ue),ze=new hM(D,ye,R),re=new iM(ve),Ee=new CS(v,b,H,ne,ye,pt,re),de=new tb(v,ve),xe=new LS,Ze=new FS(ne),Ne=new Xy(v,b,H,ce,Z,f,c),Me=new VS(v,Z,ye),O=new nb(D,Ue,ye,ce),Se=new tM(D,ne,Ue),tt=new uM(D,ne,Ue),Ue.programs=Ee.programs,v.capabilities=ye,v.extensions=ne,v.properties=ve,v.renderLists=xe,v.shadowMap=Me,v.state=ce,v.info=Ue}he();const Y=new XS(v,D);this.xr=Y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=ne.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ne.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(T){T!==void 0&&(G=T,this.setSize(k,V,!1))},this.getSize=function(T){return T.set(k,V)},this.setSize=function(T,F,W=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,V=F,t.width=Math.floor(T*G),t.height=Math.floor(F*G),W===!0&&(t.style.width=T+"px",t.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(k*G,V*G).floor()},this.setDrawingBufferSize=function(T,F,W){k=T,V=F,G=W,t.width=Math.floor(T*W),t.height=Math.floor(F*W),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(fe)},this.setViewport=function(T,F,W,q){T.isVector4?fe.set(T.x,T.y,T.z,T.w):fe.set(T,F,W,q),ce.viewport(P.copy(fe).multiplyScalar(G).round())},this.getScissor=function(T){return T.copy(Le)},this.setScissor=function(T,F,W,q){T.isVector4?Le.set(T.x,T.y,T.z,T.w):Le.set(T,F,W,q),ce.scissor(U.copy(Le).multiplyScalar(G).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(T){ce.setScissorTest(nt=T)},this.setOpaqueSort=function(T){ie=T},this.setTransparentSort=function(T){ue=T},this.getClearColor=function(T){return T.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(T=!0,F=!0,W=!0){let q=0;if(T){let B=!1;if(C!==null){const ae=C.texture.format;B=ae===Ed||ae===bd||ae===Sd}if(B){const ae=C.texture.type,me=ae===Li||ae===Br||ae===Fa||ae===Is||ae===xd||ae===yd,we=Ne.getClearColor(),Ae=Ne.getClearAlpha(),He=we.r,We=we.g,Ce=we.b;me?(g[0]=He,g[1]=We,g[2]=Ce,g[3]=Ae,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=He,_[1]=We,_[2]=Ce,_[3]=Ae,D.clearBufferiv(D.COLOR,0,_))}else q|=D.COLOR_BUFFER_BIT}F&&(q|=D.DEPTH_BUFFER_BIT),W&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),xe.dispose(),Ze.dispose(),ve.dispose(),b.dispose(),H.dispose(),Z.dispose(),pt.dispose(),O.dispose(),Ee.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Xd),Y.removeEventListener("sessionend",eh),ur.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=Ue.autoReset,F=Me.enabled,W=Me.autoUpdate,q=Me.needsUpdate,B=Me.type;he(),Ue.autoReset=T,Me.enabled=F,Me.autoUpdate=W,Me.needsUpdate=q,Me.type=B}function pe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ge(T){const F=T.target;F.removeEventListener("dispose",Ge),Et(F)}function Et(T){Yt(T),ve.remove(T)}function Yt(T){const F=ve.get(T).programs;F!==void 0&&(F.forEach(function(W){Ee.releaseProgram(W)}),T.isShaderMaterial&&Ee.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,W,q,B,ae){F===null&&(F=it);const me=B.isMesh&&B.matrixWorld.determinant()<0,we=Tg(T,F,W,q,B);ce.setMaterial(q,me);let Ae=W.index,He=1;if(q.wireframe===!0){if(Ae=ee.getWireframeAttribute(W),Ae===void 0)return;He=2}const We=W.drawRange,Ce=W.attributes.position;let rt=We.start*He,mt=(We.start+We.count)*He;ae!==null&&(rt=Math.max(rt,ae.start*He),mt=Math.min(mt,(ae.start+ae.count)*He)),Ae!==null?(rt=Math.max(rt,0),mt=Math.min(mt,Ae.count)):Ce!=null&&(rt=Math.max(rt,0),mt=Math.min(mt,Ce.count));const _t=mt-rt;if(_t<0||_t===1/0)return;pt.setup(B,q,we,W,Ae);let ln,at=Se;if(Ae!==null&&(ln=K.get(Ae),at=tt,at.setIndex(ln)),B.isMesh)q.wireframe===!0?(ce.setLineWidth(q.wireframeLinewidth*se()),at.setMode(D.LINES)):at.setMode(D.TRIANGLES);else if(B.isLine){let Pe=q.linewidth;Pe===void 0&&(Pe=1),ce.setLineWidth(Pe*se()),B.isLineSegments?at.setMode(D.LINES):B.isLineLoop?at.setMode(D.LINE_LOOP):at.setMode(D.LINE_STRIP)}else B.isPoints?at.setMode(D.POINTS):B.isSprite&&at.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)at.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))at.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Pe=B._multiDrawStarts,fi=B._multiDrawCounts,ot=B._multiDrawCount,Vn=Ae?K.get(Ae).bytesPerElement:1,Vr=ve.get(q).currentProgram.getUniforms();for(let vn=0;vn<ot;vn++)Vr.setValue(D,"_gl_DrawID",vn),at.render(Pe[vn]/Vn,fi[vn])}else if(B.isInstancedMesh)at.renderInstances(rt,_t,B.count);else if(W.isInstancedBufferGeometry){const Pe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,fi=Math.min(W.instanceCount,Pe);at.renderInstances(rt,_t,fi)}else at.render(rt,_t)};function ct(T,F,W){T.transparent===!0&&T.side===dn&&T.forceSinglePass===!1?(T.side=gn,T.needsUpdate=!0,Qa(T,F,W),T.side=Pi,T.needsUpdate=!0,Qa(T,F,W),T.side=dn):Qa(T,F,W)}this.compile=function(T,F,W=null){W===null&&(W=T),m=Ze.get(W),m.init(F),x.push(m),W.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),T!==W&&T.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const q=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ae=B.material;if(ae)if(Array.isArray(ae))for(let me=0;me<ae.length;me++){const we=ae[me];ct(we,W,B),q.add(we)}else ct(ae,W,B),q.add(ae)}),x.pop(),m=null,q},this.compileAsync=function(T,F,W=null){const q=this.compile(T,F,W);return new Promise(B=>{function ae(){if(q.forEach(function(me){ve.get(me).currentProgram.isReady()&&q.delete(me)}),q.size===0){B(T);return}setTimeout(ae,10)}ne.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Hn=null;function hi(T){Hn&&Hn(T)}function Xd(){ur.stop()}function eh(){ur.start()}const ur=new Wm;ur.setAnimationLoop(hi),typeof self<"u"&&ur.setContext(self),this.setAnimationLoop=function(T){Hn=T,Y.setAnimationLoop(T),T===null?ur.stop():ur.start()},Y.addEventListener("sessionstart",Xd),Y.addEventListener("sessionend",eh),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(F),F=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,F,C),m=Ze.get(T,x.length),m.init(F),x.push(m),De.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),$.setFromProjectionMatrix(De),be=this.localClippingEnabled,te=re.init(this.clippingPlanes,be),p=xe.get(T,y.length),p.init(),y.push(p),Y.enabled===!0&&Y.isPresenting===!0){const ae=v.xr.getDepthSensingMesh();ae!==null&&Ic(ae,F,-1/0,v.sortObjects)}Ic(T,F,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(ie,ue),Q=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Q&&Ne.addToRenderList(p,T),this.info.render.frame++,te===!0&&re.beginShadows();const W=m.state.shadowsArray;Me.render(W,T,F),te===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=p.opaque,B=p.transmissive;if(m.setupLights(),F.isArrayCamera){const ae=F.cameras;if(B.length>0)for(let me=0,we=ae.length;me<we;me++){const Ae=ae[me];nh(q,B,T,Ae)}Q&&Ne.render(T);for(let me=0,we=ae.length;me<we;me++){const Ae=ae[me];th(p,T,Ae,Ae.viewport)}}else B.length>0&&nh(q,B,T,F),Q&&Ne.render(T),th(p,T,F);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(v,T,F),pt.resetDefaultState(),M=-1,S=null,x.pop(),x.length>0?(m=x[x.length-1],te===!0&&re.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function Ic(T,F,W,q){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){q&&Oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(De);const me=Z.update(T),we=T.material;we.visible&&p.push(T,me,we,W,Oe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$.intersectsObject(T))){const me=Z.update(T),we=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Oe.copy(T.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Oe.copy(me.boundingSphere.center)),Oe.applyMatrix4(T.matrixWorld).applyMatrix4(De)),Array.isArray(we)){const Ae=me.groups;for(let He=0,We=Ae.length;He<We;He++){const Ce=Ae[He],rt=we[Ce.materialIndex];rt&&rt.visible&&p.push(T,me,rt,W,Oe.z,Ce)}}else we.visible&&p.push(T,me,we,W,Oe.z,null)}}const ae=T.children;for(let me=0,we=ae.length;me<we;me++)Ic(ae[me],F,W,q)}function th(T,F,W,q){const B=T.opaque,ae=T.transmissive,me=T.transparent;m.setupLightsView(W),te===!0&&re.setGlobalState(v.clippingPlanes,W),q&&ce.viewport(P.copy(q)),B.length>0&&Ja(B,F,W),ae.length>0&&Ja(ae,F,W),me.length>0&&Ja(me,F,W),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function nh(T,F,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new zr(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?qa:Li,minFilter:Ti,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ae=m.state.transmissionRenderTarget[q.id],me=q.viewport||P;ae.setSize(me.z,me.w);const we=v.getRenderTarget();v.setRenderTarget(ae),v.getClearColor(z),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear(),Q&&Ne.render(W);const Ae=v.toneMapping;v.toneMapping=ir;const He=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),te===!0&&re.setGlobalState(v.clippingPlanes,q),Ja(T,W,q),R.updateMultisampleRenderTarget(ae),R.updateRenderTargetMipmap(ae),ne.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Ce=0,rt=F.length;Ce<rt;Ce++){const mt=F[Ce],_t=mt.object,ln=mt.geometry,at=mt.material,Pe=mt.group;if(at.side===dn&&_t.layers.test(q.layers)){const fi=at.side;at.side=gn,at.needsUpdate=!0,ih(_t,W,q,ln,at,Pe),at.side=fi,at.needsUpdate=!0,We=!0}}We===!0&&(R.updateMultisampleRenderTarget(ae),R.updateRenderTargetMipmap(ae))}v.setRenderTarget(we),v.setClearColor(z,N),He!==void 0&&(q.viewport=He),v.toneMapping=Ae}function Ja(T,F,W){const q=F.isScene===!0?F.overrideMaterial:null;for(let B=0,ae=T.length;B<ae;B++){const me=T[B],we=me.object,Ae=me.geometry,He=q===null?me.material:q,We=me.group;we.layers.test(W.layers)&&ih(we,F,W,Ae,He,We)}}function ih(T,F,W,q,B,ae){T.onBeforeRender(v,F,W,q,B,ae),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(v,F,W,q,T,ae),B.transparent===!0&&B.side===dn&&B.forceSinglePass===!1?(B.side=gn,B.needsUpdate=!0,v.renderBufferDirect(W,F,q,B,T,ae),B.side=Pi,B.needsUpdate=!0,v.renderBufferDirect(W,F,q,B,T,ae),B.side=dn):v.renderBufferDirect(W,F,q,B,T,ae),T.onAfterRender(v,F,W,q,B,ae)}function Qa(T,F,W){F.isScene!==!0&&(F=it);const q=ve.get(T),B=m.state.lights,ae=m.state.shadowsArray,me=B.state.version,we=Ee.getParameters(T,B.state,ae,F,W),Ae=Ee.getProgramCacheKey(we);let He=q.programs;q.environment=T.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(T.isMeshStandardMaterial?H:b).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,He===void 0&&(T.addEventListener("dispose",Ge),He=new Map,q.programs=He);let We=He.get(Ae);if(We!==void 0){if(q.currentProgram===We&&q.lightsStateVersion===me)return sh(T,we),We}else we.uniforms=Ee.getUniforms(T),T.onBeforeCompile(we,v),We=Ee.acquireProgram(we,Ae),He.set(Ae,We),q.uniforms=we.uniforms;const Ce=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ce.clippingPlanes=re.uniform),sh(T,we),q.needsLights=Ag(T),q.lightsStateVersion=me,q.needsLights&&(Ce.ambientLightColor.value=B.state.ambient,Ce.lightProbe.value=B.state.probe,Ce.directionalLights.value=B.state.directional,Ce.directionalLightShadows.value=B.state.directionalShadow,Ce.spotLights.value=B.state.spot,Ce.spotLightShadows.value=B.state.spotShadow,Ce.rectAreaLights.value=B.state.rectArea,Ce.ltc_1.value=B.state.rectAreaLTC1,Ce.ltc_2.value=B.state.rectAreaLTC2,Ce.pointLights.value=B.state.point,Ce.pointLightShadows.value=B.state.pointShadow,Ce.hemisphereLights.value=B.state.hemi,Ce.directionalShadowMap.value=B.state.directionalShadowMap,Ce.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ce.spotShadowMap.value=B.state.spotShadowMap,Ce.spotLightMatrix.value=B.state.spotLightMatrix,Ce.spotLightMap.value=B.state.spotLightMap,Ce.pointShadowMap.value=B.state.pointShadowMap,Ce.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=We,q.uniformsList=null,We}function rh(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=ec.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function sh(T,F){const W=ve.get(T);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Tg(T,F,W,q,B){F.isScene!==!0&&(F=it),R.resetTextureUnits();const ae=F.fog,me=q.isMeshStandardMaterial?F.environment:null,we=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:cn,Ae=(q.isMeshStandardMaterial?H:b).get(q.envMap||me),He=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,We=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ce=!!W.morphAttributes.position,rt=!!W.morphAttributes.normal,mt=!!W.morphAttributes.color;let _t=ir;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(_t=v.toneMapping);const ln=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,at=ln!==void 0?ln.length:0,Pe=ve.get(q),fi=m.state.lights;if(te===!0&&(be===!0||T!==S)){const Ln=T===S&&q.id===M;re.setState(q,T,Ln)}let ot=!1;q.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==fi.state.version||Pe.outputColorSpace!==we||B.isBatchedMesh&&Pe.batching===!1||!B.isBatchedMesh&&Pe.batching===!0||B.isBatchedMesh&&Pe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Pe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Pe.instancing===!1||!B.isInstancedMesh&&Pe.instancing===!0||B.isSkinnedMesh&&Pe.skinning===!1||!B.isSkinnedMesh&&Pe.skinning===!0||B.isInstancedMesh&&Pe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Pe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Pe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Pe.instancingMorph===!1&&B.morphTexture!==null||Pe.envMap!==Ae||q.fog===!0&&Pe.fog!==ae||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==re.numPlanes||Pe.numIntersection!==re.numIntersection)||Pe.vertexAlphas!==He||Pe.vertexTangents!==We||Pe.morphTargets!==Ce||Pe.morphNormals!==rt||Pe.morphColors!==mt||Pe.toneMapping!==_t||Pe.morphTargetsCount!==at)&&(ot=!0):(ot=!0,Pe.__version=q.version);let Vn=Pe.currentProgram;ot===!0&&(Vn=Qa(q,F,B));let Vr=!1,vn=!1,Js=!1;const vt=Vn.getUniforms(),ei=Pe.uniforms;if(ce.useProgram(Vn.program)&&(Vr=!0,vn=!0,Js=!0),q.id!==M&&(M=q.id,vn=!0),Vr||S!==T){ce.buffers.depth.getReversed()?(oe.copy(T.projectionMatrix),$_(oe),K_(oe),vt.setValue(D,"projectionMatrix",oe)):vt.setValue(D,"projectionMatrix",T.projectionMatrix),vt.setValue(D,"viewMatrix",T.matrixWorldInverse);const Ii=vt.map.cameraPosition;Ii!==void 0&&Ii.setValue(D,ke.setFromMatrixPosition(T.matrixWorld)),ye.logarithmicDepthBuffer&&vt.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&vt.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,vn=!0,Js=!0)}if(B.isSkinnedMesh){vt.setOptional(D,B,"bindMatrix"),vt.setOptional(D,B,"bindMatrixInverse");const Ln=B.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),vt.setValue(D,"boneTexture",Ln.boneTexture,R))}B.isBatchedMesh&&(vt.setOptional(D,B,"batchingTexture"),vt.setValue(D,"batchingTexture",B._matricesTexture,R),vt.setOptional(D,B,"batchingIdTexture"),vt.setValue(D,"batchingIdTexture",B._indirectTexture,R),vt.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&vt.setValue(D,"batchingColorTexture",B._colorsTexture,R));const Qs=W.morphAttributes;if((Qs.position!==void 0||Qs.normal!==void 0||Qs.color!==void 0)&&ze.update(B,W,Vn),(vn||Pe.receiveShadow!==B.receiveShadow)&&(Pe.receiveShadow=B.receiveShadow,vt.setValue(D,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(ei.envMap.value=Ae,ei.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&F.environment!==null&&(ei.envMapIntensity.value=F.environmentIntensity),vn&&(vt.setValue(D,"toneMappingExposure",v.toneMappingExposure),Pe.needsLights&&wg(ei,Js),ae&&q.fog===!0&&de.refreshFogUniforms(ei,ae),de.refreshMaterialUniforms(ei,q,G,V,m.state.transmissionRenderTarget[T.id]),ec.upload(D,rh(Pe),ei,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ec.upload(D,rh(Pe),ei,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&vt.setValue(D,"center",B.center),vt.setValue(D,"modelViewMatrix",B.modelViewMatrix),vt.setValue(D,"normalMatrix",B.normalMatrix),vt.setValue(D,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ln=q.uniformsGroups;for(let Ii=0,Ui=Ln.length;Ii<Ui;Ii++){const ah=Ln[Ii];O.update(ah,Vn),O.bind(ah,Vn)}}return Vn}function wg(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Ag(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,F,W){ve.get(T.texture).__webglTexture=F,ve.get(T.depthTexture).__webglTexture=W;const q=ve.get(T);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){const W=ve.get(T);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,W=0){C=T,E=F,w=W;let q=!0,B=null,ae=!1,me=!1;if(T){const Ae=ve.get(T);if(Ae.__useDefaultFramebuffer!==void 0)ce.bindFramebuffer(D.FRAMEBUFFER,null),q=!1;else if(Ae.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(Ae.__hasExternalTextures)R.rebindTextures(T,ve.get(T.texture).__webglTexture,ve.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ce=T.depthTexture;if(Ae.__boundDepthTexture!==Ce){if(Ce!==null&&ve.has(Ce)&&(T.width!==Ce.image.width||T.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const He=T.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(me=!0);const We=ve.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(We[F])?B=We[F][W]:B=We[F],ae=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?B=ve.get(T).__webglMultisampledFramebuffer:Array.isArray(We)?B=We[W]:B=We,P.copy(T.viewport),U.copy(T.scissor),I=T.scissorTest}else P.copy(fe).multiplyScalar(G).floor(),U.copy(Le).multiplyScalar(G).floor(),I=nt;if(ce.bindFramebuffer(D.FRAMEBUFFER,B)&&q&&ce.drawBuffers(T,B),ce.viewport(P),ce.scissor(U),ce.setScissorTest(I),ae){const Ae=ve.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ae.__webglTexture,W)}else if(me){const Ae=ve.get(T.texture),He=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ae.__webglTexture,W||0,He)}M=-1},this.readRenderTargetPixels=function(T,F,W,q,B,ae,me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=ve.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&me!==void 0&&(we=we[me]),we){ce.bindFramebuffer(D.FRAMEBUFFER,we);try{const Ae=T.texture,He=Ae.format,We=Ae.type;if(!ye.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-q&&W>=0&&W<=T.height-B&&D.readPixels(F,W,q,B,Ye.convert(He),Ye.convert(We),ae)}finally{const Ae=C!==null?ve.get(C).__webglFramebuffer:null;ce.bindFramebuffer(D.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(T,F,W,q,B,ae,me){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=ve.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&me!==void 0&&(we=we[me]),we){const Ae=T.texture,He=Ae.format,We=Ae.type;if(!ye.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-q&&W>=0&&W<=T.height-B){ce.bindFramebuffer(D.FRAMEBUFFER,we);const Ce=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ce),D.bufferData(D.PIXEL_PACK_BUFFER,ae.byteLength,D.STREAM_READ),D.readPixels(F,W,q,B,Ye.convert(He),Ye.convert(We),0);const rt=C!==null?ve.get(C).__webglFramebuffer:null;ce.bindFramebuffer(D.FRAMEBUFFER,rt);const mt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Y_(D,mt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ce),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ae),D.deleteBuffer(Ce),D.deleteSync(mt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,F=null,W=0){T.isTexture!==!0&&(_a("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);const q=Math.pow(2,-W),B=Math.floor(T.image.width*q),ae=Math.floor(T.image.height*q),me=F!==null?F.x:0,we=F!==null?F.y:0;R.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,me,we,B,ae),ce.unbindTexture()},this.copyTextureToTexture=function(T,F,W=null,q=null,B=0){T.isTexture!==!0&&(_a("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,T=arguments[1],F=arguments[2],B=arguments[3]||0,W=null);let ae,me,we,Ae,He,We,Ce,rt,mt;const _t=T.isCompressedTexture?T.mipmaps[B]:T.image;W!==null?(ae=W.max.x-W.min.x,me=W.max.y-W.min.y,we=W.isBox3?W.max.z-W.min.z:1,Ae=W.min.x,He=W.min.y,We=W.isBox3?W.min.z:0):(ae=_t.width,me=_t.height,we=_t.depth||1,Ae=0,He=0,We=0),q!==null?(Ce=q.x,rt=q.y,mt=q.z):(Ce=0,rt=0,mt=0);const ln=Ye.convert(F.format),at=Ye.convert(F.type);let Pe;F.isData3DTexture?(R.setTexture3D(F,0),Pe=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(R.setTexture2DArray(F,0),Pe=D.TEXTURE_2D_ARRAY):(R.setTexture2D(F,0),Pe=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const fi=D.getParameter(D.UNPACK_ROW_LENGTH),ot=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Vn=D.getParameter(D.UNPACK_SKIP_PIXELS),Vr=D.getParameter(D.UNPACK_SKIP_ROWS),vn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,_t.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_t.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ae),D.pixelStorei(D.UNPACK_SKIP_ROWS,He),D.pixelStorei(D.UNPACK_SKIP_IMAGES,We);const Js=T.isDataArrayTexture||T.isData3DTexture,vt=F.isDataArrayTexture||F.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const ei=ve.get(T),Qs=ve.get(F),Ln=ve.get(ei.__renderTarget),Ii=ve.get(Qs.__renderTarget);ce.bindFramebuffer(D.READ_FRAMEBUFFER,Ln.__webglFramebuffer),ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let Ui=0;Ui<we;Ui++)Js&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ve.get(T).__webglTexture,B,We+Ui),T.isDepthTexture?(vt&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ve.get(F).__webglTexture,B,mt+Ui),D.blitFramebuffer(Ae,He,ae,me,Ce,rt,ae,me,D.DEPTH_BUFFER_BIT,D.NEAREST)):vt?D.copyTexSubImage3D(Pe,B,Ce,rt,mt+Ui,Ae,He,ae,me):D.copyTexSubImage2D(Pe,B,Ce,rt,mt+Ui,Ae,He,ae,me);ce.bindFramebuffer(D.READ_FRAMEBUFFER,null),ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else vt?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Pe,B,Ce,rt,mt,ae,me,we,ln,at,_t.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Pe,B,Ce,rt,mt,ae,me,we,ln,_t.data):D.texSubImage3D(Pe,B,Ce,rt,mt,ae,me,we,ln,at,_t):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,B,Ce,rt,ae,me,ln,at,_t.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,B,Ce,rt,_t.width,_t.height,ln,_t.data):D.texSubImage2D(D.TEXTURE_2D,B,Ce,rt,ae,me,ln,at,_t);D.pixelStorei(D.UNPACK_ROW_LENGTH,fi),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ot),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Vn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Vr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,vn),B===0&&F.generateMipmaps&&D.generateMipmap(Pe),ce.unbindTexture()},this.copyTextureToTexture3D=function(T,F,W=null,q=null,B=0){return T.isTexture!==!0&&(_a("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,T=arguments[2],F=arguments[3],B=arguments[4]||0),_a('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,F,W,q,B)},this.initRenderTarget=function(T){ve.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),ce.unbindTexture()},this.resetState=function(){E=0,w=0,C=null,ce.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}class Dd{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Te(e),this.density=t}clone(){return new Dd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Zm extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Id{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fu,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new L;class Kn{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),r=lt(r,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Kn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Jm extends Zn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let rs;const ra=new L,ss=new L,as=new L,os=new X,sa=new X,Qm=new Fe,Mo=new L,aa=new L,So=new L,Ef=new X,_l=new X,Tf=new X;class rb extends ft{constructor(e=new Jm){if(super(),this.isSprite=!0,this.type="Sprite",rs===void 0){rs=new st;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Id(t,5);rs.setIndex([0,1,2,0,2,3]),rs.setAttribute("position",new Kn(n,3,0,!1)),rs.setAttribute("uv",new Kn(n,2,3,!1))}this.geometry=rs,this.material=e,this.center=new X(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ss.setFromMatrixScale(this.matrixWorld),Qm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),as.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ss.multiplyScalar(-as.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;bo(Mo.set(-.5,-.5,0),as,a,ss,r,s),bo(aa.set(.5,-.5,0),as,a,ss,r,s),bo(So.set(.5,.5,0),as,a,ss,r,s),Ef.set(0,0),_l.set(1,0),Tf.set(1,1);let o=e.ray.intersectTriangle(Mo,aa,So,!1,ra);if(o===null&&(bo(aa.set(-.5,.5,0),as,a,ss,r,s),_l.set(0,1),o=e.ray.intersectTriangle(Mo,So,aa,!1,ra),o===null))return;const c=e.ray.origin.distanceTo(ra);c<e.near||c>e.far||t.push({distance:c,point:ra.clone(),uv:bn.getInterpolation(ra,Mo,aa,So,Ef,_l,Tf,new X),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function bo(i,e,t,n,r,s){os.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(sa.x=s*os.x-r*os.y,sa.y=r*os.x+s*os.y):sa.copy(os),i.copy(e),i.x+=sa.x,i.y+=sa.y,i.applyMatrix4(Qm)}const wf=new L,Af=new Je,Cf=new Je,sb=new L,Rf=new Fe,Eo=new L,vl=new kn,Pf=new Fe,xl=new ja;class ab extends Xe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=wh,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Pn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Eo),this.boundingBox.expandByPoint(Eo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new kn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Eo),this.boundingSphere.expandByPoint(Eo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vl.copy(this.boundingSphere),vl.applyMatrix4(r),e.ray.intersectsSphere(vl)!==!1&&(Pf.copy(r).invert(),xl.copy(e.ray).applyMatrix4(Pf),!(this.boundingBox!==null&&xl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,xl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Je,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===wh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===__?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Af.fromBufferAttribute(r.attributes.skinIndex,e),Cf.fromBufferAttribute(r.attributes.skinWeight,e),wf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Cf.getComponent(s);if(a!==0){const o=Af.getComponent(s);Rf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(sb.copy(wf).applyMatrix4(Rf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Xm extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class eg extends zt{constructor(e=null,t=1,n=1,r,s,a,o,c,l=an,u=an,d,h){super(null,a,o,c,l,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Lf=new Fe,ob=new Fe;class Ud{constructor(e=[],t=[]){this.uuid=Bn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:ob;Lf.multiplyMatrices(o,t[s]),Lf.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Ud(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new eg(t,e,e,Fn,$n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Xm),this.bones.push(a),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=n[r];e.boneInverses.push(o.toArray())}return e}}class ku extends At{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const cs=new Fe,Df=new Fe,To=[],If=new Pn,cb=new Fe,oa=new Xe,ca=new kn;class tg extends Xe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ku(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,cb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),If.copy(e.boundingBox).applyMatrix4(cs),this.boundingBox.union(If)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),ca.copy(e.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(ca)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(oa.geometry=this.geometry,oa.material=this.material,oa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ca.copy(this.boundingSphere),ca.applyMatrix4(n),e.ray.intersectsSphere(ca)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,cs),Df.multiplyMatrices(n,cs),oa.matrixWorld=Df,oa.raycast(e,To);for(let a=0,o=To.length;a<o;a++){const c=To[a];c.instanceId=s,c.object=this,t.push(c)}To.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ku(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new eg(new Float32Array(r*this.count),r,this.count,Md,$n));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Fs extends Zn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hc=new L,fc=new L,Uf=new Fe,la=new ja,wo=new kn,yl=new L,Nf=new L;class Nd extends ft{constructor(e=new st,t=new Fs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)hc.fromBufferAttribute(t,r-1),fc.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=hc.distanceTo(fc);e.setAttribute("lineDistance",new Be(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(r),wo.radius+=s,e.ray.intersectsSphere(wo)===!1)return;Uf.copy(r).invert(),la.copy(e.ray).applyMatrix4(Uf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=l){const m=u.getX(_),y=u.getX(_+1),x=Ao(this,e,la,c,m,y);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(f),m=Ao(this,e,la,c,_,p);m&&t.push(m)}}else{const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=l){const m=Ao(this,e,la,c,_,_+1);m&&t.push(m)}if(this.isLineLoop){const _=Ao(this,e,la,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ao(i,e,t,n,r,s){const a=i.geometry.attributes.position;if(hc.fromBufferAttribute(a,r),fc.fromBufferAttribute(a,s),t.distanceSqToSegment(hc,fc,yl,Nf)>n)return;yl.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(yl);if(!(c<e.near||c>e.far))return{distance:c,point:Nf.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Of=new L,Ff=new L;class Sr extends Nd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Of.fromBufferAttribute(t,r),Ff.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Of.distanceTo(Ff);e.setAttribute("lineDistance",new Be(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Tc extends Nd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Od extends Zn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bf=new Fe,Hu=new ja,Co=new kn,Ro=new L;class Ya extends ft{constructor(e=new st,t=new Od){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(r),Co.radius+=s,e.ray.intersectsSphere(Co)===!1)return;Bf.copy(r).invert(),Hu.copy(e.ray).applyMatrix4(Bf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const h=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=h,_=f;g<_;g++){const p=l.getX(g);Ro.fromBufferAttribute(d,p),zf(Ro,p,c,r,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,_=f;g<_;g++)Ro.fromBufferAttribute(d,g),zf(Ro,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function zf(i,e,t,n,r,s,a){const o=Hu.distanceSqToPoint(i);if(o<t){const c=new L;Hu.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ui{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const u=n[r],h=n[r+1]-u,f=(a-u)/h;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=t||(a.isVector2?new X:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,r=[],s=[],a=[],o=new L,c=new Fe;for(let f=0;f<=e;f++){const g=f/e;r[f]=this.getTangentAt(g,new L)}s[0]=new L,a[0]=new L;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(It(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(It(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],f*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Fd extends ui{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new X){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class lb extends Fd{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Bd(){let i=0,e=0,t=0,n=0;function r(s,a,o,c){i=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,u,d){let h=(a-s)/l-(o-s)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+d)+(c-o)/d;h*=u,f*=u,r(a,o,h,f)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const Po=new L,Ml=new Bd,Sl=new Bd,bl=new Bd;class ng extends ui{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new L){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,u;this.closed||o>0?l=r[(o-1)%s]:(Po.subVectors(r[0],r[1]).add(r[0]),l=Po);const d=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Po.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Po),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Ml.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,_,p),Sl.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,_,p),bl.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,_,p)}else this.curveType==="catmullrom"&&(Ml.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),Sl.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),bl.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(Ml.calc(c),Sl.calc(c),bl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function kf(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,c=i*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*i+t}function ub(i,e){const t=1-i;return t*t*e}function db(i,e){return 2*(1-i)*i*e}function hb(i,e){return i*i*e}function Ea(i,e,t,n){return ub(i,e)+db(i,t)+hb(i,n)}function fb(i,e){const t=1-i;return t*t*t*e}function pb(i,e){const t=1-i;return 3*t*t*i*e}function mb(i,e){return 3*(1-i)*i*i*e}function gb(i,e){return i*i*i*e}function Ta(i,e,t,n,r){return fb(i,e)+pb(i,t)+mb(i,n)+gb(i,r)}class ig extends ui{constructor(e=new X,t=new X,n=new X,r=new X){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new X){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ta(e,r.x,s.x,a.x,o.x),Ta(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _b extends ui{constructor(e=new L,t=new L,n=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new L){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ta(e,r.x,s.x,a.x,o.x),Ta(e,r.y,s.y,a.y,o.y),Ta(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class rg extends ui{constructor(e=new X,t=new X){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new X){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vb extends ui{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sg extends ui{constructor(e=new X,t=new X,n=new X){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new X){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ea(e,r.x,s.x,a.x),Ea(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zd extends ui{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ea(e,r.x,s.x,a.x),Ea(e,r.y,s.y,a.y),Ea(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ag extends ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new X){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return n.set(kf(o,c.x,l.x,u.x,d.x),kf(o,c.y,l.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new X().fromArray(r))}return this}}var pc=Object.freeze({__proto__:null,ArcCurve:lb,CatmullRomCurve3:ng,CubicBezierCurve:ig,CubicBezierCurve3:_b,EllipseCurve:Fd,LineCurve:rg,LineCurve3:vb,QuadraticBezierCurve:sg,QuadraticBezierCurve3:zd,SplineCurve:ag});class xb extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new pc[r.type]().fromJSON(r))}return this}}class Hf extends xb{constructor(e){super(),this.type="Path",this.currentPoint=new X,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new rg(this.currentPoint.clone(),new X(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new sg(this.currentPoint.clone(),new X(e,t),new X(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new ig(this.currentPoint.clone(),new X(e,t),new X(n,r),new X(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ag(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,r,s,a,o,c),this}absellipse(e,t,n,r,s,a,o,c){const l=new Fd(e,t,n,r,s,a,o,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class kd extends st{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new L,u=new X;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const f=n+d/t*r;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Be(a,3)),this.setAttribute("normal",new Be(o,3)),this.setAttribute("uv",new Be(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kd(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Hd extends st{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],h=[],f=[];let g=0;const _=[],p=n/2;let m=0;y(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Be(d,3)),this.setAttribute("normal",new Be(h,3)),this.setAttribute("uv",new Be(f,2));function y(){const v=new L,A=new L;let E=0;const w=(t-e)/n;for(let C=0;C<=s;C++){const M=[],S=C/s,P=S*(t-e)+e;for(let U=0;U<=r;U++){const I=U/r,z=I*c+o,N=Math.sin(z),k=Math.cos(z);A.x=P*N,A.y=-S*n+p,A.z=P*k,d.push(A.x,A.y,A.z),v.set(N,w,k).normalize(),h.push(v.x,v.y,v.z),f.push(I,1-S),M.push(g++)}_.push(M)}for(let C=0;C<r;C++)for(let M=0;M<s;M++){const S=_[M][C],P=_[M+1][C],U=_[M+1][C+1],I=_[M][C+1];(e>0||M!==0)&&(u.push(S,P,I),E+=3),(t>0||M!==s-1)&&(u.push(P,U,I),E+=3)}l.addGroup(m,E,0),m+=E}function x(v){const A=g,E=new X,w=new L;let C=0;const M=v===!0?e:t,S=v===!0?1:-1;for(let U=1;U<=r;U++)d.push(0,p*S,0),h.push(0,S,0),f.push(.5,.5),g++;const P=g;for(let U=0;U<=r;U++){const z=U/r*c+o,N=Math.cos(z),k=Math.sin(z);w.x=M*k,w.y=p*S,w.z=M*N,d.push(w.x,w.y,w.z),h.push(0,S,0),E.x=N*.5+.5,E.y=k*.5*S+.5,f.push(E.x,E.y),g++}for(let U=0;U<r;U++){const I=A+U,z=P+U;v===!0?u.push(z,z+1,I):u.push(z+1,z,I),C+=3}l.addGroup(m,C,v===!0?1:2),m+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vd extends Hd{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Vd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gd extends st{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),l(n),u(),this.setAttribute("position",new Be(s,3)),this.setAttribute("normal",new Be(s.slice(),3)),this.setAttribute("uv",new Be(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new L,v=new L,A=new L;for(let E=0;E<t.length;E+=3)f(t[E+0],x),f(t[E+1],v),f(t[E+2],A),c(x,v,A,y)}function c(y,x,v,A){const E=A+1,w=[];for(let C=0;C<=E;C++){w[C]=[];const M=y.clone().lerp(v,C/E),S=x.clone().lerp(v,C/E),P=E-C;for(let U=0;U<=P;U++)U===0&&C===E?w[C][U]=M:w[C][U]=M.clone().lerp(S,U/P)}for(let C=0;C<E;C++)for(let M=0;M<2*(E-C)-1;M++){const S=Math.floor(M/2);M%2===0?(h(w[C][S+1]),h(w[C+1][S]),h(w[C][S])):(h(w[C][S+1]),h(w[C+1][S+1]),h(w[C+1][S]))}}function l(y){const x=new L;for(let v=0;v<s.length;v+=3)x.x=s[v+0],x.y=s[v+1],x.z=s[v+2],x.normalize().multiplyScalar(y),s[v+0]=x.x,s[v+1]=x.y,s[v+2]=x.z}function u(){const y=new L;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];const v=p(y)/2/Math.PI+.5,A=m(y)/Math.PI+.5;a.push(v,1-A)}g(),d()}function d(){for(let y=0;y<a.length;y+=6){const x=a[y+0],v=a[y+2],A=a[y+4],E=Math.max(x,v,A),w=Math.min(x,v,A);E>.9&&w<.1&&(x<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),A<.2&&(a[y+4]+=1))}}function h(y){s.push(y.x,y.y,y.z)}function f(y,x){const v=y*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function g(){const y=new L,x=new L,v=new L,A=new L,E=new X,w=new X,C=new X;for(let M=0,S=0;M<s.length;M+=9,S+=6){y.set(s[M+0],s[M+1],s[M+2]),x.set(s[M+3],s[M+4],s[M+5]),v.set(s[M+6],s[M+7],s[M+8]),E.set(a[S+0],a[S+1]),w.set(a[S+2],a[S+3]),C.set(a[S+4],a[S+5]),A.copy(y).add(x).add(v).divideScalar(3);const P=p(A);_(E,S+0,y,P),_(w,S+2,x,P),_(C,S+4,v,P)}}function _(y,x,v,A){A<0&&y.x===1&&(a[x]=y.x-1),v.x===0&&v.z===0&&(a[x]=A/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gd(e.vertices,e.indices,e.radius,e.details)}}const Lo=new L,Do=new L,El=new L,Io=new bn;class yb extends st{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(xs*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:p,c:m}=Io;if(_.fromBufferAttribute(o,l[0]),p.fromBufferAttribute(o,l[1]),m.fromBufferAttribute(o,l[2]),Io.getNormal(El),d[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,d[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,d[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let y=0;y<3;y++){const x=(y+1)%3,v=d[y],A=d[x],E=Io[u[y]],w=Io[u[x]],C=`${v}_${A}`,M=`${A}_${v}`;M in h&&h[M]?(El.dot(h[M].normal)<=s&&(f.push(E.x,E.y,E.z),f.push(w.x,w.y,w.z)),h[M]=null):C in h||(h[C]={index0:l[y],index1:l[x],normal:El.clone()})}}for(const g in h)if(h[g]){const{index0:_,index1:p}=h[g];Lo.fromBufferAttribute(o,_),Do.fromBufferAttribute(o,p),f.push(Lo.x,Lo.y,Lo.z),f.push(Do.x,Do.y,Do.z)}this.setAttribute("position",new Be(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ms extends Hf{constructor(e){super(e),this.uuid=Bn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Hf().fromJSON(r))}return this}}const Mb={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=og(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l,u,d,h,f;if(n&&(s=wb(i,e,s,t)),i.length>80*t){o=l=i[0],c=u=i[1];for(let g=t;g<r;g+=t)d=i[g],h=i[g+1],d<o&&(o=d),h<c&&(c=h),d>l&&(l=d),h>u&&(u=h);f=Math.max(l-o,u-c),f=f!==0?32767/f:0}return Ha(s,a,t,o,c,f,0),a}};function og(i,e,t,n,r){let s,a;if(r===Fb(i,e,t,n)>0)for(s=e;s<t;s+=n)a=Vf(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=Vf(s,i[s],i[s+1],a);return a&&wc(a,a.next)&&(Ga(a),a=a.next),a}function kr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(wc(t,t.next)||bt(t.prev,t,t.next)===0)){if(Ga(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ha(i,e,t,n,r,s,a){if(!i)return;!a&&s&&Lb(i,n,r,s);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?bb(i,n,r,s):Sb(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Ga(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Eb(kr(i),e,t),Ha(i,e,t,n,r,s,2)):a===2&&Tb(i,e,t,n,r,s):Ha(kr(i),e,t,n,r,s,1);break}}}function Sb(i){const e=i.prev,t=i,n=i.next;if(bt(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=r<s?r<a?r:a:s<a?s:a,d=o<c?o<l?o:l:c<l?c:l,h=r>s?r>a?r:a:s>a?s:a,f=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&ps(r,o,s,c,a,l,g.x,g.y)&&bt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function bb(i,e,t,n){const r=i.prev,s=i,a=i.next;if(bt(r,s,a)>=0)return!1;const o=r.x,c=s.x,l=a.x,u=r.y,d=s.y,h=a.y,f=o<c?o<l?o:l:c<l?c:l,g=u<d?u<h?u:h:d<h?d:h,_=o>c?o>l?o:l:c>l?c:l,p=u>d?u>h?u:h:d>h?d:h,m=Vu(f,g,e,t,n),y=Vu(_,p,e,t,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=m&&v&&v.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=p&&x!==r&&x!==a&&ps(o,u,c,d,l,h,x.x,x.y)&&bt(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=p&&v!==r&&v!==a&&ps(o,u,c,d,l,h,v.x,v.y)&&bt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=m;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=p&&x!==r&&x!==a&&ps(o,u,c,d,l,h,x.x,x.y)&&bt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=p&&v!==r&&v!==a&&ps(o,u,c,d,l,h,v.x,v.y)&&bt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Eb(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!wc(r,s)&&cg(r,n,n.next,s)&&Va(r,s)&&Va(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Ga(n),Ga(n.next),n=i=s),n=n.next}while(n!==i);return kr(n)}function Tb(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ub(a,o)){let c=lg(a,o);a=kr(a,a.next),c=kr(c,c.next),Ha(a,e,t,n,r,s,0),Ha(c,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function wb(i,e,t,n){const r=[];let s,a,o,c,l;for(s=0,a=e.length;s<a;s++)o=e[s]*n,c=s<a-1?e[s+1]*n:i.length,l=og(i,o,c,n,!1),l===l.next&&(l.steiner=!0),r.push(Ib(l));for(r.sort(Ab),s=0;s<r.length;s++)t=Cb(r[s],t);return t}function Ab(i,e){return i.x-e.x}function Cb(i,e){const t=Rb(i,e);if(!t)return e;const n=lg(t,i);return kr(n,n.next),kr(t,t.next)}function Rb(i,e){let t=e,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const h=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=s&&h>n&&(n=h,r=t.x<t.next.x?t:t.next,h===s))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,c=r.x,l=r.y;let u=1/0,d;t=r;do s>=t.x&&t.x>=c&&s!==t.x&&ps(a<l?s:n,a,c,l,a<l?n:s,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(s-t.x),Va(t,i)&&(d<u||d===u&&(t.x>r.x||t.x===r.x&&Pb(r,t)))&&(r=t,u=d)),t=t.next;while(t!==o);return r}function Pb(i,e){return bt(i.prev,i,e.prev)<0&&bt(e.next,i,i.next)<0}function Lb(i,e,t,n){let r=i;do r.z===0&&(r.z=Vu(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Db(r)}function Db(i){let e,t,n,r,s,a,o,c,l=1;do{for(t=i,i=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,o--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,l*=2}while(a>1);return i}function Vu(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Ib(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ps(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Ub(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Nb(i,e)&&(Va(i,e)&&Va(e,i)&&Ob(i,e)&&(bt(i.prev,i,e.prev)||bt(i,e.prev,e))||wc(i,e)&&bt(i.prev,i,i.next)>0&&bt(e.prev,e,e.next)>0)}function bt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function wc(i,e){return i.x===e.x&&i.y===e.y}function cg(i,e,t,n){const r=No(bt(i,e,t)),s=No(bt(i,e,n)),a=No(bt(t,n,i)),o=No(bt(t,n,e));return!!(r!==s&&a!==o||r===0&&Uo(i,t,e)||s===0&&Uo(i,n,e)||a===0&&Uo(t,i,n)||o===0&&Uo(t,e,n))}function Uo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function No(i){return i>0?1:i<0?-1:0}function Nb(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&cg(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Va(i,e){return bt(i.prev,i,i.next)<0?bt(i,e,i.next)>=0&&bt(i,i.prev,e)>=0:bt(i,e,i.prev)<0||bt(i,i.next,e)<0}function Ob(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function lg(i,e){const t=new Gu(i.i,i.x,i.y),n=new Gu(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Vf(i,e,t,n){const r=new Gu(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ga(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Gu(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Fb(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class rr{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return rr.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Gf(e),Wf(n,e);let a=e.length;t.forEach(Gf);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,Wf(n,t[c]);const o=Mb.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function Gf(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Wf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class mc extends st{constructor(e=new Ms([new X(.5,.5),new X(-.5,.5),new X(-.5,-.5),new X(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new Be(r,3)),this.setAttribute("uv",new Be(s,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Bb;let x,v=!1,A,E,w,C;m&&(x=m.getSpacedPoints(u),v=!0,h=!1,A=m.computeFrenetFrames(u,!1),E=new L,w=new L,C=new L),h||(p=0,f=0,g=0,_=0);const M=o.extractPoints(l);let S=M.shape;const P=M.holes;if(!rr.isClockWise(S)){S=S.reverse();for(let Q=0,se=P.length;Q<se;Q++){const D=P[Q];rr.isClockWise(D)&&(P[Q]=D.reverse())}}const I=rr.triangulateShape(S,P),z=S;for(let Q=0,se=P.length;Q<se;Q++){const D=P[Q];S=S.concat(D)}function N(Q,se,D){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(se,D)}const k=S.length,V=I.length;function G(Q,se,D){let Re,ne,ye;const ce=Q.x-se.x,Ue=Q.y-se.y,ve=D.x-Q.x,R=D.y-Q.y,b=ce*ce+Ue*Ue,H=ce*R-Ue*ve;if(Math.abs(H)>Number.EPSILON){const K=Math.sqrt(b),ee=Math.sqrt(ve*ve+R*R),Z=se.x-Ue/K,Ee=se.y+ce/K,de=D.x-R/ee,xe=D.y+ve/ee,Ze=((de-Z)*R-(xe-Ee)*ve)/(ce*R-Ue*ve);Re=Z+ce*Ze-Q.x,ne=Ee+Ue*Ze-Q.y;const re=Re*Re+ne*ne;if(re<=2)return new X(Re,ne);ye=Math.sqrt(re/2)}else{let K=!1;ce>Number.EPSILON?ve>Number.EPSILON&&(K=!0):ce<-Number.EPSILON?ve<-Number.EPSILON&&(K=!0):Math.sign(Ue)===Math.sign(R)&&(K=!0),K?(Re=-Ue,ne=ce,ye=Math.sqrt(b)):(Re=ce,ne=Ue,ye=Math.sqrt(b/2))}return new X(Re/ye,ne/ye)}const ie=[];for(let Q=0,se=z.length,D=se-1,Re=Q+1;Q<se;Q++,D++,Re++)D===se&&(D=0),Re===se&&(Re=0),ie[Q]=G(z[Q],z[D],z[Re]);const ue=[];let fe,Le=ie.concat();for(let Q=0,se=P.length;Q<se;Q++){const D=P[Q];fe=[];for(let Re=0,ne=D.length,ye=ne-1,ce=Re+1;Re<ne;Re++,ye++,ce++)ye===ne&&(ye=0),ce===ne&&(ce=0),fe[Re]=G(D[Re],D[ye],D[ce]);ue.push(fe),Le=Le.concat(fe)}for(let Q=0;Q<p;Q++){const se=Q/p,D=f*Math.cos(se*Math.PI/2),Re=g*Math.sin(se*Math.PI/2)+_;for(let ne=0,ye=z.length;ne<ye;ne++){const ce=N(z[ne],ie[ne],Re);oe(ce.x,ce.y,-D)}for(let ne=0,ye=P.length;ne<ye;ne++){const ce=P[ne];fe=ue[ne];for(let Ue=0,ve=ce.length;Ue<ve;Ue++){const R=N(ce[Ue],fe[Ue],Re);oe(R.x,R.y,-D)}}}const nt=g+_;for(let Q=0;Q<k;Q++){const se=h?N(S[Q],Le[Q],nt):S[Q];v?(w.copy(A.normals[0]).multiplyScalar(se.x),E.copy(A.binormals[0]).multiplyScalar(se.y),C.copy(x[0]).add(w).add(E),oe(C.x,C.y,C.z)):oe(se.x,se.y,0)}for(let Q=1;Q<=u;Q++)for(let se=0;se<k;se++){const D=h?N(S[se],Le[se],nt):S[se];v?(w.copy(A.normals[Q]).multiplyScalar(D.x),E.copy(A.binormals[Q]).multiplyScalar(D.y),C.copy(x[Q]).add(w).add(E),oe(C.x,C.y,C.z)):oe(D.x,D.y,d/u*Q)}for(let Q=p-1;Q>=0;Q--){const se=Q/p,D=f*Math.cos(se*Math.PI/2),Re=g*Math.sin(se*Math.PI/2)+_;for(let ne=0,ye=z.length;ne<ye;ne++){const ce=N(z[ne],ie[ne],Re);oe(ce.x,ce.y,d+D)}for(let ne=0,ye=P.length;ne<ye;ne++){const ce=P[ne];fe=ue[ne];for(let Ue=0,ve=ce.length;Ue<ve;Ue++){const R=N(ce[Ue],fe[Ue],Re);v?oe(R.x,R.y+x[u-1].y,x[u-1].x+D):oe(R.x,R.y,d+D)}}}$(),te();function $(){const Q=r.length/3;if(h){let se=0,D=k*se;for(let Re=0;Re<V;Re++){const ne=I[Re];De(ne[2]+D,ne[1]+D,ne[0]+D)}se=u+p*2,D=k*se;for(let Re=0;Re<V;Re++){const ne=I[Re];De(ne[0]+D,ne[1]+D,ne[2]+D)}}else{for(let se=0;se<V;se++){const D=I[se];De(D[2],D[1],D[0])}for(let se=0;se<V;se++){const D=I[se];De(D[0]+k*u,D[1]+k*u,D[2]+k*u)}}n.addGroup(Q,r.length/3-Q,0)}function te(){const Q=r.length/3;let se=0;be(z,se),se+=z.length;for(let D=0,Re=P.length;D<Re;D++){const ne=P[D];be(ne,se),se+=ne.length}n.addGroup(Q,r.length/3-Q,1)}function be(Q,se){let D=Q.length;for(;--D>=0;){const Re=D;let ne=D-1;ne<0&&(ne=Q.length-1);for(let ye=0,ce=u+p*2;ye<ce;ye++){const Ue=k*ye,ve=k*(ye+1),R=se+Re+Ue,b=se+ne+Ue,H=se+ne+ve,K=se+Re+ve;ke(R,b,H,K)}}}function oe(Q,se,D){c.push(Q),c.push(se),c.push(D)}function De(Q,se,D){Oe(Q),Oe(se),Oe(D);const Re=r.length/3,ne=y.generateTopUV(n,r,Re-3,Re-2,Re-1);it(ne[0]),it(ne[1]),it(ne[2])}function ke(Q,se,D,Re){Oe(Q),Oe(se),Oe(Re),Oe(se),Oe(D),Oe(Re);const ne=r.length/3,ye=y.generateSideWallUV(n,r,ne-6,ne-3,ne-2,ne-1);it(ye[0]),it(ye[1]),it(ye[3]),it(ye[1]),it(ye[2]),it(ye[3])}function Oe(Q){r.push(c[Q*3+0]),r.push(c[Q*3+1]),r.push(c[Q*3+2])}function it(Q){s.push(Q.x),s.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return zb(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new pc[r.type]().fromJSON(r)),new mc(n,e.options)}}const Bb={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[r*3],u=e[r*3+1];return[new X(s,a),new X(o,c),new X(l,u)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[r*3],f=e[r*3+1],g=e[r*3+2],_=e[s*3],p=e[s*3+1],m=e[s*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new X(a,1-c),new X(l,1-d),new X(h,1-g),new X(_,1-m)]:[new X(o,1-c),new X(u,1-d),new X(f,1-g),new X(p,1-m)]}};function zb(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Wd extends Gd{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Wd(e.radius,e.detail)}}class qd extends st{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],c=[],l=[],u=[];let d=e;const h=(t-e)/r,f=new L,g=new X;for(let _=0;_<=r;_++){for(let p=0;p<=n;p++){const m=s+p/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}d+=h}for(let _=0;_<r;_++){const p=_*(n+1);for(let m=0;m<n;m++){const y=m+p,x=y,v=y+n+1,A=y+n+2,E=y+1;o.push(x,v,E),o.push(v,A,E)}}this.setIndex(o),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(l,3)),this.setAttribute("uv",new Be(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ac extends st{constructor(e=new Ms([new X(0,.5),new X(-.5,-.5),new X(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Be(r,3)),this.setAttribute("normal",new Be(s,3)),this.setAttribute("uv",new Be(a,2));function l(u){const d=r.length/3,h=u.extractPoints(t);let f=h.shape;const g=h.holes;rr.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){const y=g[p];rr.isClockWise(y)===!0&&(g[p]=y.reverse())}const _=rr.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){const y=g[p];f=f.concat(y)}for(let p=0,m=f.length;p<m;p++){const y=f[p];r.push(y.x,y.y,0),s.push(0,0,1),a.push(y.x,y.y)}for(let p=0,m=_.length;p<m;p++){const y=_[p],x=y[0]+d,v=y[1]+d,A=y[2]+d;n.push(x,v,A),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return kb(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];n.push(a)}return new Ac(n,e.curveSegments)}}function kb(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class $a extends st{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],d=new L,h=new L,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const y=[],x=m/n;let v=0;m===0&&a===0?v=.5/t:m===n&&c===Math.PI&&(v=-.5/t);for(let A=0;A<=t;A++){const E=A/t;d.x=-e*Math.cos(r+E*s)*Math.sin(a+x*o),d.y=e*Math.cos(a+x*o),d.z=e*Math.sin(r+E*s)*Math.sin(a+x*o),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),p.push(E+v,1-x),y.push(l++)}u.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){const x=u[m][y+1],v=u[m][y],A=u[m+1][y],E=u[m+1][y+1];(m!==0||a>0)&&f.push(x,v,E),(m!==n-1||c<Math.PI)&&f.push(v,A,E)}this.setIndex(f),this.setAttribute("position",new Be(g,3)),this.setAttribute("normal",new Be(_,3)),this.setAttribute("uv",new Be(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qi extends st{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],l=[],u=new L,d=new L,h=new L;for(let f=0;f<=n;f++)for(let g=0;g<=r;g++){const _=g/r*s,p=f/n*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(_),d.y=(e+t*Math.cos(p))*Math.sin(_),d.z=t*Math.sin(p),o.push(d.x,d.y,d.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),h.subVectors(d,u).normalize(),c.push(h.x,h.y,h.z),l.push(g/r),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=r;g++){const _=(r+1)*f+g-1,p=(r+1)*(f-1)+g-1,m=(r+1)*(f-1)+g,y=(r+1)*f+g;a.push(_,p,y),a.push(p,m,y)}this.setIndex(a),this.setAttribute("position",new Be(o,3)),this.setAttribute("normal",new Be(c,3)),this.setAttribute("uv",new Be(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Cc extends st{constructor(e=new zd(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new L,c=new L,l=new X;let u=new L;const d=[],h=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Be(d,3)),this.setAttribute("normal",new Be(h,3)),this.setAttribute("uv",new Be(f,2));function _(){for(let x=0;x<t;x++)p(x);p(s===!1?t:0),y(),m()}function p(x){u=e.getPointAt(x/t,u);const v=a.normals[x],A=a.binormals[x];for(let E=0;E<=r;E++){const w=E/r*Math.PI*2,C=Math.sin(w),M=-Math.cos(w);c.x=M*v.x+C*A.x,c.y=M*v.y+C*A.y,c.z=M*v.z+C*A.z,c.normalize(),h.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,d.push(o.x,o.y,o.z)}}function m(){for(let x=1;x<=t;x++)for(let v=1;v<=r;v++){const A=(r+1)*(x-1)+(v-1),E=(r+1)*x+(v-1),w=(r+1)*x+v,C=(r+1)*(x-1)+v;g.push(A,E,C),g.push(E,w,C)}}function y(){for(let x=0;x<=t;x++)for(let v=0;v<=r;v++)l.x=x/t,l.y=v/r,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Cc(new pc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Hb extends st{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,r=new L,s=new L;if(e.index!==null){const a=e.attributes.position,o=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const d=c[l],h=d.start,f=d.count;for(let g=h,_=h+f;g<_;g+=3)for(let p=0;p<3;p++){const m=o.getX(g+p),y=o.getX(g+(p+1)%3);r.fromBufferAttribute(a,m),s.fromBufferAttribute(a,y),qf(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const u=3*o+l,d=3*o+(l+1)%3;r.fromBufferAttribute(a,u),s.fromBufferAttribute(a,d),qf(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Be(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function qf(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(r)===!0?!1:(t.add(n),t.add(r),!0)}class Ir extends Zn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Im,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xn extends Ir{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new X(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return It(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Oo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Vb(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Gb(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function jf(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)r[a++]=i[o+c]}return r}function ug(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}class Ka{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Wb extends Ka{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ah,endingEnd:Ah}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ch:s=e,o=2*t-n;break;case Rh:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ch:a=e,c=2*n-t;break;case Rh:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(r-t),_=g*g,p=_*g,m=-h*p+2*h*_-h*g,y=(1+h)*p+(-1.5-2*h)*_+(-.5+h)*g+1,x=(-1-f)*p+(1.5+f)*_+.5*g,v=f*p-f*_;for(let A=0;A!==o;++A)s[A]=m*a[u+A]+y*a[l+A]+x*a[c+A]+v*a[d+A];return s}}class qb extends Ka{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(r-t),d=1-u;for(let h=0;h!==o;++h)s[h]=a[l+h]*d+a[c+h]*u;return s}}class jb extends Ka{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class di{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Oo(t,this.TimeBufferType),this.values=Oo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Oo(e.times,Array),values:Oo(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new jb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ba:t=this.InterpolantFactoryMethodDiscrete;break;case za:t=this.InterpolantFactoryMethodLinear;break;case Gc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ba;case this.InterpolantFactoryMethodLinear:return za;case this.InterpolantFactoryMethodSmooth:return Gc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&Vb(r))for(let o=0,c=r.length;o!==c;++o){const l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Gc,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(r)c=!0;else{const d=o*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){const _=t[d+g];if(_!==t[h+g]||_!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const d=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=za;class Ys extends di{constructor(e,t,n){super(e,t,n)}}Ys.prototype.ValueTypeName="bool";Ys.prototype.ValueBufferType=Array;Ys.prototype.DefaultInterpolation=Ba;Ys.prototype.InterpolantFactoryMethodLinear=void 0;Ys.prototype.InterpolantFactoryMethodSmooth=void 0;class dg extends di{}dg.prototype.ValueTypeName="color";class Bs extends di{}Bs.prototype.ValueTypeName="number";class Yb extends Ka{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t);let l=e*o;for(let u=l+o;l!==u;l+=4)lr.slerpFlat(s,0,a,l-o,a,l,c);return s}}class zs extends di{InterpolantFactoryMethodLinear(e){return new Yb(this.times,this.values,this.getValueSize(),e)}}zs.prototype.ValueTypeName="quaternion";zs.prototype.InterpolantFactoryMethodSmooth=void 0;class $s extends di{constructor(e,t,n){super(e,t,n)}}$s.prototype.ValueTypeName="string";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=Ba;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;class ks extends di{}ks.prototype.ValueTypeName="vector";class $b{constructor(e="",t=-1,n=[],r=v_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Bn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Zb(n[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(di.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const u=Gb(c);c=jf(c,1,u),l=jf(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Bs(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(s);if(u&&u.length>1){const d=u[1];let h=r[d];h||(r[d]=h=[]),h.push(l)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,f,g,_){if(f.length!==0){const p=[],m=[];ug(f,p,m,g),p.length!==0&&_.push(new d(h,p,m))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let d=0;d<l.length;d++){const h=l[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)f[h[g].morphTargets[_]]=-1;for(const _ in f){const p=[],m=[];for(let y=0;y!==h[g].morphTargets.length;++y){const x=h[g];p.push(x.time),m.push(x.morphTarget===_?1:0)}r.push(new Bs(".morphTargetInfluence["+_+"]",p,m))}c=f.length*a}else{const f=".bones["+t[d].name+"]";n(ks,f+".position",h,"pos",r),n(zs,f+".quaternion",h,"rot",r),n(ks,f+".scale",h,"scl",r)}}return r.length===0?null:new this(s,c,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Kb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Bs;case"vector":case"vector2":case"vector3":case"vector4":return ks;case"color":return dg;case"quaternion":return zs;case"bool":case"boolean":return Ys;case"string":return $s}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Zb(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Kb(i.type);if(i.times===void 0){const t=[],n=[];ug(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Xi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Jb{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){const f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const Qb=new Jb;class Ks{constructor(e){this.manager=e!==void 0?e:Qb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ks.DEFAULT_MATERIAL_NAME="__DEFAULT";const xi={};class Xb extends Error{constructor(e,t){super(e),this.response=t}}class hg extends Ks{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Xi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(xi[e]!==void 0){xi[e].push({onLoad:t,onProgress:n,onError:r});return}xi[e]=[],xi[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=xi[e],d=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=h?parseInt(h):0,g=f!==0;let _=0;const p=new ReadableStream({start(m){y();function y(){d.read().then(({done:x,value:v})=>{if(x)m.close();else{_+=v.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let E=0,w=u.length;E<w;E++){const C=u[E];C.onProgress&&C.onProgress(A)}m.enqueue(v),y()}},x=>{m.error(x)})}}});return new Response(p)}else throw new Xb(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Xi.add(e,l);const u=xi[e];delete xi[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=xi[e];if(u===void 0)throw this.manager.itemError(e),l;delete xi[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class eE extends Ks{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Xi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=ka("img");function c(){u(),Xi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class fg extends Ks{constructor(e){super(e)}load(e,t,n,r){const s=new zt,a=new eE(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Rc extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class tE extends Rc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Tl=new Fe,Yf=new L,$f=new L;class jd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new X(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rd,this._frameExtents=new X(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Yf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yf),$f.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($f),t.updateMatrixWorld(),Tl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class nE extends jd{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ns*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class iE extends Rc{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new nE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Kf=new Fe,ua=new L,wl=new L;class rE extends jd{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new X(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ua.setFromMatrixPosition(e.matrixWorld),n.position.copy(ua),wl.copy(n.position),wl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(wl),n.updateMatrixWorld(),r.makeTranslation(-ua.x,-ua.y,-ua.z),Kf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kf)}}class sE extends Rc{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new rE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class aE extends jd{constructor(){super(new Pd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wu extends Rc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new aE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wa{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class oE extends st{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class cE extends Ks{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Xi.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{r&&r(l)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Xi.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),Xi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Xi.add(e,c),s.manager.itemStart(e)}}const Yd="\\[\\]\\.:\\/",lE=new RegExp("["+Yd+"]","g"),$d="[^"+Yd+"]",uE="[^"+Yd.replace("\\.","")+"]",dE=/((?:WC+[\/:])*)/.source.replace("WC",$d),hE=/(WCOD+)?/.source.replace("WCOD",uE),fE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$d),pE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$d),mE=new RegExp("^"+dE+hE+fE+pE+"$"),gE=["material","materials","bones","map"];class _E{constructor(e,t,n){const r=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ut{constructor(e,t,n){this.path=t,this.parsedPath=n||ut.parseTrackName(t),this.node=ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ut.Composite(e,t,n):new ut(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lE,"")}static parseTrackName(e){const t=mE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);gE.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[r];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ut.Composite=_E;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class qu extends Id{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const Zf=new Fe;class vE{constructor(e,t,n=0,r=1/0){this.ray=new ja(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ad,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zf),this}intersectObject(e,t=!0,n=[]){return ju(e,this,n,t),n.sort(Jf),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)ju(e[r],this,n,t);return n.sort(Jf),n}}function Jf(i,e){return i.distance-e.distance}function ju(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)ju(s[a],e,t,!0)}}const Qf=new L,Fo=new L;class xE{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Qf.subVectors(e,this.start),Fo.subVectors(this.end,this.start);const n=Fo.dot(Fo);let s=Fo.dot(Qf)/n;return t&&(s=It(s,0,1)),s}closestPointToPoint(e,t,n){const r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_d}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_d);function Xf(i,e){if(e===x_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ou||e===Dm){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===Ou)for(let a=1;a<=n;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class yE extends Ks{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new TE(t)}),this.register(function(t){return new wE(t)}),this.register(function(t){return new NE(t)}),this.register(function(t){return new OE(t)}),this.register(function(t){return new FE(t)}),this.register(function(t){return new CE(t)}),this.register(function(t){return new RE(t)}),this.register(function(t){return new PE(t)}),this.register(function(t){return new LE(t)}),this.register(function(t){return new EE(t)}),this.register(function(t){return new DE(t)}),this.register(function(t){return new AE(t)}),this.register(function(t){return new UE(t)}),this.register(function(t){return new IE(t)}),this.register(function(t){return new SE(t)}),this.register(function(t){return new BE(t)}),this.register(function(t){return new zE(t)})}load(e,t,n,r){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=wa.extractUrlBase(e);a=wa.resolveURL(l,this.path)}else a=wa.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new hg(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===pg){try{a[Ke.KHR_BINARY_GLTF]=new kE(e)}catch(d){r&&r(d);return}s=JSON.parse(a[Ke.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new XE(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const d=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(d){case Ke.KHR_MATERIALS_UNLIT:a[d]=new bE;break;case Ke.KHR_DRACO_MESH_COMPRESSION:a[d]=new HE(s,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:a[d]=new VE;break;case Ke.KHR_MESH_QUANTIZATION:a[d]=new GE;break;default:h.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function ME(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class SE{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new Te(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],cn);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Wu(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new sE(u),l.distance=d;break;case"spot":l=new iE(u),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,bi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class bE{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return Jt}extendParams(e,t,n){const r=[];e.color=new Te(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],cn),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Ft))}return Promise.all(r)}}class EE{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class TE{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new X(o,o)}return Promise.all(s)}}class wE{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class AE{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class CE{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],cn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ft)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class RE{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class PE{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(o[0],o[1],o[2],cn),Promise.all(s)}}class LE{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class DE{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(o[0],o[1],o[2],cn),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ft)),Promise.all(s)}}class IE{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class UE{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class NE{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class OE{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class FE{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class BE{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=r.byteOffset||0,l=r.byteLength||0,u=r.count,d=r.byteStride,h=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,d,h,r.mode,r.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*d);return a.decodeGltfBuffer(new Uint8Array(f),u,d,h,r.mode,r.filter),f})})}else return null}}class zE{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const l of r.primitives)if(l.mode!==Un.TRIANGLES&&l.mode!==Un.TRIANGLE_STRIP&&l.mode!==Un.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),d=u.isGroup?u.children:[u],h=l[0].count,f=[];for(const g of d){const _=new Fe,p=new L,m=new lr,y=new L(1,1,1),x=new tg(g.geometry,g.material,h);for(let v=0;v<h;v++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,v),c.SCALE&&y.fromBufferAttribute(c.SCALE,v),x.setMatrixAt(v,_.compose(p,m,y));for(const v in c)if(v==="_COLOR_0"){const A=c[v];x.instanceColor=new ku(A.array,A.itemSize,A.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);ft.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const pg="glTF",da=12,ep={JSON:1313821514,BIN:5130562};class kE{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,da),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==pg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-da,s=new DataView(e,da);let a=0;for(;a<r;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===ep.JSON){const l=new Uint8Array(e,da+a,o);this.content=n.decode(l)}else if(c===ep.BIN){const l=da+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class HE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const d=Yu[u]||u.toLowerCase();o[d]=a[u]}for(const u in e.attributes){const d=Yu[u]||u.toLowerCase();if(a[u]!==void 0){const h=n.accessors[e.attributes[u]],f=Ss[h.componentType];l[d]=f.name,c[d]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,h){r.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],p=c[g];p!==void 0&&(_.normalized=p)}d(f)},o,l,cn,h)})})}}class VE{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class GE{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}}class mg extends Ka{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=r-t,d=(n-t)/u,h=d*d,f=h*d,g=e*l,_=g-l,p=-2*f+3*h,m=f-h,y=1-p,x=m-h+d;for(let v=0;v!==o;v++){const A=a[_+v+o],E=a[_+v+c]*u,w=a[g+v+o],C=a[g+v]*u;s[v]=y*A+x*E+p*w+m*C}return s}}const WE=new lr;class qE extends mg{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return WE.fromArray(s).normalize().toArray(s),s}}const Un={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ss={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},tp={9728:an,9729:Tn,9984:Sm,9985:$o,9986:ga,9987:Ti},np={33071:Ji,33648:uc,10497:Ds},Al={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Yu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Hi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},jE={CUBICSPLINE:void 0,LINEAR:za,STEP:Ba},Cl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function YE(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ir({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Pi})),i.DefaultMaterial}function xr(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function bi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function $E(i,e,t){let n=!1,r=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];if(n){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;a.push(h)}if(r){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;o.push(h)}if(s){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;c.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],d=l[1],h=l[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=d),s&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function KE(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ZE(i){let e;const t=i.extensions&&i.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Rl(t.attributes):e=i.indices+":"+Rl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Rl(i.targets[n]);return e}function Rl(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function $u(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function JE(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const QE=new Fe;class XE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ME,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);r=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&a<98?this.textureLoader=new fg(this.options.manager):this.textureLoader=new cE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new hg(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return xr(s,o,r),bi(o,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())s(u,o.children[l])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){n.load(wa.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=Al[r.type],o=Ss[r.componentType],c=r.normalized===!0,l=new o(r.count*a);return Promise.resolve(new At(l,a,c))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=Al[r.type],l=Ss[r.componentType],u=l.BYTES_PER_ELEMENT,d=u*c,h=r.byteOffset||0,f=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,p;if(f&&f!==d){const m=Math.floor(h/f),y="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count;let x=t.cache.get(y);x||(_=new l(o,m*f,r.count*f/u),x=new Id(_,f/u),t.cache.add(y,x)),p=new Kn(x,c,h%f/u,g)}else o===null?_=new l(r.count*c):_=new l(o,h,r.count*c),p=new At(_,c,g);if(r.sparse!==void 0){const m=Al.SCALAR,y=Ss[r.sparse.indices.componentType],x=r.sparse.indices.byteOffset||0,v=r.sparse.values.byteOffset||0,A=new y(a[1],x,r.sparse.count*m),E=new l(a[2],v,r.sparse.count*c);o!==null&&(p=new At(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let w=0,C=A.length;w<C;w++){const M=A[w];if(p.setX(M,E[w*c]),c>=2&&p.setY(M,E[w*c+1]),c>=3&&p.setZ(M,E[w*c+2]),c>=4&&p.setW(M,E[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const r=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const h=(s.samplers||{})[a.sampler]||{};return u.magFilter=tp[h.magFilter]||Tn,u.minFilter=tp[h.minFilter]||Ti,u.wrapS=np[h.wrapS]||Ds,u.wrapT=np[h.wrapT]||Ds,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==an&&u.minFilter!==Tn,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=r.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;const h=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(h),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(d){return new Promise(function(h,f){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){const p=new zt(_);p.needsUpdate=!0,h(p)}),t.load(wa.resolveURL(d,s.path),g,void 0,f)})}).then(function(d){return l===!0&&o.revokeObjectURL(c),bi(d,a),d.userData.mimeType=a.mimeType||JE(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Ke.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Od,Zn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Fs,Zn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ir}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let a;const o={},c=s.extensions||{},l=[];if(c[Ke.KHR_MATERIALS_UNLIT]){const d=r[Ke.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,s,t))}else{const d=s.pbrMetallicRoughness||{};if(o.color=new Te(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],cn),o.opacity=h[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,Ft)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=dn);const u=s.alphaMode||Cl.OPAQUE;if(u===Cl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Cl.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Jt&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new X(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;o.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&a!==Jt&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Jt){const d=s.emissiveFactor;o.emissive=new Te().setRGB(d[0],d[1],d[2],cn)}return s.emissiveTexture!==void 0&&a!==Jt&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Ft)),Promise.all(l).then(function(){const d=new a(o);return s.name&&(d.name=s.name),bi(d,s),t.associations.set(d,{materials:e}),s.extensions&&xr(r,d,s),d})}createUniqueName(e){const t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return ip(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=ZE(l),d=r[u];if(d)a.push(d.promise);else{let h;l.extensions&&l.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?h=s(l):h=ip(new st,l,t),r[u]={primitive:l,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?YE(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],d=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],p=a[f];let m;const y=l[f];if(p.mode===Un.TRIANGLES||p.mode===Un.TRIANGLE_STRIP||p.mode===Un.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new ab(_,y):new Xe(_,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Un.TRIANGLE_STRIP?m.geometry=Xf(m.geometry,Dm):p.mode===Un.TRIANGLE_FAN&&(m.geometry=Xf(m.geometry,Ou));else if(p.mode===Un.LINES)m=new Sr(_,y);else if(p.mode===Un.LINE_STRIP)m=new Nd(_,y);else if(p.mode===Un.LINE_LOOP)m=new Tc(_,y);else if(p.mode===Un.POINTS)m=new Ya(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&KE(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),bi(m,s),p.extensions&&xr(r,m,p),t.assignFinalMaterial(m),d.push(m)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return s.extensions&&xr(r,d[0],s),d[0];const h=new Mt;s.extensions&&xr(r,h,s),t.associations.set(h,{meshes:e});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new nn(wd.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Pd(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),bi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),a=r,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const d=a[l];if(d){o.push(d);const h=new Fe;s!==null&&h.fromArray(s.array,l*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ud(o,c)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let d=0,h=r.channels.length;d<h;d++){const f=r.channels[d],g=r.samplers[f.sampler],_=f.target,p=_.node,m=r.parameters!==void 0?r.parameters[g.input]:g.input,y=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",y)),l.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(d){const h=d[0],f=d[1],g=d[2],_=d[3],p=d[4],m=[];for(let y=0,x=h.length;y<x;y++){const v=h[y],A=f[y],E=g[y],w=_[y],C=p[y];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const M=n._createAnimationTracks(v,A,E,w,C);if(M)for(let S=0;S<M.length;S++)m.push(M[S])}return new $b(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=r.weights.length;c<l;c++)o.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){const u=l[0],d=l[1],h=l[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,QE)});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(s.isBone===!0?u=new Xm:l.length>1?u=new Mt:l.length===1?u=l[0]:u=new ft,u!==l[0])for(let d=0,h=l.length;d<h;d++)u.add(l[d]);if(s.name&&(u.userData.name=s.name,u.name=a),bi(u,s),s.extensions&&xr(n,u,s),s.matrix!==void 0){const d=new Fe;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new Mt;n.name&&(s.name=r.createUniqueName(n.name)),bi(s,n),n.extensions&&xr(t,s,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(r.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,d=c.length;u<d;u++)s.add(c[u]);const l=u=>{const d=new Map;for(const[h,f]of r.associations)(h instanceof Zn||h instanceof zt)&&d.set(h,f);return u.traverse(h=>{const f=r.associations.get(h);f!=null&&d.set(h,f)}),d};return r.associations=l(s),s})}_createAnimationTracks(e,t,n,r,s){const a=[],o=e.name?e.name:e.uuid,c=[];Hi[s.path]===Hi.weights?e.traverse(function(h){h.morphTargetInfluences&&c.push(h.name?h.name:h.uuid)}):c.push(o);let l;switch(Hi[s.path]){case Hi.weights:l=Bs;break;case Hi.rotation:l=zs;break;case Hi.position:case Hi.scale:l=ks;break;default:switch(n.itemSize){case 1:l=Bs;break;case 2:case 3:default:l=ks;break}break}const u=r.interpolation!==void 0?jE[r.interpolation]:za,d=this._getArrayFromAccessor(n);for(let h=0,f=c.length;h<f;h++){const g=new l(c[h]+"."+Hi[s.path],t.array,d,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=$u(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof zs?qE:mg;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function eT(i,e,t){const n=e.attributes,r=new Pn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(r.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),o.normalized){const u=$u(Ss[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new L,c=new L;for(let l=0,u=s.length;l<u;l++){const d=s[l];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],f=h.min,g=h.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),h.normalized){const _=$u(Ss[h.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;const a=new kn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function ip(i,e,t){const n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=Yu[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return Qe.workingColorSpace!==cn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),bi(i,e),eT(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?$E(i,e.targets,t):i})}const rp=new Pn,Bo=new L;class gg extends oE{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Be(e,3)),this.setAttribute("uv",new Be(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new qu(t,6,1);return this.setAttribute("instanceStart",new Kn(n,3,0)),this.setAttribute("instanceEnd",new Kn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new qu(t,6,1);return this.setAttribute("instanceColorStart",new Kn(n,3,0)),this.setAttribute("instanceColorEnd",new Kn(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Hb(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),rp.setFromBufferAttribute(t),this.boundingBox.union(rp))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Bo.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Bo)),Bo.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Bo));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}le.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new X(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};un.line={uniforms:Cd.merge([le.common,le.fog,le.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class _g extends Qn{static get type(){return"LineMaterial"}constructor(e){super({uniforms:Cd.clone(un.line.uniforms),vertexShader:un.line.vertexShader,fragmentShader:un.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Pl=new Je,sp=new L,ap=new L,Vt=new Je,Gt=new Je,ti=new Je,Ll=new L,Dl=new Fe,qt=new xE,op=new L,zo=new Pn,ko=new kn,ni=new Je;let si,Ur;function cp(i,e,t){return ni.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),ni.multiplyScalar(1/ni.w),ni.x=Ur/t.width,ni.y=Ur/t.height,ni.applyMatrix4(i.projectionMatrixInverse),ni.multiplyScalar(1/ni.w),Math.abs(Math.max(ni.x,ni.y))}function tT(i,e){const t=i.matrixWorld,n=i.geometry,r=n.attributes.instanceStart,s=n.attributes.instanceEnd,a=Math.min(n.instanceCount,r.count);for(let o=0,c=a;o<c;o++){qt.start.fromBufferAttribute(r,o),qt.end.fromBufferAttribute(s,o),qt.applyMatrix4(t);const l=new L,u=new L;si.distanceSqToSegment(qt.start,qt.end,u,l),u.distanceTo(l)<Ur*.5&&e.push({point:u,pointOnLine:l,distance:si.origin.distanceTo(u),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function nT(i,e,t){const n=e.projectionMatrix,s=i.material.resolution,a=i.matrixWorld,o=i.geometry,c=o.attributes.instanceStart,l=o.attributes.instanceEnd,u=Math.min(o.instanceCount,c.count),d=-e.near;si.at(1,ti),ti.w=1,ti.applyMatrix4(e.matrixWorldInverse),ti.applyMatrix4(n),ti.multiplyScalar(1/ti.w),ti.x*=s.x/2,ti.y*=s.y/2,ti.z=0,Ll.copy(ti),Dl.multiplyMatrices(e.matrixWorldInverse,a);for(let h=0,f=u;h<f;h++){if(Vt.fromBufferAttribute(c,h),Gt.fromBufferAttribute(l,h),Vt.w=1,Gt.w=1,Vt.applyMatrix4(Dl),Gt.applyMatrix4(Dl),Vt.z>d&&Gt.z>d)continue;if(Vt.z>d){const x=Vt.z-Gt.z,v=(Vt.z-d)/x;Vt.lerp(Gt,v)}else if(Gt.z>d){const x=Gt.z-Vt.z,v=(Gt.z-d)/x;Gt.lerp(Vt,v)}Vt.applyMatrix4(n),Gt.applyMatrix4(n),Vt.multiplyScalar(1/Vt.w),Gt.multiplyScalar(1/Gt.w),Vt.x*=s.x/2,Vt.y*=s.y/2,Gt.x*=s.x/2,Gt.y*=s.y/2,qt.start.copy(Vt),qt.start.z=0,qt.end.copy(Gt),qt.end.z=0;const _=qt.closestPointToPointParameter(Ll,!0);qt.at(_,op);const p=wd.lerp(Vt.z,Gt.z,_),m=p>=-1&&p<=1,y=Ll.distanceTo(op)<Ur*.5;if(m&&y){qt.start.fromBufferAttribute(c,h),qt.end.fromBufferAttribute(l,h),qt.start.applyMatrix4(a),qt.end.applyMatrix4(a);const x=new L,v=new L;si.distanceSqToSegment(qt.start,qt.end,v,x),t.push({point:v,pointOnLine:x,distance:si.origin.distanceTo(v),object:i,face:null,faceIndex:h,uv:null,uv1:null})}}}class iT extends Xe{constructor(e=new gg,t=new _g({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let a=0,o=0,c=t.count;a<c;a++,o+=2)sp.fromBufferAttribute(t,a),ap.fromBufferAttribute(n,a),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+sp.distanceTo(ap);const s=new qu(r,2,1);return e.setAttribute("instanceDistanceStart",new Kn(s,1,0)),e.setAttribute("instanceDistanceEnd",new Kn(s,1,1)),this}raycast(e,t){const n=this.material.worldUnits,r=e.camera;r===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;si=e.ray;const a=this.matrixWorld,o=this.geometry,c=this.material;Ur=c.linewidth+s,o.boundingSphere===null&&o.computeBoundingSphere(),ko.copy(o.boundingSphere).applyMatrix4(a);let l;if(n)l=Ur*.5;else{const d=Math.max(r.near,ko.distanceToPoint(si.origin));l=cp(r,d,c.resolution)}if(ko.radius+=l,si.intersectsSphere(ko)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),zo.copy(o.boundingBox).applyMatrix4(a);let u;if(n)u=Ur*.5;else{const d=Math.max(r.near,zo.distanceToPoint(si.origin));u=cp(r,d,c.resolution)}zo.expandByScalar(u),si.intersectsBox(zo)!==!1&&(n?tT(this,t):nT(this,r,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Pl),this.material.uniforms.resolution.value.set(Pl.z,Pl.w))}}const j={capas:{},et:new Map,t:0,stop:!0},gc="./",Ve={lima:"#C7FF27",marfil:"#F5F3EB",lavanda:"#A99BCB",agua:"#6FA3AF",arcilla:"#B58C78",coral:"#E36C4B",petroleo:"#294E59"},Za={A:Ve.arcilla,B:Ve.lavanda,C:Ve.agua,D:Ve.coral,E:Ve.marfil,F:Ve.lima},Kd={A:"Dependencia de alimentos externos",B:"Crecimiento poblacional",C:"Valorización del suelo",D:"Especulación inmobiliaria",E:"Gestión de residuos sólidos",F:"Centralización de servicios"},Ku={corabastos:[-715,-168],kennedy:[-926,1118],flores:[-451,-469],bavaria:[2119,-1067],mariapaz:[-533,-385],patio:[-2033,-1239],tintal:[-126,-3059],centro:[0,0]},rT=i=>fetch(gc+i).then(e=>e.json());function Pt(i,e,{visible:t=!1}={}){return e.visible=t,e.userData.v=t?1:0,e.traverse(n=>{(n.material?Array.isArray(n.material)?n.material:[n.material]:[]).forEach(s=>{s.userData.op0===void 0&&(s.userData.op0=s.opacity??1),s.transparent=!0})}),j.scene.add(e),j.capas[i]=e,e}function lp(i,e){i.userData.v=e,i.visible=e>.002,i.traverse(t=>{(t.material?Array.isArray(t.material)?t.material:[t.material]:[]).forEach(r=>{var s;(s=r.uniforms)!=null&&s.uOp?r.uniforms.uOp.value=e:r.opacity=r.userData.op0*e})})}function jn(i,e=!0,t=.8){const n=j.capas[i];if(!n)return;const r={v:n.userData.v??0};if(Ie.killTweensOf(n.userData),t<=0)return lp(n,e?1:0);Ie.to(r,{v:e?1:0,duration:t,ease:e?"expo.out":"expo.in",onUpdate:()=>lp(n,r.v)})}const Zd=i=>{var e;return(e=j.capas[i])==null?void 0:e.userData.u};function sT(i){const e=new Zm;e.background=new Te("#08090C");const t=(s,a,o,c,l)=>{const u=new Xe(new qs(1,1),new Jt({color:new Te(s).multiplyScalar(a),side:dn}));u.position.set(...o),u.rotation.set(...c),u.scale.set(l[0],l[1],1),e.add(u)};t(Ve.marfil,6,[0,6,-9],[0,0,0],[12,2]),t(Ve.marfil,3,[0,9,0],[Math.PI/2,0,0],[10,10]),t(Ve.lavanda,2.4,[-8,1,3],[0,Math.PI/2,0],[10,3]),t(Ve.lima,1.8,[8,-2,2],[0,-Math.PI/2,0],[8,1.5]),t(Ve.marfil,2.6,[0,0,10],[0,Math.PI,0],[20,1]),t(Ve.coral,1.2,[0,-6,6],[Math.PI/2,0,0],[5,5]);const n=new Bu(i),r=n.fromScene(e,.02).texture;return n.dispose(),r}const Hs=(i="#f1f2f5")=>new Xn({color:i,metalness:1,roughness:.12,iridescence:.55,iridescenceIOR:1.4,iridescenceThicknessRange:[180,520],clearcoat:1,clearcoatRoughness:.05,envMapIntensity:2}),Nr=()=>{const i=Hs(Ve.lima);return i.metalness=.75,i.emissive=new Te(Ve.lima),i.emissiveIntensity=.3,i};function Jd(i,e=28){return new Qn({transparent:!0,depthWrite:!1,blending:lc,uniforms:{uOp:{value:0},uAp:{value:0},uT:{value:0},uC:{value:new Te(i)},uS:{value:e},uPix:{value:1}},vertexShader:`attribute float aR; attribute float aK; uniform float uAp, uT, uS, uPix; varying float vA; varying float vK;
      void main(){ float a = clamp((uAp*1.25 - aR)*6.0, 0.0, 1.0); vA = a; vK = aK;
        vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv;
        float pul = 1.0 + 0.25*sin(uT*2.0 + aR*40.0);
        gl_PointSize = uS * aK * a * pul * uPix * (900.0 / -mv.z); }`,fragmentShader:`uniform vec3 uC; uniform float uOp; varying float vA; varying float vK;
      void main(){ vec2 p = gl_PointCoord - .5; float d = length(p); if(d>.5) discard;
        float nucleo = smoothstep(.5, .12, d); float aro = smoothstep(.5,.42,d) - smoothstep(.42,.34,d);
        gl_FragColor = vec4(uC * (nucleo*0.9 + aro*0.8) + vec3(nucleo*nucleo*0.4), (nucleo*0.85 + aro) * uOp * vA); }`})}function ha(i,e=260,t=140,n=520){return new Qn({transparent:!0,depthWrite:!1,blending:lc,uniforms:{uOp:{value:0},uT:{value:0},uDib:{value:1},uC:{value:new Te(i)},uV:{value:e},uL:{value:t},uH:{value:n},uBase:{value:.18}},vertexShader:"attribute float aD; attribute float aDT; varying float vD; varying float vDT; void main(){ vD = aD; vDT = aDT; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform float uOp, uT, uDib, uV, uL, uH, uBase; uniform vec3 uC; varying float vD; varying float vDT;
      void main(){ if (vD > uDib * vDT) discard; float ph = mod(vD - uT*uV, uL + uH); float dash = ph < uL ? 1.0 : 0.0;
        gl_FragColor = vec4(uC, (uBase + dash*0.95) * uOp); }`})}function fa(i,e=3){const t=[],n=[],r=[];i.forEach(a=>{let o=0;const c=[];for(let l=0;l+3<a.length;l+=2){const u=Math.hypot(a[l+2]-a[l],a[l+3]-a[l+1]);c.push([a[l],a[l+1],a[l+2],a[l+3],o,o+u]),o+=u}c.forEach(([l,u,d,h,f,g])=>{t.push(l,e,u,d,e,h),n.push(f,g),r.push(o,o)})});const s=new st;return s.setAttribute("position",new Be(t,3)),s.setAttribute("aD",new Be(n,1)),s.setAttribute("aDT",new Be(r,1)),s}function aT(i,e,t,n=8){const r=[],s=[],a=[];i.forEach(l=>{r.push(l[0],n+(l[2]||1)*4,l[1]),s.push(Math.random()),a.push(Math.min(3.5,Math.sqrt(l[2]||1)))});const o=new st;o.setAttribute("position",new Be(r,3)),o.setAttribute("aR",new Be(s,1)),o.setAttribute("aK",new Be(a,1));const c=new Ya(o,Jd(e,t));return c.frustumCulled=!1,c}async function oT(i){const e=new ib({canvas:i,antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(1.5,devicePixelRatio)),e.setSize(innerWidth,innerHeight,!1);const t=()=>{r.setViewOffset(innerWidth,innerHeight,-innerWidth*.11,0,innerWidth,innerHeight)};e.toneMapping=ym,e.toneMappingExposure=1.1;const n=new Zm;n.background=new Te("#08090C"),n.fog=new Dd("#08090C",85e-6),n.environment=sT(e);const r=new nn(36,innerWidth/innerHeight,5,6e4);Object.assign(j,{r:e,scene:n,cam:r,obj:new L,pos:new L(0,9e3,9e3)}),n.add(new tE("#F5F3EB","#2a2c27",1.1));const s=new Wu("#F5F3EB",1.6);s.position.set(-3e3,6e3,2500),n.add(s);const a=new Wu(Ve.lavanda,.9);a.position.set(4e3,1500,-4e3),n.add(a),addEventListener("resize",()=>{e.setSize(innerWidth,innerHeight,!1),r.aspect=innerWidth/innerHeight,t()}),t();const o=new Xe(new Qi(26e3,60,8,200),new Jt({color:Ve.lima,transparent:!0,opacity:.35,fog:!1}));o.rotation.x=Math.PI/2.2,o.position.set(0,-9e3,-24e3),n.add(o),j.arco=o;const c=new st,l=[];for(let N=0;N<1500;N++)l.push((Math.random()-.5)*16e3,Math.random()*5e3,(Math.random()-.5)*16e3);c.setAttribute("position",new Be(l,3)),j.polvo=new Ya(c,new Od({color:Ve.marfil,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:.35,depthWrite:!1})),n.add(j.polvo);const[u,d,h,f,g,_,p]=await Promise.all(["datos/limite.json","datos/vias.json","datos/agua.json","datos/upz.json","datos/lugares.json","datos/contexto.json","datos/pot.json"].map(rT));j.datos={lim:u,vias:d,agua:h,upz:f,lug:g,ctx:_,pot:p};const m=new Ms(u.pts.map(([N,k])=>new X(N,-k))),y=new mc(m,{depth:60,bevelEnabled:!1});y.rotateX(-Math.PI/2),y.translate(0,-60,0);const x=new Mt;x.add(new Xe(y,new Ir({color:"#141613",roughness:.9,metalness:.1})));const v=new Tc(new st().setFromPoints(u.pts.map(([N,k])=>new L(N,2,k))),new Fs({color:Ve.lima,transparent:!0,opacity:.9}));x.add(v),Pt("losa",x);const A=fa(d.vias.map(N=>N.slice(1)),2.5),E=ha(Ve.marfil,0,0,1);E.uniforms.uBase.value=.16,E.blending=Dr,Pt("vias",new Sr(A,E));const w=d.vias.filter(N=>N[0]>=4).map(N=>N.slice(1)),C=ha(Ve.lavanda,420,90,700);C.uniforms.uBase.value=.35,Pt("vias-prin",new Sr(fa(w,4),C)),ls("vias-prin",C);const M=Object.values(d.flujos||{}).flat(),S=ha(Ve.coral,520,160,420);S.uniforms.uBase.value=.12,Pt("flujos",new Sr(fa(M,9),S)),ls("flujos",S);const P=new Mt;h.agua.forEach(N=>{if(!N.poly||N.poly.length<3)return;const k=new Ms(N.poly.map(([G,ie])=>new X(G,-ie))),V=new Ac(k);V.rotateX(-Math.PI/2),V.translate(0,3,0),P.add(new Xe(V,new Ir({color:Ve.agua,roughness:.15,metalness:.6,emissive:Ve.petroleo,emissiveIntensity:.6,transparent:!0,opacity:.85})))}),Pt("agua",P);const U=new Mt;j.upz={},f.upz.forEach(N=>{const k=new Ms(N.poly.map(([fe,Le])=>new X(fe,-Le))),V=new mc(k,{depth:1,bevelEnabled:!1});V.rotateX(-Math.PI/2);const G=new Te(Ve.lavanda).lerp(new Te(Ve.coral),Math.min(1,N.dens/440)),ie=new Xe(V,new Ir({color:G,transparent:!0,opacity:.55,roughness:.4,metalness:.3,emissive:G,emissiveIntensity:.25}));ie.scale.y=.001,ie.userData.h=N.dens*1.5,U.add(ie);const ue=new Sr(new yb(V,30),new Fs({color:Ve.marfil,transparent:!0,opacity:.5}));ie.add(ue),j.upz[N.n]={m:ie,u:N}}),Pt("upz",U),[..."ABCDEF"].forEach(N=>{const k=g[N].pts,V=aT(k,Za[N],N==="F"?90:N==="B"?10:22,10);Pt("p"+N,V),ls("p"+N,V.material)});const I=(_.iso||[]).map(N=>N.slice(1)),z=ha(Ve.lima,300,60,120);if(z.uniforms.uBase.value=.45,Pt("iso",new Sr(fa(I,12),z)),ls("iso",z),_.metro){const N=ha(Ve.lavanda,600,300,300);N.uniforms.uBase.value=.5,Pt("metro",new Sr(fa([_.metro.flat()],30),N)),ls("metro",N)}return await cT(),uT(p),dT(),hT(),fT(),await mT(),_T(),vT(),j}function ls(i,e){j.capas[i].userData.u=e.uniforms}async function cT(){const i=await fetch(gc+"datos/edif.bin").then(h=>h.arrayBuffer()),e=new DataView(i),t=e.getUint32(4,!0),n=new Ws(1,1,1);n.translate(0,.5,0);const r=new Ir({color:"#ffffff",roughness:.55,metalness:.35,envMapIntensity:.6}),s={uSube:{value:0},uOri:{value:new X(-715,-168)},uR:{value:9e3},uFoco:{value:new X(-715,-168)},uFR:{value:0},uFC:{value:new Te(Ve.lima)},uGris:{value:0},uOp:{value:1}};r.onBeforeCompile=h=>{Object.assign(h.uniforms,s),h.vertexShader=`uniform float uSube, uR, uFR; uniform vec2 uOri, uFoco; varying float vF;
`+h.vertexShader.replace("#include <begin_vertex>",`
      vec2 cen = (instanceMatrix * vec4(0.,0.,0.,1.)).xz;
      float ola = clamp((uSube * uR - distance(cen, uOri)) / 380.0, 0.0, 1.0);
      vec3 transformed = vec3(position.x, position.y * ola, position.z);
      vF = uFR > 0. ? 1.0 - smoothstep(uFR*0.55, uFR, distance(cen, uFoco)) : 0.0;`),h.fragmentShader=`uniform vec3 uFC; uniform float uGris; varying float vF;
`+h.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      diffuseColor.rgb = mix(diffuseColor.rgb, uFC, vF*0.85); diffuseColor.rgb *= mix(1.0, 0.35, uGris*(1.0-vF));`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance += uFC * vF * 0.35;`)};const a=new tg(n,r,t),o=new ft,c=new Te,l=new Te("#3a3c38"),u=new Te("#d9dbd2");for(let h=0;h<t;h++){const f=8+h*12,g=e.getInt16(f+10,!0)/2;o.position.set(e.getInt16(f,!0)/2,0,e.getInt16(f+2,!0)/2),o.rotation.set(0,e.getInt16(f+8,!0)/1e4,0),o.scale.set(e.getInt16(f+4,!0)/2,Math.max(3,g*2.2),e.getInt16(f+6,!0)/2),o.updateMatrix(),a.setMatrixAt(h,o.matrix),a.setColorAt(h,c.copy(l).lerp(u,Math.min(1,Math.pow(g/40,.7))))}a.frustumCulled=!1;const d=new Mt;d.add(a),Pt("edif",d),j.capas.edif.userData.u=s,r.transparent=!1}const Aa=[["Actuaciones Estratégicas (AE)","#C7FF27"],["Estructura ecológica","#9be15d"],["Condicionantes normativos","#898D84"],["Movilidad e infraestructura","#A99BCB"],["Actividad económica","#B58C78"],["Usos del suelo (POT)","#F5F3EB"],["Actores clave","#E36C4B"],["Aspectos poco atendidos","#6FA3AF"]],Zu={Media:["#F5F3EB",.16],Alta:["#A99BCB",.75],Severa:["#B58C78",.95],Crítica:["#E36C4B",1]};function lT(i,e){const t=i.length,n=Object.fromEntries(i.map((d,h)=>[d,h])),r=i.map(()=>new Set);e.forEach(d=>{r[n[d.a]].add(n[d.b]),r[n[d.b]].add(n[d.a])});const s=r.map(d=>d.size),a=new Array(t).fill(0);let o=0,c=0;const l=new Array(t).fill(!1);for(let d=0;d<t;d++){const h=[],f=i.map(()=>[]),g=new Array(t).fill(0),_=new Array(t).fill(-1);g[d]=1,_[d]=0;const p=[d];for(;p.length;){const y=p.shift();h.push(y);for(const x of r[y])_[x]<0&&(_[x]=_[y]+1,p.push(x)),_[x]===_[y]+1&&(g[x]+=g[y],f[x].push(y))}o=Math.max(o,..._);const m=new Array(t).fill(0);for(;h.length;){const y=h.pop();for(const x of f[y])m[x]+=g[x]/g[y]*(1+m[y]);y!==d&&(a[y]+=m[y])}l[d]||(c++,_.forEach((y,x)=>{y>=0&&(l[x]=!0)}))}const u=a.map(d=>d/((t-1)*(t-2)));return{n:t,m:e.length,grado:s,inter:u,densidad:2*e.length/(t*(t-1)),gradoMedio:2*e.length/t,diametro:o,componentes:c}}function uT(i){const e=Object.keys(i.nodos),t=Object.fromEntries(e.map((M,S)=>[M,S])),n=Object.values(i.aristas).filter(M=>t[M.a]!==void 0&&t[M.b]!==void 0),r=lT(e,n),s=e.map(M=>Math.max(0,Aa.findIndex(S=>S[0]===i.nodos[M].capa)));let a=11;const o=()=>(a=a*16807%2147483647)/2147483647,c=e.map(()=>new X((o()-.5)*2400,(o()-.5)*2400));for(let M=0;M<320;M++){const S=c.map(()=>new X);for(let P=0;P<c.length;P++)for(let U=P+1;U<c.length;U++){const I=c[P].clone().sub(c[U]),z=Math.max(40,I.length()),N=(s[P]===s[U]?9e5:35e4)/(z*z);I.multiplyScalar(N/z),S[P].add(I),S[U].sub(I)}n.forEach(P=>{const U=t[P.a],I=t[P.b],z=c[I].clone().sub(c[U]),N=z.length();z.multiplyScalar((N-700)*.01/Math.max(N,1)),S[U].add(z),S[I].sub(z)}),c.forEach((P,U)=>{S[U].add(P.clone().multiplyScalar(-.006)),P.add(S[U].clampLength(0,140))})}const l=Math.max(...c.map(M=>Math.max(Math.abs(M.x),Math.abs(M.y))))+260,u=new Mt;u.position.set(0,700,0);const d=Aa.map(([M,S],P)=>{const U=new Mt;U.position.y=P*150,U.userData.i=P;const I=new Xe(new qs(l*2,l*2),new Jt({color:S,transparent:!0,opacity:.045,side:dn,depthWrite:!1}));I.rotation.x=-Math.PI/2,U.add(I);const z=new Tc(new st().setFromPoints([[-1,-1],[1,-1],[1,1],[-1,1]].map(([k,V])=>new L(k*l,0,V*l))),new Fs({color:S,transparent:!0,opacity:.55}));U.add(z);const N=new ft;return N.position.set(l,0,l),U.add(N),U.userData.ancla=N,u.add(U),U}),h=[...r.grado].sort((M,S)=>S-M)[4],f=new $a(1,32,20),g=e.map((M,S)=>{const P=Aa[s[S]][1],U=r.grado[S]>=h,I=new Xe(f,U?Nr():Hs(P));I.position.set(c[S].x,0,c[S].y);const z=30+Math.sqrt(r.grado[S])*16;if(I.userData={r:z,hub:U,grado:r.grado[S],inter:r.inter[S],nombre:i.nodos[M].nombre,capa:i.nodos[M].capa,ci:s[S]},I.scale.setScalar(z),d[s[S]].add(I),U){const N=new Xe(new Qi(1.7,.06,8,64),Nr());N.rotation.x=Math.PI/2,I.add(N),I.userData.halo=N}return I}),_=(M,S,P)=>{const U=new gg,I=new _g({vertexColors:!0,linewidth:S,transparent:!0,opacity:P,depthWrite:!1});I.resolution.set(innerWidth,innerHeight),addEventListener("resize",()=>I.resolution.set(innerWidth,innerHeight));const z=[];M.forEach(k=>{const V=new Te((Zu[k.tension]||Zu.Media)[0]);z.push(V.r,V.g,V.b,V.r,V.g,V.b)}),U.setPositions(new Float32Array(M.length*6)),U.setColors(z);const N=new iT(U,I);return N.frustumCulled=!1,u.add(N),{l:N,g:U,lista:M}},p=_(n.filter(M=>M.tension==="Media"),1.2,.3),m=_(n.filter(M=>M.tension!=="Media"),3.4,.95),y=n.length*2,x=new Float32Array(y*3),v=new st;v.setAttribute("position",new At(x,3)),v.setAttribute("aR",new At(new Float32Array(y).map(()=>Math.random()),1)),v.setAttribute("aK",new At(new Float32Array(y).fill(.8),1));const A=new Ya(v,Jd("#F5F3EB",14));A.material.uniforms.uAp.value=1,A.frustumCulled=!1,u.add(A),Pt("red-pot",u);const E=new L,w=new L,C=new Fe;j.pot={grp:u,nodos:g,planos:d,M:r,ids:e,ar:n,idx:t,lado:l,actualizar(M){if(!u.visible)return;u.updateMatrixWorld(!0),C.copy(u.matrixWorld).invert();const S=P=>[g[t[P.a]].getWorldPosition(E).applyMatrix4(C).clone(),g[t[P.b]].getWorldPosition(w).applyMatrix4(C).clone()];[p,m].forEach(({g:P,lista:U})=>{const I=P.attributes.instanceStart.data.array;U.forEach((z,N)=>{const[k,V]=S(z);I.set([k.x,k.y,k.z,V.x,V.y,V.z],N*6)}),P.attributes.instanceStart.data.needsUpdate=!0,P.computeBoundingSphere()}),n.forEach((P,U)=>{const[I,z]=S(P);for(let N=0;N<2;N++){const k=(M*.25+U*.137)%1,V=N?1-k:k;x.set([I.x+(z.x-I.x)*V,I.y+(z.y-I.y)*V,I.z+(z.z-I.z)*V],(U*2+N)*3)}}),v.attributes.position.needsUpdate=!0,g.forEach(P=>{P.userData.halo&&(P.userData.halo.rotation.z=M)})}}}const up={aristas:[["B","A"],["B","F"],["F","C"],["F","D"],["C","D"],["A","F"],["A","E"],["F","E"]]};function dT(){const i=new Mt;i.position.set(0,900,0);const e=["F","A","E","D","C","B"],t={};e.forEach((c,l)=>{if(c==="F")t[c]=new L(0,120,0);else{const u=(l-1)/5*Math.PI*2-Math.PI/2;t[c]=new L(Math.cos(u)*1500,0,Math.sin(u)*1500)}});const n=j.datos.lug;j.red6Suelo={},[..."ABCDEF"].forEach(c=>{var h,f;const l=(f=(h=n[c].hitos)==null?void 0:h[0])==null?void 0:f.p;let u=0,d=0;l?[u,d]=l:(n[c].pts.forEach(g=>{u+=g[0],d+=g[1]}),u/=n[c].pts.length,d/=n[c].pts.length),j.red6Suelo[c]=new L(u,-860,d)});const r={};[..."ABCDEF"].forEach(c=>r[c]={in:0,out:0}),up.aristas.forEach(([c,l])=>{r[c].out++,r[l].in++}),j.red6Grado=r;const s=c=>90+(r[c].in+r[c].out)*26,a={};e.forEach(c=>{const l=new Xe(new $a(1,40,24),c==="F"?Nr():Hs(Za[c]));l.position.copy(t[c]),l.userData={k:c,r:s(c)},l.scale.setScalar(s(c)),i.add(l),a[c]=l});const o=up.aristas.map(([c,l])=>{const u=t[c],d=t[l],h=u.clone().add(d).multiplyScalar(.5).add(new L(0,380,0)),f=new zd(u,h,d),g=c==="F"||l==="F"?Ve.lima:Ve.marfil,_=new Xe(new Cc(f,60,12,8,!1),new Jt({color:g,transparent:!0,opacity:.9}));_.geometry.setDrawRange(0,0);let p=.98;const m=s(l)+30;for(;p>.5&&f.getPoint(p).distanceTo(d)<m;)p-=.005;const y=new Xe(new Vd(46,130,20),new Jt({color:g,transparent:!0,opacity:.95}));return y.geometry.translate(0,-65,0),y.position.copy(f.getPoint(p)),y.quaternion.setFromUnitVectors(new L(0,1,0),f.getTangent(p).normalize()),y.scale.setScalar(.001),i.add(y),_.userData={a:c,b:l,curva:f,total:_.geometry.index.count,punta:y},i.add(_),_});Pt("red6",i),j.red6={grp:i,nod:a,tubos:o,P:t}}function Ju(i,e=1){return new Xe(new qd(e*.96,e,96),new Jt({color:i,transparent:!0,opacity:.9,side:dn,depthWrite:!1}))}function hT(){const i=j.datos.lug,e=j.datos.upz.upz,t=new Mt;j.mercados=[],e.forEach(p=>{const m=new Mt;m.position.set(p.c[0],14,p.c[1]);const y=Ju(Ve.lima,1e3);y.rotation.x=-Math.PI/2,y.scale.setScalar(.001),m.add(y);const x=new Xe(new kd(1e3,64),new Jt({color:Ve.lima,transparent:!0,opacity:.07,depthWrite:!1}));x.rotation.x=-Math.PI/2,x.scale.setScalar(.001),m.add(x);const v=new Xe(new Wd(60),Nr());v.position.y=120,m.add(v),m.userData={ar:y,disco:x,n:v},t.add(m),j.mercados.push(m)}),Pt("mercados",t);const n=new Mt;n.position.set(i.F.hitos[0].p[0],20,i.F.hitos[0].p[1]);const r=new Xe(new Qi(420,26,16,120),Hs());r.rotation.x=Math.PI/2,n.add(r);const s=new Xe(new Qi(620,10,12,120),Nr());s.rotation.x=Math.PI/2,n.add(s),Pt("corabastos",n),j.coraAros=[r,s];const a=i.E.pts,o=[[-533,-385]];for(let p=0;p<5;p++){let m=null,y=-1;for(let x=0;x<a.length;x+=7){const v=a[x],A=Math.min(...o.map(E=>Math.hypot(E[0]-v[0],E[1]-v[1])));A>y&&Math.abs(v[0])<3200&&Math.abs(v[1])<3200&&(y=A,m=[v[0],v[1]])}o.push(m)}const c=new Mt;j.estaciones=[],o.forEach(p=>{const m=new Mt;m.position.set(p[0],60,p[1]);const y=new Xe(new Qi(150,30,16,64),Nr());y.rotation.x=Math.PI/2,m.add(y);const x=new Xe(new Qi(100,16,12,64),Hs());m.add(x),m.userData={a:y,b:x},c.add(m),j.estaciones.push(m)}),Pt("estaciones",c);const l=j.datos.agua.agua.filter(p=>{var m;return((m=p.poly)==null?void 0:m.length)>2}).map(p=>{let m=0,y=0;return p.poly.forEach(x=>{m+=x[0],y+=x[1]}),new L(m/p.poly.length,30,y/p.poly.length)}).filter(p=>Math.abs(p.x)<4200&&Math.abs(p.z)<4200),u=new Set([0]),d=[l[0]];let h=0;for(;u.size<Math.min(l.length,14);){let p=-1,m=1e9;l.forEach((y,x)=>{if(!u.has(x)){const v=y.distanceTo(l[h]);v<m&&(m=v,p=x)}}),u.add(p),d.push(l[p]),h=p}const f=new ng(d),g=new Xe(new Cc(f,600,16,10,!1),new Jt({color:"#9be15d",transparent:!0,opacity:.75}));g.geometry.setDrawRange(0,0),g.userData.total=g.geometry.index.count;const _=new Mt;_.add(g),Pt("corredores",_),j.corredor=g,j.parches=d}function fT(){const i=j.datos.vias.vias.filter(o=>o.length>8&&o[0]>=3).slice(0,2600),e=2600,t=new Float32Array(e*3),n=new Float32Array(e),r=[];for(let o=0;o<e;o++){const c=i[o%i.length].slice(1);r.push({v:c,t:Math.random()*(c.length/2-1),s:(.4+Math.random())*(Math.random()<.5?1:-1)}),n[o]=Math.random()}const s=new st;s.setAttribute("position",new At(t,3)),s.setAttribute("aR",new At(n,1)),s.setAttribute("aK",new At(new Float32Array(e).fill(1),1));const a=new Ya(s,Jd(Ve.marfil,9));a.material.uniforms.uAp.value=1,a.frustumCulled=!1,Pt("agentes",a),ls("agentes",a.material),j.agentes={ag:r,pos:t,g:s,vel:1}}function pT(i){const e=j.agentes;!e||!j.capas.agentes.visible||(e.ag.forEach((t,n)=>{const r=t.v.length/2-1;t.t+=t.s*i*1.6*e.vel,t.t<0&&(t.t=0,t.s*=-1),t.t>r&&(t.t=r,t.s*=-1);const s=Math.floor(Math.min(t.t,r-.001)),a=t.t-s;e.pos[n*3]=t.v[s*2]+(t.v[s*2+2]-t.v[s*2])*a,e.pos[n*3+1]=14,e.pos[n*3+2]=t.v[s*2+1]+(t.v[s*2+3]-t.v[s*2+1])*a}),e.g.attributes.position.needsUpdate=!0)}async function mT(){const i=new Mt;j.esp={};const e=new fg,t=(s,a)=>{const o=e.load(gc+"esp/"+s+".png");o.colorSpace=Ft;const c=new rb(new Jm({map:o,transparent:!0,depthWrite:!1}));return c.scale.set(a,a*.9,1),c},n=j.parches||[new L],r=(s,a,o,c)=>{const l=[];for(let u=0;u<a;u++){const d=t(s,o),h=n[(u*3+s.length)%n.length];d.position.set(h.x+(Math.random()-.5)*600,c+Math.random()*120,h.z+(Math.random()-.5)*600),d.userData={base:d.position.clone(),f:Math.random()*6},i.add(d),l.push(d)}return l};j.esp.mirla=r("mirla",10,150,160),j.esp.tingua=r("tingua_bogotana",8,140,50),j.esp.colibri=r("colibri",6,110,200);try{const s=await new yE().loadAsync(gc+"esp/abeja.glb");j.esp.abeja=[];for(let a=0;a<14;a++){const o=s.scene.clone(),c=new Pn().setFromObject(o),l=70/Math.max(.001,c.getSize(new L).length());o.scale.setScalar(l);const u=n[a%n.length];o.position.set(u.x+(Math.random()-.5)*500,120+Math.random()*80,u.z+(Math.random()-.5)*500),o.userData={base:o.position.clone(),f:Math.random()*6},i.add(o),j.esp.abeja.push(o)}}catch{j.esp.abeja=[]}Pt("especies",i)}function gT(i){var e;(e=j.capas.especies)!=null&&e.visible&&Object.entries(j.esp).forEach(([t,n])=>n.forEach(r=>{const s=r.userData,a=t==="tingua"?60:220;r.position.set(s.base.x+Math.cos(i*.6+s.f)*a,s.base.y+Math.sin(i*2.4+s.f)*(t==="tingua"?6:30),s.base.z+Math.sin(i*.6+s.f)*a),t==="abeja"&&(r.rotation.y=-i*.6-s.f)}))}function _T(){const i=new Mt,e=j.datos.lim.pts,t=new Ms(e.map(([s,a])=>new X(s,-a))),n=new Ac(t);n.rotateX(-Math.PI/2);const r=[Ve.lavanda,Ve.agua,Ve.arcilla,Ve.coral,Ve.marfil,Ve.lima];j.capasPl=[];for(let s=0;s<18;s++){const a=new Xe(n,new Jt({color:r[s%r.length],transparent:!0,opacity:.1,side:dn,depthWrite:!1})),o=new Tc(new st().setFromPoints(e.map(([c,l])=>new L(c,0,l))),new Fs({color:r[s%r.length],transparent:!0,opacity:.7}));a.add(o),a.position.y=200+s*120,a.userData.y0=a.position.y,i.add(a),j.capasPl.push(a)}Pt("capas18",i)}function vT(){const i=Ku.bavaria,e=new Mt;e.position.set(i[0],0,i[1]);const t=Ju(Ve.lima,700);t.rotation.x=-Math.PI/2,t.position.y=16,e.add(t);const n=Ju(Ve.lavanda,900);n.rotation.x=-Math.PI/2,n.position.y=16,e.add(n),j.nbic=["N","B","I","C"].map((r,s)=>{const a=new Xe(new $a(48,32,20),s===1?Nr():Hs());return a.userData={k:r,a:s/4*Math.PI*2},e.add(a),a}),Pt("bavaria",e),j.bavAros=[t,n]}function xT(i){var e;(e=j.capas.bavaria)!=null&&e.visible&&(j.nbic.forEach(t=>{const n=t.userData.a+i*.35;t.position.set(Math.cos(n)*520,380+Math.sin(i+t.userData.a)*40,Math.sin(n)*520)}),j.bavAros[0].rotation.z=i*.2,j.bavAros[1].rotation.z=-i*.12)}const Dt={rapido:!1},_e=i=>Dt.rapido?0:i,Jn="expo.out",yT="expo.in",MT=()=>document.getElementById("capa"),Cn=new Map;function Rt(i,e){if(Dt.rapido){const{duration:t,delay:n,stagger:r,ease:s,repeat:a,yoyo:o,...c}=e;return Ie.set(i,c)}return Ie.to(i,e)}function kt(i,e,t){if(Dt.rapido){const{duration:n,delay:r,stagger:s,ease:a,repeat:o,yoyo:c,...l}=t;return Ie.set(i,l)}return Ie.fromTo(i,e,t)}function Rn(i,e){return Cn.has(i)&&Pc(i,!0),e.dataset.id=i,MT().appendChild(e),Cn.set(i,e),ST(e),e}function ST(i){const e=4+Math.random()*5,t=3.6+Math.random()*1.6;i._flota=Ie.to(i,{"--fy":e+"px",duration:t,yoyo:!0,repeat:-1,ease:"sine.inOut",delay:1})}function Pc(i,e=!1){var n;const t=Cn.get(i);if(t){if(Cn.delete(i),(n=t._flota)==null||n.kill(),Ie.killTweensOf(t),Ie.killTweensOf(t.querySelectorAll("*")),e||Dt.rapido)return t.remove();Ie.to(t,{opacity:0,y:"-=30",rotationX:25,filter:"blur(10px)",duration:.4,ease:yT,onComplete:()=>t.remove()})}}function vg(i=[]){[...Cn.keys()].forEach(e=>{i.includes(e)||Pc(e)})}function xg(){[...Cn.keys()].forEach(i=>Pc(i,!0)),document.getElementById("etiquetas").innerHTML="",j.et.clear()}const bT=i=>Cn.get(i),on=(i,e,t)=>{const n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.innerHTML=t),n},Di=(i,e)=>{["left","top","right","bottom","width","height"].forEach(t=>{e[t]!==void 0&&(i.style[t]=typeof e[t]=="number"?e[t]+"vw":e[t])})},Zs=(i,e=.9,t={})=>kt(i,{opacity:0,rotationX:-70,z:-400,y:80,filter:"blur(14px)"},{opacity:1,rotationX:0,z:0,y:0,filter:"blur(0px)",duration:_e(e),ease:Jn,...t});function ET(i,e={}){const t=e.id||"tit",n=on("div","tit "+(e.cls||""));if(i.split(/(\*[^*]+\*|~[^~]+~)/).filter(Boolean).forEach(o=>{const c=o.startsWith("*"),l=o.startsWith("~");(c||l?o.slice(1,-1):o).split(/(\s+)/).forEach(d=>{if(!d)return;if(/^\s+$/.test(d)){n.appendChild(document.createTextNode(" "));return}const h=on(l?"s":"span","w"+(c?" kw":"")+(l?" tach":""),d);n.appendChild(h)})}),Di(n,e),Rn(t,n),e.kick){const o=on("div","kick",e.kick);Di(o,e),e.top!==void 0&&(o.style.top=`calc(${typeof e.top=="number"?e.top+"vw":e.top} - 44px)`),Rn(t+"-k",o),kt(o,{opacity:0,x:-40},{opacity:1,x:0,duration:_e(.6),ease:Jn})}const s=n.querySelectorAll(".w");kt(s,{opacity:0,y:60,rotationX:-80,filter:"blur(12px)"},{opacity:1,y:0,rotationX:0,filter:"blur(0px)",duration:_e(.75),ease:Jn,stagger:_e(.07),delay:_e(e.delay||0)});const a=n.querySelectorAll("s.tach");return a.length&&kt(a,{"--r":"102%"},{"--r":"-2%",duration:_e(.5),ease:Jn,delay:_e(1+(e.delay||0)),stagger:_e(.2)}),n}function TT(i,e={}){const t=on("div","sub",i);return Di(t,e),Rn(e.id||"sub",t),kt(t,{opacity:0,y:30,filter:"blur(8px)"},{opacity:1,y:0,filter:"blur(0px)",duration:_e(.7),ease:Jn,delay:_e(e.delay??.3)}),t}const dp="0123456789#%/<>";function wT(i,e){const t=on("div","dato"+(e.chico?" chico":""),`<div class="v"><span class="num"></span>${e.suf?`<em>${e.suf}</em>`:""}</div><div class="l">${e.l||""}</div>`);Di(t,e),Rn(i,t);const n=t.querySelector(".num"),r=e.desde??0,s=e.v,a=e.dec??0,o=u=>(e.pre||"")+u.toLocaleString("es-CO",{minimumFractionDigits:a,maximumFractionDigits:a});if(Dt.rapido)return n.textContent=o(s),t;Zs(t,.8);const c={v:r},l=o(s);return Ie.to(c,{v:s,duration:e.dur??1.4,ease:"expo.out",delay:e.delay||.1,onUpdate:()=>{const u=o(c.v),d=Math.floor((c.v-r)/(s-r||1)*u.length);n.textContent=u.split("").map((h,f)=>f<d||/[.,\s%]/.test(h)?h:dp[Math.random()*dp.length|0]).join("")},onComplete:()=>{n.textContent=l}}),t}function AT(i,e){const t=on("div","vid tarjeta"+(e.cls?" "+e.cls:""),`${e.img?`<img class="ico" src="${e.img}" alt="">`:""}${e.k?`<div class="k">${e.k}</div>`:""}<div class="t">${e.t||""}</div>${e.d?`<div class="d">${e.d}</div>`:""}`);return Di(t,e),e.rz&&(t.style.rotate=e.rz+"deg"),Rn(i,t),Zs(t,.85,{delay:_e(e.delay||0)}),t}function CT(i,e,t=!0){const n=Cn.get(i);n&&n.classList.toggle(e,t)}function RT(i,e){const t=on("div","lista");return Di(t,e),Rn(i,t),e.items.forEach((n,r)=>yg(i,n,r,e.n?e.n[r]:String(r+1).padStart(2,"0"),(e.delay||0)+r*.12)),t}function yg(i,e,t,n,r=0){const s=Cn.get(i);if(!s)return;const a=on("div","it",`<span class="n">${n??String(t+1).padStart(2,"0")}</span><span class="x">${e}</span>`);s.appendChild(a),kt(a,{opacity:0,x:-60,rotationY:50,filter:"blur(10px)"},{opacity:1,x:0,rotationY:0,filter:"blur(0px)",duration:_e(.7),ease:Jn,delay:_e(r)})}function PT(i,e){const t=e.video?`<video src="${e.src}" muted loop autoplay playsinline></video>`:`<img src="${e.src}" alt="">`,n=on("figure","foto",t+(e.cap?`<figcaption>${e.cap}</figcaption>`:""));return n.style.margin="0",Di(n,e),Rn(i,n),kt(n,{opacity:0,rotationY:e.desde==="izq"?75:-75,rotationX:20,z:-600,x:e.desde==="izq"?-200:200},{opacity:1,rotationY:e.ry??-8,rotationX:e.rx??4,z:0,x:0,duration:_e(1.1),ease:Jn,delay:_e(e.delay||0)}),Ie.to(n,{rotationY:(e.ry??-8)+6,duration:5,yoyo:!0,repeat:-1,ease:"sine.inOut",delay:1.2}),n}function LT(i,e,t=.9,n=[]){const r=Cn.get(i);if(!r)return;const s=r.querySelector("img"),a=r.querySelector("figcaption");if(Dt.rapido){s.src=e[e.length-1],a&&n.length&&(a.innerHTML=n[n.length-1]);return}const o=Ie.timeline();e.forEach((c,l)=>o.call(()=>{s.src=c,a&&n[l]&&(a.innerHTML=n[l]),Ie.fromTo(r,{scale:1.035,rotationZ:(Math.random()-.5)*2},{scale:1,rotationZ:0,duration:.25,ease:"steps(3)"})},null,l*t))}function DT(i,e){const t=(a,o)=>`<div class="lado ${a}"><div class="cab"><span>${a==="sin"?"Sin propuesta":"Con propuesta"}</span><span>${o.t||""}</span></div><div class="vista">${o.video?`<video src="${o.src}" muted loop autoplay playsinline></video>`:o.src?`<img src="${o.src}" alt="">`:""}${o.html||""}<span class="mono" style="position:absolute;right:10px;top:10px;font-size:10px;color:#b9bcb3;background:rgba(8,9,12,.7);padding:4px 8px">captura del simulador</span><div class="met"></div></div></div>`,n=on("div","par",t("sin",e.izq)+t("con",e.der));Rn(i,n);const[r,s]=n.querySelectorAll(".lado");return kt(r,{opacity:0,rotationY:70,x:-300,z:-500},{opacity:1,rotationY:8,x:0,z:0,duration:_e(1.1),ease:Jn}),kt(s,{opacity:0,rotationY:-70,x:300,z:-500},{opacity:1,rotationY:-8,x:0,z:0,duration:_e(1.1),ease:Jn,delay:_e(.15)}),n}function IT(i,e){const t=Cn.get(i);t&&t.querySelectorAll(".met").forEach((n,r)=>{e.forEach((s,a)=>{const o=on("div","fila",`<span>${s}</span><span class="barra"><i></i></span>`);n.appendChild(o),kt(o,{opacity:0,x:r?40:-40},{opacity:1,x:0,duration:_e(.5),ease:Jn,delay:_e(a*.12)});const c=o.querySelector("i");Ie.fromTo(c,{width:"0%",left:"0%"},{width:"35%",left:"65%",duration:1.6,ease:"sine.inOut",repeat:-1,yoyo:!0,delay:a*.2})})})}function UT(i,e={}){const t=on("div","reloj vid",'<div class="k mono" style="color:var(--lima)">tick = 1 semana</div><div class="tick"><span class="sem">0</span><em>semanas</em></div><div class="mono" style="color:#b9bcb3">horizonte · 15 años = 780 semanas</div><div class="mono hora" style="color:var(--lavanda)">06:00</div>');if(Di(t,e),Rn(i,t),Zs(t),Dt.rapido)return t.querySelector(".sem").textContent="780",t;const n={s:0};return Ie.to(n,{s:780,duration:6,ease:"power1.inOut",onUpdate:()=>{t.querySelector(".sem").textContent=Math.round(n.s);const r=Math.floor(n.s*7%24);t.querySelector(".hora").textContent=String(r).padStart(2,"0")+":00 · "+(r<6||r>18?"noche":"día")}}),t}function NT(i="go"){const e=on("div","gameover","GAME OVER");if(Rn(i,e),Dt.rapido)return e;const t=Ie.timeline();return t.fromTo(e,{opacity:0,scale:1.6,filter:"blur(20px)"},{opacity:1,scale:1,filter:"blur(0px)",duration:.5,ease:"expo.out"}),t.to(e,{x:()=>(Math.random()-.5)*24,skewX:()=>(Math.random()-.5)*14,duration:.08,repeat:9,yoyo:!0,ease:"steps(1)"},"<0.2"),t.to(e,{x:0,skewX:0,duration:.1}),e._flota=Ie.to(e,{textShadow:"8px 0 0 rgba(199,255,39,.7), -8px 0 0 rgba(169,155,203,.7)",duration:.3,repeat:-1,yoyo:!0,ease:"steps(2)",delay:1.2}),e}function OT(i,e,t={}){const n=on("div",t.cls||"",e);return n.style.position="absolute",Di(n,t),Rn(i,n),Zs(n,.85,{delay:_e(t.delay||0)}),n}function FT(i,e){Qd(i,!0);const t=on("div","et "+(e.cls||""),`<i class="p"></i><div class="c"><b>${e.t}</b>${e.s?`<small>${e.s}</small>`:""}</div>`);return e.c&&t.style.setProperty("--c",e.c),document.getElementById("etiquetas").appendChild(t),j.et.set(i,{e:t,p:new L(...e.p),obj:e.obj}),kt(t.querySelector(".c"),{opacity:0,x:-30,clipPath:"inset(0 100% 0 0)"},{opacity:1,x:0,clipPath:"inset(0 0% 0 0)",duration:_e(.6),ease:Jn,delay:_e(e.delay||0)}),kt(t.querySelector(".p"),{scale:0},{scale:1,duration:_e(.4),ease:"back.out(3)",delay:_e(e.delay||0)}),t}function Qd(i,e=!1){const t=j.et.get(i);if(t){if(j.et.delete(i),e||Dt.rapido)return t.e.remove();Ie.to(t.e,{opacity:0,duration:.3,onComplete:()=>t.e.remove()})}}function BT(){[...j.et.keys()].forEach(i=>Qd(i))}const Vi=new L;function Mg(){j.et.forEach(({e:i,p:e,obj:t})=>{Vi.copy(e),t&&t.getWorldPosition(Vi),Vi.project(j.cam);const n=Vi.z<1&&Math.abs(Vi.x)<1.1&&Math.abs(Vi.y)<1.1;i.style.display=n?"":"none",i.style.transform=`translate(${(Vi.x*.5+.5)*innerWidth}px, ${(-Vi.y*.5+.5)*innerHeight}px)`})}function zT(i,e){const t=e.nodos,n=t.length,r=`<div class="mx-c h"></div>${t.map(c=>`<div class="mx-c h" style="color:${e.colores[c]}">${c}</div>`).join("")}<div class="mx-c h g">k<sub>out</sub></div>`,s=t.map(c=>`<div class="mx-c h" style="color:${e.colores[c]}">${c}</div>${t.map(l=>`<div class="mx-c" data-c="${c}${l}">${c===l?"·":""}</div>`).join("")}<div class="mx-c g" data-out="${c}">0</div>`).join(""),a=`<div class="mx-c h g">k<sub>in</sub></div>${t.map(c=>`<div class="mx-c g" data-in="${c}">0</div>`).join("")}<div class="mx-c g"></div>`,o=document.createElement("div");return o.className="vid matriz",o.innerHTML=`<div class="k mono">Matriz de adyacencia · fila = origen → columna = efecto</div><div class="mx" style="grid-template-columns:repeat(${n+2},1fr)">${r}${s}${a}</div><div class="mx-ref">${t.map(c=>`<span><b style="color:${e.colores[c]}">${c}</b> ${e.nombres[c]}</span>`).join("")}</div>`,o.style.position="absolute",["left","top","right","bottom","width"].forEach(c=>{e[c]!==void 0&&(o.style[c]=typeof e[c]=="number"?e[c]+"vw":e[c])}),Rn(i,o),Zs(o,.8),o}function Sg(i,e,t){const n=Cn.get(i);if(!n)return;const r=n.querySelector(`[data-c="${e}${t}"]`);if(!r||r.classList.contains("on"))return;r.classList.add("on"),r.textContent="1";const s=a=>{const o=n.querySelector(a);o.textContent=String(+o.textContent+1),kt(o,{scale:1.6,color:"#C7FF27"},{scale:1,duration:_e(.4),ease:"steps(4)"})};s(`[data-out="${e}"]`),s(`[data-in="${t}"]`),kt(r,{scale:0,rotation:90},{scale:1,rotation:0,duration:_e(.45),ease:"back.out(3)",delay:_e(.6)})}function kT(i,e){const t=Cn.get(i);t&&t.querySelectorAll(`[data-out="${e}"],[data-in="${e}"],[data-c^="${e}"],[data-c$="${e}"]`).forEach(n=>n.classList.add("hl"))}function HT(i,e){const t=document.createElement("div");return t.className="vid metr",t.innerHTML=`<div class="k mono">${e.titulo}</div>${e.resumen?`<div class="metr-res">${e.resumen.map(([n,r])=>`<div><b>${r}</b><span>${n}</span></div>`).join("")}</div>`:""}${e.filas?`<table><thead><tr>${e.cols.map(n=>`<th>${n}</th>`).join("")}</tr></thead><tbody>${e.filas.map(n=>`<tr>${n.map((r,s)=>`<td${s?' class="n"':""}>${r}</td>`).join("")}</tr>`).join("")}</tbody></table>`:""}${e.nota?`<div class="metr-nota">${e.nota}</div>`:""}`,t.style.position="absolute",["left","top","right","bottom","width"].forEach(n=>{e[n]!==void 0&&(t.style[n]=typeof e[n]=="number"?e[n]+"vw":e[n])}),Rn(i,t),Zs(t,.8,{delay:_e(e.delay||0)}),kt(t.querySelectorAll("tbody tr, .metr-res > div"),{opacity:0,x:30},{opacity:1,x:0,duration:_e(.4),ease:"steps(5)",stagger:_e(.1),delay:_e(.4+(e.delay||0))}),t}const VT=Object.freeze(Object.defineProperty({__proto__:null,D:_e,R:Dt,agregarItem:yg,bloque:OT,dato:wT,el:bT,et:FT,filas:IT,flipbook:LT,foto:PT,gameover:NT,limpiar:vg,limpiarTodo:xg,lista:RT,marcar:CT,matriz:zT,matrizMarcar:Sg,metricasRed:HT,par:DT,proyectarEts:Mg,quitar:Pc,quitarEt:Qd,quitarEts:BT,reloj:UT,resaltarGrado:kT,sub:TT,tarjeta:AT,titulo:ET,tw:Rt,twf:kt},Symbol.toStringTag,{value:"Module"})),Lc=()=>document.getElementById("trans");function GT(){return j.r.render(j.scene,j.cam),j.r.domElement.toDataURL("image/jpeg",.86)}function Gi(i,e,t,n,r){const s=document.createElement("div");return s.className="pz",Object.assign(s.style,{left:e+"px",top:t+"px",width:n+"px",height:r+"px",backgroundImage:`url(${i})`,backgroundSize:`${innerWidth}px ${innerHeight}px`,backgroundPosition:`${-e}px ${-t}px`}),Lc().appendChild(s),s}const hp=()=>{Lc().innerHTML=""},fp={pliegue(i){const e=innerWidth/2,t=innerHeight,n=Gi(i,0,0,e,t),r=Gi(i,e,0,e,t);n.style.transformOrigin="0% 50%",r.style.transformOrigin="100% 50%";const s=Ie.timeline();return s.to(n,{rotationY:105,"--sombra":1,duration:1,ease:"expo.in"},0).to(r,{rotationY:-105,"--sombra":1,duration:1,ease:"expo.in"},.08),s},persiana(i){const t=Math.ceil(innerWidth/16),n=Ie.timeline();for(let r=0;r<16;r++){const s=Gi(i,r*t,0,t+1,innerHeight);s.style.transformOrigin="0% 50%",n.to(s,{rotationY:-92,"--sombra":1,duration:.55,ease:"power3.in"},r*.04)}return n},escalera(i){const t=Math.ceil(innerHeight/9),n=Ie.timeline();for(let r=0;r<9;r++){const s=Gi(i,0,r*t,innerWidth,t+1);n.to(s,{x:(r%2?1:-1)*innerWidth*1.1,rotationX:r%2?40:-40,z:-300,duration:.8,ease:"expo.in"},Math.abs(r-9/2)*.05)}return n},recorte(i){const n=Math.ceil(innerWidth/9),r=Math.ceil(innerHeight/5),s=Ie.timeline();for(let a=0;a<5;a++)for(let o=0;o<9;o++){const c=Gi(i,o*n,a*r,n+1,r+1);s.to(c,{y:innerHeight*(1.2+Math.random()*.4),x:(Math.random()-.5)*300,rotationZ:(Math.random()-.5)*120,rotationX:Math.random()*160,duration:.9+Math.random()*.3,ease:"power2.in"},(5-a)*.06+Math.random()*.25)}return s},cubo(i){const e=Gi(i,0,0,innerWidth,innerHeight);e.style.transformOrigin="100% 50%";const t=Ie.timeline();return t.to(e,{rotationY:-90,x:-innerWidth*.5,z:-innerWidth*.5,"--sombra":1,duration:1,ease:"expo.inOut"}),Ie.fromTo("#mundo, #escena",{rotationY:60,x:innerWidth*.4,transformPerspective:1600},{rotationY:0,x:0,duration:1,ease:"expo.inOut",clearProps:"transform"}),t},esquina(i){const e=Gi(i,0,0,innerWidth,innerHeight),t=document.createElement("div");t.className="marco-esq",Lc().appendChild(t);const n=Ie.timeline();return n.fromTo(t,{right:"8vw",top:"10vh",width:40,height:40},{right:"1.5vw",top:"2vh",width:innerWidth*.97,height:innerHeight*.96,duration:.6,ease:"expo.in"}).to(e,{clipPath:"inset(0% 0% 100% 100%)",duration:.7,ease:"expo.inOut"},.35).to(t,{opacity:0,duration:.3},">-0.1"),n},vuelo(i){const e=Gi(i,0,0,innerWidth,innerHeight),t=Ie.timeline();return t.to(e,{scale:3.2,opacity:0,filter:"blur(18px)",duration:.9,ease:"expo.in"}),Ie.fromTo("#mundo",{scale:.7,filter:"blur(14px)"},{scale:1,filter:"blur(0px)",duration:1.1,ease:"expo.out",delay:.35,clearProps:"transform,filter"}),t}};async function WT(i,e){var s;const t=GT();hp(),Ie.timeline({paused:!0}),e();const n=(fp[i]||fp.pliegue)(t),r=document.createElement("div");Object.assign(r.style,{position:"absolute",inset:0,background:"rgba(199,255,39,.18)",pointerEvents:"none"}),Lc().appendChild(r),Ie.to(r,{opacity:0,duration:.18,ease:"steps(2)",delay:.05}),await((s=n.then)==null?void 0:s.call(n)),hp()}const Dc={losa:[["borde","#C7FF27","Límite de la localidad 8 · Kennedy"]],edif:[["area","#d9dbd2","Edificaciones (huella y altura reales)"]],vias:[["linea","#b9bcb3","Malla vial"]],"vias-prin":[["linea","#A99BCB","Vías arteriales"]],flujos:[["trazo","#E36C4B","Flujos de carga hacia Corabastos"]],agua:[["area","#6FA3AF","Cuerpos de agua y humedales"]],upz:[["grad","linear-gradient(90deg,#A99BCB,#E36C4B)","UPZ · altura ∝ habitantes por hectárea"]],iso:[["trazo","#C7FF27","Isócronas a mercados"]],metro:[["trazo","#A99BCB","Primera línea del metro (en obra)"]],mercados:[["anillo","#C7FF27","Mercado barrial · radio 15 min (esquema)"]],corabastos:[["anillo","#f1f2f5","Corabastos · central mayorista"]],estaciones:[["anillo","#C7FF27","Estación Circular (esquema)"]],corredores:[["linea","#9be15d","Corredor ecológico (esquema)"]],agentes:[["punto","#F5F3EB","Agentes del simulador"]],especies:[["punto","#9be15d","Fauna: mirla, tingua, colibrí, abeja"]],capas18:[["borde","#A99BCB","Capa de información satelital"]],bavaria:[["anillo","#C7FF27","Bavaria Común · esferas NBIC"]]};[..."ABCDEF"].forEach(i=>Dc["p"+i]=[["punto",Za[i],Kd[i]]]);Dc["red-pot"]=[...Aa.map(([i,e])=>["nodo",e,i]),["nota","","Nodo: tamaño ∝ grado · halo = 5 de mayor grado"],...Object.entries(Zu).map(([i,[e]])=>[i==="Media"?"linea":"gruesa",e,"Relación · tensión "+i.toLowerCase()])];Dc.red6=[...[..."FABCDE"].map(i=>["nodo",Za[i],Kd[i]]),["flecha","#C7FF27","Relación causal · origen → efecto"],["nota","","Nodo: tamaño ∝ grado (entrada + salida)"]];const qT=["red-pot","red6","losa","edif","vias","vias-prin","agua","upz","flujos","iso","metro","pA","pB","pC","pD","pE","pF","corabastos","mercados","estaciones","corredores","bavaria","agentes","especies","capas18"],jT=(i,e)=>i==="area"?`<i class="s" style="background:${e}"></i>`:i==="grad"?`<i class="s" style="background:${e}"></i>`:i==="borde"?`<i class="s" style="border:2px solid ${e}"></i>`:i==="linea"?`<i class="s l" style="background:${e}"></i>`:i==="gruesa"?`<i class="s l g" style="background:${e}"></i>`:i==="trazo"?`<i class="s l" style="background:repeating-linear-gradient(90deg,${e} 0 6px,transparent 6px 10px)"></i>`:i==="punto"?`<i class="s p" style="background:${e};box-shadow:0 0 6px ${e}"></i>`:i==="anillo"?`<i class="s p" style="border:2px solid ${e}"></i>`:i==="nodo"?`<i class="s p n" style="background:radial-gradient(circle at 35% 30%,#fff,${e} 45%,#111 100%)"></i>`:i==="flecha"?`<i class="s f" style="color:${e}">→</i>`:'<i class="s"></i>';let pp="";function YT(){const i=qT.filter(s=>{const a=j.capas[s];return a&&a.visible&&(a.userData.v??1)>.3}),e=i.includes("red-pot")?["red-pot"]:i.includes("red6")?["red6",...i.filter(s=>/^p[A-F]$/.test(s))]:i,t=e.join("|");if(t===pp)return;pp=t;const n=document.querySelector("#conv ul"),r=e.flatMap(s=>Dc[s]||[]);document.querySelector("#conv .k").textContent=e[0]==="red-pot"?"Convenciones · red multicapa del POT":e[0]==="red6"?"Convenciones · red dirigida de problemas":"Convenciones",n.innerHTML=r.map(([s,a,o])=>`<li class="${s==="nota"?"nota":""}">${s==="nota"?"":jT(s,a)}<span>${o}</span></li>`).join(""),Ie.fromTo(n.children,{opacity:0,x:-14},{opacity:1,x:0,duration:.35,stagger:.025,ease:"steps(4)"})}let Vs,qe,br,tc;function $T(){Vs=document.getElementById("mini"),qe=Vs.getContext("2d"),tc=j.datos.lim.pts;const i=tc.map(t=>t[0]),e=tc.map(t=>t[1]);br={x0:Math.min(...i),x1:Math.max(...i),z0:Math.min(...e),z1:Math.max(...e)}}const Ho=(i,e)=>{const t=(Vs.width-24)/Math.max(br.x1-br.x0,br.z1-br.z0);return[12+(i-br.x0)*t,12+(e-br.z0)*t]},Il=new vE,KT=new qi(new L(0,1,0),0),Vo=new L;function ZT(){return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([i,e])=>{if(Il.setFromCamera(new X(i,e),j.cam),Il.ray.intersectPlane(KT,Vo)&&Vo.distanceTo(j.cam.position)<4e4)return[Vo.x,Vo.z];const t=Il.ray.at(4e4,new L);return[t.x,t.z]})}function JT(i){const e=Vs.width,t=Vs.height;qe.clearRect(0,0,e,t),qe.fillStyle="rgba(8,9,12,.82)",qe.fillRect(0,0,e,t),qe.beginPath(),tc.forEach(([a,o],c)=>{const[l,u]=Ho(a,o);c?qe.lineTo(l,u):qe.moveTo(l,u)}),qe.closePath(),qe.fillStyle="rgba(245,243,235,.08)",qe.fill(),qe.strokeStyle="#C7FF27",qe.lineWidth=1.5,qe.stroke(),qe.save(),qe.clip(),j.datos.upz.upz.forEach(a=>{qe.beginPath(),a.poly.forEach(([o,c],l)=>{const[u,d]=Ho(o,c);l?qe.lineTo(u,d):qe.moveTo(u,d)}),qe.closePath(),qe.strokeStyle="rgba(245,243,235,.18)",qe.lineWidth=.7,qe.stroke()}),qe.restore();const n=ZT();qe.beginPath(),n.forEach(([a,o],c)=>{const[l,u]=Ho(a,o);c?qe.lineTo(l,u):qe.moveTo(l,u)}),qe.closePath(),qe.fillStyle="rgba(199,255,39,.13)",qe.fill(),qe.strokeStyle="rgba(199,255,39,.9)",qe.lineWidth=1,qe.stroke();const[r,s]=Ho(i.x,i.z);qe.fillStyle="#C7FF27",qe.fillRect(r-3,s-3,6,6),qe.strokeStyle="#C7FF27",qe.beginPath(),qe.moveTo(r-9,s),qe.lineTo(r+9,s),qe.moveTo(r,s-9),qe.lineTo(r,s+9),qe.stroke()}const mp=[10,20,25,50,100,200,250,500,1e3,2e3,2500,5e3,1e4],Ul=new L,Nl=new L;function QT(i){return i>14e3?"Ciudad":i>6500?"Localidad":i>3200?"Localidad · UPZ":i>1600?"UPZ":i>800?"Sector":"Manzana"}let XT=0;function e1(i){Vs||$T();const e=j.cam.position.distanceTo(i),t=2*e*Math.tan(wd.degToRad(j.cam.fov/2))/innerHeight;let n=mp[0];for(const l of mp)l/t<=170&&(n=l);const r=n/t,s=document.getElementById("escala");s.querySelector(".barra").style.width=r+"px",s.querySelector(".fin").textContent=n>=1e3?(n/1e3).toLocaleString("es-CO")+" km":n+" m",s.querySelector(".mitad").textContent=n/2>=1e3?(n/2e3).toLocaleString("es-CO")+" km":n/2+" m";const a=t/264583e-9,o=Math.pow(10,Math.floor(Math.log10(a))-1);document.getElementById("razon").textContent="≈ 1:"+(Math.round(a/o)*o).toLocaleString("es-CO")+" en pantalla",Ul.copy(i).project(j.cam),Nl.set(i.x,i.y,i.z-800).project(j.cam);const c=Math.atan2(Nl.x-Ul.x,Nl.y-Ul.y)*180/Math.PI*(innerWidth/innerHeight>1,1);document.getElementById("norte").style.transform=`rotate(${c}deg)`,document.getElementById("zoomnivel").textContent="Zoom · "+QT(e),++XT%2===0&&JT(i),YT()}function Go(i,e=""){const t=document.getElementById("zoomaviso");t&&(t.innerHTML=`<b>${i==="in"?"⊕ ZOOM IN":"⊖ ZOOM OUT"}</b>${e?`<span>${e}</span>`:""}`,Ie.killTweensOf(t),Ie.fromTo(t,{opacity:0,scale:1.2},{opacity:1,scale:1,duration:.3,ease:"steps(4)"}),Ie.to(t,{opacity:0,duration:.4,delay:1.6,ease:"steps(4)"}))}const Wt=i=>"./img/"+i,Wi=i=>"./esp/"+i+".png",Ol=i=>"./vid/"+i,gp=(i,e,t=0)=>i.et("n"+e,{p:[0,0,0],obj:i.W.red6.nod[e],t:i.NOM_P[e],c:i.COL_P[e],cls:"nodo",delay:t}),yi=(i,e,t,n,r,s=0,a=120)=>i.et(e,{p:[t[0],a,t[1]],t:n,s:r,delay:s}),bs=[{n:"00",nombre:"Kennedy",cam:"portada",tr:"vuelo",base:i=>{i.W.capas.edif.userData.u.uSube.value=0},beats:[{t:"[Portada] Kennedy: modelamiento dinámico y simulación.",a:i=>{i.sube(1,i.LUG.corabastos,5),i.capa("agua"),i.capa("vias-prin"),i.titulo("Kennedy: *modelamiento dinámico* y simulación",{kick:"Sustentación · Modelamiento dinámico y simulación",top:"58vh",width:70}),i.cam("alto",9)}}]},{n:"01",nombre:"Introducción",cam:"alto",tr:"pliegue",base:i=>{i.capa("agua",!0,0)},beats:[{t:"La modernización del abastecimiento, el crecimiento urbano y la transformación del suelo buscaban responder a necesidades diferentes,",a:i=>{i.tarjeta("c1",{k:"01 · abastecimiento",t:"Modernizar el abasto",left:8,top:"22vh",rz:-3}),i.tarjeta("c2",{k:"02 · ciudad",t:"Crecimiento urbano",left:38,top:"48vh",rz:2,delay:.25}),i.tarjeta("c3",{k:"03 · suelo",t:"Transformar el suelo",left:68,top:"24vh",rz:-2,delay:.5})}},{t:"pero sus efectos terminaron entrelazándose,",a:i=>{["c1","c2","c3"].forEach((e,t)=>i.tw(i.el(e),{left:34+t*4+"vw",top:34+t*5+"vh",rotation:(t-1)*9,duration:i.D(1.2),ease:"steps(10)"})),i.capa("flujos"),i.cam("cora",3)}},{t:"intensificando la dependencia alimentaria, la acumulación de residuos y la degradación de los ecosistemas.",a:i=>{i.limpiar(),i.titulo("*dependencia* alimentaria · *residuos* · ecosistemas *degradados*",{top:"14vh",width:60}),i.aparecer("pA"),i.aparecer("pE",1,2.4),i.foco(i.LUG.corabastos,1500,"#E36C4B")}},{t:"Problemas que no fueron consecuencia de una sola decisión, sino de múltiples dinámicas que se reforzaron entre sí.",a:i=>{i.limpiar(),i.sinFoco(),i.titulo("No fue ~una sola decisión~: *múltiples dinámicas* que se refuerzan",{top:"12vh",width:44,cls:"chico"}),i.foto("axo",{src:Wt("axo_1956.jpg"),left:50,top:"20vh",width:42,height:"52vh",cap:"<b>1956</b> · Kennedy antes de Kennedy"}),i.flipbook("axo",[Wt("axo_1956.jpg"),Wt("axo_1972.jpg"),Wt("axo_1988.jpg"),Wt("axo_2024.jpg")],1.1,["<b>1956</b> · suelo rural","<b>1972</b> · llega Corabastos","<b>1988</b> · la ciudad crece","<b>2024</b> · hoy"])}},{t:"Precisamente, estas dinámicas y las relaciones son el punto central del proyecto de Modelamiento Dinámico y Simulación.",a:i=>{i.limpiar(),i.titulo("Las *relaciones* son el centro del proyecto",{cls:"centro"}),i.capa("vias-prin"),i.cam("alto",3),i.capa("flujos",!1)}},{t:"Su desarrollo comprende el análisis del POT de Bogotá, el diagnóstico y la formulación de los problemas de Kennedy,",a:i=>{i.limpiar(),i.lista("fases",{left:8,top:"22vh",items:["Análisis del POT de Bogotá","Diagnóstico y formulación de los problemas de Kennedy"]}),i.capa("red-pot"),i.cam("pot",3)}},{t:"la construcción de un modelo propio de ciudad y la exploración de sus posibles consecuencias mediante simulaciones.",a:i=>{i.agregarItem("fases","Construcción de un modelo propio de ciudad",2,"03"),i.agregarItem("fases",'Exploración de consecuencias mediante <span style="color:var(--lima)">simulaciones</span>',3,"04",.25),i.capa("red-pot",!1),i.capa("agentes"),i.cam("cora",3)}}]},{n:"02",nombre:"El POT y la ciudad como sistema complejo",cam:"pot",tr:"persiana",base:i=>{i.capa("edif",!0,0),i.gris(.7,0),i.W.pot.planos.forEach(e=>e.position.y=0)},beats:[{t:"Como punto de partida, el Plan de Ordenamiento Territorial de Bogotá se reconstruyó como una red",a:i=>{i.capa("red-pot"),i.W.pot.nodos.forEach((e,t)=>i.twf(e.scale,{x:.01,y:.01,z:.01},{x:e.userData.r,y:e.userData.r,z:e.userData.r,duration:i.D(.5),ease:"back.out(2)",delay:i.D(t*.025)})),i.titulo("El POT reconstruido como una *red*",{kick:"02 · Punto de partida",width:40,cls:"chico"})}},{t:"a partir de los aportes de Albert-László Barabási, físico e investigador de la ciencia de redes.",a:i=>{const e=i.W.pot.M;i.tarjeta("bar",{k:"Ciencia de redes",t:"Albert-László Barabási",d:"Físico · la estructura se lee en los nodos y sus conexiones.",left:7,top:"30vh"}),i.metricasRed("met",{titulo:"Métricas de la red · macromodelo del POT",right:"5vw",top:"16vh",resumen:[["nodos",e.n],["aristas",e.m],["grado medio",e.gradoMedio.toFixed(1).replace(".",",")],["densidad",e.densidad.toFixed(3).replace(".",",")],["diámetro",e.diametro],["componentes",e.componentes]],nota:"Red no dirigida · 8 capas temáticas · tensión de cada relación según el macromodelo."})}},{t:"Se identificaron los nodos centrales,",a:i=>{i.quitar("bar");const e=i.W.pot.nodos;e.forEach(r=>{const s=r.userData.hub?r.userData.r*1.5:r.userData.r*.6;i.tw(r.scale,{x:s,y:s,z:s,duration:i.D(.9),ease:"steps(8)"})});const t=[...e].sort((r,s)=>s.userData.grado-r.userData.grado).slice(0,5),n=r=>r.replace(/^[A-Z]+\d+ - /,"").replace(/\s*\(.*\)$/,"");i.metricasRed("met",{titulo:"Nodos centrales · top 5 por grado",right:"5vw",top:"16vh",cols:["nodo","grado k","intermediación"],filas:t.map(r=>[n(r.userData.nombre),r.userData.grado,r.userData.inter.toFixed(3).replace(".",",")]),nota:"Grado = número de relaciones. Intermediación (Brandes, normalizada) = cuánto del camino más corto entre otros nodos pasa por este."}),t.slice(0,3).forEach((r,s)=>i.et("hub"+s,{p:[0,0,0],obj:r,t:n(r.userData.nombre),s:"k = "+r.userData.grado,cls:"nodo",delay:s*.2}))}},{t:"las relaciones de dependencia y las jerarquías que estructuran este modelo de ciudad.",a:i=>{i.quitarEts(),i.quitar("met"),i.despiece(520,2),i.cam({p:[0,3400,9800],o:[0,2300,0],nom:"Despiece multicapa"},2.4),i.titulo("Arquitectura *multicapa*: dependencias y jerarquías",{kick:"02 · Estructura del plan",width:38,cls:"chico"}),i.W.pot.planos.forEach((e,t)=>i.et("capa"+t,{p:[0,0,0],obj:e.userData.ancla,t:i.CAPAS_POT[t][0],s:"capa "+(t+1)+" · "+i.W.pot.nodos.filter(n=>n.userData.ci===t).length+" nodos",c:i.CAPAS_POT[t][1],cls:"nodo",delay:.6+t*.12}))}},{t:"Esta representación se contrastó con el enfoque de Michael Batty, investigador del urbanismo computacional que estudia las ciudades como sistemas complejos.",a:i=>{i.limpiar(),i.quitarEts(),i.despiece(0,1.6),i.tarjeta("bat",{k:"Urbanismo computacional",t:"Michael Batty",d:"La ciudad como sistema complejo: agentes, flujos y tiempo.",right:"7vw",top:"24vh"}),i.capa("agentes"),i.gris(0,1.5),i.cam({p:[2600,2300,4800],o:[0,700,0],nom:"Agentes sobre la ciudad"},2.6)}},{t:"Se comprende que aunque el plan establece relaciones entre sus componentes, su representación no explica suficientemente",a:i=>{i.limpiar(),i.titulo("El plan *relaciona*… pero ~no explica~",{width:50})}},{t:"las interacciones entre agentes, los procesos de retroalimentación, las dinámicas emergentes",a:i=>{i.lista("falta",{left:8,top:"40vh",items:["Interacciones entre agentes","Retroalimentación","Dinámicas emergentes"],n:["↻","↻","↻"]}),i.agentesVel(3)}},{t:"ni cómo estas transforman y producen problemas a través del tiempo.",a:i=>{i.dato("anio",{v:2026,desde:1972,l:"problemas que se producen a través del tiempo",right:"7vw",top:"58vh",dur:2.4}),i.capa("red-pot",!1,1.6),i.cam("alto",3),i.foco(i.LUG.corabastos,2600,"#E36C4B",2.4)}}]},{n:"03",nombre:"De los mapas a las dinámicas territoriales",cam:"capas",tr:"recorte",base:i=>{i.gris(.8,0)},beats:[{t:"Para comenzar a comprender Kennedy desde la complejidad, se cruzaron dieciocho capas de información satelital,",a:i=>{i.capas18("apila"),i.dato("d18",{v:18,l:"capas de información satelital",left:7,top:"22vh"})}},{t:"a partir de las cuales se construyeron nueve índices territoriales.",a:i=>{i.capas18("nueve"),i.dato("d9",{v:9,l:"índices territoriales",left:7,top:"52vh"})}},{t:"Entre ellos, el índice de concentración comercial y logística y el índice de soporte ecológico.",a:i=>{i.limpiar(),i.capas18("fuera"),i.cam("alto",2.4),i.gris(.4),i.tarjeta("icl",{k:"Índice 01",t:"Concentración comercial y logística",left:7,top:"24vh",cls:"on"}),i.tarjeta("ise",{k:"Índice 02",t:"Soporte ecológico",left:7,top:"46vh",delay:.2})}},{t:"Mientras las actividades comerciales y logísticas se intensificaban alrededor de Corabastos,",a:i=>{i.cam("cora",2.6),i.foco(i.LUG.corabastos,1400,"#E36C4B"),i.capa("flujos"),i.aparecer("pA"),yi(i,"cora",i.LUG.corabastos,"Corabastos","central mayorista",.8,260)}},{t:"el soporte ecológico presentaba discontinuidades y fragmentación de la cobertura vegetal.",a:i=>{i.marcar("icl","on",!1),i.marcar("ise","on"),i.quitarEt("cora"),i.cam("humedal",2.6),i.sinFoco(),i.capa("flujos",!1),i.capa("agua"),i.corredor(.35,2),i.gris(.75),i.titulo("*Fragmentación* de la cobertura vegetal",{right:"6vw",cls:"der chico",top:"14vh"})}},{t:"Al cruzar estos índices se pueden reconocer sectores donde coinciden diferentes presiones urbanas y ecológicas,",a:i=>{i.limpiar(),i.cam("alto",2.4),i.capa("flujos"),i.aparecer("pA"),i.foco(i.LUG.corabastos,2200,"#E36C4B"),i.titulo("Donde *coinciden* las presiones",{kick:"03 · Cruce de índices",width:40,cls:"chico"})}},{t:"identificando relaciones espaciales que orientan el análisis de los problemas.",a:i=>{yi(i,"cora",i.LUG.corabastos,"Corabastos","presión comercial",0),yi(i,"mp",i.LUG.mariapaz,"María Paz","residuos",.2,80),yi(i,"bv",i.LUG.bavaria,"Bavaria","predio de 71 ha",.4)}}]},{n:"04",nombre:"Los problemas de fondo",cam:"alto",tr:"pliegue",base:i=>{i.capa("agua",!0,0)},beats:[{t:"El análisis de estos índices permitió identificar diferentes problemas en Kennedy,",a:i=>{["A","B","C","D","E"].forEach((e,t)=>setTimeout(()=>i.aparecer("p"+e,1,1.2),i.R.rapido?0:t*250))}},{t:"dando paso al estudio de sus causas más profundas y a comprender cómo convergen en un problema estructural más amplio: la fragmentación territorial.",a:i=>{i.titulo("*Fragmentación* territorial",{cls:"centro"}),i.gris(.5),["A","B","C","D","E"].forEach(e=>i.uTo("p"+e,"uS",40,1.5,"steps(8)"))}},{t:"La hiperconcentración del mercado mayorista comienza por la inauguración de Corabastos en 1972 para mejorar la salubridad del abastecimiento,",a:i=>{i.limpiar(),["B","C","D","E"].forEach(e=>i.capa("p"+e,!1)),i.cam("cora",2.6),i.foco(i.LUG.corabastos,900,"#C7FF27"),i.capa("corabastos"),i.dato("a72",{v:1972,desde:1956,l:"se inaugura Corabastos",left:7,top:"20vh",dur:1.8}),i.foto("ax72",{src:Wt("axo_1972.jpg"),right:"6vw",top:"22vh",width:34,height:"42vh",cap:"<b>1972</b> · Corabastos"})}},{t:"a medida que se perdió producción agrícola local, aumentó la dependencia de otras regiones y se concentraron los viajes de carga.",a:i=>{i.limpiar(),i.capa("flujos"),i.uTo("flujos","uV",900,1),i.uTo("flujos","uBase",.35,1),i.foto("fp",{src:Wt("flujo_pico.jpg"),right:"6vw",top:"20vh",width:38,height:"46vh",cap:"<b>simulador</b> · carga en hora pico"}),i.lista("pc",{left:7,top:"24vh",width:40,items:["Se pierde producción local","Dependencia de otras regiones","Se concentran los viajes de carga"],n:["↓","↑","→"]})}},{t:"El segundo es la saturación de residuos.",a:i=>{i.limpiar(),i.capa("flujos",!1),i.cam("mariapaz",2.4),i.capa("corabastos",!1),i.aparecer("pE"),i.foco(i.LUG.mariapaz,900,"#F5F3EB"),i.titulo("Saturación de *residuos*",{kick:"04 · Problema 02",width:40})}},{t:"La concentración comercial incrementa la generación de desechos que, cuando superan la capacidad de recolección y tratamiento, se acumulan.",a:i=>{i.uTo("pE","uS",60,3,"steps(12)"),i.bloque("cap",'<div class="mono" style="color:#b9bcb3;margin-bottom:8px">capacidad de recolección</div><div style="position:relative;width:26vw;height:18px;border:1px solid rgba(245,243,235,.3)"><i class="llen" style="position:absolute;left:0;top:0;bottom:0;width:0;background:#E36C4B"></i><i style="position:absolute;left:70%;top:-8px;bottom:-8px;width:2px;background:#C7FF27"></i></div>',{left:7,top:"58vh"}),i.tw(i.el("cap").querySelector(".llen"),{width:"100%",duration:i.D(3),ease:"steps(12)",delay:i.D(.6)})}},{t:"A esto se suma la impermeabilización del suelo, que aumenta la escorrentía y el arrastre de contaminantes hacia los cuerpos de agua.",a:i=>{i.limpiar(),i.cam("humedal",2.6),i.gris(.9),i.sinFoco(),i.titulo("Suelo *impermeable* → escorrentía → agua",{width:46,cls:"chico"}),i.tarjeta("lx",{img:Wi("lixiviados"),k:"arrastre",t:"Contaminantes hacia los humedales",right:"7vw",top:"52vh"})}},{t:"Finalmente, la degradación del soporte ecológico está relacionada con la expansión urbana y la pérdida de vegetación, que fragmentan los hábitats",a:i=>{i.limpiar(),i.capa("especies"),i.W.capas.edif.userData.u.uSube.value=.2,i.sube(1,[0,0],4),i.titulo("Expansión urbana que *fragmenta* hábitats",{width:46,cls:"chico"}),i.gsap.delayedCall(i.R.rapido?0:2.6,()=>i.capa("especies",!1,1.4))}}]},{n:"05",nombre:"La red de los seis problemas",cam:"red6",tr:"cubo",base:i=>{i.gris(.85,0),i.capa("red6",!0,0),Object.values(i.W.red6.nod).forEach(e=>e.scale.setScalar(.01))},beats:[{t:"A partir de estas dinámicas identificamos seis problemas relacionados:",a:i=>{Object.entries(i.W.red6.nod).forEach(([e,t],n)=>{const r=t.userData.r;i.twf(t.scale,{x:.01,y:.01,z:.01},{x:r,y:r,z:r,duration:i.D(.7),ease:"back.out(2.2)",delay:i.D(n*.12)})}),i.dato("seis",{v:6,l:"problemas relacionados",left:7,top:"20vh"})}},{t:"la centralización de servicios, el crecimiento poblacional, la valorización del suelo,",a:i=>{i.quitar("seis"),["F","B","C"].forEach((e,t)=>gp(i,e,t*.35))}},{t:"la especulación inmobiliaria, la dependencia de alimentos externos y la gestión de residuos sólidos.",a:i=>{["D","A","E"].forEach((e,t)=>gp(i,e,t*.35))}},{t:"Al representarlos como una red, encontramos que el crecimiento poblacional aumenta la demanda de alimentos y servicios,",a:i=>{i.matriz("adj",{nodos:["F","A","B","C","D","E"],colores:i.COL_P,nombres:i.NOM_P,right:"2vw",top:"12vh"}),i.arista(0),i.gsap.delayedCall(i.R.rapido?0:.6,()=>i.arista(1)),i.nodo6("B",1.25)}},{t:"cuya concentración influye en la valorización y especulación del suelo.",a:i=>{i.arista(2),i.gsap.delayedCall(i.R.rapido?0:.5,()=>i.arista(3)),i.gsap.delayedCall(i.R.rapido?0:1,()=>i.arista(4))}},{t:"A su vez, la dependencia alimentaria concentra el abastecimiento en Corabastos, aumentando la generación de residuos.",a:i=>{i.arista(5),i.gsap.delayedCall(i.R.rapido?0:.6,()=>i.arista(6)),i.gsap.delayedCall(i.R.rapido?0:1.2,()=>i.arista(7))}},{t:"Al ser la centralización de servicios uno de los nodos con mayor número de conexiones, se convierte en un problema prioritario para nuestra propuesta,",a:i=>{i.nodo6("F",1.45,1),["A","B","C","D","E"].forEach(e=>i.nodo6(e,.75)),i.dato("cx",{v:5,l:"conexiones (k_in 2 + k_out 3) · nodo prioritario",left:7,top:"20vh"}),i.resaltarGrado("adj","F")}},{t:"porque su relación con los demás permite identificar dónde una intervención podría generar mayores transformaciones.",a:i=>{i.quitar("cx"),i.titulo("Intervenir donde la red *más se transforma*",{top:"12vh",width:44,cls:"chico"}),i.W.red6.tubos.forEach((e,t)=>{(e.userData.a==="F"||e.userData.b==="F")&&i.twf(e.material.color,{r:1,g:1,b:1},{r:.78,g:1,b:.15,duration:i.D(.6),repeat:i.R.rapido?0:3,yoyo:!0,ease:"steps(3)",delay:i.D(t*.1)})})}},{t:"Mediante la conectografía localizamos los problemas en Kennedy,",a:i=>{i.limpiar(),i.quitarEts(),i.aSuelo(!0),i.cam("mapa",2.6),i.gris(.6),i.titulo("*Conectografía*",{kick:"05 · Localizar los problemas",width:40})}},{t:"identificando dónde se concentran las actividades comerciales, la población, la valorización del suelo y los residuos.",a:i=>{["F","B","C","E"].forEach((e,t)=>{i.gsap.delayedCall(i.R.rapido?0:t*.5,()=>{i.aparecer("p"+e,1,1.2)})}),["F","B","C","E"].forEach((e,t)=>i.et("l"+e,{p:[i.W.red6Suelo[e].x,200,i.W.red6Suelo[e].z],t:i.NOM_P[e],c:i.COL_P[e],cls:"nodo",delay:t*.5}))}},{t:"Esto nos permitió reconocer dónde se manifiestan y establecer criterios de intervención a partir de sus indicadores.",a:i=>{i.limpiar(),i.titulo("De dónde se manifiestan → *criterios de intervención*",{top:"12vh",width:50,cls:"chico"})}}]},{n:"06",nombre:"Del diagnóstico a los criterios de diseño",cam:"cora",tr:"esquina",base:i=>{i.gris(.6,0),i.capa("agua",!0,0)},beats:[{t:"Corabastos y Las Flores concentran el 97 % del volumen mayorista registrado en Bogotá.",a:i=>{i.capa("corabastos"),i.foco(i.LUG.corabastos,900),i.dato("d97",{v:97,suf:"%",l:"del volumen mayorista de Bogotá · Corabastos y Las Flores",left:7,top:"18vh"}),yi(i,"cora",i.LUG.corabastos,"Corabastos","central mayorista",.3,260),yi(i,"fl",i.LUG.flores,"Plaza Las Flores","plaza distrital",.6,160)}},{t:"Para evaluar la accesibilidad a los mercados, tomamos quince minutos como tiempo de referencia.",a:i=>{i.limpiar(),i.quitarEts(),i.cam("alto",2.4),i.capa("iso"),i.dato("d15",{v:15,suf:"min",l:"tiempo de referencia para llegar a un mercado",left:7,top:"18vh"})}},{t:"Bajo este criterio, la cobertura estimada es del 28 %.",a:i=>{i.dato("d28",{v:28,suf:"%",l:"cobertura estimada actual",left:7,top:"50vh"})}},{t:"Por eso, nuestro criterio de diseño es aumentar esta cobertura al 75 %, mediante una red de mercados barriales distribuidos.",a:i=>{i.quitar("d15"),i.dato("d28",{v:75,desde:28,suf:"%",l:"criterio de diseño · red de mercados barriales distribuidos",left:7,top:"50vh",dur:2.2}),i.mercados(!0),i.capa("iso",!1),i.bloque("esq",'<span class="mono" style="color:#b9bcb3">esquema de la red distribuida · un nodo por UPZ</span>',{right:"6vw",bottom:"8vh"})}},{t:"En cuanto al crecimiento poblacional, Patio Bonito registra 435 habitantes por hectárea, frente a 90 en Tintal Norte.",a:i=>{i.limpiar(),i.mercados(!1),i.cam("oeste",2.6),i.capa("upz"),i.upzAlto(!0),i.capa("edif",!1),i.dato("pb",{v:435,l:"hab/ha · Patio Bonito",left:7,top:"18vh",chico:!0}),i.dato("tn",{v:90,l:"hab/ha · Tintal Norte",left:7,top:"46vh",chico:!0,delay:.6}),i.et("upb",{p:[i.LUG.patio[0],700,i.LUG.patio[1]],t:"Patio Bonito",s:"435 hab/ha"}),i.et("utn",{p:[i.LUG.tintal[0],320,i.LUG.tintal[1]],t:"Tintal Norte",s:"90 hab/ha",delay:.6})}},{t:"El criterio no consiste en igualar estas densidades, sino en distribuir servicios de acuerdo con la concentración poblacional y los déficits de cobertura.",a:i=>{i.limpiar(),i.quitarEts(),i.titulo("No ~igualar densidades~: *distribuir servicios* según la demanda",{width:48,cls:"chico"}),i.mercados(!0,.6)}},{t:"En valorización del suelo, el valor catastral de Kennedy aumentó un 33,4 % entre 2022 y 2026.",a:i=>{i.limpiar(),i.mercados(!1),i.upzAlto(!1),i.capa("upz",!1,1.2),i.capa("edif",!0,.2),i.cam("alto",2.4),i.foco([0,0],5200,"#A99BCB",2),i.aparecer("pC"),i.dato("d33",{v:33.4,dec:1,suf:"%",l:"aumento del valor catastral · 2022–2026",left:7,top:"18vh"})}},{t:"Actualmente se valora por el acceso a servicios y transporte, pero nuestro modelo ecocéntrico propone valorarlo por su biodiversidad, interacciones bióticas y conectividad ecológica.",a:i=>{i.limpiar(),i.sinFoco(),i.cam("humedal",2.6),i.titulo("Valorar por ~servicios y transporte~ → por *biodiversidad*, *interacciones* y *conectividad*",{width:52,cls:"chico"}),i.corredor(1,3),i.capa("especies")}},{t:"En especulación inmobiliaria, los precios anunciados cerca del metro aumentan aproximadamente un 12 % anual.",a:i=>{i.limpiar(),i.capa("especies",!1),i.capa("corredores",!1),i.capa("metro"),i.aparecer("pD"),i.cam("alto",2.4),i.dato("d12",{v:12,suf:"% anual",l:"precios anunciados cerca del metro",left:7,top:"18vh"})}},{t:"Nuestra propuesta busca proteger los espacios comunitarios y productivos frente al aumento del precio del suelo.",a:i=>{i.limpiar(),i.titulo("*Proteger* lo comunitario y lo productivo",{width:44}),i.mercados(!0,.35)}},{t:"En dependencia alimentaria, durante 2022 llegaron aproximadamente 2,2 millones de toneladas de alimentos a Corabastos.",a:i=>{i.limpiar(),i.mercados(!1),i.capa("metro",!1),i.capa("pD",!1),i.cam("cora",2.4),i.capa("flujos"),i.uTo("flujos","uBase",.4,1),i.capa("corabastos"),i.dato("d22",{v:2.2,dec:1,suf:"M t",l:"de alimentos llegaron a Corabastos en 2022",left:7,top:"18vh"})}},{t:"Nuestra propuesta busca aumentar la producción local y el abastecimiento distribuido, reduciendo la dependencia de un único nodo.",a:i=>{i.limpiar(),i.cam("alto",2.4),i.uTo("flujos","uBase",.08,2),i.mercados(!0),i.titulo("De *un único nodo* a una *red distribuida*",{width:44,cls:"chico"})}},{t:"Finalmente, en gestión de residuos, identificamos acumulaciones en María Paz de 5 toneladas de residuos orgánicos y 18 de voluminosos.",a:i=>{i.limpiar(),i.mercados(!1),i.capa("flujos",!1),i.capa("corabastos",!1),i.cam("mariapaz",2.4),i.aparecer("pE"),i.foco(i.LUG.mariapaz,600,"#E36C4B"),i.dato("d5",{v:5,suf:"t",l:"residuos orgánicos · María Paz",left:7,top:"18vh",chico:!0}),i.dato("d18",{v:18,suf:"t",l:"residuos voluminosos · María Paz",left:7,top:"46vh",chico:!0,delay:.5}),yi(i,"mp",i.LUG.mariapaz,"María Paz","acumulación de residuos",.4,80)}},{t:"Proponemos Estaciones Circulares para reducir estas acumulaciones y aprovechar la materia orgánica, con la meta de disminuir las toneladas acumuladas y aumentar las aprovechadas.",a:i=>{i.limpiar(),i.quitarEts(),i.sinFoco(),i.estaciones(!0),i.cam("alto",2.4),i.tarjeta("ec",{img:Wi("nutrientes"),k:"propuesta",t:"Estaciones Circulares",d:"↓ toneladas acumuladas · ↑ toneladas aprovechadas",left:7,top:"22vh",cls:"on"})}},{t:"De esta manera, los indicadores se convierten en criterios de localización, dimensionamiento y funcionamiento de las intervenciones.",a:i=>{i.limpiar(),i.mercados(!0,.5),i.titulo("Indicadores → *criterios*",{kick:"06 · De diagnóstico a diseño",width:40}),i.lista("crit",{left:8,top:"42vh",items:["Localización","Dimensionamiento","Funcionamiento"]})}}]},{n:"07",nombre:"Objetivos y macromodelos",cam:"alto",tr:"escalera",base:i=>{i.gris(.5,0),i.capa("agua",!0,0)},beats:[{t:"El objetivo general del proyecto es formular y evaluar, mediante simulaciones, un modelo urbano-arquitectónico ecocéntrico que transforme las relaciones territoriales asociadas a la fragmentación de Kennedy.",a:i=>{i.titulo("Formular y evaluar un modelo urbano-arquitectónico *ecocéntrico*",{kick:"07 · Objetivo general",width:60,cls:"chico"}),i.capa("agentes"),i.corredor(1,4)}},{t:"Para ello se establecieron tres objetivos específicos:",a:i=>{i.limpiar(),i.dato("o3",{v:3,l:"objetivos específicos",left:7,top:"16vh"}),i.lista("obj",{left:8,top:"46vh",width:50,items:[]})}},{t:"Analizar las relaciones espaciales entre los problemas y convertir sus indicadores en criterios de diseño.",a:i=>{i.agregarItem("obj",'Analizar relaciones espaciales → <span style="color:var(--lima)">criterios de diseño</span>',0),i.aparecer("pF",1,1),i.aparecer("pE",1,1)}},{t:"Plantear una red distribuida de equipamientos productivos, infraestructuras circulares y conexiones ecológicas articuladas mediante Bavaria Común.",a:i=>{i.agregarItem("obj",'Red distribuida articulada por <span style="color:var(--lima)">Bavaria Común</span>',1),i.mercados(!0,.5),i.estaciones(!0),i.capa("bavaria")}},{t:"Y evaluar las consecuencias de estas intervenciones mediante simulaciones contrastadas.",a:i=>{i.agregarItem("obj",'Evaluar con <span style="color:var(--lima)">simulaciones contrastadas</span>',2),i.agentesVel(2)}},{t:"El ecocentrismo constituye el macromodelo principal, complementado por dos enfoques que también pueden evaluarse: la circularidad de recursos y el comercio ecológico.",a:i=>{i.limpiar(),i.mercados(!1),i.capa("pF",!1),i.capa("pE",!1),i.tarjeta("m1",{k:"Macromodelo principal",t:"Ecocentrismo",left:37,top:"30vh",cls:"on"}),i.tarjeta("m2",{k:"Enfoque",t:"Circularidad de recursos",left:8,top:"58vh",delay:.3}),i.tarjeta("m3",{k:"Enfoque",t:"Comercio ecológico",right:"8vw",top:"58vh",delay:.5})}},{t:"El primero se comprueba mediante la biodiversidad, las interacciones bióticas, la continuidad de corredores y los ciclos biogeoquímicos.",a:i=>{i.el("m1").querySelector(".t").insertAdjacentHTML("afterend",'<div class="d">biodiversidad · interacciones bióticas · continuidad de corredores · ciclos biogeoquímicos</div>'),i.capa("especies"),i.cam("humedal",2.4)}},{t:"La circularidad se evalúa mediante el aprovechamiento de residuos y la recuperación de nutrientes.",a:i=>{i.marcar("m1","on",!1),i.marcar("m2","on"),i.el("m2").insertAdjacentHTML("beforeend",'<div class="d">aprovechamiento de residuos · recuperación de nutrientes</div>'),i.capa("especies",!1),i.cam("alto",2.4)}},{t:"Y el comercio ecológico, mediante la producción local, la autonomía alimentaria y la accesibilidad al abastecimiento.",a:i=>{i.marcar("m2","on",!1),i.marcar("m3","on"),i.el("m3").insertAdjacentHTML("beforeend",'<div class="d">producción local · autonomía alimentaria · accesibilidad</div>'),i.mercados(!0,.5)}},{t:"Estos indicadores establecen las condiciones que la propuesta busca transformar y que posteriormente se ponen a prueba.",a:i=>{i.limpiar(),i.titulo("Condiciones que se *ponen a prueba*",{cls:"centro"})}}]},{n:"08",nombre:"Bavaria Común y el simulador",cam:"bav",tr:"vuelo",base:i=>{i.gris(.7,0),i.capa("agua",!0,0),i.capa("vias-prin",!0,0)},beats:[{t:"Para materializar estos criterios se plantea Bavaria Común, un Distrito de Tecnologías Convergentes localizado en la antigua cervecería, entre las avenidas Boyacá y Las Américas.",a:i=>{i.capa("bavaria"),i.foco(i.LUG.bavaria,900),i.titulo("Bavaria *Común*",{kick:"08 · Distrito de Tecnologías Convergentes",width:40}),yi(i,"bv",i.LUG.bavaria,"Bavaria Común","Av. Boyacá × Av. Las Américas",.6,300)}},{t:"La intervención parte de la antigua cervecería Bavaria, un espacio actualmente desocupado y sin actividad.",a:i=>{i.limpiar(),i.foto("bvf",{src:Wt("bavaria.jpg"),left:6,top:"20vh",width:44,height:"56vh",desde:"izq",ry:8,cap:"<b>simulador</b> · antigua cervecería Bavaria"})}},{t:"Se propone recuperar parte de sus estructuras para transformarlas en espacios de formación, investigación y experimentación.",a:i=>{i.lista("usos",{right:"7vw",top:"24vh",items:["Formación","Investigación","Experimentación"]}),i.cam("bavCerca",2.4)}},{t:"Su programa se fundamenta en los estudios sobre convergencia de tecnologías NBIC, desarrollados por Roco y Bainbridge en un informe científico de 2002.",a:i=>{i.limpiar(),i.quitarEts(),i.titulo("Convergencia *NBIC*",{kick:"Roco y Bainbridge · 2002",width:40}),["N","B","I","C"].forEach((e,t)=>i.et("nb"+e,{p:[0,0,0],obj:i.W.nbic[t],t:e,s:["nanotecnología","biotecnología","información","ciencias cognitivas"][t],cls:"nodo grande",delay:t*.2}))}},{t:"La biotecnología se vincula con la hidroponía, el compostaje y el cultivo experimental de hongos.",a:i=>{i.limpiar(),i.tarjeta("tb",{img:Wi("hongos"),k:"B · biotecnología",t:"Hidroponía · compostaje · hongos",left:7,top:"24vh",cls:"on"})}},{t:"Las tecnologías de la información coordinan pedidos, entregas y excedentes.",a:i=>{i.marcar("tb","on",!1),i.tarjeta("ti",{k:"I · información",t:"Pedidos · entregas · excedentes",left:7,top:"50vh",cls:"on"})}},{t:"Las ciencias cognitivas orientan el aprendizaje y la toma de decisiones, mientras la nanotecnología se incorpora como línea de investigación en materiales para la conservación de alimentos.",a:i=>{i.marcar("ti","on",!1),i.tarjeta("tc",{k:"C · cognitivas",t:"Aprendizaje y decisiones",right:"7vw",top:"24vh",cls:"on"}),i.tarjeta("tn",{k:"N · nanotecnología",t:"Materiales para conservar alimentos",right:"7vw",top:"50vh",delay:.5})}},{t:"Bavaria funciona como clúster de conocimiento y aprendizaje, mientras las capacidades productivas se distribuyen por Kennedy.",a:i=>{i.limpiar(),i.quitarEts(),i.cam("alto",2.6),i.mercados(!0,.5),i.sinFoco(),i.titulo("Conocimiento en *Bavaria*, producción *distribuida*",{width:46,cls:"chico"})}},{t:"Para evaluar estas intervenciones se desarrolló un simulador dirigido a arquitectos, urbanistas y actores vinculados con la transformación territorial.",a:i=>{i.limpiar(),i.mercados(!1),i.capa("bavaria",!1),i.foto("sim",{src:Wt("portada_render.jpg"),left:22,top:"16vh",width:56,height:"58vh",cap:"<b>simulador</b> · Kennedy"}),i.bloque("pub",'<span class="mono" style="color:var(--lima)">arquitectos · urbanistas · actores territoriales</span>',{left:22,top:"80vh"})}},{t:"El entorno representa calles, edificios, cubiertas, lotes y humedales,",a:i=>{i.limpiar(),i.cam("humedal",2.4),i.capa("edif",!1,0),i.capa("vias",!1,0),i.capa("agua",!1,0);const e=[["vias","Calles"],["edif","Edificios · cubiertas"],["losa","Lotes"],["agua","Humedales"]];i.lista("ent",{left:7,top:"24vh",items:[]}),e.forEach(([t,n],r)=>i.gsap.delayedCall(i.R.rapido?0:r*.7,()=>{t==="edif"&&(i.W.capas.edif.userData.u.uSube.value=i.R.rapido?1:0),i.capa(t),t==="edif"&&i.sube(1,[-900,900],2),i.agregarItem("ent",n,r)}))}},{t:"junto con agentes que participan en procesos de desplazamiento, producción, consumo y distribución.",a:i=>{i.capa("agentes"),i.agentesVel(2),i.capa("especies"),i.lista("ag",{right:"7vw",top:"24vh",items:["Desplazamiento","Producción","Consumo","Distribución"],n:["●","●","●","●"]})}},{t:"El modelo dinámico-causal organiza sus relaciones, mientras el Game Design Canvas establece los controles, parámetros, reglas e indicadores.",a:i=>{i.limpiar(),i.capa("especies",!1),i.tarjeta("mdc",{k:"relaciones",t:"Modelo dinámico-causal",left:10,top:"30vh",cls:"on"}),i.tarjeta("gdc",{k:"controles · parámetros · reglas · indicadores",t:"Game Design Canvas",right:"10vw",top:"30vh",delay:.4})}},{t:"Cada tick representa una semana, con un horizonte de quince años y un control horario que permite visualizar diferentes momentos del día.",a:i=>{i.limpiar(),i.reloj("rel",{right:"7vw",top:"22vh"}),i.agentesVel(4),i.cam("alto",3)}},{t:"La evaluación se organiza en seis pares de simulaciones, bajo las mismas condiciones iniciales y perturbaciones, diferenciadas por la incorporación de la propuesta.",a:i=>{i.limpiar(),i.agentesVel(1);const e=["Abastecimiento","Movilidad","Residuos","Biodiversidad","Población","Recursos"];i.bloque("pares",`<div style="display:grid;grid-template-columns:repeat(6,1fr);gap:10px;width:84vw">${e.map((t,n)=>`<div class="vid" style="position:relative;padding:14px"><div class="mono" style="color:var(--lima)">par 0${n+1}</div><div style="font:800 22px var(--f);letter-spacing:-.03em;margin:8px 0">${t}</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:6px"><div class="mono" style="padding:8px;border:1px solid rgba(245,243,235,.2);font-size:10px">sin</div><div class="mono" style="padding:8px;border:1px solid #C7FF27;color:#C7FF27;font-size:10px">con</div></div></div>`).join("")}</div>`,{left:8,top:"34vh"}),i.R.rapido||i.gsap.from(i.el("pares").querySelectorAll(".vid"),{rotationY:-90,opacity:0,duration:.6,stagger:.12,ease:"expo.out"}),i.titulo("6 pares · *12 simulaciones*",{width:50,cls:"chico",top:"12vh"})}}]},{n:"09",nombre:"Primer par · abastecimiento y producción distribuida",cam:"cora",tr:"persiana",base:i=>{i.gris(.6,0),i.capa("agua",!0,0)},beats:[{t:"El primer par responde a la dependencia alimentaria y a la baja cobertura de mercados identificada en el diagnóstico.",a:i=>{i.titulo("Par 01 · *Abastecimiento*",{kick:"dependencia alimentaria · baja cobertura",width:44}),i.capa("flujos"),i.aparecer("pA"),i.capa("corabastos")}},{t:"La propuesta incorpora módulos productivos en cubiertas compartidas, colegios y otros espacios habilitados.",a:i=>{i.limpiar(),i.foto("inem",{src:Wt("inem.jpg"),right:"6vw",top:"20vh",width:40,height:"50vh",cap:"<b>simulador</b> · módulos en cubiertas y colegios"}),i.lista("mod",{left:7,top:"26vh",items:["Cubiertas compartidas","Colegios","Espacios habilitados"]}),i.foco(i.LUG.corabastos,3e3,"#C7FF27",3)}},{t:"La formación se articula desde Bavaria, mientras las familias y organizaciones participan en la producción, destinando una parte al autoconsumo y otra a los puntos de acopio y mercados barriales.",a:i=>{i.limpiar(),i.sinFoco(),i.cam("alto",2.4),i.capa("bavaria"),i.mercados(!0,.5),i.tarjeta("auto",{k:"una parte",t:"Autoconsumo",left:7,top:"26vh"}),i.tarjeta("acop",{k:"otra parte",t:"Acopio y mercados barriales",left:7,top:"50vh",delay:.4,cls:"on"})}},{t:"Los alimentos que no pueden producirse localmente continúan llegando de otras regiones. Corabastos permanece como uno de los nodos de abastecimiento.",a:i=>{i.limpiar(),i.uTo("flujos","uBase",.2,1),yi(i,"cora",i.LUG.corabastos,"Corabastos","sigue siendo un nodo",.3,260)}},{t:"Al aumentar la demanda, el escenario sin propuesta conserva sus capacidades iniciales. En el segundo se incorporan los módulos productivos y mercados distribuidos.",a:i=>{i.quitarEts(),i.par("p1",{izq:{t:"capacidades iniciales",src:Ol("sim_agentes.mp4"),video:!0},der:{t:"módulos + mercados",src:Ol("sim_propuesta.mp4"),video:!0}})}},{t:"Comparamos los volúmenes recibidos, las reservas, los déficits, el autoconsumo y la cobertura de mercados a menos de quince minutos.",a:i=>i.filas("p1",["Volúmenes recibidos","Reservas","Déficits","Autoconsumo","Cobertura < 15 min"])},{t:"Así se evalúa si la distribución de capacidades productivas y comerciales responde al criterio de accesibilidad y autonomía alimentaria.",a:i=>{i.limpiar(),i.titulo("¿Responde a la *accesibilidad* y la *autonomía alimentaria*?",{cls:"centro chico"})}}]},{n:"10",nombre:"Segundo par · movilidad y accesibilidad",cam:"alto",tr:"recorte",base:i=>{i.gris(.7,0),i.capa("vias-prin",!0,0)},beats:[{t:"La localización de los mercados también responde a la configuración de la red vial.",a:i=>{i.titulo("Par 02 · *Movilidad*",{kick:"red vial y mercados",width:40}),i.mercados(!0,.4),i.uTo("vias-prin","uBase",.6,1)}},{t:"Mediante la sintaxis espacial, la integración permite reconocer tramos accesibles y la elección identifica recorridos potenciales.",a:i=>{i.limpiar(),i.mercados(!1),i.tarjeta("int",{k:"sintaxis espacial",t:"Integración",d:"tramos accesibles",left:7,top:"24vh",cls:"on"}),i.tarjeta("ele",{k:"sintaxis espacial",t:"Elección",d:"recorridos potenciales",left:7,top:"48vh",delay:.4}),i.uTo("vias-prin","uV",1200,1)}},{t:"En Bavaria, estos análisis orientan nuevos pasajes que conectan las naves recuperadas con las calles del entorno, evitando extender la intervención sobre el bosque.",a:i=>{i.limpiar(),i.cam("bavCerca",2.6),i.capa("bavaria"),i.foco(i.LUG.bavaria,700),i.foto("bv2",{src:Wt("bavaria.jpg"),right:"6vw",top:"20vh",width:36,height:"46vh",cap:"<b>pasajes</b> · sin extenderse sobre el bosque"})}},{t:"Al modificar la circulación, observamos cómo los vehículos reorganizan sus recorridos.",a:i=>{i.limpiar(),i.capa("bavaria",!1),i.sinFoco(),i.cam("alto",2.4),i.capa("agentes"),i.agentesVel(4)}},{t:"Con la propuesta, los nuevos destinos comerciales y conexiones modifican parte de los desplazamientos.",a:i=>{i.mercados(!0,.4),i.agentesVel(2),i.titulo("Nuevos destinos → *nuevos recorridos*",{width:44,cls:"chico"})}},{t:"Comparamos los tiempos de viaje, los niveles de congestión y el ruido asociado al tránsito, considerando también sus posibles efectos sobre la fauna.",a:i=>{i.limpiar(),i.par("p2",{izq:{t:"hora pico",src:Wt("flujo_pico.jpg")},der:{t:"ruido y fauna",src:Wt("ruido.jpg")}}),i.filas("p2",["Tiempos de viaje","Congestión","Ruido del tránsito","Efectos sobre la fauna"])}},{t:"La prueba permite determinar en qué sectores disminuyen o aumentan las presiones y si la reorganización territorial mejora la capacidad de respuesta o traslada parte de la congestión hacia otros lugares.",a:i=>{i.limpiar(),i.titulo("¿Mejora la respuesta o *traslada* la congestión?",{cls:"centro chico"})}}]},{n:"11",nombre:"Tercer par · residuos y circularidad",cam:"mariapaz",tr:"cubo",base:i=>{i.gris(.7,0)},beats:[{t:"Los sectores con acumulación de residuos orientan la localización de Estaciones Circulares distribuidas.",a:i=>{i.titulo("Par 03 · *Residuos*",{kick:"estaciones circulares",width:40}),i.aparecer("pE"),i.estaciones(!0),i.cam("alto",3)}},{t:"Estas infraestructuras incorporan espacios de recepción, separación, almacenamiento y tratamiento de materia orgánica.",a:i=>{i.lista("est",{left:7,top:"40vh",items:["Recepción","Separación","Almacenamiento","Tratamiento orgánico"]})}},{t:"Parte de los residuos puede transformarse en compost y reincorporarse a los cultivos en suelo, relacionando el abastecimiento con la recuperación de nutrientes.",a:i=>{i.limpiar();const e=[["bacterias","compost"],["nutrientes","nutrientes"],["hongos","suelo vivo"],["sauco","cultivos"]];i.bloque("ciclo",`<div class="ciclo" style="position:relative;width:34vw;height:34vw">${e.map(([s,a],o)=>`<div class="cn" style="position:absolute;left:50%;top:50%;width:9vw;text-align:center;translate:-50% -50%"><img src="${Wi(s)}" style="width:7vw;height:7vw;object-fit:contain;filter:drop-shadow(0 6px 14px #000)"><div class="mono" style="color:var(--lima)">${a}</div></div>`).join("")}<div style="position:absolute;inset:12%;border:2px dashed rgba(199,255,39,.6);border-radius:50%"></div></div>`,{right:"8vw",top:"18vh"});const t=i.el("ciclo").querySelectorAll(".cn"),n={a:0},r=()=>t.forEach((s,a)=>{const o=n.a+a*Math.PI/2;s.style.transform=`translate(${Math.cos(o)*13}vw, ${Math.sin(o)*13}vw)`});r(),i.gsap.to(n,{a:Math.PI*2,duration:12,repeat:-1,ease:"none",onUpdate:r}),i.titulo("Residuo → *compost* → cultivo",{width:40,cls:"chico"})}},{t:"En esta prueba aumentamos la generación de residuos orgánicos en ambos escenarios.",a:i=>{i.uTo("pE","uS",70,2.5,"steps(10)"),i.titulo("Perturbación: *más residuos orgánicos* en ambos escenarios",{width:40,cls:"chico abajo"})}},{t:"Sin propuesta, los residuos dependen de las capacidades iniciales de gestión. Con propuesta, se incorporan las nuevas estaciones y sus capacidades de procesamiento.",a:i=>{i.limpiar(),i.par("p3",{izq:{t:"capacidades iniciales",html:`<img src="${Wi("lixiviados")}" style="position:absolute;inset:18% 30%;width:40%;height:auto;object-fit:contain">`},der:{t:"estaciones circulares",html:`<img src="${Wi("nutrientes")}" style="position:absolute;inset:18% 30%;width:40%;height:auto;object-fit:contain">`}})}},{t:"Se comparan las toneladas acumuladas, los residuos aprovechados, el compost recuperado y los momentos de saturación.",a:i=>i.filas("p3",["Toneladas acumuladas","Residuos aprovechados","Compost recuperado","Momentos de saturación"])},{t:"Esto permite evaluar cuánto material se reincorpora al ciclo productivo y bajo qué condiciones las estaciones mantienen su funcionamiento.",a:i=>{i.limpiar(),i.titulo("¿Cuánto material *vuelve al ciclo*?",{cls:"centro chico"})}}]},{n:"12",nombre:"Cuarto par · biodiversidad y conectividad ecológica",cam:"humedal",tr:"pliegue",base:i=>{i.gris(.75,0),i.capa("agua",!0,0)},beats:[{t:"El diagnóstico ecológico identificó discontinuidades entre hábitats y presiones asociadas a las vías, el ruido y la transformación del suelo.",a:i=>{i.titulo("Par 04 · *Biodiversidad*",{kick:"hábitats discontinuos",width:44}),i.capa("vias-prin"),i.foto("rd",{src:Wt("ruido.jpg"),right:"6vw",top:"22vh",width:34,height:"40vh",cap:"<b>simulador</b> · ruido del tránsito"})}},{t:"La propuesta incorpora jardines florales, restauración vegetal, recuperación de bordes de humedal y corredores ecológicos.",a:i=>{i.limpiar(),i.corredor(1,3),i.lista("eco",{left:7,top:"24vh",items:["Jardines florales","Restauración vegetal","Bordes de humedal","Corredores ecológicos"]})}},{t:"Su localización responde a las relaciones entre las especies y sus recursos.",a:i=>{i.limpiar(),i.capa("especies"),i.titulo("Especies ↔ *recursos*",{width:40})}},{t:"Las abejas requieren recursos florales para la polinización;",a:i=>{i.limpiar(),i.cam({p:[-700,700,1500],o:[-900,120,900]},2.4),i.tarjeta("ab",{k:"polinización",t:"Abejas",d:"requieren recursos florales",left:7,top:"24vh",cls:"on"})}},{t:"las mirlas participan en la dispersión de semillas,",a:i=>{i.marcar("ab","on",!1),i.tarjeta("mi",{img:Wi("mirla"),k:"dispersión de semillas",t:"Mirlas",left:7,top:"46vh",cls:"on"})}},{t:"mientras las tinguas dependen de las condiciones de los humedales.",a:i=>{i.marcar("mi","on",!1),i.tarjeta("ti",{img:Wi("tingua_bogotana"),k:"humedales",t:"Tinguas",right:"7vw",top:"30vh",cls:"on"})}},{t:"En esta prueba introducimos el deterioro de un parche ecológico y observamos cómo responden las especies en los dos escenarios.",a:i=>{i.limpiar(),i.cam("humedal",2.4);const e=i.W.parches[2];i.foco([e.x,e.z],700,"#E36C4B"),i.et("par",{p:[e.x,150,e.z],t:"Parche deteriorado",s:"perturbación"}),i.titulo("Perturbación: un parche *se deteriora*",{width:44,cls:"chico"})}},{t:"Para comprobar el macromodelo ecocéntrico, analizamos la diversidad de especies, la continuidad de corredores, la conectividad funcional y las interacciones bióticas.",a:i=>{i.limpiar(),i.quitarEts(),i.sinFoco(),i.lista("ind",{left:7,top:"22vh",items:["Diversidad de especies","Continuidad de corredores","Conectividad funcional","Interacciones bióticas"]})}},{t:"También registramos los atropellamientos de fauna para reconocer las vías que dificultan sus desplazamientos.",a:i=>{i.limpiar(),i.cam("alto",2.4),i.uTo("vias-prin","uBase",.8,.6),i.titulo("Atropellamientos: las *vías* como barrera",{width:44,cls:"chico"})}},{t:"La comparación permite reconocer si las intervenciones mantienen las funciones ecológicas o si persisten condiciones de deterioro, a partir de los cambios en la permanencia de especies, sus interacciones y la conectividad de sus hábitats.",a:i=>{i.limpiar(),i.par("p4",{izq:{t:"deterioro",src:Ol("sim_humedal.mp4"),video:!0},der:{t:"corredores y restauración",src:Wt("arboles.jpg")}}),i.filas("p4",["Permanencia de especies","Interacciones","Conectividad de hábitats"])}}]},{n:"13",nombre:"Quinto par · población y presiones sobre el suelo",cam:"oeste",tr:"esquina",base:i=>{i.gris(.6,0),i.capa("upz",!0,0),i.capa("edif",!1,0)},beats:[{t:"La diferencia de densidad entre Patio Bonito y Tintal Norte evidencia que la demanda de servicios no se distribuye de manera uniforme.",a:i=>{i.upzAlto(!0),i.titulo("Par 05 · *Población*",{kick:"demanda no uniforme",width:40}),i.et("upb",{p:[i.LUG.patio[0],700,i.LUG.patio[1]],t:"Patio Bonito",s:"435 hab/ha",delay:.8}),i.et("utn",{p:[i.LUG.tintal[0],320,i.LUG.tintal[1]],t:"Tintal Norte",s:"90 hab/ha",delay:1.1})}},{t:"Por eso, la propuesta incorpora equipamientos de proximidad en sectores deficitarios y plantea proteger espacios productivos, comunitarios y ecológicos frente a las presiones inmobiliarias.",a:i=>{i.limpiar(),i.quitarEts(),i.mercados(!0,.45),i.aparecer("pD"),i.lista("prox",{left:7,top:"22vh",items:["Equipamientos de proximidad","Proteger lo productivo, comunitario y ecológico"]})}},{t:"En esta prueba introducimos el mismo crecimiento poblacional en ambos escenarios.",a:i=>{i.limpiar(),i.upzAlto(!0,1.35),i.titulo("Mismo *crecimiento* en ambos escenarios",{width:44,cls:"chico"})}},{t:"El análisis permite estudiar dónde se concentra ese crecimiento, qué servicios reciben los habitantes y cómo evolucionan los usos del suelo.",a:i=>{i.limpiar(),i.foto("usos",{src:Wt("usos.jpg"),right:"6vw",top:"20vh",width:40,height:"50vh",cap:"<b>simulador</b> · usos del suelo"}),i.lista("q",{left:7,top:"24vh",items:["¿Dónde crece?","¿Qué servicios recibe?","¿Cómo cambian los usos?"],n:["?","?","?"]})}},{t:"Desde el enfoque ecocéntrico, el valor del territorio también se evalúa mediante su capacidad de mantener biodiversidad, conectividad e interacciones ecológicas.",a:i=>{i.limpiar(),i.upzAlto(!1),i.capa("edif",!0,.3),i.mercados(!1),i.capa("pD",!1),i.cam("humedal",2.4),i.capa("agua"),i.corredor(1,2.5),i.capa("especies"),i.titulo("El valor del suelo también es *ecológico*",{width:44,cls:"chico"})}},{t:"Así se reconocen las tensiones entre crecimiento urbano, presión inmobiliaria y capacidad de soporte ecológico.",a:i=>{i.limpiar(),i.tarjeta("t1",{k:"tensión",t:"Crecimiento urbano",left:40,top:"18vh"}),i.tarjeta("t2",{k:"tensión",t:"Presión inmobiliaria",left:14,top:"58vh",delay:.3}),i.tarjeta("t3",{k:"tensión",t:"Soporte ecológico",right:"12vw",top:"58vh",delay:.6,cls:"on"})}}]},{n:"14",nombre:"Sexto par · distribución de recursos",cam:"bav",tr:"escalera",base:i=>{i.gris(.7,0),i.capa("agua",!0,0)},beats:[{t:"La distribución de infraestructuras requiere también capacidades de organización y gestión.",a:i=>{i.titulo("Par 06 · *Recursos*",{kick:"organización y gestión",width:40})}},{t:"Entre los actores del territorio se encuentra el colectivo Salvemos el Bosque de Bavaria, cuya labor se relaciona con la protección de este ecosistema.",a:i=>{i.limpiar(),i.foco(i.LUG.bavaria,800,"#9be15d"),i.capa("bavaria"),i.foto("sbb",{src:Wt("logo_bosque_bavaria.png"),right:"8vw",top:"22vh",width:24,height:"24vw",cap:"<b>colectivo</b> · Salvemos el Bosque de Bavaria"})}},{t:"La propuesta plantea una federación de asambleas con vocerías rotativas para coordinar iniciativas comunitarias, productivas y ambientales.",a:i=>{if(i.limpiar(),i.sinFoco(),i.capa("bavaria",!1),i.cam("alto",2.4),i.mercados(!0,.4),i.titulo("Federación de asambleas · vocería *rotativa*",{width:46,cls:"chico"}),!i.R.rapido){let e=0;const t=()=>{i.W.mercados.forEach((n,r)=>n.userData.n.scale.setScalar(r===e%i.W.mercados.length?2.6:1)),e++};t(),i.gsap.to({},{duration:.6,repeat:30,onRepeat:t})}}},{t:"La sexta prueba compara la distribución territorial de recursos limitados ante necesidades simultáneas en diferentes sectores.",a:i=>{i.limpiar(),i.capa("upz"),i.upzAlto(!0,.5),i.titulo("Recursos *limitados*, necesidades *simultáneas*",{width:46,cls:"chico"})}},{t:"Observamos qué equipamientos pueden habilitarse, qué necesidades se atienden y qué sectores permanecen sin cobertura.",a:i=>{i.limpiar(),i.W.mercados.forEach((e,t)=>{t%3===2&&i.tw(e.userData.ar.scale,{x:.001,y:.001,duration:i.D(.6),ease:"steps(4)",delay:i.D(t*.05)})}),i.lista("rec",{left:7,top:"22vh",items:["¿Qué se habilita?","¿Qué se atiende?","¿Qué queda sin cobertura?"],n:["✓","✓","✕"]})}},{t:"Esta simulación explora las consecuencias espaciales de distribuir recursos. La evaluación completa del funcionamiento político de la gobernanza heterárquica permanece como una posibilidad de desarrollo futuro.",a:i=>{i.limpiar(),i.upzAlto(!1),i.titulo("Gobernanza heterárquica: *desarrollo futuro*",{cls:"centro chico"})}}]},{n:"15",nombre:"Indicadores, condiciones críticas y Game Over",cam:"alto",tr:"recorte",base:i=>{i.gris(.8,0),i.capa("agentes",!0,0)},beats:[{t:"Los resultados de las doce simulaciones se comparan en momentos equivalentes, identificando qué condiciones cambian, dónde ocurre esa transformación y durante cuánto tiempo se mantiene.",a:i=>{i.titulo("12 simulaciones · *momentos equivalentes*",{width:50,cls:"chico"}),i.lista("qd",{left:8,top:"44vh",items:["Qué cambia","Dónde","Cuánto dura"]})}},{t:"Desde el comercio ecológico, se evalúa la producción local, la autonomía alimentaria y la accesibilidad a mercados.",a:i=>{i.limpiar(),i.tarjeta("g1",{k:"comercio ecológico",t:"Producción local · autonomía · accesibilidad",left:6,top:"24vh",cls:"on"}),i.mercados(!0,.4)}},{t:"Desde la circularidad, el aprovechamiento de residuos y la reincorporación de nutrientes.",a:i=>{i.marcar("g1","on",!1),i.tarjeta("g2",{k:"circularidad",t:"Residuos aprovechados · nutrientes",left:37,top:"24vh",cls:"on"}),i.estaciones(!0)}},{t:"Y desde el ecocentrismo, la diversidad de especies, las interacciones bióticas, la continuidad de corredores y los ciclos biogeoquímicos del agua, el carbono y los nutrientes.",a:i=>{i.marcar("g2","on",!1),i.tarjeta("g3",{k:"ecocentrismo",t:"Especies · interacciones · corredores · ciclos",right:"6vw",top:"24vh",cls:"on"}),i.corredor(1,2),i.capa("agua")}},{t:"Para identificar los límites de funcionamiento se plantearon condiciones de Game Over.",a:i=>{i.limpiar(),i.mercados(!1),i.gameover(),i.gris(1,.4),i.temblor()}},{t:"En abastecimiento, cuando un sector recibe menos del 80 % de los alimentos que necesita.",a:i=>{i.limpiar(),i.dato("g80",{v:80,pre:"< ",suf:"%",l:"abastecimiento · alimentos recibidos por sector",left:6,top:"22vh",chico:!0}),i.aparecer("pA")}},{t:"En residuos, cuando la acumulación supera la capacidad disponible de almacenamiento.",a:i=>{i.bloque("gres",'<div class="vid" style="position:relative;width:26vw"><div class="mono" style="color:var(--coral)">residuos</div><div style="font:800 36px var(--f);letter-spacing:-.04em;margin-top:8px">acumulación &gt; capacidad</div></div>',{left:37,top:"26vh"}),i.aparecer("pE")}},{t:"Y en biodiversidad, cuando la presencia de especies se reduce un 30 % o más respecto a las condiciones iniciales, según el indicador definido.",a:i=>{i.dato("g30",{v:30,pre:"−",suf:"%",l:"biodiversidad · presencia de especies o más",right:"6vw",top:"22vh",chico:!0})}},{t:"Estas condiciones se comprueban durante cuatro semanas consecutivas para distinguir fluctuaciones temporales de situaciones persistentes.",a:i=>{i.bloque("sem",`<div style="display:flex;gap:12px">${[1,2,3,4].map(e=>`<div class="vid s" style="position:relative;width:13vw;padding:18px"><div class="mono">semana ${e}</div><div class="b" style="height:10px;margin-top:14px;background:rgba(245,243,235,.12)"><i style="display:block;height:100%;width:0;background:var(--coral)"></i></div></div>`).join("")}</div>`,{left:14,top:"62vh"}),i.tw(i.el("sem").querySelectorAll("i"),{width:"100%",duration:i.D(.7),ease:"steps(5)",stagger:i.D(.7)})}},{t:"Basta con que se cumpla una de estas condiciones para activar el Game Over.",a:i=>{i.limpiar(),i.gameover(),i.temblor(),i.foco([0,0],6e3,"#E36C4B",.6)}},{t:"Cuando se alcanza un límite, el simulador registra el indicador afectado, su localización y la semana correspondiente.",a:i=>{i.limpiar(),i.sinFoco(),i.bloque("log",'<div class="vid" style="position:relative;width:40vw;font:500 18px var(--m);line-height:2"><div style="color:var(--coral)">● GAME OVER REGISTRADO</div><div>indicador ......... <span class="ty"></span></div><div>localización ...... <span class="ty"></span></div><div>semana ............ <span class="ty"></span></div></div>',{left:30,top:"30vh"});const e=["afectado","sector","n.º"];i.el("log").querySelectorAll(".ty").forEach((t,n)=>{if(i.R.rapido){t.textContent=e[n];return}const r={n:0};i.gsap.to(r,{n:e[n].length,duration:.6,delay:.5+n*.6,ease:"steps("+e[n].length+")",onUpdate:()=>t.textContent=e[n].slice(0,Math.round(r.n))+"▌"})})}},{t:"La comparación permite identificar cuáles intervenciones responden a los criterios de diseño, cuáles requieren ajustes y qué nuevas vulnerabilidades pueden surgir.",a:i=>{i.limpiar(),i.gris(.5),i.lista("res",{left:8,top:"30vh",items:["Responden a los criterios","Requieren ajustes","Nuevas vulnerabilidades"],n:["✓","↻","!"]})}}]},{n:"16",nombre:"Límites del modelo",cam:"alto",tr:"persiana",base:i=>{i.gris(1,0)},beats:[{t:"Los resultados dependen de las condiciones representadas en el modelo.",a:i=>{i.titulo("Los resultados dependen de lo *representado*",{cls:"centro chico"})}},{t:"La producción alimentaria está limitada por la superficie disponible y el rendimiento de los cultivos.",a:i=>{i.limpiar(),i.tarjeta("l1",{k:"límite",t:"Producción alimentaria",d:"superficie disponible · rendimiento de cultivos",left:7,top:"24vh"})}},{t:"El aprovechamiento de residuos depende de las capacidades de tratamiento, mientras las interacciones ecológicas requieren representar adecuadamente las necesidades de cada especie.",a:i=>{i.tarjeta("l2",{k:"límite",t:"Residuos",d:"capacidades de tratamiento",left:37,top:"24vh"}),i.tarjeta("l3",{k:"límite",t:"Interacciones ecológicas",d:"necesidades de cada especie",right:"6vw",top:"24vh",delay:.4})}},{t:"Por eso, las simulaciones no constituyen una predicción exacta del futuro de Kennedy.",a:i=>{i.limpiar(),i.titulo("No es una ~predicción exacta~",{cls:"centro"})}},{t:"Su aporte consiste en comparar decisiones, explorar sus consecuencias y reconocer las condiciones necesarias para que las intervenciones mantengan su funcionamiento.",a:i=>{i.limpiar(),i.gris(.3,2),i.capa("agentes"),i.lista("ap",{left:8,top:"28vh",items:["Comparar decisiones","Explorar consecuencias","Reconocer condiciones necesarias"]})}}]},{n:"17",nombre:"Cierre · posibilidades futuras",cam:"alto",tr:"vuelo",base:i=>{i.gris(.3,0),i.capa("agua",!0,0)},beats:[{t:"La investigación permitió pasar del análisis del POT al reconocimiento de las relaciones territoriales de Kennedy, convirtiendo los indicadores del diagnóstico en criterios de diseño que orientan una propuesta urbano-arquitectónica.",a:i=>{i.lista("rec",{left:7,top:"24vh",items:["POT","Relaciones territoriales","Indicadores","Criterios de diseño","Propuesta"],n:["→","→","→","→","●"]});const e=["red-pot","red6","mercados"];e.forEach((t,n)=>i.gsap.delayedCall(i.R.rapido?0:n*1.3,()=>{e.forEach(r=>i.capa(r,!1,.3)),t==="mercados"?i.mercados(!0,.5):i.capa(t)}))}},{t:"La evaluación se concentra en el macromodelo ecocéntrico, la circularidad de recursos y el comercio ecológico.",a:i=>{i.limpiar(),i.capas(["red6","red-pot"],!1),i.estaciones(!0),i.corredor(1,2),i.tarjeta("e1",{k:"principal",t:"Ecocentrismo",left:37,top:"22vh",cls:"on"}),i.tarjeta("e2",{t:"Circularidad",left:10,top:"56vh",delay:.3}),i.tarjeta("e3",{t:"Comercio ecológico",right:"10vw",top:"56vh",delay:.5})}},{t:"Sin embargo, otros enfoques, como el hidrocéntrico, el regenerativo, la autonomía territorial, las redes de cuidado y la gobernanza heterárquica, amplían las posibilidades del proyecto",a:i=>{i.limpiar();const e=["Hidrocéntrico","Regenerativo","Autonomía territorial","Redes de cuidado","Gobernanza heterárquica"];e.forEach((t,n)=>{const r=n/e.length*Math.PI*2-Math.PI/2;i.tarjeta("f"+n,{k:"enfoque futuro",t,left:40+Math.cos(r)*30,top:42+Math.sin(r)*28+"vh",delay:n*.18})})}},{t:"y requieren nuevas reglas e indicadores para comprobar su funcionamiento.",a:i=>{i.titulo("Nuevas *reglas* e *indicadores*",{cls:"centro chico"})}},{t:"Kennedy constituye el área de estudio donde se ponen a prueba estas relaciones, permitiendo explorar futuras aplicaciones del modelo a otras escalas de Bogotá.",a:i=>{i.limpiar(),i.mercados(!1),i.cam("lejos",5),i.titulo("Kennedy → *otras escalas* de Bogotá",{width:50,cls:"chico"})}},{t:"Así, el proyecto plantea una forma de diseñar la ciudad desde sus interdependencias, comprendiendo que cada intervención modifica múltiples dinámicas y que sus consecuencias pueden evaluarse antes de su materialización.",a:i=>{i.limpiar(),i.cam("alto",4),i.capa("agentes"),i.capa("flujos"),i.titulo("Diseñar la ciudad desde sus *interdependencias*",{cls:"centro"})}},{t:"Muchas gracias.",a:i=>{i.limpiar(),i.capas(["red6","red-pot"],!1),i.capas(["especies","vias-prin"]),i.titulo("Muchas *gracias*",{cls:"centro"}),i.bloque("aut",'<span class="mono" style="color:#b9bcb3">Kennedy · modelamiento dinámico y simulación</span>',{left:38,top:"64vh"})}}]}],ji=new BroadcastChannel("kennedy-presentacion"),t1=new URLSearchParams(location.search).has("presentador"),or=[];bs.forEach((i,e)=>i.beats.forEach((t,n)=>or.push({...t,ci:e,bi:n})));const Ca=or.length,Qu={alto:{p:[2200,7600,7e3],o:[0,0,300],nom:"Localidad de Kennedy"},portada:{p:[-4200,3200,5200],o:[-500,200,0]},pot:{p:[0,3300,6200],o:[0,800,0],nom:"Red multicapa del POT"},capas:{p:[6200,3600,6200],o:[0,1300,0]},red6:{p:[450,3400,4300],o:[450,950,0],nom:"Red de seis problemas"},mapa:{p:[0,8800,3600],o:[0,0,200],nom:"Conectografía · Kennedy"},cora:{p:[385,1700,2132],o:[-715,0,-168],nom:"Corabastos"},coraCerca:{p:[-215,650,782],o:[-715,60,-168],nom:"Corabastos"},mariapaz:{p:[167,900,915],o:[-533,0,-385],nom:"María Paz"},bav:{p:[3619,1600,1033],o:[2119,100,-1067],nom:"Bavaria"},bavCerca:{p:[2819,750,-67],o:[2119,150,-1067],nom:"Bavaria · naves"},oeste:{p:[-1200,4300,5600],o:[-1300,200,-600],nom:"Patio Bonito · Tintal Norte"},humedal:{p:[-1200,1600,2600],o:[-900,0,900],nom:"Humedales y corredores"},lejos:{p:[9e3,26e3,26e3],o:[0,0,0],nom:"Bogotá"}},jt={p:new L(...Qu.portada.p),o:new L(...Qu.portada.o)};function bg(i,e=2.2){const t=typeof i=="string"?Qu[i]:i;if(Ie.killTweensOf(jt.p),Ie.killTweensOf(jt.o),Dt.rapido||e===0){jt.p.set(...t.p),jt.o.set(...t.o);return}const n=new L(...t.o),r=new L(...t.p),s=jt.p.distanceTo(jt.o),a=r.distanceTo(n),o=jt.o.distanceTo(n),c=(l,u,d,h,f=0)=>{Ie.to(jt.p,{x:l.x,y:l.y,z:l.z,duration:d,ease:h,delay:f}),Ie.to(jt.o,{x:u.x,y:u.y,z:u.z,duration:d,ease:h,delay:f})};if(o>1800){const l=jt.o.clone().lerp(n,.5),u=Math.max(s,a,o*1.15),d=jt.p.clone().sub(jt.o).normalize().lerp(r.clone().sub(n).normalize(),.5).normalize(),h=l.clone().add(d.multiplyScalar(u));Go("out"),c(h,l,e*.45,"power2.inOut"),Ie.delayedCall(e*.45,()=>Go("in",t.nom||"")),c(r,n,e*.6,"expo.out",e*.45)}else a<s*.8?Go("in",t.nom||""):a>s*1.25&&Go("out",t.nom||""),c(r,n,e,"expo.inOut")}const _p=(i,e,t,n=1,r="expo.out")=>{const s=Zd(i);s!=null&&s[e]&&Rt(s[e],{value:t,duration:_e(n),ease:r})},_c={...VT,R:Dt,D:_e,tw:Rt,twf:kt,gsap:Ie,W:j,LUG:Ku,COL_P:Za,NOM_P:Kd,CAPAS_POT:Aa,cam:bg,uTo:_p,capa:(i,e=!0,t=.9)=>jn(i,e,_e(t)),capas:(i,e=!0)=>i.forEach(t=>jn(t,e,_e(.9))),sube(i=1,e=Ku.corabastos,t=3){const n=j.capas.edif.userData.u;n.uOri.value.set(e[0],e[1]),Rt(n.uSube,{value:i,duration:_e(t),ease:"power2.out"})},foco(i,e=900,t="#C7FF27",n=1.2){const r=j.capas.edif.userData.u;i&&r.uFoco.value.set(i[0],i[1]),r.uFC.value.set(t),Rt(r.uFR,{value:e,duration:_e(n),ease:"expo.out"})},sinFoco(i=.8){Rt(j.capas.edif.userData.u.uFR,{value:0,duration:_e(i)})},gris(i=1,e=1){Rt(j.capas.edif.userData.u.uGris,{value:i,duration:_e(e)})},aparecer(i,e=1,t=1.6){jn(i,!0,_e(.2)),_p(i,"uAp",e,t,"steps(12)")},arista(i,e=1.1){const t=j.red6.tubos[i],n=t.userData.punta;Rt(n.scale,{x:1,y:1,z:1,duration:_e(.3),ease:"back.out(3)",delay:_e(e*.9)}),Sg("adj",t.userData.a,t.userData.b);const r={v:t.geometry.drawRange.count===1/0?0:t.geometry.drawRange.count};Rt(r,{v:t.userData.total,duration:_e(e),ease:"steps(14)",onUpdate:()=>t.geometry.setDrawRange(0,Math.floor(r.v/3)*3)}),Dt.rapido&&t.geometry.setDrawRange(0,t.userData.total)},nodo6(i,e,t=.8){const n=j.red6.nod[i],r=n.userData.r*e;Rt(n.scale,{x:r,y:r,z:r,duration:_e(t),ease:"back.out(2)"})},aSuelo(i=!0,e=2.4){Object.entries(j.red6.nod).forEach(([t,n],r)=>{const s=i?j.red6Suelo[t]:j.red6.P[t];Rt(n.position,{x:s.x,y:s.y,z:s.z,duration:_e(e),ease:"expo.inOut",delay:_e(r*.08)})}),j.red6.tubos.forEach(t=>{Rt(t.material,{opacity:i?0:.9,duration:_e(.6)}),Rt(t.userData.punta.material,{opacity:i?0:.95,duration:_e(.6)})})},upzAlto(i=!0,e=1,t=1.6){Object.values(j.upz).forEach(({m:n},r)=>Rt(n.scale,{y:i?n.userData.h*e:.001,duration:_e(t),ease:"steps(10)",delay:_e(r*.05)}))},mercados(i=!0,e=1){j.mercados.forEach((t,n)=>{const{ar:r,disco:s,n:a}=t.userData;Rt([r.scale,s.scale],{x:i?e:.001,y:i?e:.001,z:1,duration:_e(1.1),ease:"expo.out",delay:_e(n*.09)}),Rt(a.scale,{x:i?1:.001,y:i?1:.001,z:i?1:.001,duration:_e(.6),ease:"back.out(2)",delay:_e(n*.09)})}),i&&jn("mercados",!0,_e(.3))},estaciones(i=!0){jn("estaciones",!0,_e(.2)),j.estaciones.forEach((e,t)=>Rt(e.scale,{x:i?1:.001,y:i?1:.001,z:i?1:.001,duration:_e(.7),ease:"back.out(2)",delay:_e(t*.12)}))},corredor(i=1,e=2.4){jn("corredores",!0,_e(.2));const t=j.corredor,n={v:t.geometry.drawRange.count===1/0?0:t.geometry.drawRange.count};Rt(n,{v:i*t.userData.total,duration:_e(e),ease:"steps(20)",onUpdate:()=>t.geometry.setDrawRange(0,Math.floor(n.v/3)*3)}),Dt.rapido&&t.geometry.setDrawRange(0,Math.floor(i*t.userData.total/3)*3)},capas18(i){jn("capas18",i!=="fuera",_e(.6)),j.capasPl.forEach((e,t)=>{if(i==="apila"&&kt(e.position,{y:-200},{y:e.userData.y0,duration:_e(.6),ease:"expo.out",delay:_e(t*.08)}),i==="nueve"){const n=Math.floor(t/2);Rt(e.position,{y:300+n*240,duration:_e(1.2),ease:"steps(8)",delay:_e(n*.05)})}})},agentesVel(i){Dt.rapido?j.agentes.vel=i:Ie.to(j.agentes,{vel:i,duration:1.5})},despiece(i,e=1.6){j.pot.planos.forEach((t,n)=>Rt(t.position,{y:n*i,duration:_e(e),ease:"steps(12)",delay:_e(n*.04)}))},temblor(){Dt.rapido||Ie.fromTo("#mundo, #escena",{x:0},{x:()=>(Math.random()-.5)*30,y:()=>(Math.random()-.5)*20,duration:.06,repeat:8,yoyo:!0,ease:"steps(1)",clearProps:"transform"})}},n1=["losa","edif","vias","vias-prin","flujos","agua","upz","pA","pB","pC","pD","pE","pF","iso","metro","red-pot","red6","mercados","corabastos","estaciones","corredores","agentes","especies","capas18","bavaria"];function i1(){n1.forEach(e=>jn(e,!1,0)),[..."ABCDEF"].forEach(e=>{const t=Zd("p"+e);t&&(t.uAp.value=0,t.uS.value=e==="F"?90:e==="B"?10:22)});const i=j.capas.edif.userData.u;i.uFR.value=0,i.uGris.value=0,Object.values(j.upz).forEach(({m:e})=>e.scale.y=.001),j.red6.tubos.forEach(e=>{e.geometry.setDrawRange(0,0),e.material.opacity=.9,e.userData.punta.scale.setScalar(.001),e.userData.punta.material.opacity=.95}),Object.entries(j.red6.nod).forEach(([e,t])=>{t.position.copy(j.red6.P[e]),t.scale.setScalar(t.userData.r)}),j.pot.planos.forEach((e,t)=>e.position.y=t*150),j.mercados.forEach(e=>{e.userData.ar.scale.setScalar(.001),e.userData.disco.scale.setScalar(.001),e.userData.n.scale.setScalar(.001)}),j.estaciones.forEach(e=>e.scale.setScalar(.001)),j.corredor.geometry.setDrawRange(0,0),j.capasPl.forEach(e=>e.position.y=e.userData.y0),j.pot.nodos.forEach(e=>e.scale.setScalar(e.userData.r)),j.agentes.vel=1}function vp(i){var t;const e=bs[i];i1(),xg(),jn("losa",!0,0),jn("edif",!0,0),jn("vias",!0,0),j.capas.edif.userData.u.uSube.value=1,(t=e.base)==null||t.call(e,_c),e.cam&&bg(e.cam,0),document.querySelector("#hud-sec b").textContent=e.n,document.querySelector("#hud-sec span").textContent=e.nombre}let rn=-1,vc=!1;async function Fl(i,e){var r;const t=or[i],n=bs[t.ci];if(t.bi===0)if(e&&!Dt.rapido&&i>0){vg(),await new Promise(s=>setTimeout(s,260)),await WT(n.tr||"pliegue",()=>{var s;vp(t.ci),(s=t.a)==null||s.call(t,_c)});return}else vp(t.ci);(r=t.a)==null||r.call(t,_c)}async function wr(i,e=!0){if(i=Math.max(0,Math.min(Ca-1,i)),e&&i===rn+1){vc=!0,rn=i,Xu(),await Fl(i,!0),vc=!1;return}const t=or[i],n=i-t.bi;Ie.globalTimeline.clear(),Dt.rapido=!0;for(let r=n;r<i;r++)await Fl(r,!1);Dt.rapido=!e,await Fl(i,!1),Dt.rapido=!1,rn=i,Xu()}const xa=()=>{vc||wr(rn+1)},Wo=()=>{!vc&&rn>0&&wr(rn-1)};function Xu(){const i=or[rn],e=or[rn+1],t=bs[i.ci];document.getElementById("hud-n").textContent=String(rn+1).padStart(3,"0")+" / "+Ca,document.querySelector("#hud-prog i").style.width=(rn+1)/Ca*100+"%",document.getElementById("subtitulo").textContent=i.t,history.replaceState(null,"","#"+(rn+1)),ji.postMessage({tipo:"estado",n:rn,total:Ca,cap:t.n+" · "+t.nombre,ahora:i.t,sig:e?e.t:"— fin —",sigCap:e&&e.bi===0?bs[e.ci].n+" · "+bs[e.ci].nombre:""})}let us=null;function r1(){if(us){clearTimeout(us),us=null,Ra();return}const i=()=>{var t;if(rn>=Ca-1){us=null,Ra();return}xa();const e=((t=or[rn+1])==null?void 0:t.t.split(/\s+/).length)||8;us=setTimeout(i,Math.max(2600,e*400))};i(),Ra()}function Ra(){document.getElementById("hud-modo").textContent=[j.stop?"STOP-MOTION 12 FPS":"FLUIDO",us?"AUTO":""].filter(Boolean).join(" · ")}const Eg=document.getElementById("grano");function s1(){const i=document.createElement("canvas");i.width=i.height=256;const e=i.getContext("2d"),t=e.createImageData(256,256);for(let n=0;n<t.data.length;n+=4){const r=Math.random()*255;t.data[n]=t.data[n+1]=t.data[n+2]=r,t.data[n+3]=255}e.putImageData(t,0,0),Eg.style.backgroundImage=`url(${i.toDataURL()})`}function a1(){var r,s,a,o,c;const i=Ie.ticker.time;j.t=i;const e=j.stop?1/12:Ie.ticker.deltaRatio()/60,t=jt.p.clone().sub(jt.o);t.applyAxisAngle(new L(0,1,0),Math.sin(i*.06)*.22+Math.sin(i*.017)*.15),t.multiplyScalar(1+Math.sin(i*.33)*.015),j.cam.position.copy(jt.o).add(t);const n=jt.o.clone();if(j.stop){const l=t.length()*9e-4;j.cam.position.x+=(Math.random()-.5)*l,j.cam.position.y+=(Math.random()-.5)*l,n.x+=(Math.random()-.5)*l}j.cam.lookAt(n),["vias-prin","flujos","iso","metro","red-pot","agentes","pA","pB","pC","pD","pE","pF"].forEach(l=>{const u=Zd(l);u!=null&&u.uT&&(u.uT.value=i)}),pT(e),gT(i),xT(i),(r=j.estaciones)==null||r.forEach(l=>{l.userData.a.rotation.z=i*.8,l.userData.b.rotation.y=i*1.3}),(s=j.coraAros)==null||s.forEach((l,u)=>l.rotation.z=i*(u?-.2:.3)),(a=j.mercados)==null||a.forEach((l,u)=>l.userData.n.rotation.y=i*1.2+u),(o=j.pot)==null||o.actualizar(i),(c=j.red6)!=null&&c.grp&&(j.red6.grp.rotation.y=Math.sin(i*.15)*.12),j.arco.material.opacity=.25+Math.sin(i*1.05)*.12,j.polvo.rotation.y=i*.01,j.r.render(j.scene,j.cam),Mg(),e1(jt.o),j.stop&&(document.getElementById("escena").style.transform=`translate(${(Math.random()-.5)*2}px, ${(Math.random()-.5)*2}px) rotate(${(Math.random()-.5)*.12}deg)`,Eg.style.backgroundPosition=`${Math.random()*256|0}px ${Math.random()*256|0}px`)}function o1(){j.stop=!j.stop,Ie.ticker.fps(j.stop?12:60),j.stop||(document.getElementById("escena").style.transform=""),Ra()}async function c1(){s1(),await oT(document.getElementById("mundo")),Ie.ticker.fps(12),Ie.ticker.add(a1),Ra(),window.__k={ir:wr,sig:xa,ant:Wo,BEATS:or,X:_c,W:j};const i=parseInt(location.hash.slice(1),10),e=()=>{document.getElementById("inicio").remove(),document.body.classList.add("presentando"),i>1?wr(i-1,!1):wr(0)};document.getElementById("empezar").onclick=e,new URLSearchParams(location.search).has("directo")&&e(),addEventListener("keydown",t=>{if(document.getElementById("inicio")){(t.key==="Enter"||t.key===" ")&&e();return}const n=t.key;["ArrowRight","PageDown"," ","Enter","ArrowDown"].includes(n)?(t.preventDefault(),xa()):["ArrowLeft","PageUp","ArrowUp","Backspace"].includes(n)?(t.preventDefault(),Wo()):n==="f"||n==="F"?document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen():n==="s"||n==="S"?o1():n==="t"||n==="T"?document.body.classList.toggle("subs"):n==="a"||n==="A"?r1():n==="p"||n==="P"?window.open(location.pathname+"?presentador","presentadora","width=1100,height=700"):n==="Home"?wr(0,!1):(n==="b"||n==="B")&&(document.getElementById("escena").style.opacity=document.getElementById("escena").style.opacity==="0"?"":"0")}),addEventListener("click",t=>{!document.getElementById("inicio")&&t.button===0&&xa()}),addEventListener("contextmenu",t=>{t.preventDefault(),Wo()}),ji.onmessage=t=>{t.data.cmd==="sig"&&xa(),t.data.cmd==="ant"&&Wo(),t.data.cmd==="pedir"&&rn>=0&&Xu(),t.data.cmd==="ir"&&wr(t.data.n,!1)}}function l1(){document.body.className="presentadora",document.body.innerHTML=`<div class="pres"><div class="pres-cab"><span id="pc"></span><span class="pres-reloj" id="pr">00:00</span><span><b id="pn"></b></span></div>
    <div class="pres-ahora" id="pa">Esperando la presentación…</div><div class="pres-sig" id="ps"></div>
    <div class="pres-pie"><button id="bA">← Anterior</button><button class="sig" id="bS">Siguiente frase →</button></div></div>`;let i=null;ji.onmessage=e=>{const t=e.data;t.tipo==="estado"&&(i||(i=Date.now()),document.getElementById("pc").textContent=t.cap,document.getElementById("pn").textContent=t.n+1+" / "+t.total,document.getElementById("pa").textContent=t.ahora,document.getElementById("ps").textContent=(t.sigCap?"["+t.sigCap+"] ":"")+t.sig)},setInterval(()=>{if(!i)return;const e=Math.floor((Date.now()-i)/1e3);document.getElementById("pr").textContent=String(Math.floor(e/60)).padStart(2,"0")+":"+String(e%60).padStart(2,"0")},500),document.getElementById("bS").onclick=()=>ji.postMessage({cmd:"sig"}),document.getElementById("bA").onclick=()=>ji.postMessage({cmd:"ant"}),addEventListener("keydown",e=>{["ArrowRight","PageDown"," ","Enter"].includes(e.key)&&(e.preventDefault(),ji.postMessage({cmd:"sig"})),["ArrowLeft","PageUp"].includes(e.key)&&(e.preventDefault(),ji.postMessage({cmd:"ant"}))}),ji.postMessage({cmd:"pedir"})}t1?l1():c1();
