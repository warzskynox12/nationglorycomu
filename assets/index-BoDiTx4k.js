function ok(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ak(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var NE={exports:{}},Fh={},DE={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tu=Symbol.for("react.element"),lk=Symbol.for("react.portal"),uk=Symbol.for("react.fragment"),ck=Symbol.for("react.strict_mode"),hk=Symbol.for("react.profiler"),dk=Symbol.for("react.provider"),fk=Symbol.for("react.context"),pk=Symbol.for("react.forward_ref"),mk=Symbol.for("react.suspense"),gk=Symbol.for("react.memo"),_k=Symbol.for("react.lazy"),_v=Symbol.iterator;function yk(t){return t===null||typeof t!="object"?null:(t=_v&&t[_v]||t["@@iterator"],typeof t=="function"?t:null)}var OE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},VE=Object.assign,LE={};function Wo(t,e,n){this.props=t,this.context=e,this.refs=LE,this.updater=n||OE}Wo.prototype.isReactComponent={};Wo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Wo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ME(){}ME.prototype=Wo.prototype;function Bm(t,e,n){this.props=t,this.context=e,this.refs=LE,this.updater=n||OE}var jm=Bm.prototype=new ME;jm.constructor=Bm;VE(jm,Wo.prototype);jm.isPureReactComponent=!0;var yv=Array.isArray,FE=Object.prototype.hasOwnProperty,zm={current:null},UE={key:!0,ref:!0,__self:!0,__source:!0};function BE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)FE.call(e,r)&&!UE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:tu,type:t,key:s,ref:o,props:i,_owner:zm.current}}function vk(t,e){return{$$typeof:tu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $m(t){return typeof t=="object"&&t!==null&&t.$$typeof===tu}function wk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vv=/\/+/g;function hf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wk(""+t.key):e.toString(36)}function vc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case tu:case lk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+hf(o,0):r,yv(i)?(n="",t!=null&&(n=t.replace(vv,"$&/")+"/"),vc(i,e,n,"",function(c){return c})):i!=null&&($m(i)&&(i=vk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(vv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",yv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+hf(s,a);o+=vc(s,e,n,l,i)}else if(l=yk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+hf(s,a++),o+=vc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Wu(t,e,n){if(t==null)return t;var r=[],i=0;return vc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Ik(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ut={current:null},wc={transition:null},Ek={ReactCurrentDispatcher:Ut,ReactCurrentBatchConfig:wc,ReactCurrentOwner:zm};function jE(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:Wu,forEach:function(t,e,n){Wu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Wu(t,function(){e++}),e},toArray:function(t){return Wu(t,function(e){return e})||[]},only:function(t){if(!$m(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=Wo;ie.Fragment=uk;ie.Profiler=hk;ie.PureComponent=Bm;ie.StrictMode=ck;ie.Suspense=mk;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ek;ie.act=jE;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=VE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=zm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)FE.call(e,l)&&!UE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:tu,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:fk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:dk,_context:t},t.Consumer=t};ie.createElement=BE;ie.createFactory=function(t){var e=BE.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:pk,render:t}};ie.isValidElement=$m;ie.lazy=function(t){return{$$typeof:_k,_payload:{_status:-1,_result:t},_init:Ik}};ie.memo=function(t,e){return{$$typeof:gk,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=wc.transition;wc.transition={};try{t()}finally{wc.transition=e}};ie.unstable_act=jE;ie.useCallback=function(t,e){return Ut.current.useCallback(t,e)};ie.useContext=function(t){return Ut.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return Ut.current.useDeferredValue(t)};ie.useEffect=function(t,e){return Ut.current.useEffect(t,e)};ie.useId=function(){return Ut.current.useId()};ie.useImperativeHandle=function(t,e,n){return Ut.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return Ut.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return Ut.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return Ut.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return Ut.current.useReducer(t,e,n)};ie.useRef=function(t){return Ut.current.useRef(t)};ie.useState=function(t){return Ut.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return Ut.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return Ut.current.useTransition()};ie.version="18.3.1";DE.exports=ie;var z=DE.exports;const zE=ak(z),Tk=ok({__proto__:null,default:zE},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sk=z,Rk=Symbol.for("react.element"),Ak=Symbol.for("react.fragment"),Pk=Object.prototype.hasOwnProperty,kk=Sk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ck={key:!0,ref:!0,__self:!0,__source:!0};function $E(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Pk.call(e,r)&&!Ck.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Rk,type:t,key:s,ref:o,props:i,_owner:kk.current}}Fh.Fragment=Ak;Fh.jsx=$E;Fh.jsxs=$E;NE.exports=Fh;var $=NE.exports,rp={},qE={exports:{}},an={},WE={exports:{}},GE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,Z){var ne=H.length;H.push(Z);e:for(;0<ne;){var Ce=ne-1>>>1,me=H[Ce];if(0<i(me,Z))H[Ce]=Z,H[ne]=me,ne=Ce;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var Z=H[0],ne=H.pop();if(ne!==Z){H[0]=ne;e:for(var Ce=0,me=H.length,$e=me>>>1;Ce<$e;){var Xn=2*(Ce+1)-1,Zn=H[Xn],er=Xn+1,tr=H[er];if(0>i(Zn,ne))er<me&&0>i(tr,Zn)?(H[Ce]=tr,H[er]=ne,Ce=er):(H[Ce]=Zn,H[Xn]=ne,Ce=Xn);else if(er<me&&0>i(tr,ne))H[Ce]=tr,H[er]=ne,Ce=er;else break e}}return Z}function i(H,Z){var ne=H.sortIndex-Z.sortIndex;return ne!==0?ne:H.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,f=null,m=3,v=!1,A=!1,P=!1,C=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(H){for(var Z=n(c);Z!==null;){if(Z.callback===null)r(c);else if(Z.startTime<=H)r(c),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=n(c)}}function N(H){if(P=!1,w(H),!A)if(n(l)!==null)A=!0,Jn(L);else{var Z=n(c);Z!==null&&wn(N,Z.startTime-H)}}function L(H,Z){A=!1,P&&(P=!1,E(y),y=-1),v=!0;var ne=m;try{for(w(Z),f=n(l);f!==null&&(!(f.expirationTime>Z)||H&&!b());){var Ce=f.callback;if(typeof Ce=="function"){f.callback=null,m=f.priorityLevel;var me=Ce(f.expirationTime<=Z);Z=t.unstable_now(),typeof me=="function"?f.callback=me:f===n(l)&&r(l),w(Z)}else r(l);f=n(l)}if(f!==null)var $e=!0;else{var Xn=n(c);Xn!==null&&wn(N,Xn.startTime-Z),$e=!1}return $e}finally{f=null,m=ne,v=!1}}var M=!1,I=null,y=-1,T=5,R=-1;function b(){return!(t.unstable_now()-R<T)}function k(){if(I!==null){var H=t.unstable_now();R=H;var Z=!0;try{Z=I(!0,H)}finally{Z?S():(M=!1,I=null)}}else M=!1}var S;if(typeof _=="function")S=function(){_(k)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,br=tt.port2;tt.port1.onmessage=k,S=function(){br.postMessage(null)}}else S=function(){C(k,0)};function Jn(H){I=H,M||(M=!0,S())}function wn(H,Z){y=C(function(){H(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){A||v||(A=!0,Jn(L))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(H){switch(m){case 1:case 2:case 3:var Z=3;break;default:Z=m}var ne=m;m=Z;try{return H()}finally{m=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,Z){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ne=m;m=H;try{return Z()}finally{m=ne}},t.unstable_scheduleCallback=function(H,Z,ne){var Ce=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?Ce+ne:Ce):ne=Ce,H){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=ne+me,H={id:h++,callback:Z,priorityLevel:H,startTime:ne,expirationTime:me,sortIndex:-1},ne>Ce?(H.sortIndex=ne,e(c,H),n(l)===null&&H===n(c)&&(P?(E(y),y=-1):P=!0,wn(N,ne-Ce))):(H.sortIndex=me,e(l,H),A||v||(A=!0,Jn(L))),H},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(H){var Z=m;return function(){var ne=m;m=Z;try{return H.apply(this,arguments)}finally{m=ne}}}})(GE);WE.exports=GE;var bk=WE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xk=z,sn=bk;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var HE=new Set,gl={};function vs(t,e){vo(t,e),vo(t+"Capture",e)}function vo(t,e){for(gl[t]=e,t=0;t<e.length;t++)HE.add(e[t])}var pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ip=Object.prototype.hasOwnProperty,Nk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wv={},Iv={};function Dk(t){return ip.call(Iv,t)?!0:ip.call(wv,t)?!1:Nk.test(t)?Iv[t]=!0:(wv[t]=!0,!1)}function Ok(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Vk(t,e,n,r){if(e===null||typeof e>"u"||Ok(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Bt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var _t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_t[t]=new Bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];_t[e]=new Bt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){_t[t]=new Bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_t[t]=new Bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_t[t]=new Bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){_t[t]=new Bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){_t[t]=new Bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){_t[t]=new Bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){_t[t]=new Bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var qm=/[\-:]([a-z])/g;function Wm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(qm,Wm);_t[e]=new Bt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(qm,Wm);_t[e]=new Bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(qm,Wm);_t[e]=new Bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){_t[t]=new Bt(t,1,!1,t.toLowerCase(),null,!1,!1)});_t.xlinkHref=new Bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){_t[t]=new Bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gm(t,e,n,r){var i=_t.hasOwnProperty(e)?_t[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Vk(e,n,i,r)&&(n=null),r||i===null?Dk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Er=xk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gu=Symbol.for("react.element"),Gs=Symbol.for("react.portal"),Hs=Symbol.for("react.fragment"),Hm=Symbol.for("react.strict_mode"),sp=Symbol.for("react.profiler"),KE=Symbol.for("react.provider"),QE=Symbol.for("react.context"),Km=Symbol.for("react.forward_ref"),op=Symbol.for("react.suspense"),ap=Symbol.for("react.suspense_list"),Qm=Symbol.for("react.memo"),Ur=Symbol.for("react.lazy"),YE=Symbol.for("react.offscreen"),Ev=Symbol.iterator;function Ta(t){return t===null||typeof t!="object"?null:(t=Ev&&t[Ev]||t["@@iterator"],typeof t=="function"?t:null)}var De=Object.assign,df;function Ba(t){if(df===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);df=e&&e[1]||""}return`
`+df+t}var ff=!1;function pf(t,e){if(!t||ff)return"";ff=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ff=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ba(t):""}function Lk(t){switch(t.tag){case 5:return Ba(t.type);case 16:return Ba("Lazy");case 13:return Ba("Suspense");case 19:return Ba("SuspenseList");case 0:case 2:case 15:return t=pf(t.type,!1),t;case 11:return t=pf(t.type.render,!1),t;case 1:return t=pf(t.type,!0),t;default:return""}}function lp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hs:return"Fragment";case Gs:return"Portal";case sp:return"Profiler";case Hm:return"StrictMode";case op:return"Suspense";case ap:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case QE:return(t.displayName||"Context")+".Consumer";case KE:return(t._context.displayName||"Context")+".Provider";case Km:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qm:return e=t.displayName||null,e!==null?e:lp(t.type)||"Memo";case Ur:e=t._payload,t=t._init;try{return lp(t(e))}catch{}}return null}function Mk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lp(e);case 8:return e===Hm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ai(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function JE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Fk(t){var e=JE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Hu(t){t._valueTracker||(t._valueTracker=Fk(t))}function XE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=JE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Wc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function up(t,e){var n=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Tv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ai(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ZE(t,e){e=e.checked,e!=null&&Gm(t,"checked",e,!1)}function cp(t,e){ZE(t,e);var n=ai(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?hp(t,e.type,n):e.hasOwnProperty("defaultValue")&&hp(t,e.type,ai(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Sv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function hp(t,e,n){(e!=="number"||Wc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ja=Array.isArray;function so(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ai(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function dp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Rv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(ja(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ai(n)}}function eT(t,e){var n=ai(e.value),r=ai(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Av(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function tT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?tT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ku,nT=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ku=Ku||document.createElement("div"),Ku.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ku.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function _l(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ja={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uk=["Webkit","ms","Moz","O"];Object.keys(Ja).forEach(function(t){Uk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ja[e]=Ja[t]})});function rT(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ja.hasOwnProperty(t)&&Ja[t]?(""+e).trim():e+"px"}function iT(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=rT(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Bk=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pp(t,e){if(e){if(Bk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function mp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gp=null;function Ym(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _p=null,oo=null,ao=null;function Pv(t){if(t=iu(t)){if(typeof _p!="function")throw Error(B(280));var e=t.stateNode;e&&(e=$h(e),_p(t.stateNode,t.type,e))}}function sT(t){oo?ao?ao.push(t):ao=[t]:oo=t}function oT(){if(oo){var t=oo,e=ao;if(ao=oo=null,Pv(t),e)for(t=0;t<e.length;t++)Pv(e[t])}}function aT(t,e){return t(e)}function lT(){}var mf=!1;function uT(t,e,n){if(mf)return t(e,n);mf=!0;try{return aT(t,e,n)}finally{mf=!1,(oo!==null||ao!==null)&&(lT(),oT())}}function yl(t,e){var n=t.stateNode;if(n===null)return null;var r=$h(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var yp=!1;if(pr)try{var Sa={};Object.defineProperty(Sa,"passive",{get:function(){yp=!0}}),window.addEventListener("test",Sa,Sa),window.removeEventListener("test",Sa,Sa)}catch{yp=!1}function jk(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Xa=!1,Gc=null,Hc=!1,vp=null,zk={onError:function(t){Xa=!0,Gc=t}};function $k(t,e,n,r,i,s,o,a,l){Xa=!1,Gc=null,jk.apply(zk,arguments)}function qk(t,e,n,r,i,s,o,a,l){if($k.apply(this,arguments),Xa){if(Xa){var c=Gc;Xa=!1,Gc=null}else throw Error(B(198));Hc||(Hc=!0,vp=c)}}function ws(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function cT(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function kv(t){if(ws(t)!==t)throw Error(B(188))}function Wk(t){var e=t.alternate;if(!e){if(e=ws(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return kv(i),t;if(s===r)return kv(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function hT(t){return t=Wk(t),t!==null?dT(t):null}function dT(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=dT(t);if(e!==null)return e;t=t.sibling}return null}var fT=sn.unstable_scheduleCallback,Cv=sn.unstable_cancelCallback,Gk=sn.unstable_shouldYield,Hk=sn.unstable_requestPaint,qe=sn.unstable_now,Kk=sn.unstable_getCurrentPriorityLevel,Jm=sn.unstable_ImmediatePriority,pT=sn.unstable_UserBlockingPriority,Kc=sn.unstable_NormalPriority,Qk=sn.unstable_LowPriority,mT=sn.unstable_IdlePriority,Uh=null,$n=null;function Yk(t){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(Uh,t,void 0,(t.current.flags&128)===128)}catch{}}var Pn=Math.clz32?Math.clz32:Zk,Jk=Math.log,Xk=Math.LN2;function Zk(t){return t>>>=0,t===0?32:31-(Jk(t)/Xk|0)|0}var Qu=64,Yu=4194304;function za(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=za(a):(s&=o,s!==0&&(r=za(s)))}else o=n&~i,o!==0?r=za(o):s!==0&&(r=za(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Pn(e),i=1<<n,r|=t[n],e&=~i;return r}function eC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Pn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=eC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function wp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gT(){var t=Qu;return Qu<<=1,!(Qu&4194240)&&(Qu=64),t}function gf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function nu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Pn(e),t[e]=n}function nC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Pn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Xm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Pn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function _T(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yT,Zm,vT,wT,IT,Ip=!1,Ju=[],Yr=null,Jr=null,Xr=null,vl=new Map,wl=new Map,jr=[],rC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bv(t,e){switch(t){case"focusin":case"focusout":Yr=null;break;case"dragenter":case"dragleave":Jr=null;break;case"mouseover":case"mouseout":Xr=null;break;case"pointerover":case"pointerout":vl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wl.delete(e.pointerId)}}function Ra(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=iu(e),e!==null&&Zm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function iC(t,e,n,r,i){switch(e){case"focusin":return Yr=Ra(Yr,t,e,n,r,i),!0;case"dragenter":return Jr=Ra(Jr,t,e,n,r,i),!0;case"mouseover":return Xr=Ra(Xr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return vl.set(s,Ra(vl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,wl.set(s,Ra(wl.get(s)||null,t,e,n,r,i)),!0}return!1}function ET(t){var e=$i(t.target);if(e!==null){var n=ws(e);if(n!==null){if(e=n.tag,e===13){if(e=cT(n),e!==null){t.blockedOn=e,IT(t.priority,function(){vT(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ic(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ep(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);gp=r,n.target.dispatchEvent(r),gp=null}else return e=iu(n),e!==null&&Zm(e),t.blockedOn=n,!1;e.shift()}return!0}function xv(t,e,n){Ic(t)&&n.delete(e)}function sC(){Ip=!1,Yr!==null&&Ic(Yr)&&(Yr=null),Jr!==null&&Ic(Jr)&&(Jr=null),Xr!==null&&Ic(Xr)&&(Xr=null),vl.forEach(xv),wl.forEach(xv)}function Aa(t,e){t.blockedOn===e&&(t.blockedOn=null,Ip||(Ip=!0,sn.unstable_scheduleCallback(sn.unstable_NormalPriority,sC)))}function Il(t){function e(i){return Aa(i,t)}if(0<Ju.length){Aa(Ju[0],t);for(var n=1;n<Ju.length;n++){var r=Ju[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Yr!==null&&Aa(Yr,t),Jr!==null&&Aa(Jr,t),Xr!==null&&Aa(Xr,t),vl.forEach(e),wl.forEach(e),n=0;n<jr.length;n++)r=jr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<jr.length&&(n=jr[0],n.blockedOn===null);)ET(n),n.blockedOn===null&&jr.shift()}var lo=Er.ReactCurrentBatchConfig,Yc=!0;function oC(t,e,n,r){var i=de,s=lo.transition;lo.transition=null;try{de=1,eg(t,e,n,r)}finally{de=i,lo.transition=s}}function aC(t,e,n,r){var i=de,s=lo.transition;lo.transition=null;try{de=4,eg(t,e,n,r)}finally{de=i,lo.transition=s}}function eg(t,e,n,r){if(Yc){var i=Ep(t,e,n,r);if(i===null)Af(t,e,r,Jc,n),bv(t,r);else if(iC(i,t,e,n,r))r.stopPropagation();else if(bv(t,r),e&4&&-1<rC.indexOf(t)){for(;i!==null;){var s=iu(i);if(s!==null&&yT(s),s=Ep(t,e,n,r),s===null&&Af(t,e,r,Jc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Af(t,e,r,null,n)}}var Jc=null;function Ep(t,e,n,r){if(Jc=null,t=Ym(r),t=$i(t),t!==null)if(e=ws(t),e===null)t=null;else if(n=e.tag,n===13){if(t=cT(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Jc=t,null}function TT(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kk()){case Jm:return 1;case pT:return 4;case Kc:case Qk:return 16;case mT:return 536870912;default:return 16}default:return 16}}var Wr=null,tg=null,Ec=null;function ST(){if(Ec)return Ec;var t,e=tg,n=e.length,r,i="value"in Wr?Wr.value:Wr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ec=i.slice(t,1<r?1-r:void 0)}function Tc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xu(){return!0}function Nv(){return!1}function ln(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xu:Nv,this.isPropagationStopped=Nv,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xu)},persist:function(){},isPersistent:Xu}),e}var Go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ng=ln(Go),ru=De({},Go,{view:0,detail:0}),lC=ln(ru),_f,yf,Pa,Bh=De({},ru,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Pa&&(Pa&&t.type==="mousemove"?(_f=t.screenX-Pa.screenX,yf=t.screenY-Pa.screenY):yf=_f=0,Pa=t),_f)},movementY:function(t){return"movementY"in t?t.movementY:yf}}),Dv=ln(Bh),uC=De({},Bh,{dataTransfer:0}),cC=ln(uC),hC=De({},ru,{relatedTarget:0}),vf=ln(hC),dC=De({},Go,{animationName:0,elapsedTime:0,pseudoElement:0}),fC=ln(dC),pC=De({},Go,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mC=ln(pC),gC=De({},Go,{data:0}),Ov=ln(gC),_C={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=vC[t])?!!e[t]:!1}function rg(){return wC}var IC=De({},ru,{key:function(t){if(t.key){var e=_C[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rg,charCode:function(t){return t.type==="keypress"?Tc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),EC=ln(IC),TC=De({},Bh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vv=ln(TC),SC=De({},ru,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rg}),RC=ln(SC),AC=De({},Go,{propertyName:0,elapsedTime:0,pseudoElement:0}),PC=ln(AC),kC=De({},Bh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),CC=ln(kC),bC=[9,13,27,32],ig=pr&&"CompositionEvent"in window,Za=null;pr&&"documentMode"in document&&(Za=document.documentMode);var xC=pr&&"TextEvent"in window&&!Za,RT=pr&&(!ig||Za&&8<Za&&11>=Za),Lv=" ",Mv=!1;function AT(t,e){switch(t){case"keyup":return bC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function PT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ks=!1;function NC(t,e){switch(t){case"compositionend":return PT(e);case"keypress":return e.which!==32?null:(Mv=!0,Lv);case"textInput":return t=e.data,t===Lv&&Mv?null:t;default:return null}}function DC(t,e){if(Ks)return t==="compositionend"||!ig&&AT(t,e)?(t=ST(),Ec=tg=Wr=null,Ks=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return RT&&e.locale!=="ko"?null:e.data;default:return null}}var OC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!OC[t.type]:e==="textarea"}function kT(t,e,n,r){sT(r),e=Xc(e,"onChange"),0<e.length&&(n=new ng("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var el=null,El=null;function VC(t){UT(t,0)}function jh(t){var e=Js(t);if(XE(e))return t}function LC(t,e){if(t==="change")return e}var CT=!1;if(pr){var wf;if(pr){var If="oninput"in document;if(!If){var Uv=document.createElement("div");Uv.setAttribute("oninput","return;"),If=typeof Uv.oninput=="function"}wf=If}else wf=!1;CT=wf&&(!document.documentMode||9<document.documentMode)}function Bv(){el&&(el.detachEvent("onpropertychange",bT),El=el=null)}function bT(t){if(t.propertyName==="value"&&jh(El)){var e=[];kT(e,El,t,Ym(t)),uT(VC,e)}}function MC(t,e,n){t==="focusin"?(Bv(),el=e,El=n,el.attachEvent("onpropertychange",bT)):t==="focusout"&&Bv()}function FC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jh(El)}function UC(t,e){if(t==="click")return jh(e)}function BC(t,e){if(t==="input"||t==="change")return jh(e)}function jC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Cn=typeof Object.is=="function"?Object.is:jC;function Tl(t,e){if(Cn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ip.call(e,i)||!Cn(t[i],e[i]))return!1}return!0}function jv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zv(t,e){var n=jv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jv(n)}}function xT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function NT(){for(var t=window,e=Wc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wc(t.document)}return e}function sg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function zC(t){var e=NT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xT(n.ownerDocument.documentElement,n)){if(r!==null&&sg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=zv(n,s);var o=zv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $C=pr&&"documentMode"in document&&11>=document.documentMode,Qs=null,Tp=null,tl=null,Sp=!1;function $v(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sp||Qs==null||Qs!==Wc(r)||(r=Qs,"selectionStart"in r&&sg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),tl&&Tl(tl,r)||(tl=r,r=Xc(Tp,"onSelect"),0<r.length&&(e=new ng("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Qs)))}function Zu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ys={animationend:Zu("Animation","AnimationEnd"),animationiteration:Zu("Animation","AnimationIteration"),animationstart:Zu("Animation","AnimationStart"),transitionend:Zu("Transition","TransitionEnd")},Ef={},DT={};pr&&(DT=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function zh(t){if(Ef[t])return Ef[t];if(!Ys[t])return t;var e=Ys[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in DT)return Ef[t]=e[n];return t}var OT=zh("animationend"),VT=zh("animationiteration"),LT=zh("animationstart"),MT=zh("transitionend"),FT=new Map,qv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wi(t,e){FT.set(t,e),vs(e,[t])}for(var Tf=0;Tf<qv.length;Tf++){var Sf=qv[Tf],qC=Sf.toLowerCase(),WC=Sf[0].toUpperCase()+Sf.slice(1);wi(qC,"on"+WC)}wi(OT,"onAnimationEnd");wi(VT,"onAnimationIteration");wi(LT,"onAnimationStart");wi("dblclick","onDoubleClick");wi("focusin","onFocus");wi("focusout","onBlur");wi(MT,"onTransitionEnd");vo("onMouseEnter",["mouseout","mouseover"]);vo("onMouseLeave",["mouseout","mouseover"]);vo("onPointerEnter",["pointerout","pointerover"]);vo("onPointerLeave",["pointerout","pointerover"]);vs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vs("onBeforeInput",["compositionend","keypress","textInput","paste"]);vs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),GC=new Set("cancel close invalid load scroll toggle".split(" ").concat($a));function Wv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,qk(r,e,void 0,t),t.currentTarget=null}function UT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Wv(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Wv(i,a,c),s=l}}}if(Hc)throw t=vp,Hc=!1,vp=null,t}function we(t,e){var n=e[Cp];n===void 0&&(n=e[Cp]=new Set);var r=t+"__bubble";n.has(r)||(BT(e,t,2,!1),n.add(r))}function Rf(t,e,n){var r=0;e&&(r|=4),BT(n,t,r,e)}var ec="_reactListening"+Math.random().toString(36).slice(2);function Sl(t){if(!t[ec]){t[ec]=!0,HE.forEach(function(n){n!=="selectionchange"&&(GC.has(n)||Rf(n,!1,t),Rf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ec]||(e[ec]=!0,Rf("selectionchange",!1,e))}}function BT(t,e,n,r){switch(TT(e)){case 1:var i=oC;break;case 4:i=aC;break;default:i=eg}n=i.bind(null,e,n,t),i=void 0,!yp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Af(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=$i(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}uT(function(){var c=s,h=Ym(n),f=[];e:{var m=FT.get(t);if(m!==void 0){var v=ng,A=t;switch(t){case"keypress":if(Tc(n)===0)break e;case"keydown":case"keyup":v=EC;break;case"focusin":A="focus",v=vf;break;case"focusout":A="blur",v=vf;break;case"beforeblur":case"afterblur":v=vf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Dv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=cC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=RC;break;case OT:case VT:case LT:v=fC;break;case MT:v=PC;break;case"scroll":v=lC;break;case"wheel":v=CC;break;case"copy":case"cut":case"paste":v=mC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Vv}var P=(e&4)!==0,C=!P&&t==="scroll",E=P?m!==null?m+"Capture":null:m;P=[];for(var _=c,w;_!==null;){w=_;var N=w.stateNode;if(w.tag===5&&N!==null&&(w=N,E!==null&&(N=yl(_,E),N!=null&&P.push(Rl(_,N,w)))),C)break;_=_.return}0<P.length&&(m=new v(m,A,null,n,h),f.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&n!==gp&&(A=n.relatedTarget||n.fromElement)&&($i(A)||A[mr]))break e;if((v||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,v?(A=n.relatedTarget||n.toElement,v=c,A=A?$i(A):null,A!==null&&(C=ws(A),A!==C||A.tag!==5&&A.tag!==6)&&(A=null)):(v=null,A=c),v!==A)){if(P=Dv,N="onMouseLeave",E="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(P=Vv,N="onPointerLeave",E="onPointerEnter",_="pointer"),C=v==null?m:Js(v),w=A==null?m:Js(A),m=new P(N,_+"leave",v,n,h),m.target=C,m.relatedTarget=w,N=null,$i(h)===c&&(P=new P(E,_+"enter",A,n,h),P.target=w,P.relatedTarget=C,N=P),C=N,v&&A)t:{for(P=v,E=A,_=0,w=P;w;w=Os(w))_++;for(w=0,N=E;N;N=Os(N))w++;for(;0<_-w;)P=Os(P),_--;for(;0<w-_;)E=Os(E),w--;for(;_--;){if(P===E||E!==null&&P===E.alternate)break t;P=Os(P),E=Os(E)}P=null}else P=null;v!==null&&Gv(f,m,v,P,!1),A!==null&&C!==null&&Gv(f,C,A,P,!0)}}e:{if(m=c?Js(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var L=LC;else if(Fv(m))if(CT)L=BC;else{L=FC;var M=MC}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(L=UC);if(L&&(L=L(t,c))){kT(f,L,n,h);break e}M&&M(t,m,c),t==="focusout"&&(M=m._wrapperState)&&M.controlled&&m.type==="number"&&hp(m,"number",m.value)}switch(M=c?Js(c):window,t){case"focusin":(Fv(M)||M.contentEditable==="true")&&(Qs=M,Tp=c,tl=null);break;case"focusout":tl=Tp=Qs=null;break;case"mousedown":Sp=!0;break;case"contextmenu":case"mouseup":case"dragend":Sp=!1,$v(f,n,h);break;case"selectionchange":if($C)break;case"keydown":case"keyup":$v(f,n,h)}var I;if(ig)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ks?AT(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(RT&&n.locale!=="ko"&&(Ks||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ks&&(I=ST()):(Wr=h,tg="value"in Wr?Wr.value:Wr.textContent,Ks=!0)),M=Xc(c,y),0<M.length&&(y=new Ov(y,t,null,n,h),f.push({event:y,listeners:M}),I?y.data=I:(I=PT(n),I!==null&&(y.data=I)))),(I=xC?NC(t,n):DC(t,n))&&(c=Xc(c,"onBeforeInput"),0<c.length&&(h=new Ov("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=I))}UT(f,e)})}function Rl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=yl(t,n),s!=null&&r.unshift(Rl(t,s,i)),s=yl(t,e),s!=null&&r.push(Rl(t,s,i))),t=t.return}return r}function Os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Gv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=yl(n,s),l!=null&&o.unshift(Rl(n,l,a))):i||(l=yl(n,s),l!=null&&o.push(Rl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var HC=/\r\n?/g,KC=/\u0000|\uFFFD/g;function Hv(t){return(typeof t=="string"?t:""+t).replace(HC,`
`).replace(KC,"")}function tc(t,e,n){if(e=Hv(e),Hv(t)!==e&&n)throw Error(B(425))}function Zc(){}var Rp=null,Ap=null;function Pp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kp=typeof setTimeout=="function"?setTimeout:void 0,QC=typeof clearTimeout=="function"?clearTimeout:void 0,Kv=typeof Promise=="function"?Promise:void 0,YC=typeof queueMicrotask=="function"?queueMicrotask:typeof Kv<"u"?function(t){return Kv.resolve(null).then(t).catch(JC)}:kp;function JC(t){setTimeout(function(){throw t})}function Pf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Il(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Il(e)}function Zr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ho=Math.random().toString(36).slice(2),On="__reactFiber$"+Ho,Al="__reactProps$"+Ho,mr="__reactContainer$"+Ho,Cp="__reactEvents$"+Ho,XC="__reactListeners$"+Ho,ZC="__reactHandles$"+Ho;function $i(t){var e=t[On];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mr]||n[On]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qv(t);t!==null;){if(n=t[On])return n;t=Qv(t)}return e}t=n,n=t.parentNode}return null}function iu(t){return t=t[On]||t[mr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Js(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function $h(t){return t[Al]||null}var bp=[],Xs=-1;function Ii(t){return{current:t}}function Ee(t){0>Xs||(t.current=bp[Xs],bp[Xs]=null,Xs--)}function _e(t,e){Xs++,bp[Xs]=t.current,t.current=e}var li={},Pt=Ii(li),Kt=Ii(!1),ts=li;function wo(t,e){var n=t.type.contextTypes;if(!n)return li;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Qt(t){return t=t.childContextTypes,t!=null}function eh(){Ee(Kt),Ee(Pt)}function Yv(t,e,n){if(Pt.current!==li)throw Error(B(168));_e(Pt,e),_e(Kt,n)}function jT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,Mk(t)||"Unknown",i));return De({},n,r)}function th(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||li,ts=Pt.current,_e(Pt,t),_e(Kt,Kt.current),!0}function Jv(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=jT(t,e,ts),r.__reactInternalMemoizedMergedChildContext=t,Ee(Kt),Ee(Pt),_e(Pt,t)):Ee(Kt),_e(Kt,n)}var sr=null,qh=!1,kf=!1;function zT(t){sr===null?sr=[t]:sr.push(t)}function eb(t){qh=!0,zT(t)}function Ei(){if(!kf&&sr!==null){kf=!0;var t=0,e=de;try{var n=sr;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}sr=null,qh=!1}catch(i){throw sr!==null&&(sr=sr.slice(t+1)),fT(Jm,Ei),i}finally{de=e,kf=!1}}return null}var Zs=[],eo=0,nh=null,rh=0,un=[],cn=0,ns=null,or=1,ar="";function Oi(t,e){Zs[eo++]=rh,Zs[eo++]=nh,nh=t,rh=e}function $T(t,e,n){un[cn++]=or,un[cn++]=ar,un[cn++]=ns,ns=t;var r=or;t=ar;var i=32-Pn(r)-1;r&=~(1<<i),n+=1;var s=32-Pn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,or=1<<32-Pn(e)+i|n<<i|r,ar=s+t}else or=1<<s|n<<i|r,ar=t}function og(t){t.return!==null&&(Oi(t,1),$T(t,1,0))}function ag(t){for(;t===nh;)nh=Zs[--eo],Zs[eo]=null,rh=Zs[--eo],Zs[eo]=null;for(;t===ns;)ns=un[--cn],un[cn]=null,ar=un[--cn],un[cn]=null,or=un[--cn],un[cn]=null}var nn=null,en=null,Se=!1,Rn=null;function qT(t,e){var n=hn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,nn=t,en=Zr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,nn=t,en=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ns!==null?{id:or,overflow:ar}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=hn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,nn=t,en=null,!0):!1;default:return!1}}function xp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Np(t){if(Se){var e=en;if(e){var n=e;if(!Xv(t,e)){if(xp(t))throw Error(B(418));e=Zr(n.nextSibling);var r=nn;e&&Xv(t,e)?qT(r,n):(t.flags=t.flags&-4097|2,Se=!1,nn=t)}}else{if(xp(t))throw Error(B(418));t.flags=t.flags&-4097|2,Se=!1,nn=t}}}function Zv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;nn=t}function nc(t){if(t!==nn)return!1;if(!Se)return Zv(t),Se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pp(t.type,t.memoizedProps)),e&&(e=en)){if(xp(t))throw WT(),Error(B(418));for(;e;)qT(t,e),e=Zr(e.nextSibling)}if(Zv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){en=Zr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}en=null}}else en=nn?Zr(t.stateNode.nextSibling):null;return!0}function WT(){for(var t=en;t;)t=Zr(t.nextSibling)}function Io(){en=nn=null,Se=!1}function lg(t){Rn===null?Rn=[t]:Rn.push(t)}var tb=Er.ReactCurrentBatchConfig;function ka(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function rc(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ew(t){var e=t._init;return e(t._payload)}function GT(t){function e(E,_){if(t){var w=E.deletions;w===null?(E.deletions=[_],E.flags|=16):w.push(_)}}function n(E,_){if(!t)return null;for(;_!==null;)e(E,_),_=_.sibling;return null}function r(E,_){for(E=new Map;_!==null;)_.key!==null?E.set(_.key,_):E.set(_.index,_),_=_.sibling;return E}function i(E,_){return E=ri(E,_),E.index=0,E.sibling=null,E}function s(E,_,w){return E.index=w,t?(w=E.alternate,w!==null?(w=w.index,w<_?(E.flags|=2,_):w):(E.flags|=2,_)):(E.flags|=1048576,_)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,_,w,N){return _===null||_.tag!==6?(_=Vf(w,E.mode,N),_.return=E,_):(_=i(_,w),_.return=E,_)}function l(E,_,w,N){var L=w.type;return L===Hs?h(E,_,w.props.children,N,w.key):_!==null&&(_.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ur&&ew(L)===_.type)?(N=i(_,w.props),N.ref=ka(E,_,w),N.return=E,N):(N=bc(w.type,w.key,w.props,null,E.mode,N),N.ref=ka(E,_,w),N.return=E,N)}function c(E,_,w,N){return _===null||_.tag!==4||_.stateNode.containerInfo!==w.containerInfo||_.stateNode.implementation!==w.implementation?(_=Lf(w,E.mode,N),_.return=E,_):(_=i(_,w.children||[]),_.return=E,_)}function h(E,_,w,N,L){return _===null||_.tag!==7?(_=Yi(w,E.mode,N,L),_.return=E,_):(_=i(_,w),_.return=E,_)}function f(E,_,w){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Vf(""+_,E.mode,w),_.return=E,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Gu:return w=bc(_.type,_.key,_.props,null,E.mode,w),w.ref=ka(E,null,_),w.return=E,w;case Gs:return _=Lf(_,E.mode,w),_.return=E,_;case Ur:var N=_._init;return f(E,N(_._payload),w)}if(ja(_)||Ta(_))return _=Yi(_,E.mode,w,null),_.return=E,_;rc(E,_)}return null}function m(E,_,w,N){var L=_!==null?_.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return L!==null?null:a(E,_,""+w,N);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Gu:return w.key===L?l(E,_,w,N):null;case Gs:return w.key===L?c(E,_,w,N):null;case Ur:return L=w._init,m(E,_,L(w._payload),N)}if(ja(w)||Ta(w))return L!==null?null:h(E,_,w,N,null);rc(E,w)}return null}function v(E,_,w,N,L){if(typeof N=="string"&&N!==""||typeof N=="number")return E=E.get(w)||null,a(_,E,""+N,L);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Gu:return E=E.get(N.key===null?w:N.key)||null,l(_,E,N,L);case Gs:return E=E.get(N.key===null?w:N.key)||null,c(_,E,N,L);case Ur:var M=N._init;return v(E,_,w,M(N._payload),L)}if(ja(N)||Ta(N))return E=E.get(w)||null,h(_,E,N,L,null);rc(_,N)}return null}function A(E,_,w,N){for(var L=null,M=null,I=_,y=_=0,T=null;I!==null&&y<w.length;y++){I.index>y?(T=I,I=null):T=I.sibling;var R=m(E,I,w[y],N);if(R===null){I===null&&(I=T);break}t&&I&&R.alternate===null&&e(E,I),_=s(R,_,y),M===null?L=R:M.sibling=R,M=R,I=T}if(y===w.length)return n(E,I),Se&&Oi(E,y),L;if(I===null){for(;y<w.length;y++)I=f(E,w[y],N),I!==null&&(_=s(I,_,y),M===null?L=I:M.sibling=I,M=I);return Se&&Oi(E,y),L}for(I=r(E,I);y<w.length;y++)T=v(I,E,y,w[y],N),T!==null&&(t&&T.alternate!==null&&I.delete(T.key===null?y:T.key),_=s(T,_,y),M===null?L=T:M.sibling=T,M=T);return t&&I.forEach(function(b){return e(E,b)}),Se&&Oi(E,y),L}function P(E,_,w,N){var L=Ta(w);if(typeof L!="function")throw Error(B(150));if(w=L.call(w),w==null)throw Error(B(151));for(var M=L=null,I=_,y=_=0,T=null,R=w.next();I!==null&&!R.done;y++,R=w.next()){I.index>y?(T=I,I=null):T=I.sibling;var b=m(E,I,R.value,N);if(b===null){I===null&&(I=T);break}t&&I&&b.alternate===null&&e(E,I),_=s(b,_,y),M===null?L=b:M.sibling=b,M=b,I=T}if(R.done)return n(E,I),Se&&Oi(E,y),L;if(I===null){for(;!R.done;y++,R=w.next())R=f(E,R.value,N),R!==null&&(_=s(R,_,y),M===null?L=R:M.sibling=R,M=R);return Se&&Oi(E,y),L}for(I=r(E,I);!R.done;y++,R=w.next())R=v(I,E,y,R.value,N),R!==null&&(t&&R.alternate!==null&&I.delete(R.key===null?y:R.key),_=s(R,_,y),M===null?L=R:M.sibling=R,M=R);return t&&I.forEach(function(k){return e(E,k)}),Se&&Oi(E,y),L}function C(E,_,w,N){if(typeof w=="object"&&w!==null&&w.type===Hs&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Gu:e:{for(var L=w.key,M=_;M!==null;){if(M.key===L){if(L=w.type,L===Hs){if(M.tag===7){n(E,M.sibling),_=i(M,w.props.children),_.return=E,E=_;break e}}else if(M.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ur&&ew(L)===M.type){n(E,M.sibling),_=i(M,w.props),_.ref=ka(E,M,w),_.return=E,E=_;break e}n(E,M);break}else e(E,M);M=M.sibling}w.type===Hs?(_=Yi(w.props.children,E.mode,N,w.key),_.return=E,E=_):(N=bc(w.type,w.key,w.props,null,E.mode,N),N.ref=ka(E,_,w),N.return=E,E=N)}return o(E);case Gs:e:{for(M=w.key;_!==null;){if(_.key===M)if(_.tag===4&&_.stateNode.containerInfo===w.containerInfo&&_.stateNode.implementation===w.implementation){n(E,_.sibling),_=i(_,w.children||[]),_.return=E,E=_;break e}else{n(E,_);break}else e(E,_);_=_.sibling}_=Lf(w,E.mode,N),_.return=E,E=_}return o(E);case Ur:return M=w._init,C(E,_,M(w._payload),N)}if(ja(w))return A(E,_,w,N);if(Ta(w))return P(E,_,w,N);rc(E,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,_!==null&&_.tag===6?(n(E,_.sibling),_=i(_,w),_.return=E,E=_):(n(E,_),_=Vf(w,E.mode,N),_.return=E,E=_),o(E)):n(E,_)}return C}var Eo=GT(!0),HT=GT(!1),ih=Ii(null),sh=null,to=null,ug=null;function cg(){ug=to=sh=null}function hg(t){var e=ih.current;Ee(ih),t._currentValue=e}function Dp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function uo(t,e){sh=t,ug=to=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(qt=!0),t.firstContext=null)}function gn(t){var e=t._currentValue;if(ug!==t)if(t={context:t,memoizedValue:e,next:null},to===null){if(sh===null)throw Error(B(308));to=t,sh.dependencies={lanes:0,firstContext:t}}else to=to.next=t;return e}var qi=null;function dg(t){qi===null?qi=[t]:qi.push(t)}function KT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,dg(e)):(n.next=i.next,i.next=n),e.interleaved=n,gr(t,r)}function gr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Br=!1;function fg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function QT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ei(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,gr(t,n)}return i=r.interleaved,i===null?(e.next=e,dg(r)):(e.next=i.next,i.next=e),r.interleaved=e,gr(t,n)}function Sc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xm(t,n)}}function tw(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function oh(t,e,n,r){var i=t.updateQueue;Br=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,h=c=l=null,a=s;do{var m=a.lane,v=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var A=t,P=a;switch(m=e,v=n,P.tag){case 1:if(A=P.payload,typeof A=="function"){f=A.call(v,f,m);break e}f=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=P.payload,m=typeof A=="function"?A.call(v,f,m):A,m==null)break e;f=De({},f,m);break e;case 2:Br=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=v,l=f):h=h.next=v,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);is|=o,t.lanes=o,t.memoizedState=f}}function nw(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var su={},qn=Ii(su),Pl=Ii(su),kl=Ii(su);function Wi(t){if(t===su)throw Error(B(174));return t}function pg(t,e){switch(_e(kl,e),_e(Pl,t),_e(qn,su),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:fp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=fp(e,t)}Ee(qn),_e(qn,e)}function To(){Ee(qn),Ee(Pl),Ee(kl)}function YT(t){Wi(kl.current);var e=Wi(qn.current),n=fp(e,t.type);e!==n&&(_e(Pl,t),_e(qn,n))}function mg(t){Pl.current===t&&(Ee(qn),Ee(Pl))}var be=Ii(0);function ah(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cf=[];function gg(){for(var t=0;t<Cf.length;t++)Cf[t]._workInProgressVersionPrimary=null;Cf.length=0}var Rc=Er.ReactCurrentDispatcher,bf=Er.ReactCurrentBatchConfig,rs=0,xe=null,Je=null,rt=null,lh=!1,nl=!1,Cl=0,nb=0;function It(){throw Error(B(321))}function _g(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Cn(t[n],e[n]))return!1;return!0}function yg(t,e,n,r,i,s){if(rs=s,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Rc.current=t===null||t.memoizedState===null?ob:ab,t=n(r,i),nl){s=0;do{if(nl=!1,Cl=0,25<=s)throw Error(B(301));s+=1,rt=Je=null,e.updateQueue=null,Rc.current=lb,t=n(r,i)}while(nl)}if(Rc.current=uh,e=Je!==null&&Je.next!==null,rs=0,rt=Je=xe=null,lh=!1,e)throw Error(B(300));return t}function vg(){var t=Cl!==0;return Cl=0,t}function Dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?xe.memoizedState=rt=t:rt=rt.next=t,rt}function _n(){if(Je===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=Je.next;var e=rt===null?xe.memoizedState:rt.next;if(e!==null)rt=e,Je=t;else{if(t===null)throw Error(B(310));Je=t,t={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},rt===null?xe.memoizedState=rt=t:rt=rt.next=t}return rt}function bl(t,e){return typeof e=="function"?e(t):e}function xf(t){var e=_n(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=Je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((rs&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,xe.lanes|=h,is|=h}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Cn(r,e.memoizedState)||(qt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,xe.lanes|=s,is|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Nf(t){var e=_n(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Cn(s,e.memoizedState)||(qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function JT(){}function XT(t,e){var n=xe,r=_n(),i=e(),s=!Cn(r.memoizedState,i);if(s&&(r.memoizedState=i,qt=!0),r=r.queue,wg(t0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||rt!==null&&rt.memoizedState.tag&1){if(n.flags|=2048,xl(9,e0.bind(null,n,r,i,e),void 0,null),st===null)throw Error(B(349));rs&30||ZT(n,e,i)}return i}function ZT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function e0(t,e,n,r){e.value=n,e.getSnapshot=r,n0(e)&&r0(t)}function t0(t,e,n){return n(function(){n0(e)&&r0(t)})}function n0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Cn(t,n)}catch{return!0}}function r0(t){var e=gr(t,1);e!==null&&kn(e,t,1,-1)}function rw(t){var e=Dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bl,lastRenderedState:t},e.queue=t,t=t.dispatch=sb.bind(null,xe,t),[e.memoizedState,t]}function xl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function i0(){return _n().memoizedState}function Ac(t,e,n,r){var i=Dn();xe.flags|=t,i.memoizedState=xl(1|e,n,void 0,r===void 0?null:r)}function Wh(t,e,n,r){var i=_n();r=r===void 0?null:r;var s=void 0;if(Je!==null){var o=Je.memoizedState;if(s=o.destroy,r!==null&&_g(r,o.deps)){i.memoizedState=xl(e,n,s,r);return}}xe.flags|=t,i.memoizedState=xl(1|e,n,s,r)}function iw(t,e){return Ac(8390656,8,t,e)}function wg(t,e){return Wh(2048,8,t,e)}function s0(t,e){return Wh(4,2,t,e)}function o0(t,e){return Wh(4,4,t,e)}function a0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function l0(t,e,n){return n=n!=null?n.concat([t]):null,Wh(4,4,a0.bind(null,e,t),n)}function Ig(){}function u0(t,e){var n=_n();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_g(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function c0(t,e){var n=_n();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_g(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function h0(t,e,n){return rs&21?(Cn(n,e)||(n=gT(),xe.lanes|=n,is|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,qt=!0),t.memoizedState=n)}function rb(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=bf.transition;bf.transition={};try{t(!1),e()}finally{de=n,bf.transition=r}}function d0(){return _n().memoizedState}function ib(t,e,n){var r=ni(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},f0(t))p0(e,n);else if(n=KT(t,e,n,r),n!==null){var i=Vt();kn(n,t,r,i),m0(n,e,r)}}function sb(t,e,n){var r=ni(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(f0(t))p0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Cn(a,o)){var l=e.interleaved;l===null?(i.next=i,dg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=KT(t,e,i,r),n!==null&&(i=Vt(),kn(n,t,r,i),m0(n,e,r))}}function f0(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function p0(t,e){nl=lh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function m0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xm(t,n)}}var uh={readContext:gn,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},ob={readContext:gn,useCallback:function(t,e){return Dn().memoizedState=[t,e===void 0?null:e],t},useContext:gn,useEffect:iw,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ac(4194308,4,a0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ac(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ac(4,2,t,e)},useMemo:function(t,e){var n=Dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ib.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=Dn();return t={current:t},e.memoizedState=t},useState:rw,useDebugValue:Ig,useDeferredValue:function(t){return Dn().memoizedState=t},useTransition:function(){var t=rw(!1),e=t[0];return t=rb.bind(null,t[1]),Dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,i=Dn();if(Se){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),st===null)throw Error(B(349));rs&30||ZT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,iw(t0.bind(null,r,s,t),[t]),r.flags|=2048,xl(9,e0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Dn(),e=st.identifierPrefix;if(Se){var n=ar,r=or;n=(r&~(1<<32-Pn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Cl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=nb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ab={readContext:gn,useCallback:u0,useContext:gn,useEffect:wg,useImperativeHandle:l0,useInsertionEffect:s0,useLayoutEffect:o0,useMemo:c0,useReducer:xf,useRef:i0,useState:function(){return xf(bl)},useDebugValue:Ig,useDeferredValue:function(t){var e=_n();return h0(e,Je.memoizedState,t)},useTransition:function(){var t=xf(bl)[0],e=_n().memoizedState;return[t,e]},useMutableSource:JT,useSyncExternalStore:XT,useId:d0,unstable_isNewReconciler:!1},lb={readContext:gn,useCallback:u0,useContext:gn,useEffect:wg,useImperativeHandle:l0,useInsertionEffect:s0,useLayoutEffect:o0,useMemo:c0,useReducer:Nf,useRef:i0,useState:function(){return Nf(bl)},useDebugValue:Ig,useDeferredValue:function(t){var e=_n();return Je===null?e.memoizedState=t:h0(e,Je.memoizedState,t)},useTransition:function(){var t=Nf(bl)[0],e=_n().memoizedState;return[t,e]},useMutableSource:JT,useSyncExternalStore:XT,useId:d0,unstable_isNewReconciler:!1};function Tn(t,e){if(t&&t.defaultProps){e=De({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Op(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:De({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Gh={isMounted:function(t){return(t=t._reactInternals)?ws(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Vt(),i=ni(t),s=hr(r,i);s.payload=e,n!=null&&(s.callback=n),e=ei(t,s,i),e!==null&&(kn(e,t,i,r),Sc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Vt(),i=ni(t),s=hr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ei(t,s,i),e!==null&&(kn(e,t,i,r),Sc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Vt(),r=ni(t),i=hr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ei(t,i,r),e!==null&&(kn(e,t,r,n),Sc(e,t,r))}};function sw(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Tl(n,r)||!Tl(i,s):!0}function g0(t,e,n){var r=!1,i=li,s=e.contextType;return typeof s=="object"&&s!==null?s=gn(s):(i=Qt(e)?ts:Pt.current,r=e.contextTypes,s=(r=r!=null)?wo(t,i):li),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ow(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Gh.enqueueReplaceState(e,e.state,null)}function Vp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},fg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=gn(s):(s=Qt(e)?ts:Pt.current,i.context=wo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Op(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Gh.enqueueReplaceState(i,i.state,null),oh(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function So(t,e){try{var n="",r=e;do n+=Lk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Df(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Lp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ub=typeof WeakMap=="function"?WeakMap:Map;function _0(t,e,n){n=hr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){hh||(hh=!0,Gp=r),Lp(t,e)},n}function y0(t,e,n){n=hr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Lp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Lp(t,e),typeof r!="function"&&(ti===null?ti=new Set([this]):ti.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function aw(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ub;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Tb.bind(null,t,e,n),e.then(t,t))}function lw(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function uw(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hr(-1,1),e.tag=2,ei(n,e,1))),n.lanes|=1),t)}var cb=Er.ReactCurrentOwner,qt=!1;function xt(t,e,n,r){e.child=t===null?HT(e,null,n,r):Eo(e,t.child,n,r)}function cw(t,e,n,r,i){n=n.render;var s=e.ref;return uo(e,i),r=yg(t,e,n,r,s,i),n=vg(),t!==null&&!qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,_r(t,e,i)):(Se&&n&&og(e),e.flags|=1,xt(t,e,r,i),e.child)}function hw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Cg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,v0(t,e,s,r,i)):(t=bc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Tl,n(o,r)&&t.ref===e.ref)return _r(t,e,i)}return e.flags|=1,t=ri(s,r),t.ref=e.ref,t.return=e,e.child=t}function v0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Tl(s,r)&&t.ref===e.ref)if(qt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(qt=!0);else return e.lanes=t.lanes,_r(t,e,i)}return Mp(t,e,n,r,i)}function w0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(ro,Xt),Xt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(ro,Xt),Xt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(ro,Xt),Xt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,_e(ro,Xt),Xt|=r;return xt(t,e,i,n),e.child}function I0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Mp(t,e,n,r,i){var s=Qt(n)?ts:Pt.current;return s=wo(e,s),uo(e,i),n=yg(t,e,n,r,s,i),r=vg(),t!==null&&!qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,_r(t,e,i)):(Se&&r&&og(e),e.flags|=1,xt(t,e,n,i),e.child)}function dw(t,e,n,r,i){if(Qt(n)){var s=!0;th(e)}else s=!1;if(uo(e,i),e.stateNode===null)Pc(t,e),g0(e,n,r),Vp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=gn(c):(c=Qt(n)?ts:Pt.current,c=wo(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&ow(e,o,r,c),Br=!1;var m=e.memoizedState;o.state=m,oh(e,r,o,i),l=e.memoizedState,a!==r||m!==l||Kt.current||Br?(typeof h=="function"&&(Op(e,n,h,r),l=e.memoizedState),(a=Br||sw(e,n,a,r,m,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,QT(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Tn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=gn(l):(l=Qt(n)?ts:Pt.current,l=wo(e,l));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==l)&&ow(e,o,r,l),Br=!1,m=e.memoizedState,o.state=m,oh(e,r,o,i);var A=e.memoizedState;a!==f||m!==A||Kt.current||Br?(typeof v=="function"&&(Op(e,n,v,r),A=e.memoizedState),(c=Br||sw(e,n,c,r,m,A,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Fp(t,e,n,r,s,i)}function Fp(t,e,n,r,i,s){I0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Jv(e,n,!1),_r(t,e,s);r=e.stateNode,cb.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Eo(e,t.child,null,s),e.child=Eo(e,null,a,s)):xt(t,e,a,s),e.memoizedState=r.state,i&&Jv(e,n,!0),e.child}function E0(t){var e=t.stateNode;e.pendingContext?Yv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Yv(t,e.context,!1),pg(t,e.containerInfo)}function fw(t,e,n,r,i){return Io(),lg(i),e.flags|=256,xt(t,e,n,r),e.child}var Up={dehydrated:null,treeContext:null,retryLane:0};function Bp(t){return{baseLanes:t,cachePool:null,transitions:null}}function T0(t,e,n){var r=e.pendingProps,i=be.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(be,i&1),t===null)return Np(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Qh(o,r,0,null),t=Yi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Bp(n),e.memoizedState=Up,t):Eg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return hb(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ri(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ri(a,s):(s=Yi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Bp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Up,r}return s=t.child,t=s.sibling,r=ri(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Eg(t,e){return e=Qh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ic(t,e,n,r){return r!==null&&lg(r),Eo(e,t.child,null,n),t=Eg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hb(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Df(Error(B(422))),ic(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Qh({mode:"visible",children:r.children},i,0,null),s=Yi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Eo(e,t.child,null,o),e.child.memoizedState=Bp(o),e.memoizedState=Up,s);if(!(e.mode&1))return ic(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=Df(s,r,void 0),ic(t,e,o,r)}if(a=(o&t.childLanes)!==0,qt||a){if(r=st,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,gr(t,i),kn(r,t,i,-1))}return kg(),r=Df(Error(B(421))),ic(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Sb.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,en=Zr(i.nextSibling),nn=e,Se=!0,Rn=null,t!==null&&(un[cn++]=or,un[cn++]=ar,un[cn++]=ns,or=t.id,ar=t.overflow,ns=e),e=Eg(e,r.children),e.flags|=4096,e)}function pw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Dp(t.return,e,n)}function Of(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function S0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(xt(t,e,r.children,n),r=be.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pw(t,n,e);else if(t.tag===19)pw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(be,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ah(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Of(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ah(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Of(e,!0,n,null,s);break;case"together":Of(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function _r(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),is|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=ri(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ri(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function db(t,e,n){switch(e.tag){case 3:E0(e),Io();break;case 5:YT(e);break;case 1:Qt(e.type)&&th(e);break;case 4:pg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(ih,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(be,be.current&1),e.flags|=128,null):n&e.child.childLanes?T0(t,e,n):(_e(be,be.current&1),t=_r(t,e,n),t!==null?t.sibling:null);_e(be,be.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return S0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(be,be.current),r)break;return null;case 22:case 23:return e.lanes=0,w0(t,e,n)}return _r(t,e,n)}var R0,jp,A0,P0;R0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jp=function(){};A0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Wi(qn.current);var s=null;switch(n){case"input":i=up(t,i),r=up(t,r),s=[];break;case"select":i=De({},i,{value:void 0}),r=De({},r,{value:void 0}),s=[];break;case"textarea":i=dp(t,i),r=dp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Zc)}pp(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(gl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(gl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&we("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};P0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ca(t,e){if(!Se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function fb(t,e,n){var r=e.pendingProps;switch(ag(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(e),null;case 1:return Qt(e.type)&&eh(),Et(e),null;case 3:return r=e.stateNode,To(),Ee(Kt),Ee(Pt),gg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(nc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Rn!==null&&(Qp(Rn),Rn=null))),jp(t,e),Et(e),null;case 5:mg(e);var i=Wi(kl.current);if(n=e.type,t!==null&&e.stateNode!=null)A0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return Et(e),null}if(t=Wi(qn.current),nc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[On]=e,r[Al]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<$a.length;i++)we($a[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Tv(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":Rv(r,s),we("invalid",r)}pp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&tc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&tc(r.textContent,a,t),i=["children",""+a]):gl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":Hu(r),Sv(r,s,!0);break;case"textarea":Hu(r),Av(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Zc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=tT(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[On]=e,t[Al]=r,R0(t,e,!1,!1),e.stateNode=t;e:{switch(o=mp(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<$a.length;i++)we($a[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":Tv(t,r),i=up(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=De({},r,{value:void 0}),we("invalid",t);break;case"textarea":Rv(t,r),i=dp(t,r),we("invalid",t);break;default:i=r}pp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?iT(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&nT(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&_l(t,l):typeof l=="number"&&_l(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(gl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&we("scroll",t):l!=null&&Gm(t,s,l,o))}switch(n){case"input":Hu(t),Sv(t,r,!1);break;case"textarea":Hu(t),Av(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ai(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?so(t,!!r.multiple,s,!1):r.defaultValue!=null&&so(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Zc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Et(e),null;case 6:if(t&&e.stateNode!=null)P0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=Wi(kl.current),Wi(qn.current),nc(e)){if(r=e.stateNode,n=e.memoizedProps,r[On]=e,(s=r.nodeValue!==n)&&(t=nn,t!==null))switch(t.tag){case 3:tc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&tc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[On]=e,e.stateNode=r}return Et(e),null;case 13:if(Ee(be),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&en!==null&&e.mode&1&&!(e.flags&128))WT(),Io(),e.flags|=98560,s=!1;else if(s=nc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[On]=e}else Io(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Et(e),s=!1}else Rn!==null&&(Qp(Rn),Rn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||be.current&1?Xe===0&&(Xe=3):kg())),e.updateQueue!==null&&(e.flags|=4),Et(e),null);case 4:return To(),jp(t,e),t===null&&Sl(e.stateNode.containerInfo),Et(e),null;case 10:return hg(e.type._context),Et(e),null;case 17:return Qt(e.type)&&eh(),Et(e),null;case 19:if(Ee(be),s=e.memoizedState,s===null)return Et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ca(s,!1);else{if(Xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ah(t),o!==null){for(e.flags|=128,Ca(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(be,be.current&1|2),e.child}t=t.sibling}s.tail!==null&&qe()>Ro&&(e.flags|=128,r=!0,Ca(s,!1),e.lanes=4194304)}else{if(!r)if(t=ah(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ca(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Se)return Et(e),null}else 2*qe()-s.renderingStartTime>Ro&&n!==1073741824&&(e.flags|=128,r=!0,Ca(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=qe(),e.sibling=null,n=be.current,_e(be,r?n&1|2:n&1),e):(Et(e),null);case 22:case 23:return Pg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Xt&1073741824&&(Et(e),e.subtreeFlags&6&&(e.flags|=8192)):Et(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function pb(t,e){switch(ag(e),e.tag){case 1:return Qt(e.type)&&eh(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return To(),Ee(Kt),Ee(Pt),gg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return mg(e),null;case 13:if(Ee(be),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Io()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(be),null;case 4:return To(),null;case 10:return hg(e.type._context),null;case 22:case 23:return Pg(),null;case 24:return null;default:return null}}var sc=!1,St=!1,mb=typeof WeakSet=="function"?WeakSet:Set,Q=null;function no(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(t,e,r)}else n.current=null}function zp(t,e,n){try{n()}catch(r){Le(t,e,r)}}var mw=!1;function gb(t,e){if(Rp=Yc,t=NT(),sg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,f=t,m=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++h===r&&(l=o),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ap={focusedElem:t,selectionRange:n},Yc=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var P=A.memoizedProps,C=A.memoizedState,E=e.stateNode,_=E.getSnapshotBeforeUpdate(e.elementType===e.type?P:Tn(e.type,P),C);E.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(N){Le(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return A=mw,mw=!1,A}function rl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&zp(e,n,s)}i=i.next}while(i!==r)}}function Hh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function $p(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function k0(t){var e=t.alternate;e!==null&&(t.alternate=null,k0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[On],delete e[Al],delete e[Cp],delete e[XC],delete e[ZC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function C0(t){return t.tag===5||t.tag===3||t.tag===4}function gw(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||C0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Zc));else if(r!==4&&(t=t.child,t!==null))for(qp(t,e,n),t=t.sibling;t!==null;)qp(t,e,n),t=t.sibling}function Wp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Wp(t,e,n),t=t.sibling;t!==null;)Wp(t,e,n),t=t.sibling}var ft=null,Sn=!1;function Or(t,e,n){for(n=n.child;n!==null;)b0(t,e,n),n=n.sibling}function b0(t,e,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(Uh,n)}catch{}switch(n.tag){case 5:St||no(n,e);case 6:var r=ft,i=Sn;ft=null,Or(t,e,n),ft=r,Sn=i,ft!==null&&(Sn?(t=ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ft.removeChild(n.stateNode));break;case 18:ft!==null&&(Sn?(t=ft,n=n.stateNode,t.nodeType===8?Pf(t.parentNode,n):t.nodeType===1&&Pf(t,n),Il(t)):Pf(ft,n.stateNode));break;case 4:r=ft,i=Sn,ft=n.stateNode.containerInfo,Sn=!0,Or(t,e,n),ft=r,Sn=i;break;case 0:case 11:case 14:case 15:if(!St&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zp(n,e,o),i=i.next}while(i!==r)}Or(t,e,n);break;case 1:if(!St&&(no(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Le(n,e,a)}Or(t,e,n);break;case 21:Or(t,e,n);break;case 22:n.mode&1?(St=(r=St)||n.memoizedState!==null,Or(t,e,n),St=r):Or(t,e,n);break;default:Or(t,e,n)}}function _w(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new mb),e.forEach(function(r){var i=Rb.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function En(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ft=a.stateNode,Sn=!1;break e;case 3:ft=a.stateNode.containerInfo,Sn=!0;break e;case 4:ft=a.stateNode.containerInfo,Sn=!0;break e}a=a.return}if(ft===null)throw Error(B(160));b0(s,o,i),ft=null,Sn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Le(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)x0(e,t),e=e.sibling}function x0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(En(e,t),Nn(t),r&4){try{rl(3,t,t.return),Hh(3,t)}catch(P){Le(t,t.return,P)}try{rl(5,t,t.return)}catch(P){Le(t,t.return,P)}}break;case 1:En(e,t),Nn(t),r&512&&n!==null&&no(n,n.return);break;case 5:if(En(e,t),Nn(t),r&512&&n!==null&&no(n,n.return),t.flags&32){var i=t.stateNode;try{_l(i,"")}catch(P){Le(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ZE(i,s),mp(a,o);var c=mp(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?iT(i,f):h==="dangerouslySetInnerHTML"?nT(i,f):h==="children"?_l(i,f):Gm(i,h,f,c)}switch(a){case"input":cp(i,s);break;case"textarea":eT(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?so(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?so(i,!!s.multiple,s.defaultValue,!0):so(i,!!s.multiple,s.multiple?[]:"",!1))}i[Al]=s}catch(P){Le(t,t.return,P)}}break;case 6:if(En(e,t),Nn(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Le(t,t.return,P)}}break;case 3:if(En(e,t),Nn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Il(e.containerInfo)}catch(P){Le(t,t.return,P)}break;case 4:En(e,t),Nn(t);break;case 13:En(e,t),Nn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Rg=qe())),r&4&&_w(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(St=(c=St)||h,En(e,t),St=c):En(e,t),Nn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Q=t,h=t.child;h!==null;){for(f=Q=h;Q!==null;){switch(m=Q,v=m.child,m.tag){case 0:case 11:case 14:case 15:rl(4,m,m.return);break;case 1:no(m,m.return);var A=m.stateNode;if(typeof A.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(P){Le(r,n,P)}}break;case 5:no(m,m.return);break;case 22:if(m.memoizedState!==null){vw(f);continue}}v!==null?(v.return=m,Q=v):vw(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=rT("display",o))}catch(P){Le(t,t.return,P)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(P){Le(t,t.return,P)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:En(e,t),Nn(t),r&4&&_w(t);break;case 21:break;default:En(e,t),Nn(t)}}function Nn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(C0(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(_l(i,""),r.flags&=-33);var s=gw(t);Wp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=gw(t);qp(t,a,o);break;default:throw Error(B(161))}}catch(l){Le(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function _b(t,e,n){Q=t,N0(t)}function N0(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var i=Q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||sc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||St;a=sc;var c=St;if(sc=o,(St=l)&&!c)for(Q=i;Q!==null;)o=Q,l=o.child,o.tag===22&&o.memoizedState!==null?ww(i):l!==null?(l.return=o,Q=l):ww(i);for(;s!==null;)Q=s,N0(s),s=s.sibling;Q=i,sc=a,St=c}yw(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Q=s):yw(t)}}function yw(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:St||Hh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!St)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Tn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&nw(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}nw(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Il(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}St||e.flags&512&&$p(e)}catch(m){Le(e,e.return,m)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function vw(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function ww(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hh(4,e)}catch(l){Le(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Le(e,i,l)}}var s=e.return;try{$p(e)}catch(l){Le(e,s,l)}break;case 5:var o=e.return;try{$p(e)}catch(l){Le(e,o,l)}}}catch(l){Le(e,e.return,l)}if(e===t){Q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Q=a;break}Q=e.return}}var yb=Math.ceil,ch=Er.ReactCurrentDispatcher,Tg=Er.ReactCurrentOwner,pn=Er.ReactCurrentBatchConfig,le=0,st=null,Qe=null,gt=0,Xt=0,ro=Ii(0),Xe=0,Nl=null,is=0,Kh=0,Sg=0,il=null,$t=null,Rg=0,Ro=1/0,ir=null,hh=!1,Gp=null,ti=null,oc=!1,Gr=null,dh=0,sl=0,Hp=null,kc=-1,Cc=0;function Vt(){return le&6?qe():kc!==-1?kc:kc=qe()}function ni(t){return t.mode&1?le&2&&gt!==0?gt&-gt:tb.transition!==null?(Cc===0&&(Cc=gT()),Cc):(t=de,t!==0||(t=window.event,t=t===void 0?16:TT(t.type)),t):1}function kn(t,e,n,r){if(50<sl)throw sl=0,Hp=null,Error(B(185));nu(t,n,r),(!(le&2)||t!==st)&&(t===st&&(!(le&2)&&(Kh|=n),Xe===4&&zr(t,gt)),Yt(t,r),n===1&&le===0&&!(e.mode&1)&&(Ro=qe()+500,qh&&Ei()))}function Yt(t,e){var n=t.callbackNode;tC(t,e);var r=Qc(t,t===st?gt:0);if(r===0)n!==null&&Cv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Cv(n),e===1)t.tag===0?eb(Iw.bind(null,t)):zT(Iw.bind(null,t)),YC(function(){!(le&6)&&Ei()}),n=null;else{switch(_T(r)){case 1:n=Jm;break;case 4:n=pT;break;case 16:n=Kc;break;case 536870912:n=mT;break;default:n=Kc}n=B0(n,D0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function D0(t,e){if(kc=-1,Cc=0,le&6)throw Error(B(327));var n=t.callbackNode;if(co()&&t.callbackNode!==n)return null;var r=Qc(t,t===st?gt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=fh(t,r);else{e=r;var i=le;le|=2;var s=V0();(st!==t||gt!==e)&&(ir=null,Ro=qe()+500,Qi(t,e));do try{Ib();break}catch(a){O0(t,a)}while(!0);cg(),ch.current=s,le=i,Qe!==null?e=0:(st=null,gt=0,e=Xe)}if(e!==0){if(e===2&&(i=wp(t),i!==0&&(r=i,e=Kp(t,i))),e===1)throw n=Nl,Qi(t,0),zr(t,r),Yt(t,qe()),n;if(e===6)zr(t,r);else{if(i=t.current.alternate,!(r&30)&&!vb(i)&&(e=fh(t,r),e===2&&(s=wp(t),s!==0&&(r=s,e=Kp(t,s))),e===1))throw n=Nl,Qi(t,0),zr(t,r),Yt(t,qe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Vi(t,$t,ir);break;case 3:if(zr(t,r),(r&130023424)===r&&(e=Rg+500-qe(),10<e)){if(Qc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Vt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=kp(Vi.bind(null,t,$t,ir),e);break}Vi(t,$t,ir);break;case 4:if(zr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Pn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yb(r/1960))-r,10<r){t.timeoutHandle=kp(Vi.bind(null,t,$t,ir),r);break}Vi(t,$t,ir);break;case 5:Vi(t,$t,ir);break;default:throw Error(B(329))}}}return Yt(t,qe()),t.callbackNode===n?D0.bind(null,t):null}function Kp(t,e){var n=il;return t.current.memoizedState.isDehydrated&&(Qi(t,e).flags|=256),t=fh(t,e),t!==2&&(e=$t,$t=n,e!==null&&Qp(e)),t}function Qp(t){$t===null?$t=t:$t.push.apply($t,t)}function vb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Cn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zr(t,e){for(e&=~Sg,e&=~Kh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Pn(e),r=1<<n;t[n]=-1,e&=~r}}function Iw(t){if(le&6)throw Error(B(327));co();var e=Qc(t,0);if(!(e&1))return Yt(t,qe()),null;var n=fh(t,e);if(t.tag!==0&&n===2){var r=wp(t);r!==0&&(e=r,n=Kp(t,r))}if(n===1)throw n=Nl,Qi(t,0),zr(t,e),Yt(t,qe()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vi(t,$t,ir),Yt(t,qe()),null}function Ag(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(Ro=qe()+500,qh&&Ei())}}function ss(t){Gr!==null&&Gr.tag===0&&!(le&6)&&co();var e=le;le|=1;var n=pn.transition,r=de;try{if(pn.transition=null,de=1,t)return t()}finally{de=r,pn.transition=n,le=e,!(le&6)&&Ei()}}function Pg(){Xt=ro.current,Ee(ro)}function Qi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,QC(n)),Qe!==null)for(n=Qe.return;n!==null;){var r=n;switch(ag(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&eh();break;case 3:To(),Ee(Kt),Ee(Pt),gg();break;case 5:mg(r);break;case 4:To();break;case 13:Ee(be);break;case 19:Ee(be);break;case 10:hg(r.type._context);break;case 22:case 23:Pg()}n=n.return}if(st=t,Qe=t=ri(t.current,null),gt=Xt=e,Xe=0,Nl=null,Sg=Kh=is=0,$t=il=null,qi!==null){for(e=0;e<qi.length;e++)if(n=qi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}qi=null}return t}function O0(t,e){do{var n=Qe;try{if(cg(),Rc.current=uh,lh){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}lh=!1}if(rs=0,rt=Je=xe=null,nl=!1,Cl=0,Tg.current=null,n===null||n.return===null){Xe=1,Nl=e,Qe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=gt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=lw(o);if(v!==null){v.flags&=-257,uw(v,o,a,s,e),v.mode&1&&aw(s,c,e),e=v,l=c;var A=e.updateQueue;if(A===null){var P=new Set;P.add(l),e.updateQueue=P}else A.add(l);break e}else{if(!(e&1)){aw(s,c,e),kg();break e}l=Error(B(426))}}else if(Se&&a.mode&1){var C=lw(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),uw(C,o,a,s,e),lg(So(l,a));break e}}s=l=So(l,a),Xe!==4&&(Xe=2),il===null?il=[s]:il.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=_0(s,l,e);tw(s,E);break e;case 1:a=l;var _=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(ti===null||!ti.has(w)))){s.flags|=65536,e&=-e,s.lanes|=e;var N=y0(s,a,e);tw(s,N);break e}}s=s.return}while(s!==null)}M0(n)}catch(L){e=L,Qe===n&&n!==null&&(Qe=n=n.return);continue}break}while(!0)}function V0(){var t=ch.current;return ch.current=uh,t===null?uh:t}function kg(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),st===null||!(is&268435455)&&!(Kh&268435455)||zr(st,gt)}function fh(t,e){var n=le;le|=2;var r=V0();(st!==t||gt!==e)&&(ir=null,Qi(t,e));do try{wb();break}catch(i){O0(t,i)}while(!0);if(cg(),le=n,ch.current=r,Qe!==null)throw Error(B(261));return st=null,gt=0,Xe}function wb(){for(;Qe!==null;)L0(Qe)}function Ib(){for(;Qe!==null&&!Gk();)L0(Qe)}function L0(t){var e=U0(t.alternate,t,Xt);t.memoizedProps=t.pendingProps,e===null?M0(t):Qe=e,Tg.current=null}function M0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=pb(n,e),n!==null){n.flags&=32767,Qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xe=6,Qe=null;return}}else if(n=fb(n,e,Xt),n!==null){Qe=n;return}if(e=e.sibling,e!==null){Qe=e;return}Qe=e=t}while(e!==null);Xe===0&&(Xe=5)}function Vi(t,e,n){var r=de,i=pn.transition;try{pn.transition=null,de=1,Eb(t,e,n,r)}finally{pn.transition=i,de=r}return null}function Eb(t,e,n,r){do co();while(Gr!==null);if(le&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(nC(t,s),t===st&&(Qe=st=null,gt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||oc||(oc=!0,B0(Kc,function(){return co(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=pn.transition,pn.transition=null;var o=de;de=1;var a=le;le|=4,Tg.current=null,gb(t,n),x0(n,t),zC(Ap),Yc=!!Rp,Ap=Rp=null,t.current=n,_b(n),Hk(),le=a,de=o,pn.transition=s}else t.current=n;if(oc&&(oc=!1,Gr=t,dh=i),s=t.pendingLanes,s===0&&(ti=null),Yk(n.stateNode),Yt(t,qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(hh)throw hh=!1,t=Gp,Gp=null,t;return dh&1&&t.tag!==0&&co(),s=t.pendingLanes,s&1?t===Hp?sl++:(sl=0,Hp=t):sl=0,Ei(),null}function co(){if(Gr!==null){var t=_T(dh),e=pn.transition,n=de;try{if(pn.transition=null,de=16>t?16:t,Gr===null)var r=!1;else{if(t=Gr,Gr=null,dh=0,le&6)throw Error(B(331));var i=le;for(le|=4,Q=t.current;Q!==null;){var s=Q,o=s.child;if(Q.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Q=c;Q!==null;){var h=Q;switch(h.tag){case 0:case 11:case 15:rl(8,h,s)}var f=h.child;if(f!==null)f.return=h,Q=f;else for(;Q!==null;){h=Q;var m=h.sibling,v=h.return;if(k0(h),h===c){Q=null;break}if(m!==null){m.return=v,Q=m;break}Q=v}}}var A=s.alternate;if(A!==null){var P=A.child;if(P!==null){A.child=null;do{var C=P.sibling;P.sibling=null,P=C}while(P!==null)}}Q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Q=o;else e:for(;Q!==null;){if(s=Q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:rl(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,Q=E;break e}Q=s.return}}var _=t.current;for(Q=_;Q!==null;){o=Q;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,Q=w;else e:for(o=_;Q!==null;){if(a=Q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Hh(9,a)}}catch(L){Le(a,a.return,L)}if(a===o){Q=null;break e}var N=a.sibling;if(N!==null){N.return=a.return,Q=N;break e}Q=a.return}}if(le=i,Ei(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(Uh,t)}catch{}r=!0}return r}finally{de=n,pn.transition=e}}return!1}function Ew(t,e,n){e=So(n,e),e=_0(t,e,1),t=ei(t,e,1),e=Vt(),t!==null&&(nu(t,1,e),Yt(t,e))}function Le(t,e,n){if(t.tag===3)Ew(t,t,n);else for(;e!==null;){if(e.tag===3){Ew(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ti===null||!ti.has(r))){t=So(n,t),t=y0(e,t,1),e=ei(e,t,1),t=Vt(),e!==null&&(nu(e,1,t),Yt(e,t));break}}e=e.return}}function Tb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Vt(),t.pingedLanes|=t.suspendedLanes&n,st===t&&(gt&n)===n&&(Xe===4||Xe===3&&(gt&130023424)===gt&&500>qe()-Rg?Qi(t,0):Sg|=n),Yt(t,e)}function F0(t,e){e===0&&(t.mode&1?(e=Yu,Yu<<=1,!(Yu&130023424)&&(Yu=4194304)):e=1);var n=Vt();t=gr(t,e),t!==null&&(nu(t,e,n),Yt(t,n))}function Sb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),F0(t,n)}function Rb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),F0(t,n)}var U0;U0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Kt.current)qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return qt=!1,db(t,e,n);qt=!!(t.flags&131072)}else qt=!1,Se&&e.flags&1048576&&$T(e,rh,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Pc(t,e),t=e.pendingProps;var i=wo(e,Pt.current);uo(e,n),i=yg(null,e,r,t,i,n);var s=vg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qt(r)?(s=!0,th(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fg(e),i.updater=Gh,e.stateNode=i,i._reactInternals=e,Vp(e,r,t,n),e=Fp(null,e,r,!0,s,n)):(e.tag=0,Se&&s&&og(e),xt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Pc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Pb(r),t=Tn(r,t),i){case 0:e=Mp(null,e,r,t,n);break e;case 1:e=dw(null,e,r,t,n);break e;case 11:e=cw(null,e,r,t,n);break e;case 14:e=hw(null,e,r,Tn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tn(r,i),Mp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tn(r,i),dw(t,e,r,i,n);case 3:e:{if(E0(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,QT(t,e),oh(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=So(Error(B(423)),e),e=fw(t,e,r,n,i);break e}else if(r!==i){i=So(Error(B(424)),e),e=fw(t,e,r,n,i);break e}else for(en=Zr(e.stateNode.containerInfo.firstChild),nn=e,Se=!0,Rn=null,n=HT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Io(),r===i){e=_r(t,e,n);break e}xt(t,e,r,n)}e=e.child}return e;case 5:return YT(e),t===null&&Np(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Pp(r,i)?o=null:s!==null&&Pp(r,s)&&(e.flags|=32),I0(t,e),xt(t,e,o,n),e.child;case 6:return t===null&&Np(e),null;case 13:return T0(t,e,n);case 4:return pg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Eo(e,null,r,n):xt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tn(r,i),cw(t,e,r,i,n);case 7:return xt(t,e,e.pendingProps,n),e.child;case 8:return xt(t,e,e.pendingProps.children,n),e.child;case 12:return xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,_e(ih,r._currentValue),r._currentValue=o,s!==null)if(Cn(s.value,o)){if(s.children===i.children&&!Kt.current){e=_r(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=hr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Dp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Dp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}xt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,uo(e,n),i=gn(i),r=r(i),e.flags|=1,xt(t,e,r,n),e.child;case 14:return r=e.type,i=Tn(r,e.pendingProps),i=Tn(r.type,i),hw(t,e,r,i,n);case 15:return v0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tn(r,i),Pc(t,e),e.tag=1,Qt(r)?(t=!0,th(e)):t=!1,uo(e,n),g0(e,r,i),Vp(e,r,i,n),Fp(null,e,r,!0,t,n);case 19:return S0(t,e,n);case 22:return w0(t,e,n)}throw Error(B(156,e.tag))};function B0(t,e){return fT(t,e)}function Ab(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(t,e,n,r){return new Ab(t,e,n,r)}function Cg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Pb(t){if(typeof t=="function")return Cg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Km)return 11;if(t===Qm)return 14}return 2}function ri(t,e){var n=t.alternate;return n===null?(n=hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Cg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hs:return Yi(n.children,i,s,e);case Hm:o=8,i|=8;break;case sp:return t=hn(12,n,e,i|2),t.elementType=sp,t.lanes=s,t;case op:return t=hn(13,n,e,i),t.elementType=op,t.lanes=s,t;case ap:return t=hn(19,n,e,i),t.elementType=ap,t.lanes=s,t;case YE:return Qh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case KE:o=10;break e;case QE:o=9;break e;case Km:o=11;break e;case Qm:o=14;break e;case Ur:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=hn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Yi(t,e,n,r){return t=hn(7,t,r,e),t.lanes=n,t}function Qh(t,e,n,r){return t=hn(22,t,r,e),t.elementType=YE,t.lanes=n,t.stateNode={isHidden:!1},t}function Vf(t,e,n){return t=hn(6,t,null,e),t.lanes=n,t}function Lf(t,e,n){return e=hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function kb(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gf(0),this.expirationTimes=gf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bg(t,e,n,r,i,s,o,a,l){return t=new kb(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=hn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fg(s),t}function Cb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function j0(t){if(!t)return li;t=t._reactInternals;e:{if(ws(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Qt(n))return jT(t,n,e)}return e}function z0(t,e,n,r,i,s,o,a,l){return t=bg(n,r,!0,t,i,s,o,a,l),t.context=j0(null),n=t.current,r=Vt(),i=ni(n),s=hr(r,i),s.callback=e??null,ei(n,s,i),t.current.lanes=i,nu(t,i,r),Yt(t,r),t}function Yh(t,e,n,r){var i=e.current,s=Vt(),o=ni(i);return n=j0(n),e.context===null?e.context=n:e.pendingContext=n,e=hr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ei(i,e,o),t!==null&&(kn(t,i,o,s),Sc(t,i,o)),o}function ph(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Tw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function xg(t,e){Tw(t,e),(t=t.alternate)&&Tw(t,e)}function bb(){return null}var $0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ng(t){this._internalRoot=t}Jh.prototype.render=Ng.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));Yh(t,e,null,null)};Jh.prototype.unmount=Ng.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ss(function(){Yh(null,t,null,null)}),e[mr]=null}};function Jh(t){this._internalRoot=t}Jh.prototype.unstable_scheduleHydration=function(t){if(t){var e=wT();t={blockedOn:null,target:t,priority:e};for(var n=0;n<jr.length&&e!==0&&e<jr[n].priority;n++);jr.splice(n,0,t),n===0&&ET(t)}};function Dg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Sw(){}function xb(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ph(o);s.call(c)}}var o=z0(e,r,t,0,null,!1,!1,"",Sw);return t._reactRootContainer=o,t[mr]=o.current,Sl(t.nodeType===8?t.parentNode:t),ss(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ph(l);a.call(c)}}var l=bg(t,0,!1,null,null,!1,!1,"",Sw);return t._reactRootContainer=l,t[mr]=l.current,Sl(t.nodeType===8?t.parentNode:t),ss(function(){Yh(e,l,n,r)}),l}function Zh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ph(o);a.call(l)}}Yh(e,o,t,i)}else o=xb(n,e,t,i,r);return ph(o)}yT=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=za(e.pendingLanes);n!==0&&(Xm(e,n|1),Yt(e,qe()),!(le&6)&&(Ro=qe()+500,Ei()))}break;case 13:ss(function(){var r=gr(t,1);if(r!==null){var i=Vt();kn(r,t,1,i)}}),xg(t,1)}};Zm=function(t){if(t.tag===13){var e=gr(t,134217728);if(e!==null){var n=Vt();kn(e,t,134217728,n)}xg(t,134217728)}};vT=function(t){if(t.tag===13){var e=ni(t),n=gr(t,e);if(n!==null){var r=Vt();kn(n,t,e,r)}xg(t,e)}};wT=function(){return de};IT=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};_p=function(t,e,n){switch(e){case"input":if(cp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=$h(r);if(!i)throw Error(B(90));XE(r),cp(r,i)}}}break;case"textarea":eT(t,n);break;case"select":e=n.value,e!=null&&so(t,!!n.multiple,e,!1)}};aT=Ag;lT=ss;var Nb={usingClientEntryPoint:!1,Events:[iu,Js,$h,sT,oT,Ag]},ba={findFiberByHostInstance:$i,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Db={bundleType:ba.bundleType,version:ba.version,rendererPackageName:ba.rendererPackageName,rendererConfig:ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=hT(t),t===null?null:t.stateNode},findFiberByHostInstance:ba.findFiberByHostInstance||bb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{Uh=ac.inject(Db),$n=ac}catch{}}an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nb;an.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dg(e))throw Error(B(200));return Cb(t,e,null,n)};an.createRoot=function(t,e){if(!Dg(t))throw Error(B(299));var n=!1,r="",i=$0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=bg(t,1,!1,null,null,n,!1,r,i),t[mr]=e.current,Sl(t.nodeType===8?t.parentNode:t),new Ng(e)};an.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=hT(e),t=t===null?null:t.stateNode,t};an.flushSync=function(t){return ss(t)};an.hydrate=function(t,e,n){if(!Xh(e))throw Error(B(200));return Zh(null,t,e,!0,n)};an.hydrateRoot=function(t,e,n){if(!Dg(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=$0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=z0(e,null,t,1,n??null,i,!1,s,o),t[mr]=e.current,Sl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Jh(e)};an.render=function(t,e,n){if(!Xh(e))throw Error(B(200));return Zh(null,t,e,!1,n)};an.unmountComponentAtNode=function(t){if(!Xh(t))throw Error(B(40));return t._reactRootContainer?(ss(function(){Zh(null,null,t,!1,function(){t._reactRootContainer=null,t[mr]=null})}),!0):!1};an.unstable_batchedUpdates=Ag;an.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Xh(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Zh(t,e,n,!1,r)};an.version="18.3.1-next-f1338f8080-20240426";function q0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(q0)}catch(t){console.error(t)}}q0(),qE.exports=an;var Ob=qE.exports,W0,Rw=Ob;W0=rp.createRoot=Rw.createRoot,rp.hydrateRoot=Rw.hydrateRoot;var Aw={};/**
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
 */const G0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Vb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},H0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,v=c&63;l||(v=64,o||(m=64)),r.push(n[h],n[f],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(G0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Vb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new Lb;const m=s<<2|a>>4;if(r.push(m),c!==64){const v=a<<4&240|c>>2;if(r.push(v),f!==64){const A=c<<6&192|f;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Lb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Mb=function(t){const e=G0(t);return H0.encodeByteArray(e,!0)},mh=function(t){return Mb(t).replace(/\./g,"")},K0=function(t){try{return H0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function gh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Fb(n)||(t[n]=gh(t[n],e[n]));return t}function Fb(t){return t!=="__proto__"}/**
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
 */function Ub(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Bb=()=>Ub().__FIREBASE_DEFAULTS__,jb=()=>{if(typeof process>"u"||typeof Aw>"u")return;const t=Aw.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&K0(t[1]);return e&&JSON.parse(e)},ed=()=>{try{return Bb()||jb()||zb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Q0=t=>{var e,n;return(n=(e=ed())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$b=t=>{const e=Q0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Y0=()=>{var t;return(t=ed())===null||t===void 0?void 0:t.config},J0=t=>{var e;return(e=ed())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class qb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function X0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[mh(JSON.stringify(n)),mh(JSON.stringify(o)),""].join(".")}/**
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
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function Og(){var t;const e=(t=ed())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Z0(){return typeof self=="object"&&self.self===self}function eS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tS(){const t=ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nS(){return!Og()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Dl(){try{return typeof indexedDB=="object"}catch{return!1}}function Gb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Hb="FirebaseError";class At extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Hb,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Is.prototype.create)}}class Is{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Kb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new At(i,a,r)}}function Kb(t,e){return t.replace(Qb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Qb=/\{\$([^}]+)}/g;/**
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
 */function Pw(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Yb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ao(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(kw(s)&&kw(o)){if(!Ao(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function kw(t){return t!==null&&typeof t=="object"}/**
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
 */function Ko(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function io(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function qa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function rS(t,e){const n=new Jb(t,e);return n.subscribe.bind(n)}class Jb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Xb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Mf),i.error===void 0&&(i.error=Mf),i.complete===void 0&&(i.complete=Mf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Mf(){}/**
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
 */function Y(t){return t&&t._delegate?t._delegate:t}class yn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Li="[DEFAULT]";/**
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
 */class Zb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new qb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tx(e))try{this.getOrInitializeService({instanceIdentifier:Li})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Li){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Li){return this.instances.has(e)}getOptions(e=Li){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ex(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Li){return this.component?this.component.multipleInstances?e:Li:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ex(t){return t===Li?void 0:t}function tx(t){return t.instantiationMode==="EAGER"}/**
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
 */class iS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Zb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Lg=[];var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const sS={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},nx=re.INFO,rx={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},ix=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=rx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class td{constructor(e){this.name=e,this._logLevel=nx,this._logHandler=ix,this._userLogHandler=null,Lg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}function sx(t){Lg.forEach(e=>{e.setLogLevel(t)})}function ox(t,e){for(const n of Lg){let r=null;e&&e.level&&(r=sS[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:re[s].toLowerCase(),message:a,args:o,type:i.name})}}}const ax=(t,e)=>e.some(n=>t instanceof n);let Cw,bw;function lx(){return Cw||(Cw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ux(){return bw||(bw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oS=new WeakMap,Yp=new WeakMap,aS=new WeakMap,Ff=new WeakMap,Mg=new WeakMap;function cx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ii(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&oS.set(n,t)}).catch(()=>{}),Mg.set(e,t),e}function hx(t){if(Yp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Yp.set(t,e)}let Jp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||aS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ii(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dx(t){Jp=t(Jp)}function fx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Uf(this),e,...n);return aS.set(r,e.sort?e.sort():[e]),ii(r)}:ux().includes(t)?function(...e){return t.apply(Uf(this),e),ii(oS.get(this))}:function(...e){return ii(t.apply(Uf(this),e))}}function px(t){return typeof t=="function"?fx(t):(t instanceof IDBTransaction&&hx(t),ax(t,lx())?new Proxy(t,Jp):t)}function ii(t){if(t instanceof IDBRequest)return cx(t);if(Ff.has(t))return Ff.get(t);const e=px(t);return e!==t&&(Ff.set(t,e),Mg.set(e,t)),e}const Uf=t=>Mg.get(t);function mx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ii(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ii(o.result),l.oldVersion,l.newVersion,ii(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const gx=["get","getKey","getAll","getAllKeys","count"],_x=["put","add","delete","clear"],Bf=new Map;function xw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bf.get(e))return Bf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=_x.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||gx.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Bf.set(e,s),s}dx(t=>({...t,get:(e,n,r)=>xw(e,n)||t.get(e,n,r),has:(e,n)=>!!xw(e,n)||t.has(e,n)}));/**
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
 */class yx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _h="@firebase/app",Xp="0.10.5";/**
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
 */const os=new td("@firebase/app"),wx="@firebase/app-compat",Ix="@firebase/analytics-compat",Ex="@firebase/analytics",Tx="@firebase/app-check-compat",Sx="@firebase/app-check",Rx="@firebase/auth",Ax="@firebase/auth-compat",Px="@firebase/database",kx="@firebase/database-compat",Cx="@firebase/functions",bx="@firebase/functions-compat",xx="@firebase/installations",Nx="@firebase/installations-compat",Dx="@firebase/messaging",Ox="@firebase/messaging-compat",Vx="@firebase/performance",Lx="@firebase/performance-compat",Mx="@firebase/remote-config",Fx="@firebase/remote-config-compat",Ux="@firebase/storage",Bx="@firebase/storage-compat",jx="@firebase/firestore",zx="@firebase/vertexai-preview",$x="@firebase/firestore-compat",qx="firebase",Wx="10.12.2";/**
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
 */const ui="[DEFAULT]",Gx={[_h]:"fire-core",[wx]:"fire-core-compat",[Ex]:"fire-analytics",[Ix]:"fire-analytics-compat",[Sx]:"fire-app-check",[Tx]:"fire-app-check-compat",[Rx]:"fire-auth",[Ax]:"fire-auth-compat",[Px]:"fire-rtdb",[kx]:"fire-rtdb-compat",[Cx]:"fire-fn",[bx]:"fire-fn-compat",[xx]:"fire-iid",[Nx]:"fire-iid-compat",[Dx]:"fire-fcm",[Ox]:"fire-fcm-compat",[Vx]:"fire-perf",[Lx]:"fire-perf-compat",[Mx]:"fire-rc",[Fx]:"fire-rc-compat",[Ux]:"fire-gcs",[Bx]:"fire-gcs-compat",[jx]:"fire-fst",[$x]:"fire-fst-compat",[zx]:"fire-vertex","fire-js":"fire-js",[qx]:"fire-js-all"};/**
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
 */const ci=new Map,Po=new Map,ko=new Map;function Ol(t,e){try{t.container.addComponent(e)}catch(n){os.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lS(t,e){t.container.addOrOverwriteComponent(e)}function yr(t){const e=t.name;if(ko.has(e))return os.debug(`There were multiple attempts to register component ${e}.`),!1;ko.set(e,t);for(const n of ci.values())Ol(n,t);for(const n of Po.values())Ol(n,t);return!0}function ou(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Hx(t,e,n=ui){ou(t,e).clearInstance(n)}function uS(t){return t.options!==void 0}function Fe(t){return t.settings!==void 0}function Kx(){ko.clear()}/**
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
 */const Qx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mn=new Is("app","Firebase",Qx);/**
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
 */let cS=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mn.create("app-deleted",{appName:this._name})}};/**
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
 */class Yx extends cS{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()}),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,rn(_h,Xp,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Bg(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw mn.create("server-app-deleted")}}/**
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
 */const Tr=Wx;function Fg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ui,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mn.create("bad-app-name",{appName:String(i)});if(n||(n=Y0()),!n)throw mn.create("no-options");const s=ci.get(i);if(s){if(Ao(n,s.options)&&Ao(r,s.config))return s;throw mn.create("duplicate-app",{appName:i})}const o=new iS(i);for(const l of ko.values())o.addComponent(l);const a=new cS(n,r,o);return ci.set(i,a),a}function Jx(t,e){if(Z0())throw mn.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;uS(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((h,f)=>Math.imul(31,h)+f.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw mn.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=Po.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new iS(s);for(const c of ko.values())a.addComponent(c);const l=new Yx(n,e,s,a);return Po.set(s,l),l}function Ug(t=ui){const e=ci.get(t);if(!e&&t===ui&&Y0())return Fg();if(!e)throw mn.create("no-app",{appName:t});return e}function Xx(){return Array.from(ci.values())}async function Bg(t){let e=!1;const n=t.name;ci.has(n)?(e=!0,ci.delete(n)):Po.has(n)&&t.decRefCount()<=0&&(Po.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function rn(t,e,n){var r;let i=(r=Gx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),os.warn(a.join(" "));return}yr(new yn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function hS(t,e){if(t!==null&&typeof t!="function")throw mn.create("invalid-log-argument");ox(t,e)}function dS(t){sx(t)}/**
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
 */const Zx="firebase-heartbeat-database",eN=1,Vl="firebase-heartbeat-store";let jf=null;function fS(){return jf||(jf=mx(Zx,eN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Vl)}catch(n){console.warn(n)}}}}).catch(t=>{throw mn.create("idb-open",{originalErrorMessage:t.message})})),jf}async function tN(t){try{const n=(await fS()).transaction(Vl),r=await n.objectStore(Vl).get(pS(t));return await n.done,r}catch(e){if(e instanceof At)os.warn(e.message);else{const n=mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});os.warn(n.message)}}}async function Nw(t,e){try{const r=(await fS()).transaction(Vl,"readwrite");await r.objectStore(Vl).put(e,pS(t)),await r.done}catch(n){if(n instanceof At)os.warn(n.message);else{const r=mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});os.warn(r.message)}}}function pS(t){return`${t.name}!${t.options.appId}`}/**
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
 */const nN=1024,rN=30*24*60*60*1e3;class iN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Dw();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=rN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Dw(),{heartbeatsToSend:r,unsentEntries:i}=sN(this._heartbeatsCache.heartbeats),s=mh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Dw(){return new Date().toISOString().substring(0,10)}function sN(t,e=nN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ow(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ow(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class oN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dl()?Gb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ow(t){return mh(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function aN(t){yr(new yn("platform-logger",e=>new yx(e),"PRIVATE")),yr(new yn("heartbeat",e=>new iN(e),"PRIVATE")),rn(_h,Xp,t),rn(_h,Xp,"esm2017"),rn("fire-js","")}aN("");const lN=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:At,SDK_VERSION:Tr,_DEFAULT_ENTRY_NAME:ui,_addComponent:Ol,_addOrOverwriteComponent:lS,_apps:ci,_clearComponents:Kx,_components:ko,_getProvider:ou,_isFirebaseApp:uS,_isFirebaseServerApp:Fe,_registerComponent:yr,_removeServiceInstance:Hx,_serverApps:Po,deleteApp:Bg,getApp:Ug,getApps:Xx,initializeApp:Fg,initializeServerApp:Jx,onLog:hS,registerVersion:rn,setLogLevel:dS},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e,n){this._delegate=e,this.firebase=n,Ol(e,new yn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Bg(this._delegate)))}_getService(e,n=ui){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=ui){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Ol(this._delegate,e)}_addOrOverwriteComponent(e){lS(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const cN={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Vw=new Is("app-compat","Firebase",cN);/**
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
 */function hN(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:rn,setLogLevel:dS,onLog:hS,apps:null,SDK_VERSION:Tr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:lN}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||ui,!Pw(e,c))throw Vw.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,h={}){const f=Fg(c,h);if(Pw(e,f.name))return e[f.name];const m=new t(f,n);return e[f.name]=m,m}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const h=c.name,f=h.replace("-compat","");if(yr(c)&&c.type==="PUBLIC"){const m=(v=i())=>{if(typeof v[f]!="function")throw Vw.create("invalid-app-argument",{appName:h});return v[f]()};c.serviceProps!==void 0&&gh(m,c.serviceProps),n[f]=m,t.prototype[f]=function(...v){return this._getService.bind(this,h).apply(this,c.multipleInstances?v:[])}}return c.type==="PUBLIC"?n[f]:null}function l(c,h){return h==="serverAuth"?null:h}return n}/**
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
 */function mS(){const t=hN(uN);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:mS,extendNamespace:e,createSubscribe:rS,ErrorFactory:Is,deepExtend:gh});function e(n){gh(t,n)}return t}const dN=mS();/**
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
 */const Lw=new td("@firebase/app-compat"),fN="@firebase/app-compat",pN="0.2.35";/**
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
 */function mN(t){rn(fN,pN,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Z0()&&self.firebase!==void 0){Lw.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Lw.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const fe=dN;mN();var gN="firebase",_N="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fe.registerVersion(gN,_N,"app-compat");function jg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const xa={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Vs={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yN(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function gS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vN=yN,wN=gS,_S=new Is("auth","Firebase",gS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh=new td("@firebase/auth");function IN(t,...e){yh.logLevel<=re.WARN&&yh.warn(`Auth (${Tr}): ${t}`,...e)}function xc(t,...e){yh.logLevel<=re.ERROR&&yh.error(`Auth (${Tr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t,...e){throw $g(t,...e)}function Ze(t,...e){return $g(t,...e)}function zg(t,e,n){const r=Object.assign(Object.assign({},wN()),{[e]:n});return new Is("auth","Firebase",r).create(e,{appName:t.name})}function ot(t){return zg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qo(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&lt(t,"argument-error"),zg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $g(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _S.create(t,...e)}function j(t,e,...n){if(!t)throw $g(e,...n)}function Bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xc(e),new Error(e)}function bn(t,e){t||Bn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qg(){return Mw()==="http:"||Mw()==="https:"}function Mw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qg()||eS()||"connection"in navigator)?navigator.onLine:!0}function TN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n){this.shortDelay=e,this.longDelay=n,bn(n>e,"Short delay should be less than long delay!"),this.isMobile=Wb()||Vg()}get(){return EN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t,e){bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN=new au(3e4,6e4);function je(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ze(t,e,n,r,i={}){return vS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ko(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),yS.fetch()(wS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function vS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},SN),e);try{const i=new PN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Wa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Wa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Wa(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw zg(t,h,c);lt(t,h)}}catch(i){if(i instanceof At)throw i;lt(t,"network-request-failed",{message:String(i)})}}async function Sr(t,e,n,r,i={}){const s=await ze(t,e,n,r,i);return"mfaPendingCredential"in s&&lt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function wS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Wg(t.config,i):`${t.config.apiScheme}://${i}`}function AN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class PN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ze(this.auth,"network-request-failed")),RN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ze(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(t){return t!==void 0&&t.getResponse!==void 0}function Uw(t){return t!==void 0&&t.enterprise!==void 0}class kN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return AN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CN(t){return(await ze(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function bN(t,e){return ze(t,"GET","/v2/recaptchaConfig",je(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xN(t,e){return ze(t,"POST","/v1/accounts:delete",e)}async function NN(t,e){return ze(t,"POST","/v1/accounts:update",e)}async function IS(t,e){return ze(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function DN(t,e=!1){const n=Y(t),r=await n.getIdToken(e),i=nd(r);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ol(zf(i.auth_time)),issuedAtTime:ol(zf(i.iat)),expirationTime:ol(zf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function zf(t){return Number(t)*1e3}function nd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xc("JWT malformed, contained fewer than 3 sections"),null;try{const i=K0(n);return i?JSON.parse(i):(xc("Failed to decode base64 JWT payload"),null)}catch(i){return xc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Bw(t){const e=nd(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof At&&ON(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ON({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ol(this.lastLoginAt),this.creationTime=ol(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ml(t){var e;const n=t.auth,r=await t.getIdToken(),i=await vr(t,IS(n,{idToken:r}));j(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ES(s.providerUserInfo):[],a=MN(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Zp(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function LN(t){const e=Y(t);await Ml(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ES(t){return t.map(e=>{var{providerId:n}=e,r=jg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FN(t,e){const n=await vS(t,{},async()=>{const r=Ko({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=wS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",yS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function UN(t,e){return ze(t,"POST","/v2/accounts:revokeToken",je(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){j(e.length!==0,"internal-error");const n=Bw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await FN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ho;return r&&(j(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(j(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(j(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ho,this.toJSON())}_performRefresh(){return Bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class lr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=jg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new VN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Zp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await vr(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return DN(this,e)}reload(){return LN(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new lr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ml(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Fe(this.auth.app))return Promise.reject(ot(this.auth));const e=await this.getIdToken();return await vr(this,xN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:w,emailVerified:N,isAnonymous:L,providerData:M,stsTokenManager:I}=n;j(w&&I,e,"internal-error");const y=ho.fromJSON(this.name,I);j(typeof w=="string",e,"internal-error"),Vr(f,e.name),Vr(m,e.name),j(typeof N=="boolean",e,"internal-error"),j(typeof L=="boolean",e,"internal-error"),Vr(v,e.name),Vr(A,e.name),Vr(P,e.name),Vr(C,e.name),Vr(E,e.name),Vr(_,e.name);const T=new lr({uid:w,auth:e,email:m,emailVerified:N,displayName:f,isAnonymous:L,photoURL:A,phoneNumber:v,tenantId:P,stsTokenManager:y,createdAt:E,lastLoginAt:_});return M&&Array.isArray(M)&&(T.providerData=M.map(R=>Object.assign({},R))),C&&(T._redirectEventId=C),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new ho;i.updateFromServerResponse(n);const s=new lr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ml(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];j(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?ES(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ho;a.updateFromIdToken(r);const l=new lr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Zp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw=new Map;function tn(t){bn(t instanceof Function,"Expected a class definition");let e=jw.get(t);return e?(bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jw.set(t,e),e)}/**
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
 */class TS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}TS.type="NONE";const Co=TS;/**
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
 */function Ji(t,e,n){return`firebase:${t}:${e}:${n}`}class fo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ji(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ji("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?lr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fo(tn(Co),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||tn(Co);const o=Ji(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=lr._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new fo(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new fo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(AS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(SS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(PS(e))return"Blackberry";if(kS(e))return"Webos";if(Gg(e))return"Safari";if((e.includes("chrome/")||RS(e))&&!e.includes("edge/"))return"Chrome";if(lu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function SS(t=ke()){return/firefox\//i.test(t)}function Gg(t=ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function RS(t=ke()){return/crios\//i.test(t)}function AS(t=ke()){return/iemobile/i.test(t)}function lu(t=ke()){return/android/i.test(t)}function PS(t=ke()){return/blackberry/i.test(t)}function kS(t=ke()){return/webos/i.test(t)}function Yo(t=ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function BN(t=ke()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function jN(t=ke()){var e;return Yo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zN(){return tS()&&document.documentMode===10}function CS(t=ke()){return Yo(t)||lu(t)||kS(t)||PS(t)||/windows phone/i.test(t)||AS(t)}function $N(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(t,e=[]){let n;switch(t){case"Browser":n=zw(ke());break;case"Worker":n=`${zw(ke())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Tr}/${r}`}/**
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
 */class qN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function WN(t,e={}){return ze(t,"GET","/v2/passwordPolicy",je(t,e))}/**
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
 */const GN=6;class HN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:GN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $w(this),this.idTokenSubscription=new $w(this),this.beforeStateQueue=new qN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_S,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await fo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await IS(this,{idToken:e}),r=await lr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Fe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ml(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Fe(this.app))return Promise.reject(ot(this));const n=e?Y(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Fe(this.app)?Promise.reject(ot(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Fe(this.app)?Promise.reject(ot(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WN(this),n=new HN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Is("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await UN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tn(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await fo.create(this,[tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&IN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ue(t){return Y(t)}class $w{constructor(e){this.auth=e,this.observer=null,this.addObserver=rS(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function QN(t){uu=t}function Hg(t){return uu.loadJS(t)}function YN(){return uu.recaptchaV2Script}function JN(){return uu.recaptchaEnterpriseScript}function XN(){return uu.gapiScript}function xS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ZN="recaptcha-enterprise",eD="NO_RECAPTCHA";class tD{constructor(e){this.type=ZN,this.auth=Ue(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{bN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new kN(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Uw(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(eD)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Uw(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=JN();l.length!==0&&(l+=a),Hg(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function qw(t,e,n,r=!1){const i=new tD(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Fl(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await qw(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await qw(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nD(t,e){const n=ou(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ao(s,e??{}))return i;lt(i,"already-initialized")}return n.initialize({options:e})}function rD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function NS(t,e,n){const r=Ue(t);j(r._canInitEmulator,r,"emulator-config-failed"),j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=DS(e),{host:o,port:a}=iD(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||sD()}function DS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function iD(t){const e=DS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ww(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ww(o)}}}function Ww(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function sD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Bn("not implemented")}_getIdTokenResponse(e){return Bn("not implemented")}_linkToIdToken(e,n){return Bn("not implemented")}_getReauthenticationResolver(e){return Bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OS(t,e){return ze(t,"POST","/v1/accounts:resetPassword",je(t,e))}async function oD(t,e){return ze(t,"POST","/v1/accounts:update",e)}async function aD(t,e){return ze(t,"POST","/v1/accounts:signUp",e)}async function lD(t,e){return ze(t,"POST","/v1/accounts:update",je(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uD(t,e){return Sr(t,"POST","/v1/accounts:signInWithPassword",je(t,e))}async function rd(t,e){return ze(t,"POST","/v1/accounts:sendOobCode",je(t,e))}async function cD(t,e){return rd(t,e)}async function hD(t,e){return rd(t,e)}async function dD(t,e){return rd(t,e)}async function fD(t,e){return rd(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pD(t,e){return Sr(t,"POST","/v1/accounts:signInWithEmailLink",je(t,e))}async function mD(t,e){return Sr(t,"POST","/v1/accounts:signInWithEmailLink",je(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul extends Jo{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ul(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ul(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fl(e,n,"signInWithPassword",uD);case"emailLink":return pD(e,{email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fl(e,r,"signUpPassword",aD);case"emailLink":return mD(e,{idToken:n,email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dr(t,e){return Sr(t,"POST","/v1/accounts:signInWithIdp",je(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD="http://localhost";class Kn extends Jo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Kn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=jg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Kn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return dr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,dr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,dr(e,n)}buildRequest(){const e={requestUri:gD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ko(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _D(t,e){return ze(t,"POST","/v1/accounts:sendVerificationCode",je(t,e))}async function yD(t,e){return Sr(t,"POST","/v1/accounts:signInWithPhoneNumber",je(t,e))}async function vD(t,e){const n=await Sr(t,"POST","/v1/accounts:signInWithPhoneNumber",je(t,e));if(n.temporaryProof)throw Wa(t,"account-exists-with-different-credential",n);return n}const wD={USER_NOT_FOUND:"user-not-found"};async function ID(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Sr(t,"POST","/v1/accounts:signInWithPhoneNumber",je(t,n),wD)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi extends Jo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Xi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Xi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return yD(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return vD(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ID(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Xi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ED(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function TD(t){const e=io(qa(t)).link,n=e?io(qa(e)).deep_link_id:null,r=io(qa(t)).deep_link_id;return(r?io(qa(r)).link:null)||r||n||e||t}class id{constructor(e){var n,r,i,s,o,a;const l=io(qa(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,f=ED((i=l.mode)!==null&&i!==void 0?i:null);j(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=TD(e);try{return new id(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.providerId=Ti.PROVIDER_ID}static credential(e,n){return Ul._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=id.parseLink(n);return j(r,"argument-error"),Ul._fromEmailAndCode(e,r.code,r.tenantId)}}Ti.PROVIDER_ID="password";Ti.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ti.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xo extends Rr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class po extends Xo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return j("providerId"in n&&"signInMethod"in n,"argument-error"),Kn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return j(e.idToken||e.accessToken,"argument-error"),Kn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return po.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return po.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new po(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends Xo{constructor(){super("facebook.com")}static credential(e){return Kn._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Xo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Kn._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ln.credential(n,r)}catch{return null}}}Ln.GOOGLE_SIGN_IN_METHOD="google.com";Ln.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Xo{constructor(){super("github.com")}static credential(e){return Kn._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.GITHUB_SIGN_IN_METHOD="github.com";Mn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD="http://localhost";class bo extends Jo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return dr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,dr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,dr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new bo(r,s)}static _create(e,n){return new bo(e,n)}buildRequest(){return{requestUri:SD,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RD="saml.";class vh extends Rr{constructor(e){j(e.startsWith(RD),"argument-error"),super(e)}static credentialFromResult(e){return vh.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return vh.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=bo.fromJSON(e);return j(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return bo._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Xo{constructor(){super("twitter.com")}static credential(e,n){return Kn._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.TWITTER_SIGN_IN_METHOD="twitter.com";Fn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VS(t,e){return Sr(t,"POST","/v1/accounts:signUp",je(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await lr._fromIdTokenResponse(e,r,i),o=Gw(r);return new vn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Gw(r);return new vn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Gw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AD(t){var e;if(Fe(t.app))return Promise.reject(ot(t));const n=Ue(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new vn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await VS(n,{returnSecureToken:!0}),i=await vn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh extends At{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new wh(e,n,r,i)}}function LS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?wh._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function PD(t,e){const n=Y(t);await sd(!0,n,e);const{providerUserInfo:r}=await NN(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=MS(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Kg(t,e,n=!1){const r=await vr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vn._forOperation(t,"link",r)}async function sd(t,e,n){await Ml(e);const r=MS(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";j(r.has(n)===t,e.auth,i)}/**
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
 */async function FS(t,e,n=!1){const{auth:r}=t;if(Fe(r.app))return Promise.reject(ot(r));const i="reauthenticate";try{const s=await vr(t,LS(r,i,e,t),n);j(s.idToken,r,"internal-error");const o=nd(s.idToken);j(o,r,"internal-error");const{sub:a}=o;return j(t.uid===a,r,"user-mismatch"),vn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&lt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function US(t,e,n=!1){if(Fe(t.app))return Promise.reject(ot(t));const r="signIn",i=await LS(t,r,e),s=await vn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function od(t,e){return US(Ue(t),e)}async function BS(t,e){const n=Y(t);return await sd(!1,n,e.providerId),Kg(n,e)}async function jS(t,e){return FS(Y(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kD(t,e){return Sr(t,"POST","/v1/accounts:signInWithCustomToken",je(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CD(t,e){if(Fe(t.app))return Promise.reject(ot(t));const n=Ue(t),r=await kD(n,{token:e,returnSecureToken:!0}),i=await vn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Qg._fromServerResponse(e,n):"totpInfo"in n?Yg._fromServerResponse(e,n):lt(e,"internal-error")}}class Qg extends cu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Qg(n)}}class Yg extends cu{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Yg(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(t,e,n){var r;j(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),j(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(j(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(j(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jg(t){const e=Ue(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function bD(t,e,n){const r=Ue(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&ad(r,i,n),await Fl(r,i,"getOobCode",hD)}async function xD(t,e,n){await OS(Y(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Jg(t),r})}async function ND(t,e){await lD(Y(t),{oobCode:e})}async function zS(t,e){const n=Y(t),r=await OS(n,{oobCode:e}),i=r.requestType;switch(j(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":j(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":j(r.mfaInfo,n,"internal-error");default:j(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=cu._fromServerResponse(Ue(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function DD(t,e){const{data:n}=await zS(Y(t),e);return n.email}async function OD(t,e,n){if(Fe(t.app))return Promise.reject(ot(t));const r=Ue(t),o=await Fl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",VS).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Jg(t),l}),a=await vn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function VD(t,e,n){return Fe(t.app)?Promise.reject(ot(t)):od(Y(t),Ti.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Jg(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LD(t,e,n){const r=Ue(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){j(a.handleCodeInApp,r,"argument-error"),a&&ad(r,o,a)}s(i,n),await Fl(r,i,"getOobCode",dD)}function MD(t,e){const n=id.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function FD(t,e,n){if(Fe(t.app))return Promise.reject(ot(t));const r=Y(t),i=Ti.credentialWithLink(e,n||Ll());return j(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),od(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UD(t,e){return ze(t,"POST","/v1/accounts:createAuthUri",je(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BD(t,e){const n=qg()?Ll():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await UD(Y(t),r);return i||[]}async function jD(t,e){const n=Y(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&ad(n.auth,i,e);const{email:s}=await cD(n.auth,i);s!==t.email&&await t.reload()}async function zD(t,e,n){const r=Y(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&ad(r.auth,s,n);const{email:o}=await fD(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $D(t,e){return ze(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $S(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Y(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await vr(r,$D(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function qD(t,e){const n=Y(t);return Fe(n.auth.app)?Promise.reject(ot(n.auth)):qS(n,e,null)}function WD(t,e){return qS(Y(t),null,e)}async function qS(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await vr(t,oD(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function GD(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=nd(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new mo(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new HD(s,i);case"github.com":return new KD(s,i);case"google.com":return new QD(s,i);case"twitter.com":return new YD(s,i,t.screenName||null);case"custom":case"anonymous":return new mo(s,null);default:return new mo(s,r,i)}}class mo{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class WS extends mo{constructor(e,n,r,i){super(e,n,r),this.username=i}}class HD extends mo{constructor(e,n){super(e,"facebook.com",n)}}class KD extends WS{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class QD extends mo{constructor(e,n){super(e,"google.com",n)}}class YD extends WS{constructor(e,n,r){super(e,"twitter.com",n,r)}}function JD(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:GD(n)}function XD(t,e,n,r){return Y(t).onIdTokenChanged(e,n,r)}function ZD(t,e,n){return Y(t).beforeAuthStateChanged(e,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new Gi("enroll",e,n)}static _fromMfaPendingCredential(e){return new Gi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Gi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Gi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Ue(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>cu._fromServerResponse(r,a));j(i.mfaPendingCredential,r,"internal-error");const o=Gi._fromMfaPendingCredential(i.mfaPendingCredential);return new Xg(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const h=await vn._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(h.user),h;case"reauthenticate":return j(n.user,r,"internal-error"),vn._forOperation(n.user,n.operationType,c);default:lt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function eO(t,e){var n;const r=Y(t),i=e;return j(e.customData.operationType,r,"argument-error"),j((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Xg._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tO(t,e){return ze(t,"POST","/v2/accounts/mfaEnrollment:start",je(t,e))}function nO(t,e){return ze(t,"POST","/v2/accounts/mfaEnrollment:finalize",je(t,e))}function rO(t,e){return ze(t,"POST","/v2/accounts/mfaEnrollment:withdraw",je(t,e))}class Zg{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>cu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Zg(e)}async getSession(){return Gi._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await vr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await vr(this.user,rO(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const $f=new WeakMap;function iO(t){const e=Y(t);return $f.has(e)||$f.set(e,Zg._fromUser(e)),$f.get(e)}const Ih="__sak";/**
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
 */class GS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ih,"1"),this.storage.removeItem(Ih),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sO(){const t=ke();return Gg(t)||Yo(t)}const oO=1e3,aO=10;class HS extends GS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=sO()&&$N(),this.fallbackToPolling=CS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);zN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,aO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},oO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}HS.type="LOCAL";const ld=HS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS extends GS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}KS.type="SESSION";const hi=KS;/**
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
 */function lO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ud{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ud(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await lO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ud.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class uO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=hu("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return window}function cO(t){Ke().location.href=t}/**
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
 */function e_(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function hO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fO(){return e_()?self:null}/**
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
 */const QS="firebaseLocalStorageDb",pO=1,Eh="firebaseLocalStorage",YS="fbase_key";class du{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cd(t,e){return t.transaction([Eh],e?"readwrite":"readonly").objectStore(Eh)}function mO(){const t=indexedDB.deleteDatabase(QS);return new du(t).toPromise()}function em(){const t=indexedDB.open(QS,pO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Eh,{keyPath:YS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Eh)?e(r):(r.close(),await mO(),e(await em()))})})}async function Hw(t,e,n){const r=cd(t,!0).put({[YS]:e,value:n});return new du(r).toPromise()}async function gO(t,e){const n=cd(t,!1).get(e),r=await new du(n).toPromise();return r===void 0?null:r.value}function Kw(t,e){const n=cd(t,!0).delete(e);return new du(n).toPromise()}const _O=800,yO=3;class JS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await em(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>yO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return e_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ud._getInstance(fO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hO(),!this.activeServiceWorker)return;this.sender=new uO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await em();return await Hw(e,Ih,"1"),await Kw(e,Ih),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=cd(i,!1).getAll();return new du(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_O)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}JS.type="LOCAL";const xo=JS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vO(t,e){return ze(t,"POST","/v2/accounts/mfaSignIn:start",je(t,e))}function wO(t,e){return ze(t,"POST","/v2/accounts/mfaSignIn:finalize",je(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO=500,EO=6e4,lc=1e12;class TO{constructor(e){this.auth=e,this.counter=lc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new SO(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||lc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||lc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||lc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class SO{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;j(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=RO(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},EO)},IO))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function RO(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf=xS("rcb"),AO=new au(3e4,6e4);class PO{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ke().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return j(kO(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Fw(Ke().grecaptcha)?Promise.resolve(Ke().grecaptcha):new Promise((r,i)=>{const s=Ke().setTimeout(()=>{i(Ze(e,"network-request-failed"))},AO.get());Ke()[qf]=()=>{Ke().clearTimeout(s),delete Ke()[qf];const a=Ke().grecaptcha;if(!a||!Fw(a)){i(Ze(e,"internal-error"));return}const l=a.render;a.render=(c,h)=>{const f=l(c,h);return this.counter++,f},this.hostLanguage=n,r(a)};const o=`${YN()}?${Ko({onload:qf,render:"explicit",hl:n})}`;Hg(o).catch(()=>{clearTimeout(s),i(Ze(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Ke().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function kO(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class CO{async load(e){return new TO(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS="recaptcha",bO={theme:"light",type:"image"};let xO=class{constructor(e,n,r=Object.assign({},bO)){this.parameters=r,this.type=XS,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ue(e),this.isInvisible=this.parameters.size==="invisible",j(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;j(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new CO:new PO,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){j(!this.parameters.sitekey,this.auth,"argument-error"),j(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),j(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Ke()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){j(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){j(qg()&&!e_(),this.auth,"internal-error"),await NO(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await CN(this.auth);j(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return j(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function NO(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Xi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function DO(t,e,n){if(Fe(t.app))return Promise.reject(ot(t));const r=Ue(t),i=await hd(r,e,Y(n));return new t_(i,s=>od(r,s))}async function OO(t,e,n){const r=Y(t);await sd(!1,r,"phone");const i=await hd(r.auth,e,Y(n));return new t_(i,s=>BS(r,s))}async function VO(t,e,n){const r=Y(t);if(Fe(r.auth.app))return Promise.reject(ot(r.auth));const i=await hd(r.auth,e,Y(n));return new t_(i,s=>jS(r,s))}async function hd(t,e,n){var r;const i=await n.verify();try{j(typeof i=="string",t,"argument-error"),j(n.type===XS,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return j(o.type==="enroll",t,"internal-error"),(await tO(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{j(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return j(a,t,"missing-multi-factor-info"),(await vO(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await _D(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function LO(t,e){const n=Y(t);if(Fe(n.auth.app))return Promise.reject(ot(n.auth));await Kg(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let as=class Nc{constructor(e){this.providerId=Nc.PROVIDER_ID,this.auth=Ue(e)}verifyPhoneNumber(e,n){return hd(this.auth,e,Y(n))}static credential(e,n){return Xi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Nc.credentialFromTaggedObject(n)}static credentialFromError(e){return Nc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Xi._fromTokenResponse(n,r):null}};as.PROVIDER_ID="phone";as.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Es(t,e){return e?tn(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class n_ extends Jo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return dr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return dr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return dr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function MO(t){return US(t.auth,new n_(t),t.bypassAuthState)}function FO(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),FS(n,new n_(t),t.bypassAuthState)}async function UO(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),Kg(n,new n_(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return MO;case"linkViaPopup":case"linkViaRedirect":return UO;case"reauthViaPopup":case"reauthViaRedirect":return FO;default:lt(this.auth,"internal-error")}}resolve(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BO=new au(2e3,1e4);async function jO(t,e,n){if(Fe(t.app))return Promise.reject(Ze(t,"operation-not-supported-in-this-environment"));const r=Ue(t);Qo(t,e,Rr);const i=Es(r,n);return new ur(r,"signInViaPopup",e,i).executeNotNull()}async function zO(t,e,n){const r=Y(t);if(Fe(r.auth.app))return Promise.reject(Ze(r.auth,"operation-not-supported-in-this-environment"));Qo(r.auth,e,Rr);const i=Es(r.auth,n);return new ur(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function $O(t,e,n){const r=Y(t);Qo(r.auth,e,Rr);const i=Es(r.auth,n);return new ur(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class ur extends ZS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ur.currentPopupAction&&ur.currentPopupAction.cancel(),ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const e=hu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,BO.get())};e()}}ur.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qO="pendingRedirect",al=new Map;class WO extends ZS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=al.get(this.auth._key());if(!e){try{const r=await GO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}al.set(this.auth._key(),e)}return this.bypassAuthState||al.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function GO(t,e){const n=tR(e),r=eR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function r_(t,e){return eR(t)._set(tR(e),"true")}function HO(){al.clear()}function i_(t,e){al.set(t._key(),e)}function eR(t){return tn(t._redirectPersistence)}function tR(t){return Ji(qO,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KO(t,e,n){return QO(t,e,n)}async function QO(t,e,n){if(Fe(t.app))return Promise.reject(ot(t));const r=Ue(t);Qo(t,e,Rr),await r._initializationPromise;const i=Es(r,n);return await r_(i,r),i._openRedirect(r,e,"signInViaRedirect")}function YO(t,e,n){return JO(t,e,n)}async function JO(t,e,n){const r=Y(t);if(Qo(r.auth,e,Rr),Fe(r.auth.app))return Promise.reject(ot(r.auth));await r.auth._initializationPromise;const i=Es(r.auth,n);await r_(i,r.auth);const s=await nR(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function XO(t,e,n){return ZO(t,e,n)}async function ZO(t,e,n){const r=Y(t);Qo(r.auth,e,Rr),await r.auth._initializationPromise;const i=Es(r.auth,n);await sd(!1,r,e.providerId),await r_(i,r.auth);const s=await nR(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function eV(t,e){return await Ue(t)._initializationPromise,dd(t,e,!1)}async function dd(t,e,n=!1){if(Fe(t.app))return Promise.reject(ot(t));const r=Ue(t),i=Es(r,e),o=await new WO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function nR(t){const e=hu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tV=10*60*1e3;class rR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nV(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!iR(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ze(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tV&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qw(e))}saveEventToCache(e){this.cachedEventUids.add(Qw(e)),this.lastProcessedEventTime=Date.now()}}function Qw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function iR({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nV(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iR(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sR(t,e={}){return ze(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rV=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iV=/^https?/;async function sV(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sR(t);for(const n of e)try{if(oV(n))return}catch{}lt(t,"unauthorized-domain")}function oV(t){const e=Ll(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!iV.test(n))return!1;if(rV.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const aV=new au(3e4,6e4);function Yw(){const t=Ke().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lV(t){return new Promise((e,n)=>{var r,i,s;function o(){Yw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yw(),n(Ze(t,"network-request-failed"))},timeout:aV.get()})}if(!((i=(r=Ke().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ke().gapi)===null||s===void 0)&&s.load)o();else{const a=xS("iframefcb");return Ke()[a]=()=>{gapi.load?o():n(Ze(t,"network-request-failed"))},Hg(`${XN()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Dc=null,e})}let Dc=null;function uV(t){return Dc=Dc||lV(t),Dc}/**
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
 */const cV=new au(5e3,15e3),hV="__/auth/iframe",dV="emulator/auth/iframe",fV={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mV(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wg(e,dV):`https://${t.config.authDomain}/${hV}`,r={apiKey:e.apiKey,appName:t.name,v:Tr},i=pV.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ko(r).slice(1)}`}async function gV(t){const e=await uV(t),n=Ke().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:mV(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fV,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ze(t,"network-request-failed"),a=Ke().setTimeout(()=>{s(o)},cV.get());function l(){Ke().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const _V={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yV=500,vV=600,wV="_blank",IV="http://localhost";class Jw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function EV(t,e,n,r=yV,i=vV){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},_V),{width:r.toString(),height:i.toString(),top:s,left:o}),c=ke().toLowerCase();n&&(a=RS(c)?wV:n),SS(c)&&(e=e||IV,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[v,A])=>`${m}${v}=${A},`,"");if(jN(c)&&a!=="_self")return TV(e||"",a),new Jw(null);const f=window.open(e||"",a,h);j(f,t,"popup-blocked");try{f.focus()}catch{}return new Jw(f)}function TV(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const SV="__/auth/handler",RV="emulator/auth/handler",AV=encodeURIComponent("fac");async function tm(t,e,n,r,i,s){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Tr,eventId:i};if(e instanceof Rr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Yb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries(s||{}))o[h]=f}if(e instanceof Xo){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),c=l?`#${AV}=${encodeURIComponent(l)}`:"";return`${PV(t)}?${Ko(a).slice(1)}${c}`}function PV({config:t}){return t.emulator?Wg(t,RV):`https://${t.authDomain}/${SV}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf="webStorageSupport";class kV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hi,this._completeRedirectFn=dd,this._overrideRedirectResult=i_}async _openPopup(e,n,r,i){var s;bn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await tm(e,n,r,Ll(),i);return EV(e,o,hu())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await tm(e,n,r,Ll(),i);return cO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(bn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await gV(e),r=new rR(e);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wf,{type:Wf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Wf];o!==void 0&&n(!!o),lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sV(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return CS()||Gg()||Yo()}}const oR=kV;class CV{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Bn("unexpected MultiFactorSessionType")}}}class s_ extends CV{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new s_(e)}_finalizeEnroll(e,n,r){return nO(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return wO(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class aR{constructor(){}static assertion(e){return s_._fromCredential(e)}}aR.FACTOR_ID="phone";var Xw="@firebase/auth",Zw="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function NV(t){yr(new yn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bS(t)},c=new KN(r,i,s,l);return rD(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),yr(new yn("auth-internal",e=>{const n=Ue(e.getProvider("auth").getImmediate());return(r=>new bV(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(Xw,Zw,xV(t)),rn(Xw,Zw,"esm2017")}/**
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
 */const DV=5*60,OV=J0("authIdTokenMaxAge")||DV;let eI=null;const VV=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>OV)return;const i=n==null?void 0:n.token;eI!==i&&(eI=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function LV(t=Ug()){const e=ou(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nD(t,{popupRedirectResolver:oR,persistence:[xo,ld,hi]}),r=J0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=VV(s.toString());ZD(n,o,()=>o(n.currentUser)),XD(n,a=>o(a))}}const i=Q0("auth");return i&&NS(n,`http://${i}`),n}function MV(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}QN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ze("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",MV().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});NV("Browser");/**
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
 */function ls(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FV=2e3;async function UV(t,e,n){var r;const{BuildInfo:i}=ls();bn(e.sessionId,"AuthEvent did not contain a session ID");const s=await qV(e.sessionId),o={};return Yo()?o.ibi=i.packageName:lu()?o.apn=i.packageName:lt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,tm(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function BV(t){const{BuildInfo:e}=ls(),n={};Yo()?n.iosBundleId=e.packageName:lu()?n.androidPackageName=e.packageName:lt(t,"operation-not-supported-in-this-environment"),await sR(t,n)}function jV(t){const{cordova:e}=ls();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,BN()?"_blank":"_system","location=yes"),n(i)})})}async function zV(t,e,n){const{cordova:r}=ls();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var f;s();const m=(f=r.plugins.browsertab)===null||f===void 0?void 0:f.close;typeof m=="function"&&m(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function c(){a||(a=window.setTimeout(()=>{o(Ze(t,"redirect-cancelled-by-user"))},FV))}function h(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(l),document.addEventListener("resume",c,!1),lu()&&document.addEventListener("visibilitychange",h,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",h,!1),a&&window.clearTimeout(a)}})}finally{i()}}function $V(t){var e,n,r,i,s,o,a,l,c,h;const f=ls();j(typeof((e=f==null?void 0:f.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),j(typeof((n=f==null?void 0:f.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),j(typeof((s=(i=(r=f==null?void 0:f.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),j(typeof((l=(a=(o=f==null?void 0:f.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),j(typeof((h=(c=f==null?void 0:f.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||h===void 0?void 0:h.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function qV(t){const e=WV(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function WV(t){if(bn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GV=20;class HV extends rR{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function KV(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:JV(),postBody:null,tenantId:t.tenantId,error:Ze(t,"no-auth-event")}}function QV(t,e){return nm()._set(rm(t),e)}async function tI(t){const e=await nm()._get(rm(t));return e&&await nm()._remove(rm(t)),e}function YV(t,e){var n,r;const i=ZV(e);if(i.includes("/__/auth/callback")){const s=Oc(i),o=s.firebaseError?XV(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?Ze(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function JV(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<GV;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function nm(){return tn(ld)}function rm(t){return Ji("authEvent",t.config.apiKey,t.name)}function XV(t){try{return JSON.parse(t)}catch{return null}}function ZV(t){const e=Oc(t),n=e.link?decodeURIComponent(e.link):void 0,r=Oc(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Oc(i).link||i||r||n||t}function Oc(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return io(n.join("?"))}/**
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
 */const eL=500;class tL{constructor(){this._redirectPersistence=hi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=dd,this._overrideRedirectResult=i_}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new HV(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){lt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){$V(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),HO(),await this._originValidation(e);const o=KV(e,r,i);await QV(e,o);const a=await UV(e,o,n),l=await jV(a);return zV(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BV(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=ls(),o=setTimeout(async()=>{await tI(e),n.onEvent(nI())},eL),a=async h=>{clearTimeout(o);const f=await tI(e);let m=null;f&&(h!=null&&h.url)&&(m=YV(f,h.url)),n.onEvent(m||nI())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,c=`${s.packageName.toLowerCase()}://`;ls().handleOpenURL=async h=>{if(h.toLowerCase().startsWith(c)&&a({url:h}),typeof l=="function")try{l(h)}catch(f){console.error(f)}}}}const nL=tL;function nI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ze("no-auth-event")}}/**
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
 */function rL(t,e){Ue(t)._logFramework(e)}var iL="@firebase/auth-compat",sL="0.5.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oL=1e3;function ll(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function aL(){return ll()==="http:"||ll()==="https:"}function lR(t=ke()){return!!((ll()==="file:"||ll()==="ionic:"||ll()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function lL(){return Vg()||Og()}function uL(){return tS()&&(document==null?void 0:document.documentMode)===11}function cL(t=ke()){return/Edge\/\d+/.test(t)}function hL(t=ke()){return uL()||cL(t)}function uR(){try{const t=self.localStorage,e=hu();if(t)return t.setItem(e,"1"),t.removeItem(e),hL()?Dl():!0}catch{return o_()&&Dl()}return!1}function o_(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Gf(){return(aL()||eS()||lR())&&!lL()&&uR()&&!o_()}function cR(){return lR()&&typeof document<"u"}async function dL(){return cR()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},oL);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function fL(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt={LOCAL:"local",NONE:"none",SESSION:"session"},Na=j,hR="persistence";function pL(t,e){if(Na(Object.values(Zt).includes(e),t,"invalid-persistence-type"),Vg()){Na(e!==Zt.SESSION,t,"unsupported-persistence-type");return}if(Og()){Na(e===Zt.NONE,t,"unsupported-persistence-type");return}if(o_()){Na(e===Zt.NONE||e===Zt.LOCAL&&Dl(),t,"unsupported-persistence-type");return}Na(e===Zt.NONE||uR(),t,"unsupported-persistence-type")}async function im(t){await t._initializationPromise;const e=dR(),n=Ji(hR,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function mL(t,e){const n=dR();if(!n)return[];const r=Ji(hR,t,e);switch(n.getItem(r)){case Zt.NONE:return[Co];case Zt.LOCAL:return[xo,hi];case Zt.SESSION:return[hi];default:return[]}}function dR(){var t;try{return((t=fL())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gL=j;class Hr{constructor(){this.browserResolver=tn(oR),this.cordovaResolver=tn(nL),this.underlyingResolver=null,this._redirectPersistence=hi,this._completeRedirectFn=dd,this._overrideRedirectResult=i_}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return cR()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return gL(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await dL();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fR(t){return t.unwrap()}function _L(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yL(t){return pR(t)}function vL(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new wL(t,eO(t,e))}else if(r){const i=pR(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function pR(t){const{_tokenResponse:e}=t instanceof At?t.customData:t;if(!e)return null;if(!(t instanceof At)&&"temporaryProof"in e&&"phoneNumber"in e)return as.credentialFromResult(t);const n=e.providerId;if(!n||n===xa.PASSWORD)return null;let r;switch(n){case xa.GOOGLE:r=Ln;break;case xa.FACEBOOK:r=Vn;break;case xa.GITHUB:r=Mn;break;case xa.TWITTER:r=Fn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?bo._create(n,a):Kn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new po(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof At?r.credentialFromError(t):r.credentialFromResult(t)}function jt(t,e){return e.catch(n=>{throw n instanceof At&&vL(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:yL(n),additionalUserInfo:JD(n),user:fd.getOrCreate(i)}})}async function sm(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>jt(t,n.confirm(r))}}class wL{constructor(e,n){this.resolver=n,this.auth=_L(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return jt(fR(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fd=class Ga{constructor(e){this._delegate=e,this.multiFactor=iO(e)}static getOrCreate(e){return Ga.USER_MAP.has(e)||Ga.USER_MAP.set(e,new Ga(e)),Ga.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return jt(this.auth,BS(this._delegate,e))}async linkWithPhoneNumber(e,n){return sm(this.auth,OO(this._delegate,e,n))}async linkWithPopup(e){return jt(this.auth,$O(this._delegate,e,Hr))}async linkWithRedirect(e){return await im(Ue(this.auth)),XO(this._delegate,e,Hr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return jt(this.auth,jS(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return sm(this.auth,VO(this._delegate,e,n))}reauthenticateWithPopup(e){return jt(this.auth,zO(this._delegate,e,Hr))}async reauthenticateWithRedirect(e){return await im(Ue(this.auth)),YO(this._delegate,e,Hr)}sendEmailVerification(e){return jD(this._delegate,e)}async unlink(e){return await PD(this._delegate,e),this}updateEmail(e){return qD(this._delegate,e)}updatePassword(e){return WD(this._delegate,e)}updatePhoneNumber(e){return LO(this._delegate,e)}updateProfile(e){return $S(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return zD(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};fd.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da=j;class om{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Da(r,"invalid-api-key",{appName:e.name}),Da(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Hr:void 0;this._delegate=n.initialize({options:{persistence:IL(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(vN),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?fd.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){NS(this._delegate,e,n)}applyActionCode(e){return ND(this._delegate,e)}checkActionCode(e){return zS(this._delegate,e)}confirmPasswordReset(e,n){return xD(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return jt(this._delegate,OD(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return BD(this._delegate,e)}isSignInWithEmailLink(e){return MD(this._delegate,e)}async getRedirectResult(){Da(Gf(),this._delegate,"operation-not-supported-in-this-environment");const e=await eV(this._delegate,Hr);return e?jt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){rL(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=rI(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=rI(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return LD(this._delegate,e,n)}sendPasswordResetEmail(e,n){return bD(this._delegate,e,n||void 0)}async setPersistence(e){pL(this._delegate,e);let n;switch(e){case Zt.SESSION:n=hi;break;case Zt.LOCAL:n=await tn(xo)._isAvailable()?xo:ld;break;case Zt.NONE:n=Co;break;default:return lt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return jt(this._delegate,AD(this._delegate))}signInWithCredential(e){return jt(this._delegate,od(this._delegate,e))}signInWithCustomToken(e){return jt(this._delegate,CD(this._delegate,e))}signInWithEmailAndPassword(e,n){return jt(this._delegate,VD(this._delegate,e,n))}signInWithEmailLink(e,n){return jt(this._delegate,FD(this._delegate,e,n))}signInWithPhoneNumber(e,n){return sm(this._delegate,DO(this._delegate,e,n))}async signInWithPopup(e){return Da(Gf(),this._delegate,"operation-not-supported-in-this-environment"),jt(this._delegate,jO(this._delegate,e,Hr))}async signInWithRedirect(e){return Da(Gf(),this._delegate,"operation-not-supported-in-this-environment"),await im(this._delegate),KO(this._delegate,e,Hr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return DD(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}om.Persistence=Zt;function rI(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&fd.getOrCreate(o)),error:e,complete:n}}function IL(t,e){const n=mL(t,e);if(typeof self<"u"&&!n.includes(xo)&&n.push(xo),typeof window<"u")for(const r of[ld,hi])n.includes(r)||n.push(r);return n.includes(Co)||n.push(Co),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(){this.providerId="phone",this._delegate=new as(fR(fe.auth()))}static credential(e,n){return as.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}a_.PHONE_SIGN_IN_METHOD=as.PHONE_SIGN_IN_METHOD;a_.PROVIDER_ID=as.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EL=j;class TL{constructor(e,n,r=fe.app()){var i;EL((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new xO(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SL="auth-compat";function RL(t){t.INTERNAL.registerComponent(new yn(SL,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new om(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Vs.EMAIL_SIGNIN,PASSWORD_RESET:Vs.PASSWORD_RESET,RECOVER_EMAIL:Vs.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Vs.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Vs.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Vs.VERIFY_EMAIL}},EmailAuthProvider:Ti,FacebookAuthProvider:Vn,GithubAuthProvider:Mn,GoogleAuthProvider:Ln,OAuthProvider:po,SAMLAuthProvider:vh,PhoneAuthProvider:a_,PhoneMultiFactorGenerator:aR,RecaptchaVerifier:TL,TwitterAuthProvider:Fn,Auth:om,AuthCredential:Jo,Error:At}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(iL,sL)}RL(fe);var iI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zi,mR;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function T(){}T.prototype=y.prototype,I.D=y.prototype,I.prototype=new T,I.prototype.constructor=I,I.C=function(R,b,k){for(var S=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)S[tt-2]=arguments[tt];return y.prototype[b].apply(R,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,y,T){T||(T=0);var R=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)R[b]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(b=0;16>b;++b)R[b]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=I.g[0],T=I.g[1],b=I.g[2];var k=I.g[3],S=y+(k^T&(b^k))+R[0]+3614090360&4294967295;y=T+(S<<7&4294967295|S>>>25),S=k+(b^y&(T^b))+R[1]+3905402710&4294967295,k=y+(S<<12&4294967295|S>>>20),S=b+(T^k&(y^T))+R[2]+606105819&4294967295,b=k+(S<<17&4294967295|S>>>15),S=T+(y^b&(k^y))+R[3]+3250441966&4294967295,T=b+(S<<22&4294967295|S>>>10),S=y+(k^T&(b^k))+R[4]+4118548399&4294967295,y=T+(S<<7&4294967295|S>>>25),S=k+(b^y&(T^b))+R[5]+1200080426&4294967295,k=y+(S<<12&4294967295|S>>>20),S=b+(T^k&(y^T))+R[6]+2821735955&4294967295,b=k+(S<<17&4294967295|S>>>15),S=T+(y^b&(k^y))+R[7]+4249261313&4294967295,T=b+(S<<22&4294967295|S>>>10),S=y+(k^T&(b^k))+R[8]+1770035416&4294967295,y=T+(S<<7&4294967295|S>>>25),S=k+(b^y&(T^b))+R[9]+2336552879&4294967295,k=y+(S<<12&4294967295|S>>>20),S=b+(T^k&(y^T))+R[10]+4294925233&4294967295,b=k+(S<<17&4294967295|S>>>15),S=T+(y^b&(k^y))+R[11]+2304563134&4294967295,T=b+(S<<22&4294967295|S>>>10),S=y+(k^T&(b^k))+R[12]+1804603682&4294967295,y=T+(S<<7&4294967295|S>>>25),S=k+(b^y&(T^b))+R[13]+4254626195&4294967295,k=y+(S<<12&4294967295|S>>>20),S=b+(T^k&(y^T))+R[14]+2792965006&4294967295,b=k+(S<<17&4294967295|S>>>15),S=T+(y^b&(k^y))+R[15]+1236535329&4294967295,T=b+(S<<22&4294967295|S>>>10),S=y+(b^k&(T^b))+R[1]+4129170786&4294967295,y=T+(S<<5&4294967295|S>>>27),S=k+(T^b&(y^T))+R[6]+3225465664&4294967295,k=y+(S<<9&4294967295|S>>>23),S=b+(y^T&(k^y))+R[11]+643717713&4294967295,b=k+(S<<14&4294967295|S>>>18),S=T+(k^y&(b^k))+R[0]+3921069994&4294967295,T=b+(S<<20&4294967295|S>>>12),S=y+(b^k&(T^b))+R[5]+3593408605&4294967295,y=T+(S<<5&4294967295|S>>>27),S=k+(T^b&(y^T))+R[10]+38016083&4294967295,k=y+(S<<9&4294967295|S>>>23),S=b+(y^T&(k^y))+R[15]+3634488961&4294967295,b=k+(S<<14&4294967295|S>>>18),S=T+(k^y&(b^k))+R[4]+3889429448&4294967295,T=b+(S<<20&4294967295|S>>>12),S=y+(b^k&(T^b))+R[9]+568446438&4294967295,y=T+(S<<5&4294967295|S>>>27),S=k+(T^b&(y^T))+R[14]+3275163606&4294967295,k=y+(S<<9&4294967295|S>>>23),S=b+(y^T&(k^y))+R[3]+4107603335&4294967295,b=k+(S<<14&4294967295|S>>>18),S=T+(k^y&(b^k))+R[8]+1163531501&4294967295,T=b+(S<<20&4294967295|S>>>12),S=y+(b^k&(T^b))+R[13]+2850285829&4294967295,y=T+(S<<5&4294967295|S>>>27),S=k+(T^b&(y^T))+R[2]+4243563512&4294967295,k=y+(S<<9&4294967295|S>>>23),S=b+(y^T&(k^y))+R[7]+1735328473&4294967295,b=k+(S<<14&4294967295|S>>>18),S=T+(k^y&(b^k))+R[12]+2368359562&4294967295,T=b+(S<<20&4294967295|S>>>12),S=y+(T^b^k)+R[5]+4294588738&4294967295,y=T+(S<<4&4294967295|S>>>28),S=k+(y^T^b)+R[8]+2272392833&4294967295,k=y+(S<<11&4294967295|S>>>21),S=b+(k^y^T)+R[11]+1839030562&4294967295,b=k+(S<<16&4294967295|S>>>16),S=T+(b^k^y)+R[14]+4259657740&4294967295,T=b+(S<<23&4294967295|S>>>9),S=y+(T^b^k)+R[1]+2763975236&4294967295,y=T+(S<<4&4294967295|S>>>28),S=k+(y^T^b)+R[4]+1272893353&4294967295,k=y+(S<<11&4294967295|S>>>21),S=b+(k^y^T)+R[7]+4139469664&4294967295,b=k+(S<<16&4294967295|S>>>16),S=T+(b^k^y)+R[10]+3200236656&4294967295,T=b+(S<<23&4294967295|S>>>9),S=y+(T^b^k)+R[13]+681279174&4294967295,y=T+(S<<4&4294967295|S>>>28),S=k+(y^T^b)+R[0]+3936430074&4294967295,k=y+(S<<11&4294967295|S>>>21),S=b+(k^y^T)+R[3]+3572445317&4294967295,b=k+(S<<16&4294967295|S>>>16),S=T+(b^k^y)+R[6]+76029189&4294967295,T=b+(S<<23&4294967295|S>>>9),S=y+(T^b^k)+R[9]+3654602809&4294967295,y=T+(S<<4&4294967295|S>>>28),S=k+(y^T^b)+R[12]+3873151461&4294967295,k=y+(S<<11&4294967295|S>>>21),S=b+(k^y^T)+R[15]+530742520&4294967295,b=k+(S<<16&4294967295|S>>>16),S=T+(b^k^y)+R[2]+3299628645&4294967295,T=b+(S<<23&4294967295|S>>>9),S=y+(b^(T|~k))+R[0]+4096336452&4294967295,y=T+(S<<6&4294967295|S>>>26),S=k+(T^(y|~b))+R[7]+1126891415&4294967295,k=y+(S<<10&4294967295|S>>>22),S=b+(y^(k|~T))+R[14]+2878612391&4294967295,b=k+(S<<15&4294967295|S>>>17),S=T+(k^(b|~y))+R[5]+4237533241&4294967295,T=b+(S<<21&4294967295|S>>>11),S=y+(b^(T|~k))+R[12]+1700485571&4294967295,y=T+(S<<6&4294967295|S>>>26),S=k+(T^(y|~b))+R[3]+2399980690&4294967295,k=y+(S<<10&4294967295|S>>>22),S=b+(y^(k|~T))+R[10]+4293915773&4294967295,b=k+(S<<15&4294967295|S>>>17),S=T+(k^(b|~y))+R[1]+2240044497&4294967295,T=b+(S<<21&4294967295|S>>>11),S=y+(b^(T|~k))+R[8]+1873313359&4294967295,y=T+(S<<6&4294967295|S>>>26),S=k+(T^(y|~b))+R[15]+4264355552&4294967295,k=y+(S<<10&4294967295|S>>>22),S=b+(y^(k|~T))+R[6]+2734768916&4294967295,b=k+(S<<15&4294967295|S>>>17),S=T+(k^(b|~y))+R[13]+1309151649&4294967295,T=b+(S<<21&4294967295|S>>>11),S=y+(b^(T|~k))+R[4]+4149444226&4294967295,y=T+(S<<6&4294967295|S>>>26),S=k+(T^(y|~b))+R[11]+3174756917&4294967295,k=y+(S<<10&4294967295|S>>>22),S=b+(y^(k|~T))+R[2]+718787259&4294967295,b=k+(S<<15&4294967295|S>>>17),S=T+(k^(b|~y))+R[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(b+(S<<21&4294967295|S>>>11))&4294967295,I.g[2]=I.g[2]+b&4294967295,I.g[3]=I.g[3]+k&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var T=y-this.blockSize,R=this.B,b=this.h,k=0;k<y;){if(b==0)for(;k<=T;)i(this,I,k),k+=this.blockSize;if(typeof I=="string"){for(;k<y;)if(R[b++]=I.charCodeAt(k++),b==this.blockSize){i(this,R),b=0;break}}else for(;k<y;)if(R[b++]=I[k++],b==this.blockSize){i(this,R),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var T=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=T&255,T/=256;for(this.u(I),I=Array(16),y=T=0;4>y;++y)for(var R=0;32>R;R+=8)I[T++]=this.g[y]>>>R&255;return I};function s(I,y){var T=a;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=y(I)}function o(I,y){this.h=y;for(var T=[],R=!0,b=I.length-1;0<=b;b--){var k=I[b]|0;R&&k==y||(T[b]=k,R=!1)}this.g=T}var a={};function l(I){return-128<=I&&128>I?s(I,function(y){return new o([y|0],0>y?-1:0)}):new o([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return f;if(0>I)return C(c(-I));for(var y=[],T=1,R=0;I>=T;R++)y[R]=I/T|0,T*=4294967296;return new o(y,0)}function h(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return C(h(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(y,8)),R=f,b=0;b<I.length;b+=8){var k=Math.min(8,I.length-b),S=parseInt(I.substring(b,b+k),y);8>k?(k=c(Math.pow(y,k)),R=R.j(k).add(c(S))):(R=R.j(T),R=R.add(c(S)))}return R}var f=l(0),m=l(1),v=l(16777216);t=o.prototype,t.m=function(){if(P(this))return-C(this).m();for(var I=0,y=1,T=0;T<this.g.length;T++){var R=this.i(T);I+=(0<=R?R:4294967296+R)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(A(this))return"0";if(P(this))return"-"+C(this).toString(I);for(var y=c(Math.pow(I,6)),T=this,R="";;){var b=N(T,y).g;T=E(T,b.j(y));var k=((0<T.g.length?T.g[0]:T.h)>>>0).toString(I);if(T=b,A(T))return k+R;for(;6>k.length;)k="0"+k;R=k+R}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function A(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function P(I){return I.h==-1}t.l=function(I){return I=E(this,I),P(I)?-1:A(I)?0:1};function C(I){for(var y=I.g.length,T=[],R=0;R<y;R++)T[R]=~I.g[R];return new o(T,~I.h).add(m)}t.abs=function(){return P(this)?C(this):this},t.add=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],R=0,b=0;b<=y;b++){var k=R+(this.i(b)&65535)+(I.i(b)&65535),S=(k>>>16)+(this.i(b)>>>16)+(I.i(b)>>>16);R=S>>>16,k&=65535,S&=65535,T[b]=S<<16|k}return new o(T,T[T.length-1]&-2147483648?-1:0)};function E(I,y){return I.add(C(y))}t.j=function(I){if(A(this)||A(I))return f;if(P(this))return P(I)?C(this).j(C(I)):C(C(this).j(I));if(P(I))return C(this.j(C(I)));if(0>this.l(v)&&0>I.l(v))return c(this.m()*I.m());for(var y=this.g.length+I.g.length,T=[],R=0;R<2*y;R++)T[R]=0;for(R=0;R<this.g.length;R++)for(var b=0;b<I.g.length;b++){var k=this.i(R)>>>16,S=this.i(R)&65535,tt=I.i(b)>>>16,br=I.i(b)&65535;T[2*R+2*b]+=S*br,_(T,2*R+2*b),T[2*R+2*b+1]+=k*br,_(T,2*R+2*b+1),T[2*R+2*b+1]+=S*tt,_(T,2*R+2*b+1),T[2*R+2*b+2]+=k*tt,_(T,2*R+2*b+2)}for(R=0;R<y;R++)T[R]=T[2*R+1]<<16|T[2*R];for(R=y;R<2*y;R++)T[R]=0;return new o(T,0)};function _(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function w(I,y){this.g=I,this.h=y}function N(I,y){if(A(y))throw Error("division by zero");if(A(I))return new w(f,f);if(P(I))return y=N(C(I),y),new w(C(y.g),C(y.h));if(P(y))return y=N(I,C(y)),new w(C(y.g),y.h);if(30<I.g.length){if(P(I)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var T=m,R=y;0>=R.l(I);)T=L(T),R=L(R);var b=M(T,1),k=M(R,1);for(R=M(R,2),T=M(T,2);!A(R);){var S=k.add(R);0>=S.l(I)&&(b=b.add(T),k=S),R=M(R,1),T=M(T,1)}return y=E(I,b.j(y)),new w(b,y)}for(b=f;0<=I.l(y);){for(T=Math.max(1,Math.floor(I.m()/y.m())),R=Math.ceil(Math.log(T)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),k=c(T),S=k.j(y);P(S)||0<S.l(I);)T-=R,k=c(T),S=k.j(y);A(k)&&(k=m),b=b.add(k),I=E(I,S)}return new w(b,I)}t.A=function(I){return N(this,I).h},t.and=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],R=0;R<y;R++)T[R]=this.i(R)&I.i(R);return new o(T,this.h&I.h)},t.or=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],R=0;R<y;R++)T[R]=this.i(R)|I.i(R);return new o(T,this.h|I.h)},t.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],R=0;R<y;R++)T[R]=this.i(R)^I.i(R);return new o(T,this.h^I.h)};function L(I){for(var y=I.g.length+1,T=[],R=0;R<y;R++)T[R]=I.i(R)<<1|I.i(R-1)>>>31;return new o(T,I.h)}function M(I,y){var T=y>>5;y%=32;for(var R=I.g.length-T,b=[],k=0;k<R;k++)b[k]=0<y?I.i(k+T)>>>y|I.i(k+T+1)<<32-y:I.i(k+T);return new o(b,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,mR=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Zi=o}).apply(typeof iI<"u"?iI:typeof self<"u"?self:typeof window<"u"?window:{});var uc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gR,_R,Ha,yR,Vc,am,vR,wR,IR;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,d,p){return u==Array.prototype||u==Object.prototype||(u[d]=p.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof uc=="object"&&uc];for(var d=0;d<u.length;++d){var p=u[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(u,d){if(d)e:{var p=r;u=u.split(".");for(var g=0;g<u.length-1;g++){var x=u[g];if(!(x in p))break e;p=p[x]}u=u[u.length-1],g=p[u],d=d(g),d!=g&&d!=null&&e(p,u,{configurable:!0,writable:!0,value:d})}}function s(u,d){u instanceof String&&(u+="");var p=0,g=!1,x={next:function(){if(!g&&p<u.length){var V=p++;return{value:d(V,u[V]),done:!1}}return g=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}i("Array.prototype.values",function(u){return u||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var d=typeof u;return d=d!="object"?d:u?Array.isArray(u)?"array":d:"null",d=="array"||d=="object"&&typeof u.length=="number"}function c(u){var d=typeof u;return d=="object"&&u!=null||d=="function"}function h(u,d,p){return u.call.apply(u.bind,arguments)}function f(u,d,p){if(!u)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,g),u.apply(d,x)}}return function(){return u.apply(d,arguments)}}function m(u,d,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function v(u,d){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),u.apply(this,g)}}function A(u,d){function p(){}p.prototype=d.prototype,u.aa=d.prototype,u.prototype=new p,u.prototype.constructor=u,u.Qb=function(g,x,V){for(var q=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)q[ge-2]=arguments[ge];return d.prototype[x].apply(g,q)}}function P(u){const d=u.length;if(0<d){const p=Array(d);for(let g=0;g<d;g++)p[g]=u[g];return p}return[]}function C(u,d){for(let p=1;p<arguments.length;p++){const g=arguments[p];if(l(g)){const x=u.length||0,V=g.length||0;u.length=x+V;for(let q=0;q<V;q++)u[x+q]=g[q]}else u.push(g)}}class E{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function _(u){return/^[\s\xa0]*$/.test(u)}function w(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function N(u){return N[" "](u),u}N[" "]=function(){};var L=w().indexOf("Gecko")!=-1&&!(w().toLowerCase().indexOf("webkit")!=-1&&w().indexOf("Edge")==-1)&&!(w().indexOf("Trident")!=-1||w().indexOf("MSIE")!=-1)&&w().indexOf("Edge")==-1;function M(u,d,p){for(const g in u)d.call(p,u[g],g,u)}function I(u,d){for(const p in u)d.call(void 0,u[p],p,u)}function y(u){const d={};for(const p in u)d[p]=u[p];return d}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(u,d){let p,g;for(let x=1;x<arguments.length;x++){g=arguments[x];for(p in g)u[p]=g[p];for(let V=0;V<T.length;V++)p=T[V],Object.prototype.hasOwnProperty.call(g,p)&&(u[p]=g[p])}}function b(u){var d=1;u=u.split(":");const p=[];for(;0<d&&u.length;)p.push(u.shift()),d--;return u.length&&p.push(u.join(":")),p}function k(u){a.setTimeout(()=>{throw u},0)}function S(){var u=Z;let d=null;return u.g&&(d=u.g,u.g=u.g.next,u.g||(u.h=null),d.next=null),d}class tt{constructor(){this.h=this.g=null}add(d,p){const g=br.get();g.set(d,p),this.h?this.h.next=g:this.g=g,this.h=g}}var br=new E(()=>new Jn,u=>u.reset());class Jn{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let wn,H=!1,Z=new tt,ne=()=>{const u=a.Promise.resolve(void 0);wn=()=>{u.then(Ce)}};var Ce=()=>{for(var u;u=S();){try{u.h.call(u.g)}catch(p){k(p)}var d=br;d.j(u),100>d.h&&(d.h++,u.next=d.g,d.g=u)}H=!1};function me(){this.s=this.s,this.C=this.C}me.prototype.s=!1,me.prototype.ma=function(){this.s||(this.s=!0,this.N())},me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $e(u,d){this.type=u,this.g=this.target=d,this.defaultPrevented=!1}$e.prototype.h=function(){this.defaultPrevented=!0};var Xn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,d=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return u}();function Zn(u,d){if($e.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var p=this.type=u.type,g=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=d,d=u.relatedTarget){if(L){e:{try{N(d.nodeName);var x=!0;break e}catch{}x=!1}x||(d=null)}}else p=="mouseover"?d=u.fromElement:p=="mouseout"&&(d=u.toElement);this.relatedTarget=d,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:er[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Zn.aa.h.call(this)}}A(Zn,$e);var er={2:"touch",3:"pen",4:"mouse"};Zn.prototype.h=function(){Zn.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var tr="closure_listenable_"+(1e6*Math.random()|0),C1=0;function b1(u,d,p,g,x){this.listener=u,this.proxy=null,this.src=d,this.type=p,this.capture=!!g,this.ha=x,this.key=++C1,this.da=this.fa=!1}function ku(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Cu(u){this.src=u,this.g={},this.h=0}Cu.prototype.add=function(u,d,p,g,x){var V=u.toString();u=this.g[V],u||(u=this.g[V]=[],this.h++);var q=zd(u,d,g,x);return-1<q?(d=u[q],p||(d.fa=!1)):(d=new b1(d,this.src,V,!!g,x),d.fa=p,u.push(d)),d};function jd(u,d){var p=d.type;if(p in u.g){var g=u.g[p],x=Array.prototype.indexOf.call(g,d,void 0),V;(V=0<=x)&&Array.prototype.splice.call(g,x,1),V&&(ku(d),u.g[p].length==0&&(delete u.g[p],u.h--))}}function zd(u,d,p,g){for(var x=0;x<u.length;++x){var V=u[x];if(!V.da&&V.listener==d&&V.capture==!!p&&V.ha==g)return x}return-1}var $d="closure_lm_"+(1e6*Math.random()|0),qd={};function yy(u,d,p,g,x){if(Array.isArray(d)){for(var V=0;V<d.length;V++)yy(u,d[V],p,g,x);return null}return p=Iy(p),u&&u[tr]?u.K(d,p,c(g)?!!g.capture:!!g,x):x1(u,d,p,!1,g,x)}function x1(u,d,p,g,x,V){if(!d)throw Error("Invalid event type");var q=c(x)?!!x.capture:!!x,ge=Gd(u);if(ge||(u[$d]=ge=new Cu(u)),p=ge.add(d,p,g,q,V),p.proxy)return p;if(g=N1(),p.proxy=g,g.src=u,g.listener=p,u.addEventListener)Xn||(x=q),x===void 0&&(x=!1),u.addEventListener(d.toString(),g,x);else if(u.attachEvent)u.attachEvent(wy(d.toString()),g);else if(u.addListener&&u.removeListener)u.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function N1(){function u(p){return d.call(u.src,u.listener,p)}const d=D1;return u}function vy(u,d,p,g,x){if(Array.isArray(d))for(var V=0;V<d.length;V++)vy(u,d[V],p,g,x);else g=c(g)?!!g.capture:!!g,p=Iy(p),u&&u[tr]?(u=u.i,d=String(d).toString(),d in u.g&&(V=u.g[d],p=zd(V,p,g,x),-1<p&&(ku(V[p]),Array.prototype.splice.call(V,p,1),V.length==0&&(delete u.g[d],u.h--)))):u&&(u=Gd(u))&&(d=u.g[d.toString()],u=-1,d&&(u=zd(d,p,g,x)),(p=-1<u?d[u]:null)&&Wd(p))}function Wd(u){if(typeof u!="number"&&u&&!u.da){var d=u.src;if(d&&d[tr])jd(d.i,u);else{var p=u.type,g=u.proxy;d.removeEventListener?d.removeEventListener(p,g,u.capture):d.detachEvent?d.detachEvent(wy(p),g):d.addListener&&d.removeListener&&d.removeListener(g),(p=Gd(d))?(jd(p,u),p.h==0&&(p.src=null,d[$d]=null)):ku(u)}}}function wy(u){return u in qd?qd[u]:qd[u]="on"+u}function D1(u,d){if(u.da)u=!0;else{d=new Zn(d,this);var p=u.listener,g=u.ha||u.src;u.fa&&Wd(u),u=p.call(g,d)}return u}function Gd(u){return u=u[$d],u instanceof Cu?u:null}var Hd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Iy(u){return typeof u=="function"?u:(u[Hd]||(u[Hd]=function(d){return u.handleEvent(d)}),u[Hd])}function yt(){me.call(this),this.i=new Cu(this),this.M=this,this.F=null}A(yt,me),yt.prototype[tr]=!0,yt.prototype.removeEventListener=function(u,d,p,g){vy(this,u,d,p,g)};function kt(u,d){var p,g=u.F;if(g)for(p=[];g;g=g.F)p.push(g);if(u=u.M,g=d.type||d,typeof d=="string")d=new $e(d,u);else if(d instanceof $e)d.target=d.target||u;else{var x=d;d=new $e(g,u),R(d,x)}if(x=!0,p)for(var V=p.length-1;0<=V;V--){var q=d.g=p[V];x=bu(q,g,!0,d)&&x}if(q=d.g=u,x=bu(q,g,!0,d)&&x,x=bu(q,g,!1,d)&&x,p)for(V=0;V<p.length;V++)q=d.g=p[V],x=bu(q,g,!1,d)&&x}yt.prototype.N=function(){if(yt.aa.N.call(this),this.i){var u=this.i,d;for(d in u.g){for(var p=u.g[d],g=0;g<p.length;g++)ku(p[g]);delete u.g[d],u.h--}}this.F=null},yt.prototype.K=function(u,d,p,g){return this.i.add(String(u),d,!1,p,g)},yt.prototype.L=function(u,d,p,g){return this.i.add(String(u),d,!0,p,g)};function bu(u,d,p,g){if(d=u.i.g[String(d)],!d)return!0;d=d.concat();for(var x=!0,V=0;V<d.length;++V){var q=d[V];if(q&&!q.da&&q.capture==p){var ge=q.listener,ht=q.ha||q.src;q.fa&&jd(u.i,q),x=ge.call(ht,g)!==!1&&x}}return x&&!g.defaultPrevented}function Ey(u,d,p){if(typeof u=="function")p&&(u=m(u,p));else if(u&&typeof u.handleEvent=="function")u=m(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(u,d||0)}function Ty(u){u.g=Ey(()=>{u.g=null,u.i&&(u.i=!1,Ty(u))},u.l);const d=u.h;u.h=null,u.m.apply(null,d)}class O1 extends me{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Ty(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ua(u){me.call(this),this.h=u,this.g={}}A(ua,me);var Sy=[];function Ry(u){M(u.g,function(d,p){this.g.hasOwnProperty(p)&&Wd(d)},u),u.g={}}ua.prototype.N=function(){ua.aa.N.call(this),Ry(this)},ua.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Kd=a.JSON.stringify,V1=a.JSON.parse,L1=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function Qd(){}Qd.prototype.h=null;function Ay(u){return u.h||(u.h=u.i())}function Py(){}var ca={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Yd(){$e.call(this,"d")}A(Yd,$e);function Jd(){$e.call(this,"c")}A(Jd,$e);var Ci={},ky=null;function xu(){return ky=ky||new yt}Ci.La="serverreachability";function Cy(u){$e.call(this,Ci.La,u)}A(Cy,$e);function ha(u){const d=xu();kt(d,new Cy(d))}Ci.STAT_EVENT="statevent";function by(u,d){$e.call(this,Ci.STAT_EVENT,u),this.stat=d}A(by,$e);function Ct(u){const d=xu();kt(d,new by(d,u))}Ci.Ma="timingevent";function xy(u,d){$e.call(this,Ci.Ma,u),this.size=d}A(xy,$e);function da(u,d){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},d)}function fa(){this.g=!0}fa.prototype.xa=function(){this.g=!1};function M1(u,d,p,g,x,V){u.info(function(){if(u.g)if(V)for(var q="",ge=V.split("&"),ht=0;ht<ge.length;ht++){var ce=ge[ht].split("=");if(1<ce.length){var vt=ce[0];ce=ce[1];var wt=vt.split("_");q=2<=wt.length&&wt[1]=="type"?q+(vt+"="+ce+"&"):q+(vt+"=redacted&")}}else q=null;else q=V;return"XMLHTTP REQ ("+g+") [attempt "+x+"]: "+d+`
`+p+`
`+q})}function F1(u,d,p,g,x,V,q){u.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+x+"]: "+d+`
`+p+`
`+V+" "+q})}function bs(u,d,p,g){u.info(function(){return"XMLHTTP TEXT ("+d+"): "+B1(u,p)+(g?" "+g:"")})}function U1(u,d){u.info(function(){return"TIMEOUT: "+d})}fa.prototype.info=function(){};function B1(u,d){if(!u.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(u=0;u<p.length;u++)if(Array.isArray(p[u])){var g=p[u];if(!(2>g.length)){var x=g[1];if(Array.isArray(x)&&!(1>x.length)){var V=x[0];if(V!="noop"&&V!="stop"&&V!="close")for(var q=1;q<x.length;q++)x[q]=""}}}}return Kd(p)}catch{return d}}var Nu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ny={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xd;function Du(){}A(Du,Qd),Du.prototype.g=function(){return new XMLHttpRequest},Du.prototype.i=function(){return{}},Xd=new Du;function xr(u,d,p,g){this.j=u,this.i=d,this.l=p,this.R=g||1,this.U=new ua(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Dy}function Dy(){this.i=null,this.g="",this.h=!1}var Oy={},Zd={};function ef(u,d,p){u.L=1,u.v=Mu(nr(d)),u.m=p,u.P=!0,Vy(u,null)}function Vy(u,d){u.F=Date.now(),Ou(u),u.A=nr(u.v);var p=u.A,g=u.R;Array.isArray(g)||(g=[String(g)]),Qy(p.i,"t",g),u.C=0,p=u.j.J,u.h=new Dy,u.g=fv(u.j,p?d:null,!u.m),0<u.O&&(u.M=new O1(m(u.Y,u,u.g),u.O)),d=u.U,p=u.g,g=u.ca;var x="readystatechange";Array.isArray(x)||(x&&(Sy[0]=x.toString()),x=Sy);for(var V=0;V<x.length;V++){var q=yy(p,x[V],g||d.handleEvent,!1,d.h||d);if(!q)break;d.g[q.key]=q}d=u.H?y(u.H):{},u.m?(u.u||(u.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,d)):(u.u="GET",u.g.ea(u.A,u.u,null,d)),ha(),M1(u.i,u.u,u.A,u.l,u.R,u.m)}xr.prototype.ca=function(u){u=u.target;const d=this.M;d&&rr(u)==3?d.j():this.Y(u)},xr.prototype.Y=function(u){try{if(u==this.g)e:{const wt=rr(this.g);var d=this.g.Ba();const Ds=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||nv(this.g)))){this.J||wt!=4||d==7||(d==8||0>=Ds?ha(3):ha(2)),tf(this);var p=this.g.Z();this.X=p;t:if(Ly(this)){var g=nv(this.g);u="";var x=g.length,V=rr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bi(this),pa(this);var q="";break t}this.h.i=new a.TextDecoder}for(d=0;d<x;d++)this.h.h=!0,u+=this.h.i.decode(g[d],{stream:!(V&&d==x-1)});g.length=0,this.h.g+=u,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=p==200,F1(this.i,this.u,this.A,this.l,this.R,wt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var ge,ht=this.g;if((ge=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(ge)){var ce=ge;break t}}ce=null}if(p=ce)bs(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,nf(this,p);else{this.o=!1,this.s=3,Ct(12),bi(this),pa(this);break e}}if(this.P){p=!0;let In;for(;!this.J&&this.C<q.length;)if(In=j1(this,q),In==Zd){wt==4&&(this.s=4,Ct(14),p=!1),bs(this.i,this.l,null,"[Incomplete Response]");break}else if(In==Oy){this.s=4,Ct(15),bs(this.i,this.l,q,"[Invalid Chunk]"),p=!1;break}else bs(this.i,this.l,In,null),nf(this,In);if(Ly(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||q.length!=0||this.h.h||(this.s=1,Ct(16),p=!1),this.o=this.o&&p,!p)bs(this.i,this.l,q,"[Invalid Chunked Response]"),bi(this),pa(this);else if(0<q.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),uf(vt),vt.M=!0,Ct(11))}}else bs(this.i,this.l,q,null),nf(this,q);wt==4&&bi(this),this.o&&!this.J&&(wt==4?uv(this.j,this):(this.o=!1,Ou(this)))}else ik(this.g),p==400&&0<q.indexOf("Unknown SID")?(this.s=3,Ct(12)):(this.s=0,Ct(13)),bi(this),pa(this)}}}catch{}finally{}};function Ly(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function j1(u,d){var p=u.C,g=d.indexOf(`
`,p);return g==-1?Zd:(p=Number(d.substring(p,g)),isNaN(p)?Oy:(g+=1,g+p>d.length?Zd:(d=d.slice(g,g+p),u.C=g+p,d)))}xr.prototype.cancel=function(){this.J=!0,bi(this)};function Ou(u){u.S=Date.now()+u.I,My(u,u.I)}function My(u,d){if(u.B!=null)throw Error("WatchDog timer not null");u.B=da(m(u.ba,u),d)}function tf(u){u.B&&(a.clearTimeout(u.B),u.B=null)}xr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(U1(this.i,this.A),this.L!=2&&(ha(),Ct(17)),bi(this),this.s=2,pa(this)):My(this,this.S-u)};function pa(u){u.j.G==0||u.J||uv(u.j,u)}function bi(u){tf(u);var d=u.M;d&&typeof d.ma=="function"&&d.ma(),u.M=null,Ry(u.U),u.g&&(d=u.g,u.g=null,d.abort(),d.ma())}function nf(u,d){try{var p=u.j;if(p.G!=0&&(p.g==u||rf(p.h,u))){if(!u.K&&rf(p.h,u)&&p.G==3){try{var g=p.Da.g.parse(d)}catch{g=null}if(Array.isArray(g)&&g.length==3){var x=g;if(x[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<u.F)zu(p),Bu(p);else break e;lf(p),Ct(18)}}else p.za=x[1],0<p.za-p.T&&37500>x[2]&&p.F&&p.v==0&&!p.C&&(p.C=da(m(p.Za,p),6e3));if(1>=By(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Ni(p,11)}else if((u.K||p.g==u)&&zu(p),!_(d))for(x=p.Da.g.parse(d),d=0;d<x.length;d++){let ce=x[d];if(p.T=ce[0],ce=ce[1],p.G==2)if(ce[0]=="c"){p.K=ce[1],p.ia=ce[2];const vt=ce[3];vt!=null&&(p.la=vt,p.j.info("VER="+p.la));const wt=ce[4];wt!=null&&(p.Aa=wt,p.j.info("SVER="+p.Aa));const Ds=ce[5];Ds!=null&&typeof Ds=="number"&&0<Ds&&(g=1.5*Ds,p.L=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const In=u.g;if(In){const qu=In.g?In.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qu){var V=g.h;V.g||qu.indexOf("spdy")==-1&&qu.indexOf("quic")==-1&&qu.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(sf(V,V.h),V.h=null))}if(g.D){const cf=In.g?In.g.getResponseHeader("X-HTTP-Session-Id"):null;cf&&(g.ya=cf,ve(g.I,g.D,cf))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-u.F,p.j.info("Handshake RTT: "+p.R+"ms")),g=p;var q=u;if(g.qa=dv(g,g.J?g.ia:null,g.W),q.K){jy(g.h,q);var ge=q,ht=g.L;ht&&(ge.I=ht),ge.B&&(tf(ge),Ou(ge)),g.g=q}else av(g);0<p.i.length&&ju(p)}else ce[0]!="stop"&&ce[0]!="close"||Ni(p,7);else p.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Ni(p,7):af(p):ce[0]!="noop"&&p.l&&p.l.ta(ce),p.v=0)}}ha(4)}catch{}}var z1=class{constructor(u,d){this.g=u,this.map=d}};function Fy(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Uy(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function By(u){return u.h?1:u.g?u.g.size:0}function rf(u,d){return u.h?u.h==d:u.g?u.g.has(d):!1}function sf(u,d){u.g?u.g.add(d):u.h=d}function jy(u,d){u.h&&u.h==d?u.h=null:u.g&&u.g.has(d)&&u.g.delete(d)}Fy.prototype.cancel=function(){if(this.i=zy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function zy(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let d=u.i;for(const p of u.g.values())d=d.concat(p.D);return d}return P(u.i)}function $1(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var d=[],p=u.length,g=0;g<p;g++)d.push(u[g]);return d}d=[],p=0;for(g in u)d[p++]=u[g];return d}function q1(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var d=[];u=u.length;for(var p=0;p<u;p++)d.push(p);return d}d=[],p=0;for(const g in u)d[p++]=g;return d}}}function $y(u,d){if(u.forEach&&typeof u.forEach=="function")u.forEach(d,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,d,void 0);else for(var p=q1(u),g=$1(u),x=g.length,V=0;V<x;V++)d.call(void 0,g[V],p&&p[V],u)}var qy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function W1(u,d){if(u){u=u.split("&");for(var p=0;p<u.length;p++){var g=u[p].indexOf("="),x=null;if(0<=g){var V=u[p].substring(0,g);x=u[p].substring(g+1)}else V=u[p];d(V,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function xi(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof xi){this.h=u.h,Vu(this,u.j),this.o=u.o,this.g=u.g,Lu(this,u.s),this.l=u.l;var d=u.i,p=new _a;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),Wy(this,p),this.m=u.m}else u&&(d=String(u).match(qy))?(this.h=!1,Vu(this,d[1]||"",!0),this.o=ma(d[2]||""),this.g=ma(d[3]||"",!0),Lu(this,d[4]),this.l=ma(d[5]||"",!0),Wy(this,d[6]||"",!0),this.m=ma(d[7]||"")):(this.h=!1,this.i=new _a(null,this.h))}xi.prototype.toString=function(){var u=[],d=this.j;d&&u.push(ga(d,Gy,!0),":");var p=this.g;return(p||d=="file")&&(u.push("//"),(d=this.o)&&u.push(ga(d,Gy,!0),"@"),u.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&u.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&u.push("/"),u.push(ga(p,p.charAt(0)=="/"?K1:H1,!0))),(p=this.i.toString())&&u.push("?",p),(p=this.m)&&u.push("#",ga(p,Y1)),u.join("")};function nr(u){return new xi(u)}function Vu(u,d,p){u.j=p?ma(d,!0):d,u.j&&(u.j=u.j.replace(/:$/,""))}function Lu(u,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);u.s=d}else u.s=null}function Wy(u,d,p){d instanceof _a?(u.i=d,J1(u.i,u.h)):(p||(d=ga(d,Q1)),u.i=new _a(d,u.h))}function ve(u,d,p){u.i.set(d,p)}function Mu(u){return ve(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function ma(u,d){return u?d?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ga(u,d,p){return typeof u=="string"?(u=encodeURI(u).replace(d,G1),p&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function G1(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Gy=/[#\/\?@]/g,H1=/[#\?:]/g,K1=/[#\?]/g,Q1=/[#\?@]/g,Y1=/#/g;function _a(u,d){this.h=this.g=null,this.i=u||null,this.j=!!d}function Nr(u){u.g||(u.g=new Map,u.h=0,u.i&&W1(u.i,function(d,p){u.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=_a.prototype,t.add=function(u,d){Nr(this),this.i=null,u=xs(this,u);var p=this.g.get(u);return p||this.g.set(u,p=[]),p.push(d),this.h+=1,this};function Hy(u,d){Nr(u),d=xs(u,d),u.g.has(d)&&(u.i=null,u.h-=u.g.get(d).length,u.g.delete(d))}function Ky(u,d){return Nr(u),d=xs(u,d),u.g.has(d)}t.forEach=function(u,d){Nr(this),this.g.forEach(function(p,g){p.forEach(function(x){u.call(d,x,g,this)},this)},this)},t.na=function(){Nr(this);const u=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let g=0;g<d.length;g++){const x=u[g];for(let V=0;V<x.length;V++)p.push(d[g])}return p},t.V=function(u){Nr(this);let d=[];if(typeof u=="string")Ky(this,u)&&(d=d.concat(this.g.get(xs(this,u))));else{u=Array.from(this.g.values());for(let p=0;p<u.length;p++)d=d.concat(u[p])}return d},t.set=function(u,d){return Nr(this),this.i=null,u=xs(this,u),Ky(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[d]),this.h+=1,this},t.get=function(u,d){return u?(u=this.V(u),0<u.length?String(u[0]):d):d};function Qy(u,d,p){Hy(u,d),0<p.length&&(u.i=null,u.g.set(xs(u,d),P(p)),u.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var g=d[p];const V=encodeURIComponent(String(g)),q=this.V(g);for(g=0;g<q.length;g++){var x=V;q[g]!==""&&(x+="="+encodeURIComponent(String(q[g]))),u.push(x)}}return this.i=u.join("&")};function xs(u,d){return d=String(d),u.j&&(d=d.toLowerCase()),d}function J1(u,d){d&&!u.j&&(Nr(u),u.i=null,u.g.forEach(function(p,g){var x=g.toLowerCase();g!=x&&(Hy(this,g),Qy(this,x,p))},u)),u.j=d}function X1(u,d){const p=new fa;if(a.Image){const g=new Image;g.onload=v(Dr,p,"TestLoadImage: loaded",!0,d,g),g.onerror=v(Dr,p,"TestLoadImage: error",!1,d,g),g.onabort=v(Dr,p,"TestLoadImage: abort",!1,d,g),g.ontimeout=v(Dr,p,"TestLoadImage: timeout",!1,d,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=u}else d(!1)}function Z1(u,d){const p=new fa,g=new AbortController,x=setTimeout(()=>{g.abort(),Dr(p,"TestPingServer: timeout",!1,d)},1e4);fetch(u,{signal:g.signal}).then(V=>{clearTimeout(x),V.ok?Dr(p,"TestPingServer: ok",!0,d):Dr(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(x),Dr(p,"TestPingServer: error",!1,d)})}function Dr(u,d,p,g,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),g(p)}catch{}}function ek(){this.g=new L1}function tk(u,d,p){const g=p||"";try{$y(u,function(x,V){let q=x;c(x)&&(q=Kd(x)),d.push(g+V+"="+encodeURIComponent(q))})}catch(x){throw d.push(g+"type="+encodeURIComponent("_badmap")),x}}function ya(u){this.l=u.Ub||null,this.j=u.eb||!1}A(ya,Qd),ya.prototype.g=function(){return new Fu(this.l,this.j)},ya.prototype.i=function(u){return function(){return u}}({});function Fu(u,d){yt.call(this),this.D=u,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Fu,yt),t=Fu.prototype,t.open=function(u,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=d,this.readyState=1,wa(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(d.body=u),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,va(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,wa(this)),this.g&&(this.readyState=3,wa(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yy(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yy(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var d=u.value?u.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!u.done}))&&(this.response=this.responseText+=d)}u.done?va(this):wa(this),this.readyState==3&&Yy(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,va(this))},t.Qa=function(u){this.g&&(this.response=u,va(this))},t.ga=function(){this.g&&va(this)};function va(u){u.readyState=4,u.l=null,u.j=null,u.v=null,wa(u)}t.setRequestHeader=function(u,d){this.u.append(u,d)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,u.push(p[0]+": "+p[1]),p=d.next();return u.join(`\r
`)};function wa(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Fu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Jy(u){let d="";return M(u,function(p,g){d+=g,d+=":",d+=p,d+=`\r
`}),d}function of(u,d,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=Jy(p),typeof u=="string"?p!=null&&encodeURIComponent(String(p)):ve(u,d,p))}function Ve(u){yt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Ve,yt);var nk=/^https?$/i,rk=["POST","PUT"];t=Ve.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,d,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);d=d?d.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xd.g(),this.v=this.o?Ay(this.o):Ay(Xd),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(u),!0),this.B=!1}catch(V){Xy(this,V);return}if(u=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var x in g)p.set(x,g[x]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())p.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(V=>V.toLowerCase()=="content-type"),x=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(rk,d,void 0))||g||x||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,q]of p)this.g.setRequestHeader(V,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{tv(this),this.u=!0,this.g.send(u),this.u=!1}catch(V){Xy(this,V)}};function Xy(u,d){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=d,u.m=5,Zy(u),Uu(u)}function Zy(u){u.A||(u.A=!0,kt(u,"complete"),kt(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,kt(this,"complete"),kt(this,"abort"),Uu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Uu(this,!0)),Ve.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ev(this):this.bb())},t.bb=function(){ev(this)};function ev(u){if(u.h&&typeof o<"u"&&(!u.v[1]||rr(u)!=4||u.Z()!=2)){if(u.u&&rr(u)==4)Ey(u.Ea,0,u);else if(kt(u,"readystatechange"),rr(u)==4){u.h=!1;try{const q=u.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var g;if(g=q===0){var x=String(u.D).match(qy)[1]||null;!x&&a.self&&a.self.location&&(x=a.self.location.protocol.slice(0,-1)),g=!nk.test(x?x.toLowerCase():"")}p=g}if(p)kt(u,"complete"),kt(u,"success");else{u.m=6;try{var V=2<rr(u)?u.g.statusText:""}catch{V=""}u.l=V+" ["+u.Z()+"]",Zy(u)}}finally{Uu(u)}}}}function Uu(u,d){if(u.g){tv(u);const p=u.g,g=u.v[0]?()=>{}:null;u.g=null,u.v=null,d||kt(u,"ready");try{p.onreadystatechange=g}catch{}}}function tv(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function rr(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<rr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var d=this.g.responseText;return u&&d.indexOf(u)==0&&(d=d.substring(u.length)),V1(d)}};function nv(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function ik(u){const d={};u=(u.g&&2<=rr(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<u.length;g++){if(_(u[g]))continue;var p=b(u[g]);const x=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const V=d[x]||[];d[x]=V,V.push(p)}I(d,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ia(u,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[u]||d}function rv(u){this.Aa=0,this.i=[],this.j=new fa,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ia("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ia("baseRetryDelayMs",5e3,u),this.cb=Ia("retryDelaySeedMs",1e4,u),this.Wa=Ia("forwardChannelMaxRetries",2,u),this.wa=Ia("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Fy(u&&u.concurrentRequestLimit),this.Da=new ek,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=rv.prototype,t.la=8,t.G=1,t.connect=function(u,d,p,g){Ct(0),this.W=u,this.H=d||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.I=dv(this,null,this.W),ju(this)};function af(u){if(iv(u),u.G==3){var d=u.U++,p=nr(u.I);if(ve(p,"SID",u.K),ve(p,"RID",d),ve(p,"TYPE","terminate"),Ea(u,p),d=new xr(u,u.j,d),d.L=2,d.v=Mu(nr(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=fv(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ou(d)}hv(u)}function Bu(u){u.g&&(uf(u),u.g.cancel(),u.g=null)}function iv(u){Bu(u),u.u&&(a.clearTimeout(u.u),u.u=null),zu(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function ju(u){if(!Uy(u.h)&&!u.s){u.s=!0;var d=u.Ga;wn||ne(),H||(wn(),H=!0),Z.add(d,u),u.B=0}}function sk(u,d){return By(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=d.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=da(m(u.Ga,u,d),cv(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const x=new xr(this,this.j,u);let V=this.o;if(this.S&&(V?(V=y(V),R(V,this.S)):V=this.S),this.m!==null||this.O||(x.H=V,V=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(d+=g,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=ov(this,x,d),p=nr(this.I),ve(p,"RID",u),ve(p,"CVER",22),this.D&&ve(p,"X-HTTP-Session-Id",this.D),Ea(this,p),V&&(this.O?d="headers="+encodeURIComponent(String(Jy(V)))+"&"+d:this.m&&of(p,this.m,V)),sf(this.h,x),this.Ua&&ve(p,"TYPE","init"),this.P?(ve(p,"$req",d),ve(p,"SID","null"),x.T=!0,ef(x,p,null)):ef(x,p,d),this.G=2}}else this.G==3&&(u?sv(this,u):this.i.length==0||Uy(this.h)||sv(this))};function sv(u,d){var p;d?p=d.l:p=u.U++;const g=nr(u.I);ve(g,"SID",u.K),ve(g,"RID",p),ve(g,"AID",u.T),Ea(u,g),u.m&&u.o&&of(g,u.m,u.o),p=new xr(u,u.j,p,u.B+1),u.m===null&&(p.H=u.o),d&&(u.i=d.D.concat(u.i)),d=ov(u,p,1e3),p.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),sf(u.h,p),ef(p,g,d)}function Ea(u,d){u.H&&M(u.H,function(p,g){ve(d,g,p)}),u.l&&$y({},function(p,g){ve(d,g,p)})}function ov(u,d,p){p=Math.min(u.i.length,p);var g=u.l?m(u.l.Na,u.l,u):null;e:{var x=u.i;let V=-1;for(;;){const q=["count="+p];V==-1?0<p?(V=x[0].g,q.push("ofs="+V)):V=0:q.push("ofs="+V);let ge=!0;for(let ht=0;ht<p;ht++){let ce=x[ht].g;const vt=x[ht].map;if(ce-=V,0>ce)V=Math.max(0,x[ht].g-100),ge=!1;else try{tk(vt,q,"req"+ce+"_")}catch{g&&g(vt)}}if(ge){g=q.join("&");break e}}}return u=u.i.splice(0,p),d.D=u,g}function av(u){if(!u.g&&!u.u){u.Y=1;var d=u.Fa;wn||ne(),H||(wn(),H=!0),Z.add(d,u),u.v=0}}function lf(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=da(m(u.Fa,u),cv(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,lv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=da(m(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ct(10),Bu(this),lv(this))};function uf(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function lv(u){u.g=new xr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var d=nr(u.qa);ve(d,"RID","rpc"),ve(d,"SID",u.K),ve(d,"AID",u.T),ve(d,"CI",u.F?"0":"1"),!u.F&&u.ja&&ve(d,"TO",u.ja),ve(d,"TYPE","xmlhttp"),Ea(u,d),u.m&&u.o&&of(d,u.m,u.o),u.L&&(u.g.I=u.L);var p=u.g;u=u.ia,p.L=1,p.v=Mu(nr(d)),p.m=null,p.P=!0,Vy(p,u)}t.Za=function(){this.C!=null&&(this.C=null,Bu(this),lf(this),Ct(19))};function zu(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function uv(u,d){var p=null;if(u.g==d){zu(u),uf(u),u.g=null;var g=2}else if(rf(u.h,d))p=d.D,jy(u.h,d),g=1;else return;if(u.G!=0){if(d.o)if(g==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var x=u.B;g=xu(),kt(g,new xy(g,p)),ju(u)}else av(u);else if(x=d.s,x==3||x==0&&0<d.X||!(g==1&&sk(u,d)||g==2&&lf(u)))switch(p&&0<p.length&&(d=u.h,d.i=d.i.concat(p)),x){case 1:Ni(u,5);break;case 4:Ni(u,10);break;case 3:Ni(u,6);break;default:Ni(u,2)}}}function cv(u,d){let p=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(p*=2),p*d}function Ni(u,d){if(u.j.info("Error code "+d),d==2){var p=m(u.fb,u),g=u.Xa;const x=!g;g=new xi(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Vu(g,"https"),Mu(g),x?X1(g.toString(),p):Z1(g.toString(),p)}else Ct(2);u.G=0,u.l&&u.l.sa(d),hv(u),iv(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function hv(u){if(u.G=0,u.ka=[],u.l){const d=zy(u.h);(d.length!=0||u.i.length!=0)&&(C(u.ka,d),C(u.ka,u.i),u.h.i.length=0,P(u.i),u.i.length=0),u.l.ra()}}function dv(u,d,p){var g=p instanceof xi?nr(p):new xi(p);if(g.g!="")d&&(g.g=d+"."+g.g),Lu(g,g.s);else{var x=a.location;g=x.protocol,d=d?d+"."+x.hostname:x.hostname,x=+x.port;var V=new xi(null);g&&Vu(V,g),d&&(V.g=d),x&&Lu(V,x),p&&(V.l=p),g=V}return p=u.D,d=u.ya,p&&d&&ve(g,p,d),ve(g,"VER",u.la),Ea(u,g),g}function fv(u,d,p){if(d&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=u.Ca&&!u.pa?new Ve(new ya({eb:p})):new Ve(u.pa),d.Ha(u.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function pv(){}t=pv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function $u(){}$u.prototype.g=function(u,d){return new Jt(u,d)};function Jt(u,d){yt.call(this),this.g=new rv(d),this.l=u,this.h=d&&d.messageUrlParams||null,u=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(u?u["X-WebChannel-Content-Type"]=d.messageContentType:u={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(u?u["X-WebChannel-Client-Profile"]=d.va:u={"X-WebChannel-Client-Profile":d.va}),this.g.S=u,(u=d&&d.Sb)&&!_(u)&&(this.g.m=u),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!_(d)&&(this.g.D=d,u=this.h,u!==null&&d in u&&(u=this.h,d in u&&delete u[d])),this.j=new Ns(this)}A(Jt,yt),Jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Jt.prototype.close=function(){af(this.g)},Jt.prototype.o=function(u){var d=this.g;if(typeof u=="string"){var p={};p.__data__=u,u=p}else this.u&&(p={},p.__data__=Kd(u),u=p);d.i.push(new z1(d.Ya++,u)),d.G==3&&ju(d)},Jt.prototype.N=function(){this.g.l=null,delete this.j,af(this.g),delete this.g,Jt.aa.N.call(this)};function mv(u){Yd.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var d=u.__sm__;if(d){e:{for(const p in d){u=p;break e}u=void 0}(this.i=u)&&(u=this.i,d=d!==null&&u in d?d[u]:void 0),this.data=d}else this.data=u}A(mv,Yd);function gv(){Jd.call(this),this.status=1}A(gv,Jd);function Ns(u){this.g=u}A(Ns,pv),Ns.prototype.ua=function(){kt(this.g,"a")},Ns.prototype.ta=function(u){kt(this.g,new mv(u))},Ns.prototype.sa=function(u){kt(this.g,new gv)},Ns.prototype.ra=function(){kt(this.g,"b")},$u.prototype.createWebChannel=$u.prototype.g,Jt.prototype.send=Jt.prototype.o,Jt.prototype.open=Jt.prototype.m,Jt.prototype.close=Jt.prototype.close,IR=function(){return new $u},wR=function(){return xu()},vR=Ci,am={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Nu.NO_ERROR=0,Nu.TIMEOUT=8,Nu.HTTP_ERROR=6,Vc=Nu,Ny.COMPLETE="complete",yR=Ny,Py.EventType=ca,ca.OPEN="a",ca.CLOSE="b",ca.ERROR="c",ca.MESSAGE="d",yt.prototype.listen=yt.prototype.K,Ha=Py,_R=ya,Ve.prototype.listenOnce=Ve.prototype.L,Ve.prototype.getLastError=Ve.prototype.Ka,Ve.prototype.getLastErrorCode=Ve.prototype.Ba,Ve.prototype.getStatus=Ve.prototype.Z,Ve.prototype.getResponseJson=Ve.prototype.Oa,Ve.prototype.getResponseText=Ve.prototype.oa,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Ha,gR=Ve}).apply(typeof uc<"u"?uc:typeof self<"u"?self:typeof window<"u"?window:{});const sI="@firebase/firestore";/**
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
 */let Zo="10.12.1";/**
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
 */const di=new td("@firebase/firestore");function js(){return di.logLevel}function AL(t){di.setLogLevel(t)}function U(t,...e){if(di.logLevel<=re.DEBUG){const n=e.map(l_);di.debug(`Firestore (${Zo}): ${t}`,...n)}}function We(t,...e){if(di.logLevel<=re.ERROR){const n=e.map(l_);di.error(`Firestore (${Zo}): ${t}`,...n)}}function xn(t,...e){if(di.logLevel<=re.WARN){const n=e.map(l_);di.warn(`Firestore (${Zo}): ${t}`,...n)}}function l_(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${Zo}) INTERNAL ASSERTION FAILED: `+t;throw We(e),new Error(e)}function J(t,e){t||K()}function PL(t,e){t||K()}function G(t,e){return t}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends At{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ER{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class CL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bL{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new at;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new at,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new at)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new ER(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new it(e)}}class xL{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class NL{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new xL(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class DL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class OL{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(J(typeof n.token=="string"),this.R=n.token,new DL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class TR{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=VL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ee(t,e){return t<e?-1:t>e?1:0}function No(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function SR(t){return t+"\0"}/**
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
 */class Pe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Pe.fromMillis(Date.now())}static fromDate(e){return Pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Pe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Pe(0,0))}static max(){return new X(new Pe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Bl{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Bl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Bl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class se extends Bl{construct(e,n,r){return new se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new se(n)}static emptyPath(){return new se([])}}const LL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Re extends Bl{construct(e,n,r){return new Re(e,n,r)}static isValidIdentifier(e){return LL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Re.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Re(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new F(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new F(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new F(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Re(n)}static emptyPath(){return new Re([])}}/**
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
 */class Th{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function lm(t){return t.fields.find(e=>e.kind===2)}function Mi(t){return t.fields.filter(e=>e.kind!==2)}Th.UNKNOWN_ID=-1;class Lc{constructor(e,n){this.fieldPath=e,this.kind=n}}class jl{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new jl(0,on.min())}}function RR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Pe(n+1,0):new Pe(n,r));return new on(i,W.empty(),e)}function AR(t){return new on(t.readTime,t.key,-1)}class on{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new on(X.min(),W.empty(),-1)}static max(){return new on(X.max(),W.empty(),-1)}}function u_(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Si(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==PR)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new D((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof D?n:D.resolve(n)}catch(n){return D.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):D.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):D.reject(n)}static resolve(e){return new D((n,r)=>{n(e)})}static reject(e){return new D((n,r)=>{r(e)})}static waitFor(e){return new D((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=D.resolve(!1);for(const r of e)n=n.next(i=>i?D.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new D((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new D((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class pd{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new at,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new ul(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=c_(r.target.error);this.V.reject(new ul(e,i))}}static open(e,n,r,i){try{return new pd(n,e.transaction(i,r))}catch(s){throw new ul(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(U("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new FL(n)}}class Wn{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Wn.S(ke())===12.2&&We("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return U("SimpleDb","Removing database:",e),Fi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Dl())return!1;if(Wn.C())return!0;const e=ke(),n=Wn.S(e),r=0<n&&n<10,i=CR(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.v)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(U("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new ul(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new F(O.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new F(O.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ul(e,o))},i.onupgradeneeded=s=>{U("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{U("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=pd.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),D.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(U("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function CR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class ML{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Fi(this.B.delete())}}class ul extends F{constructor(e,n){super(O.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Ri(t){return t.name==="IndexedDbTransactionError"}class FL{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(U("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(U("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Fi(r)}add(e){return U("SimpleDb","ADD",this.store.name,e,e),Fi(this.store.add(e))}get(e){return Fi(this.store.get(e)).next(n=>(n===void 0&&(n=null),U("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return U("SimpleDb","DELETE",this.store.name,e),Fi(this.store.delete(e))}count(){return U("SimpleDb","COUNT",this.store.name),Fi(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new D((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,l)=>{o.push(l)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new D((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){U("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new D((r,i)=>{n.onerror=s=>{const o=c_(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new D((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new ML(a),c=n(a.primaryKey,a.value,l);if(c instanceof D){const h=c.catch(f=>(l.done(),D.reject(f)));r.push(h)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>D.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Fi(t){return new D((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=c_(r.target.error);n(i)}})}let oI=!1;function c_(t){const e=Wn.S(ke());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new F("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return oI||(oI=!0,setTimeout(()=>{throw r},0)),r}}return t}class UL{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){U("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{U("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){Ri(n)?U("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await Si(n)}await this.X(6e4)})}}class BL{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return D.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return U("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(U("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=AR(s);u_(o,r)>0&&(r=o)}),new on(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class Wt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Wt.oe=-1;function fu(t){return t==null}function zl(t){return t===0&&1/t==-1/0}function bR(t){return typeof t=="number"&&Number.isInteger(t)&&!zl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Lt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=aI(e)),e=jL(t.get(n),e);return aI(e)}function jL(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function aI(t){return t+""}function jn(t){const e=t.length;if(J(e>=2),e===2)return J(t.charAt(0)===""&&t.charAt(1)===""),se.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&K(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:K()}s=o+2}return new se(r)}/**
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
 */const lI=["userId","batchId"];/**
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
 */function Mc(t,e){return[t,Lt(e)]}function xR(t,e,n){return[t,Lt(e),n]}const zL={},$L=["prefixPath","collectionGroup","readTime","documentId"],qL=["prefixPath","collectionGroup","documentId"],WL=["collectionGroup","readTime","prefixPath","documentId"],GL=["canonicalId","targetId"],HL=["targetId","path"],KL=["path","targetId"],QL=["collectionId","parent"],YL=["indexId","uid"],JL=["uid","sequenceNumber"],XL=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],ZL=["indexId","uid","orderedDocumentKey"],eM=["userId","collectionPath","documentId"],tM=["userId","collectionPath","largestBatchId"],nM=["userId","collectionGroup","largestBatchId"],NR=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],rM=[...NR,"documentOverlays"],DR=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],OR=DR,VR=[...OR,"indexConfiguration","indexState","indexEntries"],iM=VR;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um extends kR{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function ut(t,e){const n=G(t);return Wn.F(n._e,e)}/**
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
 */function uI(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ts(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function LR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ye{constructor(e,n){this.comparator=e,this.root=n||pt.EMPTY}insert(e,n){return new ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(e){return new ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new cc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cc(this.root,e,this.comparator,!1)}getReverseIterator(){return new cc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cc(this.root,e,this.comparator,!0)}}class cc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??pt.RED,this.left=i??pt.EMPTY,this.right=s??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new pt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return pt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,i,s){return this}insert(e,n,r){return new pt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pe{constructor(e){this.comparator=e,this.data=new ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new cI(this.data.getIterator())}getIteratorFrom(e){return new cI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof pe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pe(this.comparator);return n.data=e,n}}class cI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ls(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.fields=e,e.sort(Re.comparator)}static empty(){return new Gt([])}unionWith(e){let n=new pe(Re.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return No(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class MR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sM(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new MR("Invalid base64 string: "+s):s}}(e);return new et(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const oM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wr(t){if(J(!!t),typeof t=="string"){let e=0;const n=oM.exec(t);if(J(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function fi(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function h_(t){const e=t.mapValue.fields.__previous_value__;return md(e)?h_(e):e}function $l(t){const e=wr(t.mapValue.fields.__local_write_time__.timestampValue);return new Pe(e.seconds,e.nanos)}/**
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
 */class aM{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class pi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new pi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof pi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Fc={nullValue:"NULL_VALUE"};function us(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?md(t)?4:FR(t)?9007199254740991:10:K()}function Qn(t,e){if(t===e)return!0;const n=us(t);if(n!==us(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return $l(t).isEqual($l(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=wr(i.timestampValue),a=wr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return fi(i.bytesValue).isEqual(fi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Me(i.geoPointValue.latitude)===Me(s.geoPointValue.latitude)&&Me(i.geoPointValue.longitude)===Me(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Me(i.integerValue)===Me(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Me(i.doubleValue),a=Me(s.doubleValue);return o===a?zl(o)===zl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return No(t.arrayValue.values||[],e.arrayValue.values||[],Qn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(uI(o)!==uI(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Qn(o[l],a[l])))return!1;return!0}(t,e);default:return K()}}function ql(t,e){return(t.values||[]).find(n=>Qn(n,e))!==void 0}function mi(t,e){if(t===e)return 0;const n=us(t),r=us(e);if(n!==r)return ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Me(s.integerValue||s.doubleValue),l=Me(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return hI(t.timestampValue,e.timestampValue);case 4:return hI($l(t),$l(e));case 5:return ee(t.stringValue,e.stringValue);case 6:return function(s,o){const a=fi(s),l=fi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=ee(a[c],l[c]);if(h!==0)return h}return ee(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ee(Me(s.latitude),Me(o.latitude));return a!==0?a:ee(Me(s.longitude),Me(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const h=mi(a[c],l[c]);if(h)return h}return ee(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Kr.mapValue&&o===Kr.mapValue)return 0;if(s===Kr.mapValue)return 1;if(o===Kr.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const m=ee(l[f],h[f]);if(m!==0)return m;const v=mi(a[l[f]],c[h[f]]);if(v!==0)return v}return ee(l.length,h.length)}(t.mapValue,e.mapValue);default:throw K()}}function hI(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=wr(t),r=wr(e),i=ee(n.seconds,r.seconds);return i!==0?i:ee(n.nanos,r.nanos)}function Do(t){return cm(t)}function cm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=wr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return fi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=cm(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${cm(n.fields[o])}`;return i+"}"}(t.mapValue):K()}function cs(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function hm(t){return!!t&&"integerValue"in t}function Wl(t){return!!t&&"arrayValue"in t}function dI(t){return!!t&&"nullValue"in t}function fI(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Uc(t){return!!t&&"mapValue"in t}function cl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ts(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=cl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=cl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function FR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function lM(t){return"nullValue"in t?Fc:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?cs(pi.empty(),W.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:K()}function uM(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?cs(pi.empty(),W.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Kr:K()}function pI(t,e){const n=mi(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function mI(t,e){const n=mi(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Uc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=cl(n)}setAll(e){let n=Re.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=cl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Uc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Qn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Uc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ts(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new mt(cl(this.value))}}function UR(t){const e=[];return Ts(t.fields,(n,r)=>{const i=new Re([n]);if(Uc(r)){const s=UR(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Gt(e)}/**
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
 */class Ie{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ie(e,0,X.min(),X.min(),X.min(),mt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ie(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new Ie(e,2,n,X.min(),X.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new Ie(e,3,n,X.min(),X.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ie(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class gi{constructor(e,n){this.position=e,this.inclusive=n}}function gI(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=mi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function _I(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Qn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Gl{constructor(e,n="asc"){this.field=e,this.dir=n}}function cM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class BR{}class oe extends BR{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new hM(e,n,r):n==="array-contains"?new pM(e,r):n==="in"?new GR(e,r):n==="not-in"?new mM(e,r):n==="array-contains-any"?new gM(e,r):new oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new dM(e,r):new fM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(mi(n,this.value)):n!==null&&us(this.value)===us(n)&&this.matchesComparison(mi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class he extends BR{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new he(e,n)}matches(e){return Oo(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Oo(t){return t.op==="and"}function dm(t){return t.op==="or"}function d_(t){return jR(t)&&Oo(t)}function jR(t){for(const e of t.filters)if(e instanceof he)return!1;return!0}function fm(t){if(t instanceof oe)return t.field.canonicalString()+t.op.toString()+Do(t.value);if(d_(t))return t.filters.map(e=>fm(e)).join(",");{const e=t.filters.map(n=>fm(n)).join(",");return`${t.op}(${e})`}}function zR(t,e){return t instanceof oe?function(r,i){return i instanceof oe&&r.op===i.op&&r.field.isEqual(i.field)&&Qn(r.value,i.value)}(t,e):t instanceof he?function(r,i){return i instanceof he&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&zR(o,i.filters[a]),!0):!1}(t,e):void K()}function $R(t,e){const n=t.filters.concat(e);return he.create(n,t.op)}function qR(t){return t instanceof oe?function(n){return`${n.field.canonicalString()} ${n.op} ${Do(n.value)}`}(t):t instanceof he?function(n){return n.op.toString()+" {"+n.getFilters().map(qR).join(" ,")+"}"}(t):"Filter"}class hM extends oe{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class dM extends oe{constructor(e,n){super(e,"in",n),this.keys=WR("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fM extends oe{constructor(e,n){super(e,"not-in",n),this.keys=WR("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function WR(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class pM extends oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Wl(n)&&ql(n.arrayValue,this.value)}}class GR extends oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ql(this.value.arrayValue,n)}}class mM extends oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ql(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ql(this.value.arrayValue,n)}}class gM extends oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Wl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ql(this.value.arrayValue,r))}}/**
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
 */class _M{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function pm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new _M(t,e,n,r,i,s,o)}function hs(t){const e=G(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>fm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),fu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Do(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Do(r)).join(",")),e.ue=n}return e.ue}function pu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!cM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!zR(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_I(t.startAt,e.startAt)&&_I(t.endAt,e.endAt)}function Sh(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Rh(t,e){return t.filters.filter(n=>n instanceof oe&&n.field.isEqual(e))}function yI(t,e,n){let r=Fc,i=!0;for(const s of Rh(t,e)){let o=Fc,a=!0;switch(s.op){case"<":case"<=":o=lM(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Fc}pI({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];pI({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function vI(t,e,n){let r=Kr,i=!0;for(const s of Rh(t,e)){let o=Kr,a=!0;switch(s.op){case">=":case">":o=uM(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Kr}mI({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];mI({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Ar{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function HR(t,e,n,r,i,s,o,a){return new Ar(t,e,n,r,i,s,o,a)}function ea(t){return new Ar(t)}function wI(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function f_(t){return t.collectionGroup!==null}function go(t){const e=G(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new pe(Re.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Gl(s,r))}),n.has(Re.keyField().canonicalString())||e.ce.push(new Gl(Re.keyField(),r))}return e.ce}function Mt(t){const e=G(t);return e.le||(e.le=yM(e,go(t))),e.le}function yM(t,e){if(t.limitType==="F")return pm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Gl(i.field,s)});const n=t.endAt?new gi(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new gi(t.startAt.position,t.startAt.inclusive):null;return pm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function mm(t,e){const n=t.filters.concat([e]);return new Ar(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ah(t,e,n){return new Ar(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function mu(t,e){return pu(Mt(t),Mt(e))&&t.limitType===e.limitType}function KR(t){return`${hs(Mt(t))}|lt:${t.limitType}`}function zs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>qR(i)).join(", ")}]`),fu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Do(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Do(i)).join(",")),`Target(${r})`}(Mt(t))}; limitType=${t.limitType})`}function gu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of go(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=gI(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,go(r),i)||r.endAt&&!function(o,a,l){const c=gI(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,go(r),i))}(t,e)}function QR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function YR(t){return(e,n)=>{let r=!1;for(const i of go(t)){const s=vM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function vM(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?mi(l,c):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
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
 */class Ai{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ts(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return LR(this.inner)}size(){return this.innerSize}}/**
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
 */const wM=new ye(W.comparator);function Ht(){return wM}const JR=new ye(W.comparator);function Ka(...t){let e=JR;for(const n of t)e=e.insert(n.key,n);return e}function XR(t){let e=JR;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function zn(){return hl()}function ZR(){return hl()}function hl(){return new Ai(t=>t.toString(),(t,e)=>t.isEqual(e))}const IM=new ye(W.comparator),EM=new pe(W.comparator);function te(...t){let e=EM;for(const n of t)e=e.add(n);return e}const TM=new pe(ee);function p_(){return TM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zl(e)?"-0":e}}function tA(t){return{integerValue:""+t}}function nA(t,e){return bR(e)?tA(e):eA(t,e)}/**
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
 */class gd{constructor(){this._=void 0}}function SM(t,e,n){return t instanceof Vo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&md(s)&&(s=h_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ds?iA(t,e):t instanceof fs?sA(t,e):function(i,s){const o=rA(i,s),a=II(o)+II(i.Pe);return hm(o)&&hm(i.Pe)?tA(a):eA(i.serializer,a)}(t,e)}function RM(t,e,n){return t instanceof ds?iA(t,e):t instanceof fs?sA(t,e):n}function rA(t,e){return t instanceof Lo?function(r){return hm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Vo extends gd{}class ds extends gd{constructor(e){super(),this.elements=e}}function iA(t,e){const n=oA(e);for(const r of t.elements)n.some(i=>Qn(i,r))||n.push(r);return{arrayValue:{values:n}}}class fs extends gd{constructor(e){super(),this.elements=e}}function sA(t,e){let n=oA(e);for(const r of t.elements)n=n.filter(i=>!Qn(i,r));return{arrayValue:{values:n}}}class Lo extends gd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function II(t){return Me(t.integerValue||t.doubleValue)}function oA(t){return Wl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class _u{constructor(e,n){this.field=e,this.transform=n}}function AM(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ds&&i instanceof ds||r instanceof fs&&i instanceof fs?No(r.elements,i.elements,Qn):r instanceof Lo&&i instanceof Lo?Qn(r.Pe,i.Pe):r instanceof Vo&&i instanceof Vo}(t.transform,e.transform)}class PM{constructor(e,n){this.version=e,this.transformResults=n}}class Ae{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ae}static exists(e){return new Ae(void 0,e)}static updateTime(e){return new Ae(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _d{}function aA(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new na(t.key,Ae.none()):new ta(t.key,t.data,Ae.none());{const n=t.data,r=mt.empty();let i=new pe(Re.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Pr(t.key,r,new Gt(i.toArray()),Ae.none())}}function kM(t,e,n){t instanceof ta?function(i,s,o){const a=i.value.clone(),l=TI(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Pr?function(i,s,o){if(!Bc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=TI(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(lA(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function dl(t,e,n,r){return t instanceof ta?function(s,o,a,l){if(!Bc(s.precondition,o))return a;const c=s.value.clone(),h=SI(s.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Pr?function(s,o,a,l){if(!Bc(s.precondition,o))return a;const c=SI(s.fieldTransforms,l,o),h=o.data;return h.setAll(lA(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Bc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function CM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=rA(r.transform,i||null);s!=null&&(n===null&&(n=mt.empty()),n.set(r.field,s))}return n||null}function EI(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&No(r,i,(s,o)=>AM(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ta extends _d{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pr extends _d{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function lA(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function TI(t,e,n){const r=new Map;J(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,RM(o,a,n[i]))}return r}function SI(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,SM(s,o,e))}return r}class na extends _d{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class m_ extends _d{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class g_{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&kM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=dl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=dl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ZR();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=aA(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&No(this.mutations,e.mutations,(n,r)=>EI(n,r))&&No(this.baseMutations,e.baseMutations,(n,r)=>EI(n,r))}}class __{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){J(e.mutations.length===r.length);let i=function(){return IM}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new __(e,n,r,i)}}/**
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
 */class y_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class bM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var He,ae;function uA(t){switch(t){default:return K();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function cA(t){if(t===void 0)return We("GRPC error has no .code"),O.UNKNOWN;switch(t){case He.OK:return O.OK;case He.CANCELLED:return O.CANCELLED;case He.UNKNOWN:return O.UNKNOWN;case He.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case He.INTERNAL:return O.INTERNAL;case He.UNAVAILABLE:return O.UNAVAILABLE;case He.UNAUTHENTICATED:return O.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case He.NOT_FOUND:return O.NOT_FOUND;case He.ALREADY_EXISTS:return O.ALREADY_EXISTS;case He.PERMISSION_DENIED:return O.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case He.ABORTED:return O.ABORTED;case He.OUT_OF_RANGE:return O.OUT_OF_RANGE;case He.UNIMPLEMENTED:return O.UNIMPLEMENTED;case He.DATA_LOSS:return O.DATA_LOSS;default:return K()}}(ae=He||(He={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function hA(){return new TextEncoder}/**
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
 */const xM=new Zi([4294967295,4294967295],0);function RI(t){const e=hA().encode(t),n=new mR;return n.update(e),new Uint8Array(n.digest())}function AI(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Zi([n,r],0),new Zi([i,s],0)]}class v_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Qa(`Invalid padding: ${n}`);if(r<0)throw new Qa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Qa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Qa(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Zi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Zi.fromNumber(r)));return i.compare(xM)===1&&(i=new Zi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=RI(e),[r,i]=AI(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new v_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=RI(e),[r,i]=AI(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Qa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class yu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,vu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new yu(X.min(),i,new ye(ee),Ht(),te())}}class vu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new vu(r,n,te(),te(),te())}}/**
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
 */class jc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class dA{constructor(e,n){this.targetId=e,this.me=n}}class fA{constructor(e,n,r=et.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class PI{constructor(){this.fe=0,this.ge=CI(),this.pe=et.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=te(),n=te(),r=te();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new vu(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=CI()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,J(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class NM{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ht(),this.qe=kI(),this.Qe=new ye(ee)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Sh(s))if(r===0){const o=new W(s.path);this.Ue(n,o,Ie.newNoDocument(o,X.min()))}else J(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=fi(r).toUint8Array()}catch(l){if(l instanceof MR)return xn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new v_(o,i,s)}catch(l){return xn(l instanceof Qa?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Sh(a.target)){const l=new W(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Ie.newNoDocument(l,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=te();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new yu(e,n,this.Qe,this.ke,r);return this.ke=Ht(),this.qe=kI(),this.Qe=new ye(ee),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new PI,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new pe(ee),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new PI),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function kI(){return new ye(W.comparator)}function CI(){return new ye(W.comparator)}const DM={asc:"ASCENDING",desc:"DESCENDING"},OM={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},VM={and:"AND",or:"OR"};class LM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function gm(t,e){return t.useProto3Json||fu(e)?e:{value:e}}function Mo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function MM(t,e){return Mo(t,e.toTimestamp())}function Ge(t){return J(!!t),X.fromTimestamp(function(n){const r=wr(n);return new Pe(r.seconds,r.nanos)}(t))}function w_(t,e){return _m(t,e).canonicalString()}function _m(t,e){const n=function(i){return new se(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function mA(t){const e=se.fromString(t);return J(RA(e)),e}function Hl(t,e){return w_(t.databaseId,e.path)}function Gn(t,e){const n=mA(e);if(n.get(1)!==t.databaseId.projectId)throw new F(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(yA(n))}function gA(t,e){return w_(t.databaseId,e)}function _A(t){const e=mA(t);return e.length===4?se.emptyPath():yA(e)}function ym(t){return new se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function yA(t){return J(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function bI(t,e,n){return{name:Hl(t,e),fields:n.value.mapValue.fields}}function vA(t,e,n){const r=Gn(t,e.name),i=Ge(e.updateTime),s=e.createTime?Ge(e.createTime):X.min(),o=new mt({mapValue:{fields:e.fields}}),a=Ie.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function FM(t,e){return"found"in e?function(r,i){J(!!i.found),i.found.name,i.found.updateTime;const s=Gn(r,i.found.name),o=Ge(i.found.updateTime),a=i.found.createTime?Ge(i.found.createTime):X.min(),l=new mt({mapValue:{fields:i.found.fields}});return Ie.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){J(!!i.missing),J(!!i.readTime);const s=Gn(r,i.missing),o=Ge(i.readTime);return Ie.newNoDocument(s,o)}(t,e):K()}function UM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(J(h===void 0||typeof h=="string"),et.fromBase64String(h||"")):(J(h===void 0||h instanceof Buffer||h instanceof Uint8Array),et.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?O.UNKNOWN:cA(c.code);return new F(h,c.message||"")}(o);n=new fA(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Gn(t,r.document.name),s=Ge(r.document.updateTime),o=r.document.createTime?Ge(r.document.createTime):X.min(),a=new mt({mapValue:{fields:r.document.fields}}),l=Ie.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new jc(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Gn(t,r.document),s=r.readTime?Ge(r.readTime):X.min(),o=Ie.newNoDocument(i,s),a=r.removedTargetIds||[];n=new jc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Gn(t,r.document),s=r.removedTargetIds||[];n=new jc([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new bM(i,s),a=r.targetId;n=new dA(a,o)}}return n}function Kl(t,e){let n;if(e instanceof ta)n={update:bI(t,e.key,e.value)};else if(e instanceof na)n={delete:Hl(t,e.key)};else if(e instanceof Pr)n={update:bI(t,e.key,e.data),updateMask:WM(e.fieldMask)};else{if(!(e instanceof m_))return K();n={verify:Hl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Vo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ds)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof fs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Lo)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:MM(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(t,e.precondition)),n}function vm(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Ae.updateTime(Ge(s.updateTime)):s.exists!==void 0?Ae.exists(s.exists):Ae.none()}(e.currentDocument):Ae.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)J(a.setToServerValue==="REQUEST_TIME"),l=new Vo;else if("appendMissingElements"in a){const h=a.appendMissingElements.values||[];l=new ds(h)}else if("removeAllFromArray"in a){const h=a.removeAllFromArray.values||[];l=new fs(h)}else"increment"in a?l=new Lo(o,a.increment):K();const c=Re.fromServerFormat(a.fieldPath);return new _u(c,l)}(t,i)):[];if(e.update){e.update.name;const i=Gn(t,e.update.name),s=new mt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const c=l.fieldPaths||[];return new Gt(c.map(h=>Re.fromServerFormat(h)))}(e.updateMask);return new Pr(i,s,o,n,r)}return new ta(i,s,n,r)}if(e.delete){const i=Gn(t,e.delete);return new na(i,n)}if(e.verify){const i=Gn(t,e.verify);return new m_(i,n)}return K()}function BM(t,e){return t&&t.length>0?(J(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Ge(i.updateTime):Ge(s);return o.isEqual(X.min())&&(o=Ge(s)),new PM(o,i.transformResults||[])}(n,e))):[]}function wA(t,e){return{documents:[gA(t,e.path)]}}function IA(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=gA(t,i);const s=function(c){if(c.length!==0)return SA(he.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:$s(m.field),direction:zM(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=gm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function EA(t){let e=_A(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){J(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const m=TA(f);return m instanceof he&&d_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(A){return new Gl(qs(A.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,fu(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(f){const m=!!f.before,v=f.values||[];return new gi(v,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,v=f.values||[];return new gi(v,m)}(n.endAt)),HR(e,i,o,s,a,"F",l,c)}function jM(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function TA(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=qs(n.unaryFilter.field);return oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=qs(n.unaryFilter.field);return oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=qs(n.unaryFilter.field);return oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=qs(n.unaryFilter.field);return oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return oe.create(qs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return he.create(n.compositeFilter.filters.map(r=>TA(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function zM(t){return DM[t]}function $M(t){return OM[t]}function qM(t){return VM[t]}function $s(t){return{fieldPath:t.canonicalString()}}function qs(t){return Re.fromServerFormat(t.fieldPath)}function SA(t){return t instanceof oe?function(n){if(n.op==="=="){if(fI(n.value))return{unaryFilter:{field:$s(n.field),op:"IS_NAN"}};if(dI(n.value))return{unaryFilter:{field:$s(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(fI(n.value))return{unaryFilter:{field:$s(n.field),op:"IS_NOT_NAN"}};if(dI(n.value))return{unaryFilter:{field:$s(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$s(n.field),op:$M(n.op),value:n.value}}}(t):t instanceof he?function(n){const r=n.getFilters().map(i=>SA(i));return r.length===1?r[0]:{compositeFilter:{op:qM(n.op),filters:r}}}(t):K()}function WM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function RA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class cr{constructor(e,n,r,i,s=X.min(),o=X.min(),a=et.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class AA{constructor(e){this.ct=e}}function GM(t,e){let n;if(e.document)n=vA(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=W.fromSegments(e.noDocument.path),i=ms(e.noDocument.readTime);n=Ie.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return K();{const r=W.fromSegments(e.unknownDocument.path),i=ms(e.unknownDocument.version);n=Ie.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new Pe(i[0],i[1]);return X.fromTimestamp(s)}(e.readTime)),n}function xI(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Ph(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Hl(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Mo(s,o.version.toTimestamp()),createTime:Mo(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:ps(e.version)};else{if(!e.isUnknownDocument())return K();r.unknownDocument={path:n.path.toArray(),version:ps(e.version)}}return r}function Ph(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function ps(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ms(t){const e=new Pe(t.seconds,t.nanoseconds);return X.fromTimestamp(e)}function Ui(t,e){const n=(e.baseMutations||[]).map(s=>vm(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>vm(t.ct,s)),i=Pe.fromMillis(e.localWriteTimeMs);return new g_(e.batchId,i,n,r)}function Ya(t){const e=ms(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?ms(t.lastLimboFreeSnapshotVersion):X.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return J(s.documents.length===1),Mt(ea(_A(s.documents[0])))}(t.query):function(s){return Mt(EA(s))}(t.query),new cr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,et.fromBase64String(t.resumeToken))}function PA(t,e){const n=ps(e.snapshotVersion),r=ps(e.lastLimboFreeSnapshotVersion);let i;i=Sh(e.target)?wA(t.ct,e.target):IA(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:hs(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function I_(t){const e=EA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ah(e,e.limit,"L"):e}function Hf(t,e){return new y_(e.largestBatchId,vm(t.ct,e.overlayMutation))}function NI(t,e){const n=e.path.lastSegment();return[t,Lt(e.path.popLast()),n]}function DI(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:ps(r.readTime),documentKey:Lt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{getBundleMetadata(e,n){return OI(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:ms(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return OI(e).put(function(i){return{bundleId:i.id,createTime:ps(Ge(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return VI(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:I_(s.bundledQuery),readTime:ms(s.readTime)}}(r)})}saveNamedQuery(e,n){return VI(e).put(function(i){return{name:i.name,readTime:ps(Ge(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function OI(t){return ut(t,"bundles")}function VI(t){return ut(t,"namedQueries")}/**
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
 */class yd{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new yd(e,r)}getOverlay(e,n){return Oa(e).get(NI(this.userId,n)).next(r=>r?Hf(this.serializer,r):null)}getOverlays(e,n){const r=zn();return D.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new y_(n,o);i.push(this.ht(e,a))}),D.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Lt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Oa(e).j("collectionPathOverlayIndex",a))}),D.waitFor(s)}getOverlaysForCollection(e,n,r){const i=zn(),s=Lt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Oa(e).U("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const c=Hf(this.serializer,l);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=zn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Oa(e).J({index:"collectionGroupOverlayIndex",range:a},(l,c,h)=>{const f=Hf(this.serializer,c);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):h.done()}).next(()=>s)}ht(e,n){return Oa(e).put(function(i,s,o){const[a,l,c]=NI(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Kl(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function Oa(t){return ut(t,"documentOverlays")}/**
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
 */class Bi{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(Me(e.integerValue));else if("doubleValue"in e){const r=Me(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),zl(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Et(n,20),typeof r=="string"&&(r=wr(r)),n.At(`${r.seconds||""}`),n.dt(r.nanos||0)}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(fi(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?FR(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):K()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){const r=e.fields||{};this.Et(n,55);for(const i of Object.keys(r))this.Rt(i,n),this.It(r[i],n)}wt(e,n){const r=e.values||[];this.Et(n,50);for(const i of r)this.It(i,n)}gt(e,n){this.Et(n,37),W.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}}Bi.bt=new Bi;function KM(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function LI(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=KM(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class QM{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ct(r.value),r=n.next();this.vt()}Ft(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Mt(r.value),r=n.next();this.xt()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ct(r);else if(r<2048)this.Ct(960|r>>>6),this.Ct(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ct(480|r>>>12),this.Ct(128|63&r>>>6),this.Ct(128|63&r);else{const i=n.codePointAt(0);this.Ct(240|i>>>18),this.Ct(128|63&i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i)}}this.vt()}Nt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=n.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Lt(e){const n=this.Bt(e),r=LI(n);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}qt(e){const n=this.Bt(e),r=LI(n);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Bt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ct(e){const n=255&e;n===0?(this.Kt(0),this.Kt(255)):n===255?(this.Kt(255),this.Kt(0)):this.Kt(n)}Mt(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class YM{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Lt(e)}Tt(){this.Gt.Qt()}}class JM{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class Va{constructor(){this.Gt=new QM,this.zt=new YM(this.Gt),this.jt=new JM(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
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
 */class ji{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new ji(this.indexId,this.documentKey,this.arrayValue,r)}}function Lr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=MI(t.arrayValue,e.arrayValue),n!==0?n:(n=MI(t.directionalValue,e.directionalValue),n!==0?n:W.comparator(t.documentKey,e.documentKey)))}function MI(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class FI{constructor(e){this.Yt=new pe((n,r)=>Re.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Yt=this.Yt.add(r):this.Xt.push(r)}}get en(){return this.Yt.size>1}tn(e){if(J(e.collectionGroup===this.collectionId),this.en)return!1;const n=lm(e);if(n!==void 0&&!this.nn(n))return!1;const r=Mi(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.nn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Yt.size>0){const a=this.Yt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.rn(a,l)||!this.sn(this.Zt[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Zt.length||!this.sn(this.Zt[o++],a))return!1}return!0}on(){if(this.en)return null;let e=new pe(Re.comparator);const n=[];for(const r of this.Xt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new Lc(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new Lc(r.field,0))}for(const r of this.Zt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new Lc(r.field,r.dir==="asc"?0:1)));return new Th(Th.UNKNOWN_ID,this.collectionId,n,jl.empty())}nn(e){for(const n of this.Xt)if(this.rn(n,e))return!0;return!1}rn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function kA(t){var e,n;if(J(t instanceof oe||t instanceof he),t instanceof oe){if(t instanceof GR){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>oe.create(t.field,"==",s)))||[];return he.create(i,"or")}return t}const r=t.filters.map(i=>kA(i));return he.create(r,t.op)}function XM(t){if(t.getFilters().length===0)return[];const e=Em(kA(t));return J(CA(e)),wm(e)||Im(e)?[e]:e.getFilters()}function wm(t){return t instanceof oe}function Im(t){return t instanceof he&&d_(t)}function CA(t){return wm(t)||Im(t)||function(n){if(n instanceof he&&dm(n)){for(const r of n.getFilters())if(!wm(r)&&!Im(r))return!1;return!0}return!1}(t)}function Em(t){if(J(t instanceof oe||t instanceof he),t instanceof oe)return t;if(t.filters.length===1)return Em(t.filters[0]);const e=t.filters.map(r=>Em(r));let n=he.create(e,t.op);return n=kh(n),CA(n)?n:(J(n instanceof he),J(Oo(n)),J(n.filters.length>1),n.filters.reduce((r,i)=>E_(r,i)))}function E_(t,e){let n;return J(t instanceof oe||t instanceof he),J(e instanceof oe||e instanceof he),n=t instanceof oe?e instanceof oe?function(i,s){return he.create([i,s],"and")}(t,e):UI(t,e):e instanceof oe?UI(e,t):function(i,s){if(J(i.filters.length>0&&s.filters.length>0),Oo(i)&&Oo(s))return $R(i,s.getFilters());const o=dm(i)?i:s,a=dm(i)?s:i,l=o.filters.map(c=>E_(c,a));return he.create(l,"or")}(t,e),kh(n)}function UI(t,e){if(Oo(e))return $R(e,t.getFilters());{const n=e.filters.map(r=>E_(t,r));return he.create(n,"or")}}function kh(t){if(J(t instanceof oe||t instanceof he),t instanceof oe)return t;const e=t.getFilters();if(e.length===1)return kh(e[0]);if(jR(t))return t;const n=e.map(i=>kh(i)),r=[];return n.forEach(i=>{i instanceof oe?r.push(i):i instanceof he&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:he.create(r,t.op)}/**
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
 */class ZM{constructor(){this._n=new T_}addToCollectionParentIndex(e,n){return this._n.add(n),D.resolve()}getCollectionParents(e,n){return D.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return D.resolve()}deleteFieldIndex(e,n){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,n){return D.resolve()}getDocumentsMatchingTarget(e,n){return D.resolve(null)}getIndexType(e,n){return D.resolve(0)}getFieldIndexes(e,n){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,n){return D.resolve(on.min())}getMinOffsetFromCollectionGroup(e,n){return D.resolve(on.min())}updateCollectionGroup(e,n,r){return D.resolve()}updateIndexEntries(e,n){return D.resolve()}}class T_{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new pe(se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new pe(se.comparator)).toArray()}}/**
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
 */const hc=new Uint8Array(0);class e2{constructor(e,n){this.databaseId=n,this.an=new T_,this.un=new Ai(r=>hs(r),(r,i)=>pu(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.an.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.an.add(n)});const s={collectionId:r,parent:Lt(i)};return BI(e).put(s)}return D.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[SR(n),""],!1,!0);return BI(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(jn(o.parent))}return r})}addFieldIndex(e,n){const r=La(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Fs(e);return s.next(a=>{o.put(DI(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=La(e),i=Fs(e),s=Ms(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=La(e),r=Ms(e),i=Fs(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return D.forEach(this.cn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new FI(r).on();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=Ms(e);let i=!0;const s=new Map;return D.forEach(this.cn(n),o=>this.ln(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=te();const a=[];return D.forEach(s,(l,c)=>{U("IndexedDbIndexManager",`Using index ${function(w){return`id=${w.indexId}|cg=${w.collectionGroup}|f=${w.fields.map(N=>`${N.fieldPath}:${N.kind}`).join(",")}`}(l)} to execute ${hs(n)}`);const h=function(w,N){const L=lm(N);if(L===void 0)return null;for(const M of Rh(w,L.fieldPath))switch(M.op){case"array-contains-any":return M.value.arrayValue.values||[];case"array-contains":return[M.value]}return null}(c,l),f=function(w,N){const L=new Map;for(const M of Mi(N))for(const I of Rh(w,M.fieldPath))switch(I.op){case"==":case"in":L.set(M.fieldPath.canonicalString(),I.value);break;case"not-in":case"!=":return L.set(M.fieldPath.canonicalString(),I.value),Array.from(L.values())}return null}(c,l),m=function(w,N){const L=[];let M=!0;for(const I of Mi(N)){const y=I.kind===0?yI(w,I.fieldPath,w.startAt):vI(w,I.fieldPath,w.startAt);L.push(y.value),M&&(M=y.inclusive)}return new gi(L,M)}(c,l),v=function(w,N){const L=[];let M=!0;for(const I of Mi(N)){const y=I.kind===0?vI(w,I.fieldPath,w.endAt):yI(w,I.fieldPath,w.endAt);L.push(y.value),M&&(M=y.inclusive)}return new gi(L,M)}(c,l),A=this.hn(l,c,m),P=this.hn(l,c,v),C=this.Pn(l,c,f),E=this.In(l.indexId,h,A,m.inclusive,P,v.inclusive,C);return D.forEach(E,_=>r.G(_,n.limit).next(w=>{w.forEach(N=>{const L=W.fromSegments(N.documentKey);o.has(L)||(o=o.add(L),a.push(L))})}))}).next(()=>a)}return D.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=XM(he.create(e.filters,"and")).map(r=>pm(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}In(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),c=l/(n!=null?n.length:1),h=[];for(let f=0;f<l;++f){const m=n?this.Tn(n[f/c]):hc,v=this.En(e,m,r[f%c],i),A=this.dn(e,m,s[f%c],o),P=a.map(C=>this.En(e,m,C,!0));h.push(...this.createRange(v,A,P))}return h}En(e,n,r,i){const s=new ji(e,W.empty(),n,r);return i?s:s.Jt()}dn(e,n,r,i){const s=new ji(e,W.empty(),n,r);return i?s.Jt():s}ln(e,n){const r=new FI(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return D.forEach(i,s=>this.ln(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let c=new pe(Re.comparator),h=!1;for(const f of l.filters)for(const m of f.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?h=!0:c=c.add(m.field));for(const f of l.orderBy)f.field.isKeyField()||(c=c.add(f.field));return c.size+(h?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}An(e,n){const r=new Va;for(const i of Mi(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);Bi.bt.Pt(s,o)}return r.Wt()}Tn(e){const n=new Va;return Bi.bt.Pt(e,n.Ht(0)),n.Wt()}Rn(e,n){const r=new Va;return Bi.bt.Pt(cs(this.databaseId,n),r.Ht(function(s){const o=Mi(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}Pn(e,n,r){if(r===null)return[];let i=[];i.push(new Va);let s=0;for(const o of Mi(e)){const a=r[s++];for(const l of i)if(this.Vn(n,o.fieldPath)&&Wl(a))i=this.mn(i,o,a);else{const c=l.Ht(o.kind);Bi.bt.Pt(a,c)}}return this.fn(i)}hn(e,n,r){return this.Pn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Wt();return n}mn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new Va;l.seed(a.Wt()),Bi.bt.Pt(o,l.Ht(n.kind)),s.push(l)}return s}Vn(e,n){return!!e.filters.find(r=>r instanceof oe&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=La(e),i=Fs(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return D.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(h,f){const m=f?new jl(f.sequenceNumber,new on(ms(f.readTime),new W(jn(f.documentKey)),f.largestBatchId)):jl.empty(),v=h.fields.map(([A,P])=>new Lc(Re.fromServerFormat(A),P));return new Th(h.indexId,h.collectionGroup,v,m)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ee(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=La(e),s=Fs(e);return this.gn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>D.forEach(a,l=>s.put(DI(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return D.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?D.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),D.forEach(a,l=>this.pn(e,i,l).next(c=>{const h=this.yn(s,l);return c.isEqual(h)?D.resolve():this.wn(e,s,l,c,h)}))))})}Sn(e,n,r,i){return Ms(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Rn(r,n.key),documentKey:n.key.path.toArray()})}bn(e,n,r,i){return Ms(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Rn(r,n.key),n.key.path.toArray()])}pn(e,n,r){const i=Ms(e);let s=new pe(Lr);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Rn(r,n)])},(o,a)=>{s=s.add(new ji(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}yn(e,n){let r=new pe(Lr);const i=this.An(n,e);if(i==null)return r;const s=lm(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Wl(o))for(const a of o.arrayValue.values||[])r=r.add(new ji(n.indexId,e.key,this.Tn(a),i))}else r=r.add(new ji(n.indexId,e.key,hc,i));return r}wn(e,n,r,i,s){U("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,c,h,f,m){const v=l.getIterator(),A=c.getIterator();let P=Ls(v),C=Ls(A);for(;P||C;){let E=!1,_=!1;if(P&&C){const w=h(P,C);w<0?_=!0:w>0&&(E=!0)}else P!=null?_=!0:E=!0;E?(f(C),C=Ls(A)):_?(m(P),P=Ls(v)):(P=Ls(v),C=Ls(A))}}(i,s,Lr,a=>{o.push(this.Sn(e,n,r,a))},a=>{o.push(this.bn(e,n,r,a))}),D.waitFor(o)}gn(e){let n=1;return Fs(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Lr(o,a)).filter((o,a,l)=>!a||Lr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Lr(o,e),l=Lr(o,n);if(a===0)i[0]=e.Jt();else if(a>0&&l<0)i.push(o),i.push(o.Jt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Dn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,hc,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,hc,[]];s.push(IDBKeyRange.bound(a,l))}return s}Dn(e,n){return Lr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(jI)}getMinOffset(e,n){return D.mapArray(this.cn(n),r=>this.ln(e,r).next(i=>i||K())).next(jI)}}function BI(t){return ut(t,"collectionParents")}function Ms(t){return ut(t,"indexEntries")}function La(t){return ut(t,"indexConfiguration")}function Fs(t){return ut(t,"indexState")}function jI(t){J(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;u_(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new on(e.readTime,e.documentKey,n)}/**
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
 */const zI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class zt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new zt(e,zt.DEFAULT_COLLECTION_PERCENTILE,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bA(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.J({range:o},(h,f,m)=>(a++,m.delete()));s.push(l.next(()=>{J(a===1)}));const c=[];for(const h of n.mutations){const f=xR(e,h.key.path,n.batchId);s.push(i.delete(f)),c.push(h.key)}return D.waitFor(s).next(()=>c)}function Ch(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw K();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */zt.DEFAULT_COLLECTION_PERCENTILE=10,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,zt.DEFAULT=new zt(41943040,zt.DEFAULT_COLLECTION_PERCENTILE,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),zt.DISABLED=new zt(-1,0,0);class vd{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Cn={}}static lt(e,n,r,i){J(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new vd(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Mr(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Ws(e),o=Mr(e);return o.add({}).next(a=>{J(typeof a=="number");const l=new g_(a,n,r,i),c=function(v,A,P){const C=P.baseMutations.map(_=>Kl(v.ct,_)),E=P.mutations.map(_=>Kl(v.ct,_));return{userId:A,batchId:P.batchId,localWriteTimeMs:P.localWriteTime.toMillis(),baseMutations:C,mutations:E}}(this.serializer,this.userId,l),h=[];let f=new pe((m,v)=>ee(m.canonicalString(),v.canonicalString()));for(const m of i){const v=xR(this.userId,m.key.path,a);f=f.add(m.key.path.popLast()),h.push(o.put(c)),h.push(s.put(v,zL))}return f.forEach(m=>{h.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Cn[a]=l.keys()}),D.waitFor(h).next(()=>l)})}lookupMutationBatch(e,n){return Mr(e).get(n).next(r=>r?(J(r.userId===this.userId),Ui(this.serializer,r)):null)}vn(e,n){return this.Cn[n]?D.resolve(this.Cn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Cn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Mr(e).J({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(J(a.batchId>=r),s=Ui(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Mr(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Mr(e).U("userMutationsIndex",n).next(r=>r.map(i=>Ui(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Mc(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Ws(e).J({range:i},(o,a,l)=>{const[c,h,f]=o,m=jn(h);if(c===this.userId&&n.path.isEqual(m))return Mr(e).get(f).next(v=>{if(!v)throw K();J(v.userId===this.userId),s.push(Ui(this.serializer,v))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pe(ee);const i=[];return n.forEach(s=>{const o=Mc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=Ws(e).J({range:a},(c,h,f)=>{const[m,v,A]=c,P=jn(v);m===this.userId&&s.path.isEqual(P)?r=r.add(A):f.done()});i.push(l)}),D.waitFor(i).next(()=>this.Fn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Mc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new pe(ee);return Ws(e).J({range:o},(l,c,h)=>{const[f,m,v]=l,A=jn(m);f===this.userId&&r.isPrefixOf(A)?A.length===i&&(a=a.add(v)):h.done()}).next(()=>this.Fn(e,a))}Fn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Mr(e).get(s).next(o=>{if(o===null)throw K();J(o.userId===this.userId),r.push(Ui(this.serializer,o))}))}),D.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return bA(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Mn(n.batchId)}),D.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return D.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Ws(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=jn(s[1]);i.push(l)}else a.done()}).next(()=>{J(i.length===0)})})}containsKey(e,n){return xA(e,this.userId,n)}xn(e){return NA(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function xA(t,e,n){const r=Mc(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Ws(t).J({range:s,H:!0},(a,l,c)=>{const[h,f,m]=a;h===e&&f===i&&(o=!0),c.done()}).next(()=>o)}function Mr(t){return ut(t,"mutations")}function Ws(t){return ut(t,"documentMutations")}function NA(t){return ut(t,"mutationQueues")}/**
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
 */class gs{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new gs(0)}static Ln(){return new gs(-1)}}/**
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
 */class t2{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Bn(e).next(n=>{const r=new gs(n.highestTargetId);return n.highestTargetId=r.next(),this.kn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(n=>X.fromTimestamp(new Pe(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.kn(e,i)))}addTargetData(e,n){return this.qn(e,n).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.Qn(n,r),this.kn(e,r))))}updateTargetData(e,n){return this.qn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Us(e).delete(n.targetId)).next(()=>this.Bn(e)).next(r=>(J(r.targetCount>0),r.targetCount-=1,this.kn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Us(e).J((o,a)=>{const l=Ya(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>D.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Us(e).J((r,i)=>{const s=Ya(i);n(s)})}Bn(e){return $I(e).get("targetGlobalKey").next(n=>(J(n!==null),n))}kn(e,n){return $I(e).put("targetGlobalKey",n)}qn(e,n){return Us(e).put(PA(this.serializer,n))}Qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=hs(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Us(e).J({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const c=Ya(a);pu(n,c.target)&&(s=c,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=$r(e);return n.forEach(o=>{const a=Lt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),D.waitFor(i)}removeMatchingKeys(e,n,r){const i=$r(e);return D.forEach(n,s=>{const o=Lt(s.path);return D.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=$r(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=$r(e);let s=te();return i.J({range:r,H:!0},(o,a,l)=>{const c=jn(o[1]),h=new W(c);s=s.add(h)}).next(()=>s)}containsKey(e,n){const r=Lt(n.path),i=IDBKeyRange.bound([r],[SR(r)],!1,!0);let s=0;return $r(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],l,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return Us(e).get(n).next(r=>r?Ya(r):null)}}function Us(t){return ut(t,"targets")}function $I(t){return ut(t,"targetGlobal")}function $r(t){return ut(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI([t,e],[n,r]){const i=ee(t,n);return i===0?ee(e,r):i}class n2{constructor(e){this.Kn=e,this.buffer=new pe(qI),this.$n=0}Un(){return++this.$n}Wn(e){const n=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();qI(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class r2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){U("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ri(n)?U("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Si(n)}await this.zn(3e5)})}}class i2{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.Hn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return D.resolve(Wt.oe);const r=new n2(n);return this.jn.forEachTarget(e,i=>r.Wn(i.sequenceNumber)).next(()=>this.jn.Jn(e,i=>r.Wn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(zI)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zI):this.Yn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,n){let r,i,s,o,a,l,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),js()<=re.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(c-l)+`ms
Total Duration: ${c-h}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function s2(t,e){return new i2(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e,n){this.db=e,this.garbageCollector=s2(this,n)}Hn(e){const n=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Zn(e){let n=0;return this.Jn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Jn(e,n){return this.Xn(e,(r,i)=>n(i))}addReference(e,n,r){return dc(e,r)}removeReference(e,n,r){return dc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return dc(e,n)}er(e,n){return function(i,s){let o=!1;return NA(i).Y(a=>xA(i,a,s).next(l=>(l&&(o=!0),D.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Xn(e,(o,a)=>{if(a<=n){const l=this.er(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,X.min()),$r(e).delete(function(f){return[0,Lt(f.path)]}(o))))});i.push(l)}}).next(()=>D.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return dc(e,n)}Xn(e,n){const r=$r(e);let i,s=Wt.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:c})=>{o===0?(s!==Wt.oe&&n(new W(jn(i)),s),s=c,i=l):s=Wt.oe}).next(()=>{s!==Wt.oe&&n(new W(jn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function dc(t,e){return $r(t).put(function(r,i){return{targetId:0,path:Lt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class DA{constructor(){this.changes=new Ai(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ie.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?D.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class a2{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Di(e).put(r)}removeEntry(e,n,r){return Di(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Ph(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.tr(e,r)))}getEntry(e,n){let r=Ie.newInvalidDocument(n);return Di(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Ma(n))},(i,s)=>{r=this.nr(n,s)}).next(()=>r)}rr(e,n){let r={size:0,document:Ie.newInvalidDocument(n)};return Di(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Ma(n))},(i,s)=>{r={document:this.nr(n,s),size:Ch(s)}}).next(()=>r)}getEntries(e,n){let r=Ht();return this.ir(e,n,(i,s)=>{const o=this.nr(i,s);r=r.insert(i,o)}).next(()=>r)}sr(e,n){let r=Ht(),i=new ye(W.comparator);return this.ir(e,n,(s,o)=>{const a=this.nr(s,o);r=r.insert(s,a),i=i.insert(s,Ch(o))}).next(()=>({documents:r,_r:i}))}ir(e,n,r){if(n.isEmpty())return D.resolve();let i=new pe(HI);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(Ma(i.first()),Ma(i.last())),o=i.getIterator();let a=o.getNext();return Di(e).J({index:"documentKeyIndex",range:s},(l,c,h)=>{const f=W.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&HI(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?h.$(Ma(a)):h.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),Ph(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Di(e).U(IDBKeyRange.bound(a,l,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let h=Ht();for(const f of c){const m=this.nr(W.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);m.isFoundDocument()&&(gu(n,m)||i.has(m.key))&&(h=h.insert(m.key,m))}return h})}getAllFromCollectionGroup(e,n,r,i){let s=Ht();const o=GI(n,r),a=GI(n,on.max());return Di(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,c,h)=>{const f=this.nr(W.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(f.key,f),s.size===i&&h.done()}).next(()=>s)}newChangeBuffer(e){return new l2(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return WI(e).get("remoteDocumentGlobalKey").next(n=>(J(!!n),n))}tr(e,n){return WI(e).put("remoteDocumentGlobalKey",n)}nr(e,n){if(n){const r=GM(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(X.min())))return r}return Ie.newInvalidDocument(e)}}function OA(t){return new a2(t)}class l2 extends DA{constructor(e,n){super(),this.ar=e,this.trackRemovals=n,this.ur=new Ai(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new pe((s,o)=>ee(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ur.get(s);if(n.push(this.ar.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=xI(this.ar.serializer,o);i=i.add(s.path.popLast());const c=Ch(l);r+=c-a.size,n.push(this.ar.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=xI(this.ar.serializer,o.convertToNoDocument(X.min()));n.push(this.ar.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.ar.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.ar.updateMetadata(e,r)),D.waitFor(n)}getFromCache(e,n){return this.ar.rr(e,n).next(r=>(this.ur.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.ar.sr(e,n).next(({documents:r,_r:i})=>(i.forEach((s,o)=>{this.ur.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function WI(t){return ut(t,"remoteDocumentGlobal")}function Di(t){return ut(t,"remoteDocumentsV14")}function Ma(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function GI(t,e){const n=e.documentKey.path.toArray();return[t,Ph(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function HI(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ee(n[s],r[s]),i)return i;return i=ee(n.length,r.length),i||(i=ee(n[n.length-2],r[r.length-2]),i||ee(n[n.length-1],r[r.length-1]))}/**
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
 */class u2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class VA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&dl(r.mutation,i,Gt.empty(),Pe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=zn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ka();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=zn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Ht();const o=hl(),a=function(){return hl()}();return n.forEach((l,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Pr)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),dl(h.mutation,c,h.mutation.getFieldMask(),Pe.now())):o.set(c.key,Gt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new u2(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=hl();let i=new ye((o,a)=>o-a),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=r.get(l)||Gt.empty();h=a.applyToLocalView(c,h),r.set(l,h);const f=(i.get(a.batchId)||te()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,f=ZR();h.forEach(m=>{if(!s.has(m)){const v=aA(n.get(m),r.get(m));v!==null&&f.set(m,v),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):f_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):D.resolve(zn());let a=-1,l=s;return o.next(c=>D.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?D.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{l=l.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,te())).next(h=>({batchId:a,changes:XR(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=Ka();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ka();return this.indexManager.getCollectionParents(e,s).next(a=>D.forEach(a,l=>{const c=function(f,m){return new Ar(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Ie.newInvalidDocument(h)))});let a=Ka();return o.forEach((l,c)=>{const h=s.get(l);h!==void 0&&dl(h.mutation,c,Gt.empty(),Pe.now()),gu(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return D.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ge(i.createTime)}}(n)),D.resolve()}getNamedQuery(e,n){return D.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:I_(i.bundledQuery),readTime:Ge(i.readTime)}}(n)),D.resolve()}}/**
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
 */class h2{constructor(){this.overlays=new ye(W.comparator),this.hr=new Map}getOverlay(e,n){return D.resolve(this.overlays.get(n))}getOverlays(e,n){const r=zn();return D.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),D.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),D.resolve()}getOverlaysForCollection(e,n,r){const i=zn(),s=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return D.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ye((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=zn(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=zn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return D.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new y_(n,r));let s=this.hr.get(n);s===void 0&&(s=te(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class S_{constructor(){this.Pr=new pe(nt.Ir),this.Tr=new pe(nt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new nt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new nt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new W(new se([])),r=new nt(n,e),i=new nt(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new W(new se([])),r=new nt(n,e),i=new nt(n,e+1);let s=te();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new nt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return W.comparator(e.key,n.key)||ee(e.pr,n.pr)}static Er(e,n){return ee(e.pr,n.pr)||W.comparator(e.key,n.key)}}/**
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
 */class d2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new pe(nt.Ir)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new g_(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new nt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,n){return D.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),i=new nt(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pe(ee);return n.forEach(i=>{const s=new nt(i,0),o=new nt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),D.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new nt(new W(s),0);let a=new pe(ee);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.pr)),!0)},o),D.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){J(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return D.forEach(n.mutations,i=>{const s=new nt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new nt(n,0),i=this.wr.firstAfterOrEqual(r);return D.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class f2{constructor(e){this.vr=e,this.docs=function(){return new ye(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return D.resolve(r?r.document.mutableCopy():Ie.newInvalidDocument(n))}getEntries(e,n){let r=Ht();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ie.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Ht();const o=n.path,a=new W(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||u_(AR(h),r)<=0||(i.has(h.key)||gu(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K()}Fr(e,n){return D.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new p2(this)}getSize(e){return D.resolve(this.size)}}class p2 extends DA{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),D.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class m2{constructor(e){this.persistence=e,this.Mr=new Ai(n=>hs(n),pu),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Or=0,this.Nr=new S_,this.targetCount=0,this.Lr=gs.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),D.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new gs(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,D.resolve()}updateTargetData(e,n){return this.qn(n),D.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return D.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),D.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),D.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),D.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return D.resolve(r)}containsKey(e,n){return D.resolve(this.Nr.containsKey(n))}}/**
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
 */class LA{constructor(e,n){this.Br={},this.overlays={},this.kr=new Wt(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new m2(this),this.indexManager=new ZM,this.remoteDocumentCache=function(i){return new f2(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new AA(n),this.$r=new c2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new h2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new d2(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const i=new g2(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return D.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class g2 extends kR{constructor(e){super(),this.currentSequenceNumber=e}}class wd{constructor(e){this.persistence=e,this.zr=new S_,this.jr=null}static Hr(e){return new wd(e)}get Jr(){if(this.jr)return this.jr;throw K()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),D.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),D.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Jr,r=>{const i=W.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return D.or([()=>D.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(e){this.serializer=e}O(e,n,r,i){const s=new pd("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",lI,{unique:!0}),l.createObjectStore("documentMutations")}(e),KI(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=D.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),KI(e)),o=o.next(()=>function(l){const c=l.store("targetGlobal"),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:X.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",h)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,c){return c.store("mutations").U().next(h=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",lI,{unique:!0});const f=c.store("mutations"),m=h.map(v=>f.put(v));return D.waitFor(m)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Xr(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ei(s)))),r<7&&i>=7&&(o=o.next(()=>this.ti(s))),r<8&&i>=8&&(o=o.next(()=>this.ni(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ri(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const c=l.createObjectStore("documentOverlays",{keyPath:eM});c.createIndex("collectionPathOverlayIndex",tM,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",nM,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const c=l.createObjectStore("remoteDocumentsV14",{keyPath:$L});c.createIndex("documentKeyIndex",qL),c.createIndex("collectionGroupIndex",WL)}(e)).next(()=>this.ii(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:YL}).createIndex("sequenceNumberIndex",JL,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:XL}).createIndex("documentKeyIndex",ZL,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),o}ei(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=Ch(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Xr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>D.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>D.forEach(a,l=>{J(l.userId===s.userId);const c=Ui(this.serializer,l);return bA(e,s.userId,c).next(()=>{})}))}))}ti(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const l=new se(o),c=function(f){return[0,Lt(f)]}(l);s.push(n.get(c).next(h=>h?D.resolve():(f=>n.put({targetId:0,path:Lt(f),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>D.waitFor(s))})}ni(e,n){e.createObjectStore("collectionParents",{keyPath:QL});const r=n.store("collectionParents"),i=new T_,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Lt(l)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const l=new se(o);return s(l.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,l],c)=>{const h=jn(a);return s(h.popLast())}))}ri(e){const n=e.store("targets");return n.J((r,i)=>{const s=Ya(i),o=PA(this.serializer,s);return n.put(o)})}ii(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(f){return f.document?new W(se.fromString(f.document.name).popFirst(5)):f.noDocument?W.fromSegments(f.noDocument.path):f.unknownDocument?W.fromSegments(f.unknownDocument.path):K()}(o).path.toArray(),c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>D.waitFor(i))}si(e,n){const r=n.store("mutations"),i=OA(this.serializer),s=new LA(wd.Hr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(l=>{var c;let h=(c=a.get(l.userId))!==null&&c!==void 0?c:te();Ui(this.serializer,l).keys().forEach(f=>h=h.add(f)),a.set(l.userId,h)}),D.forEach(a,(l,c)=>{const h=new it(c),f=yd.lt(this.serializer,h),m=s.getIndexManager(h),v=vd.lt(h,this.serializer,m,s.referenceDelegate);return new VA(i,v,f,m).recalculateAndSaveOverlaysForDocumentKeys(new um(n,Wt.oe),l).next()})})}}function KI(t){t.createObjectStore("targetDocuments",{keyPath:HL}).createIndex("documentTargetsIndex",KL,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",GL,{unique:!0}),t.createObjectStore("targetGlobal")}const Kf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class R_{constructor(e,n,r,i,s,o,a,l,c,h,f=16){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.oi=s,this.window=o,this.document=a,this._i=c,this.ai=h,this.ui=f,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=m=>Promise.resolve(),!R_.D())throw new F(O.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new o2(this,i),this.Ti=n+"main",this.serializer=new AA(l),this.Ei=new Wn(this.Ti,this.ui,new _2(this.serializer)),this.Qr=new t2(this.referenceDelegate,this.serializer),this.remoteDocumentCache=OA(this.serializer),this.$r=new HM,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,h===!1&&We("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new F(O.FAILED_PRECONDITION,Kf);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new Wt(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>fc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(n=>{n||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(n=>this.isPrimary&&!n?this.yi(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(Ri(e))return U("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return U("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return Fa(e).get("owner").next(n=>D.resolve(this.Si(n)))}bi(e){return fc(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=ut(n,"clientMetadata");return r.U().next(i=>{const s=this.vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return D.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.di)for(const n of e)this.di.removeItem(this.Fi(n.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?D.resolve(!0):Fa(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)){if(this.Si(n)&&this.networkEnabled)return!0;if(!this.Si(n)){if(!n.allowTabSynchronization)throw new F(O.FAILED_PRECONDITION,Kf);return!1}}return!(!this.networkEnabled||!this.inForeground)||fc(e).U().next(r=>this.vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&U("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new um(e,Wt.oe);return this.yi(n).next(()=>this.bi(n))}),this.Ei.close(),this.Li()}vi(e,n){return e.filter(r=>this.Ci(r.updateTimeMs,n)&&!this.Mi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>fc(e).U().next(n=>this.vi(n,18e5).map(r=>r.clientId)))}get started(){return this.qr}getMutationQueue(e,n){return vd.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new e2(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return yd.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,n,r){U("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===16?iM:l===15?VR:l===14?OR:l===13?DR:l===12?rM:l===11?NR:void K()}(this.ui);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new um(a,this.kr?this.kr.next():Wt.oe),n==="readwrite-primary"?this.gi(o).next(l=>!!l||this.pi(o)).next(l=>{if(!l)throw We(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new F(O.FAILED_PRECONDITION,PR);return r(o)}).next(l=>this.wi(o).next(()=>l)):this.ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}ki(e){return Fa(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)&&!this.Si(n)&&!(this.ai||this.allowTabSynchronization&&n.allowTabSynchronization))throw new F(O.FAILED_PRECONDITION,Kf)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Fa(e).put("owner",n)}static D(){return Wn.D()}yi(e){const n=Fa(e);return n.get("owner").next(r=>this.Si(r)?(U("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):D.resolve())}Ci(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(We(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;nS()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var n;try{const r=((n=this.di)===null||n===void 0?void 0:n.getItem(this.Fi(e)))!==null;return U("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return We("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){We("Failed to set zombie client id.",e)}}Li(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Fa(t){return ut(t,"owner")}function fc(t){return ut(t,"clientMetadata")}function A_(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class P_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new P_(e,n.fromCache,r,i)}}/**
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
 */class y2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class MA{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return nS()?8:CR(ke())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new y2;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(js()<=re.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",zs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),D.resolve()):(js()<=re.DEBUG&&U("QueryEngine","Query:",zs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(js()<=re.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",zs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Mt(n))):D.resolve())}ji(e,n){if(wI(n))return D.resolve(null);let r=Mt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ah(n,null,"F"),r=Mt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(e,Ah(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,r,i){return wI(n)||i.isEqual(X.min())?D.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?D.resolve(null):(js()<=re.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),zs(n)),this.es(e,o,n,RR(i,-1)).next(a=>a))})}Zi(e,n){let r=new pe(YR(e));return n.forEach((i,s)=>{gu(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return js()<=re.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",zs(n)),this.zi.getDocumentsMatchingQuery(e,n,on.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new ye(ee),this.rs=new Ai(s=>hs(s),pu),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new VA(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function FA(t,e,n,r){return new v2(t,e,n,r)}async function UA(t,e){const n=G(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=te();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function w2(t,e){const n=G(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,h){const f=c.batch,m=f.keys();let v=D.resolve();return m.forEach(A=>{v=v.next(()=>h.getEntry(l,A)).next(P=>{const C=c.docVersions.get(A);J(C!==null),P.version.compareTo(C)<0&&(f.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),h.addEntry(P)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=te();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function BA(t){const e=G(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function I2(t,e){const n=G(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((h,f)=>{const m=i.get(f);if(!m)return;a.push(n.Qr.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,h.addedDocuments,f)));let v=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?v=v.withResumeToken(et.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):h.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(h.resumeToken,r)),i=i.insert(f,v),function(P,C,E){return P.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(m,v,h)&&a.push(n.Qr.updateTargetData(s,v))});let l=Ht(),c=te();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(jA(s,o,e.documentUpdates).next(h=>{l=h.cs,c=h.ls})),!r.isEqual(X.min())){const h=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return D.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.ns=i,s))}function jA(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Ht();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(X.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:i}})}function E2(t,e){const n=G(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Fo(t,e){const n=G(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,D.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new cr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Uo(t,e,n){const r=G(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ri(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function bh(t,e,n){const r=G(t);let i=X.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,h){const f=G(l),m=f.rs.get(h);return m!==void 0?D.resolve(f.ns.get(m)):f.Qr.getTargetData(c,h)}(r,o,Mt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:te())).next(a=>(qA(r,QR(e),a),{documents:a,hs:s})))}function zA(t,e){const n=G(t),r=G(n.Qr),i=n.ns.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function $A(t,e){const n=G(t),r=n.ss.get(e)||X.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.os.getAllFromCollectionGroup(i,e,RR(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(qA(n,e,i),i))}function qA(t,e,n){let r=t.ss.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}async function T2(t,e,n,r){const i=G(t);let s=te(),o=Ht();for(const c of n){const h=e.Ps(c.metadata.name);c.document&&(s=s.add(h));const f=e.Is(c);f.setReadTime(e.Ts(c.metadata.readTime)),o=o.insert(h,f)}const a=i.os.newChangeBuffer({trackRemovals:!0}),l=await Fo(i,function(h){return Mt(ea(se.fromString(`__bundle__/docs/${h}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>jA(c,a,o).next(h=>(a.apply(c),h)).next(h=>i.Qr.removeMatchingKeysForTargetId(c,l.targetId).next(()=>i.Qr.addMatchingKeys(c,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,h.cs,h.ls)).next(()=>h.cs)))}async function S2(t,e,n=te()){const r=await Fo(t,Mt(I_(e.bundledQuery))),i=G(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Ge(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.$r.saveNamedQuery(s,e);const a=r.withResumeToken(et.EMPTY_BYTE_STRING,o);return i.ns=i.ns.insert(a.targetId,a),i.Qr.updateTargetData(s,a).next(()=>i.Qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.$r.saveNamedQuery(s,e))})}function QI(t,e){return`firestore_clients_${t}_${e}`}function YI(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Qf(t,e){return`firestore_targets_${t}_${e}`}class xh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Es(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new F(i.error.code,i.error.message))),o?new xh(e,n,i.state,s):(We("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class fl{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Es(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new F(r.error.code,r.error.message))),s?new fl(e,r.state,i):(We("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Nh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Es(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=p_();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=bR(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Nh(e,s):(We("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class k_{constructor(e,n){this.clientId=e,this.onlineState=n}static Es(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new k_(n.clientId,n.onlineState):(We("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Tm{constructor(){this.activeTargetIds=p_()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Yf{constructor(e,n,r,i,s){this.window=e,this.oi=n,this.persistenceKey=r,this.Vs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new ye(ee),this.started=!1,this.ys=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ws=QI(this.persistenceKey,this.Vs),this.Ss=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new Tm),this.bs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Fs=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Vs)continue;const i=this.getItem(QI(this.persistenceKey,r));if(i){const s=Nh.Es(r,i);s&&(this.ps=this.ps.insert(s.clientId,s))}}this.Ms();const n=this.storage.getItem(this.vs);if(n){const r=this.xs(n);r&&this.Os(r)}for(const r of this.ys)this.gs(r);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let n=!1;return this.ps.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ls(e,"pending")}updateMutationState(e,n,r){this.Ls(e,n,r),this.Bs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Qf(this.persistenceKey,e));if(r){const i=fl.Es(e,r);i&&(n=i.state)}}return this.ks.As(e),this.Ms(),n}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Qf(this.persistenceKey,e))}updateQueryState(e,n,r){this.qs(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Bs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return U("SharedClientState","READ",e,n),n}setItem(e,n){U("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){U("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){const n=e;if(n.storageArea===this.storage){if(U("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ws)return void We("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.bs.test(n.key)){if(n.newValue==null){const r=this.$s(n.key);return this.Us(r,null)}{const r=this.Ws(n.key,n.newValue);if(r)return this.Us(r.clientId,r)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const r=this.Gs(n.key,n.newValue);if(r)return this.zs(r)}}else if(this.Cs.test(n.key)){if(n.newValue!==null){const r=this.js(n.key,n.newValue);if(r)return this.Hs(r)}}else if(n.key===this.vs){if(n.newValue!==null){const r=this.xs(n.newValue);if(r)return this.Os(r)}}else if(n.key===this.Ss){const r=function(s){let o=Wt.oe;if(s!=null)try{const a=JSON.parse(s);J(typeof a=="number"),o=a}catch(a){We("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Wt.oe&&this.sequenceNumberHandler(r)}else if(n.key===this.Fs){const r=this.Js(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Ys(i)))}}}else this.ys.push(n)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Ls(e,n,r){const i=new xh(this.currentUser,e,n,r),s=YI(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ds())}Bs(e){const n=YI(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Qs(e){const n={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(n))}qs(e,n,r){const i=Qf(this.persistenceKey,e),s=new fl(e,n,r);this.setItem(i,s.ds())}Ks(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Fs,n)}$s(e){const n=this.bs.exec(e);return n?n[1]:null}Ws(e,n){const r=this.$s(e);return Nh.Es(r,n)}Gs(e,n){const r=this.Ds.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return xh.Es(new it(s),i,n)}js(e,n){const r=this.Cs.exec(e),i=Number(r[1]);return fl.Es(i,n)}xs(e){return k_.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);U("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,n){const r=n?this.ps.insert(e,n):this.ps.remove(e),i=this.Ns(this.ps),s=this.Ns(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.eo(o,a).then(()=>{this.ps=r})}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let n=p_();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class WA{constructor(){this.no=new Tm,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Tm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class R2{io(e){}shutdown(){}}/**
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
 */class JI{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let pc=null;function Jf(){return pc===null?pc=function(){return 268435456+Math.round(2147483648*Math.random())}():pc++,"0x"+pc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class P2{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const Tt="WebChannelConnection";class k2 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=Jf(),l=this.vo(n,r.toUriEncodedString());U("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,l,c,i).then(h=>(U("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw xn("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=A2[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Jf();return new Promise((o,a)=>{const l=new gR;l.setWithCredentials(!0),l.listenOnce(yR.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Vc.NO_ERROR:const h=l.getResponseJson();U(Tt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Vc.TIMEOUT:U(Tt,`RPC '${e}' ${s} timed out`),a(new F(O.DEADLINE_EXCEEDED,"Request time out"));break;case Vc.HTTP_ERROR:const f=l.getStatus();if(U(Tt,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const A=function(C){const E=C.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(E)>=0?E:O.UNKNOWN}(v.status);a(new F(A,v.message))}else a(new F(O.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new F(O.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{U(Tt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);U(Tt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Jf(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=IR(),a=wR(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new _R({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");U(Tt,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);let m=!1,v=!1;const A=new P2({lo:C=>{v?U(Tt,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(m||(U(Tt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),U(Tt,`RPC '${e}' stream ${i} sending:`,C),f.send(C))},ho:()=>f.close()}),P=(C,E,_)=>{C.listen(E,w=>{try{_(w)}catch(N){setTimeout(()=>{throw N},0)}})};return P(f,Ha.EventType.OPEN,()=>{v||(U(Tt,`RPC '${e}' stream ${i} transport opened.`),A.mo())}),P(f,Ha.EventType.CLOSE,()=>{v||(v=!0,U(Tt,`RPC '${e}' stream ${i} transport closed`),A.po())}),P(f,Ha.EventType.ERROR,C=>{v||(v=!0,xn(Tt,`RPC '${e}' stream ${i} transport errored:`,C),A.po(new F(O.UNAVAILABLE,"The operation could not be completed")))}),P(f,Ha.EventType.MESSAGE,C=>{var E;if(!v){const _=C.data[0];J(!!_);const w=_,N=w.error||((E=w[0])===null||E===void 0?void 0:E.error);if(N){U(Tt,`RPC '${e}' stream ${i} received error:`,N);const L=N.status;let M=function(T){const R=He[T];if(R!==void 0)return cA(R)}(L),I=N.message;M===void 0&&(M=O.INTERNAL,I="Unknown error status: "+L+" with message "+N.message),v=!0,A.po(new F(M,I)),f.close()}else U(Tt,`RPC '${e}' stream ${i} received:`,_),A.yo(_)}}),P(a,vR.STAT_EVENT,C=>{C.stat===am.PROXY?U(Tt,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===am.NOPROXY&&U(Tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.fo()},0),A}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function GA(){return typeof window<"u"?window:null}function zc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(t){return new LM(t,!0)}/**
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
 */class C_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class HA{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new C_(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(We(n.toString()),We("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new F(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class C2 extends HA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=UM(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Ge(o.readTime):X.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=ym(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Sh(l)?{documents:wA(s,l)}:{query:IA(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=pA(s,o.resumeToken);const c=gm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=Mo(s,o.snapshotVersion.toTimestamp());const c=gm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=jM(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=ym(this.serializer),n.removeTarget=e,this.i_(n)}}class b2 extends HA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=BM(e.writeResults,e.commitTime),r=Ge(e.commitTime);return this.listener.A_(r,n)}return J(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=ym(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Kl(this.serializer,r))};this.i_(n)}}/**
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
 */class x2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new F(O.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,_m(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(O.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,_m(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new F(O.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class N2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class D2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Pi(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=G(l);c.M_.add(4),await ra(c),c.N_.set("Unknown"),c.M_.delete(4),await Iu(c)}(this))})}),this.N_=new N2(r,i)}}async function Iu(t){if(Pi(t))for(const e of t.x_)await e(!0)}async function ra(t){for(const e of t.x_)await e(!1)}function Id(t,e){const n=G(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),N_(n)?x_(n):sa(n).Xo()&&b_(n,e))}function Bo(t,e){const n=G(t),r=sa(n);n.F_.delete(e),r.Xo()&&KA(n,e),n.F_.size===0&&(r.Xo()?r.n_():Pi(n)&&n.N_.set("Unknown"))}function b_(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}sa(t).P_(e)}function KA(t,e){t.L_.xe(e),sa(t).I_(e)}function x_(t){t.L_=new NM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),sa(t).start(),t.N_.w_()}function N_(t){return Pi(t)&&!sa(t).Zo()&&t.F_.size>0}function Pi(t){return G(t).M_.size===0}function QA(t){t.L_=void 0}async function O2(t){t.N_.set("Online")}async function V2(t){t.F_.forEach((e,n)=>{b_(t,e)})}async function L2(t,e){QA(t),N_(t)?(t.N_.D_(e),x_(t)):t.N_.set("Unknown")}async function M2(t,e,n){if(t.N_.set("Online"),e instanceof fA&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Dh(t,r)}else if(e instanceof jc?t.L_.Ke(e):e instanceof dA?t.L_.He(e):t.L_.We(e),!n.isEqual(X.min()))try{const r=await BA(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.F_.get(c);h&&s.F_.set(c,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const h=s.F_.get(l);if(!h)return;s.F_.set(l,h.withResumeToken(et.EMPTY_BYTE_STRING,h.snapshotVersion)),KA(s,l);const f=new cr(h.target,l,c,h.sequenceNumber);b_(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await Dh(t,r)}}async function Dh(t,e,n){if(!Ri(e))throw e;t.M_.add(1),await ra(t),t.N_.set("Offline"),n||(n=()=>BA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Iu(t)})}function YA(t,e){return e().catch(n=>Dh(t,n,e))}async function ia(t){const e=G(t),n=_i(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;F2(e);)try{const i=await E2(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,U2(e,i)}catch(i){await Dh(e,i)}JA(e)&&XA(e)}function F2(t){return Pi(t)&&t.v_.length<10}function U2(t,e){t.v_.push(e);const n=_i(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function JA(t){return Pi(t)&&!_i(t).Zo()&&t.v_.length>0}function XA(t){_i(t).start()}async function B2(t){_i(t).V_()}async function j2(t){const e=_i(t);for(const n of t.v_)e.d_(n.mutations)}async function z2(t,e,n){const r=t.v_.shift(),i=__.from(r,e,n);await YA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ia(t)}async function $2(t,e){e&&_i(t).E_&&await async function(r,i){if(function(o){return uA(o)&&o!==O.ABORTED}(i.code)){const s=r.v_.shift();_i(r).t_(),await YA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ia(r)}}(t,e),JA(t)&&XA(t)}async function XI(t,e){const n=G(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=Pi(n);n.M_.add(3),await ra(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Iu(n)}async function Sm(t,e){const n=G(t);e?(n.M_.delete(2),await Iu(n)):e||(n.M_.add(2),await ra(n),n.N_.set("Unknown"))}function sa(t){return t.B_||(t.B_=function(n,r,i){const s=G(n);return s.f_(),new C2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:O2.bind(null,t),To:V2.bind(null,t),Ao:L2.bind(null,t),h_:M2.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),N_(t)?x_(t):t.N_.set("Unknown")):(await t.B_.stop(),QA(t))})),t.B_}function _i(t){return t.k_||(t.k_=function(n,r,i){const s=G(n);return s.f_(),new b2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:B2.bind(null,t),Ao:$2.bind(null,t),R_:j2.bind(null,t),A_:z2.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await ia(t)):(await t.k_.stop(),t.v_.length>0&&(U("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class D_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new at,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new D_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oa(t,e){if(We("AsyncQueue",`${e}: ${t}`),Ri(t))return new F(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class _o{constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Ka(),this.sortedSet=new ye(this.comparator)}static emptySet(e){return new _o(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _o)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new _o;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class ZI{constructor(){this.q_=new ye(W.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):K():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class jo{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new jo(e,n,_o.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class q2{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class W2{constructor(){this.queries=new Ai(e=>KR(e),mu),this.onlineState="Unknown",this.z_=new Set}}async function O_(t,e){const n=G(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new q2,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=oa(o,`Initialization of query '${zs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&L_(n)}async function V_(t,e){const n=G(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function G2(t,e){const n=G(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&L_(n)}function H2(t,e,n){const r=G(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function L_(t){t.z_.forEach(e=>{e.next()})}var Rm,eE;(eE=Rm||(Rm={})).J_="default",eE.Cache="cache";class M_{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new jo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=jo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Rm.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K2{constructor(e,n){this.ia=e,this.byteLength=n}sa(){return"metadata"in this.ia}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e){this.serializer=e}Ps(e){return Gn(this.serializer,e)}Is(e){return e.metadata.exists?vA(this.serializer,e.document,!1):Ie.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return Ge(e)}}class Q2{constructor(e,n,r){this.oa=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=ZA(e)}_a(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.ia.namedQuery)this.queries.push(e.ia.namedQuery);else if(e.ia.documentMetadata){this.documents.push({metadata:e.ia.documentMetadata}),e.ia.documentMetadata.exists||++n;const r=se.fromString(e.ia.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ia.document&&(this.documents[this.documents.length-1].document=e.ia.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}aa(e){const n=new Map,r=new tE(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Ps(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||te()).add(s);n.set(o,a)}}return n}async complete(){const e=await T2(this.localStore,new tE(this.serializer),this.documents,this.oa.id),n=this.aa(this.documents);for(const r of this.queries)await S2(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,ua:this.collectionGroups,ca:e}}}function ZA(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class eP{constructor(e){this.key=e}}class tP{constructor(e){this.key=e}}class nP{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=te(),this.mutatedKeys=te(),this.Ia=YR(e),this.Ta=new _o(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new ZI,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const m=i.get(h),v=gu(this.query,f)?f:null,A=!!m&&this.mutatedKeys.has(m.key),P=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let C=!1;m&&v?m.data.isEqual(v.data)?A!==P&&(r.track({type:3,doc:v}),C=!0):this.Ra(m,v)||(r.track({type:2,doc:v}),C=!0,(l&&this.Ia(v,l)>0||c&&this.Ia(v,c)<0)&&(a=!0)):!m&&v?(r.track({type:0,doc:v}),C=!0):m&&!v&&(r.track({type:1,doc:m}),C=!0,(l||c)&&(a=!0)),C&&(v?(o=o.add(v),s=P?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((h,f)=>function(v,A){const P=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return P(v)-P(A)}(h.type,f.type)||this.Ia(h.doc,f.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],l=this.Pa.size===0&&this.current&&!i?1:0,c=l!==this.ha;return this.ha=l,o.length!==0||c?{snapshot:new jo(this.query,e.Ta,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new ZI,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=te(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new tP(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new eP(r))}),n}pa(e){this.la=e.hs,this.Pa=te();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return jo.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class Y2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class J2{constructor(e){this.key=e,this.wa=!1}}class X2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Ai(a=>KR(a),mu),this.Da=new Map,this.Ca=new Set,this.va=new ye(W.comparator),this.Fa=new Map,this.Ma=new S_,this.xa={},this.Oa=new Map,this.Na=gs.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Z2(t,e,n=!0){const r=Ed(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await rP(r,e,n,!0),i}async function eF(t,e){const n=Ed(t);await rP(n,e,!0,!1)}async function rP(t,e,n,r){const i=await Fo(t.localStore,Mt(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await F_(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Id(t.remoteStore,i),a}async function F_(t,e,n,r,i){t.Ba=(f,m,v)=>async function(P,C,E,_){let w=C.view.da(E);w.Xi&&(w=await bh(P.localStore,C.query,!1).then(({documents:I})=>C.view.da(I,w)));const N=_&&_.targetChanges.get(C.targetId),L=_&&_.targetMismatches.get(C.targetId)!=null,M=C.view.applyChanges(w,P.isPrimaryClient,N,L);return Am(P,C.targetId,M.fa),M.snapshot}(t,f,m,v);const s=await bh(t.localStore,e,!0),o=new nP(e,s.hs),a=o.da(s.documents),l=vu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Am(t,n,c.fa);const h=new Y2(e,n,o);return t.ba.set(e,h),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function tF(t,e,n){const r=G(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!mu(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Uo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Bo(r.remoteStore,i.targetId),zo(r,i.targetId)}).catch(Si)):(zo(r,i.targetId),await Uo(r.localStore,i.targetId,!0))}async function nF(t,e){const n=G(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Bo(n.remoteStore,r.targetId))}async function rF(t,e,n){const r=z_(t);try{const i=await function(o,a){const l=G(o),c=Pe.now(),h=a.reduce((v,A)=>v.add(A.key),te());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",v=>{let A=Ht(),P=te();return l.os.getEntries(v,h).next(C=>{A=C,A.forEach((E,_)=>{_.isValidDocument()||(P=P.add(E))})}).next(()=>l.localDocuments.getOverlayedDocuments(v,A)).next(C=>{f=C;const E=[];for(const _ of a){const w=CM(_,f.get(_.key).overlayedDocument);w!=null&&E.push(new Pr(_.key,w,UR(w.value.mapValue),Ae.exists(!0)))}return l.mutationQueue.addMutationBatch(v,c,E,a)}).next(C=>{m=C;const E=C.applyToLocalDocumentSet(f,P);return l.documentOverlayCache.saveOverlays(v,C.batchId,E)})}).then(()=>({batchId:m.batchId,changes:XR(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.xa[o.currentUser.toKey()];c||(c=new ye(ee)),c=c.insert(a,l),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await kr(r,i.changes),await ia(r.remoteStore)}catch(i){const s=oa(i,"Failed to persist write");n.reject(s)}}async function iP(t,e){const n=G(t);try{const r=await I2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?J(o.wa):i.removedDocuments.size>0&&(J(o.wa),o.wa=!1))}),await kr(n,r,e)}catch(r){await Si(r)}}function nE(t,e,n){const r=G(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=G(o);l.onlineState=a;let c=!1;l.queries.forEach((h,f)=>{for(const m of f.U_)m.j_(a)&&(c=!0)}),c&&L_(l)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function iF(t,e,n){const r=G(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new ye(W.comparator);o=o.insert(s,Ie.newNoDocument(s,X.min()));const a=te().add(s),l=new yu(X.min(),new Map,new ye(ee),o,a);await iP(r,l),r.va=r.va.remove(s),r.Fa.delete(e),j_(r)}else await Uo(r.localStore,e,!1).then(()=>zo(r,e,n)).catch(Si)}async function sF(t,e){const n=G(t),r=e.batch.batchId;try{const i=await w2(n.localStore,e);B_(n,r,null),U_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await kr(n,i)}catch(i){await Si(i)}}async function oF(t,e,n){const r=G(t);try{const i=await function(o,a){const l=G(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(J(f!==null),h=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(r.localStore,e);B_(r,e,n),U_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await kr(r,i)}catch(i){await Si(i)}}async function aF(t,e){const n=G(t);Pi(n.remoteStore)||U("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=G(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Oa.get(r)||[];i.push(e),n.Oa.set(r,i)}catch(r){const i=oa(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function U_(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function B_(t,e,n){const r=G(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function zo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||sP(t,r)})}function sP(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Bo(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),j_(t))}function Am(t,e,n){for(const r of n)r instanceof eP?(t.Ma.addReference(r.key,e),lF(t,r)):r instanceof tP?(U("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||sP(t,r.key)):K()}function lF(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(U("SyncEngine","New document in limbo: "+n),t.Ca.add(r),j_(t))}function j_(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new W(se.fromString(e)),r=t.Na.next();t.Fa.set(r,new J2(n)),t.va=t.va.insert(n,r),Id(t.remoteStore,new cr(Mt(ea(n.path)),r,"TargetPurposeLimboResolution",Wt.oe))}}async function kr(t,e,n){const r=G(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,l)=>{o.push(r.Ba(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const h=c&&!c.fromCache;r.sharedClientState.updateQueryState(l.targetId,h?"current":"not-current")}if(c){i.push(c);const h=P_.Ki(l.targetId,c);s.push(h)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(l,c){const h=G(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>D.forEach(c,m=>D.forEach(m.qi,v=>h.persistence.referenceDelegate.addReference(f,m.targetId,v)).next(()=>D.forEach(m.Qi,v=>h.persistence.referenceDelegate.removeReference(f,m.targetId,v)))))}catch(f){if(!Ri(f))throw f;U("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const v=h.ns.get(m),A=v.snapshotVersion,P=v.withLastLimboFreeSnapshotVersion(A);h.ns=h.ns.insert(m,P)}}}(r.localStore,s))}async function uF(t,e){const n=G(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await UA(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(l=>{l.reject(new F(O.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await kr(n,r.us)}}function cF(t,e){const n=G(t),r=n.Fa.get(e);if(r&&r.wa)return te().add(r.key);{let i=te();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}async function hF(t,e){const n=G(t),r=await bh(n.localStore,e.query,!0),i=e.view.pa(r);return n.isPrimaryClient&&Am(n,e.targetId,i.fa),i}async function dF(t,e){const n=G(t);return $A(n.localStore,e).then(r=>kr(n,r))}async function fF(t,e,n,r){const i=G(t),s=await function(a,l){const c=G(a),h=G(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",f=>h.vn(f,l).next(m=>m?c.localDocuments.getDocuments(f,m):D.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await ia(i.remoteStore):n==="acknowledged"||n==="rejected"?(B_(i,e,r||null),U_(i,e),function(a,l){G(G(a).mutationQueue).Mn(l)}(i.localStore,e)):K(),await kr(i,s)):U("SyncEngine","Cannot apply mutation batch with id: "+e)}async function pF(t,e){const n=G(t);if(Ed(n),z_(n),e===!0&&n.La!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await rE(n,r.toArray());n.La=!0,await Sm(n.remoteStore,!0);for(const s of i)Id(n.remoteStore,s)}else if(e===!1&&n.La!==!1){const r=[];let i=Promise.resolve();n.Da.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(zo(n,o),Uo(n.localStore,o,!0))),Bo(n.remoteStore,o)}),await i,await rE(n,r),function(o){const a=G(o);a.Fa.forEach((l,c)=>{Bo(a.remoteStore,c)}),a.Ma.mr(),a.Fa=new Map,a.va=new ye(W.comparator)}(n),n.La=!1,await Sm(n.remoteStore,!1)}}async function rE(t,e,n){const r=G(t),i=[],s=[];for(const o of e){let a;const l=r.Da.get(o);if(l&&l.length!==0){a=await Fo(r.localStore,Mt(l[0]));for(const c of l){const h=r.ba.get(c),f=await hF(r,h);f.snapshot&&s.push(f.snapshot)}}else{const c=await zA(r.localStore,o);a=await Fo(r.localStore,c),await F_(r,oP(c),o,!1,a.resumeToken)}i.push(a)}return r.Sa.h_(s),i}function oP(t){return HR(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function mF(t){return function(n){return G(G(n).persistence).Bi()}(G(t).localStore)}async function gF(t,e,n,r){const i=G(t);if(i.La)return void U("SyncEngine","Ignoring unexpected query state notification.");const s=i.Da.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await $A(i.localStore,QR(s[0])),a=yu.createSynthesizedRemoteEventForCurrentChange(e,n==="current",et.EMPTY_BYTE_STRING);await kr(i,o,a);break}case"rejected":await Uo(i.localStore,e,!0),zo(i,e,r);break;default:K()}}async function _F(t,e,n){const r=Ed(t);if(r.La){for(const i of e){if(r.Da.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){U("SyncEngine","Adding an already active target "+i);continue}const s=await zA(r.localStore,i),o=await Fo(r.localStore,s);await F_(r,oP(s),o.targetId,!1,o.resumeToken),Id(r.remoteStore,o)}for(const i of n)r.Da.has(i)&&await Uo(r.localStore,i,!1).then(()=>{Bo(r.remoteStore,i),zo(r,i)}).catch(Si)}}function Ed(t){const e=G(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=iP.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iF.bind(null,e),e.Sa.h_=G2.bind(null,e.eventManager),e.Sa.ka=H2.bind(null,e.eventManager),e}function z_(t){const e=G(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oF.bind(null,e),e}function yF(t,e,n){const r=G(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(v,A){const P=G(v),C=Ge(A.createTime);return P.persistence.runTransaction("hasNewerBundle","readonly",E=>P.$r.getBundleMetadata(E,A.id)).then(E=>!!E&&E.createTime.compareTo(C)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(v){return{taskState:"Success",documentsLoaded:v.totalDocuments,bytesLoaded:v.totalBytes,totalDocuments:v.totalDocuments,totalBytes:v.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(ZA(l));const c=new Q2(l,s.localStore,o.serializer);let h=await o.qa();for(;h;){const m=await c._a(h);m&&a._updateProgress(m),h=await o.qa()}const f=await c.complete();return await kr(s,f.ca,void 0),await function(v,A){const P=G(v);return P.persistence.runTransaction("Save bundle","readwrite",C=>P.$r.saveBundleMetadata(C,A))}(s.localStore,l),a._completeWith(f.progress),Promise.resolve(f.ua)}catch(l){return xn("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Pm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=wu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return FA(this.persistence,new MA,e.initialUser,this.serializer)}createPersistence(e){return new LA(wd.Hr,this.serializer)}createSharedClientState(e){return new WA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class aP extends Pm{constructor(e,n,r){super(),this.Qa=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Qa.initialize(this,e),await z_(this.Qa.syncEngine),await ia(this.Qa.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return FA(this.persistence,new MA,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new r2(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new BL(n,this.persistence);return new UL(e.asyncQueue,r)}createPersistence(e){const n=A_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?zt.withCacheSize(this.cacheSizeBytes):zt.DEFAULT;return new R_(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,GA(),zc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new WA}}class vF extends aP{constructor(e,n){super(e,n,!1),this.Qa=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Qa.syncEngine;this.sharedClientState instanceof Yf&&(this.sharedClientState.syncEngine={Zs:fF.bind(null,n),Xs:gF.bind(null,n),eo:_F.bind(null,n),Bi:mF.bind(null,n),Ys:dF.bind(null,n)},await this.sharedClientState.start()),await this.persistence.fi(async r=>{await pF(this.Qa.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=GA();if(!Yf.D(n))throw new F(O.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=A_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Yf(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class $_{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>nE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=uF.bind(null,this.syncEngine),await Sm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new W2}()}createDatastore(e){const n=wu(e.databaseInfo.databaseId),r=function(s){return new k2(s)}(e.databaseInfo);return function(s,o,a,l){return new x2(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new D2(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>nE(this.syncEngine,n,0),function(){return JI.D()?new JI:new R2}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,h){const f=new X2(i,s,o,a,l,c);return h&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=G(r);U("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await ra(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iE(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Td{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):We("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wF{constructor(e,n){this.Ua=e,this.serializer=n,this.metadata=new at,this.buffer=new Uint8Array,this.Wa=function(){return new TextDecoder("utf-8")}(),this.Ga().then(r=>{r&&r.sa()?this.metadata.resolve(r.ia.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ia)}`))},r=>this.metadata.reject(r))}close(){return this.Ua.cancel()}async getMetadata(){return this.metadata.promise}async qa(){return await this.getMetadata(),this.Ga()}async Ga(){const e=await this.za();if(e===null)return null;const n=this.Wa.decode(e),r=Number(n);isNaN(r)&&this.ja(`length string (${n}) is not valid number`);const i=await this.Ha(r);return new K2(JSON.parse(i),e.length+r)}Ja(){return this.buffer.findIndex(e=>e===123)}async za(){for(;this.Ja()<0&&!await this.Ya(););if(this.buffer.length===0)return null;const e=this.Ja();e<0&&this.ja("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ha(e){for(;this.buffer.length<e;)await this.Ya()&&this.ja("Reached the end of bundle when more is expected.");const n=this.Wa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}ja(e){throw this.Ua.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ya(){const e=await this.Ua.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class IF{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new F(O.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=G(i),a={documents:s.map(f=>Hl(o.serializer,f))},l=await o.xo("BatchGetDocuments",o.serializer.databaseId,se.emptyPath(),a,s.length),c=new Map;l.forEach(f=>{const m=FM(o.serializer,f);c.set(m.key.toString(),m)});const h=[];return s.forEach(f=>{const m=c.get(f.toString());J(!!m),h.push(m)}),h}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new na(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=W.fromPath(r);this.mutations.push(new m_(i,this.precondition(i)))}),await async function(r,i){const s=G(r),o={writes:i.map(a=>Kl(s.serializer,a))};await s.Co("Commit",s.serializer.databaseId,se.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw K();n=X.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new F(O.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(X.min())?Ae.exists(!1):Ae.updateTime(n):Ae.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(X.min()))throw new F(O.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ae.updateTime(n)}return Ae.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class EF{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Za=r.maxAttempts,this.Yo=new C_(this.asyncQueue,"transaction_retry")}Xa(){this.Za-=1,this.eu()}eu(){this.Yo.$o(async()=>{const e=new IF(this.datastore),n=this.tu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.nu(i)}))}).catch(r=>{this.nu(r)})})}tu(e){try{const n=this.updateFunction(e);return!fu(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}nu(e){this.Za>0&&this.ru(e)?(this.Za-=1,this.asyncQueue.enqueueAndForget(()=>(this.eu(),Promise.resolve()))):this.deferred.reject(e)}ru(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!uA(n)}return!1}}/**
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
 */class TF{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=it.UNAUTHENTICATED,this.clientId=TR.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{U("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(U("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new at;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=oa(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function $c(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await UA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function km(t,e){t.asyncQueue.verifyOperationInProgress();const n=await q_(t);U("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>XI(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>XI(e.remoteStore,i)),t._onlineComponents=e}function lP(t){return t.name==="FirebaseError"?t.code===O.FAILED_PRECONDITION||t.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function q_(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await $c(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!lP(n))throw n;xn("Error using user provided cache. Falling back to memory cache: "+n),await $c(t,new Pm)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await $c(t,new Pm);return t._offlineComponents}async function Sd(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await km(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await km(t,new $_))),t._onlineComponents}function uP(t){return q_(t).then(e=>e.persistence)}function W_(t){return q_(t).then(e=>e.localStore)}function cP(t){return Sd(t).then(e=>e.remoteStore)}function G_(t){return Sd(t).then(e=>e.syncEngine)}function SF(t){return Sd(t).then(e=>e.datastore)}async function $o(t){const e=await Sd(t),n=e.eventManager;return n.onListen=Z2.bind(null,e.syncEngine),n.onUnlisten=tF.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=eF.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=nF.bind(null,e.syncEngine),n}function RF(t){return t.asyncQueue.enqueue(async()=>{const e=await uP(t),n=await cP(t);return e.setNetworkEnabled(!0),function(i){const s=G(i);return s.M_.delete(0),Iu(s)}(n)})}function AF(t){return t.asyncQueue.enqueue(async()=>{const e=await uP(t),n=await cP(t);return e.setNetworkEnabled(!1),async function(i){const s=G(i);s.M_.add(0),await ra(s),s.N_.set("Offline")}(n)})}function PF(t,e){const n=new at;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,h){const f=G(c);return f.persistence.runTransaction("read document","readonly",m=>f.localDocuments.getDocument(m,h))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new F(O.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=oa(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await W_(t),e,n)),n.promise}function hP(t,e,n={}){const r=new at;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new Td({next:m=>{o.enqueueAndForget(()=>V_(s,f));const v=m.docs.has(a);!v&&m.fromCache?c.reject(new F(O.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&l&&l.source==="server"?c.reject(new F(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new M_(ea(a.path),h,{includeMetadataChanges:!0,ra:!0});return O_(s,f)}(await $o(t),t.asyncQueue,e,n,r)),r.promise}function kF(t,e){const n=new at;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await bh(i,s,!0),l=new nP(s,a.hs),c=l.da(a.documents),h=l.applyChanges(c,!1);o.resolve(h.snapshot)}catch(a){const l=oa(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await W_(t),e,n)),n.promise}function dP(t,e,n={}){const r=new at;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new Td({next:m=>{o.enqueueAndForget(()=>V_(s,f)),m.fromCache&&l.source==="server"?c.reject(new F(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new M_(a,h,{includeMetadataChanges:!0,ra:!0});return O_(s,f)}(await $o(t),t.asyncQueue,e,n,r)),r.promise}function CF(t,e){const n=new Td(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){G(i).z_.add(s),s.next()}(await $o(t),n)),()=>{n.$a(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){G(i).z_.delete(s)}(await $o(t),n))}}function bF(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?hA().encode(o):o,function(h,f){return new wF(h,f)}(function(h,f){if(h instanceof Uint8Array)return iE(h,f);if(h instanceof ArrayBuffer)return iE(new Uint8Array(h),f);if(h instanceof ReadableStream)return h.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,wu(e));t.asyncQueue.enqueueAndForget(async()=>{yF(await G_(t),i,r)})}function xF(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=G(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.$r.getNamedQuery(o,i))}(await W_(t),e))}/**
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
 */function fP(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=new Map;/**
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
 */function H_(t,e,n){if(!n)throw new F(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pP(t,e,n,r){if(e===!0&&r===!0)throw new F(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function oE(t){if(!W.isDocumentKey(t))throw new F(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function aE(t){if(W.isDocumentKey(t))throw new F(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Rd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function ue(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Rd(t);throw new F(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function mP(t,e){if(e<=0)throw new F(O.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new F(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fP((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new F(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new F(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new F(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Eu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new kL;switch(r.type){case"firstParty":return new NL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=sE.get(n);r&&(U("ComponentProvider","Removing Datastore"),sE.delete(n),r.terminate())}(this),Promise.resolve()}}function gP(t,e,n,r={}){var i;const s=(t=ue(t,Eu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&xn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=it.MOCK_USER;else{a=X0(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new F(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new it(c)}t._authCredentials=new CL(new ER(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ft=class _P{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _P(this.firestore,e,this._query)}},Ne=class yP{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new si(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yP(this.firestore,e,this._key)}},si=class vP extends Ft{constructor(e,n,r){super(e,n,ea(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new W(e))}withConverter(e){return new vP(this.firestore,e,this._path)}};function wP(t,e,...n){if(t=Y(t),H_("collection","path",e),t instanceof Eu){const r=se.fromString(e,...n);return aE(r),new si(t,null,r)}{if(!(t instanceof Ne||t instanceof si))throw new F(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return aE(r),new si(t.firestore,null,r)}}function NF(t,e){if(t=ue(t,Eu),H_("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new F(O.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Ft(t,null,function(r){return new Ar(se.emptyPath(),r)}(e))}function Ql(t,e,...n){if(t=Y(t),arguments.length===1&&(e=TR.newId()),H_("doc","path",e),t instanceof Eu){const r=se.fromString(e,...n);return oE(r),new Ne(t,null,new W(r))}{if(!(t instanceof Ne||t instanceof si))throw new F(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return oE(r),new Ne(t.firestore,t instanceof si?t.converter:null,new W(r))}}function IP(t,e){return t=Y(t),e=Y(e),(t instanceof Ne||t instanceof si)&&(e instanceof Ne||e instanceof si)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function EP(t,e){return t=Y(t),e=Y(e),t instanceof Ft&&e instanceof Ft&&t.firestore===e.firestore&&mu(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DF{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new C_(this,"async_queue_retry"),this.hu=()=>{const n=zc();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=zc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=zc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new at;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Ri(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw We("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=D_.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&K()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function Cm(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class OF{constructor(){this._progressObserver={},this._taskCompletionResolver=new at,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VF=-1;let Be=class extends Eu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new DF}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||TP(this),this._firestoreClient.terminate()}};function LF(t,e){const n=Ug(),r="(default)",i=ou(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=$b("firestore");s&&gP(i,...s)}return i}function ct(t){return t._firestoreClient||TP(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function TP(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,h){return new aM(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,fP(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new TF(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function MF(t,e){RP(t=ue(t,Be));const n=ct(t);if(n._uninitializedComponentsProvider)throw new F(O.FAILED_PRECONDITION,"SDK cache is already specified.");xn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new $_;return SP(n,i,new aP(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function FF(t){RP(t=ue(t,Be));const e=ct(t);if(e._uninitializedComponentsProvider)throw new F(O.FAILED_PRECONDITION,"SDK cache is already specified.");xn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new $_;return SP(e,r,new vF(r,n.cacheSizeBytes))}function SP(t,e,n){const r=new at;return t.asyncQueue.enqueue(async()=>{try{await $c(t,n),await km(t,e),r.resolve()}catch(i){const s=i;if(!lP(s))throw s;xn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function UF(t){if(t._initialized&&!t._terminated)throw new F(O.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new at;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Wn.D())return Promise.resolve();const i=r+"main";await Wn.delete(i)}(A_(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function BF(t){return function(n){const r=new at;return n.asyncQueue.enqueueAndForget(async()=>aF(await G_(n),r)),r.promise}(ct(t=ue(t,Be)))}function jF(t){return RF(ct(t=ue(t,Be)))}function zF(t){return AF(ct(t=ue(t,Be)))}function $F(t,e){const n=ct(t=ue(t,Be)),r=new OF;return bF(n,t._databaseId,e,r),r}function qF(t,e){return xF(ct(t=ue(t,Be)),e).then(n=>n?new Ft(t,null,n.query):null)}function RP(t){if(t._initialized||t._terminated)throw new F(O.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yn(et.fromBase64String(e))}catch(n){throw new F(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Yn(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yi=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ss=class{constructor(e){this._methodName=e}};/**
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
 */class Ad{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}}/**
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
 */const WF=/^__.*__$/;class GF{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Pr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ta(e,this.data,n,this.fieldTransforms)}}class AP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Pr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function PP(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Pd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Pd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Oh(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(PP(this.fu)&&WF.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class HF{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||wu(e)}Fu(e,n,r,i=!1){return new Pd({fu:e,methodName:n,vu:r,path:Re.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Rs(t){const e=t._freezeSettings(),n=wu(t._databaseId);return new HF(t._databaseId,!!e.ignoreUndefinedProperties,n)}function kd(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);ey("Data must be an object, but it was:",o,r);const a=bP(r,o);let l,c;if(s.merge)l=new Gt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const m=bm(e,f,n);if(!o.contains(m))throw new F(O.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);NP(h,m)||h.push(m)}l=new Gt(h),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new GF(new mt(a),l,c)}class Tu extends Ss{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Tu}}function kP(t,e,n){return new Pd({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class K_ extends Ss{_toFieldTransform(e){return new _u(e.path,new Vo)}isEqual(e){return e instanceof K_}}class Q_ extends Ss{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=kP(this,e,!0),r=this.Mu.map(s=>As(s,n)),i=new ds(r);return new _u(e.path,i)}isEqual(e){return e instanceof Q_&&Ao(this.Mu,e.Mu)}}class Y_ extends Ss{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=kP(this,e,!0),r=this.Mu.map(s=>As(s,n)),i=new fs(r);return new _u(e.path,i)}isEqual(e){return e instanceof Y_&&Ao(this.Mu,e.Mu)}}class J_ extends Ss{constructor(e,n){super(e),this.xu=n}_toFieldTransform(e){const n=new Lo(e.serializer,nA(e.serializer,this.xu));return new _u(e.path,n)}isEqual(e){return e instanceof J_&&this.xu===e.xu}}function X_(t,e,n,r){const i=t.Fu(1,e,n);ey("Data must be an object, but it was:",i,r);const s=[],o=mt.empty();Ts(r,(l,c)=>{const h=ty(e,l,n);c=Y(c);const f=i.Su(h);if(c instanceof Tu)s.push(h);else{const m=As(c,f);m!=null&&(s.push(h),o.set(h,m))}});const a=new Gt(s);return new AP(o,a,i.fieldTransforms)}function Z_(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[bm(e,r,n)],l=[i];if(s.length%2!=0)throw new F(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(bm(e,s[m])),l.push(s[m+1]);const c=[],h=mt.empty();for(let m=a.length-1;m>=0;--m)if(!NP(c,a[m])){const v=a[m];let A=l[m];A=Y(A);const P=o.Su(v);if(A instanceof Tu)c.push(v);else{const C=As(A,P);C!=null&&(c.push(v),h.set(v,C))}}const f=new Gt(c);return new AP(h,f,o.fieldTransforms)}function CP(t,e,n,r=!1){return As(n,t.Fu(r?4:3,e))}function As(t,e){if(xP(t=Y(t)))return ey("Unsupported field value:",e,t),bP(t,e);if(t instanceof Ss)return function(r,i){if(!PP(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=As(a,i.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Y(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nA(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Pe.fromDate(r);return{timestampValue:Mo(i.serializer,s)}}if(r instanceof Pe){const s=new Pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Mo(i.serializer,s)}}if(r instanceof Ad)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Yn)return{bytesValue:pA(i.serializer,r._byteString)};if(r instanceof Ne){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:w_(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Rd(r)}`)}(t,e)}function bP(t,e){const n={};return LR(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ts(t,(r,i)=>{const s=As(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function xP(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Pe||t instanceof Ad||t instanceof Yn||t instanceof Ne||t instanceof Ss)}function ey(t,e,n){if(!xP(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Rd(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function bm(t,e,n){if((e=Y(e))instanceof yi)return e._internalPath;if(typeof e=="string")return ty(t,e);throw Oh("Field path arguments must be of type string or ",t,!1,void 0,n)}const KF=new RegExp("[~\\*/\\[\\]]");function ty(t,e,n){if(e.search(KF)>=0)throw Oh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new yi(...e.split("."))._internalPath}catch{throw Oh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Oh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new F(O.INVALID_ARGUMENT,a+t+l)}function NP(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Cd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class QF extends Yl{data(){return super.data()}}function Cd(t,e){return typeof e=="string"?ty(t,e):e instanceof yi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ny{}class Su extends ny{}function Fr(t,e,...n){let r=[];e instanceof ny&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof ry).length,a=s.filter(l=>l instanceof bd).length;if(o>1||o>0&&a>0)throw new F(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class bd extends Su{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new bd(e,n,r)}_apply(e){const n=this._parse(e);return VP(e._query,n),new Ft(e.firestore,e.converter,mm(e._query,n))}_parse(e){const n=Rs(e.firestore);return function(s,o,a,l,c,h,f){let m;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new F(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){cE(f,h);const v=[];for(const A of f)v.push(uE(l,s,A));m={arrayValue:{values:v}}}else m=uE(l,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||cE(f,h),m=CP(a,o,f,h==="in"||h==="not-in");return oe.create(c,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function YF(t,e,n){const r=e,i=Cd("where",t);return bd._create(i,r,n)}class ry extends ny{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ry(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:he.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)VP(o,l),o=mm(o,l)}(e._query,n),new Ft(e.firestore,e.converter,mm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class iy extends Su{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new iy(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new F(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new F(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Gl(s,o)}(e._query,this._field,this._direction);return new Ft(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Ar(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function JF(t,e="asc"){const n=e,r=Cd("orderBy",t);return iy._create(r,n)}class xd extends Su{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new xd(e,n,r)}_apply(e){return new Ft(e.firestore,e.converter,Ah(e._query,this._limit,this._limitType))}}function XF(t){return mP("limit",t),xd._create("limit",t,"F")}function ZF(t){return mP("limitToLast",t),xd._create("limitToLast",t,"L")}class Nd extends Su{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Nd(e,n,r)}_apply(e){const n=OP(e,this.type,this._docOrFields,this._inclusive);return new Ft(e.firestore,e.converter,function(i,s){return new Ar(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function eU(...t){return Nd._create("startAt",t,!0)}function tU(...t){return Nd._create("startAfter",t,!1)}class Dd extends Su{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Dd(e,n,r)}_apply(e){const n=OP(e,this.type,this._docOrFields,this._inclusive);return new Ft(e.firestore,e.converter,function(i,s){return new Ar(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function nU(...t){return Dd._create("endBefore",t,!1)}function rU(...t){return Dd._create("endAt",t,!0)}function OP(t,e,n,r){if(n[0]=Y(n[0]),n[0]instanceof Yl)return function(s,o,a,l,c){if(!l)throw new F(O.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const h=[];for(const f of go(s))if(f.field.isKeyField())h.push(cs(o,l.key));else{const m=l.data.field(f.field);if(md(m))throw new F(O.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const v=f.field.canonicalString();throw new F(O.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${v}' (used as the orderBy) does not exist.`)}h.push(m)}return new gi(h,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Rs(t.firestore);return function(o,a,l,c,h,f){const m=o.explicitOrderBy;if(h.length>m.length)throw new F(O.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const v=[];for(let A=0;A<h.length;A++){const P=h[A];if(m[A].field.isKeyField()){if(typeof P!="string")throw new F(O.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof P}`);if(!f_(o)&&P.indexOf("/")!==-1)throw new F(O.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${P}' contains a slash.`);const C=o.path.child(se.fromString(P));if(!W.isDocumentKey(C))throw new F(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${C}' is not because it contains an odd number of segments.`);const E=new W(C);v.push(cs(a,E))}else{const C=CP(l,c,P);v.push(C)}}return new gi(v,f)}(t._query,t.firestore._databaseId,i,e,n,r)}}function uE(t,e,n){if(typeof(n=Y(n))=="string"){if(n==="")throw new F(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!f_(e)&&n.indexOf("/")!==-1)throw new F(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(se.fromString(n));if(!W.isDocumentKey(r))throw new F(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return cs(t,new W(r))}if(n instanceof Ne)return cs(t,n._key);throw new F(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Rd(n)}.`)}function cE(t,e){if(!Array.isArray(t)||t.length===0)throw new F(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function VP(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new F(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class sy{convertValue(e,n="none"){switch(us(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(fi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ts(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Ad(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=h_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp($l(e));default:return null}}convertTimestamp(e){const n=wr(e);return new Pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=se.fromString(e);J(RA(r));const i=new pi(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||We(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class iU extends sy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Ir=class extends Yl{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new pl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Cd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},pl=class extends Ir{data(e={}){return super.data(e)}},vi=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Hi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new pl(this._firestore,this._userDataWriter,r.key,r,new Hi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new pl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Hi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new pl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Hi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:sU(a.type),doc:l,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function sU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}function LP(t,e){return t instanceof Ir&&e instanceof Ir?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof vi&&e instanceof vi&&t._firestore===e._firestore&&EP(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oU(t){t=ue(t,Ne);const e=ue(t.firestore,Be);return hP(ct(e),t._key).then(n=>oy(e,t,n))}class Ps extends sy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}function aU(t){t=ue(t,Ne);const e=ue(t.firestore,Be),n=ct(e),r=new Ps(e);return PF(n,t._key).then(i=>new Ir(e,r,t._key,i,new Hi(i!==null&&i.hasLocalMutations,!0),t.converter))}function lU(t){t=ue(t,Ne);const e=ue(t.firestore,Be);return hP(ct(e),t._key,{source:"server"}).then(n=>oy(e,t,n))}function uU(t){t=ue(t,Ft);const e=ue(t.firestore,Be),n=ct(e),r=new Ps(e);return DP(t._query),dP(n,t._query).then(i=>new vi(e,r,t,i))}function cU(t){t=ue(t,Ft);const e=ue(t.firestore,Be),n=ct(e),r=new Ps(e);return kF(n,t._query).then(i=>new vi(e,r,t,i))}function hU(t){t=ue(t,Ft);const e=ue(t.firestore,Be),n=ct(e),r=new Ps(e);return dP(n,t._query,{source:"server"}).then(i=>new vi(e,r,t,i))}function xm(t,e,n){t=ue(t,Ne);const r=ue(t.firestore,Be),i=Od(t.converter,e,n);return Ru(r,[kd(Rs(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ae.none())])}function hE(t,e,n,...r){t=ue(t,Ne);const i=ue(t.firestore,Be),s=Rs(i);let o;return o=typeof(e=Y(e))=="string"||e instanceof yi?Z_(s,"updateDoc",t._key,e,n,r):X_(s,"updateDoc",t._key,e),Ru(i,[o.toMutation(t._key,Ae.exists(!0))])}function dU(t){return Ru(ue(t.firestore,Be),[new na(t._key,Ae.none())])}function fU(t,e){const n=ue(t.firestore,Be),r=Ql(t),i=Od(t.converter,e);return Ru(n,[kd(Rs(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ae.exists(!1))]).then(()=>r)}function MP(t,...e){var n,r,i;t=Y(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Cm(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Cm(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,h;if(t instanceof Ne)c=ue(t.firestore,Be),h=ea(t._key.path),l={next:f=>{e[o]&&e[o](oy(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=ue(t,Ft);c=ue(f.firestore,Be),h=f._query;const m=new Ps(c);l={next:v=>{e[o]&&e[o](new vi(c,m,f,v))},error:e[o+1],complete:e[o+2]},DP(t._query)}return function(m,v,A,P){const C=new Td(P),E=new M_(v,C,A);return m.asyncQueue.enqueueAndForget(async()=>O_(await $o(m),E)),()=>{C.$a(),m.asyncQueue.enqueueAndForget(async()=>V_(await $o(m),E))}}(ct(c),h,a,l)}function pU(t,e){return CF(ct(t=ue(t,Be)),Cm(e)?e:{next:e})}function Ru(t,e){return function(r,i){const s=new at;return r.asyncQueue.enqueueAndForget(async()=>rF(await G_(r),i,s)),s.promise}(ct(t),e)}function oy(t,e,n){const r=n.docs.get(e._key),i=new Ps(t);return new Ir(t,i,e._key,r,new Hi(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const mU={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gU=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Rs(e)}set(e,n,r){this._verifyNotCommitted();const i=qr(e,this._firestore),s=Od(i.converter,n,r),o=kd(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ae.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=qr(e,this._firestore);let o;return o=typeof(n=Y(n))=="string"||n instanceof yi?Z_(this._dataReader,"WriteBatch.update",s._key,n,r,i):X_(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Ae.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=qr(e,this._firestore);return this._mutations=this._mutations.concat(new na(n._key,Ae.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new F(O.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function qr(t,e){if((t=Y(t)).firestore!==e)throw new F(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let _U=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Rs(n)}get(n){const r=qr(n,this._firestore),i=new iU(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return K();const o=s[0];if(o.isFoundDocument())return new Yl(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Yl(this._firestore,i,r._key,null,r.converter);throw K()})}set(n,r,i){const s=qr(n,this._firestore),o=Od(s.converter,r,i),a=kd(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=qr(n,this._firestore);let a;return a=typeof(r=Y(r))=="string"||r instanceof yi?Z_(this._dataReader,"Transaction.update",o._key,r,i,s):X_(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=qr(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=qr(e,this._firestore),r=new Ps(this._firestore);return super.get(e).then(i=>new Ir(this._firestore,r,n._key,i._document,new Hi(!1,!1),n.converter))}};function yU(t,e,n){t=ue(t,Be);const r=Object.assign(Object.assign({},mU),n);return function(s){if(s.maxAttempts<1)throw new F(O.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new at;return s.asyncQueue.enqueueAndForget(async()=>{const c=await SF(s);new EF(s.asyncQueue,c,a,o,l).Xa()}),l.promise}(ct(t),i=>e(new _U(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vU(){return new Tu("deleteField")}function wU(){return new K_("serverTimestamp")}function IU(...t){return new Q_("arrayUnion",t)}function EU(...t){return new Y_("arrayRemove",t)}function TU(t){return new J_("increment",t)}(function(e,n=!0){(function(i){Zo=i})(Tr),yr(new yn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Be(new bL(r.getProvider("auth-internal")),new OL(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new F(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pi(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),rn(sI,"4.6.3",e),rn(sI,"4.6.3","esm2017")})();const SU="@firebase/firestore-compat",RU="0.3.32";/**
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
 */function ay(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new F("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function dE(){if(typeof Uint8Array>"u")throw new F("unimplemented","Uint8Arrays are not available in this environment.")}function fE(){if(!sM())throw new F("unimplemented","Blobs are unavailable in Firestore in this environment.")}let FP=class Nm{constructor(e){this._delegate=e}static fromBase64String(e){return fE(),new Nm(Yn.fromBase64String(e))}static fromUint8Array(e){return dE(),new Nm(Yn.fromUint8Array(e))}toBase64(){return fE(),this._delegate.toBase64()}toUint8Array(){return dE(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
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
 */function Dm(t){return AU(t,["next","error","complete"])}function AU(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class PU{enableIndexedDbPersistence(e,n){return MF(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return FF(e._delegate)}clearIndexedDbPersistence(e){return UF(e._delegate)}}class UP{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof pi||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&xn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){gP(this._delegate,e,n,r)}enableNetwork(){return jF(this._delegate)}disableNetwork(){return zF(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,pP("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return BF(this._delegate)}onSnapshotsInSync(e){return pU(this._delegate,e)}get app(){if(!this._appCompat)throw new F("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new qo(this,wP(this._delegate,e))}catch(n){throw Dt(n,"collection()","Firestore.collection()")}}doc(e){try{return new dn(this,Ql(this._delegate,e))}catch(n){throw Dt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Nt(this,NF(this._delegate,e))}catch(n){throw Dt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return yU(this._delegate,n=>e(new BP(this,n)))}batch(){return ct(this._delegate),new jP(new gU(this._delegate,e=>Ru(this._delegate,e)))}loadBundle(e){return $F(this._delegate,e)}namedQuery(e){return qF(this._delegate,e).then(n=>n?new Nt(this,n):null)}}class Vd extends sy{constructor(e){super(),this.firestore=e}convertBytes(e){return new FP(new Yn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return dn.forKey(n,this.firestore,null)}}function kU(t){AL(t)}class BP{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Vd(e)}get(e){const n=Ki(e);return this._delegate.get(n).then(r=>new Jl(this._firestore,new Ir(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Ki(e);return r?(ay("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Ki(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Ki(e);return this._delegate.delete(n),this}}class jP{constructor(e){this._delegate=e}set(e,n,r){const i=Ki(e);return r?(ay("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Ki(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Ki(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class _s{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new pl(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Xl(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=_s.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new _s(e,new Vd(e),n),i.set(n,s)),s}}_s.INSTANCES=new WeakMap;class dn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Vd(e)}static forPath(e,n,r){if(e.length%2!==0)throw new F("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new dn(n,new Ne(n._delegate,r,new W(e)))}static forKey(e,n,r){return new dn(n,new Ne(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new qo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new qo(this.firestore,wP(this._delegate,e))}catch(n){throw Dt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Y(e),e instanceof Ne?IP(this._delegate,e):!1}set(e,n){n=ay("DocumentReference.set",n);try{return n?xm(this._delegate,e,n):xm(this._delegate,e)}catch(r){throw Dt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?hE(this._delegate,e):hE(this._delegate,e,n,...r)}catch(i){throw Dt(i,"updateDoc()","DocumentReference.update()")}}delete(){return dU(this._delegate)}onSnapshot(...e){const n=zP(e),r=$P(e,i=>new Jl(this.firestore,new Ir(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return MP(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=aU(this._delegate):(e==null?void 0:e.source)==="server"?n=lU(this._delegate):n=oU(this._delegate),n.then(r=>new Jl(this.firestore,new Ir(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new dn(this.firestore,e?this._delegate.withConverter(_s.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Dt(t,e,n){return t.message=t.message.replace(e,n),t}function zP(t){for(const e of t)if(typeof e=="object"&&!Dm(e))return e;return{}}function $P(t,e){var n,r;let i;return Dm(t[0])?i=t[0]:Dm(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Jl{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new dn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return LP(this._delegate,e._delegate)}}class Xl extends Jl{data(e){const n=this._delegate.data(e);return this._delegate._converter||PL(n!==void 0),n}}class Nt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Vd(e)}where(e,n,r){try{return new Nt(this.firestore,Fr(this._delegate,YF(e,n,r)))}catch(i){throw Dt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Nt(this.firestore,Fr(this._delegate,JF(e,n)))}catch(r){throw Dt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Nt(this.firestore,Fr(this._delegate,XF(e)))}catch(n){throw Dt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Nt(this.firestore,Fr(this._delegate,ZF(e)))}catch(n){throw Dt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Nt(this.firestore,Fr(this._delegate,eU(...e)))}catch(n){throw Dt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Nt(this.firestore,Fr(this._delegate,tU(...e)))}catch(n){throw Dt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Nt(this.firestore,Fr(this._delegate,nU(...e)))}catch(n){throw Dt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Nt(this.firestore,Fr(this._delegate,rU(...e)))}catch(n){throw Dt(n,"endAt()","Query.endAt()")}}isEqual(e){return EP(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=cU(this._delegate):(e==null?void 0:e.source)==="server"?n=hU(this._delegate):n=uU(this._delegate),n.then(r=>new Om(this.firestore,new vi(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=zP(e),r=$P(e,i=>new Om(this.firestore,new vi(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return MP(this._delegate,n,r)}withConverter(e){return new Nt(this.firestore,e?this._delegate.withConverter(_s.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class CU{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Xl(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Om{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Nt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Xl(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new CU(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Xl(this._firestore,r))})}isEqual(e){return LP(this._delegate,e._delegate)}}class qo extends Nt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new dn(this.firestore,e):null}doc(e){try{return e===void 0?new dn(this.firestore,Ql(this._delegate)):new dn(this.firestore,Ql(this._delegate,e))}catch(n){throw Dt(n,"doc()","CollectionReference.doc()")}}add(e){return fU(this._delegate,e).then(n=>new dn(this.firestore,n))}isEqual(e){return IP(this._delegate,e._delegate)}withConverter(e){return new qo(this.firestore,e?this._delegate.withConverter(_s.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ki(t){return ue(t,Ne)}/**
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
 */class ly{constructor(...e){this._delegate=new yi(...e)}static documentId(){return new ly(Re.keyField().canonicalString())}isEqual(e){return e=Y(e),e instanceof yi?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class zi{constructor(e){this._delegate=e}static serverTimestamp(){const e=wU();return e._methodName="FieldValue.serverTimestamp",new zi(e)}static delete(){const e=vU();return e._methodName="FieldValue.delete",new zi(e)}static arrayUnion(...e){const n=IU(...e);return n._methodName="FieldValue.arrayUnion",new zi(n)}static arrayRemove(...e){const n=EU(...e);return n._methodName="FieldValue.arrayRemove",new zi(n)}static increment(e){const n=TU(e);return n._methodName="FieldValue.increment",new zi(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const bU={Firestore:UP,GeoPoint:Ad,Timestamp:Pe,Blob:FP,Transaction:BP,WriteBatch:jP,DocumentReference:dn,DocumentSnapshot:Jl,Query:Nt,QueryDocumentSnapshot:Xl,QuerySnapshot:Om,CollectionReference:qo,FieldPath:ly,FieldValue:zi,setLogLevel:kU,CACHE_SIZE_UNLIMITED:VF};function xU(t,e){t.INTERNAL.registerComponent(new yn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},bU)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NU(t){xU(t,(e,n)=>new UP(e,n,new PU)),t.registerVersion(SU,RU)}NU(fe);/**
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
 */const qP="firebasestorage.googleapis.com",WP="storageBucket",DU=2*60*1e3,OU=10*60*1e3,VU=1e3;/**
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
 */class Oe extends At{constructor(e,n,r=0){super(Xf(e),`Firebase Storage: ${n} (${Xf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Oe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Xf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Te;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Te||(Te={}));function Xf(t){return"storage/"+t}function uy(){const t="An unknown error occurred, please check the error payload for server response.";return new Oe(Te.UNKNOWN,t)}function LU(t){return new Oe(Te.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function MU(t){return new Oe(Te.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function FU(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Oe(Te.UNAUTHENTICATED,t)}function UU(){return new Oe(Te.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function BU(t){return new Oe(Te.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function GP(){return new Oe(Te.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function HP(){return new Oe(Te.CANCELED,"User canceled the upload/download.")}function jU(t){return new Oe(Te.INVALID_URL,"Invalid URL '"+t+"'.")}function zU(t){return new Oe(Te.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function $U(){return new Oe(Te.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+WP+"' property when initializing the app?")}function KP(){return new Oe(Te.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function qU(){return new Oe(Te.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function WU(){return new Oe(Te.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function GU(t){return new Oe(Te.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function yo(t){return new Oe(Te.INVALID_ARGUMENT,t)}function QP(){return new Oe(Te.APP_DELETED,"The Firebase app was deleted.")}function YP(t){return new Oe(Te.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ml(t,e){return new Oe(Te.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ua(t){throw new Oe(Te.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Rt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Rt.makeFromUrl(e,n)}catch{return new Rt(e,"")}if(r.path==="")return r;throw zU(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",v=new RegExp(`^https?://${f}/${h}/b/${i}/o${m}`,"i"),A={bucket:1,path:3},P=n===qP?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",E=new RegExp(`^https?://${P}/${i}/${C}`,"i"),w=[{regex:a,indices:l,postModify:s},{regex:v,indices:A,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<w.length;N++){const L=w[N],M=L.regex.exec(e);if(M){const I=M[L.indices.bucket];let y=M[L.indices.path];y||(y=""),r=new Rt(I,y),L.postModify(r);break}}if(r==null)throw jU(e);return r}}class HU{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function KU(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function h(...C){c||(c=!0,e.apply(null,C))}function f(C){i=setTimeout(()=>{i=null,t(v,l())},C)}function m(){s&&clearTimeout(s)}function v(C,...E){if(c){m();return}if(C){m(),h.call(null,C,...E);return}if(l()||o){m(),h.call(null,C,...E);return}r<64&&(r*=2);let w;a===1?(a=2,w=0):w=(r+Math.random())*1e3,f(w)}let A=!1;function P(C){A||(A=!0,m(),!c&&(i!==null?(C||(a=2),clearTimeout(i),f(0)):C||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,P(!0)},n),P}function QU(t){t(!1)}/**
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
 */function YU(t){return t!==void 0}function JU(t){return typeof t=="function"}function XU(t){return typeof t=="object"&&!Array.isArray(t)}function Ld(t){return typeof t=="string"||t instanceof String}function pE(t){return cy()&&t instanceof Blob}function cy(){return typeof Blob<"u"}function Vm(t,e,n,r){if(r<e)throw yo(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw yo(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function ki(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function JP(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var es;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(es||(es={}));/**
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
 */function XP(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class ZU{constructor(e,n,r,i,s,o,a,l,c,h,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,A)=>{this.resolve_=v,this.reject_=A,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new mc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===es.NO_ERROR,l=s.getStatus();if(!a||XP(l,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===es.ABORT;r(!1,new mc(!1,null,h));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new mc(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());YU(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=uy();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?QP():HP();o(l)}else{const l=GP();o(l)}};this.canceled_?n(!1,new mc(!1,null,!0)):this.backoffId_=KU(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&QU(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class mc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function e4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function t4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function n4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function r4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function i4(t,e,n,r,i,s,o=!0){const a=JP(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return n4(c,e),e4(c,n),t4(c,s),r4(c,r),new ZU(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function s4(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function o4(...t){const e=s4();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(cy())return new Blob(t);throw new Oe(Te.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function a4(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function l4(t){if(typeof atob>"u")throw GU("base-64");return atob(t)}/**
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
 */const fn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Zf{constructor(e,n){this.data=e,this.contentType=n||null}}function ZP(t,e){switch(t){case fn.RAW:return new Zf(e1(e));case fn.BASE64:case fn.BASE64URL:return new Zf(t1(t,e));case fn.DATA_URL:return new Zf(c4(e),h4(e))}throw uy()}function e1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function u4(t){let e;try{e=decodeURIComponent(t)}catch{throw ml(fn.DATA_URL,"Malformed data URL.")}return e1(e)}function t1(t,e){switch(t){case fn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ml(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case fn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ml(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=l4(e)}catch(i){throw i.message.includes("polyfill")?i:ml(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class n1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ml(fn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=d4(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function c4(t){const e=new n1(t);return e.base64?t1(fn.BASE64,e.rest):u4(e.rest)}function h4(t){return new n1(t).contentType}function d4(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Un{constructor(e,n){let r=0,i="";pE(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(pE(this.data_)){const r=this.data_,i=a4(r,e,n);return i===null?null:new Un(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Un(r,!0)}}static getBlob(...e){if(cy()){const n=e.map(r=>r instanceof Un?r.data_:r);return new Un(o4.apply(null,n))}else{const n=e.map(o=>Ld(o)?ZP(fn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Un(i,!0)}}uploadData(){return this.data_}}/**
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
 */function hy(t){let e;try{e=JSON.parse(t)}catch{return null}return XU(e)?e:null}/**
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
 */function f4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function p4(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function r1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function m4(t,e){return e}class bt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||m4}}let gc=null;function g4(t){return!Ld(t)||t.length<2?t:r1(t)}function Au(){if(gc)return gc;const t=[];t.push(new bt("bucket")),t.push(new bt("generation")),t.push(new bt("metageneration")),t.push(new bt("name","fullPath",!0));function e(s,o){return g4(o)}const n=new bt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new bt("size");return i.xform=r,t.push(i),t.push(new bt("timeCreated")),t.push(new bt("updated")),t.push(new bt("md5Hash",null,!0)),t.push(new bt("cacheControl",null,!0)),t.push(new bt("contentDisposition",null,!0)),t.push(new bt("contentEncoding",null,!0)),t.push(new bt("contentLanguage",null,!0)),t.push(new bt("contentType",null,!0)),t.push(new bt("metadata","customMetadata",!0)),gc=t,gc}function _4(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Rt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function y4(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return _4(r,t),r}function i1(t,e,n){const r=hy(e);return r===null?null:y4(t,r,n)}function v4(t,e,n,r){const i=hy(e);if(i===null||!Ld(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const h=t.bucket,f=t.fullPath,m="/b/"+o(h)+"/o/"+o(f),v=ki(m,n,r),A=JP({alt:"media",token:c});return v+A})[0]}function dy(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
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
 */const mE="prefixes",gE="items";function w4(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[mE])for(const i of n[mE]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new Rt(e,s));r.prefixes.push(o)}if(n[gE])for(const i of n[gE]){const s=t._makeStorageReference(new Rt(e,i.name));r.items.push(s)}return r}function I4(t,e,n){const r=hy(n);return r===null?null:w4(t,e,r)}class Cr{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Hn(t){if(!t)throw uy()}function Md(t,e){function n(r,i){const s=i1(t,i,e);return Hn(s!==null),s}return n}function E4(t,e){function n(r,i){const s=I4(t,e,i);return Hn(s!==null),s}return n}function T4(t,e){function n(r,i){const s=i1(t,i,e);return Hn(s!==null),v4(s,i,t.host,t._protocol)}return n}function aa(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=UU():i=FU():n.getStatus()===402?i=MU(t.bucket):n.getStatus()===403?i=BU(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Fd(t){const e=aa(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=LU(t.path)),s.serverResponse=i.serverResponse,s}return n}function s1(t,e,n){const r=e.fullServerUrl(),i=ki(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Cr(i,s,Md(t,n),o);return a.errorHandler=Fd(e),a}function S4(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=ki(o,t.host,t._protocol),l="GET",c=t.maxOperationRetryTime,h=new Cr(a,l,E4(t,e.bucket),c);return h.urlParams=s,h.errorHandler=aa(e),h}function R4(t,e,n){const r=e.fullServerUrl(),i=ki(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Cr(i,s,T4(t,n),o);return a.errorHandler=Fd(e),a}function A4(t,e,n,r){const i=e.fullServerUrl(),s=ki(i,t.host,t._protocol),o="PATCH",a=dy(n,r),l={"Content-Type":"application/json; charset=utf-8"},c=t.maxOperationRetryTime,h=new Cr(s,o,Md(t,r),c);return h.headers=l,h.body=a,h.errorHandler=Fd(e),h}function P4(t,e){const n=e.fullServerUrl(),r=ki(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,c){}const a=new Cr(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=Fd(e),a}function k4(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function o1(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=k4(null,e)),r}function a1(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let w="";for(let N=0;N<2;N++)w=w+Math.random().toString().slice(2);return w}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=o1(e,r,i),h=dy(c,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+l+"--",v=Un.getBlob(f,r,m);if(v===null)throw KP();const A={name:c.fullPath},P=ki(s,t.host,t._protocol),C="POST",E=t.maxUploadRetryTime,_=new Cr(P,C,Md(t,n),E);return _.urlParams=A,_.headers=o,_.body=v.uploadData(),_.errorHandler=aa(e),_}class Vh{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function fy(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Hn(!1)}return Hn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function C4(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=o1(e,r,i),a={name:o.fullPath},l=ki(s,t.host,t._protocol),c="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=dy(o,n),m=t.maxUploadRetryTime;function v(P){fy(P);let C;try{C=P.getResponseHeader("X-Goog-Upload-URL")}catch{Hn(!1)}return Hn(Ld(C)),C}const A=new Cr(l,c,v,m);return A.urlParams=a,A.headers=h,A.body=f,A.errorHandler=aa(e),A}function b4(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const h=fy(c,["active","final"]);let f=null;try{f=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Hn(!1)}f||Hn(!1);const m=Number(f);return Hn(!isNaN(m)),new Vh(m,r.size(),h==="final")}const o="POST",a=t.maxUploadRetryTime,l=new Cr(n,o,s,a);return l.headers=i,l.errorHandler=aa(e),l}const _E=256*1024;function x4(t,e,n,r,i,s,o,a){const l=new Vh(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw qU();const c=l.total-l.current;let h=c;i>0&&(h=Math.min(h,i));const f=l.current,m=f+h;let v="";h===0?v="finalize":c===h?v="upload, finalize":v="upload";const A={"X-Goog-Upload-Command":v,"X-Goog-Upload-Offset":`${l.current}`},P=r.slice(f,m);if(P===null)throw KP();function C(N,L){const M=fy(N,["active","final"]),I=l.current+h,y=r.size();let T;return M==="final"?T=Md(e,s)(N,L):T=null,new Vh(I,y,M==="final",T)}const E="POST",_=e.maxUploadRetryTime,w=new Cr(n,E,C,_);return w.headers=A,w.body=P.uploadData(),w.progressCallback=a||null,w.errorHandler=aa(t),w}/**
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
 */const N4={STATE_CHANGED:"state_changed"},Ot={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ep(t){switch(t){case"running":case"pausing":case"canceling":return Ot.RUNNING;case"paused":return Ot.PAUSED;case"success":return Ot.SUCCESS;case"canceled":return Ot.CANCELED;case"error":return Ot.ERROR;default:return Ot.ERROR}}/**
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
 */class D4{constructor(e,n,r){if(JU(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function Bs(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class O4{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=es.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=es.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=es.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ua("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ua("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ua("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ua("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ua("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class V4 extends O4{initXhr(){this.xhr_.responseType="text"}}function An(){return new V4}/**
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
 */class l1{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=Au(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Te.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(XP(i.status,[]))if(s)i=GP();else{this.sleepTime=Math.max(this.sleepTime*2,VU),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Te.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=C4(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,An,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=b4(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,An,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=_E*this._chunkMultiplier,n=new Vh(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=x4(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,An,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){_E*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=s1(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,An,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=a1(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,An,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=HP(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=ep(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new D4(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(ep(this._state)){case Ot.SUCCESS:Bs(this._resolve.bind(null,this.snapshot))();break;case Ot.CANCELED:case Ot.ERROR:const n=this._reject;Bs(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(ep(this._state)){case Ot.RUNNING:case Ot.PAUSED:e.next&&Bs(e.next.bind(e,this.snapshot))();break;case Ot.SUCCESS:e.complete&&Bs(e.complete.bind(e))();break;case Ot.CANCELED:case Ot.ERROR:e.error&&Bs(e.error.bind(e,this._error))();break;default:e.error&&Bs(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class ys{constructor(e,n){this._service=e,n instanceof Rt?this._location=n:this._location=Rt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ys(e,n)}get root(){const e=new Rt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return r1(this._location.path)}get storage(){return this._service}get parent(){const e=f4(this._location.path);if(e===null)return null;const n=new Rt(this._location.bucket,e);return new ys(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw YP(e)}}function L4(t,e,n){t._throwIfRoot("uploadBytes");const r=a1(t.storage,t._location,Au(),new Un(e,!0),n);return t.storage.makeRequestWithTokens(r,An).then(i=>({metadata:i,ref:t}))}function M4(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new l1(t,new Un(e),n)}function F4(t){const e={prefixes:[],items:[]};return u1(t,e).then(()=>e)}async function u1(t,e,n){const i=await c1(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await u1(t,e,i.nextPageToken)}function c1(t,e){e!=null&&typeof e.maxResults=="number"&&Vm("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=S4(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,An)}function U4(t){t._throwIfRoot("getMetadata");const e=s1(t.storage,t._location,Au());return t.storage.makeRequestWithTokens(e,An)}function B4(t,e){t._throwIfRoot("updateMetadata");const n=A4(t.storage,t._location,e,Au());return t.storage.makeRequestWithTokens(n,An)}function j4(t){t._throwIfRoot("getDownloadURL");const e=R4(t.storage,t._location,Au());return t.storage.makeRequestWithTokens(e,An).then(n=>{if(n===null)throw WU();return n})}function z4(t){t._throwIfRoot("deleteObject");const e=P4(t.storage,t._location);return t.storage.makeRequestWithTokens(e,An)}function h1(t,e){const n=p4(t._location.path,e),r=new Rt(t._location.bucket,n);return new ys(t.storage,r)}/**
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
 */function $4(t){return/^[A-Za-z]+:\/\//.test(t)}function q4(t,e){return new ys(t,e)}function d1(t,e){if(t instanceof py){const n=t;if(n._bucket==null)throw $U();const r=new ys(n,n._bucket);return e!=null?d1(r,e):r}else return e!==void 0?h1(t,e):t}function W4(t,e){if(e&&$4(e)){if(t instanceof py)return q4(t,e);throw yo("To use ref(service, url), the first argument must be a Storage instance.")}else return d1(t,e)}function yE(t,e){const n=e==null?void 0:e[WP];return n==null?null:Rt.makeFromBucketSpec(n,t)}function G4(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:X0(i,t.app.options.projectId))}class py{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=qP,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=DU,this._maxUploadRetryTime=OU,this._requests=new Set,i!=null?this._bucket=Rt.makeFromBucketSpec(i,this._host):this._bucket=yE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Rt.makeFromBucketSpec(this._url,e):this._bucket=yE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Vm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Vm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ys(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new HU(QP());{const o=i4(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const vE="@firebase/storage",wE="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H4="storage";function K4(t,e,n){return t=Y(t),L4(t,e,n)}function Q4(t,e,n){return t=Y(t),M4(t,e,n)}function Y4(t){return t=Y(t),U4(t)}function J4(t,e){return t=Y(t),B4(t,e)}function X4(t,e){return t=Y(t),c1(t,e)}function Z4(t){return t=Y(t),F4(t)}function f1(t){return t=Y(t),j4(t)}function eB(t){return t=Y(t),z4(t)}function Lm(t,e){return t=Y(t),W4(t,e)}function tB(t,e){return h1(t,e)}function nB(t,e,n,r={}){G4(t,e,n,r)}function rB(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new py(n,r,i,e,Tr)}function iB(){yr(new yn(H4,rB,"PUBLIC").setMultipleInstances(!0)),rn(vE,wE,""),rn(vE,wE,"esm2017")}iB();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new _c(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new _c(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new _c(o,this,this._ref)):s={next:n.next?o=>n.next(new _c(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class EE{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new fr(e,this._service))}get items(){return this._delegate.items.map(e=>new fr(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
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
 */class fr{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=tB(this._delegate,e);return new fr(n,this.storage)}get root(){return new fr(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new fr(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new IE(Q4(this._delegate,e,n),this)}putString(e,n=fn.RAW,r){this._throwIfRoot("putString");const i=ZP(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new IE(new l1(this._delegate,new Un(i.data,!0),s),this)}listAll(){return Z4(this._delegate).then(e=>new EE(e,this.storage))}list(e){return X4(this._delegate,e||void 0).then(n=>new EE(n,this.storage))}getMetadata(){return Y4(this._delegate)}updateMetadata(e){return J4(this._delegate,e)}getDownloadURL(){return f1(this._delegate)}delete(){return this._throwIfRoot("delete"),eB(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw YP(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(TE(e))throw yo("ref() expected a child path but got a URL, use refFromURL instead.");return new fr(Lm(this._delegate,e),this)}refFromURL(e){if(!TE(e))throw yo("refFromURL() expected a full URL but got a child path, use ref() instead.");try{Rt.makeFromUrl(e,this._delegate.host)}catch{throw yo("refFromUrl() expected a valid full URL but got an invalid one.")}return new fr(Lm(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){nB(this._delegate,e,n,r)}}function TE(t){return/^[A-Za-z]+:\/\//.test(t)}const sB="@firebase/storage-compat",oB="0.3.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aB="storage-compat";function lB(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new p1(n,r)}function uB(t){const e={TaskState:Ot,TaskEvent:N4,StringFormat:fn,Storage:p1,Reference:fr};t.INTERNAL.registerComponent(new yn(aB,lB,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(sB,oB)}uB(fe);const cB={apiKey:"AIzaSyCknnv2K7Zlzh-cxqbAb1lDuoFB79JNvoY",authDomain:"nationsglory-62812.firebaseapp.com",projectId:"nationsglory-62812",storageBucket:"nationsglory-62812.appspot.com",messagingSenderId:"1062049263686",appId:"1:1062049263686:web:42dc7925af2b4f1da69a47",measurementId:"G-156LHMY0NL"};fe.apps.length||fe.initializeApp(cB);const hB=()=>{const[t,e]=z.useState(""),[n,r]=z.useState(""),[i,s]=z.useState(""),[o,a]=z.useState(""),[l,c]=z.useState(""),[h,f]=z.useState(null),[m,v]=z.useState(""),[A,P]=z.useState(!1),C=async()=>{if(v(""),n!==i){v("Les mots de passe ne correspondent pas.");return}P(!0);try{const _=await fe.auth().createUserWithEmailAndPassword(t,n);if(h){const N=fe.storage().ref().child(`profiles/${_.user.uid}`);await N.put(h);const L=await N.getDownloadURL();await _.user.updateProfile({displayName:`${o} ${l}`,photoURL:L}),await fe.firestore().collection("users").doc(_.user.uid).set({firstName:o,lastName:l,email:t,photoURL:L}),console.log("Profil utilisateur mis à jour avec succès.")}else await _.user.updateProfile({displayName:`${o} ${l}`}),await fe.firestore().collection("users").doc(_.user.uid).set({firstName:o,lastName:l,email:t});console.log("Inscription réussie !"),window.location.href="/nationglorycomu/"}catch(_){v(_.message),console.error(_.message)}finally{P(!1)}},E=async()=>{P(!0);try{const _=new fe.auth.GoogleAuthProvider,w=await fe.auth().signInWithPopup(_),N=w.user.email,{given_name:L,family_name:M}=w.additionalUserInfo.profile,I=w.user.photoURL||"https://firebasestorage.googleapis.com/v0/b/nationsglory-62812.appspot.com/o/Prendre%20sa%20sant%C3%A9%20en%20main%20n%E2%80%99a%20jamais%20%C3%A9t%C3%A9%20aussi%20simple.jpg?alt=media&token=dc085ed1-9a30-4dc8-92cc-ad7eaa8a840c";await fe.firestore().collection("users").doc(w.user.uid).set({firstName:L,lastName:M,email:N,photoURL:I}),console.log("Inscription avec Google réussie !"),window.location.href="/nationglorycomu/"}catch(_){v(_.message),console.error(_.message)}finally{P(!1)}};return $.jsxs("div",{children:[$.jsx("h2",{children:"Inscription"}),m&&$.jsx("p",{style:{color:"red"},children:m}),$.jsx("input",{type:"text",placeholder:"Prénom",value:o,onChange:_=>a(_.target.value)}),$.jsx("input",{type:"text",placeholder:"Nom",value:l,onChange:_=>c(_.target.value)}),$.jsx("input",{type:"email",placeholder:"Adresse email",value:t,onChange:_=>e(_.target.value)}),$.jsx("input",{type:"password",placeholder:"Mot de passe",value:n,onChange:_=>r(_.target.value)}),$.jsx("input",{type:"password",placeholder:"Confirmer le mot de passe",value:i,onChange:_=>s(_.target.value)}),$.jsx("input",{type:"file",accept:"image/*",onChange:_=>f(_.target.files[0])}),$.jsx("button",{onClick:C,disabled:A,children:"S'inscrire"}),$.jsx("button",{onClick:E,disabled:A,children:"S'inscrire avec Google"})]})},dB=()=>{const[t,e]=z.useState(""),[n,r]=z.useState(""),[i,s]=z.useState(""),[o,a]=z.useState(!1),l=async()=>{s(""),a(!0);try{await fe.auth().signInWithEmailAndPassword(t,n),console.log("Connexion réussie !"),window.location.href="/nationglorycomu/"}catch(h){s(h.message),console.error(h.message)}finally{a(!1)}},c=async()=>{s(""),a(!0);try{const h=new fe.auth.GoogleAuthProvider;await fe.auth().signInWithPopup(h),console.log("Connexion réussie avec Google !"),window.location.href="/nationglorycomu/"}catch(h){s(h.message),console.error(h.message)}finally{a(!1)}};return $.jsxs("div",{children:[$.jsx("h2",{children:"Connexion"}),i&&$.jsx("p",{style:{color:"red"},children:i}),$.jsx("input",{type:"email",placeholder:"Adresse email",value:t,onChange:h=>e(h.target.value)}),$.jsx("input",{type:"password",placeholder:"Mot de passe",value:n,onChange:h=>r(h.target.value)}),$.jsx("button",{onClick:l,disabled:o,children:"Se connecter"}),$.jsx("button",{onClick:c,disabled:o,children:"Se connecter avec Google"})]})};/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zl(){return Zl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Zl.apply(this,arguments)}var Qr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Qr||(Qr={}));const SE="popstate";function fB(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Mm("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Lh(i)}return mB(e,n,null,t)}function Ye(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function m1(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function pB(){return Math.random().toString(36).substr(2,8)}function RE(t,e){return{usr:t.state,key:t.key,idx:e}}function Mm(t,e,n,r){return n===void 0&&(n=null),Zl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?la(e):e,{state:n,key:e&&e.key||r||pB()})}function Lh(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function la(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function mB(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Qr.Pop,l=null,c=h();c==null&&(c=0,o.replaceState(Zl({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=Qr.Pop;let C=h(),E=C==null?null:C-c;c=C,l&&l({action:a,location:P.location,delta:E})}function m(C,E){a=Qr.Push;let _=Mm(P.location,C,E);c=h()+1;let w=RE(_,c),N=P.createHref(_);try{o.pushState(w,"",N)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(N)}s&&l&&l({action:a,location:P.location,delta:1})}function v(C,E){a=Qr.Replace;let _=Mm(P.location,C,E);c=h();let w=RE(_,c),N=P.createHref(_);o.replaceState(w,"",N),s&&l&&l({action:a,location:P.location,delta:0})}function A(C){let E=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof C=="string"?C:Lh(C);return _=_.replace(/ $/,"%20"),Ye(E,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,E)}let P={get action(){return a},get location(){return t(i,o)},listen(C){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(SE,f),l=C,()=>{i.removeEventListener(SE,f),l=null}},createHref(C){return e(i,C)},createURL:A,encodeLocation(C){let E=A(C);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:m,replace:v,go(C){return o.go(C)}};return P}var AE;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(AE||(AE={}));function gB(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?la(e):e,i=my(r.pathname||"/",n);if(i==null)return null;let s=g1(t);_B(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=CB(i);o=AB(s[a],l)}return o}function g1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ye(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=oi([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(Ye(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),g1(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:SB(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of _1(s.path))i(s,o,l)}),e}function _1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=_1(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function _B(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:RB(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const yB=/^:[\w-]+$/,vB=3,wB=2,IB=1,EB=10,TB=-2,PE=t=>t==="*";function SB(t,e){let n=t.split("/"),r=n.length;return n.some(PE)&&(r+=TB),e&&(r+=wB),n.filter(i=>!PE(i)).reduce((i,s)=>i+(yB.test(s)?vB:s===""?IB:EB),r)}function RB(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function AB(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",h=PB({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!h)return null;Object.assign(r,h.params);let f=a.route;s.push({params:r,pathname:oi([i,h.pathname]),pathnameBase:DB(oi([i,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(i=oi([i,h.pathnameBase]))}return s}function PB(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=kB(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:m,isOptional:v}=h;if(m==="*"){let P=a[f]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const A=a[f];return v&&!A?c[m]=void 0:c[m]=(A||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function kB(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),m1(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function CB(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return m1(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function my(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function bB(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?la(t):t;return{pathname:n?n.startsWith("/")?n:xB(n,e):e,search:OB(r),hash:VB(i)}}function xB(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function tp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function NB(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function y1(t,e){let n=NB(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function v1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=la(t):(i=Zl({},t),Ye(!i.pathname||!i.pathname.includes("?"),tp("?","pathname","search",i)),Ye(!i.pathname||!i.pathname.includes("#"),tp("#","pathname","hash",i)),Ye(!i.search||!i.search.includes("#"),tp("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let l=bB(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const oi=t=>t.join("/").replace(/\/\/+/g,"/"),DB=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),OB=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,VB=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function LB(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const w1=["post","put","patch","delete"];new Set(w1);const MB=["get",...w1];new Set(MB);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eu(){return eu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},eu.apply(this,arguments)}const gy=z.createContext(null),FB=z.createContext(null),ks=z.createContext(null),Ud=z.createContext(null),Cs=z.createContext({outlet:null,matches:[],isDataRoute:!1}),I1=z.createContext(null);function UB(t,e){let{relative:n}=e===void 0?{}:e;Pu()||Ye(!1);let{basename:r,navigator:i}=z.useContext(ks),{hash:s,pathname:o,search:a}=S1(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:oi([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Pu(){return z.useContext(Ud)!=null}function Bd(){return Pu()||Ye(!1),z.useContext(Ud).location}function E1(t){z.useContext(ks).static||z.useLayoutEffect(t)}function T1(){let{isDataRoute:t}=z.useContext(Cs);return t?XB():BB()}function BB(){Pu()||Ye(!1);let t=z.useContext(gy),{basename:e,future:n,navigator:r}=z.useContext(ks),{matches:i}=z.useContext(Cs),{pathname:s}=Bd(),o=JSON.stringify(y1(i,n.v7_relativeSplatPath)),a=z.useRef(!1);return E1(()=>{a.current=!0}),z.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=v1(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:oi([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,s,t])}function S1(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=z.useContext(ks),{matches:i}=z.useContext(Cs),{pathname:s}=Bd(),o=JSON.stringify(y1(i,r.v7_relativeSplatPath));return z.useMemo(()=>v1(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function jB(t,e){return zB(t,e)}function zB(t,e,n,r){Pu()||Ye(!1);let{navigator:i}=z.useContext(ks),{matches:s}=z.useContext(Cs),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Bd(),h;if(e){var f;let C=typeof e=="string"?la(e):e;l==="/"||(f=C.pathname)!=null&&f.startsWith(l)||Ye(!1),h=C}else h=c;let m=h.pathname||"/",v=m;if(l!=="/"){let C=l.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(C.length).join("/")}let A=gB(t,{pathname:v}),P=HB(A&&A.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:oi([l,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?l:oi([l,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return e&&P?z.createElement(Ud.Provider,{value:{location:eu({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Qr.Pop}},P):P}function $B(){let t=JB(),e=LB(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),n?z.createElement("pre",{style:i},n):null,null)}const qB=z.createElement($B,null);class WB extends z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?z.createElement(Cs.Provider,{value:this.props.routeContext},z.createElement(I1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function GB(t){let{routeContext:e,match:n,children:r}=t,i=z.useContext(gy);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),z.createElement(Cs.Provider,{value:e},r)}function HB(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||Ye(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:m,errors:v}=n,A=f.route.loader&&m[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||A){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,m)=>{let v,A=!1,P=null,C=null;n&&(v=a&&f.route.id?a[f.route.id]:void 0,P=f.route.errorElement||qB,l&&(c<0&&m===0?(A=!0,C=null):c===m&&(A=!0,C=f.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,m+1)),_=()=>{let w;return v?w=P:A?w=C:f.route.Component?w=z.createElement(f.route.Component,null):f.route.element?w=f.route.element:w=h,z.createElement(GB,{match:f,routeContext:{outlet:h,matches:E,isDataRoute:n!=null},children:w})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?z.createElement(WB,{location:n.location,revalidation:n.revalidation,component:P,error:v,children:_(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):_()},null)}var R1=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(R1||{}),Mh=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Mh||{});function KB(t){let e=z.useContext(gy);return e||Ye(!1),e}function QB(t){let e=z.useContext(FB);return e||Ye(!1),e}function YB(t){let e=z.useContext(Cs);return e||Ye(!1),e}function A1(t){let e=YB(),n=e.matches[e.matches.length-1];return n.route.id||Ye(!1),n.route.id}function JB(){var t;let e=z.useContext(I1),n=QB(Mh.UseRouteError),r=A1(Mh.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function XB(){let{router:t}=KB(R1.UseNavigateStable),e=A1(Mh.UseNavigateStable),n=z.useRef(!1);return E1(()=>{n.current=!0}),z.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,eu({fromRouteId:e},s)))},[t,e])}function qc(t){Ye(!1)}function ZB(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Qr.Pop,navigator:s,static:o=!1,future:a}=t;Pu()&&Ye(!1);let l=e.replace(/^\/*/,"/"),c=z.useMemo(()=>({basename:l,navigator:s,static:o,future:eu({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=la(r));let{pathname:h="/",search:f="",hash:m="",state:v=null,key:A="default"}=r,P=z.useMemo(()=>{let C=my(h,l);return C==null?null:{location:{pathname:C,search:f,hash:m,state:v,key:A},navigationType:i}},[l,h,f,m,v,A,i]);return P==null?null:z.createElement(ks.Provider,{value:c},z.createElement(Ud.Provider,{children:n,value:P}))}function ej(t){let{children:e,location:n}=t;return jB(Fm(e),n)}new Promise(()=>{});function Fm(t,e){e===void 0&&(e=[]);let n=[];return z.Children.forEach(t,(r,i)=>{if(!z.isValidElement(r))return;let s=[...e,i];if(r.type===z.Fragment){n.push.apply(n,Fm(r.props.children,s));return}r.type!==qc&&Ye(!1),!r.props.index||!r.props.children||Ye(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Fm(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Um(){return Um=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Um.apply(this,arguments)}function tj(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function nj(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function rj(t,e){return t.button===0&&(!e||e==="_self")&&!nj(t)}const ij=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],sj="6";try{window.__reactRouterVersion=sj}catch{}const oj="startTransition",kE=Tk[oj];function aj(t){let{basename:e,children:n,future:r,window:i}=t,s=z.useRef();s.current==null&&(s.current=fB({window:i,v5Compat:!0}));let o=s.current,[a,l]=z.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=z.useCallback(f=>{c&&kE?kE(()=>l(f)):l(f)},[l,c]);return z.useLayoutEffect(()=>o.listen(h),[o,h]),z.createElement(ZB,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const lj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",uj=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,np=z.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:h,unstable_viewTransition:f}=e,m=tj(e,ij),{basename:v}=z.useContext(ks),A,P=!1;if(typeof c=="string"&&uj.test(c)&&(A=c,lj))try{let w=new URL(window.location.href),N=c.startsWith("//")?new URL(w.protocol+c):new URL(c),L=my(N.pathname,v);N.origin===w.origin&&L!=null?c=L+N.search+N.hash:P=!0}catch{}let C=UB(c,{relative:i}),E=cj(c,{replace:o,state:a,target:l,preventScrollReset:h,relative:i,unstable_viewTransition:f});function _(w){r&&r(w),w.defaultPrevented||E(w)}return z.createElement("a",Um({},m,{href:A||C,onClick:P||s?r:_,ref:n,target:l}))});var CE;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(CE||(CE={}));var bE;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(bE||(bE={}));function cj(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=T1(),c=Bd(),h=S1(t,{relative:o});return z.useCallback(f=>{if(rj(f,n)){f.preventDefault();let m=r!==void 0?r:Lh(c)===Lh(h);l(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,l,h,r,i,n,t,s,o,a])}const P1=()=>{const t=async()=>{try{await fe.auth().signOut(),console.log("Déconnexion réussie !"),window.location.href="/nationglorycomu/"}catch(e){console.error(e.message)}};return $.jsx("div",{children:$.jsx("button",{onClick:t,children:"Se déconnecter"})})},_y=()=>{const t=fe.auth().currentUser;return $.jsx("nav",{children:$.jsxs("ul",{children:[$.jsx("li",{children:$.jsx(np,{to:"/nationglorycomu/",children:$.jsx("button",{children:"Accueil"})})}),t?$.jsxs($.Fragment,{children:[$.jsx("li",{children:$.jsx(np,{to:"/nationglorycomu/ProfilePage",children:$.jsx("button",{children:"Profil"})})}),$.jsx("li",{children:$.jsx(P1,{})})]}):$.jsx("li",{children:$.jsx(np,{to:"/nationglorycomu/AuthPage",children:$.jsx("button",{children:"Connexion"})})})]})})},hj=()=>{const[t,e]=z.useState(!0);return $.jsxs("div",{children:[$.jsx(_y,{}),t?$.jsx(dB,{}):$.jsx(hB,{}),$.jsx("button",{onClick:()=>e(!t),children:t?"S'inscrire":"Se connecter"})]})};let yc;const dj=new Uint8Array(16);function fj(){if(!yc&&(yc=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!yc))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return yc(dj)}const dt=[];for(let t=0;t<256;++t)dt.push((t+256).toString(16).slice(1));function pj(t,e=0){return dt[t[e+0]]+dt[t[e+1]]+dt[t[e+2]]+dt[t[e+3]]+"-"+dt[t[e+4]]+dt[t[e+5]]+"-"+dt[t[e+6]]+dt[t[e+7]]+"-"+dt[t[e+8]]+dt[t[e+9]]+"-"+dt[t[e+10]]+dt[t[e+11]]+dt[t[e+12]]+dt[t[e+13]]+dt[t[e+14]]+dt[t[e+15]]}const mj=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),xE={randomUUID:mj};function gj(t,e,n){if(xE.randomUUID&&!e&&!t)return xE.randomUUID();t=t||{};const r=t.random||(t.rng||fj)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,pj(r)}const _j=()=>{const[t,e]=z.useState(null),[n,r]=z.useState(""),[i,s]=z.useState(""),[o,a]=z.useState("");z.useState("");const[l,c]=z.useState(""),[h,f]=z.useState(""),[m,v]=z.useState(null),[A,P]=z.useState(!1),[C,E]=z.useState(null),[_,w]=z.useState(null),N=T1();z.useEffect(()=>{const k=fe.auth().onAuthStateChanged(S=>{S?(e(S),P(S.providerData.some(tt=>tt.providerId==="google.com"))):(e(""),N("/nationglorycomu/AuthPage"))});return()=>k()},[]);const L=async()=>{try{const k=new fe.auth.GoogleAuthProvider;await fe.auth().currentUser.linkWithPopup(k),console.log("Compte Google lié avec succès !"),P(!0),location.reload()}catch(k){v(k.message),console.error(k.message)}},M=async()=>{try{await fe.auth().currentUser.updateEmail(n),console.log("Adresse email mise à jour avec succès !"),location.reload()}catch(k){v(k.message),console.error(k.message)}},I=async()=>{try{if(i!==o){v("les mots de passe doivent correspondre.");return}await fe.auth().currentUser.updatePassword(i),console.log("Mot de passe mis à jour avec succès !"),location.reload()}catch(k){v(k.message),console.error(k.message)}},y=async()=>{try{await fe.auth().currentUser.updateProfile({displayName:`${l} ${h}`}),console.log("Nom mis à jour avec succès !"),location.reload()}catch(k){v(k.message),console.error(k.message)}},T=k=>{w(k.target.files[0])},R=async()=>{try{if(_!==null){const k=Lm(fe.storage(),`profiles/${gj()}`),S=await K4(k,_);console.log(S);const tt=await f1(S.ref);E(tt);const Jn=LV().currentUser;if(Jn){await $S(Jn,{photoURL:tt});const wn=LF();await xm(Ql(wn,"users",Jn.uid),{photoURL:tt},{merge:!0}),location.reload()}else console.error("Utilisateur non connecté")}}catch(k){console.error("Erreur lors du téléchargement de l'image de profil :",k)}};return $.jsxs("div",{children:[$.jsx(_y,{}),$.jsx("h1",{children:"Profil de l'utilisateur"}),m&&$.jsx("p",{style:{color:"red"},children:m}),t?$.jsxs("div",{children:[$.jsx("img",{src:t.photoURL||"https://firebasestorage.googleapis.com/v0/b/nationsglory-62812.appspot.com/o/Prendre%20sa%20sant%C3%A9%20en%20main%20n%E2%80%99a%20jamais%20%C3%A9t%C3%A9%20aussi%20simple.jpg?alt=media&token=dc085ed1-9a30-4dc8-92cc-ad7eaa8a840c",alt:"Image de profil"}),$.jsxs("p",{children:["Prénom: ",t.displayName.split(" ")[0]]}),$.jsxs("p",{children:["Nom: ",t.displayName.split(" ")[1]]}),$.jsxs("p",{children:["Email: ",t.email]}),A?$.jsx("p",{children:"Connecté avec Google"}):$.jsx("button",{onClick:L,children:"Lier un compte Google"}),$.jsxs("div",{children:[$.jsx("h2",{children:"Modifier l'adresse email"}),$.jsx("input",{type:"email",placeholder:"Nouvelle adresse email",value:n,onChange:k=>r(k.target.value)}),$.jsx("button",{onClick:M,children:"Mettre à jour l'email"})]}),$.jsxs("div",{children:[$.jsx("h2",{children:"Modifier le mot de passe"}),$.jsx("input",{type:"password",placeholder:"Nouveau mot de passe",value:i,onChange:k=>s(k.target.value)}),$.jsx("input",{type:"password",placeholder:"Confirmer le nouveau mot de passe",value:o,onChange:k=>a(k.target.value)}),$.jsx("button",{onClick:I,children:"Mettre à jour le mot de passe"})]}),$.jsxs("div",{children:[$.jsx("h2",{children:"Modifier le nom"}),$.jsx("input",{type:"text",placeholder:"Nouveau prénom",value:l,onChange:k=>c(k.target.value)}),$.jsx("input",{type:"text",placeholder:"Nouveau nom de famille",value:h,onChange:k=>f(k.target.value)}),$.jsx("button",{onClick:y,children:"Mettre à jour le nom"})]}),$.jsxs("div",{children:[$.jsx("h2",{children:"Modifier l'image de profil"}),$.jsx("input",{type:"file",onChange:T}),$.jsx("button",{onClick:R,children:"Télécharger l'image de profil"})]}),$.jsx("div",{children:$.jsx(P1,{})})]}):$.jsx("p",{children:"Veuillez vous connecter pour accéder à votre profil."})]})},yj=()=>{const[t,e]=z.useState("");z.useEffect(()=>{const r=fe.auth().onAuthStateChanged(i=>{e(i||null)});return()=>r()},[]);const n=t?t.displayName.split(" ")[0]:"";return $.jsx("div",{children:$.jsxs("div",{children:[$.jsxs("h1",{children:["Welcome to the Home Page! ",n]}),$.jsx(_y,{})]})})},vj=W0(document.getElementById("root")),k1=()=>$.jsx(aj,{basename:"/nationglorycomu",children:$.jsxs(ej,{children:[$.jsx(qc,{path:"/",element:$.jsx(yj,{})}),$.jsx(qc,{path:"/AuthPage",element:$.jsx(hj,{})}),$.jsx(qc,{path:"/ProfilePage",element:$.jsx(_j,{})})]})});vj.render($.jsx(k1,{}));rp.createRoot(document.getElementById("root")).render($.jsx(zE.StrictMode,{children:$.jsx(k1,{})}));
