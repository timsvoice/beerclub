/*
 AngularJS v1.3.11
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(M,Y,t){'use strict';function T(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.11/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Ta(b){if(null==b||Ua(b))return!1;var a=b.length;return b.nodeType===
oa&&a?!0:F(b)||D(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function s(b,a,c){var d,e;if(b)if(G(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(D(b)||Ta(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==s)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Ed(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,
b[d[e]],d[e]);return d}function kc(b){return function(a,c){b(c,a)}}function Fd(){return++nb}function lc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function z(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var l=f[g];b[l]=e[l]}}lc(b,a);return b}function ba(b){return parseInt(b,10)}function H(){}function pa(b){return b}function da(b){return function(){return b}}function A(b){return"undefined"===typeof b}function y(b){return"undefined"!==
typeof b}function I(b){return null!==b&&"object"===typeof b}function F(b){return"string"===typeof b}function V(b){return"number"===typeof b}function qa(b){return"[object Date]"===Da.call(b)}function G(b){return"function"===typeof b}function ob(b){return"[object RegExp]"===Da.call(b)}function Ua(b){return b&&b.window===b}function Va(b){return b&&b.$evalAsync&&b.$watch}function Wa(b){return"boolean"===typeof b}function mc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Gd(b){var a={};
b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function ua(b){return Q(b.nodeName||b[0]&&b[0].nodeName)}function Xa(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Ea(b,a,c,d){if(Ua(b)||Va(b))throw Ka("cpws");if(a){if(b===a)throw Ka("cpi");c=c||[];d=d||[];if(I(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(D(b))for(var f=a.length=0;f<b.length;f++)e=Ea(b[f],null,c,d),I(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;D(a)?a.length=
0:s(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Ea(b[f],null,c,d),I(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);lc(a,g)}}else if(a=b)D(b)?a=Ea(b,[],c,d):qa(b)?a=new Date(b.getTime()):ob(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):I(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Ea(b,e,c,d));return a}function ra(b,a){if(D(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(I(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=
b[c];return a||b}function fa(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(D(b)){if(!D(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!fa(b[d],a[d]))return!1;return!0}}else{if(qa(b))return qa(a)?fa(b.getTime(),a.getTime()):!1;if(ob(b)&&ob(a))return b.toString()==a.toString();if(Va(b)||Va(a)||Ua(b)||Ua(a)||D(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!G(b[d])){if(!fa(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&
"$"!==d.charAt(0)&&a[d]!==t&&!G(a[d]))return!1;return!0}return!1}function Ya(b,a,c){return b.concat(Za.call(a,c))}function nc(b,a){var c=2<arguments.length?Za.call(arguments,2):[];return!G(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,Ya(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Hd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=t:Ua(a)?c="$WINDOW":a&&Y===a?c="$DOCUMENT":Va(a)&&
(c="$SCOPE");return c}function $a(b,a){if("undefined"===typeof b)return t;V(a)||(a=a?2:null);return JSON.stringify(b,Hd,a)}function oc(b){return F(b)?JSON.parse(b):b}function va(b){b=B(b).clone();try{b.empty()}catch(a){}var c=B("<div>").append(b).html();try{return b[0].nodeType===pb?Q(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+Q(b)})}catch(d){return Q(c)}}function pc(b){try{return decodeURIComponent(b)}catch(a){}}function qc(b){var a={},c,d;s((b||"").split("&"),function(b){b&&
(c=b.replace(/\+/g,"%20").split("="),d=pc(c[0]),y(d)&&(b=y(c[1])?pc(c[1]):!0,rc.call(a,d)?D(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Nb(b){var a=[];s(b,function(b,d){D(b)?s(b,function(b){a.push(Fa(d,!0)+(!0===b?"":"="+Fa(b,!0)))}):a.push(Fa(d,!0)+(!0===b?"":"="+Fa(b,!0)))});return a.length?a.join("&"):""}function qb(b){return Fa(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Fa(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,
":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Id(b,a){var c,d,e=rb.length;b=B(b);for(d=0;d<e;++d)if(c=rb[d]+a,F(c=b.attr(c)))return c;return null}function Jd(b,a){var c,d,e={};s(rb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});s(rb,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Id(c,"strict-di"),a(c,d?[d]:[],e))}function sc(b,
a,c){I(c)||(c={});c=z({strictDi:!1},c);var d=function(){b=B(b);if(b.injector()){var d=b[0]===Y?"document":va(b);throw Ka("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=Ob(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},
e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;M&&e.test(M.name)&&(c.debugInfoEnabled=!0,M.name=M.name.replace(e,""));if(M&&!f.test(M.name))return d();M.name=M.name.replace(f,"");ga.resumeBootstrap=function(b){s(b,function(b){a.push(b)});d()}}function Kd(){M.name="NG_ENABLE_DEBUG_INFO!"+M.name;M.location.reload()}function Ld(b){b=ga.element(b).injector();if(!b)throw Ka("test");return b.get("$$testability")}function tc(b,a){a=a||"_";return b.replace(Md,function(b,d){return(d?a:"")+b.toLowerCase()})}
function Nd(){var b;uc||((sa=M.jQuery)&&sa.fn.on?(B=sa,z(sa.fn,{scope:La.scope,isolateScope:La.isolateScope,controller:La.controller,injector:La.injector,inheritedData:La.inheritedData}),b=sa.cleanData,sa.cleanData=function(a){var c;if(Pb)Pb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=sa._data(e,"events"))&&c.$destroy&&sa(e).triggerHandler("$destroy");b(a)}):B=R,ga.element=B,uc=!0)}function Qb(b,a,c){if(!b)throw Ka("areq",a||"?",c||"required");return b}function sb(b,a,c){c&&D(b)&&(b=b[b.length-1]);
Qb(G(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ma(b,a){if("hasOwnProperty"===b)throw Ka("badname",a);}function vc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&G(b)?nc(e,b):b}function tb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return B(c)}function ha(){return Object.create(null)}function Od(b){function a(a,b,c){return a[b]||
(a[b]=c())}var c=T("$injector"),d=T("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||T;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return u}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],q=a("$injector","invoke","push",d),u={_invokeQueue:b,_configBlocks:d,_runBlocks:e,requires:g,name:f,provider:a("$provide",
"provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:q,run:function(a){e.push(a);return this}};h&&q(h);return u})}})}function Pd(b){z(b,{bootstrap:sc,copy:Ea,extend:z,equals:fa,element:B,forEach:s,injector:Ob,noop:H,bind:nc,toJson:$a,
fromJson:oc,identity:pa,isUndefined:A,isDefined:y,isString:F,isFunction:G,isObject:I,isNumber:V,isElement:mc,isArray:D,version:Qd,isDate:qa,lowercase:Q,uppercase:ub,callbacks:{counter:0},getTestability:Ld,$$minErr:T,$$csp:ab,reloadWithDebugInfo:Kd});bb=Od(M);try{bb("ngLocale")}catch(a){bb("ngLocale",[]).provider("$locale",Rd)}bb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Sd});a.provider("$compile",wc).directive({a:Td,input:xc,textarea:xc,form:Ud,script:Vd,select:Wd,style:Xd,
option:Yd,ngBind:Zd,ngBindHtml:$d,ngBindTemplate:ae,ngClass:be,ngClassEven:ce,ngClassOdd:de,ngCloak:ee,ngController:fe,ngForm:ge,ngHide:he,ngIf:ie,ngInclude:je,ngInit:ke,ngNonBindable:le,ngPluralize:me,ngRepeat:ne,ngShow:oe,ngStyle:pe,ngSwitch:qe,ngSwitchWhen:re,ngSwitchDefault:se,ngOptions:te,ngTransclude:ue,ngModel:ve,ngList:we,ngChange:xe,pattern:yc,ngPattern:yc,required:zc,ngRequired:zc,minlength:Ac,ngMinlength:Ac,maxlength:Bc,ngMaxlength:Bc,ngValue:ye,ngModelOptions:ze}).directive({ngInclude:Ae}).directive(vb).directive(Cc);
a.provider({$anchorScroll:Be,$animate:Ce,$browser:De,$cacheFactory:Ee,$controller:Fe,$document:Ge,$exceptionHandler:He,$filter:Dc,$interpolate:Ie,$interval:Je,$http:Ke,$httpBackend:Le,$location:Me,$log:Ne,$parse:Oe,$rootScope:Pe,$q:Qe,$$q:Re,$sce:Se,$sceDelegate:Te,$sniffer:Ue,$templateCache:Ve,$templateRequest:We,$$testability:Xe,$timeout:Ye,$window:Ze,$$rAF:$e,$$asyncCallback:af,$$jqLite:bf})}])}function cb(b){return b.replace(cf,function(a,b,d,e){return e?d.toUpperCase():d}).replace(df,"Moz$1")}
function Ec(b){b=b.nodeType;return b===oa||!b||9===b}function Fc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Rb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(ef.exec(b)||["",""])[1].toLowerCase();d=ia[d]||ia._default;c.innerHTML=d[1]+b.replace(ff,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=Ya(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";s(f,function(a){e.appendChild(a)});return e}function R(b){if(b instanceof
R)return b;var a;F(b)&&(b=U(b),a=!0);if(!(this instanceof R)){if(a&&"<"!=b.charAt(0))throw Sb("nosel");return new R(b)}if(a){a=Y;var c;b=(c=gf.exec(b))?[a.createElement(c[1])]:(c=Fc(b,a))?c.childNodes:[]}Gc(this,b)}function Tb(b){return b.cloneNode(!0)}function wb(b,a){a||xb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)xb(c[d])}function Hc(b,a,c,d){if(y(d))throw Sb("offargs");var e=(d=yb(b))&&d.events,f=d&&d.handle;if(f)if(a)s(a.split(" "),function(a){if(y(c)){var d=
e[a];Xa(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function xb(b,a){var c=b.ng339,d=c&&zb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Hc(b)),delete zb[c],b.ng339=t))}function yb(b,a){var c=b.ng339,c=c&&zb[c];a&&!c&&(b.ng339=c=++hf,c=zb[c]={events:{},data:{},handle:t});return c}function Ub(b,a,c){if(Ec(b)){var d=y(c),e=!d&&a&&!I(a),f=!a;b=(b=yb(b,!e))&&b.data;
if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];z(b,a)}}}function Ab(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Bb(b,a){a&&b.setAttribute&&s(a.split(" "),function(a){b.setAttribute("class",U((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+U(a)+" "," ")))})}function Cb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");s(a.split(" "),function(a){a=
U(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",U(c))}}function Gc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Ic(b,a){return Db(b,"$"+(a||"ngController")+"Controller")}function Db(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=D(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=B.data(b,a[d]))!==t)return c;b=b.parentNode||11===b.nodeType&&b.host}}
function Jc(b){for(wb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Kc(b,a){a||wb(b);var c=b.parentNode;c&&c.removeChild(b)}function jf(b,a){a=a||M;if("complete"===a.document.readyState)a.setTimeout(b);else B(a).on("load",b)}function Lc(b,a){var c=Eb[a.toLowerCase()];return c&&Mc[ua(b)]&&c}function kf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Nc[a]}function lf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:
0;if(g){if(A(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=ra(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function bf(){this.$get=function(){return z(R,{hasClass:function(b,a){b.attr&&(b=b[0]);return Ab(b,a)},addClass:function(b,
a){b.attr&&(b=b[0]);return Cb(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return Bb(b,a)}})}}function Na(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Fd)():c+":"+b}function db(b,a){if(a){var c=0;this.nextUid=function(){return++c}}s(b,this.put,this)}function mf(b){return(b=b.toString().replace(Oc,"").match(Pc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Vb(b,
a,c){var d;if("function"===typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw F(c)&&c||(c=b.name||mf(b)),Ga("strictdi",c);a=b.toString().replace(Oc,"");a=a.match(Pc);s(a[1].split(nf),function(a){a.replace(of,function(a,b,c){d.push(c)})})}b.$inject=d}}else D(b)?(a=b.length-1,sb(b[a],"fn"),d=b.slice(0,a)):sb(b,"fn",!0);return d}function Ob(b,a){function c(a){return function(b,c){if(I(b))s(b,kc(a));else return a(b,c)}}function d(a,b){Ma(a,"service");if(G(b)||D(b))b=q.instantiate(b);if(!b.$get)throw Ga("pget",
a);return n[a+"Provider"]=b}function e(a,b){return function(){var c=r.invoke(b,this);if(A(c))throw Ga("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;s(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=q.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{F(a)?(c=bb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):G(a)?b.push(q.invoke(a)):D(a)?b.push(q.invoke(a)):sb(a,"module")}catch(e){throw D(a)&&
(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ga("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Ga("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[],k=Vb(b,a,g),l,q,n;q=0;for(l=k.length;q<l;q++){n=k[q];if("string"!==
typeof n)throw Ga("itkn",n);h.push(f&&f.hasOwnProperty(n)?f[n]:d(n,g))}D(b)&&(b=b[l]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((D(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return I(a)||G(a)?a:d},get:d,annotate:Vb,has:function(a){return n.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],m=new db([],!0),n={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),
value:c(function(a,b){return f(a,da(b),!1)}),constant:c(function(a,b){Ma(a,"constant");n[a]=b;u[a]=b}),decorator:function(a,b){var c=q.get(a+"Provider"),d=c.$get;c.$get=function(){var a=r.invoke(d,c);return r.invoke(b,null,{$delegate:a})}}}},q=n.$injector=h(n,function(a,b){ga.isString(b)&&k.push(b);throw Ga("unpr",k.join(" <- "));}),u={},r=u.$injector=h(u,function(a,b){var c=q.get(a+"Provider",b);return r.invoke(c.$get,c,t,a)});s(g(b),function(a){r.invoke(a||H)});return r}function Be(){var b=!0;this.disableAutoScrolling=
function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ua(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;G(c)?c=c():mc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):V(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(){var a=c.hash(),b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?
f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||jf(function(){d.$evalAsync(g)})});return g}]}function af(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function pf(b,a,c,d){function e(a){try{a.apply(null,Za.call(arguments,1))}finally{if(v--,0===v)for(;w.length;)try{w.pop()()}catch(b){c.error(b)}}}function f(a,b){(function N(){s(L,function(a){a()});C=b(N,
a)})()}function g(){h();l()}function h(){x=b.history.state;x=A(x)?null:x;fa(x,J)&&(x=J);J=x}function l(){if(E!==m.url()||P!==x)E=m.url(),P=x,s(W,function(a){a(m.url(),x)})}function k(a){try{return decodeURIComponent(a)}catch(b){return a}}var m=this,n=a[0],q=b.location,u=b.history,r=b.setTimeout,O=b.clearTimeout,p={};m.isMock=!1;var v=0,w=[];m.$$completeOutstandingRequest=e;m.$$incOutstandingRequestCount=function(){v++};m.notifyWhenNoOutstandingRequests=function(a){s(L,function(a){a()});0===v?a():
w.push(a)};var L=[],C;m.addPollFn=function(a){A(C)&&f(100,r);L.push(a);return a};var x,P,E=q.href,S=a.find("base"),X=null;h();P=x;m.url=function(a,c,e){A(e)&&(e=null);q!==b.location&&(q=b.location);u!==b.history&&(u=b.history);if(a){var f=P===e;if(E===a&&(!d.history||f))return m;var g=E&&Ha(E)===Ha(a);E=a;P=e;!d.history||g&&f?(g||(X=a),c?q.replace(a):g?(c=q,e=a.indexOf("#"),a=-1===e?"":a.substr(e+1),c.hash=a):q.href=a):(u[c?"replaceState":"pushState"](e,"",a),h(),P=x);return m}return X||q.href.replace(/%27/g,
"'")};m.state=function(){return x};var W=[],wa=!1,J=null;m.onUrlChange=function(a){if(!wa){if(d.history)B(b).on("popstate",g);B(b).on("hashchange",g);wa=!0}W.push(a);return a};m.$$checkUrlChange=l;m.baseHref=function(){var a=S.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var ea={},y="",ca=m.baseHref();m.cookies=function(a,b){var d,e,f,g;if(a)b===t?n.cookie=encodeURIComponent(a)+"=;path="+ca+";expires=Thu, 01 Jan 1970 00:00:00 GMT":F(b)&&(d=(n.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+
";path="+ca).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(n.cookie!==y)for(y=n.cookie,d=y.split("; "),ea={},f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),0<g&&(a=k(e.substring(0,g)),ea[a]===t&&(ea[a]=k(e.substring(g+1))));return ea}};m.defer=function(a,b){var c;v++;c=r(function(){delete p[c];e(a)},b||0);p[c]=!0;return c};m.defer.cancel=function(a){return p[a]?(delete p[a],O(a),e(H),!0):!1}}function De(){this.$get=["$window",
"$log","$sniffer","$document",function(b,a,c,d){return new pf(b,d,a,c)}]}function Ee(){this.$get=function(){function b(b,d){function e(a){a!=n&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw T("$cacheFactory")("iid",b);var g=0,h=z({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,m={},n=null,q=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}if(!A(b))return a in l||g++,l[a]=b,g>k&&this.remove(q.key),
b},get:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;b==n&&(n=b.p);b==q&&(q=b.n);f(b.n,b.p);delete m[a]}delete l[a];g--},removeAll:function(){l={};g=0;m={};n=q=null},destroy:function(){m=h=l=null;delete a[b]},info:function(){return z({},h,{size:g})}}}var a={};b.info=function(){var b={};s(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Ve(){this.$get=["$cacheFactory",
function(b){return b("templates")}]}function wc(b,a){function c(a,b){var c=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,d={};s(a,function(a,e){var f=a.match(c);if(!f)throw ja("iscp",b,e,a);d[e]={mode:f[1][0],collection:"*"===f[2],optional:"?"===f[3],attrName:f[4]||e}});return d}var d={},e=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,f=/(([\w\-]+)(?:\:([^;]+))?;?)/,g=Gd("ngSrc,ngSrcset,src,srcset"),h=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,l=/^(on[a-z]+|formaction)$/;this.directive=function n(a,e){Ma(a,"directive");F(a)?(Qb(e,
"directiveFactory"),d.hasOwnProperty(a)||(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];s(d[a],function(d,g){try{var h=b.invoke(d);G(h)?h={compile:da(h)}:!h.compile&&h.link&&(h.compile=da(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";I(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(l){e(l)}});return f}])),d[a].push(e)):s(a,kc(n));return this};this.aHrefSanitizationWhitelist=
function(b){return y(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var k=!0;this.debugInfoEnabled=function(a){return y(a)?(k=a,this):k};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,r,O,p,v,w,L,C,x){function P(a,b){try{a.addClass(b)}catch(c){}}
function E(a,b,c,d,e){a instanceof B||(a=B(a));s(a,function(b,c){b.nodeType==pb&&b.nodeValue.match(/\S+/)&&(a[c]=B(b).wrap("<span></span>").parent()[0])});var f=S(a,b,a,c,d,e);E.$$addScopeClass(a);var g=null;return function(b,c,d){Qb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ua(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?B(Wb(g,B("<div>").append(a).html())):
c?La.clone.call(a):a;if(h)for(var l in h)d.data("$"+l+"Controller",h[l].instance);E.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function S(a,b,c,d,e,f){function g(a,c,d,e){var f,l,k,q,n,p,w;if(r)for(w=Array(c.length),q=0;q<h.length;q+=3)f=h[q],w[f]=c[f];else w=c;q=0;for(n=h.length;q<n;)l=w[h[q++]],c=h[q++],f=h[q++],c?(c.scope?(k=a.$new(),E.$$addScopeInfo(B(l),k)):k=a,p=c.transcludeOnThisElement?X(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?X(a,
b):null,c(f,k,l,d,p)):f&&f(a,l.childNodes,t,e)}for(var h=[],l,k,q,n,r,p=0;p<a.length;p++){l=new Xb;k=W(a[p],[],l,0===p?d:t,e);(f=k.length?ea(k,a[p],l,b,c,null,[],[],f):null)&&f.scope&&E.$$addScopeClass(l.$$element);l=f&&f.terminal||!(q=a[p].childNodes)||!q.length?null:S(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(p,f,l),n=!0,r=r||f;f=null}return n?g:null}function X(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,
{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function W(a,b,c,d,g){var h=c.$attr,l;switch(a.nodeType){case oa:ca(b,ya(ua(a)),"E",d,g);for(var k,q,n,r=a.attributes,p=0,w=r&&r.length;p<w;p++){var O=!1,L=!1;k=r[p];l=k.name;q=U(k.value);k=ya(l);if(n=fb.test(k))l=l.replace(Rc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var u=k.replace(/(Start|End)$/,"");A(u)&&k===u+"Start"&&(O=l,L=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=ya(l.toLowerCase());
h[k]=l;if(n||!c.hasOwnProperty(k))c[k]=q,Lc(a,k)&&(c[k]=!0);Pa(a,b,q,k,n);ca(b,k,"A",d,g,O,L)}a=a.className;I(a)&&(a=a.animVal);if(F(a)&&""!==a)for(;l=f.exec(a);)k=ya(l[2]),ca(b,k,"C",d,g)&&(c[k]=U(l[3])),a=a.substr(l.index+l[0].length);break;case pb:M(b,a.nodeValue);break;case 8:try{if(l=e.exec(a.nodeValue))k=ya(l[1]),ca(b,k,"M",d,g)&&(c[k]=U(l[2]))}catch(v){}}b.sort(N);return b}function wa(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);a.nodeType==
oa&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function J(a,b,c){return function(d,e,f,g,h){e=wa(e[0],b,c);return a(d,e,f,g,h)}}function ea(a,d,e,f,g,l,k,n,r){function w(a,b,c,d){if(a){c&&(a=J(a,c,d));a.require=K.require;a.directiveName=z;if(S===K||K.$$isolateScope)a=Z(a,{isolateScope:!0});k.push(a)}if(b){c&&(b=J(b,c,d));b.require=K.require;b.directiveName=z;if(S===K||K.$$isolateScope)b=Z(b,{isolateScope:!0});n.push(b)}}function L(a,
b,c,d){var e,f="data",g=!1,l=c,k;if(F(b)){k=b.match(h);b=b.substring(k[0].length);k[3]&&(k[1]?k[3]=null:k[1]=k[3]);"^"===k[1]?f="inheritedData":"^^"===k[1]&&(f="inheritedData",l=c.parent());"?"===k[2]&&(g=!0);e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||l[f]("$"+b+"Controller");if(!e&&!g)throw ja("ctreq",b,a);return e||null}D(b)&&(e=[],s(b,function(b){e.push(L(a,b,c,d))}));return e}function v(a,c,f,g,h){function l(a,b,c){var d;Va(a)||(c=b,b=a,a=t);H&&(d=P);c||(c=H?W.parent():W);return h(a,
b,d,c,wa)}var r,w,u,x,P,eb,W,J;d===f?(J=e,W=e.$$element):(W=B(f),J=new Xb(W,e));S&&(x=c.$new(!0));h&&(eb=l,eb.$$boundTransclude=h);C&&(X={},P={},s(C,function(a){var b={$scope:a===S||a.$$isolateScope?x:c,$element:W,$attrs:J,$transclude:eb};u=a.controller;"@"==u&&(u=J[a.name]);b=p(u,b,!0,a.controllerAs);P[a.name]=b;H||W.data("$"+a.name+"Controller",b.instance);X[a.name]=b}));if(S){E.$$addScopeInfo(W,x,!0,!(ka&&(ka===S||ka===S.$$originalDirective)));E.$$addScopeClass(W,!0);g=X&&X[S.name];var xa=x;g&&
g.identifier&&!0===S.bindToController&&(xa=g.instance);s(x.$$isolateBindings=S.$$isolateBindings,function(a,d){var e=a.attrName,f=a.optional,g,h,l,k;switch(a.mode){case "@":J.$observe(e,function(a){xa[d]=a});J.$$observers[e].$$scope=c;J[e]&&(xa[d]=b(J[e])(c));break;case "=":if(f&&!J[e])break;h=O(J[e]);k=h.literal?fa:function(a,b){return a===b||a!==a&&b!==b};l=h.assign||function(){g=xa[d]=h(c);throw ja("nonassign",J[e],S.name);};g=xa[d]=h(c);f=function(a){k(a,xa[d])||(k(a,g)?l(c,a=xa[d]):xa[d]=a);
return g=a};f.$stateful=!0;f=a.collection?c.$watchCollection(J[e],f):c.$watch(O(J[e],f),null,h.literal);x.$on("$destroy",f);break;case "&":h=O(J[e]),xa[d]=function(a){return h(c,a)}}})}X&&(s(X,function(a){a()}),X=null);g=0;for(r=k.length;g<r;g++)w=k[g],$(w,w.isolateScope?x:c,W,J,w.require&&L(w.directiveName,w.require,W,P),eb);var wa=c;S&&(S.template||null===S.templateUrl)&&(wa=x);a&&a(wa,f.childNodes,t,h);for(g=n.length-1;0<=g;g--)w=n[g],$(w,w.isolateScope?x:c,W,J,w.require&&L(w.directiveName,w.require,
W,P),eb)}r=r||{};for(var x=-Number.MAX_VALUE,P,C=r.controllerDirectives,X,S=r.newIsolateScopeDirective,ka=r.templateDirective,ea=r.nonTlbTranscludeDirective,ca=!1,A=!1,H=r.hasElementTranscludeDirective,aa=e.$$element=B(d),K,z,N,Aa=f,Q,M=0,R=a.length;M<R;M++){K=a[M];var Pa=K.$$start,fb=K.$$end;Pa&&(aa=wa(d,Pa,fb));N=t;if(x>K.priority)break;if(N=K.scope)K.templateUrl||(I(N)?(Oa("new/isolated scope",S||P,K,aa),S=K):Oa("new/isolated scope",S,K,aa)),P=P||K;z=K.name;!K.templateUrl&&K.controller&&(N=K.controller,
C=C||{},Oa("'"+z+"' controller",C[z],K,aa),C[z]=K);if(N=K.transclude)ca=!0,K.$$tlb||(Oa("transclusion",ea,K,aa),ea=K),"element"==N?(H=!0,x=K.priority,N=aa,aa=e.$$element=B(Y.createComment(" "+z+": "+e[z]+" ")),d=aa[0],V(g,Za.call(N,0),d),Aa=E(N,f,x,l&&l.name,{nonTlbTranscludeDirective:ea})):(N=B(Tb(d)).contents(),aa.empty(),Aa=E(N,f));if(K.template)if(A=!0,Oa("template",ka,K,aa),ka=K,N=G(K.template)?K.template(aa,e):K.template,N=Sc(N),K.replace){l=K;N=Rb.test(N)?Tc(Wb(K.templateNamespace,U(N))):[];
d=N[0];if(1!=N.length||d.nodeType!==oa)throw ja("tplrt",z,"");V(g,aa,d);R={$attr:{}};N=W(d,[],R);var ba=a.splice(M+1,a.length-(M+1));S&&y(N);a=a.concat(N).concat(ba);Qc(e,R);R=a.length}else aa.html(N);if(K.templateUrl)A=!0,Oa("template",ka,K,aa),ka=K,K.replace&&(l=K),v=T(a.splice(M,a.length-M),aa,e,g,ca&&Aa,k,n,{controllerDirectives:C,newIsolateScopeDirective:S,templateDirective:ka,nonTlbTranscludeDirective:ea}),R=a.length;else if(K.compile)try{Q=K.compile(aa,e,Aa),G(Q)?w(null,Q,Pa,fb):Q&&w(Q.pre,
Q.post,Pa,fb)}catch(qf){c(qf,va(aa))}K.terminal&&(v.terminal=!0,x=Math.max(x,K.priority))}v.scope=P&&!0===P.scope;v.transcludeOnThisElement=ca;v.elementTranscludeOnThisElement=H;v.templateOnThisElement=A;v.transclude=Aa;r.hasElementTranscludeDirective=H;return v}function y(a){for(var b=0,c=a.length;b<c;b++){var d=b,e;e=z(Object.create(a[b]),{$$isolateScope:!0});a[d]=e}}function ca(b,e,f,g,h,l,k){if(e===h)return null;h=null;if(d.hasOwnProperty(e)){var q;e=a.get(e+"Directive");for(var r=0,p=e.length;r<
p;r++)try{if(q=e[r],(g===t||g>q.priority)&&-1!=q.restrict.indexOf(f)){if(l){var w={$$start:l,$$end:k};q=z(Object.create(q),w)}b.push(q);h=q}}catch(O){c(O)}}return h}function A(b){if(d.hasOwnProperty(b))for(var c=a.get(b+"Directive"),e=0,f=c.length;e<f;e++)if(b=c[e],b.multiElement)return!0;return!1}function Qc(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;s(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});s(b,function(b,f){"class"==f?(P(e,b),a["class"]=
(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function T(a,b,c,d,e,f,g,h){var l=[],k,q,n=b[0],p=a.shift(),w=z({},p,{templateUrl:null,transclude:null,replace:null,$$originalDirective:p}),O=G(p.templateUrl)?p.templateUrl(b,c):p.templateUrl,u=p.templateNamespace;b.empty();r(L.getTrustedResourceUrl(O)).then(function(r){var L,v;r=Sc(r);if(p.replace){r=Rb.test(r)?Tc(Wb(u,
U(r))):[];L=r[0];if(1!=r.length||L.nodeType!==oa)throw ja("tplrt",p.name,O);r={$attr:{}};V(d,b,L);var x=W(L,[],r);I(p.scope)&&y(x);a=x.concat(a);Qc(c,r)}else L=n,b.html(r);a.unshift(w);k=ea(a,L,c,e,b,p,f,g,h);s(d,function(a,c){a==L&&(d[c]=b[0])});for(q=S(b[0].childNodes,e);l.length;){r=l.shift();v=l.shift();var C=l.shift(),E=l.shift(),x=b[0];if(!r.$$destroyed){if(v!==n){var J=v.className;h.hasElementTranscludeDirective&&p.replace||(x=Tb(L));V(C,B(v),x);P(B(x),J)}v=k.transcludeOnThisElement?X(r,k.transclude,
E):E;k(q,r,x,d,v)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(k.transcludeOnThisElement&&(a=X(b,k.transclude,e)),k(q,b,c,d,a)))}}function N(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Oa(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,va(d));}function M(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&E.$$addBindingClass(a);return function(a,c){var e=c.parent();
b||E.$$addBindingClass(e);E.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Wb(a,b){a=Q(a||"html");switch(a){case "svg":case "math":var c=Y.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function R(a,b){if("srcdoc"==b)return L.HTML;var c=ua(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return L.RESOURCE_URL}function Pa(a,c,d,e,f){var h=R(a,e);f=g[e]||f;var k=b(d,!0,
h,f);if(k){if("multiple"===e&&"select"===ua(a))throw ja("selmulti",va(a));c.push({priority:100,compile:function(){return{pre:function(a,c,g){c=g.$$observers||(g.$$observers={});if(l.test(e))throw ja("nodomevents");var n=g[e];n!==d&&(k=n&&b(n,!0,h,f),d=n);k&&(g[e]=k(a),(c[e]||(c[e]=[])).$$inter=!0,(g.$$observers&&g.$$observers[e].$$scope||a).$watch(k,function(a,b){"class"===e&&a!=b?g.$updateClass(a,b):g.$set(e,a)}))}}}})}}function V(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<
h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var l=a.length;g<l;g++,h++)h<l?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=Y.createDocumentFragment();a.appendChild(d);B(c).data(B(d).data());sa?(Pb=!0,sa.cleanData([d])):delete B.cache[d[B.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],B(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Z(a,b){return z(function(){return a.apply(null,arguments)},a,b)}function $(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,
va(d))}}var Xb=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};Xb.prototype={$normalize:ya,$addClass:function(a){a&&0<a.length&&C.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&C.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Uc(a,b);c&&c.length&&C.addClass(this.$$element,c);(c=Uc(b,a))&&c.length&&C.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=
Lc(f,a),h=kf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=tc(a,"-"));g=ua(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=x(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=U(b),l=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,l=/\s/.test(h)?l:/(,)/,h=h.split(l),l=Math.floor(h.length/2),k=0;k<l;k++)var q=2*k,g=g+x(U(h[q]),!0),g=g+(" "+U(h[q+1]));h=U(h[2*k]).split(/\s/);g+=x(U(h[0]),!0);2===h.length&&
(g+=" "+U(h[1]));this[a]=b=g}!1!==d&&(null===b||b===t?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&s(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ha()),e=d[a]||(d[a]=[]);e.push(b);v.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){Xa(e,b)}}};var Aa=b.startSymbol(),ka=b.endSymbol(),Sc="{{"==Aa||"}}"==ka?pa:function(a){return a.replace(/\{\{/g,Aa).replace(/}}/g,ka)},fb=
/^ngAttr[A-Z]/;E.$$addBindingInfo=k?function(a,b){var c=a.data("$binding")||[];D(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:H;E.$$addBindingClass=k?function(a){P(a,"ng-binding")}:H;E.$$addScopeInfo=k?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:H;E.$$addScopeClass=k?function(a,b){P(a,b?"ng-isolate-scope":"ng-scope")}:H;return E}]}function ya(b){return cb(b.replace(Rc,""))}function Uc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=
d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Tc(b){b=B(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&rf.call(b,a,1);return b}function Fe(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){Ma(a,"controller");I(a)?z(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!I(a.$scope))throw T("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,h,
l,k){var m,n,q;l=!0===l;k&&F(k)&&(q=k);F(g)&&(k=g.match(c),n=k[1],q=q||k[3],g=b.hasOwnProperty(n)?b[n]:vc(h.$scope,n,!0)||(a?vc(e,n,!0):t),sb(g,n,!0));if(l)return l=(D(g)?g[g.length-1]:g).prototype,m=Object.create(l||null),q&&f(h,q,m,n||g.name),z(function(){d.invoke(g,m,h,n);return m},{instance:m,identifier:q});m=d.instantiate(g,h,n);q&&f(h,q,m,n||g.name);return m}}]}function Ge(){this.$get=["$window",function(b){return B(b.document)}]}function He(){this.$get=["$log",function(b){return function(a,
c){b.error.apply(b,arguments)}}]}function Yb(b,a){if(F(b)){var c=b.replace(sf,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(Vc))||(d=(d=c.match(tf))&&uf[d[0]].test(c));d&&(b=oc(c))}}return b}function Wc(b){var a=ha(),c,d,e;if(!b)return a;s(b.split("\n"),function(b){e=b.indexOf(":");c=Q(U(b.substr(0,e)));d=U(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Xc(b){var a=I(b)?b:t;return function(c){a||(a=Wc(b));return c?(c=a[Q(c)],void 0===c&&(c=null),c):a}}function Yc(b,
a,c,d){if(G(d))return d(b,a,c);s(d,function(d){b=d(b,a,c)});return b}function Ke(){var b=this.defaults={transformResponse:[Yb],transformRequest:[function(a){return I(a)&&"[object File]"!==Da.call(a)&&"[object Blob]"!==Da.call(a)&&"[object FormData]"!==Da.call(a)?$a(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ra(Zb),put:ra(Zb),patch:ra(Zb)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},a=!1;this.useApplyAsync=function(b){return y(b)?(a=!!b,this):a};var c=this.interceptors=
[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,g,h,l){function k(a){function c(a){var b=z({},a);b.data=a.data?Yc(a.data,a.headers,a.status,e.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:h.reject(b)}function d(a){var b,c={};s(a,function(a,d){G(a)?(b=a(),null!=b&&(c[d]=b)):c[d]=a});return c}if(!ga.isObject(a))throw T("$http")("badreq",a);var e=z({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse},
a);e.headers=function(a){var c=b.headers,e=z({},a.headers),f,g,c=z({},c.common,c[Q(a.method)]);a:for(f in c){a=Q(f);for(g in e)if(Q(g)===a)continue a;e[f]=c[f]}return d(e)}(a);e.method=ub(e.method);var f=[function(a){var d=a.headers,e=Yc(a.data,Xc(d),t,a.transformRequest);A(e)&&s(d,function(a,b){"content-type"===Q(b)&&delete d[b]});A(a.withCredentials)&&!A(b.withCredentials)&&(a.withCredentials=b.withCredentials);return m(a,e).then(c,c)},t],g=h.when(e);for(s(u,function(a){(a.request||a.requestError)&&
f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var l=f.shift(),g=g.then(a,l)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,e)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,e)});return g};return g}function m(c,f){function l(b,c,d,e){function f(){m(c,b,d,e)}P&&(200<=b&&300>b?P.put(X,[b,c,Wc(d),e]):P.remove(X));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function m(a,
b,d,e){b=Math.max(b,0);(200<=b&&300>b?C.resolve:C.reject)({data:a,status:b,headers:Xc(d),config:c,statusText:e})}function w(a){m(a.data,a.status,ra(a.headers()),a.statusText)}function u(){var a=k.pendingRequests.indexOf(c);-1!==a&&k.pendingRequests.splice(a,1)}var C=h.defer(),x=C.promise,P,E,s=c.headers,X=n(c.url,c.params);k.pendingRequests.push(c);x.then(u,u);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(P=I(c.cache)?c.cache:I(b.cache)?b.cache:q);P&&(E=P.get(X),y(E)?E&&
G(E.then)?E.then(w,w):D(E)?m(E[1],E[0],ra(E[2]),E[3]):m(E,200,{},"OK"):P.put(X,x));A(E)&&((E=Zc(c.url)?e.cookies()[c.xsrfCookieName||b.xsrfCookieName]:t)&&(s[c.xsrfHeaderName||b.xsrfHeaderName]=E),d(c.method,X,f,l,s,c.timeout,c.withCredentials,c.responseType));return x}function n(a,b){if(!b)return a;var c=[];Ed(b,function(a,b){null===a||A(a)||(D(a)||(a=[a]),s(a,function(a){I(a)&&(a=qa(a)?a.toISOString():$a(a));c.push(Fa(b)+"="+Fa(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));
return a}var q=f("$http"),u=[];s(c,function(a){u.unshift(F(a)?l.get(a):l.invoke(a))});k.pendingRequests=[];(function(a){s(arguments,function(a){k[a]=function(b,c){return k(z(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){s(arguments,function(a){k[a]=function(b,c,d){return k(z(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");k.defaults=b;return k}]}function vf(){return new M.XMLHttpRequest}function Le(){this.$get=["$browser","$window","$document",function(b,a,c){return wf(b,
vf,b.defer,a.angular.callbacks,c[0])}]}function wf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,u="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),u=a.type,g="error"===a.type?404:200);c&&c(g,u)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,
h,l,k,m,n,q,u){function r(){v&&v();w&&w.abort()}function O(a,d,e,f,g){C!==t&&c.cancel(C);v=w=null;a(d,e,f,g);b.$$completeOutstandingRequest(H)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==Q(e)){var p="_"+(d.counter++).toString(36);d[p]=function(a){d[p].data=a;d[p].called=!0};var v=f(h.replace("JSON_CALLBACK","angular.callbacks."+p),p,function(a,b){O(k,a,d[p].data,"",b);d[p]=H})}else{var w=a();w.open(e,h,!0);s(m,function(a,b){y(a)&&w.setRequestHeader(b,a)});w.onload=function(){var a=w.statusText||
"",b="response"in w?w.response:w.responseText,c=1223===w.status?204:w.status;0===c&&(c=b?200:"file"==Ba(h).protocol?404:0);O(k,c,b,w.getAllResponseHeaders(),a)};e=function(){O(k,-1,null,null,"")};w.onerror=e;w.onabort=e;q&&(w.withCredentials=!0);if(u)try{w.responseType=u}catch(L){if("json"!==u)throw L;}w.send(l||null)}if(0<n)var C=c(r,n);else n&&G(n.then)&&n.then(r)}}function Ie(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):
a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,u,r){function O(c){return c.replace(k,b).replace(m,a)}function p(a){try{var b=a;a=u?e.getTrusted(u,b):e.valueOf(b);var c;if(r&&!y(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=$a(a)}c=a}return c}catch(g){c=$b("interr",f,g.toString()),d(c)}}r=!!r;for(var v,w,L=0,C=[],x=[],P=f.length,E=[],s=[];L<P;)if(-1!=(v=f.indexOf(b,L))&&-1!=
(w=f.indexOf(a,v+h)))L!==v&&E.push(O(f.substring(L,v))),L=f.substring(v+h,w),C.push(L),x.push(c(L,p)),L=w+l,s.push(E.length),E.push("");else{L!==P&&E.push(O(f.substring(L)));break}if(u&&1<E.length)throw $b("noconcat",f);if(!g||C.length){var X=function(a){for(var b=0,c=C.length;b<c;b++){if(r&&A(a[b]))return;E[s[b]]=a[b]}return E.join("")};return z(function(a){var b=0,c=C.length,e=Array(c);try{for(;b<c;b++)e[b]=x[b](a);return X(e)}catch(g){a=$b("interr",f,g.toString()),d(a)}},{exp:f,expressions:C,$$watchDelegate:function(a,
b,c){var d;return a.$watchGroup(x,function(c,e){var f=X(c);G(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,l=a.length,k=new RegExp(b.replace(/./g,f),"g"),m=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function Je(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var m=a.setInterval,n=a.clearInterval,q=0,u=y(k)&&!k,r=(u?d:c).defer(),O=r.promise;l=y(l)?l:0;O.then(null,null,e);O.$$intervalId=
m(function(){r.notify(q++);0<l&&q>=l&&(r.resolve(q),n(O.$$intervalId),delete f[O.$$intervalId]);u||b.$apply()},h);f[O.$$intervalId]=r;return O}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function Rd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,
lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",
fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function ac(b){b=b.split("/");for(var a=b.length;a--;)b[a]=qb(b[a]);return b.join("/")}function $c(b,a){var c=Ba(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=ba(c.port)||xf[c.protocol]||null}function ad(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Ba(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?
d.pathname.substring(1):d.pathname);a.$$search=qc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function za(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ha(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function bd(b){return b.replace(/(#.+)|#$/,"$1")}function bc(b){return b.substr(0,Ha(b).lastIndexOf("/")+1)}function cc(b,a){this.$$html5=!0;a=a||"";var c=bc(b);$c(b,this);this.$$parse=function(a){var b=za(c,a);if(!F(b))throw Fb("ipthprfx",
a,c);ad(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Nb(this.$$search),b=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=ac(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=za(b,d))!==t?(g=f,g=(f=za(a,f))!==t?c+(za("/",f)||f):b+g):(f=za(c,d))!==t?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function dc(b,a){var c=bc(b);$c(b,this);this.$$parse=
function(d){d=za(b,d)||za(c,d);var e;"#"===d.charAt(0)?(e=za(a,d),A(e)&&(e=d)):e=this.$$html5?d:"";ad(e,this);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Nb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=ac(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ha(b)==Ha(a)?(this.$$parse(a),!0):
!1}}function cd(b,a){this.$$html5=!0;dc.apply(this,arguments);var c=bc(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ha(d)?f=d:(g=za(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Nb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=ac(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Gb(b){return function(){return this[b]}}function dd(b,a){return function(c){if(A(c))return this[b];
this[b]=a(c);this.$$compose();return this}}function Me(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return y(a)?(b=a,this):b};this.html5Mode=function(b){return Wa(b)?(a.enabled=b,this):I(b)?(Wa(b.enabled)&&(a.enabled=b.enabled),Wa(b.requireBase)&&(a.requireBase=b.requireBase),Wa(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),
f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,m;m=d.baseHref();var n=d.url(),q;if(a.enabled){if(!m&&a.requireBase)throw Fb("nobase");q=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(m||"/");m=e.history?cc:cd}else q=Ha(n),m=dc;k=new m(q,"#"+b);k.$$parseLinkUrl(n,n);k.$$state=d.state();var u=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&
!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=B(b.target);"a"!==ua(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");I(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=Ba(h.animVal).href);u.test(h)||!h||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});k.absUrl()!=n&&d.url(k.absUrl(),!0);var r=!0;d.onUrlChange(function(a,
b){c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(r=!1,l(d,e)))});c.$$phase||c.$digest()});c.$watch(function(){var a=bd(d.url()),b=bd(k.absUrl()),f=d.state(),g=k.$$replace,q=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(r||q)r=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===
b&&(d?(k.$$parse(a),k.$$state=f):(q&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function Ne(){var b=!0,a=this;this.debugEnabled=function(a){return y(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||H;a=!1;try{a=!!e.apply}catch(l){}return a?
function(){var a=[];s(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function ta(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw la("isecfld",a);return b}function ma(b,a){if(b){if(b.constructor===b)throw la("isecfn",a);if(b.window===
b)throw la("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw la("isecdom",a);if(b===Object)throw la("isecobj",a);}return b}function ec(b){return b.constant}function gb(b,a,c,d,e){ma(b,e);ma(a,e);c=c.split(".");for(var f,g=0;1<c.length;g++){f=ta(c.shift(),e);var h=0===g&&a&&a[f]||b[f];h||(h={},b[f]=h);b=ma(h,e)}f=ta(c.shift(),e);ma(b[f],e);return b[f]=d}function Qa(b){return"constructor"==b}function ed(b,a,c,d,e,f,g){ta(b,f);ta(a,f);ta(c,f);ta(d,f);ta(e,f);var h=function(a){return ma(a,
f)},l=g||Qa(b)?h:pa,k=g||Qa(a)?h:pa,m=g||Qa(c)?h:pa,n=g||Qa(d)?h:pa,q=g||Qa(e)?h:pa;return function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==h)return h;h=l(h[b]);if(!a)return h;if(null==h)return t;h=k(h[a]);if(!c)return h;if(null==h)return t;h=m(h[c]);if(!d)return h;if(null==h)return t;h=n(h[d]);return e?null==h?t:h=q(h[e]):h}}function yf(b,a){return function(c,d){return b(c,d,ma,a)}}function zf(b,a,c){var d=a.expensiveChecks,e=d?Af:Bf,f=e[b];if(f)return f;var g=b.split("."),h=g.length;if(a.csp)f=
6>h?ed(g[0],g[1],g[2],g[3],g[4],c,d):function(a,b){var e=0,f;do f=ed(g[e++],g[e++],g[e++],g[e++],g[e++],c,d)(a,b),b=t,a=f;while(e<h);return f};else{var l="";d&&(l+="s = eso(s, fe);\nl = eso(l, fe);\n");var k=d;s(g,function(a,b){ta(a,c);var e=(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+"."+a;if(d||Qa(a))e="eso("+e+", fe)",k=!0;l+="if(s == null) return undefined;\ns="+e+";\n"});l+="return s;";a=new Function("s","l","eso","fe",l);a.toString=da(l);k&&(a=yf(a,c));f=a}f.sharedGetter=!0;f.assign=function(a,
c,d){return gb(a,d,b,c,b)};return e[b]=f}function fc(b){return G(b.valueOf)?b.valueOf():Cf.call(b)}function Oe(){var b=ha(),a=ha();this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===b.indexOf(e)&&b.push(e))}return b}function g(a,b){return null==a||null==b?a===b:"object"===
typeof a&&(a=fc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function h(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,[])),h;if(1===e.length){var l=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,l)||(h=d(a),l=b&&fc(b));return h},b,c)}for(var k=[],q=0,n=e.length;q<n;q++)k[q]=g;return a.$watch(function(a){for(var b=!1,c=0,f=e.length;c<f;c++){var l=e[c](a);if(b||(b=!g(l,k[c])))k[c]=l&&fc(l)}b&&(h=d(a));return h},b,c)}function l(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,
c,d){f=a;G(b)&&b.apply(this,arguments);y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function k(a,b,c,d){function e(a){var b=!0;s(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;G(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function m(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){G(b)&&b.apply(this,arguments);e()},c)}function n(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==k&&
c!==l?function(c,d){var e=a(c,d);return b(e,c,d)}:function(c,d){var e=a(c,d),f=b(e,c,d);return y(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==h?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=h,c.inputs=[a]);return c}var q={csp:d.csp,expensiveChecks:!1},u={csp:d.csp,expensiveChecks:!0};return function(d,f,g){var v,w,L;switch(typeof d){case "string":L=d=d.trim();var C=g?a:b;v=C[L];v||(":"===d.charAt(0)&&":"===d.charAt(1)&&(w=!0,d=d.substring(2)),g=g?u:q,v=new gc(g),v=(new hb(v,
c,g)).parse(d),v.constant?v.$$watchDelegate=m:w?(v=e(v),v.$$watchDelegate=v.literal?k:l):v.inputs&&(v.$$watchDelegate=h),C[L]=v);return n(v,f);case "function":return n(d,f);default:return n(H,f)}}}]}function Qe(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return fd(function(a){b.$evalAsync(a)},a)}]}function Re(){this.$get=["$browser","$exceptionHandler",function(b,a){return fd(function(a){b.defer(a)},a)}]}function fd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,
b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=t;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{G(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);
this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=T("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?
this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(I(b)||G(b))d=b&&b.then;G(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=
this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(G(b)?b(c):c)}catch(h){a(h)}}})}};var l=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{G(c)&&(d=c())}catch(e){return l(e,!1)}return d&&G(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},
n=function u(a){if(!G(a))throw h("norslvr",a);if(!(this instanceof u))return new u(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};n.defer=function(){return new g};n.reject=function(a){var b=new g;b.reject(a);return b.promise};n.when=m;n.all=function(a){var b=new g,c=0,d=D(a)?[]:{};s(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};
return n}function $e(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Pe(){var b=10,a=T("$rootScope"),c=null,d=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector",
"$exceptionHandler","$parse","$browser",function(e,f,g,h){function l(){this.$id=++nb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null}function k(b){if(r.$$phase)throw a("inprog",r.$$phase);r.$$phase=b}function m(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}
function q(){for(;v.length;)try{v.shift()()}catch(a){f(a)}d=null}function u(){null===d&&(d=h.defer(function(){r.$apply(q)}))}l.prototype={constructor:l,$new:function(a,b){function c(){d.$$destroyed=!0}var d;b=b||this;a?(d=new l,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=++nb;this.$$ChildScope=null},this.$$ChildScope.prototype=this),d=new this.$$ChildScope);
d.$parent=b;d.$$prevSibling=b.$$childTail;b.$$childHead?(b.$$childTail.$$nextSibling=d,b.$$childTail=d):b.$$childHead=b.$$childTail=d;(a||b!=this)&&d.$on("$destroy",c);return d},$watch:function(a,b,d){var e=g(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,d,e);var f=this.$$watchers,h={fn:b,last:n,get:e,exp:a,eq:!!d};c=null;G(b)||(h.fn=H);f||(f=this.$$watchers=[]);f.unshift(h);return function(){Xa(f,h);c=null}},$watchGroup:function(a,b){function c(){h=!1;l?(l=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),
e=Array(a.length),f=[],g=this,h=!1,l=!0;if(!a.length){var k=!0;g.$evalAsync(function(){k&&b(e,e,g)});return function(){k=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});s(a,function(a,b){var l=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(l)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!A(e)){if(I(e))if(Ta(e))for(f!==q&&(f=q,u=f.length=0,k++),a=e.length,u!==
a&&(k++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(k++,f[b]=g);else{f!==m&&(f=m={},u=0,k++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(k++,f[b]=g)):(u++,f[b]=g,k++));if(u>a)for(b in k++,f)e.hasOwnProperty(b)||(u--,delete f[b])}else f!==e&&(f=e,k++);return k}}c.$stateful=!0;var d=this,e,f,h,l=1<b.length,k=0,n=g(a,c),q=[],m={},p=!0,u=0;return this.$watch(n,function(){p?(p=!1,b(e,e,d)):b(e,h,d);if(l)if(I(e))if(Ta(e)){h=Array(e.length);
for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)rc.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var e,g,l,m,u,v,s=b,t,W=[],y,J;k("$digest");h.$$checkUrlChange();this===r&&null!==d&&(h.defer.cancel(d),q());c=null;do{v=!1;for(t=this;O.length;){try{J=O.shift(),J.scope.$eval(J.expression,J.locals)}catch(B){f(B)}c=null}a:do{if(m=t.$$watchers)for(u=m.length;u--;)try{if(e=m[u])if((g=e.get(t))!==(l=e.last)&&!(e.eq?fa(g,l):"number"===typeof g&&"number"===typeof l&&isNaN(g)&&isNaN(l)))v=
!0,c=e,e.last=e.eq?Ea(g,null):g,e.fn(g,l===n?g:l,t),5>s&&(y=4-s,W[y]||(W[y]=[]),W[y].push({msg:G(e.exp)?"fn: "+(e.exp.name||e.exp.toString()):e.exp,newVal:g,oldVal:l}));else if(e===c){v=!1;break a}}catch(A){f(A)}if(!(m=t.$$childHead||t!==this&&t.$$nextSibling))for(;t!==this&&!(m=t.$$nextSibling);)t=t.$parent}while(t=m);if((v||O.length)&&!s--)throw r.$$phase=null,a("infdig",b,W);}while(v||O.length);for(r.$$phase=null;p.length;)try{p.shift()()}catch(ca){f(ca)}},$destroy:function(){if(!this.$$destroyed){var a=
this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==r){for(var b in this.$$listenerCount)m(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=H;this.$on=this.$watch=this.$watchGroup=
function(){return H};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){r.$$phase||O.length||h.defer(function(){O.length&&r.$digest()});O.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){p.push(a)},$apply:function(a){try{return k("$apply"),this.$eval(a)}catch(b){f(b)}finally{r.$$phase=null;try{r.$digest()}catch(c){throw f(c),c;
}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&v.push(b);u()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,m(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},
l=Ya([h],arguments,1),k,m;do{d=e.$$listeners[a]||c;h.currentScope=e;k=0;for(m=d.length;k<m;k++)if(d[k])try{d[k].apply(null,l)}catch(n){f(n)}else d.splice(k,1),k--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=Ya([e],arguments,1),h,l;c=d;){e.currentScope=c;d=c.$$listeners[a]||
[];h=0;for(l=d.length;h<l;h++)if(d[h])try{d[h].apply(null,g)}catch(k){f(k)}else d.splice(h,1),h--,l--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var r=new l,O=r.$$asyncQueue=[],p=r.$$postDigestQueue=[],v=r.$$applyAsyncQueue=[];return r}]}function Sd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return y(a)?
(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Ba(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function Df(b){if("self"===b)return b;if(F(b)){if(-1<b.indexOf("***"))throw Ca("iwcard",b);b=gd(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(ob(b))return new RegExp("^"+b.source+"$");throw Ca("imatcher");}function hd(b){var a=[];y(b)&&s(b,function(b){a.push(Df(b))});
return a}function Te(){this.SCE_CONTEXTS=na;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=hd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=hd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?Zc(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};
return b}var f=function(a){throw Ca("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[na.HTML]=e(g);h[na.CSS]=e(g);h[na.URL]=e(g);h[na.JS]=e(g);h[na.RESOURCE_URL]=e(h[na.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ca("icontext",a,b);if(null===b||b===t||""===b)return b;if("string"!==typeof b)throw Ca("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===t||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof
g)return e.$$unwrapTrustedValue();if(c===na.RESOURCE_URL){var g=Ba(e.toString()),n,q,u=!1;n=0;for(q=b.length;n<q;n++)if(d(b[n],g)){u=!0;break}if(u)for(n=0,q=a.length;n<q;n++)if(d(a[n],g)){u=!1;break}if(u)return e;throw Ca("insecurl",e.toString());}if(c===na.HTML)return f(e);throw Ca("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Se(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&
8>Ra)throw Ca("iequirks");var d=ra(na);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=pa);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;s(na,function(a,b){var c=Q(b);d[cb("parse_as_"+c)]=function(b){return e(a,b)};d[cb("get_trusted_"+c)]=function(b){return f(a,b)};d[cb("trust_as_"+
c)]=function(b){return g(a,b)}});return d}]}function Ue(){this.$get=["$window","$document",function(b,a){var c={},d=ba((/android (\d+)/.exec(Q((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,m=!1;if(l){for(var n in l)if(k=h.exec(n)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);m=!!("animation"in l||g+"Animation"in
l);!d||k&&m||(k=F(f.body.style.webkitTransition),m=F(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===a&&11>=Ra)return!1;if(A(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:ab(),vendorPrefix:g,transitions:k,animations:m,android:d}}]}function We(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){d.totalPendingRequests++;var g=a.defaults&&a.defaults.transformResponse;D(g)?g=g.filter(function(a){return a!==
Yb}):g===Yb&&(g=null);return a.get(e,{cache:b,transformResponse:g}).finally(function(){d.totalPendingRequests--}).then(function(a){return a.data},function(a){if(!f)throw ja("tpload",e);return c.reject(a)})}d.totalPendingRequests=0;return d}]}function Xe(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];s(a,function(a){var d=ga.element(a).data("$binding");d&&s(d,function(d){c?(new RegExp("(^|\\s)"+
gd(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function Ye(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",
function(b,a,c,d,e){function f(f,l,k){var m=y(k)&&!k,n=(m?d:c).defer(),q=n.promise;l=a.defer(function(){try{n.resolve(f())}catch(a){n.reject(a),e(a)}finally{delete g[q.$$timeoutId]}m||b.$apply()},l);q.$$timeoutId=l;g[l]=n;return q}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Ba(b){Ra&&(Z.setAttribute("href",b),b=Z.href);Z.setAttribute("href",b);return{href:Z.href,protocol:Z.protocol?
Z.protocol.replace(/:$/,""):"",host:Z.host,search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,port:Z.port,pathname:"/"===Z.pathname.charAt(0)?Z.pathname:"/"+Z.pathname}}function Zc(b){b=F(b)?Ba(b):b;return b.protocol===id.protocol&&b.host===id.host}function Ze(){this.$get=da(M)}function Dc(b){function a(c,d){if(I(c)){var e={};s(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+
"Filter")}}];a("currency",jd);a("date",kd);a("filter",Ef);a("json",Ff);a("limitTo",Gf);a("lowercase",Hf);a("number",ld);a("orderBy",md);a("uppercase",If)}function Ef(){return function(b,a,c){if(!D(b))return b;var d;switch(typeof a){case "function":break;case "boolean":case "number":case "string":d=!0;case "object":a=Jf(a,c,d);break;default:return b}return b.filter(a)}}function Jf(b,a,c){var d=I(b)&&"$"in b;!0===a?a=fa:G(a)||(a=function(a,b){if(I(a)||I(b))return!1;a=Q(""+a);b=Q(""+b);return-1!==a.indexOf(b)});
return function(e){return d&&!I(e)?Ia(e,b.$,a,!1):Ia(e,b,a,c)}}function Ia(b,a,c,d,e){var f=typeof b,g=typeof a;if("string"===g&&"!"===a.charAt(0))return!Ia(b,a.substring(1),c,d);if(D(b))return b.some(function(b){return Ia(b,a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==h.charAt(0)&&Ia(b[h],a,c,!0))return!0;return e?!1:Ia(b,a,c,!1)}if("object"===g){for(h in a)if(e=a[h],!G(e)&&(f="$"===h,!Ia(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,
a)}}function jd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){A(d)&&(d=a.CURRENCY_SYM);A(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:nd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function ld(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:nd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function nd(b,a,c,d,e){if(!isFinite(b)||I(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",l=[],k=!1;if(-1!==g.indexOf("e")){var m=g.match(/([\d\.]+)e(-?)(\d+)/);m&&
"-"==m[2]&&m[3]>e+1?b=0:(h=g,k=!0)}if(k)0<e&&1>b&&(h=b.toFixed(e),b=parseFloat(h));else{g=(g.split(od)[1]||"").length;A(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(od),k=g[0],g=g[1]||"",n=0,q=a.lgSize,u=a.gSize;if(k.length>=q+u)for(n=k.length-q,m=0;m<n;m++)0===(n-m)%u&&0!==m&&(h+=c),h+=k.charAt(m);for(m=n;m<k.length;m++)0===(k.length-m)%q&&0!==m&&(h+=c),h+=k.charAt(m);for(;g.length<e;)g+="0";e&&"0"!==e&&(h+=d+g.substr(0,
e))}0===b&&(f=!1);l.push(f?a.negPre:a.posPre,h,f?a.negSuf:a.posSuf);return l.join("")}function Hb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Hb(e,a,d)}}function Ib(b,a){return function(c,d){var e=c["get"+b](),f=ub(a?"SHORT"+b:b);return d[f][e]}}function pd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function qd(b){return function(a){var c=
pd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Hb(a,b)}}function kd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=ba(b[9]+b[10]),g=ba(b[9]+b[11]));h.call(a,ba(b[1]),ba(b[2])-1,ba(b[3]));f=ba(b[4]||0)-f;g=ba(b[5]||0)-g;h=ba(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;F(c)&&(c=Kf.test(c)?ba(c):a(c));V(c)&&(c=new Date(c));if(!qa(c))return c;for(;e;)(k=Lf.exec(e))?(h=Ya(h,k,1),e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));s(h,function(a){l=Mf[a];g+=l?l(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ff(){return function(b,a){A(a)&&(a=2);return $a(b,a)}}function Gf(){return function(b,
a){V(b)&&(b=b.toString());return D(b)||F(b)?(a=Infinity===Math.abs(Number(a))?Number(a):ba(a))?0<a?b.slice(0,a):b.slice(a):F(b)?"":[]:b}}function md(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function g(a){return null===a?"null":"function"===typeof a.valueOf&&(a=a.valueOf(),f(a))||"function"===typeof a.toString&&(a=a.toString(),f(a))?a:""}function h(a,b){var c=
typeof a,d=typeof b;c===d&&"object"===c&&(a=g(a),b=g(b));return c===d?("string"===c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Ta(a))return a;c=D(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||pa;if(F(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(h,c);d=b(a);if(d.constant){var f=d();return e(function(a,b){return h(a[f],b[f])},c)}}return e(function(a,b){return h(d(a),d(b))},c)});return Za.call(a).sort(e(function(a,
b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ja(b){G(b)&&(b={link:b});b.restrict=b.restrict||"AC";return da(b)}function rd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||Jb;f.$error={};f.$$success={};f.$pending=t;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){s(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){s(g,
function(a){a.$commitViewValue()})};f.$addControl=function(a){Ma(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];s(f.$pending,function(b,c){f.$setValidity(c,null,a)});s(f.$error,function(b,c){f.$setValidity(c,null,a)});s(f.$$success,function(b,c){f.$setValidity(c,null,a)});Xa(g,a)};sd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];
d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Xa(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Sa);d.addClass(b,Kb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Sa,Kb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;s(g,function(a){a.$setPristine()})};f.$setUntouched=function(){s(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");
f.$submitted=!0;h.$setSubmitted()}}function hc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function ib(b,a,c,d,e,f){var g=Q(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=U(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",
l);else{var k,m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",m)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Lb(b,a){return function(c,d){var e,f;if(qa(c))return c;if(F(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(Nf.test(c))return new Date(c);b.lastIndex=
0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},s(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function jb(b,a,c,d){return function(e,f,g,h,l,k,m){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function q(a){return y(a)?qa(a)?a:c(a):t}td(e,f,g,h);
ib(e,f,g,h,l,k);var u=h&&h.$options&&h.$options.timezone,r;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,r),"UTC"===u&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):t});h.$formatters.push(function(a){if(a&&!qa(a))throw Mb("datefmt",a);if(n(a)){if((r=a)&&"UTC"===u){var b=6E4*r.getTimezoneOffset();r=new Date(r.getTime()+b)}return m("date")(a,d,u)}r=null;return""});if(y(g.min)||g.ngMin){var s;h.$validators.min=function(a){return!n(a)||A(s)||c(a)>=s};
g.$observe("min",function(a){s=q(a);h.$validate()})}if(y(g.max)||g.ngMax){var p;h.$validators.max=function(a){return!n(a)||A(p)||c(a)<=p};g.$observe("max",function(a){p=q(a);h.$validate()})}}}function td(b,a,c,d){(d.$$hasNativeValidators=I(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?t:b})}function ud(b,a,c,d,e){if(y(d)){b=b(d);if(!b.constant)throw T("ngModel")("constexpr",c,d);return b(a)}return e}function ic(b,a){b="ngClass"+b;return["$animate",
function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){if(!D(a)){if(F(a))return a.split(" ");if(I(a)){var b=[];s(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function l(a,b){var c=g.data("$classCounts")||{},d=[];s(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===
a||f.$index%2===a){var k=e(b||[]);if(!m){var u=l(k,1);h.$addClass(u)}else if(!fa(b,m)){var r=e(m),u=d(k,r),k=d(r,k),u=l(u,1),k=l(k,-1);u&&u.length&&c.addClass(g,u);k&&k.length&&c.removeClass(g,k)}}m=ra(b)}var m;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}function sd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),
f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+tc(b,"-"):"";a(kb+b,!0===c);a(vd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[vd]=!(f[kb]=e.hasClass(kb));d.$setValidity=function(b,e,f){e===t?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),wd(d.$pending)&&(d.$pending=t));Wa(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(xd,
!0),d.$valid=d.$invalid=t,c("",null)):(a(xd,!1),d.$valid=wd(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?t:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function wd(b){if(b)for(var a in b)return!1;return!0}var Of=/^\/(.+)\/([a-z]*)$/,Q=function(b){return F(b)?b.toLowerCase():b},rc=Object.prototype.hasOwnProperty,ub=function(b){return F(b)?b.toUpperCase():b},Ra,B,sa,Za=[].slice,rf=[].splice,Pf=[].push,Da=Object.prototype.toString,Ka=T("ng"),ga=M.angular||
(M.angular={}),bb,nb=0;Ra=Y.documentMode;H.$inject=[];pa.$inject=[];var D=Array.isArray,U=function(b){return F(b)?b.trim():b},gd=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},ab=function(){if(y(ab.isActive_))return ab.isActive_;var b=!(!Y.querySelector("[ng-csp]")&&!Y.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return ab.isActive_=b},rb=["ng-","data-ng-","ng:","x-ng-"],Md=/[A-Z]/g,uc=!1,Pb,oa=1,pb=3,Qd={full:"1.3.11",major:1,
minor:3,dot:11,codeName:"spiffy-manatee"};R.expando="ng339";var zb=R.cache={},hf=1;R._data=function(b){return this.cache[b[this.expando]]||{}};var cf=/([\:\-\_]+(.))/g,df=/^moz([A-Z])/,Qf={mouseleave:"mouseout",mouseenter:"mouseover"},Sb=T("jqLite"),gf=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Rb=/<|&#?\w+;/,ef=/<([\w:]+)/,ff=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ia={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>",
"</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option;ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead;ia.th=ia.td;var La=R.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===Y.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(M).on("load",a))},toString:function(){var b=[];s(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=
b?B(this[b]):B(this[this.length+b])},length:0,push:Pf,sort:[].sort,splice:[].splice},Eb={};s("multiple selected checked disabled readOnly required open".split(" "),function(b){Eb[Q(b)]=b});var Mc={};s("input select option textarea button form details".split(" "),function(b){Mc[b]=!0});var Nc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};s({data:Ub,removeData:xb},function(b,a){R[a]=b});s({data:Ub,inheritedData:Db,scope:function(b){return B.data(b,"$scope")||
Db(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return B.data(b,"$isolateScope")||B.data(b,"$isolateScopeNoTemplate")},controller:Ic,injector:function(b){return Db(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Ab,css:function(b,a,c){a=cb(a);if(y(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=Q(a);if(Eb[d])if(y(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||H).specified?
d:t;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?t:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(A(b)){var d=a.nodeType;return d===oa||d===pb?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(A(a)){if(b.multiple&&"select"===ua(b)){var c=[];s(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(A(a))return b.innerHTML;
wb(b,!0);b.innerHTML=a},empty:Jc},function(b,a){R.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Jc&&(2==b.length&&b!==Ab&&b!==Ic?a:d)===t){if(I(a)){for(e=0;e<g;e++)if(b===Ub)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});s({removeData:xb,on:function a(c,d,e,f){if(y(f))throw Sb("onargs");if(Ec(c)){var g=yb(c,!0);f=g.events;var h=g.handle;h||(h=
g.handle=lf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,Qf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Hc,one:function(a,c,d){a=B(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;wb(a);s(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,
a);d=c})},children:function(a){var c=[];s(a.childNodes,function(a){a.nodeType===oa&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===oa||11===d){c=new R(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===oa){var d=a.firstChild;s(new R(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=B(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},
remove:Kc,detach:function(a){Kc(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new R(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:Cb,removeClass:Bb,toggleClass:function(a,c,d){c&&s(c.split(" "),function(c){var f=d;A(f)&&(f=!Ab(a,c));(f?Cb:Bb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Tb,
triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=yb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:H,type:g,target:a},c.type&&(e=z(e,c)),c=ra(h),f=d?[e].concat(d):[e],s(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,
f)})}},function(a,c){R.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)A(g)?(g=a(this[h],c,e,f),y(g)&&(g=B(g))):Gc(g,a(this[h],c,e,f));return y(g)?g:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});db.prototype={put:function(a,c){this[Na(a,this.nextUid)]=c},get:function(a){return this[Na(a,this.nextUid)]},remove:function(a){var c=this[a=Na(a,this.nextUid)];delete this[a];return c}};var Pc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,nf=/,/,of=/^\s*(_?)(\S+?)\1\s*$/,
Oc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ga=T("$injector");Ob.$$annotate=Vb;var Rf=T("$animate"),Ce=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Rf("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,
g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=ha();s((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});s(c,function(a,c){var g=f[c];!1===a&&g?e.push(c):!0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length?d:null,e.length?e:null]}function h(a,c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function l(){m||(m=a.defer(),d(function(){m.resolve();m=null}));return m.promise}function k(a,
c){if(ga.isObject(c)){var d=z(c.from||{},c.to||{});a.css(d)}}var m;return{animate:function(a,c,d){k(a,{from:c,to:d});return l()},enter:function(a,c,d,e){k(a,e);d?d.after(a):c.prepend(a);return l()},leave:function(a,c){a.remove();return l()},move:function(a,c,d,e){return this.enter(a,c,d,e)},addClass:function(a,c,d){return this.setClass(a,c,[],d)},$$addClassImmediately:function(a,c,d){a=B(a);c=F(c)?c:D(c)?c.join(" "):"";s(a,function(a){Cb(a,c)});k(a,d);return l()},removeClass:function(a,c,d){return this.setClass(a,
[],c,d)},$$removeClassImmediately:function(a,c,d){a=B(a);c=F(c)?c:D(c)?c.join(" "):"";s(a,function(a){Bb(a,c)});k(a,d);return l()},setClass:function(a,c,d,e){var k=this,l=!1;a=B(a);var m=a.data("$$animateClasses");m?e&&m.options&&(m.options=ga.extend(m.options||{},e)):(m={classes:{},options:e},l=!0);e=m.classes;c=D(c)?c:c.split(" ");d=D(d)?d:d.split(" ");h(e,c,!0);h(e,d,!1);l&&(m.promise=f(function(c){var d=a.data("$$animateClasses");a.removeData("$$animateClasses");if(d){var e=g(a,d.classes);e&&
k.$$setClassImmediately(a,e[0],e[1],d.options)}c()}),a.data("$$animateClasses",m));return m.promise},$$setClassImmediately:function(a,c,d,e){c&&this.$$addClassImmediately(a,c);d&&this.$$removeClassImmediately(a,d);k(a,e);return l()},enabled:H,cancel:H}}]}],ja=T("$compile");wc.$inject=["$provide","$$sanitizeUriProvider"];var Rc=/^((?:x|data)[\:\-_])/i,Vc="application/json",Zb={"Content-Type":Vc+";charset=utf-8"},tf=/^\[|^\{(?!\{)/,uf={"[":/]$/,"{":/}$/},sf=/^\)\]\}',?\n/,$b=T("$interpolate"),Sf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
xf={http:80,https:443,ftp:21},Fb=T("$location"),Tf={$$html5:!1,$$replace:!1,absUrl:Gb("$$absUrl"),url:function(a){if(A(a))return this.$$url;var c=Sf.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Gb("$$protocol"),host:Gb("$$host"),port:Gb("$$port"),path:dd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;
case 1:if(F(a)||V(a))a=a.toString(),this.$$search=qc(a);else if(I(a))a=Ea(a,{}),s(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Fb("isrcharg");break;default:A(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:dd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};s([cd,dc,cc],function(a){a.prototype=Object.create(Tf);a.prototype.state=function(c){if(!arguments.length)return this.$$state;
if(a!==cc||!this.$$html5)throw Fb("nostate");this.$$state=A(c)?null:c;return this}});var la=T("$parse"),Uf=Function.prototype.call,Vf=Function.prototype.apply,Wf=Function.prototype.bind,lb=ha();s({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;lb[c]=a});lb["this"]=function(a){return a};lb["this"].sharedGetter=!0;var mb=z(ha(),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return y(d)?y(e)?
d+e:d:y(e)?e:t},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(y(d)?d:0)-(y(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,
c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),Xf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},gc=function(a){this.options=a};gc.prototype={constructor:gc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||
"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=mb[c],f=mb[d];mb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==
c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=y(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,
d)+"]":" "+d;throw la("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=Q(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,
text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||
this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Xf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var hb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};hb.ZERO=z(function(){return 0},{sharedGetter:!0,constant:!0});hb.prototype={constructor:hb,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);
a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.peek().identifier&&this.peek().text in lb?a=lb[this.consume().text]:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",
this.peek());for(var c,d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw la("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw la("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,
c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){if(0===this.tokens.length)throw la("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},unaryFn:function(a,c){var d=mb[a];return z(function(a,f){return d(a,f,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,
c,d,e){var f=mb[c];return z(function(c,e){return f(c,e,a,d)},{constant:a.constant&&d.constant,inputs:!e&&[a,d]})},identifier:function(){for(var a=this.consume().text;this.peek(".")&&this.peekAhead(1).identifier&&!this.peekAhead(2,"(");)a+=this.consume().text+this.consume().text;return zf(a,this.options,this.text)},constant:function(){var a=this.consume().value;return z(function(){return a},{constant:!0,literal:!0})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",
";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},filter:function(a){var c=this.$filter(this.consume().text),d,e;if(this.peek(":"))for(d=[],e=[];this.expect(":");)d.push(this.expression());var f=[a].concat(d||[]);return z(function(f,h){var l=a(f,h);if(e){e[0]=l;for(l=d.length;l--;)e[l+1]=d[l](f,h);return c.apply(t,
e)}return c(l)},{constant:!c.$stateful&&f.every(ec),inputs:!c.$stateful&&f})},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),z(function(d,f){return a.assign(d,c(d,f),f)},{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c;if(this.expect("?")&&(c=this.assignment(),this.consume(":"))){var d=
this.assignment();return z(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})}return a},logicalOR:function(){for(var a=this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.text,this.logicalAND(),!0);return a},logicalAND:function(){for(var a=this.equality(),c;c=this.expect("&&");)a=this.binaryFn(a,c.text,this.equality(),!0);return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a=this.binaryFn(a,c.text,this.relational());
return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a=this.binaryFn(a,c.text,this.additive());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.text,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.text,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(hb.ZERO,
a.text,this.unary()):(a=this.expect("!"))?this.unaryFn(a.text,this.unary()):this.primary()},fieldAccess:function(a){var c=this.identifier();return z(function(d,e,f){d=f||a(d,e);return null==d?t:c(d)},{assign:function(d,e,f){var g=a(d,f);g||a.assign(d,g={},f);return c.assign(g,e)}})},objectIndex:function(a){var c=this.text,d=this.expression();this.consume("]");return z(function(e,f){var g=a(e,f),h=d(e,f);ta(h,c);return g?ma(g[h],c):t},{assign:function(e,f,g){var h=ta(d(e,g),c),l=ma(a(e,g),c);l||a.assign(e,
l={},g);return l[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var l=c?c(g,h):y(c)?t:g,k=a(g,h,l)||H;if(f)for(var m=d.length;m--;)f[m]=ma(d[m](g,h),e);ma(l,e);if(k){if(k.constructor===k)throw la("isecfn",e);if(k===Uf||k===Vf||k===Wf)throw la("isecff",e);}l=k.apply?k.apply(l,f):k(f[0],f[1],f[2],f[3],f[4]);return ma(l,e)}},arrayDeclaration:function(){var a=
[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return z(function(c,d){for(var e=[],f=0,g=a.length;f<g;f++)e.push(a[f](c,d));return e},{literal:!0,constant:a.every(ec),inputs:a})},object:function(){var a=[],c=[];if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.consume();d.constant?a.push(d.value):d.identifier?a.push(d.text):this.throwError("invalid key",d);this.consume(":");c.push(this.expression())}while(this.expect(","))
}this.consume("}");return z(function(d,f){for(var g={},h=0,l=c.length;h<l;h++)g[a[h]]=c[h](d,f);return g},{literal:!0,constant:c.every(ec),inputs:c})}};var Bf=ha(),Af=ha(),Cf=Object.prototype.valueOf,Ca=T("$sce"),na={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ja=T("$compile"),Z=Y.createElement("a"),id=Ba(M.location.href);Dc.$inject=["$provide"];jd.$inject=["$locale"];ld.$inject=["$locale"];var od=".",Mf={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:Ib("Month"),
MMM:Ib("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:Ib("Day"),EEE:Ib("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Hb(Math[0<a?"floor":"ceil"](a/60),2)+Hb(Math.abs(a%60),2))},ww:qd(2),w:qd(1)},Lf=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,
Kf=/^\-?\d+$/;kd.$inject=["$locale"];var Hf=da(Q),If=da(ub);md.$inject=["$parse"];var Td=da({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===Da.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),vb={};s(Eb,function(a,c){if("multiple"!=a){var d=ya("ng-"+c);vb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],
function(a){g.$set(c,!!a)})}}}}});s(Nc,function(a,c){vb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(Of))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});s(["src","srcset","href"],function(a){var c=ya("ng-"+a);vb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Da.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",
g=null);f.$observe(c,function(c){c?(f.$set(h,c),Ra&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Jb={$addControl:H,$$renameControl:function(a,c){a.$name=c},$removeControl:H,$setValidity:H,$setDirty:H,$setPristine:H,$setSubmitted:H};rd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var yd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:rd,compile:function(a){a.addClass(Sa).addClass(kb);return{pre:function(a,d,g,h){if(!("action"in
g)){var l=function(c){a.$apply(function(){h.$commitViewValue();h.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",l,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",l,!1)},0,!1)})}var k=h.$$parentForm,m=h.$name;m&&(gb(a,null,m,h,m),g.$observe(g.name?"name":"ngForm",function(c){m!==c&&(gb(a,null,m,t,m),m=c,gb(a,null,m,h,m),k.$$renameControl(h,m))}));d.on("$destroy",function(){k.$removeControl(h);m&&gb(a,null,m,t,m);z(h,Jb)})}}}}}]},Ud=yd(),ge=yd(!0),
Nf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Yf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Zf=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,$f=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,zd=/^(\d{4})-(\d{2})-(\d{2})$/,Ad=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,jc=/^(\d{4})-W(\d\d)$/,Bd=/^(\d{4})-(\d\d)$/,Cd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Dd=
{text:function(a,c,d,e,f,g){ib(a,c,d,e,f,g);hc(e)},date:jb("date",zd,Lb(zd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":jb("datetimelocal",Ad,Lb(Ad,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:jb("time",Cd,Lb(Cd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:jb("week",jc,function(a,c){if(qa(a))return a;if(F(a)){jc.lastIndex=0;var d=jc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=pd(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());
return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:jb("month",Bd,Lb(Bd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){td(a,c,d,e);ib(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:$f.test(a)?parseFloat(a):t});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!V(a))throw Mb("numfmt",a);a=a.toString()}return a});if(d.min||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||A(h)||a>=h};d.$observe("min",function(a){y(a)&&
!V(a)&&(a=parseFloat(a,10));h=V(a)&&!isNaN(a)?a:t;e.$validate()})}if(d.max||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||A(l)||a<=l};d.$observe("max",function(a){y(a)&&!V(a)&&(a=parseFloat(a,10));l=V(a)&&!isNaN(a)?a:t;e.$validate()})}},url:function(a,c,d,e,f,g){ib(a,c,d,e,f,g);hc(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||Yf.test(d)}},email:function(a,c,d,e,f,g){ib(a,c,d,e,f,g);hc(e);e.$$parserName="email";e.$validators.email=function(a,
c){var d=a||c;return e.$isEmpty(d)||Zf.test(d)}},radio:function(a,c,d,e){A(d.name)&&c.attr("name",++nb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=ud(l,a,"ngTrueValue",d.ngTrueValue,!0),m=ud(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};
e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return fa(a,k)});e.$parsers.push(function(a){return a?k:m})},hidden:H,button:H,submit:H,reset:H,file:H},xc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Dd[Q(h.type)]||Dd.text)(f,g,h,l[0],c,a,d,e)}}}}],ag=/^(true|false|\d+)$/,ye=function(){return{restrict:"A",priority:100,compile:function(a,c){return ag.test(c.ngValue)?function(a,c,f){f.$set("value",
a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},Zd=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===t?"":a})}}}}],ae=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];
g.$observe("ngBindTemplate",function(a){f.textContent=a===t?"":a})}}}}],$d=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],xe=da({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
be=ic("",!0),de=ic("Odd",0),ce=ic("Even",1),ee=Ja({compile:function(a,c){c.$set("ngCloak",t);a.removeClass("ng-cloak")}}),fe=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Cc={},bg={blur:!0,focus:!0};s("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=ya("ng-"+a);Cc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=
d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};bg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ie=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=Y.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=
tb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],je=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ga.noop,compile:function(f,g){var h=g.ngInclude||g.src,l=g.onload||"",k=g.autoscroll;return function(f,g,q,s,r){var t=0,p,v,w,L=function(){v&&(v.remove(),v=null);p&&(p.$destroy(),p=null);w&&(d.leave(w).then(function(){v=null}),v=w,w=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=
function(){!y(k)||k&&!f.$eval(k)||c()},q=++t;e?(a(e,!0).then(function(a){if(q===t){var c=f.$new();s.template=a;a=r(c,function(a){L();d.enter(a,null,g).then(h)});p=c;w=a;p.$emit("$includeContentLoaded",e);f.$eval(l)}},function(){q===t&&(L(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(L(),s.template=null)})}}}}],Ae=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Fc(f.template,
Y).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ke=Ja({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),we=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?U(f):f;e.$parsers.push(function(a){if(!A(a)){var c=[];a&&s(a.split(h),function(a){a&&c.push(g?U(a):a)});return c}});e.$formatters.push(function(a){return D(a)?
a.join(f):t});e.$isEmpty=function(a){return!a||!a.length}}}},kb="ng-valid",vd="ng-invalid",Sa="ng-pristine",Kb="ng-dirty",xd="ng-pending",Mb=new T("ngModel"),cg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,m){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=t;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;
this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=t;this.$name=m(d.name||"",!1)(a);var n=f(d.ngModel),q=n.assign,u=n,r=q,O=null,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");u=function(a){var d=n(a);G(d)&&(d=c(a));return d};r=function(a,c){G(n(a))?g(a,{$$$p:p.$modelValue}):q(a,p.$modelValue)}}else if(!n.assign)throw Mb("nonassign",d.ngModel,va(e));
};this.$render=H;this.$isEmpty=function(a){return A(a)||""===a||null===a||a!==a};var v=e.inheritedData("$formController")||Jb,w=0;sd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:v,$animate:g});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;g.removeClass(e,Kb);g.addClass(e,Sa)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;g.removeClass(e,Sa);g.addClass(e,Kb);v.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;g.setClass(e,
"ng-untouched","ng-touched")};this.$setTouched=function(){p.$touched=!0;p.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(O);p.$viewValue=p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!V(p.$modelValue)||!isNaN(p.$modelValue)){var a=p.$$rawModelValue,c=p.$valid,d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$runValidators(p.$error[p.$$parserName||"parse"]?!1:t,a,p.$$lastCommittedViewValue,function(f){e||c===f||(p.$modelValue=
f?a:t,p.$modelValue!==d&&p.$$writeModelToScope())})}};this.$$runValidators=function(a,c,d,e){function f(){var a=!0;s(p.$validators,function(e,f){var g=e(c,d);a=a&&g;h(f,g)});return a?!0:(s(p.$asyncValidators,function(a,c){h(c,null)}),!1)}function g(){var a=[],e=!0;s(p.$asyncValidators,function(f,g){var l=f(c,d);if(!l||!G(l.then))throw Mb("$asyncValidators",l);h(g,t);a.push(l.then(function(){h(g,!0)},function(a){e=!1;h(g,!1)}))});a.length?k.all(a).then(function(){l(e)},H):l(!0)}function h(a,c){m===
w&&p.$setValidity(a,c)}function l(a){m===w&&e(a)}w++;var m=w;(function(a){var c=p.$$parserName||"parse";if(a===t)h(c,null);else if(h(c,a),!a)return s(p.$validators,function(a,c){h(c,null)}),s(p.$asyncValidators,function(a,c){h(c,null)}),!1;return!0})(a)?f()?g():l(!1):l(!1)};this.$commitViewValue=function(){var a=p.$viewValue;h.cancel(O);if(p.$$lastCommittedViewValue!==a||""===a&&p.$$hasNativeValidators)p.$$lastCommittedViewValue=a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=
function(){var c=p.$$lastCommittedViewValue,d=A(c)?t:!0;if(d)for(var e=0;e<p.$parsers.length;e++)if(c=p.$parsers[e](c),A(c)){d=!1;break}V(p.$modelValue)&&isNaN(p.$modelValue)&&(p.$modelValue=u(a));var f=p.$modelValue,g=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=c;g&&(p.$modelValue=c,p.$modelValue!==f&&p.$$writeModelToScope());p.$$runValidators(d,c,p.$$lastCommittedViewValue,function(a){g||(p.$modelValue=a?c:t,p.$modelValue!==f&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){r(a,
p.$modelValue);s(p.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){p.$viewValue=a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=p.$options;e&&y(e.debounce)&&(e=e.debounce,V(e)?d=e:V(e[c])?d=e[c]:V(e["default"])&&(d=e["default"]));h.cancel(O);d?O=h(function(){p.$commitViewValue()},d):l.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var c=
u(a);if(c!==p.$modelValue){p.$modelValue=p.$$rawModelValue=c;for(var d=p.$formatters,e=d.length,f=c;e--;)f=d[e](f);p.$viewValue!==f&&(p.$viewValue=p.$$lastCommittedViewValue=f,p.$render(),p.$$runValidators(t,c,f,H))}return c})}],ve=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:cg,priority:1,compile:function(c){c.addClass(Sa).addClass("ng-untouched").addClass(kb);return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Jb;h.$$setOptions(g[2]&&g[2].$options);
l.$addControl(h);f.$observe("name",function(a){h.$name!==a&&l.$$renameControl(h,a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],dg=/(\s+|^)default(\s+|$)/,ze=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=
this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==t?(this.$options.updateOnDefault=!1,this.$options.updateOn=U(this.$options.updateOn.replace(dg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},le=Ja({terminal:!0,priority:1E3}),me=["$locale","$interpolate",function(a,c){var d=/{}/g,e=/^when(Minus)?(.+)$/;return{restrict:"EA",link:function(f,g,h){function l(a){g.text(a||"")}var k=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||
0,q=f.$eval(m)||{},u={},m=c.startSymbol(),r=c.endSymbol(),t=m+k+"-"+n+r,p=ga.noop,v;s(h,function(a,c){var d=e.exec(c);d&&(d=(d[1]?"-":"")+Q(d[2]),q[d]=g.attr(h.$attr[c]))});s(q,function(a,e){u[e]=c(a.replace(d,t))});f.$watch(k,function(c){c=parseFloat(c);var d=isNaN(c);d||c in q||(c=a.pluralCat(c-n));c===v||d&&isNaN(v)||(p(),p=f.$watch(u[c],l),v=c)})}}}],ne=["$parse","$animate",function(a,c){var d=T("ngRepeat"),e=function(a,c,d,e,k,m,n){a[d]=e;k&&(a[k]=m);a.$index=c;a.$first=0===c;a.$last=c===n-1;
a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=Y.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);var m=k[1],n=k[2],q=k[3],u=k[4],k=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",m);var r=k[3]||k[1],
y=k[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q)))throw d("badident",q);var p,v,w,A,z={$id:Na};u?p=a(u):(w=function(a,c){return Na(c)},A=function(a){return a});return function(a,f,g,k,m){p&&(v=function(c,d,e){y&&(z[y]=c);z[r]=d;z.$index=e;return p(a,z)});var u=ha();a.$watchCollection(n,function(g){var k,p,n=f[0],E,z=ha(),H,S,N,D,G,C,I;q&&(a[q]=g);if(Ta(g))G=g,p=v||w;else{p=v||A;G=[];for(I in g)g.hasOwnProperty(I)&&
"$"!=I.charAt(0)&&G.push(I);G.sort()}H=G.length;I=Array(H);for(k=0;k<H;k++)if(S=g===G?k:G[k],N=g[S],D=p(S,N,k),u[D])C=u[D],delete u[D],z[D]=C,I[k]=C;else{if(z[D])throw s(I,function(a){a&&a.scope&&(u[a.id]=a)}),d("dupes",h,D,N);I[k]={id:D,scope:t,clone:t};z[D]=!0}for(E in u){C=u[E];D=tb(C.clone);c.leave(D);if(D[0].parentNode)for(k=0,p=D.length;k<p;k++)D[k].$$NG_REMOVED=!0;C.scope.$destroy()}for(k=0;k<H;k++)if(S=g===G?k:G[k],N=g[S],C=I[k],C.scope){E=n;do E=E.nextSibling;while(E&&E.$$NG_REMOVED);C.clone[0]!=
E&&c.move(tb(C.clone),null,B(n));n=C.clone[C.clone.length-1];e(C.scope,k,r,N,y,S,H)}else m(function(a,d){C.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,null,B(n));n=f;C.clone=a;z[C.id]=C;e(C.scope,k,r,N,y,S,H)});u=z})}}}}],oe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],he=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,
d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],pe=Ja(function(a,c,d){a.$watchCollection(d.ngStyle,function(a,d){d&&a!==d&&s(d,function(a,d){c.css(d,"")});a&&c.css(a)})}),qe=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],m=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;
for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var r=tb(h[d].clone);k[d].$destroy();(l[d]=a.leave(r)).then(m(l,d))}h.length=0;k.length=0;(g=f.cases["!"+c]||f.cases["?"])&&s(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=Y.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],re=Ja({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=
e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),se=Ja({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),ue=Ja({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw T("ngTransclude")("orphan",va(c));f(function(a){c.empty();c.append(a)})}}),Vd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==
d.type&&a.put(d.id,c[0].text)}}}],eg=T("ngOptions"),te=da({restrict:"A",terminal:!0}),Wd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:H};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var l=this,k={},m=e,n;l.databound=d.ngModel;
l.init=function(a,c,d){m=a;n=d};l.addOption=function(c,d){Ma(c,'"option value"');k[c]=!0;m.$viewValue==c&&(a.val(c),n.parent()&&n.remove());d&&d[0].hasAttribute("selected")&&(d[0].selected=!0)};l.removeOption=function(a){this.hasOption(a)&&(delete k[a],m.$viewValue===a&&this.renderUnknownOption(a))};l.renderUnknownOption=function(c){c="? "+Na(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};l.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){l.renderUnknownOption=
H})}],link:function(e,g,h,l){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(C.parent()&&C.remove(),c.val(a),""===a&&p.prop("selected",!0)):A(a)&&p?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){C.parent()&&C.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;d.$render=function(){var a=new db(d.$viewValue);s(c.find("option"),function(c){c.selected=y(a.get(c.value))})};a.$watch(function(){fa(e,d.$viewValue)||(e=ra(d.$viewValue),
d.$render())});c.on("change",function(){a.$apply(function(){var a=[];s(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(a,c,d){T[x]=d;G&&(T[G]=c);return a(e,T)}function k(a){var c;if(u)if(M&&D(a)){c=new db([]);for(var d=0;d<a.length;d++)c.put(h(M,null,a[d]),!0)}else c=new db(a);else M&&(a=h(M,null,a));return function(d,e){var f;f=M?M:B?B:F;return u?y(c.remove(h(f,d,e))):a===h(f,d,e)}}function l(){v||(e.$$postDigest(p),v=!0)}function m(a,
c,d){a[c]=a[c]||0;a[c]+=d?1:-1}function p(){v=!1;var a={"":[]},c=[""],d,l,n,r,t;n=g.$viewValue;r=P(e)||[];var B=G?Object.keys(r).sort():r,x,A,D,F,N={};t=k(n);var J=!1,U,V;Q={};for(F=0;D=B.length,F<D;F++){x=F;if(G&&(x=B[F],"$"===x.charAt(0)))continue;A=r[x];d=h(I,x,A)||"";(l=a[d])||(l=a[d]=[],c.push(d));d=t(x,A);J=J||d;A=h(C,x,A);A=y(A)?A:"";V=M?M(e,T):G?B[F]:F;M&&(Q[V]=x);l.push({id:V,label:A,selected:d})}u||(z||null===n?a[""].unshift({id:"",label:"",selected:!J}):J||a[""].unshift({id:"?",label:"",
selected:!0}));x=0;for(B=c.length;x<B;x++){d=c[x];l=a[d];R.length<=x?(n={element:H.clone().attr("label",d),label:l.label},r=[n],R.push(r),f.append(n.element)):(r=R[x],n=r[0],n.label!=d&&n.element.attr("label",n.label=d));J=null;F=0;for(D=l.length;F<D;F++)d=l[F],(t=r[F+1])?(J=t.element,t.label!==d.label&&(m(N,t.label,!1),m(N,d.label,!0),J.text(t.label=d.label),J.prop("label",t.label)),t.id!==d.id&&J.val(t.id=d.id),J[0].selected!==d.selected&&(J.prop("selected",t.selected=d.selected),Ra&&J.prop("selected",
t.selected))):(""===d.id&&z?U=z:(U=w.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).prop("label",d.label).text(d.label),r.push(t={element:U,label:d.label,id:d.id,selected:d.selected}),m(N,d.label,!0),J?J.after(U):n.element.append(U),J=U);for(F++;r.length>F;)d=r.pop(),m(N,d.label,!1),d.element.remove()}for(;R.length>x;){l=R.pop();for(F=1;F<l.length;++F)m(N,l[F].label,!1);l[0].element.remove()}s(N,function(a,c){0<a?q.addOption(c):0>a&&q.removeOption(c)})}var n;if(!(n=r.match(d)))throw eg("iexp",
r,va(f));var C=c(n[2]||n[1]),x=n[4]||n[6],A=/ as /.test(n[0])&&n[1],B=A?c(A):null,G=n[5],I=c(n[3]||""),F=c(n[2]?n[1]:x),P=c(n[7]),M=n[8]?c(n[8]):null,Q={},R=[[{element:f,label:""}]],T={};z&&(a(z)(e),z.removeClass("ng-scope"),z.remove());f.empty();f.on("change",function(){e.$apply(function(){var a=P(e)||[],c;if(u)c=[],s(f.val(),function(d){d=M?Q[d]:d;c.push("?"===d?t:""===d?null:h(B?B:F,d,a[d]))});else{var d=M?Q[f.val()]:f.val();c="?"===d?t:""===d?null:h(B?B:F,d,a[d])}g.$setViewValue(c);p()})});g.$render=
p;e.$watchCollection(P,l);e.$watchCollection(function(){var a=P(e),c;if(a&&D(a)){c=Array(a.length);for(var d=0,f=a.length;d<f;d++)c[d]=h(C,d,a[d])}else if(a)for(d in c={},a)a.hasOwnProperty(d)&&(c[d]=h(C,d,a[d]));return c},l);u&&e.$watchCollection(function(){return g.$modelValue},l)}if(l[1]){var q=l[0];l=l[1];var u=h.multiple,r=h.ngOptions,z=!1,p,v=!1,w=B(Y.createElement("option")),H=B(Y.createElement("optgroup")),C=w.clone();h=0;for(var x=g.children(),G=x.length;h<G;h++)if(""===x[h].value){p=z=x.eq(h);
break}q.init(l,z,C);u&&(l.$isEmpty=function(a){return!a||0===a.length});r?n(e,g,l):u?m(e,g,l):k(e,g,l,q)}}}}],Yd=["$interpolate",function(a){var c={addOption:H,removeOption:H};return{restrict:"E",priority:100,compile:function(d,e){if(A(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),m=k.data("$selectController")||k.parent().data("$selectController");m&&m.databound||(m=c);f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&m.removeOption(c);m.addOption(a,
d)}):m.addOption(e.value,d);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],Xd=da({restrict:"E",terminal:!1}),zc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},yc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){F(a)&&0<a.length&&
(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw T("ngPattern")("noregexp",g,a,va(c));f=a||t;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||A(f)||f.test(a)}}}}},Bc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=ba(a);f=isNaN(a)?-1:a;e.$validate()});e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(a)||c.length<=f}}}}},Ac=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,
d,e){if(e){var f=0;d.$observe("minlength",function(a){f=ba(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}};M.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Nd(),Pd(ga),B(Y).ready(function(){Jd(Y,sc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//

/*
 AngularJS v1.3.11
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(N,f,W){'use strict';f.module("ngAnimate",["ng"]).directive("ngAnimateChildren",function(){return function(X,C,g){g=g.ngAnimateChildren;f.isString(g)&&0===g.length?C.data("$$ngAnimateChildren",!0):X.$watch(g,function(f){C.data("$$ngAnimateChildren",!!f)})}}).factory("$$animateReflow",["$$rAF","$document",function(f,C){return function(g){return f(function(){g()})}}]).config(["$provide","$animateProvider",function(X,C){function g(f){for(var n=0;n<f.length;n++){var g=f[n];if(1==g.nodeType)return g}}
function ba(f,n){return g(f)==g(n)}var t=f.noop,n=f.forEach,da=C.$$selectors,aa=f.isArray,ea=f.isString,ga=f.isObject,r={running:!0},u;X.decorator("$animate",["$delegate","$$q","$injector","$sniffer","$rootElement","$$asyncCallback","$rootScope","$document","$templateRequest","$$jqLite",function(O,N,M,Y,y,H,P,W,Z,Q){function R(a,c){var b=a.data("$$ngAnimateState")||{};c&&(b.running=!0,b.structural=!0,a.data("$$ngAnimateState",b));return b.disabled||b.running&&b.structural}function D(a){var c,b=N.defer();
b.promise.$$cancelFn=function(){c&&c()};P.$$postDigest(function(){c=a(function(){b.resolve()})});return b.promise}function I(a){if(ga(a))return a.tempClasses&&ea(a.tempClasses)&&(a.tempClasses=a.tempClasses.split(/\s+/)),a}function S(a,c,b){b=b||{};var d={};n(b,function(e,a){n(a.split(" "),function(a){d[a]=e})});var h=Object.create(null);n((a.attr("class")||"").split(/\s+/),function(e){h[e]=!0});var f=[],l=[];n(c&&c.classes||[],function(e,a){var b=h[a],c=d[a]||{};!1===e?(b||"addClass"==c.event)&&
l.push(a):!0===e&&(b&&"removeClass"!=c.event||f.push(a))});return 0<f.length+l.length&&[f.join(" "),l.join(" ")]}function T(a){if(a){var c=[],b={};a=a.substr(1).split(".");(Y.transitions||Y.animations)&&c.push(M.get(da[""]));for(var d=0;d<a.length;d++){var f=a[d],k=da[f];k&&!b[f]&&(c.push(M.get(k)),b[f]=!0)}return c}}function U(a,c,b,d){function h(e,a){var b=e[a],c=e["before"+a.charAt(0).toUpperCase()+a.substr(1)];if(b||c)return"leave"==a&&(c=b,b=null),u.push({event:a,fn:b}),J.push({event:a,fn:c}),
!0}function k(c,l,w){var E=[];n(c,function(a){a.fn&&E.push(a)});var m=0;n(E,function(c,f){var p=function(){a:{if(l){(l[f]||t)();if(++m<E.length)break a;l=null}w()}};switch(c.event){case "setClass":l.push(c.fn(a,e,A,p,d));break;case "animate":l.push(c.fn(a,b,d.from,d.to,p));break;case "addClass":l.push(c.fn(a,e||b,p,d));break;case "removeClass":l.push(c.fn(a,A||b,p,d));break;default:l.push(c.fn(a,p,d))}});l&&0===l.length&&w()}var l=a[0];if(l){d&&(d.to=d.to||{},d.from=d.from||{});var e,A;aa(b)&&(e=
b[0],A=b[1],e?A?b=e+" "+A:(b=e,c="addClass"):(b=A,c="removeClass"));var w="setClass"==c,E=w||"addClass"==c||"removeClass"==c||"animate"==c,p=a.attr("class")+" "+b;if(x(p)){var ca=t,m=[],J=[],g=t,s=[],u=[],p=(" "+p).replace(/\s+/g,".");n(T(p),function(a){!h(a,c)&&w&&(h(a,"addClass"),h(a,"removeClass"))});return{node:l,event:c,className:b,isClassBased:E,isSetClassOperation:w,applyStyles:function(){d&&a.css(f.extend(d.from||{},d.to||{}))},before:function(a){ca=a;k(J,m,function(){ca=t;a()})},after:function(a){g=
a;k(u,s,function(){g=t;a()})},cancel:function(){m&&(n(m,function(a){(a||t)(!0)}),ca(!0));s&&(n(s,function(a){(a||t)(!0)}),g(!0))}}}}}function G(a,c,b,d,h,k,l,e){function A(e){var l="$animate:"+e;J&&J[l]&&0<J[l].length&&H(function(){b.triggerHandler(l,{event:a,className:c})})}function w(){A("before")}function E(){A("after")}function p(){p.hasBeenRun||(p.hasBeenRun=!0,k())}function g(){if(!g.hasBeenRun){m&&m.applyStyles();g.hasBeenRun=!0;l&&l.tempClasses&&n(l.tempClasses,function(a){u.removeClass(b,
a)});var w=b.data("$$ngAnimateState");w&&(m&&m.isClassBased?B(b,c):(H(function(){var e=b.data("$$ngAnimateState")||{};fa==e.index&&B(b,c,a)}),b.data("$$ngAnimateState",w)));A("close");e()}}var m=U(b,a,c,l);if(!m)return p(),w(),E(),g(),t;a=m.event;c=m.className;var J=f.element._data(m.node),J=J&&J.events;d||(d=h?h.parent():b.parent());if(z(b,d))return p(),w(),E(),g(),t;d=b.data("$$ngAnimateState")||{};var L=d.active||{},s=d.totalActive||0,q=d.last;h=!1;if(0<s){s=[];if(m.isClassBased)"setClass"==q.event?
(s.push(q),B(b,c)):L[c]&&(v=L[c],v.event==a?h=!0:(s.push(v),B(b,c)));else if("leave"==a&&L["ng-leave"])h=!0;else{for(var v in L)s.push(L[v]);d={};B(b,!0)}0<s.length&&n(s,function(a){a.cancel()})}!m.isClassBased||m.isSetClassOperation||"animate"==a||h||(h="addClass"==a==b.hasClass(c));if(h)return p(),w(),E(),A("close"),e(),t;L=d.active||{};s=d.totalActive||0;if("leave"==a)b.one("$destroy",function(a){a=f.element(this);var e=a.data("$$ngAnimateState");e&&(e=e.active["ng-leave"])&&(e.cancel(),B(a,"ng-leave"))});
u.addClass(b,"ng-animate");l&&l.tempClasses&&n(l.tempClasses,function(a){u.addClass(b,a)});var fa=K++;s++;L[c]=m;b.data("$$ngAnimateState",{last:m,active:L,index:fa,totalActive:s});w();m.before(function(e){var l=b.data("$$ngAnimateState");e=e||!l||!l.active[c]||m.isClassBased&&l.active[c].event!=a;p();!0===e?g():(E(),m.after(g))});return m.cancel}function q(a){if(a=g(a))a=f.isFunction(a.getElementsByClassName)?a.getElementsByClassName("ng-animate"):a.querySelectorAll(".ng-animate"),n(a,function(a){a=
f.element(a);(a=a.data("$$ngAnimateState"))&&a.active&&n(a.active,function(a){a.cancel()})})}function B(a,c){if(ba(a,y))r.disabled||(r.running=!1,r.structural=!1);else if(c){var b=a.data("$$ngAnimateState")||{},d=!0===c;!d&&b.active&&b.active[c]&&(b.totalActive--,delete b.active[c]);if(d||!b.totalActive)u.removeClass(a,"ng-animate"),a.removeData("$$ngAnimateState")}}function z(a,c){if(r.disabled)return!0;if(ba(a,y))return r.running;var b,d,g;do{if(0===c.length)break;var k=ba(c,y),l=k?r:c.data("$$ngAnimateState")||
{};if(l.disabled)return!0;k&&(g=!0);!1!==b&&(k=c.data("$$ngAnimateChildren"),f.isDefined(k)&&(b=k));d=d||l.running||l.last&&!l.last.isClassBased}while(c=c.parent());return!g||!b&&d}u=Q;y.data("$$ngAnimateState",r);var $=P.$watch(function(){return Z.totalPendingRequests},function(a,c){0===a&&($(),P.$$postDigest(function(){P.$$postDigest(function(){r.running=!1})}))}),K=0,V=C.classNameFilter(),x=V?function(a){return V.test(a)}:function(){return!0};return{animate:function(a,c,b,d,h){d=d||"ng-inline-animate";
h=I(h)||{};h.from=b?c:null;h.to=b?b:c;return D(function(b){return G("animate",d,f.element(g(a)),null,null,t,h,b)})},enter:function(a,c,b,d){d=I(d);a=f.element(a);c=c&&f.element(c);b=b&&f.element(b);R(a,!0);O.enter(a,c,b);return D(function(h){return G("enter","ng-enter",f.element(g(a)),c,b,t,d,h)})},leave:function(a,c){c=I(c);a=f.element(a);q(a);R(a,!0);return D(function(b){return G("leave","ng-leave",f.element(g(a)),null,null,function(){O.leave(a)},c,b)})},move:function(a,c,b,d){d=I(d);a=f.element(a);
c=c&&f.element(c);b=b&&f.element(b);q(a);R(a,!0);O.move(a,c,b);return D(function(h){return G("move","ng-move",f.element(g(a)),c,b,t,d,h)})},addClass:function(a,c,b){return this.setClass(a,c,[],b)},removeClass:function(a,c,b){return this.setClass(a,[],c,b)},setClass:function(a,c,b,d){d=I(d);a=f.element(a);a=f.element(g(a));if(R(a))return O.$$setClassImmediately(a,c,b,d);var h,k=a.data("$$animateClasses"),l=!!k;k||(k={classes:{}});h=k.classes;c=aa(c)?c:c.split(" ");n(c,function(a){a&&a.length&&(h[a]=
!0)});b=aa(b)?b:b.split(" ");n(b,function(a){a&&a.length&&(h[a]=!1)});if(l)return d&&k.options&&(k.options=f.extend(k.options||{},d)),k.promise;a.data("$$animateClasses",k={classes:h,options:d});return k.promise=D(function(e){var l=a.parent(),b=g(a),c=b.parentNode;if(!c||c.$$NG_REMOVED||b.$$NG_REMOVED)e();else{b=a.data("$$animateClasses");a.removeData("$$animateClasses");var c=a.data("$$ngAnimateState")||{},d=S(a,b,c.active);return d?G("setClass",d,a,l,null,function(){d[0]&&O.$$addClassImmediately(a,
d[0]);d[1]&&O.$$removeClassImmediately(a,d[1])},b.options,e):e()}})},cancel:function(a){a.$$cancelFn()},enabled:function(a,c){switch(arguments.length){case 2:if(a)B(c);else{var b=c.data("$$ngAnimateState")||{};b.disabled=!0;c.data("$$ngAnimateState",b)}break;case 1:r.disabled=!a;break;default:a=!r.disabled}return!!a}}}]);C.register("",["$window","$sniffer","$timeout","$$animateReflow",function(r,C,M,Y){function y(){b||(b=Y(function(){c=[];b=null;x={}}))}function H(a,e){b&&b();c.push(e);b=Y(function(){n(c,
function(a){a()});c=[];b=null;x={}})}function P(a,e){var b=g(a);a=f.element(b);k.push(a);b=Date.now()+e;b<=h||(M.cancel(d),h=b,d=M(function(){X(k);k=[]},e,!1))}function X(a){n(a,function(a){(a=a.data("$$ngAnimateCSS3Data"))&&n(a.closeAnimationFns,function(a){a()})})}function Z(a,e){var b=e?x[e]:null;if(!b){var c=0,d=0,f=0,g=0;n(a,function(a){if(1==a.nodeType){a=r.getComputedStyle(a)||{};c=Math.max(Q(a[z+"Duration"]),c);d=Math.max(Q(a[z+"Delay"]),d);g=Math.max(Q(a[K+"Delay"]),g);var e=Q(a[K+"Duration"]);
0<e&&(e*=parseInt(a[K+"IterationCount"],10)||1);f=Math.max(e,f)}});b={total:0,transitionDelay:d,transitionDuration:c,animationDelay:g,animationDuration:f};e&&(x[e]=b)}return b}function Q(a){var e=0;a=ea(a)?a.split(/\s*,\s*/):[];n(a,function(a){e=Math.max(parseFloat(a)||0,e)});return e}function R(b,e,c,d){b=0<=["ng-enter","ng-leave","ng-move"].indexOf(c);var f,p=e.parent(),h=p.data("$$ngAnimateKey");h||(p.data("$$ngAnimateKey",++a),h=a);f=h+"-"+g(e).getAttribute("class");var p=f+" "+c,h=x[p]?++x[p].total:
0,m={};if(0<h){var n=c+"-stagger",m=f+" "+n;(f=!x[m])&&u.addClass(e,n);m=Z(e,m);f&&u.removeClass(e,n)}u.addClass(e,c);var n=e.data("$$ngAnimateCSS3Data")||{},k=Z(e,p);f=k.transitionDuration;k=k.animationDuration;if(b&&0===f&&0===k)return u.removeClass(e,c),!1;c=d||b&&0<f;b=0<k&&0<m.animationDelay&&0===m.animationDuration;e.data("$$ngAnimateCSS3Data",{stagger:m,cacheKey:p,running:n.running||0,itemIndex:h,blockTransition:c,closeAnimationFns:n.closeAnimationFns||[]});p=g(e);c&&(I(p,!0),d&&e.css(d));
b&&(p.style[K+"PlayState"]="paused");return!0}function D(a,e,b,c,d){function f(){e.off(D,h);u.removeClass(e,k);u.removeClass(e,t);z&&M.cancel(z);G(e,b);var a=g(e),c;for(c in s)a.style.removeProperty(s[c])}function h(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-H,0)>=C&&b>=x&&c()}var m=g(e);a=e.data("$$ngAnimateCSS3Data");if(-1!=m.getAttribute("class").indexOf(b)&&a){var k="",t="";n(b.split(" "),function(a,
b){var e=(0<b?" ":"")+a;k+=e+"-active";t+=e+"-pending"});var s=[],q=a.itemIndex,v=a.stagger,r=0;if(0<q){r=0;0<v.transitionDelay&&0===v.transitionDuration&&(r=v.transitionDelay*q);var y=0;0<v.animationDelay&&0===v.animationDuration&&(y=v.animationDelay*q,s.push(B+"animation-play-state"));r=Math.round(100*Math.max(r,y))/100}r||(u.addClass(e,k),a.blockTransition&&I(m,!1));var F=Z(e,a.cacheKey+" "+k),x=Math.max(F.transitionDuration,F.animationDuration);if(0===x)u.removeClass(e,k),G(e,b),c();else{!r&&
d&&0<Object.keys(d).length&&(F.transitionDuration||(e.css("transition",F.animationDuration+"s linear all"),s.push("transition")),e.css(d));var q=Math.max(F.transitionDelay,F.animationDelay),C=1E3*q;0<s.length&&(v=m.getAttribute("style")||"",";"!==v.charAt(v.length-1)&&(v+=";"),m.setAttribute("style",v+" "));var H=Date.now(),D=V+" "+$,q=1E3*(r+1.5*(q+x)),z;0<r&&(u.addClass(e,t),z=M(function(){z=null;0<F.transitionDuration&&I(m,!1);0<F.animationDuration&&(m.style[K+"PlayState"]="");u.addClass(e,k);
u.removeClass(e,t);d&&(0===F.transitionDuration&&e.css("transition",F.animationDuration+"s linear all"),e.css(d),s.push("transition"))},1E3*r,!1));e.on(D,h);a.closeAnimationFns.push(function(){f();c()});a.running++;P(e,q);return f}}else c()}function I(a,b){a.style[z+"Property"]=b?"none":""}function S(a,b,c,d){if(R(a,b,c,d))return function(a){a&&G(b,c)}}function T(a,b,c,d,f){if(b.data("$$ngAnimateCSS3Data"))return D(a,b,c,d,f);G(b,c);d()}function U(a,b,c,d,f){var g=S(a,b,c,f.from);if(g){var h=g;H(b,
function(){h=T(a,b,c,d,f.to)});return function(a){(h||t)(a)}}y();d()}function G(a,b){u.removeClass(a,b);var c=a.data("$$ngAnimateCSS3Data");c&&(c.running&&c.running--,c.running&&0!==c.running||a.removeData("$$ngAnimateCSS3Data"))}function q(a,b){var c="";a=aa(a)?a:a.split(/\s+/);n(a,function(a,d){a&&0<a.length&&(c+=(0<d?" ":"")+a+b)});return c}var B="",z,$,K,V;N.ontransitionend===W&&N.onwebkittransitionend!==W?(B="-webkit-",z="WebkitTransition",$="webkitTransitionEnd transitionend"):(z="transition",
$="transitionend");N.onanimationend===W&&N.onwebkitanimationend!==W?(B="-webkit-",K="WebkitAnimation",V="webkitAnimationEnd animationend"):(K="animation",V="animationend");var x={},a=0,c=[],b,d=null,h=0,k=[];return{animate:function(a,b,c,d,f,g){g=g||{};g.from=c;g.to=d;return U("animate",a,b,f,g)},enter:function(a,b,c){c=c||{};return U("enter",a,"ng-enter",b,c)},leave:function(a,b,c){c=c||{};return U("leave",a,"ng-leave",b,c)},move:function(a,b,c){c=c||{};return U("move",a,"ng-move",b,c)},beforeSetClass:function(a,
b,c,d,f){f=f||{};b=q(c,"-remove")+" "+q(b,"-add");if(f=S("setClass",a,b,f.from))return H(a,d),f;y();d()},beforeAddClass:function(a,b,c,d){d=d||{};if(b=S("addClass",a,q(b,"-add"),d.from))return H(a,c),b;y();c()},beforeRemoveClass:function(a,b,c,d){d=d||{};if(b=S("removeClass",a,q(b,"-remove"),d.from))return H(a,c),b;y();c()},setClass:function(a,b,c,d,f){f=f||{};c=q(c,"-remove");b=q(b,"-add");return T("setClass",a,c+" "+b,d,f.to)},addClass:function(a,b,c,d){d=d||{};return T("addClass",a,q(b,"-add"),
c,d.to)},removeClass:function(a,b,c,d){d=d||{};return T("removeClass",a,q(b,"-remove"),c,d.to)}}}])}])})(window,window.angular);
//

/*
 AngularJS v1.3.11
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(y,u,z){'use strict';function s(h,k,p){n.directive(h,["$parse","$swipe",function(d,e){return function(l,m,f){function g(a){if(!c)return!1;var b=Math.abs(a.y-c.y);a=(a.x-c.x)*k;return q&&75>b&&0<a&&30<a&&.3>b/a}var b=d(f[h]),c,q,a=["touch"];u.isDefined(f.ngSwipeDisableMouse)||a.push("mouse");e.bind(m,{start:function(a,b){c=a;q=!0},cancel:function(a){q=!1},end:function(a,c){g(a)&&l.$apply(function(){m.triggerHandler(p);b(l,{$event:c})})}},a)}}])}var n=u.module("ngTouch",[]);n.factory("$swipe",
[function(){function h(d){var e=d.touches&&d.touches.length?d.touches:[d];d=d.changedTouches&&d.changedTouches[0]||d.originalEvent&&d.originalEvent.changedTouches&&d.originalEvent.changedTouches[0]||e[0].originalEvent||e[0];return{x:d.clientX,y:d.clientY}}function k(d,e){var l=[];u.forEach(d,function(d){(d=p[d][e])&&l.push(d)});return l.join(" ")}var p={mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},touch:{start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"}};return{bind:function(d,
e,l){var m,f,g,b,c=!1;l=l||["mouse","touch"];d.on(k(l,"start"),function(a){g=h(a);c=!0;f=m=0;b=g;e.start&&e.start(g,a)});var q=k(l,"cancel");if(q)d.on(q,function(a){c=!1;e.cancel&&e.cancel(a)});d.on(k(l,"move"),function(a){if(c&&g){var d=h(a);m+=Math.abs(d.x-b.x);f+=Math.abs(d.y-b.y);b=d;10>m&&10>f||(f>m?(c=!1,e.cancel&&e.cancel(a)):(a.preventDefault(),e.move&&e.move(d,a)))}});d.on(k(l,"end"),function(a){c&&(c=!1,e.end&&e.end(h(a),a))})}}}]);n.config(["$provide",function(h){h.decorator("ngClickDirective",
["$delegate",function(k){k.shift();return k}])}]);n.directive("ngClick",["$parse","$timeout","$rootElement",function(h,k,p){function d(b,c,d){for(var a=0;a<b.length;a+=2){var e=b[a+1],f=d;if(25>Math.abs(b[a]-c)&&25>Math.abs(e-f))return b.splice(a,a+2),!0}return!1}function e(b){if(!(2500<Date.now()-m)){var c=b.touches&&b.touches.length?b.touches:[b],e=c[0].clientX,c=c[0].clientY;1>e&&1>c||g&&g[0]===e&&g[1]===c||(g&&(g=null),"label"===b.target.tagName.toLowerCase()&&(g=[e,c]),d(f,e,c)||(b.stopPropagation(),
b.preventDefault(),b.target&&b.target.blur()))}}function l(b){b=b.touches&&b.touches.length?b.touches:[b];var c=b[0].clientX,d=b[0].clientY;f.push(c,d);k(function(){for(var a=0;a<f.length;a+=2)if(f[a]==c&&f[a+1]==d){f.splice(a,a+2);break}},2500,!1)}var m,f,g;return function(b,c,g){function a(){n=!1;c.removeClass("ng-click-active")}var k=h(g.ngClick),n=!1,r,s,v,w;c.on("touchstart",function(a){n=!0;r=a.target?a.target:a.srcElement;3==r.nodeType&&(r=r.parentNode);c.addClass("ng-click-active");s=Date.now();
a=a.touches&&a.touches.length?a.touches:[a];a=a[0].originalEvent||a[0];v=a.clientX;w=a.clientY});c.on("touchmove",function(c){a()});c.on("touchcancel",function(c){a()});c.on("touchend",function(b){var k=Date.now()-s,h=b.changedTouches&&b.changedTouches.length?b.changedTouches:b.touches&&b.touches.length?b.touches:[b],t=h[0].originalEvent||h[0],h=t.clientX,t=t.clientY,x=Math.sqrt(Math.pow(h-v,2)+Math.pow(t-w,2));n&&750>k&&12>x&&(f||(p[0].addEventListener("click",e,!0),p[0].addEventListener("touchstart",
l,!0),f=[]),m=Date.now(),d(f,h,t),r&&r.blur(),u.isDefined(g.disabled)&&!1!==g.disabled||c.triggerHandler("click",[b]));a()});c.onclick=function(a){};c.on("click",function(a,c){b.$apply(function(){k(b,{$event:c||a})})});c.on("mousedown",function(a){c.addClass("ng-click-active")});c.on("mousemove mouseup",function(a){c.removeClass("ng-click-active")})}}]);s("ngSwipeLeft",-1,"swipeleft");s("ngSwipeRight",1,"swiperight")})(window,window.angular);
//

;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function() {
			return FastClick;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());

(function() {
  'use strict';

  // imports all components and dependencies under a single namespace

  angular.module('foundation', [
    'foundation.core',
    'foundation.accordion',
    'foundation.actionsheet',
    'foundation.common',
    'foundation.iconic',
    'foundation.interchange',
    'foundation.modal',
    'foundation.notification',
    'foundation.offcanvas',
    'foundation.panel',
    'foundation.popup',
    'foundation.tabs'
  ]);

})();

/*! Hammer.JS - v2.0.4 - 2014-09-28
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2014 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(k(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function i(a,b){return h(a,b,!0)}function j(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&h(d,c)}function k(a,b){return function(){return a.apply(b,arguments)}}function l(a,b){return typeof a==kb?a.apply(b?b[0]||d:d,b):a}function m(a,b){return a===d?b:a}function n(a,b,c){g(r(b),function(b){a.addEventListener(b,c,!1)})}function o(a,b,c){g(r(b),function(b){a.removeEventListener(b,c,!1)})}function p(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function q(a,b){return a.indexOf(b)>-1}function r(a){return a.trim().split(/\s+/g)}function s(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function t(a){return Array.prototype.slice.call(a,0)}function u(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];s(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function v(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ib.length;){if(c=ib[g],e=c?c+f:b,e in a)return e;g++}return d}function w(){return ob++}function x(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function y(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){l(a.options.enable,[a])&&c.handler(b)},this.init()}function z(a){var b,c=a.options.inputClass;return new(b=c?c:rb?N:sb?Q:qb?S:M)(a,A)}function A(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&yb&&d-e===0,g=b&(Ab|Bb)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,B(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function B(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=E(b)),e>1&&!c.firstMultiple?c.firstMultiple=E(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=F(d);b.timeStamp=nb(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=J(h,i),b.distance=I(h,i),C(c,b),b.offsetDirection=H(b.deltaX,b.deltaY),b.scale=g?L(g.pointers,d):1,b.rotation=g?K(g.pointers,d):0,D(c,b);var j=a.element;p(b.srcEvent.target,j)&&(j=b.srcEvent.target),b.target=j}function C(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===yb||f.eventType===Ab)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function D(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Bb&&(i>xb||h.velocity===d)){var j=h.deltaX-b.deltaX,k=h.deltaY-b.deltaY,l=G(i,j,k);e=l.x,f=l.y,c=mb(l.x)>mb(l.y)?l.x:l.y,g=H(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function E(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:lb(a.pointers[c].clientX),clientY:lb(a.pointers[c].clientY)},c++;return{timeStamp:nb(),pointers:b,center:F(b),deltaX:a.deltaX,deltaY:a.deltaY}}function F(a){var b=a.length;if(1===b)return{x:lb(a[0].clientX),y:lb(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:lb(c/b),y:lb(d/b)}}function G(a,b,c){return{x:b/a||0,y:c/a||0}}function H(a,b){return a===b?Cb:mb(a)>=mb(b)?a>0?Db:Eb:b>0?Fb:Gb}function I(a,b,c){c||(c=Kb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function J(a,b,c){c||(c=Kb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function K(a,b){return J(b[1],b[0],Lb)-J(a[1],a[0],Lb)}function L(a,b){return I(b[0],b[1],Lb)/I(a[0],a[1],Lb)}function M(){this.evEl=Nb,this.evWin=Ob,this.allow=!0,this.pressed=!1,y.apply(this,arguments)}function N(){this.evEl=Rb,this.evWin=Sb,y.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function O(){this.evTarget=Ub,this.evWin=Vb,this.started=!1,y.apply(this,arguments)}function P(a,b){var c=t(a.touches),d=t(a.changedTouches);return b&(Ab|Bb)&&(c=u(c.concat(d),"identifier",!0)),[c,d]}function Q(){this.evTarget=Xb,this.targetIds={},y.apply(this,arguments)}function R(a,b){var c=t(a.touches),d=this.targetIds;if(b&(yb|zb)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=t(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return p(a.target,i)}),b===yb)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ab|Bb)&&delete d[g[e].identifier],e++;return h.length?[u(f.concat(h),"identifier",!0),h]:void 0}function S(){y.apply(this,arguments);var a=k(this.handler,this);this.touch=new Q(this.manager,a),this.mouse=new M(this.manager,a)}function T(a,b){this.manager=a,this.set(b)}function U(a){if(q(a,bc))return bc;var b=q(a,cc),c=q(a,dc);return b&&c?cc+" "+dc:b||c?b?cc:dc:q(a,ac)?ac:_b}function V(a){this.id=w(),this.manager=null,this.options=i(a||{},this.defaults),this.options.enable=m(this.options.enable,!0),this.state=ec,this.simultaneous={},this.requireFail=[]}function W(a){return a&jc?"cancel":a&hc?"end":a&gc?"move":a&fc?"start":""}function X(a){return a==Gb?"down":a==Fb?"up":a==Db?"left":a==Eb?"right":""}function Y(a,b){var c=b.manager;return c?c.get(a):a}function Z(){V.apply(this,arguments)}function $(){Z.apply(this,arguments),this.pX=null,this.pY=null}function _(){Z.apply(this,arguments)}function ab(){V.apply(this,arguments),this._timer=null,this._input=null}function bb(){Z.apply(this,arguments)}function cb(){Z.apply(this,arguments)}function db(){V.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function eb(a,b){return b=b||{},b.recognizers=m(b.recognizers,eb.defaults.preset),new fb(a,b)}function fb(a,b){b=b||{},this.options=i(b,eb.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=z(this),this.touchAction=new T(this,this.options.touchAction),gb(this,!0),g(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function gb(a,b){var c=a.element;g(a.options.cssProps,function(a,d){c.style[v(c.style,d)]=b?a:""})}function hb(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var ib=["","webkit","moz","MS","ms","o"],jb=b.createElement("div"),kb="function",lb=Math.round,mb=Math.abs,nb=Date.now,ob=1,pb=/mobile|tablet|ip(ad|hone|od)|android/i,qb="ontouchstart"in a,rb=v(a,"PointerEvent")!==d,sb=qb&&pb.test(navigator.userAgent),tb="touch",ub="pen",vb="mouse",wb="kinect",xb=25,yb=1,zb=2,Ab=4,Bb=8,Cb=1,Db=2,Eb=4,Fb=8,Gb=16,Hb=Db|Eb,Ib=Fb|Gb,Jb=Hb|Ib,Kb=["x","y"],Lb=["clientX","clientY"];y.prototype={handler:function(){},init:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(x(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&o(this.element,this.evEl,this.domHandler),this.evTarget&&o(this.target,this.evTarget,this.domHandler),this.evWin&&o(x(this.element),this.evWin,this.domHandler)}};var Mb={mousedown:yb,mousemove:zb,mouseup:Ab},Nb="mousedown",Ob="mousemove mouseup";j(M,y,{handler:function(a){var b=Mb[a.type];b&yb&&0===a.button&&(this.pressed=!0),b&zb&&1!==a.which&&(b=Ab),this.pressed&&this.allow&&(b&Ab&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:vb,srcEvent:a}))}});var Pb={pointerdown:yb,pointermove:zb,pointerup:Ab,pointercancel:Bb,pointerout:Bb},Qb={2:tb,3:ub,4:vb,5:wb},Rb="pointerdown",Sb="pointermove pointerup pointercancel";a.MSPointerEvent&&(Rb="MSPointerDown",Sb="MSPointerMove MSPointerUp MSPointerCancel"),j(N,y,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Pb[d],f=Qb[a.pointerType]||a.pointerType,g=f==tb,h=s(b,a.pointerId,"pointerId");e&yb&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ab|Bb)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Tb={touchstart:yb,touchmove:zb,touchend:Ab,touchcancel:Bb},Ub="touchstart",Vb="touchstart touchmove touchend touchcancel";j(O,y,{handler:function(a){var b=Tb[a.type];if(b===yb&&(this.started=!0),this.started){var c=P.call(this,a,b);b&(Ab|Bb)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:tb,srcEvent:a})}}});var Wb={touchstart:yb,touchmove:zb,touchend:Ab,touchcancel:Bb},Xb="touchstart touchmove touchend touchcancel";j(Q,y,{handler:function(a){var b=Wb[a.type],c=R.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:tb,srcEvent:a})}}),j(S,y,{handler:function(a,b,c){var d=c.pointerType==tb,e=c.pointerType==vb;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Ab|Bb)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Yb=v(jb.style,"touchAction"),Zb=Yb!==d,$b="compute",_b="auto",ac="manipulation",bc="none",cc="pan-x",dc="pan-y";T.prototype={set:function(a){a==$b&&(a=this.compute()),Zb&&(this.manager.element.style[Yb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){l(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),U(a.join(" "))},preventDefaults:function(a){if(!Zb){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=q(d,bc),f=q(d,dc),g=q(d,cc);return e||f&&c&Hb||g&&c&Ib?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var ec=1,fc=2,gc=4,hc=8,ic=hc,jc=16,kc=32;V.prototype={defaults:{},set:function(a){return h(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=Y(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=Y(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=Y(a,this),-1===s(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=Y(a,this);var b=s(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(c.options.event+(b?W(d):""),a)}var c=this,d=this.state;hc>d&&b(!0),b(),d>=hc&&b(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=kc)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(kc|ec)))return!1;a++}return!0},recognize:function(a){var b=h({},a);return l(this.options.enable,[this,b])?(this.state&(ic|jc|kc)&&(this.state=ec),this.state=this.process(b),void(this.state&(fc|gc|hc|jc)&&this.tryEmit(b))):(this.reset(),void(this.state=kc))},process:function(){},getTouchAction:function(){},reset:function(){}},j(Z,V,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(fc|gc),e=this.attrTest(a);return d&&(c&Bb||!e)?b|jc:d||e?c&Ab?b|hc:b&fc?b|gc:fc:kc}}),j($,Z,{defaults:{event:"pan",threshold:10,pointers:1,direction:Jb},getTouchAction:function(){var a=this.options.direction,b=[];return a&Hb&&b.push(dc),a&Ib&&b.push(cc),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Hb?(e=0===f?Cb:0>f?Db:Eb,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Cb:0>g?Fb:Gb,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return Z.prototype.attrTest.call(this,a)&&(this.state&fc||!(this.state&fc)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),j(_,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[bc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&fc)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),j(ab,V,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[_b]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ab|Bb)&&!f)this.reset();else if(a.eventType&yb)this.reset(),this._timer=e(function(){this.state=ic,this.tryEmit()},b.time,this);else if(a.eventType&Ab)return ic;return kc},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===ic&&(a&&a.eventType&Ab?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=nb(),this.manager.emit(this.options.event,this._input)))}}),j(bb,Z,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[bc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&fc)}}),j(cb,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Hb|Ib,pointers:1},getTouchAction:function(){return $.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Hb|Ib)?b=a.velocity:c&Hb?b=a.velocityX:c&Ib&&(b=a.velocityY),this._super.attrTest.call(this,a)&&c&a.direction&&a.distance>this.options.threshold&&mb(b)>this.options.velocity&&a.eventType&Ab},emit:function(a){var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),j(db,V,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[ac]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&yb&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ab)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||I(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=ic,this.tryEmit()},b.interval,this),fc):ic}return kc},failTimeout:function(){return this._timer=e(function(){this.state=kc},this.options.interval,this),kc},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ic&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),eb.VERSION="2.0.4",eb.defaults={domEvents:!1,touchAction:$b,enable:!0,inputTarget:null,inputClass:null,preset:[[bb,{enable:!1}],[_,{enable:!1},["rotate"]],[cb,{direction:Hb}],[$,{direction:Hb},["swipe"]],[db],[db,{event:"doubletap",taps:2},["tap"]],[ab]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var lc=1,mc=2;fb.prototype={set:function(a){return h(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?mc:lc},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&ic)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===mc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(fc|gc|hc)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof V)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(s(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return g(r(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return g(r(a),function(a){b?c[a].splice(s(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&hb(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&gb(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(eb,{INPUT_START:yb,INPUT_MOVE:zb,INPUT_END:Ab,INPUT_CANCEL:Bb,STATE_POSSIBLE:ec,STATE_BEGAN:fc,STATE_CHANGED:gc,STATE_ENDED:hc,STATE_RECOGNIZED:ic,STATE_CANCELLED:jc,STATE_FAILED:kc,DIRECTION_NONE:Cb,DIRECTION_LEFT:Db,DIRECTION_RIGHT:Eb,DIRECTION_UP:Fb,DIRECTION_DOWN:Gb,DIRECTION_HORIZONTAL:Hb,DIRECTION_VERTICAL:Ib,DIRECTION_ALL:Jb,Manager:fb,Input:y,TouchAction:T,TouchInput:Q,MouseInput:M,PointerEventInput:N,TouchMouseInput:S,SingleTouchInput:O,Recognizer:V,AttrRecognizer:Z,Tap:db,Pan:$,Swipe:cb,Pinch:_,Rotate:bb,Press:ab,on:n,off:o,each:g,merge:i,extend:h,inherit:j,bindFn:k,prefixed:v}),typeof define==kb&&define.amd?define(function(){return eb}):"undefined"!=typeof module&&module.exports?module.exports=eb:a[c]=eb}(window,document,"Hammer");
//
/*! tether 0.6.5 */
!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e(require,exports,module):t.Tether=e()}(this,function(){return function(){var t,e,o,i,n,s,l,r,h,a,f,p,u,d,g,c,m,b={}.hasOwnProperty,v=[].indexOf||function(t){for(var e=0,o=this.length;o>e;e++)if(e in this&&this[e]===t)return e;return-1},y=[].slice;null==this.Tether&&(this.Tether={modules:[]}),f=function(t){var e,o,i,n,s;if(o=getComputedStyle(t).position,"fixed"===o)return t;for(i=void 0,e=t;e=e.parentNode;){try{n=getComputedStyle(e)}catch(l){}if(null==n)return e;if(/(auto|scroll)/.test(n.overflow+n["overflow-y"]+n["overflow-x"])&&("absolute"!==o||"relative"===(s=n.position)||"absolute"===s||"fixed"===s))return e}return document.body},g=function(){var t;return t=0,function(){return t++}}(),m={},h=function(t){var e,i,s,l,r;if(s=t._tetherZeroElement,null==s&&(s=t.createElement("div"),s.setAttribute("data-tether-id",g()),n(s.style,{top:0,left:0,position:"absolute"}),t.body.appendChild(s),t._tetherZeroElement=s),e=s.getAttribute("data-tether-id"),null==m[e]){m[e]={},r=s.getBoundingClientRect();for(i in r)l=r[i],m[e][i]=l;o(function(){return m[e]=void 0})}return m[e]},u=null,l=function(t){var e,o,i,n,s,l,r;t===document?(o=document,t=document.documentElement):o=t.ownerDocument,i=o.documentElement,e={},r=t.getBoundingClientRect();for(n in r)l=r[n],e[n]=l;return s=h(o),e.top-=s.top,e.left-=s.left,null==e.width&&(e.width=document.body.scrollWidth-e.left-e.right),null==e.height&&(e.height=document.body.scrollHeight-e.top-e.bottom),e.top=e.top-i.clientTop,e.left=e.left-i.clientLeft,e.right=o.body.clientWidth-e.width-e.left,e.bottom=o.body.clientHeight-e.height-e.top,e},r=function(t){return t.offsetParent||document.documentElement},a=function(){var t,e,o,i,s;return t=document.createElement("div"),t.style.width="100%",t.style.height="200px",e=document.createElement("div"),n(e.style,{position:"absolute",top:0,left:0,pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e),i=t.offsetWidth,e.style.overflow="scroll",s=t.offsetWidth,i===s&&(s=e.clientWidth),document.body.removeChild(e),o=i-s,{width:o,height:o}},n=function(t){var e,o,i,n,s,l,r;for(null==t&&(t={}),e=[],Array.prototype.push.apply(e,arguments),r=e.slice(1),s=0,l=r.length;l>s;s++)if(i=r[s])for(o in i)b.call(i,o)&&(n=i[o],t[o]=n);return t},d=function(t,e){var o,i,n,s,l;if(null!=t.classList){for(s=e.split(" "),l=[],i=0,n=s.length;n>i;i++)o=s[i],o.trim()&&l.push(t.classList.remove(o));return l}return t.className=t.className.replace(new RegExp("(^| )"+e.split(" ").join("|")+"( |$)","gi")," ")},e=function(t,e){var o,i,n,s,l;if(null!=t.classList){for(s=e.split(" "),l=[],i=0,n=s.length;n>i;i++)o=s[i],o.trim()&&l.push(t.classList.add(o));return l}return d(t,e),t.className+=" "+e},p=function(t,e){return null!=t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)},c=function(t,o,i){var n,s,l,r,h,a;for(s=0,r=i.length;r>s;s++)n=i[s],v.call(o,n)<0&&p(t,n)&&d(t,n);for(a=[],l=0,h=o.length;h>l;l++)n=o[l],a.push(p(t,n)?void 0:e(t,n));return a},i=[],o=function(t){return i.push(t)},s=function(){var t,e;for(e=[];t=i.pop();)e.push(t());return e},t=function(){function t(){}return t.prototype.on=function(t,e,o,i){var n;return null==i&&(i=!1),null==this.bindings&&(this.bindings={}),null==(n=this.bindings)[t]&&(n[t]=[]),this.bindings[t].push({handler:e,ctx:o,once:i})},t.prototype.once=function(t,e,o){return this.on(t,e,o,!0)},t.prototype.off=function(t,e){var o,i,n;if(null!=(null!=(i=this.bindings)?i[t]:void 0)){if(null==e)return delete this.bindings[t];for(o=0,n=[];o<this.bindings[t].length;)n.push(this.bindings[t][o].handler===e?this.bindings[t].splice(o,1):o++);return n}},t.prototype.trigger=function(){var t,e,o,i,n,s,l,r,h;if(o=arguments[0],t=2<=arguments.length?y.call(arguments,1):[],null!=(l=this.bindings)?l[o]:void 0){for(n=0,h=[];n<this.bindings[o].length;)r=this.bindings[o][n],i=r.handler,e=r.ctx,s=r.once,i.apply(null!=e?e:this,t),h.push(s?this.bindings[o].splice(n,1):n++);return h}},t}(),this.Tether.Utils={getScrollParent:f,getBounds:l,getOffsetParent:r,extend:n,addClass:e,removeClass:d,hasClass:p,updateClasses:c,defer:o,flush:s,uniqueId:g,Evented:t,getScrollBarSize:a}}.call(this),function(){var t,e,o,i,n,s,l,r,h,a,f,p,u,d,g,c,m,b,v,y,w,C,O,T,x,E,W,A,S,M=[].slice,z=function(t,e){return function(){return t.apply(e,arguments)}};if(null==this.Tether)throw new Error("You must include the utils.js file before tether.js");i=this.Tether,S=i.Utils,c=S.getScrollParent,m=S.getSize,d=S.getOuterSize,p=S.getBounds,u=S.getOffsetParent,a=S.extend,n=S.addClass,O=S.removeClass,E=S.updateClasses,h=S.defer,f=S.flush,g=S.getScrollBarSize,W=function(t,e,o){return null==o&&(o=1),t+o>=e&&e>=t-o},x=function(){var t,e,o,i,n;for(t=document.createElement("div"),n=["transform","webkitTransform","OTransform","MozTransform","msTransform"],o=0,i=n.length;i>o;o++)if(e=n[o],void 0!==t.style[e])return e}(),T=[],C=function(){var t,e,o;for(e=0,o=T.length;o>e;e++)t=T[e],t.position(!1);return f()},b=function(){var t;return null!=(t="undefined"!=typeof performance&&null!==performance?"function"==typeof performance.now?performance.now():void 0:void 0)?t:+new Date},function(){var t,e,o,i,n,s,l,r,h;for(e=null,o=null,i=null,n=function(){if(null!=o&&o>16)return o=Math.min(o-16,250),void(i=setTimeout(n,250));if(!(null!=e&&b()-e<10))return null!=i&&(clearTimeout(i),i=null),e=b(),C(),o=b()-e},r=["resize","scroll","touchmove"],h=[],s=0,l=r.length;l>s;s++)t=r[s],h.push(window.addEventListener(t,n));return h}(),t={center:"center",left:"right",right:"left"},e={middle:"middle",top:"bottom",bottom:"top"},o={top:0,left:0,middle:"50%",center:"50%",bottom:"100%",right:"100%"},r=function(o,i){var n,s;return n=o.left,s=o.top,"auto"===n&&(n=t[i.left]),"auto"===s&&(s=e[i.top]),{left:n,top:s}},l=function(t){var e,i;return{left:null!=(e=o[t.left])?e:t.left,top:null!=(i=o[t.top])?i:t.top}},s=function(){var t,e,o,i,n,s,l;for(e=1<=arguments.length?M.call(arguments,0):[],o={top:0,left:0},n=0,s=e.length;s>n;n++)l=e[n],i=l.top,t=l.left,"string"==typeof i&&(i=parseFloat(i,10)),"string"==typeof t&&(t=parseFloat(t,10)),o.top+=i,o.left+=t;return o},v=function(t,e){return"string"==typeof t.left&&-1!==t.left.indexOf("%")&&(t.left=parseFloat(t.left,10)/100*e.width),"string"==typeof t.top&&-1!==t.top.indexOf("%")&&(t.top=parseFloat(t.top,10)/100*e.height),t},y=w=function(t){var e,o,i;return i=t.split(" "),o=i[0],e=i[1],{top:o,left:e}},A=function(){function t(t){this.position=z(this.position,this);var e,o,n,s,l;for(T.push(this),this.history=[],this.setOptions(t,!1),s=i.modules,o=0,n=s.length;n>o;o++)e=s[o],null!=(l=e.initialize)&&l.call(this);this.position()}return t.modules=[],t.prototype.getClass=function(t){var e,o;return(null!=(e=this.options.classes)?e[t]:void 0)?this.options.classes[t]:(null!=(o=this.options.classes)?o[t]:void 0)!==!1?this.options.classPrefix?""+this.options.classPrefix+"-"+t:t:""},t.prototype.setOptions=function(t,e){var o,i,s,l,r,h;for(this.options=t,null==e&&(e=!0),o={offset:"0 0",targetOffset:"0 0",targetAttachment:"auto auto",classPrefix:"tether"},this.options=a(o,this.options),r=this.options,this.element=r.element,this.target=r.target,this.targetModifier=r.targetModifier,"viewport"===this.target?(this.target=document.body,this.targetModifier="visible"):"scroll-handle"===this.target&&(this.target=document.body,this.targetModifier="scroll-handle"),h=["element","target"],s=0,l=h.length;l>s;s++){if(i=h[s],null==this[i])throw new Error("Tether Error: Both element and target must be defined");null!=this[i].jquery?this[i]=this[i][0]:"string"==typeof this[i]&&(this[i]=document.querySelector(this[i]))}if(n(this.element,this.getClass("element")),n(this.target,this.getClass("target")),!this.options.attachment)throw new Error("Tether Error: You must provide an attachment");return this.targetAttachment=y(this.options.targetAttachment),this.attachment=y(this.options.attachment),this.offset=w(this.options.offset),this.targetOffset=w(this.options.targetOffset),null!=this.scrollParent&&this.disable(),this.scrollParent="scroll-handle"===this.targetModifier?this.target:c(this.target),this.options.enabled!==!1?this.enable(e):void 0},t.prototype.getTargetBounds=function(){var t,e,o,i,n,s,l,r,h;if(null==this.targetModifier)return p(this.target);switch(this.targetModifier){case"visible":return this.target===document.body?{top:pageYOffset,left:pageXOffset,height:innerHeight,width:innerWidth}:(t=p(this.target),n={height:t.height,width:t.width,top:t.top,left:t.left},n.height=Math.min(n.height,t.height-(pageYOffset-t.top)),n.height=Math.min(n.height,t.height-(t.top+t.height-(pageYOffset+innerHeight))),n.height=Math.min(innerHeight,n.height),n.height-=2,n.width=Math.min(n.width,t.width-(pageXOffset-t.left)),n.width=Math.min(n.width,t.width-(t.left+t.width-(pageXOffset+innerWidth))),n.width=Math.min(innerWidth,n.width),n.width-=2,n.top<pageYOffset&&(n.top=pageYOffset),n.left<pageXOffset&&(n.left=pageXOffset),n);case"scroll-handle":return h=this.target,h===document.body?(h=document.documentElement,t={left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth}):t=p(h),r=getComputedStyle(h),o=h.scrollWidth>h.clientWidth||"scroll"===[r.overflow,r.overflowX]||this.target!==document.body,s=0,o&&(s=15),i=t.height-parseFloat(r.borderTopWidth)-parseFloat(r.borderBottomWidth)-s,n={width:15,height:.975*i*(i/h.scrollHeight),left:t.left+t.width-parseFloat(r.borderLeftWidth)-15},e=0,408>i&&this.target===document.body&&(e=-11e-5*Math.pow(i,2)-.00727*i+22.58),this.target!==document.body&&(n.height=Math.max(n.height,24)),l=this.target.scrollTop/(h.scrollHeight-i),n.top=l*(i-n.height-e)+t.top+parseFloat(r.borderTopWidth),this.target===document.body&&(n.height=Math.max(n.height,24)),n}},t.prototype.clearCache=function(){return this._cache={}},t.prototype.cache=function(t,e){return null==this._cache&&(this._cache={}),null==this._cache[t]&&(this._cache[t]=e.call(this)),this._cache[t]},t.prototype.enable=function(t){return null==t&&(t=!0),n(this.target,this.getClass("enabled")),n(this.element,this.getClass("enabled")),this.enabled=!0,this.scrollParent!==document&&this.scrollParent.addEventListener("scroll",this.position),t?this.position():void 0},t.prototype.disable=function(){return O(this.target,this.getClass("enabled")),O(this.element,this.getClass("enabled")),this.enabled=!1,null!=this.scrollParent?this.scrollParent.removeEventListener("scroll",this.position):void 0},t.prototype.destroy=function(){var t,e,o,i,n;for(this.disable(),n=[],t=o=0,i=T.length;i>o;t=++o){if(e=T[t],e===this){T.splice(t,1);break}n.push(void 0)}return n},t.prototype.updateAttachClasses=function(t,e){var o,i,n,s,l,r,a,f,p,u=this;for(null==t&&(t=this.attachment),null==e&&(e=this.targetAttachment),s=["left","top","bottom","right","middle","center"],(null!=(p=this._addAttachClasses)?p.length:void 0)&&this._addAttachClasses.splice(0,this._addAttachClasses.length),o=null!=this._addAttachClasses?this._addAttachClasses:this._addAttachClasses=[],t.top&&o.push(""+this.getClass("element-attached")+"-"+t.top),t.left&&o.push(""+this.getClass("element-attached")+"-"+t.left),e.top&&o.push(""+this.getClass("target-attached")+"-"+e.top),e.left&&o.push(""+this.getClass("target-attached")+"-"+e.left),i=[],l=0,a=s.length;a>l;l++)n=s[l],i.push(""+this.getClass("element-attached")+"-"+n);for(r=0,f=s.length;f>r;r++)n=s[r],i.push(""+this.getClass("target-attached")+"-"+n);return h(function(){return null!=u._addAttachClasses?(E(u.element,u._addAttachClasses,i),E(u.target,u._addAttachClasses,i),u._addAttachClasses=void 0):void 0})},t.prototype.position=function(t){var e,o,n,h,a,d,c,m,b,y,w,C,O,T,x,E,W,A,S,M,z,B,P,_,F,L,H,Y,X,N,j,R,U,q,k,D=this;if(null==t&&(t=!0),this.enabled){for(this.clearCache(),M=r(this.targetAttachment,this.attachment),this.updateAttachClasses(this.attachment,M),e=this.cache("element-bounds",function(){return p(D.element)}),F=e.width,n=e.height,0===F&&0===n&&null!=this.lastSize?(N=this.lastSize,F=N.width,n=N.height):this.lastSize={width:F,height:n},P=B=this.cache("target-bounds",function(){return D.getTargetBounds()}),b=v(l(this.attachment),{width:F,height:n}),z=v(l(M),P),a=v(this.offset,{width:F,height:n}),d=v(this.targetOffset,P),b=s(b,a),z=s(z,d),h=B.left+z.left-b.left,_=B.top+z.top-b.top,j=i.modules,L=0,Y=j.length;Y>L;L++)if(c=j[L],x=c.position.call(this,{left:h,top:_,targetAttachment:M,targetPos:B,attachment:this.attachment,elementPos:e,offset:b,targetOffset:z,manualOffset:a,manualTargetOffset:d,scrollbarSize:A}),null!=x&&"object"==typeof x){if(x===!1)return!1;_=x.top,h=x.left}if(m={page:{top:_,left:h},viewport:{top:_-pageYOffset,bottom:pageYOffset-_-n+innerHeight,left:h-pageXOffset,right:pageXOffset-h-F+innerWidth}},document.body.scrollWidth>window.innerWidth&&(A=this.cache("scrollbar-size",g),m.viewport.bottom-=A.height),document.body.scrollHeight>window.innerHeight&&(A=this.cache("scrollbar-size",g),m.viewport.right-=A.width),(""!==(R=document.body.style.position)&&"static"!==R||""!==(U=document.body.parentElement.style.position)&&"static"!==U)&&(m.page.bottom=document.body.scrollHeight-_-n,m.page.right=document.body.scrollWidth-h-F),(null!=(q=this.options.optimizations)?q.moveElement:void 0)!==!1&&null==this.targetModifier){for(w=this.cache("target-offsetparent",function(){return u(D.target)}),T=this.cache("target-offsetparent-bounds",function(){return p(w)}),O=getComputedStyle(w),o=getComputedStyle(this.element),C=T,y={},k=["Top","Left","Bottom","Right"],H=0,X=k.length;X>H;H++)S=k[H],y[S.toLowerCase()]=parseFloat(O["border"+S+"Width"]);T.right=document.body.scrollWidth-T.left-C.width+y.right,T.bottom=document.body.scrollHeight-T.top-C.height+y.bottom,m.page.top>=T.top+y.top&&m.page.bottom>=T.bottom&&m.page.left>=T.left+y.left&&m.page.right>=T.right&&(W=w.scrollTop,E=w.scrollLeft,m.offset={top:m.page.top-T.top+W-y.top,left:m.page.left-T.left+E-y.left})}return this.move(m),this.history.unshift(m),this.history.length>3&&this.history.pop(),t&&f(),!0}},t.prototype.move=function(t){var e,o,i,n,s,l,r,f,p,d,g,c,m,b,v,y,w,C=this;if(null!=this.element.parentNode){f={};for(d in t){f[d]={};for(n in t[d]){for(i=!1,y=this.history,b=0,v=y.length;v>b;b++)if(r=y[b],!W(null!=(w=r[d])?w[n]:void 0,t[d][n])){i=!0;break}i||(f[d][n]=!0)}}e={top:"",left:"",right:"",bottom:""},p=function(t,o){var i,n,s;return(null!=(s=C.options.optimizations)?s.gpu:void 0)===!1?(t.top?e.top=""+o.top+"px":e.bottom=""+o.bottom+"px",t.left?e.left=""+o.left+"px":e.right=""+o.right+"px"):(t.top?(e.top=0,n=o.top):(e.bottom=0,n=-o.bottom),t.left?(e.left=0,i=o.left):(e.right=0,i=-o.right),e[x]="translateX("+Math.round(i)+"px) translateY("+Math.round(n)+"px)","msTransform"!==x?e[x]+=" translateZ(0)":void 0)},s=!1,(f.page.top||f.page.bottom)&&(f.page.left||f.page.right)?(e.position="absolute",p(f.page,t.page)):(f.viewport.top||f.viewport.bottom)&&(f.viewport.left||f.viewport.right)?(e.position="fixed",p(f.viewport,t.viewport)):null!=f.offset&&f.offset.top&&f.offset.left?(e.position="absolute",l=this.cache("target-offsetparent",function(){return u(C.target)}),u(this.element)!==l&&h(function(){return C.element.parentNode.removeChild(C.element),l.appendChild(C.element)}),p(f.offset,t.offset),s=!0):(e.position="absolute",p({top:!0,left:!0},t.page)),s||"BODY"===this.element.parentNode.tagName||(this.element.parentNode.removeChild(this.element),document.body.appendChild(this.element)),m={},c=!1;for(n in e)g=e[n],o=this.element.style[n],""===o||""===g||"top"!==n&&"left"!==n&&"bottom"!==n&&"right"!==n||(o=parseFloat(o),g=parseFloat(g)),o!==g&&(c=!0,m[n]=e[n]);return c?h(function(){return a(C.element.style,m)}):void 0}},t}(),i.position=C,this.Tether=a(A,i)}.call(this),function(){var t,e,o,i,n,s,l,r,h,a,f=[].indexOf||function(t){for(var e=0,o=this.length;o>e;e++)if(e in this&&this[e]===t)return e;return-1};a=this.Tether.Utils,l=a.getOuterSize,s=a.getBounds,r=a.getSize,i=a.extend,h=a.updateClasses,o=a.defer,e={left:"right",right:"left",top:"bottom",bottom:"top",middle:"middle"},t=["left","top","right","bottom"],n=function(e,o){var i,n,l,r,h,a,f;if("scrollParent"===o?o=e.scrollParent:"window"===o&&(o=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset]),o===document&&(o=o.documentElement),null!=o.nodeType)for(n=r=s(o),h=getComputedStyle(o),o=[n.left,n.top,r.width+n.left,r.height+n.top],i=a=0,f=t.length;f>a;i=++a)l=t[i],l=l[0].toUpperCase()+l.substr(1),"Top"===l||"Left"===l?o[i]+=parseFloat(h["border"+l+"Width"]):o[i]-=parseFloat(h["border"+l+"Width"]);return o},this.Tether.modules.push({position:function(e){var l,r,a,p,u,d,g,c,m,b,v,y,w,C,O,T,x,E,W,A,S,M,z,B,P,_,F,L,H,Y,X,N,j,R,U,q,k,D,Z,$,I,G,J,K,Q,V,te,ee=this;if(_=e.top,v=e.left,S=e.targetAttachment,!this.options.constraints)return!0;for(E=function(e){var o,i,n,s;for(ee.removeClass(e),s=[],i=0,n=t.length;n>i;i++)o=t[i],s.push(ee.removeClass(""+e+"-"+o));return s},$=this.cache("element-bounds",function(){return s(ee.element)}),b=$.height,F=$.width,0===F&&0===b&&null!=this.lastSize&&(I=this.lastSize,F=I.width,b=I.height),z=this.cache("target-bounds",function(){return ee.getTargetBounds()}),M=z.height,B=z.width,A={},m={},r=[this.getClass("pinned"),this.getClass("out-of-bounds")],G=this.options.constraints,L=0,N=G.length;N>L;L++)c=G[L],c.outOfBoundsClass&&r.push(c.outOfBoundsClass),c.pinnedClass&&r.push(c.pinnedClass);for(H=0,j=r.length;j>H;H++)for(g=r[H],J=["left","top","right","bottom"],Y=0,R=J.length;R>Y;Y++)W=J[Y],r.push(""+g+"-"+W);for(l=[],A=i({},S),m=i({},this.attachment),K=this.options.constraints,X=0,U=K.length;U>X;X++){if(c=K[X],P=c.to,a=c.attachment,O=c.pin,null==a&&(a=""),f.call(a," ")>=0?(Q=a.split(" "),d=Q[0],u=Q[1]):u=d=a,p=n(this,P),("target"===d||"both"===d)&&(_<p[1]&&"top"===A.top&&(_+=M,A.top="bottom"),_+b>p[3]&&"bottom"===A.top&&(_-=M,A.top="top")),"together"===d&&(_<p[1]&&"top"===A.top&&("bottom"===m.top?(_+=M,A.top="bottom",_+=b,m.top="top"):"top"===m.top&&(_+=M,A.top="bottom",_-=b,m.top="bottom")),_+b>p[3]&&"bottom"===A.top&&("top"===m.top?(_-=M,A.top="top",_-=b,m.top="bottom"):"bottom"===m.top&&(_-=M,A.top="top",_+=b,m.top="top")),"middle"===A.top&&(_+b>p[3]&&"top"===m.top?(_-=b,m.top="bottom"):_<p[1]&&"bottom"===m.top&&(_+=b,m.top="top"))),("target"===u||"both"===u)&&(v<p[0]&&"left"===A.left&&(v+=B,A.left="right"),v+F>p[2]&&"right"===A.left&&(v-=B,A.left="left")),"together"===u&&(v<p[0]&&"left"===A.left?"right"===m.left?(v+=B,A.left="right",v+=F,m.left="left"):"left"===m.left&&(v+=B,A.left="right",v-=F,m.left="right"):v+F>p[2]&&"right"===A.left?"left"===m.left?(v-=B,A.left="left",v-=F,m.left="right"):"right"===m.left&&(v-=B,A.left="left",v+=F,m.left="left"):"center"===A.left&&(v+F>p[2]&&"left"===m.left?(v-=F,m.left="right"):v<p[0]&&"right"===m.left&&(v+=F,m.left="left"))),("element"===d||"both"===d)&&(_<p[1]&&"bottom"===m.top&&(_+=b,m.top="top"),_+b>p[3]&&"top"===m.top&&(_-=b,m.top="bottom")),("element"===u||"both"===u)&&(v<p[0]&&"right"===m.left&&(v+=F,m.left="left"),v+F>p[2]&&"left"===m.left&&(v-=F,m.left="right")),"string"==typeof O?O=function(){var t,e,o,i;for(o=O.split(","),i=[],e=0,t=o.length;t>e;e++)C=o[e],i.push(C.trim());return i}():O===!0&&(O=["top","left","right","bottom"]),O||(O=[]),T=[],y=[],_<p[1]&&(f.call(O,"top")>=0?(_=p[1],T.push("top")):y.push("top")),_+b>p[3]&&(f.call(O,"bottom")>=0?(_=p[3]-b,T.push("bottom")):y.push("bottom")),v<p[0]&&(f.call(O,"left")>=0?(v=p[0],T.push("left")):y.push("left")),v+F>p[2]&&(f.call(O,"right")>=0?(v=p[2]-F,T.push("right")):y.push("right")),T.length)for(x=null!=(V=this.options.pinnedClass)?V:this.getClass("pinned"),l.push(x),D=0,q=T.length;q>D;D++)W=T[D],l.push(""+x+"-"+W);if(y.length)for(w=null!=(te=this.options.outOfBoundsClass)?te:this.getClass("out-of-bounds"),l.push(w),Z=0,k=y.length;k>Z;Z++)W=y[Z],l.push(""+w+"-"+W);(f.call(T,"left")>=0||f.call(T,"right")>=0)&&(m.left=A.left=!1),(f.call(T,"top")>=0||f.call(T,"bottom")>=0)&&(m.top=A.top=!1),(A.top!==S.top||A.left!==S.left||m.top!==this.attachment.top||m.left!==this.attachment.left)&&this.updateAttachClasses(m,A)}return o(function(){return h(ee.target,l,r),h(ee.element,l,r)}),{top:_,left:v}}})}.call(this),function(){var t,e,o,i;i=this.Tether.Utils,e=i.getBounds,o=i.updateClasses,t=i.defer,this.Tether.modules.push({position:function(i){var n,s,l,r,h,a,f,p,u,d,g,c,m,b,v,y,w,C,O,T,x,E,W,A,S,M=this;if(g=i.top,a=i.left,x=this.cache("element-bounds",function(){return e(M.element)}),h=x.height,c=x.width,d=this.getTargetBounds(),r=g+h,f=a+c,n=[],g<=d.bottom&&r>=d.top)for(E=["left","right"],m=0,w=E.length;w>m;m++)p=E[m],((W=d[p])===a||W===f)&&n.push(p);if(a<=d.right&&f>=d.left)for(A=["top","bottom"],b=0,C=A.length;C>b;b++)p=A[b],((S=d[p])===g||S===r)&&n.push(p);for(l=[],s=[],u=["left","top","right","bottom"],l.push(this.getClass("abutted")),v=0,O=u.length;O>v;v++)p=u[v],l.push(""+this.getClass("abutted")+"-"+p);for(n.length&&s.push(this.getClass("abutted")),y=0,T=n.length;T>y;y++)p=n[y],s.push(""+this.getClass("abutted")+"-"+p);return t(function(){return o(M.target,s,l),o(M.element,s,l)}),!0}})}.call(this),function(){this.Tether.modules.push({position:function(t){var e,o,i,n,s,l,r;return l=t.top,e=t.left,this.options.shift?(o=function(t){return"function"==typeof t?t.call(this,{top:l,left:e}):t},i=o(this.options.shift),"string"==typeof i?(i=i.split(" "),i[1]||(i[1]=i[0]),s=i[0],n=i[1],s=parseFloat(s,10),n=parseFloat(n,10)):(r=[i.top,i.left],s=r[0],n=r[1]),l+=s,e+=n,{top:l,left:e}):void 0}})}.call(this),this.Tether});
/**
 * State-based routing for AngularJS
 * @version v0.2.13
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return M(new(M(function(){},{prototype:a})),b)}function e(a){return L(arguments,function(b){b!==a&&L(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var c=[];return b.forEach(a,function(a,b){c.push(b)}),c}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return M({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return L(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)-1==h(c,d)&&(b[d]=a[d]);return b}function m(a,b){var c=K(a),d=c?[]:{};return L(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function n(a,b){var c=K(a)?[]:{};return L(a,function(a,d){c[d]=b(a,d)}),c}function o(a,b){var d=1,f=2,i={},j=[],k=i,m=M(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(s[c]!==f){if(r.push(c),s[c]===d)throw r.splice(0,h(r,c)),new Error("Cyclic dependency: "+r.join(" -> "));if(s[c]=d,I(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);L(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}}function o(a){return J(a)&&a.then&&a.$$promises}if(!J(i))throw new Error("'invocables' must be an object");var p=g(i||{}),q=[],r=[],s={};return L(i,n),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,n.resolve(t))}function i(a){r.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!G(r.$$failure))try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;L(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!J(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=m;var n=a.defer(),r=n.promise,s=r.$$promises={},t=M({},d),u=1+q.length/3,v=!1;if(G(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,l(f.$$inheritedValues,p)),M(s,f.$$promises),f.$$values?(v=e(t,l(f.$$values,p)),r.$$inheritedValues=l(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=l(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;x>w;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function p(a,b,c){this.fromConfig=function(a,b,c){return G(a.template)?this.fromString(a.template,b):G(a.templateUrl)?this.fromUrl(a.templateUrl,b):G(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return H(a)?a(b):a},this.fromUrl=function(c,d){return H(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function q(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+(-+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new O.Param(b,c,d,e),p[b]}function g(a,b,c){var d=["",""],e=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return e;switch(c){case!1:d=["(",")"];break;case!0:d=["?(",")?"];break;default:d=["("+c+"|",")?"]}return e+d[0]+b+d[1]}function h(c,e){var f,g,h,i,j;return f=c[2]||c[3],j=b.params[f],h=a.substring(m,c.index),g=e?c[4]:c[4]||("*"==c[1]?".*":null),i=O.type(g||"string")||d(O.type("string"),{pattern:new RegExp(g)}),{id:f,regexp:g,segment:h,type:i,cfg:j}}b=M({params:{}},J(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new O.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function r(a){M(this,a)}function s(){function a(a){return null!=a?a.toString().replace(/\//g,"%2F"):a}function e(a){return null!=a?a.toString().replace(/%2F/g,"/"):a}function f(a){return this.pattern.test(a)}function i(){return{strict:t,caseInsensitive:p}}function j(a){return H(a)||K(a)&&H(a[a.length-1])}function k(){for(;x.length;){var a=x.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(v[a.name],o.invoke(a.def))}}function l(a){M(this,a||{})}O=this;var o,p=!1,t=!0,u=!1,v={},w=!0,x=[],y={string:{encode:a,decode:e,is:f,pattern:/[^/]*/},"int":{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return G(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^/]*/},any:{encode:b.identity,decode:b.identity,is:b.identity,equals:b.equals,pattern:/.*/}};s.$$getDefaultValue=function(a){if(!j(a.value))return a.value;if(!o)throw new Error("Injectable functions cannot be called at configuration time");return o.invoke(a.value)},this.caseInsensitive=function(a){return G(a)&&(p=a),p},this.strictMode=function(a){return G(a)&&(t=a),t},this.defaultSquashPolicy=function(a){if(!G(a))return u;if(a!==!0&&a!==!1&&!I(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return u=a,a},this.compile=function(a,b){return new q(a,M(i(),b))},this.isMatcher=function(a){if(!J(a))return!1;var b=!0;return L(q.prototype,function(c,d){H(c)&&(b=b&&G(a[d])&&H(a[d]))}),b},this.type=function(a,b,c){if(!G(b))return v[a];if(v.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return v[a]=new r(M({name:a},b)),c&&(x.push({name:a,def:c}),w||k()),this},L(y,function(a,b){v[b]=new r(M({name:b},a))}),v=d(v,{}),this.$get=["$injector",function(a){return o=a,w=!1,k(),L(y,function(a,b){v[b]||(v[b]=new r(a))}),this}],this.Param=function(a,b,d,e){function f(a){var b=J(a)?g(a):[],c=-1===h(b,"value")&&-1===h(b,"type")&&-1===h(b,"squash")&&-1===h(b,"array");return c&&(a={value:a}),a.$$fn=j(a.value)?a.value:function(){return a.value},a}function i(b,c,d){if(b.type&&c)throw new Error("Param '"+a+"' has two type configurations.");return c?c:b.type?b.type instanceof r?b.type:new r(b.type):"config"===d?v.any:v.string}function k(){var b={array:"search"===e?"auto":!1},c=a.match(/\[\]$/)?{array:!0}:{};return M(b,c,d).array}function l(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!G(c)||null==c)return u;if(c===!0||I(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function p(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=K(a.replace)?a.replace:[],I(e)&&f.push({from:e,to:c}),g=n(f,function(a){return a.from}),m(i,function(a){return-1===h(g,a.from)}).concat(f)}function q(){if(!o)throw new Error("Injectable functions cannot be called at configuration time");return o.invoke(d.$$fn)}function s(a){function b(a){return function(b){return b.from===a}}function c(a){var c=n(m(w.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),G(a)?w.type.decode(a):q()}function t(){return"{Param:"+a+" "+b+" squash: '"+z+"' optional: "+y+"}"}var w=this;d=f(d),b=i(d,b,e);var x=k();b=x?b.$asArray(x,"search"===e):b,"string"!==b.name||x||"path"!==e||d.value!==c||(d.value="");var y=d.value!==c,z=l(d,y),A=p(d,x,y,z);M(this,{id:a,type:b,location:e,array:x,squash:z,replace:A,isOptional:y,value:s,dynamic:c,config:d,toString:t})},l.prototype={$$new:function(){return d(this,M(new l,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(l.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),L(b,function(b){L(g(b),function(b){-1===h(a,b)&&-1===h(d,b)&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return L(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return L(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var b,c,d,e=!0,f=this;return L(this.$$keys(),function(g){d=f[g],c=a[g],b=!c&&d.isOptional,e=e&&(b||!!d.type.is(c))}),e},$$parent:c},this.ParamSet=l}function t(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return G(d)?d:!0}function h(d,e,f,g){function h(a,b,c){return"/"===p?a:b?p.slice(0,-1)+a:c?p.slice(1)+a:a}function m(a){function b(a){var b=a(f,d);return b?(I(b)&&d.replace().url(b),!0):!1}if(!a||!a.defaultPrevented){var e=o&&d.url()===o;if(o=c,e)return!0;var g,h=j.length;for(g=0;h>g;g++)if(b(j[g]))return;k&&b(k)}}function n(){return i=i||e.$on("$locationChangeSuccess",m)}var o,p=g.baseHref(),q=d.url();return l||n(),{sync:function(){m()},listen:function(){return n()},update:function(a){return a?void(q=d.url()):void(d.url()!==q&&(d.url(q),d.replace()))},push:function(a,b,e){d.url(a.format(b||{})),o=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled);var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),i=h(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!H(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(I(a)){var b=a;a=function(){return b}}else if(!H(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=I(b);if(I(a)&&(a=d.compile(a)),!h&&!H(b)&&!K(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),M(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:I(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),M(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser"]}function u(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function l(a,b){if(!a)return c;var d=I(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=l(b);for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var m=y[e];return!m||!d&&(d||m!==a&&m.self!==a)?c:m}function m(a,b){z[a]||(z[a]=[]),z[a].push(b)}function o(a){for(var b=z[a]||[];b.length;)p(b.shift())}function p(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!I(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(y.hasOwnProperty(c))throw new Error("State '"+c+"'' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):I(b.parent)?b.parent:J(b.parent)&&I(b.parent.name)?b.parent.name:"";if(e&&!y[e])return m(e,b.self);for(var f in B)H(B[f])&&(b[f]=B[f](b,B.$delegates[f]));return y[c]=b,!b[A]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){x.$current.navigable==b&&j(a,c)||x.transitionTo(b,a,{inherit:!0,location:!1})}]),o(c),b}function q(a){return a.indexOf("*")>-1}function r(a){var b=a.split("."),c=x.$current.name.split(".");if("**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length)return!1;for(var d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return c.join("")===b.join("")}function s(a,b){return I(a)&&!G(b)?B[a]:H(b)&&I(a)?(B[a]&&!B.$delegates[a]&&(B.$delegates[a]=B[a]),B[a]=b,this):this}function t(a,b){return J(a)?b=a:b.name=a,p(b),this}function u(a,e,f,h,m,o,p){function s(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return p.update(),B;if(!g.retry)return null;if(f.$retry)return p.update(),C;var h=x.transition=e.when(g.retry);return h.then(function(){return h!==x.transition?u:(b.options.$retry=!0,x.transitionTo(b.to,b.toParams,b.options))},function(){return B}),p.update(),h}function t(a,c,d,g,i,j){var l=d?c:k(a.params.$$keys(),c),n={$stateParams:l};i.resolve=m.resolve(a.resolve,n,i.resolve,a);var o=[i.resolve.then(function(a){i.globals=a})];return g&&o.push(g),L(a.views,function(c,d){var e=c.resolve&&c.resolve!==a.resolve?c.resolve:{};e.$template=[function(){return f.load(d,{view:c,locals:n,params:l,notify:j.notify})||""}],o.push(m.resolve(e,n,i.resolve,a).then(function(f){if(H(c.controllerProvider)||K(c.controllerProvider)){var g=b.extend({},e,n);f.$$controller=h.invoke(c.controllerProvider,null,g)}else f.$$controller=c.controller;f.$$state=a,f.$$controllerAs=c.controllerAs,i[d]=f}))}),e.all(o).then(function(){return i})}var u=e.reject(new Error("transition superseded")),z=e.reject(new Error("transition prevented")),B=e.reject(new Error("transition aborted")),C=e.reject(new Error("transition failed"));return w.locals={resolve:null,globals:{$stateParams:{}}},x={params:{},current:w.self,$current:w,transition:null},x.reload=function(){return x.transitionTo(x.current,o,{reload:!0,inherit:!1,notify:!0})},x.go=function(a,b,c){return x.transitionTo(a,b,M({inherit:!0,relative:x.$current},c))},x.transitionTo=function(b,c,f){c=c||{},f=M({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=x.$current,m=x.params,n=j.path,q=l(b,f.relative);if(!G(q)){var r={to:b,toParams:c,options:f},y=s(r,j.self,m,f);if(y)return y;if(b=r.to,c=r.toParams,f=r.options,q=l(b,f.relative),!G(q)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(q[A])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(o,c||{},x.$current,q)),!q.params.$$validates(c))return C;c=q.params.$$values(c),b=q;var B=b.path,D=0,E=B[D],F=w.locals,H=[];if(!f.reload)for(;E&&E===n[D]&&E.ownParams.$$equals(c,m);)F=H[D]=E.locals,D++,E=B[D];if(v(b,j,F,f))return b.self.reloadOnSearch!==!1&&p.update(),x.transition=null,e.when(x.current);if(c=k(b.params.$$keys(),c||{}),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,m).defaultPrevented)return p.update(),z;for(var I=e.when(F),J=D;J<B.length;J++,E=B[J])F=H[J]=d(F),I=t(E,c,E===b,I,F,f);var K=x.transition=I.then(function(){var d,e,g;if(x.transition!==K)return u;for(d=n.length-1;d>=D;d--)g=n[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=D;d<B.length;d++)e=B[d],e.locals=H[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return x.transition!==K?u:(x.$current=b,x.current=b.self,x.params=c,N(x.params,o),x.transition=null,f.location&&b.navigable&&p.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,m),p.update(!0),x.current)},function(d){return x.transition!==K?u:(x.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,m,d),g.defaultPrevented||p.update(),e.reject(d))});return K},x.is=function(a,b,d){d=M({relative:x.$current},d||{});var e=l(a,d.relative);return G(e)?x.$current!==e?!1:b?j(e.params.$$values(b),o):!0:c},x.includes=function(a,b,d){if(d=M({relative:x.$current},d||{}),I(a)&&q(a)){if(!r(a))return!1;a=x.$current.name}var e=l(a,d.relative);return G(e)?G(x.$current.includes[e.name])?b?j(e.params.$$values(b),o,g(b)):!0:!1:c},x.href=function(a,b,d){d=M({lossy:!0,inherit:!0,absolute:!1,relative:x.$current},d||{});var e=l(a,d.relative);if(!G(e))return null;d.inherit&&(b=i(o,b||{},x.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?p.href(f.url,k(e.params.$$keys(),b||{}),{absolute:d.absolute}):null},x.get=function(a,b){if(0===arguments.length)return n(g(y),function(a){return y[a].self});var c=l(a,b||x.$current);return c&&c.self?c.self:null},x}function v(a,b,c,d){return a!==b||(c!==b.locals||d.reload)&&a.self.reloadOnSearch!==!1?void 0:!0}var w,x,y={},z={},A="abstract",B={parent:function(a){if(G(a.parent)&&a.parent)return l(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?l(b[1]):w},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=M({},a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(I(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||w).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new O.ParamSet;return L(a.params||{},function(a,c){b[c]||(b[c]=new O.Param(c,null,a,"config"))}),b},params:function(a){return a.parent&&a.parent.params?M(a.parent.params.$$new(),a.ownParams):new O.ParamSet},views:function(a){var b={};return L(G(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?M({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};w=p({name:"",url:"^",views:null,"abstract":!0}),w.navigable=null,this.decorator=s,this.state=t,this.$get=u,u.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function v(){function a(a,b){return{load:function(c,d){var e,f={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return d=M(f,d),d.view&&(e=b.fromConfig(d.view,d.params,d.locals)),e&&d.notify&&a.$broadcast("$viewContentLoading",d),e}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function w(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){c(function(){a[0].scrollIntoView()},0,!1)}}]}function x(a,c,d,e){function f(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function g(a,b){var c=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(j)return{enter:function(a,b,c){var d=j.enter(a,null,b,c);d&&d.then&&d.then(c)},leave:function(a,b){var c=j.leave(a,b);c&&c.then&&c.then(b)}};if(i){var d=i&&i(b,a);return{enter:function(a,b,c){d.enter(a,null,b),c()},leave:function(a,b){d.leave(a),b()}}}return c()}var h=f(),i=h("$animator"),j=h("$animate"),k={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,f,h){return function(c,f,i){function j(){l&&(l.remove(),l=null),n&&(n.$destroy(),n=null),m&&(r.leave(m,function(){l=null}),l=m,m=null)}function k(g){var k,l=z(c,i,f,e),s=l&&a.$current&&a.$current.locals[l];if(g||s!==o){k=c.$new(),o=a.$current.locals[l];var t=h(k,function(a){r.enter(a,f,function(){n&&n.$emit("$viewContentAnimationEnded"),(b.isDefined(q)&&!q||c.$eval(q))&&d(a)}),j()});m=t,n=k,n.$emit("$viewContentLoaded"),n.$eval(p)}}var l,m,n,o,p=i.onload||"",q=i.autoscroll,r=g(i,c);c.$on("$stateChangeSuccess",function(){k(!1)}),c.$on("$viewContentLoading",function(){k(!1)}),k(!0)}}};return k}function y(a,b,c,d){return{restrict:"ECA",priority:-400,compile:function(e){var f=e.html();return function(e,g,h){var i=c.$current,j=z(e,h,g,d),k=i&&i.locals[j];if(k){g.data("$uiView",{name:j,state:k.$$state}),g.html(k.$template?k.$template:f);var l=a(g.contents());if(k.$$controller){k.$scope=e;var m=b(k.$$controller,k);k.$$controllerAs&&(e[k.$$controllerAs]=m),g.data("$ngControllerController",m),g.children().data("$ngControllerController",m)}l(e)}}}}}function z(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function A(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function B(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function C(a,c){var d=["location","inherit","reload"];return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(e,f,g,h){var i=A(g.uiSref,a.current.name),j=null,k=B(f)||a.$current,l=null,m="A"===f.prop("tagName"),n="FORM"===f[0].nodeName,o=n?"action":"href",p=!0,q={relative:k,inherit:!0},r=e.$eval(g.uiSrefOpts)||{};b.forEach(d,function(a){a in r&&(q[a]=r[a])});var s=function(c){if(c&&(j=b.copy(c)),p){l=a.href(i.state,j,q);var d=h[1]||h[0];return d&&d.$$setStateInfo(i.state,j),null===l?(p=!1,!1):void g.$set(o,l)}};i.paramExpr&&(e.$watch(i.paramExpr,function(a){a!==j&&s(a)},!0),j=b.copy(e.$eval(i.paramExpr))),s(),n||f.bind("click",function(b){var d=b.which||b.button;if(!(d>1||b.ctrlKey||b.metaKey||b.shiftKey||f.attr("target"))){var e=c(function(){a.go(i.state,j,q)});b.preventDefault();var g=m&&!l?1:0;b.preventDefault=function(){g--<=0&&c.cancel(e)}}})}}}function D(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs",function(b,d,e){function f(){g()?d.addClass(j):d.removeClass(j)}function g(){return"undefined"!=typeof e.uiSrefActiveEq?h&&a.is(h.name,i):h&&a.includes(h.name,i)}var h,i,j;j=c(e.uiSrefActiveEq||e.uiSrefActive||"",!1)(b),this.$$setStateInfo=function(b,c){h=a.get(b,B(d)),i=c,f()},b.$on("$stateChangeSuccess",f)}]}}function E(a){var b=function(b){return a.is(b)};return b.$stateful=!0,b}function F(a){var b=function(b){return a.includes(b)};return b.$stateful=!0,b}var G=b.isDefined,H=b.isFunction,I=b.isString,J=b.isObject,K=b.isArray,L=b.forEach,M=b.extend,N=b.copy;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),o.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",o),p.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",p);var O;q.prototype.concat=function(a,b){var c={caseInsensitive:O.caseInsensitive(),strict:O.strictMode(),squash:O.defaultSquashPolicy()};return new q(this.sourcePath+a+this.sourceSearch,M(c,b),this)},q.prototype.toString=function(){return this.source},q.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/,"-")}var d=b(a).split(/-(?!\\)/),e=n(d,b);return n(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");for(e=0;j>e;e++){g=h[e];var l=this.params[g],m=d[e+1];for(f=0;f<l.replace;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),k[g]=l.value(m)}for(;i>e;e++)g=h[e],k[g]=this.params[g].value(b[g]);return k},q.prototype.parameters=function(a){return G(a)?this.params[a]||null:this.$$paramNames},q.prototype.validates=function(a){return this.params.$$validates(a)},q.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;i>f;f++){var k=h>f,l=d[f],m=e[l],o=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),o),q=p?m.squash:!1,r=m.type.encode(o);if(k){var s=c[f+1];if(q===!1)null!=r&&(j+=K(r)?n(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var t=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(t)[1]}else I(q)&&(j+=q+s)}else{if(null==r||p&&q!==!1)continue;K(r)||(r=[r]),r=n(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},r.prototype.is=function(){return!0},r.prototype.encode=function(a){return a},r.prototype.decode=function(a){return a},r.prototype.equals=function(a,b){return a==b},r.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},r.prototype.pattern=/.*/,r.prototype.toString=function(){return"{Type:"+this.name+"}"},r.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return K(a)?a:G(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){c=e(c);var d=n(c,a);return b===!0?0===m(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",s),b.module("ui.router.util").run(["$urlMatcherFactory",function(){}]),t.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",t),u.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").value("$stateParams",{}).provider("$state",u),v.$inject=[],b.module("ui.router.state").provider("$view",v),b.module("ui.router.state").provider("$uiViewScroll",w),x.$inject=["$state","$injector","$uiViewScroll","$interpolate"],y.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",x),b.module("ui.router.state").directive("uiView",y),C.$inject=["$state","$timeout"],D.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",C).directive("uiSrefActive",D).directive("uiSrefActiveEq",D),E.$inject=["$state"],F.$inject=["$state"],b.module("ui.router.state").filter("isState",E).filter("includedByState",F)}(window,window.angular);
/*!
 * viewport-units-buggyfill v0.4.1
 * @web: https://github.com/rodneyrehm/viewport-units-buggyfill/
 * @author: Rodney Rehm - http://rodneyrehm.de/en/
 */

(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.viewportUnitsBuggyfill = factory();
  }
}(this, function () {
  'use strict';
  /*global document, window, location, XMLHttpRequest, XDomainRequest*/

  var initialized = false;
  var options;
  var isMobileSafari = /(iPhone|iPod|iPad).+AppleWebKit/i.test(window.navigator.userAgent);
  var viewportUnitExpression = /([+-]?[0-9.]+)(vh|vw|vmin|vmax)/g;
  var forEach = [].forEach;
  var dimensions;
  var declarations;
  var styleNode;
  var isOldInternetExplorer = false;

  // Do not remove the following comment!
  // It is a conditional comment used to
  // identify old Internet Explorer versions

  /*@cc_on

  @if (@_jscript_version <= 10)
    isOldInternetExplorer = true;
  @end

  @*/

  function debounce(func, wait) {
    var timeout;
    return function() {
      var context = this;
      var args = arguments;
      var callback = function() {
        func.apply(context, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(callback, wait);
    };
  }

  // from http://stackoverflow.com/questions/326069/how-to-identify-if-a-webpage-is-being-loaded-inside-an-iframe-or-directly-into-t
  function inIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }

  function initialize(initOptions) {
    if (initialized) {
      return;
    }

    if (initOptions === true) {
      initOptions = {
        force: true
      };
    }

    options = initOptions || {};
    options.isMobileSafari = isMobileSafari;

    if (!options.force && !isMobileSafari && !isOldInternetExplorer && (!options.hacks || !options.hacks.required(options))) {
      // this buggyfill only applies to mobile safari
      return;
    }

    options.hacks && options.hacks.initialize(options);

    initialized = true;
    styleNode = document.createElement('style');
    styleNode.id = 'patched-viewport';
    document.head.appendChild(styleNode);

    // Issue #6: Cross Origin Stylesheets are not accessible through CSSOM,
    // therefore download and inject them as <style> to circumvent SOP.
    importCrossOriginLinks(function() {
      var _refresh = debounce(refresh, options.refreshDebounceWait || 100);
      // doing a full refresh rather than updateStyles because an orientationchange
      // could activate different stylesheets
      window.addEventListener('orientationchange', _refresh, true);
      // orientationchange might have happened while in a different window
      window.addEventListener('pageshow', _refresh, true);

      if (options.force || isOldInternetExplorer || inIframe()) {
        window.addEventListener('resize', _refresh, true);
        options._listeningToResize = true;
      }

      options.hacks && options.hacks.initializeEvents(options, refresh, _refresh);

      refresh();
    });
  }

  function updateStyles() {
    styleNode.textContent = getReplacedViewportUnits();
  }

  function refresh() {
    if (!initialized) {
      return;
    }

    findProperties();

    // iOS Safari will report window.innerWidth and .innerHeight as 0
    // unless a timeout is used here.
    // TODO: figure out WHY innerWidth === 0
    setTimeout(function() {
      updateStyles();
    }, 1);
  }

  function findProperties() {
    declarations = [];
    forEach.call(document.styleSheets, function(sheet) {
      if (sheet.ownerNode.id === 'patched-viewport' || !sheet.cssRules) {
        // skip entire sheet because no rules ara present or it's the target-element of the buggyfill
        return;
      }

      if (sheet.media && sheet.media.mediaText && window.matchMedia && !window.matchMedia(sheet.media.mediaText).matches) {
        // skip entire sheet because media attribute doesn't match
        return;
      }

      forEach.call(sheet.cssRules, findDeclarations);
    });

    return declarations;
  }

  function findDeclarations(rule) {
    if (rule.type === 7) {
      var value = rule.cssText;
      viewportUnitExpression.lastIndex = 0;
      if (viewportUnitExpression.test(value)) {
        // KeyframesRule does not have a CSS-PropertyName
        declarations.push([rule, null, value]);
        options.hacks && options.hacks.findDeclarations(declarations, rule, null, value);
      }

      return;
    }

    if (!rule.style) {
      if (!rule.cssRules) {
        return;
      }

      forEach.call(rule.cssRules, function(_rule) {
        findDeclarations(_rule);
      });

      return;
    }

    forEach.call(rule.style, function(name) {
      var value = rule.style.getPropertyValue(name);
      viewportUnitExpression.lastIndex = 0;
      if (viewportUnitExpression.test(value)) {
        declarations.push([rule, name, value]);
        options.hacks && options.hacks.findDeclarations(declarations, rule, name, value);
      }
    });
  }

  function getReplacedViewportUnits() {
    dimensions = getViewport();

    var css = [];
    var buffer = [];
    var open;
    var close;

    declarations.forEach(function(item) {
      var _item = overwriteDeclaration.apply(null, item);
      var _open = _item.selector.length ? (_item.selector.join(' {\n') + ' {\n') : '';
      var _close = new Array(_item.selector.length + 1).join('\n}');

      if (!_open || _open !== open) {
        if (buffer.length) {
          css.push(open + buffer.join('\n') + close);
          buffer.length = 0;
        }

        if (_open) {
          open = _open;
          close = _close;
          buffer.push(_item.content);
        } else {
          css.push(_item.content);
          open = null;
          close = null;
        }

        return;
      }

      if (_open && !open) {
        open = _open;
        close = _close;
      }

      buffer.push(_item.content);
    });

    if (buffer.length) {
      css.push(open + buffer.join('\n') + close);
    }

    return css.join('\n\n');
  }

  function overwriteDeclaration(rule, name, value) {
    var _value = value.replace(viewportUnitExpression, replaceValues);
    var  _selectors = [];

    if (options.hacks) {
      _value = options.hacks.overwriteDeclaration(rule, name, _value);
    }

    if (name) {
      // skipping KeyframesRule
      _selectors.push(rule.selectorText);
      _value = name + ': ' + _value + ';';
    }

    var _rule = rule.parentRule;
    while (_rule) {
      _selectors.unshift('@media ' + _rule.media.mediaText);
      _rule = _rule.parentRule;
    }

    return {
      selector: _selectors,
      content: _value
    };
  }

  function replaceValues(match, number, unit) {
    var _base = dimensions[unit];
    var _number = parseFloat(number) / 100;
    return (_number * _base) + 'px';
  }

  function getViewport() {
    var vh = window.innerHeight;
    var vw = window.innerWidth;

    return {
      vh: vh,
      vw: vw,
      vmax: Math.max(vw, vh),
      vmin: Math.min(vw, vh)
    };
  }

  function importCrossOriginLinks(next) {
    var _waiting = 0;
    var decrease = function() {
      _waiting--;
      if (!_waiting) {
        next();
      }
    };

    forEach.call(document.styleSheets, function(sheet) {
      if (!sheet.href || origin(sheet.href) === origin(location.href)) {
        // skip <style> and <link> from same origin
        return;
      }

      _waiting++;
      convertLinkToStyle(sheet.ownerNode, decrease);
    });

    if (!_waiting) {
      next();
    }
  }

  function origin(url) {
    return url.slice(0, url.indexOf('/', url.indexOf('://') + 3));
  }

  function convertLinkToStyle(link, next) {
    getCors(link.href, function() {
      var style = document.createElement('style');
      style.media = link.media;
      style.setAttribute('data-href', link.href);
      style.textContent = this.responseText;
      link.parentNode.replaceChild(style, link);
      next();
    }, next);
  }

  function getCors(url, success, error) {
    var xhr = new XMLHttpRequest();
    if ('withCredentials' in xhr) {
      // XHR for Chrome/Firefox/Opera/Safari.
      xhr.open('GET', url, true);
    } else if (typeof XDomainRequest !== 'undefined') {
      // XDomainRequest for IE.
      xhr = new XDomainRequest();
      xhr.open('GET', url);
    } else {
      throw new Error('cross-domain XHR not supported');
    }

    xhr.onload = success;
    xhr.onerror = error;
    xhr.send();
    return xhr;
  }

  return {
    version: '0.4.1',
    findProperties: findProperties,
    getCss: getReplacedViewportUnits,
    init: initialize,
    refresh: refresh
  };

}));

(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])
    .config(config)
    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }

})();

(function() {
  'use strict';

  angular.module('foundation.accordion', [])
    .controller('ZfAccordionController', zfAccordionController)
    .directive('zfAccordion', zfAccordion)
    .directive('zfAccordionItem', zfAccordionItem)
  ;


  zfAccordionController.$inject = ['$scope'];

  function zfAccordionController($scope) {
    var controller = this;
    var sections = controller.sections = $scope.sections = [];
    var multiOpen = controller.multiOpen = $scope.multiOpen = $scope.multiOpen || false;
    var collapsible = controller.collapsible = $scope.collapsible = $scope.multiOpen || $scope.collapsible || true; //multi open infers a collapsible true
    var autoOpen = controller.autoOpen = $scope.autoOpen = $scope.autoOpen || true; //auto open opens first tab on render

    controller.select = function(selectSection) {
      sections.forEach(function(section) {
        //if multi open is allowed, toggle a tab
        if(controller.multiOpen) {
          if(section.scope === selectSection) {
            section.scope.active = !section.scope.active;
          }
        } else {
          //non  multi open will close all tabs and open one
          if(section.scope === selectSection) {
            //if collapsible is allowed, a tab will toggle
            section.scope.active = collapsible ? !section.scope.active : true;
          } else {
            section.scope.active = false;
          }
        }

      });
    };

    controller.addSection = function addsection(sectionScope) {
      sections.push({ scope: sectionScope });

      if(sections.length === 1 && autoOpen === true) {
        sections[0].active = true;
        sections[0].scope.active = true;
      }
    };

    controller.closeAll = function() {
      sections.forEach(function(section) {
        section.scope.active = false;
      });
    };
  }

  function zfAccordion() {
    var directive = {
      restrict: 'EA',
      transclude: 'true',
      replace: true,
      templateUrl: 'components/accordion/accordion.html',
      controller: 'ZfAccordionController',
      scope: {
        multiOpen: '@?',
        collapsible: '@?',
        autoOpen: '@?'
      },
      link: link
    };

    return directive;

    function link(scope, element, attrs, controller) {
      scope.multiOpen = controller.multiOpen = scope.multiOpen === "true" ? true : false;
      scope.collapsible = controller.collapsible = scope.collapsible === "true" ? true : false;
      scope.autoOpen = controller.autoOpen = scope.autoOpen === "true" ? true : false;
    }
  }

  //accordion item
  function zfAccordionItem() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'components/accordion/accordion-item.html',
        transclude: true,
        scope: {
          title: '@'
        },
        require: '^zfAccordion',
        replace: true,
        controller: function() {},
        link: link
    };

    return directive;

    function link(scope, element, attrs, controller, transclude) {
      scope.active = false;
      controller.addSection(scope);

      scope.activate = function() {
        controller.select(scope);
      };

    }
  }

})();

(function() {
  'use strict';

  angular.module('foundation.actionsheet', ['foundation.core'])
    .controller('ZfActionSheetController', zfActionSheetController)
    .directive('zfActionSheet', zfActionSheet)
    .directive('zfAsContent', zfAsContent)
    .directive('zfAsButton', zfAsButton)
  ;

  zfActionSheetController.$inject = ['$scope', 'FoundationApi'];

  function zfActionSheetController($scope, foundationApi) {
    var controller = this;
    var content = controller.content = $scope.content;
    var container = controller.container = $scope.container;

    controller.registerContent = function(scope) {
      content = scope;
      content.active = false;
    };

    controller.registerContainer = function(scope) {
      container = scope;
      container.active = false;
    };

    controller.toggle = function() {
      content.toggle();
      container.toggle();

      content.$apply();
      container.$apply();
    };

    controller.hide = function() {
      content.hide();
      container.hide();

      content.$apply();
      container.$apply();
    };
  }

  zfActionSheet.$inject = ['FoundationApi'];

  function zfActionSheet(foundationApi) {
    var directive = {
      restrict: 'EA',
      transclude: true,
      replace: true,
      templateUrl: 'components/actionsheet/actionsheet.html',
      controller: 'ZfActionSheetController',
      compile: compile
    };

    return directive;

    function compile() {

      return {
        pre: preLink,
        post: postLink
      };

      function preLink(scope, iElement, iAttrs) {
        iAttrs.$set('zf-closable', 'actionsheet');
      }

      function postLink(scope, element, attrs, controller) {
        var id = attrs.id || foundationApi.generateUuid();
        attrs.$set('id', id);

        scope.active = false;

        foundationApi.subscribe(id, function(msg) {
          if (msg === 'toggle') {
            controller.toggle();
          }

          if (msg === 'hide' || msg === 'close') {
            controller.hide();
          }

        });

        controller.registerContainer(scope);

        scope.toggle = function() {
          scope.active = !scope.active;
          return;
        };

        scope.hide = function() {
          scope.active = false;
          return;
        };
      }
    }
  }

  zfAsContent.$inject = ['FoundationApi'];

  function zfAsContent(foundationApi) {
    var directive = {
      restrict: 'EA',
      transclude: true,
      replace: true,
      templateUrl: 'components/actionsheet/actionsheet-content.html',
      require: '^zfActionSheet',
      scope: {
        position: '@?'
      },
      link: link
    };

    return directive;

    function link(scope, element, attrs, controller) {
      scope.active = false;
      scope.position = scope.position || 'bottom';
      controller.registerContent(scope);

      scope.toggle = function() {
        scope.active = !scope.active;
        return;
      };

      scope.hide = function() {
        scope.active = false;
        return;
      };
    }
  }

  zfAsButton.$inject = ['FoundationApi'];

  function zfAsButton(foundationApi) {
    var directive = {
      restrict: 'EA',
      transclude: true,
      replace: true,
      templateUrl: 'components/actionsheet/actionsheet-button.html',
      require: '^zfActionSheet',
      scope: {
        title: '@?'
      },
      link: link
    }

    return directive;

    function link(scope, element, attrs, controller) {

      element.on('click', function(e) {
        controller.toggle();
        e.preventDefault();
      });

    }
  }

})();

(function() {
  'use strict';

  angular.module('foundation.common', ['foundation.core'])
    .directive('zfClose', zfClose)
    .directive('zfOpen', zfOpen)
    .directive('zfToggle', zfToggle)
    .directive('zfEscClose', zfEscClose)
    .directive('zfSwipeClose', zfSwipeClose)
    .directive('zfHardToggle', zfHardToggle)
  ;

  zfClose.$inject = ['FoundationApi'];

  function zfClose(foundationApi) {
    var directive = {
      restrict: 'A',
      link: link
    };

    return directive;

    function link(scope, element, attrs) {
      var parentElement= false;
      var tempElement = element.parent();
      //find parent modal
      while(parentElement === false) {
        if(tempElement[0].nodeName == 'BODY') {
          parentElement = '';
        }

        if(typeof tempElement.attr('zf-closable') !== 'undefined' && tempElement.attr('zf-closable') !== false) {
          parentElement = tempElement;
        }

        tempElement = tempElement.parent();
      }

      element.on('click', function(e) {
        foundationApi.publish(parentElement.attr('id'), 'close');
        e.preventDefault();
      });
    }
  }

  zfOpen.$inject = ['FoundationApi'];

  function zfOpen(foundationApi) {
    var directive = {
      restrict: 'A',
      link: link
    };

    return directive;

    function link(scope, element, attrs) {
      element.on('click', function(e) {
        foundationApi.publish(attrs.zfOpen, 'open');
        e.preventDefault();
      });
    }
  }

  zfToggle.$inject = ['FoundationApi'];

  function zfToggle(foundationApi) {
    var directive = {
      restrict: 'A',
      link: link
    }

    return directive;

    function link(scope, element, attrs) {
      element.on('click', function(e) {
        foundationApi.publish(attrs.zfToggle, 'toggle');
        e.preventDefault();
      });
    }
  }

  zfEscClose.$inject = ['FoundationApi'];

  function zfEscClose(foundationApi) {
    var directive = {
      restrict: 'A',
      link: link
    };

    return directive;

    function link(scope, element, attrs) {
      element.on('keyup', function(e) {
        if (e.keyCode === 27) {
          foundationApi.closeActiveElements();
        }
        e.preventDefault();
      });
    }
  }

  zfSwipeClose.$inject = ['FoundationApi'];

  function zfSwipeClose(foundationApi) {
    var directive = {
      restrict: 'A',
      link: link
    };
    return directive;

    function link($scope, element, attrs) {
      var swipeDirection;
      var hammerElem;
      if (Hammer) {
        hammerElem = new Hammer(element[0]);
        // set the options for swipe (to make them a bit more forgiving in detection)
        hammerElem.get('swipe').set({
          direction: Hammer.DIRECTION_ALL,
          threshold: 5, // this is how far the swipe has to travel
          velocity: 0.5 // and this is how fast the swipe must travel
        });
      }
      // detect what direction the directive is pointing
      switch (attrs.zfSwipeClose) {
        case 'right':
          swipeDirection = 'swiperight';
          break;
        case 'left':
          swipeDirection = 'swipeleft';
          break;
        case 'up':
          swipeDirection = 'swipeup';
          break;
        case 'down':
          swipeDirection = 'swipedown';
          break;
        default:
          swipeDirection = 'swipe';
      }
      hammerElem.on(swipeDirection, function() {
        foundationApi.publish(attrs.id, 'close');
      });
    }
  }

  zfHardToggle.$inject = ['FoundationApi'];

  function zfHardToggle(foundationApi) {
    var directive = {
      restrict: 'A',
      link: link
    };

    return directive;

    function link(scope, element, attrs) {
      element.on('click', function(e) {
        var animatedElements = document.querySelectorAll('.ng-enter-active');
        // if there are any currently animated elements on the page
        // SIDENOTE: there is probably a more elegant way of doing this
        if (animatedElements.length !== 0) {
          e.preventDefault(); // do nothing
        }
        // else do the toggle thang
        else {
          foundationApi.closeActiveElements({exclude: attrs.zfHardToggle});
          foundationApi.publish(attrs.zfHardToggle, 'toggle');
          e.preventDefault();
        }
      });
    }
  }

})();

(function() {
  'use strict';

  angular.module('foundation.iconic', [])
    .service('Iconic', iconic)
    .directive('zfIconic', zfIconic)
  ;

  //iconic wrapper
  function iconic() {
    var iconicObject = IconicJS();

    var service = {};

    service.getAccess = getAccess;

    return service;

    function getAccess() {
      return iconicObject;
    }
  }

  zfIconic.$inject = ['Iconic']

  function zfIconic(iconic) {
    var directive = {
      restrict: 'A',
      scope: {
        dynSrc: '=?'
      },
      link: link
    };

    return directive;

    function link(scope, element, attrs, controller) {
      var ico = iconic.getAccess();
      if(scope.dynSrc) {
         attrs.$set('data-src', scope.dynSrc);
      } else {
        // To support expressions on data-src
        attrs.$set('data-src', attrs.src);
      }
      ico.inject(element[0]);
    }
  }

})();

(function() {
  'use strict';

  angular.module('foundation.interchange', ['foundation.core'])
    .directive('zfInterchange', zfInterchange)
  ;

  zfInterchange.$inject = ['FoundationApi', '$compile', '$http', '$templateCache', '$animate'];

  function zfInterchange(foundationApi, $compile, $http, $templateCache) {

    var directive = {
      restrict: 'EA',
      transclude: 'element',
      scope: {
        position: '@'
      },
      replace: true,
      template: '<div></div>',
      link: link
    };

    return directive;

    function link(scope, element, attrs, ctrl, transclude) {
      var childScope, current, scenarios, innerTemplates;

      var namedQueries = {
        'default' : 'only screen',
        landscape : 'only screen and (orientation: landscape)',
        portrait : 'only screen and (orientation: portrait)',
        retina : 'only screen and (-webkit-min-device-pixel-ratio: 2),' +
          'only screen and (min--moz-device-pixel-ratio: 2),' +
          'only screen and (-o-min-device-pixel-ratio: 2/1),' +
          'only screen and (min-device-pixel-ratio: 2),' +
          'only screen and (min-resolution: 192dpi),' +
          'only screen and (min-resolution: 2dppx)'
      };

      var globalQueries = foundationApi.getSettings().mediaQueries;
      namedQueries = angular.extend(namedQueries, globalQueries);

      //setup
      foundationApi.subscribe('resize', function(msg) {
        transclude(function(clone, newScope) {
          if(!scenarios || !innerTemplates) {
            collectInformation(clone);
          }

          var ruleMatches = matched();
          var scenario = ruleMatches.length === 0 ? null : scenarios[ruleMatches[0].ind];

          //this could use some love
          if(scenario && checkScenario(scenario)) {
            var compiled;

            if(childScope) {
              childScope.$destroy();
              childScope = null;
            }

            if(typeof scenario.templ !== 'undefined') {
              childScope = newScope;

              //temp container
              var tmp = document.createElement('div');
              tmp.appendChild(innerTemplates[scenario.templ][0]);

              element.html(tmp.innerHTML);
              $compile(element.contents())(childScope);
              current = scenario;
            } else {
              var loader = templateLoader(scenario.src);
              loader.success(function(html) {
                childScope = newScope;
                element.html(html);
              }).then(function(){
                $compile(element.contents())(childScope);
                current = scenario;
              });
            }
          }
        });

      });

      //init
      foundationApi.publish('resize', 'initial resize');

      function templateLoader(templateUrl) {
        return $http.get(templateUrl, {cache: $templateCache});
      }

      function matched() {
        var count   = scenarios.length;
        var matches = [];

        if (count > 0) {
          while (count--) {
            var mq;
            var rule = scenarios[count].media;

            if (namedQueries[rule]) {
              mq = matchMedia(namedQueries[rule]);
            } else {
              mq = matchMedia(rule);
            }

            if (mq.matches) {
              matches.push({ ind: count});
            }
          }
        }

        return matches;
      }

      function collectInformation(parentElement) {
        scenarios      = [];
        innerTemplates = [];

        var elements = parentElement.children();
        var i        = 0;

        angular.forEach(elements, function(el) {
          var elem = angular.element(el);


          //if no source or no html, capture element itself
          if (!elem.attr('src') || !elem.attr('src').match(/.html$/)) {
            innerTemplates[i] = elem;
            scenarios[i] = { media: elem.attr('media'), templ: i };
          } else {
            scenarios[i] = { media: elem.attr('media'), src: elem.attr('src') };
          }

          i++;
        });
      }

      function checkScenario(scenario) {
        return !current || current !== scenario;
      }
    }
  }

})();

(function() {
  'use strict';

  angular.module('foundation.modal', ['foundation.core'])
    .directive('zfModal', modalDirective);

  modalDirective.$inject = ['FoundationApi'];

  function modalDirective(foundationApi) {

    var directive = {
      restrict: 'EA',
      templateUrl: 'components/modal/modal.html',
      transclude: true,
      scope: true,
      replace: true,
      compile: compile
    };

    return directive;

    function compile(tElement, tAttrs, transclude) {
      var type = 'modal';

      return {
        pre: preLink,
        post: postLink
      }

      function preLink(scope, iElement, iAttrs, controller) {
          iAttrs.$set('zf-closable', type);
      }

      function postLink(scope, element, attrs) {
        var dialog = angular.element(element.children()[0]);

        scope.active = false;
        scope.overlay = attrs.overlay === 'true' || attrs.overlayClose === 'true' ? true : false;
        scope.overlayClose = attrs.overlayClose === 'true' ? true : false;

        var animationIn = attrs.animationIn || 'fadeIn';
        var animationOut = attrs.animationOut || 'fadeOut';
        var overlayIn = 'fadeIn';
        var overlayOut = 'fadeOut';

        //setup
        foundationApi.subscribe(attrs.id, function(msg) {
          if(msg === 'show' || msg === 'open') {
            scope.show();
          } else if (msg === 'close' || msg === 'hide') {
            scope.hide();
          } else if (msg === 'toggle') {
            scope.toggle();
          }

          scope.$apply();

          return;
        });

        scope.hideOverlay = function() {
          if(scope.overlayClose) {
            scope.hide();
          }
        };

        scope.hide = function() {
          scope.active = false;
          animate();
          return;
        };

        scope.show = function() {
          scope.active = true;
          animate();
          return;
        };

        scope.toggle = function() {
          scope.active = !scope.active;
          animate();
          return;
        };

        function animate() {
          //animate both overlay and dialog
          if(!scope.overlay) {
            element.css('background', 'transparent');
          }

          foundationApi.animate(element, scope.active, overlayIn, overlayOut);
          foundationApi.animate(dialog, scope.active, animationIn, animationOut);
        }
      }
    }
  }

})();

(function() {
  'use strict';

  angular.module('foundation.notification', ['foundation.core'])
    .controller('ZfNotificationController', ZfNotificationController)
    .directive('zfNotificationSet', zfNotificationSet)
    .directive('zfNotification', zfNotification)
    .directive('zfNotificationStatic', zfNotificationStatic)
    .directive('zfNotify', zfNotify)
  ;

  ZfNotificationController.$inject = ['$scope', 'FoundationApi'];

  function ZfNotificationController($scope, foundationApi) {
    var controller    = this;
    controller.notifications = $scope.notifications = [];

    controller.addNotification = function(info) {
      var id  = foundationApi.generateUuid();
      info.id = id;
      $scope.notifications.push(info);
    };

    controller.removeNotification = function(id) {
      $scope.notifications.forEach(function(notification) {
        if(notification.id === id) {
          var ind = $scope.notifications.indexOf(notification);
          $scope.notifications.splice(ind, 1);
        }
      });
    };

    controller.clearAll = function() {
      while($scope.notifications.length > 0) {
        $scope.notifications.pop();
      }
    };
  }

  zfNotificationSet.$inject = ['FoundationApi'];

  function zfNotificationSet(foundationApi) {
    var directive = {
      restrict: 'EA',
      templateUrl: 'components/notification/notification-set.html',
      controller: 'ZfNotificationController',
      scope: true,
      link: link
    };

    return directive;

    function link(scope, element, attrs, controller) {
      foundationApi.subscribe(attrs.id, function(msg) {
        if(msg === 'clearall') {
          controller.clearAll();
        } else {
          controller.addNotification(msg);
          scope.$apply();
        }
      });
    }
  }

  zfNotification.$inject = ['FoundationApi'];

  function zfNotification(foundationApi) {
    var directive = {
      restrict: 'EA',
      templateUrl: 'components/notification/notification.html',
      replace: true,
      transclude: true,
      require: '^zfNotificationSet',
      controller: function() { },
      scope: {
        title: '=?',
        content: '=?',
        image: '=?',
        notifId: '=',
        position: '=?',
        color: '=?'
      },
      compile: compile
    };

    return directive;

    function compile() {

      return {
        pre: preLink,
        post: postLink
      };

      function preLink(scope, iElement, iAttrs) {
        iAttrs.$set('zf-closable', 'notification');
      }

      function postLink(scope, element, attrs, controller) {
        scope.active = false;
        scope.position = scope.position ? scope.position.split(' ').join('-') : 'top-right';
        var animationIn = attrs.animationIn || 'fadeIn';
        var animationOut = attrs.animationOut || 'fadeOut';
        //due to dynamic insertion of DOM, we need to wait for it to show up and get working!
        setTimeout(function() {
          scope.active = true;
          foundationApi.animate(element, scope.active, animationIn, animationOut);
        }, 50);

        scope.remove = function() {
          scope.active = false;
          foundationApi.animate(element, scope.active, animationIn, animationOut);
          setTimeout(function() {
            controller.removeNotification(scope.notifId);
          }, 50);
        };
      }
    }
  }

  zfNotificationStatic.$inject = ['FoundationApi'];

  function zfNotificationStatic(foundationApi) {
    var directive = {
      restrict: 'EA',
      templateUrl: 'components/notification/notification.html',
      replace: true,
      transclude: true,
      scope: {
        title: '@?',
        content: '@?',
        image: '@?',
        position: '@?',
        color: '@?'
      },
      compile: compile
    };

    return directive;

    function compile() {
      var type = 'notification';

      return {
        pre: preLink,
        post: postLink
      };

      function preLink(scope, iElement, iAttrs, controller) {
        iAttrs.$set('zf-closable', type);
      }

      function postLink(scope, element, attrs, controller) {
        scope.position = scope.position ? scope.position.split(' ').join('-') : 'top-right';
        var animationIn = attrs.animationIn || 'fadeIn';
        var animationOut = attrs.animationOut || 'fadeOut';


        foundationApi.subscribe(attrs.id, function(msg) {
          if(msg === 'show' || msg === 'open') {
            scope.show();
          } else if (msg === 'close' || msg === 'hide') {
            scope.hide();
          } else if (msg === 'toggle') {
            scope.toggle();
          }

          scope.$apply();

          return;
        });

        scope.hide = function() {
          scope.active = false;
          foundationApi.animate(element, scope.active, animationIn, animationOut);
          return;
        };

        scope.remove = function() {
          scope.hide();
          foundationApi.animate(element, scope.active, animationIn, animationOut);
        };

        scope.show = function() {
          scope.active = true;
          foundationApi.animate(element, scope.active, animationIn, animationOut);
          return;
        };

        scope.toggle = function() {
          scope.active = !scope.active;
          foundationApi.animate(element, scope.active, animationIn, animationOut);
          return;
        };
      }
    }
  }

  zfNotify.$inject = ['FoundationApi'];

  function zfNotify(foundationApi) {
    var directive = {
      restrict: 'A',
      scope: {
        title: '@?',
        content: '@?',
        position: '@?',
        color: '@?',
        image: '@?'
      },
      link: link
    };

    return directive;

    function link(scope, element, attrs, controller) {
      element.on('click', function(e) {
        foundationApi.publish(attrs.zfNotify, {
          title: scope.title,
          content: scope.content,
          position: scope.position,
          color: scope.color,
          image: scope.image
        });
        e.preventDefault();
      });
    }
  }

})();

(function() {
  'use strict';

  angular.module('foundation.offcanvas', ['foundation.core'])
    .directive('zfOffcanvas', zfOffcanvas)
  ;

  zfOffcanvas.$inject = ['FoundationApi'];

  function zfOffcanvas(foundationApi) {
    var directive = {
      restrict: 'EA',
      templateUrl: 'components/offcanvas/offcanvas.html',
      transclude: true,
      scope: {
        position: '@'
      },
      replace: true,
      compile: compile
    };

    return directive;

    function compile(tElement, tAttrs, transclude) {
      var type = 'offcanvas';

      return {
        pre: preLink,
        post: postLink
      }

      function preLink(scope, iElement, iAttrs, controller) {
        iAttrs.$set('zf-closable', type);
        document.body.classList.add('has-off-canvas');
      }

      function postLink(scope, element, attrs) {
        scope.position = scope.position || 'left';

        scope.active = false;
        //setup
        foundationApi.subscribe(attrs.id, function(msg) {
          if(msg === 'show' || msg === 'open') {
            scope.show();
          } else if (msg === 'close' || msg === 'hide') {
            scope.hide();
          } else if (msg === 'toggle') {
            scope.toggle();
          }

          scope.$apply();

          return;
        });

        scope.hide = function() {
          scope.active = false;
          return;
        };

        scope.show = function() {
          scope.active = true;
          return;
        };

        scope.toggle = function() {
          scope.active = !scope.active;
          return;
        };
      }
    }
  }

})();

(function() {
  'use strict';

  angular.module('foundation.panel', ['foundation.core'])
    .directive('zfPanel', zfPanel)
  ;

  zfPanel.$inject = ['FoundationApi'];

  function zfPanel(foundationApi) {
    var directive = {
      restrict: 'EA',
      templateUrl: 'components/panel/panel.html',
      transclude: true,
      scope: {
        position: '@?'
      },
      replace: true,
      compile: compile
    };

    return directive;

    function compile(tElement, tAttrs, transclude) {
      var type = 'panel';

      return {
        pre: preLink,
        post: postLink
      };

      function preLink(scope, iElement, iAttrs, controller) {
        iAttrs.$set('zf-closable', type);
        scope.position = scope.position || 'left';
        scope.positionClass = 'panel-' + scope.position;
      }

      function postLink(scope, element, attrs) {
        scope.active = false;
        var animationIn, animationOut;
        var globalQueries = foundationApi.getSettings().mediaQueries;

        //urgh, there must be a better way
        if(scope.position === 'left') {
          animationIn  = attrs.animationIn || 'slideInRight';
          animationOut = attrs.animationOut || 'slideOutLeft';
        } else if (scope.position === 'right') {
          animationIn  = attrs.animationIn || 'slideInLeft';
          animationOut = attrs.animationOut || 'slideOutRight';
        } else if (scope.position === 'top') {
          animationIn  = attrs.animationIn || 'slideInDown';
          animationOut = attrs.animationOut || 'slideOutUp';
        } else if (scope.position === 'bottom') {
          animationIn  = attrs.animationIn || 'slideInUp';
          animationOut = attrs.animationOut || 'slideOutBottom';
        }


        //setup
        foundationApi.subscribe(attrs.id, function(msg) {
          if(msg == 'show' || msg == 'open') {
            scope.show();
          } else if (msg == 'close' || msg == 'hide') {
            scope.hide();
          } else if (msg == 'toggle') {
            scope.toggle();
          }

          foundationApi.animate(element, scope.active, animationIn, animationOut);

          scope.$apply();

          return;
        });

        scope.hide = function() {
          scope.active = false;
          return;
        };

        scope.show = function() {
          scope.active = true;
          return;
        };

        scope.toggle = function() {
          scope.active = !scope.active;
          return;
        };

        element.on('click', function(e) {
          //check sizing
          var srcEl = e.srcElement;

          if(!matchMedia(globalQueries.medium).matches && srcEl.href && srcEl.href.length > 0) {
            //hide element if it can't match at least medium
            scope.hide();
            foundationApi.animate(element, scope.active, animationIn, animationOut);
          }
        });
      }
    }
  }

})();

(function() {
  'use strict';

  angular.module('foundation.popup', ['foundation.core'])
    .directive('zfPopup', zfPopup)
    .directive('zfPopupToggle', zfPopupToggle)
  ;

  zfPopup.$inject = ['FoundationApi'];

  function zfPopup(foundationApi) {
    var directive = {
      restrict: 'EA',
      transclude: true,
      replace: true,
      templateUrl: 'components/popup/popup.html',
      scope: {
        pinTo: '@?',
        pinAt: '@?',
      },
      compile: compile
    };

    return directive;

    function compile() {
      return {
        pre: preLink,
        post: postLink
      };

      function preLink(scope, iElement, iAttrs) {
        iAttrs.$set('zf-closable', 'popup');
      }

      function postLink(scope, element, attrs) {
        scope.active = false;
        scope.target = scope.target || false;

        var attachment = scope.pinTo || 'top center';
        var tetherInit = false;
        var tether     = {};

        //setup
        foundationApi.subscribe(attrs.id, function(msg) {
          if(msg[0] === 'show' || msg[0] === 'open') {
            scope.show(msg[1]);
          } else if (msg[0] === 'close' || msg[0] === 'hide') {
            scope.hide();
          } else if (msg[0] === 'toggle') {
            scope.toggle(msg[1]);
          }

          scope.$apply();

          return;
        });


        scope.hide = function() {
          scope.active = false;
          tetherElement(newTarget);
          tether.disable();
          return;
        };

        scope.show = function(newTarget) {
          scope.active = true;
          tetherElement(newTarget);
          tether.enable();

          return;
        };

        scope.toggle = function(newTarget) {
          scope.active = !scope.active;
          tetherElement(newTarget);

          if(scope.active) {
            tether.enable();
          } else  {
            tether.disable();
          }

          return;
        };

        function tetherElement(target) {
          if(tetherInit) {
            return;
          }

          scope.target = scope.target ? document.getElementById(scope.target) : document.getElementById(target);

          tether = new Tether({
            element: element[0],
            target: scope.target,
            attachment: attachment,
            enable: false
          });

          tetherInit = true;
        }

      }
    }
  }

  zfPopupToggle.$inject = ['FoundationApi'];

  function zfPopupToggle(foundationApi) {
    var directive = {
      restrict: 'A',
      link: link
    };

    return directive;

    function link(scope, element, attrs) {
      var target = attrs.zfPopupToggle;
      var id = attrs.id || foundationApi.generateUuid();
      attrs.$set('id', id);

      element.on('click', function(e) {
        foundationApi.publish(target, ['toggle', id]);
        e.preventDefault();
      });
    }
  }

})();

(function() {
  'use strict';

  angular.module('foundation.tabs', ['foundation.core'])
    .controller('ZfTabsController', ZfTabsController)
    .directive('zfTabs', zfTabs)
    .directive('zfTabContent', zfTabContent)
    .directive('zfTab', zfTab)
    .directive('zfTabIndividual', zfTabIndividual)
    .directive('zfTabHref', zfTabHref)
    .directive('zfTabCustom', zfTabCustom)
    .directive('zfTabContentCustom', zfTabContentCustom)
  ;

  ZfTabsController.$inject = ['$scope', 'FoundationApi'];

  function ZfTabsController($scope, foundationApi) {
    var controller = this;
    var tabs       = controller.tabs = $scope.tabs = [];
    var id         = '';

    controller.select = function(selectTab) {
      tabs.forEach(function(tab) {
        tab.active = false;
        tab.scope.active = false;

        if(tab.scope === selectTab) {
          foundationApi.publish(id, ['activate', tab]);

          tab.active = true;
          tab.scope.active = true;
        }
      });

    };

    controller.addTab = function addTab(tabScope) {
      tabs.push({ scope: tabScope, active: false, parentContent: controller.id });

      if(tabs.length === 1) {
        tabs[0].active = true;
        tabScope.active = true;
      }
    };

    controller.getId = function() {
      return id;
    };

    controller.setId = function(newId) {
      id = newId;
    };
  }

  zfTabs.$inject = ['FoundationApi'];

  function zfTabs(foundationApi) {
    var directive = {
      restrict: 'EA',
      transclude: 'true',
      replace: true,
      templateUrl: 'components/tabs/tabs.html',
      controller: 'ZfTabsController',
      scope: {
        displaced: '@?'
      },
      link: link
    };

    return directive;

    function link(scope, element, attrs, controller) {
      scope.id = attrs.id || foundationApi.generateUuid();
      scope.showTabContent = scope.displaced !== 'true';
      attrs.$set('id', scope.id);
      controller.setId(scope.id);

      //update tabs in case tab-content doesn't have them
      var updateTabs = function() {
        foundationApi.publish(scope.id + '-tabs', scope.tabs);
      };

      foundationApi.subscribe(scope.id + '-get-tabs', function() {
        updateTabs();
      });
    }
  }

  zfTabContent.$inject = ['FoundationApi'];

  function zfTabContent(foundationApi) {
    var directive = {
      restrict: 'A',
      transclude: 'true',
      replace: true,
      scope: {
        tabs: '=?',
        target: '@'
      },
      templateUrl: 'components/tabs/tab-content.html',
      link: link
    };

    return directive;

    function link(scope, element, attrs, ctrl) {
      scope.tabs = scope.tabs || [];
      var id = scope.target;

      foundationApi.subscribe(id, function(msg) {
        if(msg[0] === 'activate') {
          var tabId = msg[1];
          scope.tabs.forEach(function (tab) {
            tab.scope.active = false;
            tab.active = false;

            if(tab.scope.id === id) {
              tab.scope.active = true;
              tab.active = true;
            }
          });
        }
      });

      //if tabs empty, request tabs
      if(scope.tabs.length === 0) {
        foundationApi.subscribe(id + '-tabs', function(tabs) {
          scope.tabs = tabs;
        });

        foundationApi.publish(id + '-get-tabs', '');
      }
    }
  }

  zfTab.$inject = ['FoundationApi'];

  function zfTab(foundationApi) {
    var directive = {
      restrict: 'EA',
      templateUrl: 'components/tabs/tab.html',
      transclude: true,
      scope: {
        title: '@'
      },
      require: '^zfTabs',
      replace: true,
      link: link
    };

    return directive;

    function link(scope, element, attrs, controller, transclude) {
      scope.id = attrs.id || foundationApi.generateUuid();
      scope.active = false;
      scope.transcludeFn = transclude;
      controller.addTab(scope);

      foundationApi.subscribe(scope.id, function(msg) {
        if(msg === 'show' || msg === 'open' || msg === 'activate') {
          scope.makeActive();
        }
      });

      scope.makeActive = function() {
        controller.select(scope);
      };
    }
  }

  zfTabIndividual.$inject = ['FoundationApi'];

  function zfTabIndividual(foundationApi) {
    var directive = {
      restrict: 'EA',
      transclude: 'true',
      link: link
    };

    return directive;

    function link(scope, element, attrs, ctrl, transclude) {
      var tab = scope.$eval(attrs.tab);
      var id = tab.scope.id;

      tab.scope.transcludeFn(tab.scope, function(tabContent) {
        element.append(tabContent);
      });

      foundationApi.subscribe(tab.scope.id, function(msg) {
        foundationApi.publish(tab.parentContent, ['activate', tab.scope.id]);
        scope.$apply();
      });

    }
  }

  //custom tabs

  zfTabHref.$inject = ['FoundationApi'];

  function zfTabHref(foundationApi) {
    var directive = {
      restrict: 'A',
      replace: false,
      link: link
    }

    return directive;

    function link(scope, element, attrs, ctrl) {
      var target = attrs.zfTabHref;

      foundationApi.subscribe(target, function(msg) {
        if(msg === 'activate' || msg === 'show' || msg === 'open') {
          makeActive();
        }
      });


      element.on('click', function(e) {
        foundationApi.publish(target, 'activate');
        makeActive();
        e.preventDefault();
      });

      function makeActive() {
        element.parent().children().removeClass('is-active');
        element.addClass('is-active');
      }
    }
  }

  zfTabCustom.$inject = ['FoundationApi'];

  function zfTabCustom(foundationApi) {
    var directive = {
      restrict: 'A',
      replace: false,
      link: link
    };

    return directive;

    function link(scope, element, attrs, ctrl, transclude) {
      var children = element.children();
      angular.element(children[0]).addClass('is-active');
    }
  }

  zfTabContentCustom.$inject = ['FoundationApi'];

  function zfTabContentCustom(foundationApi) {
    return {
      restrict: 'A',
      link: link
    };

    function link(scope, element, attrs) {
      var tabs = [];
      var children = element.children();

      angular.forEach(children, function(node) {
        if(node.id) {
          var tabId = node.id;
          tabs.push(tabId);
          foundationApi.subscribe(tabId, function(msg) {
            if(msg === 'activate' || msg === 'show' || msg === 'open') {
              activateTabs(tabId);
            }
          });

          if(tabs.length === 1) {
            var el = angular.element(node);
            el.addClass('is-active');
          }
        }
      });

      function activateTabs(tabId) {
        var tabNodes = element.children();
        angular.forEach(tabNodes, function(node) {
          var el = angular.element(node);
          el.removeClass('is-active');
          if(el.attr('id') === tabId) {
            el.addClass('is-active');
          }

        });
      }
    }
  }

})();

(function() {
  'use strict';

  angular.module('foundation.core', [])
    .run(mqInitRun)
    .factory('FoundationMQInit', FoundationMQInit)
    .factory('mqHelpers', mqHelpers)
    .service('FoundationApi', FoundationApi)
    .filter('prepareRoute', prepareRoute)
    .factory('Utils', Utils)
  ;

  mqInitRun.$inject = ['FoundationMQInit'];

  function mqInitRun(mqInit) {
    mqInit.init();
  }

  FoundationMQInit.$inject = ['mqHelpers', 'FoundationApi', 'Utils'];

  function FoundationMQInit(helpers, foundationApi, u){
    var factory = {};

    factory.init = init;

    return factory;

    function init() {
      var mediaQueries;
      var extractedMedia;
      var mediaObject;

      helpers.headerHelper(['foundation-mq']);
      extractedMedia = helpers.getStyle('.foundation-mq', 'font-family');

      mediaQueries = helpers.parseStyleToObject((extractedMedia));

      for(var key in mediaQueries) {
        mediaQueries[key] = 'only screen and (min-width: ' + mediaQueries[key].replace('rem', 'em') + ')';
      }

      foundationApi.modifySettings({
        mediaQueries: mediaQueries
      });

      window.addEventListener('resize', u.throttle(function() {
        foundationApi.publish('resize', 'window resized');
      }, 50));

    }
  }


  function mqHelpers() {
    var factory = {};

    factory.headerHelper = headerHelper;
    factory.getStyle = getStyle;
    factory.parseStyleToObject = parseStyleToObject;

    return factory;

    function headerHelper(classArray) {
      var i = classArray.length;
      var head = angular.element(document.querySelectorAll('head'));

      while(i--) {
        head.append('<meta class="' + classArray[i] + '" />');
      }

      return;
    }

    function getStyle(selector, styleName) {
      var elem  = document.querySelectorAll(selector)[0];
      var style = window.getComputedStyle(elem, null);

      return style.getPropertyValue('font-family');
    }

      // https://github.com/sindresorhus/query-string
    function parseStyleToObject(str) {
      var styleObject = {};

      if (typeof str !== 'string') {
        return styleObject;
      }

      str = str.trim().slice(1, -1); // browsers re-quote string style values

      if (!str) {
        return styleObject;
      }

      styleObject = str.split('&').reduce(function(ret, param) {
        var parts = param.replace(/\+/g, ' ').split('=');
        var key = parts[0];
        var val = parts[1];
        key = decodeURIComponent(key);

        // missing `=` should be `null`:
        // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
        val = val === undefined ? null : decodeURIComponent(val);

        if (!ret.hasOwnProperty(key)) {
          ret[key] = val;
        } else if (Array.isArray(ret[key])) {
          ret[key].push(val);
        } else {
          ret[key] = [ret[key], val];
        }
        return ret;
      }, {});

      return styleObject;
    }
  }


  function FoundationApi() {
    var listeners  = [];
    var settings   = {};
    var uniqueIds  = [];
    var animations = [];
    var service    = {};

    service.subscribe           = subscribe;
    service.publish             = publish;
    service.getSettings         = getSettings;
    service.modifySettings      = modifySettings;
    service.generateUuid        = generateUuid;
    service.toggleAnimation     = toggleAnimation;
    service.closeActiveElements = closeActiveElements;
    service.animate             = animate;

    return service;

    function subscribe(name, callback) {
      if (!listeners[name]) {
        listeners[name] = [];
      }

      listeners[name].push(callback);
      return true;
    }

    function publish(name, msg) {
      if (!listeners[name]) {
        listeners[name] = [];
      }

      listeners[name].forEach(function(cb) {
        cb(msg);
      });

      return;
    }

    function getSettings() {
      return settings;
    }

    function modifySettings(tree) {
      settings = angular.extend(settings, tree);
      return settings;
    }

    function generateUuid() {
      var uuid = '';

      //little trick to produce semi-random IDs
      do {
        uuid += 'zf-uuid-';
        for (var i=0; i<15; i++) {
          uuid += Math.floor(Math.random()*16).toString(16);
        }
      } while(!uniqueIds.indexOf(uuid));

      uniqueIds.push(uuid);
      return uuid;
    }

    function toggleAnimation(element, futureState) {
      var activeClass = 'is-active';
      if(futureState) {
        element.addClass(activeClass);
      } else {
        element.removeClass(activeClass);
      }
    }

    function closeActiveElements(options) {
      var self = this;
      options = options || {};
      var activeElements = document.querySelectorAll('.is-active[zf-closable]');
      if (activeElements.length) {
        angular.forEach(activeElements, function(el) {
          if (options.exclude !== el.id) {
            self.publish(el.id, 'close');
          }
        });
      }
    }

    function animate(element, futureState, animationIn, animationOut) {
      var initClasses        = ['ng-enter', 'ng-leave'];
      var activeClasses      = ['ng-enter-active', 'ng-leave-active'];
      var activeGenericClass = 'is-active';
      var events = ['webkitAnimationEnd', 'mozAnimationEnd', 'MSAnimationEnd', 'oanimationend', 'animationend',
                'webkitTransitionEnd', 'otransitionend', 'transitionend'];
      var timedOut = true;
      var self = this;
      self.cancelAnimation = cancelAnimation;

      animateElement(futureState ? animationIn : animationOut, futureState);

      function cancelAnimation() {
        deregisterElement(element);
        element.off(events.join(' ')); //kill all animation event handlers
        timedOut = false;
      };

      function registerElement(el) {
        var elObj = {
          el: el,
          animation: self
        };

        //kill in progress animations
        var inProgress = animations.filter(function(obj) {
          return obj.el === el;
        });

        if(inProgress.length > 0) {
          inProgress[0].animation.cancelAnimation();
        }

        animations.push(elObj);
      }

      function deregisterElement(el) {
        var index;
        var currentAnimation = animations.filter(function(obj, ind) {
          if(obj.el === el) {
            index = ind;
          }
        });

        if(index >= 0) {
          animations.splice(index, 1);
        }

      }

      function reflow() {
        return element[0].offsetWidth;
      }

      function reset() {
        element[0].style.transitionDuration = 0;
        element.removeClass(initClasses.join(' ') + ' ' + activeClasses.join(' ') + ' ' + animationIn + ' ' + animationOut);
      }

      function animateElement(animationClass, activation) {
        var initClass = activation ? initClasses[0] : initClasses[1];
        var activeClass = activation ? activeClasses[0] : activeClasses[1];

        var finishAnimation = function() {
          deregisterElement(element);
          reset(); //reset all classes
          element.removeClass(!activation ? activeGenericClass : ''); //if not active, remove active class
          reflow();
          timedOut = false;
        };

        //stop animation
        registerElement(element);
        reset();
        element.addClass(animationClass);
        element.addClass(initClass);
        element.addClass(activeGenericClass);

        //force a "tick"
        reflow();

        //activate
        element[0].style.transitionDuration = '';
        element.addClass(activeClass);

        element.one(events.join(' '), function() {
          finishAnimation();
        });

        setTimeout(function() {
          if(timedOut) {
            finishAnimation();
          }
        }, 3000);
      }

    }
  }

  function prepareRoute() {
    return prepare;

    function prepare(input) {
      return 'route-' + input.replace(/\./, '-').toLowerCase();
    }
  }

  function Utils() {
    var utils = {};

    utils.prepareRoute = prepareRouteUtil;
    utils.throttle = throttleUtil;

    return utils;

    function prepareRouteUtil(input) {
      return 'route-' + input.replace(/\./, '-').toLowerCase();
    }

    function throttleUtil(func, delay) {
      var timer = null;

      return function () {
        var context = this, args = arguments;

        if (timer === null) {
          timer = setTimeout(function () {
            func.apply(context, args);
            timer = null;
          }, delay);
        }
      }
    }
  }

})();

(function() {
  'use strict';

  angular.module('foundation.dynamicRouting.animations', ['ngAnimate', 'foundation.dynamicRouting'])
    .animation('.ui-animation', uiAnimation)
  ;

  uiAnimation.$inject = ['$rootScope', '$state'];

  function uiAnimation($rootScope, $state) {
    var events = ['webkitAnimationEnd', 'mozAnimationEnd', 'MSAnimationEnd', 'oanimationend', 'animationend',
                  'webkitTransitionEnd', 'otransitionend', 'transitionend'];

    var parentStyle = 'position-absolute';

    var animation = {};

    animation.enter = enterAnimation;
    animation.leave = leaveAnimation;

    return animation;

    function enterAnimation(element, done) {
      var scope = element.scope();

      if(scope.vars && scope.vars.animationIn) {
        var animationIn  = scope.vars.animationIn;
        var animationOut = scope.vars.animationOut || '';
        var initial  = 'ng-enter';
        var activate = 'ng-enter-active';
        var timedOut = true;

        //reset possible failed animations and bugs
        element.parent().addClass(parentStyle);
        element.removeClass(activate + ' ' + initial + ' ' + animationIn + ' ' + animationOut);
        element[0].style.transitionDuration = 0;

        //start animation
        element.addClass(animationIn);
        element.addClass(initial);

        $rootScope.$digest();

        element[0].style.transitionDuration = '';
        element.addClass(activate);

        var finishAnimation = function() {
          element.parent().removeClass(parentStyle);
          element.removeClass(activate + ' ' + initial + ' ' + animationIn + ' ' + animationOut);
          timedOut = false;
          done();
        }

        element.one(events.join(' '), function() {
          finishAnimation();
        });

        setTimeout(function() {
          if (timedOut) {
            finishAnimation();
          }
        }, 3000);

      } else {
        done();
      }

      return function(isCancelled) {

      };
    }

    function leaveAnimation(element, done) {
      var scope = element.scope();

      if(scope.vars && scope.vars.animationOut) {
        var animationIn  = scope.vars.animationIn || '';
        var animationOut = scope.vars.animationOut;
        var initial  = 'ng-leave';
        var activate = 'ng-leave-active';
        var timedOut = true;

        element.removeClass(activate + ' ' + initial + ' ' + animationIn + ' ' + animationOut);
        element[0].style.transitionDuration = 0;

        //start animation
        element.addClass(animationOut);
        element.addClass(initial);

        $rootScope.$digest();

        element[0].style.transitionDuration = '';
        element.addClass(activate);

        var finishAnimation = function() {
          element.parent().removeClass(parentStyle);
          element.removeClass(activate + ' ' + initial + ' ' + animationIn + ' ' + animationOut);
          timedOut = false;
          done();
        }

        element.one(events.join(' '), function() {
          finishAnimation();
        });

        setTimeout(function() {
          if (timedOut) {
            finishAnimation();
          }
        }, 3000);

      } else {
        done();
      }

      return function(isCancelled) {

      };
    }
  }

})();

(function() {
  'use strict';

  angular.module('foundation.dynamicRouting', ['ui.router'])
    .provider('$FoundationState', FoundationState)
    .controller('DefaultController', DefaultController)
    .config(DynamicRoutingConfig)
    .run(DynamicRoutingRun)
  ;

  FoundationState.$inject = ['$stateProvider'];

  function FoundationState($stateProvider) {
    var complexViews = {};

    this.registerDynamicRoutes = function(routes) {
      var dynamicRoutes = routes || foundationRoutes;

      angular.forEach(dynamicRoutes, function(page) {
        if (page.hasComposed) {
          if (!angular.isDefined(complexViews[page.parent])) {
            complexViews[page.parent] = { children: {} };
          }

          if (page.controller) {
            page.controller = getController(page);
          }

          complexViews[page.parent].children[page.name] = page;

        } else if (page.composed) {
          if(!angular.isDefined(complexViews[page.name])) {
            complexViews[page.name] = { children: {} };
          }

          if (page.controller) {
            page.controller = getController(page);
          }

          angular.extend(complexViews[page.name], page);
        } else {
          var state = {
            url: page.url,
            templateUrl: page.path,
            parent: page.parent || '',
            controller: getController(page),
            data: { vars: page },
          };

          $stateProvider.state(page.name, state);
        }
      });

      angular.forEach(complexViews, function(page) {
          var state = {
            url: page.url,
            parent: page.parent || '',
            data: { vars: page },
            views: {
              '': buildState(page.path, page)
            }
          };

          angular.forEach(page.children, function(sub) {
            state.views[sub.name + '@' + page.name] = buildState(sub.path, page);
          });

          $stateProvider.state(page.name, state);
      });
    };

    this.$get = angular.noop;

    function buildState(path, state) {
      return {
        templateUrl: path,
        controller: getController(state),
      };
    }

    function getController(state) {
      var ctrl = state.controller || 'DefaultController';

      if (!/\w\s+as\s+\w/.test(ctrl)) {
        ctrl += ' as PageCtrl';
      }

      return ctrl;
    }
  }

  DefaultController.$inject = ['$scope', '$stateParams', '$state'];

  function DefaultController($scope, $stateParams, $state) {
    var params = [];
    angular.forEach($stateParams, function(value, key) {
      params[key] = value;
    });

    $scope.params = params;
    $scope.current = $state.current.name;

    if($state.current.views) {
      $scope.vars = $state.current.data.vars;
      $scope.composed = $state.current.data.vars.children;
    } else {
      $scope.vars = $state.current.data.vars;
    }
  }

  DynamicRoutingConfig.$inject = ['$FoundationStateProvider'];

  function DynamicRoutingConfig(FoundationStateProvider) {
    FoundationStateProvider.registerDynamicRoutes(foundationRoutes);
  }

  DynamicRoutingRun.$inject = ['$rootScope', '$state', '$stateParams'];

  function DynamicRoutingRun($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }

})();

angular.module('markdown', [])
  .directive('markdown', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs, controller) {
        element.html(marked(element.html()));
      }
    };

});

var app = angular.module('ngApp',[
    'ui.router',
    'foundation.core',
    'foundation.accordion',
    'foundation.actionsheet',
    'foundation.common',
    'foundation.iconic',
    'foundation.interchange',
    'foundation.modal',
    'foundation.notification',
    'foundation.offcanvas',
    'foundation.panel',
    'foundation.popup',
    'foundation.tabs'
  ]);

app.controller('beerCtrl', ['$scope', '$http', function ($scope, $http) {
  

  $http.get('/beers').
      success (function(data, status){
          $scope.beers = data;
          angular.forEach(data, function(value, index) {
            $scope.rating = value.rating;
            console.log($scope.rating);
            $scope.stars = function(num) {
                return new Array(num);
            };
          });
        }
      );
}]);
app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "home.html",
      controller: "beerCtrl"
    });
});
angular.module("ngApp").run(["$templateCache", function($templateCache) {

  $templateCache.put("home.html",
    "<div class=\"container\">\n" +
    "  \n" +
    "  <div class=\"new-beer\">\n" +
    "    <h4 class=\"new-beer-title\">New Beer</h4>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"beer-container\">\n" +
    "    <div class=\"beer-list\">\n" +
    "      <div class=\"beer-item\" ng-repeat=\"beer in beers\">\n" +
    "        <h2 class=\"beer-name\">{{beer.name}}</h2>\n" +
    "        <h3 class=\"beer-brewery\">{{beer.brewery}}</h3>\n" +
    "        <ul class=\"beer-rating\">\n" +
    "          <li class=\"beer-rating-star\" ng-show=\"{{beer.rating}} >= 1\"></li>\n" +
    "          <li class=\"beer-rating-no-star\" ng-show=\"{{beer.rating}} < 1\"></li>\n" +
    "          <li class=\"beer-rating-star\" ng-show=\"{{beer.rating}} >= 2\"></li>\n" +
    "          <li class=\"beer-rating-no-star\" ng-show=\"{{beer.rating}} < 2\"></li>\n" +
    "          <li class=\"beer-rating-star\" ng-show=\"{{beer.rating}} >= 3\"></li>\n" +
    "          <li class=\"beer-rating-no-star\" ng-show=\"{{beer.rating}} < 3\"></li>\n" +
    "          <li class=\"beer-rating-star\" ng-show=\"{{beer.rating}} >= 4\"></li>\n" +
    "          <li class=\"beer-rating-no-star\" ng-show=\"{{beer.rating}} < 4\"></li>\n" +
    "          <li class=\"beer-rating-star\" ng-show=\"{{beer.rating}} >= 5\"></li>\n" +
    "          <li class=\"beer-rating-no-star\" ng-show=\"{{beer.rating}} < 5\"></li>\n" +
    "        </ul>\n" +
    "        <div class=\"beer-location\">\n" +
    "          <h4 class=\"beer-location-title\">\n" +
    "            The perfect location:\n" +
    "          </h4>\n" +
    "          <p class=\"beer-location-text\">\n" +
    "            {{beer.location}}\n" +
    "          </p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>"
  );

}]);

//# sourceMappingURL=app.js.map