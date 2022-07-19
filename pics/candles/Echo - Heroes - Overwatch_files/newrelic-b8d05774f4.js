window.NREUM||(NREUM={}),__nr_require=function(n,o,t){function r(e){var t;return o[e]||(t=o[e]={exports:{}},n[e][0].call(t.exports,function(t){return r(n[e][1][t]||t)},t,t.exports)),o[e].exports}if("function"==typeof __nr_require)return __nr_require;for(var e=0;e<t.length;e++)r(t[e]);return r}({1:[function(t,e,n){function o(t){try{a.console&&console.log(t)}catch(t){}}var r,i=t("ee"),t=t(20),a={};try{r=localStorage.getItem("__nr_flags").split(","),console&&"function"==typeof console.log&&(a.console=!0,-1!==r.indexOf("dev")&&(a.dev=!0),-1!==r.indexOf("nr_dev")&&(a.nrDev=!0))}catch(t){}a.nrDev&&i.on("internal-error",function(t){o(t.stack)}),a.dev&&i.on("fn-err",function(t,e,n){o(n.stack)}),a.dev&&(o("NR AGENT IN DEVELOPMENT MODE"),o("flags: "+t(a,function(t,e){return t}).join(", ")))},{}],2:[function(e,t,n){function i(t,e,n){this.message=t||"Uncaught error with no additional information",this.sourceURL=e,this.line=n}function a(t,e){e=e?null:f.now();s("err",[t,e])}var s=e("handle"),c=e(21),o=e("ee"),f=e("loader"),r=e("gos"),u=window.onerror,d=!1,p="nr@seenError",h=0;f.features.err=!0,e(1),window.onerror=function(t,e,n,o,r){try{h?--h:a(r||new i(t,e,n),!0)}catch(t){try{s("ierr",[t,f.now(),!0])}catch(t){}}return"function"==typeof u&&u.apply(this,c(arguments))};try{throw new Error}catch(t){"stack"in t&&(e(13),e(12),"addEventListener"in window&&e(6),f.xhrWrappable&&e(14),d=!0)}o.on("fn-start",function(t,e,n){d&&(h+=1)}),o.on("fn-err",function(t,e,n){d&&!n[p]&&(r(n,p,function(){return!0}),this.thrown=!0,a(n))}),o.on("fn-end",function(){d&&!this.thrown&&0<h&&--h}),o.on("internal-error",function(t){s("ierr",[t,f.now(),!0])})},{}],3:[function(t,e,n){t("loader").features.ins=!0},{}],4:[function(t,e,n){function o(){y++,v=j.hash,this[x]=L.now()}function r(){y--,j.hash!==v&&i(0,!0);var t=L.now();this.jsTime=~~this.jsTime+t-this[x],this[E]=t}function i(t,e){f.emit("newURL",[""+j,e])}function a(t,e){t.on(e,function(){this[e]=L.now()})}var s,c,f,u,d,p,h,l,m,w,v,y,b="-start",g="-end",x="fn"+b,E="fn"+g,P="cb"+b,R="fetch",O="addEventListener",T=window,j=T.location,L=t("loader");T[O]&&L.xhrWrappable&&(s=t(10),c=t(11),f=t(8),u=t(6),d=t(13),p=t(7),h=t(14),l=t(9),w=(m=t("ee")).get("tracer"),t(15),L.features.spa=!0,y=0,m.on(x,o),m.on(P,o),m.on(E,r),m.on("cb-end",r),m.buffer([x,E,"xhr-done","xhr-resolved"]),u.buffer([x]),d.buffer(["setTimeout"+g,"clearTimeout"+b,x]),h.buffer([x,"new-xhr","send-xhr"+b]),p.buffer([R+b,R+"-done",R+"-body"+b,R+"-body"+g]),f.buffer(["newURL"]),s.buffer([x]),c.buffer(["propagate",P,"cb-end","executor-err","resolve"+b]),w.buffer([x,"no-"+x]),l.buffer(["new-jsonp","cb-start","jsonp-error","jsonp-end"]),a(h,"send-xhr"+b),a(m,"xhr-resolved"),a(m,"xhr-done"),a(p,R+b),a(p,R+"-done"),a(l,"new-jsonp"),a(l,"jsonp-end"),a(l,"cb-start"),f.on("pushState-end",i),f.on("replaceState-end",i),T[O]("hashchange",i,!0),T[O]("load",i,!0),T[O]("popstate",function(){i(0,1<y)},!0))},{}],5:[function(t,e,n){function o(t){}var r,i,a,s,c,f,u,d,p,h,l,m,w,v,y;window.performance&&window.performance.timing&&window.performance.getEntriesByType&&(r=t("ee"),i=t("handle"),a=t(13),s=t(12),c="learResourceTimings",f="addEventListener",u="resourcetimingbufferfull",d="bstResource",p="resource",h="fn-start",l="fn-end",m="bstTimer",w="pushState",(v=t("loader")).features.stn=!0,t(8),y=NREUM.o.EV,r.on(h,function(t,e){t[0]instanceof y&&(this.bstStart=v.now())}),r.on(l,function(t,e){t=t[0];t instanceof y&&i("bst",[t,e,this.bstStart,v.now()])}),a.on(h,function(t,e,n){this.bstStart=v.now(),this.bstType=n}),a.on(l,function(t,e){i(m,[e,this.bstStart,v.now(),this.bstType])}),s.on(h,function(){this.bstStart=v.now()}),s.on(l,function(t,e){i(m,[e,this.bstStart,v.now(),"requestAnimationFrame"])}),r.on(w+"-start",function(t){this.time=v.now(),this.startPath=location.pathname+location.hash}),r.on(w+"-end",function(t){i("bstHist",[location.pathname+location.hash,this.startPath,this.time])}),f in window.performance&&(window.performance["c"+c]?window.performance[f](u,function(t){i(d,[window.performance.getEntriesByType(p)]),window.performance["c"+c]()},!1):window.performance[f]("webkit"+u,function(t){i(d,[window.performance.getEntriesByType(p)]),window.performance["webkitC"+c]()},!1)),document[f]("scroll",o,{passive:!0}),document[f]("keypress",o,!1),document[f]("click",o,!1))},{}],6:[function(t,e,n){function o(t){for(var e=t;e&&!e.hasOwnProperty(f);)e=Object.getPrototypeOf(e);e&&r(e)}function r(t){s.inPlace(t,[f,u],"-",i)}function i(t,e){return t[1]}var a=t("ee").get("events"),s=t(23)(a,!0),c=t("gos"),t=XMLHttpRequest,f="addEventListener",u="removeEventListener";e.exports=a,"getPrototypeOf"in Object?(o(document),o(window),o(t.prototype)):t.prototype.hasOwnProperty(f)&&(r(window),r(t.prototype)),a.on(f+"-start",function(t,e){var n=t[1],o=c(n,"nr@wrapped",function(){var t={object:function(){if("function"==typeof n.handleEvent)return n.handleEvent.apply(n,arguments)},function:n}[typeof n];return t?s(t,"fn-",null,t.name||"anonymous"):n});this.wrapped=t[1]=o}),a.on(u+"-start",function(t){t[1]=this.wrapped||t[1]})},{}],7:[function(t,e,n){function o(t,e,n){var o=t[e];"function"==typeof o&&(t[e]=function(){var e=o.apply(this,arguments);return r.emit(n+"start",arguments,e),e.then(function(t){return r.emit(n+"end",[null,t],e),t},function(t){throw r.emit(n+"end",[t],e),t})})}var r=t("ee").get("fetch"),t=t(20),e=(e.exports=r,window),i="fetch-",a=i+"body-",s=e.Request,c=e.Response,f=e.fetch,u="prototype";s&&c&&f&&(t(["arrayBuffer","blob","json","text","formData"],function(t,e){o(s[u],e,a),o(c[u],e,a)}),o(e,"fetch",i),r.on(i+"end",function(t,e){var n=this;e?e.clone().arrayBuffer().then(function(t){n.rxSize=t.byteLength,r.emit(i+"done",[null,e],n)}):r.emit(i+"done",[t],n)}))},{}],8:[function(t,e,n){var o=t("ee").get("history"),t=t(23)(o);e.exports=o,t.inPlace(window.history,["pushState","replaceState"],"-")},{}],9:[function(t,e,n){function o(t){function e(){f.emit("jsonp-end",[],o),t.removeEventListener("load",e,!1),t.removeEventListener("error",n,!1)}function n(){f.emit("jsonp-error",[],o),f.emit("jsonp-end",[],o),t.removeEventListener("load",e,!1),t.removeEventListener("error",n,!1)}var o,r,i;t&&"string"==typeof t.nodeName&&"script"===t.nodeName.toLowerCase()&&"function"==typeof t.addEventListener&&(r=function(t){t=t.match(a);return t?t[1]:null}(t.src))&&"function"==typeof(i=(i=(r=r).match(s))&&3<=i.length?{key:i[2],parent:function t(e,n){var e=e.match(c),o=e[1],e=e[3];return e?t(e,n[o]):n[o]}(i[1],window)}:{key:r,parent:window}).parent[i.key]&&(o={},u.inPlace(i.parent,[i.key],"cb-",o),t.addEventListener("load",e,!1),t.addEventListener("error",n,!1),f.emit("new-jsonp",[t.src],o))}var a,s,c,f=t("ee").get("jsonp"),u=t(23)(f);e.exports=f,"addEventListener"in window&&(a=/[?&](?:callback|cb)=([^&#]+)/,s=/(.*)\.([^.]+)/,c=/^(\w+)(\.|$)(.*)$/,t=["appendChild","insertBefore","replaceChild"],u.inPlace(HTMLElement.prototype,t,"dom-"),u.inPlace(HTMLHeadElement.prototype,t,"dom-"),u.inPlace(HTMLBodyElement.prototype,t,"dom-"),f.on("dom-start",function(t){o(t[0])}))},{}],10:[function(t,e,n){var o=t("ee").get("mutation"),r=t(23)(o),i=NREUM.o.MO;e.exports=o,i&&(window.MutationObserver=function(t){return this instanceof i?new i(r(t,"fn-")):i.apply(this,arguments)},MutationObserver.prototype=i.prototype)},{}],11:[function(t,e,n){function o(t){var e=a.context(),t=i(t,"executor-",e),t=new c(t);return a.context(t).getCtx=function(){return e},a.emit("new-promise",[t,e],e),t}var r=t(23),a=t("ee").get("promise"),i=r(a),s=t(20),c=NREUM.o.PR;e.exports=a,c&&(window.Promise=o,["all","race"].forEach(function(r){var i=c[r];c[r]=function(t){function n(t){return function(){a.emit("propagate",[null,!e],o),e=e||!t}}var e=!1,o=(s(t,function(t,e){Promise.resolve(e).then(n("all"===r),n(!1))}),i.apply(c,arguments));return c.resolve(o)}}),["resolve","reject"].forEach(function(t){var n=c[t];c[t]=function(t){var e=n.apply(c,arguments);return t!==e&&a.emit("propagate",[t,!0],e),e}}),c.prototype.catch=function(t){return this.then(null,t)},c.prototype=Object.create(c.prototype,{constructor:{value:o}}),s(Object.getOwnPropertyNames(c),function(t,e){try{o[e]=c[e]}catch(t){}}),a.on("executor-start",function(t){t[0]=i(t[0],"resolve-",this),t[1]=i(t[1],"resolve-",this)}),a.on("executor-err",function(t,e,n){t[1](n)}),i.inPlace(c.prototype,["then"],"then-",function(t,e){return e}),a.on("then-start",function(t,e){this.promise=e,t[0]=i(t[0],"cb-",this),t[1]=i(t[1],"cb-",this)}),a.on("then-end",function(t,e,n){this.nextPromise=n;var o=this.promise;a.emit("propagate",[o,!0],n)}),a.on("cb-end",function(t,e,n){a.emit("propagate",[n,!0],this.nextPromise)}),a.on("propagate",function(e,t,n){this.getCtx&&!t||(this.getCtx=function(){var t;return(t=e instanceof Promise?a.context(e):t)&&t.getCtx?t.getCtx():this})}),o.toString=function(){return""+c})},{}],12:[function(t,e,n){var o=t("ee").get("raf"),r=t(23)(o),t="equestAnimationFrame";e.exports=o,r.inPlace(window,["r"+t,"mozR"+t,"webkitR"+t,"msR"+t],"raf-"),o.on("raf-start",function(t){t[0]=r(t[0],"fn-")})},{}],13:[function(t,e,n){var o=t("ee").get("timer"),r=t(23)(o),t="setTimeout",i="setInterval",a="clearTimeout";e.exports=o,r.inPlace(window,[t,"setImmediate"],t+"-"),r.inPlace(window,[i],i+"-"),r.inPlace(window,[a,"clearImmediate"],a+"-"),o.on(i+"-start",function(t,e,n){t[0]=r(t[0],"fn-",null,n)}),o.on(t+"-start",function(t,e,n){this.method=n,this.timerDuration=isNaN(t[1])?0:+t[1],t[0]=r(t[0],"fn-",this,n)})},{}],14:[function(t,e,n){function o(t,e){h.inPlace(e,["onreadystatechange"],"fn-",a)}function r(){var t=p.context(this);3<this.readyState&&!t.resolved&&(t.resolved=!0,p.emit("xhr-resolved",[],this)),h.inPlace(this,b,"fn-",a)}function i(){for(var t=0;t<g.length;t++)o(0,g[t]);g.length&&(g=[])}function a(t,e){return e}t(6);var s,c,f,u,d=t("ee"),p=d.get("xhr"),h=t(23)(p),t=NREUM.o,l=t.XHR,m=t.MO,w=t.PR,v=t.SI,y="readystatechange",b=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],g=[],t=(e.exports=p,window.XMLHttpRequest=function(t){t=new l(t);try{p.emit("new-xhr",[t],t),t.addEventListener(y,r,!1)}catch(t){try{p.emit("internal-error",[t])}catch(t){}}return t}),x=l,E=t;for(u in x)E[u]=x[u];t.prototype=l.prototype,h.inPlace(t.prototype,["open","send"],"-xhr-",a),p.on("send-xhr-start",function(t,e){o(0,e),g.push(e),m&&(s?s.then(i):v?v(i):(c=-c,f.data=c))}),p.on("open-xhr-start",o),m?(s=w&&w.resolve(),v||w||(c=1,f=document.createTextNode(c),new m(i).observe(f,{characterData:!0}))):d.on("fn-end",function(t){t[0]&&t[0].type===y||i()})},{}],15:[function(t,e,n){function o(t){var e=this.params,n=this.metrics;if(!this.ended){this.ended=!0;for(var o,r=0;r<c;r++)t.removeEventListener(s[r],this.listener,!1);e.aborted||(n.duration=h.now()-this.startTime,4===t.readyState?(e.status=t.status,(o=function(t,e){var n=t.responseType;if("json"===n&&null!==e)return e;e="arraybuffer"===n||"blob"===n||"json"===n?t.response:t.responseText;return d(e)}(t,this.lastSize))&&(n.rxSize=o),this.sameOrigin&&(o=t.getResponseHeader("X-NewRelic-App-Data"))&&(e.cat=o.split(", ").pop())):e.status=0,n.cbTime=this.cbTime,a.emit("xhr-done",[t],t),i("xhr",[e,n,this.startTime]))}}var i,r,a,s,c,f,u,d,p,h=t("loader");h.xhrWrappable&&(i=t("handle"),r=t(16),a=t("ee"),c=(s=["load","error","abort","timeout"]).length,f=t("id"),u=t(19),d=t(18),p=window.XMLHttpRequest,h.features.xhr=!0,t(14),a.on("new-xhr",function(t){var e=this;e.totalCbs=0,e.called=0,e.cbTime=0,e.end=o,e.ended=!1,e.xhrGuids={},e.lastSize=null,u&&(34<u||u<10)||window.opera||t.addEventListener("progress",function(t){e.lastSize=t.loaded},!1)}),a.on("open-xhr-start",function(t){var e,n;this.params={method:t[0]},e=this,t=t[1],t=r(t),(n=e.params).host=t.hostname+":"+t.port,n.pathname=t.pathname,e.sameOrigin=t.sameOrigin,this.metrics={}}),a.on("open-xhr-end",function(t,e){"loader_config"in NREUM&&"xpid"in NREUM.loader_config&&this.sameOrigin&&e.setRequestHeader("X-NewRelic-ID",NREUM.loader_config.xpid)}),a.on("send-xhr-start",function(t,e){var n=this.metrics,t=t[0],o=this;n&&t&&((t=d(t))&&(n.txSize=t)),this.startTime=h.now(),this.listener=function(t){try{"abort"===t.type&&(o.params.aborted=!0),"load"===t.type&&(o.called!==o.totalCbs||!o.onloadCalled&&"function"==typeof e.onload)||o.end(e)}catch(t){try{a.emit("internal-error",[t])}catch(t){}}};for(var r=0;r<c;r++)e.addEventListener(s[r],this.listener,!1)}),a.on("xhr-cb-time",function(t,e,n){this.cbTime+=t,e?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof n.onload||this.end(n)}),a.on("xhr-load-added",function(t,e){t=""+f(t)+!!e;this.xhrGuids&&!this.xhrGuids[t]&&(this.xhrGuids[t]=!0,this.totalCbs+=1)}),a.on("xhr-load-removed",function(t,e){t=""+f(t)+!!e;this.xhrGuids&&this.xhrGuids[t]&&(delete this.xhrGuids[t],--this.totalCbs)}),a.on("addEventListener-end",function(t,e){e instanceof p&&"load"===t[0]&&a.emit("xhr-load-added",[t[1],t[2]],e)}),a.on("removeEventListener-end",function(t,e){e instanceof p&&"load"===t[0]&&a.emit("xhr-load-removed",[t[1],t[2]],e)}),a.on("fn-start",function(t,e,n){e instanceof p&&("onload"===n&&(this.onload=!0),"load"!==(t[0]&&t[0].type)&&!this.onload||(this.xhrCbStart=h.now()))}),a.on("fn-end",function(t,e){this.xhrCbStart&&a.emit("xhr-cb-time",[h.now()-this.xhrCbStart,this.onload,e],e)}))},{}],16:[function(t,e,n){e.exports=function(t){var e=document.createElement("a"),n=window.location,o={},t=(e.href=t,o.port=e.port,e.href.split("://")),t=(!o.port&&t[1]&&(o.port=t[1].split("/")[0].split("@").pop().split(":")[1]),o.port&&"0"!==o.port||(o.port="https"===t[0]?"443":"80"),o.hostname=e.hostname||n.hostname,o.pathname=e.pathname,o.protocol=t[0],"/"!==o.pathname.charAt(0)&&(o.pathname="/"+o.pathname),!e.protocol||":"===e.protocol||e.protocol===n.protocol),n=e.hostname===document.domain&&e.port===n.port;return o.sameOrigin=t&&(!e.hostname||n),o}},{}],17:[function(t,e,n){function o(){}function r(t,e,n){return function(){return i(t,[f.now()].concat(s(arguments)),e?null:this,n),e?void 0:this}}var i=t("handle"),a=t(20),s=t(21),c=t("ee").get("tracer"),f=t("loader"),u=NREUM,d=(void 0===window.newrelic&&(newrelic=u),"api-"),p=d+"ixn-",h=(a(["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],function(t,e){u[e]=r(d+e,!0,"api")}),u.addPageAction=r(d+"addPageAction",!0),u.setCurrentRouteName=r(d+"routeName",!0),e.exports=newrelic,u.interaction=function(){return(new o).get()},o.prototype={createTracer:function(t,e){var n={},o=this,r="function"==typeof e;return i(p+"tracer",[f.now(),t,n],o),function(){if(c.emit((r?"":"no-")+"fn-start",[f.now(),o,r],n),r)try{return e.apply(this,arguments)}catch(t){throw c.emit("fn-err",[arguments,this,t],n),t}finally{c.emit("fn-end",[f.now()],n)}}}});a("setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(t,e){h[e]=r(p+e)}),newrelic.noticeError=function(t){"string"==typeof t&&(t=new Error(t)),i("err",[t,f.now()])}},{}],18:[function(t,e,n){e.exports=function(t){if("string"==typeof t&&t.length)return t.length;if("object"==typeof t){if("undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer&&t.byteLength)return t.byteLength;if("undefined"!=typeof Blob&&t instanceof Blob&&t.size)return t.size;if(!("undefined"!=typeof FormData&&t instanceof FormData))try{return JSON.stringify(t).length}catch(t){return}}}},{}],19:[function(t,e,n){var o=0,r=navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);r&&(o=+r[1]),e.exports=o},{}],20:[function(t,e,n){var i=Object.prototype.hasOwnProperty;e.exports=function(t,e){var n=[],o="",r=0;for(o in t)i.call(t,o)&&(n[r]=e(o,t[o]),r+=1);return n}},{}],21:[function(t,e,n){e.exports=function(t,e,n){for(var o=-1,r=(n=void 0===n?t?t.length:0:n)-(e=e||0)||0,i=Array(r<0?0:r);++o<r;)i[o]=t[e+o];return i}},{}],22:[function(t,e,n){e.exports={exists:void 0!==window.performance&&window.performance.timing&&void 0!==window.performance.timing.navigationStart}},{}],23:[function(t,e,n){function d(t){return!(t&&t instanceof Function&&t.apply)||t[h]}var o=t("ee"),p=t(21),h="nr@original",l=Object.prototype.hasOwnProperty,a=!1;e.exports=function(r,i){function c(r,i,a,s){function t(){var e,n,o,t;try{n=this,e=p(arguments),o="function"==typeof a?a(e,n):a||{}}catch(t){u([t,"",[e,n,s],o])}f(i+"start",[e,n,s],o);try{return t=r.apply(n,e)}catch(t){throw f(i+"err",[e,n,t],o),t}finally{f(i+"end",[e,n,t],o)}}return d(r)?r:(i=i||"",function(n,t){if(Object.defineProperty&&Object.keys)try{return Object.keys(n).forEach(function(e){Object.defineProperty(t,e,{get:function(){return n[e]},set:function(t){return n[e]=t}})})}catch(t){u([t])}for(var e in n)l.call(n,e)&&(t[e]=n[e])}(t[h]=r,t),t)}function f(e,n,o){if(!a||i){var t=a;a=!0;try{r.emit(e,n,o,i)}catch(t){u([t,e,n,o])}a=t}}function u(t){try{r.emit("internal-error",t)}catch(t){}}return r=r||o,c.inPlace=function(t,e,n,o){for(var r,i,a="-"===(n=n||"").charAt(0),s=0;s<e.length;s++)d(r=t[i=e[s]])||(t[i]=c(r,a?i+n:n,o,i))},c.flag=h,c}},{}],ee:[function(t,e,n){function r(){}function i(){return new r}function a(){(l.api||l.feature)&&(w.aborted=!0,l=w.backlog={})}var s=t("gos"),h=t(20),l={},m={},w=e.exports=function e(c){function f(t){return t&&t instanceof r?t:t?s(t,"nr@context",i):i()}function n(t,e,n,o){if(!w.aborted||o){c&&c(t,e,n);for(var r=f(n),i=u(t),a=i.length,s=0;s<a;s++)i[s].apply(r,e);return(o=l[d[t]])&&o.push([p,t,e,r]),r}}function u(t){return o[t]||[]}var o={},d={},p={on:function(t,e){o[t]=u(t).concat(e)},emit:n,get:function(t){return m[t]=m[t]||e(n)},listeners:u,context:f,buffer:function(t,n){h(t,function(t,e){n=n||"feature",(d[e]=n)in l||(l[n]=[])})},abort:a,aborted:!1};return p}();w.backlog=l},{}],gos:[function(t,e,n){var o=Object.prototype.hasOwnProperty;e.exports=function(t,e,n){if(o.call(t,e))return t[e];if(n=n(),Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,e,{value:n,writable:!0,enumerable:!1}),n}catch(t){}return t[e]=n}},{}],handle:[function(t,e,n){function o(t,e,n,o){r.buffer([t],o),r.emit(t,e,n)}var r=t("ee").get("handle");(e.exports=o).ee=r},{}],id:[function(t,e,n){var o=1,r=t("gos");e.exports=function(t){var e=typeof t;return!t||"object"!=e&&"function"!=e?-1:t===window?0:r(t,"nr@id",function(){return o++})}},{}],loader:[function(t,e,n){function o(){if(!b++){var n=y.info=NREUM.info,t=d.getElementsByTagName("script")[0];if(setTimeout(f.abort,3e4),!(n&&n.licenseKey&&n.applicationID&&t))return f.abort();c(v,function(t,e){n[t]||(n[t]=e)}),s("mark",["onload",i()+y.offset],null,"api");var e=d.createElement("script");e.src="https://"+n.agent,t.parentNode.insertBefore(e,t)}}function r(){s("mark",["domContent",i()+y.offset],null,"api")}function i(){return g.exists&&performance.now?Math.round(performance.now()):(a=Math.max((new Date).getTime(),a))-y.offset}var a=(new Date).getTime(),s=t("handle"),c=t(20),f=t("ee"),u=window,d=u.document,p="addEventListener",h="attachEvent",l=u.XMLHttpRequest,m=l&&l.prototype,w=(NREUM.o={ST:setTimeout,SI:u.setImmediate,CT:clearTimeout,XHR:l,REQ:u.Request,EV:u.Event,PR:u.Promise,MO:u.MutationObserver},""+location),v={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-spa-1071.min.js"},l=l&&m&&m[p]&&!/CriOS/.test(navigator.userAgent),y=e.exports={offset:a,now:i,origin:w,features:{},xhrWrappable:l},b=(t(17),d[p]?(d[p]("DOMContentLoaded",r,!1),u[p]("load",o,!1)):(d[h]("onreadystatechange",function(){"complete"===d.readyState&&r()}),u[h]("onload",o)),s("mark",["firstbyte",a],null,"api"),0),g=t(22)},{}]},{},["loader",2,15,5,3,4]),NREUM.info={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",licenseKey:"fbd2e57ca0",applicationID:"57833303",sa:1};