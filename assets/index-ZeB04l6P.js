function S1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function A1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var lE={exports:{}},Ph={},uE={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kl=Symbol.for("react.element"),R1=Symbol.for("react.portal"),P1=Symbol.for("react.fragment"),C1=Symbol.for("react.strict_mode"),k1=Symbol.for("react.profiler"),b1=Symbol.for("react.provider"),N1=Symbol.for("react.context"),D1=Symbol.for("react.forward_ref"),x1=Symbol.for("react.suspense"),V1=Symbol.for("react.memo"),O1=Symbol.for("react.lazy"),Xy=Symbol.iterator;function L1(t){return t===null||typeof t!="object"?null:(t=Xy&&t[Xy]||t["@@iterator"],typeof t=="function"?t:null)}var cE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hE=Object.assign,dE={};function Mo(t,e,n){this.props=t,this.context=e,this.refs=dE,this.updater=n||cE}Mo.prototype.isReactComponent={};Mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function fE(){}fE.prototype=Mo.prototype;function Tm(t,e,n){this.props=t,this.context=e,this.refs=dE,this.updater=n||cE}var Sm=Tm.prototype=new fE;Sm.constructor=Tm;hE(Sm,Mo.prototype);Sm.isPureReactComponent=!0;var Zy=Array.isArray,pE=Object.prototype.hasOwnProperty,Am={current:null},mE={key:!0,ref:!0,__self:!0,__source:!0};function gE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)pE.call(e,r)&&!mE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Kl,type:t,key:s,ref:o,props:i,_owner:Am.current}}function M1(t,e){return{$$typeof:Kl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Kl}function F1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ev=/\/+/g;function Jd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?F1(""+t.key):e.toString(36)}function cc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Kl:case R1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Jd(o,0):r,Zy(i)?(n="",t!=null&&(n=t.replace(ev,"$&/")+"/"),cc(i,e,n,"",function(c){return c})):i!=null&&(Rm(i)&&(i=M1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ev,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Zy(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Jd(s,a);o+=cc(s,e,n,u,i)}else if(u=L1(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Jd(s,a++),o+=cc(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Lu(t,e,n){if(t==null)return t;var r=[],i=0;return cc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function U1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mt={current:null},hc={transition:null},B1={ReactCurrentDispatcher:Mt,ReactCurrentBatchConfig:hc,ReactCurrentOwner:Am};function _E(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:Lu,forEach:function(t,e,n){Lu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Lu(t,function(){e++}),e},toArray:function(t){return Lu(t,function(e){return e})||[]},only:function(t){if(!Rm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=Mo;ie.Fragment=P1;ie.Profiler=k1;ie.PureComponent=Tm;ie.StrictMode=C1;ie.Suspense=x1;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B1;ie.act=_E;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=hE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Am.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)pE.call(e,u)&&!mE.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Kl,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:N1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:b1,_context:t},t.Consumer=t};ie.createElement=gE;ie.createFactory=function(t){var e=gE.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:D1,render:t}};ie.isValidElement=Rm;ie.lazy=function(t){return{$$typeof:O1,_payload:{_status:-1,_result:t},_init:U1}};ie.memo=function(t,e){return{$$typeof:V1,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=hc.transition;hc.transition={};try{t()}finally{hc.transition=e}};ie.unstable_act=_E;ie.useCallback=function(t,e){return Mt.current.useCallback(t,e)};ie.useContext=function(t){return Mt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return Mt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return Mt.current.useEffect(t,e)};ie.useId=function(){return Mt.current.useId()};ie.useImperativeHandle=function(t,e,n){return Mt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return Mt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return Mt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return Mt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return Mt.current.useReducer(t,e,n)};ie.useRef=function(t){return Mt.current.useRef(t)};ie.useState=function(t){return Mt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return Mt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return Mt.current.useTransition()};ie.version="18.3.1";uE.exports=ie;var z=uE.exports;const yE=A1(z),j1=S1({__proto__:null,default:yE},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z1=z,$1=Symbol.for("react.element"),q1=Symbol.for("react.fragment"),W1=Object.prototype.hasOwnProperty,G1=z1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,K1={key:!0,ref:!0,__self:!0,__source:!0};function vE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)W1.call(e,r)&&!K1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:$1,type:t,key:s,ref:o,props:i,_owner:G1.current}}Ph.Fragment=q1;Ph.jsx=vE;Ph.jsxs=vE;lE.exports=Ph;var q=lE.exports,wE={exports:{}},on={},IE={exports:{}},EE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(K,Z){var ne=K.length;K.push(Z);e:for(;0<ne;){var Ce=ne-1>>>1,pe=K[Ce];if(0<i(pe,Z))K[Ce]=Z,K[ne]=pe,ne=Ce;else break e}}function n(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var Z=K[0],ne=K.pop();if(ne!==Z){K[0]=ne;e:for(var Ce=0,pe=K.length,$e=pe>>>1;Ce<$e;){var Hn=2*(Ce+1)-1,Qn=K[Hn],Yn=Hn+1,Jn=K[Yn];if(0>i(Qn,ne))Yn<pe&&0>i(Jn,Qn)?(K[Ce]=Jn,K[Yn]=ne,Ce=Yn):(K[Ce]=Qn,K[Hn]=ne,Ce=Hn);else if(Yn<pe&&0>i(Jn,ne))K[Ce]=Jn,K[Yn]=ne,Ce=Yn;else break e}}return Z}function i(K,Z){var ne=K.sortIndex-Z.sortIndex;return ne!==0?ne:K.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,m=3,v=!1,R=!1,P=!1,b=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(K){for(var Z=n(c);Z!==null;){if(Z.callback===null)r(c);else if(Z.startTime<=K)r(c),Z.sortIndex=Z.expirationTime,e(u,Z);else break;Z=n(c)}}function D(K){if(P=!1,w(K),!R)if(n(u)!==null)R=!0,Kn(L);else{var Z=n(c);Z!==null&&_n(D,Z.startTime-K)}}function L(K,Z){R=!1,P&&(P=!1,E(y),y=-1),v=!0;var ne=m;try{for(w(Z),f=n(u);f!==null&&(!(f.expirationTime>Z)||K&&!k());){var Ce=f.callback;if(typeof Ce=="function"){f.callback=null,m=f.priorityLevel;var pe=Ce(f.expirationTime<=Z);Z=t.unstable_now(),typeof pe=="function"?f.callback=pe:f===n(u)&&r(u),w(Z)}else r(u);f=n(u)}if(f!==null)var $e=!0;else{var Hn=n(c);Hn!==null&&_n(D,Hn.startTime-Z),$e=!1}return $e}finally{f=null,m=ne,v=!1}}var F=!1,I=null,y=-1,T=5,A=-1;function k(){return!(t.unstable_now()-A<T)}function C(){if(I!==null){var K=t.unstable_now();A=K;var Z=!0;try{Z=I(!0,K)}finally{Z?S():(F=!1,I=null)}}else F=!1}var S;if(typeof _=="function")S=function(){_(C)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,Sr=tt.port2;tt.port1.onmessage=C,S=function(){Sr.postMessage(null)}}else S=function(){b(C,0)};function Kn(K){I=K,F||(F=!0,S())}function _n(K,Z){y=b(function(){K(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(K){K.callback=null},t.unstable_continueExecution=function(){R||v||(R=!0,Kn(L))},t.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<K?Math.floor(1e3/K):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(K){switch(m){case 1:case 2:case 3:var Z=3;break;default:Z=m}var ne=m;m=Z;try{return K()}finally{m=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(K,Z){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var ne=m;m=K;try{return Z()}finally{m=ne}},t.unstable_scheduleCallback=function(K,Z,ne){var Ce=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?Ce+ne:Ce):ne=Ce,K){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=ne+pe,K={id:d++,callback:Z,priorityLevel:K,startTime:ne,expirationTime:pe,sortIndex:-1},ne>Ce?(K.sortIndex=ne,e(c,K),n(u)===null&&K===n(c)&&(P?(E(y),y=-1):P=!0,_n(D,ne-Ce))):(K.sortIndex=pe,e(u,K),R||v||(R=!0,Kn(L))),K},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(K){var Z=m;return function(){var ne=m;m=Z;try{return K.apply(this,arguments)}finally{m=ne}}}})(EE);IE.exports=EE;var H1=IE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q1=z,rn=H1;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var TE=new Set,ll={};function fs(t,e){co(t,e),co(t+"Capture",e)}function co(t,e){for(ll[t]=e,t=0;t<e.length;t++)TE.add(e[t])}var ur=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zf=Object.prototype.hasOwnProperty,Y1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tv={},nv={};function J1(t){return zf.call(nv,t)?!0:zf.call(tv,t)?!1:Y1.test(t)?nv[t]=!0:(tv[t]=!0,!1)}function X1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Z1(t,e,n,r){if(e===null||typeof e>"u"||X1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ft(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var _t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_t[t]=new Ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];_t[e]=new Ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){_t[t]=new Ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_t[t]=new Ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_t[t]=new Ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){_t[t]=new Ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){_t[t]=new Ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){_t[t]=new Ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){_t[t]=new Ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var Pm=/[\-:]([a-z])/g;function Cm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Pm,Cm);_t[e]=new Ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Pm,Cm);_t[e]=new Ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Pm,Cm);_t[e]=new Ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){_t[t]=new Ft(t,1,!1,t.toLowerCase(),null,!1,!1)});_t.xlinkHref=new Ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){_t[t]=new Ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function km(t,e,n,r){var i=_t.hasOwnProperty(e)?_t[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Z1(e,n,i,r)&&(n=null),r||i===null?J1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var _r=Q1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mu=Symbol.for("react.element"),Us=Symbol.for("react.portal"),Bs=Symbol.for("react.fragment"),bm=Symbol.for("react.strict_mode"),$f=Symbol.for("react.profiler"),SE=Symbol.for("react.provider"),AE=Symbol.for("react.context"),Nm=Symbol.for("react.forward_ref"),qf=Symbol.for("react.suspense"),Wf=Symbol.for("react.suspense_list"),Dm=Symbol.for("react.memo"),xr=Symbol.for("react.lazy"),RE=Symbol.for("react.offscreen"),rv=Symbol.iterator;function pa(t){return t===null||typeof t!="object"?null:(t=rv&&t[rv]||t["@@iterator"],typeof t=="function"?t:null)}var De=Object.assign,Xd;function Na(t){if(Xd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xd=e&&e[1]||""}return`
`+Xd+t}var Zd=!1;function ef(t,e){if(!t||Zd)return"";Zd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Zd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Na(t):""}function eC(t){switch(t.tag){case 5:return Na(t.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return t=ef(t.type,!1),t;case 11:return t=ef(t.type.render,!1),t;case 1:return t=ef(t.type,!0),t;default:return""}}function Gf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bs:return"Fragment";case Us:return"Portal";case $f:return"Profiler";case bm:return"StrictMode";case qf:return"Suspense";case Wf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case AE:return(t.displayName||"Context")+".Consumer";case SE:return(t._context.displayName||"Context")+".Provider";case Nm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dm:return e=t.displayName||null,e!==null?e:Gf(t.type)||"Memo";case xr:e=t._payload,t=t._init;try{return Gf(t(e))}catch{}}return null}function tC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gf(e);case 8:return e===bm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ni(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function PE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function nC(t){var e=PE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fu(t){t._valueTracker||(t._valueTracker=nC(t))}function CE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=PE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Oc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Kf(t,e){var n=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function iv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ni(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function kE(t,e){e=e.checked,e!=null&&km(t,"checked",e,!1)}function Hf(t,e){kE(t,e);var n=ni(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Qf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Qf(t,e.type,ni(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function sv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Qf(t,e,n){(e!=="number"||Oc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Da=Array.isArray;function Xs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ni(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Yf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ov(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(Da(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ni(n)}}function bE(t,e){var n=ni(e.value),r=ni(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function av(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function NE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?NE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Uu,DE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Uu=Uu||document.createElement("div"),Uu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Uu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ul(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var $a={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rC=["Webkit","ms","Moz","O"];Object.keys($a).forEach(function(t){rC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),$a[e]=$a[t]})});function xE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||$a.hasOwnProperty(t)&&$a[t]?(""+e).trim():e+"px"}function VE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var iC=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xf(t,e){if(e){if(iC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Zf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ep=null;function xm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var tp=null,Zs=null,eo=null;function lv(t){if(t=Yl(t)){if(typeof tp!="function")throw Error(B(280));var e=t.stateNode;e&&(e=Dh(e),tp(t.stateNode,t.type,e))}}function OE(t){Zs?eo?eo.push(t):eo=[t]:Zs=t}function LE(){if(Zs){var t=Zs,e=eo;if(eo=Zs=null,lv(t),e)for(t=0;t<e.length;t++)lv(e[t])}}function ME(t,e){return t(e)}function FE(){}var tf=!1;function UE(t,e,n){if(tf)return t(e,n);tf=!0;try{return ME(t,e,n)}finally{tf=!1,(Zs!==null||eo!==null)&&(FE(),LE())}}function cl(t,e){var n=t.stateNode;if(n===null)return null;var r=Dh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var np=!1;if(ur)try{var ma={};Object.defineProperty(ma,"passive",{get:function(){np=!0}}),window.addEventListener("test",ma,ma),window.removeEventListener("test",ma,ma)}catch{np=!1}function sC(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var qa=!1,Lc=null,Mc=!1,rp=null,oC={onError:function(t){qa=!0,Lc=t}};function aC(t,e,n,r,i,s,o,a,u){qa=!1,Lc=null,sC.apply(oC,arguments)}function lC(t,e,n,r,i,s,o,a,u){if(aC.apply(this,arguments),qa){if(qa){var c=Lc;qa=!1,Lc=null}else throw Error(B(198));Mc||(Mc=!0,rp=c)}}function ps(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function BE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function uv(t){if(ps(t)!==t)throw Error(B(188))}function uC(t){var e=t.alternate;if(!e){if(e=ps(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return uv(i),t;if(s===r)return uv(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function jE(t){return t=uC(t),t!==null?zE(t):null}function zE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=zE(t);if(e!==null)return e;t=t.sibling}return null}var $E=rn.unstable_scheduleCallback,cv=rn.unstable_cancelCallback,cC=rn.unstable_shouldYield,hC=rn.unstable_requestPaint,qe=rn.unstable_now,dC=rn.unstable_getCurrentPriorityLevel,Vm=rn.unstable_ImmediatePriority,qE=rn.unstable_UserBlockingPriority,Fc=rn.unstable_NormalPriority,fC=rn.unstable_LowPriority,WE=rn.unstable_IdlePriority,Ch=null,Bn=null;function pC(t){if(Bn&&typeof Bn.onCommitFiberRoot=="function")try{Bn.onCommitFiberRoot(Ch,t,void 0,(t.current.flags&128)===128)}catch{}}var Tn=Math.clz32?Math.clz32:_C,mC=Math.log,gC=Math.LN2;function _C(t){return t>>>=0,t===0?32:31-(mC(t)/gC|0)|0}var Bu=64,ju=4194304;function xa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Uc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=xa(a):(s&=o,s!==0&&(r=xa(s)))}else o=n&~i,o!==0?r=xa(o):s!==0&&(r=xa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Tn(e),i=1<<n,r|=t[n],e&=~i;return r}function yC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Tn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=yC(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function ip(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function GE(){var t=Bu;return Bu<<=1,!(Bu&4194240)&&(Bu=64),t}function nf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Hl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Tn(e),t[e]=n}function wC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Tn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Om(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Tn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function KE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var HE,Lm,QE,YE,JE,sp=!1,zu=[],Wr=null,Gr=null,Kr=null,hl=new Map,dl=new Map,Or=[],IC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hv(t,e){switch(t){case"focusin":case"focusout":Wr=null;break;case"dragenter":case"dragleave":Gr=null;break;case"mouseover":case"mouseout":Kr=null;break;case"pointerover":case"pointerout":hl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":dl.delete(e.pointerId)}}function ga(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Yl(e),e!==null&&Lm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function EC(t,e,n,r,i){switch(e){case"focusin":return Wr=ga(Wr,t,e,n,r,i),!0;case"dragenter":return Gr=ga(Gr,t,e,n,r,i),!0;case"mouseover":return Kr=ga(Kr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return hl.set(s,ga(hl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,dl.set(s,ga(dl.get(s)||null,t,e,n,r,i)),!0}return!1}function XE(t){var e=Mi(t.target);if(e!==null){var n=ps(e);if(n!==null){if(e=n.tag,e===13){if(e=BE(n),e!==null){t.blockedOn=e,JE(t.priority,function(){QE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function dc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=op(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ep=r,n.target.dispatchEvent(r),ep=null}else return e=Yl(n),e!==null&&Lm(e),t.blockedOn=n,!1;e.shift()}return!0}function dv(t,e,n){dc(t)&&n.delete(e)}function TC(){sp=!1,Wr!==null&&dc(Wr)&&(Wr=null),Gr!==null&&dc(Gr)&&(Gr=null),Kr!==null&&dc(Kr)&&(Kr=null),hl.forEach(dv),dl.forEach(dv)}function _a(t,e){t.blockedOn===e&&(t.blockedOn=null,sp||(sp=!0,rn.unstable_scheduleCallback(rn.unstable_NormalPriority,TC)))}function fl(t){function e(i){return _a(i,t)}if(0<zu.length){_a(zu[0],t);for(var n=1;n<zu.length;n++){var r=zu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Wr!==null&&_a(Wr,t),Gr!==null&&_a(Gr,t),Kr!==null&&_a(Kr,t),hl.forEach(e),dl.forEach(e),n=0;n<Or.length;n++)r=Or[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Or.length&&(n=Or[0],n.blockedOn===null);)XE(n),n.blockedOn===null&&Or.shift()}var to=_r.ReactCurrentBatchConfig,Bc=!0;function SC(t,e,n,r){var i=de,s=to.transition;to.transition=null;try{de=1,Mm(t,e,n,r)}finally{de=i,to.transition=s}}function AC(t,e,n,r){var i=de,s=to.transition;to.transition=null;try{de=4,Mm(t,e,n,r)}finally{de=i,to.transition=s}}function Mm(t,e,n,r){if(Bc){var i=op(t,e,n,r);if(i===null)ff(t,e,r,jc,n),hv(t,r);else if(EC(i,t,e,n,r))r.stopPropagation();else if(hv(t,r),e&4&&-1<IC.indexOf(t)){for(;i!==null;){var s=Yl(i);if(s!==null&&HE(s),s=op(t,e,n,r),s===null&&ff(t,e,r,jc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ff(t,e,r,null,n)}}var jc=null;function op(t,e,n,r){if(jc=null,t=xm(r),t=Mi(t),t!==null)if(e=ps(t),e===null)t=null;else if(n=e.tag,n===13){if(t=BE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return jc=t,null}function ZE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dC()){case Vm:return 1;case qE:return 4;case Fc:case fC:return 16;case WE:return 536870912;default:return 16}default:return 16}}var Br=null,Fm=null,fc=null;function eT(){if(fc)return fc;var t,e=Fm,n=e.length,r,i="value"in Br?Br.value:Br.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return fc=i.slice(t,1<r?1-r:void 0)}function pc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $u(){return!0}function fv(){return!1}function an(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$u:fv,this.isPropagationStopped=fv,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$u)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$u)},persist:function(){},isPersistent:$u}),e}var Fo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Um=an(Fo),Ql=De({},Fo,{view:0,detail:0}),RC=an(Ql),rf,sf,ya,kh=De({},Ql,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ya&&(ya&&t.type==="mousemove"?(rf=t.screenX-ya.screenX,sf=t.screenY-ya.screenY):sf=rf=0,ya=t),rf)},movementY:function(t){return"movementY"in t?t.movementY:sf}}),pv=an(kh),PC=De({},kh,{dataTransfer:0}),CC=an(PC),kC=De({},Ql,{relatedTarget:0}),of=an(kC),bC=De({},Fo,{animationName:0,elapsedTime:0,pseudoElement:0}),NC=an(bC),DC=De({},Fo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xC=an(DC),VC=De({},Fo,{data:0}),mv=an(VC),OC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},LC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function FC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=MC[t])?!!e[t]:!1}function Bm(){return FC}var UC=De({},Ql,{key:function(t){if(t.key){var e=OC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?LC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bm,charCode:function(t){return t.type==="keypress"?pc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),BC=an(UC),jC=De({},kh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gv=an(jC),zC=De({},Ql,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bm}),$C=an(zC),qC=De({},Fo,{propertyName:0,elapsedTime:0,pseudoElement:0}),WC=an(qC),GC=De({},kh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),KC=an(GC),HC=[9,13,27,32],jm=ur&&"CompositionEvent"in window,Wa=null;ur&&"documentMode"in document&&(Wa=document.documentMode);var QC=ur&&"TextEvent"in window&&!Wa,tT=ur&&(!jm||Wa&&8<Wa&&11>=Wa),_v=" ",yv=!1;function nT(t,e){switch(t){case"keyup":return HC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var js=!1;function YC(t,e){switch(t){case"compositionend":return rT(e);case"keypress":return e.which!==32?null:(yv=!0,_v);case"textInput":return t=e.data,t===_v&&yv?null:t;default:return null}}function JC(t,e){if(js)return t==="compositionend"||!jm&&nT(t,e)?(t=eT(),fc=Fm=Br=null,js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return tT&&e.locale!=="ko"?null:e.data;default:return null}}var XC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!XC[t.type]:e==="textarea"}function iT(t,e,n,r){OE(r),e=zc(e,"onChange"),0<e.length&&(n=new Um("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ga=null,pl=null;function ZC(t){mT(t,0)}function bh(t){var e=qs(t);if(CE(e))return t}function ek(t,e){if(t==="change")return e}var sT=!1;if(ur){var af;if(ur){var lf="oninput"in document;if(!lf){var wv=document.createElement("div");wv.setAttribute("oninput","return;"),lf=typeof wv.oninput=="function"}af=lf}else af=!1;sT=af&&(!document.documentMode||9<document.documentMode)}function Iv(){Ga&&(Ga.detachEvent("onpropertychange",oT),pl=Ga=null)}function oT(t){if(t.propertyName==="value"&&bh(pl)){var e=[];iT(e,pl,t,xm(t)),UE(ZC,e)}}function tk(t,e,n){t==="focusin"?(Iv(),Ga=e,pl=n,Ga.attachEvent("onpropertychange",oT)):t==="focusout"&&Iv()}function nk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bh(pl)}function rk(t,e){if(t==="click")return bh(e)}function ik(t,e){if(t==="input"||t==="change")return bh(e)}function sk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var An=typeof Object.is=="function"?Object.is:sk;function ml(t,e){if(An(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!zf.call(e,i)||!An(t[i],e[i]))return!1}return!0}function Ev(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tv(t,e){var n=Ev(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ev(n)}}function aT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?aT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function lT(){for(var t=window,e=Oc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Oc(t.document)}return e}function zm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ok(t){var e=lT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&aT(n.ownerDocument.documentElement,n)){if(r!==null&&zm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Tv(n,s);var o=Tv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ak=ur&&"documentMode"in document&&11>=document.documentMode,zs=null,ap=null,Ka=null,lp=!1;function Sv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lp||zs==null||zs!==Oc(r)||(r=zs,"selectionStart"in r&&zm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ka&&ml(Ka,r)||(Ka=r,r=zc(ap,"onSelect"),0<r.length&&(e=new Um("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=zs)))}function qu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $s={animationend:qu("Animation","AnimationEnd"),animationiteration:qu("Animation","AnimationIteration"),animationstart:qu("Animation","AnimationStart"),transitionend:qu("Transition","TransitionEnd")},uf={},uT={};ur&&(uT=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function Nh(t){if(uf[t])return uf[t];if(!$s[t])return t;var e=$s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in uT)return uf[t]=e[n];return t}var cT=Nh("animationend"),hT=Nh("animationiteration"),dT=Nh("animationstart"),fT=Nh("transitionend"),pT=new Map,Av="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mi(t,e){pT.set(t,e),fs(e,[t])}for(var cf=0;cf<Av.length;cf++){var hf=Av[cf],lk=hf.toLowerCase(),uk=hf[0].toUpperCase()+hf.slice(1);mi(lk,"on"+uk)}mi(cT,"onAnimationEnd");mi(hT,"onAnimationIteration");mi(dT,"onAnimationStart");mi("dblclick","onDoubleClick");mi("focusin","onFocus");mi("focusout","onBlur");mi(fT,"onTransitionEnd");co("onMouseEnter",["mouseout","mouseover"]);co("onMouseLeave",["mouseout","mouseover"]);co("onPointerEnter",["pointerout","pointerover"]);co("onPointerLeave",["pointerout","pointerover"]);fs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fs("onBeforeInput",["compositionend","keypress","textInput","paste"]);fs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ck=new Set("cancel close invalid load scroll toggle".split(" ").concat(Va));function Rv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,lC(r,e,void 0,t),t.currentTarget=null}function mT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Rv(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Rv(i,a,c),s=u}}}if(Mc)throw t=rp,Mc=!1,rp=null,t}function we(t,e){var n=e[fp];n===void 0&&(n=e[fp]=new Set);var r=t+"__bubble";n.has(r)||(gT(e,t,2,!1),n.add(r))}function df(t,e,n){var r=0;e&&(r|=4),gT(n,t,r,e)}var Wu="_reactListening"+Math.random().toString(36).slice(2);function gl(t){if(!t[Wu]){t[Wu]=!0,TE.forEach(function(n){n!=="selectionchange"&&(ck.has(n)||df(n,!1,t),df(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Wu]||(e[Wu]=!0,df("selectionchange",!1,e))}}function gT(t,e,n,r){switch(ZE(e)){case 1:var i=SC;break;case 4:i=AC;break;default:i=Mm}n=i.bind(null,e,n,t),i=void 0,!np||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ff(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Mi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}UE(function(){var c=s,d=xm(n),f=[];e:{var m=pT.get(t);if(m!==void 0){var v=Um,R=t;switch(t){case"keypress":if(pc(n)===0)break e;case"keydown":case"keyup":v=BC;break;case"focusin":R="focus",v=of;break;case"focusout":R="blur",v=of;break;case"beforeblur":case"afterblur":v=of;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=pv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=CC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=$C;break;case cT:case hT:case dT:v=NC;break;case fT:v=WC;break;case"scroll":v=RC;break;case"wheel":v=KC;break;case"copy":case"cut":case"paste":v=xC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=gv}var P=(e&4)!==0,b=!P&&t==="scroll",E=P?m!==null?m+"Capture":null:m;P=[];for(var _=c,w;_!==null;){w=_;var D=w.stateNode;if(w.tag===5&&D!==null&&(w=D,E!==null&&(D=cl(_,E),D!=null&&P.push(_l(_,D,w)))),b)break;_=_.return}0<P.length&&(m=new v(m,R,null,n,d),f.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&n!==ep&&(R=n.relatedTarget||n.fromElement)&&(Mi(R)||R[cr]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(R=n.relatedTarget||n.toElement,v=c,R=R?Mi(R):null,R!==null&&(b=ps(R),R!==b||R.tag!==5&&R.tag!==6)&&(R=null)):(v=null,R=c),v!==R)){if(P=pv,D="onMouseLeave",E="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(P=gv,D="onPointerLeave",E="onPointerEnter",_="pointer"),b=v==null?m:qs(v),w=R==null?m:qs(R),m=new P(D,_+"leave",v,n,d),m.target=b,m.relatedTarget=w,D=null,Mi(d)===c&&(P=new P(E,_+"enter",R,n,d),P.target=w,P.relatedTarget=b,D=P),b=D,v&&R)t:{for(P=v,E=R,_=0,w=P;w;w=Cs(w))_++;for(w=0,D=E;D;D=Cs(D))w++;for(;0<_-w;)P=Cs(P),_--;for(;0<w-_;)E=Cs(E),w--;for(;_--;){if(P===E||E!==null&&P===E.alternate)break t;P=Cs(P),E=Cs(E)}P=null}else P=null;v!==null&&Pv(f,m,v,P,!1),R!==null&&b!==null&&Pv(f,b,R,P,!0)}}e:{if(m=c?qs(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var L=ek;else if(vv(m))if(sT)L=ik;else{L=nk;var F=tk}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(L=rk);if(L&&(L=L(t,c))){iT(f,L,n,d);break e}F&&F(t,m,c),t==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&Qf(m,"number",m.value)}switch(F=c?qs(c):window,t){case"focusin":(vv(F)||F.contentEditable==="true")&&(zs=F,ap=c,Ka=null);break;case"focusout":Ka=ap=zs=null;break;case"mousedown":lp=!0;break;case"contextmenu":case"mouseup":case"dragend":lp=!1,Sv(f,n,d);break;case"selectionchange":if(ak)break;case"keydown":case"keyup":Sv(f,n,d)}var I;if(jm)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else js?nT(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(tT&&n.locale!=="ko"&&(js||y!=="onCompositionStart"?y==="onCompositionEnd"&&js&&(I=eT()):(Br=d,Fm="value"in Br?Br.value:Br.textContent,js=!0)),F=zc(c,y),0<F.length&&(y=new mv(y,t,null,n,d),f.push({event:y,listeners:F}),I?y.data=I:(I=rT(n),I!==null&&(y.data=I)))),(I=QC?YC(t,n):JC(t,n))&&(c=zc(c,"onBeforeInput"),0<c.length&&(d=new mv("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=I))}mT(f,e)})}function _l(t,e,n){return{instance:t,listener:e,currentTarget:n}}function zc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=cl(t,n),s!=null&&r.unshift(_l(t,s,i)),s=cl(t,e),s!=null&&r.push(_l(t,s,i))),t=t.return}return r}function Cs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Pv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=cl(n,s),u!=null&&o.unshift(_l(n,u,a))):i||(u=cl(n,s),u!=null&&o.push(_l(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var hk=/\r\n?/g,dk=/\u0000|\uFFFD/g;function Cv(t){return(typeof t=="string"?t:""+t).replace(hk,`
`).replace(dk,"")}function Gu(t,e,n){if(e=Cv(e),Cv(t)!==e&&n)throw Error(B(425))}function $c(){}var up=null,cp=null;function hp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var dp=typeof setTimeout=="function"?setTimeout:void 0,fk=typeof clearTimeout=="function"?clearTimeout:void 0,kv=typeof Promise=="function"?Promise:void 0,pk=typeof queueMicrotask=="function"?queueMicrotask:typeof kv<"u"?function(t){return kv.resolve(null).then(t).catch(mk)}:dp;function mk(t){setTimeout(function(){throw t})}function pf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),fl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);fl(e)}function Hr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function bv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Uo=Math.random().toString(36).slice(2),Nn="__reactFiber$"+Uo,yl="__reactProps$"+Uo,cr="__reactContainer$"+Uo,fp="__reactEvents$"+Uo,gk="__reactListeners$"+Uo,_k="__reactHandles$"+Uo;function Mi(t){var e=t[Nn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[cr]||n[Nn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=bv(t);t!==null;){if(n=t[Nn])return n;t=bv(t)}return e}t=n,n=t.parentNode}return null}function Yl(t){return t=t[Nn]||t[cr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Dh(t){return t[yl]||null}var pp=[],Ws=-1;function gi(t){return{current:t}}function Ee(t){0>Ws||(t.current=pp[Ws],pp[Ws]=null,Ws--)}function _e(t,e){Ws++,pp[Ws]=t.current,t.current=e}var ri={},Rt=gi(ri),Gt=gi(!1),Qi=ri;function ho(t,e){var n=t.type.contextTypes;if(!n)return ri;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Kt(t){return t=t.childContextTypes,t!=null}function qc(){Ee(Gt),Ee(Rt)}function Nv(t,e,n){if(Rt.current!==ri)throw Error(B(168));_e(Rt,e),_e(Gt,n)}function _T(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,tC(t)||"Unknown",i));return De({},n,r)}function Wc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ri,Qi=Rt.current,_e(Rt,t),_e(Gt,Gt.current),!0}function Dv(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=_T(t,e,Qi),r.__reactInternalMemoizedMergedChildContext=t,Ee(Gt),Ee(Rt),_e(Rt,t)):Ee(Gt),_e(Gt,n)}var tr=null,xh=!1,mf=!1;function yT(t){tr===null?tr=[t]:tr.push(t)}function yk(t){xh=!0,yT(t)}function _i(){if(!mf&&tr!==null){mf=!0;var t=0,e=de;try{var n=tr;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}tr=null,xh=!1}catch(i){throw tr!==null&&(tr=tr.slice(t+1)),$E(Vm,_i),i}finally{de=e,mf=!1}}return null}var Gs=[],Ks=0,Gc=null,Kc=0,ln=[],un=0,Yi=null,nr=1,rr="";function Ci(t,e){Gs[Ks++]=Kc,Gs[Ks++]=Gc,Gc=t,Kc=e}function vT(t,e,n){ln[un++]=nr,ln[un++]=rr,ln[un++]=Yi,Yi=t;var r=nr;t=rr;var i=32-Tn(r)-1;r&=~(1<<i),n+=1;var s=32-Tn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,nr=1<<32-Tn(e)+i|n<<i|r,rr=s+t}else nr=1<<s|n<<i|r,rr=t}function $m(t){t.return!==null&&(Ci(t,1),vT(t,1,0))}function qm(t){for(;t===Gc;)Gc=Gs[--Ks],Gs[Ks]=null,Kc=Gs[--Ks],Gs[Ks]=null;for(;t===Yi;)Yi=ln[--un],ln[un]=null,rr=ln[--un],ln[un]=null,nr=ln[--un],ln[un]=null}var tn=null,Xt=null,Te=!1,En=null;function wT(t,e){var n=cn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function xv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,tn=t,Xt=Hr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,tn=t,Xt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yi!==null?{id:nr,overflow:rr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=cn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,tn=t,Xt=null,!0):!1;default:return!1}}function mp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gp(t){if(Te){var e=Xt;if(e){var n=e;if(!xv(t,e)){if(mp(t))throw Error(B(418));e=Hr(n.nextSibling);var r=tn;e&&xv(t,e)?wT(r,n):(t.flags=t.flags&-4097|2,Te=!1,tn=t)}}else{if(mp(t))throw Error(B(418));t.flags=t.flags&-4097|2,Te=!1,tn=t}}}function Vv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;tn=t}function Ku(t){if(t!==tn)return!1;if(!Te)return Vv(t),Te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hp(t.type,t.memoizedProps)),e&&(e=Xt)){if(mp(t))throw IT(),Error(B(418));for(;e;)wT(t,e),e=Hr(e.nextSibling)}if(Vv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Xt=Hr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Xt=null}}else Xt=tn?Hr(t.stateNode.nextSibling):null;return!0}function IT(){for(var t=Xt;t;)t=Hr(t.nextSibling)}function fo(){Xt=tn=null,Te=!1}function Wm(t){En===null?En=[t]:En.push(t)}var vk=_r.ReactCurrentBatchConfig;function va(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function Hu(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ov(t){var e=t._init;return e(t._payload)}function ET(t){function e(E,_){if(t){var w=E.deletions;w===null?(E.deletions=[_],E.flags|=16):w.push(_)}}function n(E,_){if(!t)return null;for(;_!==null;)e(E,_),_=_.sibling;return null}function r(E,_){for(E=new Map;_!==null;)_.key!==null?E.set(_.key,_):E.set(_.index,_),_=_.sibling;return E}function i(E,_){return E=Xr(E,_),E.index=0,E.sibling=null,E}function s(E,_,w){return E.index=w,t?(w=E.alternate,w!==null?(w=w.index,w<_?(E.flags|=2,_):w):(E.flags|=2,_)):(E.flags|=1048576,_)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,_,w,D){return _===null||_.tag!==6?(_=Ef(w,E.mode,D),_.return=E,_):(_=i(_,w),_.return=E,_)}function u(E,_,w,D){var L=w.type;return L===Bs?d(E,_,w.props.children,D,w.key):_!==null&&(_.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===xr&&Ov(L)===_.type)?(D=i(_,w.props),D.ref=va(E,_,w),D.return=E,D):(D=Ic(w.type,w.key,w.props,null,E.mode,D),D.ref=va(E,_,w),D.return=E,D)}function c(E,_,w,D){return _===null||_.tag!==4||_.stateNode.containerInfo!==w.containerInfo||_.stateNode.implementation!==w.implementation?(_=Tf(w,E.mode,D),_.return=E,_):(_=i(_,w.children||[]),_.return=E,_)}function d(E,_,w,D,L){return _===null||_.tag!==7?(_=qi(w,E.mode,D,L),_.return=E,_):(_=i(_,w),_.return=E,_)}function f(E,_,w){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Ef(""+_,E.mode,w),_.return=E,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Mu:return w=Ic(_.type,_.key,_.props,null,E.mode,w),w.ref=va(E,null,_),w.return=E,w;case Us:return _=Tf(_,E.mode,w),_.return=E,_;case xr:var D=_._init;return f(E,D(_._payload),w)}if(Da(_)||pa(_))return _=qi(_,E.mode,w,null),_.return=E,_;Hu(E,_)}return null}function m(E,_,w,D){var L=_!==null?_.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return L!==null?null:a(E,_,""+w,D);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Mu:return w.key===L?u(E,_,w,D):null;case Us:return w.key===L?c(E,_,w,D):null;case xr:return L=w._init,m(E,_,L(w._payload),D)}if(Da(w)||pa(w))return L!==null?null:d(E,_,w,D,null);Hu(E,w)}return null}function v(E,_,w,D,L){if(typeof D=="string"&&D!==""||typeof D=="number")return E=E.get(w)||null,a(_,E,""+D,L);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Mu:return E=E.get(D.key===null?w:D.key)||null,u(_,E,D,L);case Us:return E=E.get(D.key===null?w:D.key)||null,c(_,E,D,L);case xr:var F=D._init;return v(E,_,w,F(D._payload),L)}if(Da(D)||pa(D))return E=E.get(w)||null,d(_,E,D,L,null);Hu(_,D)}return null}function R(E,_,w,D){for(var L=null,F=null,I=_,y=_=0,T=null;I!==null&&y<w.length;y++){I.index>y?(T=I,I=null):T=I.sibling;var A=m(E,I,w[y],D);if(A===null){I===null&&(I=T);break}t&&I&&A.alternate===null&&e(E,I),_=s(A,_,y),F===null?L=A:F.sibling=A,F=A,I=T}if(y===w.length)return n(E,I),Te&&Ci(E,y),L;if(I===null){for(;y<w.length;y++)I=f(E,w[y],D),I!==null&&(_=s(I,_,y),F===null?L=I:F.sibling=I,F=I);return Te&&Ci(E,y),L}for(I=r(E,I);y<w.length;y++)T=v(I,E,y,w[y],D),T!==null&&(t&&T.alternate!==null&&I.delete(T.key===null?y:T.key),_=s(T,_,y),F===null?L=T:F.sibling=T,F=T);return t&&I.forEach(function(k){return e(E,k)}),Te&&Ci(E,y),L}function P(E,_,w,D){var L=pa(w);if(typeof L!="function")throw Error(B(150));if(w=L.call(w),w==null)throw Error(B(151));for(var F=L=null,I=_,y=_=0,T=null,A=w.next();I!==null&&!A.done;y++,A=w.next()){I.index>y?(T=I,I=null):T=I.sibling;var k=m(E,I,A.value,D);if(k===null){I===null&&(I=T);break}t&&I&&k.alternate===null&&e(E,I),_=s(k,_,y),F===null?L=k:F.sibling=k,F=k,I=T}if(A.done)return n(E,I),Te&&Ci(E,y),L;if(I===null){for(;!A.done;y++,A=w.next())A=f(E,A.value,D),A!==null&&(_=s(A,_,y),F===null?L=A:F.sibling=A,F=A);return Te&&Ci(E,y),L}for(I=r(E,I);!A.done;y++,A=w.next())A=v(I,E,y,A.value,D),A!==null&&(t&&A.alternate!==null&&I.delete(A.key===null?y:A.key),_=s(A,_,y),F===null?L=A:F.sibling=A,F=A);return t&&I.forEach(function(C){return e(E,C)}),Te&&Ci(E,y),L}function b(E,_,w,D){if(typeof w=="object"&&w!==null&&w.type===Bs&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Mu:e:{for(var L=w.key,F=_;F!==null;){if(F.key===L){if(L=w.type,L===Bs){if(F.tag===7){n(E,F.sibling),_=i(F,w.props.children),_.return=E,E=_;break e}}else if(F.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===xr&&Ov(L)===F.type){n(E,F.sibling),_=i(F,w.props),_.ref=va(E,F,w),_.return=E,E=_;break e}n(E,F);break}else e(E,F);F=F.sibling}w.type===Bs?(_=qi(w.props.children,E.mode,D,w.key),_.return=E,E=_):(D=Ic(w.type,w.key,w.props,null,E.mode,D),D.ref=va(E,_,w),D.return=E,E=D)}return o(E);case Us:e:{for(F=w.key;_!==null;){if(_.key===F)if(_.tag===4&&_.stateNode.containerInfo===w.containerInfo&&_.stateNode.implementation===w.implementation){n(E,_.sibling),_=i(_,w.children||[]),_.return=E,E=_;break e}else{n(E,_);break}else e(E,_);_=_.sibling}_=Tf(w,E.mode,D),_.return=E,E=_}return o(E);case xr:return F=w._init,b(E,_,F(w._payload),D)}if(Da(w))return R(E,_,w,D);if(pa(w))return P(E,_,w,D);Hu(E,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,_!==null&&_.tag===6?(n(E,_.sibling),_=i(_,w),_.return=E,E=_):(n(E,_),_=Ef(w,E.mode,D),_.return=E,E=_),o(E)):n(E,_)}return b}var po=ET(!0),TT=ET(!1),Hc=gi(null),Qc=null,Hs=null,Gm=null;function Km(){Gm=Hs=Qc=null}function Hm(t){var e=Hc.current;Ee(Hc),t._currentValue=e}function _p(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function no(t,e){Qc=t,Gm=Hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(zt=!0),t.firstContext=null)}function pn(t){var e=t._currentValue;if(Gm!==t)if(t={context:t,memoizedValue:e,next:null},Hs===null){if(Qc===null)throw Error(B(308));Hs=t,Qc.dependencies={lanes:0,firstContext:t}}else Hs=Hs.next=t;return e}var Fi=null;function Qm(t){Fi===null?Fi=[t]:Fi.push(t)}function ST(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Qm(e)):(n.next=i.next,i.next=n),e.interleaved=n,hr(t,r)}function hr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vr=!1;function Ym(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function AT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ar(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,hr(t,n)}return i=r.interleaved,i===null?(e.next=e,Qm(r)):(e.next=i.next,i.next=e),r.interleaved=e,hr(t,n)}function mc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Om(t,n)}}function Lv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yc(t,e,n,r){var i=t.updateQueue;Vr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,a=s;do{var m=a.lane,v=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var R=t,P=a;switch(m=e,v=n,P.tag){case 1:if(R=P.payload,typeof R=="function"){f=R.call(v,f,m);break e}f=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=P.payload,m=typeof R=="function"?R.call(v,f,m):R,m==null)break e;f=De({},f,m);break e;case 2:Vr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=v,u=f):d=d.next=v,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Xi|=o,t.lanes=o,t.memoizedState=f}}function Mv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var Jl={},jn=gi(Jl),vl=gi(Jl),wl=gi(Jl);function Ui(t){if(t===Jl)throw Error(B(174));return t}function Jm(t,e){switch(_e(wl,e),_e(vl,t),_e(jn,Jl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Jf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Jf(e,t)}Ee(jn),_e(jn,e)}function mo(){Ee(jn),Ee(vl),Ee(wl)}function RT(t){Ui(wl.current);var e=Ui(jn.current),n=Jf(e,t.type);e!==n&&(_e(vl,t),_e(jn,n))}function Xm(t){vl.current===t&&(Ee(jn),Ee(vl))}var ke=gi(0);function Jc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gf=[];function Zm(){for(var t=0;t<gf.length;t++)gf[t]._workInProgressVersionPrimary=null;gf.length=0}var gc=_r.ReactCurrentDispatcher,_f=_r.ReactCurrentBatchConfig,Ji=0,be=null,Je=null,rt=null,Xc=!1,Ha=!1,Il=0,wk=0;function It(){throw Error(B(321))}function eg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!An(t[n],e[n]))return!1;return!0}function tg(t,e,n,r,i,s){if(Ji=s,be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gc.current=t===null||t.memoizedState===null?Sk:Ak,t=n(r,i),Ha){s=0;do{if(Ha=!1,Il=0,25<=s)throw Error(B(301));s+=1,rt=Je=null,e.updateQueue=null,gc.current=Rk,t=n(r,i)}while(Ha)}if(gc.current=Zc,e=Je!==null&&Je.next!==null,Ji=0,rt=Je=be=null,Xc=!1,e)throw Error(B(300));return t}function ng(){var t=Il!==0;return Il=0,t}function bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?be.memoizedState=rt=t:rt=rt.next=t,rt}function mn(){if(Je===null){var t=be.alternate;t=t!==null?t.memoizedState:null}else t=Je.next;var e=rt===null?be.memoizedState:rt.next;if(e!==null)rt=e,Je=t;else{if(t===null)throw Error(B(310));Je=t,t={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},rt===null?be.memoizedState=rt=t:rt=rt.next=t}return rt}function El(t,e){return typeof e=="function"?e(t):e}function yf(t){var e=mn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=Je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((Ji&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,be.lanes|=d,Xi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,An(r,e.memoizedState)||(zt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,be.lanes|=s,Xi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function vf(t){var e=mn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);An(s,e.memoizedState)||(zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function PT(){}function CT(t,e){var n=be,r=mn(),i=e(),s=!An(r.memoizedState,i);if(s&&(r.memoizedState=i,zt=!0),r=r.queue,rg(NT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||rt!==null&&rt.memoizedState.tag&1){if(n.flags|=2048,Tl(9,bT.bind(null,n,r,i,e),void 0,null),st===null)throw Error(B(349));Ji&30||kT(n,e,i)}return i}function kT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function bT(t,e,n,r){e.value=n,e.getSnapshot=r,DT(e)&&xT(t)}function NT(t,e,n){return n(function(){DT(e)&&xT(t)})}function DT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!An(t,n)}catch{return!0}}function xT(t){var e=hr(t,1);e!==null&&Sn(e,t,1,-1)}function Fv(t){var e=bn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:El,lastRenderedState:t},e.queue=t,t=t.dispatch=Tk.bind(null,be,t),[e.memoizedState,t]}function Tl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function VT(){return mn().memoizedState}function _c(t,e,n,r){var i=bn();be.flags|=t,i.memoizedState=Tl(1|e,n,void 0,r===void 0?null:r)}function Vh(t,e,n,r){var i=mn();r=r===void 0?null:r;var s=void 0;if(Je!==null){var o=Je.memoizedState;if(s=o.destroy,r!==null&&eg(r,o.deps)){i.memoizedState=Tl(e,n,s,r);return}}be.flags|=t,i.memoizedState=Tl(1|e,n,s,r)}function Uv(t,e){return _c(8390656,8,t,e)}function rg(t,e){return Vh(2048,8,t,e)}function OT(t,e){return Vh(4,2,t,e)}function LT(t,e){return Vh(4,4,t,e)}function MT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function FT(t,e,n){return n=n!=null?n.concat([t]):null,Vh(4,4,MT.bind(null,e,t),n)}function ig(){}function UT(t,e){var n=mn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&eg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function BT(t,e){var n=mn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&eg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function jT(t,e,n){return Ji&21?(An(n,e)||(n=GE(),be.lanes|=n,Xi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,zt=!0),t.memoizedState=n)}function Ik(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=_f.transition;_f.transition={};try{t(!1),e()}finally{de=n,_f.transition=r}}function zT(){return mn().memoizedState}function Ek(t,e,n){var r=Jr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$T(t))qT(e,n);else if(n=ST(t,e,n,r),n!==null){var i=xt();Sn(n,t,r,i),WT(n,e,r)}}function Tk(t,e,n){var r=Jr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($T(t))qT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,An(a,o)){var u=e.interleaved;u===null?(i.next=i,Qm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=ST(t,e,i,r),n!==null&&(i=xt(),Sn(n,t,r,i),WT(n,e,r))}}function $T(t){var e=t.alternate;return t===be||e!==null&&e===be}function qT(t,e){Ha=Xc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function WT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Om(t,n)}}var Zc={readContext:pn,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},Sk={readContext:pn,useCallback:function(t,e){return bn().memoizedState=[t,e===void 0?null:e],t},useContext:pn,useEffect:Uv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_c(4194308,4,MT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _c(4194308,4,t,e)},useInsertionEffect:function(t,e){return _c(4,2,t,e)},useMemo:function(t,e){var n=bn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=bn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Ek.bind(null,be,t),[r.memoizedState,t]},useRef:function(t){var e=bn();return t={current:t},e.memoizedState=t},useState:Fv,useDebugValue:ig,useDeferredValue:function(t){return bn().memoizedState=t},useTransition:function(){var t=Fv(!1),e=t[0];return t=Ik.bind(null,t[1]),bn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=be,i=bn();if(Te){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),st===null)throw Error(B(349));Ji&30||kT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Uv(NT.bind(null,r,s,t),[t]),r.flags|=2048,Tl(9,bT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=bn(),e=st.identifierPrefix;if(Te){var n=rr,r=nr;n=(r&~(1<<32-Tn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Il++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=wk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ak={readContext:pn,useCallback:UT,useContext:pn,useEffect:rg,useImperativeHandle:FT,useInsertionEffect:OT,useLayoutEffect:LT,useMemo:BT,useReducer:yf,useRef:VT,useState:function(){return yf(El)},useDebugValue:ig,useDeferredValue:function(t){var e=mn();return jT(e,Je.memoizedState,t)},useTransition:function(){var t=yf(El)[0],e=mn().memoizedState;return[t,e]},useMutableSource:PT,useSyncExternalStore:CT,useId:zT,unstable_isNewReconciler:!1},Rk={readContext:pn,useCallback:UT,useContext:pn,useEffect:rg,useImperativeHandle:FT,useInsertionEffect:OT,useLayoutEffect:LT,useMemo:BT,useReducer:vf,useRef:VT,useState:function(){return vf(El)},useDebugValue:ig,useDeferredValue:function(t){var e=mn();return Je===null?e.memoizedState=t:jT(e,Je.memoizedState,t)},useTransition:function(){var t=vf(El)[0],e=mn().memoizedState;return[t,e]},useMutableSource:PT,useSyncExternalStore:CT,useId:zT,unstable_isNewReconciler:!1};function wn(t,e){if(t&&t.defaultProps){e=De({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function yp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:De({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Oh={isMounted:function(t){return(t=t._reactInternals)?ps(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=xt(),i=Jr(t),s=ar(r,i);s.payload=e,n!=null&&(s.callback=n),e=Qr(t,s,i),e!==null&&(Sn(e,t,i,r),mc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=xt(),i=Jr(t),s=ar(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Qr(t,s,i),e!==null&&(Sn(e,t,i,r),mc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xt(),r=Jr(t),i=ar(n,r);i.tag=2,e!=null&&(i.callback=e),e=Qr(t,i,r),e!==null&&(Sn(e,t,r,n),mc(e,t,r))}};function Bv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ml(n,r)||!ml(i,s):!0}function GT(t,e,n){var r=!1,i=ri,s=e.contextType;return typeof s=="object"&&s!==null?s=pn(s):(i=Kt(e)?Qi:Rt.current,r=e.contextTypes,s=(r=r!=null)?ho(t,i):ri),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Oh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function jv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Oh.enqueueReplaceState(e,e.state,null)}function vp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ym(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=pn(s):(s=Kt(e)?Qi:Rt.current,i.context=ho(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(yp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Oh.enqueueReplaceState(i,i.state,null),Yc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function go(t,e){try{var n="",r=e;do n+=eC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function wf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function wp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Pk=typeof WeakMap=="function"?WeakMap:Map;function KT(t,e,n){n=ar(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){th||(th=!0,bp=r),wp(t,e)},n}function HT(t,e,n){n=ar(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){wp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wp(t,e),typeof r!="function"&&(Yr===null?Yr=new Set([this]):Yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function zv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Pk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=jk.bind(null,t,e,n),e.then(t,t))}function $v(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ar(-1,1),e.tag=2,Qr(n,e,1))),n.lanes|=1),t)}var Ck=_r.ReactCurrentOwner,zt=!1;function bt(t,e,n,r){e.child=t===null?TT(e,null,n,r):po(e,t.child,n,r)}function Wv(t,e,n,r,i){n=n.render;var s=e.ref;return no(e,i),r=tg(t,e,n,r,s,i),n=ng(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,dr(t,e,i)):(Te&&n&&$m(e),e.flags|=1,bt(t,e,r,i),e.child)}function Gv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!dg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,QT(t,e,s,r,i)):(t=Ic(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ml,n(o,r)&&t.ref===e.ref)return dr(t,e,i)}return e.flags|=1,t=Xr(s,r),t.ref=e.ref,t.return=e,e.child=t}function QT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ml(s,r)&&t.ref===e.ref)if(zt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(zt=!0);else return e.lanes=t.lanes,dr(t,e,i)}return Ip(t,e,n,r,i)}function YT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Ys,Yt),Yt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(Ys,Yt),Yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(Ys,Yt),Yt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,_e(Ys,Yt),Yt|=r;return bt(t,e,i,n),e.child}function JT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ip(t,e,n,r,i){var s=Kt(n)?Qi:Rt.current;return s=ho(e,s),no(e,i),n=tg(t,e,n,r,s,i),r=ng(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,dr(t,e,i)):(Te&&r&&$m(e),e.flags|=1,bt(t,e,n,i),e.child)}function Kv(t,e,n,r,i){if(Kt(n)){var s=!0;Wc(e)}else s=!1;if(no(e,i),e.stateNode===null)yc(t,e),GT(e,n,r),vp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=pn(c):(c=Kt(n)?Qi:Rt.current,c=ho(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&jv(e,o,r,c),Vr=!1;var m=e.memoizedState;o.state=m,Yc(e,r,o,i),u=e.memoizedState,a!==r||m!==u||Gt.current||Vr?(typeof d=="function"&&(yp(e,n,d,r),u=e.memoizedState),(a=Vr||Bv(e,n,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,AT(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:wn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=pn(u):(u=Kt(n)?Qi:Rt.current,u=ho(e,u));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&jv(e,o,r,u),Vr=!1,m=e.memoizedState,o.state=m,Yc(e,r,o,i);var R=e.memoizedState;a!==f||m!==R||Gt.current||Vr?(typeof v=="function"&&(yp(e,n,v,r),R=e.memoizedState),(c=Vr||Bv(e,n,c,r,m,R,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Ep(t,e,n,r,s,i)}function Ep(t,e,n,r,i,s){JT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Dv(e,n,!1),dr(t,e,s);r=e.stateNode,Ck.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=po(e,t.child,null,s),e.child=po(e,null,a,s)):bt(t,e,a,s),e.memoizedState=r.state,i&&Dv(e,n,!0),e.child}function XT(t){var e=t.stateNode;e.pendingContext?Nv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Nv(t,e.context,!1),Jm(t,e.containerInfo)}function Hv(t,e,n,r,i){return fo(),Wm(i),e.flags|=256,bt(t,e,n,r),e.child}var Tp={dehydrated:null,treeContext:null,retryLane:0};function Sp(t){return{baseLanes:t,cachePool:null,transitions:null}}function ZT(t,e,n){var r=e.pendingProps,i=ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(ke,i&1),t===null)return gp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Fh(o,r,0,null),t=qi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sp(n),e.memoizedState=Tp,t):sg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return kk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Xr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Xr(a,s):(s=qi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Sp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Tp,r}return s=t.child,t=s.sibling,r=Xr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function sg(t,e){return e=Fh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Qu(t,e,n,r){return r!==null&&Wm(r),po(e,t.child,null,n),t=sg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function kk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=wf(Error(B(422))),Qu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Fh({mode:"visible",children:r.children},i,0,null),s=qi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&po(e,t.child,null,o),e.child.memoizedState=Sp(o),e.memoizedState=Tp,s);if(!(e.mode&1))return Qu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=wf(s,r,void 0),Qu(t,e,o,r)}if(a=(o&t.childLanes)!==0,zt||a){if(r=st,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,hr(t,i),Sn(r,t,i,-1))}return hg(),r=wf(Error(B(421))),Qu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=zk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Xt=Hr(i.nextSibling),tn=e,Te=!0,En=null,t!==null&&(ln[un++]=nr,ln[un++]=rr,ln[un++]=Yi,nr=t.id,rr=t.overflow,Yi=e),e=sg(e,r.children),e.flags|=4096,e)}function Qv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),_p(t.return,e,n)}function If(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function e0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(bt(t,e,r.children,n),r=ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qv(t,n,e);else if(t.tag===19)Qv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Jc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),If(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Jc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}If(e,!0,n,null,s);break;case"together":If(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function dr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Xr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bk(t,e,n){switch(e.tag){case 3:XT(e),fo();break;case 5:RT(e);break;case 1:Kt(e.type)&&Wc(e);break;case 4:Jm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(Hc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(ke,ke.current&1),e.flags|=128,null):n&e.child.childLanes?ZT(t,e,n):(_e(ke,ke.current&1),t=dr(t,e,n),t!==null?t.sibling:null);_e(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return e0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,YT(t,e,n)}return dr(t,e,n)}var t0,Ap,n0,r0;t0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ap=function(){};n0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ui(jn.current);var s=null;switch(n){case"input":i=Kf(t,i),r=Kf(t,r),s=[];break;case"select":i=De({},i,{value:void 0}),r=De({},r,{value:void 0}),s=[];break;case"textarea":i=Yf(t,i),r=Yf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=$c)}Xf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ll.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ll.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&we("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};r0=function(t,e,n,r){n!==r&&(e.flags|=4)};function wa(t,e){if(!Te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Nk(t,e,n){var r=e.pendingProps;switch(qm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(e),null;case 1:return Kt(e.type)&&qc(),Et(e),null;case 3:return r=e.stateNode,mo(),Ee(Gt),Ee(Rt),Zm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ku(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,En!==null&&(xp(En),En=null))),Ap(t,e),Et(e),null;case 5:Xm(e);var i=Ui(wl.current);if(n=e.type,t!==null&&e.stateNode!=null)n0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return Et(e),null}if(t=Ui(jn.current),Ku(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Nn]=e,r[yl]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<Va.length;i++)we(Va[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":iv(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":ov(r,s),we("invalid",r)}Xf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Gu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Gu(r.textContent,a,t),i=["children",""+a]):ll.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":Fu(r),sv(r,s,!0);break;case"textarea":Fu(r),av(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=$c)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=NE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Nn]=e,t[yl]=r,t0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zf(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<Va.length;i++)we(Va[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":iv(t,r),i=Kf(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=De({},r,{value:void 0}),we("invalid",t);break;case"textarea":ov(t,r),i=Yf(t,r),we("invalid",t);break;default:i=r}Xf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?VE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&DE(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ul(t,u):typeof u=="number"&&ul(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ll.hasOwnProperty(s)?u!=null&&s==="onScroll"&&we("scroll",t):u!=null&&km(t,s,u,o))}switch(n){case"input":Fu(t),sv(t,r,!1);break;case"textarea":Fu(t),av(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ni(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Xs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Xs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=$c)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Et(e),null;case 6:if(t&&e.stateNode!=null)r0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=Ui(wl.current),Ui(jn.current),Ku(e)){if(r=e.stateNode,n=e.memoizedProps,r[Nn]=e,(s=r.nodeValue!==n)&&(t=tn,t!==null))switch(t.tag){case 3:Gu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Gu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Nn]=e,e.stateNode=r}return Et(e),null;case 13:if(Ee(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Te&&Xt!==null&&e.mode&1&&!(e.flags&128))IT(),fo(),e.flags|=98560,s=!1;else if(s=Ku(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[Nn]=e}else fo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Et(e),s=!1}else En!==null&&(xp(En),En=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ke.current&1?Xe===0&&(Xe=3):hg())),e.updateQueue!==null&&(e.flags|=4),Et(e),null);case 4:return mo(),Ap(t,e),t===null&&gl(e.stateNode.containerInfo),Et(e),null;case 10:return Hm(e.type._context),Et(e),null;case 17:return Kt(e.type)&&qc(),Et(e),null;case 19:if(Ee(ke),s=e.memoizedState,s===null)return Et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)wa(s,!1);else{if(Xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Jc(t),o!==null){for(e.flags|=128,wa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(ke,ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&qe()>_o&&(e.flags|=128,r=!0,wa(s,!1),e.lanes=4194304)}else{if(!r)if(t=Jc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),wa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Te)return Et(e),null}else 2*qe()-s.renderingStartTime>_o&&n!==1073741824&&(e.flags|=128,r=!0,wa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=qe(),e.sibling=null,n=ke.current,_e(ke,r?n&1|2:n&1),e):(Et(e),null);case 22:case 23:return cg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Yt&1073741824&&(Et(e),e.subtreeFlags&6&&(e.flags|=8192)):Et(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function Dk(t,e){switch(qm(e),e.tag){case 1:return Kt(e.type)&&qc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return mo(),Ee(Gt),Ee(Rt),Zm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Xm(e),null;case 13:if(Ee(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));fo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(ke),null;case 4:return mo(),null;case 10:return Hm(e.type._context),null;case 22:case 23:return cg(),null;case 24:return null;default:return null}}var Yu=!1,St=!1,xk=typeof WeakSet=="function"?WeakSet:Set,Q=null;function Qs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(t,e,r)}else n.current=null}function Rp(t,e,n){try{n()}catch(r){Ve(t,e,r)}}var Yv=!1;function Vk(t,e){if(up=Bc,t=lT(),zm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++d===r&&(u=o),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(cp={focusedElem:t,selectionRange:n},Bc=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var P=R.memoizedProps,b=R.memoizedState,E=e.stateNode,_=E.getSnapshotBeforeUpdate(e.elementType===e.type?P:wn(e.type,P),b);E.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(D){Ve(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return R=Yv,Yv=!1,R}function Qa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Rp(e,n,s)}i=i.next}while(i!==r)}}function Lh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Pp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function i0(t){var e=t.alternate;e!==null&&(t.alternate=null,i0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Nn],delete e[yl],delete e[fp],delete e[gk],delete e[_k])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function s0(t){return t.tag===5||t.tag===3||t.tag===4}function Jv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||s0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$c));else if(r!==4&&(t=t.child,t!==null))for(Cp(t,e,n),t=t.sibling;t!==null;)Cp(t,e,n),t=t.sibling}function kp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(kp(t,e,n),t=t.sibling;t!==null;)kp(t,e,n),t=t.sibling}var ft=null,In=!1;function Cr(t,e,n){for(n=n.child;n!==null;)o0(t,e,n),n=n.sibling}function o0(t,e,n){if(Bn&&typeof Bn.onCommitFiberUnmount=="function")try{Bn.onCommitFiberUnmount(Ch,n)}catch{}switch(n.tag){case 5:St||Qs(n,e);case 6:var r=ft,i=In;ft=null,Cr(t,e,n),ft=r,In=i,ft!==null&&(In?(t=ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ft.removeChild(n.stateNode));break;case 18:ft!==null&&(In?(t=ft,n=n.stateNode,t.nodeType===8?pf(t.parentNode,n):t.nodeType===1&&pf(t,n),fl(t)):pf(ft,n.stateNode));break;case 4:r=ft,i=In,ft=n.stateNode.containerInfo,In=!0,Cr(t,e,n),ft=r,In=i;break;case 0:case 11:case 14:case 15:if(!St&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Rp(n,e,o),i=i.next}while(i!==r)}Cr(t,e,n);break;case 1:if(!St&&(Qs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ve(n,e,a)}Cr(t,e,n);break;case 21:Cr(t,e,n);break;case 22:n.mode&1?(St=(r=St)||n.memoizedState!==null,Cr(t,e,n),St=r):Cr(t,e,n);break;default:Cr(t,e,n)}}function Xv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xk),e.forEach(function(r){var i=$k.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function vn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ft=a.stateNode,In=!1;break e;case 3:ft=a.stateNode.containerInfo,In=!0;break e;case 4:ft=a.stateNode.containerInfo,In=!0;break e}a=a.return}if(ft===null)throw Error(B(160));o0(s,o,i),ft=null,In=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ve(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)a0(e,t),e=e.sibling}function a0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(vn(e,t),kn(t),r&4){try{Qa(3,t,t.return),Lh(3,t)}catch(P){Ve(t,t.return,P)}try{Qa(5,t,t.return)}catch(P){Ve(t,t.return,P)}}break;case 1:vn(e,t),kn(t),r&512&&n!==null&&Qs(n,n.return);break;case 5:if(vn(e,t),kn(t),r&512&&n!==null&&Qs(n,n.return),t.flags&32){var i=t.stateNode;try{ul(i,"")}catch(P){Ve(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&kE(i,s),Zf(a,o);var c=Zf(a,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?VE(i,f):d==="dangerouslySetInnerHTML"?DE(i,f):d==="children"?ul(i,f):km(i,d,f,c)}switch(a){case"input":Hf(i,s);break;case"textarea":bE(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Xs(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?Xs(i,!!s.multiple,s.defaultValue,!0):Xs(i,!!s.multiple,s.multiple?[]:"",!1))}i[yl]=s}catch(P){Ve(t,t.return,P)}}break;case 6:if(vn(e,t),kn(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Ve(t,t.return,P)}}break;case 3:if(vn(e,t),kn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fl(e.containerInfo)}catch(P){Ve(t,t.return,P)}break;case 4:vn(e,t),kn(t);break;case 13:vn(e,t),kn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(lg=qe())),r&4&&Xv(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(St=(c=St)||d,vn(e,t),St=c):vn(e,t),kn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Q=t,d=t.child;d!==null;){for(f=Q=d;Q!==null;){switch(m=Q,v=m.child,m.tag){case 0:case 11:case 14:case 15:Qa(4,m,m.return);break;case 1:Qs(m,m.return);var R=m.stateNode;if(typeof R.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(P){Ve(r,n,P)}}break;case 5:Qs(m,m.return);break;case 22:if(m.memoizedState!==null){ew(f);continue}}v!==null?(v.return=m,Q=v):ew(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=xE("display",o))}catch(P){Ve(t,t.return,P)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(P){Ve(t,t.return,P)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:vn(e,t),kn(t),r&4&&Xv(t);break;case 21:break;default:vn(e,t),kn(t)}}function kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(s0(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ul(i,""),r.flags&=-33);var s=Jv(t);kp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Jv(t);Cp(t,a,o);break;default:throw Error(B(161))}}catch(u){Ve(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ok(t,e,n){Q=t,l0(t)}function l0(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var i=Q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Yu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||St;a=Yu;var c=St;if(Yu=o,(St=u)&&!c)for(Q=i;Q!==null;)o=Q,u=o.child,o.tag===22&&o.memoizedState!==null?tw(i):u!==null?(u.return=o,Q=u):tw(i);for(;s!==null;)Q=s,l0(s),s=s.sibling;Q=i,Yu=a,St=c}Zv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Q=s):Zv(t)}}function Zv(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:St||Lh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!St)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:wn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Mv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Mv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&fl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}St||e.flags&512&&Pp(e)}catch(m){Ve(e,e.return,m)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function ew(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function tw(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Lh(4,e)}catch(u){Ve(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ve(e,i,u)}}var s=e.return;try{Pp(e)}catch(u){Ve(e,s,u)}break;case 5:var o=e.return;try{Pp(e)}catch(u){Ve(e,o,u)}}}catch(u){Ve(e,e.return,u)}if(e===t){Q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Q=a;break}Q=e.return}}var Lk=Math.ceil,eh=_r.ReactCurrentDispatcher,og=_r.ReactCurrentOwner,dn=_r.ReactCurrentBatchConfig,le=0,st=null,Qe=null,gt=0,Yt=0,Ys=gi(0),Xe=0,Sl=null,Xi=0,Mh=0,ag=0,Ya=null,jt=null,lg=0,_o=1/0,er=null,th=!1,bp=null,Yr=null,Ju=!1,jr=null,nh=0,Ja=0,Np=null,vc=-1,wc=0;function xt(){return le&6?qe():vc!==-1?vc:vc=qe()}function Jr(t){return t.mode&1?le&2&&gt!==0?gt&-gt:vk.transition!==null?(wc===0&&(wc=GE()),wc):(t=de,t!==0||(t=window.event,t=t===void 0?16:ZE(t.type)),t):1}function Sn(t,e,n,r){if(50<Ja)throw Ja=0,Np=null,Error(B(185));Hl(t,n,r),(!(le&2)||t!==st)&&(t===st&&(!(le&2)&&(Mh|=n),Xe===4&&Lr(t,gt)),Ht(t,r),n===1&&le===0&&!(e.mode&1)&&(_o=qe()+500,xh&&_i()))}function Ht(t,e){var n=t.callbackNode;vC(t,e);var r=Uc(t,t===st?gt:0);if(r===0)n!==null&&cv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&cv(n),e===1)t.tag===0?yk(nw.bind(null,t)):yT(nw.bind(null,t)),pk(function(){!(le&6)&&_i()}),n=null;else{switch(KE(r)){case 1:n=Vm;break;case 4:n=qE;break;case 16:n=Fc;break;case 536870912:n=WE;break;default:n=Fc}n=g0(n,u0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function u0(t,e){if(vc=-1,wc=0,le&6)throw Error(B(327));var n=t.callbackNode;if(ro()&&t.callbackNode!==n)return null;var r=Uc(t,t===st?gt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=rh(t,r);else{e=r;var i=le;le|=2;var s=h0();(st!==t||gt!==e)&&(er=null,_o=qe()+500,$i(t,e));do try{Uk();break}catch(a){c0(t,a)}while(!0);Km(),eh.current=s,le=i,Qe!==null?e=0:(st=null,gt=0,e=Xe)}if(e!==0){if(e===2&&(i=ip(t),i!==0&&(r=i,e=Dp(t,i))),e===1)throw n=Sl,$i(t,0),Lr(t,r),Ht(t,qe()),n;if(e===6)Lr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Mk(i)&&(e=rh(t,r),e===2&&(s=ip(t),s!==0&&(r=s,e=Dp(t,s))),e===1))throw n=Sl,$i(t,0),Lr(t,r),Ht(t,qe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:ki(t,jt,er);break;case 3:if(Lr(t,r),(r&130023424)===r&&(e=lg+500-qe(),10<e)){if(Uc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){xt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=dp(ki.bind(null,t,jt,er),e);break}ki(t,jt,er);break;case 4:if(Lr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Tn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lk(r/1960))-r,10<r){t.timeoutHandle=dp(ki.bind(null,t,jt,er),r);break}ki(t,jt,er);break;case 5:ki(t,jt,er);break;default:throw Error(B(329))}}}return Ht(t,qe()),t.callbackNode===n?u0.bind(null,t):null}function Dp(t,e){var n=Ya;return t.current.memoizedState.isDehydrated&&($i(t,e).flags|=256),t=rh(t,e),t!==2&&(e=jt,jt=n,e!==null&&xp(e)),t}function xp(t){jt===null?jt=t:jt.push.apply(jt,t)}function Mk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!An(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Lr(t,e){for(e&=~ag,e&=~Mh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Tn(e),r=1<<n;t[n]=-1,e&=~r}}function nw(t){if(le&6)throw Error(B(327));ro();var e=Uc(t,0);if(!(e&1))return Ht(t,qe()),null;var n=rh(t,e);if(t.tag!==0&&n===2){var r=ip(t);r!==0&&(e=r,n=Dp(t,r))}if(n===1)throw n=Sl,$i(t,0),Lr(t,e),Ht(t,qe()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ki(t,jt,er),Ht(t,qe()),null}function ug(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(_o=qe()+500,xh&&_i())}}function Zi(t){jr!==null&&jr.tag===0&&!(le&6)&&ro();var e=le;le|=1;var n=dn.transition,r=de;try{if(dn.transition=null,de=1,t)return t()}finally{de=r,dn.transition=n,le=e,!(le&6)&&_i()}}function cg(){Yt=Ys.current,Ee(Ys)}function $i(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,fk(n)),Qe!==null)for(n=Qe.return;n!==null;){var r=n;switch(qm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qc();break;case 3:mo(),Ee(Gt),Ee(Rt),Zm();break;case 5:Xm(r);break;case 4:mo();break;case 13:Ee(ke);break;case 19:Ee(ke);break;case 10:Hm(r.type._context);break;case 22:case 23:cg()}n=n.return}if(st=t,Qe=t=Xr(t.current,null),gt=Yt=e,Xe=0,Sl=null,ag=Mh=Xi=0,jt=Ya=null,Fi!==null){for(e=0;e<Fi.length;e++)if(n=Fi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Fi=null}return t}function c0(t,e){do{var n=Qe;try{if(Km(),gc.current=Zc,Xc){for(var r=be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xc=!1}if(Ji=0,rt=Je=be=null,Ha=!1,Il=0,og.current=null,n===null||n.return===null){Xe=1,Sl=e,Qe=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=gt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=$v(o);if(v!==null){v.flags&=-257,qv(v,o,a,s,e),v.mode&1&&zv(s,c,e),e=v,u=c;var R=e.updateQueue;if(R===null){var P=new Set;P.add(u),e.updateQueue=P}else R.add(u);break e}else{if(!(e&1)){zv(s,c,e),hg();break e}u=Error(B(426))}}else if(Te&&a.mode&1){var b=$v(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),qv(b,o,a,s,e),Wm(go(u,a));break e}}s=u=go(u,a),Xe!==4&&(Xe=2),Ya===null?Ya=[s]:Ya.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=KT(s,u,e);Lv(s,E);break e;case 1:a=u;var _=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Yr===null||!Yr.has(w)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=HT(s,a,e);Lv(s,D);break e}}s=s.return}while(s!==null)}f0(n)}catch(L){e=L,Qe===n&&n!==null&&(Qe=n=n.return);continue}break}while(!0)}function h0(){var t=eh.current;return eh.current=Zc,t===null?Zc:t}function hg(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),st===null||!(Xi&268435455)&&!(Mh&268435455)||Lr(st,gt)}function rh(t,e){var n=le;le|=2;var r=h0();(st!==t||gt!==e)&&(er=null,$i(t,e));do try{Fk();break}catch(i){c0(t,i)}while(!0);if(Km(),le=n,eh.current=r,Qe!==null)throw Error(B(261));return st=null,gt=0,Xe}function Fk(){for(;Qe!==null;)d0(Qe)}function Uk(){for(;Qe!==null&&!cC();)d0(Qe)}function d0(t){var e=m0(t.alternate,t,Yt);t.memoizedProps=t.pendingProps,e===null?f0(t):Qe=e,og.current=null}function f0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Dk(n,e),n!==null){n.flags&=32767,Qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xe=6,Qe=null;return}}else if(n=Nk(n,e,Yt),n!==null){Qe=n;return}if(e=e.sibling,e!==null){Qe=e;return}Qe=e=t}while(e!==null);Xe===0&&(Xe=5)}function ki(t,e,n){var r=de,i=dn.transition;try{dn.transition=null,de=1,Bk(t,e,n,r)}finally{dn.transition=i,de=r}return null}function Bk(t,e,n,r){do ro();while(jr!==null);if(le&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(wC(t,s),t===st&&(Qe=st=null,gt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ju||(Ju=!0,g0(Fc,function(){return ro(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=dn.transition,dn.transition=null;var o=de;de=1;var a=le;le|=4,og.current=null,Vk(t,n),a0(n,t),ok(cp),Bc=!!up,cp=up=null,t.current=n,Ok(n),hC(),le=a,de=o,dn.transition=s}else t.current=n;if(Ju&&(Ju=!1,jr=t,nh=i),s=t.pendingLanes,s===0&&(Yr=null),pC(n.stateNode),Ht(t,qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(th)throw th=!1,t=bp,bp=null,t;return nh&1&&t.tag!==0&&ro(),s=t.pendingLanes,s&1?t===Np?Ja++:(Ja=0,Np=t):Ja=0,_i(),null}function ro(){if(jr!==null){var t=KE(nh),e=dn.transition,n=de;try{if(dn.transition=null,de=16>t?16:t,jr===null)var r=!1;else{if(t=jr,jr=null,nh=0,le&6)throw Error(B(331));var i=le;for(le|=4,Q=t.current;Q!==null;){var s=Q,o=s.child;if(Q.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(Q=c;Q!==null;){var d=Q;switch(d.tag){case 0:case 11:case 15:Qa(8,d,s)}var f=d.child;if(f!==null)f.return=d,Q=f;else for(;Q!==null;){d=Q;var m=d.sibling,v=d.return;if(i0(d),d===c){Q=null;break}if(m!==null){m.return=v,Q=m;break}Q=v}}}var R=s.alternate;if(R!==null){var P=R.child;if(P!==null){R.child=null;do{var b=P.sibling;P.sibling=null,P=b}while(P!==null)}}Q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Q=o;else e:for(;Q!==null;){if(s=Q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qa(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,Q=E;break e}Q=s.return}}var _=t.current;for(Q=_;Q!==null;){o=Q;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,Q=w;else e:for(o=_;Q!==null;){if(a=Q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Lh(9,a)}}catch(L){Ve(a,a.return,L)}if(a===o){Q=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,Q=D;break e}Q=a.return}}if(le=i,_i(),Bn&&typeof Bn.onPostCommitFiberRoot=="function")try{Bn.onPostCommitFiberRoot(Ch,t)}catch{}r=!0}return r}finally{de=n,dn.transition=e}}return!1}function rw(t,e,n){e=go(n,e),e=KT(t,e,1),t=Qr(t,e,1),e=xt(),t!==null&&(Hl(t,1,e),Ht(t,e))}function Ve(t,e,n){if(t.tag===3)rw(t,t,n);else for(;e!==null;){if(e.tag===3){rw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yr===null||!Yr.has(r))){t=go(n,t),t=HT(e,t,1),e=Qr(e,t,1),t=xt(),e!==null&&(Hl(e,1,t),Ht(e,t));break}}e=e.return}}function jk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=xt(),t.pingedLanes|=t.suspendedLanes&n,st===t&&(gt&n)===n&&(Xe===4||Xe===3&&(gt&130023424)===gt&&500>qe()-lg?$i(t,0):ag|=n),Ht(t,e)}function p0(t,e){e===0&&(t.mode&1?(e=ju,ju<<=1,!(ju&130023424)&&(ju=4194304)):e=1);var n=xt();t=hr(t,e),t!==null&&(Hl(t,e,n),Ht(t,n))}function zk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),p0(t,n)}function $k(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),p0(t,n)}var m0;m0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Gt.current)zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return zt=!1,bk(t,e,n);zt=!!(t.flags&131072)}else zt=!1,Te&&e.flags&1048576&&vT(e,Kc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;yc(t,e),t=e.pendingProps;var i=ho(e,Rt.current);no(e,n),i=tg(null,e,r,t,i,n);var s=ng();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Kt(r)?(s=!0,Wc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ym(e),i.updater=Oh,e.stateNode=i,i._reactInternals=e,vp(e,r,t,n),e=Ep(null,e,r,!0,s,n)):(e.tag=0,Te&&s&&$m(e),bt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(yc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Wk(r),t=wn(r,t),i){case 0:e=Ip(null,e,r,t,n);break e;case 1:e=Kv(null,e,r,t,n);break e;case 11:e=Wv(null,e,r,t,n);break e;case 14:e=Gv(null,e,r,wn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wn(r,i),Ip(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wn(r,i),Kv(t,e,r,i,n);case 3:e:{if(XT(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,AT(t,e),Yc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=go(Error(B(423)),e),e=Hv(t,e,r,n,i);break e}else if(r!==i){i=go(Error(B(424)),e),e=Hv(t,e,r,n,i);break e}else for(Xt=Hr(e.stateNode.containerInfo.firstChild),tn=e,Te=!0,En=null,n=TT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fo(),r===i){e=dr(t,e,n);break e}bt(t,e,r,n)}e=e.child}return e;case 5:return RT(e),t===null&&gp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,hp(r,i)?o=null:s!==null&&hp(r,s)&&(e.flags|=32),JT(t,e),bt(t,e,o,n),e.child;case 6:return t===null&&gp(e),null;case 13:return ZT(t,e,n);case 4:return Jm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=po(e,null,r,n):bt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wn(r,i),Wv(t,e,r,i,n);case 7:return bt(t,e,e.pendingProps,n),e.child;case 8:return bt(t,e,e.pendingProps.children,n),e.child;case 12:return bt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,_e(Hc,r._currentValue),r._currentValue=o,s!==null)if(An(s.value,o)){if(s.children===i.children&&!Gt.current){e=dr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=ar(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),_p(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),_p(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}bt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,no(e,n),i=pn(i),r=r(i),e.flags|=1,bt(t,e,r,n),e.child;case 14:return r=e.type,i=wn(r,e.pendingProps),i=wn(r.type,i),Gv(t,e,r,i,n);case 15:return QT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wn(r,i),yc(t,e),e.tag=1,Kt(r)?(t=!0,Wc(e)):t=!1,no(e,n),GT(e,r,i),vp(e,r,i,n),Ep(null,e,r,!0,t,n);case 19:return e0(t,e,n);case 22:return YT(t,e,n)}throw Error(B(156,e.tag))};function g0(t,e){return $E(t,e)}function qk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(t,e,n,r){return new qk(t,e,n,r)}function dg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Wk(t){if(typeof t=="function")return dg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Nm)return 11;if(t===Dm)return 14}return 2}function Xr(t,e){var n=t.alternate;return n===null?(n=cn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ic(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")dg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Bs:return qi(n.children,i,s,e);case bm:o=8,i|=8;break;case $f:return t=cn(12,n,e,i|2),t.elementType=$f,t.lanes=s,t;case qf:return t=cn(13,n,e,i),t.elementType=qf,t.lanes=s,t;case Wf:return t=cn(19,n,e,i),t.elementType=Wf,t.lanes=s,t;case RE:return Fh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case SE:o=10;break e;case AE:o=9;break e;case Nm:o=11;break e;case Dm:o=14;break e;case xr:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=cn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function qi(t,e,n,r){return t=cn(7,t,r,e),t.lanes=n,t}function Fh(t,e,n,r){return t=cn(22,t,r,e),t.elementType=RE,t.lanes=n,t.stateNode={isHidden:!1},t}function Ef(t,e,n){return t=cn(6,t,null,e),t.lanes=n,t}function Tf(t,e,n){return e=cn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Gk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nf(0),this.expirationTimes=nf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fg(t,e,n,r,i,s,o,a,u){return t=new Gk(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=cn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ym(s),t}function Kk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Us,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function _0(t){if(!t)return ri;t=t._reactInternals;e:{if(ps(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Kt(n))return _T(t,n,e)}return e}function y0(t,e,n,r,i,s,o,a,u){return t=fg(n,r,!0,t,i,s,o,a,u),t.context=_0(null),n=t.current,r=xt(),i=Jr(n),s=ar(r,i),s.callback=e??null,Qr(n,s,i),t.current.lanes=i,Hl(t,i,r),Ht(t,r),t}function Uh(t,e,n,r){var i=e.current,s=xt(),o=Jr(i);return n=_0(n),e.context===null?e.context=n:e.pendingContext=n,e=ar(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Qr(i,e,o),t!==null&&(Sn(t,i,o,s),mc(t,i,o)),o}function ih(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function iw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pg(t,e){iw(t,e),(t=t.alternate)&&iw(t,e)}function Hk(){return null}var v0=typeof reportError=="function"?reportError:function(t){console.error(t)};function mg(t){this._internalRoot=t}Bh.prototype.render=mg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));Uh(t,e,null,null)};Bh.prototype.unmount=mg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zi(function(){Uh(null,t,null,null)}),e[cr]=null}};function Bh(t){this._internalRoot=t}Bh.prototype.unstable_scheduleHydration=function(t){if(t){var e=YE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Or.length&&e!==0&&e<Or[n].priority;n++);Or.splice(n,0,t),n===0&&XE(t)}};function gg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function jh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sw(){}function Qk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ih(o);s.call(c)}}var o=y0(e,r,t,0,null,!1,!1,"",sw);return t._reactRootContainer=o,t[cr]=o.current,gl(t.nodeType===8?t.parentNode:t),Zi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ih(u);a.call(c)}}var u=fg(t,0,!1,null,null,!1,!1,"",sw);return t._reactRootContainer=u,t[cr]=u.current,gl(t.nodeType===8?t.parentNode:t),Zi(function(){Uh(e,u,n,r)}),u}function zh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=ih(o);a.call(u)}}Uh(e,o,t,i)}else o=Qk(n,e,t,i,r);return ih(o)}HE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=xa(e.pendingLanes);n!==0&&(Om(e,n|1),Ht(e,qe()),!(le&6)&&(_o=qe()+500,_i()))}break;case 13:Zi(function(){var r=hr(t,1);if(r!==null){var i=xt();Sn(r,t,1,i)}}),pg(t,1)}};Lm=function(t){if(t.tag===13){var e=hr(t,134217728);if(e!==null){var n=xt();Sn(e,t,134217728,n)}pg(t,134217728)}};QE=function(t){if(t.tag===13){var e=Jr(t),n=hr(t,e);if(n!==null){var r=xt();Sn(n,t,e,r)}pg(t,e)}};YE=function(){return de};JE=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};tp=function(t,e,n){switch(e){case"input":if(Hf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Dh(r);if(!i)throw Error(B(90));CE(r),Hf(r,i)}}}break;case"textarea":bE(t,n);break;case"select":e=n.value,e!=null&&Xs(t,!!n.multiple,e,!1)}};ME=ug;FE=Zi;var Yk={usingClientEntryPoint:!1,Events:[Yl,qs,Dh,OE,LE,ug]},Ia={findFiberByHostInstance:Mi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jk={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_r.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=jE(t),t===null?null:t.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||Hk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xu.isDisabled&&Xu.supportsFiber)try{Ch=Xu.inject(Jk),Bn=Xu}catch{}}on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yk;on.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gg(e))throw Error(B(200));return Kk(t,e,null,n)};on.createRoot=function(t,e){if(!gg(t))throw Error(B(299));var n=!1,r="",i=v0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=fg(t,1,!1,null,null,n,!1,r,i),t[cr]=e.current,gl(t.nodeType===8?t.parentNode:t),new mg(e)};on.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=jE(e),t=t===null?null:t.stateNode,t};on.flushSync=function(t){return Zi(t)};on.hydrate=function(t,e,n){if(!jh(e))throw Error(B(200));return zh(null,t,e,!0,n)};on.hydrateRoot=function(t,e,n){if(!gg(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=v0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=y0(e,null,t,1,n??null,i,!1,s,o),t[cr]=e.current,gl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Bh(e)};on.render=function(t,e,n){if(!jh(e))throw Error(B(200));return zh(null,t,e,!1,n)};on.unmountComponentAtNode=function(t){if(!jh(t))throw Error(B(40));return t._reactRootContainer?(Zi(function(){zh(null,null,t,!1,function(){t._reactRootContainer=null,t[cr]=null})}),!0):!1};on.unstable_batchedUpdates=ug;on.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!jh(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return zh(t,e,n,!1,r)};on.version="18.3.1-next-f1338f8080-20240426";function w0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w0)}catch(t){console.error(t)}}w0(),wE.exports=on;var Xk=wE.exports,I0,ow=Xk;I0=ow.createRoot,ow.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Al(){return Al=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Al.apply(this,arguments)}var zr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(zr||(zr={}));const aw="popstate";function Zk(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Vp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:sh(i)}return tb(e,n,null,t)}function Ye(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function E0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function eb(){return Math.random().toString(36).substr(2,8)}function lw(t,e){return{usr:t.state,key:t.key,idx:e}}function Vp(t,e,n,r){return n===void 0&&(n=null),Al({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Bo(e):e,{state:n,key:e&&e.key||r||eb()})}function sh(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Bo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function tb(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=zr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Al({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=zr.Pop;let b=d(),E=b==null?null:b-c;c=b,u&&u({action:a,location:P.location,delta:E})}function m(b,E){a=zr.Push;let _=Vp(P.location,b,E);c=d()+1;let w=lw(_,c),D=P.createHref(_);try{o.pushState(w,"",D)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(D)}s&&u&&u({action:a,location:P.location,delta:1})}function v(b,E){a=zr.Replace;let _=Vp(P.location,b,E);c=d();let w=lw(_,c),D=P.createHref(_);o.replaceState(w,"",D),s&&u&&u({action:a,location:P.location,delta:0})}function R(b){let E=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof b=="string"?b:sh(b);return _=_.replace(/ $/,"%20"),Ye(E,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,E)}let P={get action(){return a},get location(){return t(i,o)},listen(b){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(aw,f),u=b,()=>{i.removeEventListener(aw,f),u=null}},createHref(b){return e(i,b)},createURL:R,encodeLocation(b){let E=R(b);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:m,replace:v,go(b){return o.go(b)}};return P}var uw;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(uw||(uw={}));function nb(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Bo(e):e,i=_g(r.pathname||"/",n);if(i==null)return null;let s=T0(t);rb(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let u=mb(i);o=db(s[a],u)}return o}function T0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ye(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Zr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Ye(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),T0(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:cb(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of S0(s.path))i(s,o,u)}),e}function S0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=S0(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function rb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:hb(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ib=/^:[\w-]+$/,sb=3,ob=2,ab=1,lb=10,ub=-2,cw=t=>t==="*";function cb(t,e){let n=t.split("/"),r=n.length;return n.some(cw)&&(r+=ub),e&&(r+=ob),n.filter(i=>!cw(i)).reduce((i,s)=>i+(ib.test(s)?sb:s===""?ab:lb),r)}function hb(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function db(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],u=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",d=fb({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c);if(!d)return null;Object.assign(r,d.params);let f=a.route;s.push({params:r,pathname:Zr([i,d.pathname]),pathnameBase:vb(Zr([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=Zr([i,d.pathnameBase]))}return s}function fb(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=pb(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:v}=d;if(m==="*"){let P=a[f]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const R=a[f];return v&&!R?c[m]=void 0:c[m]=(R||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function pb(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),E0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function mb(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return E0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function _g(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function gb(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Bo(t):t;return{pathname:n?n.startsWith("/")?n:_b(n,e):e,search:wb(r),hash:Ib(i)}}function _b(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Sf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function yb(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function A0(t,e){let n=yb(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function R0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Bo(t):(i=Al({},t),Ye(!i.pathname||!i.pathname.includes("?"),Sf("?","pathname","search",i)),Ye(!i.pathname||!i.pathname.includes("#"),Sf("#","pathname","hash",i)),Ye(!i.search||!i.search.includes("#"),Sf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let u=gb(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Zr=t=>t.join("/").replace(/\/\/+/g,"/"),vb=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),wb=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Ib=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Eb(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const P0=["post","put","patch","delete"];new Set(P0);const Tb=["get",...P0];new Set(Tb);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rl(){return Rl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Rl.apply(this,arguments)}const yg=z.createContext(null),Sb=z.createContext(null),ms=z.createContext(null),$h=z.createContext(null),gs=z.createContext({outlet:null,matches:[],isDataRoute:!1}),C0=z.createContext(null);function Ab(t,e){let{relative:n}=e===void 0?{}:e;Xl()||Ye(!1);let{basename:r,navigator:i}=z.useContext(ms),{hash:s,pathname:o,search:a}=N0(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Zr([r,o])),i.createHref({pathname:u,search:a,hash:s})}function Xl(){return z.useContext($h)!=null}function qh(){return Xl()||Ye(!1),z.useContext($h).location}function k0(t){z.useContext(ms).static||z.useLayoutEffect(t)}function b0(){let{isDataRoute:t}=z.useContext(gs);return t?Fb():Rb()}function Rb(){Xl()||Ye(!1);let t=z.useContext(yg),{basename:e,future:n,navigator:r}=z.useContext(ms),{matches:i}=z.useContext(gs),{pathname:s}=qh(),o=JSON.stringify(A0(i,n.v7_relativeSplatPath)),a=z.useRef(!1);return k0(()=>{a.current=!0}),z.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=R0(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Zr([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}function N0(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=z.useContext(ms),{matches:i}=z.useContext(gs),{pathname:s}=qh(),o=JSON.stringify(A0(i,r.v7_relativeSplatPath));return z.useMemo(()=>R0(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function Pb(t,e){return Cb(t,e)}function Cb(t,e,n,r){Xl()||Ye(!1);let{navigator:i}=z.useContext(ms),{matches:s}=z.useContext(gs),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=qh(),d;if(e){var f;let b=typeof e=="string"?Bo(e):e;u==="/"||(f=b.pathname)!=null&&f.startsWith(u)||Ye(!1),d=b}else d=c;let m=d.pathname||"/",v=m;if(u!=="/"){let b=u.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(b.length).join("/")}let R=nb(t,{pathname:v}),P=xb(R&&R.map(b=>Object.assign({},b,{params:Object.assign({},a,b.params),pathname:Zr([u,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?u:Zr([u,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),s,n,r);return e&&P?z.createElement($h.Provider,{value:{location:Rl({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:zr.Pop}},P):P}function kb(){let t=Mb(),e=Eb(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),n?z.createElement("pre",{style:i},n):null,null)}const bb=z.createElement(kb,null);class Nb extends z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?z.createElement(gs.Provider,{value:this.props.routeContext},z.createElement(C0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Db(t){let{routeContext:e,match:n,children:r}=t,i=z.useContext(yg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),z.createElement(gs.Provider,{value:e},r)}function xb(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||Ye(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:v}=n,R=f.route.loader&&m[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||R){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let v,R=!1,P=null,b=null;n&&(v=a&&f.route.id?a[f.route.id]:void 0,P=f.route.errorElement||bb,u&&(c<0&&m===0?(R=!0,b=null):c===m&&(R=!0,b=f.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,m+1)),_=()=>{let w;return v?w=P:R?w=b:f.route.Component?w=z.createElement(f.route.Component,null):f.route.element?w=f.route.element:w=d,z.createElement(Db,{match:f,routeContext:{outlet:d,matches:E,isDataRoute:n!=null},children:w})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?z.createElement(Nb,{location:n.location,revalidation:n.revalidation,component:P,error:v,children:_(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):_()},null)}var D0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(D0||{}),oh=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(oh||{});function Vb(t){let e=z.useContext(yg);return e||Ye(!1),e}function Ob(t){let e=z.useContext(Sb);return e||Ye(!1),e}function Lb(t){let e=z.useContext(gs);return e||Ye(!1),e}function x0(t){let e=Lb(),n=e.matches[e.matches.length-1];return n.route.id||Ye(!1),n.route.id}function Mb(){var t;let e=z.useContext(C0),n=Ob(oh.UseRouteError),r=x0(oh.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Fb(){let{router:t}=Vb(D0.UseNavigateStable),e=x0(oh.UseNavigateStable),n=z.useRef(!1);return k0(()=>{n.current=!0}),z.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Rl({fromRouteId:e},s)))},[t,e])}function Oa(t){Ye(!1)}function Ub(t){let{basename:e="/",children:n=null,location:r,navigationType:i=zr.Pop,navigator:s,static:o=!1,future:a}=t;Xl()&&Ye(!1);let u=e.replace(/^\/*/,"/"),c=z.useMemo(()=>({basename:u,navigator:s,static:o,future:Rl({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=Bo(r));let{pathname:d="/",search:f="",hash:m="",state:v=null,key:R="default"}=r,P=z.useMemo(()=>{let b=_g(d,u);return b==null?null:{location:{pathname:b,search:f,hash:m,state:v,key:R},navigationType:i}},[u,d,f,m,v,R,i]);return P==null?null:z.createElement(ms.Provider,{value:c},z.createElement($h.Provider,{children:n,value:P}))}function Bb(t){let{children:e,location:n}=t;return Pb(Op(e),n)}new Promise(()=>{});function Op(t,e){e===void 0&&(e=[]);let n=[];return z.Children.forEach(t,(r,i)=>{if(!z.isValidElement(r))return;let s=[...e,i];if(r.type===z.Fragment){n.push.apply(n,Op(r.props.children,s));return}r.type!==Oa&&Ye(!1),!r.props.index||!r.props.children||Ye(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Op(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lp(){return Lp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Lp.apply(this,arguments)}function jb(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function zb(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function $b(t,e){return t.button===0&&(!e||e==="_self")&&!zb(t)}const qb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Wb="6";try{window.__reactRouterVersion=Wb}catch{}const Gb="startTransition",hw=j1[Gb];function Kb(t){let{basename:e,children:n,future:r,window:i}=t,s=z.useRef();s.current==null&&(s.current=Zk({window:i,v5Compat:!0}));let o=s.current,[a,u]=z.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=z.useCallback(f=>{c&&hw?hw(()=>u(f)):u(f)},[u,c]);return z.useLayoutEffect(()=>o.listen(d),[o,d]),z.createElement(Ub,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Hb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Qb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zu=z.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:d,unstable_viewTransition:f}=e,m=jb(e,qb),{basename:v}=z.useContext(ms),R,P=!1;if(typeof c=="string"&&Qb.test(c)&&(R=c,Hb))try{let w=new URL(window.location.href),D=c.startsWith("//")?new URL(w.protocol+c):new URL(c),L=_g(D.pathname,v);D.origin===w.origin&&L!=null?c=L+D.search+D.hash:P=!0}catch{}let b=Ab(c,{relative:i}),E=Yb(c,{replace:o,state:a,target:u,preventScrollReset:d,relative:i,unstable_viewTransition:f});function _(w){r&&r(w),w.defaultPrevented||E(w)}return z.createElement("a",Lp({},m,{href:R||b,onClick:P||s?r:_,ref:n,target:u}))});var dw;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(dw||(dw={}));var fw;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(fw||(fw={}));function Yb(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,u=b0(),c=qh(),d=N0(t,{relative:o});return z.useCallback(f=>{if($b(f,n)){f.preventDefault();let m=r!==void 0?r:sh(c)===sh(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,u,d,r,i,n,t,s,o,a])}var pw={};/**
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
 */const V0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Jb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},O0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,v=c&63;u||(v=64,o||(m=64)),r.push(n[d],n[f],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(V0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Jb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new Xb;const m=s<<2|a>>4;if(r.push(m),c!==64){const v=a<<4&240|c>>2;if(r.push(v),f!==64){const R=c<<6&192|f;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Xb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zb=function(t){const e=V0(t);return O0.encodeByteArray(e,!0)},ah=function(t){return Zb(t).replace(/\./g,"")},L0=function(t){try{return O0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function lh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!eN(n)||(t[n]=lh(t[n],e[n]));return t}function eN(t){return t!=="__proto__"}/**
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
 */function tN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nN=()=>tN().__FIREBASE_DEFAULTS__,rN=()=>{if(typeof process>"u"||typeof pw>"u")return;const t=pw.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&L0(t[1]);return e&&JSON.parse(e)},Wh=()=>{try{return nN()||rN()||iN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},M0=t=>{var e,n;return(n=(e=Wh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},sN=t=>{const e=M0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},F0=()=>{var t;return(t=Wh())===null||t===void 0?void 0:t.config},U0=t=>{var e;return(e=Wh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class oN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function aN(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ah(JSON.stringify(n)),ah(JSON.stringify(o)),""].join(".")}/**
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
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function vg(){var t;const e=(t=Wh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function B0(){return typeof self=="object"&&self.self===self}function j0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function z0(){const t=Pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $0(){return!vg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Pl(){try{return typeof indexedDB=="object"}catch{return!1}}function uN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const cN="FirebaseError";class At extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cN,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_s.prototype.create)}}class _s{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?hN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new At(i,a,r)}}function hN(t,e){return t.replace(dN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const dN=/\{\$([^}]+)}/g;/**
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
 */function mw(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function fN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(gw(s)&&gw(o)){if(!yo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function gw(t){return t!==null&&typeof t=="object"}/**
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
 */function jo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Js(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function La(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function q0(t,e){const n=new pN(t,e);return n.subscribe.bind(n)}class pN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");mN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Af),i.error===void 0&&(i.error=Af),i.complete===void 0&&(i.complete=Af);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Af(){}/**
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
 */function X(t){return t&&t._delegate?t._delegate:t}class Rn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const bi="[DEFAULT]";/**
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
 */class gN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new oN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yN(e))try{this.getOrInitializeService({instanceIdentifier:bi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=bi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bi){return this.instances.has(e)}getOptions(e=bi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_N(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bi){return this.component?this.component.multipleInstances?e:bi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _N(t){return t===bi?void 0:t}function yN(t){return t.instantiationMode==="EAGER"}/**
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
 */class W0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Ig=[];var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const G0={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},vN=re.INFO,wN={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},IN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=wN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gh{constructor(e){this.name=e,this._logLevel=vN,this._logHandler=IN,this._userLogHandler=null,Ig.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?G0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}function EN(t){Ig.forEach(e=>{e.setLogLevel(t)})}function TN(t,e){for(const n of Ig){let r=null;e&&e.level&&(r=G0[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&t({level:re[s].toLowerCase(),message:a,args:o,type:i.name})}}}const SN=(t,e)=>e.some(n=>t instanceof n);let _w,yw;function AN(){return _w||(_w=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function RN(){return yw||(yw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const K0=new WeakMap,Mp=new WeakMap,H0=new WeakMap,Rf=new WeakMap,Eg=new WeakMap;function PN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ei(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&K0.set(n,t)}).catch(()=>{}),Eg.set(e,t),e}function CN(t){if(Mp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Mp.set(t,e)}let Fp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Mp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||H0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ei(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kN(t){Fp=t(Fp)}function bN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pf(this),e,...n);return H0.set(r,e.sort?e.sort():[e]),ei(r)}:RN().includes(t)?function(...e){return t.apply(Pf(this),e),ei(K0.get(this))}:function(...e){return ei(t.apply(Pf(this),e))}}function NN(t){return typeof t=="function"?bN(t):(t instanceof IDBTransaction&&CN(t),SN(t,AN())?new Proxy(t,Fp):t)}function ei(t){if(t instanceof IDBRequest)return PN(t);if(Rf.has(t))return Rf.get(t);const e=NN(t);return e!==t&&(Rf.set(t,e),Eg.set(e,t)),e}const Pf=t=>Eg.get(t);function DN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ei(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ei(o.result),u.oldVersion,u.newVersion,ei(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const xN=["get","getKey","getAll","getAllKeys","count"],VN=["put","add","delete","clear"],Cf=new Map;function vw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cf.get(e))return Cf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=VN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||xN.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Cf.set(e,s),s}kN(t=>({...t,get:(e,n,r)=>vw(e,n)||t.get(e,n,r),has:(e,n)=>!!vw(e,n)||t.has(e,n)}));/**
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
 */class ON{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(LN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function LN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const uh="@firebase/app",Up="0.10.5";/**
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
 */const es=new Gh("@firebase/app"),MN="@firebase/app-compat",FN="@firebase/analytics-compat",UN="@firebase/analytics",BN="@firebase/app-check-compat",jN="@firebase/app-check",zN="@firebase/auth",$N="@firebase/auth-compat",qN="@firebase/database",WN="@firebase/database-compat",GN="@firebase/functions",KN="@firebase/functions-compat",HN="@firebase/installations",QN="@firebase/installations-compat",YN="@firebase/messaging",JN="@firebase/messaging-compat",XN="@firebase/performance",ZN="@firebase/performance-compat",eD="@firebase/remote-config",tD="@firebase/remote-config-compat",nD="@firebase/storage",rD="@firebase/storage-compat",iD="@firebase/firestore",sD="@firebase/vertexai-preview",oD="@firebase/firestore-compat",aD="firebase",lD="10.12.2";/**
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
 */const ii="[DEFAULT]",uD={[uh]:"fire-core",[MN]:"fire-core-compat",[UN]:"fire-analytics",[FN]:"fire-analytics-compat",[jN]:"fire-app-check",[BN]:"fire-app-check-compat",[zN]:"fire-auth",[$N]:"fire-auth-compat",[qN]:"fire-rtdb",[WN]:"fire-rtdb-compat",[GN]:"fire-fn",[KN]:"fire-fn-compat",[HN]:"fire-iid",[QN]:"fire-iid-compat",[YN]:"fire-fcm",[JN]:"fire-fcm-compat",[XN]:"fire-perf",[ZN]:"fire-perf-compat",[eD]:"fire-rc",[tD]:"fire-rc-compat",[nD]:"fire-gcs",[rD]:"fire-gcs-compat",[iD]:"fire-fst",[oD]:"fire-fst-compat",[sD]:"fire-vertex","fire-js":"fire-js",[aD]:"fire-js-all"};/**
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
 */const si=new Map,vo=new Map,wo=new Map;function Cl(t,e){try{t.container.addComponent(e)}catch(n){es.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Q0(t,e){t.container.addOrOverwriteComponent(e)}function fr(t){const e=t.name;if(wo.has(e))return es.debug(`There were multiple attempts to register component ${e}.`),!1;wo.set(e,t);for(const n of si.values())Cl(n,t);for(const n of vo.values())Cl(n,t);return!0}function Zl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function cD(t,e,n=ii){Zl(t,e).clearInstance(n)}function Y0(t){return t.options!==void 0}function Le(t){return t.settings!==void 0}function hD(){wo.clear()}/**
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
 */const dD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fn=new _s("app","Firebase",dD);/**
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
 */let J0=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fn.create("app-deleted",{appName:this._name})}};/**
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
 */class fD extends J0{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()}),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,nn(uh,Up,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Ag(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw fn.create("server-app-deleted")}}/**
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
 */const yr=lD;function Tg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ii,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw fn.create("bad-app-name",{appName:String(i)});if(n||(n=F0()),!n)throw fn.create("no-options");const s=si.get(i);if(s){if(yo(n,s.options)&&yo(r,s.config))return s;throw fn.create("duplicate-app",{appName:i})}const o=new W0(i);for(const u of wo.values())o.addComponent(u);const a=new J0(n,r,o);return si.set(i,a),a}function pD(t,e){if(B0())throw fn.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;Y0(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((d,f)=>Math.imul(31,d)+f.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw fn.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=vo.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new W0(s);for(const c of wo.values())a.addComponent(c);const u=new fD(n,e,s,a);return vo.set(s,u),u}function Sg(t=ii){const e=si.get(t);if(!e&&t===ii&&F0())return Tg();if(!e)throw fn.create("no-app",{appName:t});return e}function mD(){return Array.from(si.values())}async function Ag(t){let e=!1;const n=t.name;si.has(n)?(e=!0,si.delete(n)):vo.has(n)&&t.decRefCount()<=0&&(vo.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function nn(t,e,n){var r;let i=(r=uD[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),es.warn(a.join(" "));return}fr(new Rn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function X0(t,e){if(t!==null&&typeof t!="function")throw fn.create("invalid-log-argument");TN(t,e)}function Z0(t){EN(t)}/**
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
 */const gD="firebase-heartbeat-database",_D=1,kl="firebase-heartbeat-store";let kf=null;function eS(){return kf||(kf=DN(gD,_D,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(kl)}catch(n){console.warn(n)}}}}).catch(t=>{throw fn.create("idb-open",{originalErrorMessage:t.message})})),kf}async function yD(t){try{const n=(await eS()).transaction(kl),r=await n.objectStore(kl).get(tS(t));return await n.done,r}catch(e){if(e instanceof At)es.warn(e.message);else{const n=fn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});es.warn(n.message)}}}async function ww(t,e){try{const r=(await eS()).transaction(kl,"readwrite");await r.objectStore(kl).put(e,tS(t)),await r.done}catch(n){if(n instanceof At)es.warn(n.message);else{const r=fn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});es.warn(r.message)}}}function tS(t){return`${t.name}!${t.options.appId}`}/**
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
 */const vD=1024,wD=30*24*60*60*1e3;class ID{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Iw();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=wD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Iw(),{heartbeatsToSend:r,unsentEntries:i}=ED(this._heartbeatsCache.heartbeats),s=ah(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Iw(){return new Date().toISOString().substring(0,10)}function ED(t,e=vD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ew(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ew(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class TD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pl()?uN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await yD(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ww(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ww(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ew(t){return ah(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function SD(t){fr(new Rn("platform-logger",e=>new ON(e),"PRIVATE")),fr(new Rn("heartbeat",e=>new ID(e),"PRIVATE")),nn(uh,Up,t),nn(uh,Up,"esm2017"),nn("fire-js","")}SD("");const AD=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:At,SDK_VERSION:yr,_DEFAULT_ENTRY_NAME:ii,_addComponent:Cl,_addOrOverwriteComponent:Q0,_apps:si,_clearComponents:hD,_components:wo,_getProvider:Zl,_isFirebaseApp:Y0,_isFirebaseServerApp:Le,_registerComponent:fr,_removeServiceInstance:cD,_serverApps:vo,deleteApp:Ag,getApp:Sg,getApps:mD,initializeApp:Tg,initializeServerApp:pD,onLog:X0,registerVersion:nn,setLogLevel:Z0},Symbol.toStringTag,{value:"Module"}));/**
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
 */class RD{constructor(e,n){this._delegate=e,this.firebase=n,Cl(e,new Rn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Ag(this._delegate)))}_getService(e,n=ii){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=ii){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Cl(this._delegate,e)}_addOrOverwriteComponent(e){Q0(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const PD={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Tw=new _s("app-compat","Firebase",PD);/**
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
 */function CD(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:nn,setLogLevel:Z0,onLog:X0,apps:null,SDK_VERSION:yr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:AD}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||ii,!mw(e,c))throw Tw.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,d={}){const f=Tg(c,d);if(mw(e,f.name))return e[f.name];const m=new t(f,n);return e[f.name]=m,m}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const d=c.name,f=d.replace("-compat","");if(fr(c)&&c.type==="PUBLIC"){const m=(v=i())=>{if(typeof v[f]!="function")throw Tw.create("invalid-app-argument",{appName:d});return v[f]()};c.serviceProps!==void 0&&lh(m,c.serviceProps),n[f]=m,t.prototype[f]=function(...v){return this._getService.bind(this,d).apply(this,c.multipleInstances?v:[])}}return c.type==="PUBLIC"?n[f]:null}function u(c,d){return d==="serverAuth"?null:d}return n}/**
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
 */function nS(){const t=CD(RD);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:nS,extendNamespace:e,createSubscribe:q0,ErrorFactory:_s,deepExtend:lh});function e(n){lh(t,n)}return t}const kD=nS();/**
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
 */const Sw=new Gh("@firebase/app-compat"),bD="@firebase/app-compat",ND="0.2.35";/**
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
 */function DD(t){nn(bD,ND,t)}/**
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
 */if(B0()&&self.firebase!==void 0){Sw.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Sw.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const ge=kD;DD();var xD="firebase",VD="10.12.2";/**
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
 */ge.registerVersion(xD,VD,"app-compat");function Rg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Ea={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},ks={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function OD(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function rS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LD=OD,MD=rS,iS=new _s("auth","Firebase",rS());/**
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
 */const ch=new Gh("@firebase/auth");function FD(t,...e){ch.logLevel<=re.WARN&&ch.warn(`Auth (${yr}): ${t}`,...e)}function Ec(t,...e){ch.logLevel<=re.ERROR&&ch.error(`Auth (${yr}): ${t}`,...e)}/**
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
 */function lt(t,...e){throw Cg(t,...e)}function Ze(t,...e){return Cg(t,...e)}function Pg(t,e,n){const r=Object.assign(Object.assign({},MD()),{[e]:n});return new _s("auth","Firebase",r).create(e,{appName:t.name})}function ot(t){return Pg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zo(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&lt(t,"argument-error"),Pg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Cg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return iS.create(t,...e)}function j(t,e,...n){if(!t)throw Cg(e,...n)}function Ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ec(e),new Error(e)}function Pn(t,e){t||Ln(e)}/**
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
 */function bl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kg(){return Aw()==="http:"||Aw()==="https:"}function Aw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function UD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kg()||j0()||"connection"in navigator)?navigator.onLine:!0}function BD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class eu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pn(n>e,"Short delay should be less than long delay!"),this.isMobile=lN()||wg()}get(){return UD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bg(t,e){Pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class sS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const zD=new eu(3e4,6e4);function Be(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function je(t,e,n,r,i={}){return oS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=jo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),sS.fetch()(aS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function oS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jD),e);try{const i=new qD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ma(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ma(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ma(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ma(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Pg(t,d,c);lt(t,d)}}catch(i){if(i instanceof At)throw i;lt(t,"network-request-failed",{message:String(i)})}}async function vr(t,e,n,r,i={}){const s=await je(t,e,n,r,i);return"mfaPendingCredential"in s&&lt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function aS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?bg(t.config,i):`${t.config.apiScheme}://${i}`}function $D(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class qD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ze(this.auth,"network-request-failed")),zD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ma(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ze(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function Rw(t){return t!==void 0&&t.getResponse!==void 0}function Pw(t){return t!==void 0&&t.enterprise!==void 0}class WD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return $D(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function GD(t){return(await je(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function KD(t,e){return je(t,"GET","/v2/recaptchaConfig",Be(t,e))}/**
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
 */async function HD(t,e){return je(t,"POST","/v1/accounts:delete",e)}async function QD(t,e){return je(t,"POST","/v1/accounts:update",e)}async function lS(t,e){return je(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function YD(t,e=!1){const n=X(t),r=await n.getIdToken(e),i=Kh(r);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Xa(bf(i.auth_time)),issuedAtTime:Xa(bf(i.iat)),expirationTime:Xa(bf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function bf(t){return Number(t)*1e3}function Kh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ec("JWT malformed, contained fewer than 3 sections"),null;try{const i=L0(n);return i?JSON.parse(i):(Ec("Failed to decode base64 JWT payload"),null)}catch(i){return Ec("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Cw(t){const e=Kh(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function pr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof At&&JD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function JD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class XD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Bp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xa(this.lastLoginAt),this.creationTime=Xa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Nl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await pr(t,lS(n,{idToken:r}));j(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?uS(s.providerUserInfo):[],a=ex(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Bp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function ZD(t){const e=X(t);await Nl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ex(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function uS(t){return t.map(e=>{var{providerId:n}=e,r=Rg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function tx(t,e){const n=await oS(t,{},async()=>{const r=jo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=aS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function nx(t,e){return je(t,"POST","/v2/accounts:revokeToken",Be(t,e))}/**
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
 */class io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){j(e.length!==0,"internal-error");const n=Cw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await tx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new io;return r&&(j(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(j(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(j(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new io,this.toJSON())}_performRefresh(){return Ln("not implemented")}}/**
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
 */function kr(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ir{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Rg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new XD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Bp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await pr(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return YD(this,e)}reload(){return ZD(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ir(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Nl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Le(this.auth.app))return Promise.reject(ot(this.auth));const e=await this.getIdToken();return await pr(this,HD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:w,emailVerified:D,isAnonymous:L,providerData:F,stsTokenManager:I}=n;j(w&&I,e,"internal-error");const y=io.fromJSON(this.name,I);j(typeof w=="string",e,"internal-error"),kr(f,e.name),kr(m,e.name),j(typeof D=="boolean",e,"internal-error"),j(typeof L=="boolean",e,"internal-error"),kr(v,e.name),kr(R,e.name),kr(P,e.name),kr(b,e.name),kr(E,e.name),kr(_,e.name);const T=new ir({uid:w,auth:e,email:m,emailVerified:D,displayName:f,isAnonymous:L,photoURL:R,phoneNumber:v,tenantId:P,stsTokenManager:y,createdAt:E,lastLoginAt:_});return F&&Array.isArray(F)&&(T.providerData=F.map(A=>Object.assign({},A))),b&&(T._redirectEventId=b),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new io;i.updateFromServerResponse(n);const s=new ir({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Nl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];j(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?uS(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new io;a.updateFromIdToken(r);const u=new ir({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Bp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const kw=new Map;function Zt(t){Pn(t instanceof Function,"Expected a class definition");let e=kw.get(t);return e?(Pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,kw.set(t,e),e)}/**
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
 */class cS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cS.type="NONE";const Io=cS;/**
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
 */function Wi(t,e,n){return`firebase:${t}:${e}:${n}`}class so{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Wi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Wi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ir._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new so(Zt(Io),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Zt(Io);const o=Wi(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=ir._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new so(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new so(s,e,r))}}/**
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
 */function bw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pS(e))return"Blackberry";if(mS(e))return"Webos";if(Ng(e))return"Safari";if((e.includes("chrome/")||dS(e))&&!e.includes("edge/"))return"Chrome";if(tu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hS(t=Pe()){return/firefox\//i.test(t)}function Ng(t=Pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dS(t=Pe()){return/crios\//i.test(t)}function fS(t=Pe()){return/iemobile/i.test(t)}function tu(t=Pe()){return/android/i.test(t)}function pS(t=Pe()){return/blackberry/i.test(t)}function mS(t=Pe()){return/webos/i.test(t)}function $o(t=Pe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rx(t=Pe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function ix(t=Pe()){var e;return $o(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sx(){return z0()&&document.documentMode===10}function gS(t=Pe()){return $o(t)||tu(t)||mS(t)||pS(t)||/windows phone/i.test(t)||fS(t)}function ox(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function _S(t,e=[]){let n;switch(t){case"Browser":n=bw(Pe());break;case"Worker":n=`${bw(Pe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yr}/${r}`}/**
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
 */class ax{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function lx(t,e={}){return je(t,"GET","/v2/passwordPolicy",Be(t,e))}/**
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
 */const ux=6;class cx{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ux,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class hx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nw(this),this.idTokenSubscription=new Nw(this),this.beforeStateQueue=new ax(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await so.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await lS(this,{idToken:e}),r=await ir._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Le(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Le(this.app))return Promise.reject(ot(this));const n=e?X(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Le(this.app)?Promise.reject(ot(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Le(this.app)?Promise.reject(ot(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lx(this),n=new cx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _s("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await nx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zt(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await so.create(this,[Zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_S(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&FD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Me(t){return X(t)}class Nw{constructor(e){this.auth=e,this.observer=null,this.addObserver=q0(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let nu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dx(t){nu=t}function Dg(t){return nu.loadJS(t)}function fx(){return nu.recaptchaV2Script}function px(){return nu.recaptchaEnterpriseScript}function mx(){return nu.gapiScript}function yS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const gx="recaptcha-enterprise",_x="NO_RECAPTCHA";class yx{constructor(e){this.type=gx,this.auth=Me(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{KD(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new WD(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;Pw(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(_x)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Pw(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=px();u.length!==0&&(u+=a),Dg(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Dw(t,e,n,r=!1){const i=new yx(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Dl(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Dw(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Dw(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function vx(t,e){const n=Zl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(yo(s,e??{}))return i;lt(i,"already-initialized")}return n.initialize({options:e})}function wx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Zt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vS(t,e,n){const r=Me(t);j(r._canInitEmulator,r,"emulator-config-failed"),j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=wS(e),{host:o,port:a}=Ix(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ex()}function wS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ix(t){const e=wS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:xw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:xw(o)}}}function xw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ex(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class qo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ln("not implemented")}_getIdTokenResponse(e){return Ln("not implemented")}_linkToIdToken(e,n){return Ln("not implemented")}_getReauthenticationResolver(e){return Ln("not implemented")}}/**
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
 */async function IS(t,e){return je(t,"POST","/v1/accounts:resetPassword",Be(t,e))}async function Tx(t,e){return je(t,"POST","/v1/accounts:update",e)}async function Sx(t,e){return je(t,"POST","/v1/accounts:signUp",e)}async function Ax(t,e){return je(t,"POST","/v1/accounts:update",Be(t,e))}/**
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
 */async function Rx(t,e){return vr(t,"POST","/v1/accounts:signInWithPassword",Be(t,e))}async function Hh(t,e){return je(t,"POST","/v1/accounts:sendOobCode",Be(t,e))}async function Px(t,e){return Hh(t,e)}async function Cx(t,e){return Hh(t,e)}async function kx(t,e){return Hh(t,e)}async function bx(t,e){return Hh(t,e)}/**
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
 */async function Nx(t,e){return vr(t,"POST","/v1/accounts:signInWithEmailLink",Be(t,e))}async function Dx(t,e){return vr(t,"POST","/v1/accounts:signInWithEmailLink",Be(t,e))}/**
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
 */class xl extends qo{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new xl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dl(e,n,"signInWithPassword",Rx);case"emailLink":return Nx(e,{email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dl(e,r,"signUpPassword",Sx);case"emailLink":return Dx(e,{idToken:n,email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function lr(t,e){return vr(t,"POST","/v1/accounts:signInWithIdp",Be(t,e))}/**
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
 */const xx="http://localhost";class qn extends qo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Rg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new qn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return lr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,lr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,lr(e,n)}buildRequest(){const e={requestUri:xx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=jo(n)}return e}}/**
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
 */async function Vx(t,e){return je(t,"POST","/v1/accounts:sendVerificationCode",Be(t,e))}async function Ox(t,e){return vr(t,"POST","/v1/accounts:signInWithPhoneNumber",Be(t,e))}async function Lx(t,e){const n=await vr(t,"POST","/v1/accounts:signInWithPhoneNumber",Be(t,e));if(n.temporaryProof)throw Ma(t,"account-exists-with-different-credential",n);return n}const Mx={USER_NOT_FOUND:"user-not-found"};async function Fx(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return vr(t,"POST","/v1/accounts:signInWithPhoneNumber",Be(t,n),Mx)}/**
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
 */class Gi extends qo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Gi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Gi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return Ox(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return Lx(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Fx(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Gi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function Ux(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Bx(t){const e=Js(La(t)).link,n=e?Js(La(e)).deep_link_id:null,r=Js(La(t)).deep_link_id;return(r?Js(La(r)).link:null)||r||n||e||t}class Qh{constructor(e){var n,r,i,s,o,a;const u=Js(La(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,f=Ux((i=u.mode)!==null&&i!==void 0?i:null);j(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Bx(e);try{return new Qh(n)}catch{return null}}}/**
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
 */class yi{constructor(){this.providerId=yi.PROVIDER_ID}static credential(e,n){return xl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Qh.parseLink(n);return j(r,"argument-error"),xl._fromEmailAndCode(e,r.code,r.tenantId)}}yi.PROVIDER_ID="password";yi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class wr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wo extends wr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class oo extends Wo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return j("providerId"in n&&"signInMethod"in n,"argument-error"),qn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return j(e.idToken||e.accessToken,"argument-error"),qn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return oo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return oo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new oo(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class Dn extends Wo{constructor(){super("facebook.com")}static credential(e){return qn._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dn.PROVIDER_ID="facebook.com";/**
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
 */class xn extends Wo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qn._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.GOOGLE_SIGN_IN_METHOD="google.com";xn.PROVIDER_ID="google.com";/**
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
 */class Vn extends Wo{constructor(){super("github.com")}static credential(e){return qn._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.GITHUB_SIGN_IN_METHOD="github.com";Vn.PROVIDER_ID="github.com";/**
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
 */const jx="http://localhost";class Eo extends qo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return lr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,lr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,lr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Eo(r,s)}static _create(e,n){return new Eo(e,n)}buildRequest(){return{requestUri:jx,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const zx="saml.";class hh extends wr{constructor(e){j(e.startsWith(zx),"argument-error"),super(e)}static credentialFromResult(e){return hh.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return hh.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Eo.fromJSON(e);return j(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Eo._create(r,n)}catch{return null}}}/**
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
 */class On extends Wo{constructor(){super("twitter.com")}static credential(e,n){return qn._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return On.credential(n,r)}catch{return null}}}On.TWITTER_SIGN_IN_METHOD="twitter.com";On.PROVIDER_ID="twitter.com";/**
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
 */async function ES(t,e){return vr(t,"POST","/v1/accounts:signUp",Be(t,e))}/**
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
 */class gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ir._fromIdTokenResponse(e,r,i),o=Vw(r);return new gn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Vw(r);return new gn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Vw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function $x(t){var e;if(Le(t.app))return Promise.reject(ot(t));const n=Me(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new gn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await ES(n,{returnSecureToken:!0}),i=await gn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class dh extends At{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,dh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new dh(e,n,r,i)}}function TS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?dh._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function SS(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function qx(t,e){const n=X(t);await Yh(!0,n,e);const{providerUserInfo:r}=await QD(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=SS(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function xg(t,e,n=!1){const r=await pr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gn._forOperation(t,"link",r)}async function Yh(t,e,n){await Nl(e);const r=SS(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";j(r.has(n)===t,e.auth,i)}/**
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
 */async function AS(t,e,n=!1){const{auth:r}=t;if(Le(r.app))return Promise.reject(ot(r));const i="reauthenticate";try{const s=await pr(t,TS(r,i,e,t),n);j(s.idToken,r,"internal-error");const o=Kh(s.idToken);j(o,r,"internal-error");const{sub:a}=o;return j(t.uid===a,r,"user-mismatch"),gn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&lt(r,"user-mismatch"),s}}/**
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
 */async function RS(t,e,n=!1){if(Le(t.app))return Promise.reject(ot(t));const r="signIn",i=await TS(t,r,e),s=await gn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Jh(t,e){return RS(Me(t),e)}async function PS(t,e){const n=X(t);return await Yh(!1,n,e.providerId),xg(n,e)}async function CS(t,e){return AS(X(t),e)}/**
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
 */async function Wx(t,e){return vr(t,"POST","/v1/accounts:signInWithCustomToken",Be(t,e))}/**
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
 */async function Gx(t,e){if(Le(t.app))return Promise.reject(ot(t));const n=Me(t),r=await Wx(n,{token:e,returnSecureToken:!0}),i=await gn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class ru{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Vg._fromServerResponse(e,n):"totpInfo"in n?Og._fromServerResponse(e,n):lt(e,"internal-error")}}class Vg extends ru{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Vg(n)}}class Og extends ru{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Og(n)}}/**
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
 */function Xh(t,e,n){var r;j(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),j(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(j(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(j(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Lg(t){const e=Me(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Kx(t,e,n){const r=Me(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Xh(r,i,n),await Dl(r,i,"getOobCode",Cx)}async function Hx(t,e,n){await IS(X(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Lg(t),r})}async function Qx(t,e){await Ax(X(t),{oobCode:e})}async function kS(t,e){const n=X(t),r=await IS(n,{oobCode:e}),i=r.requestType;switch(j(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":j(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":j(r.mfaInfo,n,"internal-error");default:j(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=ru._fromServerResponse(Me(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function Yx(t,e){const{data:n}=await kS(X(t),e);return n.email}async function Jx(t,e,n){if(Le(t.app))return Promise.reject(ot(t));const r=Me(t),o=await Dl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ES).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Lg(t),u}),a=await gn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Xx(t,e,n){return Le(t.app)?Promise.reject(ot(t)):Jh(X(t),yi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Lg(t),r})}/**
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
 */async function Zx(t,e,n){const r=Me(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){j(a.handleCodeInApp,r,"argument-error"),a&&Xh(r,o,a)}s(i,n),await Dl(r,i,"getOobCode",kx)}function eV(t,e){const n=Qh.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function tV(t,e,n){if(Le(t.app))return Promise.reject(ot(t));const r=X(t),i=yi.credentialWithLink(e,n||bl());return j(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Jh(r,i)}/**
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
 */async function nV(t,e){return je(t,"POST","/v1/accounts:createAuthUri",Be(t,e))}/**
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
 */async function rV(t,e){const n=kg()?bl():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await nV(X(t),r);return i||[]}async function iV(t,e){const n=X(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Xh(n.auth,i,e);const{email:s}=await Px(n.auth,i);s!==t.email&&await t.reload()}async function sV(t,e,n){const r=X(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Xh(r.auth,s,n);const{email:o}=await bx(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function oV(t,e){return je(t,"POST","/v1/accounts:update",e)}/**
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
 */async function bS(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=X(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await pr(r,oV(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function aV(t,e){const n=X(t);return Le(n.auth.app)?Promise.reject(ot(n.auth)):NS(n,e,null)}function lV(t,e){return NS(X(t),null,e)}async function NS(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await pr(t,Tx(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function uV(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Kh(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new ao(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new cV(s,i);case"github.com":return new hV(s,i);case"google.com":return new dV(s,i);case"twitter.com":return new fV(s,i,t.screenName||null);case"custom":case"anonymous":return new ao(s,null);default:return new ao(s,r,i)}}class ao{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class DS extends ao{constructor(e,n,r,i){super(e,n,r),this.username=i}}class cV extends ao{constructor(e,n){super(e,"facebook.com",n)}}class hV extends DS{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class dV extends ao{constructor(e,n){super(e,"google.com",n)}}class fV extends DS{constructor(e,n,r){super(e,"twitter.com",n,r)}}function pV(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:uV(n)}function mV(t,e,n,r){return X(t).onIdTokenChanged(e,n,r)}function gV(t,e,n){return X(t).beforeAuthStateChanged(e,n)}/**
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
 */class Bi{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new Bi("enroll",e,n)}static _fromMfaPendingCredential(e){return new Bi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Bi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Bi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Mg{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Me(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>ru._fromServerResponse(r,a));j(i.mfaPendingCredential,r,"internal-error");const o=Bi._fromMfaPendingCredential(i.mfaPendingCredential);return new Mg(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(n.operationType){case"signIn":const d=await gn._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return j(n.user,r,"internal-error"),gn._forOperation(n.user,n.operationType,c);default:lt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function _V(t,e){var n;const r=X(t),i=e;return j(e.customData.operationType,r,"argument-error"),j((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Mg._fromError(r,i)}/**
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
 */function yV(t,e){return je(t,"POST","/v2/accounts/mfaEnrollment:start",Be(t,e))}function vV(t,e){return je(t,"POST","/v2/accounts/mfaEnrollment:finalize",Be(t,e))}function wV(t,e){return je(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Be(t,e))}class Fg{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>ru._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Fg(e)}async getSession(){return Bi._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await pr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await pr(this.user,wV(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Nf=new WeakMap;function IV(t){const e=X(t);return Nf.has(e)||Nf.set(e,Fg._fromUser(e)),Nf.get(e)}const fh="__sak";/**
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
 */class xS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fh,"1"),this.storage.removeItem(fh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function EV(){const t=Pe();return Ng(t)||$o(t)}const TV=1e3,SV=10;class VS extends xS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=EV()&&ox(),this.fallbackToPolling=gS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);sx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,SV):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},TV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}VS.type="LOCAL";const Zh=VS;/**
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
 */class OS extends xS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}OS.type="SESSION";const oi=OS;/**
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
 */function AV(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ed{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ed(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await AV(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ed.receivers=[];/**
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
 */function iu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class RV{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=iu("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function He(){return window}function PV(t){He().location.href=t}/**
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
 */function Ug(){return typeof He().WorkerGlobalScope<"u"&&typeof He().importScripts=="function"}async function CV(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kV(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function bV(){return Ug()?self:null}/**
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
 */const LS="firebaseLocalStorageDb",NV=1,ph="firebaseLocalStorage",MS="fbase_key";class su{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function td(t,e){return t.transaction([ph],e?"readwrite":"readonly").objectStore(ph)}function DV(){const t=indexedDB.deleteDatabase(LS);return new su(t).toPromise()}function jp(){const t=indexedDB.open(LS,NV);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ph,{keyPath:MS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ph)?e(r):(r.close(),await DV(),e(await jp()))})})}async function Ow(t,e,n){const r=td(t,!0).put({[MS]:e,value:n});return new su(r).toPromise()}async function xV(t,e){const n=td(t,!1).get(e),r=await new su(n).toPromise();return r===void 0?null:r.value}function Lw(t,e){const n=td(t,!0).delete(e);return new su(n).toPromise()}const VV=800,OV=3;class FS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>OV)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ug()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ed._getInstance(bV()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await CV(),!this.activeServiceWorker)return;this.sender=new RV(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kV()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jp();return await Ow(e,fh,"1"),await Lw(e,fh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ow(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>xV(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=td(i,!1).getAll();return new su(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}FS.type="LOCAL";const To=FS;/**
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
 */function LV(t,e){return je(t,"POST","/v2/accounts/mfaSignIn:start",Be(t,e))}function MV(t,e){return je(t,"POST","/v2/accounts/mfaSignIn:finalize",Be(t,e))}/**
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
 */const FV=500,UV=6e4,ec=1e12;class BV{constructor(e){this.auth=e,this.counter=ec,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new jV(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||ec;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||ec;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||ec;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class jV{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;j(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=zV(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},UV)},FV))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function zV(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Df=yS("rcb"),$V=new eu(3e4,6e4);class qV{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=He().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return j(WV(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Rw(He().grecaptcha)?Promise.resolve(He().grecaptcha):new Promise((r,i)=>{const s=He().setTimeout(()=>{i(Ze(e,"network-request-failed"))},$V.get());He()[Df]=()=>{He().clearTimeout(s),delete He()[Df];const a=He().grecaptcha;if(!a||!Rw(a)){i(Ze(e,"internal-error"));return}const u=a.render;a.render=(c,d)=>{const f=u(c,d);return this.counter++,f},this.hostLanguage=n,r(a)};const o=`${fx()}?${jo({onload:Df,render:"explicit",hl:n})}`;Dg(o).catch(()=>{clearTimeout(s),i(Ze(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=He().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function WV(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class GV{async load(e){return new BV(e)}clearedOneInstance(){}}/**
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
 */const US="recaptcha",KV={theme:"light",type:"image"};let HV=class{constructor(e,n,r=Object.assign({},KV)){this.parameters=r,this.type=US,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Me(e),this.isInvisible=this.parameters.size==="invisible",j(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;j(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new GV:new qV,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){j(!this.parameters.sitekey,this.auth,"argument-error"),j(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),j(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=He()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){j(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){j(kg()&&!Ug(),this.auth,"internal-error"),await QV(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await GD(this.auth);j(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return j(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function QV(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Bg{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Gi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function YV(t,e,n){if(Le(t.app))return Promise.reject(ot(t));const r=Me(t),i=await nd(r,e,X(n));return new Bg(i,s=>Jh(r,s))}async function JV(t,e,n){const r=X(t);await Yh(!1,r,"phone");const i=await nd(r.auth,e,X(n));return new Bg(i,s=>PS(r,s))}async function XV(t,e,n){const r=X(t);if(Le(r.auth.app))return Promise.reject(ot(r.auth));const i=await nd(r.auth,e,X(n));return new Bg(i,s=>CS(r,s))}async function nd(t,e,n){var r;const i=await n.verify();try{j(typeof i=="string",t,"argument-error"),j(n.type===US,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return j(o.type==="enroll",t,"internal-error"),(await yV(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{j(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return j(a,t,"missing-multi-factor-info"),(await LV(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await Vx(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function ZV(t,e){const n=X(t);if(Le(n.auth.app))return Promise.reject(ot(n.auth));await xg(n,e)}/**
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
 */let ts=class Tc{constructor(e){this.providerId=Tc.PROVIDER_ID,this.auth=Me(e)}verifyPhoneNumber(e,n){return nd(this.auth,e,X(n))}static credential(e,n){return Gi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Tc.credentialFromTaggedObject(n)}static credentialFromError(e){return Tc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Gi._fromTokenResponse(n,r):null}};ts.PROVIDER_ID="phone";ts.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function ys(t,e){return e?Zt(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class jg extends qo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return lr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return lr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return lr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eO(t){return RS(t.auth,new jg(t),t.bypassAuthState)}function tO(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),AS(n,new jg(t),t.bypassAuthState)}async function nO(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),xg(n,new jg(t),t.bypassAuthState)}/**
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
 */class BS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eO;case"linkViaPopup":case"linkViaRedirect":return nO;case"reauthViaPopup":case"reauthViaRedirect":return tO;default:lt(this.auth,"internal-error")}}resolve(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rO=new eu(2e3,1e4);async function iO(t,e,n){if(Le(t.app))return Promise.reject(Ze(t,"operation-not-supported-in-this-environment"));const r=Me(t);zo(t,e,wr);const i=ys(r,n);return new sr(r,"signInViaPopup",e,i).executeNotNull()}async function sO(t,e,n){const r=X(t);if(Le(r.auth.app))return Promise.reject(Ze(r.auth,"operation-not-supported-in-this-environment"));zo(r.auth,e,wr);const i=ys(r.auth,n);return new sr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function oO(t,e,n){const r=X(t);zo(r.auth,e,wr);const i=ys(r.auth,n);return new sr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class sr extends BS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,sr.currentPopupAction&&sr.currentPopupAction.cancel(),sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const e=iu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rO.get())};e()}}sr.currentPopupAction=null;/**
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
 */const aO="pendingRedirect",Za=new Map;class lO extends BS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Za.get(this.auth._key());if(!e){try{const r=await uO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Za.set(this.auth._key(),e)}return this.bypassAuthState||Za.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uO(t,e){const n=zS(e),r=jS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function zg(t,e){return jS(t)._set(zS(e),"true")}function cO(){Za.clear()}function $g(t,e){Za.set(t._key(),e)}function jS(t){return Zt(t._redirectPersistence)}function zS(t){return Wi(aO,t.config.apiKey,t.name)}/**
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
 */function hO(t,e,n){return dO(t,e,n)}async function dO(t,e,n){if(Le(t.app))return Promise.reject(ot(t));const r=Me(t);zo(t,e,wr),await r._initializationPromise;const i=ys(r,n);return await zg(i,r),i._openRedirect(r,e,"signInViaRedirect")}function fO(t,e,n){return pO(t,e,n)}async function pO(t,e,n){const r=X(t);if(zo(r.auth,e,wr),Le(r.auth.app))return Promise.reject(ot(r.auth));await r.auth._initializationPromise;const i=ys(r.auth,n);await zg(i,r.auth);const s=await $S(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function mO(t,e,n){return gO(t,e,n)}async function gO(t,e,n){const r=X(t);zo(r.auth,e,wr),await r.auth._initializationPromise;const i=ys(r.auth,n);await Yh(!1,r,e.providerId),await zg(i,r.auth);const s=await $S(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function _O(t,e){return await Me(t)._initializationPromise,rd(t,e,!1)}async function rd(t,e,n=!1){if(Le(t.app))return Promise.reject(ot(t));const r=Me(t),i=ys(r,e),o=await new lO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function $S(t){const e=iu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const yO=10*60*1e3;class qS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!WS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ze(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yO&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mw(e))}saveEventToCache(e){this.cachedEventUids.add(Mw(e)),this.lastProcessedEventTime=Date.now()}}function Mw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function WS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return WS(t);default:return!1}}/**
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
 */async function GS(t,e={}){return je(t,"GET","/v1/projects",e)}/**
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
 */const wO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IO=/^https?/;async function EO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await GS(t);for(const n of e)try{if(TO(n))return}catch{}lt(t,"unauthorized-domain")}function TO(t){const e=bl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!IO.test(n))return!1;if(wO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const SO=new eu(3e4,6e4);function Fw(){const t=He().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function AO(t){return new Promise((e,n)=>{var r,i,s;function o(){Fw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fw(),n(Ze(t,"network-request-failed"))},timeout:SO.get()})}if(!((i=(r=He().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=He().gapi)===null||s===void 0)&&s.load)o();else{const a=yS("iframefcb");return He()[a]=()=>{gapi.load?o():n(Ze(t,"network-request-failed"))},Dg(`${mx()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Sc=null,e})}let Sc=null;function RO(t){return Sc=Sc||AO(t),Sc}/**
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
 */const PO=new eu(5e3,15e3),CO="__/auth/iframe",kO="emulator/auth/iframe",bO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DO(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bg(e,kO):`https://${t.config.authDomain}/${CO}`,r={apiKey:e.apiKey,appName:t.name,v:yr},i=NO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${jo(r).slice(1)}`}async function xO(t){const e=await RO(t),n=He().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:DO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ze(t,"network-request-failed"),a=He().setTimeout(()=>{s(o)},PO.get());function u(){He().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const VO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OO=500,LO=600,MO="_blank",FO="http://localhost";class Uw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UO(t,e,n,r=OO,i=LO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},VO),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Pe().toLowerCase();n&&(a=dS(c)?MO:n),hS(c)&&(e=e||FO,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[v,R])=>`${m}${v}=${R},`,"");if(ix(c)&&a!=="_self")return BO(e||"",a),new Uw(null);const f=window.open(e||"",a,d);j(f,t,"popup-blocked");try{f.focus()}catch{}return new Uw(f)}function BO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const jO="__/auth/handler",zO="emulator/auth/handler",$O=encodeURIComponent("fac");async function zp(t,e,n,r,i,s){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:yr,eventId:i};if(e instanceof wr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(s||{}))o[d]=f}if(e instanceof Wo){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${$O}=${encodeURIComponent(u)}`:"";return`${qO(t)}?${jo(a).slice(1)}${c}`}function qO({config:t}){return t.emulator?bg(t,zO):`https://${t.authDomain}/${jO}`}/**
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
 */const xf="webStorageSupport";class WO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oi,this._completeRedirectFn=rd,this._overrideRedirectResult=$g}async _openPopup(e,n,r,i){var s;Pn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await zp(e,n,r,bl(),i);return UO(e,o,iu())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await zp(e,n,r,bl(),i);return PV(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Pn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await xO(e),r=new qS(e);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xf,{type:xf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[xf];o!==void 0&&n(!!o),lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=EO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gS()||Ng()||$o()}}const KS=WO;class GO{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Ln("unexpected MultiFactorSessionType")}}}class qg extends GO{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new qg(e)}_finalizeEnroll(e,n,r){return vV(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return MV(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class HS{constructor(){}static assertion(e){return qg._fromCredential(e)}}HS.FACTOR_ID="phone";var Bw="@firebase/auth",jw="1.7.4";/**
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
 */class KO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function HO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function QO(t){fr(new Rn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_S(t)},c=new hx(r,i,s,u);return wx(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fr(new Rn("auth-internal",e=>{const n=Me(e.getProvider("auth").getImmediate());return(r=>new KO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(Bw,jw,HO(t)),nn(Bw,jw,"esm2017")}/**
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
 */const YO=5*60,JO=U0("authIdTokenMaxAge")||YO;let zw=null;const XO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>JO)return;const i=n==null?void 0:n.token;zw!==i&&(zw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ZO(t=Sg()){const e=Zl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=vx(t,{popupRedirectResolver:KS,persistence:[To,Zh,oi]}),r=U0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=XO(s.toString());gV(n,o,()=>o(n.currentUser)),mV(n,a=>o(a))}}const i=M0("auth");return i&&vS(n,`http://${i}`),n}function eL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}dx({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ze("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",eL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});QO("Browser");/**
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
 */function ns(){return window}/**
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
 */const tL=2e3;async function nL(t,e,n){var r;const{BuildInfo:i}=ns();Pn(e.sessionId,"AuthEvent did not contain a session ID");const s=await aL(e.sessionId),o={};return $o()?o.ibi=i.packageName:tu()?o.apn=i.packageName:lt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,zp(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function rL(t){const{BuildInfo:e}=ns(),n={};$o()?n.iosBundleId=e.packageName:tu()?n.androidPackageName=e.packageName:lt(t,"operation-not-supported-in-this-environment"),await GS(t,n)}function iL(t){const{cordova:e}=ns();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,rx()?"_blank":"_system","location=yes"),n(i)})})}async function sL(t,e,n){const{cordova:r}=ns();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var f;s();const m=(f=r.plugins.browsertab)===null||f===void 0?void 0:f.close;typeof m=="function"&&m(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function c(){a||(a=window.setTimeout(()=>{o(Ze(t,"redirect-cancelled-by-user"))},tL))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(u),document.addEventListener("resume",c,!1),tu()&&document.addEventListener("visibilitychange",d,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",d,!1),a&&window.clearTimeout(a)}})}finally{i()}}function oL(t){var e,n,r,i,s,o,a,u,c,d;const f=ns();j(typeof((e=f==null?void 0:f.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),j(typeof((n=f==null?void 0:f.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),j(typeof((s=(i=(r=f==null?void 0:f.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),j(typeof((u=(a=(o=f==null?void 0:f.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),j(typeof((d=(c=f==null?void 0:f.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function aL(t){const e=lL(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function lL(t){if(Pn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const uL=20;class cL extends qS{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function hL(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:pL(),postBody:null,tenantId:t.tenantId,error:Ze(t,"no-auth-event")}}function dL(t,e){return $p()._set(qp(t),e)}async function $w(t){const e=await $p()._get(qp(t));return e&&await $p()._remove(qp(t)),e}function fL(t,e){var n,r;const i=gL(e);if(i.includes("/__/auth/callback")){const s=Ac(i),o=s.firebaseError?mL(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],u=a?Ze(a):null;return u?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function pL(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<uL;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function $p(){return Zt(Zh)}function qp(t){return Wi("authEvent",t.config.apiKey,t.name)}function mL(t){try{return JSON.parse(t)}catch{return null}}function gL(t){const e=Ac(t),n=e.link?decodeURIComponent(e.link):void 0,r=Ac(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Ac(i).link||i||r||n||t}function Ac(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Js(n.join("?"))}/**
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
 */const _L=500;class yL{constructor(){this._redirectPersistence=oi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=rd,this._overrideRedirectResult=$g}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new cL(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){lt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){oL(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),cO(),await this._originValidation(e);const o=hL(e,r,i);await dL(e,o);const a=await nL(e,o,n),u=await iL(a);return sL(e,s,u)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rL(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=ns(),o=setTimeout(async()=>{await $w(e),n.onEvent(qw())},_L),a=async d=>{clearTimeout(o);const f=await $w(e);let m=null;f&&(d!=null&&d.url)&&(m=fL(f,d.url)),n.onEvent(m||qw())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,c=`${s.packageName.toLowerCase()}://`;ns().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(c)&&a({url:d}),typeof u=="function")try{u(d)}catch(f){console.error(f)}}}}const vL=yL;function qw(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ze("no-auth-event")}}/**
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
 */function wL(t,e){Me(t)._logFramework(e)}var IL="@firebase/auth-compat",EL="0.5.9";/**
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
 */const TL=1e3;function el(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function SL(){return el()==="http:"||el()==="https:"}function QS(t=Pe()){return!!((el()==="file:"||el()==="ionic:"||el()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function AL(){return wg()||vg()}function RL(){return z0()&&(document==null?void 0:document.documentMode)===11}function PL(t=Pe()){return/Edge\/\d+/.test(t)}function CL(t=Pe()){return RL()||PL(t)}function YS(){try{const t=self.localStorage,e=iu();if(t)return t.setItem(e,"1"),t.removeItem(e),CL()?Pl():!0}catch{return Wg()&&Pl()}return!1}function Wg(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Vf(){return(SL()||j0()||QS())&&!AL()&&YS()&&!Wg()}function JS(){return QS()&&typeof document<"u"}async function kL(){return JS()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},TL);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function bL(){return typeof window<"u"?window:null}/**
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
 */const Jt={LOCAL:"local",NONE:"none",SESSION:"session"},Ta=j,XS="persistence";function NL(t,e){if(Ta(Object.values(Jt).includes(e),t,"invalid-persistence-type"),wg()){Ta(e!==Jt.SESSION,t,"unsupported-persistence-type");return}if(vg()){Ta(e===Jt.NONE,t,"unsupported-persistence-type");return}if(Wg()){Ta(e===Jt.NONE||e===Jt.LOCAL&&Pl(),t,"unsupported-persistence-type");return}Ta(e===Jt.NONE||YS(),t,"unsupported-persistence-type")}async function Wp(t){await t._initializationPromise;const e=ZS(),n=Wi(XS,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function DL(t,e){const n=ZS();if(!n)return[];const r=Wi(XS,t,e);switch(n.getItem(r)){case Jt.NONE:return[Io];case Jt.LOCAL:return[To,oi];case Jt.SESSION:return[oi];default:return[]}}function ZS(){var t;try{return((t=bL())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const xL=j;class $r{constructor(){this.browserResolver=Zt(KS),this.cordovaResolver=Zt(vL),this.underlyingResolver=null,this._redirectPersistence=oi,this._completeRedirectFn=rd,this._overrideRedirectResult=$g}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return JS()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return xL(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await kL();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function eA(t){return t.unwrap()}function VL(t){return t.wrapped()}/**
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
 */function OL(t){return tA(t)}function LL(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new ML(t,_V(t,e))}else if(r){const i=tA(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function tA(t){const{_tokenResponse:e}=t instanceof At?t.customData:t;if(!e)return null;if(!(t instanceof At)&&"temporaryProof"in e&&"phoneNumber"in e)return ts.credentialFromResult(t);const n=e.providerId;if(!n||n===Ea.PASSWORD)return null;let r;switch(n){case Ea.GOOGLE:r=xn;break;case Ea.FACEBOOK:r=Dn;break;case Ea.GITHUB:r=Vn;break;case Ea.TWITTER:r=On;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Eo._create(n,a):qn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new oo(n).credential({idToken:i,accessToken:s,rawNonce:u})}return t instanceof At?r.credentialFromError(t):r.credentialFromResult(t)}function Ut(t,e){return e.catch(n=>{throw n instanceof At&&LL(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:OL(n),additionalUserInfo:pV(n),user:id.getOrCreate(i)}})}async function Gp(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Ut(t,n.confirm(r))}}class ML{constructor(e,n){this.resolver=n,this.auth=VL(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ut(eA(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */let id=class Fa{constructor(e){this._delegate=e,this.multiFactor=IV(e)}static getOrCreate(e){return Fa.USER_MAP.has(e)||Fa.USER_MAP.set(e,new Fa(e)),Fa.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ut(this.auth,PS(this._delegate,e))}async linkWithPhoneNumber(e,n){return Gp(this.auth,JV(this._delegate,e,n))}async linkWithPopup(e){return Ut(this.auth,oO(this._delegate,e,$r))}async linkWithRedirect(e){return await Wp(Me(this.auth)),mO(this._delegate,e,$r)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ut(this.auth,CS(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Gp(this.auth,XV(this._delegate,e,n))}reauthenticateWithPopup(e){return Ut(this.auth,sO(this._delegate,e,$r))}async reauthenticateWithRedirect(e){return await Wp(Me(this.auth)),fO(this._delegate,e,$r)}sendEmailVerification(e){return iV(this._delegate,e)}async unlink(e){return await qx(this._delegate,e),this}updateEmail(e){return aV(this._delegate,e)}updatePassword(e){return lV(this._delegate,e)}updatePhoneNumber(e){return ZV(this._delegate,e)}updateProfile(e){return bS(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return sV(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};id.USER_MAP=new WeakMap;/**
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
 */const Sa=j;class Kp{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Sa(r,"invalid-api-key",{appName:e.name}),Sa(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?$r:void 0;this._delegate=n.initialize({options:{persistence:FL(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(LD),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?id.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){vS(this._delegate,e,n)}applyActionCode(e){return Qx(this._delegate,e)}checkActionCode(e){return kS(this._delegate,e)}confirmPasswordReset(e,n){return Hx(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Ut(this._delegate,Jx(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return rV(this._delegate,e)}isSignInWithEmailLink(e){return eV(this._delegate,e)}async getRedirectResult(){Sa(Vf(),this._delegate,"operation-not-supported-in-this-environment");const e=await _O(this._delegate,$r);return e?Ut(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){wL(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=Ww(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=Ww(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return Zx(this._delegate,e,n)}sendPasswordResetEmail(e,n){return Kx(this._delegate,e,n||void 0)}async setPersistence(e){NL(this._delegate,e);let n;switch(e){case Jt.SESSION:n=oi;break;case Jt.LOCAL:n=await Zt(To)._isAvailable()?To:Zh;break;case Jt.NONE:n=Io;break;default:return lt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ut(this._delegate,$x(this._delegate))}signInWithCredential(e){return Ut(this._delegate,Jh(this._delegate,e))}signInWithCustomToken(e){return Ut(this._delegate,Gx(this._delegate,e))}signInWithEmailAndPassword(e,n){return Ut(this._delegate,Xx(this._delegate,e,n))}signInWithEmailLink(e,n){return Ut(this._delegate,tV(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Gp(this._delegate,YV(this._delegate,e,n))}async signInWithPopup(e){return Sa(Vf(),this._delegate,"operation-not-supported-in-this-environment"),Ut(this._delegate,iO(this._delegate,e,$r))}async signInWithRedirect(e){return Sa(Vf(),this._delegate,"operation-not-supported-in-this-environment"),await Wp(this._delegate),hO(this._delegate,e,$r)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return Yx(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Kp.Persistence=Jt;function Ww(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&id.getOrCreate(o)),error:e,complete:n}}function FL(t,e){const n=DL(t,e);if(typeof self<"u"&&!n.includes(To)&&n.push(To),typeof window<"u")for(const r of[Zh,oi])n.includes(r)||n.push(r);return n.includes(Io)||n.push(Io),n}/**
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
 */class Gg{constructor(){this.providerId="phone",this._delegate=new ts(eA(ge.auth()))}static credential(e,n){return ts.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Gg.PHONE_SIGN_IN_METHOD=ts.PHONE_SIGN_IN_METHOD;Gg.PROVIDER_ID=ts.PROVIDER_ID;/**
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
 */const UL=j;class BL{constructor(e,n,r=ge.app()){var i;UL((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new HV(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const jL="auth-compat";function zL(t){t.INTERNAL.registerComponent(new Rn(jL,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Kp(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ks.EMAIL_SIGNIN,PASSWORD_RESET:ks.PASSWORD_RESET,RECOVER_EMAIL:ks.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ks.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ks.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ks.VERIFY_EMAIL}},EmailAuthProvider:yi,FacebookAuthProvider:Dn,GithubAuthProvider:Vn,GoogleAuthProvider:xn,OAuthProvider:oo,SAMLAuthProvider:hh,PhoneAuthProvider:Gg,PhoneMultiFactorGenerator:HS,RecaptchaVerifier:BL,TwitterAuthProvider:On,Auth:Kp,AuthCredential:qo,Error:At}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(IL,EL)}zL(ge);var Gw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ki,nA;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function T(){}T.prototype=y.prototype,I.D=y.prototype,I.prototype=new T,I.prototype.constructor=I,I.C=function(A,k,C){for(var S=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)S[tt-2]=arguments[tt];return y.prototype[k].apply(A,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,y,T){T||(T=0);var A=Array(16);if(typeof y=="string")for(var k=0;16>k;++k)A[k]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(k=0;16>k;++k)A[k]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=I.g[0],T=I.g[1],k=I.g[2];var C=I.g[3],S=y+(C^T&(k^C))+A[0]+3614090360&4294967295;y=T+(S<<7&4294967295|S>>>25),S=C+(k^y&(T^k))+A[1]+3905402710&4294967295,C=y+(S<<12&4294967295|S>>>20),S=k+(T^C&(y^T))+A[2]+606105819&4294967295,k=C+(S<<17&4294967295|S>>>15),S=T+(y^k&(C^y))+A[3]+3250441966&4294967295,T=k+(S<<22&4294967295|S>>>10),S=y+(C^T&(k^C))+A[4]+4118548399&4294967295,y=T+(S<<7&4294967295|S>>>25),S=C+(k^y&(T^k))+A[5]+1200080426&4294967295,C=y+(S<<12&4294967295|S>>>20),S=k+(T^C&(y^T))+A[6]+2821735955&4294967295,k=C+(S<<17&4294967295|S>>>15),S=T+(y^k&(C^y))+A[7]+4249261313&4294967295,T=k+(S<<22&4294967295|S>>>10),S=y+(C^T&(k^C))+A[8]+1770035416&4294967295,y=T+(S<<7&4294967295|S>>>25),S=C+(k^y&(T^k))+A[9]+2336552879&4294967295,C=y+(S<<12&4294967295|S>>>20),S=k+(T^C&(y^T))+A[10]+4294925233&4294967295,k=C+(S<<17&4294967295|S>>>15),S=T+(y^k&(C^y))+A[11]+2304563134&4294967295,T=k+(S<<22&4294967295|S>>>10),S=y+(C^T&(k^C))+A[12]+1804603682&4294967295,y=T+(S<<7&4294967295|S>>>25),S=C+(k^y&(T^k))+A[13]+4254626195&4294967295,C=y+(S<<12&4294967295|S>>>20),S=k+(T^C&(y^T))+A[14]+2792965006&4294967295,k=C+(S<<17&4294967295|S>>>15),S=T+(y^k&(C^y))+A[15]+1236535329&4294967295,T=k+(S<<22&4294967295|S>>>10),S=y+(k^C&(T^k))+A[1]+4129170786&4294967295,y=T+(S<<5&4294967295|S>>>27),S=C+(T^k&(y^T))+A[6]+3225465664&4294967295,C=y+(S<<9&4294967295|S>>>23),S=k+(y^T&(C^y))+A[11]+643717713&4294967295,k=C+(S<<14&4294967295|S>>>18),S=T+(C^y&(k^C))+A[0]+3921069994&4294967295,T=k+(S<<20&4294967295|S>>>12),S=y+(k^C&(T^k))+A[5]+3593408605&4294967295,y=T+(S<<5&4294967295|S>>>27),S=C+(T^k&(y^T))+A[10]+38016083&4294967295,C=y+(S<<9&4294967295|S>>>23),S=k+(y^T&(C^y))+A[15]+3634488961&4294967295,k=C+(S<<14&4294967295|S>>>18),S=T+(C^y&(k^C))+A[4]+3889429448&4294967295,T=k+(S<<20&4294967295|S>>>12),S=y+(k^C&(T^k))+A[9]+568446438&4294967295,y=T+(S<<5&4294967295|S>>>27),S=C+(T^k&(y^T))+A[14]+3275163606&4294967295,C=y+(S<<9&4294967295|S>>>23),S=k+(y^T&(C^y))+A[3]+4107603335&4294967295,k=C+(S<<14&4294967295|S>>>18),S=T+(C^y&(k^C))+A[8]+1163531501&4294967295,T=k+(S<<20&4294967295|S>>>12),S=y+(k^C&(T^k))+A[13]+2850285829&4294967295,y=T+(S<<5&4294967295|S>>>27),S=C+(T^k&(y^T))+A[2]+4243563512&4294967295,C=y+(S<<9&4294967295|S>>>23),S=k+(y^T&(C^y))+A[7]+1735328473&4294967295,k=C+(S<<14&4294967295|S>>>18),S=T+(C^y&(k^C))+A[12]+2368359562&4294967295,T=k+(S<<20&4294967295|S>>>12),S=y+(T^k^C)+A[5]+4294588738&4294967295,y=T+(S<<4&4294967295|S>>>28),S=C+(y^T^k)+A[8]+2272392833&4294967295,C=y+(S<<11&4294967295|S>>>21),S=k+(C^y^T)+A[11]+1839030562&4294967295,k=C+(S<<16&4294967295|S>>>16),S=T+(k^C^y)+A[14]+4259657740&4294967295,T=k+(S<<23&4294967295|S>>>9),S=y+(T^k^C)+A[1]+2763975236&4294967295,y=T+(S<<4&4294967295|S>>>28),S=C+(y^T^k)+A[4]+1272893353&4294967295,C=y+(S<<11&4294967295|S>>>21),S=k+(C^y^T)+A[7]+4139469664&4294967295,k=C+(S<<16&4294967295|S>>>16),S=T+(k^C^y)+A[10]+3200236656&4294967295,T=k+(S<<23&4294967295|S>>>9),S=y+(T^k^C)+A[13]+681279174&4294967295,y=T+(S<<4&4294967295|S>>>28),S=C+(y^T^k)+A[0]+3936430074&4294967295,C=y+(S<<11&4294967295|S>>>21),S=k+(C^y^T)+A[3]+3572445317&4294967295,k=C+(S<<16&4294967295|S>>>16),S=T+(k^C^y)+A[6]+76029189&4294967295,T=k+(S<<23&4294967295|S>>>9),S=y+(T^k^C)+A[9]+3654602809&4294967295,y=T+(S<<4&4294967295|S>>>28),S=C+(y^T^k)+A[12]+3873151461&4294967295,C=y+(S<<11&4294967295|S>>>21),S=k+(C^y^T)+A[15]+530742520&4294967295,k=C+(S<<16&4294967295|S>>>16),S=T+(k^C^y)+A[2]+3299628645&4294967295,T=k+(S<<23&4294967295|S>>>9),S=y+(k^(T|~C))+A[0]+4096336452&4294967295,y=T+(S<<6&4294967295|S>>>26),S=C+(T^(y|~k))+A[7]+1126891415&4294967295,C=y+(S<<10&4294967295|S>>>22),S=k+(y^(C|~T))+A[14]+2878612391&4294967295,k=C+(S<<15&4294967295|S>>>17),S=T+(C^(k|~y))+A[5]+4237533241&4294967295,T=k+(S<<21&4294967295|S>>>11),S=y+(k^(T|~C))+A[12]+1700485571&4294967295,y=T+(S<<6&4294967295|S>>>26),S=C+(T^(y|~k))+A[3]+2399980690&4294967295,C=y+(S<<10&4294967295|S>>>22),S=k+(y^(C|~T))+A[10]+4293915773&4294967295,k=C+(S<<15&4294967295|S>>>17),S=T+(C^(k|~y))+A[1]+2240044497&4294967295,T=k+(S<<21&4294967295|S>>>11),S=y+(k^(T|~C))+A[8]+1873313359&4294967295,y=T+(S<<6&4294967295|S>>>26),S=C+(T^(y|~k))+A[15]+4264355552&4294967295,C=y+(S<<10&4294967295|S>>>22),S=k+(y^(C|~T))+A[6]+2734768916&4294967295,k=C+(S<<15&4294967295|S>>>17),S=T+(C^(k|~y))+A[13]+1309151649&4294967295,T=k+(S<<21&4294967295|S>>>11),S=y+(k^(T|~C))+A[4]+4149444226&4294967295,y=T+(S<<6&4294967295|S>>>26),S=C+(T^(y|~k))+A[11]+3174756917&4294967295,C=y+(S<<10&4294967295|S>>>22),S=k+(y^(C|~T))+A[2]+718787259&4294967295,k=C+(S<<15&4294967295|S>>>17),S=T+(C^(k|~y))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(k+(S<<21&4294967295|S>>>11))&4294967295,I.g[2]=I.g[2]+k&4294967295,I.g[3]=I.g[3]+C&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var T=y-this.blockSize,A=this.B,k=this.h,C=0;C<y;){if(k==0)for(;C<=T;)i(this,I,C),C+=this.blockSize;if(typeof I=="string"){for(;C<y;)if(A[k++]=I.charCodeAt(C++),k==this.blockSize){i(this,A),k=0;break}}else for(;C<y;)if(A[k++]=I[C++],k==this.blockSize){i(this,A),k=0;break}}this.h=k,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var T=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=T&255,T/=256;for(this.u(I),I=Array(16),y=T=0;4>y;++y)for(var A=0;32>A;A+=8)I[T++]=this.g[y]>>>A&255;return I};function s(I,y){var T=a;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=y(I)}function o(I,y){this.h=y;for(var T=[],A=!0,k=I.length-1;0<=k;k--){var C=I[k]|0;A&&C==y||(T[k]=C,A=!1)}this.g=T}var a={};function u(I){return-128<=I&&128>I?s(I,function(y){return new o([y|0],0>y?-1:0)}):new o([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return f;if(0>I)return b(c(-I));for(var y=[],T=1,A=0;I>=T;A++)y[A]=I/T|0,T*=4294967296;return new o(y,0)}function d(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return b(d(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(y,8)),A=f,k=0;k<I.length;k+=8){var C=Math.min(8,I.length-k),S=parseInt(I.substring(k,k+C),y);8>C?(C=c(Math.pow(y,C)),A=A.j(C).add(c(S))):(A=A.j(T),A=A.add(c(S)))}return A}var f=u(0),m=u(1),v=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-b(this).m();for(var I=0,y=1,T=0;T<this.g.length;T++){var A=this.i(T);I+=(0<=A?A:4294967296+A)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(R(this))return"0";if(P(this))return"-"+b(this).toString(I);for(var y=c(Math.pow(I,6)),T=this,A="";;){var k=D(T,y).g;T=E(T,k.j(y));var C=((0<T.g.length?T.g[0]:T.h)>>>0).toString(I);if(T=k,R(T))return C+A;for(;6>C.length;)C="0"+C;A=C+A}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function R(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function P(I){return I.h==-1}t.l=function(I){return I=E(this,I),P(I)?-1:R(I)?0:1};function b(I){for(var y=I.g.length,T=[],A=0;A<y;A++)T[A]=~I.g[A];return new o(T,~I.h).add(m)}t.abs=function(){return P(this)?b(this):this},t.add=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0,k=0;k<=y;k++){var C=A+(this.i(k)&65535)+(I.i(k)&65535),S=(C>>>16)+(this.i(k)>>>16)+(I.i(k)>>>16);A=S>>>16,C&=65535,S&=65535,T[k]=S<<16|C}return new o(T,T[T.length-1]&-2147483648?-1:0)};function E(I,y){return I.add(b(y))}t.j=function(I){if(R(this)||R(I))return f;if(P(this))return P(I)?b(this).j(b(I)):b(b(this).j(I));if(P(I))return b(this.j(b(I)));if(0>this.l(v)&&0>I.l(v))return c(this.m()*I.m());for(var y=this.g.length+I.g.length,T=[],A=0;A<2*y;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var k=0;k<I.g.length;k++){var C=this.i(A)>>>16,S=this.i(A)&65535,tt=I.i(k)>>>16,Sr=I.i(k)&65535;T[2*A+2*k]+=S*Sr,_(T,2*A+2*k),T[2*A+2*k+1]+=C*Sr,_(T,2*A+2*k+1),T[2*A+2*k+1]+=S*tt,_(T,2*A+2*k+1),T[2*A+2*k+2]+=C*tt,_(T,2*A+2*k+2)}for(A=0;A<y;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=y;A<2*y;A++)T[A]=0;return new o(T,0)};function _(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function w(I,y){this.g=I,this.h=y}function D(I,y){if(R(y))throw Error("division by zero");if(R(I))return new w(f,f);if(P(I))return y=D(b(I),y),new w(b(y.g),b(y.h));if(P(y))return y=D(I,b(y)),new w(b(y.g),y.h);if(30<I.g.length){if(P(I)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var T=m,A=y;0>=A.l(I);)T=L(T),A=L(A);var k=F(T,1),C=F(A,1);for(A=F(A,2),T=F(T,2);!R(A);){var S=C.add(A);0>=S.l(I)&&(k=k.add(T),C=S),A=F(A,1),T=F(T,1)}return y=E(I,k.j(y)),new w(k,y)}for(k=f;0<=I.l(y);){for(T=Math.max(1,Math.floor(I.m()/y.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),C=c(T),S=C.j(y);P(S)||0<S.l(I);)T-=A,C=c(T),S=C.j(y);R(C)&&(C=m),k=k.add(C),I=E(I,S)}return new w(k,I)}t.A=function(I){return D(this,I).h},t.and=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)&I.i(A);return new o(T,this.h&I.h)},t.or=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)|I.i(A);return new o(T,this.h|I.h)},t.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)^I.i(A);return new o(T,this.h^I.h)};function L(I){for(var y=I.g.length+1,T=[],A=0;A<y;A++)T[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(T,I.h)}function F(I,y){var T=y>>5;y%=32;for(var A=I.g.length-T,k=[],C=0;C<A;C++)k[C]=0<y?I.i(C+T)>>>y|I.i(C+T+1)<<32-y:I.i(C+T);return new o(k,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,nA=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Ki=o}).apply(typeof Gw<"u"?Gw:typeof self<"u"?self:typeof window<"u"?window:{});var tc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rA,iA,Ua,sA,Rc,Hp,oA,aA,lA;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,p){return l==Array.prototype||l==Object.prototype||(l[h]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof tc=="object"&&tc];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var p=r;l=l.split(".");for(var g=0;g<l.length-1;g++){var N=l[g];if(!(N in p))break e;p=p[N]}l=l[l.length-1],g=p[l],h=h(g),h!=g&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var p=0,g=!1,N={next:function(){if(!g&&p<l.length){var O=p++;return{value:h(O,l[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,p){return l.call.apply(l.bind,arguments)}function f(l,h,p){if(!l)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,g),l.apply(h,N)}}return function(){return l.apply(h,arguments)}}function m(l,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function v(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),l.apply(this,g)}}function R(l,h){function p(){}p.prototype=h.prototype,l.aa=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(g,N,O){for(var $=Array(arguments.length-2),me=2;me<arguments.length;me++)$[me-2]=arguments[me];return h.prototype[N].apply(g,$)}}function P(l){const h=l.length;if(0<h){const p=Array(h);for(let g=0;g<h;g++)p[g]=l[g];return p}return[]}function b(l,h){for(let p=1;p<arguments.length;p++){const g=arguments[p];if(u(g)){const N=l.length||0,O=g.length||0;l.length=N+O;for(let $=0;$<O;$++)l[N+$]=g[$]}else l.push(g)}}class E{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(l){return/^[\s\xa0]*$/.test(l)}function w(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function D(l){return D[" "](l),l}D[" "]=function(){};var L=w().indexOf("Gecko")!=-1&&!(w().toLowerCase().indexOf("webkit")!=-1&&w().indexOf("Edge")==-1)&&!(w().indexOf("Trident")!=-1||w().indexOf("MSIE")!=-1)&&w().indexOf("Edge")==-1;function F(l,h,p){for(const g in l)h.call(p,l[g],g,l)}function I(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function y(l){const h={};for(const p in l)h[p]=l[p];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(l,h){let p,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(p in g)l[p]=g[p];for(let O=0;O<T.length;O++)p=T[O],Object.prototype.hasOwnProperty.call(g,p)&&(l[p]=g[p])}}function k(l){var h=1;l=l.split(":");const p=[];for(;0<h&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function C(l){a.setTimeout(()=>{throw l},0)}function S(){var l=Z;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class tt{constructor(){this.h=this.g=null}add(h,p){const g=Sr.get();g.set(h,p),this.h?this.h.next=g:this.g=g,this.h=g}}var Sr=new E(()=>new Kn,l=>l.reset());class Kn{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let _n,K=!1,Z=new tt,ne=()=>{const l=a.Promise.resolve(void 0);_n=()=>{l.then(Ce)}};var Ce=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(p){C(p)}var h=Sr;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}K=!1};function pe(){this.s=this.s,this.C=this.C}pe.prototype.s=!1,pe.prototype.ma=function(){this.s||(this.s=!0,this.N())},pe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $e(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}$e.prototype.h=function(){this.defaultPrevented=!0};var Hn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return l}();function Qn(l,h){if($e.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,g=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(L){e:{try{D(h.nodeName);var N=!0;break e}catch{}N=!1}N||(h=null)}}else p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Yn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Qn.aa.h.call(this)}}R(Qn,$e);var Yn={2:"touch",3:"pen",4:"mouse"};Qn.prototype.h=function(){Qn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Jn="closure_listenable_"+(1e6*Math.random()|0),KP=0;function HP(l,h,p,g,N){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!g,this.ha=N,this.key=++KP,this.da=this.fa=!1}function vu(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function wu(l){this.src=l,this.g={},this.h=0}wu.prototype.add=function(l,h,p,g,N){var O=l.toString();l=this.g[O],l||(l=this.g[O]=[],this.h++);var $=kd(l,h,g,N);return-1<$?(h=l[$],p||(h.fa=!1)):(h=new HP(h,this.src,O,!!g,N),h.fa=p,l.push(h)),h};function Cd(l,h){var p=h.type;if(p in l.g){var g=l.g[p],N=Array.prototype.indexOf.call(g,h,void 0),O;(O=0<=N)&&Array.prototype.splice.call(g,N,1),O&&(vu(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function kd(l,h,p,g){for(var N=0;N<l.length;++N){var O=l[N];if(!O.da&&O.listener==h&&O.capture==!!p&&O.ha==g)return N}return-1}var bd="closure_lm_"+(1e6*Math.random()|0),Nd={};function Z_(l,h,p,g,N){if(Array.isArray(h)){for(var O=0;O<h.length;O++)Z_(l,h[O],p,g,N);return null}return p=ny(p),l&&l[Jn]?l.K(h,p,c(g)?!!g.capture:!!g,N):QP(l,h,p,!1,g,N)}function QP(l,h,p,g,N,O){if(!h)throw Error("Invalid event type");var $=c(N)?!!N.capture:!!N,me=xd(l);if(me||(l[bd]=me=new wu(l)),p=me.add(h,p,g,$,O),p.proxy)return p;if(g=YP(),p.proxy=g,g.src=l,g.listener=p,l.addEventListener)Hn||(N=$),N===void 0&&(N=!1),l.addEventListener(h.toString(),g,N);else if(l.attachEvent)l.attachEvent(ty(h.toString()),g);else if(l.addListener&&l.removeListener)l.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function YP(){function l(p){return h.call(l.src,l.listener,p)}const h=JP;return l}function ey(l,h,p,g,N){if(Array.isArray(h))for(var O=0;O<h.length;O++)ey(l,h[O],p,g,N);else g=c(g)?!!g.capture:!!g,p=ny(p),l&&l[Jn]?(l=l.i,h=String(h).toString(),h in l.g&&(O=l.g[h],p=kd(O,p,g,N),-1<p&&(vu(O[p]),Array.prototype.splice.call(O,p,1),O.length==0&&(delete l.g[h],l.h--)))):l&&(l=xd(l))&&(h=l.g[h.toString()],l=-1,h&&(l=kd(h,p,g,N)),(p=-1<l?h[l]:null)&&Dd(p))}function Dd(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[Jn])Cd(h.i,l);else{var p=l.type,g=l.proxy;h.removeEventListener?h.removeEventListener(p,g,l.capture):h.detachEvent?h.detachEvent(ty(p),g):h.addListener&&h.removeListener&&h.removeListener(g),(p=xd(h))?(Cd(p,l),p.h==0&&(p.src=null,h[bd]=null)):vu(l)}}}function ty(l){return l in Nd?Nd[l]:Nd[l]="on"+l}function JP(l,h){if(l.da)l=!0;else{h=new Qn(h,this);var p=l.listener,g=l.ha||l.src;l.fa&&Dd(l),l=p.call(g,h)}return l}function xd(l){return l=l[bd],l instanceof wu?l:null}var Vd="__closure_events_fn_"+(1e9*Math.random()>>>0);function ny(l){return typeof l=="function"?l:(l[Vd]||(l[Vd]=function(h){return l.handleEvent(h)}),l[Vd])}function yt(){pe.call(this),this.i=new wu(this),this.M=this,this.F=null}R(yt,pe),yt.prototype[Jn]=!0,yt.prototype.removeEventListener=function(l,h,p,g){ey(this,l,h,p,g)};function Pt(l,h){var p,g=l.F;if(g)for(p=[];g;g=g.F)p.push(g);if(l=l.M,g=h.type||h,typeof h=="string")h=new $e(h,l);else if(h instanceof $e)h.target=h.target||l;else{var N=h;h=new $e(g,l),A(h,N)}if(N=!0,p)for(var O=p.length-1;0<=O;O--){var $=h.g=p[O];N=Iu($,g,!0,h)&&N}if($=h.g=l,N=Iu($,g,!0,h)&&N,N=Iu($,g,!1,h)&&N,p)for(O=0;O<p.length;O++)$=h.g=p[O],N=Iu($,g,!1,h)&&N}yt.prototype.N=function(){if(yt.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var p=l.g[h],g=0;g<p.length;g++)vu(p[g]);delete l.g[h],l.h--}}this.F=null},yt.prototype.K=function(l,h,p,g){return this.i.add(String(l),h,!1,p,g)},yt.prototype.L=function(l,h,p,g){return this.i.add(String(l),h,!0,p,g)};function Iu(l,h,p,g){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var N=!0,O=0;O<h.length;++O){var $=h[O];if($&&!$.da&&$.capture==p){var me=$.listener,ht=$.ha||$.src;$.fa&&Cd(l.i,$),N=me.call(ht,g)!==!1&&N}}return N&&!g.defaultPrevented}function ry(l,h,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function iy(l){l.g=ry(()=>{l.g=null,l.i&&(l.i=!1,iy(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class XP extends pe{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:iy(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ea(l){pe.call(this),this.h=l,this.g={}}R(ea,pe);var sy=[];function oy(l){F(l.g,function(h,p){this.g.hasOwnProperty(p)&&Dd(h)},l),l.g={}}ea.prototype.N=function(){ea.aa.N.call(this),oy(this)},ea.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Od=a.JSON.stringify,ZP=a.JSON.parse,e1=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Ld(){}Ld.prototype.h=null;function ay(l){return l.h||(l.h=l.i())}function ly(){}var ta={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Md(){$e.call(this,"d")}R(Md,$e);function Fd(){$e.call(this,"c")}R(Fd,$e);var Ti={},uy=null;function Eu(){return uy=uy||new yt}Ti.La="serverreachability";function cy(l){$e.call(this,Ti.La,l)}R(cy,$e);function na(l){const h=Eu();Pt(h,new cy(h))}Ti.STAT_EVENT="statevent";function hy(l,h){$e.call(this,Ti.STAT_EVENT,l),this.stat=h}R(hy,$e);function Ct(l){const h=Eu();Pt(h,new hy(h,l))}Ti.Ma="timingevent";function dy(l,h){$e.call(this,Ti.Ma,l),this.size=h}R(dy,$e);function ra(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function ia(){this.g=!0}ia.prototype.xa=function(){this.g=!1};function t1(l,h,p,g,N,O){l.info(function(){if(l.g)if(O)for(var $="",me=O.split("&"),ht=0;ht<me.length;ht++){var ce=me[ht].split("=");if(1<ce.length){var vt=ce[0];ce=ce[1];var wt=vt.split("_");$=2<=wt.length&&wt[1]=="type"?$+(vt+"="+ce+"&"):$+(vt+"=redacted&")}}else $=null;else $=O;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+h+`
`+p+`
`+$})}function n1(l,h,p,g,N,O,$){l.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+h+`
`+p+`
`+O+" "+$})}function Ss(l,h,p,g){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+i1(l,p)+(g?" "+g:"")})}function r1(l,h){l.info(function(){return"TIMEOUT: "+h})}ia.prototype.info=function(){};function i1(l,h){if(!l.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var g=p[l];if(!(2>g.length)){var N=g[1];if(Array.isArray(N)&&!(1>N.length)){var O=N[0];if(O!="noop"&&O!="stop"&&O!="close")for(var $=1;$<N.length;$++)N[$]=""}}}}return Od(p)}catch{return h}}var Tu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},fy={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ud;function Su(){}R(Su,Ld),Su.prototype.g=function(){return new XMLHttpRequest},Su.prototype.i=function(){return{}},Ud=new Su;function Ar(l,h,p,g){this.j=l,this.i=h,this.l=p,this.R=g||1,this.U=new ea(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new py}function py(){this.i=null,this.g="",this.h=!1}var my={},Bd={};function jd(l,h,p){l.L=1,l.v=Cu(Xn(h)),l.m=p,l.P=!0,gy(l,null)}function gy(l,h){l.F=Date.now(),Au(l),l.A=Xn(l.v);var p=l.A,g=l.R;Array.isArray(g)||(g=[String(g)]),by(p.i,"t",g),l.C=0,p=l.j.J,l.h=new py,l.g=Hy(l.j,p?h:null,!l.m),0<l.O&&(l.M=new XP(m(l.Y,l,l.g),l.O)),h=l.U,p=l.g,g=l.ca;var N="readystatechange";Array.isArray(N)||(N&&(sy[0]=N.toString()),N=sy);for(var O=0;O<N.length;O++){var $=Z_(p,N[O],g||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),na(),t1(l.i,l.u,l.A,l.l,l.R,l.m)}Ar.prototype.ca=function(l){l=l.target;const h=this.M;h&&Zn(l)==3?h.j():this.Y(l)},Ar.prototype.Y=function(l){try{if(l==this.g)e:{const wt=Zn(this.g);var h=this.g.Ba();const Ps=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||My(this.g)))){this.J||wt!=4||h==7||(h==8||0>=Ps?na(3):na(2)),zd(this);var p=this.g.Z();this.X=p;t:if(_y(this)){var g=My(this.g);l="";var N=g.length,O=Zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Si(this),sa(this);var $="";break t}this.h.i=new a.TextDecoder}for(h=0;h<N;h++)this.h.h=!0,l+=this.h.i.decode(g[h],{stream:!(O&&h==N-1)});g.length=0,this.h.g+=l,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=p==200,n1(this.i,this.u,this.A,this.l,this.R,wt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var me,ht=this.g;if((me=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(me)){var ce=me;break t}}ce=null}if(p=ce)Ss(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$d(this,p);else{this.o=!1,this.s=3,Ct(12),Si(this),sa(this);break e}}if(this.P){p=!0;let yn;for(;!this.J&&this.C<$.length;)if(yn=s1(this,$),yn==Bd){wt==4&&(this.s=4,Ct(14),p=!1),Ss(this.i,this.l,null,"[Incomplete Response]");break}else if(yn==my){this.s=4,Ct(15),Ss(this.i,this.l,$,"[Invalid Chunk]"),p=!1;break}else Ss(this.i,this.l,yn,null),$d(this,yn);if(_y(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||$.length!=0||this.h.h||(this.s=1,Ct(16),p=!1),this.o=this.o&&p,!p)Ss(this.i,this.l,$,"[Invalid Chunked Response]"),Si(this),sa(this);else if(0<$.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Qd(vt),vt.M=!0,Ct(11))}}else Ss(this.i,this.l,$,null),$d(this,$);wt==4&&Si(this),this.o&&!this.J&&(wt==4?qy(this.j,this):(this.o=!1,Au(this)))}else E1(this.g),p==400&&0<$.indexOf("Unknown SID")?(this.s=3,Ct(12)):(this.s=0,Ct(13)),Si(this),sa(this)}}}catch{}finally{}};function _y(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function s1(l,h){var p=l.C,g=h.indexOf(`
`,p);return g==-1?Bd:(p=Number(h.substring(p,g)),isNaN(p)?my:(g+=1,g+p>h.length?Bd:(h=h.slice(g,g+p),l.C=g+p,h)))}Ar.prototype.cancel=function(){this.J=!0,Si(this)};function Au(l){l.S=Date.now()+l.I,yy(l,l.I)}function yy(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=ra(m(l.ba,l),h)}function zd(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Ar.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(r1(this.i,this.A),this.L!=2&&(na(),Ct(17)),Si(this),this.s=2,sa(this)):yy(this,this.S-l)};function sa(l){l.j.G==0||l.J||qy(l.j,l)}function Si(l){zd(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,oy(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function $d(l,h){try{var p=l.j;if(p.G!=0&&(p.g==l||qd(p.h,l))){if(!l.K&&qd(p.h,l)&&p.G==3){try{var g=p.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)xu(p),Nu(p);else break e;Hd(p),Ct(18)}}else p.za=N[1],0<p.za-p.T&&37500>N[2]&&p.F&&p.v==0&&!p.C&&(p.C=ra(m(p.Za,p),6e3));if(1>=Iy(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Ri(p,11)}else if((l.K||p.g==l)&&xu(p),!_(h))for(N=p.Da.g.parse(h),h=0;h<N.length;h++){let ce=N[h];if(p.T=ce[0],ce=ce[1],p.G==2)if(ce[0]=="c"){p.K=ce[1],p.ia=ce[2];const vt=ce[3];vt!=null&&(p.la=vt,p.j.info("VER="+p.la));const wt=ce[4];wt!=null&&(p.Aa=wt,p.j.info("SVER="+p.Aa));const Ps=ce[5];Ps!=null&&typeof Ps=="number"&&0<Ps&&(g=1.5*Ps,p.L=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const yn=l.g;if(yn){const Ou=yn.g?yn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ou){var O=g.h;O.g||Ou.indexOf("spdy")==-1&&Ou.indexOf("quic")==-1&&Ou.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Wd(O,O.h),O.h=null))}if(g.D){const Yd=yn.g?yn.g.getResponseHeader("X-HTTP-Session-Id"):null;Yd&&(g.ya=Yd,ve(g.I,g.D,Yd))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),g=p;var $=l;if(g.qa=Ky(g,g.J?g.ia:null,g.W),$.K){Ey(g.h,$);var me=$,ht=g.L;ht&&(me.I=ht),me.B&&(zd(me),Au(me)),g.g=$}else zy(g);0<p.i.length&&Du(p)}else ce[0]!="stop"&&ce[0]!="close"||Ri(p,7);else p.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Ri(p,7):Kd(p):ce[0]!="noop"&&p.l&&p.l.ta(ce),p.v=0)}}na(4)}catch{}}var o1=class{constructor(l,h){this.g=l,this.map=h}};function vy(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function wy(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Iy(l){return l.h?1:l.g?l.g.size:0}function qd(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function Wd(l,h){l.g?l.g.add(h):l.h=h}function Ey(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}vy.prototype.cancel=function(){if(this.i=Ty(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Ty(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.D);return h}return P(l.i)}function a1(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],p=l.length,g=0;g<p;g++)h.push(l[g]);return h}h=[],p=0;for(g in l)h[p++]=l[g];return h}function l1(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var p=0;p<l;p++)h.push(p);return h}h=[],p=0;for(const g in l)h[p++]=g;return h}}}function Sy(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var p=l1(l),g=a1(l),N=g.length,O=0;O<N;O++)h.call(void 0,g[O],p&&p[O],l)}var Ay=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function u1(l,h){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var g=l[p].indexOf("="),N=null;if(0<=g){var O=l[p].substring(0,g);N=l[p].substring(g+1)}else O=l[p];h(O,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Ai(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Ai){this.h=l.h,Ru(this,l.j),this.o=l.o,this.g=l.g,Pu(this,l.s),this.l=l.l;var h=l.i,p=new la;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),Ry(this,p),this.m=l.m}else l&&(h=String(l).match(Ay))?(this.h=!1,Ru(this,h[1]||"",!0),this.o=oa(h[2]||""),this.g=oa(h[3]||"",!0),Pu(this,h[4]),this.l=oa(h[5]||"",!0),Ry(this,h[6]||"",!0),this.m=oa(h[7]||"")):(this.h=!1,this.i=new la(null,this.h))}Ai.prototype.toString=function(){var l=[],h=this.j;h&&l.push(aa(h,Py,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push(aa(h,Py,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(aa(p,p.charAt(0)=="/"?d1:h1,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",aa(p,p1)),l.join("")};function Xn(l){return new Ai(l)}function Ru(l,h,p){l.j=p?oa(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Pu(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function Ry(l,h,p){h instanceof la?(l.i=h,m1(l.i,l.h)):(p||(h=aa(h,f1)),l.i=new la(h,l.h))}function ve(l,h,p){l.i.set(h,p)}function Cu(l){return ve(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function oa(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function aa(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,c1),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function c1(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Py=/[#\/\?@]/g,h1=/[#\?:]/g,d1=/[#\?]/g,f1=/[#\?@]/g,p1=/#/g;function la(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function Rr(l){l.g||(l.g=new Map,l.h=0,l.i&&u1(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=la.prototype,t.add=function(l,h){Rr(this),this.i=null,l=As(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function Cy(l,h){Rr(l),h=As(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function ky(l,h){return Rr(l),h=As(l,h),l.g.has(h)}t.forEach=function(l,h){Rr(this),this.g.forEach(function(p,g){p.forEach(function(N){l.call(h,N,g,this)},this)},this)},t.na=function(){Rr(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let g=0;g<h.length;g++){const N=l[g];for(let O=0;O<N.length;O++)p.push(h[g])}return p},t.V=function(l){Rr(this);let h=[];if(typeof l=="string")ky(this,l)&&(h=h.concat(this.g.get(As(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)h=h.concat(l[p])}return h},t.set=function(l,h){return Rr(this),this.i=null,l=As(this,l),ky(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function by(l,h,p){Cy(l,h),0<p.length&&(l.i=null,l.g.set(As(l,h),P(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var g=h[p];const O=encodeURIComponent(String(g)),$=this.V(g);for(g=0;g<$.length;g++){var N=O;$[g]!==""&&(N+="="+encodeURIComponent(String($[g]))),l.push(N)}}return this.i=l.join("&")};function As(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function m1(l,h){h&&!l.j&&(Rr(l),l.i=null,l.g.forEach(function(p,g){var N=g.toLowerCase();g!=N&&(Cy(this,g),by(this,N,p))},l)),l.j=h}function g1(l,h){const p=new ia;if(a.Image){const g=new Image;g.onload=v(Pr,p,"TestLoadImage: loaded",!0,h,g),g.onerror=v(Pr,p,"TestLoadImage: error",!1,h,g),g.onabort=v(Pr,p,"TestLoadImage: abort",!1,h,g),g.ontimeout=v(Pr,p,"TestLoadImage: timeout",!1,h,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=l}else h(!1)}function _1(l,h){const p=new ia,g=new AbortController,N=setTimeout(()=>{g.abort(),Pr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:g.signal}).then(O=>{clearTimeout(N),O.ok?Pr(p,"TestPingServer: ok",!0,h):Pr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),Pr(p,"TestPingServer: error",!1,h)})}function Pr(l,h,p,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(p)}catch{}}function y1(){this.g=new e1}function v1(l,h,p){const g=p||"";try{Sy(l,function(N,O){let $=N;c(N)&&($=Od(N)),h.push(g+O+"="+encodeURIComponent($))})}catch(N){throw h.push(g+"type="+encodeURIComponent("_badmap")),N}}function ua(l){this.l=l.Ub||null,this.j=l.eb||!1}R(ua,Ld),ua.prototype.g=function(){return new ku(this.l,this.j)},ua.prototype.i=function(l){return function(){return l}}({});function ku(l,h){yt.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(ku,yt),t=ku.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,ha(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ca(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,ha(this)),this.g&&(this.readyState=3,ha(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ny(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ny(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?ca(this):ha(this),this.readyState==3&&Ny(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,ca(this))},t.Qa=function(l){this.g&&(this.response=l,ca(this))},t.ga=function(){this.g&&ca(this)};function ca(l){l.readyState=4,l.l=null,l.j=null,l.v=null,ha(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function ha(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ku.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Dy(l){let h="";return F(l,function(p,g){h+=g,h+=":",h+=p,h+=`\r
`}),h}function Gd(l,h,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=Dy(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):ve(l,h,p))}function xe(l){yt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(xe,yt);var w1=/^https?$/i,I1=["POST","PUT"];t=xe.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ud.g(),this.v=this.o?ay(this.o):ay(Ud),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(O){xy(this,O);return}if(l=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)p.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())p.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(O=>O.toLowerCase()=="content-type"),N=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(I1,h,void 0))||g||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,$]of p)this.g.setRequestHeader(O,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ly(this),this.u=!0,this.g.send(l),this.u=!1}catch(O){xy(this,O)}};function xy(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,Vy(l),bu(l)}function Vy(l){l.A||(l.A=!0,Pt(l,"complete"),Pt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Pt(this,"complete"),Pt(this,"abort"),bu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),bu(this,!0)),xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Oy(this):this.bb())},t.bb=function(){Oy(this)};function Oy(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Zn(l)!=4||l.Z()!=2)){if(l.u&&Zn(l)==4)ry(l.Ea,0,l);else if(Pt(l,"readystatechange"),Zn(l)==4){l.h=!1;try{const $=l.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var g;if(g=$===0){var N=String(l.D).match(Ay)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),g=!w1.test(N?N.toLowerCase():"")}p=g}if(p)Pt(l,"complete"),Pt(l,"success");else{l.m=6;try{var O=2<Zn(l)?l.g.statusText:""}catch{O=""}l.l=O+" ["+l.Z()+"]",Vy(l)}}finally{bu(l)}}}}function bu(l,h){if(l.g){Ly(l);const p=l.g,g=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||Pt(l,"ready");try{p.onreadystatechange=g}catch{}}}function Ly(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Zn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Zn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),ZP(h)}};function My(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function E1(l){const h={};l=(l.g&&2<=Zn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<l.length;g++){if(_(l[g]))continue;var p=k(l[g]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const O=h[N]||[];h[N]=O,O.push(p)}I(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function da(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function Fy(l){this.Aa=0,this.i=[],this.j=new ia,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=da("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=da("baseRetryDelayMs",5e3,l),this.cb=da("retryDelaySeedMs",1e4,l),this.Wa=da("forwardChannelMaxRetries",2,l),this.wa=da("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new vy(l&&l.concurrentRequestLimit),this.Da=new y1,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Fy.prototype,t.la=8,t.G=1,t.connect=function(l,h,p,g){Ct(0),this.W=l,this.H=h||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.I=Ky(this,null,this.W),Du(this)};function Kd(l){if(Uy(l),l.G==3){var h=l.U++,p=Xn(l.I);if(ve(p,"SID",l.K),ve(p,"RID",h),ve(p,"TYPE","terminate"),fa(l,p),h=new Ar(l,l.j,h),h.L=2,h.v=Cu(Xn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=Hy(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Au(h)}Gy(l)}function Nu(l){l.g&&(Qd(l),l.g.cancel(),l.g=null)}function Uy(l){Nu(l),l.u&&(a.clearTimeout(l.u),l.u=null),xu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Du(l){if(!wy(l.h)&&!l.s){l.s=!0;var h=l.Ga;_n||ne(),K||(_n(),K=!0),Z.add(h,l),l.B=0}}function T1(l,h){return Iy(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=ra(m(l.Ga,l,h),Wy(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const N=new Ar(this,this.j,l);let O=this.o;if(this.S&&(O?(O=y(O),A(O,this.S)):O=this.S),this.m!==null||this.O||(N.H=O,O=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=jy(this,N,h),p=Xn(this.I),ve(p,"RID",l),ve(p,"CVER",22),this.D&&ve(p,"X-HTTP-Session-Id",this.D),fa(this,p),O&&(this.O?h="headers="+encodeURIComponent(String(Dy(O)))+"&"+h:this.m&&Gd(p,this.m,O)),Wd(this.h,N),this.Ua&&ve(p,"TYPE","init"),this.P?(ve(p,"$req",h),ve(p,"SID","null"),N.T=!0,jd(N,p,null)):jd(N,p,h),this.G=2}}else this.G==3&&(l?By(this,l):this.i.length==0||wy(this.h)||By(this))};function By(l,h){var p;h?p=h.l:p=l.U++;const g=Xn(l.I);ve(g,"SID",l.K),ve(g,"RID",p),ve(g,"AID",l.T),fa(l,g),l.m&&l.o&&Gd(g,l.m,l.o),p=new Ar(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),h&&(l.i=h.D.concat(l.i)),h=jy(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Wd(l.h,p),jd(p,g,h)}function fa(l,h){l.H&&F(l.H,function(p,g){ve(h,g,p)}),l.l&&Sy({},function(p,g){ve(h,g,p)})}function jy(l,h,p){p=Math.min(l.i.length,p);var g=l.l?m(l.l.Na,l.l,l):null;e:{var N=l.i;let O=-1;for(;;){const $=["count="+p];O==-1?0<p?(O=N[0].g,$.push("ofs="+O)):O=0:$.push("ofs="+O);let me=!0;for(let ht=0;ht<p;ht++){let ce=N[ht].g;const vt=N[ht].map;if(ce-=O,0>ce)O=Math.max(0,N[ht].g-100),me=!1;else try{v1(vt,$,"req"+ce+"_")}catch{g&&g(vt)}}if(me){g=$.join("&");break e}}}return l=l.i.splice(0,p),h.D=l,g}function zy(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;_n||ne(),K||(_n(),K=!0),Z.add(h,l),l.v=0}}function Hd(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=ra(m(l.Fa,l),Wy(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,$y(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=ra(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ct(10),Nu(this),$y(this))};function Qd(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function $y(l){l.g=new Ar(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=Xn(l.qa);ve(h,"RID","rpc"),ve(h,"SID",l.K),ve(h,"AID",l.T),ve(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&ve(h,"TO",l.ja),ve(h,"TYPE","xmlhttp"),fa(l,h),l.m&&l.o&&Gd(h,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=Cu(Xn(h)),p.m=null,p.P=!0,gy(p,l)}t.Za=function(){this.C!=null&&(this.C=null,Nu(this),Hd(this),Ct(19))};function xu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function qy(l,h){var p=null;if(l.g==h){xu(l),Qd(l),l.g=null;var g=2}else if(qd(l.h,h))p=h.D,Ey(l.h,h),g=1;else return;if(l.G!=0){if(h.o)if(g==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var N=l.B;g=Eu(),Pt(g,new dy(g,p)),Du(l)}else zy(l);else if(N=h.s,N==3||N==0&&0<h.X||!(g==1&&T1(l,h)||g==2&&Hd(l)))switch(p&&0<p.length&&(h=l.h,h.i=h.i.concat(p)),N){case 1:Ri(l,5);break;case 4:Ri(l,10);break;case 3:Ri(l,6);break;default:Ri(l,2)}}}function Wy(l,h){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*h}function Ri(l,h){if(l.j.info("Error code "+h),h==2){var p=m(l.fb,l),g=l.Xa;const N=!g;g=new Ai(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ru(g,"https"),Cu(g),N?g1(g.toString(),p):_1(g.toString(),p)}else Ct(2);l.G=0,l.l&&l.l.sa(h),Gy(l),Uy(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function Gy(l){if(l.G=0,l.ka=[],l.l){const h=Ty(l.h);(h.length!=0||l.i.length!=0)&&(b(l.ka,h),b(l.ka,l.i),l.h.i.length=0,P(l.i),l.i.length=0),l.l.ra()}}function Ky(l,h,p){var g=p instanceof Ai?Xn(p):new Ai(p);if(g.g!="")h&&(g.g=h+"."+g.g),Pu(g,g.s);else{var N=a.location;g=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;var O=new Ai(null);g&&Ru(O,g),h&&(O.g=h),N&&Pu(O,N),p&&(O.l=p),g=O}return p=l.D,h=l.ya,p&&h&&ve(g,p,h),ve(g,"VER",l.la),fa(l,g),g}function Hy(l,h,p){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new xe(new ua({eb:p})):new xe(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qy(){}t=Qy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Vu(){}Vu.prototype.g=function(l,h){return new Qt(l,h)};function Qt(l,h){yt.call(this),this.g=new Fy(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!_(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Rs(this)}R(Qt,yt),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){Kd(this.g)},Qt.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=Od(l),l=p);h.i.push(new o1(h.Ya++,l)),h.G==3&&Du(h)},Qt.prototype.N=function(){this.g.l=null,delete this.j,Kd(this.g),delete this.g,Qt.aa.N.call(this)};function Yy(l){Md.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}R(Yy,Md);function Jy(){Fd.call(this),this.status=1}R(Jy,Fd);function Rs(l){this.g=l}R(Rs,Qy),Rs.prototype.ua=function(){Pt(this.g,"a")},Rs.prototype.ta=function(l){Pt(this.g,new Yy(l))},Rs.prototype.sa=function(l){Pt(this.g,new Jy)},Rs.prototype.ra=function(){Pt(this.g,"b")},Vu.prototype.createWebChannel=Vu.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,lA=function(){return new Vu},aA=function(){return Eu()},oA=Ti,Hp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Tu.NO_ERROR=0,Tu.TIMEOUT=8,Tu.HTTP_ERROR=6,Rc=Tu,fy.COMPLETE="complete",sA=fy,ly.EventType=ta,ta.OPEN="a",ta.CLOSE="b",ta.ERROR="c",ta.MESSAGE="d",yt.prototype.listen=yt.prototype.K,Ua=ly,iA=ua,xe.prototype.listenOnce=xe.prototype.L,xe.prototype.getLastError=xe.prototype.Ka,xe.prototype.getLastErrorCode=xe.prototype.Ba,xe.prototype.getStatus=xe.prototype.Z,xe.prototype.getResponseJson=xe.prototype.Oa,xe.prototype.getResponseText=xe.prototype.oa,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Ha,rA=xe}).apply(typeof tc<"u"?tc:typeof self<"u"?self:typeof window<"u"?window:{});const Kw="@firebase/firestore";/**
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
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
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
 */let Go="10.12.1";/**
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
 */const ai=new Gh("@firebase/firestore");function Vs(){return ai.logLevel}function $L(t){ai.setLogLevel(t)}function U(t,...e){if(ai.logLevel<=re.DEBUG){const n=e.map(Kg);ai.debug(`Firestore (${Go}): ${t}`,...n)}}function We(t,...e){if(ai.logLevel<=re.ERROR){const n=e.map(Kg);ai.error(`Firestore (${Go}): ${t}`,...n)}}function Cn(t,...e){if(ai.logLevel<=re.WARN){const n=e.map(Kg);ai.warn(`Firestore (${Go}): ${t}`,...n)}}function Kg(t){if(typeof t=="string")return t;try{/**
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
 */function H(t="Unexpected state"){const e=`FIRESTORE (${Go}) INTERNAL ASSERTION FAILED: `+t;throw We(e),new Error(e)}function Y(t,e){t||H()}function qL(t,e){t||H()}function G(t,e){return t}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends At{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class at{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class uA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class WL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class GL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class KL{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new at;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new at,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new at)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string"),new uA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string"),new it(e)}}class HL{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class QL{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new HL(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class YL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JL{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Y(typeof n.token=="string"),this.R=n.token,new YL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function XL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class cA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=XL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ee(t,e){return t<e?-1:t>e?1:0}function So(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function hA(t){return t+"\0"}/**
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
 */class Re{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Re(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Re(0,0))}static max(){return new J(new Re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Vl{constructor(e,n,r){n===void 0?n=0:n>e.length&&H(),r===void 0?r=e.length-n:r>e.length-n&&H(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Vl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Vl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class se extends Vl{construct(e,n,r){return new se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new se(n)}static emptyPath(){return new se([])}}const ZL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Se extends Vl{construct(e,n,r){return new Se(e,n,r)}static isValidIdentifier(e){return ZL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Se.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Se(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new M(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new M(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new M(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new M(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Se(n)}static emptyPath(){return new Se([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(se.fromString(e))}static fromName(e){return new W(se.fromString(e).popFirst(5))}static empty(){return new W(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new se(e.slice()))}}/**
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
 */class mh{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Qp(t){return t.fields.find(e=>e.kind===2)}function Ni(t){return t.fields.filter(e=>e.kind!==2)}mh.UNKNOWN_ID=-1;class Pc{constructor(e,n){this.fieldPath=e,this.kind=n}}class Ol{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Ol(0,sn.min())}}function dA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Re(n+1,0):new Re(n,r));return new sn(i,W.empty(),e)}function fA(t){return new sn(t.readTime,t.key,-1)}class sn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new sn(J.min(),W.empty(),-1)}static max(){return new sn(J.max(),W.empty(),-1)}}function Hg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
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
 */const pA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function vi(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==pA)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(i=>i?x.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new x((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new x((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class sd{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new at,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new tl(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Qg(r.target.error);this.V.reject(new tl(e,i))}}static open(e,n,r,i){try{return new sd(n,e.transaction(i,r))}catch(s){throw new tl(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(U("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new tM(n)}}class zn{constructor(e,n,r){this.name=e,this.version=n,this.p=r,zn.S(Pe())===12.2&&We("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return U("SimpleDb","Removing database:",e),Di(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Pl())return!1;if(zn.C())return!0;const e=Pe(),n=zn.S(e),r=0<n&&n<10,i=gA(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.v)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(U("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new tl(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new M(V.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new M(V.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new tl(e,o))},i.onupgradeneeded=s=>{U("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{U("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=sd.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),x.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(U("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function gA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class eM{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Di(this.B.delete())}}class tl extends M{constructor(e,n){super(V.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function wi(t){return t.name==="IndexedDbTransactionError"}class tM{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(U("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(U("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Di(r)}add(e){return U("SimpleDb","ADD",this.store.name,e,e),Di(this.store.add(e))}get(e){return Di(this.store.get(e)).next(n=>(n===void 0&&(n=null),U("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return U("SimpleDb","DELETE",this.store.name,e),Di(this.store.delete(e))}count(){return U("SimpleDb","COUNT",this.store.name),Di(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new x((o,a)=>{s.onerror=u=>{a(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,u)=>{o.push(u)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new x((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){U("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new x((r,i)=>{n.onerror=s=>{const o=Qg(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new x((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new eM(a),c=n(a.primaryKey,a.value,u);if(c instanceof x){const d=c.catch(f=>(u.done(),x.reject(f)));r.push(d)}u.isDone?i():u.K===null?a.continue():a.continue(u.K)}}).next(()=>x.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Di(t){return new x((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Qg(r.target.error);n(i)}})}let Hw=!1;function Qg(t){const e=zn.S(Pe());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new M("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Hw||(Hw=!0,setTimeout(()=>{throw r},0)),r}}return t}class nM{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){U("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{U("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){wi(n)?U("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await vi(n)}await this.X(6e4)})}}class rM{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return x.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return U("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(U("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=fA(s);Hg(o,r)>0&&(r=o)}),new sn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class $t{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}$t.oe=-1;function ou(t){return t==null}function Ll(t){return t===0&&1/t==-1/0}function _A(t){return typeof t=="number"&&Number.isInteger(t)&&!Ll(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Vt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Qw(e)),e=iM(t.get(n),e);return Qw(e)}function iM(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Qw(t){return t+""}function Mn(t){const e=t.length;if(Y(e>=2),e===2)return Y(t.charAt(0)===""&&t.charAt(1)===""),se.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&H(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:H()}s=o+2}return new se(r)}/**
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
 */const Yw=["userId","batchId"];/**
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
 */function Cc(t,e){return[t,Vt(e)]}function yA(t,e,n){return[t,Vt(e),n]}const sM={},oM=["prefixPath","collectionGroup","readTime","documentId"],aM=["prefixPath","collectionGroup","documentId"],lM=["collectionGroup","readTime","prefixPath","documentId"],uM=["canonicalId","targetId"],cM=["targetId","path"],hM=["path","targetId"],dM=["collectionId","parent"],fM=["indexId","uid"],pM=["uid","sequenceNumber"],mM=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],gM=["indexId","uid","orderedDocumentKey"],_M=["userId","collectionPath","documentId"],yM=["userId","collectionPath","largestBatchId"],vM=["userId","collectionGroup","largestBatchId"],vA=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],wM=[...vA,"documentOverlays"],wA=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],IA=wA,EA=[...IA,"indexConfiguration","indexState","indexEntries"],IM=EA;/**
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
 */class Yp extends mA{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function ut(t,e){const n=G(t);return zn.F(n._e,e)}/**
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
 */function Jw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function TA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ye{constructor(e,n){this.comparator=e,this.root=n||pt.EMPTY}insert(e,n){return new ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(e){return new ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nc(this.root,e,this.comparator,!1)}getReverseIterator(){return new nc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nc(this.root,e,this.comparator,!0)}}class nc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??pt.RED,this.left=i??pt.EMPTY,this.right=s??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new pt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return pt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(e,n,r,i,s){return this}insert(e,n,r){return new pt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class fe{constructor(e){this.comparator=e,this.data=new ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xw(this.data.getIterator())}getIteratorFrom(e){return new Xw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new fe(this.comparator);return n.data=e,n}}class Xw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function bs(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class qt{constructor(e){this.fields=e,e.sort(Se.comparator)}static empty(){return new qt([])}unionWith(e){let n=new fe(Se.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return So(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class SA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function EM(){return typeof atob<"u"}/**
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
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new SA("Invalid base64 string: "+s):s}}(e);return new et(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const TM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mr(t){if(Y(!!t),typeof t=="string"){let e=0;const n=TM.exec(t);if(Y(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function li(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
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
 */function od(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Yg(t){const e=t.mapValue.fields.__previous_value__;return od(e)?Yg(e):e}function Ml(t){const e=mr(t.mapValue.fields.__local_write_time__.timestampValue);return new Re(e.seconds,e.nanos)}/**
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
 */class SM{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class ui{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ui("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ui&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const qr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},kc={nullValue:"NULL_VALUE"};function rs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?od(t)?4:AA(t)?9007199254740991:10:H()}function Wn(t,e){if(t===e)return!0;const n=rs(t);if(n!==rs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ml(t).isEqual(Ml(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=mr(i.timestampValue),a=mr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return li(i.bytesValue).isEqual(li(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Oe(i.geoPointValue.latitude)===Oe(s.geoPointValue.latitude)&&Oe(i.geoPointValue.longitude)===Oe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Oe(i.integerValue)===Oe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Oe(i.doubleValue),a=Oe(s.doubleValue);return o===a?Ll(o)===Ll(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return So(t.arrayValue.values||[],e.arrayValue.values||[],Wn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Jw(o)!==Jw(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Wn(o[u],a[u])))return!1;return!0}(t,e);default:return H()}}function Fl(t,e){return(t.values||[]).find(n=>Wn(n,e))!==void 0}function ci(t,e){if(t===e)return 0;const n=rs(t),r=rs(e);if(n!==r)return ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Oe(s.integerValue||s.doubleValue),u=Oe(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return Zw(t.timestampValue,e.timestampValue);case 4:return Zw(Ml(t),Ml(e));case 5:return ee(t.stringValue,e.stringValue);case 6:return function(s,o){const a=li(s),u=li(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=ee(a[c],u[c]);if(d!==0)return d}return ee(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ee(Oe(s.latitude),Oe(o.latitude));return a!==0?a:ee(Oe(s.longitude),Oe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const d=ci(a[c],u[c]);if(d)return d}return ee(a.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===qr.mapValue&&o===qr.mapValue)return 0;if(s===qr.mapValue)return 1;if(o===qr.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=ee(u[f],d[f]);if(m!==0)return m;const v=ci(a[u[f]],c[d[f]]);if(v!==0)return v}return ee(u.length,d.length)}(t.mapValue,e.mapValue);default:throw H()}}function Zw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=mr(t),r=mr(e),i=ee(n.seconds,r.seconds);return i!==0?i:ee(n.nanos,r.nanos)}function Ao(t){return Jp(t)}function Jp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=mr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return li(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Jp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Jp(n.fields[o])}`;return i+"}"}(t.mapValue):H()}function is(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Xp(t){return!!t&&"integerValue"in t}function Ul(t){return!!t&&"arrayValue"in t}function eI(t){return!!t&&"nullValue"in t}function tI(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function bc(t){return!!t&&"mapValue"in t}function nl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=nl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=nl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function AA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function AM(t){return"nullValue"in t?kc:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?is(ui.empty(),W.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:H()}function RM(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?is(ui.empty(),W.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?qr:H()}function nI(t,e){const n=ci(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function rI(t,e){const n=ci(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!bc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=nl(n)}setAll(e){let n=Se.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=nl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());bc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];bc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){vs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new mt(nl(this.value))}}function RA(t){const e=[];return vs(t.fields,(n,r)=>{const i=new Se([n]);if(bc(r)){const s=RA(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new qt(e)}/**
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
 */class Ie{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ie(e,0,J.min(),J.min(),J.min(),mt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ie(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new Ie(e,2,n,J.min(),J.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new Ie(e,3,n,J.min(),J.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ie(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class hi{constructor(e,n){this.position=e,this.inclusive=n}}function iI(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=ci(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function sI(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Bl{constructor(e,n="asc"){this.field=e,this.dir=n}}function PM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class PA{}class oe extends PA{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new CM(e,n,r):n==="array-contains"?new NM(e,r):n==="in"?new xA(e,r):n==="not-in"?new DM(e,r):n==="array-contains-any"?new xM(e,r):new oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new kM(e,r):new bM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ci(n,this.value)):n!==null&&rs(this.value)===rs(n)&&this.matchesComparison(ci(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class he extends PA{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new he(e,n)}matches(e){return Ro(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ro(t){return t.op==="and"}function Zp(t){return t.op==="or"}function Jg(t){return CA(t)&&Ro(t)}function CA(t){for(const e of t.filters)if(e instanceof he)return!1;return!0}function em(t){if(t instanceof oe)return t.field.canonicalString()+t.op.toString()+Ao(t.value);if(Jg(t))return t.filters.map(e=>em(e)).join(",");{const e=t.filters.map(n=>em(n)).join(",");return`${t.op}(${e})`}}function kA(t,e){return t instanceof oe?function(r,i){return i instanceof oe&&r.op===i.op&&r.field.isEqual(i.field)&&Wn(r.value,i.value)}(t,e):t instanceof he?function(r,i){return i instanceof he&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&kA(o,i.filters[a]),!0):!1}(t,e):void H()}function bA(t,e){const n=t.filters.concat(e);return he.create(n,t.op)}function NA(t){return t instanceof oe?function(n){return`${n.field.canonicalString()} ${n.op} ${Ao(n.value)}`}(t):t instanceof he?function(n){return n.op.toString()+" {"+n.getFilters().map(NA).join(" ,")+"}"}(t):"Filter"}class CM extends oe{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class kM extends oe{constructor(e,n){super(e,"in",n),this.keys=DA("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class bM extends oe{constructor(e,n){super(e,"not-in",n),this.keys=DA("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function DA(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class NM extends oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ul(n)&&Fl(n.arrayValue,this.value)}}class xA extends oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Fl(this.value.arrayValue,n)}}class DM extends oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Fl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Fl(this.value.arrayValue,n)}}class xM extends oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ul(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Fl(this.value.arrayValue,r))}}/**
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
 */class VM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function tm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new VM(t,e,n,r,i,s,o)}function ss(t){const e=G(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>em(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ou(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ao(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ao(r)).join(",")),e.ue=n}return e.ue}function au(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!PM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!kA(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!sI(t.startAt,e.startAt)&&sI(t.endAt,e.endAt)}function gh(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function _h(t,e){return t.filters.filter(n=>n instanceof oe&&n.field.isEqual(e))}function oI(t,e,n){let r=kc,i=!0;for(const s of _h(t,e)){let o=kc,a=!0;switch(s.op){case"<":case"<=":o=AM(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=kc}nI({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];nI({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function aI(t,e,n){let r=qr,i=!0;for(const s of _h(t,e)){let o=qr,a=!0;switch(s.op){case">=":case">":o=RM(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=qr}rI({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];rI({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Ir{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function VA(t,e,n,r,i,s,o,a){return new Ir(t,e,n,r,i,s,o,a)}function Ko(t){return new Ir(t)}function lI(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Xg(t){return t.collectionGroup!==null}function lo(t){const e=G(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new fe(Se.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Bl(s,r))}),n.has(Se.keyField().canonicalString())||e.ce.push(new Bl(Se.keyField(),r))}return e.ce}function Ot(t){const e=G(t);return e.le||(e.le=OM(e,lo(t))),e.le}function OM(t,e){if(t.limitType==="F")return tm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Bl(i.field,s)});const n=t.endAt?new hi(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new hi(t.startAt.position,t.startAt.inclusive):null;return tm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function nm(t,e){const n=t.filters.concat([e]);return new Ir(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function yh(t,e,n){return new Ir(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function lu(t,e){return au(Ot(t),Ot(e))&&t.limitType===e.limitType}function OA(t){return`${ss(Ot(t))}|lt:${t.limitType}`}function Os(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>NA(i)).join(", ")}]`),ou(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ao(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ao(i)).join(",")),`Target(${r})`}(Ot(t))}; limitType=${t.limitType})`}function uu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of lo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=iI(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,lo(r),i)||r.endAt&&!function(o,a,u){const c=iI(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,lo(r),i))}(t,e)}function LA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function MA(t){return(e,n)=>{let r=!1;for(const i of lo(t)){const s=LM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function LM(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?ci(u,c):H()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
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
 */class Ii{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){vs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return TA(this.inner)}size(){return this.innerSize}}/**
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
 */const MM=new ye(W.comparator);function Wt(){return MM}const FA=new ye(W.comparator);function Ba(...t){let e=FA;for(const n of t)e=e.insert(n.key,n);return e}function UA(t){let e=FA;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Fn(){return rl()}function BA(){return rl()}function rl(){return new Ii(t=>t.toString(),(t,e)=>t.isEqual(e))}const FM=new ye(W.comparator),UM=new fe(W.comparator);function te(...t){let e=UM;for(const n of t)e=e.add(n);return e}const BM=new fe(ee);function Zg(){return BM}/**
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
 */function jA(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ll(e)?"-0":e}}function zA(t){return{integerValue:""+t}}function $A(t,e){return _A(e)?zA(e):jA(t,e)}/**
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
 */class ad{constructor(){this._=void 0}}function jM(t,e,n){return t instanceof Po?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&od(s)&&(s=Yg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof os?WA(t,e):t instanceof as?GA(t,e):function(i,s){const o=qA(i,s),a=uI(o)+uI(i.Pe);return Xp(o)&&Xp(i.Pe)?zA(a):jA(i.serializer,a)}(t,e)}function zM(t,e,n){return t instanceof os?WA(t,e):t instanceof as?GA(t,e):n}function qA(t,e){return t instanceof Co?function(r){return Xp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Po extends ad{}class os extends ad{constructor(e){super(),this.elements=e}}function WA(t,e){const n=KA(e);for(const r of t.elements)n.some(i=>Wn(i,r))||n.push(r);return{arrayValue:{values:n}}}class as extends ad{constructor(e){super(),this.elements=e}}function GA(t,e){let n=KA(e);for(const r of t.elements)n=n.filter(i=>!Wn(i,r));return{arrayValue:{values:n}}}class Co extends ad{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function uI(t){return Oe(t.integerValue||t.doubleValue)}function KA(t){return Ul(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class cu{constructor(e,n){this.field=e,this.transform=n}}function $M(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof os&&i instanceof os||r instanceof as&&i instanceof as?So(r.elements,i.elements,Wn):r instanceof Co&&i instanceof Co?Wn(r.Pe,i.Pe):r instanceof Po&&i instanceof Po}(t.transform,e.transform)}class qM{constructor(e,n){this.version=e,this.transformResults=n}}class Ae{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ae}static exists(e){return new Ae(void 0,e)}static updateTime(e){return new Ae(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ld{}function HA(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Qo(t.key,Ae.none()):new Ho(t.key,t.data,Ae.none());{const n=t.data,r=mt.empty();let i=new fe(Se.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Er(t.key,r,new qt(i.toArray()),Ae.none())}}function WM(t,e,n){t instanceof Ho?function(i,s,o){const a=i.value.clone(),u=hI(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Er?function(i,s,o){if(!Nc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=hI(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(QA(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function il(t,e,n,r){return t instanceof Ho?function(s,o,a,u){if(!Nc(s.precondition,o))return a;const c=s.value.clone(),d=dI(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Er?function(s,o,a,u){if(!Nc(s.precondition,o))return a;const c=dI(s.fieldTransforms,u,o),d=o.data;return d.setAll(QA(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Nc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function GM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=qA(r.transform,i||null);s!=null&&(n===null&&(n=mt.empty()),n.set(r.field,s))}return n||null}function cI(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&So(r,i,(s,o)=>$M(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ho extends ld{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Er extends ld{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function QA(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function hI(t,e,n){const r=new Map;Y(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,zM(o,a,n[i]))}return r}function dI(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,jM(s,o,e))}return r}class Qo extends ld{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class e_ extends ld{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class t_{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&WM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=il(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=il(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=BA();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=HA(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&So(this.mutations,e.mutations,(n,r)=>cI(n,r))&&So(this.baseMutations,e.baseMutations,(n,r)=>cI(n,r))}}class n_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Y(e.mutations.length===r.length);let i=function(){return FM}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new n_(e,n,r,i)}}/**
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
 */class r_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class KM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ke,ae;function YA(t){switch(t){default:return H();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function JA(t){if(t===void 0)return We("GRPC error has no .code"),V.UNKNOWN;switch(t){case Ke.OK:return V.OK;case Ke.CANCELLED:return V.CANCELLED;case Ke.UNKNOWN:return V.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return V.INTERNAL;case Ke.UNAVAILABLE:return V.UNAVAILABLE;case Ke.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ke.NOT_FOUND:return V.NOT_FOUND;case Ke.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ke.ABORTED:return V.ABORTED;case Ke.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ke.DATA_LOSS:return V.DATA_LOSS;default:return H()}}(ae=Ke||(Ke={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function XA(){return new TextEncoder}/**
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
 */const HM=new Ki([4294967295,4294967295],0);function fI(t){const e=XA().encode(t),n=new nA;return n.update(e),new Uint8Array(n.digest())}function pI(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ki([n,r],0),new Ki([i,s],0)]}class i_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ja(`Invalid padding: ${n}`);if(r<0)throw new ja(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ja(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ja(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ki.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Ki.fromNumber(r)));return i.compare(HM)===1&&(i=new Ki([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=fI(e),[r,i]=pI(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new i_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=fI(e),[r,i]=pI(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ja extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class hu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,du.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new hu(J.min(),i,new ye(ee),Wt(),te())}}class du{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new du(r,n,te(),te(),te())}}/**
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
 */class Dc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class ZA{constructor(e,n){this.targetId=e,this.me=n}}class eR{constructor(e,n,r=et.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class mI{constructor(){this.fe=0,this.ge=_I(),this.pe=et.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=te(),n=te(),r=te();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:H()}}),new du(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=_I()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Y(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class QM{constructor(e){this.Le=e,this.Be=new Map,this.ke=Wt(),this.qe=gI(),this.Qe=new ye(ee)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:H()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(gh(s))if(r===0){const o=new W(s.path);this.Ue(n,o,Ie.newNoDocument(o,J.min()))}else Y(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=li(r).toUint8Array()}catch(u){if(u instanceof SA)return Cn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new i_(o,i,s)}catch(u){return Cn(u instanceof ja?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&gh(a.target)){const u=new W(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ie.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=te();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new hu(e,n,this.Qe,this.ke,r);return this.ke=Wt(),this.qe=gI(),this.Qe=new ye(ee),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new mI,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new fe(ee),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new mI),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function gI(){return new ye(W.comparator)}function _I(){return new ye(W.comparator)}const YM={asc:"ASCENDING",desc:"DESCENDING"},JM={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},XM={and:"AND",or:"OR"};class ZM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function rm(t,e){return t.useProto3Json||ou(e)?e:{value:e}}function ko(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tR(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function e2(t,e){return ko(t,e.toTimestamp())}function Ge(t){return Y(!!t),J.fromTimestamp(function(n){const r=mr(n);return new Re(r.seconds,r.nanos)}(t))}function s_(t,e){return im(t,e).canonicalString()}function im(t,e){const n=function(i){return new se(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function nR(t){const e=se.fromString(t);return Y(dR(e)),e}function jl(t,e){return s_(t.databaseId,e.path)}function $n(t,e){const n=nR(e);if(n.get(1)!==t.databaseId.projectId)throw new M(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(sR(n))}function rR(t,e){return s_(t.databaseId,e)}function iR(t){const e=nR(t);return e.length===4?se.emptyPath():sR(e)}function sm(t){return new se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function sR(t){return Y(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function yI(t,e,n){return{name:jl(t,e),fields:n.value.mapValue.fields}}function oR(t,e,n){const r=$n(t,e.name),i=Ge(e.updateTime),s=e.createTime?Ge(e.createTime):J.min(),o=new mt({mapValue:{fields:e.fields}}),a=Ie.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function t2(t,e){return"found"in e?function(r,i){Y(!!i.found),i.found.name,i.found.updateTime;const s=$n(r,i.found.name),o=Ge(i.found.updateTime),a=i.found.createTime?Ge(i.found.createTime):J.min(),u=new mt({mapValue:{fields:i.found.fields}});return Ie.newFoundDocument(s,o,a,u)}(t,e):"missing"in e?function(r,i){Y(!!i.missing),Y(!!i.readTime);const s=$n(r,i.missing),o=Ge(i.readTime);return Ie.newNoDocument(s,o)}(t,e):H()}function n2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(Y(d===void 0||typeof d=="string"),et.fromBase64String(d||"")):(Y(d===void 0||d instanceof Buffer||d instanceof Uint8Array),et.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?V.UNKNOWN:JA(c.code);return new M(d,c.message||"")}(o);n=new eR(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=$n(t,r.document.name),s=Ge(r.document.updateTime),o=r.document.createTime?Ge(r.document.createTime):J.min(),a=new mt({mapValue:{fields:r.document.fields}}),u=Ie.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Dc(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=$n(t,r.document),s=r.readTime?Ge(r.readTime):J.min(),o=Ie.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Dc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=$n(t,r.document),s=r.removedTargetIds||[];n=new Dc([],s,i,null)}else{if(!("filter"in e))return H();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new KM(i,s),a=r.targetId;n=new ZA(a,o)}}return n}function zl(t,e){let n;if(e instanceof Ho)n={update:yI(t,e.key,e.value)};else if(e instanceof Qo)n={delete:jl(t,e.key)};else if(e instanceof Er)n={update:yI(t,e.key,e.data),updateMask:l2(e.fieldMask)};else{if(!(e instanceof e_))return H();n={verify:jl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Po)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof os)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof as)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Co)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw H()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:e2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:H()}(t,e.precondition)),n}function om(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Ae.updateTime(Ge(s.updateTime)):s.exists!==void 0?Ae.exists(s.exists):Ae.none()}(e.currentDocument):Ae.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let u=null;if("setToServerValue"in a)Y(a.setToServerValue==="REQUEST_TIME"),u=new Po;else if("appendMissingElements"in a){const d=a.appendMissingElements.values||[];u=new os(d)}else if("removeAllFromArray"in a){const d=a.removeAllFromArray.values||[];u=new as(d)}else"increment"in a?u=new Co(o,a.increment):H();const c=Se.fromServerFormat(a.fieldPath);return new cu(c,u)}(t,i)):[];if(e.update){e.update.name;const i=$n(t,e.update.name),s=new mt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const c=u.fieldPaths||[];return new qt(c.map(d=>Se.fromServerFormat(d)))}(e.updateMask);return new Er(i,s,o,n,r)}return new Ho(i,s,n,r)}if(e.delete){const i=$n(t,e.delete);return new Qo(i,n)}if(e.verify){const i=$n(t,e.verify);return new e_(i,n)}return H()}function r2(t,e){return t&&t.length>0?(Y(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Ge(i.updateTime):Ge(s);return o.isEqual(J.min())&&(o=Ge(s)),new qM(o,i.transformResults||[])}(n,e))):[]}function aR(t,e){return{documents:[rR(t,e.path)]}}function lR(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=rR(t,i);const s=function(c){if(c.length!==0)return hR(he.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Ls(m.field),direction:s2(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=rm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function uR(t){let e=iR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Y(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=cR(f);return m instanceof he&&Jg(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(R){return new Bl(Ms(R.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,ou(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,v=f.values||[];return new hi(v,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,v=f.values||[];return new hi(v,m)}(n.endAt)),VA(e,i,o,s,a,"F",u,c)}function i2(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function cR(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ms(n.unaryFilter.field);return oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ms(n.unaryFilter.field);return oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ms(n.unaryFilter.field);return oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ms(n.unaryFilter.field);return oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(t):t.fieldFilter!==void 0?function(n){return oe.create(Ms(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return he.create(n.compositeFilter.filters.map(r=>cR(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return H()}}(n.compositeFilter.op))}(t):H()}function s2(t){return YM[t]}function o2(t){return JM[t]}function a2(t){return XM[t]}function Ls(t){return{fieldPath:t.canonicalString()}}function Ms(t){return Se.fromServerFormat(t.fieldPath)}function hR(t){return t instanceof oe?function(n){if(n.op==="=="){if(tI(n.value))return{unaryFilter:{field:Ls(n.field),op:"IS_NAN"}};if(eI(n.value))return{unaryFilter:{field:Ls(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(tI(n.value))return{unaryFilter:{field:Ls(n.field),op:"IS_NOT_NAN"}};if(eI(n.value))return{unaryFilter:{field:Ls(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ls(n.field),op:o2(n.op),value:n.value}}}(t):t instanceof he?function(n){const r=n.getFilters().map(i=>hR(i));return r.length===1?r[0]:{compositeFilter:{op:a2(n.op),filters:r}}}(t):H()}function l2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function dR(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class or{constructor(e,n,r,i,s=J.min(),o=J.min(),a=et.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new or(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class fR{constructor(e){this.ct=e}}function u2(t,e){let n;if(e.document)n=oR(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=W.fromSegments(e.noDocument.path),i=us(e.noDocument.readTime);n=Ie.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return H();{const r=W.fromSegments(e.unknownDocument.path),i=us(e.unknownDocument.version);n=Ie.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new Re(i[0],i[1]);return J.fromTimestamp(s)}(e.readTime)),n}function vI(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:vh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:jl(s,o.key),fields:o.data.value.mapValue.fields,updateTime:ko(s,o.version.toTimestamp()),createTime:ko(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:ls(e.version)};else{if(!e.isUnknownDocument())return H();r.unknownDocument={path:n.path.toArray(),version:ls(e.version)}}return r}function vh(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function ls(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function us(t){const e=new Re(t.seconds,t.nanoseconds);return J.fromTimestamp(e)}function xi(t,e){const n=(e.baseMutations||[]).map(s=>om(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>om(t.ct,s)),i=Re.fromMillis(e.localWriteTimeMs);return new t_(e.batchId,i,n,r)}function za(t){const e=us(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?us(t.lastLimboFreeSnapshotVersion):J.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return Y(s.documents.length===1),Ot(Ko(iR(s.documents[0])))}(t.query):function(s){return Ot(uR(s))}(t.query),new or(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,et.fromBase64String(t.resumeToken))}function pR(t,e){const n=ls(e.snapshotVersion),r=ls(e.lastLimboFreeSnapshotVersion);let i;i=gh(e.target)?aR(t.ct,e.target):lR(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:ss(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function o_(t){const e=uR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?yh(e,e.limit,"L"):e}function Of(t,e){return new r_(e.largestBatchId,om(t.ct,e.overlayMutation))}function wI(t,e){const n=e.path.lastSegment();return[t,Vt(e.path.popLast()),n]}function II(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:ls(r.readTime),documentKey:Vt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class c2{getBundleMetadata(e,n){return EI(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:us(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return EI(e).put(function(i){return{bundleId:i.id,createTime:ls(Ge(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return TI(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:o_(s.bundledQuery),readTime:us(s.readTime)}}(r)})}saveNamedQuery(e,n){return TI(e).put(function(i){return{name:i.name,readTime:ls(Ge(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function EI(t){return ut(t,"bundles")}function TI(t){return ut(t,"namedQueries")}/**
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
 */class ud{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new ud(e,r)}getOverlay(e,n){return Aa(e).get(wI(this.userId,n)).next(r=>r?Of(this.serializer,r):null)}getOverlays(e,n){const r=Fn();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new r_(n,o);i.push(this.ht(e,a))}),x.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Vt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Aa(e).j("collectionPathOverlayIndex",a))}),x.waitFor(s)}getOverlaysForCollection(e,n,r){const i=Fn(),s=Vt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Aa(e).U("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const c=Of(this.serializer,u);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=Fn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Aa(e).J({index:"collectionGroupOverlayIndex",range:a},(u,c,d)=>{const f=Of(this.serializer,c);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):d.done()}).next(()=>s)}ht(e,n){return Aa(e).put(function(i,s,o){const[a,u,c]=wI(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:zl(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function Aa(t){return ut(t,"documentOverlays")}/**
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
 */class Vi{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(Oe(e.integerValue));else if("doubleValue"in e){const r=Oe(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),Ll(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Et(n,20),typeof r=="string"&&(r=mr(r)),n.At(`${r.seconds||""}`),n.dt(r.nanos||0)}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(li(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?AA(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):H()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){const r=e.fields||{};this.Et(n,55);for(const i of Object.keys(r))this.Rt(i,n),this.It(r[i],n)}wt(e,n){const r=e.values||[];this.Et(n,50);for(const i of r)this.It(i,n)}gt(e,n){this.Et(n,37),W.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}}Vi.bt=new Vi;function h2(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function SI(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=h2(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class d2{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ct(r.value),r=n.next();this.vt()}Ft(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Mt(r.value),r=n.next();this.xt()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ct(r);else if(r<2048)this.Ct(960|r>>>6),this.Ct(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ct(480|r>>>12),this.Ct(128|63&r>>>6),this.Ct(128|63&r);else{const i=n.codePointAt(0);this.Ct(240|i>>>18),this.Ct(128|63&i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i)}}this.vt()}Nt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=n.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Lt(e){const n=this.Bt(e),r=SI(n);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}qt(e){const n=this.Bt(e),r=SI(n);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Bt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ct(e){const n=255&e;n===0?(this.Kt(0),this.Kt(255)):n===255?(this.Kt(255),this.Kt(0)):this.Kt(n)}Mt(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class f2{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Lt(e)}Tt(){this.Gt.Qt()}}class p2{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class Ra{constructor(){this.Gt=new d2,this.zt=new f2(this.Gt),this.jt=new p2(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
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
 */class Oi{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Oi(this.indexId,this.documentKey,this.arrayValue,r)}}function br(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=AI(t.arrayValue,e.arrayValue),n!==0?n:(n=AI(t.directionalValue,e.directionalValue),n!==0?n:W.comparator(t.documentKey,e.documentKey)))}function AI(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class RI{constructor(e){this.Yt=new fe((n,r)=>Se.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Yt=this.Yt.add(r):this.Xt.push(r)}}get en(){return this.Yt.size>1}tn(e){if(Y(e.collectionGroup===this.collectionId),this.en)return!1;const n=Qp(e);if(n!==void 0&&!this.nn(n))return!1;const r=Ni(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.nn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Yt.size>0){const a=this.Yt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const u=r[s];if(!this.rn(a,u)||!this.sn(this.Zt[o++],u))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Zt.length||!this.sn(this.Zt[o++],a))return!1}return!0}on(){if(this.en)return null;let e=new fe(Se.comparator);const n=[];for(const r of this.Xt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new Pc(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new Pc(r.field,0))}for(const r of this.Zt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new Pc(r.field,r.dir==="asc"?0:1)));return new mh(mh.UNKNOWN_ID,this.collectionId,n,Ol.empty())}nn(e){for(const n of this.Xt)if(this.rn(n,e))return!0;return!1}rn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function mR(t){var e,n;if(Y(t instanceof oe||t instanceof he),t instanceof oe){if(t instanceof xA){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>oe.create(t.field,"==",s)))||[];return he.create(i,"or")}return t}const r=t.filters.map(i=>mR(i));return he.create(r,t.op)}function m2(t){if(t.getFilters().length===0)return[];const e=um(mR(t));return Y(gR(e)),am(e)||lm(e)?[e]:e.getFilters()}function am(t){return t instanceof oe}function lm(t){return t instanceof he&&Jg(t)}function gR(t){return am(t)||lm(t)||function(n){if(n instanceof he&&Zp(n)){for(const r of n.getFilters())if(!am(r)&&!lm(r))return!1;return!0}return!1}(t)}function um(t){if(Y(t instanceof oe||t instanceof he),t instanceof oe)return t;if(t.filters.length===1)return um(t.filters[0]);const e=t.filters.map(r=>um(r));let n=he.create(e,t.op);return n=wh(n),gR(n)?n:(Y(n instanceof he),Y(Ro(n)),Y(n.filters.length>1),n.filters.reduce((r,i)=>a_(r,i)))}function a_(t,e){let n;return Y(t instanceof oe||t instanceof he),Y(e instanceof oe||e instanceof he),n=t instanceof oe?e instanceof oe?function(i,s){return he.create([i,s],"and")}(t,e):PI(t,e):e instanceof oe?PI(e,t):function(i,s){if(Y(i.filters.length>0&&s.filters.length>0),Ro(i)&&Ro(s))return bA(i,s.getFilters());const o=Zp(i)?i:s,a=Zp(i)?s:i,u=o.filters.map(c=>a_(c,a));return he.create(u,"or")}(t,e),wh(n)}function PI(t,e){if(Ro(e))return bA(e,t.getFilters());{const n=e.filters.map(r=>a_(t,r));return he.create(n,"or")}}function wh(t){if(Y(t instanceof oe||t instanceof he),t instanceof oe)return t;const e=t.getFilters();if(e.length===1)return wh(e[0]);if(CA(t))return t;const n=e.map(i=>wh(i)),r=[];return n.forEach(i=>{i instanceof oe?r.push(i):i instanceof he&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:he.create(r,t.op)}/**
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
 */class g2{constructor(){this._n=new l_}addToCollectionParentIndex(e,n){return this._n.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(sn.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(sn.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class l_{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new fe(se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new fe(se.comparator)).toArray()}}/**
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
 */const rc=new Uint8Array(0);class _2{constructor(e,n){this.databaseId=n,this.an=new l_,this.un=new Ii(r=>ss(r),(r,i)=>au(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.an.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.an.add(n)});const s={collectionId:r,parent:Vt(i)};return CI(e).put(s)}return x.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[hA(n),""],!1,!0);return CI(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Mn(o.parent))}return r})}addFieldIndex(e,n){const r=Pa(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Ds(e);return s.next(a=>{o.put(II(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Pa(e),i=Ds(e),s=Ns(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Pa(e),r=Ns(e),i=Ds(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return x.forEach(this.cn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new RI(r).on();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=Ns(e);let i=!0;const s=new Map;return x.forEach(this.cn(n),o=>this.ln(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=te();const a=[];return x.forEach(s,(u,c)=>{U("IndexedDbIndexManager",`Using index ${function(w){return`id=${w.indexId}|cg=${w.collectionGroup}|f=${w.fields.map(D=>`${D.fieldPath}:${D.kind}`).join(",")}`}(u)} to execute ${ss(n)}`);const d=function(w,D){const L=Qp(D);if(L===void 0)return null;for(const F of _h(w,L.fieldPath))switch(F.op){case"array-contains-any":return F.value.arrayValue.values||[];case"array-contains":return[F.value]}return null}(c,u),f=function(w,D){const L=new Map;for(const F of Ni(D))for(const I of _h(w,F.fieldPath))switch(I.op){case"==":case"in":L.set(F.fieldPath.canonicalString(),I.value);break;case"not-in":case"!=":return L.set(F.fieldPath.canonicalString(),I.value),Array.from(L.values())}return null}(c,u),m=function(w,D){const L=[];let F=!0;for(const I of Ni(D)){const y=I.kind===0?oI(w,I.fieldPath,w.startAt):aI(w,I.fieldPath,w.startAt);L.push(y.value),F&&(F=y.inclusive)}return new hi(L,F)}(c,u),v=function(w,D){const L=[];let F=!0;for(const I of Ni(D)){const y=I.kind===0?aI(w,I.fieldPath,w.endAt):oI(w,I.fieldPath,w.endAt);L.push(y.value),F&&(F=y.inclusive)}return new hi(L,F)}(c,u),R=this.hn(u,c,m),P=this.hn(u,c,v),b=this.Pn(u,c,f),E=this.In(u.indexId,d,R,m.inclusive,P,v.inclusive,b);return x.forEach(E,_=>r.G(_,n.limit).next(w=>{w.forEach(D=>{const L=W.fromSegments(D.documentKey);o.has(L)||(o=o.add(L),a.push(L))})}))}).next(()=>a)}return x.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=m2(he.create(e.filters,"and")).map(r=>tm(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}In(e,n,r,i,s,o,a){const u=(n!=null?n.length:1)*Math.max(r.length,s.length),c=u/(n!=null?n.length:1),d=[];for(let f=0;f<u;++f){const m=n?this.Tn(n[f/c]):rc,v=this.En(e,m,r[f%c],i),R=this.dn(e,m,s[f%c],o),P=a.map(b=>this.En(e,m,b,!0));d.push(...this.createRange(v,R,P))}return d}En(e,n,r,i){const s=new Oi(e,W.empty(),n,r);return i?s:s.Jt()}dn(e,n,r,i){const s=new Oi(e,W.empty(),n,r);return i?s.Jt():s}ln(e,n){const r=new RI(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return x.forEach(i,s=>this.ln(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let c=new fe(Se.comparator),d=!1;for(const f of u.filters)for(const m of f.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?d=!0:c=c.add(m.field));for(const f of u.orderBy)f.field.isKeyField()||(c=c.add(f.field));return c.size+(d?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}An(e,n){const r=new Ra;for(const i of Ni(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);Vi.bt.Pt(s,o)}return r.Wt()}Tn(e){const n=new Ra;return Vi.bt.Pt(e,n.Ht(0)),n.Wt()}Rn(e,n){const r=new Ra;return Vi.bt.Pt(is(this.databaseId,n),r.Ht(function(s){const o=Ni(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}Pn(e,n,r){if(r===null)return[];let i=[];i.push(new Ra);let s=0;for(const o of Ni(e)){const a=r[s++];for(const u of i)if(this.Vn(n,o.fieldPath)&&Ul(a))i=this.mn(i,o,a);else{const c=u.Ht(o.kind);Vi.bt.Pt(a,c)}}return this.fn(i)}hn(e,n,r){return this.Pn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Wt();return n}mn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new Ra;u.seed(a.Wt()),Vi.bt.Pt(o,u.Ht(n.kind)),s.push(u)}return s}Vn(e,n){return!!e.filters.find(r=>r instanceof oe&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Pa(e),i=Ds(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return x.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(d,f){const m=f?new Ol(f.sequenceNumber,new sn(us(f.readTime),new W(Mn(f.documentKey)),f.largestBatchId)):Ol.empty(),v=d.fields.map(([R,P])=>new Pc(Se.fromServerFormat(R),P));return new mh(d.indexId,d.collectionGroup,v,m)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ee(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Pa(e),s=Ds(e);return this.gn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>x.forEach(a,u=>s.put(II(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return x.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?x.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),x.forEach(a,u=>this.pn(e,i,u).next(c=>{const d=this.yn(s,u);return c.isEqual(d)?x.resolve():this.wn(e,s,u,c,d)}))))})}Sn(e,n,r,i){return Ns(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Rn(r,n.key),documentKey:n.key.path.toArray()})}bn(e,n,r,i){return Ns(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Rn(r,n.key),n.key.path.toArray()])}pn(e,n,r){const i=Ns(e);let s=new fe(br);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Rn(r,n)])},(o,a)=>{s=s.add(new Oi(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}yn(e,n){let r=new fe(br);const i=this.An(n,e);if(i==null)return r;const s=Qp(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Ul(o))for(const a of o.arrayValue.values||[])r=r.add(new Oi(n.indexId,e.key,this.Tn(a),i))}else r=r.add(new Oi(n.indexId,e.key,rc,i));return r}wn(e,n,r,i,s){U("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(u,c,d,f,m){const v=u.getIterator(),R=c.getIterator();let P=bs(v),b=bs(R);for(;P||b;){let E=!1,_=!1;if(P&&b){const w=d(P,b);w<0?_=!0:w>0&&(E=!0)}else P!=null?_=!0:E=!0;E?(f(b),b=bs(R)):_?(m(P),P=bs(v)):(P=bs(v),b=bs(R))}}(i,s,br,a=>{o.push(this.Sn(e,n,r,a))},a=>{o.push(this.bn(e,n,r,a))}),x.waitFor(o)}gn(e){let n=1;return Ds(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>br(o,a)).filter((o,a,u)=>!a||br(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=br(o,e),u=br(o,n);if(a===0)i[0]=e.Jt();else if(a>0&&u<0)i.push(o),i.push(o.Jt());else if(u>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Dn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,rc,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,rc,[]];s.push(IDBKeyRange.bound(a,u))}return s}Dn(e,n){return br(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(kI)}getMinOffset(e,n){return x.mapArray(this.cn(n),r=>this.ln(e,r).next(i=>i||H())).next(kI)}}function CI(t){return ut(t,"collectionParents")}function Ns(t){return ut(t,"indexEntries")}function Pa(t){return ut(t,"indexConfiguration")}function Ds(t){return ut(t,"indexState")}function kI(t){Y(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Hg(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new sn(e.readTime,e.documentKey,n)}/**
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
 */const bI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Bt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Bt(e,Bt.DEFAULT_COLLECTION_PERCENTILE,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function _R(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.J({range:o},(d,f,m)=>(a++,m.delete()));s.push(u.next(()=>{Y(a===1)}));const c=[];for(const d of n.mutations){const f=yA(e,d.key.path,n.batchId);s.push(i.delete(f)),c.push(d.key)}return x.waitFor(s).next(()=>c)}function Ih(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw H();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Bt.DEFAULT_COLLECTION_PERCENTILE=10,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Bt.DEFAULT=new Bt(41943040,Bt.DEFAULT_COLLECTION_PERCENTILE,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Bt.DISABLED=new Bt(-1,0,0);class cd{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Cn={}}static lt(e,n,r,i){Y(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new cd(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Nr(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Fs(e),o=Nr(e);return o.add({}).next(a=>{Y(typeof a=="number");const u=new t_(a,n,r,i),c=function(v,R,P){const b=P.baseMutations.map(_=>zl(v.ct,_)),E=P.mutations.map(_=>zl(v.ct,_));return{userId:R,batchId:P.batchId,localWriteTimeMs:P.localWriteTime.toMillis(),baseMutations:b,mutations:E}}(this.serializer,this.userId,u),d=[];let f=new fe((m,v)=>ee(m.canonicalString(),v.canonicalString()));for(const m of i){const v=yA(this.userId,m.key.path,a);f=f.add(m.key.path.popLast()),d.push(o.put(c)),d.push(s.put(v,sM))}return f.forEach(m=>{d.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Cn[a]=u.keys()}),x.waitFor(d).next(()=>u)})}lookupMutationBatch(e,n){return Nr(e).get(n).next(r=>r?(Y(r.userId===this.userId),xi(this.serializer,r)):null)}vn(e,n){return this.Cn[n]?x.resolve(this.Cn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Cn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Nr(e).J({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(Y(a.batchId>=r),s=xi(this.serializer,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Nr(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Nr(e).U("userMutationsIndex",n).next(r=>r.map(i=>xi(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Cc(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Fs(e).J({range:i},(o,a,u)=>{const[c,d,f]=o,m=Mn(d);if(c===this.userId&&n.path.isEqual(m))return Nr(e).get(f).next(v=>{if(!v)throw H();Y(v.userId===this.userId),s.push(xi(this.serializer,v))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new fe(ee);const i=[];return n.forEach(s=>{const o=Cc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=Fs(e).J({range:a},(c,d,f)=>{const[m,v,R]=c,P=Mn(v);m===this.userId&&s.path.isEqual(P)?r=r.add(R):f.done()});i.push(u)}),x.waitFor(i).next(()=>this.Fn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Cc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new fe(ee);return Fs(e).J({range:o},(u,c,d)=>{const[f,m,v]=u,R=Mn(m);f===this.userId&&r.isPrefixOf(R)?R.length===i&&(a=a.add(v)):d.done()}).next(()=>this.Fn(e,a))}Fn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Nr(e).get(s).next(o=>{if(o===null)throw H();Y(o.userId===this.userId),r.push(xi(this.serializer,o))}))}),x.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return _R(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Mn(n.batchId)}),x.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return x.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Fs(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=Mn(s[1]);i.push(u)}else a.done()}).next(()=>{Y(i.length===0)})})}containsKey(e,n){return yR(e,this.userId,n)}xn(e){return vR(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function yR(t,e,n){const r=Cc(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Fs(t).J({range:s,H:!0},(a,u,c)=>{const[d,f,m]=a;d===e&&f===i&&(o=!0),c.done()}).next(()=>o)}function Nr(t){return ut(t,"mutations")}function Fs(t){return ut(t,"documentMutations")}function vR(t){return ut(t,"mutationQueues")}/**
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
 */class cs{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new cs(0)}static Ln(){return new cs(-1)}}/**
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
 */class y2{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Bn(e).next(n=>{const r=new cs(n.highestTargetId);return n.highestTargetId=r.next(),this.kn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(n=>J.fromTimestamp(new Re(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.kn(e,i)))}addTargetData(e,n){return this.qn(e,n).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.Qn(n,r),this.kn(e,r))))}updateTargetData(e,n){return this.qn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>xs(e).delete(n.targetId)).next(()=>this.Bn(e)).next(r=>(Y(r.targetCount>0),r.targetCount-=1,this.kn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return xs(e).J((o,a)=>{const u=za(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>x.waitFor(s)).next(()=>i)}forEachTarget(e,n){return xs(e).J((r,i)=>{const s=za(i);n(s)})}Bn(e){return NI(e).get("targetGlobalKey").next(n=>(Y(n!==null),n))}kn(e,n){return NI(e).put("targetGlobalKey",n)}qn(e,n){return xs(e).put(pR(this.serializer,n))}Qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=ss(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return xs(e).J({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const c=za(a);au(n,c.target)&&(s=c,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Mr(e);return n.forEach(o=>{const a=Vt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),x.waitFor(i)}removeMatchingKeys(e,n,r){const i=Mr(e);return x.forEach(n,s=>{const o=Vt(s.path);return x.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Mr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Mr(e);let s=te();return i.J({range:r,H:!0},(o,a,u)=>{const c=Mn(o[1]),d=new W(c);s=s.add(d)}).next(()=>s)}containsKey(e,n){const r=Vt(n.path),i=IDBKeyRange.bound([r],[hA(r)],!1,!0);let s=0;return Mr(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],u,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return xs(e).get(n).next(r=>r?za(r):null)}}function xs(t){return ut(t,"targets")}function NI(t){return ut(t,"targetGlobal")}function Mr(t){return ut(t,"targetDocuments")}/**
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
 */function DI([t,e],[n,r]){const i=ee(t,n);return i===0?ee(e,r):i}class v2{constructor(e){this.Kn=e,this.buffer=new fe(DI),this.$n=0}Un(){return++this.$n}Wn(e){const n=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();DI(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class w2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){U("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){wi(n)?U("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await vi(n)}await this.zn(3e5)})}}class I2{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.Hn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return x.resolve($t.oe);const r=new v2(n);return this.jn.forEachTarget(e,i=>r.Wn(i.sequenceNumber)).next(()=>this.jn.Jn(e,i=>r.Wn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(bI)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),bI):this.Yn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,n){let r,i,s,o,a,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),Vs()<=re.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function E2(t,e){return new I2(t,e)}/**
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
 */class T2{constructor(e,n){this.db=e,this.garbageCollector=E2(this,n)}Hn(e){const n=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Zn(e){let n=0;return this.Jn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Jn(e,n){return this.Xn(e,(r,i)=>n(i))}addReference(e,n,r){return ic(e,r)}removeReference(e,n,r){return ic(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return ic(e,n)}er(e,n){return function(i,s){let o=!1;return vR(i).Y(a=>yR(i,a,s).next(u=>(u&&(o=!0),x.resolve(!u)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Xn(e,(o,a)=>{if(a<=n){const u=this.er(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,J.min()),Mr(e).delete(function(f){return[0,Vt(f.path)]}(o))))});i.push(u)}}).next(()=>x.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return ic(e,n)}Xn(e,n){const r=Mr(e);let i,s=$t.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:c})=>{o===0?(s!==$t.oe&&n(new W(Mn(i)),s),s=c,i=u):s=$t.oe}).next(()=>{s!==$t.oe&&n(new W(Mn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ic(t,e){return Mr(t).put(function(r,i){return{targetId:0,path:Vt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class wR{constructor(){this.changes=new Ii(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ie.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class S2{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Pi(e).put(r)}removeEntry(e,n,r){return Pi(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],vh(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.tr(e,r)))}getEntry(e,n){let r=Ie.newInvalidDocument(n);return Pi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Ca(n))},(i,s)=>{r=this.nr(n,s)}).next(()=>r)}rr(e,n){let r={size:0,document:Ie.newInvalidDocument(n)};return Pi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Ca(n))},(i,s)=>{r={document:this.nr(n,s),size:Ih(s)}}).next(()=>r)}getEntries(e,n){let r=Wt();return this.ir(e,n,(i,s)=>{const o=this.nr(i,s);r=r.insert(i,o)}).next(()=>r)}sr(e,n){let r=Wt(),i=new ye(W.comparator);return this.ir(e,n,(s,o)=>{const a=this.nr(s,o);r=r.insert(s,a),i=i.insert(s,Ih(o))}).next(()=>({documents:r,_r:i}))}ir(e,n,r){if(n.isEmpty())return x.resolve();let i=new fe(OI);n.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(Ca(i.first()),Ca(i.last())),o=i.getIterator();let a=o.getNext();return Pi(e).J({index:"documentKeyIndex",range:s},(u,c,d)=>{const f=W.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&OI(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?d.$(Ca(a)):d.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),vh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Pi(e).U(IDBKeyRange.bound(a,u,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let d=Wt();for(const f of c){const m=this.nr(W.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);m.isFoundDocument()&&(uu(n,m)||i.has(m.key))&&(d=d.insert(m.key,m))}return d})}getAllFromCollectionGroup(e,n,r,i){let s=Wt();const o=VI(n,r),a=VI(n,sn.max());return Pi(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,c,d)=>{const f=this.nr(W.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(f.key,f),s.size===i&&d.done()}).next(()=>s)}newChangeBuffer(e){return new A2(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return xI(e).get("remoteDocumentGlobalKey").next(n=>(Y(!!n),n))}tr(e,n){return xI(e).put("remoteDocumentGlobalKey",n)}nr(e,n){if(n){const r=u2(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(J.min())))return r}return Ie.newInvalidDocument(e)}}function IR(t){return new S2(t)}class A2 extends wR{constructor(e,n){super(),this.ar=e,this.trackRemovals=n,this.ur=new Ii(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new fe((s,o)=>ee(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ur.get(s);if(n.push(this.ar.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=vI(this.ar.serializer,o);i=i.add(s.path.popLast());const c=Ih(u);r+=c-a.size,n.push(this.ar.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=vI(this.ar.serializer,o.convertToNoDocument(J.min()));n.push(this.ar.addEntry(e,s,u))}}),i.forEach(s=>{n.push(this.ar.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.ar.updateMetadata(e,r)),x.waitFor(n)}getFromCache(e,n){return this.ar.rr(e,n).next(r=>(this.ur.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.ar.sr(e,n).next(({documents:r,_r:i})=>(i.forEach((s,o)=>{this.ur.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function xI(t){return ut(t,"remoteDocumentGlobal")}function Pi(t){return ut(t,"remoteDocumentsV14")}function Ca(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function VI(t,e){const n=e.documentKey.path.toArray();return[t,vh(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function OI(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ee(n[s],r[s]),i)return i;return i=ee(n.length,r.length),i||(i=ee(n[n.length-2],r[r.length-2]),i||ee(n[n.length-1],r[r.length-1]))}/**
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
 */class R2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class ER{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&il(r.mutation,i,qt.empty(),Re.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=Fn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ba();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Fn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Wt();const o=rl(),a=function(){return rl()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Er)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),il(d.mutation,c,d.mutation.getFieldMask(),Re.now())):o.set(c.key,qt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new R2(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=rl();let i=new ye((o,a)=>o-a),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||qt.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(i.get(a.batchId)||te()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=BA();d.forEach(m=>{if(!s.has(m)){const v=HA(n.get(m),r.get(m));v!==null&&f.set(m,v),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Xg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):x.resolve(Fn());let a=-1,u=s;return o.next(c=>x.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?x.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,te())).next(d=>({batchId:a,changes:UA(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=Ba();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ba();return this.indexManager.getCollectionParents(e,s).next(a=>x.forEach(a,u=>{const c=function(f,m){return new Ir(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Ie.newInvalidDocument(d)))});let a=Ba();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&il(d.mutation,c,qt.empty(),Re.now()),uu(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class P2{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return x.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ge(i.createTime)}}(n)),x.resolve()}getNamedQuery(e,n){return x.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:o_(i.bundledQuery),readTime:Ge(i.readTime)}}(n)),x.resolve()}}/**
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
 */class C2{constructor(){this.overlays=new ye(W.comparator),this.hr=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fn();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const i=Fn(),s=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return x.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ye((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Fn(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=Fn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return x.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new r_(n,r));let s=this.hr.get(n);s===void 0&&(s=te(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class u_{constructor(){this.Pr=new fe(nt.Ir),this.Tr=new fe(nt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new nt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new nt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new W(new se([])),r=new nt(n,e),i=new nt(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new W(new se([])),r=new nt(n,e),i=new nt(n,e+1);let s=te();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new nt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return W.comparator(e.key,n.key)||ee(e.pr,n.pr)}static Er(e,n){return ee(e.pr,n.pr)||W.comparator(e.key,n.key)}}/**
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
 */class k2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new fe(nt.Ir)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new t_(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new nt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return x.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),i=new nt(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new fe(ee);return n.forEach(i=>{const s=new nt(i,0),o=new nt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),x.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new nt(new W(s),0);let a=new fe(ee);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.pr)),!0)},o),x.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Y(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return x.forEach(n.mutations,i=>{const s=new nt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new nt(n,0),i=this.wr.firstAfterOrEqual(r);return x.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class b2{constructor(e){this.vr=e,this.docs=function(){return new ye(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():Ie.newInvalidDocument(n))}getEntries(e,n){let r=Wt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ie.newInvalidDocument(i))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Wt();const o=n.path,a=new W(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Hg(fA(d),r)<=0||(i.has(d.key)||uu(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return x.resolve(s)}getAllFromCollectionGroup(e,n,r,i){H()}Fr(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new N2(this)}getSize(e){return x.resolve(this.size)}}class N2 extends wR{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class D2{constructor(e){this.persistence=e,this.Mr=new Ii(n=>ss(n),au),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Or=0,this.Nr=new u_,this.targetCount=0,this.Lr=cs.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),x.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new cs(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.qn(n),x.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),x.waitFor(s).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),x.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.Nr.containsKey(n))}}/**
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
 */class TR{constructor(e,n){this.Br={},this.overlays={},this.kr=new $t(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new D2(this),this.indexManager=new g2,this.remoteDocumentCache=function(i){return new b2(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new fR(n),this.$r=new P2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new C2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new k2(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const i=new x2(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return x.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class x2 extends mA{constructor(e){super(),this.currentSequenceNumber=e}}class hd{constructor(e){this.persistence=e,this.zr=new u_,this.jr=null}static Hr(e){return new hd(e)}get Jr(){if(this.jr)return this.jr;throw H()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),x.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Jr,r=>{const i=W.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return x.or([()=>x.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class V2{constructor(e){this.serializer=e}O(e,n,r,i){const s=new sd("createOrUpgrade",n);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Yw,{unique:!0}),u.createObjectStore("documentMutations")}(e),LI(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=x.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),LI(e)),o=o.next(()=>function(u){const c=u.store("targetGlobal"),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:J.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",d)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,c){return c.store("mutations").U().next(d=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Yw,{unique:!0});const f=c.store("mutations"),m=d.map(v=>f.put(v));return x.waitFor(m)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Xr(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ei(s)))),r<7&&i>=7&&(o=o.next(()=>this.ti(s))),r<8&&i>=8&&(o=o.next(()=>this.ni(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ri(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore("documentOverlays",{keyPath:_M});c.createIndex("collectionPathOverlayIndex",yM,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",vM,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore("remoteDocumentsV14",{keyPath:oM});c.createIndex("documentKeyIndex",aM),c.createIndex("collectionGroupIndex",lM)}(e)).next(()=>this.ii(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:fM}).createIndex("sequenceNumberIndex",pM,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:mM}).createIndex("documentKeyIndex",gM,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),o}ei(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=Ih(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Xr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>x.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>x.forEach(a,u=>{Y(u.userId===s.userId);const c=xi(this.serializer,u);return _R(e,s.userId,c).next(()=>{})}))}))}ti(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const u=new se(o),c=function(f){return[0,Vt(f)]}(u);s.push(n.get(c).next(d=>d?x.resolve():(f=>n.put({targetId:0,path:Vt(f),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>x.waitFor(s))})}ni(e,n){e.createObjectStore("collectionParents",{keyPath:dM});const r=n.store("collectionParents"),i=new l_,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:Vt(u)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const u=new se(o);return s(u.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,u],c)=>{const d=Mn(a);return s(d.popLast())}))}ri(e){const n=e.store("targets");return n.J((r,i)=>{const s=za(i),o=pR(this.serializer,s);return n.put(o)})}ii(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=n.store("remoteDocumentsV14"),u=function(f){return f.document?new W(se.fromString(f.document.name).popFirst(5)):f.noDocument?W.fromSegments(f.noDocument.path):f.unknownDocument?W.fromSegments(f.unknownDocument.path):H()}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>x.waitFor(i))}si(e,n){const r=n.store("mutations"),i=IR(this.serializer),s=new TR(hd.Hr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(u=>{var c;let d=(c=a.get(u.userId))!==null&&c!==void 0?c:te();xi(this.serializer,u).keys().forEach(f=>d=d.add(f)),a.set(u.userId,d)}),x.forEach(a,(u,c)=>{const d=new it(c),f=ud.lt(this.serializer,d),m=s.getIndexManager(d),v=cd.lt(d,this.serializer,m,s.referenceDelegate);return new ER(i,v,f,m).recalculateAndSaveOverlaysForDocumentKeys(new Yp(n,$t.oe),u).next()})})}}function LI(t){t.createObjectStore("targetDocuments",{keyPath:cM}).createIndex("documentTargetsIndex",hM,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",uM,{unique:!0}),t.createObjectStore("targetGlobal")}const Lf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class c_{constructor(e,n,r,i,s,o,a,u,c,d,f=16){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.oi=s,this.window=o,this.document=a,this._i=c,this.ai=d,this.ui=f,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=m=>Promise.resolve(),!c_.D())throw new M(V.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new T2(this,i),this.Ti=n+"main",this.serializer=new fR(u),this.Ei=new zn(this.Ti,this.ui,new V2(this.serializer)),this.Qr=new y2(this.referenceDelegate,this.serializer),this.remoteDocumentCache=IR(this.serializer),this.$r=new c2,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,d===!1&&We("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new M(V.FAILED_PRECONDITION,Lf);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new $t(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>sc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(n=>{n||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(n=>this.isPrimary&&!n?this.yi(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(wi(e))return U("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return U("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return ka(e).get("owner").next(n=>x.resolve(this.Si(n)))}bi(e){return sc(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=ut(n,"clientMetadata");return r.U().next(i=>{const s=this.vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return x.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.di)for(const n of e)this.di.removeItem(this.Fi(n.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?x.resolve(!0):ka(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)){if(this.Si(n)&&this.networkEnabled)return!0;if(!this.Si(n)){if(!n.allowTabSynchronization)throw new M(V.FAILED_PRECONDITION,Lf);return!1}}return!(!this.networkEnabled||!this.inForeground)||sc(e).U().next(r=>this.vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&U("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Yp(e,$t.oe);return this.yi(n).next(()=>this.bi(n))}),this.Ei.close(),this.Li()}vi(e,n){return e.filter(r=>this.Ci(r.updateTimeMs,n)&&!this.Mi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>sc(e).U().next(n=>this.vi(n,18e5).map(r=>r.clientId)))}get started(){return this.qr}getMutationQueue(e,n){return cd.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new _2(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return ud.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,n,r){U("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(u){return u===16?IM:u===15?EA:u===14?IA:u===13?wA:u===12?wM:u===11?vA:void H()}(this.ui);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new Yp(a,this.kr?this.kr.next():$t.oe),n==="readwrite-primary"?this.gi(o).next(u=>!!u||this.pi(o)).next(u=>{if(!u)throw We(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new M(V.FAILED_PRECONDITION,pA);return r(o)}).next(u=>this.wi(o).next(()=>u)):this.ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}ki(e){return ka(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)&&!this.Si(n)&&!(this.ai||this.allowTabSynchronization&&n.allowTabSynchronization))throw new M(V.FAILED_PRECONDITION,Lf)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ka(e).put("owner",n)}static D(){return zn.D()}yi(e){const n=ka(e);return n.get("owner").next(r=>this.Si(r)?(U("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):x.resolve())}Ci(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(We(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;$0()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var n;try{const r=((n=this.di)===null||n===void 0?void 0:n.getItem(this.Fi(e)))!==null;return U("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return We("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){We("Failed to set zombie client id.",e)}}Li(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ka(t){return ut(t,"owner")}function sc(t){return ut(t,"clientMetadata")}function h_(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class d_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new d_(e,n.fromCache,r,i)}}/**
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
 */class O2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class SR{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return $0()?8:gA(Pe())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new O2;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Vs()<=re.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",Os(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),x.resolve()):(Vs()<=re.DEBUG&&U("QueryEngine","Query:",Os(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Vs()<=re.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",Os(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ot(n))):x.resolve())}ji(e,n){if(lI(n))return x.resolve(null);let r=Ot(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=yh(n,null,"F"),r=Ot(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,a);return this.Xi(n,c,o,u.readTime)?this.ji(e,yh(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return lI(n)||i.isEqual(J.min())?x.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?x.resolve(null):(Vs()<=re.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Os(n)),this.es(e,o,n,dA(i,-1)).next(a=>a))})}Zi(e,n){let r=new fe(MA(e));return n.forEach((i,s)=>{uu(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Vs()<=re.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Os(n)),this.zi.getDocumentsMatchingQuery(e,n,sn.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class L2{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new ye(ee),this.rs=new Ii(s=>ss(s),au),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ER(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function AR(t,e,n,r){return new L2(t,e,n,r)}async function RR(t,e){const n=G(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=te();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function M2(t,e){const n=G(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,m=f.keys();let v=x.resolve();return m.forEach(R=>{v=v.next(()=>d.getEntry(u,R)).next(P=>{const b=c.docVersions.get(R);Y(b!==null),P.version.compareTo(b)<0&&(f.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=te();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function PR(t){const e=G(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function F2(t,e){const n=G(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;a.push(n.Qr.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,d.addedDocuments,f)));let v=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?v=v.withResumeToken(et.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),i=i.insert(f,v),function(P,b,E){return P.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(m,v,d)&&a.push(n.Qr.updateTargetData(s,v))});let u=Wt(),c=te();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(CR(s,o,e.documentUpdates).next(d=>{u=d.cs,c=d.ls})),!r.isEqual(J.min())){const d=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return x.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function CR(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Wt();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function U2(t,e){const n=G(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function bo(t,e){const n=G(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,x.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new or(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function No(t,e,n){const r=G(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!wi(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function Eh(t,e,n){const r=G(t);let i=J.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=G(u),m=f.rs.get(d);return m!==void 0?x.resolve(f.ns.get(m)):f.Qr.getTargetData(c,d)}(r,o,Ot(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:te())).next(a=>(NR(r,LA(e),a),{documents:a,hs:s})))}function kR(t,e){const n=G(t),r=G(n.Qr),i=n.ns.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function bR(t,e){const n=G(t),r=n.ss.get(e)||J.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.os.getAllFromCollectionGroup(i,e,dA(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(NR(n,e,i),i))}function NR(t,e,n){let r=t.ss.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}async function B2(t,e,n,r){const i=G(t);let s=te(),o=Wt();for(const c of n){const d=e.Ps(c.metadata.name);c.document&&(s=s.add(d));const f=e.Is(c);f.setReadTime(e.Ts(c.metadata.readTime)),o=o.insert(d,f)}const a=i.os.newChangeBuffer({trackRemovals:!0}),u=await bo(i,function(d){return Ot(Ko(se.fromString(`__bundle__/docs/${d}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>CR(c,a,o).next(d=>(a.apply(c),d)).next(d=>i.Qr.removeMatchingKeysForTargetId(c,u.targetId).next(()=>i.Qr.addMatchingKeys(c,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,d.cs,d.ls)).next(()=>d.cs)))}async function j2(t,e,n=te()){const r=await bo(t,Ot(o_(e.bundledQuery))),i=G(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Ge(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.$r.saveNamedQuery(s,e);const a=r.withResumeToken(et.EMPTY_BYTE_STRING,o);return i.ns=i.ns.insert(a.targetId,a),i.Qr.updateTargetData(s,a).next(()=>i.Qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.$r.saveNamedQuery(s,e))})}function MI(t,e){return`firestore_clients_${t}_${e}`}function FI(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Mf(t,e){return`firestore_targets_${t}_${e}`}class Th{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Es(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new M(i.error.code,i.error.message))),o?new Th(e,n,i.state,s):(We("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class sl{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Es(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new M(r.error.code,r.error.message))),s?new sl(e,r.state,i):(We("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Sh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Es(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Zg();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=_A(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Sh(e,s):(We("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class f_{constructor(e,n){this.clientId=e,this.onlineState=n}static Es(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new f_(n.clientId,n.onlineState):(We("SharedClientState",`Failed to parse online state: ${e}`),null)}}class cm{constructor(){this.activeTargetIds=Zg()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ff{constructor(e,n,r,i,s){this.window=e,this.oi=n,this.persistenceKey=r,this.Vs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new ye(ee),this.started=!1,this.ys=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ws=MI(this.persistenceKey,this.Vs),this.Ss=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new cm),this.bs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vs=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.Fs=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Vs)continue;const i=this.getItem(MI(this.persistenceKey,r));if(i){const s=Sh.Es(r,i);s&&(this.ps=this.ps.insert(s.clientId,s))}}this.Ms();const n=this.storage.getItem(this.vs);if(n){const r=this.xs(n);r&&this.Os(r)}for(const r of this.ys)this.gs(r);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let n=!1;return this.ps.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ls(e,"pending")}updateMutationState(e,n,r){this.Ls(e,n,r),this.Bs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Mf(this.persistenceKey,e));if(r){const i=sl.Es(e,r);i&&(n=i.state)}}return this.ks.As(e),this.Ms(),n}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Mf(this.persistenceKey,e))}updateQueryState(e,n,r){this.qs(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Bs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return U("SharedClientState","READ",e,n),n}setItem(e,n){U("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){U("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){const n=e;if(n.storageArea===this.storage){if(U("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ws)return void We("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.bs.test(n.key)){if(n.newValue==null){const r=this.$s(n.key);return this.Us(r,null)}{const r=this.Ws(n.key,n.newValue);if(r)return this.Us(r.clientId,r)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const r=this.Gs(n.key,n.newValue);if(r)return this.zs(r)}}else if(this.Cs.test(n.key)){if(n.newValue!==null){const r=this.js(n.key,n.newValue);if(r)return this.Hs(r)}}else if(n.key===this.vs){if(n.newValue!==null){const r=this.xs(n.newValue);if(r)return this.Os(r)}}else if(n.key===this.Ss){const r=function(s){let o=$t.oe;if(s!=null)try{const a=JSON.parse(s);Y(typeof a=="number"),o=a}catch(a){We("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==$t.oe&&this.sequenceNumberHandler(r)}else if(n.key===this.Fs){const r=this.Js(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Ys(i)))}}}else this.ys.push(n)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Ls(e,n,r){const i=new Th(this.currentUser,e,n,r),s=FI(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ds())}Bs(e){const n=FI(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Qs(e){const n={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(n))}qs(e,n,r){const i=Mf(this.persistenceKey,e),s=new sl(e,n,r);this.setItem(i,s.ds())}Ks(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Fs,n)}$s(e){const n=this.bs.exec(e);return n?n[1]:null}Ws(e,n){const r=this.$s(e);return Sh.Es(r,n)}Gs(e,n){const r=this.Ds.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Th.Es(new it(s),i,n)}js(e,n){const r=this.Cs.exec(e),i=Number(r[1]);return sl.Es(i,n)}xs(e){return f_.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);U("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,n){const r=n?this.ps.insert(e,n):this.ps.remove(e),i=this.Ns(this.ps),s=this.Ns(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.eo(o,a).then(()=>{this.ps=r})}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let n=Zg();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class DR{constructor(){this.no=new cm,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new cm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class z2{io(e){}shutdown(){}}/**
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
 */class UI{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let oc=null;function Uf(){return oc===null?oc=function(){return 268435456+Math.round(2147483648*Math.random())}():oc++,"0x"+oc.toString(16)}/**
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
 */const $2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class q2{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const Tt="WebChannelConnection";class W2 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=Uf(),u=this.vo(n,r.toUriEncodedString());U("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(d=>(U("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Cn("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Go}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=$2[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Uf();return new Promise((o,a)=>{const u=new rA;u.setWithCredentials(!0),u.listenOnce(sA.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Rc.NO_ERROR:const d=u.getResponseJson();U(Tt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Rc.TIMEOUT:U(Tt,`RPC '${e}' ${s} timed out`),a(new M(V.DEADLINE_EXCEEDED,"Request time out"));break;case Rc.HTTP_ERROR:const f=u.getStatus();if(U(Tt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const R=function(b){const E=b.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(E)>=0?E:V.UNKNOWN}(v.status);a(new M(R,v.message))}else a(new M(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new M(V.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{U(Tt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);U(Tt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Uf(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=lA(),a=aA(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new iA({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");U(Tt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let m=!1,v=!1;const R=new q2({lo:b=>{v?U(Tt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(m||(U(Tt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),U(Tt,`RPC '${e}' stream ${i} sending:`,b),f.send(b))},ho:()=>f.close()}),P=(b,E,_)=>{b.listen(E,w=>{try{_(w)}catch(D){setTimeout(()=>{throw D},0)}})};return P(f,Ua.EventType.OPEN,()=>{v||(U(Tt,`RPC '${e}' stream ${i} transport opened.`),R.mo())}),P(f,Ua.EventType.CLOSE,()=>{v||(v=!0,U(Tt,`RPC '${e}' stream ${i} transport closed`),R.po())}),P(f,Ua.EventType.ERROR,b=>{v||(v=!0,Cn(Tt,`RPC '${e}' stream ${i} transport errored:`,b),R.po(new M(V.UNAVAILABLE,"The operation could not be completed")))}),P(f,Ua.EventType.MESSAGE,b=>{var E;if(!v){const _=b.data[0];Y(!!_);const w=_,D=w.error||((E=w[0])===null||E===void 0?void 0:E.error);if(D){U(Tt,`RPC '${e}' stream ${i} received error:`,D);const L=D.status;let F=function(T){const A=Ke[T];if(A!==void 0)return JA(A)}(L),I=D.message;F===void 0&&(F=V.INTERNAL,I="Unknown error status: "+L+" with message "+D.message),v=!0,R.po(new M(F,I)),f.close()}else U(Tt,`RPC '${e}' stream ${i} received:`,_),R.yo(_)}}),P(a,oA.STAT_EVENT,b=>{b.stat===Hp.PROXY?U(Tt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===Hp.NOPROXY&&U(Tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.fo()},0),R}}/**
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
 */function xR(){return typeof window<"u"?window:null}function xc(){return typeof document<"u"?document:null}/**
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
 */function fu(t){return new ZM(t,!0)}/**
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
 */class p_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class VR{constructor(e,n,r,i,s,o,a,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new p_(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(We(n.toString()),We("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new M(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class G2 extends VR{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=n2(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?Ge(o.readTime):J.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=sm(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=gh(u)?{documents:aR(s,u)}:{query:lR(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=tR(s,o.resumeToken);const c=rm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=ko(s,o.snapshotVersion.toTimestamp());const c=rm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=i2(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=sm(this.serializer),n.removeTarget=e,this.i_(n)}}class K2 extends VR{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Y(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=r2(e.writeResults,e.commitTime),r=Ge(e.commitTime);return this.listener.A_(r,n)}return Y(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=sm(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>zl(this.serializer,r))};this.i_(n)}}/**
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
 */class H2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new M(V.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,im(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new M(V.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,im(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(V.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class Q2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(We(n),this.y_=!1):U("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class Y2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Ei(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=G(u);c.M_.add(4),await Yo(c),c.N_.set("Unknown"),c.M_.delete(4),await pu(c)}(this))})}),this.N_=new Q2(r,i)}}async function pu(t){if(Ei(t))for(const e of t.x_)await e(!0)}async function Yo(t){for(const e of t.x_)await e(!1)}function dd(t,e){const n=G(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),__(n)?g_(n):Xo(n).Xo()&&m_(n,e))}function Do(t,e){const n=G(t),r=Xo(n);n.F_.delete(e),r.Xo()&&OR(n,e),n.F_.size===0&&(r.Xo()?r.n_():Ei(n)&&n.N_.set("Unknown"))}function m_(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Xo(t).P_(e)}function OR(t,e){t.L_.xe(e),Xo(t).I_(e)}function g_(t){t.L_=new QM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Xo(t).start(),t.N_.w_()}function __(t){return Ei(t)&&!Xo(t).Zo()&&t.F_.size>0}function Ei(t){return G(t).M_.size===0}function LR(t){t.L_=void 0}async function J2(t){t.N_.set("Online")}async function X2(t){t.F_.forEach((e,n)=>{m_(t,e)})}async function Z2(t,e){LR(t),__(t)?(t.N_.D_(e),g_(t)):t.N_.set("Unknown")}async function eF(t,e,n){if(t.N_.set("Online"),e instanceof eR&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ah(t,r)}else if(e instanceof Dc?t.L_.Ke(e):e instanceof ZA?t.L_.He(e):t.L_.We(e),!n.isEqual(J.min()))try{const r=await PR(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.F_.get(c);d&&s.F_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.F_.get(u);if(!d)return;s.F_.set(u,d.withResumeToken(et.EMPTY_BYTE_STRING,d.snapshotVersion)),OR(s,u);const f=new or(d.target,u,c,d.sequenceNumber);m_(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await Ah(t,r)}}async function Ah(t,e,n){if(!wi(e))throw e;t.M_.add(1),await Yo(t),t.N_.set("Offline"),n||(n=()=>PR(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await pu(t)})}function MR(t,e){return e().catch(n=>Ah(t,n,e))}async function Jo(t){const e=G(t),n=di(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;tF(e);)try{const i=await U2(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,nF(e,i)}catch(i){await Ah(e,i)}FR(e)&&UR(e)}function tF(t){return Ei(t)&&t.v_.length<10}function nF(t,e){t.v_.push(e);const n=di(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function FR(t){return Ei(t)&&!di(t).Zo()&&t.v_.length>0}function UR(t){di(t).start()}async function rF(t){di(t).V_()}async function iF(t){const e=di(t);for(const n of t.v_)e.d_(n.mutations)}async function sF(t,e,n){const r=t.v_.shift(),i=n_.from(r,e,n);await MR(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Jo(t)}async function oF(t,e){e&&di(t).E_&&await async function(r,i){if(function(o){return YA(o)&&o!==V.ABORTED}(i.code)){const s=r.v_.shift();di(r).t_(),await MR(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Jo(r)}}(t,e),FR(t)&&UR(t)}async function BI(t,e){const n=G(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=Ei(n);n.M_.add(3),await Yo(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await pu(n)}async function hm(t,e){const n=G(t);e?(n.M_.delete(2),await pu(n)):e||(n.M_.add(2),await Yo(n),n.N_.set("Unknown"))}function Xo(t){return t.B_||(t.B_=function(n,r,i){const s=G(n);return s.f_(),new G2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:J2.bind(null,t),To:X2.bind(null,t),Ao:Z2.bind(null,t),h_:eF.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),__(t)?g_(t):t.N_.set("Unknown")):(await t.B_.stop(),LR(t))})),t.B_}function di(t){return t.k_||(t.k_=function(n,r,i){const s=G(n);return s.f_(),new K2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:rF.bind(null,t),Ao:oF.bind(null,t),R_:iF.bind(null,t),A_:sF.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Jo(t)):(await t.k_.stop(),t.v_.length>0&&(U("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class y_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new at,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new y_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zo(t,e){if(We("AsyncQueue",`${e}: ${t}`),wi(t))return new M(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class uo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Ba(),this.sortedSet=new ye(this.comparator)}static emptySet(e){return new uo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof uo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new uo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class jI{constructor(){this.q_=new ye(W.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):H():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class xo{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new xo(e,n,uo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&lu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class aF{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class lF{constructor(){this.queries=new Ii(e=>OA(e),lu),this.onlineState="Unknown",this.z_=new Set}}async function v_(t,e){const n=G(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new aF,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Zo(o,`Initialization of query '${Os(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&I_(n)}async function w_(t,e){const n=G(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function uF(t,e){const n=G(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&I_(n)}function cF(t,e,n){const r=G(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function I_(t){t.z_.forEach(e=>{e.next()})}var dm,zI;(zI=dm||(dm={})).J_="default",zI.Cache="cache";class E_{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new xo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=xo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==dm.Cache}}/**
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
 */class hF{constructor(e,n){this.ia=e,this.byteLength=n}sa(){return"metadata"in this.ia}}/**
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
 */class $I{constructor(e){this.serializer=e}Ps(e){return $n(this.serializer,e)}Is(e){return e.metadata.exists?oR(this.serializer,e.document,!1):Ie.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return Ge(e)}}class dF{constructor(e,n,r){this.oa=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=BR(e)}_a(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.ia.namedQuery)this.queries.push(e.ia.namedQuery);else if(e.ia.documentMetadata){this.documents.push({metadata:e.ia.documentMetadata}),e.ia.documentMetadata.exists||++n;const r=se.fromString(e.ia.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ia.document&&(this.documents[this.documents.length-1].document=e.ia.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}aa(e){const n=new Map,r=new $I(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Ps(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||te()).add(s);n.set(o,a)}}return n}async complete(){const e=await B2(this.localStore,new $I(this.serializer),this.documents,this.oa.id),n=this.aa(this.documents);for(const r of this.queries)await j2(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,ua:this.collectionGroups,ca:e}}}function BR(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class jR{constructor(e){this.key=e}}class zR{constructor(e){this.key=e}}class $R{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=te(),this.mutatedKeys=te(),this.Ia=MA(e),this.Ta=new uo(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new jI,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),v=uu(this.query,f)?f:null,R=!!m&&this.mutatedKeys.has(m.key),P=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let b=!1;m&&v?m.data.isEqual(v.data)?R!==P&&(r.track({type:3,doc:v}),b=!0):this.Ra(m,v)||(r.track({type:2,doc:v}),b=!0,(u&&this.Ia(v,u)>0||c&&this.Ia(v,c)<0)&&(a=!0)):!m&&v?(r.track({type:0,doc:v}),b=!0):m&&!v&&(r.track({type:1,doc:m}),b=!0,(u||c)&&(a=!0)),b&&(v?(o=o.add(v),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,f)=>function(v,R){const P=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return P(v)-P(R)}(d.type,f.type)||this.Ia(d.doc,f.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new xo(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new jI,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=te(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new zR(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new jR(r))}),n}pa(e){this.la=e.hs,this.Pa=te();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return xo.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class fF{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class pF{constructor(e){this.key=e,this.wa=!1}}class mF{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Ii(a=>OA(a),lu),this.Da=new Map,this.Ca=new Set,this.va=new ye(W.comparator),this.Fa=new Map,this.Ma=new u_,this.xa={},this.Oa=new Map,this.Na=cs.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function gF(t,e,n=!0){const r=fd(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await qR(r,e,n,!0),i}async function _F(t,e){const n=fd(t);await qR(n,e,!0,!1)}async function qR(t,e,n,r){const i=await bo(t.localStore,Ot(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await T_(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&dd(t.remoteStore,i),a}async function T_(t,e,n,r,i){t.Ba=(f,m,v)=>async function(P,b,E,_){let w=b.view.da(E);w.Xi&&(w=await Eh(P.localStore,b.query,!1).then(({documents:I})=>b.view.da(I,w)));const D=_&&_.targetChanges.get(b.targetId),L=_&&_.targetMismatches.get(b.targetId)!=null,F=b.view.applyChanges(w,P.isPrimaryClient,D,L);return fm(P,b.targetId,F.fa),F.snapshot}(t,f,m,v);const s=await Eh(t.localStore,e,!0),o=new $R(e,s.hs),a=o.da(s.documents),u=du.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);fm(t,n,c.fa);const d=new fF(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function yF(t,e,n){const r=G(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!lu(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await No(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Do(r.remoteStore,i.targetId),Vo(r,i.targetId)}).catch(vi)):(Vo(r,i.targetId),await No(r.localStore,i.targetId,!0))}async function vF(t,e){const n=G(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Do(n.remoteStore,r.targetId))}async function wF(t,e,n){const r=P_(t);try{const i=await function(o,a){const u=G(o),c=Re.now(),d=a.reduce((v,R)=>v.add(R.key),te());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",v=>{let R=Wt(),P=te();return u.os.getEntries(v,d).next(b=>{R=b,R.forEach((E,_)=>{_.isValidDocument()||(P=P.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(v,R)).next(b=>{f=b;const E=[];for(const _ of a){const w=GM(_,f.get(_.key).overlayedDocument);w!=null&&E.push(new Er(_.key,w,RA(w.value.mapValue),Ae.exists(!0)))}return u.mutationQueue.addMutationBatch(v,c,E,a)}).next(b=>{m=b;const E=b.applyToLocalDocumentSet(f,P);return u.documentOverlayCache.saveOverlays(v,b.batchId,E)})}).then(()=>({batchId:m.batchId,changes:UA(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.xa[o.currentUser.toKey()];c||(c=new ye(ee)),c=c.insert(a,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await Tr(r,i.changes),await Jo(r.remoteStore)}catch(i){const s=Zo(i,"Failed to persist write");n.reject(s)}}async function WR(t,e){const n=G(t);try{const r=await F2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(Y(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?Y(o.wa):i.removedDocuments.size>0&&(Y(o.wa),o.wa=!1))}),await Tr(n,r,e)}catch(r){await vi(r)}}function qI(t,e,n){const r=G(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=G(o);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.U_)m.j_(a)&&(c=!0)}),c&&I_(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function IF(t,e,n){const r=G(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new ye(W.comparator);o=o.insert(s,Ie.newNoDocument(s,J.min()));const a=te().add(s),u=new hu(J.min(),new Map,new ye(ee),o,a);await WR(r,u),r.va=r.va.remove(s),r.Fa.delete(e),R_(r)}else await No(r.localStore,e,!1).then(()=>Vo(r,e,n)).catch(vi)}async function EF(t,e){const n=G(t),r=e.batch.batchId;try{const i=await M2(n.localStore,e);A_(n,r,null),S_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Tr(n,i)}catch(i){await vi(i)}}async function TF(t,e,n){const r=G(t);try{const i=await function(o,a){const u=G(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(Y(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);A_(r,e,n),S_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Tr(r,i)}catch(i){await vi(i)}}async function SF(t,e){const n=G(t);Ei(n.remoteStore)||U("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=G(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",u=>a.mutationQueue.getHighestUnacknowledgedBatchId(u))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Oa.get(r)||[];i.push(e),n.Oa.set(r,i)}catch(r){const i=Zo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function S_(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function A_(t,e,n){const r=G(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function Vo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||GR(t,r)})}function GR(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Do(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),R_(t))}function fm(t,e,n){for(const r of n)r instanceof jR?(t.Ma.addReference(r.key,e),AF(t,r)):r instanceof zR?(U("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||GR(t,r.key)):H()}function AF(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(U("SyncEngine","New document in limbo: "+n),t.Ca.add(r),R_(t))}function R_(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new W(se.fromString(e)),r=t.Na.next();t.Fa.set(r,new pF(n)),t.va=t.va.insert(n,r),dd(t.remoteStore,new or(Ot(Ko(n.path)),r,"TargetPurposeLimboResolution",$t.oe))}}async function Tr(t,e,n){const r=G(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,u)=>{o.push(r.Ba(u,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const d=c&&!c.fromCache;r.sharedClientState.updateQueryState(u.targetId,d?"current":"not-current")}if(c){i.push(c);const d=d_.Ki(u.targetId,c);s.push(d)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const d=G(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>x.forEach(c,m=>x.forEach(m.qi,v=>d.persistence.referenceDelegate.addReference(f,m.targetId,v)).next(()=>x.forEach(m.Qi,v=>d.persistence.referenceDelegate.removeReference(f,m.targetId,v)))))}catch(f){if(!wi(f))throw f;U("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const v=d.ns.get(m),R=v.snapshotVersion,P=v.withLastLimboFreeSnapshotVersion(R);d.ns=d.ns.insert(m,P)}}}(r.localStore,s))}async function RF(t,e){const n=G(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await RR(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(u=>{u.reject(new M(V.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Tr(n,r.us)}}function PF(t,e){const n=G(t),r=n.Fa.get(e);if(r&&r.wa)return te().add(r.key);{let i=te();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}async function CF(t,e){const n=G(t),r=await Eh(n.localStore,e.query,!0),i=e.view.pa(r);return n.isPrimaryClient&&fm(n,e.targetId,i.fa),i}async function kF(t,e){const n=G(t);return bR(n.localStore,e).then(r=>Tr(n,r))}async function bF(t,e,n,r){const i=G(t),s=await function(a,u){const c=G(a),d=G(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",f=>d.vn(f,u).next(m=>m?c.localDocuments.getDocuments(f,m):x.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Jo(i.remoteStore):n==="acknowledged"||n==="rejected"?(A_(i,e,r||null),S_(i,e),function(a,u){G(G(a).mutationQueue).Mn(u)}(i.localStore,e)):H(),await Tr(i,s)):U("SyncEngine","Cannot apply mutation batch with id: "+e)}async function NF(t,e){const n=G(t);if(fd(n),P_(n),e===!0&&n.La!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await WI(n,r.toArray());n.La=!0,await hm(n.remoteStore,!0);for(const s of i)dd(n.remoteStore,s)}else if(e===!1&&n.La!==!1){const r=[];let i=Promise.resolve();n.Da.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Vo(n,o),No(n.localStore,o,!0))),Do(n.remoteStore,o)}),await i,await WI(n,r),function(o){const a=G(o);a.Fa.forEach((u,c)=>{Do(a.remoteStore,c)}),a.Ma.mr(),a.Fa=new Map,a.va=new ye(W.comparator)}(n),n.La=!1,await hm(n.remoteStore,!1)}}async function WI(t,e,n){const r=G(t),i=[],s=[];for(const o of e){let a;const u=r.Da.get(o);if(u&&u.length!==0){a=await bo(r.localStore,Ot(u[0]));for(const c of u){const d=r.ba.get(c),f=await CF(r,d);f.snapshot&&s.push(f.snapshot)}}else{const c=await kR(r.localStore,o);a=await bo(r.localStore,c),await T_(r,KR(c),o,!1,a.resumeToken)}i.push(a)}return r.Sa.h_(s),i}function KR(t){return VA(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function DF(t){return function(n){return G(G(n).persistence).Bi()}(G(t).localStore)}async function xF(t,e,n,r){const i=G(t);if(i.La)return void U("SyncEngine","Ignoring unexpected query state notification.");const s=i.Da.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await bR(i.localStore,LA(s[0])),a=hu.createSynthesizedRemoteEventForCurrentChange(e,n==="current",et.EMPTY_BYTE_STRING);await Tr(i,o,a);break}case"rejected":await No(i.localStore,e,!0),Vo(i,e,r);break;default:H()}}async function VF(t,e,n){const r=fd(t);if(r.La){for(const i of e){if(r.Da.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){U("SyncEngine","Adding an already active target "+i);continue}const s=await kR(r.localStore,i),o=await bo(r.localStore,s);await T_(r,KR(s),o.targetId,!1,o.resumeToken),dd(r.remoteStore,o)}for(const i of n)r.Da.has(i)&&await No(r.localStore,i,!1).then(()=>{Do(r.remoteStore,i),Vo(r,i)}).catch(vi)}}function fd(t){const e=G(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=WR.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=IF.bind(null,e),e.Sa.h_=uF.bind(null,e.eventManager),e.Sa.ka=cF.bind(null,e.eventManager),e}function P_(t){const e=G(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=EF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TF.bind(null,e),e}function OF(t,e,n){const r=G(t);(async function(s,o,a){try{const u=await o.getMetadata();if(await function(v,R){const P=G(v),b=Ge(R.createTime);return P.persistence.runTransaction("hasNewerBundle","readonly",E=>P.$r.getBundleMetadata(E,R.id)).then(E=>!!E&&E.createTime.compareTo(b)>=0)}(s.localStore,u))return await o.close(),a._completeWith(function(v){return{taskState:"Success",documentsLoaded:v.totalDocuments,bytesLoaded:v.totalBytes,totalDocuments:v.totalDocuments,totalBytes:v.totalBytes}}(u)),Promise.resolve(new Set);a._updateProgress(BR(u));const c=new dF(u,s.localStore,o.serializer);let d=await o.qa();for(;d;){const m=await c._a(d);m&&a._updateProgress(m),d=await o.qa()}const f=await c.complete();return await Tr(s,f.ca,void 0),await function(v,R){const P=G(v);return P.persistence.runTransaction("Save bundle","readwrite",b=>P.$r.saveBundleMetadata(b,R))}(s.localStore,u),a._completeWith(f.progress),Promise.resolve(f.ua)}catch(u){return Cn("SyncEngine",`Loading bundle failed with ${u}`),a._failWith(u),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class pm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=fu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return AR(this.persistence,new SR,e.initialUser,this.serializer)}createPersistence(e){return new TR(hd.Hr,this.serializer)}createSharedClientState(e){return new DR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class HR extends pm{constructor(e,n,r){super(),this.Qa=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Qa.initialize(this,e),await P_(this.Qa.syncEngine),await Jo(this.Qa.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return AR(this.persistence,new SR,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new w2(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new rM(n,this.persistence);return new nM(e.asyncQueue,r)}createPersistence(e){const n=h_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Bt.withCacheSize(this.cacheSizeBytes):Bt.DEFAULT;return new c_(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,xR(),xc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new DR}}class LF extends HR{constructor(e,n){super(e,n,!1),this.Qa=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Qa.syncEngine;this.sharedClientState instanceof Ff&&(this.sharedClientState.syncEngine={Zs:bF.bind(null,n),Xs:xF.bind(null,n),eo:VF.bind(null,n),Bi:DF.bind(null,n),Ys:kF.bind(null,n)},await this.sharedClientState.start()),await this.persistence.fi(async r=>{await NF(this.Qa.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=xR();if(!Ff.D(n))throw new M(V.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=h_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Ff(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class C_{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qI(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=RF.bind(null,this.syncEngine),await hm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new lF}()}createDatastore(e){const n=fu(e.databaseInfo.databaseId),r=function(s){return new W2(s)}(e.databaseInfo);return function(s,o,a,u){return new H2(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new Y2(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>qI(this.syncEngine,n,0),function(){return UI.D()?new UI:new z2}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const f=new mF(i,s,o,a,u,c);return d&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=G(r);U("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Yo(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */function GI(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class pd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):We("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class MF{constructor(e,n){this.Ua=e,this.serializer=n,this.metadata=new at,this.buffer=new Uint8Array,this.Wa=function(){return new TextDecoder("utf-8")}(),this.Ga().then(r=>{r&&r.sa()?this.metadata.resolve(r.ia.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ia)}`))},r=>this.metadata.reject(r))}close(){return this.Ua.cancel()}async getMetadata(){return this.metadata.promise}async qa(){return await this.getMetadata(),this.Ga()}async Ga(){const e=await this.za();if(e===null)return null;const n=this.Wa.decode(e),r=Number(n);isNaN(r)&&this.ja(`length string (${n}) is not valid number`);const i=await this.Ha(r);return new hF(JSON.parse(i),e.length+r)}Ja(){return this.buffer.findIndex(e=>e===123)}async za(){for(;this.Ja()<0&&!await this.Ya(););if(this.buffer.length===0)return null;const e=this.Ja();e<0&&this.ja("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ha(e){for(;this.buffer.length<e;)await this.Ya()&&this.ja("Reached the end of bundle when more is expected.");const n=this.Wa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}ja(e){throw this.Ua.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ya(){const e=await this.Ua.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class FF{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new M(V.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=G(i),a={documents:s.map(f=>jl(o.serializer,f))},u=await o.xo("BatchGetDocuments",o.serializer.databaseId,se.emptyPath(),a,s.length),c=new Map;u.forEach(f=>{const m=t2(o.serializer,f);c.set(m.key.toString(),m)});const d=[];return s.forEach(f=>{const m=c.get(f.toString());Y(!!m),d.push(m)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Qo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=W.fromPath(r);this.mutations.push(new e_(i,this.precondition(i)))}),await async function(r,i){const s=G(r),o={writes:i.map(a=>zl(s.serializer,a))};await s.Co("Commit",s.serializer.databaseId,se.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw H();n=J.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new M(V.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(J.min())?Ae.exists(!1):Ae.updateTime(n):Ae.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(J.min()))throw new M(V.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ae.updateTime(n)}return Ae.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class UF{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Za=r.maxAttempts,this.Yo=new p_(this.asyncQueue,"transaction_retry")}Xa(){this.Za-=1,this.eu()}eu(){this.Yo.$o(async()=>{const e=new FF(this.datastore),n=this.tu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.nu(i)}))}).catch(r=>{this.nu(r)})})}tu(e){try{const n=this.updateFunction(e);return!ou(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}nu(e){this.Za>0&&this.ru(e)?(this.Za-=1,this.asyncQueue.enqueueAndForget(()=>(this.eu(),Promise.resolve()))):this.deferred.reject(e)}ru(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!YA(n)}return!1}}/**
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
 */class BF{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=it.UNAUTHENTICATED,this.clientId=cA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{U("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(U("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new at;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Zo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vc(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await RR(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function mm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await k_(t);U("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>BI(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>BI(e.remoteStore,i)),t._onlineComponents=e}function QR(t){return t.name==="FirebaseError"?t.code===V.FAILED_PRECONDITION||t.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function k_(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!QR(n))throw n;Cn("Error using user provided cache. Falling back to memory cache: "+n),await Vc(t,new pm)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await Vc(t,new pm);return t._offlineComponents}async function md(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await mm(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await mm(t,new C_))),t._onlineComponents}function YR(t){return k_(t).then(e=>e.persistence)}function b_(t){return k_(t).then(e=>e.localStore)}function JR(t){return md(t).then(e=>e.remoteStore)}function N_(t){return md(t).then(e=>e.syncEngine)}function jF(t){return md(t).then(e=>e.datastore)}async function Oo(t){const e=await md(t),n=e.eventManager;return n.onListen=gF.bind(null,e.syncEngine),n.onUnlisten=yF.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=_F.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=vF.bind(null,e.syncEngine),n}function zF(t){return t.asyncQueue.enqueue(async()=>{const e=await YR(t),n=await JR(t);return e.setNetworkEnabled(!0),function(i){const s=G(i);return s.M_.delete(0),pu(s)}(n)})}function $F(t){return t.asyncQueue.enqueue(async()=>{const e=await YR(t),n=await JR(t);return e.setNetworkEnabled(!1),async function(i){const s=G(i);s.M_.add(0),await Yo(s),s.N_.set("Offline")}(n)})}function qF(t,e){const n=new at;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,d){const f=G(c);return f.persistence.runTransaction("read document","readonly",m=>f.localDocuments.getDocument(m,d))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new M(V.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const u=Zo(a,`Failed to get document '${s} from cache`);o.reject(u)}}(await b_(t),e,n)),n.promise}function XR(t,e,n={}){const r=new at;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new pd({next:m=>{o.enqueueAndForget(()=>w_(s,f));const v=m.docs.has(a);!v&&m.fromCache?c.reject(new M(V.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&u&&u.source==="server"?c.reject(new M(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new E_(Ko(a.path),d,{includeMetadataChanges:!0,ra:!0});return v_(s,f)}(await Oo(t),t.asyncQueue,e,n,r)),r.promise}function WF(t,e){const n=new at;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await Eh(i,s,!0),u=new $R(s,a.hs),c=u.da(a.documents),d=u.applyChanges(c,!1);o.resolve(d.snapshot)}catch(a){const u=Zo(a,`Failed to execute query '${s} against cache`);o.reject(u)}}(await b_(t),e,n)),n.promise}function ZR(t,e,n={}){const r=new at;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new pd({next:m=>{o.enqueueAndForget(()=>w_(s,f)),m.fromCache&&u.source==="server"?c.reject(new M(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new E_(a,d,{includeMetadataChanges:!0,ra:!0});return v_(s,f)}(await Oo(t),t.asyncQueue,e,n,r)),r.promise}function GF(t,e){const n=new pd(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){G(i).z_.add(s),s.next()}(await Oo(t),n)),()=>{n.$a(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){G(i).z_.delete(s)}(await Oo(t),n))}}function KF(t,e,n,r){const i=function(o,a){let u;return u=typeof o=="string"?XA().encode(o):o,function(d,f){return new MF(d,f)}(function(d,f){if(d instanceof Uint8Array)return GI(d,f);if(d instanceof ArrayBuffer)return GI(new Uint8Array(d),f);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(u),a)}(n,fu(e));t.asyncQueue.enqueueAndForget(async()=>{OF(await N_(t),i,r)})}function HF(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=G(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.$r.getNamedQuery(o,i))}(await b_(t),e))}/**
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
 */function eP(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const KI=new Map;/**
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
 */function D_(t,e,n){if(!n)throw new M(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function tP(t,e,n,r){if(e===!0&&r===!0)throw new M(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function HI(t){if(!W.isDocumentKey(t))throw new M(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function QI(t){if(W.isDocumentKey(t))throw new M(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function gd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H()}function ue(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gd(t);throw new M(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function nP(t,e){if(e<=0)throw new M(V.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class YI{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new M(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eP((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new M(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new M(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new M(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new YI({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new YI(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new WL;switch(r.type){case"firstParty":return new QL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=KI.get(n);r&&(U("ComponentProvider","Removing Datastore"),KI.delete(n),r.terminate())}(this),Promise.resolve()}}function rP(t,e,n,r={}){var i;const s=(t=ue(t,mu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Cn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=it.MOCK_USER;else{a=aN(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new M(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new it(c)}t._authCredentials=new GL(new uA(a,u))}}/**
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
 */let Lt=class iP{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new iP(this.firestore,e,this._query)}},Ne=class sP{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ti(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new sP(this.firestore,e,this._key)}},ti=class oP extends Lt{constructor(e,n,r){super(e,n,Ko(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new W(e))}withConverter(e){return new oP(this.firestore,e,this._path)}};function aP(t,e,...n){if(t=X(t),D_("collection","path",e),t instanceof mu){const r=se.fromString(e,...n);return QI(r),new ti(t,null,r)}{if(!(t instanceof Ne||t instanceof ti))throw new M(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return QI(r),new ti(t.firestore,null,r)}}function QF(t,e){if(t=ue(t,mu),D_("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new M(V.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Lt(t,null,function(r){return new Ir(se.emptyPath(),r)}(e))}function $l(t,e,...n){if(t=X(t),arguments.length===1&&(e=cA.newId()),D_("doc","path",e),t instanceof mu){const r=se.fromString(e,...n);return HI(r),new Ne(t,null,new W(r))}{if(!(t instanceof Ne||t instanceof ti))throw new M(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return HI(r),new Ne(t.firestore,t instanceof ti?t.converter:null,new W(r))}}function lP(t,e){return t=X(t),e=X(e),(t instanceof Ne||t instanceof ti)&&(e instanceof Ne||e instanceof ti)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function uP(t,e){return t=X(t),e=X(e),t instanceof Lt&&e instanceof Lt&&t.firestore===e.firestore&&lu(t._query,e._query)&&t.converter===e.converter}/**
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
 */class YF{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new p_(this,"async_queue_retry"),this.hu=()=>{const n=xc();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=xc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=xc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new at;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!wi(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw We("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=y_.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&H()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function gm(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class JF{constructor(){this._progressObserver={},this._taskCompletionResolver=new at,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const XF=-1;let Fe=class extends mu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new YF}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||cP(this),this._firestoreClient.terminate()}};function ZF(t,e){const n=Sg(),r="(default)",i=Zl(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=sN("firestore");s&&rP(i,...s)}return i}function ct(t){return t._firestoreClient||cP(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function cP(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new SM(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,eP(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new BF(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function eU(t,e){dP(t=ue(t,Fe));const n=ct(t);if(n._uninitializedComponentsProvider)throw new M(V.FAILED_PRECONDITION,"SDK cache is already specified.");Cn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new C_;return hP(n,i,new HR(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function tU(t){dP(t=ue(t,Fe));const e=ct(t);if(e._uninitializedComponentsProvider)throw new M(V.FAILED_PRECONDITION,"SDK cache is already specified.");Cn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new C_;return hP(e,r,new LF(r,n.cacheSizeBytes))}function hP(t,e,n){const r=new at;return t.asyncQueue.enqueue(async()=>{try{await Vc(t,n),await mm(t,e),r.resolve()}catch(i){const s=i;if(!QR(s))throw s;Cn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function nU(t){if(t._initialized&&!t._terminated)throw new M(V.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new at;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!zn.D())return Promise.resolve();const i=r+"main";await zn.delete(i)}(h_(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function rU(t){return function(n){const r=new at;return n.asyncQueue.enqueueAndForget(async()=>SF(await N_(n),r)),r.promise}(ct(t=ue(t,Fe)))}function iU(t){return zF(ct(t=ue(t,Fe)))}function sU(t){return $F(ct(t=ue(t,Fe)))}function oU(t,e){const n=ct(t=ue(t,Fe)),r=new JF;return KF(n,t._databaseId,e,r),r}function aU(t,e){return HF(ct(t=ue(t,Fe)),e).then(n=>n?new Lt(t,null,n.query):null)}function dP(t){if(t._initialized||t._terminated)throw new M(V.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class Gn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gn(et.fromBase64String(e))}catch(n){throw new M(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Gn(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let fi=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Se(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let ws=class{constructor(e){this._methodName=e}};/**
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
 */class _d{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}}/**
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
 */const lU=/^__.*__$/;class uU{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Er(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ho(e,this.data,n,this.fieldTransforms)}}class fP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Er(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function pP(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class yd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new yd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Rh(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(pP(this.fu)&&lU.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class cU{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||fu(e)}Fu(e,n,r,i=!1){return new yd({fu:e,methodName:n,vu:r,path:Se.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Is(t){const e=t._freezeSettings(),n=fu(t._databaseId);return new cU(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vd(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);U_("Data must be an object, but it was:",o,r);const a=_P(r,o);let u,c;if(s.merge)u=new qt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=_m(e,f,n);if(!o.contains(m))throw new M(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);vP(d,m)||d.push(m)}u=new qt(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new uU(new mt(a),u,c)}class gu extends ws{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof gu}}function mP(t,e,n){return new yd({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class x_ extends ws{_toFieldTransform(e){return new cu(e.path,new Po)}isEqual(e){return e instanceof x_}}class V_ extends ws{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=mP(this,e,!0),r=this.Mu.map(s=>Es(s,n)),i=new os(r);return new cu(e.path,i)}isEqual(e){return e instanceof V_&&yo(this.Mu,e.Mu)}}class O_ extends ws{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=mP(this,e,!0),r=this.Mu.map(s=>Es(s,n)),i=new as(r);return new cu(e.path,i)}isEqual(e){return e instanceof O_&&yo(this.Mu,e.Mu)}}class L_ extends ws{constructor(e,n){super(e),this.xu=n}_toFieldTransform(e){const n=new Co(e.serializer,$A(e.serializer,this.xu));return new cu(e.path,n)}isEqual(e){return e instanceof L_&&this.xu===e.xu}}function M_(t,e,n,r){const i=t.Fu(1,e,n);U_("Data must be an object, but it was:",i,r);const s=[],o=mt.empty();vs(r,(u,c)=>{const d=B_(e,u,n);c=X(c);const f=i.Su(d);if(c instanceof gu)s.push(d);else{const m=Es(c,f);m!=null&&(s.push(d),o.set(d,m))}});const a=new qt(s);return new fP(o,a,i.fieldTransforms)}function F_(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[_m(e,r,n)],u=[i];if(s.length%2!=0)throw new M(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(_m(e,s[m])),u.push(s[m+1]);const c=[],d=mt.empty();for(let m=a.length-1;m>=0;--m)if(!vP(c,a[m])){const v=a[m];let R=u[m];R=X(R);const P=o.Su(v);if(R instanceof gu)c.push(v);else{const b=Es(R,P);b!=null&&(c.push(v),d.set(v,b))}}const f=new qt(c);return new fP(d,f,o.fieldTransforms)}function gP(t,e,n,r=!1){return Es(n,t.Fu(r?4:3,e))}function Es(t,e){if(yP(t=X(t)))return U_("Unsupported field value:",e,t),_P(t,e);if(t instanceof ws)return function(r,i){if(!pP(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Es(a,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=X(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $A(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Re.fromDate(r);return{timestampValue:ko(i.serializer,s)}}if(r instanceof Re){const s=new Re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ko(i.serializer,s)}}if(r instanceof _d)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gn)return{bytesValue:tR(i.serializer,r._byteString)};if(r instanceof Ne){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:s_(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${gd(r)}`)}(t,e)}function _P(t,e){const n={};return TA(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vs(t,(r,i)=>{const s=Es(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function yP(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Re||t instanceof _d||t instanceof Gn||t instanceof Ne||t instanceof ws)}function U_(t,e,n){if(!yP(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=gd(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function _m(t,e,n){if((e=X(e))instanceof fi)return e._internalPath;if(typeof e=="string")return B_(t,e);throw Rh("Field path arguments must be of type string or ",t,!1,void 0,n)}const hU=new RegExp("[~\\*/\\[\\]]");function B_(t,e,n){if(e.search(hU)>=0)throw Rh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fi(...e.split("."))._internalPath}catch{throw Rh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new M(V.INVALID_ARGUMENT,a+t+u)}function vP(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ql{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dU(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(wd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class dU extends ql{data(){return super.data()}}function wd(t,e){return typeof e=="string"?B_(t,e):e instanceof fi?e._internalPath:e._delegate._internalPath}/**
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
 */function wP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class j_{}class _u extends j_{}function Dr(t,e,...n){let r=[];e instanceof j_&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof z_).length,a=s.filter(u=>u instanceof Id).length;if(o>1||o>0&&a>0)throw new M(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Id extends _u{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Id(e,n,r)}_apply(e){const n=this._parse(e);return EP(e._query,n),new Lt(e.firestore,e.converter,nm(e._query,n))}_parse(e){const n=Is(e.firestore);return function(s,o,a,u,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new M(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){XI(f,d);const v=[];for(const R of f)v.push(JI(u,s,R));m={arrayValue:{values:v}}}else m=JI(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||XI(f,d),m=gP(a,o,f,d==="in"||d==="not-in");return oe.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function fU(t,e,n){const r=e,i=wd("where",t);return Id._create(i,r,n)}class z_ extends j_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new z_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:he.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)EP(o,u),o=nm(o,u)}(e._query,n),new Lt(e.firestore,e.converter,nm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class $_ extends _u{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new $_(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new M(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new M(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Bl(s,o)}(e._query,this._field,this._direction);return new Lt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Ir(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function pU(t,e="asc"){const n=e,r=wd("orderBy",t);return $_._create(r,n)}class Ed extends _u{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Ed(e,n,r)}_apply(e){return new Lt(e.firestore,e.converter,yh(e._query,this._limit,this._limitType))}}function mU(t){return nP("limit",t),Ed._create("limit",t,"F")}function gU(t){return nP("limitToLast",t),Ed._create("limitToLast",t,"L")}class Td extends _u{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Td(e,n,r)}_apply(e){const n=IP(e,this.type,this._docOrFields,this._inclusive);return new Lt(e.firestore,e.converter,function(i,s){return new Ir(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function _U(...t){return Td._create("startAt",t,!0)}function yU(...t){return Td._create("startAfter",t,!1)}class Sd extends _u{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Sd(e,n,r)}_apply(e){const n=IP(e,this.type,this._docOrFields,this._inclusive);return new Lt(e.firestore,e.converter,function(i,s){return new Ir(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function vU(...t){return Sd._create("endBefore",t,!1)}function wU(...t){return Sd._create("endAt",t,!0)}function IP(t,e,n,r){if(n[0]=X(n[0]),n[0]instanceof ql)return function(s,o,a,u,c){if(!u)throw new M(V.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const f of lo(s))if(f.field.isKeyField())d.push(is(o,u.key));else{const m=u.data.field(f.field);if(od(m))throw new M(V.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const v=f.field.canonicalString();throw new M(V.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${v}' (used as the orderBy) does not exist.`)}d.push(m)}return new hi(d,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Is(t.firestore);return function(o,a,u,c,d,f){const m=o.explicitOrderBy;if(d.length>m.length)throw new M(V.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const v=[];for(let R=0;R<d.length;R++){const P=d[R];if(m[R].field.isKeyField()){if(typeof P!="string")throw new M(V.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof P}`);if(!Xg(o)&&P.indexOf("/")!==-1)throw new M(V.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${P}' contains a slash.`);const b=o.path.child(se.fromString(P));if(!W.isDocumentKey(b))throw new M(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${b}' is not because it contains an odd number of segments.`);const E=new W(b);v.push(is(a,E))}else{const b=gP(u,c,P);v.push(b)}}return new hi(v,f)}(t._query,t.firestore._databaseId,i,e,n,r)}}function JI(t,e,n){if(typeof(n=X(n))=="string"){if(n==="")throw new M(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Xg(e)&&n.indexOf("/")!==-1)throw new M(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(se.fromString(n));if(!W.isDocumentKey(r))throw new M(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return is(t,new W(r))}if(n instanceof Ne)return is(t,n._key);throw new M(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gd(n)}.`)}function XI(t,e){if(!Array.isArray(t)||t.length===0)throw new M(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function EP(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new M(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class q_{convertValue(e,n="none"){switch(rs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(li(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw H()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return vs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new _d(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Yg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ml(e));default:return null}}convertTimestamp(e){const n=mr(e);return new Re(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=se.fromString(e);Y(dR(r));const i=new ui(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||We(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Ad(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class IU extends q_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}/**
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
 */class ji{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let gr=class extends ql{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ol(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(wd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},ol=class extends gr{data(e={}){return super.data(e)}},pi=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ji(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ol(this._firestore,this._userDataWriter,r.key,r,new ji(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new ol(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ji(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new ol(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ji(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:EU(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function EU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}function TP(t,e){return t instanceof gr&&e instanceof gr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof pi&&e instanceof pi&&t._firestore===e._firestore&&uP(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function TU(t){t=ue(t,Ne);const e=ue(t.firestore,Fe);return XR(ct(e),t._key).then(n=>W_(e,t,n))}class Ts extends q_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}function SU(t){t=ue(t,Ne);const e=ue(t.firestore,Fe),n=ct(e),r=new Ts(e);return qF(n,t._key).then(i=>new gr(e,r,t._key,i,new ji(i!==null&&i.hasLocalMutations,!0),t.converter))}function AU(t){t=ue(t,Ne);const e=ue(t.firestore,Fe);return XR(ct(e),t._key,{source:"server"}).then(n=>W_(e,t,n))}function RU(t){t=ue(t,Lt);const e=ue(t.firestore,Fe),n=ct(e),r=new Ts(e);return wP(t._query),ZR(n,t._query).then(i=>new pi(e,r,t,i))}function PU(t){t=ue(t,Lt);const e=ue(t.firestore,Fe),n=ct(e),r=new Ts(e);return WF(n,t._query).then(i=>new pi(e,r,t,i))}function CU(t){t=ue(t,Lt);const e=ue(t.firestore,Fe),n=ct(e),r=new Ts(e);return ZR(n,t._query,{source:"server"}).then(i=>new pi(e,r,t,i))}function ym(t,e,n){t=ue(t,Ne);const r=ue(t.firestore,Fe),i=Ad(t.converter,e,n);return yu(r,[vd(Is(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ae.none())])}function ZI(t,e,n,...r){t=ue(t,Ne);const i=ue(t.firestore,Fe),s=Is(i);let o;return o=typeof(e=X(e))=="string"||e instanceof fi?F_(s,"updateDoc",t._key,e,n,r):M_(s,"updateDoc",t._key,e),yu(i,[o.toMutation(t._key,Ae.exists(!0))])}function kU(t){return yu(ue(t.firestore,Fe),[new Qo(t._key,Ae.none())])}function bU(t,e){const n=ue(t.firestore,Fe),r=$l(t),i=Ad(t.converter,e);return yu(n,[vd(Is(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ae.exists(!1))]).then(()=>r)}function SP(t,...e){var n,r,i;t=X(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||gm(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(gm(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,d;if(t instanceof Ne)c=ue(t.firestore,Fe),d=Ko(t._key.path),u={next:f=>{e[o]&&e[o](W_(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=ue(t,Lt);c=ue(f.firestore,Fe),d=f._query;const m=new Ts(c);u={next:v=>{e[o]&&e[o](new pi(c,m,f,v))},error:e[o+1],complete:e[o+2]},wP(t._query)}return function(m,v,R,P){const b=new pd(P),E=new E_(v,b,R);return m.asyncQueue.enqueueAndForget(async()=>v_(await Oo(m),E)),()=>{b.$a(),m.asyncQueue.enqueueAndForget(async()=>w_(await Oo(m),E))}}(ct(c),d,a,u)}function NU(t,e){return GF(ct(t=ue(t,Fe)),gm(e)?e:{next:e})}function yu(t,e){return function(r,i){const s=new at;return r.asyncQueue.enqueueAndForget(async()=>wF(await N_(r),i,s)),s.promise}(ct(t),e)}function W_(t,e,n){const r=n.docs.get(e._key),i=new Ts(t);return new gr(t,i,e._key,r,new ji(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const DU={maxAttempts:5};/**
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
 */let xU=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Is(e)}set(e,n,r){this._verifyNotCommitted();const i=Fr(e,this._firestore),s=Ad(i.converter,n,r),o=vd(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ae.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Fr(e,this._firestore);let o;return o=typeof(n=X(n))=="string"||n instanceof fi?F_(this._dataReader,"WriteBatch.update",s._key,n,r,i):M_(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Ae.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Fr(e,this._firestore);return this._mutations=this._mutations.concat(new Qo(n._key,Ae.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new M(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Fr(t,e){if((t=X(t)).firestore!==e)throw new M(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */let VU=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Is(n)}get(n){const r=Fr(n,this._firestore),i=new IU(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return H();const o=s[0];if(o.isFoundDocument())return new ql(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new ql(this._firestore,i,r._key,null,r.converter);throw H()})}set(n,r,i){const s=Fr(n,this._firestore),o=Ad(s.converter,r,i),a=vd(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=Fr(n,this._firestore);let a;return a=typeof(r=X(r))=="string"||r instanceof fi?F_(this._dataReader,"Transaction.update",o._key,r,i,s):M_(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=Fr(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Fr(e,this._firestore),r=new Ts(this._firestore);return super.get(e).then(i=>new gr(this._firestore,r,n._key,i._document,new ji(!1,!1),n.converter))}};function OU(t,e,n){t=ue(t,Fe);const r=Object.assign(Object.assign({},DU),n);return function(s){if(s.maxAttempts<1)throw new M(V.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new at;return s.asyncQueue.enqueueAndForget(async()=>{const c=await jF(s);new UF(s.asyncQueue,c,a,o,u).Xa()}),u.promise}(ct(t),i=>e(new VU(t,i)),r)}/**
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
 */function LU(){return new gu("deleteField")}function MU(){return new x_("serverTimestamp")}function FU(...t){return new V_("arrayUnion",t)}function UU(...t){return new O_("arrayRemove",t)}function BU(t){return new L_("increment",t)}(function(e,n=!0){(function(i){Go=i})(yr),fr(new Rn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Fe(new KL(r.getProvider("auth-internal")),new JL(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new M(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ui(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),nn(Kw,"4.6.3",e),nn(Kw,"4.6.3","esm2017")})();const jU="@firebase/firestore-compat",zU="0.3.32";/**
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
 */function G_(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new M("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function eE(){if(typeof Uint8Array>"u")throw new M("unimplemented","Uint8Arrays are not available in this environment.")}function tE(){if(!EM())throw new M("unimplemented","Blobs are unavailable in Firestore in this environment.")}let AP=class vm{constructor(e){this._delegate=e}static fromBase64String(e){return tE(),new vm(Gn.fromBase64String(e))}static fromUint8Array(e){return eE(),new vm(Gn.fromUint8Array(e))}toBase64(){return tE(),this._delegate.toBase64()}toUint8Array(){return eE(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
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
 */function wm(t){return $U(t,["next","error","complete"])}function $U(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class qU{enableIndexedDbPersistence(e,n){return eU(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return tU(e._delegate)}clearIndexedDbPersistence(e){return nU(e._delegate)}}class RP{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ui||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Cn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){rP(this._delegate,e,n,r)}enableNetwork(){return iU(this._delegate)}disableNetwork(){return sU(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,tP("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return rU(this._delegate)}onSnapshotsInSync(e){return NU(this._delegate,e)}get app(){if(!this._appCompat)throw new M("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Lo(this,aP(this._delegate,e))}catch(n){throw Dt(n,"collection()","Firestore.collection()")}}doc(e){try{return new hn(this,$l(this._delegate,e))}catch(n){throw Dt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Nt(this,QF(this._delegate,e))}catch(n){throw Dt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return OU(this._delegate,n=>e(new PP(this,n)))}batch(){return ct(this._delegate),new CP(new xU(this._delegate,e=>yu(this._delegate,e)))}loadBundle(e){return oU(this._delegate,e)}namedQuery(e){return aU(this._delegate,e).then(n=>n?new Nt(this,n):null)}}class Rd extends q_{constructor(e){super(),this.firestore=e}convertBytes(e){return new AP(new Gn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return hn.forKey(n,this.firestore,null)}}function WU(t){$L(t)}class PP{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Rd(e)}get(e){const n=zi(e);return this._delegate.get(n).then(r=>new Wl(this._firestore,new gr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=zi(e);return r?(G_("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=zi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=zi(e);return this._delegate.delete(n),this}}class CP{constructor(e){this._delegate=e}set(e,n,r){const i=zi(e);return r?(G_("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=zi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=zi(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class hs{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new ol(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Gl(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=hs.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new hs(e,new Rd(e),n),i.set(n,s)),s}}hs.INSTANCES=new WeakMap;class hn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Rd(e)}static forPath(e,n,r){if(e.length%2!==0)throw new M("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new hn(n,new Ne(n._delegate,r,new W(e)))}static forKey(e,n,r){return new hn(n,new Ne(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Lo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Lo(this.firestore,aP(this._delegate,e))}catch(n){throw Dt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=X(e),e instanceof Ne?lP(this._delegate,e):!1}set(e,n){n=G_("DocumentReference.set",n);try{return n?ym(this._delegate,e,n):ym(this._delegate,e)}catch(r){throw Dt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?ZI(this._delegate,e):ZI(this._delegate,e,n,...r)}catch(i){throw Dt(i,"updateDoc()","DocumentReference.update()")}}delete(){return kU(this._delegate)}onSnapshot(...e){const n=kP(e),r=bP(e,i=>new Wl(this.firestore,new gr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return SP(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=SU(this._delegate):(e==null?void 0:e.source)==="server"?n=AU(this._delegate):n=TU(this._delegate),n.then(r=>new Wl(this.firestore,new gr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new hn(this.firestore,e?this._delegate.withConverter(hs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Dt(t,e,n){return t.message=t.message.replace(e,n),t}function kP(t){for(const e of t)if(typeof e=="object"&&!wm(e))return e;return{}}function bP(t,e){var n,r;let i;return wm(t[0])?i=t[0]:wm(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Wl{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new hn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return TP(this._delegate,e._delegate)}}class Gl extends Wl{data(e){const n=this._delegate.data(e);return this._delegate._converter||qL(n!==void 0),n}}class Nt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Rd(e)}where(e,n,r){try{return new Nt(this.firestore,Dr(this._delegate,fU(e,n,r)))}catch(i){throw Dt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Nt(this.firestore,Dr(this._delegate,pU(e,n)))}catch(r){throw Dt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Nt(this.firestore,Dr(this._delegate,mU(e)))}catch(n){throw Dt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Nt(this.firestore,Dr(this._delegate,gU(e)))}catch(n){throw Dt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Nt(this.firestore,Dr(this._delegate,_U(...e)))}catch(n){throw Dt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Nt(this.firestore,Dr(this._delegate,yU(...e)))}catch(n){throw Dt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Nt(this.firestore,Dr(this._delegate,vU(...e)))}catch(n){throw Dt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Nt(this.firestore,Dr(this._delegate,wU(...e)))}catch(n){throw Dt(n,"endAt()","Query.endAt()")}}isEqual(e){return uP(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=PU(this._delegate):(e==null?void 0:e.source)==="server"?n=CU(this._delegate):n=RU(this._delegate),n.then(r=>new Im(this.firestore,new pi(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=kP(e),r=bP(e,i=>new Im(this.firestore,new pi(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return SP(this._delegate,n,r)}withConverter(e){return new Nt(this.firestore,e?this._delegate.withConverter(hs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class GU{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Gl(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Im{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Nt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Gl(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new GU(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Gl(this._firestore,r))})}isEqual(e){return TP(this._delegate,e._delegate)}}class Lo extends Nt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new hn(this.firestore,e):null}doc(e){try{return e===void 0?new hn(this.firestore,$l(this._delegate)):new hn(this.firestore,$l(this._delegate,e))}catch(n){throw Dt(n,"doc()","CollectionReference.doc()")}}add(e){return bU(this._delegate,e).then(n=>new hn(this.firestore,n))}isEqual(e){return lP(this._delegate,e._delegate)}withConverter(e){return new Lo(this.firestore,e?this._delegate.withConverter(hs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function zi(t){return ue(t,Ne)}/**
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
 */class K_{constructor(...e){this._delegate=new fi(...e)}static documentId(){return new K_(Se.keyField().canonicalString())}isEqual(e){return e=X(e),e instanceof fi?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class Li{constructor(e){this._delegate=e}static serverTimestamp(){const e=MU();return e._methodName="FieldValue.serverTimestamp",new Li(e)}static delete(){const e=LU();return e._methodName="FieldValue.delete",new Li(e)}static arrayUnion(...e){const n=FU(...e);return n._methodName="FieldValue.arrayUnion",new Li(n)}static arrayRemove(...e){const n=UU(...e);return n._methodName="FieldValue.arrayRemove",new Li(n)}static increment(e){const n=BU(e);return n._methodName="FieldValue.increment",new Li(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const KU={Firestore:RP,GeoPoint:_d,Timestamp:Re,Blob:AP,Transaction:PP,WriteBatch:CP,DocumentReference:hn,DocumentSnapshot:Wl,Query:Nt,QueryDocumentSnapshot:Gl,QuerySnapshot:Im,CollectionReference:Lo,FieldPath:K_,FieldValue:Li,setLogLevel:WU,CACHE_SIZE_UNLIMITED:XF};function HU(t,e){t.INTERNAL.registerComponent(new Rn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},KU)))}/**
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
 */function QU(t){HU(t,(e,n)=>new RP(e,n,new qU)),t.registerVersion(jU,zU)}QU(ge);/**
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
 */const NP="firebasestorage.googleapis.com",DP="storageBucket",YU=2*60*1e3,JU=10*60*1e3;/**
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
 */class ze extends At{constructor(e,n,r=0){super(Bf(e),`Firebase Storage: ${n} (${Bf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ze.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Bf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ue;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ue||(Ue={}));function Bf(t){return"storage/"+t}function H_(){const t="An unknown error occurred, please check the error payload for server response.";return new ze(Ue.UNKNOWN,t)}function XU(t){return new ze(Ue.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function ZU(t){return new ze(Ue.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function e4(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ze(Ue.UNAUTHENTICATED,t)}function t4(){return new ze(Ue.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function n4(t){return new ze(Ue.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function r4(){return new ze(Ue.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function i4(){return new ze(Ue.CANCELED,"User canceled the upload/download.")}function s4(t){return new ze(Ue.INVALID_URL,"Invalid URL '"+t+"'.")}function o4(t){return new ze(Ue.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function a4(){return new ze(Ue.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+DP+"' property when initializing the app?")}function l4(){return new ze(Ue.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function u4(){return new ze(Ue.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function c4(t){return new ze(Ue.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Em(t){return new ze(Ue.INVALID_ARGUMENT,t)}function xP(){return new ze(Ue.APP_DELETED,"The Firebase app was deleted.")}function h4(t){return new ze(Ue.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function al(t,e){return new ze(Ue.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ba(t){throw new ze(Ue.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class en{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=en.makeFromUrl(e,n)}catch{return new en(e,"")}if(r.path==="")return r;throw o4(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",v=new RegExp(`^https?://${f}/${d}/b/${i}/o${m}`,"i"),R={bucket:1,path:3},P=n===NP?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",E=new RegExp(`^https?://${P}/${i}/${b}`,"i"),w=[{regex:a,indices:u,postModify:s},{regex:v,indices:R,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<w.length;D++){const L=w[D],F=L.regex.exec(e);if(F){const I=F[L.indices.bucket];let y=F[L.indices.path];y||(y=""),r=new en(I,y),L.postModify(r);break}}if(r==null)throw s4(e);return r}}class d4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function f4(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function d(...b){c||(c=!0,e.apply(null,b))}function f(b){i=setTimeout(()=>{i=null,t(v,u())},b)}function m(){s&&clearTimeout(s)}function v(b,...E){if(c){m();return}if(b){m(),d.call(null,b,...E);return}if(u()||o){m(),d.call(null,b,...E);return}r<64&&(r*=2);let w;a===1?(a=2,w=0):w=(r+Math.random())*1e3,f(w)}let R=!1;function P(b){R||(R=!0,m(),!c&&(i!==null?(b||(a=2),clearTimeout(i),f(0)):b||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,P(!0)},n),P}function p4(t){t(!1)}/**
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
 */function m4(t){return t!==void 0}function g4(t){return typeof t=="object"&&!Array.isArray(t)}function Q_(t){return typeof t=="string"||t instanceof String}function nE(t){return Y_()&&t instanceof Blob}function Y_(){return typeof Blob<"u"}function rE(t,e,n,r){if(r<e)throw Em(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Em(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function J_(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function VP(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Hi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Hi||(Hi={}));/**
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
 */function _4(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class y4{constructor(e,n,r,i,s,o,a,u,c,d,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,R)=>{this.resolve_=v,this.reject_=R,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ac(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Hi.NO_ERROR,u=s.getStatus();if(!a||_4(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Hi.ABORT;r(!1,new ac(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new ac(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());m4(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=H_();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?xP():i4();o(u)}else{const u=r4();o(u)}};this.canceled_?n(!1,new ac(!1,null,!0)):this.backoffId_=f4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&p4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ac{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function v4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function w4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function I4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function E4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function T4(t,e,n,r,i,s,o=!0){const a=VP(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return I4(c,e),v4(c,n),w4(c,s),E4(c,r),new y4(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function S4(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function A4(...t){const e=S4();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Y_())return new Blob(t);throw new ze(Ue.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function R4(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function P4(t){if(typeof atob>"u")throw c4("base-64");return atob(t)}/**
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
 */const Un={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class jf{constructor(e,n){this.data=e,this.contentType=n||null}}function C4(t,e){switch(t){case Un.RAW:return new jf(OP(e));case Un.BASE64:case Un.BASE64URL:return new jf(LP(t,e));case Un.DATA_URL:return new jf(b4(e),N4(e))}throw H_()}function OP(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function k4(t){let e;try{e=decodeURIComponent(t)}catch{throw al(Un.DATA_URL,"Malformed data URL.")}return OP(e)}function LP(t,e){switch(t){case Un.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw al(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Un.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw al(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=P4(e)}catch(i){throw i.message.includes("polyfill")?i:al(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class MP{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw al(Un.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=D4(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function b4(t){const e=new MP(t);return e.base64?LP(Un.BASE64,e.rest):k4(e.rest)}function N4(t){return new MP(t).contentType}function D4(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Ur{constructor(e,n){let r=0,i="";nE(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(nE(this.data_)){const r=this.data_,i=R4(r,e,n);return i===null?null:new Ur(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Ur(r,!0)}}static getBlob(...e){if(Y_()){const n=e.map(r=>r instanceof Ur?r.data_:r);return new Ur(A4.apply(null,n))}else{const n=e.map(o=>Q_(o)?C4(Un.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Ur(i,!0)}}uploadData(){return this.data_}}/**
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
 */function FP(t){let e;try{e=JSON.parse(t)}catch{return null}return g4(e)?e:null}/**
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
 */function x4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function V4(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function UP(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function O4(t,e){return e}class kt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||O4}}let lc=null;function L4(t){return!Q_(t)||t.length<2?t:UP(t)}function BP(){if(lc)return lc;const t=[];t.push(new kt("bucket")),t.push(new kt("generation")),t.push(new kt("metageneration")),t.push(new kt("name","fullPath",!0));function e(s,o){return L4(o)}const n=new kt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new kt("size");return i.xform=r,t.push(i),t.push(new kt("timeCreated")),t.push(new kt("updated")),t.push(new kt("md5Hash",null,!0)),t.push(new kt("cacheControl",null,!0)),t.push(new kt("contentDisposition",null,!0)),t.push(new kt("contentEncoding",null,!0)),t.push(new kt("contentLanguage",null,!0)),t.push(new kt("contentType",null,!0)),t.push(new kt("metadata","customMetadata",!0)),lc=t,lc}function M4(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new en(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function F4(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return M4(r,t),r}function jP(t,e,n){const r=FP(e);return r===null?null:F4(t,r,n)}function U4(t,e,n,r){const i=FP(e);if(i===null||!Q_(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,f=t.fullPath,m="/b/"+o(d)+"/o/"+o(f),v=J_(m,n,r),R=VP({alt:"media",token:c});return v+R})[0]}function B4(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class zP{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function $P(t){if(!t)throw H_()}function j4(t,e){function n(r,i){const s=jP(t,i,e);return $P(s!==null),s}return n}function z4(t,e){function n(r,i){const s=jP(t,i,e);return $P(s!==null),U4(s,i,t.host,t._protocol)}return n}function qP(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=t4():i=e4():n.getStatus()===402?i=ZU(t.bucket):n.getStatus()===403?i=n4(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function $4(t){const e=qP(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=XU(t.path)),s.serverResponse=i.serverResponse,s}return n}function q4(t,e,n){const r=e.fullServerUrl(),i=J_(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new zP(i,s,z4(t,n),o);return a.errorHandler=$4(e),a}function W4(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function G4(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=W4(null,e)),r}function K4(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let w="";for(let D=0;D<2;D++)w=w+Math.random().toString().slice(2);return w}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=G4(e,r,i),d=B4(c,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",v=Ur.getBlob(f,r,m);if(v===null)throw l4();const R={name:c.fullPath},P=J_(s,t.host,t._protocol),b="POST",E=t.maxUploadRetryTime,_=new zP(P,b,j4(t,n),E);return _.urlParams=R,_.headers=o,_.body=v.uploadData(),_.errorHandler=qP(e),_}class H4{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Hi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Hi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Hi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ba("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ba("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ba("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ba("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ba("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Q4 extends H4{initXhr(){this.xhr_.responseType="text"}}function WP(){return new Q4}/**
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
 */class ds{constructor(e,n){this._service=e,n instanceof en?this._location=n:this._location=en.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ds(e,n)}get root(){const e=new en(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return UP(this._location.path)}get storage(){return this._service}get parent(){const e=x4(this._location.path);if(e===null)return null;const n=new en(this._location.bucket,e);return new ds(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw h4(e)}}function Y4(t,e,n){t._throwIfRoot("uploadBytes");const r=K4(t.storage,t._location,BP(),new Ur(e,!0),n);return t.storage.makeRequestWithTokens(r,WP).then(i=>({metadata:i,ref:t}))}function J4(t){t._throwIfRoot("getDownloadURL");const e=q4(t.storage,t._location,BP());return t.storage.makeRequestWithTokens(e,WP).then(n=>{if(n===null)throw u4();return n})}function X4(t,e){const n=V4(t._location.path,e),r=new en(t._location.bucket,n);return new ds(t.storage,r)}/**
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
 */function Z4(t){return/^[A-Za-z]+:\/\//.test(t)}function eB(t,e){return new ds(t,e)}function GP(t,e){if(t instanceof X_){const n=t;if(n._bucket==null)throw a4();const r=new ds(n,n._bucket);return e!=null?GP(r,e):r}else return e!==void 0?X4(t,e):t}function tB(t,e){if(e&&Z4(e)){if(t instanceof X_)return eB(t,e);throw Em("To use ref(service, url), the first argument must be a Storage instance.")}else return GP(t,e)}function iE(t,e){const n=e==null?void 0:e[DP];return n==null?null:en.makeFromBucketSpec(n,t)}class X_{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=NP,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=YU,this._maxUploadRetryTime=JU,this._requests=new Set,i!=null?this._bucket=en.makeFromBucketSpec(i,this._host):this._bucket=iE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=en.makeFromBucketSpec(this._url,e):this._bucket=iE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){rE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){rE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ds(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new d4(xP());{const o=T4(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const sE="@firebase/storage",oE="0.12.5";/**
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
 */const nB="storage";function rB(t,e,n){return t=X(t),Y4(t,e,n)}function iB(t){return t=X(t),J4(t)}function sB(t,e){return t=X(t),tB(t,e)}function oB(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new X_(n,r,i,e,yr)}function aB(){fr(new Rn(nB,oB,"PUBLIC").setMultipleInstances(!0)),nn(sE,oE,""),nn(sE,oE,"esm2017")}aB();const lB={apiKey:"AIzaSyCknnv2K7Zlzh-cxqbAb1lDuoFB79JNvoY",authDomain:"nationsglory-62812.firebaseapp.com",projectId:"nationsglory-62812",storageBucket:"nationsglory-62812.appspot.com",messagingSenderId:"1062049263686",appId:"1:1062049263686:web:42dc7925af2b4f1da69a47",measurementId:"G-156LHMY0NL"};ge.apps.length||ge.initializeApp(lB);const Pd=()=>q.jsx("nav",{children:q.jsxs("ul",{children:[q.jsx("li",{children:q.jsx(Zu,{to:"/nationglorycomu/",children:"Accueil"})}),q.jsx("li",{children:q.jsx(Zu,{to:"/nationglorycomu/AuthPage",children:"Connexion"})}),q.jsx("li",{children:q.jsx(Zu,{to:"/nationglorycomu/logout",children:"Déconnexion"})}),q.jsx("li",{children:q.jsx(Zu,{to:"/nationglorycomu/ProfilePage",children:"Profil"})})]})}),uB=()=>{const[t,e]=z.useState("");z.useEffect(()=>{const r=ge.auth().onAuthStateChanged(i=>{e(i||null)});return()=>r()},[]);const n=t?t.displayName.split(" ")[0]:"";return q.jsx("div",{children:q.jsxs("div",{children:[q.jsxs("h1",{children:["Welcome to the Home Page! ",n]}),q.jsx(Pd,{})]})})},cB=()=>{const[t,e]=z.useState(""),[n,r]=z.useState(""),[i,s]=z.useState(""),[o,a]=z.useState(""),[u,c]=z.useState(""),[d,f]=z.useState(null),[m,v]=z.useState(""),[R,P]=z.useState(!1),b=async()=>{if(v(""),n!==i){v("Les mots de passe ne correspondent pas.");return}P(!0);try{const _=await ge.auth().createUserWithEmailAndPassword(t,n);if(d){const D=ge.storage().ref().child(`profiles/${_.user.uid}`);await D.put(d);const L=await D.getDownloadURL();await _.user.updateProfile({displayName:`${o} ${u}`,photoURL:L}),await ge.firestore().collection("users").doc(_.user.uid).set({firstName:o,lastName:u,email:t,photoURL:L}),console.log("Profil utilisateur mis à jour avec succès.")}else await _.user.updateProfile({displayName:`${o} ${u}`}),await ge.firestore().collection("users").doc(_.user.uid).set({firstName:o,lastName:u,email:t});console.log("Inscription réussie !")}catch(_){v(_.message),console.error(_.message)}finally{P(!1)}},E=async()=>{P(!0);try{const _=new ge.auth.GoogleAuthProvider,w=await ge.auth().signInWithPopup(_),D=w.user.email,{given_name:L,family_name:F}=w.additionalUserInfo.profile,I=w.user.photoURL||"https://firebasestorage.googleapis.com/v0/b/nationsglory-62812.appspot.com/o/Prendre%20sa%20sant%C3%A9%20en%20main%20n%E2%80%99a%20jamais%20%C3%A9t%C3%A9%20aussi%20simple.jpg?alt=media&token=dc085ed1-9a30-4dc8-92cc-ad7eaa8a840c";await ge.firestore().collection("users").doc(w.user.uid).set({firstName:L,lastName:F,email:D,photoURL:I}),console.log("Inscription avec Google réussie !")}catch(_){v(_.message),console.error(_.message)}finally{P(!1)}};return q.jsxs("div",{children:[q.jsx("h2",{children:"Inscription"}),m&&q.jsx("p",{style:{color:"red"},children:m}),q.jsx("input",{type:"text",placeholder:"Prénom",value:o,onChange:_=>a(_.target.value)}),q.jsx("input",{type:"text",placeholder:"Nom",value:u,onChange:_=>c(_.target.value)}),q.jsx("input",{type:"email",placeholder:"Adresse email",value:t,onChange:_=>e(_.target.value)}),q.jsx("input",{type:"password",placeholder:"Mot de passe",value:n,onChange:_=>r(_.target.value)}),q.jsx("input",{type:"password",placeholder:"Confirmer le mot de passe",value:i,onChange:_=>s(_.target.value)}),q.jsx("input",{type:"file",accept:"image/*",onChange:_=>f(_.target.files[0])}),q.jsx("button",{onClick:b,disabled:R,children:"S'inscrire"}),q.jsx("button",{onClick:E,disabled:R,children:"S'inscrire avec Google"})]})},hB=()=>{const[t,e]=z.useState(""),[n,r]=z.useState(""),[i,s]=z.useState(""),[o,a]=z.useState(!1),u=async()=>{s(""),a(!0);try{await ge.auth().signInWithEmailAndPassword(t,n),console.log("Connexion réussie !")}catch(d){s(d.message),console.error(d.message)}finally{a(!1)}},c=async()=>{s(""),a(!0);try{const d=new ge.auth.GoogleAuthProvider;await ge.auth().signInWithPopup(d),console.log("Connexion réussie avec Google !")}catch(d){s(d.message),console.error(d.message)}finally{a(!1)}};return q.jsxs("div",{children:[q.jsx("h2",{children:"Connexion"}),i&&q.jsx("p",{style:{color:"red"},children:i}),q.jsx("input",{type:"email",placeholder:"Adresse email",value:t,onChange:d=>e(d.target.value)}),q.jsx("input",{type:"password",placeholder:"Mot de passe",value:n,onChange:d=>r(d.target.value)}),q.jsx("button",{onClick:u,disabled:o,children:"Se connecter"}),q.jsx("button",{onClick:c,disabled:o,children:"Se connecter avec Google"})]})},dB=()=>{const[t,e]=z.useState(!0);return q.jsxs("div",{children:[q.jsx(Pd,{}),t?q.jsx(hB,{}):q.jsx(cB,{}),q.jsx("button",{onClick:()=>e(!t),children:t?"S'inscrire":"Se connecter"})]})},fB=()=>{const t=async()=>{try{await ge.auth().signOut(),console.log("Déconnexion réussie !")}catch(e){console.error(e.message)}};return q.jsxs("div",{children:[q.jsx(Pd,{}),q.jsx("button",{onClick:t,children:"Se déconnecter"})]})};let uc;const pB=new Uint8Array(16);function mB(){if(!uc&&(uc=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!uc))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return uc(pB)}const dt=[];for(let t=0;t<256;++t)dt.push((t+256).toString(16).slice(1));function gB(t,e=0){return dt[t[e+0]]+dt[t[e+1]]+dt[t[e+2]]+dt[t[e+3]]+"-"+dt[t[e+4]]+dt[t[e+5]]+"-"+dt[t[e+6]]+dt[t[e+7]]+"-"+dt[t[e+8]]+dt[t[e+9]]+"-"+dt[t[e+10]]+dt[t[e+11]]+dt[t[e+12]]+dt[t[e+13]]+dt[t[e+14]]+dt[t[e+15]]}const _B=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),aE={randomUUID:_B};function yB(t,e,n){if(aE.randomUUID&&!e&&!t)return aE.randomUUID();t=t||{};const r=t.random||(t.rng||mB)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,gB(r)}const vB=()=>{const[t,e]=z.useState(null),[n,r]=z.useState(""),[i,s]=z.useState(""),[o,a]=z.useState("");z.useState("");const[u,c]=z.useState(""),[d,f]=z.useState(""),[m,v]=z.useState(null),[R,P]=z.useState(!1),[b,E]=z.useState(null),[_,w]=z.useState(null),D=b0();z.useEffect(()=>{const C=ge.auth().onAuthStateChanged(S=>{S?(e(S),P(S.providerData.some(tt=>tt.providerId==="google.com"))):(e(""),D("/nationglorycomu/AuthPage"))});return()=>C()},[]);const L=async()=>{try{const C=new ge.auth.GoogleAuthProvider;await ge.auth().currentUser.linkWithPopup(C),console.log("Compte Google lié avec succès !"),P(!0),location.reload()}catch(C){v(C.message),console.error(C.message)}},F=async()=>{try{await ge.auth().currentUser.updateEmail(n),console.log("Adresse email mise à jour avec succès !"),location.reload()}catch(C){v(C.message),console.error(C.message)}},I=async()=>{try{if(i!==o){v("les mots de passe doivent correspondre.");return}await ge.auth().currentUser.updatePassword(i),console.log("Mot de passe mis à jour avec succès !"),location.reload()}catch(C){v(C.message),console.error(C.message)}},y=async()=>{try{await ge.auth().currentUser.updateProfile({displayName:`${u} ${d}`}),console.log("Nom mis à jour avec succès !"),location.reload()}catch(C){v(C.message),console.error(C.message)}},T=C=>{w(C.target.files[0])},A=async()=>{try{if(_!==null){const C=sB(ge.storage(),`profiles/${yB()}`),S=await rB(C,_);console.log(S);const tt=await iB(S.ref);E(tt);const Kn=ZO().currentUser;if(Kn){await bS(Kn,{photoURL:tt});const _n=ZF();await ym($l(_n,"users",Kn.uid),{photoURL:tt},{merge:!0}),location.reload()}else console.error("Utilisateur non connecté")}}catch(C){console.error("Erreur lors du téléchargement de l'image de profil :",C)}};return q.jsxs("div",{children:[q.jsx(Pd,{}),q.jsx("h1",{children:"Profil de l'utilisateur"}),m&&q.jsx("p",{style:{color:"red"},children:m}),t?q.jsxs("div",{children:[q.jsx("img",{src:t.photoURL||"https://firebasestorage.googleapis.com/v0/b/nationsglory-62812.appspot.com/o/Prendre%20sa%20sant%C3%A9%20en%20main%20n%E2%80%99a%20jamais%20%C3%A9t%C3%A9%20aussi%20simple.jpg?alt=media&token=dc085ed1-9a30-4dc8-92cc-ad7eaa8a840c",alt:"Image de profil"}),q.jsxs("p",{children:["Prénom: ",t.displayName.split(" ")[0]]}),q.jsxs("p",{children:["Nom: ",t.displayName.split(" ")[1]]}),q.jsxs("p",{children:["Email: ",t.email]}),R?q.jsx("p",{children:"Connecté avec Google"}):q.jsx("button",{onClick:L,children:"Lier un compte Google"}),q.jsxs("div",{children:[q.jsx("h2",{children:"Modifier l'adresse email"}),q.jsx("input",{type:"email",placeholder:"Nouvelle adresse email",value:n,onChange:C=>r(C.target.value)}),q.jsx("button",{onClick:F,children:"Mettre à jour l'email"})]}),q.jsxs("div",{children:[q.jsx("h2",{children:"Modifier le mot de passe"}),q.jsx("input",{type:"password",placeholder:"Nouveau mot de passe",value:i,onChange:C=>s(C.target.value)}),q.jsx("input",{type:"password",placeholder:"Confirmer le nouveau mot de passe",value:o,onChange:C=>a(C.target.value)}),q.jsx("button",{onClick:I,children:"Mettre à jour le mot de passe"})]}),q.jsxs("div",{children:[q.jsx("h2",{children:"Modifier le nom"}),q.jsx("input",{type:"text",placeholder:"Nouveau prénom",value:u,onChange:C=>c(C.target.value)}),q.jsx("input",{type:"text",placeholder:"Nouveau nom de famille",value:d,onChange:C=>f(C.target.value)}),q.jsx("button",{onClick:y,children:"Mettre à jour le nom"})]}),q.jsxs("div",{children:[q.jsx("h2",{children:"Modifier l'image de profil"}),q.jsx("input",{type:"file",onChange:T}),q.jsx("button",{onClick:A,children:"Télécharger l'image de profil"})]})]}):q.jsx("p",{children:"Veuillez vous connecter pour accéder à votre profil."})]})};I0(document.getElementById("root")).render(q.jsx(yE.StrictMode,{children:q.jsx(Kb,{children:q.jsxs(Bb,{children:[q.jsx(Oa,{path:"/nationglorycomu/",element:q.jsx(uB,{})}),q.jsx(Oa,{path:"/nationglorycomu/AuthPage",element:q.jsx(dB,{})}),q.jsx(Oa,{path:"/nationglorycomu/logout",element:q.jsx(fB,{})}),q.jsx(Oa,{path:"/nationglorycomu/ProfilePage",element:q.jsx(vB,{})})]})})}));
