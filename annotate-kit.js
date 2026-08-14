var process = typeof process !== "undefined" ? process : { env: { NODE_ENV: "production" } };
"use strict";var AnnotateKitDemo=(()=>{var my=Object.create;var Pa=Object.defineProperty;var gy=Object.getOwnPropertyDescriptor;var _y=Object.getOwnPropertyNames;var yy=Object.getPrototypeOf,xy=Object.prototype.hasOwnProperty;var Ao=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),wy=(e,t)=>{for(var n in t)Pa(e,n,{get:t[n],enumerable:!0})},zf=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of _y(t))!xy.call(e,r)&&r!==n&&Pa(e,r,{get:()=>t[r],enumerable:!(o=gy(t,r))||o.enumerable});return e};var yt=(e,t,n)=>(n=e!=null?my(yy(e)):{},zf(t||!e||!e.__esModule?Pa(n,"default",{value:e,enumerable:!0}):n,e)),vy=e=>zf(Pa({},"__esModule",{value:!0}),e);var Gf=Ao(it=>{"use strict";var ps=Symbol.for("react.element"),by=Symbol.for("react.portal"),ky=Symbol.for("react.fragment"),Cy=Symbol.for("react.strict_mode"),Sy=Symbol.for("react.profiler"),Ey=Symbol.for("react.provider"),My=Symbol.for("react.context"),Ly=Symbol.for("react.forward_ref"),Ty=Symbol.for("react.suspense"),$y=Symbol.for("react.memo"),Iy=Symbol.for("react.lazy"),Ff=Symbol.iterator;function Ny(e){return e===null||typeof e!="object"?null:(e=Ff&&e[Ff]||e["@@iterator"],typeof e=="function"?e:null)}var jf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Uf=Object.assign,Yf={};function fi(e,t,n){this.props=e,this.context=t,this.refs=Yf,this.updater=n||jf}fi.prototype.isReactComponent={};fi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vf(){}Vf.prototype=fi.prototype;function nd(e,t,n){this.props=e,this.context=t,this.refs=Yf,this.updater=n||jf}var od=nd.prototype=new Vf;od.constructor=nd;Uf(od,fi.prototype);od.isPureReactComponent=!0;var Wf=Array.isArray,Xf=Object.prototype.hasOwnProperty,rd={current:null},Qf={key:!0,ref:!0,__self:!0,__source:!0};function Kf(e,t,n){var o,r={},i=null,s=null;if(t!=null)for(o in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Xf.call(t,o)&&!Qf.hasOwnProperty(o)&&(r[o]=t[o]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(e&&e.defaultProps)for(o in a=e.defaultProps,a)r[o]===void 0&&(r[o]=a[o]);return{$$typeof:ps,type:e,key:i,ref:s,props:r,_owner:rd.current}}function Py(e,t){return{$$typeof:ps,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function id(e){return typeof e=="object"&&e!==null&&e.$$typeof===ps}function Ry(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Hf=/\/+/g;function td(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ry(""+e.key):t.toString(36)}function Da(e,t,n,o,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ps:case by:s=!0}}if(s)return s=e,r=r(s),e=o===""?"."+td(s,0):o,Wf(r)?(n="",e!=null&&(n=e.replace(Hf,"$&/")+"/"),Da(r,t,n,"",function(c){return c})):r!=null&&(id(r)&&(r=Py(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Hf,"$&/")+"/")+e)),t.push(r)),1;if(s=0,o=o===""?".":o+":",Wf(e))for(var a=0;a<e.length;a++){i=e[a];var l=o+td(i,a);s+=Da(i,t,n,l,r)}else if(l=Ny(e),typeof l=="function")for(e=l.call(e),a=0;!(i=e.next()).done;)i=i.value,l=o+td(i,a++),s+=Da(i,t,n,l,r);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ra(e,t,n){if(e==null)return e;var o=[],r=0;return Da(e,o,"","",function(i){return t.call(n,i,r++)}),o}function Dy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Sn={current:null},Aa={transition:null},Ay={ReactCurrentDispatcher:Sn,ReactCurrentBatchConfig:Aa,ReactCurrentOwner:rd};function qf(){throw Error("act(...) is not supported in production builds of React.")}it.Children={map:Ra,forEach:function(e,t,n){Ra(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ra(e,function(){t++}),t},toArray:function(e){return Ra(e,function(t){return t})||[]},only:function(e){if(!id(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};it.Component=fi;it.Fragment=ky;it.Profiler=Sy;it.PureComponent=nd;it.StrictMode=Cy;it.Suspense=Ty;it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ay;it.act=qf;it.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=Uf({},e.props),r=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=rd.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Xf.call(t,l)&&!Qf.hasOwnProperty(l)&&(o[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];o.children=a}return{$$typeof:ps,type:e.type,key:r,ref:i,props:o,_owner:s}};it.createContext=function(e){return e={$$typeof:My,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ey,_context:e},e.Consumer=e};it.createElement=Kf;it.createFactory=function(e){var t=Kf.bind(null,e);return t.type=e,t};it.createRef=function(){return{current:null}};it.forwardRef=function(e){return{$$typeof:Ly,render:e}};it.isValidElement=id;it.lazy=function(e){return{$$typeof:Iy,_payload:{_status:-1,_result:e},_init:Dy}};it.memo=function(e,t){return{$$typeof:$y,type:e,compare:t===void 0?null:t}};it.startTransition=function(e){var t=Aa.transition;Aa.transition={};try{e()}finally{Aa.transition=t}};it.unstable_act=qf;it.useCallback=function(e,t){return Sn.current.useCallback(e,t)};it.useContext=function(e){return Sn.current.useContext(e)};it.useDebugValue=function(){};it.useDeferredValue=function(e){return Sn.current.useDeferredValue(e)};it.useEffect=function(e,t){return Sn.current.useEffect(e,t)};it.useId=function(){return Sn.current.useId()};it.useImperativeHandle=function(e,t,n){return Sn.current.useImperativeHandle(e,t,n)};it.useInsertionEffect=function(e,t){return Sn.current.useInsertionEffect(e,t)};it.useLayoutEffect=function(e,t){return Sn.current.useLayoutEffect(e,t)};it.useMemo=function(e,t){return Sn.current.useMemo(e,t)};it.useReducer=function(e,t,n){return Sn.current.useReducer(e,t,n)};it.useRef=function(e){return Sn.current.useRef(e)};it.useState=function(e){return Sn.current.useState(e)};it.useSyncExternalStore=function(e,t,n){return Sn.current.useSyncExternalStore(e,t,n)};it.useTransition=function(){return Sn.current.useTransition()};it.version="18.3.1"});var lo=Ao((Hk,Zf)=>{"use strict";Zf.exports=Gf()});var lh=Ao(kt=>{"use strict";function cd(e,t){var n=e.length;e.push(t);e:for(;0<n;){var o=n-1>>>1,r=e[o];if(0<Ba(r,t))e[o]=t,e[n]=r,n=o;else break e}}function co(e){return e.length===0?null:e[0]}function za(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var o=0,r=e.length,i=r>>>1;o<i;){var s=2*(o+1)-1,a=e[s],l=s+1,c=e[l];if(0>Ba(a,n))l<r&&0>Ba(c,a)?(e[o]=c,e[l]=n,o=l):(e[o]=a,e[s]=n,o=s);else if(l<r&&0>Ba(c,n))e[o]=c,e[l]=n,o=l;else break e}}return t}function Ba(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Jf=performance,kt.unstable_now=function(){return Jf.now()}):(sd=Date,eh=sd.now(),kt.unstable_now=function(){return sd.now()-eh});var Jf,sd,eh,ko=[],Zo=[],By=1,Qn=null,yn=3,Fa=!1,Pr=!1,hs=!1,oh=typeof setTimeout=="function"?setTimeout:null,rh=typeof clearTimeout=="function"?clearTimeout:null,th=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function dd(e){for(var t=co(Zo);t!==null;){if(t.callback===null)za(Zo);else if(t.startTime<=e)za(Zo),t.sortIndex=t.expirationTime,cd(ko,t);else break;t=co(Zo)}}function ud(e){if(hs=!1,dd(e),!Pr)if(co(ko)!==null)Pr=!0,fd(pd);else{var t=co(Zo);t!==null&&hd(ud,t.startTime-e)}}function pd(e,t){Pr=!1,hs&&(hs=!1,rh(ms),ms=-1),Fa=!0;var n=yn;try{for(dd(t),Qn=co(ko);Qn!==null&&(!(Qn.expirationTime>t)||e&&!ah());){var o=Qn.callback;if(typeof o=="function"){Qn.callback=null,yn=Qn.priorityLevel;var r=o(Qn.expirationTime<=t);t=kt.unstable_now(),typeof r=="function"?Qn.callback=r:Qn===co(ko)&&za(ko),dd(t)}else za(ko);Qn=co(ko)}if(Qn!==null)var i=!0;else{var s=co(Zo);s!==null&&hd(ud,s.startTime-t),i=!1}return i}finally{Qn=null,yn=n,Fa=!1}}var Wa=!1,Oa=null,ms=-1,ih=5,sh=-1;function ah(){return!(kt.unstable_now()-sh<ih)}function ad(){if(Oa!==null){var e=kt.unstable_now();sh=e;var t=!0;try{t=Oa(!0,e)}finally{t?fs():(Wa=!1,Oa=null)}}else Wa=!1}var fs;typeof th=="function"?fs=function(){th(ad)}:typeof MessageChannel<"u"?(ld=new MessageChannel,nh=ld.port2,ld.port1.onmessage=ad,fs=function(){nh.postMessage(null)}):fs=function(){oh(ad,0)};var ld,nh;function fd(e){Oa=e,Wa||(Wa=!0,fs())}function hd(e,t){ms=oh(function(){e(kt.unstable_now())},t)}kt.unstable_IdlePriority=5;kt.unstable_ImmediatePriority=1;kt.unstable_LowPriority=4;kt.unstable_NormalPriority=3;kt.unstable_Profiling=null;kt.unstable_UserBlockingPriority=2;kt.unstable_cancelCallback=function(e){e.callback=null};kt.unstable_continueExecution=function(){Pr||Fa||(Pr=!0,fd(pd))};kt.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ih=0<e?Math.floor(1e3/e):5};kt.unstable_getCurrentPriorityLevel=function(){return yn};kt.unstable_getFirstCallbackNode=function(){return co(ko)};kt.unstable_next=function(e){switch(yn){case 1:case 2:case 3:var t=3;break;default:t=yn}var n=yn;yn=t;try{return e()}finally{yn=n}};kt.unstable_pauseExecution=function(){};kt.unstable_requestPaint=function(){};kt.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=yn;yn=e;try{return t()}finally{yn=n}};kt.unstable_scheduleCallback=function(e,t,n){var o=kt.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?o+n:o):n=o,e){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=n+r,e={id:By++,callback:t,priorityLevel:e,startTime:n,expirationTime:r,sortIndex:-1},n>o?(e.sortIndex=n,cd(Zo,e),co(ko)===null&&e===co(Zo)&&(hs?(rh(ms),ms=-1):hs=!0,hd(ud,n-o))):(e.sortIndex=r,cd(ko,e),Pr||Fa||(Pr=!0,fd(pd))),e};kt.unstable_shouldYield=ah;kt.unstable_wrapCallback=function(e){var t=yn;return function(){var n=yn;yn=t;try{return e.apply(this,arguments)}finally{yn=n}}}});var dh=Ao((Uk,ch)=>{"use strict";ch.exports=lh()});var h_=Ao(Hn=>{"use strict";var Oy=lo(),Fn=dh();function pe(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _m=new Set,Bs={};function Vr(e,t){Ri(e,t),Ri(e+"Capture",t)}function Ri(e,t){for(Bs[e]=t,e=0;e<t.length;e++)_m.add(t[e])}var Ho=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bd=Object.prototype.hasOwnProperty,zy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uh={},ph={};function Fy(e){return Bd.call(ph,e)?!0:Bd.call(uh,e)?!1:zy.test(e)?ph[e]=!0:(uh[e]=!0,!1)}function Wy(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hy(e,t,n,o){if(t===null||typeof t>"u"||Wy(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ln(e,t,n,o,r,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var hn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){hn[e]=new Ln(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];hn[t]=new Ln(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){hn[e]=new Ln(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){hn[e]=new Ln(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){hn[e]=new Ln(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){hn[e]=new Ln(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){hn[e]=new Ln(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){hn[e]=new Ln(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){hn[e]=new Ln(e,5,!1,e.toLowerCase(),null,!1,!1)});var Tu=/[\-:]([a-z])/g;function $u(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Tu,$u);hn[t]=new Ln(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Tu,$u);hn[t]=new Ln(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Tu,$u);hn[t]=new Ln(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){hn[e]=new Ln(e,1,!1,e.toLowerCase(),null,!1,!1)});hn.xlinkHref=new Ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){hn[e]=new Ln(e,1,!1,e.toLowerCase(),null,!0,!0)});function Iu(e,t,n,o){var r=hn.hasOwnProperty(t)?hn[t]:null;(r!==null?r.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Hy(t,n,r,o)&&(n=null),o||r===null?Fy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,o=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var Vo=Oy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ha=Symbol.for("react.element"),gi=Symbol.for("react.portal"),_i=Symbol.for("react.fragment"),Nu=Symbol.for("react.strict_mode"),Od=Symbol.for("react.profiler"),ym=Symbol.for("react.provider"),xm=Symbol.for("react.context"),Pu=Symbol.for("react.forward_ref"),zd=Symbol.for("react.suspense"),Fd=Symbol.for("react.suspense_list"),Ru=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),wm=Symbol.for("react.offscreen"),fh=Symbol.iterator;function gs(e){return e===null||typeof e!="object"?null:(e=fh&&e[fh]||e["@@iterator"],typeof e=="function"?e:null)}var Bt=Object.assign,md;function Cs(e){if(md===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);md=t&&t[1]||""}return`
`+md+e}var gd=!1;function _d(e,t){if(!e||gd)return"";gd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var o=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){o=c}e.call(t.prototype)}else{try{throw Error()}catch(c){o=c}e()}}catch(c){if(c&&o&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),i=o.stack.split(`
`),s=r.length-1,a=i.length-1;1<=s&&0<=a&&r[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==i[a]){var l=`
`+r[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{gd=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Cs(e):""}function jy(e){switch(e.tag){case 5:return Cs(e.type);case 16:return Cs("Lazy");case 13:return Cs("Suspense");case 19:return Cs("SuspenseList");case 0:case 2:case 15:return e=_d(e.type,!1),e;case 11:return e=_d(e.type.render,!1),e;case 1:return e=_d(e.type,!0),e;default:return""}}function Wd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _i:return"Fragment";case gi:return"Portal";case Od:return"Profiler";case Nu:return"StrictMode";case zd:return"Suspense";case Fd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xm:return(e.displayName||"Context")+".Consumer";case ym:return(e._context.displayName||"Context")+".Provider";case Pu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ru:return t=e.displayName||null,t!==null?t:Wd(e.type)||"Memo";case er:t=e._payload,e=e._init;try{return Wd(e(t))}catch{}}return null}function Uy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wd(t);case 8:return t===Nu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function hr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Yy(e){var t=vm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(s){o=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(s){o=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ja(e){e._valueTracker||(e._valueTracker=Yy(e))}function bm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=vm(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function _l(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Hd(e,t){var n=t.checked;return Bt({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function hh(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=hr(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function km(e,t){t=t.checked,t!=null&&Iu(e,"checked",t,!1)}function jd(e,t){km(e,t);var n=hr(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ud(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ud(e,t.type,hr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function mh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ud(e,t,n){(t!=="number"||_l(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ss=Array.isArray;function Li(e,t,n,o){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&o&&(e[n].defaultSelected=!0)}else{for(n=""+hr(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,o&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Yd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(pe(91));return Bt({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(pe(92));if(Ss(n)){if(1<n.length)throw Error(pe(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:hr(n)}}function Cm(e,t){var n=hr(t.value),o=hr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function _h(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Sm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Sm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ua,Em=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,r)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ua=Ua||document.createElement("div"),Ua.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ua.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Os(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ls={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vy=["Webkit","ms","Moz","O"];Object.keys(Ls).forEach(function(e){Vy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ls[t]=Ls[e]})});function Mm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ls.hasOwnProperty(e)&&Ls[e]?(""+t).trim():t+"px"}function Lm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,r=Mm(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,r):e[n]=r}}var Xy=Bt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xd(e,t){if(t){if(Xy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(pe(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(pe(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(pe(61))}if(t.style!=null&&typeof t.style!="object")throw Error(pe(62))}}function Qd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kd=null;function Du(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qd=null,Ti=null,$i=null;function yh(e){if(e=na(e)){if(typeof qd!="function")throw Error(pe(280));var t=e.stateNode;t&&(t=Yl(t),qd(e.stateNode,e.type,t))}}function Tm(e){Ti?$i?$i.push(e):$i=[e]:Ti=e}function $m(){if(Ti){var e=Ti,t=$i;if($i=Ti=null,yh(e),t)for(e=0;e<t.length;e++)yh(t[e])}}function Im(e,t){return e(t)}function Nm(){}var yd=!1;function Pm(e,t,n){if(yd)return e(t,n);yd=!0;try{return Im(e,t,n)}finally{yd=!1,(Ti!==null||$i!==null)&&(Nm(),$m())}}function zs(e,t){var n=e.stateNode;if(n===null)return null;var o=Yl(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(pe(231,t,typeof n));return n}var Gd=!1;if(Ho)try{hi={},Object.defineProperty(hi,"passive",{get:function(){Gd=!0}}),window.addEventListener("test",hi,hi),window.removeEventListener("test",hi,hi)}catch{Gd=!1}var hi;function Qy(e,t,n,o,r,i,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Ts=!1,yl=null,xl=!1,Zd=null,Ky={onError:function(e){Ts=!0,yl=e}};function qy(e,t,n,o,r,i,s,a,l){Ts=!1,yl=null,Qy.apply(Ky,arguments)}function Gy(e,t,n,o,r,i,s,a,l){if(qy.apply(this,arguments),Ts){if(Ts){var c=yl;Ts=!1,yl=null}else throw Error(pe(198));xl||(xl=!0,Zd=c)}}function Xr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xh(e){if(Xr(e)!==e)throw Error(pe(188))}function Zy(e){var t=e.alternate;if(!t){if(t=Xr(e),t===null)throw Error(pe(188));return t!==e?null:e}for(var n=e,o=t;;){var r=n.return;if(r===null)break;var i=r.alternate;if(i===null){if(o=r.return,o!==null){n=o;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===n)return xh(r),e;if(i===o)return xh(r),t;i=i.sibling}throw Error(pe(188))}if(n.return!==o.return)n=r,o=i;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,o=i;break}if(a===o){s=!0,o=r,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,o=r;break}if(a===o){s=!0,o=i,n=r;break}a=a.sibling}if(!s)throw Error(pe(189))}}if(n.alternate!==o)throw Error(pe(190))}if(n.tag!==3)throw Error(pe(188));return n.stateNode.current===n?e:t}function Dm(e){return e=Zy(e),e!==null?Am(e):null}function Am(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Am(e);if(t!==null)return t;e=e.sibling}return null}var Bm=Fn.unstable_scheduleCallback,wh=Fn.unstable_cancelCallback,Jy=Fn.unstable_shouldYield,e5=Fn.unstable_requestPaint,Xt=Fn.unstable_now,t5=Fn.unstable_getCurrentPriorityLevel,Au=Fn.unstable_ImmediatePriority,Om=Fn.unstable_UserBlockingPriority,wl=Fn.unstable_NormalPriority,n5=Fn.unstable_LowPriority,zm=Fn.unstable_IdlePriority,Wl=null,Mo=null;function o5(e){if(Mo&&typeof Mo.onCommitFiberRoot=="function")try{Mo.onCommitFiberRoot(Wl,e,void 0,(e.current.flags&128)===128)}catch{}}var mo=Math.clz32?Math.clz32:s5,r5=Math.log,i5=Math.LN2;function s5(e){return e>>>=0,e===0?32:31-(r5(e)/i5|0)|0}var Ya=64,Va=4194304;function Es(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vl(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,r=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?o=Es(a):(i&=s,i!==0&&(o=Es(i)))}else s=n&~r,s!==0?o=Es(s):i!==0&&(o=Es(i));if(o===0)return 0;if(t!==0&&t!==o&&(t&r)===0&&(r=o&-o,i=t&-t,r>=i||r===16&&(i&4194240)!==0))return t;if((o&4)!==0&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-mo(t),r=1<<n,o|=e[n],t&=~r;return o}function a5(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function l5(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-mo(i),a=1<<s,l=r[s];l===-1?((a&n)===0||(a&o)!==0)&&(r[s]=a5(a,t)):l<=t&&(e.expiredLanes|=a),i&=~a}}function Jd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fm(){var e=Ya;return Ya<<=1,(Ya&4194240)===0&&(Ya=64),e}function xd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ea(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-mo(t),e[t]=n}function c5(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-mo(n),i=1<<r;t[r]=0,o[r]=-1,e[r]=-1,n&=~i}}function Bu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-mo(n),r=1<<o;r&t|e[o]&t&&(e[o]|=t),n&=~r}}var ft=0;function Wm(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Hm,Ou,jm,Um,Ym,eu=!1,Xa=[],sr=null,ar=null,lr=null,Fs=new Map,Ws=new Map,nr=[],d5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vh(e,t){switch(e){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":Fs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ws.delete(t.pointerId)}}function _s(e,t,n,o,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:i,targetContainers:[r]},t!==null&&(t=na(t),t!==null&&Ou(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function u5(e,t,n,o,r){switch(t){case"focusin":return sr=_s(sr,e,t,n,o,r),!0;case"dragenter":return ar=_s(ar,e,t,n,o,r),!0;case"mouseover":return lr=_s(lr,e,t,n,o,r),!0;case"pointerover":var i=r.pointerId;return Fs.set(i,_s(Fs.get(i)||null,e,t,n,o,r)),!0;case"gotpointercapture":return i=r.pointerId,Ws.set(i,_s(Ws.get(i)||null,e,t,n,o,r)),!0}return!1}function Vm(e){var t=Ar(e.target);if(t!==null){var n=Xr(t);if(n!==null){if(t=n.tag,t===13){if(t=Rm(n),t!==null){e.blockedOn=t,Ym(e.priority,function(){jm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function al(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=tu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Kd=o,n.target.dispatchEvent(o),Kd=null}else return t=na(n),t!==null&&Ou(t),e.blockedOn=n,!1;t.shift()}return!0}function bh(e,t,n){al(e)&&n.delete(t)}function p5(){eu=!1,sr!==null&&al(sr)&&(sr=null),ar!==null&&al(ar)&&(ar=null),lr!==null&&al(lr)&&(lr=null),Fs.forEach(bh),Ws.forEach(bh)}function ys(e,t){e.blockedOn===t&&(e.blockedOn=null,eu||(eu=!0,Fn.unstable_scheduleCallback(Fn.unstable_NormalPriority,p5)))}function Hs(e){function t(r){return ys(r,e)}if(0<Xa.length){ys(Xa[0],e);for(var n=1;n<Xa.length;n++){var o=Xa[n];o.blockedOn===e&&(o.blockedOn=null)}}for(sr!==null&&ys(sr,e),ar!==null&&ys(ar,e),lr!==null&&ys(lr,e),Fs.forEach(t),Ws.forEach(t),n=0;n<nr.length;n++)o=nr[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)Vm(n),n.blockedOn===null&&nr.shift()}var Ii=Vo.ReactCurrentBatchConfig,bl=!0;function f5(e,t,n,o){var r=ft,i=Ii.transition;Ii.transition=null;try{ft=1,zu(e,t,n,o)}finally{ft=r,Ii.transition=i}}function h5(e,t,n,o){var r=ft,i=Ii.transition;Ii.transition=null;try{ft=4,zu(e,t,n,o)}finally{ft=r,Ii.transition=i}}function zu(e,t,n,o){if(bl){var r=tu(e,t,n,o);if(r===null)Ed(e,t,o,kl,n),vh(e,o);else if(u5(r,e,t,n,o))o.stopPropagation();else if(vh(e,o),t&4&&-1<d5.indexOf(e)){for(;r!==null;){var i=na(r);if(i!==null&&Hm(i),i=tu(e,t,n,o),i===null&&Ed(e,t,o,kl,n),i===r)break;r=i}r!==null&&o.stopPropagation()}else Ed(e,t,o,null,n)}}var kl=null;function tu(e,t,n,o){if(kl=null,e=Du(o),e=Ar(e),e!==null)if(t=Xr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Rm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return kl=e,null}function Xm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(t5()){case Au:return 1;case Om:return 4;case wl:case n5:return 16;case zm:return 536870912;default:return 16}default:return 16}}var rr=null,Fu=null,ll=null;function Qm(){if(ll)return ll;var e,t=Fu,n=t.length,o,r="value"in rr?rr.value:rr.textContent,i=r.length;for(e=0;e<n&&t[e]===r[e];e++);var s=n-e;for(o=1;o<=s&&t[n-o]===r[i-o];o++);return ll=r.slice(e,1<o?1-o:void 0)}function cl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qa(){return!0}function kh(){return!1}function Wn(e){function t(n,o,r,i,s){this._reactName=n,this._targetInst=r,this.type=o,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Qa:kh,this.isPropagationStopped=kh,this}return Bt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qa)},persist:function(){},isPersistent:Qa}),t}var Wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wu=Wn(Wi),ta=Bt({},Wi,{view:0,detail:0}),m5=Wn(ta),wd,vd,xs,Hl=Bt({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xs&&(xs&&e.type==="mousemove"?(wd=e.screenX-xs.screenX,vd=e.screenY-xs.screenY):vd=wd=0,xs=e),wd)},movementY:function(e){return"movementY"in e?e.movementY:vd}}),Ch=Wn(Hl),g5=Bt({},Hl,{dataTransfer:0}),_5=Wn(g5),y5=Bt({},ta,{relatedTarget:0}),bd=Wn(y5),x5=Bt({},Wi,{animationName:0,elapsedTime:0,pseudoElement:0}),w5=Wn(x5),v5=Bt({},Wi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),b5=Wn(v5),k5=Bt({},Wi,{data:0}),Sh=Wn(k5),C5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},S5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},E5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function M5(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=E5[e])?!!t[e]:!1}function Hu(){return M5}var L5=Bt({},ta,{key:function(e){if(e.key){var t=C5[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=cl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?S5[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hu,charCode:function(e){return e.type==="keypress"?cl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?cl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),T5=Wn(L5),$5=Bt({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Eh=Wn($5),I5=Bt({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hu}),N5=Wn(I5),P5=Bt({},Wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),R5=Wn(P5),D5=Bt({},Hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),A5=Wn(D5),B5=[9,13,27,32],ju=Ho&&"CompositionEvent"in window,$s=null;Ho&&"documentMode"in document&&($s=document.documentMode);var O5=Ho&&"TextEvent"in window&&!$s,Km=Ho&&(!ju||$s&&8<$s&&11>=$s),Mh=" ",Lh=!1;function qm(e,t){switch(e){case"keyup":return B5.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yi=!1;function z5(e,t){switch(e){case"compositionend":return Gm(t);case"keypress":return t.which!==32?null:(Lh=!0,Mh);case"textInput":return e=t.data,e===Mh&&Lh?null:e;default:return null}}function F5(e,t){if(yi)return e==="compositionend"||!ju&&qm(e,t)?(e=Qm(),ll=Fu=rr=null,yi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Km&&t.locale!=="ko"?null:t.data;default:return null}}var W5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Th(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!W5[e.type]:t==="textarea"}function Zm(e,t,n,o){Tm(o),t=Cl(t,"onChange"),0<t.length&&(n=new Wu("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var Is=null,js=null;function H5(e){cg(e,0)}function jl(e){var t=vi(e);if(bm(t))return e}function j5(e,t){if(e==="change")return t}var Jm=!1;Ho&&(Ho?(qa="oninput"in document,qa||(kd=document.createElement("div"),kd.setAttribute("oninput","return;"),qa=typeof kd.oninput=="function"),Ka=qa):Ka=!1,Jm=Ka&&(!document.documentMode||9<document.documentMode));var Ka,qa,kd;function $h(){Is&&(Is.detachEvent("onpropertychange",eg),js=Is=null)}function eg(e){if(e.propertyName==="value"&&jl(js)){var t=[];Zm(t,js,e,Du(e)),Pm(H5,t)}}function U5(e,t,n){e==="focusin"?($h(),Is=t,js=n,Is.attachEvent("onpropertychange",eg)):e==="focusout"&&$h()}function Y5(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jl(js)}function V5(e,t){if(e==="click")return jl(t)}function X5(e,t){if(e==="input"||e==="change")return jl(t)}function Q5(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _o=typeof Object.is=="function"?Object.is:Q5;function Us(e,t){if(_o(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var r=n[o];if(!Bd.call(t,r)||!_o(e[r],t[r]))return!1}return!0}function Ih(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nh(e,t){var n=Ih(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ih(n)}}function tg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ng(){for(var e=window,t=_l();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_l(e.document)}return t}function Uu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function K5(e){var t=ng(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&tg(n.ownerDocument.documentElement,n)){if(o!==null&&Uu(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,i=Math.min(o.start,r);o=o.end===void 0?i:Math.min(o.end,r),!e.extend&&i>o&&(r=o,o=i,i=r),r=Nh(n,i);var s=Nh(n,o);r&&s&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),i>o?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var q5=Ho&&"documentMode"in document&&11>=document.documentMode,xi=null,nu=null,Ns=null,ou=!1;function Ph(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ou||xi==null||xi!==_l(o)||(o=xi,"selectionStart"in o&&Uu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ns&&Us(Ns,o)||(Ns=o,o=Cl(nu,"onSelect"),0<o.length&&(t=new Wu("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=xi)))}function Ga(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wi={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionend:Ga("Transition","TransitionEnd")},Cd={},og={};Ho&&(og=document.createElement("div").style,"AnimationEvent"in window||(delete wi.animationend.animation,delete wi.animationiteration.animation,delete wi.animationstart.animation),"TransitionEvent"in window||delete wi.transitionend.transition);function Ul(e){if(Cd[e])return Cd[e];if(!wi[e])return e;var t=wi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in og)return Cd[e]=t[n];return e}var rg=Ul("animationend"),ig=Ul("animationiteration"),sg=Ul("animationstart"),ag=Ul("transitionend"),lg=new Map,Rh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(e,t){lg.set(e,t),Vr(t,[e])}for(Za=0;Za<Rh.length;Za++)Ja=Rh[Za],Dh=Ja.toLowerCase(),Ah=Ja[0].toUpperCase()+Ja.slice(1),gr(Dh,"on"+Ah);var Ja,Dh,Ah,Za;gr(rg,"onAnimationEnd");gr(ig,"onAnimationIteration");gr(sg,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(ag,"onTransitionEnd");Ri("onMouseEnter",["mouseout","mouseover"]);Ri("onMouseLeave",["mouseout","mouseover"]);Ri("onPointerEnter",["pointerout","pointerover"]);Ri("onPointerLeave",["pointerout","pointerover"]);Vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G5=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ms));function Bh(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,Gy(o,t,void 0,e),e.currentTarget=null}function cg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],r=o.event;o=o.listeners;e:{var i=void 0;if(t)for(var s=o.length-1;0<=s;s--){var a=o[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==i&&r.isPropagationStopped())break e;Bh(r,a,c),i=l}else for(s=0;s<o.length;s++){if(a=o[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==i&&r.isPropagationStopped())break e;Bh(r,a,c),i=l}}}if(xl)throw e=Zd,xl=!1,Zd=null,e}function Et(e,t){var n=t[lu];n===void 0&&(n=t[lu]=new Set);var o=e+"__bubble";n.has(o)||(dg(t,e,2,!1),n.add(o))}function Sd(e,t,n){var o=0;t&&(o|=4),dg(n,e,o,t)}var el="_reactListening"+Math.random().toString(36).slice(2);function Ys(e){if(!e[el]){e[el]=!0,_m.forEach(function(n){n!=="selectionchange"&&(G5.has(n)||Sd(n,!1,e),Sd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[el]||(t[el]=!0,Sd("selectionchange",!1,t))}}function dg(e,t,n,o){switch(Xm(t)){case 1:var r=f5;break;case 4:r=h5;break;default:r=zu}n=r.bind(null,t,n,e),r=void 0,!Gd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),o?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Ed(e,t,n,o,r){var i=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var s=o.tag;if(s===3||s===4){var a=o.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=o.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Ar(a),s===null)return;if(l=s.tag,l===5||l===6){o=i=s;continue e}a=a.parentNode}}o=o.return}Pm(function(){var c=i,d=Du(n),m=[];e:{var f=lg.get(e);if(f!==void 0){var b=Wu,v=e;switch(e){case"keypress":if(cl(n)===0)break e;case"keydown":case"keyup":b=T5;break;case"focusin":v="focus",b=bd;break;case"focusout":v="blur",b=bd;break;case"beforeblur":case"afterblur":b=bd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Ch;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=_5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=N5;break;case rg:case ig:case sg:b=w5;break;case ag:b=R5;break;case"scroll":b=m5;break;case"wheel":b=A5;break;case"copy":case"cut":case"paste":b=b5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Eh}var P=(t&4)!==0,k=!P&&e==="scroll",h=P?f!==null?f+"Capture":null:f;P=[];for(var _=c,S;_!==null;){S=_;var D=S.stateNode;if(S.tag===5&&D!==null&&(S=D,h!==null&&(D=zs(_,h),D!=null&&P.push(Vs(_,D,S)))),k)break;_=_.return}0<P.length&&(f=new b(f,v,null,n,d),m.push({event:f,listeners:P}))}}if((t&7)===0){e:{if(f=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",f&&n!==Kd&&(v=n.relatedTarget||n.fromElement)&&(Ar(v)||v[jo]))break e;if((b||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,b?(v=n.relatedTarget||n.toElement,b=c,v=v?Ar(v):null,v!==null&&(k=Xr(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(b=null,v=c),b!==v)){if(P=Ch,D="onMouseLeave",h="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(P=Eh,D="onPointerLeave",h="onPointerEnter",_="pointer"),k=b==null?f:vi(b),S=v==null?f:vi(v),f=new P(D,_+"leave",b,n,d),f.target=k,f.relatedTarget=S,D=null,Ar(d)===c&&(P=new P(h,_+"enter",v,n,d),P.target=S,P.relatedTarget=k,D=P),k=D,b&&v)t:{for(P=b,h=v,_=0,S=P;S;S=mi(S))_++;for(S=0,D=h;D;D=mi(D))S++;for(;0<_-S;)P=mi(P),_--;for(;0<S-_;)h=mi(h),S--;for(;_--;){if(P===h||h!==null&&P===h.alternate)break t;P=mi(P),h=mi(h)}P=null}else P=null;b!==null&&Oh(m,f,b,P,!1),v!==null&&k!==null&&Oh(m,k,v,P,!0)}}e:{if(f=c?vi(c):window,b=f.nodeName&&f.nodeName.toLowerCase(),b==="select"||b==="input"&&f.type==="file")var Z=j5;else if(Th(f))if(Jm)Z=X5;else{Z=Y5;var q=U5}else(b=f.nodeName)&&b.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(Z=V5);if(Z&&(Z=Z(e,c))){Zm(m,Z,n,d);break e}q&&q(e,f,c),e==="focusout"&&(q=f._wrapperState)&&q.controlled&&f.type==="number"&&Ud(f,"number",f.value)}switch(q=c?vi(c):window,e){case"focusin":(Th(q)||q.contentEditable==="true")&&(xi=q,nu=c,Ns=null);break;case"focusout":Ns=nu=xi=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,Ph(m,n,d);break;case"selectionchange":if(q5)break;case"keydown":case"keyup":Ph(m,n,d)}var O;if(ju)e:{switch(e){case"compositionstart":var ie="onCompositionStart";break e;case"compositionend":ie="onCompositionEnd";break e;case"compositionupdate":ie="onCompositionUpdate";break e}ie=void 0}else yi?qm(e,n)&&(ie="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ie="onCompositionStart");ie&&(Km&&n.locale!=="ko"&&(yi||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&yi&&(O=Qm()):(rr=d,Fu="value"in rr?rr.value:rr.textContent,yi=!0)),q=Cl(c,ie),0<q.length&&(ie=new Sh(ie,e,null,n,d),m.push({event:ie,listeners:q}),O?ie.data=O:(O=Gm(n),O!==null&&(ie.data=O)))),(O=O5?z5(e,n):F5(e,n))&&(c=Cl(c,"onBeforeInput"),0<c.length&&(d=new Sh("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:c}),d.data=O))}cg(m,t)})}function Vs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Cl(e,t){for(var n=t+"Capture",o=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=zs(e,n),i!=null&&o.unshift(Vs(e,i,r)),i=zs(e,t),i!=null&&o.push(Vs(e,i,r))),e=e.return}return o}function mi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Oh(e,t,n,o,r){for(var i=t._reactName,s=[];n!==null&&n!==o;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===o)break;a.tag===5&&c!==null&&(a=c,r?(l=zs(n,i),l!=null&&s.unshift(Vs(n,l,a))):r||(l=zs(n,i),l!=null&&s.push(Vs(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Z5=/\r\n?/g,J5=/\u0000|\uFFFD/g;function zh(e){return(typeof e=="string"?e:""+e).replace(Z5,`
`).replace(J5,"")}function tl(e,t,n){if(t=zh(t),zh(e)!==t&&n)throw Error(pe(425))}function Sl(){}var ru=null,iu=null;function su(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var au=typeof setTimeout=="function"?setTimeout:void 0,e2=typeof clearTimeout=="function"?clearTimeout:void 0,Fh=typeof Promise=="function"?Promise:void 0,t2=typeof queueMicrotask=="function"?queueMicrotask:typeof Fh<"u"?function(e){return Fh.resolve(null).then(e).catch(n2)}:au;function n2(e){setTimeout(function(){throw e})}function Md(e,t){var n=t,o=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(o===0){e.removeChild(r),Hs(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=r}while(n);Hs(t)}function cr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Hi=Math.random().toString(36).slice(2),Eo="__reactFiber$"+Hi,Xs="__reactProps$"+Hi,jo="__reactContainer$"+Hi,lu="__reactEvents$"+Hi,o2="__reactListeners$"+Hi,r2="__reactHandles$"+Hi;function Ar(e){var t=e[Eo];if(t)return t;for(var n=e.parentNode;n;){if(t=n[jo]||n[Eo]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wh(e);e!==null;){if(n=e[Eo])return n;e=Wh(e)}return t}e=n,n=e.parentNode}return null}function na(e){return e=e[Eo]||e[jo],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(pe(33))}function Yl(e){return e[Xs]||null}var cu=[],bi=-1;function _r(e){return{current:e}}function Mt(e){0>bi||(e.current=cu[bi],cu[bi]=null,bi--)}function Ct(e,t){bi++,cu[bi]=e.current,e.current=t}var mr={},bn=_r(mr),Rn=_r(!1),Wr=mr;function Di(e,t){var n=e.type.contextTypes;if(!n)return mr;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in n)r[i]=t[i];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function Dn(e){return e=e.childContextTypes,e!=null}function El(){Mt(Rn),Mt(bn)}function Hh(e,t,n){if(bn.current!==mr)throw Error(pe(168));Ct(bn,t),Ct(Rn,n)}function ug(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var r in o)if(!(r in t))throw Error(pe(108,Uy(e)||"Unknown",r));return Bt({},n,o)}function Ml(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mr,Wr=bn.current,Ct(bn,e),Ct(Rn,Rn.current),!0}function jh(e,t,n){var o=e.stateNode;if(!o)throw Error(pe(169));n?(e=ug(e,t,Wr),o.__reactInternalMemoizedMergedChildContext=e,Mt(Rn),Mt(bn),Ct(bn,e)):Mt(Rn),Ct(Rn,n)}var Oo=null,Vl=!1,Ld=!1;function pg(e){Oo===null?Oo=[e]:Oo.push(e)}function i2(e){Vl=!0,pg(e)}function yr(){if(!Ld&&Oo!==null){Ld=!0;var e=0,t=ft;try{var n=Oo;for(ft=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}Oo=null,Vl=!1}catch(r){throw Oo!==null&&(Oo=Oo.slice(e+1)),Bm(Au,yr),r}finally{ft=t,Ld=!1}}return null}var ki=[],Ci=0,Ll=null,Tl=0,Kn=[],qn=0,Hr=null,zo=1,Fo="";function Rr(e,t){ki[Ci++]=Tl,ki[Ci++]=Ll,Ll=e,Tl=t}function fg(e,t,n){Kn[qn++]=zo,Kn[qn++]=Fo,Kn[qn++]=Hr,Hr=e;var o=zo;e=Fo;var r=32-mo(o)-1;o&=~(1<<r),n+=1;var i=32-mo(t)+r;if(30<i){var s=r-r%5;i=(o&(1<<s)-1).toString(32),o>>=s,r-=s,zo=1<<32-mo(t)+r|n<<r|o,Fo=i+e}else zo=1<<i|n<<r|o,Fo=e}function Yu(e){e.return!==null&&(Rr(e,1),fg(e,1,0))}function Vu(e){for(;e===Ll;)Ll=ki[--Ci],ki[Ci]=null,Tl=ki[--Ci],ki[Ci]=null;for(;e===Hr;)Hr=Kn[--qn],Kn[qn]=null,Fo=Kn[--qn],Kn[qn]=null,zo=Kn[--qn],Kn[qn]=null}var zn=null,On=null,It=!1,ho=null;function hg(e,t){var n=Gn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Uh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,zn=e,On=cr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,zn=e,On=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Hr!==null?{id:zo,overflow:Fo}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Gn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,zn=e,On=null,!0):!1;default:return!1}}function du(e){return(e.mode&1)!==0&&(e.flags&128)===0}function uu(e){if(It){var t=On;if(t){var n=t;if(!Uh(e,t)){if(du(e))throw Error(pe(418));t=cr(n.nextSibling);var o=zn;t&&Uh(e,t)?hg(o,n):(e.flags=e.flags&-4097|2,It=!1,zn=e)}}else{if(du(e))throw Error(pe(418));e.flags=e.flags&-4097|2,It=!1,zn=e}}}function Yh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;zn=e}function nl(e){if(e!==zn)return!1;if(!It)return Yh(e),It=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!su(e.type,e.memoizedProps)),t&&(t=On)){if(du(e))throw mg(),Error(pe(418));for(;t;)hg(e,t),t=cr(t.nextSibling)}if(Yh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(pe(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){On=cr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}On=null}}else On=zn?cr(e.stateNode.nextSibling):null;return!0}function mg(){for(var e=On;e;)e=cr(e.nextSibling)}function Ai(){On=zn=null,It=!1}function Xu(e){ho===null?ho=[e]:ho.push(e)}var s2=Vo.ReactCurrentBatchConfig;function ws(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(pe(309));var o=n.stateNode}if(!o)throw Error(pe(147,e));var r=o,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=r.refs;s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(pe(284));if(!n._owner)throw Error(pe(290,e))}return e}function ol(e,t){throw e=Object.prototype.toString.call(t),Error(pe(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vh(e){var t=e._init;return t(e._payload)}function gg(e){function t(h,_){if(e){var S=h.deletions;S===null?(h.deletions=[_],h.flags|=16):S.push(_)}}function n(h,_){if(!e)return null;for(;_!==null;)t(h,_),_=_.sibling;return null}function o(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=fr(h,_),h.index=0,h.sibling=null,h}function i(h,_,S){return h.index=S,e?(S=h.alternate,S!==null?(S=S.index,S<_?(h.flags|=2,_):S):(h.flags|=2,_)):(h.flags|=1048576,_)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,_,S,D){return _===null||_.tag!==6?(_=Dd(S,h.mode,D),_.return=h,_):(_=r(_,S),_.return=h,_)}function l(h,_,S,D){var Z=S.type;return Z===_i?d(h,_,S.props.children,D,S.key):_!==null&&(_.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===er&&Vh(Z)===_.type)?(D=r(_,S.props),D.ref=ws(h,_,S),D.return=h,D):(D=gl(S.type,S.key,S.props,null,h.mode,D),D.ref=ws(h,_,S),D.return=h,D)}function c(h,_,S,D){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=Ad(S,h.mode,D),_.return=h,_):(_=r(_,S.children||[]),_.return=h,_)}function d(h,_,S,D,Z){return _===null||_.tag!==7?(_=Fr(S,h.mode,D,Z),_.return=h,_):(_=r(_,S),_.return=h,_)}function m(h,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Dd(""+_,h.mode,S),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ha:return S=gl(_.type,_.key,_.props,null,h.mode,S),S.ref=ws(h,null,_),S.return=h,S;case gi:return _=Ad(_,h.mode,S),_.return=h,_;case er:var D=_._init;return m(h,D(_._payload),S)}if(Ss(_)||gs(_))return _=Fr(_,h.mode,S,null),_.return=h,_;ol(h,_)}return null}function f(h,_,S,D){var Z=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return Z!==null?null:a(h,_,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ha:return S.key===Z?l(h,_,S,D):null;case gi:return S.key===Z?c(h,_,S,D):null;case er:return Z=S._init,f(h,_,Z(S._payload),D)}if(Ss(S)||gs(S))return Z!==null?null:d(h,_,S,D,null);ol(h,S)}return null}function b(h,_,S,D,Z){if(typeof D=="string"&&D!==""||typeof D=="number")return h=h.get(S)||null,a(_,h,""+D,Z);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ha:return h=h.get(D.key===null?S:D.key)||null,l(_,h,D,Z);case gi:return h=h.get(D.key===null?S:D.key)||null,c(_,h,D,Z);case er:var q=D._init;return b(h,_,S,q(D._payload),Z)}if(Ss(D)||gs(D))return h=h.get(S)||null,d(_,h,D,Z,null);ol(_,D)}return null}function v(h,_,S,D){for(var Z=null,q=null,O=_,ie=_=0,xe=null;O!==null&&ie<S.length;ie++){O.index>ie?(xe=O,O=null):xe=O.sibling;var he=f(h,O,S[ie],D);if(he===null){O===null&&(O=xe);break}e&&O&&he.alternate===null&&t(h,O),_=i(he,_,ie),q===null?Z=he:q.sibling=he,q=he,O=xe}if(ie===S.length)return n(h,O),It&&Rr(h,ie),Z;if(O===null){for(;ie<S.length;ie++)O=m(h,S[ie],D),O!==null&&(_=i(O,_,ie),q===null?Z=O:q.sibling=O,q=O);return It&&Rr(h,ie),Z}for(O=o(h,O);ie<S.length;ie++)xe=b(O,h,ie,S[ie],D),xe!==null&&(e&&xe.alternate!==null&&O.delete(xe.key===null?ie:xe.key),_=i(xe,_,ie),q===null?Z=xe:q.sibling=xe,q=xe);return e&&O.forEach(function(j){return t(h,j)}),It&&Rr(h,ie),Z}function P(h,_,S,D){var Z=gs(S);if(typeof Z!="function")throw Error(pe(150));if(S=Z.call(S),S==null)throw Error(pe(151));for(var q=Z=null,O=_,ie=_=0,xe=null,he=S.next();O!==null&&!he.done;ie++,he=S.next()){O.index>ie?(xe=O,O=null):xe=O.sibling;var j=f(h,O,he.value,D);if(j===null){O===null&&(O=xe);break}e&&O&&j.alternate===null&&t(h,O),_=i(j,_,ie),q===null?Z=j:q.sibling=j,q=j,O=xe}if(he.done)return n(h,O),It&&Rr(h,ie),Z;if(O===null){for(;!he.done;ie++,he=S.next())he=m(h,he.value,D),he!==null&&(_=i(he,_,ie),q===null?Z=he:q.sibling=he,q=he);return It&&Rr(h,ie),Z}for(O=o(h,O);!he.done;ie++,he=S.next())he=b(O,h,ie,he.value,D),he!==null&&(e&&he.alternate!==null&&O.delete(he.key===null?ie:he.key),_=i(he,_,ie),q===null?Z=he:q.sibling=he,q=he);return e&&O.forEach(function(M){return t(h,M)}),It&&Rr(h,ie),Z}function k(h,_,S,D){if(typeof S=="object"&&S!==null&&S.type===_i&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Ha:e:{for(var Z=S.key,q=_;q!==null;){if(q.key===Z){if(Z=S.type,Z===_i){if(q.tag===7){n(h,q.sibling),_=r(q,S.props.children),_.return=h,h=_;break e}}else if(q.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===er&&Vh(Z)===q.type){n(h,q.sibling),_=r(q,S.props),_.ref=ws(h,q,S),_.return=h,h=_;break e}n(h,q);break}else t(h,q);q=q.sibling}S.type===_i?(_=Fr(S.props.children,h.mode,D,S.key),_.return=h,h=_):(D=gl(S.type,S.key,S.props,null,h.mode,D),D.ref=ws(h,_,S),D.return=h,h=D)}return s(h);case gi:e:{for(q=S.key;_!==null;){if(_.key===q)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){n(h,_.sibling),_=r(_,S.children||[]),_.return=h,h=_;break e}else{n(h,_);break}else t(h,_);_=_.sibling}_=Ad(S,h.mode,D),_.return=h,h=_}return s(h);case er:return q=S._init,k(h,_,q(S._payload),D)}if(Ss(S))return v(h,_,S,D);if(gs(S))return P(h,_,S,D);ol(h,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,_!==null&&_.tag===6?(n(h,_.sibling),_=r(_,S),_.return=h,h=_):(n(h,_),_=Dd(S,h.mode,D),_.return=h,h=_),s(h)):n(h,_)}return k}var Bi=gg(!0),_g=gg(!1),$l=_r(null),Il=null,Si=null,Qu=null;function Ku(){Qu=Si=Il=null}function qu(e){var t=$l.current;Mt($l),e._currentValue=t}function pu(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Ni(e,t){Il=e,Qu=Si=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Pn=!0),e.firstContext=null)}function Jn(e){var t=e._currentValue;if(Qu!==e)if(e={context:e,memoizedValue:t,next:null},Si===null){if(Il===null)throw Error(pe(308));Si=e,Il.dependencies={lanes:0,firstContext:e}}else Si=Si.next=e;return t}var Br=null;function Gu(e){Br===null?Br=[e]:Br.push(e)}function yg(e,t,n,o){var r=t.interleaved;return r===null?(n.next=n,Gu(t)):(n.next=r.next,r.next=n),t.interleaved=n,Uo(e,o)}function Uo(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tr=!1;function Zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dr(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(lt&2)!==0){var r=o.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),o.pending=t,Uo(e,n)}return r=o.interleaved,r===null?(t.next=t,Gu(o)):(t.next=r.next,r.next=t),o.interleaved=t,Uo(e,n)}function dl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Bu(e,n)}}function Xh(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var r=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?r=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?r=i=t:i=i.next=t}else r=i=t;n={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Nl(e,t,n,o){var r=e.updateQueue;tr=!1;var i=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?i=c:s.next=c,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(i!==null){var m=r.baseState;s=0,d=c=l=null,a=i;do{var f=a.lane,b=a.eventTime;if((o&f)===f){d!==null&&(d=d.next={eventTime:b,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,P=a;switch(f=t,b=n,P.tag){case 1:if(v=P.payload,typeof v=="function"){m=v.call(b,m,f);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=P.payload,f=typeof v=="function"?v.call(b,m,f):v,f==null)break e;m=Bt({},m,f);break e;case 2:tr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else b={eventTime:b,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=b,l=m):d=d.next=b,s|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=m),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,t=r.shared.interleaved,t!==null){r=t;do s|=r.lane,r=r.next;while(r!==t)}else i===null&&(r.shared.lanes=0);Ur|=s,e.lanes=s,e.memoizedState=m}}function Qh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],r=o.callback;if(r!==null){if(o.callback=null,o=n,typeof r!="function")throw Error(pe(191,r));r.call(o)}}}var oa={},Lo=_r(oa),Qs=_r(oa),Ks=_r(oa);function Or(e){if(e===oa)throw Error(pe(174));return e}function Ju(e,t){switch(Ct(Ks,t),Ct(Qs,e),Ct(Lo,oa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Vd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Vd(t,e)}Mt(Lo),Ct(Lo,t)}function Oi(){Mt(Lo),Mt(Qs),Mt(Ks)}function wg(e){Or(Ks.current);var t=Or(Lo.current),n=Vd(t,e.type);t!==n&&(Ct(Qs,e),Ct(Lo,n))}function ep(e){Qs.current===e&&(Mt(Lo),Mt(Qs))}var Dt=_r(0);function Pl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Td=[];function tp(){for(var e=0;e<Td.length;e++)Td[e]._workInProgressVersionPrimary=null;Td.length=0}var ul=Vo.ReactCurrentDispatcher,$d=Vo.ReactCurrentBatchConfig,jr=0,At=null,sn=null,cn=null,Rl=!1,Ps=!1,qs=0,a2=0;function xn(){throw Error(pe(321))}function np(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_o(e[n],t[n]))return!1;return!0}function op(e,t,n,o,r,i){if(jr=i,At=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ul.current=e===null||e.memoizedState===null?u2:p2,e=n(o,r),Ps){i=0;do{if(Ps=!1,qs=0,25<=i)throw Error(pe(301));i+=1,cn=sn=null,t.updateQueue=null,ul.current=f2,e=n(o,r)}while(Ps)}if(ul.current=Dl,t=sn!==null&&sn.next!==null,jr=0,cn=sn=At=null,Rl=!1,t)throw Error(pe(300));return e}function rp(){var e=qs!==0;return qs=0,e}function So(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?At.memoizedState=cn=e:cn=cn.next=e,cn}function eo(){if(sn===null){var e=At.alternate;e=e!==null?e.memoizedState:null}else e=sn.next;var t=cn===null?At.memoizedState:cn.next;if(t!==null)cn=t,sn=e;else{if(e===null)throw Error(pe(310));sn=e,e={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},cn===null?At.memoizedState=cn=e:cn=cn.next=e}return cn}function Gs(e,t){return typeof t=="function"?t(e):t}function Id(e){var t=eo(),n=t.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=e;var o=sn,r=o.baseQueue,i=n.pending;if(i!==null){if(r!==null){var s=r.next;r.next=i.next,i.next=s}o.baseQueue=r=i,n.pending=null}if(r!==null){i=r.next,o=o.baseState;var a=s=null,l=null,c=i;do{var d=c.lane;if((jr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),o=c.hasEagerState?c.eagerState:e(o,c.action);else{var m={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=m,s=o):l=l.next=m,At.lanes|=d,Ur|=d}c=c.next}while(c!==null&&c!==i);l===null?s=o:l.next=a,_o(o,t.memoizedState)||(Pn=!0),t.memoizedState=o,t.baseState=s,t.baseQueue=l,n.lastRenderedState=o}if(e=n.interleaved,e!==null){r=e;do i=r.lane,At.lanes|=i,Ur|=i,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Nd(e){var t=eo(),n=t.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=e;var o=n.dispatch,r=n.pending,i=t.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do i=e(i,s.action),s=s.next;while(s!==r);_o(i,t.memoizedState)||(Pn=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,o]}function vg(){}function bg(e,t){var n=At,o=eo(),r=t(),i=!_o(o.memoizedState,r);if(i&&(o.memoizedState=r,Pn=!0),o=o.queue,ip(Sg.bind(null,n,o,e),[e]),o.getSnapshot!==t||i||cn!==null&&cn.memoizedState.tag&1){if(n.flags|=2048,Zs(9,Cg.bind(null,n,o,r,t),void 0,null),dn===null)throw Error(pe(349));(jr&30)!==0||kg(n,t,r)}return r}function kg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=At.updateQueue,t===null?(t={lastEffect:null,stores:null},At.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Cg(e,t,n,o){t.value=n,t.getSnapshot=o,Eg(t)&&Mg(e)}function Sg(e,t,n){return n(function(){Eg(t)&&Mg(e)})}function Eg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_o(e,n)}catch{return!0}}function Mg(e){var t=Uo(e,1);t!==null&&go(t,e,1,-1)}function Kh(e){var t=So();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gs,lastRenderedState:e},t.queue=e,e=e.dispatch=d2.bind(null,At,e),[t.memoizedState,e]}function Zs(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=At.updateQueue,t===null?(t={lastEffect:null,stores:null},At.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function Lg(){return eo().memoizedState}function pl(e,t,n,o){var r=So();At.flags|=e,r.memoizedState=Zs(1|t,n,void 0,o===void 0?null:o)}function Xl(e,t,n,o){var r=eo();o=o===void 0?null:o;var i=void 0;if(sn!==null){var s=sn.memoizedState;if(i=s.destroy,o!==null&&np(o,s.deps)){r.memoizedState=Zs(t,n,i,o);return}}At.flags|=e,r.memoizedState=Zs(1|t,n,i,o)}function qh(e,t){return pl(8390656,8,e,t)}function ip(e,t){return Xl(2048,8,e,t)}function Tg(e,t){return Xl(4,2,e,t)}function $g(e,t){return Xl(4,4,e,t)}function Ig(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ng(e,t,n){return n=n!=null?n.concat([e]):null,Xl(4,4,Ig.bind(null,t,e),n)}function sp(){}function Pg(e,t){var n=eo();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&np(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function Rg(e,t){var n=eo();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&np(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function Dg(e,t,n){return(jr&21)===0?(e.baseState&&(e.baseState=!1,Pn=!0),e.memoizedState=n):(_o(n,t)||(n=Fm(),At.lanes|=n,Ur|=n,e.baseState=!0),t)}function l2(e,t){var n=ft;ft=n!==0&&4>n?n:4,e(!0);var o=$d.transition;$d.transition={};try{e(!1),t()}finally{ft=n,$d.transition=o}}function Ag(){return eo().memoizedState}function c2(e,t,n){var o=pr(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Bg(e))Og(t,n);else if(n=yg(e,t,n,o),n!==null){var r=Mn();go(n,e,o,r),zg(n,t,o)}}function d2(e,t,n){var o=pr(e),r={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bg(e))Og(t,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(r.hasEagerState=!0,r.eagerState=a,_o(a,s)){var l=t.interleaved;l===null?(r.next=r,Gu(t)):(r.next=l.next,l.next=r),t.interleaved=r;return}}catch{}n=yg(e,t,r,o),n!==null&&(r=Mn(),go(n,e,o,r),zg(n,t,o))}}function Bg(e){var t=e.alternate;return e===At||t!==null&&t===At}function Og(e,t){Ps=Rl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zg(e,t,n){if((n&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Bu(e,n)}}var Dl={readContext:Jn,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useInsertionEffect:xn,useLayoutEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useMutableSource:xn,useSyncExternalStore:xn,useId:xn,unstable_isNewReconciler:!1},u2={readContext:Jn,useCallback:function(e,t){return So().memoizedState=[e,t===void 0?null:t],e},useContext:Jn,useEffect:qh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,pl(4194308,4,Ig.bind(null,t,e),n)},useLayoutEffect:function(e,t){return pl(4194308,4,e,t)},useInsertionEffect:function(e,t){return pl(4,2,e,t)},useMemo:function(e,t){var n=So();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=So();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=c2.bind(null,At,e),[o.memoizedState,e]},useRef:function(e){var t=So();return e={current:e},t.memoizedState=e},useState:Kh,useDebugValue:sp,useDeferredValue:function(e){return So().memoizedState=e},useTransition:function(){var e=Kh(!1),t=e[0];return e=l2.bind(null,e[1]),So().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=At,r=So();if(It){if(n===void 0)throw Error(pe(407));n=n()}else{if(n=t(),dn===null)throw Error(pe(349));(jr&30)!==0||kg(o,t,n)}r.memoizedState=n;var i={value:n,getSnapshot:t};return r.queue=i,qh(Sg.bind(null,o,i,e),[e]),o.flags|=2048,Zs(9,Cg.bind(null,o,i,n,t),void 0,null),n},useId:function(){var e=So(),t=dn.identifierPrefix;if(It){var n=Fo,o=zo;n=(o&~(1<<32-mo(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=qs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=a2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},p2={readContext:Jn,useCallback:Pg,useContext:Jn,useEffect:ip,useImperativeHandle:Ng,useInsertionEffect:Tg,useLayoutEffect:$g,useMemo:Rg,useReducer:Id,useRef:Lg,useState:function(){return Id(Gs)},useDebugValue:sp,useDeferredValue:function(e){var t=eo();return Dg(t,sn.memoizedState,e)},useTransition:function(){var e=Id(Gs)[0],t=eo().memoizedState;return[e,t]},useMutableSource:vg,useSyncExternalStore:bg,useId:Ag,unstable_isNewReconciler:!1},f2={readContext:Jn,useCallback:Pg,useContext:Jn,useEffect:ip,useImperativeHandle:Ng,useInsertionEffect:Tg,useLayoutEffect:$g,useMemo:Rg,useReducer:Nd,useRef:Lg,useState:function(){return Nd(Gs)},useDebugValue:sp,useDeferredValue:function(e){var t=eo();return sn===null?t.memoizedState=e:Dg(t,sn.memoizedState,e)},useTransition:function(){var e=Nd(Gs)[0],t=eo().memoizedState;return[e,t]},useMutableSource:vg,useSyncExternalStore:bg,useId:Ag,unstable_isNewReconciler:!1};function po(e,t){if(e&&e.defaultProps){t=Bt({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function fu(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:Bt({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ql={isMounted:function(e){return(e=e._reactInternals)?Xr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=Mn(),r=pr(e),i=Wo(o,r);i.payload=t,n!=null&&(i.callback=n),t=dr(e,i,r),t!==null&&(go(t,e,r,o),dl(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=Mn(),r=pr(e),i=Wo(o,r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=dr(e,i,r),t!==null&&(go(t,e,r,o),dl(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Mn(),o=pr(e),r=Wo(n,o);r.tag=2,t!=null&&(r.callback=t),t=dr(e,r,o),t!==null&&(go(t,e,o,n),dl(t,e,o))}};function Gh(e,t,n,o,r,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,i,s):t.prototype&&t.prototype.isPureReactComponent?!Us(n,o)||!Us(r,i):!0}function Fg(e,t,n){var o=!1,r=mr,i=t.contextType;return typeof i=="object"&&i!==null?i=Jn(i):(r=Dn(t)?Wr:bn.current,o=t.contextTypes,i=(o=o!=null)?Di(e,r):mr),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ql,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),t}function Zh(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&Ql.enqueueReplaceState(t,t.state,null)}function hu(e,t,n,o){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},Zu(e);var i=t.contextType;typeof i=="object"&&i!==null?r.context=Jn(i):(i=Dn(t)?Wr:bn.current,r.context=Di(e,i)),r.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(fu(e,t,i,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&Ql.enqueueReplaceState(r,r.state,null),Nl(e,n,r,o),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function zi(e,t){try{var n="",o=t;do n+=jy(o),o=o.return;while(o);var r=n}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:r,digest:null}}function Pd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function mu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var h2=typeof WeakMap=="function"?WeakMap:Map;function Wg(e,t,n){n=Wo(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){Bl||(Bl=!0,Su=o),mu(e,t)},n}function Hg(e,t,n){n=Wo(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var r=t.value;n.payload=function(){return o(r)},n.callback=function(){mu(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){mu(e,t),typeof o!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Jh(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new h2;var r=new Set;o.set(t,r)}else r=o.get(t),r===void 0&&(r=new Set,o.set(t,r));r.has(n)||(r.add(n),e=L2.bind(null,e,t,n),t.then(e,e))}function em(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function tm(e,t,n,o,r){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Wo(-1,1),t.tag=2,dr(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=r,e)}var m2=Vo.ReactCurrentOwner,Pn=!1;function En(e,t,n,o){t.child=e===null?_g(t,null,n,o):Bi(t,e.child,n,o)}function nm(e,t,n,o,r){n=n.render;var i=t.ref;return Ni(t,r),o=op(e,t,n,o,i,r),n=rp(),e!==null&&!Pn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Yo(e,t,r)):(It&&n&&Yu(t),t.flags|=1,En(e,t,o,r),t.child)}function om(e,t,n,o,r){if(e===null){var i=n.type;return typeof i=="function"&&!hp(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,jg(e,t,i,o,r)):(e=gl(n.type,null,o,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&r)===0){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Us,n(s,o)&&e.ref===t.ref)return Yo(e,t,r)}return t.flags|=1,e=fr(i,o),e.ref=t.ref,e.return=t,t.child=e}function jg(e,t,n,o,r){if(e!==null){var i=e.memoizedProps;if(Us(i,o)&&e.ref===t.ref)if(Pn=!1,t.pendingProps=o=i,(e.lanes&r)!==0)(e.flags&131072)!==0&&(Pn=!0);else return t.lanes=e.lanes,Yo(e,t,r)}return gu(e,t,n,o,r)}function Ug(e,t,n){var o=t.pendingProps,r=o.children,i=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ct(Mi,Bn),Bn|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ct(Mi,Bn),Bn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:n,Ct(Mi,Bn),Bn|=o}else i!==null?(o=i.baseLanes|n,t.memoizedState=null):o=n,Ct(Mi,Bn),Bn|=o;return En(e,t,r,n),t.child}function Yg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function gu(e,t,n,o,r){var i=Dn(n)?Wr:bn.current;return i=Di(t,i),Ni(t,r),n=op(e,t,n,o,i,r),o=rp(),e!==null&&!Pn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Yo(e,t,r)):(It&&o&&Yu(t),t.flags|=1,En(e,t,n,r),t.child)}function rm(e,t,n,o,r){if(Dn(n)){var i=!0;Ml(t)}else i=!1;if(Ni(t,r),t.stateNode===null)fl(e,t),Fg(t,n,o),hu(t,n,o,r),o=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Jn(c):(c=Dn(n)?Wr:bn.current,c=Di(t,c));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==o||l!==c)&&Zh(t,s,o,c),tr=!1;var f=t.memoizedState;s.state=f,Nl(t,o,s,r),l=t.memoizedState,a!==o||f!==l||Rn.current||tr?(typeof d=="function"&&(fu(t,n,d,o),l=t.memoizedState),(a=tr||Gh(t,n,a,o,f,l,c))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=l),s.props=o,s.state=l,s.context=c,o=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{s=t.stateNode,xg(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:po(t.type,a),s.props=c,m=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Jn(l):(l=Dn(n)?Wr:bn.current,l=Di(t,l));var b=n.getDerivedStateFromProps;(d=typeof b=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==m||f!==l)&&Zh(t,s,o,l),tr=!1,f=t.memoizedState,s.state=f,Nl(t,o,s,r);var v=t.memoizedState;a!==m||f!==v||Rn.current||tr?(typeof b=="function"&&(fu(t,n,b,o),v=t.memoizedState),(c=tr||Gh(t,n,c,o,f,v,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(o,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(o,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=v),s.props=o,s.state=v,s.context=l,o=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),o=!1)}return _u(e,t,n,o,i,r)}function _u(e,t,n,o,r,i){Yg(e,t);var s=(t.flags&128)!==0;if(!o&&!s)return r&&jh(t,n,!1),Yo(e,t,i);o=t.stateNode,m2.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&s?(t.child=Bi(t,e.child,null,i),t.child=Bi(t,null,a,i)):En(e,t,a,i),t.memoizedState=o.state,r&&jh(t,n,!0),t.child}function Vg(e){var t=e.stateNode;t.pendingContext?Hh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hh(e,t.context,!1),Ju(e,t.containerInfo)}function im(e,t,n,o,r){return Ai(),Xu(r),t.flags|=256,En(e,t,n,o),t.child}var yu={dehydrated:null,treeContext:null,retryLane:0};function xu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xg(e,t,n){var o=t.pendingProps,r=Dt.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(r&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),Ct(Dt,r&1),e===null)return uu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=o.children,e=o.fallback,i?(o=t.mode,i=t.child,s={mode:"hidden",children:s},(o&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Gl(s,o,0,null),e=Fr(e,o,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=xu(n),t.memoizedState=yu,e):ap(t,s));if(r=e.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return g2(e,t,s,o,a,r,n);if(i){i=o.fallback,s=t.mode,r=e.child,a=r.sibling;var l={mode:"hidden",children:o.children};return(s&1)===0&&t.child!==r?(o=t.child,o.childLanes=0,o.pendingProps=l,t.deletions=null):(o=fr(r,l),o.subtreeFlags=r.subtreeFlags&14680064),a!==null?i=fr(a,i):(i=Fr(i,s,n,null),i.flags|=2),i.return=t,o.return=t,o.sibling=i,t.child=o,o=i,i=t.child,s=e.child.memoizedState,s=s===null?xu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=yu,o}return i=e.child,e=i.sibling,o=fr(i,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function ap(e,t){return t=Gl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function rl(e,t,n,o){return o!==null&&Xu(o),Bi(t,e.child,null,n),e=ap(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function g2(e,t,n,o,r,i,s){if(n)return t.flags&256?(t.flags&=-257,o=Pd(Error(pe(422))),rl(e,t,s,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=o.fallback,r=t.mode,o=Gl({mode:"visible",children:o.children},r,0,null),i=Fr(i,r,s,null),i.flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,(t.mode&1)!==0&&Bi(t,e.child,null,s),t.child.memoizedState=xu(s),t.memoizedState=yu,i);if((t.mode&1)===0)return rl(e,t,s,null);if(r.data==="$!"){if(o=r.nextSibling&&r.nextSibling.dataset,o)var a=o.dgst;return o=a,i=Error(pe(419)),o=Pd(i,o,void 0),rl(e,t,s,o)}if(a=(s&e.childLanes)!==0,Pn||a){if(o=dn,o!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(o.suspendedLanes|s))!==0?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,Uo(e,r),go(o,e,r,-1))}return fp(),o=Pd(Error(pe(421))),rl(e,t,s,o)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=T2.bind(null,e),r._reactRetry=t,null):(e=i.treeContext,On=cr(r.nextSibling),zn=t,It=!0,ho=null,e!==null&&(Kn[qn++]=zo,Kn[qn++]=Fo,Kn[qn++]=Hr,zo=e.id,Fo=e.overflow,Hr=t),t=ap(t,o.children),t.flags|=4096,t)}function sm(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),pu(e.return,t,n)}function Rd(e,t,n,o,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:r}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=n,i.tailMode=r)}function Qg(e,t,n){var o=t.pendingProps,r=o.revealOrder,i=o.tail;if(En(e,t,o.children,n),o=Dt.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sm(e,n,t);else if(e.tag===19)sm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Ct(Dt,o),(t.mode&1)===0)t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Pl(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Rd(t,!1,r,n,i);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Pl(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Rd(t,!0,n,null,i);break;case"together":Rd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yo(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ur|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(pe(153));if(t.child!==null){for(e=t.child,n=fr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _2(e,t,n){switch(t.tag){case 3:Vg(t),Ai();break;case 5:wg(t);break;case 1:Dn(t.type)&&Ml(t);break;case 4:Ju(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,r=t.memoizedProps.value;Ct($l,o._currentValue),o._currentValue=r;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Ct(Dt,Dt.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Xg(e,t,n):(Ct(Dt,Dt.current&1),e=Yo(e,t,n),e!==null?e.sibling:null);Ct(Dt,Dt.current&1);break;case 19:if(o=(n&t.childLanes)!==0,(e.flags&128)!==0){if(o)return Qg(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ct(Dt,Dt.current),o)break;return null;case 22:case 23:return t.lanes=0,Ug(e,t,n)}return Yo(e,t,n)}var Kg,wu,qg,Gg;Kg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wu=function(){};qg=function(e,t,n,o){var r=e.memoizedProps;if(r!==o){e=t.stateNode,Or(Lo.current);var i=null;switch(n){case"input":r=Hd(e,r),o=Hd(e,o),i=[];break;case"select":r=Bt({},r,{value:void 0}),o=Bt({},o,{value:void 0}),i=[];break;case"textarea":r=Yd(e,r),o=Yd(e,o),i=[];break;default:typeof r.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Sl)}Xd(n,o);var s;n=null;for(c in r)if(!o.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Bs.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in o){var l=o[c];if(a=r?.[c],o.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(i||(i=[]),i.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Bs.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Et("scroll",e),i||a===l||(i=[])):(i=i||[]).push(c,l))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Gg=function(e,t,n,o){n!==o&&(t.flags|=4)};function vs(e,t){if(!It)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function wn(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags&14680064,o|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function y2(e,t,n){var o=t.pendingProps;switch(Vu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wn(t),null;case 1:return Dn(t.type)&&El(),wn(t),null;case 3:return o=t.stateNode,Oi(),Mt(Rn),Mt(bn),tp(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(nl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ho!==null&&(Lu(ho),ho=null))),wu(e,t),wn(t),null;case 5:ep(t);var r=Or(Ks.current);if(n=t.type,e!==null&&t.stateNode!=null)qg(e,t,n,o,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(pe(166));return wn(t),null}if(e=Or(Lo.current),nl(t)){o=t.stateNode,n=t.type;var i=t.memoizedProps;switch(o[Eo]=t,o[Xs]=i,e=(t.mode&1)!==0,n){case"dialog":Et("cancel",o),Et("close",o);break;case"iframe":case"object":case"embed":Et("load",o);break;case"video":case"audio":for(r=0;r<Ms.length;r++)Et(Ms[r],o);break;case"source":Et("error",o);break;case"img":case"image":case"link":Et("error",o),Et("load",o);break;case"details":Et("toggle",o);break;case"input":hh(o,i),Et("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},Et("invalid",o);break;case"textarea":gh(o,i),Et("invalid",o)}Xd(n,i),r=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?o.textContent!==a&&(i.suppressHydrationWarning!==!0&&tl(o.textContent,a,e),r=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&tl(o.textContent,a,e),r=["children",""+a]):Bs.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Et("scroll",o)}switch(n){case"input":ja(o),mh(o,i,!0);break;case"textarea":ja(o),_h(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=Sl)}o=r,t.updateQueue=o,o!==null&&(t.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Sm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script></script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=s.createElement(n,{is:o.is}):(e=s.createElement(n),n==="select"&&(s=e,o.multiple?s.multiple=!0:o.size&&(s.size=o.size))):e=s.createElementNS(e,n),e[Eo]=t,e[Xs]=o,Kg(e,t,!1,!1),t.stateNode=e;e:{switch(s=Qd(n,o),n){case"dialog":Et("cancel",e),Et("close",e),r=o;break;case"iframe":case"object":case"embed":Et("load",e),r=o;break;case"video":case"audio":for(r=0;r<Ms.length;r++)Et(Ms[r],e);r=o;break;case"source":Et("error",e),r=o;break;case"img":case"image":case"link":Et("error",e),Et("load",e),r=o;break;case"details":Et("toggle",e),r=o;break;case"input":hh(e,o),r=Hd(e,o),Et("invalid",e);break;case"option":r=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},r=Bt({},o,{value:void 0}),Et("invalid",e);break;case"textarea":gh(e,o),r=Yd(e,o),Et("invalid",e);break;default:r=o}Xd(n,r),a=r;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?Lm(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Em(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Os(e,l):typeof l=="number"&&Os(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Bs.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Et("scroll",e):l!=null&&Iu(e,i,l,s))}switch(n){case"input":ja(e),mh(e,o,!1);break;case"textarea":ja(e),_h(e);break;case"option":o.value!=null&&e.setAttribute("value",""+hr(o.value));break;case"select":e.multiple=!!o.multiple,i=o.value,i!=null?Li(e,!!o.multiple,i,!1):o.defaultValue!=null&&Li(e,!!o.multiple,o.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Sl)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return wn(t),null;case 6:if(e&&t.stateNode!=null)Gg(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(pe(166));if(n=Or(Ks.current),Or(Lo.current),nl(t)){if(o=t.stateNode,n=t.memoizedProps,o[Eo]=t,(i=o.nodeValue!==n)&&(e=zn,e!==null))switch(e.tag){case 3:tl(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&tl(o.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Eo]=t,t.stateNode=o}return wn(t),null;case 13:if(Mt(Dt),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(It&&On!==null&&(t.mode&1)!==0&&(t.flags&128)===0)mg(),Ai(),t.flags|=98560,i=!1;else if(i=nl(t),o!==null&&o.dehydrated!==null){if(e===null){if(!i)throw Error(pe(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(pe(317));i[Eo]=t}else Ai(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;wn(t),i=!1}else ho!==null&&(Lu(ho),ho=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Dt.current&1)!==0?an===0&&(an=3):fp())),t.updateQueue!==null&&(t.flags|=4),wn(t),null);case 4:return Oi(),wu(e,t),e===null&&Ys(t.stateNode.containerInfo),wn(t),null;case 10:return qu(t.type._context),wn(t),null;case 17:return Dn(t.type)&&El(),wn(t),null;case 19:if(Mt(Dt),i=t.memoizedState,i===null)return wn(t),null;if(o=(t.flags&128)!==0,s=i.rendering,s===null)if(o)vs(i,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Pl(e),s!==null){for(t.flags|=128,vs(i,!1),o=s.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)i=n,e=o,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ct(Dt,Dt.current&1|2),t.child}e=e.sibling}i.tail!==null&&Xt()>Fi&&(t.flags|=128,o=!0,vs(i,!1),t.lanes=4194304)}else{if(!o)if(e=Pl(s),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vs(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!It)return wn(t),null}else 2*Xt()-i.renderingStartTime>Fi&&n!==1073741824&&(t.flags|=128,o=!0,vs(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Xt(),t.sibling=null,n=Dt.current,Ct(Dt,o?n&1|2:n&1),t):(wn(t),null);case 22:case 23:return pp(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(Bn&1073741824)!==0&&(wn(t),t.subtreeFlags&6&&(t.flags|=8192)):wn(t),null;case 24:return null;case 25:return null}throw Error(pe(156,t.tag))}function x2(e,t){switch(Vu(t),t.tag){case 1:return Dn(t.type)&&El(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Oi(),Mt(Rn),Mt(bn),tp(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ep(t),null;case 13:if(Mt(Dt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(pe(340));Ai()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Mt(Dt),null;case 4:return Oi(),null;case 10:return qu(t.type._context),null;case 22:case 23:return pp(),null;case 24:return null;default:return null}}var il=!1,vn=!1,w2=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function Ei(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Wt(e,t,o)}else n.current=null}function vu(e,t,n){try{n()}catch(o){Wt(e,t,o)}}var am=!1;function v2(e,t){if(ru=bl,e=ng(),Uu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var r=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,d=0,m=e,f=null;t:for(;;){for(var b;m!==n||r!==0&&m.nodeType!==3||(a=s+r),m!==i||o!==0&&m.nodeType!==3||(l=s+o),m.nodeType===3&&(s+=m.nodeValue.length),(b=m.firstChild)!==null;)f=m,m=b;for(;;){if(m===e)break t;if(f===n&&++c===r&&(a=s),f===i&&++d===o&&(l=s),(b=m.nextSibling)!==null)break;m=f,f=m.parentNode}m=b}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(iu={focusedElem:e,selectionRange:n},bl=!1,Ie=t;Ie!==null;)if(t=Ie,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ie=e;else for(;Ie!==null;){t=Ie;try{var v=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var P=v.memoizedProps,k=v.memoizedState,h=t.stateNode,_=h.getSnapshotBeforeUpdate(t.elementType===t.type?P:po(t.type,P),k);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(pe(163))}}catch(D){Wt(t,t.return,D)}if(e=t.sibling,e!==null){e.return=t.return,Ie=e;break}Ie=t.return}return v=am,am=!1,v}function Rs(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var r=o=o.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&vu(t,n,i)}r=r.next}while(r!==o)}}function Kl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function bu(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function Zg(e){var t=e.alternate;t!==null&&(e.alternate=null,Zg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Eo],delete t[Xs],delete t[lu],delete t[o2],delete t[r2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Jg(e){return e.tag===5||e.tag===3||e.tag===4}function lm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ku(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Sl));else if(o!==4&&(e=e.child,e!==null))for(ku(e,t,n),e=e.sibling;e!==null;)ku(e,t,n),e=e.sibling}function Cu(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Cu(e,t,n),e=e.sibling;e!==null;)Cu(e,t,n),e=e.sibling}var pn=null,fo=!1;function Jo(e,t,n){for(n=n.child;n!==null;)e_(e,t,n),n=n.sibling}function e_(e,t,n){if(Mo&&typeof Mo.onCommitFiberUnmount=="function")try{Mo.onCommitFiberUnmount(Wl,n)}catch{}switch(n.tag){case 5:vn||Ei(n,t);case 6:var o=pn,r=fo;pn=null,Jo(e,t,n),pn=o,fo=r,pn!==null&&(fo?(e=pn,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pn.removeChild(n.stateNode));break;case 18:pn!==null&&(fo?(e=pn,n=n.stateNode,e.nodeType===8?Md(e.parentNode,n):e.nodeType===1&&Md(e,n),Hs(e)):Md(pn,n.stateNode));break;case 4:o=pn,r=fo,pn=n.stateNode.containerInfo,fo=!0,Jo(e,t,n),pn=o,fo=r;break;case 0:case 11:case 14:case 15:if(!vn&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){r=o=o.next;do{var i=r,s=i.destroy;i=i.tag,s!==void 0&&((i&2)!==0||(i&4)!==0)&&vu(n,t,s),r=r.next}while(r!==o)}Jo(e,t,n);break;case 1:if(!vn&&(Ei(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(a){Wt(n,t,a)}Jo(e,t,n);break;case 21:Jo(e,t,n);break;case 22:n.mode&1?(vn=(o=vn)||n.memoizedState!==null,Jo(e,t,n),vn=o):Jo(e,t,n);break;default:Jo(e,t,n)}}function cm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new w2),t.forEach(function(o){var r=$2.bind(null,e,o);n.has(o)||(n.add(o),o.then(r,r))})}}function uo(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var r=n[o];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:pn=a.stateNode,fo=!1;break e;case 3:pn=a.stateNode.containerInfo,fo=!0;break e;case 4:pn=a.stateNode.containerInfo,fo=!0;break e}a=a.return}if(pn===null)throw Error(pe(160));e_(i,s,r),pn=null,fo=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Wt(r,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)t_(t,e),t=t.sibling}function t_(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(uo(t,e),Co(e),o&4){try{Rs(3,e,e.return),Kl(3,e)}catch(P){Wt(e,e.return,P)}try{Rs(5,e,e.return)}catch(P){Wt(e,e.return,P)}}break;case 1:uo(t,e),Co(e),o&512&&n!==null&&Ei(n,n.return);break;case 5:if(uo(t,e),Co(e),o&512&&n!==null&&Ei(n,n.return),e.flags&32){var r=e.stateNode;try{Os(r,"")}catch(P){Wt(e,e.return,P)}}if(o&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&km(r,i),Qd(a,s);var c=Qd(a,i);for(s=0;s<l.length;s+=2){var d=l[s],m=l[s+1];d==="style"?Lm(r,m):d==="dangerouslySetInnerHTML"?Em(r,m):d==="children"?Os(r,m):Iu(r,d,m,c)}switch(a){case"input":jd(r,i);break;case"textarea":Cm(r,i);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var b=i.value;b!=null?Li(r,!!i.multiple,b,!1):f!==!!i.multiple&&(i.defaultValue!=null?Li(r,!!i.multiple,i.defaultValue,!0):Li(r,!!i.multiple,i.multiple?[]:"",!1))}r[Xs]=i}catch(P){Wt(e,e.return,P)}}break;case 6:if(uo(t,e),Co(e),o&4){if(e.stateNode===null)throw Error(pe(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(P){Wt(e,e.return,P)}}break;case 3:if(uo(t,e),Co(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Hs(t.containerInfo)}catch(P){Wt(e,e.return,P)}break;case 4:uo(t,e),Co(e);break;case 13:uo(t,e),Co(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(dp=Xt())),o&4&&cm(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(vn=(c=vn)||d,uo(t,e),vn=c):uo(t,e),Co(e),o&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&(e.mode&1)!==0)for(Ie=e,d=e.child;d!==null;){for(m=Ie=d;Ie!==null;){switch(f=Ie,b=f.child,f.tag){case 0:case 11:case 14:case 15:Rs(4,f,f.return);break;case 1:Ei(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){o=f,n=f.return;try{t=o,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(P){Wt(o,n,P)}}break;case 5:Ei(f,f.return);break;case 22:if(f.memoizedState!==null){um(m);continue}}b!==null?(b.return=f,Ie=b):um(m)}d=d.sibling}e:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{r=m.stateNode,c?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=m.stateNode,l=m.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Mm("display",s))}catch(P){Wt(e,e.return,P)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(P){Wt(e,e.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:uo(t,e),Co(e),o&4&&cm(e);break;case 21:break;default:uo(t,e),Co(e)}}function Co(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Jg(n)){var o=n;break e}n=n.return}throw Error(pe(160))}switch(o.tag){case 5:var r=o.stateNode;o.flags&32&&(Os(r,""),o.flags&=-33);var i=lm(e);Cu(e,i,r);break;case 3:case 4:var s=o.stateNode.containerInfo,a=lm(e);ku(e,a,s);break;default:throw Error(pe(161))}}catch(l){Wt(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function b2(e,t,n){Ie=e,n_(e,t,n)}function n_(e,t,n){for(var o=(e.mode&1)!==0;Ie!==null;){var r=Ie,i=r.child;if(r.tag===22&&o){var s=r.memoizedState!==null||il;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||vn;a=il;var c=vn;if(il=s,(vn=l)&&!c)for(Ie=r;Ie!==null;)s=Ie,l=s.child,s.tag===22&&s.memoizedState!==null?pm(r):l!==null?(l.return=s,Ie=l):pm(r);for(;i!==null;)Ie=i,n_(i,t,n),i=i.sibling;Ie=r,il=a,vn=c}dm(e,t,n)}else(r.subtreeFlags&8772)!==0&&i!==null?(i.return=r,Ie=i):dm(e,t,n)}}function dm(e){for(;Ie!==null;){var t=Ie;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:vn||Kl(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!vn)if(n===null)o.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:po(t.type,n.memoizedProps);o.componentDidUpdate(r,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Qh(t,i,o);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Qh(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&Hs(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(pe(163))}vn||t.flags&512&&bu(t)}catch(f){Wt(t,t.return,f)}}if(t===e){Ie=null;break}if(n=t.sibling,n!==null){n.return=t.return,Ie=n;break}Ie=t.return}}function um(e){for(;Ie!==null;){var t=Ie;if(t===e){Ie=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Ie=n;break}Ie=t.return}}function pm(e){for(;Ie!==null;){var t=Ie;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Kl(4,t)}catch(l){Wt(t,n,l)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var r=t.return;try{o.componentDidMount()}catch(l){Wt(t,r,l)}}var i=t.return;try{bu(t)}catch(l){Wt(t,i,l)}break;case 5:var s=t.return;try{bu(t)}catch(l){Wt(t,s,l)}}}catch(l){Wt(t,t.return,l)}if(t===e){Ie=null;break}var a=t.sibling;if(a!==null){a.return=t.return,Ie=a;break}Ie=t.return}}var k2=Math.ceil,Al=Vo.ReactCurrentDispatcher,lp=Vo.ReactCurrentOwner,Zn=Vo.ReactCurrentBatchConfig,lt=0,dn=null,Jt=null,fn=0,Bn=0,Mi=_r(0),an=0,Js=null,Ur=0,ql=0,cp=0,Ds=null,Nn=null,dp=0,Fi=1/0,Bo=null,Bl=!1,Su=null,ur=null,sl=!1,ir=null,Ol=0,As=0,Eu=null,hl=-1,ml=0;function Mn(){return(lt&6)!==0?Xt():hl!==-1?hl:hl=Xt()}function pr(e){return(e.mode&1)===0?1:(lt&2)!==0&&fn!==0?fn&-fn:s2.transition!==null?(ml===0&&(ml=Fm()),ml):(e=ft,e!==0||(e=window.event,e=e===void 0?16:Xm(e.type)),e)}function go(e,t,n,o){if(50<As)throw As=0,Eu=null,Error(pe(185));ea(e,n,o),((lt&2)===0||e!==dn)&&(e===dn&&((lt&2)===0&&(ql|=n),an===4&&or(e,fn)),An(e,o),n===1&&lt===0&&(t.mode&1)===0&&(Fi=Xt()+500,Vl&&yr()))}function An(e,t){var n=e.callbackNode;l5(e,t);var o=vl(e,e===dn?fn:0);if(o===0)n!==null&&wh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&wh(n),t===1)e.tag===0?i2(fm.bind(null,e)):pg(fm.bind(null,e)),t2(function(){(lt&6)===0&&yr()}),n=null;else{switch(Wm(o)){case 1:n=Au;break;case 4:n=Om;break;case 16:n=wl;break;case 536870912:n=zm;break;default:n=wl}n=d_(n,o_.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function o_(e,t){if(hl=-1,ml=0,(lt&6)!==0)throw Error(pe(327));var n=e.callbackNode;if(Pi()&&e.callbackNode!==n)return null;var o=vl(e,e===dn?fn:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=zl(e,o);else{t=o;var r=lt;lt|=2;var i=i_();(dn!==e||fn!==t)&&(Bo=null,Fi=Xt()+500,zr(e,t));do try{E2();break}catch(a){r_(e,a)}while(!0);Ku(),Al.current=i,lt=r,Jt!==null?t=0:(dn=null,fn=0,t=an)}if(t!==0){if(t===2&&(r=Jd(e),r!==0&&(o=r,t=Mu(e,r))),t===1)throw n=Js,zr(e,0),or(e,o),An(e,Xt()),n;if(t===6)or(e,o);else{if(r=e.current.alternate,(o&30)===0&&!C2(r)&&(t=zl(e,o),t===2&&(i=Jd(e),i!==0&&(o=i,t=Mu(e,i))),t===1))throw n=Js,zr(e,0),or(e,o),An(e,Xt()),n;switch(e.finishedWork=r,e.finishedLanes=o,t){case 0:case 1:throw Error(pe(345));case 2:Dr(e,Nn,Bo);break;case 3:if(or(e,o),(o&130023424)===o&&(t=dp+500-Xt(),10<t)){if(vl(e,0)!==0)break;if(r=e.suspendedLanes,(r&o)!==o){Mn(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=au(Dr.bind(null,e,Nn,Bo),t);break}Dr(e,Nn,Bo);break;case 4:if(or(e,o),(o&4194240)===o)break;for(t=e.eventTimes,r=-1;0<o;){var s=31-mo(o);i=1<<s,s=t[s],s>r&&(r=s),o&=~i}if(o=r,o=Xt()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*k2(o/1960))-o,10<o){e.timeoutHandle=au(Dr.bind(null,e,Nn,Bo),o);break}Dr(e,Nn,Bo);break;case 5:Dr(e,Nn,Bo);break;default:throw Error(pe(329))}}}return An(e,Xt()),e.callbackNode===n?o_.bind(null,e):null}function Mu(e,t){var n=Ds;return e.current.memoizedState.isDehydrated&&(zr(e,t).flags|=256),e=zl(e,t),e!==2&&(t=Nn,Nn=n,t!==null&&Lu(t)),e}function Lu(e){Nn===null?Nn=e:Nn.push.apply(Nn,e)}function C2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var r=n[o],i=r.getSnapshot;r=r.value;try{if(!_o(i(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function or(e,t){for(t&=~cp,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-mo(t),o=1<<n;e[n]=-1,t&=~o}}function fm(e){if((lt&6)!==0)throw Error(pe(327));Pi();var t=vl(e,0);if((t&1)===0)return An(e,Xt()),null;var n=zl(e,t);if(e.tag!==0&&n===2){var o=Jd(e);o!==0&&(t=o,n=Mu(e,o))}if(n===1)throw n=Js,zr(e,0),or(e,t),An(e,Xt()),n;if(n===6)throw Error(pe(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dr(e,Nn,Bo),An(e,Xt()),null}function up(e,t){var n=lt;lt|=1;try{return e(t)}finally{lt=n,lt===0&&(Fi=Xt()+500,Vl&&yr())}}function Yr(e){ir!==null&&ir.tag===0&&(lt&6)===0&&Pi();var t=lt;lt|=1;var n=Zn.transition,o=ft;try{if(Zn.transition=null,ft=1,e)return e()}finally{ft=o,Zn.transition=n,lt=t,(lt&6)===0&&yr()}}function pp(){Bn=Mi.current,Mt(Mi)}function zr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,e2(n)),Jt!==null)for(n=Jt.return;n!==null;){var o=n;switch(Vu(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&El();break;case 3:Oi(),Mt(Rn),Mt(bn),tp();break;case 5:ep(o);break;case 4:Oi();break;case 13:Mt(Dt);break;case 19:Mt(Dt);break;case 10:qu(o.type._context);break;case 22:case 23:pp()}n=n.return}if(dn=e,Jt=e=fr(e.current,null),fn=Bn=t,an=0,Js=null,cp=ql=Ur=0,Nn=Ds=null,Br!==null){for(t=0;t<Br.length;t++)if(n=Br[t],o=n.interleaved,o!==null){n.interleaved=null;var r=o.next,i=n.pending;if(i!==null){var s=i.next;i.next=r,o.next=s}n.pending=o}Br=null}return e}function r_(e,t){do{var n=Jt;try{if(Ku(),ul.current=Dl,Rl){for(var o=At.memoizedState;o!==null;){var r=o.queue;r!==null&&(r.pending=null),o=o.next}Rl=!1}if(jr=0,cn=sn=At=null,Ps=!1,qs=0,lp.current=null,n===null||n.return===null){an=1,Js=t,Jt=null;break}e:{var i=e,s=n.return,a=n,l=t;if(t=fn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,m=d.tag;if((d.mode&1)===0&&(m===0||m===11||m===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var b=em(s);if(b!==null){b.flags&=-257,tm(b,s,a,i,t),b.mode&1&&Jh(i,c,t),t=b,l=c;var v=t.updateQueue;if(v===null){var P=new Set;P.add(l),t.updateQueue=P}else v.add(l);break e}else{if((t&1)===0){Jh(i,c,t),fp();break e}l=Error(pe(426))}}else if(It&&a.mode&1){var k=em(s);if(k!==null){(k.flags&65536)===0&&(k.flags|=256),tm(k,s,a,i,t),Xu(zi(l,a));break e}}i=l=zi(l,a),an!==4&&(an=2),Ds===null?Ds=[i]:Ds.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Wg(i,l,t);Xh(i,h);break e;case 1:a=l;var _=i.type,S=i.stateNode;if((i.flags&128)===0&&(typeof _.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(ur===null||!ur.has(S)))){i.flags|=65536,t&=-t,i.lanes|=t;var D=Hg(i,a,t);Xh(i,D);break e}}i=i.return}while(i!==null)}a_(n)}catch(Z){t=Z,Jt===n&&n!==null&&(Jt=n=n.return);continue}break}while(!0)}function i_(){var e=Al.current;return Al.current=Dl,e===null?Dl:e}function fp(){(an===0||an===3||an===2)&&(an=4),dn===null||(Ur&268435455)===0&&(ql&268435455)===0||or(dn,fn)}function zl(e,t){var n=lt;lt|=2;var o=i_();(dn!==e||fn!==t)&&(Bo=null,zr(e,t));do try{S2();break}catch(r){r_(e,r)}while(!0);if(Ku(),lt=n,Al.current=o,Jt!==null)throw Error(pe(261));return dn=null,fn=0,an}function S2(){for(;Jt!==null;)s_(Jt)}function E2(){for(;Jt!==null&&!Jy();)s_(Jt)}function s_(e){var t=c_(e.alternate,e,Bn);e.memoizedProps=e.pendingProps,t===null?a_(e):Jt=t,lp.current=null}function a_(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=y2(n,t,Bn),n!==null){Jt=n;return}}else{if(n=x2(n,t),n!==null){n.flags&=32767,Jt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{an=6,Jt=null;return}}if(t=t.sibling,t!==null){Jt=t;return}Jt=t=e}while(t!==null);an===0&&(an=5)}function Dr(e,t,n){var o=ft,r=Zn.transition;try{Zn.transition=null,ft=1,M2(e,t,n,o)}finally{Zn.transition=r,ft=o}return null}function M2(e,t,n,o){do Pi();while(ir!==null);if((lt&6)!==0)throw Error(pe(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(pe(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(c5(e,i),e===dn&&(Jt=dn=null,fn=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||sl||(sl=!0,d_(wl,function(){return Pi(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=Zn.transition,Zn.transition=null;var s=ft;ft=1;var a=lt;lt|=4,lp.current=null,v2(e,n),t_(n,e),K5(iu),bl=!!ru,iu=ru=null,e.current=n,b2(n,e,r),e5(),lt=a,ft=s,Zn.transition=i}else e.current=n;if(sl&&(sl=!1,ir=e,Ol=r),i=e.pendingLanes,i===0&&(ur=null),o5(n.stateNode,o),An(e,Xt()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],o(r.value,{componentStack:r.stack,digest:r.digest});if(Bl)throw Bl=!1,e=Su,Su=null,e;return(Ol&1)!==0&&e.tag!==0&&Pi(),i=e.pendingLanes,(i&1)!==0?e===Eu?As++:(As=0,Eu=e):As=0,yr(),null}function Pi(){if(ir!==null){var e=Wm(Ol),t=Zn.transition,n=ft;try{if(Zn.transition=null,ft=16>e?16:e,ir===null)var o=!1;else{if(e=ir,ir=null,Ol=0,(lt&6)!==0)throw Error(pe(331));var r=lt;for(lt|=4,Ie=e.current;Ie!==null;){var i=Ie,s=i.child;if((Ie.flags&16)!==0){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ie=c;Ie!==null;){var d=Ie;switch(d.tag){case 0:case 11:case 15:Rs(8,d,i)}var m=d.child;if(m!==null)m.return=d,Ie=m;else for(;Ie!==null;){d=Ie;var f=d.sibling,b=d.return;if(Zg(d),d===c){Ie=null;break}if(f!==null){f.return=b,Ie=f;break}Ie=b}}}var v=i.alternate;if(v!==null){var P=v.child;if(P!==null){v.child=null;do{var k=P.sibling;P.sibling=null,P=k}while(P!==null)}}Ie=i}}if((i.subtreeFlags&2064)!==0&&s!==null)s.return=i,Ie=s;else e:for(;Ie!==null;){if(i=Ie,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Rs(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,Ie=h;break e}Ie=i.return}}var _=e.current;for(Ie=_;Ie!==null;){s=Ie;var S=s.child;if((s.subtreeFlags&2064)!==0&&S!==null)S.return=s,Ie=S;else e:for(s=_;Ie!==null;){if(a=Ie,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Kl(9,a)}}catch(Z){Wt(a,a.return,Z)}if(a===s){Ie=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,Ie=D;break e}Ie=a.return}}if(lt=r,yr(),Mo&&typeof Mo.onPostCommitFiberRoot=="function")try{Mo.onPostCommitFiberRoot(Wl,e)}catch{}o=!0}return o}finally{ft=n,Zn.transition=t}}return!1}function hm(e,t,n){t=zi(n,t),t=Wg(e,t,1),e=dr(e,t,1),t=Mn(),e!==null&&(ea(e,1,t),An(e,t))}function Wt(e,t,n){if(e.tag===3)hm(e,e,n);else for(;t!==null;){if(t.tag===3){hm(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ur===null||!ur.has(o))){e=zi(n,e),e=Hg(t,e,1),t=dr(t,e,1),e=Mn(),t!==null&&(ea(t,1,e),An(t,e));break}}t=t.return}}function L2(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=Mn(),e.pingedLanes|=e.suspendedLanes&n,dn===e&&(fn&n)===n&&(an===4||an===3&&(fn&130023424)===fn&&500>Xt()-dp?zr(e,0):cp|=n),An(e,t)}function l_(e,t){t===0&&((e.mode&1)===0?t=1:(t=Va,Va<<=1,(Va&130023424)===0&&(Va=4194304)));var n=Mn();e=Uo(e,t),e!==null&&(ea(e,t,n),An(e,n))}function T2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),l_(e,n)}function $2(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(pe(314))}o!==null&&o.delete(t),l_(e,n)}var c_;c_=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Rn.current)Pn=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Pn=!1,_2(e,t,n);Pn=(e.flags&131072)!==0}else Pn=!1,It&&(t.flags&1048576)!==0&&fg(t,Tl,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;fl(e,t),e=t.pendingProps;var r=Di(t,bn.current);Ni(t,n),r=op(null,t,o,e,r,n);var i=rp();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Dn(o)?(i=!0,Ml(t)):i=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Zu(t),r.updater=Ql,t.stateNode=r,r._reactInternals=t,hu(t,o,e,n),t=_u(null,t,o,!0,i,n)):(t.tag=0,It&&i&&Yu(t),En(null,t,r,n),t=t.child),t;case 16:o=t.elementType;e:{switch(fl(e,t),e=t.pendingProps,r=o._init,o=r(o._payload),t.type=o,r=t.tag=N2(o),e=po(o,e),r){case 0:t=gu(null,t,o,e,n);break e;case 1:t=rm(null,t,o,e,n);break e;case 11:t=nm(null,t,o,e,n);break e;case 14:t=om(null,t,o,po(o.type,e),n);break e}throw Error(pe(306,o,""))}return t;case 0:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:po(o,r),gu(e,t,o,r,n);case 1:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:po(o,r),rm(e,t,o,r,n);case 3:e:{if(Vg(t),e===null)throw Error(pe(387));o=t.pendingProps,i=t.memoizedState,r=i.element,xg(e,t),Nl(t,o,null,n);var s=t.memoizedState;if(o=s.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){r=zi(Error(pe(423)),t),t=im(e,t,o,n,r);break e}else if(o!==r){r=zi(Error(pe(424)),t),t=im(e,t,o,n,r);break e}else for(On=cr(t.stateNode.containerInfo.firstChild),zn=t,It=!0,ho=null,n=_g(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ai(),o===r){t=Yo(e,t,n);break e}En(e,t,o,n)}t=t.child}return t;case 5:return wg(t),e===null&&uu(t),o=t.type,r=t.pendingProps,i=e!==null?e.memoizedProps:null,s=r.children,su(o,r)?s=null:i!==null&&su(o,i)&&(t.flags|=32),Yg(e,t),En(e,t,s,n),t.child;case 6:return e===null&&uu(t),null;case 13:return Xg(e,t,n);case 4:return Ju(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Bi(t,null,o,n):En(e,t,o,n),t.child;case 11:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:po(o,r),nm(e,t,o,r,n);case 7:return En(e,t,t.pendingProps,n),t.child;case 8:return En(e,t,t.pendingProps.children,n),t.child;case 12:return En(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,r=t.pendingProps,i=t.memoizedProps,s=r.value,Ct($l,o._currentValue),o._currentValue=s,i!==null)if(_o(i.value,s)){if(i.children===r.children&&!Rn.current){t=Yo(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var l=a.firstContext;l!==null;){if(l.context===o){if(i.tag===1){l=Wo(-1,n&-n),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),pu(i.return,n,t),a.lanes|=n;break}l=l.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(pe(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),pu(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}En(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,o=t.pendingProps.children,Ni(t,n),r=Jn(r),o=o(r),t.flags|=1,En(e,t,o,n),t.child;case 14:return o=t.type,r=po(o,t.pendingProps),r=po(o.type,r),om(e,t,o,r,n);case 15:return jg(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:po(o,r),fl(e,t),t.tag=1,Dn(o)?(e=!0,Ml(t)):e=!1,Ni(t,n),Fg(t,o,r),hu(t,o,r,n),_u(null,t,o,!0,e,n);case 19:return Qg(e,t,n);case 22:return Ug(e,t,n)}throw Error(pe(156,t.tag))};function d_(e,t){return Bm(e,t)}function I2(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(e,t,n,o){return new I2(e,t,n,o)}function hp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function N2(e){if(typeof e=="function")return hp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pu)return 11;if(e===Ru)return 14}return 2}function fr(e,t){var n=e.alternate;return n===null?(n=Gn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function gl(e,t,n,o,r,i){var s=2;if(o=e,typeof e=="function")hp(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case _i:return Fr(n.children,r,i,t);case Nu:s=8,r|=8;break;case Od:return e=Gn(12,n,t,r|2),e.elementType=Od,e.lanes=i,e;case zd:return e=Gn(13,n,t,r),e.elementType=zd,e.lanes=i,e;case Fd:return e=Gn(19,n,t,r),e.elementType=Fd,e.lanes=i,e;case wm:return Gl(n,r,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ym:s=10;break e;case xm:s=9;break e;case Pu:s=11;break e;case Ru:s=14;break e;case er:s=16,o=null;break e}throw Error(pe(130,e==null?e:typeof e,""))}return t=Gn(s,n,t,r),t.elementType=e,t.type=o,t.lanes=i,t}function Fr(e,t,n,o){return e=Gn(7,e,o,t),e.lanes=n,e}function Gl(e,t,n,o){return e=Gn(22,e,o,t),e.elementType=wm,e.lanes=n,e.stateNode={isHidden:!1},e}function Dd(e,t,n){return e=Gn(6,e,null,t),e.lanes=n,e}function Ad(e,t,n){return t=Gn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function P2(e,t,n,o,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xd(0),this.expirationTimes=xd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xd(0),this.identifierPrefix=o,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function mp(e,t,n,o,r,i,s,a,l){return e=new P2(e,t,n,a,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Gn(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zu(i),e}function R2(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gi,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function u_(e){if(!e)return mr;e=e._reactInternals;e:{if(Xr(e)!==e||e.tag!==1)throw Error(pe(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Dn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(pe(171))}if(e.tag===1){var n=e.type;if(Dn(n))return ug(e,n,t)}return t}function p_(e,t,n,o,r,i,s,a,l){return e=mp(n,o,!0,e,r,i,s,a,l),e.context=u_(null),n=e.current,o=Mn(),r=pr(n),i=Wo(o,r),i.callback=t??null,dr(n,i,r),e.current.lanes=r,ea(e,r,o),An(e,o),e}function Zl(e,t,n,o){var r=t.current,i=Mn(),s=pr(r);return n=u_(n),t.context===null?t.context=n:t.pendingContext=n,t=Wo(i,s),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=dr(r,t,s),e!==null&&(go(e,r,s,i),dl(e,r,s)),s}function Fl(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function mm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function gp(e,t){mm(e,t),(e=e.alternate)&&mm(e,t)}function D2(){return null}var f_=typeof reportError=="function"?reportError:function(e){console.error(e)};function _p(e){this._internalRoot=e}Jl.prototype.render=_p.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(pe(409));Zl(e,t,null,null)};Jl.prototype.unmount=_p.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yr(function(){Zl(null,e,null,null)}),t[jo]=null}};function Jl(e){this._internalRoot=e}Jl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Um();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nr.length&&t!==0&&t<nr[n].priority;n++);nr.splice(n,0,e),n===0&&Vm(e)}};function yp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ec(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gm(){}function A2(e,t,n,o,r){if(r){if(typeof o=="function"){var i=o;o=function(){var c=Fl(s);i.call(c)}}var s=p_(t,o,e,0,null,!1,!1,"",gm);return e._reactRootContainer=s,e[jo]=s.current,Ys(e.nodeType===8?e.parentNode:e),Yr(),s}for(;r=e.lastChild;)e.removeChild(r);if(typeof o=="function"){var a=o;o=function(){var c=Fl(l);a.call(c)}}var l=mp(e,0,!1,null,null,!1,!1,"",gm);return e._reactRootContainer=l,e[jo]=l.current,Ys(e.nodeType===8?e.parentNode:e),Yr(function(){Zl(t,l,n,o)}),l}function tc(e,t,n,o,r){var i=n._reactRootContainer;if(i){var s=i;if(typeof r=="function"){var a=r;r=function(){var l=Fl(s);a.call(l)}}Zl(t,s,e,r)}else s=A2(n,t,e,r,o);return Fl(s)}Hm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Es(t.pendingLanes);n!==0&&(Bu(t,n|1),An(t,Xt()),(lt&6)===0&&(Fi=Xt()+500,yr()))}break;case 13:Yr(function(){var o=Uo(e,1);if(o!==null){var r=Mn();go(o,e,1,r)}}),gp(e,1)}};Ou=function(e){if(e.tag===13){var t=Uo(e,134217728);if(t!==null){var n=Mn();go(t,e,134217728,n)}gp(e,134217728)}};jm=function(e){if(e.tag===13){var t=pr(e),n=Uo(e,t);if(n!==null){var o=Mn();go(n,e,t,o)}gp(e,t)}};Um=function(){return ft};Ym=function(e,t){var n=ft;try{return ft=e,t()}finally{ft=n}};qd=function(e,t,n){switch(t){case"input":if(jd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var r=Yl(o);if(!r)throw Error(pe(90));bm(o),jd(o,r)}}}break;case"textarea":Cm(e,n);break;case"select":t=n.value,t!=null&&Li(e,!!n.multiple,t,!1)}};Im=up;Nm=Yr;var B2={usingClientEntryPoint:!1,Events:[na,vi,Yl,Tm,$m,up]},bs={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},O2={bundleType:bs.bundleType,version:bs.version,rendererPackageName:bs.rendererPackageName,rendererConfig:bs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vo.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Dm(e),e===null?null:e.stateNode},findFiberByHostInstance:bs.findFiberByHostInstance||D2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(ks=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ks.isDisabled&&ks.supportsFiber))try{Wl=ks.inject(O2),Mo=ks}catch{}var ks;Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B2;Hn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yp(t))throw Error(pe(200));return R2(e,t,null,n)};Hn.createRoot=function(e,t){if(!yp(e))throw Error(pe(299));var n=!1,o="",r=f_;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=mp(e,1,!1,null,null,n,!1,o,r),e[jo]=t.current,Ys(e.nodeType===8?e.parentNode:e),new _p(t)};Hn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(pe(188)):(e=Object.keys(e).join(","),Error(pe(268,e)));return e=Dm(t),e=e===null?null:e.stateNode,e};Hn.flushSync=function(e){return Yr(e)};Hn.hydrate=function(e,t,n){if(!ec(t))throw Error(pe(200));return tc(null,e,t,!0,n)};Hn.hydrateRoot=function(e,t,n){if(!yp(e))throw Error(pe(405));var o=n!=null&&n.hydratedSources||null,r=!1,i="",s=f_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=p_(t,null,e,1,n??null,r,!1,i,s),e[jo]=t.current,Ys(e),o)for(e=0;e<o.length;e++)n=o[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new Jl(t)};Hn.render=function(e,t,n){if(!ec(t))throw Error(pe(200));return tc(null,e,t,!1,n)};Hn.unmountComponentAtNode=function(e){if(!ec(e))throw Error(pe(40));return e._reactRootContainer?(Yr(function(){tc(null,null,e,!1,function(){e._reactRootContainer=null,e[jo]=null})}),!0):!1};Hn.unstable_batchedUpdates=up;Hn.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!ec(n))throw Error(pe(200));if(e==null||e._reactInternals===void 0)throw Error(pe(38));return tc(e,t,n,!1,o)};Hn.version="18.3.1-next-f1338f8080-20240426"});var nc=Ao((Vk,g_)=>{"use strict";function m_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m_)}catch(e){console.error(e)}}m_(),g_.exports=h_()});var y_=Ao(xp=>{"use strict";var __=nc();xp.createRoot=__.createRoot,xp.hydrateRoot=__.hydrateRoot;var Xk});var w_=Ao(oc=>{"use strict";var z2=lo(),F2=Symbol.for("react.element"),W2=Symbol.for("react.fragment"),H2=Object.prototype.hasOwnProperty,j2=z2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U2={key:!0,ref:!0,__self:!0,__source:!0};function x_(e,t,n){var o,r={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(o in t)H2.call(t,o)&&!U2.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)r[o]===void 0&&(r[o]=t[o]);return{$$typeof:F2,type:e,key:i,ref:s,props:r,_owner:j2.current}}oc.Fragment=W2;oc.jsx=x_;oc.jsxs=x_});var mn=Ao((qk,v_)=>{"use strict";v_.exports=w_()});var Nk={};wy(Nk,{callbackTransport:()=>A0,clipboardTransport:()=>vc,consoleTransport:()=>B0,createAnnotateKit:()=>Oc,createDemoKit:()=>Ik});var uf=yt(y_(),1);var B=yt(lo(),1),X_=yt(nc(),1),Ot=yt(lo(),1),ye=yt(mn(),1),Nt=yt(mn(),1),$o=yt(lo(),1),q_=yt(nc(),1),Zr=yt(mn(),1),Np=yt(mn(),1),ct=yt(lo(),1),p=yt(mn(),1),wt=yt(mn(),1),zt=yt(lo(),1),u=yt(mn(),1),qe=yt(lo(),1),st=yt(mn(),1),c0=yt(lo(),1),jn=yt(mn(),1),pa=yt(mn(),1),d0=yt(lo(),1),Qi=yt(mn(),1),Ki=yt(mn(),1),Se=yt(mn(),1),ae=yt(mn(),1),Y2=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,V2={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",popupEnter:"styles-module__popupEnter___AuQDN",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",popupExit:"styles-module__popupExit___JJKQX",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",green:"styles-module__green___99l3h",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(e)),e.textContent=Y2}var xt=V2,X2=`.icon-transitions-module__iconState___uqK9J {
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
}`,Q2={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-components-icon-transitions");e||(e=document.createElement("style"),e.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(e)),e.textContent=X2}var gt=Q2;var K2=({size:e=16})=>(0,ye.jsx)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",children:(0,ye.jsx)("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})});var q2=({size:e=24,style:t={}})=>(0,ye.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:t,children:[(0,ye.jsxs)("g",{clipPath:"url(#clip0_list_sparkle)",children:[(0,ye.jsx)("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),(0,ye.jsx)("defs",{children:(0,ye.jsx)("clipPath",{id:"clip0_list_sparkle",children:(0,ye.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]}),G2=({size:e=20,...t})=>(0,ye.jsxs)("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[(0,ye.jsx)("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),(0,ye.jsx)("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]});var Z2=({size:e=24,copied:t=!1,tint:n})=>(0,ye.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:n?{color:n,transition:"color 0.3s ease"}:void 0,children:[(0,ye.jsxs)("g",{className:`${gt.iconState} ${t?gt.hiddenScaled:gt.visibleScaled}`,children:[(0,ye.jsx)("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),(0,ye.jsx)("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),(0,ye.jsxs)("g",{className:`${gt.iconState} ${t?gt.visibleScaled:gt.hiddenScaled}`,children:[(0,ye.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),J2=({size:e=24,state:t="idle"})=>{let n=t==="idle",o=t==="sent",r=t==="failed",i=t==="sending";return(0,ye.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,ye.jsx)("g",{className:`${gt.iconStateFast} ${n?gt.visibleScaled:i?gt.sending:gt.hiddenScaled}`,children:(0,ye.jsx)("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,ye.jsxs)("g",{className:`${gt.iconStateFast} ${o?gt.visibleScaled:gt.hiddenScaled}`,children:[(0,ye.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,ye.jsxs)("g",{className:`${gt.iconStateFast} ${r?gt.visibleScaled:gt.hiddenScaled}`,children:[(0,ye.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),(0,ye.jsx)("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})};var ex=({size:e=24,isOpen:t=!0})=>(0,ye.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,ye.jsxs)("g",{className:`${gt.iconFade} ${t?gt.visible:gt.hidden}`,children:[(0,ye.jsx)("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,ye.jsxs)("g",{className:`${gt.iconFade} ${t?gt.hidden:gt.visible}`,children:[(0,ye.jsx)("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),(0,ye.jsx)("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),tx=({size:e=24,isPaused:t=!1})=>(0,ye.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,ye.jsxs)("g",{className:`${gt.iconFadeFast} ${t?gt.hidden:gt.visible}`,children:[(0,ye.jsx)("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,ye.jsx)("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),(0,ye.jsx)("path",{className:`${gt.iconFadeFast} ${t?gt.visible:gt.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]});var nx=({size:e=16})=>(0,ye.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,ye.jsx)("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]});var ox=({size:e=16})=>(0,ye.jsx)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:(0,ye.jsx)("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})});var Q_=({size:e=16})=>(0,ye.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,ye.jsxs)("g",{clipPath:"url(#clip0_2_53)",children:[(0,ye.jsx)("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,ye.jsx)("defs",{children:(0,ye.jsx)("clipPath",{id:"clip0_2_53",children:(0,ye.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]}),rx=({size:e=24})=>(0,ye.jsx)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:(0,ye.jsx)("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),ix=({size:e=16})=>(0,ye.jsxs)("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:[(0,ye.jsx)("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ye.jsx)("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),sx=({size:e=16})=>(0,ye.jsx)("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:(0,ye.jsx)("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),zp=({size:e=16})=>(0,ye.jsx)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,ye.jsx)("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),ax=({size:e=24})=>(0,ye.jsx)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,ye.jsx)("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),lx=({size:e=16})=>(0,ye.jsx)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,ye.jsx)("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})});var cx=({size:e=24})=>(0,ye.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,ye.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),(0,ye.jsx)("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),(0,ye.jsx)("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),K_=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],wp=K_.flatMap(e=>[`:not([${e}])`,`:not([${e}] *)`]).join(""),Ip="feedback-freeze-styles",vp="__agentation_freeze";function dx(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:t=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};let e=window;return e[vp]||(e[vp]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),e[vp]}var ot=dx();typeof window<"u"&&!ot.installed&&(ot.origSetTimeout=window.setTimeout.bind(window),ot.origSetInterval=window.setInterval.bind(window),ot.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(e,t,...n)=>typeof e=="string"?ot.origSetTimeout(e,t):ot.origSetTimeout((...o)=>{ot.frozen?ot.frozenTimeoutQueue.push(()=>e(...o)):e(...o)},t,...n),window.setInterval=(e,t,...n)=>typeof e=="string"?ot.origSetInterval(e,t):ot.origSetInterval((...o)=>{ot.frozen||e(...o)},t,...n),window.requestAnimationFrame=e=>ot.origRAF(t=>{ot.frozen?ot.frozenRAFQueue.push(e):e(t)}),ot.installed=!0);var Ye=ot.origSetTimeout,ux=ot.origSetInterval,Vi=ot.origRAF;function px(e){return e?K_.some(t=>!!e.closest?.(`[${t}]`)):!1}function fx(){if(typeof document>"u"||ot.frozen)return;ot.frozen=!0,ot.frozenTimeoutQueue=[],ot.frozenRAFQueue=[];let e=document.getElementById(Ip);e||(e=document.createElement("style"),e.id=Ip),e.textContent=`
    *${wp},
    *${wp}::before,
    *${wp}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(e),ot.pausedAnimations=[];try{document.getAnimations().forEach(t=>{if(t.playState!=="running")return;let n=t.effect?.target;px(n)||(t.pause(),ot.pausedAnimations.push(t))})}catch{}document.querySelectorAll("video").forEach(t=>{t.paused||(t.dataset.wasPaused="false",t.pause())})}function b_(){if(typeof document>"u"||!ot.frozen)return;ot.frozen=!1;let e=ot.frozenTimeoutQueue;ot.frozenTimeoutQueue=[];for(let n of e)ot.origSetTimeout(()=>{if(ot.frozen){ot.frozenTimeoutQueue.push(n);return}try{n()}catch(o){console.warn("[agentation] Error replaying queued timeout:",o)}},0);let t=ot.frozenRAFQueue;ot.frozenRAFQueue=[];for(let n of t)ot.origRAF(o=>{if(ot.frozen){ot.frozenRAFQueue.push(n);return}n(o)});for(let n of ot.pausedAnimations)try{n.play()}catch(o){console.warn("[agentation] Error resuming animation:",o)}ot.pausedAnimations=[],document.getElementById(Ip)?.remove(),document.querySelectorAll("video").forEach(n=>{n.dataset.wasPaused==="false"&&(n.play().catch(()=>{}),delete n.dataset.wasPaused)})}function bp(e){if(!e)return;let t=n=>n.stopImmediatePropagation();document.addEventListener("focusin",t,!0),document.addEventListener("focusout",t,!0);try{e.focus()}finally{document.removeEventListener("focusin",t,!0),document.removeEventListener("focusout",t,!0)}}var gc=(0,Ot.forwardRef)(function({element:t,timestamp:n,selectedText:o,placeholder:r="What should change?",initialValue:i="",submitLabel:s="Add",onSubmit:a,onCancel:l,onDelete:c,style:d,accentColor:m="#3c82f7",isExiting:f=!1,lightMode:b=!1,computedStyles:v},P){let[k,h]=(0,Ot.useState)(i),[_,S]=(0,Ot.useState)(!1),[D,Z]=(0,Ot.useState)("initial"),[q,O]=(0,Ot.useState)(!1),[ie,xe]=(0,Ot.useState)(!1),he=(0,Ot.useRef)(null),j=(0,Ot.useRef)(null),M=(0,Ot.useRef)(null),J=(0,Ot.useRef)(null);(0,Ot.useEffect)(()=>{f&&D!=="exit"&&Z("exit")},[f,D]),(0,Ot.useEffect)(()=>{Ye(()=>{Z("enter")},0);let me=Ye(()=>{Z("entered")},200),Ee=Ye(()=>{let Fe=he.current;Fe&&(bp(Fe),Fe.selectionStart=Fe.selectionEnd=Fe.value.length,Fe.scrollTop=Fe.scrollHeight)},50);return()=>{clearTimeout(me),clearTimeout(Ee),M.current&&clearTimeout(M.current),J.current&&clearTimeout(J.current)}},[]);let ue=(0,Ot.useCallback)(()=>{J.current&&clearTimeout(J.current),S(!0),J.current=Ye(()=>{S(!1),bp(he.current)},250)},[]);(0,Ot.useImperativeHandle)(P,()=>({shake:ue}),[ue]);let ke=(0,Ot.useCallback)(()=>{Z("exit"),M.current=Ye(()=>{l()},150)},[l]),ge=(0,Ot.useCallback)(()=>{k.trim()&&a(k.trim())},[k,a]),oe=(0,Ot.useCallback)(me=>{me.stopPropagation(),!me.nativeEvent.isComposing&&(me.key==="Enter"&&!me.shiftKey&&(me.preventDefault(),ge()),me.key==="Escape"&&ke())},[ge,ke]),z=[xt.popup,b?xt.light:"",D==="enter"?xt.enter:"",D==="entered"?xt.entered:"",D==="exit"?xt.exit:"",_?xt.shake:""].filter(Boolean).join(" ");return(0,Nt.jsxs)("div",{ref:j,className:z,"data-annotation-popup":!0,style:d,onClick:me=>me.stopPropagation(),children:[(0,Nt.jsxs)("div",{className:xt.header,children:[v&&Object.keys(v).length>0?(0,Nt.jsxs)("button",{className:xt.headerToggle,onClick:()=>{let me=ie;xe(!ie),me&&Ye(()=>bp(he.current),0)},type:"button",children:[(0,Nt.jsx)("svg",{className:`${xt.chevron} ${ie?xt.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Nt.jsx)("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,Nt.jsx)("span",{className:xt.element,children:t})]}):(0,Nt.jsx)("span",{className:xt.element,children:t}),n&&(0,Nt.jsx)("span",{className:xt.timestamp,children:n})]}),v&&Object.keys(v).length>0&&(0,Nt.jsx)("div",{className:`${xt.stylesWrapper} ${ie?xt.expanded:""}`,children:(0,Nt.jsx)("div",{className:xt.stylesInner,children:(0,Nt.jsx)("div",{className:xt.stylesBlock,children:Object.entries(v).map(([me,Ee])=>(0,Nt.jsxs)("div",{className:xt.styleLine,children:[(0,Nt.jsx)("span",{className:xt.styleProperty,children:me.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",(0,Nt.jsx)("span",{className:xt.styleValue,children:Ee}),";"]},me))})})}),o&&(0,Nt.jsxs)("div",{className:xt.quote,children:["\u201C",o.slice(0,80),o.length>80?"...":"","\u201D"]}),(0,Nt.jsx)("textarea",{ref:he,className:xt.textarea,style:{borderColor:q?m:void 0},placeholder:r,value:k,onChange:me=>h(me.target.value),onFocus:()=>O(!0),onBlur:()=>O(!1),rows:2,onKeyDown:oe}),(0,Nt.jsxs)("div",{className:xt.actions,children:[c&&(0,Nt.jsx)("div",{className:xt.deleteWrapper,children:(0,Nt.jsx)("button",{className:xt.deleteButton,onClick:c,type:"button",children:(0,Nt.jsx)(ax,{size:22})})}),(0,Nt.jsx)("button",{className:xt.cancel,onClick:ke,children:"Cancel"}),(0,Nt.jsx)("button",{className:xt.submit,style:{backgroundColor:m,opacity:k.trim()?1:.4},onClick:ge,disabled:!k.trim(),children:s})]})]})}),hx=({content:e,children:t,...n})=>{let[o,r]=(0,$o.useState)(!1),[i,s]=(0,$o.useState)(!1),[a,l]=(0,$o.useState)({top:0,right:0}),c=(0,$o.useRef)(null),d=(0,$o.useRef)(null),m=(0,$o.useRef)(null),f=()=>{if(c.current){let P=c.current.getBoundingClientRect();l({top:P.top+P.height/2,right:window.innerWidth-P.left+8})}},b=()=>{s(!0),m.current&&(clearTimeout(m.current),m.current=null),f(),d.current=Ye(()=>{r(!0)},500)},v=()=>{d.current&&(clearTimeout(d.current),d.current=null),r(!1),m.current=Ye(()=>{s(!1)},150)};return(0,$o.useEffect)(()=>()=>{d.current&&clearTimeout(d.current),m.current&&clearTimeout(m.current)},[]),(0,Zr.jsxs)(Zr.Fragment,{children:[(0,Zr.jsx)("span",{ref:c,onMouseEnter:b,onMouseLeave:v,...n,children:t}),i&&(0,q_.createPortal)((0,Zr.jsx)("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:a.top,right:a.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:o?1:0,transition:"opacity 0.15s ease"},children:e}),document.body)]})},mx=`.styles-module__tooltip___mcXL2 {
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
}`,gx={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-help-tooltip-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(e)),e.textContent=mx}var k_=gx,Gr=({content:e})=>(0,Np.jsx)(hx,{className:k_.tooltip,content:e,children:(0,Np.jsx)(G2,{className:k_.tooltipIcon})}),Le={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},G_=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...Le.navigation},{type:"header",label:"Header",...Le.header},{type:"hero",label:"Hero",...Le.hero},{type:"section",label:"Section",...Le.section},{type:"sidebar",label:"Sidebar",...Le.sidebar},{type:"footer",label:"Footer",...Le.footer},{type:"modal",label:"Modal",...Le.modal},{type:"banner",label:"Banner",...Le.banner},{type:"drawer",label:"Drawer",...Le.drawer},{type:"popover",label:"Popover",...Le.popover},{type:"divider",label:"Divider",...Le.divider}]},{section:"Content",items:[{type:"card",label:"Card",...Le.card},{type:"text",label:"Text",...Le.text},{type:"image",label:"Image",...Le.image},{type:"video",label:"Video",...Le.video},{type:"table",label:"Table",...Le.table},{type:"grid",label:"Grid",...Le.grid},{type:"list",label:"List",...Le.list},{type:"chart",label:"Chart",...Le.chart},{type:"codeBlock",label:"Code Block",...Le.codeBlock},{type:"map",label:"Map",...Le.map},{type:"timeline",label:"Timeline",...Le.timeline},{type:"calendar",label:"Calendar",...Le.calendar},{type:"accordion",label:"Accordion",...Le.accordion},{type:"carousel",label:"Carousel",...Le.carousel},{type:"logo",label:"Logo",...Le.logo},{type:"faq",label:"FAQ",...Le.faq},{type:"gallery",label:"Gallery",...Le.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...Le.button},{type:"input",label:"Input",...Le.input},{type:"search",label:"Search",...Le.search},{type:"form",label:"Form",...Le.form},{type:"tabs",label:"Tabs",...Le.tabs},{type:"dropdown",label:"Dropdown",...Le.dropdown},{type:"toggle",label:"Toggle",...Le.toggle},{type:"stepper",label:"Stepper",...Le.stepper},{type:"rating",label:"Rating",...Le.rating},{type:"fileUpload",label:"File Upload",...Le.fileUpload},{type:"checkbox",label:"Checkbox",...Le.checkbox},{type:"radio",label:"Radio",...Le.radio},{type:"slider",label:"Slider",...Le.slider},{type:"datePicker",label:"Date Picker",...Le.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...Le.avatar},{type:"badge",label:"Badge",...Le.badge},{type:"tag",label:"Tag",...Le.tag},{type:"breadcrumb",label:"Breadcrumb",...Le.breadcrumb},{type:"pagination",label:"Pagination",...Le.pagination},{type:"progress",label:"Progress",...Le.progress},{type:"alert",label:"Alert",...Le.alert},{type:"toast",label:"Toast",...Le.toast},{type:"notification",label:"Notification",...Le.notification},{type:"tooltip",label:"Tooltip",...Le.tooltip},{type:"stat",label:"Stat",...Le.stat},{type:"skeleton",label:"Skeleton",...Le.skeleton},{type:"chip",label:"Chip",...Le.chip},{type:"icon",label:"Icon",...Le.icon},{type:"spinner",label:"Spinner",...Le.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...Le.pricing},{type:"testimonial",label:"Testimonial",...Le.testimonial},{type:"cta",label:"CTA",...Le.cta},{type:"productCard",label:"Product Card",...Le.productCard},{type:"profile",label:"Profile",...Le.profile},{type:"feature",label:"Feature",...Le.feature},{type:"team",label:"Team",...Le.team},{type:"login",label:"Login",...Le.login},{type:"contact",label:"Contact",...Le.contact}]}],yo={};for(let e of G_)for(let t of e.items)yo[t.type]=t;function ee({w:e,h:t=3,strong:n}){return(0,p.jsx)("div",{style:{width:typeof e=="number"?`${e}px`:e,height:t,borderRadius:2,background:n?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function ht({w:e,h:t,radius:n=3,style:o}){return(0,p.jsx)("div",{style:{width:typeof e=="number"?`${e}px`:e,height:typeof t=="number"?`${t}px`:t,borderRadius:n,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...o}})}function $n({size:e}){return(0,p.jsx)("div",{style:{width:e,height:e,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function _x({width:e,height:t}){let n=Math.max(8,t*.2);return(0,p.jsxs)("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${n}px`,gap:e*.02},children:[(0,p.jsx)(ht,{w:Math.max(20,t*.5),h:Math.max(12,t*.4),radius:2}),(0,p.jsxs)("div",{style:{flex:1,display:"flex",gap:e*.03,marginLeft:e*.04},children:[(0,p.jsx)(ee,{w:e*.06}),(0,p.jsx)(ee,{w:e*.07}),(0,p.jsx)(ee,{w:e*.05}),(0,p.jsx)(ee,{w:e*.06})]}),(0,p.jsx)(ht,{w:e*.1,h:Math.min(28,t*.5),radius:4})]})}function yx({width:e,height:t,text:n}){return(0,p.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:t*.05},children:[n?(0,p.jsx)("span",{style:{fontSize:Math.min(20,t*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:n}):(0,p.jsx)(ee,{w:e*.5,h:Math.max(6,t*.04),strong:!0}),(0,p.jsx)(ee,{w:e*.6}),(0,p.jsx)(ee,{w:e*.4}),(0,p.jsx)(ht,{w:Math.min(140,e*.2),h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.06}})]})}function xx({width:e,height:t}){let n=Math.max(3,Math.floor(t/36));return(0,p.jsxs)("div",{style:{padding:e*.08,display:"flex",flexDirection:"column",gap:t*.03},children:[(0,p.jsx)(ee,{w:e*.6,h:4,strong:!0}),Array.from({length:n},(o,r)=>(0,p.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,p.jsx)(ht,{w:10,h:10,radius:2}),(0,p.jsx)(ee,{w:e*(.4+r*17%30/100)})]},r))]})}function wx({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/160)));return(0,p.jsx)("div",{style:{display:"flex",padding:`${t*.12}px ${e*.03}px`,gap:e*.05},children:Array.from({length:n},(o,r)=>(0,p.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[(0,p.jsx)(ee,{w:"60%",h:3,strong:!0}),(0,p.jsx)(ee,{w:"80%",h:2}),(0,p.jsx)(ee,{w:"70%",h:2}),(0,p.jsx)(ee,{w:"60%",h:2})]},r))})}function vx({width:e,height:t}){return(0,p.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,p.jsxs)("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,p.jsx)(ee,{w:e*.3,h:4,strong:!0}),(0,p.jsx)("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),(0,p.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[(0,p.jsx)(ee,{w:"90%"}),(0,p.jsx)(ee,{w:"70%"}),(0,p.jsx)(ee,{w:"80%"})]}),(0,p.jsxs)("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[(0,p.jsx)(ht,{w:70,h:26,radius:4}),(0,p.jsx)(ht,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function bx({width:e,height:t}){return(0,p.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,p.jsx)("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),(0,p.jsxs)("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[(0,p.jsx)(ee,{w:"70%",h:4,strong:!0}),(0,p.jsx)(ee,{w:"95%",h:2}),(0,p.jsx)(ee,{w:"85%",h:2}),(0,p.jsx)(ee,{w:"50%",h:2})]})]})}function kx({width:e,height:t,text:n}){if(n)return(0,p.jsx)("div",{style:{padding:4,fontSize:Math.min(14,t*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:n});let o=Math.max(2,Math.floor(t/18));return(0,p.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[(0,p.jsx)(ee,{w:e*.6,h:5,strong:!0}),Array.from({length:o},(r,i)=>(0,p.jsx)(ee,{w:`${70+i*13%25}%`,h:2},i))]})}function Cx({width:e,height:t}){return(0,p.jsx)("div",{style:{height:"100%",position:"relative"},children:(0,p.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,preserveAspectRatio:"none",fill:"none",children:[(0,p.jsx)("line",{x1:"0",y1:"0",x2:e,y2:t,stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,p.jsx)("line",{x1:e,y1:"0",x2:"0",y2:t,stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,p.jsx)("circle",{cx:e*.3,cy:t*.3,r:Math.min(e,t)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function Sx({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(e/100))),o=Math.max(2,Math.min(6,Math.floor(t/32)));return(0,p.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,p.jsx)("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:n},(r,i)=>(0,p.jsx)("div",{style:{flex:1,padding:"0 8px"},children:(0,p.jsx)(ee,{w:"70%",h:3,strong:!0})},i))}),Array.from({length:o},(r,i)=>(0,p.jsx)("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:n},(s,a)=>(0,p.jsx)("div",{style:{flex:1,padding:"0 8px"},children:(0,p.jsx)(ee,{w:`${50+(i*7+a*13)%40}%`,h:2})},a))},i))]})}function Ex({width:e,height:t}){let n=Math.max(2,Math.floor(t/28));return(0,p.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:n},(o,r)=>(0,p.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[(0,p.jsx)($n,{size:8}),(0,p.jsx)(ee,{w:`${55+r*17%35}%`,h:2})]},r))})}function Mx({width:e,height:t,text:n}){return(0,p.jsx)("div",{style:{height:"100%",borderRadius:Math.min(8,t/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:n?(0,p.jsx)("span",{style:{fontSize:Math.min(13,t*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:n}):(0,p.jsx)(ee,{w:Math.max(20,e*.5),h:3,strong:!0})})}function Lx({width:e,height:t}){return(0,p.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[(0,p.jsx)(ee,{w:Math.min(80,e*.3),h:2}),(0,p.jsx)("div",{style:{height:Math.min(36,t*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:(0,p.jsx)(ee,{w:"40%",h:2})})]})}function Tx({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(t/56)));return(0,p.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:t*.04,padding:8},children:[Array.from({length:n},(o,r)=>(0,p.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,p.jsx)(ee,{w:60+r*17%30,h:2}),(0,p.jsx)(ht,{w:"100%",h:28,radius:4})]},r)),(0,p.jsx)(ht,{w:Math.min(120,e*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function $x({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120)));return(0,p.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,p.jsx)("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:n},(o,r)=>(0,p.jsx)("div",{style:{padding:"8px 12px",borderBottom:r===0?"2px solid var(--agd-bar-strong)":"none"},children:(0,p.jsx)(ee,{w:60,h:3,strong:r===0})},r))}),(0,p.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[(0,p.jsx)(ee,{w:"80%",h:2}),(0,p.jsx)(ee,{w:"65%",h:2}),(0,p.jsx)(ee,{w:"75%",h:2})]})]})}function Ix({width:e,height:t}){let n=Math.min(e,t)/2;return(0,p.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,p.jsx)("circle",{cx:e/2,cy:t/2,r:n-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),(0,p.jsx)("circle",{cx:e/2,cy:t*.38,r:n*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),(0,p.jsx)("path",{d:`M${e/2-n*.55} ${t*.78} C${e/2-n*.55} ${t*.55} ${e/2+n*.55} ${t*.55} ${e/2+n*.55} ${t*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function Nx({width:e,height:t}){return(0,p.jsx)("div",{style:{height:"100%",borderRadius:t/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,p.jsx)(ee,{w:Math.max(16,e*.5),h:2,strong:!0})})}function Px({width:e,height:t}){return(0,p.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:t*.08},children:[(0,p.jsx)(ee,{w:e*.5,h:Math.max(5,t*.06),strong:!0}),(0,p.jsx)(ee,{w:e*.35})]})}function Rx({width:e,height:t}){return(0,p.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:t*.04,padding:e*.04},children:[(0,p.jsx)(ee,{w:e*.3,h:4,strong:!0}),(0,p.jsx)(ee,{w:e*.7}),(0,p.jsx)(ee,{w:e*.5}),(0,p.jsxs)("div",{style:{flex:1,display:"flex",gap:e*.03,marginTop:t*.06},children:[(0,p.jsx)(ht,{w:"33%",h:"100%",radius:4}),(0,p.jsx)(ht,{w:"33%",h:"100%",radius:4}),(0,p.jsx)(ht,{w:"33%",h:"100%",radius:4})]})]})}function Dx({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/140))),o=Math.max(1,Math.min(3,Math.floor(t/120)));return(0,p.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${o}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:n*o},(r,i)=>(0,p.jsx)(ht,{w:"100%",h:"100%",radius:4},i))})}function Ax({width:e,height:t}){let n=Math.max(2,Math.floor((t-32)/28));return(0,p.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,p.jsx)("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:(0,p.jsx)(ee,{w:e*.5,h:3,strong:!0})}),(0,p.jsx)("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:n},(o,r)=>(0,p.jsx)("div",{style:{padding:"4px 6px",borderRadius:3,background:r===0?"var(--agd-fill)":"transparent"},children:(0,p.jsx)(ee,{w:`${50+r*17%35}%`,h:2,strong:r===0})},r))})]})}function Bx({width:e,height:t}){let n=Math.min(e,t)/2;return(0,p.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,p.jsx)("rect",{x:"1",y:"1",width:e-2,height:t-2,rx:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,p.jsx)("circle",{cx:e-n,cy:t/2,r:n*.7,fill:"var(--agd-bar)"})]})}function Ox({width:e,height:t}){let n=Math.min(t/2,20);return(0,p.jsxs)("div",{style:{height:"100%",borderRadius:n,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.6}px`,gap:6},children:[(0,p.jsx)($n,{size:Math.min(14,t*.4)}),(0,p.jsx)(ee,{w:"50%",h:2})]})}function zx({width:e,height:t}){return(0,p.jsxs)("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[(0,p.jsx)($n,{size:Math.min(20,t*.5)}),(0,p.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,p.jsx)(ee,{w:"60%",h:3,strong:!0}),(0,p.jsx)(ee,{w:"80%",h:2})]}),(0,p.jsx)("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function Fx({width:e,height:t}){return(0,p.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,p.jsx)("rect",{x:"0",y:"0",width:e,height:t,rx:t/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),(0,p.jsx)("rect",{x:"1",y:"1",width:e*.65,height:t-2,rx:(t-2)/2,fill:"var(--agd-bar)"})]})}function Wx({width:e,height:t}){let n=Math.max(3,Math.min(7,Math.floor(e/50))),o=e/(n*2);return(0,p.jsx)("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:n},(r,i)=>{let s=30+(i*37+17)%55;return(0,p.jsx)(ht,{w:o,h:`${s}%`,radius:2},i)})})}function Hx({width:e,height:t}){let n=Math.min(e,t)*.12;return(0,p.jsxs)("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,p.jsx)(ht,{w:"100%",h:"100%",radius:4}),(0,p.jsx)("div",{style:{position:"absolute",width:n*2,height:n*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,p.jsx)("div",{style:{width:0,height:0,borderLeft:`${n*.6}px solid var(--agd-bar-strong)`,borderTop:`${n*.4}px solid transparent`,borderBottom:`${n*.4}px solid transparent`,marginLeft:n*.15}})})]})}function jx({width:e,height:t}){return(0,p.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,p.jsx)("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,p.jsx)(ee,{w:"60%",h:2})}),(0,p.jsx)("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function Ux({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/80)));return(0,p.jsx)("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:n},(o,r)=>(0,p.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4},children:[r>0&&(0,p.jsx)("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),(0,p.jsx)(ee,{w:40+r*13%20,h:2,strong:r===n-1})]},r))})}function Yx({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(e/40))),o=Math.min(28,t*.8);return(0,p.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:n},(r,i)=>(0,p.jsx)(ht,{w:o,h:o,radius:4,style:i===1?{background:"var(--agd-bar)"}:void 0},i))})}function Vx({width:e}){return(0,p.jsx)("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:(0,p.jsx)("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function Xx({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(t/40)));return(0,p.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:n},(o,r)=>(0,p.jsxs)("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:r===0?2:1},children:[(0,p.jsx)(ee,{w:`${40+r*17%25}%`,h:3,strong:!0}),(0,p.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:r===0?"\u25BC":"\u25B6"})]},r))})}function Qx({width:e,height:t}){return(0,p.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[(0,p.jsxs)("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[(0,p.jsx)("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"\u2039"}),(0,p.jsx)(ht,{w:"100%",h:"100%",radius:4}),(0,p.jsx)("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"\u203A"})]}),(0,p.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[(0,p.jsx)($n,{size:5}),(0,p.jsx)($n,{size:5}),(0,p.jsx)($n,{size:5})]})]})}function Kx({width:e,height:t}){return(0,p.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:t*.04},children:[(0,p.jsx)(ee,{w:e*.4,h:3,strong:!0}),(0,p.jsx)(ee,{w:e*.3,h:6,strong:!0}),(0,p.jsx)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(n,o)=>(0,p.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4},children:[(0,p.jsx)($n,{size:5}),(0,p.jsx)(ee,{w:`${50+o*17%35}%`,h:2})]},o))}),(0,p.jsx)(ht,{w:e*.7,h:Math.min(32,t*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function qx({width:e,height:t}){return(0,p.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[(0,p.jsx)("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"\u201C"}),(0,p.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[(0,p.jsx)(ee,{w:"90%",h:2}),(0,p.jsx)(ee,{w:"75%",h:2}),(0,p.jsx)(ee,{w:"60%",h:2})]}),(0,p.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,p.jsx)($n,{size:20}),(0,p.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[(0,p.jsx)(ee,{w:60,h:3,strong:!0}),(0,p.jsx)(ee,{w:40,h:2})]})]})]})}function Gx({width:e,height:t}){return(0,p.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:t*.08},children:[(0,p.jsx)(ee,{w:e*.5,h:Math.max(4,t*.05),strong:!0}),(0,p.jsx)(ee,{w:e*.35}),(0,p.jsx)(ht,{w:Math.min(140,e*.25),h:Math.min(32,t*.15),radius:6,style:{marginTop:t*.04,background:"var(--agd-bar)"}})]})}function Zx({width:e,height:t}){return(0,p.jsxs)("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[(0,p.jsx)("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:(0,p.jsx)("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),(0,p.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,p.jsx)(ee,{w:"40%",h:3,strong:!0}),(0,p.jsx)(ee,{w:"70%",h:2})]})]})}function Jx({width:e,height:t}){return(0,p.jsxs)("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[(0,p.jsx)(ee,{w:e*.4,h:3,strong:!0}),(0,p.jsx)(ht,{w:60,h:Math.min(24,t*.6),radius:4})]})}function ew({width:e,height:t}){return(0,p.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:t*.06},children:[(0,p.jsx)(ee,{w:e*.5,h:2}),(0,p.jsx)(ee,{w:e*.4,h:Math.max(8,t*.18),strong:!0}),(0,p.jsx)(ee,{w:e*.3,h:2})]})}function tw({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(e/100))),o=Math.min(12,t*.35);return(0,p.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:n},(r,i)=>(0,p.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[(0,p.jsx)("div",{style:{width:o,height:o,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:i===0?"var(--agd-bar)":"transparent",flexShrink:0}}),i<n-1&&(0,p.jsx)("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},i))})}function nw({width:e,height:t}){return(0,p.jsxs)("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[(0,p.jsx)(ee,{w:Math.max(16,e*.5),h:2,strong:!0}),(0,p.jsx)("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function ow({width:e,height:t}){let o=Math.min(t*.7,e/7.5);return(0,p.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:o*.2},children:Array.from({length:5},(r,i)=>(0,p.jsx)("svg",{width:o,height:o,viewBox:"0 0 16 16",fill:"none",children:(0,p.jsx)("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:i<3?"var(--agd-bar)":"none"})},i))})}function rw({width:e,height:t}){return(0,p.jsxs)("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[(0,p.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",style:{position:"absolute",inset:0},children:[(0,p.jsx)("line",{x1:0,y1:t*.3,x2:e,y2:t*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),(0,p.jsx)("line",{x1:0,y1:t*.6,x2:e,y2:t*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),(0,p.jsx)("line",{x1:e*.4,y1:0,x2:e*.6,y2:t,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),(0,p.jsx)("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:(0,p.jsxs)("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[(0,p.jsx)("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),(0,p.jsx)("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function iw({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(t/60)));return(0,p.jsxs)("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[(0,p.jsx)("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:n},(o,r)=>(0,p.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[(0,p.jsx)($n,{size:8}),r<n-1&&(0,p.jsx)("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},r))}),(0,p.jsx)("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:n},(o,r)=>(0,p.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,p.jsx)(ee,{w:`${35+r*13%25}%`,h:3,strong:!0}),(0,p.jsx)(ee,{w:`${50+r*17%30}%`,h:2})]},r))})]})}function sw({width:e,height:t}){return(0,p.jsxs)("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:t*.06},children:[(0,p.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,p.jsx)("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),(0,p.jsx)("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),(0,p.jsx)(ee,{w:e*.4,h:2}),(0,p.jsx)(ee,{w:e*.25,h:2})]})}function aw({width:e,height:t}){let n=Math.max(3,Math.min(8,Math.floor(t/20)));return(0,p.jsxs)("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[(0,p.jsxs)("div",{style:{display:"flex",gap:3,marginBottom:4},children:[(0,p.jsx)($n,{size:6}),(0,p.jsx)($n,{size:6}),(0,p.jsx)($n,{size:6})]}),Array.from({length:n},(o,r)=>(0,p.jsx)("div",{style:{display:"flex",gap:6,paddingLeft:r>0&&r<n-1?12:0},children:(0,p.jsx)(ee,{w:`${25+r*23%50}%`,h:2,strong:r===0})},r))]})}function lw({width:e,height:t}){let r=Math.min((e-16)/7,(t-40)/6);return(0,p.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,p.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[(0,p.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"\u2039"}),(0,p.jsx)(ee,{w:e*.3,h:3,strong:!0}),(0,p.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"\u203A"})]}),(0,p.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(i,s)=>(0,p.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:r*.6},children:(0,p.jsx)(ee,{w:r*.5,h:2})},`h${s}`)),Array.from({length:35},(i,s)=>(0,p.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:r},children:(0,p.jsx)("div",{style:{width:r*.6,height:r*.6,borderRadius:"50%",background:s===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,p.jsx)("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:s===12?1:.3}})})},s))]})]})}function cw({width:e,height:t}){return(0,p.jsxs)("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[(0,p.jsx)($n,{size:Math.min(32,t*.55)}),(0,p.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,p.jsx)(ee,{w:"50%",h:3,strong:!0}),(0,p.jsx)(ee,{w:"75%",h:2})]}),(0,p.jsx)(ee,{w:30,h:2})]})}function dw({width:e,height:t}){return(0,p.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,p.jsx)("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),(0,p.jsxs)("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[(0,p.jsx)(ee,{w:"65%",h:4,strong:!0}),(0,p.jsx)(ee,{w:"40%",h:3}),(0,p.jsx)("div",{style:{flex:1}}),(0,p.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,p.jsx)(ee,{w:"30%",h:5,strong:!0}),(0,p.jsx)(ht,{w:Math.min(70,e*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function uw({width:e,height:t}){let n=Math.min(48,t*.3);return(0,p.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:t*.06},children:[(0,p.jsx)($n,{size:n}),(0,p.jsx)(ee,{w:e*.45,h:4,strong:!0}),(0,p.jsx)(ee,{w:e*.3,h:2}),(0,p.jsxs)("div",{style:{display:"flex",gap:e*.08,marginTop:t*.04},children:[(0,p.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[(0,p.jsx)(ee,{w:20,h:3,strong:!0}),(0,p.jsx)(ee,{w:28,h:2})]}),(0,p.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[(0,p.jsx)(ee,{w:20,h:3,strong:!0}),(0,p.jsx)(ee,{w:28,h:2})]}),(0,p.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[(0,p.jsx)(ee,{w:20,h:3,strong:!0}),(0,p.jsx)(ee,{w:28,h:2})]})]})]})}function pw({width:e,height:t}){let n=Math.max(e*.6,80),o=Math.max(3,Math.floor(t/40));return(0,p.jsxs)("div",{style:{height:"100%",display:"flex"},children:[(0,p.jsx)("div",{style:{width:e-n,background:"var(--agd-fill)",opacity:.3}}),(0,p.jsxs)("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:e*.04},children:[(0,p.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:t*.06},children:[(0,p.jsx)(ee,{w:n*.4,h:4,strong:!0}),(0,p.jsx)("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:o},(r,i)=>(0,p.jsx)("div",{style:{padding:"6px 0"},children:(0,p.jsx)(ee,{w:`${50+i*17%35}%`,h:2,strong:i===0})},i))]})]})}function fw({width:e,height:t}){return(0,p.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,p.jsxs)("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[(0,p.jsx)(ee,{w:"70%",h:3,strong:!0}),(0,p.jsx)(ee,{w:"90%",h:2}),(0,p.jsx)(ee,{w:"60%",h:2})]}),(0,p.jsx)("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function hw({width:e,height:t}){let n=Math.min(t*.7,e*.3);return(0,p.jsxs)("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:e*.08},children:[(0,p.jsx)(ht,{w:n,h:n,radius:n*.25}),(0,p.jsx)(ee,{w:e*.45,h:Math.max(4,t*.2),strong:!0})]})}function mw({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(t/56)));return(0,p.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:n},(o,r)=>(0,p.jsxs)("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:r===0?2:1},children:[(0,p.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,p.jsx)("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),(0,p.jsx)(ee,{w:e*(.3+r*13%25/100),h:3,strong:!0})]}),(0,p.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:r===0?"\u25BC":"\u25B6"})]},r))})}function gw({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120))),o=Math.max(1,Math.min(3,Math.floor(t/120)));return(0,p.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${o}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:n*o},(r,i)=>(0,p.jsx)("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:(0,p.jsxs)("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[(0,p.jsx)("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),(0,p.jsx)("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},i))})}function _w({width:e,height:t}){let n=Math.min(e,t);return(0,p.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,p.jsx)("rect",{x:"1",y:(t-n+2)/2,width:n-2,height:n-2,rx:n*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),(0,p.jsx)("path",{d:`M${n*.25} ${t/2}l${n*.2} ${n*.2} ${n*.3}-${n*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function yw({width:e,height:t}){let n=Math.min(e,t)/2-1;return(0,p.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,p.jsx)("circle",{cx:e/2,cy:t/2,r:n,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),(0,p.jsx)("circle",{cx:e/2,cy:t/2,r:n*.45,fill:"var(--agd-bar)"})]})}function xw({width:e,height:t}){let n=Math.max(2,t*.12),o=Math.min(t*.35,10),r=e*.55;return(0,p.jsxs)("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[(0,p.jsx)("div",{style:{width:"100%",height:n,borderRadius:n/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:(0,p.jsx)("div",{style:{width:r,height:"100%",borderRadius:n/2,background:"var(--agd-bar)"}})}),(0,p.jsx)("div",{style:{position:"absolute",left:r-o,width:o*2,height:o*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function ww({width:e,height:t}){let n=Math.min(36,t*.15),o=7,r=4,i=Math.min((e-16)/o,(t-n-40)/(r+1));return(0,p.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[(0,p.jsxs)("div",{style:{height:n,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[(0,p.jsx)(ee,{w:"40%",h:2}),(0,p.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[(0,p.jsx)("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,p.jsx)("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),(0,p.jsxs)("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[(0,p.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[(0,p.jsx)("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"\u2039"}),(0,p.jsx)(ee,{w:e*.25,h:2,strong:!0}),(0,p.jsx)("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"\u203A"})]}),(0,p.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${o}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:o*r},(s,a)=>(0,p.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:i},children:(0,p.jsx)("div",{style:{width:i*.5,height:i*.5,borderRadius:"50%",background:a===10?"var(--agd-bar)":"transparent"},children:(0,p.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,p.jsx)("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:a===10?1:.25}})})})},a))})]})]})}function vw({width:e,height:t}){return(0,p.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:t*.08,padding:4},children:[(0,p.jsx)("div",{style:{width:"100%",height:t*.2,borderRadius:4,background:"var(--agd-fill)"}}),(0,p.jsx)("div",{style:{width:"70%",height:Math.max(6,t*.1),borderRadius:3,background:"var(--agd-fill)"}}),(0,p.jsx)("div",{style:{width:"90%",height:Math.max(4,t*.06),borderRadius:3,background:"var(--agd-fill)"}}),(0,p.jsx)("div",{style:{width:"50%",height:Math.max(4,t*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function bw({width:e,height:t}){return(0,p.jsx)("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:(0,p.jsxs)("div",{style:{height:"100%",flex:1,borderRadius:t/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${t*.3}px`,gap:4},children:[(0,p.jsx)(ee,{w:"60%",h:2,strong:!0}),(0,p.jsx)("div",{style:{width:Math.max(6,t*.3),height:Math.max(6,t*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function kw({width:e,height:t}){let n=Math.min(e,t);return(0,p.jsx)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:(0,p.jsx)("path",{d:`M${e/2} ${(t-n)/2+n*.1}l${n*.12} ${n*.25} ${n*.28} ${n*.04}-${n*.2} ${n*.2} ${n*.05} ${n*.28}-${n*.25}-${n*.12}-${n*.25} ${n*.12} ${n*.05}-${n*.28}-${n*.2}-${n*.2} ${n*.28}-${n*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function Cw({width:e,height:t}){let n=Math.min(e,t)/2-2;return(0,p.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,p.jsx)("circle",{cx:e/2,cy:t/2,r:n,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),(0,p.jsx)("path",{d:`M${e/2} ${t/2-n}a${n} ${n} 0 0 1 ${n} ${n}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function Sw({width:e,height:t}){let n=Math.min(36,t*.25,e*.12),o=Math.max(1,Math.min(3,Math.floor(t/80)));return(0,p.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:o},(r,i)=>(0,p.jsxs)("div",{style:{display:"flex",gap:e*.04,alignItems:"flex-start"},children:[(0,p.jsx)(ht,{w:n,h:n,radius:n*.25}),(0,p.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[(0,p.jsx)(ee,{w:`${40+i*13%20}%`,h:3,strong:!0}),(0,p.jsx)(ee,{w:`${60+i*17%25}%`,h:2})]})]},i))})}function Ew({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120))),o=Math.min(36,t*.25);return(0,p.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:t*.06,padding:t*.06},children:[(0,p.jsx)(ee,{w:e*.3,h:4,strong:!0}),(0,p.jsx)("div",{style:{display:"flex",gap:e*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:n},(r,i)=>(0,p.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[(0,p.jsx)($n,{size:o}),(0,p.jsx)(ee,{w:e*.12,h:3,strong:!0}),(0,p.jsx)(ee,{w:e*.08,h:2})]},i))})]})}function Mw({width:e,height:t}){let n=Math.max(2,Math.min(3,Math.floor(t/80)));return(0,p.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:e*.06,gap:t*.04},children:[(0,p.jsx)(ee,{w:e*.5,h:Math.max(5,t*.04),strong:!0}),(0,p.jsx)(ee,{w:e*.35,h:2}),(0,p.jsx)("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:t*.03,marginTop:t*.04},children:Array.from({length:n},(o,r)=>(0,p.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,p.jsx)(ee,{w:Math.min(60,e*.2),h:2}),(0,p.jsx)(ht,{w:"100%",h:Math.min(32,t*.1),radius:4})]},r))}),(0,p.jsx)(ht,{w:"100%",h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.03,background:"var(--agd-bar)"}}),(0,p.jsx)(ee,{w:e*.4,h:2})]})}function Lw({width:e,height:t}){return(0,p.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:e*.04,gap:t*.03},children:[(0,p.jsx)(ee,{w:e*.4,h:4,strong:!0}),(0,p.jsx)(ee,{w:e*.6,h:2}),(0,p.jsxs)("div",{style:{display:"flex",gap:6,marginTop:t*.03},children:[(0,p.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,p.jsx)(ee,{w:50,h:2}),(0,p.jsx)(ht,{w:"100%",h:Math.min(28,t*.1),radius:4})]}),(0,p.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,p.jsx)(ee,{w:40,h:2}),(0,p.jsx)(ht,{w:"100%",h:Math.min(28,t*.1),radius:4})]})]}),(0,p.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,p.jsx)(ee,{w:50,h:2}),(0,p.jsx)(ht,{w:"100%",h:Math.min(28,t*.1),radius:4})]}),(0,p.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[(0,p.jsx)(ee,{w:60,h:2}),(0,p.jsx)(ht,{w:"100%",h:"100%",radius:4})]}),(0,p.jsx)(ht,{w:Math.min(120,e*.3),h:Math.min(30,t*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var Tw={navigation:_x,hero:yx,sidebar:xx,footer:wx,modal:vx,card:bx,text:kx,image:Cx,table:Sx,list:Ex,button:Mx,input:Lx,form:Tx,tabs:$x,avatar:Ix,badge:Nx,header:Px,section:Rx,grid:Dx,dropdown:Ax,toggle:Bx,search:Ox,toast:zx,progress:Fx,chart:Wx,video:Hx,tooltip:jx,breadcrumb:Ux,pagination:Yx,divider:Vx,accordion:Xx,carousel:Qx,pricing:Kx,testimonial:qx,cta:Gx,alert:Zx,banner:Jx,stat:ew,stepper:tw,tag:nw,rating:ow,map:rw,timeline:iw,fileUpload:sw,codeBlock:aw,calendar:lw,notification:cw,productCard:dw,profile:uw,drawer:pw,popover:fw,logo:hw,faq:mw,gallery:gw,checkbox:_w,radio:yw,slider:xw,datePicker:ww,skeleton:vw,chip:bw,icon:kw,spinner:Cw,feature:Sw,team:Ew,login:Mw,contact:Lw};function $w({type:e,width:t,height:n,text:o}){let r=Tw[e];return r?(0,p.jsx)("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:(0,p.jsx)(r,{width:t,height:n,text:o})}):(0,p.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,p.jsx)("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:e})})}var Iw=`svg[fill=none] {
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
}`,Nw={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-design-mode-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(e)),e.textContent=Iw}var X=Nw,ji=24,rc=5;function C_(e,t,n,o,r){let i=1/0,s=1/0,a=e.x,l=e.x+e.width,c=e.x+e.width/2,d=e.y,m=e.y+e.height,f=e.y+e.height/2,b=!o,v=b?[a,l,c]:[...o.left?[a]:[],...o.right?[l]:[]],P=b?[d,m,f]:[...o.top?[d]:[],...o.bottom?[m]:[]],k=[];for(let j of t)n.has(j.id)||k.push(j);r&&k.push(...r);for(let j of k){let M=j.x,J=j.x+j.width,ue=j.x+j.width/2,ke=j.y,ge=j.y+j.height,oe=j.y+j.height/2;for(let z of v)for(let me of[M,J,ue]){let Ee=me-z;Math.abs(Ee)<rc&&Math.abs(Ee)<Math.abs(i)&&(i=Ee)}for(let z of P)for(let me of[ke,ge,oe]){let Ee=me-z;Math.abs(Ee)<rc&&Math.abs(Ee)<Math.abs(s)&&(s=Ee)}}let h=Math.abs(i)<rc?i:0,_=Math.abs(s)<rc?s:0,S=[],D=new Set,Z=a+h,q=l+h,O=c+h,ie=d+_,xe=m+_,he=f+_;for(let j of k){let M=j.x,J=j.x+j.width,ue=j.x+j.width/2,ke=j.y,ge=j.y+j.height,oe=j.y+j.height/2;for(let z of[M,ue,J])for(let me of[Z,O,q])if(Math.abs(me-z)<.5){let Ee=`x:${Math.round(z)}`;D.has(Ee)||(D.add(Ee),S.push({axis:"x",pos:z}))}for(let z of[ke,oe,ge])for(let me of[ie,he,xe])if(Math.abs(me-z)<.5){let Ee=`y:${Math.round(z)}`;D.has(Ee)||(D.add(Ee),S.push({axis:"y",pos:z}))}}return{dx:h,dy:_,guides:S}}function S_(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function Pw({placements:e,onChange:t,activeComponent:n,onActiveComponentChange:o,isDarkMode:r,exiting:i,onInteractionChange:s,className:a,passthrough:l,extraSnapRects:c,onSelectionChange:d,deselectSignal:m,onDragMove:f,onDragEnd:b,clearSignal:v,wireframe:P}){let[k,h]=(0,ct.useState)(new Set),[_,S]=(0,ct.useState)(null),[D,Z]=(0,ct.useState)(null),[q,O]=(0,ct.useState)(null),[ie,xe]=(0,ct.useState)([]),[he,j]=(0,ct.useState)(null),[M,J]=(0,ct.useState)(!1),ue=(0,ct.useRef)(!1),[ke,ge]=(0,ct.useState)(new Set),oe=(0,ct.useRef)(new Map),z=(0,ct.useRef)(null),me=(0,ct.useRef)(null),Ee=(0,ct.useRef)(e);Ee.current=e;let Fe=(0,ct.useRef)(d);Fe.current=d;let Pe=(0,ct.useRef)(f);Pe.current=f;let ut=(0,ct.useRef)(b);ut.current=b;let St=(0,ct.useRef)(m);(0,ct.useEffect)(()=>{m!==St.current&&(St.current=m,h(new Set))},[m]);let Oe=(0,ct.useRef)(v);(0,ct.useEffect)(()=>{if(v!==void 0&&v!==Oe.current){Oe.current=v;let w=new Set(Ee.current.map(R=>R.id));w.size>0&&(ge(w),h(new Set),me.current=null,Ye(()=>{t([]),ge(new Set)},180))}},[v,t]),(0,ct.useEffect)(()=>{let w=R=>{let Y=R.target;if(!(Y.tagName==="INPUT"||Y.tagName==="TEXTAREA"||Y.isContentEditable)){if((R.key==="Backspace"||R.key==="Delete")&&k.size>0){R.preventDefault();let Q=new Set(k);ge(Q),h(new Set),Ye(()=>{t(Ee.current.filter(le=>!Q.has(le.id))),ge(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(R.key)&&k.size>0){R.preventDefault();let Q=R.shiftKey?20:1,le=R.key==="ArrowLeft"?-Q:R.key==="ArrowRight"?Q:0,be=R.key==="ArrowUp"?-Q:R.key==="ArrowDown"?Q:0;t(e.map(ce=>k.has(ce.id)?{...ce,x:Math.max(0,ce.x+le),y:Math.max(0,ce.y+be)}:ce));return}if(R.key==="Escape"){n?o(null):k.size>0&&h(new Set);return}}};return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)},[k,n,e,t,o]);let Ve=(0,ct.useCallback)(w=>{if(w.button!==0||l||w.target.closest(`.${X.placement}`))return;w.preventDefault(),w.stopPropagation();let Y=window.scrollY,W=w.clientX,Q=w.clientY;if(n){me.current="place",s?.(!0);let le=!1,be=W,ce=Q,Me=I=>{be=I.clientX,ce=I.clientY;let N=Math.abs(be-W),H=Math.abs(ce-Q);if((N>5||H>5)&&(le=!0),le){let V=Math.min(W,be),G=Math.min(Q,ce),ve=Math.abs(be-W),te=Math.abs(ce-Q);S({x:V,y:G,w:ve,h:te}),O({x:I.clientX+12,y:I.clientY+12,text:`${Math.round(ve)} \xD7 ${Math.round(te)}`})}},de=I=>{window.removeEventListener("mousemove",Me),window.removeEventListener("mouseup",de),S(null),O(null),me.current=null,s?.(!1);let N=Le[n],H,V,G,ve;le?(H=Math.min(W,be),V=Math.min(Q,ce)+Y,G=Math.max(ji,Math.abs(be-W)),ve=Math.max(ji,Math.abs(ce-Q))):(G=N.width,ve=N.height,H=W-G/2,V=Q+Y-ve/2),H=Math.max(0,H),V=Math.max(0,V);let te={id:S_(),type:n,x:H,y:V,width:G,height:ve,scrollY:Y,timestamp:Date.now()},$e=[...e,te];t($e),h(new Set([te.id])),o(null)};window.addEventListener("mousemove",Me),window.addEventListener("mouseup",de)}else{w.shiftKey||h(new Set),me.current="select";let le=!1,be=Me=>{let de=Math.abs(Me.clientX-W),I=Math.abs(Me.clientY-Q);if((de>4||I>4)&&(le=!0),le){let N=Math.min(W,Me.clientX),H=Math.min(Q,Me.clientY);Z({x:N,y:H,w:Math.abs(Me.clientX-W),h:Math.abs(Me.clientY-Q)})}},ce=Me=>{if(window.removeEventListener("mousemove",be),window.removeEventListener("mouseup",ce),me.current=null,le){let de=Math.min(W,Me.clientX),I=Math.min(Q,Me.clientY)+Y,N=Math.abs(Me.clientX-W),H=Math.abs(Me.clientY-Q),V=new Set(w.shiftKey?k:new Set);for(let G of e){let ve=G.y-Y;G.x+G.width>de&&G.x<de+N&&G.y+G.height>I&&G.y<I+H&&V.add(G.id)}h(V)}Z(null)};window.addEventListener("mousemove",be),window.addEventListener("mouseup",ce)}},[n,l,e,t,k]),Tt=(0,ct.useCallback)((w,R)=>{if(w.button!==0)return;let Y=w.target;if(Y.closest(`.${X.handle}`)||Y.closest(`.${X.deleteButton}`))return;w.preventDefault(),w.stopPropagation();let W;w.shiftKey?(W=new Set(k),W.has(R)?W.delete(R):W.add(R)):k.has(R)?W=new Set(k):W=new Set([R]),h(W),(W.size!==k.size||[...W].some($e=>!k.has($e)))&&Fe.current?.(W,w.shiftKey);let le=window.scrollY,be=w.clientX,ce=w.clientY,Me=new Map;for(let $e of e)W.has($e.id)&&Me.set($e.id,{x:$e.x,y:$e.y});me.current="move",s?.(!0);let de=!1,I=!1,N=e,H=0,V=0,G=new Map;for(let $e of e)Me.has($e.id)&&G.set($e.id,{w:$e.width,h:$e.height});let ve=$e=>{let He=$e.clientX-be,je=$e.clientY-ce;if((Math.abs(He)>2||Math.abs(je)>2)&&(de=!0),!de)return;if($e.altKey&&!I){I=!0;let Ce=[];for(let tt of e)Me.has(tt.id)&&Ce.push({...tt,id:S_(),timestamp:Date.now()});N=[...e,...Ce]}let at=1/0,Ae=1/0,Ze=-1/0,We=-1/0;for(let[Ce,tt]of Me){let jt=G.get(Ce);jt&&(at=Math.min(at,tt.x+He),Ae=Math.min(Ae,tt.y+je),Ze=Math.max(Ze,tt.x+He+jt.w),We=Math.max(We,tt.y+je+jt.h))}let E={x:at,y:Ae,width:Ze-at,height:We-Ae},{dx:A,dy:F,guides:ne}=C_(E,N,new Set(Me.keys()),void 0,c);xe(ne);let fe=He+A,De=je+F;H=fe,V=De,t(N.map(Ce=>{let tt=Me.get(Ce.id);return tt?{...Ce,x:Math.max(0,tt.x+fe),y:Math.max(0,tt.y+De)}:Ce})),Pe.current?.(fe,De)},te=()=>{window.removeEventListener("mousemove",ve),window.removeEventListener("mouseup",te),me.current=null,s?.(!1),xe([]),ut.current?.(H,V,de)};window.addEventListener("mousemove",ve),window.addEventListener("mouseup",te)},[k,e,t,s]),Qe=(0,ct.useCallback)((w,R,Y)=>{w.preventDefault(),w.stopPropagation();let W=e.find(V=>V.id===R);if(!W)return;h(new Set([R])),me.current="resize",s?.(!0);let Q=w.clientX,le=w.clientY,be=W.width,ce=W.height,Me=W.x,de=W.y,I={left:Y.includes("w"),right:Y.includes("e"),top:Y.includes("n"),bottom:Y.includes("s")},N=V=>{let G=V.clientX-Q,ve=V.clientY-le,te=be,$e=ce,He=Me,je=de;Y.includes("e")&&(te=Math.max(ji,be+G)),Y.includes("w")&&(te=Math.max(ji,be-G),He=Me+be-te),Y.includes("s")&&($e=Math.max(ji,ce+ve)),Y.includes("n")&&($e=Math.max(ji,ce-ve),je=de+ce-$e);let at={x:He,y:je,width:te,height:$e},{dx:Ae,dy:Ze,guides:We}=C_(at,Ee.current,new Set([R]),I,c);xe(We),Ae!==0&&(I.right?te+=Ae:I.left&&(He+=Ae,te-=Ae)),Ze!==0&&(I.bottom?$e+=Ze:I.top&&(je+=Ze,$e-=Ze)),t(Ee.current.map(E=>E.id===R?{...E,x:He,y:je,width:te,height:$e}:E)),O({x:V.clientX+12,y:V.clientY+12,text:`${Math.round(te)} \xD7 ${Math.round($e)}`})},H=()=>{window.removeEventListener("mousemove",N),window.removeEventListener("mouseup",H),O(null),me.current=null,s?.(!1),xe([])};window.addEventListener("mousemove",N),window.addEventListener("mouseup",H)},[e,t,s]),en=(0,ct.useCallback)(w=>{me.current=null,ge(R=>{let Y=new Set(R);return Y.add(w),Y}),h(R=>{let Y=new Set(R);return Y.delete(w),Y}),Ye(()=>{t(Ee.current.filter(R=>R.id!==w)),ge(R=>{let Y=new Set(R);return Y.delete(w),Y})},180)},[t]),$t=new Set(["text","hero","button","badge","cta","toast","modal","card","navigation","tabs","input","search","breadcrumb","pricing","testimonial","alert","banner","tag","notification","stat","productCard"]),_t={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},Kt=(0,ct.useCallback)(w=>{let R=e.find(Y=>Y.id===w);R&&(ue.current=!!R.text,j(w),J(!1))},[e]),vt=(0,ct.useCallback)(()=>{he&&(J(!0),Ye(()=>{j(null),J(!1)},150))},[he]);(0,ct.useEffect)(()=>{i&&he&&vt()},[i]);let bt=(0,ct.useCallback)(w=>{he&&(t(e.map(R=>R.id===he?{...R,text:w.trim()||void 0}:R)),vt())},[he,e,t,vt]),tn=typeof window<"u"?window.scrollY:0,qt=["nw","ne","se","sw"],Ht=P?"#f97316":"#3c82f7",C=[{dir:"n",cls:X.edgeN,arrow:(0,wt.jsx)("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:(0,wt.jsx)("path",{d:"M4 0.5L1 4.5h6z",fill:Ht})})},{dir:"e",cls:X.edgeE,arrow:(0,wt.jsx)("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:(0,wt.jsx)("path",{d:"M5.5 4L1.5 1v6z",fill:Ht})})},{dir:"s",cls:X.edgeS,arrow:(0,wt.jsx)("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:(0,wt.jsx)("path",{d:"M4 5.5L1 1.5h6z",fill:Ht})})},{dir:"w",cls:X.edgeW,arrow:(0,wt.jsx)("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:(0,wt.jsx)("path",{d:"M0.5 4L4.5 1v6z",fill:Ht})})}];return(0,wt.jsxs)(wt.Fragment,{children:[(0,wt.jsx)("div",{ref:z,className:`${X.overlay} ${r?"":X.light} ${n?X.placing:""} ${l?X.passthrough:""} ${i?X.overlayExiting:""} ${P?X.wireframe:""}${a?` ${a}`:""}`,"data-feedback-toolbar":!0,onMouseDown:Ve,children:e.map(w=>{let R=k.has(w.id),Y=yo[w.type]?.label||w.type,W=w.y-tn;return(0,wt.jsxs)("div",{"data-design-placement":w.id,className:`${X.placement} ${R?X.selected:""} ${ke.has(w.id)?X.exiting:""}`,style:{left:w.x,top:W,width:w.width,height:w.height,position:"fixed"},onMouseDown:Q=>Tt(Q,w.id),onDoubleClick:()=>Kt(w.id),children:[(0,wt.jsx)("span",{className:X.placementLabel,children:Y}),(0,wt.jsx)("span",{className:`${X.placementAnnotation} ${w.text?X.annotationVisible:""}`,children:(w.text&&oe.current.set(w.id,w.text),w.text||oe.current.get(w.id)||"")}),(0,wt.jsx)("div",{className:X.placementContent,children:(0,wt.jsx)($w,{type:w.type,width:w.width,height:w.height,text:w.text})}),(0,wt.jsx)("div",{className:X.deleteButton,onMouseDown:Q=>Q.stopPropagation(),onClick:()=>en(w.id),children:"\u2715"}),qt.map(Q=>(0,wt.jsx)("div",{className:`${X.handle} ${X[`handle${Q.charAt(0).toUpperCase()}${Q.slice(1)}`]}`,onMouseDown:le=>Qe(le,w.id,Q)},Q)),C.map(({dir:Q,cls:le,arrow:be})=>(0,wt.jsx)("div",{className:`${X.edgeHandle} ${le}`,onMouseDown:ce=>Qe(ce,w.id,Q),children:be},Q))]},w.id)})}),he&&(()=>{let w=e.find(de=>de.id===he);if(!w)return null;let R=w.y-tn,Y=w.x+w.width/2,W=R-8,Q=R+w.height+8,le=W>200,be=Q<window.innerHeight-100,ce=Math.max(160,Math.min(window.innerWidth-160,Y)),Me;return le?Me={left:ce,bottom:window.innerHeight-W}:be?Me={left:ce,top:Q}:Me={left:ce,top:Math.max(80,window.innerHeight/2-80)},(0,wt.jsx)(gc,{element:yo[w.type]?.label||w.type,placeholder:_t[w.type]||"Label or content text",initialValue:w.text??"",submitLabel:ue.current?"Save":"Set",onSubmit:bt,onCancel:vt,onDelete:ue.current?()=>{bt("")}:void 0,isExiting:M,lightMode:!r,style:Me})})(),_&&(0,wt.jsx)("div",{className:X.drawBox,style:{left:_.x,top:_.y,width:_.w,height:_.h},"data-feedback-toolbar":!0}),D&&(0,wt.jsx)("div",{className:X.selectBox,style:{left:D.x,top:D.y,width:D.w,height:D.h},"data-feedback-toolbar":!0}),q&&(0,wt.jsx)("div",{className:X.sizeIndicator,style:{left:q.x,top:q.y},"data-feedback-toolbar":!0,children:q.text}),ie.map((w,R)=>(0,wt.jsx)("div",{className:X.guideLine,style:w.axis==="x"?{position:"fixed",left:w.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:w.pos-tn,right:0,height:1},"data-feedback-toolbar":!0},`${w.axis}-${w.pos}-${R}`))]})}function Rw(e){if(!e)return"";let t=e.scrollTop>2,n=e.scrollTop+e.clientHeight<e.scrollHeight-2;return`${t?X.fadeTop:""} ${n?X.fadeBottom:""}`}var y="currentColor",U="0.5";function Dw({type:e}){switch(e){case"navigation":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:y,opacity:".4"}),(0,u.jsx)("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:y,opacity:".25"}),(0,u.jsx)("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:y,opacity:".25"})]});case"header":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:y,opacity:".35"}),(0,u.jsx)("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:y,opacity:".15"})]});case"hero":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:y,opacity:".35"}),(0,u.jsx)("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:y,opacity:".15"}),(0,u.jsx)("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:y,strokeWidth:U})]});case"section":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:y,opacity:".3"}),(0,u.jsx)("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:y,opacity:".15"}),(0,u.jsx)("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:y,opacity:".15"})]});case"sidebar":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:y,opacity:".3"}),(0,u.jsx)("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:y,opacity:".15"}),(0,u.jsx)("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:y,opacity:".15"})]});case"footer":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:y,opacity:".25"}),(0,u.jsx)("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:y,opacity:".25"}),(0,u.jsx)("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:y,opacity:".2"})]});case"modal":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:y,opacity:".3"}),(0,u.jsx)("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:y,opacity:".15"}),(0,u.jsx)("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:y,strokeWidth:U})]});case"divider":return(0,u.jsx)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:(0,u.jsx)("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:y,strokeWidth:"0.5",opacity:".3"})});case"card":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:y,opacity:".04"}),(0,u.jsx)("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:y,opacity:".25"}),(0,u.jsx)("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:y,opacity:".12"})]});case"text":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:y,opacity:".3"}),(0,u.jsx)("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:y,opacity:".15"}),(0,u.jsx)("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:y,opacity:".15"}),(0,u.jsx)("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:y,opacity:".12"})]});case"image":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:y,strokeWidth:".3",opacity:".25"}),(0,u.jsx)("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:y,strokeWidth:".3",opacity:".25"})]});case"video":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:y,strokeWidth:U,fill:y,opacity:".15"})]});case"table":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:y,strokeWidth:".3",opacity:".25"}),(0,u.jsx)("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:y,strokeWidth:".3",opacity:".25"}),(0,u.jsx)("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:y,strokeWidth:".3",opacity:".25"}),(0,u.jsx)("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:y,strokeWidth:".3",opacity:".25"})]});case"grid":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:y,strokeWidth:U})]});case"list":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:y,opacity:".2"}),(0,u.jsx)("circle",{cx:"3.5",cy:"8",r:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:y,opacity:".2"}),(0,u.jsx)("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:y,opacity:".2"})]});case"chart":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:y,opacity:".2"}),(0,u.jsx)("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:y,opacity:".25"}),(0,u.jsx)("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:y,opacity:".3"}),(0,u.jsx)("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:y,opacity:".2"})]});case"accordion":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:y,opacity:".25"}),(0,u.jsx)("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:y,strokeWidth:U})]});case"carousel":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:y,strokeWidth:U,opacity:".35"}),(0,u.jsx)("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:y,strokeWidth:U,opacity:".35"}),(0,u.jsx)("circle",{cx:"8.5",cy:"14",r:".6",fill:y,opacity:".35"}),(0,u.jsx)("circle",{cx:"10",cy:"14",r:".6",fill:y,opacity:".15"}),(0,u.jsx)("circle",{cx:"11.5",cy:"14",r:".6",fill:y,opacity:".15"})]});case"button":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:y,opacity:".25"})]});case"input":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:y,opacity:".25"}),(0,u.jsx)("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:y,opacity:".12"})]});case"search":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:y,strokeWidth:U}),(0,u.jsx)("circle",{cx:"6",cy:"8",r:"2",stroke:y,strokeWidth:U,opacity:".3"}),(0,u.jsx)("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:y,strokeWidth:U,opacity:".3"}),(0,u.jsx)("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:y,opacity:".12"})]});case"form":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:y,opacity:".25"}),(0,u.jsx)("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:y,opacity:".25"}),(0,u.jsx)("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:y,strokeWidth:U})]});case"tabs":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:y,opacity:".25"}),(0,u.jsx)("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:y,strokeWidth:U})]});case"dropdown":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:y,opacity:".2"}),(0,u.jsx)("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:y,strokeWidth:U,opacity:".3"}),(0,u.jsx)("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:y,strokeWidth:U,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:y,strokeWidth:U}),(0,u.jsx)("circle",{cx:"13",cy:"8",r:"2",fill:y,opacity:".3"})]});case"avatar":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("circle",{cx:"10",cy:"8",r:"6",stroke:y,strokeWidth:U}),(0,u.jsx)("circle",{cx:"10",cy:"6.5",r:"2",stroke:y,strokeWidth:U}),(0,u.jsx)("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:y,strokeWidth:U})]});case"badge":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:y,opacity:".25"})]});case"breadcrumb":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:y,opacity:".3"}),(0,u.jsx)("path",{d:"M6.5 7l1 1-1 1",stroke:y,strokeWidth:U,opacity:".2"}),(0,u.jsx)("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:y,opacity:".2"}),(0,u.jsx)("path",{d:"M14 7l1 1-1 1",stroke:y,strokeWidth:U,opacity:".2"}),(0,u.jsx)("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:y,opacity:".15"})]});case"pagination":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:y,opacity:".15",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:y,strokeWidth:U})]});case"progress":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:y,opacity:".2"})]});case"toast":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:y,strokeWidth:U}),(0,u.jsx)("circle",{cx:"5",cy:"8",r:"1.5",stroke:y,strokeWidth:U,opacity:".3"}),(0,u.jsx)("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:y,opacity:".25"}),(0,u.jsx)("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:y,opacity:".12"})]});case"tooltip":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:y,opacity:".25"}),(0,u.jsx)("path",{d:"M9 10l1 2.5 1-2.5",stroke:y,strokeWidth:U})]});case"pricing":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:y,opacity:".25"}),(0,u.jsx)("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:y,opacity:".15"}),(0,u.jsx)("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:y,opacity:".1"}),(0,u.jsx)("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:y,opacity:".1"}),(0,u.jsx)("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:y,opacity:".2"})]});case"testimonial":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:y,strokeWidth:U}),(0,u.jsx)("text",{x:"4",y:"5.5",fontSize:"4",fill:y,opacity:".2",fontFamily:"serif",children:"\u201C"}),(0,u.jsx)("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:y,opacity:".15"}),(0,u.jsx)("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:y,opacity:".12"}),(0,u.jsx)("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:y,strokeWidth:U,opacity:".25"}),(0,u.jsx)("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:y,opacity:".15"})]});case"cta":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:y,opacity:".3"}),(0,u.jsx)("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:y,opacity:".15"}),(0,u.jsx)("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:y,strokeWidth:U})]});case"alert":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:y,strokeWidth:U}),(0,u.jsx)("circle",{cx:"6",cy:"8",r:"2",stroke:y,strokeWidth:U,opacity:".3"}),(0,u.jsx)("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:y,strokeWidth:"0.6",opacity:".5"}),(0,u.jsx)("circle",{cx:"6",cy:"9.3",r:".3",fill:y,opacity:".5"}),(0,u.jsx)("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:y,opacity:".2"})]});case"banner":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:y,opacity:".25"}),(0,u.jsx)("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:y,strokeWidth:U})]});case"stat":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:y,opacity:".15"}),(0,u.jsx)("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:y,opacity:".3"}),(0,u.jsx)("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:y,opacity:".12"})]});case"stepper":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("circle",{cx:"4",cy:"8",r:"2",fill:y,opacity:".2",stroke:y,strokeWidth:U}),(0,u.jsx)("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:y,strokeWidth:".4",opacity:".3"}),(0,u.jsx)("circle",{cx:"10",cy:"8",r:"2",stroke:y,strokeWidth:U}),(0,u.jsx)("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:y,strokeWidth:".4",opacity:".3"}),(0,u.jsx)("circle",{cx:"16",cy:"8",r:"2",stroke:y,strokeWidth:U})]});case"tag":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:y,opacity:".25"}),(0,u.jsx)("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:y,strokeWidth:U,opacity:".2"}),(0,u.jsx)("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:y,strokeWidth:U,opacity:".2"})]});case"rating":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:y,opacity:".25"}),(0,u.jsx)("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:y,opacity:".25"}),(0,u.jsx)("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:y,strokeWidth:U,opacity:".25"})]});case"map":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:y,strokeWidth:".3",opacity:".15"}),(0,u.jsx)("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:y,strokeWidth:".3",opacity:".15"}),(0,u.jsx)("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:y,opacity:".15",stroke:y,strokeWidth:U})]});case"timeline":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:y,strokeWidth:".4",opacity:".25"}),(0,u.jsx)("circle",{cx:"5",cy:"4",r:"1.5",fill:y,opacity:".2",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:y,opacity:".25"}),(0,u.jsx)("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:y,opacity:".15"}),(0,u.jsx)("circle",{cx:"5",cy:"13",r:"1.5",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:y,opacity:".15"})]});case"fileUpload":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:y,strokeWidth:U,strokeDasharray:"2 1"}),(0,u.jsx)("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:y,strokeWidth:U,opacity:".3"}),(0,u.jsx)("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:y,opacity:".15"})]});case"codeBlock":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("circle",{cx:"4",cy:"4",r:".6",fill:y,opacity:".3"}),(0,u.jsx)("circle",{cx:"5.5",cy:"4",r:".6",fill:y,opacity:".3"}),(0,u.jsx)("circle",{cx:"7",cy:"4",r:".6",fill:y,opacity:".3"}),(0,u.jsx)("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:y,opacity:".2"}),(0,u.jsx)("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:y,opacity:".15"}),(0,u.jsx)("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:y,opacity:".12"})]});case"calendar":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:y,strokeWidth:".4",opacity:".25"}),(0,u.jsx)("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:y,opacity:".2"}),(0,u.jsx)("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:y,opacity:".2"}),(0,u.jsx)("circle",{cx:"7",cy:"9",r:".6",fill:y,opacity:".2"}),(0,u.jsx)("circle",{cx:"10",cy:"9",r:".6",fill:y,opacity:".2"}),(0,u.jsx)("circle",{cx:"13",cy:"9",r:".6",fill:y,opacity:".3"}),(0,u.jsx)("circle",{cx:"7",cy:"12",r:".6",fill:y,opacity:".2"}),(0,u.jsx)("circle",{cx:"10",cy:"12",r:".6",fill:y,opacity:".2"})]});case"notification":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:y,strokeWidth:U}),(0,u.jsx)("circle",{cx:"5.5",cy:"8",r:"2",stroke:y,strokeWidth:U,opacity:".25"}),(0,u.jsx)("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:y,opacity:".25"}),(0,u.jsx)("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:y,opacity:".12"}),(0,u.jsx)("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:y,opacity:".25"})]});case"productCard":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:y,opacity:".04"}),(0,u.jsx)("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:y,opacity:".25"}),(0,u.jsx)("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:y,opacity:".15"}),(0,u.jsx)("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:y,strokeWidth:U})]});case"profile":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("circle",{cx:"10",cy:"5",r:"3",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:y,opacity:".25"}),(0,u.jsx)("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:y,opacity:".12"})]});case"drawer":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:y,opacity:".25"}),(0,u.jsx)("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:y,opacity:".15"}),(0,u.jsx)("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:y,opacity:".15"}),(0,u.jsx)("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:y,strokeWidth:U,opacity:".15"})]});case"popover":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:y,opacity:".25"}),(0,u.jsx)("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:y,opacity:".15"}),(0,u.jsx)("path",{d:"M9 11l1 2.5 1-2.5",stroke:y,strokeWidth:U})]});case"logo":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:y,strokeWidth:U}),(0,u.jsx)("path",{d:"M5 9.5l2-4 2 4",stroke:y,strokeWidth:U,opacity:".3"}),(0,u.jsx)("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:y,opacity:".2"}),(0,u.jsx)("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:y,opacity:".12"})]});case"faq":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("text",{x:"2.5",y:"5.5",fontSize:"4",fill:y,opacity:".3",fontWeight:"bold",children:"?"}),(0,u.jsx)("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:y,opacity:".25"}),(0,u.jsx)("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:y,opacity:".12"}),(0,u.jsx)("text",{x:"2.5",y:"11.5",fontSize:"4",fill:y,opacity:".3",fontWeight:"bold",children:"?"}),(0,u.jsx)("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:y,opacity:".25"}),(0,u.jsx)("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:y,opacity:".12"})]});case"gallery":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:y,strokeWidth:U})]});case"checkbox":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:y,strokeWidth:U}),(0,u.jsx)("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:y,strokeWidth:U,opacity:".35"})]});case"radio":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("circle",{cx:"10",cy:"8",r:"4",stroke:y,strokeWidth:U}),(0,u.jsx)("circle",{cx:"10",cy:"8",r:"2",fill:y,opacity:".3"})]});case"slider":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:y,opacity:".15"}),(0,u.jsx)("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:y,opacity:".25"}),(0,u.jsx)("circle",{cx:"12",cy:"8",r:"2.5",stroke:y,strokeWidth:U})]});case"datePicker":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:y,opacity:".2"}),(0,u.jsx)("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:y,opacity:".12"}),(0,u.jsx)("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:y,strokeWidth:U,strokeDasharray:"2 1",opacity:".3"}),(0,u.jsx)("circle",{cx:"6",cy:"10",r:".6",fill:y,opacity:".2"}),(0,u.jsx)("circle",{cx:"10",cy:"10",r:".6",fill:y,opacity:".3"}),(0,u.jsx)("circle",{cx:"14",cy:"10",r:".6",fill:y,opacity:".2"}),(0,u.jsx)("circle",{cx:"6",cy:"13",r:".6",fill:y,opacity:".2"}),(0,u.jsx)("circle",{cx:"10",cy:"13",r:".6",fill:y,opacity:".2"})]});case"skeleton":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:y,opacity:".08"}),(0,u.jsx)("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:y,opacity:".08"}),(0,u.jsx)("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:y,opacity:".08"})]});case"chip":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:y,opacity:".08",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:y,opacity:".25"}),(0,u.jsx)("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:y,strokeWidth:U,opacity:".2"}),(0,u.jsx)("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:y,strokeWidth:U,opacity:".2"}),(0,u.jsx)("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:y,strokeWidth:U,opacity:".25"})]});case"icon":return(0,u.jsx)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:(0,u.jsx)("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:y,strokeWidth:U,opacity:".3"})});case"spinner":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("circle",{cx:"10",cy:"8",r:"5",stroke:y,strokeWidth:U,opacity:".12"}),(0,u.jsx)("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:y,strokeWidth:U,opacity:".35",strokeLinecap:"round"})]});case"feature":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:y,strokeWidth:U}),(0,u.jsx)("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:y,strokeWidth:U,opacity:".25"}),(0,u.jsx)("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:y,opacity:".25"}),(0,u.jsx)("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:y,opacity:".12"}),(0,u.jsx)("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:y,opacity:".25"}),(0,u.jsx)("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:y,opacity:".12"})]});case"team":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("circle",{cx:"5",cy:"5",r:"2.5",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:y,opacity:".2"}),(0,u.jsx)("circle",{cx:"15",cy:"5",r:"2.5",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:y,opacity:".2"}),(0,u.jsx)("circle",{cx:"10",cy:"5",r:"2.5",stroke:y,strokeWidth:U,opacity:".5"}),(0,u.jsx)("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:y,opacity:".15"}),(0,u.jsx)("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:y,opacity:".1"})]});case"login":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:y,opacity:".25"}),(0,u.jsx)("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:y,opacity:".2"})]});case"contact":return(0,u.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,u.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:y,opacity:".2"}),(0,u.jsx)("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:y,strokeWidth:U}),(0,u.jsx)("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:y,opacity:".2"})]});default:return null}}function Aw({activeType:e,onSelect:t,onDragStart:n,scrollRef:o,fadeClass:r,blankCanvas:i}){return(0,u.jsx)("div",{ref:o,className:`${X.placeScroll} ${r||""}`,children:G_.map(s=>(0,u.jsxs)("div",{className:X.paletteSection,children:[(0,u.jsx)("div",{className:X.paletteSectionTitle,children:s.section}),s.items.map(a=>(0,u.jsxs)("div",{className:`${X.paletteItem} ${e===a.type?X.active:""} ${i?X.wireframe:""}`,onClick:()=>t(a.type),onMouseDown:l=>{l.button===0&&n(a.type,l)},children:[(0,u.jsx)("div",{className:X.paletteItemIcon,children:(0,u.jsx)(Dw,{type:a.type})}),(0,u.jsx)("span",{className:X.paletteItemLabel,children:a.label})]},a.type))]},s.section))})}function Bw({value:e,suffix:t}){let[n,o]=(0,zt.useState)(null),[r,i]=(0,zt.useState)(t),[s,a]=(0,zt.useState)("up"),l=(0,zt.useRef)(e),c=(0,zt.useRef)(t),d=(0,zt.useRef)(),m=n!==null&&r!==t;return(0,zt.useEffect)(()=>{if(e!==l.current){if(e===0){l.current=e,c.current=t,o(null);return}a(e>l.current?"up":"down"),o(l.current),i(c.current),l.current=e,c.current=t,clearTimeout(d.current),d.current=Ye(()=>o(null),250)}else c.current=t},[e,t]),n===null?(0,u.jsxs)(u.Fragment,{children:[e,t?` ${t}`:""]}):m?(0,u.jsxs)("span",{className:X.rollingWrap,children:[(0,u.jsxs)("span",{style:{visibility:"hidden"},children:[e," ",t]}),(0,u.jsxs)("span",{className:`${X.rollingNum} ${s==="up"?X.exitUp:X.exitDown}`,children:[n," ",r]},`o${n}-${e}`),(0,u.jsxs)("span",{className:`${X.rollingNum} ${s==="up"?X.enterUp:X.enterDown}`,children:[e," ",t]},`n${e}`)]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("span",{className:X.rollingWrap,children:[(0,u.jsx)("span",{style:{visibility:"hidden"},children:e}),(0,u.jsx)("span",{className:`${X.rollingNum} ${s==="up"?X.exitUp:X.exitDown}`,children:n},`o${n}-${e}`),(0,u.jsx)("span",{className:`${X.rollingNum} ${s==="up"?X.enterUp:X.enterDown}`,children:e},`n${e}`)]}),t?` ${t}`:""]})}function Ow({activeType:e,onSelect:t,isDarkMode:n,sectionCount:o,onDetectSections:r,visible:i,onExited:s,placementCount:a,onClearPlacements:l,onDragStart:c,blankCanvas:d,onBlankCanvasChange:m,wireframePurpose:f,onWireframePurposeChange:b,Tooltip:v}){let[P,k]=(0,zt.useState)(!1),[h,_]=(0,zt.useState)("exit"),[S,D]=(0,zt.useState)(!1),[Z,q]=(0,zt.useState)(!0),O=(0,zt.useRef)(0),ie=(0,zt.useRef)(""),xe=(0,zt.useRef)(0),he=(0,zt.useRef)(),j=(0,zt.useRef)(null),[M,J]=(0,zt.useState)("");(0,zt.useEffect)(()=>(i?(k(!0),clearTimeout(he.current),cancelAnimationFrame(xe.current),xe.current=Vi(()=>{xe.current=Vi(()=>{_("enter")})})):(cancelAnimationFrame(xe.current),_("exit"),clearTimeout(he.current),he.current=Ye(()=>{k(!1),s?.()},200)),()=>cancelAnimationFrame(xe.current)),[i]);let ue=a>0||o>0,ke=a+o;if(ke>0&&(O.current=ke,ie.current=d?ke===1?"Component":"Components":ke===1?"Change":"Changes"),(0,zt.useEffect)(()=>{if(ue)S?q(!1):(q(!0),D(!0),Vi(()=>{Vi(()=>{q(!1)})}));else{q(!0);let oe=Ye(()=>D(!1),300);return()=>clearTimeout(oe)}},[ue]),(0,zt.useEffect)(()=>{if(!P)return;let oe=j.current;if(!oe)return;let z=()=>J(Rw(oe));z(),oe.addEventListener("scroll",z,{passive:!0});let me=new ResizeObserver(z);return me.observe(oe),()=>{oe.removeEventListener("scroll",z),me.disconnect()}},[P]),!P)return null;let ge=[];return a>0&&ge.push("placed"),o>0&&ge.push("captured"),(0,u.jsxs)("div",{className:`${X.palette} ${X[h]} ${n?"":X.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:oe=>oe.stopPropagation(),onMouseDown:oe=>oe.stopPropagation(),onTransitionEnd:oe=>{oe.target===oe.currentTarget&&(i||(clearTimeout(he.current),k(!1),_("exit"),s?.()))},children:[(0,u.jsxs)("div",{className:X.paletteHeader,children:[(0,u.jsx)("div",{className:X.paletteHeaderTitle,children:"Layout Mode"}),(0,u.jsxs)("div",{className:X.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",(0,u.jsx)("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),(0,u.jsxs)("div",{className:`${X.canvasToggle} ${d?X.active:""}`,onClick:()=>m(!d),children:[(0,u.jsx)("span",{className:X.canvasToggleIcon,children:(0,u.jsxs)("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[(0,u.jsx)("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),(0,u.jsx)("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,u.jsx)("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,u.jsx)("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,u.jsx)("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),(0,u.jsx)("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),(0,u.jsx)("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),(0,u.jsx)("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,u.jsx)("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,u.jsx)("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),(0,u.jsx)("span",{className:X.canvasToggleLabel,children:"Wireframe New Page"})]}),(0,u.jsx)("div",{className:`${X.wireframePurposeWrap} ${d?"":X.collapsed}`,children:(0,u.jsx)("div",{className:X.wireframePurposeInner,children:(0,u.jsx)("textarea",{className:X.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:f,onChange:oe=>b(oe.target.value),rows:2})})}),(0,u.jsx)(Aw,{activeType:e,onSelect:t,onDragStart:c,scrollRef:j,fadeClass:M,blankCanvas:d}),S&&(0,u.jsx)("div",{className:`${X.paletteFooterWrap} ${Z?X.footerHidden:""}`,children:(0,u.jsx)("div",{className:X.paletteFooterInner,children:(0,u.jsx)("div",{className:X.paletteFooterInnerContent,children:(0,u.jsxs)("div",{className:X.paletteFooter,children:[(0,u.jsx)("span",{className:X.paletteFooterCount,children:(0,u.jsx)(Bw,{value:O.current,suffix:ie.current})}),(0,u.jsx)("button",{className:X.paletteFooterClear,onClick:l,children:"Clear"})]})})})})]})}function qi(e){if(e.parentElement)return e.parentElement;let t=e.getRootNode();return t instanceof ShadowRoot?t.host:null}function Tn(e,t){let n=e;for(;n;){if(n.matches(t))return n;n=qi(n)}return null}function zw(e,t=4){let n=[],o=e,r=0;for(;o&&r<t;){let i=o.tagName.toLowerCase();if(i==="html"||i==="body")break;let s=i;if(o.id)s=`#${o.id}`;else if(o.className&&typeof o.className=="string"){let l=o.className.split(/\s+/).find(c=>c.length>2&&!c.match(/^[a-z]{1,2}$/)&&!c.match(/[A-Z0-9]{5,}/));l&&(s=`.${l.split("_")[0]}`)}let a=qi(o);!o.parentElement&&a&&(s=`\u27E8shadow\u27E9 ${s}`),n.unshift(s),o=a,r++}return n.join(" > ")}function Xi(e){let t=zw(e);if(e.dataset.element)return{name:e.dataset.element,path:t};let n=e.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(n)){let o=Tn(e,"svg");if(o){let r=qi(o);if(r instanceof HTMLElement)return{name:`graphic in ${Xi(r).name}`,path:t}}return{name:"graphic element",path:t}}if(n==="svg"){let o=qi(e);if(o?.tagName.toLowerCase()==="button"){let r=o.textContent?.trim();return{name:r?`icon in "${r}" button`:"button icon",path:t}}return{name:"icon",path:t}}if(n==="button"){let o=e.textContent?.trim(),r=e.getAttribute("aria-label");return r?{name:`button [${r}]`,path:t}:{name:o?`button "${o.slice(0,25)}"`:"button",path:t}}if(n==="a"){let o=e.textContent?.trim(),r=e.getAttribute("href");return o?{name:`link "${o.slice(0,25)}"`,path:t}:r?{name:`link to ${r.slice(0,30)}`,path:t}:{name:"link",path:t}}if(n==="input"){let o=e.getAttribute("type")||"text",r=e.getAttribute("placeholder"),i=e.getAttribute("name");return r?{name:`input "${r}"`,path:t}:i?{name:`input [${i}]`,path:t}:{name:`${o} input`,path:t}}if(["h1","h2","h3","h4","h5","h6"].includes(n)){let o=e.textContent?.trim();return{name:o?`${n} "${o.slice(0,35)}"`:n,path:t}}if(n==="p"){let o=e.textContent?.trim();return o?{name:`paragraph: "${o.slice(0,40)}${o.length>40?"...":""}"`,path:t}:{name:"paragraph",path:t}}if(n==="span"||n==="label"){let o=e.textContent?.trim();return o&&o.length<40?{name:`"${o}"`,path:t}:{name:n,path:t}}if(n==="li"){let o=e.textContent?.trim();return o&&o.length<40?{name:`list item: "${o.slice(0,35)}"`,path:t}:{name:"list item",path:t}}if(n==="blockquote")return{name:"blockquote",path:t};if(n==="code"){let o=e.textContent?.trim();return o&&o.length<30?{name:`code: \`${o}\``,path:t}:{name:"code",path:t}}if(n==="pre")return{name:"code block",path:t};if(n==="img"){let o=e.getAttribute("alt");return{name:o?`image "${o.slice(0,30)}"`:"image",path:t}}if(n==="video")return{name:"video",path:t};if(["div","section","article","nav","header","footer","aside","main"].includes(n)){let o=e.className,r=e.getAttribute("role"),i=e.getAttribute("aria-label");if(i)return{name:`${n} [${i}]`,path:t};if(r)return{name:`${r}`,path:t};if(typeof o=="string"&&o){let s=o.split(/[\s_-]+/).map(a=>a.replace(/[A-Z0-9]{5,}.*$/,"")).filter(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a)).slice(0,2);if(s.length>0)return{name:s.join(" "),path:t}}return{name:n==="div"?"container":n,path:t}}return{name:n,path:t}}function ra(e){let t=[],n=e.textContent?.trim();n&&n.length<100&&t.push(n);let o=e.previousElementSibling;if(o){let i=o.textContent?.trim();i&&i.length<50&&t.unshift(`[before: "${i.slice(0,40)}"]`)}let r=e.nextElementSibling;if(r){let i=r.textContent?.trim();i&&i.length<50&&t.push(`[after: "${i.slice(0,40)}"]`)}return t.join(" ")}function ic(e){let t=qi(e);if(!t)return"";let r=(e.getRootNode()instanceof ShadowRoot&&e.parentElement?Array.from(e.parentElement.children):Array.from(t.children)).filter(d=>d!==e&&d instanceof HTMLElement);if(r.length===0)return"";let i=r.slice(0,4).map(d=>{let m=d.tagName.toLowerCase(),f=d.className,b="";if(typeof f=="string"&&f){let v=f.split(/\s+/).map(P=>P.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(P=>P.length>2&&!/^[a-z]{1,2}$/.test(P));v&&(b=`.${v}`)}if(m==="button"||m==="a"){let v=d.textContent?.trim().slice(0,15);if(v)return`${m}${b} "${v}"`}return`${m}${b}`}),a=t.tagName.toLowerCase();if(typeof t.className=="string"&&t.className){let d=t.className.split(/\s+/).map(m=>m.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(m=>m.length>2&&!/^[a-z]{1,2}$/.test(m));d&&(a=`.${d}`)}let l=t.children.length,c=l>i.length+1?` (${l} total in ${a})`:"";return i.join(", ")+c}function ia(e){let t=e.className;return typeof t!="string"||!t?"":t.split(/\s+/).filter(o=>o.length>0).map(o=>{let r=o.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return r?r[1]:o}).filter((o,r,i)=>i.indexOf(o)===r).join(", ")}var Z_=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),Fw=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),Ww=new Set(["input","textarea","select"]),Hw=new Set(["img","video","canvas","svg"]),jw=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function sc(e){if(typeof window>"u")return{};let t=window.getComputedStyle(e),n={},o=e.tagName.toLowerCase(),r;Fw.has(o)?r=["color","fontSize","fontWeight","fontFamily","lineHeight"]:o==="button"||o==="a"&&e.getAttribute("role")==="button"?r=["backgroundColor","color","padding","borderRadius","fontSize"]:Ww.has(o)?r=["backgroundColor","color","padding","borderRadius","fontSize"]:Hw.has(o)?r=["width","height","objectFit","borderRadius"]:jw.has(o)?r=["display","padding","margin","gap","backgroundColor"]:r=["color","fontSize","margin","padding","backgroundColor"];for(let i of r){let s=i.replace(/([A-Z])/g,"-$1").toLowerCase(),a=t.getPropertyValue(s);a&&!Z_.has(a)&&(n[i]=a)}return n}var Uw=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function ac(e){if(typeof window>"u")return"";let t=window.getComputedStyle(e),n=[];for(let o of Uw){let r=o.replace(/([A-Z])/g,"-$1").toLowerCase(),i=t.getPropertyValue(r);i&&!Z_.has(i)&&n.push(`${r}: ${i}`)}return n.join("; ")}function Yw(e){if(!e)return;let t={},n=e.split(";").map(o=>o.trim()).filter(Boolean);for(let o of n){let r=o.indexOf(":");if(r>0){let i=o.slice(0,r).trim(),s=o.slice(r+1).trim();i&&s&&(t[i]=s)}}return Object.keys(t).length>0?t:void 0}function lc(e){let t=[],n=e.getAttribute("role"),o=e.getAttribute("aria-label"),r=e.getAttribute("aria-describedby"),i=e.getAttribute("tabindex"),s=e.getAttribute("aria-hidden");return n&&t.push(`role="${n}"`),o&&t.push(`aria-label="${o}"`),r&&t.push(`aria-describedby="${r}"`),i&&t.push(`tabindex=${i}`),s==="true"&&t.push("aria-hidden"),e.matches("a, button, input, select, textarea, [tabindex]")&&t.push("focusable"),t.join(", ")}function cc(e){let t=[],n=e;for(;n&&n.tagName.toLowerCase()!=="html";){let o=n.tagName.toLowerCase(),r=o;if(n.id)r=`${o}#${n.id}`;else if(n.className&&typeof n.className=="string"){let s=n.className.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2);s&&(r=`${o}.${s}`)}let i=qi(n);!n.parentElement&&i&&(r=`\u27E8shadow\u27E9 ${r}`),t.unshift(r),n=i}return t.join(" > ")}var Vw=new Set(["nav","header","main","section","article","footer","aside"]),Pp={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},E_={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},Xw=new Set(["script","style","noscript","link","meta"]),Qw=40;function J_(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){let n=window.getComputedStyle(t).position;if(n==="fixed"||n==="sticky")return!0;t=t.parentElement}return!1}function Jr(e){let t=e.tagName.toLowerCase();if(["nav","header","footer","main"].includes(t)&&document.querySelectorAll(t).length===1)return t;if(e.id)return`#${CSS.escape(e.id)}`;if(e.className&&typeof e.className=="string"){let r=e.className.split(/\s+/).filter(i=>i.length>0).find(i=>i.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(i)&&!/^[a-z]{1,2}$/.test(i));if(r){let i=`${t}.${CSS.escape(r)}`;if(document.querySelectorAll(i).length===1)return i}}let n=e.parentElement;if(n){let r=Array.from(n.children).indexOf(e)+1;return`${n===document.body?"body":Jr(n)} > ${t}:nth-child(${r})`}return t}function _c(e){let t=e.tagName.toLowerCase(),n=e.getAttribute("aria-label");if(n)return n;let o=e.getAttribute("role");if(o&&Pp[o])return Pp[o];if(E_[t])return E_[t];let r=e.querySelector("h1, h2, h3, h4, h5, h6");if(r){let s=r.textContent?.trim();if(s&&s.length<=50)return s;if(s)return s.slice(0,47)+"..."}let{name:i}=Xi(e);return i.charAt(0).toUpperCase()+i.slice(1)}function e0(e){let t=e.className;return typeof t!="string"||!t?null:t.split(/\s+/).map(o=>o.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(o=>o.length>2&&!/^[a-z]{1,2}$/.test(o))||null}function t0(e){let t=e.textContent?.trim();if(!t)return null;let n=t.replace(/\s+/g," ");return n.length<=30?n:n.slice(0,30)+"\u2026"}function Kw(){let e=document.querySelector("main")||document.body,t=Array.from(e.children),n=t;e!==document.body&&t.length<3&&(n=Array.from(document.body.children));let o=[];return n.forEach((r,i)=>{if(!(r instanceof HTMLElement))return;let s=r.tagName.toLowerCase();if(Xw.has(s)||r.hasAttribute("data-feedback-toolbar")||r.closest("[data-feedback-toolbar]"))return;let a=window.getComputedStyle(r);if(a.display==="none"||a.visibility==="hidden")return;let l=r.getBoundingClientRect();if(l.height<Qw)return;let c=Vw.has(s),d=r.getAttribute("role")&&Pp[r.getAttribute("role")],m=s==="div"&&l.height>=60;if(!c&&!d&&!m)return;let f=window.scrollY,b=J_(r),v={x:l.x,y:b?l.y:l.y+f,width:l.width,height:l.height};o.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:_c(r),tagName:s,selector:Jr(r),role:r.getAttribute("role"),className:e0(r),textSnippet:t0(r),originalRect:v,currentRect:{...v},originalIndex:i,isFixed:b})}),o}function qw(e){let t=window.scrollY,n=e.getBoundingClientRect(),o=J_(e),r={x:n.x,y:o?n.y:n.y+t,width:n.width,height:n.height},i=e.parentElement,s=0;return i&&(s=Array.from(i.children).indexOf(e)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:_c(e),tagName:e.tagName.toLowerCase(),selector:Jr(e),role:e.getAttribute("role"),className:e0(e),textSnippet:t0(e),originalRect:r,currentRect:{...r},originalIndex:s,isFixed:o}}var M_={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},L_=["nw","n","ne","e","se","s","sw","w"],dc=24,T_=16,uc=5;function $_(e,t,n,o){let r=1/0,i=1/0,s=e.x,a=e.x+e.width,l=e.x+e.width/2,c=e.y,d=e.y+e.height,m=e.y+e.height/2,f=[];for(let O of t)n.has(O.id)||f.push(O.currentRect);o&&f.push(...o);for(let O of f){let ie=O.x,xe=O.x+O.width,he=O.x+O.width/2,j=O.y,M=O.y+O.height,J=O.y+O.height/2;for(let ue of[s,a,l])for(let ke of[ie,xe,he]){let ge=ke-ue;Math.abs(ge)<uc&&Math.abs(ge)<Math.abs(r)&&(r=ge)}for(let ue of[c,d,m])for(let ke of[j,M,J]){let ge=ke-ue;Math.abs(ge)<uc&&Math.abs(ge)<Math.abs(i)&&(i=ge)}}let b=Math.abs(r)<uc?r:0,v=Math.abs(i)<uc?i:0,P=[],k=new Set,h=s+b,_=a+b,S=l+b,D=c+v,Z=d+v,q=m+v;for(let O of f){let ie=O.x,xe=O.x+O.width,he=O.x+O.width/2,j=O.y,M=O.y+O.height,J=O.y+O.height/2;for(let ue of[ie,he,xe])for(let ke of[h,S,_])if(Math.abs(ke-ue)<.5){let ge=`x:${Math.round(ue)}`;k.has(ge)||(k.add(ge),P.push({axis:"x",pos:ue}))}for(let ue of[j,J,M])for(let ke of[D,q,Z])if(Math.abs(ke-ue)<.5){let ge=`y:${Math.round(ue)}`;k.has(ge)||(k.add(ge),P.push({axis:"y",pos:ue}))}}return{dx:b,dy:v,guides:P}}var Gw=new Set(["script","style","noscript","link","meta","br","hr"]);function I_(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){if(t.closest("[data-feedback-toolbar]"))return null;if(Gw.has(t.tagName.toLowerCase())){t=t.parentElement;continue}let n=t.getBoundingClientRect();if(n.width>=T_&&n.height>=T_)return t;t=t.parentElement}return null}function Zw({rearrangeState:e,onChange:t,isDarkMode:n,exiting:o,className:r,blankCanvas:i,extraSnapRects:s,onSelectionChange:a,deselectSignal:l,onDragMove:c,onDragEnd:d,clearSignal:m}){let{sections:f}=e,b=(0,qe.useRef)(e);b.current=e;let[v,P]=(0,qe.useState)(new Set),[k,h]=(0,qe.useState)(!1),_=(0,qe.useRef)(m);(0,qe.useEffect)(()=>{m!==void 0&&m!==_.current&&(_.current=m,f.length>0&&h(!0))},[m,f.length]);let S=(0,qe.useRef)(l);(0,qe.useEffect)(()=>{l!==S.current&&(S.current=l,P(new Set))},[l]);let[D,Z]=(0,qe.useState)(null),[q,O]=(0,qe.useState)(!1),ie=(0,qe.useRef)(!1),xe=(0,qe.useCallback)(I=>{let N=f.find(H=>H.id===I);N&&(ie.current=!!N.note,Z(I),O(!1))},[f]),he=(0,qe.useCallback)(()=>{D&&(O(!0),Ye(()=>{Z(null),O(!1)},150))},[D]),j=(0,qe.useCallback)(I=>{D&&(t({...e,sections:f.map(N=>N.id===D?{...N,note:I.trim()||void 0}:N)}),he())},[D,f,e,t,he]);(0,qe.useEffect)(()=>{o&&D&&he()},[o]);let[M,J]=(0,qe.useState)(new Set),ue=(0,qe.useRef)(new Map),[ke,ge]=(0,qe.useState)(null),[oe,z]=(0,qe.useState)(null),[me,Ee]=(0,qe.useState)([]),[Fe,Pe]=(0,qe.useState)(0),ut=(0,qe.useRef)(null),St=(0,qe.useRef)(new Set),Oe=(0,qe.useRef)(new Map),[Ve,Tt]=(0,qe.useState)(new Map),[Qe,en]=(0,qe.useState)(new Map),$t=(0,qe.useRef)(new Set),_t=(0,qe.useRef)(new Map),Kt=(0,qe.useRef)(a);Kt.current=a;let vt=(0,qe.useRef)(c);vt.current=c;let bt=(0,qe.useRef)(d);bt.current=d,(0,qe.useEffect)(()=>{i&&P(new Set)},[i]);let[tn,qt]=(0,qe.useState)(()=>!e.sections.some(I=>{let N=I.originalRect,H=I.currentRect;return Math.abs(N.x-H.x)>1||Math.abs(N.y-H.y)>1||Math.abs(N.width-H.width)>1||Math.abs(N.height-H.height)>1}));(0,qe.useEffect)(()=>{if(!tn){let I=Ye(()=>qt(!0),380);return()=>clearTimeout(I)}},[]);let Ht=(0,qe.useRef)(new Set);(0,qe.useEffect)(()=>{Ht.current=new Set(f.map(I=>I.selector))},[f]),(0,qe.useEffect)(()=>{let I=()=>Pe(window.scrollY);return I(),window.addEventListener("scroll",I,{passive:!0}),window.addEventListener("resize",I,{passive:!0}),()=>{window.removeEventListener("scroll",I),window.removeEventListener("resize",I)}},[]),(0,qe.useEffect)(()=>{let I=N=>{if(ut.current){ge(null);return}let H=document.elementFromPoint(N.clientX,N.clientY);if(!H){ge(null);return}if(H.closest("[data-feedback-toolbar]")){ge(null);return}if(H.closest("[data-design-placement]")){ge(null);return}if(H.closest("[data-annotation-popup]")){ge(null);return}let V=I_(H);if(!V){ge(null);return}for(let ve of Ht.current)try{let te=document.querySelector(ve);if(te&&(te===V||V.contains(te))){ge(null);return}}catch{}let G=V.getBoundingClientRect();ge({x:G.x,y:G.y,w:G.width,h:G.height})};return document.addEventListener("mousemove",I,{passive:!0}),()=>document.removeEventListener("mousemove",I)},[f]),(0,qe.useEffect)(()=>{let I=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=I}},[]),(0,qe.useEffect)(()=>{let I=N=>{if(ut.current||N.button!==0)return;let H=N.target;if(!H||H.closest("[data-feedback-toolbar]")||H.closest("[data-design-placement]")||H.closest("[data-annotation-popup]"))return;let V=I_(H),G=!1;if(V)for(let te of Ht.current)try{let $e=document.querySelector(te);if($e&&($e===V||V.contains($e))){G=!0;break}}catch{}let ve=!!(N.shiftKey||N.metaKey||N.ctrlKey);if(V&&!G){N.preventDefault(),N.stopPropagation();let te=qw(V),$e=[...f,te],He=[...e.originalOrder,te.id];t({...e,sections:$e,originalOrder:He});let je=new Set([te.id]);P(je),Kt.current?.(je,ve),ge(null);let at=N.clientX,Ae=N.clientY,Ze={x:te.currentRect.x,y:te.currentRect.y},We=te.originalRect,E=!1,A=0,F=0;ut.current="move";let ne=De=>{let Ce=De.clientX-at,tt=De.clientY-Ae;if(!E&&(Math.abs(Ce)>2||Math.abs(tt)>2)&&(E=!0),!E)return;let jt={x:Ze.x+Ce,y:Ze.y+tt,width:te.currentRect.width,height:te.currentRect.height},Cn=$_(jt,$e,new Set([te.id]),s);Ee(Cn.guides);let oo=Ce+Cn.dx,nn=tt+Cn.dy;A=oo,F=nn;let Po=document.querySelector(`[data-rearrange-section="${te.id}"]`);Po&&(Po.style.transform=`translate(${oo}px, ${nn}px)`),Tt(new Map([[te.id,{x:Ze.x+oo,y:Ze.y+nn,width:te.currentRect.width,height:te.currentRect.height}]])),vt.current?.(oo,nn)},fe=()=>{window.removeEventListener("mousemove",ne),window.removeEventListener("mouseup",fe),ut.current=null,Ee([]),Tt(new Map);let De=document.querySelector(`[data-rearrange-section="${te.id}"]`);De&&(De.style.transform=""),E&&t({...e,sections:$e.map(Ce=>Ce.id===te.id?{...Ce,currentRect:{...Ce.currentRect,x:Math.max(0,Ze.x+A),y:Math.max(0,Ze.y+F)}}:Ce),originalOrder:He}),bt.current?.(A,F,E)};window.addEventListener("mousemove",ne),window.addEventListener("mouseup",fe)}else if(G&&V){N.preventDefault();for(let te of f)try{let $e=document.querySelector(te.selector);if($e&&$e===V){let He=new Set([te.id]);P(He),Kt.current?.(He,ve);return}}catch{}ve||(P(new Set),Kt.current?.(new Set,!1))}else ve||(P(new Set),Kt.current?.(new Set,!1))};return document.addEventListener("mousedown",I,!0),()=>document.removeEventListener("mousedown",I,!0)},[f,e,t]),(0,qe.useEffect)(()=>{let I=N=>{let H=N.target;if(!(H.tagName==="INPUT"||H.tagName==="TEXTAREA"||H.isContentEditable)){if((N.key==="Backspace"||N.key==="Delete")&&v.size>0){N.preventDefault();let V=new Set(v);J(G=>{let ve=new Set(G);for(let te of V)ve.add(te);return ve}),P(new Set),Ye(()=>{let G=b.current;t({...G,sections:G.sections.filter(ve=>!V.has(ve.id)),originalOrder:G.originalOrder.filter(ve=>!V.has(ve))}),J(ve=>{let te=new Set(ve);for(let $e of V)te.delete($e);return te})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(N.key)&&v.size>0){N.preventDefault();let V=N.shiftKey?20:1,G=N.key==="ArrowLeft"?-V:N.key==="ArrowRight"?V:0,ve=N.key==="ArrowUp"?-V:N.key==="ArrowDown"?V:0;t({...e,sections:f.map(te=>v.has(te.id)?{...te,currentRect:{...te.currentRect,x:Math.max(0,te.currentRect.x+G),y:Math.max(0,te.currentRect.y+ve)}}:te)});return}N.key==="Escape"&&v.size>0&&P(new Set)}};return document.addEventListener("keydown",I),()=>document.removeEventListener("keydown",I)},[v,f,e,t]);let C=(0,qe.useCallback)((I,N)=>{if(I.button!==0)return;let H=I.target;if(H.closest(`.${X.handle}`)||H.closest(`.${X.deleteButton}`))return;I.preventDefault(),I.stopPropagation();let V;I.shiftKey||I.metaKey||I.ctrlKey?(V=new Set(v),V.has(N)?V.delete(N):V.add(N)):v.has(N)?V=new Set(v):V=new Set([N]),P(V),(V.size!==v.size||[...V].some(E=>!v.has(E)))&&Kt.current?.(V,!!(I.shiftKey||I.metaKey||I.ctrlKey));let ve=I.clientX,te=I.clientY,$e=new Map;for(let E of f)V.has(E.id)&&$e.set(E.id,{x:E.currentRect.x,y:E.currentRect.y});ut.current="move";let He=!1,je=0,at=0,Ae=new Map;for(let E of f)if(V.has(E.id)){let A=document.querySelector(`[data-rearrange-section="${E.id}"]`);Ae.set(E.id,{outlineEl:A,curW:E.currentRect.width,curH:E.currentRect.height})}let Ze=E=>{let A=E.clientX-ve,F=E.clientY-te;if(A===0&&F===0)return;He=!0;let ne=1/0,fe=1/0,De=-1/0,Ce=-1/0;for(let[nn,{curW:Po,curH:va}]of Ae){let Ut=$e.get(nn);if(!Ut)continue;let Ro=Ut.x+A,ba=Ut.y+F;ne=Math.min(ne,Ro),fe=Math.min(fe,ba),De=Math.max(De,Ro+Po),Ce=Math.max(Ce,ba+va)}let tt=$_({x:ne,y:fe,width:De-ne,height:Ce-fe},f,V,s),jt=A+tt.dx,Cn=F+tt.dy;je=jt,at=Cn,Ee(tt.guides);for(let[,{outlineEl:nn}]of Ae)nn&&(nn.style.transform=`translate(${jt}px, ${Cn}px)`);let oo=new Map;for(let[nn,{curW:Po,curH:va}]of Ae){let Ut=$e.get(nn);if(Ut){let Ro={x:Math.max(0,Ut.x+jt),y:Math.max(0,Ut.y+Cn),width:Po,height:va};oo.set(nn,Ro)}}Tt(oo),vt.current?.(jt,Cn)},We=E=>{window.removeEventListener("mousemove",Ze),window.removeEventListener("mouseup",We),ut.current=null,Ee([]),Tt(new Map);for(let[,{outlineEl:A}]of Ae)A&&(A.style.transform="");if(He){let A=E.clientX-ve,F=E.clientY-te;if(Math.abs(A)<5&&Math.abs(F)<5)t({...e,sections:f.map(ne=>{let fe=$e.get(ne.id);return fe?{...ne,currentRect:{...ne.currentRect,x:fe.x,y:fe.y}}:ne})});else{t({...e,sections:f.map(ne=>{let fe=$e.get(ne.id);return fe?{...ne,currentRect:{...ne.currentRect,x:Math.max(0,fe.x+je),y:Math.max(0,fe.y+at)}}:ne})}),bt.current?.(je,at,!0);return}}bt.current?.(0,0,!1)};window.addEventListener("mousemove",Ze),window.addEventListener("mouseup",We)},[v,f,e,t]),w=(0,qe.useCallback)((I,N,H)=>{I.preventDefault(),I.stopPropagation();let V=f.find(We=>We.id===N);if(!V)return;P(new Set([N])),ut.current="resize";let G=I.clientX,ve=I.clientY,te={...V.currentRect},$e=V.originalRect,He=te.width/te.height,je={...te},at=document.querySelector(`[data-rearrange-section="${N}"]`),Ae=We=>{let E=We.clientX-G,A=We.clientY-ve,F=te.x,ne=te.y,fe=te.width,De=te.height;if(H.includes("e")&&(fe=Math.max(dc,te.width+E)),H.includes("w")&&(fe=Math.max(dc,te.width-E),F=te.x+te.width-fe),H.includes("s")&&(De=Math.max(dc,te.height+A)),H.includes("n")&&(De=Math.max(dc,te.height-A),ne=te.y+te.height-De),We.shiftKey)if(H.length===2){let tt=Math.abs(fe-te.width),jt=Math.abs(De-te.height);tt>jt?De=fe/He:fe=De*He,H.includes("w")&&(F=te.x+te.width-fe),H.includes("n")&&(ne=te.y+te.height-De)}else H==="e"||H==="w"?De=fe/He:fe=De*He,H==="w"&&(F=te.x+te.width-fe),H==="n"&&(ne=te.y+te.height-De);je={x:F,y:ne,width:fe,height:De},at&&(at.style.left=`${F}px`,at.style.top=`${ne-Fe}px`,at.style.width=`${fe}px`,at.style.height=`${De}px`),z({x:We.clientX+12,y:We.clientY+12,text:`${Math.round(fe)} \xD7 ${Math.round(De)}`}),Tt(new Map([[N,je]]))},Ze=()=>{window.removeEventListener("mousemove",Ae),window.removeEventListener("mouseup",Ze),z(null),ut.current=null,Tt(new Map),t({...e,sections:f.map(We=>We.id===N?{...We,currentRect:je}:We)})};window.addEventListener("mousemove",Ae),window.addEventListener("mouseup",Ze)},[f,e,t,Fe]),R=(0,qe.useCallback)(I=>{J(N=>{let H=new Set(N);return H.add(I),H}),P(N=>{let H=new Set(N);return H.delete(I),H}),Ye(()=>{let N=b.current;t({...N,sections:N.sections.filter(H=>H.id!==I),originalOrder:N.originalOrder.filter(H=>H!==I)}),J(H=>{let V=new Set(H);return V.delete(I),V})},180)},[t]),Y=I=>{let N=I.originalRect,H=I.currentRect;return Math.abs(N.x-H.x)>1||Math.abs(N.y-H.y)>1||Math.abs(N.width-H.width)>1||Math.abs(N.height-H.height)>1},W=I=>{let N=I.originalRect,H=I.currentRect;return Math.abs(N.x-H.x)>1||Math.abs(N.y-H.y)>1},Q=I=>{let N=I.originalRect,H=I.currentRect;return Math.abs(N.width-H.width)>1||Math.abs(N.height-H.height)>1};for(let I of f)Oe.current.has(I.id)||(W(I)?Oe.current.set(I.id,"move"):Q(I)&&Oe.current.set(I.id,"resize"));for(let I of Oe.current.keys())f.some(N=>N.id===I)||Oe.current.delete(I);let le=f.filter(I=>{try{if(M.has(I.id)||v.has(I.id))return!0;let N=document.querySelector(I.selector);if(!N)return!1;let H=N.getBoundingClientRect(),V=I.originalRect;return Math.abs(H.width-V.width)+Math.abs(H.height-V.height)<200}catch{return!1}}),be=le.filter(I=>Y(I)),ce=le.filter(I=>!Y(I)),Me=new Set(be.map(I=>I.id));for(let I of St.current)Me.has(I)||St.current.delete(I);let de=[...Me].sort().join(",");for(let I of be)_t.current.set(I.id,{currentRect:I.currentRect,originalRect:I.originalRect,isFixed:I.isFixed});return(0,qe.useEffect)(()=>{let I=$t.current;$t.current=Me;let N=new Map;for(let H of I)if(!Me.has(H)){if(!f.some(G=>G.id===H))continue;let V=_t.current.get(H);V&&(N.set(H,{orig:V.originalRect,target:V.currentRect,isFixed:V.isFixed}),_t.current.delete(H))}if(N.size>0){en(V=>{let G=new Map(V);for(let[ve,te]of N)G.set(ve,te);return G});let H=Ye(()=>{en(V=>{let G=new Map(V);for(let ve of N.keys())G.delete(ve);return G})},250);return()=>clearTimeout(H)}},[de,f]),(0,st.jsxs)(st.Fragment,{children:[(0,st.jsxs)("div",{className:`${X.rearrangeOverlay} ${n?"":X.light} ${o?X.overlayExiting:""}${r?` ${r}`:""}`,"data-feedback-toolbar":!0,children:[ke&&(0,st.jsx)("div",{className:X.hoverHighlight,style:{left:ke.x,top:ke.y,width:ke.w,height:ke.h}}),ce.map(I=>{let N=I.currentRect,H=I.isFixed?N.y:N.y-Fe,V=M_,G=v.has(I.id);return(0,st.jsxs)("div",{"data-rearrange-section":I.id,className:`${X.sectionOutline} ${G?X.selected:""} ${k||o||M.has(I.id)?X.exiting:""}`,style:{left:N.x,top:H,width:N.width,height:N.height,borderColor:V.border,backgroundColor:V.bg,...tn?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:ve=>C(ve,I.id),onDoubleClick:()=>xe(I.id),children:[(0,st.jsx)("span",{className:X.sectionLabel,style:{backgroundColor:V.pill},children:I.label}),(0,st.jsx)("span",{className:`${X.sectionAnnotation} ${I.note?X.annotationVisible:""}`,children:(I.note&&ue.current.set(I.id,I.note),I.note||ue.current.get(I.id)||"")}),(0,st.jsxs)("span",{className:X.sectionDimensions,children:[Math.round(N.width)," \xD7 ",Math.round(N.height)]}),(0,st.jsx)("div",{className:X.deleteButton,onMouseDown:ve=>ve.stopPropagation(),onClick:()=>R(I.id),children:"\u2715"}),L_.map(ve=>(0,st.jsx)("div",{className:`${X.handle} ${X[`handle${ve.charAt(0).toUpperCase()}${ve.slice(1)}`]}`,onMouseDown:te=>w(te,I.id,ve)},ve))]},I.id)}),be.map(I=>{let N=I.currentRect,H=I.isFixed?N.y:N.y-Fe,V=v.has(I.id),G=W(I),ve=Q(I);if(i&&!V)return null;let $e=!St.current.has(I.id);return $e&&St.current.add(I.id),(0,st.jsxs)("div",{"data-rearrange-section":I.id,className:`${X.ghostOutline} ${V?X.selected:""} ${k||o||M.has(I.id)?X.exiting:""}`,style:{left:N.x,top:H,width:N.width,height:N.height,...tn?{}:{opacity:0,animation:"none",transition:"none"},...$e?{}:{animation:"none"}},onMouseDown:He=>C(He,I.id),onDoubleClick:()=>xe(I.id),children:[(0,st.jsx)("span",{className:X.sectionLabel,style:{backgroundColor:M_.pill},children:I.label}),(0,st.jsx)("span",{className:`${X.sectionAnnotation} ${I.note?X.annotationVisible:""}`,children:(I.note&&ue.current.set(I.id,I.note),I.note||ue.current.get(I.id)||"")}),(0,st.jsxs)("span",{className:X.sectionDimensions,children:[Math.round(N.width)," \xD7 ",Math.round(N.height)]}),(0,st.jsx)("div",{className:X.deleteButton,onMouseDown:He=>He.stopPropagation(),onClick:()=>R(I.id),children:"\u2715"}),L_.map(He=>(0,st.jsx)("div",{className:`${X.handle} ${X[`handle${He.charAt(0).toUpperCase()}${He.slice(1)}`]}`,onMouseDown:je=>w(je,I.id,He)},He)),(0,st.jsx)("span",{className:X.ghostBadge,children:(()=>{let He=Oe.current.get(I.id);if(G&&ve){let[je,at]=He==="resize"?["Resize","Move"]:["Move","Resize"];return(0,st.jsxs)(st.Fragment,{children:["Suggested ",je," ",(0,st.jsxs)("span",{className:X.ghostBadgeExtra,children:["& ",at]})]})}return`Suggested ${ve?"Resize":"Move"}`})()})]},I.id)})]}),!i&&(()=>{let I=[];for(let N of be){let H=Ve.get(N.id);I.push({id:N.id,orig:N.originalRect,target:H||N.currentRect,isFixed:N.isFixed,isSelected:v.has(N.id),isExiting:M.has(N.id)})}for(let[N,H]of Ve)if(!I.some(V=>V.id===N)){let V=f.find(G=>G.id===N);V&&I.push({id:N,orig:V.originalRect,target:H,isFixed:V.isFixed,isSelected:v.has(N)})}for(let[N,H]of Qe)I.some(V=>V.id===N)||I.push({id:N,orig:H.orig,target:H.target,isFixed:H.isFixed,isSelected:!1,isExiting:!0});return I.length===0?null:(0,st.jsxs)("svg",{className:`${X.connectorSvg} ${k||o?X.connectorExiting:""}`,children:[I.map(({id:N,orig:H,target:V,isFixed:G,isSelected:ve,isExiting:te})=>{let $e=H.x+H.width/2,He=(G?H.y:H.y-Fe)+H.height/2,je=V.x+V.width/2,at=(G?V.y:V.y-Fe)+V.height/2,Ae=je-$e,Ze=at-He,We=Math.sqrt(Ae*Ae+Ze*Ze);if(We<2)return null;let E=Math.min(1,We/40),A=Math.min(We*.3,60),F=We>0?-Ze/We:0,ne=We>0?Ae/We:0,fe=($e+je)/2+F*A,De=(He+at)/2+ne*A,Ce=Ve.has(N),tt=Ce||ve?1:.4,jt=Ce||ve?1:.5;return(0,st.jsxs)("g",{className:te?X.connectorExiting:"",children:[(0,st.jsx)("path",{className:X.connectorLine,d:`M ${$e} ${He} Q ${fe} ${De} ${je} ${at}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:tt*E}),(0,st.jsx)("circle",{className:X.connectorDot,cx:$e,cy:He,r:4*E,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:jt*E,filter:"url(#connDotShadow)"}),(0,st.jsx)("circle",{className:X.connectorDot,cx:je,cy:at,r:4*E,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:jt*E,filter:"url(#connDotShadow)"})]},`conn-${N}`)}),(0,st.jsx)("defs",{children:(0,st.jsx)("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:(0,st.jsx)("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),D&&(()=>{let I=f.find(at=>at.id===D);if(!I)return null;let N=I.currentRect,H=I.isFixed?N.y:N.y-Fe,V=N.x+N.width/2,G=H-8,ve=H+N.height+8,te=G>200,$e=ve<window.innerHeight-100,He=Math.max(160,Math.min(window.innerWidth-160,V)),je;return te?je={left:He,bottom:window.innerHeight-G}:$e?je={left:He,top:ve}:je={left:He,top:Math.max(80,window.innerHeight/2-80)},(0,st.jsx)(gc,{element:I.label,placeholder:"Add a note about this section",initialValue:I.note??"",submitLabel:ie.current?"Save":"Set",onSubmit:j,onCancel:he,onDelete:ie.current?()=>{j("")}:void 0,isExiting:q,lightMode:!n,style:je})})(),oe&&(0,st.jsx)("div",{className:X.sizeIndicator,style:{left:oe.x,top:oe.y},"data-feedback-toolbar":!0,children:oe.text}),me.map((I,N)=>(0,st.jsx)("div",{className:X.guideLine,style:I.axis==="x"?{position:"fixed",left:I.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:I.pos-Fe,width:"100vw",height:1}},`${I.axis}-${I.pos}-${N}`))]})}var Rp=new Set(["script","style","noscript","link","meta","br","hr"]);function Jw(){let e=document.querySelector("main")||document.body,t=[],n=Array.from(e.children),o=e!==document.body&&n.length<3?Array.from(document.body.children):n;for(let r of o){if(!(r instanceof HTMLElement)||Rp.has(r.tagName.toLowerCase())||r.hasAttribute("data-feedback-toolbar"))continue;let i=window.getComputedStyle(r);if(i.display==="none"||i.visibility==="hidden")continue;let s=r.getBoundingClientRect();if(!(s.height<10||s.width<10)){t.push({label:_c(r),selector:Jr(r),top:s.top,bottom:s.bottom,left:s.left,right:s.right,area:s.width*s.height});for(let a of Array.from(r.children)){if(!(a instanceof HTMLElement)||Rp.has(a.tagName.toLowerCase())||a.hasAttribute("data-feedback-toolbar"))continue;let l=window.getComputedStyle(a);if(l.display==="none"||l.visibility==="hidden")continue;let c=a.getBoundingClientRect();c.height<10||c.width<10||t.push({label:_c(a),selector:Jr(a),top:c.top,bottom:c.bottom,left:c.left,right:c.right,area:c.width*c.height})}}}return t}function ev(e){let t=window.scrollY;return e.map(({label:n,selector:o,rect:r})=>{let i=r.y-t;return{label:n,selector:o,top:i,bottom:i+r.height,left:r.x,right:r.x+r.width,area:r.width*r.height}})}function tv(e){let t=window.scrollY,n=e.y-t,o=e.x;return{top:n,bottom:n+e.height,left:o,right:o+e.width,area:e.width*e.height}}function Dp(e,t){let n=t?ev(t):Jw(),o=tv(e),r=null,i=null,s=null,a=null,l=null;for(let v of n){if(Math.abs(v.left-o.left)<2&&Math.abs(v.top-o.top)<2&&Math.abs(v.right-v.left-e.width)<2&&Math.abs(v.bottom-v.top-e.height)<2)continue;v.left<=o.left+2&&v.right>=o.right-2&&v.top<=o.top+2&&v.bottom>=o.bottom-2&&v.area>o.area*1.5&&(!l||v.area<l._area)&&(l={label:v.label,selector:v.selector,_area:v.area});let P=o.right>v.left+5&&o.left<v.right-5,k=o.bottom>v.top+5&&o.top<v.bottom-5;if(P&&v.bottom<=o.top+5){let h=Math.round(o.top-v.bottom);(!r||h<r._dist)&&(r={label:v.label,selector:v.selector,gap:Math.max(0,h),_dist:h})}if(P&&v.top>=o.bottom-5){let h=Math.round(v.top-o.bottom);(!i||h<i._dist)&&(i={label:v.label,selector:v.selector,gap:Math.max(0,h),_dist:h})}if(k&&v.right<=o.left+5){let h=Math.round(o.left-v.right);(!s||h<s._dist)&&(s={label:v.label,selector:v.selector,gap:Math.max(0,h),_dist:h})}if(k&&v.left>=o.right-5){let h=Math.round(v.left-o.right);(!a||h<a._dist)&&(a={label:v.label,selector:v.selector,gap:Math.max(0,h),_dist:h})}}let c=window.innerWidth,d=window.innerHeight,m=ov(e,c),f=v=>v?{label:v.label,selector:v.selector,gap:v.gap}:null,b=nv(o,e,c,d,l?{label:l.label,selector:l.selector,_area:l._area}:null,n);return{above:f(r),below:f(i),left:f(s),right:f(a),alignment:m,containedIn:l?{label:l.label,selector:l.selector}:null,outOfBounds:b}}function nv(e,t,n,o,r,i){let s={},a=!1,l=[];if(e.left<-2&&l.push("left"),e.right>n+2&&l.push("right"),e.top<-2&&l.push("top"),e.bottom>o+2&&l.push("bottom"),l.length>0&&(s.viewport=l,a=!0),r){let c=i.find(d=>d.label===r.label&&d.selector===r.selector&&Math.abs(d.area-r._area)<10);if(c){let d=[];e.left<c.left-2&&d.push("left"),e.right>c.right+2&&d.push("right"),e.top<c.top-2&&d.push("top"),e.bottom>c.bottom+2&&d.push("bottom"),d.length>0&&(s.container={label:r.label,edges:d},a=!0)}}return a?s:null}function ov(e,t){if(e.width/t>.85)return"full-width";let o=e.x+e.width/2,r=t/2,i=o-r,s=t*.08;return Math.abs(i)<s?"center":i<0?"left":"right"}function n0(e){switch(e){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function o0(e,t={}){let n=[];e.above&&n.push(`Below \`${e.above.label}\`${e.above.gap>0?` (${e.above.gap}px gap)`:""}`),e.below&&n.push(`Above \`${e.below.label}\`${e.below.gap>0?` (${e.below.gap}px gap)`:""}`),t.includeLeftRight&&(e.left&&n.push(`Right of \`${e.left.label}\`${e.left.gap>0?` (${e.left.gap}px gap)`:""}`),e.right&&n.push(`Left of \`${e.right.label}\`${e.right.gap>0?` (${e.right.gap}px gap)`:""}`));let o=n0(e.alignment);return e.containedIn?n.push(`${o.charAt(0).toUpperCase()+o.slice(1)} in \`${e.containedIn.label}\``):n.push(`${o.charAt(0).toUpperCase()+o.slice(1)} in page`),t.includePixelRef&&t.pixelRef&&n.push(`Pixel ref: \`${t.pixelRef}\``),e.outOfBounds&&(e.outOfBounds.viewport&&n.push(`**Outside viewport** (${e.outOfBounds.viewport.join(", ")} edge${e.outOfBounds.viewport.length>1?"s":""})`),e.outOfBounds.container&&n.push(`**Outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")} edge${e.outOfBounds.container.edges.length>1?"s":""})`)),n}function rv(e,t,n){let o=[];e.above&&o.push(`below \`${e.above.label}\``),e.below&&o.push(`above \`${e.below.label}\``),e.left&&o.push(`right of \`${e.left.label}\``),e.right&&o.push(`left of \`${e.right.label}\``),e.containedIn&&o.push(`inside \`${e.containedIn.label}\``),o.push(n0(e.alignment)),e.outOfBounds?.viewport&&o.push(`**outside viewport** (${e.outOfBounds.viewport.join(", ")})`),e.outOfBounds?.container&&o.push(`**outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")})`);let r=n?`, ${Math.round(n.width)}\xD7${Math.round(n.height)}px`:"";return`at (${Math.round(t.x)}, ${Math.round(t.y)})${r}: ${o.join(", ")}`}var N_=15;function P_(e){if(e.length<2)return[];let t=[],n=new Set;for(let o=0;o<e.length;o++){if(n.has(o))continue;let r=[o];for(let i=o+1;i<e.length;i++)n.has(i)||Math.abs(e[o].rect.y-e[i].rect.y)<N_&&r.push(i);if(r.length>=2){let i=r.map(l=>e[l]);i.sort((l,c)=>l.rect.x-c.rect.x);let s=[];for(let l=0;l<i.length-1;l++)s.push(Math.round(i[l+1].rect.x-(i[l].rect.x+i[l].rect.width)));let a=Math.round(i.reduce((l,c)=>l+c.rect.y,0)/i.length);t.push({labels:i.map(l=>l.label),type:"row",sharedEdge:a,gaps:s,avgGap:s.length?Math.round(s.reduce((l,c)=>l+c,0)/s.length):0}),r.forEach(l=>n.add(l))}}for(let o=0;o<e.length;o++){if(n.has(o))continue;let r=[o];for(let i=o+1;i<e.length;i++)n.has(i)||Math.abs(e[o].rect.x-e[i].rect.x)<N_&&r.push(i);if(r.length>=2){let i=r.map(l=>e[l]);i.sort((l,c)=>l.rect.y-c.rect.y);let s=[];for(let l=0;l<i.length-1;l++)s.push(Math.round(i[l+1].rect.y-(i[l].rect.y+i[l].rect.height)));let a=Math.round(i.reduce((l,c)=>l+c.rect.x,0)/i.length);t.push({labels:i.map(l=>l.label),type:"column",sharedEdge:a,gaps:s,avgGap:s.length?Math.round(s.reduce((l,c)=>l+c,0)/s.length):0}),r.forEach(l=>n.add(l))}}return t}function iv(e){if(e.length<2)return[];let t=P_(e.map(s=>({label:s.label,rect:s.originalRect}))),n=P_(e.map(s=>({label:s.label,rect:s.currentRect}))),o=[],r=new Set;for(let s of t){let a=new Set(s.labels),l=null,c=0;for(let d of n){let m=d.labels.filter(f=>a.has(f)).length;m>=2&&m>c&&(l=d,c=m)}if(l){let d=l.labels.filter(f=>a.has(f)),m=d.join(", ");if(l.type!==s.type){let f=s.type==="row"?"y":"x",b=l.type==="row"?"y":"x";o.push(`**${m}**: ${s.type} (${f}\u2248${s.sharedEdge}, ${s.avgGap}px gaps) \u2192 ${l.type} (${b}\u2248${l.sharedEdge}, ${l.avgGap}px gaps)`)}else if(Math.abs(s.sharedEdge-l.sharedEdge)>20||Math.abs(s.avgGap-l.avgGap)>5){let f=s.type==="row"?"y":"x",b=Math.abs(s.sharedEdge-l.sharedEdge)>20?` ${f}: ${s.sharedEdge} \u2192 ${l.sharedEdge}`:"",v=Math.abs(s.avgGap-l.avgGap)>5?` gaps: ${s.avgGap}px \u2192 ${l.avgGap}px`:"";o.push(`**${m}**: ${s.type} shifted \u2014${b}${v}`)}d.forEach(f=>r.add(f))}else{let d=s.labels.join(", "),m=s.type==="row"?"y":"x";o.push(`**${d}**: ${s.type} (${m}\u2248${s.sharedEdge}) dissolved`),s.labels.forEach(f=>r.add(f))}}for(let s of n){if(s.labels.every(c=>r.has(c))||s.labels.filter(c=>!r.has(c)).length<2)continue;if(!t.some(c=>c.labels.filter(m=>s.labels.includes(m)).length>=2)){let c=s.type==="row"?"y":"x";o.push(`**${s.labels.join(", ")}**: new ${s.type} (${c}\u2248${s.sharedEdge}, ${s.avgGap}px gaps)`),s.labels.forEach(d=>r.add(d))}}let i=e.filter(s=>!r.has(s.label));if(i.length>=2){let s={};for(let a of i){let l=Math.round(a.currentRect.x/5)*5;(s[l]??(s[l]=[])).push(a.label)}for(let[a,l]of Object.entries(s))l.length>=2&&o.push(`**${l.join(", ")}**: shared left edge at x\u2248${a}`)}return o}function r0(e){if(typeof document>"u")return{viewport:e,contentArea:null};let t=[],n=new Set,o=a=>{n.has(a)||a instanceof HTMLElement&&(a.hasAttribute("data-feedback-toolbar")||Rp.has(a.tagName.toLowerCase())||(n.add(a),t.push(a)))},r=document.querySelector("main");r&&o(r);let i=document.querySelector("[role='main']");i&&o(i);for(let a of Array.from(document.body.children))if(o(a),a.children){for(let l of Array.from(a.children))if(o(l),l.children)for(let c of Array.from(l.children))o(c)}let s=null;for(let a of t){let l=a.getBoundingClientRect();if(l.height<50)continue;let c=getComputedStyle(a);if(c.maxWidth&&c.maxWidth!=="none"&&c.maxWidth!=="0px"){(!s||l.width<s.rect.width)&&(s={el:a,rect:l});continue}!s&&l.width<e.width-20&&l.width>100&&(s={el:a,rect:l})}if(s){let{el:a,rect:l}=s;return{viewport:e,contentArea:{width:Math.round(l.width),left:Math.round(l.left),right:Math.round(l.right),centerX:Math.round(l.left+l.width/2),selector:Jr(a)}}}return{viewport:e,contentArea:null}}function sv(e){if(typeof document>"u")return null;let t=document.querySelector(e);if(!t?.parentElement)return null;let n=getComputedStyle(t.parentElement),o={parentDisplay:n.display,parentSelector:Jr(t.parentElement)};return n.display.includes("flex")&&(o.flexDirection=n.flexDirection),n.display.includes("grid")&&n.gridTemplateColumns!=="none"&&(o.gridCols=n.gridTemplateColumns),n.gap&&n.gap!=="normal"&&n.gap!=="0px"&&(o.gap=n.gap),o}function i0(e,t){let n=t.contentArea,o=n?n.width:t.viewport.width,r=n?n.left:0,i=n?n.centerX:Math.round(t.viewport.width/2),s=Math.round(e.x-r),a=Math.round(r+o-(e.x+e.width)),l=(e.width/o*100).toFixed(1),c=e.x+e.width/2,d=Math.abs(c-i)<20,m=e.width/o>.95,f=[];return m?f.push("`width: 100%` of container"):f.push(`left \`${s}px\` in container, right \`${a}px\`, width \`${l}%\` (\`${Math.round(e.width)}px\`)`),d&&!m&&f.push("centered \u2014 `margin-inline: auto`"),f.join(" \u2014 ")}function s0(e){let{viewport:t,contentArea:n}=e,o=`### Reference Frame
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
`,o}function av(e){let t=sv(e);if(!t)return null;let n=`\`${t.parentDisplay}\``;return t.flexDirection&&(n+=`, flex-direction: \`${t.flexDirection}\``),t.gridCols&&(n+=`, grid-template-columns: \`${t.gridCols}\``),t.gap&&(n+=`, gap: \`${t.gap}\``),`Parent: ${n} (\`${t.parentSelector}\`)`}function R_(e,t,n,o="standard"){if(e.length===0)return"";let r=[...e].sort((k,h)=>Math.abs(k.y-h.y)<20?k.x-h.x:k.y-h.y),i="";if(n?.blankCanvas?(i+=`## Wireframe: New Page

`,n.wireframePurpose&&(i+=`> **Purpose:** ${n.wireframePurpose}
>
`),i+=`> ${e.length} component${e.length!==1?"s":""} placed \u2014 this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):i+=`## Design Layout

> ${e.length} component${e.length!==1?"s":""} placed

`,o==="compact")return i+=`### Components
`,r.forEach((k,h)=>{let _=yo[k.type]?.label||k.type;i+=`${h+1}. **${_}** \u2014 \`${Math.round(k.width)}\xD7${Math.round(k.height)}px\` at \`(${Math.round(k.x)}, ${Math.round(k.y)})\`
`}),i;let s=r0(t);i+=s0(s),i+=`### Components
`,r.forEach((k,h)=>{let _=yo[k.type]?.label||k.type,S={x:k.x,y:k.y,width:k.width,height:k.height};i+=`${h+1}. **${_}** \u2014 \`${Math.round(k.width)}\xD7${Math.round(k.height)}px\` at \`(${Math.round(k.x)}, ${Math.round(k.y)})\`
`;let D=Dp(S),q=o0(D,{includeLeftRight:o==="detailed"||o==="forensic"});for(let ie of q)i+=`   - ${ie}
`;let O=i0(S,s);O&&(i+=`   - CSS: ${O}
`)}),i+=`
### Layout Analysis
`;let a=[];for(let k of r){let h=a.find(_=>Math.abs(_.y-k.y)<30);h?h.items.push(k):a.push({y:k.y,items:[k]})}if(a.sort((k,h)=>k.y-h.y),a.forEach((k,h)=>{k.items.sort((S,D)=>S.x-D.x);let _=k.items.map(S=>yo[S.type]?.label||S.type);if(k.items.length===1){let D=k.items[0].width>t.width*.8;i+=`- Row ${h+1} (y\u2248${Math.round(k.y)}): ${_[0]}${D?" \u2014 full width":""}
`}else i+=`- Row ${h+1} (y\u2248${Math.round(k.y)}): ${_.join(" | ")} \u2014 ${k.items.length} items side by side
`}),o==="detailed"||o==="forensic"){i+=`
### Spacing & Gaps
`;for(let k=0;k<r.length-1;k++){let h=r[k],_=r[k+1],S=yo[h.type]?.label||h.type,D=yo[_.type]?.label||_.type,Z=Math.round(_.y-(h.y+h.height)),q=Math.round(_.x-(h.x+h.width));Math.abs(h.y-_.y)<30?i+=`- ${S} \u2192 ${D}: \`${q}px\` horizontal gap
`:i+=`- ${S} \u2192 ${D}: \`${Z}px\` vertical gap
`}if(o==="forensic"&&r.length>2){i+=`
### All Pairwise Gaps
`;for(let k=0;k<r.length;k++)for(let h=k+1;h<r.length;h++){let _=r[k],S=r[h],D=yo[_.type]?.label||_.type,Z=yo[S.type]?.label||S.type,q=Math.round(S.y-(_.y+_.height)),O=Math.round(S.x-(_.x+_.width));i+=`- ${D} \u2194 ${Z}: h=\`${O}px\` v=\`${q}px\`
`}}o==="forensic"&&(i+=`
### Z-Order (placement order)
`,e.forEach((k,h)=>{let _=yo[k.type]?.label||k.type;i+=`${h}. ${_} at \`(${Math.round(k.x)}, ${Math.round(k.y)})\`
`}))}i+=`
### Suggested Implementation
`;let l=r.some(k=>k.type==="navigation"),c=r.some(k=>k.type==="hero"),d=r.some(k=>k.type==="sidebar"),m=r.some(k=>k.type==="footer"),f=r.filter(k=>k.type==="card"),b=r.filter(k=>k.type==="form"),v=r.filter(k=>k.type==="table"),P=r.filter(k=>k.type==="modal");if(l&&(i+=`- Top navigation bar with logo + nav links + CTA
`),c&&(i+=`- Hero section with heading, subtext, and call-to-action
`),d&&(i+=`- Sidebar layout \u2014 use CSS Grid with sidebar + main content area
`),f.length>1?i+=`- ${f.length}-column card grid \u2014 use CSS Grid or Flexbox
`:f.length===1&&(i+=`- Card component with image + content area
`),b.length>0&&(i+=`- ${b.length} form${b.length>1?"s":""} \u2014 add proper labels, validation, and submit handling
`),v.length>0&&(i+=`- Data table \u2014 consider sortable columns and pagination
`),P.length>0&&(i+=`- Modal dialog \u2014 add overlay backdrop and focus trapping
`),m&&(i+=`- Multi-column footer with links
`),o==="detailed"||o==="forensic"){if(i+=`
### CSS Suggestions
`,d){let k=r.find(h=>h.type==="sidebar");i+=`- \`display: grid; grid-template-columns: ${Math.round(k.width)}px 1fr;\`
`}if(f.length>1){let k=Math.round(f[0].width);i+=`- \`display: grid; grid-template-columns: repeat(${f.length}, ${k}px); gap: 16px;\`
`}l&&(i+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return i}function D_(e,t="standard",n){let{sections:o}=e,r=[];for(let d of o){let m=d.originalRect,f=d.currentRect,b=Math.abs(m.x-f.x)>1||Math.abs(m.y-f.y)>1,v=Math.abs(m.width-f.width)>1||Math.abs(m.height-f.height)>1;if(!b&&!v){t==="forensic"&&r.push({section:d,posMoved:!1,sizeChanged:!1});continue}r.push({section:d,posMoved:b,sizeChanged:v})}if(r.length===0||t!=="forensic"&&r.every(d=>!d.posMoved&&!d.sizeChanged))return"";let i=`## Suggested Layout Changes

`,s=n?n.width:typeof window<"u"?window.innerWidth:0,a=n?n.height:typeof window<"u"?window.innerHeight:0,l=r0({width:s,height:a});t!=="compact"&&(i+=s0(l)),t==="forensic"&&(i+=`> Detected at: \`${new Date(e.detectedAt).toISOString()}\`
`,i+=`> Total sections: ${o.length}

`);let c=d=>o.map(m=>({label:m.label,selector:m.selector,rect:d==="original"?m.originalRect:m.currentRect}));i+=`**Changes:**
`;for(let{section:d,posMoved:m,sizeChanged:f}of r){let b=d.originalRect,v=d.currentRect;if(!m&&!f){i+=`- ${d.label} \u2014 unchanged at (${Math.round(v.x)}, ${Math.round(v.y)}) ${Math.round(v.width)}\xD7${Math.round(v.height)}px
`;continue}if(t==="compact"){m&&f?i+=`- Suggested: move **${d.label}** to (${Math.round(v.x)}, ${Math.round(v.y)}) ${Math.round(v.width)}\xD7${Math.round(v.height)}px
`:m?i+=`- Suggested: move **${d.label}** to (${Math.round(v.x)}, ${Math.round(v.y)})
`:i+=`- Suggested: resize **${d.label}** to ${Math.round(v.width)}\xD7${Math.round(v.height)}px
`;continue}if(m&&f?i+=`- Suggested: move and resize **${d.label}**
`:m?i+=`- Suggested: move **${d.label}**
`:i+=`- Suggested: resize **${d.label}** from ${Math.round(b.width)}\xD7${Math.round(b.height)}px to ${Math.round(v.width)}\xD7${Math.round(v.height)}px
`,m){let k=Dp(b,c("original")),h=Dp(v,c("current")),_=f?{width:b.width,height:b.height}:void 0;i+=`  - Currently ${rv(k,{x:b.x,y:b.y},_)}
`;let S=f?{width:v.width,height:v.height}:void 0,D=`at (${Math.round(v.x)}, ${Math.round(v.y)})`,Z=S?`, ${Math.round(S.width)}\xD7${Math.round(S.height)}px`:"",O=o0(h,{includeLeftRight:t==="detailed"||t==="forensic"});if(O.length>0){i+=`  - Suggested position ${D}${Z}: ${O[0]}
`;for(let xe=1;xe<O.length;xe++)i+=`    ${O[xe]}
`}else i+=`  - Suggested position ${D}${Z}
`;let ie=i0(v,l);ie&&(i+=`  - CSS: ${ie}
`)}let P=av(d.selector);if(P&&(i+=`  - ${P}
`),i+=`  - Selector: \`${d.selector}\`
`,t==="detailed"||t==="forensic"){let k=d.className?`${d.tagName}.${d.className.split(" ")[0]}`:d.tagName;k!==d.selector&&(i+=`  - Element: \`${k}\`
`),d.role&&(i+=`  - Role: \`${d.role}\`
`),t==="forensic"&&d.textSnippet&&(i+=`  - Text: "${d.textSnippet}"
`)}t==="forensic"&&(i+=`  - Original rect: \`{ x: ${Math.round(b.x)}, y: ${Math.round(b.y)}, w: ${Math.round(b.width)}, h: ${Math.round(b.height)} }\`
`,i+=`  - Current rect: \`{ x: ${Math.round(v.x)}, y: ${Math.round(v.y)}, w: ${Math.round(v.width)}, h: ${Math.round(v.height)} }\`
`)}if(t!=="compact"){let d=r.filter(f=>f.posMoved).map(f=>({label:f.section.label,originalRect:f.section.originalRect,currentRect:f.section.currentRect})),m=iv(d);if(m.length>0){i+=`
### Layout Summary
`;for(let f of m)i+=`- ${f}
`}}if(t!=="compact"&&o.length>1){i+=`
### All Sections (current positions)
`;let d=[...o].sort((m,f)=>Math.abs(m.currentRect.y-f.currentRect.y)<20?m.currentRect.x-f.currentRect.x:m.currentRect.y-f.currentRect.y);for(let m of d){let f=m.currentRect,b=Math.abs(f.x-m.originalRect.x)>1||Math.abs(f.y-m.originalRect.y)>1||Math.abs(f.width-m.originalRect.width)>1||Math.abs(f.height-m.originalRect.height)>1;i+=`- ${m.label}: \`${Math.round(f.width)}\xD7${Math.round(f.height)}px\` at \`(${Math.round(f.x)}, ${Math.round(f.y)})\`${b?" \u2190 suggested":""}
`}}return i}var Ap="feedback-annotations-",a0=7;function yc(e){return`${Ap}${e}`}function Xo(e){if(typeof window>"u")return[];try{let t=localStorage.getItem(yc(e));if(!t)return[];let n=JSON.parse(t),o=Date.now()-a0*24*60*60*1e3;return n.filter(r=>!r.timestamp||r.timestamp>o)}catch{return[]}}function wr(e,t){if(!(typeof window>"u"))try{localStorage.setItem(yc(e),JSON.stringify(t))}catch{}}function lv(){let e=new Map;if(typeof window>"u")return e;try{let t=Date.now()-a0*24*60*60*1e3;for(let n=0;n<localStorage.length;n++){let o=localStorage.key(n);if(o?.startsWith(Ap)){let r=o.slice(Ap.length),i=localStorage.getItem(o);if(i){let a=JSON.parse(i).filter(l=>!l.timestamp||l.timestamp>t);a.length>0&&e.set(r,a)}}}}catch{}return e}function sa(e,t,n){let o=t.map(r=>({...r,_syncedTo:n}));wr(e,o)}var Fp="agentation-design-";function cv(e){if(typeof window>"u")return[];try{let t=localStorage.getItem(`${Fp}${e}`);return t?JSON.parse(t):[]}catch{return[]}}function dv(e,t){if(!(typeof window>"u"))try{localStorage.setItem(`${Fp}${e}`,JSON.stringify(t))}catch{}}function uv(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${Fp}${e}`)}catch{}}var Wp="agentation-rearrange-";function pv(e){if(typeof window>"u")return null;try{let t=localStorage.getItem(`${Wp}${e}`);return t?JSON.parse(t):null}catch{return null}}function fv(e,t){if(!(typeof window>"u"))try{localStorage.setItem(`${Wp}${e}`,JSON.stringify(t))}catch{}}function hv(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${Wp}${e}`)}catch{}}var Hp="agentation-wireframe-";function mv(e){if(typeof window>"u")return null;try{let t=localStorage.getItem(`${Hp}${e}`);return t?JSON.parse(t):null}catch{return null}}function A_(e,t){if(!(typeof window>"u"))try{localStorage.setItem(`${Hp}${e}`,JSON.stringify(t))}catch{}}function pc(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${Hp}${e}`)}catch{}}var l0="agentation-session-";function jp(e){return`${l0}${e}`}function gv(e){if(typeof window>"u")return null;try{return localStorage.getItem(jp(e))}catch{return null}}function kp(e,t){if(!(typeof window>"u"))try{localStorage.setItem(jp(e),t)}catch{}}function _v(e){if(!(typeof window>"u"))try{localStorage.removeItem(jp(e))}catch{}}var Bp=`${l0}toolbar-hidden`;function yv(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(Bp)==="1"}catch{return!1}}function xv(e){if(!(typeof window>"u"))try{e?sessionStorage.setItem(Bp,"1"):sessionStorage.removeItem(Bp)}catch{}}async function Cp(e,t){let n=await fetch(`${e}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})});if(!n.ok)throw new Error(`Failed to create session: ${n.status}`);return n.json()}async function B_(e,t){let n=await fetch(`${e}/sessions/${t}`);if(!n.ok)throw new Error(`Failed to get session: ${n.status}`);return n.json()}async function Ui(e,t,n){let o=await fetch(`${e}/sessions/${t}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!o.ok)throw new Error(`Failed to sync annotation: ${o.status}`);return o.json()}async function O_(e,t,n){let o=await fetch(`${e}/annotations/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!o.ok)throw new Error(`Failed to update annotation: ${o.status}`);return o.json()}async function xr(e,t){let n=await fetch(`${e}/annotations/${t}`,{method:"DELETE"});if(!n.ok)throw new Error(`Failed to delete annotation: ${n.status}`)}var dt={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},z_=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),F_=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],wv=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function vv(e){let t=e?.mode??"filtered",n=z_;if(e?.skipExact){let o=e.skipExact instanceof Set?e.skipExact:new Set(e.skipExact);n=new Set([...z_,...o])}return{maxComponents:e?.maxComponents??6,maxDepth:e?.maxDepth??30,mode:t,skipExact:n,skipPatterns:e?.skipPatterns?[...F_,...e.skipPatterns]:F_,userPatterns:e?.userPatterns??wv,filter:e?.filter}}function bv(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function kv(e,t=10){let n=new Set,o=e,r=0;for(;o&&r<t;)o.className&&typeof o.className=="string"&&o.className.split(/\s+/).forEach(i=>{if(i.length>1){let s=i.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();s.length>1&&n.add(s)}}),o=o.parentElement,r++;return n}function Cv(e,t){let n=bv(e);for(let o of t){if(o===n)return!0;let r=n.split("-").filter(s=>s.length>2),i=o.split("-").filter(s=>s.length>2);for(let s of r)for(let a of i)if(s===a||s.includes(a)||a.includes(s))return!0}return!1}function Sv(e,t,n,o){if(n.filter)return n.filter(e,t);switch(n.mode){case"all":return!0;case"filtered":return!(n.skipExact.has(e)||n.skipPatterns.some(r=>r.test(e)));case"smart":return n.skipExact.has(e)||n.skipPatterns.some(r=>r.test(e))?!1:!!(o&&Cv(e,o)||n.userPatterns.some(r=>r.test(e)));default:return!0}}var Yi=null,Ev=new WeakMap;function Sp(e){return Object.keys(e).some(t=>t.startsWith("__reactFiber$")||t.startsWith("__reactInternalInstance$")||t.startsWith("__reactProps$"))}function Mv(){if(Yi!==null)return Yi;if(typeof document>"u")return!1;if(document.body&&Sp(document.body))return Yi=!0,!0;let e=["#root","#app","#__next","[data-reactroot]"];for(let t of e){let n=document.querySelector(t);if(n&&Sp(n))return Yi=!0,!0}if(document.body){for(let t of document.body.children)if(Sp(t))return Yi=!0,!0}return Yi=!1,!1}var aa={map:Ev};function Lv(e){return Object.keys(e).find(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$"))||null}function Tv(e){let t=Lv(e);return t?e[t]:null}function Qr(e){return e?e.displayName?e.displayName:e.name?e.name:null:null}function $v(e){let{tag:t,type:n,elementType:o}=e;if(t===dt.HostComponent||t===dt.HostText||t===dt.HostHoistable||t===dt.HostSingleton||t===dt.Fragment||t===dt.Mode||t===dt.Profiler||t===dt.DehydratedFragment||t===dt.HostRoot||t===dt.HostPortal||t===dt.ScopeComponent||t===dt.OffscreenComponent||t===dt.LegacyHiddenComponent||t===dt.CacheComponent||t===dt.TracingMarkerComponent||t===dt.Throw||t===dt.ViewTransitionComponent||t===dt.ActivityComponent)return null;if(t===dt.ForwardRef){let r=o;if(r?.render){let i=Qr(r.render);if(i)return i}return r?.displayName?r.displayName:Qr(n)}if(t===dt.MemoComponent||t===dt.SimpleMemoComponent){let r=o;if(r?.type){let i=Qr(r.type);if(i)return i}return r?.displayName?r.displayName:Qr(n)}if(t===dt.ContextProvider){let r=n;return r?._context?.displayName?`${r._context.displayName}.Provider`:null}if(t===dt.ContextConsumer){let r=n;return r?.displayName?`${r.displayName}.Consumer`:null}if(t===dt.LazyComponent){let r=o;return r?._status===1&&r._result?Qr(r._result):null}return t===dt.SuspenseComponent||t===dt.SuspenseListComponent?null:t===dt.IncompleteClassComponent||t===dt.IncompleteFunctionComponent||t===dt.FunctionComponent||t===dt.ClassComponent||t===dt.IndeterminateComponent?Qr(n):null}function Iv(e){return e.length<=2||e.length<=3&&e===e.toLowerCase()}function Nv(e,t){let n=vv(t),o=n.mode==="all";if(o){let l=aa.map.get(e);if(l!==void 0)return l}if(!Mv()){let l={path:null,components:[]};return o&&aa.map.set(e,l),l}let r=n.mode==="smart"?kv(e):void 0,i=[];try{let l=Tv(e),c=0;for(;l&&c<n.maxDepth&&i.length<n.maxComponents;){let d=$v(l);d&&!Iv(d)&&Sv(d,c,n,r)&&i.push(d),l=l.return,c++}}catch{let l={path:null,components:[]};return o&&aa.map.set(e,l),l}if(i.length===0){let l={path:null,components:[]};return o&&aa.map.set(e,l),l}let a={path:i.slice().reverse().map(l=>`<${l}>`).join(" "),components:i};return o&&aa.map.set(e,a),a}var la={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16};function Pv(e){if(!e||typeof e!="object")return null;let t=Object.keys(e),n=t.find(i=>i.startsWith("__reactFiber$"));if(n)return e[n]||null;let o=t.find(i=>i.startsWith("__reactInternalInstance$"));if(o)return e[o]||null;let r=t.find(i=>{if(!i.startsWith("__react"))return!1;let s=e[i];return s&&typeof s=="object"&&"_debugSource"in s});return r&&e[r]||null}function ua(e){if(!e.type||typeof e.type=="string")return null;if(typeof e.type=="object"||typeof e.type=="function"){let t=e.type;if(t.displayName)return t.displayName;if(t.name)return t.name}return null}function Rv(e,t=50){let n=e,o=0;for(;n&&o<t;){if(n._debugSource)return{source:n._debugSource,componentName:ua(n)};if(n._debugOwner?._debugSource)return{source:n._debugOwner._debugSource,componentName:ua(n._debugOwner)};n=n.return,o++}return null}function Dv(e){let t=e,n=0,o=50;for(;t&&n<o;){let r=t,i=["_debugSource","__source","_source","debugSource"];for(let s of i){let a=r[s];if(a&&typeof a=="object"&&"fileName"in a)return{source:a,componentName:ua(t)}}if(t.memoizedProps){let s=t.memoizedProps;if(s.__source&&typeof s.__source=="object"){let a=s.__source;if(a.fileName&&a.lineNumber)return{source:{fileName:a.fileName,lineNumber:a.lineNumber,columnNumber:a.columnNumber},componentName:ua(t)}}}t=t.return,n++}return null}var fc=new Map;function Av(e){let t=e.tag,n=e.type,o=e.elementType;if(typeof n=="string"||n==null||typeof n=="function"&&n.prototype?.isReactComponent)return null;if((t===la.FunctionComponent||t===la.IndeterminateComponent)&&typeof n=="function")return n;if(t===la.ForwardRef&&o){let r=o.render;if(typeof r=="function")return r}if((t===la.MemoComponent||t===la.SimpleMemoComponent)&&o){let r=o.type;if(typeof r=="function")return r}return typeof n=="function"?n:null}function Bv(){let e=c0.default,t=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(t&&"H"in t)return{get:()=>t.H,set:o=>{t.H=o}};let n=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(n){let o=n.ReactCurrentDispatcher;if(o&&"current"in o)return{get:()=>o.current,set:r=>{o.current=r}}}return null}function Ov(e){let t=e.split(`
`),n=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],o=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,r=/^[^@]*@(.+?):(\d+):(\d+)$/;for(let i of t){let s=i.trim();if(!s||n.some(l=>l.test(s)))continue;let a=o.exec(s)||r.exec(s);if(a)return{fileName:a[1],line:parseInt(a[2],10),column:parseInt(a[3],10)}}return null}function zv(e){let t=e;return t=t.replace(/[?#].*$/,""),t=t.replace(/^turbopack:\/\/\/\[project\]\//,""),t=t.replace(/^webpack-internal:\/\/\/\.\//,""),t=t.replace(/^webpack-internal:\/\/\//,""),t=t.replace(/^webpack:\/\/\/\.\//,""),t=t.replace(/^webpack:\/\/\//,""),t=t.replace(/^turbopack:\/\/\//,""),t=t.replace(/^https?:\/\/[^/]+\//,""),t=t.replace(/^file:\/\/\//,"/"),t=t.replace(/^\([^)]+\)\/\.\//,""),t=t.replace(/^\.\//,""),t}function Fv(e){let t=Av(e);if(!t)return null;if(fc.has(t))return fc.get(t);let n=Bv();if(!n)return fc.set(t,null),null;let o=n.get(),r=null;try{let i=new Proxy({},{get(){throw new Error("probe")}});n.set(i);try{t({})}catch(s){if(s instanceof Error&&s.message==="probe"&&s.stack){let a=Ov(s.stack);a&&(r={fileName:zv(a.fileName),lineNumber:a.line,columnNumber:a.column,componentName:ua(e)||void 0})}}}finally{n.set(o)}return fc.set(t,r),r}function Wv(e,t=15){let n=e,o=0;for(;n&&o<t;){let r=Fv(n);if(r)return r;n=n.return,o++}return null}function Op(e){let t=Pv(e);if(!t)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let n=Rv(t);if(n||(n=Dv(t)),n?.source)return{found:!0,source:{fileName:n.source.fileName,lineNumber:n.source.lineNumber,columnNumber:n.source.columnNumber,componentName:n.componentName||void 0},isReactApp:!0,isProduction:!1};let o=Wv(t);return o?{found:!0,source:o,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function Hv(e,t="path"){let{fileName:n,lineNumber:o,columnNumber:r}=e,i=`${n}:${o}`;return r!==void 0&&(i+=`:${r}`),t==="vscode"?`vscode://file${n.startsWith("/")?"":"/"}${i}`:i}function jv(e,t=10){let n=e,o=0;for(;n&&o<t;){let r=Op(n);if(r.found)return r;n=n.parentElement,o++}return Op(e)}var Uv=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,Yv={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(e)),e.textContent=Uv}var re=Yv,ca=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function W_(e,t,n="standard"){if(e.length===0)return"";let o=typeof window<"u"?`${window.innerWidth}\xD7${window.innerHeight}`:"unknown",r=`## Page Feedback: ${t}
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
`,e.forEach((i,s)=>{n==="compact"?(r+=`${s+1}. **${i.element}**${i.sourceFile?` (${i.sourceFile})`:""}: ${i.comment}`,i.selectedText&&(r+=` (re: "${i.selectedText.slice(0,30)}${i.selectedText.length>30?"...":""}")`),r+=`
`):n==="forensic"?(r+=`### ${s+1}. ${i.element}
`,i.isMultiSelect&&i.fullPath&&(r+=`*Forensic data shown for first element of selection*
`),i.fullPath&&(r+=`**Full DOM Path:** ${i.fullPath}
`),i.cssClasses&&(r+=`**CSS Classes:** ${i.cssClasses}
`),i.boundingBox&&(r+=`**Position:** x:${Math.round(i.boundingBox.x)}, y:${Math.round(i.boundingBox.y)} (${Math.round(i.boundingBox.width)}\xD7${Math.round(i.boundingBox.height)}px)
`),r+=`**Annotation at:** ${i.x.toFixed(1)}% from left, ${Math.round(i.y)}px from top
`,i.selectedText&&(r+=`**Selected text:** "${i.selectedText}"
`),i.nearbyText&&!i.selectedText&&(r+=`**Context:** ${i.nearbyText.slice(0,100)}
`),i.computedStyles&&(r+=`**Computed Styles:** ${i.computedStyles}
`),i.accessibility&&(r+=`**Accessibility:** ${i.accessibility}
`),i.nearbyElements&&(r+=`**Nearby Elements:** ${i.nearbyElements}
`),i.sourceFile&&(r+=`**Source:** ${i.sourceFile}
`),i.reactComponents&&(r+=`**React:** ${i.reactComponents}
`),r+=`**Feedback:** ${i.comment}

`):(r+=`### ${s+1}. ${i.element}
`,r+=`**Location:** ${i.elementPath}
`,i.sourceFile&&(r+=`**Source:** ${i.sourceFile}
`),i.reactComponents&&(r+=`**React:** ${i.reactComponents}
`),n==="detailed"&&(i.cssClasses&&(r+=`**Classes:** ${i.cssClasses}
`),i.boundingBox&&(r+=`**Position:** ${Math.round(i.boundingBox.x)}px, ${Math.round(i.boundingBox.y)}px (${Math.round(i.boundingBox.width)}\xD7${Math.round(i.boundingBox.height)}px)
`)),i.selectedText&&(r+=`**Selected text:** "${i.selectedText}"
`),n==="detailed"&&i.nearbyText&&!i.selectedText&&(r+=`**Context:** ${i.nearbyText.slice(0,100)}
`),r+=`**Feedback:** ${i.comment}

`)}),r.trim()}var Vv=`@keyframes styles-module__markerIn___x4G8D {
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
}`,Xv={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",markerIn:"styles-module__markerIn___x4G8D",markerOut:"styles-module__markerOut___6VhQN",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",renumberRoll:"styles-module__renumberRoll___akV9B",markerTooltip:"styles-module__markerTooltip___-VUm-",tooltipIn:"styles-module__tooltipIn___aJslQ",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-annotation-marker-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(e)),e.textContent=Vv}var Qt=Xv;function H_({annotation:e,globalIndex:t,layerIndex:n,layerSize:o,isExiting:r,isClearing:i,isAnimated:s,isHovered:a,isDeleting:l,isEditingAny:c,renumberFrom:d,markerClickBehavior:m,tooltipStyle:f,onHoverEnter:b,onHoverLeave:v,onClick:P,onContextMenu:k}){let h=(a||l)&&!c,_=h&&m==="delete",S=e.isMultiSelect,D=S?"var(--agentation-color-green)":"var(--agentation-color-accent)",Z=r?Qt.exit:i?Qt.clearing:s?"":Qt.enter,q=r?`${(o-1-n)*20}ms`:`${n*20}ms`;return(0,jn.jsxs)("div",{className:`${Qt.marker} ${S?Qt.multiSelect:""} ${Z} ${_?Qt.hovered:""}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y,backgroundColor:_?void 0:D,animationDelay:q},onMouseEnter:()=>b(e),onMouseLeave:v,onClick:O=>{O.stopPropagation(),r||P(e)},onContextMenu:k?O=>{m==="delete"&&(O.preventDefault(),O.stopPropagation(),r||k(e))}:void 0,children:[h?_?(0,jn.jsx)(Q_,{size:S?18:16}):(0,jn.jsx)(zp,{size:16}):(0,jn.jsx)("span",{className:d!==null&&t>=d?Qt.renumber:void 0,children:t+1}),a&&!c&&(0,jn.jsxs)("div",{className:`${Qt.markerTooltip} ${Qt.enter}`,style:f,children:[(0,jn.jsxs)("span",{className:Qt.markerQuote,children:[e.element,e.selectedText&&` "${e.selectedText.slice(0,30)}${e.selectedText.length>30?"...":""}"`]}),(0,jn.jsx)("span",{className:Qt.markerNote,children:e.comment})]})]})}function Qv({x:e,y:t,isMultiSelect:n,isExiting:o}){return(0,jn.jsx)("div",{className:`${Qt.marker} ${Qt.pending} ${n?Qt.multiSelect:""} ${o?Qt.exit:Qt.enter}`,style:{left:`${e}%`,top:t,backgroundColor:n?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:(0,jn.jsx)(K2,{size:12})})}function j_({annotation:e,fixed:t}){let n=e.isMultiSelect;return(0,jn.jsx)("div",{className:`${Qt.marker} ${t?Qt.fixed:""} ${Qt.hovered} ${n?Qt.multiSelect:""} ${Qt.exit}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y},children:(0,jn.jsx)(Q_,{size:n?12:10})})}var Kv=`.styles-module__switchContainer___Ka-AB {
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
}`,qv={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-switch-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-switch-styles",document.head.appendChild(e)),e.textContent=Kv}var Ep=qv,Mp=({className:e="",...t})=>(0,pa.jsxs)("div",{className:`${Ep.switchContainer} ${e}`,children:[(0,pa.jsx)("input",{className:Ep.switchInput,type:"checkbox",...t}),(0,pa.jsx)("div",{className:Ep.switchThumb})]}),Gv=`.styles-module__checkboxContainer___joqZk {
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
}`,Zv={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-checkbox-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(e)),e.textContent=Gv}var hc=Zv,Jv=({className:e="",...t})=>(0,Qi.jsxs)("div",{className:`${hc.checkboxContainer} ${e}`,children:[(0,Qi.jsx)("input",{className:hc.checkboxInput,type:"checkbox",...t}),(0,Qi.jsx)("svg",{className:hc.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,Qi.jsx)("path",{className:hc.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),eb=`.styles-module__container___w8eAF {
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
}`,tb={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-checkbox-field-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(e)),e.textContent=eb}var U_=tb,Y_=({className:e="",label:t,tooltip:n,checked:o,onChange:r,...i})=>{let s=(0,d0.useId)();return(0,Ki.jsxs)("div",{className:`${U_.container} ${e}`,...i,children:[(0,Ki.jsx)(Jv,{id:s,onChange:r,checked:o}),(0,Ki.jsx)("label",{className:U_.label,htmlFor:s,children:t}),n&&(0,Ki.jsx)(Gr,{content:n})]})},nb=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,ob={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-settings-panel-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(e)),e.textContent=nb}var Ne=ob;function rb({settings:e,onSettingsChange:t,isDarkMode:n,onToggleTheme:o,isDevMode:r,connectionStatus:i,endpoint:s,isVisible:a,toolbarNearBottom:l,settingsPage:c,onSettingsPageChange:d,onHideToolbar:m}){return(0,Se.jsx)("div",{className:`${Ne.settingsPanel} ${a?Ne.enter:Ne.exit}`,style:l?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:(0,Se.jsxs)("div",{className:Ne.settingsPanelContainer,children:[(0,Se.jsxs)("div",{className:`${Ne.settingsPage} ${c==="automations"?Ne.slideLeft:""}`,children:[(0,Se.jsxs)("div",{className:Ne.settingsHeader,children:[(0,Se.jsx)("a",{className:Ne.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:(0,Se.jsx)("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Se.jsx)("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),(0,Se.jsxs)("p",{className:Ne.settingsVersion,children:["v","3.0.2"]}),(0,Se.jsx)("button",{className:Ne.themeToggle,onClick:o,title:n?"Switch to light mode":"Switch to dark mode",children:(0,Se.jsx)("span",{className:Ne.themeIconWrapper,children:(0,Se.jsx)("span",{className:Ne.themeIcon,children:n?(0,Se.jsx)(ix,{size:20}):(0,Se.jsx)(sx,{size:20})},n?"sun":"moon")})})]}),(0,Se.jsx)("div",{className:Ne.divider}),(0,Se.jsxs)("div",{className:Ne.settingsSection,children:[(0,Se.jsxs)("div",{className:Ne.settingsRow,children:[(0,Se.jsxs)("div",{className:Ne.settingsLabel,children:["Output Detail",(0,Se.jsx)(Gr,{content:"Controls how much detail is included in the copied output"})]}),(0,Se.jsxs)("button",{className:Ne.cycleButton,onClick:()=>{let b=(ca.findIndex(v=>v.value===e.outputDetail)+1)%ca.length;t({outputDetail:ca[b].value})},children:[(0,Se.jsx)("span",{className:Ne.cycleButtonText,children:ca.find(f=>f.value===e.outputDetail)?.label},e.outputDetail),(0,Se.jsx)("span",{className:Ne.cycleDots,children:ca.map(f=>(0,Se.jsx)("span",{className:`${Ne.cycleDot} ${e.outputDetail===f.value?Ne.active:""}`},f.value))})]})]}),(0,Se.jsxs)("div",{className:`${Ne.settingsRow} ${Ne.settingsRowMarginTop} ${r?"":Ne.settingsRowDisabled}`,children:[(0,Se.jsxs)("div",{className:Ne.settingsLabel,children:["React Components",(0,Se.jsx)(Gr,{content:r?"Include React component names in annotations":"Disabled \u2014 production builds minify component names, making detection unreliable. Use in development mode."})]}),(0,Se.jsx)(Mp,{checked:r&&e.reactEnabled,onChange:f=>t({reactEnabled:f.target.checked}),disabled:!r})]}),(0,Se.jsxs)("div",{className:`${Ne.settingsRow} ${Ne.settingsRowMarginTop}`,children:[(0,Se.jsxs)("div",{className:Ne.settingsLabel,children:["Hide Until Restart",(0,Se.jsx)(Gr,{content:"Hides the toolbar until you open a new tab"})]}),(0,Se.jsx)(Mp,{checked:!1,onChange:f=>{f.target.checked&&m()}})]})]}),(0,Se.jsx)("div",{className:Ne.divider}),(0,Se.jsxs)("div",{className:Ne.settingsSection,children:[(0,Se.jsx)("div",{className:`${Ne.settingsLabel} ${Ne.settingsLabelMarker}`,children:"Marker Color"}),(0,Se.jsx)("div",{className:Ne.colorOptions,children:da.map(f=>(0,Se.jsx)("button",{className:`${Ne.colorOption} ${e.annotationColorId===f.id?Ne.selected:""}`,style:{"--swatch":f.srgb,"--swatch-p3":f.p3},onClick:()=>t({annotationColorId:f.id}),title:f.label,type:"button"},f.id))})]}),(0,Se.jsx)("div",{className:Ne.divider}),(0,Se.jsxs)("div",{className:Ne.settingsSection,children:[(0,Se.jsx)(Y_,{className:"checkbox-field",label:"Clear on copy/send",checked:e.autoClearAfterCopy,onChange:f=>t({autoClearAfterCopy:f.target.checked}),tooltip:"Automatically clear annotations after copying"}),(0,Se.jsx)(Y_,{className:Ne.checkboxField,label:"Block page interactions",checked:e.blockInteractions,onChange:f=>t({blockInteractions:f.target.checked})})]}),(0,Se.jsx)("div",{className:Ne.divider}),(0,Se.jsxs)("button",{className:Ne.settingsNavLink,onClick:()=>d("automations"),children:[(0,Se.jsx)("span",{children:"Manage MCP & Webhooks"}),(0,Se.jsxs)("span",{className:Ne.settingsNavLinkRight,children:[s&&i!=="disconnected"&&(0,Se.jsx)("span",{className:`${Ne.mcpNavIndicator} ${Ne[i]}`}),(0,Se.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Se.jsx)("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),(0,Se.jsxs)("div",{className:`${Ne.settingsPage} ${Ne.automationsPage} ${c==="automations"?Ne.slideIn:""}`,children:[(0,Se.jsxs)("button",{className:Ne.settingsBackButton,onClick:()=>d("main"),children:[(0,Se.jsx)(lx,{size:16}),(0,Se.jsx)("span",{children:"Manage MCP & Webhooks"})]}),(0,Se.jsx)("div",{className:Ne.divider}),(0,Se.jsxs)("div",{className:Ne.settingsSection,children:[(0,Se.jsxs)("div",{className:Ne.settingsRow,children:[(0,Se.jsxs)("span",{className:Ne.automationHeader,children:["MCP Connection",(0,Se.jsx)(Gr,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),s&&(0,Se.jsx)("div",{className:`${Ne.mcpStatusDot} ${Ne[i]}`,title:i==="connected"?"Connected":i==="connecting"?"Connecting...":"Disconnected"})]}),(0,Se.jsxs)("p",{className:Ne.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",(0,Se.jsx)("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:Ne.learnMoreLink,children:"Learn more"})]})]}),(0,Se.jsx)("div",{className:Ne.divider}),(0,Se.jsxs)("div",{className:`${Ne.settingsSection} ${Ne.settingsSectionGrow}`,children:[(0,Se.jsxs)("div",{className:Ne.settingsRow,children:[(0,Se.jsxs)("span",{className:Ne.automationHeader,children:["Webhooks",(0,Se.jsx)(Gr,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),(0,Se.jsxs)("div",{className:Ne.autoSendContainer,children:[(0,Se.jsx)("label",{htmlFor:"agentation-auto-send",className:`${Ne.autoSendLabel} ${e.webhooksEnabled?Ne.active:""} ${e.webhookUrl?"":Ne.disabled}`,children:"Auto-Send"}),(0,Se.jsx)(Mp,{id:"agentation-auto-send",checked:e.webhooksEnabled,onChange:f=>t({webhooksEnabled:f.target.checked}),disabled:!e.webhookUrl})]})]}),(0,Se.jsx)("p",{className:Ne.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),(0,Se.jsx)("textarea",{className:Ne.webhookUrlInput,placeholder:"Webhook URL",value:e.webhookUrl,onKeyDown:f=>f.stopPropagation(),onChange:f=>t({webhookUrl:f.target.value})})]})]})]})})}function Lp(e,t="filtered"){let{name:n,path:o}=Xi(e);if(t==="off")return{name:n,elementName:n,path:o,reactComponents:null};let r=Nv(e,{mode:t});return{name:r.path?`${r.path} ${n}`:n,elementName:n,path:o,reactComponents:r.path}}var V_=!1,Tp={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},To=e=>{if(!e||!e.trim())return!1;try{let t=new URL(e.trim());return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}},ib={compact:"off",standard:"filtered",detailed:"smart",forensic:"all"},da=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],sb=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;let e=document.createElement("style");e.id="agentation-color-tokens",e.textContent=[...da.map(t=>`
      [data-agentation-accent="${t.id}"] {
        --agentation-color-accent: ${t.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${t.id}"] {
          --agentation-color-accent: ${t.p3};
        }
      }
    `),`:root {
      ${da.map(t=>`--agentation-color-${t.id}: ${t.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${da.map(t=>`--agentation-color-${t.id}: ${t.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(e)};sb();function Kr(e,t){let n=document.elementFromPoint(e,t);if(!n)return null;for(;n?.shadowRoot;){let o=n.shadowRoot.elementFromPoint(e,t);if(!o||o===n)break;n=o}return n}function $p(e){let t=e;for(;t&&t!==document.body;){let o=window.getComputedStyle(t).position;if(o==="fixed"||o==="sticky")return!0;t=t.parentElement}return!1}function qr(e){return e.status!=="resolved"&&e.status!=="dismissed"}function mc(e){let t=Op(e),n=t.found?t:jv(e);if(n.found&&n.source)return Hv(n.source,"path")}function u0({demoAnnotations:e,demoDelay:t=1e3,enableDemoMode:n=!1,onAnnotationAdd:o,onAnnotationDelete:r,onAnnotationUpdate:i,onAnnotationsClear:s,onCopy:a,onSubmit:l,copyToClipboard:c=!0,endpoint:d,sessionId:m,onSessionCreated:f,webhookUrl:b,className:v}={}){let[P,k]=(0,B.useState)(!1),[h,_]=(0,B.useState)([]),[S,D]=(0,B.useState)(!0),[Z,q]=(0,B.useState)(()=>yv()),[O,ie]=(0,B.useState)(!1),xe=(0,B.useRef)(null);(0,B.useEffect)(()=>{let g=L=>{let T=xe.current;T&&T.contains(L.target)&&L.stopPropagation()},x=["mousedown","click","pointerdown"];return x.forEach(L=>document.body.addEventListener(L,g)),()=>{x.forEach(L=>document.body.removeEventListener(L,g))}},[]);let[he,j]=(0,B.useState)(!1),[M,J]=(0,B.useState)(!1),[ue,ke]=(0,B.useState)(null),[ge,oe]=(0,B.useState)({x:0,y:0}),[z,me]=(0,B.useState)(null),[Ee,Fe]=(0,B.useState)(!1),[Pe,ut]=(0,B.useState)("idle"),[St,Oe]=(0,B.useState)(!1),[Ve,Tt]=(0,B.useState)(!1),[Qe,en]=(0,B.useState)(null),[$t,_t]=(0,B.useState)(null),[Kt,vt]=(0,B.useState)([]),[bt,tn]=(0,B.useState)(null),[qt,Ht]=(0,B.useState)(null),[C,w]=(0,B.useState)(null),[R,Y]=(0,B.useState)(null),[W,Q]=(0,B.useState)([]),[le,be]=(0,B.useState)(0),[ce,Me]=(0,B.useState)(!1),[de,I]=(0,B.useState)(!1),[N,H]=(0,B.useState)(!1),[V,G]=(0,B.useState)(!1),[ve,te]=(0,B.useState)(!1),[$e,He]=(0,B.useState)("main"),[je,at]=(0,B.useState)(!1),[Ae,Ze]=(0,B.useState)(!1),[We,E]=(0,B.useState)(!1),[A,F]=(0,B.useState)([]),[ne,fe]=(0,B.useState)(null),De=(0,B.useRef)(!1),[Ce,tt]=(0,B.useState)(!1),[jt,Cn]=(0,B.useState)(!1),[oo,nn]=(0,B.useState)(1),[Po,va]=(0,B.useState)("new-page"),[Ut,Ro]=(0,B.useState)(""),[ba,U1]=(0,B.useState)(!1),[Ge,Yn]=(0,B.useState)(null),zc=(0,B.useRef)(!1),Fc=(0,B.useRef)({rearrange:null,placements:[]}),Er=(0,B.useRef)({rearrange:null,placements:[]}),[Y1,ff]=(0,B.useState)(0),[V1,X1]=(0,B.useState)(0),[Q1,Wc]=(0,B.useState)(0),[K1,hf]=(0,B.useState)(0),ts=(0,B.useRef)(new Set),ka=(0,B.useRef)(new Set),ro=(0,B.useRef)(null),Ca=(0,B.useRef)(),mf=Ae&&P&&!We&&Ce;(0,B.useEffect)(()=>{if(mf){Cn(!1);let g=Vi(()=>{Cn(!0)});return()=>cancelAnimationFrame(g)}else Cn(!1)},[mf]);let ns=(0,B.useRef)(new Map),os=(0,B.useRef)(new Map),rs=(0,B.useRef)(),[io,Hc]=(0,B.useState)(!1),[Vn,q1]=(0,B.useState)([]),G1=(0,B.useRef)(Vn);G1.current=Vn;let[gf,Pk]=(0,B.useState)(null),jc=(0,B.useRef)(null),Rk=(0,B.useRef)(!1),Dk=(0,B.useRef)([]),Ak=(0,B.useRef)(0),Bk=(0,B.useRef)(null),Ok=(0,B.useRef)(null),zk=(0,B.useRef)(1),[_f,yf]=(0,B.useState)(!1),si=(0,B.useRef)(null),[Gt,ai]=(0,B.useState)([]),xo=(0,B.useRef)({cmd:!1,shift:!1}),_n=()=>{at(!0)},Z1=()=>{at(!1)},J1=()=>{_f||(si.current=Ye(()=>yf(!0),850))},ey=()=>{si.current&&(clearTimeout(si.current),si.current=null),yf(!1),Z1()};(0,B.useEffect)(()=>()=>{si.current&&clearTimeout(si.current)},[]);let[nt,ty]=(0,B.useState)(()=>{try{let g=JSON.parse(localStorage.getItem("feedback-toolbar-settings")??"");return{...Tp,...g,annotationColorId:da.find(x=>x.id===g.annotationColorId)?g.annotationColorId:Tp.annotationColorId}}catch{return Tp}}),[wo,xf]=(0,B.useState)(!0),[wf,vf]=(0,B.useState)(!1),ny=()=>{xe.current?.classList.add(re.disableTransitions),xf(g=>!g),Vi(()=>{xe.current?.classList.remove(re.disableTransitions)})},bf=!1,Mr=bf&&nt.reactEnabled?ib[nt.outputDetail]:"off",[on,Uc]=(0,B.useState)(m??null),kf=(0,B.useRef)(!1),[so,Lr]=(0,B.useState)(d?"connecting":"disconnected"),[Pt,Yc]=(0,B.useState)(null),[Tr,Cf]=(0,B.useState)(!1),[li,Sf]=(0,B.useState)(null),Vc=(0,B.useRef)(!1),[Ef,is]=(0,B.useState)(new Set),[Mf,Sa]=(0,B.useState)(new Set),[ss,Ea]=(0,B.useState)(!1),[oy,ci]=(0,B.useState)(!1),[Do,Lf]=(0,B.useState)(!1),di=(0,B.useRef)(null),vo=(0,B.useRef)(null),as=(0,B.useRef)(null),ls=(0,B.useRef)(null),Ma=(0,B.useRef)(!1),Tf=(0,B.useRef)(0),La=(0,B.useRef)(null),$f=(0,B.useRef)(null),Xc=8,ry=50,If=(0,B.useRef)(null),Nf=(0,B.useRef)(null),cs=(0,B.useRef)(null),Xe=typeof window<"u"?window.location.pathname:"/";(0,B.useEffect)(()=>{if(V)te(!0);else{at(!1),He("main");let g=Ye(()=>te(!1),0);return()=>clearTimeout(g)}},[V]);let Qc=P&&S&&!Ae;(0,B.useEffect)(()=>{if(Qc){J(!1),j(!0),is(new Set);let g=Ye(()=>{is(x=>{let L=new Set(x);return h.forEach(T=>L.add(T.id)),L})},350);return()=>clearTimeout(g)}else if(he){J(!0);let g=Ye(()=>{j(!1),J(!1)},250);return()=>clearTimeout(g)}},[Qc]),(0,B.useEffect)(()=>{I(!0),be(window.scrollY);let g=Xo(Xe);_(g.filter(qr)),V_||(vf(!0),V_=!0,Ye(()=>vf(!1),750));try{let x=localStorage.getItem("feedback-toolbar-theme");x!==null&&xf(x==="dark")}catch{}try{let x=localStorage.getItem("feedback-toolbar-position");if(x){let L=JSON.parse(x);typeof L.x=="number"&&typeof L.y=="number"&&Yc(L)}}catch{}},[Xe]),(0,B.useEffect)(()=>{de&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(nt))},[nt,de]),(0,B.useEffect)(()=>{de&&localStorage.setItem("feedback-toolbar-theme",wo?"dark":"light")},[wo,de]);let Pf=(0,B.useRef)(!1);(0,B.useEffect)(()=>{let g=Pf.current;Pf.current=Tr,g&&!Tr&&Pt&&de&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(Pt))},[Tr,Pt,de]),(0,B.useEffect)(()=>{if(!d||!de||kf.current)return;kf.current=!0,Lr("connecting"),(async()=>{try{let x=gv(Xe),L=m||x,T=!1;if(L)try{let $=await B_(d,L);Uc($.id),Lr("connected"),kp(Xe,$.id),T=!0;let K=Xo(Xe),_e=new Set($.annotations.map(Re=>Re.id)),we=K.filter(Re=>!_e.has(Re.id));if(we.length>0){let Be=`${typeof window<"u"?window.location.origin:""}${Xe}`,Je=(await Promise.allSettled(we.map(Ue=>Ui(d,$.id,{...Ue,sessionId:$.id,url:Be})))).map((Ue,Te)=>Ue.status==="fulfilled"?Ue.value:(console.warn("[Agentation] Failed to sync annotation:",Ue.reason),we[Te])),rt=[...$.annotations,...Je];_(rt.filter(qr)),sa(Xe,rt.filter(qr),$.id)}else _($.annotations.filter(qr)),sa(Xe,$.annotations.filter(qr),$.id)}catch($){console.warn("[Agentation] Could not join session, creating new:",$),_v(Xe)}if(!T){let $=typeof window<"u"?window.location.href:"/",K=await Cp(d,$);Uc(K.id),Lr("connected"),kp(Xe,K.id),f?.(K.id);let _e=lv(),we=typeof window<"u"?window.location.origin:"",Re=[];for(let[Be,ze]of _e){let Je=ze.filter(Te=>!Te._syncedTo);if(Je.length===0)continue;let rt=`${we}${Be}`,Ue=Be===Xe;Re.push((async()=>{try{let Te=Ue?K:await Cp(d,rt),rn=(await Promise.allSettled(Je.map(pt=>Ui(d,Te.id,{...pt,sessionId:Te.id,url:rt})))).map((pt,Vt)=>pt.status==="fulfilled"?pt.value:(console.warn("[Agentation] Failed to sync annotation:",pt.reason),Je[Vt])).filter(qr);if(sa(Be,rn,Te.id),Ue){let pt=new Set(Je.map(Vt=>Vt.id));_(Vt=>{let Ke=Vt.filter(et=>!pt.has(et.id));return[...rn,...Ke]})}}catch(Te){console.warn(`[Agentation] Failed to sync annotations for ${Be}:`,Te)}})())}await Promise.allSettled(Re)}}catch(x){Lr("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",x)}})()},[d,m,de,f,Xe]),(0,B.useEffect)(()=>{if(!d||!de)return;let g=async()=>{try{(await fetch(`${d}/health`)).ok?Lr("connected"):Lr("disconnected")}catch{Lr("disconnected")}};g();let x=ux(g,1e4);return()=>clearInterval(x)},[d,de]),(0,B.useEffect)(()=>{if(!d||!de||!on)return;let g=new EventSource(`${d}/sessions/${on}/events`),x=["resolved","dismissed"],L=T=>{try{let $=JSON.parse(T.data);if(x.includes($.payload?.status)){let K=$.payload.id,_e=$.payload.kind;if(_e==="placement"){for(let[we,Re]of ns.current)if(Re===K){ns.current.delete(we),F(Be=>Be.filter(ze=>ze.id!==we));break}}else if(_e==="rearrange"){for(let[we,Re]of os.current)if(Re===K){os.current.delete(we),Yn(Be=>{if(!Be)return null;let ze=Be.sections.filter(Je=>Je.id!==we);return ze.length===0?null:{...Be,sections:ze}});break}}else Sa(we=>new Set(we).add(K)),Ye(()=>{_(we=>we.filter(Re=>Re.id!==K)),Sa(we=>{let Re=new Set(we);return Re.delete(K),Re})},150)}}catch{}};return g.addEventListener("annotation.updated",L),()=>{g.removeEventListener("annotation.updated",L),g.close()}},[d,de,on]),(0,B.useEffect)(()=>{if(!d||!de)return;let g=$f.current==="disconnected",x=so==="connected";$f.current=so,g&&x&&(async()=>{try{let T=Xo(Xe);if(T.length===0)return;let K=`${typeof window<"u"?window.location.origin:""}${Xe}`,_e=on,we=[];if(_e)try{we=(await B_(d,_e)).annotations}catch{_e=null}_e||(_e=(await Cp(d,K)).id,Uc(_e),kp(Xe,_e));let Re=new Set(we.map(ze=>ze.id)),Be=T.filter(ze=>!Re.has(ze.id));if(Be.length>0){let Je=(await Promise.allSettled(Be.map(Te=>Ui(d,_e,{...Te,sessionId:_e,url:K})))).map((Te,Yt)=>Te.status==="fulfilled"?Te.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",Te.reason),Be[Yt])),Ue=[...we,...Je].filter(qr);_(Ue),sa(Xe,Ue,_e)}}catch(T){console.warn("[Agentation] Failed to sync on reconnect:",T)}})()},[so,d,de,on,Xe]);let iy=(0,B.useCallback)(()=>{O||(ie(!0),G(!1),k(!1),Ye(()=>{xv(!0),q(!0),ie(!1)},400))},[O]);(0,B.useEffect)(()=>{if(!n||!de||!e||e.length===0||h.length>0)return;let g=[];return g.push(Ye(()=>{k(!0)},t-200)),e.forEach((x,L)=>{let T=t+L*300;g.push(Ye(()=>{let $=document.querySelector(x.selector);if(!$)return;let K=$.getBoundingClientRect(),{name:_e,path:we}=Xi($),Re={id:`demo-${Date.now()}-${L}`,x:(K.left+K.width/2)/window.innerWidth*100,y:K.top+K.height/2+window.scrollY,comment:x.comment,element:_e,elementPath:we,timestamp:Date.now(),selectedText:x.selectedText,boundingBox:{x:K.left,y:K.top+window.scrollY,width:K.width,height:K.height},nearbyText:ra($),cssClasses:ia($)};_(Be=>[...Be,Re])},T))}),()=>{g.forEach(clearTimeout)}},[n,de,e,t]),(0,B.useEffect)(()=>{let g=()=>{be(window.scrollY),Me(!0),cs.current&&clearTimeout(cs.current),cs.current=Ye(()=>{Me(!1)},150)};return window.addEventListener("scroll",g,{passive:!0}),()=>{window.removeEventListener("scroll",g),cs.current&&clearTimeout(cs.current)}},[]),(0,B.useEffect)(()=>{de&&h.length>0?on?sa(Xe,h,on):wr(Xe,h):de&&h.length===0&&localStorage.removeItem(yc(Xe))},[h,Xe,de,on]),(0,B.useEffect)(()=>{if(de&&!De.current){De.current=!0;let g=cv(Xe);g.length>0&&F(g)}},[de,Xe]),(0,B.useEffect)(()=>{de&&De.current&&!Ce&&(A.length>0?dv(Xe,A):uv(Xe))},[A,Xe,de,Ce]),(0,B.useEffect)(()=>{if(de&&!zc.current){zc.current=!0;let g=pv(Xe);if(g){let x={...g,sections:g.sections.map(L=>({...L,currentRect:L.currentRect??{...L.originalRect}}))};Yn(x)}}},[de,Xe]),(0,B.useEffect)(()=>{de&&zc.current&&!Ce&&(Ge?fv(Xe,Ge):hv(Xe))},[Ge,Xe,de,Ce]);let Kc=(0,B.useRef)(!1);(0,B.useEffect)(()=>{if(de&&!Kc.current){Kc.current=!0;let g=mv(Xe);g&&(Er.current={rearrange:g.rearrange,placements:g.placements||[]},g.purpose&&Ro(g.purpose))}},[de,Xe]),(0,B.useEffect)(()=>{if(!de||!Kc.current)return;let g=Er.current;Ce?(Ge?.sections?.length??0)>0||A.length>0||Ut?A_(Xe,{rearrange:Ge,placements:A,purpose:Ut}):pc(Xe):(g.rearrange?.sections?.length??0)>0||g.placements.length>0||Ut?A_(Xe,{rearrange:g.rearrange,placements:g.placements,purpose:Ut}):pc(Xe)},[Ge,A,Ut,Ce,Xe,de]),(0,B.useEffect)(()=>{Ae&&!Ge&&Yn({sections:[],originalOrder:[],detectedAt:Date.now()})},[Ae,Ge]),(0,B.useEffect)(()=>{if(!d||!on)return;let g=ns.current,x=new Set(A.map(L=>L.id));for(let L of A){if(g.has(L.id))continue;g.set(L.id,"");let T=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Xe;Ui(d,on,{id:L.id,x:L.x/window.innerWidth*100,y:L.y,comment:`Place ${L.type} at (${Math.round(L.x)}, ${Math.round(L.y)}), ${L.width}\xD7${L.height}px${L.text?` \u2014 "${L.text}"`:""}`,element:`[design:${L.type}]`,elementPath:"[placement]",timestamp:L.timestamp,url:T,intent:"change",severity:"important",kind:"placement",placement:{componentType:L.type,width:L.width,height:L.height,scrollY:L.scrollY,text:L.text}}).then($=>{g.has(L.id)&&g.set(L.id,$.id)}).catch($=>{console.warn("[Agentation] Failed to sync placement annotation:",$),g.delete(L.id)})}for(let[L,T]of g)x.has(L)||(g.delete(L),T&&xr(d,T).catch(()=>{}))},[A,d,on,Xe]),(0,B.useEffect)(()=>{if(!(!d||!on))return rs.current&&clearTimeout(rs.current),rs.current=Ye(()=>{let g=os.current;if(!Ge||Ge.sections.length===0){for(let[,T]of g)T&&xr(d,T).catch(()=>{});g.clear();return}let x=new Set(Ge.sections.map(T=>T.id)),L=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Xe;for(let T of Ge.sections){let $=T.originalRect,K=T.currentRect;if(!(Math.abs($.x-K.x)>1||Math.abs($.y-K.y)>1||Math.abs($.width-K.width)>1||Math.abs($.height-K.height)>1)){let Re=g.get(T.id);Re&&(g.delete(T.id),xr(d,Re).catch(()=>{}));continue}let we=g.get(T.id);we?O_(d,we,{comment:`Move ${T.label} section (${T.tagName}) \u2014 from (${Math.round($.x)},${Math.round($.y)}) ${Math.round($.width)}\xD7${Math.round($.height)} to (${Math.round(K.x)},${Math.round(K.y)}) ${Math.round(K.width)}\xD7${Math.round(K.height)}`}).catch(Re=>{console.warn("[Agentation] Failed to update rearrange annotation:",Re)}):(g.set(T.id,""),Ui(d,on,{id:T.id,x:K.x/window.innerWidth*100,y:K.y,comment:`Move ${T.label} section (${T.tagName}) \u2014 from (${Math.round($.x)},${Math.round($.y)}) ${Math.round($.width)}\xD7${Math.round($.height)} to (${Math.round(K.x)},${Math.round(K.y)}) ${Math.round(K.width)}\xD7${Math.round(K.height)}`,element:T.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:L,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:T.selector,label:T.label,tagName:T.tagName,originalRect:$,currentRect:K}}).then(Re=>{g.has(T.id)&&g.set(T.id,Re.id)}).catch(Re=>{console.warn("[Agentation] Failed to sync rearrange annotation:",Re),g.delete(T.id)}))}for(let[T,$]of g)x.has(T)||(g.delete(T),$&&xr(d,$).catch(()=>{}))},300),()=>{rs.current&&clearTimeout(rs.current)}},[Ge,d,on,Xe]);let ui=(0,B.useRef)(new Map);(0,B.useLayoutEffect)(()=>{let g=Ge?.sections??[],x=new Set;if((Ae||We)&&P)for(let L of g){x.add(L.id);try{let T=document.querySelector(L.selector);if(!T)continue;if(!ui.current.has(L.id)){let $={transform:T.style.transform,transformOrigin:T.style.transformOrigin,opacity:T.style.opacity,position:T.style.position,zIndex:T.style.zIndex,display:T.style.display},K=[],_e=T.parentElement;for(;_e&&_e!==document.body;){let Re=getComputedStyle(_e);(Re.overflow!=="visible"||Re.overflowX!=="visible"||Re.overflowY!=="visible")&&(K.push({el:_e,overflow:_e.style.overflow}),_e.style.overflow="visible"),_e=_e.parentElement}getComputedStyle(T).display==="inline"&&(T.style.display="inline-block"),ui.current.set(L.id,{el:T,origStyles:$,ancestors:K}),T.style.transformOrigin="top left",T.style.zIndex="9999"}}catch{}}for(let[L,T]of ui.current)if(!x.has(L)){let{el:$,origStyles:K,ancestors:_e}=T;$.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",$.style.transform=K.transform,$.style.transformOrigin=K.transformOrigin,$.style.opacity=K.opacity,$.style.position=K.position,$.style.zIndex=K.zIndex,ui.current.delete(L),Ye(()=>{$.style.transition="",$.style.display=K.display;for(let we of _e)we.el.style.overflow=we.overflow},450)}},[Ge,Ae,We,P]),(0,B.useEffect)(()=>()=>{for(let[,g]of ui.current){let{el:x,origStyles:L,ancestors:T}=g;x.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",x.style.transform=L.transform,x.style.transformOrigin=L.transformOrigin,x.style.opacity=L.opacity,x.style.position=L.position,x.style.zIndex=L.zIndex,Ye(()=>{x.style.transition="",x.style.display=L.display;for(let $ of T)$.el.style.overflow=$.overflow},450)}ui.current.clear()},[]);let Ta=(0,B.useCallback)(()=>{E(!0),Ze(!1),fe(null),clearTimeout(Ca.current),Ca.current=Ye(()=>{E(!1)},300)},[]),Rf=(0,B.useCallback)(()=>{Ae&&(E(!0),Ze(!1),fe(null),clearTimeout(Ca.current),Ca.current=Ye(()=>{E(!1)},300)),k(!1)},[Ae]),Df=(0,B.useCallback)(()=>{N||(fx(),H(!0))},[N]),$a=(0,B.useCallback)(()=>{N&&(b_(),H(!1))},[N]),qc=(0,B.useCallback)(()=>{N?$a():Df()},[N,Df,$a]),Af=(0,B.useCallback)(()=>{if(Gt.length===0)return;let g=Gt[0],x=g.element,L=Gt.length>1,T=Gt.map($=>$.element.getBoundingClientRect());if(L){let $={left:Math.min(...T.map(Te=>Te.left)),top:Math.min(...T.map(Te=>Te.top)),right:Math.max(...T.map(Te=>Te.right)),bottom:Math.max(...T.map(Te=>Te.bottom))},K=Gt.slice(0,5).map(Te=>Te.name).join(", "),_e=Gt.length>5?` +${Gt.length-5} more`:"",we=T.map(Te=>({x:Te.left,y:Te.top+window.scrollY,width:Te.width,height:Te.height})),Be=Gt[Gt.length-1].element,ze=T[T.length-1],Je=ze.left+ze.width/2,rt=ze.top+ze.height/2,Ue=$p(Be);me({x:Je/window.innerWidth*100,y:Ue?rt:rt+window.scrollY,clientY:rt,element:`${Gt.length} elements: ${K}${_e}`,elementPath:"multi-select",boundingBox:{x:$.left,y:$.top+window.scrollY,width:$.right-$.left,height:$.bottom-$.top},isMultiSelect:!0,isFixed:Ue,elementBoundingBoxes:we,multiSelectElements:Gt.map(Te=>Te.element),targetElement:Be,fullPath:cc(x),accessibility:lc(x),computedStyles:ac(x),computedStylesObj:sc(x),nearbyElements:ic(x),cssClasses:ia(x),nearbyText:ra(x),sourceFile:mc(x)})}else{let $=T[0],K=$p(x);me({x:$.left/window.innerWidth*100,y:K?$.top:$.top+window.scrollY,clientY:$.top,element:g.name,elementPath:g.path,boundingBox:{x:$.left,y:K?$.top:$.top+window.scrollY,width:$.width,height:$.height},isFixed:K,fullPath:cc(x),accessibility:lc(x),computedStyles:ac(x),computedStylesObj:sc(x),nearbyElements:ic(x),cssClasses:ia(x),nearbyText:ra(x),reactComponents:g.reactComponents,sourceFile:mc(x)})}ai([]),ke(null)},[Gt]);(0,B.useEffect)(()=>{P||(me(null),w(null),Y(null),Q([]),ke(null),G(!1),ai([]),xo.current={cmd:!1,shift:!1},N&&$a())},[P,N,$a]),(0,B.useEffect)(()=>()=>{b_()},[]),(0,B.useEffect)(()=>{if(!P)return;let g=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),x=":not([data-agentation-root]):not([data-agentation-root] *)",L=document.createElement("style");return L.id="feedback-cursor-styles",L.textContent=`
      body ${x} {
        cursor: crosshair !important;
      }

      body :is(${g})${x} {
        cursor: text !important;
      }
    `,document.head.appendChild(L),()=>{let T=document.getElementById("feedback-cursor-styles");T&&T.remove()}},[P]),(0,B.useEffect)(()=>{if(gf!==null&&P)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[gf,P]),(0,B.useEffect)(()=>{if(!P||z||io||Ae)return;let g=x=>{let L=x.composedPath()[0]||x.target;if(Tn(L,"[data-feedback-toolbar]")){ke(null);return}let T=Kr(x.clientX,x.clientY);if(!T||Tn(T,"[data-feedback-toolbar]")){ke(null);return}let{name:$,elementName:K,path:_e,reactComponents:we}=Lp(T,Mr),Re=T.getBoundingClientRect();ke({element:$,elementName:K,elementPath:_e,rect:Re,reactComponents:we}),oe({x:x.clientX,y:x.clientY})};return document.addEventListener("mousemove",g),()=>document.removeEventListener("mousemove",g)},[P,z,io,Ae,Mr,Vn]);let Ia=(0,B.useCallback)(g=>{if(w(g),en(null),_t(null),vt([]),g.elementBoundingBoxes?.length){let x=[];for(let L of g.elementBoundingBoxes){let T=L.x+L.width/2,$=L.y+L.height/2-window.scrollY,K=Kr(T,$);K&&x.push(K)}Q(x),Y(null)}else if(g.boundingBox){let x=g.boundingBox,L=x.x+x.width/2,T=g.isFixed?x.y+x.height/2:x.y+x.height/2-window.scrollY,$=Kr(L,T);if($){let K=$.getBoundingClientRect(),_e=K.width/x.width,we=K.height/x.height;_e<.5||we<.5?Y(null):Y($)}else Y(null);Q([])}else Y(null),Q([])},[]);(0,B.useEffect)(()=>{if(!P||io||Ae)return;let g=x=>{if(Ma.current){Ma.current=!1;return}let L=x.composedPath()[0]||x.target;if(Tn(L,"[data-feedback-toolbar]")||Tn(L,"[data-annotation-popup]")||Tn(L,"[data-annotation-marker]"))return;if(x.metaKey&&x.shiftKey&&!z&&!C){x.preventDefault(),x.stopPropagation();let mt=Kr(x.clientX,x.clientY);if(!mt)return;let rn=mt.getBoundingClientRect(),{name:pt,path:Vt,reactComponents:Ke}=Lp(mt,Mr),et=Gt.findIndex(Rt=>Rt.element===mt);et>=0?ai(Rt=>Rt.filter((Ft,ao)=>ao!==et)):ai(Rt=>[...Rt,{element:mt,rect:rn,name:pt,path:Vt,reactComponents:Ke??void 0}]);return}let T=Tn(L,"button, a, input, select, textarea, [role='button'], [onclick]");if(nt.blockInteractions&&T&&(x.preventDefault(),x.stopPropagation()),z){if(T&&!nt.blockInteractions)return;x.preventDefault(),If.current?.shake();return}if(C){if(T&&!nt.blockInteractions)return;x.preventDefault(),Nf.current?.shake();return}x.preventDefault();let $=Kr(x.clientX,x.clientY);if(!$)return;let{name:K,path:_e,reactComponents:we}=Lp($,Mr),Re=$.getBoundingClientRect(),Be=x.clientX/window.innerWidth*100,ze=$p($),Je=ze?x.clientY:x.clientY+window.scrollY,rt=window.getSelection(),Ue;rt&&rt.toString().trim().length>0&&(Ue=rt.toString().trim().slice(0,500));let Te=sc($),Yt=ac($);me({x:Be,y:Je,clientY:x.clientY,element:K,elementPath:_e,selectedText:Ue,boundingBox:{x:Re.left,y:ze?Re.top:Re.top+window.scrollY,width:Re.width,height:Re.height},nearbyText:ra($),cssClasses:ia($),isFixed:ze,fullPath:cc($),accessibility:lc($),computedStyles:Yt,computedStylesObj:Te,nearbyElements:ic($),reactComponents:we??void 0,sourceFile:mc($),targetElement:$}),ke(null)};return document.addEventListener("click",g,!0),()=>document.removeEventListener("click",g,!0)},[P,io,Ae,z,C,nt.blockInteractions,Mr,Gt]),(0,B.useEffect)(()=>{if(!P)return;let g=T=>{T.key==="Meta"&&(xo.current.cmd=!0),T.key==="Shift"&&(xo.current.shift=!0)},x=T=>{let $=xo.current.cmd&&xo.current.shift;T.key==="Meta"&&(xo.current.cmd=!1),T.key==="Shift"&&(xo.current.shift=!1);let K=xo.current.cmd&&xo.current.shift;$&&!K&&Gt.length>0&&Af()},L=()=>{xo.current={cmd:!1,shift:!1},ai([])};return document.addEventListener("keydown",g),document.addEventListener("keyup",x),window.addEventListener("blur",L),()=>{document.removeEventListener("keydown",g),document.removeEventListener("keyup",x),window.removeEventListener("blur",L)}},[P,Gt,Af]),(0,B.useEffect)(()=>{if(!P||z||io||Ae)return;let g=x=>{let L=x.composedPath()[0]||x.target;Tn(L,"[data-feedback-toolbar]")||Tn(L,"[data-annotation-marker]")||Tn(L,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(L.tagName)||L.isContentEditable||(x.preventDefault(),di.current={x:x.clientX,y:x.clientY})};return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[P,z,io,Ae]),(0,B.useEffect)(()=>{if(!P||z)return;let g=x=>{if(!di.current)return;let L=x.clientX-di.current.x,T=x.clientY-di.current.y,$=L*L+T*T,K=Xc*Xc;if(!Do&&$>=K&&(vo.current=di.current,Lf(!0),x.preventDefault()),(Do||$>=K)&&vo.current){if(as.current){let Ke=Math.min(vo.current.x,x.clientX),et=Math.min(vo.current.y,x.clientY),Rt=Math.abs(x.clientX-vo.current.x),Ft=Math.abs(x.clientY-vo.current.y);as.current.style.transform=`translate(${Ke}px, ${et}px)`,as.current.style.width=`${Rt}px`,as.current.style.height=`${Ft}px`}let _e=Date.now();if(_e-Tf.current<ry)return;Tf.current=_e;let we=vo.current.x,Re=vo.current.y,Be=Math.min(we,x.clientX),ze=Math.min(Re,x.clientY),Je=Math.max(we,x.clientX),rt=Math.max(Re,x.clientY),Ue=(Be+Je)/2,Te=(ze+rt)/2,Yt=new Set,mt=[[Be,ze],[Je,ze],[Be,rt],[Je,rt],[Ue,Te],[Ue,ze],[Ue,rt],[Be,Te],[Je,Te]];for(let[Ke,et]of mt){let Rt=document.elementsFromPoint(Ke,et);for(let Ft of Rt)Ft instanceof HTMLElement&&Yt.add(Ft)}let rn=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(let Ke of rn)if(Ke instanceof HTMLElement){let et=Ke.getBoundingClientRect(),Rt=et.left+et.width/2,Ft=et.top+et.height/2,ao=Rt>=Be&&Rt<=Je&&Ft>=ze&&Ft<=rt,Xn=Math.min(et.right,Je)-Math.max(et.left,Be),un=Math.min(et.bottom,rt)-Math.max(et.top,ze),us=Xn>0&&un>0?Xn*un:0,Ir=et.width*et.height,qo=Ir>0?us/Ir:0;(ao||qo>.5)&&Yt.add(Ke)}let pt=[],Vt=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(let Ke of Yt){if(Tn(Ke,"[data-feedback-toolbar]")||Tn(Ke,"[data-annotation-marker]"))continue;let et=Ke.getBoundingClientRect();if(!(et.width>window.innerWidth*.8&&et.height>window.innerHeight*.5)&&!(et.width<10||et.height<10)&&et.left<Je&&et.right>Be&&et.top<rt&&et.bottom>ze){let Rt=Ke.tagName,Ft=Vt.has(Rt);if(!Ft&&(Rt==="DIV"||Rt==="SPAN")){let ao=Ke.textContent&&Ke.textContent.trim().length>0,Xn=Ke.onclick!==null||Ke.getAttribute("role")==="button"||Ke.getAttribute("role")==="link"||Ke.classList.contains("clickable")||Ke.hasAttribute("data-clickable");(ao||Xn)&&!Ke.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Ft=!0)}if(Ft){let ao=!1;for(let Xn of pt)if(Xn.left<=et.left&&Xn.right>=et.right&&Xn.top<=et.top&&Xn.bottom>=et.bottom){ao=!0;break}ao||pt.push(et)}}}if(ls.current){let Ke=ls.current;for(;Ke.children.length>pt.length;)Ke.removeChild(Ke.lastChild);pt.forEach((et,Rt)=>{let Ft=Ke.children[Rt];Ft||(Ft=document.createElement("div"),Ft.className=re.selectedElementHighlight,Ke.appendChild(Ft)),Ft.style.transform=`translate(${et.left}px, ${et.top}px)`,Ft.style.width=`${et.width}px`,Ft.style.height=`${et.height}px`})}}};return document.addEventListener("mousemove",g,{passive:!0}),()=>document.removeEventListener("mousemove",g)},[P,z,Do,Xc]),(0,B.useEffect)(()=>{if(!P)return;let g=x=>{let L=Do,T=vo.current;if(Do&&T){Ma.current=!0;let $=Math.min(T.x,x.clientX),K=Math.min(T.y,x.clientY),_e=Math.max(T.x,x.clientX),we=Math.max(T.y,x.clientY),Re=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(Ue=>{if(!(Ue instanceof HTMLElement)||Tn(Ue,"[data-feedback-toolbar]")||Tn(Ue,"[data-annotation-marker]"))return;let Te=Ue.getBoundingClientRect();Te.width>window.innerWidth*.8&&Te.height>window.innerHeight*.5||Te.width<10||Te.height<10||Te.left<_e&&Te.right>$&&Te.top<we&&Te.bottom>K&&Re.push({element:Ue,rect:Te})});let ze=Re.filter(({element:Ue})=>!Re.some(({element:Te})=>Te!==Ue&&Ue.contains(Te))),Je=x.clientX/window.innerWidth*100,rt=x.clientY+window.scrollY;if(ze.length>0){let Ue=ze.reduce((Vt,{rect:Ke})=>({left:Math.min(Vt.left,Ke.left),top:Math.min(Vt.top,Ke.top),right:Math.max(Vt.right,Ke.right),bottom:Math.max(Vt.bottom,Ke.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),Te=ze.slice(0,5).map(({element:Vt})=>Xi(Vt).name).join(", "),Yt=ze.length>5?` +${ze.length-5} more`:"",mt=ze[0].element,rn=sc(mt),pt=ac(mt);me({x:Je,y:rt,clientY:x.clientY,element:`${ze.length} elements: ${Te}${Yt}`,elementPath:"multi-select",boundingBox:{x:Ue.left,y:Ue.top+window.scrollY,width:Ue.right-Ue.left,height:Ue.bottom-Ue.top},isMultiSelect:!0,fullPath:cc(mt),accessibility:lc(mt),computedStyles:pt,computedStylesObj:rn,nearbyElements:ic(mt),cssClasses:ia(mt),nearbyText:ra(mt),sourceFile:mc(mt)})}else{let Ue=Math.abs(_e-$),Te=Math.abs(we-K);Ue>20&&Te>20&&me({x:Je,y:rt,clientY:x.clientY,element:"Area selection",elementPath:`region at (${Math.round($)}, ${Math.round(K)})`,boundingBox:{x:$,y:K+window.scrollY,width:Ue,height:Te},isMultiSelect:!0})}ke(null)}else L&&(Ma.current=!0);di.current=null,vo.current=null,Lf(!1),ls.current&&(ls.current.innerHTML="")};return document.addEventListener("mouseup",g),()=>document.removeEventListener("mouseup",g)},[P,Do]);let bo=(0,B.useCallback)(async(g,x,L)=>{let T=nt.webhookUrl||b;if(!T||!nt.webhooksEnabled&&!L)return!1;try{return(await fetch(T,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:g,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...x})})).ok}catch($){return console.warn("[Agentation] Webhook failed:",$),!1}},[b,nt.webhookUrl,nt.webhooksEnabled]),sy=(0,B.useCallback)(g=>{if(!z)return;let x={id:Date.now().toString(),x:z.x,y:z.y,comment:g,element:z.element,elementPath:z.elementPath,timestamp:Date.now(),selectedText:z.selectedText,boundingBox:z.boundingBox,nearbyText:z.nearbyText,cssClasses:z.cssClasses,isMultiSelect:z.isMultiSelect,isFixed:z.isFixed,fullPath:z.fullPath,accessibility:z.accessibility,computedStyles:z.computedStyles,nearbyElements:z.nearbyElements,reactComponents:z.reactComponents,sourceFile:z.sourceFile,elementBoundingBoxes:z.elementBoundingBoxes,...d&&on?{sessionId:on,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};_(L=>[...L,x]),La.current=x.id,Ye(()=>{La.current=null},300),Ye(()=>{is(L=>new Set(L).add(x.id))},250),o?.(x),bo("annotation.add",{annotation:x}),Ea(!0),Ye(()=>{me(null),Ea(!1)},150),window.getSelection()?.removeAllRanges(),d&&on&&Ui(d,on,x).then(L=>{L.id!==x.id&&(_(T=>T.map($=>$.id===x.id?{...$,id:L.id}:$)),is(T=>{let $=new Set(T);return $.delete(x.id),$.add(L.id),$}))}).catch(L=>{console.warn("[Agentation] Failed to sync annotation:",L)})},[z,o,bo,d,on]),Gc=(0,B.useCallback)(()=>{Ea(!0),Ye(()=>{me(null),Ea(!1)},150)},[]),Zc=(0,B.useCallback)(g=>{let x=h.findIndex(T=>T.id===g),L=h[x];C?.id===g&&(ci(!0),Ye(()=>{w(null),Y(null),Q([]),ci(!1)},150)),tn(g),Sa(T=>new Set(T).add(g)),L&&(r?.(L),bo("annotation.delete",{annotation:L})),d&&xr(d,g).catch(T=>{console.warn("[Agentation] Failed to delete annotation from server:",T)}),Ye(()=>{_(T=>T.filter($=>$.id!==g)),Sa(T=>{let $=new Set(T);return $.delete(g),$}),tn(null),x<h.length-1&&(Ht(x),Ye(()=>Ht(null),200))},150)},[h,C,r,bo,d]),Na=(0,B.useCallback)(g=>{if(!g){en(null),_t(null),vt([]);return}if(en(g.id),g.elementBoundingBoxes?.length){let x=[];for(let L of g.elementBoundingBoxes){let T=L.x+L.width/2,$=L.y+L.height/2-window.scrollY,_e=document.elementsFromPoint(T,$).find(we=>!we.closest("[data-annotation-marker]")&&!we.closest("[data-agentation-root]"));_e&&x.push(_e)}vt(x),_t(null)}else if(g.boundingBox){let x=g.boundingBox,L=x.x+x.width/2,T=g.isFixed?x.y+x.height/2:x.y+x.height/2-window.scrollY,$=Kr(L,T);if($){let K=$.getBoundingClientRect(),_e=K.width/x.width,we=K.height/x.height;_e<.5||we<.5?_t(null):_t($)}else _t(null);vt([])}else _t(null),vt([])},[]),ay=(0,B.useCallback)(g=>{if(!C)return;let x={...C,comment:g};_(L=>L.map(T=>T.id===C.id?x:T)),i?.(x),bo("annotation.update",{annotation:x}),d&&O_(d,C.id,{comment:g}).catch(L=>{console.warn("[Agentation] Failed to update annotation on server:",L)}),ci(!0),Ye(()=>{w(null),Y(null),Q([]),ci(!1)},150)},[C,i,bo,d]),ly=(0,B.useCallback)(()=>{ci(!0),Ye(()=>{w(null),Y(null),Q([]),ci(!1)},150)},[]),$r=(0,B.useCallback)(()=>{let g=h.length,x=A.length>0||!!Ge;if(g===0&&Vn.length===0&&!x)return;if(s?.(h),bo("annotations.clear",{annotations:h}),d){Promise.all(h.map($=>xr(d,$.id).catch(K=>{console.warn("[Agentation] Failed to delete annotation from server:",K)})));for(let[,$]of ns.current)$&&xr(d,$).catch(()=>{});ns.current.clear();for(let[,$]of os.current)$&&xr(d,$).catch(()=>{});os.current.clear()}Tt(!0),Oe(!0),q1([]);let L=jc.current;if(L){let $=L.getContext("2d");$&&$.clearRect(0,0,L.width,L.height)}(A.length>0||Ge)&&(Wc($=>$+1),hf($=>$+1),Ye(()=>{F([]),Yn(null)},200)),Ce&&tt(!1),Ut&&Ro(""),Er.current={rearrange:null,placements:[]},pc(Xe);let T=g*30+200;Ye(()=>{_([]),is(new Set),localStorage.removeItem(yc(Xe)),Tt(!1)},T),Ye(()=>Oe(!1),1500)},[Xe,h,Vn,A,Ge,Ce,Ut,s,bo,d]),Jc=(0,B.useCallback)(async()=>{let g=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Xe,x=Ae&&Ce,L;if(x){if(A.length===0&&!Ge&&!Ut)return;L=""}else{if(L=W_(h,g,nt.outputDetail),!L&&Vn.length===0&&A.length===0&&!Ge)return;L||(L=`## Page Feedback: ${g}
`)}if(!x&&Vn.length>0){let T=new Set;for(let we of h)we.drawingIndex!=null&&T.add(we.drawingIndex);let $=jc.current;$&&($.style.visibility="hidden");let K=[],_e=window.scrollY;for(let we=0;we<Vn.length;we++){if(T.has(we))continue;let Re=Vn[we];if(Re.points.length<2)continue;let Be=Re.fixed?Re.points:Re.points.map(Zt=>({x:Zt.x,y:Zt.y-_e})),ze=1/0,Je=1/0,rt=-1/0,Ue=-1/0;for(let Zt of Be)ze=Math.min(ze,Zt.x),Je=Math.min(Je,Zt.y),rt=Math.max(rt,Zt.x),Ue=Math.max(Ue,Zt.y);let Te=rt-ze,Yt=Ue-Je,mt=Math.hypot(Te,Yt),rn=Be[0],pt=Be[Be.length-1],Vt=Math.hypot(pt.x-rn.x,pt.y-rn.y),Ke,et=Vt<mt*.35,Rt=Te/Math.max(Yt,1);if(et&&mt>20){let Zt=Math.max(Te,Yt)*.15,Go=0;for(let Nr of Be){let uy=Nr.x-ze<Zt,py=rt-Nr.x<Zt,fy=Nr.y-Je<Zt,hy=Ue-Nr.y<Zt;(uy||py)&&(fy||hy)&&Go++}Ke=Go>Be.length*.15?"box":"circle"}else Rt>3&&Yt<40?Ke="underline":Vt>mt*.5?Ke="arrow":Ke="drawing";let Ft=Math.min(10,Be.length),ao=Math.max(1,Math.floor(Be.length/Ft)),Xn=new Set,un=[],us=[rn];for(let Zt=ao;Zt<Be.length-1;Zt+=ao)us.push(Be[Zt]);us.push(pt);for(let Zt of us){let Go=Kr(Zt.x,Zt.y);if(!Go||Xn.has(Go)||Tn(Go,"[data-feedback-toolbar]"))continue;Xn.add(Go);let{name:Nr}=Xi(Go);un.includes(Nr)||un.push(Nr)}let Ir=`${Math.round(ze)},${Math.round(Je)} \u2192 ${Math.round(rt)},${Math.round(Ue)}`,qo;(Ke==="circle"||Ke==="box")&&un.length>0?qo=`${Ke==="box"?"Boxed":"Circled"} **${un[0]}**${un.length>1?` (and ${un.slice(1).join(", ")})`:""} (region: ${Ir})`:Ke==="underline"&&un.length>0?qo=`Underlined **${un[0]}** (${Ir})`:Ke==="arrow"&&un.length>=2?qo=`Arrow from **${un[0]}** to **${un[un.length-1]}** (${Math.round(rn.x)},${Math.round(rn.y)} \u2192 ${Math.round(pt.x)},${Math.round(pt.y)})`:un.length>0?qo=`${Ke==="arrow"?"Arrow":"Drawing"} near **${un.join("**, **")}** (region: ${Ir})`:qo=`Drawing at ${Ir}`,K.push(qo)}$&&($.style.visibility=""),K.length>0&&(L+=`
**Drawings:**
`,K.forEach((we,Re)=>{L+=`${Re+1}. ${we}
`}))}if((A.length>0||x&&Ut)&&(L+=`
`+R_(A,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:Ce,wireframePurpose:Ut||void 0},nt.outputDetail)),Ge){let T=D_(Ge,nt.outputDetail,{width:window.innerWidth,height:window.innerHeight});T&&(L+=`
`+T)}if(c)try{await navigator.clipboard.writeText(L)}catch{}a?.(L),Fe(!0),Ye(()=>Fe(!1),2e3),nt.autoClearAfterCopy&&Ye(()=>$r(),500)},[h,Vn,A,Ge,Ce,Ae,Po,Ut,Xe,nt.outputDetail,Mr,nt.autoClearAfterCopy,$r,c,a]),ed=(0,B.useCallback)(async()=>{let g=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Xe,x=W_(h,g,nt.outputDetail);if(!x&&A.length===0&&!Ge)return;if(x||(x=`## Page Feedback: ${g}
`),A.length>0&&(x+=`
`+R_(A,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:Ce,wireframePurpose:Ut||void 0},nt.outputDetail)),Ge){let T=D_(Ge,nt.outputDetail,{width:window.innerWidth,height:window.innerHeight});T&&(x+=`
`+T)}l&&l(x,h),ut("sending"),await new Promise(T=>Ye(T,150));let L=await bo("submit",{output:x,annotations:h},!0);ut(L?"sent":"failed"),Ye(()=>ut("idle"),2500),L&&nt.autoClearAfterCopy&&Ye(()=>$r(),500)},[l,bo,h,A,Ge,Ce,Po,Xe,nt.outputDetail,Mr,nt.autoClearAfterCopy,$r]);(0,B.useEffect)(()=>{if(!li)return;let g=10,x=T=>{let $=T.clientX-li.x,K=T.clientY-li.y,_e=Math.sqrt($*$+K*K);if(!Tr&&_e>g&&Cf(!0),Tr||_e>g){let we=li.toolbarX+$,Re=li.toolbarY+K,Be=20,ze=337,Je=44,Ue=ze-(P?so==="connected"?297:257:44),Te=Be-Ue,Yt=window.innerWidth-Be-ze;we=Math.max(Te,Math.min(Yt,we)),Re=Math.max(Be,Math.min(window.innerHeight-Je-Be,Re)),Yc({x:we,y:Re})}},L=()=>{Tr&&(Vc.current=!0),Cf(!1),Sf(null)};return document.addEventListener("mousemove",x),document.addEventListener("mouseup",L),()=>{document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",L)}},[li,Tr,P,so]);let cy=(0,B.useCallback)(g=>{if(g.target.closest("button")||g.target.closest("[data-agentation-settings-panel]"))return;let x=g.currentTarget.parentElement;if(!x)return;let L=x.getBoundingClientRect(),T=Pt?.x??L.left,$=Pt?.y??L.top;Sf({x:g.clientX,y:g.clientY,toolbarX:T,toolbarY:$})},[Pt]);if((0,B.useEffect)(()=>{if(!Pt)return;let g=()=>{let $=Pt.x,K=Pt.y,Re=20-(337-(P?so==="connected"?297:257:44)),Be=window.innerWidth-20-337;$=Math.max(Re,Math.min(Be,$)),K=Math.max(20,Math.min(window.innerHeight-44-20,K)),($!==Pt.x||K!==Pt.y)&&Yc({x:$,y:K})};return g(),window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[Pt,P,so]),(0,B.useEffect)(()=>{let g=x=>{let L=x.target,T=L.tagName==="INPUT"||L.tagName==="TEXTAREA"||L.isContentEditable;if(x.key==="Escape"){if(Ae){ne?fe(null):Ta();return}if(io){Hc(!1);return}if(Gt.length>0){ai([]);return}z||P&&(_n(),k(!1))}if((x.metaKey||x.ctrlKey)&&x.shiftKey&&(x.key==="f"||x.key==="F")){x.preventDefault(),_n(),P?Rf():k(!0);return}if(!(T||x.metaKey||x.ctrlKey)&&((x.key==="p"||x.key==="P")&&(x.preventDefault(),_n(),qc()),(x.key==="l"||x.key==="L")&&(x.preventDefault(),_n(),io&&Hc(!1),V&&G(!1),z&&Gc(),Ae?Ta():Ze(!0)),(x.key==="h"||x.key==="H")&&h.length>0&&(x.preventDefault(),_n(),D($=>!$)),(x.key==="c"||x.key==="C")&&(h.length>0||A.length>0||Ge)&&(x.preventDefault(),_n(),Jc()),(x.key==="x"||x.key==="X")&&(h.length>0||A.length>0||Ge)&&(x.preventDefault(),_n(),$r(),A.length>0&&F([]),Ge&&Yn(null)),x.key==="s"||x.key==="S")){let $=To(nt.webhookUrl)||To(b||"");h.length>0&&$&&Pe==="idle"&&(x.preventDefault(),_n(),ed())}};return document.addEventListener("keydown",g),()=>document.removeEventListener("keydown",g)},[P,io,Ae,ne,A,Ge,z,h.length,nt.webhookUrl,b,Pe,ed,qc,Jc,$r,Gt]),!de||Z)return null;let ds=h.length>0,pi=h.filter(g=>!Mf.has(g.id)&&g.kind!=="placement"&&g.kind!=="rearrange"),dy=pi.length>0,Bf=h.filter(g=>Mf.has(g.id)),Of=g=>{let K=g.x/100*window.innerWidth,_e=typeof g.y=="string"?parseFloat(g.y):g.y,we={};window.innerHeight-_e-22-10<80&&(we.top="auto",we.bottom="calc(100% + 10px)");let Be=K-200/2,ze=10;if(Be<ze){let Je=ze-Be;we.left=`calc(50% + ${Je}px)`}else if(Be+200>window.innerWidth-ze){let Je=Be+200-(window.innerWidth-ze);we.left=`calc(50% - ${Je}px)`}return we};return(0,X_.createPortal)((0,ae.jsxs)("div",{ref:xe,style:{display:"contents"},"data-agentation-theme":wo?"dark":"light","data-agentation-accent":nt.annotationColorId,"data-agentation-root":"",children:[(0,ae.jsx)("div",{className:`${re.toolbar}${v?` ${v}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:Pt?{left:Pt.x,top:Pt.y,right:"auto",bottom:"auto"}:void 0,children:(0,ae.jsxs)("div",{className:`${re.toolbarContainer} ${P?re.expanded:re.collapsed} ${wf?re.entrance:""} ${O?re.hiding:""} ${!nt.webhooksEnabled&&(To(nt.webhookUrl)||To(b||""))?re.serverConnected:""}`,onClick:P?void 0:g=>{if(Vc.current){Vc.current=!1,g.preventDefault();return}k(!0)},onMouseDown:cy,role:P?void 0:"button",tabIndex:P?-1:0,title:P?void 0:"Start feedback mode",children:[(0,ae.jsxs)("div",{className:`${re.toggleContent} ${P?re.hidden:re.visible}`,children:[(0,ae.jsx)(q2,{size:24}),dy&&(0,ae.jsx)("span",{className:`${re.badge} ${P?re.fadeOut:""} ${wf?re.entrance:""}`,children:pi.length})]}),(0,ae.jsxs)("div",{className:`${re.controlsContent} ${P?re.visible:re.hidden} ${Pt&&Pt.y<100?re.tooltipBelow:""} ${je||V?re.tooltipsHidden:""} ${_f?re.tooltipsInSession:""}`,onMouseEnter:J1,onMouseLeave:ey,children:[(0,ae.jsxs)("div",{className:`${re.buttonWrapper} ${Pt&&Pt.x<120?re.buttonWrapperAlignLeft:""}`,children:[(0,ae.jsx)("button",{className:re.controlButton,onClick:g=>{g.stopPropagation(),_n(),qc()},"data-active":N,children:(0,ae.jsx)(tx,{size:24,isPaused:N})}),(0,ae.jsxs)("span",{className:re.buttonTooltip,children:[N?"Resume animations":"Pause animations",(0,ae.jsx)("span",{className:re.shortcut,children:"P"})]})]}),(0,ae.jsxs)("div",{className:re.buttonWrapper,children:[(0,ae.jsx)("button",{className:`${re.controlButton} ${wo?"":re.light}`,onClick:g=>{g.stopPropagation(),_n(),io&&Hc(!1),V&&G(!1),z&&Gc(),Ae?Ta():Ze(!0)},"data-active":Ae,style:Ae&&Ce?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:(0,ae.jsx)(cx,{size:21})}),(0,ae.jsxs)("span",{className:re.buttonTooltip,children:[Ae?"Exit layout mode":"Layout mode",(0,ae.jsx)("span",{className:re.shortcut,children:"L"})]})]}),(0,ae.jsxs)("div",{className:re.buttonWrapper,children:[(0,ae.jsx)("button",{className:re.controlButton,onClick:g=>{g.stopPropagation(),_n(),D(!S)},disabled:!ds||Ae,children:(0,ae.jsx)(ex,{size:24,isOpen:S})}),(0,ae.jsxs)("span",{className:re.buttonTooltip,children:[S?"Hide markers":"Show markers",(0,ae.jsx)("span",{className:re.shortcut,children:"H"})]})]}),(0,ae.jsxs)("div",{className:re.buttonWrapper,children:[(0,ae.jsx)("button",{className:`${re.controlButton} ${Ee?re.statusShowing:""}`,onClick:g=>{g.stopPropagation(),_n(),Jc()},disabled:Ae&&Ce?A.length===0&&!Ge?.sections?.length:!ds&&Vn.length===0&&A.length===0&&!Ge?.sections?.length,"data-active":Ee,children:(0,ae.jsx)(Z2,{size:24,copied:Ee,tint:Ae&&Ce&&(A.length>0||Ge?.sections?.length)?"#f97316":void 0})}),(0,ae.jsxs)("span",{className:re.buttonTooltip,children:[Ae&&Ce?"Copy layout":"Copy feedback",(0,ae.jsx)("span",{className:re.shortcut,children:"C"})]})]}),(0,ae.jsxs)("div",{className:`${re.buttonWrapper} ${re.sendButtonWrapper} ${P&&!nt.webhooksEnabled&&(To(nt.webhookUrl)||To(b||""))?re.sendButtonVisible:""}`,children:[(0,ae.jsxs)("button",{className:`${re.controlButton} ${Pe==="sent"||Pe==="failed"?re.statusShowing:""}`,onClick:g=>{g.stopPropagation(),_n(),ed()},disabled:!ds||!To(nt.webhookUrl)&&!To(b||"")||Pe==="sending","data-no-hover":Pe==="sent"||Pe==="failed",tabIndex:To(nt.webhookUrl)||To(b||"")?0:-1,children:[(0,ae.jsx)(J2,{size:24,state:Pe}),ds&&Pe==="idle"&&(0,ae.jsx)("span",{className:re.buttonBadge,children:h.length})]}),(0,ae.jsxs)("span",{className:re.buttonTooltip,children:["Send Annotations",(0,ae.jsx)("span",{className:re.shortcut,children:"S"})]})]}),(0,ae.jsxs)("div",{className:re.buttonWrapper,children:[(0,ae.jsx)("button",{className:re.controlButton,onClick:g=>{g.stopPropagation(),_n(),$r()},disabled:!ds&&Vn.length===0&&A.length===0&&!Ge?.sections?.length,"data-danger":!0,children:(0,ae.jsx)(ox,{size:24})}),(0,ae.jsxs)("span",{className:re.buttonTooltip,children:["Clear all",(0,ae.jsx)("span",{className:re.shortcut,children:"X"})]})]}),(0,ae.jsxs)("div",{className:re.buttonWrapper,children:[(0,ae.jsx)("button",{className:re.controlButton,onClick:g=>{g.stopPropagation(),_n(),Ae&&Ta(),G(!V)},children:(0,ae.jsx)(nx,{size:24})}),d&&so!=="disconnected"&&(0,ae.jsx)("span",{className:`${re.mcpIndicator} ${re[so]} ${V?re.hidden:""}`,title:so==="connected"?"MCP Connected":"MCP Connecting..."}),(0,ae.jsx)("span",{className:re.buttonTooltip,children:"Settings"})]}),(0,ae.jsx)("div",{className:re.divider}),(0,ae.jsxs)("div",{className:`${re.buttonWrapper} ${Pt&&typeof window<"u"&&Pt.x>window.innerWidth-120?re.buttonWrapperAlignRight:""}`,children:[(0,ae.jsx)("button",{className:re.controlButton,onClick:g=>{g.stopPropagation(),_n(),Rf()},children:(0,ae.jsx)(rx,{size:24})}),(0,ae.jsxs)("span",{className:re.buttonTooltip,children:["Exit",(0,ae.jsx)("span",{className:re.shortcut,children:"Esc"})]})]})]}),(0,ae.jsx)(Ow,{visible:Ae&&P,activeType:ne,onSelect:g=>{fe(ne===g?null:g)},isDarkMode:wo,sectionCount:Ge?.sections.length??0,onDetectSections:()=>{let g=Kw(),x=Ge?.sections??[],L=new Set(x.map(_e=>_e.selector)),T=g.filter(_e=>!L.has(_e.selector)),$=[...x,...T],K=[...Ge?.originalOrder??[],...T.map(_e=>_e.id)];Yn({sections:$,originalOrder:K,detectedAt:Date.now()})},placementCount:A.length,onClearPlacements:()=>{Wc(g=>g+1),hf(g=>g+1),Ye(()=>{Yn({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:Ce,onBlankCanvasChange:g=>{let x={sections:[],originalOrder:[],detectedAt:Date.now()};g?(Fc.current={rearrange:Ge,placements:A},Yn(Er.current.rearrange||x),F(Er.current.placements),fe(null)):(Er.current={rearrange:Ge,placements:A},Yn(Fc.current.rearrange||x),F(Fc.current.placements)),tt(g)},wireframePurpose:Ut,onWireframePurposeChange:Ro,Tooltip:Gr,onDragStart:(g,x)=>{x.preventDefault();let L=Le[g],T=null,$=!1,K=x.clientX,_e=x.clientY,Re=x.target.closest("[data-feedback-toolbar]")?.getBoundingClientRect().top??window.innerHeight,Be=Je=>{let rt=Je.clientX-K,Ue=Je.clientY-_e;if(!$&&(Math.abs(rt)>4||Math.abs(Ue)>4)&&($=!0,T=document.createElement("div"),T.className=`${X.dragPreview}${Ce?` ${X.dragPreviewWireframe}`:""}`,document.body.appendChild(T)),!T)return;let Te=Math.max(0,Re-Je.clientY),Yt=Math.min(1,Te/180),mt=1-Math.pow(1-Yt,2),rn=28,pt=20,Vt=Math.min(140,L.width*.18),Ke=Math.min(90,L.height*.18),et=rn+(Vt-rn)*mt,Rt=pt+(Ke-pt)*mt;T.style.width=`${et}px`,T.style.height=`${Rt}px`,T.style.left=`${Je.clientX-et/2}px`,T.style.top=`${Je.clientY-Rt/2}px`,T.style.opacity=`${.5+.5*mt}`,T.textContent=mt>.25?g:""},ze=Je=>{if(window.removeEventListener("mousemove",Be),window.removeEventListener("mouseup",ze),T&&document.body.removeChild(T),$){let rt=L.width,Ue=L.height,Te=window.scrollY,Yt=Math.max(0,Je.clientX-rt/2),mt=Math.max(0,Je.clientY+Te-Ue/2),rn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:g,x:Yt,y:mt,width:rt,height:Ue,scrollY:Te,timestamp:Date.now()};F(pt=>[...pt,rn]),fe(null),ts.current=new Set,ff(pt=>pt+1)}};window.addEventListener("mousemove",Be),window.addEventListener("mouseup",ze)}}),(0,ae.jsx)(rb,{settings:nt,onSettingsChange:g=>ty(x=>({...x,...g})),isDarkMode:wo,onToggleTheme:ny,isDevMode:bf,connectionStatus:so,endpoint:d,isVisible:ve,toolbarNearBottom:!!Pt&&Pt.y<230,settingsPage:$e,onSettingsPageChange:He,onHideToolbar:iy})]})}),(Ae||We)&&(0,ae.jsx)("div",{className:`${X.blankCanvas} ${jt?X.visible:""} ${ba?X.gridActive:""}`,style:{"--canvas-opacity":oo},"data-feedback-toolbar":!0}),Ae&&Ce&&jt&&(0,ae.jsxs)("div",{className:X.wireframeNotice,"data-feedback-toolbar":!0,children:[(0,ae.jsxs)("div",{className:X.wireframeOpacityRow,children:[(0,ae.jsx)("span",{className:X.wireframeOpacityLabel,children:"Toggle Opacity"}),(0,ae.jsx)("input",{type:"range",className:X.wireframeOpacitySlider,min:0,max:1,step:.01,value:oo,onChange:g=>nn(Number(g.target.value))})]}),(0,ae.jsxs)("div",{className:X.wireframeNoticeTitleRow,children:[(0,ae.jsx)("span",{className:X.wireframeNoticeTitle,children:"Wireframe Mode"}),(0,ae.jsx)("span",{className:X.wireframeNoticeDivider}),(0,ae.jsx)("button",{className:X.wireframeStartOver,onClick:()=>{Wc(g=>g+1),Yn({sections:[],originalOrder:[],detectedAt:Date.now()}),Er.current={rearrange:null,placements:[]},Ro(""),pc(Xe)},children:"Start Over"})]}),"Drag components onto the canvas.",(0,ae.jsx)("br",{}),"Copied output will only include the wireframed layout."]}),(Ae||We)&&(0,ae.jsx)(Pw,{placements:A,onChange:F,activeComponent:We?null:ne,onActiveComponentChange:fe,isDarkMode:wo,exiting:We,onInteractionChange:U1,passthrough:!ne,extraSnapRects:Ge?.sections.map(g=>g.currentRect),deselectSignal:Y1,clearSignal:Q1,wireframe:Ce,onSelectionChange:(g,x)=>{ts.current=g,x||(ka.current=new Set,X1(L=>L+1))},onDragMove:(g,x)=>{let L=ka.current;if(!(!L.size||!Ge)){if(!ro.current){ro.current=new Map;for(let T of Ge.sections)L.has(T.id)&&ro.current.set(T.id,{x:T.currentRect.x,y:T.currentRect.y})}for(let T of Ge.sections){if(!L.has(T.id)||!ro.current.get(T.id))continue;let K=document.querySelector(`[data-rearrange-section="${T.id}"]`);K&&(K.style.transform=`translate(${g}px, ${x}px)`)}}},onDragEnd:(g,x,L)=>{let T=ka.current,$=ro.current;if(ro.current=null,!(!T.size||!Ge||!$)){for(let K of T){let _e=document.querySelector(`[data-rearrange-section="${K}"]`);_e&&(_e.style.transform="")}L&&Yn(K=>K&&{...K,sections:K.sections.map(_e=>{let we=$.get(_e.id);return we?{..._e,currentRect:{..._e.currentRect,x:Math.max(0,we.x+g),y:Math.max(0,we.y+x)}}:_e})})}}}),(Ae||We)&&Ge&&(0,ae.jsx)(Zw,{rearrangeState:Ge,onChange:Yn,isDarkMode:wo,exiting:We,blankCanvas:Ce,extraSnapRects:A.map(g=>({x:g.x,y:g.y,width:g.width,height:g.height})),clearSignal:K1,deselectSignal:V1,onSelectionChange:(g,x)=>{ka.current=g,x||(ts.current=new Set,ff(L=>L+1))},onDragMove:(g,x)=>{let L=ts.current;if(L.size){if(!ro.current){ro.current=new Map;for(let T of A)L.has(T.id)&&ro.current.set(T.id,{x:T.x,y:T.y})}for(let T of L){let $=document.querySelector(`[data-design-placement="${T}"]`);$&&($.style.transform=`translate(${g}px, ${x}px)`)}}},onDragEnd:(g,x,L)=>{let T=ts.current,$=ro.current;if(ro.current=null,!(!T.size||!$)){for(let K of T){let _e=document.querySelector(`[data-design-placement="${K}"]`);_e&&(_e.style.transform="")}L&&F(K=>K.map(_e=>{let we=$.get(_e.id);return we?{..._e,x:Math.max(0,we.x+g),y:Math.max(0,we.y+x)}:_e}))}}}),(0,ae.jsx)("canvas",{ref:jc,className:`${re.drawCanvas} ${io?re.active:""}`,style:{opacity:Qc?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),(0,ae.jsxs)("div",{className:re.markersLayer,"data-feedback-toolbar":!0,children:[he&&pi.filter(g=>!g.isFixed).map((g,x,L)=>(0,ae.jsx)(H_,{annotation:g,globalIndex:pi.findIndex(T=>T.id===g.id),layerIndex:x,layerSize:L.length,isExiting:M,isClearing:Ve,isAnimated:Ef.has(g.id),isHovered:!M&&Qe===g.id,isDeleting:bt===g.id,isEditingAny:!!C,renumberFrom:qt,markerClickBehavior:nt.markerClickBehavior,tooltipStyle:Of(g),onHoverEnter:T=>!M&&T.id!==La.current&&Na(T),onHoverLeave:()=>Na(null),onClick:T=>nt.markerClickBehavior==="delete"?Zc(T.id):Ia(T),onContextMenu:Ia},g.id)),he&&!M&&Bf.filter(g=>!g.isFixed).map(g=>(0,ae.jsx)(j_,{annotation:g},g.id))]}),(0,ae.jsxs)("div",{className:re.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[he&&pi.filter(g=>g.isFixed).map((g,x,L)=>(0,ae.jsx)(H_,{annotation:g,globalIndex:pi.findIndex(T=>T.id===g.id),layerIndex:x,layerSize:L.length,isExiting:M,isClearing:Ve,isAnimated:Ef.has(g.id),isHovered:!M&&Qe===g.id,isDeleting:bt===g.id,isEditingAny:!!C,renumberFrom:qt,markerClickBehavior:nt.markerClickBehavior,tooltipStyle:Of(g),onHoverEnter:T=>!M&&T.id!==La.current&&Na(T),onHoverLeave:()=>Na(null),onClick:T=>nt.markerClickBehavior==="delete"?Zc(T.id):Ia(T),onContextMenu:Ia},g.id)),he&&!M&&Bf.filter(g=>g.isFixed).map(g=>(0,ae.jsx)(j_,{annotation:g,fixed:!0},g.id))]}),P&&(0,ae.jsxs)("div",{className:re.overlay,"data-feedback-toolbar":!0,style:z||C?{zIndex:99999}:void 0,children:[ue?.rect&&!z&&!ce&&!Do&&(0,ae.jsx)("div",{className:`${re.hoverHighlight} ${re.enter}`,style:{left:ue.rect.left,top:ue.rect.top,width:ue.rect.width,height:ue.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),Gt.filter(g=>document.contains(g.element)).map((g,x)=>{let L=g.element.getBoundingClientRect(),T=Gt.length>1;return(0,ae.jsx)("div",{className:T?re.multiSelectOutline:re.singleSelectOutline,style:{position:"fixed",left:L.left,top:L.top,width:L.width,height:L.height,...T?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},x)}),Qe&&!z&&(()=>{let g=h.find($=>$.id===Qe);if(!g?.boundingBox)return null;if(g.elementBoundingBoxes?.length)return Kt.length>0?Kt.filter($=>document.contains($)).map(($,K)=>{let _e=$.getBoundingClientRect();return(0,ae.jsx)("div",{className:`${re.multiSelectOutline} ${re.enter}`,style:{left:_e.left,top:_e.top,width:_e.width,height:_e.height}},`hover-outline-live-${K}`)}):g.elementBoundingBoxes.map(($,K)=>(0,ae.jsx)("div",{className:`${re.multiSelectOutline} ${re.enter}`,style:{left:$.x,top:$.y-le,width:$.width,height:$.height}},`hover-outline-${K}`));let x=$t&&document.contains($t)?$t.getBoundingClientRect():null,L=x?{x:x.left,y:x.top,width:x.width,height:x.height}:{x:g.boundingBox.x,y:g.isFixed?g.boundingBox.y:g.boundingBox.y-le,width:g.boundingBox.width,height:g.boundingBox.height},T=g.isMultiSelect;return(0,ae.jsx)("div",{className:`${T?re.multiSelectOutline:re.singleSelectOutline} ${re.enter}`,style:{left:L.x,top:L.y,width:L.width,height:L.height,...T?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),ue&&!z&&!ce&&!Do&&(0,ae.jsxs)("div",{className:`${re.hoverTooltip} ${re.enter}`,style:{left:Math.max(8,Math.min(ge.x,window.innerWidth-100)),top:Math.max(ge.y-(ue.reactComponents?48:32),8)},children:[ue.reactComponents&&(0,ae.jsx)("div",{className:re.hoverReactPath,children:ue.reactComponents}),(0,ae.jsx)("div",{className:re.hoverElementName,children:ue.elementName})]}),z&&(0,ae.jsxs)(ae.Fragment,{children:[z.multiSelectElements?.length?z.multiSelectElements.filter(g=>document.contains(g)).map((g,x)=>{let L=g.getBoundingClientRect();return(0,ae.jsx)("div",{className:`${re.multiSelectOutline} ${ss?re.exit:re.enter}`,style:{left:L.left,top:L.top,width:L.width,height:L.height}},`pending-multi-${x}`)}):z.targetElement&&document.contains(z.targetElement)?(()=>{let g=z.targetElement.getBoundingClientRect();return(0,ae.jsx)("div",{className:`${re.singleSelectOutline} ${ss?re.exit:re.enter}`,style:{left:g.left,top:g.top,width:g.width,height:g.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():z.boundingBox&&(0,ae.jsx)("div",{className:`${z.isMultiSelect?re.multiSelectOutline:re.singleSelectOutline} ${ss?re.exit:re.enter}`,style:{left:z.boundingBox.x,top:z.boundingBox.y-le,width:z.boundingBox.width,height:z.boundingBox.height,...z.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{let g=z.x,x=z.isFixed?z.y:z.y-le;return(0,ae.jsxs)(ae.Fragment,{children:[(0,ae.jsx)(Qv,{x:g,y:x,isMultiSelect:z.isMultiSelect,isExiting:ss}),(0,ae.jsx)(gc,{ref:If,element:z.element,selectedText:z.selectedText,computedStyles:z.computedStylesObj,placeholder:z.element==="Area selection"?"What should change in this area?":z.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:sy,onCancel:Gc,isExiting:ss,lightMode:!wo,accentColor:z.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,g/100*window.innerWidth)),...x>window.innerHeight-290?{bottom:window.innerHeight-x+20}:{top:x+20}}})]})})()]}),C&&(0,ae.jsxs)(ae.Fragment,{children:[C.elementBoundingBoxes?.length?W.length>0?W.filter(g=>document.contains(g)).map((g,x)=>{let L=g.getBoundingClientRect();return(0,ae.jsx)("div",{className:`${re.multiSelectOutline} ${re.enter}`,style:{left:L.left,top:L.top,width:L.width,height:L.height}},`edit-multi-live-${x}`)}):C.elementBoundingBoxes.map((g,x)=>(0,ae.jsx)("div",{className:`${re.multiSelectOutline} ${re.enter}`,style:{left:g.x,top:g.y-le,width:g.width,height:g.height}},`edit-multi-${x}`)):(()=>{let g=R&&document.contains(R)?R.getBoundingClientRect():null,x=g?{x:g.left,y:g.top,width:g.width,height:g.height}:C.boundingBox?{x:C.boundingBox.x,y:C.isFixed?C.boundingBox.y:C.boundingBox.y-le,width:C.boundingBox.width,height:C.boundingBox.height}:null;return x?(0,ae.jsx)("div",{className:`${C.isMultiSelect?re.multiSelectOutline:re.singleSelectOutline} ${re.enter}`,style:{left:x.x,top:x.y,width:x.width,height:x.height,...C.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),(0,ae.jsx)(gc,{ref:Nf,element:C.element,selectedText:C.selectedText,computedStyles:Yw(C.computedStyles),placeholder:"Edit your feedback...",initialValue:C.comment,submitLabel:"Save",onSubmit:ay,onCancel:ly,onDelete:()=>Zc(C.id),isExiting:oy,lightMode:!wo,accentColor:C.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{let g=C.isFixed?C.y:C.y-le;return{left:Math.max(160,Math.min(window.innerWidth-160,C.x/100*window.innerWidth)),...g>window.innerHeight-290?{bottom:window.innerHeight-g+20}:{top:g+20}}})()})]}),Do&&(0,ae.jsxs)(ae.Fragment,{children:[(0,ae.jsx)("div",{ref:as,className:re.dragSelection}),(0,ae.jsx)("div",{ref:ls,className:re.highlightsContainer})]})]})]}),document.body)}var ab=/^(.*?)__[A-Za-z0-9_-]{4,}$/;function y0(e){return(typeof e.className=="string"?e.className:e.getAttribute("class")||"").trim().split(/\s+/).filter(Boolean).map(n=>{let o=ab.exec(n);return o&&o[1]?o[1]:n})}function xc(e){return(typeof e.className=="string"?e.className:e.getAttribute("class")||"").trim().split(/\s+/).filter(Boolean).sort()}function p0(e){let t=globalThis;return t.CSS&&typeof t.CSS.escape=="function"?t.CSS.escape(e):e.replace(/[^a-zA-Z0-9_-]/g,n=>`\\${n}`)}function f0(e,t=document.body){let n=[],o=e;for(;o&&o!==t&&o.nodeType===1;){let r=o.tagName.toLowerCase();if(o.id)r+=`#${o.id}`;else{let i=xc(o);i.length&&(r+=`.${i.join(".")}`)}if(o.parentElement&&!o.id){let i=xc(o).join("."),s=o.tagName,a=o,l=Array.from(o.parentElement.children).filter(c=>c.tagName===s&&xc(c).join(".")===i);l.length>1&&(r+=`[${l.indexOf(a)}]`)}n.unshift(r),o=o.parentElement}return n.join(" > ")}function lb(e,t=6){let n=[],o=e,r=0;for(;o&&o!==document.body&&r<t;)n.unshift(o.tagName.toLowerCase()),o=o.parentElement,r++;return n.join(" > ")}function h0(e){if(e.id&&document.querySelectorAll(`#${p0(e.id)}`).length===1)return`#${e.id}`;for(let r of["data-testid","data-test-id","data-cy","name","aria-label"]){let i=e.getAttribute(r);if(!i)continue;let s=`${e.tagName.toLowerCase()}[${r}="${i.replace(/"/g,'\\"')}"]`;try{if(document.querySelectorAll(s).length===1)return s}catch{}}let t=xc(e);if(t.length){let r=`${e.tagName.toLowerCase()}.${t.map(p0).join(".")}`;try{if(document.querySelectorAll(r).length===1)return r}catch{}}let n=[],o=e;for(;o&&o!==document.documentElement;){let r=o.parentElement;if(!r)break;let i=Array.from(r.children).indexOf(o)+1;if(n.unshift(`${o.tagName.toLowerCase()}:nth-child(${i})`),r.id){n.unshift(`#${r.id}`);break}o=r}return n.join(" > ")}function m0(e){let t="";if(e.childNodes.forEach(i=>{i.nodeType===3&&i.nodeValue&&(t+=i.nodeValue)}),t=t.trim().replace(/\s+/g," "),t&&t.length<=32)return t;let n=e.getAttribute("aria-label");if(n&&n.length<=32)return n;let o=e.tagName.toLowerCase(),r=y0(e).slice(0,2);return r.length?`${o}.${r.join(".")}`:o}var cb=["display","position","width","height","margin","padding","flex-direction","justify-content","align-items","gap","grid-template-columns","font-family","font-size","font-weight","line-height","letter-spacing","text-align","color","background-color","border","border-radius","box-shadow","opacity","z-index","overflow"];function db(e){let t=window.getComputedStyle(e),n={};for(let o of cb){let r=t.getPropertyValue(o);r&&r!=="none"&&r!=="normal"&&r!=="auto"&&(n[o]=r.trim())}return n}function ub(e){let t=[],n=e.getAttribute("role")||pb(e);n&&t.push(`role=${n}`);let o=e.getAttribute("aria-label")||e.getAttribute("alt")||e.getAttribute("title")||e.innerText?.trim().slice(0,40)||"";o&&t.push(`name="${o.replace(/\s+/g," ")}"`);for(let r of["aria-expanded","aria-selected","aria-disabled","aria-hidden","disabled"]){let i=e.getAttribute(r);i!=null&&t.push(`${r}=${i||"true"}`)}return e instanceof HTMLElement&&e.tabIndex>=0&&t.push(`tabindex=${e.tabIndex}`),t.join(" ")}function pb(e){let t=e.tagName.toLowerCase();return{a:"link",button:"button",input:"textbox",select:"combobox",textarea:"textbox",nav:"navigation",main:"main",header:"banner",footer:"contentinfo",h1:"heading",h2:"heading",h3:"heading",img:"img",ul:"list",ol:"list",li:"listitem",table:"table",form:"form"}[t]||""}function fb(e,t=240){let n=e.innerText?.trim().replace(/\s+/g," ")||"";if(n.length>=20)return n.slice(0,t);let o=e.parentElement,r=o&&o.innerText?.trim().replace(/\s+/g," ")||"";return(n||r).slice(0,t)}function hb(e){let t=e,n=Object.keys(t).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"));if(!n)return;let o=t[n],r=g0(o?._debugSource);for(let i=0;o&&i<30;i++){let s=o.elementType||o.type,a=null;if(typeof s=="function")a=s.displayName||s.name||null;else if(s&&typeof s=="object"&&"$$typeof"in s){if(s.render)a=s.render.displayName||s.render.name||"ForwardRef";else if(s.type){let l=s.type;a=typeof s.type=="function"&&(l.displayName||l.name)||"Memo"}}if(a){let l={name:a,props:mb(o.memoizedProps||o.pendingProps)},c=r??g0(o._debugSource);return c&&(l.source=c),l}o=o.return??null}}function g0(e){return e?.fileName?`${e.fileName}${e.lineNumber?`:${e.lineNumber}`:""}${e.columnNumber?`:${e.columnNumber}`:""}`:null}function mb(e){let t={};for(let n of Object.keys(e||{})){if(n==="children")continue;let o=e[n];if(o==null||typeof o=="string"||typeof o=="number"||typeof o=="boolean")t[n]=o;else if(typeof o=="function")t[n]="[Function]";else if(o instanceof Element)t[n]="[DOMNode]";else try{t[n]=JSON.parse(JSON.stringify(o))}catch{t[n]=Array.isArray(o)?`[Array(${o.length})]`:"[Object]"}}return t}function _0(e){let t=e.getBoundingClientRect();return{x:t.left,y:t.top,width:t.width,height:t.height}}function fa(e,t={}){let n=_0(e),o={label:m0(e),selector:h0(e),path:lb(e),fullPath:f0(e),tagName:e.tagName.toLowerCase(),rect:n,pageX:n.x+window.scrollX,pageY:n.y+window.scrollY,computedStyles:db(e),accessibility:ub(e),nearbyText:fb(e)};e.id&&(o.id=e.id);let r=y0(e);r.length&&(o.classes=r.join(" "));let i=hb(e);return i&&(o.reactComponent=i),t.selectedText&&(o.selectedText=t.selectedText),t.additionalElements?.length&&(o.additional=t.additionalElements.map(s=>({label:m0(s),selector:h0(s),fullPath:f0(s),rect:_0(s)}))),o}function x0(e){let t=[e.selector,e.fullPath].filter(Boolean);for(let n of t)try{let o=document.querySelector(n);if(o instanceof HTMLElement)return o}catch{}return null}var gb={start:{en:"Start feedback mode",fr:"Annoter le produit"},stop:{en:"Stop feedback mode",fr:"Terminer l\u2019annotation"},design:{en:"Edit the design",fr:"Retoucher le design"},device:{en:"Change the page width",fr:"Changer la largeur de page"},designExit:{en:"Exit design mode",fr:"Quitter le mode design"},hideMarkers:{en:"Hide markers",fr:"Masquer les rep\xE8res"},showMarkers:{en:"Show markers",fr:"Afficher les rep\xE8res"},copy:{en:"Copy feedback",fr:"Copier les retours"},copied:{en:"Feedback copied",fr:"Retours copi\xE9s"},send:{en:"Send annotations",fr:"Envoyer les retours"},sending:{en:"Sending\u2026",fr:"Envoi\u2026"},sent:{en:"Sent",fr:"Envoy\xE9"},sendFailed:{en:"Send failed",fr:"Envoi impossible"},clear:{en:"Clear all",fr:"Tout effacer"},theme:{en:"Theme",fr:"Th\xE8me"},cancel:{en:"Cancel",fr:"Annuler"},save:{en:"Save",fr:"Enregistrer"},delete:{en:"Delete",fr:"Supprimer"},placeholder:{en:"What should change?",fr:"Qu\u2019est-ce qui doit changer ?"},nothingToSend:{en:"Nothing to send yet.",fr:"Aucun retour \xE0 envoyer."},photograph:{en:"Photograph this element",fr:"Prendre une photo de cet \xE9l\xE9ment"},removePhoto:{en:"Remove the photo",fr:"Retirer la photo"},viewPhoto:{en:"View the photo",fr:"Voir la photo"},captureFailed:{en:"Capture failed.",fr:"Capture impossible."},kindFeature:{en:"Improvement",fr:"\xC9volution"},kindBug:{en:"Fix",fr:"Correctif"},kindDesign:{en:"Design",fr:"Design"},designAdded:{en:"Tweaks added to your feedback.",fr:"Retouches ajout\xE9es \xE0 vos retours."},designEmpty:{en:"No tweaks yet.",fr:"Aucune retouche pour l\u2019instant."},designDevHost:{en:"Design mode requires a dev server (localhost).",fr:"Le mode design demande un serveur de dev (localhost)."},designTitle:{en:"Design \u2014 {n} tweak(s)",fr:"Design \u2014 {n} retouche(s)"},multiSelect:{en:"{n} elements",fr:"{n} \xE9l\xE9ments"},wireframe:{en:"Wireframe mode",fr:"Mode wireframe"},wireframeComponent:{en:"Wireframe New Component",fr:"Wireframe d\u2019un composant"},wireframePick:{en:"Pick the component to rearrange.",fr:"Choisis le composant \xE0 r\xE9agencer."},wireframeAdded:{en:"Rearrangement added to your feedback.",fr:"R\xE9agencement ajout\xE9 \xE0 vos retours."},wireframeEmpty:{en:"Nothing moved yet.",fr:"Rien n\u2019a encore boug\xE9."},wireframeNoTarget:{en:"Click an element on the page first.",fr:"Clique d\u2019abord un \xE9l\xE9ment de la page."},itemGone:{en:"That element is no longer on the page.",fr:"Cet \xE9l\xE9ment n\u2019est plus sur la page."},feedbackTitle:{en:"Page feedback",fr:"Retours produit"},noComment:{en:"(no comment)",fr:"(sans commentaire)"}};function w0(e){return e==="fr"||e==="en"?e:e==="auto"&&(typeof navigator<"u"&&navigator.language||"").toLowerCase().startsWith("fr")?"fr":"en"}function _b(e,t,n){let o=gb[t],r=o[e]??o.en;if(n)for(let[i,s]of Object.entries(n))r=r.split(`{${i}}`).join(String(s));return r}function vr(e,t){return typeof e=="string"?e:e[t]??e.en??e.fr??""}function v0(e){return(t,n)=>_b(e(),t,n)}function yb(e,t){let n=e.target.fullPath??"",o=t.target.fullPath??"";return!n||!o||n===o?!0:n.startsWith(o)||o.startsWith(n)}function xb(e){let t=[];for(let n of e){let o=t.filter(s=>s.some(a=>yb(n,a)));if(!o.length){t.push([n]);continue}let r=o[0],i=o.slice(1);r.push(n);for(let s of i)r.push(...s),t.splice(t.indexOf(s),1)}return t}function b0(e,t,n){let o=t.map(i=>i.id),r=new Map;for(let i of e){let s=r.get(i.kind)??[];s.push(i),r.set(i.kind,s)}return Array.from(r.keys()).sort((i,s)=>{let a=o.indexOf(i),l=o.indexOf(s);return(a===-1?99:a)-(l===-1?99:l)}).map(i=>{let s=r.get(i)??[],a=t.find(l=>l.id===i);return{kind:i,label:a?vr(a.label,n):i,items:s,blocks:xb(s)}})}function k0(e){let t=new Map,n=0;for(let o of e)for(let r of o.items)n+=1,t.set(r.id,n);return t}function C0(e,t){if(!e.length)return[];let n=i=>t.get(i.id)??0,o=e.reduce((i,s)=>i+s.blocks.length,0),r=[];r.push("## How to work through this"),r.push(""),r.push(`${e.length===1?"One kind of work":`${e.length} kinds of work`}, ${o} independent group${o===1?"":"s"} in total. Run one sub-agent per group \u2014 every group below touches a different part of the page, so none of them can get in another's way.`),r.push("");for(let i of e)r.push(`### ${i.label} \u2014 ${i.items.length} item${i.items.length===1?"":"s"}`),r.push(""),i.blocks.forEach((s,a)=>{let l=s.map(n).join(", ");if(s.length===1)r.push(`- Group ${a+1}: item ${l} \u2014 \`${s[0].target.label}\``);else{r.push(`- Group ${a+1}: items ${l} \u2014 one worker takes all of them, in this order. These elements contain one another, so splitting them would have two workers changing the same component from two directions.`);for(let c of s)r.push(`  - ${n(c)}. \`${c.target.label}\``)}}),r.push("");return r.push("Every item below carries the element it belongs to (selector, DOM path, component). Give a sub-agent the items in its group and nothing else \u2014 the selectors are the contract, and a worker that wanders outside them is the one that breaks the page."),r.push(""),r}function wb(e){return`agentation-rearrange-${e}`}function E0(e){try{let t=window.localStorage.getItem(wb(e));if(!t)return null;let n=JSON.parse(t),o=Array.isArray(n.sections)?n.sections:[],r=Array.isArray(n.originalOrder)?n.originalOrder:[];return o.length?{sections:o,originalOrder:r}:null}catch{return null}}function S0(e,t){return typeof e.label=="string"&&e.label||typeof e.selector=="string"&&e.selector||typeof e.id=="string"&&e.id||`section ${t+1}`}function vb(e,t){return typeof e.id=="string"&&e.id||typeof e.selector=="string"&&e.selector||String(t)}function M0(e){if(!e)return null;let{sections:t,originalOrder:n}=e,o=t.map((a,l)=>S0(a,l)),r=t.map((a,l)=>vb(a,l)),i=[];n.length&&r.forEach((a,l)=>{let c=n.indexOf(a);c>=0&&c!==l&&i.push({name:o[l]??a,from:c+1,to:l+1})});let s=t.map((a,l)=>({name:S0(a,l),width:typeof a.width=="number"?Math.round(a.width):void 0,height:typeof a.height=="number"?Math.round(a.height):void 0})).filter(a=>a.width!=null||a.height!=null);return!i.length&&!s.length?null:{moved:i,resized:s,order:o}}function L0(e){if(!e)return[];let t=[];if(t.push("## Page layout rearranged"),t.push(""),t.push("These are moves the user made directly on the page with Layout mode. They are part of the request, not a preview: reproduce them in the source, in the markup that renders these sections."),t.push(""),e.moved.length){t.push("Moved:");for(let n of e.moved)t.push(`- \`${n.name}\` \u2014 position ${n.from} \u2192 ${n.to}`);t.push("")}if(e.resized.length){t.push("Resized:");for(let n of e.resized){let o=[n.width!=null?`${n.width}px wide`:"",n.height!=null?`${n.height}px tall`:""].filter(Boolean).join(", ");t.push(`- \`${n.name}\` \u2014 ${o}`)}t.push("")}return t.push(`Final order, top to bottom: ${e.order.map(n=>`\`${n}\``).join(" \u2192 ")}`),t.push(""),t}function bb(e,t,n){let o=e.find(r=>r.id===t);return o?vr(o.label,n):t}function kb(e){if(!e)return"";let t=Object.entries(e);return t.length?t.map(([n,o])=>`${n}: ${o}`).join("; "):""}function Cb(e,t,n,o){let r=e.target,i=[];if(i.push(`### ${t}. ${e.comment.trim()||"(no comment)"}`),i.push(""),i.push(`- **Kind**: ${bb(o,e.kind,n)}`),i.push(`- **Element**: \`${r.label}\``),i.push(`- **Selector**: \`${r.selector}\``),i.push(`- **DOM path**: \`${r.fullPath}\``),r.classes&&i.push(`- **Classes**: \`${r.classes}\``),r.reactComponent?.name){let a=r.reactComponent.name,l=a.includes("<")?a:`<${a}>`,c=r.reactComponent.source?` (\`${r.reactComponent.source}\`)`:"";i.push(`- **React component**: \`${l}\`${c}`)}i.push(`- **Position**: x=${Math.round(r.rect.x)} y=${Math.round(r.rect.y)} ${Math.round(r.rect.width)}\xD7${Math.round(r.rect.height)}`),r.viewport&&i.push(`- **Written at**: ${r.viewport.label}`),r.selectedText&&i.push(`- **Selected text**: "${r.selectedText.slice(0,200)}"`),r.accessibility&&i.push(`- **Accessibility**: ${r.accessibility}`);let s=kb(r.computedStyles);if(s&&i.push(`- **Computed styles**: ${s}`),r.nearbyText&&i.push(`- **Nearby text**: "${r.nearbyText.slice(0,200)}"`),e.screenshot?.path&&i.push(`- **Screenshot**: ${e.screenshot.path}`),r.additional?.length){i.push(`- **Also selected (${r.additional.length})**:`);for(let a of r.additional)i.push(`  - \`${a.label}\` \u2014 \`${a.selector}\``)}if(e.designChanges?.length){i.push(`- **Design edits (${e.designChanges.length})**:`);for(let a of e.designChanges){let l=a.statePseudo?` (\`${a.statePseudo}\`)`:"";i.push(`  - \`${a.elementTagName||"element"}\`${l} \xB7 \`${a.property}\`: \`${a.oldValue}\` \u2192 \`${a.newValue}\``)}}return i.join(`
`)}function T0(e,t){let n=L0(M0(E0(t.pagePath)));if(!e.length&&!n.length)return"";let{locale:o,kinds:r}=t,i=[];i.push(`## Page feedback \u2014 ${t.pagePath}`),i.push(""),i.push(`- **URL**: ${t.url}`),t.title&&i.push(`- **Page**: ${t.title}`),i.push(`- **Items**: ${e.length}`),t.viewportLine&&i.push(`- **Annotated at**: ${t.viewportLine}`),i.push(""),i.push(...n);let s=b0(e,r,o),a=k0(s);i.push(...C0(s,a));for(let c of s){i.push(`## ${c.label} (${c.items.length})`),i.push("");for(let d of c.items)i.push(Cb(d,a.get(d.id)??0,o,r)),i.push("")}let l=e.filter(c=>c.designChanges?.length);if(l.length){i.push("## Applying the design edits"),i.push(""),t.designGuidance&&(i.push("```"),i.push(t.designGuidance.trim()),i.push("```"),i.push("")),i.push("<details><summary>Every design edit, as structured records</summary>"),i.push(""),i.push("```");for(let c of l)i.push(`# Item ${a.get(c.id)??0} \u2014 ${c.target.label}`),i.push((c.designChangeBlock??c.designPrompt??"").trim()),i.push("");i.push("```"),i.push(""),i.push("</details>"),i.push("")}return i.join(`
`).trim()}function Sb(){try{let e="__adk_probe__";return window.localStorage.setItem(e,"1"),window.localStorage.removeItem(e),!0}catch{return!1}}function $0(e="adk",t=!0){let n=new Map,o=t&&typeof window<"u"&&Sb(),r=s=>`${e}:annotations:${s||"/"}`,i=`${e}:session`;return{load(s){if(!o)return n.get(s)??[];let a=window.localStorage.getItem(r(s));if(!a)return[];try{let l=JSON.parse(a);return Array.isArray(l)?l:[]}catch(l){try{window.localStorage.setItem(`${r(s)}:corrupt:${Date.now()}`,a)}catch{}return console.warn("[annotate-kit] corrupted annotation store, backed up",l),[]}},save(s,a){if(!o){n.set(s,a);return}try{window.localStorage.setItem(r(s),JSON.stringify(a))}catch(l){console.warn("[annotate-kit] could not persist annotations",l)}},clear(s){if(n.delete(s),!!o)try{window.localStorage.removeItem(r(s))}catch{}},sessionId(){if(!o)return Up();try{let s=window.localStorage.getItem(i);if(s)return s;let a=Up();return window.localStorage.setItem(i,a),a}catch{return Up()}}}}function Up(){let e=globalThis.crypto;return e&&typeof e.randomUUID=="function"?e.randomUUID():`adk-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function wc(e="a"){return`${e}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}var Eb=/^adk_(use|adapt)_([a-z0-9-]{2,40})_([A-Za-z0-9_-]{8,})$/,Qo={tier:"evaluation"},I0=!1;function N0(e){if(!e)return Qo={tier:"evaluation"},Qo;let t=Eb.exec(e.trim());return t?(Qo={tier:t[1],organisation:t[2],key:e},Qo):(Qo={tier:"evaluation",key:e,problem:"The licence key is not in the expected format."},Qo)}function Mb(){return Qo.tier!=="evaluation"}function P0(){if(I0||typeof window>"u")return;I0=!0;let e=window.location.hostname,t=e==="localhost"||e==="127.0.0.1"||e.endsWith(".local");if(Qo.problem){console.warn(`[annotate-kit] ${Qo.problem} Running in evaluation mode.`);return}!Mb()&&!t&&console.info("[annotate-kit] Running unlicensed (30-day evaluation). A licence covers production use: https://github.com/Connected-Mate/annotate-design-kit#licence")}var ei=null;function R0(){return typeof navigator.mediaDevices?.getDisplayMedia=="function"&&typeof window.ImageCapture<"u"}async function Lb(){if(ei&&ei.getVideoTracks().some(t=>t.readyState==="live"))return ei;let e=navigator.mediaDevices;if(!e?.getDisplayMedia)return null;try{return ei=await e.getDisplayMedia({video:{displaySurface:"browser"},audio:!1,preferCurrentTab:!0}),ei.getVideoTracks().forEach(t=>{t.addEventListener("ended",()=>{ei=null})}),ei}catch{return null}}async function D0(e){let n=(await Lb())?.getVideoTracks()[0];if(!n)return null;let o;try{let b=window.ImageCapture;o=await new b(n).grabFrame()}catch{return null}let r=o.width/window.innerWidth,i=Math.max(0,o.height-window.innerHeight*r),s=8,a=Math.max(0,(e.x-s)*r),l=Math.max(0,(e.y-s)*r+i),c=Math.min(o.width-a,(e.width+s*2)*r),d=Math.min(o.height-l,(e.height+s*2)*r);if(c<=0||d<=0)return o.close?.(),null;let m=document.createElement("canvas");m.width=Math.round(c),m.height=Math.round(d);let f=m.getContext("2d");return f?(f.drawImage(o,a,l,c,d,0,0,m.width,m.height),o.close?.(),{dataUrl:m.toDataURL("image/png"),path:`capture-${Math.round(e.x)}x${Math.round(e.y)}-${m.width}x${m.height}.png`}):(o.close?.(),null)}function vc(){return{name:"clipboard",async send(e){return await ha(e.markdown)?{ok:!0}:{ok:!1,message:"clipboard unavailable"}}}}function A0(e,t="callback"){return{name:t,async send(n){let o=await e(n);return o&&typeof o=="object"&&"ok"in o?o:{ok:!0}}}}function B0(){return{name:"console",send(e){return console.info("[annotate-kit] feedback payload",e),console.info(e.markdown),{ok:!0}}}}async function ha(e){try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(e),!0}catch{}try{let t=document.createElement("textarea");t.value=e,t.setAttribute("data-adk-root",""),t.style.cssText="position:fixed;top:-1000px;left:-1000px;opacity:0;",document.body.appendChild(t),t.select();let n=document.execCommand("copy");return t.remove(),n}catch{return!1}}var bc=["[data-agentation-root]","[data-agentation-toolbar]","[data-feedback-toolbar]","[data-annotation-popup]","[data-annotation-marker]","[data-adk-root]","[data-adk-toast]","[data-adk-devices]","[data-adk-history]"];function Yp(e){return e instanceof Element?bc.some(t=>e.closest(t))?!0:typeof e.className=="string"&&e.className.includes("styles-module"):!1}function gn(e,t={}){document.querySelector("[data-adk-toast]")?.remove();let n=document.createElement("div");n.setAttribute("data-adk-toast",""),n.textContent=e,n.style.cssText=["position:fixed","left:50%","bottom:84px","transform:translateX(-50%)","padding:8px 14px","border-radius:9999px","background:#1a1a1a","color:#fff",'font:500 12px/1 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',"box-shadow:0 4px 20px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.08)","z-index:2147483646","pointer-events:none"].join(";"),document.body.appendChild(n),window.setTimeout(()=>n.remove(),t.duration??3200)}function O0(e){let{popup:t,kinds:n,locale:o,accent:r,onChange:i}=e;if(t.querySelector("[data-adk-kinds]"))return null;let s=t.className.includes("light"),a=s?"rgba(0,0,0,0.45)":"rgba(255,255,255,0.45)",l=s?"rgba(0,0,0,0.04)":"rgba(255,255,255,0.05)",c=s?"rgba(0,0,0,0.1)":"rgba(255,255,255,0.12)",d=document.createElement("div");d.setAttribute("data-adk-kinds",""),d.style.cssText=["display:inline-flex","gap:2px","padding:2px","margin:0 0 0.5rem","border-radius:9999px",`background:${l}`,`border:1px solid ${c}`].join(";");let m=new Map,f=e.current;function b(){m.forEach((k,h)=>{let _=h===f;k.style.background=_?r:"transparent",k.style.color=_?"#fff":a,k.setAttribute("aria-pressed",String(_))})}for(let k of n){let h=document.createElement("button");h.type="button",h.dataset.adkKind=k.id,h.textContent=vr(k.label,o),h.style.cssText=["height:20px","padding:0 9px","border:0","border-radius:9999px",'font:700 10px/20px system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',"letter-spacing:0.3px","text-transform:uppercase","cursor:pointer","transition:background-color 0.15s ease, color 0.15s ease"].join(";"),h.addEventListener("click",_=>{_.preventDefault(),_.stopPropagation(),f=k.id,b(),i(k.id)}),m.set(k.id,h),d.appendChild(h)}b();let v=t.querySelector('[class*="header"]'),P=t.querySelector('textarea, input[type="text"]');return v&&v.parentElement===t?v.insertAdjacentElement("afterend",d):P?.parentElement?P.parentElement.insertBefore(d,P):t.insertBefore(d,t.firstChild),d}function Vp(e){let{toolbar:t,key:n}=e,o=t.querySelector(`[data-adk-tool="${n}"]`);if(o){if(!e.owner||o.dataset.adkOwner===e.owner)return o;o.remove()}let i=Array.from(t.querySelectorAll("button")).find(b=>!b.hasAttribute("data-adk-tool"));if(!i)return null;let s=i.cloneNode(!1);s.dataset.adkTool=n,e.owner&&(s.dataset.adkOwner=e.owner),s.type="button",s.title=e.title,s.setAttribute("aria-label",e.title),e.render(s),s.addEventListener("click",b=>{b.preventDefault(),b.stopPropagation(),e.onClick()});let a=i.parentElement,l=s;if(a&&a!==t){let b=a.cloneNode(!1);b.appendChild(s),l=b}let c=Array.from((a&&a!==t?a.parentElement:t)?.children??[]),d=Math.max(0,c.length-(e.fromEnd??2)),m=c[d]??null;return(a&&a!==t?a.parentElement:t).insertBefore(l,m),s}function z0(e){let{popup:t,labels:n,accent:o}=e;if(t.querySelector("[data-adk-camera]"))return;getComputedStyle(t).position==="static"&&(t.style.position="relative");let r=t.className.includes("light"),i=document.createElement("div");i.setAttribute("data-adk-camera",""),i.style.cssText="position:absolute;top:8px;right:8px;display:inline-flex;align-items:center;gap:4px;z-index:10;pointer-events:auto";let s=document.createElement("div");s.title=n.view,s.style.cssText=`width:22px;height:22px;border-radius:6px;background-size:cover;background-position:center;border:1px solid ${r?"rgba(0,0,0,0.12)":"rgba(255,255,255,0.2)"};display:none;cursor:zoom-in`;let a=document.createElement("button");a.type="button",a.title=n.capture,a.innerHTML=Tb;let l=r?"rgba(0,0,0,0.04)":"rgba(255,255,255,0.08)",c=r?"rgba(0,0,0,0.45)":"rgba(255,255,255,0.66)";a.style.cssText=`width:22px;height:22px;border:0;border-radius:6px;background:${l};color:${c};cursor:pointer;display:inline-flex;align-items:center;justify-content:center;padding:0;transition:background-color 0.15s ease, color 0.15s ease`;let d=null,m=()=>{d=null,a.style.background=l,a.style.color=c,a.title=n.capture,s.style.display="none",s.style.backgroundImage="",e.onClear()};a.addEventListener("click",async f=>{if(f.preventDefault(),f.stopPropagation(),d){m();return}a.style.background=o,a.style.color="#fff";let b=await e.onCapture();if(!b){m();return}d=b,a.title=n.remove,s.style.backgroundImage=`url("${b}")`,s.style.display="block"}),s.addEventListener("click",f=>{f.preventDefault(),f.stopPropagation(),d&&e.onView(d)}),i.append(s,a),t.appendChild(i)}function kc(e,t){let n=i=>{i instanceof HTMLElement&&!i.hasAttribute(t)&&i.setAttribute(t,""),i.querySelectorAll("*").forEach(s=>{s instanceof HTMLElement&&!s.hasAttribute(t)&&s.setAttribute(t,"")})},o=(e instanceof ShadowRoot,e);Array.from(o.children).forEach(n);let r=new MutationObserver(i=>{for(let s of i)s.addedNodes.forEach(a=>{a instanceof HTMLElement&&n(a)})});return r.observe(o,{childList:!0,subtree:!0}),()=>r.disconnect()}function Cc(e){let t=["mousemove","mouseover","mouseout","pointermove"],n=o=>o.stopPropagation();for(let o of t)e.addEventListener(o,n);return()=>{for(let o of t)e.removeEventListener(o,n)}}function Sc(e){e.querySelectorAll("svg").forEach(t=>{t.removeAttribute("color"),t.querySelectorAll("*").forEach(n=>{let o=n.getAttribute("fill");o&&o!=="none"&&n.setAttribute("fill","currentColor");let r=n.getAttribute("stroke");r&&r!=="none"&&n.setAttribute("stroke","currentColor")})})}function F0(e){let t=document.createElement("div");t.setAttribute("data-adk-lightbox",""),t.style.cssText="position:fixed;inset:0;z-index:2147483646;display:flex;align-items:center;justify-content:center;background:rgba(10,10,12,0.72);cursor:zoom-out";let n=document.createElement("img");n.src=e,n.style.cssText="max-width:86%;max-height:86%;border-radius:14px;box-shadow:0 24px 64px rgba(0,0,0,0.5)",t.appendChild(n);let o=()=>{t.remove(),document.removeEventListener("keydown",r,!0)},r=i=>{i.key==="Escape"&&(i.stopPropagation(),o())};t.addEventListener("click",o),document.addEventListener("keydown",r,!0),document.body.appendChild(t)}function W0(){if(document.getElementById("adk-overlay-fixes"))return;let e=document.createElement("style");e.id="adk-overlay-fixes",e.textContent=`
    /* The pill's width is hard-coded in TWO places \u2014 the fixed wrapper (337px)
       and the pill itself per variant (297px / 337px) \u2014 so the extra control we
       add spills outside the dark background. The wrapper must shrink-to-fit
       first: the pill is a flex box, so an auto width inside a fixed-width
       parent would still stretch to that parent instead of hugging its
       contents. Selectors repeat the attribute to outrank their 3-class rules. */
    [class*="toolbar___"][class][class] {
      width: max-content !important;
      max-width: calc(100vw - 40px) !important;
    }
    [class*="toolbarContainer"][class*="expanded"][class][class] {
      width: max-content !important;
      max-width: calc(100vw - 40px) !important;
    }
    [data-annotation-popup] { max-height: calc(100vh - 24px); }
  `,document.head.appendChild(e)}function H0(e){let t=e.getBoundingClientRect(),n=12,o=t.bottom-(window.innerHeight-n);if(o<=0)return;let r=Math.max(n,t.top-o);e.style.top=`${r}px`}function j0(e){let t=document.querySelector('[class*="canvasToggle"]');if(!t||!t.parentElement)return!1;let n=document.querySelector("[data-adk-layout-entry]");if(n){if(!e.owner||n.dataset.adkOwner===e.owner)return!0;n.remove()}let o=t.cloneNode(!0);o.dataset.adkLayoutEntry="",o.dataset.adkFeatureKey="wireframe",e.owner&&(o.dataset.adkOwner=e.owner),o.classList.remove(...Array.from(o.classList).filter(i=>/active/i.test(i)));let r=o.querySelector('[class*="canvasToggleLabel"]');return r?r.textContent=e.label:o.textContent=e.label,o.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation(),e.onClick()}),t.insertAdjacentElement("afterend",o),!0}function U0(e){let t=document.querySelector("[data-agentation-settings-panel]");if(!t)return;let n=t.querySelector('[class*="settingsBrand"]');n&&n.textContent!==e.name&&(n.textContent=e.name,n.style.cssText='font: 600 14px/1 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;letter-spacing:-0.01em;text-decoration:none;color:inherit;cursor:default',n.removeAttribute("href"),n.removeAttribute("target"),n.removeAttribute("rel"));let o=document.createTreeWalker(t,NodeFilter.SHOW_TEXT),r=[],i=o.nextNode();for(;i;){let s=i.nodeValue??"";/^v\d+\.\d+\.\d+$/.test(s.trim())&&e.version?r.push([i,`v${e.version}`]):/agentation/i.test(s)&&r.push([i,s.replace(/agentation/gi,e.name)]),i=o.nextNode()}for(let[s,a]of r)s.nodeValue=a;e.version&&t.querySelectorAll("*").forEach(s=>{if(s.children.length)return;let a=(s.textContent??"").trim();/^v\d+\.\d+\.\d+$/.test(a)&&a!==`v${e.version}`&&(s.textContent=`v${e.version}`)}),t.querySelectorAll('a[href*="agentation"]').forEach(s=>{s.removeAttribute("href"),s.removeAttribute("target")})}var Tb='<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z"/><circle cx="12" cy="13" r="3.5"/></svg>';var $b=["copy","send","clear","markers","layout","design","wireframe"],Ib={copy:!0,send:!0,clear:!0,markers:!0,layout:!0,design:!0,wireframe:!0},Nb=[{key:"send",label:"Send annotations",hint:"Needs a connected agent \u2014 MCP or webhook."},{key:"copy",label:"Copy feedback",hint:"Copy the markdown to the clipboard."},{key:"layout",label:"Layout / Wireframe mode",hint:"Rearrange the page, or wireframe a component."},{key:"design",label:"Design mode",hint:"Restyle a component live."}],Pb={layout:["wireframe"]},Y0=["pause","layout","markers","copy","send","clear","settings","close"];function X0(e,t){let n=e.querySelector('[data-adk-role="settings"]');if(!n)return;let o=n;for(;o.parentElement&&o.parentElement!==e&&o.parentElement.querySelectorAll('button[class*="controlButton"]').length===1;)o=o.parentElement;for(let r of t){let i=e.querySelector(`[data-adk-tool="${r}"]`);if(!i)continue;let s=i;for(;s.parentElement&&s.parentElement!==e&&s.parentElement.children.length===1;)s=s.parentElement;s.nextElementSibling!==o&&o.parentElement?.insertBefore(s,o)}}function Q0(e){let t=Array.from(e.querySelectorAll('button[class*="controlButton"]')).filter(n=>!n.dataset.adkTool&&n.offsetParent!==null);return t.length!==Y0.length?!1:(t.forEach((n,o)=>{let r=Y0[o];if(!r)return;n.dataset.adkRole=r;let i=n.parentElement;for(;i&&i!==e&&i.querySelectorAll('button[class*="controlButton"]').length===1;)i.dataset.adkRole=r,i=i.parentElement}),!0)}var Rb={wireframe:['[class*="canvasToggle"]','[class*="wireframePurpose"]']};function K0(e,t,n={}){let o={...Ib,...e??{}};try{let c=window.localStorage.getItem(t);c&&(o={...o,...JSON.parse(c)})}catch{}let r=()=>n.canSend?n.canSend():!1;o={...o,send:o.send&&r()},o={...o,copy:!o.send},o={...o,wireframe:o.layout&&o.wireframe};let i=new Set;function s(){try{window.localStorage.setItem(t,JSON.stringify(o))}catch{}}function a(){let c=document.getElementById("adk-feature-flags");c||(c=document.createElement("style"),c.id="adk-feature-flags",document.head.appendChild(c));let d=$b.filter(m=>!o[m]).map(m=>[`[data-adk-role="${m}"]`,`[data-adk-tool="${m}"]`,`[data-adk-layout-entry][data-adk-feature-key="${m}"]`,...Rb[m]??[]].join(","));c.textContent=d.length?`${d.join(",")} { display: none !important; }`:""}function l(){i.forEach(c=>c({...o}))}return{get(){return{...o}},enabled(c){return o[c]},set(c,d){if(o[c]===d)return;if(c==="send"&&d&&!r()){n.onRefused?.("send","Connect an agent first \u2014 MCP or webhook.");return}if(c==="copy"&&!d&&!r()){n.onRefused?.("copy","Nothing to send to yet, so copying is the only way out.");return}let m={...o,[c]:d};(c==="copy"||c==="send")&&(m={...m,[c==="copy"?"send":"copy"]:!d});for(let f of Pb[c]??[])m={...m,[f]:d};o=m,s(),a(),l()},apply:a,onChange(c){return i.add(c),()=>i.delete(c)}}}var V0='[class*="switchContainer"], [class*="switchTrack"], [class*="toggleTrack"], [class*="toggle"], [class*="switch"]';function Db(e,t,n){let o=n?.getBoundingClientRect(),r=Math.round(o?.width||0)||24,i=Math.round(o?.height||0)||16,s=Math.max(2,Math.round(i*.14)),a=i-s*2,l=r-a-s*2,c=document.createElement("button");c.type="button",c.setAttribute("role","switch"),c.style.cssText=["pointer-events:auto","position:relative","flex:0 0 auto",`width:${r}px`,`height:${i}px`,"padding:0","border:0","border-radius:9999px","cursor:pointer","transition:background-color 180ms cubic-bezier(0.16,1,0.3,1)"].join(";");let d=document.createElement("span");d.style.cssText=["position:absolute",`top:${s}px`,`left:${s}px`,`width:${a}px`,`height:${a}px`,"border-radius:50%","background:#fff","box-shadow:0 1px 2px rgba(0,0,0,0.35)","transition:transform 180ms cubic-bezier(0.16,1,0.3,1)"].join(";"),c.appendChild(d);let m=f=>{c.setAttribute("aria-checked",String(f)),c.dataset.adkOn=f?"1":"0",c.style.backgroundColor=f?e:"rgba(255,255,255,0.18)",d.style.transform=f?`translateX(${l}px)`:"translateX(0)"};return m(t),{track:c,paint:m,travel:l}}function q0(e){let{panel:t,features:n}=e,o=()=>{t.querySelectorAll("[data-adk-feature]").forEach(c=>{let d=c.dataset.adkFeature,m=n.enabled(d),f=c.querySelector('[role="switch"]'),b=f?.firstElementChild;if(f&&(f.setAttribute("aria-checked",String(m)),f.dataset.adkOn=m?"1":"0",f.style.backgroundColor=m?e.accent:"rgba(255,255,255,0.18)",b)){let v=f.getBoundingClientRect().width-b.getBoundingClientRect().width-2*parseFloat(b.style.left||"2");b.style.transform=m?`translateX(${Math.round(v)}px)`:"translateX(0)"}})};if(t.querySelector("[data-adk-features]")){o();return}let i=Array.from(t.querySelectorAll('[class*="settingsRow"]')).find(c=>c.querySelector(V0)),s=i?.parentElement;if(!i||!s)return;let a=document.createElement("div");a.setAttribute("data-adk-features","");let l=document.createElement("div");l.textContent=e.title??"Tools",l.style.cssText='margin:14px 0 6px;font:600 11px/1 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;letter-spacing:0.08em;text-transform:uppercase;opacity:0.45;',a.appendChild(l);for(let c of Nb){let d=i.cloneNode(!0);d.dataset.adkFeature=c.key,d.removeAttribute("data-adk-features"),d.classList.remove(...Array.from(d.classList).filter(b=>/disabled/i.test(b))),d.style.pointerEvents="auto",d.style.opacity="1";let m=d.querySelector('[class*="settingsLabel"]')??(d.firstElementChild instanceof HTMLElement?d.firstElementChild:null);m&&(m.textContent=c.label,m.title=c.hint);let f=d.querySelector(V0);if(f){let{track:b,paint:v}=Db(e.accent,n.enabled(c.key),f);f.replaceWith(b),b.addEventListener("click",P=>{P.preventDefault(),P.stopPropagation(),n.set(c.key,!n.enabled(c.key)),v(n.enabled(c.key))})}a.appendChild(d)}s.appendChild(a),n.onChange(o)}var Xp=[{id:"desktop",label:"Desktop",width:null,icon:'<svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><rect x="1.5" y="3" width="13" height="8.5" rx="1.5"/><path d="M5.5 14h5"/></svg>'},{id:"tablet",label:"Tablet",width:834,icon:'<svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="1.5" width="10" height="13" rx="1.8"/><path d="M7 12.5h2"/></svg>'},{id:"phone",label:"Phone",width:390,icon:'<svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><rect x="4.5" y="1.5" width="7" height="13" rx="1.8"/><path d="M7.2 12.6h1.6"/></svg>'}],G0="adk-viewport";function Z0(e){return Xp.find(t=>t.id===e)??Xp[0]}var ma="desktop";function ti(){return Z0(ma)}function J0(){return ti().width??window.innerWidth}function Qp(){let e=ti();return e.width?`${e.label} \xB7 ${e.width}px`:`Desktop \xB7 ${window.innerWidth}px`}function Ab(e){ma=Z0(e).id;let t=ti(),n=document.getElementById(G0);if(n||(n=document.createElement("style"),n.id=G0,document.head.appendChild(n)),!t.width){n.textContent="",document.documentElement.removeAttribute("data-adk-device"),window.dispatchEvent(new CustomEvent("adk-device",{detail:{id:ma}}));return}n.textContent=`
html[data-adk-device] {
  max-width: ${t.width}px !important;
  margin: 0 auto !important;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.12), 0 24px 80px rgba(0, 0, 0, 0.18);
  transition: max-width 260ms cubic-bezier(0.16, 1, 0.3, 1);
  overflow-x: hidden;
}
/* The gutter reads as "outside the page", not as page background. */
html[data-adk-device] body { min-height: 100vh; }
`,document.documentElement.setAttribute("data-adk-device",t.id),window.dispatchEvent(new CustomEvent("adk-device",{detail:{id:ma}}))}function e1(e){document.querySelector("[data-adk-devices]")?.remove();let n=document.createElement("div");n.setAttribute("data-adk-devices","");let o=n.attachShadow({mode:"open"}),r=document.createElement("style");r.textContent=`
:host { all: initial; position: fixed; inset: 0; pointer-events: none; z-index: 99999;
  font: 13px/1.35 system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, sans-serif;
  letter-spacing: -0.15px; }
* { box-sizing: border-box; margin: 0; padding: 0; font: inherit; }
button { background: none; border: 0; cursor: pointer; -webkit-appearance: none; appearance: none; color: inherit; }
.bar {
  position: fixed; left: 50%; bottom: 20px; transform: translateX(-50%);
  display: flex; align-items: center; gap: 2px; padding: 4px;
  border-radius: 12px; background: #1a1a1a; color: #fff;
  box-shadow: 0 4px 24px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.08);
  pointer-events: auto;
  animation: rise 200ms cubic-bezier(0.16, 1, 0.3, 1);
}
.item {
  display: inline-flex; align-items: center; gap: 6px;
  height: 30px; padding: 0 10px; border-radius: 9px;
  color: rgba(255,255,255,0.55); font-size: 12.5px;
  transition: background 140ms cubic-bezier(0.16,1,0.3,1), color 140ms cubic-bezier(0.16,1,0.3,1);
}
.item:hover { color: rgba(255,255,255,0.85); }
.item.is-on { background: rgba(255,255,255,0.12); color: #fff; }
.size { font-variant-numeric: tabular-nums; opacity: 0.5; font-size: 11.5px; }
@keyframes rise { from { opacity: 0; transform: translate(-50%, 8px); } to { opacity: 1; transform: translate(-50%, 0); } }
`,o.appendChild(r);for(let l of["pointerdown","mousedown","click"])n.addEventListener(l,c=>c.stopPropagation());let i=document.createElement("div");i.className="bar";let s=[];for(let l of Xp){let c=document.createElement("button");c.type="button",c.className="item"+(l.id===ma?" is-on":""),c.dataset.device=l.id,c.innerHTML=l.icon;let d=document.createElement("span");if(d.textContent=l.label,c.appendChild(d),l.width){let m=document.createElement("span");m.className="size",m.textContent=String(l.width),c.appendChild(m)}s.push(c),i.appendChild(c)}o.appendChild(i),kc(o,"data-adk-devices");let a=l=>{let d=(typeof l.composedPath=="function"?l.composedPath():[]).find(f=>f instanceof HTMLElement&&!!f.dataset?.device);if(!d)return;l.preventDefault(),l.stopPropagation();let m=d.dataset.device;Ab(m);for(let f of s)f.classList.toggle("is-on",f.dataset.device===m);e.onChange?.(m)};return o.addEventListener("click",a),o.addEventListener("pointerup",a),document.body.appendChild(n),()=>n.remove()}function t1(){document.querySelector("[data-adk-devices]")?.remove()}function n1(){return!!document.querySelector("[data-adk-devices]")}var to={pickerScrim:100008,pickerHighlight:100010,pickerLabel:100011,wireframe:100020,inspector:100050,history:100060};var Bb=`
:host { all: initial; position: fixed; inset: 0; z-index: ${to.history}; pointer-events: none;
  font: 13px/1.4 system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, sans-serif; letter-spacing: -0.15px; }
* { box-sizing: border-box; margin: 0; padding: 0; font: inherit; color: inherit; }
button { background: none; border: 0; cursor: pointer; -webkit-appearance: none; appearance: none; }
.sheet {
  position: fixed; right: 20px; bottom: 76px; width: 320px; max-height: 60vh;
  display: flex; flex-direction: column; pointer-events: auto;
  background: #1a1a1a; color: #fff; border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.08);
  animation: rise 180ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
.head { display: flex; align-items: center; gap: 8px; padding: 12px 14px 8px; }
.title { font-weight: 600; font-size: 13px; }
.count { margin-left: auto; font-size: 12px; color: rgba(255,255,255,0.45); }
.list { overflow-y: auto; padding: 4px 8px 10px; display: flex; flex-direction: column; gap: 4px; }
.row {
  display: flex; align-items: flex-start; gap: 8px; width: 100%; text-align: left;
  padding: 8px 8px; border-radius: 10px; background: rgba(255,255,255,0.04);
  transition: background 0.14s ease;
}
.row:hover { background: rgba(255,255,255,0.10); }
.kind {
  flex: 0 0 auto; margin-top: 1px; padding: 2px 6px; border-radius: 999px;
  font: 700 9px/1.4 inherit; letter-spacing: 0.4px; text-transform: uppercase;
}
.body { min-width: 0; flex: 1; }
.comment { font-size: 12.5px; overflow: hidden; text-overflow: ellipsis; display: -webkit-box;
  -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
.target { margin-top: 2px; font: 11px/1.3 ui-monospace, "SF Mono", Menlo, monospace;
  color: rgba(255,255,255,0.4); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.drop {
  flex: 0 0 auto; width: 22px; height: 22px; border-radius: 6px;
  display: inline-flex; align-items: center; justify-content: center;
  color: rgba(255,255,255,0.4); font-size: 14px; line-height: 1;
}
.drop:hover { background: rgba(239, 68, 68, 0.22); color: #ff8a80; }
.empty { padding: 16px 14px 20px; color: rgba(255,255,255,0.45); font-size: 12.5px; }
@keyframes rise { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
`;function o1(e){let t=null,n=null;function o(){n?.(),n=null,t?.remove(),t=null}function r(){return t!=null}function i(a){let l=e.getItems();a.querySelector(".sheet")?.remove();let c=document.createElement("div");c.className="sheet";let d=document.createElement("div");d.className="head";let m=document.createElement("span");m.className="title",m.textContent="What will ship";let f=document.createElement("span");if(f.className="count",f.textContent=`${l.length}`,d.append(m,f),c.appendChild(d),!l.length){let v=document.createElement("p");v.className="empty",v.textContent="Nothing yet. Annotate something, or restyle a component.",c.appendChild(v),a.appendChild(c);return}let b=document.createElement("div");b.className="list",l.forEach((v,P)=>{let k=document.createElement("div");k.className="row";let h=e.kinds.find(O=>O.id===v.kind),_=document.createElement("span");_.className="kind",_.textContent=`${P+1} \xB7 ${h?vr(h.label,e.locale):v.kind}`,_.style.background=`color-mix(in srgb, ${e.accent} 24%, transparent)`,_.style.color=e.accent;let S=document.createElement("button");S.type="button",S.className="body";let D=document.createElement("div");D.className="comment",D.textContent=v.comment||"(no comment)";let Z=document.createElement("div");Z.className="target",Z.textContent=v.target.label||v.target.selector,S.append(D,Z),S.addEventListener("click",()=>e.onReveal(v));let q=document.createElement("button");q.className="drop",q.type="button",q.title="Remove this one",q.textContent="\xD7",q.addEventListener("click",O=>{O.stopPropagation(),e.onRemove(v.id),i(a)}),k.append(_,S,q),b.appendChild(k)}),c.appendChild(b),a.appendChild(c)}function s(){if(t){o();return}t=document.createElement("div"),t.setAttribute("data-adk-history","");let a=t.attachShadow({mode:"open"}),l=document.createElement("style");l.textContent=Bb,a.appendChild(l),i(a),kc(a,"data-adk-history"),n=Cc(t),document.body.appendChild(t);let c=d=>{let m=d.composedPath();t&&m.includes(t)||d.target?.closest?.("[data-adk-count]")||(o(),document.removeEventListener("mousedown",c,!0))};window.setTimeout(()=>document.addEventListener("mousedown",c,!0),0)}return{open:s,close:o,isOpen:r,refresh(){t?.shadowRoot&&i(t.shadowRoot)}}}function r1(e){let{button:t,count:n}=e,o=t.querySelector("[data-adk-count]");if(!n){o?.remove();return}o||(o=document.createElement("span"),o.setAttribute("data-adk-count",""),o.style.cssText=["position:absolute","top:-2px","right:-2px","min-width:16px","height:16px","padding:0 4px","border-radius:9999px",`background:${e.accent}`,"color:#fff",'font:600 10px/16px system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',"text-align:center","cursor:pointer","pointer-events:auto"].join(";"),o.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation(),e.onClick()}),getComputedStyle(t).position==="static"&&(t.style.position="relative"),t.appendChild(o));let r=String(n);o.textContent!==r&&(o.textContent=r)}var i1="adk-status",Ob=`
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
`,Gi=new Map;function s1(){if(document.getElementById(i1))return;let e=document.createElement("style");e.id=i1,e.textContent=Ob,document.head.appendChild(e)}function a1(e,t,n){s1(),t==="pending"?Gi.delete(e):Gi.set(e,{status:t,note:n,at:new Date().toISOString()})}function l1(e){return Gi.get(e)??null}function c1(){Gi.clear(),document.querySelectorAll("[data-adk-status]").forEach(e=>{e.removeAttribute("data-adk-status"),e.removeAttribute("title")})}function Ec(){if(!Gi.size)return;s1(),document.querySelectorAll("[data-annotation-id], [data-marker-id]").forEach(t=>{let n=t.dataset.annotationId??t.dataset.markerId??"",o=Gi.get(n);if(!o){t.removeAttribute("data-adk-status");return}t.dataset.adkStatus!==o.status&&(t.dataset.adkStatus=o.status);let r=o.status==="done"?"Done":o.status==="working"?"Being worked on":o.status==="rejected"?"Not done":"",i=o.note?`${r} \u2014 ${o.note}`:r;t.title!==i&&(t.title=i)})}var d1='[class*="toolbar"],[class*="palette"],[class*="settingsPanel"],[data-agentation-settings-panel],[class*="buttonTooltip"]',u1=["mousemove","mouseover","mouseout","mousedown","mouseup","click","dblclick","contextmenu"];function p1(e,t){let n=typeof e.composedPath=="function"?e.composedPath():[];for(let r of n)if(r&&r.nodeType===1&&t(r))return!0;let o=e.target;return!!(o&&o.nodeType===1&&t(o))}function Mc(e){let t=e?.ours??"",n=i=>t?i.matches?.(t)||i.closest?.(t)!=null:!1,o=i=>i.matches?.(d1)||i.closest?.(d1)!=null,r=i=>{p1(i,n)||p1(i,o)||i.stopPropagation()};for(let i of u1)window.addEventListener(i,r,!0);return()=>{for(let i of u1)window.removeEventListener(i,r,!0)}}var zb='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8.25" stroke="currentColor" stroke-width="1.6"/><path d="M12 3.75a8.25 8.25 0 0 1 0 16.5z" fill="currentColor"/></svg>',Fb='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',Wb='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg>',Hb='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>',jb=[{kind:"text",label:"Text",width:320,height:20,chipHeight:6},{kind:"heading",label:"Heading",width:360,height:40,chipHeight:12},{kind:"button",label:"Button",width:140,height:40,chipHeight:12},{kind:"input",label:"Input",width:280,height:40,chipHeight:12},{kind:"image",label:"Image",width:240,height:160,chipHeight:30},{kind:"card",label:"Card",width:300,height:200,chipHeight:34},{kind:"list",label:"List",width:300,height:140,chipHeight:26}],Ub='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',Yb=4,f1=12,br=null;function ga(){return br!=null}function kr(){if(!br)return;let e=br;br=null,e.destroy()}function h1(e){let t=e.accent??"#0088FF",n=e.labelFor??(f=>f.tagName.toLowerCase()),o=e.ignore??(()=>!1),r=document.createElement("div");r.setAttribute("data-adk-wf-pick",""),r.style.cssText=`position:fixed;pointer-events:none;z-index:${to.wireframe};border:2px solid ${t};background:color-mix(in srgb, ${t} 10%, transparent);border-radius:3px;display:none;box-sizing:border-box`;let i=document.createElement("div");i.setAttribute("data-adk-wf-pick",""),i.style.cssText=`position:fixed;pointer-events:none;z-index:${to.wireframe+1};background:${t};color:#fff;padding:3px 6px;border-radius:4px;font:500 10px/1 ui-monospace,"SF Mono",Menlo,monospace;display:none;white-space:nowrap`,document.body.append(r,i);let s=null,a=()=>{document.removeEventListener("mousemove",c,!0),document.removeEventListener("click",d,!0),document.removeEventListener("keydown",m,!0),r.remove(),i.remove()},l=f=>{let b=document.elementFromPoint(f.clientX,f.clientY);return!(b instanceof HTMLElement)||b===document.body||b===document.documentElement||o(b)?null:b};function c(f){let b=l(f);if(s=b,!b){r.style.display="none",i.style.display="none";return}let v=b.getBoundingClientRect();r.style.left=`${v.left}px`,r.style.top=`${v.top}px`,r.style.width=`${v.width}px`,r.style.height=`${v.height}px`,r.style.display="block",i.textContent=n(b),i.style.left=`${v.left}px`,i.style.top=`${Math.max(2,v.top-20)}px`,i.style.display="block"}function d(f){let b=l(f)??s;f.preventDefault(),f.stopImmediatePropagation(),f.stopPropagation(),a(),b?e.onPick(b):e.onCancel?.()}function m(f){f.key==="Escape"&&(f.preventDefault(),f.stopPropagation(),a(),e.onCancel?.())}return document.addEventListener("mousemove",c,!0),document.addEventListener("click",d,!0),document.addEventListener("keydown",m,!0),a}function m1(e){if(br)return br;let t=e.target;if(!t||!t.isConnected)return null;let n=e.accent??"#0088FF",o=e.labelFor??(C=>C.tagName.toLowerCase()),r=e.selectorFor??(C=>C.tagName.toLowerCase()),i=e.depth??3,s=16,a=C=>{let w=getComputedStyle(C).display;return w!=="inline"&&w!=="contents"&&w!=="none"},l=new Set(["IMG","SVG","VIDEO","CANVAS","INPUT","TEXTAREA","SELECT","BUTTON","IFRAME"]),c=C=>!C||C==="transparent"||/^rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*0\s*\)$/.test(C),d=C=>{if(l.has(C.tagName))return!0;let w=getComputedStyle(C);if(!c(w.backgroundColor)||w.backgroundImage&&w.backgroundImage!=="none"||w.boxShadow&&w.boxShadow!=="none"||Math.max(parseFloat(w.borderTopWidth)||0,parseFloat(w.borderRightWidth)||0,parseFloat(w.borderBottomWidth)||0,parseFloat(w.borderLeftWidth)||0)>0&&w.borderStyle!=="none"&&!c(w.borderTopColor))return!0;for(let W of Array.from(C.childNodes))if(W.nodeType===3&&(W.textContent??"").trim())return!0;return!!(!Array.from(C.children).some(W=>W instanceof HTMLElement&&a(W))&&(C.textContent??"").trim())},m=C=>{let w=getComputedStyle(C);return w.visibility==="hidden"||w.opacity==="0"},f=(C,w,R)=>{let Y=C.getBoundingClientRect();for(let W of Array.from(C.children)){if(!(W instanceof HTMLElement)||W.hasAttribute("data-adk-wf-chrome")||!a(W)||m(W))continue;let Q=W.getBoundingClientRect();if(Q.width<s||Q.height<s)continue;if(Q.width>=Y.width-2&&Q.height>=Y.height-2&&C.children.length===1||!d(W)){let be=R.length;w<=i&&f(W,w,R),R.length===be&&d(W)&&R.push(W);continue}R.push(W),w<i&&f(W,w+1,R)}return R},b=f(t,1,[]);if(!b.length)return e.showToast?.("This component has no parts to rearrange."),null;let v=t.getBoundingClientRect(),P=[],k=[],h=new Map,_=(C,w)=>{let R=w.map(W=>[W,C.style.getPropertyValue(W),C.style.getPropertyPriority(W)]),Y=()=>{for(let[W,Q,le]of R)Q?C.style.setProperty(W,Q,le):C.style.removeProperty(W)};h.set(C,Y),P.push(Y)},S=C=>{h.get(C)?.(),h.delete(C)};_(t,["position","height","width"]),getComputedStyle(t).position==="static"&&t.style.setProperty("position","relative"),t.style.setProperty("height",`${v.height}px`);let D=new Map;for(let C of b)D.set(C,C.getBoundingClientRect());let Z=new Set(b),q=C=>{let w=C.parentElement;for(;w&&w!==t;){if(Z.has(w))return D.get(w);w=w.parentElement}return v},O=b.map((C,w)=>{let R=D.get(C),Y=q(C),W={x:Math.round(R.left-Y.left),y:Math.round(R.top-Y.top),width:Math.round(R.width),height:Math.round(R.height)};return _(C,["position","left","top","width","height","margin","z-index","transform"]),{el:C,from:W,to:{...W},orderFrom:w}});for(let C of O){let{el:w,from:R}=C;w.style.setProperty("position","absolute"),w.style.setProperty("margin","0"),w.style.setProperty("left",`${R.x}px`),w.style.setProperty("top",`${R.y}px`),w.style.setProperty("width",`${R.width}px`),w.style.setProperty("height",`${R.height}px`),w.setAttribute("data-adk-wf-part","")}t.setAttribute("data-adk-wf-root","");let ie=document.createElement("style");ie.setAttribute("data-adk-wf-style",""),document.head.appendChild(ie);let xe=e.grayscale!==!1;function he(){ie.textContent=xe?`
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
      `}he();let j=document.createElement("div");j.setAttribute("data-adk-wf-chrome","");let M=j.attachShadow({mode:"open"}),J=document.createElement("style");J.textContent=`
    :host {
      position: fixed; inset: 0; z-index: ${to.wireframe-1};
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
    /* The tag is where a block gets a name: click it and say what it is. */
    .tag {
      position: absolute; left: 0; top: -20px; height: 18px; padding: 0 6px;
      display: none; align-items: center; gap: 4px;
      border-radius: 5px; background: #1a1a1a; color: #fff;
      font: 500 10px/1 ui-monospace, "SF Mono", Menlo, monospace; white-space: nowrap;
      cursor: text; max-width: 240px; overflow: hidden;
    }
    .frame:hover .tag, .frame[data-active="1"] .tag, .tag[data-named="1"] { display: inline-flex; }
    .tag[data-named="1"] { background: #0f172a; }
    .tag input {
      background: transparent; border: 0; outline: 0; color: #fff;
      font: inherit; width: 120px; padding: 0;
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
  `,M.appendChild(J);let ue=Cc(j);document.body.appendChild(j);let ke=new Map,ge=null;function oe(C){let w=ke.get(C.el);if(w)return w;w=document.createElement("div"),w.className="frame";let R=document.createElement("span");R.className="tag",R.textContent=C.name||o(C.el),C.name&&(R.dataset.named="1"),R.title="Click to name this block",R.addEventListener("pointerdown",Q=>Q.stopPropagation()),R.addEventListener("click",Q=>{if(Q.preventDefault(),Q.stopPropagation(),R.querySelector("input"))return;let le=document.createElement("input");le.value=C.name??"",le.placeholder=o(C.el),R.textContent="",R.appendChild(le),le.focus(),le.select();let be=()=>{let ce=le.value.trim();C.name=ce||void 0,R.textContent=ce||o(C.el),ce?R.dataset.named="1":delete R.dataset.named,vt()};le.addEventListener("blur",be),le.addEventListener("keydown",ce=>{ce.stopPropagation(),ce.key==="Enter"&&le.blur(),ce.key==="Escape"&&(le.value=C.name??"",le.blur())})});let Y=document.createElement("span");Y.className="grip";let W=document.createElement("button");return W.className="drop",W.type="button",W.title="Leave this one out",W.textContent="\xD7",W.addEventListener("pointerdown",Q=>Q.stopPropagation()),W.addEventListener("click",Q=>{Q.preventDefault(),Q.stopPropagation(),me(C)}),w.append(R,Y,W),M.appendChild(w),ke.set(C.el,w),w.addEventListener("pointerdown",Q=>{Q.target!==Y&&Pe(C,w,Q,"move")}),Y.addEventListener("pointerdown",Q=>{Q.stopPropagation(),Pe(C,w,Q,"resize")}),w}function z(C){let w=document.createElement("div");w.setAttribute("data-adk-wf-part",""),w.setAttribute("data-adk-wf-new",C.kind);let R=t.getBoundingClientRect(),Y={x:Math.max(8,Math.round((R.width-C.width)/2)),y:Math.max(8,Math.round((R.height-C.height)/2)),width:C.width,height:C.height};w.style.cssText=`position:absolute;left:${Y.x}px;top:${Y.y}px;width:${Y.width}px;height:${Y.height}px;margin:0`,t.appendChild(w),k.push(w);let W={el:w,from:Y,to:{...Y},orderFrom:O.length,added:C.kind,name:C.label};O=[...O,W],ge=W,Ee(),vt()}function me(C){let w=O.filter(R=>R===C||C.el.contains(R.el));for(let R of w){if(ke.get(R.el)?.remove(),ke.delete(R.el),R.added){let Y=k.indexOf(R.el);Y>=0&&k.splice(Y,1),R.el.remove();continue}R.to={...R.from},Fe(R),R.el.removeAttribute("data-adk-wf-part"),S(R.el)}O=O.filter(R=>!w.includes(R)),ge&&w.includes(ge)&&(ge=null),Ee(),vt()}function Ee(){for(let[C,w]of ke)O.some(R=>R.el===C)||(w.remove(),ke.delete(C));for(let C of O){let w=oe(C),R=C.el.getBoundingClientRect();w.style.left=`${R.left}px`,w.style.top=`${R.top}px`,w.style.width=`${R.width}px`,w.style.height=`${R.height}px`,w.dataset.active=ge===C?"1":"0"}}function Fe(C){C.el.style.setProperty("left",`${C.to.x}px`),C.el.style.setProperty("top",`${C.to.y}px`),C.el.style.setProperty("width",`${C.to.width}px`),C.el.style.setProperty("height",`${C.to.height}px`)}function Pe(C,w,R,Y){if(R.button!==0)return;R.preventDefault(),R.stopPropagation(),ge=C,w.classList.add("is-dragging"),w.setPointerCapture(R.pointerId);let W=R.clientX,Q=R.clientY,le={...C.to},be=Me=>{let de=Me.clientX-W,I=Me.clientY-Q,N=Me.altKey?1:Yb,H=V=>Math.round(V/N)*N;Y==="move"?(C.to.x=H(le.x+de),C.to.y=H(le.y+I)):(C.to.width=Math.max(f1,H(le.width+de)),C.to.height=Math.max(f1,H(le.height+I))),Fe(C),Ee()},ce=Me=>{w.classList.remove("is-dragging");try{w.releasePointerCapture(Me.pointerId)}catch{}w.removeEventListener("pointermove",be),w.removeEventListener("pointerup",ce),w.removeEventListener("pointercancel",ce),vt()};w.addEventListener("pointermove",be),w.addEventListener("pointerup",ce),w.addEventListener("pointercancel",ce)}let ut=document.createElement("div");ut.className="bar";let St=document.createElement("button");St.type="button",St.className="icon";let Oe=document.createElement("span");Oe.className="hint";let Ve=document.createElement("button");Ve.type="button",Ve.className="icon",Ve.title="Put everything back",Ve.innerHTML=Wb;let Tt=document.createElement("button");Tt.type="button",Tt.className="primary",Tt.textContent="Add";let Qe=document.createElement("button");Qe.type="button",Qe.className="icon",Qe.title="Exit wireframe mode",Qe.innerHTML=Ub;let en=document.createElement("button");en.type="button",en.className="icon",en.title="Add a block",en.innerHTML=Hb;let $t=document.createElement("span");$t.className="sep",ut.append(St,en,Oe,$t,Ve,Tt,Qe);let _t=document.createElement("div");_t.className="palette";for(let C of jb){let w=document.createElement("button");w.type="button",w.className="chip",w.innerHTML=`<span class="chip-shape" style="height:${C.chipHeight}px"></span><span>${C.label}</span>`,w.addEventListener("click",R=>{R.preventDefault(),R.stopPropagation(),z(C),_t.dataset.open="0"}),_t.appendChild(w)}M.appendChild(_t),en.addEventListener("click",C=>{C.preventDefault(),C.stopPropagation(),_t.dataset.open=_t.dataset.open==="1"?"0":"1"}),M.appendChild(ut);function Kt(){let C=O.slice().sort((w,R)=>w.to.y-R.to.y||w.to.x-R.to.x).map(w=>w.el);return O.map(w=>{let R=w.to.x!==w.from.x||w.to.y!==w.from.y,Y=w.to.width!==w.from.width||w.to.height!==w.from.height,W=C.indexOf(w.el),Q=!!w.name&&!w.added;return!w.added&&!R&&!Y&&!Q&&W===w.orderFrom?null:{label:w.name??o(w.el),selector:w.added?`(new ${w.added})`:r(w.el),from:w.from,to:w.to,moved:R,resized:Y,...w.name?{name:w.name}:{},...w.added?{added:w.added}:{},orderFrom:w.orderFrom,orderTo:W}}).filter(w=>w!=null)}function vt(){let C=Kt().filter(w=>w.moved||w.resized||w.added).length;St.innerHTML=xe?zb:Fb,St.title=xe?"Show the real colours":"Back to wireframe",St.dataset.on=xe?"1":"0",Oe.textContent=C?String(C):"",Ve.disabled=C===0,Tt.disabled=C===0,Ve.style.opacity=C?"1":"0.4",Tt.style.opacity=C?"1":"0.5"}St.addEventListener("click",()=>{xe=!xe,he(),vt()}),Ve.addEventListener("click",()=>{for(let C of O)C.to={...C.from},Fe(C);Ee(),vt()}),Qe.addEventListener("click",()=>kr()),Tt.addEventListener("click",()=>{let C=Kt();if(!C.length){e.onSubmit?.({empty:!0});return}e.onSubmit?.({prompt:Vb(C,{label:o(t),selector:r(t),rect:{x:0,y:0,width:Math.round(v.width),height:Math.round(v.height)}}),changes:C,container:{label:o(t),selector:r(t),rect:{x:0,y:0,width:Math.round(v.width),height:Math.round(v.height)}},element:t})});let bt=C=>{(typeof C.composedPath=="function"?C.composedPath():[]).includes(j)&&C.stopPropagation()};window.addEventListener("mousemove",bt,!0),window.addEventListener("mouseover",bt,!0);let tn=Mc({ours:"[data-adk-wf-chrome],[data-adk-wf-root],[data-adk-toast],[data-adk-history]"}),qt=()=>Ee();window.addEventListener("scroll",qt,!0),window.addEventListener("resize",qt);let Ht=C=>{C.key==="Escape"&&(C.preventDefault(),C.stopPropagation(),kr())};return window.addEventListener("keydown",Ht,!0),Ee(),vt(),br={destroy(){window.removeEventListener("scroll",qt,!0),window.removeEventListener("resize",qt),window.removeEventListener("keydown",Ht,!0),ue(),tn(),window.removeEventListener("mousemove",bt,!0),window.removeEventListener("mouseover",bt,!0);for(let C of k.splice(0))C.remove();for(let C of O)C.el.removeAttribute("data-adk-wf-part");t.removeAttribute("data-adk-wf-root"),P.splice(0).forEach(C=>C()),ie.remove(),j.remove(),e.onExit?.()}},br}function Vb(e,t){let n=[],o=e.filter(r=>r.added).length;n.push("Rearrange this component to match a layout the user sketched directly on the page. The coordinates below are the sketch, not the implementation: reproduce the arrangement with the layout system the component already uses (flex, grid, order, gaps, spans) \u2014 do NOT hardcode absolute positions."),n.push(""),n.push(`Component: \`${t.selector}\` (${t.label}), ${t.rect.width}\xD7${t.rect.height}px`),o&&n.push(`${o} block(s) marked NEW do not exist yet: create them, with the role their name suggests.`),n.push("");for(let r of e){let i=[];r.added&&i.push(`NEW ${r.added} block to create at (${r.to.x}, ${r.to.y}), ${r.to.width}\xD7${r.to.height}`),r.moved&&!r.added&&i.push(`moved from (${r.from.x}, ${r.from.y}) to (${r.to.x}, ${r.to.y}) \u2014 ${Xb(r.to.x-r.from.x,r.to.y-r.from.y)}`),r.resized&&!r.added&&i.push(`resized from ${r.from.width}\xD7${r.from.height} to ${r.to.width}\xD7${r.to.height}`),r.name&&!r.added&&i.push(`the user calls it "${r.name}"`),r.orderTo!==r.orderFrom&&i.push(`reading order ${r.orderFrom+1} \u2192 ${r.orderTo+1}`),n.push(`- \`${r.selector}\` (${r.label}): ${i.join("; ")}`)}return n.push(""),n.push("```json"),n.push(JSON.stringify({container:t,changes:e},null,2)),n.push("```"),n.join(`
`)}function Xb(e,t){let n=[];return e&&n.push(`${Math.abs(e)}px ${e>0?"right":"left"}`),t&&n.push(`${Math.abs(t)}px ${t>0?"down":"up"}`),n.join(", ")||"no shift"}var g1=`
:host {
  all: initial;
  position: fixed;
  inset: 0;
  /* Above every annotation surface. The overlay puts its toolbar at 100000 and
     its tooltips at 100001, so anything below that gets crossed by a stray
     tooltip or hover label the moment the pointer passes the panel's edge \u2014
     which is exactly what it looked like: a menu bar drawn over the inspector.
     See LAYERS in ../layers.js for the whole stack. */
  z-index: ${to.inspector};
  pointer-events: none;
  contain: layout style;

  /* Same black as the annotation toolbar: they are one product, and two
     different darks side by side read as two different tools. */
  --bg: #1a1a1a;
  --bg-solid: #1a1a1a;
  /* Softer than a flat mid-grey: rows sit just above the panel rather than
     stamping a hard block onto it, which is what made the panel read as busy
     next to the reference. */
  --row: #232323;
  --row-hi: #2c2c2c;
  --seg: #3a3a3a;
  --line: rgba(255, 255, 255, 0.07);
  --line-strong: rgba(255, 255, 255, 0.1);
  --ink: #ffffff;
  --ink-dim: rgba(255, 255, 255, 0.62);
  --ink-faint: rgba(255, 255, 255, 0.38);
  --accent: #4a9eff;
  --select: #4a9eff;
  --scrub: rgba(255, 255, 255, 0.28);
  --ease: cubic-bezier(0.16, 1, 0.3, 1);

  /* The overlay's own typeface, stack for stack \u2014 the inspector must not read
     as a foreign UI. Its settings rows are 13px/400 with -0.15px of tracking;
     copy the tracking too, because that is what made ours look like a
     different product sitting next to it. */
  --font: system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, sans-serif;
  --mono: ui-monospace, "SF Mono", SFMono-Regular, Menlo, monospace;

  font-family: var(--font);
  font-size: 13px;
  letter-spacing: -0.15px;
  line-height: 1.35;
  color: var(--ink);
  -webkit-font-smoothing: antialiased;
}
* { box-sizing: border-box; margin: 0; padding: 0; font: inherit; color: inherit; }
button { background: none; border: 0; cursor: pointer; -webkit-appearance: none; appearance: none; }
input, select { -webkit-appearance: none; appearance: none; background: none; border: 0; outline: 0; border-radius: 0; }

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
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 16px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.46), 0 2px 8px rgba(0, 0, 0, 0.3);
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
.agt-panel-grip:hover::after, .agt-panel.is-resizing .agt-panel-grip::after { background: var(--select); }

/* \u2500\u2500 Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.agt-head {
  display: flex; align-items: center; gap: 8px;
  padding: 10px 10px 8px 12px;
  cursor: grab; flex: 0 0 auto;
}
.agt-head-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--select); flex: 0 0 auto;
}
.agt-head-txt { min-width: 0; display: flex; flex-direction: column; gap: 1px; }
.agt-head-tag {
  font: 500 12.5px/1.25 var(--mono);
  color: var(--ink);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.agt-head-sub {
  font-size: 11px; color: var(--ink-faint);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.agt-head-actions { display: flex; align-items: center; gap: 2px; margin-left: auto; }
.agt-head-btn {
  width: 24px; height: 24px; border-radius: 7px;
  display: inline-flex; align-items: center; justify-content: center;
  color: var(--ink-faint); transition: background 140ms var(--ease), color 140ms var(--ease);
}
.agt-head-btn:hover { background: var(--row); color: var(--ink); }
.agt-head-btn:disabled { opacity: 0.35; cursor: default; }
.agt-head-btn:disabled:hover { background: none; color: var(--ink-faint); }
.agt-head-btn--danger:hover:not(:disabled) { background: rgba(255, 69, 58, 0.18); color: #ff6b60; }
.agt-head-count {
  min-width: 16px; height: 16px; padding: 0 4px; margin-right: 4px;
  border-radius: 9999px; background: var(--select); color: #fff;
  font: 600 10px/16px var(--font); text-align: center;
}
.agt-head-count.is-zero { display: none; }

/* \u2500\u2500 Tabs (Style / Layout) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.agt-tabs {
  display: grid; grid-template-columns: 1fr 1fr; gap: 4px;
  margin: 0 10px 6px; padding: 0; flex: 0 0 auto;
}
.agt-tab {
  height: 30px; border-radius: 8px;
  font-size: 13px; font-weight: 500; color: var(--ink-faint);
  transition: background 140ms var(--ease), color 140ms var(--ease);
}
.agt-tab:hover { color: var(--ink-dim); }
.agt-tab.is-on { background: var(--seg); color: var(--ink); }

/* \u2500\u2500 States (Default / Hover / Focus / Active / Disabled) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* Under the tabs because it qualifies everything below it. When a state other
   than the resting one is picked the row is tinted, because every value in the
   panel now means something different and that must not be easy to forget. */
.agt-states {
  display: flex; gap: 2px; margin: 0 10px 8px; padding: 2px;
  border-radius: 9px; background: var(--row); flex: 0 0 auto;
  overflow-x: auto; scrollbar-width: none;
}
.agt-states::-webkit-scrollbar { display: none; }
.agt-state {
  flex: 1 0 auto; height: 24px; padding: 0 9px; border-radius: 7px;
  font-size: 11.5px; color: var(--ink-faint); white-space: nowrap;
  transition: background 140ms var(--ease), color 140ms var(--ease);
}
.agt-state:hover { color: var(--ink-dim); }
.agt-state.is-on { background: var(--seg); color: var(--ink); }
.agt-states.is-stateful { box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--select) 55%, transparent); }
.agt-states.is-stateful .agt-state.is-on { background: var(--select); color: #fff; }

/* \u2500\u2500 Body \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.agt-body {
  flex: 1 1 auto; overflow-y: auto; overflow-x: visible;
  padding: 2px 10px 10px;
  scrollbar-width: thin;
}
.agt-body::-webkit-scrollbar { width: 8px; }
.agt-body::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12); border-radius: 9999px;
  border: 2px solid transparent; background-clip: content-box;
}
.agt-empty {
  padding: 28px 16px; text-align: center;
  font-size: 12.5px; color: var(--ink-faint);
}

/* \u2500\u2500 Sections \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.agt-sec { padding: 10px 0 4px; }
.agt-sec + .agt-sec { border-top: 1px solid var(--line); margin-top: 10px; padding-top: 16px; }
.agt-sec-head { display: flex; align-items: center; gap: 8px; padding: 0 4px 10px; }
.agt-sec-title { font-size: 12.5px; color: var(--ink-faint); }
.agt-sec-tools { margin-left: auto; display: flex; align-items: center; gap: 2px; }
.agt-sec-add {
  margin-left: auto; width: 22px; height: 22px; border-radius: 6px;
  display: inline-flex; align-items: center; justify-content: center;
  color: var(--ink-faint); transition: background 140ms var(--ease), color 140ms var(--ease);
}
.agt-sec-add:hover { background: var(--row); color: var(--ink); }
.agt-sec-body { display: flex; flex-direction: column; gap: 6px; }

/* \u2500\u2500 Rows \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.agt-row {
  position: relative;
  display: flex; align-items: center; gap: 8px;
  min-height: 38px; padding: 0 10px 0 12px;
  background: var(--row); border-radius: 10px;
  transition: background 120ms var(--ease);
}
.agt-row:hover { background: var(--row-hi); }
.agt-row-label {
  font-size: 13px; color: var(--ink-dim);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  flex: 0 0 auto; max-width: 52%;
}
.agt-row-ctl { margin-left: auto; display: flex; align-items: center; gap: 6px; min-width: 0; }
.agt-row.is-edited { }
.agt-row.is-edited > .agt-row-label,
.agt-row.is-edited > .agt-row-ctl > .agt-num > .agt-num-input,
.agt-row.is-edited > .agt-row-ctl > .agt-num > .agt-unit,
.agt-row.is-edited > .agt-row-ctl > .agt-color > .agt-hex,
.agt-row .is-edited .agt-num-input,
.agt-row .is-edited .agt-unit { color: var(--select); }

/* Paired fields (Size/Weight, line-height/letter-spacing, X/Y\u2026) are two
   separate boxes with glyph labels \u2014 the row itself carries no label and no
   background, exactly like the reference. */
.agt-row:has(.agt-pair),
.agt-row:has(.agt-row-ctl > .agt-tgl-group + .agt-tgl-group) {
  background: transparent; padding: 0; min-height: 0;
}
.agt-row:has(.agt-pair) > .agt-row-label,
.agt-row:has(.agt-row-ctl > .agt-tgl-group + .agt-tgl-group) > .agt-row-label { display: none; }
.agt-row:has(.agt-pair) > .agt-row-ctl,
.agt-row:has(.agt-row-ctl > .agt-tgl-group + .agt-tgl-group) > .agt-row-ctl { width: 100%; gap: 6px; }
.agt-row .agt-pair > * ,
.agt-row-ctl > .agt-tgl-group {
  background: var(--row); border-radius: 10px;
  min-height: 38px; padding: 0 10px 0 6px;
  display: flex; align-items: center; gap: 0;
}
.agt-row-ctl > .agt-tgl-group { flex: 1; justify-content: space-between; }
.agt-row:has(.agt-pair) .agt-pair > *:hover,
.agt-row-ctl > .agt-tgl-group:hover { background: var(--row-hi); }

/* The undo chip hangs off the panel's left edge, like the reference. */
.agt-undo {
  position: fixed;
  width: 30px; height: 30px; border-radius: 50%;
  display: inline-flex; align-items: center; justify-content: center;
  background: var(--bg); border: 1px solid var(--line-strong);
  color: var(--ink); pointer-events: auto;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.42);
  transition: background 140ms var(--ease), transform 120ms var(--ease);
}
.agt-undo:hover { background: var(--row-hi); transform: scale(1.05); }

/* \u2500\u2500 Number fields \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* The whole field is the drag handle, so it says so \u2014 the glyph alone was a
   20px target people missed, and a control you have to aim at reads as broken. */
.agt-num { position: relative; display: flex; align-items: center; gap: 0; min-width: 0; flex: 1; cursor: ew-resize; touch-action: none; }
.agt-num-input {
  flex: 1; min-width: 30px;
  font-size: 13px; color: var(--ink); text-align: right;
  font-variant-numeric: tabular-nums;
  cursor: ew-resize;
}
.agt-num-input:focus { cursor: text; }
.agt-unit { font-size: 13px; color: var(--ink); font-variant-numeric: tabular-nums; }
.agt-alpha-wrap .agt-unit { color: var(--ink-faint); font-size: 12px; }

/* The glyph on the left of a numeric field is permanent (it is the label of
   that field); the scrub graduations only show while hovering or dragging. */
.agt-num-scrub {
  position: static; flex: 0 0 auto;
  display: inline-flex; align-items: center; justify-content: center;
  width: 26px; height: 26px; border-radius: 7px;
  color: var(--ink-faint);
  font: 500 10px/1 var(--font); letter-spacing: 0.04em; text-transform: uppercase;
  cursor: ew-resize; user-select: none;
  transition: background 140ms var(--ease), color 140ms var(--ease);
}
/* The glyph is the field's label AND its handle, so it is drawn as a key from
   the start rather than appearing on hover: a control you cannot see is a
   control nobody drags. It brightens under the pointer and turns blue while
   the value is moving. */
.agt-pair > * > .agt-num > .agt-num-scrub,
.agt-row-ctl > .agt-num > .agt-num-scrub { background: rgba(255, 255, 255, 0.045); }
.agt-row:hover .agt-num-scrub, .agt-pair > *:hover .agt-num-scrub { background: var(--seg); color: var(--ink-dim); }
.agt-num.is-scrubbing .agt-num-scrub { background: var(--seg); color: var(--select); }
.agt-num.is-scrubbing .agt-num-input, .agt-num.is-scrubbing .agt-unit { color: var(--select); }
.agt-num::after {
  content: ''; position: absolute; inset: 0 0 0 28px;
  pointer-events: none; opacity: 0;
  background-image: repeating-linear-gradient(to right, var(--scrub) 0 1px, transparent 1px 34px);
  background-size: auto 8px; background-position: left center; background-repeat: repeat-x;
  transition: opacity 120ms var(--ease);
}
.agt-row:hover .agt-num::after, .agt-num.is-scrubbing::after { opacity: 1; }

.agt-pair { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; width: 100%; }

/* \u2500\u2500 Toggles / segmented icon groups \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.agt-tgl-group { display: inline-flex; align-items: center; gap: 2px; }
.agt-tgl {
  width: 26px; height: 24px; border-radius: 7px;
  display: inline-flex; align-items: center; justify-content: center;
  color: var(--ink-faint);
  transition: background 140ms var(--ease), color 140ms var(--ease);
}
.agt-tgl:hover { color: var(--ink-dim); }
.agt-tgl.is-on { background: var(--seg); color: var(--ink); }
.agt-seg { display: inline-flex; align-items: center; gap: 2px; }
.agt-seg-btn {
  height: 24px; min-width: 26px; padding: 0 7px; border-radius: 7px;
  font-size: 12px; color: var(--ink-faint);
  display: inline-flex; align-items: center; justify-content: center;
  transition: background 140ms var(--ease), color 140ms var(--ease);
}
.agt-seg-btn.is-on { background: var(--seg); color: var(--ink); }

/* \u2500\u2500 Select \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* \u2500\u2500 Typeface \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* The trigger is set in the face it names, so the current choice is legible
   without opening anything. */
.agt-font-wrap { display: inline-flex; align-items: center; min-width: 0; }
.agt-font {
  display: inline-flex; align-items: center; gap: 4px; max-width: 100%;
  font-size: 13px; color: var(--ink);
}
.agt-font-name {
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  max-width: 150px; text-align: right;
}
.agt-font svg { color: var(--ink-faint); flex: 0 0 auto; }
.agt-font-menu {
  width: 224px; max-height: 320px; overflow-y: auto;
  padding: 4px; display: flex; flex-direction: column; gap: 2px;
  scrollbar-width: thin;
}
.agt-font-item {
  display: flex; align-items: baseline; gap: 8px;
  padding: 7px 9px; border-radius: 8px; text-align: left;
  color: var(--ink-dim);
  transition: background 120ms var(--ease), color 120ms var(--ease);
}
.agt-font-item:hover { background: var(--row); color: var(--ink); }
.agt-font-item.is-on { background: var(--seg); color: var(--ink); }
.agt-font-item-name {
  flex: 1; min-width: 0; font-size: 13.5px;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
/* The same two letters against every face: a comparison, not a description. */
.agt-font-item-sample { flex: 0 0 auto; font-size: 17px; color: var(--ink-faint); }
.agt-font-item:hover .agt-font-item-sample,
.agt-font-item.is-on .agt-font-item-sample { color: var(--ink); }

.agt-select-wrap { position: relative; display: inline-flex; align-items: center; }
.agt-select {
  font-size: 13px; color: var(--ink); padding-right: 16px;
  text-align: right; cursor: pointer;
}
.agt-select option { background: #1f1f1f; color: #fff; }
.agt-select-wrap::after {
  content: ''; position: absolute; right: 2px; top: 50%;
  width: 6px; height: 6px; margin-top: -4px;
  border-right: 1.5px solid var(--ink-faint); border-bottom: 1.5px solid var(--ink-faint);
  transform: rotate(45deg); pointer-events: none;
}

/* \u2500\u2500 Colour \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.agt-color { display: inline-flex; align-items: center; gap: 8px; }
.agt-swatch {
  width: 18px; height: 18px; border-radius: 5px; flex: 0 0 auto;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background-image:
    linear-gradient(45deg, rgba(255,255,255,0.12) 25%, transparent 25%),
    linear-gradient(-45deg, rgba(255,255,255,0.12) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.12) 75%),
    linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.12) 75%);
  background-size: 8px 8px;
  background-position: 0 0, 0 4px, 4px -4px, -4px 0;
  overflow: hidden;
}
.agt-swatch-fill { display: block; width: 100%; height: 100%; }
.agt-hex {
  font: 500 12.5px/1 var(--mono); color: var(--ink);
  letter-spacing: 0.02em; text-transform: uppercase;
  width: 68px;
}
.agt-alpha-wrap { display: inline-flex; align-items: baseline; gap: 2px; }
.agt-alpha {
  width: 30px; text-align: right; font-size: 13px; color: var(--ink);
  font-variant-numeric: tabular-nums;
}

/* \u2500\u2500 Popovers (colour picker, menus) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.agt-layer { position: absolute; inset: 0; pointer-events: none; }
.agt-layer > * { pointer-events: auto; }
.agt-popover {
  position: fixed;
  background: var(--bg); border: 1px solid var(--line-strong);
  border-radius: 16px; padding: 12px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.5);
  animation: agt-pop 160ms var(--ease);
}
.agt-menu { padding: 6px; min-width: 160px; border-radius: 12px; }
.agt-menu-item {
  display: block; width: 100%; text-align: left;
  padding: 8px 10px; border-radius: 8px; font-size: 14px; color: var(--ink-dim);
}
.agt-menu-item:hover { background: var(--row); color: var(--ink); }

.agt-pk { width: 268px; display: flex; flex-direction: column; gap: 12px; }
.agt-pk-foot, .agt-pk-rails { display: flex; align-items: center; gap: 8px; }
.agt-pk-rails-col { flex: 1; display: flex; flex-direction: column; gap: 8px; }
.agt-pk-fmt {
  display: inline-flex; align-items: center; gap: 4px;
  height: 32px; padding: 0 10px; border-radius: 9px;
  background: var(--row); font-size: 13px; color: var(--ink-dim);
}
/* The value sits in its own field rather than floating on the popover: it is
   editable, and a bare string on a panel does not look like it. */
.agt-pk-val {
  flex: 1; display: inline-flex; align-items: center; gap: 4px; min-width: 0;
  height: 32px; padding: 0 10px; border-radius: 9px; background: var(--row);
}
.agt-pk-hash { color: var(--ink-faint); font: 500 13px/1 var(--mono); }
.agt-pk-hex {
  flex: 1; font: 500 13px/1 var(--mono); color: var(--ink);
  text-transform: uppercase; letter-spacing: 0.02em;
}
.agt-pk-sat {
  position: relative; height: 168px; border-radius: 12px; overflow: hidden;
  cursor: crosshair;
}
.agt-pk-sat-white { position: absolute; inset: 0; background: linear-gradient(to right, #fff, rgba(255,255,255,0)); }
.agt-pk-sat-black { position: absolute; inset: 0; background: linear-gradient(to top, #000, rgba(0,0,0,0)); }
.agt-pk-cursor {
  position: absolute; width: 14px; height: 14px; border-radius: 50%;
  border: 2px solid #fff; box-shadow: 0 0 0 1px rgba(0,0,0,0.4);
  transform: translate(-50%, -50%); pointer-events: none;
}
.agt-pk-rail { position: relative; height: 16px; border-radius: 8px; cursor: pointer; }
.agt-pk-hue { background: linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00); }
.agt-pk-alpha { position: relative; overflow: hidden; }
.agt-pk-alpha-fill { position: absolute; inset: 0; }
.agt-pk-thumb {
  position: absolute; top: 50%; width: 16px; height: 16px; border-radius: 50%;
  border: 2px solid #fff; box-shadow: 0 0 0 1px rgba(0,0,0,0.4);
  transform: translate(-50%, -50%); pointer-events: none;
}
/* The project's own colours, read off the page. Small, dense, and above the
   format row: the point is that reaching for a brand colour is one click and
   reaching for an arbitrary one takes the wheel. */
/* Off the project's spacing rhythm: a hairline under the field, not a block.
   The value stands \u2014 some are deliberately off \u2014 but it no longer passes
   unremarked. Hover gives the number that would be on the beat. */
.agt-num.is-off-scale { box-shadow: inset 0 -2px 0 rgba(233, 180, 76, 0.55); }

/* Stated, not enforced \u2014 same rule as the rest of the panel. Green is not a
   reward, it is confirmation; amber is the one that has to be noticed. */
.agt-contrast {
  padding: 2px 4px 0; font-size: 11.5px; line-height: 1.35;
  color: var(--ink-faint);
}
.agt-contrast:empty { display: none; }
.agt-contrast.is-fail { color: #e9b44c; }

.agt-pk-palette { display: flex; flex-direction: column; gap: 6px; }
.agt-pk-palette-title {
  font-size: 11px; color: var(--ink-faint);
  text-transform: uppercase; letter-spacing: 0.04em;
}
.agt-pk-palette-row { display: flex; flex-wrap: wrap; gap: 5px; }
.agt-pk-tok {
  width: 18px; height: 18px; border-radius: 5px; flex: 0 0 auto;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.16);
  transition: transform 120ms var(--ease);
}
.agt-pk-tok:hover { transform: scale(1.14); }
/* A colour the project does not already use. Same rule as spacing: say so,
   allow it. */
.agt-pk-off { display: flex; align-items: center; gap: 6px; font-size: 11px; color: #e9b44c; }
.agt-pk-off[hidden] { display: none; }
.agt-pk-op { display: flex; align-items: center; gap: 8px; height: 38px; padding: 0 12px; border-radius: 10px; background: var(--row); }
.agt-pk-op-label { font-size: 13px; color: var(--ink-dim); }
/* The value and its unit are one line, right-aligned \u2014 the % used to wrap under
   the number because the input was allowed to take the whole row. */
.agt-pk-op-val { margin-left: auto; display: inline-flex; align-items: baseline; gap: 1px; font-size: 13px; color: var(--ink); }
.agt-pk-op-input { width: 34px; text-align: right; font-size: 13px; color: var(--ink); }
.agt-pk-op-val .agt-unit { font-size: 13px; color: var(--ink-faint); }
.agt-pk-dropper {
  width: 28px; height: 34px; border-radius: 8px; flex: 0 0 auto;
  display: inline-flex; align-items: center; justify-content: center;
  color: var(--ink-dim); background: var(--row);
  transition: background 140ms var(--ease), color 140ms var(--ease);
}
.agt-pk-dropper:hover { background: var(--row-hi); color: var(--ink); }
.agt-pk-preview { width: 22px; height: 22px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.18); }
.agt-pk-val { font-size: 13px; color: var(--ink-dim); }

/* \u2500\u2500 Box model (padding / margin) \u2014 the reference's 3\xD73 square \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.agt-box {
  position: relative; padding: 10px; border-radius: 10px; background: var(--row);
  display: grid; gap: 6px;
  grid-template-columns: 42px 1fr 42px;
  grid-template-rows: 24px 34px 24px;
  align-items: center; justify-items: center;
}
.agt-box-inner {
  grid-area: 2 / 2; width: 100%; height: 100%;
  border-radius: 8px; background: rgba(255, 255, 255, 0.05);
}
.agt-box-side { display: flex; align-items: center; justify-content: center; width: 100%; }
.agt-box-top { grid-area: 1 / 2; }
.agt-box-left { grid-area: 2 / 1; }
.agt-box-right { grid-area: 2 / 3; }
.agt-box-bottom { grid-area: 3 / 2; }
.agt-box-link { position: absolute; top: 8px; right: 8px; display: flex; gap: 2px; opacity: 0.5; }
.agt-box .agt-num { justify-content: center; }
.agt-box .agt-num::after { display: none; }
.agt-box .agt-num-scrub { display: none; }
.agt-box .agt-unit { display: none; }
.agt-box input {
  width: 100%; text-align: center; font-size: 13px; color: var(--ink);
  font-variant-numeric: tabular-nums; cursor: ew-resize;
}

/* \u2500\u2500 Footer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.agt-foot {
  display: flex; gap: 6px; padding: 8px 10px 10px;
  border-top: 1px solid var(--line); flex: 0 0 auto;
}
.agt-btn {
  height: 30px; border-radius: 8px; padding: 0 12px;
  font-size: 12.5px; font-weight: 500;
  transition: background 140ms var(--ease), opacity 140ms var(--ease), filter 140ms var(--ease);
}
.agt-btn--ghost { color: var(--ink-dim); background: var(--row); }
.agt-btn--ghost:hover { background: var(--row-hi); color: var(--ink); }
.agt-btn--primary { flex: 1; background: var(--select); color: #fff; }
.agt-btn--primary:hover:not(:disabled) { filter: brightness(1.08); }
.agt-btn--primary:disabled { opacity: 0.45; cursor: default; }

@keyframes agt-slide-in {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes agt-pop {
  from { opacity: 0; transform: scale(0.97); }
  to { opacity: 1; transform: scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
`;var _1="http://www.w3.org/2000/svg";function se(e,t,n){let o=document.createElement(e);if(t)for(let r of Object.keys(t)){let i=t[r];i==null||i===!1||(r==="class"?o.className=i:r==="text"?o.textContent=i:r.startsWith("on")&&typeof i=="function"?o.addEventListener(r.slice(2),i):o.setAttribute(r,i===!0?"":i))}for(let r of[].concat(n||[]))r==null||r===!1||o.appendChild(typeof r=="string"?document.createTextNode(r):r);return o}var Qb={copy:"M5 5V3.5A1.5 1.5 0 0 1 6.5 2h6A1.5 1.5 0 0 1 14 3.5v6a1.5 1.5 0 0 1-1.5 1.5H11M3.5 5h6A1.5 1.5 0 0 1 11 6.5v6A1.5 1.5 0 0 1 9.5 14h-6A1.5 1.5 0 0 1 2 12.5v-6A1.5 1.5 0 0 1 3.5 5Z",trash:"M3 4.5h10M6.5 4.5V3h3v1.5M4.5 4.5l.6 8a1 1 0 0 0 1 .9h3.8a1 1 0 0 0 1-.9l.6-8",gear:"M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z M13 8a5 5 0 0 0-.1-.9l1.2-.9-1.3-2.2-1.4.5a5 5 0 0 0-1.5-.9L9.7 2H7.3l-.2 1.5a5 5 0 0 0-1.5.9l-1.4-.5-1.3 2.2 1.2.9a5 5 0 0 0 0 1.8l-1.2.9 1.3 2.2 1.4-.5a5 5 0 0 0 1.5.9l.2 1.5h2.4l.2-1.5a5 5 0 0 0 1.5-.9l1.4.5 1.3-2.2-1.2-.9c.06-.3.1-.6.1-.9Z",close:"M4 4l8 8M12 4l-8 8",info:"M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12ZM8 7.5v3.5M8 5.2v.1",plus:"M8 3.5v9M3.5 8h9",dropper:"M12.6 3.4a1.9 1.9 0 0 0-2.7 0L8.4 4.9l-.6-.6-1.1 1.1.6.6-4 4V13h2.9l4-4 .6.6 1.1-1.1-.6-.6 1.5-1.5a1.9 1.9 0 0 0 0-2.7Z",italic:"M10 3H6.5M9.5 13H6M9.2 3 6.8 13",underline:"M4.5 3v4.5a3.5 3.5 0 0 0 7 0V3M3.5 13.5h9",strike:"M3 8h10M11.5 4.6C11 3.6 9.8 3 8.2 3 6.3 3 5 3.9 5 5.2 5 6.4 6 7.1 8 7.6M4.8 11c.5 1.2 1.8 2 3.5 2 2 0 3.3-.9 3.3-2.3 0-.9-.5-1.5-1.5-2",alignLeft:"M2.5 4h11M2.5 8h7M2.5 12h9",alignCenter:"M2.5 4h11M4.5 8h7M3.5 12h9",alignRight:"M2.5 4h11M6.5 8h7M4.5 12h9",rowDir:"M3 4v8M13 4v8M6 8h4M8.5 6.5 10 8l-1.5 1.5",colDir:"M4 3h8M4 13h8M8 6v4M6.5 8.5 8 10l1.5-1.5",link:"M6.5 9.5 9.5 6.5M6 5l1-1a2.1 2.1 0 0 1 3 3l-1 1M10 11l-1 1a2.1 2.1 0 0 1-3-3l1-1",unlink:"M6 5l1-1a2.1 2.1 0 0 1 3 3l-1 1M10 11l-1 1a2.1 2.1 0 0 1-3-3l1-1M3 3l10 10",corners:"M3 6.5V5a2 2 0 0 1 2-2h1.5M13 9.5V11a2 2 0 0 1-2 2H9.5",chevron:"M5.5 6.5 8 9l2.5-2.5",undo:"M3.6 6.4h4.1M3.6 6.4V2.9 M3.9 6.1a4.9 4.9 0 1 1-.7 4",fontSize:"M2 4h6.5M5.25 4v8.5 M9.5 7.5h4.5M11.75 7.5v5",weight:"M4.5 3h4a2.4 2.4 0 0 1 0 4.9h-4V3Z M4.5 7.9h4.7a2.5 2.5 0 0 1 0 5.1H4.5V7.9Z",lineHeight:"M6.5 3.5h7.5M6.5 8h7.5M6.5 12.5h7.5 M2.6 4.6 3.8 3.4 5 4.6 M2.6 11.4l1.2 1.2 1.2-1.2 M3.8 3.6v8.8",letterSpacing:"M2.5 3v10M13.5 3v10 M6 8h4 M7.2 6.8 6 8l1.2 1.2 M8.8 6.8 10 8l-1.2 1.2",cornerAll:"M3.5 12.5V6A2.5 2.5 0 0 1 6 3.5h6.5",cornerSplit:"M3 6V5a2 2 0 0 1 2-2h1 M10 3h1a2 2 0 0 1 2 2v1 M13 10v1a2 2 0 0 1-2 2h-1 M6 13H5a2 2 0 0 1-2-2v-1",boxAll:"M3.5 3.5h9v9h-9Z",boxSplit:"M3.5 3.5h9v9h-9Z M6.5 6.5h3v3h-3Z",opacity:"M8 2.6a5.4 5.4 0 1 0 0 10.8 5.4 5.4 0 0 0 0-10.8Z M8 2.6v10.8a5.4 5.4 0 0 0 0-10.8Z",blur:"M8 2.6a5.4 5.4 0 1 0 0 10.8 5.4 5.4 0 0 0 0-10.8Z M4.6 6.5h1M7.5 6.5h1M10.4 6.5h1M6 9.5h1M8.9 9.5h1",width:"M2 8h12 M4.2 5.8 2 8l2.2 2.2 M11.8 5.8 14 8l-2.2 2.2",height:"M8 2v12 M5.8 4.2 8 2l2.2 2.2 M5.8 11.8 8 14l2.2-2.2",gap:"M3 3v10M13 3v10 M6.5 8h3 M7.6 6.9 6.5 8l1.1 1.1 M8.4 6.9 9.5 8l-1.1 1.1"};function Un(e,t=14){let n=document.createElementNS(_1,"svg");n.setAttribute("viewBox","0 0 16 16"),n.setAttribute("width",String(t)),n.setAttribute("height",String(t)),n.setAttribute("fill","none"),n.setAttribute("stroke","currentColor"),n.setAttribute("stroke-width","1.3"),n.setAttribute("stroke-linecap","round"),n.setAttribute("stroke-linejoin","round");for(let o of(Qb[e]||"").split(" M")){if(!o)continue;let r=document.createElementNS(_1,"path");r.setAttribute("d",/^[Mm]/.test(o)?o:"M"+o),n.appendChild(r)}return n}function Lt(e,t,n){let o=n||{},r=se("div",{class:"agt-row"+(o.wide?" agt-row--wide":"")},[se("div",{class:"agt-row-label",text:e}),se("div",{class:"agt-row-ctl"},t)]);return o.props&&(r.__agtProps=[].concat(o.props)),r.addEventListener("agt-scrub",i=>r.classList.toggle("is-scrubbing",!!i.detail.active)),r}function ln({read:e,write:t,unit:n="px",min:o=-1/0,max:r=1/0,step:i=1,precision:s=0,prefix:a,iconPrefix:l,placeholder:c="\u2014",fallback:d=0,title:m,scale:f}){let b=se("input",{class:"agt-num-input",type:"text",spellcheck:"false",placeholder:c}),v=se("div",{class:"agt-num-scrub"+(l?" agt-num-scrub--icon":""),title:(m?m+" \u2014 ":"")+"drag to change"},l?Un(l,13):a??(n||"")),k=!!n&&(!!l||a!=null)?se("span",{class:"agt-unit",text:n}):null,h=se("div",{class:"agt-num"},k?[v,b,k]:[v,b]),_=j=>{let M=Math.pow(10,s);return Math.round(j*M)/M},S=j=>Math.max(o,Math.min(r,j));function D(j){if(!f||j==null||Number.isNaN(j)){h.classList.remove("is-off-scale");return}let M=f(j),J=M&&M.onScale===!1;h.classList.toggle("is-off-scale",!!J),h.title=J?`Off this project's ${M.base}px rhythm \u2014 ${M.nearest}px is on it.`:""}function Z(){if(document.activeElement===b||b.matches(":focus"))return;let j=e(),M=j==null||Number.isNaN(j);b.value=M?"":String(_(j)),k&&(k.style.display=M?"none":""),D(M?null:_(j))}function q(j,M){if(j==null||Number.isNaN(j))return;let J=_(S(j));b.value=String(J),k&&(k.style.display=""),D(J),t(J,n,M)}b.addEventListener("change",()=>q(parseFloat(b.value))),b.addEventListener("blur",Z),b.addEventListener("keydown",j=>{if(j.key!=="ArrowUp"&&j.key!=="ArrowDown"){j.key==="Enter"&&b.blur();return}j.preventDefault();let M=j.shiftKey?10:j.altKey?.1:1,J=parseFloat(b.value),ue=Number.isNaN(J)?e()??d:J;q(ue+(j.key==="ArrowUp"?1:-1)*i*M)});function O(j,M){h.classList.toggle("is-scrubbing",j),h.style.setProperty("--agt-fill",j?String(M):"0"),h.dispatchEvent(new CustomEvent("agt-scrub",{bubbles:!0,detail:{active:j}}))}let ie=null;function xe(j,M){let J=parseFloat(b.value);if(ie={x:j.clientX,start:Number.isNaN(J)?e()??d:J,live:!M,pointerId:j.pointerId},ie.live){try{h.setPointerCapture(j.pointerId)}catch{}h.classList.add("is-scrubbing"),O(!0,.5)}}h.addEventListener("pointerdown",j=>{if(j.button!==0)return;let M=j.target===b;M||j.preventDefault(),xe(j,M)}),h.addEventListener("pointermove",j=>{if(!ie)return;let M=j.clientX-ie.x;if(!ie.live){if(Math.abs(M)<4)return;ie.live=!0,b.blur();try{h.setPointerCapture(j.pointerId)}catch{}h.classList.add("is-scrubbing")}let J=j.shiftKey?10:j.altKey?.1:1;O(!0,Math.max(0,Math.min(1,.5+M/240))),q(ie.start+M*i*J,!0)});let he=j=>{if(!ie)return;let M=ie.live;ie=null,h.classList.remove("is-scrubbing"),O(!1,0);try{h.releasePointerCapture(j.pointerId)}catch{}M&&q(parseFloat(b.value))};return h.addEventListener("pointerup",he),h.addEventListener("pointercancel",he),Z(),{el:h,refresh:Z,input:b}}function ni({options:e,read:t,write:n}){let o=e.map(s=>se("button",{class:"agt-seg-btn",type:"button",title:s.title||s.value,onclick:()=>{n(s.value),i()}},s.icon?Un(s.icon,13):se("span",{text:s.label||s.value}))),r=se("div",{class:"agt-seg"},o);function i(){let s=t();e.forEach((a,l)=>o[l].classList.toggle("is-on",Kb(s,a)))}return i(),{el:r,refresh:i}}function Kb(e,t){return t.match?t.match.indexOf(e)>=0:e===t.value}function y1(e){let t=e.map(r=>se("button",{class:"agt-tgl",type:"button",title:r.title,onclick:()=>{r.write(!r.read()),o()}},Un(r.icon,13))),n=se("div",{class:"agt-tgl-group"},t);function o(){e.forEach((r,i)=>t[i].classList.toggle("is-on",!!r.read()))}return o(),{el:n,refresh:o}}function x1({options:e,read:t,write:n,wide:o}){let r=se("select",{class:"agt-select"+(o?" agt-select--wide":"")});for(let a of e)r.appendChild(se("option",{value:a.value,text:a.label||a.value}));r.addEventListener("change",()=>n(r.value));let i=se("div",{class:"agt-select-wrap"},[r,Un("chevron",12)]);function s(){let a=t();!e.some(c=>c.value===a)&&a!=null&&r.insertBefore(se("option",{value:a,text:a}),r.firstChild),r.value=a??""}return s(),{el:i,refresh:s,select:r}}function w1({options:e,read:t,write:n,layer:o}){let r=se("span",{class:"agt-font-name"}),i=se("button",{class:"agt-font",type:"button"},[r,Un("chevron",12)]),s=se("div",{class:"agt-font-wrap"},[i]),a=null,l=f=>(f||"").split(",")[0].trim().replace(/^["']|["']$/g,"");function c(f){let b=e.find(v=>v.value===f||l(v.value)===l(f));return b?b.label||l(b.value):l(f)||"\u2014"}function d(){let f=t();r.textContent=c(f),r.style.fontFamily=f||"",a&&a.sync(f)}function m(){a?.close(),a=null}return i.addEventListener("click",f=>{if(f.preventDefault(),f.stopPropagation(),a){m();return}a=qb({layer:o,anchor:i,options:e,current:t(),onPick:b=>{n(b),d(),m()},onClose:()=>{a=null}})}),d(),{el:s,refresh:d}}function qb({layer:e,anchor:t,options:n,current:o,onPick:r,onClose:i}){let s=k=>(k||"").split(",")[0].trim().replace(/^["']|["']$/g,""),a=n.map(k=>{let h=s(k.value)===s(o),_=se("button",{class:"agt-font-item"+(h?" is-on":""),type:"button"},[se("span",{class:"agt-font-item-name",text:k.label||s(k.value)}),se("span",{class:"agt-font-item-sample",text:"Ag"})]);return _.style.setProperty("--agt-face",k.value),_.querySelector(".agt-font-item-sample").style.fontFamily=k.value,_.querySelector(".agt-font-item-name").style.fontFamily=k.value,_.addEventListener("click",S=>{S.preventDefault(),S.stopPropagation(),r(k.value)}),_}),l=se("div",{class:"agt-popover agt-font-menu"},a);e.appendChild(l);let c=t.getBoundingClientRect(),d=t.closest(".agt-panel"),m=d?d.getBoundingClientRect():c,f=224,b=m.left-f-10;b<8&&(b=m.right+10,b+f>window.innerWidth-8&&(b=Math.max(8,window.innerWidth-f-8))),l.style.left=Math.round(b)+"px",l.style.top=Math.round(Math.max(8,Math.min(c.top-6,window.innerHeight-320)))+"px";function v(k){let h=k.composedPath?k.composedPath():[];h.indexOf(l)>=0||h.indexOf(t)>=0||P()}function P(){document.removeEventListener("pointerdown",v,!0),l.remove(),i?.()}return setTimeout(()=>document.addEventListener("pointerdown",v,!0),0),{close:P,sync(k){a.forEach((h,_)=>{h.classList.toggle("is-on",s(n[_].value)===s(k))})}}}var Gb=/^#([0-9a-f]{3,8})$/i,Zb=/^(rgba?|hsla?)\(([^)]+)\)$/i;function no(e){if(!e)return null;let t=String(e).trim().toLowerCase();if(!t||t==="none")return null;if(t==="transparent")return{r:0,g:0,b:0,a:0};let n=Gb.exec(t);if(n){let r=n[1];if(r.length===3||r.length===4){let[i,s,a,l]=r.split("").map(c=>parseInt(c+c,16));return{r:i,g:s,b:a,a:r.length===4?l/255:1}}if(r.length===6||r.length===8){let i=s=>parseInt(r.slice(s,s+2),16);return{r:i(0),g:i(2),b:i(4),a:r.length===8?i(6)/255:1}}return null}let o=Zb.exec(t);if(o){let r=o[2].split(/[\s,/]+/).filter(Boolean),i=(a,l)=>a==null?0:a.endsWith("%")?parseFloat(a)/100*l:parseFloat(a);return o[1].startsWith("rgb")?{r:kn(i(r[0],255)),g:kn(i(r[1],255)),b:kn(i(r[2],255)),a:r[3]==null?1:v1(i(r[3],1))}:{..._a(...ek(parseFloat(r[0])||0,(parseFloat(r[1])||0)/100,(parseFloat(r[2])||0)/100)),a:r[3]==null?1:v1(i(r[3],1))}}return null}function kn(e){return Math.max(0,Math.min(255,Math.round(e)))}function v1(e){return Math.max(0,Math.min(1,e))}function qp({r:e,g:t,b:n}){let o=r=>kn(r).toString(16).padStart(2,"0");return"#"+o(e)+o(t)+o(n)}function Io({r:e,g:t,b:n,a:o}){return o==null||o>=1?`rgb(${kn(e)}, ${kn(t)}, ${kn(n)})`:`rgba(${kn(e)}, ${kn(t)}, ${kn(n)}, ${Math.round(o*1e3)/1e3})`}function k1(e,t){if(t==="rgb")return`${kn(e.r)}, ${kn(e.g)}, ${kn(e.b)}`;if(t==="hsl"){let{h:n,s:o,l:r}=Jb(e);return`${Math.round(n)}, ${Math.round(o*100)}%, ${Math.round(r*100)}%`}return qp(e).slice(1).toUpperCase()}function Jb({r:e,g:t,b:n}){let{h:o,s:r,v:i}=oi({r:e,g:t,b:n}),s=i*(1-r/2),a=s===0||s===1?0:(i-s)/Math.min(s,1-s);return{h:o,s:a,l:s}}function oi({r:e,g:t,b:n}){let o=e/255,r=t/255,i=n/255,s=Math.max(o,r,i),a=Math.min(o,r,i),l=s-a,c=0;return l!==0&&(s===o?c=(r-i)/l%6:s===r?c=(i-o)/l+2:c=(o-r)/l+4,c*=60,c<0&&(c+=360)),{h:c,s:s===0?0:l/s,v:s}}function _a(e,t,n){let o=n*t,r=o*(1-Math.abs(e/60%2-1)),i=n-o,s;return e<60?s=[o,r,0]:e<120?s=[r,o,0]:e<180?s=[0,o,r]:e<240?s=[0,r,o]:e<300?s=[r,0,o]:s=[o,0,r],{r:kn((s[0]+i)*255),g:kn((s[1]+i)*255),b:kn((s[2]+i)*255)}}function ek(e,t,n){let o=n+t*Math.min(n,1-n);return[e,o===0?0:2*(1-n/o),o]}function Kp(e){let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}function b1({r:e,g:t,b:n}){return .2126*Kp(e)+.7152*Kp(t)+.0722*Kp(n)}function C1(e,t){if(!e||!t)return null;let n=e.a==null?1:e.a,o={r:e.r*n+t.r*(1-n),g:e.g*n+t.g*(1-n),b:e.b*n+t.b*(1-n)},r=b1(o),i=b1(t),s=Math.max(r,i),a=Math.min(r,i);return(s+.05)/(a+.05)}function S1(e,t){let n=parseFloat(e)||16,o=parseInt(t,10)||400;return n>=24||n>=18.66&&o>=700?3:4.5}var tk=["color","backgroundColor","borderTopColor"],nk=/^--(agentation|adk|agt)-/;function M1(e){return!e||e==="transparent"||/rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*0\s*\)/.test(e)}function ok(e){if(!e)return!1;let t=e.trim().toLowerCase();return M1(t)?!1:/^#[0-9a-f]{3,8}$/.test(t)||/^(rgb|rgba|hsl|hsla|oklch|oklab|lab|lch|color)\(/.test(t)||/^-?[\d.]+%?\s+[\d.]+%\s+[\d.]+%$/.test(t)}function rk(e){if(!e)return!1;let t=e.trim();return t.length>200?!1:/(serif|sans-serif|monospace|cursive|fantasy|system-ui|ui-)/i.test(t)||/^["'][^"']+["']$/.test(t)}function Ko(e){let t=Ko.probe||(Ko.probe=document.createElement("span"));return t.style.color="",t.style.color=e,t.style.color||e.trim().toLowerCase()}function ya(e){return e.split(",")[0].trim().replace(/^["']|["']$/g,"").toLowerCase()}function ik(){let e=new Map,t=(i,s)=>{let a=(s??"").trim();!a||a.startsWith("var(")||nk.test(i)||e.has(i)||e.set(i,a)};for(let i of Array.from(document.styleSheets)){let s=i.ownerNode;if(s&&s.id&&/^(adk|agt|agentation)/.test(s.id))continue;let a;try{a=i.cssRules}catch{continue}if(a)for(let l of Array.from(a)){let c=l.selectorText;if(!c||!/(^|,)\s*(:root|html|body|\*)\b/.test(c))continue;let d=l.style;if(d)for(let m=0;m<d.length;m+=1){let f=d.item(m);f.startsWith("--")&&t(f,d.getPropertyValue(f))}}}let n=getComputedStyle(document.documentElement);for(let i of Array.from(e.keys())){let s=n.getPropertyValue(i);s&&s.trim()&&e.set(i,s.trim())}let o=[],r=[];for(let[i,s]of e)ok(s)?o.push({name:i,value:s,source:"token"}):rk(s)&&r.push({name:i,value:s,source:"token"});return{colors:o,fonts:r}}function sk(e){let t=new Map,n=new Map,o=(e||document.body).querySelectorAll("*"),r=0;for(let i of o){if(r>=1200)break;if(!(i instanceof HTMLElement)||i.closest('[data-design-edit-panel],[data-adk-wf-chrome],[data-adk-history],[class*="styles-module__"]'))continue;let s=getComputedStyle(i);if(s.display==="none"||s.visibility==="hidden")continue;r+=1;for(let l of tk){let c=s[l];if(!c||M1(c))continue;let d=Ko(c),m=t.get(d)||{value:c,count:0,source:"usage"};m.count+=1,t.set(d,m)}let a=s.fontFamily;if(a){let l=ya(a),c=n.get(l)||{value:a,count:0,source:"usage"};c.count+=1,n.set(l,c)}}return{colors:Array.from(t.values()).filter(i=>i.count>=2),fonts:Array.from(n.values()).filter(i=>i.count>=2)}}var ak=["paddingTop","paddingRight","paddingBottom","paddingLeft","marginTop","marginBottom","gap","rowGap","columnGap"],lk=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius"];function E1(e,t){let n=new Map,o=(t||document.body).querySelectorAll("*"),r=0;for(let i of o){if(r>=1200)break;if(!(i instanceof HTMLElement)||i.closest('[data-design-edit-panel],[data-adk-wf-chrome],[data-adk-history],[class*="styles-module__"]'))continue;let s=getComputedStyle(i);if(s.display!=="none"){r+=1;for(let a of e){let l=parseFloat(s[a]);if(!Number.isFinite(l)||l<=0||l>200||Math.abs(l-Math.round(l))>.01)continue;let c=Math.round(l);n.set(c,(n.get(c)??0)+1)}}}return Array.from(n.entries()).filter(([,i])=>i>=2).sort((i,s)=>i[0]-s[0]).map(([i,s])=>({value:i,count:s}))}function ck(e){if(e.length<4)return null;let t=e.reduce((n,o)=>n+o.count,0);for(let n of[8,6,4])if(e.filter(r=>r.value%n===0).reduce((r,i)=>r+i.count,0)/t>=.8)return n;return null}var Lc=null;function No(e={}){if(Lc&&!e.refresh)return Lc;let t=ik(),n=sk(e.root),o=[],r=new Set;for(let c of t.colors){let d=Ko(c.value);r.has(d)||(r.add(d),o.push(c))}for(let c of n.colors.sort((d,m)=>m.count-d.count)){let d=Ko(c.value);r.has(d)||(r.add(d),o.push(c))}let i=[],s=new Set;for(let c of t.fonts){let d=ya(c.value);s.has(d)||(s.add(d),i.push(c))}for(let c of n.fonts.sort((d,m)=>m.count-d.count)){let d=ya(c.value);s.has(d)||(s.add(d),i.push(c))}let a=E1(ak,e.root),l=E1(lk,e.root);return Lc={colors:o.slice(0,18),fonts:i.slice(0,6),spacing:a,radius:l,spacingBase:ck(a)},Lc}function Gp(e,t="color"){if(!e)return null;let n=No(),o=t==="font"?n.fonts:n.colors,r=t==="font"?ya(e):Ko(e);for(let i of o){if(!i.name)continue;if((t==="font"?ya(i.value):Ko(i.value))===r)return{name:i.name,value:i.value}}return null}function L1(){let e=new Map,t=r=>e.set(r,(e.get(r)??0)+1),n=Array.from(document.body.querySelectorAll("[class]")).filter(r=>!r.closest("[data-design-edit-panel],[data-adk-wf-chrome],[data-adk-history]")).slice(0,400);for(let r of n){let i=typeof r.className=="string"?r.className:"";i&&(/styles-module__/.test(i)||((/(^|\s)(sm|md|lg|xl|2xl|hover|focus|active|dark|group-hover):[a-z[-]/.test(i)||/(^|\s)(p|m|px|py|mx|my|gap|text|bg|border|rounded|w|h)-(\d+|\[|px|full|auto)/.test(i))&&t("tailwind"),/[a-zA-Z]+_[a-zA-Z0-9-]+__[A-Za-z0-9_-]{4,}/.test(i)&&t("css-modules"),/(^|\s)sc-[a-zA-Z0-9]{6,}/.test(i)&&t("styled-components"),/(^|\s)css-[a-z0-9]{6,}(\s|$)/.test(i)&&t("emotion"),/(^|\s)(col-(xs|sm|md|lg|xl)-\d+|btn-(primary|secondary|outline-[a-z]+)|navbar-expand-[a-z]+)(\s|$)/.test(i)&&t("bootstrap")))}let o=[];for(let[r,i]of e)i>=3&&o.push(r);return document.querySelector("style[data-styled]")&&o.push("styled-components"),document.querySelector("style[data-emotion]")&&o.push("emotion"),document.querySelector("[data-radix-scope],[data-radix-popper-content-wrapper]")&&o.push("radix"),No().colors.some(r=>r.name)&&o.push("css-variables"),Array.from(new Set(o))}function Tc(e){let n=No().spacingBase,o=typeof e=="number"?e:parseFloat(e);return!Number.isFinite(o)||o<=0?{onScale:!0,base:n,nearest:null}:n?o%n===0?{onScale:!0,base:n,nearest:o}:{onScale:!1,base:n,nearest:Math.max(n,Math.round(o/n)*n)}:{onScale:!0,base:null,nearest:null}}function T1(e){if(!e)return!0;let t=Ko(e);return No().colors.some(n=>Ko(n.value)===t)}var dk="linear-gradient(45deg,rgba(255,255,255,0.18) 25%,transparent 25%,transparent 75%,rgba(255,255,255,0.18) 75%),linear-gradient(45deg,rgba(255,255,255,0.18) 25%,transparent 25%,transparent 75%,rgba(255,255,255,0.18) 75%)";function xa({read:e,write:t,layer:n,compact:o}){let r=se("button",{class:"agt-swatch",type:"button",title:"Pick a colour"},[se("span",{class:"agt-swatch-fill"})]),i=se("input",{class:"agt-hex",type:"text",spellcheck:"false",placeholder:"\u2014"}),s=se("input",{class:"agt-alpha",type:"text",spellcheck:"false",placeholder:"100"}),a=se("div",{class:"agt-color"+(o?" agt-color--compact":"")},[r,i,!o&&se("div",{class:"agt-alpha-wrap"},[s,se("span",{class:"agt-unit",text:"%"})])]),l=null;function c(){return no(e())||{r:0,g:0,b:0,a:0}}function d(){let f=c(),b=r.firstChild;b.style.background=Io(f),r.style.backgroundImage=dk,r.style.backgroundSize="6px 6px",r.style.backgroundPosition="0 0, 3px 3px",document.activeElement!==i&&(i.value=f.a===0&&!e()?"":qp(f).slice(1).toUpperCase()),document.activeElement!==s&&(s.value=String(Math.round(f.a*100))),l&&l.sync(f)}function m(f){t(Io(f)),d()}return i.addEventListener("change",()=>{let f=no("#"+i.value.replace(/^#/,""));f?m({...f,a:c().a}):d()}),s.addEventListener("change",()=>{let f=parseFloat(s.value);if(Number.isNaN(f))return d();m({...c(),a:Math.max(0,Math.min(100,f))/100})}),r.addEventListener("click",f=>{if(f.preventDefault(),l){l.close();return}l=uk({layer:n,anchor:r,initial:c(),onChange:m,onClose:()=>{l=null}})}),d(),{el:a,refresh:d}}function uk({layer:e,anchor:t,initial:n,onChange:o,onClose:r}){let i=oi(n),s=n.a,a=se("div",{class:"agt-pk-cursor"}),l=se("div",{class:"agt-pk-sat"},[se("div",{class:"agt-pk-sat-white"}),se("div",{class:"agt-pk-sat-black"}),a]),c=se("div",{class:"agt-pk-thumb"}),d=se("div",{class:"agt-pk-rail agt-pk-hue"},[c]),m=se("div",{class:"agt-pk-alpha-fill"}),f=se("div",{class:"agt-pk-thumb"}),b=se("div",{class:"agt-pk-rail agt-pk-alpha"},[m,f]),v=se("input",{class:"agt-pk-hex",type:"text",spellcheck:"false"}),P=se("div",{class:"agt-pk-preview"}),k=se("input",{class:"agt-pk-op-input",type:"text",spellcheck:"false"}),h="hex",_=se("select",{},[se("option",{value:"hex",text:"Hex"}),se("option",{value:"rgb",text:"RGB"}),se("option",{value:"hsl",text:"HSL"})]),S=se("span",{class:"agt-pk-hash",text:"#"});_.addEventListener("change",()=>{h=_.value,S.style.display=h==="hex"?"":"none",j()});let D=window.EyeDropper?se("button",{class:"agt-pk-dropper",type:"button",title:"Pick a colour from the page"},Un("dropper",14)):null;D&&D.addEventListener("click",async oe=>{oe.preventDefault(),oe.stopPropagation();try{let z=await new window.EyeDropper().open(),me=no(z.sRGBHex);if(!me)return;let Ee=oi(me);i={h:Ee.h,s:Ee.s,v:Ee.v},j(),he()}catch{}});let q=No().colors.map(oe=>{let z=no(oe.value);if(!z)return null;let me=se("button",{class:"agt-pk-tok",type:"button",title:oe.name?`${oe.name} \u2014 ${oe.value}`:oe.value});return me.style.background=Io(z),me.addEventListener("click",Ee=>{Ee.preventDefault(),Ee.stopPropagation();let Fe=oi(z);i={h:Fe.h,s:Fe.s,v:Fe.v},s=z.a,j(),he()}),me}).filter(Boolean),O=se("div",{class:"agt-pk-off",hidden:"true"},[Un("info",12),se("span",{text:"Not a colour this project uses"})]),ie=q.length?se("div",{class:"agt-pk-palette"},[se("div",{class:"agt-pk-palette-title",text:"In this project"}),se("div",{class:"agt-pk-palette-row"},q),O]):null,xe=se("div",{class:"agt-popover agt-pk"},[se("div",{class:"agt-pk-foot"},[se("div",{class:"agt-pk-fmt"},[_,Un("chevron",12)]),se("div",{class:"agt-pk-val"},[S,v])]),l,se("div",{class:"agt-pk-rails"},[P,se("div",{class:"agt-pk-rails-col"},[d]),D]),ie,se("div",{class:"agt-pk-op"},[se("span",{class:"agt-pk-op-label",text:"Opacity"}),se("div",{class:"agt-pk-op-val"},[k,se("span",{class:"agt-unit",text:"%"})])])]);e.appendChild(xe),pk(xe,t);function he(){let oe=_a(i.h,i.s,i.v);o({...oe,a:s})}function j(){let oe=_a(i.h,1,1);l.style.background=Io({...oe,a:1}),a.style.left=i.s*100+"%",a.style.top=(1-i.v)*100+"%";let z=_a(i.h,i.s,i.v);if(a.style.background=Io({...z,a:1}),c.style.left=i.h/360*100+"%",f.style.left=s*100+"%",m.style.background=`linear-gradient(to right, ${Io({...z,a:0})}, ${Io({...z,a:1})})`,P.style.background=Io({...z,a:s}),O){let me=s===0||T1(Io({...z,a:1}));O.hidden=me}document.activeElement!==v&&(v.value=k1(z,h)),document.activeElement!==k&&(k.value=String(Math.round(s*100)))}function M(oe){let z=oe.trim();return h==="rgb"?no("rgb("+z+")"):h==="hsl"?no("hsl("+z+")"):no("#"+z.replace(/^#/,""))}k.addEventListener("change",()=>{let oe=parseFloat(k.value);if(Number.isNaN(oe))return j();s=Math.max(0,Math.min(100,oe))/100,j(),he()});function J(oe,z){oe.addEventListener("pointerdown",me=>{me.preventDefault(),oe.setPointerCapture(me.pointerId);let Ee=Pe=>{let ut=oe.getBoundingClientRect();z(Math.max(0,Math.min(1,(Pe.clientX-ut.left)/ut.width)),Math.max(0,Math.min(1,(Pe.clientY-ut.top)/ut.height))),j(),he()};Ee(me);let Fe=Pe=>{oe.removeEventListener("pointermove",Ee),oe.removeEventListener("pointerup",Fe);try{oe.releasePointerCapture(Pe.pointerId)}catch{}};oe.addEventListener("pointermove",Ee),oe.addEventListener("pointerup",Fe)})}J(l,(oe,z)=>{i={...i,s:oe,v:1-z}}),J(d,oe=>{i={...i,h:oe*360}}),J(b,oe=>{s=oe}),v.addEventListener("change",()=>{let oe=M(v.value);if(!oe)return j();i=oi(oe),j(),he()});function ue(oe){let z=oe.composedPath?oe.composedPath():[];z.indexOf(xe)>=0||z.indexOf(t)>=0||ge()}function ke(oe){oe.key==="Escape"&&(oe.stopPropagation(),ge())}function ge(){document.removeEventListener("pointerdown",ue,!0),document.removeEventListener("keydown",ke,!0),xe.remove(),r()}return setTimeout(()=>{document.addEventListener("pointerdown",ue,!0),document.addEventListener("keydown",ke,!0)},0),j(),{close:ge,sync(oe){document.activeElement!==v&&(i=oi(oe),s=oe.a,j())}}}function pk(e,t){let n=t.getBoundingClientRect(),o=t.closest(".agt-panel"),r=o?o.getBoundingClientRect():n,i=208,s=10,a=r.left-i-s;a<8&&(a=r.right+s,a+i>window.innerWidth-8&&(a=Math.max(8,window.innerWidth-i-8)));let l=Math.max(8,Math.min(n.top-4,window.innerHeight-300));e.style.left=Math.round(a)+"px",e.style.top=Math.round(l)+"px"}var fk=[{value:"system-ui, sans-serif",label:"System"},{value:"-apple-system, BlinkMacSystemFont, sans-serif",label:"SF Pro"},{value:"Helvetica, Arial, sans-serif",label:"Helvetica"},{value:"Georgia, serif",label:"Georgia"},{value:'"Times New Roman", serif',label:"Times"},{value:"ui-monospace, Menlo, monospace",label:"Mono"}],hk=["solid","dashed","dotted","double","none"];function In(e,t){let n=parseFloat(e.getPropertyValue(t));return Number.isNaN(n)?null:n}function mk(e){let t=e.getPropertyValue("backdrop-filter")||e.getPropertyValue("-webkit-backdrop-filter")||"",n=/blur\(([\d.]+)px\)/.exec(t);return n?parseFloat(n[1]):0}function $1(e){if(!e||e==="none")return null;let t=/^(rgba?\([^)]+\)|#[0-9a-f]{3,8})/i.exec(e.trim()),o=((t?e.trim().slice(t[0].length):e).match(/-?[\d.]+px/g)||[]).map(parseFloat);return{color:t?t[1]:"rgba(0, 0, 0, 0.25)",x:o[0]||0,y:o[1]||0,blur:o[2]||0,spread:o[3]||0}}function gk(e){for(let t of e.childNodes)if(t.nodeType===3&&t.nodeValue&&t.nodeValue.trim())return!0;return!1}function _k(e){let t=e.tagName.toLowerCase(),n=e.id?"#"+e.id:"",o=typeof e.className=="string"?e.className.trim().split(/\s+/).filter(Boolean).slice(0,2).map(r=>"."+r).join(""):"";return t+n+o}function ri(e,t){let n=se("div",{class:"agt-sec-body"}),o=se("div",{class:"agt-sec-head"},[se("div",{class:"agt-sec-title",text:e})]),r=se("div",{class:"agt-sec"},[o,n]);if(t&&t.onAdd){let i=se("button",{class:"agt-sec-add",type:"button",title:"Add"},Un("plus",12));i.addEventListener("pointerdown",s=>s.stopPropagation()),i.addEventListener("click",s=>{s.preventDefault(),s.stopPropagation(),t.onAdd()}),o.appendChild(i)}return{el:r,body:n,head:o}}function I1({onCommit:e,onRevert:t,onSubmit:n,onExit:o,onCopy:r,getRecordCount:i,getEditedProps:s,onRevertProp:a,accent:l,states:c,getState:d,setState:m,styleFor:f}){let b=document.createElement("div");b.setAttribute("data-design-edit-panel","");let v=b.attachShadow({mode:"open"}),P=document.createElement("style");P.textContent=g1,v.appendChild(P),l&&(b.style.setProperty("--accent",l),b.style.setProperty("--select",l));let k=se("div",{class:"agt-head-tag",text:"No selection"}),h=se("div",{class:"agt-head-sub",text:"Click an element on the page"}),_=se("div",{class:"agt-head"},[se("div",{class:"agt-head-dot"}),se("div",{class:"agt-head-txt"},[k,h])]),S=se("button",{class:"agt-tab is-on",type:"button",text:"Style"}),D=se("button",{class:"agt-tab",type:"button",text:"Layout"}),Z=se("div",{class:"agt-tabs"},[S,D]),q=se("div",{class:"agt-body"}),O=se("div",{class:"agt-empty",text:"Click any element on the page to inspect and restyle it."}),ie=se("button",{class:"agt-btn agt-btn--ghost",type:"button",text:"Revert"}),xe=se("button",{class:"agt-btn agt-btn--primary",type:"button",text:"Add"}),he=se("div",{class:"agt-foot"},[ie,xe]),j=null;if(c&&c.length>1&&d&&m){let C=c.map(w=>se("button",{class:"agt-state"+(w.id===d()?" is-on":""),type:"button","data-state":w.id,title:w.pseudo?`Design the ${w.pseudo} state`:"Design the resting state",text:w.label}));j=se("div",{class:"agt-states"},C);for(let w of C)w.addEventListener("click",R=>{R.preventDefault(),R.stopPropagation(),m(w.dataset.state);for(let Y of C)Y.classList.toggle("is-on",Y===w);j.classList.toggle("is-stateful",w.dataset.state!=="default")})}let M=se("div",{class:"agt-panel"},j?[_,Z,j,q,he]:[_,Z,q,he]);ie.addEventListener("click",()=>t&&t()),xe.addEventListener("click",()=>n&&n());let J=se("div",{class:"agt-layer"}),ue=se("div",{class:"agt-layer"});v.appendChild(M),v.appendChild(ue),v.appendChild(J);let ke=[];function ge(){let C=new Set(s?s():[]);if(ue.replaceChildren(),ke=[],!me||!C.size)return;let w=M.getBoundingClientRect(),R=q.getBoundingClientRect();q.querySelectorAll(".agt-row").forEach(Y=>{let W=Y.__agtProps||[],Q=W.some(be=>C.has(be));Y.classList.toggle("is-edited",Q);let le=Y.querySelector(".agt-pair");le&&[...le.children].forEach((be,ce)=>{be.classList.toggle("is-edited",!!W[ce]&&C.has(W[ce]))})});for(let Y of q.querySelectorAll(".agt-row")){let W=(Y.__agtProps||[]).filter(be=>C.has(be));if(!W.length)continue;let Q=Y.getBoundingClientRect();if(Q.bottom<R.top+2||Q.top>R.bottom-2)continue;let le=se("button",{class:"agt-undo",type:"button",title:"Undo "+W.join(", "),onclick:()=>{for(let be of W)a&&a(be)}},Un("undo",13));le.style.left=Math.round(w.left-18)+"px",le.style.top=Math.round(Q.top+(Q.height-36)/2)+"px",ue.appendChild(le),ke.push(le)}}q.addEventListener("scroll",ge),window.addEventListener("scroll",ge,!0),window.addEventListener("resize",ge);function oe(C,w,R={}){let Y=R.axis||"both",W=null;w.addEventListener("pointerdown",le=>{if(le.button!==0)return;let be=C.getBoundingClientRect();W={dx:le.clientX-be.left,dy:le.clientY-be.top,w:be.width,h:be.height,x0:le.clientX,y0:le.clientY,live:!1}}),w.addEventListener("pointermove",le=>{if(W){if(!W.live){if(Math.abs(le.clientX-W.x0)+Math.abs(le.clientY-W.y0)<3)return;W.live=!0,C.classList.add("is-dragging"),Y!=="x"&&C===M&&(C.style.height=W.h+"px",C.style.bottom="auto");try{w.setPointerCapture(le.pointerId)}catch{}}if(C.style.right="auto",C.style.transform="none",C.style.left=Math.max(0,Math.min(window.innerWidth-W.w-8,le.clientX-W.dx))+"px",Y!=="x"){let be=Math.max(8,Math.min(window.innerHeight-40,le.clientY-W.dy));C.style.top=be+"px",C===M&&(C.style.height=Math.max(180,Math.min(W.h,window.innerHeight-be-8))+"px")}C===M&&ge()}});let Q=le=>{if(!W)return;let be=W.live;W=null,C.classList.remove("is-dragging");try{w.releasePointerCapture(le.pointerId)}catch{}be&&w.addEventListener("click",ce=>{ce.stopPropagation(),ce.preventDefault()},{capture:!0,once:!0})};w.addEventListener("pointerup",Q),w.addEventListener("pointercancel",Q)}oe(M,_,{axis:"both"});let z=se("div",{class:"agt-panel-grip",title:"Resize the inspector"});M.appendChild(z),z.addEventListener("pointerdown",C=>{if(C.button!==0)return;C.preventDefault(),C.stopPropagation();let w=C.clientX,R=M.getBoundingClientRect().width;M.classList.add("is-resizing");try{z.setPointerCapture(C.pointerId)}catch{}let Y=Q=>{let le=Math.max(300,Math.min(640,R-(Q.clientX-w)));M.style.width=le+"px",b.style.setProperty("--agt-panel-w",le+"px"),ge()},W=Q=>{M.classList.remove("is-resizing");try{z.releasePointerCapture(Q.pointerId)}catch{}z.removeEventListener("pointermove",Y),z.removeEventListener("pointerup",W),z.removeEventListener("pointercancel",W)};z.addEventListener("pointermove",Y),z.addEventListener("pointerup",W),z.addEventListener("pointercancel",W)});let me=null,Ee="style",Fe=[],Pe={border:!1,shadow:!1,radiusPerCorner:!1,paddingLinked:!1,marginLinked:!1};S.addEventListener("click",()=>{Ee="style",ut(),bt()}),D.addEventListener("click",()=>{Ee="layout",ut(),bt()});function ut(){S.classList.toggle("is-on",Ee==="style"),D.classList.toggle("is-on",Ee==="layout")}function St(C){let w=C;for(;w&&w!==document.documentElement;){let R=window.getComputedStyle(w).backgroundColor,Y=no(R);if(Y&&Y.a>.05)return R;w=w.parentElement}return"#ffffff"}function Oe(){return f?f(me):window.getComputedStyle(me)}function Ve(C,w,R){me&&(e(C,"",w),R||Tt(),tn())}function Tt(){for(let C of Fe)try{C()}catch{}ge()}function Qe(C){return Fe.push(C.refresh),C.el}function en(C,w,R){let Y=R||{};return Lt(C,Qe(ln({unit:Y.unit||"px",min:Y.min==null?0:Y.min,max:Y.max,step:Y.step||1,precision:Y.precision||0,read:()=>Y.read?Y.read(Oe()):In(Oe(),w),write:(W,Q,le)=>Ve(w,Y.write?Y.write(W):W+Q,le)})))}function $t(){let C=[],w=Oe(),R=ri("Appearance");R.body.appendChild(Lt("Color",Qe(xa({layer:J,read:()=>Oe().getPropertyValue("background-color"),write:ce=>Ve("background-color",ce)})),{props:"background-color"}));let Y=ni({options:[{value:"all",icon:"cornerAll",title:"One radius for every corner"},{value:"split",icon:"cornerSplit",title:"Set each corner separately"}],read:()=>Pe.radiusPerCorner?"split":"all",write:ce=>{Pe.radiusPerCorner=ce==="split",bt()}});if(Y.el.classList.add("agt-seg--mini"),!Pe.radiusPerCorner)R.body.appendChild(Lt("Corner Radius",[Qe(ln({iconPrefix:"corners",title:"Corner radius",scale:Tc,read:()=>In(Oe(),"border-top-left-radius"),write:(ce,Me,de)=>Ve("border-radius",ce+Me,de)})),Y.el],{props:"border-radius"}));else{R.body.appendChild(Lt("Corner Radius",Y.el));let ce=[["border-top-left-radius","TL"],["border-top-right-radius","TR"],["border-bottom-left-radius","BL"],["border-bottom-right-radius","BR"]];for(let Me of[ce.slice(0,2),ce.slice(2)])R.body.appendChild(Lt("",se("div",{class:"agt-pair"},Me.map(([de,I])=>Qe(ln({prefix:I,title:I,read:()=>In(Oe(),de),write:(N,H,V)=>Ve(de,N+H,V)})))),{props:Me.map(([de])=>de)}))}if(R.body.appendChild(Lt("Backdrop Blur",Qe(ln({iconPrefix:"blur",title:"Backdrop blur",read:()=>mk(Oe()),write:(ce,Me,de)=>Ve("backdrop-filter",ce>0?`blur(${ce}px)`:"none",de)})),{props:"backdrop-filter"})),R.body.appendChild(Lt("Opacity",Qe(ln({unit:"%",iconPrefix:"opacity",title:"Opacity",min:0,max:100,read:()=>Math.round((In(Oe(),"opacity")??1)*100),write:(ce,Me,de)=>Ve("opacity",String(ce/100),de)})),{props:"opacity"})),C.push(R.el),gk(me)){let ce=ri("Text"),Me=G=>G.split(",")[0].trim().replace(/["']/g,""),de=[],I=new Set,N=(G,ve)=>{if(!G)return;let te=Me(G).toLowerCase();I.has(te)||(I.add(te),de.push({value:G,label:ve||Me(G)}))},H=w.getPropertyValue("font-family");N(H);for(let G of No().fonts)N(G.value,G.name?`${Me(G.value)} \xB7 ${G.name}`:void 0);for(let G of fk)N(G.value,G.label);ce.body.appendChild(Lt("Typeface",Qe(w1({options:de,layer:J,read:()=>Oe().getPropertyValue("font-family"),write:G=>Ve("font-family",G)})),{props:"font-family"})),ce.body.appendChild(Lt("Style",[Qe(y1([{icon:"italic",title:"Italic",read:()=>Oe().getPropertyValue("font-style")==="italic",write:G=>Ve("font-style",G?"italic":"normal")},{icon:"underline",title:"Underline",read:()=>Oe().getPropertyValue("text-decoration-line").indexOf("underline")>=0,write:G=>Ve("text-decoration-line",G?"underline":"none")},{icon:"strike",title:"Strikethrough",read:()=>Oe().getPropertyValue("text-decoration-line").indexOf("line-through")>=0,write:G=>Ve("text-decoration-line",G?"line-through":"none")}])),Qe(ni({options:[{value:"left",icon:"alignLeft",title:"Align left",match:["left","start","justify"]},{value:"center",icon:"alignCenter",title:"Align centre"},{value:"right",icon:"alignRight",title:"Align right",match:["right","end"]}],read:()=>Oe().getPropertyValue("text-align"),write:G=>Ve("text-align",G)}))],{props:["font-style","text-decoration-line","text-align"]})),ce.body.appendChild(Lt("Size",se("div",{class:"agt-pair"},[Qe(ln({iconPrefix:"fontSize",title:"Font size",min:1,read:()=>In(Oe(),"font-size"),write:(G,ve,te)=>Ve("font-size",G+ve,te)})),Qe(ln({iconPrefix:"weight",title:"Font weight",unit:"",min:100,max:900,step:100,fallback:400,read:()=>parseInt(Oe().getPropertyValue("font-weight"),10)||null,write:(G,ve,te)=>Ve("font-weight",String(Math.round(G/100)*100),te)}))]),{props:["font-size","font-weight"]})),ce.body.appendChild(Lt("Spacing",se("div",{class:"agt-pair"},[Qe(ln({unit:"%",iconPrefix:"lineHeight",title:"Line height",min:0,max:400,placeholder:"auto",fallback:120,read:()=>{let G=In(Oe(),"line-height"),ve=In(Oe(),"font-size")||16;return G==null?null:Math.round(G/ve*100)},write:(G,ve,te)=>Ve("line-height",G+"%",te)})),Qe(ln({unit:"%",iconPrefix:"letterSpacing",title:"Letter spacing",min:-50,max:100,precision:1,read:()=>{let G=In(Oe(),"font-size")||16,ve=In(Oe(),"letter-spacing");return ve==null?0:Math.round(ve/G*1e3)/10},write:(G,ve,te)=>Ve("letter-spacing",Math.round(G/100*1e3)/1e3+"em",te)}))]),{props:["line-height","letter-spacing"]})),ce.body.appendChild(Lt("Color",Qe(xa({layer:J,read:()=>Oe().getPropertyValue("color"),write:G=>Ve("color",G)})),{props:"color"}));let V=se("div",{class:"agt-contrast"});ce.body.appendChild(V),Qe({el:V,refresh(){let G=Oe(),ve=no(G.getPropertyValue("color")),te=no(St(me)),$e=C1(ve,te);if(!$e){V.textContent="",V.className="agt-contrast";return}let He=S1(G.getPropertyValue("font-size"),G.getPropertyValue("font-weight")),je=$e>=He;V.className="agt-contrast"+(je?" is-pass":" is-fail"),V.textContent=je?`Contrast ${$e.toFixed(1)}:1 \u2014 readable (needs ${He}:1)`:`Contrast ${$e.toFixed(1)}:1 \u2014 too low, needs ${He}:1`}}),C.push(ce.el)}let W=(In(w,"border-top-width")||0)>0&&w.getPropertyValue("border-top-style")!=="none",Q=ri("Border",{onAdd:()=>{W?Pe.border=!Pe.border:(Pe.border=!0,Ve("border","1px solid rgba(0, 0, 0, 0.12)")),bt()}});(Pe.border||W)&&(Pe.border=!0,Q.body.appendChild(Lt("Width",Qe(ln({read:()=>In(Oe(),"border-top-width"),write:(ce,Me,de)=>Ve("border-width",ce+Me,de)})),{props:"border-width"})),Q.body.appendChild(Lt("Style",Qe(x1({options:hk.map(ce=>({value:ce,label:ce})),read:()=>Oe().getPropertyValue("border-top-style"),write:ce=>Ve("border-style",ce)})),{props:"border-style"})),Q.body.appendChild(Lt("Color",Qe(xa({layer:J,read:()=>Oe().getPropertyValue("border-top-color"),write:ce=>Ve("border-color",ce)})),{props:"border-color"}))),C.push(Q.el);let le=$1(w.getPropertyValue("box-shadow")),be=ri("Shadow",{onAdd:()=>{le?Pe.shadow=!Pe.shadow:(Pe.shadow=!0,Ve("box-shadow","rgba(0, 0, 0, 0.18) 0px 8px 24px 0px")),bt()}});if(Pe.shadow||le){Pe.shadow=!0;let ce=()=>$1(Oe().getPropertyValue("box-shadow"))||{x:0,y:0,blur:0,spread:0,color:"rgba(0, 0, 0, 0.18)"},Me=(de,I)=>{let N={...ce(),...de};Ve("box-shadow",`${N.color} ${N.x}px ${N.y}px ${N.blur}px ${N.spread}px`,I)};be.body.appendChild(Lt("Offset",se("div",{class:"agt-pair"},[Qe(ln({prefix:"X",min:-999,read:()=>ce().x,write:(de,I,N)=>Me({x:de},N)})),Qe(ln({prefix:"Y",min:-999,read:()=>ce().y,write:(de,I,N)=>Me({y:de},N)}))]),{props:"box-shadow"})),be.body.appendChild(Lt("Blur",se("div",{class:"agt-pair"},[Qe(ln({prefix:"B",read:()=>ce().blur,write:(de,I,N)=>Me({blur:de},N)})),Qe(ln({prefix:"S",min:-999,read:()=>ce().spread,write:(de,I,N)=>Me({spread:de},N)}))]),{props:"box-shadow"})),be.body.appendChild(Lt("Color",Qe(xa({layer:J,read:()=>ce().color,write:de=>Me({color:de})})),{props:"box-shadow"}))}return C.push(be.el),C}function _t(){let C=[],R=Oe().getPropertyValue("display"),Y=R.indexOf("flex")>=0||R.indexOf("grid")>=0,W=ri("Size");if(W.body.appendChild(Lt("Width",Qe(ln({title:"Width",precision:1,read:()=>In(Oe(),"width"),write:(Q,le,be)=>Ve("width",Q+le,be)})),{props:"width"})),W.body.appendChild(Lt("Height",Qe(ln({title:"Height",precision:1,read:()=>In(Oe(),"height"),write:(Q,le,be)=>Ve("height",Q+le,be)})),{props:"height"})),W.body.appendChild(en("Min Width","min-width")),C.push(W.el),Y){let Q=ri("Flex");Q.body.appendChild(Lt("Direction",Qe(ni({options:[{value:"row",icon:"rowDir",title:"Row",match:["row","row-reverse"]},{value:"column",icon:"colDir",title:"Column",match:["column","column-reverse"]}],read:()=>Oe().getPropertyValue("flex-direction"),write:le=>Ve("flex-direction",le)})),{props:"flex-direction"})),Q.body.appendChild(Lt("H Align",Qe(ni({options:[{value:"flex-start",icon:"alignLeft",title:"Start",match:["flex-start","start","normal","left"]},{value:"center",icon:"alignCenter",title:"Centre"},{value:"flex-end",icon:"alignRight",title:"End",match:["flex-end","end","right"]}],read:()=>Oe().getPropertyValue("justify-content"),write:le=>Ve("justify-content",le)})),{props:"justify-content"})),Q.body.appendChild(Lt("V Align",Qe(ni({options:[{value:"flex-start",icon:"alignLeft",title:"Start",match:["flex-start","start","normal","stretch"]},{value:"center",icon:"alignCenter",title:"Centre"},{value:"flex-end",icon:"alignRight",title:"End",match:["flex-end","end"]}],read:()=>Oe().getPropertyValue("align-items"),write:le=>Ve("align-items",le)})),{props:"align-items"})),Q.body.appendChild(Lt("Gap",Qe(ln({iconPrefix:"gap",title:"Gap",min:0,scale:Tc,read:()=>In(Oe(),"row-gap"),write:(le,be,ce)=>Ve("gap",le+be,ce)})),{props:"gap"})),C.push(Q.el)}return C.push(Kt("Padding","padding").el),C.push(Kt("Margin","margin",{min:-999}).el),C}function Kt(C,w,R){let Y=R||{},W=ri(C),Q=w==="padding"?"paddingLinked":"marginLinked",le=["top","right","bottom","left"],be=de=>w+"-"+de,ce=ni({options:[{value:"all",icon:"boxAll",title:"One value for every side"},{value:"split",icon:"boxSplit",title:"Set each side separately"}],read:()=>Pe[Q]?"all":"split",write:de=>{Pe[Q]=de==="all",bt()}});ce.el.classList.add("agt-seg--mini"),W.head.appendChild(se("div",{class:"agt-sec-tools"},ce.el));let Me=se("div",{class:"agt-box"},[se("div",{class:"agt-box-inner"})]);for(let de of le){let I=ln({min:Y.min==null?0:Y.min,unit:"px",prefix:"",title:C+" "+de,scale:Tc,read:()=>In(Oe(),be(de)),write:(N,H,V)=>Ve(Pe[Q]?w:be(de),N+H,V)});Fe.push(I.refresh),Me.appendChild(se("div",{class:"agt-box-side agt-box-"+de},I.el))}return Me.appendChild(se("div",{class:"agt-box-link"+(Pe[Q]?" is-on":""),title:Pe[Q]?"All sides linked":"Sides set independently"},Un(Pe[Q]?"link":"unlink",13))),W.body.appendChild(Me),W}function vt(C){let w=M.getBoundingClientRect().height;M.style.height="",M.classList.remove("is-resizing"),C();let R=M.getBoundingClientRect().height;if(Math.abs(R-w)<2)return;M.style.height=w+"px",M.offsetHeight,M.classList.add("is-resizing"),M.style.height=R+"px";let Y=()=>{M.removeEventListener("transitionend",Y),M.classList.remove("is-resizing"),M.style.height="",ge()};M.addEventListener("transitionend",Y)}function bt(){vt(()=>{if(Fe=[],q.replaceChildren(),!me||!me.isConnected){q.appendChild(O),k.textContent="No selection",h.textContent="Click an element on the page",ie.disabled=!1;return}k.textContent=_k(me);let C=[];me.__agtComponent&&C.push("<"+me.__agtComponent+">"),C.push(Oe().getPropertyValue("display")),h.textContent=C.join("  \xB7  ");for(let w of Ee==="style"?$t():_t())q.appendChild(w)}),ge()}function tn(){let C=i?i():0;xe.disabled=C===0}let qt=["mousemove","mouseover","mouseout","pointermove"],Ht=C=>C.stopPropagation();for(let C of qt)b.addEventListener(C,Ht);return document.body.appendChild(b),bt(),tn(),{host:b,setSelection(C,w){me=C,C&&(C.__agtComponent=w||null),Pe.border=!1,Pe.shadow=!1,Pe.radiusPerCorner=!1,bt()},refresh(){Tt(),tn()},refreshCounts:tn,destroy(){for(let C of qt)b.removeEventListener(C,Ht);b.remove()}}}var $c=[{id:"default",label:"Default",pseudo:""},{id:"hover",label:"Hover",pseudo:":hover"},{id:"focus",label:"Focus",pseudo:":focus-visible"},{id:"active",label:"Active",pseudo:":active"},{id:"disabled",label:"Disabled",pseudo:":disabled"}];function Nc(e){return $c.find(t=>t.id===e)??$c[0]}var Zi="data-agentation-el-id",ii="agt-force-state",Zp="agt-design-states",Ic="agt-design-state-preview";function N1(){let e=document.getElementById(Zp);return e||(e=document.createElement("style"),e.id=Zp,document.head.appendChild(e)),e}var Ji=new Map;function Jp(){let e=[];for(let[n,o]of Ji)for(let[r,i]of o){let s=Array.from(i.entries()).map(([d,m])=>`${d}: ${m} !important;`).join(" ");if(!s)continue;let a=`[${Zi}="${n}"]`,{pseudo:l}=Nc(r),c=l?`${a}${l}, ${a}.${ii}[data-agt-state="${r}"]`:a;e.push(`${c} { ${s} }`)}let t=N1();t.textContent=e.join(`
`),document.head.appendChild(t)}function yk(e,t){let n=Ji.get(e);n||(n=new Map,Ji.set(e,n));let o=n.get(t);return o||(o=new Map,n.set(t,o)),o}function xk(e,t,n){let o=t.split(",").map(r=>r.trim()).filter(r=>n?r.includes(n):!/:(hover|focus|focus-visible|active|disabled)\b/.test(r)).map(r=>r.split(n||"###").join("")).filter(Boolean);for(let r of o)try{if(e.matches(r))return!0}catch{}return!1}function ef(e,t){let n=new Map,{pseudo:o}=Nc(t);if(!e||!o)return n;for(let i of Array.from(document.styleSheets)){let s=i.ownerNode;if(s&&s.id===Zp)continue;let a;try{a=i.cssRules}catch{continue}if(a)for(let l of Array.from(a)){let c=l.selectorText;if(!c||!c.includes(o)||!xk(e,c,o))continue;let d=l.style;if(d)for(let m=0;m<d.length;m+=1){let f=d.item(m);n.set(f,d.getPropertyValue(f))}}}let r=e.getAttribute(Zi);if(r){let i=Ji.get(r)?.get(t);if(i)for(let[s,a]of i)n.set(s,a)}return n}function tf(e,t){let n=window.getComputedStyle(e);if(t==="default")return n;let o=ef(e,t);return{getPropertyValue(r){let i=o.get(r);return i!=null&&i!==""?i:n.getPropertyValue(r)}}}function P1(e,t,n,o){let r=e.getAttribute(Zi);if(!r)return"";let i=yk(r,t),s=i.get(n)??ef(e,t).get(n)??"";return i.set(n,o),Jp(),s}function nf(e,t,n){let o=e.getAttribute(Zi);o&&(Ji.get(o)?.get(t)?.delete(n),Jp())}function of(){Ji.clear(),Jp(),document.getElementById(Ic)?.remove(),document.querySelectorAll(`.${ii}`).forEach(e=>{e.classList.remove(ii),e.removeAttribute("data-agt-state")})}function rf(e,t){if(sf(),!e||t==="default")return;let n=e.getAttribute(Zi);if(!n)return;e.classList.add(ii),e.setAttribute("data-agt-state",t);let o=ef(e,t),r=document.getElementById(Ic);r||(r=document.createElement("style"),r.id=Ic);let i=Array.from(o.entries()).map(([s,a])=>`${s}: ${a};`).join(" ");r.textContent=i?`[${Zi}="${n}"].${ii}[data-agt-state="${t}"] { ${i} }`:"",document.head.insertBefore(r,N1())}function sf(){document.getElementById(Ic)?.remove(),document.querySelectorAll(`.${ii}`).forEach(e=>{e.classList.remove(ii),e.removeAttribute("data-agt-state")})}var F1=["[data-adk-root]","[data-adk-toolbar]","[data-adk-popup]","[data-adk-marker]","[data-design-edit-panel]","[data-design-edit-overlay]"],W1=F1.slice(),wa="data-agentation-el-id",R1=0;function es(e){if(!e||!e.closest)return!1;for(let t of W1)if(e.closest(t))return!0;return!1}function Pc(e){let t=typeof e.composedPath=="function"?e.composedPath():[];for(let n of t)if(n&&n.nodeType===1&&es(n)||n instanceof ShadowRoot&&n.host&&es(n.host))return!0;return es(e.target)}function af(e){if(!e||e.nodeType!==1)return null;let t=e.getAttribute(wa);return t||(R1++,t="agt-el-"+R1,e.setAttribute(wa,t)),t}function Dc(e){return!e.className||typeof e.className!="string"?[]:e.className.trim().split(/\s+/).filter(Boolean).sort()}function Rc(e){let t=[],n=e;for(;n&&n!==document.body&&n.nodeType===1;){let o=n.tagName.toLowerCase();if(n.id)o+="#"+n.id;else if(n.className&&typeof n.className=="string"){let r=Dc(n);r.length&&(o+="."+r.join("."))}if(n.parentElement&&!n.id){let r=n.parentElement,i=Dc(n).join("."),s=Array.from(r.children).filter(a=>a.tagName===n.tagName&&Dc(a).join(".")===i);s.length>1&&(o+="["+s.indexOf(n)+"]")}t.unshift(o),n=n.parentElement}return t.join(" > ")}function lf(e){if(!e||e.nodeType!==1)return null;let t=Object.keys(e).find(o=>o.startsWith("__reactFiber$")||o.startsWith("__reactInternalInstance$"));if(!t)return null;let n=e[t];for(let o=0;n&&o<30;o++){let r=n.elementType||n.type,i=null;if(r){if(typeof r=="function")i=r.displayName||r.name||null;else if(typeof r=="object"&&r.$$typeof){if(r.render)i=r.render.displayName||r.render.name||"ForwardRef";else if(r.type){let s=r.type;i=typeof s=="function"&&(s.displayName||s.name)||"Memo"}}}if(i){let s=n.memoizedProps||n.pendingProps||{};return{name:i,props:wk(s)}}n=n.return}return null}function wk(e){let t={};for(let n of Object.keys(e||{})){if(n==="children")continue;let o=e[n];if(o==null||typeof o=="string"||typeof o=="number"||typeof o=="boolean")t[n]=o;else if(Array.isArray(o))try{t[n]=JSON.parse(JSON.stringify(o))}catch{t[n]="[Array("+o.length+")]"}else if(typeof o=="function")t[n]="[Function]";else if(o instanceof Element)t[n]="[DOMNode]";else try{t[n]=JSON.parse(JSON.stringify(o))}catch{t[n]="[Object]"}}return t}function D1(e){return Array.from(e.attributes||[]).map(t=>({name:t.name,value:t.value}))}function A1(e){let t=(e.elementTagName??"element")+":"+(e.elementClassName??"");return(e.elementUniqueId?.trim()||e.elementPath?.trim()||e.elementId?.trim()||e.selector?.trim()||t)+"::"+e.property}function B1(e,t){let n=A1(t),o=e.findIndex(i=>A1(i)===n);if(o<0&&t.selector&&(o=e.findIndex(i=>i.property===t.property&&i.selector===t.selector)),o>=0){let i=e[o];if(i.newValue===t.newValue)return{records:e,changed:!1};if((i.originalValue??i.oldValue)===t.newValue){let c=e.slice();return c.splice(o,1),{records:c,changed:!0}}let a={...i,newValue:t.newValue,timestamp:t.timestamp,changeType:t.changeType??i.changeType,originalValue:i.originalValue??i.oldValue},l=e.slice();return l[o]=a,{records:l,changed:!0}}if(t.oldValue===t.newValue)return{records:e,changed:!1};let r={...t,originalValue:t.originalValue??t.oldValue};return{records:[...e,r],changed:!0}}function cf(e){if(!e.length)return"";let t=e.some(k=>k.changeType==="prop"),n=e.some(k=>k.changeType==="text"),o=e.some(k=>k.changeType!=="prop"&&k.changeType!=="text"),r;t&&o?r=`Apply these visual design changes (CSS styles and React props) to the codebase. These changes were made in a browser preview and need to be persisted to the source files:
`:t?r=`Apply these React prop changes to the codebase. These changes were made in a browser preview and need to be persisted to the source files:
`:r=`Apply these CSS style changes to the codebase. These changes were made in a browser preview and need to be persisted to the source files:
`;let i=`

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
- Preserve CSS units and format (e.g., if oldValue was "16px", keep pixel units unless converting to rem/em)`,s;t&&o?s=i+`

For CSS Changes:
1. Search for the "oldValue" of each property in CSS/SCSS files or className attributes
2. Replace with "newValue" while maintaining existing formatting and units
3. If using Tailwind, convert CSS properties to utility classes

For Prop Changes:
1. Find the JSX/TSX file where the component is rendered (use "reactComponent.name")
2. Locate the specific prop being changed (in "propChange.propPath")
3. Update from "propChange.oldValue" to "propChange.newValue"`:t?s=i+`

For Prop Changes:
1. Find the component definition or where it's rendered using "reactComponent.name"
2. Locate the prop specified in "propChange.propPath"
3. Change the value from "propChange.oldValue" to "propChange.newValue"
4. If the prop controls styling (like size, variant, color), ensure the new value is valid for that prop`:s=i+`

For CSS Style Changes:
1. Search for the element using "selector" or "elementClasses" to find relevant stylesheets
2. Find the exact CSS rule containing "property: oldValue"
3. Replace "oldValue" with "newValue"
4. If no existing rule exists, add a new declaration to the appropriate CSS file or inline style
5. For Tailwind: convert the CSS property/value to the appropriate utility class (e.g., "padding: 16px" -> "p-4")
6. Ensure specificity is maintained - don't accidentally override other rules`;let a=e.filter(k=>k.state),l=a.length?'\n\nSTATES: some changes belong to an interaction state, not to the resting style. Each of those carries "state" and "statePseudo" (e.g. "hover" / ":hover"). Put the value in the rule for that pseudo-class \u2014 creating it next to the existing rule if the project has none \u2014 and NEVER in the base rule; a hover colour applied at rest is a visible regression. Where the project expresses states differently (Tailwind `hover:` variants, a `data-state` attribute, a styled-components interpolation), follow that convention instead of adding a raw pseudo-class rule.\nStates present in this batch: '+Array.from(new Set(a.map(k=>k.statePseudo))).join(", ")+".":"",c=n?`

Some changes are COPY changes (changeType "text"): replace the element's text in the source \u2014 the string, a translation key, or whatever feeds it \u2014 never by hardcoding it over a variable.`:"",d=No(),m=L1(),f=d.colors.filter(k=>k.name),b=d.fonts.filter(k=>k.name),v=[];m.length&&v.push(`Styling detected on the page: ${m.join(", ")}. Make the change the way this project already makes it.`),f.length&&v.push(`Colour tokens in use:
`+f.map(k=>`  ${k.name}: ${k.value}`).join(`
`)),b.length&&v.push(`Type tokens in use:
`+b.map(k=>`  ${k.name}: ${k.value}`).join(`
`));let P=v.length?`

PROJECT DESIGN SYSTEM (read from the running page):
`+v.join(`
`)+"\n\nWhen a new value matches a token, reference the token (e.g. `var(--brand-500)`) rather than writing the literal. A change that is meant to apply everywhere belongs in the token itself \u2014 say so instead of editing one component, and do not invent tokens that are not listed above.":"";return r+s+c+l+P}function df(e,t=0){return e.map((o,r)=>{let i=o.elementTagName?.toLowerCase()||"element",s={property:o.property,oldValue:o.oldValue,newValue:o.newValue,changeType:o.changeType??"style",...o.state?{state:o.state,statePseudo:o.statePseudo}:{},selector:o.selector,elementId:o.elementId||null,elementClasses:o.elementClassName||null,elementTagName:i,elementPath:o.elementPath,elementAttributes:o.elementAttributes||[]},a=/font-family/.test(o.property||"")?"font":"color",l=o.changeType!=="prop"&&o.changeType!=="text"?Gp(o.newValue,a):null;l&&(s.newValueToken=`var(${l.name})`);let c=o.changeType!=="prop"&&o.changeType!=="text"?Gp(o.oldValue,a):null;c&&(s.oldValueToken=`var(${c.name})`),o.elementHTML&&(s.elementHTML=o.elementHTML.length>500?o.elementHTML.slice(0,500)+"...":o.elementHTML),o.elementReactComponent?.name&&(s.reactComponent={name:o.elementReactComponent.name,props:o.elementReactComponent.props});let d;if(o.elementReactComponent?.name){let f=o.elementReactComponent.props?Object.entries(o.elementReactComponent.props).map(([b,v])=>v==null?`${b}={null}`:typeof v=="string"?`${b}="${v}"`:`${b}={${JSON.stringify(v)}}`).join(" "):"";d=`<${o.elementReactComponent.name}${f?" "+f:""}>`}else{let f=(o.elementAttributes||[]).map(b=>`${b.name}="${b.value}"`).join(" ");d=`<${i}${f?" "+f:""}>`}let m=o.changeType==="prop"?"PROP_CHANGE":o.changeType==="text"?"TEXT_CHANGE":"CSS_CHANGE";return`

--- Change ${t+r+1} ---
Element: ${d}
[${m}]: ${JSON.stringify(s,null,2)}`}).join("")}function O1(e){return e.length?cf(e)+df(e):""}function vk(e="#0A84FF"){let t=document.createElement("div");t.setAttribute("data-design-edit-overlay","hover"),t.style.cssText=`
    position: fixed; pointer-events: none; z-index: ${to.pickerHighlight};
    border: 1px solid ${e}; background: color-mix(in srgb, ${e} 7%, transparent);
    border-radius: 2px; display: none; box-sizing: border-box;
    transition: top 60ms linear, left 60ms linear, width 60ms linear, height 60ms linear;
  `;let n=document.createElement("div");n.setAttribute("data-design-edit-overlay","label"),n.style.cssText=`
    position: fixed; pointer-events: none; z-index: ${to.pickerLabel};
    background: ${e}; color: #fff; font: 500 10px/1 ui-monospace, "SF Mono", Menlo, monospace;
    padding: 3px 6px; border-radius: 4px; display: none; white-space: nowrap;
    letter-spacing: 0.2px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.28);
  `;let o=document.createElement("div");o.setAttribute("data-design-edit-overlay","selected"),o.style.cssText=`
    position: fixed; pointer-events: none; z-index: ${to.pickerScrim};
    border: 2px solid ${e}; background: color-mix(in srgb, ${e} 8%, transparent);
    border-radius: 2px; display: none; box-sizing: border-box;
  `;let r=document.createElement("div");r.setAttribute("data-design-edit-overlay","selected-label"),r.style.cssText=n.style.cssText,document.body.appendChild(t),document.body.appendChild(n),document.body.appendChild(o),document.body.appendChild(r);function i(a){let l="";for(let c of a.childNodes)c.nodeType===3&&c.nodeValue&&(l+=c.nodeValue);return l=l.trim().replace(/\s+/g," "),l&&l.length<=28?l:a.tagName.toLowerCase()+(a.id?"#"+a.id:"")+(a.className&&typeof a.className=="string"?"."+Dc(a).slice(0,2).join("."):"")}function s(a,l,c){let d=a.getBoundingClientRect();l.style.top=d.top+"px",l.style.left=d.left+"px",l.style.width=d.width+"px",l.style.height=d.height+"px",l.style.display="block",c&&(c.textContent=i(a),c.style.top=Math.max(0,d.top-18)+"px",c.style.left=d.left+"px",c.style.display="block")}return{hover:t,label:n,selected:o,showHover(a){s(a,t,n)},hideHover(){t.style.display="none",n.style.display="none"},showSelected(a){s(a,o,r)},hideSelected(){o.style.display="none",r.style.display="none"},destroy(){t.remove(),n.remove(),o.remove(),r.remove()}}}function bk(e){try{if(navigator.clipboard&&navigator.clipboard.writeText)return navigator.clipboard.writeText(e).then(()=>!0,()=>z1(e))}catch{}return Promise.resolve(z1(e))}function z1(e){try{let t=document.createElement("textarea");t.value=e,t.setAttribute("data-design-edit-panel",""),t.style.cssText="position:fixed; top:-1000px; left:-1000px; opacity:0;",document.body.appendChild(t),t.select();let n=document.execCommand("copy");return t.remove(),n}catch{return!1}}var kk=[/^localhost$/i,/^127\.0\.0\.1$/,/^0\.0\.0\.0$/,/^\[?::1\]?$/,/\.local$/i,/\.localhost$/i];function Ck(){let e=window.location&&window.location.hostname||"";return kk.some(t=>t.test(e))}var Cr=null;function Sr(){return!!Cr}function Ac(){if(!Cr)return;let e=Cr;Cr=null,e.destroy()}function H1({onSubmit:e,onExit:t,showToast:n,ignoreSelectors:o,devHostOnly:r=!0,devHostMessage:i="Design mode requires a dev server (localhost / *.local).",accent:s="#0A84FF"}={}){if(Cr)return Cr;if(r&&!Ck())return n&&n(i),null;W1=F1.concat(Array.isArray(o)?o.filter(Boolean):[]);let a=document.createElement("style");a.setAttribute("data-design-edit-cursor",""),a.textContent="body, body * { cursor: default !important; }",(document.head||document.documentElement).appendChild(a);let l=null,c=[],d=vk(s),m="default",f=I1({accent:s,states:$c,getState:()=>m,setState:M=>{m=M,l&&rf(l,m),f.refresh(),l&&d.showSelected(l)},styleFor:M=>tf(M,m),onCommit:(M,J,ue)=>v(M,J,ue),onRevert:P,onSubmit:k,onExit:Ac,onCopy:()=>{c.length&&bk(O1(c)).then(M=>{n&&n(M?"Edits copied as a prompt.":"Copy failed \u2014 use \xAB Send to agent \xBB.")})},getRecordCount:()=>c.length,getEditedProps:()=>{if(!l)return[];let M=l.getAttribute(wa);if(!M)return[];let J=m==="default"?void 0:m;return c.filter(ue=>ue.elementUniqueId===M&&ue.state===J).map(ue=>ue.property)},onRevertProp:M=>{if(!l)return;let J=l.getAttribute(wa),ue=c.findIndex(ge=>ge.elementUniqueId===J&&ge.property===M);if(ue<0)return;let ke=c[ue];if(ke.state)nf(l,ke.state,M);else{let ge=ke.originalValue??ke.oldValue??"";ke.hadInlineStyle&&ge?l.style.setProperty(M,ge):l.style.removeProperty(M)}c=c.slice(0,ue).concat(c.slice(ue+1)),f.refresh(),d.showSelected(l)}});function b(M){sf(),l=M,M&&(af(M),rf(M,m)),f.setSelection(M,(lf(M)||{}).name),M?d.showSelected(M):d.hideSelected()}function v(M,J,ue){if(!l)return;let ke=tf(l,m),ge=J&&J.length?J:ke.getPropertyValue(M)||"";if(ge===ue)return;let oe=m==="default"&&!!l.style.getPropertyValue(M);try{m==="default"?l.style.setProperty(M,ue):P1(l,m,M,ue)}catch(Fe){console.warn("[design-edit] setProperty failed",M,ue,Fe);return}let z=lf(l),me={selector:Rc(l),property:M,oldValue:ge,newValue:ue,hadInlineStyle:oe,timestamp:Date.now(),elementPath:Rc(l),elementHTML:l.outerHTML,elementId:l.id||"",elementClassName:typeof l.className=="string"?l.className:"",elementTagName:l.tagName.toLowerCase(),elementAttributes:D1(l),elementUniqueId:af(l),changeType:"style",state:m==="default"?void 0:m,statePseudo:m==="default"?void 0:Nc(m).pseudo,elementReactComponent:z||void 0},Ee=B1(c,me);Ee.changed&&(c=Ee.records),d.showSelected(l)}function P(){if(c.length){for(let M of c){let J=document.querySelector("["+wa+'="'+M.elementUniqueId+'"]');if(!J)continue;if(M.state){nf(J,M.state,M.property);continue}let ue=M.originalValue??M.oldValue??"";M.hadInlineStyle&&ue?J.style.setProperty(M.property,ue):J.style.removeProperty(M.property)}c=[],f.refresh(),l&&d.showSelected(l)}}function k(){if(!c.length){typeof e=="function"&&e({empty:!0});return}let M=O1(c);typeof e=="function"&&e({prompt:M,records:c,selected:l}),c=[],of(),f.refresh()}function h(M){if(Pc(M)){d.hideHover(),M.stopPropagation();return}let J=document.elementFromPoint(M.clientX,M.clientY);if(!J||es(J)||J===l){d.hideHover();return}d.showHover(J)}function _(M){if(Pc(M))return;let J=document.elementFromPoint(M.clientX,M.clientY)||M.target;!J||es(J)||(M.preventDefault(),M.stopImmediatePropagation(),M.stopPropagation(),d.hideHover(),b(J))}let S=null;function D(M){if(!M||S)return;if(Array.from(M.children).some(z=>z.nodeType===1)){n&&n("Pick the text itself to rewrite it.");return}let ue=M.textContent??"";S={el:M,before:ue,previousEditable:M.getAttribute("contenteditable")},M.setAttribute("contenteditable","plaintext-only"),M.focus();try{let z=document.createRange();z.selectNodeContents(M);let me=window.getSelection();me.removeAllRanges(),me.addRange(z)}catch{}let ke=z=>{if(!S||S.el!==M)return;let me=M.textContent??"";if(S.previousEditable==null?M.removeAttribute("contenteditable"):M.setAttribute("contenteditable",S.previousEditable),M.removeEventListener("keydown",ge,!0),M.removeEventListener("blur",oe,!0),S=null,!z){M.textContent=ue;return}me!==ue&&Z(M,ue,me)},ge=z=>{if(z.stopPropagation(),z.key==="Enter"&&!z.shiftKey&&(z.preventDefault(),M.blur()),z.key==="Escape"){z.preventDefault();let me=M;ke(!1),me.blur()}},oe=()=>ke(!0);M.addEventListener("keydown",ge,!0),M.addEventListener("blur",oe,!0)}function Z(M,J,ue){let ke=lf(M),ge={selector:Rc(M),property:"textContent",oldValue:J,newValue:ue,hadInlineStyle:!1,timestamp:Date.now(),elementPath:Rc(M),elementHTML:M.outerHTML,elementId:M.id||"",elementClassName:typeof M.className=="string"?M.className:"",elementTagName:M.tagName.toLowerCase(),elementAttributes:D1(M),elementUniqueId:af(M),changeType:"text",elementReactComponent:ke||void 0},oe=B1(c,ge);oe.changed&&(c=oe.records),f.refreshCounts(),l&&d.showSelected(l)}function q(M){if(Pc(M))return;let J=document.elementFromPoint(M.clientX,M.clientY)||M.target;!J||es(J)||(M.preventDefault(),M.stopImmediatePropagation(),M.stopPropagation(),b(J),D(J))}function O(M){if(Pc(M))return;let J=M.target;S&&J&&S.el.contains(J)||(M.stopImmediatePropagation(),M.stopPropagation(),M.preventDefault())}function ie(M){if(M.key!=="Escape")return;let J=M.target;if(J&&J.closest&&J.closest("[data-design-edit-panel]")){let ke=document.querySelector("[data-design-edit-panel]"),ge=ke&&ke.shadowRoot&&ke.shadowRoot.activeElement;if(ge&&/^(INPUT|TEXTAREA|SELECT)$/.test(ge.tagName))return}M.preventDefault(),Ac()}function xe(M){if(!l)return;let J=M.target;if(J!==l&&!(J&&l.contains(J)))return;let ue=M.relatedTarget;if(ue&&(ue===l||l.contains(ue)))return;let ke=()=>{l&&f.refresh()};window.setTimeout(ke,50),window.setTimeout(ke,400)}window.addEventListener("mousemove",h,!0),window.addEventListener("mouseout",xe,!0),window.addEventListener("click",_,!0),window.addEventListener("dblclick",q,!0),window.addEventListener("mousedown",O,!0),window.addEventListener("mouseup",O,!0),window.addEventListener("pointerdown",O,!0),window.addEventListener("pointerup",O,!0),window.addEventListener("keydown",ie,!0);let he=Mc({ours:"[data-design-edit-panel],[data-design-edit-overlay],[data-adk-toast],[data-adk-history]"});function j(){l&&d.showSelected(l)}return window.addEventListener("scroll",j,!0),window.addEventListener("resize",j),Cr={destroy(){let M=t;t=null,window.removeEventListener("mousemove",h,!0),window.removeEventListener("mouseout",xe,!0),window.removeEventListener("click",_,!0),window.removeEventListener("dblclick",q,!0),window.removeEventListener("mousedown",O,!0),window.removeEventListener("mouseup",O,!0),window.removeEventListener("pointerdown",O,!0),window.removeEventListener("pointerup",O,!0),window.removeEventListener("keydown",ie,!0),he(),window.removeEventListener("scroll",j,!0),window.removeEventListener("resize",j),d.destroy(),f.destroy(),of();try{a.remove()}catch{}if(typeof M=="function")try{M()}catch(J){console.warn("[design-edit] onExit threw",J)}}},Cr}var pf=yt(mn(),1),Sk=[{id:"feature",label:{en:"Improvement",fr:"\xC9volution"}},{id:"bug",label:{en:"Fix",fr:"Correctif"}},{id:"design",label:{en:"Design",fr:"Design"}}],Ek={indigo:"#6155F5",blue:"#0088FF",cyan:"#00C3D0",green:"#34C759",yellow:"#FFCC00",orange:"#FF8D28",red:"#FF383C"},Mk="Annotate Kit",Lk="0.2.0",Bc="feedback-toolbar-settings",Tk="https://annotate-kit.local/submit";function Oc(e={}){let t=e.kinds?.length?e.kinds:Sk,n=e.accent??"blue",o=Ek[n]??n,r=$0(e.storagePrefix??"adk",e.persist!==!1),i=e.transport??vc(),s=e.design?.enabled!==!1,a=e.design?.devHostOnly!==!1,l=[...bc,...e.ignoreSelectors??[]],c=!["clipboard","console"].includes(i.name),d=K0({send:c,...e.features??{}},`${e.storagePrefix??"adk"}:features`,{canSend:()=>c,onRefused:(E,A)=>gn(A)});N0(e.licenceKey),P0();let m=wc("kit");d.onChange(()=>$t());let f=null;function b(){return f||(f=o1({accent:o,locale:v,kinds:t,getItems:()=>(je(),N()),onRemove:E=>$e(E),onReveal:E=>te(E)})),f}let v=w0(e.locale),P=e.theme??"dark",k=v0(()=>v),h=new Set,_=!1,S=null,D=null,Z=null,q=null,O=[],ie=0,xe=new Map,he=[],j=!1,M=me(),J=new Map,ue=e.defaultKind??t[0]?.id??"feature",ke=null,ge=null,oe=()=>window.location.pathname||"/",z=()=>`kinds:${oe()}`;function me(){try{let E=window.localStorage.getItem(`${e.storagePrefix??"adk"}:kinds:${window.location.pathname}`),A=E?JSON.parse(E):{};return new Map(Object.entries(A))}catch{return new Map}}function Ee(){try{window.localStorage.setItem(`${e.storagePrefix??"adk"}:${z()}`,JSON.stringify(Object.fromEntries(M)))}catch{}}function Fe(E=!1){!S||!q||(E&&(ie+=1),S.render((0,pf.jsx)(u0,{...q},ie)))}function Pe(E){(E.type.startsWith("annotation")||E.type==="design:submit")&&f?.refresh(),e.onEvent?.(E),h.forEach(A=>{try{A(E)}catch(F){console.warn("[annotate-kit] listener threw",F)}})}function ut(){try{let E=window.localStorage.getItem(Bc),F={...E?JSON.parse(E):{},outputDetail:"forensic",webhookUrl:Tk,webhooksEnabled:!1};window.localStorage.setItem(Bc,JSON.stringify(F))}catch{}}let St=null;function Oe(E){try{let A=window.localStorage.getItem(Bc),F=A?JSON.parse(A):{};if(St===null&&(St=F.blockInteractions!==!1),F.blockInteractions===E)return;window.localStorage.setItem(Bc,JSON.stringify({...F,blockInteractions:E}));let ne=Ze();Fe(!0),ne&&window.setTimeout(()=>{Ze()||We(!0)},60)}catch{}}function Ve(){if(St===null)return;let E=St;St=null,Oe(E),St=null}function Tt(){let E=window;if(E.__adkFetchPatched||typeof window.fetch!="function")return;E.__adkFetchPatched=!0;let A=window.fetch.bind(window);window.fetch=(F,ne)=>{let fe=typeof F=="string"?F:F instanceof URL?F.href:F.url;return fe&&fe.includes("annotate-kit.local")?Promise.resolve(new Response('{"ok":true}',{status:200,headers:{"Content-Type":"application/json"}})):A(F,ne)}}let Qe=()=>!!e.captureScreenshot||R0();async function en(E){if(!Qe()||!E)return null;let A=E.getBoundingClientRect(),F=16,ne=Math.max(0,A.left-F),fe=Math.max(0,A.top-F),De={x:Math.round(ne),y:Math.round(fe),width:Math.round(Math.min(window.innerWidth,A.right+F)-ne),height:Math.round(Math.min(window.innerHeight,A.bottom+F)-fe)};if(De.width<2||De.height<2)return null;let Ce=document.createElement("style");Ce.textContent=`${bc.join(",")},[class*="styles-module"]{visibility:hidden !important}`,document.head.appendChild(Ce);try{return e.captureScreenshot?await e.captureScreenshot(De,E)??null:(await new Promise(tt=>window.setTimeout(tt,60)),await D0(De))}catch(tt){return console.warn("[annotate-kit] screenshot failed",tt),gn(k("captureFailed")),null}finally{Ce.remove()}}function $t(){if(U0({name:Mk,version:Lk}),e.ignoreSelectors?.length&&ge&&e.ignoreSelectors.some(fe=>{try{return ge?.closest(fe)!=null}catch{return!1}})&&document.querySelector("[data-annotation-popup]")){qt();return}let E=document.querySelector("[data-agentation-settings-panel]");E&&q0({panel:E,features:d,accent:o}),j0({label:k("wireframeComponent"),owner:m,onClick:()=>{w()}});let A=document.querySelector("[data-annotation-popup]");if(A&&(Sr()||ga())){Array.from(A.querySelectorAll("button")).find(fe=>/^cancel$/i.test((fe.textContent??"").trim()))?.click();return}A&&(O0({popup:A,kinds:t,locale:v,accent:o,current:ue,onChange:ne=>{ue=ne,ne==="design"&&s&&Ht()}}),Qe()&&z0({popup:A,accent:o,labels:{capture:k("photograph"),remove:k("removePhoto"),view:k("viewPhoto")},onCapture:async()=>{let ne=await en(ge);return ke=ne,ne?.dataUrl??null},onClear:()=>{ke=null},onView:F0}),H0(A));let F=Ae();if(F){let ne=Vp({toolbar:F,owner:m,key:"device",title:k("device"),fromEnd:4,render:fe=>{fe.innerHTML=ti().icon,window.setTimeout(()=>Sc(fe),0)},onClick:()=>{vt(),$t()}});ne&&(ne.style.color=ti().width?o:"",ne.innerHTML=ti().icon,Sc(ne))}if(F&&s){let ne=Vp({toolbar:F,owner:m,key:"design",title:k("design"),fromEnd:3,render:fe=>{let De=(0,uf.createRoot)(fe);O.push(De),De.render((0,pf.jsx)(zp,{size:24})),window.setTimeout(()=>Sc(fe),0)},onClick:()=>Sr()?W():Ht()});ne&&(ne.style.color=Sr()?o:"")}if(F){Q0(F),X0(F,["device","design"]),d.apply(),Ec();let ne=F.querySelector('[data-adk-role="close"]');ne&&!ne.dataset.adkCloseBound&&(ne.dataset.adkCloseBound="1",ne.addEventListener("pointerdown",()=>{Sr()&&W(),ga()&&kr()},!0));let fe=F.querySelector('[data-adk-role="copy"]'),De=F.querySelector('[data-adk-role="send"]'),Ce=d.enabled("send")&&De?De:fe;Ce&&(je(),r1({button:Ce,count:N().length,accent:o,onClick:()=>b().open()}))}}let _t=!1,Kt=0;function vt(){let E=Date.now();E-Kt<300||(Kt=E,n1()?tn():bt())}function bt(){qt(),_t=Ze(),_t&&We(!1),e1({accent:o,onChange:()=>{Fe(!0),$t()}})}function tn(){t1(),_t&&!Ze()&&We(!0),_t=!1}function qt(){let E=document.querySelector("[data-annotation-popup]");if(!E)return;Array.from(E.querySelectorAll("button")).find(F=>/^cancel$/i.test((F.textContent??"").trim()))?.click()}function Ht(){if(!s||Sr())return;qt();let E=Ze();E&&We(!1),Oe(!1),H1({accent:o,ignoreSelectors:l,devHostOnly:a,devHostMessage:k("designDevHost"),showToast:gn,onExit:()=>{Ve(),Fe(!0),E&&window.setTimeout(()=>We(!0),60),$t(),Pe({type:"design:mode",active:!1})},onSubmit:F=>{if(F.empty||!F.records?.length){gn(k("designEmpty"));return}let ne=Me(F);if(!ne)return;let fe=N().find(De=>De.id===ne);fe&&Pe({type:"design:submit",item:fe}),W(),gn(k("designAdded"))}})&&(Fe(!0),E&&window.setTimeout(()=>{Ze()||We(!0),$t()},90),$t(),Pe({type:"design:mode",active:!0}))}async function C(E,A=8,F=40){for(let ne=0;ne<A;ne+=1){if(E())return!0;await new Promise(fe=>window.setTimeout(fe,F))}return E()}async function w(){if(ga()){kr();return}if(!d.enabled("wireframe"))return;qt(),await C(()=>!document.querySelector("[data-annotation-popup]"));let E=Ze();E&&(We(!1),await C(()=>!Ze())),Oe(!1),gn(k("wireframePick")),h1({accent:o,labelFor:A=>fa(A).label,ignore:A=>Yp(A),onCancel:()=>{Ve(),E&&We(!0)},onPick:A=>{document.querySelector("[data-adk-toast]")?.remove(),R(A,E)}})}async function R(E,A){if(!d.enabled("wireframe"))return;let F=E&&E.isConnected?E:null;if(!F){gn(k("wireframeNoTarget"));return}let ne=A??!1;if(A==null&&(qt(),await C(()=>!document.querySelector("[data-annotation-popup]")),Ze()&&(We(!1),await C(()=>!Ze())),Oe(!1)),!m1({target:F.children.length?F:F.parentElement??F,accent:o,labelFor:De=>fa(De).label,selectorFor:De=>fa(De).selector,showToast:gn,onExit:()=>{Ve(),Fe(!0),ne&&window.setTimeout(()=>We(!0),60),$t(),Pe({type:"wireframe:mode",active:!1})},onSubmit:De=>{if(De.empty||!De.changes?.length){gn(k("wireframeEmpty"));return}let Ce=Y(De);kr(),Ce&&gn(k("wireframeAdded"))}})){Ve(),ne&&We(!0);return}Fe(!0),window.setTimeout($t,90),Pe({type:"wireframe:mode",active:!0})}function Y(E){let F=(E.element??null)?.getBoundingClientRect(),ne=wc("layout"),fe=E.container,De={id:ne,x:F?Math.round(F.left+F.width/2+window.scrollX):24,y:F?Math.round(F.top+window.scrollY):24,comment:(()=>{let tt=E.changes??[],jt=tt.filter(nn=>nn.moved||nn.resized).length,Cn=tt.filter(nn=>nn.added).length;return`Layout \u2014 ${[jt?`${jt} part(s) rearranged`:"",Cn?`${Cn} block(s) added`:""].filter(Boolean).join(", ")||"renamed parts"} in ${fe?.label??"component"}`})(),element:fe?.label??"component",elementPath:fe?.selector??"",fullPath:fe?.selector??"",timestamp:Date.now(),url:window.location.href,...F?{boundingBox:{x:F.left,y:F.top,width:F.width,height:F.height}}:{}};try{wr(oe(),[...Xo(oe()),De])}catch(tt){return console.warn("[annotate-kit] could not store the layout annotation",tt),null}M.set(ne,"design"),Ee(),xe.set(ne,{records:[],prompt:E.prompt??""}),be(),Fe(!0),je();let Ce=N().find(tt=>tt.id===ne);return Ce&&Pe({type:"design:submit",item:Ce}),ne}function W(){Sr()&&Ac()}let Q=()=>`${e.storagePrefix??"adk"}:design:${oe()}`;function le(){try{let E=window.localStorage.getItem(Q()),A=E?JSON.parse(E):{};return new Map(Object.entries(A))}catch{return new Map}}function be(){try{window.localStorage.setItem(Q(),JSON.stringify(Object.fromEntries(xe)))}catch{}}function ce(E){let A=E[0],F=A?`${A.property}: ${A.oldValue} \u2192 ${A.newValue}`:"",ne=E.length>1?` (+${E.length-1})`:"";return`Design \u2014 ${F}${ne}`}function Me(E){let A=E.records??[],F=A[0],fe=(F?.elementUniqueId?document.querySelector(`[data-agentation-el-id="${F.elementUniqueId}"]`):null)?.getBoundingClientRect(),De=wc("design"),Ce={id:De,x:fe?Math.round(fe.left+fe.width/2+window.scrollX):24,y:fe?Math.round(fe.top+window.scrollY):24,comment:ce(A),element:F?.elementTagName??"element",elementPath:F?.selector??"",fullPath:F?.elementPath??"",timestamp:Date.now(),url:window.location.href,...fe?{boundingBox:{x:fe.left,y:fe.top,width:fe.width,height:fe.height}}:{},...F?.elementClassName?{cssClasses:F.elementClassName}:{},...F?.elementReactComponent?.name?{reactComponents:F.elementReactComponent.name}:{}};try{wr(oe(),[...Xo(oe()),Ce])}catch(tt){return console.warn("[annotate-kit] could not store the design annotation",tt),null}return M.set(De,"design"),Ee(),xe.set(De,{records:A,prompt:E.prompt??"",changes:df(A)}),be(),Fe(!0),je(),De}function de(E){let A=E.elementPath?I(E.elementPath):null,ne=(A?fa(A):null)??{label:E.element||"element",selector:E.elementPath||"",path:E.elementPath||"",fullPath:E.fullPath||E.elementPath||"",tagName:(E.element||"element").split(/[.#\s]/)[0]||"element",rect:E.boundingBox??{x:E.x,y:E.y,width:0,height:0},pageX:E.x,pageY:E.y};E.cssClasses&&(ne.classes=E.cssClasses),E.accessibility&&(ne.accessibility=E.accessibility),E.nearbyText&&(ne.nearbyText=E.nearbyText),E.selectedText&&(ne.selectedText=E.selectedText),E.reactComponents&&!ne.reactComponent&&(ne.reactComponent={name:E.reactComponents}),E.sourceFile&&ne.reactComponent&&!ne.reactComponent.source&&(ne.reactComponent.source=E.sourceFile);let fe={id:String(E.id),kind:M.get(String(E.id))??ue,source:"annotation",comment:E.comment??"",createdAt:E.createdAt??new Date(E.timestamp||Date.now()).toISOString(),url:E.url??window.location.href,pagePath:oe(),target:ne};ne.viewport={label:Qp(),width:J0()};let De=J.get(String(E.id));De&&(fe.screenshot=De);let Ce=xe.get(String(E.id));return Ce&&(fe.source="design",fe.designChanges=Ce.records,Ce.prompt&&(fe.designPrompt=Ce.prompt),fe.designChangeBlock=Ce.changes??Ce.prompt),fe}function I(E){try{let A=document.querySelectorAll(E),F=A[0];return A.length===1&&F instanceof HTMLElement?F:null}catch{return null}}function N(){return he.map(de)}function H(E){let A=N();if(!A.length)return"";let F=T0(A,{locale:v,kinds:t,url:window.location.href,pagePath:oe(),title:document.title,viewportLine:`${Qp()} (window ${window.innerWidth}\xD7${window.innerHeight} @${window.devicePixelRatio||1}x)`,designGuidance:cf(A.flatMap(ne=>ne.designChanges??[]))});return E?`${E}

---

${F}`:F}function V(E){return{sessionId:r.sessionId(),createdAt:new Date().toISOString(),url:window.location.href,pagePath:oe(),title:document.title,locale:v,viewport:{width:window.innerWidth,height:window.innerHeight,dpr:window.devicePixelRatio||1,scrollY:window.scrollY},context:e.context,items:N(),markdown:H(E)}}async function G(E){let A=V(E);if(!A.items.length)return gn(k("nothingToSend")),{ok:!1,message:"empty"};j=!0;let F;try{F=await i.send(A)}catch(ne){F={ok:!1,message:ne instanceof Error?ne.message:String(ne)}}return j=!1,F.ok?(e.copyOnSubmit&&await ha(A.markdown),xe=new Map,be(),gn(k("sent"))):gn(`${k("sendFailed")}${F.message?` \u2014 ${F.message}`:""}`),Pe({type:"submit",payload:A,result:F}),F}function ve(){if(_)return;ut(),Tt(),W0(),D=document.createElement("div"),D.setAttribute("data-adk-root",""),(e.container??document.body).appendChild(D),q={copyToClipboard:!0,onAnnotationAdd:A=>{M.set(String(A.id),ue),Ee(),ke&&(J.set(String(A.id),ke),ke=null),je(),ue=e.defaultKind??t[0]?.id??"feature",Pe({type:"annotation:add",item:de(A)})},onAnnotationUpdate:A=>{je(),Pe({type:"annotation:update",item:de(A)})},onAnnotationDelete:A=>{M.delete(String(A.id)),J.delete(String(A.id)),Ee(),je(),Pe({type:"annotation:delete",item:de(A)})},onAnnotationsClear:A=>{A.forEach(F=>{M.delete(String(F.id)),J.delete(String(F.id))}),Ee(),he=[],Pe({type:"annotations:clear",items:A.map(de)})},onCopy:A=>{let F=H(A);ha(F),Pe({type:"copy",markdown:F})},onSubmit:(A,F)=>{he=F,G(A)}},S=(0,uf.createRoot)(D),Fe(),Z=new MutationObserver(()=>{Z?.disconnect();try{$t()}finally{Z?.observe(document.body,{childList:!0,subtree:!0})}}),Z.observe(document.body,{childList:!0,subtree:!0}),$t(),document.addEventListener("mousedown",He,!0),xe=le(),je(),_=!0}function te(E){let A=x0(E.target);if(!A){gn(k("itemGone"));return}A.scrollIntoView({behavior:"smooth",block:"center"});let F=A.getBoundingClientRect(),ne=document.createElement("div");ne.setAttribute("data-adk-flash",""),ne.style.cssText=["position:fixed",`left:${F.left-3}px`,`top:${F.top-3}px`,`width:${F.width+6}px`,`height:${F.height+6}px`,"border-radius:6px",`border:2px solid ${o}`,`background:color-mix(in srgb, ${o} 14%, transparent)`,"pointer-events:none","z-index:99994","transition:opacity 600ms ease-out"].join(";"),document.body.appendChild(ne),window.setTimeout(()=>{ne.style.opacity="0"},400),window.setTimeout(()=>ne.remove(),1100)}function $e(E){let A=N().find(F=>F.id===E);try{wr(oe(),Xo(oe()).filter(F=>String(F.id)!==E))}catch{}M.delete(E),J.delete(E),xe.delete(E),Ee(),be(),Fe(!0),je(),A&&Pe({type:"annotation:delete",item:A})}function He(E){let A=E.target;!(A instanceof HTMLElement)||Yp(A)||(ge=A)}function je(){try{let E=Xo(oe());Array.isArray(E)&&(he=E)}catch{}}function at(){_&&(W(),kr(),Z?.disconnect(),Z=null,document.removeEventListener("mousedown",He,!0),O.splice(0).forEach(E=>{queueMicrotask(()=>E.unmount())}),S?.unmount(),S=null,D?.remove(),D=null,_=!1)}function Ae(){let E=document.querySelector("[data-agentation-toolbar], [data-feedback-toolbar]");return(E??document).querySelector('[class*="toolbarContainer"]')??E}function Ze(){let E=Ae();return!!E&&/expanded/i.test(E.className)}function We(E){let A=Ae();if(!A)return!1;if(E===Ze())return!0;if(E)return A.click(),!0;let F=()=>document.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape",bubbles:!0}));F();for(let ne=0;ne<3&&Ze();ne+=1)F();return!Ze()}return{mount:ve,unmount:at,start(){_||ve(),We(!0),Pe({type:"mode",active:!0})},stop(){W(),We(!1),Pe({type:"mode",active:!1})},toggle(){We(!Ze())},isActive:Ze,enterDesignMode:Ht,exitDesignMode:W,isDesignMode:()=>Sr(),enterWireframeMode:E=>{R(E??ge)},exitWireframeMode:()=>kr(),isWireframeMode:()=>ga(),setFeature:(E,A)=>d.set(E,A),getFeatures:()=>d.get(),reload(){je(),xe=le(),Fe(!0)},getItems(){return je(),N()},addItem(E){try{wr(oe(),[...Xo(oe()),{id:E.id,x:E.target.pageX,y:E.target.pageY,comment:E.comment,element:E.target.label,elementPath:E.target.selector,fullPath:E.target.fullPath,timestamp:Date.now(),url:E.url}])}catch{}M.set(E.id,E.kind),Ee(),Fe(!0),je(),Pe({type:"annotation:add",item:E})},removeItem:$e,clear(){let E=N();xe=new Map,be();try{wr(oe(),[])}catch{}M.clear(),J.clear(),Ee(),Fe(!0),he=[],Pe({type:"annotations:clear",items:E})},setItemStatus(E,A,F){a1(E,A,F),Ec();let ne=N().find(fe=>fe.id===E);ne&&Pe({type:"item:status",item:ne,status:A,note:F})},getItemStatus:E=>l1(E)?.status??"pending",clearItemStatuses(){c1(),Ec()},buildMarkdown:()=>H(),buildPayload:()=>V(),submit:()=>(je(),G()),async copy(){let E=H();if(!E)return gn(k("nothingToSend")),!1;let A=await ha(E);return gn(k(A?"copied":"sendFailed")),A&&Pe({type:"copy",markdown:E}),A},setLocale(E){v=E,$t()},setTheme(E){P=E;let A=E==="auto"?window.matchMedia?.("(prefers-color-scheme: light)").matches?"light":"dark":E;document.querySelectorAll("[data-agentation-theme]").forEach(F=>{F.setAttribute("data-agentation-theme",A)})},on(E){return h.add(E),()=>h.delete(E)}}}var $k=["connected-mate.github.io","localhost","127.0.0.1",""];function j1(){if(typeof window>"u")return!1;let e=window.location.hostname;return $k.includes(e)||e.endsWith(".local")}typeof window<"u"&&!j1()&&console.warn("[annotate-kit] This is the demo build from the Annotate Kit website and only runs there. For your own application, take a licence: alex.cormeraie@gmail.com");function Ik(e={}){if(!j1()){let t=()=>{};return new Proxy({},{get:(n,o)=>o==="getItems"?()=>[]:o==="buildMarkdown"?()=>"":o==="getFeatures"?()=>({}):t})}return Oc(e)}return vy(Nk);})();
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
