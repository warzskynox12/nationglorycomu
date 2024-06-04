function PT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function CT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var kT={exports:{}},Wh={},bT={exports:{}},ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dc=Symbol.for("react.element"),H1=Symbol.for("react.portal"),K1=Symbol.for("react.fragment"),Q1=Symbol.for("react.strict_mode"),Y1=Symbol.for("react.profiler"),J1=Symbol.for("react.provider"),X1=Symbol.for("react.context"),Z1=Symbol.for("react.forward_ref"),ek=Symbol.for("react.suspense"),tk=Symbol.for("react.memo"),nk=Symbol.for("react.lazy"),Zv=Symbol.iterator;function rk(t){return t===null||typeof t!="object"?null:(t=Zv&&t[Zv]||t["@@iterator"],typeof t=="function"?t:null)}var DT={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xT=Object.assign,NT={};function Ya(t,e,n){this.props=t,this.context=e,this.refs=NT,this.updater=n||DT}Ya.prototype.isReactComponent={};Ya.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ya.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function OT(){}OT.prototype=Ya.prototype;function Mg(t,e,n){this.props=t,this.context=e,this.refs=NT,this.updater=n||DT}var Fg=Mg.prototype=new OT;Fg.constructor=Mg;xT(Fg,Ya.prototype);Fg.isPureReactComponent=!0;var ew=Array.isArray,VT=Object.prototype.hasOwnProperty,Ug={current:null},LT={key:!0,ref:!0,__self:!0,__source:!0};function MT(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)VT.call(e,r)&&!LT.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:dc,type:t,key:s,ref:o,props:i,_owner:Ug.current}}function ik(t,e){return{$$typeof:dc,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bg(t){return typeof t=="object"&&t!==null&&t.$$typeof===dc}function sk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var tw=/\/+/g;function op(t,e){return typeof t=="object"&&t!==null&&t.key!=null?sk(""+t.key):e.toString(36)}function Pd(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case dc:case H1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+op(o,0):r,ew(i)?(n="",t!=null&&(n=t.replace(tw,"$&/")+"/"),Pd(i,e,n,"",function(c){return c})):i!=null&&(Bg(i)&&(i=ik(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(tw,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ew(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+op(s,a);o+=Pd(s,e,n,l,i)}else if(l=rk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+op(s,a++),o+=Pd(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Zc(t,e,n){if(t==null)return t;var r=[],i=0;return Pd(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ok(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mn={current:null},Cd={transition:null},ak={ReactCurrentDispatcher:mn,ReactCurrentBatchConfig:Cd,ReactCurrentOwner:Ug};function FT(){throw Error("act(...) is not supported in production builds of React.")}ye.Children={map:Zc,forEach:function(t,e,n){Zc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Zc(t,function(){e++}),e},toArray:function(t){return Zc(t,function(e){return e})||[]},only:function(t){if(!Bg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ye.Component=Ya;ye.Fragment=K1;ye.Profiler=Y1;ye.PureComponent=Mg;ye.StrictMode=Q1;ye.Suspense=ek;ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ak;ye.act=FT;ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=xT({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ug.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)VT.call(e,l)&&!LT.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:dc,type:t.type,key:i,ref:s,props:r,_owner:o}};ye.createContext=function(t){return t={$$typeof:X1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:J1,_context:t},t.Consumer=t};ye.createElement=MT;ye.createFactory=function(t){var e=MT.bind(null,t);return e.type=t,e};ye.createRef=function(){return{current:null}};ye.forwardRef=function(t){return{$$typeof:Z1,render:t}};ye.isValidElement=Bg;ye.lazy=function(t){return{$$typeof:nk,_payload:{_status:-1,_result:t},_init:ok}};ye.memo=function(t,e){return{$$typeof:tk,type:t,compare:e===void 0?null:e}};ye.startTransition=function(t){var e=Cd.transition;Cd.transition={};try{t()}finally{Cd.transition=e}};ye.unstable_act=FT;ye.useCallback=function(t,e){return mn.current.useCallback(t,e)};ye.useContext=function(t){return mn.current.useContext(t)};ye.useDebugValue=function(){};ye.useDeferredValue=function(t){return mn.current.useDeferredValue(t)};ye.useEffect=function(t,e){return mn.current.useEffect(t,e)};ye.useId=function(){return mn.current.useId()};ye.useImperativeHandle=function(t,e,n){return mn.current.useImperativeHandle(t,e,n)};ye.useInsertionEffect=function(t,e){return mn.current.useInsertionEffect(t,e)};ye.useLayoutEffect=function(t,e){return mn.current.useLayoutEffect(t,e)};ye.useMemo=function(t,e){return mn.current.useMemo(t,e)};ye.useReducer=function(t,e,n){return mn.current.useReducer(t,e,n)};ye.useRef=function(t){return mn.current.useRef(t)};ye.useState=function(t){return mn.current.useState(t)};ye.useSyncExternalStore=function(t,e,n){return mn.current.useSyncExternalStore(t,e,n)};ye.useTransition=function(){return mn.current.useTransition()};ye.version="18.3.1";bT.exports=ye;var j=bT.exports;const UT=CT(j),lk=PT({__proto__:null,default:UT},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uk=j,ck=Symbol.for("react.element"),dk=Symbol.for("react.fragment"),hk=Object.prototype.hasOwnProperty,fk=uk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pk={key:!0,ref:!0,__self:!0,__source:!0};function BT(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)hk.call(e,r)&&!pk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:ck,type:t,key:s,ref:o,props:i,_owner:fk.current}}Wh.Fragment=dk;Wh.jsx=BT;Wh.jsxs=BT;kT.exports=Wh;var Q=kT.exports,jT={exports:{}},Fn={},zT={exports:{}},$T={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,ae){var ue=H.length;H.push(ae);e:for(;0<ue;){var Ae=ue-1>>>1,pe=H[Ae];if(0<i(pe,ae))H[Ae]=ae,H[ue]=pe,ue=Ae;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var ae=H[0],ue=H.pop();if(ue!==ae){H[0]=ue;e:for(var Ae=0,pe=H.length,ke=pe>>>1;Ae<ke;){var rn=2*(Ae+1)-1,vt=H[rn],Vt=rn+1,Lt=H[Vt];if(0>i(vt,ue))Vt<pe&&0>i(Lt,vt)?(H[Ae]=Lt,H[Vt]=ue,Ae=Vt):(H[Ae]=vt,H[rn]=ue,Ae=rn);else if(Vt<pe&&0>i(Lt,ue))H[Ae]=Lt,H[Vt]=ue,Ae=Vt;else break e}}return ae}function i(H,ae){var ue=H.sortIndex-ae.sortIndex;return ue!==0?ue:H.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,p=3,w=!1,S=!1,A=!1,b=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(H){for(var ae=n(c);ae!==null;){if(ae.callback===null)r(c);else if(ae.startTime<=H)r(c),ae.sortIndex=ae.expirationTime,e(l,ae);else break;ae=n(c)}}function x(H){if(A=!1,I(H),!S)if(n(l)!==null)S=!0,_n(F);else{var ae=n(c);ae!==null&&Ht(x,ae.startTime-H)}}function F(H,ae){S=!1,A&&(A=!1,T(_),_=-1),w=!0;var ue=p;try{for(I(ae),f=n(l);f!==null&&(!(f.expirationTime>ae)||H&&!k());){var Ae=f.callback;if(typeof Ae=="function"){f.callback=null,p=f.priorityLevel;var pe=Ae(f.expirationTime<=ae);ae=t.unstable_now(),typeof pe=="function"?f.callback=pe:f===n(l)&&r(l),I(ae)}else r(l);f=n(l)}if(f!==null)var ke=!0;else{var rn=n(c);rn!==null&&Ht(x,rn.startTime-ae),ke=!1}return ke}finally{f=null,p=ue,w=!1}}var B=!1,g=null,_=-1,E=5,R=-1;function k(){return!(t.unstable_now()-R<E)}function C(){if(g!==null){var H=t.unstable_now();R=H;var ae=!0;try{ae=g(!0,H)}finally{ae?P():(B=!1,g=null)}}else B=!1}var P;if(typeof v=="function")P=function(){v(C)};else if(typeof MessageChannel<"u"){var Ie=new MessageChannel,Rt=Ie.port2;Ie.port1.onmessage=C,P=function(){Rt.postMessage(null)}}else P=function(){b(C,0)};function _n(H){g=H,B||(B=!0,P())}function Ht(H,ae){_=b(function(){H(t.unstable_now())},ae)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){S||w||(S=!0,_n(F))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(H){switch(p){case 1:case 2:case 3:var ae=3;break;default:ae=p}var ue=p;p=ae;try{return H()}finally{p=ue}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,ae){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ue=p;p=H;try{return ae()}finally{p=ue}},t.unstable_scheduleCallback=function(H,ae,ue){var Ae=t.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?Ae+ue:Ae):ue=Ae,H){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=ue+pe,H={id:d++,callback:ae,priorityLevel:H,startTime:ue,expirationTime:pe,sortIndex:-1},ue>Ae?(H.sortIndex=ue,e(c,H),n(l)===null&&H===n(c)&&(A?(T(_),_=-1):A=!0,Ht(x,ue-Ae))):(H.sortIndex=pe,e(l,H),S||w||(S=!0,_n(F))),H},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(H){var ae=p;return function(){var ue=p;p=ae;try{return H.apply(this,arguments)}finally{p=ue}}}})($T);zT.exports=$T;var mk=zT.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gk=j,Ln=mk;function q(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qT=new Set,Au={};function po(t,e){Ta(t,e),Ta(t+"Capture",e)}function Ta(t,e){for(Au[t]=e,t=0;t<e.length;t++)qT.add(e[t])}var Zr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),em=Object.prototype.hasOwnProperty,_k=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nw={},rw={};function yk(t){return em.call(rw,t)?!0:em.call(nw,t)?!1:_k.test(t)?rw[t]=!0:(nw[t]=!0,!1)}function vk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function wk(t,e,n,r){if(e===null||typeof e>"u"||vk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gn(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Gt[t]=new gn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Gt[e]=new gn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Gt[t]=new gn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Gt[t]=new gn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Gt[t]=new gn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Gt[t]=new gn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Gt[t]=new gn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Gt[t]=new gn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Gt[t]=new gn(t,5,!1,t.toLowerCase(),null,!1,!1)});var jg=/[\-:]([a-z])/g;function zg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(jg,zg);Gt[e]=new gn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(jg,zg);Gt[e]=new gn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(jg,zg);Gt[e]=new gn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Gt[t]=new gn(t,1,!1,t.toLowerCase(),null,!1,!1)});Gt.xlinkHref=new gn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Gt[t]=new gn(t,1,!1,t.toLowerCase(),null,!0,!0)});function $g(t,e,n,r){var i=Gt.hasOwnProperty(e)?Gt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(wk(e,n,i,r)&&(n=null),r||i===null?yk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ai=gk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ed=Symbol.for("react.element"),Yo=Symbol.for("react.portal"),Jo=Symbol.for("react.fragment"),qg=Symbol.for("react.strict_mode"),tm=Symbol.for("react.profiler"),WT=Symbol.for("react.provider"),GT=Symbol.for("react.context"),Wg=Symbol.for("react.forward_ref"),nm=Symbol.for("react.suspense"),rm=Symbol.for("react.suspense_list"),Gg=Symbol.for("react.memo"),ki=Symbol.for("react.lazy"),HT=Symbol.for("react.offscreen"),iw=Symbol.iterator;function kl(t){return t===null||typeof t!="object"?null:(t=iw&&t[iw]||t["@@iterator"],typeof t=="function"?t:null)}var et=Object.assign,ap;function Ql(t){if(ap===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ap=e&&e[1]||""}return`
`+ap+t}var lp=!1;function up(t,e){if(!t||lp)return"";lp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{lp=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ql(t):""}function Ek(t){switch(t.tag){case 5:return Ql(t.type);case 16:return Ql("Lazy");case 13:return Ql("Suspense");case 19:return Ql("SuspenseList");case 0:case 2:case 15:return t=up(t.type,!1),t;case 11:return t=up(t.type.render,!1),t;case 1:return t=up(t.type,!0),t;default:return""}}function im(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Jo:return"Fragment";case Yo:return"Portal";case tm:return"Profiler";case qg:return"StrictMode";case nm:return"Suspense";case rm:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case GT:return(t.displayName||"Context")+".Consumer";case WT:return(t._context.displayName||"Context")+".Provider";case Wg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gg:return e=t.displayName||null,e!==null?e:im(t.type)||"Memo";case ki:e=t._payload,t=t._init;try{return im(t(e))}catch{}}return null}function Ik(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return im(e);case 8:return e===qg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function KT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Tk(t){var e=KT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function td(t){t._valueTracker||(t._valueTracker=Tk(t))}function QT(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=KT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Xd(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sm(t,e){var n=e.checked;return et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function sw(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Qi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function YT(t,e){e=e.checked,e!=null&&$g(t,"checked",e,!1)}function om(t,e){YT(t,e);var n=Qi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?am(t,e.type,n):e.hasOwnProperty("defaultValue")&&am(t,e.type,Qi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ow(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function am(t,e,n){(e!=="number"||Xd(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Yl=Array.isArray;function ca(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Qi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function lm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(q(91));return et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function aw(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(q(92));if(Yl(n)){if(1<n.length)throw Error(q(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qi(n)}}function JT(t,e){var n=Qi(e.value),r=Qi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function lw(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function XT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function um(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?XT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var nd,ZT=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(nd=nd||document.createElement("div"),nd.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=nd.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Pu(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ou={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sk=["Webkit","ms","Moz","O"];Object.keys(ou).forEach(function(t){Sk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ou[e]=ou[t]})});function e0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ou.hasOwnProperty(t)&&ou[t]?(""+e).trim():e+"px"}function t0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=e0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Rk=et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cm(t,e){if(e){if(Rk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(q(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(q(62))}}function dm(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hm=null;function Hg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fm=null,da=null,ha=null;function uw(t){if(t=pc(t)){if(typeof fm!="function")throw Error(q(280));var e=t.stateNode;e&&(e=Yh(e),fm(t.stateNode,t.type,e))}}function n0(t){da?ha?ha.push(t):ha=[t]:da=t}function r0(){if(da){var t=da,e=ha;if(ha=da=null,uw(t),e)for(t=0;t<e.length;t++)uw(e[t])}}function i0(t,e){return t(e)}function s0(){}var cp=!1;function o0(t,e,n){if(cp)return t(e,n);cp=!0;try{return i0(t,e,n)}finally{cp=!1,(da!==null||ha!==null)&&(s0(),r0())}}function Cu(t,e){var n=t.stateNode;if(n===null)return null;var r=Yh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(q(231,e,typeof n));return n}var pm=!1;if(Zr)try{var bl={};Object.defineProperty(bl,"passive",{get:function(){pm=!0}}),window.addEventListener("test",bl,bl),window.removeEventListener("test",bl,bl)}catch{pm=!1}function Ak(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var au=!1,Zd=null,eh=!1,mm=null,Pk={onError:function(t){au=!0,Zd=t}};function Ck(t,e,n,r,i,s,o,a,l){au=!1,Zd=null,Ak.apply(Pk,arguments)}function kk(t,e,n,r,i,s,o,a,l){if(Ck.apply(this,arguments),au){if(au){var c=Zd;au=!1,Zd=null}else throw Error(q(198));eh||(eh=!0,mm=c)}}function mo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function a0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function cw(t){if(mo(t)!==t)throw Error(q(188))}function bk(t){var e=t.alternate;if(!e){if(e=mo(t),e===null)throw Error(q(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return cw(i),t;if(s===r)return cw(i),e;s=s.sibling}throw Error(q(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(q(189))}}if(n.alternate!==r)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?t:e}function l0(t){return t=bk(t),t!==null?u0(t):null}function u0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=u0(t);if(e!==null)return e;t=t.sibling}return null}var c0=Ln.unstable_scheduleCallback,dw=Ln.unstable_cancelCallback,Dk=Ln.unstable_shouldYield,xk=Ln.unstable_requestPaint,dt=Ln.unstable_now,Nk=Ln.unstable_getCurrentPriorityLevel,Kg=Ln.unstable_ImmediatePriority,d0=Ln.unstable_UserBlockingPriority,th=Ln.unstable_NormalPriority,Ok=Ln.unstable_LowPriority,h0=Ln.unstable_IdlePriority,Gh=null,Ar=null;function Vk(t){if(Ar&&typeof Ar.onCommitFiberRoot=="function")try{Ar.onCommitFiberRoot(Gh,t,void 0,(t.current.flags&128)===128)}catch{}}var lr=Math.clz32?Math.clz32:Fk,Lk=Math.log,Mk=Math.LN2;function Fk(t){return t>>>=0,t===0?32:31-(Lk(t)/Mk|0)|0}var rd=64,id=4194304;function Jl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function nh(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Jl(a):(s&=o,s!==0&&(r=Jl(s)))}else o=n&~i,o!==0?r=Jl(o):s!==0&&(r=Jl(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-lr(e),i=1<<n,r|=t[n],e&=~i;return r}function Uk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-lr(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Uk(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function gm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function f0(){var t=rd;return rd<<=1,!(rd&4194240)&&(rd=64),t}function dp(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function hc(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-lr(e),t[e]=n}function jk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-lr(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Qg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-lr(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ce=0;function p0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var m0,Yg,g0,_0,y0,_m=!1,sd=[],Ui=null,Bi=null,ji=null,ku=new Map,bu=new Map,Di=[],zk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hw(t,e){switch(t){case"focusin":case"focusout":Ui=null;break;case"dragenter":case"dragleave":Bi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":ku.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":bu.delete(e.pointerId)}}function Dl(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=pc(e),e!==null&&Yg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function $k(t,e,n,r,i){switch(e){case"focusin":return Ui=Dl(Ui,t,e,n,r,i),!0;case"dragenter":return Bi=Dl(Bi,t,e,n,r,i),!0;case"mouseover":return ji=Dl(ji,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ku.set(s,Dl(ku.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,bu.set(s,Dl(bu.get(s)||null,t,e,n,r,i)),!0}return!1}function v0(t){var e=Os(t.target);if(e!==null){var n=mo(e);if(n!==null){if(e=n.tag,e===13){if(e=a0(n),e!==null){t.blockedOn=e,y0(t.priority,function(){g0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kd(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ym(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);hm=r,n.target.dispatchEvent(r),hm=null}else return e=pc(n),e!==null&&Yg(e),t.blockedOn=n,!1;e.shift()}return!0}function fw(t,e,n){kd(t)&&n.delete(e)}function qk(){_m=!1,Ui!==null&&kd(Ui)&&(Ui=null),Bi!==null&&kd(Bi)&&(Bi=null),ji!==null&&kd(ji)&&(ji=null),ku.forEach(fw),bu.forEach(fw)}function xl(t,e){t.blockedOn===e&&(t.blockedOn=null,_m||(_m=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,qk)))}function Du(t){function e(i){return xl(i,t)}if(0<sd.length){xl(sd[0],t);for(var n=1;n<sd.length;n++){var r=sd[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ui!==null&&xl(Ui,t),Bi!==null&&xl(Bi,t),ji!==null&&xl(ji,t),ku.forEach(e),bu.forEach(e),n=0;n<Di.length;n++)r=Di[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Di.length&&(n=Di[0],n.blockedOn===null);)v0(n),n.blockedOn===null&&Di.shift()}var fa=ai.ReactCurrentBatchConfig,rh=!0;function Wk(t,e,n,r){var i=Ce,s=fa.transition;fa.transition=null;try{Ce=1,Jg(t,e,n,r)}finally{Ce=i,fa.transition=s}}function Gk(t,e,n,r){var i=Ce,s=fa.transition;fa.transition=null;try{Ce=4,Jg(t,e,n,r)}finally{Ce=i,fa.transition=s}}function Jg(t,e,n,r){if(rh){var i=ym(t,e,n,r);if(i===null)Ep(t,e,r,ih,n),hw(t,r);else if($k(i,t,e,n,r))r.stopPropagation();else if(hw(t,r),e&4&&-1<zk.indexOf(t)){for(;i!==null;){var s=pc(i);if(s!==null&&m0(s),s=ym(t,e,n,r),s===null&&Ep(t,e,r,ih,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ep(t,e,r,null,n)}}var ih=null;function ym(t,e,n,r){if(ih=null,t=Hg(r),t=Os(t),t!==null)if(e=mo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=a0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ih=t,null}function w0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nk()){case Kg:return 1;case d0:return 4;case th:case Ok:return 16;case h0:return 536870912;default:return 16}default:return 16}}var Vi=null,Xg=null,bd=null;function E0(){if(bd)return bd;var t,e=Xg,n=e.length,r,i="value"in Vi?Vi.value:Vi.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return bd=i.slice(t,1<r?1-r:void 0)}function Dd(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function od(){return!0}function pw(){return!1}function Un(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?od:pw,this.isPropagationStopped=pw,this}return et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=od)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=od)},persist:function(){},isPersistent:od}),e}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zg=Un(Ja),fc=et({},Ja,{view:0,detail:0}),Hk=Un(fc),hp,fp,Nl,Hh=et({},fc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:e_,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Nl&&(Nl&&t.type==="mousemove"?(hp=t.screenX-Nl.screenX,fp=t.screenY-Nl.screenY):fp=hp=0,Nl=t),hp)},movementY:function(t){return"movementY"in t?t.movementY:fp}}),mw=Un(Hh),Kk=et({},Hh,{dataTransfer:0}),Qk=Un(Kk),Yk=et({},fc,{relatedTarget:0}),pp=Un(Yk),Jk=et({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),Xk=Un(Jk),Zk=et({},Ja,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),eb=Un(Zk),tb=et({},Ja,{data:0}),gw=Un(tb),nb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ib={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ib[t])?!!e[t]:!1}function e_(){return sb}var ob=et({},fc,{key:function(t){if(t.key){var e=nb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Dd(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:e_,charCode:function(t){return t.type==="keypress"?Dd(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Dd(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ab=Un(ob),lb=et({},Hh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_w=Un(lb),ub=et({},fc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:e_}),cb=Un(ub),db=et({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),hb=Un(db),fb=et({},Hh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pb=Un(fb),mb=[9,13,27,32],t_=Zr&&"CompositionEvent"in window,lu=null;Zr&&"documentMode"in document&&(lu=document.documentMode);var gb=Zr&&"TextEvent"in window&&!lu,I0=Zr&&(!t_||lu&&8<lu&&11>=lu),yw=" ",vw=!1;function T0(t,e){switch(t){case"keyup":return mb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function S0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xo=!1;function _b(t,e){switch(t){case"compositionend":return S0(e);case"keypress":return e.which!==32?null:(vw=!0,yw);case"textInput":return t=e.data,t===yw&&vw?null:t;default:return null}}function yb(t,e){if(Xo)return t==="compositionend"||!t_&&T0(t,e)?(t=E0(),bd=Xg=Vi=null,Xo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return I0&&e.locale!=="ko"?null:e.data;default:return null}}var vb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ww(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vb[t.type]:e==="textarea"}function R0(t,e,n,r){n0(r),e=sh(e,"onChange"),0<e.length&&(n=new Zg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var uu=null,xu=null;function wb(t){L0(t,0)}function Kh(t){var e=ta(t);if(QT(e))return t}function Eb(t,e){if(t==="change")return e}var A0=!1;if(Zr){var mp;if(Zr){var gp="oninput"in document;if(!gp){var Ew=document.createElement("div");Ew.setAttribute("oninput","return;"),gp=typeof Ew.oninput=="function"}mp=gp}else mp=!1;A0=mp&&(!document.documentMode||9<document.documentMode)}function Iw(){uu&&(uu.detachEvent("onpropertychange",P0),xu=uu=null)}function P0(t){if(t.propertyName==="value"&&Kh(xu)){var e=[];R0(e,xu,t,Hg(t)),o0(wb,e)}}function Ib(t,e,n){t==="focusin"?(Iw(),uu=e,xu=n,uu.attachEvent("onpropertychange",P0)):t==="focusout"&&Iw()}function Tb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Kh(xu)}function Sb(t,e){if(t==="click")return Kh(e)}function Rb(t,e){if(t==="input"||t==="change")return Kh(e)}function Ab(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var cr=typeof Object.is=="function"?Object.is:Ab;function Nu(t,e){if(cr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!em.call(e,i)||!cr(t[i],e[i]))return!1}return!0}function Tw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sw(t,e){var n=Tw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tw(n)}}function C0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?C0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function k0(){for(var t=window,e=Xd();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xd(t.document)}return e}function n_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Pb(t){var e=k0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&C0(n.ownerDocument.documentElement,n)){if(r!==null&&n_(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Sw(n,s);var o=Sw(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Cb=Zr&&"documentMode"in document&&11>=document.documentMode,Zo=null,vm=null,cu=null,wm=!1;function Rw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wm||Zo==null||Zo!==Xd(r)||(r=Zo,"selectionStart"in r&&n_(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),cu&&Nu(cu,r)||(cu=r,r=sh(vm,"onSelect"),0<r.length&&(e=new Zg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Zo)))}function ad(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ea={animationend:ad("Animation","AnimationEnd"),animationiteration:ad("Animation","AnimationIteration"),animationstart:ad("Animation","AnimationStart"),transitionend:ad("Transition","TransitionEnd")},_p={},b0={};Zr&&(b0=document.createElement("div").style,"AnimationEvent"in window||(delete ea.animationend.animation,delete ea.animationiteration.animation,delete ea.animationstart.animation),"TransitionEvent"in window||delete ea.transitionend.transition);function Qh(t){if(_p[t])return _p[t];if(!ea[t])return t;var e=ea[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in b0)return _p[t]=e[n];return t}var D0=Qh("animationend"),x0=Qh("animationiteration"),N0=Qh("animationstart"),O0=Qh("transitionend"),V0=new Map,Aw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ls(t,e){V0.set(t,e),po(e,[t])}for(var yp=0;yp<Aw.length;yp++){var vp=Aw[yp],kb=vp.toLowerCase(),bb=vp[0].toUpperCase()+vp.slice(1);ls(kb,"on"+bb)}ls(D0,"onAnimationEnd");ls(x0,"onAnimationIteration");ls(N0,"onAnimationStart");ls("dblclick","onDoubleClick");ls("focusin","onFocus");ls("focusout","onBlur");ls(O0,"onTransitionEnd");Ta("onMouseEnter",["mouseout","mouseover"]);Ta("onMouseLeave",["mouseout","mouseover"]);Ta("onPointerEnter",["pointerout","pointerover"]);Ta("onPointerLeave",["pointerout","pointerover"]);po("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));po("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));po("onBeforeInput",["compositionend","keypress","textInput","paste"]);po("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));po("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));po("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Db=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xl));function Pw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,kk(r,e,void 0,t),t.currentTarget=null}function L0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Pw(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Pw(i,a,c),s=l}}}if(eh)throw t=mm,eh=!1,mm=null,t}function Fe(t,e){var n=e[Rm];n===void 0&&(n=e[Rm]=new Set);var r=t+"__bubble";n.has(r)||(M0(e,t,2,!1),n.add(r))}function wp(t,e,n){var r=0;e&&(r|=4),M0(n,t,r,e)}var ld="_reactListening"+Math.random().toString(36).slice(2);function Ou(t){if(!t[ld]){t[ld]=!0,qT.forEach(function(n){n!=="selectionchange"&&(Db.has(n)||wp(n,!1,t),wp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ld]||(e[ld]=!0,wp("selectionchange",!1,e))}}function M0(t,e,n,r){switch(w0(e)){case 1:var i=Wk;break;case 4:i=Gk;break;default:i=Jg}n=i.bind(null,e,n,t),i=void 0,!pm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ep(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Os(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}o0(function(){var c=s,d=Hg(n),f=[];e:{var p=V0.get(t);if(p!==void 0){var w=Zg,S=t;switch(t){case"keypress":if(Dd(n)===0)break e;case"keydown":case"keyup":w=ab;break;case"focusin":S="focus",w=pp;break;case"focusout":S="blur",w=pp;break;case"beforeblur":case"afterblur":w=pp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=mw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Qk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=cb;break;case D0:case x0:case N0:w=Xk;break;case O0:w=hb;break;case"scroll":w=Hk;break;case"wheel":w=pb;break;case"copy":case"cut":case"paste":w=eb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=_w}var A=(e&4)!==0,b=!A&&t==="scroll",T=A?p!==null?p+"Capture":null:p;A=[];for(var v=c,I;v!==null;){I=v;var x=I.stateNode;if(I.tag===5&&x!==null&&(I=x,T!==null&&(x=Cu(v,T),x!=null&&A.push(Vu(v,x,I)))),b)break;v=v.return}0<A.length&&(p=new w(p,S,null,n,d),f.push({event:p,listeners:A}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",p&&n!==hm&&(S=n.relatedTarget||n.fromElement)&&(Os(S)||S[ei]))break e;if((w||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,w?(S=n.relatedTarget||n.toElement,w=c,S=S?Os(S):null,S!==null&&(b=mo(S),S!==b||S.tag!==5&&S.tag!==6)&&(S=null)):(w=null,S=c),w!==S)){if(A=mw,x="onMouseLeave",T="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(A=_w,x="onPointerLeave",T="onPointerEnter",v="pointer"),b=w==null?p:ta(w),I=S==null?p:ta(S),p=new A(x,v+"leave",w,n,d),p.target=b,p.relatedTarget=I,x=null,Os(d)===c&&(A=new A(T,v+"enter",S,n,d),A.target=I,A.relatedTarget=b,x=A),b=x,w&&S)t:{for(A=w,T=S,v=0,I=A;I;I=Mo(I))v++;for(I=0,x=T;x;x=Mo(x))I++;for(;0<v-I;)A=Mo(A),v--;for(;0<I-v;)T=Mo(T),I--;for(;v--;){if(A===T||T!==null&&A===T.alternate)break t;A=Mo(A),T=Mo(T)}A=null}else A=null;w!==null&&Cw(f,p,w,A,!1),S!==null&&b!==null&&Cw(f,b,S,A,!0)}}e:{if(p=c?ta(c):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var F=Eb;else if(ww(p))if(A0)F=Rb;else{F=Tb;var B=Ib}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(F=Sb);if(F&&(F=F(t,c))){R0(f,F,n,d);break e}B&&B(t,p,c),t==="focusout"&&(B=p._wrapperState)&&B.controlled&&p.type==="number"&&am(p,"number",p.value)}switch(B=c?ta(c):window,t){case"focusin":(ww(B)||B.contentEditable==="true")&&(Zo=B,vm=c,cu=null);break;case"focusout":cu=vm=Zo=null;break;case"mousedown":wm=!0;break;case"contextmenu":case"mouseup":case"dragend":wm=!1,Rw(f,n,d);break;case"selectionchange":if(Cb)break;case"keydown":case"keyup":Rw(f,n,d)}var g;if(t_)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Xo?T0(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(I0&&n.locale!=="ko"&&(Xo||_!=="onCompositionStart"?_==="onCompositionEnd"&&Xo&&(g=E0()):(Vi=d,Xg="value"in Vi?Vi.value:Vi.textContent,Xo=!0)),B=sh(c,_),0<B.length&&(_=new gw(_,t,null,n,d),f.push({event:_,listeners:B}),g?_.data=g:(g=S0(n),g!==null&&(_.data=g)))),(g=gb?_b(t,n):yb(t,n))&&(c=sh(c,"onBeforeInput"),0<c.length&&(d=new gw("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=g))}L0(f,e)})}function Vu(t,e,n){return{instance:t,listener:e,currentTarget:n}}function sh(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Cu(t,n),s!=null&&r.unshift(Vu(t,s,i)),s=Cu(t,e),s!=null&&r.push(Vu(t,s,i))),t=t.return}return r}function Mo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Cw(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Cu(n,s),l!=null&&o.unshift(Vu(n,l,a))):i||(l=Cu(n,s),l!=null&&o.push(Vu(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var xb=/\r\n?/g,Nb=/\u0000|\uFFFD/g;function kw(t){return(typeof t=="string"?t:""+t).replace(xb,`
`).replace(Nb,"")}function ud(t,e,n){if(e=kw(e),kw(t)!==e&&n)throw Error(q(425))}function oh(){}var Em=null,Im=null;function Tm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sm=typeof setTimeout=="function"?setTimeout:void 0,Ob=typeof clearTimeout=="function"?clearTimeout:void 0,bw=typeof Promise=="function"?Promise:void 0,Vb=typeof queueMicrotask=="function"?queueMicrotask:typeof bw<"u"?function(t){return bw.resolve(null).then(t).catch(Lb)}:Sm;function Lb(t){setTimeout(function(){throw t})}function Ip(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Du(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Du(e)}function zi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Xa=Math.random().toString(36).slice(2),_r="__reactFiber$"+Xa,Lu="__reactProps$"+Xa,ei="__reactContainer$"+Xa,Rm="__reactEvents$"+Xa,Mb="__reactListeners$"+Xa,Fb="__reactHandles$"+Xa;function Os(t){var e=t[_r];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ei]||n[_r]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dw(t);t!==null;){if(n=t[_r])return n;t=Dw(t)}return e}t=n,n=t.parentNode}return null}function pc(t){return t=t[_r]||t[ei],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ta(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(q(33))}function Yh(t){return t[Lu]||null}var Am=[],na=-1;function us(t){return{current:t}}function Be(t){0>na||(t.current=Am[na],Am[na]=null,na--)}function Oe(t,e){na++,Am[na]=t.current,t.current=e}var Yi={},nn=us(Yi),Rn=us(!1),Ks=Yi;function Sa(t,e){var n=t.type.contextTypes;if(!n)return Yi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function An(t){return t=t.childContextTypes,t!=null}function ah(){Be(Rn),Be(nn)}function xw(t,e,n){if(nn.current!==Yi)throw Error(q(168));Oe(nn,e),Oe(Rn,n)}function F0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(q(108,Ik(t)||"Unknown",i));return et({},n,r)}function lh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yi,Ks=nn.current,Oe(nn,t),Oe(Rn,Rn.current),!0}function Nw(t,e,n){var r=t.stateNode;if(!r)throw Error(q(169));n?(t=F0(t,e,Ks),r.__reactInternalMemoizedMergedChildContext=t,Be(Rn),Be(nn),Oe(nn,t)):Be(Rn),Oe(Rn,n)}var $r=null,Jh=!1,Tp=!1;function U0(t){$r===null?$r=[t]:$r.push(t)}function Ub(t){Jh=!0,U0(t)}function cs(){if(!Tp&&$r!==null){Tp=!0;var t=0,e=Ce;try{var n=$r;for(Ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}$r=null,Jh=!1}catch(i){throw $r!==null&&($r=$r.slice(t+1)),c0(Kg,cs),i}finally{Ce=e,Tp=!1}}return null}var ra=[],ia=0,uh=null,ch=0,zn=[],$n=0,Qs=null,qr=1,Wr="";function Rs(t,e){ra[ia++]=ch,ra[ia++]=uh,uh=t,ch=e}function B0(t,e,n){zn[$n++]=qr,zn[$n++]=Wr,zn[$n++]=Qs,Qs=t;var r=qr;t=Wr;var i=32-lr(r)-1;r&=~(1<<i),n+=1;var s=32-lr(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,qr=1<<32-lr(e)+i|n<<i|r,Wr=s+t}else qr=1<<s|n<<i|r,Wr=t}function r_(t){t.return!==null&&(Rs(t,1),B0(t,1,0))}function i_(t){for(;t===uh;)uh=ra[--ia],ra[ia]=null,ch=ra[--ia],ra[ia]=null;for(;t===Qs;)Qs=zn[--$n],zn[$n]=null,Wr=zn[--$n],zn[$n]=null,qr=zn[--$n],zn[$n]=null}var On=null,xn=null,qe=!1,or=null;function j0(t,e){var n=Wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ow(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,On=t,xn=zi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,On=t,xn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qs!==null?{id:qr,overflow:Wr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,On=t,xn=null,!0):!1;default:return!1}}function Pm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cm(t){if(qe){var e=xn;if(e){var n=e;if(!Ow(t,e)){if(Pm(t))throw Error(q(418));e=zi(n.nextSibling);var r=On;e&&Ow(t,e)?j0(r,n):(t.flags=t.flags&-4097|2,qe=!1,On=t)}}else{if(Pm(t))throw Error(q(418));t.flags=t.flags&-4097|2,qe=!1,On=t}}}function Vw(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;On=t}function cd(t){if(t!==On)return!1;if(!qe)return Vw(t),qe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Tm(t.type,t.memoizedProps)),e&&(e=xn)){if(Pm(t))throw z0(),Error(q(418));for(;e;)j0(t,e),e=zi(e.nextSibling)}if(Vw(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(q(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xn=zi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xn=null}}else xn=On?zi(t.stateNode.nextSibling):null;return!0}function z0(){for(var t=xn;t;)t=zi(t.nextSibling)}function Ra(){xn=On=null,qe=!1}function s_(t){or===null?or=[t]:or.push(t)}var Bb=ai.ReactCurrentBatchConfig;function Ol(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(q(309));var r=n.stateNode}if(!r)throw Error(q(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(q(284));if(!n._owner)throw Error(q(290,t))}return t}function dd(t,e){throw t=Object.prototype.toString.call(e),Error(q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Lw(t){var e=t._init;return e(t._payload)}function $0(t){function e(T,v){if(t){var I=T.deletions;I===null?(T.deletions=[v],T.flags|=16):I.push(v)}}function n(T,v){if(!t)return null;for(;v!==null;)e(T,v),v=v.sibling;return null}function r(T,v){for(T=new Map;v!==null;)v.key!==null?T.set(v.key,v):T.set(v.index,v),v=v.sibling;return T}function i(T,v){return T=Gi(T,v),T.index=0,T.sibling=null,T}function s(T,v,I){return T.index=I,t?(I=T.alternate,I!==null?(I=I.index,I<v?(T.flags|=2,v):I):(T.flags|=2,v)):(T.flags|=1048576,v)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function a(T,v,I,x){return v===null||v.tag!==6?(v=bp(I,T.mode,x),v.return=T,v):(v=i(v,I),v.return=T,v)}function l(T,v,I,x){var F=I.type;return F===Jo?d(T,v,I.props.children,x,I.key):v!==null&&(v.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===ki&&Lw(F)===v.type)?(x=i(v,I.props),x.ref=Ol(T,v,I),x.return=T,x):(x=Fd(I.type,I.key,I.props,null,T.mode,x),x.ref=Ol(T,v,I),x.return=T,x)}function c(T,v,I,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==I.containerInfo||v.stateNode.implementation!==I.implementation?(v=Dp(I,T.mode,x),v.return=T,v):(v=i(v,I.children||[]),v.return=T,v)}function d(T,v,I,x,F){return v===null||v.tag!==7?(v=$s(I,T.mode,x,F),v.return=T,v):(v=i(v,I),v.return=T,v)}function f(T,v,I){if(typeof v=="string"&&v!==""||typeof v=="number")return v=bp(""+v,T.mode,I),v.return=T,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ed:return I=Fd(v.type,v.key,v.props,null,T.mode,I),I.ref=Ol(T,null,v),I.return=T,I;case Yo:return v=Dp(v,T.mode,I),v.return=T,v;case ki:var x=v._init;return f(T,x(v._payload),I)}if(Yl(v)||kl(v))return v=$s(v,T.mode,I,null),v.return=T,v;dd(T,v)}return null}function p(T,v,I,x){var F=v!==null?v.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return F!==null?null:a(T,v,""+I,x);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ed:return I.key===F?l(T,v,I,x):null;case Yo:return I.key===F?c(T,v,I,x):null;case ki:return F=I._init,p(T,v,F(I._payload),x)}if(Yl(I)||kl(I))return F!==null?null:d(T,v,I,x,null);dd(T,I)}return null}function w(T,v,I,x,F){if(typeof x=="string"&&x!==""||typeof x=="number")return T=T.get(I)||null,a(v,T,""+x,F);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ed:return T=T.get(x.key===null?I:x.key)||null,l(v,T,x,F);case Yo:return T=T.get(x.key===null?I:x.key)||null,c(v,T,x,F);case ki:var B=x._init;return w(T,v,I,B(x._payload),F)}if(Yl(x)||kl(x))return T=T.get(I)||null,d(v,T,x,F,null);dd(v,x)}return null}function S(T,v,I,x){for(var F=null,B=null,g=v,_=v=0,E=null;g!==null&&_<I.length;_++){g.index>_?(E=g,g=null):E=g.sibling;var R=p(T,g,I[_],x);if(R===null){g===null&&(g=E);break}t&&g&&R.alternate===null&&e(T,g),v=s(R,v,_),B===null?F=R:B.sibling=R,B=R,g=E}if(_===I.length)return n(T,g),qe&&Rs(T,_),F;if(g===null){for(;_<I.length;_++)g=f(T,I[_],x),g!==null&&(v=s(g,v,_),B===null?F=g:B.sibling=g,B=g);return qe&&Rs(T,_),F}for(g=r(T,g);_<I.length;_++)E=w(g,T,_,I[_],x),E!==null&&(t&&E.alternate!==null&&g.delete(E.key===null?_:E.key),v=s(E,v,_),B===null?F=E:B.sibling=E,B=E);return t&&g.forEach(function(k){return e(T,k)}),qe&&Rs(T,_),F}function A(T,v,I,x){var F=kl(I);if(typeof F!="function")throw Error(q(150));if(I=F.call(I),I==null)throw Error(q(151));for(var B=F=null,g=v,_=v=0,E=null,R=I.next();g!==null&&!R.done;_++,R=I.next()){g.index>_?(E=g,g=null):E=g.sibling;var k=p(T,g,R.value,x);if(k===null){g===null&&(g=E);break}t&&g&&k.alternate===null&&e(T,g),v=s(k,v,_),B===null?F=k:B.sibling=k,B=k,g=E}if(R.done)return n(T,g),qe&&Rs(T,_),F;if(g===null){for(;!R.done;_++,R=I.next())R=f(T,R.value,x),R!==null&&(v=s(R,v,_),B===null?F=R:B.sibling=R,B=R);return qe&&Rs(T,_),F}for(g=r(T,g);!R.done;_++,R=I.next())R=w(g,T,_,R.value,x),R!==null&&(t&&R.alternate!==null&&g.delete(R.key===null?_:R.key),v=s(R,v,_),B===null?F=R:B.sibling=R,B=R);return t&&g.forEach(function(C){return e(T,C)}),qe&&Rs(T,_),F}function b(T,v,I,x){if(typeof I=="object"&&I!==null&&I.type===Jo&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case ed:e:{for(var F=I.key,B=v;B!==null;){if(B.key===F){if(F=I.type,F===Jo){if(B.tag===7){n(T,B.sibling),v=i(B,I.props.children),v.return=T,T=v;break e}}else if(B.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===ki&&Lw(F)===B.type){n(T,B.sibling),v=i(B,I.props),v.ref=Ol(T,B,I),v.return=T,T=v;break e}n(T,B);break}else e(T,B);B=B.sibling}I.type===Jo?(v=$s(I.props.children,T.mode,x,I.key),v.return=T,T=v):(x=Fd(I.type,I.key,I.props,null,T.mode,x),x.ref=Ol(T,v,I),x.return=T,T=x)}return o(T);case Yo:e:{for(B=I.key;v!==null;){if(v.key===B)if(v.tag===4&&v.stateNode.containerInfo===I.containerInfo&&v.stateNode.implementation===I.implementation){n(T,v.sibling),v=i(v,I.children||[]),v.return=T,T=v;break e}else{n(T,v);break}else e(T,v);v=v.sibling}v=Dp(I,T.mode,x),v.return=T,T=v}return o(T);case ki:return B=I._init,b(T,v,B(I._payload),x)}if(Yl(I))return S(T,v,I,x);if(kl(I))return A(T,v,I,x);dd(T,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,v!==null&&v.tag===6?(n(T,v.sibling),v=i(v,I),v.return=T,T=v):(n(T,v),v=bp(I,T.mode,x),v.return=T,T=v),o(T)):n(T,v)}return b}var Aa=$0(!0),q0=$0(!1),dh=us(null),hh=null,sa=null,o_=null;function a_(){o_=sa=hh=null}function l_(t){var e=dh.current;Be(dh),t._currentValue=e}function km(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function pa(t,e){hh=t,o_=sa=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(En=!0),t.firstContext=null)}function Yn(t){var e=t._currentValue;if(o_!==t)if(t={context:t,memoizedValue:e,next:null},sa===null){if(hh===null)throw Error(q(308));sa=t,hh.dependencies={lanes:0,firstContext:t}}else sa=sa.next=t;return e}var Vs=null;function u_(t){Vs===null?Vs=[t]:Vs.push(t)}function W0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,u_(e)):(n.next=i.next,i.next=n),e.interleaved=n,ti(t,r)}function ti(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var bi=!1;function c_(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function G0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function $i(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Te&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ti(t,n)}return i=r.interleaved,i===null?(e.next=e,u_(r)):(e.next=i.next,i.next=e),r.interleaved=e,ti(t,n)}function xd(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qg(t,n)}}function Mw(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fh(t,e,n,r){var i=t.updateQueue;bi=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,d=c=l=null,a=s;do{var p=a.lane,w=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=t,A=a;switch(p=e,w=n,A.tag){case 1:if(S=A.payload,typeof S=="function"){f=S.call(w,f,p);break e}f=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=A.payload,p=typeof S=="function"?S.call(w,f,p):S,p==null)break e;f=et({},f,p);break e;case 2:bi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else w={eventTime:w,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=w,l=f):d=d.next=w,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Js|=o,t.lanes=o,t.memoizedState=f}}function Fw(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(q(191,i));i.call(r)}}}var mc={},Pr=us(mc),Mu=us(mc),Fu=us(mc);function Ls(t){if(t===mc)throw Error(q(174));return t}function d_(t,e){switch(Oe(Fu,e),Oe(Mu,t),Oe(Pr,mc),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:um(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=um(e,t)}Be(Pr),Oe(Pr,e)}function Pa(){Be(Pr),Be(Mu),Be(Fu)}function H0(t){Ls(Fu.current);var e=Ls(Pr.current),n=um(e,t.type);e!==n&&(Oe(Mu,t),Oe(Pr,n))}function h_(t){Mu.current===t&&(Be(Pr),Be(Mu))}var Je=us(0);function ph(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Sp=[];function f_(){for(var t=0;t<Sp.length;t++)Sp[t]._workInProgressVersionPrimary=null;Sp.length=0}var Nd=ai.ReactCurrentDispatcher,Rp=ai.ReactCurrentBatchConfig,Ys=0,Xe=null,Et=null,Pt=null,mh=!1,du=!1,Uu=0,jb=0;function Yt(){throw Error(q(321))}function p_(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!cr(t[n],e[n]))return!1;return!0}function m_(t,e,n,r,i,s){if(Ys=s,Xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Nd.current=t===null||t.memoizedState===null?Wb:Gb,t=n(r,i),du){s=0;do{if(du=!1,Uu=0,25<=s)throw Error(q(301));s+=1,Pt=Et=null,e.updateQueue=null,Nd.current=Hb,t=n(r,i)}while(du)}if(Nd.current=gh,e=Et!==null&&Et.next!==null,Ys=0,Pt=Et=Xe=null,mh=!1,e)throw Error(q(300));return t}function g_(){var t=Uu!==0;return Uu=0,t}function gr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?Xe.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function Jn(){if(Et===null){var t=Xe.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=Pt===null?Xe.memoizedState:Pt.next;if(e!==null)Pt=e,Et=t;else{if(t===null)throw Error(q(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Pt===null?Xe.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function Bu(t,e){return typeof e=="function"?e(t):e}function Ap(t){var e=Jn(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=Et,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Ys&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Xe.lanes|=d,Js|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,cr(r,e.memoizedState)||(En=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Xe.lanes|=s,Js|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pp(t){var e=Jn(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);cr(s,e.memoizedState)||(En=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function K0(){}function Q0(t,e){var n=Xe,r=Jn(),i=e(),s=!cr(r.memoizedState,i);if(s&&(r.memoizedState=i,En=!0),r=r.queue,__(X0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,ju(9,J0.bind(null,n,r,i,e),void 0,null),kt===null)throw Error(q(349));Ys&30||Y0(n,e,i)}return i}function Y0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Xe.updateQueue,e===null?(e={lastEffect:null,stores:null},Xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function J0(t,e,n,r){e.value=n,e.getSnapshot=r,Z0(e)&&eS(t)}function X0(t,e,n){return n(function(){Z0(e)&&eS(t)})}function Z0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!cr(t,n)}catch{return!0}}function eS(t){var e=ti(t,1);e!==null&&ur(e,t,1,-1)}function Uw(t){var e=gr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bu,lastRenderedState:t},e.queue=t,t=t.dispatch=qb.bind(null,Xe,t),[e.memoizedState,t]}function ju(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Xe.updateQueue,e===null?(e={lastEffect:null,stores:null},Xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function tS(){return Jn().memoizedState}function Od(t,e,n,r){var i=gr();Xe.flags|=t,i.memoizedState=ju(1|e,n,void 0,r===void 0?null:r)}function Xh(t,e,n,r){var i=Jn();r=r===void 0?null:r;var s=void 0;if(Et!==null){var o=Et.memoizedState;if(s=o.destroy,r!==null&&p_(r,o.deps)){i.memoizedState=ju(e,n,s,r);return}}Xe.flags|=t,i.memoizedState=ju(1|e,n,s,r)}function Bw(t,e){return Od(8390656,8,t,e)}function __(t,e){return Xh(2048,8,t,e)}function nS(t,e){return Xh(4,2,t,e)}function rS(t,e){return Xh(4,4,t,e)}function iS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sS(t,e,n){return n=n!=null?n.concat([t]):null,Xh(4,4,iS.bind(null,e,t),n)}function y_(){}function oS(t,e){var n=Jn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&p_(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function aS(t,e){var n=Jn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&p_(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function lS(t,e,n){return Ys&21?(cr(n,e)||(n=f0(),Xe.lanes|=n,Js|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,En=!0),t.memoizedState=n)}function zb(t,e){var n=Ce;Ce=n!==0&&4>n?n:4,t(!0);var r=Rp.transition;Rp.transition={};try{t(!1),e()}finally{Ce=n,Rp.transition=r}}function uS(){return Jn().memoizedState}function $b(t,e,n){var r=Wi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cS(t))dS(e,n);else if(n=W0(t,e,n,r),n!==null){var i=dn();ur(n,t,r,i),hS(n,e,r)}}function qb(t,e,n){var r=Wi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cS(t))dS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,cr(a,o)){var l=e.interleaved;l===null?(i.next=i,u_(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=W0(t,e,i,r),n!==null&&(i=dn(),ur(n,t,r,i),hS(n,e,r))}}function cS(t){var e=t.alternate;return t===Xe||e!==null&&e===Xe}function dS(t,e){du=mh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function hS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qg(t,n)}}var gh={readContext:Yn,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},Wb={readContext:Yn,useCallback:function(t,e){return gr().memoizedState=[t,e===void 0?null:e],t},useContext:Yn,useEffect:Bw,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Od(4194308,4,iS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Od(4194308,4,t,e)},useInsertionEffect:function(t,e){return Od(4,2,t,e)},useMemo:function(t,e){var n=gr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=gr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=$b.bind(null,Xe,t),[r.memoizedState,t]},useRef:function(t){var e=gr();return t={current:t},e.memoizedState=t},useState:Uw,useDebugValue:y_,useDeferredValue:function(t){return gr().memoizedState=t},useTransition:function(){var t=Uw(!1),e=t[0];return t=zb.bind(null,t[1]),gr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Xe,i=gr();if(qe){if(n===void 0)throw Error(q(407));n=n()}else{if(n=e(),kt===null)throw Error(q(349));Ys&30||Y0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Bw(X0.bind(null,r,s,t),[t]),r.flags|=2048,ju(9,J0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=gr(),e=kt.identifierPrefix;if(qe){var n=Wr,r=qr;n=(r&~(1<<32-lr(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Uu++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=jb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Gb={readContext:Yn,useCallback:oS,useContext:Yn,useEffect:__,useImperativeHandle:sS,useInsertionEffect:nS,useLayoutEffect:rS,useMemo:aS,useReducer:Ap,useRef:tS,useState:function(){return Ap(Bu)},useDebugValue:y_,useDeferredValue:function(t){var e=Jn();return lS(e,Et.memoizedState,t)},useTransition:function(){var t=Ap(Bu)[0],e=Jn().memoizedState;return[t,e]},useMutableSource:K0,useSyncExternalStore:Q0,useId:uS,unstable_isNewReconciler:!1},Hb={readContext:Yn,useCallback:oS,useContext:Yn,useEffect:__,useImperativeHandle:sS,useInsertionEffect:nS,useLayoutEffect:rS,useMemo:aS,useReducer:Pp,useRef:tS,useState:function(){return Pp(Bu)},useDebugValue:y_,useDeferredValue:function(t){var e=Jn();return Et===null?e.memoizedState=t:lS(e,Et.memoizedState,t)},useTransition:function(){var t=Pp(Bu)[0],e=Jn().memoizedState;return[t,e]},useMutableSource:K0,useSyncExternalStore:Q0,useId:uS,unstable_isNewReconciler:!1};function rr(t,e){if(t&&t.defaultProps){e=et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function bm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zh={isMounted:function(t){return(t=t._reactInternals)?mo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=dn(),i=Wi(t),s=Qr(r,i);s.payload=e,n!=null&&(s.callback=n),e=$i(t,s,i),e!==null&&(ur(e,t,i,r),xd(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=dn(),i=Wi(t),s=Qr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=$i(t,s,i),e!==null&&(ur(e,t,i,r),xd(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dn(),r=Wi(t),i=Qr(n,r);i.tag=2,e!=null&&(i.callback=e),e=$i(t,i,r),e!==null&&(ur(e,t,r,n),xd(e,t,r))}};function jw(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Nu(n,r)||!Nu(i,s):!0}function fS(t,e,n){var r=!1,i=Yi,s=e.contextType;return typeof s=="object"&&s!==null?s=Yn(s):(i=An(e)?Ks:nn.current,r=e.contextTypes,s=(r=r!=null)?Sa(t,i):Yi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function zw(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zh.enqueueReplaceState(e,e.state,null)}function Dm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},c_(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Yn(s):(s=An(e)?Ks:nn.current,i.context=Sa(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bm(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zh.enqueueReplaceState(i,i.state,null),fh(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ca(t,e){try{var n="",r=e;do n+=Ek(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Cp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Kb=typeof WeakMap=="function"?WeakMap:Map;function pS(t,e,n){n=Qr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){yh||(yh=!0,zm=r),xm(t,e)},n}function mS(t,e,n){n=Qr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){xm(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xm(t,e),typeof r!="function"&&(qi===null?qi=new Set([this]):qi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function $w(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Kb;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=lD.bind(null,t,e,n),e.then(t,t))}function qw(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ww(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Qr(-1,1),e.tag=2,$i(n,e,1))),n.lanes|=1),t)}var Qb=ai.ReactCurrentOwner,En=!1;function an(t,e,n,r){e.child=t===null?q0(e,null,n,r):Aa(e,t.child,n,r)}function Gw(t,e,n,r,i){n=n.render;var s=e.ref;return pa(e,i),r=m_(t,e,n,r,s,i),n=g_(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ni(t,e,i)):(qe&&n&&r_(e),e.flags|=1,an(t,e,r,i),e.child)}function Hw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!A_(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,gS(t,e,s,r,i)):(t=Fd(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Nu,n(o,r)&&t.ref===e.ref)return ni(t,e,i)}return e.flags|=1,t=Gi(s,r),t.ref=e.ref,t.return=e,e.child=t}function gS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Nu(s,r)&&t.ref===e.ref)if(En=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(En=!0);else return e.lanes=t.lanes,ni(t,e,i)}return Nm(t,e,n,r,i)}function _S(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Oe(aa,bn),bn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Oe(aa,bn),bn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Oe(aa,bn),bn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Oe(aa,bn),bn|=r;return an(t,e,i,n),e.child}function yS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Nm(t,e,n,r,i){var s=An(n)?Ks:nn.current;return s=Sa(e,s),pa(e,i),n=m_(t,e,n,r,s,i),r=g_(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ni(t,e,i)):(qe&&r&&r_(e),e.flags|=1,an(t,e,n,i),e.child)}function Kw(t,e,n,r,i){if(An(n)){var s=!0;lh(e)}else s=!1;if(pa(e,i),e.stateNode===null)Vd(t,e),fS(e,n,r),Dm(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Yn(c):(c=An(n)?Ks:nn.current,c=Sa(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&zw(e,o,r,c),bi=!1;var p=e.memoizedState;o.state=p,fh(e,r,o,i),l=e.memoizedState,a!==r||p!==l||Rn.current||bi?(typeof d=="function"&&(bm(e,n,d,r),l=e.memoizedState),(a=bi||jw(e,n,a,r,p,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,G0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:rr(e.type,a),o.props=c,f=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Yn(l):(l=An(n)?Ks:nn.current,l=Sa(e,l));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==l)&&zw(e,o,r,l),bi=!1,p=e.memoizedState,o.state=p,fh(e,r,o,i);var S=e.memoizedState;a!==f||p!==S||Rn.current||bi?(typeof w=="function"&&(bm(e,n,w,r),S=e.memoizedState),(c=bi||jw(e,n,c,r,p,S,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Om(t,e,n,r,s,i)}function Om(t,e,n,r,i,s){yS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Nw(e,n,!1),ni(t,e,s);r=e.stateNode,Qb.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Aa(e,t.child,null,s),e.child=Aa(e,null,a,s)):an(t,e,a,s),e.memoizedState=r.state,i&&Nw(e,n,!0),e.child}function vS(t){var e=t.stateNode;e.pendingContext?xw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xw(t,e.context,!1),d_(t,e.containerInfo)}function Qw(t,e,n,r,i){return Ra(),s_(i),e.flags|=256,an(t,e,n,r),e.child}var Vm={dehydrated:null,treeContext:null,retryLane:0};function Lm(t){return{baseLanes:t,cachePool:null,transitions:null}}function wS(t,e,n){var r=e.pendingProps,i=Je.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Oe(Je,i&1),t===null)return Cm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nf(o,r,0,null),t=$s(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Lm(n),e.memoizedState=Vm,t):v_(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Yb(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Gi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Gi(a,s):(s=$s(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Lm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Vm,r}return s=t.child,t=s.sibling,r=Gi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function v_(t,e){return e=nf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function hd(t,e,n,r){return r!==null&&s_(r),Aa(e,t.child,null,n),t=v_(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Yb(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Cp(Error(q(422))),hd(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=nf({mode:"visible",children:r.children},i,0,null),s=$s(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Aa(e,t.child,null,o),e.child.memoizedState=Lm(o),e.memoizedState=Vm,s);if(!(e.mode&1))return hd(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(q(419)),r=Cp(s,r,void 0),hd(t,e,o,r)}if(a=(o&t.childLanes)!==0,En||a){if(r=kt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ti(t,i),ur(r,t,i,-1))}return R_(),r=Cp(Error(q(421))),hd(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=uD.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,xn=zi(i.nextSibling),On=e,qe=!0,or=null,t!==null&&(zn[$n++]=qr,zn[$n++]=Wr,zn[$n++]=Qs,qr=t.id,Wr=t.overflow,Qs=e),e=v_(e,r.children),e.flags|=4096,e)}function Yw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),km(t.return,e,n)}function kp(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ES(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(an(t,e,r.children,n),r=Je.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yw(t,n,e);else if(t.tag===19)Yw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Oe(Je,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ph(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),kp(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ph(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}kp(e,!0,n,null,s);break;case"together":kp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Vd(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ni(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Js|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(q(153));if(e.child!==null){for(t=e.child,n=Gi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Jb(t,e,n){switch(e.tag){case 3:vS(e),Ra();break;case 5:H0(e);break;case 1:An(e.type)&&lh(e);break;case 4:d_(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Oe(dh,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Oe(Je,Je.current&1),e.flags|=128,null):n&e.child.childLanes?wS(t,e,n):(Oe(Je,Je.current&1),t=ni(t,e,n),t!==null?t.sibling:null);Oe(Je,Je.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ES(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Oe(Je,Je.current),r)break;return null;case 22:case 23:return e.lanes=0,_S(t,e,n)}return ni(t,e,n)}var IS,Mm,TS,SS;IS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mm=function(){};TS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ls(Pr.current);var s=null;switch(n){case"input":i=sm(t,i),r=sm(t,r),s=[];break;case"select":i=et({},i,{value:void 0}),r=et({},r,{value:void 0}),s=[];break;case"textarea":i=lm(t,i),r=lm(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=oh)}cm(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Au.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Au.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Fe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};SS=function(t,e,n,r){n!==r&&(e.flags|=4)};function Vl(t,e){if(!qe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Xb(t,e,n){var r=e.pendingProps;switch(i_(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(e),null;case 1:return An(e.type)&&ah(),Jt(e),null;case 3:return r=e.stateNode,Pa(),Be(Rn),Be(nn),f_(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(cd(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,or!==null&&(Wm(or),or=null))),Mm(t,e),Jt(e),null;case 5:h_(e);var i=Ls(Fu.current);if(n=e.type,t!==null&&e.stateNode!=null)TS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(q(166));return Jt(e),null}if(t=Ls(Pr.current),cd(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[_r]=e,r[Lu]=s,t=(e.mode&1)!==0,n){case"dialog":Fe("cancel",r),Fe("close",r);break;case"iframe":case"object":case"embed":Fe("load",r);break;case"video":case"audio":for(i=0;i<Xl.length;i++)Fe(Xl[i],r);break;case"source":Fe("error",r);break;case"img":case"image":case"link":Fe("error",r),Fe("load",r);break;case"details":Fe("toggle",r);break;case"input":sw(r,s),Fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Fe("invalid",r);break;case"textarea":aw(r,s),Fe("invalid",r)}cm(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ud(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ud(r.textContent,a,t),i=["children",""+a]):Au.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Fe("scroll",r)}switch(n){case"input":td(r),ow(r,s,!0);break;case"textarea":td(r),lw(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=oh)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=XT(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[_r]=e,t[Lu]=r,IS(t,e,!1,!1),e.stateNode=t;e:{switch(o=dm(n,r),n){case"dialog":Fe("cancel",t),Fe("close",t),i=r;break;case"iframe":case"object":case"embed":Fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Xl.length;i++)Fe(Xl[i],t);i=r;break;case"source":Fe("error",t),i=r;break;case"img":case"image":case"link":Fe("error",t),Fe("load",t),i=r;break;case"details":Fe("toggle",t),i=r;break;case"input":sw(t,r),i=sm(t,r),Fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=et({},r,{value:void 0}),Fe("invalid",t);break;case"textarea":aw(t,r),i=lm(t,r),Fe("invalid",t);break;default:i=r}cm(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?t0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ZT(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Pu(t,l):typeof l=="number"&&Pu(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Au.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Fe("scroll",t):l!=null&&$g(t,s,l,o))}switch(n){case"input":td(t),ow(t,r,!1);break;case"textarea":td(t),lw(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Qi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ca(t,!!r.multiple,s,!1):r.defaultValue!=null&&ca(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=oh)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Jt(e),null;case 6:if(t&&e.stateNode!=null)SS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(q(166));if(n=Ls(Fu.current),Ls(Pr.current),cd(e)){if(r=e.stateNode,n=e.memoizedProps,r[_r]=e,(s=r.nodeValue!==n)&&(t=On,t!==null))switch(t.tag){case 3:ud(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ud(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_r]=e,e.stateNode=r}return Jt(e),null;case 13:if(Be(Je),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(qe&&xn!==null&&e.mode&1&&!(e.flags&128))z0(),Ra(),e.flags|=98560,s=!1;else if(s=cd(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(q(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(q(317));s[_r]=e}else Ra(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Jt(e),s=!1}else or!==null&&(Wm(or),or=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Je.current&1?It===0&&(It=3):R_())),e.updateQueue!==null&&(e.flags|=4),Jt(e),null);case 4:return Pa(),Mm(t,e),t===null&&Ou(e.stateNode.containerInfo),Jt(e),null;case 10:return l_(e.type._context),Jt(e),null;case 17:return An(e.type)&&ah(),Jt(e),null;case 19:if(Be(Je),s=e.memoizedState,s===null)return Jt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Vl(s,!1);else{if(It!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ph(t),o!==null){for(e.flags|=128,Vl(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Oe(Je,Je.current&1|2),e.child}t=t.sibling}s.tail!==null&&dt()>ka&&(e.flags|=128,r=!0,Vl(s,!1),e.lanes=4194304)}else{if(!r)if(t=ph(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Vl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!qe)return Jt(e),null}else 2*dt()-s.renderingStartTime>ka&&n!==1073741824&&(e.flags|=128,r=!0,Vl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=dt(),e.sibling=null,n=Je.current,Oe(Je,r?n&1|2:n&1),e):(Jt(e),null);case 22:case 23:return S_(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?bn&1073741824&&(Jt(e),e.subtreeFlags&6&&(e.flags|=8192)):Jt(e),null;case 24:return null;case 25:return null}throw Error(q(156,e.tag))}function Zb(t,e){switch(i_(e),e.tag){case 1:return An(e.type)&&ah(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Pa(),Be(Rn),Be(nn),f_(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return h_(e),null;case 13:if(Be(Je),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(q(340));Ra()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Be(Je),null;case 4:return Pa(),null;case 10:return l_(e.type._context),null;case 22:case 23:return S_(),null;case 24:return null;default:return null}}var fd=!1,Zt=!1,eD=typeof WeakSet=="function"?WeakSet:Set,te=null;function oa(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){rt(t,e,r)}else n.current=null}function Fm(t,e,n){try{n()}catch(r){rt(t,e,r)}}var Jw=!1;function tD(t,e){if(Em=rh,t=k0(),n_(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,p=null;t:for(;;){for(var w;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(w=f.firstChild)!==null;)p=f,f=w;for(;;){if(f===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++d===r&&(l=o),(w=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=w}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Im={focusedElem:t,selectionRange:n},rh=!1,te=e;te!==null;)if(e=te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,te=t;else for(;te!==null;){e=te;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var A=S.memoizedProps,b=S.memoizedState,T=e.stateNode,v=T.getSnapshotBeforeUpdate(e.elementType===e.type?A:rr(e.type,A),b);T.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(x){rt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,te=t;break}te=e.return}return S=Jw,Jw=!1,S}function hu(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Fm(e,n,s)}i=i.next}while(i!==r)}}function ef(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Um(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function RS(t){var e=t.alternate;e!==null&&(t.alternate=null,RS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_r],delete e[Lu],delete e[Rm],delete e[Mb],delete e[Fb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function AS(t){return t.tag===5||t.tag===3||t.tag===4}function Xw(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||AS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=oh));else if(r!==4&&(t=t.child,t!==null))for(Bm(t,e,n),t=t.sibling;t!==null;)Bm(t,e,n),t=t.sibling}function jm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(jm(t,e,n),t=t.sibling;t!==null;)jm(t,e,n),t=t.sibling}var zt=null,ir=!1;function Ti(t,e,n){for(n=n.child;n!==null;)PS(t,e,n),n=n.sibling}function PS(t,e,n){if(Ar&&typeof Ar.onCommitFiberUnmount=="function")try{Ar.onCommitFiberUnmount(Gh,n)}catch{}switch(n.tag){case 5:Zt||oa(n,e);case 6:var r=zt,i=ir;zt=null,Ti(t,e,n),zt=r,ir=i,zt!==null&&(ir?(t=zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(ir?(t=zt,n=n.stateNode,t.nodeType===8?Ip(t.parentNode,n):t.nodeType===1&&Ip(t,n),Du(t)):Ip(zt,n.stateNode));break;case 4:r=zt,i=ir,zt=n.stateNode.containerInfo,ir=!0,Ti(t,e,n),zt=r,ir=i;break;case 0:case 11:case 14:case 15:if(!Zt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Fm(n,e,o),i=i.next}while(i!==r)}Ti(t,e,n);break;case 1:if(!Zt&&(oa(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){rt(n,e,a)}Ti(t,e,n);break;case 21:Ti(t,e,n);break;case 22:n.mode&1?(Zt=(r=Zt)||n.memoizedState!==null,Ti(t,e,n),Zt=r):Ti(t,e,n);break;default:Ti(t,e,n)}}function Zw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new eD),e.forEach(function(r){var i=cD.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function nr(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:zt=a.stateNode,ir=!1;break e;case 3:zt=a.stateNode.containerInfo,ir=!0;break e;case 4:zt=a.stateNode.containerInfo,ir=!0;break e}a=a.return}if(zt===null)throw Error(q(160));PS(s,o,i),zt=null,ir=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){rt(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)CS(e,t),e=e.sibling}function CS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(nr(e,t),mr(t),r&4){try{hu(3,t,t.return),ef(3,t)}catch(A){rt(t,t.return,A)}try{hu(5,t,t.return)}catch(A){rt(t,t.return,A)}}break;case 1:nr(e,t),mr(t),r&512&&n!==null&&oa(n,n.return);break;case 5:if(nr(e,t),mr(t),r&512&&n!==null&&oa(n,n.return),t.flags&32){var i=t.stateNode;try{Pu(i,"")}catch(A){rt(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&YT(i,s),dm(a,o);var c=dm(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?t0(i,f):d==="dangerouslySetInnerHTML"?ZT(i,f):d==="children"?Pu(i,f):$g(i,d,f,c)}switch(a){case"input":om(i,s);break;case"textarea":JT(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?ca(i,!!s.multiple,w,!1):p!==!!s.multiple&&(s.defaultValue!=null?ca(i,!!s.multiple,s.defaultValue,!0):ca(i,!!s.multiple,s.multiple?[]:"",!1))}i[Lu]=s}catch(A){rt(t,t.return,A)}}break;case 6:if(nr(e,t),mr(t),r&4){if(t.stateNode===null)throw Error(q(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(A){rt(t,t.return,A)}}break;case 3:if(nr(e,t),mr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Du(e.containerInfo)}catch(A){rt(t,t.return,A)}break;case 4:nr(e,t),mr(t);break;case 13:nr(e,t),mr(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(I_=dt())),r&4&&Zw(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(c=Zt)||d,nr(e,t),Zt=c):nr(e,t),mr(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(te=t,d=t.child;d!==null;){for(f=te=d;te!==null;){switch(p=te,w=p.child,p.tag){case 0:case 11:case 14:case 15:hu(4,p,p.return);break;case 1:oa(p,p.return);var S=p.stateNode;if(typeof S.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(A){rt(r,n,A)}}break;case 5:oa(p,p.return);break;case 22:if(p.memoizedState!==null){tE(f);continue}}w!==null?(w.return=p,te=w):tE(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=e0("display",o))}catch(A){rt(t,t.return,A)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(A){rt(t,t.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:nr(e,t),mr(t),r&4&&Zw(t);break;case 21:break;default:nr(e,t),mr(t)}}function mr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(AS(n)){var r=n;break e}n=n.return}throw Error(q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Pu(i,""),r.flags&=-33);var s=Xw(t);jm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Xw(t);Bm(t,a,o);break;default:throw Error(q(161))}}catch(l){rt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function nD(t,e,n){te=t,kS(t)}function kS(t,e,n){for(var r=(t.mode&1)!==0;te!==null;){var i=te,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||fd;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Zt;a=fd;var c=Zt;if(fd=o,(Zt=l)&&!c)for(te=i;te!==null;)o=te,l=o.child,o.tag===22&&o.memoizedState!==null?nE(i):l!==null?(l.return=o,te=l):nE(i);for(;s!==null;)te=s,kS(s),s=s.sibling;te=i,fd=a,Zt=c}eE(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,te=s):eE(t)}}function eE(t){for(;te!==null;){var e=te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||ef(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Zt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:rr(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Fw(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Fw(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Du(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}Zt||e.flags&512&&Um(e)}catch(p){rt(e,e.return,p)}}if(e===t){te=null;break}if(n=e.sibling,n!==null){n.return=e.return,te=n;break}te=e.return}}function tE(t){for(;te!==null;){var e=te;if(e===t){te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,te=n;break}te=e.return}}function nE(t){for(;te!==null;){var e=te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ef(4,e)}catch(l){rt(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){rt(e,i,l)}}var s=e.return;try{Um(e)}catch(l){rt(e,s,l)}break;case 5:var o=e.return;try{Um(e)}catch(l){rt(e,o,l)}}}catch(l){rt(e,e.return,l)}if(e===t){te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,te=a;break}te=e.return}}var rD=Math.ceil,_h=ai.ReactCurrentDispatcher,w_=ai.ReactCurrentOwner,Kn=ai.ReactCurrentBatchConfig,Te=0,kt=null,yt=null,Wt=0,bn=0,aa=us(0),It=0,zu=null,Js=0,tf=0,E_=0,fu=null,wn=null,I_=0,ka=1/0,zr=null,yh=!1,zm=null,qi=null,pd=!1,Li=null,vh=0,pu=0,$m=null,Ld=-1,Md=0;function dn(){return Te&6?dt():Ld!==-1?Ld:Ld=dt()}function Wi(t){return t.mode&1?Te&2&&Wt!==0?Wt&-Wt:Bb.transition!==null?(Md===0&&(Md=f0()),Md):(t=Ce,t!==0||(t=window.event,t=t===void 0?16:w0(t.type)),t):1}function ur(t,e,n,r){if(50<pu)throw pu=0,$m=null,Error(q(185));hc(t,n,r),(!(Te&2)||t!==kt)&&(t===kt&&(!(Te&2)&&(tf|=n),It===4&&xi(t,Wt)),Pn(t,r),n===1&&Te===0&&!(e.mode&1)&&(ka=dt()+500,Jh&&cs()))}function Pn(t,e){var n=t.callbackNode;Bk(t,e);var r=nh(t,t===kt?Wt:0);if(r===0)n!==null&&dw(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&dw(n),e===1)t.tag===0?Ub(rE.bind(null,t)):U0(rE.bind(null,t)),Vb(function(){!(Te&6)&&cs()}),n=null;else{switch(p0(r)){case 1:n=Kg;break;case 4:n=d0;break;case 16:n=th;break;case 536870912:n=h0;break;default:n=th}n=MS(n,bS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function bS(t,e){if(Ld=-1,Md=0,Te&6)throw Error(q(327));var n=t.callbackNode;if(ma()&&t.callbackNode!==n)return null;var r=nh(t,t===kt?Wt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=wh(t,r);else{e=r;var i=Te;Te|=2;var s=xS();(kt!==t||Wt!==e)&&(zr=null,ka=dt()+500,zs(t,e));do try{oD();break}catch(a){DS(t,a)}while(!0);a_(),_h.current=s,Te=i,yt!==null?e=0:(kt=null,Wt=0,e=It)}if(e!==0){if(e===2&&(i=gm(t),i!==0&&(r=i,e=qm(t,i))),e===1)throw n=zu,zs(t,0),xi(t,r),Pn(t,dt()),n;if(e===6)xi(t,r);else{if(i=t.current.alternate,!(r&30)&&!iD(i)&&(e=wh(t,r),e===2&&(s=gm(t),s!==0&&(r=s,e=qm(t,s))),e===1))throw n=zu,zs(t,0),xi(t,r),Pn(t,dt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(q(345));case 2:As(t,wn,zr);break;case 3:if(xi(t,r),(r&130023424)===r&&(e=I_+500-dt(),10<e)){if(nh(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){dn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Sm(As.bind(null,t,wn,zr),e);break}As(t,wn,zr);break;case 4:if(xi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-lr(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=dt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rD(r/1960))-r,10<r){t.timeoutHandle=Sm(As.bind(null,t,wn,zr),r);break}As(t,wn,zr);break;case 5:As(t,wn,zr);break;default:throw Error(q(329))}}}return Pn(t,dt()),t.callbackNode===n?bS.bind(null,t):null}function qm(t,e){var n=fu;return t.current.memoizedState.isDehydrated&&(zs(t,e).flags|=256),t=wh(t,e),t!==2&&(e=wn,wn=n,e!==null&&Wm(e)),t}function Wm(t){wn===null?wn=t:wn.push.apply(wn,t)}function iD(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!cr(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xi(t,e){for(e&=~E_,e&=~tf,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-lr(e),r=1<<n;t[n]=-1,e&=~r}}function rE(t){if(Te&6)throw Error(q(327));ma();var e=nh(t,0);if(!(e&1))return Pn(t,dt()),null;var n=wh(t,e);if(t.tag!==0&&n===2){var r=gm(t);r!==0&&(e=r,n=qm(t,r))}if(n===1)throw n=zu,zs(t,0),xi(t,e),Pn(t,dt()),n;if(n===6)throw Error(q(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,As(t,wn,zr),Pn(t,dt()),null}function T_(t,e){var n=Te;Te|=1;try{return t(e)}finally{Te=n,Te===0&&(ka=dt()+500,Jh&&cs())}}function Xs(t){Li!==null&&Li.tag===0&&!(Te&6)&&ma();var e=Te;Te|=1;var n=Kn.transition,r=Ce;try{if(Kn.transition=null,Ce=1,t)return t()}finally{Ce=r,Kn.transition=n,Te=e,!(Te&6)&&cs()}}function S_(){bn=aa.current,Be(aa)}function zs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ob(n)),yt!==null)for(n=yt.return;n!==null;){var r=n;switch(i_(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ah();break;case 3:Pa(),Be(Rn),Be(nn),f_();break;case 5:h_(r);break;case 4:Pa();break;case 13:Be(Je);break;case 19:Be(Je);break;case 10:l_(r.type._context);break;case 22:case 23:S_()}n=n.return}if(kt=t,yt=t=Gi(t.current,null),Wt=bn=e,It=0,zu=null,E_=tf=Js=0,wn=fu=null,Vs!==null){for(e=0;e<Vs.length;e++)if(n=Vs[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Vs=null}return t}function DS(t,e){do{var n=yt;try{if(a_(),Nd.current=gh,mh){for(var r=Xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}mh=!1}if(Ys=0,Pt=Et=Xe=null,du=!1,Uu=0,w_.current=null,n===null||n.return===null){It=1,zu=e,yt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=qw(o);if(w!==null){w.flags&=-257,Ww(w,o,a,s,e),w.mode&1&&$w(s,c,e),e=w,l=c;var S=e.updateQueue;if(S===null){var A=new Set;A.add(l),e.updateQueue=A}else S.add(l);break e}else{if(!(e&1)){$w(s,c,e),R_();break e}l=Error(q(426))}}else if(qe&&a.mode&1){var b=qw(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Ww(b,o,a,s,e),s_(Ca(l,a));break e}}s=l=Ca(l,a),It!==4&&(It=2),fu===null?fu=[s]:fu.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=pS(s,l,e);Mw(s,T);break e;case 1:a=l;var v=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(qi===null||!qi.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=mS(s,a,e);Mw(s,x);break e}}s=s.return}while(s!==null)}OS(n)}catch(F){e=F,yt===n&&n!==null&&(yt=n=n.return);continue}break}while(!0)}function xS(){var t=_h.current;return _h.current=gh,t===null?gh:t}function R_(){(It===0||It===3||It===2)&&(It=4),kt===null||!(Js&268435455)&&!(tf&268435455)||xi(kt,Wt)}function wh(t,e){var n=Te;Te|=2;var r=xS();(kt!==t||Wt!==e)&&(zr=null,zs(t,e));do try{sD();break}catch(i){DS(t,i)}while(!0);if(a_(),Te=n,_h.current=r,yt!==null)throw Error(q(261));return kt=null,Wt=0,It}function sD(){for(;yt!==null;)NS(yt)}function oD(){for(;yt!==null&&!Dk();)NS(yt)}function NS(t){var e=LS(t.alternate,t,bn);t.memoizedProps=t.pendingProps,e===null?OS(t):yt=e,w_.current=null}function OS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Zb(n,e),n!==null){n.flags&=32767,yt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{It=6,yt=null;return}}else if(n=Xb(n,e,bn),n!==null){yt=n;return}if(e=e.sibling,e!==null){yt=e;return}yt=e=t}while(e!==null);It===0&&(It=5)}function As(t,e,n){var r=Ce,i=Kn.transition;try{Kn.transition=null,Ce=1,aD(t,e,n,r)}finally{Kn.transition=i,Ce=r}return null}function aD(t,e,n,r){do ma();while(Li!==null);if(Te&6)throw Error(q(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(q(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(jk(t,s),t===kt&&(yt=kt=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pd||(pd=!0,MS(th,function(){return ma(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Kn.transition,Kn.transition=null;var o=Ce;Ce=1;var a=Te;Te|=4,w_.current=null,tD(t,n),CS(n,t),Pb(Im),rh=!!Em,Im=Em=null,t.current=n,nD(n),xk(),Te=a,Ce=o,Kn.transition=s}else t.current=n;if(pd&&(pd=!1,Li=t,vh=i),s=t.pendingLanes,s===0&&(qi=null),Vk(n.stateNode),Pn(t,dt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(yh)throw yh=!1,t=zm,zm=null,t;return vh&1&&t.tag!==0&&ma(),s=t.pendingLanes,s&1?t===$m?pu++:(pu=0,$m=t):pu=0,cs(),null}function ma(){if(Li!==null){var t=p0(vh),e=Kn.transition,n=Ce;try{if(Kn.transition=null,Ce=16>t?16:t,Li===null)var r=!1;else{if(t=Li,Li=null,vh=0,Te&6)throw Error(q(331));var i=Te;for(Te|=4,te=t.current;te!==null;){var s=te,o=s.child;if(te.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(te=c;te!==null;){var d=te;switch(d.tag){case 0:case 11:case 15:hu(8,d,s)}var f=d.child;if(f!==null)f.return=d,te=f;else for(;te!==null;){d=te;var p=d.sibling,w=d.return;if(RS(d),d===c){te=null;break}if(p!==null){p.return=w,te=p;break}te=w}}}var S=s.alternate;if(S!==null){var A=S.child;if(A!==null){S.child=null;do{var b=A.sibling;A.sibling=null,A=b}while(A!==null)}}te=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,te=o;else e:for(;te!==null;){if(s=te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:hu(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,te=T;break e}te=s.return}}var v=t.current;for(te=v;te!==null;){o=te;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,te=I;else e:for(o=v;te!==null;){if(a=te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ef(9,a)}}catch(F){rt(a,a.return,F)}if(a===o){te=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,te=x;break e}te=a.return}}if(Te=i,cs(),Ar&&typeof Ar.onPostCommitFiberRoot=="function")try{Ar.onPostCommitFiberRoot(Gh,t)}catch{}r=!0}return r}finally{Ce=n,Kn.transition=e}}return!1}function iE(t,e,n){e=Ca(n,e),e=pS(t,e,1),t=$i(t,e,1),e=dn(),t!==null&&(hc(t,1,e),Pn(t,e))}function rt(t,e,n){if(t.tag===3)iE(t,t,n);else for(;e!==null;){if(e.tag===3){iE(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qi===null||!qi.has(r))){t=Ca(n,t),t=mS(e,t,1),e=$i(e,t,1),t=dn(),e!==null&&(hc(e,1,t),Pn(e,t));break}}e=e.return}}function lD(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=dn(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Wt&n)===n&&(It===4||It===3&&(Wt&130023424)===Wt&&500>dt()-I_?zs(t,0):E_|=n),Pn(t,e)}function VS(t,e){e===0&&(t.mode&1?(e=id,id<<=1,!(id&130023424)&&(id=4194304)):e=1);var n=dn();t=ti(t,e),t!==null&&(hc(t,e,n),Pn(t,n))}function uD(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),VS(t,n)}function cD(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(e),VS(t,n)}var LS;LS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Rn.current)En=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return En=!1,Jb(t,e,n);En=!!(t.flags&131072)}else En=!1,qe&&e.flags&1048576&&B0(e,ch,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Vd(t,e),t=e.pendingProps;var i=Sa(e,nn.current);pa(e,n),i=m_(null,e,r,t,i,n);var s=g_();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,An(r)?(s=!0,lh(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,c_(e),i.updater=Zh,e.stateNode=i,i._reactInternals=e,Dm(e,r,t,n),e=Om(null,e,r,!0,s,n)):(e.tag=0,qe&&s&&r_(e),an(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Vd(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=hD(r),t=rr(r,t),i){case 0:e=Nm(null,e,r,t,n);break e;case 1:e=Kw(null,e,r,t,n);break e;case 11:e=Gw(null,e,r,t,n);break e;case 14:e=Hw(null,e,r,rr(r.type,t),n);break e}throw Error(q(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rr(r,i),Nm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rr(r,i),Kw(t,e,r,i,n);case 3:e:{if(vS(e),t===null)throw Error(q(387));r=e.pendingProps,s=e.memoizedState,i=s.element,G0(t,e),fh(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ca(Error(q(423)),e),e=Qw(t,e,r,n,i);break e}else if(r!==i){i=Ca(Error(q(424)),e),e=Qw(t,e,r,n,i);break e}else for(xn=zi(e.stateNode.containerInfo.firstChild),On=e,qe=!0,or=null,n=q0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ra(),r===i){e=ni(t,e,n);break e}an(t,e,r,n)}e=e.child}return e;case 5:return H0(e),t===null&&Cm(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Tm(r,i)?o=null:s!==null&&Tm(r,s)&&(e.flags|=32),yS(t,e),an(t,e,o,n),e.child;case 6:return t===null&&Cm(e),null;case 13:return wS(t,e,n);case 4:return d_(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Aa(e,null,r,n):an(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rr(r,i),Gw(t,e,r,i,n);case 7:return an(t,e,e.pendingProps,n),e.child;case 8:return an(t,e,e.pendingProps.children,n),e.child;case 12:return an(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Oe(dh,r._currentValue),r._currentValue=o,s!==null)if(cr(s.value,o)){if(s.children===i.children&&!Rn.current){e=ni(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Qr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),km(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(q(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),km(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}an(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,pa(e,n),i=Yn(i),r=r(i),e.flags|=1,an(t,e,r,n),e.child;case 14:return r=e.type,i=rr(r,e.pendingProps),i=rr(r.type,i),Hw(t,e,r,i,n);case 15:return gS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rr(r,i),Vd(t,e),e.tag=1,An(r)?(t=!0,lh(e)):t=!1,pa(e,n),fS(e,r,i),Dm(e,r,i,n),Om(null,e,r,!0,t,n);case 19:return ES(t,e,n);case 22:return _S(t,e,n)}throw Error(q(156,e.tag))};function MS(t,e){return c0(t,e)}function dD(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,e,n,r){return new dD(t,e,n,r)}function A_(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hD(t){if(typeof t=="function")return A_(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wg)return 11;if(t===Gg)return 14}return 2}function Gi(t,e){var n=t.alternate;return n===null?(n=Wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fd(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")A_(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Jo:return $s(n.children,i,s,e);case qg:o=8,i|=8;break;case tm:return t=Wn(12,n,e,i|2),t.elementType=tm,t.lanes=s,t;case nm:return t=Wn(13,n,e,i),t.elementType=nm,t.lanes=s,t;case rm:return t=Wn(19,n,e,i),t.elementType=rm,t.lanes=s,t;case HT:return nf(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case WT:o=10;break e;case GT:o=9;break e;case Wg:o=11;break e;case Gg:o=14;break e;case ki:o=16,r=null;break e}throw Error(q(130,t==null?t:typeof t,""))}return e=Wn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function $s(t,e,n,r){return t=Wn(7,t,r,e),t.lanes=n,t}function nf(t,e,n,r){return t=Wn(22,t,r,e),t.elementType=HT,t.lanes=n,t.stateNode={isHidden:!1},t}function bp(t,e,n){return t=Wn(6,t,null,e),t.lanes=n,t}function Dp(t,e,n){return e=Wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fD(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dp(0),this.expirationTimes=dp(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dp(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function P_(t,e,n,r,i,s,o,a,l){return t=new fD(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},c_(s),t}function pD(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function FS(t){if(!t)return Yi;t=t._reactInternals;e:{if(mo(t)!==t||t.tag!==1)throw Error(q(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(An(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(q(171))}if(t.tag===1){var n=t.type;if(An(n))return F0(t,n,e)}return e}function US(t,e,n,r,i,s,o,a,l){return t=P_(n,r,!0,t,i,s,o,a,l),t.context=FS(null),n=t.current,r=dn(),i=Wi(n),s=Qr(r,i),s.callback=e??null,$i(n,s,i),t.current.lanes=i,hc(t,i,r),Pn(t,r),t}function rf(t,e,n,r){var i=e.current,s=dn(),o=Wi(i);return n=FS(n),e.context===null?e.context=n:e.pendingContext=n,e=Qr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=$i(i,e,o),t!==null&&(ur(t,i,o,s),xd(t,i,o)),o}function Eh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sE(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function C_(t,e){sE(t,e),(t=t.alternate)&&sE(t,e)}function mD(){return null}var BS=typeof reportError=="function"?reportError:function(t){console.error(t)};function k_(t){this._internalRoot=t}sf.prototype.render=k_.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(q(409));rf(t,e,null,null)};sf.prototype.unmount=k_.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xs(function(){rf(null,t,null,null)}),e[ei]=null}};function sf(t){this._internalRoot=t}sf.prototype.unstable_scheduleHydration=function(t){if(t){var e=_0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Di.length&&e!==0&&e<Di[n].priority;n++);Di.splice(n,0,t),n===0&&v0(t)}};function b_(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function of(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function oE(){}function gD(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Eh(o);s.call(c)}}var o=US(e,r,t,0,null,!1,!1,"",oE);return t._reactRootContainer=o,t[ei]=o.current,Ou(t.nodeType===8?t.parentNode:t),Xs(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Eh(l);a.call(c)}}var l=P_(t,0,!1,null,null,!1,!1,"",oE);return t._reactRootContainer=l,t[ei]=l.current,Ou(t.nodeType===8?t.parentNode:t),Xs(function(){rf(e,l,n,r)}),l}function af(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Eh(o);a.call(l)}}rf(e,o,t,i)}else o=gD(n,e,t,i,r);return Eh(o)}m0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Jl(e.pendingLanes);n!==0&&(Qg(e,n|1),Pn(e,dt()),!(Te&6)&&(ka=dt()+500,cs()))}break;case 13:Xs(function(){var r=ti(t,1);if(r!==null){var i=dn();ur(r,t,1,i)}}),C_(t,1)}};Yg=function(t){if(t.tag===13){var e=ti(t,134217728);if(e!==null){var n=dn();ur(e,t,134217728,n)}C_(t,134217728)}};g0=function(t){if(t.tag===13){var e=Wi(t),n=ti(t,e);if(n!==null){var r=dn();ur(n,t,e,r)}C_(t,e)}};_0=function(){return Ce};y0=function(t,e){var n=Ce;try{return Ce=t,e()}finally{Ce=n}};fm=function(t,e,n){switch(e){case"input":if(om(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Yh(r);if(!i)throw Error(q(90));QT(r),om(r,i)}}}break;case"textarea":JT(t,n);break;case"select":e=n.value,e!=null&&ca(t,!!n.multiple,e,!1)}};i0=T_;s0=Xs;var _D={usingClientEntryPoint:!1,Events:[pc,ta,Yh,n0,r0,T_]},Ll={findFiberByHostInstance:Os,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yD={bundleType:Ll.bundleType,version:Ll.version,rendererPackageName:Ll.rendererPackageName,rendererConfig:Ll.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ai.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=l0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ll.findFiberByHostInstance||mD,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var md=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!md.isDisabled&&md.supportsFiber)try{Gh=md.inject(yD),Ar=md}catch{}}Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_D;Fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b_(e))throw Error(q(200));return pD(t,e,null,n)};Fn.createRoot=function(t,e){if(!b_(t))throw Error(q(299));var n=!1,r="",i=BS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=P_(t,1,!1,null,null,n,!1,r,i),t[ei]=e.current,Ou(t.nodeType===8?t.parentNode:t),new k_(e)};Fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(q(188)):(t=Object.keys(t).join(","),Error(q(268,t)));return t=l0(e),t=t===null?null:t.stateNode,t};Fn.flushSync=function(t){return Xs(t)};Fn.hydrate=function(t,e,n){if(!of(e))throw Error(q(200));return af(null,t,e,!0,n)};Fn.hydrateRoot=function(t,e,n){if(!b_(t))throw Error(q(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=BS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=US(e,null,t,1,n??null,i,!1,s,o),t[ei]=e.current,Ou(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new sf(e)};Fn.render=function(t,e,n){if(!of(e))throw Error(q(200));return af(null,t,e,!1,n)};Fn.unmountComponentAtNode=function(t){if(!of(t))throw Error(q(40));return t._reactRootContainer?(Xs(function(){af(null,null,t,!1,function(){t._reactRootContainer=null,t[ei]=null})}),!0):!1};Fn.unstable_batchedUpdates=T_;Fn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!of(n))throw Error(q(200));if(t==null||t._reactInternals===void 0)throw Error(q(38));return af(t,e,n,!1,r)};Fn.version="18.3.1-next-f1338f8080-20240426";function jS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jS)}catch(t){console.error(t)}}jS(),jT.exports=Fn;var zS=jT.exports;const vD=CT(zS),wD=PT({__proto__:null,default:vD},[zS]);/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ye(){return Ye=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ye.apply(this,arguments)}var gt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(gt||(gt={}));const aE="popstate";function ED(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return $u("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Zs(i)}return TD(e,n,null,t)}function _e(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ba(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ID(){return Math.random().toString(36).substr(2,8)}function lE(t,e){return{usr:t.state,key:t.key,idx:e}}function $u(t,e,n,r){return n===void 0&&(n=null),Ye({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ds(e):e,{state:n,key:e&&e.key||r||ID()})}function Zs(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ds(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function TD(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=gt.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(Ye({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=gt.Pop;let b=d(),T=b==null?null:b-c;c=b,l&&l({action:a,location:A.location,delta:T})}function p(b,T){a=gt.Push;let v=$u(A.location,b,T);c=d()+1;let I=lE(v,c),x=A.createHref(v);try{o.pushState(I,"",x)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(x)}s&&l&&l({action:a,location:A.location,delta:1})}function w(b,T){a=gt.Replace;let v=$u(A.location,b,T);c=d();let I=lE(v,c),x=A.createHref(v);o.replaceState(I,"",x),s&&l&&l({action:a,location:A.location,delta:0})}function S(b){let T=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof b=="string"?b:Zs(b);return v=v.replace(/ $/,"%20"),_e(T,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,T)}let A={get action(){return a},get location(){return t(i,o)},listen(b){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(aE,f),l=b,()=>{i.removeEventListener(aE,f),l=null}},createHref(b){return e(i,b)},createURL:S,encodeLocation(b){let T=S(b);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:p,replace:w,go(b){return o.go(b)}};return A}var $e;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})($e||($e={}));const SD=new Set(["lazy","caseSensitive","path","id","index","children"]);function RD(t){return t.index===!0}function Gm(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(_e(i.index!==!0||!i.children,"Cannot specify children on an index route"),_e(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),RD(i)){let l=Ye({},i,e(i),{id:a});return r[a]=l,l}else{let l=Ye({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=Gm(i.children,e,o,r)),l}})}function la(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ds(e):e,i=Za(r.pathname||"/",n);if(i==null)return null;let s=$S(t);PD(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=UD(i);o=LD(s[a],l)}return o}function AD(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function $S(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(_e(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Yr([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(_e(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),$S(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:OD(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of qS(s.path))i(s,o,l)}),e}function qS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=qS(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function PD(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:VD(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const CD=/^:[\w-]+$/,kD=3,bD=2,DD=1,xD=10,ND=-2,uE=t=>t==="*";function OD(t,e){let n=t.split("/"),r=n.length;return n.some(uE)&&(r+=ND),e&&(r+=bD),n.filter(i=>!uE(i)).reduce((i,s)=>i+(CD.test(s)?kD:s===""?DD:xD),r)}function VD(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function LD(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",d=MD({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!d)return null;Object.assign(r,d.params);let f=a.route;s.push({params:r,pathname:Yr([i,d.pathname]),pathnameBase:zD(Yr([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=Yr([i,d.pathnameBase]))}return s}function MD(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=FD(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:p,isOptional:w}=d;if(p==="*"){let A=a[f]||"";o=s.slice(0,s.length-A.length).replace(/(.)\/+$/,"$1")}const S=a[f];return w&&!S?c[p]=void 0:c[p]=(S||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function FD(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ba(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function UD(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ba(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Za(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function BD(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ds(t):t;return{pathname:n?n.startsWith("/")?n:jD(n,e):e,search:$D(r),hash:qD(i)}}function jD(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function xp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function WS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function D_(t,e){let n=WS(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function x_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ds(t):(i=Ye({},t),_e(!i.pathname||!i.pathname.includes("?"),xp("?","pathname","search",i)),_e(!i.pathname||!i.pathname.includes("#"),xp("#","pathname","hash",i)),_e(!i.search||!i.search.includes("#"),xp("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?e[f]:"/"}let l=BD(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Yr=t=>t.join("/").replace(/\/\/+/g,"/"),zD=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),$D=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,qD=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class N_{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function O_(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const GS=["post","put","patch","delete"],WD=new Set(GS),GD=["get",...GS],HD=new Set(GD),KD=new Set([301,302,303,307,308]),QD=new Set([307,308]),Np={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},YD={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Ml={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},V_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,JD=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),HS="remix-router-transitions";function XD(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;_e(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let D=t.detectErrorBoundary;i=V=>({hasErrorBoundary:D(V)})}else i=JD;let s={},o=Gm(t.routes,i,void 0,s),a,l=t.basename||"/",c=t.unstable_dataStrategy||nx,d=Ye({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},t.future),f=null,p=new Set,w=null,S=null,A=null,b=t.hydrationData!=null,T=la(o,t.history.location,l),v=null;if(T==null){let D=jn(404,{pathname:t.history.location.pathname}),{matches:V,route:U}=vE(o);T=V,v={[U.id]:D}}let I,x=T.some(D=>D.route.lazy),F=T.some(D=>D.route.loader);if(x)I=!1;else if(!F)I=!0;else if(d.v7_partialHydration){let D=t.hydrationData?t.hydrationData.loaderData:null,V=t.hydrationData?t.hydrationData.errors:null,U=W=>W.route.loader?typeof W.route.loader=="function"&&W.route.loader.hydrate===!0?!1:D&&D[W.route.id]!==void 0||V&&V[W.route.id]!==void 0:!0;if(V){let W=T.findIndex(Z=>V[Z.route.id]!==void 0);I=T.slice(0,W+1).every(U)}else I=T.every(U)}else I=t.hydrationData!=null;let B,g={historyAction:t.history.action,location:t.history.location,matches:T,initialized:I,navigation:Np,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||v,fetchers:new Map,blockers:new Map},_=gt.Pop,E=!1,R,k=!1,C=new Map,P=null,Ie=!1,Rt=!1,_n=[],Ht=[],H=new Map,ae=0,ue=-1,Ae=new Map,pe=new Set,ke=new Map,rn=new Map,vt=new Set,Vt=new Map,Lt=new Map,pl=!1;function Qf(){if(f=t.history.listen(D=>{let{action:V,location:U,delta:W}=D;if(pl){pl=!1;return}ba(Lt.size===0||W!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let Z=Do({currentLocation:g.location,nextLocation:U,historyAction:V});if(Z&&W!=null){pl=!0,t.history.go(W*-1),bo(Z,{state:"blocked",location:U,proceed(){bo(Z,{state:"proceeding",proceed:void 0,reset:void 0,location:U}),t.history.go(W)},reset(){let ie=new Map(g.blockers);ie.set(Z,Ml),Mt({blockers:ie})}});return}return fr(V,U)}),n){px(e,C);let D=()=>mx(e,C);e.addEventListener("pagehide",D),P=()=>e.removeEventListener("pagehide",D)}return g.initialized||fr(gt.Pop,g.location,{initialHydration:!0}),B}function Ro(){f&&f(),P&&P(),p.clear(),R&&R.abort(),g.fetchers.forEach((D,V)=>ws(V)),g.blockers.forEach((D,V)=>jc(V))}function Ao(D){return p.add(D),()=>p.delete(D)}function Mt(D,V){V===void 0&&(V={}),g=Ye({},g,D);let U=[],W=[];d.v7_fetcherPersist&&g.fetchers.forEach((Z,ie)=>{Z.state==="idle"&&(vt.has(ie)?W.push(ie):U.push(ie))}),[...p].forEach(Z=>Z(g,{deletedFetchers:W,unstable_viewTransitionOpts:V.viewTransitionOpts,unstable_flushSync:V.flushSync===!0})),d.v7_fetcherPersist&&(U.forEach(Z=>g.fetchers.delete(Z)),W.forEach(Z=>ws(Z)))}function Or(D,V,U){var W,Z;let{flushSync:ie}=U===void 0?{}:U,oe=g.actionData!=null&&g.navigation.formMethod!=null&&sr(g.navigation.formMethod)&&g.navigation.state==="loading"&&((W=D.state)==null?void 0:W._isRedirect)!==!0,X;V.actionData?Object.keys(V.actionData).length>0?X=V.actionData:X=null:oe?X=g.actionData:X=null;let ce=V.loaderData?_E(g.loaderData,V.loaderData,V.matches||[],V.errors):g.loaderData,de=g.blockers;de.size>0&&(de=new Map(de),de.forEach((le,Ne)=>de.set(Ne,Ml)));let wt=E===!0||g.navigation.formMethod!=null&&sr(g.navigation.formMethod)&&((Z=D.state)==null?void 0:Z._isRedirect)!==!0;a&&(o=a,a=void 0),Ie||_===gt.Pop||(_===gt.Push?t.history.push(D,D.state):_===gt.Replace&&t.history.replace(D,D.state));let ze;if(_===gt.Pop){let le=C.get(g.location.pathname);le&&le.has(D.pathname)?ze={currentLocation:g.location,nextLocation:D}:C.has(D.pathname)&&(ze={currentLocation:D,nextLocation:g.location})}else if(k){let le=C.get(g.location.pathname);le?le.add(D.pathname):(le=new Set([D.pathname]),C.set(g.location.pathname,le)),ze={currentLocation:g.location,nextLocation:D}}Mt(Ye({},V,{actionData:X,loaderData:ce,historyAction:_,location:D,initialized:!0,navigation:Np,revalidation:"idle",restoreScrollPosition:No(D,V.matches||g.matches),preventScrollReset:wt,blockers:de}),{viewTransitionOpts:ze,flushSync:ie===!0}),_=gt.Pop,E=!1,k=!1,Ie=!1,Rt=!1,_n=[],Ht=[]}async function Po(D,V){if(typeof D=="number"){t.history.go(D);return}let U=Hm(g.location,g.matches,l,d.v7_prependBasename,D,d.v7_relativeSplatPath,V==null?void 0:V.fromRouteId,V==null?void 0:V.relative),{path:W,submission:Z,error:ie}=cE(d.v7_normalizeFormMethod,!1,U,V),oe=g.location,X=$u(g.location,W,V&&V.state);X=Ye({},X,t.history.encodeLocation(X));let ce=V&&V.replace!=null?V.replace:void 0,de=gt.Push;ce===!0?de=gt.Replace:ce===!1||Z!=null&&sr(Z.formMethod)&&Z.formAction===g.location.pathname+g.location.search&&(de=gt.Replace);let wt=V&&"preventScrollReset"in V?V.preventScrollReset===!0:void 0,ze=(V&&V.unstable_flushSync)===!0,le=Do({currentLocation:oe,nextLocation:X,historyAction:de});if(le){bo(le,{state:"blocked",location:X,proceed(){bo(le,{state:"proceeding",proceed:void 0,reset:void 0,location:X}),Po(D,V)},reset(){let Ne=new Map(g.blockers);Ne.set(le,Ml),Mt({blockers:Ne})}});return}return await fr(de,X,{submission:Z,pendingError:ie,preventScrollReset:wt,replace:V&&V.replace,enableViewTransition:V&&V.unstable_viewTransition,flushSync:ze})}function ml(){if(ko(),Mt({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){fr(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}fr(_||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function fr(D,V,U){R&&R.abort(),R=null,_=D,Ie=(U&&U.startUninterruptedRevalidation)===!0,wl(g.location,g.matches),E=(U&&U.preventScrollReset)===!0,k=(U&&U.enableViewTransition)===!0;let W=a||o,Z=U&&U.overrideNavigation,ie=la(W,V,l),oe=(U&&U.flushSync)===!0;if(!ie){let le=jn(404,{pathname:V.pathname}),{matches:Ne,route:Qe}=vE(W);xo(),Or(V,{matches:Ne,loaderData:{},errors:{[Qe.id]:le}},{flushSync:oe});return}if(g.initialized&&!Rt&&lx(g.location,V)&&!(U&&U.submission&&sr(U.submission.formMethod))){Or(V,{matches:ie},{flushSync:oe});return}R=new AbortController;let X=Fo(t.history,V,R.signal,U&&U.submission),ce;if(U&&U.pendingError)ce=[mu(ie).route.id,{type:$e.error,error:U.pendingError}];else if(U&&U.submission&&sr(U.submission.formMethod)){let le=await Yf(X,V,U.submission,ie,{replace:U.replace,flushSync:oe});if(le.shortCircuited)return;ce=le.pendingActionResult,Z=Op(V,U.submission),oe=!1,X=Fo(t.history,X.url,X.signal)}let{shortCircuited:de,loaderData:wt,errors:ze}=await Jf(X,V,ie,Z,U&&U.submission,U&&U.fetcherSubmission,U&&U.replace,U&&U.initialHydration===!0,oe,ce);de||(R=null,Or(V,Ye({matches:ie},yE(ce),{loaderData:wt,errors:ze})))}async function Yf(D,V,U,W,Z){Z===void 0&&(Z={}),ko();let ie=hx(V,U);Mt({navigation:ie},{flushSync:Z.flushSync===!0});let oe,X=Qm(W,V);if(!X.route.action&&!X.route.lazy)oe={type:$e.error,error:jn(405,{method:D.method,pathname:V.pathname,routeId:X.route.id})};else if(oe=(await Vr("action",D,[X],W))[0],D.signal.aborted)return{shortCircuited:!0};if(Fs(oe)){let ce;return Z&&Z.replace!=null?ce=Z.replace:ce=pE(oe.response.headers.get("Location"),new URL(D.url),l)===g.location.pathname+g.location.search,await ys(D,oe,{submission:U,replace:ce}),{shortCircuited:!0}}if(Ms(oe))throw jn(400,{type:"defer-action"});if(qn(oe)){let ce=mu(W,X.route.id);return(Z&&Z.replace)!==!0&&(_=gt.Push),{pendingActionResult:[ce.route.id,oe]}}return{pendingActionResult:[X.route.id,oe]}}async function Jf(D,V,U,W,Z,ie,oe,X,ce,de){let wt=W||Op(V,Z),ze=Z||ie||IE(wt),le=a||o,[Ne,Qe]=dE(t.history,g,U,ze,V,d.v7_partialHydration&&X===!0,d.unstable_skipActionErrorRevalidation,Rt,_n,Ht,vt,ke,pe,le,l,de);if(xo(me=>!(U&&U.some(Ft=>Ft.route.id===me))||Ne&&Ne.some(Ft=>Ft.route.id===me)),ue=++ae,Ne.length===0&&Qe.length===0){let me=_l();return Or(V,Ye({matches:U,loaderData:{},errors:de&&qn(de[1])?{[de[0]]:de[1].error}:null},yE(de),me?{fetchers:new Map(g.fetchers)}:{}),{flushSync:ce}),{shortCircuited:!0}}if(!Ie&&(!d.v7_partialHydration||!X)){Qe.forEach(Ft=>{let Ut=g.fetchers.get(Ft.key),pt=Fl(void 0,Ut?Ut.data:void 0);g.fetchers.set(Ft.key,pt)});let me;de&&!qn(de[1])?me={[de[0]]:de[1].data}:g.actionData&&(Object.keys(g.actionData).length===0?me=null:me=g.actionData),Mt(Ye({navigation:wt},me!==void 0?{actionData:me}:{},Qe.length>0?{fetchers:new Map(g.fetchers)}:{}),{flushSync:ce})}Qe.forEach(me=>{H.has(me.key)&&pr(me.key),me.controller&&H.set(me.key,me.controller)});let _i=()=>Qe.forEach(me=>pr(me.key));R&&R.signal.addEventListener("abort",_i);let{loaderResults:Bn,fetcherResults:er}=await Co(g.matches,U,Ne,Qe,D);if(D.signal.aborted)return{shortCircuited:!0};R&&R.signal.removeEventListener("abort",_i),Qe.forEach(me=>H.delete(me.key));let sn=wE([...Bn,...er]);if(sn){if(sn.idx>=Ne.length){let me=Qe[sn.idx-Ne.length].key;pe.add(me)}return await ys(D,sn.result,{replace:oe}),{shortCircuited:!0}}let{loaderData:Mr,errors:Cn}=gE(g,U,Ne,Bn,de,Qe,er,Vt);Vt.forEach((me,Ft)=>{me.subscribe(Ut=>{(Ut||me.done)&&Vt.delete(Ft)})}),d.v7_partialHydration&&X&&g.errors&&Object.entries(g.errors).filter(me=>{let[Ft]=me;return!Ne.some(Ut=>Ut.route.id===Ft)}).forEach(me=>{let[Ft,Ut]=me;Cn=Object.assign(Cn||{},{[Ft]:Ut})});let yi=_l(),vi=yl(ue),Es=yi||vi||Qe.length>0;return Ye({loaderData:Mr,errors:Cn},Es?{fetchers:new Map(g.fetchers)}:{})}function Fc(D,V,U,W){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");H.has(D)&&pr(D);let Z=(W&&W.unstable_flushSync)===!0,ie=a||o,oe=Hm(g.location,g.matches,l,d.v7_prependBasename,U,d.v7_relativeSplatPath,V,W==null?void 0:W.relative),X=la(ie,oe,l);if(!X){ct(D,V,jn(404,{pathname:oe}),{flushSync:Z});return}let{path:ce,submission:de,error:wt}=cE(d.v7_normalizeFormMethod,!0,oe,W);if(wt){ct(D,V,wt,{flushSync:Z});return}let ze=Qm(X,ce);if(E=(W&&W.preventScrollReset)===!0,de&&sr(de.formMethod)){gl(D,V,ce,ze,X,Z,de);return}ke.set(D,{routeId:V,path:ce}),Uc(D,V,ce,ze,X,Z,de)}async function gl(D,V,U,W,Z,ie,oe){if(ko(),ke.delete(D),!W.route.action&&!W.route.lazy){let pt=jn(405,{method:oe.formMethod,pathname:U,routeId:V});ct(D,V,pt,{flushSync:ie});return}let X=g.fetchers.get(D);Le(D,fx(oe,X),{flushSync:ie});let ce=new AbortController,de=Fo(t.history,U,ce.signal,oe);H.set(D,ce);let wt=ae,le=(await Vr("action",de,[W],Z))[0];if(de.signal.aborted){H.get(D)===ce&&H.delete(D);return}if(d.v7_fetcherPersist&&vt.has(D)){if(Fs(le)||qn(le)){Le(D,Ci(void 0));return}}else{if(Fs(le))if(H.delete(D),ue>wt){Le(D,Ci(void 0));return}else return pe.add(D),Le(D,Fl(oe)),ys(de,le,{fetcherSubmission:oe});if(qn(le)){ct(D,V,le.error);return}}if(Ms(le))throw jn(400,{type:"defer-action"});let Ne=g.navigation.location||g.location,Qe=Fo(t.history,Ne,ce.signal),_i=a||o,Bn=g.navigation.state!=="idle"?la(_i,g.navigation.location,l):g.matches;_e(Bn,"Didn't find any matches after fetcher action");let er=++ae;Ae.set(D,er);let sn=Fl(oe,le.data);g.fetchers.set(D,sn);let[Mr,Cn]=dE(t.history,g,Bn,oe,Ne,!1,d.unstable_skipActionErrorRevalidation,Rt,_n,Ht,vt,ke,pe,_i,l,[W.route.id,le]);Cn.filter(pt=>pt.key!==D).forEach(pt=>{let Fr=pt.key,wi=g.fetchers.get(Fr),Ur=Fl(void 0,wi?wi.data:void 0);g.fetchers.set(Fr,Ur),H.has(Fr)&&pr(Fr),pt.controller&&H.set(Fr,pt.controller)}),Mt({fetchers:new Map(g.fetchers)});let yi=()=>Cn.forEach(pt=>pr(pt.key));ce.signal.addEventListener("abort",yi);let{loaderResults:vi,fetcherResults:Es}=await Co(g.matches,Bn,Mr,Cn,Qe);if(ce.signal.aborted)return;ce.signal.removeEventListener("abort",yi),Ae.delete(D),H.delete(D),Cn.forEach(pt=>H.delete(pt.key));let me=wE([...vi,...Es]);if(me){if(me.idx>=Mr.length){let pt=Cn[me.idx-Mr.length].key;pe.add(pt)}return ys(Qe,me.result)}let{loaderData:Ft,errors:Ut}=gE(g,g.matches,Mr,vi,void 0,Cn,Es,Vt);if(g.fetchers.has(D)){let pt=Ci(le.data);g.fetchers.set(D,pt)}yl(er),g.navigation.state==="loading"&&er>ue?(_e(_,"Expected pending action"),R&&R.abort(),Or(g.navigation.location,{matches:Bn,loaderData:Ft,errors:Ut,fetchers:new Map(g.fetchers)})):(Mt({errors:Ut,loaderData:_E(g.loaderData,Ft,Bn,Ut),fetchers:new Map(g.fetchers)}),Rt=!1)}async function Uc(D,V,U,W,Z,ie,oe){let X=g.fetchers.get(D);Le(D,Fl(oe,X?X.data:void 0),{flushSync:ie});let ce=new AbortController,de=Fo(t.history,U,ce.signal);H.set(D,ce);let wt=ae,le=(await Vr("loader",de,[W],Z))[0];if(Ms(le)&&(le=await JS(le,de.signal,!0)||le),H.get(D)===ce&&H.delete(D),!de.signal.aborted){if(vt.has(D)){Le(D,Ci(void 0));return}if(Fs(le))if(ue>wt){Le(D,Ci(void 0));return}else{pe.add(D),await ys(de,le);return}if(qn(le)){ct(D,V,le.error);return}_e(!Ms(le),"Unhandled fetcher deferred data"),Le(D,Ci(le.data))}}async function ys(D,V,U){let{submission:W,fetcherSubmission:Z,replace:ie}=U===void 0?{}:U;V.response.headers.has("X-Remix-Revalidate")&&(Rt=!0);let oe=V.response.headers.get("Location");_e(oe,"Expected a Location header on the redirect Response"),oe=pE(oe,new URL(D.url),l);let X=$u(g.location,oe,{_isRedirect:!0});if(n){let Ne=!1;if(V.response.headers.has("X-Remix-Reload-Document"))Ne=!0;else if(V_.test(oe)){const Qe=t.history.createURL(oe);Ne=Qe.origin!==e.location.origin||Za(Qe.pathname,l)==null}if(Ne){ie?e.location.replace(oe):e.location.assign(oe);return}}R=null;let ce=ie===!0?gt.Replace:gt.Push,{formMethod:de,formAction:wt,formEncType:ze}=g.navigation;!W&&!Z&&de&&wt&&ze&&(W=IE(g.navigation));let le=W||Z;if(QD.has(V.response.status)&&le&&sr(le.formMethod))await fr(ce,X,{submission:Ye({},le,{formAction:oe}),preventScrollReset:E});else{let Ne=Op(X,W);await fr(ce,X,{overrideNavigation:Ne,fetcherSubmission:Z,preventScrollReset:E})}}async function Vr(D,V,U,W){try{let Z=await rx(c,D,V,U,W,s,i);return await Promise.all(Z.map((ie,oe)=>{if(ux(ie)){let X=ie.result;return{type:$e.redirect,response:ox(X,V,U[oe].route.id,W,l,d.v7_relativeSplatPath)}}return sx(ie)}))}catch(Z){return U.map(()=>({type:$e.error,error:Z}))}}async function Co(D,V,U,W,Z){let[ie,...oe]=await Promise.all([U.length?Vr("loader",Z,U,V):[],...W.map(X=>{if(X.matches&&X.match&&X.controller){let ce=Fo(t.history,X.path,X.controller.signal);return Vr("loader",ce,[X.match],X.matches).then(de=>de[0])}else return Promise.resolve({type:$e.error,error:jn(404,{pathname:X.path})})})]);return await Promise.all([EE(D,U,ie,ie.map(()=>Z.signal),!1,g.loaderData),EE(D,W.map(X=>X.match),oe,W.map(X=>X.controller?X.controller.signal:null),!0)]),{loaderResults:ie,fetcherResults:oe}}function ko(){Rt=!0,_n.push(...xo()),ke.forEach((D,V)=>{H.has(V)&&(Ht.push(V),pr(V))})}function Le(D,V,U){U===void 0&&(U={}),g.fetchers.set(D,V),Mt({fetchers:new Map(g.fetchers)},{flushSync:(U&&U.flushSync)===!0})}function ct(D,V,U,W){W===void 0&&(W={});let Z=mu(g.matches,V);ws(D),Mt({errors:{[Z.route.id]:U},fetchers:new Map(g.fetchers)},{flushSync:(W&&W.flushSync)===!0})}function vs(D){return d.v7_fetcherPersist&&(rn.set(D,(rn.get(D)||0)+1),vt.has(D)&&vt.delete(D)),g.fetchers.get(D)||YD}function ws(D){let V=g.fetchers.get(D);H.has(D)&&!(V&&V.state==="loading"&&Ae.has(D))&&pr(D),ke.delete(D),Ae.delete(D),pe.delete(D),vt.delete(D),g.fetchers.delete(D)}function Bc(D){if(d.v7_fetcherPersist){let V=(rn.get(D)||0)-1;V<=0?(rn.delete(D),vt.add(D)):rn.set(D,V)}else ws(D);Mt({fetchers:new Map(g.fetchers)})}function pr(D){let V=H.get(D);_e(V,"Expected fetch controller: "+D),V.abort(),H.delete(D)}function mi(D){for(let V of D){let U=vs(V),W=Ci(U.data);g.fetchers.set(V,W)}}function _l(){let D=[],V=!1;for(let U of pe){let W=g.fetchers.get(U);_e(W,"Expected fetcher: "+U),W.state==="loading"&&(pe.delete(U),D.push(U),V=!0)}return mi(D),V}function yl(D){let V=[];for(let[U,W]of Ae)if(W<D){let Z=g.fetchers.get(U);_e(Z,"Expected fetcher: "+U),Z.state==="loading"&&(pr(U),Ae.delete(U),V.push(U))}return mi(V),V.length>0}function vl(D,V){let U=g.blockers.get(D)||Ml;return Lt.get(D)!==V&&Lt.set(D,V),U}function jc(D){g.blockers.delete(D),Lt.delete(D)}function bo(D,V){let U=g.blockers.get(D)||Ml;_e(U.state==="unblocked"&&V.state==="blocked"||U.state==="blocked"&&V.state==="blocked"||U.state==="blocked"&&V.state==="proceeding"||U.state==="blocked"&&V.state==="unblocked"||U.state==="proceeding"&&V.state==="unblocked","Invalid blocker state transition: "+U.state+" -> "+V.state);let W=new Map(g.blockers);W.set(D,V),Mt({blockers:W})}function Do(D){let{currentLocation:V,nextLocation:U,historyAction:W}=D;if(Lt.size===0)return;Lt.size>1&&ba(!1,"A router only supports one blocker at a time");let Z=Array.from(Lt.entries()),[ie,oe]=Z[Z.length-1],X=g.blockers.get(ie);if(!(X&&X.state==="proceeding")&&oe({currentLocation:V,nextLocation:U,historyAction:W}))return ie}function xo(D){let V=[];return Vt.forEach((U,W)=>{(!D||D(W))&&(U.cancel(),V.push(W),Vt.delete(W))}),V}function zc(D,V,U){if(w=D,A=V,S=U||null,!b&&g.navigation===Np){b=!0;let W=No(g.location,g.matches);W!=null&&Mt({restoreScrollPosition:W})}return()=>{w=null,A=null,S=null}}function gi(D,V){return S&&S(D,V.map(W=>AD(W,g.loaderData)))||D.key}function wl(D,V){if(w&&A){let U=gi(D,V);w[U]=A()}}function No(D,V){if(w){let U=gi(D,V),W=w[U];if(typeof W=="number")return W}return null}function Lr(D){s={},a=Gm(D,i,void 0,s)}return B={get basename(){return l},get future(){return d},get state(){return g},get routes(){return o},get window(){return e},initialize:Qf,subscribe:Ao,enableScrollRestoration:zc,navigate:Po,fetch:Fc,revalidate:ml,createHref:D=>t.history.createHref(D),encodeLocation:D=>t.history.encodeLocation(D),getFetcher:vs,deleteFetcher:Bc,dispose:Ro,getBlocker:vl,deleteBlocker:jc,_internalFetchControllers:H,_internalActiveDeferreds:Vt,_internalSetRoutes:Lr},B}function ZD(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Hm(t,e,n,r,i,s,o,a){let l,c;if(o){l=[];for(let f of e)if(l.push(f),f.route.id===o){c=f;break}}else l=e,c=e[e.length-1];let d=x_(i||".",D_(l,s),Za(t.pathname,n)||t.pathname,a==="path");return i==null&&(d.search=t.search,d.hash=t.hash),(i==null||i===""||i===".")&&c&&c.route.index&&!L_(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:Yr([n,d.pathname])),Zs(d)}function cE(t,e,n,r){if(!r||!ZD(r))return{path:n};if(r.formMethod&&!dx(r.formMethod))return{path:n,error:jn(405,{method:r.formMethod})};let i=()=>({path:n,error:jn(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=QS(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!sr(o))return i();let p=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((w,S)=>{let[A,b]=S;return""+w+A+"="+b+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:p}}}else if(r.formEncType==="application/json"){if(!sr(o))return i();try{let p=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:p,text:void 0}}}catch{return i()}}}_e(typeof FormData=="function","FormData is not available in this environment");let l,c;if(r.formData)l=Km(r.formData),c=r.formData;else if(r.body instanceof FormData)l=Km(r.body),c=r.body;else if(r.body instanceof URLSearchParams)l=r.body,c=mE(l);else if(r.body==null)l=new URLSearchParams,c=new FormData;else try{l=new URLSearchParams(r.body),c=mE(l)}catch{return i()}let d={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(sr(d.formMethod))return{path:n,submission:d};let f=ds(n);return e&&f.search&&L_(f.search)&&l.append("index",""),f.search="?"+l,{path:Zs(f),submission:d}}function ex(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function dE(t,e,n,r,i,s,o,a,l,c,d,f,p,w,S,A){let b=A?qn(A[1])?A[1].error:A[1].data:void 0,T=t.createURL(e.location),v=t.createURL(i),I=A&&qn(A[1])?A[0]:void 0,x=I?ex(n,I):n,F=A?A[1].statusCode:void 0,B=o&&F&&F>=400,g=x.filter((E,R)=>{let{route:k}=E;if(k.lazy)return!0;if(k.loader==null)return!1;if(s)return typeof k.loader!="function"||k.loader.hydrate?!0:e.loaderData[k.id]===void 0&&(!e.errors||e.errors[k.id]===void 0);if(tx(e.loaderData,e.matches[R],E)||l.some(Ie=>Ie===E.route.id))return!0;let C=e.matches[R],P=E;return hE(E,Ye({currentUrl:T,currentParams:C.params,nextUrl:v,nextParams:P.params},r,{actionResult:b,unstable_actionStatus:F,defaultShouldRevalidate:B?!1:a||T.pathname+T.search===v.pathname+v.search||T.search!==v.search||KS(C,P)}))}),_=[];return f.forEach((E,R)=>{if(s||!n.some(Rt=>Rt.route.id===E.routeId)||d.has(R))return;let k=la(w,E.path,S);if(!k){_.push({key:R,routeId:E.routeId,path:E.path,matches:null,match:null,controller:null});return}let C=e.fetchers.get(R),P=Qm(k,E.path),Ie=!1;p.has(R)?Ie=!1:c.includes(R)?Ie=!0:C&&C.state!=="idle"&&C.data===void 0?Ie=a:Ie=hE(P,Ye({currentUrl:T,currentParams:e.matches[e.matches.length-1].params,nextUrl:v,nextParams:n[n.length-1].params},r,{actionResult:b,unstable_actionStatus:F,defaultShouldRevalidate:B?!1:a})),Ie&&_.push({key:R,routeId:E.routeId,path:E.path,matches:k,match:P,controller:new AbortController})}),[g,_]}function tx(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function KS(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function hE(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function fE(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];_e(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";ba(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!SD.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Ye({},e(i),{lazy:void 0}))}function nx(t){return Promise.all(t.matches.map(e=>e.resolve()))}async function rx(t,e,n,r,i,s,o,a){let l=r.reduce((f,p)=>f.add(p.route.id),new Set),c=new Set,d=await t({matches:i.map(f=>{let p=l.has(f.route.id);return Ye({},f,{shouldLoad:p,resolve:S=>(c.add(f.route.id),p?ix(e,n,f,s,o,S,a):Promise.resolve({type:$e.data,result:void 0}))})}),request:n,params:i[0].params,context:a});return i.forEach(f=>_e(c.has(f.route.id),'`match.resolve()` was not called for route id "'+f.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),d.filter((f,p)=>l.has(i[p].route.id))}async function ix(t,e,n,r,i,s,o){let a,l,c=d=>{let f,p=new Promise((A,b)=>f=b);l=()=>f(),e.signal.addEventListener("abort",l);let w=A=>typeof d!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):d({request:e,params:n.params,context:o},...A!==void 0?[A]:[]),S;return s?S=s(A=>w(A)):S=(async()=>{try{return{type:"data",result:await w()}}catch(A){return{type:"error",result:A}}})(),Promise.race([S,p])};try{let d=n.route[t];if(n.route.lazy)if(d){let f,[p]=await Promise.all([c(d).catch(w=>{f=w}),fE(n.route,i,r)]);if(f!==void 0)throw f;a=p}else if(await fE(n.route,i,r),d=n.route[t],d)a=await c(d);else if(t==="action"){let f=new URL(e.url),p=f.pathname+f.search;throw jn(405,{method:e.method,pathname:p,routeId:n.route.id})}else return{type:$e.data,result:void 0};else if(d)a=await c(d);else{let f=new URL(e.url),p=f.pathname+f.search;throw jn(404,{pathname:p})}_e(a.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(d){return{type:$e.error,result:d}}finally{l&&e.signal.removeEventListener("abort",l)}return a}async function sx(t){let{result:e,type:n,status:r}=t;if(YS(e)){let o;try{let a=e.headers.get("Content-Type");a&&/\bapplication\/json\b/.test(a)?e.body==null?o=null:o=await e.json():o=await e.text()}catch(a){return{type:$e.error,error:a}}return n===$e.error?{type:$e.error,error:new N_(e.status,e.statusText,o),statusCode:e.status,headers:e.headers}:{type:$e.data,data:o,statusCode:e.status,headers:e.headers}}if(n===$e.error)return{type:$e.error,error:e,statusCode:O_(e)?e.status:r};if(cx(e)){var i,s;return{type:$e.deferred,deferredData:e,statusCode:(i=e.init)==null?void 0:i.status,headers:((s=e.init)==null?void 0:s.headers)&&new Headers(e.init.headers)}}return{type:$e.data,data:e,statusCode:r}}function ox(t,e,n,r,i,s){let o=t.headers.get("Location");if(_e(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!V_.test(o)){let a=r.slice(0,r.findIndex(l=>l.route.id===n)+1);o=Hm(new URL(e.url),a,i,!0,o,s),t.headers.set("Location",o)}return t}function pE(t,e,n){if(V_.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=Za(i.pathname,n)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return t}function Fo(t,e,n,r){let i=t.createURL(QS(e)).toString(),s={signal:n};if(r&&sr(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=Km(r.formData):s.body=r.formData}return new Request(i,s)}function Km(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function mE(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function ax(t,e,n,r,i,s){let o={},a=null,l,c=!1,d={},f=r&&qn(r[1])?r[1].error:void 0;return n.forEach((p,w)=>{let S=e[w].route.id;if(_e(!Fs(p),"Cannot handle redirect results in processLoaderData"),qn(p)){let A=p.error;f!==void 0&&(A=f,f=void 0),a=a||{};{let b=mu(t,S);a[b.route.id]==null&&(a[b.route.id]=A)}o[S]=void 0,c||(c=!0,l=O_(p.error)?p.error.status:500),p.headers&&(d[S]=p.headers)}else Ms(p)?(i.set(S,p.deferredData),o[S]=p.deferredData.data,p.statusCode!=null&&p.statusCode!==200&&!c&&(l=p.statusCode),p.headers&&(d[S]=p.headers)):(o[S]=p.data,p.statusCode&&p.statusCode!==200&&!c&&(l=p.statusCode),p.headers&&(d[S]=p.headers))}),f!==void 0&&r&&(a={[r[0]]:f},o[r[0]]=void 0),{loaderData:o,errors:a,statusCode:l||200,loaderHeaders:d}}function gE(t,e,n,r,i,s,o,a){let{loaderData:l,errors:c}=ax(e,n,r,i,a);for(let d=0;d<s.length;d++){let{key:f,match:p,controller:w}=s[d];_e(o!==void 0&&o[d]!==void 0,"Did not find corresponding fetcher result");let S=o[d];if(!(w&&w.signal.aborted))if(qn(S)){let A=mu(t.matches,p==null?void 0:p.route.id);c&&c[A.route.id]||(c=Ye({},c,{[A.route.id]:S.error})),t.fetchers.delete(f)}else if(Fs(S))_e(!1,"Unhandled fetcher revalidation redirect");else if(Ms(S))_e(!1,"Unhandled fetcher deferred data");else{let A=Ci(S.data);t.fetchers.set(f,A)}}return{loaderData:l,errors:c}}function _E(t,e,n,r){let i=Ye({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function yE(t){return t?qn(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function mu(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function vE(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function jn(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new N_(t||500,o,new Error(a),!0)}function wE(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Fs(n))return{result:n,idx:e}}}function QS(t){let e=typeof t=="string"?ds(t):t;return Zs(Ye({},e,{hash:""}))}function lx(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function ux(t){return YS(t.result)&&KD.has(t.result.status)}function Ms(t){return t.type===$e.deferred}function qn(t){return t.type===$e.error}function Fs(t){return(t&&t.type)===$e.redirect}function cx(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function YS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function dx(t){return HD.has(t.toLowerCase())}function sr(t){return WD.has(t.toLowerCase())}async function EE(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let c=t.find(f=>f.route.id===l.route.id),d=c!=null&&!KS(c,l)&&(s&&s[l.route.id])!==void 0;if(Ms(a)&&(i||d)){let f=r[o];_e(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await JS(a,f,i).then(p=>{p&&(n[o]=p||n[o])})}}}async function JS(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:$e.data,data:t.deferredData.unwrappedData}}catch(i){return{type:$e.error,error:i}}return{type:$e.data,data:t.deferredData.data}}}function L_(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Qm(t,e){let n=typeof e=="string"?ds(e).search:e.search;if(t[t.length-1].route.index&&L_(n||""))return t[t.length-1];let r=WS(t);return r[r.length-1]}function IE(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Op(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function hx(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Fl(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function fx(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Ci(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function px(t,e){try{let n=t.sessionStorage.getItem(HS);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function mx(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(HS,JSON.stringify(n))}catch(r){ba(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ih(){return Ih=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ih.apply(this,arguments)}const lf=j.createContext(null),XS=j.createContext(null),go=j.createContext(null),M_=j.createContext(null),_o=j.createContext({outlet:null,matches:[],isDataRoute:!1}),ZS=j.createContext(null);function gx(t,e){let{relative:n}=e===void 0?{}:e;gc()||_e(!1);let{basename:r,navigator:i}=j.useContext(go),{hash:s,pathname:o,search:a}=nR(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Yr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function gc(){return j.useContext(M_)!=null}function uf(){return gc()||_e(!1),j.useContext(M_).location}function eR(t){j.useContext(go).static||j.useLayoutEffect(t)}function tR(){let{isDataRoute:t}=j.useContext(_o);return t?Cx():_x()}function _x(){gc()||_e(!1);let t=j.useContext(lf),{basename:e,future:n,navigator:r}=j.useContext(go),{matches:i}=j.useContext(_o),{pathname:s}=uf(),o=JSON.stringify(D_(i,n.v7_relativeSplatPath)),a=j.useRef(!1);return eR(()=>{a.current=!0}),j.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=x_(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Yr([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}function nR(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=j.useContext(go),{matches:i}=j.useContext(_o),{pathname:s}=uf(),o=JSON.stringify(D_(i,r.v7_relativeSplatPath));return j.useMemo(()=>x_(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function yx(t,e,n,r){gc()||_e(!1);let{navigator:i}=j.useContext(go),{matches:s}=j.useContext(_o),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=uf(),d;d=c;let f=d.pathname||"/",p=f;if(l!=="/"){let A=l.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(A.length).join("/")}let w=la(t,{pathname:p});return Tx(w&&w.map(A=>Object.assign({},A,{params:Object.assign({},a,A.params),pathname:Yr([l,i.encodeLocation?i.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?l:Yr([l,i.encodeLocation?i.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),s,n,r)}function vx(){let t=Px(),e=O_(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:i},n):null,null)}const wx=j.createElement(vx,null);class Ex extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement(_o.Provider,{value:this.props.routeContext},j.createElement(ZS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ix(t){let{routeContext:e,match:n,children:r}=t,i=j.useContext(lf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(_o.Provider,{value:e},r)}function Tx(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||_e(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:p,errors:w}=n,S=f.route.loader&&p[f.route.id]===void 0&&(!w||w[f.route.id]===void 0);if(f.route.lazy||S){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,p)=>{let w,S=!1,A=null,b=null;n&&(w=a&&f.route.id?a[f.route.id]:void 0,A=f.route.errorElement||wx,l&&(c<0&&p===0?(kx("route-fallback"),S=!0,b=null):c===p&&(S=!0,b=f.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,p+1)),v=()=>{let I;return w?I=A:S?I=b:f.route.Component?I=j.createElement(f.route.Component,null):f.route.element?I=f.route.element:I=d,j.createElement(Ix,{match:f,routeContext:{outlet:d,matches:T,isDataRoute:n!=null},children:I})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?j.createElement(Ex,{location:n.location,revalidation:n.revalidation,component:A,error:w,children:v(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):v()},null)}var rR=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(rR||{}),Th=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Th||{});function Sx(t){let e=j.useContext(lf);return e||_e(!1),e}function Rx(t){let e=j.useContext(XS);return e||_e(!1),e}function Ax(t){let e=j.useContext(_o);return e||_e(!1),e}function iR(t){let e=Ax(),n=e.matches[e.matches.length-1];return n.route.id||_e(!1),n.route.id}function Px(){var t;let e=j.useContext(ZS),n=Rx(Th.UseRouteError),r=iR(Th.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Cx(){let{router:t}=Sx(rR.UseNavigateStable),e=iR(Th.UseNavigateStable),n=j.useRef(!1);return eR(()=>{n.current=!0}),j.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ih({fromRouteId:e},s)))},[t,e])}const TE={};function kx(t,e,n){TE[t]||(TE[t]=!0)}function bx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=gt.Pop,navigator:s,static:o=!1,future:a}=t;gc()&&_e(!1);let l=e.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:l,navigator:s,static:o,future:Ih({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=ds(r));let{pathname:d="/",search:f="",hash:p="",state:w=null,key:S="default"}=r,A=j.useMemo(()=>{let b=Za(d,l);return b==null?null:{location:{pathname:b,search:f,hash:p,state:w,key:S},navigationType:i}},[l,d,f,p,w,S,i]);return A==null?null:j.createElement(go.Provider,{value:c},j.createElement(M_.Provider,{children:n,value:A}))}new Promise(()=>{});function Dx(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:j.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:j.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:j.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qu(){return qu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qu.apply(this,arguments)}function xx(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Nx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Ox(t,e){return t.button===0&&(!e||e==="_self")&&!Nx(t)}const Vx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Lx="6";try{window.__reactRouterVersion=Lx}catch{}function Mx(t,e){return XD({basename:void 0,future:qu({},void 0,{v7_prependBasename:!0}),history:ED({window:void 0}),hydrationData:Fx(),routes:t,mapRouteProperties:Dx,unstable_dataStrategy:void 0,window:void 0}).initialize()}function Fx(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=qu({},e,{errors:Ux(e.errors)})),e}function Ux(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new N_(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const Bx=j.createContext({isTransitioning:!1}),jx=j.createContext(new Map),zx="startTransition",SE=lk[zx],$x="flushSync",RE=wD[$x];function qx(t){SE?SE(t):t()}function Ul(t){RE?RE(t):t()}let Wx=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function Gx(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=j.useState(n.state),[o,a]=j.useState(),[l,c]=j.useState({isTransitioning:!1}),[d,f]=j.useState(),[p,w]=j.useState(),[S,A]=j.useState(),b=j.useRef(new Map),{v7_startTransition:T}=r||{},v=j.useCallback(g=>{T?qx(g):g()},[T]),I=j.useCallback((g,_)=>{let{deletedFetchers:E,unstable_flushSync:R,unstable_viewTransitionOpts:k}=_;E.forEach(P=>b.current.delete(P)),g.fetchers.forEach((P,Ie)=>{P.data!==void 0&&b.current.set(Ie,P.data)});let C=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!k||C){R?Ul(()=>s(g)):v(()=>s(g));return}if(R){Ul(()=>{p&&(d&&d.resolve(),p.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:k.currentLocation,nextLocation:k.nextLocation})});let P=n.window.document.startViewTransition(()=>{Ul(()=>s(g))});P.finished.finally(()=>{Ul(()=>{f(void 0),w(void 0),a(void 0),c({isTransitioning:!1})})}),Ul(()=>w(P));return}p?(d&&d.resolve(),p.skipTransition(),A({state:g,currentLocation:k.currentLocation,nextLocation:k.nextLocation})):(a(g),c({isTransitioning:!0,flushSync:!1,currentLocation:k.currentLocation,nextLocation:k.nextLocation}))},[n.window,p,d,b,v]);j.useLayoutEffect(()=>n.subscribe(I),[n,I]),j.useEffect(()=>{l.isTransitioning&&!l.flushSync&&f(new Wx)},[l]),j.useEffect(()=>{if(d&&o&&n.window){let g=o,_=d.promise,E=n.window.document.startViewTransition(async()=>{v(()=>s(g)),await _});E.finished.finally(()=>{f(void 0),w(void 0),a(void 0),c({isTransitioning:!1})}),w(E)}},[v,o,d,n.window]),j.useEffect(()=>{d&&o&&i.location.key===o.location.key&&d.resolve()},[d,p,i.location,o]),j.useEffect(()=>{!l.isTransitioning&&S&&(a(S.state),c({isTransitioning:!0,flushSync:!1,currentLocation:S.currentLocation,nextLocation:S.nextLocation}),A(void 0))},[l.isTransitioning,S]),j.useEffect(()=>{},[]);let x=j.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:g=>n.navigate(g),push:(g,_,E)=>n.navigate(g,{state:_,preventScrollReset:E==null?void 0:E.preventScrollReset}),replace:(g,_,E)=>n.navigate(g,{replace:!0,state:_,preventScrollReset:E==null?void 0:E.preventScrollReset})}),[n]),F=n.basename||"/",B=j.useMemo(()=>({router:n,navigator:x,static:!1,basename:F}),[n,x,F]);return j.createElement(j.Fragment,null,j.createElement(lf.Provider,{value:B},j.createElement(XS.Provider,{value:i},j.createElement(jx.Provider,{value:b.current},j.createElement(Bx.Provider,{value:l},j.createElement(bx,{basename:F,location:i.location,navigationType:i.historyAction,navigator:x,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?j.createElement(Hx,{routes:n.routes,future:n.future,state:i}):e))))),null)}function Hx(t){let{routes:e,future:n,state:r}=t;return yx(e,void 0,r,n)}const Kx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Qx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vp=j.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:d,unstable_viewTransition:f}=e,p=xx(e,Vx),{basename:w}=j.useContext(go),S,A=!1;if(typeof c=="string"&&Qx.test(c)&&(S=c,Kx))try{let I=new URL(window.location.href),x=c.startsWith("//")?new URL(I.protocol+c):new URL(c),F=Za(x.pathname,w);x.origin===I.origin&&F!=null?c=F+x.search+x.hash:A=!0}catch{}let b=gx(c,{relative:i}),T=Yx(c,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:f});function v(I){r&&r(I),I.defaultPrevented||T(I)}return j.createElement("a",qu({},p,{href:S||b,onClick:A||s?r:v,ref:n,target:l}))});var AE;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(AE||(AE={}));var PE;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(PE||(PE={}));function Yx(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=tR(),c=uf(),d=nR(t,{relative:o});return j.useCallback(f=>{if(Ox(f,n)){f.preventDefault();let p=r!==void 0?r:Zs(c)===Zs(d);l(t,{replace:p,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,l,d,r,i,n,t,s,o,a])}var CE={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Jx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},oR={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,w=c&63;l||(w=64,o||(p=64)),r.push(n[d],n[f],n[p],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sR(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Jx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new Xx;const p=s<<2|a>>4;if(r.push(p),c!==64){const w=a<<4&240|c>>2;if(r.push(w),f!==64){const S=c<<6&192|f;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Xx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zx=function(t){const e=sR(t);return oR.encodeByteArray(e,!0)},Sh=function(t){return Zx(t).replace(/\./g,"")},aR=function(t){try{return oR.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Rh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!eN(n)||(t[n]=Rh(t[n],e[n]));return t}function eN(t){return t!=="__proto__"}/**
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
 */const nN=()=>tN().__FIREBASE_DEFAULTS__,rN=()=>{if(typeof process>"u"||typeof CE>"u")return;const t=CE.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&aR(t[1]);return e&&JSON.parse(e)},cf=()=>{try{return nN()||rN()||iN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},lR=t=>{var e,n;return(n=(e=cf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},sN=t=>{const e=lR(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},uR=()=>{var t;return(t=cf())===null||t===void 0?void 0:t.config},cR=t=>{var e;return(e=cf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function dR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Sh(JSON.stringify(n)),Sh(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function aN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function F_(){var t;const e=(t=cf())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hR(){return typeof self=="object"&&self.self===self}function fR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function U_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pR(){const t=Ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mR(){return!F_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Wu(){try{return typeof indexedDB=="object"}catch{return!1}}function lN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN="FirebaseError";class tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=uN,Object.setPrototypeOf(this,tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yo.prototype.create)}}class yo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?cN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new tn(i,a,r)}}function cN(t,e){return t.replace(dN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const dN=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function hN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Da(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(bE(s)&&bE(o)){if(!Da(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function bE(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ua(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Zl(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function gR(t,e){const n=new fN(t,e);return n.subscribe.bind(n)}class fN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");pN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Lp),i.error===void 0&&(i.error=Lp),i.complete===void 0&&(i.complete=Lp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Lp(){}/**
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
 */function ne(t){return t&&t._delegate?t._delegate:t}class Xn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ps="[DEFAULT]";/**
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
 */class mN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new oN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_N(e))try{this.getOrInitializeService({instanceIdentifier:Ps})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ps){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ps){return this.instances.has(e)}getOptions(e=Ps){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ps){return this.component?this.component.multipleInstances?e:Ps:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gN(t){return t===Ps?void 0:t}function _N(t){return t.instantiationMode==="EAGER"}/**
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
 */class _R{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=[];var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const yR={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},yN=ge.INFO,vN={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},wN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=vN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class df{constructor(e){this.name=e,this._logLevel=yN,this._logHandler=wN,this._userLogHandler=null,B_.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}function EN(t){B_.forEach(e=>{e.setLogLevel(t)})}function IN(t,e){for(const n of B_){let r=null;e&&e.level&&(r=yR[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:ge[s].toLowerCase(),message:a,args:o,type:i.name})}}}const TN=(t,e)=>e.some(n=>t instanceof n);let DE,xE;function SN(){return DE||(DE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function RN(){return xE||(xE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vR=new WeakMap,Ym=new WeakMap,wR=new WeakMap,Mp=new WeakMap,j_=new WeakMap;function AN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Hi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&vR.set(n,t)}).catch(()=>{}),j_.set(e,t),e}function PN(t){if(Ym.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ym.set(t,e)}let Jm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ym.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wR.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function CN(t){Jm=t(Jm)}function kN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fp(this),e,...n);return wR.set(r,e.sort?e.sort():[e]),Hi(r)}:RN().includes(t)?function(...e){return t.apply(Fp(this),e),Hi(vR.get(this))}:function(...e){return Hi(t.apply(Fp(this),e))}}function bN(t){return typeof t=="function"?kN(t):(t instanceof IDBTransaction&&PN(t),TN(t,SN())?new Proxy(t,Jm):t)}function Hi(t){if(t instanceof IDBRequest)return AN(t);if(Mp.has(t))return Mp.get(t);const e=bN(t);return e!==t&&(Mp.set(t,e),j_.set(e,t)),e}const Fp=t=>j_.get(t);function DN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Hi(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Hi(o.result),l.oldVersion,l.newVersion,Hi(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const xN=["get","getKey","getAll","getAllKeys","count"],NN=["put","add","delete","clear"],Up=new Map;function NE(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Up.get(e))return Up.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=NN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||xN.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Up.set(e,s),s}CN(t=>({...t,get:(e,n,r)=>NE(e,n)||t.get(e,n,r),has:(e,n)=>!!NE(e,n)||t.has(e,n)}));/**
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
 */class ON{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(VN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function VN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ah="@firebase/app",Xm="0.10.5";/**
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
 */const eo=new df("@firebase/app"),LN="@firebase/app-compat",MN="@firebase/analytics-compat",FN="@firebase/analytics",UN="@firebase/app-check-compat",BN="@firebase/app-check",jN="@firebase/auth",zN="@firebase/auth-compat",$N="@firebase/database",qN="@firebase/database-compat",WN="@firebase/functions",GN="@firebase/functions-compat",HN="@firebase/installations",KN="@firebase/installations-compat",QN="@firebase/messaging",YN="@firebase/messaging-compat",JN="@firebase/performance",XN="@firebase/performance-compat",ZN="@firebase/remote-config",eO="@firebase/remote-config-compat",tO="@firebase/storage",nO="@firebase/storage-compat",rO="@firebase/firestore",iO="@firebase/vertexai-preview",sO="@firebase/firestore-compat",oO="firebase",aO="10.12.2";/**
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
 */const Ji="[DEFAULT]",lO={[Ah]:"fire-core",[LN]:"fire-core-compat",[FN]:"fire-analytics",[MN]:"fire-analytics-compat",[BN]:"fire-app-check",[UN]:"fire-app-check-compat",[jN]:"fire-auth",[zN]:"fire-auth-compat",[$N]:"fire-rtdb",[qN]:"fire-rtdb-compat",[WN]:"fire-fn",[GN]:"fire-fn-compat",[HN]:"fire-iid",[KN]:"fire-iid-compat",[QN]:"fire-fcm",[YN]:"fire-fcm-compat",[JN]:"fire-perf",[XN]:"fire-perf-compat",[ZN]:"fire-rc",[eO]:"fire-rc-compat",[tO]:"fire-gcs",[nO]:"fire-gcs-compat",[rO]:"fire-fst",[sO]:"fire-fst-compat",[iO]:"fire-vertex","fire-js":"fire-js",[oO]:"fire-js-all"};/**
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
 */const Xi=new Map,xa=new Map,Na=new Map;function Gu(t,e){try{t.container.addComponent(e)}catch(n){eo.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ER(t,e){t.container.addOrOverwriteComponent(e)}function ri(t){const e=t.name;if(Na.has(e))return eo.debug(`There were multiple attempts to register component ${e}.`),!1;Na.set(e,t);for(const n of Xi.values())Gu(n,t);for(const n of xa.values())Gu(n,t);return!0}function _c(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function uO(t,e,n=Ji){_c(t,e).clearInstance(n)}function IR(t){return t.options!==void 0}function st(t){return t.settings!==void 0}function cO(){Na.clear()}/**
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
 */const dO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qn=new yo("app","Firebase",dO);/**
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
 */let TR=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}};/**
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
 */class hO extends TR{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()}),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,Vn(Ah,Xm,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){q_(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Qn.create("server-app-deleted")}}/**
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
 */const li=aO;function z_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ji,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Qn.create("bad-app-name",{appName:String(i)});if(n||(n=uR()),!n)throw Qn.create("no-options");const s=Xi.get(i);if(s){if(Da(n,s.options)&&Da(r,s.config))return s;throw Qn.create("duplicate-app",{appName:i})}const o=new _R(i);for(const l of Na.values())o.addComponent(l);const a=new TR(n,r,o);return Xi.set(i,a),a}function fO(t,e){if(hR())throw Qn.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;IR(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((d,f)=>Math.imul(31,d)+f.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Qn.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=xa.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new _R(s);for(const c of Na.values())a.addComponent(c);const l=new hO(n,e,s,a);return xa.set(s,l),l}function $_(t=Ji){const e=Xi.get(t);if(!e&&t===Ji&&uR())return z_();if(!e)throw Qn.create("no-app",{appName:t});return e}function pO(){return Array.from(Xi.values())}async function q_(t){let e=!1;const n=t.name;Xi.has(n)?(e=!0,Xi.delete(n)):xa.has(n)&&t.decRefCount()<=0&&(xa.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function Vn(t,e,n){var r;let i=(r=lO[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),eo.warn(a.join(" "));return}ri(new Xn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function SR(t,e){if(t!==null&&typeof t!="function")throw Qn.create("invalid-log-argument");IN(t,e)}function RR(t){EN(t)}/**
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
 */const mO="firebase-heartbeat-database",gO=1,Hu="firebase-heartbeat-store";let Bp=null;function AR(){return Bp||(Bp=DN(mO,gO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Hu)}catch(n){console.warn(n)}}}}).catch(t=>{throw Qn.create("idb-open",{originalErrorMessage:t.message})})),Bp}async function _O(t){try{const n=(await AR()).transaction(Hu),r=await n.objectStore(Hu).get(PR(t));return await n.done,r}catch(e){if(e instanceof tn)eo.warn(e.message);else{const n=Qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});eo.warn(n.message)}}}async function OE(t,e){try{const r=(await AR()).transaction(Hu,"readwrite");await r.objectStore(Hu).put(e,PR(t)),await r.done}catch(n){if(n instanceof tn)eo.warn(n.message);else{const r=Qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});eo.warn(r.message)}}}function PR(t){return`${t.name}!${t.options.appId}`}/**
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
 */const yO=1024,vO=30*24*60*60*1e3;class wO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new IO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=VE();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=vO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=VE(),{heartbeatsToSend:r,unsentEntries:i}=EO(this._heartbeatsCache.heartbeats),s=Sh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function VE(){return new Date().toISOString().substring(0,10)}function EO(t,e=yO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),LE(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),LE(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class IO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wu()?lN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _O(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return OE(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return OE(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function LE(t){return Sh(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function TO(t){ri(new Xn("platform-logger",e=>new ON(e),"PRIVATE")),ri(new Xn("heartbeat",e=>new wO(e),"PRIVATE")),Vn(Ah,Xm,t),Vn(Ah,Xm,"esm2017"),Vn("fire-js","")}TO("");const SO=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:tn,SDK_VERSION:li,_DEFAULT_ENTRY_NAME:Ji,_addComponent:Gu,_addOrOverwriteComponent:ER,_apps:Xi,_clearComponents:cO,_components:Na,_getProvider:_c,_isFirebaseApp:IR,_isFirebaseServerApp:st,_registerComponent:ri,_removeServiceInstance:uO,_serverApps:xa,deleteApp:q_,getApp:$_,getApps:pO,initializeApp:z_,initializeServerApp:fO,onLog:SR,registerVersion:Vn,setLogLevel:RR},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(e,n){this._delegate=e,this.firebase=n,Gu(e,new Xn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),q_(this._delegate)))}_getService(e,n=Ji){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Ji){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Gu(this._delegate,e)}_addOrOverwriteComponent(e){ER(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const AO={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},ME=new yo("app-compat","Firebase",AO);/**
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
 */function PO(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Vn,setLogLevel:RR,onLog:SR,apps:null,SDK_VERSION:li,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:SO}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||Ji,!kE(e,c))throw ME.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,d={}){const f=z_(c,d);if(kE(e,f.name))return e[f.name];const p=new t(f,n);return e[f.name]=p,p}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const d=c.name,f=d.replace("-compat","");if(ri(c)&&c.type==="PUBLIC"){const p=(w=i())=>{if(typeof w[f]!="function")throw ME.create("invalid-app-argument",{appName:d});return w[f]()};c.serviceProps!==void 0&&Rh(p,c.serviceProps),n[f]=p,t.prototype[f]=function(...w){return this._getService.bind(this,d).apply(this,c.multipleInstances?w:[])}}return c.type==="PUBLIC"?n[f]:null}function l(c,d){return d==="serverAuth"?null:d}return n}/**
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
 */function CR(){const t=PO(RO);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:CR,extendNamespace:e,createSubscribe:gR,ErrorFactory:yo,deepExtend:Rh});function e(n){Rh(t,n)}return t}const CO=CR();/**
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
 */const FE=new df("@firebase/app-compat"),kO="@firebase/app-compat",bO="0.2.35";/**
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
 */function DO(t){Vn(kO,bO,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(hR()&&self.firebase!==void 0){FE.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&FE.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const be=CO;DO();var xO="firebase",NO="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */be.registerVersion(xO,NO,"app-compat");function W_(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Bl={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Uo={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OO(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function kR(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VO=OO,LO=kR,bR=new yo("auth","Firebase",kR());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph=new df("@firebase/auth");function MO(t,...e){Ph.logLevel<=ge.WARN&&Ph.warn(`Auth (${li}): ${t}`,...e)}function Ud(t,...e){Ph.logLevel<=ge.ERROR&&Ph.error(`Auth (${li}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t,...e){throw H_(t,...e)}function Tt(t,...e){return H_(t,...e)}function G_(t,e,n){const r=Object.assign(Object.assign({},LO()),{[e]:n});return new yo("auth","Firebase",r).create(e,{appName:t.name})}function bt(t){return G_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tl(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&xt(t,"argument-error"),G_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function H_(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return bR.create(t,...e)}function G(t,e,...n){if(!t)throw H_(e,...n)}function Tr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ud(e),new Error(e)}function dr(t,e){t||Tr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function K_(){return UE()==="http:"||UE()==="https:"}function UE(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(K_()||fR()||"connection"in navigator)?navigator.onLine:!0}function UO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,n){this.shortDelay=e,this.longDelay=n,dr(n>e,"Short delay should be less than long delay!"),this.isMobile=aN()||U_()}get(){return FO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(t,e){dr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jO=new yc(3e4,6e4);function lt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ut(t,e,n,r,i={}){return xR(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=el(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),DR.fetch()(NR(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function xR(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},BO),e);try{const i=new $O(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw eu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw eu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw eu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw eu(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw G_(t,d,c);xt(t,d)}}catch(i){if(i instanceof tn)throw i;xt(t,"network-request-failed",{message:String(i)})}}async function ui(t,e,n,r,i={}){const s=await ut(t,e,n,r,i);return"mfaPendingCredential"in s&&xt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function NR(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Q_(t.config,i):`${t.config.apiScheme}://${i}`}function zO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $O{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tt(this.auth,"network-request-failed")),jO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function eu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Tt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(t){return t!==void 0&&t.getResponse!==void 0}function jE(t){return t!==void 0&&t.enterprise!==void 0}class qO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return zO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WO(t){return(await ut(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function GO(t,e){return ut(t,"GET","/v2/recaptchaConfig",lt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HO(t,e){return ut(t,"POST","/v1/accounts:delete",e)}async function KO(t,e){return ut(t,"POST","/v1/accounts:update",e)}async function OR(t,e){return ut(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function QO(t,e=!1){const n=ne(t),r=await n.getIdToken(e),i=hf(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:gu(jp(i.auth_time)),issuedAtTime:gu(jp(i.iat)),expirationTime:gu(jp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function jp(t){return Number(t)*1e3}function hf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ud("JWT malformed, contained fewer than 3 sections"),null;try{const i=aR(n);return i?JSON.parse(i):(Ud("Failed to decode base64 JWT payload"),null)}catch(i){return Ud("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zE(t){const e=hf(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof tn&&YO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function YO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gu(this.lastLoginAt),this.creationTime=gu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ii(t,OR(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?VR(s.providerUserInfo):[],a=ZO(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Zm(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function XO(t){const e=ne(t);await Qu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ZO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function VR(t){return t.map(e=>{var{providerId:n}=e,r=W_(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eV(t,e){const n=await xR(t,{},async()=>{const r=el({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=NR(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",DR.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function tV(t,e){return ut(t,"POST","/v2/accounts:revokeToken",lt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=zE(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await eV(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ga;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ga,this.toJSON())}_performRefresh(){return Tr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=W_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new JO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Zm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ii(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return QO(this,e)}reload(){return XO(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Qu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(st(this.auth.app))return Promise.reject(bt(this.auth));const e=await this.getIdToken();return await ii(this,HO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:I,emailVerified:x,isAnonymous:F,providerData:B,stsTokenManager:g}=n;G(I&&g,e,"internal-error");const _=ga.fromJSON(this.name,g);G(typeof I=="string",e,"internal-error"),Si(f,e.name),Si(p,e.name),G(typeof x=="boolean",e,"internal-error"),G(typeof F=="boolean",e,"internal-error"),Si(w,e.name),Si(S,e.name),Si(A,e.name),Si(b,e.name),Si(T,e.name),Si(v,e.name);const E=new Gr({uid:I,auth:e,email:p,emailVerified:x,displayName:f,isAnonymous:F,photoURL:S,phoneNumber:w,tenantId:A,stsTokenManager:_,createdAt:T,lastLoginAt:v});return B&&Array.isArray(B)&&(E.providerData=B.map(R=>Object.assign({},R))),b&&(E._redirectEventId=b),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new ga;i.updateFromServerResponse(n);const s=new Gr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Qu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?VR(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ga;a.updateFromIdToken(r);const l=new Gr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Zm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E=new Map;function Nn(t){dr(t instanceof Function,"Expected a class definition");let e=$E.get(t);return e?(dr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$E.set(t,e),e)}/**
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
 */class LR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}LR.type="NONE";const Oa=LR;/**
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
 */function qs(t,e,n){return`firebase:${t}:${e}:${n}`}class _a{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=qs(this.userKey,i.apiKey,s),this.fullPersistenceKey=qs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _a(Nn(Oa),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Nn(Oa);const o=qs(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=Gr._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new _a(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new _a(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(UR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(MR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(BR(e))return"Blackberry";if(jR(e))return"Webos";if(Y_(e))return"Safari";if((e.includes("chrome/")||FR(e))&&!e.includes("edge/"))return"Chrome";if(vc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function MR(t=Ke()){return/firefox\//i.test(t)}function Y_(t=Ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function FR(t=Ke()){return/crios\//i.test(t)}function UR(t=Ke()){return/iemobile/i.test(t)}function vc(t=Ke()){return/android/i.test(t)}function BR(t=Ke()){return/blackberry/i.test(t)}function jR(t=Ke()){return/webos/i.test(t)}function nl(t=Ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function nV(t=Ke()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function rV(t=Ke()){var e;return nl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function iV(){return pR()&&document.documentMode===10}function zR(t=Ke()){return nl(t)||vc(t)||jR(t)||BR(t)||/windows phone/i.test(t)||UR(t)}function sV(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $R(t,e=[]){let n;switch(t){case"Browser":n=qE(Ke());break;case"Worker":n=`${qE(Ke())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${li}/${r}`}/**
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
 */class oV{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function aV(t,e={}){return ut(t,"GET","/v2/passwordPolicy",lt(t,e))}/**
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
 */const lV=6;class uV{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:lV,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cV{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new WE(this),this.idTokenSubscription=new WE(this),this.beforeStateQueue=new oV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bR,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await _a.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await OR(this,{idToken:e}),r=await Gr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(st(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(st(this.app))return Promise.reject(bt(this));const n=e?ne(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return st(this.app)?Promise.reject(bt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return st(this.app)?Promise.reject(bt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await aV(this),n=new uV(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await tV(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await _a.create(this,[Nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$R(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&MO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ot(t){return ne(t)}class WE{constructor(e){this.auth=e,this.observer=null,this.addObserver=gR(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dV(t){wc=t}function J_(t){return wc.loadJS(t)}function hV(){return wc.recaptchaV2Script}function fV(){return wc.recaptchaEnterpriseScript}function pV(){return wc.gapiScript}function qR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const mV="recaptcha-enterprise",gV="NO_RECAPTCHA";class _V{constructor(e){this.type=mV,this.auth=ot(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{GO(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new qO(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;jE(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(gV)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&jE(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=fV();l.length!==0&&(l+=a),J_(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function GE(t,e,n,r=!1){const i=new _V(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Yu(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await GE(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await GE(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yV(t,e){const n=_c(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Da(s,e??{}))return i;xt(i,"already-initialized")}return n.initialize({options:e})}function vV(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function WR(t,e,n){const r=ot(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=GR(e),{host:o,port:a}=wV(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||EV()}function GR(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wV(t){const e=GR(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:HE(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:HE(o)}}}function HE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function EV(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tr("not implemented")}_getIdTokenResponse(e){return Tr("not implemented")}_linkToIdToken(e,n){return Tr("not implemented")}_getReauthenticationResolver(e){return Tr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HR(t,e){return ut(t,"POST","/v1/accounts:resetPassword",lt(t,e))}async function IV(t,e){return ut(t,"POST","/v1/accounts:update",e)}async function TV(t,e){return ut(t,"POST","/v1/accounts:signUp",e)}async function SV(t,e){return ut(t,"POST","/v1/accounts:update",lt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RV(t,e){return ui(t,"POST","/v1/accounts:signInWithPassword",lt(t,e))}async function ff(t,e){return ut(t,"POST","/v1/accounts:sendOobCode",lt(t,e))}async function AV(t,e){return ff(t,e)}async function PV(t,e){return ff(t,e)}async function CV(t,e){return ff(t,e)}async function kV(t,e){return ff(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bV(t,e){return ui(t,"POST","/v1/accounts:signInWithEmailLink",lt(t,e))}async function DV(t,e){return ui(t,"POST","/v1/accounts:signInWithEmailLink",lt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju extends rl{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ju(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ju(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yu(e,n,"signInWithPassword",RV);case"emailLink":return bV(e,{email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yu(e,r,"signUpPassword",TV);case"emailLink":return DV(e,{idToken:n,email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(t,e){return ui(t,"POST","/v1/accounts:signInWithIdp",lt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xV="http://localhost";class Dr extends rl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Dr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=W_(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Dr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Jr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Jr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Jr(e,n)}buildRequest(){const e={requestUri:xV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=el(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NV(t,e){return ut(t,"POST","/v1/accounts:sendVerificationCode",lt(t,e))}async function OV(t,e){return ui(t,"POST","/v1/accounts:signInWithPhoneNumber",lt(t,e))}async function VV(t,e){const n=await ui(t,"POST","/v1/accounts:signInWithPhoneNumber",lt(t,e));if(n.temporaryProof)throw eu(t,"account-exists-with-different-credential",n);return n}const LV={USER_NOT_FOUND:"user-not-found"};async function MV(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return ui(t,"POST","/v1/accounts:signInWithPhoneNumber",lt(t,n),LV)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws extends rl{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ws({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ws({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return OV(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return VV(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return MV(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Ws({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FV(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function UV(t){const e=ua(Zl(t)).link,n=e?ua(Zl(e)).deep_link_id:null,r=ua(Zl(t)).deep_link_id;return(r?ua(Zl(r)).link:null)||r||n||e||t}class pf{constructor(e){var n,r,i,s,o,a;const l=ua(Zl(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,f=FV((i=l.mode)!==null&&i!==void 0?i:null);G(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=UV(e);try{return new pf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.providerId=hs.PROVIDER_ID}static credential(e,n){return Ju._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=pf.parseLink(n);return G(r,"argument-error"),Ju._fromEmailAndCode(e,r.code,r.tenantId)}}hs.PROVIDER_ID="password";hs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class il extends ci{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ya extends il{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return G("providerId"in n&&"signInMethod"in n,"argument-error"),Dr._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return G(e.idToken||e.accessToken,"argument-error"),Dr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ya.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ya.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new ya(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends il{constructor(){super("facebook.com")}static credential(e){return Dr._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yr.credential(e.oauthAccessToken)}catch{return null}}}yr.FACEBOOK_SIGN_IN_METHOD="facebook.com";yr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends il{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Dr._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vr.credential(n,r)}catch{return null}}}vr.GOOGLE_SIGN_IN_METHOD="google.com";vr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends il{constructor(){super("github.com")}static credential(e){return Dr._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wr.credential(e.oauthAccessToken)}catch{return null}}}wr.GITHUB_SIGN_IN_METHOD="github.com";wr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BV="http://localhost";class Va extends rl{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Jr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Jr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Jr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Va(r,s)}static _create(e,n){return new Va(e,n)}buildRequest(){return{requestUri:BV,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jV="saml.";class Ch extends ci{constructor(e){G(e.startsWith(jV),"argument-error"),super(e)}static credentialFromResult(e){return Ch.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ch.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Va.fromJSON(e);return G(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Va._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends il{constructor(){super("twitter.com")}static credential(e,n){return Dr._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Er.credential(n,r)}catch{return null}}}Er.TWITTER_SIGN_IN_METHOD="twitter.com";Er.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KR(t,e){return ui(t,"POST","/v1/accounts:signUp",lt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Gr._fromIdTokenResponse(e,r,i),o=KE(r);return new Zn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=KE(r);return new Zn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function KE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zV(t){var e;if(st(t.app))return Promise.reject(bt(t));const n=ot(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Zn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await KR(n,{returnSecureToken:!0}),i=await Zn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh extends tn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,kh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new kh(e,n,r,i)}}function QR(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?kh._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function $V(t,e){const n=ne(t);await mf(!0,n,e);const{providerUserInfo:r}=await KO(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=YR(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function X_(t,e,n=!1){const r=await ii(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zn._forOperation(t,"link",r)}async function mf(t,e,n){await Qu(e);const r=YR(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";G(r.has(n)===t,e.auth,i)}/**
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
 */async function JR(t,e,n=!1){const{auth:r}=t;if(st(r.app))return Promise.reject(bt(r));const i="reauthenticate";try{const s=await ii(t,QR(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=hf(s.idToken);G(o,r,"internal-error");const{sub:a}=o;return G(t.uid===a,r,"user-mismatch"),Zn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&xt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XR(t,e,n=!1){if(st(t.app))return Promise.reject(bt(t));const r="signIn",i=await QR(t,r,e),s=await Zn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function gf(t,e){return XR(ot(t),e)}async function ZR(t,e){const n=ne(t);return await mf(!1,n,e.providerId),X_(n,e)}async function eA(t,e){return JR(ne(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qV(t,e){return ui(t,"POST","/v1/accounts:signInWithCustomToken",lt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WV(t,e){if(st(t.app))return Promise.reject(bt(t));const n=ot(t),r=await qV(n,{token:e,returnSecureToken:!0}),i=await Zn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Z_._fromServerResponse(e,n):"totpInfo"in n?ey._fromServerResponse(e,n):xt(e,"internal-error")}}class Z_ extends Ec{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Z_(n)}}class ey extends Ec{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new ey(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(t,e,n){var r;G(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),G(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(G(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(G(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ty(t){const e=ot(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function GV(t,e,n){const r=ot(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&_f(r,i,n),await Yu(r,i,"getOobCode",PV)}async function HV(t,e,n){await HR(ne(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ty(t),r})}async function KV(t,e){await SV(ne(t),{oobCode:e})}async function tA(t,e){const n=ne(t),r=await HR(n,{oobCode:e}),i=r.requestType;switch(G(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":G(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":G(r.mfaInfo,n,"internal-error");default:G(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Ec._fromServerResponse(ot(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function QV(t,e){const{data:n}=await tA(ne(t),e);return n.email}async function YV(t,e,n){if(st(t.app))return Promise.reject(bt(t));const r=ot(t),o=await Yu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",KR).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&ty(t),l}),a=await Zn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function JV(t,e,n){return st(t.app)?Promise.reject(bt(t)):gf(ne(t),hs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ty(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XV(t,e,n){const r=ot(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){G(a.handleCodeInApp,r,"argument-error"),a&&_f(r,o,a)}s(i,n),await Yu(r,i,"getOobCode",CV)}function ZV(t,e){const n=pf.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function eL(t,e,n){if(st(t.app))return Promise.reject(bt(t));const r=ne(t),i=hs.credentialWithLink(e,n||Ku());return G(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),gf(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tL(t,e){return ut(t,"POST","/v1/accounts:createAuthUri",lt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nL(t,e){const n=K_()?Ku():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await tL(ne(t),r);return i||[]}async function rL(t,e){const n=ne(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&_f(n.auth,i,e);const{email:s}=await AV(n.auth,i);s!==t.email&&await t.reload()}async function iL(t,e,n){const r=ne(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&_f(r.auth,s,n);const{email:o}=await kV(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sL(t,e){return ut(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nA(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ne(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ii(r,sL(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function oL(t,e){const n=ne(t);return st(n.auth.app)?Promise.reject(bt(n.auth)):rA(n,e,null)}function aL(t,e){return rA(ne(t),null,e)}async function rA(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await ii(t,IV(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function lL(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=hf(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new va(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new uL(s,i);case"github.com":return new cL(s,i);case"google.com":return new dL(s,i);case"twitter.com":return new hL(s,i,t.screenName||null);case"custom":case"anonymous":return new va(s,null);default:return new va(s,r,i)}}class va{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class iA extends va{constructor(e,n,r,i){super(e,n,r),this.username=i}}class uL extends va{constructor(e,n){super(e,"facebook.com",n)}}class cL extends iA{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class dL extends va{constructor(e,n){super(e,"google.com",n)}}class hL extends iA{constructor(e,n,r){super(e,"twitter.com",n,r)}}function fL(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:lL(n)}function pL(t,e,n,r){return ne(t).onIdTokenChanged(e,n,r)}function mL(t,e,n){return ne(t).beforeAuthStateChanged(e,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new Us("enroll",e,n)}static _fromMfaPendingCredential(e){return new Us("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Us._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Us._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=ot(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Ec._fromServerResponse(r,a));G(i.mfaPendingCredential,r,"internal-error");const o=Us._fromMfaPendingCredential(i.mfaPendingCredential);return new ny(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const d=await Zn._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return G(n.user,r,"internal-error"),Zn._forOperation(n.user,n.operationType,c);default:xt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function gL(t,e){var n;const r=ne(t),i=e;return G(e.customData.operationType,r,"argument-error"),G((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),ny._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _L(t,e){return ut(t,"POST","/v2/accounts/mfaEnrollment:start",lt(t,e))}function yL(t,e){return ut(t,"POST","/v2/accounts/mfaEnrollment:finalize",lt(t,e))}function vL(t,e){return ut(t,"POST","/v2/accounts/mfaEnrollment:withdraw",lt(t,e))}class ry{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Ec._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new ry(e)}async getSession(){return Us._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await ii(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await ii(this.user,vL(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const zp=new WeakMap;function wL(t){const e=ne(t);return zp.has(e)||zp.set(e,ry._fromUser(e)),zp.get(e)}const bh="__sak";/**
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
 */class sA{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bh,"1"),this.storage.removeItem(bh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EL(){const t=Ke();return Y_(t)||nl(t)}const IL=1e3,TL=10;class oA extends sA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=EL()&&sV(),this.fallbackToPolling=zR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);iV()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,TL):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},IL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}oA.type="LOCAL";const yf=oA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA extends sA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}aA.type="SESSION";const Zi=aA;/**
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
 */function SL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class vf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new vf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await SL(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class RL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Ic("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return window}function AL(t){_t().location.href=t}/**
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
 */function iy(){return typeof _t().WorkerGlobalScope<"u"&&typeof _t().importScripts=="function"}async function PL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kL(){return iy()?self:null}/**
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
 */const lA="firebaseLocalStorageDb",bL=1,Dh="firebaseLocalStorage",uA="fbase_key";class Tc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wf(t,e){return t.transaction([Dh],e?"readwrite":"readonly").objectStore(Dh)}function DL(){const t=indexedDB.deleteDatabase(lA);return new Tc(t).toPromise()}function eg(){const t=indexedDB.open(lA,bL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Dh,{keyPath:uA})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Dh)?e(r):(r.close(),await DL(),e(await eg()))})})}async function QE(t,e,n){const r=wf(t,!0).put({[uA]:e,value:n});return new Tc(r).toPromise()}async function xL(t,e){const n=wf(t,!1).get(e),r=await new Tc(n).toPromise();return r===void 0?null:r.value}function YE(t,e){const n=wf(t,!0).delete(e);return new Tc(n).toPromise()}const NL=800,OL=3;class cA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await eg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>OL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vf._getInstance(kL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await PL(),!this.activeServiceWorker)return;this.sender=new RL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await eg();return await QE(e,bh,"1"),await YE(e,bh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>QE(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>xL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>YE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=wf(i,!1).getAll();return new Tc(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),NL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cA.type="LOCAL";const La=cA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VL(t,e){return ut(t,"POST","/v2/accounts/mfaSignIn:start",lt(t,e))}function LL(t,e){return ut(t,"POST","/v2/accounts/mfaSignIn:finalize",lt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ML=500,FL=6e4,gd=1e12;class UL{constructor(e){this.auth=e,this.counter=gd,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new BL(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||gd;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||gd;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||gd;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class BL{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;G(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=jL(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},FL)},ML))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function jL(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=qR("rcb"),zL=new yc(3e4,6e4);class $L{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=_t().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return G(qL(n),e,"argument-error"),this.shouldResolveImmediately(n)&&BE(_t().grecaptcha)?Promise.resolve(_t().grecaptcha):new Promise((r,i)=>{const s=_t().setTimeout(()=>{i(Tt(e,"network-request-failed"))},zL.get());_t()[$p]=()=>{_t().clearTimeout(s),delete _t()[$p];const a=_t().grecaptcha;if(!a||!BE(a)){i(Tt(e,"internal-error"));return}const l=a.render;a.render=(c,d)=>{const f=l(c,d);return this.counter++,f},this.hostLanguage=n,r(a)};const o=`${hV()}?${el({onload:$p,render:"explicit",hl:n})}`;J_(o).catch(()=>{clearTimeout(s),i(Tt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=_t().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function qL(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class WL{async load(e){return new UL(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA="recaptcha",GL={theme:"light",type:"image"};let HL=class{constructor(e,n,r=Object.assign({},GL)){this.parameters=r,this.type=dA,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ot(e),this.isInvisible=this.parameters.size==="invisible",G(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;G(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new WL:new $L,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){G(!this.parameters.sitekey,this.auth,"argument-error"),G(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),G(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=_t()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){G(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){G(K_()&&!iy(),this.auth,"internal-error"),await KL(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await WO(this.auth);G(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return G(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function KL(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ws._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function QL(t,e,n){if(st(t.app))return Promise.reject(bt(t));const r=ot(t),i=await Ef(r,e,ne(n));return new sy(i,s=>gf(r,s))}async function YL(t,e,n){const r=ne(t);await mf(!1,r,"phone");const i=await Ef(r.auth,e,ne(n));return new sy(i,s=>ZR(r,s))}async function JL(t,e,n){const r=ne(t);if(st(r.auth.app))return Promise.reject(bt(r.auth));const i=await Ef(r.auth,e,ne(n));return new sy(i,s=>eA(r,s))}async function Ef(t,e,n){var r;const i=await n.verify();try{G(typeof i=="string",t,"argument-error"),G(n.type===dA,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return G(o.type==="enroll",t,"internal-error"),(await _L(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{G(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return G(a,t,"missing-multi-factor-info"),(await VL(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await NV(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function XL(t,e){const n=ne(t);if(st(n.auth.app))return Promise.reject(bt(n.auth));await X_(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let to=class Bd{constructor(e){this.providerId=Bd.PROVIDER_ID,this.auth=ot(e)}verifyPhoneNumber(e,n){return Ef(this.auth,e,ne(n))}static credential(e,n){return Ws._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Bd.credentialFromTaggedObject(n)}static credentialFromError(e){return Bd.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Ws._fromTokenResponse(n,r):null}};to.PROVIDER_ID="phone";to.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function vo(t,e){return e?Nn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class oy extends rl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Jr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Jr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ZL(t){return XR(t.auth,new oy(t),t.bypassAuthState)}function eM(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),JR(n,new oy(t),t.bypassAuthState)}async function tM(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),X_(n,new oy(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZL;case"linkViaPopup":case"linkViaRedirect":return tM;case"reauthViaPopup":case"reauthViaRedirect":return eM;default:xt(this.auth,"internal-error")}}resolve(e){dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nM=new yc(2e3,1e4);async function rM(t,e,n){if(st(t.app))return Promise.reject(Tt(t,"operation-not-supported-in-this-environment"));const r=ot(t);tl(t,e,ci);const i=vo(r,n);return new Hr(r,"signInViaPopup",e,i).executeNotNull()}async function iM(t,e,n){const r=ne(t);if(st(r.auth.app))return Promise.reject(Tt(r.auth,"operation-not-supported-in-this-environment"));tl(r.auth,e,ci);const i=vo(r.auth,n);return new Hr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function sM(t,e,n){const r=ne(t);tl(r.auth,e,ci);const i=vo(r.auth,n);return new Hr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Hr extends hA{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Hr.currentPopupAction&&Hr.currentPopupAction.cancel(),Hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){dr(this.filter.length===1,"Popup operations only handle one event");const e=Ic();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nM.get())};e()}}Hr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oM="pendingRedirect",_u=new Map;class aM extends hA{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_u.get(this.auth._key());if(!e){try{const r=await lM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_u.set(this.auth._key(),e)}return this.bypassAuthState||_u.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lM(t,e){const n=pA(e),r=fA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function ay(t,e){return fA(t)._set(pA(e),"true")}function uM(){_u.clear()}function ly(t,e){_u.set(t._key(),e)}function fA(t){return Nn(t._redirectPersistence)}function pA(t){return qs(oM,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cM(t,e,n){return dM(t,e,n)}async function dM(t,e,n){if(st(t.app))return Promise.reject(bt(t));const r=ot(t);tl(t,e,ci),await r._initializationPromise;const i=vo(r,n);return await ay(i,r),i._openRedirect(r,e,"signInViaRedirect")}function hM(t,e,n){return fM(t,e,n)}async function fM(t,e,n){const r=ne(t);if(tl(r.auth,e,ci),st(r.auth.app))return Promise.reject(bt(r.auth));await r.auth._initializationPromise;const i=vo(r.auth,n);await ay(i,r.auth);const s=await mA(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function pM(t,e,n){return mM(t,e,n)}async function mM(t,e,n){const r=ne(t);tl(r.auth,e,ci),await r.auth._initializationPromise;const i=vo(r.auth,n);await mf(!1,r,e.providerId),await ay(i,r.auth);const s=await mA(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function gM(t,e){return await ot(t)._initializationPromise,If(t,e,!1)}async function If(t,e,n=!1){if(st(t.app))return Promise.reject(bt(t));const r=ot(t),i=vo(r,e),o=await new aM(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function mA(t){const e=Ic(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _M=10*60*1e3;class gA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!_A(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_M&&this.cachedEventUids.clear(),this.cachedEventUids.has(JE(e))}saveEventToCache(e){this.cachedEventUids.add(JE(e)),this.lastProcessedEventTime=Date.now()}}function JE(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _A({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _A(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yA(t,e={}){return ut(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wM=/^https?/;async function EM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await yA(t);for(const n of e)try{if(IM(n))return}catch{}xt(t,"unauthorized-domain")}function IM(t){const e=Ku(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!wM.test(n))return!1;if(vM.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const TM=new yc(3e4,6e4);function XE(){const t=_t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function SM(t){return new Promise((e,n)=>{var r,i,s;function o(){XE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{XE(),n(Tt(t,"network-request-failed"))},timeout:TM.get()})}if(!((i=(r=_t().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=_t().gapi)===null||s===void 0)&&s.load)o();else{const a=qR("iframefcb");return _t()[a]=()=>{gapi.load?o():n(Tt(t,"network-request-failed"))},J_(`${pV()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw jd=null,e})}let jd=null;function RM(t){return jd=jd||SM(t),jd}/**
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
 */const AM=new yc(5e3,15e3),PM="__/auth/iframe",CM="emulator/auth/iframe",kM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DM(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Q_(e,CM):`https://${t.config.authDomain}/${PM}`,r={apiKey:e.apiKey,appName:t.name,v:li},i=bM.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${el(r).slice(1)}`}async function xM(t){const e=await RM(t),n=_t().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:DM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kM,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Tt(t,"network-request-failed"),a=_t().setTimeout(()=>{s(o)},AM.get());function l(){_t().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const NM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OM=500,VM=600,LM="_blank",MM="http://localhost";class ZE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FM(t,e,n,r=OM,i=VM){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},NM),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ke().toLowerCase();n&&(a=FR(c)?LM:n),MR(c)&&(e=e||MM,l.scrollbars="yes");const d=Object.entries(l).reduce((p,[w,S])=>`${p}${w}=${S},`,"");if(rV(c)&&a!=="_self")return UM(e||"",a),new ZE(null);const f=window.open(e||"",a,d);G(f,t,"popup-blocked");try{f.focus()}catch{}return new ZE(f)}function UM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const BM="__/auth/handler",jM="emulator/auth/handler",zM=encodeURIComponent("fac");async function tg(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:li,eventId:i};if(e instanceof ci){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(s||{}))o[d]=f}if(e instanceof il){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${zM}=${encodeURIComponent(l)}`:"";return`${$M(t)}?${el(a).slice(1)}${c}`}function $M({config:t}){return t.emulator?Q_(t,jM):`https://${t.authDomain}/${BM}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp="webStorageSupport";class qM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zi,this._completeRedirectFn=If,this._overrideRedirectResult=ly}async _openPopup(e,n,r,i){var s;dr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await tg(e,n,r,Ku(),i);return FM(e,o,Ic())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await tg(e,n,r,Ku(),i);return AL(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(dr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await xM(e),r=new gA(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qp,{type:qp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[qp];o!==void 0&&n(!!o),xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=EM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zR()||Y_()||nl()}}const vA=qM;class WM{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Tr("unexpected MultiFactorSessionType")}}}class uy extends WM{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new uy(e)}_finalizeEnroll(e,n,r){return yL(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return LL(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class wA{constructor(){}static assertion(e){return uy._fromCredential(e)}}wA.FACTOR_ID="phone";var eI="@firebase/auth",tI="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function KM(t){ri(new Xn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$R(t)},c=new cV(r,i,s,l);return vV(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ri(new Xn("auth-internal",e=>{const n=ot(e.getProvider("auth").getImmediate());return(r=>new GM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vn(eI,tI,HM(t)),Vn(eI,tI,"esm2017")}/**
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
 */const QM=5*60,YM=cR("authIdTokenMaxAge")||QM;let nI=null;const JM=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>YM)return;const i=n==null?void 0:n.token;nI!==i&&(nI=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function XM(t=$_()){const e=_c(t,"auth");if(e.isInitialized())return e.getImmediate();const n=yV(t,{popupRedirectResolver:vA,persistence:[La,yf,Zi]}),r=cR("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=JM(s.toString());mL(n,o,()=>o(n.currentUser)),pL(n,a=>o(a))}}const i=lR("auth");return i&&WR(n,`http://${i}`),n}function ZM(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}dV({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Tt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",ZM().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});KM("Browser");/**
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
 */function no(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eF=2e3;async function tF(t,e,n){var r;const{BuildInfo:i}=no();dr(e.sessionId,"AuthEvent did not contain a session ID");const s=await oF(e.sessionId),o={};return nl()?o.ibi=i.packageName:vc()?o.apn=i.packageName:xt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,tg(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function nF(t){const{BuildInfo:e}=no(),n={};nl()?n.iosBundleId=e.packageName:vc()?n.androidPackageName=e.packageName:xt(t,"operation-not-supported-in-this-environment"),await yA(t,n)}function rF(t){const{cordova:e}=no();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,nV()?"_blank":"_system","location=yes"),n(i)})})}async function iF(t,e,n){const{cordova:r}=no();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var f;s();const p=(f=r.plugins.browsertab)===null||f===void 0?void 0:f.close;typeof p=="function"&&p(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function c(){a||(a=window.setTimeout(()=>{o(Tt(t,"redirect-cancelled-by-user"))},eF))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(l),document.addEventListener("resume",c,!1),vc()&&document.addEventListener("visibilitychange",d,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",d,!1),a&&window.clearTimeout(a)}})}finally{i()}}function sF(t){var e,n,r,i,s,o,a,l,c,d;const f=no();G(typeof((e=f==null?void 0:f.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),G(typeof((n=f==null?void 0:f.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),G(typeof((s=(i=(r=f==null?void 0:f.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),G(typeof((l=(a=(o=f==null?void 0:f.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),G(typeof((d=(c=f==null?void 0:f.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function oF(t){const e=aF(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function aF(t){if(dr(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lF=20;class uF extends gA{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function cF(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:fF(),postBody:null,tenantId:t.tenantId,error:Tt(t,"no-auth-event")}}function dF(t,e){return ng()._set(rg(t),e)}async function rI(t){const e=await ng()._get(rg(t));return e&&await ng()._remove(rg(t)),e}function hF(t,e){var n,r;const i=mF(e);if(i.includes("/__/auth/callback")){const s=zd(i),o=s.firebaseError?pF(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?Tt(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function fF(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<lF;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function ng(){return Nn(yf)}function rg(t){return qs("authEvent",t.config.apiKey,t.name)}function pF(t){try{return JSON.parse(t)}catch{return null}}function mF(t){const e=zd(t),n=e.link?decodeURIComponent(e.link):void 0,r=zd(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return zd(i).link||i||r||n||t}function zd(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return ua(n.join("?"))}/**
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
 */const gF=500;class _F{constructor(){this._redirectPersistence=Zi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=If,this._overrideRedirectResult=ly}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new uF(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){xt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){sF(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),uM(),await this._originValidation(e);const o=cF(e,r,i);await dF(e,o);const a=await tF(e,o,n),l=await rF(a);return iF(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nF(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=no(),o=setTimeout(async()=>{await rI(e),n.onEvent(iI())},gF),a=async d=>{clearTimeout(o);const f=await rI(e);let p=null;f&&(d!=null&&d.url)&&(p=hF(f,d.url)),n.onEvent(p||iI())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,c=`${s.packageName.toLowerCase()}://`;no().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(c)&&a({url:d}),typeof l=="function")try{l(d)}catch(f){console.error(f)}}}}const yF=_F;function iI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Tt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vF(t,e){ot(t)._logFramework(e)}var wF="@firebase/auth-compat",EF="0.5.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IF=1e3;function yu(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function TF(){return yu()==="http:"||yu()==="https:"}function EA(t=Ke()){return!!((yu()==="file:"||yu()==="ionic:"||yu()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function SF(){return U_()||F_()}function RF(){return pR()&&(document==null?void 0:document.documentMode)===11}function AF(t=Ke()){return/Edge\/\d+/.test(t)}function PF(t=Ke()){return RF()||AF(t)}function IA(){try{const t=self.localStorage,e=Ic();if(t)return t.setItem(e,"1"),t.removeItem(e),PF()?Wu():!0}catch{return cy()&&Wu()}return!1}function cy(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Wp(){return(TF()||fR()||EA())&&!SF()&&IA()&&!cy()}function TA(){return EA()&&typeof document<"u"}async function CF(){return TA()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},IF);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function kF(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn={LOCAL:"local",NONE:"none",SESSION:"session"},jl=G,SA="persistence";function bF(t,e){if(jl(Object.values(Dn).includes(e),t,"invalid-persistence-type"),U_()){jl(e!==Dn.SESSION,t,"unsupported-persistence-type");return}if(F_()){jl(e===Dn.NONE,t,"unsupported-persistence-type");return}if(cy()){jl(e===Dn.NONE||e===Dn.LOCAL&&Wu(),t,"unsupported-persistence-type");return}jl(e===Dn.NONE||IA(),t,"unsupported-persistence-type")}async function ig(t){await t._initializationPromise;const e=RA(),n=qs(SA,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function DF(t,e){const n=RA();if(!n)return[];const r=qs(SA,t,e);switch(n.getItem(r)){case Dn.NONE:return[Oa];case Dn.LOCAL:return[La,Zi];case Dn.SESSION:return[Zi];default:return[]}}function RA(){var t;try{return((t=kF())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xF=G;class Mi{constructor(){this.browserResolver=Nn(vA),this.cordovaResolver=Nn(yF),this.underlyingResolver=null,this._redirectPersistence=Zi,this._completeRedirectFn=If,this._overrideRedirectResult=ly}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return TA()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return xF(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await CF();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(t){return t.unwrap()}function NF(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OF(t){return PA(t)}function VF(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new LF(t,gL(t,e))}else if(r){const i=PA(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function PA(t){const{_tokenResponse:e}=t instanceof tn?t.customData:t;if(!e)return null;if(!(t instanceof tn)&&"temporaryProof"in e&&"phoneNumber"in e)return to.credentialFromResult(t);const n=e.providerId;if(!n||n===Bl.PASSWORD)return null;let r;switch(n){case Bl.GOOGLE:r=vr;break;case Bl.FACEBOOK:r=yr;break;case Bl.GITHUB:r=wr;break;case Bl.TWITTER:r=Er;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Va._create(n,a):Dr._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new ya(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof tn?r.credentialFromError(t):r.credentialFromResult(t)}function yn(t,e){return e.catch(n=>{throw n instanceof tn&&VF(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:OF(n),additionalUserInfo:fL(n),user:Tf.getOrCreate(i)}})}async function sg(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>yn(t,n.confirm(r))}}class LF{constructor(e,n){this.resolver=n,this.auth=NF(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return yn(AA(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tf=class tu{constructor(e){this._delegate=e,this.multiFactor=wL(e)}static getOrCreate(e){return tu.USER_MAP.has(e)||tu.USER_MAP.set(e,new tu(e)),tu.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return yn(this.auth,ZR(this._delegate,e))}async linkWithPhoneNumber(e,n){return sg(this.auth,YL(this._delegate,e,n))}async linkWithPopup(e){return yn(this.auth,sM(this._delegate,e,Mi))}async linkWithRedirect(e){return await ig(ot(this.auth)),pM(this._delegate,e,Mi)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return yn(this.auth,eA(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return sg(this.auth,JL(this._delegate,e,n))}reauthenticateWithPopup(e){return yn(this.auth,iM(this._delegate,e,Mi))}async reauthenticateWithRedirect(e){return await ig(ot(this.auth)),hM(this._delegate,e,Mi)}sendEmailVerification(e){return rL(this._delegate,e)}async unlink(e){return await $V(this._delegate,e),this}updateEmail(e){return oL(this._delegate,e)}updatePassword(e){return aL(this._delegate,e)}updatePhoneNumber(e){return XL(this._delegate,e)}updateProfile(e){return nA(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return iL(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Tf.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=G;class og{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;zl(r,"invalid-api-key",{appName:e.name}),zl(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Mi:void 0;this._delegate=n.initialize({options:{persistence:MF(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(VO),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Tf.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){WR(this._delegate,e,n)}applyActionCode(e){return KV(this._delegate,e)}checkActionCode(e){return tA(this._delegate,e)}confirmPasswordReset(e,n){return HV(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return yn(this._delegate,YV(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return nL(this._delegate,e)}isSignInWithEmailLink(e){return ZV(this._delegate,e)}async getRedirectResult(){zl(Wp(),this._delegate,"operation-not-supported-in-this-environment");const e=await gM(this._delegate,Mi);return e?yn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){vF(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=sI(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=sI(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return XV(this._delegate,e,n)}sendPasswordResetEmail(e,n){return GV(this._delegate,e,n||void 0)}async setPersistence(e){bF(this._delegate,e);let n;switch(e){case Dn.SESSION:n=Zi;break;case Dn.LOCAL:n=await Nn(La)._isAvailable()?La:yf;break;case Dn.NONE:n=Oa;break;default:return xt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return yn(this._delegate,zV(this._delegate))}signInWithCredential(e){return yn(this._delegate,gf(this._delegate,e))}signInWithCustomToken(e){return yn(this._delegate,WV(this._delegate,e))}signInWithEmailAndPassword(e,n){return yn(this._delegate,JV(this._delegate,e,n))}signInWithEmailLink(e,n){return yn(this._delegate,eL(this._delegate,e,n))}signInWithPhoneNumber(e,n){return sg(this._delegate,QL(this._delegate,e,n))}async signInWithPopup(e){return zl(Wp(),this._delegate,"operation-not-supported-in-this-environment"),yn(this._delegate,rM(this._delegate,e,Mi))}async signInWithRedirect(e){return zl(Wp(),this._delegate,"operation-not-supported-in-this-environment"),await ig(this._delegate),cM(this._delegate,e,Mi)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return QV(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}og.Persistence=Dn;function sI(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Tf.getOrCreate(o)),error:e,complete:n}}function MF(t,e){const n=DF(t,e);if(typeof self<"u"&&!n.includes(La)&&n.push(La),typeof window<"u")for(const r of[yf,Zi])n.includes(r)||n.push(r);return n.includes(Oa)||n.push(Oa),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(){this.providerId="phone",this._delegate=new to(AA(be.auth()))}static credential(e,n){return to.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}dy.PHONE_SIGN_IN_METHOD=to.PHONE_SIGN_IN_METHOD;dy.PROVIDER_ID=to.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FF=G;class UF{constructor(e,n,r=be.app()){var i;FF((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new HL(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BF="auth-compat";function jF(t){t.INTERNAL.registerComponent(new Xn(BF,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new og(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Uo.EMAIL_SIGNIN,PASSWORD_RESET:Uo.PASSWORD_RESET,RECOVER_EMAIL:Uo.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Uo.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Uo.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Uo.VERIFY_EMAIL}},EmailAuthProvider:hs,FacebookAuthProvider:yr,GithubAuthProvider:wr,GoogleAuthProvider:vr,OAuthProvider:ya,SAMLAuthProvider:Ch,PhoneAuthProvider:dy,PhoneMultiFactorGenerator:wA,RecaptchaVerifier:UF,TwitterAuthProvider:Er,Auth:og,AuthCredential:rl,Error:tn}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(wF,EF)}jF(be);var oI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gs,CA;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,_){function E(){}E.prototype=_.prototype,g.D=_.prototype,g.prototype=new E,g.prototype.constructor=g,g.C=function(R,k,C){for(var P=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)P[Ie-2]=arguments[Ie];return _.prototype[k].apply(R,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(g,_,E){E||(E=0);var R=Array(16);if(typeof _=="string")for(var k=0;16>k;++k)R[k]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(k=0;16>k;++k)R[k]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=g.g[0],E=g.g[1],k=g.g[2];var C=g.g[3],P=_+(C^E&(k^C))+R[0]+3614090360&4294967295;_=E+(P<<7&4294967295|P>>>25),P=C+(k^_&(E^k))+R[1]+3905402710&4294967295,C=_+(P<<12&4294967295|P>>>20),P=k+(E^C&(_^E))+R[2]+606105819&4294967295,k=C+(P<<17&4294967295|P>>>15),P=E+(_^k&(C^_))+R[3]+3250441966&4294967295,E=k+(P<<22&4294967295|P>>>10),P=_+(C^E&(k^C))+R[4]+4118548399&4294967295,_=E+(P<<7&4294967295|P>>>25),P=C+(k^_&(E^k))+R[5]+1200080426&4294967295,C=_+(P<<12&4294967295|P>>>20),P=k+(E^C&(_^E))+R[6]+2821735955&4294967295,k=C+(P<<17&4294967295|P>>>15),P=E+(_^k&(C^_))+R[7]+4249261313&4294967295,E=k+(P<<22&4294967295|P>>>10),P=_+(C^E&(k^C))+R[8]+1770035416&4294967295,_=E+(P<<7&4294967295|P>>>25),P=C+(k^_&(E^k))+R[9]+2336552879&4294967295,C=_+(P<<12&4294967295|P>>>20),P=k+(E^C&(_^E))+R[10]+4294925233&4294967295,k=C+(P<<17&4294967295|P>>>15),P=E+(_^k&(C^_))+R[11]+2304563134&4294967295,E=k+(P<<22&4294967295|P>>>10),P=_+(C^E&(k^C))+R[12]+1804603682&4294967295,_=E+(P<<7&4294967295|P>>>25),P=C+(k^_&(E^k))+R[13]+4254626195&4294967295,C=_+(P<<12&4294967295|P>>>20),P=k+(E^C&(_^E))+R[14]+2792965006&4294967295,k=C+(P<<17&4294967295|P>>>15),P=E+(_^k&(C^_))+R[15]+1236535329&4294967295,E=k+(P<<22&4294967295|P>>>10),P=_+(k^C&(E^k))+R[1]+4129170786&4294967295,_=E+(P<<5&4294967295|P>>>27),P=C+(E^k&(_^E))+R[6]+3225465664&4294967295,C=_+(P<<9&4294967295|P>>>23),P=k+(_^E&(C^_))+R[11]+643717713&4294967295,k=C+(P<<14&4294967295|P>>>18),P=E+(C^_&(k^C))+R[0]+3921069994&4294967295,E=k+(P<<20&4294967295|P>>>12),P=_+(k^C&(E^k))+R[5]+3593408605&4294967295,_=E+(P<<5&4294967295|P>>>27),P=C+(E^k&(_^E))+R[10]+38016083&4294967295,C=_+(P<<9&4294967295|P>>>23),P=k+(_^E&(C^_))+R[15]+3634488961&4294967295,k=C+(P<<14&4294967295|P>>>18),P=E+(C^_&(k^C))+R[4]+3889429448&4294967295,E=k+(P<<20&4294967295|P>>>12),P=_+(k^C&(E^k))+R[9]+568446438&4294967295,_=E+(P<<5&4294967295|P>>>27),P=C+(E^k&(_^E))+R[14]+3275163606&4294967295,C=_+(P<<9&4294967295|P>>>23),P=k+(_^E&(C^_))+R[3]+4107603335&4294967295,k=C+(P<<14&4294967295|P>>>18),P=E+(C^_&(k^C))+R[8]+1163531501&4294967295,E=k+(P<<20&4294967295|P>>>12),P=_+(k^C&(E^k))+R[13]+2850285829&4294967295,_=E+(P<<5&4294967295|P>>>27),P=C+(E^k&(_^E))+R[2]+4243563512&4294967295,C=_+(P<<9&4294967295|P>>>23),P=k+(_^E&(C^_))+R[7]+1735328473&4294967295,k=C+(P<<14&4294967295|P>>>18),P=E+(C^_&(k^C))+R[12]+2368359562&4294967295,E=k+(P<<20&4294967295|P>>>12),P=_+(E^k^C)+R[5]+4294588738&4294967295,_=E+(P<<4&4294967295|P>>>28),P=C+(_^E^k)+R[8]+2272392833&4294967295,C=_+(P<<11&4294967295|P>>>21),P=k+(C^_^E)+R[11]+1839030562&4294967295,k=C+(P<<16&4294967295|P>>>16),P=E+(k^C^_)+R[14]+4259657740&4294967295,E=k+(P<<23&4294967295|P>>>9),P=_+(E^k^C)+R[1]+2763975236&4294967295,_=E+(P<<4&4294967295|P>>>28),P=C+(_^E^k)+R[4]+1272893353&4294967295,C=_+(P<<11&4294967295|P>>>21),P=k+(C^_^E)+R[7]+4139469664&4294967295,k=C+(P<<16&4294967295|P>>>16),P=E+(k^C^_)+R[10]+3200236656&4294967295,E=k+(P<<23&4294967295|P>>>9),P=_+(E^k^C)+R[13]+681279174&4294967295,_=E+(P<<4&4294967295|P>>>28),P=C+(_^E^k)+R[0]+3936430074&4294967295,C=_+(P<<11&4294967295|P>>>21),P=k+(C^_^E)+R[3]+3572445317&4294967295,k=C+(P<<16&4294967295|P>>>16),P=E+(k^C^_)+R[6]+76029189&4294967295,E=k+(P<<23&4294967295|P>>>9),P=_+(E^k^C)+R[9]+3654602809&4294967295,_=E+(P<<4&4294967295|P>>>28),P=C+(_^E^k)+R[12]+3873151461&4294967295,C=_+(P<<11&4294967295|P>>>21),P=k+(C^_^E)+R[15]+530742520&4294967295,k=C+(P<<16&4294967295|P>>>16),P=E+(k^C^_)+R[2]+3299628645&4294967295,E=k+(P<<23&4294967295|P>>>9),P=_+(k^(E|~C))+R[0]+4096336452&4294967295,_=E+(P<<6&4294967295|P>>>26),P=C+(E^(_|~k))+R[7]+1126891415&4294967295,C=_+(P<<10&4294967295|P>>>22),P=k+(_^(C|~E))+R[14]+2878612391&4294967295,k=C+(P<<15&4294967295|P>>>17),P=E+(C^(k|~_))+R[5]+4237533241&4294967295,E=k+(P<<21&4294967295|P>>>11),P=_+(k^(E|~C))+R[12]+1700485571&4294967295,_=E+(P<<6&4294967295|P>>>26),P=C+(E^(_|~k))+R[3]+2399980690&4294967295,C=_+(P<<10&4294967295|P>>>22),P=k+(_^(C|~E))+R[10]+4293915773&4294967295,k=C+(P<<15&4294967295|P>>>17),P=E+(C^(k|~_))+R[1]+2240044497&4294967295,E=k+(P<<21&4294967295|P>>>11),P=_+(k^(E|~C))+R[8]+1873313359&4294967295,_=E+(P<<6&4294967295|P>>>26),P=C+(E^(_|~k))+R[15]+4264355552&4294967295,C=_+(P<<10&4294967295|P>>>22),P=k+(_^(C|~E))+R[6]+2734768916&4294967295,k=C+(P<<15&4294967295|P>>>17),P=E+(C^(k|~_))+R[13]+1309151649&4294967295,E=k+(P<<21&4294967295|P>>>11),P=_+(k^(E|~C))+R[4]+4149444226&4294967295,_=E+(P<<6&4294967295|P>>>26),P=C+(E^(_|~k))+R[11]+3174756917&4294967295,C=_+(P<<10&4294967295|P>>>22),P=k+(_^(C|~E))+R[2]+718787259&4294967295,k=C+(P<<15&4294967295|P>>>17),P=E+(C^(k|~_))+R[9]+3951481745&4294967295,g.g[0]=g.g[0]+_&4294967295,g.g[1]=g.g[1]+(k+(P<<21&4294967295|P>>>11))&4294967295,g.g[2]=g.g[2]+k&4294967295,g.g[3]=g.g[3]+C&4294967295}r.prototype.u=function(g,_){_===void 0&&(_=g.length);for(var E=_-this.blockSize,R=this.B,k=this.h,C=0;C<_;){if(k==0)for(;C<=E;)i(this,g,C),C+=this.blockSize;if(typeof g=="string"){for(;C<_;)if(R[k++]=g.charCodeAt(C++),k==this.blockSize){i(this,R),k=0;break}}else for(;C<_;)if(R[k++]=g[C++],k==this.blockSize){i(this,R),k=0;break}}this.h=k,this.o+=_},r.prototype.v=function(){var g=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);g[0]=128;for(var _=1;_<g.length-8;++_)g[_]=0;var E=8*this.o;for(_=g.length-8;_<g.length;++_)g[_]=E&255,E/=256;for(this.u(g),g=Array(16),_=E=0;4>_;++_)for(var R=0;32>R;R+=8)g[E++]=this.g[_]>>>R&255;return g};function s(g,_){var E=a;return Object.prototype.hasOwnProperty.call(E,g)?E[g]:E[g]=_(g)}function o(g,_){this.h=_;for(var E=[],R=!0,k=g.length-1;0<=k;k--){var C=g[k]|0;R&&C==_||(E[k]=C,R=!1)}this.g=E}var a={};function l(g){return-128<=g&&128>g?s(g,function(_){return new o([_|0],0>_?-1:0)}):new o([g|0],0>g?-1:0)}function c(g){if(isNaN(g)||!isFinite(g))return f;if(0>g)return b(c(-g));for(var _=[],E=1,R=0;g>=E;R++)_[R]=g/E|0,E*=4294967296;return new o(_,0)}function d(g,_){if(g.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(g.charAt(0)=="-")return b(d(g.substring(1),_));if(0<=g.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(_,8)),R=f,k=0;k<g.length;k+=8){var C=Math.min(8,g.length-k),P=parseInt(g.substring(k,k+C),_);8>C?(C=c(Math.pow(_,C)),R=R.j(C).add(c(P))):(R=R.j(E),R=R.add(c(P)))}return R}var f=l(0),p=l(1),w=l(16777216);t=o.prototype,t.m=function(){if(A(this))return-b(this).m();for(var g=0,_=1,E=0;E<this.g.length;E++){var R=this.i(E);g+=(0<=R?R:4294967296+R)*_,_*=4294967296}return g},t.toString=function(g){if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(S(this))return"0";if(A(this))return"-"+b(this).toString(g);for(var _=c(Math.pow(g,6)),E=this,R="";;){var k=x(E,_).g;E=T(E,k.j(_));var C=((0<E.g.length?E.g[0]:E.h)>>>0).toString(g);if(E=k,S(E))return C+R;for(;6>C.length;)C="0"+C;R=C+R}},t.i=function(g){return 0>g?0:g<this.g.length?this.g[g]:this.h};function S(g){if(g.h!=0)return!1;for(var _=0;_<g.g.length;_++)if(g.g[_]!=0)return!1;return!0}function A(g){return g.h==-1}t.l=function(g){return g=T(this,g),A(g)?-1:S(g)?0:1};function b(g){for(var _=g.g.length,E=[],R=0;R<_;R++)E[R]=~g.g[R];return new o(E,~g.h).add(p)}t.abs=function(){return A(this)?b(this):this},t.add=function(g){for(var _=Math.max(this.g.length,g.g.length),E=[],R=0,k=0;k<=_;k++){var C=R+(this.i(k)&65535)+(g.i(k)&65535),P=(C>>>16)+(this.i(k)>>>16)+(g.i(k)>>>16);R=P>>>16,C&=65535,P&=65535,E[k]=P<<16|C}return new o(E,E[E.length-1]&-2147483648?-1:0)};function T(g,_){return g.add(b(_))}t.j=function(g){if(S(this)||S(g))return f;if(A(this))return A(g)?b(this).j(b(g)):b(b(this).j(g));if(A(g))return b(this.j(b(g)));if(0>this.l(w)&&0>g.l(w))return c(this.m()*g.m());for(var _=this.g.length+g.g.length,E=[],R=0;R<2*_;R++)E[R]=0;for(R=0;R<this.g.length;R++)for(var k=0;k<g.g.length;k++){var C=this.i(R)>>>16,P=this.i(R)&65535,Ie=g.i(k)>>>16,Rt=g.i(k)&65535;E[2*R+2*k]+=P*Rt,v(E,2*R+2*k),E[2*R+2*k+1]+=C*Rt,v(E,2*R+2*k+1),E[2*R+2*k+1]+=P*Ie,v(E,2*R+2*k+1),E[2*R+2*k+2]+=C*Ie,v(E,2*R+2*k+2)}for(R=0;R<_;R++)E[R]=E[2*R+1]<<16|E[2*R];for(R=_;R<2*_;R++)E[R]=0;return new o(E,0)};function v(g,_){for(;(g[_]&65535)!=g[_];)g[_+1]+=g[_]>>>16,g[_]&=65535,_++}function I(g,_){this.g=g,this.h=_}function x(g,_){if(S(_))throw Error("division by zero");if(S(g))return new I(f,f);if(A(g))return _=x(b(g),_),new I(b(_.g),b(_.h));if(A(_))return _=x(g,b(_)),new I(b(_.g),_.h);if(30<g.g.length){if(A(g)||A(_))throw Error("slowDivide_ only works with positive integers.");for(var E=p,R=_;0>=R.l(g);)E=F(E),R=F(R);var k=B(E,1),C=B(R,1);for(R=B(R,2),E=B(E,2);!S(R);){var P=C.add(R);0>=P.l(g)&&(k=k.add(E),C=P),R=B(R,1),E=B(E,1)}return _=T(g,k.j(_)),new I(k,_)}for(k=f;0<=g.l(_);){for(E=Math.max(1,Math.floor(g.m()/_.m())),R=Math.ceil(Math.log(E)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),C=c(E),P=C.j(_);A(P)||0<P.l(g);)E-=R,C=c(E),P=C.j(_);S(C)&&(C=p),k=k.add(C),g=T(g,P)}return new I(k,g)}t.A=function(g){return x(this,g).h},t.and=function(g){for(var _=Math.max(this.g.length,g.g.length),E=[],R=0;R<_;R++)E[R]=this.i(R)&g.i(R);return new o(E,this.h&g.h)},t.or=function(g){for(var _=Math.max(this.g.length,g.g.length),E=[],R=0;R<_;R++)E[R]=this.i(R)|g.i(R);return new o(E,this.h|g.h)},t.xor=function(g){for(var _=Math.max(this.g.length,g.g.length),E=[],R=0;R<_;R++)E[R]=this.i(R)^g.i(R);return new o(E,this.h^g.h)};function F(g){for(var _=g.g.length+1,E=[],R=0;R<_;R++)E[R]=g.i(R)<<1|g.i(R-1)>>>31;return new o(E,g.h)}function B(g,_){var E=_>>5;_%=32;for(var R=g.g.length-E,k=[],C=0;C<R;C++)k[C]=0<_?g.i(C+E)>>>_|g.i(C+E+1)<<32-_:g.i(C+E);return new o(k,g.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,CA=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Gs=o}).apply(typeof oI<"u"?oI:typeof self<"u"?self:typeof window<"u"?window:{});var _d=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kA,bA,nu,DA,$d,ag,xA,NA,OA;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,h,m){return u==Array.prototype||u==Object.prototype||(u[h]=m.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof _d=="object"&&_d];for(var h=0;h<u.length;++h){var m=u[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(u,h){if(h)e:{var m=r;u=u.split(".");for(var y=0;y<u.length-1;y++){var N=u[y];if(!(N in m))break e;m=m[N]}u=u[u.length-1],y=m[u],h=h(y),h!=y&&h!=null&&e(m,u,{configurable:!0,writable:!0,value:h})}}function s(u,h){u instanceof String&&(u+="");var m=0,y=!1,N={next:function(){if(!y&&m<u.length){var M=m++;return{value:h(M,u[M]),done:!1}}return y=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(u){return u||function(){return s(this,function(h,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var h=typeof u;return h=h!="object"?h:u?Array.isArray(u)?"array":h:"null",h=="array"||h=="object"&&typeof u.length=="number"}function c(u){var h=typeof u;return h=="object"&&u!=null||h=="function"}function d(u,h,m){return u.call.apply(u.bind,arguments)}function f(u,h,m){if(!u)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,y),u.apply(h,N)}}return function(){return u.apply(h,arguments)}}function p(u,h,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,p.apply(null,arguments)}function w(u,h){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),u.apply(this,y)}}function S(u,h){function m(){}m.prototype=h.prototype,u.aa=h.prototype,u.prototype=new m,u.prototype.constructor=u,u.Qb=function(y,N,M){for(var K=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)K[xe-2]=arguments[xe];return h.prototype[N].apply(y,K)}}function A(u){const h=u.length;if(0<h){const m=Array(h);for(let y=0;y<h;y++)m[y]=u[y];return m}return[]}function b(u,h){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(l(y)){const N=u.length||0,M=y.length||0;u.length=N+M;for(let K=0;K<M;K++)u[N+K]=y[K]}else u.push(y)}}class T{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(u){return/^[\s\xa0]*$/.test(u)}function I(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function x(u){return x[" "](u),u}x[" "]=function(){};var F=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function B(u,h,m){for(const y in u)h.call(m,u[y],y,u)}function g(u,h){for(const m in u)h.call(void 0,u[m],m,u)}function _(u){const h={};for(const m in u)h[m]=u[m];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(u,h){let m,y;for(let N=1;N<arguments.length;N++){y=arguments[N];for(m in y)u[m]=y[m];for(let M=0;M<E.length;M++)m=E[M],Object.prototype.hasOwnProperty.call(y,m)&&(u[m]=y[m])}}function k(u){var h=1;u=u.split(":");const m=[];for(;0<h&&u.length;)m.push(u.shift()),h--;return u.length&&m.push(u.join(":")),m}function C(u){a.setTimeout(()=>{throw u},0)}function P(){var u=ae;let h=null;return u.g&&(h=u.g,u.g=u.g.next,u.g||(u.h=null),h.next=null),h}class Ie{constructor(){this.h=this.g=null}add(h,m){const y=Rt.get();y.set(h,m),this.h?this.h.next=y:this.g=y,this.h=y}}var Rt=new T(()=>new _n,u=>u.reset());class _n{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Ht,H=!1,ae=new Ie,ue=()=>{const u=a.Promise.resolve(void 0);Ht=()=>{u.then(Ae)}};var Ae=()=>{for(var u;u=P();){try{u.h.call(u.g)}catch(m){C(m)}var h=Rt;h.j(u),100>h.h&&(h.h++,u.next=h.g,h.g=u)}H=!1};function pe(){this.s=this.s,this.C=this.C}pe.prototype.s=!1,pe.prototype.ma=function(){this.s||(this.s=!0,this.N())},pe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ke(u,h){this.type=u,this.g=this.target=h,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var rn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,h=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const m=()=>{};a.addEventListener("test",m,h),a.removeEventListener("test",m,h)}catch{}return u}();function vt(u,h){if(ke.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var m=this.type=u.type,y=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=h,h=u.relatedTarget){if(F){e:{try{x(h.nodeName);var N=!0;break e}catch{}N=!1}N||(h=null)}}else m=="mouseover"?h=u.fromElement:m=="mouseout"&&(h=u.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Vt[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&vt.aa.h.call(this)}}S(vt,ke);var Vt={2:"touch",3:"pen",4:"mouse"};vt.prototype.h=function(){vt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Lt="closure_listenable_"+(1e6*Math.random()|0),pl=0;function Qf(u,h,m,y,N){this.listener=u,this.proxy=null,this.src=h,this.type=m,this.capture=!!y,this.ha=N,this.key=++pl,this.da=this.fa=!1}function Ro(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Ao(u){this.src=u,this.g={},this.h=0}Ao.prototype.add=function(u,h,m,y,N){var M=u.toString();u=this.g[M],u||(u=this.g[M]=[],this.h++);var K=Or(u,h,y,N);return-1<K?(h=u[K],m||(h.fa=!1)):(h=new Qf(h,this.src,M,!!y,N),h.fa=m,u.push(h)),h};function Mt(u,h){var m=h.type;if(m in u.g){var y=u.g[m],N=Array.prototype.indexOf.call(y,h,void 0),M;(M=0<=N)&&Array.prototype.splice.call(y,N,1),M&&(Ro(h),u.g[m].length==0&&(delete u.g[m],u.h--))}}function Or(u,h,m,y){for(var N=0;N<u.length;++N){var M=u[N];if(!M.da&&M.listener==h&&M.capture==!!m&&M.ha==y)return N}return-1}var Po="closure_lm_"+(1e6*Math.random()|0),ml={};function fr(u,h,m,y,N){if(Array.isArray(h)){for(var M=0;M<h.length;M++)fr(u,h[M],m,y,N);return null}return m=ko(m),u&&u[Lt]?u.K(h,m,c(y)?!!y.capture:!!y,N):Yf(u,h,m,!1,y,N)}function Yf(u,h,m,y,N,M){if(!h)throw Error("Invalid event type");var K=c(N)?!!N.capture:!!N,xe=Vr(u);if(xe||(u[Po]=xe=new Ao(u)),m=xe.add(h,m,y,K,M),m.proxy)return m;if(y=Jf(),m.proxy=y,y.src=u,y.listener=m,u.addEventListener)rn||(N=K),N===void 0&&(N=!1),u.addEventListener(h.toString(),y,N);else if(u.attachEvent)u.attachEvent(Uc(h.toString()),y);else if(u.addListener&&u.removeListener)u.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Jf(){function u(m){return h.call(u.src,u.listener,m)}const h=ys;return u}function Fc(u,h,m,y,N){if(Array.isArray(h))for(var M=0;M<h.length;M++)Fc(u,h[M],m,y,N);else y=c(y)?!!y.capture:!!y,m=ko(m),u&&u[Lt]?(u=u.i,h=String(h).toString(),h in u.g&&(M=u.g[h],m=Or(M,m,y,N),-1<m&&(Ro(M[m]),Array.prototype.splice.call(M,m,1),M.length==0&&(delete u.g[h],u.h--)))):u&&(u=Vr(u))&&(h=u.g[h.toString()],u=-1,h&&(u=Or(h,m,y,N)),(m=-1<u?h[u]:null)&&gl(m))}function gl(u){if(typeof u!="number"&&u&&!u.da){var h=u.src;if(h&&h[Lt])Mt(h.i,u);else{var m=u.type,y=u.proxy;h.removeEventListener?h.removeEventListener(m,y,u.capture):h.detachEvent?h.detachEvent(Uc(m),y):h.addListener&&h.removeListener&&h.removeListener(y),(m=Vr(h))?(Mt(m,u),m.h==0&&(m.src=null,h[Po]=null)):Ro(u)}}}function Uc(u){return u in ml?ml[u]:ml[u]="on"+u}function ys(u,h){if(u.da)u=!0;else{h=new vt(h,this);var m=u.listener,y=u.ha||u.src;u.fa&&gl(u),u=m.call(y,h)}return u}function Vr(u){return u=u[Po],u instanceof Ao?u:null}var Co="__closure_events_fn_"+(1e9*Math.random()>>>0);function ko(u){return typeof u=="function"?u:(u[Co]||(u[Co]=function(h){return u.handleEvent(h)}),u[Co])}function Le(){pe.call(this),this.i=new Ao(this),this.M=this,this.F=null}S(Le,pe),Le.prototype[Lt]=!0,Le.prototype.removeEventListener=function(u,h,m,y){Fc(this,u,h,m,y)};function ct(u,h){var m,y=u.F;if(y)for(m=[];y;y=y.F)m.push(y);if(u=u.M,y=h.type||h,typeof h=="string")h=new ke(h,u);else if(h instanceof ke)h.target=h.target||u;else{var N=h;h=new ke(y,u),R(h,N)}if(N=!0,m)for(var M=m.length-1;0<=M;M--){var K=h.g=m[M];N=vs(K,y,!0,h)&&N}if(K=h.g=u,N=vs(K,y,!0,h)&&N,N=vs(K,y,!1,h)&&N,m)for(M=0;M<m.length;M++)K=h.g=m[M],N=vs(K,y,!1,h)&&N}Le.prototype.N=function(){if(Le.aa.N.call(this),this.i){var u=this.i,h;for(h in u.g){for(var m=u.g[h],y=0;y<m.length;y++)Ro(m[y]);delete u.g[h],u.h--}}this.F=null},Le.prototype.K=function(u,h,m,y){return this.i.add(String(u),h,!1,m,y)},Le.prototype.L=function(u,h,m,y){return this.i.add(String(u),h,!0,m,y)};function vs(u,h,m,y){if(h=u.i.g[String(h)],!h)return!0;h=h.concat();for(var N=!0,M=0;M<h.length;++M){var K=h[M];if(K&&!K.da&&K.capture==m){var xe=K.listener,Bt=K.ha||K.src;K.fa&&Mt(u.i,K),N=xe.call(Bt,y)!==!1&&N}}return N&&!y.defaultPrevented}function ws(u,h,m){if(typeof u=="function")m&&(u=p(u,m));else if(u&&typeof u.handleEvent=="function")u=p(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(u,h||0)}function Bc(u){u.g=ws(()=>{u.g=null,u.i&&(u.i=!1,Bc(u))},u.l);const h=u.h;u.h=null,u.m.apply(null,h)}class pr extends pe{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Bc(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mi(u){pe.call(this),this.h=u,this.g={}}S(mi,pe);var _l=[];function yl(u){B(u.g,function(h,m){this.g.hasOwnProperty(m)&&gl(h)},u),u.g={}}mi.prototype.N=function(){mi.aa.N.call(this),yl(this)},mi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vl=a.JSON.stringify,jc=a.JSON.parse,bo=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function Do(){}Do.prototype.h=null;function xo(u){return u.h||(u.h=u.i())}function zc(){}var gi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wl(){ke.call(this,"d")}S(wl,ke);function No(){ke.call(this,"c")}S(No,ke);var Lr={},D=null;function V(){return D=D||new Le}Lr.La="serverreachability";function U(u){ke.call(this,Lr.La,u)}S(U,ke);function W(u){const h=V();ct(h,new U(h))}Lr.STAT_EVENT="statevent";function Z(u,h){ke.call(this,Lr.STAT_EVENT,u),this.stat=h}S(Z,ke);function ie(u){const h=V();ct(h,new Z(h,u))}Lr.Ma="timingevent";function oe(u,h){ke.call(this,Lr.Ma,u),this.size=h}S(oe,ke);function X(u,h){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},h)}function ce(){this.g=!0}ce.prototype.xa=function(){this.g=!1};function de(u,h,m,y,N,M){u.info(function(){if(u.g)if(M)for(var K="",xe=M.split("&"),Bt=0;Bt<xe.length;Bt++){var Re=xe[Bt].split("=");if(1<Re.length){var Kt=Re[0];Re=Re[1];var Qt=Kt.split("_");K=2<=Qt.length&&Qt[1]=="type"?K+(Kt+"="+Re+"&"):K+(Kt+"=redacted&")}}else K=null;else K=M;return"XMLHTTP REQ ("+y+") [attempt "+N+"]: "+h+`
`+m+`
`+K})}function wt(u,h,m,y,N,M,K){u.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+N+"]: "+h+`
`+m+`
`+M+" "+K})}function ze(u,h,m,y){u.info(function(){return"XMLHTTP TEXT ("+h+"): "+Ne(u,m)+(y?" "+y:"")})}function le(u,h){u.info(function(){return"TIMEOUT: "+h})}ce.prototype.info=function(){};function Ne(u,h){if(!u.g)return h;if(!h)return null;try{var m=JSON.parse(h);if(m){for(u=0;u<m.length;u++)if(Array.isArray(m[u])){var y=m[u];if(!(2>y.length)){var N=y[1];if(Array.isArray(N)&&!(1>N.length)){var M=N[0];if(M!="noop"&&M!="stop"&&M!="close")for(var K=1;K<N.length;K++)N[K]=""}}}}return vl(m)}catch{return h}}var Qe={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_i={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Bn;function er(){}S(er,Do),er.prototype.g=function(){return new XMLHttpRequest},er.prototype.i=function(){return{}},Bn=new er;function sn(u,h,m,y){this.j=u,this.i=h,this.l=m,this.R=y||1,this.U=new mi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Mr}function Mr(){this.i=null,this.g="",this.h=!1}var Cn={},yi={};function vi(u,h,m){u.L=1,u.v=Wc(Br(h)),u.m=m,u.P=!0,Es(u,null)}function Es(u,h){u.F=Date.now(),Ut(u),u.A=Br(u.v);var m=u.A,y=u.R;Array.isArray(y)||(y=[String(y)]),Dv(m.i,"t",y),u.C=0,m=u.j.J,u.h=new Mr,u.g=Qv(u.j,m?h:null,!u.m),0<u.O&&(u.M=new pr(p(u.Y,u,u.g),u.O)),h=u.U,m=u.g,y=u.ca;var N="readystatechange";Array.isArray(N)||(N&&(_l[0]=N.toString()),N=_l);for(var M=0;M<N.length;M++){var K=fr(m,N[M],y||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=u.H?_(u.H):{},u.m?(u.u||(u.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,h)):(u.u="GET",u.g.ea(u.A,u.u,null,h)),W(),de(u.i,u.u,u.A,u.l,u.R,u.m)}sn.prototype.ca=function(u){u=u.target;const h=this.M;h&&jr(u)==3?h.j():this.Y(u)},sn.prototype.Y=function(u){try{if(u==this.g)e:{const Qt=jr(this.g);var h=this.g.Ba();const Lo=this.g.Z();if(!(3>Qt)&&(Qt!=3||this.g&&(this.h.h||this.g.oa()||Fv(this.g)))){this.J||Qt!=4||h==7||(h==8||0>=Lo?W(3):W(2)),Fr(this);var m=this.g.Z();this.X=m;t:if(me(this)){var y=Fv(this.g);u="";var N=y.length,M=jr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ur(this),wi(this);var K="";break t}this.h.i=new a.TextDecoder}for(h=0;h<N;h++)this.h.h=!0,u+=this.h.i.decode(y[h],{stream:!(M&&h==N-1)});y.length=0,this.h.g+=u,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=m==200,wt(this.i,this.u,this.A,this.l,this.R,Qt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,Bt=this.g;if((xe=Bt.g?Bt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(xe)){var Re=xe;break t}}Re=null}if(m=Re)ze(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xf(this,m);else{this.o=!1,this.s=3,ie(12),Ur(this),wi(this);break e}}if(this.P){m=!0;let tr;for(;!this.J&&this.C<K.length;)if(tr=Ft(this,K),tr==yi){Qt==4&&(this.s=4,ie(14),m=!1),ze(this.i,this.l,null,"[Incomplete Response]");break}else if(tr==Cn){this.s=4,ie(15),ze(this.i,this.l,K,"[Invalid Chunk]"),m=!1;break}else ze(this.i,this.l,tr,null),Xf(this,tr);if(me(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Qt!=4||K.length!=0||this.h.h||(this.s=1,ie(16),m=!1),this.o=this.o&&m,!m)ze(this.i,this.l,K,"[Invalid Chunked Response]"),Ur(this),wi(this);else if(0<K.length&&!this.W){this.W=!0;var Kt=this.j;Kt.g==this&&Kt.ba&&!Kt.M&&(Kt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),ip(Kt),Kt.M=!0,ie(11))}}else ze(this.i,this.l,K,null),Xf(this,K);Qt==4&&Ur(this),this.o&&!this.J&&(Qt==4?Wv(this.j,this):(this.o=!1,Ut(this)))}else W1(this.g),m==400&&0<K.indexOf("Unknown SID")?(this.s=3,ie(12)):(this.s=0,ie(13)),Ur(this),wi(this)}}}catch{}finally{}};function me(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Ft(u,h){var m=u.C,y=h.indexOf(`
`,m);return y==-1?yi:(m=Number(h.substring(m,y)),isNaN(m)?Cn:(y+=1,y+m>h.length?yi:(h=h.slice(y,y+m),u.C=y+m,h)))}sn.prototype.cancel=function(){this.J=!0,Ur(this)};function Ut(u){u.S=Date.now()+u.I,pt(u,u.I)}function pt(u,h){if(u.B!=null)throw Error("WatchDog timer not null");u.B=X(p(u.ba,u),h)}function Fr(u){u.B&&(a.clearTimeout(u.B),u.B=null)}sn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(le(this.i,this.A),this.L!=2&&(W(),ie(17)),Ur(this),this.s=2,wi(this)):pt(this,this.S-u)};function wi(u){u.j.G==0||u.J||Wv(u.j,u)}function Ur(u){Fr(u);var h=u.M;h&&typeof h.ma=="function"&&h.ma(),u.M=null,yl(u.U),u.g&&(h=u.g,u.g=null,h.abort(),h.ma())}function Xf(u,h){try{var m=u.j;if(m.G!=0&&(m.g==u||Zf(m.h,u))){if(!u.K&&Zf(m.h,u)&&m.G==3){try{var y=m.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var N=y;if(N[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<u.F)Yc(m),Kc(m);else break e;rp(m),ie(18)}}else m.za=N[1],0<m.za-m.T&&37500>N[2]&&m.F&&m.v==0&&!m.C&&(m.C=X(p(m.Za,m),6e3));if(1>=Iv(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Ts(m,11)}else if((u.K||m.g==u)&&Yc(m),!v(h))for(N=m.Da.g.parse(h),h=0;h<N.length;h++){let Re=N[h];if(m.T=Re[0],Re=Re[1],m.G==2)if(Re[0]=="c"){m.K=Re[1],m.ia=Re[2];const Kt=Re[3];Kt!=null&&(m.la=Kt,m.j.info("VER="+m.la));const Qt=Re[4];Qt!=null&&(m.Aa=Qt,m.j.info("SVER="+m.Aa));const Lo=Re[5];Lo!=null&&typeof Lo=="number"&&0<Lo&&(y=1.5*Lo,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const tr=u.g;if(tr){const Xc=tr.g?tr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xc){var M=y.h;M.g||Xc.indexOf("spdy")==-1&&Xc.indexOf("quic")==-1&&Xc.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(ep(M,M.h),M.h=null))}if(y.D){const sp=tr.g?tr.g.getResponseHeader("X-HTTP-Session-Id"):null;sp&&(y.ya=sp,Me(y.I,y.D,sp))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-u.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var K=u;if(y.qa=Kv(y,y.J?y.ia:null,y.W),K.K){Tv(y.h,K);var xe=K,Bt=y.L;Bt&&(xe.I=Bt),xe.B&&(Fr(xe),Ut(xe)),y.g=K}else $v(y);0<m.i.length&&Qc(m)}else Re[0]!="stop"&&Re[0]!="close"||Ts(m,7);else m.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?Ts(m,7):np(m):Re[0]!="noop"&&m.l&&m.l.ta(Re),m.v=0)}}W(4)}catch{}}var k1=class{constructor(u,h){this.g=u,this.map=h}};function wv(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ev(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Iv(u){return u.h?1:u.g?u.g.size:0}function Zf(u,h){return u.h?u.h==h:u.g?u.g.has(h):!1}function ep(u,h){u.g?u.g.add(h):u.h=h}function Tv(u,h){u.h&&u.h==h?u.h=null:u.g&&u.g.has(h)&&u.g.delete(h)}wv.prototype.cancel=function(){if(this.i=Sv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Sv(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let h=u.i;for(const m of u.g.values())h=h.concat(m.D);return h}return A(u.i)}function b1(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var h=[],m=u.length,y=0;y<m;y++)h.push(u[y]);return h}h=[],m=0;for(y in u)h[m++]=u[y];return h}function D1(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var h=[];u=u.length;for(var m=0;m<u;m++)h.push(m);return h}h=[],m=0;for(const y in u)h[m++]=y;return h}}}function Rv(u,h){if(u.forEach&&typeof u.forEach=="function")u.forEach(h,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,h,void 0);else for(var m=D1(u),y=b1(u),N=y.length,M=0;M<N;M++)h.call(void 0,y[M],m&&m[M],u)}var Av=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function x1(u,h){if(u){u=u.split("&");for(var m=0;m<u.length;m++){var y=u[m].indexOf("="),N=null;if(0<=y){var M=u[m].substring(0,y);N=u[m].substring(y+1)}else M=u[m];h(M,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Is(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Is){this.h=u.h,$c(this,u.j),this.o=u.o,this.g=u.g,qc(this,u.s),this.l=u.l;var h=u.i,m=new Tl;m.i=h.i,h.g&&(m.g=new Map(h.g),m.h=h.h),Pv(this,m),this.m=u.m}else u&&(h=String(u).match(Av))?(this.h=!1,$c(this,h[1]||"",!0),this.o=El(h[2]||""),this.g=El(h[3]||"",!0),qc(this,h[4]),this.l=El(h[5]||"",!0),Pv(this,h[6]||"",!0),this.m=El(h[7]||"")):(this.h=!1,this.i=new Tl(null,this.h))}Is.prototype.toString=function(){var u=[],h=this.j;h&&u.push(Il(h,Cv,!0),":");var m=this.g;return(m||h=="file")&&(u.push("//"),(h=this.o)&&u.push(Il(h,Cv,!0),"@"),u.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&u.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&u.push("/"),u.push(Il(m,m.charAt(0)=="/"?V1:O1,!0))),(m=this.i.toString())&&u.push("?",m),(m=this.m)&&u.push("#",Il(m,M1)),u.join("")};function Br(u){return new Is(u)}function $c(u,h,m){u.j=m?El(h,!0):h,u.j&&(u.j=u.j.replace(/:$/,""))}function qc(u,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);u.s=h}else u.s=null}function Pv(u,h,m){h instanceof Tl?(u.i=h,F1(u.i,u.h)):(m||(h=Il(h,L1)),u.i=new Tl(h,u.h))}function Me(u,h,m){u.i.set(h,m)}function Wc(u){return Me(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function El(u,h){return u?h?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Il(u,h,m){return typeof u=="string"?(u=encodeURI(u).replace(h,N1),m&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function N1(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Cv=/[#\/\?@]/g,O1=/[#\?:]/g,V1=/[#\?]/g,L1=/[#\?@]/g,M1=/#/g;function Tl(u,h){this.h=this.g=null,this.i=u||null,this.j=!!h}function Ei(u){u.g||(u.g=new Map,u.h=0,u.i&&x1(u.i,function(h,m){u.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}t=Tl.prototype,t.add=function(u,h){Ei(this),this.i=null,u=Oo(this,u);var m=this.g.get(u);return m||this.g.set(u,m=[]),m.push(h),this.h+=1,this};function kv(u,h){Ei(u),h=Oo(u,h),u.g.has(h)&&(u.i=null,u.h-=u.g.get(h).length,u.g.delete(h))}function bv(u,h){return Ei(u),h=Oo(u,h),u.g.has(h)}t.forEach=function(u,h){Ei(this),this.g.forEach(function(m,y){m.forEach(function(N){u.call(h,N,y,this)},this)},this)},t.na=function(){Ei(this);const u=Array.from(this.g.values()),h=Array.from(this.g.keys()),m=[];for(let y=0;y<h.length;y++){const N=u[y];for(let M=0;M<N.length;M++)m.push(h[y])}return m},t.V=function(u){Ei(this);let h=[];if(typeof u=="string")bv(this,u)&&(h=h.concat(this.g.get(Oo(this,u))));else{u=Array.from(this.g.values());for(let m=0;m<u.length;m++)h=h.concat(u[m])}return h},t.set=function(u,h){return Ei(this),this.i=null,u=Oo(this,u),bv(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[h]),this.h+=1,this},t.get=function(u,h){return u?(u=this.V(u),0<u.length?String(u[0]):h):h};function Dv(u,h,m){kv(u,h),0<m.length&&(u.i=null,u.g.set(Oo(u,h),A(m)),u.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],h=Array.from(this.g.keys());for(var m=0;m<h.length;m++){var y=h[m];const M=encodeURIComponent(String(y)),K=this.V(y);for(y=0;y<K.length;y++){var N=M;K[y]!==""&&(N+="="+encodeURIComponent(String(K[y]))),u.push(N)}}return this.i=u.join("&")};function Oo(u,h){return h=String(h),u.j&&(h=h.toLowerCase()),h}function F1(u,h){h&&!u.j&&(Ei(u),u.i=null,u.g.forEach(function(m,y){var N=y.toLowerCase();y!=N&&(kv(this,y),Dv(this,N,m))},u)),u.j=h}function U1(u,h){const m=new ce;if(a.Image){const y=new Image;y.onload=w(Ii,m,"TestLoadImage: loaded",!0,h,y),y.onerror=w(Ii,m,"TestLoadImage: error",!1,h,y),y.onabort=w(Ii,m,"TestLoadImage: abort",!1,h,y),y.ontimeout=w(Ii,m,"TestLoadImage: timeout",!1,h,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=u}else h(!1)}function B1(u,h){const m=new ce,y=new AbortController,N=setTimeout(()=>{y.abort(),Ii(m,"TestPingServer: timeout",!1,h)},1e4);fetch(u,{signal:y.signal}).then(M=>{clearTimeout(N),M.ok?Ii(m,"TestPingServer: ok",!0,h):Ii(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),Ii(m,"TestPingServer: error",!1,h)})}function Ii(u,h,m,y,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),y(m)}catch{}}function j1(){this.g=new bo}function z1(u,h,m){const y=m||"";try{Rv(u,function(N,M){let K=N;c(N)&&(K=vl(N)),h.push(y+M+"="+encodeURIComponent(K))})}catch(N){throw h.push(y+"type="+encodeURIComponent("_badmap")),N}}function Sl(u){this.l=u.Ub||null,this.j=u.eb||!1}S(Sl,Do),Sl.prototype.g=function(){return new Gc(this.l,this.j)},Sl.prototype.i=function(u){return function(){return u}}({});function Gc(u,h){Le.call(this),this.D=u,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Gc,Le),t=Gc.prototype,t.open=function(u,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=h,this.readyState=1,Al(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(h.body=u),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rl(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Al(this)),this.g&&(this.readyState=3,Al(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xv(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function xv(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var h=u.value?u.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!u.done}))&&(this.response=this.responseText+=h)}u.done?Rl(this):Al(this),this.readyState==3&&xv(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,Rl(this))},t.Qa=function(u){this.g&&(this.response=u,Rl(this))},t.ga=function(){this.g&&Rl(this)};function Rl(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Al(u)}t.setRequestHeader=function(u,h){this.u.append(u,h)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,u.push(m[0]+": "+m[1]),m=h.next();return u.join(`\r
`)};function Al(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Gc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Nv(u){let h="";return B(u,function(m,y){h+=y,h+=":",h+=m,h+=`\r
`}),h}function tp(u,h,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=Nv(m),typeof u=="string"?m!=null&&encodeURIComponent(String(m)):Me(u,h,m))}function nt(u){Le.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(nt,Le);var $1=/^https?$/i,q1=["POST","PUT"];t=nt.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,h,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);h=h?h.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Bn.g(),this.v=this.o?xo(this.o):xo(Bn),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(h,String(u),!0),this.B=!1}catch(M){Ov(this,M);return}if(u=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var N in y)m.set(N,y[N]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const M of y.keys())m.set(M,y.get(M));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(M=>M.toLowerCase()=="content-type"),N=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(q1,h,void 0))||y||N||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,K]of m)this.g.setRequestHeader(M,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Mv(this),this.u=!0,this.g.send(u),this.u=!1}catch(M){Ov(this,M)}};function Ov(u,h){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=h,u.m=5,Vv(u),Hc(u)}function Vv(u){u.A||(u.A=!0,ct(u,"complete"),ct(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ct(this,"complete"),ct(this,"abort"),Hc(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hc(this,!0)),nt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Lv(this):this.bb())},t.bb=function(){Lv(this)};function Lv(u){if(u.h&&typeof o<"u"&&(!u.v[1]||jr(u)!=4||u.Z()!=2)){if(u.u&&jr(u)==4)ws(u.Ea,0,u);else if(ct(u,"readystatechange"),jr(u)==4){u.h=!1;try{const K=u.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var y;if(y=K===0){var N=String(u.D).match(Av)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),y=!$1.test(N?N.toLowerCase():"")}m=y}if(m)ct(u,"complete"),ct(u,"success");else{u.m=6;try{var M=2<jr(u)?u.g.statusText:""}catch{M=""}u.l=M+" ["+u.Z()+"]",Vv(u)}}finally{Hc(u)}}}}function Hc(u,h){if(u.g){Mv(u);const m=u.g,y=u.v[0]?()=>{}:null;u.g=null,u.v=null,h||ct(u,"ready");try{m.onreadystatechange=y}catch{}}}function Mv(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function jr(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<jr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var h=this.g.responseText;return u&&h.indexOf(u)==0&&(h=h.substring(u.length)),jc(h)}};function Fv(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function W1(u){const h={};u=(u.g&&2<=jr(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<u.length;y++){if(v(u[y]))continue;var m=k(u[y]);const N=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const M=h[N]||[];h[N]=M,M.push(m)}g(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Pl(u,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[u]||h}function Uv(u){this.Aa=0,this.i=[],this.j=new ce,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Pl("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Pl("baseRetryDelayMs",5e3,u),this.cb=Pl("retryDelaySeedMs",1e4,u),this.Wa=Pl("forwardChannelMaxRetries",2,u),this.wa=Pl("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new wv(u&&u.concurrentRequestLimit),this.Da=new j1,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Uv.prototype,t.la=8,t.G=1,t.connect=function(u,h,m,y){ie(0),this.W=u,this.H=h||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=Kv(this,null,this.W),Qc(this)};function np(u){if(Bv(u),u.G==3){var h=u.U++,m=Br(u.I);if(Me(m,"SID",u.K),Me(m,"RID",h),Me(m,"TYPE","terminate"),Cl(u,m),h=new sn(u,u.j,h),h.L=2,h.v=Wc(Br(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=h.v,m=!0),m||(h.g=Qv(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ut(h)}Hv(u)}function Kc(u){u.g&&(ip(u),u.g.cancel(),u.g=null)}function Bv(u){Kc(u),u.u&&(a.clearTimeout(u.u),u.u=null),Yc(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function Qc(u){if(!Ev(u.h)&&!u.s){u.s=!0;var h=u.Ga;Ht||ue(),H||(Ht(),H=!0),ae.add(h,u),u.B=0}}function G1(u,h){return Iv(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=h.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=X(p(u.Ga,u,h),Gv(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const N=new sn(this,this.j,u);let M=this.o;if(this.S&&(M?(M=_(M),R(M,this.S)):M=this.S),this.m!==null||this.O||(N.H=M,M=null),this.P)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=zv(this,N,h),m=Br(this.I),Me(m,"RID",u),Me(m,"CVER",22),this.D&&Me(m,"X-HTTP-Session-Id",this.D),Cl(this,m),M&&(this.O?h="headers="+encodeURIComponent(String(Nv(M)))+"&"+h:this.m&&tp(m,this.m,M)),ep(this.h,N),this.Ua&&Me(m,"TYPE","init"),this.P?(Me(m,"$req",h),Me(m,"SID","null"),N.T=!0,vi(N,m,null)):vi(N,m,h),this.G=2}}else this.G==3&&(u?jv(this,u):this.i.length==0||Ev(this.h)||jv(this))};function jv(u,h){var m;h?m=h.l:m=u.U++;const y=Br(u.I);Me(y,"SID",u.K),Me(y,"RID",m),Me(y,"AID",u.T),Cl(u,y),u.m&&u.o&&tp(y,u.m,u.o),m=new sn(u,u.j,m,u.B+1),u.m===null&&(m.H=u.o),h&&(u.i=h.D.concat(u.i)),h=zv(u,m,1e3),m.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ep(u.h,m),vi(m,y,h)}function Cl(u,h){u.H&&B(u.H,function(m,y){Me(h,y,m)}),u.l&&Rv({},function(m,y){Me(h,y,m)})}function zv(u,h,m){m=Math.min(u.i.length,m);var y=u.l?p(u.l.Na,u.l,u):null;e:{var N=u.i;let M=-1;for(;;){const K=["count="+m];M==-1?0<m?(M=N[0].g,K.push("ofs="+M)):M=0:K.push("ofs="+M);let xe=!0;for(let Bt=0;Bt<m;Bt++){let Re=N[Bt].g;const Kt=N[Bt].map;if(Re-=M,0>Re)M=Math.max(0,N[Bt].g-100),xe=!1;else try{z1(Kt,K,"req"+Re+"_")}catch{y&&y(Kt)}}if(xe){y=K.join("&");break e}}}return u=u.i.splice(0,m),h.D=u,y}function $v(u){if(!u.g&&!u.u){u.Y=1;var h=u.Fa;Ht||ue(),H||(Ht(),H=!0),ae.add(h,u),u.v=0}}function rp(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=X(p(u.Fa,u),Gv(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,qv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=X(p(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ie(10),Kc(this),qv(this))};function ip(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function qv(u){u.g=new sn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var h=Br(u.qa);Me(h,"RID","rpc"),Me(h,"SID",u.K),Me(h,"AID",u.T),Me(h,"CI",u.F?"0":"1"),!u.F&&u.ja&&Me(h,"TO",u.ja),Me(h,"TYPE","xmlhttp"),Cl(u,h),u.m&&u.o&&tp(h,u.m,u.o),u.L&&(u.g.I=u.L);var m=u.g;u=u.ia,m.L=1,m.v=Wc(Br(h)),m.m=null,m.P=!0,Es(m,u)}t.Za=function(){this.C!=null&&(this.C=null,Kc(this),rp(this),ie(19))};function Yc(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function Wv(u,h){var m=null;if(u.g==h){Yc(u),ip(u),u.g=null;var y=2}else if(Zf(u.h,h))m=h.D,Tv(u.h,h),y=1;else return;if(u.G!=0){if(h.o)if(y==1){m=h.m?h.m.length:0,h=Date.now()-h.F;var N=u.B;y=V(),ct(y,new oe(y,m)),Qc(u)}else $v(u);else if(N=h.s,N==3||N==0&&0<h.X||!(y==1&&G1(u,h)||y==2&&rp(u)))switch(m&&0<m.length&&(h=u.h,h.i=h.i.concat(m)),N){case 1:Ts(u,5);break;case 4:Ts(u,10);break;case 3:Ts(u,6);break;default:Ts(u,2)}}}function Gv(u,h){let m=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(m*=2),m*h}function Ts(u,h){if(u.j.info("Error code "+h),h==2){var m=p(u.fb,u),y=u.Xa;const N=!y;y=new Is(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||$c(y,"https"),Wc(y),N?U1(y.toString(),m):B1(y.toString(),m)}else ie(2);u.G=0,u.l&&u.l.sa(h),Hv(u),Bv(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ie(2)):(this.j.info("Failed to ping google.com"),ie(1))};function Hv(u){if(u.G=0,u.ka=[],u.l){const h=Sv(u.h);(h.length!=0||u.i.length!=0)&&(b(u.ka,h),b(u.ka,u.i),u.h.i.length=0,A(u.i),u.i.length=0),u.l.ra()}}function Kv(u,h,m){var y=m instanceof Is?Br(m):new Is(m);if(y.g!="")h&&(y.g=h+"."+y.g),qc(y,y.s);else{var N=a.location;y=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;var M=new Is(null);y&&$c(M,y),h&&(M.g=h),N&&qc(M,N),m&&(M.l=m),y=M}return m=u.D,h=u.ya,m&&h&&Me(y,m,h),Me(y,"VER",u.la),Cl(u,y),y}function Qv(u,h,m){if(h&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=u.Ca&&!u.pa?new nt(new Sl({eb:m})):new nt(u.pa),h.Ha(u.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yv(){}t=Yv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Jc(){}Jc.prototype.g=function(u,h){return new kn(u,h)};function kn(u,h){Le.call(this),this.g=new Uv(h),this.l=u,this.h=h&&h.messageUrlParams||null,u=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(u?u["X-WebChannel-Content-Type"]=h.messageContentType:u={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(u?u["X-WebChannel-Client-Profile"]=h.va:u={"X-WebChannel-Client-Profile":h.va}),this.g.S=u,(u=h&&h.Sb)&&!v(u)&&(this.g.m=u),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,u=this.h,u!==null&&h in u&&(u=this.h,h in u&&delete u[h])),this.j=new Vo(this)}S(kn,Le),kn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},kn.prototype.close=function(){np(this.g)},kn.prototype.o=function(u){var h=this.g;if(typeof u=="string"){var m={};m.__data__=u,u=m}else this.u&&(m={},m.__data__=vl(u),u=m);h.i.push(new k1(h.Ya++,u)),h.G==3&&Qc(h)},kn.prototype.N=function(){this.g.l=null,delete this.j,np(this.g),delete this.g,kn.aa.N.call(this)};function Jv(u){wl.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var h=u.__sm__;if(h){e:{for(const m in h){u=m;break e}u=void 0}(this.i=u)&&(u=this.i,h=h!==null&&u in h?h[u]:void 0),this.data=h}else this.data=u}S(Jv,wl);function Xv(){No.call(this),this.status=1}S(Xv,No);function Vo(u){this.g=u}S(Vo,Yv),Vo.prototype.ua=function(){ct(this.g,"a")},Vo.prototype.ta=function(u){ct(this.g,new Jv(u))},Vo.prototype.sa=function(u){ct(this.g,new Xv)},Vo.prototype.ra=function(){ct(this.g,"b")},Jc.prototype.createWebChannel=Jc.prototype.g,kn.prototype.send=kn.prototype.o,kn.prototype.open=kn.prototype.m,kn.prototype.close=kn.prototype.close,OA=function(){return new Jc},NA=function(){return V()},xA=Lr,ag={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Qe.NO_ERROR=0,Qe.TIMEOUT=8,Qe.HTTP_ERROR=6,$d=Qe,_i.COMPLETE="complete",DA=_i,zc.EventType=gi,gi.OPEN="a",gi.CLOSE="b",gi.ERROR="c",gi.MESSAGE="d",Le.prototype.listen=Le.prototype.K,nu=zc,bA=Sl,nt.prototype.listenOnce=nt.prototype.L,nt.prototype.getLastError=nt.prototype.Ka,nt.prototype.getLastErrorCode=nt.prototype.Ba,nt.prototype.getStatus=nt.prototype.Z,nt.prototype.getResponseJson=nt.prototype.Oa,nt.prototype.getResponseText=nt.prototype.oa,nt.prototype.send=nt.prototype.ea,nt.prototype.setWithCredentials=nt.prototype.Ha,kA=nt}).apply(typeof _d<"u"?_d:typeof self<"u"?self:typeof window<"u"?window:{});const aI="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ct.UNAUTHENTICATED=new Ct(null),Ct.GOOGLE_CREDENTIALS=new Ct("google-credentials-uid"),Ct.FIRST_PARTY=new Ct("first-party-uid"),Ct.MOCK_USER=new Ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sl="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new df("@firebase/firestore");function Wo(){return es.logLevel}function zF(t){es.setLogLevel(t)}function $(t,...e){if(es.logLevel<=ge.DEBUG){const n=e.map(hy);es.debug(`Firestore (${sl}): ${t}`,...n)}}function ht(t,...e){if(es.logLevel<=ge.ERROR){const n=e.map(hy);es.error(`Firestore (${sl}): ${t}`,...n)}}function hr(t,...e){if(es.logLevel<=ge.WARN){const n=e.map(hy);es.warn(`Firestore (${sl}): ${t}`,...n)}}function hy(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${sl}) INTERNAL ASSERTION FAILED: `+t;throw ht(e),new Error(e)}function re(t,e){t||ee()}function $F(t,e){t||ee()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qF{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ct.UNAUTHENTICATED))}shutdown(){}}class WF{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class GF{constructor(e){this.t=e,this.currentUser=Ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Dt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Dt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Dt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(re(typeof r.accessToken=="string"),new VA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new Ct(e)}}class HF{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class KF{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new HF(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class QF{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class YF{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(re(typeof n.token=="string"),this.R=n.token,new QF(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JF(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=JF(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function Ma(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function MA(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new He(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new He(0,0))}static max(){return new se(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Xu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Xu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ve extends Xu{construct(e,n,r){return new ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const XF=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends Xu{construct(e,n,r){return new We(e,n,r)}static isValidIdentifier(e){return XF.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new We(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new z(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new z(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(ve.fromString(e))}static fromName(e){return new Y(ve.fromString(e).popFirst(5))}static empty(){return new Y(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new ve(e.slice()))}}/**
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
 */class xh{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function lg(t){return t.fields.find(e=>e.kind===2)}function Cs(t){return t.fields.filter(e=>e.kind!==2)}xh.UNKNOWN_ID=-1;class qd{constructor(e,n){this.fieldPath=e,this.kind=n}}class Zu{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Zu(0,Mn.min())}}function FA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=se.fromTimestamp(r===1e9?new He(n+1,0):new He(n,r));return new Mn(i,Y.empty(),e)}function UA(t){return new Mn(t.readTime,t.key,-1)}class Mn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Mn(se.min(),Y.empty(),-1)}static max(){return new Mn(se.max(),Y.empty(),-1)}}function fy(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==BA)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new Dt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new vu(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=py(r.target.error);this.V.reject(new vu(e,i))}}static open(e,n,r,i){try{return new Sf(n,e.transaction(i,r))}catch(s){throw new vu(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||($("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new e2(n)}}class Cr{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Cr.S(Ke())===12.2&&ht("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return $("SimpleDb","Removing database:",e),ks(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Wu())return!1;if(Cr.C())return!0;const e=Ke(),n=Cr.S(e),r=0<n&&n<10,i=zA(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.v)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||($("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new vu(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new z(L.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new z(L.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new vu(e,o))},i.onupgradeneeded=s=>{$("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{$("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Sf.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),O.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if($("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function zA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class ZF{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return ks(this.B.delete())}}class vu extends z{constructor(e,n){super(L.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function ps(t){return t.name==="IndexedDbTransactionError"}class e2{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?($("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):($("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ks(r)}add(e){return $("SimpleDb","ADD",this.store.name,e,e),ks(this.store.add(e))}get(e){return ks(this.store.get(e)).next(n=>(n===void 0&&(n=null),$("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return $("SimpleDb","DELETE",this.store.name,e),ks(this.store.delete(e))}count(){return $("SimpleDb","COUNT",this.store.name),ks(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new O((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,l)=>{o.push(l)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new O((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){$("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new O((r,i)=>{n.onerror=s=>{const o=py(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new O((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new ZF(a),c=n(a.primaryKey,a.value,l);if(c instanceof O){const d=c.catch(f=>(l.done(),O.reject(f)));r.push(d)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>O.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ks(t){return new O((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=py(r.target.error);n(i)}})}let lI=!1;function py(t){const e=Cr.S(Ke());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new z("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return lI||(lI=!0,setTimeout(()=>{throw r},0)),r}}return t}class t2{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){$("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{$("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){ps(n)?$("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await fs(n)}await this.X(6e4)})}}class n2{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return O.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return $("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>($("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=UA(s);fy(o,r)>0&&(r=o)}),new Mn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class In{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}In.oe=-1;function Sc(t){return t==null}function ec(t){return t===0&&1/t==-1/0}function $A(t){return typeof t=="number"&&Number.isInteger(t)&&!ec(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=uI(e)),e=r2(t.get(n),e);return uI(e)}function r2(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function uI(t){return t+""}function Sr(t){const e=t.length;if(re(e>=2),e===2)return re(t.charAt(0)===""&&t.charAt(1)===""),ve.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&ee(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:ee()}s=o+2}return new ve(r)}/**
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
 */const cI=["userId","batchId"];/**
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
 */function Wd(t,e){return[t,hn(e)]}function qA(t,e,n){return[t,hn(e),n]}const i2={},s2=["prefixPath","collectionGroup","readTime","documentId"],o2=["prefixPath","collectionGroup","documentId"],a2=["collectionGroup","readTime","prefixPath","documentId"],l2=["canonicalId","targetId"],u2=["targetId","path"],c2=["path","targetId"],d2=["collectionId","parent"],h2=["indexId","uid"],f2=["uid","sequenceNumber"],p2=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],m2=["indexId","uid","orderedDocumentKey"],g2=["userId","collectionPath","documentId"],_2=["userId","collectionPath","largestBatchId"],y2=["userId","collectionGroup","largestBatchId"],WA=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],v2=[...WA,"documentOverlays"],GA=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],HA=GA,KA=[...HA,"indexConfiguration","indexState","indexEntries"],w2=KA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug extends jA{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function Nt(t,e){const n=J(t);return Cr.F(n._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function QA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){this.comparator=e,this.root=n||$t.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$t.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$t.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yd(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yd(this.root,e,this.comparator,!1)}getReverseIterator(){return new yd(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yd(this.root,e,this.comparator,!0)}}class yd{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $t{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??$t.RED,this.left=i??$t.EMPTY,this.right=s??$t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new $t(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return $t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return $t.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}$t.EMPTY=null,$t.RED=!0,$t.BLACK=!1;$t.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,r,i,s){return this}insert(e,n,r){return new $t(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new hI(this.data.getIterator())}getIteratorFrom(e){return new hI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof De)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new De(this.comparator);return n.data=e,n}}class hI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Bo(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new Tn([])}unionWith(e){let n=new De(We.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Tn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ma(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class YA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E2(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new YA("Invalid base64 string: "+s):s}}(e);return new St(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new St(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}St.EMPTY_BYTE_STRING=new St("");const I2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function si(t){if(re(!!t),typeof t=="string"){let e=0;const n=I2.exec(t);if(re(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:it(t.seconds),nanos:it(t.nanos)}}function it(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ts(t){return typeof t=="string"?St.fromBase64String(t):St.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function my(t){const e=t.mapValue.fields.__previous_value__;return Rf(e)?my(e):e}function tc(t){const e=si(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class ns{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ns("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ns&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Gd={nullValue:"NULL_VALUE"};function ro(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Rf(t)?4:JA(t)?9007199254740991:10:ee()}function xr(t,e){if(t===e)return!0;const n=ro(t);if(n!==ro(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return tc(t).isEqual(tc(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=si(i.timestampValue),a=si(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ts(i.bytesValue).isEqual(ts(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return it(i.geoPointValue.latitude)===it(s.geoPointValue.latitude)&&it(i.geoPointValue.longitude)===it(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return it(i.integerValue)===it(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=it(i.doubleValue),a=it(s.doubleValue);return o===a?ec(o)===ec(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ma(t.arrayValue.values||[],e.arrayValue.values||[],xr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(dI(o)!==dI(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!xr(o[l],a[l])))return!1;return!0}(t,e);default:return ee()}}function nc(t,e){return(t.values||[]).find(n=>xr(n,e))!==void 0}function rs(t,e){if(t===e)return 0;const n=ro(t),r=ro(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=it(s.integerValue||s.doubleValue),l=it(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return fI(t.timestampValue,e.timestampValue);case 4:return fI(tc(t),tc(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ts(s),l=ts(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const d=he(a[c],l[c]);if(d!==0)return d}return he(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=he(it(s.latitude),it(o.latitude));return a!==0?a:he(it(s.longitude),it(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const d=rs(a[c],l[c]);if(d)return d}return he(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Fi.mapValue&&o===Fi.mapValue)return 0;if(s===Fi.mapValue)return 1;if(o===Fi.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},d=Object.keys(c);l.sort(),d.sort();for(let f=0;f<l.length&&f<d.length;++f){const p=he(l[f],d[f]);if(p!==0)return p;const w=rs(a[l[f]],c[d[f]]);if(w!==0)return w}return he(l.length,d.length)}(t.mapValue,e.mapValue);default:throw ee()}}function fI(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=si(t),r=si(e),i=he(n.seconds,r.seconds);return i!==0?i:he(n.nanos,r.nanos)}function Fa(t){return cg(t)}function cg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=si(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ts(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=cg(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${cg(n.fields[o])}`;return i+"}"}(t.mapValue):ee()}function io(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function dg(t){return!!t&&"integerValue"in t}function rc(t){return!!t&&"arrayValue"in t}function pI(t){return!!t&&"nullValue"in t}function mI(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Hd(t){return!!t&&"mapValue"in t}function wu(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return wo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=wu(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=wu(t.arrayValue.values[n]);return e}return Object.assign({},t)}function JA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function S2(t){return"nullValue"in t?Gd:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?io(ns.empty(),Y.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:ee()}function R2(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?io(ns.empty(),Y.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Fi:ee()}function gI(t,e){const n=rs(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function _I(t,e){const n=rs(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.value=e}static empty(){return new qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Hd(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=wu(n)}setAll(e){let n=We.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=wu(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Hd(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Hd(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){wo(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new qt(wu(this.value))}}function XA(t){const e=[];return wo(t.fields,(n,r)=>{const i=new We([n]);if(Hd(r)){const s=XA(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Tn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ue(e,0,se.min(),se.min(),se.min(),qt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ue(e,1,n,se.min(),r,i,0)}static newNoDocument(e,n){return new Ue(e,2,n,se.min(),se.min(),qt.empty(),0)}static newUnknownDocument(e,n){return new Ue(e,3,n,se.min(),se.min(),qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ue&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class is{constructor(e,n){this.position=e,this.inclusive=n}}function yI(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=rs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function vI(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!xr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ic{constructor(e,n="asc"){this.field=e,this.dir=n}}function A2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ZA{}class we extends ZA{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new P2(e,n,r):n==="array-contains"?new b2(e,r):n==="in"?new sP(e,r):n==="not-in"?new D2(e,r):n==="array-contains-any"?new x2(e,r):new we(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new C2(e,r):new k2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(rs(n,this.value)):n!==null&&ro(this.value)===ro(n)&&this.matchesComparison(rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Pe extends ZA{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Pe(e,n)}matches(e){return Ua(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ua(t){return t.op==="and"}function hg(t){return t.op==="or"}function gy(t){return eP(t)&&Ua(t)}function eP(t){for(const e of t.filters)if(e instanceof Pe)return!1;return!0}function fg(t){if(t instanceof we)return t.field.canonicalString()+t.op.toString()+Fa(t.value);if(gy(t))return t.filters.map(e=>fg(e)).join(",");{const e=t.filters.map(n=>fg(n)).join(",");return`${t.op}(${e})`}}function tP(t,e){return t instanceof we?function(r,i){return i instanceof we&&r.op===i.op&&r.field.isEqual(i.field)&&xr(r.value,i.value)}(t,e):t instanceof Pe?function(r,i){return i instanceof Pe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&tP(o,i.filters[a]),!0):!1}(t,e):void ee()}function nP(t,e){const n=t.filters.concat(e);return Pe.create(n,t.op)}function rP(t){return t instanceof we?function(n){return`${n.field.canonicalString()} ${n.op} ${Fa(n.value)}`}(t):t instanceof Pe?function(n){return n.op.toString()+" {"+n.getFilters().map(rP).join(" ,")+"}"}(t):"Filter"}class P2 extends we{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class C2 extends we{constructor(e,n){super(e,"in",n),this.keys=iP("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class k2 extends we{constructor(e,n){super(e,"not-in",n),this.keys=iP("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function iP(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class b2 extends we{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return rc(n)&&nc(n.arrayValue,this.value)}}class sP extends we{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&nc(this.value.arrayValue,n)}}class D2 extends we{constructor(e,n){super(e,"not-in",n)}matches(e){if(nc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!nc(this.value.arrayValue,n)}}class x2 extends we{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!rc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>nc(this.value.arrayValue,r))}}/**
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
 */class N2{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function pg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new N2(t,e,n,r,i,s,o)}function so(t){const e=J(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>fg(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Sc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Fa(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Fa(r)).join(",")),e.ue=n}return e.ue}function Rc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!A2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!tP(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!vI(t.startAt,e.startAt)&&vI(t.endAt,e.endAt)}function Nh(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Oh(t,e){return t.filters.filter(n=>n instanceof we&&n.field.isEqual(e))}function wI(t,e,n){let r=Gd,i=!0;for(const s of Oh(t,e)){let o=Gd,a=!0;switch(s.op){case"<":case"<=":o=S2(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Gd}gI({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];gI({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function EI(t,e,n){let r=Fi,i=!0;for(const s of Oh(t,e)){let o=Fi,a=!0;switch(s.op){case">=":case">":o=R2(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Fi}_I({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];_I({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function oP(t,e,n,r,i,s,o,a){return new di(t,e,n,r,i,s,o,a)}function ol(t){return new di(t)}function II(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _y(t){return t.collectionGroup!==null}function wa(t){const e=J(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new De(We.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ic(s,r))}),n.has(We.keyField().canonicalString())||e.ce.push(new ic(We.keyField(),r))}return e.ce}function fn(t){const e=J(t);return e.le||(e.le=O2(e,wa(t))),e.le}function O2(t,e){if(t.limitType==="F")return pg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ic(i.field,s)});const n=t.endAt?new is(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new is(t.startAt.position,t.startAt.inclusive):null;return pg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function mg(t,e){const n=t.filters.concat([e]);return new di(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Vh(t,e,n){return new di(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ac(t,e){return Rc(fn(t),fn(e))&&t.limitType===e.limitType}function aP(t){return`${so(fn(t))}|lt:${t.limitType}`}function Go(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>rP(i)).join(", ")}]`),Sc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Fa(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Fa(i)).join(",")),`Target(${r})`}(fn(t))}; limitType=${t.limitType})`}function Pc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Y.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of wa(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=yI(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,wa(r),i)||r.endAt&&!function(o,a,l){const c=yI(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,wa(r),i))}(t,e)}function lP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function uP(t){return(e,n)=>{let r=!1;for(const i of wa(t)){const s=V2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function V2(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?rs(l,c):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){wo(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return QA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2=new Ve(Y.comparator);function Sn(){return L2}const cP=new Ve(Y.comparator);function ru(...t){let e=cP;for(const n of t)e=e.insert(n.key,n);return e}function dP(t){let e=cP;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Rr(){return Eu()}function hP(){return Eu()}function Eu(){return new ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const M2=new Ve(Y.comparator),F2=new De(Y.comparator);function fe(...t){let e=F2;for(const n of t)e=e.add(n);return e}const U2=new De(he);function yy(){return U2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ec(e)?"-0":e}}function pP(t){return{integerValue:""+t}}function mP(t,e){return $A(e)?pP(e):fP(t,e)}/**
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
 */class Af{constructor(){this._=void 0}}function B2(t,e,n){return t instanceof Ba?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Rf(s)&&(s=my(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof oo?_P(t,e):t instanceof ao?yP(t,e):function(i,s){const o=gP(i,s),a=TI(o)+TI(i.Pe);return dg(o)&&dg(i.Pe)?pP(a):fP(i.serializer,a)}(t,e)}function j2(t,e,n){return t instanceof oo?_P(t,e):t instanceof ao?yP(t,e):n}function gP(t,e){return t instanceof ja?function(r){return dg(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ba extends Af{}class oo extends Af{constructor(e){super(),this.elements=e}}function _P(t,e){const n=vP(e);for(const r of t.elements)n.some(i=>xr(i,r))||n.push(r);return{arrayValue:{values:n}}}class ao extends Af{constructor(e){super(),this.elements=e}}function yP(t,e){let n=vP(e);for(const r of t.elements)n=n.filter(i=>!xr(i,r));return{arrayValue:{values:n}}}class ja extends Af{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function TI(t){return it(t.integerValue||t.doubleValue)}function vP(t){return rc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,n){this.field=e,this.transform=n}}function z2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof oo&&i instanceof oo||r instanceof ao&&i instanceof ao?Ma(r.elements,i.elements,xr):r instanceof ja&&i instanceof ja?xr(r.Pe,i.Pe):r instanceof Ba&&i instanceof Ba}(t.transform,e.transform)}class $2{constructor(e,n){this.version=e,this.transformResults=n}}class Ge{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ge}static exists(e){return new Ge(void 0,e)}static updateTime(e){return new Ge(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Kd(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Pf{}function wP(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ll(t.key,Ge.none()):new al(t.key,t.data,Ge.none());{const n=t.data,r=qt.empty();let i=new De(We.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new hi(t.key,r,new Tn(i.toArray()),Ge.none())}}function q2(t,e,n){t instanceof al?function(i,s,o){const a=i.value.clone(),l=RI(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof hi?function(i,s,o){if(!Kd(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=RI(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(EP(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Iu(t,e,n,r){return t instanceof al?function(s,o,a,l){if(!Kd(s.precondition,o))return a;const c=s.value.clone(),d=AI(s.fieldTransforms,l,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof hi?function(s,o,a,l){if(!Kd(s.precondition,o))return a;const c=AI(s.fieldTransforms,l,o),d=o.data;return d.setAll(EP(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Kd(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function W2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=gP(r.transform,i||null);s!=null&&(n===null&&(n=qt.empty()),n.set(r.field,s))}return n||null}function SI(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ma(r,i,(s,o)=>z2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class al extends Pf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class hi extends Pf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function EP(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function RI(t,e,n){const r=new Map;re(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,j2(o,a,n[i]))}return r}function AI(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,B2(s,o,e))}return r}class ll extends Pf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vy extends Pf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&q2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Iu(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Iu(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=hP();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=wP(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&Ma(this.mutations,e.mutations,(n,r)=>SI(n,r))&&Ma(this.baseMutations,e.baseMutations,(n,r)=>SI(n,r))}}class Ey{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){re(e.mutations.length===r.length);let i=function(){return M2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ey(e,n,r,i)}}/**
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
 */class Iy{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class G2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mt,Ee;function IP(t){switch(t){default:return ee();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function TP(t){if(t===void 0)return ht("GRPC error has no .code"),L.UNKNOWN;switch(t){case mt.OK:return L.OK;case mt.CANCELLED:return L.CANCELLED;case mt.UNKNOWN:return L.UNKNOWN;case mt.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case mt.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case mt.INTERNAL:return L.INTERNAL;case mt.UNAVAILABLE:return L.UNAVAILABLE;case mt.UNAUTHENTICATED:return L.UNAUTHENTICATED;case mt.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case mt.NOT_FOUND:return L.NOT_FOUND;case mt.ALREADY_EXISTS:return L.ALREADY_EXISTS;case mt.PERMISSION_DENIED:return L.PERMISSION_DENIED;case mt.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case mt.ABORTED:return L.ABORTED;case mt.OUT_OF_RANGE:return L.OUT_OF_RANGE;case mt.UNIMPLEMENTED:return L.UNIMPLEMENTED;case mt.DATA_LOSS:return L.DATA_LOSS;default:return ee()}}(Ee=mt||(mt={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function SP(){return new TextEncoder}/**
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
 */const H2=new Gs([4294967295,4294967295],0);function PI(t){const e=SP().encode(t),n=new CA;return n.update(e),new Uint8Array(n.digest())}function CI(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Gs([n,r],0),new Gs([i,s],0)]}class Ty{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new iu(`Invalid padding: ${n}`);if(r<0)throw new iu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new iu(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new iu(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Gs.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Gs.fromNumber(r)));return i.compare(H2)===1&&(i=new Gs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=PI(e),[r,i]=CI(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ty(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=PI(e),[r,i]=CI(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class iu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,bc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new kc(se.min(),i,new Ve(he),Sn(),fe())}}class bc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new bc(r,n,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class RP{constructor(e,n){this.targetId=e,this.me=n}}class AP{constructor(e,n,r=St.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class kI{constructor(){this.fe=0,this.ge=DI(),this.pe=St.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=fe(),n=fe(),r=fe();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ee()}}),new bc(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=DI()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,re(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class K2{constructor(e){this.Le=e,this.Be=new Map,this.ke=Sn(),this.qe=bI(),this.Qe=new Ve(he)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Nh(s))if(r===0){const o=new Y(s.path);this.Ue(n,o,Ue.newNoDocument(o,se.min()))}else re(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ts(r).toUint8Array()}catch(l){if(l instanceof YA)return hr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Ty(o,i,s)}catch(l){return hr(l instanceof iu?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Nh(a.target)){const l=new Y(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Ue.newNoDocument(l,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=fe();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new kc(e,n,this.Qe,this.ke,r);return this.ke=Sn(),this.qe=bI(),this.Qe=new Ve(he),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new kI,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new De(he),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new kI),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function bI(){return new Ve(Y.comparator)}function DI(){return new Ve(Y.comparator)}const Q2={asc:"ASCENDING",desc:"DESCENDING"},Y2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},J2={and:"AND",or:"OR"};class X2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function gg(t,e){return t.useProto3Json||Sc(e)?e:{value:e}}function za(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function PP(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Z2(t,e){return za(t,e.toTimestamp())}function ft(t){return re(!!t),se.fromTimestamp(function(n){const r=si(n);return new He(r.seconds,r.nanos)}(t))}function Sy(t,e){return _g(t,e).canonicalString()}function _g(t,e){const n=function(i){return new ve(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function CP(t){const e=ve.fromString(t);return re(FP(e)),e}function sc(t,e){return Sy(t.databaseId,e.path)}function kr(t,e){const n=CP(e);if(n.get(1)!==t.databaseId.projectId)throw new z(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(DP(n))}function kP(t,e){return Sy(t.databaseId,e)}function bP(t){const e=CP(t);return e.length===4?ve.emptyPath():DP(e)}function yg(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function DP(t){return re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function xI(t,e,n){return{name:sc(t,e),fields:n.value.mapValue.fields}}function xP(t,e,n){const r=kr(t,e.name),i=ft(e.updateTime),s=e.createTime?ft(e.createTime):se.min(),o=new qt({mapValue:{fields:e.fields}}),a=Ue.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function eU(t,e){return"found"in e?function(r,i){re(!!i.found),i.found.name,i.found.updateTime;const s=kr(r,i.found.name),o=ft(i.found.updateTime),a=i.found.createTime?ft(i.found.createTime):se.min(),l=new qt({mapValue:{fields:i.found.fields}});return Ue.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){re(!!i.missing),re(!!i.readTime);const s=kr(r,i.missing),o=ft(i.readTime);return Ue.newNoDocument(s,o)}(t,e):ee()}function tU(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(re(d===void 0||typeof d=="string"),St.fromBase64String(d||"")):(re(d===void 0||d instanceof Buffer||d instanceof Uint8Array),St.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?L.UNKNOWN:TP(c.code);return new z(d,c.message||"")}(o);n=new AP(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=kr(t,r.document.name),s=ft(r.document.updateTime),o=r.document.createTime?ft(r.document.createTime):se.min(),a=new qt({mapValue:{fields:r.document.fields}}),l=Ue.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Qd(c,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=kr(t,r.document),s=r.readTime?ft(r.readTime):se.min(),o=Ue.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Qd([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=kr(t,r.document),s=r.removedTargetIds||[];n=new Qd([],s,i,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new G2(i,s),a=r.targetId;n=new RP(a,o)}}return n}function oc(t,e){let n;if(e instanceof al)n={update:xI(t,e.key,e.value)};else if(e instanceof ll)n={delete:sc(t,e.key)};else if(e instanceof hi)n={update:xI(t,e.key,e.data),updateMask:aU(e.fieldMask)};else{if(!(e instanceof vy))return ee();n={verify:sc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Ba)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof oo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ao)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ja)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Z2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee()}(t,e.precondition)),n}function vg(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Ge.updateTime(ft(s.updateTime)):s.exists!==void 0?Ge.exists(s.exists):Ge.none()}(e.currentDocument):Ge.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)re(a.setToServerValue==="REQUEST_TIME"),l=new Ba;else if("appendMissingElements"in a){const d=a.appendMissingElements.values||[];l=new oo(d)}else if("removeAllFromArray"in a){const d=a.removeAllFromArray.values||[];l=new ao(d)}else"increment"in a?l=new ja(o,a.increment):ee();const c=We.fromServerFormat(a.fieldPath);return new Cc(c,l)}(t,i)):[];if(e.update){e.update.name;const i=kr(t,e.update.name),s=new qt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const c=l.fieldPaths||[];return new Tn(c.map(d=>We.fromServerFormat(d)))}(e.updateMask);return new hi(i,s,o,n,r)}return new al(i,s,n,r)}if(e.delete){const i=kr(t,e.delete);return new ll(i,n)}if(e.verify){const i=kr(t,e.verify);return new vy(i,n)}return ee()}function nU(t,e){return t&&t.length>0?(re(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?ft(i.updateTime):ft(s);return o.isEqual(se.min())&&(o=ft(s)),new $2(o,i.transformResults||[])}(n,e))):[]}function NP(t,e){return{documents:[kP(t,e.path)]}}function OP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=kP(t,i);const s=function(c){if(c.length!==0)return MP(Pe.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(p){return{field:Ho(p.field),direction:iU(p.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=gg(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function VP(t){let e=bP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){re(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const p=LP(f);return p instanceof Pe&&gy(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(S){return new ic(Ko(S.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,Sc(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(f){const p=!!f.before,w=f.values||[];return new is(w,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,w=f.values||[];return new is(w,p)}(n.endAt)),oP(e,i,o,s,a,"F",l,c)}function rU(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function LP(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ko(n.unaryFilter.field);return we.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ko(n.unaryFilter.field);return we.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ko(n.unaryFilter.field);return we.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ko(n.unaryFilter.field);return we.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return we.create(Ko(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Pe.create(n.compositeFilter.filters.map(r=>LP(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function iU(t){return Q2[t]}function sU(t){return Y2[t]}function oU(t){return J2[t]}function Ho(t){return{fieldPath:t.canonicalString()}}function Ko(t){return We.fromServerFormat(t.fieldPath)}function MP(t){return t instanceof we?function(n){if(n.op==="=="){if(mI(n.value))return{unaryFilter:{field:Ho(n.field),op:"IS_NAN"}};if(pI(n.value))return{unaryFilter:{field:Ho(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(mI(n.value))return{unaryFilter:{field:Ho(n.field),op:"IS_NOT_NAN"}};if(pI(n.value))return{unaryFilter:{field:Ho(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ho(n.field),op:sU(n.op),value:n.value}}}(t):t instanceof Pe?function(n){const r=n.getFilters().map(i=>MP(i));return r.length===1?r[0]:{compositeFilter:{op:oU(n.op),filters:r}}}(t):ee()}function aU(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function FP(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,n,r,i,s=se.min(),o=se.min(),a=St.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Kr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e){this.ct=e}}function lU(t,e){let n;if(e.document)n=xP(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=Y.fromSegments(e.noDocument.path),i=uo(e.noDocument.readTime);n=Ue.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return ee();{const r=Y.fromSegments(e.unknownDocument.path),i=uo(e.unknownDocument.version);n=Ue.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new He(i[0],i[1]);return se.fromTimestamp(s)}(e.readTime)),n}function NI(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Lh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:sc(s,o.key),fields:o.data.value.mapValue.fields,updateTime:za(s,o.version.toTimestamp()),createTime:za(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:lo(e.version)};else{if(!e.isUnknownDocument())return ee();r.unknownDocument={path:n.path.toArray(),version:lo(e.version)}}return r}function Lh(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function lo(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function uo(t){const e=new He(t.seconds,t.nanoseconds);return se.fromTimestamp(e)}function bs(t,e){const n=(e.baseMutations||[]).map(s=>vg(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>vg(t.ct,s)),i=He.fromMillis(e.localWriteTimeMs);return new wy(e.batchId,i,n,r)}function su(t){const e=uo(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?uo(t.lastLimboFreeSnapshotVersion):se.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return re(s.documents.length===1),fn(ol(bP(s.documents[0])))}(t.query):function(s){return fn(VP(s))}(t.query),new Kr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,St.fromBase64String(t.resumeToken))}function BP(t,e){const n=lo(e.snapshotVersion),r=lo(e.lastLimboFreeSnapshotVersion);let i;i=Nh(e.target)?NP(t.ct,e.target):OP(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:so(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Ry(t){const e=VP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Vh(e,e.limit,"L"):e}function Gp(t,e){return new Iy(e.largestBatchId,vg(t.ct,e.overlayMutation))}function OI(t,e){const n=e.path.lastSegment();return[t,hn(e.path.popLast()),n]}function VI(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:lo(r.readTime),documentKey:hn(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uU{getBundleMetadata(e,n){return LI(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:uo(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return LI(e).put(function(i){return{bundleId:i.id,createTime:lo(ft(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return MI(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:Ry(s.bundledQuery),readTime:uo(s.readTime)}}(r)})}saveNamedQuery(e,n){return MI(e).put(function(i){return{name:i.name,readTime:lo(ft(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function LI(t){return Nt(t,"bundles")}function MI(t){return Nt(t,"namedQueries")}/**
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
 */class Cf{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new Cf(e,r)}getOverlay(e,n){return $l(e).get(OI(this.userId,n)).next(r=>r?Gp(this.serializer,r):null)}getOverlays(e,n){const r=Rr();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Iy(n,o);i.push(this.ht(e,a))}),O.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(hn(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push($l(e).j("collectionPathOverlayIndex",a))}),O.waitFor(s)}getOverlaysForCollection(e,n,r){const i=Rr(),s=hn(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return $l(e).U("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const c=Gp(this.serializer,l);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=Rr();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return $l(e).J({index:"collectionGroupOverlayIndex",range:a},(l,c,d)=>{const f=Gp(this.serializer,c);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):d.done()}).next(()=>s)}ht(e,n){return $l(e).put(function(i,s,o){const[a,l,c]=OI(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:oc(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function $l(t){return Nt(t,"documentOverlays")}/**
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
 */class Ds{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(it(e.integerValue));else if("doubleValue"in e){const r=it(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),ec(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Et(n,20),typeof r=="string"&&(r=si(r)),n.At(`${r.seconds||""}`),n.dt(r.nanos||0)}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(ts(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?JA(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):ee()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){const r=e.fields||{};this.Et(n,55);for(const i of Object.keys(r))this.Rt(i,n),this.It(r[i],n)}wt(e,n){const r=e.values||[];this.Et(n,50);for(const i of r)this.It(i,n)}gt(e,n){this.Et(n,37),Y.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}}Ds.bt=new Ds;function cU(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function FI(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=cU(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class dU{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ct(r.value),r=n.next();this.vt()}Ft(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Mt(r.value),r=n.next();this.xt()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ct(r);else if(r<2048)this.Ct(960|r>>>6),this.Ct(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ct(480|r>>>12),this.Ct(128|63&r>>>6),this.Ct(128|63&r);else{const i=n.codePointAt(0);this.Ct(240|i>>>18),this.Ct(128|63&i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i)}}this.vt()}Nt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=n.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Lt(e){const n=this.Bt(e),r=FI(n);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}qt(e){const n=this.Bt(e),r=FI(n);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Bt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ct(e){const n=255&e;n===0?(this.Kt(0),this.Kt(255)):n===255?(this.Kt(255),this.Kt(0)):this.Kt(n)}Mt(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class hU{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Lt(e)}Tt(){this.Gt.Qt()}}class fU{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class ql{constructor(){this.Gt=new dU,this.zt=new hU(this.Gt),this.jt=new fU(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
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
 */class xs{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new xs(this.indexId,this.documentKey,this.arrayValue,r)}}function Ri(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=UI(t.arrayValue,e.arrayValue),n!==0?n:(n=UI(t.directionalValue,e.directionalValue),n!==0?n:Y.comparator(t.documentKey,e.documentKey)))}function UI(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class BI{constructor(e){this.Yt=new De((n,r)=>We.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Yt=this.Yt.add(r):this.Xt.push(r)}}get en(){return this.Yt.size>1}tn(e){if(re(e.collectionGroup===this.collectionId),this.en)return!1;const n=lg(e);if(n!==void 0&&!this.nn(n))return!1;const r=Cs(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.nn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Yt.size>0){const a=this.Yt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.rn(a,l)||!this.sn(this.Zt[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Zt.length||!this.sn(this.Zt[o++],a))return!1}return!0}on(){if(this.en)return null;let e=new De(We.comparator);const n=[];for(const r of this.Xt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new qd(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new qd(r.field,0))}for(const r of this.Zt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new qd(r.field,r.dir==="asc"?0:1)));return new xh(xh.UNKNOWN_ID,this.collectionId,n,Zu.empty())}nn(e){for(const n of this.Xt)if(this.rn(n,e))return!0;return!1}rn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function jP(t){var e,n;if(re(t instanceof we||t instanceof Pe),t instanceof we){if(t instanceof sP){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>we.create(t.field,"==",s)))||[];return Pe.create(i,"or")}return t}const r=t.filters.map(i=>jP(i));return Pe.create(r,t.op)}function pU(t){if(t.getFilters().length===0)return[];const e=Ig(jP(t));return re(zP(e)),wg(e)||Eg(e)?[e]:e.getFilters()}function wg(t){return t instanceof we}function Eg(t){return t instanceof Pe&&gy(t)}function zP(t){return wg(t)||Eg(t)||function(n){if(n instanceof Pe&&hg(n)){for(const r of n.getFilters())if(!wg(r)&&!Eg(r))return!1;return!0}return!1}(t)}function Ig(t){if(re(t instanceof we||t instanceof Pe),t instanceof we)return t;if(t.filters.length===1)return Ig(t.filters[0]);const e=t.filters.map(r=>Ig(r));let n=Pe.create(e,t.op);return n=Mh(n),zP(n)?n:(re(n instanceof Pe),re(Ua(n)),re(n.filters.length>1),n.filters.reduce((r,i)=>Ay(r,i)))}function Ay(t,e){let n;return re(t instanceof we||t instanceof Pe),re(e instanceof we||e instanceof Pe),n=t instanceof we?e instanceof we?function(i,s){return Pe.create([i,s],"and")}(t,e):jI(t,e):e instanceof we?jI(e,t):function(i,s){if(re(i.filters.length>0&&s.filters.length>0),Ua(i)&&Ua(s))return nP(i,s.getFilters());const o=hg(i)?i:s,a=hg(i)?s:i,l=o.filters.map(c=>Ay(c,a));return Pe.create(l,"or")}(t,e),Mh(n)}function jI(t,e){if(Ua(e))return nP(e,t.getFilters());{const n=e.filters.map(r=>Ay(t,r));return Pe.create(n,"or")}}function Mh(t){if(re(t instanceof we||t instanceof Pe),t instanceof we)return t;const e=t.getFilters();if(e.length===1)return Mh(e[0]);if(eP(t))return t;const n=e.map(i=>Mh(i)),r=[];return n.forEach(i=>{i instanceof we?r.push(i):i instanceof Pe&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:Pe.create(r,t.op)}/**
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
 */class mU{constructor(){this._n=new Py}addToCollectionParentIndex(e,n){return this._n.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(Mn.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(Mn.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class Py{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new De(ve.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new De(ve.comparator)).toArray()}}/**
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
 */const vd=new Uint8Array(0);class gU{constructor(e,n){this.databaseId=n,this.an=new Py,this.un=new ms(r=>so(r),(r,i)=>Rc(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.an.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.an.add(n)});const s={collectionId:r,parent:hn(i)};return zI(e).put(s)}return O.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[MA(n),""],!1,!0);return zI(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Sr(o.parent))}return r})}addFieldIndex(e,n){const r=Wl(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=zo(e);return s.next(a=>{o.put(VI(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Wl(e),i=zo(e),s=jo(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Wl(e),r=jo(e),i=zo(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return O.forEach(this.cn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new BI(r).on();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=jo(e);let i=!0;const s=new Map;return O.forEach(this.cn(n),o=>this.ln(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=fe();const a=[];return O.forEach(s,(l,c)=>{$("IndexedDbIndexManager",`Using index ${function(I){return`id=${I.indexId}|cg=${I.collectionGroup}|f=${I.fields.map(x=>`${x.fieldPath}:${x.kind}`).join(",")}`}(l)} to execute ${so(n)}`);const d=function(I,x){const F=lg(x);if(F===void 0)return null;for(const B of Oh(I,F.fieldPath))switch(B.op){case"array-contains-any":return B.value.arrayValue.values||[];case"array-contains":return[B.value]}return null}(c,l),f=function(I,x){const F=new Map;for(const B of Cs(x))for(const g of Oh(I,B.fieldPath))switch(g.op){case"==":case"in":F.set(B.fieldPath.canonicalString(),g.value);break;case"not-in":case"!=":return F.set(B.fieldPath.canonicalString(),g.value),Array.from(F.values())}return null}(c,l),p=function(I,x){const F=[];let B=!0;for(const g of Cs(x)){const _=g.kind===0?wI(I,g.fieldPath,I.startAt):EI(I,g.fieldPath,I.startAt);F.push(_.value),B&&(B=_.inclusive)}return new is(F,B)}(c,l),w=function(I,x){const F=[];let B=!0;for(const g of Cs(x)){const _=g.kind===0?EI(I,g.fieldPath,I.endAt):wI(I,g.fieldPath,I.endAt);F.push(_.value),B&&(B=_.inclusive)}return new is(F,B)}(c,l),S=this.hn(l,c,p),A=this.hn(l,c,w),b=this.Pn(l,c,f),T=this.In(l.indexId,d,S,p.inclusive,A,w.inclusive,b);return O.forEach(T,v=>r.G(v,n.limit).next(I=>{I.forEach(x=>{const F=Y.fromSegments(x.documentKey);o.has(F)||(o=o.add(F),a.push(F))})}))}).next(()=>a)}return O.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=pU(Pe.create(e.filters,"and")).map(r=>pg(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}In(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),c=l/(n!=null?n.length:1),d=[];for(let f=0;f<l;++f){const p=n?this.Tn(n[f/c]):vd,w=this.En(e,p,r[f%c],i),S=this.dn(e,p,s[f%c],o),A=a.map(b=>this.En(e,p,b,!0));d.push(...this.createRange(w,S,A))}return d}En(e,n,r,i){const s=new xs(e,Y.empty(),n,r);return i?s:s.Jt()}dn(e,n,r,i){const s=new xs(e,Y.empty(),n,r);return i?s.Jt():s}ln(e,n){const r=new BI(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return O.forEach(i,s=>this.ln(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let c=new De(We.comparator),d=!1;for(const f of l.filters)for(const p of f.getFlattenedFilters())p.field.isKeyField()||(p.op==="array-contains"||p.op==="array-contains-any"?d=!0:c=c.add(p.field));for(const f of l.orderBy)f.field.isKeyField()||(c=c.add(f.field));return c.size+(d?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}An(e,n){const r=new ql;for(const i of Cs(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);Ds.bt.Pt(s,o)}return r.Wt()}Tn(e){const n=new ql;return Ds.bt.Pt(e,n.Ht(0)),n.Wt()}Rn(e,n){const r=new ql;return Ds.bt.Pt(io(this.databaseId,n),r.Ht(function(s){const o=Cs(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}Pn(e,n,r){if(r===null)return[];let i=[];i.push(new ql);let s=0;for(const o of Cs(e)){const a=r[s++];for(const l of i)if(this.Vn(n,o.fieldPath)&&rc(a))i=this.mn(i,o,a);else{const c=l.Ht(o.kind);Ds.bt.Pt(a,c)}}return this.fn(i)}hn(e,n,r){return this.Pn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Wt();return n}mn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new ql;l.seed(a.Wt()),Ds.bt.Pt(o,l.Ht(n.kind)),s.push(l)}return s}Vn(e,n){return!!e.filters.find(r=>r instanceof we&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Wl(e),i=zo(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return O.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(d,f){const p=f?new Zu(f.sequenceNumber,new Mn(uo(f.readTime),new Y(Sr(f.documentKey)),f.largestBatchId)):Zu.empty(),w=d.fields.map(([S,A])=>new qd(We.fromServerFormat(S),A));return new xh(d.indexId,d.collectionGroup,w,p)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:he(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Wl(e),s=zo(e);return this.gn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>O.forEach(a,l=>s.put(VI(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return O.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?O.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),O.forEach(a,l=>this.pn(e,i,l).next(c=>{const d=this.yn(s,l);return c.isEqual(d)?O.resolve():this.wn(e,s,l,c,d)}))))})}Sn(e,n,r,i){return jo(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Rn(r,n.key),documentKey:n.key.path.toArray()})}bn(e,n,r,i){return jo(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Rn(r,n.key),n.key.path.toArray()])}pn(e,n,r){const i=jo(e);let s=new De(Ri);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Rn(r,n)])},(o,a)=>{s=s.add(new xs(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}yn(e,n){let r=new De(Ri);const i=this.An(n,e);if(i==null)return r;const s=lg(n);if(s!=null){const o=e.data.field(s.fieldPath);if(rc(o))for(const a of o.arrayValue.values||[])r=r.add(new xs(n.indexId,e.key,this.Tn(a),i))}else r=r.add(new xs(n.indexId,e.key,vd,i));return r}wn(e,n,r,i,s){$("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,c,d,f,p){const w=l.getIterator(),S=c.getIterator();let A=Bo(w),b=Bo(S);for(;A||b;){let T=!1,v=!1;if(A&&b){const I=d(A,b);I<0?v=!0:I>0&&(T=!0)}else A!=null?v=!0:T=!0;T?(f(b),b=Bo(S)):v?(p(A),A=Bo(w)):(A=Bo(w),b=Bo(S))}}(i,s,Ri,a=>{o.push(this.Sn(e,n,r,a))},a=>{o.push(this.bn(e,n,r,a))}),O.waitFor(o)}gn(e){let n=1;return zo(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Ri(o,a)).filter((o,a,l)=>!a||Ri(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Ri(o,e),l=Ri(o,n);if(a===0)i[0]=e.Jt();else if(a>0&&l<0)i.push(o),i.push(o.Jt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Dn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,vd,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,vd,[]];s.push(IDBKeyRange.bound(a,l))}return s}Dn(e,n){return Ri(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next($I)}getMinOffset(e,n){return O.mapArray(this.cn(n),r=>this.ln(e,r).next(i=>i||ee())).next($I)}}function zI(t){return Nt(t,"collectionParents")}function jo(t){return Nt(t,"indexEntries")}function Wl(t){return Nt(t,"indexConfiguration")}function zo(t){return Nt(t,"indexState")}function $I(t){re(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;fy(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Mn(e.readTime,e.documentKey,n)}/**
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
 */const qI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class vn{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new vn(e,vn.DEFAULT_COLLECTION_PERCENTILE,vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $P(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.J({range:o},(d,f,p)=>(a++,p.delete()));s.push(l.next(()=>{re(a===1)}));const c=[];for(const d of n.mutations){const f=qA(e,d.key.path,n.batchId);s.push(i.delete(f)),c.push(d.key)}return O.waitFor(s).next(()=>c)}function Fh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw ee();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn.DEFAULT_COLLECTION_PERCENTILE=10,vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vn.DEFAULT=new vn(41943040,vn.DEFAULT_COLLECTION_PERCENTILE,vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vn.DISABLED=new vn(-1,0,0);class kf{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Cn={}}static lt(e,n,r,i){re(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new kf(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ai(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Qo(e),o=Ai(e);return o.add({}).next(a=>{re(typeof a=="number");const l=new wy(a,n,r,i),c=function(w,S,A){const b=A.baseMutations.map(v=>oc(w.ct,v)),T=A.mutations.map(v=>oc(w.ct,v));return{userId:S,batchId:A.batchId,localWriteTimeMs:A.localWriteTime.toMillis(),baseMutations:b,mutations:T}}(this.serializer,this.userId,l),d=[];let f=new De((p,w)=>he(p.canonicalString(),w.canonicalString()));for(const p of i){const w=qA(this.userId,p.key.path,a);f=f.add(p.key.path.popLast()),d.push(o.put(c)),d.push(s.put(w,i2))}return f.forEach(p=>{d.push(this.indexManager.addToCollectionParentIndex(e,p))}),e.addOnCommittedListener(()=>{this.Cn[a]=l.keys()}),O.waitFor(d).next(()=>l)})}lookupMutationBatch(e,n){return Ai(e).get(n).next(r=>r?(re(r.userId===this.userId),bs(this.serializer,r)):null)}vn(e,n){return this.Cn[n]?O.resolve(this.Cn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Cn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Ai(e).J({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(re(a.batchId>=r),s=bs(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Ai(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ai(e).U("userMutationsIndex",n).next(r=>r.map(i=>bs(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Wd(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Qo(e).J({range:i},(o,a,l)=>{const[c,d,f]=o,p=Sr(d);if(c===this.userId&&n.path.isEqual(p))return Ai(e).get(f).next(w=>{if(!w)throw ee();re(w.userId===this.userId),s.push(bs(this.serializer,w))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new De(he);const i=[];return n.forEach(s=>{const o=Wd(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=Qo(e).J({range:a},(c,d,f)=>{const[p,w,S]=c,A=Sr(w);p===this.userId&&s.path.isEqual(A)?r=r.add(S):f.done()});i.push(l)}),O.waitFor(i).next(()=>this.Fn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Wd(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new De(he);return Qo(e).J({range:o},(l,c,d)=>{const[f,p,w]=l,S=Sr(p);f===this.userId&&r.isPrefixOf(S)?S.length===i&&(a=a.add(w)):d.done()}).next(()=>this.Fn(e,a))}Fn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Ai(e).get(s).next(o=>{if(o===null)throw ee();re(o.userId===this.userId),r.push(bs(this.serializer,o))}))}),O.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return $P(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Mn(n.batchId)}),O.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return O.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Qo(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=Sr(s[1]);i.push(l)}else a.done()}).next(()=>{re(i.length===0)})})}containsKey(e,n){return qP(e,this.userId,n)}xn(e){return WP(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function qP(t,e,n){const r=Wd(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Qo(t).J({range:s,H:!0},(a,l,c)=>{const[d,f,p]=a;d===e&&f===i&&(o=!0),c.done()}).next(()=>o)}function Ai(t){return Nt(t,"mutations")}function Qo(t){return Nt(t,"documentMutations")}function WP(t){return Nt(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new co(0)}static Ln(){return new co(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _U{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Bn(e).next(n=>{const r=new co(n.highestTargetId);return n.highestTargetId=r.next(),this.kn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(n=>se.fromTimestamp(new He(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.kn(e,i)))}addTargetData(e,n){return this.qn(e,n).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.Qn(n,r),this.kn(e,r))))}updateTargetData(e,n){return this.qn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>$o(e).delete(n.targetId)).next(()=>this.Bn(e)).next(r=>(re(r.targetCount>0),r.targetCount-=1,this.kn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return $o(e).J((o,a)=>{const l=su(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>O.waitFor(s)).next(()=>i)}forEachTarget(e,n){return $o(e).J((r,i)=>{const s=su(i);n(s)})}Bn(e){return WI(e).get("targetGlobalKey").next(n=>(re(n!==null),n))}kn(e,n){return WI(e).put("targetGlobalKey",n)}qn(e,n){return $o(e).put(BP(this.serializer,n))}Qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=so(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return $o(e).J({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const c=su(a);Rc(n,c.target)&&(s=c,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Ni(e);return n.forEach(o=>{const a=hn(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),O.waitFor(i)}removeMatchingKeys(e,n,r){const i=Ni(e);return O.forEach(n,s=>{const o=hn(s.path);return O.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Ni(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Ni(e);let s=fe();return i.J({range:r,H:!0},(o,a,l)=>{const c=Sr(o[1]),d=new Y(c);s=s.add(d)}).next(()=>s)}containsKey(e,n){const r=hn(n.path),i=IDBKeyRange.bound([r],[MA(r)],!1,!0);let s=0;return Ni(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],l,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return $o(e).get(n).next(r=>r?su(r):null)}}function $o(t){return Nt(t,"targets")}function WI(t){return Nt(t,"targetGlobal")}function Ni(t){return Nt(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI([t,e],[n,r]){const i=he(t,n);return i===0?he(e,r):i}class yU{constructor(e){this.Kn=e,this.buffer=new De(GI),this.$n=0}Un(){return++this.$n}Wn(e){const n=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();GI(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class vU{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){$("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ps(n)?$("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await fs(n)}await this.zn(3e5)})}}class wU{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.Hn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(In.oe);const r=new yU(n);return this.jn.forEachTarget(e,i=>r.Wn(i.sequenceNumber)).next(()=>this.jn.Jn(e,i=>r.Wn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(qI)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qI):this.Yn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,n){let r,i,s,o,a,l,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),Wo()<=ge.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(c-l)+`ms
Total Duration: ${c-d}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function EU(t,e){return new wU(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IU{constructor(e,n){this.db=e,this.garbageCollector=EU(this,n)}Hn(e){const n=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Zn(e){let n=0;return this.Jn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Jn(e,n){return this.Xn(e,(r,i)=>n(i))}addReference(e,n,r){return wd(e,r)}removeReference(e,n,r){return wd(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return wd(e,n)}er(e,n){return function(i,s){let o=!1;return WP(i).Y(a=>qP(i,a,s).next(l=>(l&&(o=!0),O.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Xn(e,(o,a)=>{if(a<=n){const l=this.er(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,se.min()),Ni(e).delete(function(f){return[0,hn(f.path)]}(o))))});i.push(l)}}).next(()=>O.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return wd(e,n)}Xn(e,n){const r=Ni(e);let i,s=In.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:c})=>{o===0?(s!==In.oe&&n(new Y(Sr(i)),s),s=c,i=l):s=In.oe}).next(()=>{s!==In.oe&&n(new Y(Sr(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function wd(t,e){return Ni(t).put(function(r,i){return{targetId:0,path:hn(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(){this.changes=new ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ue.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TU{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Ss(e).put(r)}removeEntry(e,n,r){return Ss(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Lh(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.tr(e,r)))}getEntry(e,n){let r=Ue.newInvalidDocument(n);return Ss(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Gl(n))},(i,s)=>{r=this.nr(n,s)}).next(()=>r)}rr(e,n){let r={size:0,document:Ue.newInvalidDocument(n)};return Ss(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Gl(n))},(i,s)=>{r={document:this.nr(n,s),size:Fh(s)}}).next(()=>r)}getEntries(e,n){let r=Sn();return this.ir(e,n,(i,s)=>{const o=this.nr(i,s);r=r.insert(i,o)}).next(()=>r)}sr(e,n){let r=Sn(),i=new Ve(Y.comparator);return this.ir(e,n,(s,o)=>{const a=this.nr(s,o);r=r.insert(s,a),i=i.insert(s,Fh(o))}).next(()=>({documents:r,_r:i}))}ir(e,n,r){if(n.isEmpty())return O.resolve();let i=new De(QI);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(Gl(i.first()),Gl(i.last())),o=i.getIterator();let a=o.getNext();return Ss(e).J({index:"documentKeyIndex",range:s},(l,c,d)=>{const f=Y.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&QI(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?d.$(Gl(a)):d.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),Lh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ss(e).U(IDBKeyRange.bound(a,l,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let d=Sn();for(const f of c){const p=this.nr(Y.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);p.isFoundDocument()&&(Pc(n,p)||i.has(p.key))&&(d=d.insert(p.key,p))}return d})}getAllFromCollectionGroup(e,n,r,i){let s=Sn();const o=KI(n,r),a=KI(n,Mn.max());return Ss(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,c,d)=>{const f=this.nr(Y.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(f.key,f),s.size===i&&d.done()}).next(()=>s)}newChangeBuffer(e){return new SU(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return HI(e).get("remoteDocumentGlobalKey").next(n=>(re(!!n),n))}tr(e,n){return HI(e).put("remoteDocumentGlobalKey",n)}nr(e,n){if(n){const r=lU(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(se.min())))return r}return Ue.newInvalidDocument(e)}}function HP(t){return new TU(t)}class SU extends GP{constructor(e,n){super(),this.ar=e,this.trackRemovals=n,this.ur=new ms(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new De((s,o)=>he(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ur.get(s);if(n.push(this.ar.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=NI(this.ar.serializer,o);i=i.add(s.path.popLast());const c=Fh(l);r+=c-a.size,n.push(this.ar.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=NI(this.ar.serializer,o.convertToNoDocument(se.min()));n.push(this.ar.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.ar.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.ar.updateMetadata(e,r)),O.waitFor(n)}getFromCache(e,n){return this.ar.rr(e,n).next(r=>(this.ur.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.ar.sr(e,n).next(({documents:r,_r:i})=>(i.forEach((s,o)=>{this.ur.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function HI(t){return Nt(t,"remoteDocumentGlobal")}function Ss(t){return Nt(t,"remoteDocumentsV14")}function Gl(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function KI(t,e){const n=e.documentKey.path.toArray();return[t,Lh(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function QI(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=he(n[s],r[s]),i)return i;return i=he(n.length,r.length),i||(i=he(n[n.length-2],r[r.length-2]),i||he(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class RU{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Iu(r.mutation,i,Tn.empty(),He.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=fe()){const i=Rr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ru();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Rr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,fe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Sn();const o=Eu(),a=function(){return Eu()}();return n.forEach((l,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof hi)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Iu(d.mutation,c,d.mutation.getFieldMask(),He.now())):o.set(c.key,Tn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new RU(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Eu();let i=new Ve((o,a)=>o-a),s=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let d=r.get(l)||Tn.empty();d=a.applyToLocalView(c,d),r.set(l,d);const f=(i.get(a.batchId)||fe()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,d=l.value,f=hP();d.forEach(p=>{if(!s.has(p)){const w=wP(n.get(p),r.get(p));w!==null&&f.set(p,w),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_y(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(Rr());let a=-1,l=s;return o.next(c=>O.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?O.resolve():this.remoteDocumentCache.getEntry(e,d).next(p=>{l=l.insert(d,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,fe())).next(d=>({batchId:a,changes:dP(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let i=ru();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ru();return this.indexManager.getCollectionParents(e,s).next(a=>O.forEach(a,l=>{const c=function(f,p){return new di(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Ue.newInvalidDocument(d)))});let a=ru();return o.forEach((l,c)=>{const d=s.get(l);d!==void 0&&Iu(d.mutation,c,Tn.empty(),He.now()),Pc(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AU{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return O.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ft(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:Ry(i.bundledQuery),readTime:ft(i.readTime)}}(n)),O.resolve()}}/**
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
 */class PU{constructor(){this.overlays=new Ve(Y.comparator),this.hr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Rr();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=Rr(),s=n.length+1,o=new Y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ve((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Rr(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=Rr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return O.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Iy(n,r));let s=this.hr.get(n);s===void 0&&(s=fe(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(){this.Pr=new De(At.Ir),this.Tr=new De(At.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new At(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new At(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new Y(new ve([])),r=new At(n,e),i=new At(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new Y(new ve([])),r=new At(n,e),i=new At(n,e+1);let s=fe();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new At(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class At{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return Y.comparator(e.key,n.key)||he(e.pr,n.pr)}static Er(e,n){return he(e.pr,n.pr)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CU{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new De(At.Ir)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wy(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new At(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new At(n,0),i=new At(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new De(he);return n.forEach(i=>{const s=new At(i,0),o=new At(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),O.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Y.isDocumentKey(s)||(s=s.child(""));const o=new At(new Y(s),0);let a=new De(he);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.pr)),!0)},o),O.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){re(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return O.forEach(n.mutations,i=>{const s=new At(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new At(n,0),i=this.wr.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kU{constructor(e){this.vr=e,this.docs=function(){return new Ve(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():Ue.newInvalidDocument(n))}getEntries(e,n){let r=Sn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ue.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Sn();const o=n.path,a=new Y(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:d}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||fy(UA(d),r)<=0||(i.has(d.key)||Pc(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ee()}Fr(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new bU(this)}getSize(e){return O.resolve(this.size)}}class bU extends GP{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DU{constructor(e){this.persistence=e,this.Mr=new ms(n=>so(n),Rc),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Cy,this.targetCount=0,this.Lr=co.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),O.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new co(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.qn(n),O.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(e,n){this.Br={},this.overlays={},this.kr=new In(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new DU(this),this.indexManager=new mU,this.remoteDocumentCache=function(i){return new kU(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new UP(n),this.$r=new AU(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new PU,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new CU(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new xU(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return O.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class xU extends jA{constructor(e){super(),this.currentSequenceNumber=e}}class bf{constructor(e){this.persistence=e,this.zr=new Cy,this.jr=null}static Hr(e){return new bf(e)}get Jr(){if(this.jr)return this.jr;throw ee()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),O.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Jr,r=>{const i=Y.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,se.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return O.or([()=>O.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NU{constructor(e){this.serializer=e}O(e,n,r,i){const s=new Sf("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",cI,{unique:!0}),l.createObjectStore("documentMutations")}(e),YI(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=O.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),YI(e)),o=o.next(()=>function(l){const c=l.store("targetGlobal"),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:se.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",d)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,c){return c.store("mutations").U().next(d=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",cI,{unique:!0});const f=c.store("mutations"),p=d.map(w=>f.put(w));return O.waitFor(p)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Xr(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ei(s)))),r<7&&i>=7&&(o=o.next(()=>this.ti(s))),r<8&&i>=8&&(o=o.next(()=>this.ni(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ri(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const c=l.createObjectStore("documentOverlays",{keyPath:g2});c.createIndex("collectionPathOverlayIndex",_2,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",y2,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const c=l.createObjectStore("remoteDocumentsV14",{keyPath:s2});c.createIndex("documentKeyIndex",o2),c.createIndex("collectionGroupIndex",a2)}(e)).next(()=>this.ii(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:h2}).createIndex("sequenceNumberIndex",f2,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:p2}).createIndex("documentKeyIndex",m2,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),o}ei(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=Fh(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Xr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>O.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>O.forEach(a,l=>{re(l.userId===s.userId);const c=bs(this.serializer,l);return $P(e,s.userId,c).next(()=>{})}))}))}ti(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const l=new ve(o),c=function(f){return[0,hn(f)]}(l);s.push(n.get(c).next(d=>d?O.resolve():(f=>n.put({targetId:0,path:hn(f),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>O.waitFor(s))})}ni(e,n){e.createObjectStore("collectionParents",{keyPath:d2});const r=n.store("collectionParents"),i=new Py,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:hn(l)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const l=new ve(o);return s(l.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,l],c)=>{const d=Sr(a);return s(d.popLast())}))}ri(e){const n=e.store("targets");return n.J((r,i)=>{const s=su(i),o=BP(this.serializer,s);return n.put(o)})}ii(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(f){return f.document?new Y(ve.fromString(f.document.name).popFirst(5)):f.noDocument?Y.fromSegments(f.noDocument.path):f.unknownDocument?Y.fromSegments(f.unknownDocument.path):ee()}(o).path.toArray(),c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>O.waitFor(i))}si(e,n){const r=n.store("mutations"),i=HP(this.serializer),s=new QP(bf.Hr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(l=>{var c;let d=(c=a.get(l.userId))!==null&&c!==void 0?c:fe();bs(this.serializer,l).keys().forEach(f=>d=d.add(f)),a.set(l.userId,d)}),O.forEach(a,(l,c)=>{const d=new Ct(c),f=Cf.lt(this.serializer,d),p=s.getIndexManager(d),w=kf.lt(d,this.serializer,p,s.referenceDelegate);return new KP(i,w,f,p).recalculateAndSaveOverlaysForDocumentKeys(new ug(n,In.oe),l).next()})})}}function YI(t){t.createObjectStore("targetDocuments",{keyPath:u2}).createIndex("documentTargetsIndex",c2,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",l2,{unique:!0}),t.createObjectStore("targetGlobal")}const Hp="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ky{constructor(e,n,r,i,s,o,a,l,c,d,f=16){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.oi=s,this.window=o,this.document=a,this._i=c,this.ai=d,this.ui=f,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=p=>Promise.resolve(),!ky.D())throw new z(L.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new IU(this,i),this.Ti=n+"main",this.serializer=new UP(l),this.Ei=new Cr(this.Ti,this.ui,new NU(this.serializer)),this.Qr=new _U(this.referenceDelegate,this.serializer),this.remoteDocumentCache=HP(this.serializer),this.$r=new uU,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,d===!1&&ht("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new z(L.FAILED_PRECONDITION,Hp);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new In(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ed(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(n=>{n||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(n=>this.isPrimary&&!n?this.yi(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(ps(e))return $("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return $("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return Hl(e).get("owner").next(n=>O.resolve(this.Si(n)))}bi(e){return Ed(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Nt(n,"clientMetadata");return r.U().next(i=>{const s=this.vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return O.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.di)for(const n of e)this.di.removeItem(this.Fi(n.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?O.resolve(!0):Hl(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)){if(this.Si(n)&&this.networkEnabled)return!0;if(!this.Si(n)){if(!n.allowTabSynchronization)throw new z(L.FAILED_PRECONDITION,Hp);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ed(e).U().next(r=>this.vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&$("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new ug(e,In.oe);return this.yi(n).next(()=>this.bi(n))}),this.Ei.close(),this.Li()}vi(e,n){return e.filter(r=>this.Ci(r.updateTimeMs,n)&&!this.Mi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>Ed(e).U().next(n=>this.vi(n,18e5).map(r=>r.clientId)))}get started(){return this.qr}getMutationQueue(e,n){return kf.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new gU(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Cf.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,n,r){$("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===16?w2:l===15?KA:l===14?HA:l===13?GA:l===12?v2:l===11?WA:void ee()}(this.ui);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new ug(a,this.kr?this.kr.next():In.oe),n==="readwrite-primary"?this.gi(o).next(l=>!!l||this.pi(o)).next(l=>{if(!l)throw ht(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new z(L.FAILED_PRECONDITION,BA);return r(o)}).next(l=>this.wi(o).next(()=>l)):this.ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}ki(e){return Hl(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)&&!this.Si(n)&&!(this.ai||this.allowTabSynchronization&&n.allowTabSynchronization))throw new z(L.FAILED_PRECONDITION,Hp)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Hl(e).put("owner",n)}static D(){return Cr.D()}yi(e){const n=Hl(e);return n.get("owner").next(r=>this.Si(r)?($("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):O.resolve())}Ci(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(ht(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;mR()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var n;try{const r=((n=this.di)===null||n===void 0?void 0:n.getItem(this.Fi(e)))!==null;return $("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return ht("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){ht("Failed to set zombie client id.",e)}}Li(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Hl(t){return Nt(t,"owner")}function Ed(t){return Nt(t,"clientMetadata")}function by(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=fe(),i=fe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Dy(e,n.fromCache,r,i)}}/**
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
 */class OU{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class YP{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return mR()?8:zA(Ke())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new OU;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Wo()<=ge.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Go(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),O.resolve()):(Wo()<=ge.DEBUG&&$("QueryEngine","Query:",Go(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Wo()<=ge.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Go(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fn(n))):O.resolve())}ji(e,n){if(II(n))return O.resolve(null);let r=fn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Vh(n,null,"F"),r=fn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=fe(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(e,Vh(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,r,i){return II(n)||i.isEqual(se.min())?O.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?O.resolve(null):(Wo()<=ge.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Go(n)),this.es(e,o,n,FA(i,-1)).next(a=>a))})}Zi(e,n){let r=new De(uP(e));return n.forEach((i,s)=>{Pc(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Wo()<=ge.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Go(n)),this.zi.getDocumentsMatchingQuery(e,n,Mn.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VU{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Ve(he),this.rs=new ms(s=>so(s),Rc),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KP(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function JP(t,e,n,r){return new VU(t,e,n,r)}async function XP(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=fe();for(const c of i){o.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function LU(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,d){const f=c.batch,p=f.keys();let w=O.resolve();return p.forEach(S=>{w=w.next(()=>d.getEntry(l,S)).next(A=>{const b=c.docVersions.get(S);re(b!==null),A.version.compareTo(b)<0&&(f.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),d.addEntry(A)))})}),w.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=fe();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function ZP(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function MU(t,e){const n=J(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((d,f)=>{const p=i.get(f);if(!p)return;a.push(n.Qr.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,d.addedDocuments,f)));let w=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?w=w.withResumeToken(St.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),i=i.insert(f,w),function(A,b,T){return A.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(p,w,d)&&a.push(n.Qr.updateTargetData(s,w))});let l=Sn(),c=fe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(eC(s,o,e.documentUpdates).next(d=>{l=d.cs,c=d.ls})),!r.isEqual(se.min())){const d=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return O.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.ns=i,s))}function eC(t,e,n){let r=fe(),i=fe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Sn();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:i}})}function FU(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function $a(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Kr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function qa(t,e,n){const r=J(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ps(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function Uh(t,e,n){const r=J(t);let i=se.min(),s=fe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,d){const f=J(l),p=f.rs.get(d);return p!==void 0?O.resolve(f.ns.get(p)):f.Qr.getTargetData(c,d)}(r,o,fn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:se.min(),n?s:fe())).next(a=>(rC(r,lP(e),a),{documents:a,hs:s})))}function tC(t,e){const n=J(t),r=J(n.Qr),i=n.ns.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function nC(t,e){const n=J(t),r=n.ss.get(e)||se.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.os.getAllFromCollectionGroup(i,e,FA(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(rC(n,e,i),i))}function rC(t,e,n){let r=t.ss.get(e)||se.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}async function UU(t,e,n,r){const i=J(t);let s=fe(),o=Sn();for(const c of n){const d=e.Ps(c.metadata.name);c.document&&(s=s.add(d));const f=e.Is(c);f.setReadTime(e.Ts(c.metadata.readTime)),o=o.insert(d,f)}const a=i.os.newChangeBuffer({trackRemovals:!0}),l=await $a(i,function(d){return fn(ol(ve.fromString(`__bundle__/docs/${d}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>eC(c,a,o).next(d=>(a.apply(c),d)).next(d=>i.Qr.removeMatchingKeysForTargetId(c,l.targetId).next(()=>i.Qr.addMatchingKeys(c,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,d.cs,d.ls)).next(()=>d.cs)))}async function BU(t,e,n=fe()){const r=await $a(t,fn(Ry(e.bundledQuery))),i=J(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=ft(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.$r.saveNamedQuery(s,e);const a=r.withResumeToken(St.EMPTY_BYTE_STRING,o);return i.ns=i.ns.insert(a.targetId,a),i.Qr.updateTargetData(s,a).next(()=>i.Qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.$r.saveNamedQuery(s,e))})}function JI(t,e){return`firestore_clients_${t}_${e}`}function XI(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Kp(t,e){return`firestore_targets_${t}_${e}`}class Bh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Es(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new z(i.error.code,i.error.message))),o?new Bh(e,n,i.state,s):(ht("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Tu{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Es(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new z(r.error.code,r.error.message))),s?new Tu(e,r.state,i):(ht("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class jh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Es(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=yy();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=$A(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new jh(e,s):(ht("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class xy{constructor(e,n){this.clientId=e,this.onlineState=n}static Es(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new xy(n.clientId,n.onlineState):(ht("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Tg{constructor(){this.activeTargetIds=yy()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Qp{constructor(e,n,r,i,s){this.window=e,this.oi=n,this.persistenceKey=r,this.Vs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new Ve(he),this.started=!1,this.ys=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ws=JI(this.persistenceKey,this.Vs),this.Ss=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new Tg),this.bs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Fs=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Vs)continue;const i=this.getItem(JI(this.persistenceKey,r));if(i){const s=jh.Es(r,i);s&&(this.ps=this.ps.insert(s.clientId,s))}}this.Ms();const n=this.storage.getItem(this.vs);if(n){const r=this.xs(n);r&&this.Os(r)}for(const r of this.ys)this.gs(r);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let n=!1;return this.ps.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ls(e,"pending")}updateMutationState(e,n,r){this.Ls(e,n,r),this.Bs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Kp(this.persistenceKey,e));if(r){const i=Tu.Es(e,r);i&&(n=i.state)}}return this.ks.As(e),this.Ms(),n}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Kp(this.persistenceKey,e))}updateQueryState(e,n,r){this.qs(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Bs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return $("SharedClientState","READ",e,n),n}setItem(e,n){$("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){$("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){const n=e;if(n.storageArea===this.storage){if($("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ws)return void ht("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.bs.test(n.key)){if(n.newValue==null){const r=this.$s(n.key);return this.Us(r,null)}{const r=this.Ws(n.key,n.newValue);if(r)return this.Us(r.clientId,r)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const r=this.Gs(n.key,n.newValue);if(r)return this.zs(r)}}else if(this.Cs.test(n.key)){if(n.newValue!==null){const r=this.js(n.key,n.newValue);if(r)return this.Hs(r)}}else if(n.key===this.vs){if(n.newValue!==null){const r=this.xs(n.newValue);if(r)return this.Os(r)}}else if(n.key===this.Ss){const r=function(s){let o=In.oe;if(s!=null)try{const a=JSON.parse(s);re(typeof a=="number"),o=a}catch(a){ht("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==In.oe&&this.sequenceNumberHandler(r)}else if(n.key===this.Fs){const r=this.Js(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Ys(i)))}}}else this.ys.push(n)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Ls(e,n,r){const i=new Bh(this.currentUser,e,n,r),s=XI(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ds())}Bs(e){const n=XI(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Qs(e){const n={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(n))}qs(e,n,r){const i=Kp(this.persistenceKey,e),s=new Tu(e,n,r);this.setItem(i,s.ds())}Ks(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Fs,n)}$s(e){const n=this.bs.exec(e);return n?n[1]:null}Ws(e,n){const r=this.$s(e);return jh.Es(r,n)}Gs(e,n){const r=this.Ds.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Bh.Es(new Ct(s),i,n)}js(e,n){const r=this.Cs.exec(e),i=Number(r[1]);return Tu.Es(i,n)}xs(e){return xy.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);$("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,n){const r=n?this.ps.insert(e,n):this.ps.remove(e),i=this.Ns(this.ps),s=this.Ns(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.eo(o,a).then(()=>{this.ps=r})}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let n=yy();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class iC{constructor(){this.no=new Tg,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Tg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class jU{io(e){}shutdown(){}}/**
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
 */class ZI{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Id=null;function Yp(){return Id===null?Id=function(){return 268435456+Math.round(2147483648*Math.random())}():Id++,"0x"+Id.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zU={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $U{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="WebChannelConnection";class qU extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=Yp(),l=this.vo(n,r.toUriEncodedString());$("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,l,c,i).then(d=>($("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw hr("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",l,"request:",i),d})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+sl}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=zU[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Yp();return new Promise((o,a)=>{const l=new kA;l.setWithCredentials(!0),l.listenOnce(DA.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case $d.NO_ERROR:const d=l.getResponseJson();$(Xt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case $d.TIMEOUT:$(Xt,`RPC '${e}' ${s} timed out`),a(new z(L.DEADLINE_EXCEEDED,"Request time out"));break;case $d.HTTP_ERROR:const f=l.getStatus();if($(Xt,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const w=p==null?void 0:p.error;if(w&&w.status&&w.message){const S=function(b){const T=b.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(T)>=0?T:L.UNKNOWN}(w.status);a(new z(S,w.message))}else a(new z(L.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new z(L.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{$(Xt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);$(Xt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Yp(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=OA(),a=NA(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new bA({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=s.join("");$(Xt,`Creating RPC '${e}' stream ${i}: ${d}`,l);const f=o.createWebChannel(d,l);let p=!1,w=!1;const S=new $U({lo:b=>{w?$(Xt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(p||($(Xt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),$(Xt,`RPC '${e}' stream ${i} sending:`,b),f.send(b))},ho:()=>f.close()}),A=(b,T,v)=>{b.listen(T,I=>{try{v(I)}catch(x){setTimeout(()=>{throw x},0)}})};return A(f,nu.EventType.OPEN,()=>{w||($(Xt,`RPC '${e}' stream ${i} transport opened.`),S.mo())}),A(f,nu.EventType.CLOSE,()=>{w||(w=!0,$(Xt,`RPC '${e}' stream ${i} transport closed`),S.po())}),A(f,nu.EventType.ERROR,b=>{w||(w=!0,hr(Xt,`RPC '${e}' stream ${i} transport errored:`,b),S.po(new z(L.UNAVAILABLE,"The operation could not be completed")))}),A(f,nu.EventType.MESSAGE,b=>{var T;if(!w){const v=b.data[0];re(!!v);const I=v,x=I.error||((T=I[0])===null||T===void 0?void 0:T.error);if(x){$(Xt,`RPC '${e}' stream ${i} received error:`,x);const F=x.status;let B=function(E){const R=mt[E];if(R!==void 0)return TP(R)}(F),g=x.message;B===void 0&&(B=L.INTERNAL,g="Unknown error status: "+F+" with message "+x.message),w=!0,S.po(new z(B,g)),f.close()}else $(Xt,`RPC '${e}' stream ${i} received:`,v),S.yo(v)}}),A(a,xA.STAT_EVENT,b=>{b.stat===ag.PROXY?$(Xt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===ag.NOPROXY&&$(Xt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.fo()},0),S}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function sC(){return typeof window<"u"?window:null}function Yd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(t){return new X2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Ny(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(ht(n.toString()),ht("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new z(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class WU extends oC{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=tU(this.serializer,e),r=function(s){if(!("targetChange"in s))return se.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?ft(o.readTime):se.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=yg(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Nh(l)?{documents:NP(s,l)}:{query:OP(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=PP(s,o.resumeToken);const c=gg(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(se.min())>0){a.readTime=za(s,o.snapshotVersion.toTimestamp());const c=gg(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=rU(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=yg(this.serializer),n.removeTarget=e,this.i_(n)}}class GU extends oC{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=nU(e.writeResults,e.commitTime),r=ft(e.commitTime);return this.listener.A_(r,n)}return re(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=yg(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>oc(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HU extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new z(L.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,_g(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(L.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,_g(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(L.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class KU{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(ht(n),this.y_=!1):$("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QU{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{gs(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=J(l);c.M_.add(4),await ul(c),c.N_.set("Unknown"),c.M_.delete(4),await xc(c)}(this))})}),this.N_=new KU(r,i)}}async function xc(t){if(gs(t))for(const e of t.x_)await e(!0)}async function ul(t){for(const e of t.x_)await e(!1)}function Df(t,e){const n=J(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Ly(n)?Vy(n):dl(n).Xo()&&Oy(n,e))}function Wa(t,e){const n=J(t),r=dl(n);n.F_.delete(e),r.Xo()&&aC(n,e),n.F_.size===0&&(r.Xo()?r.n_():gs(n)&&n.N_.set("Unknown"))}function Oy(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}dl(t).P_(e)}function aC(t,e){t.L_.xe(e),dl(t).I_(e)}function Vy(t){t.L_=new K2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),dl(t).start(),t.N_.w_()}function Ly(t){return gs(t)&&!dl(t).Zo()&&t.F_.size>0}function gs(t){return J(t).M_.size===0}function lC(t){t.L_=void 0}async function YU(t){t.N_.set("Online")}async function JU(t){t.F_.forEach((e,n)=>{Oy(t,e)})}async function XU(t,e){lC(t),Ly(t)?(t.N_.D_(e),Vy(t)):t.N_.set("Unknown")}async function ZU(t,e,n){if(t.N_.set("Online"),e instanceof AP&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await zh(t,r)}else if(e instanceof Qd?t.L_.Ke(e):e instanceof RP?t.L_.He(e):t.L_.We(e),!n.isEqual(se.min()))try{const r=await ZP(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const d=s.F_.get(c);d&&s.F_.set(c,d.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const d=s.F_.get(l);if(!d)return;s.F_.set(l,d.withResumeToken(St.EMPTY_BYTE_STRING,d.snapshotVersion)),aC(s,l);const f=new Kr(d.target,l,c,d.sequenceNumber);Oy(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await zh(t,r)}}async function zh(t,e,n){if(!ps(e))throw e;t.M_.add(1),await ul(t),t.N_.set("Offline"),n||(n=()=>ZP(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await xc(t)})}function uC(t,e){return e().catch(n=>zh(t,n,e))}async function cl(t){const e=J(t),n=ss(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;e4(e);)try{const i=await FU(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,t4(e,i)}catch(i){await zh(e,i)}cC(e)&&dC(e)}function e4(t){return gs(t)&&t.v_.length<10}function t4(t,e){t.v_.push(e);const n=ss(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function cC(t){return gs(t)&&!ss(t).Zo()&&t.v_.length>0}function dC(t){ss(t).start()}async function n4(t){ss(t).V_()}async function r4(t){const e=ss(t);for(const n of t.v_)e.d_(n.mutations)}async function i4(t,e,n){const r=t.v_.shift(),i=Ey.from(r,e,n);await uC(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await cl(t)}async function s4(t,e){e&&ss(t).E_&&await async function(r,i){if(function(o){return IP(o)&&o!==L.ABORTED}(i.code)){const s=r.v_.shift();ss(r).t_(),await uC(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await cl(r)}}(t,e),cC(t)&&dC(t)}async function eT(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=gs(n);n.M_.add(3),await ul(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await xc(n)}async function Sg(t,e){const n=J(t);e?(n.M_.delete(2),await xc(n)):e||(n.M_.add(2),await ul(n),n.N_.set("Unknown"))}function dl(t){return t.B_||(t.B_=function(n,r,i){const s=J(n);return s.f_(),new WU(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:YU.bind(null,t),To:JU.bind(null,t),Ao:XU.bind(null,t),h_:ZU.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),Ly(t)?Vy(t):t.N_.set("Unknown")):(await t.B_.stop(),lC(t))})),t.B_}function ss(t){return t.k_||(t.k_=function(n,r,i){const s=J(n);return s.f_(),new GU(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:n4.bind(null,t),Ao:s4.bind(null,t),R_:r4.bind(null,t),A_:i4.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await cl(t)):(await t.k_.stop(),t.v_.length>0&&($("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Dt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new My(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hl(t,e){if(ht("AsyncQueue",`${e}: ${t}`),ps(t))return new z(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=ru(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new Ea(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ea)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ea;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(){this.q_=new Ve(Y.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):ee():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ga{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ga(e,n,Ea.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o4{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class a4{constructor(){this.queries=new ms(e=>aP(e),Ac),this.onlineState="Unknown",this.z_=new Set}}async function Fy(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new o4,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=hl(o,`Initialization of query '${Go(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&By(n)}async function Uy(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function l4(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&By(n)}function u4(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function By(t){t.z_.forEach(e=>{e.next()})}var Rg,nT;(nT=Rg||(Rg={})).J_="default",nT.Cache="cache";class jy{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ga(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Ga.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Rg.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c4{constructor(e,n){this.ia=e,this.byteLength=n}sa(){return"metadata"in this.ia}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e){this.serializer=e}Ps(e){return kr(this.serializer,e)}Is(e){return e.metadata.exists?xP(this.serializer,e.document,!1):Ue.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return ft(e)}}class d4{constructor(e,n,r){this.oa=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=hC(e)}_a(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.ia.namedQuery)this.queries.push(e.ia.namedQuery);else if(e.ia.documentMetadata){this.documents.push({metadata:e.ia.documentMetadata}),e.ia.documentMetadata.exists||++n;const r=ve.fromString(e.ia.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ia.document&&(this.documents[this.documents.length-1].document=e.ia.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}aa(e){const n=new Map,r=new rT(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Ps(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||fe()).add(s);n.set(o,a)}}return n}async complete(){const e=await UU(this.localStore,new rT(this.serializer),this.documents,this.oa.id),n=this.aa(this.documents);for(const r of this.queries)await BU(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,ua:this.collectionGroups,ca:e}}}function hC(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e){this.key=e}}class pC{constructor(e){this.key=e}}class mC{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=fe(),this.mutatedKeys=fe(),this.Ia=uP(e),this.Ta=new Ea(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new tT,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const p=i.get(d),w=Pc(this.query,f)?f:null,S=!!p&&this.mutatedKeys.has(p.key),A=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let b=!1;p&&w?p.data.isEqual(w.data)?S!==A&&(r.track({type:3,doc:w}),b=!0):this.Ra(p,w)||(r.track({type:2,doc:w}),b=!0,(l&&this.Ia(w,l)>0||c&&this.Ia(w,c)<0)&&(a=!0)):!p&&w?(r.track({type:0,doc:w}),b=!0):p&&!w&&(r.track({type:1,doc:p}),b=!0,(l||c)&&(a=!0)),b&&(w?(o=o.add(w),s=A?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,f)=>function(w,S){const A=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return A(w)-A(S)}(d.type,f.type)||this.Ia(d.doc,f.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],l=this.Pa.size===0&&this.current&&!i?1:0,c=l!==this.ha;return this.ha=l,o.length!==0||c?{snapshot:new Ga(this.query,e.Ta,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new tT,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=fe(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new pC(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new fC(r))}),n}pa(e){this.la=e.hs,this.Pa=fe();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Ga.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class h4{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class f4{constructor(e){this.key=e,this.wa=!1}}class p4{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new ms(a=>aP(a),Ac),this.Da=new Map,this.Ca=new Set,this.va=new Ve(Y.comparator),this.Fa=new Map,this.Ma=new Cy,this.xa={},this.Oa=new Map,this.Na=co.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function m4(t,e,n=!0){const r=xf(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await gC(r,e,n,!0),i}async function g4(t,e){const n=xf(t);await gC(n,e,!0,!1)}async function gC(t,e,n,r){const i=await $a(t.localStore,fn(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await zy(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Df(t.remoteStore,i),a}async function zy(t,e,n,r,i){t.Ba=(f,p,w)=>async function(A,b,T,v){let I=b.view.da(T);I.Xi&&(I=await Uh(A.localStore,b.query,!1).then(({documents:g})=>b.view.da(g,I)));const x=v&&v.targetChanges.get(b.targetId),F=v&&v.targetMismatches.get(b.targetId)!=null,B=b.view.applyChanges(I,A.isPrimaryClient,x,F);return Ag(A,b.targetId,B.fa),B.snapshot}(t,f,p,w);const s=await Uh(t.localStore,e,!0),o=new mC(e,s.hs),a=o.da(s.documents),l=bc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Ag(t,n,c.fa);const d=new h4(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function _4(t,e,n){const r=J(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!Ac(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await qa(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Wa(r.remoteStore,i.targetId),Ha(r,i.targetId)}).catch(fs)):(Ha(r,i.targetId),await qa(r.localStore,i.targetId,!0))}async function y4(t,e){const n=J(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Wa(n.remoteStore,r.targetId))}async function v4(t,e,n){const r=Gy(t);try{const i=await function(o,a){const l=J(o),c=He.now(),d=a.reduce((w,S)=>w.add(S.key),fe());let f,p;return l.persistence.runTransaction("Locally write mutations","readwrite",w=>{let S=Sn(),A=fe();return l.os.getEntries(w,d).next(b=>{S=b,S.forEach((T,v)=>{v.isValidDocument()||(A=A.add(T))})}).next(()=>l.localDocuments.getOverlayedDocuments(w,S)).next(b=>{f=b;const T=[];for(const v of a){const I=W2(v,f.get(v.key).overlayedDocument);I!=null&&T.push(new hi(v.key,I,XA(I.value.mapValue),Ge.exists(!0)))}return l.mutationQueue.addMutationBatch(w,c,T,a)}).next(b=>{p=b;const T=b.applyToLocalDocumentSet(f,A);return l.documentOverlayCache.saveOverlays(w,b.batchId,T)})}).then(()=>({batchId:p.batchId,changes:dP(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.xa[o.currentUser.toKey()];c||(c=new Ve(he)),c=c.insert(a,l),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await fi(r,i.changes),await cl(r.remoteStore)}catch(i){const s=hl(i,"Failed to persist write");n.reject(s)}}async function _C(t,e){const n=J(t);try{const r=await MU(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?re(o.wa):i.removedDocuments.size>0&&(re(o.wa),o.wa=!1))}),await fi(n,r,e)}catch(r){await fs(r)}}function iT(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=J(o);l.onlineState=a;let c=!1;l.queries.forEach((d,f)=>{for(const p of f.U_)p.j_(a)&&(c=!0)}),c&&By(l)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function w4(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new Ve(Y.comparator);o=o.insert(s,Ue.newNoDocument(s,se.min()));const a=fe().add(s),l=new kc(se.min(),new Map,new Ve(he),o,a);await _C(r,l),r.va=r.va.remove(s),r.Fa.delete(e),Wy(r)}else await qa(r.localStore,e,!1).then(()=>Ha(r,e,n)).catch(fs)}async function E4(t,e){const n=J(t),r=e.batch.batchId;try{const i=await LU(n.localStore,e);qy(n,r,null),$y(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await fi(n,i)}catch(i){await fs(i)}}async function I4(t,e,n){const r=J(t);try{const i=await function(o,a){const l=J(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(re(f!==null),d=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>l.localDocuments.getDocuments(c,d))})}(r.localStore,e);qy(r,e,n),$y(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await fi(r,i)}catch(i){await fs(i)}}async function T4(t,e){const n=J(t);gs(n.remoteStore)||$("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=J(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Oa.get(r)||[];i.push(e),n.Oa.set(r,i)}catch(r){const i=hl(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function $y(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function qy(t,e,n){const r=J(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function Ha(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||yC(t,r)})}function yC(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Wa(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Wy(t))}function Ag(t,e,n){for(const r of n)r instanceof fC?(t.Ma.addReference(r.key,e),S4(t,r)):r instanceof pC?($("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||yC(t,r.key)):ee()}function S4(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||($("SyncEngine","New document in limbo: "+n),t.Ca.add(r),Wy(t))}function Wy(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new Y(ve.fromString(e)),r=t.Na.next();t.Fa.set(r,new f4(n)),t.va=t.va.insert(n,r),Df(t.remoteStore,new Kr(fn(ol(n.path)),r,"TargetPurposeLimboResolution",In.oe))}}async function fi(t,e,n){const r=J(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,l)=>{o.push(r.Ba(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const d=c&&!c.fromCache;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(c){i.push(c);const d=Dy.Ki(l.targetId,c);s.push(d)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(l,c){const d=J(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>O.forEach(c,p=>O.forEach(p.qi,w=>d.persistence.referenceDelegate.addReference(f,p.targetId,w)).next(()=>O.forEach(p.Qi,w=>d.persistence.referenceDelegate.removeReference(f,p.targetId,w)))))}catch(f){if(!ps(f))throw f;$("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const w=d.ns.get(p),S=w.snapshotVersion,A=w.withLastLimboFreeSnapshotVersion(S);d.ns=d.ns.insert(p,A)}}}(r.localStore,s))}async function R4(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await XP(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(l=>{l.reject(new z(L.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fi(n,r.us)}}function A4(t,e){const n=J(t),r=n.Fa.get(e);if(r&&r.wa)return fe().add(r.key);{let i=fe();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}async function P4(t,e){const n=J(t),r=await Uh(n.localStore,e.query,!0),i=e.view.pa(r);return n.isPrimaryClient&&Ag(n,e.targetId,i.fa),i}async function C4(t,e){const n=J(t);return nC(n.localStore,e).then(r=>fi(n,r))}async function k4(t,e,n,r){const i=J(t),s=await function(a,l){const c=J(a),d=J(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",f=>d.vn(f,l).next(p=>p?c.localDocuments.getDocuments(f,p):O.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await cl(i.remoteStore):n==="acknowledged"||n==="rejected"?(qy(i,e,r||null),$y(i,e),function(a,l){J(J(a).mutationQueue).Mn(l)}(i.localStore,e)):ee(),await fi(i,s)):$("SyncEngine","Cannot apply mutation batch with id: "+e)}async function b4(t,e){const n=J(t);if(xf(n),Gy(n),e===!0&&n.La!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await sT(n,r.toArray());n.La=!0,await Sg(n.remoteStore,!0);for(const s of i)Df(n.remoteStore,s)}else if(e===!1&&n.La!==!1){const r=[];let i=Promise.resolve();n.Da.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Ha(n,o),qa(n.localStore,o,!0))),Wa(n.remoteStore,o)}),await i,await sT(n,r),function(o){const a=J(o);a.Fa.forEach((l,c)=>{Wa(a.remoteStore,c)}),a.Ma.mr(),a.Fa=new Map,a.va=new Ve(Y.comparator)}(n),n.La=!1,await Sg(n.remoteStore,!1)}}async function sT(t,e,n){const r=J(t),i=[],s=[];for(const o of e){let a;const l=r.Da.get(o);if(l&&l.length!==0){a=await $a(r.localStore,fn(l[0]));for(const c of l){const d=r.ba.get(c),f=await P4(r,d);f.snapshot&&s.push(f.snapshot)}}else{const c=await tC(r.localStore,o);a=await $a(r.localStore,c),await zy(r,vC(c),o,!1,a.resumeToken)}i.push(a)}return r.Sa.h_(s),i}function vC(t){return oP(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function D4(t){return function(n){return J(J(n).persistence).Bi()}(J(t).localStore)}async function x4(t,e,n,r){const i=J(t);if(i.La)return void $("SyncEngine","Ignoring unexpected query state notification.");const s=i.Da.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await nC(i.localStore,lP(s[0])),a=kc.createSynthesizedRemoteEventForCurrentChange(e,n==="current",St.EMPTY_BYTE_STRING);await fi(i,o,a);break}case"rejected":await qa(i.localStore,e,!0),Ha(i,e,r);break;default:ee()}}async function N4(t,e,n){const r=xf(t);if(r.La){for(const i of e){if(r.Da.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){$("SyncEngine","Adding an already active target "+i);continue}const s=await tC(r.localStore,i),o=await $a(r.localStore,s);await zy(r,vC(s),o.targetId,!1,o.resumeToken),Df(r.remoteStore,o)}for(const i of n)r.Da.has(i)&&await qa(r.localStore,i,!1).then(()=>{Wa(r.remoteStore,i),Ha(r,i)}).catch(fs)}}function xf(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=_C.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=A4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=w4.bind(null,e),e.Sa.h_=l4.bind(null,e.eventManager),e.Sa.ka=u4.bind(null,e.eventManager),e}function Gy(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=E4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=I4.bind(null,e),e}function O4(t,e,n){const r=J(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(w,S){const A=J(w),b=ft(S.createTime);return A.persistence.runTransaction("hasNewerBundle","readonly",T=>A.$r.getBundleMetadata(T,S.id)).then(T=>!!T&&T.createTime.compareTo(b)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(w){return{taskState:"Success",documentsLoaded:w.totalDocuments,bytesLoaded:w.totalBytes,totalDocuments:w.totalDocuments,totalBytes:w.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(hC(l));const c=new d4(l,s.localStore,o.serializer);let d=await o.qa();for(;d;){const p=await c._a(d);p&&a._updateProgress(p),d=await o.qa()}const f=await c.complete();return await fi(s,f.ca,void 0),await function(w,S){const A=J(w);return A.persistence.runTransaction("Save bundle","readwrite",b=>A.$r.saveBundleMetadata(b,S))}(s.localStore,l),a._completeWith(f.progress),Promise.resolve(f.ua)}catch(l){return hr("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Pg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Dc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return JP(this.persistence,new YP,e.initialUser,this.serializer)}createPersistence(e){return new QP(bf.Hr,this.serializer)}createSharedClientState(e){return new iC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wC extends Pg{constructor(e,n,r){super(),this.Qa=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Qa.initialize(this,e),await Gy(this.Qa.syncEngine),await cl(this.Qa.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return JP(this.persistence,new YP,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new vU(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new n2(n,this.persistence);return new t2(e.asyncQueue,r)}createPersistence(e){const n=by(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?vn.withCacheSize(this.cacheSizeBytes):vn.DEFAULT;return new ky(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,sC(),Yd(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new iC}}class V4 extends wC{constructor(e,n){super(e,n,!1),this.Qa=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Qa.syncEngine;this.sharedClientState instanceof Qp&&(this.sharedClientState.syncEngine={Zs:k4.bind(null,n),Xs:x4.bind(null,n),eo:N4.bind(null,n),Bi:D4.bind(null,n),Ys:C4.bind(null,n)},await this.sharedClientState.start()),await this.persistence.fi(async r=>{await b4(this.Qa.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=sC();if(!Qp.D(n))throw new z(L.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=by(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Qp(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class Hy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>iT(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=R4.bind(null,this.syncEngine),await Sg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new a4}()}createDatastore(e){const n=Dc(e.databaseInfo.databaseId),r=function(s){return new qU(s)}(e.databaseInfo);return function(s,o,a,l){return new HU(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new QU(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>iT(this.syncEngine,n,0),function(){return ZI.D()?new ZI:new jU}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,d){const f=new p4(i,s,o,a,l,c);return d&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=J(r);$("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await ul(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Nf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):ht("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L4{constructor(e,n){this.Ua=e,this.serializer=n,this.metadata=new Dt,this.buffer=new Uint8Array,this.Wa=function(){return new TextDecoder("utf-8")}(),this.Ga().then(r=>{r&&r.sa()?this.metadata.resolve(r.ia.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ia)}`))},r=>this.metadata.reject(r))}close(){return this.Ua.cancel()}async getMetadata(){return this.metadata.promise}async qa(){return await this.getMetadata(),this.Ga()}async Ga(){const e=await this.za();if(e===null)return null;const n=this.Wa.decode(e),r=Number(n);isNaN(r)&&this.ja(`length string (${n}) is not valid number`);const i=await this.Ha(r);return new c4(JSON.parse(i),e.length+r)}Ja(){return this.buffer.findIndex(e=>e===123)}async za(){for(;this.Ja()<0&&!await this.Ya(););if(this.buffer.length===0)return null;const e=this.Ja();e<0&&this.ja("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ha(e){for(;this.buffer.length<e;)await this.Ya()&&this.ja("Reached the end of bundle when more is expected.");const n=this.Wa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}ja(e){throw this.Ua.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ya(){const e=await this.Ua.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M4{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new z(L.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=J(i),a={documents:s.map(f=>sc(o.serializer,f))},l=await o.xo("BatchGetDocuments",o.serializer.databaseId,ve.emptyPath(),a,s.length),c=new Map;l.forEach(f=>{const p=eU(o.serializer,f);c.set(p.key.toString(),p)});const d=[];return s.forEach(f=>{const p=c.get(f.toString());re(!!p),d.push(p)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new ll(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=Y.fromPath(r);this.mutations.push(new vy(i,this.precondition(i)))}),await async function(r,i){const s=J(r),o={writes:i.map(a=>oc(s.serializer,a))};await s.Co("Commit",s.serializer.databaseId,ve.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw ee();n=se.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new z(L.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(se.min())?Ge.exists(!1):Ge.updateTime(n):Ge.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(se.min()))throw new z(L.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ge.updateTime(n)}return Ge.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class F4{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Za=r.maxAttempts,this.Yo=new Ny(this.asyncQueue,"transaction_retry")}Xa(){this.Za-=1,this.eu()}eu(){this.Yo.$o(async()=>{const e=new M4(this.datastore),n=this.tu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.nu(i)}))}).catch(r=>{this.nu(r)})})}tu(e){try{const n=this.updateFunction(e);return!Sc(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}nu(e){this.Za>0&&this.ru(e)?(this.Za-=1,this.asyncQueue.enqueueAndForget(()=>(this.eu(),Promise.resolve()))):this.deferred.reject(e)}ru(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!IP(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U4{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ct.UNAUTHENTICATED,this.clientId=LA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{$("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>($("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(L.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=hl(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Jd(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await XP(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Cg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ky(t);$("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>eT(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>eT(e.remoteStore,i)),t._onlineComponents=e}function EC(t){return t.name==="FirebaseError"?t.code===L.FAILED_PRECONDITION||t.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Ky(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await Jd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!EC(n))throw n;hr("Error using user provided cache. Falling back to memory cache: "+n),await Jd(t,new Pg)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await Jd(t,new Pg);return t._offlineComponents}async function Of(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await Cg(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await Cg(t,new Hy))),t._onlineComponents}function IC(t){return Ky(t).then(e=>e.persistence)}function Qy(t){return Ky(t).then(e=>e.localStore)}function TC(t){return Of(t).then(e=>e.remoteStore)}function Yy(t){return Of(t).then(e=>e.syncEngine)}function B4(t){return Of(t).then(e=>e.datastore)}async function Ka(t){const e=await Of(t),n=e.eventManager;return n.onListen=m4.bind(null,e.syncEngine),n.onUnlisten=_4.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=g4.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=y4.bind(null,e.syncEngine),n}function j4(t){return t.asyncQueue.enqueue(async()=>{const e=await IC(t),n=await TC(t);return e.setNetworkEnabled(!0),function(i){const s=J(i);return s.M_.delete(0),xc(s)}(n)})}function z4(t){return t.asyncQueue.enqueue(async()=>{const e=await IC(t),n=await TC(t);return e.setNetworkEnabled(!1),async function(i){const s=J(i);s.M_.add(0),await ul(s),s.N_.set("Offline")}(n)})}function $4(t,e){const n=new Dt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,d){const f=J(c);return f.persistence.runTransaction("read document","readonly",p=>f.localDocuments.getDocument(p,d))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new z(L.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=hl(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await Qy(t),e,n)),n.promise}function SC(t,e,n={}){const r=new Dt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const d=new Nf({next:p=>{o.enqueueAndForget(()=>Uy(s,f));const w=p.docs.has(a);!w&&p.fromCache?c.reject(new z(L.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&p.fromCache&&l&&l.source==="server"?c.reject(new z(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new jy(ol(a.path),d,{includeMetadataChanges:!0,ra:!0});return Fy(s,f)}(await Ka(t),t.asyncQueue,e,n,r)),r.promise}function q4(t,e){const n=new Dt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await Uh(i,s,!0),l=new mC(s,a.hs),c=l.da(a.documents),d=l.applyChanges(c,!1);o.resolve(d.snapshot)}catch(a){const l=hl(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await Qy(t),e,n)),n.promise}function RC(t,e,n={}){const r=new Dt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const d=new Nf({next:p=>{o.enqueueAndForget(()=>Uy(s,f)),p.fromCache&&l.source==="server"?c.reject(new z(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new jy(a,d,{includeMetadataChanges:!0,ra:!0});return Fy(s,f)}(await Ka(t),t.asyncQueue,e,n,r)),r.promise}function W4(t,e){const n=new Nf(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){J(i).z_.add(s),s.next()}(await Ka(t),n)),()=>{n.$a(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){J(i).z_.delete(s)}(await Ka(t),n))}}function G4(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?SP().encode(o):o,function(d,f){return new L4(d,f)}(function(d,f){if(d instanceof Uint8Array)return oT(d,f);if(d instanceof ArrayBuffer)return oT(new Uint8Array(d),f);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,Dc(e));t.asyncQueue.enqueueAndForget(async()=>{O4(await Yy(t),i,r)})}function H4(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=J(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.$r.getNamedQuery(o,i))}(await Qy(t),e))}/**
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
 */function AC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy(t,e,n){if(!n)throw new z(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function PC(t,e,n,r){if(e===!0&&r===!0)throw new z(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function lT(t){if(!Y.isDocumentKey(t))throw new z(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function uT(t){if(Y.isDocumentKey(t))throw new z(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function Se(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vf(t);throw new z(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function CC(t,e){if(e<=0)throw new z(L.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}PC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=AC((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cT({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cT(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new qF;switch(r.type){case"firstParty":return new KF(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=aT.get(n);r&&($("ComponentProvider","Removing Datastore"),aT.delete(n),r.terminate())}(this),Promise.resolve()}}function kC(t,e,n,r={}){var i;const s=(t=Se(t,Nc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&hr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ct.MOCK_USER;else{a=dR(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new z(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ct(c)}t._authCredentials=new WF(new VA(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pn=class bC{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new bC(this.firestore,e,this._query)}},Ze=class DC{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ki(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new DC(this.firestore,e,this._key)}},Ki=class xC extends pn{constructor(e,n,r){super(e,n,ol(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ze(this.firestore,null,new Y(e))}withConverter(e){return new xC(this.firestore,e,this._path)}};function NC(t,e,...n){if(t=ne(t),Jy("collection","path",e),t instanceof Nc){const r=ve.fromString(e,...n);return uT(r),new Ki(t,null,r)}{if(!(t instanceof Ze||t instanceof Ki))throw new z(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return uT(r),new Ki(t.firestore,null,r)}}function K4(t,e){if(t=Se(t,Nc),Jy("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new z(L.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new pn(t,null,function(r){return new di(ve.emptyPath(),r)}(e))}function ac(t,e,...n){if(t=ne(t),arguments.length===1&&(e=LA.newId()),Jy("doc","path",e),t instanceof Nc){const r=ve.fromString(e,...n);return lT(r),new Ze(t,null,new Y(r))}{if(!(t instanceof Ze||t instanceof Ki))throw new z(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return lT(r),new Ze(t.firestore,t instanceof Ki?t.converter:null,new Y(r))}}function OC(t,e){return t=ne(t),e=ne(e),(t instanceof Ze||t instanceof Ki)&&(e instanceof Ze||e instanceof Ki)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function VC(t,e){return t=ne(t),e=ne(e),t instanceof pn&&e instanceof pn&&t.firestore===e.firestore&&Ac(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q4{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Ny(this,"async_queue_retry"),this.hu=()=>{const n=Yd();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Yd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Yd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Dt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!ps(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ht("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=My.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&ee()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function kg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Y4{constructor(){this._progressObserver={},this._taskCompletionResolver=new Dt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J4=-1;let at=class extends Nc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new Q4}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||LC(this),this._firestoreClient.terminate()}};function X4(t,e){const n=$_(),r="(default)",i=_c(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=sN("firestore");s&&kC(i,...s)}return i}function Ot(t){return t._firestoreClient||LC(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function LC(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,d){return new T2(a,l,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,AC(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new U4(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function Z4(t,e){FC(t=Se(t,at));const n=Ot(t);if(n._uninitializedComponentsProvider)throw new z(L.FAILED_PRECONDITION,"SDK cache is already specified.");hr("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new Hy;return MC(n,i,new wC(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function eB(t){FC(t=Se(t,at));const e=Ot(t);if(e._uninitializedComponentsProvider)throw new z(L.FAILED_PRECONDITION,"SDK cache is already specified.");hr("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new Hy;return MC(e,r,new V4(r,n.cacheSizeBytes))}function MC(t,e,n){const r=new Dt;return t.asyncQueue.enqueue(async()=>{try{await Jd(t,n),await Cg(t,e),r.resolve()}catch(i){const s=i;if(!EC(s))throw s;hr("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function tB(t){if(t._initialized&&!t._terminated)throw new z(L.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Dt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Cr.D())return Promise.resolve();const i=r+"main";await Cr.delete(i)}(by(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function nB(t){return function(n){const r=new Dt;return n.asyncQueue.enqueueAndForget(async()=>T4(await Yy(n),r)),r.promise}(Ot(t=Se(t,at)))}function rB(t){return j4(Ot(t=Se(t,at)))}function iB(t){return z4(Ot(t=Se(t,at)))}function sB(t,e){const n=Ot(t=Se(t,at)),r=new Y4;return G4(n,t._databaseId,e,r),r}function oB(t,e){return H4(Ot(t=Se(t,at)),e).then(n=>n?new pn(t,null,n.query):null)}function FC(t){if(t._initialized||t._terminated)throw new z(L.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nr(St.fromBase64String(e))}catch(n){throw new z(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Nr(St.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let os=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eo=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aB=/^__.*__$/;class lB{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new hi(e,this.data,this.fieldMask,n,this.fieldTransforms):new al(e,this.data,n,this.fieldTransforms)}}class UC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new hi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function BC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class Mf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Mf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return $h(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(BC(this.fu)&&aB.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class uB{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Dc(e)}Fu(e,n,r,i=!1){return new Mf({fu:e,methodName:n,vu:r,path:We.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Io(t){const e=t._freezeSettings(),n=Dc(t._databaseId);return new uB(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ff(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);iv("Data must be an object, but it was:",o,r);const a=$C(r,o);let l,c;if(s.merge)l=new Tn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const p=bg(e,f,n);if(!o.contains(p))throw new z(L.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);WC(d,p)||d.push(p)}l=new Tn(d),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new lB(new qt(a),l,c)}class Oc extends Eo{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Oc}}function jC(t,e,n){return new Mf({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Xy extends Eo{_toFieldTransform(e){return new Cc(e.path,new Ba)}isEqual(e){return e instanceof Xy}}class Zy extends Eo{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=jC(this,e,!0),r=this.Mu.map(s=>To(s,n)),i=new oo(r);return new Cc(e.path,i)}isEqual(e){return e instanceof Zy&&Da(this.Mu,e.Mu)}}class ev extends Eo{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=jC(this,e,!0),r=this.Mu.map(s=>To(s,n)),i=new ao(r);return new Cc(e.path,i)}isEqual(e){return e instanceof ev&&Da(this.Mu,e.Mu)}}class tv extends Eo{constructor(e,n){super(e),this.xu=n}_toFieldTransform(e){const n=new ja(e.serializer,mP(e.serializer,this.xu));return new Cc(e.path,n)}isEqual(e){return e instanceof tv&&this.xu===e.xu}}function nv(t,e,n,r){const i=t.Fu(1,e,n);iv("Data must be an object, but it was:",i,r);const s=[],o=qt.empty();wo(r,(l,c)=>{const d=sv(e,l,n);c=ne(c);const f=i.Su(d);if(c instanceof Oc)s.push(d);else{const p=To(c,f);p!=null&&(s.push(d),o.set(d,p))}});const a=new Tn(s);return new UC(o,a,i.fieldTransforms)}function rv(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[bg(e,r,n)],l=[i];if(s.length%2!=0)throw new z(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(bg(e,s[p])),l.push(s[p+1]);const c=[],d=qt.empty();for(let p=a.length-1;p>=0;--p)if(!WC(c,a[p])){const w=a[p];let S=l[p];S=ne(S);const A=o.Su(w);if(S instanceof Oc)c.push(w);else{const b=To(S,A);b!=null&&(c.push(w),d.set(w,b))}}const f=new Tn(c);return new UC(d,f,o.fieldTransforms)}function zC(t,e,n,r=!1){return To(n,t.Fu(r?4:3,e))}function To(t,e){if(qC(t=ne(t)))return iv("Unsupported field value:",e,t),$C(t,e);if(t instanceof Eo)return function(r,i){if(!BC(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=To(a,i.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return mP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=He.fromDate(r);return{timestampValue:za(i.serializer,s)}}if(r instanceof He){const s=new He(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:za(i.serializer,s)}}if(r instanceof Lf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Nr)return{bytesValue:PP(i.serializer,r._byteString)};if(r instanceof Ze){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Sy(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Vf(r)}`)}(t,e)}function $C(t,e){const n={};return QA(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wo(t,(r,i)=>{const s=To(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function qC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof Lf||t instanceof Nr||t instanceof Ze||t instanceof Eo)}function iv(t,e,n){if(!qC(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Vf(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function bg(t,e,n){if((e=ne(e))instanceof os)return e._internalPath;if(typeof e=="string")return sv(t,e);throw $h("Field path arguments must be of type string or ",t,!1,void 0,n)}const cB=new RegExp("[~\\*/\\[\\]]");function sv(t,e,n){if(e.search(cB)>=0)throw $h(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new os(...e.split("."))._internalPath}catch{throw $h(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $h(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new z(L.INVALID_ARGUMENT,a+t+l)}function WC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dB(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Uf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class dB extends lc{data(){return super.data()}}function Uf(t,e){return typeof e=="string"?sv(t,e):e instanceof os?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ov{}class Vc extends ov{}function Pi(t,e,...n){let r=[];e instanceof ov&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof av).length,a=s.filter(l=>l instanceof Bf).length;if(o>1||o>0&&a>0)throw new z(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Bf extends Vc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Bf(e,n,r)}_apply(e){const n=this._parse(e);return KC(e._query,n),new pn(e.firestore,e.converter,mg(e._query,n))}_parse(e){const n=Io(e.firestore);return function(s,o,a,l,c,d,f){let p;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new z(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){hT(f,d);const w=[];for(const S of f)w.push(dT(l,s,S));p={arrayValue:{values:w}}}else p=dT(l,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||hT(f,d),p=zC(a,o,f,d==="in"||d==="not-in");return we.create(c,d,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function hB(t,e,n){const r=e,i=Uf("where",t);return Bf._create(i,r,n)}class av extends ov{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new av(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Pe.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)KC(o,l),o=mg(o,l)}(e._query,n),new pn(e.firestore,e.converter,mg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class lv extends Vc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new lv(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new z(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new z(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ic(s,o)}(e._query,this._field,this._direction);return new pn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new di(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function fB(t,e="asc"){const n=e,r=Uf("orderBy",t);return lv._create(r,n)}class jf extends Vc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new jf(e,n,r)}_apply(e){return new pn(e.firestore,e.converter,Vh(e._query,this._limit,this._limitType))}}function pB(t){return CC("limit",t),jf._create("limit",t,"F")}function mB(t){return CC("limitToLast",t),jf._create("limitToLast",t,"L")}class zf extends Vc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new zf(e,n,r)}_apply(e){const n=HC(e,this.type,this._docOrFields,this._inclusive);return new pn(e.firestore,e.converter,function(i,s){return new di(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function gB(...t){return zf._create("startAt",t,!0)}function _B(...t){return zf._create("startAfter",t,!1)}class $f extends Vc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new $f(e,n,r)}_apply(e){const n=HC(e,this.type,this._docOrFields,this._inclusive);return new pn(e.firestore,e.converter,function(i,s){return new di(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function yB(...t){return $f._create("endBefore",t,!1)}function vB(...t){return $f._create("endAt",t,!0)}function HC(t,e,n,r){if(n[0]=ne(n[0]),n[0]instanceof lc)return function(s,o,a,l,c){if(!l)throw new z(L.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const f of wa(s))if(f.field.isKeyField())d.push(io(o,l.key));else{const p=l.data.field(f.field);if(Rf(p))throw new z(L.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(p===null){const w=f.field.canonicalString();throw new z(L.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${w}' (used as the orderBy) does not exist.`)}d.push(p)}return new is(d,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Io(t.firestore);return function(o,a,l,c,d,f){const p=o.explicitOrderBy;if(d.length>p.length)throw new z(L.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const w=[];for(let S=0;S<d.length;S++){const A=d[S];if(p[S].field.isKeyField()){if(typeof A!="string")throw new z(L.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof A}`);if(!_y(o)&&A.indexOf("/")!==-1)throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${A}' contains a slash.`);const b=o.path.child(ve.fromString(A));if(!Y.isDocumentKey(b))throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${b}' is not because it contains an odd number of segments.`);const T=new Y(b);w.push(io(a,T))}else{const b=zC(l,c,A);w.push(b)}}return new is(w,f)}(t._query,t.firestore._databaseId,i,e,n,r)}}function dT(t,e,n){if(typeof(n=ne(n))=="string"){if(n==="")throw new z(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_y(e)&&n.indexOf("/")!==-1)throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ve.fromString(n));if(!Y.isDocumentKey(r))throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return io(t,new Y(r))}if(n instanceof Ze)return io(t,n._key);throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vf(n)}.`)}function hT(t,e){if(!Array.isArray(t)||t.length===0)throw new z(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function KC(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class uv{convertValue(e,n="none"){switch(ro(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ts(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return wo(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Lf(it(e.latitude),it(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=my(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(tc(e));default:return null}}convertTimestamp(e){const n=si(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ve.fromString(e);re(FP(r));const i=new ns(r.get(1),r.get(3)),s=new Y(r.popFirst(5));return i.isEqual(n)||ht(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class wB extends uv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ze(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let oi=class extends lc{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Su(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Uf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},Su=class extends oi{data(e={}){return super.data(e)}},as=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Bs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Su(this._firestore,this._userDataWriter,r.key,r,new Bs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Su(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Bs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Su(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Bs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:EB(a.type),doc:l,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function EB(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}function QC(t,e){return t instanceof oi&&e instanceof oi?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof as&&e instanceof as&&t._firestore===e._firestore&&VC(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IB(t){t=Se(t,Ze);const e=Se(t.firestore,at);return SC(Ot(e),t._key).then(n=>cv(e,t,n))}class So extends uv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ze(this.firestore,null,n)}}function TB(t){t=Se(t,Ze);const e=Se(t.firestore,at),n=Ot(e),r=new So(e);return $4(n,t._key).then(i=>new oi(e,r,t._key,i,new Bs(i!==null&&i.hasLocalMutations,!0),t.converter))}function SB(t){t=Se(t,Ze);const e=Se(t.firestore,at);return SC(Ot(e),t._key,{source:"server"}).then(n=>cv(e,t,n))}function RB(t){t=Se(t,pn);const e=Se(t.firestore,at),n=Ot(e),r=new So(e);return GC(t._query),RC(n,t._query).then(i=>new as(e,r,t,i))}function AB(t){t=Se(t,pn);const e=Se(t.firestore,at),n=Ot(e),r=new So(e);return q4(n,t._query).then(i=>new as(e,r,t,i))}function PB(t){t=Se(t,pn);const e=Se(t.firestore,at),n=Ot(e),r=new So(e);return RC(n,t._query,{source:"server"}).then(i=>new as(e,r,t,i))}function Dg(t,e,n){t=Se(t,Ze);const r=Se(t.firestore,at),i=qf(t.converter,e,n);return Lc(r,[Ff(Io(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ge.none())])}function fT(t,e,n,...r){t=Se(t,Ze);const i=Se(t.firestore,at),s=Io(i);let o;return o=typeof(e=ne(e))=="string"||e instanceof os?rv(s,"updateDoc",t._key,e,n,r):nv(s,"updateDoc",t._key,e),Lc(i,[o.toMutation(t._key,Ge.exists(!0))])}function CB(t){return Lc(Se(t.firestore,at),[new ll(t._key,Ge.none())])}function kB(t,e){const n=Se(t.firestore,at),r=ac(t),i=qf(t.converter,e);return Lc(n,[Ff(Io(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ge.exists(!1))]).then(()=>r)}function YC(t,...e){var n,r,i;t=ne(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||kg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(kg(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,d;if(t instanceof Ze)c=Se(t.firestore,at),d=ol(t._key.path),l={next:f=>{e[o]&&e[o](cv(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Se(t,pn);c=Se(f.firestore,at),d=f._query;const p=new So(c);l={next:w=>{e[o]&&e[o](new as(c,p,f,w))},error:e[o+1],complete:e[o+2]},GC(t._query)}return function(p,w,S,A){const b=new Nf(A),T=new jy(w,b,S);return p.asyncQueue.enqueueAndForget(async()=>Fy(await Ka(p),T)),()=>{b.$a(),p.asyncQueue.enqueueAndForget(async()=>Uy(await Ka(p),T))}}(Ot(c),d,a,l)}function bB(t,e){return W4(Ot(t=Se(t,at)),kg(e)?e:{next:e})}function Lc(t,e){return function(r,i){const s=new Dt;return r.asyncQueue.enqueueAndForget(async()=>v4(await Yy(r),i,s)),s.promise}(Ot(t),e)}function cv(t,e,n){const r=n.docs.get(e._key),i=new So(t);return new oi(t,i,e._key,r,new Bs(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const DB={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xB=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Io(e)}set(e,n,r){this._verifyNotCommitted();const i=Oi(e,this._firestore),s=qf(i.converter,n,r),o=Ff(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ge.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Oi(e,this._firestore);let o;return o=typeof(n=ne(n))=="string"||n instanceof os?rv(this._dataReader,"WriteBatch.update",s._key,n,r,i):nv(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Ge.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Oi(e,this._firestore);return this._mutations=this._mutations.concat(new ll(n._key,Ge.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new z(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Oi(t,e){if((t=ne(t)).firestore!==e)throw new z(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let NB=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Io(n)}get(n){const r=Oi(n,this._firestore),i=new wB(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return ee();const o=s[0];if(o.isFoundDocument())return new lc(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new lc(this._firestore,i,r._key,null,r.converter);throw ee()})}set(n,r,i){const s=Oi(n,this._firestore),o=qf(s.converter,r,i),a=Ff(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=Oi(n,this._firestore);let a;return a=typeof(r=ne(r))=="string"||r instanceof os?rv(this._dataReader,"Transaction.update",o._key,r,i,s):nv(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=Oi(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Oi(e,this._firestore),r=new So(this._firestore);return super.get(e).then(i=>new oi(this._firestore,r,n._key,i._document,new Bs(!1,!1),n.converter))}};function OB(t,e,n){t=Se(t,at);const r=Object.assign(Object.assign({},DB),n);return function(s){if(s.maxAttempts<1)throw new z(L.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new Dt;return s.asyncQueue.enqueueAndForget(async()=>{const c=await B4(s);new F4(s.asyncQueue,c,a,o,l).Xa()}),l.promise}(Ot(t),i=>e(new NB(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VB(){return new Oc("deleteField")}function LB(){return new Xy("serverTimestamp")}function MB(...t){return new Zy("arrayUnion",t)}function FB(...t){return new ev("arrayRemove",t)}function UB(t){return new tv("increment",t)}(function(e,n=!0){(function(i){sl=i})(li),ri(new Xn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new at(new GF(r.getProvider("auth-internal")),new YF(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new z(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ns(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Vn(aI,"4.6.3",e),Vn(aI,"4.6.3","esm2017")})();const BB="@firebase/firestore-compat",jB="0.3.32";/**
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
 */function dv(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new z("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(){if(typeof Uint8Array>"u")throw new z("unimplemented","Uint8Arrays are not available in this environment.")}function mT(){if(!E2())throw new z("unimplemented","Blobs are unavailable in Firestore in this environment.")}let JC=class xg{constructor(e){this._delegate=e}static fromBase64String(e){return mT(),new xg(Nr.fromBase64String(e))}static fromUint8Array(e){return pT(),new xg(Nr.fromUint8Array(e))}toBase64(){return mT(),this._delegate.toBase64()}toUint8Array(){return pT(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(t){return zB(t,["next","error","complete"])}function zB(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $B{enableIndexedDbPersistence(e,n){return Z4(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return eB(e._delegate)}clearIndexedDbPersistence(e){return tB(e._delegate)}}class XC{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ns||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&hr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){kC(this._delegate,e,n,r)}enableNetwork(){return rB(this._delegate)}disableNetwork(){return iB(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,PC("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return nB(this._delegate)}onSnapshotsInSync(e){return bB(this._delegate,e)}get app(){if(!this._appCompat)throw new z("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Qa(this,NC(this._delegate,e))}catch(n){throw un(n,"collection()","Firestore.collection()")}}doc(e){try{return new Gn(this,ac(this._delegate,e))}catch(n){throw un(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new ln(this,K4(this._delegate,e))}catch(n){throw un(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return OB(this._delegate,n=>e(new ZC(this,n)))}batch(){return Ot(this._delegate),new e1(new xB(this._delegate,e=>Lc(this._delegate,e)))}loadBundle(e){return sB(this._delegate,e)}namedQuery(e){return oB(this._delegate,e).then(n=>n?new ln(this,n):null)}}class Wf extends uv{constructor(e){super(),this.firestore=e}convertBytes(e){return new JC(new Nr(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Gn.forKey(n,this.firestore,null)}}function qB(t){zF(t)}class ZC{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Wf(e)}get(e){const n=js(e);return this._delegate.get(n).then(r=>new uc(this._firestore,new oi(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=js(e);return r?(dv("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=js(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=js(e);return this._delegate.delete(n),this}}class e1{constructor(e){this._delegate=e}set(e,n,r){const i=js(e);return r?(dv("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=js(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=js(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class ho{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Su(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new cc(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=ho.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new ho(e,new Wf(e),n),i.set(n,s)),s}}ho.INSTANCES=new WeakMap;class Gn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Wf(e)}static forPath(e,n,r){if(e.length%2!==0)throw new z("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Gn(n,new Ze(n._delegate,r,new Y(e)))}static forKey(e,n,r){return new Gn(n,new Ze(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Qa(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Qa(this.firestore,NC(this._delegate,e))}catch(n){throw un(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=ne(e),e instanceof Ze?OC(this._delegate,e):!1}set(e,n){n=dv("DocumentReference.set",n);try{return n?Dg(this._delegate,e,n):Dg(this._delegate,e)}catch(r){throw un(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?fT(this._delegate,e):fT(this._delegate,e,n,...r)}catch(i){throw un(i,"updateDoc()","DocumentReference.update()")}}delete(){return CB(this._delegate)}onSnapshot(...e){const n=t1(e),r=n1(e,i=>new uc(this.firestore,new oi(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return YC(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=TB(this._delegate):(e==null?void 0:e.source)==="server"?n=SB(this._delegate):n=IB(this._delegate),n.then(r=>new uc(this.firestore,new oi(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Gn(this.firestore,e?this._delegate.withConverter(ho.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function un(t,e,n){return t.message=t.message.replace(e,n),t}function t1(t){for(const e of t)if(typeof e=="object"&&!Ng(e))return e;return{}}function n1(t,e){var n,r;let i;return Ng(t[0])?i=t[0]:Ng(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class uc{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Gn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return QC(this._delegate,e._delegate)}}class cc extends uc{data(e){const n=this._delegate.data(e);return this._delegate._converter||$F(n!==void 0),n}}class ln{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Wf(e)}where(e,n,r){try{return new ln(this.firestore,Pi(this._delegate,hB(e,n,r)))}catch(i){throw un(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new ln(this.firestore,Pi(this._delegate,fB(e,n)))}catch(r){throw un(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new ln(this.firestore,Pi(this._delegate,pB(e)))}catch(n){throw un(n,"limit()","Query.limit()")}}limitToLast(e){try{return new ln(this.firestore,Pi(this._delegate,mB(e)))}catch(n){throw un(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new ln(this.firestore,Pi(this._delegate,gB(...e)))}catch(n){throw un(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new ln(this.firestore,Pi(this._delegate,_B(...e)))}catch(n){throw un(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new ln(this.firestore,Pi(this._delegate,yB(...e)))}catch(n){throw un(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new ln(this.firestore,Pi(this._delegate,vB(...e)))}catch(n){throw un(n,"endAt()","Query.endAt()")}}isEqual(e){return VC(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=AB(this._delegate):(e==null?void 0:e.source)==="server"?n=PB(this._delegate):n=RB(this._delegate),n.then(r=>new Og(this.firestore,new as(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=t1(e),r=n1(e,i=>new Og(this.firestore,new as(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return YC(this._delegate,n,r)}withConverter(e){return new ln(this.firestore,e?this._delegate.withConverter(ho.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class WB{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new cc(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Og{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new ln(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new cc(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new WB(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new cc(this._firestore,r))})}isEqual(e){return QC(this._delegate,e._delegate)}}class Qa extends ln{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Gn(this.firestore,e):null}doc(e){try{return e===void 0?new Gn(this.firestore,ac(this._delegate)):new Gn(this.firestore,ac(this._delegate,e))}catch(n){throw un(n,"doc()","CollectionReference.doc()")}}add(e){return kB(this._delegate,e).then(n=>new Gn(this.firestore,n))}isEqual(e){return OC(this._delegate,e._delegate)}withConverter(e){return new Qa(this.firestore,e?this._delegate.withConverter(ho.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function js(t){return Se(t,Ze)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(...e){this._delegate=new os(...e)}static documentId(){return new hv(We.keyField().canonicalString())}isEqual(e){return e=ne(e),e instanceof os?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e){this._delegate=e}static serverTimestamp(){const e=LB();return e._methodName="FieldValue.serverTimestamp",new Ns(e)}static delete(){const e=VB();return e._methodName="FieldValue.delete",new Ns(e)}static arrayUnion(...e){const n=MB(...e);return n._methodName="FieldValue.arrayUnion",new Ns(n)}static arrayRemove(...e){const n=FB(...e);return n._methodName="FieldValue.arrayRemove",new Ns(n)}static increment(e){const n=UB(e);return n._methodName="FieldValue.increment",new Ns(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const GB={Firestore:XC,GeoPoint:Lf,Timestamp:He,Blob:JC,Transaction:ZC,WriteBatch:e1,DocumentReference:Gn,DocumentSnapshot:uc,Query:ln,QueryDocumentSnapshot:cc,QuerySnapshot:Og,CollectionReference:Qa,FieldPath:hv,FieldValue:Ns,setLogLevel:qB,CACHE_SIZE_UNLIMITED:J4};function HB(t,e){t.INTERNAL.registerComponent(new Xn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},GB)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KB(t){HB(t,(e,n)=>new XC(e,n,new $B)),t.registerVersion(BB,jB)}KB(be);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1="firebasestorage.googleapis.com",i1="storageBucket",QB=2*60*1e3,YB=10*60*1e3,JB=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends tn{constructor(e,n,r=0){super(Jp(e),`Firebase Storage: ${n} (${Jp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,tt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Jp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var je;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(je||(je={}));function Jp(t){return"storage/"+t}function fv(){const t="An unknown error occurred, please check the error payload for server response.";return new tt(je.UNKNOWN,t)}function XB(t){return new tt(je.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function ZB(t){return new tt(je.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ej(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new tt(je.UNAUTHENTICATED,t)}function tj(){return new tt(je.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function nj(t){return new tt(je.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function s1(){return new tt(je.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function o1(){return new tt(je.CANCELED,"User canceled the upload/download.")}function rj(t){return new tt(je.INVALID_URL,"Invalid URL '"+t+"'.")}function ij(t){return new tt(je.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function sj(){return new tt(je.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+i1+"' property when initializing the app?")}function a1(){return new tt(je.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function oj(){return new tt(je.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function aj(){return new tt(je.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function lj(t){return new tt(je.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ia(t){return new tt(je.INVALID_ARGUMENT,t)}function l1(){return new tt(je.APP_DELETED,"The Firebase app was deleted.")}function u1(t){return new tt(je.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ru(t,e){return new tt(je.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Kl(t){throw new tt(je.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=en.makeFromUrl(e,n)}catch{return new en(e,"")}if(r.path==="")return r;throw ij(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(x){x.path_=decodeURIComponent(x.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",w=new RegExp(`^https?://${f}/${d}/b/${i}/o${p}`,"i"),S={bucket:1,path:3},A=n===r1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",T=new RegExp(`^https?://${A}/${i}/${b}`,"i"),I=[{regex:a,indices:l,postModify:s},{regex:w,indices:S,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let x=0;x<I.length;x++){const F=I[x],B=F.regex.exec(e);if(B){const g=B[F.indices.bucket];let _=B[F.indices.path];_||(_=""),r=new en(g,_),F.postModify(r);break}}if(r==null)throw rj(e);return r}}class uj{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cj(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function d(...b){c||(c=!0,e.apply(null,b))}function f(b){i=setTimeout(()=>{i=null,t(w,l())},b)}function p(){s&&clearTimeout(s)}function w(b,...T){if(c){p();return}if(b){p(),d.call(null,b,...T);return}if(l()||o){p(),d.call(null,b,...T);return}r<64&&(r*=2);let I;a===1?(a=2,I=0):I=(r+Math.random())*1e3,f(I)}let S=!1;function A(b){S||(S=!0,p(),!c&&(i!==null?(b||(a=2),clearTimeout(i),f(0)):b||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,A(!0)},n),A}function dj(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hj(t){return t!==void 0}function fj(t){return typeof t=="function"}function pj(t){return typeof t=="object"&&!Array.isArray(t)}function Gf(t){return typeof t=="string"||t instanceof String}function gT(t){return pv()&&t instanceof Blob}function pv(){return typeof Blob<"u"}function Vg(t,e,n,r){if(r<e)throw Ia(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ia(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function c1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Hs||(Hs={}));/**
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
 */function d1(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mj{constructor(e,n,r,i,s,o,a,l,c,d,f,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,S)=>{this.resolve_=w,this.reject_=S,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Td(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Hs.NO_ERROR,l=s.getStatus();if(!a||d1(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Hs.ABORT;r(!1,new Td(!1,null,d));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Td(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());hj(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=fv();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?l1():o1();o(l)}else{const l=s1();o(l)}};this.canceled_?n(!1,new Td(!1,null,!0)):this.backoffId_=cj(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&dj(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Td{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function gj(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function _j(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function yj(t,e){e&&(t["X-Firebase-GMPID"]=e)}function vj(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function wj(t,e,n,r,i,s,o=!0){const a=c1(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return yj(c,e),gj(c,n),_j(c,s),vj(c,r),new mj(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ej(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Ij(...t){const e=Ej();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(pv())return new Blob(t);throw new tt(je.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Tj(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Sj(t){if(typeof atob>"u")throw lj("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Xp{constructor(e,n){this.data=e,this.contentType=n||null}}function h1(t,e){switch(t){case Hn.RAW:return new Xp(f1(e));case Hn.BASE64:case Hn.BASE64URL:return new Xp(p1(t,e));case Hn.DATA_URL:return new Xp(Aj(e),Pj(e))}throw fv()}function f1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Rj(t){let e;try{e=decodeURIComponent(t)}catch{throw Ru(Hn.DATA_URL,"Malformed data URL.")}return f1(e)}function p1(t,e){switch(t){case Hn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ru(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Hn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ru(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Sj(e)}catch(i){throw i.message.includes("polyfill")?i:Ru(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class m1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ru(Hn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Cj(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Aj(t){const e=new m1(t);return e.base64?p1(Hn.BASE64,e.rest):Rj(e.rest)}function Pj(t){return new m1(t).contentType}function Cj(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n){let r=0,i="";gT(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(gT(this.data_)){const r=this.data_,i=Tj(r,e,n);return i===null?null:new Ir(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Ir(r,!0)}}static getBlob(...e){if(pv()){const n=e.map(r=>r instanceof Ir?r.data_:r);return new Ir(Ij.apply(null,n))}else{const n=e.map(o=>Gf(o)?h1(Hn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Ir(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(t){let e;try{e=JSON.parse(t)}catch{return null}return pj(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kj(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function bj(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function g1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dj(t,e){return e}class on{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||Dj}}let Sd=null;function xj(t){return!Gf(t)||t.length<2?t:g1(t)}function Mc(){if(Sd)return Sd;const t=[];t.push(new on("bucket")),t.push(new on("generation")),t.push(new on("metageneration")),t.push(new on("name","fullPath",!0));function e(s,o){return xj(o)}const n=new on("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new on("size");return i.xform=r,t.push(i),t.push(new on("timeCreated")),t.push(new on("updated")),t.push(new on("md5Hash",null,!0)),t.push(new on("cacheControl",null,!0)),t.push(new on("contentDisposition",null,!0)),t.push(new on("contentEncoding",null,!0)),t.push(new on("contentLanguage",null,!0)),t.push(new on("contentType",null,!0)),t.push(new on("metadata","customMetadata",!0)),Sd=t,Sd}function Nj(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new en(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function Oj(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return Nj(r,t),r}function _1(t,e,n){const r=mv(e);return r===null?null:Oj(t,r,n)}function Vj(t,e,n,r){const i=mv(e);if(i===null||!Gf(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,f=t.fullPath,p="/b/"+o(d)+"/o/"+o(f),w=_s(p,n,r),S=c1({alt:"media",token:c});return w+S})[0]}function gv(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
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
 */const _T="prefixes",yT="items";function Lj(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[_T])for(const i of n[_T]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new en(e,s));r.prefixes.push(o)}if(n[yT])for(const i of n[yT]){const s=t._makeStorageReference(new en(e,i.name));r.items.push(s)}return r}function Mj(t,e,n){const r=mv(n);return r===null?null:Lj(t,e,r)}class pi{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t){if(!t)throw fv()}function Hf(t,e){function n(r,i){const s=_1(t,i,e);return br(s!==null),s}return n}function Fj(t,e){function n(r,i){const s=Mj(t,e,i);return br(s!==null),s}return n}function Uj(t,e){function n(r,i){const s=_1(t,i,e);return br(s!==null),Vj(s,i,t.host,t._protocol)}return n}function fl(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=tj():i=ej():n.getStatus()===402?i=ZB(t.bucket):n.getStatus()===403?i=nj(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Kf(t){const e=fl(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=XB(t.path)),s.serverResponse=i.serverResponse,s}return n}function y1(t,e,n){const r=e.fullServerUrl(),i=_s(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new pi(i,s,Hf(t,n),o);return a.errorHandler=Kf(e),a}function Bj(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=_s(o,t.host,t._protocol),l="GET",c=t.maxOperationRetryTime,d=new pi(a,l,Fj(t,e.bucket),c);return d.urlParams=s,d.errorHandler=fl(e),d}function jj(t,e,n){const r=e.fullServerUrl(),i=_s(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new pi(i,s,Uj(t,n),o);return a.errorHandler=Kf(e),a}function zj(t,e,n,r){const i=e.fullServerUrl(),s=_s(i,t.host,t._protocol),o="PATCH",a=gv(n,r),l={"Content-Type":"application/json; charset=utf-8"},c=t.maxOperationRetryTime,d=new pi(s,o,Hf(t,r),c);return d.headers=l,d.body=a,d.errorHandler=Kf(e),d}function $j(t,e){const n=e.fullServerUrl(),r=_s(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,c){}const a=new pi(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=Kf(e),a}function qj(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function v1(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=qj(null,e)),r}function w1(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let I="";for(let x=0;x<2;x++)I=I+Math.random().toString().slice(2);return I}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=v1(e,r,i),d=gv(c,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,p=`\r
--`+l+"--",w=Ir.getBlob(f,r,p);if(w===null)throw a1();const S={name:c.fullPath},A=_s(s,t.host,t._protocol),b="POST",T=t.maxUploadRetryTime,v=new pi(A,b,Hf(t,n),T);return v.urlParams=S,v.headers=o,v.body=w.uploadData(),v.errorHandler=fl(e),v}class qh{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function _v(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{br(!1)}return br(!!n&&(e||["active"]).indexOf(n)!==-1),n}function Wj(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=v1(e,r,i),a={name:o.fullPath},l=_s(s,t.host,t._protocol),c="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=gv(o,n),p=t.maxUploadRetryTime;function w(A){_v(A);let b;try{b=A.getResponseHeader("X-Goog-Upload-URL")}catch{br(!1)}return br(Gf(b)),b}const S=new pi(l,c,w,p);return S.urlParams=a,S.headers=d,S.body=f,S.errorHandler=fl(e),S}function Gj(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const d=_v(c,["active","final"]);let f=null;try{f=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{br(!1)}f||br(!1);const p=Number(f);return br(!isNaN(p)),new qh(p,r.size(),d==="final")}const o="POST",a=t.maxUploadRetryTime,l=new pi(n,o,s,a);return l.headers=i,l.errorHandler=fl(e),l}const vT=256*1024;function Hj(t,e,n,r,i,s,o,a){const l=new qh(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw oj();const c=l.total-l.current;let d=c;i>0&&(d=Math.min(d,i));const f=l.current,p=f+d;let w="";d===0?w="finalize":c===d?w="upload, finalize":w="upload";const S={"X-Goog-Upload-Command":w,"X-Goog-Upload-Offset":`${l.current}`},A=r.slice(f,p);if(A===null)throw a1();function b(x,F){const B=_v(x,["active","final"]),g=l.current+d,_=r.size();let E;return B==="final"?E=Hf(e,s)(x,F):E=null,new qh(g,_,B==="final",E)}const T="POST",v=e.maxUploadRetryTime,I=new pi(n,T,b,v);return I.headers=S,I.body=A.uploadData(),I.progressCallback=a||null,I.errorHandler=fl(t),I}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kj={STATE_CHANGED:"state_changed"},cn={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Zp(t){switch(t){case"running":case"pausing":case"canceling":return cn.RUNNING;case"paused":return cn.PAUSED;case"success":return cn.SUCCESS;case"canceled":return cn.CANCELED;case"error":return cn.ERROR;default:return cn.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qj{constructor(e,n,r){if(fj(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class Yj{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Hs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Hs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Hs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Kl("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Kl("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Kl("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Kl("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Kl("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Jj extends Yj{initXhr(){this.xhr_.responseType="text"}}function ar(){return new Jj}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=Mc(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(je.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(d1(i.status,[]))if(s)i=s1();else{this.sleepTime=Math.max(this.sleepTime*2,JB),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(je.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=Wj(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,ar,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=Gj(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,ar,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=vT*this._chunkMultiplier,n=new qh(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=Hj(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,ar,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){vT*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=y1(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,ar,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=w1(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,ar,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=o1(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Zp(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new Qj(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Zp(this._state)){case cn.SUCCESS:qo(this._resolve.bind(null,this.snapshot))();break;case cn.CANCELED:case cn.ERROR:const n=this._reject;qo(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Zp(this._state)){case cn.RUNNING:case cn.PAUSED:e.next&&qo(e.next.bind(e,this.snapshot))();break;case cn.SUCCESS:e.complete&&qo(e.complete.bind(e))();break;case cn.CANCELED:case cn.ERROR:e.error&&qo(e.error.bind(e,this._error))();break;default:e.error&&qo(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class fo{constructor(e,n){this._service=e,n instanceof en?this._location=n:this._location=en.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new fo(e,n)}get root(){const e=new en(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return g1(this._location.path)}get storage(){return this._service}get parent(){const e=kj(this._location.path);if(e===null)return null;const n=new en(this._location.bucket,e);return new fo(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw u1(e)}}function Xj(t,e,n){t._throwIfRoot("uploadBytes");const r=w1(t.storage,t._location,Mc(),new Ir(e,!0),n);return t.storage.makeRequestWithTokens(r,ar).then(i=>({metadata:i,ref:t}))}function Zj(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new E1(t,new Ir(e),n)}function ez(t){const e={prefixes:[],items:[]};return I1(t,e).then(()=>e)}async function I1(t,e,n){const i=await T1(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await I1(t,e,i.nextPageToken)}function T1(t,e){e!=null&&typeof e.maxResults=="number"&&Vg("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=Bj(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,ar)}function tz(t){t._throwIfRoot("getMetadata");const e=y1(t.storage,t._location,Mc());return t.storage.makeRequestWithTokens(e,ar)}function nz(t,e){t._throwIfRoot("updateMetadata");const n=zj(t.storage,t._location,e,Mc());return t.storage.makeRequestWithTokens(n,ar)}function rz(t){t._throwIfRoot("getDownloadURL");const e=jj(t.storage,t._location,Mc());return t.storage.makeRequestWithTokens(e,ar).then(n=>{if(n===null)throw aj();return n})}function iz(t){t._throwIfRoot("deleteObject");const e=$j(t.storage,t._location);return t.storage.makeRequestWithTokens(e,ar)}function S1(t,e){const n=bj(t._location.path,e),r=new en(t._location.bucket,n);return new fo(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sz(t){return/^[A-Za-z]+:\/\//.test(t)}function oz(t,e){return new fo(t,e)}function R1(t,e){if(t instanceof yv){const n=t;if(n._bucket==null)throw sj();const r=new fo(n,n._bucket);return e!=null?R1(r,e):r}else return e!==void 0?S1(t,e):t}function az(t,e){if(e&&sz(e)){if(t instanceof yv)return oz(t,e);throw Ia("To use ref(service, url), the first argument must be a Storage instance.")}else return R1(t,e)}function wT(t,e){const n=e==null?void 0:e[i1];return n==null?null:en.makeFromBucketSpec(n,t)}function lz(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:dR(i,t.app.options.projectId))}class yv{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=r1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=QB,this._maxUploadRetryTime=YB,this._requests=new Set,i!=null?this._bucket=en.makeFromBucketSpec(i,this._host):this._bucket=wT(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=en.makeFromBucketSpec(this._url,e):this._bucket=wT(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Vg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Vg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new fo(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new uj(l1());{const o=wj(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const ET="@firebase/storage",IT="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uz="storage";function cz(t,e,n){return t=ne(t),Xj(t,e,n)}function dz(t,e,n){return t=ne(t),Zj(t,e,n)}function hz(t){return t=ne(t),tz(t)}function fz(t,e){return t=ne(t),nz(t,e)}function pz(t,e){return t=ne(t),T1(t,e)}function mz(t){return t=ne(t),ez(t)}function A1(t){return t=ne(t),rz(t)}function gz(t){return t=ne(t),iz(t)}function Lg(t,e){return t=ne(t),az(t,e)}function _z(t,e){return S1(t,e)}function yz(t,e,n,r={}){lz(t,e,n,r)}function vz(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new yv(n,r,i,e,li)}function wz(){ri(new Xn(uz,vz,"PUBLIC").setMultipleInstances(!0)),Vn(ET,IT,""),Vn(ET,IT,"esm2017")}wz();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Rd(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new Rd(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new Rd(o,this,this._ref)):s={next:n.next?o=>n.next(new Rd(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class ST{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new Xr(e,this._service))}get items(){return this._delegate.items.map(e=>new Xr(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
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
 */class Xr{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=_z(this._delegate,e);return new Xr(n,this.storage)}get root(){return new Xr(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new Xr(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new TT(dz(this._delegate,e,n),this)}putString(e,n=Hn.RAW,r){this._throwIfRoot("putString");const i=h1(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new TT(new E1(this._delegate,new Ir(i.data,!0),s),this)}listAll(){return mz(this._delegate).then(e=>new ST(e,this.storage))}list(e){return pz(this._delegate,e||void 0).then(n=>new ST(n,this.storage))}getMetadata(){return hz(this._delegate)}updateMetadata(e){return fz(this._delegate,e)}getDownloadURL(){return A1(this._delegate)}delete(){return this._throwIfRoot("delete"),gz(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw u1(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(RT(e))throw Ia("ref() expected a child path but got a URL, use refFromURL instead.");return new Xr(Lg(this._delegate,e),this)}refFromURL(e){if(!RT(e))throw Ia("refFromURL() expected a full URL but got a child path, use ref() instead.");try{en.makeFromUrl(e,this._delegate.host)}catch{throw Ia("refFromUrl() expected a valid full URL but got an invalid one.")}return new Xr(Lg(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){yz(this._delegate,e,n,r)}}function RT(t){return/^[A-Za-z]+:\/\//.test(t)}const Ez="@firebase/storage-compat",Iz="0.3.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tz="storage-compat";function Sz(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new P1(n,r)}function Rz(t){const e={TaskState:cn,TaskEvent:Kj,StringFormat:Hn,Storage:P1,Reference:Xr};t.INTERNAL.registerComponent(new Xn(Tz,Sz,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(Ez,Iz)}Rz(be);const Az={apiKey:"AIzaSyCknnv2K7Zlzh-cxqbAb1lDuoFB79JNvoY",authDomain:"nationsglory-62812.firebaseapp.com",projectId:"nationsglory-62812",storageBucket:"nationsglory-62812.appspot.com",messagingSenderId:"1062049263686",appId:"1:1062049263686:web:42dc7925af2b4f1da69a47",measurementId:"G-156LHMY0NL"};be.apps.length||be.initializeApp(Az);const Pz=()=>{const[t,e]=j.useState(""),[n,r]=j.useState(""),[i,s]=j.useState(""),[o,a]=j.useState(""),[l,c]=j.useState(""),[d,f]=j.useState(null),[p,w]=j.useState(""),[S,A]=j.useState(!1),b=async()=>{if(w(""),n!==i){w("Les mots de passe ne correspondent pas.");return}A(!0);try{const v=await be.auth().createUserWithEmailAndPassword(t,n);if(d){const x=be.storage().ref().child(`profiles/${v.user.uid}`);await x.put(d);const F=await x.getDownloadURL();await v.user.updateProfile({displayName:`${o} ${l}`,photoURL:F}),await be.firestore().collection("users").doc(v.user.uid).set({firstName:o,lastName:l,email:t,photoURL:F}),console.log("Profil utilisateur mis à jour avec succès.")}else await v.user.updateProfile({displayName:`${o} ${l}`}),await be.firestore().collection("users").doc(v.user.uid).set({firstName:o,lastName:l,email:t});console.log("Inscription réussie !"),window.location.href="/nationglorycomu/"}catch(v){w(v.message),console.error(v.message)}finally{A(!1)}},T=async()=>{A(!0);try{const v=new be.auth.GoogleAuthProvider,I=await be.auth().signInWithPopup(v),x=I.user.email,{given_name:F,family_name:B}=I.additionalUserInfo.profile,g=I.user.photoURL||"https://firebasestorage.googleapis.com/v0/b/nationsglory-62812.appspot.com/o/Prendre%20sa%20sant%C3%A9%20en%20main%20n%E2%80%99a%20jamais%20%C3%A9t%C3%A9%20aussi%20simple.jpg?alt=media&token=dc085ed1-9a30-4dc8-92cc-ad7eaa8a840c";await be.firestore().collection("users").doc(I.user.uid).set({firstName:F,lastName:B,email:x,photoURL:g}),console.log("Inscription avec Google réussie !"),window.location.href="/nationglorycomu/"}catch(v){w(v.message),console.error(v.message)}finally{A(!1)}};return Q.jsxs("div",{children:[Q.jsx("h2",{children:"Inscription"}),p&&Q.jsx("p",{style:{color:"red"},children:p}),Q.jsx("input",{type:"text",placeholder:"Prénom",value:o,onChange:v=>a(v.target.value)}),Q.jsx("input",{type:"text",placeholder:"Nom",value:l,onChange:v=>c(v.target.value)}),Q.jsx("input",{type:"email",placeholder:"Adresse email",value:t,onChange:v=>e(v.target.value)}),Q.jsx("input",{type:"password",placeholder:"Mot de passe",value:n,onChange:v=>r(v.target.value)}),Q.jsx("input",{type:"password",placeholder:"Confirmer le mot de passe",value:i,onChange:v=>s(v.target.value)}),Q.jsx("input",{type:"file",accept:"image/*",onChange:v=>f(v.target.files[0])}),Q.jsx("button",{onClick:b,disabled:S,children:"S'inscrire"}),Q.jsx("button",{onClick:T,disabled:S,children:"S'inscrire avec Google"})]})},Cz=()=>{const[t,e]=j.useState(""),[n,r]=j.useState(""),[i,s]=j.useState(""),[o,a]=j.useState(!1),l=async()=>{s(""),a(!0);try{await be.auth().signInWithEmailAndPassword(t,n),console.log("Connexion réussie !"),window.location.href="/nationglorycomu/"}catch(d){s(d.message),console.error(d.message)}finally{a(!1)}},c=async()=>{s(""),a(!0);try{const d=new be.auth.GoogleAuthProvider;await be.auth().signInWithPopup(d),console.log("Connexion réussie avec Google !"),window.location.href="/nationglorycomu/"}catch(d){s(d.message),console.error(d.message)}finally{a(!1)}};return Q.jsxs("div",{children:[Q.jsx("h2",{children:"Connexion"}),i&&Q.jsx("p",{style:{color:"red"},children:i}),Q.jsx("input",{type:"email",placeholder:"Adresse email",value:t,onChange:d=>e(d.target.value)}),Q.jsx("input",{type:"password",placeholder:"Mot de passe",value:n,onChange:d=>r(d.target.value)}),Q.jsx("button",{onClick:l,disabled:o,children:"Se connecter"}),Q.jsx("button",{onClick:c,disabled:o,children:"Se connecter avec Google"})]})},C1=()=>{const t=async()=>{try{await be.auth().signOut(),console.log("Déconnexion réussie !"),window.location.href="/nationglorycomu/"}catch(e){console.error(e.message)}};return Q.jsx("div",{children:Q.jsx("button",{onClick:t,children:"Se déconnecter"})})},vv=()=>{const t=be.auth().currentUser;return Q.jsx("nav",{children:Q.jsxs("ul",{children:[Q.jsx("li",{children:Q.jsx(Vp,{to:"/nationglorycomu/",children:Q.jsx("button",{children:"Accueil"})})}),t?Q.jsxs(Q.Fragment,{children:[Q.jsx("li",{children:Q.jsx(Vp,{to:"/nationglorycomu/Profile",children:Q.jsx("button",{children:"Profil"})})}),Q.jsx("li",{children:Q.jsx(C1,{})})]}):Q.jsx("li",{children:Q.jsx(Vp,{to:"/nationglorycomu/Auth",children:Q.jsx("button",{children:"Connexion"})})})]})})},kz=()=>{const[t,e]=j.useState(!0);return Q.jsxs("div",{children:[Q.jsx(vv,{}),t?Q.jsx(Cz,{}):Q.jsx(Pz,{}),Q.jsx("button",{onClick:()=>e(!t),children:t?"S'inscrire":"Se connecter"})]})};let Ad;const bz=new Uint8Array(16);function Dz(){if(!Ad&&(Ad=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Ad))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ad(bz)}const jt=[];for(let t=0;t<256;++t)jt.push((t+256).toString(16).slice(1));function xz(t,e=0){return jt[t[e+0]]+jt[t[e+1]]+jt[t[e+2]]+jt[t[e+3]]+"-"+jt[t[e+4]]+jt[t[e+5]]+"-"+jt[t[e+6]]+jt[t[e+7]]+"-"+jt[t[e+8]]+jt[t[e+9]]+"-"+jt[t[e+10]]+jt[t[e+11]]+jt[t[e+12]]+jt[t[e+13]]+jt[t[e+14]]+jt[t[e+15]]}const Nz=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),AT={randomUUID:Nz};function Oz(t,e,n){if(AT.randomUUID&&!e&&!t)return AT.randomUUID();t=t||{};const r=t.random||(t.rng||Dz)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,xz(r)}const Vz=()=>{const[t,e]=j.useState(null),[n,r]=j.useState(""),[i,s]=j.useState(""),[o,a]=j.useState("");j.useState("");const[l,c]=j.useState(""),[d,f]=j.useState(""),[p,w]=j.useState(null),[S,A]=j.useState(!1),[b,T]=j.useState(null),[v,I]=j.useState(null),x=tR();j.useEffect(()=>{const C=be.auth().onAuthStateChanged(P=>{P?(e(P),A(P.providerData.some(Ie=>Ie.providerId==="google.com"))):(e(""),x("/nationglorycomu/Auth"))});return()=>C()},[]);const F=async()=>{try{const C=new be.auth.GoogleAuthProvider;await be.auth().currentUser.linkWithPopup(C),console.log("Compte Google lié avec succès !"),A(!0),location.reload()}catch(C){w(C.message),console.error(C.message)}},B=async()=>{try{await be.auth().currentUser.updateEmail(n),console.log("Adresse email mise à jour avec succès !"),location.reload()}catch(C){w(C.message),console.error(C.message)}},g=async()=>{try{if(i!==o){w("les mots de passe doivent correspondre.");return}await be.auth().currentUser.updatePassword(i),console.log("Mot de passe mis à jour avec succès !"),location.reload()}catch(C){w(C.message),console.error(C.message)}},_=async()=>{try{await be.auth().currentUser.updateProfile({displayName:`${l} ${d}`}),console.log("Nom mis à jour avec succès !"),location.reload()}catch(C){w(C.message),console.error(C.message)}},E=C=>{I(C.target.files[0])},R=async()=>{try{if(v!==null){const C=Lg(be.storage(),`profiles/${Oz()}`),P=await cz(C,v);console.log(P);const Ie=await A1(P.ref);T(Ie);const _n=XM().currentUser;if(_n){await nA(_n,{photoURL:Ie});const Ht=X4();await Dg(ac(Ht,"users",_n.uid),{photoURL:Ie},{merge:!0}),location.reload()}else console.error("Utilisateur non connecté")}}catch(C){console.error("Erreur lors du téléchargement de l'image de profil :",C)}};return Q.jsxs("div",{children:[Q.jsx(vv,{}),Q.jsx("h1",{children:"Profil de l'utilisateur"}),p&&Q.jsx("p",{style:{color:"red"},children:p}),t?Q.jsxs("div",{children:[Q.jsx("img",{src:t.photoURL||"https://firebasestorage.googleapis.com/v0/b/nationsglory-62812.appspot.com/o/Prendre%20sa%20sant%C3%A9%20en%20main%20n%E2%80%99a%20jamais%20%C3%A9t%C3%A9%20aussi%20simple.jpg?alt=media&token=dc085ed1-9a30-4dc8-92cc-ad7eaa8a840c",alt:"Image de profil"}),Q.jsxs("p",{children:["Prénom: ",t.displayName.split(" ")[0]]}),Q.jsxs("p",{children:["Nom: ",t.displayName.split(" ")[1]]}),Q.jsxs("p",{children:["Email: ",t.email]}),S?Q.jsx("p",{children:"Connecté avec Google"}):Q.jsx("button",{onClick:F,children:"Lier un compte Google"}),Q.jsxs("div",{children:[Q.jsx("h2",{children:"Modifier l'adresse email"}),Q.jsx("input",{type:"email",placeholder:"Nouvelle adresse email",value:n,onChange:C=>r(C.target.value)}),Q.jsx("button",{onClick:B,children:"Mettre à jour l'email"})]}),Q.jsxs("div",{children:[Q.jsx("h2",{children:"Modifier le mot de passe"}),Q.jsx("input",{type:"password",placeholder:"Nouveau mot de passe",value:i,onChange:C=>s(C.target.value)}),Q.jsx("input",{type:"password",placeholder:"Confirmer le nouveau mot de passe",value:o,onChange:C=>a(C.target.value)}),Q.jsx("button",{onClick:g,children:"Mettre à jour le mot de passe"})]}),Q.jsxs("div",{children:[Q.jsx("h2",{children:"Modifier le nom"}),Q.jsx("input",{type:"text",placeholder:"Nouveau prénom",value:l,onChange:C=>c(C.target.value)}),Q.jsx("input",{type:"text",placeholder:"Nouveau nom de famille",value:d,onChange:C=>f(C.target.value)}),Q.jsx("button",{onClick:_,children:"Mettre à jour le nom"})]}),Q.jsxs("div",{children:[Q.jsx("h2",{children:"Modifier l'image de profil"}),Q.jsx("input",{type:"file",onChange:E}),Q.jsx("button",{onClick:R,children:"Télécharger l'image de profil"})]}),Q.jsx("div",{children:Q.jsx(C1,{})})]}):Q.jsx("p",{children:"Veuillez vous connecter pour accéder à votre profil."})]})},Lz=()=>{const[t,e]=j.useState("");j.useEffect(()=>{const r=be.auth().onAuthStateChanged(i=>{e(i||null)});return()=>r()},[]);const n=t?t.displayName.split(" ")[0]:"";return Q.jsx("div",{children:Q.jsxs("div",{children:[Q.jsxs("h1",{children:["Welcome to the Home Page! ",n]}),Q.jsx(vv,{})]})})},Mz=Mx([{path:"/nationglorycomu/",element:Q.jsx(Lz,{}),Children:[{path:"/nationglorycomu/auth",element:Q.jsx(kz,{})},{path:"/nationglorycomu/profile",element:Q.jsx(Vz,{})}]}]);ReactDOM.createRoot(document.getElementById("root")).render(Q.jsx(UT.StrictMode,{children:Q.jsx(Gx,{router:Mz})}));
