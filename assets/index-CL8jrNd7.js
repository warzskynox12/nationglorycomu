function x0(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var wb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function w_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var D0={exports:{}},hf={},N0={exports:{}},Ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sc=Symbol.for("react.element"),Eb=Symbol.for("react.portal"),Ib=Symbol.for("react.fragment"),Tb=Symbol.for("react.strict_mode"),Sb=Symbol.for("react.profiler"),Rb=Symbol.for("react.provider"),Ab=Symbol.for("react.context"),Pb=Symbol.for("react.forward_ref"),Cb=Symbol.for("react.suspense"),kb=Symbol.for("react.memo"),bb=Symbol.for("react.lazy"),qw=Symbol.iterator;function xb(t){return t===null||typeof t!="object"?null:(t=qw&&t[qw]||t["@@iterator"],typeof t=="function"?t:null)}var O0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L0=Object.assign,V0={};function sl(t,e,n){this.props=t,this.context=e,this.refs=V0,this.updater=n||O0}sl.prototype.isReactComponent={};sl.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};sl.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function M0(){}M0.prototype=sl.prototype;function E_(t,e,n){this.props=t,this.context=e,this.refs=V0,this.updater=n||O0}var I_=E_.prototype=new M0;I_.constructor=E_;L0(I_,sl.prototype);I_.isPureReactComponent=!0;var Ww=Array.isArray,F0=Object.prototype.hasOwnProperty,T_={current:null},U0={key:!0,ref:!0,__self:!0,__source:!0};function B0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)F0.call(e,r)&&!U0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Sc,type:t,key:s,ref:o,props:i,_owner:T_.current}}function Db(t,e){return{$$typeof:Sc,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function S_(t){return typeof t=="object"&&t!==null&&t.$$typeof===Sc}function Nb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hw=/\/+/g;function Dp(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Nb(""+t.key):e.toString(36)}function jd(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Sc:case Eb:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Dp(o,0):r,Ww(i)?(n="",t!=null&&(n=t.replace(Hw,"$&/")+"/"),jd(i,e,n,"",function(c){return c})):i!=null&&(S_(i)&&(i=Db(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Hw,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ww(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Dp(s,a);o+=jd(s,e,n,l,i)}else if(l=xb(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Dp(s,a++),o+=jd(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fd(t,e,n){if(t==null)return t;var r=[],i=0;return jd(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Ob(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vn={current:null},zd={transition:null},Lb={ReactCurrentDispatcher:vn,ReactCurrentBatchConfig:zd,ReactCurrentOwner:T_};function j0(){throw Error("act(...) is not supported in production builds of React.")}Ee.Children={map:fd,forEach:function(t,e,n){fd(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fd(t,function(){e++}),e},toArray:function(t){return fd(t,function(e){return e})||[]},only:function(t){if(!S_(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ee.Component=sl;Ee.Fragment=Ib;Ee.Profiler=Sb;Ee.PureComponent=E_;Ee.StrictMode=Tb;Ee.Suspense=Cb;Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lb;Ee.act=j0;Ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=L0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=T_.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)F0.call(e,l)&&!U0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Sc,type:t.type,key:i,ref:s,props:r,_owner:o}};Ee.createContext=function(t){return t={$$typeof:Ab,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Rb,_context:t},t.Consumer=t};Ee.createElement=B0;Ee.createFactory=function(t){var e=B0.bind(null,t);return e.type=t,e};Ee.createRef=function(){return{current:null}};Ee.forwardRef=function(t){return{$$typeof:Pb,render:t}};Ee.isValidElement=S_;Ee.lazy=function(t){return{$$typeof:bb,_payload:{_status:-1,_result:t},_init:Ob}};Ee.memo=function(t,e){return{$$typeof:kb,type:t,compare:e===void 0?null:e}};Ee.startTransition=function(t){var e=zd.transition;zd.transition={};try{t()}finally{zd.transition=e}};Ee.unstable_act=j0;Ee.useCallback=function(t,e){return vn.current.useCallback(t,e)};Ee.useContext=function(t){return vn.current.useContext(t)};Ee.useDebugValue=function(){};Ee.useDeferredValue=function(t){return vn.current.useDeferredValue(t)};Ee.useEffect=function(t,e){return vn.current.useEffect(t,e)};Ee.useId=function(){return vn.current.useId()};Ee.useImperativeHandle=function(t,e,n){return vn.current.useImperativeHandle(t,e,n)};Ee.useInsertionEffect=function(t,e){return vn.current.useInsertionEffect(t,e)};Ee.useLayoutEffect=function(t,e){return vn.current.useLayoutEffect(t,e)};Ee.useMemo=function(t,e){return vn.current.useMemo(t,e)};Ee.useReducer=function(t,e,n){return vn.current.useReducer(t,e,n)};Ee.useRef=function(t){return vn.current.useRef(t)};Ee.useState=function(t){return vn.current.useState(t)};Ee.useSyncExternalStore=function(t,e,n){return vn.current.useSyncExternalStore(t,e,n)};Ee.useTransition=function(){return vn.current.useTransition()};Ee.version="18.3.1";N0.exports=Ee;var z=N0.exports;const z0=w_(z),Vb=x0({__proto__:null,default:z0},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mb=z,Fb=Symbol.for("react.element"),Ub=Symbol.for("react.fragment"),Bb=Object.prototype.hasOwnProperty,jb=Mb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zb={key:!0,ref:!0,__self:!0,__source:!0};function $0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Bb.call(e,r)&&!zb.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Fb,type:t,key:s,ref:o,props:i,_owner:jb.current}}hf.Fragment=Ub;hf.jsx=$0;hf.jsxs=$0;D0.exports=hf;var Q=D0.exports,q0={exports:{}},jn={},W0={exports:{}},H0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,ue){var de=W.length;W.push(ue);e:for(;0<de;){var Ce=de-1>>>1,_e=W[Ce];if(0<i(_e,ue))W[Ce]=ue,W[de]=_e,de=Ce;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var ue=W[0],de=W.pop();if(de!==ue){W[0]=de;e:for(var Ce=0,_e=W.length,xe=_e>>>1;Ce<xe;){var ln=2*(Ce+1)-1,Tt=W[ln],Ft=ln+1,Ut=W[Ft];if(0>i(Tt,de))Ft<_e&&0>i(Ut,Tt)?(W[Ce]=Ut,W[Ft]=de,Ce=Ft):(W[Ce]=Tt,W[ln]=de,Ce=ln);else if(Ft<_e&&0>i(Ut,de))W[Ce]=Ut,W[Ft]=de,Ce=Ft;else break e}}return ue}function i(W,ue){var de=W.sortIndex-ue.sortIndex;return de!==0?de:W.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,p=3,_=!1,E=!1,T=!1,C=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(W){for(var ue=n(c);ue!==null;){if(ue.callback===null)r(c);else if(ue.startTime<=W)r(c),ue.sortIndex=ue.expirationTime,e(l,ue);else break;ue=n(c)}}function x(W){if(T=!1,I(W),!E)if(n(l)!==null)E=!0,Jt(U);else{var ue=n(c);ue!==null&&an(x,ue.startTime-W)}}function U(W,ue){E=!1,T&&(T=!1,S(y),y=-1),_=!0;var de=p;try{for(I(ue),h=n(l);h!==null&&(!(h.expirationTime>ue)||W&&!k());){var Ce=h.callback;if(typeof Ce=="function"){h.callback=null,p=h.priorityLevel;var _e=Ce(h.expirationTime<=ue);ue=t.unstable_now(),typeof _e=="function"?h.callback=_e:h===n(l)&&r(l),I(ue)}else r(l);h=n(l)}if(h!==null)var xe=!0;else{var ln=n(c);ln!==null&&an(x,ln.startTime-ue),xe=!1}return xe}finally{h=null,p=de,_=!1}}var B=!1,g=null,y=-1,R=5,A=-1;function k(){return!(t.unstable_now()-A<R)}function b(){if(g!==null){var W=t.unstable_now();A=W;var ue=!0;try{ue=g(!0,W)}finally{ue?P():(B=!1,g=null)}}else B=!1}var P;if(typeof v=="function")P=function(){v(b)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,qe=re.port2;re.port1.onmessage=b,P=function(){qe.postMessage(null)}}else P=function(){C(b,0)};function Jt(W){g=W,B||(B=!0,P())}function an(W,ue){y=C(function(){W(t.unstable_now())},ue)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){E||_||(E=!0,Jt(U))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(W){switch(p){case 1:case 2:case 3:var ue=3;break;default:ue=p}var de=p;p=ue;try{return W()}finally{p=de}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,ue){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var de=p;p=W;try{return ue()}finally{p=de}},t.unstable_scheduleCallback=function(W,ue,de){var Ce=t.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?Ce+de:Ce):de=Ce,W){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=de+_e,W={id:d++,callback:ue,priorityLevel:W,startTime:de,expirationTime:_e,sortIndex:-1},de>Ce?(W.sortIndex=de,e(c,W),n(l)===null&&W===n(c)&&(T?(S(y),y=-1):T=!0,an(x,de-Ce))):(W.sortIndex=_e,e(l,W),E||_||(E=!0,Jt(U))),W},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(W){var ue=p;return function(){var de=p;p=ue;try{return W.apply(this,arguments)}finally{p=de}}}})(H0);W0.exports=H0;var $b=W0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qb=z,Un=$b;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var G0=new Set,Fu={};function So(t,e){Da(t,e),Da(t+"Capture",e)}function Da(t,e){for(Fu[t]=e,t=0;t<e.length;t++)G0.add(e[t])}var oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bm=Object.prototype.hasOwnProperty,Wb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gw={},Kw={};function Hb(t){return bm.call(Kw,t)?!0:bm.call(Gw,t)?!1:Wb.test(t)?Kw[t]=!0:(Gw[t]=!0,!1)}function Gb(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Kb(t,e,n,r){if(e===null||typeof e>"u"||Gb(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function wn(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qt[t]=new wn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qt[e]=new wn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qt[t]=new wn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qt[t]=new wn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qt[t]=new wn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qt[t]=new wn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qt[t]=new wn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qt[t]=new wn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qt[t]=new wn(t,5,!1,t.toLowerCase(),null,!1,!1)});var R_=/[\-:]([a-z])/g;function A_(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(R_,A_);Qt[e]=new wn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(R_,A_);Qt[e]=new wn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(R_,A_);Qt[e]=new wn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qt[t]=new wn(t,1,!1,t.toLowerCase(),null,!1,!1)});Qt.xlinkHref=new wn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qt[t]=new wn(t,1,!1,t.toLowerCase(),null,!0,!0)});function P_(t,e,n,r){var i=Qt.hasOwnProperty(e)?Qt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Kb(e,n,i,r)&&(n=null),r||i===null?Hb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var pi=qb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pd=Symbol.for("react.element"),sa=Symbol.for("react.portal"),oa=Symbol.for("react.fragment"),C_=Symbol.for("react.strict_mode"),xm=Symbol.for("react.profiler"),K0=Symbol.for("react.provider"),Q0=Symbol.for("react.context"),k_=Symbol.for("react.forward_ref"),Dm=Symbol.for("react.suspense"),Nm=Symbol.for("react.suspense_list"),b_=Symbol.for("react.memo"),Mi=Symbol.for("react.lazy"),J0=Symbol.for("react.offscreen"),Qw=Symbol.iterator;function Bl(t){return t===null||typeof t!="object"?null:(t=Qw&&t[Qw]||t["@@iterator"],typeof t=="function"?t:null)}var rt=Object.assign,Np;function au(t){if(Np===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Np=e&&e[1]||""}return`
`+Np+t}var Op=!1;function Lp(t,e){if(!t||Op)return"";Op=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Op=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?au(t):""}function Qb(t){switch(t.tag){case 5:return au(t.type);case 16:return au("Lazy");case 13:return au("Suspense");case 19:return au("SuspenseList");case 0:case 2:case 15:return t=Lp(t.type,!1),t;case 11:return t=Lp(t.type.render,!1),t;case 1:return t=Lp(t.type,!0),t;default:return""}}function Om(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case oa:return"Fragment";case sa:return"Portal";case xm:return"Profiler";case C_:return"StrictMode";case Dm:return"Suspense";case Nm:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Q0:return(t.displayName||"Context")+".Consumer";case K0:return(t._context.displayName||"Context")+".Provider";case k_:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case b_:return e=t.displayName||null,e!==null?e:Om(t.type)||"Memo";case Mi:e=t._payload,t=t._init;try{return Om(t(e))}catch{}}return null}function Jb(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Om(e);case 8:return e===C_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function rs(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Y0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Yb(t){var e=Y0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function md(t){t._valueTracker||(t._valueTracker=Yb(t))}function X0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Y0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function mh(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lm(t,e){var n=e.checked;return rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Jw(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=rs(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Z0(t,e){e=e.checked,e!=null&&P_(t,"checked",e,!1)}function Vm(t,e){Z0(t,e);var n=rs(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Mm(t,e.type,n):e.hasOwnProperty("defaultValue")&&Mm(t,e.type,rs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Yw(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Mm(t,e,n){(e!=="number"||mh(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var lu=Array.isArray;function va(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+rs(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Fm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return rt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Xw(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(H(92));if(lu(n)){if(1<n.length)throw Error(H(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:rs(n)}}function eS(t,e){var n=rs(e.value),r=rs(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Zw(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function tS(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Um(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?tS(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var gd,nS=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(gd=gd||document.createElement("div"),gd.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=gd.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Uu(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var yu={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xb=["Webkit","ms","Moz","O"];Object.keys(yu).forEach(function(t){Xb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),yu[e]=yu[t]})});function rS(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||yu.hasOwnProperty(t)&&yu[t]?(""+e).trim():e+"px"}function iS(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=rS(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Zb=rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bm(t,e){if(e){if(Zb[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function jm(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zm=null;function x_(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $m=null,wa=null,Ea=null;function eE(t){if(t=Pc(t)){if(typeof $m!="function")throw Error(H(280));var e=t.stateNode;e&&(e=_f(e),$m(t.stateNode,t.type,e))}}function sS(t){wa?Ea?Ea.push(t):Ea=[t]:wa=t}function oS(){if(wa){var t=wa,e=Ea;if(Ea=wa=null,eE(t),e)for(t=0;t<e.length;t++)eE(e[t])}}function aS(t,e){return t(e)}function lS(){}var Vp=!1;function uS(t,e,n){if(Vp)return t(e,n);Vp=!0;try{return aS(t,e,n)}finally{Vp=!1,(wa!==null||Ea!==null)&&(lS(),oS())}}function Bu(t,e){var n=t.stateNode;if(n===null)return null;var r=_f(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(H(231,e,typeof n));return n}var qm=!1;if(oi)try{var jl={};Object.defineProperty(jl,"passive",{get:function(){qm=!0}}),window.addEventListener("test",jl,jl),window.removeEventListener("test",jl,jl)}catch{qm=!1}function ex(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var vu=!1,gh=null,_h=!1,Wm=null,tx={onError:function(t){vu=!0,gh=t}};function nx(t,e,n,r,i,s,o,a,l){vu=!1,gh=null,ex.apply(tx,arguments)}function rx(t,e,n,r,i,s,o,a,l){if(nx.apply(this,arguments),vu){if(vu){var c=gh;vu=!1,gh=null}else throw Error(H(198));_h||(_h=!0,Wm=c)}}function Ro(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function cS(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function tE(t){if(Ro(t)!==t)throw Error(H(188))}function ix(t){var e=t.alternate;if(!e){if(e=Ro(t),e===null)throw Error(H(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return tE(i),t;if(s===r)return tE(i),e;s=s.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?t:e}function dS(t){return t=ix(t),t!==null?hS(t):null}function hS(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=hS(t);if(e!==null)return e;t=t.sibling}return null}var fS=Un.unstable_scheduleCallback,nE=Un.unstable_cancelCallback,sx=Un.unstable_shouldYield,ox=Un.unstable_requestPaint,pt=Un.unstable_now,ax=Un.unstable_getCurrentPriorityLevel,D_=Un.unstable_ImmediatePriority,pS=Un.unstable_UserBlockingPriority,yh=Un.unstable_NormalPriority,lx=Un.unstable_LowPriority,mS=Un.unstable_IdlePriority,ff=null,Nr=null;function ux(t){if(Nr&&typeof Nr.onCommitFiberRoot=="function")try{Nr.onCommitFiberRoot(ff,t,void 0,(t.current.flags&128)===128)}catch{}}var hr=Math.clz32?Math.clz32:hx,cx=Math.log,dx=Math.LN2;function hx(t){return t>>>=0,t===0?32:31-(cx(t)/dx|0)|0}var _d=64,yd=4194304;function uu(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vh(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=uu(a):(s&=o,s!==0&&(r=uu(s)))}else o=n&~i,o!==0?r=uu(o):s!==0&&(r=uu(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-hr(e),i=1<<n,r|=t[n],e&=~i;return r}function fx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function px(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-hr(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=fx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Hm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gS(){var t=_d;return _d<<=1,!(_d&4194240)&&(_d=64),t}function Mp(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Rc(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-hr(e),t[e]=n}function mx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-hr(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function N_(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-hr(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var be=0;function _S(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yS,O_,vS,wS,ES,Gm=!1,vd=[],Gi=null,Ki=null,Qi=null,ju=new Map,zu=new Map,Ui=[],gx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rE(t,e){switch(t){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":ju.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":zu.delete(e.pointerId)}}function zl(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Pc(e),e!==null&&O_(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function _x(t,e,n,r,i){switch(e){case"focusin":return Gi=zl(Gi,t,e,n,r,i),!0;case"dragenter":return Ki=zl(Ki,t,e,n,r,i),!0;case"mouseover":return Qi=zl(Qi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ju.set(s,zl(ju.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,zu.set(s,zl(zu.get(s)||null,t,e,n,r,i)),!0}return!1}function IS(t){var e=$s(t.target);if(e!==null){var n=Ro(e);if(n!==null){if(e=n.tag,e===13){if(e=cS(n),e!==null){t.blockedOn=e,ES(t.priority,function(){vS(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $d(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Km(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);zm=r,n.target.dispatchEvent(r),zm=null}else return e=Pc(n),e!==null&&O_(e),t.blockedOn=n,!1;e.shift()}return!0}function iE(t,e,n){$d(t)&&n.delete(e)}function yx(){Gm=!1,Gi!==null&&$d(Gi)&&(Gi=null),Ki!==null&&$d(Ki)&&(Ki=null),Qi!==null&&$d(Qi)&&(Qi=null),ju.forEach(iE),zu.forEach(iE)}function $l(t,e){t.blockedOn===e&&(t.blockedOn=null,Gm||(Gm=!0,Un.unstable_scheduleCallback(Un.unstable_NormalPriority,yx)))}function $u(t){function e(i){return $l(i,t)}if(0<vd.length){$l(vd[0],t);for(var n=1;n<vd.length;n++){var r=vd[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Gi!==null&&$l(Gi,t),Ki!==null&&$l(Ki,t),Qi!==null&&$l(Qi,t),ju.forEach(e),zu.forEach(e),n=0;n<Ui.length;n++)r=Ui[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ui.length&&(n=Ui[0],n.blockedOn===null);)IS(n),n.blockedOn===null&&Ui.shift()}var Ia=pi.ReactCurrentBatchConfig,wh=!0;function vx(t,e,n,r){var i=be,s=Ia.transition;Ia.transition=null;try{be=1,L_(t,e,n,r)}finally{be=i,Ia.transition=s}}function wx(t,e,n,r){var i=be,s=Ia.transition;Ia.transition=null;try{be=4,L_(t,e,n,r)}finally{be=i,Ia.transition=s}}function L_(t,e,n,r){if(wh){var i=Km(t,e,n,r);if(i===null)Gp(t,e,r,Eh,n),rE(t,r);else if(_x(i,t,e,n,r))r.stopPropagation();else if(rE(t,r),e&4&&-1<gx.indexOf(t)){for(;i!==null;){var s=Pc(i);if(s!==null&&yS(s),s=Km(t,e,n,r),s===null&&Gp(t,e,r,Eh,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Gp(t,e,r,null,n)}}var Eh=null;function Km(t,e,n,r){if(Eh=null,t=x_(r),t=$s(t),t!==null)if(e=Ro(t),e===null)t=null;else if(n=e.tag,n===13){if(t=cS(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Eh=t,null}function TS(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ax()){case D_:return 1;case pS:return 4;case yh:case lx:return 16;case mS:return 536870912;default:return 16}default:return 16}}var $i=null,V_=null,qd=null;function SS(){if(qd)return qd;var t,e=V_,n=e.length,r,i="value"in $i?$i.value:$i.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return qd=i.slice(t,1<r?1-r:void 0)}function Wd(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wd(){return!0}function sE(){return!1}function zn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wd:sE,this.isPropagationStopped=sE,this}return rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wd)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wd)},persist:function(){},isPersistent:wd}),e}var ol={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},M_=zn(ol),Ac=rt({},ol,{view:0,detail:0}),Ex=zn(Ac),Fp,Up,ql,pf=rt({},Ac,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:F_,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ql&&(ql&&t.type==="mousemove"?(Fp=t.screenX-ql.screenX,Up=t.screenY-ql.screenY):Up=Fp=0,ql=t),Fp)},movementY:function(t){return"movementY"in t?t.movementY:Up}}),oE=zn(pf),Ix=rt({},pf,{dataTransfer:0}),Tx=zn(Ix),Sx=rt({},Ac,{relatedTarget:0}),Bp=zn(Sx),Rx=rt({},ol,{animationName:0,elapsedTime:0,pseudoElement:0}),Ax=zn(Rx),Px=rt({},ol,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Cx=zn(Px),kx=rt({},ol,{data:0}),aE=zn(kx),bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Dx[t])?!!e[t]:!1}function F_(){return Nx}var Ox=rt({},Ac,{key:function(t){if(t.key){var e=bx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wd(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:F_,charCode:function(t){return t.type==="keypress"?Wd(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wd(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Lx=zn(Ox),Vx=rt({},pf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lE=zn(Vx),Mx=rt({},Ac,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:F_}),Fx=zn(Mx),Ux=rt({},ol,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bx=zn(Ux),jx=rt({},pf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zx=zn(jx),$x=[9,13,27,32],U_=oi&&"CompositionEvent"in window,wu=null;oi&&"documentMode"in document&&(wu=document.documentMode);var qx=oi&&"TextEvent"in window&&!wu,RS=oi&&(!U_||wu&&8<wu&&11>=wu),uE=" ",cE=!1;function AS(t,e){switch(t){case"keyup":return $x.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function PS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var aa=!1;function Wx(t,e){switch(t){case"compositionend":return PS(e);case"keypress":return e.which!==32?null:(cE=!0,uE);case"textInput":return t=e.data,t===uE&&cE?null:t;default:return null}}function Hx(t,e){if(aa)return t==="compositionend"||!U_&&AS(t,e)?(t=SS(),qd=V_=$i=null,aa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return RS&&e.locale!=="ko"?null:e.data;default:return null}}var Gx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dE(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Gx[t.type]:e==="textarea"}function CS(t,e,n,r){sS(r),e=Ih(e,"onChange"),0<e.length&&(n=new M_("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Eu=null,qu=null;function Kx(t){US(t,0)}function mf(t){var e=ca(t);if(X0(e))return t}function Qx(t,e){if(t==="change")return e}var kS=!1;if(oi){var jp;if(oi){var zp="oninput"in document;if(!zp){var hE=document.createElement("div");hE.setAttribute("oninput","return;"),zp=typeof hE.oninput=="function"}jp=zp}else jp=!1;kS=jp&&(!document.documentMode||9<document.documentMode)}function fE(){Eu&&(Eu.detachEvent("onpropertychange",bS),qu=Eu=null)}function bS(t){if(t.propertyName==="value"&&mf(qu)){var e=[];CS(e,qu,t,x_(t)),uS(Kx,e)}}function Jx(t,e,n){t==="focusin"?(fE(),Eu=e,qu=n,Eu.attachEvent("onpropertychange",bS)):t==="focusout"&&fE()}function Yx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mf(qu)}function Xx(t,e){if(t==="click")return mf(e)}function Zx(t,e){if(t==="input"||t==="change")return mf(e)}function eD(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gr=typeof Object.is=="function"?Object.is:eD;function Wu(t,e){if(gr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bm.call(e,i)||!gr(t[i],e[i]))return!1}return!0}function pE(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function mE(t,e){var n=pE(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pE(n)}}function xS(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xS(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function DS(){for(var t=window,e=mh();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=mh(t.document)}return e}function B_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function tD(t){var e=DS(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xS(n.ownerDocument.documentElement,n)){if(r!==null&&B_(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=mE(n,s);var o=mE(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var nD=oi&&"documentMode"in document&&11>=document.documentMode,la=null,Qm=null,Iu=null,Jm=!1;function gE(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jm||la==null||la!==mh(r)||(r=la,"selectionStart"in r&&B_(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Iu&&Wu(Iu,r)||(Iu=r,r=Ih(Qm,"onSelect"),0<r.length&&(e=new M_("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=la)))}function Ed(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ua={animationend:Ed("Animation","AnimationEnd"),animationiteration:Ed("Animation","AnimationIteration"),animationstart:Ed("Animation","AnimationStart"),transitionend:Ed("Transition","TransitionEnd")},$p={},NS={};oi&&(NS=document.createElement("div").style,"AnimationEvent"in window||(delete ua.animationend.animation,delete ua.animationiteration.animation,delete ua.animationstart.animation),"TransitionEvent"in window||delete ua.transitionend.transition);function gf(t){if($p[t])return $p[t];if(!ua[t])return t;var e=ua[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in NS)return $p[t]=e[n];return t}var OS=gf("animationend"),LS=gf("animationiteration"),VS=gf("animationstart"),MS=gf("transitionend"),FS=new Map,_E="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gs(t,e){FS.set(t,e),So(e,[t])}for(var qp=0;qp<_E.length;qp++){var Wp=_E[qp],rD=Wp.toLowerCase(),iD=Wp[0].toUpperCase()+Wp.slice(1);gs(rD,"on"+iD)}gs(OS,"onAnimationEnd");gs(LS,"onAnimationIteration");gs(VS,"onAnimationStart");gs("dblclick","onDoubleClick");gs("focusin","onFocus");gs("focusout","onBlur");gs(MS,"onTransitionEnd");Da("onMouseEnter",["mouseout","mouseover"]);Da("onMouseLeave",["mouseout","mouseover"]);Da("onPointerEnter",["pointerout","pointerover"]);Da("onPointerLeave",["pointerout","pointerover"]);So("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));So("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));So("onBeforeInput",["compositionend","keypress","textInput","paste"]);So("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));So("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));So("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sD=new Set("cancel close invalid load scroll toggle".split(" ").concat(cu));function yE(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,rx(r,e,void 0,t),t.currentTarget=null}function US(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;yE(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;yE(i,a,c),s=l}}}if(_h)throw t=Wm,_h=!1,Wm=null,t}function Be(t,e){var n=e[tg];n===void 0&&(n=e[tg]=new Set);var r=t+"__bubble";n.has(r)||(BS(e,t,2,!1),n.add(r))}function Hp(t,e,n){var r=0;e&&(r|=4),BS(n,t,r,e)}var Id="_reactListening"+Math.random().toString(36).slice(2);function Hu(t){if(!t[Id]){t[Id]=!0,G0.forEach(function(n){n!=="selectionchange"&&(sD.has(n)||Hp(n,!1,t),Hp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Id]||(e[Id]=!0,Hp("selectionchange",!1,e))}}function BS(t,e,n,r){switch(TS(e)){case 1:var i=vx;break;case 4:i=wx;break;default:i=L_}n=i.bind(null,e,n,t),i=void 0,!qm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Gp(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=$s(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}uS(function(){var c=s,d=x_(n),h=[];e:{var p=FS.get(t);if(p!==void 0){var _=M_,E=t;switch(t){case"keypress":if(Wd(n)===0)break e;case"keydown":case"keyup":_=Lx;break;case"focusin":E="focus",_=Bp;break;case"focusout":E="blur",_=Bp;break;case"beforeblur":case"afterblur":_=Bp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=oE;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Tx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Fx;break;case OS:case LS:case VS:_=Ax;break;case MS:_=Bx;break;case"scroll":_=Ex;break;case"wheel":_=zx;break;case"copy":case"cut":case"paste":_=Cx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=lE}var T=(e&4)!==0,C=!T&&t==="scroll",S=T?p!==null?p+"Capture":null:p;T=[];for(var v=c,I;v!==null;){I=v;var x=I.stateNode;if(I.tag===5&&x!==null&&(I=x,S!==null&&(x=Bu(v,S),x!=null&&T.push(Gu(v,x,I)))),C)break;v=v.return}0<T.length&&(p=new _(p,E,null,n,d),h.push({event:p,listeners:T}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",p&&n!==zm&&(E=n.relatedTarget||n.fromElement)&&($s(E)||E[ai]))break e;if((_||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,_?(E=n.relatedTarget||n.toElement,_=c,E=E?$s(E):null,E!==null&&(C=Ro(E),E!==C||E.tag!==5&&E.tag!==6)&&(E=null)):(_=null,E=c),_!==E)){if(T=oE,x="onMouseLeave",S="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(T=lE,x="onPointerLeave",S="onPointerEnter",v="pointer"),C=_==null?p:ca(_),I=E==null?p:ca(E),p=new T(x,v+"leave",_,n,d),p.target=C,p.relatedTarget=I,x=null,$s(d)===c&&(T=new T(S,v+"enter",E,n,d),T.target=I,T.relatedTarget=C,x=T),C=x,_&&E)t:{for(T=_,S=E,v=0,I=T;I;I=Ho(I))v++;for(I=0,x=S;x;x=Ho(x))I++;for(;0<v-I;)T=Ho(T),v--;for(;0<I-v;)S=Ho(S),I--;for(;v--;){if(T===S||S!==null&&T===S.alternate)break t;T=Ho(T),S=Ho(S)}T=null}else T=null;_!==null&&vE(h,p,_,T,!1),E!==null&&C!==null&&vE(h,C,E,T,!0)}}e:{if(p=c?ca(c):window,_=p.nodeName&&p.nodeName.toLowerCase(),_==="select"||_==="input"&&p.type==="file")var U=Qx;else if(dE(p))if(kS)U=Zx;else{U=Yx;var B=Jx}else(_=p.nodeName)&&_.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(U=Xx);if(U&&(U=U(t,c))){CS(h,U,n,d);break e}B&&B(t,p,c),t==="focusout"&&(B=p._wrapperState)&&B.controlled&&p.type==="number"&&Mm(p,"number",p.value)}switch(B=c?ca(c):window,t){case"focusin":(dE(B)||B.contentEditable==="true")&&(la=B,Qm=c,Iu=null);break;case"focusout":Iu=Qm=la=null;break;case"mousedown":Jm=!0;break;case"contextmenu":case"mouseup":case"dragend":Jm=!1,gE(h,n,d);break;case"selectionchange":if(nD)break;case"keydown":case"keyup":gE(h,n,d)}var g;if(U_)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else aa?AS(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(RS&&n.locale!=="ko"&&(aa||y!=="onCompositionStart"?y==="onCompositionEnd"&&aa&&(g=SS()):($i=d,V_="value"in $i?$i.value:$i.textContent,aa=!0)),B=Ih(c,y),0<B.length&&(y=new aE(y,t,null,n,d),h.push({event:y,listeners:B}),g?y.data=g:(g=PS(n),g!==null&&(y.data=g)))),(g=qx?Wx(t,n):Hx(t,n))&&(c=Ih(c,"onBeforeInput"),0<c.length&&(d=new aE("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=g))}US(h,e)})}function Gu(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ih(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Bu(t,n),s!=null&&r.unshift(Gu(t,s,i)),s=Bu(t,e),s!=null&&r.push(Gu(t,s,i))),t=t.return}return r}function Ho(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vE(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Bu(n,s),l!=null&&o.unshift(Gu(n,l,a))):i||(l=Bu(n,s),l!=null&&o.push(Gu(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var oD=/\r\n?/g,aD=/\u0000|\uFFFD/g;function wE(t){return(typeof t=="string"?t:""+t).replace(oD,`
`).replace(aD,"")}function Td(t,e,n){if(e=wE(e),wE(t)!==e&&n)throw Error(H(425))}function Th(){}var Ym=null,Xm=null;function Zm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var eg=typeof setTimeout=="function"?setTimeout:void 0,lD=typeof clearTimeout=="function"?clearTimeout:void 0,EE=typeof Promise=="function"?Promise:void 0,uD=typeof queueMicrotask=="function"?queueMicrotask:typeof EE<"u"?function(t){return EE.resolve(null).then(t).catch(cD)}:eg;function cD(t){setTimeout(function(){throw t})}function Kp(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),$u(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$u(e)}function Ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function IE(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var al=Math.random().toString(36).slice(2),Sr="__reactFiber$"+al,Ku="__reactProps$"+al,ai="__reactContainer$"+al,tg="__reactEvents$"+al,dD="__reactListeners$"+al,hD="__reactHandles$"+al;function $s(t){var e=t[Sr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ai]||n[Sr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=IE(t);t!==null;){if(n=t[Sr])return n;t=IE(t)}return e}t=n,n=t.parentNode}return null}function Pc(t){return t=t[Sr]||t[ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ca(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function _f(t){return t[Ku]||null}var ng=[],da=-1;function _s(t){return{current:t}}function ze(t){0>da||(t.current=ng[da],ng[da]=null,da--)}function Ve(t,e){da++,ng[da]=t.current,t.current=e}var is={},on=_s(is),Cn=_s(!1),ro=is;function Na(t,e){var n=t.type.contextTypes;if(!n)return is;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function kn(t){return t=t.childContextTypes,t!=null}function Sh(){ze(Cn),ze(on)}function TE(t,e,n){if(on.current!==is)throw Error(H(168));Ve(on,e),Ve(Cn,n)}function jS(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(H(108,Jb(t)||"Unknown",i));return rt({},n,r)}function Rh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||is,ro=on.current,Ve(on,t),Ve(Cn,Cn.current),!0}function SE(t,e,n){var r=t.stateNode;if(!r)throw Error(H(169));n?(t=jS(t,e,ro),r.__reactInternalMemoizedMergedChildContext=t,ze(Cn),ze(on),Ve(on,t)):ze(Cn),Ve(Cn,n)}var Jr=null,yf=!1,Qp=!1;function zS(t){Jr===null?Jr=[t]:Jr.push(t)}function fD(t){yf=!0,zS(t)}function ys(){if(!Qp&&Jr!==null){Qp=!0;var t=0,e=be;try{var n=Jr;for(be=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Jr=null,yf=!1}catch(i){throw Jr!==null&&(Jr=Jr.slice(t+1)),fS(D_,ys),i}finally{be=e,Qp=!1}}return null}var ha=[],fa=0,Ah=null,Ph=0,Wn=[],Hn=0,io=null,Yr=1,Xr="";function Os(t,e){ha[fa++]=Ph,ha[fa++]=Ah,Ah=t,Ph=e}function $S(t,e,n){Wn[Hn++]=Yr,Wn[Hn++]=Xr,Wn[Hn++]=io,io=t;var r=Yr;t=Xr;var i=32-hr(r)-1;r&=~(1<<i),n+=1;var s=32-hr(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yr=1<<32-hr(e)+i|n<<i|r,Xr=s+t}else Yr=1<<s|n<<i|r,Xr=t}function j_(t){t.return!==null&&(Os(t,1),$S(t,1,0))}function z_(t){for(;t===Ah;)Ah=ha[--fa],ha[fa]=null,Ph=ha[--fa],ha[fa]=null;for(;t===io;)io=Wn[--Hn],Wn[Hn]=null,Xr=Wn[--Hn],Wn[Hn]=null,Yr=Wn[--Hn],Wn[Hn]=null}var Mn=null,Ln=null,Ge=!1,cr=null;function qS(t,e){var n=Kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function RE(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mn=t,Ln=Ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mn=t,Ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=io!==null?{id:Yr,overflow:Xr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mn=t,Ln=null,!0):!1;default:return!1}}function rg(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ig(t){if(Ge){var e=Ln;if(e){var n=e;if(!RE(t,e)){if(rg(t))throw Error(H(418));e=Ji(n.nextSibling);var r=Mn;e&&RE(t,e)?qS(r,n):(t.flags=t.flags&-4097|2,Ge=!1,Mn=t)}}else{if(rg(t))throw Error(H(418));t.flags=t.flags&-4097|2,Ge=!1,Mn=t}}}function AE(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mn=t}function Sd(t){if(t!==Mn)return!1;if(!Ge)return AE(t),Ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zm(t.type,t.memoizedProps)),e&&(e=Ln)){if(rg(t))throw WS(),Error(H(418));for(;e;)qS(t,e),e=Ji(e.nextSibling)}if(AE(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ln=Ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ln=null}}else Ln=Mn?Ji(t.stateNode.nextSibling):null;return!0}function WS(){for(var t=Ln;t;)t=Ji(t.nextSibling)}function Oa(){Ln=Mn=null,Ge=!1}function $_(t){cr===null?cr=[t]:cr.push(t)}var pD=pi.ReactCurrentBatchConfig;function Wl(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,t))}return t}function Rd(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function PE(t){var e=t._init;return e(t._payload)}function HS(t){function e(S,v){if(t){var I=S.deletions;I===null?(S.deletions=[v],S.flags|=16):I.push(v)}}function n(S,v){if(!t)return null;for(;v!==null;)e(S,v),v=v.sibling;return null}function r(S,v){for(S=new Map;v!==null;)v.key!==null?S.set(v.key,v):S.set(v.index,v),v=v.sibling;return S}function i(S,v){return S=es(S,v),S.index=0,S.sibling=null,S}function s(S,v,I){return S.index=I,t?(I=S.alternate,I!==null?(I=I.index,I<v?(S.flags|=2,v):I):(S.flags|=2,v)):(S.flags|=1048576,v)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function a(S,v,I,x){return v===null||v.tag!==6?(v=nm(I,S.mode,x),v.return=S,v):(v=i(v,I),v.return=S,v)}function l(S,v,I,x){var U=I.type;return U===oa?d(S,v,I.props.children,x,I.key):v!==null&&(v.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Mi&&PE(U)===v.type)?(x=i(v,I.props),x.ref=Wl(S,v,I),x.return=S,x):(x=Xd(I.type,I.key,I.props,null,S.mode,x),x.ref=Wl(S,v,I),x.return=S,x)}function c(S,v,I,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==I.containerInfo||v.stateNode.implementation!==I.implementation?(v=rm(I,S.mode,x),v.return=S,v):(v=i(v,I.children||[]),v.return=S,v)}function d(S,v,I,x,U){return v===null||v.tag!==7?(v=Xs(I,S.mode,x,U),v.return=S,v):(v=i(v,I),v.return=S,v)}function h(S,v,I){if(typeof v=="string"&&v!==""||typeof v=="number")return v=nm(""+v,S.mode,I),v.return=S,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case pd:return I=Xd(v.type,v.key,v.props,null,S.mode,I),I.ref=Wl(S,null,v),I.return=S,I;case sa:return v=rm(v,S.mode,I),v.return=S,v;case Mi:var x=v._init;return h(S,x(v._payload),I)}if(lu(v)||Bl(v))return v=Xs(v,S.mode,I,null),v.return=S,v;Rd(S,v)}return null}function p(S,v,I,x){var U=v!==null?v.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return U!==null?null:a(S,v,""+I,x);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case pd:return I.key===U?l(S,v,I,x):null;case sa:return I.key===U?c(S,v,I,x):null;case Mi:return U=I._init,p(S,v,U(I._payload),x)}if(lu(I)||Bl(I))return U!==null?null:d(S,v,I,x,null);Rd(S,I)}return null}function _(S,v,I,x,U){if(typeof x=="string"&&x!==""||typeof x=="number")return S=S.get(I)||null,a(v,S,""+x,U);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case pd:return S=S.get(x.key===null?I:x.key)||null,l(v,S,x,U);case sa:return S=S.get(x.key===null?I:x.key)||null,c(v,S,x,U);case Mi:var B=x._init;return _(S,v,I,B(x._payload),U)}if(lu(x)||Bl(x))return S=S.get(I)||null,d(v,S,x,U,null);Rd(v,x)}return null}function E(S,v,I,x){for(var U=null,B=null,g=v,y=v=0,R=null;g!==null&&y<I.length;y++){g.index>y?(R=g,g=null):R=g.sibling;var A=p(S,g,I[y],x);if(A===null){g===null&&(g=R);break}t&&g&&A.alternate===null&&e(S,g),v=s(A,v,y),B===null?U=A:B.sibling=A,B=A,g=R}if(y===I.length)return n(S,g),Ge&&Os(S,y),U;if(g===null){for(;y<I.length;y++)g=h(S,I[y],x),g!==null&&(v=s(g,v,y),B===null?U=g:B.sibling=g,B=g);return Ge&&Os(S,y),U}for(g=r(S,g);y<I.length;y++)R=_(g,S,y,I[y],x),R!==null&&(t&&R.alternate!==null&&g.delete(R.key===null?y:R.key),v=s(R,v,y),B===null?U=R:B.sibling=R,B=R);return t&&g.forEach(function(k){return e(S,k)}),Ge&&Os(S,y),U}function T(S,v,I,x){var U=Bl(I);if(typeof U!="function")throw Error(H(150));if(I=U.call(I),I==null)throw Error(H(151));for(var B=U=null,g=v,y=v=0,R=null,A=I.next();g!==null&&!A.done;y++,A=I.next()){g.index>y?(R=g,g=null):R=g.sibling;var k=p(S,g,A.value,x);if(k===null){g===null&&(g=R);break}t&&g&&k.alternate===null&&e(S,g),v=s(k,v,y),B===null?U=k:B.sibling=k,B=k,g=R}if(A.done)return n(S,g),Ge&&Os(S,y),U;if(g===null){for(;!A.done;y++,A=I.next())A=h(S,A.value,x),A!==null&&(v=s(A,v,y),B===null?U=A:B.sibling=A,B=A);return Ge&&Os(S,y),U}for(g=r(S,g);!A.done;y++,A=I.next())A=_(g,S,y,A.value,x),A!==null&&(t&&A.alternate!==null&&g.delete(A.key===null?y:A.key),v=s(A,v,y),B===null?U=A:B.sibling=A,B=A);return t&&g.forEach(function(b){return e(S,b)}),Ge&&Os(S,y),U}function C(S,v,I,x){if(typeof I=="object"&&I!==null&&I.type===oa&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case pd:e:{for(var U=I.key,B=v;B!==null;){if(B.key===U){if(U=I.type,U===oa){if(B.tag===7){n(S,B.sibling),v=i(B,I.props.children),v.return=S,S=v;break e}}else if(B.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Mi&&PE(U)===B.type){n(S,B.sibling),v=i(B,I.props),v.ref=Wl(S,B,I),v.return=S,S=v;break e}n(S,B);break}else e(S,B);B=B.sibling}I.type===oa?(v=Xs(I.props.children,S.mode,x,I.key),v.return=S,S=v):(x=Xd(I.type,I.key,I.props,null,S.mode,x),x.ref=Wl(S,v,I),x.return=S,S=x)}return o(S);case sa:e:{for(B=I.key;v!==null;){if(v.key===B)if(v.tag===4&&v.stateNode.containerInfo===I.containerInfo&&v.stateNode.implementation===I.implementation){n(S,v.sibling),v=i(v,I.children||[]),v.return=S,S=v;break e}else{n(S,v);break}else e(S,v);v=v.sibling}v=rm(I,S.mode,x),v.return=S,S=v}return o(S);case Mi:return B=I._init,C(S,v,B(I._payload),x)}if(lu(I))return E(S,v,I,x);if(Bl(I))return T(S,v,I,x);Rd(S,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,v!==null&&v.tag===6?(n(S,v.sibling),v=i(v,I),v.return=S,S=v):(n(S,v),v=nm(I,S.mode,x),v.return=S,S=v),o(S)):n(S,v)}return C}var La=HS(!0),GS=HS(!1),Ch=_s(null),kh=null,pa=null,q_=null;function W_(){q_=pa=kh=null}function H_(t){var e=Ch.current;ze(Ch),t._currentValue=e}function sg(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ta(t,e){kh=t,q_=pa=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Sn=!0),t.firstContext=null)}function er(t){var e=t._currentValue;if(q_!==t)if(t={context:t,memoizedValue:e,next:null},pa===null){if(kh===null)throw Error(H(308));pa=t,kh.dependencies={lanes:0,firstContext:t}}else pa=pa.next=t;return e}var qs=null;function G_(t){qs===null?qs=[t]:qs.push(t)}function KS(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,G_(e)):(n.next=i.next,i.next=n),e.interleaved=n,li(t,r)}function li(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fi=!1;function K_(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function QS(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ni(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Yi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,li(t,n)}return i=r.interleaved,i===null?(e.next=e,G_(r)):(e.next=i.next,i.next=e),r.interleaved=e,li(t,n)}function Hd(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,N_(t,n)}}function CE(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function bh(t,e,n,r){var i=t.updateQueue;Fi=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,d=c=l=null,a=s;do{var p=a.lane,_=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=t,T=a;switch(p=e,_=n,T.tag){case 1:if(E=T.payload,typeof E=="function"){h=E.call(_,h,p);break e}h=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=T.payload,p=typeof E=="function"?E.call(_,h,p):E,p==null)break e;h=rt({},h,p);break e;case 2:Fi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else _={eventTime:_,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=_,l=h):d=d.next=_,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(l=h),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);oo|=o,t.lanes=o,t.memoizedState=h}}function kE(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var Cc={},Or=_s(Cc),Qu=_s(Cc),Ju=_s(Cc);function Ws(t){if(t===Cc)throw Error(H(174));return t}function Q_(t,e){switch(Ve(Ju,e),Ve(Qu,t),Ve(Or,Cc),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Um(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Um(e,t)}ze(Or),Ve(Or,e)}function Va(){ze(Or),ze(Qu),ze(Ju)}function JS(t){Ws(Ju.current);var e=Ws(Or.current),n=Um(e,t.type);e!==n&&(Ve(Qu,t),Ve(Or,n))}function J_(t){Qu.current===t&&(ze(Or),ze(Qu))}var et=_s(0);function xh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Jp=[];function Y_(){for(var t=0;t<Jp.length;t++)Jp[t]._workInProgressVersionPrimary=null;Jp.length=0}var Gd=pi.ReactCurrentDispatcher,Yp=pi.ReactCurrentBatchConfig,so=0,tt=null,Rt=null,bt=null,Dh=!1,Tu=!1,Yu=0,mD=0;function Zt(){throw Error(H(321))}function X_(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gr(t[n],e[n]))return!1;return!0}function Z_(t,e,n,r,i,s){if(so=s,tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Gd.current=t===null||t.memoizedState===null?vD:wD,t=n(r,i),Tu){s=0;do{if(Tu=!1,Yu=0,25<=s)throw Error(H(301));s+=1,bt=Rt=null,e.updateQueue=null,Gd.current=ED,t=n(r,i)}while(Tu)}if(Gd.current=Nh,e=Rt!==null&&Rt.next!==null,so=0,bt=Rt=tt=null,Dh=!1,e)throw Error(H(300));return t}function ey(){var t=Yu!==0;return Yu=0,t}function Tr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?tt.memoizedState=bt=t:bt=bt.next=t,bt}function tr(){if(Rt===null){var t=tt.alternate;t=t!==null?t.memoizedState:null}else t=Rt.next;var e=bt===null?tt.memoizedState:bt.next;if(e!==null)bt=e,Rt=t;else{if(t===null)throw Error(H(310));Rt=t,t={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},bt===null?tt.memoizedState=bt=t:bt=bt.next=t}return bt}function Xu(t,e){return typeof e=="function"?e(t):e}function Xp(t){var e=tr(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=Rt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((so&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,tt.lanes|=d,oo|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,gr(r,e.memoizedState)||(Sn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,tt.lanes|=s,oo|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zp(t){var e=tr(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);gr(s,e.memoizedState)||(Sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function YS(){}function XS(t,e){var n=tt,r=tr(),i=e(),s=!gr(r.memoizedState,i);if(s&&(r.memoizedState=i,Sn=!0),r=r.queue,ty(tR.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||bt!==null&&bt.memoizedState.tag&1){if(n.flags|=2048,Zu(9,eR.bind(null,n,r,i,e),void 0,null),Dt===null)throw Error(H(349));so&30||ZS(n,e,i)}return i}function ZS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=tt.updateQueue,e===null?(e={lastEffect:null,stores:null},tt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function eR(t,e,n,r){e.value=n,e.getSnapshot=r,nR(e)&&rR(t)}function tR(t,e,n){return n(function(){nR(e)&&rR(t)})}function nR(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gr(t,n)}catch{return!0}}function rR(t){var e=li(t,1);e!==null&&fr(e,t,1,-1)}function bE(t){var e=Tr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xu,lastRenderedState:t},e.queue=t,t=t.dispatch=yD.bind(null,tt,t),[e.memoizedState,t]}function Zu(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=tt.updateQueue,e===null?(e={lastEffect:null,stores:null},tt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function iR(){return tr().memoizedState}function Kd(t,e,n,r){var i=Tr();tt.flags|=t,i.memoizedState=Zu(1|e,n,void 0,r===void 0?null:r)}function vf(t,e,n,r){var i=tr();r=r===void 0?null:r;var s=void 0;if(Rt!==null){var o=Rt.memoizedState;if(s=o.destroy,r!==null&&X_(r,o.deps)){i.memoizedState=Zu(e,n,s,r);return}}tt.flags|=t,i.memoizedState=Zu(1|e,n,s,r)}function xE(t,e){return Kd(8390656,8,t,e)}function ty(t,e){return vf(2048,8,t,e)}function sR(t,e){return vf(4,2,t,e)}function oR(t,e){return vf(4,4,t,e)}function aR(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function lR(t,e,n){return n=n!=null?n.concat([t]):null,vf(4,4,aR.bind(null,e,t),n)}function ny(){}function uR(t,e){var n=tr();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&X_(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function cR(t,e){var n=tr();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&X_(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function dR(t,e,n){return so&21?(gr(n,e)||(n=gS(),tt.lanes|=n,oo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Sn=!0),t.memoizedState=n)}function gD(t,e){var n=be;be=n!==0&&4>n?n:4,t(!0);var r=Yp.transition;Yp.transition={};try{t(!1),e()}finally{be=n,Yp.transition=r}}function hR(){return tr().memoizedState}function _D(t,e,n){var r=Zi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fR(t))pR(e,n);else if(n=KS(t,e,n,r),n!==null){var i=mn();fr(n,t,r,i),mR(n,e,r)}}function yD(t,e,n){var r=Zi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fR(t))pR(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,gr(a,o)){var l=e.interleaved;l===null?(i.next=i,G_(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=KS(t,e,i,r),n!==null&&(i=mn(),fr(n,t,r,i),mR(n,e,r))}}function fR(t){var e=t.alternate;return t===tt||e!==null&&e===tt}function pR(t,e){Tu=Dh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function mR(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,N_(t,n)}}var Nh={readContext:er,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useInsertionEffect:Zt,useLayoutEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useMutableSource:Zt,useSyncExternalStore:Zt,useId:Zt,unstable_isNewReconciler:!1},vD={readContext:er,useCallback:function(t,e){return Tr().memoizedState=[t,e===void 0?null:e],t},useContext:er,useEffect:xE,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Kd(4194308,4,aR.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Kd(4194308,4,t,e)},useInsertionEffect:function(t,e){return Kd(4,2,t,e)},useMemo:function(t,e){var n=Tr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Tr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=_D.bind(null,tt,t),[r.memoizedState,t]},useRef:function(t){var e=Tr();return t={current:t},e.memoizedState=t},useState:bE,useDebugValue:ny,useDeferredValue:function(t){return Tr().memoizedState=t},useTransition:function(){var t=bE(!1),e=t[0];return t=gD.bind(null,t[1]),Tr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=tt,i=Tr();if(Ge){if(n===void 0)throw Error(H(407));n=n()}else{if(n=e(),Dt===null)throw Error(H(349));so&30||ZS(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,xE(tR.bind(null,r,s,t),[t]),r.flags|=2048,Zu(9,eR.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Tr(),e=Dt.identifierPrefix;if(Ge){var n=Xr,r=Yr;n=(r&~(1<<32-hr(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Yu++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=mD++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},wD={readContext:er,useCallback:uR,useContext:er,useEffect:ty,useImperativeHandle:lR,useInsertionEffect:sR,useLayoutEffect:oR,useMemo:cR,useReducer:Xp,useRef:iR,useState:function(){return Xp(Xu)},useDebugValue:ny,useDeferredValue:function(t){var e=tr();return dR(e,Rt.memoizedState,t)},useTransition:function(){var t=Xp(Xu)[0],e=tr().memoizedState;return[t,e]},useMutableSource:YS,useSyncExternalStore:XS,useId:hR,unstable_isNewReconciler:!1},ED={readContext:er,useCallback:uR,useContext:er,useEffect:ty,useImperativeHandle:lR,useInsertionEffect:sR,useLayoutEffect:oR,useMemo:cR,useReducer:Zp,useRef:iR,useState:function(){return Zp(Xu)},useDebugValue:ny,useDeferredValue:function(t){var e=tr();return Rt===null?e.memoizedState=t:dR(e,Rt.memoizedState,t)},useTransition:function(){var t=Zp(Xu)[0],e=tr().memoizedState;return[t,e]},useMutableSource:YS,useSyncExternalStore:XS,useId:hR,unstable_isNewReconciler:!1};function ar(t,e){if(t&&t.defaultProps){e=rt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function og(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:rt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wf={isMounted:function(t){return(t=t._reactInternals)?Ro(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=mn(),i=Zi(t),s=ni(r,i);s.payload=e,n!=null&&(s.callback=n),e=Yi(t,s,i),e!==null&&(fr(e,t,i,r),Hd(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=mn(),i=Zi(t),s=ni(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Yi(t,s,i),e!==null&&(fr(e,t,i,r),Hd(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mn(),r=Zi(t),i=ni(n,r);i.tag=2,e!=null&&(i.callback=e),e=Yi(t,i,r),e!==null&&(fr(e,t,r,n),Hd(e,t,r))}};function DE(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Wu(n,r)||!Wu(i,s):!0}function gR(t,e,n){var r=!1,i=is,s=e.contextType;return typeof s=="object"&&s!==null?s=er(s):(i=kn(e)?ro:on.current,r=e.contextTypes,s=(r=r!=null)?Na(t,i):is),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wf,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function NE(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&wf.enqueueReplaceState(e,e.state,null)}function ag(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},K_(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=er(s):(s=kn(e)?ro:on.current,i.context=Na(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(og(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&wf.enqueueReplaceState(i,i.state,null),bh(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ma(t,e){try{var n="",r=e;do n+=Qb(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function em(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function lg(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ID=typeof WeakMap=="function"?WeakMap:Map;function _R(t,e,n){n=ni(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Lh||(Lh=!0,yg=r),lg(t,e)},n}function yR(t,e,n){n=ni(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){lg(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){lg(t,e),typeof r!="function"&&(Xi===null?Xi=new Set([this]):Xi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function OE(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ID;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=VD.bind(null,t,e,n),e.then(t,t))}function LE(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function VE(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ni(-1,1),e.tag=2,Yi(n,e,1))),n.lanes|=1),t)}var TD=pi.ReactCurrentOwner,Sn=!1;function dn(t,e,n,r){e.child=t===null?GS(e,null,n,r):La(e,t.child,n,r)}function ME(t,e,n,r,i){n=n.render;var s=e.ref;return Ta(e,i),r=Z_(t,e,n,r,s,i),n=ey(),t!==null&&!Sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ui(t,e,i)):(Ge&&n&&j_(e),e.flags|=1,dn(t,e,r,i),e.child)}function FE(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!cy(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,vR(t,e,s,r,i)):(t=Xd(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wu,n(o,r)&&t.ref===e.ref)return ui(t,e,i)}return e.flags|=1,t=es(s,r),t.ref=e.ref,t.return=e,e.child=t}function vR(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Wu(s,r)&&t.ref===e.ref)if(Sn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Sn=!0);else return e.lanes=t.lanes,ui(t,e,i)}return ug(t,e,n,r,i)}function wR(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ve(ga,Nn),Nn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ve(ga,Nn),Nn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ve(ga,Nn),Nn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ve(ga,Nn),Nn|=r;return dn(t,e,i,n),e.child}function ER(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ug(t,e,n,r,i){var s=kn(n)?ro:on.current;return s=Na(e,s),Ta(e,i),n=Z_(t,e,n,r,s,i),r=ey(),t!==null&&!Sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ui(t,e,i)):(Ge&&r&&j_(e),e.flags|=1,dn(t,e,n,i),e.child)}function UE(t,e,n,r,i){if(kn(n)){var s=!0;Rh(e)}else s=!1;if(Ta(e,i),e.stateNode===null)Qd(t,e),gR(e,n,r),ag(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=er(c):(c=kn(n)?ro:on.current,c=Na(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&NE(e,o,r,c),Fi=!1;var p=e.memoizedState;o.state=p,bh(e,r,o,i),l=e.memoizedState,a!==r||p!==l||Cn.current||Fi?(typeof d=="function"&&(og(e,n,d,r),l=e.memoizedState),(a=Fi||DE(e,n,a,r,p,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,QS(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ar(e.type,a),o.props=c,h=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=er(l):(l=kn(n)?ro:on.current,l=Na(e,l));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||p!==l)&&NE(e,o,r,l),Fi=!1,p=e.memoizedState,o.state=p,bh(e,r,o,i);var E=e.memoizedState;a!==h||p!==E||Cn.current||Fi?(typeof _=="function"&&(og(e,n,_,r),E=e.memoizedState),(c=Fi||DE(e,n,c,r,p,E,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=E),o.props=r,o.state=E,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return cg(t,e,n,r,s,i)}function cg(t,e,n,r,i,s){ER(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&SE(e,n,!1),ui(t,e,s);r=e.stateNode,TD.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=La(e,t.child,null,s),e.child=La(e,null,a,s)):dn(t,e,a,s),e.memoizedState=r.state,i&&SE(e,n,!0),e.child}function IR(t){var e=t.stateNode;e.pendingContext?TE(t,e.pendingContext,e.pendingContext!==e.context):e.context&&TE(t,e.context,!1),Q_(t,e.containerInfo)}function BE(t,e,n,r,i){return Oa(),$_(i),e.flags|=256,dn(t,e,n,r),e.child}var dg={dehydrated:null,treeContext:null,retryLane:0};function hg(t){return{baseLanes:t,cachePool:null,transitions:null}}function TR(t,e,n){var r=e.pendingProps,i=et.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ve(et,i&1),t===null)return ig(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Tf(o,r,0,null),t=Xs(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=hg(n),e.memoizedState=dg,t):ry(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return SD(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=es(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=es(a,s):(s=Xs(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?hg(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=dg,r}return s=t.child,t=s.sibling,r=es(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ry(t,e){return e=Tf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ad(t,e,n,r){return r!==null&&$_(r),La(e,t.child,null,n),t=ry(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function SD(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=em(Error(H(422))),Ad(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Tf({mode:"visible",children:r.children},i,0,null),s=Xs(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&La(e,t.child,null,o),e.child.memoizedState=hg(o),e.memoizedState=dg,s);if(!(e.mode&1))return Ad(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(H(419)),r=em(s,r,void 0),Ad(t,e,o,r)}if(a=(o&t.childLanes)!==0,Sn||a){if(r=Dt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,li(t,i),fr(r,t,i,-1))}return uy(),r=em(Error(H(421))),Ad(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=MD.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ln=Ji(i.nextSibling),Mn=e,Ge=!0,cr=null,t!==null&&(Wn[Hn++]=Yr,Wn[Hn++]=Xr,Wn[Hn++]=io,Yr=t.id,Xr=t.overflow,io=e),e=ry(e,r.children),e.flags|=4096,e)}function jE(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),sg(t.return,e,n)}function tm(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function SR(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(dn(t,e,r.children,n),r=et.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jE(t,n,e);else if(t.tag===19)jE(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ve(et,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&xh(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),tm(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&xh(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}tm(e,!0,n,null,s);break;case"together":tm(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Qd(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ui(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),oo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,n=es(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=es(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function RD(t,e,n){switch(e.tag){case 3:IR(e),Oa();break;case 5:JS(e);break;case 1:kn(e.type)&&Rh(e);break;case 4:Q_(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ve(Ch,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ve(et,et.current&1),e.flags|=128,null):n&e.child.childLanes?TR(t,e,n):(Ve(et,et.current&1),t=ui(t,e,n),t!==null?t.sibling:null);Ve(et,et.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return SR(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ve(et,et.current),r)break;return null;case 22:case 23:return e.lanes=0,wR(t,e,n)}return ui(t,e,n)}var RR,fg,AR,PR;RR=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fg=function(){};AR=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ws(Or.current);var s=null;switch(n){case"input":i=Lm(t,i),r=Lm(t,r),s=[];break;case"select":i=rt({},i,{value:void 0}),r=rt({},r,{value:void 0}),s=[];break;case"textarea":i=Fm(t,i),r=Fm(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Th)}Bm(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Fu.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Fu.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Be("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};PR=function(t,e,n,r){n!==r&&(e.flags|=4)};function Hl(t,e){if(!Ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function en(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function AD(t,e,n){var r=e.pendingProps;switch(z_(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return kn(e.type)&&Sh(),en(e),null;case 3:return r=e.stateNode,Va(),ze(Cn),ze(on),Y_(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Sd(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,cr!==null&&(Eg(cr),cr=null))),fg(t,e),en(e),null;case 5:J_(e);var i=Ws(Ju.current);if(n=e.type,t!==null&&e.stateNode!=null)AR(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(H(166));return en(e),null}if(t=Ws(Or.current),Sd(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Sr]=e,r[Ku]=s,t=(e.mode&1)!==0,n){case"dialog":Be("cancel",r),Be("close",r);break;case"iframe":case"object":case"embed":Be("load",r);break;case"video":case"audio":for(i=0;i<cu.length;i++)Be(cu[i],r);break;case"source":Be("error",r);break;case"img":case"image":case"link":Be("error",r),Be("load",r);break;case"details":Be("toggle",r);break;case"input":Jw(r,s),Be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Be("invalid",r);break;case"textarea":Xw(r,s),Be("invalid",r)}Bm(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Td(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Td(r.textContent,a,t),i=["children",""+a]):Fu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Be("scroll",r)}switch(n){case"input":md(r),Yw(r,s,!0);break;case"textarea":md(r),Zw(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Th)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=tS(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Sr]=e,t[Ku]=r,RR(t,e,!1,!1),e.stateNode=t;e:{switch(o=jm(n,r),n){case"dialog":Be("cancel",t),Be("close",t),i=r;break;case"iframe":case"object":case"embed":Be("load",t),i=r;break;case"video":case"audio":for(i=0;i<cu.length;i++)Be(cu[i],t);i=r;break;case"source":Be("error",t),i=r;break;case"img":case"image":case"link":Be("error",t),Be("load",t),i=r;break;case"details":Be("toggle",t),i=r;break;case"input":Jw(t,r),i=Lm(t,r),Be("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=rt({},r,{value:void 0}),Be("invalid",t);break;case"textarea":Xw(t,r),i=Fm(t,r),Be("invalid",t);break;default:i=r}Bm(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?iS(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&nS(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Uu(t,l):typeof l=="number"&&Uu(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Be("scroll",t):l!=null&&P_(t,s,l,o))}switch(n){case"input":md(t),Yw(t,r,!1);break;case"textarea":md(t),Zw(t);break;case"option":r.value!=null&&t.setAttribute("value",""+rs(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?va(t,!!r.multiple,s,!1):r.defaultValue!=null&&va(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Th)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(t&&e.stateNode!=null)PR(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(H(166));if(n=Ws(Ju.current),Ws(Or.current),Sd(e)){if(r=e.stateNode,n=e.memoizedProps,r[Sr]=e,(s=r.nodeValue!==n)&&(t=Mn,t!==null))switch(t.tag){case 3:Td(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Td(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Sr]=e,e.stateNode=r}return en(e),null;case 13:if(ze(et),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ge&&Ln!==null&&e.mode&1&&!(e.flags&128))WS(),Oa(),e.flags|=98560,s=!1;else if(s=Sd(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(H(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(H(317));s[Sr]=e}else Oa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else cr!==null&&(Eg(cr),cr=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||et.current&1?At===0&&(At=3):uy())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return Va(),fg(t,e),t===null&&Hu(e.stateNode.containerInfo),en(e),null;case 10:return H_(e.type._context),en(e),null;case 17:return kn(e.type)&&Sh(),en(e),null;case 19:if(ze(et),s=e.memoizedState,s===null)return en(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Hl(s,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=xh(t),o!==null){for(e.flags|=128,Hl(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ve(et,et.current&1|2),e.child}t=t.sibling}s.tail!==null&&pt()>Fa&&(e.flags|=128,r=!0,Hl(s,!1),e.lanes=4194304)}else{if(!r)if(t=xh(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Hl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ge)return en(e),null}else 2*pt()-s.renderingStartTime>Fa&&n!==1073741824&&(e.flags|=128,r=!0,Hl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=pt(),e.sibling=null,n=et.current,Ve(et,r?n&1|2:n&1),e):(en(e),null);case 22:case 23:return ly(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Nn&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function PD(t,e){switch(z_(e),e.tag){case 1:return kn(e.type)&&Sh(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Va(),ze(Cn),ze(on),Y_(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return J_(e),null;case 13:if(ze(et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));Oa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ze(et),null;case 4:return Va(),null;case 10:return H_(e.type._context),null;case 22:case 23:return ly(),null;case 24:return null;default:return null}}var Pd=!1,nn=!1,CD=typeof WeakSet=="function"?WeakSet:Set,ne=null;function ma(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ot(t,e,r)}else n.current=null}function pg(t,e,n){try{n()}catch(r){ot(t,e,r)}}var zE=!1;function kD(t,e){if(Ym=wh,t=DS(),B_(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,p=null;t:for(;;){for(var _;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(_=h.firstChild)!==null;)p=h,h=_;for(;;){if(h===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++d===r&&(l=o),(_=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xm={focusedElem:t,selectionRange:n},wh=!1,ne=e;ne!==null;)if(e=ne,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ne=t;else for(;ne!==null;){e=ne;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var T=E.memoizedProps,C=E.memoizedState,S=e.stateNode,v=S.getSnapshotBeforeUpdate(e.elementType===e.type?T:ar(e.type,T),C);S.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(x){ot(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,ne=t;break}ne=e.return}return E=zE,zE=!1,E}function Su(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&pg(e,n,s)}i=i.next}while(i!==r)}}function Ef(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function mg(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function CR(t){var e=t.alternate;e!==null&&(t.alternate=null,CR(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Sr],delete e[Ku],delete e[tg],delete e[dD],delete e[hD])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function kR(t){return t.tag===5||t.tag===3||t.tag===4}function $E(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||kR(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Th));else if(r!==4&&(t=t.child,t!==null))for(gg(t,e,n),t=t.sibling;t!==null;)gg(t,e,n),t=t.sibling}function _g(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(_g(t,e,n),t=t.sibling;t!==null;)_g(t,e,n),t=t.sibling}var Wt=null,lr=!1;function bi(t,e,n){for(n=n.child;n!==null;)bR(t,e,n),n=n.sibling}function bR(t,e,n){if(Nr&&typeof Nr.onCommitFiberUnmount=="function")try{Nr.onCommitFiberUnmount(ff,n)}catch{}switch(n.tag){case 5:nn||ma(n,e);case 6:var r=Wt,i=lr;Wt=null,bi(t,e,n),Wt=r,lr=i,Wt!==null&&(lr?(t=Wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Wt.removeChild(n.stateNode));break;case 18:Wt!==null&&(lr?(t=Wt,n=n.stateNode,t.nodeType===8?Kp(t.parentNode,n):t.nodeType===1&&Kp(t,n),$u(t)):Kp(Wt,n.stateNode));break;case 4:r=Wt,i=lr,Wt=n.stateNode.containerInfo,lr=!0,bi(t,e,n),Wt=r,lr=i;break;case 0:case 11:case 14:case 15:if(!nn&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&pg(n,e,o),i=i.next}while(i!==r)}bi(t,e,n);break;case 1:if(!nn&&(ma(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ot(n,e,a)}bi(t,e,n);break;case 21:bi(t,e,n);break;case 22:n.mode&1?(nn=(r=nn)||n.memoizedState!==null,bi(t,e,n),nn=r):bi(t,e,n);break;default:bi(t,e,n)}}function qE(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new CD),e.forEach(function(r){var i=FD.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function or(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Wt=a.stateNode,lr=!1;break e;case 3:Wt=a.stateNode.containerInfo,lr=!0;break e;case 4:Wt=a.stateNode.containerInfo,lr=!0;break e}a=a.return}if(Wt===null)throw Error(H(160));bR(s,o,i),Wt=null,lr=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){ot(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xR(e,t),e=e.sibling}function xR(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(or(e,t),Ir(t),r&4){try{Su(3,t,t.return),Ef(3,t)}catch(T){ot(t,t.return,T)}try{Su(5,t,t.return)}catch(T){ot(t,t.return,T)}}break;case 1:or(e,t),Ir(t),r&512&&n!==null&&ma(n,n.return);break;case 5:if(or(e,t),Ir(t),r&512&&n!==null&&ma(n,n.return),t.flags&32){var i=t.stateNode;try{Uu(i,"")}catch(T){ot(t,t.return,T)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Z0(i,s),jm(a,o);var c=jm(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?iS(i,h):d==="dangerouslySetInnerHTML"?nS(i,h):d==="children"?Uu(i,h):P_(i,d,h,c)}switch(a){case"input":Vm(i,s);break;case"textarea":eS(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?va(i,!!s.multiple,_,!1):p!==!!s.multiple&&(s.defaultValue!=null?va(i,!!s.multiple,s.defaultValue,!0):va(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ku]=s}catch(T){ot(t,t.return,T)}}break;case 6:if(or(e,t),Ir(t),r&4){if(t.stateNode===null)throw Error(H(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(T){ot(t,t.return,T)}}break;case 3:if(or(e,t),Ir(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$u(e.containerInfo)}catch(T){ot(t,t.return,T)}break;case 4:or(e,t),Ir(t);break;case 13:or(e,t),Ir(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(oy=pt())),r&4&&qE(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(nn=(c=nn)||d,or(e,t),nn=c):or(e,t),Ir(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(ne=t,d=t.child;d!==null;){for(h=ne=d;ne!==null;){switch(p=ne,_=p.child,p.tag){case 0:case 11:case 14:case 15:Su(4,p,p.return);break;case 1:ma(p,p.return);var E=p.stateNode;if(typeof E.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(T){ot(r,n,T)}}break;case 5:ma(p,p.return);break;case 22:if(p.memoizedState!==null){HE(h);continue}}_!==null?(_.return=p,ne=_):HE(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=rS("display",o))}catch(T){ot(t,t.return,T)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(T){ot(t,t.return,T)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:or(e,t),Ir(t),r&4&&qE(t);break;case 21:break;default:or(e,t),Ir(t)}}function Ir(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(kR(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Uu(i,""),r.flags&=-33);var s=$E(t);_g(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=$E(t);gg(t,a,o);break;default:throw Error(H(161))}}catch(l){ot(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function bD(t,e,n){ne=t,DR(t)}function DR(t,e,n){for(var r=(t.mode&1)!==0;ne!==null;){var i=ne,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Pd;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||nn;a=Pd;var c=nn;if(Pd=o,(nn=l)&&!c)for(ne=i;ne!==null;)o=ne,l=o.child,o.tag===22&&o.memoizedState!==null?GE(i):l!==null?(l.return=o,ne=l):GE(i);for(;s!==null;)ne=s,DR(s),s=s.sibling;ne=i,Pd=a,nn=c}WE(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,ne=s):WE(t)}}function WE(t){for(;ne!==null;){var e=ne;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nn||Ef(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!nn)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ar(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&kE(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}kE(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&$u(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}nn||e.flags&512&&mg(e)}catch(p){ot(e,e.return,p)}}if(e===t){ne=null;break}if(n=e.sibling,n!==null){n.return=e.return,ne=n;break}ne=e.return}}function HE(t){for(;ne!==null;){var e=ne;if(e===t){ne=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ne=n;break}ne=e.return}}function GE(t){for(;ne!==null;){var e=ne;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ef(4,e)}catch(l){ot(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ot(e,i,l)}}var s=e.return;try{mg(e)}catch(l){ot(e,s,l)}break;case 5:var o=e.return;try{mg(e)}catch(l){ot(e,o,l)}}}catch(l){ot(e,e.return,l)}if(e===t){ne=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ne=a;break}ne=e.return}}var xD=Math.ceil,Oh=pi.ReactCurrentDispatcher,iy=pi.ReactCurrentOwner,Yn=pi.ReactCurrentBatchConfig,Re=0,Dt=null,Et=null,Kt=0,Nn=0,ga=_s(0),At=0,ec=null,oo=0,If=0,sy=0,Ru=null,Tn=null,oy=0,Fa=1/0,Qr=null,Lh=!1,yg=null,Xi=null,Cd=!1,qi=null,Vh=0,Au=0,vg=null,Jd=-1,Yd=0;function mn(){return Re&6?pt():Jd!==-1?Jd:Jd=pt()}function Zi(t){return t.mode&1?Re&2&&Kt!==0?Kt&-Kt:pD.transition!==null?(Yd===0&&(Yd=gS()),Yd):(t=be,t!==0||(t=window.event,t=t===void 0?16:TS(t.type)),t):1}function fr(t,e,n,r){if(50<Au)throw Au=0,vg=null,Error(H(185));Rc(t,n,r),(!(Re&2)||t!==Dt)&&(t===Dt&&(!(Re&2)&&(If|=n),At===4&&Bi(t,Kt)),bn(t,r),n===1&&Re===0&&!(e.mode&1)&&(Fa=pt()+500,yf&&ys()))}function bn(t,e){var n=t.callbackNode;px(t,e);var r=vh(t,t===Dt?Kt:0);if(r===0)n!==null&&nE(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&nE(n),e===1)t.tag===0?fD(KE.bind(null,t)):zS(KE.bind(null,t)),uD(function(){!(Re&6)&&ys()}),n=null;else{switch(_S(r)){case 1:n=D_;break;case 4:n=pS;break;case 16:n=yh;break;case 536870912:n=mS;break;default:n=yh}n=BR(n,NR.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function NR(t,e){if(Jd=-1,Yd=0,Re&6)throw Error(H(327));var n=t.callbackNode;if(Sa()&&t.callbackNode!==n)return null;var r=vh(t,t===Dt?Kt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Mh(t,r);else{e=r;var i=Re;Re|=2;var s=LR();(Dt!==t||Kt!==e)&&(Qr=null,Fa=pt()+500,Ys(t,e));do try{OD();break}catch(a){OR(t,a)}while(!0);W_(),Oh.current=s,Re=i,Et!==null?e=0:(Dt=null,Kt=0,e=At)}if(e!==0){if(e===2&&(i=Hm(t),i!==0&&(r=i,e=wg(t,i))),e===1)throw n=ec,Ys(t,0),Bi(t,r),bn(t,pt()),n;if(e===6)Bi(t,r);else{if(i=t.current.alternate,!(r&30)&&!DD(i)&&(e=Mh(t,r),e===2&&(s=Hm(t),s!==0&&(r=s,e=wg(t,s))),e===1))throw n=ec,Ys(t,0),Bi(t,r),bn(t,pt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(H(345));case 2:Ls(t,Tn,Qr);break;case 3:if(Bi(t,r),(r&130023424)===r&&(e=oy+500-pt(),10<e)){if(vh(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){mn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=eg(Ls.bind(null,t,Tn,Qr),e);break}Ls(t,Tn,Qr);break;case 4:if(Bi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-hr(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=pt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xD(r/1960))-r,10<r){t.timeoutHandle=eg(Ls.bind(null,t,Tn,Qr),r);break}Ls(t,Tn,Qr);break;case 5:Ls(t,Tn,Qr);break;default:throw Error(H(329))}}}return bn(t,pt()),t.callbackNode===n?NR.bind(null,t):null}function wg(t,e){var n=Ru;return t.current.memoizedState.isDehydrated&&(Ys(t,e).flags|=256),t=Mh(t,e),t!==2&&(e=Tn,Tn=n,e!==null&&Eg(e)),t}function Eg(t){Tn===null?Tn=t:Tn.push.apply(Tn,t)}function DD(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!gr(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bi(t,e){for(e&=~sy,e&=~If,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-hr(e),r=1<<n;t[n]=-1,e&=~r}}function KE(t){if(Re&6)throw Error(H(327));Sa();var e=vh(t,0);if(!(e&1))return bn(t,pt()),null;var n=Mh(t,e);if(t.tag!==0&&n===2){var r=Hm(t);r!==0&&(e=r,n=wg(t,r))}if(n===1)throw n=ec,Ys(t,0),Bi(t,e),bn(t,pt()),n;if(n===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ls(t,Tn,Qr),bn(t,pt()),null}function ay(t,e){var n=Re;Re|=1;try{return t(e)}finally{Re=n,Re===0&&(Fa=pt()+500,yf&&ys())}}function ao(t){qi!==null&&qi.tag===0&&!(Re&6)&&Sa();var e=Re;Re|=1;var n=Yn.transition,r=be;try{if(Yn.transition=null,be=1,t)return t()}finally{be=r,Yn.transition=n,Re=e,!(Re&6)&&ys()}}function ly(){Nn=ga.current,ze(ga)}function Ys(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,lD(n)),Et!==null)for(n=Et.return;n!==null;){var r=n;switch(z_(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Sh();break;case 3:Va(),ze(Cn),ze(on),Y_();break;case 5:J_(r);break;case 4:Va();break;case 13:ze(et);break;case 19:ze(et);break;case 10:H_(r.type._context);break;case 22:case 23:ly()}n=n.return}if(Dt=t,Et=t=es(t.current,null),Kt=Nn=e,At=0,ec=null,sy=If=oo=0,Tn=Ru=null,qs!==null){for(e=0;e<qs.length;e++)if(n=qs[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}qs=null}return t}function OR(t,e){do{var n=Et;try{if(W_(),Gd.current=Nh,Dh){for(var r=tt.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Dh=!1}if(so=0,bt=Rt=tt=null,Tu=!1,Yu=0,iy.current=null,n===null||n.return===null){At=1,ec=e,Et=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=LE(o);if(_!==null){_.flags&=-257,VE(_,o,a,s,e),_.mode&1&&OE(s,c,e),e=_,l=c;var E=e.updateQueue;if(E===null){var T=new Set;T.add(l),e.updateQueue=T}else E.add(l);break e}else{if(!(e&1)){OE(s,c,e),uy();break e}l=Error(H(426))}}else if(Ge&&a.mode&1){var C=LE(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),VE(C,o,a,s,e),$_(Ma(l,a));break e}}s=l=Ma(l,a),At!==4&&(At=2),Ru===null?Ru=[s]:Ru.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=_R(s,l,e);CE(s,S);break e;case 1:a=l;var v=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Xi===null||!Xi.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=yR(s,a,e);CE(s,x);break e}}s=s.return}while(s!==null)}MR(n)}catch(U){e=U,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(!0)}function LR(){var t=Oh.current;return Oh.current=Nh,t===null?Nh:t}function uy(){(At===0||At===3||At===2)&&(At=4),Dt===null||!(oo&268435455)&&!(If&268435455)||Bi(Dt,Kt)}function Mh(t,e){var n=Re;Re|=2;var r=LR();(Dt!==t||Kt!==e)&&(Qr=null,Ys(t,e));do try{ND();break}catch(i){OR(t,i)}while(!0);if(W_(),Re=n,Oh.current=r,Et!==null)throw Error(H(261));return Dt=null,Kt=0,At}function ND(){for(;Et!==null;)VR(Et)}function OD(){for(;Et!==null&&!sx();)VR(Et)}function VR(t){var e=UR(t.alternate,t,Nn);t.memoizedProps=t.pendingProps,e===null?MR(t):Et=e,iy.current=null}function MR(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=PD(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,Et=null;return}}else if(n=AD(n,e,Nn),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);At===0&&(At=5)}function Ls(t,e,n){var r=be,i=Yn.transition;try{Yn.transition=null,be=1,LD(t,e,n,r)}finally{Yn.transition=i,be=r}return null}function LD(t,e,n,r){do Sa();while(qi!==null);if(Re&6)throw Error(H(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(mx(t,s),t===Dt&&(Et=Dt=null,Kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Cd||(Cd=!0,BR(yh,function(){return Sa(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yn.transition,Yn.transition=null;var o=be;be=1;var a=Re;Re|=4,iy.current=null,kD(t,n),xR(n,t),tD(Xm),wh=!!Ym,Xm=Ym=null,t.current=n,bD(n),ox(),Re=a,be=o,Yn.transition=s}else t.current=n;if(Cd&&(Cd=!1,qi=t,Vh=i),s=t.pendingLanes,s===0&&(Xi=null),ux(n.stateNode),bn(t,pt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Lh)throw Lh=!1,t=yg,yg=null,t;return Vh&1&&t.tag!==0&&Sa(),s=t.pendingLanes,s&1?t===vg?Au++:(Au=0,vg=t):Au=0,ys(),null}function Sa(){if(qi!==null){var t=_S(Vh),e=Yn.transition,n=be;try{if(Yn.transition=null,be=16>t?16:t,qi===null)var r=!1;else{if(t=qi,qi=null,Vh=0,Re&6)throw Error(H(331));var i=Re;for(Re|=4,ne=t.current;ne!==null;){var s=ne,o=s.child;if(ne.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ne=c;ne!==null;){var d=ne;switch(d.tag){case 0:case 11:case 15:Su(8,d,s)}var h=d.child;if(h!==null)h.return=d,ne=h;else for(;ne!==null;){d=ne;var p=d.sibling,_=d.return;if(CR(d),d===c){ne=null;break}if(p!==null){p.return=_,ne=p;break}ne=_}}}var E=s.alternate;if(E!==null){var T=E.child;if(T!==null){E.child=null;do{var C=T.sibling;T.sibling=null,T=C}while(T!==null)}}ne=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ne=o;else e:for(;ne!==null;){if(s=ne,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Su(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,ne=S;break e}ne=s.return}}var v=t.current;for(ne=v;ne!==null;){o=ne;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,ne=I;else e:for(o=v;ne!==null;){if(a=ne,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ef(9,a)}}catch(U){ot(a,a.return,U)}if(a===o){ne=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,ne=x;break e}ne=a.return}}if(Re=i,ys(),Nr&&typeof Nr.onPostCommitFiberRoot=="function")try{Nr.onPostCommitFiberRoot(ff,t)}catch{}r=!0}return r}finally{be=n,Yn.transition=e}}return!1}function QE(t,e,n){e=Ma(n,e),e=_R(t,e,1),t=Yi(t,e,1),e=mn(),t!==null&&(Rc(t,1,e),bn(t,e))}function ot(t,e,n){if(t.tag===3)QE(t,t,n);else for(;e!==null;){if(e.tag===3){QE(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xi===null||!Xi.has(r))){t=Ma(n,t),t=yR(e,t,1),e=Yi(e,t,1),t=mn(),e!==null&&(Rc(e,1,t),bn(e,t));break}}e=e.return}}function VD(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=mn(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(Kt&n)===n&&(At===4||At===3&&(Kt&130023424)===Kt&&500>pt()-oy?Ys(t,0):sy|=n),bn(t,e)}function FR(t,e){e===0&&(t.mode&1?(e=yd,yd<<=1,!(yd&130023424)&&(yd=4194304)):e=1);var n=mn();t=li(t,e),t!==null&&(Rc(t,e,n),bn(t,n))}function MD(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),FR(t,n)}function FD(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(e),FR(t,n)}var UR;UR=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Cn.current)Sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Sn=!1,RD(t,e,n);Sn=!!(t.flags&131072)}else Sn=!1,Ge&&e.flags&1048576&&$S(e,Ph,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Qd(t,e),t=e.pendingProps;var i=Na(e,on.current);Ta(e,n),i=Z_(null,e,r,t,i,n);var s=ey();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kn(r)?(s=!0,Rh(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,K_(e),i.updater=wf,e.stateNode=i,i._reactInternals=e,ag(e,r,t,n),e=cg(null,e,r,!0,s,n)):(e.tag=0,Ge&&s&&j_(e),dn(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Qd(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=BD(r),t=ar(r,t),i){case 0:e=ug(null,e,r,t,n);break e;case 1:e=UE(null,e,r,t,n);break e;case 11:e=ME(null,e,r,t,n);break e;case 14:e=FE(null,e,r,ar(r.type,t),n);break e}throw Error(H(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ar(r,i),ug(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ar(r,i),UE(t,e,r,i,n);case 3:e:{if(IR(e),t===null)throw Error(H(387));r=e.pendingProps,s=e.memoizedState,i=s.element,QS(t,e),bh(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ma(Error(H(423)),e),e=BE(t,e,r,n,i);break e}else if(r!==i){i=Ma(Error(H(424)),e),e=BE(t,e,r,n,i);break e}else for(Ln=Ji(e.stateNode.containerInfo.firstChild),Mn=e,Ge=!0,cr=null,n=GS(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Oa(),r===i){e=ui(t,e,n);break e}dn(t,e,r,n)}e=e.child}return e;case 5:return JS(e),t===null&&ig(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Zm(r,i)?o=null:s!==null&&Zm(r,s)&&(e.flags|=32),ER(t,e),dn(t,e,o,n),e.child;case 6:return t===null&&ig(e),null;case 13:return TR(t,e,n);case 4:return Q_(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=La(e,null,r,n):dn(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ar(r,i),ME(t,e,r,i,n);case 7:return dn(t,e,e.pendingProps,n),e.child;case 8:return dn(t,e,e.pendingProps.children,n),e.child;case 12:return dn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ve(Ch,r._currentValue),r._currentValue=o,s!==null)if(gr(s.value,o)){if(s.children===i.children&&!Cn.current){e=ui(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=ni(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),sg(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(H(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),sg(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dn(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ta(e,n),i=er(i),r=r(i),e.flags|=1,dn(t,e,r,n),e.child;case 14:return r=e.type,i=ar(r,e.pendingProps),i=ar(r.type,i),FE(t,e,r,i,n);case 15:return vR(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ar(r,i),Qd(t,e),e.tag=1,kn(r)?(t=!0,Rh(e)):t=!1,Ta(e,n),gR(e,r,i),ag(e,r,i,n),cg(null,e,r,!0,t,n);case 19:return SR(t,e,n);case 22:return wR(t,e,n)}throw Error(H(156,e.tag))};function BR(t,e){return fS(t,e)}function UD(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,e,n,r){return new UD(t,e,n,r)}function cy(t){return t=t.prototype,!(!t||!t.isReactComponent)}function BD(t){if(typeof t=="function")return cy(t)?1:0;if(t!=null){if(t=t.$$typeof,t===k_)return 11;if(t===b_)return 14}return 2}function es(t,e){var n=t.alternate;return n===null?(n=Kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Xd(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")cy(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case oa:return Xs(n.children,i,s,e);case C_:o=8,i|=8;break;case xm:return t=Kn(12,n,e,i|2),t.elementType=xm,t.lanes=s,t;case Dm:return t=Kn(13,n,e,i),t.elementType=Dm,t.lanes=s,t;case Nm:return t=Kn(19,n,e,i),t.elementType=Nm,t.lanes=s,t;case J0:return Tf(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case K0:o=10;break e;case Q0:o=9;break e;case k_:o=11;break e;case b_:o=14;break e;case Mi:o=16,r=null;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=Kn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Xs(t,e,n,r){return t=Kn(7,t,r,e),t.lanes=n,t}function Tf(t,e,n,r){return t=Kn(22,t,r,e),t.elementType=J0,t.lanes=n,t.stateNode={isHidden:!1},t}function nm(t,e,n){return t=Kn(6,t,null,e),t.lanes=n,t}function rm(t,e,n){return e=Kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function jD(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mp(0),this.expirationTimes=Mp(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mp(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function dy(t,e,n,r,i,s,o,a,l){return t=new jD(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Kn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},K_(s),t}function zD(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sa,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function jR(t){if(!t)return is;t=t._reactInternals;e:{if(Ro(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var n=t.type;if(kn(n))return jS(t,n,e)}return e}function zR(t,e,n,r,i,s,o,a,l){return t=dy(n,r,!0,t,i,s,o,a,l),t.context=jR(null),n=t.current,r=mn(),i=Zi(n),s=ni(r,i),s.callback=e??null,Yi(n,s,i),t.current.lanes=i,Rc(t,i,r),bn(t,r),t}function Sf(t,e,n,r){var i=e.current,s=mn(),o=Zi(i);return n=jR(n),e.context===null?e.context=n:e.pendingContext=n,e=ni(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Yi(i,e,o),t!==null&&(fr(t,i,o,s),Hd(t,i,o)),o}function Fh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function JE(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function hy(t,e){JE(t,e),(t=t.alternate)&&JE(t,e)}function $D(){return null}var $R=typeof reportError=="function"?reportError:function(t){console.error(t)};function fy(t){this._internalRoot=t}Rf.prototype.render=fy.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));Sf(t,e,null,null)};Rf.prototype.unmount=fy.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ao(function(){Sf(null,t,null,null)}),e[ai]=null}};function Rf(t){this._internalRoot=t}Rf.prototype.unstable_scheduleHydration=function(t){if(t){var e=wS();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ui.length&&e!==0&&e<Ui[n].priority;n++);Ui.splice(n,0,t),n===0&&IS(t)}};function py(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Af(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function YE(){}function qD(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Fh(o);s.call(c)}}var o=zR(e,r,t,0,null,!1,!1,"",YE);return t._reactRootContainer=o,t[ai]=o.current,Hu(t.nodeType===8?t.parentNode:t),ao(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Fh(l);a.call(c)}}var l=dy(t,0,!1,null,null,!1,!1,"",YE);return t._reactRootContainer=l,t[ai]=l.current,Hu(t.nodeType===8?t.parentNode:t),ao(function(){Sf(e,l,n,r)}),l}function Pf(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Fh(o);a.call(l)}}Sf(e,o,t,i)}else o=qD(n,e,t,i,r);return Fh(o)}yS=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=uu(e.pendingLanes);n!==0&&(N_(e,n|1),bn(e,pt()),!(Re&6)&&(Fa=pt()+500,ys()))}break;case 13:ao(function(){var r=li(t,1);if(r!==null){var i=mn();fr(r,t,1,i)}}),hy(t,1)}};O_=function(t){if(t.tag===13){var e=li(t,134217728);if(e!==null){var n=mn();fr(e,t,134217728,n)}hy(t,134217728)}};vS=function(t){if(t.tag===13){var e=Zi(t),n=li(t,e);if(n!==null){var r=mn();fr(n,t,e,r)}hy(t,e)}};wS=function(){return be};ES=function(t,e){var n=be;try{return be=t,e()}finally{be=n}};$m=function(t,e,n){switch(e){case"input":if(Vm(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=_f(r);if(!i)throw Error(H(90));X0(r),Vm(r,i)}}}break;case"textarea":eS(t,n);break;case"select":e=n.value,e!=null&&va(t,!!n.multiple,e,!1)}};aS=ay;lS=ao;var WD={usingClientEntryPoint:!1,Events:[Pc,ca,_f,sS,oS,ay]},Gl={findFiberByHostInstance:$s,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},HD={bundleType:Gl.bundleType,version:Gl.version,rendererPackageName:Gl.rendererPackageName,rendererConfig:Gl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=dS(t),t===null?null:t.stateNode},findFiberByHostInstance:Gl.findFiberByHostInstance||$D,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kd.isDisabled&&kd.supportsFiber)try{ff=kd.inject(HD),Nr=kd}catch{}}jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WD;jn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!py(e))throw Error(H(200));return zD(t,e,null,n)};jn.createRoot=function(t,e){if(!py(t))throw Error(H(299));var n=!1,r="",i=$R;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=dy(t,1,!1,null,null,n,!1,r,i),t[ai]=e.current,Hu(t.nodeType===8?t.parentNode:t),new fy(e)};jn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=dS(e),t=t===null?null:t.stateNode,t};jn.flushSync=function(t){return ao(t)};jn.hydrate=function(t,e,n){if(!Af(e))throw Error(H(200));return Pf(null,t,e,!0,n)};jn.hydrateRoot=function(t,e,n){if(!py(t))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=$R;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=zR(e,null,t,1,n??null,i,!1,s,o),t[ai]=e.current,Hu(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Rf(e)};jn.render=function(t,e,n){if(!Af(e))throw Error(H(200));return Pf(null,t,e,!1,n)};jn.unmountComponentAtNode=function(t){if(!Af(t))throw Error(H(40));return t._reactRootContainer?(ao(function(){Pf(null,null,t,!1,function(){t._reactRootContainer=null,t[ai]=null})}),!0):!1};jn.unstable_batchedUpdates=ay;jn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Af(n))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return Pf(t,e,n,!1,r)};jn.version="18.3.1-next-f1338f8080-20240426";function qR(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qR)}catch(t){console.error(t)}}qR(),q0.exports=jn;var WR=q0.exports;const HR=w_(WR),GD=x0({__proto__:null,default:HR},[WR]);/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ze(){return Ze=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ze.apply(this,arguments)}var vt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(vt||(vt={}));const XE="popstate";function KD(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return tc("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:lo(i)}return JD(e,n,null,t)}function we(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ua(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function QD(){return Math.random().toString(36).substr(2,8)}function ZE(t,e){return{usr:t.state,key:t.key,idx:e}}function tc(t,e,n,r){return n===void 0&&(n=null),Ze({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?vs(e):e,{state:n,key:e&&e.key||r||QD()})}function lo(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function vs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function JD(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=vt.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(Ze({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function h(){a=vt.Pop;let C=d(),S=C==null?null:C-c;c=C,l&&l({action:a,location:T.location,delta:S})}function p(C,S){a=vt.Push;let v=tc(T.location,C,S);c=d()+1;let I=ZE(v,c),x=T.createHref(v);try{o.pushState(I,"",x)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;i.location.assign(x)}s&&l&&l({action:a,location:T.location,delta:1})}function _(C,S){a=vt.Replace;let v=tc(T.location,C,S);c=d();let I=ZE(v,c),x=T.createHref(v);o.replaceState(I,"",x),s&&l&&l({action:a,location:T.location,delta:0})}function E(C){let S=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof C=="string"?C:lo(C);return v=v.replace(/ $/,"%20"),we(S,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,S)}let T={get action(){return a},get location(){return t(i,o)},listen(C){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(XE,h),l=C,()=>{i.removeEventListener(XE,h),l=null}},createHref(C){return e(i,C)},createURL:E,encodeLocation(C){let S=E(C);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:p,replace:_,go(C){return o.go(C)}};return T}var He;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(He||(He={}));const YD=new Set(["lazy","caseSensitive","path","id","index","children"]);function XD(t){return t.index===!0}function Ig(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(we(i.index!==!0||!i.children,"Cannot specify children on an index route"),we(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),XD(i)){let l=Ze({},i,e(i),{id:a});return r[a]=l,l}else{let l=Ze({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=Ig(i.children,e,o,r)),l}})}function _a(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?vs(e):e,i=ll(r.pathname||"/",n);if(i==null)return null;let s=GR(t);eN(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=hN(i);o=uN(s[a],l)}return o}function ZD(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function GR(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(we(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=ri([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(we(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),GR(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:aN(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of KR(s.path))i(s,o,l)}),e}function KR(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=KR(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function eN(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:lN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const tN=/^:[\w-]+$/,nN=3,rN=2,iN=1,sN=10,oN=-2,eI=t=>t==="*";function aN(t,e){let n=t.split("/"),r=n.length;return n.some(eI)&&(r+=oN),e&&(r+=rN),n.filter(i=>!eI(i)).reduce((i,s)=>i+(tN.test(s)?nN:s===""?iN:sN),r)}function lN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function uN(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",d=cN({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!d)return null;Object.assign(r,d.params);let h=a.route;s.push({params:r,pathname:ri([i,d.pathname]),pathnameBase:mN(ri([i,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(i=ri([i,d.pathnameBase]))}return s}function cN(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=dN(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,h)=>{let{paramName:p,isOptional:_}=d;if(p==="*"){let T=a[h]||"";o=s.slice(0,s.length-T.length).replace(/(.)\/+$/,"$1")}const E=a[h];return _&&!E?c[p]=void 0:c[p]=(E||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function dN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ua(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function hN(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ua(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ll(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function fN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?vs(t):t;return{pathname:n?n.startsWith("/")?n:pN(n,e):e,search:gN(r),hash:_N(i)}}function pN(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function im(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function QR(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function my(t,e){let n=QR(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function gy(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=vs(t):(i=Ze({},t),we(!i.pathname||!i.pathname.includes("?"),im("?","pathname","search",i)),we(!i.pathname||!i.pathname.includes("#"),im("#","pathname","hash",i)),we(!i.search||!i.search.includes("#"),im("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),h-=1;i.pathname=p.join("/")}a=h>=0?e[h]:"/"}let l=fN(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const ri=t=>t.join("/").replace(/\/\/+/g,"/"),mN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),gN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,_N=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class _y{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function yy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const JR=["post","put","patch","delete"],yN=new Set(JR),vN=["get",...JR],wN=new Set(vN),EN=new Set([301,302,303,307,308]),IN=new Set([307,308]),sm={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},TN={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Kl={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},vy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,SN=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),YR="remix-router-transitions";function RN(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;we(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let D=t.detectErrorBoundary;i=L=>({hasErrorBoundary:D(L)})}else i=SN;let s={},o=Ig(t.routes,i,void 0,s),a,l=t.basename||"/",c=t.unstable_dataStrategy||kN,d=Ze({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},t.future),h=null,p=new Set,_=null,E=null,T=null,C=t.hydrationData!=null,S=_a(o,t.history.location,l),v=null;if(S==null){let D=qn(404,{pathname:t.history.location.pathname}),{matches:L,route:j}=cI(o);S=L,v={[j.id]:D}}let I,x=S.some(D=>D.route.lazy),U=S.some(D=>D.route.loader);if(x)I=!1;else if(!U)I=!0;else if(d.v7_partialHydration){let D=t.hydrationData?t.hydrationData.loaderData:null,L=t.hydrationData?t.hydrationData.errors:null,j=G=>G.route.loader?typeof G.route.loader=="function"&&G.route.loader.hydrate===!0?!1:D&&D[G.route.id]!==void 0||L&&L[G.route.id]!==void 0:!0;if(L){let G=S.findIndex(ee=>L[ee.route.id]!==void 0);I=S.slice(0,G+1).every(j)}else I=S.every(j)}else I=t.hydrationData!=null;let B,g={historyAction:t.history.action,location:t.history.location,matches:S,initialized:I,navigation:sm,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||v,fetchers:new Map,blockers:new Map},y=vt.Pop,R=!1,A,k=!1,b=new Map,P=null,re=!1,qe=!1,Jt=[],an=[],W=new Map,ue=0,de=-1,Ce=new Map,_e=new Set,xe=new Map,ln=new Map,Tt=new Set,Ft=new Map,Ut=new Map,Rl=!1;function Ep(){if(h=t.history.listen(D=>{let{action:L,location:j,delta:G}=D;if(Rl){Rl=!1;return}Ua(Ut.size===0||G!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ee=Bo({currentLocation:g.location,nextLocation:j,historyAction:L});if(ee&&G!=null){Rl=!0,t.history.go(G*-1),Uo(ee,{state:"blocked",location:j,proceed(){Uo(ee,{state:"proceeding",proceed:void 0,reset:void 0,location:j}),t.history.go(G)},reset(){let oe=new Map(g.blockers);oe.set(ee,Kl),Bt({blockers:oe})}});return}return wr(L,j)}),n){jN(e,b);let D=()=>zN(e,b);e.addEventListener("pagehide",D),P=()=>e.removeEventListener("pagehide",D)}return g.initialized||wr(vt.Pop,g.location,{initialHydration:!0}),B}function Oo(){h&&h(),P&&P(),p.clear(),A&&A.abort(),g.fetchers.forEach((D,L)=>ks(L)),g.blockers.forEach((D,L)=>td(L))}function Lo(D){return p.add(D),()=>p.delete(D)}function Bt(D,L){L===void 0&&(L={}),g=Ze({},g,D);let j=[],G=[];d.v7_fetcherPersist&&g.fetchers.forEach((ee,oe)=>{ee.state==="idle"&&(Tt.has(oe)?G.push(oe):j.push(oe))}),[...p].forEach(ee=>ee(g,{deletedFetchers:G,unstable_viewTransitionOpts:L.viewTransitionOpts,unstable_flushSync:L.flushSync===!0})),d.v7_fetcherPersist&&(j.forEach(ee=>g.fetchers.delete(ee)),G.forEach(ee=>ks(ee)))}function jr(D,L,j){var G,ee;let{flushSync:oe}=j===void 0?{}:j,le=g.actionData!=null&&g.navigation.formMethod!=null&&ur(g.navigation.formMethod)&&g.navigation.state==="loading"&&((G=D.state)==null?void 0:G._isRedirect)!==!0,Z;L.actionData?Object.keys(L.actionData).length>0?Z=L.actionData:Z=null:le?Z=g.actionData:Z=null;let he=L.loaderData?lI(g.loaderData,L.loaderData,L.matches||[],L.errors):g.loaderData,fe=g.blockers;fe.size>0&&(fe=new Map(fe),fe.forEach((ce,Le)=>fe.set(Le,Kl)));let St=R===!0||g.navigation.formMethod!=null&&ur(g.navigation.formMethod)&&((ee=D.state)==null?void 0:ee._isRedirect)!==!0;a&&(o=a,a=void 0),re||y===vt.Pop||(y===vt.Push?t.history.push(D,D.state):y===vt.Replace&&t.history.replace(D,D.state));let We;if(y===vt.Pop){let ce=b.get(g.location.pathname);ce&&ce.has(D.pathname)?We={currentLocation:g.location,nextLocation:D}:b.has(D.pathname)&&(We={currentLocation:D,nextLocation:g.location})}else if(k){let ce=b.get(g.location.pathname);ce?ce.add(D.pathname):(ce=new Set([D.pathname]),b.set(g.location.pathname,ce)),We={currentLocation:g.location,nextLocation:D}}Bt(Ze({},L,{actionData:Z,loaderData:he,historyAction:y,location:D,initialized:!0,navigation:sm,revalidation:"idle",restoreScrollPosition:zo(D,L.matches||g.matches),preventScrollReset:St,blockers:fe}),{viewTransitionOpts:We,flushSync:oe===!0}),y=vt.Pop,R=!1,k=!1,re=!1,qe=!1,Jt=[],an=[]}async function Vo(D,L){if(typeof D=="number"){t.history.go(D);return}let j=Tg(g.location,g.matches,l,d.v7_prependBasename,D,d.v7_relativeSplatPath,L==null?void 0:L.fromRouteId,L==null?void 0:L.relative),{path:G,submission:ee,error:oe}=tI(d.v7_normalizeFormMethod,!1,j,L),le=g.location,Z=tc(g.location,G,L&&L.state);Z=Ze({},Z,t.history.encodeLocation(Z));let he=L&&L.replace!=null?L.replace:void 0,fe=vt.Push;he===!0?fe=vt.Replace:he===!1||ee!=null&&ur(ee.formMethod)&&ee.formAction===g.location.pathname+g.location.search&&(fe=vt.Replace);let St=L&&"preventScrollReset"in L?L.preventScrollReset===!0:void 0,We=(L&&L.unstable_flushSync)===!0,ce=Bo({currentLocation:le,nextLocation:Z,historyAction:fe});if(ce){Uo(ce,{state:"blocked",location:Z,proceed(){Uo(ce,{state:"proceeding",proceed:void 0,reset:void 0,location:Z}),Vo(D,L)},reset(){let Le=new Map(g.blockers);Le.set(ce,Kl),Bt({blockers:Le})}});return}return await wr(fe,Z,{submission:ee,pendingError:oe,preventScrollReset:St,replace:L&&L.replace,enableViewTransition:L&&L.unstable_viewTransition,flushSync:We})}function Al(){if(Fo(),Bt({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){wr(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}wr(y||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function wr(D,L,j){A&&A.abort(),A=null,y=D,re=(j&&j.startUninterruptedRevalidation)===!0,xl(g.location,g.matches),R=(j&&j.preventScrollReset)===!0,k=(j&&j.enableViewTransition)===!0;let G=a||o,ee=j&&j.overrideNavigation,oe=_a(G,L,l),le=(j&&j.flushSync)===!0;if(!oe){let ce=qn(404,{pathname:L.pathname}),{matches:Le,route:Xe}=cI(G);jo(),jr(L,{matches:Le,loaderData:{},errors:{[Xe.id]:ce}},{flushSync:le});return}if(g.initialized&&!qe&&LN(g.location,L)&&!(j&&j.submission&&ur(j.submission.formMethod))){jr(L,{matches:oe},{flushSync:le});return}A=new AbortController;let Z=Go(t.history,L,A.signal,j&&j.submission),he;if(j&&j.pendingError)he=[Pu(oe).route.id,{type:He.error,error:j.pendingError}];else if(j&&j.submission&&ur(j.submission.formMethod)){let ce=await Ip(Z,L,j.submission,oe,{replace:j.replace,flushSync:le});if(ce.shortCircuited)return;he=ce.pendingActionResult,ee=om(L,j.submission),le=!1,Z=Go(t.history,Z.url,Z.signal)}let{shortCircuited:fe,loaderData:St,errors:We}=await Tp(Z,L,oe,ee,j&&j.submission,j&&j.fetcherSubmission,j&&j.replace,j&&j.initialHydration===!0,le,he);fe||(A=null,jr(L,Ze({matches:oe},uI(he),{loaderData:St,errors:We})))}async function Ip(D,L,j,G,ee){ee===void 0&&(ee={}),Fo();let oe=UN(L,j);Bt({navigation:oe},{flushSync:ee.flushSync===!0});let le,Z=Rg(G,L);if(!Z.route.action&&!Z.route.lazy)le={type:He.error,error:qn(405,{method:D.method,pathname:L.pathname,routeId:Z.route.id})};else if(le=(await zr("action",D,[Z],G))[0],D.signal.aborted)return{shortCircuited:!0};if(Gs(le)){let he;return ee&&ee.replace!=null?he=ee.replace:he=sI(le.response.headers.get("Location"),new URL(D.url),l)===g.location.pathname+g.location.search,await Ps(D,le,{submission:j,replace:he}),{shortCircuited:!0}}if(Hs(le))throw qn(400,{type:"defer-action"});if(Gn(le)){let he=Pu(G,Z.route.id);return(ee&&ee.replace)!==!0&&(y=vt.Push),{pendingActionResult:[he.route.id,le]}}return{pendingActionResult:[Z.route.id,le]}}async function Tp(D,L,j,G,ee,oe,le,Z,he,fe){let St=G||om(L,ee),We=ee||oe||fI(St),ce=a||o,[Le,Xe]=nI(t.history,g,j,We,L,d.v7_partialHydration&&Z===!0,d.unstable_skipActionErrorRevalidation,qe,Jt,an,Tt,xe,_e,ce,l,fe);if(jo(ye=>!(j&&j.some(jt=>jt.route.id===ye))||Le&&Le.some(jt=>jt.route.id===ye)),de=++ue,Le.length===0&&Xe.length===0){let ye=Cl();return jr(L,Ze({matches:j,loaderData:{},errors:fe&&Gn(fe[1])?{[fe[0]]:fe[1].error}:null},uI(fe),ye?{fetchers:new Map(g.fetchers)}:{}),{flushSync:he}),{shortCircuited:!0}}if(!re&&(!d.v7_partialHydration||!Z)){Xe.forEach(jt=>{let zt=g.fetchers.get(jt.key),_t=Ql(void 0,zt?zt.data:void 0);g.fetchers.set(jt.key,_t)});let ye;fe&&!Gn(fe[1])?ye={[fe[0]]:fe[1].data}:g.actionData&&(Object.keys(g.actionData).length===0?ye=null:ye=g.actionData),Bt(Ze({navigation:St},ye!==void 0?{actionData:ye}:{},Xe.length>0?{fetchers:new Map(g.fetchers)}:{}),{flushSync:he})}Xe.forEach(ye=>{W.has(ye.key)&&Er(ye.key),ye.controller&&W.set(ye.key,ye.controller)});let Si=()=>Xe.forEach(ye=>Er(ye.key));A&&A.signal.addEventListener("abort",Si);let{loaderResults:$n,fetcherResults:ir}=await Mo(g.matches,j,Le,Xe,D);if(D.signal.aborted)return{shortCircuited:!0};A&&A.signal.removeEventListener("abort",Si),Xe.forEach(ye=>W.delete(ye.key));let un=dI([...$n,...ir]);if(un){if(un.idx>=Le.length){let ye=Xe[un.idx-Le.length].key;_e.add(ye)}return await Ps(D,un.result,{replace:le}),{shortCircuited:!0}}let{loaderData:qr,errors:xn}=aI(g,j,Le,$n,fe,Xe,ir,Ft);Ft.forEach((ye,jt)=>{ye.subscribe(zt=>{(zt||ye.done)&&Ft.delete(jt)})}),d.v7_partialHydration&&Z&&g.errors&&Object.entries(g.errors).filter(ye=>{let[jt]=ye;return!Le.some(zt=>zt.route.id===jt)}).forEach(ye=>{let[jt,zt]=ye;xn=Object.assign(xn||{},{[jt]:zt})});let Ri=Cl(),Ai=kl(de),bs=Ri||Ai||Xe.length>0;return Ze({loaderData:qr,errors:xn},bs?{fetchers:new Map(g.fetchers)}:{})}function Xc(D,L,j,G){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");W.has(D)&&Er(D);let ee=(G&&G.unstable_flushSync)===!0,oe=a||o,le=Tg(g.location,g.matches,l,d.v7_prependBasename,j,d.v7_relativeSplatPath,L,G==null?void 0:G.relative),Z=_a(oe,le,l);if(!Z){ft(D,L,qn(404,{pathname:le}),{flushSync:ee});return}let{path:he,submission:fe,error:St}=tI(d.v7_normalizeFormMethod,!0,le,G);if(St){ft(D,L,St,{flushSync:ee});return}let We=Rg(Z,he);if(R=(G&&G.preventScrollReset)===!0,fe&&ur(fe.formMethod)){Pl(D,L,he,We,Z,ee,fe);return}xe.set(D,{routeId:L,path:he}),Zc(D,L,he,We,Z,ee,fe)}async function Pl(D,L,j,G,ee,oe,le){if(Fo(),xe.delete(D),!G.route.action&&!G.route.lazy){let _t=qn(405,{method:le.formMethod,pathname:j,routeId:L});ft(D,L,_t,{flushSync:oe});return}let Z=g.fetchers.get(D);Fe(D,BN(le,Z),{flushSync:oe});let he=new AbortController,fe=Go(t.history,j,he.signal,le);W.set(D,he);let St=ue,ce=(await zr("action",fe,[G],ee))[0];if(fe.signal.aborted){W.get(D)===he&&W.delete(D);return}if(d.v7_fetcherPersist&&Tt.has(D)){if(Gs(ce)||Gn(ce)){Fe(D,Vi(void 0));return}}else{if(Gs(ce))if(W.delete(D),de>St){Fe(D,Vi(void 0));return}else return _e.add(D),Fe(D,Ql(le)),Ps(fe,ce,{fetcherSubmission:le});if(Gn(ce)){ft(D,L,ce.error);return}}if(Hs(ce))throw qn(400,{type:"defer-action"});let Le=g.navigation.location||g.location,Xe=Go(t.history,Le,he.signal),Si=a||o,$n=g.navigation.state!=="idle"?_a(Si,g.navigation.location,l):g.matches;we($n,"Didn't find any matches after fetcher action");let ir=++ue;Ce.set(D,ir);let un=Ql(le,ce.data);g.fetchers.set(D,un);let[qr,xn]=nI(t.history,g,$n,le,Le,!1,d.unstable_skipActionErrorRevalidation,qe,Jt,an,Tt,xe,_e,Si,l,[G.route.id,ce]);xn.filter(_t=>_t.key!==D).forEach(_t=>{let Wr=_t.key,Pi=g.fetchers.get(Wr),Hr=Ql(void 0,Pi?Pi.data:void 0);g.fetchers.set(Wr,Hr),W.has(Wr)&&Er(Wr),_t.controller&&W.set(Wr,_t.controller)}),Bt({fetchers:new Map(g.fetchers)});let Ri=()=>xn.forEach(_t=>Er(_t.key));he.signal.addEventListener("abort",Ri);let{loaderResults:Ai,fetcherResults:bs}=await Mo(g.matches,$n,qr,xn,Xe);if(he.signal.aborted)return;he.signal.removeEventListener("abort",Ri),Ce.delete(D),W.delete(D),xn.forEach(_t=>W.delete(_t.key));let ye=dI([...Ai,...bs]);if(ye){if(ye.idx>=qr.length){let _t=xn[ye.idx-qr.length].key;_e.add(_t)}return Ps(Xe,ye.result)}let{loaderData:jt,errors:zt}=aI(g,g.matches,qr,Ai,void 0,xn,bs,Ft);if(g.fetchers.has(D)){let _t=Vi(ce.data);g.fetchers.set(D,_t)}kl(ir),g.navigation.state==="loading"&&ir>de?(we(y,"Expected pending action"),A&&A.abort(),jr(g.navigation.location,{matches:$n,loaderData:jt,errors:zt,fetchers:new Map(g.fetchers)})):(Bt({errors:zt,loaderData:lI(g.loaderData,jt,$n,zt),fetchers:new Map(g.fetchers)}),qe=!1)}async function Zc(D,L,j,G,ee,oe,le){let Z=g.fetchers.get(D);Fe(D,Ql(le,Z?Z.data:void 0),{flushSync:oe});let he=new AbortController,fe=Go(t.history,j,he.signal);W.set(D,he);let St=ue,ce=(await zr("loader",fe,[G],ee))[0];if(Hs(ce)&&(ce=await tA(ce,fe.signal,!0)||ce),W.get(D)===he&&W.delete(D),!fe.signal.aborted){if(Tt.has(D)){Fe(D,Vi(void 0));return}if(Gs(ce))if(de>St){Fe(D,Vi(void 0));return}else{_e.add(D),await Ps(fe,ce);return}if(Gn(ce)){ft(D,L,ce.error);return}we(!Hs(ce),"Unhandled fetcher deferred data"),Fe(D,Vi(ce.data))}}async function Ps(D,L,j){let{submission:G,fetcherSubmission:ee,replace:oe}=j===void 0?{}:j;L.response.headers.has("X-Remix-Revalidate")&&(qe=!0);let le=L.response.headers.get("Location");we(le,"Expected a Location header on the redirect Response"),le=sI(le,new URL(D.url),l);let Z=tc(g.location,le,{_isRedirect:!0});if(n){let Le=!1;if(L.response.headers.has("X-Remix-Reload-Document"))Le=!0;else if(vy.test(le)){const Xe=t.history.createURL(le);Le=Xe.origin!==e.location.origin||ll(Xe.pathname,l)==null}if(Le){oe?e.location.replace(le):e.location.assign(le);return}}A=null;let he=oe===!0?vt.Replace:vt.Push,{formMethod:fe,formAction:St,formEncType:We}=g.navigation;!G&&!ee&&fe&&St&&We&&(G=fI(g.navigation));let ce=G||ee;if(IN.has(L.response.status)&&ce&&ur(ce.formMethod))await wr(he,Z,{submission:Ze({},ce,{formAction:le}),preventScrollReset:R});else{let Le=om(Z,G);await wr(he,Z,{overrideNavigation:Le,fetcherSubmission:ee,preventScrollReset:R})}}async function zr(D,L,j,G){try{let ee=await bN(c,D,L,j,G,s,i);return await Promise.all(ee.map((oe,le)=>{if(VN(oe)){let Z=oe.result;return{type:He.redirect,response:NN(Z,L,j[le].route.id,G,l,d.v7_relativeSplatPath)}}return DN(oe)}))}catch(ee){return j.map(()=>({type:He.error,error:ee}))}}async function Mo(D,L,j,G,ee){let[oe,...le]=await Promise.all([j.length?zr("loader",ee,j,L):[],...G.map(Z=>{if(Z.matches&&Z.match&&Z.controller){let he=Go(t.history,Z.path,Z.controller.signal);return zr("loader",he,[Z.match],Z.matches).then(fe=>fe[0])}else return Promise.resolve({type:He.error,error:qn(404,{pathname:Z.path})})})]);return await Promise.all([hI(D,j,oe,oe.map(()=>ee.signal),!1,g.loaderData),hI(D,G.map(Z=>Z.match),le,G.map(Z=>Z.controller?Z.controller.signal:null),!0)]),{loaderResults:oe,fetcherResults:le}}function Fo(){qe=!0,Jt.push(...jo()),xe.forEach((D,L)=>{W.has(L)&&(an.push(L),Er(L))})}function Fe(D,L,j){j===void 0&&(j={}),g.fetchers.set(D,L),Bt({fetchers:new Map(g.fetchers)},{flushSync:(j&&j.flushSync)===!0})}function ft(D,L,j,G){G===void 0&&(G={});let ee=Pu(g.matches,L);ks(D),Bt({errors:{[ee.route.id]:j},fetchers:new Map(g.fetchers)},{flushSync:(G&&G.flushSync)===!0})}function Cs(D){return d.v7_fetcherPersist&&(ln.set(D,(ln.get(D)||0)+1),Tt.has(D)&&Tt.delete(D)),g.fetchers.get(D)||TN}function ks(D){let L=g.fetchers.get(D);W.has(D)&&!(L&&L.state==="loading"&&Ce.has(D))&&Er(D),xe.delete(D),Ce.delete(D),_e.delete(D),Tt.delete(D),g.fetchers.delete(D)}function ed(D){if(d.v7_fetcherPersist){let L=(ln.get(D)||0)-1;L<=0?(ln.delete(D),Tt.add(D)):ln.set(D,L)}else ks(D);Bt({fetchers:new Map(g.fetchers)})}function Er(D){let L=W.get(D);we(L,"Expected fetch controller: "+D),L.abort(),W.delete(D)}function Ii(D){for(let L of D){let j=Cs(L),G=Vi(j.data);g.fetchers.set(L,G)}}function Cl(){let D=[],L=!1;for(let j of _e){let G=g.fetchers.get(j);we(G,"Expected fetcher: "+j),G.state==="loading"&&(_e.delete(j),D.push(j),L=!0)}return Ii(D),L}function kl(D){let L=[];for(let[j,G]of Ce)if(G<D){let ee=g.fetchers.get(j);we(ee,"Expected fetcher: "+j),ee.state==="loading"&&(Er(j),Ce.delete(j),L.push(j))}return Ii(L),L.length>0}function bl(D,L){let j=g.blockers.get(D)||Kl;return Ut.get(D)!==L&&Ut.set(D,L),j}function td(D){g.blockers.delete(D),Ut.delete(D)}function Uo(D,L){let j=g.blockers.get(D)||Kl;we(j.state==="unblocked"&&L.state==="blocked"||j.state==="blocked"&&L.state==="blocked"||j.state==="blocked"&&L.state==="proceeding"||j.state==="blocked"&&L.state==="unblocked"||j.state==="proceeding"&&L.state==="unblocked","Invalid blocker state transition: "+j.state+" -> "+L.state);let G=new Map(g.blockers);G.set(D,L),Bt({blockers:G})}function Bo(D){let{currentLocation:L,nextLocation:j,historyAction:G}=D;if(Ut.size===0)return;Ut.size>1&&Ua(!1,"A router only supports one blocker at a time");let ee=Array.from(Ut.entries()),[oe,le]=ee[ee.length-1],Z=g.blockers.get(oe);if(!(Z&&Z.state==="proceeding")&&le({currentLocation:L,nextLocation:j,historyAction:G}))return oe}function jo(D){let L=[];return Ft.forEach((j,G)=>{(!D||D(G))&&(j.cancel(),L.push(G),Ft.delete(G))}),L}function nd(D,L,j){if(_=D,T=L,E=j||null,!C&&g.navigation===sm){C=!0;let G=zo(g.location,g.matches);G!=null&&Bt({restoreScrollPosition:G})}return()=>{_=null,T=null,E=null}}function Ti(D,L){return E&&E(D,L.map(G=>ZD(G,g.loaderData)))||D.key}function xl(D,L){if(_&&T){let j=Ti(D,L);_[j]=T()}}function zo(D,L){if(_){let j=Ti(D,L),G=_[j];if(typeof G=="number")return G}return null}function $r(D){s={},a=Ig(D,i,void 0,s)}return B={get basename(){return l},get future(){return d},get state(){return g},get routes(){return o},get window(){return e},initialize:Ep,subscribe:Lo,enableScrollRestoration:nd,navigate:Vo,fetch:Xc,revalidate:Al,createHref:D=>t.history.createHref(D),encodeLocation:D=>t.history.encodeLocation(D),getFetcher:Cs,deleteFetcher:ed,dispose:Oo,getBlocker:bl,deleteBlocker:td,_internalFetchControllers:W,_internalActiveDeferreds:Ft,_internalSetRoutes:$r},B}function AN(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Tg(t,e,n,r,i,s,o,a){let l,c;if(o){l=[];for(let h of e)if(l.push(h),h.route.id===o){c=h;break}}else l=e,c=e[e.length-1];let d=gy(i||".",my(l,s),ll(t.pathname,n)||t.pathname,a==="path");return i==null&&(d.search=t.search,d.hash=t.hash),(i==null||i===""||i===".")&&c&&c.route.index&&!wy(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:ri([n,d.pathname])),lo(d)}function tI(t,e,n,r){if(!r||!AN(r))return{path:n};if(r.formMethod&&!FN(r.formMethod))return{path:n,error:qn(405,{method:r.formMethod})};let i=()=>({path:n,error:qn(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=ZR(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!ur(o))return i();let p=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((_,E)=>{let[T,C]=E;return""+_+T+"="+C+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:p}}}else if(r.formEncType==="application/json"){if(!ur(o))return i();try{let p=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:p,text:void 0}}}catch{return i()}}}we(typeof FormData=="function","FormData is not available in this environment");let l,c;if(r.formData)l=Sg(r.formData),c=r.formData;else if(r.body instanceof FormData)l=Sg(r.body),c=r.body;else if(r.body instanceof URLSearchParams)l=r.body,c=oI(l);else if(r.body==null)l=new URLSearchParams,c=new FormData;else try{l=new URLSearchParams(r.body),c=oI(l)}catch{return i()}let d={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(ur(d.formMethod))return{path:n,submission:d};let h=vs(n);return e&&h.search&&wy(h.search)&&l.append("index",""),h.search="?"+l,{path:lo(h),submission:d}}function PN(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function nI(t,e,n,r,i,s,o,a,l,c,d,h,p,_,E,T){let C=T?Gn(T[1])?T[1].error:T[1].data:void 0,S=t.createURL(e.location),v=t.createURL(i),I=T&&Gn(T[1])?T[0]:void 0,x=I?PN(n,I):n,U=T?T[1].statusCode:void 0,B=o&&U&&U>=400,g=x.filter((R,A)=>{let{route:k}=R;if(k.lazy)return!0;if(k.loader==null)return!1;if(s)return typeof k.loader!="function"||k.loader.hydrate?!0:e.loaderData[k.id]===void 0&&(!e.errors||e.errors[k.id]===void 0);if(CN(e.loaderData,e.matches[A],R)||l.some(re=>re===R.route.id))return!0;let b=e.matches[A],P=R;return rI(R,Ze({currentUrl:S,currentParams:b.params,nextUrl:v,nextParams:P.params},r,{actionResult:C,unstable_actionStatus:U,defaultShouldRevalidate:B?!1:a||S.pathname+S.search===v.pathname+v.search||S.search!==v.search||XR(b,P)}))}),y=[];return h.forEach((R,A)=>{if(s||!n.some(qe=>qe.route.id===R.routeId)||d.has(A))return;let k=_a(_,R.path,E);if(!k){y.push({key:A,routeId:R.routeId,path:R.path,matches:null,match:null,controller:null});return}let b=e.fetchers.get(A),P=Rg(k,R.path),re=!1;p.has(A)?re=!1:c.includes(A)?re=!0:b&&b.state!=="idle"&&b.data===void 0?re=a:re=rI(P,Ze({currentUrl:S,currentParams:e.matches[e.matches.length-1].params,nextUrl:v,nextParams:n[n.length-1].params},r,{actionResult:C,unstable_actionStatus:U,defaultShouldRevalidate:B?!1:a})),re&&y.push({key:A,routeId:R.routeId,path:R.path,matches:k,match:P,controller:new AbortController})}),[g,y]}function CN(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function XR(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function rI(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function iI(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];we(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";Ua(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!YD.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Ze({},e(i),{lazy:void 0}))}function kN(t){return Promise.all(t.matches.map(e=>e.resolve()))}async function bN(t,e,n,r,i,s,o,a){let l=r.reduce((h,p)=>h.add(p.route.id),new Set),c=new Set,d=await t({matches:i.map(h=>{let p=l.has(h.route.id);return Ze({},h,{shouldLoad:p,resolve:E=>(c.add(h.route.id),p?xN(e,n,h,s,o,E,a):Promise.resolve({type:He.data,result:void 0}))})}),request:n,params:i[0].params,context:a});return i.forEach(h=>we(c.has(h.route.id),'`match.resolve()` was not called for route id "'+h.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),d.filter((h,p)=>l.has(i[p].route.id))}async function xN(t,e,n,r,i,s,o){let a,l,c=d=>{let h,p=new Promise((T,C)=>h=C);l=()=>h(),e.signal.addEventListener("abort",l);let _=T=>typeof d!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):d({request:e,params:n.params,context:o},...T!==void 0?[T]:[]),E;return s?E=s(T=>_(T)):E=(async()=>{try{return{type:"data",result:await _()}}catch(T){return{type:"error",result:T}}})(),Promise.race([E,p])};try{let d=n.route[t];if(n.route.lazy)if(d){let h,[p]=await Promise.all([c(d).catch(_=>{h=_}),iI(n.route,i,r)]);if(h!==void 0)throw h;a=p}else if(await iI(n.route,i,r),d=n.route[t],d)a=await c(d);else if(t==="action"){let h=new URL(e.url),p=h.pathname+h.search;throw qn(405,{method:e.method,pathname:p,routeId:n.route.id})}else return{type:He.data,result:void 0};else if(d)a=await c(d);else{let h=new URL(e.url),p=h.pathname+h.search;throw qn(404,{pathname:p})}we(a.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(d){return{type:He.error,result:d}}finally{l&&e.signal.removeEventListener("abort",l)}return a}async function DN(t){let{result:e,type:n,status:r}=t;if(eA(e)){let o;try{let a=e.headers.get("Content-Type");a&&/\bapplication\/json\b/.test(a)?e.body==null?o=null:o=await e.json():o=await e.text()}catch(a){return{type:He.error,error:a}}return n===He.error?{type:He.error,error:new _y(e.status,e.statusText,o),statusCode:e.status,headers:e.headers}:{type:He.data,data:o,statusCode:e.status,headers:e.headers}}if(n===He.error)return{type:He.error,error:e,statusCode:yy(e)?e.status:r};if(MN(e)){var i,s;return{type:He.deferred,deferredData:e,statusCode:(i=e.init)==null?void 0:i.status,headers:((s=e.init)==null?void 0:s.headers)&&new Headers(e.init.headers)}}return{type:He.data,data:e,statusCode:r}}function NN(t,e,n,r,i,s){let o=t.headers.get("Location");if(we(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!vy.test(o)){let a=r.slice(0,r.findIndex(l=>l.route.id===n)+1);o=Tg(new URL(e.url),a,i,!0,o,s),t.headers.set("Location",o)}return t}function sI(t,e,n){if(vy.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=ll(i.pathname,n)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return t}function Go(t,e,n,r){let i=t.createURL(ZR(e)).toString(),s={signal:n};if(r&&ur(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=Sg(r.formData):s.body=r.formData}return new Request(i,s)}function Sg(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function oI(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function ON(t,e,n,r,i,s){let o={},a=null,l,c=!1,d={},h=r&&Gn(r[1])?r[1].error:void 0;return n.forEach((p,_)=>{let E=e[_].route.id;if(we(!Gs(p),"Cannot handle redirect results in processLoaderData"),Gn(p)){let T=p.error;h!==void 0&&(T=h,h=void 0),a=a||{};{let C=Pu(t,E);a[C.route.id]==null&&(a[C.route.id]=T)}o[E]=void 0,c||(c=!0,l=yy(p.error)?p.error.status:500),p.headers&&(d[E]=p.headers)}else Hs(p)?(i.set(E,p.deferredData),o[E]=p.deferredData.data,p.statusCode!=null&&p.statusCode!==200&&!c&&(l=p.statusCode),p.headers&&(d[E]=p.headers)):(o[E]=p.data,p.statusCode&&p.statusCode!==200&&!c&&(l=p.statusCode),p.headers&&(d[E]=p.headers))}),h!==void 0&&r&&(a={[r[0]]:h},o[r[0]]=void 0),{loaderData:o,errors:a,statusCode:l||200,loaderHeaders:d}}function aI(t,e,n,r,i,s,o,a){let{loaderData:l,errors:c}=ON(e,n,r,i,a);for(let d=0;d<s.length;d++){let{key:h,match:p,controller:_}=s[d];we(o!==void 0&&o[d]!==void 0,"Did not find corresponding fetcher result");let E=o[d];if(!(_&&_.signal.aborted))if(Gn(E)){let T=Pu(t.matches,p==null?void 0:p.route.id);c&&c[T.route.id]||(c=Ze({},c,{[T.route.id]:E.error})),t.fetchers.delete(h)}else if(Gs(E))we(!1,"Unhandled fetcher revalidation redirect");else if(Hs(E))we(!1,"Unhandled fetcher deferred data");else{let T=Vi(E.data);t.fetchers.set(h,T)}}return{loaderData:l,errors:c}}function lI(t,e,n,r){let i=Ze({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function uI(t){return t?Gn(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function Pu(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function cI(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function qn(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new _y(t||500,o,new Error(a),!0)}function dI(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Gs(n))return{result:n,idx:e}}}function ZR(t){let e=typeof t=="string"?vs(t):t;return lo(Ze({},e,{hash:""}))}function LN(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function VN(t){return eA(t.result)&&EN.has(t.result.status)}function Hs(t){return t.type===He.deferred}function Gn(t){return t.type===He.error}function Gs(t){return(t&&t.type)===He.redirect}function MN(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function eA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function FN(t){return wN.has(t.toLowerCase())}function ur(t){return yN.has(t.toLowerCase())}async function hI(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let c=t.find(h=>h.route.id===l.route.id),d=c!=null&&!XR(c,l)&&(s&&s[l.route.id])!==void 0;if(Hs(a)&&(i||d)){let h=r[o];we(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await tA(a,h,i).then(p=>{p&&(n[o]=p||n[o])})}}}async function tA(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:He.data,data:t.deferredData.unwrappedData}}catch(i){return{type:He.error,error:i}}return{type:He.data,data:t.deferredData.data}}}function wy(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Rg(t,e){let n=typeof e=="string"?vs(e).search:e.search;if(t[t.length-1].route.index&&wy(n||""))return t[t.length-1];let r=QR(t);return r[r.length-1]}function fI(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function om(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function UN(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Ql(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function BN(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Vi(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function jN(t,e){try{let n=t.sessionStorage.getItem(YR);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function zN(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(YR,JSON.stringify(n))}catch(r){Ua(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uh(){return Uh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Uh.apply(this,arguments)}const Cf=z.createContext(null),nA=z.createContext(null),Ao=z.createContext(null),Ey=z.createContext(null),ws=z.createContext({outlet:null,matches:[],isDataRoute:!1}),rA=z.createContext(null);function $N(t,e){let{relative:n}=e===void 0?{}:e;kc()||we(!1);let{basename:r,navigator:i}=z.useContext(Ao),{hash:s,pathname:o,search:a}=oA(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ri([r,o])),i.createHref({pathname:l,search:a,hash:s})}function kc(){return z.useContext(Ey)!=null}function kf(){return kc()||we(!1),z.useContext(Ey).location}function iA(t){z.useContext(Ao).static||z.useLayoutEffect(t)}function sA(){let{isDataRoute:t}=z.useContext(ws);return t?rO():qN()}function qN(){kc()||we(!1);let t=z.useContext(Cf),{basename:e,future:n,navigator:r}=z.useContext(Ao),{matches:i}=z.useContext(ws),{pathname:s}=kf(),o=JSON.stringify(my(i,n.v7_relativeSplatPath)),a=z.useRef(!1);return iA(()=>{a.current=!0}),z.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let h=gy(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:ri([e,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[e,r,o,s,t])}const WN=z.createContext(null);function HN(t){let e=z.useContext(ws).outlet;return e&&z.createElement(WN.Provider,{value:t},e)}function oA(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=z.useContext(Ao),{matches:i}=z.useContext(ws),{pathname:s}=kf(),o=JSON.stringify(my(i,r.v7_relativeSplatPath));return z.useMemo(()=>gy(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function GN(t,e,n,r){kc()||we(!1);let{navigator:i}=z.useContext(Ao),{matches:s}=z.useContext(ws),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=kf(),d;d=c;let h=d.pathname||"/",p=h;if(l!=="/"){let T=l.replace(/^\//,"").split("/");p="/"+h.replace(/^\//,"").split("/").slice(T.length).join("/")}let _=_a(t,{pathname:p});return XN(_&&_.map(T=>Object.assign({},T,{params:Object.assign({},a,T.params),pathname:ri([l,i.encodeLocation?i.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?l:ri([l,i.encodeLocation?i.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),s,n,r)}function KN(){let t=nO(),e=yy(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),n?z.createElement("pre",{style:i},n):null,null)}const QN=z.createElement(KN,null);class JN extends z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?z.createElement(ws.Provider,{value:this.props.routeContext},z.createElement(rA.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function YN(t){let{routeContext:e,match:n,children:r}=t,i=z.useContext(Cf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),z.createElement(ws.Provider,{value:e},r)}function XN(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);d>=0||we(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let h=o[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=d),h.route.id){let{loaderData:p,errors:_}=n,E=h.route.loader&&p[h.route.id]===void 0&&(!_||_[h.route.id]===void 0);if(h.route.lazy||E){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,h,p)=>{let _,E=!1,T=null,C=null;n&&(_=a&&h.route.id?a[h.route.id]:void 0,T=h.route.errorElement||QN,l&&(c<0&&p===0?(iO("route-fallback"),E=!0,C=null):c===p&&(E=!0,C=h.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,p+1)),v=()=>{let I;return _?I=T:E?I=C:h.route.Component?I=z.createElement(h.route.Component,null):h.route.element?I=h.route.element:I=d,z.createElement(YN,{match:h,routeContext:{outlet:d,matches:S,isDataRoute:n!=null},children:I})};return n&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?z.createElement(JN,{location:n.location,revalidation:n.revalidation,component:T,error:_,children:v(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):v()},null)}var aA=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(aA||{}),Bh=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Bh||{});function ZN(t){let e=z.useContext(Cf);return e||we(!1),e}function eO(t){let e=z.useContext(nA);return e||we(!1),e}function tO(t){let e=z.useContext(ws);return e||we(!1),e}function lA(t){let e=tO(),n=e.matches[e.matches.length-1];return n.route.id||we(!1),n.route.id}function nO(){var t;let e=z.useContext(rA),n=eO(Bh.UseRouteError),r=lA(Bh.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function rO(){let{router:t}=ZN(aA.UseNavigateStable),e=lA(Bh.UseNavigateStable),n=z.useRef(!1);return iA(()=>{n.current=!0}),z.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Uh({fromRouteId:e},s)))},[t,e])}const pI={};function iO(t,e,n){pI[t]||(pI[t]=!0)}function sO(t){return HN(t.context)}function oO(t){let{basename:e="/",children:n=null,location:r,navigationType:i=vt.Pop,navigator:s,static:o=!1,future:a}=t;kc()&&we(!1);let l=e.replace(/^\/*/,"/"),c=z.useMemo(()=>({basename:l,navigator:s,static:o,future:Uh({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=vs(r));let{pathname:d="/",search:h="",hash:p="",state:_=null,key:E="default"}=r,T=z.useMemo(()=>{let C=ll(d,l);return C==null?null:{location:{pathname:C,search:h,hash:p,state:_,key:E},navigationType:i}},[l,d,h,p,_,E,i]);return T==null?null:z.createElement(Ao.Provider,{value:c},z.createElement(Ey.Provider,{children:n,value:T}))}new Promise(()=>{});function aO(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:z.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:z.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:z.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nc(){return nc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},nc.apply(this,arguments)}function lO(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function uO(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function cO(t,e){return t.button===0&&(!e||e==="_self")&&!uO(t)}const dO=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],hO="6";try{window.__reactRouterVersion=hO}catch{}function fO(t,e){return RN({basename:void 0,future:nc({},void 0,{v7_prependBasename:!0}),history:KD({window:void 0}),hydrationData:pO(),routes:t,mapRouteProperties:aO,unstable_dataStrategy:void 0,window:void 0}).initialize()}function pO(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=nc({},e,{errors:mO(e.errors)})),e}function mO(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new _y(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const gO=z.createContext({isTransitioning:!1}),_O=z.createContext(new Map),yO="startTransition",mI=Vb[yO],vO="flushSync",gI=GD[vO];function wO(t){mI?mI(t):t()}function Jl(t){gI?gI(t):t()}let EO=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function IO(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=z.useState(n.state),[o,a]=z.useState(),[l,c]=z.useState({isTransitioning:!1}),[d,h]=z.useState(),[p,_]=z.useState(),[E,T]=z.useState(),C=z.useRef(new Map),{v7_startTransition:S}=r||{},v=z.useCallback(g=>{S?wO(g):g()},[S]),I=z.useCallback((g,y)=>{let{deletedFetchers:R,unstable_flushSync:A,unstable_viewTransitionOpts:k}=y;R.forEach(P=>C.current.delete(P)),g.fetchers.forEach((P,re)=>{P.data!==void 0&&C.current.set(re,P.data)});let b=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!k||b){A?Jl(()=>s(g)):v(()=>s(g));return}if(A){Jl(()=>{p&&(d&&d.resolve(),p.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:k.currentLocation,nextLocation:k.nextLocation})});let P=n.window.document.startViewTransition(()=>{Jl(()=>s(g))});P.finished.finally(()=>{Jl(()=>{h(void 0),_(void 0),a(void 0),c({isTransitioning:!1})})}),Jl(()=>_(P));return}p?(d&&d.resolve(),p.skipTransition(),T({state:g,currentLocation:k.currentLocation,nextLocation:k.nextLocation})):(a(g),c({isTransitioning:!0,flushSync:!1,currentLocation:k.currentLocation,nextLocation:k.nextLocation}))},[n.window,p,d,C,v]);z.useLayoutEffect(()=>n.subscribe(I),[n,I]),z.useEffect(()=>{l.isTransitioning&&!l.flushSync&&h(new EO)},[l]),z.useEffect(()=>{if(d&&o&&n.window){let g=o,y=d.promise,R=n.window.document.startViewTransition(async()=>{v(()=>s(g)),await y});R.finished.finally(()=>{h(void 0),_(void 0),a(void 0),c({isTransitioning:!1})}),_(R)}},[v,o,d,n.window]),z.useEffect(()=>{d&&o&&i.location.key===o.location.key&&d.resolve()},[d,p,i.location,o]),z.useEffect(()=>{!l.isTransitioning&&E&&(a(E.state),c({isTransitioning:!0,flushSync:!1,currentLocation:E.currentLocation,nextLocation:E.nextLocation}),T(void 0))},[l.isTransitioning,E]),z.useEffect(()=>{},[]);let x=z.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:g=>n.navigate(g),push:(g,y,R)=>n.navigate(g,{state:y,preventScrollReset:R==null?void 0:R.preventScrollReset}),replace:(g,y,R)=>n.navigate(g,{replace:!0,state:y,preventScrollReset:R==null?void 0:R.preventScrollReset})}),[n]),U=n.basename||"/",B=z.useMemo(()=>({router:n,navigator:x,static:!1,basename:U}),[n,x,U]);return z.createElement(z.Fragment,null,z.createElement(Cf.Provider,{value:B},z.createElement(nA.Provider,{value:i},z.createElement(_O.Provider,{value:C.current},z.createElement(gO.Provider,{value:l},z.createElement(oO,{basename:U,location:i.location,navigationType:i.historyAction,navigator:x,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?z.createElement(TO,{routes:n.routes,future:n.future,state:i}):e))))),null)}function TO(t){let{routes:e,future:n,state:r}=t;return GN(e,void 0,r,n)}const SO=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",RO=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,am=z.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:d,unstable_viewTransition:h}=e,p=lO(e,dO),{basename:_}=z.useContext(Ao),E,T=!1;if(typeof c=="string"&&RO.test(c)&&(E=c,SO))try{let I=new URL(window.location.href),x=c.startsWith("//")?new URL(I.protocol+c):new URL(c),U=ll(x.pathname,_);x.origin===I.origin&&U!=null?c=U+x.search+x.hash:T=!0}catch{}let C=$N(c,{relative:i}),S=AO(c,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:h});function v(I){r&&r(I),I.defaultPrevented||S(I)}return z.createElement("a",nc({},p,{href:E||C,onClick:T||s?r:v,ref:n,target:l}))});var _I;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(_I||(_I={}));var yI;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(yI||(yI={}));function AO(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=sA(),c=kf(),d=oA(t,{relative:o});return z.useCallback(h=>{if(cO(h,n)){h.preventDefault();let p=r!==void 0?r:lo(c)===lo(d);l(t,{replace:p,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,l,d,r,i,n,t,s,o,a])}var vI={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},PO=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},cA={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,h=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(p=64)),r.push(n[d],n[h],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uA(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):PO(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new CO;const p=s<<2|a>>4;if(r.push(p),c!==64){const _=a<<4&240|c>>2;if(r.push(_),h!==64){const E=c<<6&192|h;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class CO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kO=function(t){const e=uA(t);return cA.encodeByteArray(e,!0)},jh=function(t){return kO(t).replace(/\./g,"")},dA=function(t){try{return cA.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function zh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!bO(n)||(t[n]=zh(t[n],e[n]));return t}function bO(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DO=()=>xO().__FIREBASE_DEFAULTS__,NO=()=>{if(typeof process>"u"||typeof vI>"u")return;const t=vI.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},OO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&dA(t[1]);return e&&JSON.parse(e)},bf=()=>{try{return DO()||NO()||OO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hA=t=>{var e,n;return(n=(e=bf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},LO=t=>{const e=hA(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fA=()=>{var t;return(t=bf())===null||t===void 0?void 0:t.config},pA=t=>{var e;return(e=bf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[jh(JSON.stringify(n)),jh(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function MO(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function Iy(){var t;const e=(t=bf())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gA(){return typeof self=="object"&&self.self===self}function _A(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ty(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yA(){const t=Ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function vA(){return!Iy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rc(){try{return typeof indexedDB=="object"}catch{return!1}}function FO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UO="FirebaseError";class sn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=UO,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Po.prototype.create)}}class Po{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?BO(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new sn(i,a,r)}}function BO(t,e){return t.replace(jO,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const jO=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function zO(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ba(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(EI(s)&&EI(o)){if(!Ba(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function EI(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ya(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function du(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function wA(t,e){const n=new $O(t,e);return n.subscribe.bind(n)}class $O{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=lm),i.error===void 0&&(i.error=lm),i.complete===void 0&&(i.complete=lm);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function lm(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t){return t&&t._delegate?t._delegate:t}class nr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new VO;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GO(e))try{this.getOrInitializeService({instanceIdentifier:Vs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vs){return this.instances.has(e)}getOptions(e=Vs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:HO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vs){return this.component?this.component.multipleInstances?e:Vs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function HO(t){return t===Vs?void 0:t}function GO(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new WO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=[];var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const IA={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},KO=ve.INFO,QO={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},JO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=QO[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xf{constructor(e){this.name=e,this._logLevel=KO,this._logHandler=JO,this._userLogHandler=null,Sy.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?IA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}function YO(t){Sy.forEach(e=>{e.setLogLevel(t)})}function XO(t,e){for(const n of Sy){let r=null;e&&e.level&&(r=IA[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:ve[s].toLowerCase(),message:a,args:o,type:i.name})}}}const ZO=(t,e)=>e.some(n=>t instanceof n);let II,TI;function eL(){return II||(II=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tL(){return TI||(TI=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const TA=new WeakMap,Ag=new WeakMap,SA=new WeakMap,um=new WeakMap,Ry=new WeakMap;function nL(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ts(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&TA.set(n,t)}).catch(()=>{}),Ry.set(e,t),e}function rL(t){if(Ag.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ag.set(t,e)}let Pg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ag.get(t);if(e==="objectStoreNames")return t.objectStoreNames||SA.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ts(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function iL(t){Pg=t(Pg)}function sL(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(cm(this),e,...n);return SA.set(r,e.sort?e.sort():[e]),ts(r)}:tL().includes(t)?function(...e){return t.apply(cm(this),e),ts(TA.get(this))}:function(...e){return ts(t.apply(cm(this),e))}}function oL(t){return typeof t=="function"?sL(t):(t instanceof IDBTransaction&&rL(t),ZO(t,eL())?new Proxy(t,Pg):t)}function ts(t){if(t instanceof IDBRequest)return nL(t);if(um.has(t))return um.get(t);const e=oL(t);return e!==t&&(um.set(t,e),Ry.set(e,t)),e}const cm=t=>Ry.get(t);function aL(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ts(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ts(o.result),l.oldVersion,l.newVersion,ts(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const lL=["get","getKey","getAll","getAllKeys","count"],uL=["put","add","delete","clear"],dm=new Map;function SI(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dm.get(e))return dm.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=uL.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||lL.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return dm.set(e,s),s}iL(t=>({...t,get:(e,n,r)=>SI(e,n)||t.get(e,n,r),has:(e,n)=>!!SI(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dL(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dL(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $h="@firebase/app",Cg="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=new xf("@firebase/app"),hL="@firebase/app-compat",fL="@firebase/analytics-compat",pL="@firebase/analytics",mL="@firebase/app-check-compat",gL="@firebase/app-check",_L="@firebase/auth",yL="@firebase/auth-compat",vL="@firebase/database",wL="@firebase/database-compat",EL="@firebase/functions",IL="@firebase/functions-compat",TL="@firebase/installations",SL="@firebase/installations-compat",RL="@firebase/messaging",AL="@firebase/messaging-compat",PL="@firebase/performance",CL="@firebase/performance-compat",kL="@firebase/remote-config",bL="@firebase/remote-config-compat",xL="@firebase/storage",DL="@firebase/storage-compat",NL="@firebase/firestore",OL="@firebase/vertexai-preview",LL="@firebase/firestore-compat",VL="firebase",ML="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss="[DEFAULT]",FL={[$h]:"fire-core",[hL]:"fire-core-compat",[pL]:"fire-analytics",[fL]:"fire-analytics-compat",[gL]:"fire-app-check",[mL]:"fire-app-check-compat",[_L]:"fire-auth",[yL]:"fire-auth-compat",[vL]:"fire-rtdb",[wL]:"fire-rtdb-compat",[EL]:"fire-fn",[IL]:"fire-fn-compat",[TL]:"fire-iid",[SL]:"fire-iid-compat",[RL]:"fire-fcm",[AL]:"fire-fcm-compat",[PL]:"fire-perf",[CL]:"fire-perf-compat",[kL]:"fire-rc",[bL]:"fire-rc-compat",[xL]:"fire-gcs",[DL]:"fire-gcs-compat",[NL]:"fire-fst",[LL]:"fire-fst-compat",[OL]:"fire-vertex","fire-js":"fire-js",[VL]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=new Map,ja=new Map,za=new Map;function ic(t,e){try{t.container.addComponent(e)}catch(n){uo.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function RA(t,e){t.container.addOrOverwriteComponent(e)}function ci(t){const e=t.name;if(za.has(e))return uo.debug(`There were multiple attempts to register component ${e}.`),!1;za.set(e,t);for(const n of os.values())ic(n,t);for(const n of ja.values())ic(n,t);return!0}function bc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function UL(t,e,n=ss){bc(t,e).clearInstance(n)}function AA(t){return t.options!==void 0}function lt(t){return t.settings!==void 0}function BL(){za.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jL={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xn=new Po("app","Firebase",jL);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PA=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zL extends PA{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()}),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,Fn($h,Cg,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Cy(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Xn.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=ML;function Ay(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ss,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Xn.create("bad-app-name",{appName:String(i)});if(n||(n=fA()),!n)throw Xn.create("no-options");const s=os.get(i);if(s){if(Ba(n,s.options)&&Ba(r,s.config))return s;throw Xn.create("duplicate-app",{appName:i})}const o=new EA(i);for(const l of za.values())o.addComponent(l);const a=new PA(n,r,o);return os.set(i,a),a}function $L(t,e){if(gA())throw Xn.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;AA(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((d,h)=>Math.imul(31,d)+h.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Xn.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=ja.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new EA(s);for(const c of za.values())a.addComponent(c);const l=new zL(n,e,s,a);return ja.set(s,l),l}function Py(t=ss){const e=os.get(t);if(!e&&t===ss&&fA())return Ay();if(!e)throw Xn.create("no-app",{appName:t});return e}function qL(){return Array.from(os.values())}async function Cy(t){let e=!1;const n=t.name;os.has(n)?(e=!0,os.delete(n)):ja.has(n)&&t.decRefCount()<=0&&(ja.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function Fn(t,e,n){var r;let i=(r=FL[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),uo.warn(a.join(" "));return}ci(new nr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function CA(t,e){if(t!==null&&typeof t!="function")throw Xn.create("invalid-log-argument");XO(t,e)}function kA(t){YO(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WL="firebase-heartbeat-database",HL=1,sc="firebase-heartbeat-store";let hm=null;function bA(){return hm||(hm=aL(WL,HL,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(sc)}catch(n){console.warn(n)}}}}).catch(t=>{throw Xn.create("idb-open",{originalErrorMessage:t.message})})),hm}async function GL(t){try{const n=(await bA()).transaction(sc),r=await n.objectStore(sc).get(xA(t));return await n.done,r}catch(e){if(e instanceof sn)uo.warn(e.message);else{const n=Xn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});uo.warn(n.message)}}}async function RI(t,e){try{const r=(await bA()).transaction(sc,"readwrite");await r.objectStore(sc).put(e,xA(t)),await r.done}catch(n){if(n instanceof sn)uo.warn(n.message);else{const r=Xn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});uo.warn(r.message)}}}function xA(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KL=1024,QL=30*24*60*60*1e3;class JL{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new XL(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=AI();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=QL}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=AI(),{heartbeatsToSend:r,unsentEntries:i}=YL(this._heartbeatsCache.heartbeats),s=jh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function AI(){return new Date().toISOString().substring(0,10)}function YL(t,e=KL){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),PI(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),PI(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class XL{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rc()?FO().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await GL(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return RI(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return RI(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function PI(t){return jh(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZL(t){ci(new nr("platform-logger",e=>new cL(e),"PRIVATE")),ci(new nr("heartbeat",e=>new JL(e),"PRIVATE")),Fn($h,Cg,t),Fn($h,Cg,"esm2017"),Fn("fire-js","")}ZL("");const eV=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:sn,SDK_VERSION:mi,_DEFAULT_ENTRY_NAME:ss,_addComponent:ic,_addOrOverwriteComponent:RA,_apps:os,_clearComponents:BL,_components:za,_getProvider:bc,_isFirebaseApp:AA,_isFirebaseServerApp:lt,_registerComponent:ci,_removeServiceInstance:UL,_serverApps:ja,deleteApp:Cy,getApp:Py,getApps:qL,initializeApp:Ay,initializeServerApp:$L,onLog:CA,registerVersion:Fn,setLogLevel:kA},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(e,n){this._delegate=e,this.firebase=n,ic(e,new nr("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Cy(this._delegate)))}_getService(e,n=ss){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=ss){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){ic(this._delegate,e)}_addOrOverwriteComponent(e){RA(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nV={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},CI=new Po("app-compat","Firebase",nV);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rV(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Fn,setLogLevel:kA,onLog:CA,apps:null,SDK_VERSION:mi,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:eV}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||ss,!wI(e,c))throw CI.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,d={}){const h=Ay(c,d);if(wI(e,h.name))return e[h.name];const p=new t(h,n);return e[h.name]=p,p}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const d=c.name,h=d.replace("-compat","");if(ci(c)&&c.type==="PUBLIC"){const p=(_=i())=>{if(typeof _[h]!="function")throw CI.create("invalid-app-argument",{appName:d});return _[h]()};c.serviceProps!==void 0&&zh(p,c.serviceProps),n[h]=p,t.prototype[h]=function(..._){return this._getService.bind(this,d).apply(this,c.multipleInstances?_:[])}}return c.type==="PUBLIC"?n[h]:null}function l(c,d){return d==="serverAuth"?null:d}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DA(){const t=rV(tV);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:DA,extendNamespace:e,createSubscribe:wA,ErrorFactory:Po,deepExtend:zh});function e(n){zh(t,n)}return t}const iV=DA();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=new xf("@firebase/app-compat"),sV="@firebase/app-compat",oV="0.2.35";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aV(t){Fn(sV,oV,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(gA()&&self.firebase!==void 0){kI.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&kI.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const De=iV;aV();var lV="firebase",uV="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */De.registerVersion(lV,uV,"app-compat");function ky(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Yl={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Ko={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cV(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function NA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dV=cV,hV=NA,OA=new Po("auth","Firebase",NA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh=new xf("@firebase/auth");function fV(t,...e){qh.logLevel<=ve.WARN&&qh.warn(`Auth (${mi}): ${t}`,...e)}function Zd(t,...e){qh.logLevel<=ve.ERROR&&qh.error(`Auth (${mi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t,...e){throw xy(t,...e)}function Pt(t,...e){return xy(t,...e)}function by(t,e,n){const r=Object.assign(Object.assign({},hV()),{[e]:n});return new Po("auth","Firebase",r).create(e,{appName:t.name})}function Nt(t){return by(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cl(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Lt(t,"argument-error"),by(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xy(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return OA.create(t,...e)}function K(t,e,...n){if(!t)throw xy(e,...n)}function br(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zd(e),new Error(e)}function _r(t,e){t||br(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Dy(){return bI()==="http:"||bI()==="https:"}function bI(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pV(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dy()||_A()||"connection"in navigator)?navigator.onLine:!0}function mV(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,n){this.shortDelay=e,this.longDelay=n,_r(n>e,"Short delay should be less than long delay!"),this.isMobile=MO()||Ty()}get(){return pV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(t,e){_r(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;br("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;br("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;br("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gV={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _V=new xc(3e4,6e4);function dt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ht(t,e,n,r,i={}){return VA(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ul(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),LA.fetch()(MA(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function VA(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},gV),e);try{const i=new vV(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw hu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw hu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw hu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw hu(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw by(t,d,c);Lt(t,d)}}catch(i){if(i instanceof sn)throw i;Lt(t,"network-request-failed",{message:String(i)})}}async function gi(t,e,n,r,i={}){const s=await ht(t,e,n,r,i);return"mfaPendingCredential"in s&&Lt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function MA(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ny(t.config,i):`${t.config.apiScheme}://${i}`}function yV(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vV{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pt(this.auth,"network-request-failed")),_V.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Pt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(t){return t!==void 0&&t.getResponse!==void 0}function DI(t){return t!==void 0&&t.enterprise!==void 0}class wV{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return yV(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EV(t){return(await ht(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function IV(t,e){return ht(t,"GET","/v2/recaptchaConfig",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TV(t,e){return ht(t,"POST","/v1/accounts:delete",e)}async function SV(t,e){return ht(t,"POST","/v1/accounts:update",e)}async function FA(t,e){return ht(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RV(t,e=!1){const n=ie(t),r=await n.getIdToken(e),i=Df(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Cu(fm(i.auth_time)),issuedAtTime:Cu(fm(i.iat)),expirationTime:Cu(fm(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function fm(t){return Number(t)*1e3}function Df(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Zd("JWT malformed, contained fewer than 3 sections"),null;try{const i=dA(n);return i?JSON.parse(i):(Zd("Failed to decode base64 JWT payload"),null)}catch(i){return Zd("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function NI(t){const e=Df(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof sn&&AV(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function AV({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PV{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cu(this.lastLoginAt),this.creationTime=Cu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ac(t){var e;const n=t.auth,r=await t.getIdToken(),i=await di(t,FA(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?UA(s.providerUserInfo):[],a=kV(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new kg(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function CV(t){const e=ie(t);await ac(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kV(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function UA(t){return t.map(e=>{var{providerId:n}=e,r=ky(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bV(t,e){const n=await VA(t,{},async()=>{const r=ul({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=MA(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",LA.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function xV(t,e){return ht(t,"POST","/v2/accounts:revokeToken",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):NI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=NI(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await bV(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ra;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ra,this.toJSON())}_performRefresh(){return br("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Zr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ky(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new PV(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new kg(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await di(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return RV(this,e)}reload(){return CV(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Zr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ac(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(lt(this.auth.app))return Promise.reject(Nt(this.auth));const e=await this.getIdToken();return await di(this,TV(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:I,emailVerified:x,isAnonymous:U,providerData:B,stsTokenManager:g}=n;K(I&&g,e,"internal-error");const y=Ra.fromJSON(this.name,g);K(typeof I=="string",e,"internal-error"),xi(h,e.name),xi(p,e.name),K(typeof x=="boolean",e,"internal-error"),K(typeof U=="boolean",e,"internal-error"),xi(_,e.name),xi(E,e.name),xi(T,e.name),xi(C,e.name),xi(S,e.name),xi(v,e.name);const R=new Zr({uid:I,auth:e,email:p,emailVerified:x,displayName:h,isAnonymous:U,photoURL:E,phoneNumber:_,tenantId:T,stsTokenManager:y,createdAt:S,lastLoginAt:v});return B&&Array.isArray(B)&&(R.providerData=B.map(A=>Object.assign({},A))),C&&(R._redirectEventId=C),R}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ra;i.updateFromServerResponse(n);const s=new Zr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ac(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?UA(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Ra;a.updateFromIdToken(r);const l=new Zr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new kg(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI=new Map;function Vn(t){_r(t instanceof Function,"Expected a class definition");let e=OI.get(t);return e?(_r(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,OI.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}BA.type="NONE";const $a=BA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(t,e,n){return`firebase:${t}:${e}:${n}`}class Aa{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Zs(this.userKey,i.apiKey,s),this.fullPersistenceKey=Zs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Aa(Vn($a),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Vn($a);const o=Zs(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const h=Zr._fromJSON(e,d);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Aa(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Aa(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($A(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qA(e))return"Blackberry";if(WA(e))return"Webos";if(Oy(e))return"Safari";if((e.includes("chrome/")||zA(e))&&!e.includes("edge/"))return"Chrome";if(Dc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function jA(t=Ye()){return/firefox\//i.test(t)}function Oy(t=Ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zA(t=Ye()){return/crios\//i.test(t)}function $A(t=Ye()){return/iemobile/i.test(t)}function Dc(t=Ye()){return/android/i.test(t)}function qA(t=Ye()){return/blackberry/i.test(t)}function WA(t=Ye()){return/webos/i.test(t)}function dl(t=Ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function DV(t=Ye()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function NV(t=Ye()){var e;return dl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function OV(){return yA()&&document.documentMode===10}function HA(t=Ye()){return dl(t)||Dc(t)||WA(t)||qA(t)||/windows phone/i.test(t)||$A(t)}function LV(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(t,e=[]){let n;switch(t){case"Browser":n=LI(Ye());break;case"Worker":n=`${LI(Ye())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${mi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VV{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MV(t,e={}){return ht(t,"GET","/v2/passwordPolicy",dt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FV=6;class UV{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:FV,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BV{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new VI(this),this.idTokenSubscription=new VI(this),this.beforeStateQueue=new VV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=OA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Aa.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await FA(this,{idToken:e}),r=await Zr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(lt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ac(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mV()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(lt(this.app))return Promise.reject(Nt(this));const n=e?ie(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return lt(this.app)?Promise.reject(Nt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return lt(this.app)?Promise.reject(Nt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await MV(this),n=new UV(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Po("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await xV(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Aa.create(this,[Vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=GA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&fV(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ut(t){return ie(t)}class VI{constructor(e){this.auth=e,this.observer=null,this.addObserver=wA(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jV(t){Nc=t}function Ly(t){return Nc.loadJS(t)}function zV(){return Nc.recaptchaV2Script}function $V(){return Nc.recaptchaEnterpriseScript}function qV(){return Nc.gapiScript}function KA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const WV="recaptcha-enterprise",HV="NO_RECAPTCHA";class GV{constructor(e){this.type=WV,this.auth=ut(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{IV(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new wV(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;DI(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(HV)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&DI(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=$V();l.length!==0&&(l+=a),Ly(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function MI(t,e,n,r=!1){const i=new GV(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function lc(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await MI(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await MI(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KV(t,e){const n=bc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ba(s,e??{}))return i;Lt(i,"already-initialized")}return n.initialize({options:e})}function QV(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function QA(t,e,n){const r=ut(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=JA(e),{host:o,port:a}=JV(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||YV()}function JA(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JV(t){const e=JA(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:FI(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:FI(o)}}}function FI(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function YV(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return br("not implemented")}_getIdTokenResponse(e){return br("not implemented")}_linkToIdToken(e,n){return br("not implemented")}_getReauthenticationResolver(e){return br("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YA(t,e){return ht(t,"POST","/v1/accounts:resetPassword",dt(t,e))}async function XV(t,e){return ht(t,"POST","/v1/accounts:update",e)}async function ZV(t,e){return ht(t,"POST","/v1/accounts:signUp",e)}async function eM(t,e){return ht(t,"POST","/v1/accounts:update",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tM(t,e){return gi(t,"POST","/v1/accounts:signInWithPassword",dt(t,e))}async function Nf(t,e){return ht(t,"POST","/v1/accounts:sendOobCode",dt(t,e))}async function nM(t,e){return Nf(t,e)}async function rM(t,e){return Nf(t,e)}async function iM(t,e){return Nf(t,e)}async function sM(t,e){return Nf(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oM(t,e){return gi(t,"POST","/v1/accounts:signInWithEmailLink",dt(t,e))}async function aM(t,e){return gi(t,"POST","/v1/accounts:signInWithEmailLink",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc extends hl{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new uc(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new uc(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lc(e,n,"signInWithPassword",tM);case"emailLink":return oM(e,{email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lc(e,r,"signUpPassword",ZV);case"emailLink":return aM(e,{idToken:n,email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(t,e){return gi(t,"POST","/v1/accounts:signInWithIdp",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lM="http://localhost";class Fr extends hl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Fr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ky(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Fr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ii(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ii(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ii(e,n)}buildRequest(){const e={requestUri:lM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ul(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uM(t,e){return ht(t,"POST","/v1/accounts:sendVerificationCode",dt(t,e))}async function cM(t,e){return gi(t,"POST","/v1/accounts:signInWithPhoneNumber",dt(t,e))}async function dM(t,e){const n=await gi(t,"POST","/v1/accounts:signInWithPhoneNumber",dt(t,e));if(n.temporaryProof)throw hu(t,"account-exists-with-different-credential",n);return n}const hM={USER_NOT_FOUND:"user-not-found"};async function fM(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return gi(t,"POST","/v1/accounts:signInWithPhoneNumber",dt(t,n),hM)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo extends hl{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new eo({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new eo({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return cM(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return dM(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return fM(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new eo({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pM(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mM(t){const e=ya(du(t)).link,n=e?ya(du(e)).deep_link_id:null,r=ya(du(t)).deep_link_id;return(r?ya(du(r)).link:null)||r||n||e||t}class Of{constructor(e){var n,r,i,s,o,a;const l=ya(du(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,h=pM((i=l.mode)!==null&&i!==void 0?i:null);K(c&&d&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=mM(e);try{return new Of(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(){this.providerId=Es.PROVIDER_ID}static credential(e,n){return uc._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Of.parseLink(n);return K(r,"argument-error"),uc._fromEmailAndCode(e,r.code,r.tenantId)}}Es.PROVIDER_ID="password";Es.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Es.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl extends _i{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Pa extends fl{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return K("providerId"in n&&"signInMethod"in n,"argument-error"),Fr._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return K(e.idToken||e.accessToken,"argument-error"),Fr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Pa.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Pa.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Pa(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends fl{constructor(){super("facebook.com")}static credential(e){return Fr._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rr.credential(e.oauthAccessToken)}catch{return null}}}Rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends fl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Fr._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ar.credential(n,r)}catch{return null}}}Ar.GOOGLE_SIGN_IN_METHOD="google.com";Ar.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends fl{constructor(){super("github.com")}static credential(e){return Fr._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pr.credential(e.oauthAccessToken)}catch{return null}}}Pr.GITHUB_SIGN_IN_METHOD="github.com";Pr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gM="http://localhost";class qa extends hl{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return ii(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ii(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ii(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new qa(r,s)}static _create(e,n){return new qa(e,n)}buildRequest(){return{requestUri:gM,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _M="saml.";class Wh extends _i{constructor(e){K(e.startsWith(_M),"argument-error"),super(e)}static credentialFromResult(e){return Wh.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Wh.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=qa.fromJSON(e);return K(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return qa._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends fl{constructor(){super("twitter.com")}static credential(e,n){return Fr._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Cr.credential(n,r)}catch{return null}}}Cr.TWITTER_SIGN_IN_METHOD="twitter.com";Cr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XA(t,e){return gi(t,"POST","/v1/accounts:signUp",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Zr._fromIdTokenResponse(e,r,i),o=UI(r);return new rr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=UI(r);return new rr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function UI(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yM(t){var e;if(lt(t.app))return Promise.reject(Nt(t));const n=ut(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new rr({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await XA(n,{returnSecureToken:!0}),i=await rr._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh extends sn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Hh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Hh(e,n,r,i)}}function ZA(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Hh._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vM(t,e){const n=ie(t);await Lf(!0,n,e);const{providerUserInfo:r}=await SV(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=eP(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Vy(t,e,n=!1){const r=await di(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return rr._forOperation(t,"link",r)}async function Lf(t,e,n){await ac(e);const r=eP(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";K(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tP(t,e,n=!1){const{auth:r}=t;if(lt(r.app))return Promise.reject(Nt(r));const i="reauthenticate";try{const s=await di(t,ZA(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=Df(s.idToken);K(o,r,"internal-error");const{sub:a}=o;return K(t.uid===a,r,"user-mismatch"),rr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Lt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nP(t,e,n=!1){if(lt(t.app))return Promise.reject(Nt(t));const r="signIn",i=await ZA(t,r,e),s=await rr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Vf(t,e){return nP(ut(t),e)}async function rP(t,e){const n=ie(t);return await Lf(!1,n,e.providerId),Vy(n,e)}async function iP(t,e){return tP(ie(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wM(t,e){return gi(t,"POST","/v1/accounts:signInWithCustomToken",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EM(t,e){if(lt(t.app))return Promise.reject(Nt(t));const n=ut(t),r=await wM(n,{token:e,returnSecureToken:!0}),i=await rr._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?My._fromServerResponse(e,n):"totpInfo"in n?Fy._fromServerResponse(e,n):Lt(e,"internal-error")}}class My extends Oc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new My(n)}}class Fy extends Oc{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Fy(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(t,e,n){var r;K(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),K(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(K(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(K(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uy(t){const e=ut(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function IM(t,e,n){const r=ut(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Mf(r,i,n),await lc(r,i,"getOobCode",rM)}async function TM(t,e,n){await YA(ie(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Uy(t),r})}async function SM(t,e){await eM(ie(t),{oobCode:e})}async function sP(t,e){const n=ie(t),r=await YA(n,{oobCode:e}),i=r.requestType;switch(K(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":K(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":K(r.mfaInfo,n,"internal-error");default:K(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Oc._fromServerResponse(ut(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function RM(t,e){const{data:n}=await sP(ie(t),e);return n.email}async function AM(t,e,n){if(lt(t.app))return Promise.reject(Nt(t));const r=ut(t),o=await lc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",XA).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Uy(t),l}),a=await rr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function PM(t,e,n){return lt(t.app)?Promise.reject(Nt(t)):Vf(ie(t),Es.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Uy(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CM(t,e,n){const r=ut(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){K(a.handleCodeInApp,r,"argument-error"),a&&Mf(r,o,a)}s(i,n),await lc(r,i,"getOobCode",iM)}function kM(t,e){const n=Of.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function bM(t,e,n){if(lt(t.app))return Promise.reject(Nt(t));const r=ie(t),i=Es.credentialWithLink(e,n||oc());return K(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Vf(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xM(t,e){return ht(t,"POST","/v1/accounts:createAuthUri",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DM(t,e){const n=Dy()?oc():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await xM(ie(t),r);return i||[]}async function NM(t,e){const n=ie(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Mf(n.auth,i,e);const{email:s}=await nM(n.auth,i);s!==t.email&&await t.reload()}async function OM(t,e,n){const r=ie(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Mf(r.auth,s,n);const{email:o}=await sM(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LM(t,e){return ht(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ie(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await di(r,LM(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function VM(t,e){const n=ie(t);return lt(n.auth.app)?Promise.reject(Nt(n.auth)):aP(n,e,null)}function MM(t,e){return aP(ie(t),null,e)}async function aP(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await di(t,XV(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FM(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Df(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Ca(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new UM(s,i);case"github.com":return new BM(s,i);case"google.com":return new jM(s,i);case"twitter.com":return new zM(s,i,t.screenName||null);case"custom":case"anonymous":return new Ca(s,null);default:return new Ca(s,r,i)}}class Ca{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class lP extends Ca{constructor(e,n,r,i){super(e,n,r),this.username=i}}class UM extends Ca{constructor(e,n){super(e,"facebook.com",n)}}class BM extends lP{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class jM extends Ca{constructor(e,n){super(e,"google.com",n)}}class zM extends lP{constructor(e,n,r){super(e,"twitter.com",n,r)}}function $M(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:FM(n)}function qM(t,e,n,r){return ie(t).onIdTokenChanged(e,n,r)}function WM(t,e,n){return ie(t).beforeAuthStateChanged(e,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new Ks("enroll",e,n)}static _fromMfaPendingCredential(e){return new Ks("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Ks._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Ks._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=ut(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Oc._fromServerResponse(r,a));K(i.mfaPendingCredential,r,"internal-error");const o=Ks._fromMfaPendingCredential(i.mfaPendingCredential);return new By(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const d=await rr._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return K(n.user,r,"internal-error"),rr._forOperation(n.user,n.operationType,c);default:Lt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function HM(t,e){var n;const r=ie(t),i=e;return K(e.customData.operationType,r,"argument-error"),K((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),By._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GM(t,e){return ht(t,"POST","/v2/accounts/mfaEnrollment:start",dt(t,e))}function KM(t,e){return ht(t,"POST","/v2/accounts/mfaEnrollment:finalize",dt(t,e))}function QM(t,e){return ht(t,"POST","/v2/accounts/mfaEnrollment:withdraw",dt(t,e))}class jy{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Oc._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new jy(e)}async getSession(){return Ks._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await di(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await di(this.user,QM(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const pm=new WeakMap;function JM(t){const e=ie(t);return pm.has(e)||pm.set(e,jy._fromUser(e)),pm.get(e)}const Gh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gh,"1"),this.storage.removeItem(Gh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YM(){const t=Ye();return Oy(t)||dl(t)}const XM=1e3,ZM=10;class cP extends uP{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=YM()&&LV(),this.fallbackToPolling=HA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);OV()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ZM):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},XM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}cP.type="LOCAL";const Ff=cP;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP extends uP{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}dP.type="SESSION";const as=dP;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eF(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Uf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await eF(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Uf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tF{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Lc("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const p=h;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return window}function nF(t){wt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(){return typeof wt().WorkerGlobalScope<"u"&&typeof wt().importScripts=="function"}async function rF(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iF(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function sF(){return zy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP="firebaseLocalStorageDb",oF=1,Kh="firebaseLocalStorage",fP="fbase_key";class Vc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Bf(t,e){return t.transaction([Kh],e?"readwrite":"readonly").objectStore(Kh)}function aF(){const t=indexedDB.deleteDatabase(hP);return new Vc(t).toPromise()}function bg(){const t=indexedDB.open(hP,oF);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Kh,{keyPath:fP})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Kh)?e(r):(r.close(),await aF(),e(await bg()))})})}async function BI(t,e,n){const r=Bf(t,!0).put({[fP]:e,value:n});return new Vc(r).toPromise()}async function lF(t,e){const n=Bf(t,!1).get(e),r=await new Vc(n).toPromise();return r===void 0?null:r.value}function jI(t,e){const n=Bf(t,!0).delete(e);return new Vc(n).toPromise()}const uF=800,cF=3;class pP{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cF)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uf._getInstance(sF()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rF(),!this.activeServiceWorker)return;this.sender=new tF(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iF()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bg();return await BI(e,Gh,"1"),await jI(e,Gh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>BI(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lF(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>jI(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Bf(i,!1).getAll();return new Vc(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uF)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pP.type="LOCAL";const Wa=pP;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dF(t,e){return ht(t,"POST","/v2/accounts/mfaSignIn:start",dt(t,e))}function hF(t,e){return ht(t,"POST","/v2/accounts/mfaSignIn:finalize",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fF=500,pF=6e4,bd=1e12;class mF{constructor(e){this.auth=e,this.counter=bd,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new gF(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||bd;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||bd;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||bd;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class gF{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;K(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=_F(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},pF)},fF))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function _F(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=KA("rcb"),yF=new xc(3e4,6e4);class vF{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=wt().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return K(wF(n),e,"argument-error"),this.shouldResolveImmediately(n)&&xI(wt().grecaptcha)?Promise.resolve(wt().grecaptcha):new Promise((r,i)=>{const s=wt().setTimeout(()=>{i(Pt(e,"network-request-failed"))},yF.get());wt()[mm]=()=>{wt().clearTimeout(s),delete wt()[mm];const a=wt().grecaptcha;if(!a||!xI(a)){i(Pt(e,"internal-error"));return}const l=a.render;a.render=(c,d)=>{const h=l(c,d);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${zV()}?${ul({onload:mm,render:"explicit",hl:n})}`;Ly(o).catch(()=>{clearTimeout(s),i(Pt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=wt().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function wF(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class EF{async load(e){return new mF(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP="recaptcha",IF={theme:"light",type:"image"};let TF=class{constructor(e,n,r=Object.assign({},IF)){this.parameters=r,this.type=mP,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ut(e),this.isInvisible=this.parameters.size==="invisible",K(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;K(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new EF:new vF,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){K(!this.parameters.sitekey,this.auth,"argument-error"),K(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),K(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=wt()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){K(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){K(Dy()&&!zy(),this.auth,"internal-error"),await SF(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await EV(this.auth);K(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return K(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function SF(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=eo._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function RF(t,e,n){if(lt(t.app))return Promise.reject(Nt(t));const r=ut(t),i=await jf(r,e,ie(n));return new $y(i,s=>Vf(r,s))}async function AF(t,e,n){const r=ie(t);await Lf(!1,r,"phone");const i=await jf(r.auth,e,ie(n));return new $y(i,s=>rP(r,s))}async function PF(t,e,n){const r=ie(t);if(lt(r.auth.app))return Promise.reject(Nt(r.auth));const i=await jf(r.auth,e,ie(n));return new $y(i,s=>iP(r,s))}async function jf(t,e,n){var r;const i=await n.verify();try{K(typeof i=="string",t,"argument-error"),K(n.type===mP,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return K(o.type==="enroll",t,"internal-error"),(await GM(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{K(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return K(a,t,"missing-multi-factor-info"),(await dF(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await uM(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function CF(t,e){const n=ie(t);if(lt(n.auth.app))return Promise.reject(Nt(n.auth));await Vy(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let co=class eh{constructor(e){this.providerId=eh.PROVIDER_ID,this.auth=ut(e)}verifyPhoneNumber(e,n){return jf(this.auth,e,ie(n))}static credential(e,n){return eo._fromVerification(e,n)}static credentialFromResult(e){const n=e;return eh.credentialFromTaggedObject(n)}static credentialFromError(e){return eh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?eo._fromTokenResponse(n,r):null}};co.PROVIDER_ID="phone";co.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(t,e){return e?Vn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy extends hl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ii(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ii(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ii(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kF(t){return nP(t.auth,new qy(t),t.bypassAuthState)}function bF(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),tP(n,new qy(t),t.bypassAuthState)}async function xF(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),Vy(n,new qy(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kF;case"linkViaPopup":case"linkViaRedirect":return xF;case"reauthViaPopup":case"reauthViaRedirect":return bF;default:Lt(this.auth,"internal-error")}}resolve(e){_r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DF=new xc(2e3,1e4);async function NF(t,e,n){if(lt(t.app))return Promise.reject(Pt(t,"operation-not-supported-in-this-environment"));const r=ut(t);cl(t,e,_i);const i=Co(r,n);return new ei(r,"signInViaPopup",e,i).executeNotNull()}async function OF(t,e,n){const r=ie(t);if(lt(r.auth.app))return Promise.reject(Pt(r.auth,"operation-not-supported-in-this-environment"));cl(r.auth,e,_i);const i=Co(r.auth,n);return new ei(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function LF(t,e,n){const r=ie(t);cl(r.auth,e,_i);const i=Co(r.auth,n);return new ei(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class ei extends gP{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ei.currentPopupAction&&ei.currentPopupAction.cancel(),ei.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){_r(this.filter.length===1,"Popup operations only handle one event");const e=Lc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ei.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,DF.get())};e()}}ei.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VF="pendingRedirect",ku=new Map;class MF extends gP{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ku.get(this.auth._key());if(!e){try{const r=await FF(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ku.set(this.auth._key(),e)}return this.bypassAuthState||ku.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FF(t,e){const n=yP(e),r=_P(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Wy(t,e){return _P(t)._set(yP(e),"true")}function UF(){ku.clear()}function Hy(t,e){ku.set(t._key(),e)}function _P(t){return Vn(t._redirectPersistence)}function yP(t){return Zs(VF,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BF(t,e,n){return jF(t,e,n)}async function jF(t,e,n){if(lt(t.app))return Promise.reject(Nt(t));const r=ut(t);cl(t,e,_i),await r._initializationPromise;const i=Co(r,n);return await Wy(i,r),i._openRedirect(r,e,"signInViaRedirect")}function zF(t,e,n){return $F(t,e,n)}async function $F(t,e,n){const r=ie(t);if(cl(r.auth,e,_i),lt(r.auth.app))return Promise.reject(Nt(r.auth));await r.auth._initializationPromise;const i=Co(r.auth,n);await Wy(i,r.auth);const s=await vP(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function qF(t,e,n){return WF(t,e,n)}async function WF(t,e,n){const r=ie(t);cl(r.auth,e,_i),await r.auth._initializationPromise;const i=Co(r.auth,n);await Lf(!1,r,e.providerId),await Wy(i,r.auth);const s=await vP(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function HF(t,e){return await ut(t)._initializationPromise,zf(t,e,!1)}async function zf(t,e,n=!1){if(lt(t.app))return Promise.reject(Nt(t));const r=ut(t),i=Co(r,e),o=await new MF(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function vP(t){const e=Lc(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GF=10*60*1e3;class wP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KF(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!EP(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GF&&this.cachedEventUids.clear(),this.cachedEventUids.has(zI(e))}saveEventToCache(e){this.cachedEventUids.add(zI(e)),this.lastProcessedEventTime=Date.now()}}function zI(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function EP({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KF(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return EP(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IP(t,e={}){return ht(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QF=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JF=/^https?/;async function YF(t){if(t.config.emulator)return;const{authorizedDomains:e}=await IP(t);for(const n of e)try{if(XF(n))return}catch{}Lt(t,"unauthorized-domain")}function XF(t){const e=oc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!JF.test(n))return!1;if(QF.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZF=new xc(3e4,6e4);function $I(){const t=wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function e2(t){return new Promise((e,n)=>{var r,i,s;function o(){$I(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$I(),n(Pt(t,"network-request-failed"))},timeout:ZF.get()})}if(!((i=(r=wt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=wt().gapi)===null||s===void 0)&&s.load)o();else{const a=KA("iframefcb");return wt()[a]=()=>{gapi.load?o():n(Pt(t,"network-request-failed"))},Ly(`${qV()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw th=null,e})}let th=null;function t2(t){return th=th||e2(t),th}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2=new xc(5e3,15e3),r2="__/auth/iframe",i2="emulator/auth/iframe",s2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},o2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function a2(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ny(e,i2):`https://${t.config.authDomain}/${r2}`,r={apiKey:e.apiKey,appName:t.name,v:mi},i=o2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ul(r).slice(1)}`}async function l2(t){const e=await t2(t),n=wt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:a2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:s2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Pt(t,"network-request-failed"),a=wt().setTimeout(()=>{s(o)},n2.get());function l(){wt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},c2=500,d2=600,h2="_blank",f2="http://localhost";class qI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function p2(t,e,n,r=c2,i=d2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},u2),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ye().toLowerCase();n&&(a=zA(c)?h2:n),jA(c)&&(e=e||f2,l.scrollbars="yes");const d=Object.entries(l).reduce((p,[_,E])=>`${p}${_}=${E},`,"");if(NV(c)&&a!=="_self")return m2(e||"",a),new qI(null);const h=window.open(e||"",a,d);K(h,t,"popup-blocked");try{h.focus()}catch{}return new qI(h)}function m2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2="__/auth/handler",_2="emulator/auth/handler",y2=encodeURIComponent("fac");async function xg(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:mi,eventId:i};if(e instanceof _i){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zO(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries(s||{}))o[d]=h}if(e instanceof fl){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${y2}=${encodeURIComponent(l)}`:"";return`${v2(t)}?${ul(a).slice(1)}${c}`}function v2({config:t}){return t.emulator?Ny(t,_2):`https://${t.authDomain}/${g2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm="webStorageSupport";class w2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=as,this._completeRedirectFn=zf,this._overrideRedirectResult=Hy}async _openPopup(e,n,r,i){var s;_r((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await xg(e,n,r,oc(),i);return p2(e,o,Lc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await xg(e,n,r,oc(),i);return nF(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(_r(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await l2(e),r=new wP(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gm,{type:gm},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[gm];o!==void 0&&n(!!o),Lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=YF(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return HA()||Oy()||dl()}}const TP=w2;class E2{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return br("unexpected MultiFactorSessionType")}}}class Gy extends E2{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Gy(e)}_finalizeEnroll(e,n,r){return KM(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return hF(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class SP{constructor(){}static assertion(e){return Gy._fromCredential(e)}}SP.FACTOR_ID="phone";var WI="@firebase/auth",HI="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function S2(t){ci(new nr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:GA(t)},c=new BV(r,i,s,l);return QV(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ci(new nr("auth-internal",e=>{const n=ut(e.getProvider("auth").getImmediate());return(r=>new I2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fn(WI,HI,T2(t)),Fn(WI,HI,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R2=5*60,A2=pA("authIdTokenMaxAge")||R2;let GI=null;const P2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>A2)return;const i=n==null?void 0:n.token;GI!==i&&(GI=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function C2(t=Py()){const e=bc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=KV(t,{popupRedirectResolver:TP,persistence:[Wa,Ff,as]}),r=pA("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=P2(s.toString());WM(n,o,()=>o(n.currentUser)),qM(n,a=>o(a))}}const i=hA("auth");return i&&QA(n,`http://${i}`),n}function k2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}jV({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Pt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",k2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});S2("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b2=2e3;async function x2(t,e,n){var r;const{BuildInfo:i}=ho();_r(e.sessionId,"AuthEvent did not contain a session ID");const s=await V2(e.sessionId),o={};return dl()?o.ibi=i.packageName:Dc()?o.apn=i.packageName:Lt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,xg(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function D2(t){const{BuildInfo:e}=ho(),n={};dl()?n.iosBundleId=e.packageName:Dc()?n.androidPackageName=e.packageName:Lt(t,"operation-not-supported-in-this-environment"),await IP(t,n)}function N2(t){const{cordova:e}=ho();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,DV()?"_blank":"_system","location=yes"),n(i)})})}async function O2(t,e,n){const{cordova:r}=ho();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var h;s();const p=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof p=="function"&&p(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function c(){a||(a=window.setTimeout(()=>{o(Pt(t,"redirect-cancelled-by-user"))},b2))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(l),document.addEventListener("resume",c,!1),Dc()&&document.addEventListener("visibilitychange",d,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",d,!1),a&&window.clearTimeout(a)}})}finally{i()}}function L2(t){var e,n,r,i,s,o,a,l,c,d;const h=ho();K(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),K(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),K(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),K(typeof((l=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),K(typeof((d=(c=h==null?void 0:h.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function V2(t){const e=M2(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function M2(t){if(_r(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2=20;class U2 extends wP{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function B2(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:$2(),postBody:null,tenantId:t.tenantId,error:Pt(t,"no-auth-event")}}function j2(t,e){return Dg()._set(Ng(t),e)}async function KI(t){const e=await Dg()._get(Ng(t));return e&&await Dg()._remove(Ng(t)),e}function z2(t,e){var n,r;const i=W2(e);if(i.includes("/__/auth/callback")){const s=nh(i),o=s.firebaseError?q2(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?Pt(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function $2(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<F2;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Dg(){return Vn(Ff)}function Ng(t){return Zs("authEvent",t.config.apiKey,t.name)}function q2(t){try{return JSON.parse(t)}catch{return null}}function W2(t){const e=nh(t),n=e.link?decodeURIComponent(e.link):void 0,r=nh(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return nh(i).link||i||r||n||t}function nh(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return ya(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2=500;class G2{constructor(){this._redirectPersistence=as,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=zf,this._overrideRedirectResult=Hy}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new U2(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Lt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){L2(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),UF(),await this._originValidation(e);const o=B2(e,r,i);await j2(e,o);const a=await x2(e,o,n),l=await N2(a);return O2(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=D2(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=ho(),o=setTimeout(async()=>{await KI(e),n.onEvent(QI())},H2),a=async d=>{clearTimeout(o);const h=await KI(e);let p=null;h&&(d!=null&&d.url)&&(p=z2(h,d.url)),n.onEvent(p||QI())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,c=`${s.packageName.toLowerCase()}://`;ho().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(c)&&a({url:d}),typeof l=="function")try{l(d)}catch(h){console.error(h)}}}}const K2=G2;function QI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Pt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q2(t,e){ut(t)._logFramework(e)}var J2="@firebase/auth-compat",Y2="0.5.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2=1e3;function bu(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function Z2(){return bu()==="http:"||bu()==="https:"}function RP(t=Ye()){return!!((bu()==="file:"||bu()==="ionic:"||bu()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function eU(){return Ty()||Iy()}function tU(){return yA()&&(document==null?void 0:document.documentMode)===11}function nU(t=Ye()){return/Edge\/\d+/.test(t)}function rU(t=Ye()){return tU()||nU(t)}function AP(){try{const t=self.localStorage,e=Lc();if(t)return t.setItem(e,"1"),t.removeItem(e),rU()?rc():!0}catch{return Ky()&&rc()}return!1}function Ky(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function _m(){return(Z2()||_A()||RP())&&!eU()&&AP()&&!Ky()}function PP(){return RP()&&typeof document<"u"}async function iU(){return PP()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},X2);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function sU(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On={LOCAL:"local",NONE:"none",SESSION:"session"},Xl=K,CP="persistence";function oU(t,e){if(Xl(Object.values(On).includes(e),t,"invalid-persistence-type"),Ty()){Xl(e!==On.SESSION,t,"unsupported-persistence-type");return}if(Iy()){Xl(e===On.NONE,t,"unsupported-persistence-type");return}if(Ky()){Xl(e===On.NONE||e===On.LOCAL&&rc(),t,"unsupported-persistence-type");return}Xl(e===On.NONE||AP(),t,"unsupported-persistence-type")}async function Og(t){await t._initializationPromise;const e=kP(),n=Zs(CP,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function aU(t,e){const n=kP();if(!n)return[];const r=Zs(CP,t,e);switch(n.getItem(r)){case On.NONE:return[$a];case On.LOCAL:return[Wa,as];case On.SESSION:return[as];default:return[]}}function kP(){var t;try{return((t=sU())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lU=K;class Wi{constructor(){this.browserResolver=Vn(TP),this.cordovaResolver=Vn(K2),this.underlyingResolver=null,this._redirectPersistence=as,this._completeRedirectFn=zf,this._overrideRedirectResult=Hy}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return PP()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return lU(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await iU();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bP(t){return t.unwrap()}function uU(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cU(t){return xP(t)}function dU(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new hU(t,HM(t,e))}else if(r){const i=xP(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function xP(t){const{_tokenResponse:e}=t instanceof sn?t.customData:t;if(!e)return null;if(!(t instanceof sn)&&"temporaryProof"in e&&"phoneNumber"in e)return co.credentialFromResult(t);const n=e.providerId;if(!n||n===Yl.PASSWORD)return null;let r;switch(n){case Yl.GOOGLE:r=Ar;break;case Yl.FACEBOOK:r=Rr;break;case Yl.GITHUB:r=Pr;break;case Yl.TWITTER:r=Cr;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?qa._create(n,a):Fr._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Pa(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof sn?r.credentialFromError(t):r.credentialFromResult(t)}function En(t,e){return e.catch(n=>{throw n instanceof sn&&dU(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:cU(n),additionalUserInfo:$M(n),user:$f.getOrCreate(i)}})}async function Lg(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>En(t,n.confirm(r))}}class hU{constructor(e,n){this.resolver=n,this.auth=uU(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return En(bP(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $f=class fu{constructor(e){this._delegate=e,this.multiFactor=JM(e)}static getOrCreate(e){return fu.USER_MAP.has(e)||fu.USER_MAP.set(e,new fu(e)),fu.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return En(this.auth,rP(this._delegate,e))}async linkWithPhoneNumber(e,n){return Lg(this.auth,AF(this._delegate,e,n))}async linkWithPopup(e){return En(this.auth,LF(this._delegate,e,Wi))}async linkWithRedirect(e){return await Og(ut(this.auth)),qF(this._delegate,e,Wi)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return En(this.auth,iP(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Lg(this.auth,PF(this._delegate,e,n))}reauthenticateWithPopup(e){return En(this.auth,OF(this._delegate,e,Wi))}async reauthenticateWithRedirect(e){return await Og(ut(this.auth)),zF(this._delegate,e,Wi)}sendEmailVerification(e){return NM(this._delegate,e)}async unlink(e){return await vM(this._delegate,e),this}updateEmail(e){return VM(this._delegate,e)}updatePassword(e){return MM(this._delegate,e)}updatePhoneNumber(e){return CF(this._delegate,e)}updateProfile(e){return oP(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return OM(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};$f.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=K;class Vg{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Zl(r,"invalid-api-key",{appName:e.name}),Zl(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Wi:void 0;this._delegate=n.initialize({options:{persistence:fU(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(dV),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?$f.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){QA(this._delegate,e,n)}applyActionCode(e){return SM(this._delegate,e)}checkActionCode(e){return sP(this._delegate,e)}confirmPasswordReset(e,n){return TM(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return En(this._delegate,AM(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return DM(this._delegate,e)}isSignInWithEmailLink(e){return kM(this._delegate,e)}async getRedirectResult(){Zl(_m(),this._delegate,"operation-not-supported-in-this-environment");const e=await HF(this._delegate,Wi);return e?En(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Q2(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=JI(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=JI(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return CM(this._delegate,e,n)}sendPasswordResetEmail(e,n){return IM(this._delegate,e,n||void 0)}async setPersistence(e){oU(this._delegate,e);let n;switch(e){case On.SESSION:n=as;break;case On.LOCAL:n=await Vn(Wa)._isAvailable()?Wa:Ff;break;case On.NONE:n=$a;break;default:return Lt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return En(this._delegate,yM(this._delegate))}signInWithCredential(e){return En(this._delegate,Vf(this._delegate,e))}signInWithCustomToken(e){return En(this._delegate,EM(this._delegate,e))}signInWithEmailAndPassword(e,n){return En(this._delegate,PM(this._delegate,e,n))}signInWithEmailLink(e,n){return En(this._delegate,bM(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Lg(this._delegate,RF(this._delegate,e,n))}async signInWithPopup(e){return Zl(_m(),this._delegate,"operation-not-supported-in-this-environment"),En(this._delegate,NF(this._delegate,e,Wi))}async signInWithRedirect(e){return Zl(_m(),this._delegate,"operation-not-supported-in-this-environment"),await Og(this._delegate),BF(this._delegate,e,Wi)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return RM(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Vg.Persistence=On;function JI(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&$f.getOrCreate(o)),error:e,complete:n}}function fU(t,e){const n=aU(t,e);if(typeof self<"u"&&!n.includes(Wa)&&n.push(Wa),typeof window<"u")for(const r of[Ff,as])n.includes(r)||n.push(r);return n.includes($a)||n.push($a),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(){this.providerId="phone",this._delegate=new co(bP(De.auth()))}static credential(e,n){return co.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Qy.PHONE_SIGN_IN_METHOD=co.PHONE_SIGN_IN_METHOD;Qy.PROVIDER_ID=co.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pU=K;class mU{constructor(e,n,r=De.app()){var i;pU((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new TF(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gU="auth-compat";function _U(t){t.INTERNAL.registerComponent(new nr(gU,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Vg(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ko.EMAIL_SIGNIN,PASSWORD_RESET:Ko.PASSWORD_RESET,RECOVER_EMAIL:Ko.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ko.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ko.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ko.VERIFY_EMAIL}},EmailAuthProvider:Es,FacebookAuthProvider:Rr,GithubAuthProvider:Pr,GoogleAuthProvider:Ar,OAuthProvider:Pa,SAMLAuthProvider:Wh,PhoneAuthProvider:Qy,PhoneMultiFactorGenerator:SP,RecaptchaVerifier:mU,TwitterAuthProvider:Cr,Auth:Vg,AuthCredential:hl,Error:sn}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(J2,Y2)}_U(De);var YI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var to,DP;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,y){function R(){}R.prototype=y.prototype,g.D=y.prototype,g.prototype=new R,g.prototype.constructor=g,g.C=function(A,k,b){for(var P=Array(arguments.length-2),re=2;re<arguments.length;re++)P[re-2]=arguments[re];return y.prototype[k].apply(A,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(g,y,R){R||(R=0);var A=Array(16);if(typeof y=="string")for(var k=0;16>k;++k)A[k]=y.charCodeAt(R++)|y.charCodeAt(R++)<<8|y.charCodeAt(R++)<<16|y.charCodeAt(R++)<<24;else for(k=0;16>k;++k)A[k]=y[R++]|y[R++]<<8|y[R++]<<16|y[R++]<<24;y=g.g[0],R=g.g[1],k=g.g[2];var b=g.g[3],P=y+(b^R&(k^b))+A[0]+3614090360&4294967295;y=R+(P<<7&4294967295|P>>>25),P=b+(k^y&(R^k))+A[1]+3905402710&4294967295,b=y+(P<<12&4294967295|P>>>20),P=k+(R^b&(y^R))+A[2]+606105819&4294967295,k=b+(P<<17&4294967295|P>>>15),P=R+(y^k&(b^y))+A[3]+3250441966&4294967295,R=k+(P<<22&4294967295|P>>>10),P=y+(b^R&(k^b))+A[4]+4118548399&4294967295,y=R+(P<<7&4294967295|P>>>25),P=b+(k^y&(R^k))+A[5]+1200080426&4294967295,b=y+(P<<12&4294967295|P>>>20),P=k+(R^b&(y^R))+A[6]+2821735955&4294967295,k=b+(P<<17&4294967295|P>>>15),P=R+(y^k&(b^y))+A[7]+4249261313&4294967295,R=k+(P<<22&4294967295|P>>>10),P=y+(b^R&(k^b))+A[8]+1770035416&4294967295,y=R+(P<<7&4294967295|P>>>25),P=b+(k^y&(R^k))+A[9]+2336552879&4294967295,b=y+(P<<12&4294967295|P>>>20),P=k+(R^b&(y^R))+A[10]+4294925233&4294967295,k=b+(P<<17&4294967295|P>>>15),P=R+(y^k&(b^y))+A[11]+2304563134&4294967295,R=k+(P<<22&4294967295|P>>>10),P=y+(b^R&(k^b))+A[12]+1804603682&4294967295,y=R+(P<<7&4294967295|P>>>25),P=b+(k^y&(R^k))+A[13]+4254626195&4294967295,b=y+(P<<12&4294967295|P>>>20),P=k+(R^b&(y^R))+A[14]+2792965006&4294967295,k=b+(P<<17&4294967295|P>>>15),P=R+(y^k&(b^y))+A[15]+1236535329&4294967295,R=k+(P<<22&4294967295|P>>>10),P=y+(k^b&(R^k))+A[1]+4129170786&4294967295,y=R+(P<<5&4294967295|P>>>27),P=b+(R^k&(y^R))+A[6]+3225465664&4294967295,b=y+(P<<9&4294967295|P>>>23),P=k+(y^R&(b^y))+A[11]+643717713&4294967295,k=b+(P<<14&4294967295|P>>>18),P=R+(b^y&(k^b))+A[0]+3921069994&4294967295,R=k+(P<<20&4294967295|P>>>12),P=y+(k^b&(R^k))+A[5]+3593408605&4294967295,y=R+(P<<5&4294967295|P>>>27),P=b+(R^k&(y^R))+A[10]+38016083&4294967295,b=y+(P<<9&4294967295|P>>>23),P=k+(y^R&(b^y))+A[15]+3634488961&4294967295,k=b+(P<<14&4294967295|P>>>18),P=R+(b^y&(k^b))+A[4]+3889429448&4294967295,R=k+(P<<20&4294967295|P>>>12),P=y+(k^b&(R^k))+A[9]+568446438&4294967295,y=R+(P<<5&4294967295|P>>>27),P=b+(R^k&(y^R))+A[14]+3275163606&4294967295,b=y+(P<<9&4294967295|P>>>23),P=k+(y^R&(b^y))+A[3]+4107603335&4294967295,k=b+(P<<14&4294967295|P>>>18),P=R+(b^y&(k^b))+A[8]+1163531501&4294967295,R=k+(P<<20&4294967295|P>>>12),P=y+(k^b&(R^k))+A[13]+2850285829&4294967295,y=R+(P<<5&4294967295|P>>>27),P=b+(R^k&(y^R))+A[2]+4243563512&4294967295,b=y+(P<<9&4294967295|P>>>23),P=k+(y^R&(b^y))+A[7]+1735328473&4294967295,k=b+(P<<14&4294967295|P>>>18),P=R+(b^y&(k^b))+A[12]+2368359562&4294967295,R=k+(P<<20&4294967295|P>>>12),P=y+(R^k^b)+A[5]+4294588738&4294967295,y=R+(P<<4&4294967295|P>>>28),P=b+(y^R^k)+A[8]+2272392833&4294967295,b=y+(P<<11&4294967295|P>>>21),P=k+(b^y^R)+A[11]+1839030562&4294967295,k=b+(P<<16&4294967295|P>>>16),P=R+(k^b^y)+A[14]+4259657740&4294967295,R=k+(P<<23&4294967295|P>>>9),P=y+(R^k^b)+A[1]+2763975236&4294967295,y=R+(P<<4&4294967295|P>>>28),P=b+(y^R^k)+A[4]+1272893353&4294967295,b=y+(P<<11&4294967295|P>>>21),P=k+(b^y^R)+A[7]+4139469664&4294967295,k=b+(P<<16&4294967295|P>>>16),P=R+(k^b^y)+A[10]+3200236656&4294967295,R=k+(P<<23&4294967295|P>>>9),P=y+(R^k^b)+A[13]+681279174&4294967295,y=R+(P<<4&4294967295|P>>>28),P=b+(y^R^k)+A[0]+3936430074&4294967295,b=y+(P<<11&4294967295|P>>>21),P=k+(b^y^R)+A[3]+3572445317&4294967295,k=b+(P<<16&4294967295|P>>>16),P=R+(k^b^y)+A[6]+76029189&4294967295,R=k+(P<<23&4294967295|P>>>9),P=y+(R^k^b)+A[9]+3654602809&4294967295,y=R+(P<<4&4294967295|P>>>28),P=b+(y^R^k)+A[12]+3873151461&4294967295,b=y+(P<<11&4294967295|P>>>21),P=k+(b^y^R)+A[15]+530742520&4294967295,k=b+(P<<16&4294967295|P>>>16),P=R+(k^b^y)+A[2]+3299628645&4294967295,R=k+(P<<23&4294967295|P>>>9),P=y+(k^(R|~b))+A[0]+4096336452&4294967295,y=R+(P<<6&4294967295|P>>>26),P=b+(R^(y|~k))+A[7]+1126891415&4294967295,b=y+(P<<10&4294967295|P>>>22),P=k+(y^(b|~R))+A[14]+2878612391&4294967295,k=b+(P<<15&4294967295|P>>>17),P=R+(b^(k|~y))+A[5]+4237533241&4294967295,R=k+(P<<21&4294967295|P>>>11),P=y+(k^(R|~b))+A[12]+1700485571&4294967295,y=R+(P<<6&4294967295|P>>>26),P=b+(R^(y|~k))+A[3]+2399980690&4294967295,b=y+(P<<10&4294967295|P>>>22),P=k+(y^(b|~R))+A[10]+4293915773&4294967295,k=b+(P<<15&4294967295|P>>>17),P=R+(b^(k|~y))+A[1]+2240044497&4294967295,R=k+(P<<21&4294967295|P>>>11),P=y+(k^(R|~b))+A[8]+1873313359&4294967295,y=R+(P<<6&4294967295|P>>>26),P=b+(R^(y|~k))+A[15]+4264355552&4294967295,b=y+(P<<10&4294967295|P>>>22),P=k+(y^(b|~R))+A[6]+2734768916&4294967295,k=b+(P<<15&4294967295|P>>>17),P=R+(b^(k|~y))+A[13]+1309151649&4294967295,R=k+(P<<21&4294967295|P>>>11),P=y+(k^(R|~b))+A[4]+4149444226&4294967295,y=R+(P<<6&4294967295|P>>>26),P=b+(R^(y|~k))+A[11]+3174756917&4294967295,b=y+(P<<10&4294967295|P>>>22),P=k+(y^(b|~R))+A[2]+718787259&4294967295,k=b+(P<<15&4294967295|P>>>17),P=R+(b^(k|~y))+A[9]+3951481745&4294967295,g.g[0]=g.g[0]+y&4294967295,g.g[1]=g.g[1]+(k+(P<<21&4294967295|P>>>11))&4294967295,g.g[2]=g.g[2]+k&4294967295,g.g[3]=g.g[3]+b&4294967295}r.prototype.u=function(g,y){y===void 0&&(y=g.length);for(var R=y-this.blockSize,A=this.B,k=this.h,b=0;b<y;){if(k==0)for(;b<=R;)i(this,g,b),b+=this.blockSize;if(typeof g=="string"){for(;b<y;)if(A[k++]=g.charCodeAt(b++),k==this.blockSize){i(this,A),k=0;break}}else for(;b<y;)if(A[k++]=g[b++],k==this.blockSize){i(this,A),k=0;break}}this.h=k,this.o+=y},r.prototype.v=function(){var g=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);g[0]=128;for(var y=1;y<g.length-8;++y)g[y]=0;var R=8*this.o;for(y=g.length-8;y<g.length;++y)g[y]=R&255,R/=256;for(this.u(g),g=Array(16),y=R=0;4>y;++y)for(var A=0;32>A;A+=8)g[R++]=this.g[y]>>>A&255;return g};function s(g,y){var R=a;return Object.prototype.hasOwnProperty.call(R,g)?R[g]:R[g]=y(g)}function o(g,y){this.h=y;for(var R=[],A=!0,k=g.length-1;0<=k;k--){var b=g[k]|0;A&&b==y||(R[k]=b,A=!1)}this.g=R}var a={};function l(g){return-128<=g&&128>g?s(g,function(y){return new o([y|0],0>y?-1:0)}):new o([g|0],0>g?-1:0)}function c(g){if(isNaN(g)||!isFinite(g))return h;if(0>g)return C(c(-g));for(var y=[],R=1,A=0;g>=R;A++)y[A]=g/R|0,R*=4294967296;return new o(y,0)}function d(g,y){if(g.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(g.charAt(0)=="-")return C(d(g.substring(1),y));if(0<=g.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=c(Math.pow(y,8)),A=h,k=0;k<g.length;k+=8){var b=Math.min(8,g.length-k),P=parseInt(g.substring(k,k+b),y);8>b?(b=c(Math.pow(y,b)),A=A.j(b).add(c(P))):(A=A.j(R),A=A.add(c(P)))}return A}var h=l(0),p=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(T(this))return-C(this).m();for(var g=0,y=1,R=0;R<this.g.length;R++){var A=this.i(R);g+=(0<=A?A:4294967296+A)*y,y*=4294967296}return g},t.toString=function(g){if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E(this))return"0";if(T(this))return"-"+C(this).toString(g);for(var y=c(Math.pow(g,6)),R=this,A="";;){var k=x(R,y).g;R=S(R,k.j(y));var b=((0<R.g.length?R.g[0]:R.h)>>>0).toString(g);if(R=k,E(R))return b+A;for(;6>b.length;)b="0"+b;A=b+A}},t.i=function(g){return 0>g?0:g<this.g.length?this.g[g]:this.h};function E(g){if(g.h!=0)return!1;for(var y=0;y<g.g.length;y++)if(g.g[y]!=0)return!1;return!0}function T(g){return g.h==-1}t.l=function(g){return g=S(this,g),T(g)?-1:E(g)?0:1};function C(g){for(var y=g.g.length,R=[],A=0;A<y;A++)R[A]=~g.g[A];return new o(R,~g.h).add(p)}t.abs=function(){return T(this)?C(this):this},t.add=function(g){for(var y=Math.max(this.g.length,g.g.length),R=[],A=0,k=0;k<=y;k++){var b=A+(this.i(k)&65535)+(g.i(k)&65535),P=(b>>>16)+(this.i(k)>>>16)+(g.i(k)>>>16);A=P>>>16,b&=65535,P&=65535,R[k]=P<<16|b}return new o(R,R[R.length-1]&-2147483648?-1:0)};function S(g,y){return g.add(C(y))}t.j=function(g){if(E(this)||E(g))return h;if(T(this))return T(g)?C(this).j(C(g)):C(C(this).j(g));if(T(g))return C(this.j(C(g)));if(0>this.l(_)&&0>g.l(_))return c(this.m()*g.m());for(var y=this.g.length+g.g.length,R=[],A=0;A<2*y;A++)R[A]=0;for(A=0;A<this.g.length;A++)for(var k=0;k<g.g.length;k++){var b=this.i(A)>>>16,P=this.i(A)&65535,re=g.i(k)>>>16,qe=g.i(k)&65535;R[2*A+2*k]+=P*qe,v(R,2*A+2*k),R[2*A+2*k+1]+=b*qe,v(R,2*A+2*k+1),R[2*A+2*k+1]+=P*re,v(R,2*A+2*k+1),R[2*A+2*k+2]+=b*re,v(R,2*A+2*k+2)}for(A=0;A<y;A++)R[A]=R[2*A+1]<<16|R[2*A];for(A=y;A<2*y;A++)R[A]=0;return new o(R,0)};function v(g,y){for(;(g[y]&65535)!=g[y];)g[y+1]+=g[y]>>>16,g[y]&=65535,y++}function I(g,y){this.g=g,this.h=y}function x(g,y){if(E(y))throw Error("division by zero");if(E(g))return new I(h,h);if(T(g))return y=x(C(g),y),new I(C(y.g),C(y.h));if(T(y))return y=x(g,C(y)),new I(C(y.g),y.h);if(30<g.g.length){if(T(g)||T(y))throw Error("slowDivide_ only works with positive integers.");for(var R=p,A=y;0>=A.l(g);)R=U(R),A=U(A);var k=B(R,1),b=B(A,1);for(A=B(A,2),R=B(R,2);!E(A);){var P=b.add(A);0>=P.l(g)&&(k=k.add(R),b=P),A=B(A,1),R=B(R,1)}return y=S(g,k.j(y)),new I(k,y)}for(k=h;0<=g.l(y);){for(R=Math.max(1,Math.floor(g.m()/y.m())),A=Math.ceil(Math.log(R)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),b=c(R),P=b.j(y);T(P)||0<P.l(g);)R-=A,b=c(R),P=b.j(y);E(b)&&(b=p),k=k.add(b),g=S(g,P)}return new I(k,g)}t.A=function(g){return x(this,g).h},t.and=function(g){for(var y=Math.max(this.g.length,g.g.length),R=[],A=0;A<y;A++)R[A]=this.i(A)&g.i(A);return new o(R,this.h&g.h)},t.or=function(g){for(var y=Math.max(this.g.length,g.g.length),R=[],A=0;A<y;A++)R[A]=this.i(A)|g.i(A);return new o(R,this.h|g.h)},t.xor=function(g){for(var y=Math.max(this.g.length,g.g.length),R=[],A=0;A<y;A++)R[A]=this.i(A)^g.i(A);return new o(R,this.h^g.h)};function U(g){for(var y=g.g.length+1,R=[],A=0;A<y;A++)R[A]=g.i(A)<<1|g.i(A-1)>>>31;return new o(R,g.h)}function B(g,y){var R=y>>5;y%=32;for(var A=g.g.length-R,k=[],b=0;b<A;b++)k[b]=0<y?g.i(b+R)>>>y|g.i(b+R+1)<<32-y:g.i(b+R);return new o(k,g.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,DP=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,to=o}).apply(typeof YI<"u"?YI:typeof self<"u"?self:typeof window<"u"?window:{});var xd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var NP,OP,pu,LP,rh,Mg,VP,MP,FP;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,f,m){return u==Array.prototype||u==Object.prototype||(u[f]=m.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof xd=="object"&&xd];for(var f=0;f<u.length;++f){var m=u[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(u,f){if(f)e:{var m=r;u=u.split(".");for(var w=0;w<u.length-1;w++){var N=u[w];if(!(N in m))break e;m=m[N]}u=u[u.length-1],w=m[u],f=f(w),f!=w&&f!=null&&e(m,u,{configurable:!0,writable:!0,value:f})}}function s(u,f){u instanceof String&&(u+="");var m=0,w=!1,N={next:function(){if(!w&&m<u.length){var M=m++;return{value:f(M,u[M]),done:!1}}return w=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(u){return u||function(){return s(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var f=typeof u;return f=f!="object"?f:u?Array.isArray(u)?"array":f:"null",f=="array"||f=="object"&&typeof u.length=="number"}function c(u){var f=typeof u;return f=="object"&&u!=null||f=="function"}function d(u,f,m){return u.call.apply(u.bind,arguments)}function h(u,f,m){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,w),u.apply(f,N)}}return function(){return u.apply(f,arguments)}}function p(u,f,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:h,p.apply(null,arguments)}function _(u,f){var m=Array.prototype.slice.call(arguments,1);return function(){var w=m.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function E(u,f){function m(){}m.prototype=f.prototype,u.aa=f.prototype,u.prototype=new m,u.prototype.constructor=u,u.Qb=function(w,N,M){for(var J=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)J[Oe-2]=arguments[Oe];return f.prototype[N].apply(w,J)}}function T(u){const f=u.length;if(0<f){const m=Array(f);for(let w=0;w<f;w++)m[w]=u[w];return m}return[]}function C(u,f){for(let m=1;m<arguments.length;m++){const w=arguments[m];if(l(w)){const N=u.length||0,M=w.length||0;u.length=N+M;for(let J=0;J<M;J++)u[N+J]=w[J]}else u.push(w)}}class S{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function v(u){return/^[\s\xa0]*$/.test(u)}function I(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function x(u){return x[" "](u),u}x[" "]=function(){};var U=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function B(u,f,m){for(const w in u)f.call(m,u[w],w,u)}function g(u,f){for(const m in u)f.call(void 0,u[m],m,u)}function y(u){const f={};for(const m in u)f[m]=u[m];return f}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(u,f){let m,w;for(let N=1;N<arguments.length;N++){w=arguments[N];for(m in w)u[m]=w[m];for(let M=0;M<R.length;M++)m=R[M],Object.prototype.hasOwnProperty.call(w,m)&&(u[m]=w[m])}}function k(u){var f=1;u=u.split(":");const m=[];for(;0<f&&u.length;)m.push(u.shift()),f--;return u.length&&m.push(u.join(":")),m}function b(u){a.setTimeout(()=>{throw u},0)}function P(){var u=ue;let f=null;return u.g&&(f=u.g,u.g=u.g.next,u.g||(u.h=null),f.next=null),f}class re{constructor(){this.h=this.g=null}add(f,m){const w=qe.get();w.set(f,m),this.h?this.h.next=w:this.g=w,this.h=w}}var qe=new S(()=>new Jt,u=>u.reset());class Jt{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let an,W=!1,ue=new re,de=()=>{const u=a.Promise.resolve(void 0);an=()=>{u.then(Ce)}};var Ce=()=>{for(var u;u=P();){try{u.h.call(u.g)}catch(m){b(m)}var f=qe;f.j(u),100>f.h&&(f.h++,u.next=f.g,f.g=u)}W=!1};function _e(){this.s=this.s,this.C=this.C}_e.prototype.s=!1,_e.prototype.ma=function(){this.s||(this.s=!0,this.N())},_e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(u,f){this.type=u,this.g=this.target=f,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var ln=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,f=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const m=()=>{};a.addEventListener("test",m,f),a.removeEventListener("test",m,f)}catch{}return u}();function Tt(u,f){if(xe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var m=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=f,f=u.relatedTarget){if(U){e:{try{x(f.nodeName);var N=!0;break e}catch{}N=!1}N||(f=null)}}else m=="mouseover"?f=u.fromElement:m=="mouseout"&&(f=u.toElement);this.relatedTarget=f,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ft[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Tt.aa.h.call(this)}}E(Tt,xe);var Ft={2:"touch",3:"pen",4:"mouse"};Tt.prototype.h=function(){Tt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ut="closure_listenable_"+(1e6*Math.random()|0),Rl=0;function Ep(u,f,m,w,N){this.listener=u,this.proxy=null,this.src=f,this.type=m,this.capture=!!w,this.ha=N,this.key=++Rl,this.da=this.fa=!1}function Oo(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Lo(u){this.src=u,this.g={},this.h=0}Lo.prototype.add=function(u,f,m,w,N){var M=u.toString();u=this.g[M],u||(u=this.g[M]=[],this.h++);var J=jr(u,f,w,N);return-1<J?(f=u[J],m||(f.fa=!1)):(f=new Ep(f,this.src,M,!!w,N),f.fa=m,u.push(f)),f};function Bt(u,f){var m=f.type;if(m in u.g){var w=u.g[m],N=Array.prototype.indexOf.call(w,f,void 0),M;(M=0<=N)&&Array.prototype.splice.call(w,N,1),M&&(Oo(f),u.g[m].length==0&&(delete u.g[m],u.h--))}}function jr(u,f,m,w){for(var N=0;N<u.length;++N){var M=u[N];if(!M.da&&M.listener==f&&M.capture==!!m&&M.ha==w)return N}return-1}var Vo="closure_lm_"+(1e6*Math.random()|0),Al={};function wr(u,f,m,w,N){if(Array.isArray(f)){for(var M=0;M<f.length;M++)wr(u,f[M],m,w,N);return null}return m=Fo(m),u&&u[Ut]?u.K(f,m,c(w)?!!w.capture:!!w,N):Ip(u,f,m,!1,w,N)}function Ip(u,f,m,w,N,M){if(!f)throw Error("Invalid event type");var J=c(N)?!!N.capture:!!N,Oe=zr(u);if(Oe||(u[Vo]=Oe=new Lo(u)),m=Oe.add(f,m,w,J,M),m.proxy)return m;if(w=Tp(),m.proxy=w,w.src=u,w.listener=m,u.addEventListener)ln||(N=J),N===void 0&&(N=!1),u.addEventListener(f.toString(),w,N);else if(u.attachEvent)u.attachEvent(Zc(f.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Tp(){function u(m){return f.call(u.src,u.listener,m)}const f=Ps;return u}function Xc(u,f,m,w,N){if(Array.isArray(f))for(var M=0;M<f.length;M++)Xc(u,f[M],m,w,N);else w=c(w)?!!w.capture:!!w,m=Fo(m),u&&u[Ut]?(u=u.i,f=String(f).toString(),f in u.g&&(M=u.g[f],m=jr(M,m,w,N),-1<m&&(Oo(M[m]),Array.prototype.splice.call(M,m,1),M.length==0&&(delete u.g[f],u.h--)))):u&&(u=zr(u))&&(f=u.g[f.toString()],u=-1,f&&(u=jr(f,m,w,N)),(m=-1<u?f[u]:null)&&Pl(m))}function Pl(u){if(typeof u!="number"&&u&&!u.da){var f=u.src;if(f&&f[Ut])Bt(f.i,u);else{var m=u.type,w=u.proxy;f.removeEventListener?f.removeEventListener(m,w,u.capture):f.detachEvent?f.detachEvent(Zc(m),w):f.addListener&&f.removeListener&&f.removeListener(w),(m=zr(f))?(Bt(m,u),m.h==0&&(m.src=null,f[Vo]=null)):Oo(u)}}}function Zc(u){return u in Al?Al[u]:Al[u]="on"+u}function Ps(u,f){if(u.da)u=!0;else{f=new Tt(f,this);var m=u.listener,w=u.ha||u.src;u.fa&&Pl(u),u=m.call(w,f)}return u}function zr(u){return u=u[Vo],u instanceof Lo?u:null}var Mo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fo(u){return typeof u=="function"?u:(u[Mo]||(u[Mo]=function(f){return u.handleEvent(f)}),u[Mo])}function Fe(){_e.call(this),this.i=new Lo(this),this.M=this,this.F=null}E(Fe,_e),Fe.prototype[Ut]=!0,Fe.prototype.removeEventListener=function(u,f,m,w){Xc(this,u,f,m,w)};function ft(u,f){var m,w=u.F;if(w)for(m=[];w;w=w.F)m.push(w);if(u=u.M,w=f.type||f,typeof f=="string")f=new xe(f,u);else if(f instanceof xe)f.target=f.target||u;else{var N=f;f=new xe(w,u),A(f,N)}if(N=!0,m)for(var M=m.length-1;0<=M;M--){var J=f.g=m[M];N=Cs(J,w,!0,f)&&N}if(J=f.g=u,N=Cs(J,w,!0,f)&&N,N=Cs(J,w,!1,f)&&N,m)for(M=0;M<m.length;M++)J=f.g=m[M],N=Cs(J,w,!1,f)&&N}Fe.prototype.N=function(){if(Fe.aa.N.call(this),this.i){var u=this.i,f;for(f in u.g){for(var m=u.g[f],w=0;w<m.length;w++)Oo(m[w]);delete u.g[f],u.h--}}this.F=null},Fe.prototype.K=function(u,f,m,w){return this.i.add(String(u),f,!1,m,w)},Fe.prototype.L=function(u,f,m,w){return this.i.add(String(u),f,!0,m,w)};function Cs(u,f,m,w){if(f=u.i.g[String(f)],!f)return!0;f=f.concat();for(var N=!0,M=0;M<f.length;++M){var J=f[M];if(J&&!J.da&&J.capture==m){var Oe=J.listener,$t=J.ha||J.src;J.fa&&Bt(u.i,J),N=Oe.call($t,w)!==!1&&N}}return N&&!w.defaultPrevented}function ks(u,f,m){if(typeof u=="function")m&&(u=p(u,m));else if(u&&typeof u.handleEvent=="function")u=p(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(u,f||0)}function ed(u){u.g=ks(()=>{u.g=null,u.i&&(u.i=!1,ed(u))},u.l);const f=u.h;u.h=null,u.m.apply(null,f)}class Er extends _e{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:ed(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ii(u){_e.call(this),this.h=u,this.g={}}E(Ii,_e);var Cl=[];function kl(u){B(u.g,function(f,m){this.g.hasOwnProperty(m)&&Pl(f)},u),u.g={}}Ii.prototype.N=function(){Ii.aa.N.call(this),kl(this)},Ii.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var bl=a.JSON.stringify,td=a.JSON.parse,Uo=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function Bo(){}Bo.prototype.h=null;function jo(u){return u.h||(u.h=u.i())}function nd(){}var Ti={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xl(){xe.call(this,"d")}E(xl,xe);function zo(){xe.call(this,"c")}E(zo,xe);var $r={},D=null;function L(){return D=D||new Fe}$r.La="serverreachability";function j(u){xe.call(this,$r.La,u)}E(j,xe);function G(u){const f=L();ft(f,new j(f))}$r.STAT_EVENT="statevent";function ee(u,f){xe.call(this,$r.STAT_EVENT,u),this.stat=f}E(ee,xe);function oe(u){const f=L();ft(f,new ee(f,u))}$r.Ma="timingevent";function le(u,f){xe.call(this,$r.Ma,u),this.size=f}E(le,xe);function Z(u,f){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},f)}function he(){this.g=!0}he.prototype.xa=function(){this.g=!1};function fe(u,f,m,w,N,M){u.info(function(){if(u.g)if(M)for(var J="",Oe=M.split("&"),$t=0;$t<Oe.length;$t++){var Pe=Oe[$t].split("=");if(1<Pe.length){var Yt=Pe[0];Pe=Pe[1];var Xt=Yt.split("_");J=2<=Xt.length&&Xt[1]=="type"?J+(Yt+"="+Pe+"&"):J+(Yt+"=redacted&")}}else J=null;else J=M;return"XMLHTTP REQ ("+w+") [attempt "+N+"]: "+f+`
`+m+`
`+J})}function St(u,f,m,w,N,M,J){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+N+"]: "+f+`
`+m+`
`+M+" "+J})}function We(u,f,m,w){u.info(function(){return"XMLHTTP TEXT ("+f+"): "+Le(u,m)+(w?" "+w:"")})}function ce(u,f){u.info(function(){return"TIMEOUT: "+f})}he.prototype.info=function(){};function Le(u,f){if(!u.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(u=0;u<m.length;u++)if(Array.isArray(m[u])){var w=m[u];if(!(2>w.length)){var N=w[1];if(Array.isArray(N)&&!(1>N.length)){var M=N[0];if(M!="noop"&&M!="stop"&&M!="close")for(var J=1;J<N.length;J++)N[J]=""}}}}return bl(m)}catch{return f}}var Xe={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Si={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},$n;function ir(){}E(ir,Bo),ir.prototype.g=function(){return new XMLHttpRequest},ir.prototype.i=function(){return{}},$n=new ir;function un(u,f,m,w){this.j=u,this.i=f,this.l=m,this.R=w||1,this.U=new Ii(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qr}function qr(){this.i=null,this.g="",this.h=!1}var xn={},Ri={};function Ai(u,f,m){u.L=1,u.v=sd(Gr(f)),u.m=m,u.P=!0,bs(u,null)}function bs(u,f){u.F=Date.now(),zt(u),u.A=Gr(u.v);var m=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),Iw(m.i,"t",w),u.C=0,m=u.j.J,u.h=new qr,u.g=Bw(u.j,m?f:null,!u.m),0<u.O&&(u.M=new Er(p(u.Y,u,u.g),u.O)),f=u.U,m=u.g,w=u.ca;var N="readystatechange";Array.isArray(N)||(N&&(Cl[0]=N.toString()),N=Cl);for(var M=0;M<N.length;M++){var J=wr(m,N[M],w||f.handleEvent,!1,f.h||f);if(!J)break;f.g[J.key]=J}f=u.H?y(u.H):{},u.m?(u.u||(u.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,f)):(u.u="GET",u.g.ea(u.A,u.u,null,f)),G(),fe(u.i,u.u,u.A,u.l,u.R,u.m)}un.prototype.ca=function(u){u=u.target;const f=this.M;f&&Kr(u)==3?f.j():this.Y(u)},un.prototype.Y=function(u){try{if(u==this.g)e:{const Xt=Kr(this.g);var f=this.g.Ba();const Wo=this.g.Z();if(!(3>Xt)&&(Xt!=3||this.g&&(this.h.h||this.g.oa()||kw(this.g)))){this.J||Xt!=4||f==7||(f==8||0>=Wo?G(3):G(2)),Wr(this);var m=this.g.Z();this.X=m;t:if(ye(this)){var w=kw(this.g);u="";var N=w.length,M=Kr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Hr(this),Pi(this);var J="";break t}this.h.i=new a.TextDecoder}for(f=0;f<N;f++)this.h.h=!0,u+=this.h.i.decode(w[f],{stream:!(M&&f==N-1)});w.length=0,this.h.g+=u,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=m==200,St(this.i,this.u,this.A,this.l,this.R,Xt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,$t=this.g;if((Oe=$t.g?$t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(Oe)){var Pe=Oe;break t}}Pe=null}if(m=Pe)We(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sp(this,m);else{this.o=!1,this.s=3,oe(12),Hr(this),Pi(this);break e}}if(this.P){m=!0;let sr;for(;!this.J&&this.C<J.length;)if(sr=jt(this,J),sr==Ri){Xt==4&&(this.s=4,oe(14),m=!1),We(this.i,this.l,null,"[Incomplete Response]");break}else if(sr==xn){this.s=4,oe(15),We(this.i,this.l,J,"[Invalid Chunk]"),m=!1;break}else We(this.i,this.l,sr,null),Sp(this,sr);if(ye(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Xt!=4||J.length!=0||this.h.h||(this.s=1,oe(16),m=!1),this.o=this.o&&m,!m)We(this.i,this.l,J,"[Invalid Chunked Response]"),Hr(this),Pi(this);else if(0<J.length&&!this.W){this.W=!0;var Yt=this.j;Yt.g==this&&Yt.ba&&!Yt.M&&(Yt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),bp(Yt),Yt.M=!0,oe(11))}}else We(this.i,this.l,J,null),Sp(this,J);Xt==4&&Hr(this),this.o&&!this.J&&(Xt==4?Vw(this.j,this):(this.o=!1,zt(this)))}else yb(this.g),m==400&&0<J.indexOf("Unknown SID")?(this.s=3,oe(12)):(this.s=0,oe(13)),Hr(this),Pi(this)}}}catch{}finally{}};function ye(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function jt(u,f){var m=u.C,w=f.indexOf(`
`,m);return w==-1?Ri:(m=Number(f.substring(m,w)),isNaN(m)?xn:(w+=1,w+m>f.length?Ri:(f=f.slice(w,w+m),u.C=w+m,f)))}un.prototype.cancel=function(){this.J=!0,Hr(this)};function zt(u){u.S=Date.now()+u.I,_t(u,u.I)}function _t(u,f){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Z(p(u.ba,u),f)}function Wr(u){u.B&&(a.clearTimeout(u.B),u.B=null)}un.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ce(this.i,this.A),this.L!=2&&(G(),oe(17)),Hr(this),this.s=2,Pi(this)):_t(this,this.S-u)};function Pi(u){u.j.G==0||u.J||Vw(u.j,u)}function Hr(u){Wr(u);var f=u.M;f&&typeof f.ma=="function"&&f.ma(),u.M=null,kl(u.U),u.g&&(f=u.g,u.g=null,f.abort(),f.ma())}function Sp(u,f){try{var m=u.j;if(m.G!=0&&(m.g==u||Rp(m.h,u))){if(!u.K&&Rp(m.h,u)&&m.G==3){try{var w=m.Da.g.parse(f)}catch{w=null}if(Array.isArray(w)&&w.length==3){var N=w;if(N[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<u.F)cd(m),ld(m);else break e;kp(m),oe(18)}}else m.za=N[1],0<m.za-m.T&&37500>N[2]&&m.F&&m.v==0&&!m.C&&(m.C=Z(p(m.Za,m),6e3));if(1>=fw(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Ds(m,11)}else if((u.K||m.g==u)&&cd(m),!v(f))for(N=m.Da.g.parse(f),f=0;f<N.length;f++){let Pe=N[f];if(m.T=Pe[0],Pe=Pe[1],m.G==2)if(Pe[0]=="c"){m.K=Pe[1],m.ia=Pe[2];const Yt=Pe[3];Yt!=null&&(m.la=Yt,m.j.info("VER="+m.la));const Xt=Pe[4];Xt!=null&&(m.Aa=Xt,m.j.info("SVER="+m.Aa));const Wo=Pe[5];Wo!=null&&typeof Wo=="number"&&0<Wo&&(w=1.5*Wo,m.L=w,m.j.info("backChannelRequestTimeoutMs_="+w)),w=m;const sr=u.g;if(sr){const hd=sr.g?sr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hd){var M=w.h;M.g||hd.indexOf("spdy")==-1&&hd.indexOf("quic")==-1&&hd.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Ap(M,M.h),M.h=null))}if(w.D){const xp=sr.g?sr.g.getResponseHeader("X-HTTP-Session-Id"):null;xp&&(w.ya=xp,Ue(w.I,w.D,xp))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-u.F,m.j.info("Handshake RTT: "+m.R+"ms")),w=m;var J=u;if(w.qa=Uw(w,w.J?w.ia:null,w.W),J.K){pw(w.h,J);var Oe=J,$t=w.L;$t&&(Oe.I=$t),Oe.B&&(Wr(Oe),zt(Oe)),w.g=J}else Ow(w);0<m.i.length&&ud(m)}else Pe[0]!="stop"&&Pe[0]!="close"||Ds(m,7);else m.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?Ds(m,7):Cp(m):Pe[0]!="noop"&&m.l&&m.l.ta(Pe),m.v=0)}}G(4)}catch{}}var nb=class{constructor(u,f){this.g=u,this.map=f}};function dw(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function hw(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function fw(u){return u.h?1:u.g?u.g.size:0}function Rp(u,f){return u.h?u.h==f:u.g?u.g.has(f):!1}function Ap(u,f){u.g?u.g.add(f):u.h=f}function pw(u,f){u.h&&u.h==f?u.h=null:u.g&&u.g.has(f)&&u.g.delete(f)}dw.prototype.cancel=function(){if(this.i=mw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function mw(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let f=u.i;for(const m of u.g.values())f=f.concat(m.D);return f}return T(u.i)}function rb(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var f=[],m=u.length,w=0;w<m;w++)f.push(u[w]);return f}f=[],m=0;for(w in u)f[m++]=u[w];return f}function ib(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var f=[];u=u.length;for(var m=0;m<u;m++)f.push(m);return f}f=[],m=0;for(const w in u)f[m++]=w;return f}}}function gw(u,f){if(u.forEach&&typeof u.forEach=="function")u.forEach(f,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,f,void 0);else for(var m=ib(u),w=rb(u),N=w.length,M=0;M<N;M++)f.call(void 0,w[M],m&&m[M],u)}var _w=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sb(u,f){if(u){u=u.split("&");for(var m=0;m<u.length;m++){var w=u[m].indexOf("="),N=null;if(0<=w){var M=u[m].substring(0,w);N=u[m].substring(w+1)}else M=u[m];f(M,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function xs(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof xs){this.h=u.h,rd(this,u.j),this.o=u.o,this.g=u.g,id(this,u.s),this.l=u.l;var f=u.i,m=new Ol;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),yw(this,m),this.m=u.m}else u&&(f=String(u).match(_w))?(this.h=!1,rd(this,f[1]||"",!0),this.o=Dl(f[2]||""),this.g=Dl(f[3]||"",!0),id(this,f[4]),this.l=Dl(f[5]||"",!0),yw(this,f[6]||"",!0),this.m=Dl(f[7]||"")):(this.h=!1,this.i=new Ol(null,this.h))}xs.prototype.toString=function(){var u=[],f=this.j;f&&u.push(Nl(f,vw,!0),":");var m=this.g;return(m||f=="file")&&(u.push("//"),(f=this.o)&&u.push(Nl(f,vw,!0),"@"),u.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&u.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&u.push("/"),u.push(Nl(m,m.charAt(0)=="/"?lb:ab,!0))),(m=this.i.toString())&&u.push("?",m),(m=this.m)&&u.push("#",Nl(m,cb)),u.join("")};function Gr(u){return new xs(u)}function rd(u,f,m){u.j=m?Dl(f,!0):f,u.j&&(u.j=u.j.replace(/:$/,""))}function id(u,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);u.s=f}else u.s=null}function yw(u,f,m){f instanceof Ol?(u.i=f,db(u.i,u.h)):(m||(f=Nl(f,ub)),u.i=new Ol(f,u.h))}function Ue(u,f,m){u.i.set(f,m)}function sd(u){return Ue(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Dl(u,f){return u?f?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Nl(u,f,m){return typeof u=="string"?(u=encodeURI(u).replace(f,ob),m&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function ob(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var vw=/[#\/\?@]/g,ab=/[#\?:]/g,lb=/[#\?]/g,ub=/[#\?@]/g,cb=/#/g;function Ol(u,f){this.h=this.g=null,this.i=u||null,this.j=!!f}function Ci(u){u.g||(u.g=new Map,u.h=0,u.i&&sb(u.i,function(f,m){u.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=Ol.prototype,t.add=function(u,f){Ci(this),this.i=null,u=$o(this,u);var m=this.g.get(u);return m||this.g.set(u,m=[]),m.push(f),this.h+=1,this};function ww(u,f){Ci(u),f=$o(u,f),u.g.has(f)&&(u.i=null,u.h-=u.g.get(f).length,u.g.delete(f))}function Ew(u,f){return Ci(u),f=$o(u,f),u.g.has(f)}t.forEach=function(u,f){Ci(this),this.g.forEach(function(m,w){m.forEach(function(N){u.call(f,N,w,this)},this)},this)},t.na=function(){Ci(this);const u=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let w=0;w<f.length;w++){const N=u[w];for(let M=0;M<N.length;M++)m.push(f[w])}return m},t.V=function(u){Ci(this);let f=[];if(typeof u=="string")Ew(this,u)&&(f=f.concat(this.g.get($o(this,u))));else{u=Array.from(this.g.values());for(let m=0;m<u.length;m++)f=f.concat(u[m])}return f},t.set=function(u,f){return Ci(this),this.i=null,u=$o(this,u),Ew(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[f]),this.h+=1,this},t.get=function(u,f){return u?(u=this.V(u),0<u.length?String(u[0]):f):f};function Iw(u,f,m){ww(u,f),0<m.length&&(u.i=null,u.g.set($o(u,f),T(m)),u.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var w=f[m];const M=encodeURIComponent(String(w)),J=this.V(w);for(w=0;w<J.length;w++){var N=M;J[w]!==""&&(N+="="+encodeURIComponent(String(J[w]))),u.push(N)}}return this.i=u.join("&")};function $o(u,f){return f=String(f),u.j&&(f=f.toLowerCase()),f}function db(u,f){f&&!u.j&&(Ci(u),u.i=null,u.g.forEach(function(m,w){var N=w.toLowerCase();w!=N&&(ww(this,w),Iw(this,N,m))},u)),u.j=f}function hb(u,f){const m=new he;if(a.Image){const w=new Image;w.onload=_(ki,m,"TestLoadImage: loaded",!0,f,w),w.onerror=_(ki,m,"TestLoadImage: error",!1,f,w),w.onabort=_(ki,m,"TestLoadImage: abort",!1,f,w),w.ontimeout=_(ki,m,"TestLoadImage: timeout",!1,f,w),a.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else f(!1)}function fb(u,f){const m=new he,w=new AbortController,N=setTimeout(()=>{w.abort(),ki(m,"TestPingServer: timeout",!1,f)},1e4);fetch(u,{signal:w.signal}).then(M=>{clearTimeout(N),M.ok?ki(m,"TestPingServer: ok",!0,f):ki(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(N),ki(m,"TestPingServer: error",!1,f)})}function ki(u,f,m,w,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),w(m)}catch{}}function pb(){this.g=new Uo}function mb(u,f,m){const w=m||"";try{gw(u,function(N,M){let J=N;c(N)&&(J=bl(N)),f.push(w+M+"="+encodeURIComponent(J))})}catch(N){throw f.push(w+"type="+encodeURIComponent("_badmap")),N}}function Ll(u){this.l=u.Ub||null,this.j=u.eb||!1}E(Ll,Bo),Ll.prototype.g=function(){return new od(this.l,this.j)},Ll.prototype.i=function(u){return function(){return u}}({});function od(u,f){Fe.call(this),this.D=u,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(od,Fe),t=od.prototype,t.open=function(u,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=f,this.readyState=1,Ml(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(f.body=u),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vl(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Ml(this)),this.g&&(this.readyState=3,Ml(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Tw(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Tw(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var f=u.value?u.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!u.done}))&&(this.response=this.responseText+=f)}u.done?Vl(this):Ml(this),this.readyState==3&&Tw(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,Vl(this))},t.Qa=function(u){this.g&&(this.response=u,Vl(this))},t.ga=function(){this.g&&Vl(this)};function Vl(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Ml(u)}t.setRequestHeader=function(u,f){this.u.append(u,f)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,u.push(m[0]+": "+m[1]),m=f.next();return u.join(`\r
`)};function Ml(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(od.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Sw(u){let f="";return B(u,function(m,w){f+=w,f+=":",f+=m,f+=`\r
`}),f}function Pp(u,f,m){e:{for(w in m){var w=!1;break e}w=!0}w||(m=Sw(m),typeof u=="string"?m!=null&&encodeURIComponent(String(m)):Ue(u,f,m))}function st(u){Fe.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(st,Fe);var gb=/^https?$/i,_b=["POST","PUT"];t=st.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,f,m,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);f=f?f.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$n.g(),this.v=this.o?jo(this.o):jo($n),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(u),!0),this.B=!1}catch(M){Rw(this,M);return}if(u=m||"",m=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var N in w)m.set(N,w[N]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const M of w.keys())m.set(M,w.get(M));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(m.keys()).find(M=>M.toLowerCase()=="content-type"),N=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(_b,f,void 0))||w||N||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,J]of m)this.g.setRequestHeader(M,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Cw(this),this.u=!0,this.g.send(u),this.u=!1}catch(M){Rw(this,M)}};function Rw(u,f){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=f,u.m=5,Aw(u),ad(u)}function Aw(u){u.A||(u.A=!0,ft(u,"complete"),ft(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ft(this,"complete"),ft(this,"abort"),ad(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ad(this,!0)),st.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Pw(this):this.bb())},t.bb=function(){Pw(this)};function Pw(u){if(u.h&&typeof o<"u"&&(!u.v[1]||Kr(u)!=4||u.Z()!=2)){if(u.u&&Kr(u)==4)ks(u.Ea,0,u);else if(ft(u,"readystatechange"),Kr(u)==4){u.h=!1;try{const J=u.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var w;if(w=J===0){var N=String(u.D).match(_w)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),w=!gb.test(N?N.toLowerCase():"")}m=w}if(m)ft(u,"complete"),ft(u,"success");else{u.m=6;try{var M=2<Kr(u)?u.g.statusText:""}catch{M=""}u.l=M+" ["+u.Z()+"]",Aw(u)}}finally{ad(u)}}}}function ad(u,f){if(u.g){Cw(u);const m=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,f||ft(u,"ready");try{m.onreadystatechange=w}catch{}}}function Cw(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function Kr(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<Kr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var f=this.g.responseText;return u&&f.indexOf(u)==0&&(f=f.substring(u.length)),td(f)}};function kw(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function yb(u){const f={};u=(u.g&&2<=Kr(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(v(u[w]))continue;var m=k(u[w]);const N=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const M=f[N]||[];f[N]=M,M.push(m)}g(f,function(w){return w.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fl(u,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[u]||f}function bw(u){this.Aa=0,this.i=[],this.j=new he,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fl("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fl("baseRetryDelayMs",5e3,u),this.cb=Fl("retryDelaySeedMs",1e4,u),this.Wa=Fl("forwardChannelMaxRetries",2,u),this.wa=Fl("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new dw(u&&u.concurrentRequestLimit),this.Da=new pb,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=bw.prototype,t.la=8,t.G=1,t.connect=function(u,f,m,w){oe(0),this.W=u,this.H=f||{},m&&w!==void 0&&(this.H.OSID=m,this.H.OAID=w),this.F=this.X,this.I=Uw(this,null,this.W),ud(this)};function Cp(u){if(xw(u),u.G==3){var f=u.U++,m=Gr(u.I);if(Ue(m,"SID",u.K),Ue(m,"RID",f),Ue(m,"TYPE","terminate"),Ul(u,m),f=new un(u,u.j,f),f.L=2,f.v=sd(Gr(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=f.v,m=!0),m||(f.g=Bw(f.j,null),f.g.ea(f.v)),f.F=Date.now(),zt(f)}Fw(u)}function ld(u){u.g&&(bp(u),u.g.cancel(),u.g=null)}function xw(u){ld(u),u.u&&(a.clearTimeout(u.u),u.u=null),cd(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function ud(u){if(!hw(u.h)&&!u.s){u.s=!0;var f=u.Ga;an||de(),W||(an(),W=!0),ue.add(f,u),u.B=0}}function vb(u,f){return fw(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=f.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Z(p(u.Ga,u,f),Mw(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const N=new un(this,this.j,u);let M=this.o;if(this.S&&(M?(M=y(M),A(M,this.S)):M=this.S),this.m!==null||this.O||(N.H=M,M=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var w=this.i[m];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(f+=w,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=Nw(this,N,f),m=Gr(this.I),Ue(m,"RID",u),Ue(m,"CVER",22),this.D&&Ue(m,"X-HTTP-Session-Id",this.D),Ul(this,m),M&&(this.O?f="headers="+encodeURIComponent(String(Sw(M)))+"&"+f:this.m&&Pp(m,this.m,M)),Ap(this.h,N),this.Ua&&Ue(m,"TYPE","init"),this.P?(Ue(m,"$req",f),Ue(m,"SID","null"),N.T=!0,Ai(N,m,null)):Ai(N,m,f),this.G=2}}else this.G==3&&(u?Dw(this,u):this.i.length==0||hw(this.h)||Dw(this))};function Dw(u,f){var m;f?m=f.l:m=u.U++;const w=Gr(u.I);Ue(w,"SID",u.K),Ue(w,"RID",m),Ue(w,"AID",u.T),Ul(u,w),u.m&&u.o&&Pp(w,u.m,u.o),m=new un(u,u.j,m,u.B+1),u.m===null&&(m.H=u.o),f&&(u.i=f.D.concat(u.i)),f=Nw(u,m,1e3),m.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Ap(u.h,m),Ai(m,w,f)}function Ul(u,f){u.H&&B(u.H,function(m,w){Ue(f,w,m)}),u.l&&gw({},function(m,w){Ue(f,w,m)})}function Nw(u,f,m){m=Math.min(u.i.length,m);var w=u.l?p(u.l.Na,u.l,u):null;e:{var N=u.i;let M=-1;for(;;){const J=["count="+m];M==-1?0<m?(M=N[0].g,J.push("ofs="+M)):M=0:J.push("ofs="+M);let Oe=!0;for(let $t=0;$t<m;$t++){let Pe=N[$t].g;const Yt=N[$t].map;if(Pe-=M,0>Pe)M=Math.max(0,N[$t].g-100),Oe=!1;else try{mb(Yt,J,"req"+Pe+"_")}catch{w&&w(Yt)}}if(Oe){w=J.join("&");break e}}}return u=u.i.splice(0,m),f.D=u,w}function Ow(u){if(!u.g&&!u.u){u.Y=1;var f=u.Fa;an||de(),W||(an(),W=!0),ue.add(f,u),u.v=0}}function kp(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Z(p(u.Fa,u),Mw(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,Lw(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Z(p(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,oe(10),ld(this),Lw(this))};function bp(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function Lw(u){u.g=new un(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var f=Gr(u.qa);Ue(f,"RID","rpc"),Ue(f,"SID",u.K),Ue(f,"AID",u.T),Ue(f,"CI",u.F?"0":"1"),!u.F&&u.ja&&Ue(f,"TO",u.ja),Ue(f,"TYPE","xmlhttp"),Ul(u,f),u.m&&u.o&&Pp(f,u.m,u.o),u.L&&(u.g.I=u.L);var m=u.g;u=u.ia,m.L=1,m.v=sd(Gr(f)),m.m=null,m.P=!0,bs(m,u)}t.Za=function(){this.C!=null&&(this.C=null,ld(this),kp(this),oe(19))};function cd(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function Vw(u,f){var m=null;if(u.g==f){cd(u),bp(u),u.g=null;var w=2}else if(Rp(u.h,f))m=f.D,pw(u.h,f),w=1;else return;if(u.G!=0){if(f.o)if(w==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var N=u.B;w=L(),ft(w,new le(w,m)),ud(u)}else Ow(u);else if(N=f.s,N==3||N==0&&0<f.X||!(w==1&&vb(u,f)||w==2&&kp(u)))switch(m&&0<m.length&&(f=u.h,f.i=f.i.concat(m)),N){case 1:Ds(u,5);break;case 4:Ds(u,10);break;case 3:Ds(u,6);break;default:Ds(u,2)}}}function Mw(u,f){let m=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(m*=2),m*f}function Ds(u,f){if(u.j.info("Error code "+f),f==2){var m=p(u.fb,u),w=u.Xa;const N=!w;w=new xs(w||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||rd(w,"https"),sd(w),N?hb(w.toString(),m):fb(w.toString(),m)}else oe(2);u.G=0,u.l&&u.l.sa(f),Fw(u),xw(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),oe(2)):(this.j.info("Failed to ping google.com"),oe(1))};function Fw(u){if(u.G=0,u.ka=[],u.l){const f=mw(u.h);(f.length!=0||u.i.length!=0)&&(C(u.ka,f),C(u.ka,u.i),u.h.i.length=0,T(u.i),u.i.length=0),u.l.ra()}}function Uw(u,f,m){var w=m instanceof xs?Gr(m):new xs(m);if(w.g!="")f&&(w.g=f+"."+w.g),id(w,w.s);else{var N=a.location;w=N.protocol,f=f?f+"."+N.hostname:N.hostname,N=+N.port;var M=new xs(null);w&&rd(M,w),f&&(M.g=f),N&&id(M,N),m&&(M.l=m),w=M}return m=u.D,f=u.ya,m&&f&&Ue(w,m,f),Ue(w,"VER",u.la),Ul(u,w),w}function Bw(u,f,m){if(f&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=u.Ca&&!u.pa?new st(new Ll({eb:m})):new st(u.pa),f.Ha(u.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function jw(){}t=jw.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function dd(){}dd.prototype.g=function(u,f){return new Dn(u,f)};function Dn(u,f){Fe.call(this),this.g=new bw(f),this.l=u,this.h=f&&f.messageUrlParams||null,u=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(u?u["X-WebChannel-Content-Type"]=f.messageContentType:u={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(u?u["X-WebChannel-Client-Profile"]=f.va:u={"X-WebChannel-Client-Profile":f.va}),this.g.S=u,(u=f&&f.Sb)&&!v(u)&&(this.g.m=u),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!v(f)&&(this.g.D=f,u=this.h,u!==null&&f in u&&(u=this.h,f in u&&delete u[f])),this.j=new qo(this)}E(Dn,Fe),Dn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dn.prototype.close=function(){Cp(this.g)},Dn.prototype.o=function(u){var f=this.g;if(typeof u=="string"){var m={};m.__data__=u,u=m}else this.u&&(m={},m.__data__=bl(u),u=m);f.i.push(new nb(f.Ya++,u)),f.G==3&&ud(f)},Dn.prototype.N=function(){this.g.l=null,delete this.j,Cp(this.g),delete this.g,Dn.aa.N.call(this)};function zw(u){xl.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var f=u.__sm__;if(f){e:{for(const m in f){u=m;break e}u=void 0}(this.i=u)&&(u=this.i,f=f!==null&&u in f?f[u]:void 0),this.data=f}else this.data=u}E(zw,xl);function $w(){zo.call(this),this.status=1}E($w,zo);function qo(u){this.g=u}E(qo,jw),qo.prototype.ua=function(){ft(this.g,"a")},qo.prototype.ta=function(u){ft(this.g,new zw(u))},qo.prototype.sa=function(u){ft(this.g,new $w)},qo.prototype.ra=function(){ft(this.g,"b")},dd.prototype.createWebChannel=dd.prototype.g,Dn.prototype.send=Dn.prototype.o,Dn.prototype.open=Dn.prototype.m,Dn.prototype.close=Dn.prototype.close,FP=function(){return new dd},MP=function(){return L()},VP=$r,Mg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xe.NO_ERROR=0,Xe.TIMEOUT=8,Xe.HTTP_ERROR=6,rh=Xe,Si.COMPLETE="complete",LP=Si,nd.EventType=Ti,Ti.OPEN="a",Ti.CLOSE="b",Ti.ERROR="c",Ti.MESSAGE="d",Fe.prototype.listen=Fe.prototype.K,pu=nd,OP=Ll,st.prototype.listenOnce=st.prototype.L,st.prototype.getLastError=st.prototype.Ka,st.prototype.getLastErrorCode=st.prototype.Ba,st.prototype.getStatus=st.prototype.Z,st.prototype.getResponseJson=st.prototype.Oa,st.prototype.getResponseText=st.prototype.oa,st.prototype.send=st.prototype.ea,st.prototype.setWithCredentials=st.prototype.Ha,NP=st}).apply(typeof xd<"u"?xd:typeof self<"u"?self:typeof window<"u"?window:{});const XI="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xt.UNAUTHENTICATED=new xt(null),xt.GOOGLE_CREDENTIALS=new xt("google-credentials-uid"),xt.FIRST_PARTY=new xt("first-party-uid"),xt.MOCK_USER=new xt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pl="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=new xf("@firebase/firestore");function ea(){return ls.logLevel}function yU(t){ls.setLogLevel(t)}function q(t,...e){if(ls.logLevel<=ve.DEBUG){const n=e.map(Jy);ls.debug(`Firestore (${pl}): ${t}`,...n)}}function mt(t,...e){if(ls.logLevel<=ve.ERROR){const n=e.map(Jy);ls.error(`Firestore (${pl}): ${t}`,...n)}}function yr(t,...e){if(ls.logLevel<=ve.WARN){const n=e.map(Jy);ls.warn(`Firestore (${pl}): ${t}`,...n)}}function Jy(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(t="Unexpected state"){const e=`FIRESTORE (${pl}) INTERNAL ASSERTION FAILED: `+t;throw mt(e),new Error(e)}function se(t,e){t||te()}function vU(t,e){t||te()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wU{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(xt.UNAUTHENTICATED))}shutdown(){}}class EU{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class IU{constructor(e){this.t=e,this.currentUser=xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Ot;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ot,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ot)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(se(typeof r.accessToken=="string"),new UP(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string"),new xt(e)}}class TU{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=xt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class SU{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new TU(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class RU{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class AU{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(se(typeof n.token=="string"),this.R=n.token,new RU(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PU(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=PU(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function pe(t,e){return t<e?-1:t>e?1:0}function Ha(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function jP(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new Je(0,0))}static max(){return new ae(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,n,r){n===void 0?n=0:n>e.length&&te(),r===void 0?r=e.length-n:r>e.length-n&&te(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return cc.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof cc?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends cc{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const CU=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends cc{construct(e,n,r){return new Ke(e,n,r)}static isValidIdentifier(e){return CU.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ke(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new $(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new $(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new $(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(n)}static emptyPath(){return new Ke([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Ie.fromString(e))}static fromName(e){return new Y(Ie.fromString(e).popFirst(5))}static empty(){return new Y(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Ie(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Fg(t){return t.fields.find(e=>e.kind===2)}function Ms(t){return t.fields.filter(e=>e.kind!==2)}Qh.UNKNOWN_ID=-1;class ih{constructor(e,n){this.fieldPath=e,this.kind=n}}class dc{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new dc(0,Bn.min())}}function zP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ae.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new Bn(i,Y.empty(),e)}function $P(t){return new Bn(t.readTime,t.key,-1)}class Bn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Bn(ae.min(),Y.empty(),-1)}static max(){return new Bn(ae.max(),Y.empty(),-1)}}function Yy(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class WP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==qP)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new Ot,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new xu(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Xy(r.target.error);this.V.reject(new xu(e,i))}}static open(e,n,r,i){try{return new qf(n,e.transaction(i,r))}catch(s){throw new xu(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(q("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new bU(n)}}class Lr{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Lr.S(Ye())===12.2&&mt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return q("SimpleDb","Removing database:",e),Fs(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!rc())return!1;if(Lr.C())return!0;const e=Ye(),n=Lr.S(e),r=0<n&&n<10,i=HP(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.v)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(q("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new xu(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new $(V.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new $(V.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new xu(e,o))},i.onupgradeneeded=s=>{q("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{q("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=qf.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),O.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(q("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function HP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class kU{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Fs(this.B.delete())}}class xu extends ${constructor(e,n){super(V.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Ts(t){return t.name==="IndexedDbTransactionError"}class bU{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(q("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(q("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Fs(r)}add(e){return q("SimpleDb","ADD",this.store.name,e,e),Fs(this.store.add(e))}get(e){return Fs(this.store.get(e)).next(n=>(n===void 0&&(n=null),q("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return q("SimpleDb","DELETE",this.store.name,e),Fs(this.store.delete(e))}count(){return q("SimpleDb","COUNT",this.store.name),Fs(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new O((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,l)=>{o.push(l)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new O((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){q("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new O((r,i)=>{n.onerror=s=>{const o=Xy(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new O((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new kU(a),c=n(a.primaryKey,a.value,l);if(c instanceof O){const d=c.catch(h=>(l.done(),O.reject(h)));r.push(d)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>O.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Fs(t){return new O((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Xy(r.target.error);n(i)}})}let ZI=!1;function Xy(t){const e=Lr.S(Ye());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new $("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ZI||(ZI=!0,setTimeout(()=>{throw r},0)),r}}return t}class xU{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){q("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{q("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){Ts(n)?q("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await Is(n)}await this.X(6e4)})}}class DU{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return O.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return q("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(q("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=$P(s);Yy(o,r)>0&&(r=o)}),new Bn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Rn.oe=-1;function Mc(t){return t==null}function hc(t){return t===0&&1/t==-1/0}function GP(t){return typeof t=="number"&&Number.isInteger(t)&&!hc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=eT(e)),e=NU(t.get(n),e);return eT(e)}function NU(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function eT(t){return t+""}function xr(t){const e=t.length;if(se(e>=2),e===2)return se(t.charAt(0)===""&&t.charAt(1)===""),Ie.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&te(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:te()}s=o+2}return new Ie(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(t,e){return[t,gn(e)]}function KP(t,e,n){return[t,gn(e),n]}const OU={},LU=["prefixPath","collectionGroup","readTime","documentId"],VU=["prefixPath","collectionGroup","documentId"],MU=["collectionGroup","readTime","prefixPath","documentId"],FU=["canonicalId","targetId"],UU=["targetId","path"],BU=["path","targetId"],jU=["collectionId","parent"],zU=["indexId","uid"],$U=["uid","sequenceNumber"],qU=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],WU=["indexId","uid","orderedDocumentKey"],HU=["userId","collectionPath","documentId"],GU=["userId","collectionPath","largestBatchId"],KU=["userId","collectionGroup","largestBatchId"],QP=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],QU=[...QP,"documentOverlays"],JP=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],YP=JP,XP=[...YP,"indexConfiguration","indexState","indexEntries"],JU=XP;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug extends WP{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function Vt(t,e){const n=X(t);return Lr.F(n._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ko(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ZP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){this.comparator=e,this.root=n||Ht.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ht.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Dd(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Dd(this.root,e,this.comparator,!1)}getReverseIterator(){return new Dd(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Dd(this.root,e,this.comparator,!0)}}class Dd{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ht{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ht.RED,this.left=i??Ht.EMPTY,this.right=s??Ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ht(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ht.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}}Ht.EMPTY=null,Ht.RED=!0,Ht.BLACK=!1;Ht.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new rT(this.data.getIterator())}getIteratorFrom(e){return new rT(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ne)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ne(this.comparator);return n.data=e,n}}class rT{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Qo(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new An([])}unionWith(e){let n=new Ne(Ke.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new An(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ha(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YU(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new eC("Invalid base64 string: "+s):s}}(e);return new Ct(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const XU=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hi(t){if(se(!!t),typeof t=="string"){let e=0;const n=XU.exec(t);if(se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:at(t.seconds),nanos:at(t.nanos)}}function at(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function us(t){return typeof t=="string"?Ct.fromBase64String(t):Ct.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Zy(t){const e=t.mapValue.fields.__previous_value__;return Wf(e)?Zy(e):e}function fc(t){const e=hi(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZU{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class cs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new cs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof cs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},oh={nullValue:"NULL_VALUE"};function fo(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wf(t)?4:tC(t)?9007199254740991:10:te()}function Ur(t,e){if(t===e)return!0;const n=fo(t);if(n!==fo(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fc(t).isEqual(fc(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=hi(i.timestampValue),a=hi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return us(i.bytesValue).isEqual(us(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return at(i.geoPointValue.latitude)===at(s.geoPointValue.latitude)&&at(i.geoPointValue.longitude)===at(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return at(i.integerValue)===at(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=at(i.doubleValue),a=at(s.doubleValue);return o===a?hc(o)===hc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ha(t.arrayValue.values||[],e.arrayValue.values||[],Ur);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(nT(o)!==nT(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Ur(o[l],a[l])))return!1;return!0}(t,e);default:return te()}}function pc(t,e){return(t.values||[]).find(n=>Ur(n,e))!==void 0}function ds(t,e){if(t===e)return 0;const n=fo(t),r=fo(e);if(n!==r)return pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=at(s.integerValue||s.doubleValue),l=at(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return iT(t.timestampValue,e.timestampValue);case 4:return iT(fc(t),fc(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return function(s,o){const a=us(s),l=us(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const d=pe(a[c],l[c]);if(d!==0)return d}return pe(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=pe(at(s.latitude),at(o.latitude));return a!==0?a:pe(at(s.longitude),at(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const d=ds(a[c],l[c]);if(d)return d}return pe(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Hi.mapValue&&o===Hi.mapValue)return 0;if(s===Hi.mapValue)return 1;if(o===Hi.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},d=Object.keys(c);l.sort(),d.sort();for(let h=0;h<l.length&&h<d.length;++h){const p=pe(l[h],d[h]);if(p!==0)return p;const _=ds(a[l[h]],c[d[h]]);if(_!==0)return _}return pe(l.length,d.length)}(t.mapValue,e.mapValue);default:throw te()}}function iT(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=hi(t),r=hi(e),i=pe(n.seconds,r.seconds);return i!==0?i:pe(n.nanos,r.nanos)}function Ga(t){return Bg(t)}function Bg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=hi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return us(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Bg(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Bg(n.fields[o])}`;return i+"}"}(t.mapValue):te()}function po(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function jg(t){return!!t&&"integerValue"in t}function mc(t){return!!t&&"arrayValue"in t}function sT(t){return!!t&&"nullValue"in t}function oT(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ah(t){return!!t&&"mapValue"in t}function Du(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ko(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Du(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Du(t.arrayValue.values[n]);return e}return Object.assign({},t)}function tC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function eB(t){return"nullValue"in t?oh:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?po(cs.empty(),Y.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:te()}function tB(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?po(cs.empty(),Y.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Hi:te()}function aT(t,e){const n=ds(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function lT(t,e){const n=ds(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.value=e}static empty(){return new Gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ah(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Du(n)}setAll(e){let n=Ke.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Du(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ah(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ur(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ah(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ko(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Gt(Du(this.value))}}function nC(t){const e=[];return ko(t.fields,(n,r)=>{const i=new Ke([n]);if(ah(r)){const s=nC(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new An(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new je(e,0,ae.min(),ae.min(),ae.min(),Gt.empty(),0)}static newFoundDocument(e,n,r,i){return new je(e,1,n,ae.min(),r,i,0)}static newNoDocument(e,n){return new je(e,2,n,ae.min(),ae.min(),Gt.empty(),0)}static newUnknownDocument(e,n){return new je(e,3,n,ae.min(),ae.min(),Gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n){this.position=e,this.inclusive=n}}function uT(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=ds(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function cT(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ur(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,n="asc"){this.field=e,this.dir=n}}function nB(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{}class Te extends rC{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new rB(e,n,r):n==="array-contains"?new oB(e,r):n==="in"?new uC(e,r):n==="not-in"?new aB(e,r):n==="array-contains-any"?new lB(e,r):new Te(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new iB(e,r):new sB(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ds(n,this.value)):n!==null&&fo(this.value)===fo(n)&&this.matchesComparison(ds(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ke extends rC{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ke(e,n)}matches(e){return Ka(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ka(t){return t.op==="and"}function zg(t){return t.op==="or"}function ev(t){return iC(t)&&Ka(t)}function iC(t){for(const e of t.filters)if(e instanceof ke)return!1;return!0}function $g(t){if(t instanceof Te)return t.field.canonicalString()+t.op.toString()+Ga(t.value);if(ev(t))return t.filters.map(e=>$g(e)).join(",");{const e=t.filters.map(n=>$g(n)).join(",");return`${t.op}(${e})`}}function sC(t,e){return t instanceof Te?function(r,i){return i instanceof Te&&r.op===i.op&&r.field.isEqual(i.field)&&Ur(r.value,i.value)}(t,e):t instanceof ke?function(r,i){return i instanceof ke&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&sC(o,i.filters[a]),!0):!1}(t,e):void te()}function oC(t,e){const n=t.filters.concat(e);return ke.create(n,t.op)}function aC(t){return t instanceof Te?function(n){return`${n.field.canonicalString()} ${n.op} ${Ga(n.value)}`}(t):t instanceof ke?function(n){return n.op.toString()+" {"+n.getFilters().map(aC).join(" ,")+"}"}(t):"Filter"}class rB extends Te{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class iB extends Te{constructor(e,n){super(e,"in",n),this.keys=lC("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class sB extends Te{constructor(e,n){super(e,"not-in",n),this.keys=lC("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function lC(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class oB extends Te{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return mc(n)&&pc(n.arrayValue,this.value)}}class uC extends Te{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&pc(this.value.arrayValue,n)}}class aB extends Te{constructor(e,n){super(e,"not-in",n)}matches(e){if(pc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!pc(this.value.arrayValue,n)}}class lB extends Te{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!mc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>pc(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uB{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function qg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new uB(t,e,n,r,i,s,o)}function mo(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>$g(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Mc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ga(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ga(r)).join(",")),e.ue=n}return e.ue}function Fc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!nB(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!sC(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!cT(t.startAt,e.startAt)&&cT(t.endAt,e.endAt)}function Jh(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Yh(t,e){return t.filters.filter(n=>n instanceof Te&&n.field.isEqual(e))}function dT(t,e,n){let r=oh,i=!0;for(const s of Yh(t,e)){let o=oh,a=!0;switch(s.op){case"<":case"<=":o=eB(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=oh}aT({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];aT({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function hT(t,e,n){let r=Hi,i=!0;for(const s of Yh(t,e)){let o=Hi,a=!0;switch(s.op){case">=":case">":o=tB(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Hi}lT({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];lT({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function cC(t,e,n,r,i,s,o,a){return new yi(t,e,n,r,i,s,o,a)}function ml(t){return new yi(t)}function fT(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function tv(t){return t.collectionGroup!==null}function ka(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ne(Ke.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new gc(s,r))}),n.has(Ke.keyField().canonicalString())||e.ce.push(new gc(Ke.keyField(),r))}return e.ce}function _n(t){const e=X(t);return e.le||(e.le=cB(e,ka(t))),e.le}function cB(t,e){if(t.limitType==="F")return qg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new gc(i.field,s)});const n=t.endAt?new hs(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new hs(t.startAt.position,t.startAt.inclusive):null;return qg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Wg(t,e){const n=t.filters.concat([e]);return new yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Xh(t,e,n){return new yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Uc(t,e){return Fc(_n(t),_n(e))&&t.limitType===e.limitType}function dC(t){return`${mo(_n(t))}|lt:${t.limitType}`}function ta(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>aC(i)).join(", ")}]`),Mc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ga(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ga(i)).join(",")),`Target(${r})`}(_n(t))}; limitType=${t.limitType})`}function Bc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Y.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ka(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=uT(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,ka(r),i)||r.endAt&&!function(o,a,l){const c=uT(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,ka(r),i))}(t,e)}function hC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function fC(t){return(e,n)=>{let r=!1;for(const i of ka(t)){const s=dB(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function dB(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?ds(l,c):te()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return te()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ko(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ZP(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hB=new Me(Y.comparator);function Pn(){return hB}const pC=new Me(Y.comparator);function mu(...t){let e=pC;for(const n of t)e=e.insert(n.key,n);return e}function mC(t){let e=pC;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Dr(){return Nu()}function gC(){return Nu()}function Nu(){return new Ss(t=>t.toString(),(t,e)=>t.isEqual(e))}const fB=new Me(Y.comparator),pB=new Ne(Y.comparator);function ge(...t){let e=pB;for(const n of t)e=e.add(n);return e}const mB=new Ne(pe);function nv(){return mB}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hc(e)?"-0":e}}function yC(t){return{integerValue:""+t}}function vC(t,e){return GP(e)?yC(e):_C(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(){this._=void 0}}function gB(t,e,n){return t instanceof Qa?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Wf(s)&&(s=Zy(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof go?EC(t,e):t instanceof _o?IC(t,e):function(i,s){const o=wC(i,s),a=pT(o)+pT(i.Pe);return jg(o)&&jg(i.Pe)?yC(a):_C(i.serializer,a)}(t,e)}function _B(t,e,n){return t instanceof go?EC(t,e):t instanceof _o?IC(t,e):n}function wC(t,e){return t instanceof Ja?function(r){return jg(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Qa extends Hf{}class go extends Hf{constructor(e){super(),this.elements=e}}function EC(t,e){const n=TC(e);for(const r of t.elements)n.some(i=>Ur(i,r))||n.push(r);return{arrayValue:{values:n}}}class _o extends Hf{constructor(e){super(),this.elements=e}}function IC(t,e){let n=TC(e);for(const r of t.elements)n=n.filter(i=>!Ur(i,r));return{arrayValue:{values:n}}}class Ja extends Hf{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function pT(t){return at(t.integerValue||t.doubleValue)}function TC(t){return mc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,n){this.field=e,this.transform=n}}function yB(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof go&&i instanceof go||r instanceof _o&&i instanceof _o?Ha(r.elements,i.elements,Ur):r instanceof Ja&&i instanceof Ja?Ur(r.Pe,i.Pe):r instanceof Qa&&i instanceof Qa}(t.transform,e.transform)}class vB{constructor(e,n){this.version=e,this.transformResults=n}}class Qe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Qe}static exists(e){return new Qe(void 0,e)}static updateTime(e){return new Qe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lh(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Gf{}function SC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _l(t.key,Qe.none()):new gl(t.key,t.data,Qe.none());{const n=t.data,r=Gt.empty();let i=new Ne(Ke.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new vi(t.key,r,new An(i.toArray()),Qe.none())}}function wB(t,e,n){t instanceof gl?function(i,s,o){const a=i.value.clone(),l=gT(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof vi?function(i,s,o){if(!lh(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=gT(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(RC(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ou(t,e,n,r){return t instanceof gl?function(s,o,a,l){if(!lh(s.precondition,o))return a;const c=s.value.clone(),d=_T(s.fieldTransforms,l,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof vi?function(s,o,a,l){if(!lh(s.precondition,o))return a;const c=_T(s.fieldTransforms,l,o),d=o.data;return d.setAll(RC(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return lh(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function EB(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=wC(r.transform,i||null);s!=null&&(n===null&&(n=Gt.empty()),n.set(r.field,s))}return n||null}function mT(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ha(r,i,(s,o)=>yB(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class gl extends Gf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class vi extends Gf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function RC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function gT(t,e,n){const r=new Map;se(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,_B(o,a,n[i]))}return r}function _T(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,gB(s,o,e))}return r}class _l extends Gf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rv extends Gf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&wB(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ou(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ou(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=gC();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=SC(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&Ha(this.mutations,e.mutations,(n,r)=>mT(n,r))&&Ha(this.baseMutations,e.baseMutations,(n,r)=>mT(n,r))}}class sv{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){se(e.mutations.length===r.length);let i=function(){return fB}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new sv(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IB{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt,Se;function AC(t){switch(t){default:return te();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function PC(t){if(t===void 0)return mt("GRPC error has no .code"),V.UNKNOWN;switch(t){case yt.OK:return V.OK;case yt.CANCELLED:return V.CANCELLED;case yt.UNKNOWN:return V.UNKNOWN;case yt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case yt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case yt.INTERNAL:return V.INTERNAL;case yt.UNAVAILABLE:return V.UNAVAILABLE;case yt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case yt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case yt.NOT_FOUND:return V.NOT_FOUND;case yt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case yt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case yt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case yt.ABORTED:return V.ABORTED;case yt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case yt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case yt.DATA_LOSS:return V.DATA_LOSS;default:return te()}}(Se=yt||(yt={}))[Se.OK=0]="OK",Se[Se.CANCELLED=1]="CANCELLED",Se[Se.UNKNOWN=2]="UNKNOWN",Se[Se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Se[Se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Se[Se.NOT_FOUND=5]="NOT_FOUND",Se[Se.ALREADY_EXISTS=6]="ALREADY_EXISTS",Se[Se.PERMISSION_DENIED=7]="PERMISSION_DENIED",Se[Se.UNAUTHENTICATED=16]="UNAUTHENTICATED",Se[Se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Se[Se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Se[Se.ABORTED=10]="ABORTED",Se[Se.OUT_OF_RANGE=11]="OUT_OF_RANGE",Se[Se.UNIMPLEMENTED=12]="UNIMPLEMENTED",Se[Se.INTERNAL=13]="INTERNAL",Se[Se.UNAVAILABLE=14]="UNAVAILABLE",Se[Se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TB=new to([4294967295,4294967295],0);function yT(t){const e=CC().encode(t),n=new DP;return n.update(e),new Uint8Array(n.digest())}function vT(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new to([n,r],0),new to([i,s],0)]}class av{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new gu(`Invalid padding: ${n}`);if(r<0)throw new gu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new gu(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new gu(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=to.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(to.fromNumber(r)));return i.compare(TB)===1&&(i=new to([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=yT(e),[r,i]=vT(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new av(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=yT(e),[r,i]=vT(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class gu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,$c.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new zc(ae.min(),i,new Me(pe),Pn(),ge())}}class $c{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new $c(r,n,ge(),ge(),ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class kC{constructor(e,n){this.targetId=e,this.me=n}}class bC{constructor(e,n,r=Ct.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class wT{constructor(){this.fe=0,this.ge=IT(),this.pe=Ct.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ge(),n=ge(),r=ge();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:te()}}),new $c(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=IT()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,se(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class SB{constructor(e){this.Le=e,this.Be=new Map,this.ke=Pn(),this.qe=ET(),this.Qe=new Me(pe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:te()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Jh(s))if(r===0){const o=new Y(s.path);this.Ue(n,o,je.newNoDocument(o,ae.min()))}else se(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=us(r).toUint8Array()}catch(l){if(l instanceof eC)return yr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new av(o,i,s)}catch(l){return yr(l instanceof gu?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Jh(a.target)){const l=new Y(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,je.newNoDocument(l,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=ge();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new zc(e,n,this.Qe,this.ke,r);return this.ke=Pn(),this.qe=ET(),this.Qe=new Me(pe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new wT,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ne(pe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new wT),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function ET(){return new Me(Y.comparator)}function IT(){return new Me(Y.comparator)}const RB={asc:"ASCENDING",desc:"DESCENDING"},AB={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},PB={and:"AND",or:"OR"};class CB{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Hg(t,e){return t.useProto3Json||Mc(e)?e:{value:e}}function Ya(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function kB(t,e){return Ya(t,e.toTimestamp())}function gt(t){return se(!!t),ae.fromTimestamp(function(n){const r=hi(n);return new Je(r.seconds,r.nanos)}(t))}function lv(t,e){return Gg(t,e).canonicalString()}function Gg(t,e){const n=function(i){return new Ie(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function DC(t){const e=Ie.fromString(t);return se(zC(e)),e}function _c(t,e){return lv(t.databaseId,e.path)}function Vr(t,e){const n=DC(e);if(n.get(1)!==t.databaseId.projectId)throw new $(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(LC(n))}function NC(t,e){return lv(t.databaseId,e)}function OC(t){const e=DC(t);return e.length===4?Ie.emptyPath():LC(e)}function Kg(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function LC(t){return se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function TT(t,e,n){return{name:_c(t,e),fields:n.value.mapValue.fields}}function VC(t,e,n){const r=Vr(t,e.name),i=gt(e.updateTime),s=e.createTime?gt(e.createTime):ae.min(),o=new Gt({mapValue:{fields:e.fields}}),a=je.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function bB(t,e){return"found"in e?function(r,i){se(!!i.found),i.found.name,i.found.updateTime;const s=Vr(r,i.found.name),o=gt(i.found.updateTime),a=i.found.createTime?gt(i.found.createTime):ae.min(),l=new Gt({mapValue:{fields:i.found.fields}});return je.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){se(!!i.missing),se(!!i.readTime);const s=Vr(r,i.missing),o=gt(i.readTime);return je.newNoDocument(s,o)}(t,e):te()}function xB(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(se(d===void 0||typeof d=="string"),Ct.fromBase64String(d||"")):(se(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Ct.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?V.UNKNOWN:PC(c.code);return new $(d,c.message||"")}(o);n=new bC(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Vr(t,r.document.name),s=gt(r.document.updateTime),o=r.document.createTime?gt(r.document.createTime):ae.min(),a=new Gt({mapValue:{fields:r.document.fields}}),l=je.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new uh(c,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Vr(t,r.document),s=r.readTime?gt(r.readTime):ae.min(),o=je.newNoDocument(i,s),a=r.removedTargetIds||[];n=new uh([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Vr(t,r.document),s=r.removedTargetIds||[];n=new uh([],s,i,null)}else{if(!("filter"in e))return te();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new IB(i,s),a=r.targetId;n=new kC(a,o)}}return n}function yc(t,e){let n;if(e instanceof gl)n={update:TT(t,e.key,e.value)};else if(e instanceof _l)n={delete:_c(t,e.key)};else if(e instanceof vi)n={update:TT(t,e.key,e.data),updateMask:MB(e.fieldMask)};else{if(!(e instanceof rv))return te();n={verify:_c(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Qa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof go)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof _o)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ja)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw te()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:kB(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:te()}(t,e.precondition)),n}function Qg(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Qe.updateTime(gt(s.updateTime)):s.exists!==void 0?Qe.exists(s.exists):Qe.none()}(e.currentDocument):Qe.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)se(a.setToServerValue==="REQUEST_TIME"),l=new Qa;else if("appendMissingElements"in a){const d=a.appendMissingElements.values||[];l=new go(d)}else if("removeAllFromArray"in a){const d=a.removeAllFromArray.values||[];l=new _o(d)}else"increment"in a?l=new Ja(o,a.increment):te();const c=Ke.fromServerFormat(a.fieldPath);return new jc(c,l)}(t,i)):[];if(e.update){e.update.name;const i=Vr(t,e.update.name),s=new Gt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const c=l.fieldPaths||[];return new An(c.map(d=>Ke.fromServerFormat(d)))}(e.updateMask);return new vi(i,s,o,n,r)}return new gl(i,s,n,r)}if(e.delete){const i=Vr(t,e.delete);return new _l(i,n)}if(e.verify){const i=Vr(t,e.verify);return new rv(i,n)}return te()}function DB(t,e){return t&&t.length>0?(se(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?gt(i.updateTime):gt(s);return o.isEqual(ae.min())&&(o=gt(s)),new vB(o,i.transformResults||[])}(n,e))):[]}function MC(t,e){return{documents:[NC(t,e.path)]}}function FC(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=NC(t,i);const s=function(c){if(c.length!==0)return jC(ke.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(p){return{field:na(p.field),direction:OB(p.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Hg(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function UC(t){let e=OC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){se(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(h){const p=BC(h);return p instanceof ke&&ev(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(p=>function(E){return new gc(ra(E.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,Mc(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(h){const p=!!h.before,_=h.values||[];return new hs(_,p)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const p=!h.before,_=h.values||[];return new hs(_,p)}(n.endAt)),cC(e,i,o,s,a,"F",l,c)}function NB(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function BC(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ra(n.unaryFilter.field);return Te.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ra(n.unaryFilter.field);return Te.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ra(n.unaryFilter.field);return Te.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ra(n.unaryFilter.field);return Te.create(o,"!=",{nullValue:"NULL_VALUE"});default:return te()}}(t):t.fieldFilter!==void 0?function(n){return Te.create(ra(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ke.create(n.compositeFilter.filters.map(r=>BC(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return te()}}(n.compositeFilter.op))}(t):te()}function OB(t){return RB[t]}function LB(t){return AB[t]}function VB(t){return PB[t]}function na(t){return{fieldPath:t.canonicalString()}}function ra(t){return Ke.fromServerFormat(t.fieldPath)}function jC(t){return t instanceof Te?function(n){if(n.op==="=="){if(oT(n.value))return{unaryFilter:{field:na(n.field),op:"IS_NAN"}};if(sT(n.value))return{unaryFilter:{field:na(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(oT(n.value))return{unaryFilter:{field:na(n.field),op:"IS_NOT_NAN"}};if(sT(n.value))return{unaryFilter:{field:na(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:na(n.field),op:LB(n.op),value:n.value}}}(t):t instanceof ke?function(n){const r=n.getFilters().map(i=>jC(i));return r.length===1?r[0]:{compositeFilter:{op:VB(n.op),filters:r}}}(t):te()}function MB(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function zC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n,r,i,s=ae.min(),o=ae.min(),a=Ct.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ti(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e){this.ct=e}}function FB(t,e){let n;if(e.document)n=VC(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=Y.fromSegments(e.noDocument.path),i=vo(e.noDocument.readTime);n=je.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return te();{const r=Y.fromSegments(e.unknownDocument.path),i=vo(e.unknownDocument.version);n=je.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new Je(i[0],i[1]);return ae.fromTimestamp(s)}(e.readTime)),n}function ST(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Zh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:_c(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Ya(s,o.version.toTimestamp()),createTime:Ya(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:yo(e.version)};else{if(!e.isUnknownDocument())return te();r.unknownDocument={path:n.path.toArray(),version:yo(e.version)}}return r}function Zh(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function yo(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function vo(t){const e=new Je(t.seconds,t.nanoseconds);return ae.fromTimestamp(e)}function Us(t,e){const n=(e.baseMutations||[]).map(s=>Qg(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Qg(t.ct,s)),i=Je.fromMillis(e.localWriteTimeMs);return new iv(e.batchId,i,n,r)}function _u(t){const e=vo(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?vo(t.lastLimboFreeSnapshotVersion):ae.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return se(s.documents.length===1),_n(ml(OC(s.documents[0])))}(t.query):function(s){return _n(UC(s))}(t.query),new ti(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Ct.fromBase64String(t.resumeToken))}function qC(t,e){const n=yo(e.snapshotVersion),r=yo(e.lastLimboFreeSnapshotVersion);let i;i=Jh(e.target)?MC(t.ct,e.target):FC(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:mo(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function uv(t){const e=UC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xh(e,e.limit,"L"):e}function ym(t,e){return new ov(e.largestBatchId,Qg(t.ct,e.overlayMutation))}function RT(t,e){const n=e.path.lastSegment();return[t,gn(e.path.popLast()),n]}function AT(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:yo(r.readTime),documentKey:gn(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UB{getBundleMetadata(e,n){return PT(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:vo(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return PT(e).put(function(i){return{bundleId:i.id,createTime:yo(gt(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return CT(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:uv(s.bundledQuery),readTime:vo(s.readTime)}}(r)})}saveNamedQuery(e,n){return CT(e).put(function(i){return{name:i.name,readTime:yo(gt(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function PT(t){return Vt(t,"bundles")}function CT(t){return Vt(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new Kf(e,r)}getOverlay(e,n){return eu(e).get(RT(this.userId,n)).next(r=>r?ym(this.serializer,r):null)}getOverlays(e,n){const r=Dr();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new ov(n,o);i.push(this.ht(e,a))}),O.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(gn(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(eu(e).j("collectionPathOverlayIndex",a))}),O.waitFor(s)}getOverlaysForCollection(e,n,r){const i=Dr(),s=gn(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return eu(e).U("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const c=ym(this.serializer,l);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=Dr();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return eu(e).J({index:"collectionGroupOverlayIndex",range:a},(l,c,d)=>{const h=ym(this.serializer,c);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):d.done()}).next(()=>s)}ht(e,n){return eu(e).put(function(i,s,o){const[a,l,c]=RT(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:yc(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function eu(t){return Vt(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(at(e.integerValue));else if("doubleValue"in e){const r=at(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),hc(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Et(n,20),typeof r=="string"&&(r=hi(r)),n.At(`${r.seconds||""}`),n.dt(r.nanos||0)}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(us(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?tC(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):te()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){const r=e.fields||{};this.Et(n,55);for(const i of Object.keys(r))this.Rt(i,n),this.It(r[i],n)}wt(e,n){const r=e.values||[];this.Et(n,50);for(const i of r)this.It(i,n)}gt(e,n){this.Et(n,37),Y.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}}Bs.bt=new Bs;function BB(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function kT(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=BB(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class jB{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ct(r.value),r=n.next();this.vt()}Ft(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Mt(r.value),r=n.next();this.xt()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ct(r);else if(r<2048)this.Ct(960|r>>>6),this.Ct(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ct(480|r>>>12),this.Ct(128|63&r>>>6),this.Ct(128|63&r);else{const i=n.codePointAt(0);this.Ct(240|i>>>18),this.Ct(128|63&i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i)}}this.vt()}Nt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=n.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Lt(e){const n=this.Bt(e),r=kT(n);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}qt(e){const n=this.Bt(e),r=kT(n);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Bt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ct(e){const n=255&e;n===0?(this.Kt(0),this.Kt(255)):n===255?(this.Kt(255),this.Kt(0)):this.Kt(n)}Mt(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class zB{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Lt(e)}Tt(){this.Gt.Qt()}}class $B{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class tu{constructor(){this.Gt=new jB,this.zt=new zB(this.Gt),this.jt=new $B(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new js(this.indexId,this.documentKey,this.arrayValue,r)}}function Di(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=bT(t.arrayValue,e.arrayValue),n!==0?n:(n=bT(t.directionalValue,e.directionalValue),n!==0?n:Y.comparator(t.documentKey,e.documentKey)))}function bT(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e){this.Yt=new Ne((n,r)=>Ke.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Yt=this.Yt.add(r):this.Xt.push(r)}}get en(){return this.Yt.size>1}tn(e){if(se(e.collectionGroup===this.collectionId),this.en)return!1;const n=Fg(e);if(n!==void 0&&!this.nn(n))return!1;const r=Ms(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.nn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Yt.size>0){const a=this.Yt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.rn(a,l)||!this.sn(this.Zt[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Zt.length||!this.sn(this.Zt[o++],a))return!1}return!0}on(){if(this.en)return null;let e=new Ne(Ke.comparator);const n=[];for(const r of this.Xt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new ih(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new ih(r.field,0))}for(const r of this.Zt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new ih(r.field,r.dir==="asc"?0:1)));return new Qh(Qh.UNKNOWN_ID,this.collectionId,n,dc.empty())}nn(e){for(const n of this.Xt)if(this.rn(n,e))return!0;return!1}rn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WC(t){var e,n;if(se(t instanceof Te||t instanceof ke),t instanceof Te){if(t instanceof uC){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>Te.create(t.field,"==",s)))||[];return ke.create(i,"or")}return t}const r=t.filters.map(i=>WC(i));return ke.create(r,t.op)}function qB(t){if(t.getFilters().length===0)return[];const e=Xg(WC(t));return se(HC(e)),Jg(e)||Yg(e)?[e]:e.getFilters()}function Jg(t){return t instanceof Te}function Yg(t){return t instanceof ke&&ev(t)}function HC(t){return Jg(t)||Yg(t)||function(n){if(n instanceof ke&&zg(n)){for(const r of n.getFilters())if(!Jg(r)&&!Yg(r))return!1;return!0}return!1}(t)}function Xg(t){if(se(t instanceof Te||t instanceof ke),t instanceof Te)return t;if(t.filters.length===1)return Xg(t.filters[0]);const e=t.filters.map(r=>Xg(r));let n=ke.create(e,t.op);return n=ef(n),HC(n)?n:(se(n instanceof ke),se(Ka(n)),se(n.filters.length>1),n.filters.reduce((r,i)=>cv(r,i)))}function cv(t,e){let n;return se(t instanceof Te||t instanceof ke),se(e instanceof Te||e instanceof ke),n=t instanceof Te?e instanceof Te?function(i,s){return ke.create([i,s],"and")}(t,e):DT(t,e):e instanceof Te?DT(e,t):function(i,s){if(se(i.filters.length>0&&s.filters.length>0),Ka(i)&&Ka(s))return oC(i,s.getFilters());const o=zg(i)?i:s,a=zg(i)?s:i,l=o.filters.map(c=>cv(c,a));return ke.create(l,"or")}(t,e),ef(n)}function DT(t,e){if(Ka(e))return oC(e,t.getFilters());{const n=e.filters.map(r=>cv(t,r));return ke.create(n,"or")}}function ef(t){if(se(t instanceof Te||t instanceof ke),t instanceof Te)return t;const e=t.getFilters();if(e.length===1)return ef(e[0]);if(iC(t))return t;const n=e.map(i=>ef(i)),r=[];return n.forEach(i=>{i instanceof Te?r.push(i):i instanceof ke&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ke.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WB{constructor(){this._n=new dv}addToCollectionParentIndex(e,n){return this._n.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(Bn.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(Bn.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class dv{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ne(Ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ne(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd=new Uint8Array(0);class HB{constructor(e,n){this.databaseId=n,this.an=new dv,this.un=new Ss(r=>mo(r),(r,i)=>Fc(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.an.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.an.add(n)});const s={collectionId:r,parent:gn(i)};return NT(e).put(s)}return O.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[jP(n),""],!1,!0);return NT(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(xr(o.parent))}return r})}addFieldIndex(e,n){const r=nu(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Yo(e);return s.next(a=>{o.put(AT(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=nu(e),i=Yo(e),s=Jo(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=nu(e),r=Jo(e),i=Yo(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return O.forEach(this.cn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new xT(r).on();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=Jo(e);let i=!0;const s=new Map;return O.forEach(this.cn(n),o=>this.ln(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=ge();const a=[];return O.forEach(s,(l,c)=>{q("IndexedDbIndexManager",`Using index ${function(I){return`id=${I.indexId}|cg=${I.collectionGroup}|f=${I.fields.map(x=>`${x.fieldPath}:${x.kind}`).join(",")}`}(l)} to execute ${mo(n)}`);const d=function(I,x){const U=Fg(x);if(U===void 0)return null;for(const B of Yh(I,U.fieldPath))switch(B.op){case"array-contains-any":return B.value.arrayValue.values||[];case"array-contains":return[B.value]}return null}(c,l),h=function(I,x){const U=new Map;for(const B of Ms(x))for(const g of Yh(I,B.fieldPath))switch(g.op){case"==":case"in":U.set(B.fieldPath.canonicalString(),g.value);break;case"not-in":case"!=":return U.set(B.fieldPath.canonicalString(),g.value),Array.from(U.values())}return null}(c,l),p=function(I,x){const U=[];let B=!0;for(const g of Ms(x)){const y=g.kind===0?dT(I,g.fieldPath,I.startAt):hT(I,g.fieldPath,I.startAt);U.push(y.value),B&&(B=y.inclusive)}return new hs(U,B)}(c,l),_=function(I,x){const U=[];let B=!0;for(const g of Ms(x)){const y=g.kind===0?hT(I,g.fieldPath,I.endAt):dT(I,g.fieldPath,I.endAt);U.push(y.value),B&&(B=y.inclusive)}return new hs(U,B)}(c,l),E=this.hn(l,c,p),T=this.hn(l,c,_),C=this.Pn(l,c,h),S=this.In(l.indexId,d,E,p.inclusive,T,_.inclusive,C);return O.forEach(S,v=>r.G(v,n.limit).next(I=>{I.forEach(x=>{const U=Y.fromSegments(x.documentKey);o.has(U)||(o=o.add(U),a.push(U))})}))}).next(()=>a)}return O.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=qB(ke.create(e.filters,"and")).map(r=>qg(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}In(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),c=l/(n!=null?n.length:1),d=[];for(let h=0;h<l;++h){const p=n?this.Tn(n[h/c]):Nd,_=this.En(e,p,r[h%c],i),E=this.dn(e,p,s[h%c],o),T=a.map(C=>this.En(e,p,C,!0));d.push(...this.createRange(_,E,T))}return d}En(e,n,r,i){const s=new js(e,Y.empty(),n,r);return i?s:s.Jt()}dn(e,n,r,i){const s=new js(e,Y.empty(),n,r);return i?s.Jt():s}ln(e,n){const r=new xT(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return O.forEach(i,s=>this.ln(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let c=new Ne(Ke.comparator),d=!1;for(const h of l.filters)for(const p of h.getFlattenedFilters())p.field.isKeyField()||(p.op==="array-contains"||p.op==="array-contains-any"?d=!0:c=c.add(p.field));for(const h of l.orderBy)h.field.isKeyField()||(c=c.add(h.field));return c.size+(d?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}An(e,n){const r=new tu;for(const i of Ms(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);Bs.bt.Pt(s,o)}return r.Wt()}Tn(e){const n=new tu;return Bs.bt.Pt(e,n.Ht(0)),n.Wt()}Rn(e,n){const r=new tu;return Bs.bt.Pt(po(this.databaseId,n),r.Ht(function(s){const o=Ms(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}Pn(e,n,r){if(r===null)return[];let i=[];i.push(new tu);let s=0;for(const o of Ms(e)){const a=r[s++];for(const l of i)if(this.Vn(n,o.fieldPath)&&mc(a))i=this.mn(i,o,a);else{const c=l.Ht(o.kind);Bs.bt.Pt(a,c)}}return this.fn(i)}hn(e,n,r){return this.Pn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Wt();return n}mn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new tu;l.seed(a.Wt()),Bs.bt.Pt(o,l.Ht(n.kind)),s.push(l)}return s}Vn(e,n){return!!e.filters.find(r=>r instanceof Te&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=nu(e),i=Yo(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return O.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(d,h){const p=h?new dc(h.sequenceNumber,new Bn(vo(h.readTime),new Y(xr(h.documentKey)),h.largestBatchId)):dc.empty(),_=d.fields.map(([E,T])=>new ih(Ke.fromServerFormat(E),T));return new Qh(d.indexId,d.collectionGroup,_,p)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:pe(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=nu(e),s=Yo(e);return this.gn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>O.forEach(a,l=>s.put(AT(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return O.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?O.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),O.forEach(a,l=>this.pn(e,i,l).next(c=>{const d=this.yn(s,l);return c.isEqual(d)?O.resolve():this.wn(e,s,l,c,d)}))))})}Sn(e,n,r,i){return Jo(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Rn(r,n.key),documentKey:n.key.path.toArray()})}bn(e,n,r,i){return Jo(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Rn(r,n.key),n.key.path.toArray()])}pn(e,n,r){const i=Jo(e);let s=new Ne(Di);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Rn(r,n)])},(o,a)=>{s=s.add(new js(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}yn(e,n){let r=new Ne(Di);const i=this.An(n,e);if(i==null)return r;const s=Fg(n);if(s!=null){const o=e.data.field(s.fieldPath);if(mc(o))for(const a of o.arrayValue.values||[])r=r.add(new js(n.indexId,e.key,this.Tn(a),i))}else r=r.add(new js(n.indexId,e.key,Nd,i));return r}wn(e,n,r,i,s){q("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,c,d,h,p){const _=l.getIterator(),E=c.getIterator();let T=Qo(_),C=Qo(E);for(;T||C;){let S=!1,v=!1;if(T&&C){const I=d(T,C);I<0?v=!0:I>0&&(S=!0)}else T!=null?v=!0:S=!0;S?(h(C),C=Qo(E)):v?(p(T),T=Qo(_)):(T=Qo(_),C=Qo(E))}}(i,s,Di,a=>{o.push(this.Sn(e,n,r,a))},a=>{o.push(this.bn(e,n,r,a))}),O.waitFor(o)}gn(e){let n=1;return Yo(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Di(o,a)).filter((o,a,l)=>!a||Di(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Di(o,e),l=Di(o,n);if(a===0)i[0]=e.Jt();else if(a>0&&l<0)i.push(o),i.push(o.Jt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Dn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Nd,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Nd,[]];s.push(IDBKeyRange.bound(a,l))}return s}Dn(e,n){return Di(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(OT)}getMinOffset(e,n){return O.mapArray(this.cn(n),r=>this.ln(e,r).next(i=>i||te())).next(OT)}}function NT(t){return Vt(t,"collectionParents")}function Jo(t){return Vt(t,"indexEntries")}function nu(t){return Vt(t,"indexConfiguration")}function Yo(t){return Vt(t,"indexState")}function OT(t){se(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Yy(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Bn(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class In{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new In(e,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.J({range:o},(d,h,p)=>(a++,p.delete()));s.push(l.next(()=>{se(a===1)}));const c=[];for(const d of n.mutations){const h=KP(e,d.key.path,n.batchId);s.push(i.delete(h)),c.push(d.key)}return O.waitFor(s).next(()=>c)}function tf(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw te();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In.DEFAULT_COLLECTION_PERCENTILE=10,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,In.DEFAULT=new In(41943040,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),In.DISABLED=new In(-1,0,0);class Qf{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Cn={}}static lt(e,n,r,i){se(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Qf(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ni(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=ia(e),o=Ni(e);return o.add({}).next(a=>{se(typeof a=="number");const l=new iv(a,n,r,i),c=function(_,E,T){const C=T.baseMutations.map(v=>yc(_.ct,v)),S=T.mutations.map(v=>yc(_.ct,v));return{userId:E,batchId:T.batchId,localWriteTimeMs:T.localWriteTime.toMillis(),baseMutations:C,mutations:S}}(this.serializer,this.userId,l),d=[];let h=new Ne((p,_)=>pe(p.canonicalString(),_.canonicalString()));for(const p of i){const _=KP(this.userId,p.key.path,a);h=h.add(p.key.path.popLast()),d.push(o.put(c)),d.push(s.put(_,OU))}return h.forEach(p=>{d.push(this.indexManager.addToCollectionParentIndex(e,p))}),e.addOnCommittedListener(()=>{this.Cn[a]=l.keys()}),O.waitFor(d).next(()=>l)})}lookupMutationBatch(e,n){return Ni(e).get(n).next(r=>r?(se(r.userId===this.userId),Us(this.serializer,r)):null)}vn(e,n){return this.Cn[n]?O.resolve(this.Cn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Cn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Ni(e).J({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(se(a.batchId>=r),s=Us(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Ni(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ni(e).U("userMutationsIndex",n).next(r=>r.map(i=>Us(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=sh(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return ia(e).J({range:i},(o,a,l)=>{const[c,d,h]=o,p=xr(d);if(c===this.userId&&n.path.isEqual(p))return Ni(e).get(h).next(_=>{if(!_)throw te();se(_.userId===this.userId),s.push(Us(this.serializer,_))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ne(pe);const i=[];return n.forEach(s=>{const o=sh(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=ia(e).J({range:a},(c,d,h)=>{const[p,_,E]=c,T=xr(_);p===this.userId&&s.path.isEqual(T)?r=r.add(E):h.done()});i.push(l)}),O.waitFor(i).next(()=>this.Fn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=sh(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Ne(pe);return ia(e).J({range:o},(l,c,d)=>{const[h,p,_]=l,E=xr(p);h===this.userId&&r.isPrefixOf(E)?E.length===i&&(a=a.add(_)):d.done()}).next(()=>this.Fn(e,a))}Fn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Ni(e).get(s).next(o=>{if(o===null)throw te();se(o.userId===this.userId),r.push(Us(this.serializer,o))}))}),O.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return GC(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Mn(n.batchId)}),O.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return O.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return ia(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=xr(s[1]);i.push(l)}else a.done()}).next(()=>{se(i.length===0)})})}containsKey(e,n){return KC(e,this.userId,n)}xn(e){return QC(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function KC(t,e,n){const r=sh(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return ia(t).J({range:s,H:!0},(a,l,c)=>{const[d,h,p]=a;d===e&&h===i&&(o=!0),c.done()}).next(()=>o)}function Ni(t){return Vt(t,"mutations")}function ia(t){return Vt(t,"documentMutations")}function QC(t){return Vt(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new wo(0)}static Ln(){return new wo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GB{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Bn(e).next(n=>{const r=new wo(n.highestTargetId);return n.highestTargetId=r.next(),this.kn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(n=>ae.fromTimestamp(new Je(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.kn(e,i)))}addTargetData(e,n){return this.qn(e,n).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.Qn(n,r),this.kn(e,r))))}updateTargetData(e,n){return this.qn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Xo(e).delete(n.targetId)).next(()=>this.Bn(e)).next(r=>(se(r.targetCount>0),r.targetCount-=1,this.kn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Xo(e).J((o,a)=>{const l=_u(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>O.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Xo(e).J((r,i)=>{const s=_u(i);n(s)})}Bn(e){return VT(e).get("targetGlobalKey").next(n=>(se(n!==null),n))}kn(e,n){return VT(e).put("targetGlobalKey",n)}qn(e,n){return Xo(e).put(qC(this.serializer,n))}Qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=mo(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Xo(e).J({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const c=_u(a);Fc(n,c.target)&&(s=c,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=ji(e);return n.forEach(o=>{const a=gn(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),O.waitFor(i)}removeMatchingKeys(e,n,r){const i=ji(e);return O.forEach(n,s=>{const o=gn(s.path);return O.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=ji(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=ji(e);let s=ge();return i.J({range:r,H:!0},(o,a,l)=>{const c=xr(o[1]),d=new Y(c);s=s.add(d)}).next(()=>s)}containsKey(e,n){const r=gn(n.path),i=IDBKeyRange.bound([r],[jP(r)],!1,!0);let s=0;return ji(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],l,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return Xo(e).get(n).next(r=>r?_u(r):null)}}function Xo(t){return Vt(t,"targets")}function VT(t){return Vt(t,"targetGlobal")}function ji(t){return Vt(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT([t,e],[n,r]){const i=pe(t,n);return i===0?pe(e,r):i}class KB{constructor(e){this.Kn=e,this.buffer=new Ne(MT),this.$n=0}Un(){return++this.$n}Wn(e){const n=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();MT(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class QB{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){q("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ts(n)?q("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Is(n)}await this.zn(3e5)})}}class JB{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.Hn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(Rn.oe);const r=new KB(n);return this.jn.forEachTarget(e,i=>r.Wn(i.sequenceNumber)).next(()=>this.jn.Jn(e,i=>r.Wn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(LT)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),LT):this.Yn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,n){let r,i,s,o,a,l,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(c=Date.now(),ea()<=ve.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${h} documents in `+(c-l)+`ms
Total Duration: ${c-d}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function YB(t,e){return new JB(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XB{constructor(e,n){this.db=e,this.garbageCollector=YB(this,n)}Hn(e){const n=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Zn(e){let n=0;return this.Jn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Jn(e,n){return this.Xn(e,(r,i)=>n(i))}addReference(e,n,r){return Od(e,r)}removeReference(e,n,r){return Od(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Od(e,n)}er(e,n){return function(i,s){let o=!1;return QC(i).Y(a=>KC(i,a,s).next(l=>(l&&(o=!0),O.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Xn(e,(o,a)=>{if(a<=n){const l=this.er(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,ae.min()),ji(e).delete(function(h){return[0,gn(h.path)]}(o))))});i.push(l)}}).next(()=>O.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Od(e,n)}Xn(e,n){const r=ji(e);let i,s=Rn.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:c})=>{o===0?(s!==Rn.oe&&n(new Y(xr(i)),s),s=c,i=l):s=Rn.oe}).next(()=>{s!==Rn.oe&&n(new Y(xr(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Od(t,e){return ji(t).put(function(r,i){return{targetId:0,path:gn(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(){this.changes=new Ss(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZB{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Ns(e).put(r)}removeEntry(e,n,r){return Ns(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Zh(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.tr(e,r)))}getEntry(e,n){let r=je.newInvalidDocument(n);return Ns(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ru(n))},(i,s)=>{r=this.nr(n,s)}).next(()=>r)}rr(e,n){let r={size:0,document:je.newInvalidDocument(n)};return Ns(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ru(n))},(i,s)=>{r={document:this.nr(n,s),size:tf(s)}}).next(()=>r)}getEntries(e,n){let r=Pn();return this.ir(e,n,(i,s)=>{const o=this.nr(i,s);r=r.insert(i,o)}).next(()=>r)}sr(e,n){let r=Pn(),i=new Me(Y.comparator);return this.ir(e,n,(s,o)=>{const a=this.nr(s,o);r=r.insert(s,a),i=i.insert(s,tf(o))}).next(()=>({documents:r,_r:i}))}ir(e,n,r){if(n.isEmpty())return O.resolve();let i=new Ne(BT);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(ru(i.first()),ru(i.last())),o=i.getIterator();let a=o.getNext();return Ns(e).J({index:"documentKeyIndex",range:s},(l,c,d)=>{const h=Y.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&BT(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?d.$(ru(a)):d.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),Zh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ns(e).U(IDBKeyRange.bound(a,l,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let d=Pn();for(const h of c){const p=this.nr(Y.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);p.isFoundDocument()&&(Bc(n,p)||i.has(p.key))&&(d=d.insert(p.key,p))}return d})}getAllFromCollectionGroup(e,n,r,i){let s=Pn();const o=UT(n,r),a=UT(n,Bn.max());return Ns(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,c,d)=>{const h=this.nr(Y.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(h.key,h),s.size===i&&d.done()}).next(()=>s)}newChangeBuffer(e){return new e4(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return FT(e).get("remoteDocumentGlobalKey").next(n=>(se(!!n),n))}tr(e,n){return FT(e).put("remoteDocumentGlobalKey",n)}nr(e,n){if(n){const r=FB(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(ae.min())))return r}return je.newInvalidDocument(e)}}function YC(t){return new ZB(t)}class e4 extends JC{constructor(e,n){super(),this.ar=e,this.trackRemovals=n,this.ur=new Ss(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new Ne((s,o)=>pe(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ur.get(s);if(n.push(this.ar.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=ST(this.ar.serializer,o);i=i.add(s.path.popLast());const c=tf(l);r+=c-a.size,n.push(this.ar.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=ST(this.ar.serializer,o.convertToNoDocument(ae.min()));n.push(this.ar.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.ar.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.ar.updateMetadata(e,r)),O.waitFor(n)}getFromCache(e,n){return this.ar.rr(e,n).next(r=>(this.ur.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.ar.sr(e,n).next(({documents:r,_r:i})=>(i.forEach((s,o)=>{this.ur.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function FT(t){return Vt(t,"remoteDocumentGlobal")}function Ns(t){return Vt(t,"remoteDocumentsV14")}function ru(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function UT(t,e){const n=e.documentKey.path.toArray();return[t,Zh(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function BT(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=pe(n[s],r[s]),i)return i;return i=pe(n.length,r.length),i||(i=pe(n[n.length-2],r[r.length-2]),i||pe(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ou(r.mutation,i,An.empty(),Je.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ge()){const i=Dr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=mu();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Dr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ge()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Pn();const o=Nu(),a=function(){return Nu()}();return n.forEach((l,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof vi)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Ou(d.mutation,c,d.mutation.getFieldMask(),Je.now())):o.set(c.key,An.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var h;return a.set(c,new t4(d,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Nu();let i=new Me((o,a)=>o-a),s=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let d=r.get(l)||An.empty();d=a.applyToLocalView(c,d),r.set(l,d);const h=(i.get(a.batchId)||ge()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,d=l.value,h=gC();d.forEach(p=>{if(!s.has(p)){const _=SC(n.get(p),r.get(p));_!==null&&h.set(p,_),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):tv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(Dr());let a=-1,l=s;return o.next(c=>O.forEach(c,(d,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(d)?O.resolve():this.remoteDocumentCache.getEntry(e,d).next(p=>{l=l.insert(d,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,ge())).next(d=>({batchId:a,changes:mC(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let i=mu();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=mu();return this.indexManager.getCollectionParents(e,s).next(a=>O.forEach(a,l=>{const c=function(h,p){return new yi(p,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((h,p)=>{o=o.insert(h,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,je.newInvalidDocument(d)))});let a=mu();return o.forEach((l,c)=>{const d=s.get(l);d!==void 0&&Ou(d.mutation,c,An.empty(),Je.now()),Bc(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return O.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:gt(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:uv(i.bundledQuery),readTime:gt(i.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{constructor(){this.overlays=new Me(Y.comparator),this.hr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Dr();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=Dr(),s=n.length+1,o=new Y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Me((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Dr(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=Dr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return O.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ov(n,r));let s=this.hr.get(n);s===void 0&&(s=ge(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(){this.Pr=new Ne(kt.Ir),this.Tr=new Ne(kt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new kt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new kt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new Y(new Ie([])),r=new kt(n,e),i=new kt(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new Y(new Ie([])),r=new kt(n,e),i=new kt(n,e+1);let s=ge();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new kt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class kt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return Y.comparator(e.key,n.key)||pe(e.pr,n.pr)}static Er(e,n){return pe(e.pr,n.pr)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Ne(kt.Ir)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new iv(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new kt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new kt(n,0),i=new kt(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ne(pe);return n.forEach(i=>{const s=new kt(i,0),o=new kt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),O.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Y.isDocumentKey(s)||(s=s.child(""));const o=new kt(new Y(s),0);let a=new Ne(pe);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.pr)),!0)},o),O.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){se(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return O.forEach(n.mutations,i=>{const s=new kt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new kt(n,0),i=this.wr.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{constructor(e){this.vr=e,this.docs=function(){return new Me(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():je.newInvalidDocument(n))}getEntries(e,n){let r=Pn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():je.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Pn();const o=n.path,a=new Y(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:d}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Yy($P(d),r)<=0||(i.has(d.key)||Bc(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){te()}Fr(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new o4(this)}getSize(e){return O.resolve(this.size)}}class o4 extends JC{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a4{constructor(e){this.persistence=e,this.Mr=new Ss(n=>mo(n),Fc),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.Or=0,this.Nr=new hv,this.targetCount=0,this.Lr=wo.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),O.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new wo(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.qn(n),O.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e,n){this.Br={},this.overlays={},this.kr=new Rn(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new a4(this),this.indexManager=new WB,this.remoteDocumentCache=function(i){return new s4(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new $C(n),this.$r=new n4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new r4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new i4(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new l4(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return O.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class l4 extends WP{constructor(e){super(),this.currentSequenceNumber=e}}class Jf{constructor(e){this.persistence=e,this.zr=new hv,this.jr=null}static Hr(e){return new Jf(e)}get Jr(){if(this.jr)return this.jr;throw te()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),O.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Jr,r=>{const i=Y.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,ae.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return O.or([()=>O.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u4{constructor(e){this.serializer=e}O(e,n,r,i){const s=new qf("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",tT,{unique:!0}),l.createObjectStore("documentMutations")}(e),jT(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=O.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),jT(e)),o=o.next(()=>function(l){const c=l.store("targetGlobal"),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ae.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",d)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,c){return c.store("mutations").U().next(d=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",tT,{unique:!0});const h=c.store("mutations"),p=d.map(_=>h.put(_));return O.waitFor(p)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Xr(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ei(s)))),r<7&&i>=7&&(o=o.next(()=>this.ti(s))),r<8&&i>=8&&(o=o.next(()=>this.ni(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ri(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const c=l.createObjectStore("documentOverlays",{keyPath:HU});c.createIndex("collectionPathOverlayIndex",GU,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",KU,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const c=l.createObjectStore("remoteDocumentsV14",{keyPath:LU});c.createIndex("documentKeyIndex",VU),c.createIndex("collectionGroupIndex",MU)}(e)).next(()=>this.ii(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:zU}).createIndex("sequenceNumberIndex",$U,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:qU}).createIndex("documentKeyIndex",WU,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),o}ei(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=tf(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Xr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>O.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>O.forEach(a,l=>{se(l.userId===s.userId);const c=Us(this.serializer,l);return GC(e,s.userId,c).next(()=>{})}))}))}ti(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const l=new Ie(o),c=function(h){return[0,gn(h)]}(l);s.push(n.get(c).next(d=>d?O.resolve():(h=>n.put({targetId:0,path:gn(h),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>O.waitFor(s))})}ni(e,n){e.createObjectStore("collectionParents",{keyPath:jU});const r=n.store("collectionParents"),i=new dv,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:gn(l)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const l=new Ie(o);return s(l.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,l],c)=>{const d=xr(a);return s(d.popLast())}))}ri(e){const n=e.store("targets");return n.J((r,i)=>{const s=_u(i),o=qC(this.serializer,s);return n.put(o)})}ii(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(h){return h.document?new Y(Ie.fromString(h.document.name).popFirst(5)):h.noDocument?Y.fromSegments(h.noDocument.path):h.unknownDocument?Y.fromSegments(h.unknownDocument.path):te()}(o).path.toArray(),c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>O.waitFor(i))}si(e,n){const r=n.store("mutations"),i=YC(this.serializer),s=new ZC(Jf.Hr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(l=>{var c;let d=(c=a.get(l.userId))!==null&&c!==void 0?c:ge();Us(this.serializer,l).keys().forEach(h=>d=d.add(h)),a.set(l.userId,d)}),O.forEach(a,(l,c)=>{const d=new xt(c),h=Kf.lt(this.serializer,d),p=s.getIndexManager(d),_=Qf.lt(d,this.serializer,p,s.referenceDelegate);return new XC(i,_,h,p).recalculateAndSaveOverlaysForDocumentKeys(new Ug(n,Rn.oe),l).next()})})}}function jT(t){t.createObjectStore("targetDocuments",{keyPath:UU}).createIndex("documentTargetsIndex",BU,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",FU,{unique:!0}),t.createObjectStore("targetGlobal")}const vm="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class fv{constructor(e,n,r,i,s,o,a,l,c,d,h=16){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.oi=s,this.window=o,this.document=a,this._i=c,this.ai=d,this.ui=h,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=p=>Promise.resolve(),!fv.D())throw new $(V.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new XB(this,i),this.Ti=n+"main",this.serializer=new $C(l),this.Ei=new Lr(this.Ti,this.ui,new u4(this.serializer)),this.Qr=new GB(this.referenceDelegate,this.serializer),this.remoteDocumentCache=YC(this.serializer),this.$r=new UB,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,d===!1&&mt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new $(V.FAILED_PRECONDITION,vm);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new Rn(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ld(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(n=>{n||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(n=>this.isPrimary&&!n?this.yi(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(Ts(e))return q("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return q("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return iu(e).get("owner").next(n=>O.resolve(this.Si(n)))}bi(e){return Ld(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Vt(n,"clientMetadata");return r.U().next(i=>{const s=this.vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return O.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.di)for(const n of e)this.di.removeItem(this.Fi(n.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?O.resolve(!0):iu(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)){if(this.Si(n)&&this.networkEnabled)return!0;if(!this.Si(n)){if(!n.allowTabSynchronization)throw new $(V.FAILED_PRECONDITION,vm);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ld(e).U().next(r=>this.vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&q("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Ug(e,Rn.oe);return this.yi(n).next(()=>this.bi(n))}),this.Ei.close(),this.Li()}vi(e,n){return e.filter(r=>this.Ci(r.updateTimeMs,n)&&!this.Mi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>Ld(e).U().next(n=>this.vi(n,18e5).map(r=>r.clientId)))}get started(){return this.qr}getMutationQueue(e,n){return Qf.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new HB(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Kf.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,n,r){q("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===16?JU:l===15?XP:l===14?YP:l===13?JP:l===12?QU:l===11?QP:void te()}(this.ui);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new Ug(a,this.kr?this.kr.next():Rn.oe),n==="readwrite-primary"?this.gi(o).next(l=>!!l||this.pi(o)).next(l=>{if(!l)throw mt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new $(V.FAILED_PRECONDITION,qP);return r(o)}).next(l=>this.wi(o).next(()=>l)):this.ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}ki(e){return iu(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)&&!this.Si(n)&&!(this.ai||this.allowTabSynchronization&&n.allowTabSynchronization))throw new $(V.FAILED_PRECONDITION,vm)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return iu(e).put("owner",n)}static D(){return Lr.D()}yi(e){const n=iu(e);return n.get("owner").next(r=>this.Si(r)?(q("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):O.resolve())}Ci(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(mt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;vA()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var n;try{const r=((n=this.di)===null||n===void 0?void 0:n.getItem(this.Fi(e)))!==null;return q("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return mt("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){mt("Failed to set zombie client id.",e)}}Li(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function iu(t){return Vt(t,"owner")}function Ld(t){return Vt(t,"clientMetadata")}function pv(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ge(),i=ge();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new mv(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return vA()?8:HP(Ye())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new c4;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(ea()<=ve.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",ta(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),O.resolve()):(ea()<=ve.DEBUG&&q("QueryEngine","Query:",ta(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(ea()<=ve.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",ta(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_n(n))):O.resolve())}ji(e,n){if(fT(n))return O.resolve(null);let r=_n(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Xh(n,null,"F"),r=_n(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ge(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(e,Xh(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,r,i){return fT(n)||i.isEqual(ae.min())?O.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?O.resolve(null):(ea()<=ve.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ta(n)),this.es(e,o,n,zP(i,-1)).next(a=>a))})}Zi(e,n){let r=new Ne(fC(e));return n.forEach((i,s)=>{Bc(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return ea()<=ve.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",ta(n)),this.zi.getDocumentsMatchingQuery(e,n,Bn.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d4{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Me(pe),this.rs=new Ss(s=>mo(s),Fc),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new XC(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function t1(t,e,n,r){return new d4(t,e,n,r)}async function n1(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ge();for(const c of i){o.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function h4(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,d){const h=c.batch,p=h.keys();let _=O.resolve();return p.forEach(E=>{_=_.next(()=>d.getEntry(l,E)).next(T=>{const C=c.docVersions.get(E);se(C!==null),T.version.compareTo(C)<0&&(h.applyToRemoteDocument(T,c),T.isValidDocument()&&(T.setReadTime(c.commitVersion),d.addEntry(T)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ge();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function r1(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function f4(t,e){const n=X(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((d,h)=>{const p=i.get(h);if(!p)return;a.push(n.Qr.removeMatchingKeys(s,d.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,d.addedDocuments,h)));let _=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?_=_.withResumeToken(Ct.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),i=i.insert(h,_),function(T,C,S){return T.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(p,_,d)&&a.push(n.Qr.updateTargetData(s,_))});let l=Pn(),c=ge();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(i1(s,o,e.documentUpdates).next(d=>{l=d.cs,c=d.ls})),!r.isEqual(ae.min())){const d=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return O.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.ns=i,s))}function i1(t,e,n){let r=ge(),i=ge();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Pn();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ae.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:i}})}function p4(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Xa(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new ti(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Za(t,e,n){const r=X(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ts(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function nf(t,e,n){const r=X(t);let i=ae.min(),s=ge();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,d){const h=X(l),p=h.rs.get(d);return p!==void 0?O.resolve(h.ns.get(p)):h.Qr.getTargetData(c,d)}(r,o,_n(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:ae.min(),n?s:ge())).next(a=>(a1(r,hC(e),a),{documents:a,hs:s})))}function s1(t,e){const n=X(t),r=X(n.Qr),i=n.ns.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function o1(t,e){const n=X(t),r=n.ss.get(e)||ae.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.os.getAllFromCollectionGroup(i,e,zP(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(a1(n,e,i),i))}function a1(t,e,n){let r=t.ss.get(e)||ae.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}async function m4(t,e,n,r){const i=X(t);let s=ge(),o=Pn();for(const c of n){const d=e.Ps(c.metadata.name);c.document&&(s=s.add(d));const h=e.Is(c);h.setReadTime(e.Ts(c.metadata.readTime)),o=o.insert(d,h)}const a=i.os.newChangeBuffer({trackRemovals:!0}),l=await Xa(i,function(d){return _n(ml(Ie.fromString(`__bundle__/docs/${d}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>i1(c,a,o).next(d=>(a.apply(c),d)).next(d=>i.Qr.removeMatchingKeysForTargetId(c,l.targetId).next(()=>i.Qr.addMatchingKeys(c,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,d.cs,d.ls)).next(()=>d.cs)))}async function g4(t,e,n=ge()){const r=await Xa(t,_n(uv(e.bundledQuery))),i=X(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=gt(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.$r.saveNamedQuery(s,e);const a=r.withResumeToken(Ct.EMPTY_BYTE_STRING,o);return i.ns=i.ns.insert(a.targetId,a),i.Qr.updateTargetData(s,a).next(()=>i.Qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.$r.saveNamedQuery(s,e))})}function zT(t,e){return`firestore_clients_${t}_${e}`}function $T(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function wm(t,e){return`firestore_targets_${t}_${e}`}class rf{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Es(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new $(i.error.code,i.error.message))),o?new rf(e,n,i.state,s):(mt("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Lu{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Es(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new $(r.error.code,r.error.message))),s?new Lu(e,r.state,i):(mt("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class sf{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Es(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=nv();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=GP(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new sf(e,s):(mt("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class gv{constructor(e,n){this.clientId=e,this.onlineState=n}static Es(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new gv(n.clientId,n.onlineState):(mt("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Zg{constructor(){this.activeTargetIds=nv()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Em{constructor(e,n,r,i,s){this.window=e,this.oi=n,this.persistenceKey=r,this.Vs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new Me(pe),this.started=!1,this.ys=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ws=zT(this.persistenceKey,this.Vs),this.Ss=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new Zg),this.bs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Fs=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Vs)continue;const i=this.getItem(zT(this.persistenceKey,r));if(i){const s=sf.Es(r,i);s&&(this.ps=this.ps.insert(s.clientId,s))}}this.Ms();const n=this.storage.getItem(this.vs);if(n){const r=this.xs(n);r&&this.Os(r)}for(const r of this.ys)this.gs(r);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let n=!1;return this.ps.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ls(e,"pending")}updateMutationState(e,n,r){this.Ls(e,n,r),this.Bs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(wm(this.persistenceKey,e));if(r){const i=Lu.Es(e,r);i&&(n=i.state)}}return this.ks.As(e),this.Ms(),n}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(wm(this.persistenceKey,e))}updateQueryState(e,n,r){this.qs(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Bs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return q("SharedClientState","READ",e,n),n}setItem(e,n){q("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){q("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){const n=e;if(n.storageArea===this.storage){if(q("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ws)return void mt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.bs.test(n.key)){if(n.newValue==null){const r=this.$s(n.key);return this.Us(r,null)}{const r=this.Ws(n.key,n.newValue);if(r)return this.Us(r.clientId,r)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const r=this.Gs(n.key,n.newValue);if(r)return this.zs(r)}}else if(this.Cs.test(n.key)){if(n.newValue!==null){const r=this.js(n.key,n.newValue);if(r)return this.Hs(r)}}else if(n.key===this.vs){if(n.newValue!==null){const r=this.xs(n.newValue);if(r)return this.Os(r)}}else if(n.key===this.Ss){const r=function(s){let o=Rn.oe;if(s!=null)try{const a=JSON.parse(s);se(typeof a=="number"),o=a}catch(a){mt("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Rn.oe&&this.sequenceNumberHandler(r)}else if(n.key===this.Fs){const r=this.Js(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Ys(i)))}}}else this.ys.push(n)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Ls(e,n,r){const i=new rf(this.currentUser,e,n,r),s=$T(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ds())}Bs(e){const n=$T(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Qs(e){const n={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(n))}qs(e,n,r){const i=wm(this.persistenceKey,e),s=new Lu(e,n,r);this.setItem(i,s.ds())}Ks(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Fs,n)}$s(e){const n=this.bs.exec(e);return n?n[1]:null}Ws(e,n){const r=this.$s(e);return sf.Es(r,n)}Gs(e,n){const r=this.Ds.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return rf.Es(new xt(s),i,n)}js(e,n){const r=this.Cs.exec(e),i=Number(r[1]);return Lu.Es(i,n)}xs(e){return gv.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);q("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,n){const r=n?this.ps.insert(e,n):this.ps.remove(e),i=this.Ns(this.ps),s=this.Ns(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.eo(o,a).then(()=>{this.ps=r})}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let n=nv();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class l1{constructor(){this.no=new Zg,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Zg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _4{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vd=null;function Im(){return Vd===null?Vd=function(){return 268435456+Math.round(2147483648*Math.random())}():Vd++,"0x"+Vd.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v4{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn="WebChannelConnection";class w4 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=Im(),l=this.vo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,l,c,i).then(d=>(q("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw yr("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",l,"request:",i),d})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+pl}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=y4[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Im();return new Promise((o,a)=>{const l=new NP;l.setWithCredentials(!0),l.listenOnce(LP.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case rh.NO_ERROR:const d=l.getResponseJson();q(tn,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case rh.TIMEOUT:q(tn,`RPC '${e}' ${s} timed out`),a(new $(V.DEADLINE_EXCEEDED,"Request time out"));break;case rh.HTTP_ERROR:const h=l.getStatus();if(q(tn,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const _=p==null?void 0:p.error;if(_&&_.status&&_.message){const E=function(C){const S=C.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(S)>=0?S:V.UNKNOWN}(_.status);a(new $(E,_.message))}else a(new $(V.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new $(V.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{q(tn,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);q(tn,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Im(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=FP(),a=MP(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new OP({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=s.join("");q(tn,`Creating RPC '${e}' stream ${i}: ${d}`,l);const h=o.createWebChannel(d,l);let p=!1,_=!1;const E=new v4({lo:C=>{_?q(tn,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(p||(q(tn,`Opening RPC '${e}' stream ${i} transport.`),h.open(),p=!0),q(tn,`RPC '${e}' stream ${i} sending:`,C),h.send(C))},ho:()=>h.close()}),T=(C,S,v)=>{C.listen(S,I=>{try{v(I)}catch(x){setTimeout(()=>{throw x},0)}})};return T(h,pu.EventType.OPEN,()=>{_||(q(tn,`RPC '${e}' stream ${i} transport opened.`),E.mo())}),T(h,pu.EventType.CLOSE,()=>{_||(_=!0,q(tn,`RPC '${e}' stream ${i} transport closed`),E.po())}),T(h,pu.EventType.ERROR,C=>{_||(_=!0,yr(tn,`RPC '${e}' stream ${i} transport errored:`,C),E.po(new $(V.UNAVAILABLE,"The operation could not be completed")))}),T(h,pu.EventType.MESSAGE,C=>{var S;if(!_){const v=C.data[0];se(!!v);const I=v,x=I.error||((S=I[0])===null||S===void 0?void 0:S.error);if(x){q(tn,`RPC '${e}' stream ${i} received error:`,x);const U=x.status;let B=function(R){const A=yt[R];if(A!==void 0)return PC(A)}(U),g=x.message;B===void 0&&(B=V.INTERNAL,g="Unknown error status: "+U+" with message "+x.message),_=!0,E.po(new $(B,g)),h.close()}else q(tn,`RPC '${e}' stream ${i} received:`,v),E.yo(v)}}),T(a,VP.STAT_EVENT,C=>{C.stat===Mg.PROXY?q(tn,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===Mg.NOPROXY&&q(tn,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.fo()},0),E}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(){return typeof window<"u"?window:null}function ch(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(t){return new CB(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new _v(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(mt(n.toString()),mt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new $(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class E4 extends c1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=xB(this.serializer,e),r=function(s){if(!("targetChange"in s))return ae.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ae.min():o.readTime?gt(o.readTime):ae.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Kg(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Jh(l)?{documents:MC(s,l)}:{query:FC(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=xC(s,o.resumeToken);const c=Hg(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ae.min())>0){a.readTime=Ya(s,o.snapshotVersion.toTimestamp());const c=Hg(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=NB(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Kg(this.serializer),n.removeTarget=e,this.i_(n)}}class I4 extends c1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=DB(e.writeResults,e.commitTime),r=gt(e.commitTime);return this.listener.A_(r,n)}return se(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Kg(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>yc(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T4 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,Gg(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(V.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,Gg(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(V.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class S4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(mt(n),this.y_=!1):q("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R4{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Rs(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=X(l);c.M_.add(4),await yl(c),c.N_.set("Unknown"),c.M_.delete(4),await Wc(c)}(this))})}),this.N_=new S4(r,i)}}async function Wc(t){if(Rs(t))for(const e of t.x_)await e(!0)}async function yl(t){for(const e of t.x_)await e(!1)}function Yf(t,e){const n=X(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),wv(n)?vv(n):wl(n).Xo()&&yv(n,e))}function el(t,e){const n=X(t),r=wl(n);n.F_.delete(e),r.Xo()&&d1(n,e),n.F_.size===0&&(r.Xo()?r.n_():Rs(n)&&n.N_.set("Unknown"))}function yv(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}wl(t).P_(e)}function d1(t,e){t.L_.xe(e),wl(t).I_(e)}function vv(t){t.L_=new SB({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),wl(t).start(),t.N_.w_()}function wv(t){return Rs(t)&&!wl(t).Zo()&&t.F_.size>0}function Rs(t){return X(t).M_.size===0}function h1(t){t.L_=void 0}async function A4(t){t.N_.set("Online")}async function P4(t){t.F_.forEach((e,n)=>{yv(t,e)})}async function C4(t,e){h1(t),wv(t)?(t.N_.D_(e),vv(t)):t.N_.set("Unknown")}async function k4(t,e,n){if(t.N_.set("Online"),e instanceof bC&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await of(t,r)}else if(e instanceof uh?t.L_.Ke(e):e instanceof kC?t.L_.He(e):t.L_.We(e),!n.isEqual(ae.min()))try{const r=await r1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const d=s.F_.get(c);d&&s.F_.set(c,d.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const d=s.F_.get(l);if(!d)return;s.F_.set(l,d.withResumeToken(Ct.EMPTY_BYTE_STRING,d.snapshotVersion)),d1(s,l);const h=new ti(d.target,l,c,d.sequenceNumber);yv(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await of(t,r)}}async function of(t,e,n){if(!Ts(e))throw e;t.M_.add(1),await yl(t),t.N_.set("Offline"),n||(n=()=>r1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Wc(t)})}function f1(t,e){return e().catch(n=>of(t,n,e))}async function vl(t){const e=X(t),n=fs(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;b4(e);)try{const i=await p4(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,x4(e,i)}catch(i){await of(e,i)}p1(e)&&m1(e)}function b4(t){return Rs(t)&&t.v_.length<10}function x4(t,e){t.v_.push(e);const n=fs(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function p1(t){return Rs(t)&&!fs(t).Zo()&&t.v_.length>0}function m1(t){fs(t).start()}async function D4(t){fs(t).V_()}async function N4(t){const e=fs(t);for(const n of t.v_)e.d_(n.mutations)}async function O4(t,e,n){const r=t.v_.shift(),i=sv.from(r,e,n);await f1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await vl(t)}async function L4(t,e){e&&fs(t).E_&&await async function(r,i){if(function(o){return AC(o)&&o!==V.ABORTED}(i.code)){const s=r.v_.shift();fs(r).t_(),await f1(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await vl(r)}}(t,e),p1(t)&&m1(t)}async function WT(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=Rs(n);n.M_.add(3),await yl(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Wc(n)}async function e_(t,e){const n=X(t);e?(n.M_.delete(2),await Wc(n)):e||(n.M_.add(2),await yl(n),n.N_.set("Unknown"))}function wl(t){return t.B_||(t.B_=function(n,r,i){const s=X(n);return s.f_(),new E4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:A4.bind(null,t),To:P4.bind(null,t),Ao:C4.bind(null,t),h_:k4.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),wv(t)?vv(t):t.N_.set("Unknown")):(await t.B_.stop(),h1(t))})),t.B_}function fs(t){return t.k_||(t.k_=function(n,r,i){const s=X(n);return s.f_(),new I4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:D4.bind(null,t),Ao:L4.bind(null,t),R_:N4.bind(null,t),A_:O4.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await vl(t)):(await t.k_.stop(),t.v_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ot,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Ev(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function El(t,e){if(mt("AsyncQueue",`${e}: ${t}`),Ts(t))return new $(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=mu(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new ba(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ba)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ba;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(){this.q_=new Me(Y.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):te():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class tl{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new tl(e,n,ba.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V4{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class M4{constructor(){this.queries=new Ss(e=>dC(e),Uc),this.onlineState="Unknown",this.z_=new Set}}async function Iv(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new V4,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=El(o,`Initialization of query '${ta(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&Sv(n)}async function Tv(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function F4(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&Sv(n)}function U4(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function Sv(t){t.z_.forEach(e=>{e.next()})}var t_,GT;(GT=t_||(t_={})).J_="default",GT.Cache="cache";class Rv{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new tl(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=tl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==t_.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B4{constructor(e,n){this.ia=e,this.byteLength=n}sa(){return"metadata"in this.ia}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e){this.serializer=e}Ps(e){return Vr(this.serializer,e)}Is(e){return e.metadata.exists?VC(this.serializer,e.document,!1):je.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return gt(e)}}class j4{constructor(e,n,r){this.oa=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=g1(e)}_a(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.ia.namedQuery)this.queries.push(e.ia.namedQuery);else if(e.ia.documentMetadata){this.documents.push({metadata:e.ia.documentMetadata}),e.ia.documentMetadata.exists||++n;const r=Ie.fromString(e.ia.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ia.document&&(this.documents[this.documents.length-1].document=e.ia.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}aa(e){const n=new Map,r=new KT(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Ps(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||ge()).add(s);n.set(o,a)}}return n}async complete(){const e=await m4(this.localStore,new KT(this.serializer),this.documents,this.oa.id),n=this.aa(this.documents);for(const r of this.queries)await g4(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,ua:this.collectionGroups,ca:e}}}function g1(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e){this.key=e}}class y1{constructor(e){this.key=e}}class v1{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ge(),this.mutatedKeys=ge(),this.Ia=fC(e),this.Ta=new ba(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new HT,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,h)=>{const p=i.get(d),_=Bc(this.query,h)?h:null,E=!!p&&this.mutatedKeys.has(p.key),T=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let C=!1;p&&_?p.data.isEqual(_.data)?E!==T&&(r.track({type:3,doc:_}),C=!0):this.Ra(p,_)||(r.track({type:2,doc:_}),C=!0,(l&&this.Ia(_,l)>0||c&&this.Ia(_,c)<0)&&(a=!0)):!p&&_?(r.track({type:0,doc:_}),C=!0):p&&!_&&(r.track({type:1,doc:p}),C=!0,(l||c)&&(a=!0)),C&&(_?(o=o.add(_),s=T?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,h)=>function(_,E){const T=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return T(_)-T(E)}(d.type,h.type)||this.Ia(d.doc,h.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],l=this.Pa.size===0&&this.current&&!i?1:0,c=l!==this.ha;return this.ha=l,o.length!==0||c?{snapshot:new tl(this.query,e.Ta,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new HT,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ge(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new y1(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new _1(r))}),n}pa(e){this.la=e.hs,this.Pa=ge();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return tl.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class z4{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class $4{constructor(e){this.key=e,this.wa=!1}}class q4{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Ss(a=>dC(a),Uc),this.Da=new Map,this.Ca=new Set,this.va=new Me(Y.comparator),this.Fa=new Map,this.Ma=new hv,this.xa={},this.Oa=new Map,this.Na=wo.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function W4(t,e,n=!0){const r=Xf(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await w1(r,e,n,!0),i}async function H4(t,e){const n=Xf(t);await w1(n,e,!0,!1)}async function w1(t,e,n,r){const i=await Xa(t.localStore,_n(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await Av(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Yf(t.remoteStore,i),a}async function Av(t,e,n,r,i){t.Ba=(h,p,_)=>async function(T,C,S,v){let I=C.view.da(S);I.Xi&&(I=await nf(T.localStore,C.query,!1).then(({documents:g})=>C.view.da(g,I)));const x=v&&v.targetChanges.get(C.targetId),U=v&&v.targetMismatches.get(C.targetId)!=null,B=C.view.applyChanges(I,T.isPrimaryClient,x,U);return n_(T,C.targetId,B.fa),B.snapshot}(t,h,p,_);const s=await nf(t.localStore,e,!0),o=new v1(e,s.hs),a=o.da(s.documents),l=$c.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);n_(t,n,c.fa);const d=new z4(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function G4(t,e,n){const r=X(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!Uc(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Za(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&el(r.remoteStore,i.targetId),nl(r,i.targetId)}).catch(Is)):(nl(r,i.targetId),await Za(r.localStore,i.targetId,!0))}async function K4(t,e){const n=X(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),el(n.remoteStore,r.targetId))}async function Q4(t,e,n){const r=bv(t);try{const i=await function(o,a){const l=X(o),c=Je.now(),d=a.reduce((_,E)=>_.add(E.key),ge());let h,p;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let E=Pn(),T=ge();return l.os.getEntries(_,d).next(C=>{E=C,E.forEach((S,v)=>{v.isValidDocument()||(T=T.add(S))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,E)).next(C=>{h=C;const S=[];for(const v of a){const I=EB(v,h.get(v.key).overlayedDocument);I!=null&&S.push(new vi(v.key,I,nC(I.value.mapValue),Qe.exists(!0)))}return l.mutationQueue.addMutationBatch(_,c,S,a)}).next(C=>{p=C;const S=C.applyToLocalDocumentSet(h,T);return l.documentOverlayCache.saveOverlays(_,C.batchId,S)})}).then(()=>({batchId:p.batchId,changes:mC(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.xa[o.currentUser.toKey()];c||(c=new Me(pe)),c=c.insert(a,l),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await wi(r,i.changes),await vl(r.remoteStore)}catch(i){const s=El(i,"Failed to persist write");n.reject(s)}}async function E1(t,e){const n=X(t);try{const r=await f4(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?se(o.wa):i.removedDocuments.size>0&&(se(o.wa),o.wa=!1))}),await wi(n,r,e)}catch(r){await Is(r)}}function QT(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=X(o);l.onlineState=a;let c=!1;l.queries.forEach((d,h)=>{for(const p of h.U_)p.j_(a)&&(c=!0)}),c&&Sv(l)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function J4(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new Me(Y.comparator);o=o.insert(s,je.newNoDocument(s,ae.min()));const a=ge().add(s),l=new zc(ae.min(),new Map,new Me(pe),o,a);await E1(r,l),r.va=r.va.remove(s),r.Fa.delete(e),kv(r)}else await Za(r.localStore,e,!1).then(()=>nl(r,e,n)).catch(Is)}async function Y4(t,e){const n=X(t),r=e.batch.batchId;try{const i=await h4(n.localStore,e);Cv(n,r,null),Pv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await wi(n,i)}catch(i){await Is(i)}}async function X4(t,e,n){const r=X(t);try{const i=await function(o,a){const l=X(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(se(h!==null),d=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>l.localDocuments.getDocuments(c,d))})}(r.localStore,e);Cv(r,e,n),Pv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await wi(r,i)}catch(i){await Is(i)}}async function Z4(t,e){const n=X(t);Rs(n.remoteStore)||q("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=X(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Oa.get(r)||[];i.push(e),n.Oa.set(r,i)}catch(r){const i=El(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Pv(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function Cv(t,e,n){const r=X(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function nl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||I1(t,r)})}function I1(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(el(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),kv(t))}function n_(t,e,n){for(const r of n)r instanceof _1?(t.Ma.addReference(r.key,e),ej(t,r)):r instanceof y1?(q("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||I1(t,r.key)):te()}function ej(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(q("SyncEngine","New document in limbo: "+n),t.Ca.add(r),kv(t))}function kv(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new Y(Ie.fromString(e)),r=t.Na.next();t.Fa.set(r,new $4(n)),t.va=t.va.insert(n,r),Yf(t.remoteStore,new ti(_n(ml(n.path)),r,"TargetPurposeLimboResolution",Rn.oe))}}async function wi(t,e,n){const r=X(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,l)=>{o.push(r.Ba(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const d=c&&!c.fromCache;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(c){i.push(c);const d=mv.Ki(l.targetId,c);s.push(d)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(l,c){const d=X(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>O.forEach(c,p=>O.forEach(p.qi,_=>d.persistence.referenceDelegate.addReference(h,p.targetId,_)).next(()=>O.forEach(p.Qi,_=>d.persistence.referenceDelegate.removeReference(h,p.targetId,_)))))}catch(h){if(!Ts(h))throw h;q("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const p=h.targetId;if(!h.fromCache){const _=d.ns.get(p),E=_.snapshotVersion,T=_.withLastLimboFreeSnapshotVersion(E);d.ns=d.ns.insert(p,T)}}}(r.localStore,s))}async function tj(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await n1(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(l=>{l.reject(new $(V.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await wi(n,r.us)}}function nj(t,e){const n=X(t),r=n.Fa.get(e);if(r&&r.wa)return ge().add(r.key);{let i=ge();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}async function rj(t,e){const n=X(t),r=await nf(n.localStore,e.query,!0),i=e.view.pa(r);return n.isPrimaryClient&&n_(n,e.targetId,i.fa),i}async function ij(t,e){const n=X(t);return o1(n.localStore,e).then(r=>wi(n,r))}async function sj(t,e,n,r){const i=X(t),s=await function(a,l){const c=X(a),d=X(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",h=>d.vn(h,l).next(p=>p?c.localDocuments.getDocuments(h,p):O.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await vl(i.remoteStore):n==="acknowledged"||n==="rejected"?(Cv(i,e,r||null),Pv(i,e),function(a,l){X(X(a).mutationQueue).Mn(l)}(i.localStore,e)):te(),await wi(i,s)):q("SyncEngine","Cannot apply mutation batch with id: "+e)}async function oj(t,e){const n=X(t);if(Xf(n),bv(n),e===!0&&n.La!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await JT(n,r.toArray());n.La=!0,await e_(n.remoteStore,!0);for(const s of i)Yf(n.remoteStore,s)}else if(e===!1&&n.La!==!1){const r=[];let i=Promise.resolve();n.Da.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(nl(n,o),Za(n.localStore,o,!0))),el(n.remoteStore,o)}),await i,await JT(n,r),function(o){const a=X(o);a.Fa.forEach((l,c)=>{el(a.remoteStore,c)}),a.Ma.mr(),a.Fa=new Map,a.va=new Me(Y.comparator)}(n),n.La=!1,await e_(n.remoteStore,!1)}}async function JT(t,e,n){const r=X(t),i=[],s=[];for(const o of e){let a;const l=r.Da.get(o);if(l&&l.length!==0){a=await Xa(r.localStore,_n(l[0]));for(const c of l){const d=r.ba.get(c),h=await rj(r,d);h.snapshot&&s.push(h.snapshot)}}else{const c=await s1(r.localStore,o);a=await Xa(r.localStore,c),await Av(r,T1(c),o,!1,a.resumeToken)}i.push(a)}return r.Sa.h_(s),i}function T1(t){return cC(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function aj(t){return function(n){return X(X(n).persistence).Bi()}(X(t).localStore)}async function lj(t,e,n,r){const i=X(t);if(i.La)return void q("SyncEngine","Ignoring unexpected query state notification.");const s=i.Da.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await o1(i.localStore,hC(s[0])),a=zc.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Ct.EMPTY_BYTE_STRING);await wi(i,o,a);break}case"rejected":await Za(i.localStore,e,!0),nl(i,e,r);break;default:te()}}async function uj(t,e,n){const r=Xf(t);if(r.La){for(const i of e){if(r.Da.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){q("SyncEngine","Adding an already active target "+i);continue}const s=await s1(r.localStore,i),o=await Xa(r.localStore,s);await Av(r,T1(s),o.targetId,!1,o.resumeToken),Yf(r.remoteStore,o)}for(const i of n)r.Da.has(i)&&await Za(r.localStore,i,!1).then(()=>{el(r.remoteStore,i),nl(r,i)}).catch(Is)}}function Xf(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=E1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nj.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=J4.bind(null,e),e.Sa.h_=F4.bind(null,e.eventManager),e.Sa.ka=U4.bind(null,e.eventManager),e}function bv(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Y4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=X4.bind(null,e),e}function cj(t,e,n){const r=X(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(_,E){const T=X(_),C=gt(E.createTime);return T.persistence.runTransaction("hasNewerBundle","readonly",S=>T.$r.getBundleMetadata(S,E.id)).then(S=>!!S&&S.createTime.compareTo(C)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(_){return{taskState:"Success",documentsLoaded:_.totalDocuments,bytesLoaded:_.totalBytes,totalDocuments:_.totalDocuments,totalBytes:_.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(g1(l));const c=new j4(l,s.localStore,o.serializer);let d=await o.qa();for(;d;){const p=await c._a(d);p&&a._updateProgress(p),d=await o.qa()}const h=await c.complete();return await wi(s,h.ca,void 0),await function(_,E){const T=X(_);return T.persistence.runTransaction("Save bundle","readwrite",C=>T.$r.saveBundleMetadata(C,E))}(s.localStore,l),a._completeWith(h.progress),Promise.resolve(h.ua)}catch(l){return yr("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class r_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=qc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return t1(this.persistence,new e1,e.initialUser,this.serializer)}createPersistence(e){return new ZC(Jf.Hr,this.serializer)}createSharedClientState(e){return new l1}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class S1 extends r_{constructor(e,n,r){super(),this.Qa=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Qa.initialize(this,e),await bv(this.Qa.syncEngine),await vl(this.Qa.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return t1(this.persistence,new e1,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new QB(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new DU(n,this.persistence);return new xU(e.asyncQueue,r)}createPersistence(e){const n=pv(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new fv(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,u1(),ch(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new l1}}class dj extends S1{constructor(e,n){super(e,n,!1),this.Qa=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Qa.syncEngine;this.sharedClientState instanceof Em&&(this.sharedClientState.syncEngine={Zs:sj.bind(null,n),Xs:lj.bind(null,n),eo:uj.bind(null,n),Bi:aj.bind(null,n),Ys:ij.bind(null,n)},await this.sharedClientState.start()),await this.persistence.fi(async r=>{await oj(this.Qa.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=u1();if(!Em.D(n))throw new $(V.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=pv(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Em(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class xv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>QT(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=tj.bind(null,this.syncEngine),await e_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new M4}()}createDatastore(e){const n=qc(e.databaseInfo.databaseId),r=function(s){return new w4(s)}(e.databaseInfo);return function(s,o,a,l){return new T4(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new R4(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>QT(this.syncEngine,n,0),function(){return qT.D()?new qT:new _4}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,d){const h=new q4(i,s,o,a,l,c);return d&&(h.La=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=X(r);q("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await yl(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):mt("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hj{constructor(e,n){this.Ua=e,this.serializer=n,this.metadata=new Ot,this.buffer=new Uint8Array,this.Wa=function(){return new TextDecoder("utf-8")}(),this.Ga().then(r=>{r&&r.sa()?this.metadata.resolve(r.ia.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ia)}`))},r=>this.metadata.reject(r))}close(){return this.Ua.cancel()}async getMetadata(){return this.metadata.promise}async qa(){return await this.getMetadata(),this.Ga()}async Ga(){const e=await this.za();if(e===null)return null;const n=this.Wa.decode(e),r=Number(n);isNaN(r)&&this.ja(`length string (${n}) is not valid number`);const i=await this.Ha(r);return new B4(JSON.parse(i),e.length+r)}Ja(){return this.buffer.findIndex(e=>e===123)}async za(){for(;this.Ja()<0&&!await this.Ya(););if(this.buffer.length===0)return null;const e=this.Ja();e<0&&this.ja("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ha(e){for(;this.buffer.length<e;)await this.Ya()&&this.ja("Reached the end of bundle when more is expected.");const n=this.Wa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}ja(e){throw this.Ua.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ya(){const e=await this.Ua.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fj{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new $(V.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=X(i),a={documents:s.map(h=>_c(o.serializer,h))},l=await o.xo("BatchGetDocuments",o.serializer.databaseId,Ie.emptyPath(),a,s.length),c=new Map;l.forEach(h=>{const p=bB(o.serializer,h);c.set(p.key.toString(),p)});const d=[];return s.forEach(h=>{const p=c.get(h.toString());se(!!p),d.push(p)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new _l(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=Y.fromPath(r);this.mutations.push(new rv(i,this.precondition(i)))}),await async function(r,i){const s=X(r),o={writes:i.map(a=>yc(s.serializer,a))};await s.Co("Commit",s.serializer.databaseId,Ie.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw te();n=ae.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new $(V.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(ae.min())?Qe.exists(!1):Qe.updateTime(n):Qe.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(ae.min()))throw new $(V.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Qe.updateTime(n)}return Qe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pj{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Za=r.maxAttempts,this.Yo=new _v(this.asyncQueue,"transaction_retry")}Xa(){this.Za-=1,this.eu()}eu(){this.Yo.$o(async()=>{const e=new fj(this.datastore),n=this.tu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.nu(i)}))}).catch(r=>{this.nu(r)})})}tu(e){try{const n=this.updateFunction(e);return!Mc(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}nu(e){this.Za>0&&this.ru(e)?(this.Za-=1,this.asyncQueue.enqueueAndForget(()=>(this.eu(),Promise.resolve()))):this.deferred.reject(e)}ru(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!AC(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mj{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=xt.UNAUTHENTICATED,this.clientId=BP.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{q("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(q("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ot;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=El(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function dh(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await n1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function i_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Dv(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>WT(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>WT(e.remoteStore,i)),t._onlineComponents=e}function R1(t){return t.name==="FirebaseError"?t.code===V.FAILED_PRECONDITION||t.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Dv(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await dh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!R1(n))throw n;yr("Error using user provided cache. Falling back to memory cache: "+n),await dh(t,new r_)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await dh(t,new r_);return t._offlineComponents}async function ep(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await i_(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await i_(t,new xv))),t._onlineComponents}function A1(t){return Dv(t).then(e=>e.persistence)}function Nv(t){return Dv(t).then(e=>e.localStore)}function P1(t){return ep(t).then(e=>e.remoteStore)}function Ov(t){return ep(t).then(e=>e.syncEngine)}function gj(t){return ep(t).then(e=>e.datastore)}async function rl(t){const e=await ep(t),n=e.eventManager;return n.onListen=W4.bind(null,e.syncEngine),n.onUnlisten=G4.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=H4.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=K4.bind(null,e.syncEngine),n}function _j(t){return t.asyncQueue.enqueue(async()=>{const e=await A1(t),n=await P1(t);return e.setNetworkEnabled(!0),function(i){const s=X(i);return s.M_.delete(0),Wc(s)}(n)})}function yj(t){return t.asyncQueue.enqueue(async()=>{const e=await A1(t),n=await P1(t);return e.setNetworkEnabled(!1),async function(i){const s=X(i);s.M_.add(0),await yl(s),s.N_.set("Offline")}(n)})}function vj(t,e){const n=new Ot;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,d){const h=X(c);return h.persistence.runTransaction("read document","readonly",p=>h.localDocuments.getDocument(p,d))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new $(V.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=El(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await Nv(t),e,n)),n.promise}function C1(t,e,n={}){const r=new Ot;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const d=new Zf({next:p=>{o.enqueueAndForget(()=>Tv(s,h));const _=p.docs.has(a);!_&&p.fromCache?c.reject(new $(V.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&p.fromCache&&l&&l.source==="server"?c.reject(new $(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),h=new Rv(ml(a.path),d,{includeMetadataChanges:!0,ra:!0});return Iv(s,h)}(await rl(t),t.asyncQueue,e,n,r)),r.promise}function wj(t,e){const n=new Ot;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await nf(i,s,!0),l=new v1(s,a.hs),c=l.da(a.documents),d=l.applyChanges(c,!1);o.resolve(d.snapshot)}catch(a){const l=El(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await Nv(t),e,n)),n.promise}function k1(t,e,n={}){const r=new Ot;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const d=new Zf({next:p=>{o.enqueueAndForget(()=>Tv(s,h)),p.fromCache&&l.source==="server"?c.reject(new $(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),h=new Rv(a,d,{includeMetadataChanges:!0,ra:!0});return Iv(s,h)}(await rl(t),t.asyncQueue,e,n,r)),r.promise}function Ej(t,e){const n=new Zf(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){X(i).z_.add(s),s.next()}(await rl(t),n)),()=>{n.$a(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){X(i).z_.delete(s)}(await rl(t),n))}}function Ij(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?CC().encode(o):o,function(d,h){return new hj(d,h)}(function(d,h){if(d instanceof Uint8Array)return YT(d,h);if(d instanceof ArrayBuffer)return YT(new Uint8Array(d),h);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,qc(e));t.asyncQueue.enqueueAndForget(async()=>{cj(await Ov(t),i,r)})}function Tj(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=X(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.$r.getNamedQuery(o,i))}(await Nv(t),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(t,e,n){if(!n)throw new $(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function x1(t,e,n,r){if(e===!0&&r===!0)throw new $(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ZT(t){if(!Y.isDocumentKey(t))throw new $(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function e0(t){if(Y.isDocumentKey(t))throw new $(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function tp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te()}function Ae(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=tp(t);throw new $(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function D1(t,e){if(e<=0)throw new $(V.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}x1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=b1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new t0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new t0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new wU;switch(r.type){case"firstParty":return new SU(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=XT.get(n);r&&(q("ComponentProvider","Removing Datastore"),XT.delete(n),r.terminate())}(this),Promise.resolve()}}function N1(t,e,n,r={}){var i;const s=(t=Ae(t,Hc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&yr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=xt.MOCK_USER;else{a=mA(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new $(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new xt(c)}t._authCredentials=new EU(new UP(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yn=class O1{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new O1(this.firestore,e,this._query)}},nt=class L1{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ns(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new L1(this.firestore,e,this._key)}},ns=class V1 extends yn{constructor(e,n,r){super(e,n,ml(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nt(this.firestore,null,new Y(e))}withConverter(e){return new V1(this.firestore,e,this._path)}};function M1(t,e,...n){if(t=ie(t),Lv("collection","path",e),t instanceof Hc){const r=Ie.fromString(e,...n);return e0(r),new ns(t,null,r)}{if(!(t instanceof nt||t instanceof ns))throw new $(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return e0(r),new ns(t.firestore,null,r)}}function Sj(t,e){if(t=Ae(t,Hc),Lv("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new $(V.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new yn(t,null,function(r){return new yi(Ie.emptyPath(),r)}(e))}function vc(t,e,...n){if(t=ie(t),arguments.length===1&&(e=BP.newId()),Lv("doc","path",e),t instanceof Hc){const r=Ie.fromString(e,...n);return ZT(r),new nt(t,null,new Y(r))}{if(!(t instanceof nt||t instanceof ns))throw new $(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return ZT(r),new nt(t.firestore,t instanceof ns?t.converter:null,new Y(r))}}function F1(t,e){return t=ie(t),e=ie(e),(t instanceof nt||t instanceof ns)&&(e instanceof nt||e instanceof ns)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function U1(t,e){return t=ie(t),e=ie(e),t instanceof yn&&e instanceof yn&&t.firestore===e.firestore&&Uc(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rj{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new _v(this,"async_queue_retry"),this.hu=()=>{const n=ch();n&&q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=ch();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=ch();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Ot;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Ts(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw mt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=Ev.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&te()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function s_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Aj{constructor(){this._progressObserver={},this._taskCompletionResolver=new Ot,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pj=-1;let ct=class extends Hc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new Rj}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||B1(this),this._firestoreClient.terminate()}};function Cj(t,e){const n=Py(),r="(default)",i=bc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=LO("firestore");s&&N1(i,...s)}return i}function Mt(t){return t._firestoreClient||B1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function B1(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,d){return new ZU(a,l,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,b1(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new mj(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function kj(t,e){z1(t=Ae(t,ct));const n=Mt(t);if(n._uninitializedComponentsProvider)throw new $(V.FAILED_PRECONDITION,"SDK cache is already specified.");yr("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new xv;return j1(n,i,new S1(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function bj(t){z1(t=Ae(t,ct));const e=Mt(t);if(e._uninitializedComponentsProvider)throw new $(V.FAILED_PRECONDITION,"SDK cache is already specified.");yr("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new xv;return j1(e,r,new dj(r,n.cacheSizeBytes))}function j1(t,e,n){const r=new Ot;return t.asyncQueue.enqueue(async()=>{try{await dh(t,n),await i_(t,e),r.resolve()}catch(i){const s=i;if(!R1(s))throw s;yr("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function xj(t){if(t._initialized&&!t._terminated)throw new $(V.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Ot;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Lr.D())return Promise.resolve();const i=r+"main";await Lr.delete(i)}(pv(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function Dj(t){return function(n){const r=new Ot;return n.asyncQueue.enqueueAndForget(async()=>Z4(await Ov(n),r)),r.promise}(Mt(t=Ae(t,ct)))}function Nj(t){return _j(Mt(t=Ae(t,ct)))}function Oj(t){return yj(Mt(t=Ae(t,ct)))}function Lj(t,e){const n=Mt(t=Ae(t,ct)),r=new Aj;return Ij(n,t._databaseId,e,r),r}function Vj(t,e){return Tj(Mt(t=Ae(t,ct)),e).then(n=>n?new yn(t,null,n.query):null)}function z1(t){if(t._initialized||t._terminated)throw new $(V.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Br(Ct.fromBase64String(e))}catch(n){throw new $(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Br(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bo=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mj=/^__.*__$/;class Fj{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new vi(e,this.data,this.fieldMask,n,this.fieldTransforms):new gl(e,this.data,n,this.fieldTransforms)}}class $1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new vi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function q1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class rp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new rp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return af(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(q1(this.fu)&&Mj.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class Uj{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||qc(e)}Fu(e,n,r,i=!1){return new rp({fu:e,methodName:n,vu:r,path:Ke.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xo(t){const e=t._freezeSettings(),n=qc(t._databaseId);return new Uj(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ip(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);zv("Data must be an object, but it was:",o,r);const a=G1(r,o);let l,c;if(s.merge)l=new An(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const h of s.mergeFields){const p=o_(e,h,n);if(!o.contains(p))throw new $(V.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Q1(d,p)||d.push(p)}l=new An(d),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new Fj(new Gt(a),l,c)}class Gc extends bo{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gc}}function W1(t,e,n){return new rp({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Vv extends bo{_toFieldTransform(e){return new jc(e.path,new Qa)}isEqual(e){return e instanceof Vv}}class Mv extends bo{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=W1(this,e,!0),r=this.Mu.map(s=>Do(s,n)),i=new go(r);return new jc(e.path,i)}isEqual(e){return e instanceof Mv&&Ba(this.Mu,e.Mu)}}class Fv extends bo{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=W1(this,e,!0),r=this.Mu.map(s=>Do(s,n)),i=new _o(r);return new jc(e.path,i)}isEqual(e){return e instanceof Fv&&Ba(this.Mu,e.Mu)}}class Uv extends bo{constructor(e,n){super(e),this.xu=n}_toFieldTransform(e){const n=new Ja(e.serializer,vC(e.serializer,this.xu));return new jc(e.path,n)}isEqual(e){return e instanceof Uv&&this.xu===e.xu}}function Bv(t,e,n,r){const i=t.Fu(1,e,n);zv("Data must be an object, but it was:",i,r);const s=[],o=Gt.empty();ko(r,(l,c)=>{const d=$v(e,l,n);c=ie(c);const h=i.Su(d);if(c instanceof Gc)s.push(d);else{const p=Do(c,h);p!=null&&(s.push(d),o.set(d,p))}});const a=new An(s);return new $1(o,a,i.fieldTransforms)}function jv(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[o_(e,r,n)],l=[i];if(s.length%2!=0)throw new $(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(o_(e,s[p])),l.push(s[p+1]);const c=[],d=Gt.empty();for(let p=a.length-1;p>=0;--p)if(!Q1(c,a[p])){const _=a[p];let E=l[p];E=ie(E);const T=o.Su(_);if(E instanceof Gc)c.push(_);else{const C=Do(E,T);C!=null&&(c.push(_),d.set(_,C))}}const h=new An(c);return new $1(d,h,o.fieldTransforms)}function H1(t,e,n,r=!1){return Do(n,t.Fu(r?4:3,e))}function Do(t,e){if(K1(t=ie(t)))return zv("Unsupported field value:",e,t),G1(t,e);if(t instanceof bo)return function(r,i){if(!q1(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Do(a,i.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ie(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return vC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Je.fromDate(r);return{timestampValue:Ya(i.serializer,s)}}if(r instanceof Je){const s=new Je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ya(i.serializer,s)}}if(r instanceof np)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Br)return{bytesValue:xC(i.serializer,r._byteString)};if(r instanceof nt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:lv(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${tp(r)}`)}(t,e)}function G1(t,e){const n={};return ZP(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ko(t,(r,i)=>{const s=Do(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function K1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof np||t instanceof Br||t instanceof nt||t instanceof bo)}function zv(t,e,n){if(!K1(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=tp(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function o_(t,e,n){if((e=ie(e))instanceof ps)return e._internalPath;if(typeof e=="string")return $v(t,e);throw af("Field path arguments must be of type string or ",t,!1,void 0,n)}const Bj=new RegExp("[~\\*/\\[\\]]");function $v(t,e,n){if(e.search(Bj)>=0)throw af(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ps(...e.split("."))._internalPath}catch{throw af(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function af(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new $(V.INVALID_ARGUMENT,a+t+l)}function Q1(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(sp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jj extends wc{data(){return super.data()}}function sp(t,e){return typeof e=="string"?$v(t,e):e instanceof ps?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qv{}class Kc extends qv{}function Oi(t,e,...n){let r=[];e instanceof qv&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Wv).length,a=s.filter(l=>l instanceof op).length;if(o>1||o>0&&a>0)throw new $(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class op extends Kc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new op(e,n,r)}_apply(e){const n=this._parse(e);return X1(e._query,n),new yn(e.firestore,e.converter,Wg(e._query,n))}_parse(e){const n=xo(e.firestore);return function(s,o,a,l,c,d,h){let p;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new $(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){r0(h,d);const _=[];for(const E of h)_.push(n0(l,s,E));p={arrayValue:{values:_}}}else p=n0(l,s,h)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||r0(h,d),p=H1(a,o,h,d==="in"||d==="not-in");return Te.create(c,d,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function zj(t,e,n){const r=e,i=sp("where",t);return op._create(i,r,n)}class Wv extends qv{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Wv(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ke.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)X1(o,l),o=Wg(o,l)}(e._query,n),new yn(e.firestore,e.converter,Wg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Hv extends Kc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Hv(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new $(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new gc(s,o)}(e._query,this._field,this._direction);return new yn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new yi(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function $j(t,e="asc"){const n=e,r=sp("orderBy",t);return Hv._create(r,n)}class ap extends Kc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new ap(e,n,r)}_apply(e){return new yn(e.firestore,e.converter,Xh(e._query,this._limit,this._limitType))}}function qj(t){return D1("limit",t),ap._create("limit",t,"F")}function Wj(t){return D1("limitToLast",t),ap._create("limitToLast",t,"L")}class lp extends Kc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new lp(e,n,r)}_apply(e){const n=Y1(e,this.type,this._docOrFields,this._inclusive);return new yn(e.firestore,e.converter,function(i,s){return new yi(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function Hj(...t){return lp._create("startAt",t,!0)}function Gj(...t){return lp._create("startAfter",t,!1)}class up extends Kc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new up(e,n,r)}_apply(e){const n=Y1(e,this.type,this._docOrFields,this._inclusive);return new yn(e.firestore,e.converter,function(i,s){return new yi(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function Kj(...t){return up._create("endBefore",t,!1)}function Qj(...t){return up._create("endAt",t,!0)}function Y1(t,e,n,r){if(n[0]=ie(n[0]),n[0]instanceof wc)return function(s,o,a,l,c){if(!l)throw new $(V.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const h of ka(s))if(h.field.isKeyField())d.push(po(o,l.key));else{const p=l.data.field(h.field);if(Wf(p))throw new $(V.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(p===null){const _=h.field.canonicalString();throw new $(V.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${_}' (used as the orderBy) does not exist.`)}d.push(p)}return new hs(d,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=xo(t.firestore);return function(o,a,l,c,d,h){const p=o.explicitOrderBy;if(d.length>p.length)throw new $(V.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const _=[];for(let E=0;E<d.length;E++){const T=d[E];if(p[E].field.isKeyField()){if(typeof T!="string")throw new $(V.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof T}`);if(!tv(o)&&T.indexOf("/")!==-1)throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${T}' contains a slash.`);const C=o.path.child(Ie.fromString(T));if(!Y.isDocumentKey(C))throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${C}' is not because it contains an odd number of segments.`);const S=new Y(C);_.push(po(a,S))}else{const C=H1(l,c,T);_.push(C)}}return new hs(_,h)}(t._query,t.firestore._databaseId,i,e,n,r)}}function n0(t,e,n){if(typeof(n=ie(n))=="string"){if(n==="")throw new $(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tv(e)&&n.indexOf("/")!==-1)throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!Y.isDocumentKey(r))throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return po(t,new Y(r))}if(n instanceof nt)return po(t,n._key);throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${tp(n)}.`)}function r0(t,e){if(!Array.isArray(t)||t.length===0)throw new $(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function X1(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Gv{convertValue(e,n="none"){switch(fo(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(us(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw te()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ko(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new np(at(e.latitude),at(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Zy(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(fc(e));default:return null}}convertTimestamp(e){const n=hi(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);se(zC(r));const i=new cs(r.get(1),r.get(3)),s=new Y(r.popFirst(5));return i.isEqual(n)||mt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Jj extends Gv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Br(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new nt(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let fi=class extends wc{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Vu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(sp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},Vu=class extends fi{data(e={}){return super.data(e)}},ms=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Qs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Vu(this._firestore,this._userDataWriter,r.key,r,new Qs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Vu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Qs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Vu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Qs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:Yj(a.type),doc:l,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function Yj(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}function Z1(t,e){return t instanceof fi&&e instanceof fi?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof ms&&e instanceof ms&&t._firestore===e._firestore&&U1(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xj(t){t=Ae(t,nt);const e=Ae(t.firestore,ct);return C1(Mt(e),t._key).then(n=>Kv(e,t,n))}class No extends Gv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Br(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new nt(this.firestore,null,n)}}function Zj(t){t=Ae(t,nt);const e=Ae(t.firestore,ct),n=Mt(e),r=new No(e);return vj(n,t._key).then(i=>new fi(e,r,t._key,i,new Qs(i!==null&&i.hasLocalMutations,!0),t.converter))}function ez(t){t=Ae(t,nt);const e=Ae(t.firestore,ct);return C1(Mt(e),t._key,{source:"server"}).then(n=>Kv(e,t,n))}function tz(t){t=Ae(t,yn);const e=Ae(t.firestore,ct),n=Mt(e),r=new No(e);return J1(t._query),k1(n,t._query).then(i=>new ms(e,r,t,i))}function nz(t){t=Ae(t,yn);const e=Ae(t.firestore,ct),n=Mt(e),r=new No(e);return wj(n,t._query).then(i=>new ms(e,r,t,i))}function rz(t){t=Ae(t,yn);const e=Ae(t.firestore,ct),n=Mt(e),r=new No(e);return k1(n,t._query,{source:"server"}).then(i=>new ms(e,r,t,i))}function a_(t,e,n){t=Ae(t,nt);const r=Ae(t.firestore,ct),i=cp(t.converter,e,n);return Qc(r,[ip(xo(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Qe.none())])}function i0(t,e,n,...r){t=Ae(t,nt);const i=Ae(t.firestore,ct),s=xo(i);let o;return o=typeof(e=ie(e))=="string"||e instanceof ps?jv(s,"updateDoc",t._key,e,n,r):Bv(s,"updateDoc",t._key,e),Qc(i,[o.toMutation(t._key,Qe.exists(!0))])}function iz(t){return Qc(Ae(t.firestore,ct),[new _l(t._key,Qe.none())])}function sz(t,e){const n=Ae(t.firestore,ct),r=vc(t),i=cp(t.converter,e);return Qc(n,[ip(xo(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Qe.exists(!1))]).then(()=>r)}function ek(t,...e){var n,r,i;t=ie(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||s_(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(s_(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,d;if(t instanceof nt)c=Ae(t.firestore,ct),d=ml(t._key.path),l={next:h=>{e[o]&&e[o](Kv(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Ae(t,yn);c=Ae(h.firestore,ct),d=h._query;const p=new No(c);l={next:_=>{e[o]&&e[o](new ms(c,p,h,_))},error:e[o+1],complete:e[o+2]},J1(t._query)}return function(p,_,E,T){const C=new Zf(T),S=new Rv(_,C,E);return p.asyncQueue.enqueueAndForget(async()=>Iv(await rl(p),S)),()=>{C.$a(),p.asyncQueue.enqueueAndForget(async()=>Tv(await rl(p),S))}}(Mt(c),d,a,l)}function oz(t,e){return Ej(Mt(t=Ae(t,ct)),s_(e)?e:{next:e})}function Qc(t,e){return function(r,i){const s=new Ot;return r.asyncQueue.enqueueAndForget(async()=>Q4(await Ov(r),i,s)),s.promise}(Mt(t),e)}function Kv(t,e,n){const r=n.docs.get(e._key),i=new No(t);return new fi(t,i,e._key,r,new Qs(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const az={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lz=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=xo(e)}set(e,n,r){this._verifyNotCommitted();const i=zi(e,this._firestore),s=cp(i.converter,n,r),o=ip(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Qe.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=zi(e,this._firestore);let o;return o=typeof(n=ie(n))=="string"||n instanceof ps?jv(this._dataReader,"WriteBatch.update",s._key,n,r,i):Bv(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Qe.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=zi(e,this._firestore);return this._mutations=this._mutations.concat(new _l(n._key,Qe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new $(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function zi(t,e){if((t=ie(t)).firestore!==e)throw new $(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uz=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=xo(n)}get(n){const r=zi(n,this._firestore),i=new Jj(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return te();const o=s[0];if(o.isFoundDocument())return new wc(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new wc(this._firestore,i,r._key,null,r.converter);throw te()})}set(n,r,i){const s=zi(n,this._firestore),o=cp(s.converter,r,i),a=ip(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=zi(n,this._firestore);let a;return a=typeof(r=ie(r))=="string"||r instanceof ps?jv(this._dataReader,"Transaction.update",o._key,r,i,s):Bv(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=zi(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=zi(e,this._firestore),r=new No(this._firestore);return super.get(e).then(i=>new fi(this._firestore,r,n._key,i._document,new Qs(!1,!1),n.converter))}};function cz(t,e,n){t=Ae(t,ct);const r=Object.assign(Object.assign({},az),n);return function(s){if(s.maxAttempts<1)throw new $(V.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new Ot;return s.asyncQueue.enqueueAndForget(async()=>{const c=await gj(s);new pj(s.asyncQueue,c,a,o,l).Xa()}),l.promise}(Mt(t),i=>e(new uz(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dz(){return new Gc("deleteField")}function hz(){return new Vv("serverTimestamp")}function fz(...t){return new Mv("arrayUnion",t)}function pz(...t){return new Fv("arrayRemove",t)}function mz(t){return new Uv("increment",t)}(function(e,n=!0){(function(i){pl=i})(mi),ci(new nr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ct(new IU(r.getProvider("auth-internal")),new AU(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new $(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cs(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Fn(XI,"4.6.3",e),Fn(XI,"4.6.3","esm2017")})();const gz="@firebase/firestore-compat",_z="0.3.32";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new $("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(){if(typeof Uint8Array>"u")throw new $("unimplemented","Uint8Arrays are not available in this environment.")}function o0(){if(!YU())throw new $("unimplemented","Blobs are unavailable in Firestore in this environment.")}let tk=class l_{constructor(e){this._delegate=e}static fromBase64String(e){return o0(),new l_(Br.fromBase64String(e))}static fromUint8Array(e){return s0(),new l_(Br.fromUint8Array(e))}toBase64(){return o0(),this._delegate.toBase64()}toUint8Array(){return s0(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(t){return yz(t,["next","error","complete"])}function yz(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vz{enableIndexedDbPersistence(e,n){return kj(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return bj(e._delegate)}clearIndexedDbPersistence(e){return xj(e._delegate)}}class nk{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof cs||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&yr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){N1(this._delegate,e,n,r)}enableNetwork(){return Nj(this._delegate)}disableNetwork(){return Oj(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,x1("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Dj(this._delegate)}onSnapshotsInSync(e){return oz(this._delegate,e)}get app(){if(!this._appCompat)throw new $("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new il(this,M1(this._delegate,e))}catch(n){throw fn(n,"collection()","Firestore.collection()")}}doc(e){try{return new Qn(this,vc(this._delegate,e))}catch(n){throw fn(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new hn(this,Sj(this._delegate,e))}catch(n){throw fn(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return cz(this._delegate,n=>e(new rk(this,n)))}batch(){return Mt(this._delegate),new ik(new lz(this._delegate,e=>Qc(this._delegate,e)))}loadBundle(e){return Lj(this._delegate,e)}namedQuery(e){return Vj(this._delegate,e).then(n=>n?new hn(this,n):null)}}class dp extends Gv{constructor(e){super(),this.firestore=e}convertBytes(e){return new tk(new Br(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Qn.forKey(n,this.firestore,null)}}function wz(t){yU(t)}class rk{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new dp(e)}get(e){const n=Js(e);return this._delegate.get(n).then(r=>new Ec(this._firestore,new fi(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Js(e);return r?(Qv("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Js(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Js(e);return this._delegate.delete(n),this}}class ik{constructor(e){this._delegate=e}set(e,n,r){const i=Js(e);return r?(Qv("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Js(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Js(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Eo{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Vu(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Ic(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Eo.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Eo(e,new dp(e),n),i.set(n,s)),s}}Eo.INSTANCES=new WeakMap;class Qn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new dp(e)}static forPath(e,n,r){if(e.length%2!==0)throw new $("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Qn(n,new nt(n._delegate,r,new Y(e)))}static forKey(e,n,r){return new Qn(n,new nt(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new il(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new il(this.firestore,M1(this._delegate,e))}catch(n){throw fn(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=ie(e),e instanceof nt?F1(this._delegate,e):!1}set(e,n){n=Qv("DocumentReference.set",n);try{return n?a_(this._delegate,e,n):a_(this._delegate,e)}catch(r){throw fn(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?i0(this._delegate,e):i0(this._delegate,e,n,...r)}catch(i){throw fn(i,"updateDoc()","DocumentReference.update()")}}delete(){return iz(this._delegate)}onSnapshot(...e){const n=sk(e),r=ok(e,i=>new Ec(this.firestore,new fi(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return ek(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=Zj(this._delegate):(e==null?void 0:e.source)==="server"?n=ez(this._delegate):n=Xj(this._delegate),n.then(r=>new Ec(this.firestore,new fi(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Qn(this.firestore,e?this._delegate.withConverter(Eo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function fn(t,e,n){return t.message=t.message.replace(e,n),t}function sk(t){for(const e of t)if(typeof e=="object"&&!u_(e))return e;return{}}function ok(t,e){var n,r;let i;return u_(t[0])?i=t[0]:u_(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Ec{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Qn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return Z1(this._delegate,e._delegate)}}class Ic extends Ec{data(e){const n=this._delegate.data(e);return this._delegate._converter||vU(n!==void 0),n}}class hn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new dp(e)}where(e,n,r){try{return new hn(this.firestore,Oi(this._delegate,zj(e,n,r)))}catch(i){throw fn(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new hn(this.firestore,Oi(this._delegate,$j(e,n)))}catch(r){throw fn(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new hn(this.firestore,Oi(this._delegate,qj(e)))}catch(n){throw fn(n,"limit()","Query.limit()")}}limitToLast(e){try{return new hn(this.firestore,Oi(this._delegate,Wj(e)))}catch(n){throw fn(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new hn(this.firestore,Oi(this._delegate,Hj(...e)))}catch(n){throw fn(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new hn(this.firestore,Oi(this._delegate,Gj(...e)))}catch(n){throw fn(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new hn(this.firestore,Oi(this._delegate,Kj(...e)))}catch(n){throw fn(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new hn(this.firestore,Oi(this._delegate,Qj(...e)))}catch(n){throw fn(n,"endAt()","Query.endAt()")}}isEqual(e){return U1(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=nz(this._delegate):(e==null?void 0:e.source)==="server"?n=rz(this._delegate):n=tz(this._delegate),n.then(r=>new c_(this.firestore,new ms(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=sk(e),r=ok(e,i=>new c_(this.firestore,new ms(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return ek(this._delegate,n,r)}withConverter(e){return new hn(this.firestore,e?this._delegate.withConverter(Eo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class Ez{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Ic(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class c_{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new hn(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Ic(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new Ez(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Ic(this._firestore,r))})}isEqual(e){return Z1(this._delegate,e._delegate)}}class il extends hn{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Qn(this.firestore,e):null}doc(e){try{return e===void 0?new Qn(this.firestore,vc(this._delegate)):new Qn(this.firestore,vc(this._delegate,e))}catch(n){throw fn(n,"doc()","CollectionReference.doc()")}}add(e){return sz(this._delegate,e).then(n=>new Qn(this.firestore,n))}isEqual(e){return F1(this._delegate,e._delegate)}withConverter(e){return new il(this.firestore,e?this._delegate.withConverter(Eo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Js(t){return Ae(t,nt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(...e){this._delegate=new ps(...e)}static documentId(){return new Jv(Ke.keyField().canonicalString())}isEqual(e){return e=ie(e),e instanceof ps?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e){this._delegate=e}static serverTimestamp(){const e=hz();return e._methodName="FieldValue.serverTimestamp",new zs(e)}static delete(){const e=dz();return e._methodName="FieldValue.delete",new zs(e)}static arrayUnion(...e){const n=fz(...e);return n._methodName="FieldValue.arrayUnion",new zs(n)}static arrayRemove(...e){const n=pz(...e);return n._methodName="FieldValue.arrayRemove",new zs(n)}static increment(e){const n=mz(e);return n._methodName="FieldValue.increment",new zs(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iz={Firestore:nk,GeoPoint:np,Timestamp:Je,Blob:tk,Transaction:rk,WriteBatch:ik,DocumentReference:Qn,DocumentSnapshot:Ec,Query:hn,QueryDocumentSnapshot:Ic,QuerySnapshot:c_,CollectionReference:il,FieldPath:Jv,FieldValue:zs,setLogLevel:wz,CACHE_SIZE_UNLIMITED:Pj};function Tz(t,e){t.INTERNAL.registerComponent(new nr("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},Iz)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sz(t){Tz(t,(e,n)=>new nk(e,n,new vz)),t.registerVersion(gz,_z)}Sz(De);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak="firebasestorage.googleapis.com",lk="storageBucket",Rz=2*60*1e3,Az=10*60*1e3,Pz=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends sn{constructor(e,n,r=0){super(Tm(e),`Firebase Storage: ${n} (${Tm(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,it.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Tm(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var $e;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})($e||($e={}));function Tm(t){return"storage/"+t}function Yv(){const t="An unknown error occurred, please check the error payload for server response.";return new it($e.UNKNOWN,t)}function Cz(t){return new it($e.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function kz(t){return new it($e.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function bz(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new it($e.UNAUTHENTICATED,t)}function xz(){return new it($e.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Dz(t){return new it($e.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function uk(){return new it($e.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ck(){return new it($e.CANCELED,"User canceled the upload/download.")}function Nz(t){return new it($e.INVALID_URL,"Invalid URL '"+t+"'.")}function Oz(t){return new it($e.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Lz(){return new it($e.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+lk+"' property when initializing the app?")}function dk(){return new it($e.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Vz(){return new it($e.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Mz(){return new it($e.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Fz(t){return new it($e.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function xa(t){return new it($e.INVALID_ARGUMENT,t)}function hk(){return new it($e.APP_DELETED,"The Firebase app was deleted.")}function fk(t){return new it($e.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Mu(t,e){return new it($e.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function su(t){throw new it($e.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=rn.makeFromUrl(e,n)}catch{return new rn(e,"")}if(r.path==="")return r;throw Oz(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(x){x.path_=decodeURIComponent(x.path)}const d="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",_=new RegExp(`^https?://${h}/${d}/b/${i}/o${p}`,"i"),E={bucket:1,path:3},T=n===ak?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",S=new RegExp(`^https?://${T}/${i}/${C}`,"i"),I=[{regex:a,indices:l,postModify:s},{regex:_,indices:E,postModify:c},{regex:S,indices:{bucket:1,path:2},postModify:c}];for(let x=0;x<I.length;x++){const U=I[x],B=U.regex.exec(e);if(B){const g=B[U.indices.bucket];let y=B[U.indices.path];y||(y=""),r=new rn(g,y),U.postModify(r);break}}if(r==null)throw Nz(e);return r}}class Uz{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bz(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function d(...C){c||(c=!0,e.apply(null,C))}function h(C){i=setTimeout(()=>{i=null,t(_,l())},C)}function p(){s&&clearTimeout(s)}function _(C,...S){if(c){p();return}if(C){p(),d.call(null,C,...S);return}if(l()||o){p(),d.call(null,C,...S);return}r<64&&(r*=2);let I;a===1?(a=2,I=0):I=(r+Math.random())*1e3,h(I)}let E=!1;function T(C){E||(E=!0,p(),!c&&(i!==null?(C||(a=2),clearTimeout(i),h(0)):C||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,T(!0)},n),T}function jz(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zz(t){return t!==void 0}function $z(t){return typeof t=="function"}function qz(t){return typeof t=="object"&&!Array.isArray(t)}function hp(t){return typeof t=="string"||t instanceof String}function a0(t){return Xv()&&t instanceof Blob}function Xv(){return typeof Blob<"u"}function d_(t,e,n,r){if(r<e)throw xa(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw xa(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function pk(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var no;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(no||(no={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wz{constructor(e,n,r,i,s,o,a,l,c,d,h,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=h,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,E)=>{this.resolve_=_,this.reject_=E,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Md(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===no.NO_ERROR,l=s.getStatus();if(!a||mk(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===no.ABORT;r(!1,new Md(!1,null,d));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Md(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());zz(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Yv();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?hk():ck();o(l)}else{const l=uk();o(l)}};this.canceled_?n(!1,new Md(!1,null,!0)):this.backoffId_=Bz(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&jz(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Md{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Hz(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Gz(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Kz(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Qz(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Jz(t,e,n,r,i,s,o=!0){const a=pk(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return Kz(c,e),Hz(c,n),Gz(c,s),Qz(c,r),new Wz(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yz(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Xz(...t){const e=Yz();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Xv())return new Blob(t);throw new it($e.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Zz(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e$(t){if(typeof atob>"u")throw Fz("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Sm{constructor(e,n){this.data=e,this.contentType=n||null}}function gk(t,e){switch(t){case Jn.RAW:return new Sm(_k(e));case Jn.BASE64:case Jn.BASE64URL:return new Sm(yk(t,e));case Jn.DATA_URL:return new Sm(n$(e),r$(e))}throw Yv()}function _k(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function t$(t){let e;try{e=decodeURIComponent(t)}catch{throw Mu(Jn.DATA_URL,"Malformed data URL.")}return _k(e)}function yk(t,e){switch(t){case Jn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Mu(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Jn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Mu(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=e$(e)}catch(i){throw i.message.includes("polyfill")?i:Mu(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class vk{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Mu(Jn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=i$(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function n$(t){const e=new vk(t);return e.base64?yk(Jn.BASE64,e.rest):t$(e.rest)}function r$(t){return new vk(t).contentType}function i$(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n){let r=0,i="";a0(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(a0(this.data_)){const r=this.data_,i=Zz(r,e,n);return i===null?null:new kr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new kr(r,!0)}}static getBlob(...e){if(Xv()){const n=e.map(r=>r instanceof kr?r.data_:r);return new kr(Xz.apply(null,n))}else{const n=e.map(o=>hp(o)?gk(Jn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new kr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(t){let e;try{e=JSON.parse(t)}catch{return null}return qz(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s$(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function o$(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function wk(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a$(t,e){return e}class cn{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||a$}}let Fd=null;function l$(t){return!hp(t)||t.length<2?t:wk(t)}function Jc(){if(Fd)return Fd;const t=[];t.push(new cn("bucket")),t.push(new cn("generation")),t.push(new cn("metageneration")),t.push(new cn("name","fullPath",!0));function e(s,o){return l$(o)}const n=new cn("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new cn("size");return i.xform=r,t.push(i),t.push(new cn("timeCreated")),t.push(new cn("updated")),t.push(new cn("md5Hash",null,!0)),t.push(new cn("cacheControl",null,!0)),t.push(new cn("contentDisposition",null,!0)),t.push(new cn("contentEncoding",null,!0)),t.push(new cn("contentLanguage",null,!0)),t.push(new cn("contentType",null,!0)),t.push(new cn("metadata","customMetadata",!0)),Fd=t,Fd}function u$(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new rn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function c$(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return u$(r,t),r}function Ek(t,e,n){const r=Zv(e);return r===null?null:c$(t,r,n)}function d$(t,e,n,r){const i=Zv(e);if(i===null||!hp(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,h=t.fullPath,p="/b/"+o(d)+"/o/"+o(h),_=As(p,n,r),E=pk({alt:"media",token:c});return _+E})[0]}function ew(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0="prefixes",u0="items";function h$(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[l0])for(const i of n[l0]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new rn(e,s));r.prefixes.push(o)}if(n[u0])for(const i of n[u0]){const s=t._makeStorageReference(new rn(e,i.name));r.items.push(s)}return r}function f$(t,e,n){const r=Zv(n);return r===null?null:h$(t,e,r)}class Ei{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t){if(!t)throw Yv()}function fp(t,e){function n(r,i){const s=Ek(t,i,e);return Mr(s!==null),s}return n}function p$(t,e){function n(r,i){const s=f$(t,e,i);return Mr(s!==null),s}return n}function m$(t,e){function n(r,i){const s=Ek(t,i,e);return Mr(s!==null),d$(s,i,t.host,t._protocol)}return n}function Il(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=xz():i=bz():n.getStatus()===402?i=kz(t.bucket):n.getStatus()===403?i=Dz(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function pp(t){const e=Il(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=Cz(t.path)),s.serverResponse=i.serverResponse,s}return n}function Ik(t,e,n){const r=e.fullServerUrl(),i=As(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Ei(i,s,fp(t,n),o);return a.errorHandler=pp(e),a}function g$(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=As(o,t.host,t._protocol),l="GET",c=t.maxOperationRetryTime,d=new Ei(a,l,p$(t,e.bucket),c);return d.urlParams=s,d.errorHandler=Il(e),d}function _$(t,e,n){const r=e.fullServerUrl(),i=As(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Ei(i,s,m$(t,n),o);return a.errorHandler=pp(e),a}function y$(t,e,n,r){const i=e.fullServerUrl(),s=As(i,t.host,t._protocol),o="PATCH",a=ew(n,r),l={"Content-Type":"application/json; charset=utf-8"},c=t.maxOperationRetryTime,d=new Ei(s,o,fp(t,r),c);return d.headers=l,d.body=a,d.errorHandler=pp(e),d}function v$(t,e){const n=e.fullServerUrl(),r=As(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,c){}const a=new Ei(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=pp(e),a}function w$(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Tk(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=w$(null,e)),r}function Sk(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let I="";for(let x=0;x<2;x++)I=I+Math.random().toString().slice(2);return I}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=Tk(e,r,i),d=ew(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,p=`\r
--`+l+"--",_=kr.getBlob(h,r,p);if(_===null)throw dk();const E={name:c.fullPath},T=As(s,t.host,t._protocol),C="POST",S=t.maxUploadRetryTime,v=new Ei(T,C,fp(t,n),S);return v.urlParams=E,v.headers=o,v.body=_.uploadData(),v.errorHandler=Il(e),v}class lf{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function tw(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Mr(!1)}return Mr(!!n&&(e||["active"]).indexOf(n)!==-1),n}function E$(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=Tk(e,r,i),a={name:o.fullPath},l=As(s,t.host,t._protocol),c="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=ew(o,n),p=t.maxUploadRetryTime;function _(T){tw(T);let C;try{C=T.getResponseHeader("X-Goog-Upload-URL")}catch{Mr(!1)}return Mr(hp(C)),C}const E=new Ei(l,c,_,p);return E.urlParams=a,E.headers=d,E.body=h,E.errorHandler=Il(e),E}function I$(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const d=tw(c,["active","final"]);let h=null;try{h=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Mr(!1)}h||Mr(!1);const p=Number(h);return Mr(!isNaN(p)),new lf(p,r.size(),d==="final")}const o="POST",a=t.maxUploadRetryTime,l=new Ei(n,o,s,a);return l.headers=i,l.errorHandler=Il(e),l}const c0=256*1024;function T$(t,e,n,r,i,s,o,a){const l=new lf(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw Vz();const c=l.total-l.current;let d=c;i>0&&(d=Math.min(d,i));const h=l.current,p=h+d;let _="";d===0?_="finalize":c===d?_="upload, finalize":_="upload";const E={"X-Goog-Upload-Command":_,"X-Goog-Upload-Offset":`${l.current}`},T=r.slice(h,p);if(T===null)throw dk();function C(x,U){const B=tw(x,["active","final"]),g=l.current+d,y=r.size();let R;return B==="final"?R=fp(e,s)(x,U):R=null,new lf(g,y,B==="final",R)}const S="POST",v=e.maxUploadRetryTime,I=new Ei(n,S,C,v);return I.headers=E,I.body=T.uploadData(),I.progressCallback=a||null,I.errorHandler=Il(t),I}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S$={STATE_CHANGED:"state_changed"},pn={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Rm(t){switch(t){case"running":case"pausing":case"canceling":return pn.RUNNING;case"paused":return pn.PAUSED;case"success":return pn.SUCCESS;case"canceled":return pn.CANCELED;case"error":return pn.ERROR;default:return pn.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R${constructor(e,n,r){if($z(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class A${constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=no.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=no.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=no.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw su("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw su("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw su("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw su("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw su("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class P$ extends A${initXhr(){this.xhr_.responseType="text"}}function dr(){return new P$}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=Jc(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals($e.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(mk(i.status,[]))if(s)i=uk();else{this.sleepTime=Math.max(this.sleepTime*2,Pz),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals($e.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=E$(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,dr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=I$(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,dr,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=c0*this._chunkMultiplier,n=new lf(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=T$(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,dr,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){c0*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=Ik(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,dr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=Sk(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,dr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=ck(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Rm(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new R$(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Rm(this._state)){case pn.SUCCESS:Zo(this._resolve.bind(null,this.snapshot))();break;case pn.CANCELED:case pn.ERROR:const n=this._reject;Zo(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Rm(this._state)){case pn.RUNNING:case pn.PAUSED:e.next&&Zo(e.next.bind(e,this.snapshot))();break;case pn.SUCCESS:e.complete&&Zo(e.complete.bind(e))();break;case pn.CANCELED:case pn.ERROR:e.error&&Zo(e.error.bind(e,this._error))();break;default:e.error&&Zo(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n){this._service=e,n instanceof rn?this._location=n:this._location=rn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Io(e,n)}get root(){const e=new rn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return wk(this._location.path)}get storage(){return this._service}get parent(){const e=s$(this._location.path);if(e===null)return null;const n=new rn(this._location.bucket,e);return new Io(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw fk(e)}}function C$(t,e,n){t._throwIfRoot("uploadBytes");const r=Sk(t.storage,t._location,Jc(),new kr(e,!0),n);return t.storage.makeRequestWithTokens(r,dr).then(i=>({metadata:i,ref:t}))}function k$(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new Rk(t,new kr(e),n)}function b$(t){const e={prefixes:[],items:[]};return Ak(t,e).then(()=>e)}async function Ak(t,e,n){const i=await Pk(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await Ak(t,e,i.nextPageToken)}function Pk(t,e){e!=null&&typeof e.maxResults=="number"&&d_("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=g$(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,dr)}function x$(t){t._throwIfRoot("getMetadata");const e=Ik(t.storage,t._location,Jc());return t.storage.makeRequestWithTokens(e,dr)}function D$(t,e){t._throwIfRoot("updateMetadata");const n=y$(t.storage,t._location,e,Jc());return t.storage.makeRequestWithTokens(n,dr)}function N$(t){t._throwIfRoot("getDownloadURL");const e=_$(t.storage,t._location,Jc());return t.storage.makeRequestWithTokens(e,dr).then(n=>{if(n===null)throw Mz();return n})}function O$(t){t._throwIfRoot("deleteObject");const e=v$(t.storage,t._location);return t.storage.makeRequestWithTokens(e,dr)}function Ck(t,e){const n=o$(t._location.path,e),r=new rn(t._location.bucket,n);return new Io(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L$(t){return/^[A-Za-z]+:\/\//.test(t)}function V$(t,e){return new Io(t,e)}function kk(t,e){if(t instanceof nw){const n=t;if(n._bucket==null)throw Lz();const r=new Io(n,n._bucket);return e!=null?kk(r,e):r}else return e!==void 0?Ck(t,e):t}function M$(t,e){if(e&&L$(e)){if(t instanceof nw)return V$(t,e);throw xa("To use ref(service, url), the first argument must be a Storage instance.")}else return kk(t,e)}function d0(t,e){const n=e==null?void 0:e[lk];return n==null?null:rn.makeFromBucketSpec(n,t)}function F$(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:mA(i,t.app.options.projectId))}class nw{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=ak,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Rz,this._maxUploadRetryTime=Az,this._requests=new Set,i!=null?this._bucket=rn.makeFromBucketSpec(i,this._host):this._bucket=d0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=rn.makeFromBucketSpec(this._url,e):this._bucket=d0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){d_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){d_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Io(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new Uz(hk());{const o=Jz(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const h0="@firebase/storage",f0="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U$="storage";function B$(t,e,n){return t=ie(t),C$(t,e,n)}function j$(t,e,n){return t=ie(t),k$(t,e,n)}function z$(t){return t=ie(t),x$(t)}function $$(t,e){return t=ie(t),D$(t,e)}function q$(t,e){return t=ie(t),Pk(t,e)}function W$(t){return t=ie(t),b$(t)}function bk(t){return t=ie(t),N$(t)}function H$(t){return t=ie(t),O$(t)}function h_(t,e){return t=ie(t),M$(t,e)}function G$(t,e){return Ck(t,e)}function K$(t,e,n,r={}){F$(t,e,n,r)}function Q$(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new nw(n,r,i,e,mi)}function J$(){ci(new nr(U$,Q$,"PUBLIC").setMultipleInstances(!0)),Fn(h0,f0,""),Fn(h0,f0,"esm2017")}J$();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Ud(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new Ud(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new Ud(o,this,this._ref)):s={next:n.next?o=>n.next(new Ud(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class m0{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new si(e,this._service))}get items(){return this._delegate.items.map(e=>new si(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=G$(this._delegate,e);return new si(n,this.storage)}get root(){return new si(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new si(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new p0(j$(this._delegate,e,n),this)}putString(e,n=Jn.RAW,r){this._throwIfRoot("putString");const i=gk(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new p0(new Rk(this._delegate,new kr(i.data,!0),s),this)}listAll(){return W$(this._delegate).then(e=>new m0(e,this.storage))}list(e){return q$(this._delegate,e||void 0).then(n=>new m0(n,this.storage))}getMetadata(){return z$(this._delegate)}updateMetadata(e){return $$(this._delegate,e)}getDownloadURL(){return bk(this._delegate)}delete(){return this._throwIfRoot("delete"),H$(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw fk(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(g0(e))throw xa("ref() expected a child path but got a URL, use refFromURL instead.");return new si(h_(this._delegate,e),this)}refFromURL(e){if(!g0(e))throw xa("refFromURL() expected a full URL but got a child path, use ref() instead.");try{rn.makeFromUrl(e,this._delegate.host)}catch{throw xa("refFromUrl() expected a valid full URL but got an invalid one.")}return new si(h_(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){K$(this._delegate,e,n,r)}}function g0(t){return/^[A-Za-z]+:\/\//.test(t)}const Y$="@firebase/storage-compat",X$="0.3.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z$="storage-compat";function eq(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new xk(n,r)}function tq(t){const e={TaskState:pn,TaskEvent:S$,StringFormat:Jn,Storage:xk,Reference:si};t.INTERNAL.registerComponent(new nr(Z$,eq,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(Y$,X$)}tq(De);const nq={apiKey:"AIzaSyCknnv2K7Zlzh-cxqbAb1lDuoFB79JNvoY",authDomain:"nationsglory-62812.firebaseapp.com",projectId:"nationsglory-62812",storageBucket:"nationsglory-62812.appspot.com",messagingSenderId:"1062049263686",appId:"1:1062049263686:web:42dc7925af2b4f1da69a47",measurementId:"G-156LHMY0NL"};De.apps.length||De.initializeApp(nq);const rq=()=>{const[t,e]=z.useState(""),[n,r]=z.useState(""),[i,s]=z.useState(""),[o,a]=z.useState(""),[l,c]=z.useState(""),[d,h]=z.useState(null),[p,_]=z.useState(""),[E,T]=z.useState(!1),C=async()=>{if(_(""),n!==i){_("Les mots de passe ne correspondent pas.");return}T(!0);try{const v=await De.auth().createUserWithEmailAndPassword(t,n);if(d){const x=De.storage().ref().child(`profiles/${v.user.uid}`);await x.put(d);const U=await x.getDownloadURL();await v.user.updateProfile({displayName:`${o} ${l}`,photoURL:U}),await De.firestore().collection("users").doc(v.user.uid).set({firstName:o,lastName:l,email:t,photoURL:U}),console.log("Profil utilisateur mis à jour avec succès.")}else await v.user.updateProfile({displayName:`${o} ${l}`}),await De.firestore().collection("users").doc(v.user.uid).set({firstName:o,lastName:l,email:t});console.log("Inscription réussie !"),window.location.href="/nationglorycomu/"}catch(v){_(v.message),console.error(v.message)}finally{T(!1)}},S=async()=>{T(!0);try{const v=new De.auth.GoogleAuthProvider,I=await De.auth().signInWithPopup(v),x=I.user.email,{given_name:U,family_name:B}=I.additionalUserInfo.profile,g=I.user.photoURL||"https://firebasestorage.googleapis.com/v0/b/nationsglory-62812.appspot.com/o/Prendre%20sa%20sant%C3%A9%20en%20main%20n%E2%80%99a%20jamais%20%C3%A9t%C3%A9%20aussi%20simple.jpg?alt=media&token=dc085ed1-9a30-4dc8-92cc-ad7eaa8a840c";await De.firestore().collection("users").doc(I.user.uid).set({firstName:U,lastName:B,email:x,photoURL:g}),console.log("Inscription avec Google réussie !"),window.location.href="/nationglorycomu/"}catch(v){_(v.message),console.error(v.message)}finally{T(!1)}};return Q.jsxs("div",{children:[Q.jsx("h2",{children:"Inscription"}),p&&Q.jsx("p",{style:{color:"red"},children:p}),Q.jsx("input",{type:"text",placeholder:"Prénom",value:o,onChange:v=>a(v.target.value)}),Q.jsx("input",{type:"text",placeholder:"Nom",value:l,onChange:v=>c(v.target.value)}),Q.jsx("input",{type:"email",placeholder:"Adresse email",value:t,onChange:v=>e(v.target.value)}),Q.jsx("input",{type:"password",placeholder:"Mot de passe",value:n,onChange:v=>r(v.target.value)}),Q.jsx("input",{type:"password",placeholder:"Confirmer le mot de passe",value:i,onChange:v=>s(v.target.value)}),Q.jsx("input",{type:"file",accept:"image/*",onChange:v=>h(v.target.files[0])}),Q.jsx("button",{onClick:C,disabled:E,children:"S'inscrire"}),Q.jsx("button",{onClick:S,disabled:E,children:"S'inscrire avec Google"})]})},iq=()=>{const[t,e]=z.useState(""),[n,r]=z.useState(""),[i,s]=z.useState(""),[o,a]=z.useState(!1),l=async()=>{s(""),a(!0);try{await De.auth().signInWithEmailAndPassword(t,n),console.log("Connexion réussie !"),window.location.href="/nationglorycomu/"}catch(d){s(d.message),console.error(d.message)}finally{a(!1)}},c=async()=>{s(""),a(!0);try{const d=new De.auth.GoogleAuthProvider;await De.auth().signInWithPopup(d),console.log("Connexion réussie avec Google !"),window.location.href="/nationglorycomu/"}catch(d){s(d.message),console.error(d.message)}finally{a(!1)}};return Q.jsxs("div",{children:[Q.jsx("h2",{children:"Connexion"}),i&&Q.jsx("p",{style:{color:"red"},children:i}),Q.jsx("input",{type:"email",placeholder:"Adresse email",value:t,onChange:d=>e(d.target.value)}),Q.jsx("input",{type:"password",placeholder:"Mot de passe",value:n,onChange:d=>r(d.target.value)}),Q.jsx("button",{onClick:l,disabled:o,children:"Se connecter"}),Q.jsx("button",{onClick:c,disabled:o,children:"Se connecter avec Google"})]})},Dk=()=>{const t=async()=>{try{await De.auth().signOut(),console.log("Déconnexion réussie !"),window.location.href="/nationglorycomu/"}catch(e){console.error(e.message)}};return Q.jsx("div",{children:Q.jsx("button",{onClick:t,children:"Se déconnecter"})})},rw=()=>{const t=De.auth().currentUser;return Q.jsx("nav",{children:Q.jsxs("ul",{children:[Q.jsx("li",{children:Q.jsx(am,{to:"/nationglorycomu/",children:Q.jsx("button",{children:"Accueil"})})}),t?Q.jsxs(Q.Fragment,{children:[Q.jsx("li",{children:Q.jsx(am,{to:"/nationglorycomu/Profile",children:Q.jsx("button",{children:"Profil"})})}),Q.jsx("li",{children:Q.jsx(Dk,{})})]}):Q.jsx("li",{children:Q.jsx(am,{to:"/nationglorycomu/Auth",children:Q.jsx("button",{children:"Connexion"})})})]})})},sq=()=>{const[t,e]=z.useState(!0);return Q.jsxs("div",{children:[Q.jsx(rw,{}),t?Q.jsx(iq,{}):Q.jsx(rq,{}),Q.jsx("button",{onClick:()=>e(!t),children:t?"S'inscrire":"Se connecter"})]})};let Bd;const oq=new Uint8Array(16);function aq(){if(!Bd&&(Bd=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Bd))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Bd(oq)}const qt=[];for(let t=0;t<256;++t)qt.push((t+256).toString(16).slice(1));function lq(t,e=0){return qt[t[e+0]]+qt[t[e+1]]+qt[t[e+2]]+qt[t[e+3]]+"-"+qt[t[e+4]]+qt[t[e+5]]+"-"+qt[t[e+6]]+qt[t[e+7]]+"-"+qt[t[e+8]]+qt[t[e+9]]+"-"+qt[t[e+10]]+qt[t[e+11]]+qt[t[e+12]]+qt[t[e+13]]+qt[t[e+14]]+qt[t[e+15]]}const uq=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),_0={randomUUID:uq};function cq(t,e,n){if(_0.randomUUID&&!e&&!t)return _0.randomUUID();t=t||{};const r=t.random||(t.rng||aq)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,lq(r)}function Nk(t,e){return function(){return t.apply(e,arguments)}}const{toString:dq}=Object.prototype,{getPrototypeOf:iw}=Object,mp=(t=>e=>{const n=dq.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),vr=t=>(t=t.toLowerCase(),e=>mp(e)===t),gp=t=>e=>typeof e===t,{isArray:Tl}=Array,Tc=gp("undefined");function hq(t){return t!==null&&!Tc(t)&&t.constructor!==null&&!Tc(t.constructor)&&Zn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Ok=vr("ArrayBuffer");function fq(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Ok(t.buffer),e}const pq=gp("string"),Zn=gp("function"),Lk=gp("number"),_p=t=>t!==null&&typeof t=="object",mq=t=>t===!0||t===!1,hh=t=>{if(mp(t)!=="object")return!1;const e=iw(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},gq=vr("Date"),_q=vr("File"),yq=vr("Blob"),vq=vr("FileList"),wq=t=>_p(t)&&Zn(t.pipe),Eq=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Zn(t.append)&&((e=mp(t))==="formdata"||e==="object"&&Zn(t.toString)&&t.toString()==="[object FormData]"))},Iq=vr("URLSearchParams"),[Tq,Sq,Rq,Aq]=["ReadableStream","Request","Response","Headers"].map(vr),Pq=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Yc(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),Tl(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,t[a],a,t)}}function Vk(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const Mk=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:wb,Fk=t=>!Tc(t)&&t!==Mk;function f_(){const{caseless:t}=Fk(this)&&this||{},e={},n=(r,i)=>{const s=t&&Vk(e,i)||i;hh(e[s])&&hh(r)?e[s]=f_(e[s],r):hh(r)?e[s]=f_({},r):Tl(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Yc(arguments[r],n);return e}const Cq=(t,e,n,{allOwnKeys:r}={})=>(Yc(e,(i,s)=>{n&&Zn(i)?t[s]=Nk(i,n):t[s]=i},{allOwnKeys:r}),t),kq=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),bq=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},xq=(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&iw(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Dq=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},Nq=t=>{if(!t)return null;if(Tl(t))return t;let e=t.length;if(!Lk(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Oq=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&iw(Uint8Array)),Lq=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},Vq=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},Mq=vr("HTMLFormElement"),Fq=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),y0=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Uq=vr("RegExp"),Uk=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Yc(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},Bq=t=>{Uk(t,(e,n)=>{if(Zn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Zn(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},jq=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return Tl(t)?r(t):r(String(t).split(e)),n},zq=()=>{},$q=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,Am="abcdefghijklmnopqrstuvwxyz",v0="0123456789",Bk={DIGIT:v0,ALPHA:Am,ALPHA_DIGIT:Am+Am.toUpperCase()+v0},qq=(t=16,e=Bk.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function Wq(t){return!!(t&&Zn(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Hq=t=>{const e=new Array(10),n=(r,i)=>{if(_p(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=Tl(r)?[]:{};return Yc(r,(o,a)=>{const l=n(o,i+1);!Tc(l)&&(s[a]=l)}),e[i]=void 0,s}}return r};return n(t,0)},Gq=vr("AsyncFunction"),Kq=t=>t&&(_p(t)||Zn(t))&&Zn(t.then)&&Zn(t.catch);var F={isArray:Tl,isArrayBuffer:Ok,isBuffer:hq,isFormData:Eq,isArrayBufferView:fq,isString:pq,isNumber:Lk,isBoolean:mq,isObject:_p,isPlainObject:hh,isReadableStream:Tq,isRequest:Sq,isResponse:Rq,isHeaders:Aq,isUndefined:Tc,isDate:gq,isFile:_q,isBlob:yq,isRegExp:Uq,isFunction:Zn,isStream:wq,isURLSearchParams:Iq,isTypedArray:Oq,isFileList:vq,forEach:Yc,merge:f_,extend:Cq,trim:Pq,stripBOM:kq,inherits:bq,toFlatObject:xq,kindOf:mp,kindOfTest:vr,endsWith:Dq,toArray:Nq,forEachEntry:Lq,matchAll:Vq,isHTMLForm:Mq,hasOwnProperty:y0,hasOwnProp:y0,reduceDescriptors:Uk,freezeMethods:Bq,toObjectSet:jq,toCamelCase:Fq,noop:zq,toFiniteNumber:$q,findKey:Vk,global:Mk,isContextDefined:Fk,ALPHABET:Bk,generateString:qq,isSpecCompliantForm:Wq,toJSONObject:Hq,isAsyncFn:Gq,isThenable:Kq};function me(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}F.inherits(me,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:F.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const jk=me.prototype,zk={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{zk[t]={value:t}});Object.defineProperties(me,zk);Object.defineProperty(jk,"isAxiosError",{value:!0});me.from=(t,e,n,r,i,s)=>{const o=Object.create(jk);return F.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),me.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};var Qq=null;function p_(t){return F.isPlainObject(t)||F.isArray(t)}function $k(t){return F.endsWith(t,"[]")?t.slice(0,-2):t}function w0(t,e,n){return t?t.concat(e).map(function(i,s){return i=$k(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function Jq(t){return F.isArray(t)&&!t.some(p_)}const Yq=F.toFlatObject(F,{},null,function(e){return/^is[A-Z]/.test(e)});function yp(t,e,n){if(!F.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=F.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(T,C){return!F.isUndefined(C[T])});const r=n.metaTokens,i=n.visitor||d,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&F.isSpecCompliantForm(e);if(!F.isFunction(i))throw new TypeError("visitor must be a function");function c(E){if(E===null)return"";if(F.isDate(E))return E.toISOString();if(!l&&F.isBlob(E))throw new me("Blob is not supported. Use a Buffer instead.");return F.isArrayBuffer(E)||F.isTypedArray(E)?l&&typeof Blob=="function"?new Blob([E]):Buffer.from(E):E}function d(E,T,C){let S=E;if(E&&!C&&typeof E=="object"){if(F.endsWith(T,"{}"))T=r?T:T.slice(0,-2),E=JSON.stringify(E);else if(F.isArray(E)&&Jq(E)||(F.isFileList(E)||F.endsWith(T,"[]"))&&(S=F.toArray(E)))return T=$k(T),S.forEach(function(I,x){!(F.isUndefined(I)||I===null)&&e.append(o===!0?w0([T],x,s):o===null?T:T+"[]",c(I))}),!1}return p_(E)?!0:(e.append(w0(C,T,s),c(E)),!1)}const h=[],p=Object.assign(Yq,{defaultVisitor:d,convertValue:c,isVisitable:p_});function _(E,T){if(!F.isUndefined(E)){if(h.indexOf(E)!==-1)throw Error("Circular reference detected in "+T.join("."));h.push(E),F.forEach(E,function(S,v){(!(F.isUndefined(S)||S===null)&&i.call(e,S,F.isString(v)?v.trim():v,T,p))===!0&&_(S,T?T.concat(v):[v])}),h.pop()}}if(!F.isObject(t))throw new TypeError("data must be an object");return _(t),e}function E0(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function sw(t,e){this._pairs=[],t&&yp(t,this,e)}const qk=sw.prototype;qk.append=function(e,n){this._pairs.push([e,n])};qk.toString=function(e){const n=e?function(r){return e.call(this,r,E0)}:E0;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function Xq(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Wk(t,e,n){if(!e)return t;const r=n&&n.encode||Xq,i=n&&n.serialize;let s;if(i?s=i(e,n):s=F.isURLSearchParams(e)?e.toString():new sw(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class Zq{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){F.forEach(this.handlers,function(r){r!==null&&e(r)})}}var I0=Zq,Hk={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},e6=typeof URLSearchParams<"u"?URLSearchParams:sw,t6=typeof FormData<"u"?FormData:null,n6=typeof Blob<"u"?Blob:null,r6={isBrowser:!0,classes:{URLSearchParams:e6,FormData:t6,Blob:n6},protocols:["http","https","file","blob","url","data"]};const ow=typeof window<"u"&&typeof document<"u",i6=(t=>ow&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),s6=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",o6=ow&&window.location.href||"http://localhost";var a6=Object.freeze({__proto__:null,hasBrowserEnv:ow,hasStandardBrowserWebWorkerEnv:s6,hasStandardBrowserEnv:i6,origin:o6}),pr={...a6,...r6};function l6(t,e){return yp(t,new pr.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return pr.isNode&&F.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function u6(t){return F.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function c6(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function Gk(t){function e(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&F.isArray(i)?i.length:o,l?(F.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!F.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&F.isArray(i[o])&&(i[o]=c6(i[o])),!a)}if(F.isFormData(t)&&F.isFunction(t.entries)){const n={};return F.forEachEntry(t,(r,i)=>{e(u6(r),i,n,0)}),n}return null}function d6(t,e,n){if(F.isString(t))try{return(e||JSON.parse)(t),F.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(t)}const aw={transitional:Hk,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=F.isObject(e);if(s&&F.isHTMLForm(e)&&(e=new FormData(e)),F.isFormData(e))return i?JSON.stringify(Gk(e)):e;if(F.isArrayBuffer(e)||F.isBuffer(e)||F.isStream(e)||F.isFile(e)||F.isBlob(e)||F.isReadableStream(e))return e;if(F.isArrayBufferView(e))return e.buffer;if(F.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return l6(e,this.formSerializer).toString();if((a=F.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return yp(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),d6(e)):e}],transformResponse:[function(e){const n=this.transitional||aw.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(F.isResponse(e)||F.isReadableStream(e))return e;if(e&&F.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?me.from(a,me.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:pr.classes.FormData,Blob:pr.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};F.forEach(["delete","get","head","post","put","patch"],t=>{aw.headers[t]={}});var lw=aw;const h6=F.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var f6=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&h6[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e};const T0=Symbol("internals");function ou(t){return t&&String(t).trim().toLowerCase()}function fh(t){return t===!1||t==null?t:F.isArray(t)?t.map(fh):String(t)}function p6(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const m6=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Pm(t,e,n,r,i){if(F.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!F.isString(e)){if(F.isString(r))return e.indexOf(r)!==-1;if(F.isRegExp(r))return r.test(e)}}function g6(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function _6(t,e){const n=F.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class vp{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(a,l,c){const d=ou(l);if(!d)throw new Error("header name must be a non-empty string");const h=F.findKey(i,d);(!h||i[h]===void 0||c===!0||c===void 0&&i[h]!==!1)&&(i[h||l]=fh(a))}const o=(a,l)=>F.forEach(a,(c,d)=>s(c,d,l));if(F.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(F.isString(e)&&(e=e.trim())&&!m6(e))o(f6(e),n);else if(F.isHeaders(e))for(const[a,l]of e.entries())s(l,a,r);else e!=null&&s(n,e,r);return this}get(e,n){if(e=ou(e),e){const r=F.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return p6(i);if(F.isFunction(n))return n.call(this,i,r);if(F.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=ou(e),e){const r=F.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Pm(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=ou(o),o){const a=F.findKey(r,o);a&&(!n||Pm(r,r[a],a,n))&&(delete r[a],i=!0)}}return F.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||Pm(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return F.forEach(this,(i,s)=>{const o=F.findKey(r,s);if(o){n[o]=fh(i),delete n[s];return}const a=e?g6(s):String(s).trim();a!==s&&delete n[s],n[a]=fh(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return F.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&F.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[T0]=this[T0]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=ou(o);r[a]||(_6(i,o),r[a]=!0)}return F.isArray(e)?e.forEach(s):s(e),this}}vp.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);F.reduceDescriptors(vp.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});F.freezeMethods(vp);var mr=vp;function Cm(t,e){const n=this||lw,r=e||n,i=mr.from(r.headers);let s=r.data;return F.forEach(t,function(a){s=a.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function Kk(t){return!!(t&&t.__CANCEL__)}function Sl(t,e,n){me.call(this,t??"canceled",me.ERR_CANCELED,e,n),this.name="CanceledError"}F.inherits(Sl,me,{__CANCEL__:!0});function Qk(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new me("Request failed with status code "+n.status,[me.ERR_BAD_REQUEST,me.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function y6(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function v6(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),d=r[s];o||(o=c),n[i]=l,r[i]=c;let h=s,p=0;for(;h!==i;)p+=n[h++],h=h%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),c-o<e)return;const _=d&&c-d;return _?Math.round(p*1e3/_):void 0}}function w6(t,e){let n=0;const r=1e3/e;let i=null;return function(){const o=this===!0,a=Date.now();if(o||a-n>r)return i&&(clearTimeout(i),i=null),n=a,t.apply(null,arguments);i||(i=setTimeout(()=>(i=null,n=Date.now(),t.apply(null,arguments)),r-(a-n)))}}var uf=(t,e,n=3)=>{let r=0;const i=v6(50,250);return w6(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-r,c=i(l),d=o<=a;r=o;const h={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&d?(a-o)/c:void 0,event:s,lengthComputable:a!=null};h[e?"download":"upload"]=!0,t(h)},n)},E6=pr.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=F.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),I6=pr.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const o=[t+"="+encodeURIComponent(e)];F.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),F.isString(r)&&o.push("path="+r),F.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function T6(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function S6(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Jk(t,e){return t&&!T6(e)?S6(t,e):e}const S0=t=>t instanceof mr?{...t}:t;function To(t,e){e=e||{};const n={};function r(c,d,h){return F.isPlainObject(c)&&F.isPlainObject(d)?F.merge.call({caseless:h},c,d):F.isPlainObject(d)?F.merge({},d):F.isArray(d)?d.slice():d}function i(c,d,h){if(F.isUndefined(d)){if(!F.isUndefined(c))return r(void 0,c,h)}else return r(c,d,h)}function s(c,d){if(!F.isUndefined(d))return r(void 0,d)}function o(c,d){if(F.isUndefined(d)){if(!F.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function a(c,d,h){if(h in e)return r(c,d);if(h in t)return r(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,d)=>i(S0(c),S0(d),!0)};return F.forEach(Object.keys(Object.assign({},t,e)),function(d){const h=l[d]||i,p=h(t[d],e[d],d);F.isUndefined(p)&&h!==a||(n[d]=p)}),n}var Yk=t=>{const e=To({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:a}=e;e.headers=o=mr.from(o),e.url=Wk(Jk(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(F.isFormData(n)){if(pr.hasStandardBrowserEnv||pr.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[c,...d]=l?l.split(";").map(h=>h.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...d].join("; "))}}if(pr.hasStandardBrowserEnv&&(r&&F.isFunction(r)&&(r=r(e)),r||r!==!1&&E6(e.url))){const c=i&&s&&I6.read(s);c&&o.set(i,c)}return e};const R6=typeof XMLHttpRequest<"u";var A6=R6&&function(t){return new Promise(function(n,r){const i=Yk(t);let s=i.data;const o=mr.from(i.headers).normalize();let{responseType:a}=i,l;function c(){i.cancelToken&&i.cancelToken.unsubscribe(l),i.signal&&i.signal.removeEventListener("abort",l)}let d=new XMLHttpRequest;d.open(i.method.toUpperCase(),i.url,!0),d.timeout=i.timeout;function h(){if(!d)return;const _=mr.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),T={data:!a||a==="text"||a==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:_,config:t,request:d};Qk(function(S){n(S),c()},function(S){r(S),c()},T),d=null}"onloadend"in d?d.onloadend=h:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(h)},d.onabort=function(){d&&(r(new me("Request aborted",me.ECONNABORTED,i,d)),d=null)},d.onerror=function(){r(new me("Network Error",me.ERR_NETWORK,i,d)),d=null},d.ontimeout=function(){let E=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const T=i.transitional||Hk;i.timeoutErrorMessage&&(E=i.timeoutErrorMessage),r(new me(E,T.clarifyTimeoutError?me.ETIMEDOUT:me.ECONNABORTED,i,d)),d=null},s===void 0&&o.setContentType(null),"setRequestHeader"in d&&F.forEach(o.toJSON(),function(E,T){d.setRequestHeader(T,E)}),F.isUndefined(i.withCredentials)||(d.withCredentials=!!i.withCredentials),a&&a!=="json"&&(d.responseType=i.responseType),typeof i.onDownloadProgress=="function"&&d.addEventListener("progress",uf(i.onDownloadProgress,!0)),typeof i.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",uf(i.onUploadProgress)),(i.cancelToken||i.signal)&&(l=_=>{d&&(r(!_||_.type?new Sl(null,t,d):_),d.abort(),d=null)},i.cancelToken&&i.cancelToken.subscribe(l),i.signal&&(i.signal.aborted?l():i.signal.addEventListener("abort",l)));const p=y6(i.url);if(p&&pr.protocols.indexOf(p)===-1){r(new me("Unsupported protocol "+p+":",me.ERR_BAD_REQUEST,t));return}d.send(s||null)})};const P6=(t,e)=>{let n=new AbortController,r;const i=function(l){if(!r){r=!0,o();const c=l instanceof Error?l:this.reason;n.abort(c instanceof me?c:new Sl(c instanceof Error?c.message:c))}};let s=e&&setTimeout(()=>{i(new me(`timeout ${e} of ms exceeded`,me.ETIMEDOUT))},e);const o=()=>{t&&(s&&clearTimeout(s),s=null,t.forEach(l=>{l&&(l.removeEventListener?l.removeEventListener("abort",i):l.unsubscribe(i))}),t=null)};t.forEach(l=>l&&l.addEventListener&&l.addEventListener("abort",i));const{signal:a}=n;return a.unsubscribe=o,[a,()=>{s&&clearTimeout(s),s=null}]};var C6=P6;const k6=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,i;for(;r<n;)i=r+e,yield t.slice(r,i),r=i},b6=async function*(t,e,n){for await(const r of t)yield*k6(ArrayBuffer.isView(r)?r:await n(String(r)),e)},R0=(t,e,n,r,i)=>{const s=b6(t,e,i);let o=0;return new ReadableStream({type:"bytes",async pull(a){const{done:l,value:c}=await s.next();if(l){a.close(),r();return}let d=c.byteLength;n&&n(o+=d),a.enqueue(new Uint8Array(c))},cancel(a){return r(a),s.return()}},{highWaterMark:2})},A0=(t,e)=>{const n=t!=null;return r=>setTimeout(()=>e({lengthComputable:n,total:t,loaded:r}))},wp=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Xk=wp&&typeof ReadableStream=="function",m_=wp&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),x6=Xk&&(()=>{let t=!1;const e=new Request(pr.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e})(),P0=64*1024,g_=Xk&&!!(()=>{try{return F.isReadableStream(new Response("").body)}catch{}})(),cf={stream:g_&&(t=>t.body)};wp&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!cf[e]&&(cf[e]=F.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new me(`Response type '${e}' is not supported`,me.ERR_NOT_SUPPORT,r)})})})(new Response);const D6=async t=>{if(t==null)return 0;if(F.isBlob(t))return t.size;if(F.isSpecCompliantForm(t))return(await new Request(t).arrayBuffer()).byteLength;if(F.isArrayBufferView(t))return t.byteLength;if(F.isURLSearchParams(t)&&(t=t+""),F.isString(t))return(await m_(t)).byteLength},N6=async(t,e)=>{const n=F.toFiniteNumber(t.getContentLength());return n??D6(e)};var O6=wp&&(async t=>{let{url:e,method:n,data:r,signal:i,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:d,withCredentials:h="same-origin",fetchOptions:p}=Yk(t);c=c?(c+"").toLowerCase():"text";let[_,E]=i||s||o?C6([i,s],o):[],T,C;const S=()=>{!T&&setTimeout(()=>{_&&_.unsubscribe()}),T=!0};let v;try{if(l&&x6&&n!=="get"&&n!=="head"&&(v=await N6(d,r))!==0){let B=new Request(e,{method:"POST",body:r,duplex:"half"}),g;F.isFormData(r)&&(g=B.headers.get("content-type"))&&d.setContentType(g),B.body&&(r=R0(B.body,P0,A0(v,uf(l)),null,m_))}F.isString(h)||(h=h?"cors":"omit"),C=new Request(e,{...p,signal:_,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",withCredentials:h});let I=await fetch(C);const x=g_&&(c==="stream"||c==="response");if(g_&&(a||x)){const B={};["status","statusText","headers"].forEach(y=>{B[y]=I[y]});const g=F.toFiniteNumber(I.headers.get("content-length"));I=new Response(R0(I.body,P0,a&&A0(g,uf(a,!0)),x&&S,m_),B)}c=c||"text";let U=await cf[F.findKey(cf,c)||"text"](I,t);return!x&&S(),E&&E(),await new Promise((B,g)=>{Qk(B,g,{data:U,headers:mr.from(I.headers),status:I.status,statusText:I.statusText,config:t,request:C})})}catch(I){throw S(),I&&I.name==="TypeError"&&/fetch/i.test(I.message)?Object.assign(new me("Network Error",me.ERR_NETWORK,t,C),{cause:I.cause||I}):me.from(I,I&&I.code,t,C)}});const __={http:Qq,xhr:A6,fetch:O6};F.forEach(__,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const C0=t=>`- ${t}`,L6=t=>F.isFunction(t)||t===null||t===!1;var Zk={getAdapter:t=>{t=F.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let o;if(r=n,!L6(n)&&(r=__[(o=String(n)).toLowerCase()],r===void 0))throw new me(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(C0).join(`
`):" "+C0(s[0]):"as no adapter specified";throw new me("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:__};function km(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Sl(null,t)}function k0(t){return km(t),t.headers=mr.from(t.headers),t.data=Cm.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Zk.getAdapter(t.adapter||lw.adapter)(t).then(function(r){return km(t),r.data=Cm.call(t,t.transformResponse,r),r.headers=mr.from(r.headers),r},function(r){return Kk(r)||(km(t),r&&r.response&&(r.response.data=Cm.call(t,t.transformResponse,r.response),r.response.headers=mr.from(r.response.headers))),Promise.reject(r)})}const eb="1.7.2",uw={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{uw[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const b0={};uw.transitional=function(e,n,r){function i(s,o){return"[Axios v"+eb+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new me(i(o," has been removed"+(n?" in "+n:"")),me.ERR_DEPRECATED);return n&&!b0[o]&&(b0[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function V6(t,e,n){if(typeof t!="object")throw new me("options must be an object",me.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new me("option "+s+" must be "+l,me.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new me("Unknown option "+s,me.ERR_BAD_OPTION)}}var y_={assertOptions:V6,validators:uw};const Li=y_.validators;class df{constructor(e){this.defaults=e,this.interceptors={request:new I0,response:new I0}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=To(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&y_.assertOptions(r,{silentJSONParsing:Li.transitional(Li.boolean),forcedJSONParsing:Li.transitional(Li.boolean),clarifyTimeoutError:Li.transitional(Li.boolean)},!1),i!=null&&(F.isFunction(i)?n.paramsSerializer={serialize:i}:y_.assertOptions(i,{encode:Li.function,serialize:Li.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&F.merge(s.common,s[n.method]);s&&F.forEach(["delete","get","head","post","put","patch","common"],E=>{delete s[E]}),n.headers=mr.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(T){typeof T.runWhen=="function"&&T.runWhen(n)===!1||(l=l&&T.synchronous,a.unshift(T.fulfilled,T.rejected))});const c=[];this.interceptors.response.forEach(function(T){c.push(T.fulfilled,T.rejected)});let d,h=0,p;if(!l){const E=[k0.bind(this),void 0];for(E.unshift.apply(E,a),E.push.apply(E,c),p=E.length,d=Promise.resolve(n);h<p;)d=d.then(E[h++],E[h++]);return d}p=a.length;let _=n;for(h=0;h<p;){const E=a[h++],T=a[h++];try{_=E(_)}catch(C){T.call(this,C);break}}try{d=k0.call(this,_)}catch(E){return Promise.reject(E)}for(h=0,p=c.length;h<p;)d=d.then(c[h++],c[h++]);return d}getUri(e){e=To(this.defaults,e);const n=Jk(e.baseURL,e.url);return Wk(n,e.params,e.paramsSerializer)}}F.forEach(["delete","get","head","options"],function(e){df.prototype[e]=function(n,r){return this.request(To(r||{},{method:e,url:n,data:(r||{}).data}))}});F.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,a){return this.request(To(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}df.prototype[e]=n(),df.prototype[e+"Form"]=n(!0)});var ph=df;class cw{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new Sl(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new cw(function(i){e=i}),cancel:e}}}var M6=cw;function F6(t){return function(n){return t.apply(null,n)}}function U6(t){return F.isObject(t)&&t.isAxiosError===!0}const v_={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(v_).forEach(([t,e])=>{v_[e]=t});var B6=v_;function tb(t){const e=new ph(t),n=Nk(ph.prototype.request,e);return F.extend(n,ph.prototype,e,{allOwnKeys:!0}),F.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return tb(To(t,i))},n}const It=tb(lw);It.Axios=ph;It.CanceledError=Sl;It.CancelToken=M6;It.isCancel=Kk;It.VERSION=eb;It.toFormData=yp;It.AxiosError=me;It.Cancel=It.CanceledError;It.all=function(e){return Promise.all(e)};It.spread=F6;It.isAxiosError=U6;It.mergeConfig=To;It.AxiosHeaders=mr;It.formToJSON=t=>Gk(F.isHTMLForm(t)?new FormData(t):t);It.getAdapter=Zk.getAdapter;It.HttpStatusCode=B6;It.default=It;var j6=It;const z6=j6;class $6{constructor(e){this.apiToken=e,this.baseURL="https://publicapi.nationsglory.fr/",this.headers={"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${this.apiToken}`}}async getPlayersCount(){return this._makeRequest("GET","playercount")}async getNotations(e=Math.floor((Date.now()/1e3-342100)/604800)-1,n=null,r){const i={week:e,country:n,server:r},s=this._getQueryString(i);return this._makeRequest("GET",`notations${s}`)}async getPlanning(e,n,r){const i={server:e,month:n,year:r},s=this._getQueryString(i);return this._makeRequest("GET",`planning${s}`)}async getUser(e){return this._makeRequest("GET",`user/${e}`)}async getCountry(e,n){return this._makeRequest("GET",`country/${e}/${n}`)}_getQueryString(e){return"?"+new URLSearchParams(e).toString()}async _makeRequest(e,n,r=null){try{return(await z6({method:e,url:`${this.baseURL}${n}`,headers:this.headers,data:r})).data}catch(i){return console.error(`Error making request to ${n}:`,i.response.data),{error:i.response.data}}}}var q6=$6;const W6=w_(q6),H6=()=>{const[t,e]=z.useState(null),[n,r]=z.useState(""),[i,s]=z.useState(""),[o,a]=z.useState("");z.useState("");const[l,c]=z.useState(""),[d,h]=z.useState(""),[p,_]=z.useState(null),[E,T]=z.useState(!1),[C,S]=z.useState(null),[v,I]=z.useState(null),x=sA(),B=new W6("d74g32Q8nBfid48A7c8BTks4JRDkTL").getPlayersCount();console.log(B),z.useEffect(()=>{fetch("https://cors-anywhere.herokuapp.com/https://publicapi.nationsglory.fr/playercount").then(re=>re.json()).then(re=>console.log(re)).catch(re=>console.error("Error:",re))},[]),z.useEffect(()=>{const re=De.auth().onAuthStateChanged(qe=>{qe?(e(qe),T(qe.providerData.some(Jt=>Jt.providerId==="google.com"))):(e(""),x("/nationglorycomu/Auth"))});return()=>re()},[]);const g=async()=>{try{const re=new De.auth.GoogleAuthProvider;await De.auth().currentUser.linkWithPopup(re),console.log("Compte Google lié avec succès !"),T(!0),location.reload()}catch(re){_(re.message),console.error(re.message)}},y=async()=>{try{await De.auth().currentUser.updateEmail(n),console.log("Adresse email mise à jour avec succès !"),location.reload()}catch(re){_(re.message),console.error(re.message)}},R=async()=>{try{if(i!==o){_("les mots de passe doivent correspondre.");return}await De.auth().currentUser.updatePassword(i),console.log("Mot de passe mis à jour avec succès !"),location.reload()}catch(re){_(re.message),console.error(re.message)}},A=async()=>{try{await De.auth().currentUser.updateProfile({displayName:`${l} ${d}`}),console.log("Nom mis à jour avec succès !"),location.reload()}catch(re){_(re.message),console.error(re.message)}},k=re=>{I(re.target.files[0])},b=async()=>{try{if(v!==null){const re=h_(De.storage(),`profiles/${cq()}`),qe=await B$(re,v);console.log(qe);const Jt=await bk(qe.ref);S(Jt);const W=C2().currentUser;if(W){await oP(W,{photoURL:Jt});const ue=Cj();await a_(vc(ue,"users",W.uid),{photoURL:Jt},{merge:!0}),location.reload()}else console.error("Utilisateur non connecté")}}catch(re){console.error("Erreur lors du téléchargement de l'image de profil :",re)}};return Q.jsxs("div",{children:[Q.jsx(rw,{}),Q.jsx("h1",{children:"Profil de l'utilisateur"}),p&&Q.jsx("p",{style:{color:"red"},children:p}),t?Q.jsxs("div",{children:[Q.jsx("img",{src:t.photoURL||"https://firebasestorage.googleapis.com/v0/b/nationsglory-62812.appspot.com/o/Prendre%20sa%20sant%C3%A9%20en%20main%20n%E2%80%99a%20jamais%20%C3%A9t%C3%A9%20aussi%20simple.jpg?alt=media&token=dc085ed1-9a30-4dc8-92cc-ad7eaa8a840c",alt:"Image de profil"}),Q.jsxs("p",{children:["Prénom: ",t.displayName.split(" ")[0]]}),Q.jsxs("p",{children:["Nom: ",t.displayName.split(" ")[1]]}),Q.jsxs("p",{children:["Email: ",t.email]}),E?Q.jsx("p",{children:"Connecté avec Google"}):Q.jsx("button",{onClick:g,children:"Lier un compte Google"}),Q.jsxs("div",{children:[Q.jsx("h2",{children:"Modifier l'adresse email"}),Q.jsx("input",{type:"email",placeholder:"Nouvelle adresse email",value:n,onChange:re=>r(re.target.value)}),Q.jsx("button",{onClick:y,children:"Mettre à jour l'email"})]}),Q.jsxs("div",{children:[Q.jsx("h2",{children:"Modifier le mot de passe"}),Q.jsx("input",{type:"password",placeholder:"Nouveau mot de passe",value:i,onChange:re=>s(re.target.value)}),Q.jsx("input",{type:"password",placeholder:"Confirmer le nouveau mot de passe",value:o,onChange:re=>a(re.target.value)}),Q.jsx("button",{onClick:R,children:"Mettre à jour le mot de passe"})]}),Q.jsxs("div",{children:[Q.jsx("h2",{children:"Modifier le nom"}),Q.jsx("input",{type:"text",placeholder:"Nouveau prénom",value:l,onChange:re=>c(re.target.value)}),Q.jsx("input",{type:"text",placeholder:"Nouveau nom de famille",value:d,onChange:re=>h(re.target.value)}),Q.jsx("button",{onClick:A,children:"Mettre à jour le nom"})]}),Q.jsxs("div",{children:[Q.jsx("h2",{children:"Modifier l'image de profil"}),Q.jsx("input",{type:"file",onChange:k}),Q.jsx("button",{onClick:b,children:"Télécharger l'image de profil"})]}),Q.jsx("div",{children:Q.jsx(Dk,{})})]}):Q.jsx("p",{children:"Veuillez vous connecter pour accéder à votre profil."})]})},G6=()=>{const[t,e]=z.useState("");z.useEffect(()=>{const r=De.auth().onAuthStateChanged(i=>{e(i||null)});return()=>r()},[]);const n=t?t.displayName.split(" ")[0]:"";return Q.jsx("div",{children:Q.jsxs("div",{children:[Q.jsxs("h1",{children:["Welcome to the Home Page! ",n]}),Q.jsx(rw,{})]})})};function K6(){return Q.jsx("div",{className:"App",children:Q.jsx("div",{className:"main",children:Q.jsx(sO,{})})})}const Q6=fO([{path:"/nationglorycomu/",element:Q.jsx(K6,{}),children:[{path:"",element:Q.jsx(G6,{})},{path:"auth",element:Q.jsx(sq,{})},{path:"profile",element:Q.jsx(H6,{})}]}]);HR.createRoot(document.getElementById("root")).render(Q.jsx(z0.StrictMode,{children:Q.jsx(IO,{router:Q6})}));
