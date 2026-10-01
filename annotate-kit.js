var process = typeof process !== "undefined" ? process : { env: { NODE_ENV: "production" } };
"use strict";var AnnotateKitDemo=(()=>{var nv=Object.create;var Ml=Object.defineProperty;var ov=Object.getOwnPropertyDescriptor;var rv=Object.getOwnPropertyNames;var av=Object.getPrototypeOf,iv=Object.prototype.hasOwnProperty;var dr=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}},sv=(e,t)=>{for(var n in t)Ml(e,n,{get:t[n],enumerable:!0})},qh=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of rv(t))!iv.call(e,r)&&r!==n&&Ml(e,r,{get:()=>t[r],enumerable:!(o=ov(t,r))||o.enumerable});return e};var At=(e,t,n)=>(n=e!=null?nv(av(e)):{},qh(t||!e||!e.__esModule?Ml(n,"default",{value:e,enumerable:!0}):n,e)),lv=e=>qh(Ml({},"__esModule",{value:!0}),e);var Dm=dr(yt=>{"use strict";var rs=Symbol.for("react.element"),bv=Symbol.for("react.portal"),kv=Symbol.for("react.fragment"),Cv=Symbol.for("react.strict_mode"),Sv=Symbol.for("react.profiler"),Ev=Symbol.for("react.provider"),Mv=Symbol.for("react.context"),Lv=Symbol.for("react.forward_ref"),Tv=Symbol.for("react.suspense"),$v=Symbol.for("react.memo"),Iv=Symbol.for("react.lazy"),Sm=Symbol.iterator;function Pv(e){return e===null||typeof e!="object"?null:(e=Sm&&e[Sm]||e["@@iterator"],typeof e=="function"?e:null)}var Lm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tm=Object.assign,$m={};function Ga(e,t,n){this.props=e,this.context=t,this.refs=$m,this.updater=n||Lm}Ga.prototype.isReactComponent={};Ga.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ga.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Im(){}Im.prototype=Ga.prototype;function gu(e,t,n){this.props=e,this.context=t,this.refs=$m,this.updater=n||Lm}var _u=gu.prototype=new Im;_u.constructor=gu;Tm(_u,Ga.prototype);_u.isPureReactComponent=!0;var Em=Array.isArray,Pm=Object.prototype.hasOwnProperty,yu={current:null},Nm={key:!0,ref:!0,__self:!0,__source:!0};function Rm(e,t,n){var o,r={},a=null,i=null;if(t!=null)for(o in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)Pm.call(t,o)&&!Nm.hasOwnProperty(o)&&(r[o]=t[o]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}if(e&&e.defaultProps)for(o in s=e.defaultProps,s)r[o]===void 0&&(r[o]=s[o]);return{$$typeof:rs,type:e,key:a,ref:i,props:r,_owner:yu.current}}function Nv(e,t){return{$$typeof:rs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function xu(e){return typeof e=="object"&&e!==null&&e.$$typeof===rs}function Rv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Mm=/\/+/g;function mu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Rv(""+e.key):t.toString(36)}function Hl(e,t,n,o,r){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case rs:case bv:i=!0}}if(i)return i=e,r=r(i),e=o===""?"."+mu(i,0):o,Em(r)?(n="",e!=null&&(n=e.replace(Mm,"$&/")+"/"),Hl(r,t,n,"",function(c){return c})):r!=null&&(xu(r)&&(r=Nv(r,n+(!r.key||i&&i.key===r.key?"":(""+r.key).replace(Mm,"$&/")+"/")+e)),t.push(r)),1;if(i=0,o=o===""?".":o+":",Em(e))for(var s=0;s<e.length;s++){a=e[s];var l=o+mu(a,s);i+=Hl(a,t,n,l,r)}else if(l=Pv(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=o+mu(a,s++),i+=Hl(a,t,n,l,r);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Fl(e,t,n){if(e==null)return e;var o=[],r=0;return Hl(e,o,"","",function(a){return t.call(n,a,r++)}),o}function Av(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Un={current:null},Wl={transition:null},Dv={ReactCurrentDispatcher:Un,ReactCurrentBatchConfig:Wl,ReactCurrentOwner:yu};function Am(){throw Error("act(...) is not supported in production builds of React.")}yt.Children={map:Fl,forEach:function(e,t,n){Fl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Fl(e,function(){t++}),t},toArray:function(e){return Fl(e,function(t){return t})||[]},only:function(e){if(!xu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};yt.Component=Ga;yt.Fragment=kv;yt.Profiler=Sv;yt.PureComponent=gu;yt.StrictMode=Cv;yt.Suspense=Tv;yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dv;yt.act=Am;yt.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=Tm({},e.props),r=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=yu.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Pm.call(t,l)&&!Nm.hasOwnProperty(l)&&(o[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];o.children=s}return{$$typeof:rs,type:e.type,key:r,ref:a,props:o,_owner:i}};yt.createContext=function(e){return e={$$typeof:Mv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ev,_context:e},e.Consumer=e};yt.createElement=Rm;yt.createFactory=function(e){var t=Rm.bind(null,e);return t.type=e,t};yt.createRef=function(){return{current:null}};yt.forwardRef=function(e){return{$$typeof:Lv,render:e}};yt.isValidElement=xu;yt.lazy=function(e){return{$$typeof:Iv,_payload:{_status:-1,_result:e},_init:Av}};yt.memo=function(e,t){return{$$typeof:$v,type:e,compare:t===void 0?null:t}};yt.startTransition=function(e){var t=Wl.transition;Wl.transition={};try{e()}finally{Wl.transition=t}};yt.unstable_act=Am;yt.useCallback=function(e,t){return Un.current.useCallback(e,t)};yt.useContext=function(e){return Un.current.useContext(e)};yt.useDebugValue=function(){};yt.useDeferredValue=function(e){return Un.current.useDeferredValue(e)};yt.useEffect=function(e,t){return Un.current.useEffect(e,t)};yt.useId=function(){return Un.current.useId()};yt.useImperativeHandle=function(e,t,n){return Un.current.useImperativeHandle(e,t,n)};yt.useInsertionEffect=function(e,t){return Un.current.useInsertionEffect(e,t)};yt.useLayoutEffect=function(e,t){return Un.current.useLayoutEffect(e,t)};yt.useMemo=function(e,t){return Un.current.useMemo(e,t)};yt.useReducer=function(e,t,n){return Un.current.useReducer(e,t,n)};yt.useRef=function(e){return Un.current.useRef(e)};yt.useState=function(e){return Un.current.useState(e)};yt.useSyncExternalStore=function(e,t,n){return Un.current.useSyncExternalStore(e,t,n)};yt.useTransition=function(){return Un.current.useTransition()};yt.version="18.3.1"});var No=dr((E3,Om)=>{"use strict";Om.exports=Dm()});var Xm=dr(Ft=>{"use strict";function ku(e,t){var n=e.length;e.push(t);e:for(;0<n;){var o=n-1>>>1,r=e[o];if(0<jl(r,t))e[o]=t,e[n]=r,n=o;else break e}}function Ro(e){return e.length===0?null:e[0]}function Vl(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var o=0,r=e.length,a=r>>>1;o<a;){var i=2*(o+1)-1,s=e[i],l=i+1,c=e[l];if(0>jl(s,n))l<r&&0>jl(c,s)?(e[o]=c,e[l]=n,o=l):(e[o]=s,e[i]=n,o=i);else if(l<r&&0>jl(c,n))e[o]=c,e[l]=n,o=l;else break e}}return t}function jl(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Bm=performance,Ft.unstable_now=function(){return Bm.now()}):(vu=Date,zm=vu.now(),Ft.unstable_now=function(){return vu.now()-zm});var Bm,vu,zm,qo=[],Pr=[],Ov=1,vo=null,Dn=3,Yl=!1,ha=!1,is=!1,Wm=typeof setTimeout=="function"?setTimeout:null,jm=typeof clearTimeout=="function"?clearTimeout:null,Fm=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Cu(e){for(var t=Ro(Pr);t!==null;){if(t.callback===null)Vl(Pr);else if(t.startTime<=e)Vl(Pr),t.sortIndex=t.expirationTime,ku(qo,t);else break;t=Ro(Pr)}}function Su(e){if(is=!1,Cu(e),!ha)if(Ro(qo)!==null)ha=!0,Mu(Eu);else{var t=Ro(Pr);t!==null&&Lu(Su,t.startTime-e)}}function Eu(e,t){ha=!1,is&&(is=!1,jm(ss),ss=-1),Yl=!0;var n=Dn;try{for(Cu(t),vo=Ro(qo);vo!==null&&(!(vo.expirationTime>t)||e&&!Ym());){var o=vo.callback;if(typeof o=="function"){vo.callback=null,Dn=vo.priorityLevel;var r=o(vo.expirationTime<=t);t=Ft.unstable_now(),typeof r=="function"?vo.callback=r:vo===Ro(qo)&&Vl(qo),Cu(t)}else Vl(qo);vo=Ro(qo)}if(vo!==null)var a=!0;else{var i=Ro(Pr);i!==null&&Lu(Su,i.startTime-t),a=!1}return a}finally{vo=null,Dn=n,Yl=!1}}var Xl=!1,Ul=null,ss=-1,Um=5,Vm=-1;function Ym(){return!(Ft.unstable_now()-Vm<Um)}function wu(){if(Ul!==null){var e=Ft.unstable_now();Vm=e;var t=!0;try{t=Ul(!0,e)}finally{t?as():(Xl=!1,Ul=null)}}else Xl=!1}var as;typeof Fm=="function"?as=function(){Fm(wu)}:typeof MessageChannel<"u"?(bu=new MessageChannel,Hm=bu.port2,bu.port1.onmessage=wu,as=function(){Hm.postMessage(null)}):as=function(){Wm(wu,0)};var bu,Hm;function Mu(e){Ul=e,Xl||(Xl=!0,as())}function Lu(e,t){ss=Wm(function(){e(Ft.unstable_now())},t)}Ft.unstable_IdlePriority=5;Ft.unstable_ImmediatePriority=1;Ft.unstable_LowPriority=4;Ft.unstable_NormalPriority=3;Ft.unstable_Profiling=null;Ft.unstable_UserBlockingPriority=2;Ft.unstable_cancelCallback=function(e){e.callback=null};Ft.unstable_continueExecution=function(){ha||Yl||(ha=!0,Mu(Eu))};Ft.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Um=0<e?Math.floor(1e3/e):5};Ft.unstable_getCurrentPriorityLevel=function(){return Dn};Ft.unstable_getFirstCallbackNode=function(){return Ro(qo)};Ft.unstable_next=function(e){switch(Dn){case 1:case 2:case 3:var t=3;break;default:t=Dn}var n=Dn;Dn=t;try{return e()}finally{Dn=n}};Ft.unstable_pauseExecution=function(){};Ft.unstable_requestPaint=function(){};Ft.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Dn;Dn=e;try{return t()}finally{Dn=n}};Ft.unstable_scheduleCallback=function(e,t,n){var o=Ft.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?o+n:o):n=o,e){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=n+r,e={id:Ov++,callback:t,priorityLevel:e,startTime:n,expirationTime:r,sortIndex:-1},n>o?(e.sortIndex=n,ku(Pr,e),Ro(qo)===null&&e===Ro(Pr)&&(is?(jm(ss),ss=-1):is=!0,Lu(Su,n-o))):(e.sortIndex=r,ku(qo,e),ha||Yl||(ha=!0,Mu(Eu))),e};Ft.unstable_shouldYield=Ym;Ft.unstable_wrapCallback=function(e){var t=Dn;return function(){var n=Dn;Dn=t;try{return e.apply(this,arguments)}finally{Dn=n}}}});var Km=dr((L3,qm)=>{"use strict";qm.exports=Xm()});var J_=dr(_o=>{"use strict";var Bv=No(),mo=Km();function pe(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n0=new Set,Ts={};function Ma(e,t){yi(e,t),yi(e+"Capture",t)}function yi(e,t){for(Ts[e]=t,e=0;e<t.length;e++)n0.add(t[e])}var yr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gu=Object.prototype.hasOwnProperty,zv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qm={},Gm={};function Fv(e){return Gu.call(Gm,e)?!0:Gu.call(Qm,e)?!1:zv.test(e)?Gm[e]=!0:(Qm[e]=!0,!1)}function Hv(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wv(e,t,n,o){if(t===null||typeof t>"u"||Hv(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Xn(e,t,n,o,r,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var Pn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pn[e]=new Xn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Pn[t]=new Xn(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pn[e]=new Xn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pn[e]=new Xn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pn[e]=new Xn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pn[e]=new Xn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pn[e]=new Xn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pn[e]=new Xn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pn[e]=new Xn(e,5,!1,e.toLowerCase(),null,!1,!1)});var jp=/[\-:]([a-z])/g;function Up(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(jp,Up);Pn[t]=new Xn(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(jp,Up);Pn[t]=new Xn(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(jp,Up);Pn[t]=new Xn(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pn[e]=new Xn(e,1,!1,e.toLowerCase(),null,!1,!1)});Pn.xlinkHref=new Xn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pn[e]=new Xn(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vp(e,t,n,o){var r=Pn.hasOwnProperty(t)?Pn[t]:null;(r!==null?r.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wv(t,n,r,o)&&(n=null),o||r===null?Fv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,o=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var br=Bv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ql=Symbol.for("react.element"),ei=Symbol.for("react.portal"),ti=Symbol.for("react.fragment"),Yp=Symbol.for("react.strict_mode"),Zu=Symbol.for("react.profiler"),o0=Symbol.for("react.provider"),r0=Symbol.for("react.context"),Xp=Symbol.for("react.forward_ref"),Ju=Symbol.for("react.suspense"),ep=Symbol.for("react.suspense_list"),qp=Symbol.for("react.memo"),Rr=Symbol.for("react.lazy"),a0=Symbol.for("react.offscreen"),Zm=Symbol.iterator;function ls(e){return e===null||typeof e!="object"?null:(e=Zm&&e[Zm]||e["@@iterator"],typeof e=="function"?e:null)}var tn=Object.assign,Tu;function gs(e){if(Tu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Tu=t&&t[1]||""}return`
`+Tu+e}var $u=!1;function Iu(e,t){if(!e||$u)return"";$u=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var o=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){o=c}e.call(t.prototype)}else{try{throw Error()}catch(c){o=c}e()}}catch(c){if(c&&o&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),a=o.stack.split(`
`),i=r.length-1,s=a.length-1;1<=i&&0<=s&&r[i]!==a[s];)s--;for(;1<=i&&0<=s;i--,s--)if(r[i]!==a[s]){if(i!==1||s!==1)do if(i--,s--,0>s||r[i]!==a[s]){var l=`
`+r[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=s);break}}}finally{$u=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?gs(e):""}function jv(e){switch(e.tag){case 5:return gs(e.type);case 16:return gs("Lazy");case 13:return gs("Suspense");case 19:return gs("SuspenseList");case 0:case 2:case 15:return e=Iu(e.type,!1),e;case 11:return e=Iu(e.type.render,!1),e;case 1:return e=Iu(e.type,!0),e;default:return""}}function tp(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ti:return"Fragment";case ei:return"Portal";case Zu:return"Profiler";case Yp:return"StrictMode";case Ju:return"Suspense";case ep:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case r0:return(e.displayName||"Context")+".Consumer";case o0:return(e._context.displayName||"Context")+".Provider";case Xp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qp:return t=e.displayName||null,t!==null?t:tp(e.type)||"Memo";case Rr:t=e._payload,e=e._init;try{return tp(e(t))}catch{}}return null}function Uv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tp(t);case 8:return t===Yp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function qr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function i0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vv(e){var t=i0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(i){o=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(i){o=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Kl(e){e._valueTracker||(e._valueTracker=Vv(e))}function s0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=i0(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function kc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function np(e,t){var n=t.checked;return tn({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Jm(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=qr(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function l0(e,t){t=t.checked,t!=null&&Vp(e,"checked",t,!1)}function op(e,t){l0(e,t);var n=qr(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?rp(e,t.type,n):t.hasOwnProperty("defaultValue")&&rp(e,t.type,qr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function eg(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function rp(e,t,n){(t!=="number"||kc(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var _s=Array.isArray;function pi(e,t,n,o){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&o&&(e[n].defaultSelected=!0)}else{for(n=""+qr(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,o&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function ap(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(pe(91));return tn({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function tg(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(pe(92));if(_s(n)){if(1<n.length)throw Error(pe(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:qr(n)}}function c0(e,t){var n=qr(t.value),o=qr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function ng(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function d0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ip(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?d0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ql,u0=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,r)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ql=Ql||document.createElement("div"),Ql.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ql.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $s(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var vs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yv=["Webkit","ms","Moz","O"];Object.keys(vs).forEach(function(e){Yv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vs[t]=vs[e]})});function p0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||vs.hasOwnProperty(e)&&vs[e]?(""+t).trim():t+"px"}function f0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,r=p0(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,r):e[n]=r}}var Xv=tn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sp(e,t){if(t){if(Xv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(pe(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(pe(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(pe(61))}if(t.style!=null&&typeof t.style!="object")throw Error(pe(62))}}function lp(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cp=null;function Kp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dp=null,fi=null,hi=null;function og(e){if(e=qs(e)){if(typeof dp!="function")throw Error(pe(280));var t=e.stateNode;t&&(t=Gc(t),dp(e.stateNode,e.type,t))}}function h0(e){fi?hi?hi.push(e):hi=[e]:fi=e}function m0(){if(fi){var e=fi,t=hi;if(hi=fi=null,og(e),t)for(e=0;e<t.length;e++)og(t[e])}}function g0(e,t){return e(t)}function _0(){}var Pu=!1;function y0(e,t,n){if(Pu)return e(t,n);Pu=!0;try{return g0(e,t,n)}finally{Pu=!1,(fi!==null||hi!==null)&&(_0(),m0())}}function Is(e,t){var n=e.stateNode;if(n===null)return null;var o=Gc(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(pe(231,t,typeof n));return n}var up=!1;if(yr)try{Za={},Object.defineProperty(Za,"passive",{get:function(){up=!0}}),window.addEventListener("test",Za,Za),window.removeEventListener("test",Za,Za)}catch{up=!1}var Za;function qv(e,t,n,o,r,a,i,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var ws=!1,Cc=null,Sc=!1,pp=null,Kv={onError:function(e){ws=!0,Cc=e}};function Qv(e,t,n,o,r,a,i,s,l){ws=!1,Cc=null,qv.apply(Kv,arguments)}function Gv(e,t,n,o,r,a,i,s,l){if(Qv.apply(this,arguments),ws){if(ws){var c=Cc;ws=!1,Cc=null}else throw Error(pe(198));Sc||(Sc=!0,pp=c)}}function La(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function x0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function rg(e){if(La(e)!==e)throw Error(pe(188))}function Zv(e){var t=e.alternate;if(!t){if(t=La(e),t===null)throw Error(pe(188));return t!==e?null:e}for(var n=e,o=t;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(o=r.return,o!==null){n=o;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return rg(r),e;if(a===o)return rg(r),t;a=a.sibling}throw Error(pe(188))}if(n.return!==o.return)n=r,o=a;else{for(var i=!1,s=r.child;s;){if(s===n){i=!0,n=r,o=a;break}if(s===o){i=!0,o=r,n=a;break}s=s.sibling}if(!i){for(s=a.child;s;){if(s===n){i=!0,n=a,o=r;break}if(s===o){i=!0,o=a,n=r;break}s=s.sibling}if(!i)throw Error(pe(189))}}if(n.alternate!==o)throw Error(pe(190))}if(n.tag!==3)throw Error(pe(188));return n.stateNode.current===n?e:t}function v0(e){return e=Zv(e),e!==null?w0(e):null}function w0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=w0(e);if(t!==null)return t;e=e.sibling}return null}var b0=mo.unstable_scheduleCallback,ag=mo.unstable_cancelCallback,Jv=mo.unstable_shouldYield,e5=mo.unstable_requestPaint,dn=mo.unstable_now,t5=mo.unstable_getCurrentPriorityLevel,Qp=mo.unstable_ImmediatePriority,k0=mo.unstable_UserBlockingPriority,Ec=mo.unstable_NormalPriority,n5=mo.unstable_LowPriority,C0=mo.unstable_IdlePriority,Xc=null,Zo=null;function o5(e){if(Zo&&typeof Zo.onCommitFiberRoot=="function")try{Zo.onCommitFiberRoot(Xc,e,void 0,(e.current.flags&128)===128)}catch{}}var zo=Math.clz32?Math.clz32:i5,r5=Math.log,a5=Math.LN2;function i5(e){return e>>>=0,e===0?32:31-(r5(e)/a5|0)|0}var Gl=64,Zl=4194304;function ys(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mc(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,r=e.suspendedLanes,a=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~r;s!==0?o=ys(s):(a&=i,a!==0&&(o=ys(a)))}else i=n&~r,i!==0?o=ys(i):a!==0&&(o=ys(a));if(o===0)return 0;if(t!==0&&t!==o&&(t&r)===0&&(r=o&-o,a=t&-t,r>=a||r===16&&(a&4194240)!==0))return t;if((o&4)!==0&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-zo(t),r=1<<n,o|=e[n],t&=~r;return o}function s5(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function l5(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,r=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-zo(a),s=1<<i,l=r[i];l===-1?((s&n)===0||(s&o)!==0)&&(r[i]=s5(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function fp(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function S0(){var e=Gl;return Gl<<=1,(Gl&4194240)===0&&(Gl=64),e}function Nu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ys(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-zo(t),e[t]=n}function c5(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-zo(n),a=1<<r;t[r]=0,o[r]=-1,e[r]=-1,n&=~a}}function Gp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-zo(n),r=1<<o;r&t|e[o]&t&&(e[o]|=t),n&=~r}}var Tt=0;function E0(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var M0,Zp,L0,T0,$0,hp=!1,Jl=[],Fr=null,Hr=null,Wr=null,Ps=new Map,Ns=new Map,Dr=[],d5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ig(e,t){switch(e){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":Hr=null;break;case"mouseover":case"mouseout":Wr=null;break;case"pointerover":case"pointerout":Ps.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ns.delete(t.pointerId)}}function cs(e,t,n,o,r,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:a,targetContainers:[r]},t!==null&&(t=qs(t),t!==null&&Zp(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function u5(e,t,n,o,r){switch(t){case"focusin":return Fr=cs(Fr,e,t,n,o,r),!0;case"dragenter":return Hr=cs(Hr,e,t,n,o,r),!0;case"mouseover":return Wr=cs(Wr,e,t,n,o,r),!0;case"pointerover":var a=r.pointerId;return Ps.set(a,cs(Ps.get(a)||null,e,t,n,o,r)),!0;case"gotpointercapture":return a=r.pointerId,Ns.set(a,cs(Ns.get(a)||null,e,t,n,o,r)),!0}return!1}function I0(e){var t=_a(e.target);if(t!==null){var n=La(t);if(n!==null){if(t=n.tag,t===13){if(t=x0(n),t!==null){e.blockedOn=t,$0(e.priority,function(){L0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=mp(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);cp=o,n.target.dispatchEvent(o),cp=null}else return t=qs(n),t!==null&&Zp(t),e.blockedOn=n,!1;t.shift()}return!0}function sg(e,t,n){fc(e)&&n.delete(t)}function p5(){hp=!1,Fr!==null&&fc(Fr)&&(Fr=null),Hr!==null&&fc(Hr)&&(Hr=null),Wr!==null&&fc(Wr)&&(Wr=null),Ps.forEach(sg),Ns.forEach(sg)}function ds(e,t){e.blockedOn===t&&(e.blockedOn=null,hp||(hp=!0,mo.unstable_scheduleCallback(mo.unstable_NormalPriority,p5)))}function Rs(e){function t(r){return ds(r,e)}if(0<Jl.length){ds(Jl[0],e);for(var n=1;n<Jl.length;n++){var o=Jl[n];o.blockedOn===e&&(o.blockedOn=null)}}for(Fr!==null&&ds(Fr,e),Hr!==null&&ds(Hr,e),Wr!==null&&ds(Wr,e),Ps.forEach(t),Ns.forEach(t),n=0;n<Dr.length;n++)o=Dr[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Dr.length&&(n=Dr[0],n.blockedOn===null);)I0(n),n.blockedOn===null&&Dr.shift()}var mi=br.ReactCurrentBatchConfig,Lc=!0;function f5(e,t,n,o){var r=Tt,a=mi.transition;mi.transition=null;try{Tt=1,Jp(e,t,n,o)}finally{Tt=r,mi.transition=a}}function h5(e,t,n,o){var r=Tt,a=mi.transition;mi.transition=null;try{Tt=4,Jp(e,t,n,o)}finally{Tt=r,mi.transition=a}}function Jp(e,t,n,o){if(Lc){var r=mp(e,t,n,o);if(r===null)Fu(e,t,o,Tc,n),ig(e,o);else if(u5(r,e,t,n,o))o.stopPropagation();else if(ig(e,o),t&4&&-1<d5.indexOf(e)){for(;r!==null;){var a=qs(r);if(a!==null&&M0(a),a=mp(e,t,n,o),a===null&&Fu(e,t,o,Tc,n),a===r)break;r=a}r!==null&&o.stopPropagation()}else Fu(e,t,o,null,n)}}var Tc=null;function mp(e,t,n,o){if(Tc=null,e=Kp(o),e=_a(e),e!==null)if(t=La(e),t===null)e=null;else if(n=t.tag,n===13){if(e=x0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Tc=e,null}function P0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(t5()){case Qp:return 1;case k0:return 4;case Ec:case n5:return 16;case C0:return 536870912;default:return 16}default:return 16}}var Br=null,ef=null,hc=null;function N0(){if(hc)return hc;var e,t=ef,n=t.length,o,r="value"in Br?Br.value:Br.textContent,a=r.length;for(e=0;e<n&&t[e]===r[e];e++);var i=n-e;for(o=1;o<=i&&t[n-o]===r[a-o];o++);return hc=r.slice(e,1<o?1-o:void 0)}function mc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ec(){return!0}function lg(){return!1}function go(e){function t(n,o,r,a,i){this._reactName=n,this._targetInst=r,this.type=o,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ec:lg,this.isPropagationStopped=lg,this}return tn(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ec)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ec)},persist:function(){},isPersistent:ec}),t}var Si={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tf=go(Si),Xs=tn({},Si,{view:0,detail:0}),m5=go(Xs),Ru,Au,us,qc=tn({},Xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==us&&(us&&e.type==="mousemove"?(Ru=e.screenX-us.screenX,Au=e.screenY-us.screenY):Au=Ru=0,us=e),Ru)},movementY:function(e){return"movementY"in e?e.movementY:Au}}),cg=go(qc),g5=tn({},qc,{dataTransfer:0}),_5=go(g5),y5=tn({},Xs,{relatedTarget:0}),Du=go(y5),x5=tn({},Si,{animationName:0,elapsedTime:0,pseudoElement:0}),v5=go(x5),w5=tn({},Si,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),b5=go(w5),k5=tn({},Si,{data:0}),dg=go(k5),C5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},S5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},E5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function M5(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=E5[e])?!!t[e]:!1}function nf(){return M5}var L5=tn({},Xs,{key:function(e){if(e.key){var t=C5[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=mc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?S5[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nf,charCode:function(e){return e.type==="keypress"?mc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),T5=go(L5),$5=tn({},qc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ug=go($5),I5=tn({},Xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nf}),P5=go(I5),N5=tn({},Si,{propertyName:0,elapsedTime:0,pseudoElement:0}),R5=go(N5),A5=tn({},qc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),D5=go(A5),O5=[9,13,27,32],of=yr&&"CompositionEvent"in window,bs=null;yr&&"documentMode"in document&&(bs=document.documentMode);var B5=yr&&"TextEvent"in window&&!bs,R0=yr&&(!of||bs&&8<bs&&11>=bs),pg=" ",fg=!1;function A0(e,t){switch(e){case"keyup":return O5.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function D0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ni=!1;function z5(e,t){switch(e){case"compositionend":return D0(t);case"keypress":return t.which!==32?null:(fg=!0,pg);case"textInput":return e=t.data,e===pg&&fg?null:e;default:return null}}function F5(e,t){if(ni)return e==="compositionend"||!of&&A0(e,t)?(e=N0(),hc=ef=Br=null,ni=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return R0&&t.locale!=="ko"?null:t.data;default:return null}}var H5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!H5[e.type]:t==="textarea"}function O0(e,t,n,o){h0(o),t=$c(t,"onChange"),0<t.length&&(n=new tf("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var ks=null,As=null;function W5(e){q0(e,0)}function Kc(e){var t=ai(e);if(s0(t))return e}function j5(e,t){if(e==="change")return t}var B0=!1;yr&&(yr?(nc="oninput"in document,nc||(Ou=document.createElement("div"),Ou.setAttribute("oninput","return;"),nc=typeof Ou.oninput=="function"),tc=nc):tc=!1,B0=tc&&(!document.documentMode||9<document.documentMode));var tc,nc,Ou;function mg(){ks&&(ks.detachEvent("onpropertychange",z0),As=ks=null)}function z0(e){if(e.propertyName==="value"&&Kc(As)){var t=[];O0(t,As,e,Kp(e)),y0(W5,t)}}function U5(e,t,n){e==="focusin"?(mg(),ks=t,As=n,ks.attachEvent("onpropertychange",z0)):e==="focusout"&&mg()}function V5(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Kc(As)}function Y5(e,t){if(e==="click")return Kc(t)}function X5(e,t){if(e==="input"||e==="change")return Kc(t)}function q5(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ho=typeof Object.is=="function"?Object.is:q5;function Ds(e,t){if(Ho(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var r=n[o];if(!Gu.call(t,r)||!Ho(e[r],t[r]))return!1}return!0}function gg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _g(e,t){var n=gg(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gg(n)}}function F0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?F0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function H0(){for(var e=window,t=kc();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=kc(e.document)}return t}function rf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function K5(e){var t=H0(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&F0(n.ownerDocument.documentElement,n)){if(o!==null&&rf(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,a=Math.min(o.start,r);o=o.end===void 0?a:Math.min(o.end,r),!e.extend&&a>o&&(r=o,o=a,a=r),r=_g(n,a);var i=_g(n,o);r&&i&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),a>o?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Q5=yr&&"documentMode"in document&&11>=document.documentMode,oi=null,gp=null,Cs=null,_p=!1;function yg(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_p||oi==null||oi!==kc(o)||(o=oi,"selectionStart"in o&&rf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Cs&&Ds(Cs,o)||(Cs=o,o=$c(gp,"onSelect"),0<o.length&&(t=new tf("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=oi)))}function oc(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ri={animationend:oc("Animation","AnimationEnd"),animationiteration:oc("Animation","AnimationIteration"),animationstart:oc("Animation","AnimationStart"),transitionend:oc("Transition","TransitionEnd")},Bu={},W0={};yr&&(W0=document.createElement("div").style,"AnimationEvent"in window||(delete ri.animationend.animation,delete ri.animationiteration.animation,delete ri.animationstart.animation),"TransitionEvent"in window||delete ri.transitionend.transition);function Qc(e){if(Bu[e])return Bu[e];if(!ri[e])return e;var t=ri[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in W0)return Bu[e]=t[n];return e}var j0=Qc("animationend"),U0=Qc("animationiteration"),V0=Qc("animationstart"),Y0=Qc("transitionend"),X0=new Map,xg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(e,t){X0.set(e,t),Ma(t,[e])}for(rc=0;rc<xg.length;rc++)ac=xg[rc],vg=ac.toLowerCase(),wg=ac[0].toUpperCase()+ac.slice(1),Qr(vg,"on"+wg);var ac,vg,wg,rc;Qr(j0,"onAnimationEnd");Qr(U0,"onAnimationIteration");Qr(V0,"onAnimationStart");Qr("dblclick","onDoubleClick");Qr("focusin","onFocus");Qr("focusout","onBlur");Qr(Y0,"onTransitionEnd");yi("onMouseEnter",["mouseout","mouseover"]);yi("onMouseLeave",["mouseout","mouseover"]);yi("onPointerEnter",["pointerout","pointerover"]);yi("onPointerLeave",["pointerout","pointerover"]);Ma("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ma("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ma("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ma("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ma("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ma("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G5=new Set("cancel close invalid load scroll toggle".split(" ").concat(xs));function bg(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,Gv(o,t,void 0,e),e.currentTarget=null}function q0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],r=o.event;o=o.listeners;e:{var a=void 0;if(t)for(var i=o.length-1;0<=i;i--){var s=o[i],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&r.isPropagationStopped())break e;bg(r,s,c),a=l}else for(i=0;i<o.length;i++){if(s=o[i],l=s.instance,c=s.currentTarget,s=s.listener,l!==a&&r.isPropagationStopped())break e;bg(r,s,c),a=l}}}if(Sc)throw e=pp,Sc=!1,pp=null,e}function Ut(e,t){var n=t[bp];n===void 0&&(n=t[bp]=new Set);var o=e+"__bubble";n.has(o)||(K0(t,e,2,!1),n.add(o))}function zu(e,t,n){var o=0;t&&(o|=4),K0(n,e,o,t)}var ic="_reactListening"+Math.random().toString(36).slice(2);function Os(e){if(!e[ic]){e[ic]=!0,n0.forEach(function(n){n!=="selectionchange"&&(G5.has(n)||zu(n,!1,e),zu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ic]||(t[ic]=!0,zu("selectionchange",!1,t))}}function K0(e,t,n,o){switch(P0(t)){case 1:var r=f5;break;case 4:r=h5;break;default:r=Jp}n=r.bind(null,t,n,e),r=void 0,!up||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),o?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Fu(e,t,n,o,r){var a=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var i=o.tag;if(i===3||i===4){var s=o.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(i===4)for(i=o.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;i=i.return}for(;s!==null;){if(i=_a(s),i===null)return;if(l=i.tag,l===5||l===6){o=a=i;continue e}s=s.parentNode}}o=o.return}y0(function(){var c=a,u=Kp(n),p=[];e:{var d=X0.get(e);if(d!==void 0){var y=tf,_=e;switch(e){case"keypress":if(mc(n)===0)break e;case"keydown":case"keyup":y=T5;break;case"focusin":_="focus",y=Du;break;case"focusout":_="blur",y=Du;break;case"beforeblur":case"afterblur":y=Du;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=cg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=_5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=P5;break;case j0:case U0:case V0:y=v5;break;case Y0:y=R5;break;case"scroll":y=m5;break;case"wheel":y=D5;break;case"copy":case"cut":case"paste":y=b5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ug}var C=(t&4)!==0,v=!C&&e==="scroll",m=C?d!==null?d+"Capture":null:d;C=[];for(var g=c,E;g!==null;){E=g;var I=E.stateNode;if(E.tag===5&&I!==null&&(E=I,m!==null&&(I=Is(g,m),I!=null&&C.push(Bs(g,I,E)))),v)break;g=g.return}0<C.length&&(d=new y(d,_,null,n,u),p.push({event:d,listeners:C}))}}if((t&7)===0){e:{if(d=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",d&&n!==cp&&(_=n.relatedTarget||n.fromElement)&&(_a(_)||_[xr]))break e;if((y||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,y?(_=n.relatedTarget||n.toElement,y=c,_=_?_a(_):null,_!==null&&(v=La(_),_!==v||_.tag!==5&&_.tag!==6)&&(_=null)):(y=null,_=c),y!==_)){if(C=cg,I="onMouseLeave",m="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(C=ug,I="onPointerLeave",m="onPointerEnter",g="pointer"),v=y==null?d:ai(y),E=_==null?d:ai(_),d=new C(I,g+"leave",y,n,u),d.target=v,d.relatedTarget=E,I=null,_a(u)===c&&(C=new C(m,g+"enter",_,n,u),C.target=E,C.relatedTarget=v,I=C),v=I,y&&_)t:{for(C=y,m=_,g=0,E=C;E;E=Ja(E))g++;for(E=0,I=m;I;I=Ja(I))E++;for(;0<g-E;)C=Ja(C),g--;for(;0<E-g;)m=Ja(m),E--;for(;g--;){if(C===m||m!==null&&C===m.alternate)break t;C=Ja(C),m=Ja(m)}C=null}else C=null;y!==null&&kg(p,d,y,C,!1),_!==null&&v!==null&&kg(p,v,_,C,!0)}}e:{if(d=c?ai(c):window,y=d.nodeName&&d.nodeName.toLowerCase(),y==="select"||y==="input"&&d.type==="file")var D=j5;else if(hg(d))if(B0)D=X5;else{D=V5;var oe=U5}else(y=d.nodeName)&&y.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(D=Y5);if(D&&(D=D(e,c))){O0(p,D,n,u);break e}oe&&oe(e,d,c),e==="focusout"&&(oe=d._wrapperState)&&oe.controlled&&d.type==="number"&&rp(d,"number",d.value)}switch(oe=c?ai(c):window,e){case"focusin":(hg(oe)||oe.contentEditable==="true")&&(oi=oe,gp=c,Cs=null);break;case"focusout":Cs=gp=oi=null;break;case"mousedown":_p=!0;break;case"contextmenu":case"mouseup":case"dragend":_p=!1,yg(p,n,u);break;case"selectionchange":if(Q5)break;case"keydown":case"keyup":yg(p,n,u)}var z;if(of)e:{switch(e){case"compositionstart":var Z="onCompositionStart";break e;case"compositionend":Z="onCompositionEnd";break e;case"compositionupdate":Z="onCompositionUpdate";break e}Z=void 0}else ni?A0(e,n)&&(Z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Z="onCompositionStart");Z&&(R0&&n.locale!=="ko"&&(ni||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&ni&&(z=N0()):(Br=u,ef="value"in Br?Br.value:Br.textContent,ni=!0)),oe=$c(c,Z),0<oe.length&&(Z=new dg(Z,e,null,n,u),p.push({event:Z,listeners:oe}),z?Z.data=z:(z=D0(n),z!==null&&(Z.data=z)))),(z=B5?z5(e,n):F5(e,n))&&(c=$c(c,"onBeforeInput"),0<c.length&&(u=new dg("onBeforeInput","beforeinput",null,n,u),p.push({event:u,listeners:c}),u.data=z))}q0(p,t)})}function Bs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $c(e,t){for(var n=t+"Capture",o=[];e!==null;){var r=e,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=Is(e,n),a!=null&&o.unshift(Bs(e,a,r)),a=Is(e,t),a!=null&&o.push(Bs(e,a,r))),e=e.return}return o}function Ja(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function kg(e,t,n,o,r){for(var a=t._reactName,i=[];n!==null&&n!==o;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===o)break;s.tag===5&&c!==null&&(s=c,r?(l=Is(n,a),l!=null&&i.unshift(Bs(n,l,s))):r||(l=Is(n,a),l!=null&&i.push(Bs(n,l,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Z5=/\r\n?/g,J5=/\u0000|\uFFFD/g;function Cg(e){return(typeof e=="string"?e:""+e).replace(Z5,`
`).replace(J5,"")}function sc(e,t,n){if(t=Cg(t),Cg(e)!==t&&n)throw Error(pe(425))}function Ic(){}var yp=null,xp=null;function vp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wp=typeof setTimeout=="function"?setTimeout:void 0,ew=typeof clearTimeout=="function"?clearTimeout:void 0,Sg=typeof Promise=="function"?Promise:void 0,tw=typeof queueMicrotask=="function"?queueMicrotask:typeof Sg<"u"?function(e){return Sg.resolve(null).then(e).catch(nw)}:wp;function nw(e){setTimeout(function(){throw e})}function Hu(e,t){var n=t,o=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(o===0){e.removeChild(r),Rs(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=r}while(n);Rs(t)}function jr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Eg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ei=Math.random().toString(36).slice(2),Go="__reactFiber$"+Ei,zs="__reactProps$"+Ei,xr="__reactContainer$"+Ei,bp="__reactEvents$"+Ei,ow="__reactListeners$"+Ei,rw="__reactHandles$"+Ei;function _a(e){var t=e[Go];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xr]||n[Go]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Eg(e);e!==null;){if(n=e[Go])return n;e=Eg(e)}return t}e=n,n=e.parentNode}return null}function qs(e){return e=e[Go]||e[xr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ai(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(pe(33))}function Gc(e){return e[zs]||null}var kp=[],ii=-1;function Gr(e){return{current:e}}function Vt(e){0>ii||(e.current=kp[ii],kp[ii]=null,ii--)}function Ht(e,t){ii++,kp[ii]=e.current,e.current=t}var Kr={},Fn=Gr(Kr),no=Gr(!1),ba=Kr;function xi(e,t){var n=e.type.contextTypes;if(!n)return Kr;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in n)r[a]=t[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function oo(e){return e=e.childContextTypes,e!=null}function Pc(){Vt(no),Vt(Fn)}function Mg(e,t,n){if(Fn.current!==Kr)throw Error(pe(168));Ht(Fn,t),Ht(no,n)}function Q0(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var r in o)if(!(r in t))throw Error(pe(108,Uv(e)||"Unknown",r));return tn({},n,o)}function Nc(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kr,ba=Fn.current,Ht(Fn,e),Ht(no,no.current),!0}function Lg(e,t,n){var o=e.stateNode;if(!o)throw Error(pe(169));n?(e=Q0(e,t,ba),o.__reactInternalMemoizedMergedChildContext=e,Vt(no),Vt(Fn),Ht(Fn,e)):Vt(no),Ht(no,n)}var hr=null,Zc=!1,Wu=!1;function G0(e){hr===null?hr=[e]:hr.push(e)}function aw(e){Zc=!0,G0(e)}function Zr(){if(!Wu&&hr!==null){Wu=!0;var e=0,t=Tt;try{var n=hr;for(Tt=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}hr=null,Zc=!1}catch(r){throw hr!==null&&(hr=hr.slice(e+1)),b0(Qp,Zr),r}finally{Tt=t,Wu=!1}}return null}var si=[],li=0,Rc=null,Ac=0,wo=[],bo=0,ka=null,mr=1,gr="";function ma(e,t){si[li++]=Ac,si[li++]=Rc,Rc=e,Ac=t}function Z0(e,t,n){wo[bo++]=mr,wo[bo++]=gr,wo[bo++]=ka,ka=e;var o=mr;e=gr;var r=32-zo(o)-1;o&=~(1<<r),n+=1;var a=32-zo(t)+r;if(30<a){var i=r-r%5;a=(o&(1<<i)-1).toString(32),o>>=i,r-=i,mr=1<<32-zo(t)+r|n<<r|o,gr=a+e}else mr=1<<a|n<<r|o,gr=e}function af(e){e.return!==null&&(ma(e,1),Z0(e,1,0))}function sf(e){for(;e===Rc;)Rc=si[--li],si[li]=null,Ac=si[--li],si[li]=null;for(;e===ka;)ka=wo[--bo],wo[bo]=null,gr=wo[--bo],wo[bo]=null,mr=wo[--bo],wo[bo]=null}var ho=null,fo=null,Kt=!1,Bo=null;function J0(e,t){var n=ko(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Tg(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ho=e,fo=jr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ho=e,fo=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ka!==null?{id:mr,overflow:gr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ko(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ho=e,fo=null,!0):!1;default:return!1}}function Cp(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Sp(e){if(Kt){var t=fo;if(t){var n=t;if(!Tg(e,t)){if(Cp(e))throw Error(pe(418));t=jr(n.nextSibling);var o=ho;t&&Tg(e,t)?J0(o,n):(e.flags=e.flags&-4097|2,Kt=!1,ho=e)}}else{if(Cp(e))throw Error(pe(418));e.flags=e.flags&-4097|2,Kt=!1,ho=e}}}function $g(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ho=e}function lc(e){if(e!==ho)return!1;if(!Kt)return $g(e),Kt=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vp(e.type,e.memoizedProps)),t&&(t=fo)){if(Cp(e))throw e_(),Error(pe(418));for(;t;)J0(e,t),t=jr(t.nextSibling)}if($g(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(pe(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){fo=jr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}fo=null}}else fo=ho?jr(e.stateNode.nextSibling):null;return!0}function e_(){for(var e=fo;e;)e=jr(e.nextSibling)}function vi(){fo=ho=null,Kt=!1}function lf(e){Bo===null?Bo=[e]:Bo.push(e)}var iw=br.ReactCurrentBatchConfig;function ps(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(pe(309));var o=n.stateNode}if(!o)throw Error(pe(147,e));var r=o,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var s=r.refs;i===null?delete s[a]:s[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(pe(284));if(!n._owner)throw Error(pe(290,e))}return e}function cc(e,t){throw e=Object.prototype.toString.call(t),Error(pe(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ig(e){var t=e._init;return t(e._payload)}function t_(e){function t(m,g){if(e){var E=m.deletions;E===null?(m.deletions=[g],m.flags|=16):E.push(g)}}function n(m,g){if(!e)return null;for(;g!==null;)t(m,g),g=g.sibling;return null}function o(m,g){for(m=new Map;g!==null;)g.key!==null?m.set(g.key,g):m.set(g.index,g),g=g.sibling;return m}function r(m,g){return m=Xr(m,g),m.index=0,m.sibling=null,m}function a(m,g,E){return m.index=E,e?(E=m.alternate,E!==null?(E=E.index,E<g?(m.flags|=2,g):E):(m.flags|=2,g)):(m.flags|=1048576,g)}function i(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,g,E,I){return g===null||g.tag!==6?(g=Ku(E,m.mode,I),g.return=m,g):(g=r(g,E),g.return=m,g)}function l(m,g,E,I){var D=E.type;return D===ti?u(m,g,E.props.children,I,E.key):g!==null&&(g.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Rr&&Ig(D)===g.type)?(I=r(g,E.props),I.ref=ps(m,g,E),I.return=m,I):(I=bc(E.type,E.key,E.props,null,m.mode,I),I.ref=ps(m,g,E),I.return=m,I)}function c(m,g,E,I){return g===null||g.tag!==4||g.stateNode.containerInfo!==E.containerInfo||g.stateNode.implementation!==E.implementation?(g=Qu(E,m.mode,I),g.return=m,g):(g=r(g,E.children||[]),g.return=m,g)}function u(m,g,E,I,D){return g===null||g.tag!==7?(g=wa(E,m.mode,I,D),g.return=m,g):(g=r(g,E),g.return=m,g)}function p(m,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ku(""+g,m.mode,E),g.return=m,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ql:return E=bc(g.type,g.key,g.props,null,m.mode,E),E.ref=ps(m,null,g),E.return=m,E;case ei:return g=Qu(g,m.mode,E),g.return=m,g;case Rr:var I=g._init;return p(m,I(g._payload),E)}if(_s(g)||ls(g))return g=wa(g,m.mode,E,null),g.return=m,g;cc(m,g)}return null}function d(m,g,E,I){var D=g!==null?g.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return D!==null?null:s(m,g,""+E,I);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ql:return E.key===D?l(m,g,E,I):null;case ei:return E.key===D?c(m,g,E,I):null;case Rr:return D=E._init,d(m,g,D(E._payload),I)}if(_s(E)||ls(E))return D!==null?null:u(m,g,E,I,null);cc(m,E)}return null}function y(m,g,E,I,D){if(typeof I=="string"&&I!==""||typeof I=="number")return m=m.get(E)||null,s(g,m,""+I,D);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ql:return m=m.get(I.key===null?E:I.key)||null,l(g,m,I,D);case ei:return m=m.get(I.key===null?E:I.key)||null,c(g,m,I,D);case Rr:var oe=I._init;return y(m,g,E,oe(I._payload),D)}if(_s(I)||ls(I))return m=m.get(E)||null,u(g,m,I,D,null);cc(g,I)}return null}function _(m,g,E,I){for(var D=null,oe=null,z=g,Z=g=0,ge=null;z!==null&&Z<E.length;Z++){z.index>Z?(ge=z,z=null):ge=z.sibling;var te=d(m,z,E[Z],I);if(te===null){z===null&&(z=ge);break}e&&z&&te.alternate===null&&t(m,z),g=a(te,g,Z),oe===null?D=te:oe.sibling=te,oe=te,z=ge}if(Z===E.length)return n(m,z),Kt&&ma(m,Z),D;if(z===null){for(;Z<E.length;Z++)z=p(m,E[Z],I),z!==null&&(g=a(z,g,Z),oe===null?D=z:oe.sibling=z,oe=z);return Kt&&ma(m,Z),D}for(z=o(m,z);Z<E.length;Z++)ge=y(z,m,Z,E[Z],I),ge!==null&&(e&&ge.alternate!==null&&z.delete(ge.key===null?Z:ge.key),g=a(ge,g,Z),oe===null?D=ge:oe.sibling=ge,oe=ge);return e&&z.forEach(function(he){return t(m,he)}),Kt&&ma(m,Z),D}function C(m,g,E,I){var D=ls(E);if(typeof D!="function")throw Error(pe(150));if(E=D.call(E),E==null)throw Error(pe(151));for(var oe=D=null,z=g,Z=g=0,ge=null,te=E.next();z!==null&&!te.done;Z++,te=E.next()){z.index>Z?(ge=z,z=null):ge=z.sibling;var he=d(m,z,te.value,I);if(he===null){z===null&&(z=ge);break}e&&z&&he.alternate===null&&t(m,z),g=a(he,g,Z),oe===null?D=he:oe.sibling=he,oe=he,z=ge}if(te.done)return n(m,z),Kt&&ma(m,Z),D;if(z===null){for(;!te.done;Z++,te=E.next())te=p(m,te.value,I),te!==null&&(g=a(te,g,Z),oe===null?D=te:oe.sibling=te,oe=te);return Kt&&ma(m,Z),D}for(z=o(m,z);!te.done;Z++,te=E.next())te=y(z,m,Z,te.value,I),te!==null&&(e&&te.alternate!==null&&z.delete(te.key===null?Z:te.key),g=a(te,g,Z),oe===null?D=te:oe.sibling=te,oe=te);return e&&z.forEach(function(K){return t(m,K)}),Kt&&ma(m,Z),D}function v(m,g,E,I){if(typeof E=="object"&&E!==null&&E.type===ti&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case ql:e:{for(var D=E.key,oe=g;oe!==null;){if(oe.key===D){if(D=E.type,D===ti){if(oe.tag===7){n(m,oe.sibling),g=r(oe,E.props.children),g.return=m,m=g;break e}}else if(oe.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Rr&&Ig(D)===oe.type){n(m,oe.sibling),g=r(oe,E.props),g.ref=ps(m,oe,E),g.return=m,m=g;break e}n(m,oe);break}else t(m,oe);oe=oe.sibling}E.type===ti?(g=wa(E.props.children,m.mode,I,E.key),g.return=m,m=g):(I=bc(E.type,E.key,E.props,null,m.mode,I),I.ref=ps(m,g,E),I.return=m,m=I)}return i(m);case ei:e:{for(oe=E.key;g!==null;){if(g.key===oe)if(g.tag===4&&g.stateNode.containerInfo===E.containerInfo&&g.stateNode.implementation===E.implementation){n(m,g.sibling),g=r(g,E.children||[]),g.return=m,m=g;break e}else{n(m,g);break}else t(m,g);g=g.sibling}g=Qu(E,m.mode,I),g.return=m,m=g}return i(m);case Rr:return oe=E._init,v(m,g,oe(E._payload),I)}if(_s(E))return _(m,g,E,I);if(ls(E))return C(m,g,E,I);cc(m,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,g!==null&&g.tag===6?(n(m,g.sibling),g=r(g,E),g.return=m,m=g):(n(m,g),g=Ku(E,m.mode,I),g.return=m,m=g),i(m)):n(m,g)}return v}var wi=t_(!0),n_=t_(!1),Dc=Gr(null),Oc=null,ci=null,cf=null;function df(){cf=ci=Oc=null}function uf(e){var t=Dc.current;Vt(Dc),e._currentValue=t}function Ep(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function gi(e,t){Oc=e,cf=ci=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(to=!0),e.firstContext=null)}function So(e){var t=e._currentValue;if(cf!==e)if(e={context:e,memoizedValue:t,next:null},ci===null){if(Oc===null)throw Error(pe(308));ci=e,Oc.dependencies={lanes:0,firstContext:e}}else ci=ci.next=e;return t}var ya=null;function pf(e){ya===null?ya=[e]:ya.push(e)}function o_(e,t,n,o){var r=t.interleaved;return r===null?(n.next=n,pf(t)):(n.next=r.next,r.next=n),t.interleaved=n,vr(e,o)}function vr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ar=!1;function ff(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function r_(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _r(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ur(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(wt&2)!==0){var r=o.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),o.pending=t,vr(e,n)}return r=o.interleaved,r===null?(t.next=t,pf(o)):(t.next=r.next,r.next=t),o.interleaved=t,vr(e,n)}function gc(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Gp(e,n)}}function Pg(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?r=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?r=a=t:a=a.next=t}else r=a=t;n={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Bc(e,t,n,o){var r=e.updateQueue;Ar=!1;var a=r.firstBaseUpdate,i=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var l=s,c=l.next;l.next=null,i===null?a=c:i.next=c,i=l;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==i&&(s===null?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(a!==null){var p=r.baseState;i=0,u=c=l=null,s=a;do{var d=s.lane,y=s.eventTime;if((o&d)===d){u!==null&&(u=u.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var _=e,C=s;switch(d=t,y=n,C.tag){case 1:if(_=C.payload,typeof _=="function"){p=_.call(y,p,d);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=C.payload,d=typeof _=="function"?_.call(y,p,d):_,d==null)break e;p=tn({},p,d);break e;case 2:Ar=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,d=r.effects,d===null?r.effects=[s]:d.push(s))}else y={eventTime:y,lane:d,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(c=u=y,l=p):u=u.next=y,i|=d;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;d=s,s=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,t=r.shared.interleaved,t!==null){r=t;do i|=r.lane,r=r.next;while(r!==t)}else a===null&&(r.shared.lanes=0);Sa|=i,e.lanes=i,e.memoizedState=p}}function Ng(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],r=o.callback;if(r!==null){if(o.callback=null,o=n,typeof r!="function")throw Error(pe(191,r));r.call(o)}}}var Ks={},Jo=Gr(Ks),Fs=Gr(Ks),Hs=Gr(Ks);function xa(e){if(e===Ks)throw Error(pe(174));return e}function hf(e,t){switch(Ht(Hs,t),Ht(Fs,e),Ht(Jo,Ks),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ip(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ip(t,e)}Vt(Jo),Ht(Jo,t)}function bi(){Vt(Jo),Vt(Fs),Vt(Hs)}function a_(e){xa(Hs.current);var t=xa(Jo.current),n=ip(t,e.type);t!==n&&(Ht(Fs,e),Ht(Jo,n))}function mf(e){Fs.current===e&&(Vt(Jo),Vt(Fs))}var Jt=Gr(0);function zc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ju=[];function gf(){for(var e=0;e<ju.length;e++)ju[e]._workInProgressVersionPrimary=null;ju.length=0}var _c=br.ReactCurrentDispatcher,Uu=br.ReactCurrentBatchConfig,Ca=0,en=null,wn=null,En=null,Fc=!1,Ss=!1,Ws=0,sw=0;function On(){throw Error(pe(321))}function _f(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ho(e[n],t[n]))return!1;return!0}function yf(e,t,n,o,r,a){if(Ca=a,en=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_c.current=e===null||e.memoizedState===null?uw:pw,e=n(o,r),Ss){a=0;do{if(Ss=!1,Ws=0,25<=a)throw Error(pe(301));a+=1,En=wn=null,t.updateQueue=null,_c.current=fw,e=n(o,r)}while(Ss)}if(_c.current=Hc,t=wn!==null&&wn.next!==null,Ca=0,En=wn=en=null,Fc=!1,t)throw Error(pe(300));return e}function xf(){var e=Ws!==0;return Ws=0,e}function Qo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?en.memoizedState=En=e:En=En.next=e,En}function Eo(){if(wn===null){var e=en.alternate;e=e!==null?e.memoizedState:null}else e=wn.next;var t=En===null?en.memoizedState:En.next;if(t!==null)En=t,wn=e;else{if(e===null)throw Error(pe(310));wn=e,e={memoizedState:wn.memoizedState,baseState:wn.baseState,baseQueue:wn.baseQueue,queue:wn.queue,next:null},En===null?en.memoizedState=En=e:En=En.next=e}return En}function js(e,t){return typeof t=="function"?t(e):t}function Vu(e){var t=Eo(),n=t.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=e;var o=wn,r=o.baseQueue,a=n.pending;if(a!==null){if(r!==null){var i=r.next;r.next=a.next,a.next=i}o.baseQueue=r=a,n.pending=null}if(r!==null){a=r.next,o=o.baseState;var s=i=null,l=null,c=a;do{var u=c.lane;if((Ca&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),o=c.hasEagerState?c.eagerState:e(o,c.action);else{var p={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=p,i=o):l=l.next=p,en.lanes|=u,Sa|=u}c=c.next}while(c!==null&&c!==a);l===null?i=o:l.next=s,Ho(o,t.memoizedState)||(to=!0),t.memoizedState=o,t.baseState=i,t.baseQueue=l,n.lastRenderedState=o}if(e=n.interleaved,e!==null){r=e;do a=r.lane,en.lanes|=a,Sa|=a,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yu(e){var t=Eo(),n=t.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=e;var o=n.dispatch,r=n.pending,a=t.memoizedState;if(r!==null){n.pending=null;var i=r=r.next;do a=e(a,i.action),i=i.next;while(i!==r);Ho(a,t.memoizedState)||(to=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,o]}function i_(){}function s_(e,t){var n=en,o=Eo(),r=t(),a=!Ho(o.memoizedState,r);if(a&&(o.memoizedState=r,to=!0),o=o.queue,vf(d_.bind(null,n,o,e),[e]),o.getSnapshot!==t||a||En!==null&&En.memoizedState.tag&1){if(n.flags|=2048,Us(9,c_.bind(null,n,o,r,t),void 0,null),Mn===null)throw Error(pe(349));(Ca&30)!==0||l_(n,t,r)}return r}function l_(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=en.updateQueue,t===null?(t={lastEffect:null,stores:null},en.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function c_(e,t,n,o){t.value=n,t.getSnapshot=o,u_(t)&&p_(e)}function d_(e,t,n){return n(function(){u_(t)&&p_(e)})}function u_(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ho(e,n)}catch{return!0}}function p_(e){var t=vr(e,1);t!==null&&Fo(t,e,1,-1)}function Rg(e){var t=Qo();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:js,lastRenderedState:e},t.queue=e,e=e.dispatch=dw.bind(null,en,e),[t.memoizedState,e]}function Us(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=en.updateQueue,t===null?(t={lastEffect:null,stores:null},en.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function f_(){return Eo().memoizedState}function yc(e,t,n,o){var r=Qo();en.flags|=e,r.memoizedState=Us(1|t,n,void 0,o===void 0?null:o)}function Jc(e,t,n,o){var r=Eo();o=o===void 0?null:o;var a=void 0;if(wn!==null){var i=wn.memoizedState;if(a=i.destroy,o!==null&&_f(o,i.deps)){r.memoizedState=Us(t,n,a,o);return}}en.flags|=e,r.memoizedState=Us(1|t,n,a,o)}function Ag(e,t){return yc(8390656,8,e,t)}function vf(e,t){return Jc(2048,8,e,t)}function h_(e,t){return Jc(4,2,e,t)}function m_(e,t){return Jc(4,4,e,t)}function g_(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function __(e,t,n){return n=n!=null?n.concat([e]):null,Jc(4,4,g_.bind(null,t,e),n)}function wf(){}function y_(e,t){var n=Eo();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&_f(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function x_(e,t){var n=Eo();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&_f(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function v_(e,t,n){return(Ca&21)===0?(e.baseState&&(e.baseState=!1,to=!0),e.memoizedState=n):(Ho(n,t)||(n=S0(),en.lanes|=n,Sa|=n,e.baseState=!0),t)}function lw(e,t){var n=Tt;Tt=n!==0&&4>n?n:4,e(!0);var o=Uu.transition;Uu.transition={};try{e(!1),t()}finally{Tt=n,Uu.transition=o}}function w_(){return Eo().memoizedState}function cw(e,t,n){var o=Yr(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},b_(e))k_(t,n);else if(n=o_(e,t,n,o),n!==null){var r=Yn();Fo(n,e,o,r),C_(n,t,o)}}function dw(e,t,n){var o=Yr(e),r={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(b_(e))k_(t,r);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,s=a(i,n);if(r.hasEagerState=!0,r.eagerState=s,Ho(s,i)){var l=t.interleaved;l===null?(r.next=r,pf(t)):(r.next=l.next,l.next=r),t.interleaved=r;return}}catch{}n=o_(e,t,r,o),n!==null&&(r=Yn(),Fo(n,e,o,r),C_(n,t,o))}}function b_(e){var t=e.alternate;return e===en||t!==null&&t===en}function k_(e,t){Ss=Fc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function C_(e,t,n){if((n&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Gp(e,n)}}var Hc={readContext:So,useCallback:On,useContext:On,useEffect:On,useImperativeHandle:On,useInsertionEffect:On,useLayoutEffect:On,useMemo:On,useReducer:On,useRef:On,useState:On,useDebugValue:On,useDeferredValue:On,useTransition:On,useMutableSource:On,useSyncExternalStore:On,useId:On,unstable_isNewReconciler:!1},uw={readContext:So,useCallback:function(e,t){return Qo().memoizedState=[e,t===void 0?null:t],e},useContext:So,useEffect:Ag,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,yc(4194308,4,g_.bind(null,t,e),n)},useLayoutEffect:function(e,t){return yc(4194308,4,e,t)},useInsertionEffect:function(e,t){return yc(4,2,e,t)},useMemo:function(e,t){var n=Qo();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=Qo();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=cw.bind(null,en,e),[o.memoizedState,e]},useRef:function(e){var t=Qo();return e={current:e},t.memoizedState=e},useState:Rg,useDebugValue:wf,useDeferredValue:function(e){return Qo().memoizedState=e},useTransition:function(){var e=Rg(!1),t=e[0];return e=lw.bind(null,e[1]),Qo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=en,r=Qo();if(Kt){if(n===void 0)throw Error(pe(407));n=n()}else{if(n=t(),Mn===null)throw Error(pe(349));(Ca&30)!==0||l_(o,t,n)}r.memoizedState=n;var a={value:n,getSnapshot:t};return r.queue=a,Ag(d_.bind(null,o,a,e),[e]),o.flags|=2048,Us(9,c_.bind(null,o,a,n,t),void 0,null),n},useId:function(){var e=Qo(),t=Mn.identifierPrefix;if(Kt){var n=gr,o=mr;n=(o&~(1<<32-zo(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ws++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=sw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pw={readContext:So,useCallback:y_,useContext:So,useEffect:vf,useImperativeHandle:__,useInsertionEffect:h_,useLayoutEffect:m_,useMemo:x_,useReducer:Vu,useRef:f_,useState:function(){return Vu(js)},useDebugValue:wf,useDeferredValue:function(e){var t=Eo();return v_(t,wn.memoizedState,e)},useTransition:function(){var e=Vu(js)[0],t=Eo().memoizedState;return[e,t]},useMutableSource:i_,useSyncExternalStore:s_,useId:w_,unstable_isNewReconciler:!1},fw={readContext:So,useCallback:y_,useContext:So,useEffect:vf,useImperativeHandle:__,useInsertionEffect:h_,useLayoutEffect:m_,useMemo:x_,useReducer:Yu,useRef:f_,useState:function(){return Yu(js)},useDebugValue:wf,useDeferredValue:function(e){var t=Eo();return wn===null?t.memoizedState=e:v_(t,wn.memoizedState,e)},useTransition:function(){var e=Yu(js)[0],t=Eo().memoizedState;return[e,t]},useMutableSource:i_,useSyncExternalStore:s_,useId:w_,unstable_isNewReconciler:!1};function Do(e,t){if(e&&e.defaultProps){t=tn({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Mp(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:tn({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ed={isMounted:function(e){return(e=e._reactInternals)?La(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=Yn(),r=Yr(e),a=_r(o,r);a.payload=t,n!=null&&(a.callback=n),t=Ur(e,a,r),t!==null&&(Fo(t,e,r,o),gc(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=Yn(),r=Yr(e),a=_r(o,r);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Ur(e,a,r),t!==null&&(Fo(t,e,r,o),gc(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Yn(),o=Yr(e),r=_r(n,o);r.tag=2,t!=null&&(r.callback=t),t=Ur(e,r,o),t!==null&&(Fo(t,e,o,n),gc(t,e,o))}};function Dg(e,t,n,o,r,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,i):t.prototype&&t.prototype.isPureReactComponent?!Ds(n,o)||!Ds(r,a):!0}function S_(e,t,n){var o=!1,r=Kr,a=t.contextType;return typeof a=="object"&&a!==null?a=So(a):(r=oo(t)?ba:Fn.current,o=t.contextTypes,a=(o=o!=null)?xi(e,r):Kr),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ed,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),t}function Og(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&ed.enqueueReplaceState(t,t.state,null)}function Lp(e,t,n,o){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},ff(e);var a=t.contextType;typeof a=="object"&&a!==null?r.context=So(a):(a=oo(t)?ba:Fn.current,r.context=xi(e,a)),r.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Mp(e,t,a,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&ed.enqueueReplaceState(r,r.state,null),Bc(e,n,r,o),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function ki(e,t){try{var n="",o=t;do n+=jv(o),o=o.return;while(o);var r=n}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:r,digest:null}}function Xu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Tp(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hw=typeof WeakMap=="function"?WeakMap:Map;function E_(e,t,n){n=_r(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){jc||(jc=!0,zp=o),Tp(e,t)},n}function M_(e,t,n){n=_r(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var r=t.value;n.payload=function(){return o(r)},n.callback=function(){Tp(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Tp(e,t),typeof o!="function"&&(Vr===null?Vr=new Set([this]):Vr.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Bg(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new hw;var r=new Set;o.set(t,r)}else r=o.get(t),r===void 0&&(r=new Set,o.set(t,r));r.has(n)||(r.add(n),e=Lw.bind(null,e,t,n),t.then(e,e))}function zg(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Fg(e,t,n,o,r){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=_r(-1,1),t.tag=2,Ur(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=r,e)}var mw=br.ReactCurrentOwner,to=!1;function Vn(e,t,n,o){t.child=e===null?n_(t,null,n,o):wi(t,e.child,n,o)}function Hg(e,t,n,o,r){n=n.render;var a=t.ref;return gi(t,r),o=yf(e,t,n,o,a,r),n=xf(),e!==null&&!to?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,wr(e,t,r)):(Kt&&n&&af(t),t.flags|=1,Vn(e,t,o,r),t.child)}function Wg(e,t,n,o,r){if(e===null){var a=n.type;return typeof a=="function"&&!Tf(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,L_(e,t,a,o,r)):(e=bc(n.type,null,o,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&r)===0){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ds,n(i,o)&&e.ref===t.ref)return wr(e,t,r)}return t.flags|=1,e=Xr(a,o),e.ref=t.ref,e.return=t,t.child=e}function L_(e,t,n,o,r){if(e!==null){var a=e.memoizedProps;if(Ds(a,o)&&e.ref===t.ref)if(to=!1,t.pendingProps=o=a,(e.lanes&r)!==0)(e.flags&131072)!==0&&(to=!0);else return t.lanes=e.lanes,wr(e,t,r)}return $p(e,t,n,o,r)}function T_(e,t,n){var o=t.pendingProps,r=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(ui,po),po|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ht(ui,po),po|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:n,Ht(ui,po),po|=o}else a!==null?(o=a.baseLanes|n,t.memoizedState=null):o=n,Ht(ui,po),po|=o;return Vn(e,t,r,n),t.child}function $_(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $p(e,t,n,o,r){var a=oo(n)?ba:Fn.current;return a=xi(t,a),gi(t,r),n=yf(e,t,n,o,a,r),o=xf(),e!==null&&!to?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,wr(e,t,r)):(Kt&&o&&af(t),t.flags|=1,Vn(e,t,n,r),t.child)}function jg(e,t,n,o,r){if(oo(n)){var a=!0;Nc(t)}else a=!1;if(gi(t,r),t.stateNode===null)xc(e,t),S_(t,n,o),Lp(t,n,o,r),o=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var l=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=So(c):(c=oo(n)?ba:Fn.current,c=xi(t,c));var u=n.getDerivedStateFromProps,p=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==o||l!==c)&&Og(t,i,o,c),Ar=!1;var d=t.memoizedState;i.state=d,Bc(t,o,i,r),l=t.memoizedState,s!==o||d!==l||no.current||Ar?(typeof u=="function"&&(Mp(t,n,u,o),l=t.memoizedState),(s=Ar||Dg(t,n,s,o,d,l,c))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=l),i.props=o,i.state=l,i.context=c,o=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{i=t.stateNode,r_(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Do(t.type,s),i.props=c,p=t.pendingProps,d=i.context,l=n.contextType,typeof l=="object"&&l!==null?l=So(l):(l=oo(n)?ba:Fn.current,l=xi(t,l));var y=n.getDerivedStateFromProps;(u=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==p||d!==l)&&Og(t,i,o,l),Ar=!1,d=t.memoizedState,i.state=d,Bc(t,o,i,r);var _=t.memoizedState;s!==p||d!==_||no.current||Ar?(typeof y=="function"&&(Mp(t,n,y,o),_=t.memoizedState),(c=Ar||Dg(t,n,c,o,d,_,l)||!1)?(u||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(o,_,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(o,_,l)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=_),i.props=o,i.state=_,i.context=l,o=c):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),o=!1)}return Ip(e,t,n,o,a,r)}function Ip(e,t,n,o,r,a){$_(e,t);var i=(t.flags&128)!==0;if(!o&&!i)return r&&Lg(t,n,!1),wr(e,t,a);o=t.stateNode,mw.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&i?(t.child=wi(t,e.child,null,a),t.child=wi(t,null,s,a)):Vn(e,t,s,a),t.memoizedState=o.state,r&&Lg(t,n,!0),t.child}function I_(e){var t=e.stateNode;t.pendingContext?Mg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Mg(e,t.context,!1),hf(e,t.containerInfo)}function Ug(e,t,n,o,r){return vi(),lf(r),t.flags|=256,Vn(e,t,n,o),t.child}var Pp={dehydrated:null,treeContext:null,retryLane:0};function Np(e){return{baseLanes:e,cachePool:null,transitions:null}}function P_(e,t,n){var o=t.pendingProps,r=Jt.current,a=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(r&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),Ht(Jt,r&1),e===null)return Sp(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=o.children,e=o.fallback,a?(o=t.mode,a=t.child,i={mode:"hidden",children:i},(o&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=i):a=od(i,o,0,null),e=wa(e,o,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Np(n),t.memoizedState=Pp,e):bf(t,i));if(r=e.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return gw(e,t,i,o,s,r,n);if(a){a=o.fallback,i=t.mode,r=e.child,s=r.sibling;var l={mode:"hidden",children:o.children};return(i&1)===0&&t.child!==r?(o=t.child,o.childLanes=0,o.pendingProps=l,t.deletions=null):(o=Xr(r,l),o.subtreeFlags=r.subtreeFlags&14680064),s!==null?a=Xr(s,a):(a=wa(a,i,n,null),a.flags|=2),a.return=t,o.return=t,o.sibling=a,t.child=o,o=a,a=t.child,i=e.child.memoizedState,i=i===null?Np(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~n,t.memoizedState=Pp,o}return a=e.child,e=a.sibling,o=Xr(a,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function bf(e,t){return t=od({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function dc(e,t,n,o){return o!==null&&lf(o),wi(t,e.child,null,n),e=bf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gw(e,t,n,o,r,a,i){if(n)return t.flags&256?(t.flags&=-257,o=Xu(Error(pe(422))),dc(e,t,i,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=o.fallback,r=t.mode,o=od({mode:"visible",children:o.children},r,0,null),a=wa(a,r,i,null),a.flags|=2,o.return=t,a.return=t,o.sibling=a,t.child=o,(t.mode&1)!==0&&wi(t,e.child,null,i),t.child.memoizedState=Np(i),t.memoizedState=Pp,a);if((t.mode&1)===0)return dc(e,t,i,null);if(r.data==="$!"){if(o=r.nextSibling&&r.nextSibling.dataset,o)var s=o.dgst;return o=s,a=Error(pe(419)),o=Xu(a,o,void 0),dc(e,t,i,o)}if(s=(i&e.childLanes)!==0,to||s){if(o=Mn,o!==null){switch(i&-i){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(o.suspendedLanes|i))!==0?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,vr(e,r),Fo(o,e,r,-1))}return Lf(),o=Xu(Error(pe(421))),dc(e,t,i,o)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=Tw.bind(null,e),r._reactRetry=t,null):(e=a.treeContext,fo=jr(r.nextSibling),ho=t,Kt=!0,Bo=null,e!==null&&(wo[bo++]=mr,wo[bo++]=gr,wo[bo++]=ka,mr=e.id,gr=e.overflow,ka=t),t=bf(t,o.children),t.flags|=4096,t)}function Vg(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Ep(e.return,t,n)}function qu(e,t,n,o,r){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:r}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=n,a.tailMode=r)}function N_(e,t,n){var o=t.pendingProps,r=o.revealOrder,a=o.tail;if(Vn(e,t,o.children,n),o=Jt.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vg(e,n,t);else if(e.tag===19)Vg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Ht(Jt,o),(t.mode&1)===0)t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&zc(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),qu(t,!1,r,n,a);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&zc(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}qu(t,!0,n,null,a);break;case"together":qu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xc(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Sa|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(pe(153));if(t.child!==null){for(e=t.child,n=Xr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _w(e,t,n){switch(t.tag){case 3:I_(t),vi();break;case 5:a_(t);break;case 1:oo(t.type)&&Nc(t);break;case 4:hf(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,r=t.memoizedProps.value;Ht(Dc,o._currentValue),o._currentValue=r;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Ht(Jt,Jt.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?P_(e,t,n):(Ht(Jt,Jt.current&1),e=wr(e,t,n),e!==null?e.sibling:null);Ht(Jt,Jt.current&1);break;case 19:if(o=(n&t.childLanes)!==0,(e.flags&128)!==0){if(o)return N_(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ht(Jt,Jt.current),o)break;return null;case 22:case 23:return t.lanes=0,T_(e,t,n)}return wr(e,t,n)}var R_,Rp,A_,D_;R_=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rp=function(){};A_=function(e,t,n,o){var r=e.memoizedProps;if(r!==o){e=t.stateNode,xa(Jo.current);var a=null;switch(n){case"input":r=np(e,r),o=np(e,o),a=[];break;case"select":r=tn({},r,{value:void 0}),o=tn({},o,{value:void 0}),a=[];break;case"textarea":r=ap(e,r),o=ap(e,o),a=[];break;default:typeof r.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Ic)}sp(n,o);var i;n=null;for(c in r)if(!o.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var s=r[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ts.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in o){var l=o[c];if(s=r?.[c],o.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(i in s)!s.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in l)l.hasOwnProperty(i)&&s[i]!==l[i]&&(n||(n={}),n[i]=l[i])}else n||(a||(a=[]),a.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ts.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ut("scroll",e),a||s===l||(a=[])):(a=a||[]).push(c,l))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}};D_=function(e,t,n,o){n!==o&&(t.flags|=4)};function fs(e,t){if(!Kt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Bn(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags&14680064,o|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function yw(e,t,n){var o=t.pendingProps;switch(sf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bn(t),null;case 1:return oo(t.type)&&Pc(),Bn(t),null;case 3:return o=t.stateNode,bi(),Vt(no),Vt(Fn),gf(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(lc(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Bo!==null&&(Wp(Bo),Bo=null))),Rp(e,t),Bn(t),null;case 5:mf(t);var r=xa(Hs.current);if(n=t.type,e!==null&&t.stateNode!=null)A_(e,t,n,o,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(pe(166));return Bn(t),null}if(e=xa(Jo.current),lc(t)){o=t.stateNode,n=t.type;var a=t.memoizedProps;switch(o[Go]=t,o[zs]=a,e=(t.mode&1)!==0,n){case"dialog":Ut("cancel",o),Ut("close",o);break;case"iframe":case"object":case"embed":Ut("load",o);break;case"video":case"audio":for(r=0;r<xs.length;r++)Ut(xs[r],o);break;case"source":Ut("error",o);break;case"img":case"image":case"link":Ut("error",o),Ut("load",o);break;case"details":Ut("toggle",o);break;case"input":Jm(o,a),Ut("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},Ut("invalid",o);break;case"textarea":tg(o,a),Ut("invalid",o)}sp(n,a),r=null;for(var i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="children"?typeof s=="string"?o.textContent!==s&&(a.suppressHydrationWarning!==!0&&sc(o.textContent,s,e),r=["children",s]):typeof s=="number"&&o.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&sc(o.textContent,s,e),r=["children",""+s]):Ts.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&Ut("scroll",o)}switch(n){case"input":Kl(o),eg(o,a,!0);break;case"textarea":Kl(o),ng(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=Ic)}o=r,t.updateQueue=o,o!==null&&(t.flags|=4)}else{i=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=d0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script></script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=i.createElement(n,{is:o.is}):(e=i.createElement(n),n==="select"&&(i=e,o.multiple?i.multiple=!0:o.size&&(i.size=o.size))):e=i.createElementNS(e,n),e[Go]=t,e[zs]=o,R_(e,t,!1,!1),t.stateNode=e;e:{switch(i=lp(n,o),n){case"dialog":Ut("cancel",e),Ut("close",e),r=o;break;case"iframe":case"object":case"embed":Ut("load",e),r=o;break;case"video":case"audio":for(r=0;r<xs.length;r++)Ut(xs[r],e);r=o;break;case"source":Ut("error",e),r=o;break;case"img":case"image":case"link":Ut("error",e),Ut("load",e),r=o;break;case"details":Ut("toggle",e),r=o;break;case"input":Jm(e,o),r=np(e,o),Ut("invalid",e);break;case"option":r=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},r=tn({},o,{value:void 0}),Ut("invalid",e);break;case"textarea":tg(e,o),r=ap(e,o),Ut("invalid",e);break;default:r=o}sp(n,r),s=r;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?f0(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&u0(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&$s(e,l):typeof l=="number"&&$s(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ts.hasOwnProperty(a)?l!=null&&a==="onScroll"&&Ut("scroll",e):l!=null&&Vp(e,a,l,i))}switch(n){case"input":Kl(e),eg(e,o,!1);break;case"textarea":Kl(e),ng(e);break;case"option":o.value!=null&&e.setAttribute("value",""+qr(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?pi(e,!!o.multiple,a,!1):o.defaultValue!=null&&pi(e,!!o.multiple,o.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Ic)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Bn(t),null;case 6:if(e&&t.stateNode!=null)D_(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(pe(166));if(n=xa(Hs.current),xa(Jo.current),lc(t)){if(o=t.stateNode,n=t.memoizedProps,o[Go]=t,(a=o.nodeValue!==n)&&(e=ho,e!==null))switch(e.tag){case 3:sc(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&sc(o.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Go]=t,t.stateNode=o}return Bn(t),null;case 13:if(Vt(Jt),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Kt&&fo!==null&&(t.mode&1)!==0&&(t.flags&128)===0)e_(),vi(),t.flags|=98560,a=!1;else if(a=lc(t),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(pe(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(pe(317));a[Go]=t}else vi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Bn(t),a=!1}else Bo!==null&&(Wp(Bo),Bo=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Jt.current&1)!==0?bn===0&&(bn=3):Lf())),t.updateQueue!==null&&(t.flags|=4),Bn(t),null);case 4:return bi(),Rp(e,t),e===null&&Os(t.stateNode.containerInfo),Bn(t),null;case 10:return uf(t.type._context),Bn(t),null;case 17:return oo(t.type)&&Pc(),Bn(t),null;case 19:if(Vt(Jt),a=t.memoizedState,a===null)return Bn(t),null;if(o=(t.flags&128)!==0,i=a.rendering,i===null)if(o)fs(a,!1);else{if(bn!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=zc(e),i!==null){for(t.flags|=128,fs(a,!1),o=i.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)a=n,e=o,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ht(Jt,Jt.current&1|2),t.child}e=e.sibling}a.tail!==null&&dn()>Ci&&(t.flags|=128,o=!0,fs(a,!1),t.lanes=4194304)}else{if(!o)if(e=zc(i),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fs(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!Kt)return Bn(t),null}else 2*dn()-a.renderingStartTime>Ci&&n!==1073741824&&(t.flags|=128,o=!0,fs(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=dn(),t.sibling=null,n=Jt.current,Ht(Jt,o?n&1|2:n&1),t):(Bn(t),null);case 22:case 23:return Mf(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(po&1073741824)!==0&&(Bn(t),t.subtreeFlags&6&&(t.flags|=8192)):Bn(t),null;case 24:return null;case 25:return null}throw Error(pe(156,t.tag))}function xw(e,t){switch(sf(t),t.tag){case 1:return oo(t.type)&&Pc(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bi(),Vt(no),Vt(Fn),gf(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return mf(t),null;case 13:if(Vt(Jt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(pe(340));vi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Vt(Jt),null;case 4:return bi(),null;case 10:return uf(t.type._context),null;case 22:case 23:return Mf(),null;case 24:return null;default:return null}}var uc=!1,zn=!1,vw=typeof WeakSet=="function"?WeakSet:Set,Re=null;function di(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){an(e,t,o)}else n.current=null}function Ap(e,t,n){try{n()}catch(o){an(e,t,o)}}var Yg=!1;function ww(e,t){if(yp=Lc,e=H0(),rf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var r=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,s=-1,l=-1,c=0,u=0,p=e,d=null;t:for(;;){for(var y;p!==n||r!==0&&p.nodeType!==3||(s=i+r),p!==a||o!==0&&p.nodeType!==3||(l=i+o),p.nodeType===3&&(i+=p.nodeValue.length),(y=p.firstChild)!==null;)d=p,p=y;for(;;){if(p===e)break t;if(d===n&&++c===r&&(s=i),d===a&&++u===o&&(l=i),(y=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=y}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(xp={focusedElem:e,selectionRange:n},Lc=!1,Re=t;Re!==null;)if(t=Re,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Re=e;else for(;Re!==null;){t=Re;try{var _=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var C=_.memoizedProps,v=_.memoizedState,m=t.stateNode,g=m.getSnapshotBeforeUpdate(t.elementType===t.type?C:Do(t.type,C),v);m.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var E=t.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(pe(163))}}catch(I){an(t,t.return,I)}if(e=t.sibling,e!==null){e.return=t.return,Re=e;break}Re=t.return}return _=Yg,Yg=!1,_}function Es(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var r=o=o.next;do{if((r.tag&e)===e){var a=r.destroy;r.destroy=void 0,a!==void 0&&Ap(t,n,a)}r=r.next}while(r!==o)}}function td(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function Dp(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function O_(e){var t=e.alternate;t!==null&&(e.alternate=null,O_(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Go],delete t[zs],delete t[bp],delete t[ow],delete t[rw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function B_(e){return e.tag===5||e.tag===3||e.tag===4}function Xg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||B_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Op(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ic));else if(o!==4&&(e=e.child,e!==null))for(Op(e,t,n),e=e.sibling;e!==null;)Op(e,t,n),e=e.sibling}function Bp(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Bp(e,t,n),e=e.sibling;e!==null;)Bp(e,t,n),e=e.sibling}var $n=null,Oo=!1;function Nr(e,t,n){for(n=n.child;n!==null;)z_(e,t,n),n=n.sibling}function z_(e,t,n){if(Zo&&typeof Zo.onCommitFiberUnmount=="function")try{Zo.onCommitFiberUnmount(Xc,n)}catch{}switch(n.tag){case 5:zn||di(n,t);case 6:var o=$n,r=Oo;$n=null,Nr(e,t,n),$n=o,Oo=r,$n!==null&&(Oo?(e=$n,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):$n.removeChild(n.stateNode));break;case 18:$n!==null&&(Oo?(e=$n,n=n.stateNode,e.nodeType===8?Hu(e.parentNode,n):e.nodeType===1&&Hu(e,n),Rs(e)):Hu($n,n.stateNode));break;case 4:o=$n,r=Oo,$n=n.stateNode.containerInfo,Oo=!0,Nr(e,t,n),$n=o,Oo=r;break;case 0:case 11:case 14:case 15:if(!zn&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){r=o=o.next;do{var a=r,i=a.destroy;a=a.tag,i!==void 0&&((a&2)!==0||(a&4)!==0)&&Ap(n,t,i),r=r.next}while(r!==o)}Nr(e,t,n);break;case 1:if(!zn&&(di(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(s){an(n,t,s)}Nr(e,t,n);break;case 21:Nr(e,t,n);break;case 22:n.mode&1?(zn=(o=zn)||n.memoizedState!==null,Nr(e,t,n),zn=o):Nr(e,t,n);break;default:Nr(e,t,n)}}function qg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vw),t.forEach(function(o){var r=$w.bind(null,e,o);n.has(o)||(n.add(o),o.then(r,r))})}}function Ao(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var r=n[o];try{var a=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:$n=s.stateNode,Oo=!1;break e;case 3:$n=s.stateNode.containerInfo,Oo=!0;break e;case 4:$n=s.stateNode.containerInfo,Oo=!0;break e}s=s.return}if($n===null)throw Error(pe(160));z_(a,i,r),$n=null,Oo=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){an(r,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)F_(t,e),t=t.sibling}function F_(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ao(t,e),Ko(e),o&4){try{Es(3,e,e.return),td(3,e)}catch(C){an(e,e.return,C)}try{Es(5,e,e.return)}catch(C){an(e,e.return,C)}}break;case 1:Ao(t,e),Ko(e),o&512&&n!==null&&di(n,n.return);break;case 5:if(Ao(t,e),Ko(e),o&512&&n!==null&&di(n,n.return),e.flags&32){var r=e.stateNode;try{$s(r,"")}catch(C){an(e,e.return,C)}}if(o&4&&(r=e.stateNode,r!=null)){var a=e.memoizedProps,i=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&l0(r,a),lp(s,i);var c=lp(s,a);for(i=0;i<l.length;i+=2){var u=l[i],p=l[i+1];u==="style"?f0(r,p):u==="dangerouslySetInnerHTML"?u0(r,p):u==="children"?$s(r,p):Vp(r,u,p,c)}switch(s){case"input":op(r,a);break;case"textarea":c0(r,a);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var y=a.value;y!=null?pi(r,!!a.multiple,y,!1):d!==!!a.multiple&&(a.defaultValue!=null?pi(r,!!a.multiple,a.defaultValue,!0):pi(r,!!a.multiple,a.multiple?[]:"",!1))}r[zs]=a}catch(C){an(e,e.return,C)}}break;case 6:if(Ao(t,e),Ko(e),o&4){if(e.stateNode===null)throw Error(pe(162));r=e.stateNode,a=e.memoizedProps;try{r.nodeValue=a}catch(C){an(e,e.return,C)}}break;case 3:if(Ao(t,e),Ko(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Rs(t.containerInfo)}catch(C){an(e,e.return,C)}break;case 4:Ao(t,e),Ko(e);break;case 13:Ao(t,e),Ko(e),r=e.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(Sf=dn())),o&4&&qg(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(zn=(c=zn)||u,Ao(t,e),zn=c):Ao(t,e),Ko(e),o&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&(e.mode&1)!==0)for(Re=e,u=e.child;u!==null;){for(p=Re=u;Re!==null;){switch(d=Re,y=d.child,d.tag){case 0:case 11:case 14:case 15:Es(4,d,d.return);break;case 1:di(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){o=d,n=d.return;try{t=o,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(C){an(o,n,C)}}break;case 5:di(d,d.return);break;case 22:if(d.memoizedState!==null){Qg(p);continue}}y!==null?(y.return=d,Re=y):Qg(p)}u=u.sibling}e:for(u=null,p=e;;){if(p.tag===5){if(u===null){u=p;try{r=p.stateNode,c?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=p.stateNode,l=p.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=p0("display",i))}catch(C){an(e,e.return,C)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(C){an(e,e.return,C)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ao(t,e),Ko(e),o&4&&qg(e);break;case 21:break;default:Ao(t,e),Ko(e)}}function Ko(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(B_(n)){var o=n;break e}n=n.return}throw Error(pe(160))}switch(o.tag){case 5:var r=o.stateNode;o.flags&32&&($s(r,""),o.flags&=-33);var a=Xg(e);Bp(e,a,r);break;case 3:case 4:var i=o.stateNode.containerInfo,s=Xg(e);Op(e,s,i);break;default:throw Error(pe(161))}}catch(l){an(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bw(e,t,n){Re=e,H_(e,t,n)}function H_(e,t,n){for(var o=(e.mode&1)!==0;Re!==null;){var r=Re,a=r.child;if(r.tag===22&&o){var i=r.memoizedState!==null||uc;if(!i){var s=r.alternate,l=s!==null&&s.memoizedState!==null||zn;s=uc;var c=zn;if(uc=i,(zn=l)&&!c)for(Re=r;Re!==null;)i=Re,l=i.child,i.tag===22&&i.memoizedState!==null?Gg(r):l!==null?(l.return=i,Re=l):Gg(r);for(;a!==null;)Re=a,H_(a,t,n),a=a.sibling;Re=r,uc=s,zn=c}Kg(e,t,n)}else(r.subtreeFlags&8772)!==0&&a!==null?(a.return=r,Re=a):Kg(e,t,n)}}function Kg(e){for(;Re!==null;){var t=Re;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:zn||td(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!zn)if(n===null)o.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:Do(t.type,n.memoizedProps);o.componentDidUpdate(r,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Ng(t,a,o);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ng(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&Rs(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(pe(163))}zn||t.flags&512&&Dp(t)}catch(d){an(t,t.return,d)}}if(t===e){Re=null;break}if(n=t.sibling,n!==null){n.return=t.return,Re=n;break}Re=t.return}}function Qg(e){for(;Re!==null;){var t=Re;if(t===e){Re=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Re=n;break}Re=t.return}}function Gg(e){for(;Re!==null;){var t=Re;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{td(4,t)}catch(l){an(t,n,l)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var r=t.return;try{o.componentDidMount()}catch(l){an(t,r,l)}}var a=t.return;try{Dp(t)}catch(l){an(t,a,l)}break;case 5:var i=t.return;try{Dp(t)}catch(l){an(t,i,l)}}}catch(l){an(t,t.return,l)}if(t===e){Re=null;break}var s=t.sibling;if(s!==null){s.return=t.return,Re=s;break}Re=t.return}}var kw=Math.ceil,Wc=br.ReactCurrentDispatcher,kf=br.ReactCurrentOwner,Co=br.ReactCurrentBatchConfig,wt=0,Mn=null,yn=null,In=0,po=0,ui=Gr(0),bn=0,Vs=null,Sa=0,nd=0,Cf=0,Ms=null,eo=null,Sf=0,Ci=1/0,fr=null,jc=!1,zp=null,Vr=null,pc=!1,zr=null,Uc=0,Ls=0,Fp=null,vc=-1,wc=0;function Yn(){return(wt&6)!==0?dn():vc!==-1?vc:vc=dn()}function Yr(e){return(e.mode&1)===0?1:(wt&2)!==0&&In!==0?In&-In:iw.transition!==null?(wc===0&&(wc=S0()),wc):(e=Tt,e!==0||(e=window.event,e=e===void 0?16:P0(e.type)),e)}function Fo(e,t,n,o){if(50<Ls)throw Ls=0,Fp=null,Error(pe(185));Ys(e,n,o),((wt&2)===0||e!==Mn)&&(e===Mn&&((wt&2)===0&&(nd|=n),bn===4&&Or(e,In)),ro(e,o),n===1&&wt===0&&(t.mode&1)===0&&(Ci=dn()+500,Zc&&Zr()))}function ro(e,t){var n=e.callbackNode;l5(e,t);var o=Mc(e,e===Mn?In:0);if(o===0)n!==null&&ag(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&ag(n),t===1)e.tag===0?aw(Zg.bind(null,e)):G0(Zg.bind(null,e)),tw(function(){(wt&6)===0&&Zr()}),n=null;else{switch(E0(o)){case 1:n=Qp;break;case 4:n=k0;break;case 16:n=Ec;break;case 536870912:n=C0;break;default:n=Ec}n=K_(n,W_.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function W_(e,t){if(vc=-1,wc=0,(wt&6)!==0)throw Error(pe(327));var n=e.callbackNode;if(_i()&&e.callbackNode!==n)return null;var o=Mc(e,e===Mn?In:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=Vc(e,o);else{t=o;var r=wt;wt|=2;var a=U_();(Mn!==e||In!==t)&&(fr=null,Ci=dn()+500,va(e,t));do try{Ew();break}catch(s){j_(e,s)}while(!0);df(),Wc.current=a,wt=r,yn!==null?t=0:(Mn=null,In=0,t=bn)}if(t!==0){if(t===2&&(r=fp(e),r!==0&&(o=r,t=Hp(e,r))),t===1)throw n=Vs,va(e,0),Or(e,o),ro(e,dn()),n;if(t===6)Or(e,o);else{if(r=e.current.alternate,(o&30)===0&&!Cw(r)&&(t=Vc(e,o),t===2&&(a=fp(e),a!==0&&(o=a,t=Hp(e,a))),t===1))throw n=Vs,va(e,0),Or(e,o),ro(e,dn()),n;switch(e.finishedWork=r,e.finishedLanes=o,t){case 0:case 1:throw Error(pe(345));case 2:ga(e,eo,fr);break;case 3:if(Or(e,o),(o&130023424)===o&&(t=Sf+500-dn(),10<t)){if(Mc(e,0)!==0)break;if(r=e.suspendedLanes,(r&o)!==o){Yn(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=wp(ga.bind(null,e,eo,fr),t);break}ga(e,eo,fr);break;case 4:if(Or(e,o),(o&4194240)===o)break;for(t=e.eventTimes,r=-1;0<o;){var i=31-zo(o);a=1<<i,i=t[i],i>r&&(r=i),o&=~a}if(o=r,o=dn()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*kw(o/1960))-o,10<o){e.timeoutHandle=wp(ga.bind(null,e,eo,fr),o);break}ga(e,eo,fr);break;case 5:ga(e,eo,fr);break;default:throw Error(pe(329))}}}return ro(e,dn()),e.callbackNode===n?W_.bind(null,e):null}function Hp(e,t){var n=Ms;return e.current.memoizedState.isDehydrated&&(va(e,t).flags|=256),e=Vc(e,t),e!==2&&(t=eo,eo=n,t!==null&&Wp(t)),e}function Wp(e){eo===null?eo=e:eo.push.apply(eo,e)}function Cw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var r=n[o],a=r.getSnapshot;r=r.value;try{if(!Ho(a(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Or(e,t){for(t&=~Cf,t&=~nd,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-zo(t),o=1<<n;e[n]=-1,t&=~o}}function Zg(e){if((wt&6)!==0)throw Error(pe(327));_i();var t=Mc(e,0);if((t&1)===0)return ro(e,dn()),null;var n=Vc(e,t);if(e.tag!==0&&n===2){var o=fp(e);o!==0&&(t=o,n=Hp(e,o))}if(n===1)throw n=Vs,va(e,0),Or(e,t),ro(e,dn()),n;if(n===6)throw Error(pe(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ga(e,eo,fr),ro(e,dn()),null}function Ef(e,t){var n=wt;wt|=1;try{return e(t)}finally{wt=n,wt===0&&(Ci=dn()+500,Zc&&Zr())}}function Ea(e){zr!==null&&zr.tag===0&&(wt&6)===0&&_i();var t=wt;wt|=1;var n=Co.transition,o=Tt;try{if(Co.transition=null,Tt=1,e)return e()}finally{Tt=o,Co.transition=n,wt=t,(wt&6)===0&&Zr()}}function Mf(){po=ui.current,Vt(ui)}function va(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ew(n)),yn!==null)for(n=yn.return;n!==null;){var o=n;switch(sf(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Pc();break;case 3:bi(),Vt(no),Vt(Fn),gf();break;case 5:mf(o);break;case 4:bi();break;case 13:Vt(Jt);break;case 19:Vt(Jt);break;case 10:uf(o.type._context);break;case 22:case 23:Mf()}n=n.return}if(Mn=e,yn=e=Xr(e.current,null),In=po=t,bn=0,Vs=null,Cf=nd=Sa=0,eo=Ms=null,ya!==null){for(t=0;t<ya.length;t++)if(n=ya[t],o=n.interleaved,o!==null){n.interleaved=null;var r=o.next,a=n.pending;if(a!==null){var i=a.next;a.next=r,o.next=i}n.pending=o}ya=null}return e}function j_(e,t){do{var n=yn;try{if(df(),_c.current=Hc,Fc){for(var o=en.memoizedState;o!==null;){var r=o.queue;r!==null&&(r.pending=null),o=o.next}Fc=!1}if(Ca=0,En=wn=en=null,Ss=!1,Ws=0,kf.current=null,n===null||n.return===null){bn=1,Vs=t,yn=null;break}e:{var a=e,i=n.return,s=n,l=t;if(t=In,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=s,p=u.tag;if((u.mode&1)===0&&(p===0||p===11||p===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var y=zg(i);if(y!==null){y.flags&=-257,Fg(y,i,s,a,t),y.mode&1&&Bg(a,c,t),t=y,l=c;var _=t.updateQueue;if(_===null){var C=new Set;C.add(l),t.updateQueue=C}else _.add(l);break e}else{if((t&1)===0){Bg(a,c,t),Lf();break e}l=Error(pe(426))}}else if(Kt&&s.mode&1){var v=zg(i);if(v!==null){(v.flags&65536)===0&&(v.flags|=256),Fg(v,i,s,a,t),lf(ki(l,s));break e}}a=l=ki(l,s),bn!==4&&(bn=2),Ms===null?Ms=[a]:Ms.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var m=E_(a,l,t);Pg(a,m);break e;case 1:s=l;var g=a.type,E=a.stateNode;if((a.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Vr===null||!Vr.has(E)))){a.flags|=65536,t&=-t,a.lanes|=t;var I=M_(a,s,t);Pg(a,I);break e}}a=a.return}while(a!==null)}Y_(n)}catch(D){t=D,yn===n&&n!==null&&(yn=n=n.return);continue}break}while(!0)}function U_(){var e=Wc.current;return Wc.current=Hc,e===null?Hc:e}function Lf(){(bn===0||bn===3||bn===2)&&(bn=4),Mn===null||(Sa&268435455)===0&&(nd&268435455)===0||Or(Mn,In)}function Vc(e,t){var n=wt;wt|=2;var o=U_();(Mn!==e||In!==t)&&(fr=null,va(e,t));do try{Sw();break}catch(r){j_(e,r)}while(!0);if(df(),wt=n,Wc.current=o,yn!==null)throw Error(pe(261));return Mn=null,In=0,bn}function Sw(){for(;yn!==null;)V_(yn)}function Ew(){for(;yn!==null&&!Jv();)V_(yn)}function V_(e){var t=q_(e.alternate,e,po);e.memoizedProps=e.pendingProps,t===null?Y_(e):yn=t,kf.current=null}function Y_(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=yw(n,t,po),n!==null){yn=n;return}}else{if(n=xw(n,t),n!==null){n.flags&=32767,yn=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{bn=6,yn=null;return}}if(t=t.sibling,t!==null){yn=t;return}yn=t=e}while(t!==null);bn===0&&(bn=5)}function ga(e,t,n){var o=Tt,r=Co.transition;try{Co.transition=null,Tt=1,Mw(e,t,n,o)}finally{Co.transition=r,Tt=o}return null}function Mw(e,t,n,o){do _i();while(zr!==null);if((wt&6)!==0)throw Error(pe(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(pe(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(c5(e,a),e===Mn&&(yn=Mn=null,In=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||pc||(pc=!0,K_(Ec,function(){return _i(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=Co.transition,Co.transition=null;var i=Tt;Tt=1;var s=wt;wt|=4,kf.current=null,ww(e,n),F_(n,e),K5(xp),Lc=!!yp,xp=yp=null,e.current=n,bw(n,e,r),e5(),wt=s,Tt=i,Co.transition=a}else e.current=n;if(pc&&(pc=!1,zr=e,Uc=r),a=e.pendingLanes,a===0&&(Vr=null),o5(n.stateNode,o),ro(e,dn()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],o(r.value,{componentStack:r.stack,digest:r.digest});if(jc)throw jc=!1,e=zp,zp=null,e;return(Uc&1)!==0&&e.tag!==0&&_i(),a=e.pendingLanes,(a&1)!==0?e===Fp?Ls++:(Ls=0,Fp=e):Ls=0,Zr(),null}function _i(){if(zr!==null){var e=E0(Uc),t=Co.transition,n=Tt;try{if(Co.transition=null,Tt=16>e?16:e,zr===null)var o=!1;else{if(e=zr,zr=null,Uc=0,(wt&6)!==0)throw Error(pe(331));var r=wt;for(wt|=4,Re=e.current;Re!==null;){var a=Re,i=a.child;if((Re.flags&16)!==0){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(Re=c;Re!==null;){var u=Re;switch(u.tag){case 0:case 11:case 15:Es(8,u,a)}var p=u.child;if(p!==null)p.return=u,Re=p;else for(;Re!==null;){u=Re;var d=u.sibling,y=u.return;if(O_(u),u===c){Re=null;break}if(d!==null){d.return=y,Re=d;break}Re=y}}}var _=a.alternate;if(_!==null){var C=_.child;if(C!==null){_.child=null;do{var v=C.sibling;C.sibling=null,C=v}while(C!==null)}}Re=a}}if((a.subtreeFlags&2064)!==0&&i!==null)i.return=a,Re=i;else e:for(;Re!==null;){if(a=Re,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:Es(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,Re=m;break e}Re=a.return}}var g=e.current;for(Re=g;Re!==null;){i=Re;var E=i.child;if((i.subtreeFlags&2064)!==0&&E!==null)E.return=i,Re=E;else e:for(i=g;Re!==null;){if(s=Re,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:td(9,s)}}catch(D){an(s,s.return,D)}if(s===i){Re=null;break e}var I=s.sibling;if(I!==null){I.return=s.return,Re=I;break e}Re=s.return}}if(wt=r,Zr(),Zo&&typeof Zo.onPostCommitFiberRoot=="function")try{Zo.onPostCommitFiberRoot(Xc,e)}catch{}o=!0}return o}finally{Tt=n,Co.transition=t}}return!1}function Jg(e,t,n){t=ki(n,t),t=E_(e,t,1),e=Ur(e,t,1),t=Yn(),e!==null&&(Ys(e,1,t),ro(e,t))}function an(e,t,n){if(e.tag===3)Jg(e,e,n);else for(;t!==null;){if(t.tag===3){Jg(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Vr===null||!Vr.has(o))){e=ki(n,e),e=M_(t,e,1),t=Ur(t,e,1),e=Yn(),t!==null&&(Ys(t,1,e),ro(t,e));break}}t=t.return}}function Lw(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=Yn(),e.pingedLanes|=e.suspendedLanes&n,Mn===e&&(In&n)===n&&(bn===4||bn===3&&(In&130023424)===In&&500>dn()-Sf?va(e,0):Cf|=n),ro(e,t)}function X_(e,t){t===0&&((e.mode&1)===0?t=1:(t=Zl,Zl<<=1,(Zl&130023424)===0&&(Zl=4194304)));var n=Yn();e=vr(e,t),e!==null&&(Ys(e,t,n),ro(e,n))}function Tw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),X_(e,n)}function $w(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(pe(314))}o!==null&&o.delete(t),X_(e,n)}var q_;q_=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||no.current)to=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return to=!1,_w(e,t,n);to=(e.flags&131072)!==0}else to=!1,Kt&&(t.flags&1048576)!==0&&Z0(t,Ac,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;xc(e,t),e=t.pendingProps;var r=xi(t,Fn.current);gi(t,n),r=yf(null,t,o,e,r,n);var a=xf();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,oo(o)?(a=!0,Nc(t)):a=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ff(t),r.updater=ed,t.stateNode=r,r._reactInternals=t,Lp(t,o,e,n),t=Ip(null,t,o,!0,a,n)):(t.tag=0,Kt&&a&&af(t),Vn(null,t,r,n),t=t.child),t;case 16:o=t.elementType;e:{switch(xc(e,t),e=t.pendingProps,r=o._init,o=r(o._payload),t.type=o,r=t.tag=Pw(o),e=Do(o,e),r){case 0:t=$p(null,t,o,e,n);break e;case 1:t=jg(null,t,o,e,n);break e;case 11:t=Hg(null,t,o,e,n);break e;case 14:t=Wg(null,t,o,Do(o.type,e),n);break e}throw Error(pe(306,o,""))}return t;case 0:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:Do(o,r),$p(e,t,o,r,n);case 1:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:Do(o,r),jg(e,t,o,r,n);case 3:e:{if(I_(t),e===null)throw Error(pe(387));o=t.pendingProps,a=t.memoizedState,r=a.element,r_(e,t),Bc(t,o,null,n);var i=t.memoizedState;if(o=i.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){r=ki(Error(pe(423)),t),t=Ug(e,t,o,n,r);break e}else if(o!==r){r=ki(Error(pe(424)),t),t=Ug(e,t,o,n,r);break e}else for(fo=jr(t.stateNode.containerInfo.firstChild),ho=t,Kt=!0,Bo=null,n=n_(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vi(),o===r){t=wr(e,t,n);break e}Vn(e,t,o,n)}t=t.child}return t;case 5:return a_(t),e===null&&Sp(t),o=t.type,r=t.pendingProps,a=e!==null?e.memoizedProps:null,i=r.children,vp(o,r)?i=null:a!==null&&vp(o,a)&&(t.flags|=32),$_(e,t),Vn(e,t,i,n),t.child;case 6:return e===null&&Sp(t),null;case 13:return P_(e,t,n);case 4:return hf(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=wi(t,null,o,n):Vn(e,t,o,n),t.child;case 11:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:Do(o,r),Hg(e,t,o,r,n);case 7:return Vn(e,t,t.pendingProps,n),t.child;case 8:return Vn(e,t,t.pendingProps.children,n),t.child;case 12:return Vn(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,r=t.pendingProps,a=t.memoizedProps,i=r.value,Ht(Dc,o._currentValue),o._currentValue=i,a!==null)if(Ho(a.value,i)){if(a.children===r.children&&!no.current){t=wr(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){i=a.child;for(var l=s.firstContext;l!==null;){if(l.context===o){if(a.tag===1){l=_r(-1,n&-n),l.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Ep(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(pe(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ep(i,n,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}Vn(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,o=t.pendingProps.children,gi(t,n),r=So(r),o=o(r),t.flags|=1,Vn(e,t,o,n),t.child;case 14:return o=t.type,r=Do(o,t.pendingProps),r=Do(o.type,r),Wg(e,t,o,r,n);case 15:return L_(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:Do(o,r),xc(e,t),t.tag=1,oo(o)?(e=!0,Nc(t)):e=!1,gi(t,n),S_(t,o,r),Lp(t,o,r,n),Ip(null,t,o,!0,e,n);case 19:return N_(e,t,n);case 22:return T_(e,t,n)}throw Error(pe(156,t.tag))};function K_(e,t){return b0(e,t)}function Iw(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ko(e,t,n,o){return new Iw(e,t,n,o)}function Tf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pw(e){if(typeof e=="function")return Tf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xp)return 11;if(e===qp)return 14}return 2}function Xr(e,t){var n=e.alternate;return n===null?(n=ko(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bc(e,t,n,o,r,a){var i=2;if(o=e,typeof e=="function")Tf(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case ti:return wa(n.children,r,a,t);case Yp:i=8,r|=8;break;case Zu:return e=ko(12,n,t,r|2),e.elementType=Zu,e.lanes=a,e;case Ju:return e=ko(13,n,t,r),e.elementType=Ju,e.lanes=a,e;case ep:return e=ko(19,n,t,r),e.elementType=ep,e.lanes=a,e;case a0:return od(n,r,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case o0:i=10;break e;case r0:i=9;break e;case Xp:i=11;break e;case qp:i=14;break e;case Rr:i=16,o=null;break e}throw Error(pe(130,e==null?e:typeof e,""))}return t=ko(i,n,t,r),t.elementType=e,t.type=o,t.lanes=a,t}function wa(e,t,n,o){return e=ko(7,e,o,t),e.lanes=n,e}function od(e,t,n,o){return e=ko(22,e,o,t),e.elementType=a0,e.lanes=n,e.stateNode={isHidden:!1},e}function Ku(e,t,n){return e=ko(6,e,null,t),e.lanes=n,e}function Qu(e,t,n){return t=ko(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Nw(e,t,n,o,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nu(0),this.expirationTimes=Nu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nu(0),this.identifierPrefix=o,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function $f(e,t,n,o,r,a,i,s,l){return e=new Nw(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=ko(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ff(a),e}function Rw(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ei,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function Q_(e){if(!e)return Kr;e=e._reactInternals;e:{if(La(e)!==e||e.tag!==1)throw Error(pe(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(oo(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(pe(171))}if(e.tag===1){var n=e.type;if(oo(n))return Q0(e,n,t)}return t}function G_(e,t,n,o,r,a,i,s,l){return e=$f(n,o,!0,e,r,a,i,s,l),e.context=Q_(null),n=e.current,o=Yn(),r=Yr(n),a=_r(o,r),a.callback=t??null,Ur(n,a,r),e.current.lanes=r,Ys(e,r,o),ro(e,o),e}function rd(e,t,n,o){var r=t.current,a=Yn(),i=Yr(r);return n=Q_(n),t.context===null?t.context=n:t.pendingContext=n,t=_r(a,i),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Ur(r,t,i),e!==null&&(Fo(e,r,i,a),gc(e,r,i)),i}function Yc(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function e0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function If(e,t){e0(e,t),(e=e.alternate)&&e0(e,t)}function Aw(){return null}var Z_=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pf(e){this._internalRoot=e}ad.prototype.render=Pf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(pe(409));rd(e,t,null,null)};ad.prototype.unmount=Pf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ea(function(){rd(null,e,null,null)}),t[xr]=null}};function ad(e){this._internalRoot=e}ad.prototype.unstable_scheduleHydration=function(e){if(e){var t=T0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dr.length&&t!==0&&t<Dr[n].priority;n++);Dr.splice(n,0,e),n===0&&I0(e)}};function Nf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function id(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function t0(){}function Dw(e,t,n,o,r){if(r){if(typeof o=="function"){var a=o;o=function(){var c=Yc(i);a.call(c)}}var i=G_(t,o,e,0,null,!1,!1,"",t0);return e._reactRootContainer=i,e[xr]=i.current,Os(e.nodeType===8?e.parentNode:e),Ea(),i}for(;r=e.lastChild;)e.removeChild(r);if(typeof o=="function"){var s=o;o=function(){var c=Yc(l);s.call(c)}}var l=$f(e,0,!1,null,null,!1,!1,"",t0);return e._reactRootContainer=l,e[xr]=l.current,Os(e.nodeType===8?e.parentNode:e),Ea(function(){rd(t,l,n,o)}),l}function sd(e,t,n,o,r){var a=n._reactRootContainer;if(a){var i=a;if(typeof r=="function"){var s=r;r=function(){var l=Yc(i);s.call(l)}}rd(t,i,e,r)}else i=Dw(n,t,e,r,o);return Yc(i)}M0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ys(t.pendingLanes);n!==0&&(Gp(t,n|1),ro(t,dn()),(wt&6)===0&&(Ci=dn()+500,Zr()))}break;case 13:Ea(function(){var o=vr(e,1);if(o!==null){var r=Yn();Fo(o,e,1,r)}}),If(e,1)}};Zp=function(e){if(e.tag===13){var t=vr(e,134217728);if(t!==null){var n=Yn();Fo(t,e,134217728,n)}If(e,134217728)}};L0=function(e){if(e.tag===13){var t=Yr(e),n=vr(e,t);if(n!==null){var o=Yn();Fo(n,e,t,o)}If(e,t)}};T0=function(){return Tt};$0=function(e,t){var n=Tt;try{return Tt=e,t()}finally{Tt=n}};dp=function(e,t,n){switch(t){case"input":if(op(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var r=Gc(o);if(!r)throw Error(pe(90));s0(o),op(o,r)}}}break;case"textarea":c0(e,n);break;case"select":t=n.value,t!=null&&pi(e,!!n.multiple,t,!1)}};g0=Ef;_0=Ea;var Ow={usingClientEntryPoint:!1,Events:[qs,ai,Gc,h0,m0,Ef]},hs={findFiberByHostInstance:_a,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bw={bundleType:hs.bundleType,version:hs.version,rendererPackageName:hs.rendererPackageName,rendererConfig:hs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:br.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=v0(e),e===null?null:e.stateNode},findFiberByHostInstance:hs.findFiberByHostInstance||Aw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(ms=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ms.isDisabled&&ms.supportsFiber))try{Xc=ms.inject(Bw),Zo=ms}catch{}var ms;_o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ow;_o.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nf(t))throw Error(pe(200));return Rw(e,t,null,n)};_o.createRoot=function(e,t){if(!Nf(e))throw Error(pe(299));var n=!1,o="",r=Z_;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=$f(e,1,!1,null,null,n,!1,o,r),e[xr]=t.current,Os(e.nodeType===8?e.parentNode:e),new Pf(t)};_o.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(pe(188)):(e=Object.keys(e).join(","),Error(pe(268,e)));return e=v0(t),e=e===null?null:e.stateNode,e};_o.flushSync=function(e){return Ea(e)};_o.hydrate=function(e,t,n){if(!id(t))throw Error(pe(200));return sd(null,e,t,!0,n)};_o.hydrateRoot=function(e,t,n){if(!Nf(e))throw Error(pe(405));var o=n!=null&&n.hydratedSources||null,r=!1,a="",i=Z_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=G_(t,null,e,1,n??null,r,!1,a,i),e[xr]=t.current,Os(e),o)for(e=0;e<o.length;e++)n=o[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new ad(t)};_o.render=function(e,t,n){if(!id(t))throw Error(pe(200));return sd(null,e,t,!1,n)};_o.unmountComponentAtNode=function(e){if(!id(e))throw Error(pe(40));return e._reactRootContainer?(Ea(function(){sd(null,null,e,!1,function(){e._reactRootContainer=null,e[xr]=null})}),!0):!1};_o.unstable_batchedUpdates=Ef;_o.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!id(n))throw Error(pe(200));if(e==null||e._reactInternals===void 0)throw Error(pe(38));return sd(e,t,n,!1,o)};_o.version="18.3.1-next-f1338f8080-20240426"});var ld=dr(($3,ty)=>{"use strict";function ey(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ey)}catch(e){console.error(e)}}ey(),ty.exports=J_()});var oy=dr(Rf=>{"use strict";var ny=ld();Rf.createRoot=ny.createRoot,Rf.hydrateRoot=ny.hydrateRoot;var I3});var ay=dr(cd=>{"use strict";var zw=No(),Fw=Symbol.for("react.element"),Hw=Symbol.for("react.fragment"),Ww=Object.prototype.hasOwnProperty,jw=zw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uw={key:!0,ref:!0,__self:!0,__source:!0};function ry(e,t,n){var o,r={},a=null,i=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(o in t)Ww.call(t,o)&&!Uw.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)r[o]===void 0&&(r[o]=t[o]);return{$$typeof:Fw,type:e,key:a,ref:i,props:r,_owner:jw.current}}cd.Fragment=Hw;cd.jsx=ry;cd.jsxs=ry});var Nn=dr((R3,iy)=>{"use strict";iy.exports=ay()});var a3={};sv(a3,{callbackTransport:()=>A1,clipboardTransport:()=>Ld,consoleTransport:()=>D1,createAnnotateKit:()=>Wd,createDemoKit:()=>r3});var _n=e=>2147483500+(e-99990),Gi={canvas:_n(99996),markers:_n(99998),toolbar:_n(1e5),tooltip:_n(100001)},Sn={popup:_n(100003),hoverLabel:_n(100004),switcher:_n(100005),pickerScrim:_n(100008),pickerHighlight:_n(100010),pickerLabel:_n(100011),wireframe:_n(100020),inspector:_n(100050),history:_n(100060),deviceFrame:_n(100080)};var Zi=null,Ll="dark";function nu(e){e==="auto"?Ll=typeof window<"u"&&window.matchMedia?.("(prefers-color-scheme: light)").matches?"light":"dark":(e==="light"||e==="dark")&&(Ll=e),Zi=Ll}function Po(e){let t=e&&typeof e.closest=="function"&&e.closest("[data-agentation-theme]")||(typeof document<"u"?document.querySelector("[data-agentation-theme]"):null),n=t&&t.getAttribute("data-agentation-theme");if(n==="dark"||n==="light")return Zi=n,n;if(Zi)return Zi;try{let o=window.localStorage.getItem("feedback-toolbar-theme");if(o==="dark"||o==="light")return o}catch{}return Ll}var tu="adk:theme-user",cv="feedback-toolbar-theme";function ou(){try{let e=window.localStorage.getItem(tu);return e==="light"||e==="dark"?e:null}catch{return null}}function ru(e){try{e==="light"||e==="dark"?window.localStorage.setItem(tu,e):window.localStorage.removeItem(tu)}catch{}}function au(e){try{window.localStorage.setItem(cv,e)}catch{}Zi=e}function dv(e){let t=/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/.exec(e||"");if(!t||t[4]!==void 0&&Number(t[4])===0)return null;let[n=0,o=0,r=0]=[t[1],t[2],t[3]].map(a=>Number(a)/255);return .2126*n+.7152*o+.0722*r}function Tl(){if(typeof document>"u")return"dark";let e=[document.documentElement,document.body].filter(Boolean);for(let t of e){for(let o of["data-theme","data-color-scheme","data-mode","data-bs-theme","data-color-mode"]){let r=(t.getAttribute(o)||"").toLowerCase();if(/dark/.test(r))return"dark";if(/light/.test(r))return"light"}let n=(typeof t.className=="string"?t.className:"").toLowerCase();if(/(^|\s)(dark|theme-dark|dark-mode)(\s|$)/.test(n))return"dark";if(/(^|\s)(light|theme-light|light-mode)(\s|$)/.test(n))return"light"}for(let t of e){let n=getComputedStyle(t).colorScheme||"";if(/^dark$/.test(n.trim()))return"dark";if(/^light$/.test(n.trim()))return"light"}for(let t of e.slice().reverse()){let n=dv(getComputedStyle(t).backgroundColor);if(n!==null)return n<.45?"dark":"light"}return window.matchMedia?.("(prefers-color-scheme: dark)").matches?"dark":"light"}function Kh(e){if(typeof document>"u")return()=>{};let t=Tl(),n=()=>{let a=Tl();a!==t&&(t=a,e(a))},o=new MutationObserver(n);for(let a of[document.documentElement,document.body].filter(Boolean))o.observe(a,{attributes:!0,attributeFilter:["class","style","data-theme","data-color-scheme","data-mode","data-bs-theme","data-color-mode"]});let r=window.matchMedia?.("(prefers-color-scheme: dark)");return r?.addEventListener?.("change",n),()=>{o.disconnect(),r?.removeEventListener?.("change",n)}}var uv={start:{en:"Start feedback mode",fr:"Annoter le produit"},stop:{en:"Stop feedback mode",fr:"Terminer l\u2019annotation"},design:{en:"Edit the design",fr:"Retoucher le design"},device:{en:"Change the page width",fr:"Changer la largeur de page"},close:{en:"Close",fr:"Fermer"},deviceFrameBlocked:{en:"This site refuses to open in a frame \u2014 showing the narrowed page instead.",fr:"Ce site refuse de s\u2019afficher dans un cadre \u2014 page r\xE9tr\xE9cie \xE0 la place."},designShowOriginal:{en:"Show the original",fr:"Voir l\u2019original"},designShowEdit:{en:"Show the change",fr:"Voir les retouches"},designHiddenBadge:{en:"Original shown",fr:"Original affich\xE9"},designExit:{en:"Exit design mode",fr:"Quitter le mode design"},hideMarkers:{en:"Hide markers",fr:"Masquer les rep\xE8res"},showMarkers:{en:"Show markers",fr:"Afficher les rep\xE8res"},toolbarLabel:{en:"Feedback tools",fr:"Outils d\u2019annotation"},pauseAnimations:{en:"Pause animations",fr:"Suspendre les animations"},resumeAnimations:{en:"Resume animations",fr:"Reprendre les animations"},layoutMode:{en:"Layout mode",fr:"Mode mise en page"},layoutExit:{en:"Exit layout mode",fr:"Quitter la mise en page"},settings:{en:"Settings",fr:"R\xE9glages"},webhookPlaceholder:{en:"Optional \u2014 https://your-service.example/hook",fr:"Facultatif \u2014 https://votre-service.exemple/hook"},copy:{en:"Copy feedback",fr:"Copier les retours"},copied:{en:"Feedback copied",fr:"Retours copi\xE9s"},send:{en:"Send annotations",fr:"Envoyer les retours"},sending:{en:"Sending\u2026",fr:"Envoi\u2026"},sent:{en:"Sent",fr:"Envoy\xE9"},sendFailed:{en:"Could not send. Check your connection and try again.",fr:"Envoi impossible. V\xE9rifiez votre connexion, puis r\xE9essayez."},clear:{en:"Clear all",fr:"Tout effacer"},theme:{en:"Theme",fr:"Th\xE8me"},cancel:{en:"Cancel",fr:"Annuler"},save:{en:"Save",fr:"Enregistrer"},delete:{en:"Delete",fr:"Supprimer"},placeholder:{en:"What should change?",fr:"Qu\u2019est-ce qui doit changer ?"},commentPlaceholder:{en:"Add your comment here.",fr:"Ajoutez votre commentaire ici."},elHeading:{en:"Heading",fr:"Titre"},elText:{en:"Text",fr:"Texte"},elButton:{en:"Button",fr:"Bouton"},elLink:{en:"Link",fr:"Lien"},elField:{en:"Field",fr:"Champ"},elImage:{en:"Image",fr:"Image"},elListItem:{en:"List item",fr:"\xC9l\xE9ment de liste"},elLabel:{en:"Label",fr:"Libell\xE9"},elNav:{en:"Navigation",fr:"Navigation"},elSection:{en:"Section",fr:"Section"},elElement:{en:"Element",fr:"\xC9l\xE9ment"},nothingToSend:{en:"Nothing to send yet.",fr:"Aucun retour \xE0 envoyer."},photograph:{en:"Photograph this element",fr:"Prendre une photo de cet \xE9l\xE9ment"},removePhoto:{en:"Remove the photo",fr:"Retirer la photo"},viewPhoto:{en:"View the photo",fr:"Voir la photo"},captureBusy:{en:"Taking the screenshot\u2026",fr:"Capture en cours\u2026"},captureDone:{en:"Screenshot added to your comment.",fr:"Capture ajout\xE9e \xE0 votre commentaire."},captureSaved:{en:"Screenshot saved as a file \u2014 the brief tells your agent where to open it.",fr:"Capture enregistr\xE9e dans un fichier \u2014 le brief indique \xE0 votre agent o\xF9 l\u2019ouvrir."},captureNotSaved:{en:"Screenshot added, but it could not be saved as a file. Your agent will only see it if you paste it.",fr:"Capture ajout\xE9e, mais impossible de l\u2019enregistrer dans un fichier. Votre agent ne la verra que si vous la collez."},copyImage:{en:"Copy image",fr:"Copier l\u2019image"},imageCopied:{en:"Image copied \u2014 paste it into your agent\u2019s conversation.",fr:"Image copi\xE9e \u2014 collez-la dans la conversation avec votre agent."},imageCopyFailed:{en:"This browser would not copy the image. Use Download instead.",fr:"Ce navigateur refuse de copier l\u2019image. Utilisez T\xE9l\xE9charger."},downloadImage:{en:"Download",fr:"T\xE9l\xE9charger"},captureSavedAt:{en:"Saved for your agent at",fr:"Enregistr\xE9e pour votre agent dans"},captureCancelled:{en:"Screenshot cancelled. Click the camera to try again.",fr:"Capture annul\xE9e. Cliquez sur l\u2019appareil photo pour r\xE9essayer."},captureUnavailable:{en:"Screenshots are unavailable in this browser. Try a desktop browser.",fr:"Capture indisponible dans ce navigateur. Essayez depuis un navigateur sur ordinateur."},captureFailed:{en:"Could not take the screenshot. Click the camera to try again.",fr:"Capture impossible. Cliquez sur l\u2019appareil photo pour r\xE9essayer."},copyFailed:{en:"Could not copy. Allow clipboard access, then try again.",fr:"Copie impossible. Autorisez l\u2019acc\xE8s au presse-papiers, puis r\xE9essayez."},historyTitle:{en:"Your feedback",fr:"Vos retours"},historyHint:{en:"Select one to find it on the page.",fr:"Choisissez un retour pour le retrouver sur la page."},historyEmptyTitle:{en:"No feedback yet",fr:"Aucun retour pour l\u2019instant"},historyEmptyBody:{en:"Annotate an element or restyle a component: it will be listed here before you send.",fr:"Annotez un \xE9l\xE9ment ou retouchez son design : il s\u2019affichera ici avant l\u2019envoi."},historyRemove:{en:"Remove this feedback",fr:"Supprimer ce retour"},historyReveal:{en:"Find this feedback on the page",fr:"Voir ce retour sur la page"},captureTabRequired:{en:"Choose this browser tab, rather than a window or screen.",fr:"Choisissez cet onglet du navigateur, plut\xF4t qu\u2019une fen\xEAtre ou un \xE9cran."},kindFeature:{en:"Improvement",fr:"\xC9volution"},kindBug:{en:"Fix",fr:"Correctif"},kindDesign:{en:"Design",fr:"Design"},designAdded:{en:"Tweaks added to your feedback.",fr:"Retouches ajout\xE9es \xE0 vos retours."},designEmpty:{en:"No tweaks yet.",fr:"Aucune retouche pour l\u2019instant."},designDevHost:{en:"Design mode requires a dev server (localhost).",fr:"Le mode design demande un serveur de dev (localhost)."},designTitle:{en:"Design \u2014 {n} tweak(s)",fr:"Design \u2014 {n} retouche(s)"},multiSelect:{en:"{n} elements",fr:"{n} \xE9l\xE9ments"},wireframe:{en:"Wireframe mode",fr:"Mode maquette"},wireframeComponent:{en:"Wireframe New Component",fr:"Maquette d\u2019un composant"},wireframePick:{en:"Pick the component to rearrange.",fr:"Choisissez le composant \xE0 r\xE9agencer."},wireframeAdded:{en:"Rearrangement added to your feedback.",fr:"R\xE9agencement ajout\xE9 \xE0 vos retours."},wireframeEmpty:{en:"Nothing moved yet.",fr:"Rien n\u2019a encore boug\xE9."},wireframeNoTarget:{en:"Click an element on the page first.",fr:"Cliquez d\u2019abord sur un \xE9l\xE9ment de la page."},itemGone:{en:"That element is no longer on the page.",fr:"Cet \xE9l\xE9ment n\u2019est plus sur la page."},feedbackTitle:{en:"Page feedback",fr:"Retours produit"},noComment:{en:"(no comment)",fr:"(sans commentaire)"}};function Qh(e){return e==="fr"||e==="en"?e:e==="auto"&&(typeof navigator<"u"&&navigator.language||"").toLowerCase().startsWith("fr")?"fr":"en"}function Ji(e,t,n){let o=uv[t],r=o[e]??o.en;if(n)for(let[a,i]of Object.entries(n))r=r.split(`{${a}}`).join(String(i));return r}function ur(e,t){return typeof e=="string"?e:e[t]??e.en??e.fr??""}function Gh(e){return(t,n)=>Ji(e(),t,n)}function Zh(e){if(typeof e!="string")return null;let t=e.trim().toLowerCase();return/^#(?:[\da-f]{3}|[\da-f]{4}|[\da-f]{6}|[\da-f]{8})$/.test(t)?t:null}function iu(e){if(!e||typeof e!="object")return null;let t=e,n=Zh(t.from),o=Zh(t.to);if(!n||!o)return null;let r=typeof t.angle=="number"&&Number.isFinite(t.angle)?(t.angle%360+360)%360:135;return{from:n,to:o,angle:r}}function su(e){let t=e*Math.PI/180,n=Math.sin(t),o=-Math.cos(t),r=Math.abs(n)+Math.abs(o),a=i=>String(Math.round(i*1e6)/1e6);return{x1:a((1-n*r)/2),y1:a((1-o*r)/2),x2:a((1+n*r)/2),y2:a((1+o*r)/2)}}function Jh(e,t){let n=iu(t),o="var(--adk-accent, #0a84ff)",r={"--adk-brand-from":n?.from??`color-mix(in srgb, ${o} 55%, #ffffff)`,"--adk-brand-to":n?.to??o,"--adk-brand-ink-from":n?.from??`color-mix(in srgb, ${o} 45%, #ffffff)`,"--adk-brand-angle":`${n?.angle??135}deg`,"--adk-brand-gradient":`linear-gradient(var(--adk-brand-angle), var(--adk-brand-from) 0%, var(--adk-brand-to) ${n?100:68}%)`,"--adk-brand-custom-from":n?.from??"","--adk-brand-custom-to":n?.to??""},a=Object.keys(r).map(i=>[i,e.getPropertyValue(i),e.getPropertyPriority(i)]);for(let[i,s]of Object.entries(r))s?e.setProperty(i,s):e.removeProperty(i);return()=>{for(let[i,s,l]of a)e.getPropertyValue(i)===r[i]&&(s?e.setProperty(i,s,l):e.removeProperty(i))}}var pv=`
:root, body, :host, [data-adk-theme="light"] {
  --adk-font: system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, sans-serif;
  --adk-fs-title: 14px;
  --adk-fs-body: 13px;
  --adk-fs-control: 12px;
  --adk-fs-meta: 11px;
  --adk-fs-micro: 10px;
  --adk-lh: 1.4;
  --adk-lh-tight: 1.25;
  --adk-tracking: -0.15px;
  --adk-tracking-caps: 0.3px;
  --adk-tracking-section: 0.08em;
  --adk-fw-regular: 400;
  --adk-fw-medium: 500;
  --adk-fw-strong: 600;
  --adk-fw-chip: 700;

  --adk-space-1: 4px;
  --adk-space-2: 8px;
  --adk-space-3: 12px;
  --adk-space-4: 16px;

  --adk-radius-panel: 16px;
  --adk-radius-card: 13px;
  --adk-radius-control: 8px;
  --adk-radius-inner: 6px;
  --adk-radius-small: 4px;
  --adk-radius-pill: 9999px;

  --adk-control-h: 24px;
  --adk-icon-btn: 28px;
  --adk-chip-h: 20px;
  --adk-touch: 44px;

  --adk-ease: cubic-bezier(0.23, 1, 0.32, 1);
  --adk-fast: 140ms;
  --adk-medium: 200ms;

  --adk-ui-accent: var(--adk-accent, var(--accent, #0a84ff));
  --adk-on-accent: #ffffff;
  /* Behind white text. The raw accent is a marker colour, not a text ground:
     #0a84ff under 12px white measures 3.6:1. A step towards black clears
     4.5:1 for the blues and greens the kit ships with. */
  --adk-accent-fill: color-mix(in srgb, var(--adk-ui-accent) 82%, #000000);
  --adk-accent-gradient: var(--adk-brand-gradient, linear-gradient(135deg, color-mix(in srgb, var(--adk-ui-accent) 55%, #ffffff), var(--adk-ui-accent) 68%));

  --adk-bg: #ffffff;
  --adk-ink: rgba(0, 0, 0, 0.88);
  --adk-ink-dim: rgba(0, 0, 0, 0.64);
  --adk-ink-faint: rgba(0, 0, 0, 0.55);
  --adk-field: #f1f1f1;
  --adk-field-hi: #e8e8e8;
  --adk-inset: #eeeeee;
  --adk-thumb: #ffffff;
  --adk-hover: rgba(0, 0, 0, 0.05);
  --adk-line: rgba(0, 0, 0, 0.08);
  --adk-line-strong: rgba(0, 0, 0, 0.13);
  --adk-accent-ink: color-mix(in srgb, var(--adk-ui-accent) 74%, #000000);
  /* Text links. Measured against the panel (#fff here, #1a1a1a below), for every preset accent and dark brand colours: >= 4.5:1. */
  --adk-link: color-mix(in srgb, var(--adk-ui-accent) 40%, #000000);
  --adk-accent-tint: color-mix(in srgb, var(--adk-ui-accent) 11%, #ffffff);
  --adk-danger: #c5221f;
  --adk-danger-bg: rgba(217, 48, 37, 0.1);
  --adk-success: #0f7c3e;
  --adk-warn: #9a6412;
  --adk-scrim: rgba(238, 238, 240, 0.96);
  --adk-switch-off: #cdcdcd;
  --adk-ink-placeholder: rgba(0, 0, 0, 0.4);
  --adk-disabled: #d9d9d9;
  --adk-field-focus: #ffffff;
  --adk-scrim-strong: rgba(10, 10, 12, 0.72);
  --adk-shadow-panel: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
  --adk-shadow-thumb: 0 0 0 0.5px rgba(0, 0, 0, 0.07), 0 1px 2px rgba(0, 0, 0, 0.1);
  --adk-shadow-hairline: inset 0 0 0 1px rgba(0, 0, 0, 0.06);
  --adk-shadow-device: 0 0 0 1px rgba(0, 0, 0, 0.12), 0 30px 80px rgba(0, 0, 0, 0.35);
  /* The comment card, the pins and the hover label: FigJam's three layers. */
  --adk-shadow-card: 0 0 0.5px rgba(0, 0, 0, 0.18), 0 3px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);
  --adk-shadow-lightbox: 0 24px 64px rgba(0, 0, 0, 0.5);
  /* The small raised dot: the count badge's lift, the design pin's sparkle. */
  --adk-shadow-pip: 0 1px 3px rgba(0, 0, 0, 0.22);
}
:host([data-theme="dark"]), [data-agentation-theme="dark"], [data-adk-theme="dark"] {
  --adk-bg: #1a1a1a;
  --adk-ink: #ffffff;
  --adk-ink-dim: rgba(255, 255, 255, 0.72);
  --adk-ink-faint: rgba(255, 255, 255, 0.55);
  --adk-field: #2a2a2a;
  --adk-field-hi: #333333;
  --adk-inset: #222222;
  --adk-thumb: #3d3d3d;
  --adk-hover: rgba(255, 255, 255, 0.06);
  --adk-line: rgba(255, 255, 255, 0.09);
  --adk-line-strong: rgba(255, 255, 255, 0.15);
  --adk-accent-ink: color-mix(in srgb, var(--adk-ui-accent) 55%, #ffffff);
  --adk-link: color-mix(in srgb, var(--adk-ui-accent) 30%, #ffffff);
  --adk-accent-tint: color-mix(in srgb, var(--adk-ui-accent) 22%, #1a1a1a);
  --adk-danger: #ff8a80;
  --adk-danger-bg: rgba(255, 138, 128, 0.14);
  --adk-success: #3ddc84;
  --adk-warn: #e9b44c;
  --adk-scrim: rgba(16, 16, 18, 0.92);
  --adk-switch-off: #484848;
  --adk-ink-placeholder: rgba(255, 255, 255, 0.4);
  --adk-disabled: #3a3a3c;
  --adk-field-focus: rgba(255, 255, 255, 0.06);
  --adk-shadow-panel: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  --adk-shadow-thumb: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px rgba(0, 0, 0, 0.4);
  --adk-shadow-hairline: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
  --adk-shadow-card: 0 0 0.5px rgba(255, 255, 255, 0.22), 0 3px 8px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.3);
}
`,fv=`
:host {
  all: initial;
  font-family: var(--adk-font); font-size: var(--adk-fs-body); line-height: var(--adk-lh);
  letter-spacing: var(--adk-tracking); color: var(--adk-ink);
  font-variant-numeric: tabular-nums; -webkit-font-smoothing: antialiased;
}
:host *, :host *::before, :host *::after { box-sizing: border-box; }
:host * { margin: 0; padding: 0; font: inherit; color: inherit; letter-spacing: inherit; }
:host button { background: none; border: 0; cursor: pointer; -webkit-appearance: none; appearance: none; }
:host :focus-visible { outline: 2px solid var(--adk-ui-accent); outline-offset: 1px; }
`,hv=`
.adk-type {
  font-family: var(--adk-font); font-size: var(--adk-fs-body); line-height: var(--adk-lh);
  letter-spacing: var(--adk-tracking); color: var(--adk-ink);
  font-variant-numeric: tabular-nums; -webkit-font-smoothing: antialiased;
}
.adk-panel {
  background: var(--adk-bg); color: var(--adk-ink);
  border-radius: var(--adk-radius-panel); box-shadow: var(--adk-shadow-panel);
}
.adk-head { border-bottom: 1px solid var(--adk-line); }
.adk-title {
  font-size: var(--adk-fs-title); font-weight: var(--adk-fw-strong); line-height: var(--adk-lh-tight);
  letter-spacing: -0.14px; color: var(--adk-ink);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.adk-subtitle {
  font-size: var(--adk-fs-meta); font-weight: var(--adk-fw-regular); line-height: var(--adk-lh);
  letter-spacing: -0.1px; color: var(--adk-ink-faint);
}
.adk-section-title {
  font-size: var(--adk-fs-meta); font-weight: var(--adk-fw-strong); line-height: 1;
  letter-spacing: var(--adk-tracking-section); text-transform: uppercase; color: var(--adk-ink-dim);
}
.adk-meta { font-size: var(--adk-fs-meta); line-height: var(--adk-lh-tight); color: var(--adk-ink-dim); }
.adk-count {
  display: inline-flex; align-items: center; justify-content: center;
  min-width: 16px; height: 16px; padding: 0 4px; flex: 0 0 auto;
  border-radius: var(--adk-radius-pill);
  font-size: var(--adk-fs-micro); font-weight: var(--adk-fw-strong); line-height: 1;
  font-variant-numeric: tabular-nums; letter-spacing: 0;
  color: var(--adk-ink-dim); background: var(--adk-field);
}
.adk-chip {
  --adk-chip-color: var(--adk-ui-accent);
  display: inline-block; box-sizing: border-box; height: var(--adk-chip-h); padding: 0 9px;
  border-radius: var(--adk-radius-pill);
  font-size: var(--adk-fs-micro); font-weight: var(--adk-fw-chip); line-height: var(--adk-chip-h);
  letter-spacing: var(--adk-tracking-caps); text-transform: uppercase;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  color: color-mix(in srgb, var(--adk-chip-color) 74%, #000000);
  background: color-mix(in srgb, var(--adk-chip-color) 14%, transparent);
}
:host([data-theme="dark"]) .adk-chip, [data-agentation-theme="dark"] .adk-chip, [data-adk-theme="dark"] .adk-chip {
  color: color-mix(in srgb, var(--adk-chip-color) 55%, #ffffff);
  background: color-mix(in srgb, var(--adk-chip-color) 22%, transparent);
}
.adk-seg {
  position: relative; display: grid; grid-auto-flow: column; grid-auto-columns: minmax(0, 1fr);
  padding: 2px; border-radius: var(--adk-radius-control); background: var(--adk-field);
}
.adk-seg-btn {
  position: relative; z-index: 1; min-width: 0; height: var(--adk-control-h); padding: 0 6px;
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: var(--adk-radius-inner);
  font-size: var(--adk-fs-control); font-weight: var(--adk-fw-medium); line-height: 1;
  color: var(--adk-ink-faint); white-space: nowrap; overflow: hidden;
  transition: color var(--adk-medium) var(--adk-ease), background-color var(--adk-medium) var(--adk-ease);
}
.adk-seg-btn:hover { color: var(--adk-ink-dim); }
.adk-seg-btn.is-on, .adk-seg-btn[aria-pressed="true"], .adk-seg-btn[aria-selected="true"] { color: var(--adk-ink); }
.adk-row { border-radius: 10px; transition: background-color var(--adk-fast) ease; }
.adk-row:hover, .adk-row:focus-within { background: var(--adk-hover); }
.adk-empty { font-size: var(--adk-fs-control); line-height: 1.5; color: var(--adk-ink-faint); }
.adk-empty-title { font-size: var(--adk-fs-body); font-weight: var(--adk-fw-strong); line-height: var(--adk-lh-tight); color: var(--adk-ink); }
.adk-icon-btn {
  display: inline-flex; align-items: center; justify-content: center; flex: 0 0 auto;
  width: var(--adk-icon-btn); height: var(--adk-icon-btn); border-radius: var(--adk-radius-control);
  color: var(--adk-ink-faint);
  transition: background-color var(--adk-fast) ease, color var(--adk-fast) ease, opacity var(--adk-fast) ease;
}
.adk-icon-btn:hover { background: var(--adk-field); color: var(--adk-ink); }
@media (pointer: coarse) { .adk-icon-btn { min-width: var(--adk-touch); min-height: var(--adk-touch); } }
@media (prefers-reduced-motion: reduce) { .adk-seg-btn, .adk-row, .adk-icon-btn { transition: none; } }
`,lu=`@layer adk-base {
${pv}
${fv}
${hv}
}
`,em="adk-kit-base",es;function mv(){if(es!==void 0)return es;es=null;try{if(typeof CSSStyleSheet=="function"&&"replaceSync"in CSSStyleSheet.prototype){let e=new CSSStyleSheet;e.replaceSync(lu),es=e}}catch{}return es}function pr(e=document){if(e.getElementById(em))return;let t=e.createElement("style");t.id=em,t.textContent=lu,(e.head??e.documentElement).appendChild(t)}function Ka(e){pr(e.ownerDocument??document);let t=mv();if(t&&Array.isArray(e.adoptedStyleSheets))try{e.adoptedStyleSheets.includes(t)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,t]);return}catch{}if(e.querySelector("style[data-adk-kit-base]"))return;let n=document.createElement("style");n.setAttribute("data-adk-kit-base",""),n.textContent=lu,e.appendChild(n)}var $l=["[data-agentation-root]","[data-agentation-toolbar]","[data-feedback-toolbar]","[data-annotation-popup]","[data-annotation-marker]","[data-adk-root]","[data-adk-toast]","[data-adk-devices]","[data-adk-history]"];function ts(e){return e instanceof Element?$l.some(t=>e.closest(t))?!0:typeof e.className=="string"&&e.className.includes("styles-module"):!1}function qt(e,t={}){document.querySelector("[data-adk-toast]")?.remove();let n=document.createElement("div");n.setAttribute("data-adk-toast",""),n.setAttribute("role",t.tone==="error"?"alert":"status"),n.setAttribute("aria-live",t.tone==="error"?"assertive":"polite"),n.setAttribute("aria-atomic","true"),n.textContent=e,n.setAttribute("data-adk-theme",Po(null)),pr(),n.style.cssText=["position:fixed","left:50%","bottom:84px","transform:translateX(-50%)","padding:8px 14px","border-radius:calc(var(--adk-radius-control) + 4px)","box-sizing:border-box","width:max-content","max-width:calc(100vw - 32px)","overflow-wrap:anywhere","text-align:center","background:var(--adk-bg)","color:var(--adk-ink)","font:var(--adk-fw-medium) var(--adk-fs-control)/var(--adk-lh) var(--adk-font)","box-shadow:var(--adk-shadow-panel)","z-index:2147483646","pointer-events:none"].join(";"),document.body.appendChild(n),window.setTimeout(()=>n.remove(),t.duration??(t.tone==="error"?6500:3200))}function nm(e){let{popup:t,kinds:n,locale:o,accent:r,onChange:a}=e,i=t.querySelector("[data-adk-kinds]");if(i)return i.querySelectorAll("[data-adk-kind]").forEach(v=>{let m=n.find(E=>E.id===v.dataset.adkKind),g=m?ur(m.label,o):v.textContent;v.textContent!==g&&(v.textContent=g),g&&(v.title=g)}),i;let s=t.hasAttribute("data-adk-card"),l=s?t.getAttribute("data-adk-theme")!=="dark":t.className.includes("light");pr();let c=document.createElement("div");c.setAttribute("data-adk-kinds",""),c.setAttribute("data-adk-theme",l?"light":"dark"),c.style.cssText=["display:inline-flex","gap:2px","padding:2px",s?"margin:0":"margin:0 0 0.5rem","border-radius:var(--adk-radius-pill)","background:var(--adk-hover)","border:1px solid var(--adk-line-strong)"].join(";");let u=new Map,p=e.current;function d(){u.forEach((v,m)=>{let g=m===p;v.style.background=g?s?"color-mix(in srgb, var(--adk-ui-accent) 14%, transparent)":r:"transparent",v.style.color=g?s?"var(--adk-accent-ink)":"var(--adk-on-accent)":"var(--adk-ink-dim)",v.setAttribute("aria-pressed",String(g))})}for(let v of n){let m=document.createElement("button");m.type="button",m.dataset.adkKind=v.id,m.textContent=ur(v.label,o),m.title=m.textContent,m.style.cssText=["height:var(--adk-chip-h)","padding:0 9px","border:0","border-radius:var(--adk-radius-pill)","font:var(--adk-fw-chip) var(--adk-fs-micro)/var(--adk-chip-h) var(--adk-font)","letter-spacing:var(--adk-tracking-caps)","text-transform:uppercase","cursor:pointer","transition:background-color var(--adk-fast) ease, color var(--adk-fast) ease"].join(";"),m.addEventListener("click",g=>{g.preventDefault(),g.stopPropagation(),p=v.id,d(),a(v.id)}),u.set(v.id,m),c.appendChild(m)}d();let y=t.querySelector("[data-adk-tools]"),_=t.querySelector('[class*="header"]'),C=t.querySelector('textarea, input[type="text"]');return y?y.appendChild(c):_&&_.parentElement===t?_.insertAdjacentElement("afterend",c):C?.parentElement?C.parentElement.insertBefore(c,C):t.insertBefore(c,t.firstChild),c}function cu(e){let{toolbar:t,key:n}=e,o=t.querySelector(`[data-adk-tool="${n}"]`);if(o){if(!e.owner||o.dataset.adkOwner===e.owner)return o.title=e.title,o.setAttribute("aria-label",e.title),o;o.remove()}let a=Array.from(t.querySelectorAll("button")).find(y=>!y.hasAttribute("data-adk-tool"));if(!a)return null;let i=a.cloneNode(!1);i.dataset.adkTool=n,e.owner&&(i.dataset.adkOwner=e.owner),i.type="button",i.title=e.title,i.setAttribute("aria-label",e.title),e.render(i),i.addEventListener("click",y=>{y.preventDefault(),y.stopPropagation(),e.onClick()});let s=a.parentElement,l=i;if(s&&s!==t){let y=s.cloneNode(!1);y.appendChild(i),l=y}let c=Array.from((s&&s!==t?s.parentElement:t)?.children??[]),u=Math.max(0,c.length-(e.fromEnd??2)),p=c[u]??null;return(s&&s!==t?s.parentElement:t).insertBefore(l,p),i}function om(e){return Po(e??null)}function rm(e){let t=document.createElement("div");t.setAttribute("data-adk-hover-label",""),t.hidden=!0;let n=document.createElement("i");n.style.background=e.accent;let o=document.createElement("span");t.append(n,o),document.body.appendChild(t);let r=0,a=null,i=null,s=()=>{t.hidden=!0,i=null,a=null,r&&(window.cancelAnimationFrame(r),r=0)},l=()=>{if(r=0,!a||!e.active())return s();let p=document.querySelector('[class*="hoverHighlight"]');if(!p)return s();let d=document.elementFromPoint(a.x,a.y);if(!(d instanceof HTMLElement)||e.ignore(d))return s();if(d!==i){i=d;let m=getComputedStyle(d);p.style.borderRadius=m.borderRadius;let g=e.describe(d);o.replaceChildren();let E=document.createElement("b");E.textContent=g.kind,o.appendChild(E),g.text&&o.append(` \xB7 \u201C${g.text}\u201D`)}t.setAttribute("data-adk-theme",om(p));let y=p.getBoundingClientRect();t.hidden=!1;let _=t.offsetWidth,C=Math.max(8,Math.min(y.left,window.innerWidth-_-8)),v=y.top-30;t.style.left=`${Math.round(C)}px`,t.style.top=`${Math.round(v>=8?v:Math.min(y.bottom+6,window.innerHeight-32))}px`},c=p=>{a={x:p.clientX,y:p.clientY},r||(r=window.requestAnimationFrame(l))},u=()=>s();return document.addEventListener("mousemove",c,{passive:!0,capture:!0}),document.addEventListener("mousedown",u,!0),document.addEventListener("mouseleave",u),window.addEventListener("scroll",u,{passive:!0,capture:!0}),()=>{document.removeEventListener("mousemove",c,{capture:!0}),document.removeEventListener("mousedown",u,!0),document.removeEventListener("mouseleave",u),window.removeEventListener("scroll",u,{capture:!0}),r&&window.cancelAnimationFrame(r),t.remove()}}function am(e,t){let r=e.getBoundingClientRect(),a=e.offsetWidth,i=e.offsetHeight,s=window.innerWidth,l=window.innerHeight,c=_=>Math.max(8+a/2,Math.min(s-8-a/2,_)),u=_=>Math.max(8,Math.min(l-8-i,_));if(!t){yv(e);return}let p=r.left+r.width/2,d=[];t.bottom+12+i<=l-8&&d.push({cx:c(p),top:t.bottom+12}),t.top-12-i>=8&&d.push({cx:c(p),top:t.top-12-i}),t.right+12+a<=s-8&&d.push({cx:t.right+12+a/2,top:u(t.top)}),t.left-12-a>=8&&d.push({cx:t.left-12-a/2,top:u(t.top)});let y=d[0]??{cx:c(p),top:u(t.bottom+12)};e.style.bottom="auto",e.style.left=`${Math.round(y.cx)}px`,e.style.top=`${Math.round(y.top)}px`}function im(e){let{popup:t,accent:n,title:o,placeholder:r}=e;if(t.hasAttribute("data-adk-card")){let p=t.querySelector("[data-adk-title] b");p&&p.textContent!==o.kind&&(p.textContent=o.kind);let d=t.querySelector("textarea");d&&d.placeholder!==r&&(d.placeholder=r);return}t.setAttribute("data-adk-card",e.first?"first":"next"),t.setAttribute("data-adk-theme",om(t)),t.style.setProperty("--adk-accent",n);let a=document.createElement("div");a.setAttribute("data-adk-title","");let i=document.createElement("i");i.style.background=n;let s=document.createElement("span"),l=document.createElement("b");l.textContent=o.kind,s.appendChild(l),o.text&&s.append(` \xB7 \u201C${o.text}\u201D`),a.append(i,s);let c=document.createElement("div");c.setAttribute("data-adk-tools","");let u=t.querySelector("textarea");u&&(u.placeholder=r),t.insertBefore(a,t.firstChild),t.appendChild(c)}var tm=new WeakMap;function sm(e){let{popup:t,labels:n,accent:o}=e,r=t.querySelector("[data-adk-camera]");if(r){let v=tm.get(r);v&&(Object.assign(v.labels,n),v.refresh());return}getComputedStyle(t).position==="static"&&(t.style.position="relative");let a=t.hasAttribute("data-adk-card")?t.getAttribute("data-adk-theme")!=="dark":t.className.includes("light"),i=t.querySelector("[data-adk-tools]"),s=document.createElement("div");s.setAttribute("data-adk-camera",""),s.setAttribute("data-adk-theme",a?"light":"dark"),pr(),s.style.cssText=i?"display:inline-flex;align-items:center;gap:4px;pointer-events:auto":"position:absolute;top:8px;right:8px;display:inline-flex;align-items:center;gap:4px;z-index:10;pointer-events:auto";let l=document.createElement("div");l.title=n.view,l.style.cssText="width:22px;height:22px;border-radius:var(--adk-radius-inner);background-size:cover;background-position:center;border:1px solid var(--adk-line-strong);display:none;cursor:zoom-in";let c=document.createElement("button");c.type="button",c.title=n.capture,c.innerHTML=xv;let u="var(--adk-hover)",p="var(--adk-ink-faint)";c.style.cssText=`width:22px;height:22px;border:0;border-radius:var(--adk-radius-inner);background:${u};color:${p};cursor:pointer;display:inline-flex;align-items:center;justify-content:center;padding:0;transition:background-color var(--adk-fast) ease, color var(--adk-fast) ease`;let d=null,y=!1,_=()=>{c.title=y?n.busy??n.capture:d?n.remove:n.capture,c.setAttribute("aria-label",c.title),l.title=n.view};tm.set(s,{labels:n,refresh:_}),_();let C=()=>{d=null,c.style.background=u,c.style.color=p,_(),l.style.display="none",l.style.backgroundImage="",e.onClear()};c.addEventListener("click",async v=>{if(v.preventDefault(),v.stopPropagation(),y)return;if(d){C();return}c.style.background=o,c.style.color="var(--adk-on-accent)",y=!0,c.disabled=!0,c.setAttribute("aria-busy","true"),_();let m=null;try{m=await e.onCapture()}finally{y=!1,c.disabled=!1,c.removeAttribute("aria-busy"),_()}if(t.isConnected){if(!m){C();return}d=m,_(),l.style.backgroundImage=`url("${m}")`,l.style.display="block"}}),l.addEventListener("click",v=>{v.preventDefault(),v.stopPropagation(),d&&e.onView(d)}),s.append(l,c),(t.querySelector("[data-adk-tools]")??t).appendChild(s)}function Il(e,t){let n=i=>{i instanceof HTMLElement&&(i.hasAttribute(t)||i.setAttribute(t,""),i.hasAttribute("data-feedback-toolbar")||i.setAttribute("data-feedback-toolbar",""))},o=i=>{n(i),i.querySelectorAll("*").forEach(n)},r=(e instanceof ShadowRoot,e);Array.from(r.children).forEach(o);let a=new MutationObserver(i=>{for(let s of i)s.addedNodes.forEach(l=>{l instanceof HTMLElement&&o(l)})});return a.observe(r,{childList:!0,subtree:!0}),()=>a.disconnect()}function Pl(e){let t=["mousemove","mouseover","mouseout","pointermove"],n=o=>o.stopPropagation();for(let o of t)e.addEventListener(o,n);return()=>{for(let o of t)e.removeEventListener(o,n)}}function Nl(e){e.querySelectorAll("svg").forEach(t=>{t.removeAttribute("color"),t.querySelectorAll("*").forEach(n=>{let o=n.getAttribute("fill");o&&o!=="none"&&n.setAttribute("fill","currentColor");let r=n.getAttribute("stroke");r&&r!=="none"&&n.setAttribute("stroke","currentColor")})})}function lm(e){pr();let t=document.createElement("div");t.setAttribute("data-adk-lightbox",""),t.style.cssText="position:fixed;inset:0;z-index:2147483646;display:flex;align-items:center;justify-content:center;background:var(--adk-scrim-strong);cursor:zoom-out";let n=document.createElement("img");n.src=e,n.style.cssText="max-width:86%;max-height:86%;border-radius:var(--adk-radius-panel);box-shadow:var(--adk-shadow-lightbox)",t.appendChild(n);let o=()=>{t.remove(),document.removeEventListener("keydown",r,!0)},r=a=>{a.key==="Escape"&&(a.stopPropagation(),o())};t.addEventListener("click",o),document.addEventListener("keydown",r,!0),document.body.appendChild(t)}function gv(e=135){let t=document.getElementById("adk-ink-gradient");if(t){for(let[r,a]of Object.entries(su(e)))t.setAttribute(r,a);return}let n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("width","0"),n.setAttribute("height","0"),n.setAttribute("aria-hidden","true"),n.style.cssText="position:absolute;width:0;height:0;overflow:hidden;pointer-events:none",n.innerHTML='<defs><linearGradient id="adk-ink-gradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color: var(--adk-brand-ink-from, color-mix(in srgb, var(--adk-accent, #0a84ff) 45%, #ffffff))" /><stop offset="1" style="stop-color: var(--adk-brand-to, var(--adk-accent, #0a84ff))" /></linearGradient><linearGradient id="adk-ink-shimmer" gradientUnits="userSpaceOnUse" x1="-24" y1="0" x2="0" y2="0"><stop offset="0" style="stop-color: var(--adk-brand-ink-from, color-mix(in srgb, var(--adk-accent, #0a84ff) 45%, #ffffff))" /><stop offset="0.5" style="stop-color: var(--adk-brand-to, var(--adk-accent, #0a84ff))" /><stop offset="1" style="stop-color: var(--adk-brand-ink-from, color-mix(in srgb, var(--adk-accent, #0a84ff) 45%, #ffffff))" /><animate attributeName="x1" values="-24;24" dur="1.4s" repeatCount="indefinite" /><animate attributeName="x2" values="0;48" dur="1.4s" repeatCount="indefinite" /></linearGradient></defs>';let o=n.querySelector("#adk-ink-gradient");for(let[r,a]of Object.entries(su(e)))o.setAttribute(r,a);document.body.appendChild(n)}function cm(){if(document.getElementById("adk-settings-lock"))return;let e=document.createElement("style");e.id="adk-settings-lock",e.textContent=`
    [data-adk-role="settings"], [data-agentation-settings-panel] { display: none !important; }
  `,document.head.appendChild(e)}function dm(e,t){let n=e.querySelector('textarea[class*="webhookUrlInput___"]');n&&n.placeholder!==t&&(n.placeholder=t)}function um(e){let t=e.querySelector('[class*="settingsPanelContainer___"]'),n=t?.querySelector(':scope > [class*="automationsPage___"]'),o=t?.querySelector(':scope > [class*="settingsPage___"]:not([class*="automationsPage___"])');if(!t||!n||!o||t.dataset.adkFit)return;t.dataset.adkFit="1";let r=window.matchMedia?.("(prefers-reduced-motion: reduce)"),a=/slideIn___/.test(n.className),i=null;new MutationObserver(()=>{let s=/slideIn___/.test(n.className);if(s===a)return;a=s;let l=(s?o:n).offsetHeight,c=(s?n:o).offsetHeight;if(i?.cancel(),r?.matches||l===c||typeof t.animate!="function")return;t.style.overflowY="clip",i=t.animate([{height:`${l}px`},{height:`${c}px`}],{duration:200,easing:"cubic-bezier(0.32, 0.72, 0, 1)"});let u=()=>{t.style.overflowY="",i=null};i.onfinish=u,i.oncancel=u}).observe(n,{attributes:!0,attributeFilter:["class"]})}var _v=`
    @media (pointer: coarse) {
      [class*="toolbarContainer"][class*="expanded"][class][class][class] {
        height: auto !important; min-height: calc(var(--adk-touch) + 12px);
      }
      [class*="toolbarContainer"][class*="expanded"] [class*="controlButton___"][class] {
        width: var(--adk-touch); height: var(--adk-touch); flex: none;
      }
      [class*="toolbarContainer"][class*="expanded"] [class*="controlsContent___"][class] { gap: var(--adk-space-1, 4px); }
    }
    @media (pointer: coarse) and (max-width: 480px) {
      [class*="toolbarContainer"][class*="expanded"][class][class][class] {
        max-width: calc(5 * var(--adk-touch) + 4 * var(--adk-space-1, 4px) + 12px) !important;
        border-radius: var(--adk-radius-panel) !important;
      }
      [class*="toolbarContainer"][class*="expanded"] [class*="controlsContent___"][class] { flex-wrap: wrap; justify-content: center; }
      [class*="toolbarContainer"][class*="expanded"] [class*="divider___"] { display: none; }
    }
`;function pm(e="#0a84ff",t=135){if(gv(t),pr(),document.getElementById("adk-overlay-fixes"))return;let n=document.createElement("style");n.id="adk-overlay-fixes";let o=encodeURIComponent(e);n.textContent=`
    /* The pill's width is hard-coded in TWO places \u2014 the fixed wrapper (337px)
       and the pill itself per variant (297px / 337px) \u2014 so the extra control we
       add spills outside the dark background. The WRAPPER must keep its 337px:
       the overlay's drag maths assume exactly that width with the pill
       right-aligned inside it (shrinking the wrapper is what left the collapsed
       circle stuck ~300px short of the right edge, and let it slide off the
       left one). So the pill alone sizes to its contents, and the wrapper
       becomes a flex row aligned to the end: a pill wider than 337px then
       overflows to the LEFT, over the page, instead of past the viewport.
       Selectors repeat the attribute to outrank their 3-class rules. */
    [class*="toolbar___"][class][class] {
      width: 337px !important;
      display: flex !important;
      justify-content: flex-end !important;
      align-items: flex-end !important;
    }
    [class*="toolbarContainer"][class*="expanded"][class][class] {
      width: max-content !important;
      max-width: calc(100vw - 40px) !important;
    }
    ${_v}
    [data-annotation-popup] { max-height: calc(100vh - 24px); }

    /* Group selection uses the same accent as the kit's pins and cards.
       Scope the upstream green token to selection surfaces: connection and
       success indicators must retain their semantic green. */
    [data-agentation-root] :is(
      [class*="dragSelection___"],
      [class*="dragCount___"],
      [class*="selectedElementHighlight___"],
      [class*="multiSelectOutline___"],
      [class*="marker___"][class*="multiSelect___"],
      [data-annotation-popup]
    ) {
      --agentation-color-green: var(--adk-accent, ${e});
    }

    /* \u2500\u2500 Above the host's own chrome \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
       The overlay stacks itself around 100000. A page's chat bubble or
       cookie bar sits far higher, and the kit's bubble went under it. Every
       overlay surface is lifted to the top of the range, in its own order. */
    [class*="blankCanvas___"][class], [class*="hoverHighlight___"][class] { z-index: ${_n(99994)} !important; }
    [class*="overlay___"][class], [class*="rearrangeOverlay___"][class], [class*="wireframeNotice___"][class] { z-index: ${_n(99995)} !important; }
    [class*="connectorSvg___"][class], [class*="drawBox___"][class], [class*="drawCanvas___"][class],
    [class*="highlightsContainer___"][class], [class*="selectBox___"][class] { z-index: ${_n(99996)} !important; }
    [class*="dragSelection___"][class] { z-index: ${_n(99997)} !important; }
    [class*="markersLayer___"][class], [class*="fixedMarkersLayer___"][class] { z-index: ${_n(99998)} !important; }
    [class*="toolbar___"][class] { z-index: ${Gi.toolbar} !important; }
    [class*="buttonTooltip___"][class], [class*="guideLine___"][class], [class*="palette___"][class] { z-index: ${Gi.tooltip} !important; }
    [data-annotation-popup][class] { z-index: ${Sn.popup} !important; }
    [data-agentation-settings-panel] { z-index: ${Sn.popup} !important; }

    /* \u2500\u2500 Settings \u2192 "Connections & delivery" \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
       The overlay ships this page half-styled: the back button keeps the
       browser's outset border, the service title, its help icon, the
       "Auto-send" label and the switch all fight for one 220px row (and
       wrap in French), and the URL field flex-grows to the height of the
       main settings page \u2014 260px of box for one line of address. Here the
       page reads top to bottom, in the overlay's own DOM order so keyboard
       and screen reader meet things where the eye does: title, the switch
       on a row of its own (like every other switch in the panel), what the
       address is for, the address. The switch wears the kit's accent, the
       same as its feature switches. Nodes stay where the overlay put them.

       Height: the overlay lays this page over the main one at height: 100%,
       so the panel kept the main page's height and the short page sat on
       ~200px of blank. While this page is showing it takes the flow and the
       main page steps out of it, so the panel fits whichever page is shown;
       fitSettingsPanelHeight() animates the change. Offsets are unchanged
       (left: 24px + translateX(-24px) either way), so the slide stays put. */
    [data-agentation-settings-panel] [class*="automationsPage___"][class] { height: auto; padding-bottom: 4px; }
    [data-agentation-settings-panel] [class*="automationsPage___"][class*="slideIn___"][class] {
      position: relative; flex: 0 0 auto;
      width: calc(100% + 2rem); margin-inline: -1rem;
    }
    [data-agentation-settings-panel] [class*="settingsPanelContainer___"]:has(> [class*="automationsPage___"][class*="slideIn___"]) > [class*="settingsPage___"]:not([class*="automationsPage___"]) {
      position: absolute; top: 0; left: 1rem; right: 1rem; width: auto; min-width: 0;
    }
    [data-agentation-settings-panel] [class*="automationsPage___"] [class*="settingsBackButton___"][class] {
      align-self: flex-start;
      max-width: 100%; height: 28px; margin: 0 0 0 -6px; padding: 0 8px 0 4px;
      border: 0; border-radius: 8px; outline: none; box-shadow: none;
      background: transparent;
      font-size: var(--adk-fs-body); font-weight: var(--adk-fw-strong); letter-spacing: -0.1px;
      transition: background-color var(--adk-fast) ease;
    }
    [data-agentation-settings-panel] [class*="automationsPage___"] [class*="settingsBackButton___"] > span {
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    [data-agentation-settings-panel] [class*="automationsPage___"] [class*="settingsBackButton___"][class]:hover { background: var(--adk-hover); }
    [data-agentation-settings-panel] [class*="automationsPage___"] [class*="divider___"] { margin-block: 10px; flex: none; }
    [data-agentation-settings-panel] [class*="automationsPage___"] [class*="settingsSection___"] { min-width: 0; }
    [data-agentation-settings-panel] [class*="automationsPage___"] [class*="automationHeader___"][class] {
      gap: 4px; min-width: 0;
      font-size: var(--adk-fs-body); font-weight: var(--adk-fw-medium); line-height: 18px;
      overflow-wrap: anywhere;
    }
    [data-agentation-settings-panel] [class*="automationsPage___"] [class*="automationHeader___"] > [class*="tooltip___"] { flex: none; }
    [data-agentation-settings-panel] [class*="automationsPage___"] [class*="automationDescription___"][class] {
      margin: 4px 0 0; padding-bottom: 0 !important;
      font-size: var(--adk-fs-meta); font-weight: var(--adk-fw-regular); line-height: 16px;
      color: var(--adk-ink-faint);
    }
    [data-agentation-settings-panel] [class*="automationsPage___"] [class*="learnMoreLink___"][class] {
      color: var(--adk-link); font-weight: var(--adk-fw-medium);
      text-decoration-line: underline; text-decoration-style: solid; text-decoration-thickness: 1px; text-underline-offset: 2px;
    }
    [data-agentation-settings-panel] [class*="automationsPage___"] [class*="learnMoreLink___"][class]:hover { text-decoration-thickness: 2px; }

    /* The service section as one column: title, switch, description,
       address. The overlay's row wrapper steps aside (display: contents) so
       its two children can take their own lines \u2014 no reordering. */
    [data-agentation-settings-panel] [class*="automationsPage___"] [class*="settingsSectionGrow___"][class] {
      flex: none; display: flex; flex-direction: column;
    }
    [data-agentation-settings-panel] [class*="automationsPage___"] [class*="settingsSectionGrow___"] > [class*="settingsRow___"] { display: contents; }
    [data-agentation-settings-panel] [class*="automationsPage___"] [class*="autoSendContainer___"][class] {
      display: flex; align-items: center; justify-content: space-between; gap: 12px;
      min-height: 24px; margin: 8px 0 4px;
    }
    [data-agentation-settings-panel] [class*="automationsPage___"] [class*="autoSendLabel___"][class] {
      flex: 1 1 auto; min-width: 0; padding: 0;
      font-size: var(--adk-fs-body); font-weight: var(--adk-fw-regular); line-height: 18px; letter-spacing: -0.12px;
      color: var(--adk-ink-dim);
    }
    [data-agentation-settings-panel] [class*="automationsPage___"] [class*="switchContainer___"] { flex: none; }
    [data-agentation-settings-panel] [class*="automationsPage___"] [class*="switchContainer___"]:has(input:checked) {
      background-color: var(--adk-accent, var(--agentation-color-blue));
    }
    [data-agentation-settings-panel] [class*="automationsPage___"] [class*="switchContainer___"]:has(input:focus-visible),
    [data-agentation-settings-panel] [class*="automationsPage___"] [class*="settingsBackButton___"][class]:focus-visible {
      outline: 2px solid var(--adk-ui-accent); outline-offset: 2px;
    }

    /* The address: one line tall, growing only for an address long enough
       to wrap, and a URL breaks anywhere rather than overflowing. */
    [data-agentation-settings-panel] [class*="automationsPage___"] textarea[class*="webhookUrlInput___"][class] {
      flex: none; height: 36px; min-height: 36px; max-height: 88px;
      margin-top: 10px; padding: 9px 10px;
      border-radius: 8px;
      font-size: var(--adk-fs-control); line-height: 16px;
      overflow-y: auto; overflow-wrap: anywhere; word-break: break-all;
    }
    @supports (field-sizing: content) {
      [data-agentation-settings-panel] [class*="automationsPage___"] textarea[class*="webhookUrlInput___"][class] { height: auto; field-sizing: content; }
    }
    [data-agentation-settings-panel] [class*="automationsPage___"] textarea[class*="webhookUrlInput___"][class]::placeholder { color: var(--adk-ink-placeholder); }
    [data-agentation-settings-panel] [class*="automationsPage___"] textarea[class*="webhookUrlInput___"][class]:focus {
      border-color: var(--adk-ui-accent);
      background: var(--adk-field-focus);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--adk-ui-accent) 20%, transparent);
    }


    /* \u2500\u2500 Our two "out" buttons \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
       Copy and Send are where the work leaves the page, so they carry the
       kit's own mark: the icon is inked with the accent gradient (the same
       blue the inspector's \u2728 Adjust badge wears) instead of the overlay's
       flat white. The gradient lives in an SVG <defs> injected once into the
       body (see injectInkGradient); stroke url() resolves across the
       document. The second <g> in each icon is the overlay's own status ring
       and keeps its colour. Disabled buttons stay dim through their opacity. */
    [data-adk-role="copy"] > svg > g:first-child > path,
    [data-adk-role="send"] > svg > g:first-child > path {
      stroke: url(#adk-ink-gradient) !important;
    }
    /* The count badge on Send/Copy: a ring in the pill's own colour so it
       stands off the icon, and a hairline outside that so it stands off the
       pill too \u2014 on white it used to melt into the background. Same face as
       the pins. */
    [class*="buttonBadge"][class][class], [data-adk-count] {
      background-image: var(--adk-accent-gradient);
      font: var(--adk-fw-strong) var(--adk-fs-micro)/1 var(--adk-font);
      box-shadow: 0 0 0 2px var(--adk-bg), 0 0 0 3px var(--adk-line-strong), var(--adk-shadow-pip);
    }

    /* A design item's card: no kind to choose, no photo \u2014 one switch instead,
       before/after. */
    [data-annotation-popup][data-adk-design] > [data-adk-tools] > [data-adk-kinds],
    [data-annotation-popup][data-adk-design] > [data-adk-tools] > [data-adk-camera] { display: none !important; }
    [data-adk-design-toggle] {
      display: inline-flex; align-items: center; gap: 6px; height: 26px; padding: 0 10px 0 8px;
      border: 1px solid var(--adk-line-strong); border-radius: var(--adk-radius-pill); background: var(--adk-hover);
      color: var(--adk-ink-dim); cursor: pointer;
      font: var(--adk-fw-chip) var(--adk-fs-micro)/1 var(--adk-font);
      letter-spacing: var(--adk-tracking-caps); text-transform: uppercase; white-space: nowrap;
      transition: background-color var(--adk-fast) ease, color var(--adk-fast) ease;
    }
    [data-adk-design-toggle] > svg { width: 14px; height: 14px; flex: 0 0 auto; }
    [data-adk-design-toggle][data-on="false"] { color: var(--adk-accent-ink); border-color: color-mix(in srgb, var(--adk-ui-accent) 40%, transparent); background: color-mix(in srgb, var(--adk-ui-accent) 14%, transparent); }
    /* A pin whose change is currently hidden: hollow, so the page says which
       edits are showing. */
    [class*="marker___"][data-adk-hidden="true"][class][class] {
      background-image: none !important; background-color: var(--adk-on-accent) !important;
      color: var(--adk-ui-accent) !important;
      box-shadow: inset 0 0 0 2px var(--adk-ui-accent), var(--adk-shadow-card);
    }

    /* The collapsed bubble: hovering it runs the accent shimmer along the
       icon's bars \u2014 the same light the inspector's "Adjust" wears \u2014 so the
       bubble answers the pointer before the tooltip does. */
    [class*="toolbarContainer"][class*="collapsed"]:hover [class*="toggleContent"] svg path {
      stroke: url(#adk-ink-shimmer) !important;
    }

    /* \u2500\u2500 The comment card \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
       Measured on FigJam's own comment composer (2026-09): white, 13px
       radius, its three-layer shadow, the text and the round send button on
       ONE row, a 1px accent ring while typing. The overlay's header
       (component path, computed styles) is for engineers and is hidden; a
       plain-words line says what was pointed at instead. The card is a grid
       so our tools and the overlay's own buttons share rows without moving
       any node the overlay owns. */
    [data-annotation-popup][data-adk-card][class][class] {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      grid-template-areas: "title title" "quote quote" "text text" "tools actions";
      align-items: center;
      column-gap: 8px;
      width: 336px;
      padding: 10px 10px 10px 16px;
      background: var(--adk-bg);
      color: var(--adk-ink);
      border-radius: var(--adk-radius-card);
      box-shadow: var(--adk-shadow-card);
      transition: box-shadow 120ms ease;
    }
    [data-annotation-popup][data-adk-card][class][class]:focus-within {
      box-shadow: 0 0 0 1px var(--adk-ui-accent), var(--adk-shadow-card);
    }
    [data-annotation-popup][data-adk-card] > [class*="header"],
    [data-annotation-popup][data-adk-card] > [class*="stylesWrapper"] { display: none !important; }
    [data-annotation-popup][data-adk-card] > [data-adk-title] {
      grid-area: title;
      display: flex; align-items: center; gap: 6px; min-width: 0;
      margin: 0 30px 4px 0;
      font: var(--adk-fw-medium) var(--adk-fs-meta)/16px var(--adk-font);
      letter-spacing: 0.005px;
      color: var(--adk-ink-faint);
    }
    [data-annotation-popup][data-adk-card] > [data-adk-title] > i {
      flex: 0 0 auto; width: 8px; height: 8px; border-radius: 4px 4px 4px 0;
    }
    [data-annotation-popup][data-adk-card] > [data-adk-title] > span {
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    [data-annotation-popup][data-adk-card] > [data-adk-title] > span > b {
      font-weight: var(--adk-fw-strong); color: var(--adk-ink-dim);
    }
    [data-annotation-popup][data-adk-card] > [class*="quote"][class] {
      grid-area: quote; margin: 0 0 2px; padding: 0;
      border: 0; background: none; color: var(--adk-ink-faint);
      font-size: var(--adk-fs-control); font-style: italic;
    }
    [data-annotation-popup][data-adk-card] > textarea[class][class] {
      grid-area: text;
      height: auto; min-height: 32px; max-height: 40vh; margin: 0 12px 0 0; padding: 4px 0;
      field-sizing: content;
      background: transparent; color: var(--adk-ink);
      border: 0 !important; border-radius: 0; box-shadow: none;
      font-size: var(--adk-fs-body); line-height: 24px; letter-spacing: -0.003px;
    }
    [data-annotation-popup][data-adk-card] > textarea[class]::placeholder { color: var(--adk-ink-placeholder); }
    [data-annotation-popup][data-adk-card] > [data-adk-tools] {
      grid-area: tools;
      display: flex; align-items: center; gap: 6px; min-width: 0; flex-wrap: wrap;
      margin-top: 6px;
    }
    /* Camera, kind chips and the send button are ONE row, all 26px tall and
       vertically centred on the same axis. */
    [data-annotation-popup][data-adk-card] > [data-adk-tools] > [data-adk-camera] > button {
      width: 26px !important; height: 26px !important; border-radius: 9999px !important;
    }
    [data-annotation-popup][data-adk-card] > [data-adk-tools] > [data-adk-kinds] {
      flex: 0 1 auto; align-items: center; min-width: 0; max-width: 100%;
    }
    /* Chips never overlap: the row wraps (kinds drop under the camera), and
       when even a whole row is too narrow the labels shrink with an ellipsis. */
    [data-annotation-popup][data-adk-card] > [data-adk-tools] > [data-adk-kinds] > [data-adk-kind] {
      flex: 0 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    [data-annotation-popup][data-adk-card] > [data-adk-tools] > [data-adk-kinds] > [data-adk-kind]:focus-visible {
      outline: 2px solid var(--adk-ui-accent); outline-offset: 1px;
    }
    /* Narrow card: tighter chips first (before the row has to wrap or shrink). */
    [data-annotation-popup][data-adk-card] { container-type: inline-size; }
    @container (max-width: 320px) {
      [data-annotation-popup][data-adk-card] > [data-adk-tools] > [data-adk-kinds] > [data-adk-kind] {
        padding: 0 6px !important; letter-spacing: 0 !important;
      }
    }
    @media (pointer: coarse) {
      [data-annotation-popup][data-adk-card] > [data-adk-tools] > [data-adk-kinds] > [data-adk-kind] { position: relative; }
      [data-annotation-popup][data-adk-card] > [data-adk-tools] > [data-adk-kinds] > [data-adk-kind]::after {
        content: ""; position: absolute; left: 0; right: 0; top: 50%; height: 44px; transform: translateY(-50%);
      }
    }
    [data-annotation-popup][data-adk-card] > [data-adk-tools]:empty { display: none; }
    [data-annotation-popup][data-adk-card] > [data-adk-tools] > [data-adk-kinds] { margin: 0; }
    [data-annotation-popup][data-adk-card] > [data-adk-tools] > [data-adk-camera] {
      position: static; display: inline-flex; align-items: center; gap: 4px; order: -1;
    }
    [data-annotation-popup][data-adk-card] > [class*="actions"][class] {
      grid-area: actions; display: flex; align-items: center; gap: 2px; margin: 6px 0 0; align-self: center;
    }
    /* Cancel becomes the \xD7 in the corner: a comment bubble closes, it does
       not "cancel". */
    [data-annotation-popup][data-adk-card] [class*="cancel"][class][class] {
      position: absolute; top: 8px; right: 8px;
      width: 22px; height: 22px; padding: 0; border-radius: 50%;
      font-size: 0; line-height: 0; color: transparent;
      background: transparent;
    }
    [data-annotation-popup][data-adk-card] [class*="cancel"][class][class]:hover { background: var(--adk-hover); }
    [data-annotation-popup][data-adk-card] [class*="cancel"][class]::before {
      content: ""; position: absolute; inset: 0;
      background: var(--adk-ink-faint);
      -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='1.6' stroke-linecap='round'%3E%3Cpath d='M7 7l10 10M17 7L7 17'/%3E%3C/svg%3E") center / 14px no-repeat;
      mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='1.6' stroke-linecap='round'%3E%3Cpath d='M7 7l10 10M17 7L7 17'/%3E%3C/svg%3E") center / 14px no-repeat;
    }
    /* Send: FigJam's round button \u2014 grey until there is something to send,
       the accent colour (inline) once there is. The icon says what sending
       does: the first note on a page STARTS the list (list + plus), every
       later one is ADDED to it (list + check). */
    [data-annotation-popup][data-adk-card] [class*="submit"][class][class] {
      width: 26px; height: 26px; padding: 0; border-radius: 9999px;
      font-size: 0; line-height: 0; color: transparent;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 7h10M5 12h10M5 17h5M17 13v6M14 16h6'/%3E%3C/svg%3E");
      background-size: 18px; background-position: center; background-repeat: no-repeat;
      box-shadow: none; transition: background-color 120ms ease;
    }
    [data-annotation-popup][data-adk-card="next"] [class*="submit"][class][class] {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 7h10M5 12h10M5 17h5M14 17l2.2 2.2L21 14.5'/%3E%3C/svg%3E");
    }
    [data-annotation-popup][data-adk-card] [class*="submit"][class][class]:disabled {
      background-color: var(--adk-disabled) !important; opacity: 1 !important; cursor: default;
    }
    [data-annotation-popup][data-adk-card] [class*="deleteButton"][class] { color: var(--adk-ink-faint); }
    [data-annotation-popup][data-adk-card] [class*="deleteButton"][class]:hover { color: var(--adk-danger); background: var(--adk-hover); }

    /* Dark variant: nothing to restate. The card carries data-adk-theme and
       every colour above is a kit token, so the shared sheet swaps them. */

    /* \u2500\u2500 Hovering the page \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
       The overlay's hover box is a plain rectangle with a dark path
       tooltip. The box takes the element's own corner radius (set live by
       the kit), and the path tooltip gives way to the card's own kind of
       label \u2014 "Section \xB7 \u201CReplayed journeys\u201D" \u2014 drawn by the kit. */
    [class*="hoverHighlight"][class][class] { border-width: 1.5px; transition: border-radius 80ms ease; }
    [class*="hoverTooltip"][class][class] { display: none !important; }
    [data-adk-hover-label] {
      position: fixed; z-index: ${Sn.hoverLabel}; pointer-events: none;
      display: flex; align-items: center; gap: 6px; max-width: 320px;
      padding: 4px 9px 4px 7px; border-radius: 9999px;
      background: var(--adk-bg); color: var(--adk-ink-faint);
      box-shadow: var(--adk-shadow-card);
      font: var(--adk-fw-medium) var(--adk-fs-meta)/16px var(--adk-font);
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      transition: opacity 80ms ease;
    }
    [data-adk-hover-label][hidden] { display: none; }
    [data-adk-hover-label] > i { flex: 0 0 auto; width: 8px; height: 8px; border-radius: 4px 4px 4px 0; }
    [data-adk-hover-label] > span { overflow: hidden; text-overflow: ellipsis; }
    [data-adk-hover-label] > span > b { font-weight: var(--adk-fw-strong); color: var(--adk-ink-dim); }

    /* \u2500\u2500 The pin \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
       FigJam's comment pin: a 28px bubble with one square corner, bottom
       left, pointing at the spot. Same shadow as the card. The number stays.
       The face is the kit's own accent gradient \u2014 the ink on Copy/Send, the
       light on the inspector's badge \u2014 not the overlay's flat colour, and the
       digit is set in the kit's typeface, not the page's (a serif page gave
       serif numbers). */
    [class*="marker___"][class][class] {
      width: 28px; height: 28px;
      border-radius: 14px 14px 14px 0;
      transform: translate(0, -100%) !important;
      transform-origin: 0 100%;
      font: var(--adk-fw-strong) var(--adk-fs-control)/1 var(--adk-font) !important;
      font-variant-numeric: tabular-nums;
      letter-spacing: 0;
      background-image: var(--adk-accent-gradient) !important;
      box-shadow: var(--adk-shadow-card), inset 0 0 0 1px rgba(255, 255, 255, 0.18);
    }
    [class*="marker___"][class][class] > span { font: inherit; }
    /* A design pin: a restyle, not a note. Same pin, same number, plus a
       small white sparkle badge on its shoulder \u2014 the inspector's own mark \u2014
       so a glance at the page tells which pins are edits to look at in place.
       ::before only: ::after belongs to the agent status ring. */
    [class*="marker___"][data-adk-kind="design"][class] { position: absolute; }
    [class*="marker___"][data-adk-kind="design"][class]::before {
      content: ""; position: absolute; top: -5px; right: -5px;
      width: 14px; height: 14px; border-radius: 9999px;
      background: var(--adk-on-accent) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='ADK_ACCENT' d='M8 2.2 9.45 6.55 13.8 8 9.45 9.45 8 13.8 6.55 9.45 2.2 8 6.55 6.55Z'/%3E%3C/svg%3E") center / 9px no-repeat;
      box-shadow: var(--adk-shadow-pip);
      pointer-events: none;
    }
  `.replace(/ADK_ACCENT/g,o),document.head.appendChild(n)}function fm(){let n=null,o=i=>{n=null;let s=i.target,l=s?.closest("[data-feedback-toolbar]"),c=l?.firstElementChild;if(!l||!c||!s||!c.contains(s)||s.closest("button")||s.closest("[data-agentation-settings-panel]"))return;let u=l.getBoundingClientRect(),p=parseFloat(l.style.left);n={startX:i.clientX,toolbarX:Number.isNaN(p)?u.left:p,pill:c}},r=i=>{if(!n)return;let s=n.pill.getBoundingClientRect().width;if(s<=317)return;let l=20-(337-s),c=n.startX+(l-n.toolbarX);i.clientX<c&&Object.defineProperty(i,"clientX",{value:c,configurable:!0})},a=()=>{n=null};return document.addEventListener("mousedown",o,!0),document.addEventListener("mousemove",r,!0),document.addEventListener("mouseup",a,!0),()=>{document.removeEventListener("mousedown",o,!0),document.removeEventListener("mousemove",r,!0),document.removeEventListener("mouseup",a,!0)}}function yv(e){let t=e.getBoundingClientRect(),n=12,o=t.bottom-(window.innerHeight-n);if(o<=0)return;let r=Math.max(n,t.top-o);e.style.top=`${r}px`}function hm(e){let t=document.querySelector('[class*="canvasToggle"]');if(!t||!t.parentElement)return!1;let n=document.querySelector("[data-adk-layout-entry]");if(n){if(!e.owner||n.dataset.adkOwner===e.owner)return!0;n.remove()}let o=t.cloneNode(!0);o.dataset.adkLayoutEntry="",o.dataset.adkFeatureKey="wireframe",e.owner&&(o.dataset.adkOwner=e.owner),o.classList.remove(...Array.from(o.classList).filter(a=>/active/i.test(a)));let r=o.querySelector('[class*="canvasToggleLabel"]');return r?r.textContent=e.label:o.textContent=e.label,o.addEventListener("click",a=>{a.preventDefault(),a.stopPropagation(),e.onClick()}),t.insertAdjacentElement("afterend",o),!0}function mm(e){let t=document.querySelector("[data-agentation-settings-panel]");if(!t)return;let n=t.querySelector('[class*="settingsBrand"]');n&&n.textContent!==e.name&&(n.textContent=e.name,n.style.cssText="font: var(--adk-fw-strong) var(--adk-fs-title)/1 var(--adk-font);letter-spacing:-0.01em;text-decoration:none;color:inherit;cursor:default",n.removeAttribute("href"),n.removeAttribute("target"),n.removeAttribute("rel"));let o=document.createTreeWalker(t,NodeFilter.SHOW_TEXT),r=[],a=o.nextNode();for(;a;){let i=a.nodeValue??"";/^v\d+\.\d+\.\d+$/.test(i.trim())&&e.version?r.push([a,`v${e.version}`]):/agentation/i.test(i)&&r.push([a,i.replace(/agentation/gi,e.name)]),a=o.nextNode()}for(let[i,s]of r)i.nodeValue=s;e.version&&t.querySelectorAll("*").forEach(i=>{if(i.children.length)return;let s=(i.textContent??"").trim();/^v\d+\.\d+\.\d+$/.test(s)&&s!==`v${e.version}`&&(i.textContent=`v${e.version}`)}),t.querySelectorAll('a[href*="agentation"]').forEach(i=>{i.removeAttribute("href"),i.removeAttribute("target")})}var xv='<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z"/><circle cx="12" cy="13" r="3.5"/></svg>',vv='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.6"/></svg>',wv='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l18 18M10.6 6.3A10 10 0 0 1 12 6c6 0 9.5 6 9.5 6a16 16 0 0 1-3.2 3.7M6.6 6.7A15.6 15.6 0 0 0 2.5 12s3.5 6 9.5 6c1.5 0 2.8-.3 4-.9"/><path d="M9.9 9.9a2.6 2.6 0 0 0 3.7 3.7"/></svg>';function gm(e){let{popup:t}=e;t.setAttribute("data-adk-design","");let n=t.querySelector("[data-adk-tools]");if(!n)return null;let o=t.querySelector("[data-adk-design-toggle]"),r=e.visible,a=()=>{o&&(o.dataset.on=String(r),o.innerHTML=(r?wv:vv)+`<span>${r?e.labels.showOriginal:e.labels.showEdit}</span>`,o.title=r?e.labels.showOriginal:e.labels.showEdit)};return o||(o=document.createElement("button"),o.type="button",o.setAttribute("data-adk-design-toggle",""),o.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation(),r=!r,a(),e.onToggle(r)}),n.appendChild(o)),a(),o}var Rl=[{id:"desktop",label:"Desktop",width:null,height:null,icon:'<svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><rect x="1.5" y="3" width="13" height="8.5" rx="1.5"/><path d="M5.5 14h5"/></svg>'},{id:"tablet",label:"Tablet",width:834,height:1194,icon:'<svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="1.5" width="10" height="13" rx="1.8"/><path d="M7 12.5h2"/></svg>'},{id:"phone",label:"Phone",width:390,height:844,icon:'<svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><rect x="4.5" y="1.5" width="7" height="13" rx="1.8"/><path d="M7.2 12.6h1.6"/></svg>'}],_m="adk-viewport";function $r(e){return Rl.find(t=>t.id===e)??Rl[0]}function Qa(e,t="en"){return t!=="fr"?e.label:{desktop:"Ordinateur",tablet:"Tablette",phone:"T\xE9l\xE9phone"}[e.id]??e.label}var ns="desktop";function fa(){return $r(ns)}function du(){return fa().width??window.innerWidth}function Al(e="en"){let t=fa();return`${Qa(t,e)} \xB7 ${t.width??window.innerWidth}px`}function uu(e){ns=$r(e).id;let t=fa(),n=document.getElementById(_m);if(n||(n=document.createElement("style"),n.id=_m,document.head.appendChild(n)),!t.width){n.textContent="",document.documentElement.removeAttribute("data-adk-device"),window.dispatchEvent(new CustomEvent("adk-device",{detail:{id:ns}}));return}n.textContent=`
html[data-adk-device] {
  max-width: ${t.width}px !important;
  margin: 0 auto !important;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.12), 0 24px 80px rgba(0, 0, 0, 0.18);
  transition: max-width 260ms cubic-bezier(0.16, 1, 0.3, 1);
  overflow-x: hidden;
}
/* The gutter reads as "outside the page", not as page background. */
html[data-adk-device] body { min-height: 100vh; }
`,document.documentElement.setAttribute("data-adk-device",t.id),window.dispatchEvent(new CustomEvent("adk-device",{detail:{id:ns}}))}function ym(){uu("desktop")}function pu(e){ns=$r(e).id}var Ol="adk-device:",xm="data-adk-device-frame",vm="adk-device-frame-hide";function hu(){try{if(window.parent===window)return null;let e=window.name||"";return e.startsWith(Ol)?$r(e.slice(Ol.length)):null}catch{return null}}var cn=null,Tn=null,Bl=null,os=null,Dl=null;function zl(){return cn!=null&&cn.isConnected}function wm(){return cn?.dataset.device??null}function bm(e){let t=document.getElementById(vm);if(!e){if(t?.remove(),Dl){let o=document.documentElement.style;for(let r of["overflow","overflow-x","overflow-y"])o.removeProperty(r);for(let[r,a,i]of Dl)o.setProperty(r,a,i);Dl=null}return}t||(t=document.createElement("style"),t.id=vm,document.head.appendChild(t)),t.textContent=`
    html body [data-adk-root][data-adk-root], html body [data-feedback-toolbar][class][class][class],
    html body [data-agentation-toolbar][class][class][class], html body [data-annotation-marker][class][class],
    html body [class*="markersLayer"][class][class], html body [data-annotation-popup][class][class],
    html body [data-adk-hover-label], html body [data-adk-toast], html body [data-agentation-settings-panel][class][class] { display: none !important; }
  `;let n=document.documentElement.style;Dl=Array.from(n).filter(o=>["overflow","overflow-x","overflow-y"].includes(o)).map(o=>[o,n.getPropertyValue(o),n.getPropertyPriority(o)]),n.setProperty("overflow","hidden","important")}function fu(e){if(!Tn||!cn)return;let t=Tn.parentElement,n=t?.parentElement;if(!t||!n)return;let o=getComputedStyle(n),r=Math.max(1,n.clientWidth-parseFloat(o.paddingLeft)-parseFloat(o.paddingRight)),a=Math.max(1,n.clientHeight-parseFloat(o.paddingTop)-parseFloat(o.paddingBottom)),i=e.width??r,s=e.height??a,l=Math.min(1,r/i,a/s);Tn.style.width=`${i}px`,Tn.style.height=`${s}px`,Tn.style.transform=`scale(${l})`,t.style.width=`${i*l}px`,t.style.height=`${s*l}px`}function km(e){Ir(!1);let t=$r(e.device);if(!t.width)return;cn=document.createElement("div"),cn.setAttribute(xm,""),cn.dataset.device=t.id,cn.style.setProperty("--adk-accent",e.accent);let n=cn.attachShadow({mode:"open"}),o=document.createElement("style");o.textContent=`
:host { position: fixed; inset: 0; z-index: ${Sn.deviceFrame}; display: flex; flex-direction: column; }
.gutter { position: absolute; inset: 0; background: var(--adk-scrim); backdrop-filter: blur(6px); }
.top { position: relative; min-height: 52px; padding: var(--adk-space-2) var(--adk-space-3); display: flex; align-items: center; justify-content: center; gap: var(--adk-space-2); flex: 0 0 auto; }
.bar { display: flex; align-items: center; gap: 2px; padding: var(--adk-space-1); border-radius: calc(var(--adk-radius-control) + var(--adk-space-1));
  animation: drop var(--adk-medium) var(--adk-ease); }
.item { display: inline-flex; align-items: center; gap: 6px; height: 30px; padding: 0 10px; border-radius: var(--adk-radius-control);
  color: var(--adk-ink-dim); font-size: var(--adk-fs-control); font-weight: var(--adk-fw-medium);
  transition: background var(--adk-fast) var(--adk-ease), color var(--adk-fast) var(--adk-ease); }
.item:hover { color: var(--adk-ink); }
.item.is-on { background: var(--adk-field-hi); color: var(--adk-ink); box-shadow: inset 0 -2px var(--adk-ui-accent); }
button:focus-visible { outline-offset: 2px; }
.item svg { flex: 0 0 auto; }
.size { font-size: var(--adk-fs-meta); color: var(--adk-ink-faint); }
.close { flex: 0 0 30px; width: 30px; height: 30px; border-radius: var(--adk-radius-control); color: var(--adk-ink-dim);
  display: inline-flex; align-items: center; justify-content: center; }
.close:hover { color: var(--adk-ink); }
.stage { position: relative; flex: 1; min-height: 0; display: flex; align-items: flex-start; justify-content: center; padding: 24px; overflow: hidden; }
.preview { position: relative; flex: 0 0 auto; }
/* The one literal pair: a device's own corner, and the page's default canvas
   behind a site that paints none. */
iframe { position: absolute; top: 0; left: 0; display: block; border: 0; background: #fff; border-radius: 18px; transform-origin: top left;
  box-shadow: var(--adk-shadow-device); }
@media (max-width: 600px) { .size { display: none; } .stage { padding: var(--adk-space-3); } .item { gap: var(--adk-space-1); padding: 0 6px; } }
@media (max-width: 350px) { .item .label { display: none; } .item { padding: 0 10px; } }
@media (prefers-reduced-motion: reduce) { .bar { animation: none; } .item { transition: none; } }
@keyframes drop { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
`,n.appendChild(o),Ka(n),n.appendChild(Object.assign(document.createElement("div"),{className:"gutter"}));let r=document.createElement("div");r.className="top";let a=document.createElement("div");a.className="bar adk-panel";let i=[];for(let y of Rl){let _=document.createElement("button");_.type="button",_.className="item"+(y.id===t.id?" is-on":""),_.dataset.device=y.id,_.setAttribute("aria-pressed",String(y.id===t.id)),_.setAttribute("aria-label",Qa(y,e.locale)),_.innerHTML=y.icon;let C=document.createElement("span");if(C.className="label",C.textContent=Qa(y,e.locale),_.appendChild(C),y.width){let v=document.createElement("span");v.className="size",v.textContent=String(y.width),_.appendChild(v)}i.push(_),a.appendChild(_)}r.appendChild(a);let s=document.createElement("button");s.type="button",s.className="close adk-panel",s.title=e.labels.close,s.setAttribute("aria-label",e.labels.close),s.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',r.appendChild(s),n.appendChild(r);let l=document.createElement("div");l.className="stage";let c=document.createElement("div");c.className="preview",Tn=document.createElement("iframe"),Tn.name=Ol+t.id,Tn.title=Qa(t,e.locale),Tn.src=window.location.href,c.appendChild(Tn),l.appendChild(c),n.appendChild(l),Il(n,xm),Tn.addEventListener("load",()=>{try{let y=Tn?.contentDocument;(!y||!y.body||y.body.children.length===0&&!y.body.textContent?.trim())&&e.onBlocked?.()}catch{e.onBlocked?.()}});let u=y=>{if(y==="desktop"){Ir(!0,e.onClose);return}let _=$r(y);cn&&(cn.dataset.device=_.id),Tn&&(Tn.name=Ol+_.id,Tn.title=Qa(_,e.locale));for(let C of i)C.classList.toggle("is-on",C.dataset.device===_.id),C.setAttribute("aria-pressed",String(C.dataset.device===_.id));fu(_);try{Tn?.contentWindow?.postMessage({type:"adk-device",id:_.id},window.location.origin)}catch{}e.onSwitch?.(_.id)};a.addEventListener("click",y=>{let _=y.composedPath().find(C=>C instanceof HTMLElement&&!!C.dataset?.device);_?.dataset.device&&u(_.dataset.device)}),s.addEventListener("click",()=>Ir(!0,e.onClose));let p=y=>{y.key==="Escape"&&Ir(!0,e.onClose)};document.addEventListener("keydown",p),cn.addEventListener("adk-frame-teardown",()=>document.removeEventListener("keydown",p),{once:!0});let d=()=>{let y=Po(null);cn&&cn.dataset.theme!==y&&(cn.dataset.theme=y)};d(),Bl=new MutationObserver(d),Bl.observe(document.documentElement,{subtree:!0,attributes:!0,attributeFilter:["data-agentation-theme"]}),os=()=>fu($r(cn?.dataset.device??t.id)),window.addEventListener("resize",os),bm(!0),document.body.appendChild(cn),fu(t)}function Ir(e=!0,t){cn&&(cn.dispatchEvent(new Event("adk-frame-teardown")),Bl?.disconnect(),Bl=null,os&&window.removeEventListener("resize",os),os=null,cn.remove(),cn=null,Tn=null,bm(!1),e&&t?.())}function Cm(e){let t=n=>{if(n.origin!==window.location.origin)return;let o=n.data;o&&o.type==="adk-device"&&typeof o.id=="string"&&e(o.id)};return window.addEventListener("message",t),()=>window.removeEventListener("message",t)}var Eh=At(oy(),1);var F=At(No(),1),Py=At(ld(),1),nn=At(No(),1),ye=At(Nn(),1),Qt=At(Nn(),1),tr=At(No(),1),Ay=At(ld(),1),Na=At(Nn(),1),Xf=At(Nn(),1),bt=At(No(),1),h=At(Nn(),1),Ot=At(Nn(),1),on=At(No(),1),f=At(Nn(),1),rt=At(No(),1),vt=At(Nn(),1),qy=At(No(),1),yo=At(Nn(),1),rl=At(Nn(),1),Ky=At(No(),1),Pi=At(Nn(),1),Ni=At(Nn(),1),Le=At(Nn(),1),ce=At(Nn(),1),Vw=`.styles-module__popup___IhzrD svg[fill=none] {
  fill: none !important;
}
.styles-module__popup___IhzrD svg[fill=none] :not([fill]) {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem 14px;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: var(--agentation-color-blue);
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: var(--agentation-color-green);
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR {
  padding: 0.4rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}`,Yw={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",popupEnter:"styles-module__popupEnter___AuQDN",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",popupExit:"styles-module__popupExit___JJKQX",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",green:"styles-module__green___99l3h",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(e)),e.textContent=Vw}var Dt=Yw,Xw=`.icon-transitions-module__iconState___uqK9J {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: center;
}

.icon-transitions-module__iconStateFast___HxlMm {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: center;
}

.icon-transitions-module__iconFade___nPwXg {
  transition: opacity 0.2s ease;
}

.icon-transitions-module__iconFadeFast___Ofb2t {
  transition: opacity 0.15s ease;
}

.icon-transitions-module__visible___PlHsU {
  opacity: 1 !important;
}

.icon-transitions-module__visibleScaled___8Qog- {
  opacity: 1 !important;
  transform: scale(1);
}

.icon-transitions-module__hidden___ETykt {
  opacity: 0 !important;
}

.icon-transitions-module__hiddenScaled___JXn-m {
  opacity: 0 !important;
  transform: scale(0.8);
}

.icon-transitions-module__sending___uaLN- {
  opacity: 0.5 !important;
  transform: scale(0.8);
}`,qw={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-components-icon-transitions");e||(e=document.createElement("style"),e.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(e)),e.textContent=Xw}var Pt=qw;var Kw=({size:e=16})=>(0,ye.jsx)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",children:(0,ye.jsx)("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})});var Qw=({size:e=24,style:t={}})=>(0,ye.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:t,children:[(0,ye.jsxs)("g",{clipPath:"url(#clip0_list_sparkle)",children:[(0,ye.jsx)("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),(0,ye.jsx)("defs",{children:(0,ye.jsx)("clipPath",{id:"clip0_list_sparkle",children:(0,ye.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]}),Gw=({size:e=20,...t})=>(0,ye.jsxs)("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[(0,ye.jsx)("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),(0,ye.jsx)("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]});var Zw=({size:e=24,copied:t=!1,tint:n})=>(0,ye.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:n?{color:n,transition:"color 0.3s ease"}:void 0,children:[(0,ye.jsxs)("g",{className:`${Pt.iconState} ${t?Pt.hiddenScaled:Pt.visibleScaled}`,children:[(0,ye.jsx)("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),(0,ye.jsx)("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),(0,ye.jsxs)("g",{className:`${Pt.iconState} ${t?Pt.visibleScaled:Pt.hiddenScaled}`,children:[(0,ye.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),Jw=({size:e=24,state:t="idle"})=>{let n=t==="idle",o=t==="sent",r=t==="failed",a=t==="sending";return(0,ye.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,ye.jsx)("g",{className:`${Pt.iconStateFast} ${n?Pt.visibleScaled:a?Pt.sending:Pt.hiddenScaled}`,children:(0,ye.jsx)("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,ye.jsxs)("g",{className:`${Pt.iconStateFast} ${o?Pt.visibleScaled:Pt.hiddenScaled}`,children:[(0,ye.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,ye.jsxs)("g",{className:`${Pt.iconStateFast} ${r?Pt.visibleScaled:Pt.hiddenScaled}`,children:[(0,ye.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),(0,ye.jsx)("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})};var e2=({size:e=24,isOpen:t=!0})=>(0,ye.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,ye.jsxs)("g",{className:`${Pt.iconFade} ${t?Pt.visible:Pt.hidden}`,children:[(0,ye.jsx)("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,ye.jsxs)("g",{className:`${Pt.iconFade} ${t?Pt.hidden:Pt.visible}`,children:[(0,ye.jsx)("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),(0,ye.jsx)("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),t2=({size:e=24,isPaused:t=!1})=>(0,ye.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,ye.jsxs)("g",{className:`${Pt.iconFadeFast} ${t?Pt.hidden:Pt.visible}`,children:[(0,ye.jsx)("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,ye.jsx)("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),(0,ye.jsx)("path",{className:`${Pt.iconFadeFast} ${t?Pt.visible:Pt.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]});var n2=({size:e=16})=>(0,ye.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,ye.jsx)("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]});var o2=({size:e=16})=>(0,ye.jsx)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:(0,ye.jsx)("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})});var Ny=({size:e=16})=>(0,ye.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,ye.jsxs)("g",{clipPath:"url(#clip0_2_53)",children:[(0,ye.jsx)("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,ye.jsx)("defs",{children:(0,ye.jsx)("clipPath",{id:"clip0_2_53",children:(0,ye.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]}),r2=({size:e=24})=>(0,ye.jsx)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:(0,ye.jsx)("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),a2=({size:e=16})=>(0,ye.jsxs)("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:[(0,ye.jsx)("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),i2=({size:e=16})=>(0,ye.jsx)("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:(0,ye.jsx)("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),eh=({size:e=16})=>(0,ye.jsx)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,ye.jsx)("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),s2=({size:e=24})=>(0,ye.jsx)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,ye.jsx)("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),l2=({size:e=16})=>(0,ye.jsx)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,ye.jsx)("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})});var c2=({size:e=24})=>(0,ye.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,ye.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),(0,ye.jsx)("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),(0,ye.jsx)("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),Ry=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Af=Ry.flatMap(e=>[`:not([${e}])`,`:not([${e}] *)`]).join(""),Yf="feedback-freeze-styles",Df="__agentation_freeze";function d2(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:t=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};let e=window;return e[Df]||(e[Df]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),e[Df]}var gt=d2();typeof window<"u"&&!gt.installed&&(gt.origSetTimeout=window.setTimeout.bind(window),gt.origSetInterval=window.setInterval.bind(window),gt.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(e,t,...n)=>typeof e=="string"?gt.origSetTimeout(e,t):gt.origSetTimeout((...o)=>{gt.frozen?gt.frozenTimeoutQueue.push(()=>e(...o)):e(...o)},t,...n),window.setInterval=(e,t,...n)=>typeof e=="string"?gt.origSetInterval(e,t):gt.origSetInterval((...o)=>{gt.frozen||e(...o)},t,...n),window.requestAnimationFrame=e=>gt.origRAF(t=>{gt.frozen?gt.frozenRAFQueue.push(e):e(t)}),gt.installed=!0);var Qe=gt.origSetTimeout,u2=gt.origSetInterval,$i=gt.origRAF;function p2(e){return e?Ry.some(t=>!!e.closest?.(`[${t}]`)):!1}function f2(){if(typeof document>"u"||gt.frozen)return;gt.frozen=!0,gt.frozenTimeoutQueue=[],gt.frozenRAFQueue=[];let e=document.getElementById(Yf);e||(e=document.createElement("style"),e.id=Yf),e.textContent=`
    *${Af},
    *${Af}::before,
    *${Af}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(e),gt.pausedAnimations=[];try{document.getAnimations().forEach(t=>{if(t.playState!=="running")return;let n=t.effect?.target;p2(n)||(t.pause(),gt.pausedAnimations.push(t))})}catch{}document.querySelectorAll("video").forEach(t=>{t.paused||(t.dataset.wasPaused="false",t.pause())})}function sy(){if(typeof document>"u"||!gt.frozen)return;gt.frozen=!1;let e=gt.frozenTimeoutQueue;gt.frozenTimeoutQueue=[];for(let n of e)gt.origSetTimeout(()=>{if(gt.frozen){gt.frozenTimeoutQueue.push(n);return}try{n()}catch(o){console.warn("[agentation] Error replaying queued timeout:",o)}},0);let t=gt.frozenRAFQueue;gt.frozenRAFQueue=[];for(let n of t)gt.origRAF(o=>{if(gt.frozen){gt.frozenRAFQueue.push(n);return}n(o)});for(let n of gt.pausedAnimations)try{n.play()}catch(o){console.warn("[agentation] Error resuming animation:",o)}gt.pausedAnimations=[],document.getElementById(Yf)?.remove(),document.querySelectorAll("video").forEach(n=>{n.dataset.wasPaused==="false"&&(n.play().catch(()=>{}),delete n.dataset.wasPaused)})}function Of(e){if(!e)return;let t=n=>n.stopImmediatePropagation();document.addEventListener("focusin",t,!0),document.addEventListener("focusout",t,!0);try{e.focus()}finally{document.removeEventListener("focusin",t,!0),document.removeEventListener("focusout",t,!0)}}var bd=(0,nn.forwardRef)(function({element:t,timestamp:n,selectedText:o,placeholder:r="What should change?",initialValue:a="",submitLabel:i="Add",onSubmit:s,onCancel:l,onDelete:c,style:u,accentColor:p="#3c82f7",isExiting:d=!1,lightMode:y=!1,computedStyles:_},C){let[v,m]=(0,nn.useState)(a),[g,E]=(0,nn.useState)(!1),[I,D]=(0,nn.useState)("initial"),[oe,z]=(0,nn.useState)(!1),[Z,ge]=(0,nn.useState)(!1),te=(0,nn.useRef)(null),he=(0,nn.useRef)(null),K=(0,nn.useRef)(null),P=(0,nn.useRef)(null);(0,nn.useEffect)(()=>{d&&I!=="exit"&&D("exit")},[d,I]),(0,nn.useEffect)(()=>{Qe(()=>{D("enter")},0);let Y=Qe(()=>{D("entered")},200),Se=Qe(()=>{let nt=te.current;nt&&(Of(nt),nt.selectionStart=nt.selectionEnd=nt.value.length,nt.scrollTop=nt.scrollHeight)},50);return()=>{clearTimeout(Y),clearTimeout(Se),K.current&&clearTimeout(K.current),P.current&&clearTimeout(P.current)}},[]);let q=(0,nn.useCallback)(()=>{P.current&&clearTimeout(P.current),E(!0),P.current=Qe(()=>{E(!1),Of(te.current)},250)},[]);(0,nn.useImperativeHandle)(C,()=>({shake:q}),[q]);let le=(0,nn.useCallback)(()=>{D("exit"),K.current=Qe(()=>{l()},150)},[l]),me=(0,nn.useCallback)(()=>{v.trim()&&s(v.trim())},[v,s]),Ce=(0,nn.useCallback)(Y=>{Y.stopPropagation(),!Y.nativeEvent.isComposing&&(Y.key==="Enter"&&!Y.shiftKey&&(Y.preventDefault(),me()),Y.key==="Escape"&&le())},[me,le]),B=[Dt.popup,y?Dt.light:"",I==="enter"?Dt.enter:"",I==="entered"?Dt.entered:"",I==="exit"?Dt.exit:"",g?Dt.shake:""].filter(Boolean).join(" ");return(0,Qt.jsxs)("div",{ref:he,className:B,"data-annotation-popup":!0,style:u,onClick:Y=>Y.stopPropagation(),children:[(0,Qt.jsxs)("div",{className:Dt.header,children:[_&&Object.keys(_).length>0?(0,Qt.jsxs)("button",{className:Dt.headerToggle,onClick:()=>{let Y=Z;ge(!Z),Y&&Qe(()=>Of(te.current),0)},type:"button",children:[(0,Qt.jsx)("svg",{className:`${Dt.chevron} ${Z?Dt.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Qt.jsx)("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,Qt.jsx)("span",{className:Dt.element,children:t})]}):(0,Qt.jsx)("span",{className:Dt.element,children:t}),n&&(0,Qt.jsx)("span",{className:Dt.timestamp,children:n})]}),_&&Object.keys(_).length>0&&(0,Qt.jsx)("div",{className:`${Dt.stylesWrapper} ${Z?Dt.expanded:""}`,children:(0,Qt.jsx)("div",{className:Dt.stylesInner,children:(0,Qt.jsx)("div",{className:Dt.stylesBlock,children:Object.entries(_).map(([Y,Se])=>(0,Qt.jsxs)("div",{className:Dt.styleLine,children:[(0,Qt.jsx)("span",{className:Dt.styleProperty,children:Y.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",(0,Qt.jsx)("span",{className:Dt.styleValue,children:Se}),";"]},Y))})})}),o&&(0,Qt.jsxs)("div",{className:Dt.quote,children:["\u201C",o.slice(0,80),o.length>80?"...":"","\u201D"]}),(0,Qt.jsx)("textarea",{ref:te,className:Dt.textarea,style:{borderColor:oe?p:void 0},placeholder:r,value:v,onChange:Y=>m(Y.target.value),onFocus:()=>z(!0),onBlur:()=>z(!1),rows:2,onKeyDown:Ce}),(0,Qt.jsxs)("div",{className:Dt.actions,children:[c&&(0,Qt.jsx)("div",{className:Dt.deleteWrapper,children:(0,Qt.jsx)("button",{className:Dt.deleteButton,onClick:c,type:"button",children:(0,Qt.jsx)(s2,{size:22})})}),(0,Qt.jsx)("button",{className:Dt.cancel,onClick:le,children:"Cancel"}),(0,Qt.jsx)("button",{className:Dt.submit,style:{backgroundColor:p,opacity:v.trim()?1:.4},onClick:me,disabled:!v.trim(),children:i})]})]})}),h2=({content:e,children:t,...n})=>{let[o,r]=(0,tr.useState)(!1),[a,i]=(0,tr.useState)(!1),[s,l]=(0,tr.useState)({top:0,right:0}),c=(0,tr.useRef)(null),u=(0,tr.useRef)(null),p=(0,tr.useRef)(null),d=()=>{if(c.current){let C=c.current.getBoundingClientRect();l({top:C.top+C.height/2,right:window.innerWidth-C.left+8})}},y=()=>{i(!0),p.current&&(clearTimeout(p.current),p.current=null),d(),u.current=Qe(()=>{r(!0)},500)},_=()=>{u.current&&(clearTimeout(u.current),u.current=null),r(!1),p.current=Qe(()=>{i(!1)},150)};return(0,tr.useEffect)(()=>()=>{u.current&&clearTimeout(u.current),p.current&&clearTimeout(p.current)},[]),(0,Na.jsxs)(Na.Fragment,{children:[(0,Na.jsx)("span",{ref:c,onMouseEnter:y,onMouseLeave:_,...n,children:t}),a&&(0,Ay.createPortal)((0,Na.jsx)("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:s.top,right:s.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:o?1:0,transition:"opacity 0.15s ease"},children:e}),document.body)]})},m2=`.styles-module__tooltip___mcXL2 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: help;
}

.styles-module__tooltipIcon___Nq2nD {
  transform: translateY(0.5px);
  color: #fff;
  opacity: 0.2;
  transition: opacity 0.15s ease;
  will-change: transform;
}
.styles-module__tooltip___mcXL2:hover .styles-module__tooltipIcon___Nq2nD {
  opacity: 0.5;
}
[data-agentation-theme=light] .styles-module__tooltipIcon___Nq2nD {
  color: #000;
}`,g2={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-help-tooltip-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(e)),e.textContent=m2}var ly=g2,Pa=({content:e})=>(0,Xf.jsx)(h2,{className:ly.tooltip,content:e,children:(0,Xf.jsx)(Gw,{className:ly.tooltipIcon})}),Te={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},Dy=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...Te.navigation},{type:"header",label:"Header",...Te.header},{type:"hero",label:"Hero",...Te.hero},{type:"section",label:"Section",...Te.section},{type:"sidebar",label:"Sidebar",...Te.sidebar},{type:"footer",label:"Footer",...Te.footer},{type:"modal",label:"Modal",...Te.modal},{type:"banner",label:"Banner",...Te.banner},{type:"drawer",label:"Drawer",...Te.drawer},{type:"popover",label:"Popover",...Te.popover},{type:"divider",label:"Divider",...Te.divider}]},{section:"Content",items:[{type:"card",label:"Card",...Te.card},{type:"text",label:"Text",...Te.text},{type:"image",label:"Image",...Te.image},{type:"video",label:"Video",...Te.video},{type:"table",label:"Table",...Te.table},{type:"grid",label:"Grid",...Te.grid},{type:"list",label:"List",...Te.list},{type:"chart",label:"Chart",...Te.chart},{type:"codeBlock",label:"Code Block",...Te.codeBlock},{type:"map",label:"Map",...Te.map},{type:"timeline",label:"Timeline",...Te.timeline},{type:"calendar",label:"Calendar",...Te.calendar},{type:"accordion",label:"Accordion",...Te.accordion},{type:"carousel",label:"Carousel",...Te.carousel},{type:"logo",label:"Logo",...Te.logo},{type:"faq",label:"FAQ",...Te.faq},{type:"gallery",label:"Gallery",...Te.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...Te.button},{type:"input",label:"Input",...Te.input},{type:"search",label:"Search",...Te.search},{type:"form",label:"Form",...Te.form},{type:"tabs",label:"Tabs",...Te.tabs},{type:"dropdown",label:"Dropdown",...Te.dropdown},{type:"toggle",label:"Toggle",...Te.toggle},{type:"stepper",label:"Stepper",...Te.stepper},{type:"rating",label:"Rating",...Te.rating},{type:"fileUpload",label:"File Upload",...Te.fileUpload},{type:"checkbox",label:"Checkbox",...Te.checkbox},{type:"radio",label:"Radio",...Te.radio},{type:"slider",label:"Slider",...Te.slider},{type:"datePicker",label:"Date Picker",...Te.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...Te.avatar},{type:"badge",label:"Badge",...Te.badge},{type:"tag",label:"Tag",...Te.tag},{type:"breadcrumb",label:"Breadcrumb",...Te.breadcrumb},{type:"pagination",label:"Pagination",...Te.pagination},{type:"progress",label:"Progress",...Te.progress},{type:"alert",label:"Alert",...Te.alert},{type:"toast",label:"Toast",...Te.toast},{type:"notification",label:"Notification",...Te.notification},{type:"tooltip",label:"Tooltip",...Te.tooltip},{type:"stat",label:"Stat",...Te.stat},{type:"skeleton",label:"Skeleton",...Te.skeleton},{type:"chip",label:"Chip",...Te.chip},{type:"icon",label:"Icon",...Te.icon},{type:"spinner",label:"Spinner",...Te.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...Te.pricing},{type:"testimonial",label:"Testimonial",...Te.testimonial},{type:"cta",label:"CTA",...Te.cta},{type:"productCard",label:"Product Card",...Te.productCard},{type:"profile",label:"Profile",...Te.profile},{type:"feature",label:"Feature",...Te.feature},{type:"team",label:"Team",...Te.team},{type:"login",label:"Login",...Te.login},{type:"contact",label:"Contact",...Te.contact}]}],Wo={};for(let e of Dy)for(let t of e.items)Wo[t.type]=t;function re({w:e,h:t=3,strong:n}){return(0,h.jsx)("div",{style:{width:typeof e=="number"?`${e}px`:e,height:t,borderRadius:2,background:n?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function $t({w:e,h:t,radius:n=3,style:o}){return(0,h.jsx)("div",{style:{width:typeof e=="number"?`${e}px`:e,height:typeof t=="number"?`${t}px`:t,borderRadius:n,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...o}})}function Kn({size:e}){return(0,h.jsx)("div",{style:{width:e,height:e,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function _2({width:e,height:t}){let n=Math.max(8,t*.2);return(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${n}px`,gap:e*.02},children:[(0,h.jsx)($t,{w:Math.max(20,t*.5),h:Math.max(12,t*.4),radius:2}),(0,h.jsxs)("div",{style:{flex:1,display:"flex",gap:e*.03,marginLeft:e*.04},children:[(0,h.jsx)(re,{w:e*.06}),(0,h.jsx)(re,{w:e*.07}),(0,h.jsx)(re,{w:e*.05}),(0,h.jsx)(re,{w:e*.06})]}),(0,h.jsx)($t,{w:e*.1,h:Math.min(28,t*.5),radius:4})]})}function y2({width:e,height:t,text:n}){return(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:t*.05},children:[n?(0,h.jsx)("span",{style:{fontSize:Math.min(20,t*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:n}):(0,h.jsx)(re,{w:e*.5,h:Math.max(6,t*.04),strong:!0}),(0,h.jsx)(re,{w:e*.6}),(0,h.jsx)(re,{w:e*.4}),(0,h.jsx)($t,{w:Math.min(140,e*.2),h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.06}})]})}function x2({width:e,height:t}){let n=Math.max(3,Math.floor(t/36));return(0,h.jsxs)("div",{style:{padding:e*.08,display:"flex",flexDirection:"column",gap:t*.03},children:[(0,h.jsx)(re,{w:e*.6,h:4,strong:!0}),Array.from({length:n},(o,r)=>(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,h.jsx)($t,{w:10,h:10,radius:2}),(0,h.jsx)(re,{w:e*(.4+r*17%30/100)})]},r))]})}function v2({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/160)));return(0,h.jsx)("div",{style:{display:"flex",padding:`${t*.12}px ${e*.03}px`,gap:e*.05},children:Array.from({length:n},(o,r)=>(0,h.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[(0,h.jsx)(re,{w:"60%",h:3,strong:!0}),(0,h.jsx)(re,{w:"80%",h:2}),(0,h.jsx)(re,{w:"70%",h:2}),(0,h.jsx)(re,{w:"60%",h:2})]},r))})}function w2({width:e,height:t}){return(0,h.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,h.jsxs)("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,h.jsx)(re,{w:e*.3,h:4,strong:!0}),(0,h.jsx)("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),(0,h.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[(0,h.jsx)(re,{w:"90%"}),(0,h.jsx)(re,{w:"70%"}),(0,h.jsx)(re,{w:"80%"})]}),(0,h.jsxs)("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[(0,h.jsx)($t,{w:70,h:26,radius:4}),(0,h.jsx)($t,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function b2({width:e,height:t}){return(0,h.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,h.jsx)("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),(0,h.jsxs)("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[(0,h.jsx)(re,{w:"70%",h:4,strong:!0}),(0,h.jsx)(re,{w:"95%",h:2}),(0,h.jsx)(re,{w:"85%",h:2}),(0,h.jsx)(re,{w:"50%",h:2})]})]})}function k2({width:e,height:t,text:n}){if(n)return(0,h.jsx)("div",{style:{padding:4,fontSize:Math.min(14,t*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:n});let o=Math.max(2,Math.floor(t/18));return(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[(0,h.jsx)(re,{w:e*.6,h:5,strong:!0}),Array.from({length:o},(r,a)=>(0,h.jsx)(re,{w:`${70+a*13%25}%`,h:2},a))]})}function C2({width:e,height:t}){return(0,h.jsx)("div",{style:{height:"100%",position:"relative"},children:(0,h.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,preserveAspectRatio:"none",fill:"none",children:[(0,h.jsx)("line",{x1:"0",y1:"0",x2:e,y2:t,stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,h.jsx)("line",{x1:e,y1:"0",x2:"0",y2:t,stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,h.jsx)("circle",{cx:e*.3,cy:t*.3,r:Math.min(e,t)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function S2({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(e/100))),o=Math.max(2,Math.min(6,Math.floor(t/32)));return(0,h.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,h.jsx)("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:n},(r,a)=>(0,h.jsx)("div",{style:{flex:1,padding:"0 8px"},children:(0,h.jsx)(re,{w:"70%",h:3,strong:!0})},a))}),Array.from({length:o},(r,a)=>(0,h.jsx)("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:n},(i,s)=>(0,h.jsx)("div",{style:{flex:1,padding:"0 8px"},children:(0,h.jsx)(re,{w:`${50+(a*7+s*13)%40}%`,h:2})},s))},a))]})}function E2({width:e,height:t}){let n=Math.max(2,Math.floor(t/28));return(0,h.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:n},(o,r)=>(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[(0,h.jsx)(Kn,{size:8}),(0,h.jsx)(re,{w:`${55+r*17%35}%`,h:2})]},r))})}function M2({width:e,height:t,text:n}){return(0,h.jsx)("div",{style:{height:"100%",borderRadius:Math.min(8,t/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:n?(0,h.jsx)("span",{style:{fontSize:Math.min(13,t*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:n}):(0,h.jsx)(re,{w:Math.max(20,e*.5),h:3,strong:!0})})}function L2({width:e,height:t}){return(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[(0,h.jsx)(re,{w:Math.min(80,e*.3),h:2}),(0,h.jsx)("div",{style:{height:Math.min(36,t*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:(0,h.jsx)(re,{w:"40%",h:2})})]})}function T2({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(t/56)));return(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:t*.04,padding:8},children:[Array.from({length:n},(o,r)=>(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,h.jsx)(re,{w:60+r*17%30,h:2}),(0,h.jsx)($t,{w:"100%",h:28,radius:4})]},r)),(0,h.jsx)($t,{w:Math.min(120,e*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function $2({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120)));return(0,h.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,h.jsx)("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:n},(o,r)=>(0,h.jsx)("div",{style:{padding:"8px 12px",borderBottom:r===0?"2px solid var(--agd-bar-strong)":"none"},children:(0,h.jsx)(re,{w:60,h:3,strong:r===0})},r))}),(0,h.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[(0,h.jsx)(re,{w:"80%",h:2}),(0,h.jsx)(re,{w:"65%",h:2}),(0,h.jsx)(re,{w:"75%",h:2})]})]})}function I2({width:e,height:t}){let n=Math.min(e,t)/2;return(0,h.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,h.jsx)("circle",{cx:e/2,cy:t/2,r:n-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),(0,h.jsx)("circle",{cx:e/2,cy:t*.38,r:n*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),(0,h.jsx)("path",{d:`M${e/2-n*.55} ${t*.78} C${e/2-n*.55} ${t*.55} ${e/2+n*.55} ${t*.55} ${e/2+n*.55} ${t*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function P2({width:e,height:t}){return(0,h.jsx)("div",{style:{height:"100%",borderRadius:t/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,h.jsx)(re,{w:Math.max(16,e*.5),h:2,strong:!0})})}function N2({width:e,height:t}){return(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:t*.08},children:[(0,h.jsx)(re,{w:e*.5,h:Math.max(5,t*.06),strong:!0}),(0,h.jsx)(re,{w:e*.35})]})}function R2({width:e,height:t}){return(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:t*.04,padding:e*.04},children:[(0,h.jsx)(re,{w:e*.3,h:4,strong:!0}),(0,h.jsx)(re,{w:e*.7}),(0,h.jsx)(re,{w:e*.5}),(0,h.jsxs)("div",{style:{flex:1,display:"flex",gap:e*.03,marginTop:t*.06},children:[(0,h.jsx)($t,{w:"33%",h:"100%",radius:4}),(0,h.jsx)($t,{w:"33%",h:"100%",radius:4}),(0,h.jsx)($t,{w:"33%",h:"100%",radius:4})]})]})}function A2({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/140))),o=Math.max(1,Math.min(3,Math.floor(t/120)));return(0,h.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${o}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:n*o},(r,a)=>(0,h.jsx)($t,{w:"100%",h:"100%",radius:4},a))})}function D2({width:e,height:t}){let n=Math.max(2,Math.floor((t-32)/28));return(0,h.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,h.jsx)("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:(0,h.jsx)(re,{w:e*.5,h:3,strong:!0})}),(0,h.jsx)("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:n},(o,r)=>(0,h.jsx)("div",{style:{padding:"4px 6px",borderRadius:3,background:r===0?"var(--agd-fill)":"transparent"},children:(0,h.jsx)(re,{w:`${50+r*17%35}%`,h:2,strong:r===0})},r))})]})}function O2({width:e,height:t}){let n=Math.min(e,t)/2;return(0,h.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,h.jsx)("rect",{x:"1",y:"1",width:e-2,height:t-2,rx:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,h.jsx)("circle",{cx:e-n,cy:t/2,r:n*.7,fill:"var(--agd-bar)"})]})}function B2({width:e,height:t}){let n=Math.min(t/2,20);return(0,h.jsxs)("div",{style:{height:"100%",borderRadius:n,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.6}px`,gap:6},children:[(0,h.jsx)(Kn,{size:Math.min(14,t*.4)}),(0,h.jsx)(re,{w:"50%",h:2})]})}function z2({width:e,height:t}){return(0,h.jsxs)("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[(0,h.jsx)(Kn,{size:Math.min(20,t*.5)}),(0,h.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,h.jsx)(re,{w:"60%",h:3,strong:!0}),(0,h.jsx)(re,{w:"80%",h:2})]}),(0,h.jsx)("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function F2({width:e,height:t}){return(0,h.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,h.jsx)("rect",{x:"0",y:"0",width:e,height:t,rx:t/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),(0,h.jsx)("rect",{x:"1",y:"1",width:e*.65,height:t-2,rx:(t-2)/2,fill:"var(--agd-bar)"})]})}function H2({width:e,height:t}){let n=Math.max(3,Math.min(7,Math.floor(e/50))),o=e/(n*2);return(0,h.jsx)("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:n},(r,a)=>{let i=30+(a*37+17)%55;return(0,h.jsx)($t,{w:o,h:`${i}%`,radius:2},a)})})}function W2({width:e,height:t}){let n=Math.min(e,t)*.12;return(0,h.jsxs)("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,h.jsx)($t,{w:"100%",h:"100%",radius:4}),(0,h.jsx)("div",{style:{position:"absolute",width:n*2,height:n*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,h.jsx)("div",{style:{width:0,height:0,borderLeft:`${n*.6}px solid var(--agd-bar-strong)`,borderTop:`${n*.4}px solid transparent`,borderBottom:`${n*.4}px solid transparent`,marginLeft:n*.15}})})]})}function j2({width:e,height:t}){return(0,h.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,h.jsx)("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,h.jsx)(re,{w:"60%",h:2})}),(0,h.jsx)("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function U2({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/80)));return(0,h.jsx)("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:n},(o,r)=>(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4},children:[r>0&&(0,h.jsx)("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),(0,h.jsx)(re,{w:40+r*13%20,h:2,strong:r===n-1})]},r))})}function V2({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(e/40))),o=Math.min(28,t*.8);return(0,h.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:n},(r,a)=>(0,h.jsx)($t,{w:o,h:o,radius:4,style:a===1?{background:"var(--agd-bar)"}:void 0},a))})}function Y2({width:e}){return(0,h.jsx)("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:(0,h.jsx)("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function X2({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(t/40)));return(0,h.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:n},(o,r)=>(0,h.jsxs)("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:r===0?2:1},children:[(0,h.jsx)(re,{w:`${40+r*17%25}%`,h:3,strong:!0}),(0,h.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:r===0?"\u25BC":"\u25B6"})]},r))})}function q2({width:e,height:t}){return(0,h.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[(0,h.jsxs)("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[(0,h.jsx)("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"\u2039"}),(0,h.jsx)($t,{w:"100%",h:"100%",radius:4}),(0,h.jsx)("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"\u203A"})]}),(0,h.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[(0,h.jsx)(Kn,{size:5}),(0,h.jsx)(Kn,{size:5}),(0,h.jsx)(Kn,{size:5})]})]})}function K2({width:e,height:t}){return(0,h.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:t*.04},children:[(0,h.jsx)(re,{w:e*.4,h:3,strong:!0}),(0,h.jsx)(re,{w:e*.3,h:6,strong:!0}),(0,h.jsx)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(n,o)=>(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4},children:[(0,h.jsx)(Kn,{size:5}),(0,h.jsx)(re,{w:`${50+o*17%35}%`,h:2})]},o))}),(0,h.jsx)($t,{w:e*.7,h:Math.min(32,t*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function Q2({width:e,height:t}){return(0,h.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[(0,h.jsx)("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"\u201C"}),(0,h.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[(0,h.jsx)(re,{w:"90%",h:2}),(0,h.jsx)(re,{w:"75%",h:2}),(0,h.jsx)(re,{w:"60%",h:2})]}),(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,h.jsx)(Kn,{size:20}),(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[(0,h.jsx)(re,{w:60,h:3,strong:!0}),(0,h.jsx)(re,{w:40,h:2})]})]})]})}function G2({width:e,height:t}){return(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:t*.08},children:[(0,h.jsx)(re,{w:e*.5,h:Math.max(4,t*.05),strong:!0}),(0,h.jsx)(re,{w:e*.35}),(0,h.jsx)($t,{w:Math.min(140,e*.25),h:Math.min(32,t*.15),radius:6,style:{marginTop:t*.04,background:"var(--agd-bar)"}})]})}function Z2({width:e,height:t}){return(0,h.jsxs)("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[(0,h.jsx)("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:(0,h.jsx)("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),(0,h.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,h.jsx)(re,{w:"40%",h:3,strong:!0}),(0,h.jsx)(re,{w:"70%",h:2})]})]})}function J2({width:e,height:t}){return(0,h.jsxs)("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[(0,h.jsx)(re,{w:e*.4,h:3,strong:!0}),(0,h.jsx)($t,{w:60,h:Math.min(24,t*.6),radius:4})]})}function eb({width:e,height:t}){return(0,h.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:t*.06},children:[(0,h.jsx)(re,{w:e*.5,h:2}),(0,h.jsx)(re,{w:e*.4,h:Math.max(8,t*.18),strong:!0}),(0,h.jsx)(re,{w:e*.3,h:2})]})}function tb({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(e/100))),o=Math.min(12,t*.35);return(0,h.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:n},(r,a)=>(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[(0,h.jsx)("div",{style:{width:o,height:o,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:a===0?"var(--agd-bar)":"transparent",flexShrink:0}}),a<n-1&&(0,h.jsx)("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},a))})}function nb({width:e,height:t}){return(0,h.jsxs)("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[(0,h.jsx)(re,{w:Math.max(16,e*.5),h:2,strong:!0}),(0,h.jsx)("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function ob({width:e,height:t}){let o=Math.min(t*.7,e/7.5);return(0,h.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:o*.2},children:Array.from({length:5},(r,a)=>(0,h.jsx)("svg",{width:o,height:o,viewBox:"0 0 16 16",fill:"none",children:(0,h.jsx)("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:a<3?"var(--agd-bar)":"none"})},a))})}function rb({width:e,height:t}){return(0,h.jsxs)("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[(0,h.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",style:{position:"absolute",inset:0},children:[(0,h.jsx)("line",{x1:0,y1:t*.3,x2:e,y2:t*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),(0,h.jsx)("line",{x1:0,y1:t*.6,x2:e,y2:t*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),(0,h.jsx)("line",{x1:e*.4,y1:0,x2:e*.6,y2:t,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),(0,h.jsx)("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:(0,h.jsxs)("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[(0,h.jsx)("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),(0,h.jsx)("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function ab({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(t/60)));return(0,h.jsxs)("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[(0,h.jsx)("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:n},(o,r)=>(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[(0,h.jsx)(Kn,{size:8}),r<n-1&&(0,h.jsx)("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},r))}),(0,h.jsx)("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:n},(o,r)=>(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,h.jsx)(re,{w:`${35+r*13%25}%`,h:3,strong:!0}),(0,h.jsx)(re,{w:`${50+r*17%30}%`,h:2})]},r))})]})}function ib({width:e,height:t}){return(0,h.jsxs)("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:t*.06},children:[(0,h.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,h.jsx)("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),(0,h.jsx)("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),(0,h.jsx)(re,{w:e*.4,h:2}),(0,h.jsx)(re,{w:e*.25,h:2})]})}function sb({width:e,height:t}){let n=Math.max(3,Math.min(8,Math.floor(t/20)));return(0,h.jsxs)("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[(0,h.jsxs)("div",{style:{display:"flex",gap:3,marginBottom:4},children:[(0,h.jsx)(Kn,{size:6}),(0,h.jsx)(Kn,{size:6}),(0,h.jsx)(Kn,{size:6})]}),Array.from({length:n},(o,r)=>(0,h.jsx)("div",{style:{display:"flex",gap:6,paddingLeft:r>0&&r<n-1?12:0},children:(0,h.jsx)(re,{w:`${25+r*23%50}%`,h:2,strong:r===0})},r))]})}function lb({width:e,height:t}){let r=Math.min((e-16)/7,(t-40)/6);return(0,h.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[(0,h.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"\u2039"}),(0,h.jsx)(re,{w:e*.3,h:3,strong:!0}),(0,h.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"\u203A"})]}),(0,h.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(a,i)=>(0,h.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:r*.6},children:(0,h.jsx)(re,{w:r*.5,h:2})},`h${i}`)),Array.from({length:35},(a,i)=>(0,h.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:r},children:(0,h.jsx)("div",{style:{width:r*.6,height:r*.6,borderRadius:"50%",background:i===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,h.jsx)("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:i===12?1:.3}})})},i))]})]})}function cb({width:e,height:t}){return(0,h.jsxs)("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[(0,h.jsx)(Kn,{size:Math.min(32,t*.55)}),(0,h.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,h.jsx)(re,{w:"50%",h:3,strong:!0}),(0,h.jsx)(re,{w:"75%",h:2})]}),(0,h.jsx)(re,{w:30,h:2})]})}function db({width:e,height:t}){return(0,h.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,h.jsx)("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),(0,h.jsxs)("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[(0,h.jsx)(re,{w:"65%",h:4,strong:!0}),(0,h.jsx)(re,{w:"40%",h:3}),(0,h.jsx)("div",{style:{flex:1}}),(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,h.jsx)(re,{w:"30%",h:5,strong:!0}),(0,h.jsx)($t,{w:Math.min(70,e*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function ub({width:e,height:t}){let n=Math.min(48,t*.3);return(0,h.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:t*.06},children:[(0,h.jsx)(Kn,{size:n}),(0,h.jsx)(re,{w:e*.45,h:4,strong:!0}),(0,h.jsx)(re,{w:e*.3,h:2}),(0,h.jsxs)("div",{style:{display:"flex",gap:e*.08,marginTop:t*.04},children:[(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[(0,h.jsx)(re,{w:20,h:3,strong:!0}),(0,h.jsx)(re,{w:28,h:2})]}),(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[(0,h.jsx)(re,{w:20,h:3,strong:!0}),(0,h.jsx)(re,{w:28,h:2})]}),(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[(0,h.jsx)(re,{w:20,h:3,strong:!0}),(0,h.jsx)(re,{w:28,h:2})]})]})]})}function pb({width:e,height:t}){let n=Math.max(e*.6,80),o=Math.max(3,Math.floor(t/40));return(0,h.jsxs)("div",{style:{height:"100%",display:"flex"},children:[(0,h.jsx)("div",{style:{width:e-n,background:"var(--agd-fill)",opacity:.3}}),(0,h.jsxs)("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:e*.04},children:[(0,h.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:t*.06},children:[(0,h.jsx)(re,{w:n*.4,h:4,strong:!0}),(0,h.jsx)("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:o},(r,a)=>(0,h.jsx)("div",{style:{padding:"6px 0"},children:(0,h.jsx)(re,{w:`${50+a*17%35}%`,h:2,strong:a===0})},a))]})]})}function fb({width:e,height:t}){return(0,h.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,h.jsxs)("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[(0,h.jsx)(re,{w:"70%",h:3,strong:!0}),(0,h.jsx)(re,{w:"90%",h:2}),(0,h.jsx)(re,{w:"60%",h:2})]}),(0,h.jsx)("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function hb({width:e,height:t}){let n=Math.min(t*.7,e*.3);return(0,h.jsxs)("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:e*.08},children:[(0,h.jsx)($t,{w:n,h:n,radius:n*.25}),(0,h.jsx)(re,{w:e*.45,h:Math.max(4,t*.2),strong:!0})]})}function mb({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(t/56)));return(0,h.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:n},(o,r)=>(0,h.jsxs)("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:r===0?2:1},children:[(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,h.jsx)("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),(0,h.jsx)(re,{w:e*(.3+r*13%25/100),h:3,strong:!0})]}),(0,h.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:r===0?"\u25BC":"\u25B6"})]},r))})}function gb({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120))),o=Math.max(1,Math.min(3,Math.floor(t/120)));return(0,h.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${o}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:n*o},(r,a)=>(0,h.jsx)("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:(0,h.jsxs)("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[(0,h.jsx)("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),(0,h.jsx)("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},a))})}function _b({width:e,height:t}){let n=Math.min(e,t);return(0,h.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,h.jsx)("rect",{x:"1",y:(t-n+2)/2,width:n-2,height:n-2,rx:n*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),(0,h.jsx)("path",{d:`M${n*.25} ${t/2}l${n*.2} ${n*.2} ${n*.3}-${n*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function yb({width:e,height:t}){let n=Math.min(e,t)/2-1;return(0,h.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,h.jsx)("circle",{cx:e/2,cy:t/2,r:n,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),(0,h.jsx)("circle",{cx:e/2,cy:t/2,r:n*.45,fill:"var(--agd-bar)"})]})}function xb({width:e,height:t}){let n=Math.max(2,t*.12),o=Math.min(t*.35,10),r=e*.55;return(0,h.jsxs)("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[(0,h.jsx)("div",{style:{width:"100%",height:n,borderRadius:n/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:(0,h.jsx)("div",{style:{width:r,height:"100%",borderRadius:n/2,background:"var(--agd-bar)"}})}),(0,h.jsx)("div",{style:{position:"absolute",left:r-o,width:o*2,height:o*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function vb({width:e,height:t}){let n=Math.min(36,t*.15),o=7,r=4,a=Math.min((e-16)/o,(t-n-40)/(r+1));return(0,h.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[(0,h.jsxs)("div",{style:{height:n,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[(0,h.jsx)(re,{w:"40%",h:2}),(0,h.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[(0,h.jsx)("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,h.jsx)("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),(0,h.jsxs)("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[(0,h.jsx)("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"\u2039"}),(0,h.jsx)(re,{w:e*.25,h:2,strong:!0}),(0,h.jsx)("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"\u203A"})]}),(0,h.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${o}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:o*r},(i,s)=>(0,h.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:a},children:(0,h.jsx)("div",{style:{width:a*.5,height:a*.5,borderRadius:"50%",background:s===10?"var(--agd-bar)":"transparent"},children:(0,h.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,h.jsx)("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:s===10?1:.25}})})})},s))})]})]})}function wb({width:e,height:t}){return(0,h.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:t*.08,padding:4},children:[(0,h.jsx)("div",{style:{width:"100%",height:t*.2,borderRadius:4,background:"var(--agd-fill)"}}),(0,h.jsx)("div",{style:{width:"70%",height:Math.max(6,t*.1),borderRadius:3,background:"var(--agd-fill)"}}),(0,h.jsx)("div",{style:{width:"90%",height:Math.max(4,t*.06),borderRadius:3,background:"var(--agd-fill)"}}),(0,h.jsx)("div",{style:{width:"50%",height:Math.max(4,t*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function bb({width:e,height:t}){return(0,h.jsx)("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:(0,h.jsxs)("div",{style:{height:"100%",flex:1,borderRadius:t/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${t*.3}px`,gap:4},children:[(0,h.jsx)(re,{w:"60%",h:2,strong:!0}),(0,h.jsx)("div",{style:{width:Math.max(6,t*.3),height:Math.max(6,t*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function kb({width:e,height:t}){let n=Math.min(e,t);return(0,h.jsx)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:(0,h.jsx)("path",{d:`M${e/2} ${(t-n)/2+n*.1}l${n*.12} ${n*.25} ${n*.28} ${n*.04}-${n*.2} ${n*.2} ${n*.05} ${n*.28}-${n*.25}-${n*.12}-${n*.25} ${n*.12} ${n*.05}-${n*.28}-${n*.2}-${n*.2} ${n*.28}-${n*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function Cb({width:e,height:t}){let n=Math.min(e,t)/2-2;return(0,h.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,h.jsx)("circle",{cx:e/2,cy:t/2,r:n,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),(0,h.jsx)("path",{d:`M${e/2} ${t/2-n}a${n} ${n} 0 0 1 ${n} ${n}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function Sb({width:e,height:t}){let n=Math.min(36,t*.25,e*.12),o=Math.max(1,Math.min(3,Math.floor(t/80)));return(0,h.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:o},(r,a)=>(0,h.jsxs)("div",{style:{display:"flex",gap:e*.04,alignItems:"flex-start"},children:[(0,h.jsx)($t,{w:n,h:n,radius:n*.25}),(0,h.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[(0,h.jsx)(re,{w:`${40+a*13%20}%`,h:3,strong:!0}),(0,h.jsx)(re,{w:`${60+a*17%25}%`,h:2})]})]},a))})}function Eb({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120))),o=Math.min(36,t*.25);return(0,h.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:t*.06,padding:t*.06},children:[(0,h.jsx)(re,{w:e*.3,h:4,strong:!0}),(0,h.jsx)("div",{style:{display:"flex",gap:e*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:n},(r,a)=>(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[(0,h.jsx)(Kn,{size:o}),(0,h.jsx)(re,{w:e*.12,h:3,strong:!0}),(0,h.jsx)(re,{w:e*.08,h:2})]},a))})]})}function Mb({width:e,height:t}){let n=Math.max(2,Math.min(3,Math.floor(t/80)));return(0,h.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:e*.06,gap:t*.04},children:[(0,h.jsx)(re,{w:e*.5,h:Math.max(5,t*.04),strong:!0}),(0,h.jsx)(re,{w:e*.35,h:2}),(0,h.jsx)("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:t*.03,marginTop:t*.04},children:Array.from({length:n},(o,r)=>(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,h.jsx)(re,{w:Math.min(60,e*.2),h:2}),(0,h.jsx)($t,{w:"100%",h:Math.min(32,t*.1),radius:4})]},r))}),(0,h.jsx)($t,{w:"100%",h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.03,background:"var(--agd-bar)"}}),(0,h.jsx)(re,{w:e*.4,h:2})]})}function Lb({width:e,height:t}){return(0,h.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:e*.04,gap:t*.03},children:[(0,h.jsx)(re,{w:e*.4,h:4,strong:!0}),(0,h.jsx)(re,{w:e*.6,h:2}),(0,h.jsxs)("div",{style:{display:"flex",gap:6,marginTop:t*.03},children:[(0,h.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,h.jsx)(re,{w:50,h:2}),(0,h.jsx)($t,{w:"100%",h:Math.min(28,t*.1),radius:4})]}),(0,h.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,h.jsx)(re,{w:40,h:2}),(0,h.jsx)($t,{w:"100%",h:Math.min(28,t*.1),radius:4})]})]}),(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,h.jsx)(re,{w:50,h:2}),(0,h.jsx)($t,{w:"100%",h:Math.min(28,t*.1),radius:4})]}),(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[(0,h.jsx)(re,{w:60,h:2}),(0,h.jsx)($t,{w:"100%",h:"100%",radius:4})]}),(0,h.jsx)($t,{w:Math.min(120,e*.3),h:Math.min(30,t*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var Tb={navigation:_2,hero:y2,sidebar:x2,footer:v2,modal:w2,card:b2,text:k2,image:C2,table:S2,list:E2,button:M2,input:L2,form:T2,tabs:$2,avatar:I2,badge:P2,header:N2,section:R2,grid:A2,dropdown:D2,toggle:O2,search:B2,toast:z2,progress:F2,chart:H2,video:W2,tooltip:j2,breadcrumb:U2,pagination:V2,divider:Y2,accordion:X2,carousel:q2,pricing:K2,testimonial:Q2,cta:G2,alert:Z2,banner:J2,stat:eb,stepper:tb,tag:nb,rating:ob,map:rb,timeline:ab,fileUpload:ib,codeBlock:sb,calendar:lb,notification:cb,productCard:db,profile:ub,drawer:pb,popover:fb,logo:hb,faq:mb,gallery:gb,checkbox:_b,radio:yb,slider:xb,datePicker:vb,skeleton:wb,chip:bb,icon:kb,spinner:Cb,feature:Sb,team:Eb,login:Mb,contact:Lb};function $b({type:e,width:t,height:n,text:o}){let r=Tb[e];return r?(0,h.jsx)("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:(0,h.jsx)(r,{width:t,height:n,text:o})}):(0,h.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,h.jsx)("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:e})})}var Ib=`svg[fill=none] {
  fill: none !important;
}

.styles-module__overlayExiting___iEmYr {
  opacity: 0 !important;
  transition: opacity 0.25s ease !important;
  pointer-events: none !important;
}

.styles-module__overlay___aWh-q {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: auto;
  cursor: default;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
  --agd-stroke: rgba(59, 130, 246, 0.35);
  --agd-fill: rgba(59, 130, 246, 0.06);
  --agd-bar: rgba(59, 130, 246, 0.18);
  --agd-bar-strong: rgba(59, 130, 246, 0.28);
  --agd-text-3: rgba(255, 255, 255, 0.6);
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q.styles-module__light___ORIft {
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) {
  --agd-surface: #141414;
}
.styles-module__overlay___aWh-q.styles-module__wireframe___itvQU {
  --agd-stroke: rgba(249, 115, 22, 0.35);
  --agd-fill: rgba(249, 115, 22, 0.06);
  --agd-bar: rgba(249, 115, 22, 0.18);
  --agd-bar-strong: rgba(249, 115, 22, 0.28);
}
.styles-module__overlay___aWh-q.styles-module__placing___45yD8 {
  cursor: crosshair;
}
.styles-module__overlay___aWh-q.styles-module__passthrough___xaFeE {
  pointer-events: none;
}

.styles-module__blankCanvas___t2Eue {
  position: fixed;
  inset: 0;
  z-index: 99994;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__visible___OKKqX {
  opacity: var(--canvas-opacity, 1);
  pointer-events: auto;
}
.styles-module__blankCanvas___t2Eue::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: 12px 12px;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__gridActive___OZ-cf::after {
  opacity: 1;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.22) 1px, transparent 1px);
}

.styles-module__paletteHeader___-Q5gQ {
  padding: 0 1rem 0.375rem;
}

.styles-module__paletteHeaderTitle___oHqZC {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.0094em;
}
.styles-module__light___ORIft .styles-module__paletteHeaderTitle___oHqZC {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__paletteHeaderDesc___6i74T {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T {
  color: rgba(0, 0, 0, 0.45);
}
.styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__paletteHeaderDesc___6i74T a:hover {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__wireframePurposeWrap___To-tS {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__wireframePurposeWrap___To-tS.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__wireframePurposeInner___Lrahs {
  overflow: hidden;
}

.styles-module__wireframePurposeInput___7EtBN {
  display: block;
  width: calc(100% - 2rem);
  margin: 0.25rem 1rem 0.375rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.8125rem;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN {
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.1);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__canvasToggle___-QqSy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin: 0.25rem 1rem 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.styles-module__canvasToggle___-QqSy:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
}
.styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy {
  border-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy:hover {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}

.styles-module__canvasToggleIcon___7pJ82 {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__light___ORIft .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__canvasToggleLabel___OanpY {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -0.0094em;
}
.styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__canvasToggleLabel___OanpY {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}

.styles-module__canvasPurposeWrap___hj6zk {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__canvasPurposeWrap___hj6zk.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__canvasPurposeInner___VWiyu {
  overflow: hidden;
}

.styles-module__canvasPurposeToggle___byDH2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin: 0.375rem 1rem 0.375rem 1.1875rem;
}
.styles-module__canvasPurposeToggle___byDH2 input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.styles-module__canvasPurposeCheck___xqd7l {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.styles-module__canvasPurposeCheck___xqd7l svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
.styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH svg {
  color: #fff;
}

.styles-module__canvasPurposeLabel___Zu-tD {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.styles-module__light___ORIft .styles-module__canvasPurposeLabel___Zu-tD {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__canvasPurposeHelp___jijwR {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
}
.styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(255, 255, 255, 0.2);
  transform: translateY(2px);
  transition: color 0.15s ease;
}
.styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__placement___zcxv8 {
  position: absolute;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.08);
  cursor: grab;
  transition: box-shadow 0.15s, border-color 0.15s, opacity 0.15s ease, transform 0.15s ease;
  user-select: none;
  pointer-events: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  animation: styles-module__placementEnter___TdRhf 0.25s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.styles-module__placement___zcxv8:active {
  cursor: grabbing;
}
.styles-module__placement___zcxv8:hover {
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #3c82f7;
  border-style: solid;
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8 {
  border-color: rgba(249, 115, 22, 0.4);
  background: rgba(249, 115, 22, 0.08);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8:hover {
  border-color: rgba(249, 115, 22, 0.5);
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__placement___zcxv8.styles-module__dragging___le6KZ {
  opacity: 0.85;
  z-index: 50;
}
.styles-module__placement___zcxv8.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__placementContent___f64A4 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.styles-module__placementLabel___0KvWl {
  position: absolute;
  top: -18px;
  left: 0;
  font-size: 10px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.7);
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.5);
}
.styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__placementLabel___0KvWl {
  color: rgba(249, 115, 22, 0.7);
}
.styles-module__wireframe___itvQU .styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #f97316;
}

.styles-module__placementAnnotation___78pTr {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__placementAnnotation___78pTr.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__sectionAnnotation___aUIs0 {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(59, 130, 246, 0.6);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__sectionAnnotation___aUIs0.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__handle___Ikbxm {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1.5px solid #3c82f7;
  border-radius: 2px;
  z-index: 12;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: scale(0.3);
  pointer-events: none;
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.styles-module__placement___zcxv8:hover .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:hover .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:hover .styles-module__handle___Ikbxm, .styles-module__placement___zcxv8:active .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:active .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:active .styles-module__handle___Ikbxm, .styles-module__selected___6yrp6 .styles-module__handle___Ikbxm {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__sectionOutline___s0hy- .styles-module__handle___Ikbxm {
  border-color: inherit;
}
.styles-module__wireframe___itvQU .styles-module__handle___Ikbxm {
  border-color: #f97316;
}

.styles-module__handleNw___4TMIj {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}

.styles-module__handleNe___mnsTh {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}

.styles-module__handleSe___oSFnk {
  bottom: -4px;
  right: -4px;
  cursor: se-resize;
}

.styles-module__handleSw___pi--Z {
  bottom: -4px;
  left: -4px;
  cursor: sw-resize;
}

.styles-module__handleN___aBA-Q, .styles-module__handleE___0hM5u, .styles-module__handleS___JjDRv, .styles-module__handleW___ERWGQ {
  opacity: 0 !important;
  pointer-events: none !important;
}

.styles-module__edgeHandle___XxXdT {
  position: absolute;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__edgeHandle___XxXdT::after {
  content: "";
  position: absolute;
  border-radius: 4px;
  background: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__edgeHandle___XxXdT::after {
  background: #f97316;
}
.styles-module__edgeHandle___XxXdT::after {
  opacity: 0;
  transition: opacity 0.1s ease, transform 0.1s ease;
  transform: scale(0.8);
}
.styles-module__edgeHandle___XxXdT:hover::after {
  opacity: 0.85;
  transform: scale(1);
}
.styles-module__edgeHandle___XxXdT svg {
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.1s ease;
  filter: drop-shadow(0 0 2px var(--agd-surface));
}
.styles-module__edgeHandle___XxXdT:hover svg {
  opacity: 1;
}

.styles-module__edgeN___-JJDj, .styles-module__edgeS___66lMX {
  left: 12px;
  right: 12px;
  height: 12px;
  cursor: n-resize;
}
.styles-module__edgeN___-JJDj::after, .styles-module__edgeS___66lMX::after {
  width: 24px;
  height: 4px;
}

.styles-module__edgeN___-JJDj {
  top: -6px;
}

.styles-module__edgeS___66lMX {
  bottom: -6px;
  cursor: s-resize;
}

.styles-module__edgeE___1bGDa, .styles-module__edgeW___lHQNo {
  top: 12px;
  bottom: 12px;
  width: 12px;
  cursor: e-resize;
}
.styles-module__edgeE___1bGDa::after, .styles-module__edgeW___lHQNo::after {
  width: 4px;
  height: 24px;
}

.styles-module__edgeE___1bGDa {
  right: -6px;
}

.styles-module__edgeW___lHQNo {
  left: -6px;
  cursor: w-resize;
}

.styles-module__deleteButton___LkGCb {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  z-index: 15;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.12s ease, color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}
.styles-module__placement___zcxv8:hover .styles-module__deleteButton___LkGCb, .styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-:hover .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO:hover .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
  box-shadow: 0 1px 4px rgba(239, 68, 68, 0.3);
  transform: scale(1.1);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb {
  background: rgba(40, 40, 40, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}

.styles-module__drawBox___BrVAa {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 2px solid #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.15);
}

.styles-module__selectBox___Iu8kB {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 1px dashed #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  border-radius: 2px;
}

.styles-module__sizeIndicator___7zJ4y {
  position: fixed;
  pointer-events: none;
  z-index: 100001;
  font-size: 10px;
  color: #fff;
  background: #3c82f7;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.styles-module__guideLine___DUQY2 {
  pointer-events: none;
  z-index: 100001;
  background: #f0f;
  opacity: 0.5;
}

.styles-module__dragPreview___onPbU {
  position: fixed;
  z-index: 100002;
  pointer-events: none;
  border: 1.5px dashed #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  color: #3c82f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
  transition: width 0.08s ease, height 0.08s ease, opacity 0.08s ease;
}

.styles-module__dragPreviewWireframe___jsg0G {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.15);
}

.styles-module__palette___C7iSH {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  width: 256px;
  overflow: hidden;
  background: #1c1c1c;
  border: none;
  border-radius: 1rem;
  padding: 13px 0 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 100001;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  cursor: default;
  opacity: 0;
  filter: blur(5px);
}
.styles-module__palette___C7iSH .styles-module__paletteItem___6TlnA,
.styles-module__palette___C7iSH .styles-module__paletteItemLabel___6ncO4,
.styles-module__palette___C7iSH .styles-module__paletteSectionTitle___PqnjX,
.styles-module__palette___C7iSH .styles-module__paletteFooter___QYnAG {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__palette___C7iSH.styles-module__enter___6LYk5 {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__palette___C7iSH.styles-module__exit___iSGRw {
  opacity: 0;
  transform: translateY(6px);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
.styles-module__palette___C7iSH.styles-module__light___ORIft {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.styles-module__paletteSection___V8DEA {
  padding: 0 1rem;
}
.styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteSectionTitle___PqnjX {
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  padding: 0 0 3px 3px;
}
.styles-module__light___ORIft .styles-module__paletteSectionTitle___PqnjX {
  color: rgba(0, 0, 0, 0.4);
}

.styles-module__paletteItem___6TlnA {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.25rem;
  margin-bottom: 1px;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  border: 1px solid transparent;
  user-select: none;
  min-height: 24px;
}
.styles-module__paletteItem___6TlnA:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}

.styles-module__paletteItemIcon___0NPQK {
  width: 20px;
  height: 16px;
  border-radius: 2px;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.45);
}
.styles-module__paletteItemIcon___0NPQK svg {
  display: block;
  width: 20px;
  height: 16px;
}
.styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__paletteItemLabel___6ncO4 {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.0094em;
  line-height: 1;
  min-width: 0;
}
.styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}
.styles-module__light___ORIft .styles-module__paletteItemLabel___6ncO4 {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}

.styles-module__placeScroll___7sClM {
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0.25rem;
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px);
}
.styles-module__placeScroll___7sClM.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar {
  width: 3px;
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 2px;
}
.styles-module__light___ORIft .styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}

.styles-module__paletteFooterWrap___71-fI {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__paletteFooterWrap___71-fI.styles-module__footerHidden___fJUik {
  grid-template-rows: 0fr;
}

.styles-module__paletteFooterInnerContent___VC26h {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__footerHidden___fJUik .styles-module__paletteFooterInnerContent___VC26h {
  opacity: 0;
  transform: translateY(4px);
}

.styles-module__paletteFooterInner___dfylY {
  overflow: hidden;
}

.styles-module__paletteFooter___QYnAG {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  padding: 0 1rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteFooter___QYnAG {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteFooterCount___D3Fia {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterCount___D3Fia {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__paletteFooterClear___ybBoa {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.15s ease;
}
.styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__paletteFooterActions___fLzv8 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.styles-module__rollingWrap___S75jM {
  display: inline-block;
  overflow: hidden;
  height: 1.15em;
  position: relative;
  vertical-align: bottom;
}

.styles-module__rollingNum___1RKDx {
  position: absolute;
  left: 0;
  top: 0;
}

.styles-module__exitUp___AFDRW {
  animation: styles-module__numExitUp___FRQqx 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterUp___CPlXb {
  animation: styles-module__numEnterUp___2Yd-w 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__exitDown___-1yAy {
  animation: styles-module__numExitDown___xm5by 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterDown___DDuFR {
  animation: styles-module__numEnterDown___hpxBk 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

@keyframes styles-module__numExitUp___FRQqx {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterUp___2Yd-w {
  from {
    transform: translateY(110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes styles-module__numExitDown___xm5by {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterDown___hpxBk {
  from {
    transform: translateY(-110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.styles-module__rearrangeOverlay___-3R3t {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: none;
  cursor: default;
  user-select: none;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
}

.styles-module__hoverHighlight___8eT-v {
  position: fixed;
  pointer-events: none;
  z-index: 99994;
  border: 2px dashed rgba(59, 130, 246, 0.5);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.06);
  animation: styles-module__highlightFadeIn___Lg7KY 0.12s ease;
}

.styles-module__sectionOutline___s0hy- {
  position: fixed;
  border: 2px solid;
  border-radius: 4px;
  cursor: grab;
}
.styles-module__sectionOutline___s0hy-:active {
  cursor: grabbing;
}
.styles-module__sectionOutline___s0hy- {
  transition: box-shadow 0.15s, border-color 0.3s, background-color 0.3s, border-style 0s;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}
.styles-module__sectionOutline___s0hy-:hover {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 {
  border-style: solid;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) {
  border: 1.5px dashed rgba(150, 150, 150, 0.35);
  background-color: transparent !important;
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover {
  border-color: rgba(150, 150, 150, 0.6);
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionLabel___F80HQ {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionLabel___F80HQ {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__movedBadge___s8z-q,
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionDimensions___RcJSL {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionDimensions___RcJSL {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__sectionLabel___F80HQ {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  max-width: calc(100% - 8px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__movedBadge___s8z-q {
  position: absolute;
  bottom: 22px;
  right: 4px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  background: #22c55e;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__movedBadge___s8z-q.styles-module__badgeVisible___npbdS {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s cubic-bezier(0.34, 1.2, 0.64, 1), transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.styles-module__resizedBadge___u51V8 {
  background: #3c82f7;
  bottom: 40px;
}

.styles-module__sectionDimensions___RcJSL {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.styles-module__light___ORIft .styles-module__sectionDimensions___RcJSL {
  color: rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.7);
}

.styles-module__wireframeNotice___4GJyB {
  position: fixed;
  bottom: 16px;
  left: 24px;
  z-index: 99995;
  font-size: 9.5px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: auto;
  animation: styles-module__overlayFadeIn___aECVy 0.3s ease;
  line-height: 1.5;
  max-width: 280px;
}

.styles-module__wireframeOpacityRow___CJXzi {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.styles-module__wireframeOpacityLabel___afkfT {
  font-size: 9px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.32);
  letter-spacing: 0.02em;
  white-space: nowrap;
  user-select: none;
}

.styles-module__wireframeOpacitySlider___YcoEs {
  -webkit-appearance: none;
  appearance: none;
  width: 56px;
  height: 4px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs:hover {
  background: rgba(0, 0, 0, 0.13);
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  cursor: pointer;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb:hover {
  background: rgb(224.4209205021, 95.3548117155, 5.7790794979);
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-thumb {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  border: none;
  cursor: pointer;
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-track {
  background: rgba(0, 0, 0, 0.08);
  height: 4px;
  border-radius: 2px;
}

.styles-module__wireframeNoticeTitleRow___PJqyG {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2px;
}

.styles-module__wireframeNoticeTitle___okr08 {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
}

.styles-module__wireframeNoticeDivider___PNKQ6 {
  width: 1px;
  height: 8px;
  background: rgba(0, 0, 0, 0.12);
  margin: 0 8px;
  flex-shrink: 0;
}

.styles-module__wireframeStartOver___YFk-I {
  font-size: 9.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  text-decoration: none;
  transition: color 0.12s ease;
  white-space: nowrap;
}
.styles-module__wireframeStartOver___YFk-I:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__ghostOutline___po-kO {
  position: fixed;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.04);
  cursor: grab;
  opacity: 0.5;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__ghostEnter___EC3Mb 0.25s ease;
  transition: box-shadow 0.15s, border-color 0.3s, opacity 0.25s;
}
.styles-module__ghostOutline___po-kO:active {
  cursor: grabbing;
}
.styles-module__ghostOutline___po-kO:hover {
  opacity: 0.7;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 {
  opacity: 1;
  border-style: solid;
  border-width: 2px;
  border-color: #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__ghostOutline___po-kO.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__ghostBadge___tsQUK {
  position: absolute;
  bottom: calc(100% + 4px);
  left: -1px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.9);
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.2;
  animation: styles-module__badgeSlideIn___typJ7 0.2s ease both;
}

@keyframes styles-module__badgeSlideIn___typJ7 {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__ghostBadgeExtra___6CVoD {
  display: inline;
  animation: styles-module__badgeExtraIn___i4W8F 0.2s ease both;
}

@keyframes styles-module__badgeExtraIn___i4W8F {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.styles-module__originalOutline___Y6DD1 {
  position: fixed;
  border: 1.5px dashed rgba(150, 150, 150, 0.3);
  border-radius: 4px;
  background: transparent;
  pointer-events: none;
  user-select: none;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}

.styles-module__originalLabel___HqI9g {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(150, 150, 150, 0.5);
  padding: 1px 6px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: rgba(150, 150, 150, 0.08);
}

.styles-module__connectorSvg___Lovld {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__connectorLine___XeWh- {
  transition: opacity 0.2s ease;
  animation: styles-module__connectorDraw___8sK5I 0.3s ease both;
}

.styles-module__connectorDot___yvf7C {
  transform-box: fill-box;
  transform-origin: center;
  animation: styles-module__connectorDotIn___NwTUq 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
}

@keyframes styles-module__connectorDraw___8sK5I {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__connectorDotIn___NwTUq {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.styles-module__connectorExiting___2lLOs {
  animation: styles-module__connectorOut___5QoPl 0.2s ease forwards;
}
.styles-module__connectorExiting___2lLOs .styles-module__connectorDot___yvf7C {
  animation: styles-module__connectorDotOut___FEq7e 0.2s ease forwards;
}

@keyframes styles-module__connectorOut___5QoPl {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__connectorDotOut___FEq7e {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes styles-module__placementEnter___TdRhf {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__sectionEnter___-8BXT {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__highlightFadeIn___Lg7KY {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__overlayFadeIn___aECVy {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__ghostEnter___EC3Mb {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 0.6;
    transform: scale(1);
  }
}`,Pb={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-design-mode-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(e)),e.textContent=Ib}var G=Pb,Mi=24,dd=5;function cy(e,t,n,o,r){let a=1/0,i=1/0,s=e.x,l=e.x+e.width,c=e.x+e.width/2,u=e.y,p=e.y+e.height,d=e.y+e.height/2,y=!o,_=y?[s,l,c]:[...o.left?[s]:[],...o.right?[l]:[]],C=y?[u,p,d]:[...o.top?[u]:[],...o.bottom?[p]:[]],v=[];for(let he of t)n.has(he.id)||v.push(he);r&&v.push(...r);for(let he of v){let K=he.x,P=he.x+he.width,q=he.x+he.width/2,le=he.y,me=he.y+he.height,Ce=he.y+he.height/2;for(let B of _)for(let Y of[K,P,q]){let Se=Y-B;Math.abs(Se)<dd&&Math.abs(Se)<Math.abs(a)&&(a=Se)}for(let B of C)for(let Y of[le,me,Ce]){let Se=Y-B;Math.abs(Se)<dd&&Math.abs(Se)<Math.abs(i)&&(i=Se)}}let m=Math.abs(a)<dd?a:0,g=Math.abs(i)<dd?i:0,E=[],I=new Set,D=s+m,oe=l+m,z=c+m,Z=u+g,ge=p+g,te=d+g;for(let he of v){let K=he.x,P=he.x+he.width,q=he.x+he.width/2,le=he.y,me=he.y+he.height,Ce=he.y+he.height/2;for(let B of[K,q,P])for(let Y of[D,z,oe])if(Math.abs(Y-B)<.5){let Se=`x:${Math.round(B)}`;I.has(Se)||(I.add(Se),E.push({axis:"x",pos:B}))}for(let B of[le,Ce,me])for(let Y of[Z,te,ge])if(Math.abs(Y-B)<.5){let Se=`y:${Math.round(B)}`;I.has(Se)||(I.add(Se),E.push({axis:"y",pos:B}))}}return{dx:m,dy:g,guides:E}}function dy(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function Nb({placements:e,onChange:t,activeComponent:n,onActiveComponentChange:o,isDarkMode:r,exiting:a,onInteractionChange:i,className:s,passthrough:l,extraSnapRects:c,onSelectionChange:u,deselectSignal:p,onDragMove:d,onDragEnd:y,clearSignal:_,wireframe:C}){let[v,m]=(0,bt.useState)(new Set),[g,E]=(0,bt.useState)(null),[I,D]=(0,bt.useState)(null),[oe,z]=(0,bt.useState)(null),[Z,ge]=(0,bt.useState)([]),[te,he]=(0,bt.useState)(null),[K,P]=(0,bt.useState)(!1),q=(0,bt.useRef)(!1),[le,me]=(0,bt.useState)(new Set),Ce=(0,bt.useRef)(new Map),B=(0,bt.useRef)(null),Y=(0,bt.useRef)(null),Se=(0,bt.useRef)(e);Se.current=e;let nt=(0,bt.useRef)(u);nt.current=u;let ht=(0,bt.useRef)(d);ht.current=d;let We=(0,bt.useRef)(y);We.current=y;let ut=(0,bt.useRef)(p);(0,bt.useEffect)(()=>{p!==ut.current&&(ut.current=p,m(new Set))},[p]);let pt=(0,bt.useRef)(_);(0,bt.useEffect)(()=>{if(_!==void 0&&_!==pt.current){pt.current=_;let de=new Set(Se.current.map(ze=>ze.id));de.size>0&&(me(de),m(new Set),Y.current=null,Qe(()=>{t([]),me(new Set)},180))}},[_,t]),(0,bt.useEffect)(()=>{let de=ze=>{let R=ze.target;if(!(R.tagName==="INPUT"||R.tagName==="TEXTAREA"||R.isContentEditable)){if((ze.key==="Backspace"||ze.key==="Delete")&&v.size>0){ze.preventDefault();let V=new Set(v);me(V),m(new Set),Qe(()=>{t(Se.current.filter(be=>!V.has(be.id))),me(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(ze.key)&&v.size>0){ze.preventDefault();let V=ze.shiftKey?20:1,be=ze.key==="ArrowLeft"?-V:ze.key==="ArrowRight"?V:0,fe=ze.key==="ArrowUp"?-V:ze.key==="ArrowDown"?V:0;t(e.map(Pe=>v.has(Pe.id)?{...Pe,x:Math.max(0,Pe.x+be),y:Math.max(0,Pe.y+fe)}:Pe));return}if(ze.key==="Escape"){n?o(null):v.size>0&&m(new Set);return}}};return document.addEventListener("keydown",de),()=>document.removeEventListener("keydown",de)},[v,n,e,t,o]);let Ze=(0,bt.useCallback)(de=>{if(de.button!==0||l||de.target.closest(`.${G.placement}`))return;de.preventDefault(),de.stopPropagation();let R=window.scrollY,A=de.clientX,V=de.clientY;if(n){Y.current="place",i?.(!0);let be=!1,fe=A,Pe=V,Ee=w=>{fe=w.clientX,Pe=w.clientY;let M=Math.abs(fe-A),H=Math.abs(Pe-V);if((M>5||H>5)&&(be=!0),be){let W=Math.min(A,fe),X=Math.min(V,Pe),ee=Math.abs(fe-A),U=Math.abs(Pe-V);E({x:W,y:X,w:ee,h:U}),z({x:w.clientX+12,y:w.clientY+12,text:`${Math.round(ee)} \xD7 ${Math.round(U)}`})}},xe=w=>{window.removeEventListener("mousemove",Ee),window.removeEventListener("mouseup",xe),E(null),z(null),Y.current=null,i?.(!1);let M=Te[n],H,W,X,ee;be?(H=Math.min(A,fe),W=Math.min(V,Pe)+R,X=Math.max(Mi,Math.abs(fe-A)),ee=Math.max(Mi,Math.abs(Pe-V))):(X=M.width,ee=M.height,H=A-X/2,W=V+R-ee/2),H=Math.max(0,H),W=Math.max(0,W);let U={id:dy(),type:n,x:H,y:W,width:X,height:ee,scrollY:R,timestamp:Date.now()},ue=[...e,U];t(ue),m(new Set([U.id])),o(null)};window.addEventListener("mousemove",Ee),window.addEventListener("mouseup",xe)}else{de.shiftKey||m(new Set),Y.current="select";let be=!1,fe=Ee=>{let xe=Math.abs(Ee.clientX-A),w=Math.abs(Ee.clientY-V);if((xe>4||w>4)&&(be=!0),be){let M=Math.min(A,Ee.clientX),H=Math.min(V,Ee.clientY);D({x:M,y:H,w:Math.abs(Ee.clientX-A),h:Math.abs(Ee.clientY-V)})}},Pe=Ee=>{if(window.removeEventListener("mousemove",fe),window.removeEventListener("mouseup",Pe),Y.current=null,be){let xe=Math.min(A,Ee.clientX),w=Math.min(V,Ee.clientY)+R,M=Math.abs(Ee.clientX-A),H=Math.abs(Ee.clientY-V),W=new Set(de.shiftKey?v:new Set);for(let X of e){let ee=X.y-R;X.x+X.width>xe&&X.x<xe+M&&X.y+X.height>w&&X.y<w+H&&W.add(X.id)}m(W)}D(null)};window.addEventListener("mousemove",fe),window.addEventListener("mouseup",Pe)}},[n,l,e,t,v]),kt=(0,bt.useCallback)((de,ze)=>{if(de.button!==0)return;let R=de.target;if(R.closest(`.${G.handle}`)||R.closest(`.${G.deleteButton}`))return;de.preventDefault(),de.stopPropagation();let A;de.shiftKey?(A=new Set(v),A.has(ze)?A.delete(ze):A.add(ze)):v.has(ze)?A=new Set(v):A=new Set([ze]),m(A),(A.size!==v.size||[...A].some(ue=>!v.has(ue)))&&nt.current?.(A,de.shiftKey);let be=window.scrollY,fe=de.clientX,Pe=de.clientY,Ee=new Map;for(let ue of e)A.has(ue.id)&&Ee.set(ue.id,{x:ue.x,y:ue.y});Y.current="move",i?.(!0);let xe=!1,w=!1,M=e,H=0,W=0,X=new Map;for(let ue of e)Ee.has(ue.id)&&X.set(ue.id,{w:ue.width,h:ue.height});let ee=ue=>{let ne=ue.clientX-fe,Ne=ue.clientY-Pe;if((Math.abs(ne)>2||Math.abs(Ne)>2)&&(xe=!0),!xe)return;if(ue.altKey&&!w){w=!0;let Xe=[];for(let xt of e)Ee.has(xt.id)&&Xe.push({...xt,id:dy(),timestamp:Date.now()});M=[...e,...Xe]}let Me=1/0,ke=1/0,Ue=-1/0,at=-1/0;for(let[Xe,xt]of Ee){let fn=X.get(Xe);fn&&(Me=Math.min(Me,xt.x+ne),ke=Math.min(ke,xt.y+Ne),Ue=Math.max(Ue,xt.x+ne+fn.w),at=Math.max(at,xt.y+Ne+fn.h))}let Fe={x:Me,y:ke,width:Ue-Me,height:at-ke},{dx:ie,dy:st,guides:Ge}=cy(Fe,M,new Set(Ee.keys()),void 0,c);ge(Ge);let Je=ne+ie,ft=Ne+st;H=Je,W=ft,t(M.map(Xe=>{let xt=Ee.get(Xe.id);return xt?{...Xe,x:Math.max(0,xt.x+Je),y:Math.max(0,xt.y+ft)}:Xe})),ht.current?.(Je,ft)},U=()=>{window.removeEventListener("mousemove",ee),window.removeEventListener("mouseup",U),Y.current=null,i?.(!1),ge([]),We.current?.(H,W,xe)};window.addEventListener("mousemove",ee),window.addEventListener("mouseup",U)},[v,e,t,i]),Et=(0,bt.useCallback)((de,ze,R)=>{de.preventDefault(),de.stopPropagation();let A=e.find(W=>W.id===ze);if(!A)return;m(new Set([ze])),Y.current="resize",i?.(!0);let V=de.clientX,be=de.clientY,fe=A.width,Pe=A.height,Ee=A.x,xe=A.y,w={left:R.includes("w"),right:R.includes("e"),top:R.includes("n"),bottom:R.includes("s")},M=W=>{let X=W.clientX-V,ee=W.clientY-be,U=fe,ue=Pe,ne=Ee,Ne=xe;R.includes("e")&&(U=Math.max(Mi,fe+X)),R.includes("w")&&(U=Math.max(Mi,fe-X),ne=Ee+fe-U),R.includes("s")&&(ue=Math.max(Mi,Pe+ee)),R.includes("n")&&(ue=Math.max(Mi,Pe-ee),Ne=xe+Pe-ue);let Me={x:ne,y:Ne,width:U,height:ue},{dx:ke,dy:Ue,guides:at}=cy(Me,Se.current,new Set([ze]),w,c);ge(at),ke!==0&&(w.right?U+=ke:w.left&&(ne+=ke,U-=ke)),Ue!==0&&(w.bottom?ue+=Ue:w.top&&(Ne+=Ue,ue-=Ue)),t(Se.current.map(Fe=>Fe.id===ze?{...Fe,x:ne,y:Ne,width:U,height:ue}:Fe)),z({x:W.clientX+12,y:W.clientY+12,text:`${Math.round(U)} \xD7 ${Math.round(ue)}`})},H=()=>{window.removeEventListener("mousemove",M),window.removeEventListener("mouseup",H),z(null),Y.current=null,i?.(!1),ge([])};window.addEventListener("mousemove",M),window.addEventListener("mouseup",H)},[e,t,i]),it=(0,bt.useCallback)(de=>{Y.current=null,me(ze=>{let R=new Set(ze);return R.add(de),R}),m(ze=>{let R=new Set(ze);return R.delete(de),R}),Qe(()=>{t(Se.current.filter(ze=>ze.id!==de)),me(ze=>{let R=new Set(ze);return R.delete(de),R})},180)},[t]),ct=new Set(["text","hero","button","badge","cta","toast","modal","card","navigation","tabs","input","search","breadcrumb","pricing","testimonial","alert","banner","tag","notification","stat","productCard"]),Wt={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},Xt=(0,bt.useCallback)(de=>{let ze=e.find(R=>R.id===de);ze&&(q.current=!!ze.text,he(de),P(!1))},[e]),je=(0,bt.useCallback)(()=>{te&&(P(!0),Qe(()=>{he(null),P(!1)},150))},[te]);(0,bt.useEffect)(()=>{a&&te&&je()},[a]);let Ye=(0,bt.useCallback)(de=>{te&&(t(e.map(ze=>ze.id===te?{...ze,text:de.trim()||void 0}:ze)),je())},[te,e,t,je]),pn=typeof window<"u"?window.scrollY:0,Bt=["nw","ne","se","sw"],Be=C?"#f97316":"#3c82f7",De=[{dir:"n",cls:G.edgeN,arrow:(0,Ot.jsx)("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:(0,Ot.jsx)("path",{d:"M4 0.5L1 4.5h6z",fill:Be})})},{dir:"e",cls:G.edgeE,arrow:(0,Ot.jsx)("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:(0,Ot.jsx)("path",{d:"M5.5 4L1.5 1v6z",fill:Be})})},{dir:"s",cls:G.edgeS,arrow:(0,Ot.jsx)("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:(0,Ot.jsx)("path",{d:"M4 5.5L1 1.5h6z",fill:Be})})},{dir:"w",cls:G.edgeW,arrow:(0,Ot.jsx)("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:(0,Ot.jsx)("path",{d:"M0.5 4L4.5 1v6z",fill:Be})})}];return(0,Ot.jsxs)(Ot.Fragment,{children:[(0,Ot.jsx)("div",{ref:B,className:`${G.overlay} ${r?"":G.light} ${n?G.placing:""} ${l?G.passthrough:""} ${a?G.overlayExiting:""} ${C?G.wireframe:""}${s?` ${s}`:""}`,"data-feedback-toolbar":!0,onMouseDown:Ze,children:e.map(de=>{let ze=v.has(de.id),R=Wo[de.type]?.label||de.type,A=de.y-pn;return(0,Ot.jsxs)("div",{"data-design-placement":de.id,className:`${G.placement} ${ze?G.selected:""} ${le.has(de.id)?G.exiting:""}`,style:{left:de.x,top:A,width:de.width,height:de.height,position:"fixed"},onMouseDown:V=>kt(V,de.id),onDoubleClick:()=>Xt(de.id),children:[(0,Ot.jsx)("span",{className:G.placementLabel,children:R}),(0,Ot.jsx)("span",{className:`${G.placementAnnotation} ${de.text?G.annotationVisible:""}`,children:(de.text&&Ce.current.set(de.id,de.text),de.text||Ce.current.get(de.id)||"")}),(0,Ot.jsx)("div",{className:G.placementContent,children:(0,Ot.jsx)($b,{type:de.type,width:de.width,height:de.height,text:de.text})}),(0,Ot.jsx)("div",{className:G.deleteButton,onMouseDown:V=>V.stopPropagation(),onClick:()=>it(de.id),children:"\u2715"}),Bt.map(V=>(0,Ot.jsx)("div",{className:`${G.handle} ${G[`handle${V.charAt(0).toUpperCase()}${V.slice(1)}`]}`,onMouseDown:be=>Et(be,de.id,V)},V)),De.map(({dir:V,cls:be,arrow:fe})=>(0,Ot.jsx)("div",{className:`${G.edgeHandle} ${be}`,onMouseDown:Pe=>Et(Pe,de.id,V),children:fe},V))]},de.id)})}),te&&(()=>{let de=e.find(xe=>xe.id===te);if(!de)return null;let ze=de.y-pn,R=de.x+de.width/2,A=ze-8,V=ze+de.height+8,be=A>200,fe=V<window.innerHeight-100,Pe=Math.max(160,Math.min(window.innerWidth-160,R)),Ee;return be?Ee={left:Pe,bottom:window.innerHeight-A}:fe?Ee={left:Pe,top:V}:Ee={left:Pe,top:Math.max(80,window.innerHeight/2-80)},(0,Ot.jsx)(bd,{element:Wo[de.type]?.label||de.type,placeholder:Wt[de.type]||"Label or content text",initialValue:de.text??"",submitLabel:q.current?"Save":"Set",onSubmit:Ye,onCancel:je,onDelete:q.current?()=>{Ye("")}:void 0,isExiting:K,lightMode:!r,style:Ee})})(),g&&(0,Ot.jsx)("div",{className:G.drawBox,style:{left:g.x,top:g.y,width:g.w,height:g.h},"data-feedback-toolbar":!0}),I&&(0,Ot.jsx)("div",{className:G.selectBox,style:{left:I.x,top:I.y,width:I.w,height:I.h},"data-feedback-toolbar":!0}),oe&&(0,Ot.jsx)("div",{className:G.sizeIndicator,style:{left:oe.x,top:oe.y},"data-feedback-toolbar":!0,children:oe.text}),Z.map((de,ze)=>(0,Ot.jsx)("div",{className:G.guideLine,style:de.axis==="x"?{position:"fixed",left:de.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:de.pos-pn,right:0,height:1},"data-feedback-toolbar":!0},`${de.axis}-${de.pos}-${ze}`))]})}function Rb(e){if(!e)return"";let t=e.scrollTop>2,n=e.scrollTop+e.clientHeight<e.scrollHeight-2;return`${t?G.fadeTop:""} ${n?G.fadeBottom:""}`}var b="currentColor",Q="0.5";function Ab({type:e}){switch(e){case"navigation":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:b,opacity:".4"}),(0,f.jsx)("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:b,opacity:".25"}),(0,f.jsx)("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:b,opacity:".25"})]});case"header":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:b,opacity:".35"}),(0,f.jsx)("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:b,opacity:".15"})]});case"hero":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:b,opacity:".35"}),(0,f.jsx)("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:b,opacity:".15"}),(0,f.jsx)("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:b,strokeWidth:Q})]});case"section":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:b,opacity:".3"}),(0,f.jsx)("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:b,opacity:".15"}),(0,f.jsx)("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:b,opacity:".15"})]});case"sidebar":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:b,opacity:".3"}),(0,f.jsx)("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:b,opacity:".15"}),(0,f.jsx)("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:b,opacity:".15"})]});case"footer":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:b,opacity:".25"}),(0,f.jsx)("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:b,opacity:".25"}),(0,f.jsx)("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:b,opacity:".2"})]});case"modal":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:b,opacity:".3"}),(0,f.jsx)("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:b,opacity:".15"}),(0,f.jsx)("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:b,strokeWidth:Q})]});case"divider":return(0,f.jsx)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:(0,f.jsx)("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:b,strokeWidth:"0.5",opacity:".3"})});case"card":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:b,opacity:".04"}),(0,f.jsx)("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:b,opacity:".25"}),(0,f.jsx)("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:b,opacity:".12"})]});case"text":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:b,opacity:".3"}),(0,f.jsx)("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:b,opacity:".15"}),(0,f.jsx)("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:b,opacity:".15"}),(0,f.jsx)("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:b,opacity:".12"})]});case"image":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:b,strokeWidth:".3",opacity:".25"}),(0,f.jsx)("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:b,strokeWidth:".3",opacity:".25"})]});case"video":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:b,strokeWidth:Q,fill:b,opacity:".15"})]});case"table":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:b,strokeWidth:".3",opacity:".25"}),(0,f.jsx)("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:b,strokeWidth:".3",opacity:".25"}),(0,f.jsx)("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:b,strokeWidth:".3",opacity:".25"}),(0,f.jsx)("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:b,strokeWidth:".3",opacity:".25"})]});case"grid":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:b,strokeWidth:Q})]});case"list":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:b,opacity:".2"}),(0,f.jsx)("circle",{cx:"3.5",cy:"8",r:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:b,opacity:".2"}),(0,f.jsx)("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:b,opacity:".2"})]});case"chart":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:b,opacity:".2"}),(0,f.jsx)("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:b,opacity:".25"}),(0,f.jsx)("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:b,opacity:".3"}),(0,f.jsx)("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:b,opacity:".2"})]});case"accordion":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:b,opacity:".25"}),(0,f.jsx)("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:b,strokeWidth:Q})]});case"carousel":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:b,strokeWidth:Q,opacity:".35"}),(0,f.jsx)("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:b,strokeWidth:Q,opacity:".35"}),(0,f.jsx)("circle",{cx:"8.5",cy:"14",r:".6",fill:b,opacity:".35"}),(0,f.jsx)("circle",{cx:"10",cy:"14",r:".6",fill:b,opacity:".15"}),(0,f.jsx)("circle",{cx:"11.5",cy:"14",r:".6",fill:b,opacity:".15"})]});case"button":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:b,opacity:".25"})]});case"input":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:b,opacity:".25"}),(0,f.jsx)("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:b,opacity:".12"})]});case"search":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:b,strokeWidth:Q}),(0,f.jsx)("circle",{cx:"6",cy:"8",r:"2",stroke:b,strokeWidth:Q,opacity:".3"}),(0,f.jsx)("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:b,strokeWidth:Q,opacity:".3"}),(0,f.jsx)("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:b,opacity:".12"})]});case"form":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:b,opacity:".25"}),(0,f.jsx)("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:b,opacity:".25"}),(0,f.jsx)("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:b,strokeWidth:Q})]});case"tabs":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:b,opacity:".25"}),(0,f.jsx)("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:b,strokeWidth:Q})]});case"dropdown":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:b,opacity:".2"}),(0,f.jsx)("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:b,strokeWidth:Q,opacity:".3"}),(0,f.jsx)("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:b,strokeWidth:Q,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:b,strokeWidth:Q}),(0,f.jsx)("circle",{cx:"13",cy:"8",r:"2",fill:b,opacity:".3"})]});case"avatar":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("circle",{cx:"10",cy:"8",r:"6",stroke:b,strokeWidth:Q}),(0,f.jsx)("circle",{cx:"10",cy:"6.5",r:"2",stroke:b,strokeWidth:Q}),(0,f.jsx)("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:b,strokeWidth:Q})]});case"badge":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:b,opacity:".25"})]});case"breadcrumb":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:b,opacity:".3"}),(0,f.jsx)("path",{d:"M6.5 7l1 1-1 1",stroke:b,strokeWidth:Q,opacity:".2"}),(0,f.jsx)("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:b,opacity:".2"}),(0,f.jsx)("path",{d:"M14 7l1 1-1 1",stroke:b,strokeWidth:Q,opacity:".2"}),(0,f.jsx)("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:b,opacity:".15"})]});case"pagination":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:b,opacity:".15",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:b,strokeWidth:Q})]});case"progress":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:b,opacity:".2"})]});case"toast":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:b,strokeWidth:Q}),(0,f.jsx)("circle",{cx:"5",cy:"8",r:"1.5",stroke:b,strokeWidth:Q,opacity:".3"}),(0,f.jsx)("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:b,opacity:".25"}),(0,f.jsx)("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:b,opacity:".12"})]});case"tooltip":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:b,opacity:".25"}),(0,f.jsx)("path",{d:"M9 10l1 2.5 1-2.5",stroke:b,strokeWidth:Q})]});case"pricing":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:b,opacity:".25"}),(0,f.jsx)("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:b,opacity:".15"}),(0,f.jsx)("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:b,opacity:".1"}),(0,f.jsx)("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:b,opacity:".1"}),(0,f.jsx)("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:b,opacity:".2"})]});case"testimonial":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:b,strokeWidth:Q}),(0,f.jsx)("text",{x:"4",y:"5.5",fontSize:"4",fill:b,opacity:".2",fontFamily:"serif",children:"\u201C"}),(0,f.jsx)("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:b,opacity:".15"}),(0,f.jsx)("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:b,opacity:".12"}),(0,f.jsx)("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:b,strokeWidth:Q,opacity:".25"}),(0,f.jsx)("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:b,opacity:".15"})]});case"cta":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:b,opacity:".3"}),(0,f.jsx)("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:b,opacity:".15"}),(0,f.jsx)("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:b,strokeWidth:Q})]});case"alert":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:b,strokeWidth:Q}),(0,f.jsx)("circle",{cx:"6",cy:"8",r:"2",stroke:b,strokeWidth:Q,opacity:".3"}),(0,f.jsx)("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:b,strokeWidth:"0.6",opacity:".5"}),(0,f.jsx)("circle",{cx:"6",cy:"9.3",r:".3",fill:b,opacity:".5"}),(0,f.jsx)("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:b,opacity:".2"})]});case"banner":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:b,opacity:".25"}),(0,f.jsx)("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:b,strokeWidth:Q})]});case"stat":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:b,opacity:".15"}),(0,f.jsx)("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:b,opacity:".3"}),(0,f.jsx)("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:b,opacity:".12"})]});case"stepper":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("circle",{cx:"4",cy:"8",r:"2",fill:b,opacity:".2",stroke:b,strokeWidth:Q}),(0,f.jsx)("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:b,strokeWidth:".4",opacity:".3"}),(0,f.jsx)("circle",{cx:"10",cy:"8",r:"2",stroke:b,strokeWidth:Q}),(0,f.jsx)("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:b,strokeWidth:".4",opacity:".3"}),(0,f.jsx)("circle",{cx:"16",cy:"8",r:"2",stroke:b,strokeWidth:Q})]});case"tag":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:b,opacity:".25"}),(0,f.jsx)("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:b,strokeWidth:Q,opacity:".2"}),(0,f.jsx)("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:b,strokeWidth:Q,opacity:".2"})]});case"rating":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:b,opacity:".25"}),(0,f.jsx)("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:b,opacity:".25"}),(0,f.jsx)("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:b,strokeWidth:Q,opacity:".25"})]});case"map":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:b,strokeWidth:".3",opacity:".15"}),(0,f.jsx)("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:b,strokeWidth:".3",opacity:".15"}),(0,f.jsx)("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:b,opacity:".15",stroke:b,strokeWidth:Q})]});case"timeline":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:b,strokeWidth:".4",opacity:".25"}),(0,f.jsx)("circle",{cx:"5",cy:"4",r:"1.5",fill:b,opacity:".2",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:b,opacity:".25"}),(0,f.jsx)("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:b,opacity:".15"}),(0,f.jsx)("circle",{cx:"5",cy:"13",r:"1.5",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:b,opacity:".15"})]});case"fileUpload":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:b,strokeWidth:Q,strokeDasharray:"2 1"}),(0,f.jsx)("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:b,strokeWidth:Q,opacity:".3"}),(0,f.jsx)("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:b,opacity:".15"})]});case"codeBlock":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("circle",{cx:"4",cy:"4",r:".6",fill:b,opacity:".3"}),(0,f.jsx)("circle",{cx:"5.5",cy:"4",r:".6",fill:b,opacity:".3"}),(0,f.jsx)("circle",{cx:"7",cy:"4",r:".6",fill:b,opacity:".3"}),(0,f.jsx)("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:b,opacity:".2"}),(0,f.jsx)("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:b,opacity:".15"}),(0,f.jsx)("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:b,opacity:".12"})]});case"calendar":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:b,strokeWidth:".4",opacity:".25"}),(0,f.jsx)("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:b,opacity:".2"}),(0,f.jsx)("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:b,opacity:".2"}),(0,f.jsx)("circle",{cx:"7",cy:"9",r:".6",fill:b,opacity:".2"}),(0,f.jsx)("circle",{cx:"10",cy:"9",r:".6",fill:b,opacity:".2"}),(0,f.jsx)("circle",{cx:"13",cy:"9",r:".6",fill:b,opacity:".3"}),(0,f.jsx)("circle",{cx:"7",cy:"12",r:".6",fill:b,opacity:".2"}),(0,f.jsx)("circle",{cx:"10",cy:"12",r:".6",fill:b,opacity:".2"})]});case"notification":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:b,strokeWidth:Q}),(0,f.jsx)("circle",{cx:"5.5",cy:"8",r:"2",stroke:b,strokeWidth:Q,opacity:".25"}),(0,f.jsx)("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:b,opacity:".25"}),(0,f.jsx)("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:b,opacity:".12"}),(0,f.jsx)("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:b,opacity:".25"})]});case"productCard":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:b,opacity:".04"}),(0,f.jsx)("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:b,opacity:".25"}),(0,f.jsx)("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:b,opacity:".15"}),(0,f.jsx)("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:b,strokeWidth:Q})]});case"profile":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("circle",{cx:"10",cy:"5",r:"3",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:b,opacity:".25"}),(0,f.jsx)("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:b,opacity:".12"})]});case"drawer":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:b,opacity:".25"}),(0,f.jsx)("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:b,opacity:".15"}),(0,f.jsx)("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:b,opacity:".15"}),(0,f.jsx)("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:b,strokeWidth:Q,opacity:".15"})]});case"popover":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:b,opacity:".25"}),(0,f.jsx)("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:b,opacity:".15"}),(0,f.jsx)("path",{d:"M9 11l1 2.5 1-2.5",stroke:b,strokeWidth:Q})]});case"logo":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:b,strokeWidth:Q}),(0,f.jsx)("path",{d:"M5 9.5l2-4 2 4",stroke:b,strokeWidth:Q,opacity:".3"}),(0,f.jsx)("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:b,opacity:".2"}),(0,f.jsx)("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:b,opacity:".12"})]});case"faq":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("text",{x:"2.5",y:"5.5",fontSize:"4",fill:b,opacity:".3",fontWeight:"bold",children:"?"}),(0,f.jsx)("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:b,opacity:".25"}),(0,f.jsx)("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:b,opacity:".12"}),(0,f.jsx)("text",{x:"2.5",y:"11.5",fontSize:"4",fill:b,opacity:".3",fontWeight:"bold",children:"?"}),(0,f.jsx)("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:b,opacity:".25"}),(0,f.jsx)("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:b,opacity:".12"})]});case"gallery":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:b,strokeWidth:Q})]});case"checkbox":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:b,strokeWidth:Q}),(0,f.jsx)("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:b,strokeWidth:Q,opacity:".35"})]});case"radio":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("circle",{cx:"10",cy:"8",r:"4",stroke:b,strokeWidth:Q}),(0,f.jsx)("circle",{cx:"10",cy:"8",r:"2",fill:b,opacity:".3"})]});case"slider":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:b,opacity:".15"}),(0,f.jsx)("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:b,opacity:".25"}),(0,f.jsx)("circle",{cx:"12",cy:"8",r:"2.5",stroke:b,strokeWidth:Q})]});case"datePicker":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:b,opacity:".2"}),(0,f.jsx)("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:b,opacity:".12"}),(0,f.jsx)("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:b,strokeWidth:Q,strokeDasharray:"2 1",opacity:".3"}),(0,f.jsx)("circle",{cx:"6",cy:"10",r:".6",fill:b,opacity:".2"}),(0,f.jsx)("circle",{cx:"10",cy:"10",r:".6",fill:b,opacity:".3"}),(0,f.jsx)("circle",{cx:"14",cy:"10",r:".6",fill:b,opacity:".2"}),(0,f.jsx)("circle",{cx:"6",cy:"13",r:".6",fill:b,opacity:".2"}),(0,f.jsx)("circle",{cx:"10",cy:"13",r:".6",fill:b,opacity:".2"})]});case"skeleton":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:b,opacity:".08"}),(0,f.jsx)("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:b,opacity:".08"}),(0,f.jsx)("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:b,opacity:".08"})]});case"chip":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:b,opacity:".08",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:b,opacity:".25"}),(0,f.jsx)("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:b,strokeWidth:Q,opacity:".2"}),(0,f.jsx)("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:b,strokeWidth:Q,opacity:".2"}),(0,f.jsx)("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:b,strokeWidth:Q,opacity:".25"})]});case"icon":return(0,f.jsx)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:(0,f.jsx)("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:b,strokeWidth:Q,opacity:".3"})});case"spinner":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("circle",{cx:"10",cy:"8",r:"5",stroke:b,strokeWidth:Q,opacity:".12"}),(0,f.jsx)("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:b,strokeWidth:Q,opacity:".35",strokeLinecap:"round"})]});case"feature":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:b,strokeWidth:Q}),(0,f.jsx)("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:b,strokeWidth:Q,opacity:".25"}),(0,f.jsx)("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:b,opacity:".25"}),(0,f.jsx)("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:b,opacity:".12"}),(0,f.jsx)("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:b,opacity:".25"}),(0,f.jsx)("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:b,opacity:".12"})]});case"team":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("circle",{cx:"5",cy:"5",r:"2.5",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:b,opacity:".2"}),(0,f.jsx)("circle",{cx:"15",cy:"5",r:"2.5",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:b,opacity:".2"}),(0,f.jsx)("circle",{cx:"10",cy:"5",r:"2.5",stroke:b,strokeWidth:Q,opacity:".5"}),(0,f.jsx)("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:b,opacity:".15"}),(0,f.jsx)("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:b,opacity:".1"})]});case"login":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:b,opacity:".25"}),(0,f.jsx)("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:b,opacity:".2"})]});case"contact":return(0,f.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,f.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:b,opacity:".2"}),(0,f.jsx)("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:b,strokeWidth:Q}),(0,f.jsx)("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:b,opacity:".2"})]});default:return null}}function Db({activeType:e,onSelect:t,onDragStart:n,scrollRef:o,fadeClass:r,blankCanvas:a}){return(0,f.jsx)("div",{ref:o,className:`${G.placeScroll} ${r||""}`,children:Dy.map(i=>(0,f.jsxs)("div",{className:G.paletteSection,children:[(0,f.jsx)("div",{className:G.paletteSectionTitle,children:i.section}),i.items.map(s=>(0,f.jsxs)("div",{className:`${G.paletteItem} ${e===s.type?G.active:""} ${a?G.wireframe:""}`,onClick:()=>t(s.type),onMouseDown:l=>{l.button===0&&n(s.type,l)},children:[(0,f.jsx)("div",{className:G.paletteItemIcon,children:(0,f.jsx)(Ab,{type:s.type})}),(0,f.jsx)("span",{className:G.paletteItemLabel,children:s.label})]},s.type))]},i.section))})}function Ob({value:e,suffix:t}){let[n,o]=(0,on.useState)(null),[r,a]=(0,on.useState)(t),[i,s]=(0,on.useState)("up"),l=(0,on.useRef)(e),c=(0,on.useRef)(t),u=(0,on.useRef)(),p=n!==null&&r!==t;return(0,on.useEffect)(()=>{if(e!==l.current){if(e===0){l.current=e,c.current=t,o(null);return}s(e>l.current?"up":"down"),o(l.current),a(c.current),l.current=e,c.current=t,clearTimeout(u.current),u.current=Qe(()=>o(null),250)}else c.current=t},[e,t]),n===null?(0,f.jsxs)(f.Fragment,{children:[e,t?` ${t}`:""]}):p?(0,f.jsxs)("span",{className:G.rollingWrap,children:[(0,f.jsxs)("span",{style:{visibility:"hidden"},children:[e," ",t]}),(0,f.jsxs)("span",{className:`${G.rollingNum} ${i==="up"?G.exitUp:G.exitDown}`,children:[n," ",r]},`o${n}-${e}`),(0,f.jsxs)("span",{className:`${G.rollingNum} ${i==="up"?G.enterUp:G.enterDown}`,children:[e," ",t]},`n${e}`)]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("span",{className:G.rollingWrap,children:[(0,f.jsx)("span",{style:{visibility:"hidden"},children:e}),(0,f.jsx)("span",{className:`${G.rollingNum} ${i==="up"?G.exitUp:G.exitDown}`,children:n},`o${n}-${e}`),(0,f.jsx)("span",{className:`${G.rollingNum} ${i==="up"?G.enterUp:G.enterDown}`,children:e},`n${e}`)]}),t?` ${t}`:""]})}function Bb({activeType:e,onSelect:t,isDarkMode:n,sectionCount:o,onDetectSections:r,visible:a,onExited:i,placementCount:s,onClearPlacements:l,onDragStart:c,blankCanvas:u,onBlankCanvasChange:p,wireframePurpose:d,onWireframePurposeChange:y,Tooltip:_}){let[C,v]=(0,on.useState)(!1),[m,g]=(0,on.useState)("exit"),[E,I]=(0,on.useState)(!1),[D,oe]=(0,on.useState)(!0),z=(0,on.useRef)(0),Z=(0,on.useRef)(""),ge=(0,on.useRef)(0),te=(0,on.useRef)(),he=(0,on.useRef)(null),[K,P]=(0,on.useState)("");(0,on.useEffect)(()=>(a?(v(!0),clearTimeout(te.current),cancelAnimationFrame(ge.current),ge.current=$i(()=>{ge.current=$i(()=>{g("enter")})})):(cancelAnimationFrame(ge.current),g("exit"),clearTimeout(te.current),te.current=Qe(()=>{v(!1),i?.()},200)),()=>cancelAnimationFrame(ge.current)),[a]);let q=s>0||o>0,le=s+o;if(le>0&&(z.current=le,Z.current=u?le===1?"Component":"Components":le===1?"Change":"Changes"),(0,on.useEffect)(()=>{if(q)E?oe(!1):(oe(!0),I(!0),$i(()=>{$i(()=>{oe(!1)})}));else{oe(!0);let Ce=Qe(()=>I(!1),300);return()=>clearTimeout(Ce)}},[q]),(0,on.useEffect)(()=>{if(!C)return;let Ce=he.current;if(!Ce)return;let B=()=>P(Rb(Ce));B(),Ce.addEventListener("scroll",B,{passive:!0});let Y=new ResizeObserver(B);return Y.observe(Ce),()=>{Ce.removeEventListener("scroll",B),Y.disconnect()}},[C]),!C)return null;let me=[];return s>0&&me.push("placed"),o>0&&me.push("captured"),(0,f.jsxs)("div",{className:`${G.palette} ${G[m]} ${n?"":G.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:Ce=>Ce.stopPropagation(),onMouseDown:Ce=>Ce.stopPropagation(),onTransitionEnd:Ce=>{Ce.target===Ce.currentTarget&&(a||(clearTimeout(te.current),v(!1),g("exit"),i?.()))},children:[(0,f.jsxs)("div",{className:G.paletteHeader,children:[(0,f.jsx)("div",{className:G.paletteHeaderTitle,children:"Layout Mode"}),(0,f.jsxs)("div",{className:G.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",(0,f.jsx)("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),(0,f.jsxs)("div",{className:`${G.canvasToggle} ${u?G.active:""}`,onClick:()=>p(!u),children:[(0,f.jsx)("span",{className:G.canvasToggleIcon,children:(0,f.jsxs)("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[(0,f.jsx)("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),(0,f.jsx)("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,f.jsx)("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,f.jsx)("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,f.jsx)("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),(0,f.jsx)("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),(0,f.jsx)("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),(0,f.jsx)("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,f.jsx)("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,f.jsx)("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),(0,f.jsx)("span",{className:G.canvasToggleLabel,children:"Wireframe New Page"})]}),(0,f.jsx)("div",{className:`${G.wireframePurposeWrap} ${u?"":G.collapsed}`,children:(0,f.jsx)("div",{className:G.wireframePurposeInner,children:(0,f.jsx)("textarea",{className:G.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:d,onChange:Ce=>y(Ce.target.value),rows:2})})}),(0,f.jsx)(Db,{activeType:e,onSelect:t,onDragStart:c,scrollRef:he,fadeClass:K,blankCanvas:u}),E&&(0,f.jsx)("div",{className:`${G.paletteFooterWrap} ${D?G.footerHidden:""}`,children:(0,f.jsx)("div",{className:G.paletteFooterInner,children:(0,f.jsx)("div",{className:G.paletteFooterInnerContent,children:(0,f.jsxs)("div",{className:G.paletteFooter,children:[(0,f.jsx)("span",{className:G.paletteFooterCount,children:(0,f.jsx)(Ob,{value:z.current,suffix:Z.current})}),(0,f.jsx)("button",{className:G.paletteFooterClear,onClick:l,children:"Clear"})]})})})})]})}function Ri(e){if(e.parentElement)return e.parentElement;let t=e.getRootNode();return t instanceof ShadowRoot?t.host:null}function qn(e,t){let n=e;for(;n;){if(n.matches(t))return n;n=Ri(n)}return null}function zb(e,t=4){let n=[],o=e,r=0;for(;o&&r<t;){let a=o.tagName.toLowerCase();if(a==="html"||a==="body")break;let i=a;if(o.id)i=`#${o.id}`;else if(o.className&&typeof o.className=="string"){let l=o.className.split(/\s+/).find(c=>c.length>2&&!c.match(/^[a-z]{1,2}$/)&&!c.match(/[A-Z0-9]{5,}/));l&&(i=`.${l.split("_")[0]}`)}let s=Ri(o);!o.parentElement&&s&&(i=`\u27E8shadow\u27E9 ${i}`),n.unshift(i),o=s,r++}return n.join(" > ")}function Ii(e){let t=zb(e);if(e.dataset.element)return{name:e.dataset.element,path:t};let n=e.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(n)){let o=qn(e,"svg");if(o){let r=Ri(o);if(r instanceof HTMLElement)return{name:`graphic in ${Ii(r).name}`,path:t}}return{name:"graphic element",path:t}}if(n==="svg"){let o=Ri(e);if(o?.tagName.toLowerCase()==="button"){let r=o.textContent?.trim();return{name:r?`icon in "${r}" button`:"button icon",path:t}}return{name:"icon",path:t}}if(n==="button"){let o=e.textContent?.trim(),r=e.getAttribute("aria-label");return r?{name:`button [${r}]`,path:t}:{name:o?`button "${o.slice(0,25)}"`:"button",path:t}}if(n==="a"){let o=e.textContent?.trim(),r=e.getAttribute("href");return o?{name:`link "${o.slice(0,25)}"`,path:t}:r?{name:`link to ${r.slice(0,30)}`,path:t}:{name:"link",path:t}}if(n==="input"){let o=e.getAttribute("type")||"text",r=e.getAttribute("placeholder"),a=e.getAttribute("name");return r?{name:`input "${r}"`,path:t}:a?{name:`input [${a}]`,path:t}:{name:`${o} input`,path:t}}if(["h1","h2","h3","h4","h5","h6"].includes(n)){let o=e.textContent?.trim();return{name:o?`${n} "${o.slice(0,35)}"`:n,path:t}}if(n==="p"){let o=e.textContent?.trim();return o?{name:`paragraph: "${o.slice(0,40)}${o.length>40?"...":""}"`,path:t}:{name:"paragraph",path:t}}if(n==="span"||n==="label"){let o=e.textContent?.trim();return o&&o.length<40?{name:`"${o}"`,path:t}:{name:n,path:t}}if(n==="li"){let o=e.textContent?.trim();return o&&o.length<40?{name:`list item: "${o.slice(0,35)}"`,path:t}:{name:"list item",path:t}}if(n==="blockquote")return{name:"blockquote",path:t};if(n==="code"){let o=e.textContent?.trim();return o&&o.length<30?{name:`code: \`${o}\``,path:t}:{name:"code",path:t}}if(n==="pre")return{name:"code block",path:t};if(n==="img"){let o=e.getAttribute("alt");return{name:o?`image "${o.slice(0,30)}"`:"image",path:t}}if(n==="video")return{name:"video",path:t};if(["div","section","article","nav","header","footer","aside","main"].includes(n)){let o=e.className,r=e.getAttribute("role"),a=e.getAttribute("aria-label");if(a)return{name:`${n} [${a}]`,path:t};if(r)return{name:`${r}`,path:t};if(typeof o=="string"&&o){let i=o.split(/[\s_-]+/).map(s=>s.replace(/[A-Z0-9]{5,}.*$/,"")).filter(s=>s.length>2&&!/^[a-z]{1,2}$/.test(s)).slice(0,2);if(i.length>0)return{name:i.join(" "),path:t}}return{name:n==="div"?"container":n,path:t}}return{name:n,path:t}}function Qs(e){let t=[],n=e.textContent?.trim();n&&n.length<100&&t.push(n);let o=e.previousElementSibling;if(o){let a=o.textContent?.trim();a&&a.length<50&&t.unshift(`[before: "${a.slice(0,40)}"]`)}let r=e.nextElementSibling;if(r){let a=r.textContent?.trim();a&&a.length<50&&t.push(`[after: "${a.slice(0,40)}"]`)}return t.join(" ")}function ud(e){let t=Ri(e);if(!t)return"";let r=(e.getRootNode()instanceof ShadowRoot&&e.parentElement?Array.from(e.parentElement.children):Array.from(t.children)).filter(u=>u!==e&&u instanceof HTMLElement);if(r.length===0)return"";let a=r.slice(0,4).map(u=>{let p=u.tagName.toLowerCase(),d=u.className,y="";if(typeof d=="string"&&d){let _=d.split(/\s+/).map(C=>C.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(C=>C.length>2&&!/^[a-z]{1,2}$/.test(C));_&&(y=`.${_}`)}if(p==="button"||p==="a"){let _=u.textContent?.trim().slice(0,15);if(_)return`${p}${y} "${_}"`}return`${p}${y}`}),s=t.tagName.toLowerCase();if(typeof t.className=="string"&&t.className){let u=t.className.split(/\s+/).map(p=>p.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(p=>p.length>2&&!/^[a-z]{1,2}$/.test(p));u&&(s=`.${u}`)}let l=t.children.length,c=l>a.length+1?` (${l} total in ${s})`:"";return a.join(", ")+c}function Gs(e){let t=e.className;return typeof t!="string"||!t?"":t.split(/\s+/).filter(o=>o.length>0).map(o=>{let r=o.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return r?r[1]:o}).filter((o,r,a)=>a.indexOf(o)===r).join(", ")}var Oy=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),Fb=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),Hb=new Set(["input","textarea","select"]),Wb=new Set(["img","video","canvas","svg"]),jb=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function pd(e){if(typeof window>"u")return{};let t=window.getComputedStyle(e),n={},o=e.tagName.toLowerCase(),r;Fb.has(o)?r=["color","fontSize","fontWeight","fontFamily","lineHeight"]:o==="button"||o==="a"&&e.getAttribute("role")==="button"?r=["backgroundColor","color","padding","borderRadius","fontSize"]:Hb.has(o)?r=["backgroundColor","color","padding","borderRadius","fontSize"]:Wb.has(o)?r=["width","height","objectFit","borderRadius"]:jb.has(o)?r=["display","padding","margin","gap","backgroundColor"]:r=["color","fontSize","margin","padding","backgroundColor"];for(let a of r){let i=a.replace(/([A-Z])/g,"-$1").toLowerCase(),s=t.getPropertyValue(i);s&&!Oy.has(s)&&(n[a]=s)}return n}var Ub=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function fd(e){if(typeof window>"u")return"";let t=window.getComputedStyle(e),n=[];for(let o of Ub){let r=o.replace(/([A-Z])/g,"-$1").toLowerCase(),a=t.getPropertyValue(r);a&&!Oy.has(a)&&n.push(`${r}: ${a}`)}return n.join("; ")}function Vb(e){if(!e)return;let t={},n=e.split(";").map(o=>o.trim()).filter(Boolean);for(let o of n){let r=o.indexOf(":");if(r>0){let a=o.slice(0,r).trim(),i=o.slice(r+1).trim();a&&i&&(t[a]=i)}}return Object.keys(t).length>0?t:void 0}function hd(e){let t=[],n=e.getAttribute("role"),o=e.getAttribute("aria-label"),r=e.getAttribute("aria-describedby"),a=e.getAttribute("tabindex"),i=e.getAttribute("aria-hidden");return n&&t.push(`role="${n}"`),o&&t.push(`aria-label="${o}"`),r&&t.push(`aria-describedby="${r}"`),a&&t.push(`tabindex=${a}`),i==="true"&&t.push("aria-hidden"),e.matches("a, button, input, select, textarea, [tabindex]")&&t.push("focusable"),t.join(", ")}function md(e){let t=[],n=e;for(;n&&n.tagName.toLowerCase()!=="html";){let o=n.tagName.toLowerCase(),r=o;if(n.id)r=`${o}#${n.id}`;else if(n.className&&typeof n.className=="string"){let i=n.className.split(/\s+/).map(s=>s.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(s=>s.length>2);i&&(r=`${o}.${i}`)}let a=Ri(n);!n.parentElement&&a&&(r=`\u27E8shadow\u27E9 ${r}`),t.unshift(r),n=a}return t.join(" > ")}var Yb=new Set(["nav","header","main","section","article","footer","aside"]),qf={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},uy={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},Xb=new Set(["script","style","noscript","link","meta"]),qb=40;function By(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){let n=window.getComputedStyle(t).position;if(n==="fixed"||n==="sticky")return!0;t=t.parentElement}return!1}function Ra(e){let t=e.tagName.toLowerCase();if(["nav","header","footer","main"].includes(t)&&document.querySelectorAll(t).length===1)return t;if(e.id)return`#${CSS.escape(e.id)}`;if(e.className&&typeof e.className=="string"){let r=e.className.split(/\s+/).filter(a=>a.length>0).find(a=>a.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(a)&&!/^[a-z]{1,2}$/.test(a));if(r){let a=`${t}.${CSS.escape(r)}`;if(document.querySelectorAll(a).length===1)return a}}let n=e.parentElement;if(n){let r=Array.from(n.children).indexOf(e)+1;return`${n===document.body?"body":Ra(n)} > ${t}:nth-child(${r})`}return t}function kd(e){let t=e.tagName.toLowerCase(),n=e.getAttribute("aria-label");if(n)return n;let o=e.getAttribute("role");if(o&&qf[o])return qf[o];if(uy[t])return uy[t];let r=e.querySelector("h1, h2, h3, h4, h5, h6");if(r){let i=r.textContent?.trim();if(i&&i.length<=50)return i;if(i)return i.slice(0,47)+"..."}let{name:a}=Ii(e);return a.charAt(0).toUpperCase()+a.slice(1)}function zy(e){let t=e.className;return typeof t!="string"||!t?null:t.split(/\s+/).map(o=>o.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(o=>o.length>2&&!/^[a-z]{1,2}$/.test(o))||null}function Fy(e){let t=e.textContent?.trim();if(!t)return null;let n=t.replace(/\s+/g," ");return n.length<=30?n:n.slice(0,30)+"\u2026"}function Kb(){let e=document.querySelector("main")||document.body,t=Array.from(e.children),n=t;e!==document.body&&t.length<3&&(n=Array.from(document.body.children));let o=[];return n.forEach((r,a)=>{if(!(r instanceof HTMLElement))return;let i=r.tagName.toLowerCase();if(Xb.has(i)||r.hasAttribute("data-feedback-toolbar")||r.closest("[data-feedback-toolbar]"))return;let s=window.getComputedStyle(r);if(s.display==="none"||s.visibility==="hidden")return;let l=r.getBoundingClientRect();if(l.height<qb)return;let c=Yb.has(i),u=r.getAttribute("role")&&qf[r.getAttribute("role")],p=i==="div"&&l.height>=60;if(!c&&!u&&!p)return;let d=window.scrollY,y=By(r),_={x:l.x,y:y?l.y:l.y+d,width:l.width,height:l.height};o.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:kd(r),tagName:i,selector:Ra(r),role:r.getAttribute("role"),className:zy(r),textSnippet:Fy(r),originalRect:_,currentRect:{..._},originalIndex:a,isFixed:y})}),o}function Qb(e){let t=window.scrollY,n=e.getBoundingClientRect(),o=By(e),r={x:n.x,y:o?n.y:n.y+t,width:n.width,height:n.height},a=e.parentElement,i=0;return a&&(i=Array.from(a.children).indexOf(e)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:kd(e),tagName:e.tagName.toLowerCase(),selector:Ra(e),role:e.getAttribute("role"),className:zy(e),textSnippet:Fy(e),originalRect:r,currentRect:{...r},originalIndex:i,isFixed:o}}var py={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},fy=["nw","n","ne","e","se","s","sw","w"],gd=24,hy=16,_d=5;function my(e,t,n,o){let r=1/0,a=1/0,i=e.x,s=e.x+e.width,l=e.x+e.width/2,c=e.y,u=e.y+e.height,p=e.y+e.height/2,d=[];for(let z of t)n.has(z.id)||d.push(z.currentRect);o&&d.push(...o);for(let z of d){let Z=z.x,ge=z.x+z.width,te=z.x+z.width/2,he=z.y,K=z.y+z.height,P=z.y+z.height/2;for(let q of[i,s,l])for(let le of[Z,ge,te]){let me=le-q;Math.abs(me)<_d&&Math.abs(me)<Math.abs(r)&&(r=me)}for(let q of[c,u,p])for(let le of[he,K,P]){let me=le-q;Math.abs(me)<_d&&Math.abs(me)<Math.abs(a)&&(a=me)}}let y=Math.abs(r)<_d?r:0,_=Math.abs(a)<_d?a:0,C=[],v=new Set,m=i+y,g=s+y,E=l+y,I=c+_,D=u+_,oe=p+_;for(let z of d){let Z=z.x,ge=z.x+z.width,te=z.x+z.width/2,he=z.y,K=z.y+z.height,P=z.y+z.height/2;for(let q of[Z,te,ge])for(let le of[m,E,g])if(Math.abs(le-q)<.5){let me=`x:${Math.round(q)}`;v.has(me)||(v.add(me),C.push({axis:"x",pos:q}))}for(let q of[he,P,K])for(let le of[I,oe,D])if(Math.abs(le-q)<.5){let me=`y:${Math.round(q)}`;v.has(me)||(v.add(me),C.push({axis:"y",pos:q}))}}return{dx:y,dy:_,guides:C}}var Gb=new Set(["script","style","noscript","link","meta","br","hr"]);function gy(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){if(t.closest("[data-feedback-toolbar]"))return null;if(Gb.has(t.tagName.toLowerCase())){t=t.parentElement;continue}let n=t.getBoundingClientRect();if(n.width>=hy&&n.height>=hy)return t;t=t.parentElement}return null}function Zb({rearrangeState:e,onChange:t,isDarkMode:n,exiting:o,className:r,blankCanvas:a,extraSnapRects:i,onSelectionChange:s,deselectSignal:l,onDragMove:c,onDragEnd:u,clearSignal:p}){let{sections:d}=e,y=(0,rt.useRef)(e);y.current=e;let[_,C]=(0,rt.useState)(new Set),[v,m]=(0,rt.useState)(!1),g=(0,rt.useRef)(p);(0,rt.useEffect)(()=>{p!==void 0&&p!==g.current&&(g.current=p,d.length>0&&m(!0))},[p,d.length]);let E=(0,rt.useRef)(l);(0,rt.useEffect)(()=>{l!==E.current&&(E.current=l,C(new Set))},[l]);let[I,D]=(0,rt.useState)(null),[oe,z]=(0,rt.useState)(!1),Z=(0,rt.useRef)(!1),ge=(0,rt.useCallback)(w=>{let M=d.find(H=>H.id===w);M&&(Z.current=!!M.note,D(w),z(!1))},[d]),te=(0,rt.useCallback)(()=>{I&&(z(!0),Qe(()=>{D(null),z(!1)},150))},[I]),he=(0,rt.useCallback)(w=>{I&&(t({...e,sections:d.map(M=>M.id===I?{...M,note:w.trim()||void 0}:M)}),te())},[I,d,e,t,te]);(0,rt.useEffect)(()=>{o&&I&&te()},[o]);let[K,P]=(0,rt.useState)(new Set),q=(0,rt.useRef)(new Map),[le,me]=(0,rt.useState)(null),[Ce,B]=(0,rt.useState)(null),[Y,Se]=(0,rt.useState)([]),[nt,ht]=(0,rt.useState)(0),We=(0,rt.useRef)(null),ut=(0,rt.useRef)(new Set),pt=(0,rt.useRef)(new Map),[Ze,kt]=(0,rt.useState)(new Map),[Et,it]=(0,rt.useState)(new Map),ct=(0,rt.useRef)(new Set),Wt=(0,rt.useRef)(new Map),Xt=(0,rt.useRef)(s);Xt.current=s;let je=(0,rt.useRef)(c);je.current=c;let Ye=(0,rt.useRef)(u);Ye.current=u,(0,rt.useEffect)(()=>{a&&C(new Set)},[a]);let[pn,Bt]=(0,rt.useState)(()=>!e.sections.some(w=>{let M=w.originalRect,H=w.currentRect;return Math.abs(M.x-H.x)>1||Math.abs(M.y-H.y)>1||Math.abs(M.width-H.width)>1||Math.abs(M.height-H.height)>1}));(0,rt.useEffect)(()=>{if(!pn){let w=Qe(()=>Bt(!0),380);return()=>clearTimeout(w)}},[]);let Be=(0,rt.useRef)(new Set);(0,rt.useEffect)(()=>{Be.current=new Set(d.map(w=>w.selector))},[d]),(0,rt.useEffect)(()=>{let w=()=>ht(window.scrollY);return w(),window.addEventListener("scroll",w,{passive:!0}),window.addEventListener("resize",w,{passive:!0}),()=>{window.removeEventListener("scroll",w),window.removeEventListener("resize",w)}},[]),(0,rt.useEffect)(()=>{let w=M=>{if(We.current){me(null);return}let H=document.elementFromPoint(M.clientX,M.clientY);if(!H){me(null);return}if(H.closest("[data-feedback-toolbar]")){me(null);return}if(H.closest("[data-design-placement]")){me(null);return}if(H.closest("[data-annotation-popup]")){me(null);return}let W=gy(H);if(!W){me(null);return}for(let ee of Be.current)try{let U=document.querySelector(ee);if(U&&(U===W||W.contains(U))){me(null);return}}catch{}let X=W.getBoundingClientRect();me({x:X.x,y:X.y,w:X.width,h:X.height})};return document.addEventListener("mousemove",w,{passive:!0}),()=>document.removeEventListener("mousemove",w)},[d]),(0,rt.useEffect)(()=>{let w=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=w}},[]),(0,rt.useEffect)(()=>{let w=M=>{if(We.current||M.button!==0)return;let H=M.target;if(!H||H.closest("[data-feedback-toolbar]")||H.closest("[data-design-placement]")||H.closest("[data-annotation-popup]"))return;let W=gy(H),X=!1;if(W)for(let U of Be.current)try{let ue=document.querySelector(U);if(ue&&(ue===W||W.contains(ue))){X=!0;break}}catch{}let ee=!!(M.shiftKey||M.metaKey||M.ctrlKey);if(W&&!X){M.preventDefault(),M.stopPropagation();let U=Qb(W),ue=[...d,U],ne=[...e.originalOrder,U.id];t({...e,sections:ue,originalOrder:ne});let Ne=new Set([U.id]);C(Ne),Xt.current?.(Ne,ee),me(null);let Me=M.clientX,ke=M.clientY,Ue={x:U.currentRect.x,y:U.currentRect.y},at=U.originalRect,Fe=!1,ie=0,st=0;We.current="move";let Ge=ft=>{let Xe=ft.clientX-Me,xt=ft.clientY-ke;if(!Fe&&(Math.abs(Xe)>2||Math.abs(xt)>2)&&(Fe=!0),!Fe)return;let fn={x:Ue.x+Xe,y:Ue.y+xt,width:U.currentRect.width,height:U.currentRect.height},jn=my(fn,ue,new Set([U.id]),i);Se(jn.guides);let ao=Xe+jn.dx,jt=xt+jn.dy;ie=ao,st=jt;let io=document.querySelector(`[data-rearrange-section="${U.id}"]`);io&&(io.style.transform=`translate(${ao}px, ${jt}px)`),kt(new Map([[U.id,{x:Ue.x+ao,y:Ue.y+jt,width:U.currentRect.width,height:U.currentRect.height}]])),je.current?.(ao,jt)},Je=()=>{window.removeEventListener("mousemove",Ge),window.removeEventListener("mouseup",Je),We.current=null,Se([]),kt(new Map);let ft=document.querySelector(`[data-rearrange-section="${U.id}"]`);ft&&(ft.style.transform=""),Fe&&t({...e,sections:ue.map(Xe=>Xe.id===U.id?{...Xe,currentRect:{...Xe.currentRect,x:Math.max(0,Ue.x+ie),y:Math.max(0,Ue.y+st)}}:Xe),originalOrder:ne}),Ye.current?.(ie,st,Fe)};window.addEventListener("mousemove",Ge),window.addEventListener("mouseup",Je)}else if(X&&W){M.preventDefault();for(let U of d)try{let ue=document.querySelector(U.selector);if(ue&&ue===W){let ne=new Set([U.id]);C(ne),Xt.current?.(ne,ee);return}}catch{}ee||(C(new Set),Xt.current?.(new Set,!1))}else ee||(C(new Set),Xt.current?.(new Set,!1))};return document.addEventListener("mousedown",w,!0),()=>document.removeEventListener("mousedown",w,!0)},[d,e,t]),(0,rt.useEffect)(()=>{let w=M=>{let H=M.target;if(!(H.tagName==="INPUT"||H.tagName==="TEXTAREA"||H.isContentEditable)){if((M.key==="Backspace"||M.key==="Delete")&&_.size>0){M.preventDefault();let W=new Set(_);P(X=>{let ee=new Set(X);for(let U of W)ee.add(U);return ee}),C(new Set),Qe(()=>{let X=y.current;t({...X,sections:X.sections.filter(ee=>!W.has(ee.id)),originalOrder:X.originalOrder.filter(ee=>!W.has(ee))}),P(ee=>{let U=new Set(ee);for(let ue of W)U.delete(ue);return U})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(M.key)&&_.size>0){M.preventDefault();let W=M.shiftKey?20:1,X=M.key==="ArrowLeft"?-W:M.key==="ArrowRight"?W:0,ee=M.key==="ArrowUp"?-W:M.key==="ArrowDown"?W:0;t({...e,sections:d.map(U=>_.has(U.id)?{...U,currentRect:{...U.currentRect,x:Math.max(0,U.currentRect.x+X),y:Math.max(0,U.currentRect.y+ee)}}:U)});return}M.key==="Escape"&&_.size>0&&C(new Set)}};return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)},[_,d,e,t]);let De=(0,rt.useCallback)((w,M)=>{if(w.button!==0)return;let H=w.target;if(H.closest(`.${G.handle}`)||H.closest(`.${G.deleteButton}`))return;w.preventDefault(),w.stopPropagation();let W;w.shiftKey||w.metaKey||w.ctrlKey?(W=new Set(_),W.has(M)?W.delete(M):W.add(M)):_.has(M)?W=new Set(_):W=new Set([M]),C(W),(W.size!==_.size||[...W].some(Fe=>!_.has(Fe)))&&Xt.current?.(W,!!(w.shiftKey||w.metaKey||w.ctrlKey));let ee=w.clientX,U=w.clientY,ue=new Map;for(let Fe of d)W.has(Fe.id)&&ue.set(Fe.id,{x:Fe.currentRect.x,y:Fe.currentRect.y});We.current="move";let ne=!1,Ne=0,Me=0,ke=new Map;for(let Fe of d)if(W.has(Fe.id)){let ie=document.querySelector(`[data-rearrange-section="${Fe.id}"]`);ke.set(Fe.id,{outlineEl:ie,curW:Fe.currentRect.width,curH:Fe.currentRect.height})}let Ue=Fe=>{let ie=Fe.clientX-ee,st=Fe.clientY-U;if(ie===0&&st===0)return;ne=!0;let Ge=1/0,Je=1/0,ft=-1/0,Xe=-1/0;for(let[jt,{curW:io,curH:Fa}]of ke){let zt=ue.get(jt);if(!zt)continue;let Gn=zt.x+ie,ra=zt.y+st;Ge=Math.min(Ge,Gn),Je=Math.min(Je,ra),ft=Math.max(ft,Gn+io),Xe=Math.max(Xe,ra+Fa)}let xt=my({x:Ge,y:Je,width:ft-Ge,height:Xe-Je},d,W,i),fn=ie+xt.dx,jn=st+xt.dy;Ne=fn,Me=jn,Se(xt.guides);for(let[,{outlineEl:jt}]of ke)jt&&(jt.style.transform=`translate(${fn}px, ${jn}px)`);let ao=new Map;for(let[jt,{curW:io,curH:Fa}]of ke){let zt=ue.get(jt);if(zt){let Gn={x:Math.max(0,zt.x+fn),y:Math.max(0,zt.y+jn),width:io,height:Fa};ao.set(jt,Gn)}}kt(ao),je.current?.(fn,jn)},at=Fe=>{window.removeEventListener("mousemove",Ue),window.removeEventListener("mouseup",at),We.current=null,Se([]),kt(new Map);for(let[,{outlineEl:ie}]of ke)ie&&(ie.style.transform="");if(ne){let ie=Fe.clientX-ee,st=Fe.clientY-U;if(Math.abs(ie)<5&&Math.abs(st)<5)t({...e,sections:d.map(Ge=>{let Je=ue.get(Ge.id);return Je?{...Ge,currentRect:{...Ge.currentRect,x:Je.x,y:Je.y}}:Ge})});else{t({...e,sections:d.map(Ge=>{let Je=ue.get(Ge.id);return Je?{...Ge,currentRect:{...Ge.currentRect,x:Math.max(0,Je.x+Ne),y:Math.max(0,Je.y+Me)}}:Ge})}),Ye.current?.(Ne,Me,!0);return}}Ye.current?.(0,0,!1)};window.addEventListener("mousemove",Ue),window.addEventListener("mouseup",at)},[_,d,e,t]),de=(0,rt.useCallback)((w,M,H)=>{w.preventDefault(),w.stopPropagation();let W=d.find(at=>at.id===M);if(!W)return;C(new Set([M])),We.current="resize";let X=w.clientX,ee=w.clientY,U={...W.currentRect},ue=W.originalRect,ne=U.width/U.height,Ne={...U},Me=document.querySelector(`[data-rearrange-section="${M}"]`),ke=at=>{let Fe=at.clientX-X,ie=at.clientY-ee,st=U.x,Ge=U.y,Je=U.width,ft=U.height;if(H.includes("e")&&(Je=Math.max(gd,U.width+Fe)),H.includes("w")&&(Je=Math.max(gd,U.width-Fe),st=U.x+U.width-Je),H.includes("s")&&(ft=Math.max(gd,U.height+ie)),H.includes("n")&&(ft=Math.max(gd,U.height-ie),Ge=U.y+U.height-ft),at.shiftKey)if(H.length===2){let xt=Math.abs(Je-U.width),fn=Math.abs(ft-U.height);xt>fn?ft=Je/ne:Je=ft*ne,H.includes("w")&&(st=U.x+U.width-Je),H.includes("n")&&(Ge=U.y+U.height-ft)}else H==="e"||H==="w"?ft=Je/ne:Je=ft*ne,H==="w"&&(st=U.x+U.width-Je),H==="n"&&(Ge=U.y+U.height-ft);Ne={x:st,y:Ge,width:Je,height:ft},Me&&(Me.style.left=`${st}px`,Me.style.top=`${Ge-nt}px`,Me.style.width=`${Je}px`,Me.style.height=`${ft}px`),B({x:at.clientX+12,y:at.clientY+12,text:`${Math.round(Je)} \xD7 ${Math.round(ft)}`}),kt(new Map([[M,Ne]]))},Ue=()=>{window.removeEventListener("mousemove",ke),window.removeEventListener("mouseup",Ue),B(null),We.current=null,kt(new Map),t({...e,sections:d.map(at=>at.id===M?{...at,currentRect:Ne}:at)})};window.addEventListener("mousemove",ke),window.addEventListener("mouseup",Ue)},[d,e,t,nt]),ze=(0,rt.useCallback)(w=>{P(M=>{let H=new Set(M);return H.add(w),H}),C(M=>{let H=new Set(M);return H.delete(w),H}),Qe(()=>{let M=y.current;t({...M,sections:M.sections.filter(H=>H.id!==w),originalOrder:M.originalOrder.filter(H=>H!==w)}),P(H=>{let W=new Set(H);return W.delete(w),W})},180)},[t]),R=w=>{let M=w.originalRect,H=w.currentRect;return Math.abs(M.x-H.x)>1||Math.abs(M.y-H.y)>1||Math.abs(M.width-H.width)>1||Math.abs(M.height-H.height)>1},A=w=>{let M=w.originalRect,H=w.currentRect;return Math.abs(M.x-H.x)>1||Math.abs(M.y-H.y)>1},V=w=>{let M=w.originalRect,H=w.currentRect;return Math.abs(M.width-H.width)>1||Math.abs(M.height-H.height)>1};for(let w of d)pt.current.has(w.id)||(A(w)?pt.current.set(w.id,"move"):V(w)&&pt.current.set(w.id,"resize"));for(let w of pt.current.keys())d.some(M=>M.id===w)||pt.current.delete(w);let be=d.filter(w=>{try{if(K.has(w.id)||_.has(w.id))return!0;let M=document.querySelector(w.selector);if(!M)return!1;let H=M.getBoundingClientRect(),W=w.originalRect;return Math.abs(H.width-W.width)+Math.abs(H.height-W.height)<200}catch{return!1}}),fe=be.filter(w=>R(w)),Pe=be.filter(w=>!R(w)),Ee=new Set(fe.map(w=>w.id));for(let w of ut.current)Ee.has(w)||ut.current.delete(w);let xe=[...Ee].sort().join(",");for(let w of fe)Wt.current.set(w.id,{currentRect:w.currentRect,originalRect:w.originalRect,isFixed:w.isFixed});return(0,rt.useEffect)(()=>{let w=ct.current;ct.current=Ee;let M=new Map;for(let H of w)if(!Ee.has(H)){if(!d.some(X=>X.id===H))continue;let W=Wt.current.get(H);W&&(M.set(H,{orig:W.originalRect,target:W.currentRect,isFixed:W.isFixed}),Wt.current.delete(H))}if(M.size>0){it(W=>{let X=new Map(W);for(let[ee,U]of M)X.set(ee,U);return X});let H=Qe(()=>{it(W=>{let X=new Map(W);for(let ee of M.keys())X.delete(ee);return X})},250);return()=>clearTimeout(H)}},[xe,d]),(0,vt.jsxs)(vt.Fragment,{children:[(0,vt.jsxs)("div",{className:`${G.rearrangeOverlay} ${n?"":G.light} ${o?G.overlayExiting:""}${r?` ${r}`:""}`,"data-feedback-toolbar":!0,children:[le&&(0,vt.jsx)("div",{className:G.hoverHighlight,style:{left:le.x,top:le.y,width:le.w,height:le.h}}),Pe.map(w=>{let M=w.currentRect,H=w.isFixed?M.y:M.y-nt,W=py,X=_.has(w.id);return(0,vt.jsxs)("div",{"data-rearrange-section":w.id,className:`${G.sectionOutline} ${X?G.selected:""} ${v||o||K.has(w.id)?G.exiting:""}`,style:{left:M.x,top:H,width:M.width,height:M.height,borderColor:W.border,backgroundColor:W.bg,...pn?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:ee=>De(ee,w.id),onDoubleClick:()=>ge(w.id),children:[(0,vt.jsx)("span",{className:G.sectionLabel,style:{backgroundColor:W.pill},children:w.label}),(0,vt.jsx)("span",{className:`${G.sectionAnnotation} ${w.note?G.annotationVisible:""}`,children:(w.note&&q.current.set(w.id,w.note),w.note||q.current.get(w.id)||"")}),(0,vt.jsxs)("span",{className:G.sectionDimensions,children:[Math.round(M.width)," \xD7 ",Math.round(M.height)]}),(0,vt.jsx)("div",{className:G.deleteButton,onMouseDown:ee=>ee.stopPropagation(),onClick:()=>ze(w.id),children:"\u2715"}),fy.map(ee=>(0,vt.jsx)("div",{className:`${G.handle} ${G[`handle${ee.charAt(0).toUpperCase()}${ee.slice(1)}`]}`,onMouseDown:U=>de(U,w.id,ee)},ee))]},w.id)}),fe.map(w=>{let M=w.currentRect,H=w.isFixed?M.y:M.y-nt,W=_.has(w.id),X=A(w),ee=V(w);if(a&&!W)return null;let ue=!ut.current.has(w.id);return ue&&ut.current.add(w.id),(0,vt.jsxs)("div",{"data-rearrange-section":w.id,className:`${G.ghostOutline} ${W?G.selected:""} ${v||o||K.has(w.id)?G.exiting:""}`,style:{left:M.x,top:H,width:M.width,height:M.height,...pn?{}:{opacity:0,animation:"none",transition:"none"},...ue?{}:{animation:"none"}},onMouseDown:ne=>De(ne,w.id),onDoubleClick:()=>ge(w.id),children:[(0,vt.jsx)("span",{className:G.sectionLabel,style:{backgroundColor:py.pill},children:w.label}),(0,vt.jsx)("span",{className:`${G.sectionAnnotation} ${w.note?G.annotationVisible:""}`,children:(w.note&&q.current.set(w.id,w.note),w.note||q.current.get(w.id)||"")}),(0,vt.jsxs)("span",{className:G.sectionDimensions,children:[Math.round(M.width)," \xD7 ",Math.round(M.height)]}),(0,vt.jsx)("div",{className:G.deleteButton,onMouseDown:ne=>ne.stopPropagation(),onClick:()=>ze(w.id),children:"\u2715"}),fy.map(ne=>(0,vt.jsx)("div",{className:`${G.handle} ${G[`handle${ne.charAt(0).toUpperCase()}${ne.slice(1)}`]}`,onMouseDown:Ne=>de(Ne,w.id,ne)},ne)),(0,vt.jsx)("span",{className:G.ghostBadge,children:(()=>{let ne=pt.current.get(w.id);if(X&&ee){let[Ne,Me]=ne==="resize"?["Resize","Move"]:["Move","Resize"];return(0,vt.jsxs)(vt.Fragment,{children:["Suggested ",Ne," ",(0,vt.jsxs)("span",{className:G.ghostBadgeExtra,children:["& ",Me]})]})}return`Suggested ${ee?"Resize":"Move"}`})()})]},w.id)})]}),!a&&(()=>{let w=[];for(let M of fe){let H=Ze.get(M.id);w.push({id:M.id,orig:M.originalRect,target:H||M.currentRect,isFixed:M.isFixed,isSelected:_.has(M.id),isExiting:K.has(M.id)})}for(let[M,H]of Ze)if(!w.some(W=>W.id===M)){let W=d.find(X=>X.id===M);W&&w.push({id:M,orig:W.originalRect,target:H,isFixed:W.isFixed,isSelected:_.has(M)})}for(let[M,H]of Et)w.some(W=>W.id===M)||w.push({id:M,orig:H.orig,target:H.target,isFixed:H.isFixed,isSelected:!1,isExiting:!0});return w.length===0?null:(0,vt.jsxs)("svg",{className:`${G.connectorSvg} ${v||o?G.connectorExiting:""}`,children:[w.map(({id:M,orig:H,target:W,isFixed:X,isSelected:ee,isExiting:U})=>{let ue=H.x+H.width/2,ne=(X?H.y:H.y-nt)+H.height/2,Ne=W.x+W.width/2,Me=(X?W.y:W.y-nt)+W.height/2,ke=Ne-ue,Ue=Me-ne,at=Math.sqrt(ke*ke+Ue*Ue);if(at<2)return null;let Fe=Math.min(1,at/40),ie=Math.min(at*.3,60),st=at>0?-Ue/at:0,Ge=at>0?ke/at:0,Je=(ue+Ne)/2+st*ie,ft=(ne+Me)/2+Ge*ie,Xe=Ze.has(M),xt=Xe||ee?1:.4,fn=Xe||ee?1:.5;return(0,vt.jsxs)("g",{className:U?G.connectorExiting:"",children:[(0,vt.jsx)("path",{className:G.connectorLine,d:`M ${ue} ${ne} Q ${Je} ${ft} ${Ne} ${Me}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:xt*Fe}),(0,vt.jsx)("circle",{className:G.connectorDot,cx:ue,cy:ne,r:4*Fe,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:fn*Fe,filter:"url(#connDotShadow)"}),(0,vt.jsx)("circle",{className:G.connectorDot,cx:Ne,cy:Me,r:4*Fe,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:fn*Fe,filter:"url(#connDotShadow)"})]},`conn-${M}`)}),(0,vt.jsx)("defs",{children:(0,vt.jsx)("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:(0,vt.jsx)("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),I&&(()=>{let w=d.find(Me=>Me.id===I);if(!w)return null;let M=w.currentRect,H=w.isFixed?M.y:M.y-nt,W=M.x+M.width/2,X=H-8,ee=H+M.height+8,U=X>200,ue=ee<window.innerHeight-100,ne=Math.max(160,Math.min(window.innerWidth-160,W)),Ne;return U?Ne={left:ne,bottom:window.innerHeight-X}:ue?Ne={left:ne,top:ee}:Ne={left:ne,top:Math.max(80,window.innerHeight/2-80)},(0,vt.jsx)(bd,{element:w.label,placeholder:"Add a note about this section",initialValue:w.note??"",submitLabel:Z.current?"Save":"Set",onSubmit:he,onCancel:te,onDelete:Z.current?()=>{he("")}:void 0,isExiting:oe,lightMode:!n,style:Ne})})(),Ce&&(0,vt.jsx)("div",{className:G.sizeIndicator,style:{left:Ce.x,top:Ce.y},"data-feedback-toolbar":!0,children:Ce.text}),Y.map((w,M)=>(0,vt.jsx)("div",{className:G.guideLine,style:w.axis==="x"?{position:"fixed",left:w.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:w.pos-nt,width:"100vw",height:1}},`${w.axis}-${w.pos}-${M}`))]})}var Kf=new Set(["script","style","noscript","link","meta","br","hr"]);function Jb(){let e=document.querySelector("main")||document.body,t=[],n=Array.from(e.children),o=e!==document.body&&n.length<3?Array.from(document.body.children):n;for(let r of o){if(!(r instanceof HTMLElement)||Kf.has(r.tagName.toLowerCase())||r.hasAttribute("data-feedback-toolbar"))continue;let a=window.getComputedStyle(r);if(a.display==="none"||a.visibility==="hidden")continue;let i=r.getBoundingClientRect();if(!(i.height<10||i.width<10)){t.push({label:kd(r),selector:Ra(r),top:i.top,bottom:i.bottom,left:i.left,right:i.right,area:i.width*i.height});for(let s of Array.from(r.children)){if(!(s instanceof HTMLElement)||Kf.has(s.tagName.toLowerCase())||s.hasAttribute("data-feedback-toolbar"))continue;let l=window.getComputedStyle(s);if(l.display==="none"||l.visibility==="hidden")continue;let c=s.getBoundingClientRect();c.height<10||c.width<10||t.push({label:kd(s),selector:Ra(s),top:c.top,bottom:c.bottom,left:c.left,right:c.right,area:c.width*c.height})}}}return t}function ek(e){let t=window.scrollY;return e.map(({label:n,selector:o,rect:r})=>{let a=r.y-t;return{label:n,selector:o,top:a,bottom:a+r.height,left:r.x,right:r.x+r.width,area:r.width*r.height}})}function tk(e){let t=window.scrollY,n=e.y-t,o=e.x;return{top:n,bottom:n+e.height,left:o,right:o+e.width,area:e.width*e.height}}function Qf(e,t){let n=t?ek(t):Jb(),o=tk(e),r=null,a=null,i=null,s=null,l=null;for(let _ of n){if(Math.abs(_.left-o.left)<2&&Math.abs(_.top-o.top)<2&&Math.abs(_.right-_.left-e.width)<2&&Math.abs(_.bottom-_.top-e.height)<2)continue;_.left<=o.left+2&&_.right>=o.right-2&&_.top<=o.top+2&&_.bottom>=o.bottom-2&&_.area>o.area*1.5&&(!l||_.area<l._area)&&(l={label:_.label,selector:_.selector,_area:_.area});let C=o.right>_.left+5&&o.left<_.right-5,v=o.bottom>_.top+5&&o.top<_.bottom-5;if(C&&_.bottom<=o.top+5){let m=Math.round(o.top-_.bottom);(!r||m<r._dist)&&(r={label:_.label,selector:_.selector,gap:Math.max(0,m),_dist:m})}if(C&&_.top>=o.bottom-5){let m=Math.round(_.top-o.bottom);(!a||m<a._dist)&&(a={label:_.label,selector:_.selector,gap:Math.max(0,m),_dist:m})}if(v&&_.right<=o.left+5){let m=Math.round(o.left-_.right);(!i||m<i._dist)&&(i={label:_.label,selector:_.selector,gap:Math.max(0,m),_dist:m})}if(v&&_.left>=o.right-5){let m=Math.round(_.left-o.right);(!s||m<s._dist)&&(s={label:_.label,selector:_.selector,gap:Math.max(0,m),_dist:m})}}let c=window.innerWidth,u=window.innerHeight,p=ok(e,c),d=_=>_?{label:_.label,selector:_.selector,gap:_.gap}:null,y=nk(o,e,c,u,l?{label:l.label,selector:l.selector,_area:l._area}:null,n);return{above:d(r),below:d(a),left:d(i),right:d(s),alignment:p,containedIn:l?{label:l.label,selector:l.selector}:null,outOfBounds:y}}function nk(e,t,n,o,r,a){let i={},s=!1,l=[];if(e.left<-2&&l.push("left"),e.right>n+2&&l.push("right"),e.top<-2&&l.push("top"),e.bottom>o+2&&l.push("bottom"),l.length>0&&(i.viewport=l,s=!0),r){let c=a.find(u=>u.label===r.label&&u.selector===r.selector&&Math.abs(u.area-r._area)<10);if(c){let u=[];e.left<c.left-2&&u.push("left"),e.right>c.right+2&&u.push("right"),e.top<c.top-2&&u.push("top"),e.bottom>c.bottom+2&&u.push("bottom"),u.length>0&&(i.container={label:r.label,edges:u},s=!0)}}return s?i:null}function ok(e,t){if(e.width/t>.85)return"full-width";let o=e.x+e.width/2,r=t/2,a=o-r,i=t*.08;return Math.abs(a)<i?"center":a<0?"left":"right"}function Hy(e){switch(e){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function Wy(e,t={}){let n=[];e.above&&n.push(`Below \`${e.above.label}\`${e.above.gap>0?` (${e.above.gap}px gap)`:""}`),e.below&&n.push(`Above \`${e.below.label}\`${e.below.gap>0?` (${e.below.gap}px gap)`:""}`),t.includeLeftRight&&(e.left&&n.push(`Right of \`${e.left.label}\`${e.left.gap>0?` (${e.left.gap}px gap)`:""}`),e.right&&n.push(`Left of \`${e.right.label}\`${e.right.gap>0?` (${e.right.gap}px gap)`:""}`));let o=Hy(e.alignment);return e.containedIn?n.push(`${o.charAt(0).toUpperCase()+o.slice(1)} in \`${e.containedIn.label}\``):n.push(`${o.charAt(0).toUpperCase()+o.slice(1)} in page`),t.includePixelRef&&t.pixelRef&&n.push(`Pixel ref: \`${t.pixelRef}\``),e.outOfBounds&&(e.outOfBounds.viewport&&n.push(`**Outside viewport** (${e.outOfBounds.viewport.join(", ")} edge${e.outOfBounds.viewport.length>1?"s":""})`),e.outOfBounds.container&&n.push(`**Outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")} edge${e.outOfBounds.container.edges.length>1?"s":""})`)),n}function rk(e,t,n){let o=[];e.above&&o.push(`below \`${e.above.label}\``),e.below&&o.push(`above \`${e.below.label}\``),e.left&&o.push(`right of \`${e.left.label}\``),e.right&&o.push(`left of \`${e.right.label}\``),e.containedIn&&o.push(`inside \`${e.containedIn.label}\``),o.push(Hy(e.alignment)),e.outOfBounds?.viewport&&o.push(`**outside viewport** (${e.outOfBounds.viewport.join(", ")})`),e.outOfBounds?.container&&o.push(`**outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")})`);let r=n?`, ${Math.round(n.width)}\xD7${Math.round(n.height)}px`:"";return`at (${Math.round(t.x)}, ${Math.round(t.y)})${r}: ${o.join(", ")}`}var _y=15;function yy(e){if(e.length<2)return[];let t=[],n=new Set;for(let o=0;o<e.length;o++){if(n.has(o))continue;let r=[o];for(let a=o+1;a<e.length;a++)n.has(a)||Math.abs(e[o].rect.y-e[a].rect.y)<_y&&r.push(a);if(r.length>=2){let a=r.map(l=>e[l]);a.sort((l,c)=>l.rect.x-c.rect.x);let i=[];for(let l=0;l<a.length-1;l++)i.push(Math.round(a[l+1].rect.x-(a[l].rect.x+a[l].rect.width)));let s=Math.round(a.reduce((l,c)=>l+c.rect.y,0)/a.length);t.push({labels:a.map(l=>l.label),type:"row",sharedEdge:s,gaps:i,avgGap:i.length?Math.round(i.reduce((l,c)=>l+c,0)/i.length):0}),r.forEach(l=>n.add(l))}}for(let o=0;o<e.length;o++){if(n.has(o))continue;let r=[o];for(let a=o+1;a<e.length;a++)n.has(a)||Math.abs(e[o].rect.x-e[a].rect.x)<_y&&r.push(a);if(r.length>=2){let a=r.map(l=>e[l]);a.sort((l,c)=>l.rect.y-c.rect.y);let i=[];for(let l=0;l<a.length-1;l++)i.push(Math.round(a[l+1].rect.y-(a[l].rect.y+a[l].rect.height)));let s=Math.round(a.reduce((l,c)=>l+c.rect.x,0)/a.length);t.push({labels:a.map(l=>l.label),type:"column",sharedEdge:s,gaps:i,avgGap:i.length?Math.round(i.reduce((l,c)=>l+c,0)/i.length):0}),r.forEach(l=>n.add(l))}}return t}function ak(e){if(e.length<2)return[];let t=yy(e.map(i=>({label:i.label,rect:i.originalRect}))),n=yy(e.map(i=>({label:i.label,rect:i.currentRect}))),o=[],r=new Set;for(let i of t){let s=new Set(i.labels),l=null,c=0;for(let u of n){let p=u.labels.filter(d=>s.has(d)).length;p>=2&&p>c&&(l=u,c=p)}if(l){let u=l.labels.filter(d=>s.has(d)),p=u.join(", ");if(l.type!==i.type){let d=i.type==="row"?"y":"x",y=l.type==="row"?"y":"x";o.push(`**${p}**: ${i.type} (${d}\u2248${i.sharedEdge}, ${i.avgGap}px gaps) \u2192 ${l.type} (${y}\u2248${l.sharedEdge}, ${l.avgGap}px gaps)`)}else if(Math.abs(i.sharedEdge-l.sharedEdge)>20||Math.abs(i.avgGap-l.avgGap)>5){let d=i.type==="row"?"y":"x",y=Math.abs(i.sharedEdge-l.sharedEdge)>20?` ${d}: ${i.sharedEdge} \u2192 ${l.sharedEdge}`:"",_=Math.abs(i.avgGap-l.avgGap)>5?` gaps: ${i.avgGap}px \u2192 ${l.avgGap}px`:"";o.push(`**${p}**: ${i.type} shifted \u2014${y}${_}`)}u.forEach(d=>r.add(d))}else{let u=i.labels.join(", "),p=i.type==="row"?"y":"x";o.push(`**${u}**: ${i.type} (${p}\u2248${i.sharedEdge}) dissolved`),i.labels.forEach(d=>r.add(d))}}for(let i of n){if(i.labels.every(c=>r.has(c))||i.labels.filter(c=>!r.has(c)).length<2)continue;if(!t.some(c=>c.labels.filter(p=>i.labels.includes(p)).length>=2)){let c=i.type==="row"?"y":"x";o.push(`**${i.labels.join(", ")}**: new ${i.type} (${c}\u2248${i.sharedEdge}, ${i.avgGap}px gaps)`),i.labels.forEach(u=>r.add(u))}}let a=e.filter(i=>!r.has(i.label));if(a.length>=2){let i={};for(let s of a){let l=Math.round(s.currentRect.x/5)*5;(i[l]??(i[l]=[])).push(s.label)}for(let[s,l]of Object.entries(i))l.length>=2&&o.push(`**${l.join(", ")}**: shared left edge at x\u2248${s}`)}return o}function jy(e){if(typeof document>"u")return{viewport:e,contentArea:null};let t=[],n=new Set,o=s=>{n.has(s)||s instanceof HTMLElement&&(s.hasAttribute("data-feedback-toolbar")||Kf.has(s.tagName.toLowerCase())||(n.add(s),t.push(s)))},r=document.querySelector("main");r&&o(r);let a=document.querySelector("[role='main']");a&&o(a);for(let s of Array.from(document.body.children))if(o(s),s.children){for(let l of Array.from(s.children))if(o(l),l.children)for(let c of Array.from(l.children))o(c)}let i=null;for(let s of t){let l=s.getBoundingClientRect();if(l.height<50)continue;let c=getComputedStyle(s);if(c.maxWidth&&c.maxWidth!=="none"&&c.maxWidth!=="0px"){(!i||l.width<i.rect.width)&&(i={el:s,rect:l});continue}!i&&l.width<e.width-20&&l.width>100&&(i={el:s,rect:l})}if(i){let{el:s,rect:l}=i;return{viewport:e,contentArea:{width:Math.round(l.width),left:Math.round(l.left),right:Math.round(l.right),centerX:Math.round(l.left+l.width/2),selector:Ra(s)}}}return{viewport:e,contentArea:null}}function ik(e){if(typeof document>"u")return null;let t=document.querySelector(e);if(!t?.parentElement)return null;let n=getComputedStyle(t.parentElement),o={parentDisplay:n.display,parentSelector:Ra(t.parentElement)};return n.display.includes("flex")&&(o.flexDirection=n.flexDirection),n.display.includes("grid")&&n.gridTemplateColumns!=="none"&&(o.gridCols=n.gridTemplateColumns),n.gap&&n.gap!=="normal"&&n.gap!=="0px"&&(o.gap=n.gap),o}function Uy(e,t){let n=t.contentArea,o=n?n.width:t.viewport.width,r=n?n.left:0,a=n?n.centerX:Math.round(t.viewport.width/2),i=Math.round(e.x-r),s=Math.round(r+o-(e.x+e.width)),l=(e.width/o*100).toFixed(1),c=e.x+e.width/2,u=Math.abs(c-a)<20,p=e.width/o>.95,d=[];return p?d.push("`width: 100%` of container"):d.push(`left \`${i}px\` in container, right \`${s}px\`, width \`${l}%\` (\`${Math.round(e.width)}px\`)`),u&&!p&&d.push("centered \u2014 `margin-inline: auto`"),d.join(" \u2014 ")}function Vy(e){let{viewport:t,contentArea:n}=e,o=`### Reference Frame
`;if(o+=`- Viewport: \`${t.width}\xD7${t.height}px\`
`,n){let r=n;o+=`- Content area: \`${r.width}px\` wide, left edge at \`x=${r.left}\`, right at \`x=${r.right}\` (\`${r.selector}\`)
`,o+=`- Pixel \u2192 CSS translation:
`,o+=`  - **Horizontal position in container**: \`element.x - ${r.left}\` \u2192 use as \`margin-left\` or \`left\`
`,o+=`  - **Width as % of container**: \`element.width / ${r.width} \xD7 100\` \u2192 use as \`width: X%\`
`,o+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` \u2192 use as `margin-top` or `gap`\n",o+=`  - **Centered**: if \`|element.centerX - ${r.centerX}| < 20px\` \u2192 use \`margin-inline: auto\`
`}else o+=`- No distinct content container \u2014 elements positioned relative to full viewport
`,o+=`- Pixel \u2192 CSS translation:
`,o+=`  - **Width as % of viewport**: \`element.width / ${t.width} \xD7 100\` \u2192 use as \`width: X%\`
`,o+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(t.width/2)}| < 20px\` \u2192 use \`margin-inline: auto\`
`;return o+=`
`,o}function sk(e){let t=ik(e);if(!t)return null;let n=`\`${t.parentDisplay}\``;return t.flexDirection&&(n+=`, flex-direction: \`${t.flexDirection}\``),t.gridCols&&(n+=`, grid-template-columns: \`${t.gridCols}\``),t.gap&&(n+=`, gap: \`${t.gap}\``),`Parent: ${n} (\`${t.parentSelector}\`)`}function xy(e,t,n,o="standard"){if(e.length===0)return"";let r=[...e].sort((v,m)=>Math.abs(v.y-m.y)<20?v.x-m.x:v.y-m.y),a="";if(n?.blankCanvas?(a+=`## Wireframe: New Page

`,n.wireframePurpose&&(a+=`> **Purpose:** ${n.wireframePurpose}
>
`),a+=`> ${e.length} component${e.length!==1?"s":""} placed \u2014 this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):a+=`## Design Layout

> ${e.length} component${e.length!==1?"s":""} placed

`,o==="compact")return a+=`### Components
`,r.forEach((v,m)=>{let g=Wo[v.type]?.label||v.type;a+=`${m+1}. **${g}** \u2014 \`${Math.round(v.width)}\xD7${Math.round(v.height)}px\` at \`(${Math.round(v.x)}, ${Math.round(v.y)})\`
`}),a;let i=jy(t);a+=Vy(i),a+=`### Components
`,r.forEach((v,m)=>{let g=Wo[v.type]?.label||v.type,E={x:v.x,y:v.y,width:v.width,height:v.height};a+=`${m+1}. **${g}** \u2014 \`${Math.round(v.width)}\xD7${Math.round(v.height)}px\` at \`(${Math.round(v.x)}, ${Math.round(v.y)})\`
`;let I=Qf(E),oe=Wy(I,{includeLeftRight:o==="detailed"||o==="forensic"});for(let Z of oe)a+=`   - ${Z}
`;let z=Uy(E,i);z&&(a+=`   - CSS: ${z}
`)}),a+=`
### Layout Analysis
`;let s=[];for(let v of r){let m=s.find(g=>Math.abs(g.y-v.y)<30);m?m.items.push(v):s.push({y:v.y,items:[v]})}if(s.sort((v,m)=>v.y-m.y),s.forEach((v,m)=>{v.items.sort((E,I)=>E.x-I.x);let g=v.items.map(E=>Wo[E.type]?.label||E.type);if(v.items.length===1){let I=v.items[0].width>t.width*.8;a+=`- Row ${m+1} (y\u2248${Math.round(v.y)}): ${g[0]}${I?" \u2014 full width":""}
`}else a+=`- Row ${m+1} (y\u2248${Math.round(v.y)}): ${g.join(" | ")} \u2014 ${v.items.length} items side by side
`}),o==="detailed"||o==="forensic"){a+=`
### Spacing & Gaps
`;for(let v=0;v<r.length-1;v++){let m=r[v],g=r[v+1],E=Wo[m.type]?.label||m.type,I=Wo[g.type]?.label||g.type,D=Math.round(g.y-(m.y+m.height)),oe=Math.round(g.x-(m.x+m.width));Math.abs(m.y-g.y)<30?a+=`- ${E} \u2192 ${I}: \`${oe}px\` horizontal gap
`:a+=`- ${E} \u2192 ${I}: \`${D}px\` vertical gap
`}if(o==="forensic"&&r.length>2){a+=`
### All Pairwise Gaps
`;for(let v=0;v<r.length;v++)for(let m=v+1;m<r.length;m++){let g=r[v],E=r[m],I=Wo[g.type]?.label||g.type,D=Wo[E.type]?.label||E.type,oe=Math.round(E.y-(g.y+g.height)),z=Math.round(E.x-(g.x+g.width));a+=`- ${I} \u2194 ${D}: h=\`${z}px\` v=\`${oe}px\`
`}}o==="forensic"&&(a+=`
### Z-Order (placement order)
`,e.forEach((v,m)=>{let g=Wo[v.type]?.label||v.type;a+=`${m}. ${g} at \`(${Math.round(v.x)}, ${Math.round(v.y)})\`
`}))}a+=`
### Suggested Implementation
`;let l=r.some(v=>v.type==="navigation"),c=r.some(v=>v.type==="hero"),u=r.some(v=>v.type==="sidebar"),p=r.some(v=>v.type==="footer"),d=r.filter(v=>v.type==="card"),y=r.filter(v=>v.type==="form"),_=r.filter(v=>v.type==="table"),C=r.filter(v=>v.type==="modal");if(l&&(a+=`- Top navigation bar with logo + nav links + CTA
`),c&&(a+=`- Hero section with heading, subtext, and call-to-action
`),u&&(a+=`- Sidebar layout \u2014 use CSS Grid with sidebar + main content area
`),d.length>1?a+=`- ${d.length}-column card grid \u2014 use CSS Grid or Flexbox
`:d.length===1&&(a+=`- Card component with image + content area
`),y.length>0&&(a+=`- ${y.length} form${y.length>1?"s":""} \u2014 add proper labels, validation, and submit handling
`),_.length>0&&(a+=`- Data table \u2014 consider sortable columns and pagination
`),C.length>0&&(a+=`- Modal dialog \u2014 add overlay backdrop and focus trapping
`),p&&(a+=`- Multi-column footer with links
`),o==="detailed"||o==="forensic"){if(a+=`
### CSS Suggestions
`,u){let v=r.find(m=>m.type==="sidebar");a+=`- \`display: grid; grid-template-columns: ${Math.round(v.width)}px 1fr;\`
`}if(d.length>1){let v=Math.round(d[0].width);a+=`- \`display: grid; grid-template-columns: repeat(${d.length}, ${v}px); gap: 16px;\`
`}l&&(a+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return a}function vy(e,t="standard",n){let{sections:o}=e,r=[];for(let u of o){let p=u.originalRect,d=u.currentRect,y=Math.abs(p.x-d.x)>1||Math.abs(p.y-d.y)>1,_=Math.abs(p.width-d.width)>1||Math.abs(p.height-d.height)>1;if(!y&&!_){t==="forensic"&&r.push({section:u,posMoved:!1,sizeChanged:!1});continue}r.push({section:u,posMoved:y,sizeChanged:_})}if(r.length===0||t!=="forensic"&&r.every(u=>!u.posMoved&&!u.sizeChanged))return"";let a=`## Suggested Layout Changes

`,i=n?n.width:typeof window<"u"?window.innerWidth:0,s=n?n.height:typeof window<"u"?window.innerHeight:0,l=jy({width:i,height:s});t!=="compact"&&(a+=Vy(l)),t==="forensic"&&(a+=`> Detected at: \`${new Date(e.detectedAt).toISOString()}\`
`,a+=`> Total sections: ${o.length}

`);let c=u=>o.map(p=>({label:p.label,selector:p.selector,rect:u==="original"?p.originalRect:p.currentRect}));a+=`**Changes:**
`;for(let{section:u,posMoved:p,sizeChanged:d}of r){let y=u.originalRect,_=u.currentRect;if(!p&&!d){a+=`- ${u.label} \u2014 unchanged at (${Math.round(_.x)}, ${Math.round(_.y)}) ${Math.round(_.width)}\xD7${Math.round(_.height)}px
`;continue}if(t==="compact"){p&&d?a+=`- Suggested: move **${u.label}** to (${Math.round(_.x)}, ${Math.round(_.y)}) ${Math.round(_.width)}\xD7${Math.round(_.height)}px
`:p?a+=`- Suggested: move **${u.label}** to (${Math.round(_.x)}, ${Math.round(_.y)})
`:a+=`- Suggested: resize **${u.label}** to ${Math.round(_.width)}\xD7${Math.round(_.height)}px
`;continue}if(p&&d?a+=`- Suggested: move and resize **${u.label}**
`:p?a+=`- Suggested: move **${u.label}**
`:a+=`- Suggested: resize **${u.label}** from ${Math.round(y.width)}\xD7${Math.round(y.height)}px to ${Math.round(_.width)}\xD7${Math.round(_.height)}px
`,p){let v=Qf(y,c("original")),m=Qf(_,c("current")),g=d?{width:y.width,height:y.height}:void 0;a+=`  - Currently ${rk(v,{x:y.x,y:y.y},g)}
`;let E=d?{width:_.width,height:_.height}:void 0,I=`at (${Math.round(_.x)}, ${Math.round(_.y)})`,D=E?`, ${Math.round(E.width)}\xD7${Math.round(E.height)}px`:"",z=Wy(m,{includeLeftRight:t==="detailed"||t==="forensic"});if(z.length>0){a+=`  - Suggested position ${I}${D}: ${z[0]}
`;for(let ge=1;ge<z.length;ge++)a+=`    ${z[ge]}
`}else a+=`  - Suggested position ${I}${D}
`;let Z=Uy(_,l);Z&&(a+=`  - CSS: ${Z}
`)}let C=sk(u.selector);if(C&&(a+=`  - ${C}
`),a+=`  - Selector: \`${u.selector}\`
`,t==="detailed"||t==="forensic"){let v=u.className?`${u.tagName}.${u.className.split(" ")[0]}`:u.tagName;v!==u.selector&&(a+=`  - Element: \`${v}\`
`),u.role&&(a+=`  - Role: \`${u.role}\`
`),t==="forensic"&&u.textSnippet&&(a+=`  - Text: "${u.textSnippet}"
`)}t==="forensic"&&(a+=`  - Original rect: \`{ x: ${Math.round(y.x)}, y: ${Math.round(y.y)}, w: ${Math.round(y.width)}, h: ${Math.round(y.height)} }\`
`,a+=`  - Current rect: \`{ x: ${Math.round(_.x)}, y: ${Math.round(_.y)}, w: ${Math.round(_.width)}, h: ${Math.round(_.height)} }\`
`)}if(t!=="compact"){let u=r.filter(d=>d.posMoved).map(d=>({label:d.section.label,originalRect:d.section.originalRect,currentRect:d.section.currentRect})),p=ak(u);if(p.length>0){a+=`
### Layout Summary
`;for(let d of p)a+=`- ${d}
`}}if(t!=="compact"&&o.length>1){a+=`
### All Sections (current positions)
`;let u=[...o].sort((p,d)=>Math.abs(p.currentRect.y-d.currentRect.y)<20?p.currentRect.x-d.currentRect.x:p.currentRect.y-d.currentRect.y);for(let p of u){let d=p.currentRect,y=Math.abs(d.x-p.originalRect.x)>1||Math.abs(d.y-p.originalRect.y)>1||Math.abs(d.width-p.originalRect.width)>1||Math.abs(d.height-p.originalRect.height)>1;a+=`- ${p.label}: \`${Math.round(d.width)}\xD7${Math.round(d.height)}px\` at \`(${Math.round(d.x)}, ${Math.round(d.y)})\`${y?" \u2190 suggested":""}
`}}return a}var Gf="feedback-annotations-",Yy=7;function Cd(e){return`${Gf}${e}`}function kr(e){if(typeof window>"u")return[];try{let t=localStorage.getItem(Cd(e));if(!t)return[];let n=JSON.parse(t),o=Date.now()-Yy*24*60*60*1e3;return n.filter(r=>!r.timestamp||r.timestamp>o)}catch{return[]}}function ea(e,t){if(!(typeof window>"u"))try{localStorage.setItem(Cd(e),JSON.stringify(t))}catch{}}function lk(){let e=new Map;if(typeof window>"u")return e;try{let t=Date.now()-Yy*24*60*60*1e3;for(let n=0;n<localStorage.length;n++){let o=localStorage.key(n);if(o?.startsWith(Gf)){let r=o.slice(Gf.length),a=localStorage.getItem(o);if(a){let s=JSON.parse(a).filter(l=>!l.timestamp||l.timestamp>t);s.length>0&&e.set(r,s)}}}}catch{}return e}function Zs(e,t,n){let o=t.map(r=>({...r,_syncedTo:n}));ea(e,o)}var th="agentation-design-";function ck(e){if(typeof window>"u")return[];try{let t=localStorage.getItem(`${th}${e}`);return t?JSON.parse(t):[]}catch{return[]}}function dk(e,t){if(!(typeof window>"u"))try{localStorage.setItem(`${th}${e}`,JSON.stringify(t))}catch{}}function uk(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${th}${e}`)}catch{}}var nh="agentation-rearrange-";function pk(e){if(typeof window>"u")return null;try{let t=localStorage.getItem(`${nh}${e}`);return t?JSON.parse(t):null}catch{return null}}function fk(e,t){if(!(typeof window>"u"))try{localStorage.setItem(`${nh}${e}`,JSON.stringify(t))}catch{}}function hk(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${nh}${e}`)}catch{}}var oh="agentation-wireframe-";function mk(e){if(typeof window>"u")return null;try{let t=localStorage.getItem(`${oh}${e}`);return t?JSON.parse(t):null}catch{return null}}function wy(e,t){if(!(typeof window>"u"))try{localStorage.setItem(`${oh}${e}`,JSON.stringify(t))}catch{}}function yd(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${oh}${e}`)}catch{}}var Xy="agentation-session-";function rh(e){return`${Xy}${e}`}function gk(e){if(typeof window>"u")return null;try{return localStorage.getItem(rh(e))}catch{return null}}function Bf(e,t){if(!(typeof window>"u"))try{localStorage.setItem(rh(e),t)}catch{}}function _k(e){if(!(typeof window>"u"))try{localStorage.removeItem(rh(e))}catch{}}var Zf=`${Xy}toolbar-hidden`;function yk(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(Zf)==="1"}catch{return!1}}function xk(e){if(!(typeof window>"u"))try{e?sessionStorage.setItem(Zf,"1"):sessionStorage.removeItem(Zf)}catch{}}async function zf(e,t){let n=await fetch(`${e}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})});if(!n.ok)throw new Error(`Failed to create session: ${n.status}`);return n.json()}async function by(e,t){let n=await fetch(`${e}/sessions/${t}`);if(!n.ok)throw new Error(`Failed to get session: ${n.status}`);return n.json()}async function Li(e,t,n){let o=await fetch(`${e}/sessions/${t}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!o.ok)throw new Error(`Failed to sync annotation: ${o.status}`);return o.json()}async function ky(e,t,n){let o=await fetch(`${e}/annotations/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!o.ok)throw new Error(`Failed to update annotation: ${o.status}`);return o.json()}async function Jr(e,t){let n=await fetch(`${e}/annotations/${t}`,{method:"DELETE"});if(!n.ok)throw new Error(`Failed to delete annotation: ${n.status}`)}var St={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},Cy=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),Sy=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],vk=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function wk(e){let t=e?.mode??"filtered",n=Cy;if(e?.skipExact){let o=e.skipExact instanceof Set?e.skipExact:new Set(e.skipExact);n=new Set([...Cy,...o])}return{maxComponents:e?.maxComponents??6,maxDepth:e?.maxDepth??30,mode:t,skipExact:n,skipPatterns:e?.skipPatterns?[...Sy,...e.skipPatterns]:Sy,userPatterns:e?.userPatterns??vk,filter:e?.filter}}function bk(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function kk(e,t=10){let n=new Set,o=e,r=0;for(;o&&r<t;)o.className&&typeof o.className=="string"&&o.className.split(/\s+/).forEach(a=>{if(a.length>1){let i=a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();i.length>1&&n.add(i)}}),o=o.parentElement,r++;return n}function Ck(e,t){let n=bk(e);for(let o of t){if(o===n)return!0;let r=n.split("-").filter(i=>i.length>2),a=o.split("-").filter(i=>i.length>2);for(let i of r)for(let s of a)if(i===s||i.includes(s)||s.includes(i))return!0}return!1}function Sk(e,t,n,o){if(n.filter)return n.filter(e,t);switch(n.mode){case"all":return!0;case"filtered":return!(n.skipExact.has(e)||n.skipPatterns.some(r=>r.test(e)));case"smart":return n.skipExact.has(e)||n.skipPatterns.some(r=>r.test(e))?!1:!!(o&&Ck(e,o)||n.userPatterns.some(r=>r.test(e)));default:return!0}}var Ti=null,Ek=new WeakMap;function Ff(e){return Object.keys(e).some(t=>t.startsWith("__reactFiber$")||t.startsWith("__reactInternalInstance$")||t.startsWith("__reactProps$"))}function Mk(){if(Ti!==null)return Ti;if(typeof document>"u")return!1;if(document.body&&Ff(document.body))return Ti=!0,!0;let e=["#root","#app","#__next","[data-reactroot]"];for(let t of e){let n=document.querySelector(t);if(n&&Ff(n))return Ti=!0,!0}if(document.body){for(let t of document.body.children)if(Ff(t))return Ti=!0,!0}return Ti=!1,!1}var Js={map:Ek};function Lk(e){return Object.keys(e).find(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$"))||null}function Tk(e){let t=Lk(e);return t?e[t]:null}function Ta(e){return e?e.displayName?e.displayName:e.name?e.name:null:null}function $k(e){let{tag:t,type:n,elementType:o}=e;if(t===St.HostComponent||t===St.HostText||t===St.HostHoistable||t===St.HostSingleton||t===St.Fragment||t===St.Mode||t===St.Profiler||t===St.DehydratedFragment||t===St.HostRoot||t===St.HostPortal||t===St.ScopeComponent||t===St.OffscreenComponent||t===St.LegacyHiddenComponent||t===St.CacheComponent||t===St.TracingMarkerComponent||t===St.Throw||t===St.ViewTransitionComponent||t===St.ActivityComponent)return null;if(t===St.ForwardRef){let r=o;if(r?.render){let a=Ta(r.render);if(a)return a}return r?.displayName?r.displayName:Ta(n)}if(t===St.MemoComponent||t===St.SimpleMemoComponent){let r=o;if(r?.type){let a=Ta(r.type);if(a)return a}return r?.displayName?r.displayName:Ta(n)}if(t===St.ContextProvider){let r=n;return r?._context?.displayName?`${r._context.displayName}.Provider`:null}if(t===St.ContextConsumer){let r=n;return r?.displayName?`${r.displayName}.Consumer`:null}if(t===St.LazyComponent){let r=o;return r?._status===1&&r._result?Ta(r._result):null}return t===St.SuspenseComponent||t===St.SuspenseListComponent?null:t===St.IncompleteClassComponent||t===St.IncompleteFunctionComponent||t===St.FunctionComponent||t===St.ClassComponent||t===St.IndeterminateComponent?Ta(n):null}function Ik(e){return e.length<=2||e.length<=3&&e===e.toLowerCase()}function Pk(e,t){let n=wk(t),o=n.mode==="all";if(o){let l=Js.map.get(e);if(l!==void 0)return l}if(!Mk()){let l={path:null,components:[]};return o&&Js.map.set(e,l),l}let r=n.mode==="smart"?kk(e):void 0,a=[];try{let l=Tk(e),c=0;for(;l&&c<n.maxDepth&&a.length<n.maxComponents;){let u=$k(l);u&&!Ik(u)&&Sk(u,c,n,r)&&a.push(u),l=l.return,c++}}catch{let l={path:null,components:[]};return o&&Js.map.set(e,l),l}if(a.length===0){let l={path:null,components:[]};return o&&Js.map.set(e,l),l}let s={path:a.slice().reverse().map(l=>`<${l}>`).join(" "),components:a};return o&&Js.map.set(e,s),s}var el={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16};function Nk(e){if(!e||typeof e!="object")return null;let t=Object.keys(e),n=t.find(a=>a.startsWith("__reactFiber$"));if(n)return e[n]||null;let o=t.find(a=>a.startsWith("__reactInternalInstance$"));if(o)return e[o]||null;let r=t.find(a=>{if(!a.startsWith("__react"))return!1;let i=e[a];return i&&typeof i=="object"&&"_debugSource"in i});return r&&e[r]||null}function ol(e){if(!e.type||typeof e.type=="string")return null;if(typeof e.type=="object"||typeof e.type=="function"){let t=e.type;if(t.displayName)return t.displayName;if(t.name)return t.name}return null}function Rk(e,t=50){let n=e,o=0;for(;n&&o<t;){if(n._debugSource)return{source:n._debugSource,componentName:ol(n)};if(n._debugOwner?._debugSource)return{source:n._debugOwner._debugSource,componentName:ol(n._debugOwner)};n=n.return,o++}return null}function Ak(e){let t=e,n=0,o=50;for(;t&&n<o;){let r=t,a=["_debugSource","__source","_source","debugSource"];for(let i of a){let s=r[i];if(s&&typeof s=="object"&&"fileName"in s)return{source:s,componentName:ol(t)}}if(t.memoizedProps){let i=t.memoizedProps;if(i.__source&&typeof i.__source=="object"){let s=i.__source;if(s.fileName&&s.lineNumber)return{source:{fileName:s.fileName,lineNumber:s.lineNumber,columnNumber:s.columnNumber},componentName:ol(t)}}}t=t.return,n++}return null}var xd=new Map;function Dk(e){let t=e.tag,n=e.type,o=e.elementType;if(typeof n=="string"||n==null||typeof n=="function"&&n.prototype?.isReactComponent)return null;if((t===el.FunctionComponent||t===el.IndeterminateComponent)&&typeof n=="function")return n;if(t===el.ForwardRef&&o){let r=o.render;if(typeof r=="function")return r}if((t===el.MemoComponent||t===el.SimpleMemoComponent)&&o){let r=o.type;if(typeof r=="function")return r}return typeof n=="function"?n:null}function Ok(){let e=qy.default,t=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(t&&"H"in t)return{get:()=>t.H,set:o=>{t.H=o}};let n=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(n){let o=n.ReactCurrentDispatcher;if(o&&"current"in o)return{get:()=>o.current,set:r=>{o.current=r}}}return null}function Bk(e){let t=e.split(`
`),n=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],o=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,r=/^[^@]*@(.+?):(\d+):(\d+)$/;for(let a of t){let i=a.trim();if(!i||n.some(l=>l.test(i)))continue;let s=o.exec(i)||r.exec(i);if(s)return{fileName:s[1],line:parseInt(s[2],10),column:parseInt(s[3],10)}}return null}function zk(e){let t=e;return t=t.replace(/[?#].*$/,""),t=t.replace(/^turbopack:\/\/\/\[project\]\//,""),t=t.replace(/^webpack-internal:\/\/\/\.\//,""),t=t.replace(/^webpack-internal:\/\/\//,""),t=t.replace(/^webpack:\/\/\/\.\//,""),t=t.replace(/^webpack:\/\/\//,""),t=t.replace(/^turbopack:\/\/\//,""),t=t.replace(/^https?:\/\/[^/]+\//,""),t=t.replace(/^file:\/\/\//,"/"),t=t.replace(/^\([^)]+\)\/\.\//,""),t=t.replace(/^\.\//,""),t}function Fk(e){let t=Dk(e);if(!t)return null;if(xd.has(t))return xd.get(t);let n=Ok();if(!n)return xd.set(t,null),null;let o=n.get(),r=null;try{let a=new Proxy({},{get(){throw new Error("probe")}});n.set(a);try{t({})}catch(i){if(i instanceof Error&&i.message==="probe"&&i.stack){let s=Bk(i.stack);s&&(r={fileName:zk(s.fileName),lineNumber:s.line,columnNumber:s.column,componentName:ol(e)||void 0})}}}finally{n.set(o)}return xd.set(t,r),r}function Hk(e,t=15){let n=e,o=0;for(;n&&o<t;){let r=Fk(n);if(r)return r;n=n.return,o++}return null}function Jf(e){let t=Nk(e);if(!t)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let n=Rk(t);if(n||(n=Ak(t)),n?.source)return{found:!0,source:{fileName:n.source.fileName,lineNumber:n.source.lineNumber,columnNumber:n.source.columnNumber,componentName:n.componentName||void 0},isReactApp:!0,isProduction:!1};let o=Hk(t);return o?{found:!0,source:o,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function Wk(e,t="path"){let{fileName:n,lineNumber:o,columnNumber:r}=e,a=`${n}:${o}`;return r!==void 0&&(a+=`:${r}`),t==="vscode"?`vscode://file${n.startsWith("/")?"":"/"}${a}`:a}function jk(e,t=10){let n=e,o=0;for(;n&&o<t;){let r=Jf(n);if(r.found)return r;n=n.parentElement,o++}return Jf(e)}var Uk=`.styles-module__toolbar___wNsdK svg[fill=none],
.styles-module__markersLayer___-25j1 svg[fill=none],
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] {
  fill: none !important;
}
.styles-module__toolbar___wNsdK svg[fill=none] :not([fill]),
.styles-module__markersLayer___-25j1 svg[fill=none] :not([fill]),
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__controlsContent___9GJWU :where(button, input, select, textarea, label) {
  background: unset;
  border: unset;
  border-radius: unset;
  padding: unset;
  margin: unset;
  color: unset;
  font-family: unset;
  font-weight: unset;
  font-style: unset;
  line-height: unset;
  letter-spacing: unset;
  text-transform: unset;
  text-decoration: unset;
  box-shadow: unset;
  outline: unset;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__toolbarHide___y8kaT {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.styles-module__disableTransitions___EopxO :is(*, *::before, *::after) {
  transition: none !important;
}

.styles-module__toolbar___wNsdK {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 337px;
  z-index: 100000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0s, top 0s, right 0s, bottom 0s;
}

:where(.styles-module__toolbar___wNsdK) {
  bottom: 1.25rem;
  right: 1.25rem;
}

.styles-module__toolbarContainer___dIhma {
  position: relative;
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {
  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
  pointer-events: none;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {
  margin-top: -1px;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 1.5rem;
  padding: 0.375rem;
  width: 297px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 337px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {
  opacity: 0;
  pointer-events: none;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.4);
}

.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background-color: color-mix(in srgb, var(--agentation-color-blue) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
[data-agentation-theme=light] .styles-module__buttonBadge___NeFWb {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-yellow) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-yellow) 0%, transparent);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background-color 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background-color: var(--agentation-color-green);
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background-color: var(--agentation-color-red);
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transition-delay: 0s;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -0.375rem;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1), margin 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.125rem;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-accent) 50%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-accent) 4%, transparent);
  pointer-events: none !important;
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-green) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-blue) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-blue) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(255, 255, 255, 0.07);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___InP0r {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___NKlmo {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: var(--agentation-color-blue);
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
[data-agentation-theme=light] .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
  color: var(--agentation-color-blue);
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: var(--swatch);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___IodiY {
    background-color: var(--swatch-p3);
  }
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
  border-color: var(--swatch);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
    border-color: var(--swatch-p3);
  }
}

.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

.styles-module__customCheckbox___U39ax {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}
.styles-module__customCheckbox___U39ax svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
input[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}

.styles-module__toggleLabel___Xm8Aa {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
[data-agentation-theme=light] .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__toggleSwitch___l4Ygm {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.styles-module__toggleSwitch___l4Ygm input {
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn {
  background-color: var(--agentation-color-blue);
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn::before {
  transform: translateX(8px);
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw {
  opacity: 0.4;
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw .styles-module__toggleSlider___wprIn {
  cursor: not-allowed;
}

.styles-module__toggleSlider___wprIn {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border-radius: 16px;
  background: #484848;
}
[data-agentation-theme=light] .styles-module__toggleSlider___wprIn {
  background: #dddddd;
}
.styles-module__toggleSlider___wprIn::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__drawCanvas___7cG9U {
  position: fixed;
  inset: 0;
  z-index: 99996;
  pointer-events: none !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6 {
  pointer-events: auto !important;
  cursor: crosshair !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6[data-stroke-hover] {
  cursor: pointer !important;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-green) 8%, transparent);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--agentation-color-green);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--agentation-color-green) 6%, transparent);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
[data-agentation-theme=light] .styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}`,Vk={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(e)),e.textContent=Uk}var se=Vk,tl=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function Ey(e,t,n="standard"){if(e.length===0)return"";let o=typeof window<"u"?`${window.innerWidth}\xD7${window.innerHeight}`:"unknown",r=`## Page Feedback: ${t}
`;return n==="forensic"?(r+=`
**Environment:**
`,r+=`- Viewport: ${o}
`,typeof window<"u"&&(r+=`- URL: ${window.location.href}
`,r+=`- User Agent: ${navigator.userAgent}
`,r+=`- Timestamp: ${new Date().toISOString()}
`,r+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),r+=`
---
`):n!=="compact"&&(r+=`**Viewport:** ${o}
`),r+=`
`,e.forEach((a,i)=>{n==="compact"?(r+=`${i+1}. **${a.element}**${a.sourceFile?` (${a.sourceFile})`:""}: ${a.comment}`,a.selectedText&&(r+=` (re: "${a.selectedText.slice(0,30)}${a.selectedText.length>30?"...":""}")`),r+=`
`):n==="forensic"?(r+=`### ${i+1}. ${a.element}
`,a.isMultiSelect&&a.fullPath&&(r+=`*Forensic data shown for first element of selection*
`),a.fullPath&&(r+=`**Full DOM Path:** ${a.fullPath}
`),a.cssClasses&&(r+=`**CSS Classes:** ${a.cssClasses}
`),a.boundingBox&&(r+=`**Position:** x:${Math.round(a.boundingBox.x)}, y:${Math.round(a.boundingBox.y)} (${Math.round(a.boundingBox.width)}\xD7${Math.round(a.boundingBox.height)}px)
`),r+=`**Annotation at:** ${a.x.toFixed(1)}% from left, ${Math.round(a.y)}px from top
`,a.selectedText&&(r+=`**Selected text:** "${a.selectedText}"
`),a.nearbyText&&!a.selectedText&&(r+=`**Context:** ${a.nearbyText.slice(0,100)}
`),a.computedStyles&&(r+=`**Computed Styles:** ${a.computedStyles}
`),a.accessibility&&(r+=`**Accessibility:** ${a.accessibility}
`),a.nearbyElements&&(r+=`**Nearby Elements:** ${a.nearbyElements}
`),a.sourceFile&&(r+=`**Source:** ${a.sourceFile}
`),a.reactComponents&&(r+=`**React:** ${a.reactComponents}
`),r+=`**Feedback:** ${a.comment}

`):(r+=`### ${i+1}. ${a.element}
`,r+=`**Location:** ${a.elementPath}
`,a.sourceFile&&(r+=`**Source:** ${a.sourceFile}
`),a.reactComponents&&(r+=`**React:** ${a.reactComponents}
`),n==="detailed"&&(a.cssClasses&&(r+=`**Classes:** ${a.cssClasses}
`),a.boundingBox&&(r+=`**Position:** ${Math.round(a.boundingBox.x)}px, ${Math.round(a.boundingBox.y)}px (${Math.round(a.boundingBox.width)}\xD7${Math.round(a.boundingBox.height)}px)
`)),a.selectedText&&(r+=`**Selected text:** "${a.selectedText}"
`),n==="detailed"&&a.nearbyText&&!a.selectedText&&(r+=`**Context:** ${a.nearbyText.slice(0,100)}
`),r+=`**Feedback:** ${a.comment}

`)}),r.trim()}var Yk=`@keyframes styles-module__markerIn___x4G8D {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___6VhQN {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__tooltipIn___aJslQ {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(2px) scale(0.891);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(0.909);
  }
}
@keyframes styles-module__renumberRoll___akV9B {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__marker___9CKF7 {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___9CKF7:hover {
  z-index: 2;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___9CKF7.styles-module__enter___8kI3q {
  animation: styles-module__markerIn___x4G8D 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___9CKF7.styles-module__exit___KBdR3 {
  animation: styles-module__markerOut___6VhQN 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7.styles-module__clearing___8rM7K {
  animation: styles-module__markerOut___6VhQN 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___9CKF7.styles-module__fixed___aKrQO {
  position: fixed;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___9CKF7.styles-module__hovered___-mg2N {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___16lvD {
  display: block;
  animation: styles-module__renumberRoll___akV9B 0.2s ease-out;
}

.styles-module__markerTooltip___-VUm- {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___-VUm-.styles-module__enter___8kI3q {
  animation: styles-module__tooltipIn___aJslQ 0.1s ease-out forwards;
}

.styles-module__markerQuote___tQake {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___Rh4eI {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- {
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerQuote___tQake {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerNote___Rh4eI {
  color: rgba(0, 0, 0, 0.85);
}`,Xk={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",markerIn:"styles-module__markerIn___x4G8D",markerOut:"styles-module__markerOut___6VhQN",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",renumberRoll:"styles-module__renumberRoll___akV9B",markerTooltip:"styles-module__markerTooltip___-VUm-",tooltipIn:"styles-module__tooltipIn___aJslQ",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-annotation-marker-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(e)),e.textContent=Yk}var un=Xk;function My({annotation:e,globalIndex:t,layerIndex:n,layerSize:o,isExiting:r,isClearing:a,isAnimated:i,isHovered:s,isDeleting:l,isEditingAny:c,renumberFrom:u,markerClickBehavior:p,tooltipStyle:d,onHoverEnter:y,onHoverLeave:_,onClick:C,onContextMenu:v}){let m=(s||l)&&!c,g=m&&p==="delete",E=e.isMultiSelect,I=E?"var(--agentation-color-green)":"var(--agentation-color-accent)",D=r?un.exit:a?un.clearing:i?"":un.enter,oe=r?`${(o-1-n)*20}ms`:`${n*20}ms`;return(0,yo.jsxs)("div",{className:`${un.marker} ${E?un.multiSelect:""} ${D} ${g?un.hovered:""}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y,backgroundColor:g?void 0:I,animationDelay:oe},onMouseEnter:()=>y(e),onMouseLeave:_,onClick:z=>{z.stopPropagation(),r||C(e)},onContextMenu:v?z=>{p==="delete"&&(z.preventDefault(),z.stopPropagation(),r||v(e))}:void 0,children:[m?g?(0,yo.jsx)(Ny,{size:E?18:16}):(0,yo.jsx)(eh,{size:16}):(0,yo.jsx)("span",{className:u!==null&&t>=u?un.renumber:void 0,children:t+1}),s&&!c&&(0,yo.jsxs)("div",{className:`${un.markerTooltip} ${un.enter}`,style:d,children:[(0,yo.jsxs)("span",{className:un.markerQuote,children:[e.element,e.selectedText&&` "${e.selectedText.slice(0,30)}${e.selectedText.length>30?"...":""}"`]}),(0,yo.jsx)("span",{className:un.markerNote,children:e.comment})]})]})}function qk({x:e,y:t,isMultiSelect:n,isExiting:o}){return(0,yo.jsx)("div",{className:`${un.marker} ${un.pending} ${n?un.multiSelect:""} ${o?un.exit:un.enter}`,style:{left:`${e}%`,top:t,backgroundColor:n?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:(0,yo.jsx)(Kw,{size:12})})}function Ly({annotation:e,fixed:t}){let n=e.isMultiSelect;return(0,yo.jsx)("div",{className:`${un.marker} ${t?un.fixed:""} ${un.hovered} ${n?un.multiSelect:""} ${un.exit}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y},children:(0,yo.jsx)(Ny,{size:n?12:10})})}var Kk=`.styles-module__switchContainer___Ka-AB {
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px;
  width: 24px;
  height: 16px;
  border-radius: 8px;
  background-color: #cdcdcd;
  transition: background-color 0.15s, opacity 0.15s;
}
[data-agentation-theme=dark] .styles-module__switchContainer___Ka-AB {
  background-color: #484848;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) {
  background-color: var(--agentation-color-blue);
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:disabled) {
  opacity: 0.3;
}

.styles-module__switchInput___kYDSD {
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}
.styles-module__switchInput___kYDSD:disabled {
  cursor: not-allowed;
}

.styles-module__switchThumb___4sCPH {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transition: transform 0.15s;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) .styles-module__switchThumb___4sCPH {
  transform: translateX(8px);
}`,Qk={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-switch-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-switch-styles",document.head.appendChild(e)),e.textContent=Kk}var Hf=Qk,Wf=({className:e="",...t})=>(0,rl.jsxs)("div",{className:`${Hf.switchContainer} ${e}`,children:[(0,rl.jsx)("input",{className:Hf.switchInput,type:"checkbox",...t}),(0,rl.jsx)("div",{className:Hf.switchThumb})]}),Gk=`.styles-module__checkboxContainer___joqZk {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 4px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  transition: background-color 0.2s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk {
  border-color: rgba(255, 255, 255, 0.2);
  background-color: #252525;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #1a1a1a;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #fff;
}

.styles-module__checkboxInput___ECzzO {
  position: absolute;
  z-index: 1;
  inset: -1px;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}

.styles-module__checkboxCheck___fUXpr {
  color: #fafafa;
}
[data-agentation-theme=dark] .styles-module__checkboxCheck___fUXpr {
  color: #1a1a1a;
}

.styles-module__checkboxCheckPath___cDyh8 {
  stroke-dasharray: 9.29px;
  stroke-dashoffset: 9.29px;
  color: #fafafa;
  transition: stroke-dashoffset 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxCheckPath___cDyh8 {
  color: #1a1a1a;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) .styles-module__checkboxCheckPath___cDyh8 {
  transition-duration: 0.2s;
  stroke-dashoffset: 0;
}`,Zk={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-checkbox-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(e)),e.textContent=Gk}var vd=Zk,Jk=({className:e="",...t})=>(0,Pi.jsxs)("div",{className:`${vd.checkboxContainer} ${e}`,children:[(0,Pi.jsx)("input",{className:vd.checkboxInput,type:"checkbox",...t}),(0,Pi.jsx)("svg",{className:vd.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,Pi.jsx)("path",{className:vd.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),e4=`.styles-module__container___w8eAF {
  display: flex;
  align-items: center;
  height: 24px;
}

.styles-module__label___J5mxE {
  padding-inline: 8px 2px;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.15px;
  color: rgba(26, 26, 26, 0.5);
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__label___J5mxE {
  color: rgba(255, 255, 255, 0.5);
}`,t4={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-checkbox-field-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(e)),e.textContent=e4}var Ty=t4,$y=({className:e="",label:t,tooltip:n,checked:o,onChange:r,...a})=>{let i=(0,Ky.useId)();return(0,Ni.jsxs)("div",{className:`${Ty.container} ${e}`,...a,children:[(0,Ni.jsx)(Jk,{id:i,onChange:r,checked:o}),(0,Ni.jsx)("label",{className:Ty.label,htmlFor:i,children:t}),n&&(0,Ni.jsx)(Pa,{content:n})]})},n4=`@keyframes styles-module__cycleTextIn___VBNTi {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes styles-module__scaleIn___QpQ8E {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__mcpPulse___5Q3Jj {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___VHxhx {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
@keyframes styles-module__themeIconIn___qUWMV {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.styles-module__settingsPanel___qNkn- {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 16px;
  padding: 12px 0;
  width: 100%;
  max-width: 253px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___qNkn-::before, .styles-module__settingsPanel___qNkn-::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___qNkn-::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn-::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrandSlash___Q-AU9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4,
.styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ,
.styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3,
.styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY,
.styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8,
.styles-module__settingsPanel___qNkn- .styles-module__sliderLabel___6K5v1,
.styles-module__settingsPanel___qNkn- .styles-module__slider___v5z-c,
.styles-module__settingsPanel___qNkn- .styles-module__themeToggle___3imlT {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__enter___wginS {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__exit___A4iJc {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH- {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-.styles-module__selected___k1-Vq {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__settingsPanelContainer___5it-H {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 16px;
}

.styles-module__settingsPage___BMn-3 {
  min-width: 100%;
  flex-basis: 0;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___BMn-3.styles-module__slideLeft___qUvW4 {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 0 16px 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0.styles-module__slideIn___uXDSu {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsHeader___Fn1DP {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
}

.styles-module__settingsBrand___OoKlM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___Q-AU9 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___rXmL9 {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__themeToggle___3imlT {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 8px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease;
  cursor: pointer;
}
.styles-module__themeToggle___3imlT:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___pyaYa {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___w7lAm {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___qUWMV 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.styles-module__settingsSectionGrow___eZTRw {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___y-tDE {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___y-tDE.styles-module__settingsRowMarginTop___uLpGb {
  margin-top: 8px;
}

.styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.2);
}

.styles-module__settingsLabel___VCVOQ {
  display: flex;
  align-items: center;
  column-gap: 2px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.15px;
  color: rgba(255, 255, 255, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__cycleButton___XMBx3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___XMBx3:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__cycleButtonText___mbbnD {
  display: inline-block;
  animation: styles-module__cycleTextIn___VBNTi 0.2s ease-out;
}

.styles-module__cycleDots___ehp6i {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___zgSXY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__colorOptions___pbxZx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  height: 26px;
}

.styles-module__colorOption___Co955 {
  padding: 0;
  position: relative;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__colorOption___Co955 {
  background-color: #1a1a1a;
}
.styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: var(--swatch);
  transition: opacity 0.2s, transform 0.2s;
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
    --color: var(--swatch-p3);
  }
}
.styles-module__colorOption___Co955::after {
  z-index: -1;
  transform: scale(1.2);
  opacity: 0;
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::before {
  transform: scale(0.8);
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::after {
  opacity: 1;
}

.styles-module__settingsNavLink___uYIwM {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s ease;
  cursor: pointer;
}
.styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___uYIwM svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___uYIwM:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(0, 0, 0, 0.8);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___XBUzC {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__settingsBackButton___fflll {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___fflll {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___Avra9 {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___Avra9 {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___vFTmJ {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___vFTmJ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___cG7OI {
  color: rgba(255, 255, 255, 0.8);
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___cG7OI:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendContainer___VpkXk {
  display: flex;
  align-items: center;
}

.styles-module__autoSendLabel___ngNdC {
  padding-inline-end: 8px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s, opacity 0.15s;
  cursor: pointer;
}
.styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: var(--agentation-color-blue);
}
.styles-module__autoSendLabel___ngNdC.styles-module__disabled___9AZYS {
  opacity: 0.3;
  cursor: not-allowed;
}

.styles-module__mcpStatusDot___8AMxP {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__disconnected___mvmvQ {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___VHxhx 2s infinite;
}

.styles-module__mcpNavIndicator___auBHI {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s ease-in-out infinite;
}

.styles-module__webhookUrlInput___WDDDC {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM {
  color: #E5484D;
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8:hover {
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__checkboxField___ZrSqv:not(:first-child) {
  margin-top: 8px;
}

.styles-module__divider___h6Yux {
  margin-block: 8px;
  width: 100%;
  height: 1px;
  background-color: rgba(26, 26, 26, 0.07);
}
[data-agentation-theme=dark] .styles-module__divider___h6Yux {
  background-color: rgba(255, 255, 255, 0.07);
}`,o4={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-settings-panel-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(e)),e.textContent=n4}var Ae=o4;function r4({settings:e,onSettingsChange:t,isDarkMode:n,onToggleTheme:o,isDevMode:r,connectionStatus:a,endpoint:i,isVisible:s,toolbarNearBottom:l,settingsPage:c,onSettingsPageChange:u,onHideToolbar:p}){return(0,Le.jsx)("div",{className:`${Ae.settingsPanel} ${s?Ae.enter:Ae.exit}`,style:l?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:(0,Le.jsxs)("div",{className:Ae.settingsPanelContainer,children:[(0,Le.jsxs)("div",{className:`${Ae.settingsPage} ${c==="automations"?Ae.slideLeft:""}`,children:[(0,Le.jsxs)("div",{className:Ae.settingsHeader,children:[(0,Le.jsx)("a",{className:Ae.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:(0,Le.jsx)("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Le.jsx)("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),(0,Le.jsxs)("p",{className:Ae.settingsVersion,children:["v","3.0.2"]}),(0,Le.jsx)("button",{className:Ae.themeToggle,onClick:o,title:n?"Switch to light mode":"Switch to dark mode",children:(0,Le.jsx)("span",{className:Ae.themeIconWrapper,children:(0,Le.jsx)("span",{className:Ae.themeIcon,children:n?(0,Le.jsx)(a2,{size:20}):(0,Le.jsx)(i2,{size:20})},n?"sun":"moon")})})]}),(0,Le.jsx)("div",{className:Ae.divider}),(0,Le.jsxs)("div",{className:Ae.settingsSection,children:[(0,Le.jsxs)("div",{className:Ae.settingsRow,children:[(0,Le.jsxs)("div",{className:Ae.settingsLabel,children:["Output Detail",(0,Le.jsx)(Pa,{content:"Controls how much detail is included in the copied output"})]}),(0,Le.jsxs)("button",{className:Ae.cycleButton,onClick:()=>{let y=(tl.findIndex(_=>_.value===e.outputDetail)+1)%tl.length;t({outputDetail:tl[y].value})},children:[(0,Le.jsx)("span",{className:Ae.cycleButtonText,children:tl.find(d=>d.value===e.outputDetail)?.label},e.outputDetail),(0,Le.jsx)("span",{className:Ae.cycleDots,children:tl.map(d=>(0,Le.jsx)("span",{className:`${Ae.cycleDot} ${e.outputDetail===d.value?Ae.active:""}`},d.value))})]})]}),(0,Le.jsxs)("div",{className:`${Ae.settingsRow} ${Ae.settingsRowMarginTop} ${r?"":Ae.settingsRowDisabled}`,children:[(0,Le.jsxs)("div",{className:Ae.settingsLabel,children:["React Components",(0,Le.jsx)(Pa,{content:r?"Include React component names in annotations":"Disabled \u2014 production builds minify component names, making detection unreliable. Use in development mode."})]}),(0,Le.jsx)(Wf,{checked:r&&e.reactEnabled,onChange:d=>t({reactEnabled:d.target.checked}),disabled:!r})]}),(0,Le.jsxs)("div",{className:`${Ae.settingsRow} ${Ae.settingsRowMarginTop}`,children:[(0,Le.jsxs)("div",{className:Ae.settingsLabel,children:["Hide Until Restart",(0,Le.jsx)(Pa,{content:"Hides the toolbar until you open a new tab"})]}),(0,Le.jsx)(Wf,{checked:!1,onChange:d=>{d.target.checked&&p()}})]})]}),(0,Le.jsx)("div",{className:Ae.divider}),(0,Le.jsxs)("div",{className:Ae.settingsSection,children:[(0,Le.jsx)("div",{className:`${Ae.settingsLabel} ${Ae.settingsLabelMarker}`,children:"Marker Color"}),(0,Le.jsx)("div",{className:Ae.colorOptions,children:nl.map(d=>(0,Le.jsx)("button",{className:`${Ae.colorOption} ${e.annotationColorId===d.id?Ae.selected:""}`,style:{"--swatch":d.srgb,"--swatch-p3":d.p3},onClick:()=>t({annotationColorId:d.id}),title:d.label,type:"button"},d.id))})]}),(0,Le.jsx)("div",{className:Ae.divider}),(0,Le.jsxs)("div",{className:Ae.settingsSection,children:[(0,Le.jsx)($y,{className:"checkbox-field",label:"Clear on copy/send",checked:e.autoClearAfterCopy,onChange:d=>t({autoClearAfterCopy:d.target.checked}),tooltip:"Automatically clear annotations after copying"}),(0,Le.jsx)($y,{className:Ae.checkboxField,label:"Block page interactions",checked:e.blockInteractions,onChange:d=>t({blockInteractions:d.target.checked})})]}),(0,Le.jsx)("div",{className:Ae.divider}),(0,Le.jsxs)("button",{className:Ae.settingsNavLink,onClick:()=>u("automations"),children:[(0,Le.jsx)("span",{children:"Manage MCP & Webhooks"}),(0,Le.jsxs)("span",{className:Ae.settingsNavLinkRight,children:[i&&a!=="disconnected"&&(0,Le.jsx)("span",{className:`${Ae.mcpNavIndicator} ${Ae[a]}`}),(0,Le.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Le.jsx)("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),(0,Le.jsxs)("div",{className:`${Ae.settingsPage} ${Ae.automationsPage} ${c==="automations"?Ae.slideIn:""}`,children:[(0,Le.jsxs)("button",{className:Ae.settingsBackButton,onClick:()=>u("main"),children:[(0,Le.jsx)(l2,{size:16}),(0,Le.jsx)("span",{children:"Manage MCP & Webhooks"})]}),(0,Le.jsx)("div",{className:Ae.divider}),(0,Le.jsxs)("div",{className:Ae.settingsSection,children:[(0,Le.jsxs)("div",{className:Ae.settingsRow,children:[(0,Le.jsxs)("span",{className:Ae.automationHeader,children:["MCP Connection",(0,Le.jsx)(Pa,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),i&&(0,Le.jsx)("div",{className:`${Ae.mcpStatusDot} ${Ae[a]}`,title:a==="connected"?"Connected":a==="connecting"?"Connecting...":"Disconnected"})]}),(0,Le.jsxs)("p",{className:Ae.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",(0,Le.jsx)("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:Ae.learnMoreLink,children:"Learn more"})]})]}),(0,Le.jsx)("div",{className:Ae.divider}),(0,Le.jsxs)("div",{className:`${Ae.settingsSection} ${Ae.settingsSectionGrow}`,children:[(0,Le.jsxs)("div",{className:Ae.settingsRow,children:[(0,Le.jsxs)("span",{className:Ae.automationHeader,children:["Webhooks",(0,Le.jsx)(Pa,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),(0,Le.jsxs)("div",{className:Ae.autoSendContainer,children:[(0,Le.jsx)("label",{htmlFor:"agentation-auto-send",className:`${Ae.autoSendLabel} ${e.webhooksEnabled?Ae.active:""} ${e.webhookUrl?"":Ae.disabled}`,children:"Auto-Send"}),(0,Le.jsx)(Wf,{id:"agentation-auto-send",checked:e.webhooksEnabled,onChange:d=>t({webhooksEnabled:d.target.checked}),disabled:!e.webhookUrl})]})]}),(0,Le.jsx)("p",{className:Ae.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),(0,Le.jsx)("textarea",{className:Ae.webhookUrlInput,placeholder:"Webhook URL",value:e.webhookUrl,onKeyDown:d=>d.stopPropagation(),onChange:d=>t({webhookUrl:d.target.value})})]})]})]})})}function jf(e,t="filtered"){let{name:n,path:o}=Ii(e);if(t==="off")return{name:n,elementName:n,path:o,reactComponents:null};let r=Pk(e,{mode:t});return{name:r.path?`${r.path} ${n}`:n,elementName:n,path:o,reactComponents:r.path}}var Iy=!1,Uf={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},er=e=>{if(!e||!e.trim())return!1;try{let t=new URL(e.trim());return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}},a4={compact:"off",standard:"filtered",detailed:"smart",forensic:"all"},nl=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],i4=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;let e=document.createElement("style");e.id="agentation-color-tokens",e.textContent=[...nl.map(t=>`
      [data-agentation-accent="${t.id}"] {
        --agentation-color-accent: ${t.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${t.id}"] {
          --agentation-color-accent: ${t.p3};
        }
      }
    `),`:root {
      ${nl.map(t=>`--agentation-color-${t.id}: ${t.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${nl.map(t=>`--agentation-color-${t.id}: ${t.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(e)};i4();function $a(e,t){let n=document.elementFromPoint(e,t);if(!n)return null;for(;n?.shadowRoot;){let o=n.shadowRoot.elementFromPoint(e,t);if(!o||o===n)break;n=o}return n}function Vf(e){let t=e;for(;t&&t!==document.body;){let o=window.getComputedStyle(t).position;if(o==="fixed"||o==="sticky")return!0;t=t.parentElement}return!1}function Ia(e){return e.status!=="resolved"&&e.status!=="dismissed"}function wd(e){let t=Jf(e),n=t.found?t:jk(e);if(n.found&&n.source)return Wk(n.source,"path")}function Qy({demoAnnotations:e,demoDelay:t=1e3,enableDemoMode:n=!1,onAnnotationAdd:o,onAnnotationDelete:r,onAnnotationUpdate:a,onAnnotationsClear:i,onCopy:s,onSubmit:l,copyToClipboard:c=!0,endpoint:u,sessionId:p,onSessionCreated:d,webhookUrl:y,className:_}={}){let[C,v]=(0,F.useState)(!1),[m,g]=(0,F.useState)([]),[E,I]=(0,F.useState)(!0),[D,oe]=(0,F.useState)(()=>yk()),[z,Z]=(0,F.useState)(!1),ge=(0,F.useRef)(null);(0,F.useEffect)(()=>{let x=T=>{let $=ge.current;$&&$.contains(T.target)&&T.stopPropagation()},k=["mousedown","click","pointerdown"];return k.forEach(T=>document.body.addEventListener(T,x)),()=>{k.forEach(T=>document.body.removeEventListener(T,x))}},[]);let[te,he]=(0,F.useState)(!1),[K,P]=(0,F.useState)(!1),[q,le]=(0,F.useState)(null),[me,Ce]=(0,F.useState)({x:0,y:0}),[B,Y]=(0,F.useState)(null),[Se,nt]=(0,F.useState)(!1),[ht,We]=(0,F.useState)("idle"),[ut,pt]=(0,F.useState)(!1),[Ze,kt]=(0,F.useState)(!1),[Et,it]=(0,F.useState)(null),[ct,Wt]=(0,F.useState)(null),[Xt,je]=(0,F.useState)([]),[Ye,pn]=(0,F.useState)(null),[Bt,Be]=(0,F.useState)(null),[De,de]=(0,F.useState)(null),[ze,R]=(0,F.useState)(null),[A,V]=(0,F.useState)([]),[be,fe]=(0,F.useState)(0),[Pe,Ee]=(0,F.useState)(!1),[xe,w]=(0,F.useState)(!1),[M,H]=(0,F.useState)(!1),[W,X]=(0,F.useState)(!1),[ee,U]=(0,F.useState)(!1),[ue,ne]=(0,F.useState)("main"),[Ne,Me]=(0,F.useState)(!1),[ke,Ue]=(0,F.useState)(!1),[at,Fe]=(0,F.useState)(!1),[ie,st]=(0,F.useState)([]),[Ge,Je]=(0,F.useState)(null),ft=(0,F.useRef)(!1),[Xe,xt]=(0,F.useState)(!1),[fn,jn]=(0,F.useState)(!1),[ao,jt]=(0,F.useState)(1),[io,Fa]=(0,F.useState)("new-page"),[zt,Gn]=(0,F.useState)(""),[ra,Fi]=(0,F.useState)(!1),[qe,Zn]=(0,F.useState)(null),Hi=(0,F.useRef)(!1),ir=(0,F.useRef)({rearrange:null,placements:[]}),Lo=(0,F.useRef)({rearrange:null,placements:[]}),[_l,Wi]=(0,F.useState)(0),[so,Ha]=(0,F.useState)(0),[yl,Wa]=(0,F.useState)(0),[jd,ji]=(0,F.useState)(0),sr=(0,F.useRef)(new Set),ja=(0,F.useRef)(new Set),Jn=(0,F.useRef)(null),lr=(0,F.useRef)(),aa=ke&&C&&!at&&Xe;(0,F.useEffect)(()=>{if(aa){jn(!1);let x=$i(()=>{jn(!0)});return()=>cancelAnimationFrame(x)}else jn(!1)},[aa]);let Mr=(0,F.useRef)(new Map),ia=(0,F.useRef)(new Map),hn=(0,F.useRef)(),[lo,To]=(0,F.useState)(!1),[Ct,Rn]=(0,F.useState)([]),S=(0,F.useRef)(Ct);S.current=Ct;let[L,O]=(0,F.useState)(null),j=(0,F.useRef)(null),ve=(0,F.useRef)(!1),$e=(0,F.useRef)([]),tt=(0,F.useRef)(0),Nt=(0,F.useRef)(null),mn=(0,F.useRef)(null),Cn=(0,F.useRef)(1),[Mt,co]=(0,F.useState)(!1),uo=(0,F.useRef)(null),[Rt,jo]=(0,F.useState)([]),Uo=(0,F.useRef)({cmd:!1,shift:!1}),An=()=>{Me(!0)},zx=()=>{Me(!1)},Fx=()=>{Mt||(uo.current=Qe(()=>co(!0),850))},Hx=()=>{uo.current&&(clearTimeout(uo.current),uo.current=null),co(!1),zx()};(0,F.useEffect)(()=>()=>{uo.current&&clearTimeout(uo.current)},[]);let[mt,Wx]=(0,F.useState)(()=>{try{let x=JSON.parse(localStorage.getItem("feedback-toolbar-settings")??"");return{...Uf,...x,annotationColorId:nl.find(k=>k.id===x.annotationColorId)?x.annotationColorId:Uf.annotationColorId}}catch{return Uf}}),[Vo,Lh]=(0,F.useState)(!0),[Th,$h]=(0,F.useState)(!1),jx=()=>{ge.current?.classList.add(se.disableTransitions),Lh(x=>!x),$i(()=>{ge.current?.classList.remove(se.disableTransitions)})},Ih=!1,sa=Ih&&mt.reactEnabled?a4[mt.outputDetail]:"off",[xn,Ud]=(0,F.useState)(p??null),Ph=(0,F.useRef)(!1),[$o,la]=(0,F.useState)(u?"connecting":"disconnected"),[Gt,Vd]=(0,F.useState)(null),[ca,Nh]=(0,F.useState)(!1),[Ua,Rh]=(0,F.useState)(null),Yd=(0,F.useRef)(!1),[Ah,Ui]=(0,F.useState)(new Set),[Dh,xl]=(0,F.useState)(new Set),[Vi,vl]=(0,F.useState)(!1),[Ux,Va]=(0,F.useState)(!1),[cr,Oh]=(0,F.useState)(!1),Ya=(0,F.useRef)(null),Yo=(0,F.useRef)(null),Yi=(0,F.useRef)(null),Xi=(0,F.useRef)(null),wl=(0,F.useRef)(!1),Bh=(0,F.useRef)(0),bl=(0,F.useRef)(null),zh=(0,F.useRef)(null),Xd=8,Vx=50,Fh=(0,F.useRef)(null),Hh=(0,F.useRef)(null),qi=(0,F.useRef)(null),et=typeof window<"u"?window.location.pathname:"/";(0,F.useEffect)(()=>{if(W)U(!0);else{Me(!1),ne("main");let x=Qe(()=>U(!1),0);return()=>clearTimeout(x)}},[W]);let qd=C&&E&&!ke;(0,F.useEffect)(()=>{if(qd){P(!1),he(!0),Ui(new Set);let x=Qe(()=>{Ui(k=>{let T=new Set(k);return m.forEach($=>T.add($.id)),T})},350);return()=>clearTimeout(x)}else if(te){P(!0);let x=Qe(()=>{he(!1),P(!1)},250);return()=>clearTimeout(x)}},[qd]),(0,F.useEffect)(()=>{w(!0),fe(window.scrollY);let x=kr(et);g(x.filter(Ia)),Iy||($h(!0),Iy=!0,Qe(()=>$h(!1),750));try{let k=localStorage.getItem("feedback-toolbar-theme");k!==null&&Lh(k==="dark")}catch{}try{let k=localStorage.getItem("feedback-toolbar-position");if(k){let T=JSON.parse(k);typeof T.x=="number"&&typeof T.y=="number"&&Vd(T)}}catch{}},[et]),(0,F.useEffect)(()=>{xe&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(mt))},[mt,xe]),(0,F.useEffect)(()=>{xe&&localStorage.setItem("feedback-toolbar-theme",Vo?"dark":"light")},[Vo,xe]);let Wh=(0,F.useRef)(!1);(0,F.useEffect)(()=>{let x=Wh.current;Wh.current=ca,x&&!ca&&Gt&&xe&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(Gt))},[ca,Gt,xe]),(0,F.useEffect)(()=>{if(!u||!xe||Ph.current)return;Ph.current=!0,la("connecting"),(async()=>{try{let k=gk(et),T=p||k,$=!1;if(T)try{let N=await by(u,T);Ud(N.id),la("connected"),Bf(et,N.id),$=!0;let J=kr(et),_e=new Set(N.annotations.map(Oe=>Oe.id)),we=J.filter(Oe=>!_e.has(Oe.id));if(we.length>0){let He=`${typeof window<"u"?window.location.origin:""}${et}`,lt=(await Promise.allSettled(we.map(Ke=>Li(u,N.id,{...Ke,sessionId:N.id,url:He})))).map((Ke,Ie)=>Ke.status==="fulfilled"?Ke.value:(console.warn("[Agentation] Failed to sync annotation:",Ke.reason),we[Ie])),_t=[...N.annotations,...lt];g(_t.filter(Ia)),Zs(et,_t.filter(Ia),N.id)}else g(N.annotations.filter(Ia)),Zs(et,N.annotations.filter(Ia),N.id)}catch(N){console.warn("[Agentation] Could not join session, creating new:",N),_k(et)}if(!$){let N=typeof window<"u"?window.location.href:"/",J=await zf(u,N);Ud(J.id),la("connected"),Bf(et,J.id),d?.(J.id);let _e=lk(),we=typeof window<"u"?window.location.origin:"",Oe=[];for(let[He,Ve]of _e){let lt=Ve.filter(Ie=>!Ie._syncedTo);if(lt.length===0)continue;let _t=`${we}${He}`,Ke=He===et;Oe.push((async()=>{try{let Ie=Ke?J:await zf(u,_t),vn=(await Promise.allSettled(lt.map(Lt=>Li(u,Ie.id,{...Lt,sessionId:Ie.id,url:_t})))).map((Lt,ln)=>Lt.status==="fulfilled"?Lt.value:(console.warn("[Agentation] Failed to sync annotation:",Lt.reason),lt[ln])).filter(Ia);if(Zs(He,vn,Ie.id),Ke){let Lt=new Set(lt.map(ln=>ln.id));g(ln=>{let ot=ln.filter(dt=>!Lt.has(dt.id));return[...vn,...ot]})}}catch(Ie){console.warn(`[Agentation] Failed to sync annotations for ${He}:`,Ie)}})())}await Promise.allSettled(Oe)}}catch(k){la("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",k)}})()},[u,p,xe,d,et]),(0,F.useEffect)(()=>{if(!u||!xe)return;let x=async()=>{try{(await fetch(`${u}/health`)).ok?la("connected"):la("disconnected")}catch{la("disconnected")}};x();let k=u2(x,1e4);return()=>clearInterval(k)},[u,xe]),(0,F.useEffect)(()=>{if(!u||!xe||!xn)return;let x=new EventSource(`${u}/sessions/${xn}/events`),k=["resolved","dismissed"],T=$=>{try{let N=JSON.parse($.data);if(k.includes(N.payload?.status)){let J=N.payload.id,_e=N.payload.kind;if(_e==="placement"){for(let[we,Oe]of Mr.current)if(Oe===J){Mr.current.delete(we),st(He=>He.filter(Ve=>Ve.id!==we));break}}else if(_e==="rearrange"){for(let[we,Oe]of ia.current)if(Oe===J){ia.current.delete(we),Zn(He=>{if(!He)return null;let Ve=He.sections.filter(lt=>lt.id!==we);return Ve.length===0?null:{...He,sections:Ve}});break}}else xl(we=>new Set(we).add(J)),Qe(()=>{g(we=>we.filter(Oe=>Oe.id!==J)),xl(we=>{let Oe=new Set(we);return Oe.delete(J),Oe})},150)}}catch{}};return x.addEventListener("annotation.updated",T),()=>{x.removeEventListener("annotation.updated",T),x.close()}},[u,xe,xn]),(0,F.useEffect)(()=>{if(!u||!xe)return;let x=zh.current==="disconnected",k=$o==="connected";zh.current=$o,x&&k&&(async()=>{try{let $=kr(et);if($.length===0)return;let J=`${typeof window<"u"?window.location.origin:""}${et}`,_e=xn,we=[];if(_e)try{we=(await by(u,_e)).annotations}catch{_e=null}_e||(_e=(await zf(u,J)).id,Ud(_e),Bf(et,_e));let Oe=new Set(we.map(Ve=>Ve.id)),He=$.filter(Ve=>!Oe.has(Ve.id));if(He.length>0){let lt=(await Promise.allSettled(He.map(Ie=>Li(u,_e,{...Ie,sessionId:_e,url:J})))).map((Ie,sn)=>Ie.status==="fulfilled"?Ie.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",Ie.reason),He[sn])),Ke=[...we,...lt].filter(Ia);g(Ke),Zs(et,Ke,_e)}}catch($){console.warn("[Agentation] Failed to sync on reconnect:",$)}})()},[$o,u,xe,xn,et]);let Yx=(0,F.useCallback)(()=>{z||(Z(!0),X(!1),v(!1),Qe(()=>{xk(!0),oe(!0),Z(!1)},400))},[z]);(0,F.useEffect)(()=>{if(!n||!xe||!e||e.length===0||m.length>0)return;let x=[];return x.push(Qe(()=>{v(!0)},t-200)),e.forEach((k,T)=>{let $=t+T*300;x.push(Qe(()=>{let N=document.querySelector(k.selector);if(!N)return;let J=N.getBoundingClientRect(),{name:_e,path:we}=Ii(N),Oe={id:`demo-${Date.now()}-${T}`,x:(J.left+J.width/2)/window.innerWidth*100,y:J.top+J.height/2+window.scrollY,comment:k.comment,element:_e,elementPath:we,timestamp:Date.now(),selectedText:k.selectedText,boundingBox:{x:J.left,y:J.top+window.scrollY,width:J.width,height:J.height},nearbyText:Qs(N),cssClasses:Gs(N)};g(He=>[...He,Oe])},$))}),()=>{x.forEach(clearTimeout)}},[n,xe,e,t]),(0,F.useEffect)(()=>{let x=()=>{fe(window.scrollY),Ee(!0),qi.current&&clearTimeout(qi.current),qi.current=Qe(()=>{Ee(!1)},150)};return window.addEventListener("scroll",x,{passive:!0}),()=>{window.removeEventListener("scroll",x),qi.current&&clearTimeout(qi.current)}},[]),(0,F.useEffect)(()=>{xe&&m.length>0?xn?Zs(et,m,xn):ea(et,m):xe&&m.length===0&&localStorage.removeItem(Cd(et))},[m,et,xe,xn]),(0,F.useEffect)(()=>{if(xe&&!ft.current){ft.current=!0;let x=ck(et);x.length>0&&st(x)}},[xe,et]),(0,F.useEffect)(()=>{xe&&ft.current&&!Xe&&(ie.length>0?dk(et,ie):uk(et))},[ie,et,xe,Xe]),(0,F.useEffect)(()=>{if(xe&&!Hi.current){Hi.current=!0;let x=pk(et);if(x){let k={...x,sections:x.sections.map(T=>({...T,currentRect:T.currentRect??{...T.originalRect}}))};Zn(k)}}},[xe,et]),(0,F.useEffect)(()=>{xe&&Hi.current&&!Xe&&(qe?fk(et,qe):hk(et))},[qe,et,xe,Xe]);let Kd=(0,F.useRef)(!1);(0,F.useEffect)(()=>{if(xe&&!Kd.current){Kd.current=!0;let x=mk(et);x&&(Lo.current={rearrange:x.rearrange,placements:x.placements||[]},x.purpose&&Gn(x.purpose))}},[xe,et]),(0,F.useEffect)(()=>{if(!xe||!Kd.current)return;let x=Lo.current;Xe?(qe?.sections?.length??0)>0||ie.length>0||zt?wy(et,{rearrange:qe,placements:ie,purpose:zt}):yd(et):(x.rearrange?.sections?.length??0)>0||x.placements.length>0||zt?wy(et,{rearrange:x.rearrange,placements:x.placements,purpose:zt}):yd(et)},[qe,ie,zt,Xe,et,xe]),(0,F.useEffect)(()=>{ke&&!qe&&Zn({sections:[],originalOrder:[],detectedAt:Date.now()})},[ke,qe]),(0,F.useEffect)(()=>{if(!u||!xn)return;let x=Mr.current,k=new Set(ie.map(T=>T.id));for(let T of ie){if(x.has(T.id))continue;x.set(T.id,"");let $=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:et;Li(u,xn,{id:T.id,x:T.x/window.innerWidth*100,y:T.y,comment:`Place ${T.type} at (${Math.round(T.x)}, ${Math.round(T.y)}), ${T.width}\xD7${T.height}px${T.text?` \u2014 "${T.text}"`:""}`,element:`[design:${T.type}]`,elementPath:"[placement]",timestamp:T.timestamp,url:$,intent:"change",severity:"important",kind:"placement",placement:{componentType:T.type,width:T.width,height:T.height,scrollY:T.scrollY,text:T.text}}).then(N=>{x.has(T.id)&&x.set(T.id,N.id)}).catch(N=>{console.warn("[Agentation] Failed to sync placement annotation:",N),x.delete(T.id)})}for(let[T,$]of x)k.has(T)||(x.delete(T),$&&Jr(u,$).catch(()=>{}))},[ie,u,xn,et]),(0,F.useEffect)(()=>{if(!(!u||!xn))return hn.current&&clearTimeout(hn.current),hn.current=Qe(()=>{let x=ia.current;if(!qe||qe.sections.length===0){for(let[,$]of x)$&&Jr(u,$).catch(()=>{});x.clear();return}let k=new Set(qe.sections.map($=>$.id)),T=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:et;for(let $ of qe.sections){let N=$.originalRect,J=$.currentRect;if(!(Math.abs(N.x-J.x)>1||Math.abs(N.y-J.y)>1||Math.abs(N.width-J.width)>1||Math.abs(N.height-J.height)>1)){let Oe=x.get($.id);Oe&&(x.delete($.id),Jr(u,Oe).catch(()=>{}));continue}let we=x.get($.id);we?ky(u,we,{comment:`Move ${$.label} section (${$.tagName}) \u2014 from (${Math.round(N.x)},${Math.round(N.y)}) ${Math.round(N.width)}\xD7${Math.round(N.height)} to (${Math.round(J.x)},${Math.round(J.y)}) ${Math.round(J.width)}\xD7${Math.round(J.height)}`}).catch(Oe=>{console.warn("[Agentation] Failed to update rearrange annotation:",Oe)}):(x.set($.id,""),Li(u,xn,{id:$.id,x:J.x/window.innerWidth*100,y:J.y,comment:`Move ${$.label} section (${$.tagName}) \u2014 from (${Math.round(N.x)},${Math.round(N.y)}) ${Math.round(N.width)}\xD7${Math.round(N.height)} to (${Math.round(J.x)},${Math.round(J.y)}) ${Math.round(J.width)}\xD7${Math.round(J.height)}`,element:$.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:T,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:$.selector,label:$.label,tagName:$.tagName,originalRect:N,currentRect:J}}).then(Oe=>{x.has($.id)&&x.set($.id,Oe.id)}).catch(Oe=>{console.warn("[Agentation] Failed to sync rearrange annotation:",Oe),x.delete($.id)}))}for(let[$,N]of x)k.has($)||(x.delete($),N&&Jr(u,N).catch(()=>{}))},300),()=>{hn.current&&clearTimeout(hn.current)}},[qe,u,xn,et]);let Xa=(0,F.useRef)(new Map);(0,F.useLayoutEffect)(()=>{let x=qe?.sections??[],k=new Set;if((ke||at)&&C)for(let T of x){k.add(T.id);try{let $=document.querySelector(T.selector);if(!$)continue;if(!Xa.current.has(T.id)){let N={transform:$.style.transform,transformOrigin:$.style.transformOrigin,opacity:$.style.opacity,position:$.style.position,zIndex:$.style.zIndex,display:$.style.display},J=[],_e=$.parentElement;for(;_e&&_e!==document.body;){let Oe=getComputedStyle(_e);(Oe.overflow!=="visible"||Oe.overflowX!=="visible"||Oe.overflowY!=="visible")&&(J.push({el:_e,overflow:_e.style.overflow}),_e.style.overflow="visible"),_e=_e.parentElement}getComputedStyle($).display==="inline"&&($.style.display="inline-block"),Xa.current.set(T.id,{el:$,origStyles:N,ancestors:J}),$.style.transformOrigin="top left",$.style.zIndex="9999"}}catch{}}for(let[T,$]of Xa.current)if(!k.has(T)){let{el:N,origStyles:J,ancestors:_e}=$;N.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",N.style.transform=J.transform,N.style.transformOrigin=J.transformOrigin,N.style.opacity=J.opacity,N.style.position=J.position,N.style.zIndex=J.zIndex,Xa.current.delete(T),Qe(()=>{N.style.transition="",N.style.display=J.display;for(let we of _e)we.el.style.overflow=we.overflow},450)}},[qe,ke,at,C]),(0,F.useEffect)(()=>()=>{for(let[,x]of Xa.current){let{el:k,origStyles:T,ancestors:$}=x;k.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",k.style.transform=T.transform,k.style.transformOrigin=T.transformOrigin,k.style.opacity=T.opacity,k.style.position=T.position,k.style.zIndex=T.zIndex,Qe(()=>{k.style.transition="",k.style.display=T.display;for(let N of $)N.el.style.overflow=N.overflow},450)}Xa.current.clear()},[]);let kl=(0,F.useCallback)(()=>{Fe(!0),Ue(!1),Je(null),clearTimeout(lr.current),lr.current=Qe(()=>{Fe(!1)},300)},[]),jh=(0,F.useCallback)(()=>{ke&&(Fe(!0),Ue(!1),Je(null),clearTimeout(lr.current),lr.current=Qe(()=>{Fe(!1)},300)),v(!1)},[ke]),Uh=(0,F.useCallback)(()=>{M||(f2(),H(!0))},[M]),Cl=(0,F.useCallback)(()=>{M&&(sy(),H(!1))},[M]),Qd=(0,F.useCallback)(()=>{M?Cl():Uh()},[M,Uh,Cl]),Vh=(0,F.useCallback)(()=>{if(Rt.length===0)return;let x=Rt[0],k=x.element,T=Rt.length>1,$=Rt.map(N=>N.element.getBoundingClientRect());if(T){let N={left:Math.min(...$.map(Ie=>Ie.left)),top:Math.min(...$.map(Ie=>Ie.top)),right:Math.max(...$.map(Ie=>Ie.right)),bottom:Math.max(...$.map(Ie=>Ie.bottom))},J=Rt.slice(0,5).map(Ie=>Ie.name).join(", "),_e=Rt.length>5?` +${Rt.length-5} more`:"",we=$.map(Ie=>({x:Ie.left,y:Ie.top+window.scrollY,width:Ie.width,height:Ie.height})),He=Rt[Rt.length-1].element,Ve=$[$.length-1],lt=Ve.left+Ve.width/2,_t=Ve.top+Ve.height/2,Ke=Vf(He);Y({x:lt/window.innerWidth*100,y:Ke?_t:_t+window.scrollY,clientY:_t,element:`${Rt.length} elements: ${J}${_e}`,elementPath:"multi-select",boundingBox:{x:N.left,y:N.top+window.scrollY,width:N.right-N.left,height:N.bottom-N.top},isMultiSelect:!0,isFixed:Ke,elementBoundingBoxes:we,multiSelectElements:Rt.map(Ie=>Ie.element),targetElement:He,fullPath:md(k),accessibility:hd(k),computedStyles:fd(k),computedStylesObj:pd(k),nearbyElements:ud(k),cssClasses:Gs(k),nearbyText:Qs(k),sourceFile:wd(k)})}else{let N=$[0],J=Vf(k);Y({x:N.left/window.innerWidth*100,y:J?N.top:N.top+window.scrollY,clientY:N.top,element:x.name,elementPath:x.path,boundingBox:{x:N.left,y:J?N.top:N.top+window.scrollY,width:N.width,height:N.height},isFixed:J,fullPath:md(k),accessibility:hd(k),computedStyles:fd(k),computedStylesObj:pd(k),nearbyElements:ud(k),cssClasses:Gs(k),nearbyText:Qs(k),reactComponents:x.reactComponents,sourceFile:wd(k)})}jo([]),le(null)},[Rt]);(0,F.useEffect)(()=>{C||(Y(null),de(null),R(null),V([]),le(null),X(!1),jo([]),Uo.current={cmd:!1,shift:!1},M&&Cl())},[C,M,Cl]),(0,F.useEffect)(()=>()=>{sy()},[]),(0,F.useEffect)(()=>{if(!C)return;let x=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),k=":not([data-agentation-root]):not([data-agentation-root] *)",T=document.createElement("style");return T.id="feedback-cursor-styles",T.textContent=`
      body ${k} {
        cursor: crosshair !important;
      }

      body :is(${x})${k} {
        cursor: text !important;
      }
    `,document.head.appendChild(T),()=>{let $=document.getElementById("feedback-cursor-styles");$&&$.remove()}},[C]),(0,F.useEffect)(()=>{if(L!==null&&C)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[L,C]),(0,F.useEffect)(()=>{if(!C||B||lo||ke)return;let x=k=>{let T=k.composedPath()[0]||k.target;if(qn(T,"[data-feedback-toolbar]")){le(null);return}let $=$a(k.clientX,k.clientY);if(!$||qn($,"[data-feedback-toolbar]")){le(null);return}let{name:N,elementName:J,path:_e,reactComponents:we}=jf($,sa),Oe=$.getBoundingClientRect();le({element:N,elementName:J,elementPath:_e,rect:Oe,reactComponents:we}),Ce({x:k.clientX,y:k.clientY})};return document.addEventListener("mousemove",x),()=>document.removeEventListener("mousemove",x)},[C,B,lo,ke,sa,Ct]);let Sl=(0,F.useCallback)(x=>{if(de(x),it(null),Wt(null),je([]),x.elementBoundingBoxes?.length){let k=[];for(let T of x.elementBoundingBoxes){let $=T.x+T.width/2,N=T.y+T.height/2-window.scrollY,J=$a($,N);J&&k.push(J)}V(k),R(null)}else if(x.boundingBox){let k=x.boundingBox,T=k.x+k.width/2,$=x.isFixed?k.y+k.height/2:k.y+k.height/2-window.scrollY,N=$a(T,$);if(N){let J=N.getBoundingClientRect(),_e=J.width/k.width,we=J.height/k.height;_e<.5||we<.5?R(null):R(N)}else R(null);V([])}else R(null),V([])},[]);(0,F.useEffect)(()=>{if(!C||lo||ke)return;let x=k=>{if(wl.current){wl.current=!1;return}let T=k.composedPath()[0]||k.target;if(qn(T,"[data-feedback-toolbar]")||qn(T,"[data-annotation-popup]")||qn(T,"[data-annotation-marker]"))return;if(k.metaKey&&k.shiftKey&&!B&&!De){k.preventDefault(),k.stopPropagation();let It=$a(k.clientX,k.clientY);if(!It)return;let vn=It.getBoundingClientRect(),{name:Lt,path:ln,reactComponents:ot}=jf(It,sa),dt=Rt.findIndex(Zt=>Zt.element===It);dt>=0?jo(Zt=>Zt.filter((rn,Io)=>Io!==dt)):jo(Zt=>[...Zt,{element:It,rect:vn,name:Lt,path:ln,reactComponents:ot??void 0}]);return}let $=qn(T,"button, a, input, select, textarea, [role='button'], [onclick]");if(mt.blockInteractions&&$&&(k.preventDefault(),k.stopPropagation()),B){if($&&!mt.blockInteractions)return;k.preventDefault(),Fh.current?.shake();return}if(De){if($&&!mt.blockInteractions)return;k.preventDefault(),Hh.current?.shake();return}k.preventDefault();let N=$a(k.clientX,k.clientY);if(!N)return;let{name:J,path:_e,reactComponents:we}=jf(N,sa),Oe=N.getBoundingClientRect(),He=k.clientX/window.innerWidth*100,Ve=Vf(N),lt=Ve?k.clientY:k.clientY+window.scrollY,_t=window.getSelection(),Ke;_t&&_t.toString().trim().length>0&&(Ke=_t.toString().trim().slice(0,500));let Ie=pd(N),sn=fd(N);Y({x:He,y:lt,clientY:k.clientY,element:J,elementPath:_e,selectedText:Ke,boundingBox:{x:Oe.left,y:Ve?Oe.top:Oe.top+window.scrollY,width:Oe.width,height:Oe.height},nearbyText:Qs(N),cssClasses:Gs(N),isFixed:Ve,fullPath:md(N),accessibility:hd(N),computedStyles:sn,computedStylesObj:Ie,nearbyElements:ud(N),reactComponents:we??void 0,sourceFile:wd(N),targetElement:N}),le(null)};return document.addEventListener("click",x,!0),()=>document.removeEventListener("click",x,!0)},[C,lo,ke,B,De,mt.blockInteractions,sa,Rt]),(0,F.useEffect)(()=>{if(!C)return;let x=$=>{$.key==="Meta"&&(Uo.current.cmd=!0),$.key==="Shift"&&(Uo.current.shift=!0)},k=$=>{let N=Uo.current.cmd&&Uo.current.shift;$.key==="Meta"&&(Uo.current.cmd=!1),$.key==="Shift"&&(Uo.current.shift=!1);let J=Uo.current.cmd&&Uo.current.shift;N&&!J&&Rt.length>0&&Vh()},T=()=>{Uo.current={cmd:!1,shift:!1},jo([])};return document.addEventListener("keydown",x),document.addEventListener("keyup",k),window.addEventListener("blur",T),()=>{document.removeEventListener("keydown",x),document.removeEventListener("keyup",k),window.removeEventListener("blur",T)}},[C,Rt,Vh]),(0,F.useEffect)(()=>{if(!C||B||lo||ke)return;let x=k=>{let T=k.composedPath()[0]||k.target;qn(T,"[data-feedback-toolbar]")||qn(T,"[data-annotation-marker]")||qn(T,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(T.tagName)||T.isContentEditable||(k.preventDefault(),Ya.current={x:k.clientX,y:k.clientY})};return document.addEventListener("mousedown",x),()=>document.removeEventListener("mousedown",x)},[C,B,lo,ke]),(0,F.useEffect)(()=>{if(!C||B)return;let x=k=>{if(!Ya.current)return;let T=k.clientX-Ya.current.x,$=k.clientY-Ya.current.y,N=T*T+$*$,J=Xd*Xd;if(!cr&&N>=J&&(Yo.current=Ya.current,Oh(!0),k.preventDefault()),(cr||N>=J)&&Yo.current){if(Yi.current){let ot=Math.min(Yo.current.x,k.clientX),dt=Math.min(Yo.current.y,k.clientY),Zt=Math.abs(k.clientX-Yo.current.x),rn=Math.abs(k.clientY-Yo.current.y);Yi.current.style.transform=`translate(${ot}px, ${dt}px)`,Yi.current.style.width=`${Zt}px`,Yi.current.style.height=`${rn}px`}let _e=Date.now();if(_e-Bh.current<Vx)return;Bh.current=_e;let we=Yo.current.x,Oe=Yo.current.y,He=Math.min(we,k.clientX),Ve=Math.min(Oe,k.clientY),lt=Math.max(we,k.clientX),_t=Math.max(Oe,k.clientY),Ke=(He+lt)/2,Ie=(Ve+_t)/2,sn=new Set,It=[[He,Ve],[lt,Ve],[He,_t],[lt,_t],[Ke,Ie],[Ke,Ve],[Ke,_t],[He,Ie],[lt,Ie]];for(let[ot,dt]of It){let Zt=document.elementsFromPoint(ot,dt);for(let rn of Zt)rn instanceof HTMLElement&&sn.add(rn)}let vn=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(let ot of vn)if(ot instanceof HTMLElement){let dt=ot.getBoundingClientRect(),Zt=dt.left+dt.width/2,rn=dt.top+dt.height/2,Io=Zt>=He&&Zt<=lt&&rn>=Ve&&rn<=_t,xo=Math.min(dt.right,lt)-Math.max(dt.left,He),Ln=Math.min(dt.bottom,_t)-Math.max(dt.top,Ve),Qi=xo>0&&Ln>0?xo*Ln:0,ua=dt.width*dt.height,Lr=ua>0?Qi/ua:0;(Io||Lr>.5)&&sn.add(ot)}let Lt=[],ln=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(let ot of sn){if(qn(ot,"[data-feedback-toolbar]")||qn(ot,"[data-annotation-marker]"))continue;let dt=ot.getBoundingClientRect();if(!(dt.width>window.innerWidth*.8&&dt.height>window.innerHeight*.5)&&!(dt.width<10||dt.height<10)&&dt.left<lt&&dt.right>He&&dt.top<_t&&dt.bottom>Ve){let Zt=ot.tagName,rn=ln.has(Zt);if(!rn&&(Zt==="DIV"||Zt==="SPAN")){let Io=ot.textContent&&ot.textContent.trim().length>0,xo=ot.onclick!==null||ot.getAttribute("role")==="button"||ot.getAttribute("role")==="link"||ot.classList.contains("clickable")||ot.hasAttribute("data-clickable");(Io||xo)&&!ot.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(rn=!0)}if(rn){let Io=!1;for(let xo of Lt)if(xo.left<=dt.left&&xo.right>=dt.right&&xo.top<=dt.top&&xo.bottom>=dt.bottom){Io=!0;break}Io||Lt.push(dt)}}}if(Xi.current){let ot=Xi.current;for(;ot.children.length>Lt.length;)ot.removeChild(ot.lastChild);Lt.forEach((dt,Zt)=>{let rn=ot.children[Zt];rn||(rn=document.createElement("div"),rn.className=se.selectedElementHighlight,ot.appendChild(rn)),rn.style.transform=`translate(${dt.left}px, ${dt.top}px)`,rn.style.width=`${dt.width}px`,rn.style.height=`${dt.height}px`})}}};return document.addEventListener("mousemove",x,{passive:!0}),()=>document.removeEventListener("mousemove",x)},[C,B,cr,Xd]),(0,F.useEffect)(()=>{if(!C)return;let x=k=>{let T=cr,$=Yo.current;if(cr&&$){wl.current=!0;let N=Math.min($.x,k.clientX),J=Math.min($.y,k.clientY),_e=Math.max($.x,k.clientX),we=Math.max($.y,k.clientY),Oe=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(Ke=>{if(!(Ke instanceof HTMLElement)||qn(Ke,"[data-feedback-toolbar]")||qn(Ke,"[data-annotation-marker]"))return;let Ie=Ke.getBoundingClientRect();Ie.width>window.innerWidth*.8&&Ie.height>window.innerHeight*.5||Ie.width<10||Ie.height<10||Ie.left<_e&&Ie.right>N&&Ie.top<we&&Ie.bottom>J&&Oe.push({element:Ke,rect:Ie})});let Ve=Oe.filter(({element:Ke})=>!Oe.some(({element:Ie})=>Ie!==Ke&&Ke.contains(Ie))),lt=k.clientX/window.innerWidth*100,_t=k.clientY+window.scrollY;if(Ve.length>0){let Ke=Ve.reduce((ln,{rect:ot})=>({left:Math.min(ln.left,ot.left),top:Math.min(ln.top,ot.top),right:Math.max(ln.right,ot.right),bottom:Math.max(ln.bottom,ot.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),Ie=Ve.slice(0,5).map(({element:ln})=>Ii(ln).name).join(", "),sn=Ve.length>5?` +${Ve.length-5} more`:"",It=Ve[0].element,vn=pd(It),Lt=fd(It);Y({x:lt,y:_t,clientY:k.clientY,element:`${Ve.length} elements: ${Ie}${sn}`,elementPath:"multi-select",boundingBox:{x:Ke.left,y:Ke.top+window.scrollY,width:Ke.right-Ke.left,height:Ke.bottom-Ke.top},isMultiSelect:!0,fullPath:md(It),accessibility:hd(It),computedStyles:Lt,computedStylesObj:vn,nearbyElements:ud(It),cssClasses:Gs(It),nearbyText:Qs(It),sourceFile:wd(It)})}else{let Ke=Math.abs(_e-N),Ie=Math.abs(we-J);Ke>20&&Ie>20&&Y({x:lt,y:_t,clientY:k.clientY,element:"Area selection",elementPath:`region at (${Math.round(N)}, ${Math.round(J)})`,boundingBox:{x:N,y:J+window.scrollY,width:Ke,height:Ie},isMultiSelect:!0})}le(null)}else T&&(wl.current=!0);Ya.current=null,Yo.current=null,Oh(!1),Xi.current&&(Xi.current.innerHTML="")};return document.addEventListener("mouseup",x),()=>document.removeEventListener("mouseup",x)},[C,cr]);let Xo=(0,F.useCallback)(async(x,k,T)=>{let $=mt.webhookUrl||y;if(!$||!mt.webhooksEnabled&&!T)return!1;try{return(await fetch($,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:x,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...k})})).ok}catch(N){return console.warn("[Agentation] Webhook failed:",N),!1}},[y,mt.webhookUrl,mt.webhooksEnabled]),Xx=(0,F.useCallback)(x=>{if(!B)return;let k={id:Date.now().toString(),x:B.x,y:B.y,comment:x,element:B.element,elementPath:B.elementPath,timestamp:Date.now(),selectedText:B.selectedText,boundingBox:B.boundingBox,nearbyText:B.nearbyText,cssClasses:B.cssClasses,isMultiSelect:B.isMultiSelect,isFixed:B.isFixed,fullPath:B.fullPath,accessibility:B.accessibility,computedStyles:B.computedStyles,nearbyElements:B.nearbyElements,reactComponents:B.reactComponents,sourceFile:B.sourceFile,elementBoundingBoxes:B.elementBoundingBoxes,...u&&xn?{sessionId:xn,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};g(T=>[...T,k]),bl.current=k.id,Qe(()=>{bl.current=null},300),Qe(()=>{Ui(T=>new Set(T).add(k.id))},250),o?.(k),Xo("annotation.add",{annotation:k}),vl(!0),Qe(()=>{Y(null),vl(!1)},150),window.getSelection()?.removeAllRanges(),u&&xn&&Li(u,xn,k).then(T=>{T.id!==k.id&&(g($=>$.map(N=>N.id===k.id?{...N,id:T.id}:N)),Ui($=>{let N=new Set($);return N.delete(k.id),N.add(T.id),N}))}).catch(T=>{console.warn("[Agentation] Failed to sync annotation:",T)})},[B,o,Xo,u,xn]),Gd=(0,F.useCallback)(()=>{vl(!0),Qe(()=>{Y(null),vl(!1)},150)},[]),Zd=(0,F.useCallback)(x=>{let k=m.findIndex($=>$.id===x),T=m[k];De?.id===x&&(Va(!0),Qe(()=>{de(null),R(null),V([]),Va(!1)},150)),pn(x),xl($=>new Set($).add(x)),T&&(r?.(T),Xo("annotation.delete",{annotation:T})),u&&Jr(u,x).catch($=>{console.warn("[Agentation] Failed to delete annotation from server:",$)}),Qe(()=>{g($=>$.filter(N=>N.id!==x)),xl($=>{let N=new Set($);return N.delete(x),N}),pn(null),k<m.length-1&&(Be(k),Qe(()=>Be(null),200))},150)},[m,De,r,Xo,u]),El=(0,F.useCallback)(x=>{if(!x){it(null),Wt(null),je([]);return}if(it(x.id),x.elementBoundingBoxes?.length){let k=[];for(let T of x.elementBoundingBoxes){let $=T.x+T.width/2,N=T.y+T.height/2-window.scrollY,_e=document.elementsFromPoint($,N).find(we=>!we.closest("[data-annotation-marker]")&&!we.closest("[data-agentation-root]"));_e&&k.push(_e)}je(k),Wt(null)}else if(x.boundingBox){let k=x.boundingBox,T=k.x+k.width/2,$=x.isFixed?k.y+k.height/2:k.y+k.height/2-window.scrollY,N=$a(T,$);if(N){let J=N.getBoundingClientRect(),_e=J.width/k.width,we=J.height/k.height;_e<.5||we<.5?Wt(null):Wt(N)}else Wt(null);je([])}else Wt(null),je([])},[]),qx=(0,F.useCallback)(x=>{if(!De)return;let k={...De,comment:x};g(T=>T.map($=>$.id===De.id?k:$)),a?.(k),Xo("annotation.update",{annotation:k}),u&&ky(u,De.id,{comment:x}).catch(T=>{console.warn("[Agentation] Failed to update annotation on server:",T)}),Va(!0),Qe(()=>{de(null),R(null),V([]),Va(!1)},150)},[De,a,Xo,u]),Kx=(0,F.useCallback)(()=>{Va(!0),Qe(()=>{de(null),R(null),V([]),Va(!1)},150)},[]),da=(0,F.useCallback)(()=>{let x=m.length,k=ie.length>0||!!qe;if(x===0&&Ct.length===0&&!k)return;if(i?.(m),Xo("annotations.clear",{annotations:m}),u){Promise.all(m.map(N=>Jr(u,N.id).catch(J=>{console.warn("[Agentation] Failed to delete annotation from server:",J)})));for(let[,N]of Mr.current)N&&Jr(u,N).catch(()=>{});Mr.current.clear();for(let[,N]of ia.current)N&&Jr(u,N).catch(()=>{});ia.current.clear()}kt(!0),pt(!0),Rn([]);let T=j.current;if(T){let N=T.getContext("2d");N&&N.clearRect(0,0,T.width,T.height)}(ie.length>0||qe)&&(Wa(N=>N+1),ji(N=>N+1),Qe(()=>{st([]),Zn(null)},200)),Xe&&xt(!1),zt&&Gn(""),Lo.current={rearrange:null,placements:[]},yd(et);let $=x*30+200;Qe(()=>{g([]),Ui(new Set),localStorage.removeItem(Cd(et)),kt(!1)},$),Qe(()=>pt(!1),1500)},[et,m,Ct,ie,qe,Xe,zt,i,Xo,u]),Jd=(0,F.useCallback)(async()=>{let x=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:et,k=ke&&Xe,T;if(k){if(ie.length===0&&!qe&&!zt)return;T=""}else{if(T=Ey(m,x,mt.outputDetail),!T&&Ct.length===0&&ie.length===0&&!qe)return;T||(T=`## Page Feedback: ${x}
`)}if(!k&&Ct.length>0){let $=new Set;for(let we of m)we.drawingIndex!=null&&$.add(we.drawingIndex);let N=j.current;N&&(N.style.visibility="hidden");let J=[],_e=window.scrollY;for(let we=0;we<Ct.length;we++){if($.has(we))continue;let Oe=Ct[we];if(Oe.points.length<2)continue;let He=Oe.fixed?Oe.points:Oe.points.map(gn=>({x:gn.x,y:gn.y-_e})),Ve=1/0,lt=1/0,_t=-1/0,Ke=-1/0;for(let gn of He)Ve=Math.min(Ve,gn.x),lt=Math.min(lt,gn.y),_t=Math.max(_t,gn.x),Ke=Math.max(Ke,gn.y);let Ie=_t-Ve,sn=Ke-lt,It=Math.hypot(Ie,sn),vn=He[0],Lt=He[He.length-1],ln=Math.hypot(Lt.x-vn.x,Lt.y-vn.y),ot,dt=ln<It*.35,Zt=Ie/Math.max(sn,1);if(dt&&It>20){let gn=Math.max(Ie,sn)*.15,Tr=0;for(let pa of He){let Zx=pa.x-Ve<gn,Jx=_t-pa.x<gn,ev=pa.y-lt<gn,tv=Ke-pa.y<gn;(Zx||Jx)&&(ev||tv)&&Tr++}ot=Tr>He.length*.15?"box":"circle"}else Zt>3&&sn<40?ot="underline":ln>It*.5?ot="arrow":ot="drawing";let rn=Math.min(10,He.length),Io=Math.max(1,Math.floor(He.length/rn)),xo=new Set,Ln=[],Qi=[vn];for(let gn=Io;gn<He.length-1;gn+=Io)Qi.push(He[gn]);Qi.push(Lt);for(let gn of Qi){let Tr=$a(gn.x,gn.y);if(!Tr||xo.has(Tr)||qn(Tr,"[data-feedback-toolbar]"))continue;xo.add(Tr);let{name:pa}=Ii(Tr);Ln.includes(pa)||Ln.push(pa)}let ua=`${Math.round(Ve)},${Math.round(lt)} \u2192 ${Math.round(_t)},${Math.round(Ke)}`,Lr;(ot==="circle"||ot==="box")&&Ln.length>0?Lr=`${ot==="box"?"Boxed":"Circled"} **${Ln[0]}**${Ln.length>1?` (and ${Ln.slice(1).join(", ")})`:""} (region: ${ua})`:ot==="underline"&&Ln.length>0?Lr=`Underlined **${Ln[0]}** (${ua})`:ot==="arrow"&&Ln.length>=2?Lr=`Arrow from **${Ln[0]}** to **${Ln[Ln.length-1]}** (${Math.round(vn.x)},${Math.round(vn.y)} \u2192 ${Math.round(Lt.x)},${Math.round(Lt.y)})`:Ln.length>0?Lr=`${ot==="arrow"?"Arrow":"Drawing"} near **${Ln.join("**, **")}** (region: ${ua})`:Lr=`Drawing at ${ua}`,J.push(Lr)}N&&(N.style.visibility=""),J.length>0&&(T+=`
**Drawings:**
`,J.forEach((we,Oe)=>{T+=`${Oe+1}. ${we}
`}))}if((ie.length>0||k&&zt)&&(T+=`
`+xy(ie,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:Xe,wireframePurpose:zt||void 0},mt.outputDetail)),qe){let $=vy(qe,mt.outputDetail,{width:window.innerWidth,height:window.innerHeight});$&&(T+=`
`+$)}if(c)try{await navigator.clipboard.writeText(T)}catch{}s?.(T),nt(!0),Qe(()=>nt(!1),2e3),mt.autoClearAfterCopy&&Qe(()=>da(),500)},[m,Ct,ie,qe,Xe,ke,io,zt,et,mt.outputDetail,sa,mt.autoClearAfterCopy,da,c,s]),eu=(0,F.useCallback)(async()=>{let x=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:et,k=Ey(m,x,mt.outputDetail);if(!k&&ie.length===0&&!qe)return;if(k||(k=`## Page Feedback: ${x}
`),ie.length>0&&(k+=`
`+xy(ie,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:Xe,wireframePurpose:zt||void 0},mt.outputDetail)),qe){let $=vy(qe,mt.outputDetail,{width:window.innerWidth,height:window.innerHeight});$&&(k+=`
`+$)}l&&l(k,m),We("sending"),await new Promise($=>Qe($,150));let T=await Xo("submit",{output:k,annotations:m},!0);We(T?"sent":"failed"),Qe(()=>We("idle"),2500),T&&mt.autoClearAfterCopy&&Qe(()=>da(),500)},[l,Xo,m,ie,qe,Xe,io,et,mt.outputDetail,sa,mt.autoClearAfterCopy,da]);(0,F.useEffect)(()=>{if(!Ua)return;let x=10,k=$=>{let N=$.clientX-Ua.x,J=$.clientY-Ua.y,_e=Math.sqrt(N*N+J*J);if(!ca&&_e>x&&Nh(!0),ca||_e>x){let we=Ua.toolbarX+N,Oe=Ua.toolbarY+J,He=20,Ve=337,lt=44,Ke=Ve-(C?$o==="connected"?297:257:44),Ie=He-Ke,sn=window.innerWidth-He-Ve;we=Math.max(Ie,Math.min(sn,we)),Oe=Math.max(He,Math.min(window.innerHeight-lt-He,Oe)),Vd({x:we,y:Oe})}},T=()=>{ca&&(Yd.current=!0),Nh(!1),Rh(null)};return document.addEventListener("mousemove",k),document.addEventListener("mouseup",T),()=>{document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",T)}},[Ua,ca,C,$o]);let Qx=(0,F.useCallback)(x=>{if(x.target.closest("button")||x.target.closest("[data-agentation-settings-panel]"))return;let k=x.currentTarget.parentElement;if(!k)return;let T=k.getBoundingClientRect(),$=Gt?.x??T.left,N=Gt?.y??T.top;Rh({x:x.clientX,y:x.clientY,toolbarX:$,toolbarY:N})},[Gt]);if((0,F.useEffect)(()=>{if(!Gt)return;let x=()=>{let N=Gt.x,J=Gt.y,Oe=20-(337-(C?$o==="connected"?297:257:44)),He=window.innerWidth-20-337;N=Math.max(Oe,Math.min(He,N)),J=Math.max(20,Math.min(window.innerHeight-44-20,J)),(N!==Gt.x||J!==Gt.y)&&Vd({x:N,y:J})};return x(),window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[Gt,C,$o]),(0,F.useEffect)(()=>{let x=k=>{let T=k.target,$=T.tagName==="INPUT"||T.tagName==="TEXTAREA"||T.isContentEditable;if(k.key==="Escape"){if(ke){Ge?Je(null):kl();return}if(lo){To(!1);return}if(Rt.length>0){jo([]);return}B||C&&(An(),v(!1))}if((k.metaKey||k.ctrlKey)&&k.shiftKey&&(k.key==="f"||k.key==="F")){k.preventDefault(),An(),C?jh():v(!0);return}if(!($||k.metaKey||k.ctrlKey)&&((k.key==="p"||k.key==="P")&&(k.preventDefault(),An(),Qd()),(k.key==="l"||k.key==="L")&&(k.preventDefault(),An(),lo&&To(!1),W&&X(!1),B&&Gd(),ke?kl():Ue(!0)),(k.key==="h"||k.key==="H")&&m.length>0&&(k.preventDefault(),An(),I(N=>!N)),(k.key==="c"||k.key==="C")&&(m.length>0||ie.length>0||qe)&&(k.preventDefault(),An(),Jd()),(k.key==="x"||k.key==="X")&&(m.length>0||ie.length>0||qe)&&(k.preventDefault(),An(),da(),ie.length>0&&st([]),qe&&Zn(null)),k.key==="s"||k.key==="S")){let N=er(mt.webhookUrl)||er(y||"");m.length>0&&N&&ht==="idle"&&(k.preventDefault(),An(),eu())}};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[C,lo,ke,Ge,ie,qe,B,m.length,mt.webhookUrl,y,ht,eu,Qd,Jd,da,Rt]),!xe||D)return null;let Ki=m.length>0,qa=m.filter(x=>!Dh.has(x.id)&&x.kind!=="placement"&&x.kind!=="rearrange"),Gx=qa.length>0,Yh=m.filter(x=>Dh.has(x.id)),Xh=x=>{let J=x.x/100*window.innerWidth,_e=typeof x.y=="string"?parseFloat(x.y):x.y,we={};window.innerHeight-_e-22-10<80&&(we.top="auto",we.bottom="calc(100% + 10px)");let He=J-200/2,Ve=10;if(He<Ve){let lt=Ve-He;we.left=`calc(50% + ${lt}px)`}else if(He+200>window.innerWidth-Ve){let lt=He+200-(window.innerWidth-Ve);we.left=`calc(50% - ${lt}px)`}return we};return(0,Py.createPortal)((0,ce.jsxs)("div",{ref:ge,style:{display:"contents"},"data-agentation-theme":Vo?"dark":"light","data-agentation-accent":mt.annotationColorId,"data-agentation-root":"",children:[(0,ce.jsx)("div",{className:`${se.toolbar}${_?` ${_}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:Gt?{left:Gt.x,top:Gt.y,right:"auto",bottom:"auto"}:void 0,children:(0,ce.jsxs)("div",{className:`${se.toolbarContainer} ${C?se.expanded:se.collapsed} ${Th?se.entrance:""} ${z?se.hiding:""} ${!mt.webhooksEnabled&&(er(mt.webhookUrl)||er(y||""))?se.serverConnected:""}`,onClick:C?void 0:x=>{if(Yd.current){Yd.current=!1,x.preventDefault();return}v(!0)},onMouseDown:Qx,role:C?void 0:"button",tabIndex:C?-1:0,title:C?void 0:"Start feedback mode",children:[(0,ce.jsxs)("div",{className:`${se.toggleContent} ${C?se.hidden:se.visible}`,children:[(0,ce.jsx)(Qw,{size:24}),Gx&&(0,ce.jsx)("span",{className:`${se.badge} ${C?se.fadeOut:""} ${Th?se.entrance:""}`,children:qa.length})]}),(0,ce.jsxs)("div",{className:`${se.controlsContent} ${C?se.visible:se.hidden} ${Gt&&Gt.y<100?se.tooltipBelow:""} ${Ne||W?se.tooltipsHidden:""} ${Mt?se.tooltipsInSession:""}`,onMouseEnter:Fx,onMouseLeave:Hx,children:[(0,ce.jsxs)("div",{className:`${se.buttonWrapper} ${Gt&&Gt.x<120?se.buttonWrapperAlignLeft:""}`,children:[(0,ce.jsx)("button",{className:se.controlButton,onClick:x=>{x.stopPropagation(),An(),Qd()},"data-active":M,children:(0,ce.jsx)(t2,{size:24,isPaused:M})}),(0,ce.jsxs)("span",{className:se.buttonTooltip,children:[M?"Resume animations":"Pause animations",(0,ce.jsx)("span",{className:se.shortcut,children:"P"})]})]}),(0,ce.jsxs)("div",{className:se.buttonWrapper,children:[(0,ce.jsx)("button",{className:`${se.controlButton} ${Vo?"":se.light}`,onClick:x=>{x.stopPropagation(),An(),lo&&To(!1),W&&X(!1),B&&Gd(),ke?kl():Ue(!0)},"data-active":ke,style:ke&&Xe?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:(0,ce.jsx)(c2,{size:21})}),(0,ce.jsxs)("span",{className:se.buttonTooltip,children:[ke?"Exit layout mode":"Layout mode",(0,ce.jsx)("span",{className:se.shortcut,children:"L"})]})]}),(0,ce.jsxs)("div",{className:se.buttonWrapper,children:[(0,ce.jsx)("button",{className:se.controlButton,onClick:x=>{x.stopPropagation(),An(),I(!E)},disabled:!Ki||ke,children:(0,ce.jsx)(e2,{size:24,isOpen:E})}),(0,ce.jsxs)("span",{className:se.buttonTooltip,children:[E?"Hide markers":"Show markers",(0,ce.jsx)("span",{className:se.shortcut,children:"H"})]})]}),(0,ce.jsxs)("div",{className:se.buttonWrapper,children:[(0,ce.jsx)("button",{className:`${se.controlButton} ${Se?se.statusShowing:""}`,onClick:x=>{x.stopPropagation(),An(),Jd()},disabled:ke&&Xe?ie.length===0&&!qe?.sections?.length:!Ki&&Ct.length===0&&ie.length===0&&!qe?.sections?.length,"data-active":Se,children:(0,ce.jsx)(Zw,{size:24,copied:Se,tint:ke&&Xe&&(ie.length>0||qe?.sections?.length)?"#f97316":void 0})}),(0,ce.jsxs)("span",{className:se.buttonTooltip,children:[ke&&Xe?"Copy layout":"Copy feedback",(0,ce.jsx)("span",{className:se.shortcut,children:"C"})]})]}),(0,ce.jsxs)("div",{className:`${se.buttonWrapper} ${se.sendButtonWrapper} ${C&&!mt.webhooksEnabled&&(er(mt.webhookUrl)||er(y||""))?se.sendButtonVisible:""}`,children:[(0,ce.jsxs)("button",{className:`${se.controlButton} ${ht==="sent"||ht==="failed"?se.statusShowing:""}`,onClick:x=>{x.stopPropagation(),An(),eu()},disabled:!Ki||!er(mt.webhookUrl)&&!er(y||"")||ht==="sending","data-no-hover":ht==="sent"||ht==="failed",tabIndex:er(mt.webhookUrl)||er(y||"")?0:-1,children:[(0,ce.jsx)(Jw,{size:24,state:ht}),Ki&&ht==="idle"&&(0,ce.jsx)("span",{className:se.buttonBadge,children:m.length})]}),(0,ce.jsxs)("span",{className:se.buttonTooltip,children:["Send Annotations",(0,ce.jsx)("span",{className:se.shortcut,children:"S"})]})]}),(0,ce.jsxs)("div",{className:se.buttonWrapper,children:[(0,ce.jsx)("button",{className:se.controlButton,onClick:x=>{x.stopPropagation(),An(),da()},disabled:!Ki&&Ct.length===0&&ie.length===0&&!qe?.sections?.length,"data-danger":!0,children:(0,ce.jsx)(o2,{size:24})}),(0,ce.jsxs)("span",{className:se.buttonTooltip,children:["Clear all",(0,ce.jsx)("span",{className:se.shortcut,children:"X"})]})]}),(0,ce.jsxs)("div",{className:se.buttonWrapper,children:[(0,ce.jsx)("button",{className:se.controlButton,onClick:x=>{x.stopPropagation(),An(),ke&&kl(),X(!W)},children:(0,ce.jsx)(n2,{size:24})}),u&&$o!=="disconnected"&&(0,ce.jsx)("span",{className:`${se.mcpIndicator} ${se[$o]} ${W?se.hidden:""}`,title:$o==="connected"?"MCP Connected":"MCP Connecting..."}),(0,ce.jsx)("span",{className:se.buttonTooltip,children:"Settings"})]}),(0,ce.jsx)("div",{className:se.divider}),(0,ce.jsxs)("div",{className:`${se.buttonWrapper} ${Gt&&typeof window<"u"&&Gt.x>window.innerWidth-120?se.buttonWrapperAlignRight:""}`,children:[(0,ce.jsx)("button",{className:se.controlButton,onClick:x=>{x.stopPropagation(),An(),jh()},children:(0,ce.jsx)(r2,{size:24})}),(0,ce.jsxs)("span",{className:se.buttonTooltip,children:["Exit",(0,ce.jsx)("span",{className:se.shortcut,children:"Esc"})]})]})]}),(0,ce.jsx)(Bb,{visible:ke&&C,activeType:Ge,onSelect:x=>{Je(Ge===x?null:x)},isDarkMode:Vo,sectionCount:qe?.sections.length??0,onDetectSections:()=>{let x=Kb(),k=qe?.sections??[],T=new Set(k.map(_e=>_e.selector)),$=x.filter(_e=>!T.has(_e.selector)),N=[...k,...$],J=[...qe?.originalOrder??[],...$.map(_e=>_e.id)];Zn({sections:N,originalOrder:J,detectedAt:Date.now()})},placementCount:ie.length,onClearPlacements:()=>{Wa(x=>x+1),ji(x=>x+1),Qe(()=>{Zn({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:Xe,onBlankCanvasChange:x=>{let k={sections:[],originalOrder:[],detectedAt:Date.now()};x?(ir.current={rearrange:qe,placements:ie},Zn(Lo.current.rearrange||k),st(Lo.current.placements),Je(null)):(Lo.current={rearrange:qe,placements:ie},Zn(ir.current.rearrange||k),st(ir.current.placements)),xt(x)},wireframePurpose:zt,onWireframePurposeChange:Gn,Tooltip:Pa,onDragStart:(x,k)=>{k.preventDefault();let T=Te[x],$=null,N=!1,J=k.clientX,_e=k.clientY,Oe=k.target.closest("[data-feedback-toolbar]")?.getBoundingClientRect().top??window.innerHeight,He=lt=>{let _t=lt.clientX-J,Ke=lt.clientY-_e;if(!N&&(Math.abs(_t)>4||Math.abs(Ke)>4)&&(N=!0,$=document.createElement("div"),$.className=`${G.dragPreview}${Xe?` ${G.dragPreviewWireframe}`:""}`,document.body.appendChild($)),!$)return;let Ie=Math.max(0,Oe-lt.clientY),sn=Math.min(1,Ie/180),It=1-Math.pow(1-sn,2),vn=28,Lt=20,ln=Math.min(140,T.width*.18),ot=Math.min(90,T.height*.18),dt=vn+(ln-vn)*It,Zt=Lt+(ot-Lt)*It;$.style.width=`${dt}px`,$.style.height=`${Zt}px`,$.style.left=`${lt.clientX-dt/2}px`,$.style.top=`${lt.clientY-Zt/2}px`,$.style.opacity=`${.5+.5*It}`,$.textContent=It>.25?x:""},Ve=lt=>{if(window.removeEventListener("mousemove",He),window.removeEventListener("mouseup",Ve),$&&document.body.removeChild($),N){let _t=T.width,Ke=T.height,Ie=window.scrollY,sn=Math.max(0,lt.clientX-_t/2),It=Math.max(0,lt.clientY+Ie-Ke/2),vn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:x,x:sn,y:It,width:_t,height:Ke,scrollY:Ie,timestamp:Date.now()};st(Lt=>[...Lt,vn]),Je(null),sr.current=new Set,Wi(Lt=>Lt+1)}};window.addEventListener("mousemove",He),window.addEventListener("mouseup",Ve)}}),(0,ce.jsx)(r4,{settings:mt,onSettingsChange:x=>Wx(k=>({...k,...x})),isDarkMode:Vo,onToggleTheme:jx,isDevMode:Ih,connectionStatus:$o,endpoint:u,isVisible:ee,toolbarNearBottom:!!Gt&&Gt.y<230,settingsPage:ue,onSettingsPageChange:ne,onHideToolbar:Yx})]})}),(ke||at)&&(0,ce.jsx)("div",{className:`${G.blankCanvas} ${fn?G.visible:""} ${ra?G.gridActive:""}`,style:{"--canvas-opacity":ao},"data-feedback-toolbar":!0}),ke&&Xe&&fn&&(0,ce.jsxs)("div",{className:G.wireframeNotice,"data-feedback-toolbar":!0,children:[(0,ce.jsxs)("div",{className:G.wireframeOpacityRow,children:[(0,ce.jsx)("span",{className:G.wireframeOpacityLabel,children:"Toggle Opacity"}),(0,ce.jsx)("input",{type:"range",className:G.wireframeOpacitySlider,min:0,max:1,step:.01,value:ao,onChange:x=>jt(Number(x.target.value))})]}),(0,ce.jsxs)("div",{className:G.wireframeNoticeTitleRow,children:[(0,ce.jsx)("span",{className:G.wireframeNoticeTitle,children:"Wireframe Mode"}),(0,ce.jsx)("span",{className:G.wireframeNoticeDivider}),(0,ce.jsx)("button",{className:G.wireframeStartOver,onClick:()=>{Wa(x=>x+1),Zn({sections:[],originalOrder:[],detectedAt:Date.now()}),Lo.current={rearrange:null,placements:[]},Gn(""),yd(et)},children:"Start Over"})]}),"Drag components onto the canvas.",(0,ce.jsx)("br",{}),"Copied output will only include the wireframed layout."]}),(ke||at)&&(0,ce.jsx)(Nb,{placements:ie,onChange:st,activeComponent:at?null:Ge,onActiveComponentChange:Je,isDarkMode:Vo,exiting:at,onInteractionChange:Fi,passthrough:!Ge,extraSnapRects:qe?.sections.map(x=>x.currentRect),deselectSignal:_l,clearSignal:yl,wireframe:Xe,onSelectionChange:(x,k)=>{sr.current=x,k||(ja.current=new Set,Ha(T=>T+1))},onDragMove:(x,k)=>{let T=ja.current;if(!(!T.size||!qe)){if(!Jn.current){Jn.current=new Map;for(let $ of qe.sections)T.has($.id)&&Jn.current.set($.id,{x:$.currentRect.x,y:$.currentRect.y})}for(let $ of qe.sections){if(!T.has($.id)||!Jn.current.get($.id))continue;let J=document.querySelector(`[data-rearrange-section="${$.id}"]`);J&&(J.style.transform=`translate(${x}px, ${k}px)`)}}},onDragEnd:(x,k,T)=>{let $=ja.current,N=Jn.current;if(Jn.current=null,!(!$.size||!qe||!N)){for(let J of $){let _e=document.querySelector(`[data-rearrange-section="${J}"]`);_e&&(_e.style.transform="")}T&&Zn(J=>J&&{...J,sections:J.sections.map(_e=>{let we=N.get(_e.id);return we?{..._e,currentRect:{..._e.currentRect,x:Math.max(0,we.x+x),y:Math.max(0,we.y+k)}}:_e})})}}}),(ke||at)&&qe&&(0,ce.jsx)(Zb,{rearrangeState:qe,onChange:Zn,isDarkMode:Vo,exiting:at,blankCanvas:Xe,extraSnapRects:ie.map(x=>({x:x.x,y:x.y,width:x.width,height:x.height})),clearSignal:jd,deselectSignal:so,onSelectionChange:(x,k)=>{ja.current=x,k||(sr.current=new Set,Wi(T=>T+1))},onDragMove:(x,k)=>{let T=sr.current;if(T.size){if(!Jn.current){Jn.current=new Map;for(let $ of ie)T.has($.id)&&Jn.current.set($.id,{x:$.x,y:$.y})}for(let $ of T){let N=document.querySelector(`[data-design-placement="${$}"]`);N&&(N.style.transform=`translate(${x}px, ${k}px)`)}}},onDragEnd:(x,k,T)=>{let $=sr.current,N=Jn.current;if(Jn.current=null,!(!$.size||!N)){for(let J of $){let _e=document.querySelector(`[data-design-placement="${J}"]`);_e&&(_e.style.transform="")}T&&st(J=>J.map(_e=>{let we=N.get(_e.id);return we?{..._e,x:Math.max(0,we.x+x),y:Math.max(0,we.y+k)}:_e}))}}}),(0,ce.jsx)("canvas",{ref:j,className:`${se.drawCanvas} ${lo?se.active:""}`,style:{opacity:qd?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),(0,ce.jsxs)("div",{className:se.markersLayer,"data-feedback-toolbar":!0,children:[te&&qa.filter(x=>!x.isFixed).map((x,k,T)=>(0,ce.jsx)(My,{annotation:x,globalIndex:qa.findIndex($=>$.id===x.id),layerIndex:k,layerSize:T.length,isExiting:K,isClearing:Ze,isAnimated:Ah.has(x.id),isHovered:!K&&Et===x.id,isDeleting:Ye===x.id,isEditingAny:!!De,renumberFrom:Bt,markerClickBehavior:mt.markerClickBehavior,tooltipStyle:Xh(x),onHoverEnter:$=>!K&&$.id!==bl.current&&El($),onHoverLeave:()=>El(null),onClick:$=>mt.markerClickBehavior==="delete"?Zd($.id):Sl($),onContextMenu:Sl},x.id)),te&&!K&&Yh.filter(x=>!x.isFixed).map(x=>(0,ce.jsx)(Ly,{annotation:x},x.id))]}),(0,ce.jsxs)("div",{className:se.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[te&&qa.filter(x=>x.isFixed).map((x,k,T)=>(0,ce.jsx)(My,{annotation:x,globalIndex:qa.findIndex($=>$.id===x.id),layerIndex:k,layerSize:T.length,isExiting:K,isClearing:Ze,isAnimated:Ah.has(x.id),isHovered:!K&&Et===x.id,isDeleting:Ye===x.id,isEditingAny:!!De,renumberFrom:Bt,markerClickBehavior:mt.markerClickBehavior,tooltipStyle:Xh(x),onHoverEnter:$=>!K&&$.id!==bl.current&&El($),onHoverLeave:()=>El(null),onClick:$=>mt.markerClickBehavior==="delete"?Zd($.id):Sl($),onContextMenu:Sl},x.id)),te&&!K&&Yh.filter(x=>x.isFixed).map(x=>(0,ce.jsx)(Ly,{annotation:x,fixed:!0},x.id))]}),C&&(0,ce.jsxs)("div",{className:se.overlay,"data-feedback-toolbar":!0,style:B||De?{zIndex:99999}:void 0,children:[q?.rect&&!B&&!Pe&&!cr&&(0,ce.jsx)("div",{className:`${se.hoverHighlight} ${se.enter}`,style:{left:q.rect.left,top:q.rect.top,width:q.rect.width,height:q.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),Rt.filter(x=>document.contains(x.element)).map((x,k)=>{let T=x.element.getBoundingClientRect(),$=Rt.length>1;return(0,ce.jsx)("div",{className:$?se.multiSelectOutline:se.singleSelectOutline,style:{position:"fixed",left:T.left,top:T.top,width:T.width,height:T.height,...$?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},k)}),Et&&!B&&(()=>{let x=m.find(N=>N.id===Et);if(!x?.boundingBox)return null;if(x.elementBoundingBoxes?.length)return Xt.length>0?Xt.filter(N=>document.contains(N)).map((N,J)=>{let _e=N.getBoundingClientRect();return(0,ce.jsx)("div",{className:`${se.multiSelectOutline} ${se.enter}`,style:{left:_e.left,top:_e.top,width:_e.width,height:_e.height}},`hover-outline-live-${J}`)}):x.elementBoundingBoxes.map((N,J)=>(0,ce.jsx)("div",{className:`${se.multiSelectOutline} ${se.enter}`,style:{left:N.x,top:N.y-be,width:N.width,height:N.height}},`hover-outline-${J}`));let k=ct&&document.contains(ct)?ct.getBoundingClientRect():null,T=k?{x:k.left,y:k.top,width:k.width,height:k.height}:{x:x.boundingBox.x,y:x.isFixed?x.boundingBox.y:x.boundingBox.y-be,width:x.boundingBox.width,height:x.boundingBox.height},$=x.isMultiSelect;return(0,ce.jsx)("div",{className:`${$?se.multiSelectOutline:se.singleSelectOutline} ${se.enter}`,style:{left:T.x,top:T.y,width:T.width,height:T.height,...$?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),q&&!B&&!Pe&&!cr&&(0,ce.jsxs)("div",{className:`${se.hoverTooltip} ${se.enter}`,style:{left:Math.max(8,Math.min(me.x,window.innerWidth-100)),top:Math.max(me.y-(q.reactComponents?48:32),8)},children:[q.reactComponents&&(0,ce.jsx)("div",{className:se.hoverReactPath,children:q.reactComponents}),(0,ce.jsx)("div",{className:se.hoverElementName,children:q.elementName})]}),B&&(0,ce.jsxs)(ce.Fragment,{children:[B.multiSelectElements?.length?B.multiSelectElements.filter(x=>document.contains(x)).map((x,k)=>{let T=x.getBoundingClientRect();return(0,ce.jsx)("div",{className:`${se.multiSelectOutline} ${Vi?se.exit:se.enter}`,style:{left:T.left,top:T.top,width:T.width,height:T.height}},`pending-multi-${k}`)}):B.targetElement&&document.contains(B.targetElement)?(()=>{let x=B.targetElement.getBoundingClientRect();return(0,ce.jsx)("div",{className:`${se.singleSelectOutline} ${Vi?se.exit:se.enter}`,style:{left:x.left,top:x.top,width:x.width,height:x.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():B.boundingBox&&(0,ce.jsx)("div",{className:`${B.isMultiSelect?se.multiSelectOutline:se.singleSelectOutline} ${Vi?se.exit:se.enter}`,style:{left:B.boundingBox.x,top:B.boundingBox.y-be,width:B.boundingBox.width,height:B.boundingBox.height,...B.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{let x=B.x,k=B.isFixed?B.y:B.y-be;return(0,ce.jsxs)(ce.Fragment,{children:[(0,ce.jsx)(qk,{x,y:k,isMultiSelect:B.isMultiSelect,isExiting:Vi}),(0,ce.jsx)(bd,{ref:Fh,element:B.element,selectedText:B.selectedText,computedStyles:B.computedStylesObj,placeholder:B.element==="Area selection"?"What should change in this area?":B.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:Xx,onCancel:Gd,isExiting:Vi,lightMode:!Vo,accentColor:B.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,x/100*window.innerWidth)),...k>window.innerHeight-290?{bottom:window.innerHeight-k+20}:{top:k+20}}})]})})()]}),De&&(0,ce.jsxs)(ce.Fragment,{children:[De.elementBoundingBoxes?.length?A.length>0?A.filter(x=>document.contains(x)).map((x,k)=>{let T=x.getBoundingClientRect();return(0,ce.jsx)("div",{className:`${se.multiSelectOutline} ${se.enter}`,style:{left:T.left,top:T.top,width:T.width,height:T.height}},`edit-multi-live-${k}`)}):De.elementBoundingBoxes.map((x,k)=>(0,ce.jsx)("div",{className:`${se.multiSelectOutline} ${se.enter}`,style:{left:x.x,top:x.y-be,width:x.width,height:x.height}},`edit-multi-${k}`)):(()=>{let x=ze&&document.contains(ze)?ze.getBoundingClientRect():null,k=x?{x:x.left,y:x.top,width:x.width,height:x.height}:De.boundingBox?{x:De.boundingBox.x,y:De.isFixed?De.boundingBox.y:De.boundingBox.y-be,width:De.boundingBox.width,height:De.boundingBox.height}:null;return k?(0,ce.jsx)("div",{className:`${De.isMultiSelect?se.multiSelectOutline:se.singleSelectOutline} ${se.enter}`,style:{left:k.x,top:k.y,width:k.width,height:k.height,...De.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),(0,ce.jsx)(bd,{ref:Hh,element:De.element,selectedText:De.selectedText,computedStyles:Vb(De.computedStyles),placeholder:"Edit your feedback...",initialValue:De.comment,submitLabel:"Save",onSubmit:qx,onCancel:Kx,onDelete:()=>Zd(De.id),isExiting:Ux,lightMode:!Vo,accentColor:De.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{let x=De.isFixed?De.y:De.y-be;return{left:Math.max(160,Math.min(window.innerWidth-160,De.x/100*window.innerWidth)),...x>window.innerHeight-290?{bottom:window.innerHeight-x+20}:{top:x+20}}})()})]}),cr&&(0,ce.jsxs)(ce.Fragment,{children:[(0,ce.jsx)("div",{ref:Yi,className:se.dragSelection}),(0,ce.jsx)("div",{ref:Xi,className:se.highlightsContainer})]})]})]}),document.body)}var s4=/^(.*?)__[A-Za-z0-9_-]{4,}$/;function o1(e){return(typeof e.className=="string"?e.className:e.getAttribute("class")||"").trim().split(/\s+/).filter(Boolean).map(n=>{let o=s4.exec(n);return o&&o[1]?o[1]:n})}function Sd(e){return(typeof e.className=="string"?e.className:e.getAttribute("class")||"").trim().split(/\s+/).filter(Boolean).sort()}function Gy(e){let t=globalThis;return t.CSS&&typeof t.CSS.escape=="function"?t.CSS.escape(e):e.replace(/[^a-zA-Z0-9_-]/g,n=>`\\${n}`)}function Zy(e,t=document.body){let n=[],o=e;for(;o&&o!==t&&o.nodeType===1;){let r=o.tagName.toLowerCase();if(o.id)r+=`#${o.id}`;else{let a=Sd(o);a.length&&(r+=`.${a.join(".")}`)}if(o.parentElement&&!o.id){let a=Sd(o).join("."),i=o.tagName,s=o,l=Array.from(o.parentElement.children).filter(c=>c.tagName===i&&Sd(c).join(".")===a);l.length>1&&(r+=`[${l.indexOf(s)}]`)}n.unshift(r),o=o.parentElement}return n.join(" > ")}function l4(e,t=6){let n=[],o=e,r=0;for(;o&&o!==document.body&&r<t;)n.unshift(o.tagName.toLowerCase()),o=o.parentElement,r++;return n.join(" > ")}function Jy(e){if(e.id&&document.querySelectorAll(`#${Gy(e.id)}`).length===1)return`#${e.id}`;for(let r of["data-testid","data-test-id","data-cy","name","aria-label"]){let a=e.getAttribute(r);if(!a)continue;let i=`${e.tagName.toLowerCase()}[${r}="${a.replace(/"/g,'\\"')}"]`;try{if(document.querySelectorAll(i).length===1)return i}catch{}}let t=Sd(e);if(t.length){let r=`${e.tagName.toLowerCase()}.${t.map(Gy).join(".")}`;try{if(document.querySelectorAll(r).length===1)return r}catch{}}let n=[],o=e;for(;o&&o!==document.documentElement;){let r=o.parentElement;if(!r)break;let a=Array.from(r.children).indexOf(o)+1;if(n.unshift(`${o.tagName.toLowerCase()}:nth-child(${a})`),r.id){n.unshift(`#${r.id}`);break}o=r}return n.join(" > ")}function e1(e){let t="";if(e.childNodes.forEach(i=>{i.nodeType===3&&i.nodeValue&&(t+=i.nodeValue)}),t=t.trim().replace(/\s+/g," "),t&&t.length<=32)return t;let n=e.getAttribute("aria-label");if(n&&n.length<=32)return n;let o=ah(e);if(o&&o.length<=32)return o;let r=e.tagName.toLowerCase(),a=o1(e).slice(0,2);return a.length?`${r}.${a.join(".")}`:r}var c4=["display","position","width","height","margin","padding","flex-direction","justify-content","align-items","gap","grid-template-columns","font-family","font-size","font-weight","line-height","letter-spacing","text-align","color","background-color","border","border-radius","box-shadow","opacity","z-index","overflow"];function d4(e){let t=window.getComputedStyle(e),n={};for(let o of c4){let r=t.getPropertyValue(o);r&&r!=="none"&&r!=="normal"&&r!=="auto"&&(n[o]=r.trim())}return n}function u4(e){let t=[],n=e.getAttribute("role")||p4(e);n&&t.push(`role=${n}`);let o=e.getAttribute("aria-label")||e.getAttribute("alt")||e.getAttribute("title")||e.innerText?.trim().slice(0,40)||ah(e).slice(0,40)||"";o&&t.push(`name="${o.replace(/\s+/g," ")}"`);let r=e.getAttribute("placeholder");r&&t.push(`placeholder="${r.replace(/\s+/g," ")}"`);for(let a of["aria-expanded","aria-selected","aria-disabled","aria-hidden","disabled"]){let i=e.getAttribute(a);i!=null&&t.push(`${a}=${i||"true"}`)}return e instanceof HTMLElement&&e.tabIndex>=0&&t.push(`tabindex=${e.tabIndex}`),t.join(" ")}function p4(e){let t=e.tagName.toLowerCase();return{a:"link",button:"button",input:"textbox",select:"combobox",textarea:"textbox",nav:"navigation",main:"main",header:"banner",footer:"contentinfo",h1:"heading",h2:"heading",h3:"heading",img:"img",ul:"list",ol:"list",li:"listitem",table:"table",form:"form"}[t]||""}function ah(e){if(!(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)||e instanceof HTMLInputElement&&/^(password|hidden)$/i.test(e.type))return"";let t=e.value?.trim();if(t)return t;let n=e.getAttribute("placeholder")?.trim();return n?`${n} (placeholder)`:""}function f4(e,t=240){let n=(e.innerText?.trim()||ah(e)).replace(/\s+/g," ");if(n.length>=20)return n.slice(0,t);let o=e.parentElement,r=o&&o.innerText?.trim().replace(/\s+/g," ")||"";return(n||r).slice(0,t)}function h4(e){let t=e,n=Object.keys(t).find(a=>a.startsWith("__reactFiber$")||a.startsWith("__reactInternalInstance$"));if(!n)return;let o=t[n],r=t1(o?._debugSource);for(let a=0;o&&a<30;a++){let i=o.elementType||o.type,s=null;if(typeof i=="function")s=i.displayName||i.name||null;else if(i&&typeof i=="object"&&"$$typeof"in i){if(i.render)s=i.render.displayName||i.render.name||"ForwardRef";else if(i.type){let l=i.type;s=typeof i.type=="function"&&(l.displayName||l.name)||"Memo"}}if(s){let l={name:s,props:m4(o.memoizedProps||o.pendingProps)},c=r??t1(o._debugSource);return c&&(l.source=c),l}o=o.return??null}}function t1(e){return e?.fileName?`${e.fileName}${e.lineNumber?`:${e.lineNumber}`:""}${e.columnNumber?`:${e.columnNumber}`:""}`:null}function m4(e){let t={};for(let n of Object.keys(e||{})){if(n==="children")continue;let o=e[n];if(o==null||typeof o=="string"||typeof o=="number"||typeof o=="boolean")t[n]=o;else if(typeof o=="function")t[n]="[Function]";else if(o instanceof Element)t[n]="[DOMNode]";else try{t[n]=JSON.parse(JSON.stringify(o))}catch{t[n]=Array.isArray(o)?`[Array(${o.length})]`:"[Object]"}}return t}function n1(e){let t=e.getBoundingClientRect();return{x:t.left,y:t.top,width:t.width,height:t.height}}function al(e,t={}){let n=n1(e),o={label:e1(e),selector:Jy(e),path:l4(e),fullPath:Zy(e),tagName:e.tagName.toLowerCase(),rect:n,pageX:n.x+window.scrollX,pageY:n.y+window.scrollY,computedStyles:d4(e),accessibility:u4(e),nearbyText:f4(e)};e.id&&(o.id=e.id);let r=o1(e);r.length&&(o.classes=r.join(" "));let a=h4(e);return a&&(o.reactComponent=a),t.selectedText&&(o.selectedText=t.selectedText),t.additionalElements?.length&&(o.additional=t.additionalElements.map(i=>({label:e1(i),selector:Jy(i),fullPath:Zy(i),rect:n1(i)}))),o}function r1(e){let t=[e.selector,e.fullPath].filter(Boolean);for(let n of t)try{let o=document.querySelector(n);if(o instanceof HTMLElement)return o}catch{}return null}var Ai={"Pause animations":"Suspendre les animations","Resume animations":"Reprendre les animations","Layout mode":"Mode mise en page","Layout Mode":"Mise en page","Exit layout mode":"Quitter la mise en page","Hide markers":"Masquer les rep\xE8res","Show markers":"Afficher les rep\xE8res","Copy feedback":"Copier les retours","Copy layout":"Copier la mise en page",Sent:"Envoy\xE9","Sent!":"Envoy\xE9 !","Sending\u2026":"Envoi\u2026","Sending...":"Envoi\u2026",Copied:"Copi\xE9","Copied!":"Copi\xE9 !","Send failed":"Envoi impossible","Failed to send":"Envoi impossible","Send Annotations":"Envoyer les retours","Send annotations":"Envoyer les retours","Clear all":"Tout effacer",Clear:"Effacer",Settings:"R\xE9glages",Exit:"Quitter",Cancel:"Annuler",Add:"Ajouter",Save:"Enregistrer",Delete:"Supprimer",Close:"Fermer","What should change?":"Qu\u2019est-ce qui doit changer ?","Edit your feedback...":"Modifier votre retour\u2026","Add your comment here.":"Ajoutez votre commentaire ici.","Output Detail":"D\xE9tail des retours",Compact:"Concis",Standard:"Standard",Detailed:"D\xE9taill\xE9",Forensic:"Complet","React Components":"Composants React","Hide Until Restart":"Masquer jusqu\u2019au prochain onglet","Marker Color":"Couleur des rep\xE8res","Clear on copy/send":"Effacer apr\xE8s copie ou envoi","Block page interactions":"Bloquer les interactions de la page","Switch to light mode":"Passer au th\xE8me clair","Switch to dark mode":"Passer au th\xE8me sombre","Controls how much detail is included in the copied output":"Choisissez le niveau de d\xE9tail des retours copi\xE9s.","Include React component names in annotations":"Inclure les noms des composants React dans les retours.","Disabled \u2014 production builds minify component names, making detection unreliable. Use in development mode.":"Disponible en d\xE9veloppement : les noms des composants sont raccourcis en production.","Hides the toolbar until you open a new tab":"Masquer la barre jusqu\u2019\xE0 l\u2019ouverture d\u2019un nouvel onglet.","Automatically clear annotations after copying":"Effacer automatiquement les retours apr\xE8s leur copie.","Manage MCP & Webhooks":"Connexions et envois","MCP Connection":"Connexion \xE0 l\u2019agent","MCP Connected":"Agent connect\xE9","MCP Connecting...":"Connexion \xE0 l\u2019agent\u2026",Connected:"Connect\xE9","Connecting...":"Connexion\u2026",Disconnected:"D\xE9connect\xE9","MCP connection allows agents to receive and act on annotations.":"La connexion permet \xE0 votre agent de recevoir et traiter les retours.","Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time.":"Connectez votre agent pour lui transmettre les retours en direct.","Learn more":"En savoir plus","Learn more.":"En savoir plus.","Auto-Send":"Envoi automatique",Webhooks:"Envoi vers un service","Webhook URL":"Adresse du service","Send annotation data to any URL endpoint when annotations change. Useful for custom integrations.":"Transmettre les retours \xE0 votre service lorsqu\u2019ils changent.","The webhook URL will receive live annotation changes and annotation data.":"Cette adresse recevra les retours et leurs modifications en direct.",Tools:"Outils","Layout / Wireframe mode":"Mise en page / Maquette","Design mode":"Retouche du design","Needs a connected agent \u2014 MCP or webhook.":"N\xE9cessite un agent ou un service connect\xE9.","Copy the markdown to the clipboard.":"Copier les retours dans le presse-papiers.","Rearrange the page, or wireframe a component.":"R\xE9agencer la page ou cr\xE9er la maquette d\u2019un composant.","Restyle a component live.":"Retoucher un composant en direct.",Indigo:"Indigo",Blue:"Bleu",Cyan:"Cyan",Green:"Vert",Yellow:"Jaune",Orange:"Orange",Red:"Rouge","Wireframe New Page":"Maquette d\u2019une nouvelle page","Wireframe New Component":"Maquette d\u2019un composant","Describe this page to provide additional context for your agent.":"D\xE9crivez cette page pour guider votre agent.","Add a note about this section":"Ajouter une note sur cette section","Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary.":"D\xE9placez et redimensionnez les \xE9l\xE9ments ou ajoutez des composants pour pr\xE9parer vos retours.","Toggle Opacity":"Opacit\xE9","Wireframe Mode":"Mode maquette","Start Over":"Recommencer","Double-click to name this block":"Double-cliquez pour nommer ce bloc","Leave this one out":"Retirer ce bloc de la maquette","Put everything back":"Tout remettre en place","Exit wireframe mode":"Quitter la maquette","Add a block":"Ajouter un bloc","Show the real colours":"Afficher les couleurs r\xE9elles","Back to wireframe":"Revenir \xE0 la maquette",Heading:"Titre",Button:"Bouton",Input:"Champ",Card:"Carte",List:"Liste","Drag components onto the canvas.":"Glissez les composants sur la page.","Copied output will only include the wireframed layout.":"La copie contiendra uniquement cette maquette.",Appearance:"Apparence",Text:"Texte",Color:"Couleur","Corner Radius":"Arrondi","Corner radius":"Arrondi","Backdrop Blur":"Flou d\u2019arri\xE8re-plan","Backdrop blur":"Flou d\u2019arri\xE8re-plan",Opacity:"Opacit\xE9",Typeface:"Police",Style:"Style",Italic:"Italique",Underline:"Soulign\xE9",Strikethrough:"Barr\xE9","Align left":"Aligner \xE0 gauche","Align centre":"Centrer","Align right":"Aligner \xE0 droite",Size:"Dimensions",Spacing:"Espacement","Font size":"Taille du texte","Font weight":"\xC9paisseur du texte","Line height":"Interligne","Letter spacing":"Espacement des lettres",Border:"Bordure",Shadow:"Ombre",Width:"Largeur",Height:"Hauteur",Offset:"D\xE9calage",Blur:"Flou",Flex:"Disposition",Direction:"Direction",Row:"Ligne",Column:"Colonne","H Align":"Align. horizontal","V Align":"Align. vertical",Start:"D\xE9but",Centre:"Centre",End:"Fin",Gap:"\xC9cart",Padding:"Marge interne",Margin:"Marge externe",Top:"Haut",Right:"Droite",Bottom:"Bas",Left:"Gauche","No selection":"Aucune s\xE9lection","Click an element on the page":"Cliquez sur un \xE9l\xE9ment de la page","Click any element on the page to inspect and restyle it.":"Cliquez sur un \xE9l\xE9ment de la page pour le retoucher.",Adjust:"Retoucher",Edited:"Modifi\xE9",Revert:"R\xE9tablir",Layout:"Mise en page",Default:"Repos",Hover:"Survol",Focus:"Focus",Active:"Appuy\xE9",Disabled:"D\xE9sactiv\xE9","Design the resting state":"Retoucher l\u2019\xE9tat au repos","Resize the inspector":"Redimensionner l\u2019inspecteur","One radius for every corner":"Un m\xEAme arrondi aux quatre coins","Set each corner separately":"R\xE9gler chaque coin s\xE9par\xE9ment","One value for every side":"Une m\xEAme valeur de chaque c\xF4t\xE9","Set each side separately":"R\xE9gler chaque c\xF4t\xE9 s\xE9par\xE9ment","All sides linked":"C\xF4t\xE9s li\xE9s","Sides set independently":"C\xF4t\xE9s ind\xE9pendants","Pick a colour":"Choisir une couleur","Pick a colour from the page":"Pr\xE9lever une couleur de la page","drag or use the arrow keys to change":"glissez ou utilisez les fl\xE8ches pour r\xE9gler"};function g4(e){if(Object.prototype.hasOwnProperty.call(Ai,e))return Ai[e];let t=e.match(/^(\d+) edits$/);if(t)return`${t[1]} retouches`;let n=e.match(/^(.*?) — drag or use the arrow keys to change$/);if(n)return`${Object.prototype.hasOwnProperty.call(Ai,n[1])?Ai[n[1]]:n[1]} \u2014 glissez ou utilisez les fl\xE8ches pour r\xE9gler`;let o=e.match(/^Design the (:[\w-]+) state$/);if(o)return`Retoucher l\u2019\xE9tat ${{":hover":"survol\xE9",":focus-visible":"au focus",":active":"appuy\xE9",":disabled":"d\xE9sactiv\xE9"}[o[1]]??o[1]}`;let r=e.match(/^Undo (.+)$/);if(r)return`R\xE9tablir ${r[1]}`;let a=e.match(/^(Padding|Margin) (Top|Right|Bottom|Left)$/);if(a)return`${Ai[a[1]]} \xB7 ${Ai[a[2]]}`;let i=e.match(/^Contrast ([\d.]+):1 — (readable \(needs ([\d.]+):1\)|too low, needs ([\d.]+):1)$/);if(i)return`Contraste ${i[1]}:1 \u2014 ${i[3]?`lisible (minimum ${i[3]}:1)`:`trop faible, minimum ${i[4]}:1`}`;let s=e.match(/^Off this project's ([\d.]+)px rhythm — ([\d.]+)px is on it\.$/);if(s)return`Hors de la grille de ${s[1]} px du projet \u2014 valeur proche : ${s[2]} px.`}var _4=e=>e.map(t=>`[class*="__${t}___"]`).join(","),y4="[data-agentation-root],[data-feedback-toolbar],[data-annotation-popup],[data-agentation-settings-panel]",x4=_4(["buttonTooltip","settingsLabel","cycleButtonText","automationHeader","automationDescription","settingsNavLink","settingsBackButton","learnMoreLink","autoSendLabel","paletteHeaderTitle","paletteHeaderDesc","canvasToggleLabel","paletteSectionTitle","paletteItemLabel","paletteFooterClear","wireframeOpacityLabel","wireframeNotice","wireframeNoticeTitle","wireframeStartOver"]),v4=".agt-sec-title,.agt-row-label,.agt-tab,.agt-state,.agt-btn,.agt-empty,.agt-status-txt,.agt-contrast,[data-adk-empty-selection]";function a1(e,t="title"){return e.getAttribute(`data-adk-source-${t}`)??e.getAttribute(t)??""}function i1(e){let t=new WeakMap,n=new WeakMap,o=new Map;function r(p){let d=p.trim(),y=g4(d);if(y!==void 0)return e()==="fr"?p.replace(d,y):p}function a(p){let d=p.data,y=t.get(p),_=y&&d===y.rendered?y.source:d,C=r(_);if(C===void 0){t.delete(p);return}t.set(p,{source:_,rendered:C}),d!==C&&(p.data=C)}function i(p,d=!1){for(let y of p.childNodes)y.nodeType===Node.TEXT_NODE?a(y):d&&y instanceof Element&&!y.matches("svg,input,textarea,style,script,[contenteditable]")&&i(y,!0)}function s(p,d){let y=p.getAttribute(d);if(y===null)return;let _=n.get(p);_||(_=new Map,n.set(p,_));let C=_.get(d),v=C&&y===C.rendered?C.source:y,m=r(v);if(m===void 0){_.delete(d),p.removeAttribute(`data-adk-source-${d}`);return}_.set(d,{source:v,rendered:m}),p.getAttribute(`data-adk-source-${d}`)!==v&&p.setAttribute(`data-adk-source-${d}`,v),y!==m&&p.setAttribute(d,m)}function l(p){p.querySelectorAll(v4).forEach(d=>i(d)),p.querySelectorAll(".agt-num,.agt-num-scrub,.agt-sec-add,.agt-tgl,.agt-seg-btn,.agt-state,.agt-panel-grip,.agt-swatch,.agt-pk-dropper,.agt-chip").forEach(d=>{s(d,"title"),s(d,"aria-label")})}function c(p){p.querySelectorAll(".bar > button,.palette > .chip > span").forEach(d=>i(d)),p.querySelectorAll(".frame[title],button[title]").forEach(d=>s(d,"title"))}function u(){document.querySelectorAll(y4).forEach(p=>{p.querySelectorAll(x4).forEach(d=>i(d,!0)),p.querySelectorAll('[data-adk-features] > div:first-child, [data-agentation-settings-panel] label, [class*="__cancel___"], [class*="__submit___"]').forEach(d=>i(d)),p.hasAttribute("data-feedback-toolbar")&&p.parentElement===document.body&&!p.hasAttribute("class")&&!p.children.length&&i(p),p.querySelectorAll("[title],[aria-label],[placeholder]").forEach(d=>{d.closest('[data-annotation-marker],[class*="__element___"],[class*="__quote___"],[class*="__styleValue___"],[class*="__markerNote___"],[class*="__markerQuote___"]')||(s(d,"title"),s(d,"aria-label"),s(d,"placeholder"))})});for(let[p,d]of o)p.host.isConnected||(d.disconnect(),o.delete(p));document.querySelectorAll("[data-design-edit-panel],[data-adk-wf-chrome]").forEach(p=>{let d=p.shadowRoot;if(!d)return;let y=p.hasAttribute("data-adk-wf-chrome")?c:l;if(y(d),o.has(d))return;let _=new MutationObserver(()=>y(d));_.observe(d,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:["title","aria-label"]}),o.set(d,_)})}return{refresh:u,destroy(){for(let p of o.values())p.disconnect();o.clear()}}}var s1="data-feedback-toolbar",p1=["[data-adk-root]","[data-agentation-root]","[data-agentation-settings-panel]","[data-adk-toast]","[data-adk-history]","[data-adk-devices]","[data-adk-device-frame]","[data-adk-hover-label]","[data-adk-wf-chrome]","[data-design-edit-panel]","[data-design-edit-overlay]"].join(","),l1=["pointerover","pointermove","pointerdown","pointerup","mouseover","mousemove","mousedown","mouseup","touchstart","touchend","click","auxclick","dblclick","contextmenu"],w4=new Set(["pointerdown","mousedown","touchstart"]),b4=new Set(["click","auxclick","dblclick","contextmenu"]),c1=["keydown","keyup","keypress"];function Ed(e){return!!e&&e.nodeType===1}function k4(e){try{return e.matches(p1)}catch{return!1}}function d1(e){let n=(typeof e.composedPath=="function"?e.composedPath():[]).filter(o=>Ed(o)&&k4(o));if(!n.length&&Ed(e.target)){let o=e.target.closest(p1);o&&n.push(o)}return n}function u1(e){return Ed(e)?/^(INPUT|TEXTAREA|SELECT)$/.test(e.tagName)?!0:e.isContentEditable===!0:!1}function C4(e){let t=e;for(let n=t.getRootNode();n instanceof ShadowRoot;n=t.getRootNode())t=n.host;return Ed(t)?t:null}var ih=0,il=null;function f1(){ih++,il||(il=S4());let e=!1;return()=>{e||(e=!0,ih--,ih===0&&il&&(il(),il=null))}}function S4(){let e=!1,t=null,n=i=>{let s=d1(i);for(let c of s)c.hasAttribute(s1)||c.setAttribute(s1,"");let l=s.length>0;if(w4.has(i.type)){if(i.type==="mousedown"&&e)return;e=l;return}!b4.has(i.type)||l||!e||i.type==="click"&&i.detail===0||i.stopPropagation()},o=()=>{t&&(t.node.removeEventListener(t.type,t.stop),t=null)},r=i=>{o();let l=(typeof i.composedPath=="function"?i.composedPath():[])[0]??i.target;if(!u1(l))return;let c=C4(l);if(!c||c===l||u1(c)||!d1(i).length)return;let u=p=>{p===i&&(p.stopPropagation(),o())};c.addEventListener(i.type,u),t={node:c,type:i.type,stop:u}},a={capture:!0,passive:!0};for(let i of l1)window.addEventListener(i,n,a);for(let i of c1)window.addEventListener(i,r,!0);return()=>{for(let i of l1)window.removeEventListener(i,n,a);for(let i of c1)window.removeEventListener(i,r,!0);o()}}function E4(e,t){let n=e.target.fullPath??"",o=t.target.fullPath??"";return!n||!o||n===o?!0:n.startsWith(o)||o.startsWith(n)}function M4(e){let t=[];for(let n of e){let o=t.filter(i=>i.some(s=>E4(n,s)));if(!o.length){t.push([n]);continue}let r=o[0],a=o.slice(1);r.push(n);for(let i of a)r.push(...i),t.splice(t.indexOf(i),1)}return t}function h1(e,t,n){let o=t.map(a=>a.id),r=new Map;for(let a of e){let i=r.get(a.kind)??[];i.push(a),r.set(a.kind,i)}return Array.from(r.keys()).sort((a,i)=>{let s=o.indexOf(a),l=o.indexOf(i);return(s===-1?99:s)-(l===-1?99:l)}).map(a=>{let i=r.get(a)??[],s=t.find(l=>l.id===a);return{kind:a,label:s?ur(s.label,n):a,items:i,blocks:M4(i)}})}function m1(e){let t=new Map,n=0;for(let o of e)for(let r of o.items)n+=1,t.set(r.id,n);return t}function g1(e,t){if(!e.length)return[];let n=a=>t.get(a.id)??0,o=e.reduce((a,i)=>a+i.blocks.length,0),r=[];r.push("## How to work through this"),r.push(""),r.push(`${e.length===1?"One kind of work":`${e.length} kinds of work`}, ${o} independent group${o===1?"":"s"} in total. Run one sub-agent per group \u2014 every group below touches a different part of the page, so none of them can get in another's way.`),r.push("");for(let a of e)r.push(`### ${a.label} \u2014 ${a.items.length} item${a.items.length===1?"":"s"}`),r.push(""),a.blocks.forEach((i,s)=>{let l=i.map(n).join(", ");if(i.length===1)r.push(`- Group ${s+1}: item ${l} \u2014 \`${i[0].target.label}\``);else{r.push(`- Group ${s+1}: items ${l} \u2014 one worker takes all of them, in this order. These elements contain one another, so splitting them would have two workers changing the same component from two directions.`);for(let c of i)r.push(`  - ${n(c)}. \`${c.target.label}\``)}}),r.push("");return r.push("Every item below carries the element it belongs to (selector, DOM path, component). Give a sub-agent the items in its group and nothing else \u2014 the selectors are the contract, and a worker that wanders outside them is the one that breaks the page."),r.push(""),r}function L4(e){return`agentation-rearrange-${e}`}function y1(e){try{let t=window.localStorage.getItem(L4(e));if(!t)return null;let n=JSON.parse(t),o=Array.isArray(n.sections)?n.sections:[],r=Array.isArray(n.originalOrder)?n.originalOrder:[];return o.length?{sections:o,originalOrder:r}:null}catch{return null}}function _1(e,t){return typeof e.label=="string"&&e.label||typeof e.selector=="string"&&e.selector||typeof e.id=="string"&&e.id||`section ${t+1}`}function T4(e,t){return typeof e.id=="string"&&e.id||typeof e.selector=="string"&&e.selector||String(t)}function x1(e){if(!e)return null;let{sections:t,originalOrder:n}=e,o=t.map((s,l)=>_1(s,l)),r=t.map((s,l)=>T4(s,l)),a=[];n.length&&r.forEach((s,l)=>{let c=n.indexOf(s);c>=0&&c!==l&&a.push({name:o[l]??s,from:c+1,to:l+1})});let i=t.map((s,l)=>({name:_1(s,l),width:typeof s.width=="number"?Math.round(s.width):void 0,height:typeof s.height=="number"?Math.round(s.height):void 0})).filter(s=>s.width!=null||s.height!=null);return!a.length&&!i.length?null:{moved:a,resized:i,order:o}}function v1(e){if(!e)return[];let t=[];if(t.push("## Page layout rearranged"),t.push(""),t.push("These are moves the user made directly on the page with Layout mode. They are part of the request, not a preview: reproduce them in the source, in the markup that renders these sections."),t.push(""),e.moved.length){t.push("Moved:");for(let n of e.moved)t.push(`- \`${n.name}\` \u2014 position ${n.from} \u2192 ${n.to}`);t.push("")}if(e.resized.length){t.push("Resized:");for(let n of e.resized){let o=[n.width!=null?`${n.width}px wide`:"",n.height!=null?`${n.height}px tall`:""].filter(Boolean).join(", ");t.push(`- \`${n.name}\` \u2014 ${o}`)}t.push("")}return t.push(`Final order, top to bottom: ${e.order.map(n=>`\`${n}\``).join(" \u2192 ")}`),t.push(""),t}function $4(e,t,n){let o=e.find(r=>r.id===t);return o?ur(o.label,n):t}function I4(e){if(!e)return"";let t=Object.entries(e);return t.length?t.map(([n,o])=>`${n}: ${o}`).join("; "):""}function w1(e){return e.width&&e.height?`, ${e.width}\xD7${e.height} px`:""}function b1(e){if(!e||!e.file&&!e.dataUrl&&!e.path)return"";if(e.file){let t=e.file.startsWith("~/")?"; `~` is your home folder":e.file.startsWith("%USERPROFILE%")?"; `%USERPROFILE%` is your home folder":"";return`\`${e.file}\` (open this file to see the element${w1(e)}${t})`}return e.path&&/^(https?:|file:)\/\//.test(e.path)?`${e.path}${w1(e)}`:"taken, but not attached to this text \u2014 it exists only in the browser. If you need to see the element, ask for the screenshot to be pasted into the conversation (the camera thumbnail on the note has a \u201CCopy image\u201D button)."}var sh="[Screenshot: ";function P4(e){let t=b1(e);return t?`${sh}${t.replace(/[\r\n\]]+/g," ")}]`:""}function lh(e){let t=e.lastIndexOf(`

${sh}`);return t>=0&&e.endsWith("]")&&!e.slice(t+2).includes(`
`)?e.slice(0,t):e.startsWith(sh)&&e.endsWith("]")&&!e.includes(`
`)?"":e}function k1(e,t){let n=lh(e),o=P4(t);return o?n?`${n}

${o}`:o:n}function N4(e,t,n,o){let r=e.target,a=[];if(a.push(`### ${t}. ${e.comment.trim()||"(no comment)"}`),a.push(""),a.push(`- **Kind**: ${$4(o,e.kind,n)}`),a.push(`- **Element**: \`${r.label}\``),a.push(`- **Selector**: \`${r.selector}\``),a.push(`- **DOM path**: \`${r.fullPath}\``),r.classes&&a.push(`- **Classes**: \`${r.classes}\``),r.reactComponent?.name){let l=r.reactComponent.name,c=l.includes("<")?l:`<${l}>`,u=r.reactComponent.source?` (\`${r.reactComponent.source}\`)`:"";a.push(`- **React component**: \`${c}\`${u}`)}a.push(`- **Position**: x=${Math.round(r.rect.x)} y=${Math.round(r.rect.y)} ${Math.round(r.rect.width)}\xD7${Math.round(r.rect.height)}`),r.viewport&&a.push(`- **Written at**: ${r.viewport.label}`),r.selectedText&&a.push(`- **Selected text**: "${r.selectedText.slice(0,200)}"`),r.accessibility&&a.push(`- **Accessibility**: ${r.accessibility}`);let i=I4(r.computedStyles);i&&a.push(`- **Computed styles**: ${i}`),r.nearbyText&&a.push(`- **Nearby text**: "${r.nearbyText.slice(0,200)}"`);let s=b1(e.screenshot);if(s&&a.push(`- **Screenshot**: ${s}`),r.additional?.length){a.push(`- **Also selected (${r.additional.length})**:`);for(let l of r.additional)a.push(`  - \`${l.label}\` \u2014 \`${l.selector}\``)}if(e.designChanges?.length){a.push(`- **Design edits (${e.designChanges.length})**:`);for(let l of e.designChanges){let c=l.statePseudo?` (\`${l.statePseudo}\`)`:"";a.push(`  - \`${l.elementTagName||"element"}\`${c} \xB7 \`${l.property}\`: \`${l.oldValue}\` \u2192 \`${l.newValue}\``)}}return a.join(`
`)}function C1(e,t){let n=v1(x1(y1(t.pagePath)));if(!e.length&&!n.length)return"";let{locale:o,kinds:r}=t,a=[];a.push(`## Page feedback \u2014 ${t.pagePath}`),a.push(""),a.push(`- **URL**: ${t.url}`),t.title&&a.push(`- **Page**: ${t.title}`),a.push(`- **Items**: ${e.length}`),t.viewportLine&&a.push(`- **Annotated at**: ${t.viewportLine}`);let i=e.filter(u=>u.screenshot?.file).length;i&&a.push(`- **Screenshots**: ${i} saved as image files \u2014 open each path below before changing anything`),a.push(""),a.push(...n);let s=h1(e,r,o),l=m1(s);a.push(...g1(s,l));for(let u of s){a.push(`## ${u.label} (${u.items.length})`),a.push("");for(let p of u.items)a.push(N4(p,l.get(p.id)??0,o,r)),a.push("")}let c=e.filter(u=>u.designChanges?.length);if(c.length){a.push("## Applying the design edits"),a.push(""),t.designGuidance&&(a.push("```"),a.push(t.designGuidance.trim()),a.push("```"),a.push("")),a.push("<details><summary>Every design edit, as structured records</summary>"),a.push(""),a.push("```");for(let u of c)a.push(`# Item ${l.get(u.id)??0} \u2014 ${u.target.label}`),a.push((u.designChangeBlock??u.designPrompt??"").trim()),a.push("");a.push("```"),a.push(""),a.push("</details>"),a.push("")}return a.join(`
`).trim()}async function R4(e){let t=await(await fetch(e)).blob();if(t.type==="image/png")return t;let n=await createImageBitmap(t);try{let o=document.createElement("canvas");o.width=n.width,o.height=n.height;let r=o.getContext("2d");if(!r)throw new Error("canvas unavailable");return r.drawImage(n,0,0),await new Promise((a,i)=>o.toBlob(s=>s?a(s):i(new Error("encode failed")),"image/png"))}finally{n.close?.()}}var A4=5e3;function E1(){return typeof ClipboardItem<"u"&&typeof navigator.clipboard?.write=="function"}async function D4(e){if(!E1())return!1;try{let t=navigator.clipboard.write([new ClipboardItem({"image/png":R4(e)})]).then(()=>!0),n=new Promise(o=>window.setTimeout(()=>o(!1),A4));return await Promise.race([t,n])}catch{return!1}}function S1(e){let t=document.createElement("button");return t.type="button",t.textContent=e,t.style.cssText='all:unset;box-sizing:border-box;cursor:pointer;padding:9px 16px;border-radius:999px;font:500 13px/1.2 system-ui,-apple-system,"Segoe UI",sans-serif;color:#fff;background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.22);transition:background-color 160ms cubic-bezier(0.23,1,0.32,1)',t.addEventListener("pointerenter",()=>{t.style.background="rgba(255,255,255,0.24)"}),t.addEventListener("pointerleave",()=>{t.style.background="rgba(255,255,255,0.14)"}),t.addEventListener("focus",()=>{t.style.outline="2px solid #fff",t.style.outlineOffset="2px"}),t.addEventListener("blur",()=>{t.style.outline="none"}),t}function M1(e){lm(e.dataUrl);let t=document.querySelectorAll("[data-adk-lightbox]"),n=t[t.length-1];if(!n)return;n.setAttribute("data-adk-root",""),n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.style.flexDirection="column",n.style.gap="14px";let o=document.createElement("div");o.setAttribute("data-adk-lightbox-actions",""),o.style.cssText="display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:8px;max-width:86%;cursor:default",o.addEventListener("click",s=>s.stopPropagation());let r=document.createElement("span");r.setAttribute("role","status"),r.style.cssText='font:13px/1.4 system-ui,-apple-system,"Segoe UI",sans-serif;color:#fff;opacity:0.86;overflow-wrap:anywhere;text-align:center;flex-basis:100%',e.file&&(r.textContent=`${e.labels.savedAt} ${e.file}`);let a=null;if(E1()){let s=S1(e.labels.copy);a=s;let l=!1;s.addEventListener("click",async()=>{if(l)return;l=!0;let c=await D4(e.dataUrl);r.textContent=c?e.labels.copied:e.labels.copyFailed,l=!1}),o.appendChild(s)}let i=S1(e.labels.download);i.addEventListener("click",()=>{let s=document.createElement("a");s.href=e.dataUrl,s.download=e.name||"capture.png",s.setAttribute("data-adk-root",""),document.body.appendChild(s),s.click(),s.remove()}),o.appendChild(i),o.appendChild(r),n.appendChild(o),(a??i).focus({preventScroll:!0})}function O4(){try{let e="__adk_probe__";return window.localStorage.setItem(e,"1"),window.localStorage.removeItem(e),!0}catch{return!1}}function L1(e="adk",t=!0){let n=new Map,o=t&&typeof window<"u"&&O4(),r=i=>`${e}:annotations:${i||"/"}`,a=`${e}:session`;return{load(i){if(!o)return n.get(i)??[];let s=window.localStorage.getItem(r(i));if(!s)return[];try{let l=JSON.parse(s);return Array.isArray(l)?l:[]}catch(l){try{window.localStorage.setItem(`${r(i)}:corrupt:${Date.now()}`,s)}catch{}return console.warn("[annotate-kit] corrupted annotation store, backed up",l),[]}},save(i,s){if(!o){n.set(i,s);return}try{window.localStorage.setItem(r(i),JSON.stringify(s))}catch(l){console.warn("[annotate-kit] could not persist annotations",l)}},clear(i){if(n.delete(i),!!o)try{window.localStorage.removeItem(r(i))}catch{}},sessionId(){if(!o)return ch();try{let i=window.localStorage.getItem(a);if(i)return i;let s=ch();return window.localStorage.setItem(a,s),s}catch{return ch()}}}}function ch(){let e=globalThis.crypto;return e&&typeof e.randomUUID=="function"?e.randomUUID():`adk-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function Md(e="a"){return`${e}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}var B4=/^adk_(use|adapt)_([a-z0-9-]{2,40})_([A-Za-z0-9_-]{8,})$/,Cr={tier:"evaluation"},T1=!1;function $1(e){if(!e)return Cr={tier:"evaluation"},Cr;let t=B4.exec(e.trim());return t?(Cr={tier:t[1],organisation:t[2],key:e},Cr):(Cr={tier:"evaluation",key:e,problem:"The licence key is not in the expected format."},Cr)}function z4(){return Cr.tier!=="evaluation"}function I1(){if(T1||typeof window>"u")return;T1=!0;let e=window.location.hostname,t=e==="localhost"||e==="127.0.0.1"||e.endsWith(".local");if(Cr.problem){console.warn(`[annotate-kit] ${Cr.problem} Running in evaluation mode.`);return}!z4()&&!t&&console.info("[annotate-kit] Running unlicensed (30-day evaluation). A licence covers production use: https://github.com/Connected-Mate/annotate-design-kit#licence")}var Sr=null,sl=class extends Error{},Aa=class extends Error{},ll=class extends Error{};function N1(){return typeof navigator.mediaDevices?.getDisplayMedia=="function"&&typeof window.ImageCapture<"u"}async function F4(){if(Sr&&Sr.getVideoTracks().some(t=>t.readyState==="live"))return Sr;let e=navigator.mediaDevices;if(!e?.getDisplayMedia||typeof window.ImageCapture>"u")throw new ll("Tab capture is unavailable in this browser.");try{return Sr=await e.getDisplayMedia({video:{displaySurface:"browser"},audio:!1,preferCurrentTab:!0}),Sr.getVideoTracks().forEach(t=>{t.addEventListener("ended",()=>{Sr=null})}),Sr}catch(t){throw t instanceof Error&&(t.name==="NotAllowedError"||t.name==="AbortError")?new Aa("Tab sharing was cancelled or not allowed."):t}}function P1(){Sr?.getTracks().forEach(e=>e.stop()),Sr=null}async function R1(e){let n=(await F4())?.getVideoTracks()[0];if(!n)throw new Error("No video track was provided for tab capture.");let o=n.getSettings().displaySurface;if(o&&o!=="browser")throw P1(),new sl("Select the current browser tab to capture this element.");let r;try{let a=window.ImageCapture;r=await new a(n).grabFrame()}catch(a){throw P1(),a}try{let a=typeof e=="function"?e():e;if(!a)return null;let i={...a},s=window;for(;s.parent!==s;){let C=s.frameElement;if(!C?.offsetWidth||!C.offsetHeight)return null;let v=C.getBoundingClientRect(),m=v.width/C.offsetWidth,g=v.height/C.offsetHeight;i={x:v.left+(C.clientLeft+i.x)*m,y:v.top+(C.clientTop+i.y)*g,width:i.width*m,height:i.height*g},s=s.parent}let l=H4(i,r.width,r.height,s.innerWidth,s.innerHeight);if(!l)return null;let c=V4(l.width,l.height),u=document.createElement("canvas");u.width=c.width,u.height=c.height;let p=u.getContext("2d");if(!p)throw new Error("The screenshot canvas is unavailable.");p.imageSmoothingQuality="high",p.drawImage(r,l.x,l.y,l.width,l.height,0,0,u.width,u.height);let{dataUrl:d,mimeType:y}=Y4(u),_=y==="image/jpeg"?"jpg":"png";return{dataUrl:d,mimeType:y,width:u.width,height:u.height,path:`capture-${Math.round(i.x)}x${Math.round(i.y)}-${u.width}x${u.height}.${_}`}}finally{r.close?.()}}function H4(e,t,n,o,r){if(![e.x,e.y,e.width,e.height,t,n,o,r].every(Number.isFinite)||e.width<=0||e.height<=0||t<=0||n<=0||o<=0||r<=0)return null;let a=Math.max(0,e.x),i=Math.max(0,e.y),s=Math.min(o,e.x+e.width),l=Math.min(r,e.y+e.height);return s<=a||l<=i?null:{x:a*t/o,y:i*n/r,width:(s-a)*t/o,height:(l-i)*n/r}}var W4=1568,j4=115e4,U4=2e6;function V4(e,t){let n=Math.max(1,e),o=Math.max(1,t),r=Math.min(1,W4/Math.max(n,o),Math.sqrt(j4/(n*o)));return{width:Math.max(1,Math.round(n*r)),height:Math.max(1,Math.round(o*r))}}function Y4(e){let t=e.toDataURL("image/png");if(t.length<=U4)return{dataUrl:t,mimeType:"image/png"};let n=e.toDataURL("image/jpeg",.85);return n.startsWith("data:image/jpeg")&&n.length<t.length?{dataUrl:n,mimeType:"image/jpeg"}:{dataUrl:t,mimeType:"image/png"}}function Ld(){return{name:"clipboard",async send(e){return await cl(e.markdown)?{ok:!0}:{ok:!1,message:"clipboard unavailable"}}}}function A1(e,t="callback"){return{name:t,async send(n){let o=await e(n);return o&&typeof o=="object"&&"ok"in o?o:{ok:!0}}}}function D1(){return{name:"console",send(e){return console.info("[annotate-kit] feedback payload",e),console.info(e.markdown),{ok:!0}}}}function O1(e){return{name:"http",target:e.url,async send(t){try{let n=await fetch(e.url,{method:e.method??"POST",headers:{"Content-Type":"application/json",...e.headers??{}},credentials:e.credentials,body:JSON.stringify(e.body?e.body(t):t)});return n.ok?{ok:!0}:{ok:!1,message:`HTTP ${n.status}`}}catch(n){return{ok:!1,message:n instanceof Error?n.message:String(n)}}}}}function B1(...e){return{name:`multi(${e.map(t=>t.name).join(",")})`,async send(t){return(await Promise.all(e.map(r=>r.send(t)))).find(r=>!r.ok)??{ok:!0}}}}async function cl(e){try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(e),!0}catch{}try{let t=document.createElement("textarea");t.value=e,t.setAttribute("data-adk-root",""),t.style.cssText="position:fixed;top:-1000px;left:-1000px;opacity:0;",document.body.appendChild(t),t.select();let n=document.execCommand("copy");return t.remove(),n}catch{return!1}}function X4(e,t){switch(e){case"pause":return t.dataset.active==="true"?"resumeAnimations":"pauseAnimations";case"layout":return t.dataset.active==="true"?"layoutExit":"layoutMode";case"markers":return"hideMarkers";case"copy":return"copy";case"send":return"send";case"clear":return"clear";case"settings":return"settings";case"close":return"stop";default:return null}}function z1(e){if(!e)return"";let t="";return e.childNodes.forEach(n=>{n.nodeType===Node.TEXT_NODE&&(t+=n.textContent??"")}),t.replace(/\s+/g," ").trim()}function q4(e){return(e.getAttribute("aria-labelledby")??"").trim()?!0:e instanceof HTMLInputElement&&e.labels&&e.labels.length>0?Array.from(e.labels).some(t=>(t.textContent??"").trim()!==""):(e.textContent??"").trim()!==""}function Di(e,t,n){e.getAttribute(t)!==n&&e.setAttribute(t,n)}function K4(e){let t=e.parentElement;if(!t)return"";for(let n of Array.from(t.children))if(n!==e&&/__buttonTooltip___/.test(String(n.className)))return z1(n);return""}function F1({toolbar:e,open:t,t:n,root:o=document}){e&&(t?(Di(e,"role","toolbar"),Di(e,"aria-label",n("toolbarLabel"))):(Di(e,"role","button"),Di(e,"aria-label",n("start"))),e.querySelectorAll("button[data-adk-role]").forEach(r=>{let a=(r.textContent??"").trim(),i=r.querySelector?.('[data-adk-count],[class*="buttonBadge"]');if(a!==""&&a!==(i?.textContent??"").trim())return;let s=r.dataset.adkRole??"",l=X4(s,r),c=K4(r)||(l?n(l):"");c&&Di(r,"aria-label",c)})),o.querySelectorAll('[data-agentation-settings-panel] [class*="__settingsRow___"]').forEach(r=>{let a=z1(r.querySelector('[class*="__settingsLabel___"]'));a&&r.querySelectorAll('input, [role="switch"]').forEach(i=>{i.dataset.adkNamed!=="1"&&(i.hasAttribute("aria-label")||q4(i))||(i.dataset.adkNamed="1",Di(i,"aria-label",a))})})}var Q4=["copy","send","clear","markers","layout","design","wireframe"],G4={copy:!0,send:!0,clear:!0,markers:!0,layout:!0,design:!0,wireframe:!0},Z4=[{key:"send",label:"Send annotations",hint:"Needs a connected agent \u2014 MCP or webhook."},{key:"copy",label:"Copy feedback",hint:"Copy the markdown to the clipboard."},{key:"layout",label:"Layout / Wireframe mode",hint:"Rearrange the page, or wireframe a component."},{key:"design",label:"Design mode",hint:"Restyle a component live."}],J4={layout:["wireframe"]},H1=["pause","layout","markers","copy","send","clear","settings","close"];function j1(e,t){let n=e.querySelector('[data-adk-role="settings"]');if(!n)return;let o=n;for(;o.parentElement&&o.parentElement!==e&&o.parentElement.querySelectorAll('button[class*="controlButton"]').length===1;)o=o.parentElement;for(let r of t){let a=e.querySelector(`[data-adk-tool="${r}"]`);if(!a)continue;let i=a;for(;i.parentElement&&i.parentElement!==e&&i.parentElement.children.length===1;)i=i.parentElement;i.nextElementSibling!==o&&o.parentElement?.insertBefore(i,o)}}function U1(e){let t=Array.from(e.querySelectorAll('button[class*="controlButton"]')).filter(n=>!n.dataset.adkTool&&n.offsetParent!==null);return t.length!==H1.length?!1:(t.forEach((n,o)=>{let r=H1[o];if(!r)return;n.dataset.adkRole=r;let a=n.parentElement;for(;a&&a!==e&&a.querySelectorAll('button[class*="controlButton"]').length===1;)a.dataset.adkRole=r,a=a.parentElement}),!0)}var e6={wireframe:['[class*="canvasToggle"]','[class*="wireframePurpose"]']};function V1(e,t,n={}){let o={...G4,...e??{}};try{let c=window.localStorage.getItem(t);c&&(o={...o,...JSON.parse(c)})}catch{}let r=()=>n.canSend?n.canSend():!1;o={...o,send:o.send&&r()},o={...o,copy:!o.send},o={...o,wireframe:o.layout&&o.wireframe};let a=new Set;function i(){try{window.localStorage.setItem(t,JSON.stringify(o))}catch{}}function s(){let c=document.getElementById("adk-feature-flags");c||(c=document.createElement("style"),c.id="adk-feature-flags",document.head.appendChild(c));let u=Q4.filter(p=>!o[p]).map(p=>[`[data-adk-role="${p}"]`,`[data-adk-tool="${p}"]`,`[data-adk-layout-entry][data-adk-feature-key="${p}"]`,...e6[p]??[]].join(","));c.textContent=u.length?`${u.join(",")} { display: none !important; }`:""}function l(){a.forEach(c=>c({...o}))}return{get(){return{...o}},enabled(c){return o[c]},set(c,u){if(o[c]===u)return;if(c==="send"&&u&&!r()){n.onRefused?.("send","Connect an agent first \u2014 MCP or webhook.");return}if(c==="copy"&&!u&&!r()){n.onRefused?.("copy","Nothing to send to yet, so copying is the only way out.");return}let p={...o,[c]:u};(c==="copy"||c==="send")&&(p={...p,[c==="copy"?"send":"copy"]:!u});for(let d of J4[c]??[])p={...p,[d]:u};o=p,i(),s(),l()},apply:s,onChange(c){return a.add(c),()=>a.delete(c)}}}var W1='[class*="switchContainer"], [class*="switchTrack"], [class*="toggleTrack"], [class*="toggle"], [class*="switch"]';function t6(e,t,n){let o=n?.getBoundingClientRect(),r=Math.round(o?.width||0)||24,a=Math.round(o?.height||0)||16,i=Math.max(2,Math.round(a*.14)),s=a-i*2,l=r-s-i*2,c=document.createElement("button");c.type="button",c.setAttribute("role","switch"),c.style.cssText=["pointer-events:auto","position:relative","flex:0 0 auto",`width:${r}px`,`height:${a}px`,"padding:0","border:0","border-radius:var(--adk-radius-pill)","cursor:pointer","transition:background-color 180ms var(--adk-ease)"].join(";");let u=document.createElement("span");u.style.cssText=["position:absolute",`top:${i}px`,`left:${i}px`,`width:${s}px`,`height:${s}px`,"border-radius:50%","background:var(--adk-on-accent)","box-shadow:var(--adk-shadow-thumb)","transition:transform 180ms var(--adk-ease)"].join(";"),c.appendChild(u);let p=d=>{c.setAttribute("aria-checked",String(d)),c.dataset.adkOn=d?"1":"0",c.style.backgroundColor=d?e:"var(--adk-switch-off)",u.style.transform=d?`translateX(${l}px)`:"translateX(0)"};return p(t),{track:c,paint:p,travel:l}}function Y1(e){let{panel:t,features:n}=e;pr();let o=()=>{t.querySelectorAll("[data-adk-feature]").forEach(c=>{let u=c.dataset.adkFeature,p=n.enabled(u),d=c.querySelector('[role="switch"]'),y=d?.firstElementChild;if(d&&(d.setAttribute("aria-checked",String(p)),d.dataset.adkOn=p?"1":"0",d.style.backgroundColor=p?e.accent:"var(--adk-switch-off)",y)){let _=d.getBoundingClientRect().width-y.getBoundingClientRect().width-2*parseFloat(y.style.left||"2");y.style.transform=p?`translateX(${Math.round(_)}px)`:"translateX(0)"}})};if(t.querySelector("[data-adk-features]")){o();return}let a=Array.from(t.querySelectorAll('[class*="settingsRow"]')).find(c=>c.querySelector(W1)),i=a?.parentElement;if(!a||!i)return;let s=document.createElement("div");s.setAttribute("data-adk-features","");let l=document.createElement("div");l.textContent=e.title??"Tools",l.className="adk-section-title",l.style.cssText="margin:14px 0 6px;",s.appendChild(l);for(let c of Z4){let u=a.cloneNode(!0);u.dataset.adkFeature=c.key,u.removeAttribute("data-adk-features"),u.classList.remove(...Array.from(u.classList).filter(y=>/disabled/i.test(y))),u.style.pointerEvents="auto",u.style.opacity="1";let p=u.querySelector('[class*="settingsLabel"]')??(u.firstElementChild instanceof HTMLElement?u.firstElementChild:null);p&&(p.textContent=c.label,p.title=c.hint);let d=u.querySelector(W1);if(d){let{track:y,paint:_}=t6(e.accent,n.enabled(c.key),d);d.replaceWith(y),y.addEventListener("click",C=>{C.preventDefault(),C.stopPropagation(),n.set(c.key,!n.enabled(c.key)),_(n.enabled(c.key))})}s.appendChild(u)}i.appendChild(s),n.onChange(o)}var n6='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>',o6='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18M9 6V4h6v2M5 6l1 14h12l1-14M10 10v6M14 10v6"/></svg>',r6='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 12.5a7.5 7.5 0 0 1-11.1 6.6L4 20l1-4.4A7.5 7.5 0 1 1 20 12.5Z"/><path d="M9 11h6M9 14h3.5"/></svg>',a6=`
:host { position: fixed; inset: 0; z-index: ${Sn.history}; pointer-events: none; }
.sheet {
  position: fixed; right: 20px; bottom: 76px; width: 380px; max-width: calc(100vw - 32px); max-height: min(64vh, calc(100dvh - 96px));
  display: flex; flex-direction: column; pointer-events: auto; overflow: hidden;
  transform-origin: 100% 100%; animation: rise var(--adk-medium) var(--adk-ease);
}
.sheet:focus { outline: none; }
.head { display: grid; grid-template-columns: minmax(0,1fr) auto; align-items: start; gap: 2px var(--adk-space-2);
  padding: var(--adk-space-3) 10px 10px var(--adk-space-4); flex: 0 0 auto; }
.heading { display: flex; align-items: center; gap: 6px; min-width: 0; min-height: var(--adk-icon-btn); }
.title { min-width: 0; }
.hint { grid-column: 1; }
.close { grid-column: 2; grid-row: 1 / span 2; }
@media (pointer: coarse) { .close { margin: -8px -6px 0 0; } }
button:focus-visible { outline: 2px solid var(--adk-ui-accent); outline-offset: -2px; }
.list { list-style: none; min-height: 0; overflow-y: auto; overscroll-behavior: contain; padding: var(--adk-space-1) 6px 6px;
  scrollbar-width: thin; scrollbar-color: var(--adk-line) transparent;
  --fade-top: 0px; --fade-bottom: 0px;
  -webkit-mask-image: linear-gradient(transparent, #000 var(--fade-top), #000 calc(100% - var(--fade-bottom)), transparent);
  mask-image: linear-gradient(transparent, #000 var(--fade-top), #000 calc(100% - var(--fade-bottom)), transparent); }
/* Fade an edge only where there is more to scroll to. */
.list.more-above { --fade-top: 20px; }
.list.more-below { --fade-bottom: 28px; }
.row { position: relative; display: grid; grid-template-columns: minmax(0, 1fr) var(--adk-icon-btn); align-items: start; gap: 2px; padding-right: 6px;
  animation: fade 220ms var(--adk-ease) both; animation-delay: calc(min(var(--i, 0), 8) * 22ms); }
.body { display: grid; grid-template-columns: 20px minmax(0,1fr); gap: 10px; align-items: start; min-width: 0;
  padding: 10px var(--adk-space-1) 10px 10px; text-align: left; border-radius: 10px; }
.body:focus-visible { outline-offset: -2px; }
.number { display: flex; align-items: center; justify-content: center; width: 20px; height: 20px;
  border-radius: var(--adk-radius-inner); color: var(--adk-on-accent);
  font-size: var(--adk-fs-meta); line-height: 1; font-weight: var(--adk-fw-strong); letter-spacing: 0;
  background: var(--adk-accent-gradient); box-shadow: inset 0 0 0 1px rgba(255,255,255,.18); }
.content { display: flex; flex-direction: column; gap: 6px; min-width: 0; padding-top: 1px; }
.comment { font-size: var(--adk-fs-body); font-weight: var(--adk-fw-medium); line-height: var(--adk-lh); overflow-wrap: anywhere; white-space: pre-line;
  overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; }
.comment.is-blank { color: var(--adk-ink-faint); font-weight: var(--adk-fw-regular); font-style: italic; }
.meta { display: flex; align-items: center; gap: 6px; min-width: 0; }
.kind { flex: 0 1 auto; max-width: 45%; }
.target { flex: 0 1 auto; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.time { flex: 0 0 auto; margin-left: auto; padding-left: 6px; color: var(--adk-ink-faint); white-space: nowrap; }
.drop { margin-top: 6px; }
.drop:hover { background: var(--adk-danger-bg); color: var(--adk-danger); }
/* Hover-revealed on a mouse, but never out of reach: focus shows it, and touch
   screens (no hover) always show it. */
@media (hover: hover) and (pointer: fine) {
  .drop { opacity: 0; }
  .row:hover .drop, .row:focus-within .drop, .drop:focus-visible { opacity: 1; }
}
.empty { display: grid; grid-template-columns: 32px minmax(0,1fr); gap: 2px var(--adk-space-3); align-items: start; padding: var(--adk-space-4) var(--adk-space-4) 20px; }
.empty-icon { grid-row: span 2; display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: var(--adk-radius-control);
  color: var(--adk-accent-ink); background: color-mix(in srgb, var(--adk-ui-accent) 12%, transparent); }
.empty-title { padding-top: 1px; }
.empty-body { max-width: 40ch; color: var(--adk-ink-dim); }
@media (max-width: 420px) { .sheet { right: 16px; } }
@media (pointer: coarse) {
  .row { grid-template-columns: minmax(0,1fr) var(--adk-touch); padding-right: 0; }
  .drop { margin-top: 0; }
  .body { padding-block: 12px; }
}
@media (prefers-reduced-motion: reduce) { .sheet, .row { animation: none; } }
@keyframes rise { from { opacity: 0; transform: translateY(6px) scale(.98); } to { opacity: 1; transform: none; } }
@keyframes fade { from { opacity: 0; transform: translateY(3px); } to { opacity: 1; transform: none; } }
`;function q1(e){let t=null,n=null,o=e.locale,r=null,a=null,i=C=>Ji(o,C);function s(C){let v=Date.parse(C);if(!Number.isFinite(v))return null;let m=Math.round((v-Date.now())/1e3),g="";try{g=new Intl.DateTimeFormat(o,{dateStyle:"medium",timeStyle:"short"}).format(v);let E=new Intl.RelativeTimeFormat(o,{numeric:"auto",style:"short"}),I=Math.abs(m);return I<45?{text:E.format(0,"second"),full:g}:I<3600?{text:E.format(Math.round(m/60),"minute"),full:g}:I<86400?{text:E.format(Math.round(m/3600),"hour"),full:g}:I<86400*7?{text:E.format(Math.round(m/86400),"day"),full:g}:{text:new Intl.DateTimeFormat(o,{day:"numeric",month:"short"}).format(v),full:g}}catch{return g?{text:g,full:g}:null}}function l(C){return/[<>#[\]]/.test(C)||/^[a-z][a-z0-9-]*(?:\s*[ .>:]\s*[\w-]+)+$/.test(C)}function c(C){return Array.from(C.matchAll(/<([A-Za-z][\w.$-]*)>/g),m=>m[1]).slice(-3).join(" \u203A ")}function u(C){let v=C.target;if(v.additional?.length)return Ji(o,"multiSelect",{n:v.additional.length+1});let m=v.tagName.toLowerCase(),g=v.label?.replace(/\s+/g," ").trim();if(g?.startsWith(`${m} "`)&&g.endsWith('"'))return g.slice(m.length+2,-1);if(g&&l(g)){let E=c(g);if(E)return E;let I=g.split(/[\s>]+/).pop()?.split(/[.#[:]/)[0]?.toLowerCase();I&&/^[a-z][a-z0-9-]*$/.test(I)&&(m=I)}else if(g&&g!==m&&g!==v.selector&&g!==v.path&&!g.startsWith(`${m}.`)&&!g.startsWith(`${m}#`)&&!g.startsWith(`${m}[`))return g;return/^h[1-6]$/.test(m)?i("elHeading"):m==="button"?i("elButton"):m==="a"?i("elLink"):["input","textarea","select"].includes(m)?i("elField"):["img","svg","picture","canvas"].includes(m)?i("elImage"):["p","span","blockquote"].includes(m)?i("elText"):["section","article","header","footer","main"].includes(m)?i("elSection"):i("elElement")}function p(){let C=!!t?.shadowRoot?.activeElement;r?.(),r=null,n?.(),n=null,t?.remove(),t=null,C&&[a,document.querySelector('[data-adk-count], [data-adk-role="send"] [class*="buttonBadge"]'),...document.querySelectorAll('button[data-adk-role="copy"], button[data-adk-role="send"], button[data-adk-role]')].find(g=>g?.isConnected&&g.tabIndex>=0&&!g.matches(":disabled")&&g.getClientRects().length>0&&getComputedStyle(g).visibility!=="hidden")?.focus({preventScroll:!0}),a=null}function d(){return t!=null}function y(C,v=!1){let m=e.getItems();C.querySelector(".sheet")?.remove();let g=document.createElement("div");g.className="sheet adk-panel adk-type",g.setAttribute("role","dialog"),g.setAttribute("aria-label",i("historyTitle")),g.tabIndex=-1;let E=document.createElement("div");E.className="head adk-head";let I=document.createElement("div");I.className="heading";let D=document.createElement("h2");D.className="title adk-title",D.id="adk-history-title",D.textContent=i("historyTitle");let oe=document.createElement("span");oe.className="count adk-count",oe.textContent=`${m.length}`,I.append(D),m.length&&I.appendChild(oe);let z=document.createElement("button");if(z.type="button",z.className="close adk-icon-btn",z.innerHTML=n6,z.title=i("close"),z.setAttribute("aria-label",i("close")),z.addEventListener("click",p),E.append(I,z),m.length){let te=document.createElement("p");te.className="hint adk-subtitle",te.textContent=i("historyHint"),E.appendChild(te)}if(g.appendChild(E),!m.length){let te=document.createElement("div");te.className="empty";let he=document.createElement("span");he.className="empty-icon",he.innerHTML=r6;let K=document.createElement("p");K.className="empty-title adk-empty-title",K.textContent=i("historyEmptyTitle");let P=document.createElement("p");P.className="empty-body adk-empty",P.textContent=i("historyEmptyBody"),te.append(he,K,P),g.appendChild(te),C.appendChild(g);return}let Z=document.createElement("ol");Z.className="list",Z.setAttribute("aria-labelledby",D.id),m.forEach((te,he)=>{let K=document.createElement("li");K.className="row adk-row",K.dataset.historyId=te.id,v?K.style.setProperty("--i",String(he)):K.style.animation="none";let P=e.kinds.find(Ze=>Ze.id===te.kind),q=document.createElement("span");q.className="kind adk-chip",q.textContent=P?ur(P.label,o):te.kind,q.style.setProperty("--adk-chip-color",P?.accent||e.accent);let le=document.createElement("button");le.type="button",le.className="body",le.title=i("historyReveal");let me=document.createElement("span");me.className="number",me.textContent=String(he+1);let Ce=document.createElement("span");Ce.className="content";let B=document.createElement("span");B.className=te.comment?.trim()?"comment":"comment is-blank",B.textContent=te.comment?.trim()?te.comment:i("noComment");let Y=document.createElement("span"),Se=u(te);Y.className="target",Y.textContent=Se;let nt=te.target.fullPath||te.target.path||te.target.selector;nt&&(Y.title=nt);let ht=document.createElement("span");ht.className="meta adk-meta";let We=document.createElement("span");We.className="separator",We.textContent="\xB7",We.setAttribute("aria-hidden","true"),ht.append(q,We,Y);let ut=s(te.createdAt);if(ut){let Ze=document.createElement("time");Ze.className="time",Ze.dateTime=te.createdAt,Ze.title=ut.full,Ze.textContent=ut.text,ht.appendChild(Ze)}Ce.append(B,ht),le.append(me,Ce),le.addEventListener("click",()=>e.onReveal(te));let pt=document.createElement("button");pt.className="drop adk-icon-btn",pt.type="button",pt.title=i("historyRemove"),pt.setAttribute("aria-label",i("historyRemove")),pt.innerHTML=o6,pt.addEventListener("click",Ze=>{Ze.stopPropagation();let kt=m[he+1]?.id??m[he-1]?.id;e.onRemove(te.id),y(C),(Array.from(C.querySelectorAll("[data-history-id]")).find(it=>it.dataset.historyId===kt)?.querySelector(".drop")??C.querySelector(".close"))?.focus({preventScroll:!0})}),K.append(le,pt),Z.appendChild(K)}),g.appendChild(Z),C.appendChild(g);let ge=()=>{Z.classList.toggle("more-above",Z.scrollTop>1),Z.classList.toggle("more-below",Z.scrollTop+Z.clientHeight<Z.scrollHeight-1)};Z.addEventListener("scroll",ge,{passive:!0}),typeof ResizeObserver<"u"&&new ResizeObserver(ge).observe(Z),ge()}function _(){if(t){p();return}t=document.createElement("div"),t.setAttribute("data-adk-history",""),t.style.setProperty("--adk-accent",e.accent),a=document.activeElement instanceof HTMLElement?document.activeElement:null;let C=()=>{t&&(t.dataset.theme=Po(null))};C();let v=new MutationObserver(C);v.observe(document.documentElement,{subtree:!0,attributes:!0,attributeFilter:["data-agentation-theme"]});let m=t.attachShadow({mode:"open"}),g=document.createElement("style");g.textContent=a6,m.appendChild(g),Ka(m),y(m,!0),Il(m,"data-adk-history"),n=Pl(t),document.body.appendChild(t),m.querySelector(".sheet")?.focus({preventScroll:!0});let E=D=>{let oe=D.composedPath();t&&oe.includes(t)||D.target?.closest?.('[data-adk-count],[class*="buttonBadge"]')||p()},I=D=>{D.key==="Escape"&&(D.preventDefault(),D.stopPropagation(),p())};document.addEventListener("mousedown",E,!0),window.addEventListener("keydown",I,!0),r=()=>{v.disconnect(),document.removeEventListener("mousedown",E,!0),window.removeEventListener("keydown",I,!0)}}return{open:_,close:p,isOpen:d,setLocale(C){o=C,t?.shadowRoot&&y(t.shadowRoot)},refresh(){t?.shadowRoot&&y(t.shadowRoot)}}}var Td=new WeakMap;function X1(e,t){e.style.pointerEvents!=="auto"&&(e.style.pointerEvents="auto"),Td.has(e)||(e.addEventListener("click",o=>{o.preventDefault(),o.stopPropagation(),Td.get(e)?.()}),e.addEventListener("keydown",o=>{o.key!=="Enter"&&o.key!==" "||(o.preventDefault(),o.stopPropagation(),Td.get(e)?.())})),Td.set(e,t.onClick);let n=Ji(t.locale??"en","historyTitle");e.title!==n&&(e.title=n),e.getAttribute("aria-label")!==n&&e.setAttribute("aria-label",n),e.getAttribute("role")!=="button"&&e.setAttribute("role","button"),e.tabIndex!==0&&(e.tabIndex=0)}function K1(e){let{button:t,count:n}=e,o=t.querySelector("[data-adk-count]"),r=t.querySelector('[class*="buttonBadge"]');if(!n||r){o?.remove(),r&&n&&X1(r,e);return}o||(o=document.createElement("span"),o.setAttribute("data-adk-count",""),o.style.cssText=["position:absolute","top:-6px","right:-6px","min-width:16px","height:16px","padding:0 4px","border-radius:9999px",`background-color:${e.accent}`,"color:#fff","display:flex","align-items:center","justify-content:center","text-align:center","cursor:pointer","pointer-events:auto"].join(";"),getComputedStyle(t).position==="static"&&(t.style.position="relative"),t.appendChild(o));let a=String(n);o.textContent!==a&&(o.textContent=a),X1(o,e)}var dh=(e,t,n)=>Math.min(n,Math.max(t,e));function i6(e,t,n){let o=Math.max(t.width,1),r=e.x/100*n.width;return{fx:dh((r-t.left)/o,0,1),dy:dh(e.y-(t.top+n.scrollY),-40,Math.max(t.height,0))}}function s6(e,t,n){let o=Math.max(n.width,1);return{x:dh((t.left+e.fx*Math.max(t.width,1))/o*100,0,100),y:Math.round(t.top+n.scrollY+e.dy)}}function l6(e,t,n){let o=Math.max(n.left-e,0,e-(n.left+n.width)),r=Math.max(n.top-t,0,t-(n.top+n.height));return Math.hypot(o,r)}function c6(e,t,n){let o=e.x/100*n.width,r=-1,a=1/0;return t.forEach((i,s)=>{let l=l6(o,e.y,{left:i.left,top:i.top+n.scrollY,width:i.width,height:i.height});l<a&&(a=l,r=s)}),r}function Q1(e){let t=new Map,n=new Map,o=0,r=null,a=!1;function i(){let l={width:window.innerWidth||1,scrollY:window.scrollY},c=e.annotations();document.querySelectorAll("[data-annotation-marker]").forEach(u=>{let p=Number.parseInt(u.textContent??"",10),d=Number.isFinite(p)?c[p-1]:void 0;if(!d||d.isFixed)return;let y=String(d.id),_=e.resolve(d);if(!_&&e.candidates){let I=n.get(y);if(I?.element.isConnected)_=I.element;else{let D=e.candidates(d).filter(oe=>oe.isConnected);if(I)_=D[I.index]??null;else if(D.length){let oe=c6(d,D.map(z=>z.getBoundingClientRect()),l);_=D[oe]??null}_&&n.set(y,{index:Math.max(D.indexOf(_),0),element:_})}}if(!_||!_.isConnected)return;let C=_.getBoundingClientRect();if(!C.width&&!C.height)return;let v=t.get(y);if(!v){v=i6(d,C,l),t.set(y,v);return}let m=s6(v,C,l),g=`${m.x}%`,E=`${m.y}px`;u.style.left!==g&&(u.style.left=g),u.style.top!==E&&(u.style.top=E)})}function s(){o||(o=window.requestAnimationFrame(()=>{o=0,i()}))}return{reanchor:i,schedule:s,forget(l){t.delete(String(l)),n.delete(String(l))},start(){a||(a=!0,window.addEventListener("resize",s),window.addEventListener("load",s),typeof ResizeObserver<"u"&&(r=new ResizeObserver(s),r.observe(document.documentElement)),document.fonts?.ready.then(s),s())},stop(){a&&(a=!1,window.removeEventListener("resize",s),window.removeEventListener("load",s),r?.disconnect(),r=null,o&&window.cancelAnimationFrame(o),o=0,t.clear(),n.clear())}}}var G1="adk-status",d6=`
/* The overlay's markers are ours to annotate, not to rebuild: the status rides
   on top as a ring and a glyph, so a marker still looks like a marker. */
[data-adk-status] { position: relative; }
[data-adk-status]::after {
  content: ''; position: absolute; inset: -4px;
  border-radius: 9999px; pointer-events: none;
  border: 2px solid transparent;
}
[data-adk-status="working"]::after {
  border-color: #4a9eff;
  animation: adk-status-pulse 1.6s cubic-bezier(0.16, 1, 0.3, 1) infinite;
}
[data-adk-status="done"]::after { border-color: #34c759; }
[data-adk-status="rejected"]::after { border-color: #ff8d28; border-style: dashed; }
[data-adk-status]::before {
  position: absolute; right: -8px; bottom: -8px;
  width: 14px; height: 14px; border-radius: 9999px;
  display: flex; align-items: center; justify-content: center;
  font: 700 9px/1 system-ui, -apple-system, sans-serif; color: #fff;
  pointer-events: none;
}
[data-adk-status="done"]::before { content: '\u2713'; background: #34c759; }
[data-adk-status="rejected"]::before { content: '\u2715'; background: #ff8d28; }
[data-adk-status="working"]::before { content: '\u22EF'; background: #4a9eff; }
@keyframes adk-status-pulse {
  0% { transform: scale(1); opacity: 1; }
  70% { transform: scale(1.25); opacity: 0; }
  100% { transform: scale(1.25); opacity: 0; }
}
`,Oi=new Map;function Z1(){if(document.getElementById(G1))return;let e=document.createElement("style");e.id=G1,e.textContent=d6,document.head.appendChild(e)}function J1(e,t,n){Z1(),t==="pending"?Oi.delete(e):Oi.set(e,{status:t,note:n,at:new Date().toISOString()})}function ex(e){return Oi.get(e)??null}function tx(){Oi.clear(),document.querySelectorAll("[data-adk-status]").forEach(e=>{e.removeAttribute("data-adk-status"),e.removeAttribute("title")})}function $d(){if(!Oi.size)return;Z1(),document.querySelectorAll("[data-annotation-id], [data-marker-id]").forEach(t=>{let n=t.dataset.annotationId??t.dataset.markerId??"",o=Oi.get(n);if(!o){t.removeAttribute("data-adk-status");return}t.dataset.adkStatus!==o.status&&(t.dataset.adkStatus=o.status);let r=o.status==="done"?"Done":o.status==="working"?"Being worked on":o.status==="rejected"?"Not done":"",a=o.note?`${r} \u2014 ${o.note}`:r;t.title!==a&&(t.title=a)})}var nx='[class*="toolbar"],[class*="palette"],[class*="settingsPanel"],[data-agentation-settings-panel],[class*="buttonTooltip"]',ox=["mousemove","mouseover","mouseout","mousedown","mouseup","click","dblclick","contextmenu"];function rx(e,t){let n=typeof e.composedPath=="function"?e.composedPath():[];for(let r of n)if(r&&r.nodeType===1&&t(r))return!0;let o=e.target;return!!(o&&o.nodeType===1&&t(o))}function Id(e){let t=e?.ours??"",n=a=>t?a.matches?.(t)||a.closest?.(t)!=null:!1,o=a=>a.matches?.(nx)||a.closest?.(nx)!=null,r=a=>{rx(a,n)||rx(a,o)||a.stopPropagation()};for(let a of ox)window.addEventListener(a,r,!0);return()=>{for(let a of ox)window.removeEventListener(a,r,!0)}}var u6='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8.25" stroke="currentColor" stroke-width="1.6"/><path d="M12 3.75a8.25 8.25 0 0 1 0 16.5z" fill="currentColor"/></svg>',p6='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',f6='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg>',h6='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>',m6=[{kind:"text",label:"Text",width:320,height:20,chipHeight:6},{kind:"heading",label:"Heading",width:360,height:40,chipHeight:12},{kind:"button",label:"Button",width:140,height:40,chipHeight:12},{kind:"input",label:"Input",width:280,height:40,chipHeight:12},{kind:"image",label:"Image",width:240,height:160,chipHeight:30},{kind:"card",label:"Card",width:300,height:200,chipHeight:34},{kind:"list",label:"List",width:300,height:140,chipHeight:26}],g6='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',_6=4,ax=12,ta=null;function na(){return ta!=null}function nr(){if(!ta)return;let e=ta;ta=null,e.destroy()}function ix(e){let t=e.accent??"#0088FF",n=e.labelFor??(d=>d.tagName.toLowerCase()),o=e.ignore??(()=>!1),r=document.createElement("div");r.setAttribute("data-adk-wf-pick",""),r.style.cssText=`position:fixed;pointer-events:none;z-index:${Sn.wireframe};border:2px solid ${t};background:color-mix(in srgb, ${t} 10%, transparent);border-radius:3px;display:none;box-sizing:border-box`;let a=document.createElement("div");a.setAttribute("data-adk-wf-pick",""),a.style.cssText=`position:fixed;pointer-events:none;z-index:${Sn.wireframe+1};background:${t};color:#fff;padding:3px 6px;border-radius:4px;font:500 10px/1 ui-monospace,"SF Mono",Menlo,monospace;display:none;white-space:nowrap`,document.body.append(r,a);let i=null,s=()=>{document.removeEventListener("mousemove",c,!0),document.removeEventListener("click",u,!0),document.removeEventListener("keydown",p,!0),r.remove(),a.remove()},l=d=>{let y=document.elementFromPoint(d.clientX,d.clientY);return!(y instanceof HTMLElement)||y===document.body||y===document.documentElement||o(y)?null:y};function c(d){let y=l(d);if(i=y,!y){r.style.display="none",a.style.display="none";return}let _=y.getBoundingClientRect();r.style.left=`${_.left}px`,r.style.top=`${_.top}px`,r.style.width=`${_.width}px`,r.style.height=`${_.height}px`,r.style.display="block",a.textContent=n(y),a.style.left=`${_.left}px`,a.style.top=`${Math.max(2,_.top-20)}px`,a.style.display="block"}function u(d){let y=l(d)??i;d.preventDefault(),d.stopImmediatePropagation(),d.stopPropagation(),s(),y?e.onPick(y):e.onCancel?.()}function p(d){d.key==="Escape"&&(d.preventDefault(),d.stopPropagation(),s(),e.onCancel?.())}return document.addEventListener("mousemove",c,!0),document.addEventListener("click",u,!0),document.addEventListener("keydown",p,!0),s}function sx(e){if(ta)return ta;let t=e.target;if(!t||!t.isConnected)return null;let n=e.accent??"#0088FF",o=e.labelFor??(R=>R.tagName.toLowerCase()),r=e.selectorFor??(R=>R.tagName.toLowerCase()),a=e.depth??3,i=16,s=R=>{let A=getComputedStyle(R).display;return A!=="inline"&&A!=="contents"&&A!=="none"},l=new Set(["IMG","SVG","VIDEO","CANVAS","INPUT","TEXTAREA","SELECT","BUTTON","IFRAME"]),c=R=>!R||R==="transparent"||/^rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*0\s*\)$/.test(R),u=R=>{if(l.has(R.tagName))return!0;let A=getComputedStyle(R);if(!c(A.backgroundColor)||A.backgroundImage&&A.backgroundImage!=="none"||A.boxShadow&&A.boxShadow!=="none"||Math.max(parseFloat(A.borderTopWidth)||0,parseFloat(A.borderRightWidth)||0,parseFloat(A.borderBottomWidth)||0,parseFloat(A.borderLeftWidth)||0)>0&&A.borderStyle!=="none"&&!c(A.borderTopColor))return!0;for(let fe of Array.from(R.childNodes))if(fe.nodeType===3&&(fe.textContent??"").trim())return!0;return!!(!Array.from(R.children).some(fe=>fe instanceof HTMLElement&&s(fe))&&(R.textContent??"").trim())},p=R=>{let A=getComputedStyle(R);return A.visibility==="hidden"||A.opacity==="0"},d=(R,A,V)=>{let be=R.getBoundingClientRect();for(let fe of Array.from(R.children)){if(!(fe instanceof HTMLElement)||fe.hasAttribute("data-adk-wf-chrome")||!s(fe)||p(fe))continue;let Pe=fe.getBoundingClientRect();if(Pe.width<i||Pe.height<i)continue;if(Pe.width>=be.width-2&&Pe.height>=be.height-2&&R.children.length===1||!u(fe)){let xe=V.length;A<=a&&d(fe,A,V),V.length===xe&&u(fe)&&V.push(fe);continue}V.push(fe),A<a&&d(fe,A+1,V)}return V},y=d(t,1,[]);if(!y.length)return e.showToast?.("This component has no parts to rearrange."),null;let _=t.getBoundingClientRect(),C=[],v=[],m=new Map,g=(R,A)=>{let V=A.map(fe=>[fe,R.style.getPropertyValue(fe),R.style.getPropertyPriority(fe)]),be=()=>{for(let[fe,Pe,Ee]of V)Pe?R.style.setProperty(fe,Pe,Ee):R.style.removeProperty(fe)};m.set(R,be),C.push(be)},E=R=>{m.get(R)?.(),m.delete(R)};g(t,["position","height","width"]),getComputedStyle(t).position==="static"&&t.style.setProperty("position","relative"),t.style.setProperty("height",`${_.height}px`);let I=new Map;for(let R of y)I.set(R,R.getBoundingClientRect());let D=new Set(y),oe=R=>{let A=R.parentElement;for(;A&&A!==t;){if(D.has(A))return I.get(A);A=A.parentElement}return _},z=y.map((R,A)=>{let V=I.get(R),be=oe(R),fe={x:Math.round(V.left-be.left),y:Math.round(V.top-be.top),width:Math.round(V.width),height:Math.round(V.height)};return g(R,["position","left","top","width","height","margin","z-index","transform"]),{el:R,from:fe,to:{...fe},orderFrom:A}});for(let R of z){let{el:A,from:V}=R;A.style.setProperty("position","absolute"),A.style.setProperty("margin","0"),A.style.setProperty("left",`${V.x}px`),A.style.setProperty("top",`${V.y}px`),A.style.setProperty("width",`${V.width}px`),A.style.setProperty("height",`${V.height}px`),A.setAttribute("data-adk-wf-part","")}t.setAttribute("data-adk-wf-root","");let Z=document.createElement("style");Z.setAttribute("data-adk-wf-style",""),document.head.appendChild(Z);let ge=e.grayscale!==!1;function te(){Z.textContent=ge?`
        [data-adk-wf-root] {
          background: #ffffff !important;
          border-radius: 14px !important;
          box-shadow: none !important;
        }
        [data-adk-wf-root] *, [data-adk-wf-root]::before, [data-adk-wf-root]::after {
          color: transparent !important;
          text-shadow: none !important;
          box-shadow: none !important;
          border: 0 !important;
          outline: 0 !important;
          background: transparent !important;
          background-image: none !important;
        }
        [data-adk-wf-root] img,
        [data-adk-wf-root] svg,
        [data-adk-wf-root] video,
        [data-adk-wf-root] canvas,
        [data-adk-wf-root] picture {
          opacity: 0 !important;
        }
        /* The block is painted by a pseudo-element inset a few pixels, so
           neighbours never touch: the gutters are what make a wireframe
           readable. The element itself keeps its exact measured box, which is
           what gets described to the agent. */
        /* ::before, not ::after: a positioned ::after paints AFTER the element's
           children, so the parent's block would cover the blocks nested in it. */
        [data-adk-wf-part] { background: transparent !important; }
        [data-adk-wf-part]::before {
          content: '' !important;
          position: absolute !important;
          inset: 4px !important;
          border-radius: 12px !important;
          background: #EDEFF3 !important;
          box-shadow: 0 1px 2px rgba(16, 24, 40, 0.10), 0 6px 14px rgba(16, 24, 40, 0.07) !important;
          pointer-events: none !important;
          opacity: 1 !important;
        }
        /* Levels ALTERNATE grey / white instead of drifting through shades of
           grey: a block sitting on a block of the same tone is a smudge, while
           grey-on-white-on-grey reads as depth at a glance. */
        [data-adk-wf-part] [data-adk-wf-part]::before {
          background: #ffffff !important;
          box-shadow: 0 1px 2px rgba(16, 24, 40, 0.10), 0 0 0 1px rgba(16, 24, 40, 0.06) !important;
        }
        [data-adk-wf-part] [data-adk-wf-part] [data-adk-wf-part]::before {
          background: #EDEFF3 !important;
          box-shadow: 0 1px 2px rgba(16, 24, 40, 0.10) !important;
        }
        [data-adk-wf-part] [data-adk-wf-part] [data-adk-wf-part] [data-adk-wf-part]::before {
          background: #ffffff !important;
          box-shadow: 0 1px 2px rgba(16, 24, 40, 0.10), 0 0 0 1px rgba(16, 24, 40, 0.06) !important;
        }
      `:`
        [data-adk-wf-part] {
          outline: 1px dashed rgba(107, 114, 128, 0.5);
          outline-offset: -1px;
        }
      `}te();let he=document.createElement("div");he.setAttribute("data-adk-wf-chrome","");let K=he.attachShadow({mode:"open"}),P=document.createElement("style");P.textContent=`
    :host {
      position: fixed; inset: 0; z-index: ${Sn.wireframe-1};
      pointer-events: none;
      font: 13px/1.35 system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, sans-serif; letter-spacing: -0.15px;
      color: #fff;
    }
    /* Handles, not decoration: a hairline at rest, a thin outline under the
       pointer. No fill \u2014 the sketch underneath is the thing being looked at. */
    .frame {
      position: fixed; border: 1px solid transparent;
      background: transparent; pointer-events: auto; cursor: grab;
      transition: border-color 0.12s ease;
    }
    .frame:hover, .frame[data-active="1"] { border-color: rgba(16, 24, 40, 0.35); }
    .frame.is-dragging { cursor: grabbing; }
    /* On a wireframe the name IS the content: written large and grey in the
       middle of the block, the way a placeholder reads on a sketch. Double-click
       it to say what the block is. */
    .name {
      position: absolute; inset: 0; display: flex;
      align-items: center; justify-content: center; padding: 0 10px;
      pointer-events: none; overflow: hidden; text-align: center;
      color: rgba(0, 0, 0, 0.35);
      font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
      font-weight: 600; letter-spacing: -0.2px; line-height: 1.1;
    }
    .name > span {
      max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    /* A block that holds other blocks steps aside: its own name leaves the
       middle to what is nested in it and fades, small, into the free band. */
    .frame[data-nested="top"] .name,
    .frame[data-nested="bottom"] .name { color: rgba(0, 0, 0, 0.28); }
    .frame[data-nested="top"] .name { align-items: flex-start; padding-top: 2px; }
    .frame[data-nested="bottom"] .name { align-items: flex-end; padding-bottom: 2px; }
    .frame.is-editing .name { pointer-events: auto; color: rgba(0, 0, 0, 0.7); }
    .name input {
      pointer-events: auto; width: 100%; max-width: 280px; padding: 2px 8px;
      border: 0; outline: 0; border-radius: 7px; background: #fff;
      box-shadow: 0 0 0 2px ${n};
      font: inherit; font-size: inherit; color: rgba(0, 0, 0, 0.75); text-align: center;
    }
    .grip {
      position: absolute; right: -5px; bottom: -5px; width: 12px; height: 12px;
      border-radius: 3px; background: #fff; border: 2px solid ${n};
      cursor: nwse-resize; display: none;
    }
    .frame:hover .grip, .frame[data-active="1"] .grip { display: block; }
    .drop {
      position: absolute; right: -9px; top: -9px; width: 18px; height: 18px;
      border-radius: 50%; background: #1a1a1a; color: #fff; border: 0;
      display: none; align-items: center; justify-content: center;
      font: 600 12px/1 inherit; cursor: pointer; padding: 0;
      box-shadow: 0 2px 6px rgba(0,0,0,0.35);
    }
    .frame:hover .drop { display: inline-flex; }
    .drop:hover { background: #ef4444; }
    .bar {
      position: fixed; left: 50%; bottom: 20px; transform: translateX(-50%);
      display: flex; align-items: center; gap: 4px; padding: 6px;
      background: #1a1a1a; border-radius: 9999px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2), 0 4px 16px rgba(0,0,0,0.1);
      pointer-events: auto;
    }
    .bar button {
      height: 32px; padding: 0 12px; border: 0; border-radius: 9999px;
      background: none; color: rgba(255,255,255,0.85); font: 500 12.5px/1 inherit;
      cursor: pointer; transition: background 0.15s ease, color 0.15s ease;
    }
    .bar button.icon {
      width: 32px; padding: 0; display: inline-flex; align-items: center; justify-content: center;
    }
    .bar button:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .bar button[data-on="1"] { background: rgba(255,255,255,0.16); color: #fff; }
    .bar button.primary { background: ${n}; color: #fff; }
    .bar button.primary:hover { filter: brightness(1.08); }
    .bar .sep { width: 1px; height: 18px; background: rgba(255,255,255,0.15); margin: 0 2px; }
    .palette {
      position: fixed; left: 50%; bottom: 64px; transform: translateX(-50%);
      display: none; gap: 6px; padding: 8px;
      background: #1a1a1a; border-radius: 14px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2), 0 8px 24px rgba(0,0,0,0.18);
      pointer-events: auto;
    }
    .palette[data-open="1"] { display: flex; }
    .chip {
      display: flex; flex-direction: column; align-items: center; gap: 6px;
      width: 76px; padding: 8px 6px; border: 0; border-radius: 10px;
      background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.8);
      font: 500 11px/1 inherit; cursor: pointer;
      transition: background 0.15s ease, color 0.15s ease;
    }
    .chip:hover { background: rgba(255,255,255,0.14); color: #fff; }
    .chip-shape {
      width: 100%; border-radius: 4px; background: rgba(255,255,255,0.35);
    }
    .hint {
      min-width: 18px; height: 18px; padding: 0 5px; border-radius: 9999px;
      background: ${n}; color: #fff; font: 600 10px/18px inherit; text-align: center;
    }
    .hint:empty { display: none; }
  `,K.appendChild(P);let q=Pl(he);document.body.appendChild(he);let le=new Map,me=null,Ce={item:null,time:0,moved:!1},B=null;function Y(R){let A=le.get(R.el),V=A?.querySelector(".name");if(!A||!V||V.querySelector("input"))return;let be=V.querySelector("span"),fe=document.createElement("input");fe.type="text",fe.value=R.name??"",fe.placeholder=o(R.el),be&&(be.style.display="none"),V.appendChild(fe),A.classList.add("is-editing"),fe.focus(),fe.select();let Pe=!1,Ee=xe=>{if(!Pe){if(Pe=!0,B=null,xe){let w=fe.value.trim();R.name=w||void 0}fe.remove(),be&&(be.style.display="",be.textContent=R.name||o(R.el)),A.classList.remove("is-editing"),Bt()}};B=()=>Ee(!1),fe.addEventListener("pointerdown",xe=>xe.stopPropagation()),fe.addEventListener("blur",()=>Ee(!0)),fe.addEventListener("keydown",xe=>{xe.stopPropagation(),xe.key==="Enter"&&(xe.preventDefault(),Ee(!0)),xe.key==="Escape"&&(xe.preventDefault(),Ee(!1))})}function Se(R){let A=le.get(R.el);if(A)return A;A=document.createElement("div"),A.className="frame";let V=document.createElement("span");V.className="name";let be=document.createElement("span");be.textContent=R.name||o(R.el),V.appendChild(be),A.title="Double-click to name this block";let fe=document.createElement("span");fe.className="grip";let Pe=document.createElement("button");return Pe.className="drop",Pe.type="button",Pe.title="Leave this one out",Pe.textContent="\xD7",Pe.addEventListener("pointerdown",Ee=>Ee.stopPropagation()),Pe.addEventListener("click",Ee=>{Ee.preventDefault(),Ee.stopPropagation(),ht(R)}),A.append(V,fe,Pe),K.appendChild(A),le.set(R.el,A),A.addEventListener("pointerdown",Ee=>{if(Ee.target===fe||A.classList.contains("is-editing"))return;let xe=Date.now();if(Ce.item===R&&!Ce.moved&&xe-Ce.time<400){Ce={item:null,time:0,moved:!1},Ee.preventDefault(),Ee.stopPropagation(),Y(R);return}Ce={item:R,time:xe,moved:!1},pt(R,A,Ee,"move")}),fe.addEventListener("pointerdown",Ee=>{Ee.stopPropagation(),pt(R,A,Ee,"resize")}),A}function nt(R){let A=document.createElement("div");A.setAttribute("data-adk-wf-part",""),A.setAttribute("data-adk-wf-new",R.kind);let V=t.getBoundingClientRect(),be={x:Math.max(8,Math.round((V.width-R.width)/2)),y:Math.max(8,Math.round((V.height-R.height)/2)),width:R.width,height:R.height};A.style.cssText=`position:absolute;left:${be.x}px;top:${be.y}px;width:${be.width}px;height:${be.height}px;margin:0`,t.appendChild(A),v.push(A);let fe={el:A,from:be,to:{...be},orderFrom:z.length,added:R.kind,name:R.label};z=[...z,fe],me=fe,We(),Bt()}function ht(R){let A=z.filter(V=>V===R||R.el.contains(V.el));for(let V of A){if(le.get(V.el)?.remove(),le.delete(V.el),V.added){let be=v.indexOf(V.el);be>=0&&v.splice(be,1),V.el.remove();continue}V.to={...V.from},ut(V),V.el.removeAttribute("data-adk-wf-part"),E(V.el)}z=z.filter(V=>!A.includes(V)),me&&A.includes(me)&&(me=null),We(),Bt()}function We(){for(let[R,A]of le)z.some(V=>V.el===R)||(A.remove(),le.delete(R));for(let R of z){let A=Se(R),V=R.el.getBoundingClientRect();A.style.left=`${V.left}px`,A.style.top=`${V.top}px`,A.style.width=`${V.width}px`,A.style.height=`${V.height}px`,A.dataset.active=me===R?"1":"0";let be=A.querySelector(".name");if(!be)continue;let fe=z.filter(w=>w!==R&&R.el.contains(w.el));if(!fe.length){A.dataset.nested="0",be.style.fontSize=`${Math.round(Math.max(11,Math.min(22,V.height*.34)))}px`;continue}let Pe=fe.map(w=>w.el.getBoundingClientRect()),Ee=Math.min(...Pe.map(w=>w.top))-V.top,xe=V.bottom-Math.max(...Pe.map(w=>w.bottom));A.dataset.nested=Ee>=xe?"top":"bottom",be.style.fontSize=`${Math.round(Math.max(10,Math.min(15,Math.max(Ee,xe)-4)))}px`}}function ut(R){R.el.style.setProperty("left",`${R.to.x}px`),R.el.style.setProperty("top",`${R.to.y}px`),R.el.style.setProperty("width",`${R.to.width}px`),R.el.style.setProperty("height",`${R.to.height}px`)}function pt(R,A,V,be){if(V.button!==0)return;V.preventDefault(),V.stopPropagation(),me=R,A.classList.add("is-dragging"),A.setPointerCapture(V.pointerId);let fe=V.clientX,Pe=V.clientY,Ee={...R.to},xe=M=>{let H=M.clientX-fe,W=M.clientY-Pe;(Math.abs(H)>2||Math.abs(W)>2)&&(Ce.moved=!0);let X=M.altKey?1:_6,ee=U=>Math.round(U/X)*X;be==="move"?(R.to.x=ee(Ee.x+H),R.to.y=ee(Ee.y+W)):(R.to.width=Math.max(ax,ee(Ee.width+H)),R.to.height=Math.max(ax,ee(Ee.height+W))),ut(R),We()},w=M=>{A.classList.remove("is-dragging");try{A.releasePointerCapture(M.pointerId)}catch{}A.removeEventListener("pointermove",xe),A.removeEventListener("pointerup",w),A.removeEventListener("pointercancel",w),Bt()};A.addEventListener("pointermove",xe),A.addEventListener("pointerup",w),A.addEventListener("pointercancel",w)}let Ze=document.createElement("div");Ze.className="bar";let kt=document.createElement("button");kt.type="button",kt.className="icon";let Et=document.createElement("span");Et.className="hint";let it=document.createElement("button");it.type="button",it.className="icon",it.title="Put everything back",it.innerHTML=f6;let ct=document.createElement("button");ct.type="button",ct.className="primary",ct.textContent="Add";let Wt=document.createElement("button");Wt.type="button",Wt.className="icon",Wt.title="Exit wireframe mode",Wt.innerHTML=g6;let Xt=document.createElement("button");Xt.type="button",Xt.className="icon",Xt.title="Add a block",Xt.innerHTML=h6;let je=document.createElement("span");je.className="sep",Ze.append(kt,Xt,Et,je,it,ct,Wt);let Ye=document.createElement("div");Ye.className="palette";for(let R of m6){let A=document.createElement("button");A.type="button",A.className="chip",A.innerHTML=`<span class="chip-shape" style="height:${R.chipHeight}px"></span><span>${R.label}</span>`,A.addEventListener("click",V=>{V.preventDefault(),V.stopPropagation(),nt(R),Ye.dataset.open="0"}),Ye.appendChild(A)}K.appendChild(Ye),Xt.addEventListener("click",R=>{R.preventDefault(),R.stopPropagation(),Ye.dataset.open=Ye.dataset.open==="1"?"0":"1"}),K.appendChild(Ze);function pn(){let R=z.slice().sort((A,V)=>A.to.y-V.to.y||A.to.x-V.to.x).map(A=>A.el);return z.map(A=>{let V=A.to.x!==A.from.x||A.to.y!==A.from.y,be=A.to.width!==A.from.width||A.to.height!==A.from.height,fe=R.indexOf(A.el),Pe=!!A.name&&!A.added;return!A.added&&!V&&!be&&!Pe&&fe===A.orderFrom?null:{label:A.name??o(A.el),selector:A.added?`(new ${A.added})`:r(A.el),from:A.from,to:A.to,moved:V,resized:be,...A.name?{name:A.name}:{},...A.added?{added:A.added}:{},orderFrom:A.orderFrom,orderTo:fe}}).filter(A=>A!=null)}function Bt(){let R=pn().filter(A=>A.moved||A.resized||A.added).length;kt.innerHTML=ge?u6:p6,kt.title=ge?"Show the real colours":"Back to wireframe",kt.dataset.on=ge?"1":"0",Et.textContent=R?String(R):"",it.disabled=R===0,ct.disabled=R===0,it.style.opacity=R?"1":"0.4",ct.style.opacity=R?"1":"0.5"}kt.addEventListener("click",()=>{ge=!ge,te(),Bt()}),it.addEventListener("click",()=>{for(let R of z)R.to={...R.from},ut(R);We(),Bt()}),Wt.addEventListener("click",()=>nr()),ct.addEventListener("click",()=>{let R=pn();if(!R.length){e.onSubmit?.({empty:!0});return}e.onSubmit?.({prompt:y6(R,{label:o(t),selector:r(t),rect:{x:0,y:0,width:Math.round(_.width),height:Math.round(_.height)}}),changes:R,container:{label:o(t),selector:r(t),rect:{x:0,y:0,width:Math.round(_.width),height:Math.round(_.height)}},element:t})});let Be=R=>{(typeof R.composedPath=="function"?R.composedPath():[]).includes(he)&&R.stopPropagation()};window.addEventListener("mousemove",Be,!0),window.addEventListener("mouseover",Be,!0);let De=Id({ours:"[data-adk-wf-chrome],[data-adk-wf-root],[data-adk-toast],[data-adk-history]"}),de=()=>We();window.addEventListener("scroll",de,!0),window.addEventListener("resize",de);let ze=R=>{if(R.key==="Escape"){if(R.preventDefault(),R.stopPropagation(),B){B();return}nr()}};return window.addEventListener("keydown",ze,!0),We(),Bt(),ta={destroy(){window.removeEventListener("scroll",de,!0),window.removeEventListener("resize",de),window.removeEventListener("keydown",ze,!0),q(),De(),window.removeEventListener("mousemove",Be,!0),window.removeEventListener("mouseover",Be,!0);for(let R of v.splice(0))R.remove();for(let R of z)R.el.removeAttribute("data-adk-wf-part");t.removeAttribute("data-adk-wf-root"),C.splice(0).forEach(R=>R()),Z.remove(),he.remove(),e.onExit?.()}},ta}function y6(e,t){let n=[],o=e.filter(r=>r.added).length;n.push("Rearrange this component to match a layout the user sketched directly on the page. The coordinates below are the sketch, not the implementation: reproduce the arrangement with the layout system the component already uses (flex, grid, order, gaps, spans) \u2014 do NOT hardcode absolute positions."),n.push(""),n.push(`Component: \`${t.selector}\` (${t.label}), ${t.rect.width}\xD7${t.rect.height}px`),o&&n.push(`${o} block(s) marked NEW do not exist yet: create them, with the role their name suggests.`),n.push("");for(let r of e){let a=[];r.added&&a.push(`NEW ${r.added} block to create at (${r.to.x}, ${r.to.y}), ${r.to.width}\xD7${r.to.height}`),r.moved&&!r.added&&a.push(`moved from (${r.from.x}, ${r.from.y}) to (${r.to.x}, ${r.to.y}) \u2014 ${x6(r.to.x-r.from.x,r.to.y-r.from.y)}`),r.resized&&!r.added&&a.push(`resized from ${r.from.width}\xD7${r.from.height} to ${r.to.width}\xD7${r.to.height}`),r.name&&!r.added&&a.push(`the user calls it "${r.name}"`),r.orderTo!==r.orderFrom&&a.push(`reading order ${r.orderFrom+1} \u2192 ${r.orderTo+1}`),n.push(`- \`${r.selector}\` (${r.label}): ${a.join("; ")}`)}return n.push(""),n.push("```json"),n.push(JSON.stringify({container:t,changes:e},null,2)),n.push("```"),n.join(`
`)}function x6(e,t){let n=[];return e&&n.push(`${Math.abs(e)}px ${e>0?"right":"left"}`),t&&n.push(`${Math.abs(t)}px ${t>0?"down":"up"}`),n.join(", ")||"no shift"}var lx=`
:host {
  position: fixed;
  inset: 0;
  /* Above every annotation surface. The overlay puts its toolbar at 100000 and
     its tooltips at 100001, so anything below that gets crossed by a stray
     tooltip or hover label the moment the pointer passes the panel's edge \u2014
     which is exactly what it looked like: a menu bar drawn over the inspector.
     See LAYERS in ../layers.js for the whole stack. */
  z-index: ${Sn.inspector};
  pointer-events: none;
  contain: layout style;
  font-size: var(--adk-fs-control);
  line-height: 1.35;

  /* Aliases of the shared tokens \u2014 light and dark both come from there. */
  --radius-card: var(--adk-radius-panel);
  --radius-control: var(--adk-radius-control);
  --radius-chip: var(--adk-radius-inner);
  --ease: var(--adk-ease);
  --font: var(--adk-font);
  --mono: var(--adk-font);
  --bg: var(--adk-bg);
  --bg-solid: var(--adk-bg);
  --row: var(--adk-field);
  --row-hi: var(--adk-field-hi);
  --inset: var(--adk-inset);
  --seg: var(--adk-thumb);
  --line: var(--adk-line);
  --line-strong: var(--adk-line-strong);
  --ink: var(--adk-ink);
  --ink-dim: var(--adk-ink-dim);
  --ink-faint: var(--adk-ink-faint);
  --accent-ink: var(--adk-accent-ink);
  --accent-tint: var(--adk-accent-tint);
  --green: var(--adk-success);
  --warn: var(--adk-warn);
  --scrub: var(--adk-line-strong);
  --checker: var(--adk-line-strong);
  --shadow-raised: var(--adk-shadow-panel);
  --shadow-btn: var(--adk-shadow-thumb);
  --shadow-hairline: var(--adk-shadow-hairline);
}

input, select { -webkit-appearance: none; appearance: none; background: none; border: 0; outline: 0; border-radius: 0; }
:focus-visible { outline: 2px solid var(--adk-ui-accent); outline-offset: 1px; border-radius: var(--adk-radius-small); }

/* \u2500\u2500 Panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.agt-panel {
  position: absolute;
  /* The annotation toolbar lives bottom-right: stop above it so it stays
     visible, and keep equal margins on the other sides. */
  top: 16px; right: 16px; bottom: 76px; left: auto;
  width: var(--agt-panel-w, 320px);
  min-width: 280px; max-width: 560px;
  cursor: default;
  pointer-events: auto;
  display: flex; flex-direction: column;
  overflow: hidden;
  animation: agt-slide-in 260ms var(--ease);
}
.agt-panel.is-dragging { animation: none; transition: none; user-select: none; }
.agt-panel.is-resizing { animation: none; }

/* Resize grip on the panel's inner (left) edge. */
.agt-panel-grip {
  position: absolute; top: 12px; left: -4px; bottom: 12px; width: 10px;
  cursor: col-resize; z-index: 3;
}
.agt-panel-grip::after {
  content: ''; position: absolute; top: 0; bottom: 0; left: 4px; width: 2px;
  border-radius: 2px; background: transparent; transition: background 140ms var(--ease);
}
.agt-panel-grip:hover::after, .agt-panel.is-resizing .agt-panel-grip::after { background: var(--adk-ui-accent); }

/* \u2500\u2500 Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* Title left, edit status right, one hairline under it \u2014 the card's bar. */
.agt-head {
  display: flex; align-items: center; gap: 8px;
  padding: 9px 12px;
  border-bottom: 1px solid var(--line);
  cursor: grab; flex: 0 0 auto;
}
.agt-head-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--adk-ui-accent); flex: 0 0 auto;
}
.agt-head-txt { min-width: 0; display: flex; flex-direction: column; gap: 1px; }
.agt-head-tag {
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.agt-head-sub {
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

/* Edit status \u2014 the card's "\u2728 Adjust" until something is changed, then
   "\u2713 Edited". It is the only place in the panel that says whether this session
   has produced anything, so it earns the shimmer. */
.agt-status {
  margin-left: auto; flex: 0 0 auto;
  display: inline-flex; align-items: center; gap: 6px;
  font-size: var(--adk-fs-control); font-weight: var(--adk-fw-medium);
  white-space: nowrap;
}
.agt-status-badge {
  width: 18px; height: 18px; border-radius: var(--adk-radius-small); flex: 0 0 auto;
  display: inline-flex; align-items: center; justify-content: center;
  border: 1px solid color-mix(in srgb, var(--adk-ui-accent) 30%, transparent);
  background: var(--accent-tint);
  color: var(--adk-brand-custom-to, var(--accent-ink));
}
.agt-status--idle .agt-status-txt {
  background-image: linear-gradient(90deg, var(--adk-brand-custom-from, var(--accent-ink)) 35%, var(--adk-brand-custom-to, var(--adk-ui-accent)) 50%, var(--adk-brand-custom-from, var(--accent-ink)) 65%);
  background-size: 200% 100%;
  -webkit-background-clip: text; background-clip: text;
  color: transparent;
  animation: agt-shimmer 1.4s linear infinite;
}
.agt-status[hidden] { display: none; }
.agt-status--done { animation: agt-pop-in 250ms var(--ease); }
.agt-status--done .agt-status-badge { display: none; }
.agt-status--done .agt-status-txt { color: var(--green); }
.agt-status--done .agt-status-check { color: var(--green); flex: 0 0 auto; }
.agt-status--idle .agt-status-check { display: none; }

.agt-head-actions { display: flex; align-items: center; gap: 2px; margin-left: auto; }
.agt-head-btn {
  width: 24px; height: 24px; border-radius: var(--adk-radius-inner);
  display: inline-flex; align-items: center; justify-content: center;
  color: var(--ink-faint); transition: background 140ms var(--ease), color 140ms var(--ease);
}
.agt-head-btn:hover { background: var(--row); color: var(--ink); }
.agt-head-btn:disabled { opacity: 0.4; cursor: default; }
.agt-head-btn:disabled:hover { background: none; color: var(--ink-faint); }
.agt-head-count {
  min-width: 16px; height: 16px; padding: 0 4px; margin-right: 4px;
  border-radius: var(--adk-radius-pill); background: var(--adk-accent-fill); color: var(--adk-on-accent);
  font-size: var(--adk-fs-micro); font-weight: var(--adk-fw-strong); line-height: 16px; text-align: center;
}
.agt-head-count.is-zero { display: none; }

/* \u2500\u2500 Segmented controls \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* One mechanism, three uses (tabs, states, icon groups): a grey track with a
   single raised thumb that slides to the chosen cell. The thumb is one element
   moved by transform, so the motion is continuous instead of a colour swap. */
.agt-tabs, .agt-states {
  flex: 0 0 auto;
}
.agt-tabs { grid-template-columns: 1fr 1fr; margin: 10px 12px 0; }
.agt-states { margin: 8px 12px 0; }
.agt-seg-thumb {
  position: absolute; top: 2px; bottom: 2px; left: 2px;
  width: calc((100% - 4px) / var(--agt-seg-n, 2));
  border-radius: var(--adk-radius-inner);
  background: var(--seg);
  box-shadow: var(--shadow-btn);
  transform: translateX(calc(var(--agt-seg-i, 0) * 100%));
  transition: transform 300ms var(--ease), background 200ms var(--ease), opacity 160ms var(--ease);
  pointer-events: none;
}
.agt-seg-thumb.is-off { opacity: 0; }

.agt-state { font-size: var(--adk-fs-meta); }
.agt-state span { overflow: hidden; text-overflow: ellipsis; }

/* A state other than the resting one changes what every value below means, so
   the thumb stops being neutral and takes the product's colour. */
.agt-states.is-stateful .agt-seg-thumb { background: var(--adk-accent-fill); }
.agt-states.is-stateful .agt-state.is-on { color: var(--adk-on-accent); }

/* \u2500\u2500 Body \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.agt-body {
  flex: 1 1 auto; overflow-y: auto; overflow-x: visible;
  padding: 0 12px 4px;
  /* No visible scrollbar: the styled one painted a track down the panel's
     edge. Wheel and trackpad still scroll. */
  scrollbar-width: none;
}
.agt-body::-webkit-scrollbar { display: none; width: 0; height: 0; }
.agt-empty {
  padding: 30px 12px; text-align: center;
}

/* \u2500\u2500 Sections \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.agt-sec { padding: 12px 0; }
.agt-sec + .agt-sec { border-top: 1px solid var(--line); }
.agt-sec-head { display: flex; align-items: center; gap: 8px; padding: 0 0 9px; }
.agt-sec-tools { margin-left: auto; display: flex; align-items: center; gap: 4px; }
.agt-sec-add {
  margin-left: auto; width: 24px; height: 24px; border-radius: var(--adk-radius-inner);
  display: inline-flex; align-items: center; justify-content: center;
  color: var(--ink-faint); background: var(--inset); box-shadow: var(--shadow-hairline);
  transition: background 140ms var(--ease), color 140ms var(--ease);
}
.agt-sec-add:hover { background: var(--row-hi); color: var(--ink); }
.agt-sec-tools + .agt-sec-add { margin-left: 0; }
.agt-sec-body { display: flex; flex-direction: column; gap: 8px; }

/* \u2500\u2500 Rows \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* Label left, control right, nothing drawn around either: the chip is the only
   filled shape, so a row of them reads as a list of values rather than a stack
   of boxes. */
.agt-row {
  position: relative;
  display: grid;
  grid-template-columns: minmax(58px, 0.8fr) minmax(0, 1.2fr);
  align-items: center; gap: 8px;
  min-height: 26px;
}
.agt-row-label {
  font-size: var(--adk-fs-control); color: var(--ink-dim);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.agt-row-ctl { display: flex; align-items: center; justify-content: flex-end; gap: 6px; min-width: 0; }
.agt-row.is-edited > .agt-row-label { color: var(--accent-ink); }

/* Paired fields (Size/Weight, X/Y\u2026) and double control groups take the whole
   row: the two chips are their own labels. */
.agt-row:has(.agt-pair),
.agt-row:has(.agt-row-ctl > .agt-tgl-group + .agt-seg),
.agt-row:has(.agt-row-ctl > .agt-tgl-group + .agt-tgl-group) { grid-template-columns: 1fr; }
.agt-row:has(.agt-pair) > .agt-row-label,
.agt-row:has(.agt-row-ctl > .agt-tgl-group + .agt-seg) > .agt-row-label,
.agt-row:has(.agt-row-ctl > .agt-tgl-group + .agt-tgl-group) > .agt-row-label { display: none; }
.agt-row:has(.agt-pair) > .agt-row-ctl,
.agt-row:has(.agt-row-ctl > .agt-tgl-group + .agt-seg) > .agt-row-ctl,
.agt-row:has(.agt-row-ctl > .agt-tgl-group + .agt-tgl-group) > .agt-row-ctl { gap: 8px; }
.agt-row:has(.agt-row-ctl > .agt-tgl-group + .agt-seg) > .agt-row-ctl > *,
.agt-row:has(.agt-row-ctl > .agt-tgl-group + .agt-tgl-group) > .agt-row-ctl > * { flex: 1; }

.agt-pair { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; width: 100%; min-width: 0; }

/* The undo chip hangs off the panel's left edge, like the reference. */
.agt-undo {
  position: fixed;
  width: 28px; height: 28px; border-radius: 50%;
  display: inline-flex; align-items: center; justify-content: center;
  background: var(--bg); color: var(--ink-dim); pointer-events: auto;
  box-shadow: var(--shadow-raised);
  transition: background 140ms var(--ease), color 140ms var(--ease), transform 120ms var(--ease);
}
.agt-undo:hover { background: var(--row-hi); color: var(--ink); transform: scale(1.06); }

/* \u2500\u2500 Scrub fields \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* The whole chip is the drag handle \u2014 the glyph alone was a 20px target people
   missed, and a control you have to aim at reads as broken. The glyph stays as
   the field's label and its focusable slider, so the value is reachable by
   keyboard too. */
.agt-num {
  position: relative; display: flex; align-items: center; gap: 2px;
  min-width: 0; flex: 1;
  height: 26px; padding: 0 5px 0 2px;
  border-radius: var(--radius-chip);
  background: var(--row);
  cursor: ew-resize; touch-action: none;
  transition: background 200ms var(--ease), box-shadow 200ms var(--ease);
}
.agt-num:hover { background: var(--row-hi); }
/* Edited: the card's accent tint plus a 1px accent ring, so a value that has
   been moved is visible without reading it. */
.agt-num.is-edited,
.agt-row.is-edited > .agt-row-ctl > .agt-num {
  background: var(--accent-tint);
  box-shadow: 0 0 0 1px var(--adk-ui-accent);
}
.agt-num-input {
  flex: 1; min-width: 24px;
  font-size: var(--adk-fs-control); color: var(--ink); text-align: left;
  font-variant-numeric: tabular-nums;
  cursor: ew-resize;
}
.agt-num-input:focus { cursor: text; }
.agt-unit { font-size: var(--adk-fs-meta); color: var(--ink-faint); font-variant-numeric: tabular-nums; flex: 0 0 auto; }

.agt-num-scrub {
  flex: 0 0 auto;
  display: inline-flex; align-items: center; justify-content: center;
  min-width: 20px; height: 22px; padding: 0 3px; border-radius: var(--adk-radius-small);
  color: var(--ink-faint);
  font-size: var(--adk-fs-meta); font-weight: var(--adk-fw-medium); line-height: 1; letter-spacing: 0.02em;
  cursor: ew-resize; user-select: none;
  transition: color 140ms var(--ease);
}
.agt-num:hover .agt-num-scrub { color: var(--ink-dim); }
.agt-num.is-scrubbing .agt-num-scrub,
.agt-num-scrub:focus-visible { color: var(--accent-ink); }
.agt-num.is-scrubbing { background: var(--accent-tint); box-shadow: 0 0 0 1px var(--adk-ui-accent); }
.agt-num.is-scrubbing .agt-num-input { color: var(--accent-ink); }
/* Graduations only while the field is live: a readout of the drag, not a
   permanent texture. */
.agt-num::after {
  content: ''; position: absolute; inset: 0 5px 0 26px;
  pointer-events: none; opacity: 0; border-radius: inherit;
  background-image: repeating-linear-gradient(to right, var(--scrub) 0 1px, transparent 1px 30px);
  background-size: auto 6px; background-position: left center; background-repeat: repeat-x;
  transition: opacity 120ms var(--ease);
}
.agt-num.is-scrubbing::after { opacity: 1; }

/* Off the project's spacing rhythm \u2014 a hairline under the field, not a block.
   The value stands; it just no longer passes unremarked. */
.agt-num.is-off-scale { box-shadow: inset 0 -2px 0 color-mix(in srgb, var(--warn) 70%, transparent); }

/* \u2500\u2500 Icon toggles / icon segmented groups \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.agt-tgl-group, .agt-seg {
  position: relative;
  display: inline-flex; align-items: center; justify-content: space-between;
  gap: 0; padding: 2px; border-radius: var(--radius-control);
  background: var(--row); min-width: 0;
}
.agt-seg { display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; }
.agt-tgl, .agt-seg-btn {
  position: relative; z-index: 1;
  height: 24px; min-width: 26px; padding: 0 6px; border-radius: var(--adk-radius-inner);
  display: inline-flex; align-items: center; justify-content: center;
  font-size: var(--adk-fs-control); color: var(--ink-faint);
  transition: color 180ms var(--ease), background 180ms var(--ease);
}
.agt-tgl { flex: 1; }
.agt-tgl:hover, .agt-seg-btn:hover { color: var(--ink-dim); }
/* Independent toggles have no single thumb to slide, so each carries its own
   raised cap when it is on. */
.agt-tgl.is-on { background: var(--seg); box-shadow: var(--shadow-btn); color: var(--accent-ink); }
.agt-seg-btn.is-on { color: var(--accent-ink); }
/* The mini segmented pairs that live in a section header (uniform / per-side)
   are a control, not a row: they shrink to their icons. */
.agt-seg--mini { flex: 0 0 auto; }
.agt-seg--mini .agt-seg-btn { min-width: 24px; padding: 0 4px; }

/* \u2500\u2500 Dropdowns \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* The card's dropdown: an inset chip with a hairline, an accent ring while
   open, a chevron that turns over, and a menu that pops in beside it. */
.agt-drop {
  display: flex; align-items: center; justify-content: space-between; gap: 6px;
  width: 100%; min-width: 0; height: 26px;
  padding: 0 4px 0 8px; border-radius: var(--radius-chip);
  background: var(--inset); box-shadow: var(--shadow-hairline);
  font-size: var(--adk-fs-control); color: var(--ink);
  transition: background 160ms var(--ease), box-shadow 160ms var(--ease);
}
.agt-drop:hover { background: var(--row-hi); }
.agt-drop[aria-expanded="true"] { box-shadow: 0 0 0 1px var(--adk-ui-accent); }
.agt-drop-name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-align: left; }
.agt-drop svg { flex: 0 0 auto; color: var(--ink-faint); transition: transform 200ms var(--ease); }
.agt-drop[aria-expanded="true"] svg { transform: rotate(180deg); }
.agt-select-wrap { display: flex; align-items: center; min-width: 0; flex: 1; }

/* \u2500\u2500 Typeface picker \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* The trigger is set in the face it names, so the current choice is legible
   without opening anything. */
.agt-font-wrap { display: flex; align-items: center; min-width: 0; flex: 1; }
.agt-font {
  display: flex; align-items: center; justify-content: space-between; gap: 6px;
  width: 100%; min-width: 0; height: 26px;
  padding: 0 4px 0 8px; border-radius: var(--radius-chip);
  background: var(--inset); box-shadow: var(--shadow-hairline);
  font-size: var(--adk-fs-control); color: var(--ink);
  transition: background 160ms var(--ease), box-shadow 160ms var(--ease);
}
.agt-font:hover { background: var(--row-hi); }
.agt-font[aria-expanded="true"] { box-shadow: 0 0 0 1px var(--adk-ui-accent); }
.agt-font-name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-align: left; }
.agt-font svg { color: var(--ink-faint); flex: 0 0 auto; transition: transform 200ms var(--ease); }
.agt-font[aria-expanded="true"] svg { transform: rotate(180deg); }
.agt-font-menu {
  width: 224px; max-height: 320px; overflow-y: auto;
  padding: 4px; display: flex; flex-direction: column; gap: 1px;
  scrollbar-width: none;
}
.agt-font-menu::-webkit-scrollbar { display: none; width: 0; height: 0; }
.agt-font-item {
  display: flex; align-items: center; gap: 8px;
  min-height: 28px; padding: 4px 8px; border-radius: var(--adk-radius-inner); text-align: left;
  color: var(--ink-dim);
  transition: background 120ms var(--ease), color 120ms var(--ease);
}
.agt-font-item:hover { background: var(--row); color: var(--ink); }
.agt-font-item.is-on { background: var(--row); color: var(--accent-ink); }
.agt-font-item-name {
  flex: 1; min-width: 0; font-size: var(--adk-fs-control);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
/* The same two letters against every face: a comparison, not a description. */
.agt-font-item-sample { flex: 0 0 auto; font-size: 16px; color: var(--ink-faint); }
.agt-font-item:hover .agt-font-item-sample,
.agt-font-item.is-on .agt-font-item-sample { color: var(--ink); }

/* \u2500\u2500 Colour \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.agt-color {
  display: flex; align-items: center; gap: 6px;
  flex: 1; min-width: 0; height: 26px;
  padding: 0 6px 0 4px; border-radius: var(--radius-chip);
  background: var(--row);
  transition: background 200ms var(--ease), box-shadow 200ms var(--ease);
}
.agt-color:hover { background: var(--row-hi); }
.agt-color.is-edited,
.agt-row.is-edited > .agt-row-ctl > .agt-color {
  background: var(--accent-tint); box-shadow: 0 0 0 1px var(--adk-ui-accent);
}
.agt-swatch {
  position: relative;
  width: 18px; height: 18px; border-radius: var(--adk-radius-small); flex: 0 0 auto;
  box-shadow: inset 0 0 0 1px var(--line-strong);
  overflow: hidden;
}
/* An 18px square is the right mark and the wrong target: the press area is
   grown past the chip's height without growing the square. */
.agt-swatch::after { content: ''; position: absolute; inset: -5px; border-radius: 8px; }
.agt-swatch-fill { display: block; width: 100%; height: 100%; }
.agt-hex {
  font-size: var(--adk-fs-meta); font-weight: var(--adk-fw-medium); line-height: 1; color: var(--ink);
  letter-spacing: 0.01em; text-transform: uppercase;
  flex: 1; min-width: 0;
}
.agt-alpha-wrap { display: inline-flex; align-items: center; gap: 1px; flex: 0 0 auto; }
.agt-alpha {
  width: 26px; text-align: right; font-size: var(--adk-fs-control); color: var(--ink);
  font-variant-numeric: tabular-nums;
}
.agt-alpha-wrap .agt-unit { font-size: var(--adk-fs-meta); }

/* \u2500\u2500 Popovers (colour picker, menus) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.agt-layer { position: absolute; inset: 0; pointer-events: none; }
.agt-layer > * { pointer-events: auto; }
.agt-popover {
  position: fixed;
  background: var(--bg);
  border-radius: var(--adk-radius-card); padding: 10px;
  box-shadow: var(--shadow-raised);
  transform-origin: top right;
  animation: agt-pop-in 200ms var(--ease);
}
.agt-menu { padding: 4px; min-width: 140px; border-radius: var(--adk-radius-control); }
.agt-menu-item {
  display: flex; align-items: center; width: 100%; text-align: left;
  min-height: 26px; padding: 0 8px; border-radius: var(--adk-radius-inner);
  font-size: var(--adk-fs-control); color: var(--ink-dim);
  transition: background 120ms var(--ease), color 120ms var(--ease);
}
.agt-menu-item:hover { background: var(--row); color: var(--ink); }
.agt-menu-item.is-on { color: var(--accent-ink); }

.agt-pk { width: 264px; display: flex; flex-direction: column; gap: 10px; }
.agt-pk-foot, .agt-pk-rails { display: flex; align-items: center; gap: 8px; }
.agt-pk-rails-col { flex: 1; display: flex; flex-direction: column; gap: 8px; }
.agt-pk-fmt {
  display: inline-flex; align-items: center; gap: 4px;
  height: 28px; padding: 0 8px; border-radius: var(--radius-chip);
  background: var(--inset); box-shadow: var(--shadow-hairline);
  font-size: var(--adk-fs-control); color: var(--ink-dim);
}
.agt-pk-fmt select { cursor: pointer; color: var(--ink); }
.agt-pk-fmt select option { background: var(--bg-solid); color: var(--ink); }
.agt-pk-fmt svg { color: var(--ink-faint); }
/* The value sits in its own field rather than floating on the popover: it is
   editable, and a bare string on a panel does not look like it. */
.agt-pk-val {
  flex: 1; display: inline-flex; align-items: center; gap: 3px; min-width: 0;
  height: 28px; padding: 0 8px; border-radius: var(--radius-chip); background: var(--row);
}
.agt-pk-hash { color: var(--ink-faint); font-size: var(--adk-fs-control); font-weight: var(--adk-fw-medium); line-height: 1; }
.agt-pk-hex {
  flex: 1; min-width: 0; font-size: var(--adk-fs-control); font-weight: var(--adk-fw-medium); line-height: 1; color: var(--ink);
  text-transform: uppercase; letter-spacing: 0.01em;
}
.agt-pk-sat {
  position: relative; height: 156px; border-radius: var(--adk-radius-control); overflow: hidden;
  cursor: crosshair;
  box-shadow: inset 0 0 0 1px var(--line);
}
.agt-pk-sat-white { position: absolute; inset: 0; background: linear-gradient(to right, #fff, rgba(255,255,255,0)); }
.agt-pk-sat-black { position: absolute; inset: 0; background: linear-gradient(to top, #000, rgba(0,0,0,0)); }
.agt-pk-cursor {
  position: absolute; width: 14px; height: 14px; border-radius: 50%;
  border: 2px solid #fff; box-shadow: 0 0 0 1px rgba(0,0,0,0.45);
  transform: translate(-50%, -50%); pointer-events: none;
}
.agt-pk-rail { position: relative; height: 14px; border-radius: var(--adk-radius-inner); cursor: pointer; box-shadow: inset 0 0 0 1px var(--line); }
.agt-pk-hue { background: linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00); }
.agt-pk-alpha { position: relative; overflow: hidden; }
.agt-pk-alpha-fill { position: absolute; inset: 0; }
.agt-pk-thumb {
  position: absolute; top: 50%; width: 15px; height: 15px; border-radius: 50%;
  border: 2px solid #fff; box-shadow: 0 0 0 1px rgba(0,0,0,0.45);
  transform: translate(-50%, -50%); pointer-events: none;
}

/* The project's own colours, read off the page. Small, dense, and above the
   format row: reaching for a brand colour is one click, reaching for an
   arbitrary one takes the wheel. */
.agt-pk-palette { display: flex; flex-direction: column; gap: 6px; }
.agt-pk-palette-title {
  font-size: var(--adk-fs-meta); color: var(--ink-faint);
  text-transform: uppercase; letter-spacing: 0.04em;
}
.agt-pk-palette-row { display: flex; flex-wrap: wrap; gap: 5px; }
.agt-pk-tok {
  width: 18px; height: 18px; border-radius: var(--adk-radius-small); flex: 0 0 auto;
  box-shadow: inset 0 0 0 1px var(--line-strong);
  transition: transform 120ms var(--ease);
}
.agt-pk-tok:hover { transform: scale(1.14); }
/* A colour the project does not already use. Same rule as spacing: say so,
   allow it. */
.agt-pk-off { display: flex; align-items: center; gap: 6px; font-size: var(--adk-fs-meta); color: var(--warn); }
.agt-pk-off[hidden] { display: none; }
.agt-pk-op {
  display: flex; align-items: center; gap: 8px; height: 30px;
  padding: 0 10px; border-radius: var(--radius-chip); background: var(--row);
}
.agt-pk-op-label { font-size: var(--adk-fs-control); color: var(--ink-dim); }
.agt-pk-op-val { margin-left: auto; display: inline-flex; align-items: center; gap: 1px; font-size: var(--adk-fs-control); color: var(--ink); }
.agt-pk-op-input { width: 30px; text-align: right; font-size: var(--adk-fs-control); color: var(--ink); font-variant-numeric: tabular-nums; }
.agt-pk-dropper {
  width: 28px; height: 28px; border-radius: var(--radius-chip); flex: 0 0 auto;
  display: inline-flex; align-items: center; justify-content: center;
  color: var(--ink-dim); background: var(--inset); box-shadow: var(--shadow-hairline);
  transition: background 140ms var(--ease), color 140ms var(--ease);
}
.agt-pk-dropper:hover { background: var(--row-hi); color: var(--ink); }
.agt-pk-preview { width: 20px; height: 20px; border-radius: var(--adk-radius-small); box-shadow: inset 0 0 0 1px var(--line-strong); }

/* Stated, not enforced \u2014 same rule as the rest of the panel. Green is not a
   reward, it is confirmation; amber is the one that has to be noticed. */
.agt-contrast {
  padding: 2px 2px 0; font-size: var(--adk-fs-meta); line-height: 1.35;
  color: var(--ink-faint);
}
.agt-contrast:empty { display: none; }
.agt-contrast.is-fail { color: var(--warn); }

/* \u2500\u2500 Box model (padding / margin) \u2014 the reference's 3\xD73 square \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.agt-box {
  position: relative; padding: 8px; border-radius: var(--adk-radius-control);
  background: var(--inset); box-shadow: var(--shadow-hairline);
  display: grid; gap: 6px;
  grid-template-columns: 46px 1fr 46px;
  grid-template-rows: 26px 30px 26px;
  align-items: center; justify-items: center;
}
.agt-box-inner {
  grid-area: 2 / 2; width: 100%; height: 100%;
  border-radius: var(--adk-radius-inner); background: var(--row);
}
.agt-box-side { display: flex; align-items: center; justify-content: center; width: 100%; }
.agt-box-top { grid-area: 1 / 2; }
.agt-box-left { grid-area: 2 / 1; }
.agt-box-right { grid-area: 2 / 3; }
.agt-box-bottom { grid-area: 3 / 2; }
.agt-box-link { position: absolute; top: 4px; right: 4px; display: flex; align-items: center; justify-content: center; width: 24px; height: 24px; padding: 0;
  border: 0; border-radius: var(--adk-radius-inner); background: transparent; cursor: pointer; color: var(--ink-faint);
  transition: background-color var(--adk-fast) ease, color var(--adk-fast) ease; }
.agt-box-link:hover { background: var(--adk-hover); color: var(--ink); }
.agt-box-link.is-on { color: var(--accent-ink); background: color-mix(in srgb, var(--adk-ui-accent) 14%, transparent); }
.agt-box-link:focus-visible { outline: 2px solid var(--adk-ui-accent); outline-offset: 1px; }
@media (pointer: coarse) { .agt-box-link { width: 32px; height: 32px; top: 0; right: 0; } }
.agt-box .agt-num {
  justify-content: center; height: 24px; padding: 0 2px;
  background: var(--bg); box-shadow: var(--shadow-btn);
}
.agt-box .agt-num:hover { background: var(--bg); }
.agt-box .agt-num::after { display: none; }
.agt-box .agt-num-scrub { display: none; }
.agt-box .agt-unit { display: none; }
.agt-box input {
  width: 100%; text-align: center; font-size: var(--adk-fs-control); color: var(--ink);
  font-variant-numeric: tabular-nums; cursor: ew-resize;
}

/* \u2500\u2500 Footer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.agt-foot {
  display: flex; gap: 8px; padding: 10px 12px;
  border-top: 1px solid var(--line); flex: 0 0 auto;
}
.agt-btn {
  height: 28px; border-radius: var(--radius-chip); padding: 0 12px;
  font-size: var(--adk-fs-control); font-weight: var(--adk-fw-medium);
  transition: background 140ms var(--ease), opacity 140ms var(--ease), filter 140ms var(--ease);
}
.agt-btn--ghost { color: var(--ink-dim); background: var(--inset); box-shadow: var(--shadow-hairline); }
.agt-btn--ghost:hover { background: var(--row-hi); color: var(--ink); }
.agt-btn--primary { flex: 1; background: var(--adk-accent-fill); color: var(--adk-on-accent); box-shadow: var(--shadow-btn); }
.agt-btn--primary:hover:not(:disabled) { filter: brightness(1.06); }
.agt-btn--primary:disabled { opacity: 0.4; cursor: default; }

/* Keep the page available for picking and comparing elements on phones.
   Override any remembered desktop drag/resize coordinates only while narrow;
   the desktop dock and its resize handle retain their existing behaviour. */
@media (max-width: 600px) {
  .agt-panel {
    top: auto !important; right: 12px !important; bottom: 76px !important; left: 24px !important;
    width: auto !important; min-width: 0; max-width: none;
    height: 45vh !important; height: 45dvh !important;
    max-height: calc(100vh - 100px); max-height: calc(100dvh - 100px);
    transform: none !important;
  }
  .agt-body { min-height: 0; overscroll-behavior: contain; }
  .agt-panel-grip { display: none; }
  .agt-head { cursor: default; }
}

@keyframes agt-slide-in {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes agt-pop-in {
  from { opacity: 0; transform: scale(0.94); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes agt-shimmer {
  from { background-position: 200% 0; }
  to { background-position: -200% 0; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
}
`;var cx="http://www.w3.org/2000/svg";function ae(e,t,n){let o=document.createElement(e);if(t)for(let r of Object.keys(t)){let a=t[r];a==null||a===!1||(r==="class"?o.className=a:r==="text"?o.textContent=a:r.startsWith("on")&&typeof a=="function"?o.addEventListener(r.slice(2),a):o.setAttribute(r,a===!0?"":a))}for(let r of[].concat(n||[]))r==null||r===!1||o.appendChild(typeof r=="string"?document.createTextNode(r):r);return o}var v6={copy:"M5 5V3.5A1.5 1.5 0 0 1 6.5 2h6A1.5 1.5 0 0 1 14 3.5v6a1.5 1.5 0 0 1-1.5 1.5H11M3.5 5h6A1.5 1.5 0 0 1 11 6.5v6A1.5 1.5 0 0 1 9.5 14h-6A1.5 1.5 0 0 1 2 12.5v-6A1.5 1.5 0 0 1 3.5 5Z",trash:"M3 4.5h10M6.5 4.5V3h3v1.5M4.5 4.5l.6 8a1 1 0 0 0 1 .9h3.8a1 1 0 0 0 1-.9l.6-8",gear:"M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z M13 8a5 5 0 0 0-.1-.9l1.2-.9-1.3-2.2-1.4.5a5 5 0 0 0-1.5-.9L9.7 2H7.3l-.2 1.5a5 5 0 0 0-1.5.9l-1.4-.5-1.3 2.2 1.2.9a5 5 0 0 0 0 1.8l-1.2.9 1.3 2.2 1.4-.5a5 5 0 0 0 1.5.9l.2 1.5h2.4l.2-1.5a5 5 0 0 0 1.5-.9l1.4.5 1.3-2.2-1.2-.9c.06-.3.1-.6.1-.9Z",close:"M4 4l8 8M12 4l-8 8",info:"M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12ZM8 7.5v3.5M8 5.2v.1",plus:"M8 3.5v9M3.5 8h9",dropper:"M12.6 3.4a1.9 1.9 0 0 0-2.7 0L8.4 4.9l-.6-.6-1.1 1.1.6.6-4 4V13h2.9l4-4 .6.6 1.1-1.1-.6-.6 1.5-1.5a1.9 1.9 0 0 0 0-2.7Z",italic:"M10 3H6.5M9.5 13H6M9.2 3 6.8 13",underline:"M4.5 3v4.5a3.5 3.5 0 0 0 7 0V3M3.5 13.5h9",strike:"M3 8h10M11.5 4.6C11 3.6 9.8 3 8.2 3 6.3 3 5 3.9 5 5.2 5 6.4 6 7.1 8 7.6M4.8 11c.5 1.2 1.8 2 3.5 2 2 0 3.3-.9 3.3-2.3 0-.9-.5-1.5-1.5-2",alignLeft:"M2.5 4h11M2.5 8h7M2.5 12h9",alignCenter:"M2.5 4h11M4.5 8h7M3.5 12h9",alignRight:"M2.5 4h11M6.5 8h7M4.5 12h9",rowDir:"M3 4v8M13 4v8M6 8h4M8.5 6.5 10 8l-1.5 1.5",colDir:"M4 3h8M4 13h8M8 6v4M6.5 8.5 8 10l1.5-1.5",link:"M6.5 9.5 9.5 6.5M6 5l1-1a2.1 2.1 0 0 1 3 3l-1 1M10 11l-1 1a2.1 2.1 0 0 1-3-3l1-1",unlink:"M6 5l1-1a2.1 2.1 0 0 1 3 3l-1 1M10 11l-1 1a2.1 2.1 0 0 1-3-3l1-1M3 3l10 10",corners:"M3 6.5V5a2 2 0 0 1 2-2h1.5M13 9.5V11a2 2 0 0 1-2 2H9.5",chevron:"M5.5 6.5 8 9l2.5-2.5",check:"M3.2 8.4 6.4 11.6 12.8 4.8",sparkle:"M8 2.2 9.45 6.55 13.8 8 9.45 9.45 8 13.8 6.55 9.45 2.2 8 6.55 6.55Z",undo:"M3.6 6.4h4.1M3.6 6.4V2.9 M3.9 6.1a4.9 4.9 0 1 1-.7 4",fontSize:"M2 4h6.5M5.25 4v8.5 M9.5 7.5h4.5M11.75 7.5v5",weight:"M4.5 3h4a2.4 2.4 0 0 1 0 4.9h-4V3Z M4.5 7.9h4.7a2.5 2.5 0 0 1 0 5.1H4.5V7.9Z",lineHeight:"M6.5 3.5h7.5M6.5 8h7.5M6.5 12.5h7.5 M2.6 4.6 3.8 3.4 5 4.6 M2.6 11.4l1.2 1.2 1.2-1.2 M3.8 3.6v8.8",letterSpacing:"M2.5 3v10M13.5 3v10 M6 8h4 M7.2 6.8 6 8l1.2 1.2 M8.8 6.8 10 8l-1.2 1.2",cornerAll:"M3.5 12.5V6A2.5 2.5 0 0 1 6 3.5h6.5",cornerSplit:"M3 6V5a2 2 0 0 1 2-2h1 M10 3h1a2 2 0 0 1 2 2v1 M13 10v1a2 2 0 0 1-2 2h-1 M6 13H5a2 2 0 0 1-2-2v-1",boxAll:"M3.5 3.5h9v9h-9Z",boxSplit:"M3.5 3.5h9v9h-9Z M6.5 6.5h3v3h-3Z",opacity:"M8 2.6a5.4 5.4 0 1 0 0 10.8 5.4 5.4 0 0 0 0-10.8Z M8 2.6v10.8a5.4 5.4 0 0 0 0-10.8Z",blur:"M8 2.6a5.4 5.4 0 1 0 0 10.8 5.4 5.4 0 0 0 0-10.8Z M4.6 6.5h1M7.5 6.5h1M10.4 6.5h1M6 9.5h1M8.9 9.5h1",width:"M2 8h12 M4.2 5.8 2 8l2.2 2.2 M11.8 5.8 14 8l-2.2 2.2",height:"M8 2v12 M5.8 4.2 8 2l2.2 2.2 M5.8 11.8 8 14l2.2-2.2",gap:"M3 3v10M13 3v10 M6.5 8h3 M7.6 6.9 6.5 8l1.1 1.1 M8.4 6.9 9.5 8l-1.1 1.1"};function Hn(e,t=14){let n=document.createElementNS(cx,"svg");n.setAttribute("viewBox","0 0 16 16"),n.setAttribute("width",String(t)),n.setAttribute("height",String(t)),n.setAttribute("fill","none"),n.setAttribute("stroke","currentColor"),n.setAttribute("stroke-width","1.3"),n.setAttribute("stroke-linecap","round"),n.setAttribute("stroke-linejoin","round");for(let o of(v6[e]||"").split(" M")){if(!o)continue;let r=document.createElementNS(cx,"path");r.setAttribute("d",/^[Mm]/.test(o)?o:"M"+o),n.appendChild(r)}return n}function Yt(e,t,n){let o=n||{},r=ae("div",{class:"agt-row"+(o.wide?" agt-row--wide":"")},[ae("div",{class:"agt-row-label",text:e}),ae("div",{class:"agt-row-ctl"},t)]);return o.props&&(r.__agtProps=[].concat(o.props)),r.addEventListener("agt-scrub",a=>r.classList.toggle("is-scrubbing",!!a.detail.active)),r}function kn({read:e,write:t,unit:n="px",min:o=-1/0,max:r=1/0,step:a=1,precision:i=0,prefix:s,iconPrefix:l,placeholder:c="\u2014",fallback:u=0,title:p,scale:d}){let y=ae("input",{class:"agt-num-input",type:"text",spellcheck:"false",placeholder:c}),_=!l&&s==null,C=ae("div",{class:"agt-num-scrub"+(l||_?" agt-num-scrub--icon":""),role:"slider",tabindex:"0","aria-label":p||s||n||"value",title:(p?p+" \u2014 ":"")+"drag or use the arrow keys to change"},l?Hn(l,13):_?Hn("width",12):s),m=!!n?ae("span",{class:"agt-unit",text:n}):null,g=ae("div",{class:"agt-num"},m?[C,y,m]:[C,y]),E=K=>{let P=Math.pow(10,i);return Math.round(K*P)/P},I=K=>Math.max(o,Math.min(r,K));function D(K){if(!d||K==null||Number.isNaN(K)){g.classList.remove("is-off-scale");return}let P=d(K),q=P&&P.onScale===!1;g.classList.toggle("is-off-scale",!!q),g.title=q?`Off this project's ${P.base}px rhythm \u2014 ${P.nearest}px is on it.`:""}function oe(K){if(K!==!0&&(document.activeElement===y||y.matches(":focus")))return;let P=e(),q=P==null||Number.isNaN(P);y.value=q?"":String(E(P)),m&&(m.style.display=q?"none":""),D(q?null:E(P)),C.setAttribute("aria-valuenow",q?"":String(E(P))),o!==-1/0&&C.setAttribute("aria-valuemin",String(o)),r!==1/0&&C.setAttribute("aria-valuemax",String(r))}function z(K,P){if(K==null||Number.isNaN(K))return;let q=E(I(K));y.value=String(q),m&&(m.style.display=""),D(q),t(q,n,P)}y.addEventListener("change",()=>z(parseFloat(y.value))),y.addEventListener("blur",()=>oe()),y.addEventListener("keydown",K=>{if(K.key!=="ArrowUp"&&K.key!=="ArrowDown"){K.key==="Enter"&&y.blur();return}K.preventDefault();let P=K.shiftKey?10:K.altKey?.1:1,q=parseFloat(y.value),le=Number.isNaN(q)?e()??u:q;z(le+(K.key==="ArrowUp"?1:-1)*a*P)}),C.addEventListener("keydown",K=>{let P=K.key==="ArrowUp"||K.key==="ArrowRight",q=K.key==="ArrowDown"||K.key==="ArrowLeft";if(!P&&!q)return;K.preventDefault();let le=K.shiftKey?10:K.altKey?.1:1,me=parseFloat(y.value),Ce=Number.isNaN(me)?e()??u:me;z(Ce+(P?1:-1)*a*le)});function Z(K,P){g.classList.toggle("is-scrubbing",K),g.style.setProperty("--agt-fill",K?String(P):"0"),g.dispatchEvent(new CustomEvent("agt-scrub",{bubbles:!0,detail:{active:K}}))}let ge=null;function te(K,P){let q=parseFloat(y.value);if(ge={x:K.clientX,start:Number.isNaN(q)?e()??u:q,live:!P,pointerId:K.pointerId},ge.live){try{g.setPointerCapture(K.pointerId)}catch{}g.classList.add("is-scrubbing"),Z(!0,.5)}}g.addEventListener("pointerdown",K=>{if(K.button!==0)return;let P=K.target===y;P||(K.preventDefault(),(K.target===C||C.contains(K.target))&&C.focus()),te(K,P)}),g.addEventListener("pointermove",K=>{if(!ge)return;let P=K.clientX-ge.x;if(!ge.live){if(Math.abs(P)<4)return;ge.live=!0,y.blur();try{g.setPointerCapture(K.pointerId)}catch{}g.classList.add("is-scrubbing")}let q=K.shiftKey?10:K.altKey?.1:1;Z(!0,Math.max(0,Math.min(1,.5+P/240))),z(ge.start+P*a*q,!0)});let he=K=>{if(!ge)return;let P=ge.live;ge=null,g.classList.remove("is-scrubbing"),Z(!1,0);try{g.releasePointerCapture(K.pointerId)}catch{}P&&z(parseFloat(y.value))};return g.addEventListener("pointerup",he),g.addEventListener("pointercancel",he),oe(),{el:g,refresh:oe,input:y}}function Da({options:e,read:t,write:n}){let o=ae("span",{class:"agt-seg-thumb"}),r=e.map(s=>ae("button",{class:"agt-seg-btn",type:"button",role:"radio","aria-checked":"false",title:s.title||s.value,onclick:()=>{n(s.value),i()}},s.icon?Hn(s.icon,13):ae("span",{text:s.label||s.value}))),a=ae("div",{class:"agt-seg",role:"radiogroup"},[o].concat(r));a.style.setProperty("--agt-seg-n",String(e.length));function i(){let s=t(),l=-1;e.forEach((c,u)=>{let p=w6(s,c);p&&l<0&&(l=u);let d=r[u];d.classList.toggle("is-on",p),d.setAttribute("aria-checked",p?"true":"false")}),o.classList.toggle("is-off",l<0),l>=0&&a.style.setProperty("--agt-seg-i",String(l))}return i(),{el:a,refresh:i}}function w6(e,t){return t.match?t.match.indexOf(e)>=0:e===t.value}function dx(e){let t=e.map(r=>ae("button",{class:"agt-tgl",type:"button",title:r.title,onclick:()=>{r.write(!r.read()),o()}},Hn(r.icon,13))),n=ae("div",{class:"agt-tgl-group"},t);function o(){e.forEach((r,a)=>t[a].classList.toggle("is-on",!!r.read()))}return o(),{el:n,refresh:o}}function ux({options:e,read:t,write:n,wide:o,layer:r}){let a=ae("span",{class:"agt-drop-name"}),i=ae("button",{class:"agt-drop"+(o?" agt-drop--wide":""),type:"button","aria-haspopup":"listbox","aria-expanded":"false"},[a,Hn("chevron",11)]),s=ae("div",{class:"agt-select-wrap"},[i]),l=null;function c(d){let y=e.find(_=>_.value===d);return y?y.label||y.value:d==null||d===""?"\u2014":String(d)}function u(){a.textContent=c(t()),l&&l.sync(t())}function p(){l?.close(),l=null}return i.addEventListener("pointerdown",d=>d.stopPropagation()),i.addEventListener("click",d=>{if(d.preventDefault(),d.stopPropagation(),l){p();return}i.setAttribute("aria-expanded","true"),l=b6({anchor:i,layer:r,options:e,current:t(),onPick:y=>{n(y),u(),p()},onClose:()=>{l=null,i.setAttribute("aria-expanded","false")}})}),u(),{el:s,refresh:u,button:i}}function b6({anchor:e,layer:t,options:n,current:o,onPick:r,onClose:a}){let i=n.map(I=>{let D=I.value===o,oe=ae("button",{class:"agt-menu-item"+(D?" is-on":""),type:"button",role:"option","aria-selected":D?"true":"false",text:I.label||I.value});return oe.addEventListener("pointerdown",z=>z.stopPropagation()),oe.addEventListener("click",z=>{z.preventDefault(),z.stopPropagation(),r(I.value)}),oe}),s=ae("div",{class:"agt-popover agt-menu",role:"listbox"},i),l=e.getRootNode(),c=l.querySelectorAll?l.querySelectorAll(".agt-layer"):[];(t||c[c.length-1]||document.body).appendChild(s);let p=e.getBoundingClientRect(),d=Math.max(140,Math.round(p.width));s.style.minWidth=d+"px";let y=s.getBoundingClientRect().height,_=Math.round(p.right-d);_=Math.max(8,Math.min(_,window.innerWidth-d-8));let C=p.bottom+6,v=C+y>window.innerHeight-8?Math.max(8,p.top-y-6):C;s.style.left=_+"px",s.style.top=Math.round(v)+"px",s.style.transformOrigin=v<p.top?"bottom right":"top right";function m(I){let D=I.composedPath?I.composedPath():[];D.indexOf(s)>=0||D.indexOf(e)>=0||E()}function g(I){I.key==="Escape"&&(E(),e.focus())}function E(){document.removeEventListener("pointerdown",m,!0),document.removeEventListener("keydown",g,!0),s.remove(),a?.()}return setTimeout(()=>{document.addEventListener("pointerdown",m,!0),document.addEventListener("keydown",g,!0)},0),{close:E,sync(I){i.forEach((D,oe)=>{let z=n[oe].value===I;D.classList.toggle("is-on",z),D.setAttribute("aria-selected",z?"true":"false")})}}}function px({options:e,read:t,write:n,layer:o}){let r=ae("span",{class:"agt-font-name"}),a=ae("button",{class:"agt-font",type:"button","aria-haspopup":"listbox","aria-expanded":"false"},[r,Hn("chevron",11)]),i=ae("div",{class:"agt-font-wrap"},[a]),s=null,l=d=>(d||"").split(",")[0].trim().replace(/^["']|["']$/g,"");function c(d){let y=e.find(_=>_.value===d||l(_.value)===l(d));return y?y.label||l(y.value):l(d)||"\u2014"}function u(){let d=t();r.textContent=c(d),r.style.fontFamily=d||"",s&&s.sync(d)}function p(){s?.close(),s=null,a.setAttribute("aria-expanded","false")}return a.addEventListener("click",d=>{if(d.preventDefault(),d.stopPropagation(),s){p();return}a.setAttribute("aria-expanded","true"),s=k6({layer:o,anchor:a,options:e,current:t(),onPick:y=>{n(y),u(),p()},onClose:()=>{s=null,a.setAttribute("aria-expanded","false")}})}),u(),{el:i,refresh:u}}function k6({layer:e,anchor:t,options:n,current:o,onPick:r,onClose:a}){let i=v=>(v||"").split(",")[0].trim().replace(/^["']|["']$/g,""),s=n.map(v=>{let m=i(v.value)===i(o),g=ae("button",{class:"agt-font-item"+(m?" is-on":""),type:"button"},[ae("span",{class:"agt-font-item-name",text:v.label||i(v.value)}),ae("span",{class:"agt-font-item-sample",text:"Ag"})]);return g.style.setProperty("--agt-face",v.value),g.querySelector(".agt-font-item-sample").style.fontFamily=v.value,g.querySelector(".agt-font-item-name").style.fontFamily=v.value,g.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),r(v.value)}),g}),l=ae("div",{class:"agt-popover agt-font-menu"},s);e.appendChild(l);let c=t.getBoundingClientRect(),u=t.closest(".agt-panel"),p=u?u.getBoundingClientRect():c,d=224,y=p.left-d-10;y<8&&(y=p.right+10,y+d>window.innerWidth-8&&(y=Math.max(8,window.innerWidth-d-8))),l.style.left=Math.round(y)+"px",l.style.top=Math.round(Math.max(8,Math.min(c.top-6,window.innerHeight-320)))+"px";function _(v){let m=v.composedPath?v.composedPath():[];m.indexOf(l)>=0||m.indexOf(t)>=0||C()}function C(){document.removeEventListener("pointerdown",_,!0),l.remove(),a?.()}return setTimeout(()=>document.addEventListener("pointerdown",_,!0),0),{close:C,sync(v){s.forEach((m,g)=>{m.classList.toggle("is-on",i(n[g].value)===i(v))})}}}var C6=/^#([0-9a-f]{3,8})$/i,S6=/^(rgba?|hsla?)\(([^)]+)\)$/i;function Mo(e){if(!e)return null;let t=String(e).trim().toLowerCase();if(!t||t==="none")return null;if(t==="transparent")return{r:0,g:0,b:0,a:0};let n=C6.exec(t);if(n){let r=n[1];if(r.length===3||r.length===4){let[a,i,s,l]=r.split("").map(c=>parseInt(c+c,16));return{r:a,g:i,b:s,a:r.length===4?l/255:1}}if(r.length===6||r.length===8){let a=i=>parseInt(r.slice(i,i+2),16);return{r:a(0),g:a(2),b:a(4),a:r.length===8?a(6)/255:1}}return null}let o=S6.exec(t);if(o){let r=o[2].split(/[\s,/]+/).filter(Boolean),a=(s,l)=>s==null?0:s.endsWith("%")?parseFloat(s)/100*l:parseFloat(s);return o[1].startsWith("rgb")?{r:Wn(a(r[0],255)),g:Wn(a(r[1],255)),b:Wn(a(r[2],255)),a:r[3]==null?1:fx(a(r[3],1))}:{...dl(...M6(parseFloat(r[0])||0,(parseFloat(r[1])||0)/100,(parseFloat(r[2])||0)/100)),a:r[3]==null?1:fx(a(r[3],1))}}return null}function Wn(e){return Math.max(0,Math.min(255,Math.round(e)))}function fx(e){return Math.max(0,Math.min(1,e))}function ph({r:e,g:t,b:n}){let o=r=>Wn(r).toString(16).padStart(2,"0");return"#"+o(e)+o(t)+o(n)}function or({r:e,g:t,b:n,a:o}){return o==null||o>=1?`rgb(${Wn(e)}, ${Wn(t)}, ${Wn(n)})`:`rgba(${Wn(e)}, ${Wn(t)}, ${Wn(n)}, ${Math.round(o*1e3)/1e3})`}function mx(e,t){if(t==="rgb")return`${Wn(e.r)}, ${Wn(e.g)}, ${Wn(e.b)}`;if(t==="hsl"){let{h:n,s:o,l:r}=E6(e);return`${Math.round(n)}, ${Math.round(o*100)}%, ${Math.round(r*100)}%`}return ph(e).slice(1).toUpperCase()}function E6({r:e,g:t,b:n}){let{h:o,s:r,v:a}=Oa({r:e,g:t,b:n}),i=a*(1-r/2),s=i===0||i===1?0:(a-i)/Math.min(i,1-i);return{h:o,s,l:i}}function Oa({r:e,g:t,b:n}){let o=e/255,r=t/255,a=n/255,i=Math.max(o,r,a),s=Math.min(o,r,a),l=i-s,c=0;return l!==0&&(i===o?c=(r-a)/l%6:i===r?c=(a-o)/l+2:c=(o-r)/l+4,c*=60,c<0&&(c+=360)),{h:c,s:i===0?0:l/i,v:i}}function dl(e,t,n){let o=n*t,r=o*(1-Math.abs(e/60%2-1)),a=n-o,i;return e<60?i=[o,r,0]:e<120?i=[r,o,0]:e<180?i=[0,o,r]:e<240?i=[0,r,o]:e<300?i=[r,0,o]:i=[o,0,r],{r:Wn((i[0]+a)*255),g:Wn((i[1]+a)*255),b:Wn((i[2]+a)*255)}}function M6(e,t,n){let o=n+t*Math.min(n,1-n);return[e,o===0?0:2*(1-n/o),o]}function uh(e){let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}function hx({r:e,g:t,b:n}){return .2126*uh(e)+.7152*uh(t)+.0722*uh(n)}function gx(e,t){if(!e||!t)return null;let n=e.a==null?1:e.a,o={r:e.r*n+t.r*(1-n),g:e.g*n+t.g*(1-n),b:e.b*n+t.b*(1-n)},r=hx(o),a=hx(t),i=Math.max(r,a),s=Math.min(r,a);return(i+.05)/(s+.05)}function _x(e,t){let n=parseFloat(e)||16,o=parseInt(t,10)||400;return n>=24||n>=18.66&&o>=700?3:4.5}var L6=["color","backgroundColor","borderTopColor"],T6=/^--(agentation|adk|agt)-/;function vx(e){return!e||e==="transparent"||/rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*0\s*\)/.test(e)}function $6(e){if(!e)return!1;let t=e.trim().toLowerCase();return vx(t)?!1:/^#[0-9a-f]{3,8}$/.test(t)||/^(rgb|rgba|hsl|hsla|oklch|oklab|lab|lch|color)\(/.test(t)||/^-?[\d.]+%?\s+[\d.]+%\s+[\d.]+%$/.test(t)}function I6(e){if(!e)return!1;let t=e.trim();return t.length>200?!1:/(serif|sans-serif|monospace|cursive|fantasy|system-ui|ui-)/i.test(t)||/^["'][^"']+["']$/.test(t)}var yx=null;function Ba(e){let t=yx||(yx=document.createElement("span"));return t.style.color="",t.style.color=e,t.style.color||e.trim().toLowerCase()}function ul(e){return e.split(",")[0].trim().replace(/^["']|["']$/g,"").toLowerCase()}function P6(){let e=new Map,t=(a,i)=>{let s=(i??"").trim();!s||s.startsWith("var(")||T6.test(a)||e.has(a)||e.set(a,s)};for(let a of Array.from(document.styleSheets)){let i=a.ownerNode;if(i&&"id"in i&&i.id&&/^(adk|agt|agentation)/.test(i.id))continue;let s;try{s=a.cssRules}catch{continue}if(s)for(let l of Array.from(s)){let c=l,u=c.selectorText;if(!u||!/(^|,)\s*(:root|html|body|\*)\b/.test(u))continue;let p=c.style;if(p)for(let d=0;d<p.length;d+=1){let y=p.item(d);y.startsWith("--")&&t(y,p.getPropertyValue(y))}}}let n=getComputedStyle(document.documentElement);for(let a of Array.from(e.keys())){let i=n.getPropertyValue(a);i&&i.trim()&&e.set(a,i.trim())}let o=[],r=[];for(let[a,i]of e)$6(i)?o.push({name:a,value:i,source:"token"}):I6(i)&&r.push({name:a,value:i,source:"token"});return{colors:o,fonts:r}}function N6(e){let t=new Map,n=new Map,o=(e||document.body).querySelectorAll("*"),r=0;for(let a of o){if(r>=1200)break;if(!(a instanceof HTMLElement)||a.closest('[data-design-edit-panel],[data-adk-wf-chrome],[data-adk-history],[class*="styles-module__"]'))continue;let i=getComputedStyle(a);if(i.display==="none"||i.visibility==="hidden")continue;r+=1;for(let l of L6){let c=i[l];if(!c||vx(c))continue;let u=Ba(c),p=t.get(u)||{value:c,count:0,source:"usage"};p.count+=1,t.set(u,p)}let s=i.fontFamily;if(s){let l=ul(s),c=n.get(l)||{value:s,count:0,source:"usage"};c.count+=1,n.set(l,c)}}return{colors:Array.from(t.values()).filter(a=>a.count>=2),fonts:Array.from(n.values()).filter(a=>a.count>=2)}}var R6=["paddingTop","paddingRight","paddingBottom","paddingLeft","marginTop","marginBottom","gap","rowGap","columnGap"],A6=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius"];function xx(e,t){let n=new Map,o=(t||document.body).querySelectorAll("*"),r=0;for(let a of o){if(r>=1200)break;if(!(a instanceof HTMLElement)||a.closest('[data-design-edit-panel],[data-adk-wf-chrome],[data-adk-history],[class*="styles-module__"]'))continue;let i=getComputedStyle(a);if(i.display!=="none"){r+=1;for(let s of e){let l=parseFloat(i[s]??"");if(!Number.isFinite(l)||l<=0||l>200||Math.abs(l-Math.round(l))>.01)continue;let c=Math.round(l);n.set(c,(n.get(c)??0)+1)}}}return Array.from(n.entries()).filter(([,a])=>a>=2).sort((a,i)=>a[0]-i[0]).map(([a,i])=>({value:a,count:i}))}function D6(e){if(e.length<4)return null;let t=e.reduce((n,o)=>n+o.count,0);for(let n of[8,6,4])if(e.filter(r=>r.value%n===0).reduce((r,a)=>r+a.count,0)/t>=.8)return n;return null}var Pd=null;function rr(e={}){if(Pd&&!e.refresh)return Pd;let t=P6(),n=N6(e.root),o=[],r=new Set;for(let c of t.colors){let u=Ba(c.value);r.has(u)||(r.add(u),o.push(c))}for(let c of n.colors.sort((u,p)=>(p.count??0)-(u.count??0))){let u=Ba(c.value);r.has(u)||(r.add(u),o.push(c))}let a=[],i=new Set;for(let c of t.fonts){let u=ul(c.value);i.has(u)||(i.add(u),a.push(c))}for(let c of n.fonts.sort((u,p)=>(p.count??0)-(u.count??0))){let u=ul(c.value);i.has(u)||(i.add(u),a.push(c))}let s=xx(R6,e.root),l=xx(A6,e.root);return Pd={colors:o.slice(0,18),fonts:a.slice(0,6),spacing:s,radius:l,spacingBase:D6(s)},Pd}function fh(e,t="color"){if(!e)return null;let n=rr(),o=t==="font"?n.fonts:n.colors,r=t==="font"?ul(e):Ba(e);for(let a of o){if(!a.name)continue;if((t==="font"?ul(a.value):Ba(a.value))===r)return{name:a.name,value:a.value}}return null}function wx(){let e=new Map,t=r=>e.set(r,(e.get(r)??0)+1),n=Array.from(document.body.querySelectorAll("[class]")).filter(r=>!r.closest("[data-design-edit-panel],[data-adk-wf-chrome],[data-adk-history]")).slice(0,400);for(let r of n){let a=typeof r.className=="string"?r.className:"";a&&(/styles-module__/.test(a)||((/(^|\s)(sm|md|lg|xl|2xl|hover|focus|active|dark|group-hover):[a-z[-]/.test(a)||/(^|\s)(p|m|px|py|mx|my|gap|text|bg|border|rounded|w|h)-(\d+|\[|px|full|auto)/.test(a))&&t("tailwind"),/[a-zA-Z]+_[a-zA-Z0-9-]+__[A-Za-z0-9_-]{4,}/.test(a)&&t("css-modules"),/(^|\s)sc-[a-zA-Z0-9]{6,}/.test(a)&&t("styled-components"),/(^|\s)css-[a-z0-9]{6,}(\s|$)/.test(a)&&t("emotion"),/(^|\s)(col-(xs|sm|md|lg|xl)-\d+|btn-(primary|secondary|outline-[a-z]+)|navbar-expand-[a-z]+)(\s|$)/.test(a)&&t("bootstrap")))}let o=[];for(let[r,a]of e)a>=3&&o.push(r);return document.querySelector("style[data-styled]")&&o.push("styled-components"),document.querySelector("style[data-emotion]")&&o.push("emotion"),document.querySelector("[data-radix-scope],[data-radix-popper-content-wrapper]")&&o.push("radix"),rr().colors.some(r=>r.name)&&o.push("css-variables"),Array.from(new Set(o))}function Nd(e){let n=rr().spacingBase,o=typeof e=="number"?e:parseFloat(e);return!Number.isFinite(o)||o<=0?{onScale:!0,base:n,nearest:null}:n?o%n===0?{onScale:!0,base:n,nearest:o}:{onScale:!1,base:n,nearest:Math.max(n,Math.round(o/n)*n)}:{onScale:!0,base:null,nearest:null}}function bx(e){if(!e)return!0;let t=Ba(e);return rr().colors.some(n=>Ba(n.value)===t)}var O6="linear-gradient(45deg,var(--checker) 25%,transparent 25%,transparent 75%,var(--checker) 75%),linear-gradient(45deg,var(--checker) 25%,transparent 25%,transparent 75%,var(--checker) 75%)";function pl({read:e,write:t,layer:n,compact:o}){let r=ae("button",{class:"agt-swatch",type:"button",title:"Pick a colour"},[ae("span",{class:"agt-swatch-fill"})]),a=ae("input",{class:"agt-hex",type:"text",spellcheck:"false",placeholder:"\u2014"}),i=ae("input",{class:"agt-alpha",type:"text",spellcheck:"false",placeholder:"100"}),s=ae("div",{class:"agt-color"+(o?" agt-color--compact":"")},[r,a,!o&&ae("div",{class:"agt-alpha-wrap"},[i,ae("span",{class:"agt-unit",text:"%"})])]),l=null;function c(){return Mo(e())||{r:0,g:0,b:0,a:0}}function u(d){let y=c(),_=r.firstChild;_.style.background=or(y),r.style.backgroundImage=O6,r.style.backgroundSize="6px 6px",r.style.backgroundPosition="0 0, 3px 3px",(d===!0||!a.matches(":focus"))&&(a.value=y.a===0&&!e()?"":ph(y).slice(1).toUpperCase()),(d===!0||!i.matches(":focus"))&&(i.value=String(Math.round(y.a*100))),l&&l.sync(y)}function p(d){t(or(d)),u()}return a.addEventListener("change",()=>{let d=Mo("#"+a.value.replace(/^#/,""));d?p({...d,a:c().a}):u()}),i.addEventListener("change",()=>{let d=parseFloat(i.value);if(Number.isNaN(d))return u();p({...c(),a:Math.max(0,Math.min(100,d))/100})}),r.addEventListener("click",d=>{if(d.preventDefault(),l){l.close();return}l=B6({layer:n,anchor:r,initial:c(),onChange:p,onClose:()=>{l=null}})}),u(),{el:s,refresh:u}}function B6({layer:e,anchor:t,initial:n,onChange:o,onClose:r}){let a=Oa(n),i=n.a,s=ae("div",{class:"agt-pk-cursor"}),l=ae("div",{class:"agt-pk-sat"},[ae("div",{class:"agt-pk-sat-white"}),ae("div",{class:"agt-pk-sat-black"}),s]),c=ae("div",{class:"agt-pk-thumb"}),u=ae("div",{class:"agt-pk-rail agt-pk-hue"},[c]),p=ae("div",{class:"agt-pk-alpha-fill"}),d=ae("div",{class:"agt-pk-thumb"}),y=ae("div",{class:"agt-pk-rail agt-pk-alpha"},[p,d]),_=ae("input",{class:"agt-pk-hex",type:"text",spellcheck:"false"}),C=ae("div",{class:"agt-pk-preview"}),v=ae("input",{class:"agt-pk-op-input",type:"text",spellcheck:"false"}),m="hex",g=ae("select",{},[ae("option",{value:"hex",text:"Hex"}),ae("option",{value:"rgb",text:"RGB"}),ae("option",{value:"hsl",text:"HSL"})]),E=ae("span",{class:"agt-pk-hash",text:"#"});g.addEventListener("change",()=>{m=g.value,E.style.display=m==="hex"?"":"none",K()});let I=window,D=I.EyeDropper?ae("button",{class:"agt-pk-dropper",type:"button",title:"Pick a colour from the page"},Hn("dropper",14)):null;D&&D.addEventListener("click",async B=>{B.preventDefault(),B.stopPropagation();try{let Y=await new I.EyeDropper().open(),Se=Mo(Y.sRGBHex);if(!Se)return;let nt=Oa(Se);a={h:nt.h,s:nt.s,v:nt.v},K(),he()}catch{}});let z=rr().colors.map(B=>{let Y=Mo(B.value);if(!Y)return null;let Se=ae("button",{class:"agt-pk-tok",type:"button",title:B.name?`${B.name} \u2014 ${B.value}`:B.value});return Se.style.background=or(Y),Se.addEventListener("click",nt=>{nt.preventDefault(),nt.stopPropagation();let ht=Oa(Y);a={h:ht.h,s:ht.s,v:ht.v},i=Y.a,K(),he()}),Se}).filter(Boolean),Z=ae("div",{class:"agt-pk-off",hidden:"true"},[Hn("info",12),ae("span",{text:"Not a colour this project uses"})]),ge=z.length?ae("div",{class:"agt-pk-palette"},[ae("div",{class:"agt-pk-palette-title",text:"In this project"}),ae("div",{class:"agt-pk-palette-row"},z),Z]):null,te=ae("div",{class:"agt-popover agt-pk"},[ae("div",{class:"agt-pk-foot"},[ae("div",{class:"agt-pk-fmt"},[g,Hn("chevron",12)]),ae("div",{class:"agt-pk-val"},[E,_])]),l,ae("div",{class:"agt-pk-rails"},[C,ae("div",{class:"agt-pk-rails-col"},[u]),D]),ge,ae("div",{class:"agt-pk-op"},[ae("span",{class:"agt-pk-op-label",text:"Opacity"}),ae("div",{class:"agt-pk-op-val"},[v,ae("span",{class:"agt-unit",text:"%"})])])]);e.appendChild(te),z6(te,t);function he(){let B=dl(a.h,a.s,a.v);o({...B,a:i})}function K(){let B=dl(a.h,1,1);l.style.background=or({...B,a:1}),s.style.left=a.s*100+"%",s.style.top=(1-a.v)*100+"%";let Y=dl(a.h,a.s,a.v);if(s.style.background=or({...Y,a:1}),c.style.left=a.h/360*100+"%",d.style.left=i*100+"%",p.style.background=`linear-gradient(to right, ${or({...Y,a:0})}, ${or({...Y,a:1})})`,C.style.background=or({...Y,a:i}),Z){let Se=i===0||bx(or({...Y,a:1}));Z.hidden=Se}document.activeElement!==_&&(_.value=mx(Y,m)),document.activeElement!==v&&(v.value=String(Math.round(i*100)))}function P(B){let Y=B.trim();return m==="rgb"?Mo("rgb("+Y+")"):m==="hsl"?Mo("hsl("+Y+")"):Mo("#"+Y.replace(/^#/,""))}v.addEventListener("change",()=>{let B=parseFloat(v.value);if(Number.isNaN(B))return K();i=Math.max(0,Math.min(100,B))/100,K(),he()});function q(B,Y){B.addEventListener("pointerdown",Se=>{Se.preventDefault(),B.setPointerCapture(Se.pointerId);let nt=We=>{let ut=B.getBoundingClientRect();Y(Math.max(0,Math.min(1,(We.clientX-ut.left)/ut.width)),Math.max(0,Math.min(1,(We.clientY-ut.top)/ut.height))),K(),he()};nt(Se);let ht=We=>{B.removeEventListener("pointermove",nt),B.removeEventListener("pointerup",ht);try{B.releasePointerCapture(We.pointerId)}catch{}};B.addEventListener("pointermove",nt),B.addEventListener("pointerup",ht)})}q(l,(B,Y)=>{a={...a,s:B,v:1-Y}}),q(u,B=>{a={...a,h:B*360}}),q(y,B=>{i=B}),_.addEventListener("change",()=>{let B=P(_.value);if(!B)return K();a=Oa(B),K(),he()});function le(B){let Y=B.composedPath?B.composedPath():[];Y.indexOf(te)>=0||Y.indexOf(t)>=0||Ce()}function me(B){B.key==="Escape"&&(B.stopPropagation(),Ce())}function Ce(){document.removeEventListener("pointerdown",le,!0),document.removeEventListener("keydown",me,!0),te.remove(),r()}return setTimeout(()=>{document.addEventListener("pointerdown",le,!0),document.addEventListener("keydown",me,!0)},0),K(),{close:Ce,sync(B){document.activeElement!==_&&(a=Oa(B),i=B.a,K())}}}function z6(e,t){let n=t.getBoundingClientRect(),o=t.closest(".agt-panel"),r=o?o.getBoundingClientRect():n,a=e.offsetWidth||268,i=e.offsetHeight||408,s=10,l=r.left-a-s;l<8&&(l=r.right+s,l+a>window.innerWidth-8&&(l=Math.max(8,window.innerWidth-a-8)));let c=Math.max(8,Math.min(n.top-4,window.innerHeight-i-8));e.style.left=Math.round(l)+"px",e.style.top=Math.round(c)+"px"}var F6=[{value:"system-ui, sans-serif",label:"System"},{value:"-apple-system, BlinkMacSystemFont, sans-serif",label:"SF Pro"},{value:"Helvetica, Arial, sans-serif",label:"Helvetica"},{value:"Georgia, serif",label:"Georgia"},{value:'"Times New Roman", serif',label:"Times"},{value:"ui-monospace, Menlo, monospace",label:"Mono"}],H6=["solid","dashed","dotted","double","none"];function Qn(e,t){let n=parseFloat(e.getPropertyValue(t));return Number.isNaN(n)?null:n}function W6(e){let t=e.getPropertyValue("backdrop-filter")||e.getPropertyValue("-webkit-backdrop-filter")||"",n=/blur\(([\d.]+)px\)/.exec(t);return n?parseFloat(n[1]):0}function kx(e){if(!e||e==="none")return null;let t=/^(rgba?\([^)]+\)|#[0-9a-f]{3,8})/i.exec(e.trim()),o=((t?e.trim().slice(t[0].length):e).match(/-?[\d.]+px/g)||[]).map(parseFloat);return{color:t?t[1]:"rgba(0, 0, 0, 0.25)",x:o[0]||0,y:o[1]||0,blur:o[2]||0,spread:o[3]||0}}function j6(e){for(let t of e.childNodes)if(t.nodeType===3&&t.nodeValue&&t.nodeValue.trim())return!0;return!1}function Cx(e){let t=e.tagName.toLowerCase(),n=e.id?"#"+e.id:"",o=typeof e.className=="string"?e.className.trim().split(/\s+/).filter(Boolean).slice(0,2).map(r=>"."+r).join(""):"";return t+n+o}function za(e,t){let n=ae("div",{class:"agt-sec-body"}),o=ae("div",{class:"agt-sec-head"},[ae("div",{class:"agt-sec-title adk-section-title",text:e})]),r=ae("div",{class:"agt-sec"},[o,n]);if(t&&t.onAdd){let a=ae("button",{class:"agt-sec-add",type:"button",title:"Add"},Hn("plus",12));a.addEventListener("pointerdown",i=>i.stopPropagation()),a.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation(),t.onAdd()}),o.appendChild(a)}return{el:r,body:n,head:o}}function U6(e){let t=a=>String(a||"0s").split(",").map(i=>{let s=parseFloat(i);return Number.isNaN(s)?0:/ms\s*$/.test(i)?s:s*1e3}),n=t(e.transitionDuration),o=t(e.transitionDelay),r=0;for(let a=0;a<n.length;a++){let i=(n[a]??0)+(o[a%o.length]??0);i>r&&(r=i)}return r}function Sx({onCommit:e,onRevert:t,onSubmit:n,onExit:o,onCopy:r,getRecordCount:a,getEditedProps:i,onRevertProp:s,accent:l,states:c,getState:u,setState:p,styleFor:d,describe:y}){let _=document.createElement("div");_.setAttribute("data-design-edit-panel","");let C=_.attachShadow({mode:"open"}),v=document.createElement("style");v.textContent=lx,C.appendChild(v),Ka(C),l&&(_.style.setProperty("--accent",l),_.style.setProperty("--adk-accent",l),_.style.setProperty("--select",l));function m(){return Po(null)}function g(){let w=m();_.dataset.theme!==w&&(_.dataset.theme=w)}g();let E=new MutationObserver(g);E.observe(document.documentElement,{subtree:!0,attributes:!0,attributeFilter:["data-agentation-theme"]}),requestAnimationFrame(g);let I=ae("div",{class:"agt-head-tag adk-title",text:"No selection","data-adk-empty-selection":""}),D=ae("div",{class:"agt-head-sub adk-subtitle",text:"Click an element on the page","data-adk-empty-selection":""}),oe=ae("span",{class:"agt-status-txt",text:"Adjust"}),z=ae("div",{class:"agt-status agt-status--idle",role:"status"},[ae("span",{class:"agt-status-badge"},Hn("sparkle",9)),(()=>{let w=Hn("check",10);return w.setAttribute("class","agt-status-check"),w})(),oe]),Z=ae("div",{class:"agt-head adk-head"},[ae("div",{class:"agt-head-dot"}),ae("div",{class:"agt-head-txt"},[I,D]),z]),ge=ae("button",{class:"agt-tab adk-seg-btn is-on",type:"button",text:"Style"}),te=ae("button",{class:"agt-tab adk-seg-btn",type:"button",text:"Layout"}),he=ae("span",{class:"agt-seg-thumb"}),K=ae("div",{class:"agt-tabs adk-seg"},[he,ge,te]);K.style.setProperty("--agt-seg-n","2"),K.style.setProperty("--agt-seg-i","0");let P=ae("div",{class:"agt-body"}),q=ae("div",{class:"agt-empty adk-empty",text:"Click any element on the page to inspect and restyle it."}),le=ae("button",{class:"agt-btn agt-btn--ghost",type:"button",text:"Revert"}),me=ae("button",{class:"agt-btn agt-btn--primary",type:"button",text:"Add"}),Ce=ae("div",{class:"agt-foot"},[le,me]),B=null;if(c&&c.length>1&&u&&p){let w=c.map(X=>ae("button",{class:"agt-state adk-seg-btn"+(X.id===u()?" is-on":""),type:"button","data-state":X.id,title:X.pseudo?`Design the ${X.pseudo} state`:"Design the resting state",text:X.label})),M=ae("span",{class:"agt-seg-thumb"}),H=ae("div",{class:"agt-states adk-seg",role:"radiogroup"},[M].concat(w));B=H,H.style.setProperty("--agt-seg-n",String(c.length)),H.style.gridTemplateColumns=`repeat(${c.length}, minmax(0, 1fr))`;let W=()=>{let X=c.findIndex(ee=>ee.id===u());M.classList.toggle("is-off",X<0),X>=0&&H.style.setProperty("--agt-seg-i",String(X)),H.classList.toggle("is-stateful",u()!=="default")};W();for(let X of w)X.setAttribute("role","radio"),X.setAttribute("aria-checked",X.dataset.state===u()?"true":"false"),X.addEventListener("click",ee=>{ee.preventDefault(),ee.stopPropagation(),p(X.dataset.state);for(let U of w){let ue=U===X;U.classList.toggle("is-on",ue),U.setAttribute("aria-checked",ue?"true":"false")}W()})}let Y=ae("div",{class:"agt-panel adk-panel"},B?[Z,K,B,P,Ce]:[Z,K,P,Ce]);le.addEventListener("click",()=>t&&t()),me.addEventListener("click",()=>n&&n());let Se=ae("div",{class:"agt-layer"}),nt=ae("div",{class:"agt-layer"});C.appendChild(Y),C.appendChild(nt),C.appendChild(Se);let ht=[];function We(){let w=new Set(i?i():[]);if(nt.replaceChildren(),ht=[],!Ze||!w.size)return;let M=Y.getBoundingClientRect(),H=P.getBoundingClientRect(),W=P.querySelectorAll(".agt-row");W.forEach(X=>{let ee=X.__agtProps||[],U=ee.some(ne=>w.has(ne));X.classList.toggle("is-edited",U);let ue=X.querySelector(".agt-pair");ue&&[...ue.children].forEach((ne,Ne)=>{ne.classList.toggle("is-edited",!!ee[Ne]&&w.has(ee[Ne]))})});for(let X of W){let ee=(X.__agtProps||[]).filter(ne=>w.has(ne));if(!ee.length)continue;let U=X.getBoundingClientRect();if(U.bottom<H.top+2||U.top>H.bottom-2)continue;let ue=ae("button",{class:"agt-undo",type:"button",title:"Undo "+ee.join(", "),onclick:()=>{for(let ne of ee)s&&s(ne)}},Hn("undo",13));ue.style.left=Math.round(M.left-18)+"px",ue.style.top=Math.round(U.top+(U.height-36)/2)+"px",nt.appendChild(ue),ht.push(ue)}}P.addEventListener("scroll",We),window.addEventListener("scroll",We,!0),window.addEventListener("resize",We);function ut(w,M,H={}){let W=H.axis||"both",X=null;M.addEventListener("pointerdown",U=>{if(U.button!==0)return;let ue=w.getBoundingClientRect();X={dx:U.clientX-ue.left,dy:U.clientY-ue.top,w:ue.width,h:ue.height,x0:U.clientX,y0:U.clientY,live:!1}}),M.addEventListener("pointermove",U=>{if(X){if(!X.live){if(Math.abs(U.clientX-X.x0)+Math.abs(U.clientY-X.y0)<3)return;X.live=!0,w.classList.add("is-dragging"),W!=="x"&&w===Y&&(w.style.height=X.h+"px",w.style.bottom="auto");try{M.setPointerCapture(U.pointerId)}catch{}}if(w.style.right="auto",w.style.transform="none",w.style.left=Math.max(0,Math.min(window.innerWidth-X.w-8,U.clientX-X.dx))+"px",W!=="x"){let ue=Math.max(8,Math.min(window.innerHeight-40,U.clientY-X.dy));w.style.top=ue+"px",w===Y&&(w.style.height=Math.max(180,Math.min(X.h,window.innerHeight-ue-8))+"px")}w===Y&&We()}});let ee=U=>{if(!X)return;let ue=X.live;X=null,w.classList.remove("is-dragging");try{M.releasePointerCapture(U.pointerId)}catch{}ue&&M.addEventListener("click",ne=>{ne.stopPropagation(),ne.preventDefault()},{capture:!0,once:!0})};M.addEventListener("pointerup",ee),M.addEventListener("pointercancel",ee)}ut(Y,Z,{axis:"both"});let pt=ae("div",{class:"agt-panel-grip",title:"Resize the inspector"});Y.appendChild(pt),pt.addEventListener("pointerdown",w=>{if(w.button!==0)return;w.preventDefault(),w.stopPropagation();let M=w.clientX,H=Y.getBoundingClientRect().width;Y.classList.add("is-resizing");try{pt.setPointerCapture(w.pointerId)}catch{}let W=ee=>{let U=Math.max(300,Math.min(640,H-(ee.clientX-M)));Y.style.width=U+"px",_.style.setProperty("--agt-panel-w",U+"px"),We()},X=ee=>{Y.classList.remove("is-resizing");try{pt.releasePointerCapture(ee.pointerId)}catch{}pt.removeEventListener("pointermove",W),pt.removeEventListener("pointerup",X),pt.removeEventListener("pointercancel",X)};pt.addEventListener("pointermove",W),pt.addEventListener("pointerup",X),pt.addEventListener("pointercancel",X)});let Ze=null,kt="style",Et=[],it=null,ct={border:!1,shadow:!1,radiusPerCorner:!1,paddingLinked:!1,marginLinked:!1};ge.addEventListener("click",()=>{kt="style",Wt(),V()}),te.addEventListener("click",()=>{kt="layout",Wt(),V()});function Wt(){ge.classList.toggle("is-on",kt==="style"),te.classList.toggle("is-on",kt==="layout"),K.style.setProperty("--agt-seg-i",kt==="style"?"0":"1")}function Xt(w){let M=w;for(;M&&M!==document.documentElement;){let H=window.getComputedStyle(M).backgroundColor,W=Mo(H);if(W&&W.a>.05)return H;M=M.parentElement}return"#ffffff"}function je(){return d?d(Ze):window.getComputedStyle(Ze)}function Ye(w,M,H){Ze&&(e(w,"",M),H||pn(),Pe())}function pn(w){for(let M of Et)try{M(w===!0)}catch{}We(),Bt(w===!0)}function Bt(w){if(it&&clearTimeout(it),it=null,!Ze||!Ze.isConnected)return;let M=U6(window.getComputedStyle(Ze));M&&(it=setTimeout(()=>{it=null;for(let H of Et)try{H(w)}catch{}We()},Math.min(M,2e3)+34))}function Be(w){return Et.push(w.refresh),w.el}function De(w,M,H){let W=H||{};return Yt(w,Be(kn({unit:W.unit||"px",min:W.min==null?0:W.min,max:W.max,step:W.step||1,precision:W.precision||0,read:()=>W.read?W.read(je()):Qn(je(),M),write:(X,ee,U)=>Ye(M,W.write?W.write(X):X+ee,U)})))}function de(){let w=[],M=je(),H=za("Appearance");H.body.appendChild(Yt("Color",Be(pl({layer:Se,read:()=>je().getPropertyValue("background-color"),write:ne=>Ye("background-color",ne)})),{props:"background-color"}));let W=Da({options:[{value:"all",icon:"cornerAll",title:"One radius for every corner"},{value:"split",icon:"cornerSplit",title:"Set each corner separately"}],read:()=>ct.radiusPerCorner?"split":"all",write:ne=>{ct.radiusPerCorner=ne==="split",V()}});if(W.el.classList.add("agt-seg--mini"),!ct.radiusPerCorner)H.body.appendChild(Yt("Corner Radius",[Be(kn({iconPrefix:"corners",title:"Corner radius",scale:Nd,read:()=>Qn(je(),"border-top-left-radius"),write:(ne,Ne,Me)=>Ye("border-radius",ne+Ne,Me)})),W.el],{props:"border-radius"}));else{H.body.appendChild(Yt("Corner Radius",W.el));let ne=[["border-top-left-radius","TL"],["border-top-right-radius","TR"],["border-bottom-left-radius","BL"],["border-bottom-right-radius","BR"]];for(let Ne of[ne.slice(0,2),ne.slice(2)])H.body.appendChild(Yt("",ae("div",{class:"agt-pair"},Ne.map(([Me,ke])=>Be(kn({prefix:ke,title:ke,read:()=>Qn(je(),Me),write:(Ue,at,Fe)=>Ye(Me,Ue+at,Fe)})))),{props:Ne.map(([Me])=>Me)}))}if(H.body.appendChild(Yt("Backdrop Blur",Be(kn({iconPrefix:"blur",title:"Backdrop blur",read:()=>W6(je()),write:(ne,Ne,Me)=>Ye("backdrop-filter",ne>0?`blur(${ne}px)`:"none",Me)})),{props:"backdrop-filter"})),H.body.appendChild(Yt("Opacity",Be(kn({unit:"%",iconPrefix:"opacity",title:"Opacity",min:0,max:100,read:()=>Math.round((Qn(je(),"opacity")??1)*100),write:(ne,Ne,Me)=>Ye("opacity",String(ne/100),Me)})),{props:"opacity"})),w.push(H.el),j6(Ze)){let ne=za("Text"),Ne=ie=>ie.split(",")[0].trim().replace(/["']/g,""),Me=[],ke=new Set,Ue=(ie,st)=>{if(!ie)return;let Ge=Ne(ie).toLowerCase();ke.has(Ge)||(ke.add(Ge),Me.push({value:ie,label:st||Ne(ie)}))},at=M.getPropertyValue("font-family");Ue(at);for(let ie of rr().fonts)Ue(ie.value,ie.name?`${Ne(ie.value)} \xB7 ${ie.name}`:void 0);for(let ie of F6)Ue(ie.value,ie.label);ne.body.appendChild(Yt("Typeface",Be(px({options:Me,layer:Se,read:()=>je().getPropertyValue("font-family"),write:ie=>Ye("font-family",ie)})),{props:"font-family"})),ne.body.appendChild(Yt("Style",[Be(dx([{icon:"italic",title:"Italic",read:()=>je().getPropertyValue("font-style")==="italic",write:ie=>Ye("font-style",ie?"italic":"normal")},{icon:"underline",title:"Underline",read:()=>je().getPropertyValue("text-decoration-line").indexOf("underline")>=0,write:ie=>Ye("text-decoration-line",ie?"underline":"none")},{icon:"strike",title:"Strikethrough",read:()=>je().getPropertyValue("text-decoration-line").indexOf("line-through")>=0,write:ie=>Ye("text-decoration-line",ie?"line-through":"none")}])),Be(Da({options:[{value:"left",icon:"alignLeft",title:"Align left",match:["left","start","justify"]},{value:"center",icon:"alignCenter",title:"Align centre"},{value:"right",icon:"alignRight",title:"Align right",match:["right","end"]}],read:()=>je().getPropertyValue("text-align"),write:ie=>Ye("text-align",ie)}))],{props:["font-style","text-decoration-line","text-align"]})),ne.body.appendChild(Yt("Size",ae("div",{class:"agt-pair"},[Be(kn({iconPrefix:"fontSize",title:"Font size",min:1,read:()=>Qn(je(),"font-size"),write:(ie,st,Ge)=>Ye("font-size",ie+st,Ge)})),Be(kn({iconPrefix:"weight",title:"Font weight",unit:"",min:100,max:900,step:100,fallback:400,read:()=>parseInt(je().getPropertyValue("font-weight"),10)||null,write:(ie,st,Ge)=>Ye("font-weight",String(Math.round(ie/100)*100),Ge)}))]),{props:["font-size","font-weight"]})),ne.body.appendChild(Yt("Spacing",ae("div",{class:"agt-pair"},[Be(kn({unit:"%",iconPrefix:"lineHeight",title:"Line height",min:0,max:400,placeholder:"auto",fallback:120,read:()=>{let ie=Qn(je(),"line-height"),st=Qn(je(),"font-size")||16;return ie==null?null:Math.round(ie/st*100)},write:(ie,st,Ge)=>Ye("line-height",ie+"%",Ge)})),Be(kn({unit:"%",iconPrefix:"letterSpacing",title:"Letter spacing",min:-50,max:100,precision:1,read:()=>{let ie=Qn(je(),"font-size")||16,st=Qn(je(),"letter-spacing");return st==null?0:Math.round(st/ie*1e3)/10},write:(ie,st,Ge)=>Ye("letter-spacing",Math.round(ie/100*1e3)/1e3+"em",Ge)}))]),{props:["line-height","letter-spacing"]})),ne.body.appendChild(Yt("Color",Be(pl({layer:Se,read:()=>je().getPropertyValue("color"),write:ie=>Ye("color",ie)})),{props:"color"}));let Fe=ae("div",{class:"agt-contrast"});ne.body.appendChild(Fe),Be({el:Fe,refresh(){let ie=je(),st=Mo(ie.getPropertyValue("color")),Ge=Mo(Xt(Ze)),Je=gx(st,Ge);if(!Je){Fe.textContent="",Fe.className="agt-contrast";return}let ft=_x(ie.getPropertyValue("font-size"),ie.getPropertyValue("font-weight")),Xe=Je>=ft;Fe.className="agt-contrast"+(Xe?" is-pass":" is-fail"),Fe.textContent=Xe?`Contrast ${Je.toFixed(1)}:1 \u2014 readable (needs ${ft}:1)`:`Contrast ${Je.toFixed(1)}:1 \u2014 too low, needs ${ft}:1`}}),w.push(ne.el)}let X=(Qn(M,"border-top-width")||0)>0&&M.getPropertyValue("border-top-style")!=="none",ee=za("Border",{onAdd:()=>{X?ct.border=!ct.border:(ct.border=!0,Ye("border","1px solid "+(je().getPropertyValue("color")||"currentColor"))),V()}});(ct.border||X)&&(ct.border=!0,ee.body.appendChild(Yt("Width",Be(kn({read:()=>Qn(je(),"border-top-width"),write:(ne,Ne,Me)=>Ye("border-width",ne+Ne,Me)})),{props:"border-width"})),ee.body.appendChild(Yt("Style",Be(ux({layer:Se,options:H6.map(ne=>({value:ne,label:ne})),read:()=>je().getPropertyValue("border-top-style"),write:ne=>Ye("border-style",ne)})),{props:"border-style"})),ee.body.appendChild(Yt("Color",Be(pl({layer:Se,read:()=>je().getPropertyValue("border-top-color"),write:ne=>Ye("border-color",ne)})),{props:"border-color"}))),w.push(ee.el);let U=kx(M.getPropertyValue("box-shadow")),ue=za("Shadow",{onAdd:()=>{U?ct.shadow=!ct.shadow:(ct.shadow=!0,Ye("box-shadow","rgba(0, 0, 0, 0.18) 0px 8px 24px 0px")),V()}});if(ct.shadow||U){ct.shadow=!0;let ne=()=>kx(je().getPropertyValue("box-shadow"))||{x:0,y:0,blur:0,spread:0,color:"rgba(0, 0, 0, 0.18)"},Ne=(Me,ke)=>{let Ue={...ne(),...Me};Ye("box-shadow",`${Ue.color} ${Ue.x}px ${Ue.y}px ${Ue.blur}px ${Ue.spread}px`,ke)};ue.body.appendChild(Yt("Offset",ae("div",{class:"agt-pair"},[Be(kn({prefix:"X",min:-999,read:()=>ne().x,write:(Me,ke,Ue)=>Ne({x:Me},Ue)})),Be(kn({prefix:"Y",min:-999,read:()=>ne().y,write:(Me,ke,Ue)=>Ne({y:Me},Ue)}))]),{props:["box-shadow","box-shadow"]})),ue.body.appendChild(Yt("Blur",ae("div",{class:"agt-pair"},[Be(kn({prefix:"B",read:()=>ne().blur,write:(Me,ke,Ue)=>Ne({blur:Me},Ue)})),Be(kn({prefix:"S",min:-999,read:()=>ne().spread,write:(Me,ke,Ue)=>Ne({spread:Me},Ue)}))]),{props:["box-shadow","box-shadow"]})),ue.body.appendChild(Yt("Color",Be(pl({layer:Se,read:()=>ne().color,write:Me=>Ne({color:Me})})),{props:"box-shadow"}))}return w.push(ue.el),w}function ze(){let w=[],H=je().getPropertyValue("display"),W=H.indexOf("flex")>=0||H.indexOf("grid")>=0,X=za("Size");if(X.body.appendChild(Yt("Width",Be(kn({title:"Width",precision:1,read:()=>Qn(je(),"width"),write:(ee,U,ue)=>Ye("width",ee+U,ue)})),{props:"width"})),X.body.appendChild(Yt("Height",Be(kn({title:"Height",precision:1,read:()=>Qn(je(),"height"),write:(ee,U,ue)=>Ye("height",ee+U,ue)})),{props:"height"})),X.body.appendChild(De("Min Width","min-width")),w.push(X.el),W){let ee=za("Flex");ee.body.appendChild(Yt("Direction",Be(Da({options:[{value:"row",icon:"rowDir",title:"Row",match:["row","row-reverse"]},{value:"column",icon:"colDir",title:"Column",match:["column","column-reverse"]}],read:()=>je().getPropertyValue("flex-direction"),write:U=>Ye("flex-direction",U)})),{props:"flex-direction"})),ee.body.appendChild(Yt("H Align",Be(Da({options:[{value:"flex-start",icon:"alignLeft",title:"Start",match:["flex-start","start","normal","left"]},{value:"center",icon:"alignCenter",title:"Centre"},{value:"flex-end",icon:"alignRight",title:"End",match:["flex-end","end","right"]}],read:()=>je().getPropertyValue("justify-content"),write:U=>Ye("justify-content",U)})),{props:"justify-content"})),ee.body.appendChild(Yt("V Align",Be(Da({options:[{value:"flex-start",icon:"alignLeft",title:"Start",match:["flex-start","start","normal","stretch"]},{value:"center",icon:"alignCenter",title:"Centre"},{value:"flex-end",icon:"alignRight",title:"End",match:["flex-end","end"]}],read:()=>je().getPropertyValue("align-items"),write:U=>Ye("align-items",U)})),{props:"align-items"})),ee.body.appendChild(Yt("Gap",Be(kn({iconPrefix:"gap",title:"Gap",min:0,scale:Nd,read:()=>Qn(je(),"row-gap"),write:(U,ue,ne)=>Ye("gap",U+ue,ne)})),{props:"gap"})),w.push(ee.el)}return w.push(R("Padding","padding").el),w.push(R("Margin","margin",{min:-999}).el),w}function R(w,M,H){let W=H||{},X=za(w),ee=M==="padding"?"paddingLinked":"marginLinked",U=["top","right","bottom","left"],ue=Me=>M+"-"+Me,ne=Da({options:[{value:"all",icon:"boxAll",title:"One value for every side"},{value:"split",icon:"boxSplit",title:"Set each side separately"}],read:()=>ct[ee]?"all":"split",write:Me=>{ct[ee]=Me==="all",V()}});ne.el.classList.add("agt-seg--mini"),X.head.appendChild(ae("div",{class:"agt-sec-tools"},ne.el));let Ne=ae("div",{class:"agt-box"},[ae("div",{class:"agt-box-inner"})]);for(let Me of U){let ke=kn({min:W.min==null?0:W.min,unit:"px",prefix:"",title:w+" "+Me,scale:Nd,read:()=>Qn(je(),ue(Me)),write:(Ue,at,Fe)=>Ye(ct[ee]?M:ue(Me),Ue+at,Fe)});Et.push(ke.refresh),Ne.appendChild(ae("div",{class:"agt-box-side agt-box-"+Me},ke.el))}return Ne.appendChild(ae("button",{class:"agt-box-link"+(ct[ee]?" is-on":""),type:"button","aria-pressed":ct[ee]?"true":"false","aria-label":w+": link all sides",title:ct[ee]?"All sides linked":"Link all sides","data-box-link":M,onclick:()=>{ct[ee]=!ct[ee],V(),P.querySelector(`[data-box-link="${M}"]`)?.focus({preventScroll:!0})}},Hn(ct[ee]?"link":"unlink",13))),X.body.appendChild(Ne),X}function A(w){let M=Y.getBoundingClientRect().height;Y.style.height="",Y.classList.remove("is-resizing"),w();let H=Y.getBoundingClientRect().height;if(Math.abs(H-M)<2)return;Y.style.height=M+"px",Y.offsetHeight,Y.classList.add("is-resizing"),Y.style.height=H+"px";let W=()=>{Y.removeEventListener("transitionend",W),Y.classList.remove("is-resizing"),Y.style.height="",We()};Y.addEventListener("transitionend",W)}function V(){g(),A(()=>{if(Et=[],P.replaceChildren(),be(),!Ze||!Ze.isConnected){P.appendChild(q),I.setAttribute("data-adk-empty-selection",""),D.setAttribute("data-adk-empty-selection",""),I.textContent="No selection",D.textContent="Click an element on the page",le.disabled=!1;return}I.removeAttribute("data-adk-empty-selection"),D.removeAttribute("data-adk-empty-selection");let w=y?y(Ze):null;I.textContent=w?w.kind+(w.text?" \xB7 \u201C"+w.text+"\u201D":""):Cx(Ze);let M=[];w&&M.push(Cx(Ze)),Ze.__agtComponent&&M.push("<"+Ze.__agtComponent+">"),M.push(je().getPropertyValue("display")),D.textContent=M.join("  \xB7  ");for(let H of kt==="style"?de():ze())P.appendChild(H)}),We()}function be(){let M=(a?a():0)>0||!!(Ze&&Ze.isConnected);z.hidden=!M}let fe="Adjust";function Pe(){let w=a?a():0;me.disabled=w===0,be();let M=w===0?"Adjust":w===1?"Edited":w+" edits";M!==fe&&(fe=M,oe.textContent=M,z.className="agt-status "+(w===0?"agt-status--idle":"agt-status--done"))}let Ee=["mousemove","mouseover","mouseout","pointermove"],xe=w=>w.stopPropagation();for(let w of Ee)_.addEventListener(w,xe);return document.body.appendChild(_),V(),Pe(),{host:_,setSelection(w,M){Ze=w,w&&(w.__agtComponent=M||null),ct.border=!1,ct.shadow=!1,ct.radiusPerCorner=!1,V()},refresh(w){pn(w?.force===!0),Pe()},refreshCounts:Pe,destroy(){for(let w of Ee)_.removeEventListener(w,xe);E.disconnect(),it&&clearTimeout(it),_.remove()}}}var Rd=[{id:"default",label:"Default",pseudo:""},{id:"hover",label:"Hover",pseudo:":hover"},{id:"focus",label:"Focus",pseudo:":focus-visible"},{id:"active",label:"Active",pseudo:":active"},{id:"disabled",label:"Disabled",pseudo:":disabled"}];function Ad(e){return Rd.find(t=>t.id===e)??Rd[0]}var Bi="data-agentation-el-id",fl="agt-force-state",hh="agt-design-states",mh="agt-design-state-preview";function Ex(){let e=document.getElementById(hh);return e||(e=document.createElement("style"),e.id=hh,document.head.appendChild(e)),e}var hl=new Map;function Mx(){let e=[];for(let[n,o]of hl)for(let[r,a]of o){let i=Array.from(a.entries()).map(([u,p])=>`${u}: ${p} !important;`).join(" ");if(!i)continue;let s=`[${Bi}="${n}"]`,{pseudo:l}=Ad(r),c=l?`${s}${l}, ${s}.${fl}[data-agt-state="${r}"]`:s;e.push(`${c} { ${i} }`)}let t=Ex();t.textContent=e.join(`
`),document.head.appendChild(t)}function V6(e,t){let n=hl.get(e);n||(n=new Map,hl.set(e,n));let o=n.get(t);return o||(o=new Map,n.set(t,o)),o}function Y6(e,t,n){let o=t.split(",").map(r=>r.trim()).filter(r=>n?r.includes(n):!/:(hover|focus|focus-visible|active|disabled)\b/.test(r)).map(r=>r.split(n||"###").join("")).filter(Boolean);for(let r of o)try{if(e.matches(r))return!0}catch{}return!1}function gh(e,t){let n=new Map,{pseudo:o}=Ad(t);if(!e||!o)return n;for(let a of Array.from(document.styleSheets)){let i=a.ownerNode;if(i&&i.id===hh)continue;let s;try{s=a.cssRules}catch{continue}if(s)for(let l of Array.from(s)){let c=l,u=c.selectorText;if(!u||!u.includes(o)||!Y6(e,u,o))continue;let p=c.style;if(p)for(let d=0;d<p.length;d+=1){let y=p.item(d);n.set(y,p.getPropertyValue(y))}}}let r=e.getAttribute(Bi);if(r){let a=hl.get(r)?.get(t);if(a)for(let[i,s]of a)n.set(i,s)}return n}function _h(e,t){let n=window.getComputedStyle(e);if(t==="default")return n;let o=gh(e,t);return{getPropertyValue(r){let a=o.get(r);return a!=null&&a!==""?a:n.getPropertyValue(r)}}}function yh(e,t,n,o){let r=e.getAttribute(Bi);if(!r)return"";let a=V6(r,t),i=a.get(n)??gh(e,t).get(n)??"";return a.set(n,o),Mx(),i}function Dd(e,t,n){let o=e.getAttribute(Bi);o&&(hl.get(o)?.get(t)?.delete(n),Mx())}function xh(e,t){if(Od(),!e||t==="default")return;let n=e.getAttribute(Bi);if(!n)return;e.classList.add(fl),e.setAttribute("data-agt-state",t);let o=gh(e,t),r=document.getElementById(mh);r||(r=document.createElement("style"),r.id=mh);let a=Array.from(o.entries()).map(([i,s])=>`${i}: ${s};`).join(" ");r.textContent=a?`[${Bi}="${n}"].${fl}[data-agt-state="${t}"] { ${a} }`:"",document.head.insertBefore(r,Ex())}function Od(){document.getElementById(mh)?.remove(),document.querySelectorAll(`.${fl}`).forEach(e=>{e.classList.remove(fl),e.removeAttribute("data-agt-state")})}var Nx=["[data-adk-root]","[data-adk-toolbar]","[data-adk-popup]","[data-adk-marker]","[data-design-edit-panel]","[data-design-edit-overlay]"],Rx=Nx.slice(),Er="data-agentation-el-id",Fd=0;function zi(e){if(!e||!e.closest)return!1;for(let t of Rx)if(e.closest(t))return!0;return!1}function Bd(e){let t=typeof e.composedPath=="function"?e.composedPath():[];for(let n of t)if(n&&n.nodeType===1&&zi(n)||n instanceof ShadowRoot&&n.host&&zi(n.host))return!0;return zi(e.target)}function vh(e){if(!e||e.nodeType!==1)return null;let t=e.getAttribute(Er);if(!t){do Fd++,t="agt-el-"+Fd;while(document.querySelector("["+Er+'="'+t+'"]'));e.setAttribute(Er,t)}return t}function ml(e){return!e.className||typeof e.className!="string"?[]:e.className.trim().split(/\s+/).filter(Boolean).sort()}function zd(e){let t=[],n=e;for(;n&&n!==document.body&&n.nodeType===1;){let o=n.tagName.toLowerCase();if(n.id)o+="#"+n.id;else if(n.className&&typeof n.className=="string"){let r=ml(n);r.length&&(o+="."+r.join("."))}if(n.parentElement&&!n.id){let r=n.parentElement,a=ml(n).join("."),i=n,s=Array.from(r.children).filter(l=>l.tagName===i.tagName&&ml(l).join(".")===a);s.length>1&&(o+="["+s.indexOf(n)+"]")}t.unshift(o),n=n.parentElement}return t.join(" > ")}function wh(e){if(!e||e.nodeType!==1)return null;let t=e,n=Object.keys(e).find(r=>r.startsWith("__reactFiber$")||r.startsWith("__reactInternalInstance$"));if(!n)return null;let o=t[n];for(let r=0;o&&r<30;r++){let a=o.elementType||o.type,i=null;if(a){if(typeof a=="function")i=a.displayName||a.name||null;else if(typeof a=="object"&&a.$$typeof){if(a.render)i=a.render.displayName||a.render.name||"ForwardRef";else if(a.type){let s=a.type;i=typeof s=="function"&&(s.displayName||s.name)||"Memo"}}}if(i){let s=o.memoizedProps||o.pendingProps||{};return{name:i,props:X6(s)}}o=o.return}return null}function X6(e){let t={};for(let n of Object.keys(e||{})){if(n==="children")continue;let o=e[n];if(o==null||typeof o=="string"||typeof o=="number"||typeof o=="boolean")t[n]=o;else if(Array.isArray(o))try{t[n]=JSON.parse(JSON.stringify(o))}catch{t[n]="[Array("+o.length+")]"}else if(typeof o=="function")t[n]="[Function]";else if(o instanceof Element)t[n]="[DOMNode]";else try{t[n]=JSON.parse(JSON.stringify(o))}catch{t[n]="[Object]"}}return t}function Lx(e){return Array.from(e.attributes||[]).map(t=>({name:t.name,value:t.value}))}function Tx(e){let t=(e.elementTagName??"element")+":"+(e.elementClassName??"");return(e.elementUniqueId?.trim()||e.elementPath?.trim()||e.elementId?.trim()||e.selector?.trim()||t)+"::"+e.property}function $x(e,t){let n=Tx(t),o=e.findIndex(a=>Tx(a)===n);if(o<0&&t.selector&&(o=e.findIndex(a=>a.property===t.property&&a.selector===t.selector)),o>=0){let a=e[o];if(a.newValue===t.newValue)return{records:e,changed:!1};if((a.originalValue??a.oldValue)===t.newValue){let c=e.slice();return c.splice(o,1),{records:c,changed:!0}}let s={...a,newValue:t.newValue,timestamp:t.timestamp,changeType:t.changeType??a.changeType,originalValue:a.originalValue??a.oldValue},l=e.slice();return l.splice(o,1),l.push(s),{records:l,changed:!0}}if(t.oldValue===t.newValue)return{records:e,changed:!1};let r={...t,originalValue:t.originalValue??t.oldValue};return{records:[...e,r],changed:!0}}function bh(e){if(!e.length)return"";let t=e.some(v=>v.changeType==="prop"),n=e.some(v=>v.changeType==="text"),o=e.some(v=>v.changeType!=="prop"&&v.changeType!=="text"),r;t&&o?r=`Apply these visual design changes (CSS styles and React props) to the codebase. These changes were made in a browser preview and need to be persisted to the source files:
`:t?r=`Apply these React prop changes to the codebase. These changes were made in a browser preview and need to be persisted to the source files:
`:r=`Apply these CSS style changes to the codebase. These changes were made in a browser preview and need to be persisted to the source files:
`;let a=`

CRITICAL - Element Identification:
- Use the "selector" field to find the target element (contains CSS selector like "#id", ".class", or tag)
- "elementPath" contains the DOM path (e.g., "html > body > div > ...") - use to understand element hierarchy
- "elementHTML" shows the element's HTML structure for verification
- "elementClasses" lists all CSS classes on the element - search for these in stylesheets
- If "reactComponent" is provided, the component name (e.g., "Button", "Card") indicates where to look

CRITICAL - Where to Make Changes:
1. First check if the element uses utility classes (Tailwind, Bootstrap): modify the className/class attribute in JSX/TSX
2. For CSS Modules (*.module.css): find the imported module and update the corresponding class
3. For styled-components/emotion: find the styled() or css\`\` definition in the component file
4. For global CSS/SCSS: locate the stylesheet imported by the component or in global styles
5. For inline styles: update the style prop directly in the JSX/TSX file

CRITICAL - Making the Actual Change:
- "property" is the CSS property name (e.g., "color", "padding", "font-size")
- "oldValue" is the current value - use this to locate the exact line to change
- "newValue" is what it should be changed to
- Preserve CSS units and format (e.g., if oldValue was "16px", keep pixel units unless converting to rem/em)`,i;t&&o?i=a+`

For CSS Changes:
1. Search for the "oldValue" of each property in CSS/SCSS files or className attributes
2. Replace with "newValue" while maintaining existing formatting and units
3. If using Tailwind, convert CSS properties to utility classes

For Prop Changes:
1. Find the JSX/TSX file where the component is rendered (use "reactComponent.name")
2. Locate the specific prop being changed (in "propChange.propPath")
3. Update from "propChange.oldValue" to "propChange.newValue"`:t?i=a+`

For Prop Changes:
1. Find the component definition or where it's rendered using "reactComponent.name"
2. Locate the prop specified in "propChange.propPath"
3. Change the value from "propChange.oldValue" to "propChange.newValue"
4. If the prop controls styling (like size, variant, color), ensure the new value is valid for that prop`:i=a+`

For CSS Style Changes:
1. Search for the element using "selector" or "elementClasses" to find relevant stylesheets
2. Find the exact CSS rule containing "property: oldValue"
3. Replace "oldValue" with "newValue"
4. If no existing rule exists, add a new declaration to the appropriate CSS file or inline style
5. For Tailwind: convert the CSS property/value to the appropriate utility class (e.g., "padding: 16px" -> "p-4")
6. Ensure specificity is maintained - don't accidentally override other rules`;let s=e.filter(v=>v.state),l=s.length?'\n\nSTATES: some changes belong to an interaction state, not to the resting style. Each of those carries "state" and "statePseudo" (e.g. "hover" / ":hover"). Put the value in the rule for that pseudo-class \u2014 creating it next to the existing rule if the project has none \u2014 and NEVER in the base rule; a hover colour applied at rest is a visible regression. Where the project expresses states differently (Tailwind `hover:` variants, a `data-state` attribute, a styled-components interpolation), follow that convention instead of adding a raw pseudo-class rule.\nStates present in this batch: '+Array.from(new Set(s.map(v=>v.statePseudo))).join(", ")+".":"",c=n?`

Some changes are COPY changes (changeType "text"): replace the element's text in the source \u2014 the string, a translation key, or whatever feeds it \u2014 never by hardcoding it over a variable.`:"",u=rr(),p=wx(),d=u.colors.filter(v=>v.name),y=u.fonts.filter(v=>v.name),_=[];p.length&&_.push(`Styling detected on the page: ${p.join(", ")}. Make the change the way this project already makes it.`),d.length&&_.push(`Colour tokens in use:
`+d.map(v=>`  ${v.name}: ${v.value}`).join(`
`)),y.length&&_.push(`Type tokens in use:
`+y.map(v=>`  ${v.name}: ${v.value}`).join(`
`));let C=_.length?`

PROJECT DESIGN SYSTEM (read from the running page):
`+_.join(`
`)+"\n\nWhen a new value matches a token, reference the token (e.g. `var(--brand-500)`) rather than writing the literal. A change that is meant to apply everywhere belongs in the token itself \u2014 say so instead of editing one component, and do not invent tokens that are not listed above.":"";return r+i+c+l+C}function kh(e,t=0){return e.map((o,r)=>{let a=o.elementTagName?.toLowerCase()||"element",i={property:o.property,oldValue:o.oldValue,newValue:o.newValue,changeType:o.changeType??"style",...o.state?{state:o.state,statePseudo:o.statePseudo}:{},selector:o.selector,elementId:o.elementId||null,elementClasses:o.elementClassName||null,elementTagName:a,elementPath:o.elementPath,elementAttributes:o.elementAttributes||[]},s=/font-family/.test(o.property||"")?"font":"color",l=o.changeType!=="prop"&&o.changeType!=="text"?fh(o.newValue,s):null;l&&(i.newValueToken=`var(${l.name})`);let c=o.changeType!=="prop"&&o.changeType!=="text"?fh(o.oldValue,s):null;c&&(i.oldValueToken=`var(${c.name})`),o.elementHTML&&(i.elementHTML=o.elementHTML.length>500?o.elementHTML.slice(0,500)+"...":o.elementHTML),o.elementReactComponent?.name&&(i.reactComponent={name:o.elementReactComponent.name,props:o.elementReactComponent.props});let u;if(o.elementReactComponent?.name){let d=o.elementReactComponent.props?Object.entries(o.elementReactComponent.props).map(([y,_])=>_==null?`${y}={null}`:typeof _=="string"?`${y}="${_}"`:`${y}={${JSON.stringify(_)}}`).join(" "):"";u=`<${o.elementReactComponent.name}${d?" "+d:""}>`}else{let d=(o.elementAttributes||[]).map(y=>`${y.name}="${y.value}"`).join(" ");u=`<${a}${d?" "+d:""}>`}let p=o.changeType==="prop"?"PROP_CHANGE":o.changeType==="text"?"TEXT_CHANGE":"CSS_CHANGE";return`

--- Change ${t+r+1} ---
Element: ${u}
[${p}]: ${JSON.stringify(i,null,2)}`}).join("")}function Ix(e){return e.length?bh(e)+kh(e):""}function q6(e="#0A84FF",t=null){let n=document.createElement("div");n.setAttribute("data-design-edit-overlay","hover"),n.style.cssText=`
    position: fixed; pointer-events: none; z-index: ${Sn.pickerHighlight};
    border: 1px solid ${e}; background: color-mix(in srgb, ${e} 7%, transparent);
    border-radius: 2px; display: none; box-sizing: border-box;
    transition: top 60ms linear, left 60ms linear, width 60ms linear, height 60ms linear;
  `;function o(u){let p=document.createElement("div");p.setAttribute("data-design-edit-overlay",u),p.setAttribute("data-adk-hover-label",""),p.hidden=!0,p.style.zIndex=String(Sn.pickerLabel);let d=document.createElement("i");return d.style.background=e,p.append(d,document.createElement("span")),p}let r=o("label"),a=document.createElement("div");a.setAttribute("data-design-edit-overlay","selected"),a.style.cssText=`
    position: fixed; pointer-events: none; z-index: ${Sn.pickerScrim};
    border: 2px solid ${e}; background: transparent;
    border-radius: 4px; display: none; box-sizing: border-box;
  `;let i=o("selected-label");document.body.appendChild(n),document.body.appendChild(r),document.body.appendChild(a),document.body.appendChild(i);function s(u){let p="";for(let d of u.childNodes)d.nodeType===3&&d.nodeValue&&(p+=d.nodeValue);return p=p.trim().replace(/\s+/g," "),p&&p.length<=28?p:u.tagName.toLowerCase()+(u.id?"#"+u.id:"")+(u.className&&typeof u.className=="string"?"."+ml(u).slice(0,2).join("."):"")}let l=3;function c(u,p,d,y=0){let _=u.getBoundingClientRect();if(p.style.top=_.top-y+"px",p.style.left=_.left-y+"px",p.style.width=_.width+y*2+"px",p.style.height=_.height+y*2+"px",p.style.display="block",d){let C=(t?t(u):null)??{kind:s(u)},v=d.lastElementChild;v.replaceChildren();let m=document.createElement("b");m.textContent=C.kind,v.appendChild(m),C.text&&v.append(" \xB7 \u201C"+C.text+"\u201D"),d.setAttribute("data-adk-theme",Po(null)),d.hidden=!1;let g=d.offsetWidth,E=Math.max(8,Math.min(_.left-y,window.innerWidth-g-8)),I=_.top-y-30;d.style.left=Math.round(E)+"px",d.style.top=Math.round(I>=8?I:Math.min(_.bottom+y+6,window.innerHeight-32))+"px"}}return{hover:n,label:r,selected:a,showHover(u){c(u,n,r)},hideHover(){n.style.display="none",r.hidden=!0},showSelected(u){c(u,a,i,l)},hideSelected(){a.style.display="none",i.hidden=!0},destroy(){n.remove(),r.remove(),a.remove(),i.remove()}}}function K6(e){if(!e)return null;let t=document.body;for(let n of e.split(" > ")){let o=n.trim();if(!o||!t)return null;let r=/^([a-zA-Z0-9-]+)(#[^.\[]+)?((?:\.[^.\[]+)*)(?:\[(\d+)\])?$/.exec(o);if(!r)return null;let a=r[1].toUpperCase(),i=r[2]?r[2].slice(1):"",s=r[3]?r[3].split(".").filter(Boolean):[],l=r[4]!==void 0?Number(r[4]):0,c=Array.from(t.children).filter(u=>{if(u.tagName!==a)return!1;if(i)return u.id===i;let p=ml(u);return s.length===p.length&&s.every(d=>p.includes(d))});t=c[l]||c[0]||null}return t&&t!==document.body?t:null}function Ax(e){let n=(e.elementUniqueId?document.querySelector("["+Er+'="'+e.elementUniqueId+'"]'):null)||K6(e.selector||e.elementPath);if(n&&e.elementUniqueId&&!n.getAttribute(Er)){n.setAttribute(Er,e.elementUniqueId);let o=/^agt-el-(\d+)$/.exec(e.elementUniqueId);o&&(Fd=Math.max(Fd,Number(o[1])))}return n}function Ch(e){let t=0;for(let n of e||[]){let o=Ax(n);if(o)try{n.changeType==="text"?o.textContent=n.newValue:n.state?yh(o,n.state,n.property,n.newValue):o.style.setProperty(n.property,n.newValue),t+=1}catch(r){console.warn("[design-edit] could not re-apply",n.property,r)}}return t}function Dx(e){for(let t of e||[]){let n=Ax(t);if(n)try{if(t.changeType==="text")n.textContent=t.oldValue;else if(t.state)Dd(n,t.state,t.property);else{let o=t.originalValue??t.oldValue??"";t.hadInlineStyle&&o?n.style.setProperty(t.property,o):n.style.removeProperty(t.property)}}catch(o){console.warn("[design-edit] could not remove",t.property,o)}}}function Q6(e){try{if(navigator.clipboard&&navigator.clipboard.writeText)return navigator.clipboard.writeText(e).then(()=>!0,()=>Px(e))}catch{}return Promise.resolve(Px(e))}function Px(e){try{let t=document.createElement("textarea");t.value=e,t.setAttribute("data-design-edit-panel",""),t.style.cssText="position:fixed; top:-1000px; left:-1000px; opacity:0;",document.body.appendChild(t),t.select();let n=document.execCommand("copy");return t.remove(),n}catch{return!1}}var G6=[/^localhost$/i,/^127\.0\.0\.1$/,/^0\.0\.0\.0$/,/^\[?::1\]?$/,/\.local$/i,/\.localhost$/i];function Z6(){let e=window.location&&window.location.hostname||"";return G6.some(t=>t.test(e))}var oa=null;function ar(){return!!oa}function Hd(){if(!oa)return;let e=oa;oa=null,e.destroy()}function Ox({onSubmit:e,onExit:t,showToast:n,ignoreSelectors:o,devHostOnly:r=!0,devHostMessage:a="Design mode requires a dev server (localhost / *.local).",accent:i="#0A84FF",describe:s}={}){if(oa)return oa;if(r&&!Z6())return n&&n(a),null;Rx=Nx.concat(Array.isArray(o)?o.filter(Boolean):[]);let l=document.createElement("style");l.setAttribute("data-design-edit-cursor",""),l.textContent="body, body * { cursor: default !important; }",(document.head||document.documentElement).appendChild(l);let c=null,u=[],p=q6(i,s),d="default",y=Sx({accent:i,describe:s,states:Rd,getState:()=>d,setState:P=>{d=P,c&&xh(c,d),y.refresh(),c&&p.showSelected(c)},styleFor:P=>_h(P,d),onCommit:(P,q,le)=>C(P,q,le),onRevert:v,onSubmit:m,onExit:Hd,onCopy:()=>{u.length&&Q6(Ix(u)).then(P=>{n&&n(P?"Edits copied as a prompt.":"Copy failed \u2014 use \xAB Send to agent \xBB.")})},getRecordCount:()=>u.length,getEditedProps:()=>{if(!c)return[];let P=c.getAttribute(Er);if(!P)return[];let q=d==="default"?void 0:d;return u.filter(le=>le.elementUniqueId===P&&le.state===q).map(le=>le.property)},onRevertProp:P=>{if(!c)return;let q=c.getAttribute(Er),le=u.findIndex(Ce=>Ce.elementUniqueId===q&&Ce.property===P);if(le<0)return;let me=u[le];if(me.state)Dd(c,me.state,P);else{let Ce=me.originalValue??me.oldValue??"";me.hadInlineStyle&&Ce?c.style.setProperty(P,Ce):c.style.removeProperty(P)}u=u.slice(0,le).concat(u.slice(le+1)),y.refresh({force:!0}),p.showSelected(c)}});function _(P){Od(),c=P,P&&(vh(P),xh(P,d)),y.setSelection(P,(wh(P)||{}).name),P?p.showSelected(P):p.hideSelected()}function C(P,q,le){if(!c)return;let me=_h(c,d),Ce=q&&q.length?q:me.getPropertyValue(P)||"";if(Ce===le)return;let B=d==="default"&&!!c.style.getPropertyValue(P);try{d==="default"?c.style.setProperty(P,le):yh(c,d,P,le)}catch(ht){console.warn("[design-edit] setProperty failed",P,le,ht);return}let Y=wh(c),Se={selector:zd(c),property:P,oldValue:Ce,newValue:le,hadInlineStyle:B,timestamp:Date.now(),elementPath:zd(c),elementHTML:c.outerHTML,elementId:c.id||"",elementClassName:typeof c.className=="string"?c.className:"",elementTagName:c.tagName.toLowerCase(),elementAttributes:Lx(c),elementUniqueId:vh(c),changeType:"style",state:d==="default"?void 0:d,statePseudo:d==="default"?void 0:Ad(d).pseudo,elementReactComponent:Y||void 0},nt=$x(u,Se);nt.changed&&(u=nt.records),p.showSelected(c)}function v(){if(u.length){for(let P of u){let q=document.querySelector("["+Er+'="'+P.elementUniqueId+'"]');if(!q)continue;if(P.state){Dd(q,P.state,P.property);continue}let le=P.originalValue??P.oldValue??"";P.hadInlineStyle&&le?q.style.setProperty(P.property,le):q.style.removeProperty(P.property)}u=[],y.refresh({force:!0}),c&&p.showSelected(c)}}function m(){if(!u.length){typeof e=="function"&&e({empty:!0});return}let P=Ix(u);typeof e=="function"&&e({prompt:P,records:u,selected:c}),u=[],y.refresh()}function g(P){if(Bd(P)){p.hideHover(),P.stopPropagation();return}let q=document.elementFromPoint(P.clientX,P.clientY);if(!q||zi(q)||q===c){p.hideHover();return}p.showHover(q)}function E(P){if(Bd(P))return;let q=document.elementFromPoint(P.clientX,P.clientY)||P.target;!q||zi(q)||(P.preventDefault(),P.stopImmediatePropagation(),P.stopPropagation(),p.hideHover(),_(q))}let I=null;function D(P){if(!P||I)return;if(Array.from(P.children).some(Y=>Y.nodeType===1)){n&&n("Pick the text itself to rewrite it.");return}let le=P.textContent??"";I={el:P,before:le,previousEditable:P.getAttribute("contenteditable")},P.setAttribute("contenteditable","plaintext-only"),P.focus();try{let Y=document.createRange();Y.selectNodeContents(P);let Se=window.getSelection();Se?.removeAllRanges(),Se?.addRange(Y)}catch{}let me=Y=>{if(!I||I.el!==P)return;let Se=P.textContent??"";if(I.previousEditable==null?P.removeAttribute("contenteditable"):P.setAttribute("contenteditable",I.previousEditable),P.removeEventListener("keydown",Ce,!0),P.removeEventListener("blur",B,!0),I=null,!Y){P.textContent=le;return}Se!==le&&oe(P,le,Se)},Ce=Y=>{if(Y.stopPropagation(),Y.key==="Enter"&&!Y.shiftKey&&(Y.preventDefault(),P.blur()),Y.key==="Escape"){Y.preventDefault();let Se=P;me(!1),Se.blur()}},B=()=>me(!0);P.addEventListener("keydown",Ce,!0),P.addEventListener("blur",B,!0)}function oe(P,q,le){let me=wh(P),Ce={selector:zd(P),property:"textContent",oldValue:q,newValue:le,hadInlineStyle:!1,timestamp:Date.now(),elementPath:zd(P),elementHTML:P.outerHTML,elementId:P.id||"",elementClassName:typeof P.className=="string"?P.className:"",elementTagName:P.tagName.toLowerCase(),elementAttributes:Lx(P),elementUniqueId:vh(P),changeType:"text",elementReactComponent:me||void 0},B=$x(u,Ce);B.changed&&(u=B.records),y.refreshCounts(),c&&p.showSelected(c)}function z(P){if(Bd(P))return;let q=document.elementFromPoint(P.clientX,P.clientY)||P.target;!q||zi(q)||(P.preventDefault(),P.stopImmediatePropagation(),P.stopPropagation(),_(q),D(q))}function Z(P){if(Bd(P))return;let q=P.target;I&&q&&I.el.contains(q)||(P.stopImmediatePropagation(),P.stopPropagation(),P.preventDefault())}function ge(P){if(P.key!=="Escape")return;let q=P.target,le=q&&q.closest&&q.closest("[data-design-edit-panel]"),me=document.querySelector("[data-design-edit-panel]"),Ce=me&&me.shadowRoot;if(!(Ce&&Ce.querySelector(".agt-layer > *"))){if(le){let B=Ce&&Ce.activeElement;if(B&&/^(INPUT|TEXTAREA|SELECT)$/.test(B.tagName))return}P.preventDefault(),Hd()}}function te(P){if(!c)return;let q=P.target;if(q!==c&&!(q&&c.contains(q)))return;let le=P.relatedTarget;if(le&&(le===c||c.contains(le)))return;let me=()=>{c&&y.refresh()};window.setTimeout(me,50),window.setTimeout(me,400)}window.addEventListener("mousemove",g,!0),window.addEventListener("mouseout",te,!0),window.addEventListener("click",E,!0),window.addEventListener("dblclick",z,!0),window.addEventListener("mousedown",Z,!0),window.addEventListener("mouseup",Z,!0),window.addEventListener("pointerdown",Z,!0),window.addEventListener("pointerup",Z,!0),window.addEventListener("keydown",ge,!0);let he=Id({ours:"[data-design-edit-panel],[data-design-edit-overlay],[data-adk-toast],[data-adk-history]"});function K(){c&&p.showSelected(c)}return window.addEventListener("scroll",K,!0),window.addEventListener("resize",K),oa={destroy(){let P=t;t=void 0,window.removeEventListener("mousemove",g,!0),window.removeEventListener("mouseout",te,!0),window.removeEventListener("click",E,!0),window.removeEventListener("dblclick",z,!0),window.removeEventListener("mousedown",Z,!0),window.removeEventListener("mouseup",Z,!0),window.removeEventListener("pointerdown",Z,!0),window.removeEventListener("pointerup",Z,!0),window.removeEventListener("keydown",ge,!0),he(),window.removeEventListener("scroll",K,!0),window.removeEventListener("resize",K),p.destroy(),y.destroy(),Od();try{l.remove()}catch{}if(typeof P=="function")try{P()}catch(q){console.warn("[design-edit] onExit threw",q)}}},oa}var Mh=At(Nn(),1),J6=[{id:"feature",label:{en:"Improvement",fr:"\xC9volution"}},{id:"bug",label:{en:"Fix",fr:"Correctif"}},{id:"design",label:{en:"Design",fr:"Design"}}],e3={indigo:"#6155F5",blue:"#0088FF",cyan:"#00C3D0",green:"#34C759",yellow:"#FFCC00",orange:"#FF8D28",red:"#FF383C"},t3="Annotate Kit",n3="0.3.0",gl="feedback-toolbar-settings",Sh="https://annotate-kit.local/submit";function Wd(e={}){let t=e.kinds?.length?e.kinds:J6,n=e.accent??"blue",o=e3[n]??n,r=L1(e.storagePrefix??"adk",e.persist!==!1),a=e.transport??Ld(),i=e.design?.enabled!==!1,s=e.design?.devHostOnly!==!1,l=[...$l,...e.ignoreSelectors??[]],c=!["clipboard","console"].includes(a.name),u=V1({send:c,...e.features??{}},`${e.storagePrefix??"adk"}:features`,{canSend:()=>c,onRefused:(S,L)=>qt(L)});$1(e.licenceKey),I1();let p=Md("kit");u.onChange(()=>ne());let d=null,y=null;function _(){return d||(d=q1({accent:o,locale:C,kinds:t,getItems:()=>(hn(),so()),onRemove:S=>Jn(S),onReveal:S=>ja(S)})),d}let C=Qh(e.locale),v=e.theme??"auto";function m(){return v==="light"||v==="dark"?v:ou()??Tl()}function g(){let S=m();nu(S),au(S),document.querySelectorAll("[data-agentation-theme]").forEach(L=>{L.getAttribute("data-agentation-theme")!==S&&L.setAttribute("data-agentation-theme",S)})}let E=null,I=null,D=Gh(()=>C),oe=i1(()=>C),z=new Set,Z=!1,ge=null,te=null,he=null,K=null,P=null,q=null,le=null,me=[],Ce=0,B=new Map,Y=[],Se=Q1({annotations:()=>Y,resolve:S=>{let L=B.get(String(S.id))?.records[0]?.elementUniqueId;return(L?document.querySelector(`[data-agentation-el-id="${L}"]`):null)??(S.elementPath?Lo(S.elementPath):null)},candidates:S=>{for(let L of[S.fullPath,S.elementPath])if(L)try{let O=Array.from(document.querySelectorAll(L)).filter(j=>!ts(j));if(O.length)return O}catch{}return[]}}),nt=!1,ht=null,We=Wt(),ut=new Map,pt=e.defaultKind??t[0]?.id??"feature",Ze=null,kt=null,Et=null,it=()=>window.location.pathname||"/",ct=()=>`kinds:${it()}`;function Wt(){try{let S=window.localStorage.getItem(`${e.storagePrefix??"adk"}:kinds:${window.location.pathname}`),L=S?JSON.parse(S):{};return new Map(Object.entries(L))}catch{return new Map}}let Xt=()=>`${e.storagePrefix??"adk"}:viewports:${it()}`;function je(){try{let S=window.localStorage.getItem(Xt()),L=S?JSON.parse(S):{};return new Map(Object.entries(L))}catch{return new Map}}let Ye=je();function pn(S){Ye.set(S,{label:Al(C),width:du()});try{window.localStorage.setItem(Xt(),JSON.stringify(Object.fromEntries(Ye)))}catch{}}function Bt(){try{window.localStorage.setItem(`${e.storagePrefix??"adk"}:${ct()}`,JSON.stringify(Object.fromEntries(We)))}catch{}}function Be(S=!1){!ge||!le||(S&&(Ce+=1),ge.render((0,Mh.jsx)(Qy,{...le},Ce)))}function De(S){(S.type.startsWith("annotation")||S.type==="design:submit")&&d?.refresh(),e.onEvent?.(S),z.forEach(L=>{try{L(S)}catch(O){console.warn("[annotate-kit] listener threw",O)}})}function de(){try{let S=window.localStorage.getItem(gl),L=S?JSON.parse(S):{},O=typeof L.webhookUrl=="string"&&L.webhookUrl!==Sh?L.webhookUrl.trim():"",j={...L,outputDetail:"forensic",webhookUrl:O,webhooksEnabled:O?L.webhooksEnabled===!0:!1};window.localStorage.setItem(gl,JSON.stringify(j))}catch{}}function ze(){try{let S=window.localStorage.getItem(gl),L=S?JSON.parse(S).webhookUrl:"";if(typeof L!="string")return null;let O=L.trim();if(!O||O===Sh)return null;let j=new URL(O);return j.protocol==="https:"||j.protocol==="http:"?O:null}catch{return null}}function R(S,L){if(!S||typeof L?.body!="string"||S.trim()!==ze())return!1;try{return JSON.parse(L.body).event==="submit"}catch{return!1}}let A=null;function V(S){try{let L=window.localStorage.getItem(gl),O=L?JSON.parse(L):{};if(A===null&&(A=O.blockInteractions!==!1),O.blockInteractions===S)return;window.localStorage.setItem(gl,JSON.stringify({...O,blockInteractions:S}));let j=Ct();Be(!0),j&&window.setTimeout(()=>{Ct()||Rn(!0)},60)}catch{}}function be(){if(A===null)return;let S=A;A=null,V(S),A=null}function fe(){let S=window;if(S.__adkFetchPatched||typeof window.fetch!="function")return;S.__adkFetchPatched=!0;let L=window.fetch.bind(window);window.fetch=(O,j)=>{let ve=typeof O=="string"?O:O instanceof URL?O.href:O.url,$e=window.__adkAgentFetch,tt=typeof O=="string"||O instanceof URL;if($e&&tt&&ve&&(ve===$e.base||ve.startsWith(`${$e.base}/`)))return $e.run(ve,j,L);if(ve&&(ve.includes("annotate-kit.local")||tt&&R(ve,j))){let Nt=window.__adkDelivery;return Promise.resolve(Nt??{ok:!1}).then(mn=>new Response(JSON.stringify({ok:mn.ok}),{status:mn.ok?200:503,headers:{"Content-Type":"application/json"}}))}return L(O,j)}}let Pe=()=>!!e.captureScreenshot||N1();async function Ee(S){try{let L=await e.persistScreenshot?.(S);return{shot:typeof L=="string"&&L.trim()?{...S,file:L.trim()}:S}}catch(L){let O=L?.userMessage;return typeof O!="string"&&console.warn("[annotate-kit] could not save the screenshot",L),{shot:S,message:typeof O=="string"?O:void 0}}}let xe=()=>`${e.storagePrefix??"adk"}:shots:${it()}`;function w(){try{let S=window.localStorage.getItem(xe()),L=S?JSON.parse(S):{};return new Map(Object.entries(L).filter(([,O])=>O&&typeof O.file=="string"))}catch{return new Map}}function M(){try{let S={};for(let[L,O]of ut)O.file&&(S[L]={file:O.file,path:O.path,width:O.width,height:O.height,mimeType:O.mimeType});Object.keys(S).length?window.localStorage.setItem(xe(),JSON.stringify(S)):window.localStorage.removeItem(xe())}catch{}}let H=e.endpoint?e.endpoint.replace(/\/+$/,""):"";function W(S,L){if(!S||!L||S===L)return;let O=j=>{j.has(S)&&(j.set(L,j.get(S)),j.delete(S))};O(We),O(ut),O(Ye),O(B),Bt(),M(),qe();try{window.localStorage.setItem(Xt(),JSON.stringify(Object.fromEntries(Ye)))}catch{}}let X=/`([^`]+)` \(open this file to see the element(?:, (\d+)×(\d+) px)?(?:; [^)]*)?\)\]$/;async function ee(S,L,O){let j=(L?.method??"GET").toUpperCase(),ve=S.slice(H.length).split(/[?#]/)[0]??"",$e=j==="POST"&&/^\/sessions\/[^/]+\/annotations$/.test(ve),tt=j==="PATCH"&&/^\/annotations\/[^/]+$/.test(ve),Nt=L?.body,mn="";if(($e||tt)&&typeof Nt=="string")try{let Mt=JSON.parse(Nt),co=$e?String(Mt.id??""):decodeURIComponent(ve.slice(13));$e&&(mn=co),typeof Mt.comment=="string"&&(Mt.comment=k1(Mt.comment,ut.get(co)),Nt=JSON.stringify(Mt))}catch{}let Cn=await O(S,Nt===L?.body?L:{...L,body:Nt});if($e&&mn&&Cn.ok&&Cn.clone().json().then(Mt=>{Mt?.id!=null&&W(mn,String(Mt.id))}).catch(()=>{}),j==="GET"&&/^\/sessions\/[^/]+$/.test(ve)&&Cn.ok)try{let Mt=await Cn.clone().json();if(Array.isArray(Mt?.annotations)){let co=!1;return Mt.annotations=Mt.annotations.map(uo=>{if(typeof uo?.comment!="string")return uo;let Rt=X.exec(uo.comment),jo=String(uo.id??"");return Rt&&jo&&!ut.has(jo)&&(ut.set(jo,{file:Rt[1],width:Rt[2]?Number(Rt[2]):void 0,height:Rt[3]?Number(Rt[3]):void 0}),co=!0),{...uo,comment:lh(uo.comment)}}),co&&M(),new Response(JSON.stringify(Mt),{status:Cn.status,statusText:Cn.statusText,headers:Cn.headers})}}catch{}return Cn}function U(S){if(!H)return;let L=Y.find(O=>String(O.id)===S);!L||typeof L.comment!="string"||window.fetch(`${H}/annotations/${encodeURIComponent(S)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({comment:L.comment})}).catch(()=>{})}async function ue(S,L){if(!Pe())return qt(D("captureUnavailable"),{tone:"error"}),null;let O=Array.from(L.closest("[data-agentation-root]")?.querySelectorAll('[class*="singleSelectOutline"], [class*="multiSelectOutline"]')??[]).filter($e=>!$e.className.includes("__exit_")),j=()=>{if(!L.isConnected)return null;let $e=O.filter(Mt=>Mt.isConnected).map(Mt=>Mt.getBoundingClientRect());if(!$e.length&&S?.isConnected&&$e.push(S.getBoundingClientRect()),!$e.length)return null;let tt=Math.max(0,Math.min(...$e.map(Mt=>Mt.left))),Nt=Math.max(0,Math.min(...$e.map(Mt=>Mt.top))),mn=Math.min(window.innerWidth,Math.max(...$e.map(Mt=>Mt.right))),Cn=Math.min(window.innerHeight,Math.max(...$e.map(Mt=>Mt.bottom)));return mn<=tt||Cn<=Nt?null:{x:tt,y:Nt,width:mn-tt,height:Cn-Nt}};if(!j())return qt(D("captureFailed"),{tone:"error"}),null;let ve=document.createElement("style");ve.textContent=`${$l.join(",")},[class*="styles-module"]{visibility:hidden !important}`,document.head.appendChild(ve);try{await new Promise(tt=>window.setTimeout(tt,60));let $e;if(e.captureScreenshot){let tt=j();$e=tt?await e.captureScreenshot(tt,S)??null:null}else $e=await R1(j);if(!$e&&L.isConnected&&qt(D("captureFailed"),{tone:"error"}),!$e)return null;if(e.persistScreenshot){let tt=await Ee($e);$e=tt.shot,L.isConnected&&($e.file?qt(D("captureSaved")):qt(tt.message??D("captureNotSaved"),{tone:"error",duration:8e3}))}else L.isConnected&&qt(D("captureDone"));return $e}catch($e){if($e instanceof Aa||console.warn("[annotate-kit] screenshot failed",$e),L.isConnected){let tt=$e instanceof sl?"captureTabRequired":$e instanceof Aa?"captureCancelled":$e instanceof ll?"captureUnavailable":"captureFailed";qt(D(tt),{tone:$e instanceof Aa?"status":"error",duration:6500})}return null}finally{ve.remove()}}function ne(){if(Se.schedule(),y&&!y.isConnected&&To()&&(y=null,Ct()||Rn(!0)),mm({name:t3,version:n3}),e.ignoreSelectors?.length&&Et&&e.ignoreSelectors.some(ve=>{try{return Et?.closest(ve)!=null}catch{return!1}})&&document.querySelector("[data-annotation-popup]")){ie();return}let S=document.querySelector("[data-agentation-settings-panel]");if(S){Y1({panel:S,features:u,accent:o}),um(S),dm(S,D("webhookPlaceholder"));let j=S.querySelector('button[class*="__themeToggle___"]');j&&!j.dataset.adkThemeGuard&&(j.dataset.adkThemeGuard="1",j.addEventListener("click",()=>{let ve=/light/i.test(a1(j))?"light":"dark";ru(ve),nu(ve),au(ve)}))}hm({label:D("wireframeComponent"),owner:p,onClick:()=>{Je()}});let L=document.querySelector("[data-annotation-popup]");if(L!==kt&&(kt=L,Ze=null),L&&(ar()||na())){L.querySelector('button[class*="__cancel___"]')?.click();return}if(L){let j=ia(),ve=j?.elementPath?Lo(j.elementPath):null,$e=j?ve?lr(ve):{kind:D("elElement"),text:j.element||void 0}:lr(Et);im({popup:L,accent:o,title:$e,placeholder:D("commentPlaceholder"),first:so().length===0});let tt=j?String(j.id):null;tt&&We.get(tt)==="design"&&gm({popup:L,visible:!jt.has(tt),labels:{showOriginal:D("designShowOriginal"),showEdit:D("designShowEdit")},onToggle:Nt=>ra(tt,Nt)}),nm({popup:L,kinds:t,locale:C,accent:o,current:pt,onChange:Nt=>{pt=Nt}});{let Nt=j?ve:Et;sm({popup:L,accent:o,labels:{capture:D("photograph"),remove:D("removePhoto"),view:D("viewPhoto"),busy:D("captureBusy")},onCapture:async()=>{let mn=await ue(Nt,L);return!L.isConnected||kt!==L?null:(tt?mn&&(ut.set(tt,mn),M(),U(tt)):Ze=mn,mn?.dataUrl??null)},onClear:()=>{tt?(ut.delete(tt),M(),U(tt)):Ze=null},onView:mn=>{let Cn=(tt?ut.get(tt):Ze)??null;M1({dataUrl:mn,file:Cn?.file,name:Cn?.path,labels:{copy:D("copyImage"),copied:D("imageCopied"),copyFailed:D("imageCopyFailed"),download:D("downloadImage"),savedAt:D("captureSavedAt")}})}})}am(L,Et?.isConnected?Et.getBoundingClientRect():null)}let O=To();if(O&&!hu()){let j=cu({toolbar:O,owner:p,key:"device",title:D("device"),fromEnd:4,render:ve=>{ve.innerHTML=fa().icon,window.setTimeout(()=>Nl(ve),0)},onClick:()=>{ke(),ne()}});j&&(j.style.color=fa().width?o:"",j.innerHTML=fa().icon,Nl(j))}if(O&&i){let j=cu({toolbar:O,owner:p,key:"design",title:D("design"),fromEnd:3,render:ve=>{let $e=(0,Eh.createRoot)(ve);me.push($e),$e.render((0,Mh.jsx)(eh,{size:24})),window.setTimeout(()=>Nl(ve),0)},onClick:()=>ar()?xt():st()});j&&(j.style.color=ar()?o:"")}if(O){U1(O),fn(O),j1(O,["device","design"]),u.apply(),$d(),_l();let j=O.querySelector('[data-adk-role="close"]');j&&!j.dataset.adkCloseBound&&(j.dataset.adkCloseBound="1",j.addEventListener("pointerdown",()=>{ar()&&xt(),na()&&nr()},!0));let ve=O.querySelector('[data-adk-role="copy"]'),$e=O.querySelector('[data-adk-role="send"]'),tt=u.enabled("send")&&$e?$e:ve;tt&&(hn(),K1({button:tt,count:so().length,accent:o,locale:C,onClick:()=>_().open()}))}oe.refresh(),F1({toolbar:To(),open:Ct(),t:D})}let Ne=!1,Me=0;function ke(){let S=Date.now();S-Me<300||(Me=S,zl()?Fe():at())}let Ue="phone";function at(){ie(),xt(),na()&&nr(),Ne=Ct(),km({accent:o,locale:C,device:Ue,labels:{close:D("close")},onSwitch:S=>{Ue=S},onClose:()=>Fe(),onBlocked:()=>{let S=wm()??Ue;Ir(!1),uu(S),qt(D("deviceFrameBlocked")),Be(!0),ne()}})}function Fe(){zl()&&Ir(!1),ym(),hn(),B=Fi(),jt=io(),Gn(),Be(!0),Ne&&window.setTimeout(()=>{Ct()||Rn(!0),ne()},90),Ne=!1,ne()}function ie(){let S=document.querySelector("[data-annotation-popup]");if(!S)return;S.querySelector('button[class*="__cancel___"]')?.click()}function st(){if(!i||ar())return;ie();let S=Ct();S&&Rn(!1),V(!1),Ox({accent:o,describe:lr,ignoreSelectors:l,devHostOnly:s,devHostMessage:D("designDevHost"),showToast:qt,onExit:()=>{be(),Be(!0),S&&window.setTimeout(()=>Rn(!0),60),ne(),De({type:"design:mode",active:!1})},onSubmit:O=>{if(O.empty||!O.records?.length){qt(D("designEmpty"));return}let j=Hi(O);if(!j)return;let ve=so().find($e=>$e.id===j);ve&&De({type:"design:submit",item:ve}),xt(),qt(D("designAdded"))}})&&(Be(!0),S&&window.setTimeout(()=>{Ct()||Rn(!0),ne()},90),ne(),De({type:"design:mode",active:!0}))}async function Ge(S,L=8,O=40){for(let j=0;j<L;j+=1){if(S())return!0;await new Promise(ve=>window.setTimeout(ve,O))}return S()}async function Je(){if(na()){nr();return}if(!u.enabled("wireframe"))return;ie(),await Ge(()=>!document.querySelector("[data-annotation-popup]"));let S=Ct();S&&(Rn(!1),await Ge(()=>!Ct())),V(!1),qt(D("wireframePick")),ix({accent:o,labelFor:L=>al(L).label,ignore:L=>ts(L),onCancel:()=>{be(),S&&Rn(!0)},onPick:L=>{document.querySelector("[data-adk-toast]")?.remove(),ft(L,S)}})}async function ft(S,L){if(!u.enabled("wireframe"))return;let O=S&&S.isConnected?S:null;if(!O){qt(D("wireframeNoTarget"));return}let j=L??!1;if(L==null&&(ie(),await Ge(()=>!document.querySelector("[data-annotation-popup]")),Ct()&&(Rn(!1),await Ge(()=>!Ct())),V(!1)),!sx({target:O.children.length?O:O.parentElement??O,accent:o,labelFor:$e=>al($e).label,selectorFor:$e=>al($e).selector,showToast:qt,onExit:()=>{be(),Be(!0),j&&window.setTimeout(()=>Rn(!0),60),ne(),De({type:"wireframe:mode",active:!1})},onSubmit:$e=>{if($e.empty||!$e.changes?.length){qt(D("wireframeEmpty"));return}let tt=Xe($e);nr(),tt&&qt(D("wireframeAdded"))}})){be(),j&&Rn(!0);return}Be(!0),window.setTimeout(ne,90),De({type:"wireframe:mode",active:!0})}function Xe(S){let O=(S.element??null)?.getBoundingClientRect(),j=Md("layout"),ve=S.container,$e={id:j,x:O?Wi(O):2,y:O?Math.round(O.top+window.scrollY):24,comment:(()=>{let Nt=S.changes??[],mn=Nt.filter(co=>co.moved||co.resized).length,Cn=Nt.filter(co=>co.added).length;return`Layout \u2014 ${[mn?`${mn} part(s) rearranged`:"",Cn?`${Cn} block(s) added`:""].filter(Boolean).join(", ")||"renamed parts"} in ${ve?.label??"component"}`})(),element:ve?.label??"component",elementPath:ve?.selector??"",fullPath:ve?.selector??"",timestamp:Date.now(),url:window.location.href,...O?{boundingBox:{x:O.left,y:O.top,width:O.width,height:O.height}}:{}};try{ea(it(),[...kr(it()),$e])}catch(Nt){return console.warn("[annotate-kit] could not store the layout annotation",Nt),null}We.set(j,"design"),Bt(),pn(j),B.set(j,{records:[],prompt:S.prompt??""}),qe(),Be(!0),hn();let tt=so().find(Nt=>Nt.id===j);return tt&&De({type:"design:submit",item:tt}),j}function xt(){ar()&&Hd()}function fn(S){let L=S.querySelector('button[data-adk-role="settings"], [data-adk-role="settings"] button');!L||L.dataset.adkGuarded||(L.dataset.adkGuarded="1",L.addEventListener("click",O=>{let j=ar(),ve=na();!j&&!ve||(O.preventDefault(),O.stopImmediatePropagation(),j&&xt(),ve&&nr(),window.setTimeout(()=>{To()?.querySelector('button[data-adk-role="settings"], [data-adk-role="settings"] button')?.click()},160))},!0))}let jn=()=>`${e.storagePrefix??"adk"}:design:${it()}`,ao=()=>`${e.storagePrefix??"adk"}:design-hidden:${it()}`,jt=new Set;function io(){try{let S=window.localStorage.getItem(ao()),L=S?JSON.parse(S):[];return new Set(Array.isArray(L)?L.map(String):[])}catch{return new Set}}function Fa(){try{window.localStorage.setItem(ao(),JSON.stringify([...jt]))}catch{}}let zt=0;function Gn(){let S=0;B.forEach((L,O)=>{if(jt.has(O))return;let j=Ch(L.records);j<L.records.length&&(S+=L.records.length-j)}),S>0&&zt<6?(zt+=1,window.setTimeout(Gn,250*zt)):zt=0}function ra(S,L){let O=B.get(S);O&&(L?(jt.delete(S),Ch(O.records)):(jt.add(S),Dx(O.records)),Fa(),_l(),De({type:"design:visibility",id:S,visible:L}))}function Fi(){try{let S=window.localStorage.getItem(jn()),L=S?JSON.parse(S):{};return new Map(Object.entries(L))}catch{return new Map}}function qe(){try{window.localStorage.setItem(jn(),JSON.stringify(Object.fromEntries(B)))}catch{}}function Zn(S){let L=S[0],O=L?`${L.property}: ${L.oldValue} \u2192 ${L.newValue}`:"",j=S.length>1?` (+${S.length-1})`:"";return`Design \u2014 ${O}${j}`}function Hi(S){let L=S.records??[],O=L[0],ve=(O?.elementUniqueId?document.querySelector(`[data-agentation-el-id="${O.elementUniqueId}"]`):null)?.getBoundingClientRect(),$e=Md("design"),tt={id:$e,x:ve?Wi(ve):2,y:ve?Math.round(ve.top+window.scrollY):24,comment:Zn(L),element:O?.elementTagName??"element",elementPath:O?.selector??"",fullPath:O?.elementPath??"",timestamp:Date.now(),url:window.location.href,...ve?{boundingBox:{x:ve.left,y:ve.top,width:ve.width,height:ve.height}}:{},...O?.elementClassName?{cssClasses:O.elementClassName}:{},...O?.elementReactComponent?.name?{reactComponents:O.elementReactComponent.name}:{}};try{ea(it(),[...kr(it()),tt])}catch(Nt){return console.warn("[annotate-kit] could not store the design annotation",Nt),null}return We.set($e,"design"),Bt(),pn($e),B.set($e,{records:L,prompt:S.prompt??"",changes:kh(L)}),qe(),Be(!0),hn(),$e}function ir(S){let L=S.elementPath?Lo(S.elementPath):null,j=(L?al(L):null)??{label:S.element||"element",selector:S.elementPath||"",path:S.elementPath||"",fullPath:S.fullPath||S.elementPath||"",tagName:(S.element||"element").split(/[.#\s]/)[0]||"element",rect:S.boundingBox??{x:S.x,y:S.y,width:0,height:0},pageX:S.x,pageY:S.y};S.cssClasses&&(j.classes=S.cssClasses),S.accessibility&&(j.accessibility=S.accessibility),S.nearbyText&&(j.nearbyText=S.nearbyText),S.selectedText&&(j.selectedText=S.selectedText),S.reactComponents&&!j.reactComponent&&(j.reactComponent={name:S.reactComponents}),S.sourceFile&&j.reactComponent&&!j.reactComponent.source&&(j.reactComponent.source=S.sourceFile);let ve={id:String(S.id),kind:We.get(String(S.id))??pt,source:"annotation",comment:S.comment??"",createdAt:S.createdAt??new Date(S.timestamp||Date.now()).toISOString(),url:S.url??window.location.href,pagePath:it(),target:j};j.viewport=Ye.get(String(S.id))??{label:Al(C),width:du()};let $e=ut.get(String(S.id));$e&&(ve.screenshot=$e);let tt=B.get(String(S.id));return tt&&(ve.source="design",ve.designChanges=tt.records,tt.prompt&&(ve.designPrompt=tt.prompt),ve.designChangeBlock=tt.changes??tt.prompt),ve}function Lo(S){try{let L=document.querySelectorAll(S),O=L[0];return L.length===1&&O instanceof HTMLElement?O:null}catch{return null}}function _l(){document.querySelectorAll("[data-annotation-marker]").forEach(L=>{let O=Number.parseInt(L.textContent??"",10),j=Number.isFinite(O)?Y[O-1]:void 0;(j?We.get(String(j.id)):void 0)==="design"?(L.dataset.adkKind!=="design"&&(L.dataset.adkKind="design"),(j?jt.has(String(j.id)):!1)?L.dataset.adkHidden="true":L.dataset.adkHidden&&delete L.dataset.adkHidden):L.dataset.adkKind&&(delete L.dataset.adkKind,delete L.dataset.adkHidden)})}function Wi(S){let L=window.innerWidth||1;return Math.max(0,Math.min(100,(S.left+S.width/2)/L*100))}function so(){return Y.map(ir)}function Ha(S){let L=so();if(!L.length)return"";let O=C1(L,{locale:C,kinds:t,url:window.location.href,pagePath:it(),title:document.title,viewportLine:`${Al(C)} (window ${window.innerWidth}\xD7${window.innerHeight} @${window.devicePixelRatio||1}x)`,designGuidance:bh(L.flatMap(j=>j.designChanges??[]))});return S?`${S}

---

${O}`:O}function yl(S){return{sessionId:r.sessionId(),createdAt:new Date().toISOString(),url:window.location.href,pagePath:it(),title:document.title,locale:C,viewport:{width:window.innerWidth,height:window.innerHeight,dpr:window.devicePixelRatio||1,scrollY:window.scrollY},context:e.context,items:so(),markdown:Ha(S)}}async function Wa(S){if(ht)return ht;let L=jd(S);ht=L,window.__adkDelivery=L;try{return await L}finally{ht=null}}async function jd(S){let L=yl(S);if(!L.items.length)return qt(D("nothingToSend")),{ok:!1,message:"empty"};nt=!0;let O;try{let j=ze();O=await(j&&a.target!==j?B1(a,O1({url:j})):a).send(L)}catch(j){O={ok:!1,message:j instanceof Error?j.message:String(j)}}return nt=!1,O.ok?(e.copyOnSubmit&&await cl(L.markdown),B=new Map,qe(),qt(D("sent"))):qt(D("sendFailed"),{tone:"error"}),De({type:"submit",payload:L,result:O}),O}function ji(){if(Z)return;let S=hu();S&&(pu(S.id),sr=Cm(O=>pu(O))),g(),v==="auto"&&(E=Kh(()=>{ou()||(g(),Be(!0))})),de();for(let[O,j]of w())ut.has(O)||ut.set(O,j);H&&(window.__adkAgentFetch={base:H,run:ee}),fe(),pm(o,iu(e.accentGradient)?.angle),e.settings===!1&&cm(),document.body.style.setProperty("--adk-accent",o),I=Jh(document.body.style,e.accentGradient),te=document.createElement("div"),te.setAttribute("data-adk-root",""),P=f1(),(e.container??document.body).appendChild(te),le={...{copyToClipboard:!0,...e.endpoint?{endpoint:e.endpoint}:{},onAnnotationAdd:O=>{We.set(String(O.id),pt),Bt(),pn(String(O.id)),Ze&&(ut.set(String(O.id),Ze),Ze=null,M()),hn(),pt=e.defaultKind??t[0]?.id??"feature",De({type:"annotation:add",item:ir(O)})},onAnnotationUpdate:O=>{hn(),De({type:"annotation:update",item:ir(O)})},onAnnotationDelete:O=>{We.delete(String(O.id)),ut.delete(String(O.id)),Se.forget(O.id),Bt(),M(),hn(),De({type:"annotation:delete",item:ir(O)})},onAnnotationsClear:O=>{O.forEach(j=>{We.delete(String(j.id)),ut.delete(String(j.id))}),Bt(),M(),Y=[],De({type:"annotations:clear",items:O.map(ir)})},onCopy:O=>{let j=Ha(O);cl(j),De({type:"copy",markdown:j})},onSubmit:(O,j)=>{Y=j,Wa(O)}},webhookUrl:Sh},ge=(0,Eh.createRoot)(te),Be(),he=new MutationObserver(()=>{he?.disconnect();try{ne()}finally{he?.observe(document.body,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:["title","aria-label","placeholder"]})}}),he.observe(document.body,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:["title","aria-label","placeholder"]}),ne(),document.addEventListener("mousedown",Mr,!0),K=fm(),q=rm({accent:o,describe:lr,ignore:ts,active:()=>Ct()&&!ar()&&!na()&&!document.querySelector("[data-annotation-popup]")}),B=Fi(),jt=io(),hn(),Gn(),Se.start(),Z=!0}let sr=null;function ja(S){let L=r1(S.target);if(!L){qt(D("itemGone"));return}L.scrollIntoView({behavior:"smooth",block:"center"});let O=L.getBoundingClientRect(),j=document.createElement("div");j.setAttribute("data-adk-flash",""),j.style.cssText=["position:fixed",`left:${O.left-3}px`,`top:${O.top-3}px`,`width:${O.width+6}px`,`height:${O.height+6}px`,"border-radius:6px",`border:2px solid ${o}`,`background:color-mix(in srgb, ${o} 14%, transparent)`,"pointer-events:none",`z-index:${Gi.canvas}`,"transition:opacity 600ms ease-out"].join(";"),document.body.appendChild(j),window.setTimeout(()=>{j.style.opacity="0"},400),window.setTimeout(()=>j.remove(),1100)}function Jn(S){Ct()&&(y=To());let L=so().find(O=>O.id===S);try{ea(it(),kr(it()).filter(O=>String(O.id)!==S))}catch{}We.delete(S),ut.delete(S),B.delete(S),Bt(),M(),qe(),Be(!0),hn(),L&&De({type:"annotation:delete",item:L})}function lr(S){if(!S)return{kind:D("elElement")};let L=S.tagName.toLowerCase(),O=S.getAttribute("role"),j=D("elElement");/^h[1-6]$/.test(L)||O==="heading"?j=D("elHeading"):L==="button"||O==="button"||L==="input"&&/^(button|submit|reset)$/i.test(S.type)?j=D("elButton"):L==="a"||O==="link"?j=D("elLink"):L==="input"||L==="textarea"||L==="select"||S.isContentEditable?j=D("elField"):L==="img"||L==="svg"||L==="picture"||O==="img"?j=D("elImage"):L==="li"?j=D("elListItem"):L==="label"?j=D("elLabel"):L==="nav"||O==="navigation"?j=D("elNav"):L==="section"||L==="article"||L==="aside"||L==="header"||L==="footer"||L==="main"?j=D("elSection"):(L==="p"||L==="span"||L==="blockquote"||L==="td"||L==="th"||L==="dd"||L==="dt")&&(j=D("elText"));let ve="";return S instanceof HTMLInputElement||S instanceof HTMLTextAreaElement?ve=S.value.trim()||S.placeholder.trim():S instanceof HTMLImageElement?ve=S.alt.trim():ve=(S.getAttribute("aria-label")||S.innerText||"").trim().replace(/\s+/g," "),ve.length>42&&(ve=`${ve.slice(0,40).trimEnd()}\u2026`),ve?{kind:j,text:ve}:{kind:j}}let aa=null;function Mr(S){let L=S.composedPath().find(j=>j instanceof Element);if(!L)return;let O=L.closest("[data-annotation-marker]");if(O){let j=Number.parseInt(O.textContent??"",10);aa=Number.isFinite(j)?j:null;return}ts(L)||document.querySelector("[data-annotation-popup]")||(aa=null,Et=L instanceof HTMLElement?L:L.closest("svg")?.parentElement??L.parentElement)}function ia(){return aa==null?null:Y[aa-1]??null}function hn(){try{let S=kr(it());Array.isArray(S)&&(Y=S),Ye=new Map([...Ye,...je()])}catch{}}function lo(){if(!Z)return;let S=window;S.__adkAgentFetch?.run===ee&&delete S.__adkAgentFetch,Se.stop(),xt(),nr(),zl()&&Ir(!1),E?.(),E=null,I?.(),I=null,sr?.(),sr=null,he?.disconnect(),he=null,oe.destroy(),d?.close(),y=null,document.removeEventListener("mousedown",Mr,!0),K?.(),K=null,P?.(),P=null,q?.(),q=null,me.splice(0).forEach(L=>{queueMicrotask(()=>L.unmount())}),ge?.unmount(),ge=null,te?.remove(),te=null,Z=!1}function To(){let S=document.querySelector("[data-agentation-toolbar], [data-feedback-toolbar]");return(S??document).querySelector('[class*="toolbarContainer"]')??S}function Ct(){let S=To();return!!S&&/expanded/i.test(S.className)}function Rn(S){let L=To();if(!L)return!1;if(S===Ct())return!0;if(S)return L.click(),!0;let O=()=>document.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape",bubbles:!0}));O();for(let j=0;j<3&&Ct();j+=1)O();return!Ct()}return{mount:ji,unmount:lo,start(){Z||ji(),Rn(!0),De({type:"mode",active:!0})},stop(){y=null,xt(),Rn(!1),De({type:"mode",active:!1})},toggle(){Rn(!Ct())},isActive:Ct,enterDesignMode:st,exitDesignMode:xt,isDesignMode:()=>ar(),enterWireframeMode:S=>{ft(S??Et)},exitWireframeMode:()=>nr(),isWireframeMode:()=>na(),setFeature:(S,L)=>u.set(S,L),getFeatures:()=>u.get(),reload(){hn(),B=Fi(),jt=io(),Gn(),Be(!0)},getItems(){return hn(),so()},addItem(S){try{ea(it(),[...kr(it()),{id:S.id,x:window.innerWidth?(S.target.pageX-window.scrollX)/window.innerWidth*100:2,y:S.target.pageY,comment:S.comment,element:S.target.label,elementPath:S.target.selector,fullPath:S.target.fullPath,timestamp:Date.now(),url:S.url}])}catch{}We.set(S.id,S.kind),Bt(),Be(!0),hn(),De({type:"annotation:add",item:S})},removeItem:Jn,clear(){let S=so();B=new Map,qe();try{ea(it(),[])}catch{}We.clear(),ut.clear(),Bt(),M(),Be(!0),Y=[],De({type:"annotations:clear",items:S})},setItemStatus(S,L,O){J1(S,L,O),$d();let j=so().find(ve=>ve.id===S);j&&De({type:"item:status",item:j,status:L,note:O})},getItemStatus:S=>ex(S)?.status??"pending",clearItemStatuses(){tx(),$d()},buildMarkdown:()=>Ha(),buildPayload:()=>yl(),submit:()=>(hn(),Wa()),async copy(){let S=Ha();if(!S)return qt(D("nothingToSend")),!1;let L=await cl(S);return qt(D(L?"copied":"copyFailed"),{tone:L?"status":"error"}),L&&De({type:"copy",markdown:S}),L},setLocale(S){C=S,d?.setLocale(S),ne()},setTheme(S){v=S,S!=="auto"&&ru(null),g(),Be(!0)},setDesignVisible(S,L){ra(String(S),L)},isDesignVisible(S){return!jt.has(String(S))},on(S){return z.add(S),()=>z.delete(S)}}}var o3=["connected-mate.github.io","localhost","127.0.0.1"];function Bx(){if(typeof window>"u"||window.location.protocol==="file:")return!1;let e=window.location.hostname;return e?o3.includes(e)||e.endsWith(".local"):!1}typeof window<"u"&&!Bx()&&console.warn("[annotate-kit] This is the demo build from the Annotate Kit website and only runs there. For your own application, take a licence: alex.cormeraie@gmail.com");function r3(e={}){if(!Bx()){let t=()=>{};return new Proxy({},{get:(n,o)=>o==="getItems"?()=>[]:o==="buildMarkdown"?()=>"":o==="getFeatures"?()=>({}):t})}return Wd(e)}return lv(a3);})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
