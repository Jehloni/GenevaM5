/* Copyright (c) 2008-2020, Quantcast Corp. https://www.quantcast.com/legal/license */
!function(window){function RequireDependencyError(n){Error.apply(this),this.name="RequireDependencyError",this.message=n||""}RequireDependencyError.prototype=Error.prototype;var amd={},definitions={};amd.require=function(n,t){"function"==typeof n&&(t=n,n=[]);for(var e=[],r=0;r<n.length;r++){var o=n[r];if(!definitions.hasOwnProperty(o))throw new RequireDependencyError("No module named "+o+" has been defined");e[r]=definitions[o]}return t.apply({},e)};var array=Array.prototype,available=function(n,t){return"function"==typeof n[t]},map="map",forEach="forEach",reduce="reduce",indexOf="indexOf";with(available(array,map)||(array[map]=function(n,t){var e=[];t||(t=this);for(var r=0;r<this.length;r++)e[r]=n.call(t,this[r],r,this);return e}),available(array,forEach)||(array[forEach]=array[map]),available(array,reduce)||(array[reduce]=function(n,t){var e=0;for(void 0===t&&(t=this[e++]);e<this.length;e++)t=n.call(this,t,this[e],e,this);return t}),available(array,indexOf)||(array[indexOf]=function(n){for(var t=0;t<this.length;t++)if(this[t]==n)return t;return-1}),amd.define=function(n,t,e){definitions.hasOwnProperty(n)||(definitions[n]=amd.require(t,e))},amd)define("quant/now",[],function(){return function(){return(new Date).getTime()}}),define("quant/origin",["quant/now"],function(n){return function(t){for(var e=t.domain||"",r=new Date(0).toUTCString(),o=new Date(n()+864e5).toUTCString(),i=e.split("."),a="",u=2;u<=i.length;u++){a=i.slice(-u).join(".");var c="_dlt="+"1; path=/; domain="+a+"; expires="+o;if(t.cookie=c,/_dlt=1\b/.test(t.cookie))return t.cookie="_dlt="+"; path=/; domain="+a+"; expires="+r,a}return t.cookie="_dlt="+"; path=/; domain="+a+"; expires="+r,e}}),define("quant/windows",[],function(){return function(n,t){if(void 0===n)throw new Error("window many not be undefined");if(void 0===t)throw new Error("top may not be undefined");t=t.self,this.depth=0;var e=n.self;for(this.top=e;e!==t;){e=e.parent.self;try{e.location.href&&(this.url=e.location.href,this.top=e)}catch(n){}this.depth++}this.locate=function(e){for(var r=n;;){try{if(e in r.frames)return r}catch(n){}if(r===t)break;r=r.parent.self}}}}),define("quant/log",[],function(){function n(n,t){this.isDebug=/qcdbgc=1$/.test(window.location.toString());var e=function(){return(new Date).toString()},r=function(n,t){"undefined"!=typeof console&&console.log.apply(console,[n+" "+e()].concat([].slice.call(t)))};this.error=function(){r("ERROR",arguments)},this.debug=function(){this.isDebug&&r("DEBUG",arguments)}}return n}),define("quant/ready",[],function(){function n(){var n=!1,t=[];document.readyState in{complete:!0,interactive:!0}&&(n=!0);var e=function(){for(n=!0;t.length>0;)t.shift()()};document.addEventListener?(document.addEventListener("DOMContentLoaded",e,!1),window.addEventListener("load",e,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",e,!1),window.attachEvent("onload",e)),this.ready=function(e){n?e():t.push(e)}}return(new n).ready}),define("quant/promise",[],function(){function n(u){var c,f,s=[],l=t,d=function(n){return n},p=function(n,t,e,r){try{var i=n(r);o(i)?(i.then(t),i.catch(e)):t(i)}catch(n){e(n)}},h=function(n){c=n,l=e,s.forEach(function(t){t.push(n),p.apply(0,t)})},v=function(n){f=n,l=r,s.forEach(function(t){t[r](n)})},g=function(n,t,e){return function(r){p(n,t,e,r)}};try{u(h,v)}catch(n){v(n)}return{then:function(o){switch(l){case t:return new n(function(n,t){s.push([o,n,t])});case e:return i(o(c));case r:return a(f)}},catch:function(o){switch(l){case t:return new n(function(n,t){s.push([d,n,g(o,n,t)])});case e:return i(c);case r:return i(o(f))}}}}var t=0,e=1,r=2,o=function(n){return"object"==typeof n&&"then"in n&&"function"==typeof n.then},i=function(n){return o(n)?n:{then:function(t){return i(t(n))},catch:function(n){return this}}},a=function(n){return{then:function(n){return this},catch:function(t){return i(t(n))}}};return n.resolve=i,n.reject=a,n.all=function(n){return n.length?n.map(function(n){return n.then(function(n){return[n]})}).reduce(function(n,t){return n.then(function(n){return t.then(function(t){return n.concat(t)})})}):i([])},n}),define("quant/loader",["quant/ready","quant/promise"],function(n,t){function e(e,r){var o,i=[];n(function(){o=r.getElementsByTagName("head")[0]});var a=function(n){var t=new Image;return t.src=n,t};this.image=function(n){return new t(function(t,e){var r=a(n);i.push(r),r.onload=function(){t(r),i.shift(),delete r.onload,delete r.onerror},r.onerror=e})},this.beacon=function(n){var t=e.navigator;t&&t.sendBeacon?t.sendBeacon(n):a(n)};var u=function(n,t,e){var o=r.createElement("script");o.type="text/javascript",o.src=n;var i=function(){t(o),o.onreadystatechange=null,o.onload=null,o.onerror=null};return o.onload=i,o.onreadystatechange=function(){o.readyState in{loaded:1,complete:1}&&i()},o.onerror=e,o};this.script=function(e){return new t(function(t,r){n(function(){var n=u(e,t,r);o.firstChild?o.insertBefore(n,o.firstChild):o.appendChild(n)})})}}return e}),define("quant/json",[],function(){var localJSON=window.JSON||{};return void 0!==localJSON.stringify&&'{"test":["1"]}'===localJSON.stringify({test:["1"]})||(localJSON.stringify=function(n){var t=typeof n;if("object"!==t||null===n)return"string"===t&&(n='"'+n+'"'),String(n);var e,r,o=[],i=n&&n.constructor===Array;for(e in n)r=n[e],"function"!==(t=typeof r)&&("string"===t?r='"'+r+'"':"object"===t&&null!==r&&(r=localJSON.stringify(r)),o.push((i?"":'"'+e+'":')+String(r)));return(i?"[":"{")+String(o)+(i?"]":"}")},localJSON.parse=localJSON.parse||function(string){return eval("("+string+")")}),localJSON}),define("quant/event",[],function(){function n(){this.add=function(n,t,e){n.addEventListener?n.addEventListener(t,e):"function"==typeof jQuery?jQuery(n).on(t,e):n.attachEvent&&n.attachEvent("on"+t,e)},this.remove=function(n,t,e){n.removeEventListener?n.removeEventListener(t,e):"function"==typeof jQuery?jQuery(n).off(t,e):n.detachEvent&&n.detachEvent("on"+t,e)},this.trigger=function(n,t,e){var r=n.ownerDocument;if(n.dispatchEvent&&r.createEvent){var o=r.createEvent("Event");if(o.initEvent(t,!0,!0),void 0!==e)for(var i in e)i in o||(o[i]=e[i]);n.dispatchEvent(o)}else"function"==typeof jQuery&&jQuery(n).trigger(t,e)}}return new n}),define("quant/consent/truste",["quant/json","quant/promise","quant/event","quant/now"],function(n,t,e,r){return function(o,i,a,u,c,f,s,l){var d,p={},h=function(n){var t=n.source[0];return"p"+n.consent[0]+("a"==t?"e":"i")};"object"==typeof u&&"function"==typeof u.callApi?(!0,d=function(n,e,r,o){var i=u.callApi(e,o,l,c,r);return n.cm=h(i),t.resolve(!0)}):d=function(u,f,s,d){return o.depth>0&&(e.add(i,"message",function(t){var e=t.data;if("string"==typeof e&&e.indexOf("PrivacyManagerAPI")>0)try{e=n.parse(e)}catch(n){return}else if(void 0!==e.PrivacyManagerAPI){var r=e.PrivacyManagerAPI;u.cm=h(r)}}),a.postMessage(n.stringify({PrivacyManagerAPI:{timestamp:r(),action:f,self:d,domain:l,authority:c,type:s}}),"*")),t.resolve(!0)},this.consent=function(n){return d(n,"getConsent",f,s)},this.parameters=p}}),define("quant/consent/uspapi",["quant/promise","quant/json","quant/event","quant/now"],function(n,t,e,r){return function(o,i,a,u){var c;if("function"==typeof i.__uspapi)c=function(t,e){return new n(function(n,t){i.__uspapi("getUSPData",e,function(e,r){e&&"string"==typeof e.uspString?n(e):t(e)})}).catch(function(n){return a.error("[USPAPI] unsuccessful: ",n),!0})};else{var f=(o.locate(u),{});e.add(i,"message",function(n){var e=n.data;if("string"==typeof e&&"{"==e[0])try{e=t.parse(e)}catch(n){return}if(e.hasOwnProperty("__uspapiReturn")){var r=e.__uspapiReturn,o=r.callId,i=f[o];if(void 0===i)return;r.success?i[0](r.returnValue):i[1](r.returnValue)}}),c=function(t,e){var i=o.locate(u);if(void 0===i)return n.resolve(void 0);var a=r();return new n(function(n,r){f[a]=[n,r],i.postMessage({__uspapiCall:{command:t,version:e,callId:a}})})}}this.consent=function(n){return c("getUSPData",1).then(function(t){return t&&"string"==typeof t.uspString&&(n.us_privacy=t.uspString),!0})}}}),define("quant/consent-manager",["quant/promise","quant/json"],function(n,t){return function(t){var e,r={},o=function(o){return void 0===e&&(e=n.all(t.map(function(n){return n.consent(r)})).then(function(n){return n.reduce(function(n,t){return n&&t},!0)})),e.then(function(n){if(n)return o()})};this.consent=o,this.wrap=function(n){return function(){var t=this,e=arguments;return o(function(){return n.apply(t,e)})}},this.parameters=r}}),define("quant/consent/tcf2.0",["quant/promise","quant/json","quant/event","quant/now"],function(n,t,e,r){function o(n,t){var e=t.gdprApplies,r=t.purpose,o=t.vendor,i=o&&o.consents&&o.consents[f],a=o&&o.legitimateInterests&&o.legitimateInterests[f],u=t.publisher?t.publisher.restrictions:{};return!e||n.map(function(n){var t=!!r.consents&&r.consents[n],e=!!r.legitimateInterests&&r.legitimateInterests[n],o=u&&u[n]?u[n][f]:null;return 0!==o&&(!(!i||!t||2===o||-1==l.indexOf(n)&&1!==o)||!(1===o||!a||!e||-1!=d.indexOf(n)||-1!=l.indexOf(n)&&2!==o))}).reduce(function(n,t){return n&&t},!0)}function i(i,f,l,d){var q,y;if("function"==typeof f.__tcfapi)y=function(t,e){return new n(function(n,r){f.__tcfapi(t,p,function(e,o){if(o){var i=e.eventStatus;t===h&&e.gdprApplies&&"useractioncomplete"!==i&&"tcloaded"!==i||n(e)}else r(e)},e)})};else{var m={},w={};e.add(f,"message",function(n){var e=n.data;if(void 0===e)return void l.error(a+"Recieved undefined message");if("string"==typeof e&&"{"==e[0])try{e=t.parse(e)}catch(n){return}if(e.hasOwnProperty(v)){var r=e[v],o=r.callId,i=m[o];if(void 0===i)return;var f=r.returnValue;r.success?w[o]===h&&f.gdprApplies&&"useractioncomplete"!==f.eventStatus&&"tcloaded"!==f.eventStatus||i[u](f):i[c](f)}}),y=function(e,o){var a=i.locate(d);if(void 0===a)return n.resolve({gdprApplies:!1});var u=r();return new n(function(n,r){m[u]=[n,r],w[u]=e;var i={};i[g]={command:e,parameter:o,version:p,callId:u},a.postMessage(t.stringify(i),"*")})}}this.consent=function(n){return void 0===q&&(q=y(h).then(function(t){return t.gdprApplies&&"false"!=t.gdprApplies?(n.gdpr=1,n.gdpr_consent=t.tcString):n.gdpr=n.gdpr||0,o(s,t)}).catch(function(t){return l.error("[TCF2.0] unsuccessful: ",t),n.gdpr=n.gdpr||0,!0})),q}}var a="[TCF2]: ",u=0,c=1,f=11,s=["1","3","7","8","9","10"],l=["1","3"],d=["1","3"],p=2,h="addEventListener",v="__tcfapiReturn",g="__tcfapiCall";return i.resolveConsent=o,i}),define("quant/qtrack",[],function(){function n(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])}function t(t,e,i){for(var a=0;a<r.length;a++){var u={qacct:r[a],labels:i?t:"_fp.event."+t,event:"refresh"};if(n(u,o),void 0!==e&&null!==e)for(var c in e)e.hasOwnProperty(c)&&("product_id"===c&&e[c].constructor===Array&&(e[c]=e[c].join(",")),u[f[c]||c]=e[c]);window._qevents.push(u)}}function e(e,f,s){if(e===a){if(-1!==r.indexOf(f))return;r.push(f);var l={qacct:f};n(o,s),n(l,o),window._qevents.push(l)}else e===u?-1!==i.indexOf(f)?t(f,s,!1):console.warn("Unsupported event by track, please use "+c+" for this event."):e===c&&t(f,s,!0)}var r,o,i=["PageView","ViewContent","Search","AddToWishlist","AddToCart","InitiateCheckout","AddPaymentInfo","Purchase","Lead","Register","StartTrial","Subscribe","SubmitApplication"],a="init",u="track",c="trackCustom",f={order_id:"orderid",value:"revenue"};return function(){if(window.qtrack||(window.qtrack=function(){window.qtrack.impl.apply(window.qtrack,arguments)}),!window.qtrack.impl&&(r=[],o={},window.qtrack.impl=e,window.qtrack&&window.qtrack.q))for(;window.qtrack.q.length>0;)e.apply(e,window.qtrack.q.shift())}}),define("quant/hashing",[],function(){function n(){function n(n){return unescape(encodeURIComponent(n))}function t(n,t){return t>>>n|t<<32-n}function e(n){return t(2,n)^t(13,n)^t(22,n)}function r(n){return t(6,n)^t(11,n)^t(25,n)}function o(n){return t(7,n)^t(18,n)^n>>>3}function i(n){return t(17,n)^t(19,n)^n>>>10}function a(n,t,e){return n&t^~n&e}function u(n,t,e){return n&t^n&e^t&e}this.FNV=function(n){var t,e,r,o;return t=2166136261,e=3386659096,r=c(t,n),o=c(e,n),Math.round(Math.abs(r*o)/65536).toString(16)};var c=function(n,t){var e;for(e=0;e<t.length;e++)n^=t.charCodeAt(e),n+=(n<<1)+(n<<4)+(n<<7)+(n<<8)+(n<<24);return n};this.SHA256=function(t){t=n(t);var c=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],f=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];t+=String.fromCharCode(128);for(var s=t.length/4+2,l=Math.ceil(s/16),d=new Array(l),p=0;p<l;p++){d[p]=new Array(16);for(var h=0;h<16;h++)d[p][h]=t.charCodeAt(64*p+4*h+0)<<24|t.charCodeAt(64*p+4*h+1)<<16|t.charCodeAt(64*p+4*h+2)<<8|t.charCodeAt(64*p+4*h+3)<<0}var v=8*(t.length-1)/Math.pow(2,32),g=8*(t.length-1)>>>0;for(d[l-1][14]=Math.floor(v),d[l-1][15]=g,p=0;p<l;p++){for(var q=new Array(64),y=0;y<16;y++)q[y]=d[p][y];for(y=16;y<64;y++)q[y]=i(q[y-2])+q[y-7]+o(q[y-15])+q[y-16]>>>0;var m=f[0],w=f[1],_=f[2],b=f[3],S=f[4],E=f[5],O=f[6],C=f[7];for(y=0;y<64;y++){var j=C+r(S)+a(S,E,O)+c[y]+q[y],A=e(m)+u(m,w,_);C=O,O=E,E=S,S=b+j>>>0,b=_,_=w,w=m,m=j+A>>>0}f[0]=f[0]+m>>>0,f[1]=f[1]+w>>>0,f[2]=f[2]+_>>>0,f[3]=f[3]+b>>>0,f[4]=f[4]+S>>>0,f[5]=f[5]+E>>>0,f[6]=f[6]+O>>>0,f[7]=f[7]+C>>>0}for(C=0;C<f.length;C++)f[C]=("00000000"+f[C].toString(16)).slice(-8);return f.join("")}}return new n}),define("quant/normalize",["quant/hashing"],function(n){return function(t,e,r,o,i){var a,u={},c=null,f=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,s=/^[A-Fa-f0-9]{64}$/,l=2,d={};for(a in e)d[a]=void 0!==e[a],e.hasOwnProperty(a)&&"string"==typeof e[a]&&("uid"!==a&&"uh"!==a?"qacct"!==a&&(e[a].length>0?u[a+t]=encodeURIComponent(e[a]):d[a]=!1):(e[a].match(s)?(l=1,c=e[a].toLowerCase()):(e[a].match(f)&&(l=0,e[a]=e[a].toLowerCase()),""!==e[a]&&(c=n.SHA256(e[a]))),delete e[a]));for(a in r)r.hasOwnProperty(a)&&"string"==typeof r[a]&&!d[a]&&(u[a+t]=encodeURIComponent(r[a]));return u["rf"+t]=""+i,"string"==typeof c&&(e.uh=c,u["uh"+t]=encodeURIComponent(c)),u["uht"+t]=""+l,u["a"+t]=o,u}}),define("quant.js",["quant/origin","quant/windows","quant/log","quant/loader","quant/consent/truste","quant/consent/uspapi","quant/consent-manager","quant/consent/tcf2.0","quant/qtrack","quant/normalize","quant/hashing"],function(n,t,e,r,o,i,a,u,c,f,s){return void 0===window.__qc&&(window.__qc=function(c,l,d){if(c.__qc)return c.__qc;var p,h,v,g,q,y,m,w,_,b,S,E,O,C,j,A,P,I,x,k,D,R,M,T,z,N,U,L,J,B,V,Q,F,G,H,$,W,Z,K,X,Y,nn,tn,en,rn,on,an,un=n(l),cn=new t(c,c.top),fn=new r(c,l),sn=new e(fn,"quantcount.com"),ln=new a([new o(cn,c,c.top,c.PrivacyManagerAPI,"truste.com","advertising","quantserve.com",un),new i(cn,c,sn,"__uspapiLocator"),new u(cn,c,sn,"__tcfapiLocator")]),dn=["a","ce","cm","dst","enc","fpa","fpan","je","ns","ogl","rf","tzo","sr"],pn=["4dcfa7079941","127fdf7967f31","588ab9292a3f","32f92b0727e5","22f9aa38dfd3","a4abfe8f3e04","18b66bc1325c","958e70ea2f28","bdbf0cb4bbb","65118a0d557","40a1d9db1864","18ae3d985046","3b26460f55d"],hn=!1,vn=!1,gn=0,qn=[],yn=[],mn=[],wn=[],_n={},bn=0,Sn=null,En={},On={},Cn=null,jn=[].slice;!function(){var n;n=l.createElement("script"),p="async"in n?1:n.readyState?2:3,n=null}();var An=function(n){try{return{init:b,hash:s.SHA256,push:S,rules:F,require:require,hasRules:H,defaults:K,__qc:function(){return!0}}[n].apply(null,jn.call(arguments,1))}catch(n){return sn.error(n),!1}};return An.evts=0,An.v=2,An.SD=pn,An.qpixelsent=[],Q=function(n){var t,e=n?n.length||0:0;for(t=0;t<e;t++)if(!n[t])return!1;return!0},Z=function(n){(n=n||c._qacct)&&(z(wn,n)||wn.push(n))},z=function(n,t){var e,r=n.length;for(e=0;e<r;e++)if(n[e]===t)return!0;return!1},L=function(n){return{}.toString.call(n).match(/\s([a-zA-Z]+)/)[1].toLowerCase()},J=function(n){var t,e,r;if("array"===(e=L(n)))return n.slice(0);if("object"===e){t={};for(r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);return t}return"string"===e?""+n:n},S=function(n,t){j(n,t)},H=function(n){return z(mn,n)},K=function(n,t){var e;n&&(e=En[n],e&&(t=M(t,e)),t.qacct&&delete t.qacct,En[n]=t)},X=function(n){var t,e,r,o,i,a;if(q(n)){i=n;for(o in i){if("string"==typeof i[o]){t=n.event||"load",e=n.media||"webpage","rule"!==t&&"load"!==t||"webpage"!==e&&"ad"!==e?j(n):(a=n.qacct||c._qacct,n.qacct=a,r=On[a],r=r?M(r,n):n,On[a]=r),Z(n.qacct);break}"object"==typeof i[o]&&null!=i[o]&&X(i[o])}}},M=function(n,t){var e={};return e.qacct=n.qacct||t.qacct,"load"===n.event||"load"===t.event?e.event="load":n.event&&t.event?e.event=n.event||t.event:e.event=null,e.media=null,"webpage"===n.media||"webpage"===t.media?e.media="webpage":"ad"===n.media||"ad"===t.media?e.media="ad":e.media=n.media||t.media,T(e,n,t),T(e,t,n),e.event||delete e.event,e.media||delete e.media,e},T=function(n,t,e){var r,o,i,a,u,c;for(r in t)t.hasOwnProperty(r)&&!n.hasOwnProperty(r)&&(o=t[r],i=e[r],a="",u=!!o&&"string"==typeof o,c=!!i&&"string"==typeof i,u&&(a=o),u&&c&&(a+=","),c&&(a+=i),n[r]=a)},Y=function(){var n,t,e=[];if(!(bn>0)){U();for(n in On)On.hasOwnProperty(n)&&On[n]&&(t=On[n],e.push(t),delete On[n]);1==e.length&&j(e[0]),e.length>1&&j(e)}},nn=function(){var n,t,e,r=[];for(e=wn.slice(0),n=0;n<e.length;n++)t=e[n],H(t)||r.push(t);if(0===r.length)Y();else for(n=0;n<r.length;n++)t=r[n],mn.push(t),D(t)},R=function(n,t,e,r){var o;n=c.location.protocol+"//"+n,Sn=l.scripts&&l.scripts[0]||null;var i=Sn&&Sn.parentNode||l.head||l;if(o=l.createElement("script"),1===p)o.src=n,o.async=!0,o.onload=t,e&&(o.onerror=function(n){o.onerror=null,e(n)}),i.insertBefore(o,Sn);else if(2===p){var a=!1;o.onload=o.onreadystatechange=function(){a||"loaded"!=o.readyState&&"complete"!=o.readyState||(a=!0,o.onreadystatechange=null,t())},o.src=n,i.insertBefore(o,Sn)}else r&&r()},D=function(n){bn++,R("rules.quantcount.com/rules-"+n+".js",function(){_n[n]=2===p?2:0,tn()},function(t){_n[n]=1,tn()},function(){_n[n]=4,tn()})},tn=function(){bn-=bn>0?1:0,Y()},F=function(){var n,t,e,r=!0,o=!1;if(arguments.length){for(e=function(n){r?X(n):j(n,!0),o=!0},n=0;n<arguments.length;n++)t=jn.call(arguments[n],0),t.splice(1,0,e),G.apply(null,t);r=!1,hn&&Y()}return o},G=function(n,t){var e,r,o,i,a,u,c,f=[],s=[],l=t||j;if((r=jn.call(arguments,2))&&r.length){for(o=r[0]||Q,i=r[1],a=r[2],e=a.length,u=0;u<e;u++)f.push(!1),s.push(null);c={p:n,f:f,r:o,c:a,a:i,v:s},H(n)||mn.push(n),yn.push(c),$(c,l)}else mn.push(n),_n[n]=6},$=function(n,t){var e,r=n&&n.c?n.c.length:0;for(e=0;e<r;e++)!function(e){var r,o;try{r=n.c[e][0],o=n.c[e].slice(1),o.splice(0,0,function(r){n.f[e]=!0,n.v[e]=r,W(n,t)}),r.apply(null,o)}catch(r){n.f[e]=!0,n.v[e]=!1,W(n,t)}}(e)},W=function(n,t){var e,r,o,i,a,u,c,f=n.a,s=n.f,l=n.v,d=n.r||Q;if(e=Q(s),e&&(e=e&&d(l)),e)for(a=0;a<f.length;a++)try{r=f[a][0],o=f[a].length>1?f[a].slice(1):[],o=o.concat(n.v),i=r.apply(null,o),u={qacct:n.p,event:"rule"};for(c in i)i.hasOwnProperty(c)&&"qacct"!==c&&(u[c]=i[c]);t(u)}catch(n){continue}},h=function(){return v(0)!==v(6)?1:0},v=function(n){var t=new Date(2e3,n,1,0,0,0,0),e=t.toGMTString();return t-new Date(e.substring(0,e.lastIndexOf(" ")-1))},g=function(n){return n.replace(/\./g,"%2E").replace(/,/g,"%2C")},q=function(n){return void 0!==n&&null!=n},y=function(){return Math.round(2147483647*Math.random())},m=function(n){var t,e,r,o="",i=l.cookie;return i?(t=i.indexOf(n+"="),e=t+n.length+1,t>-1&&(r=i.indexOf(";",e),r<0&&(r=i.length),o=i.substring(e,r)),o):o},C=function(n){return"P0-"+y()+"-"+n.getTime()},O=function(n,t,e){return["__qca=",n,"; expires=",t.toGMTString(),"; path=/; domain=",e].join("")},E=function(){var n,t,e,r,o,i,a,u,c,f=["","",""];if(1===gn)return f[0]=";fpan=u;fpa=",f;for(n=s.FNV(un),r=0;r<pn.length;r++)if(pn[r]===n)return f[0]=";fpan=u;fpa=",f;return t=new Date,e=m("__qca"),e.length>0||Cn?(0===e.length&&(e=Cn,f[1]=O(Cn,new Date(t.getTime()+338688e5),un)),f[0]=";fpan=0;fpa="+e):(Cn=C(t),f[1]=O(Cn,new Date(t.getTime()+338688e5),un),f[0]=";fpan=1;fpa="+Cn),o=m("_pubcid"),i=m("_pubcid_optout"),a=o.length>0?o:m("_sharedID"),u=m("_pbjs_id_optout"),c=u.length>0||"1"===i,!c&&a.length>0?f[2]=";pbc="+a:f[2]=";pbc=",f},w=function(){var n=E()[1];n&&(l.cookie=n)},_=function(n){l.cookie=n+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; domain="+un},V=function(n){var t,e;if(n&&"object"===L(n))for(e=0;e<dn.length;e++)t=dn[e],n.hasOwnProperty(t)&&n[t]&&delete n[t]},x=function(n,t,e){var r,o,i;return t&&"string"==typeof t.qacct?r=t.qacct:"string"==typeof c._qacct&&(r=c._qacct),r&&0!==r.length?(t=B(r,t),delete On[r],i=En[r],o=_n[r],q(o)||(o=3),an(t,i,e,r)?null:f(n,t,i,r,o)):null},I=function(n){var t,e=[],r=[],o=[];for(t in n)n[t]&&n.hasOwnProperty(t)&&("uh"===t||"uht"===t?r.push(";"+t+"="+n[t]):e.push(t+"="+n[t]));return o.push(e.join(";")),o.push(r.join("")),o},k=function(){var n,t,e,r,o,i=l.getElementsByTagName("meta"),a="";for(n=0;n<i.length;n++){if(o=i[n],a.length>=1e3)return encodeURIComponent(a);q(o)&&q(o.attributes)&&q(o.attributes.property)&&q(o.attributes.property.value)&&q(o.content)&&(t=o.attributes.property.value,e=o.content,t.length>3&&"og:"===t.substring(0,3)&&(a.length>0&&(a+=","),r=e.length>80?80:e.length,a+=g(t.substring(3,t.length))+"."+g(e.substring(0,r))))}return encodeURIComponent(a)},j=function(n,t){var e,r,o,i,a,u,f,s,p,v,g,m,w=y(),_="",b="",S="",O="",C="1",j=[];if(gn=0,q(An.qpixelsent)||(An.qpixelsent=[]),q(n)){if("object"===(v=L(n)))o=x("",n,t);else if("array"===v)for(a=0;a<n.length;a++)g=x("."+(a+1),n[a],t),o=0===a?g:M(o,g)}else"string"==typeof _qacct&&(o=x("",null,t));o&&(e=d.cookieEnabled?"1":"0",q(c._qmeta)&&(_=";m="+encodeURIComponent(c._qmeta),c._qmeta=null),u=new Date,f=h(),m=E(),s=m[0],p=m[2],c.location&&c.location.href&&(b=encodeURIComponent(c.location.href)),l&&l.referrer&&(O=encodeURIComponent(l.referrer)),c.self===c.top&&(C="0"),o.url?S=b:o.url=b,o.ref||(o.ref=O||""),r=k(),i=I(o),j.push("/pixel;r="+w+";"+i[0]),j.push(i[1]),j.push(s+p),j.push(";ns="+C+";ce="+e+";qjs=1;qv=623fd1d5-20220713234410"),j.push((o.ref?"":";ref=")+";d="+un+";dst="+f+";et="+u.getTime()+";tzo="+u.getTimezoneOffset()+(S?";ourl="+S:"")+_+";ogl="+r),qn.push(j),P())},A=function(n){ln.consent(function(){return!0}).then(function(n){return n||_("__qca"),n?"quantserve.com":"quantcount.com"}).then(function(t){var e=ln.parameters,r=function(){return function(){return"quantserve.com"===t?[n[1],n[2]].join(""):";uh=u;uht=u"}}();return fn.image(["//pixel.",t,n[0],r(),n[3],";cm=",e.cm,1===e.gdpr?";gdpr=1;gdpr_consent="+e.gdpr_consent:";gdpr=0",e.us_privacy?";us_privacy="+e.us_privacy:"",n[4]].join("")).then(function(n){n&&"number"==typeof n.width&&3===n.width?_("__qca"):"quantserve.com"===t&&w()})})},P=function(){for(;qn.length;)A(qn.shift())},en=function(){var n,t,e=arguments;for(N([].slice.call(e)),t=0;t<e.length;t++)n=e[t],j(n);wn.length?nn():Y()},N=function(n){var t,e=L(n);if("array"===e)for(t=0;t<n.length;t++)N(n[t]);else"object"===e&&Z(n.qacct||c._qacct)},U=function(){var n;if(vn||c._qevents.length||c.ezt.length||"undefined"==typeof _qacct||(j({qacct:c._qacct}),vn=!0),!An.evts){for(n in c._qevents)c._qevents[n]!==c._qevents.push&&c._qevents.hasOwnProperty(n)&&j(c._qevents[n]);for(n in c.ezt)c.ezt[n]!==c.ezt.push&&c.ezt.hasOwnProperty(n)&&j(c.ezt[n]);c._qevents={push:en},c.ezt.push=function(){var n,t=arguments;if(q(c.queueManager))for(n=0;n<t.length;n++)c.queueManager.push(t[n]);else en.apply(this,arguments)},An.evts=1}},on=function(n){var t;n&&(t=J(n),N(n),c._qevents.push(t),n=null)},rn=function(n){n.push=function(){return N([].slice.call(arguments)),nn(),[].push.apply(n,arguments)}},an=function(n,t,e,r){t=t||{};var o=(n?n.media:t.media)||"webpage",i=(n?n.event:t.event)||"load";if("ad"===o&&(gn=1),"webpage"===o&&"load"===i){for(var a=0;a<An.qpixelsent.length;a++)if(An.qpixelsent[a]===r&&!e)return!0;An.qpixelsent.push(r)}return!1},B=function(n,t){var e=On[n];return t?e&&(t=M(t,e)):t=e,V(t),t},b=function(){q(c._qevents)||(c._qevents=[]),q(c.ezt)||(c.ezt=[]),on(c._qoptions),on(c.qcdata),on(c.smarttagdata),An.evts||(rn(c._qevents),rn(c.ezt)),N(c.ezt),N(c._qevents),N({qacct:c._qacct}),c._qoptions=null,wn.length?nn():Y(),hn=!0},c.quantserve=c.quantserve||b,An.quantserve=b,An}(window,window.document,window.navigator)),window.quantserve(),c(),window.__qc})}(window);