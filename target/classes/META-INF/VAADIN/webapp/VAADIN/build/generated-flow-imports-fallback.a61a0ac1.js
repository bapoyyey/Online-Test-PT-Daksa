import{c as qs,D as Z,t as q,w as A,m as G,p as Xr,d as ve,P as Qr,F as T,E as Us,b as Zr,f as eo,l as Ae,r as to,a as mt,g as io,e as so,h as ro,O as oo,i as ao,s as no,j as lo,k as g,n as Mt,o as ho,M as uo,q as _,u as co,v as oe,x as po,y as rt,z as mo,A as fo,B as _o,C as c,G as Ws,K as Ft,H as w,T as v,I as z,J as be,L as O,N as Dt,Q as go,R as vo,S as bo,U as Vt,V as Rt,W as Ke,X as yo,Y as W,Z as Nt,_ as js,$ as Ys,a0 as Je,a1 as ee,a2 as te,a3 as he,a4 as $t,a5 as Ht,a6 as Xe,a7 as Qe,a8 as wo,a9 as xo,aa as $,ab as Ze,ac as Gs,ad as Co,ae as ye,af as Ao,ag as Io,ah as ft,ai as qt,aj as Ut,ak as et,al as we,am as ie,an as Ks,ao as So,ap as Ie,aq as Eo,ar as Js,as as K,at as ue,au as ko,av as To,aw as Po,ax as Xs,ay as Qs,az as tt,aA as Wt,aB as jt,aC as Oo,aD as Lo,aE as zo,aF as Bo,aG as Mo,aH as Fo,aI as Do,aJ as Vo,aK as Ro,aL as Zs,aM as No,aN as $o,aO as Ho,aP as ot,aQ as qo,aR as Uo,aS as at}from"./generated-flow-imports.13038924.js";import{i as m}from"./indexhtml.8be683d2.js";/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const it=!(window.ShadyDOM&&window.ShadyDOM.inUse);let Fe;function oi(s){s&&s.shimcssproperties?Fe=!1:Fe=it||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)"))}let _e;window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0&&(_e=window.ShadyCSS.cssBuild);const er=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0?Fe=window.ShadyCSS.nativeCss:window.ShadyCSS?(oi(window.ShadyCSS),window.ShadyCSS=void 0):oi(window.WebComponents&&window.WebComponents.flags);const Yt=Fe;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class ai{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function tr(s){return s=Wo(s),ir(jo(s),s)}function Wo(s){return s.replace(B.comments,"").replace(B.port,"")}function jo(s){let e=new ai;e.start=0,e.end=s.length;let t=e;for(let i=0,r=s.length;i<r;i++)if(s[i]===rr){t.rules||(t.rules=[]);let o=t,l=o.rules[o.rules.length-1]||null;t=new ai,t.start=i+1,t.parent=o,t.previous=l,o.rules.push(t)}else s[i]===or&&(t.end=i+1,t=t.parent||e);return e}function ir(s,e){let t=e.substring(s.start,s.end-1);if(s.parsedCssText=s.cssText=t.trim(),s.parent){let r=s.previous?s.previous.end:s.parent.start;t=e.substring(r,s.start-1),t=Yo(t),t=t.replace(B.multipleSpaces," "),t=t.substring(t.lastIndexOf(";")+1);let o=s.parsedSelector=s.selector=t.trim();s.atRule=o.indexOf(Zo)===0,s.atRule?o.indexOf(Qo)===0?s.type=V.MEDIA_RULE:o.match(B.keyframesRule)&&(s.type=V.KEYFRAMES_RULE,s.keyframesName=s.selector.split(B.multipleSpaces).pop()):o.indexOf(ar)===0?s.type=V.MIXIN_RULE:s.type=V.STYLE_RULE}let i=s.rules;if(i)for(let r=0,o=i.length,l;r<o&&(l=i[r]);r++)ir(l,e);return s}function Yo(s){return s.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e})}function sr(s,e,t=""){let i="";if(s.cssText||s.rules){let r=s.rules;if(r&&!Go(r))for(let o=0,l=r.length,a;o<l&&(a=r[o]);o++)i=sr(a,e,i);else i=e?s.cssText:Ko(s.cssText),i=i.trim(),i&&(i="  "+i+`
`)}return i&&(s.selector&&(t+=s.selector+" "+rr+`
`),t+=i,s.selector&&(t+=or+`

`)),t}function Go(s){let e=s[0];return Boolean(e)&&Boolean(e.selector)&&e.selector.indexOf(ar)===0}function Ko(s){return s=Jo(s),Xo(s)}function Jo(s){return s.replace(B.customProp,"").replace(B.mixinProp,"")}function Xo(s){return s.replace(B.mixinApply,"").replace(B.varApply,"")}const V={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},rr="{",or="}",B={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},ar="--",Qo="@media",Zo="@";/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const _t=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,De=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,ea=/@media\s(.*)/;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ni=new Set,ta="shady-unscoped";function ia(s){const e=s.textContent;if(!ni.has(e)){ni.add(e);const t=document.createElement("style");t.setAttribute("shady-unscoped",""),t.textContent=e,document.head.appendChild(t)}}function sa(s){return s.hasAttribute(ta)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function gt(s,e){return s?(typeof s=="string"&&(s=tr(s)),e&&ce(s,e),sr(s,Yt)):""}function li(s){return!s.__cssRules&&s.textContent&&(s.__cssRules=tr(s.textContent)),s.__cssRules||null}function ce(s,e,t,i){if(!s)return;let r=!1,o=s.type;if(i&&o===V.MEDIA_RULE){let a=s.selector.match(ea);a&&(window.matchMedia(a[1]).matches||(r=!0))}o===V.STYLE_RULE?e(s):t&&o===V.KEYFRAMES_RULE?t(s):o===V.MIXIN_RULE&&(r=!0);let l=s.rules;if(l&&!r)for(let a=0,n=l.length,d;a<n&&(d=l[a]);a++)ce(d,e,t,i)}function ra(s,e){let t=0;for(let i=e,r=s.length;i<r;i++)if(s[i]==="(")t++;else if(s[i]===")"&&--t===0)return i;return-1}function nr(s,e){let t=s.indexOf("var(");if(t===-1)return e(s,"","","");let i=ra(s,t+3),r=s.substring(t+4,i),o=s.substring(0,t),l=nr(s.substring(i+1),e),a=r.indexOf(",");if(a===-1)return e(o,r.trim(),"",l);let n=r.substring(0,a).trim(),d=r.substring(a+1).trim();return e(o,n,d,l)}window.ShadyDOM&&window.ShadyDOM.wrap;function oa(s){let e=s.localName,t="",i="";return e?e.indexOf("-")>-1?t=e:(i=e,t=s.getAttribute&&s.getAttribute("is")||""):(t=s.is,i=s.extends),{is:t,typeExtension:i}}function aa(s){const e=[],t=s.querySelectorAll("style");for(let i=0;i<t.length;i++){const r=t[i];sa(r)?it||(ia(r),r.parentNode.removeChild(r)):(e.push(r.textContent),r.parentNode.removeChild(r))}return e.join("").trim()}const lr="css-build";function na(s){if(_e!==void 0)return _e;if(s.__cssBuild===void 0){const e=s.getAttribute(lr);if(e)s.__cssBuild=e;else{const t=la(s);t!==""&&da(s),s.__cssBuild=t}}return s.__cssBuild||""}function di(s){return na(s)!==""}function la(s){const e=s.localName==="template"?s.content.firstChild:s.firstChild;if(e instanceof Comment){const t=e.textContent.trim().split(":");if(t[0]===lr)return t[1]}return""}function da(s){const e=s.localName==="template"?s.content.firstChild:s.firstChild;e.parentNode.removeChild(e)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function vt(s,e){for(let t in e)t===null?s.style.removeProperty(t):s.style.setProperty(t,e[t])}function dr(s,e){const t=window.getComputedStyle(s).getPropertyValue(e);return t?t.trim():""}function ha(s){const e=De.test(s)||_t.test(s);return De.lastIndex=0,_t.lastIndex=0,e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ua=/;\s*/m,ca=/^\s*(initial)|(inherit)\s*$/,hi=/\s*!important/,bt="_-_";class pa{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let Ve=null;class P{constructor(){this._currentElement=null,this._measureElement=null,this._map=new pa}detectMixin(e){return ha(e)}gatherStyles(e){const t=aa(e.content);if(t){const i=document.createElement("style");return i.textContent=t,e.content.insertBefore(i,e.content.firstChild),i}return null}transformTemplate(e,t){e._gatheredStyle===void 0&&(e._gatheredStyle=this.gatherStyles(e));const i=e._gatheredStyle;return i?this.transformStyle(i,t):null}transformStyle(e,t=""){let i=li(e);return this.transformRules(i,t),e.textContent=gt(i),i}transformCustomStyle(e){let t=li(e);return ce(t,i=>{i.selector===":root"&&(i.selector="html"),this.transformRule(i)}),e.textContent=gt(t),t}transformRules(e,t){this._currentElement=t,ce(e,i=>{this.transformRule(i)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),e.selector===":root"&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(_t,(i,r,o,l)=>this._produceCssProperties(i,r,o,l,t)),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const i={};let r=!1;return ce(t,o=>{r=r||o===e,!r&&o.selector===e.selector&&Object.assign(i,this._cssTextToMap(o.parsedCssText))}),i}_consumeCssProperties(e,t){let i=null;for(;i=De.exec(e);){let r=i[0],o=i[1],l=i.index,a=l+r.indexOf("@apply"),n=l+r.length,d=e.slice(0,a),h=e.slice(n),u=t?this._fallbacksFromPreviousRules(t):{};Object.assign(u,this._cssTextToMap(d));let p=this._atApplyToCssProperties(o,u);e=`${d}${p}${h}`,De.lastIndex=l+p.length}return e}_atApplyToCssProperties(e,t){e=e.replace(ua,"");let i=[],r=this._map.get(e);if(r||(this._map.set(e,{}),r=this._map.get(e)),r){this._currentElement&&(r.dependants[this._currentElement]=!0);let o,l,a;const n=r.properties;for(o in n)a=t&&t[o],l=[o,": var(",e,bt,o],a&&l.push(",",a.replace(hi,"")),l.push(")"),hi.test(n[o])&&l.push(" !important"),i.push(l.join(""))}return i.join("; ")}_replaceInitialOrInherit(e,t){let i=ca.exec(t);return i&&(i[1]?t=this._getInitialValueForProperty(e):t="apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let i=e.split(";"),r,o,l={};for(let a=0,n,d;a<i.length;a++)n=i[a],n&&(d=n.split(":"),d.length>1&&(r=d[0].trim(),o=d.slice(1).join(":"),t&&(o=this._replaceInitialOrInherit(r,o)),l[r]=o));return l}_invalidateMixinEntry(e){if(!!Ve)for(let t in e.dependants)t!==this._currentElement&&Ve(t)}_produceCssProperties(e,t,i,r,o){if(i&&nr(i,(C,E)=>{E&&this._map.get(E)&&(r=`@apply ${E};`)}),!r)return e;let l=this._consumeCssProperties(""+r,o),a=e.slice(0,e.indexOf("--")),n=this._cssTextToMap(l,!0),d=n,h=this._map.get(t),u=h&&h.properties;u?d=Object.assign(Object.create(u),n):this._map.set(t,d);let p=[],f,y,b=!1;for(f in d)y=n[f],y===void 0&&(y="initial"),u&&!(f in u)&&(b=!0),p.push(`${t}${bt}${f}: ${y}`);return b&&this._invalidateMixinEntry(h),h&&(h.properties=d),i&&(a=`${e};${a}`),`${a}${p.join("; ")};`}}P.prototype.detectMixin=P.prototype.detectMixin;P.prototype.transformStyle=P.prototype.transformStyle;P.prototype.transformCustomStyle=P.prototype.transformCustomStyle;P.prototype.transformRules=P.prototype.transformRules;P.prototype.transformRule=P.prototype.transformRule;P.prototype.transformTemplate=P.prototype.transformTemplate;P.prototype._separator=bt;Object.defineProperty(P.prototype,"invalidCallback",{get(){return Ve},set(s){Ve=s}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const yt={};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Re="_applyShimCurrentVersion",X="_applyShimNextVersion",Ne="_applyShimValidatingVersion",ma=Promise.resolve();function fa(s){let e=yt[s];e&&_a(e)}function _a(s){s[Re]=s[Re]||0,s[Ne]=s[Ne]||0,s[X]=(s[X]||0)+1}function hr(s){return s[Re]===s[X]}function ga(s){return!hr(s)&&s[Ne]===s[X]}function va(s){s[Ne]=s[X],s._validating||(s._validating=!0,ma.then(function(){s[Re]=s[X],s._validating=!1}))}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let nt=null,ui=window.HTMLImports&&window.HTMLImports.whenReady||null,lt;function ci(s){requestAnimationFrame(function(){ui?ui(s):(nt||(nt=new Promise(e=>{lt=e}),document.readyState==="complete"?lt():document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&lt()})),nt.then(function(){s&&s()}))})}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const pi="__seenByShadyCSS",Se="__shadyCSSCachedStyle";let $e=null,pe=null;class N{constructor(){this.customStyles=[],this.enqueued=!1,ci(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){this.enqueued||!pe||(this.enqueued=!0,ci(pe))}addCustomStyle(e){e[pi]||(e[pi]=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[Se])return e[Se];let t;return e.getStyle?t=e.getStyle():t=e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const i=e[t];if(i[Se])continue;const r=this.getStyleForCustomStyle(i);if(r){const o=r.__appliedElement||r;$e&&$e(o),i[Se]=o}}return e}}N.prototype.addCustomStyle=N.prototype.addCustomStyle;N.prototype.getStyleForCustomStyle=N.prototype.getStyleForCustomStyle;N.prototype.processStyles=N.prototype.processStyles;Object.defineProperties(N.prototype,{transformCallback:{get(){return $e},set(s){$e=s}},validateCallback:{get(){return pe},set(s){let e=!1;pe||(e=!0),pe=s,e&&this.enqueueDocumentValidation()}}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const de=new P;class ba{constructor(){this.customStyleInterface=null,de.invalidCallback=fa}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{de.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,t){if(this.ensure(),di(e))return;yt[t]=e;let i=de.transformTemplate(e,t);e._styleAst=i}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(!!this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let i=e[t],r=this.customStyleInterface.getStyleForCustomStyle(i);r&&de.transformCustomStyle(r)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&vt(e,t),e.shadowRoot){this.styleElement(e);let i=e.shadowRoot.children||e.shadowRoot.childNodes;for(let r=0;r<i.length;r++)this.styleSubtree(i[r])}else{let i=e.children||e.childNodes;for(let r=0;r<i.length;r++)this.styleSubtree(i[r])}}styleElement(e){this.ensure();let{is:t}=oa(e),i=yt[t];if(!(i&&di(i))&&i&&!hr(i)){ga(i)||(this.prepareTemplate(i,t),va(i));let r=e.shadowRoot;if(r){let o=r.querySelector("style");o&&(o.__cssRules=i._styleAst,o.textContent=gt(i._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const s=new ba;let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,i,r){s.flushCustomStyles(),s.prepareTemplate(t,i)},prepareTemplateStyles(t,i,r){window.ShadyCSS.prepareTemplate(t,i,r)},prepareTemplateDom(t,i){},styleSubtree(t,i){s.flushCustomStyles(),s.styleSubtree(t,i)},styleElement(t){s.flushCustomStyles(),s.styleElement(t)},styleDocument(t){s.flushCustomStyles(),s.styleDocument(t)},getComputedStyleValue(t,i){return dr(t,i)},flushCustomStyles(){s.flushCustomStyles()},nativeCss:Yt,nativeShadow:it,cssBuild:_e,disableRuntime:er},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=de;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Gt=typeof document.head.style.touchAction=="string",He="__polymerGestures",ze="__polymerGesturesHandled",wt="__polymerGesturesTouchAction",mi=25,fi=5,ya=2,wa=2500,ur=["mousedown","mousemove","mouseup","click"],xa=[0,1,4,2],Ca=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function Kt(s){return ur.indexOf(s)>-1}let Jt=!1;(function(){try{let s=Object.defineProperty({},"passive",{get(){Jt=!0}});window.addEventListener("test",null,s),window.removeEventListener("test",null,s)}catch{}})();function cr(s){if(!(Kt(s)||s==="touchend")&&Gt&&Jt&&Xr)return{passive:!0}}let pr=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const xt=[],Aa={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Ia={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Sa(s){return Aa[s.localName]||!1}function Ea(s){let e=Array.prototype.slice.call(s.labels||[]);if(!e.length){e=[];try{let t=s.getRootNode();if(s.id){let i=t.querySelectorAll(`label[for = '${s.id}']`);for(let r=0;r<i.length;r++)e.push(i[r])}}catch{}}return e}let _i=function(s){let e=s.sourceCapabilities;if(!(e&&!e.firesTouchEvents)&&(s[ze]={skip:!0},s.type==="click")){let t=!1,i=st(s);for(let r=0;r<i.length;r++){if(i[r].nodeType===Node.ELEMENT_NODE){if(i[r].localName==="label")xt.push(i[r]);else if(Sa(i[r])){let o=Ea(i[r]);for(let l=0;l<o.length;l++)t=t||xt.indexOf(o[l])>-1}}if(i[r]===S.mouse.target)return}if(t)return;s.preventDefault(),s.stopPropagation()}};function gi(s){let e=pr?["click"]:ur;for(let t=0,i;t<e.length;t++)i=e[t],s?(xt.length=0,document.addEventListener(i,_i,!0)):document.removeEventListener(i,_i,!0)}function ka(s){if(!qs)return;S.mouse.mouseIgnoreJob||gi(!0);let e=function(){gi(),S.mouse.target=null,S.mouse.mouseIgnoreJob=null};S.mouse.target=st(s)[0],S.mouse.mouseIgnoreJob=Z.debounce(S.mouse.mouseIgnoreJob,q.after(wa),e)}function U(s){let e=s.type;if(!Kt(e))return!1;if(e==="mousemove"){let t=s.buttons===void 0?1:s.buttons;return s instanceof window.MouseEvent&&!Ca&&(t=xa[s.which]||0),Boolean(t&1)}else return(s.button===void 0?0:s.button)===0}function Ta(s){if(s.type==="click"){if(s.detail===0)return!0;let e=R(s);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let t=e.getBoundingClientRect(),i=s.pageX,r=s.pageY;return!(i>=t.left&&i<=t.right&&r>=t.top&&r<=t.bottom)}return!1}let S={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Pa(s){let e="auto",t=st(s);for(let i=0,r;i<t.length;i++)if(r=t[i],r[wt]){e=r[wt];break}return e}function mr(s,e,t){s.movefn=e,s.upfn=t,document.addEventListener("mousemove",e),document.addEventListener("mouseup",t)}function J(s){document.removeEventListener("mousemove",s.movefn),document.removeEventListener("mouseup",s.upfn),s.movefn=null,s.upfn=null}qs&&document.addEventListener("touchend",ka,Jt?{passive:!0}:!1);const st=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:s=>s.composedPath&&s.composedPath()||[],xe={},H=[];function Oa(s,e){let t=document.elementFromPoint(s,e),i=t;for(;i&&i.shadowRoot&&!window.ShadyDOM;){let r=i;if(i=i.shadowRoot.elementFromPoint(s,e),r===i)break;i&&(t=i)}return t}function R(s){const e=st(s);return e.length>0?e[0]:s.target}function fr(s){let e,t=s.type,r=s.currentTarget[He];if(!r)return;let o=r[t];if(!!o){if(!s[ze]&&(s[ze]={},t.slice(0,5)==="touch")){s=s;let l=s.changedTouches[0];if(t==="touchstart"&&s.touches.length===1&&(S.touch.id=l.identifier),S.touch.id!==l.identifier)return;Gt||(t==="touchstart"||t==="touchmove")&&La(s)}if(e=s[ze],!e.skip){for(let l=0,a;l<H.length;l++)a=H[l],o[a.name]&&!e[a.name]&&a.flow&&a.flow.start.indexOf(s.type)>-1&&a.reset&&a.reset();for(let l=0,a;l<H.length;l++)a=H[l],o[a.name]&&!e[a.name]&&(e[a.name]=!0,a[t](s))}}}function La(s){let e=s.changedTouches[0],t=s.type;if(t==="touchstart")S.touch.x=e.clientX,S.touch.y=e.clientY,S.touch.scrollDecided=!1;else if(t==="touchmove"){if(S.touch.scrollDecided)return;S.touch.scrollDecided=!0;let i=Pa(s),r=!1,o=Math.abs(S.touch.x-e.clientX),l=Math.abs(S.touch.y-e.clientY);s.cancelable&&(i==="none"?r=!0:i==="pan-x"?r=l>o:i==="pan-y"&&(r=o>l)),r?s.preventDefault():qe("track")}}function za(s,e,t){return xe[e]?(Ma(s,e,t),!0):!1}function Ba(s,e,t){return xe[e]?(Fa(s,e,t),!0):!1}function Ma(s,e,t){let i=xe[e],r=i.deps,o=i.name,l=s[He];l||(s[He]=l={});for(let a=0,n,d;a<r.length;a++)n=r[a],!(pr&&Kt(n)&&n!=="click")&&(d=l[n],d||(l[n]=d={_count:0}),d._count===0&&s.addEventListener(n,fr,cr(n)),d[o]=(d[o]||0)+1,d._count=(d._count||0)+1);s.addEventListener(e,t),i.touchAction&&_r(s,i.touchAction)}function Fa(s,e,t){let i=xe[e],r=i.deps,o=i.name,l=s[He];if(l)for(let a=0,n,d;a<r.length;a++)n=r[a],d=l[n],d&&d[o]&&(d[o]=(d[o]||1)-1,d._count=(d._count||1)-1,d._count===0&&s.removeEventListener(n,fr,cr(n)));s.removeEventListener(e,t)}function Xt(s){H.push(s);for(let e=0;e<s.emits.length;e++)xe[s.emits[e]]=s}function Da(s){for(let e=0,t;e<H.length;e++){t=H[e];for(let i=0,r;i<t.emits.length;i++)if(r=t.emits[i],r===s)return t}return null}function _r(s,e){Gt&&s instanceof HTMLElement&&G.run(()=>{s.style.touchAction=e}),s[wt]=e}function Qt(s,e,t){let i=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=t,A(s).dispatchEvent(i),i.defaultPrevented){let r=t.preventer||t.sourceEvent;r&&r.preventDefault&&r.preventDefault()}}function qe(s){let e=Da(s);e.info&&(e.info.prevent=!0)}Xt({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){J(this.info)},mousedown:function(s){if(!U(s))return;let e=R(s),t=this,i=function(l){U(l)||(ae("up",e,l),J(t.info))},r=function(l){U(l)&&ae("up",e,l),J(t.info)};mr(this.info,i,r),ae("down",e,s)},touchstart:function(s){ae("down",R(s),s.changedTouches[0],s)},touchend:function(s){ae("up",R(s),s.changedTouches[0],s)}});function ae(s,e,t,i){!e||Qt(e,s,{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:i,prevent:function(r){return qe(r)}})}Xt({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(s){this.moves.length>ya&&this.moves.shift(),this.moves.push(s)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,J(this.info)},mousedown:function(s){if(!U(s))return;let e=R(s),t=this,i=function(l){let a=l.clientX,n=l.clientY;vi(t.info,a,n)&&(t.info.state=t.info.started?l.type==="mouseup"?"end":"track":"start",t.info.state==="start"&&qe("tap"),t.info.addMove({x:a,y:n}),U(l)||(t.info.state="end",J(t.info)),e&&dt(t.info,e,l),t.info.started=!0)},r=function(l){t.info.started&&i(l),J(t.info)};mr(this.info,i,r),this.info.x=s.clientX,this.info.y=s.clientY},touchstart:function(s){let e=s.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(s){let e=R(s),t=s.changedTouches[0],i=t.clientX,r=t.clientY;vi(this.info,i,r)&&(this.info.state==="start"&&qe("tap"),this.info.addMove({x:i,y:r}),dt(this.info,e,t),this.info.state="track",this.info.started=!0)},touchend:function(s){let e=R(s),t=s.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:t.clientX,y:t.clientY}),dt(this.info,e,t))}});function vi(s,e,t){if(s.prevent)return!1;if(s.started)return!0;let i=Math.abs(s.x-e),r=Math.abs(s.y-t);return i>=fi||r>=fi}function dt(s,e,t){if(!e)return;let i=s.moves[s.moves.length-2],r=s.moves[s.moves.length-1],o=r.x-s.x,l=r.y-s.y,a,n=0;i&&(a=r.x-i.x,n=r.y-i.y),Qt(e,"track",{state:s.state,x:t.clientX,y:t.clientY,dx:o,dy:l,ddx:a,ddy:n,sourceEvent:t,hover:function(){return Oa(t.clientX,t.clientY)}})}Xt({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(s){U(s)&&(this.info.x=s.clientX,this.info.y=s.clientY)},click:function(s){U(s)&&bi(this.info,s)},touchstart:function(s){const e=s.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(s){bi(this.info,s.changedTouches[0],s)}});function bi(s,e,t){let i=Math.abs(e.clientX-s.x),r=Math.abs(e.clientY-s.y),o=R(t||e);!o||Ia[o.localName]&&o.hasAttribute("disabled")||(isNaN(i)||isNaN(r)||i<=mi&&r<=mi||Ta(e))&&(s.prevent||Qt(o,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:t}))}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const gr=ve(s=>{class e extends s{_addEventListenerToNode(i,r,o){za(i,r,o)||super._addEventListenerToNode(i,r,o)}_removeEventListenerFromNode(i,r,o){Ba(i,r,o)||super._removeEventListenerFromNode(i,r,o)}}return e});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Va=/:host\(:dir\((ltr|rtl)\)\)/g,Ra=':host([dir="$1"])',Na=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,$a=':host([dir="$2"]) $1',Ha=/:dir\((?:ltr|rtl)\)/,yi=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),me=[];let fe=null,Zt="";function vr(){Zt=document.documentElement.getAttribute("dir")}function br(s){s.__autoDirOptOut||s.setAttribute("dir",Zt)}function yr(){vr(),Zt=document.documentElement.getAttribute("dir");for(let s=0;s<me.length;s++)br(me[s])}function qa(){fe&&fe.takeRecords().length&&yr()}const Ua=ve(s=>{yi||fe||(vr(),fe=new MutationObserver(yr),fe.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=Qr(s);class t extends e{static _processStyleText(r,o){return r=e._processStyleText.call(this,r,o),!yi&&Ha.test(r)&&(r=this._replaceDirInCssText(r),this.__activateDir=!0),r}static _replaceDirInCssText(r){let o=r;return o=o.replace(Va,Ra),o=o.replace(Na,$a),o}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(qa(),me.push(this),br(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const r=me.indexOf(this);r>-1&&me.splice(r,1)}}}return t.__activateDir=!1,t});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function wi(){document.body.removeAttribute("unresolved")}document.readyState==="interactive"||document.readyState==="complete"?wi():window.addEventListener("DOMContentLoaded",wi);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const j=Element.prototype,Wa=j.matches||j.matchesSelector||j.mozMatchesSelector||j.msMatchesSelector||j.oMatchesSelector||j.webkitMatchesSelector,wr=function(s,e){return Wa.call(s,e)};class x{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new T(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(A(this.node).contains(e))return!0;let t=e,i=e.ownerDocument;for(;t&&t!==i&&t!==this.node;)t=A(t).parentNode||A(t).host;return t===this.node}getOwnerRoot(){return A(this.node).getRootNode()}getDistributedNodes(){return this.node.localName==="slot"?A(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=A(this.node).assignedSlot;for(;t;)e.push(t),t=A(t).assignedSlot;return e}importNode(e,t){let i=this.node instanceof Document?this.node:this.node.ownerDocument;return A(i).importNode(e,t)}getEffectiveChildNodes(){return T.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),i=[];for(let r=0,o=t.length,l;r<o&&(l=t[r]);r++)l.nodeType===Node.ELEMENT_NODE&&wr(l,e)&&i.push(l);return i}get activeElement(){let e=this.node;return e._activeElement!==void 0?e._activeElement:e.activeElement}}function ja(s,e){for(let t=0;t<e.length;t++){let i=e[t];s[i]=function(){return this.node[i].apply(this.node,arguments)}}}function xi(s,e){for(let t=0;t<e.length;t++){let i=e[t];Object.defineProperty(s,i,{get:function(){return this.node[i]},configurable:!0})}}function Ya(s,e){for(let t=0;t<e.length;t++){let i=e[t];Object.defineProperty(s,i,{get:function(){return this.node[i]},set:function(r){this.node[i]=r},configurable:!0})}}class Ct{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}x.prototype.cloneNode;x.prototype.appendChild;x.prototype.insertBefore;x.prototype.removeChild;x.prototype.replaceChild;x.prototype.setAttribute;x.prototype.removeAttribute;x.prototype.querySelector;x.prototype.querySelectorAll;x.prototype.parentNode;x.prototype.firstChild;x.prototype.lastChild;x.prototype.nextSibling;x.prototype.previousSibling;x.prototype.firstElementChild;x.prototype.lastElementChild;x.prototype.nextElementSibling;x.prototype.previousElementSibling;x.prototype.childNodes;x.prototype.children;x.prototype.classList;x.prototype.textContent;x.prototype.innerHTML;let At=x;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class s extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(x.prototype).forEach(e=>{e!="activeElement"&&(s.prototype[e]=x.prototype[e])}),xi(s.prototype,["classList"]),At=s,Object.defineProperties(Ct.prototype,{localTarget:{get(){const e=this.event.currentTarget,t=e&&k(e).getOwnerRoot(),i=this.path;for(let r=0;r<i.length;r++){const o=i[r];if(k(o).getOwnerRoot()===t)return o}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else ja(x.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll","attachShadow"]),xi(x.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList","shadowRoot"]),Ya(x.prototype,["textContent","innerHTML","className"]);const k=function(s){if(s=s||document,s instanceof At||s instanceof Ct)return s;let e=s.__domApi;return e||(s instanceof Event?e=new Ct(s):e=new At(s),s.__domApi=e),e};/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ht=window.ShadyDOM,Ci=window.ShadyCSS;function Ai(s,e){return A(s).getRootNode()===e}function Ga(s,e=!1){if(!ht||!Ci||!ht.handlesDynamicScoping)return null;const t=Ci.ScopingShim;if(!t)return null;const i=t.scopeForNode(s),r=A(s).getRootNode(),o=l=>{if(!Ai(l,r))return;const a=Array.from(ht.nativeMethods.querySelectorAll.call(l,"*"));a.push(l);for(let n=0;n<a.length;n++){const d=a[n];if(!Ai(d,r))continue;const h=t.currentScopeForNode(d);h!==i&&(h!==""&&t.unscopeNode(d,h),t.scopeNode(d,i))}};if(o(s),e){const l=new MutationObserver(a=>{for(let n=0;n<a.length;n++){const d=a[n];for(let h=0;h<d.addedNodes.length;h++){const u=d.addedNodes[h];u.nodeType===Node.ELEMENT_NODE&&o(u)}}});return l.observe(s,{childList:!0,subtree:!0}),l}else return null}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ee="disable-upgrade";let Ka=window.ShadyCSS;const xr=ve(s=>{const e=gr(Us(s)),t=Zr?e:Ua(e),i=eo(t),r={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class o extends t{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(a,n,d){(this.__dataAttributes&&this.__dataAttributes[a]||a===Ee)&&this.attributeChangedCallback(a,n,d,null)}setAttribute(a,n){if(Ae&&!this._legacyForceObservedAttributes){const d=this.getAttribute(a);super.setAttribute(a,n),this.__attributeReaction(a,d,String(n))}else super.setAttribute(a,n)}removeAttribute(a){if(Ae&&!this._legacyForceObservedAttributes){const n=this.getAttribute(a);super.removeAttribute(a),this.__attributeReaction(a,n,null)}else super.removeAttribute(a)}static get observedAttributes(){return Ae&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],to(this.prototype)),this.__observedAttributes):i.call(this).concat(Ee)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(a){return super._canApplyPropertyDefault(a)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(a))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(a,n,d,h){n!==d&&(a==Ee?this.__isUpgradeDisabled&&d==null&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,A(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(a,n,d,h),this.attributeChanged(a,n,d)))}attributeChanged(a,n,d){}_initializeProperties(){if(mt&&this.hasAttribute(Ee))this.__isUpgradeDisabled=!0;else{let a=Object.getPrototypeOf(this);a.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",a))||(this._registered(),a.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),Ae&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const a=this.attributes;for(let n=0,d=a.length;n<d;n++){const h=a[n];this.__attributeReaction(h.name,null,h.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(a){return this._serializeValue(a)}deserialize(a,n){return this._deserializeValue(a,n)}reflectPropertyToAttribute(a,n,d){this._propertyToAttribute(a,n,d)}serializeValueToAttribute(a,n,d){this._valueToNodeAttribute(d||this,a,n)}extend(a,n){if(!(a&&n))return a||n;let d=Object.getOwnPropertyNames(n);for(let h=0,u;h<d.length&&(u=d[h]);h++){let p=Object.getOwnPropertyDescriptor(n,u);p&&Object.defineProperty(a,u,p)}return a}mixin(a,n){for(let d in n)a[d]=n[d];return a}chainObject(a,n){return a&&n&&a!==n&&(a.__proto__=n),a}instanceTemplate(a){let n=this.constructor._contentForTemplate(a);return document.importNode(n,!0)}fire(a,n,d){d=d||{},n=n==null?{}:n;let h=new Event(a,{bubbles:d.bubbles===void 0?!0:d.bubbles,cancelable:Boolean(d.cancelable),composed:d.composed===void 0?!0:d.composed});h.detail=n;let u=d.node||this;return A(u).dispatchEvent(h),h}listen(a,n,d){a=a||this;let h=this.__boundListeners||(this.__boundListeners=new WeakMap),u=h.get(a);u||(u={},h.set(a,u));let p=n+d;u[p]||(u[p]=this._addMethodEventListenerToNode(a,n,d,this))}unlisten(a,n,d){a=a||this;let h=this.__boundListeners&&this.__boundListeners.get(a),u=n+d,p=h&&h[u];p&&(this._removeEventListenerFromNode(a,n,p),h[u]=null)}setScrollDirection(a,n){_r(n||this,r[a]||"auto")}$$(a){return this.root.querySelector(a)}get domHost(){let a=A(this).getRootNode();return a instanceof DocumentFragment?a.host:a}distributeContent(){const n=k(this);window.ShadyDOM&&n.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return k(this).getEffectiveChildNodes()}queryDistributedElements(a){return k(this).queryDistributedElements(a)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(n){return n.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let a=this.getEffectiveChildNodes(),n=[];for(let d=0,h;h=a[d];d++)h.nodeType!==Node.COMMENT_NODE&&n.push(h.textContent);return n.join("")}queryEffectiveChildren(a){let n=this.queryDistributedElements(a);return n&&n[0]}queryAllEffectiveChildren(a){return this.queryDistributedElements(a)}getContentChildNodes(a){let n=this.root.querySelector(a||"slot");return n?k(n).getDistributedNodes():[]}getContentChildren(a){return this.getContentChildNodes(a).filter(function(d){return d.nodeType===Node.ELEMENT_NODE})}isLightDescendant(a){const n=this;return n!==a&&A(n).contains(a)&&A(n).getRootNode()===A(a).getRootNode()}isLocalDescendant(a){return this.root===A(a).getRootNode()}scopeSubtree(a,n=!1){return Ga(a,n)}getComputedStyleValue(a){return Ka.getComputedStyleValue(this,a)}debounce(a,n,d){return this._debouncers=this._debouncers||{},this._debouncers[a]=Z.debounce(this._debouncers[a],d>0?q.after(d):G,n.bind(this))}isDebouncerActive(a){this._debouncers=this._debouncers||{};let n=this._debouncers[a];return!!(n&&n.isActive())}flushDebouncer(a){this._debouncers=this._debouncers||{};let n=this._debouncers[a];n&&n.flush()}cancelDebouncer(a){this._debouncers=this._debouncers||{};let n=this._debouncers[a];n&&n.cancel()}async(a,n){return n>0?q.run(a.bind(this),n):~G.run(a.bind(this))}cancelAsync(a){a<0?G.cancel(~a):q.cancel(a)}create(a,n){let d=document.createElement(a);if(n)if(d.setProperties)d.setProperties(n);else for(let h in n)d[h]=n[h];return d}elementMatches(a,n){return wr(n||this,a)}toggleAttribute(a,n){let d=this;return arguments.length===3&&(d=arguments[2]),arguments.length==1&&(n=!d.hasAttribute(a)),n?(A(d).setAttribute(a,""),!0):(A(d).removeAttribute(a),!1)}toggleClass(a,n,d){d=d||this,arguments.length==1&&(n=!d.classList.contains(a)),n?d.classList.add(a):d.classList.remove(a)}transform(a,n){n=n||this,n.style.webkitTransform=a,n.style.transform=a}translate3d(a,n,d,h){h=h||this,this.transform("translate3d("+a+","+n+","+d+")",h)}arrayDelete(a,n){let d;if(Array.isArray(a)){if(d=a.indexOf(n),d>=0)return a.splice(d,1)}else if(d=io(this,a).indexOf(n),d>=0)return this.splice(a,d,1);return null}_logger(a,n){switch(Array.isArray(n)&&n.length===1&&Array.isArray(n[0])&&(n=n[0]),a){case"log":case"warn":case"error":console[a](...n)}}_log(...a){this._logger("log",a)}_warn(...a){this._logger("warn",a)}_error(...a){this._logger("error",a)}_logf(a,...n){return["[%s::%s]",this.is,a,...n]}}return o.prototype.is="",o});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ja={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},Cr={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},Xa=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},Cr);function Qa(s,e,t){const i=s._noAccessors,r=Object.getOwnPropertyNames(s);for(let o=0;o<r.length;o++){let l=r[o];if(!(l in t))if(i)e[l]=s[l];else{let a=Object.getOwnPropertyDescriptor(s,l);a&&(a.configurable=!0,Object.defineProperty(e,l,a))}}}function Za(s,e,t){for(let i=0;i<e.length;i++)Ar(s,e[i],t,Xa)}function Ar(s,e,t,i){Qa(e,s,i);for(let r in Ja)e[r]&&(t[r]=t[r]||[],t[r].push(e[r]))}function Ir(s,e,t){e=e||[];for(let i=s.length-1;i>=0;i--){let r=s[i];r?Array.isArray(r)?Ir(r,e):e.indexOf(r)<0&&(!t||t.indexOf(r)<0)&&e.unshift(r):console.warn("behavior is null, check for missing or 404 import")}return e}function Ii(s,e){for(const t in e){const i=s[t],r=e[t];!("value"in r)&&i&&"value"in i?s[t]=Object.assign({value:i.value},r):s[t]=r}}const Si=xr(HTMLElement);function en(s,e,t){let i;const r={};class o extends e{static _finalizeClass(){if(!this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this)))e._finalizeClass.call(this);else{if(i)for(let n=0,d;n<i.length;n++)d=i[n],d.properties&&this.createProperties(d.properties),d.observers&&this.createObservers(d.observers,d.properties);s.properties&&this.createProperties(s.properties),s.observers&&this.createObservers(s.observers,s.properties),this._prepareTemplate()}}static get properties(){const n={};if(i)for(let d=0;d<i.length;d++)Ii(n,i[d].properties);return Ii(n,s.properties),n}static get observers(){let n=[];if(i)for(let d=0,h;d<i.length;d++)h=i[d],h.observers&&(n=n.concat(h.observers));return s.observers&&(n=n.concat(s.observers)),n}created(){super.created();const n=r.created;if(n)for(let d=0;d<n.length;d++)n[d].call(this)}_registered(){const n=o.prototype;if(!n.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",n))){n.__hasRegisterFinished=!0,super._registered(),mt&&l(n);const d=Object.getPrototypeOf(this);let h=r.beforeRegister;if(h)for(let u=0;u<h.length;u++)h[u].call(d);if(h=r.registered,h)for(let u=0;u<h.length;u++)h[u].call(d)}}_applyListeners(){super._applyListeners();const n=r.listeners;if(n)for(let d=0;d<n.length;d++){const h=n[d];if(h)for(let u in h)this._addMethodEventListenerToNode(this,u,h[u])}}_ensureAttributes(){const n=r.hostAttributes;if(n)for(let d=n.length-1;d>=0;d--){const h=n[d];for(let u in h)this._ensureAttribute(u,h[u])}super._ensureAttributes()}ready(){super.ready();let n=r.ready;if(n)for(let d=0;d<n.length;d++)n[d].call(this)}attached(){super.attached();let n=r.attached;if(n)for(let d=0;d<n.length;d++)n[d].call(this)}detached(){super.detached();let n=r.detached;if(n)for(let d=0;d<n.length;d++)n[d].call(this)}attributeChanged(n,d,h){super.attributeChanged();let u=r.attributeChanged;if(u)for(let p=0;p<u.length;p++)u[p].call(this,n,d,h)}}if(t){Array.isArray(t)||(t=[t]);let a=e.prototype.behaviors;i=Ir(t,null,a),o.prototype.behaviors=a?a.concat(t):i}const l=a=>{i&&Za(a,i,r),Ar(a,s,r,Cr)};return mt||l(o.prototype),o.generatedFrom=s,o}const tn=function(s,e){s||console.warn("Polymer.Class requires `info` argument");let t=e?e(Si):Si;return t=en(s,t,s.behaviors),t.is=t.prototype.is=s.is,t};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ce=function(s){let e;return typeof s=="function"?e=s:e=Ce.Class(s),s._legacyForceObservedAttributes&&(e.prototype._legacyForceObservedAttributes=s._legacyForceObservedAttributes),customElements.define(e.is,e),e};Ce.Class=tn;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const sn={templatize(s,e){this._templatizerTemplate=s,this.ctor=so(s,this,{mutableData:Boolean(e),parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},stamp(s){return new this.ctor(s)},modelForElement(s){return ro(this._templatizerTemplate,s)}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const rn=gr(oo(ao(HTMLElement)));class on extends rn{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),no)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,t,i,r){this.mutableData=!0}connectedCallback(){lo()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){A(A(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver(()=>{if(e=this.querySelector("template"),e)t.disconnect(),this.render();else throw new Error("dom-bind requires a <template> child")});t.observe(this,{childList:!0});return}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)this.__children[this.__children.length]=t;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}customElements.define("dom-bind",on);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let an=ve(s=>{let e=Us(s);class t extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(r,o){let l=o.path;if(l==JSCompiler_renameProperty("items",this)){let a=o.base||[],n=this.__lastItems,d=this.__lastMulti;if(r!==d&&this.clearSelection(),n){let h=Mt(a,n);this.__applySplices(h)}this.__lastItems=a,this.__lastMulti=r}else if(o.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(o.value.indexSplices);else{let a=l.slice(`${JSCompiler_renameProperty("items",this)}.`.length),n=parseInt(a,10);a.indexOf(".")<0&&a==n&&this.__deselectChangedIdx(n)}}__applySplices(r){let o=this.__selectedMap;for(let a=0;a<r.length;a++){let n=r[a];o.forEach((d,h)=>{d<n.index||(d>=n.index+n.removed.length?o.set(h,d+n.addedCount-n.removed.length):o.set(h,-1))});for(let d=0;d<n.addedCount;d++){let h=n.index+d;o.has(this.items[h])&&o.set(this.items[h],h)}}this.__updateLinks();let l=0;o.forEach((a,n)=>{a<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),l,1):this.selected=this.selectedItem=null,o.delete(n)):l++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let r=0;this.__selectedMap.forEach(o=>{o>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${o}`,`${JSCompiler_renameProperty("selected",this)}.${r++}`)})}else this.__selectedMap.forEach(r=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${r}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${r}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(r){return this.__selectedMap.has(r)}isIndexSelected(r){return this.isSelected(this.items[r])}__deselectChangedIdx(r){let o=this.__selectedIndexForItemIndex(r);if(o>=0){let l=0;this.__selectedMap.forEach((a,n)=>{o==l++&&this.deselect(n)})}}__selectedIndexForItemIndex(r){let o=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${r}`];if(o)return parseInt(o.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(r){let o=this.__selectedMap.get(r);if(o>=0){this.__selectedMap.delete(r);let l;this.multi&&(l=this.__selectedIndexForItemIndex(o)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),l,1):this.selected=this.selectedItem=null}}deselectIndex(r){this.deselect(this.items[r])}select(r){this.selectIndex(this.items.indexOf(r))}selectIndex(r){let o=this.items[r];this.isSelected(o)?this.toggle&&this.deselectIndex(r):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(o,r),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),o):this.selected=this.selectedItem=o)}}return t}),nn=an(g);class Ei extends nn{static get is(){return"array-selector"}static get template(){return null}}customElements.define(Ei.is,Ei);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Be=new N;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(s,e,t){},prepareTemplateDom(s,e){},prepareTemplateStyles(s,e,t){},styleSubtree(s,e){Be.processStyles(),vt(s,e)},styleElement(s){Be.processStyles()},styleDocument(s){Be.processStyles(),vt(document.body,s)},getComputedStyleValue(s,e){return dr(s,e)},flushCustomStyles(){},nativeCss:Yt,nativeShadow:it,cssBuild:_e,disableRuntime:er});window.ShadyCSS.CustomStyleInterface=Be;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ki="include",ln=window.ShadyCSS.CustomStyleInterface;class dn extends HTMLElement{constructor(){super(),this._style=null,ln.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute(ki);return t&&(e.removeAttribute(ki),e.textContent=ho(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",dn);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Sr;Sr=uo._mutablePropertyChange;const hn={properties:{mutableData:Boolean},_shouldPropertyChange(s,e,t){return Sr(this,s,e,t,this.mutableData)}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const un=xr(HTMLElement).prototype;/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Er=_`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;Er.setAttribute("style","display: none;");document.head.appendChild(Er.content);var kr=document.createElement("style");kr.textContent="[hidden] { display: none !important; }";document.head.appendChild(kr);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class L{constructor(e){L[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,t=this.key;if(e&&t)return L.types[e]&&L.types[e][t]}set value(e){var t=this.type,i=this.key;t&&i&&(t=L.types[t]=L.types[t]||{},e==null?delete t[i]:t[i]=e)}get list(){var e=this.type;if(e){var t=L.types[this.type];return t?Object.keys(t).map(function(i){return cn[this.type][i]},this):[]}}byKey(e){return this.key=e,this.value}}L[" "]=function(){};L.types={};var cn=L.types;Ce({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(s,e,t){var i=new L({type:s,key:e});return t!==void 0&&t!==i.value?i.value=t:this.value!==i.value&&(this.value=i.value),i},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(s){s&&(this.value=this)},byKey:function(s){return new L({type:this.type,key:s}).value}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Ce({_template:_`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:un.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(s){var e=(s||"").split(":");this._iconName=e.pop(),this._iconsetName=e.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(s){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&k(this.root).removeChild(this._img),this._iconName===""?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,k(this.root).appendChild(this._img))}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var ke=new Set;const pn={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(ke.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){!this.isAttached||(this._interestedResizables.forEach(function(s){this.resizerShouldNotify(s)&&this._notifyDescendant(s)},this),this._fireResize())},assignParentResizable:function(s){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=s,s&&s._interestedResizables.indexOf(this)===-1&&(s._interestedResizables.push(this),s._subscribeIronResize(this))},stopResizeNotificationsFor:function(s){var e=this._interestedResizables.indexOf(s);e>-1&&(this._interestedResizables.splice(e,1),this._unsubscribeIronResize(s))},_subscribeIronResize:function(s){s.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(s){s.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(s){return!0},_onDescendantIronResize:function(s){if(this._notifyingDescendant){s.stopPropagation();return}co||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(s){var e=k(s).rootTarget;e!==this&&(e.assignParentResizable(this),this._notifyDescendant(e),s.stopPropagation())},_parentResizableChanged:function(s){s&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(s){!this.isAttached||(this._notifyingDescendant=!0,s.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(!!this.isAttached)if(document.readyState==="loading"){var s=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function e(){document.removeEventListener("readystatechange",e),s()})}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach(function(e){e!==this&&e._findParent()},this):(ke.forEach(function(e){e!==this&&e._findParent()},this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?ke.delete(this):ke.add(this)}};/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const mn={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(s,e){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),!!e)if(s==="document")this.scrollTarget=this._doc;else if(typeof s=="string"){var t=this.domHost;this.scrollTarget=t&&t.$?t.$[s]:k(this.ownerDocument).querySelector("#"+s)}else this._isValidScrollTarget()&&(this._oldScrollTarget=s,this._toggleScrollListener(this._shouldHaveListener,s))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(s){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,s):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=s)},set _scrollLeft(s){this.scrollTarget===this._doc?window.scrollTo(s,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=s)},scroll:function(s,e){var t;typeof s=="object"?(t=s.left,e=s.top):t=s,t=t||0,e=e||0,this.scrollTarget===this._doc?window.scrollTo(t,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=t,this.scrollTarget.scrollTop=e)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(s,e){var t=e===this._doc?window:e;s?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),t.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(t.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(s){this._shouldHaveListener=s,this._toggleScrollListener(s,this.scrollTarget)}};/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var Ti=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),fn=Ti&&Ti[1]>=8,Pi=3,Oi="-10000px",ne=-100;Ce({_template:_`
    <style>
      :host {
        display: block;
      }

      @media only screen and (-webkit-max-device-pixel-ratio: 1) {
        :host {
          will-change: transform;
        }
      }

      #items {
        @apply --iron-list-items-container;
        position: relative;
      }

      :host(:not([grid])) #items > ::slotted(*) {
        width: 100%;
      }

      #items > ::slotted(*) {
        box-sizing: border-box;
        margin: 0;
        position: absolute;
        top: 0;
        will-change: transform;
      }
    </style>

    <array-selector id="selector" items="{{items}}" selected="{{selectedItems}}" selected-item="{{selectedItem}}"></array-selector>

    <div id="items">
      <slot></slot>
    </div>
`,is:"iron-list",properties:{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},selectedAs:{type:String,value:"selected"},grid:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_gridChanged"},selectionEnabled:{type:Boolean,value:!1},selectedItem:{type:Object,notify:!0},selectedItems:{type:Object,notify:!0},multiSelection:{type:Boolean,value:!1},scrollOffset:{type:Number,value:0}},observers:["_itemsChanged(items.*)","_selectionEnabledChanged(selectionEnabled)","_multiSelectionChanged(multiSelection)","_setOverflow(scrollTarget, scrollOffset)"],behaviors:[sn,pn,mn,hn],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedItem:null,_focusedVirtualIndex:-1,_focusedPhysicalIndex:-1,_offscreenFocusedItem:null,_focusBackfillItem:null,_itemsPerRow:1,_itemWidth:0,_rowHeight:0,_templateCost:0,_parentModel:!0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){var s=this.grid?this._physicalRows*this._rowHeight:this._physicalSize;return s-this._viewportHeight},get _itemsParent(){return k(k(this._userTemplate).parentNode)},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var s=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,s-this._physicalCount)},set _virtualStart(s){s=this._clamp(s,0,this._maxVirtualStart),this.grid&&(s=s-s%this._itemsPerRow),this._virtualStartVal=s},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(s){s=s%this._physicalCount,s<0&&(s=this._physicalCount+s),this.grid&&(s=s-s%this._itemsPerRow),this._physicalStartVal=s},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(s){this._physicalCountVal=s},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return this._viewportHeight===0?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var s=this._firstVisibleIndexVal;if(s==null){var e=this._physicalTop+this._scrollOffset;s=this._iterateItems(function(t,i){if(e+=this._getPhysicalSizeIncrement(t),e>this._scrollPosition)return this.grid?i-i%this._itemsPerRow:i;if(this.grid&&this._virtualCount-1===i)return i-i%this._itemsPerRow})||0,this._firstVisibleIndexVal=s}return s},get lastVisibleIndex(){var s=this._lastVisibleIndexVal;if(s==null){if(this.grid)s=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1);else{var e=this._physicalTop+this._scrollOffset;this._iterateItems(function(t,i){e<this._scrollBottom&&(s=i),e+=this._getPhysicalSizeIncrement(t)})}this._lastVisibleIndexVal=s}return s},get _defaultScrollTarget(){return this},get _virtualRowCount(){return Math.ceil(this._virtualCount/this._itemsPerRow)},get _estRowsInView(){return Math.ceil(this._viewportHeight/this._rowHeight)},get _physicalRows(){return Math.ceil(this._physicalCount/this._itemsPerRow)},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},ready:function(){this.addEventListener("focus",this._didFocus.bind(this),!0)},attached:function(){this._debounce("_render",this._render,oe),this.listen(this,"iron-resize","_resizeHandler"),this.listen(this,"keydown","_keydownHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler"),this.unlisten(this,"keydown","_keydownHandler")},_setOverflow:function(s){this.style.webkitOverflowScrolling=s===this?"touch":"",this.style.overflowY=s===this?"auto":"",this._lastVisibleIndexVal=null,this._firstVisibleIndexVal=null,this._debounce("_render",this._render,oe)},updateViewportBoundaries:function(){var s=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(s["padding-top"],10),this._isRTL=Boolean(s.direction==="rtl"),this._viewportWidth=this.$.items.offsetWidth,this._viewportHeight=this._scrollTargetHeight,this.grid&&this._updateGridMetrics()},_scrollHandler:function(){var s=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),e=s-this._scrollPosition,t=e>=0;if(this._scrollPosition=s,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(e)>this._physicalSize&&this._physicalSize>0){e=e-this._scrollOffset;var i=Math.round(e/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+i,this._physicalStart=this._physicalStart+i,this._physicalTop=Math.min(Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){var r=this._getReusables(t);t?(this._physicalTop=r.physicalTop,this._virtualStart=this._virtualStart+r.indexes.length,this._physicalStart=this._physicalStart+r.indexes.length):(this._virtualStart=this._virtualStart-r.indexes.length,this._physicalStart=this._physicalStart-r.indexes.length),this._update(r.indexes,t?null:r.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),G)}},_getReusables:function(s){var e,t,i,r=[],o=this._hiddenContentSize*this._ratio,l=this._virtualStart,a=this._virtualEnd,n=this._physicalCount,d=this._physicalTop+this._scrollOffset,h=this._physicalBottom+this._scrollOffset,u=this._scrollPosition,p=this._scrollBottom;for(s?(e=this._physicalStart,this._physicalEnd,t=u-d):(e=this._physicalEnd,this._physicalStart,t=h-p);i=this._getPhysicalSizeIncrement(e),t=t-i,!(r.length>=n||t<=o);)if(s){if(a+r.length+1>=this._virtualCount||d+i>=u-this._scrollOffset)break;r.push(e),d=d+i,e=(e+1)%n}else{if(l-r.length<=0||d+this._physicalSize-i<=p)break;r.push(e),d=d-i,e=e===0?n-1:e-1}return{indexes:r,physicalTop:d-this._scrollOffset}},_update:function(s,e){if(!(s&&s.length===0||this._physicalCount===0)){if(this._manageFocus(),this._assignModels(s),this._updateMetrics(s),e)for(;e.length;){var t=e.pop();this._physicalTop-=this._getPhysicalSizeIncrement(t)}this._positionItems(),this._updateScrollerSize()}},_createPool:function(s){this._ensureTemplatized();var e,t,i=new Array(s);for(e=0;e<s;e++)t=this.stamp(null),i[e]=t.root.querySelector("*"),this._itemsParent.appendChild(t.root);return i},_isClientFull:function(){return this._scrollBottom!=0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(s){var e=this._clamp(this._physicalCount+s,Pi,this._virtualCount-this._virtualStart);if(e=this._convertIndexToCompleteRow(e),this.grid){var t=e%this._itemsPerRow;t&&e-t<=this._physicalCount&&(e+=this._itemsPerRow),e-=t}var i=e-this._physicalCount,r=Math.round(this._physicalCount*.5);if(!(i<0)){if(i>0){var o=window.performance.now();[].push.apply(this._physicalItems,this._createPool(i));for(var l=0;l<i;l++)this._physicalSizes.push(0);this._physicalCount=this._physicalCount+i,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart=this._physicalStart+i),this._update(),this._templateCost=(window.performance.now()-o)/i,r=Math.round(this._physicalCount*.5)}this._virtualEnd>=this._virtualCount-1||r===0||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,r)),po):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,r),G))}},_render:function(){if(!(!this.isAttached||!this._isVisible))if(this._physicalCount!==0){var s=this._getReusables(!0);this._physicalTop=s.physicalTop,this._virtualStart=this._virtualStart+s.indexes.length,this._physicalStart=this._physicalStart+s.indexes.length,this._update(s.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(Pi))},_ensureTemplatized:function(){if(!this.ctor){this._userTemplate=this.queryEffectiveChildren("template"),this._userTemplate||console.warn("iron-list requires a template to be provided in light-dom");var s={};s.__key__=!0,s[this.as]=!0,s[this.indexAs]=!0,s[this.selectedAs]=!0,s.tabIndex=!0,this._instanceProps=s,this.templatize(this._userTemplate,this.mutableData)}},_gridChanged:function(s,e){typeof e>"u"||(this.notifyResize(),rt(),s&&this._updateGridMetrics())},_itemsChanged:function(s){if(s.path==="items")this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._removeFocusedItem(),this._debounce("_render",this._render,oe);else if(s.path==="items.splices"){this._adjustVirtualIndex(s.value.indexSplices),this._virtualCount=this.items?this.items.length:0;var e=s.value.indexSplices.some(function(r){return r.addedCount>0||r.removed.length>0});if(e){var t=this._getActiveElement();this.contains(t)&&t.blur()}var i=s.value.indexSplices.some(function(r){return r.index+r.addedCount>=this._virtualStart&&r.index<=this._virtualEnd},this);(!this._isClientFull()||i)&&this._debounce("_render",this._render,oe)}else s.path!=="items.length"&&this._forwardItemPath(s.path,s.value)},_forwardItemPath:function(s,e){s=s.slice(6);var t=s.indexOf(".");t===-1&&(t=s.length);var i,r,o,l=this.modelForElement(this._offscreenFocusedItem),a=parseInt(s.substring(0,t),10);i=this._isIndexRendered(a),i?(r=this._getPhysicalIndex(a),o=this.modelForElement(this._physicalItems[r])):l&&(o=l),!(!o||o[this.indexAs]!==a)&&(s=s.substring(t+1),s=this.as+(s?"."+s:""),o._setPendingPropertyOrPath(s,e,!1,!0),o._flushProperties&&o._flushProperties(),i&&(this._updateMetrics([r]),this._positionItems(),this._updateScrollerSize()))},_adjustVirtualIndex:function(s){s.forEach(function(e){if(e.removed.forEach(this._removeItem,this),e.index<this._virtualStart){var t=Math.max(e.addedCount-e.removed.length,e.index-this._virtualStart);this._virtualStart=this._virtualStart+t,this._focusedVirtualIndex>=0&&(this._focusedVirtualIndex=this._focusedVirtualIndex+t)}},this)},_removeItem:function(s){this.$.selector.deselect(s),this._focusedItem&&this.modelForElement(this._focusedItem)[this.as]===s&&this._removeFocusedItem()},_iterateItems:function(s,e){var t,i,r,o;if(arguments.length===2&&e){for(o=0;o<e.length;o++)if(t=e[o],i=this._computeVidx(t),(r=s.call(this,t,i))!=null)return r}else{for(t=this._physicalStart,i=this._virtualStart;t<this._physicalCount;t++,i++)if((r=s.call(this,t,i))!=null)return r;for(t=0;t<this._physicalStart;t++,i++)if((r=s.call(this,t,i))!=null)return r}},_computeVidx:function(s){return s>=this._physicalStart?this._virtualStart+(s-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+s},_assignModels:function(s){this._iterateItems(function(e,t){var i=this._physicalItems[e],r=this.items&&this.items[t];if(r!=null){var o=this.modelForElement(i);o.__key__=null,this._forwardProperty(o,this.as,r),this._forwardProperty(o,this.selectedAs,this.$.selector.isSelected(r)),this._forwardProperty(o,this.indexAs,t),this._forwardProperty(o,"tabIndex",this._focusedVirtualIndex===t?0:-1),this._physicalIndexForKey[o.__key__]=e,o._flushProperties&&o._flushProperties(!0),i.removeAttribute("hidden")}else i.setAttribute("hidden","")},s)},_updateMetrics:function(s){rt();var e=0,t=0,i=this._physicalAverageCount,r=this._physicalAverage;this._iterateItems(function(o,l){t+=this._physicalSizes[o],this._physicalSizes[o]=this._physicalItems[o].offsetHeight,e+=this._physicalSizes[o],this._physicalAverageCount+=this._physicalSizes[o]?1:0},s),this.grid?(this._updateGridMetrics(),this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight):(t=this._itemsPerRow===1?t:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight,this._physicalSize=this._physicalSize+e-t,this._itemsPerRow=1),this._physicalAverageCount!==i&&(this._physicalAverage=Math.round((r*i+e)/this._physicalAverageCount))},_updateGridMetrics:function(){this._itemWidth=this._physicalCount>0?this._physicalItems[0].getBoundingClientRect().width:200,this._rowHeight=this._physicalCount>0?this._physicalItems[0].offsetHeight:200,this._itemsPerRow=this._itemWidth?Math.floor(this._viewportWidth/this._itemWidth):this._itemsPerRow},_positionItems:function(){this._adjustScrollPosition();var s=this._physicalTop;if(this.grid){var e=this._itemsPerRow*this._itemWidth,t=(this._viewportWidth-e)/2;this._iterateItems(function(i,r){var o=r%this._itemsPerRow,l=Math.floor(o*this._itemWidth+t);this._isRTL&&(l=l*-1),this.translate3d(l+"px",s+"px",0,this._physicalItems[i]),this._shouldRenderNextRow(r)&&(s+=this._rowHeight)})}else{const i=[];this._iterateItems(function(r,o){const l=this._physicalItems[r];this.translate3d(0,s+"px",0,l),s+=this._physicalSizes[r];const a=l.id;a&&i.push(a)}),i.length&&this.setAttribute("aria-owns",i.join(" "))}},_getPhysicalSizeIncrement:function(s){return this.grid?this._computeVidx(s)%this._itemsPerRow!==this._itemsPerRow-1?0:this._rowHeight:this._physicalSizes[s]},_shouldRenderNextRow:function(s){return s%this._itemsPerRow===this._itemsPerRow-1},_adjustScrollPosition:function(){var s=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(s!==0){this._physicalTop=this._physicalTop-s;var e=this._scrollPosition;!fn&&e>0&&this._resetScrollPosition(e-s)}},_resetScrollPosition:function(s){this.scrollTarget&&s>=0&&(this._scrollTop=s,this._scrollPosition=this._scrollTop)},_updateScrollerSize:function(s){this.grid?this._estScrollHeight=this._virtualRowCount*this._rowHeight:this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,s=s||this._scrollHeight===0,s=s||this._scrollPosition>=this._estScrollHeight-this._physicalSize,s=s||this.grid&&this.$.items.style.height<this._estScrollHeight,(s||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight)},scrollToItem:function(s){return this.scrollToIndex(this.items.indexOf(s))},scrollToIndex:function(s){if(!(typeof s!="number"||s<0||s>this.items.length-1)&&(rt(),this._physicalCount!==0)){s=this._clamp(s,0,this._virtualCount-1),(!this._isIndexRendered(s)||s>=this._maxVirtualStart)&&(this._virtualStart=this.grid?s-this._itemsPerRow*2:s-1),this._manageFocus(),this._assignModels(),this._updateMetrics(),this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;for(var e=this._physicalStart,t=this._virtualStart,i=0,r=this._hiddenContentSize;t<s&&i<=r;)i=i+this._getPhysicalSizeIncrement(e),e=(e+1)%this._physicalCount,t++;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+i),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null}},_resetAverage:function(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",function(){this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},oe)},selectItem:function(s){return this.selectIndex(this.items.indexOf(s))},selectIndex:function(s){if(!(s<0||s>=this._virtualCount)){if(!this.multiSelection&&this.selectedItem&&this.clearSelection(),this._isIndexRendered(s)){var e=this.modelForElement(this._physicalItems[this._getPhysicalIndex(s)]);e&&(e[this.selectedAs]=!0),this.updateSizeForIndex(s)}this.$.selector.selectIndex(s)}},deselectItem:function(s){return this.deselectIndex(this.items.indexOf(s))},deselectIndex:function(s){if(!(s<0||s>=this._virtualCount)){if(this._isIndexRendered(s)){var e=this.modelForElement(this._physicalItems[this._getPhysicalIndex(s)]);e[this.selectedAs]=!1,this.updateSizeForIndex(s)}this.$.selector.deselectIndex(s)}},toggleSelectionForItem:function(s){return this.toggleSelectionForIndex(this.items.indexOf(s))},toggleSelectionForIndex:function(s){var e=this.$.selector.isIndexSelected?this.$.selector.isIndexSelected(s):this.$.selector.isSelected(this.items[s]);e?this.deselectIndex(s):this.selectIndex(s)},clearSelection:function(){this._iterateItems(function(s,e){this.modelForElement(this._physicalItems[s])[this.selectedAs]=!1}),this.$.selector.clearSelection()},_selectionEnabledChanged:function(s){var e=s?this.listen:this.unlisten;e.call(this,this,"tap","_selectionHandler")},_selectionHandler:function(s){var e=this.modelForElement(s.target);if(!!e){var t,i,r=k(s).path[0],o=this._getActiveElement(),l=this._physicalItems[this._getPhysicalIndex(e[this.indexAs])];r.localName==="input"||r.localName==="button"||r.localName==="select"||(t=e.tabIndex,e.tabIndex=ne,i=o?o.tabIndex:-1,e.tabIndex=t,!(o&&l!==o&&l.contains(o)&&i!==ne)&&this.toggleSelectionForItem(e[this.as]))}},_multiSelectionChanged:function(s){this.clearSelection(),this.$.selector.multi=s},updateSizeForItem:function(s){return this.updateSizeForIndex(this.items.indexOf(s))},updateSizeForIndex:function(s){return this._isIndexRendered(s)&&(this._updateMetrics([this._getPhysicalIndex(s)]),this._positionItems()),null},_manageFocus:function(){var s=this._focusedVirtualIndex;s>=0&&s<this._virtualCount?this._isIndexRendered(s)?this._restoreFocusedItem():this._createFocusBackfillItem():this._virtualCount>0&&this._physicalCount>0&&(this._focusedPhysicalIndex=this._physicalStart,this._focusedVirtualIndex=this._virtualStart,this._focusedItem=this._physicalItems[this._physicalStart])},_convertIndexToCompleteRow:function(s){return this._itemsPerRow=this._itemsPerRow||1,this.grid?Math.ceil(s/this._itemsPerRow)*this._itemsPerRow:s},_isIndexRendered:function(s){return s>=this._virtualStart&&s<=this._virtualEnd},_isIndexVisible:function(s){return s>=this.firstVisibleIndex&&s<=this.lastVisibleIndex},_getPhysicalIndex:function(s){return(this._physicalStart+(s-this._virtualStart))%this._physicalCount},focusItem:function(s){this._focusPhysicalItem(s)},_focusPhysicalItem:function(s){if(!(s<0||s>=this._virtualCount)){this._restoreFocusedItem(),this._isIndexRendered(s)||this.scrollToIndex(s);var e=this._physicalItems[this._getPhysicalIndex(s)],t=this.modelForElement(e),i;t.tabIndex=ne,e.tabIndex===ne&&(i=e),i||(i=k(e).querySelector('[tabindex="'+ne+'"]')),t.tabIndex=0,this._focusedVirtualIndex=s,i&&i.focus()}},_removeFocusedItem:function(){this._offscreenFocusedItem&&this._itemsParent.removeChild(this._offscreenFocusedItem),this._offscreenFocusedItem=null,this._focusBackfillItem=null,this._focusedItem=null,this._focusedVirtualIndex=-1,this._focusedPhysicalIndex=-1},_createFocusBackfillItem:function(){var s=this._focusedPhysicalIndex;if(!(this._offscreenFocusedItem||this._focusedVirtualIndex<0)){if(!this._focusBackfillItem){var e=this.stamp(null);this._focusBackfillItem=e.root.querySelector("*"),this._itemsParent.appendChild(e.root)}this._offscreenFocusedItem=this._physicalItems[s],this.modelForElement(this._offscreenFocusedItem).tabIndex=0,this._physicalItems[s]=this._focusBackfillItem,this._focusedPhysicalIndex=s,this.translate3d(0,Oi,0,this._offscreenFocusedItem)}},_restoreFocusedItem:function(){if(!(!this._offscreenFocusedItem||this._focusedVirtualIndex<0)){this._assignModels();var s=this._focusedPhysicalIndex=this._getPhysicalIndex(this._focusedVirtualIndex),e=this._physicalItems[s];if(!!e){var t=this.modelForElement(e),i=this.modelForElement(this._offscreenFocusedItem);t[this.as]===i[this.as]?(this._focusBackfillItem=e,t.tabIndex=-1,this._physicalItems[s]=this._offscreenFocusedItem,this.translate3d(0,Oi,0,this._focusBackfillItem)):(this._removeFocusedItem(),this._focusBackfillItem=null),this._offscreenFocusedItem=null}}},_didFocus:function(s){var e=this.modelForElement(s.target),t=this.modelForElement(this._focusedItem),i=this._offscreenFocusedItem!==null,r=this._focusedVirtualIndex;!e||(t===e?this._isIndexVisible(r)||this.scrollToIndex(r):(this._restoreFocusedItem(),t&&(t.tabIndex=-1),e.tabIndex=0,r=e[this.indexAs],this._focusedVirtualIndex=r,this._focusedPhysicalIndex=this._getPhysicalIndex(r),this._focusedItem=this._physicalItems[this._focusedPhysicalIndex],i&&!this._offscreenFocusedItem&&this._update()))},_keydownHandler:function(s){switch(s.keyCode){case 40:this._focusedVirtualIndex<this._virtualCount-1&&s.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex+(this.grid?this._itemsPerRow:1));break;case 39:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?-1:1));break;case 38:this._focusedVirtualIndex>0&&s.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex-(this.grid?this._itemsPerRow:1));break;case 37:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?1:-1));break;case 13:this._focusPhysicalItem(this._focusedVirtualIndex),this.selectionEnabled&&this._selectionHandler(s);break}},_clamp:function(s,e,t){return Math.min(t,Math.max(e,s))},_debounce:function(s,e,t){this._debouncers=this._debouncers||{},this._debouncers[s]=Z.debounce(this._debouncers[s],t,e.bind(this)),mo(this._debouncers[s])},_forwardProperty:function(s,e,t){s._setPendingProperty(e,t)},_forwardHostPropV2:function(s,e){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(t){t&&this.modelForElement(t).forwardHostProp(s,e)},this)},_notifyInstancePropV2:function(s,e,t){if(fo(this.as,e)){var i=s[this.indexAs];e==this.as&&(this.items[i]=t),this.notifyPath(_o(this.as,"items."+i,e),t)}},_getStampedChildren:function(){return this._physicalItems},_forwardInstancePath:function(s,e,t){e.indexOf(this.as+".")===0&&this.notifyPath("items."+s.__key__+"."+e.slice(this.as.length+1),t)},_forwardParentPath:function(s,e){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(t){t&&this.modelForElement(t).notifyPath(s,e)},this)},_forwardParentProp:function(s,e){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(t){t&&(this.modelForElement(t)[s]=e)},this)},_getActiveElement:function(){var s=this._itemsParent.node.domHost;return k(s?s.root:document).activeElement}});const Tr=m`
  :host {
    margin: var(--lumo-space-xs) 0;
    outline: none;
  }

  [part='summary'] {
    display: flex;
    align-items: center;
    width: 100%;
    outline: none;
    padding: var(--lumo-space-s) 0;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-secondary-text-color);
    background-color: inherit;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host([focus-ring]) [part='summary'] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part='toggle'] {
    display: block;
    width: 1em;
    height: 1em;
    margin-left: calc(var(--lumo-space-xs) * -1);
    margin-right: var(--lumo-space-xs);
    font-size: var(--lumo-icon-size-s);
    line-height: 1;
    color: var(--lumo-contrast-60pct);
    font-family: 'lumo-icons';
    cursor: var(--lumo-clickable-cursor);
  }

  :host([disabled]) [part='summary'],
  :host([disabled]) [part='toggle'] {
    color: var(--lumo-disabled-text-color);
    cursor: default;
  }

  @media (hover: hover) {
    :host(:not([disabled])) [part='summary']:hover,
    :host(:not([disabled])) [part='summary']:hover [part='toggle'] {
      color: var(--lumo-contrast-80pct);
    }
  }

  [part='toggle']::before {
    content: var(--lumo-icons-angle-right);
  }

  :host([opened]) [part='toggle'] {
    transform: rotate(90deg);
  }

  [part='content'] {
    padding: var(--lumo-space-xs) 0 var(--lumo-space-s);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
  }

  :host([theme~='filled']) {
    background-color: var(--lumo-contrast-5pct);
    border-radius: var(--lumo-border-radius-m);
  }

  :host([theme~='filled']) [part='summary'] {
    padding: var(--lumo-space-s) calc(var(--lumo-space-s) + var(--lumo-space-xs) / 2);
  }

  :host([theme~='filled']) [part='content'] {
    padding-left: var(--lumo-space-m);
    padding-right: var(--lumo-space-m);
  }

  :host([theme~='small']) [part='summary'] {
    padding-top: var(--lumo-space-xs);
    padding-bottom: var(--lumo-space-xs);
  }

  :host([theme~='small']) [part='toggle'] {
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([theme~='small']) [part\$='content'] {
    font-size: var(--lumo-font-size-s);
  }

  :host([theme~='reverse']) [part='summary'] {
    justify-content: space-between;
  }

  :host([theme~='reverse']) [part='toggle'] {
    order: 1;
    margin-right: 0;
  }

  :host([theme~='reverse'][theme~='filled']) [part='summary'] {
    padding-left: var(--lumo-space-m);
  }

  /* RTL specific styles */
  :host([dir='rtl']) [part='toggle'] {
    margin-left: var(--lumo-space-xs);
    margin-right: calc(var(--lumo-space-xs) * -1);
  }

  :host([dir='rtl']) [part='toggle']::before {
    content: var(--lumo-icons-angle-left);
  }

  :host([opened][dir='rtl']) [part='toggle'] {
    transform: rotate(-90deg);
  }

  :host([theme~='small'][dir='rtl']) [part='toggle'] {
    margin-left: calc(var(--lumo-space-xs) / 2);
  }

  :host([theme~='reverse'][dir='rtl']) [part='toggle'] {
    margin-left: 0;
  }

  :host([theme~='reverse'][theme~='filled'][dir='rtl']) [part='summary'] {
    padding-right: var(--lumo-space-m);
  }
`;c("vaadin-details",Tr,{moduleId:"lumo-details"});const _n=m`
  :host {
    margin: 0;
    border-bottom: solid 1px var(--lumo-contrast-10pct);
  }

  :host(:last-child) {
    border-bottom: none;
  }

  :host([theme~='filled']) {
    border-bottom: none;
  }

  :host([theme~='filled']:not(:last-child)) {
    margin-bottom: 2px;
  }
`;c("vaadin-accordion-panel",[Tr,_n],{moduleId:"lumo-accordion-panel"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gn=s=>class extends Ws(Ft(s)){static get properties(){return{tabindex:{type:Number,value:0}}}_onKeyDown(t){super._onKeyDown(t),!t.defaultPrevented&&t.keyCode===9&&t.shiftKey&&HTMLElement.prototype.focus.apply(this)}_shouldSetFocus(t){if(!this.disabled&&this.focusElement){const i=t.composedPath();if(i[0]===this&&this._keyboardActive&&this.focusElement.focus(),i[0]===this||i.includes(this.focusElement))return!0}return!1}_tabindexChanged(t){t!==void 0&&(this.focusElement.tabIndex=t),this.disabled&&t&&(t!==-1&&(this._lastTabIndex=t),this.tabindex=void 0)}};/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class It extends gn(w(v(z(g)))){static get template(){return _`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='content'] {
          display: none;
          overflow: hidden;
        }

        [part='summary'][disabled] {
          pointer-events: none;
        }

        :host([opened]) [part='content'] {
          display: block;
          overflow: visible;
        }
      </style>
      <div role="heading">
        <div
          role="button"
          part="summary"
          on-click="_onToggleClick"
          on-keydown="_onToggleKeyDown"
          disabled$="[[disabled]]"
          aria-expanded$="[[_getAriaExpanded(opened)]]"
          aria-controls$="[[_contentId]]"
        >
          <span part="toggle" aria-hidden="true"></span>
          <span part="summary-content"><slot name="summary"></slot></span>
        </div>
        <slot name="tooltip"></slot>
      </div>
      <section id$="[[_contentId]]" part="content" aria-hidden$="[[_getAriaHidden(opened)]]">
        <slot></slot>
      </section>
    `}static get is(){return"vaadin-details"}static get properties(){return{opened:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"}}}get _collapsible(){return this.shadowRoot.querySelector('[part="content"]')}get focusElement(){return this.shadowRoot.querySelector('[part="summary"]')}ready(){super.ready(),this._contentId=`${this.constructor.is}-content-${be()}`,this._collapsible.addEventListener("keydown",e=>{e.shiftKey&&e.keyCode===9&&e.stopPropagation()}),this._tooltipController=new O(this),this.addController(this._tooltipController),this._tooltipController.setTarget(this.focusElement),this._tooltipController.setPosition("bottom-start")}_getAriaExpanded(e){return e?"true":"false"}_getAriaHidden(e){return e?"false":"true"}_openedChanged(e){this._collapsible.style.maxHeight=e?"":"0px"}_onToggleClick(){this.opened=!this.opened}_onToggleKeyDown(e){[13,32].indexOf(e.keyCode)>-1&&(e.preventDefault(),this.opened=!this.opened)}}customElements.define(It.is,It);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class St extends It{static get is(){return"vaadin-accordion-panel"}}customElements.define(St.is,St);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Li extends Dt(v(w(g))){static get template(){return _`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <slot></slot>
    `}static get is(){return"vaadin-accordion"}static get properties(){return{opened:{type:Number,value:0,notify:!0,reflectToAttribute:!0},items:{type:Array,readOnly:!0,notify:!0}}}static get observers(){return["_updateItems(items, opened)"]}constructor(){super(),this._boundUpdateOpened=this._updateOpened.bind(this)}focus(){this._observer&&this._observer.flush(),super.focus()}ready(){super.ready(),this._observer=new T(this,e=>{this._setItems(this._filterItems(Array.from(this.children))),this._filterItems(e.addedNodes).forEach(t=>{t.addEventListener("opened-changed",this._boundUpdateOpened)})})}_getItems(){return this.items}_filterItems(e){return e.filter(t=>t instanceof St)}_updateItems(e,t){if(e){const i=e[t];e.forEach(r=>{r.opened=r===i})}}_onKeyDown(e){const t=e.composedPath()[0];!this.items.some(i=>i.focusElement===t)||super._onKeyDown(e)}_updateOpened(e){const t=this._filterItems(e.composedPath())[0],i=this.items.indexOf(t);if(e.detail.value){if(t.disabled||i===-1)return;this.opened=i}else this.items.some(r=>r.opened)||(this.opened=null)}}customElements.define(Li.is,Li);c("vaadin-app-layout",m`
    [part='navbar']::before {
      background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    }

    :host(:not([dir='rtl']):not([overlay])) [part='drawer'] {
      border-right: 1px solid var(--lumo-contrast-10pct);
    }

    :host([dir='rtl']:not([overlay])) [part='drawer'] {
      border-left: 1px solid var(--lumo-contrast-10pct);
    }

    :host([overlay]) [part='drawer']::before {
      background: var(--lumo-base-color);
    }

    [part='navbar']::before,
    :host([overlay]) [part='drawer']::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    :host([overlay]) [part='drawer']::before {
      background: var(--lumo-base-color);
      height: var(--_vaadin-app-layout-drawer-scroll-size, 100%);
    }

    [part='backdrop'] {
      background-color: var(--lumo-shade-20pct);
      opacity: 1;
    }

    [part] ::slotted(h2),
    [part] ::slotted(h3),
    [part] ::slotted(h4) {
      margin-top: var(--lumo-space-xs) !important;
      margin-bottom: var(--lumo-space-xs) !important;
    }

    @supports (-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)) {
      [part='navbar']::before {
        opacity: 0.8;
      }

      [part='navbar'] {
        -webkit-backdrop-filter: blur(24px);
        backdrop-filter: blur(24px);
      }

      :host([overlay]) [part='drawer']::before {
        opacity: 0.9;
      }

      :host([overlay]) [part='drawer'] {
        -webkit-backdrop-filter: blur(24px);
        backdrop-filter: blur(24px);
      }
    }
  `,{moduleId:"lumo-app-layout"});const Pr=document.createElement("template");Pr.innerHTML=`
  <style>
    /* Use units so that the values can be used in calc() */
    html {
      --safe-area-inset-top: env(safe-area-inset-top, 0px);
      --safe-area-inset-right: env(safe-area-inset-right, 0px);
      --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
      --safe-area-inset-left: env(safe-area-inset-left, 0px);
    }
  </style>
`;document.head.appendChild(Pr.content);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Or(){if(go){const s=window.innerHeight,t=window.innerWidth>s,i=document.documentElement.clientHeight;t&&i>s?document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom",`${i-s}px`):document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom","")}}Or();window.addEventListener("resize",Or);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class zi extends w(v(z(g))){static get template(){return _`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          height: 100%;
          --vaadin-app-layout-transition: 200ms;
          transition: padding var(--vaadin-app-layout-transition);
          --vaadin-app-layout-touch-optimized: false;
          --vaadin-app-layout-navbar-offset-top: var(--_vaadin-app-layout-navbar-offset-size);
          --vaadin-app-layout-navbar-offset-bottom: var(--_vaadin-app-layout-navbar-offset-size-bottom);
          padding-top: var(--vaadin-app-layout-navbar-offset-top);
          padding-bottom: var(--vaadin-app-layout-navbar-offset-bottom);
          padding-left: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([dir='rtl']) {
          padding-left: 0;
          padding-right: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([hidden]),
        [hidden] {
          display: none !important;
        }

        :host([no-anim]) {
          --vaadin-app-layout-transition: none !important;
        }

        :host([drawer-opened]) {
          --vaadin-app-layout-drawer-offset-left: var(--_vaadin-app-layout-drawer-offset-size);
        }

        :host([overlay]) {
          --vaadin-app-layout-drawer-offset-left: 0;
          --vaadin-app-layout-navbar-offset-left: 0;
        }

        :host(:not([no-scroll])) [content] {
          overflow: auto;
        }

        [content] {
          height: 100%;
        }

        @media (pointer: coarse) and (max-width: 800px) and (min-height: 500px) {
          :host {
            --vaadin-app-layout-touch-optimized: true;
          }
        }

        [part='navbar'],
        [part='navbar']::before {
          position: fixed;
          display: flex;
          align-items: center;
          top: 0;
          right: 0;
          left: 0;
          transition: left var(--vaadin-app-layout-transition);
          padding-top: var(--safe-area-inset-top);
          padding-left: var(--safe-area-inset-left);
          padding-right: var(--safe-area-inset-right);
          z-index: 1;
        }

        :host(:not([dir='rtl'])[primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          left: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([dir='rtl'][primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          right: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([primary-section='drawer']) [part='drawer'] {
          top: 0;
        }

        [part='navbar'][bottom] {
          top: auto;
          bottom: 0;
          padding-bottom: var(--safe-area-inset-bottom);
        }

        [part='drawer'] {
          overflow: auto;
          position: fixed;
          top: var(--vaadin-app-layout-navbar-offset-top, 0);
          right: auto;
          bottom: var(--vaadin-app-layout-navbar-offset-bottom, var(--vaadin-viewport-offset-bottom, 0));
          left: var(--vaadin-app-layout-navbar-offset-left, 0);
          transition: transform var(--vaadin-app-layout-transition), visibility var(--vaadin-app-layout-transition);
          transform: translateX(-100%);
          max-width: 90%;
          width: 16em;
          box-sizing: border-box;
          padding: var(--safe-area-inset-top) 0 var(--safe-area-inset-bottom) var(--safe-area-inset-left);
          outline: none;
          /* The drawer should be inaccessible by the tabbing navigation when it is closed. */
          visibility: hidden;
        }

        :host([drawer-opened]) [part='drawer'] {
          /* The drawer should be accessible by the tabbing navigation when it is opened. */
          visibility: visible;
          transform: translateX(0%);
          touch-action: manipulation;
        }

        [part='backdrop'] {
          background-color: #000;
          opacity: 0.3;
        }

        :host(:not([drawer-opened])) [part='backdrop'] {
          opacity: 0;
        }

        :host([overlay]) [part='backdrop'] {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          pointer-events: none;
          transition: opacity var(--vaadin-app-layout-transition);
          -webkit-tap-highlight-color: transparent;
        }

        :host([overlay]) [part='drawer'] {
          top: 0;
          bottom: 0;
        }

        :host([overlay]) [part='drawer'],
        :host([overlay]) [part='backdrop'] {
          z-index: 2;
        }

        :host([drawer-opened][overlay]) [part='backdrop'] {
          pointer-events: auto;
          touch-action: manipulation;
        }

        :host([dir='rtl']) [part='drawer'] {
          left: auto;
          right: var(--vaadin-app-layout-navbar-offset-start, 0);
          transform: translateX(100%);
        }

        :host([dir='rtl']) [part='navbar'],
        :host([dir='rtl']) [part='navbar']::before {
          transition: right var(--vaadin-app-layout-transition);
        }

        :host([dir='rtl'][drawer-opened]) [part='drawer'] {
          transform: translateX(0%);
        }

        :host(:not([dir='rtl'])[drawer-opened]:not([overlay])) {
          padding-left: var(--vaadin-app-layout-drawer-offset-left);
        }

        :host([dir='rtl'][drawer-opened]:not([overlay])) {
          padding-right: var(--vaadin-app-layout-drawer-offset-left);
        }

        @media (max-width: 800px), (max-height: 600px) {
          :host {
            --vaadin-app-layout-drawer-overlay: true;
          }

          [part='drawer'] {
            width: 20em;
          }
        }
      </style>
      <div part="navbar" id="navbarTop">
        <slot name="navbar"></slot>
      </div>
      <div part="backdrop" on-click="_onBackdropClick" on-touchend="_onBackdropTouchend"></div>
      <div part="drawer" id="drawer" on-keydown="__onDrawerKeyDown">
        <slot name="drawer" id="drawerSlot"></slot>
      </div>
      <div content>
        <slot></slot>
      </div>
      <div part="navbar" id="navbarBottom" bottom hidden>
        <slot name="navbar-bottom"></slot>
      </div>
      <div hidden><slot id="touchSlot" name="navbar touch-optimized"></slot></div>
    `}static get is(){return"vaadin-app-layout"}static get properties(){return{i18n:{type:Object,observer:"__i18nChanged",value:()=>({drawer:"Drawer"})},primarySection:{type:String,value:"navbar",notify:!0,reflectToAttribute:!0,observer:"__primarySectionChanged"},drawerOpened:{type:Boolean,notify:!0,value:!0,reflectToAttribute:!0,observer:"__drawerOpenedChanged"},overlay:{type:Boolean,notify:!0,readOnly:!0,value:!1,reflectToAttribute:!0},closeDrawerOn:{type:String,value:"vaadin-router-location-changed",observer:"_closeDrawerOnChanged"}}}static dispatchCloseOverlayDrawerEvent(){window.dispatchEvent(new CustomEvent("close-overlay-drawer"))}constructor(){super(),this.__boundResizeListener=this._resize.bind(this),this.__drawerToggleClickListener=this._drawerToggleClick.bind(this),this.__closeOverlayDrawerListener=this.__closeOverlayDrawer.bind(this),this.__trapFocusInDrawer=this.__trapFocusInDrawer.bind(this),this.__releaseFocusFromDrawer=this.__releaseFocusFromDrawer.bind(this),this.__focusTrapController=new vo(this)}connectedCallback(){super.connectedCallback(),this._blockAnimationUntilAfterNextRender(),window.addEventListener("resize",this.__boundResizeListener),this.addEventListener("drawer-toggle-click",this.__drawerToggleClickListener),bo(this,this._afterFirstRender),this._updateTouchOptimizedMode();const e=this.$.navbarTop.firstElementChild;this._navbarChildObserver=new T(e,()=>{this._updateTouchOptimizedMode()}),this._touchChildObserver=new T(this.$.touchSlot,()=>{this._updateTouchOptimizedMode()}),this._drawerChildObserver=new T(this.$.drawerSlot,()=>{this._updateDrawerSize()}),this._updateDrawerSize(),this._updateOverlayMode(),this._navbarSizeObserver=new ResizeObserver(()=>{this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}),this._navbarSizeObserver.observe(this.$.navbarTop),this._navbarSizeObserver.observe(this.$.navbarBottom),window.addEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener)}ready(){super.ready(),this.addController(this.__focusTrapController),this.__setAriaExpanded()}disconnectedCallback(){super.disconnectedCallback(),this._navbarChildObserver&&this._navbarChildObserver.disconnect(),this._drawerChildObserver&&this._drawerChildObserver.disconnect(),this._touchChildObserver&&this._touchChildObserver.disconnect(),window.removeEventListener("resize",this.__boundResizeListener),this.removeEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.removeEventListener("close-overlay-drawer",this.__drawerToggleClickListener)}__primarySectionChanged(e){["navbar","drawer"].includes(e)||this.set("primarySection","navbar")}__drawerOpenedChanged(e,t){this.overlay&&(e?(this._updateDrawerHeight(),this.__trapFocusInDrawer()):t&&this.__releaseFocusFromDrawer()),this.__setAriaExpanded()}__i18nChanged(){this.__updateDrawerAriaAttributes()}_afterFirstRender(){this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}_drawerToggleClick(e){e.stopPropagation(),this.drawerOpened=!this.drawerOpened}__closeOverlayDrawer(){this.overlay&&(this.drawerOpened=!1)}__setAriaExpanded(){const e=this.querySelector("vaadin-drawer-toggle");e&&e.setAttribute("aria-expanded",this.drawerOpened)}_updateDrawerSize(){const e=this.querySelectorAll("[slot=drawer]").length,t=this.$.drawer;e===0?t.setAttribute("hidden",""):t.removeAttribute("hidden"),this._updateOffsetSize()}_resize(){this._blockAnimationUntilAfterNextRender(),this._updateTouchOptimizedMode(),this._updateOverlayMode()}_updateOffsetSize(){const t=this.$.navbarTop.getBoundingClientRect(),r=this.$.navbarBottom.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-navbar-offset-size",`${t.height}px`),this.style.setProperty("--_vaadin-app-layout-navbar-offset-size-bottom",`${r.height}px`);const l=this.$.drawer.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-drawer-offset-size",`${l.width}px`)}_updateDrawerHeight(){const{scrollHeight:e,offsetHeight:t}=this.$.drawer,i=e>t?`${e}px`:"100%";this.style.setProperty("--_vaadin-app-layout-drawer-scroll-size",i)}_updateOverlayMode(){const e=this._getCustomPropertyValue("--vaadin-app-layout-drawer-overlay")==="true";!this.overlay&&e&&(this._drawerStateSaved=this.drawerOpened,this.drawerOpened=!1),this._setOverlay(e),!this.overlay&&this._drawerStateSaved&&(this.drawerOpened=this._drawerStateSaved,this._drawerStateSaved=null),this._updateDrawerHeight(),this.__updateDrawerAriaAttributes()}__updateDrawerAriaAttributes(){const e=this.$.drawer;this.overlay?(e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label",this.i18n.drawer)):(e.removeAttribute("role"),e.removeAttribute("aria-modal"),e.removeAttribute("aria-label"))}__drawerTransitionComplete(){return new Promise(e=>{if(this._getCustomPropertyValue("--vaadin-app-layout-transition")==="none"){e();return}this.$.drawer.addEventListener("transitionend",e,{once:!0})})}async __trapFocusInDrawer(){await this.__drawerTransitionComplete(),this.drawerOpened&&(this.$.drawer.setAttribute("tabindex","0"),this.__focusTrapController.trapFocus(this.$.drawer))}async __releaseFocusFromDrawer(){if(await this.__drawerTransitionComplete(),this.drawerOpened)return;this.__focusTrapController.releaseFocus(),this.$.drawer.removeAttribute("tabindex");const e=this.querySelector("vaadin-drawer-toggle");e&&(e.focus(),e.setAttribute("focus-ring","focus"))}__onDrawerKeyDown(e){e.key==="Escape"&&this.overlay&&(this.drawerOpened=!1)}_closeDrawerOnChanged(e,t){t&&window.removeEventListener(t,this.__closeOverlayDrawerListener),e&&window.addEventListener(e,this.__closeOverlayDrawerListener)}_onBackdropClick(){this._close()}_onBackdropTouchend(e){e.preventDefault(),this._close()}_close(){this.drawerOpened=!1}_getCustomPropertyValue(e){return(getComputedStyle(this).getPropertyValue(e)||"").trim().toLowerCase()}_updateTouchOptimizedMode(){const e=this._getCustomPropertyValue("--vaadin-app-layout-touch-optimized")==="true",t=this.querySelectorAll('[slot*="navbar"]');t.length>0&&Array.from(t).forEach(i=>{i.getAttribute("slot").indexOf("touch-optimized")>-1&&(i.__touchOptimized=!0),e&&i.__touchOptimized?i.setAttribute("slot","navbar-bottom"):i.setAttribute("slot","navbar")}),this.$.navbarTop.querySelector("[name=navbar]").assignedNodes().length===0?this.$.navbarTop.setAttribute("hidden",""):this.$.navbarTop.removeAttribute("hidden"),e?this.$.navbarBottom.removeAttribute("hidden"):this.$.navbarBottom.setAttribute("hidden",""),this._updateOffsetSize()}_blockAnimationUntilAfterNextRender(){this.setAttribute("no-anim",""),Vt(this,()=>{this.removeAttribute("no-anim")})}}customElements.define(zi.is,zi);const vn=m`
  :host {
    width: var(--lumo-size-l);
    height: var(--lumo-size-l);
    min-width: auto;
    margin: 0 var(--lumo-space-s);
    padding: 0;
    background: transparent;
  }

  [part='icon'],
  [part='icon']::after,
  [part='icon']::before {
    position: inherit;
    height: auto;
    width: auto;
    background: transparent;
    top: auto;
  }

  [part='icon']::before {
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    content: var(--lumo-icons-menu);
  }
`;c("vaadin-drawer-toggle",[Rt,vn],{moduleId:"lumo-drawer-toggle"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Bi extends Ke{static get template(){return _`
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: default;
          position: relative;
          outline: none;
          height: 24px;
          width: 24px;
          padding: 4px;
        }

        [part='icon'],
        [part='icon']::after,
        [part='icon']::before {
          position: absolute;
          top: 8px;
          height: 3px;
          width: 24px;
          background-color: #000;
        }

        [part='icon']::after,
        [part='icon']::before {
          content: '';
        }

        [part='icon']::after {
          top: 6px;
        }

        [part='icon']::before {
          top: 12px;
        }
      </style>
      <slot id="slot">
        <div part="icon"></div>
      </slot>
      <div part="icon" hidden$="[[!_showFallbackIcon]]"></div>
      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-drawer-toggle"}static get properties(){return{ariaLabel:{type:String,value:"Toggle navigation panel",reflectToAttribute:!0},_showFallbackIcon:{type:Boolean,value:!1}}}constructor(){super(),this.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("drawer-toggle-click",{bubbles:!0,composed:!0}))})}ready(){super.ready(),this._observer=new T(this,()=>{this._toggleFallbackIcon()})}_toggleFallbackIcon(){const e=this.$.slot.assignedNodes();this._showFallbackIcon=e.length>0&&e.every(t=>yo(t))}}customElements.define(Bi.is,Bi);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bn=m`
  :host {
    --vaadin-user-color-0: #df0b92;
    --vaadin-user-color-1: #650acc;
    --vaadin-user-color-2: #097faa;
    --vaadin-user-color-3: #ad6200;
    --vaadin-user-color-4: #bf16f3;
    --vaadin-user-color-5: #084391;
    --vaadin-user-color-6: #078836;
  }

  [theme~='dark'] {
    --vaadin-user-color-0: #ff66c7;
    --vaadin-user-color-1: #9d8aff;
    --vaadin-user-color-2: #8aff66;
    --vaadin-user-color-3: #ffbd66;
    --vaadin-user-color-4: #dc6bff;
    --vaadin-user-color-5: #66fffa;
    --vaadin-user-color-6: #e6ff66;
  }
`,Lr=document.createElement("template");Lr.innerHTML=`<style>${bn.toString().replace(":host","html")}</style>`;document.head.appendChild(Lr.content);const zr=document.createElement("style");zr.textContent="html { --vaadin-avatar-size: var(--lumo-size-m); }";document.head.appendChild(zr);c("vaadin-avatar",m`
    :host {
      color: var(--lumo-secondary-text-color);
      background-color: var(--lumo-contrast-10pct);
      border-radius: 50%;
      outline: none;
      cursor: default;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host([has-color-index]) {
      color: var(--lumo-base-color);
    }

    :host([focus-ring]) {
      border-color: var(--lumo-primary-color-50pct);
    }

    [part='icon'],
    [part='abbr'] {
      fill: currentColor;
    }

    [part='abbr'] {
      font-family: var(--lumo-font-family);
      font-size: 2.4375em;
      font-weight: 500;
    }

    :host([theme~='xlarge']) [part='abbr'] {
      font-size: 2.5em;
    }

    :host([theme~='large']) [part='abbr'] {
      font-size: 2.375em;
    }

    :host([theme~='small']) [part='abbr'] {
      font-size: 2.75em;
    }

    :host([theme~='xsmall']) [part='abbr'] {
      font-size: 3em;
    }

    :host([theme~='xlarge']) {
      --vaadin-avatar-size: var(--lumo-size-xl);
    }

    :host([theme~='large']) {
      --vaadin-avatar-size: var(--lumo-size-l);
    }

    :host([theme~='small']) {
      --vaadin-avatar-size: var(--lumo-size-s);
    }

    :host([theme~='xsmall']) {
      --vaadin-avatar-size: var(--lumo-size-xs);
    }
  `,{moduleId:"lumo-avatar"});/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Br=document.createElement("template");Br.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-avatar-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQAAAsAAAAABnwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUmEY21hcAAAAYgAAABLAAABcOspwa1nbHlmAAAB1AAAAEUAAABMYO4o1WhlYWQAAAIcAAAALgAAADYYaAmGaGhlYQAAAkwAAAAdAAAAJAZsA1VobXR4AAACbAAAAAgAAAAIA+gAAGxvY2EAAAJ0AAAABgAAAAYAJgAAbWF4cAAAAnwAAAAeAAAAIAEOACFuYW1lAAACnAAAAUIAAAKavFDYrHBvc3QAAAPgAAAAHQAAAC52hGZ4eJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGT8wjiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+YmQO+p/FEMUcxDANKMwIkgMADiUMJQB4nGNgYGBlYGBgBmIdIGZhYGAMYWBkAAE/oCgjWJyZgQsszsKgBFbDAhJ/xfj/P4wE8lnAJAMjG8Mo4AGTMlAeOKwgmIERADU0CX0AeJxjYGIAAmYJpkgGHgYRBgZGJT1GEztGIzlGET5GKEuU8YuSpZKSpQuI+LfLv21emz9jHJQPJP7dsUywsEiwBACG8g9CAAAAeJxjYGRgYADicIOnh+P5bb4ycDO/AIow3JZ4rIJMM0swRQIpDgYmEA8AKwgJOwAAeJxjYGRgYA76nwUkXzAAAbMEAyMDKmACAE2GAskAAAAAAAAAA+gAAAAAAAAAJgAAeJxjYGRgYGBiEAViBjCLgYELCBkY/oP5DAAKuwEwAAB4nI2Qu07DMBSG//SGaCWEhMSAGDx1QU0vYyemdmDrUDEhuamTpkriyHEj9RF4B56Bh2Bg5mmY+8d4Qh3qo9jf+c45thQAt/hGgGYFuHN7s1q4YvbHbdKD5w555LmLAZ499+hfPPfxhDfPA/p33hB0rmmG+PDcwg2+PLfpfzx3yL+eu7gPHj33MAxmnvtYB6+eB/SftZTbtBjJWlppRmmki2qlkkMmzZnKGbVWpkp1Iabh5Ex1qQplpFVbsTmKqk5m1sYiNjoXC11YlWValEbvVWTDnbXlfDyOvQ8jnaOGZGyRouCfky63/AyzFBE0fYUVFBIckLnKZTOXda15s+GZulxgihCTC2eXnC3cfFNV7BfY4Mi9eT3BjNYiZh6zRyMnLdxs050xNE3panuaiD7Ezk2VmGPMiP/1h+71/ATcWYAhAAB4nGNgYoAALgbsgImRiZGZgaW0OLWIgQEACl4B2QAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(Br.content);/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Et extends W(w(v(z(g)))){static get template(){return _`
      <style>
        :host {
          display: inline-block;
          flex: none;
          border-radius: 50%;
          overflow: hidden;
          height: var(--vaadin-avatar-size, 64px);
          width: var(--vaadin-avatar-size, 64px);
          border: var(--vaadin-avatar-outline-width) solid transparent;
          margin: calc(var(--vaadin-avatar-outline-width) * -1);
          background-clip: content-box;
          --vaadin-avatar-outline-width: 2px;
        }

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        [part='icon'] {
          font-size: 5.6em;
        }

        [part='abbr'] {
          font-size: 2.2em;
        }

        [part='icon'] > text {
          font-family: 'vaadin-avatar-icons';
        }

        :host([hidden]) {
          display: none !important;
        }

        svg[hidden] {
          display: none !important;
        }

        :host([has-color-index]) {
          position: relative;
          background-color: var(--vaadin-avatar-user-color);
        }

        :host([has-color-index])::before {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          border-radius: inherit;
          box-shadow: inset 0 0 0 2px var(--vaadin-avatar-user-color);
        }
      </style>
      <img hidden$="[[!__imgVisible]]" src$="[[img]]" aria-hidden="true" on-error="__onImageLoadError" />
      <svg
        part="icon"
        hidden$="[[!__iconVisible]]"
        id="avatar-icon"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <text dy=".35em" text-anchor="middle"></text>
      </svg>
      <svg
        part="abbr"
        hidden$="[[!__abbrVisible]]"
        id="avatar-abbr"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <text dy=".35em" text-anchor="middle">[[abbr]]</text>
      </svg>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-avatar"}static get properties(){return{img:{type:String,reflectToAttribute:!0,observer:"__imgChanged"},abbr:{type:String,reflectToAttribute:!0},name:{type:String,reflectToAttribute:!0},colorIndex:{type:Number,observer:"__colorIndexChanged"},i18n:{type:Object,value:()=>({anonymous:"anonymous"})},withTooltip:{type:Boolean,value:!1,observer:"__withTooltipChanged"},__imgVisible:Boolean,__iconVisible:Boolean,__abbrVisible:Boolean,__tooltipNode:Object}}static get observers(){return["__imgOrAbbrOrNameChanged(img, abbr, name)","__i18nChanged(i18n.*)","__tooltipChanged(__tooltipNode, name, abbr)"]}ready(){super.ready(),this.__updateVisibility(),this.hasAttribute("role")||this.setAttribute("role","button"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this._tooltipController=new O(this),this.addController(this._tooltipController),!this.name&&!this.abbr&&this.__setTooltip()}__colorIndexChanged(e){if(e!=null){const t=`--vaadin-user-color-${e}`;Boolean(getComputedStyle(document.documentElement).getPropertyValue(t))?(this.setAttribute("has-color-index",""),this.style.setProperty("--vaadin-avatar-user-color",`var(${t})`)):(this.removeAttribute("has-color-index"),console.warn(`The CSS property --vaadin-user-color-${e} is not defined`))}else this.removeAttribute("has-color-index")}__imgChanged(){this.__imgFailedToLoad=!1}__imgOrAbbrOrNameChanged(e,t,i){this.__updateVisibility(),!(t&&t!==this.__generatedAbbr)&&(i?this.abbr=this.__generatedAbbr=i.split(" ").map(r=>r.charAt(0)).join(""):this.abbr=void 0)}__tooltipChanged(e,t,i){e&&(i&&i!==this.__generatedAbbr?this.__setTooltip(t?`${t} (${i})`:i):this.__setTooltip(t))}__withTooltipChanged(e,t){if(e){const i=document.createElement("vaadin-tooltip");i.setAttribute("slot","tooltip"),this.appendChild(i),this.__tooltipNode=i}else t&&(this.__tooltipNode.target=null,this.__tooltipNode.remove(),this.__tooltipNode=null)}__i18nChanged(e){e.base&&e.base.anonymous&&(this.__oldAnonymous&&this.__tooltipNode&&this.__tooltipNode.text===this.__oldAnonymous&&this.__setTooltip(),this.__oldAnonymous=e.base.anonymous)}__updateVisibility(){this.__imgVisible=!!this.img&&!this.__imgFailedToLoad,this.__abbrVisible=!this.__imgVisible&&!!this.abbr,this.__iconVisible=!this.__imgVisible&&!this.abbr}__setTooltip(e){const t=this.__tooltipNode;t&&(t.text=e||this.i18n.anonymous)}__onImageLoadError(){this.img&&(console.warn(`<vaadin-avatar> The specified image could not be loaded: ${this.img}`),this.__imgFailedToLoad=!0,this.__updateVisibility())}}customElements.define(Et.is,Et);c("vaadin-avatar-group",m`
    :host {
      --vaadin-avatar-size: var(--lumo-size-m);
    }

    :host([theme~='xlarge']) {
      --vaadin-avatar-group-overlap: 12px;
      --vaadin-avatar-group-overlap-border: 3px;
      --vaadin-avatar-size: var(--lumo-size-xl);
    }

    :host([theme~='large']) {
      --vaadin-avatar-group-overlap: 10px;
      --vaadin-avatar-group-overlap-border: 3px;
      --vaadin-avatar-size: var(--lumo-size-l);
    }

    :host([theme~='small']) {
      --vaadin-avatar-group-overlap: 6px;
      --vaadin-avatar-group-overlap-border: 2px;
      --vaadin-avatar-size: var(--lumo-size-s);
    }

    :host([theme~='xsmall']) {
      --vaadin-avatar-group-overlap: 4px;
      --vaadin-avatar-group-overlap-border: 2px;
      --vaadin-avatar-size: var(--lumo-size-xs);
    }
  `,{moduleId:"lumo-avatar-group"});const yn=m`
  :host {
    --_lumo-list-box-item-selected-icon-display: none;
    --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius-m) / 4);
  }

  [part='overlay'] {
    outline: none;
  }
`;c("vaadin-avatar-group-overlay",[Nt,js,yn],{moduleId:"lumo-avatar-group-overlay"});c("vaadin-avatar-group-list-box",m`
    [part='items'] ::slotted(vaadin-item[theme='avatar-group-item']) {
      padding: var(--lumo-space-xs);
      padding-right: var(--lumo-space-m);
    }

    :host([dir='rtl']) [part='items'] ::slotted(vaadin-item[theme='avatar-group-item']) {
      padding: var(--lumo-space-xs);
      padding-left: var(--lumo-space-m);
    }
  `,{moduleId:"lumo-avatar-group-list-box"});c("vaadin-item",m`
    :host([theme='avatar-group-item']) [part='content'] {
      display: flex;
      align-items: center;
    }

    :host([theme='avatar-group-item']) ::slotted(vaadin-avatar) {
      width: var(--lumo-size-xs);
      height: var(--lumo-size-xs);
    }

    :host([theme='avatar-group-item']:not([dir='rtl'])) ::slotted(vaadin-avatar) {
      margin-right: var(--lumo-space-s);
    }

    :host([theme='avatar-group-item'][dir='rtl']) ::slotted(vaadin-avatar) {
      margin-left: var(--lumo-space-s);
    }
  `,{moduleId:"lumo-avatar-group-item"});/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Mi extends Ys{static get is(){return"vaadin-avatar-group-list-box"}}customElements.define(Mi.is,Mi);/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Fi extends Je(ee){static get is(){return"vaadin-avatar-group-overlay"}}customElements.define(Fi.is,Fi);/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ut=2;class Di extends te(w(v(g))){static get template(){return _`
      <style>
        :host {
          display: block;
          width: 100%; /* prevent collapsing inside non-stretching column flex */
          --vaadin-avatar-group-overlap: 8px;
          --vaadin-avatar-group-overlap-border: 2px;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='container'] {
          display: flex;
          position: relative;
          width: 100%;
          flex-wrap: nowrap;
        }

        [part='avatar']:not(:first-child) {
          -webkit-mask-image: url('data:image/svg+xml;utf8,<svg viewBox=%220 0 300 300%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22><path fill-rule=%22evenodd%22 clip-rule=%22evenodd%22 d=%22M300 0H0V300H300V0ZM150 200C177.614 200 200 177.614 200 150C200 122.386 177.614 100 150 100C122.386 100 100 122.386 100 150C100 177.614 122.386 200 150 200Z%22 fill=%22black%22/></svg>');
          mask-image: url('data:image/svg+xml;utf8,<svg viewBox=%220 0 300 300%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22><path fill-rule=%22evenodd%22 clip-rule=%22evenodd%22 d=%22M300 0H0V300H300V0ZM150 200C177.614 200 200 177.614 200 150C200 122.386 177.614 100 150 100C122.386 100 100 122.386 100 150C100 177.614 122.386 200 150 200Z%22 fill=%22black%22/></svg>');
          -webkit-mask-size: calc(
            300% + var(--vaadin-avatar-group-overlap-border) * 6 - var(--vaadin-avatar-outline-width) * 6
          );
          mask-size: calc(
            300% + var(--vaadin-avatar-group-overlap-border) * 6 - var(--vaadin-avatar-outline-width) * 6
          );
        }

        [part='avatar']:not([dir='rtl']):not(:first-child) {
          margin-left: calc(var(--vaadin-avatar-group-overlap) * -1 - var(--vaadin-avatar-outline-width));
          -webkit-mask-position: calc(50% - var(--vaadin-avatar-size) + var(--vaadin-avatar-group-overlap));
          mask-position: calc(50% - var(--vaadin-avatar-size) + var(--vaadin-avatar-group-overlap));
        }

        [part='avatar'][dir='rtl']:not(:first-child) {
          margin-right: calc(var(--vaadin-avatar-group-overlap) * -1);
          -webkit-mask-position: calc(
            50% + var(--vaadin-avatar-size) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width)
          );
          mask-position: calc(
            50% + var(--vaadin-avatar-size) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width)
          );
        }
      </style>
      <div id="container" part="container">
        <template id="items" is="dom-repeat" items="[[__computeItems(items.*, __itemsInView, maxItemsVisible)]]">
          <vaadin-avatar
            name="[[item.name]]"
            abbr="[[item.abbr]]"
            img="[[item.img]]"
            part="avatar"
            theme$="[[_theme]]"
            i18n="[[i18n]]"
            color-index="[[item.colorIndex]]"
            with-tooltip
          ></vaadin-avatar>
        </template>
        <vaadin-avatar
          id="overflow"
          part="avatar"
          hidden$="[[__computeMoreHidden(items.length, __itemsInView, __maxReached)]]"
          abbr="[[__computeMore(items.length, __itemsInView, maxItemsVisible)]]"
          theme$="[[_theme]]"
          on-click="_onOverflowClick"
          on-keydown="_onOverflowKeyDown"
          aria-haspopup="listbox"
        >
          <vaadin-tooltip slot="tooltip" generator="[[__overflowTextGenerator]]"></vaadin-tooltip>
        </vaadin-avatar>
      </div>
      <vaadin-avatar-group-overlay
        id="overlay"
        opened="{{_opened}}"
        no-vertical-overlap
        on-vaadin-overlay-close="_onVaadinOverlayClose"
      >
        <template>
          <vaadin-avatar-group-list-box on-keydown="_onListKeyDown">
            <template is="dom-repeat" items="[[__computeExtraItems(items.*, __itemsInView, maxItemsVisible)]]">
              <vaadin-item theme="avatar-group-item" role="option">
                <vaadin-avatar
                  name="[[item.name]]"
                  abbr="[[item.abbr]]"
                  img="[[item.img]]"
                  i18n="[[i18n]]"
                  part="avatar"
                  theme$="[[_theme]]"
                  color-index="[[item.colorIndex]]"
                  tabindex="-1"
                  aria-hidden="true"
                ></vaadin-avatar>
                [[item.name]]
              </vaadin-item>
            </template>
          </vaadin-avatar-group-list-box>
        </template>
      </vaadin-avatar-group-overlay>
    `}static get is(){return"vaadin-avatar-group"}static get properties(){return{items:{type:Array},maxItemsVisible:{type:Number},i18n:{type:Object,value:()=>({anonymous:"anonymous",activeUsers:{one:"Currently one active user",many:"Currently {count} active users"},joined:"{user} joined",left:"{user} left"})},__maxReached:{type:Boolean,computed:"__computeMaxReached(items.length, maxItemsVisible)"},__itemsInView:{type:Number,value:null},_opened:{type:Boolean,observer:"__openedChanged",value:!1},__overflowTextGenerator:Object}}static get observers(){return["__computeMoreTooltip(items.length, __itemsInView, maxItemsVisible)","__itemsChanged(items.splices, items.*)","__i18nItemsChanged(i18n.*, items.length)"]}ready(){super.ready(),this._overlayElement=this.shadowRoot.querySelector("vaadin-avatar-group-overlay"),this._overlayElement.positionTarget=this.$.overflow,Vt(this,()=>{this.__setItemsInView()})}disconnectedCallback(){super.disconnectedCallback(),this._opened=!1}get _avatars(){return this.shadowRoot.querySelectorAll("vaadin-avatar")}__getMessage(e,t){return t.replace("{user}",e.name||e.abbr||this.i18n.anonymous)}_onOverflowClick(e){e.stopPropagation(),this._opened?this.$.overlay.close():e.defaultPrevented||(this._opened=!0)}_onOverflowKeyDown(e){this._opened||/^(Enter|SpaceBar|\s)$/.test(e.key)&&(e.preventDefault(),this._opened=!0)}_onListKeyDown(e){(e.key==="Escape"||e.key==="Esc"||/^(Tab)$/.test(e.key))&&(this._opened=!1)}_onResize(){this.__setItemsInView()}_onVaadinOverlayClose(e){e.detail.sourceEvent&&e.detail.sourceEvent.composedPath().includes(this)&&e.preventDefault()}__computeItems(e,t,i){const r=e.base||[],o=this.__getLimit(r.length,t,i);return o?r.slice(0,o):r}__computeExtraItems(e,t,i){const r=e.base||[],o=this.__getLimit(r.length,t,i);return o?r.slice(o):r}__computeMaxReached(e,t){return t!=null&&e>this.__getMax(t)}__computeMore(e,t,i){return`+${e-this.__getLimit(e,t,i)}`}__computeMoreHidden(e,t,i){return!i&&!(t&&t<e)}__computeMoreTooltip(e,t,i){const r=this.__getLimit(e,t,i);if(r==null)return;const o=[];for(let l=r;l<e;l++){const a=this.items[l];a&&o.push(a.name||a.abbr||"anonymous")}this.__overflowTextGenerator=()=>o.join(`
`)}__getLimit(e,t,i){let r=null;const o=this.__getMax(i);return i!=null&&o<e?r=o-1:t&&t<e&&(r=t),Math.min(r,this.__calculateAvatarsFitWidth())}__getMax(e){return Math.max(e,ut)}__itemsChanged(e,t){const i=t.base;this.$.items.render(),this.__setItemsInView(),e&&Array.isArray(e.indexSplices)?e.indexSplices.forEach(r=>{this.__announceItemsChange(i,r)}):Array.isArray(i)&&Array.isArray(this.__oldItems)&&Mt(i,this.__oldItems).forEach(o=>{this.__announceItemsChange(i,o)}),this.__oldItems=i}__announceItemsChange(e,t){const{addedCount:i,index:r,removed:o}=t;let l=[],a=[];i&&(l=e.slice(r,r+i).map(d=>this.__getMessage(d,this.i18n.joined||"{user} joined"))),o&&(a=o.map(d=>this.__getMessage(d,this.i18n.left||"{user} left")));const n=a.concat(l);n.length>0&&he(n.join(", "))}__i18nItemsChanged(e,t){const{base:i}=e;if(i&&i.activeUsers){const r=t===1?"one":"many";i.activeUsers[r]&&this.setAttribute("aria-label",i.activeUsers[r].replace("{count}",t||0))}}__openedChanged(e,t){e?(this._menuElement||(this._menuElement=this._overlayElement.content.querySelector("vaadin-avatar-group-list-box"),this._menuElement.setAttribute("role","listbox")),this._openedWithFocusRing=this.$.overflow.hasAttribute("focus-ring"),this._menuElement.focus()):t&&(this.$.overflow.focus(),this._openedWithFocusRing&&this.$.overflow.setAttribute("focus-ring","")),this.$.overflow.setAttribute("aria-expanded",e===!0)}__setItemsInView(){const e=this._avatars,t=this.items;if(!t||!e||e.length<3)return;let i=this.__calculateAvatarsFitWidth();i===t.length-1&&(i=t.length),i>=t.length&&this._opened&&(this.$.overlay.close(),this.$.overlay._flushAnimation("closing")),this.__itemsInView=i}__calculateAvatarsFitWidth(){if(!this.shadowRoot||this._avatars.length<ut)return ut;const e=this._avatars,t=e[0].clientWidth,{marginLeft:i,marginRight:r}=getComputedStyle(e[1]),o=this.getAttribute("dir")==="rtl"?parseInt(r,0)-parseInt(i,0):parseInt(i,0)-parseInt(r,0);return Math.floor((this.$.container.offsetWidth-t)/(t+o))}}customElements.define(Di.is,Di);const wn=m`
  :host {
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    /* Effective height of vaadin-checkbox */
    height: var(--lumo-size-s);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([theme~='vertical']) [part='group-field'] {
    display: flex;
    flex-direction: column;
  }

  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([focused]:not([disabled])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([disabled]):not([focused])) [part='label'],
  :host(:hover:not([disabled]):not([focused])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([disabled]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }
`;c("vaadin-checkbox-group",[$t,Ht,wn],{moduleId:"lumo-checkbox-group"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Vi extends Xe(W(Qe(w(v(g))))){static get is(){return"vaadin-checkbox-group"}static get template(){return _`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-group-field-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        :host(:not([has-label])) [part='label'] {
          display: none;
        }
      </style>

      <div class="vaadin-group-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div part="group-field">
          <slot></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{value:{type:Array,value:()=>[],notify:!0,observer:"__valueChanged"}}}constructor(){super(),this.__registerCheckbox=this.__registerCheckbox.bind(this),this.__unregisterCheckbox=this.__unregisterCheckbox.bind(this),this.__onCheckboxCheckedChanged=this.__onCheckboxCheckedChanged.bind(this)}ready(){super.ready(),this.ariaTarget=this,this.setAttribute("role","group"),this._observer=new T(this,({addedNodes:e,removedNodes:t})=>{const i=this.__filterCheckboxes(e),r=this.__filterCheckboxes(t);i.forEach(this.__registerCheckbox),r.forEach(this.__unregisterCheckbox),this.__warnOfCheckboxesWithoutValue(i)}),this._tooltipController=new O(this),this.addController(this._tooltipController)}checkValidity(){return!this.required||this.value.length>0}__filterCheckboxes(e){return e.filter(t=>t instanceof wo)}get __checkboxes(){return this.__filterCheckboxes([...this.children])}__warnOfCheckboxesWithoutValue(e){e.some(i=>{const{value:r}=i;return!i.hasAttribute("value")&&(!r||r==="on")})&&console.warn("Please provide the value attribute to all the checkboxes inside the checkbox group.")}__registerCheckbox(e){e.addEventListener("checked-changed",this.__onCheckboxCheckedChanged),this.disabled&&(e.disabled=!0),e.checked?this.__addCheckboxToValue(e.value):this.value.includes(e.value)&&(e.checked=!0)}__unregisterCheckbox(e){e.removeEventListener("checked-changed",this.__onCheckboxCheckedChanged),e.checked&&this.__removeCheckboxFromValue(e.value)}_disabledChanged(e,t){super._disabledChanged(e,t),!(!e&&t===void 0)&&t!==e&&this.__checkboxes.forEach(i=>{i.disabled=e})}__addCheckboxToValue(e){this.value.includes(e)||(this.value=[...this.value,e])}__removeCheckboxFromValue(e){this.value.includes(e)&&(this.value=this.value.filter(t=>t!==e))}__onCheckboxCheckedChanged(e){const t=e.target;t.checked?this.__addCheckboxToValue(t.value):this.__removeCheckboxFromValue(t.value)}__valueChanged(e,t){e.length===0&&t===void 0||(this.toggleAttribute("has-value",e.length>0),this.__checkboxes.forEach(i=>{i.checked=e.includes(i.value)}),t!==void 0&&this.validate())}_shouldRemoveFocus(e){return!this.contains(e.relatedTarget)}_setFocused(e){super._setFocused(e),e||this.validate()}}customElements.define(Vi.is,Vi);/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Mr=m`
  [part~='loader'] {
    box-sizing: border-box;
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
    border: 2px solid transparent;
    border-color: var(--lumo-primary-color-10pct) var(--lumo-primary-color-10pct) var(--lumo-primary-color)
      var(--lumo-primary-color);
    border-radius: calc(0.5 * var(--lumo-icon-size-s));
    opacity: 0;
    pointer-events: none;
  }

  :host(:not([loading])) [part~='loader'] {
    display: none;
  }

  :host([loading]) [part~='loader'] {
    animation: 1s linear infinite lumo-loader-rotate, 0.3s 0.1s lumo-loader-fade-in both;
  }

  @keyframes lumo-loader-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes lumo-loader-rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`,xn=m`
  [part='content'] {
    padding: 0;
  }

  :host {
    --_vaadin-combo-box-items-container-border-width: var(--lumo-space-xs);
    --_vaadin-combo-box-items-container-border-style: solid;
    --_vaadin-combo-box-items-container-border-color: transparent;
  }

  /* Loading state */

  /* When items are empty, the spinner needs some room */
  :host(:not([closing])) [part~='content'] {
    min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
  }

  [part~='overlay'] {
    position: relative;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }

  [part~='loader'] {
    position: absolute;
    z-index: 1;
    left: var(--lumo-space-s);
    right: var(--lumo-space-s);
    top: var(--lumo-space-s);
    margin-left: auto;
    margin-inline-start: auto;
    margin-inline-end: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part~='loader'] {
    left: auto;
    margin-left: 0;
    margin-right: auto;
    margin-inline-start: 0;
    margin-inline-end: auto;
  }
`;c("vaadin-combo-box-overlay",[Nt,js,xn,Mr],{moduleId:"lumo-combo-box-overlay"});const Cn=m`
  :host {
    transition: background-color 100ms;
    overflow: hidden;
    --_lumo-item-selected-icon-display: block;
  }

  @media (any-hover: hover) {
    :host([focused]:not([disabled])) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }
  }
`;c("vaadin-combo-box-item",[xo,Cn],{moduleId:"lumo-combo-box-item"});const An=m`
  :host {
    outline: none;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }
`;c("vaadin-combo-box",[$,An],{moduleId:"lumo-combo-box"});/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ue extends v(Ze(g)){static get template(){return _`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-combo-box-item"}static get properties(){return{index:Number,item:Object,label:String,selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,_oldRenderer:Function}}static get observers(){return["__rendererOrItemChanged(renderer, index, item.*, selected, focused)","__updateLabel(label, renderer)"]}connectedCallback(){super.connectedCallback(),this._comboBox=this.parentNode.comboBox;const e=this._comboBox.getAttribute("dir");e&&this.setAttribute("dir",e)}requestContentUpdate(){if(!this.renderer)return;const e={index:this.index,item:this.item,focused:this.focused,selected:this.selected};this.renderer(this,this._comboBox,e)}__rendererOrItemChanged(e,t,i){i===void 0||t===void 0||(this._oldRenderer!==e&&(this.innerHTML="",delete this._$litPart$),e&&(this._oldRenderer=e,this.requestContentUpdate()))}__updateLabel(e,t){t||(this.textContent=e)}}customElements.define(Ue.is,Ue);/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */c("vaadin-combo-box-overlay",m`
    #overlay {
      width: var(--vaadin-combo-box-overlay-width, var(--_vaadin-combo-box-overlay-default-width, auto));
    }

    [part='content'] {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `,{moduleId:"vaadin-combo-box-overlay-styles"});let Te;class We extends Je(ee){static get is(){return"vaadin-combo-box-overlay"}static get template(){return Te||(Te=super.template.cloneNode(!0),Te.content.querySelector('[part~="overlay"]').removeAttribute("tabindex")),Te}static get observers(){return["_setOverlayWidth(positionTarget, opened)"]}connectedCallback(){super.connectedCallback();const e=this._comboBox,t=e&&e.getAttribute("dir");t&&this.setAttribute("dir",t)}ready(){super.ready();const e=document.createElement("div");e.setAttribute("part","loader");const t=this.shadowRoot.querySelector('[part~="content"]');t.parentNode.insertBefore(e,t)}_outsideClickListener(e){const t=e.composedPath();!t.includes(this.positionTarget)&&!t.includes(this)&&this.close()}_setOverlayWidth(e,t){if(e&&t){const i=this.localName;this.style.setProperty(`--_${i}-default-width`,`${e.clientWidth}px`);const r=getComputedStyle(this._comboBox).getPropertyValue(`--${i}-width`);r===""?this.style.removeProperty(`--${i}-width`):this.style.setProperty(`--${i}-width`,r),this._updatePosition()}}}customElements.define(We.is,We);/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const M=class{toString(){return""}};/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class je extends g{static get is(){return"vaadin-combo-box-scroller"}static get template(){return _`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-combo-box-items-container-border-width);
          border-style: var(--_vaadin-combo-box-items-container-border-style);
          border-color: var(--_vaadin-combo-box-items-container-border-color);
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}static get properties(){return{items:{type:Array,observer:"__itemsChanged"},focusedIndex:{type:Number,observer:"__focusedIndexChanged"},loading:{type:Boolean,observer:"__loadingChanged"},opened:{type:Boolean,observer:"__openedChanged"},selectedItem:{type:Object,observer:"__selectedItemChanged"},itemIdPath:{type:String},comboBox:{type:Object},getItemLabel:{type:Object},renderer:{type:Object,observer:"__rendererChanged"},theme:{type:String}}}constructor(){super(),this.__boundOnItemClick=this.__onItemClick.bind(this)}__openedChanged(e){e&&this.requestContentUpdate()}ready(){super.ready(),this.id=`${this.localName}-${be()}`,this.__hostTagName=this.constructor.is.replace("-scroller",""),this.setAttribute("role","listbox"),this.addEventListener("click",e=>e.stopPropagation()),this.__patchWheelOverScrolling(),this.__virtualizer=new Gs({createElements:this.__createElements.bind(this),updateElement:this.__updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.$.selector})}requestContentUpdate(){this.__virtualizer&&this.__virtualizer.update()}scrollIntoView(e){if(!(this.opened&&e>=0))return;const t=this._visibleItemsCount();let i=e;e>this.__virtualizer.lastVisibleIndex-1?(this.__virtualizer.scrollToIndex(e),i=e-t+1):e>this.__virtualizer.firstVisibleIndex&&(i=this.__virtualizer.firstVisibleIndex),this.__virtualizer.scrollToIndex(Math.max(0,i));const r=[...this.children].find(n=>!n.hidden&&n.index===this.__virtualizer.lastVisibleIndex);if(!r||e!==r.index)return;const o=r.getBoundingClientRect(),l=this.getBoundingClientRect(),a=o.bottom-l.bottom+this._viewportTotalPaddingBottom;a>0&&(this.scrollTop+=a)}__getAriaRole(e){return e!==void 0?"option":!1}__getAriaSelected(e,t){return this.__isItemFocused(e,t).toString()}__isItemFocused(e,t){return!this.loading&&e===t}__isItemSelected(e,t,i){return e instanceof M?!1:i&&e!==void 0&&t!==void 0?this.get(i,e)===this.get(i,t):e===t}__itemsChanged(e){this.__virtualizer&&e&&(this.__virtualizer.size=e.length,this.__virtualizer.flush(),this.requestContentUpdate())}__loadingChanged(){this.requestContentUpdate()}__selectedItemChanged(){this.requestContentUpdate()}__focusedIndexChanged(e,t){e!==t&&this.requestContentUpdate(),e>=0&&!this.loading&&this.scrollIntoView(e)}__rendererChanged(e,t){(e||t)&&this.requestContentUpdate()}__createElements(e){return[...Array(e)].map(()=>{const t=document.createElement(`${this.__hostTagName}-item`);return t.addEventListener("click",this.__boundOnItemClick),t.tabIndex="-1",t.style.width="100%",t})}__updateElement(e,t){const i=this.items[t],r=this.focusedIndex;e.setProperties({item:i,index:t,label:this.getItemLabel(i),selected:this.__isItemSelected(i,this.selectedItem,this.itemIdPath),renderer:this.renderer,focused:this.__isItemFocused(r,t)}),e.id=`${this.__hostTagName}-item-${t}`,e.setAttribute("role",this.__getAriaRole(t)),e.setAttribute("aria-selected",this.__getAriaSelected(r,t)),e.setAttribute("aria-posinset",t+1),e.setAttribute("aria-setsize",this.items.length),this.theme?e.setAttribute("theme",this.theme):e.removeAttribute("theme"),i instanceof M&&this.__requestItemByIndex(t)}__onItemClick(e){this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:e.currentTarget.item}}))}__patchWheelOverScrolling(){this.$.selector.addEventListener("wheel",e=>{const t=this.scrollTop===0,i=this.scrollHeight-this.scrollTop-this.clientHeight<=1;(t&&e.deltaY<0||i&&e.deltaY>0)&&e.preventDefault()})}get _viewportTotalPaddingBottom(){if(this._cachedViewportTotalPaddingBottom===void 0){const e=window.getComputedStyle(this.$.selector);this._cachedViewportTotalPaddingBottom=[e.paddingBottom,e.borderBottomWidth].map(t=>parseInt(t,10)).reduce((t,i)=>t+i)}return this._cachedViewportTotalPaddingBottom}__requestItemByIndex(e){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:e,currentScrollerPos:this._oldScrollerPosition}}))})}_visibleItemsCount(){return this.__virtualizer.scrollToIndex(this.__virtualizer.firstVisibleIndex),this.__virtualizer.size>0?this.__virtualizer.lastVisibleIndex-this.__virtualizer.firstVisibleIndex+1:0}}customElements.define(je.is,je);/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fr=s=>class extends s{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},size:{type:Number,observer:"_sizeChanged"},dataProvider:{type:Object,observer:"_dataProviderChanged"},_pendingRequests:{value:()=>({})},__placeHolder:{value:new M},__previousDataProviderFilter:{type:String}}}static get observers(){return["_dataProviderFilterChanged(filter)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}ready(){super.ready(),this._scroller.addEventListener("index-requested",t=>{const i=t.detail.index,r=t.detail.currentScrollerPos,o=Math.floor(this.pageSize*1.5);if(!this._shouldSkipIndex(i,o,r)&&i!==void 0){const l=this._getPageForIndex(i);this._shouldLoadPage(l)&&this._loadPage(l)}})}_dataProviderFilterChanged(t){if(this.__previousDataProviderFilter===void 0&&t===""){this.__previousDataProviderFilter=t;return}this.__previousDataProviderFilter!==t&&(this.__previousDataProviderFilter=t,this._pendingRequests={},this.loading=this._shouldFetchData(),this.size=void 0,this.clearCache())}_shouldFetchData(){return this.dataProvider?this.opened||this.filter&&this.filter.length:!1}_ensureFirstPage(t){t&&this._shouldLoadPage(0)&&this._loadPage(0)}_shouldSkipIndex(t,i,r){return r!==0&&t>=r-i&&t<=r+i}_shouldLoadPage(t){if(!this.filteredItems||this._forceNextRequest)return this._forceNextRequest=!1,!0;const i=this.filteredItems[t*this.pageSize];return i!==void 0?i instanceof M:this.size===void 0}_loadPage(t){if(this._pendingRequests[t]||!this.dataProvider)return;const i={page:t,pageSize:this.pageSize,filter:this.filter},r=(o,l)=>{if(this._pendingRequests[t]!==r)return;const a=this.filteredItems?[...this.filteredItems]:[];a.splice(i.page*i.pageSize,o.length,...o),this.filteredItems=a,!this.opened&&!this._isInputFocused()&&this._commitValue(),l!==void 0&&(this.size=l),delete this._pendingRequests[t],Object.keys(this._pendingRequests).length===0&&(this.loading=!1)};this._pendingRequests[t]=r,this.loading=!0,this.dataProvider(i,r)}_getPageForIndex(t){return Math.floor(t/this.pageSize)}clearCache(){if(!this.dataProvider)return;this._pendingRequests={};const t=[];for(let i=0;i<(this.size||0);i++)t.push(this.__placeHolder);this.filteredItems=t,this._shouldFetchData()?(this._forceNextRequest=!1,this._loadPage(0)):this._forceNextRequest=!0}_sizeChanged(t=0){const i=(this.filteredItems||[]).slice(0,t);for(let r=0;r<t;r++)i[r]=i[r]!==void 0?i[r]:this.__placeHolder;this.filteredItems=i,this._flushPendingRequests(t)}_pageSizeChanged(t,i){if(Math.floor(t)!==t||t<1)throw this.pageSize=i,new Error("`pageSize` value must be an integer > 0");this.clearCache()}_dataProviderChanged(t,i){this._ensureItemsOrDataProvider(()=>{this.dataProvider=i}),this.clearCache()}_ensureItemsOrDataProvider(t){if(this.items!==void 0&&this.dataProvider!==void 0)throw t(),new Error("Using `items` and `dataProvider` together is not supported");this.dataProvider&&!this.filteredItems&&(this.filteredItems=[])}_warnDataProviderValue(t,i){if(t&&i!==""&&(this.selectedItem===void 0||this.selectedItem===null)){const r=this.__getItemIndexByValue(this.filteredItems,i);(r<0||!this._getItemLabel(this.filteredItems[r]))&&console.warn("Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`")}}_flushPendingRequests(t){if(this._pendingRequests){const i=Math.ceil(t/this.pageSize),r=Object.keys(this._pendingRequests);for(let o=0;o<r.length;o++){const l=parseInt(r[o]);l>=i&&this._pendingRequests[l]([],t)}}}};/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ri(s){return s!=null}function Ni(s,e){return s.findIndex(t=>t instanceof M?!1:e(t))}const ei=s=>class extends z(Ft(Co(Qe(s)))){static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},autoOpenDisabled:{type:Boolean},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,items:{type:Array,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array,observer:"_filteredItemsChanged"},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0},_focusedIndex:{type:Number,observer:"_focusedIndexChanged",value:-1},filter:{type:String,value:"",notify:!0},selectedItem:{type:Object,notify:!0},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},itemValuePath:{type:String,value:"value"},itemIdPath:String,_toggleElement:{type:Object,observer:"_toggleElementChanged"},_closeOnBlurIsPrevented:Boolean,_scroller:Object,_overlayOpened:{type:Boolean,observer:"_overlayOpenedChanged"}}}static get observers(){return["_selectedItemChanged(selectedItem, itemValuePath, itemLabelPath)","_openedOrItemsChanged(opened, filteredItems, loading)","_updateScroller(_scroller, filteredItems, opened, loading, selectedItem, itemIdPath, _focusedIndex, renderer, theme)"]}constructor(){super(),this._boundOnFocusout=this._onFocusout.bind(this),this._boundOverlaySelectedItemChanged=this._overlaySelectedItemChanged.bind(this),this._boundOnClearButtonMouseDown=this.__onClearButtonMouseDown.bind(this),this._boundOnClick=this._onClick.bind(this),this._boundOnOverlayTouchAction=this._onOverlayTouchAction.bind(this),this._boundOnTouchend=this._onTouchend.bind(this)}get _tagNamePrefix(){return"vaadin-combo-box"}get _inputElementValue(){return this.inputElement?this.inputElement[this._propertyForValue]:void 0}set _inputElementValue(t){this.inputElement&&(this.inputElement[this._propertyForValue]=t)}get _nativeInput(){return this.inputElement}_inputElementChanged(t){super._inputElementChanged(t);const i=this._nativeInput;i&&(i.autocomplete="off",i.autocapitalize="off",i.setAttribute("role","combobox"),i.setAttribute("aria-autocomplete","list"),i.setAttribute("aria-expanded",!!this.opened),i.setAttribute("spellcheck","false"),i.setAttribute("autocorrect","off"),this._revertInputValueToValue(),this.clearElement&&this.clearElement.addEventListener("mousedown",this._boundOnClearButtonMouseDown))}ready(){super.ready(),this._initOverlay(),this._initScroller(),this.addEventListener("focusout",this._boundOnFocusout),this._lastCommittedValue=this.value,this.addEventListener("click",this._boundOnClick),this.addEventListener("touchend",this._boundOnTouchend);const t=()=>{requestAnimationFrame(()=>{this.$.overlay.bringToFront()})};this.addEventListener("mousedown",t),this.addEventListener("touchstart",t),ye(this),this.addController(new Ao(this))}disconnectedCallback(){super.disconnectedCallback(),this.close()}requestContentUpdate(){!this._scroller||(this._scroller.requestContentUpdate(),this._getItemElements().forEach(t=>{t.requestContentUpdate()}))}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.opened=!1}_propertiesChanged(t,i,r){super._propertiesChanged(t,i,r),i.filter!==void 0&&this._filterChanged(i.filter)}_initOverlay(){const t=this.$.overlay;t._comboBox=this,t.addEventListener("touchend",this._boundOnOverlayTouchAction),t.addEventListener("touchmove",this._boundOnOverlayTouchAction),t.addEventListener("mousedown",i=>i.preventDefault()),t.addEventListener("opened-changed",i=>{this._overlayOpened=i.detail.value})}_initScroller(t){const i=`${this._tagNamePrefix}-scroller`,r=this.$.overlay;r.renderer=l=>{l.firstChild||l.appendChild(document.createElement(i))},r.requestContentUpdate();const o=r.querySelector(i);o.comboBox=t||this,o.getItemLabel=this._getItemLabel.bind(this),o.addEventListener("selection-changed",this._boundOverlaySelectedItemChanged),this._scroller=o}_updateScroller(t,i,r,o,l,a,n,d,h){t&&(r&&(t.style.maxHeight=getComputedStyle(this).getPropertyValue(`--${this._tagNamePrefix}-overlay-max-height`)||"65vh"),t.setProperties({items:r?i:[],opened:r,loading:o,selectedItem:l,itemIdPath:a,focusedIndex:n,renderer:d,theme:h}))}_openedOrItemsChanged(t,i,r){this._overlayOpened=!!(t&&(r||i&&i.length))}_overlayOpenedChanged(t,i){t?(this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0})),this._onOpened()):i&&this.filteredItems&&this.filteredItems.length&&(this.close(),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0})))}_focusedIndexChanged(t,i){i!==void 0&&this._updateActiveDescendant(t)}_isInputFocused(){return this.inputElement&&Io(this.inputElement)}_updateActiveDescendant(t){const i=this._nativeInput;if(!i)return;const r=this._getItemElements().find(o=>o.index===t);r?i.setAttribute("aria-activedescendant",r.id):i.removeAttribute("aria-activedescendant")}_openedChanged(t,i){if(i===void 0)return;t?(this._openedWithFocusRing=this.hasAttribute("focus-ring"),!this._isInputFocused()&&!ft&&this.focus(),this.$.overlay.restoreFocusOnClose=!0):(this._onClosed(),this._openedWithFocusRing&&this._isInputFocused()&&this.setAttribute("focus-ring",""));const r=this._nativeInput;r&&(r.setAttribute("aria-expanded",!!t),t?r.setAttribute("aria-controls",this._scroller.id):r.removeAttribute("aria-controls"))}_onOverlayTouchAction(){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_isClearButton(t){return t.composedPath()[0]===this.clearElement}_handleClearButtonClick(t){t.preventDefault(),this._clear(),this.opened&&this.requestContentUpdate()}_onToggleButtonClick(t){t.preventDefault(),this.opened?this.close():this.open()}_onHostClick(t){this.autoOpenDisabled||(t.preventDefault(),this.open())}_onClick(t){const i=t.composedPath();this._isClearButton(t)?this._handleClearButtonClick(t):i.indexOf(this._toggleElement)>-1?this._onToggleButtonClick(t):this._onHostClick(t)}_onKeyDown(t){super._onKeyDown(t),t.key==="Tab"?this.$.overlay.restoreFocusOnClose=!1:t.key==="ArrowDown"?(this._onArrowDown(),t.preventDefault()):t.key==="ArrowUp"&&(this._onArrowUp(),t.preventDefault())}_getItemLabel(t){let i=t&&this.itemLabelPath?this.get(this.itemLabelPath,t):void 0;return i==null&&(i=t?t.toString():""),i}_getItemValue(t){let i=t&&this.itemValuePath?this.get(this.itemValuePath,t):void 0;return i===void 0&&(i=t?t.toString():""),i}_onArrowDown(){if(this.opened){const t=this.filteredItems;t&&(this._focusedIndex=Math.min(t.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel())}else this.open()}_onArrowUp(){if(this.opened){if(this._focusedIndex>-1)this._focusedIndex=Math.max(0,this._focusedIndex-1);else{const t=this.filteredItems;t&&(this._focusedIndex=t.length-1)}this._prefillFocusedItemLabel()}else this.open()}_prefillFocusedItemLabel(){if(this._focusedIndex>-1){const t=this.filteredItems[this._focusedIndex];this._inputElementValue=this._getItemLabel(t),this._markAllSelectionRange()}}_setSelectionRange(t,i){this._isInputFocused()&&this.inputElement.setSelectionRange&&this.inputElement.setSelectionRange(t,i)}_markAllSelectionRange(){this._inputElementValue!==void 0&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(this._inputElementValue!==void 0){const t=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(t,t)}}_closeOrCommit(){!this.opened&&!this.loading?this._commitValue():this.close()}_onEnter(t){if(!this.allowCustomValue&&this._inputElementValue!==""&&this._focusedIndex<0){t.preventDefault(),t.stopPropagation();return}this.opened&&(t.preventDefault(),t.stopPropagation()),this._closeOrCommit()}_onEscape(t){this.autoOpenDisabled?this.opened||this.value!==this._inputElementValue&&this._inputElementValue.length>0?(t.stopPropagation(),this._focusedIndex=-1,this.cancel()):this.clearButtonVisible&&!this.opened&&!!this.value&&(t.stopPropagation(),this._clear()):this.opened?(t.stopPropagation(),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel()):this.clearButtonVisible&&!!this.value&&(t.stopPropagation(),this._clear())}_toggleElementChanged(t){t&&(t.addEventListener("mousedown",i=>i.preventDefault()),t.addEventListener("click",()=>{ft&&!this._isInputFocused()&&document.activeElement.blur()}))}_clear(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this._detectAndDispatchChange()}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this._closeOrCommit()}_onOpened(){requestAnimationFrame(()=>{this._scrollIntoView(this._focusedIndex),this._updateActiveDescendant(this._focusedIndex)}),this._lastCommittedValue=this.value}_onClosed(){(!this.loading||this.allowCustomValue)&&this._commitValue()}_commitValue(){if(this._focusedIndex>-1){const t=this.filteredItems[this._focusedIndex];this.selectedItem!==t&&(this.selectedItem=t),this._inputElementValue=this._getItemLabel(this.selectedItem)}else if(this._inputElementValue===""||this._inputElementValue===void 0)this.selectedItem=null,this.allowCustomValue&&(this.value="");else{const t=[...this.filteredItems||[],this.selectedItem],i=t[this.__getItemIndexByLabel(t,this._inputElementValue)];if(this.allowCustomValue&&!i){const r=this._inputElementValue;this._lastCustomValue=r;const o=new CustomEvent("custom-value-set",{detail:r,composed:!0,cancelable:!0,bubbles:!0});this.dispatchEvent(o),o.defaultPrevented||(this.value=r)}else!this.allowCustomValue&&!this.opened&&i?this.value=this._getItemValue(i):this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):this.value||""}this._detectAndDispatchChange(),this._clearSelectionRange(),this.filter=""}get _propertyForValue(){return"value"}_onInput(t){const i=this._inputElementValue,r={};this.filter===i?this._filterChanged(this.filter):r.filter=i,!this.opened&&!this._isClearButton(t)&&!this.autoOpenDisabled&&(r.opened=!0),this.setProperties(r)}_onChange(t){t.stopPropagation()}_itemLabelPathChanged(t){typeof t!="string"&&console.error("You should set itemLabelPath to a valid string")}_filterChanged(t){this._scrollIntoView(0),this._focusedIndex=-1,this.items?this.filteredItems=this._filterItems(this.items,t):this._filteredItemsChanged(this.filteredItems)}_revertInputValue(){this.filter!==""?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_selectedItemChanged(t){if(t==null)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._toggleHasValue(this._hasValue),this._inputElementValue=this.value);else{const i=this._getItemValue(t);if(this.value!==i&&(this.value=i,this.value!==i))return;this._toggleHasValue(!0),this._inputElementValue=this._getItemLabel(t)}this.filteredItems&&(this._focusedIndex=this.filteredItems.indexOf(t))}_valueChanged(t,i){t===""&&i===void 0||(Ri(t)?(this._getItemValue(this.selectedItem)!==t&&this._selectItemForValue(t),!this.selectedItem&&this.allowCustomValue&&(this._inputElementValue=t),this._toggleHasValue(this._hasValue)):this.selectedItem=null,this.filter="",this._lastCommittedValue=void 0)}_detectAndDispatchChange(){this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(t,i){this._ensureItemsOrDataProvider(()=>{this.items=i}),t?this.filteredItems=t.slice(0):i&&(this.filteredItems=null)}_filteredItemsChanged(t,i){const r=i?i[this._focusedIndex]:null,o=this.__getItemIndexByValue(t,this.value);(this.selectedItem===null||this.selectedItem===void 0)&&o>=0&&(this.selectedItem=t[o]);const l=this.__getItemIndexByValue(t,this._getItemValue(r));l>-1?this._focusedIndex=l:this.__setInitialFocusedIndex()}__setInitialFocusedIndex(){const t=this._inputElementValue;t===void 0||t===this._getItemLabel(this.selectedItem)?this._focusedIndex=this.__getItemIndexByLabel(this.filteredItems,this._getItemLabel(this.selectedItem)):this._focusedIndex=this.__getItemIndexByLabel(this.filteredItems,this.filter)}_filterItems(t,i){return t&&t.filter(o=>(i=i?i.toString().toLowerCase():"",this._getItemLabel(o).toString().toLowerCase().indexOf(i)>-1))}_selectItemForValue(t){const i=this.__getItemIndexByValue(this.filteredItems,t),r=this.selectedItem;i>=0?this.selectedItem=this.filteredItems[i]:this.dataProvider&&this.selectedItem===void 0?this.selectedItem=void 0:this.selectedItem=null,this.selectedItem===null&&r===null&&this._selectedItemChanged(this.selectedItem)}_getItemElements(){return Array.from(this._scroller.querySelectorAll(`${this._tagNamePrefix}-item`))}_scrollIntoView(t){!this._scroller||this._scroller.scrollIntoView(t)}__getItemIndexByValue(t,i){return!t||!Ri(i)?-1:Ni(t,r=>this._getItemValue(r)===i)}__getItemIndexByLabel(t,i){return!t||!i?-1:Ni(t,r=>this._getItemLabel(r).toString().toLowerCase()===i.toString().toLowerCase())}_overlaySelectedItemChanged(t){t.stopPropagation(),!(t.detail.item instanceof M)&&this.opened&&(this._focusedIndex=this.filteredItems.indexOf(t.detail.item),this.close())}__onClearButtonMouseDown(t){t.preventDefault(),this.inputElement.focus()}_onFocusout(t){if(!(t.relatedTarget&&t.relatedTarget.localName===`${this._tagNamePrefix}-item`)){if(t.relatedTarget===this.$.overlay){t.composedPath()[0].focus();return}if(!this.readonly&&!this._closeOnBlurIsPrevented){if(!this.opened&&this.allowCustomValue&&this._inputElementValue===this._lastCustomValue){delete this._lastCustomValue;return}this._closeOrCommit()}}}_onTouchend(t){!this.clearElement||t.composedPath()[0]!==this.clearElement||(t.preventDefault(),this._clear())}};/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */c("vaadin-combo-box",ie,{moduleId:"vaadin-combo-box-styles"});class $i extends Fr(ei(qt(Ut(v(w(g)))))){static get is(){return"vaadin-combo-box"}static get template(){return _`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <div class="vaadin-combo-box-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div id="toggleButton" part="toggle-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-combo-box-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[_positionTarget]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-combo-box-overlay>

      <slot name="tooltip"></slot>
    `}static get properties(){return{_positionTarget:{type:Object}}}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new et(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new we(this.inputElement,this._labelController)),this._tooltipController=new O(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setShouldShow(e=>!e.opened),this._positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this._toggleElement=this.$.toggleButton}_setFocused(e){super._setFocused(e),e||this.validate()}_shouldRemoveFocus(e){return e.relatedTarget===this.$.overlay?(e.composedPath()[0].focus(),!1):!0}_onClearButtonClick(e){e.stopPropagation(),this._handleClearButtonClick(e)}_onHostClick(e){const t=e.composedPath();(t.includes(this._labelNode)||t.includes(this._positionTarget))&&super._onHostClick(e)}}customElements.define($i.is,$i);const In=m`
  /* Optical centering */
  :host::before,
  :host::after {
    content: '';
    flex-basis: 0;
    flex-grow: 1;
  }

  :host::after {
    flex-grow: 1.1;
  }

  [part='overlay'] {
    border-radius: var(--lumo-border-radius-l);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-xl);
    background-image: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  [part='content'] {
    padding: var(--lumo-space-l);
  }

  :host(:is([has-header], [has-title])) [part='header'] + [part='content'] {
    padding-top: 0;
  }

  [part='header'],
  [part='header-content'],
  [part='footer'] {
    gap: var(--lumo-space-xs) var(--lumo-space-s);
    line-height: var(--lumo-line-height-s);
  }

  [part='header'] {
    padding: var(--lumo-space-m);
    background-color: var(--lumo-base-color);
    border-radius: var(--lumo-border-radius-l) var(--lumo-border-radius-l) 0 0; /* Needed for Safari */
  }

  [part='footer'] {
    padding: var(--lumo-space-s) var(--lumo-space-m);
    background-color: var(--lumo-contrast-5pct);
    border-radius: 0 0 var(--lumo-border-radius-l) var(--lumo-border-radius-l); /* Needed for Safari */
  }

  [part='title'] {
    font-size: var(--lumo-font-size-xl);
    font-weight: 600;
    color: var(--lumo-header-text-color);
    margin-inline-start: calc(var(--lumo-space-l) - var(--lumo-space-m));
  }

  /* No padding */
  :host([theme~='no-padding']) [part='content'] {
    padding: 0;
  }

  @media (min-height: 320px) {
    :host([overflow~='top']) [part='header'] {
      box-shadow: 0 1px 0 0 var(--lumo-contrast-10pct);
    }
  }

  /* Animations */

  :host([opening]),
  :host([closing]) {
    animation: 0.25s lumo-overlay-dummy-animation;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.12s 0.05s vaadin-dialog-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
  }

  @keyframes vaadin-dialog-enter {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s 0.03s vaadin-dialog-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
  }

  :host([closing]) [part='backdrop'] {
    animation-delay: 0.05s;
  }

  @keyframes vaadin-dialog-exit {
    100% {
      opacity: 0;
      transform: scale(1.02);
    }
  }
`;c("vaadin-dialog-overlay",[Nt,In],{moduleId:"lumo-dialog"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ye(s){return s.touches?s.touches[0]:s}function Dr(s){return s.clientX>=0&&s.clientX<=window.innerWidth&&s.clientY>=0&&s.clientY<=window.innerHeight}/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Sn=s=>class extends s{static get properties(){return{draggable:{type:Boolean,value:!1,reflectToAttribute:!0},_touchDevice:{type:Boolean,value:ft},__dragHandleClassName:{type:String}}}ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._startDrag=this._startDrag.bind(this),this._drag=this._drag.bind(this),this._stopDrag=this._stopDrag.bind(this),this.$.overlay.$.overlay.addEventListener("mousedown",this._startDrag),this.$.overlay.$.overlay.addEventListener("touchstart",this._startDrag)}_startDrag(t){if(!(t.type==="touchstart"&&t.touches.length>1)&&this.draggable&&(t.button===0||t.touches)){const i=this.$.overlay.$.resizerContainer,r=t.target===i,o=t.offsetX>i.clientWidth||t.offsetY>i.clientHeight,l=t.target===this.$.overlay.$.content,a=t.composedPath().some((n,d)=>{if(!n.classList)return!1;const h=n.classList.contains(this.__dragHandleClassName||"draggable"),u=n.classList.contains("draggable-leaf-only"),p=d===0;return u&&p||h&&(!u||p)});if(r&&!o||l||a){a||t.preventDefault(),this._originalBounds=this.$.overlay.getBounds();const n=Ye(t);this._originalMouseCoords={top:n.pageY,left:n.pageX},window.addEventListener("mouseup",this._stopDrag),window.addEventListener("touchend",this._stopDrag),window.addEventListener("mousemove",this._drag),window.addEventListener("touchmove",this._drag),this.$.overlay.$.overlay.style.position!=="absolute"&&this.$.overlay.setBounds(this._originalBounds)}}}_drag(t){const i=Ye(t);if(Dr(i)){const r=this._originalBounds.top+(i.pageY-this._originalMouseCoords.top),o=this._originalBounds.left+(i.pageX-this._originalMouseCoords.left);this.$.overlay.setBounds({top:r,left:o})}}_stopDrag(){window.removeEventListener("mouseup",this._stopDrag),window.removeEventListener("touchend",this._stopDrag),window.removeEventListener("mousemove",this._drag),window.removeEventListener("touchmove",this._drag)}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */c("vaadin-dialog-overlay",m`
    [part='overlay'] {
      position: relative;
      overflow: visible;
      max-height: 100%;
      display: flex;
    }

    [part='content'] {
      box-sizing: border-box;
      height: 100%;
    }

    .resizer-container {
      overflow: auto;
      flex-grow: 1;
      border-radius: inherit; /* prevent child elements being drawn outside part=overlay */
    }

    [part='overlay'][style] .resizer-container {
      min-height: 100%;
      width: 100%;
    }

    :host(:not([resizable])) .resizer {
      display: none;
    }

    :host([resizable]) [part='title'] {
      cursor: move;
      -webkit-user-select: none;
      user-select: none;
    }

    .resizer {
      position: absolute;
      height: 16px;
      width: 16px;
    }

    .resizer.edge {
      height: 8px;
      width: 8px;
      top: -4px;
      right: -4px;
      bottom: -4px;
      left: -4px;
    }

    .resizer.edge.n {
      width: auto;
      bottom: auto;
      cursor: ns-resize;
    }

    .resizer.ne {
      top: -4px;
      right: -4px;
      cursor: nesw-resize;
    }

    .resizer.edge.e {
      height: auto;
      left: auto;
      cursor: ew-resize;
    }

    .resizer.se {
      bottom: -4px;
      right: -4px;
      cursor: nwse-resize;
    }

    .resizer.edge.s {
      width: auto;
      top: auto;
      cursor: ns-resize;
    }

    .resizer.sw {
      bottom: -4px;
      left: -4px;
      cursor: nesw-resize;
    }

    .resizer.edge.w {
      height: auto;
      right: auto;
      cursor: ew-resize;
    }

    .resizer.nw {
      top: -4px;
      left: -4px;
      cursor: nwse-resize;
    }
  `,{moduleId:"vaadin-dialog-resizable-overlay-styles"});const En=s=>class extends s{static get properties(){return{resizable:{type:Boolean,value:!1,reflectToAttribute:!0}}}ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._resizeListeners={start:{},resize:{},stop:{}},this._addResizeListeners()}_addResizeListeners(){["n","e","s","w","nw","ne","se","sw"].forEach(t=>{const i=document.createElement("div");this._resizeListeners.start[t]=r=>this._startResize(r,t),this._resizeListeners.resize[t]=r=>this._resize(r,t),this._resizeListeners.stop[t]=()=>this._stopResize(t),t.length===1&&i.classList.add("edge"),i.classList.add("resizer"),i.classList.add(t),i.addEventListener("mousedown",this._resizeListeners.start[t]),i.addEventListener("touchstart",this._resizeListeners.start[t]),this.$.overlay.$.resizerContainer.appendChild(i)})}_startResize(t,i){if(!(t.type==="touchstart"&&t.touches.length>1)&&(t.button===0||t.touches)){t.preventDefault(),this._originalBounds=this.$.overlay.getBounds();const r=Ye(t);this._originalMouseCoords={top:r.pageY,left:r.pageX},window.addEventListener("mousemove",this._resizeListeners.resize[i]),window.addEventListener("touchmove",this._resizeListeners.resize[i]),window.addEventListener("mouseup",this._resizeListeners.stop[i]),window.addEventListener("touchend",this._resizeListeners.stop[i]),this.$.overlay.$.overlay.style.position!=="absolute"&&this.$.overlay.setBounds(this._originalBounds)}}_resize(t,i){const r=Ye(t);Dr(r)&&i.split("").forEach(l=>{switch(l){case"n":{const a=this._originalBounds.height-(r.pageY-this._originalMouseCoords.top),n=this._originalBounds.top+(r.pageY-this._originalMouseCoords.top);a>40&&this.$.overlay.setBounds({top:n,height:a});break}case"e":{const a=this._originalBounds.width+(r.pageX-this._originalMouseCoords.left);a>40&&this.$.overlay.setBounds({width:a});break}case"s":{const a=this._originalBounds.height+(r.pageY-this._originalMouseCoords.top);a>40&&this.$.overlay.setBounds({height:a});break}case"w":{const a=this._originalBounds.width-(r.pageX-this._originalMouseCoords.left),n=this._originalBounds.left+(r.pageX-this._originalMouseCoords.left);a>40&&this.$.overlay.setBounds({left:n,width:a});break}}})}_stopResize(t){window.removeEventListener("mousemove",this._resizeListeners.resize[t]),window.removeEventListener("touchmove",this._resizeListeners.resize[t]),window.removeEventListener("mouseup",this._resizeListeners.stop[t]),window.removeEventListener("touchend",this._resizeListeners.stop[t]),this.dispatchEvent(new CustomEvent("resize",{detail:this._getResizeDimensions()}))}_getResizeDimensions(){const t=this.$.overlay.$.resizerContainer.scrollTop,{width:i,height:r}=getComputedStyle(this.$.overlay.$.overlay),o=this.$.overlay.$.content;o.setAttribute("style","position: absolute; top: 0; right: 0; bottom: 0; left: 0; box-sizing: content-box; height: auto;");const{width:l,height:a}=getComputedStyle(o);return o.removeAttribute("style"),this.$.overlay.$.resizerContainer.scrollTop=t,{width:i,height:r,contentWidth:l,contentHeight:a}}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */c("vaadin-dialog-overlay",m`
    [part='header'],
    [part='header-content'],
    [part='footer'] {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      flex: none;
      pointer-events: none;
      z-index: 1;
    }

    [part='header'] {
      flex-wrap: nowrap;
    }

    ::slotted([slot='header-content']),
    ::slotted([slot='title']),
    ::slotted([slot='footer']) {
      display: contents;
      pointer-events: auto;
    }

    ::slotted([slot='title']) {
      font: inherit !important;
      overflow-wrap: anywhere;
    }

    [part='header-content'] {
      flex: 1;
    }

    :host([has-title]) [part='header-content'],
    [part='footer'] {
      justify-content: flex-end;
    }

    :host(:not([has-title]):not([has-header])) [part='header'],
    :host(:not([has-header])) [part='header-content'],
    :host(:not([has-title])) [part='title'],
    :host(:not([has-footer])) [part='footer'] {
      display: none !important;
    }

    :host(:is([has-title], [has-header], [has-footer])) [part='content'] {
      height: auto;
    }

    @media (min-height: 320px) {
      :host(:is([has-title], [has-header], [has-footer])) .resizer-container {
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      :host(:is([has-title], [has-header], [has-footer])) [part='content'] {
        flex: 1;
        overflow: auto;
      }
    }

    /*
      NOTE(platosha): Make some min-width to prevent collapsing of the content
      taking the parent width, e. g., <vaadin-grid> and such.
    */
    [part='content'] {
      min-width: 12em; /* matches the default <vaadin-text-field> width */
    }

    :host([has-bounds-set]) [part='overlay'] {
      max-width: none;
    }
  `,{moduleId:"vaadin-dialog-overlay-styles"});let le;class kt extends ee{static get is(){return"vaadin-dialog-overlay"}static get template(){if(!le){le=super.template.cloneNode(!0);const e=le.content.querySelector('[part="content"]'),t=le.content.querySelector('[part="overlay"]'),i=document.createElement("section");i.id="resizerContainer",i.classList.add("resizer-container"),i.appendChild(e),t.appendChild(i);const r=document.createElement("header");r.setAttribute("part","header"),i.insertBefore(r,e);const o=document.createElement("div");o.setAttribute("part","title"),r.appendChild(o);const l=document.createElement("slot");l.setAttribute("name","title"),o.appendChild(l);const a=document.createElement("div");a.setAttribute("part","header-content"),r.appendChild(a);const n=document.createElement("slot");n.setAttribute("name","header-content"),a.appendChild(n);const d=document.createElement("footer");d.setAttribute("part","footer"),i.appendChild(d);const h=document.createElement("slot");h.setAttribute("name","footer"),d.appendChild(h)}return le}static get observers(){return["_headerFooterRendererChange(headerRenderer, footerRenderer, opened)","_headerTitleChanged(headerTitle, opened)"]}static get properties(){return{modeless:Boolean,withBackdrop:Boolean,headerTitle:String,headerRenderer:Function,footerRenderer:Function}}ready(){super.ready(),this.__resizeObserver=new ResizeObserver(()=>{this.__updateOverflow()}),this.__resizeObserver.observe(this.$.resizerContainer),this.$.content.addEventListener("scroll",()=>{this.__updateOverflow()})}__createContainer(e){const t=document.createElement("div");return t.setAttribute("slot",e),t}__clearContainer(e){e.innerHTML="",delete e._$litPart$}__initContainer(e,t){return e?this.__clearContainer(e):e=this.__createContainer(t),e}_headerFooterRendererChange(e,t,i){const r=this.__oldHeaderRenderer!==e;this.__oldHeaderRenderer=e;const o=this.__oldFooterRenderer!==t;this.__oldFooterRenderer=t;const l=this._oldOpenedFooterHeader!==i;this._oldOpenedFooterHeader=i,this.toggleAttribute("has-header",!!e),this.toggleAttribute("has-footer",!!t),r&&(e?this.headerContainer=this.__initContainer(this.headerContainer,"header-content"):this.headerContainer&&(this.headerContainer.remove(),this.headerContainer=null,this.__updateOverflow())),o&&(t?this.footerContainer=this.__initContainer(this.footerContainer,"footer"):this.footerContainer&&(this.footerContainer.remove(),this.footerContainer=null,this.__updateOverflow())),(e&&(r||l)||t&&(o||l))&&i&&this.requestContentUpdate()}_headerTitleChanged(e,t){this.toggleAttribute("has-title",!!e),t&&(e||this._oldHeaderTitle)&&this.requestContentUpdate(),this._oldHeaderTitle=e}_headerTitleRenderer(){this.headerTitle?(this.headerTitleElement||(this.headerTitleElement=document.createElement("h2"),this.headerTitleElement.setAttribute("slot","title"),this.headerTitleElement.classList.add("draggable")),this.appendChild(this.headerTitleElement),this.headerTitleElement.textContent=this.headerTitle):this.headerTitleElement&&(this.headerTitleElement.remove(),this.headerTitleElement=null)}requestContentUpdate(){super.requestContentUpdate(),this.headerContainer&&(this.headerContainer.parentElement||this.appendChild(this.headerContainer),this.headerRenderer&&this.headerRenderer.call(this.owner,this.headerContainer,this.owner)),this.footerContainer&&(this.footerContainer.parentElement||this.appendChild(this.footerContainer),this.footerRenderer&&this.footerRenderer.call(this.owner,this.footerContainer,this.owner)),this._headerTitleRenderer(),this.__updateOverflow()}setBounds(e){const t=this.$.overlay,i={...e};t.style.position!=="absolute"&&(t.style.position="absolute",this.setAttribute("has-bounds-set",""),this.__forceSafariReflow()),Object.keys(i).forEach(r=>{typeof i[r]=="number"&&(i[r]=`${i[r]}px`)}),Object.assign(t.style,i)}getBounds(){const e=this.$.overlay.getBoundingClientRect(),t=this.getBoundingClientRect(),i=e.top-t.top,r=e.left-t.left,o=e.width,l=e.height;return{top:i,left:r,width:o,height:l}}__forceSafariReflow(){const e=this.$.resizerContainer.scrollTop,t=this.$.overlay;t.style.display="block",requestAnimationFrame(()=>{t.style.display="",this.$.resizerContainer.scrollTop=e})}__updateOverflow(){let e="";if(this.hasAttribute("has-header")||this.hasAttribute("has-footer")||this.headerTitle){const i=this.$.content;i.scrollTop>0&&(e+=" top"),i.scrollTop<i.scrollHeight-i.clientHeight&&(e+=" bottom")}const t=e.trim();t.length>0&&this.getAttribute("overflow")!==t?this.setAttribute("overflow",t):t.length===0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}}customElements.define(kt.is,kt);class Tt extends Ks(w(Sn(En(g)))){static get template(){return _`
      <style>
        :host {
          display: none !important;
        }
      </style>

      <vaadin-dialog-overlay
        id="overlay"
        header-title="[[headerTitle]]"
        on-opened-changed="_onOverlayOpened"
        on-mousedown="_bringOverlayToFront"
        on-touchstart="_bringOverlayToFront"
        theme$="[[_theme]]"
        modeless="[[modeless]]"
        with-backdrop="[[!modeless]]"
        resizable$="[[resizable]]"
        focus-trap
      ></vaadin-dialog-overlay>
    `}static get is(){return"vaadin-dialog"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},noCloseOnOutsideClick:{type:Boolean,value:!1},noCloseOnEsc:{type:Boolean,value:!1},ariaLabel:{type:String,value:""},renderer:Function,headerTitle:String,headerRenderer:Function,footerRenderer:Function,modeless:{type:Boolean,value:!1}}}static get observers(){return["_openedChanged(opened)","_ariaLabelChanged(ariaLabel, headerTitle)","_rendererChanged(renderer, headerRenderer, footerRenderer)"]}ready(){super.ready(),this.$.overlay.setAttribute("role","dialog"),this.$.overlay.addEventListener("vaadin-overlay-outside-click",this._handleOutsideClick.bind(this)),this.$.overlay.addEventListener("vaadin-overlay-escape-press",this._handleEscPress.bind(this)),ye(this)}requestContentUpdate(){this.$&&this.$.overlay.requestContentUpdate()}_rendererChanged(e,t,i){this.$.overlay.setProperties({owner:this,renderer:e,headerRenderer:t,footerRenderer:i})}connectedCallback(){super.connectedCallback(),this.__restoreOpened&&(this.opened=!0)}disconnectedCallback(){super.disconnectedCallback(),this.__restoreOpened=this.opened,this.opened=!1}_openedChanged(e){this.$.overlay.opened=e}_ariaLabelChanged(e,t){e||t?this.$.overlay.setAttribute("aria-label",e||t):this.$.overlay.removeAttribute("aria-label")}_onOverlayOpened(e){e.detail.value===!1&&(this.opened=!1)}_handleOutsideClick(e){this.noCloseOnOutsideClick&&e.preventDefault()}_handleEscPress(e){this.noCloseOnEsc&&e.preventDefault()}_bringOverlayToFront(){this.modeless&&this.$.overlay.bringToFront()}}customElements.define(Tt.is,Tt);c("vaadin-confirm-dialog-overlay",m`
    [part='header'] ::slotted(h3) {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
      margin-inline-start: calc(var(--lumo-space-l) - var(--lumo-space-m));
    }

    [part='message'] {
      width: 25em;
      min-width: 100%;
      max-width: 100%;
    }

    ::slotted([slot$='button'][theme~='tertiary']) {
      padding-left: var(--lumo-space-s);
      padding-right: var(--lumo-space-s);
    }

    [part='cancel-button'] {
      flex-grow: 1;
    }

    @media (max-width: 360px) {
      [part='footer'] {
        flex-direction: column-reverse;
        align-items: stretch;
        padding: var(--lumo-space-s) var(--lumo-space-l);
        gap: var(--lumo-space-s);
      }

      ::slotted([slot$='button']) {
        width: 100%;
        margin: 0;
      }
    }
  `,{moduleId:"lumo-confirm-dialog-overlay"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */c("vaadin-confirm-dialog-overlay",m`
    :host {
      --_vaadin-confirm-dialog-content-width: auto;
      --_vaadin-confirm-dialog-content-height: auto;
    }

    [part='overlay'] {
      width: var(--_vaadin-confirm-dialog-content-width);
      height: var(--_vaadin-confirm-dialog-content-height);
    }

    /* Make buttons clickable */
    [part='footer'] > * {
      pointer-events: all;
    }
  `,{moduleId:"vaadin-confirm-dialog-overlay-styles"});let Y;const kn=_`
  <div part="cancel-button">
    <slot name="cancel-button"></slot>
  </div>
  <div part="reject-button">
    <slot name="reject-button"></slot>
  </div>
  <div part="confirm-button">
    <slot name="confirm-button"></slot>
  </div>
`;class Hi extends kt{static get is(){return"vaadin-confirm-dialog-overlay"}static get template(){if(!Y){Y=super.template.cloneNode(!0);const e=Y.content.querySelector('[part="header"]');e.innerHTML="";const t=document.createElement("slot");t.setAttribute("name","header"),e.appendChild(t);const i=Y.content.querySelector('[part="content"]'),r=i.querySelector("slot:not([name])"),o=document.createElement("div");o.setAttribute("part","message"),i.appendChild(o),o.appendChild(r);const l=Y.content.querySelector('[part="footer"]');l.setAttribute("role","toolbar");const a=l.querySelector("slot");l.removeChild(a),l.appendChild(kn.content.cloneNode(!0))}return Y}_finishClosing(){super._finishClosing(),this.dispatchEvent(new CustomEvent("vaadin-confirm-dialog-close"))}_headerFooterRendererChange(e,t,i){super._headerFooterRendererChange(e,t,i),this.setAttribute("has-header",""),this.setAttribute("has-footer","")}}customElements.define(Hi.is,Hi);class qi extends Tt{static get is(){return"vaadin-confirm-dialog-dialog"}static get template(){return _`
      <style>
        :host {
          display: none;
        }
      </style>

      <vaadin-confirm-dialog-overlay
        id="overlay"
        on-opened-changed="_onOverlayOpened"
        on-mousedown="_bringOverlayToFront"
        on-touchstart="_bringOverlayToFront"
        theme$="[[_theme]]"
        modeless="[[modeless]]"
        with-backdrop="[[!modeless]]"
        resizable$="[[resizable]]"
        focus-trap
      ></vaadin-confirm-dialog-overlay>
    `}}customElements.define(qi.is,qi);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vr=ve(s=>class extends s{get slots(){return{}}ready(){super.ready(),this._connectSlotMixin()}_connectSlotMixin(){Object.keys(this.slots).forEach(t=>{if(!(this._getDirectSlotChild(t)!==void 0)){const r=this.slots[t],o=r();o instanceof Element&&(t!==""&&o.setAttribute("slot",t),this.appendChild(o))}})}_getDirectSlotChild(t){return Array.from(this.childNodes).find(i=>i.nodeType===Node.ELEMENT_NODE&&i.slot===t||i.nodeType===Node.TEXT_NODE&&i.textContent.trim()&&t==="")}});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ui extends Vr(w(Ks(g))){static get template(){return _`
      <style>
        :host,
        [hidden] {
          display: none !important;
        }
      </style>

      <vaadin-confirm-dialog-dialog
        id="dialog"
        opened="{{opened}}"
        aria-label="[[_getAriaLabel(header)]]"
        theme$="[[_theme]]"
        no-close-on-outside-click
        no-close-on-esc="[[noCloseOnEsc]]"
      ></vaadin-confirm-dialog-dialog>

      <div hidden>
        <slot name="header"></slot>
        <slot></slot>
        <slot name="cancel-button"></slot>
        <slot name="reject-button"></slot>
        <slot name="confirm-button"></slot>
      </div>
    `}static get is(){return"vaadin-confirm-dialog"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},header:{type:String,value:""},message:{type:String,value:""},confirmText:{type:String,value:"Confirm"},confirmTheme:{type:String,value:"primary"},noCloseOnEsc:{type:Boolean,value:!1},reject:{type:Boolean,reflectToAttribute:!0,value:!1},rejectText:{type:String,value:"Reject"},rejectTheme:{type:String,value:"error tertiary"},cancel:{type:Boolean,reflectToAttribute:!0,value:!1},cancelText:{type:String,value:"Cancel"},cancelTheme:{type:String,value:"tertiary"},_cancelButton:{type:HTMLElement,observer:"_cancelButtonChanged"},_confirmButton:{type:HTMLElement,observer:"_confirmButtonChanged"},_headerNode:{type:HTMLElement},_messageNode:{type:HTMLElement},_rejectButton:{type:HTMLElement,observer:"_rejectButtonChanged"}}}static get observers(){return["__updateConfirmButton(_confirmButton, confirmText, confirmTheme)","__updateCancelButton(_cancelButton, cancelText, cancelTheme, cancel)","__updateHeaderNode(_headerNode, header)","__updateMessageNode(_messageNode, message)","__updateRejectButton(_rejectButton, rejectText, rejectTheme, reject)"]}get slots(){return{...super.slots,header:()=>{const e=document.createElement("h3");return this.__defaultHeader=e,e},"":()=>{const e=document.createElement("div");return this.__defaultMessage=e,e},"cancel-button":()=>{const e=document.createElement("vaadin-button");return e.setAttribute("theme",this.cancelTheme),e.textContent=this.cancelText,e._isDefaultButton=!0,e},"reject-button":()=>{const e=document.createElement("vaadin-button");return e.setAttribute("theme",this.rejectTheme),e.textContent=this.rejectText,e._isDefaultButton=!0,e},"confirm-button":()=>{const e=document.createElement("vaadin-button");return e._isDefaultButton=!0,e}}}constructor(){super(),this.__slottedNodes=[],this._observer=new T(this,e=>{this.__onDomChange(e.addedNodes)})}ready(){super.ready(),this.__boundCancel=this._cancel.bind(this),this.__boundConfirm=this._confirm.bind(this),this.__boundReject=this._reject.bind(this),this._overlayElement=this.$.dialog.$.overlay,this._overlayElement.addEventListener("vaadin-overlay-escape-press",this._escPressed.bind(this)),this._overlayElement.addEventListener("vaadin-overlay-open",()=>this.__onDialogOpened()),this._overlayElement.addEventListener("vaadin-confirm-dialog-close",()=>this.__onDialogClosed()),this._dimensions&&Object.keys(this._dimensions).forEach(e=>{this._setDimension(e,this._dimensions[e])})}__onDialogOpened(){const e=this._overlayElement;this.__slottedNodes.forEach(i=>{e.appendChild(i)});const t=e.querySelector('[slot="confirm-button"]');t&&t.focus()}__onDialogClosed(){const e=this.__slottedNodes;this.__slottedNodes=[],e.forEach(t=>{this.appendChild(t)})}__onDomChange(e){e.forEach(t=>{this.__slottedNodes.push(t);const i=t.nodeType===Node.ELEMENT_NODE,r=i?t.getAttribute("slot"):"";if(r)if(r.indexOf("button")>=0){const[o]=r.split("-");this[`_${o}Button`]=t}else r==="header"&&(this._headerNode=t);else(t.nodeType===Node.TEXT_NODE&&t.textContent.trim()!==""||i&&t.slot==="")&&(this._messageNode=t)})}_cancelButtonChanged(e,t){this.__setupSlottedButton(e,t,this.__boundCancel)}_confirmButtonChanged(e,t){this.__setupSlottedButton(e,t,this.__boundConfirm)}_rejectButtonChanged(e,t){this.__setupSlottedButton(e,t,this.__boundReject)}__setupSlottedButton(e,t,i){t&&t.parentElement&&t.remove(),e.addEventListener("click",i)}__updateCancelButton(e,t,i,r){e&&(e._isDefaultButton&&(e.textContent=t,e.setAttribute("theme",i)),e.toggleAttribute("hidden",!r))}__updateConfirmButton(e,t,i){e&&e._isDefaultButton&&(e.textContent=t,e.setAttribute("theme",i))}__updateHeaderNode(e,t){e&&e===this.__defaultHeader&&(e.textContent=t)}__updateMessageNode(e,t){e&&e===this.__defaultMessage&&(e.textContent=t)}__updateRejectButton(e,t,i,r){e&&(e._isDefaultButton&&(e.textContent=t,e.setAttribute("theme",i)),e.toggleAttribute("hidden",!r))}_escPressed(e){e.defaultPrevented||this._cancel()}_confirm(){this.dispatchEvent(new CustomEvent("confirm")),this.opened=!1}_cancel(){this.dispatchEvent(new CustomEvent("cancel")),this.opened=!1}_reject(){this.dispatchEvent(new CustomEvent("reject")),this.opened=!1}_getAriaLabel(e){return e||"confirmation"}_setWidth(e){this._setDimensionIfAttached("width",e)}_setHeight(e){this._setDimensionIfAttached("height",e)}_setDimensionIfAttached(e,t){this._overlayElement?this._setDimension(e,t):(this._dimensions=this._dimensions||{},this._dimensions[e]=t)}_setDimension(e,t){this._overlayElement.style.setProperty(`--_vaadin-confirm-dialog-content-${e}`,t)}}customElements.define(Ui.is,Ui);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Rr=m`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    /* align with text-field height + vertical paddings */
    line-height: calc(var(--lumo-text-field-size) + 2 * var(--lumo-space-xs));
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: 0;
  }

  :host::before {
    margin-top: var(--lumo-space-xs);
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  /* align with text-field label */
  :host([has-label]) [part='label'] {
    padding-bottom: calc(0.5em - var(--lumo-space-xs));
  }

  :host(:not([has-label])) [part='label'],
  :host(:not([has-label]))::before {
    display: none;
  }

  /* align with text-field error message */
  :host([has-error-message]) [part='error-message']::before {
    height: calc(0.4em - var(--lumo-space-xs));
  }

  :host([focused]:not([readonly]):not([disabled])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='label'],
  :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }

  /* Disabled */
  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small'][has-label]) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small'][has-label]) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* When custom-field is used with components without outer margin */
  :host([theme~='whitespace'][has-label]) [part='label'] {
    padding-bottom: 0.5em;
  }
`;c("vaadin-custom-field",[$t,Ht,Rr],{moduleId:"lumo-custom-field"});/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Wi extends Xe(W(Ft(v(w(g))))){static get is(){return"vaadin-custom-field"}static get template(){return _`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
          /* Size and position this element on the same vertical position as the input-field element
           to make vertical align for the host element work as expected */
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-custom-field-container {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .inputs-wrapper {
          flex: none;
        }
      </style>

      <div class="vaadin-custom-field-container">
        <div part="label" on-click="focus">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div class="inputs-wrapper" on-change="__onInputChange">
          <slot id="slot"></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{name:String,value:{type:String,observer:"__valueChanged",notify:!0},inputs:{type:Array,readOnly:!0},formatValue:{type:Function},parseValue:{type:Function},i18n:{type:Object,value:()=>({parseValue(e){return e.split("	")},formatValue(e){return e.join("	")}})}}}connectedCallback(){super.connectedCallback(),this.__observer&&this.__observer.connect()}disconnectedCallback(){super.disconnectedCallback(),this.__observer&&this.__observer.disconnect()}ready(){super.ready(),this.setAttribute("role","group"),this.ariaTarget=this,this.__setInputsFromSlot(),this.__observer=new T(this.$.slot,()=>{this.__setInputsFromSlot()}),this._tooltipController=new O(this),this.addController(this._tooltipController),this._tooltipController.setShouldShow(e=>!(e.inputs||[]).some(i=>i.opened))}focus(){this.inputs&&this.inputs[0]&&this.inputs[0].focus()}_setFocused(e){super._setFocused(e),e||this.validate()}_shouldRemoveFocus(e){const{relatedTarget:t}=e;return!this.inputs.some(i=>t===(i.focusElement||i))}checkValidity(){return!(this.inputs.filter(t=>!(t.validate||t.checkValidity).call(t)).length||this.required&&!this.value.trim())}_onKeyDown(e){e.key==="Tab"&&(this.inputs.indexOf(e.target)<this.inputs.length-1&&!e.shiftKey||this.inputs.indexOf(e.target)>0&&e.shiftKey?this.dispatchEvent(new CustomEvent("internal-tab")):this.__setValue())}__onInputChange(e){e.stopPropagation(),this.__setValue(),this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!1,detail:{value:this.value}}))}__setValue(){this.__settingValue=!0;const e=this.formatValue||this.i18n.formatValue;this.value=e.apply(this,[this.inputs.map(t=>t.value)]),this.__settingValue=!1}__queryAllAssignedElements(e){const t=[];let i;return e.tagName==="SLOT"?i=e.assignedElements({flatten:!0}):(t.push(e),i=Array.from(e.children)),i.forEach(r=>t.push(...this.__queryAllAssignedElements(r))),t}__isInput(e){return!(e.getAttribute("slot")==="input"||e.getAttribute("slot")==="textarea")&&(e.validate||e.checkValidity)}__getInputsFromSlot(){return this.__queryAllAssignedElements(this.$.slot).filter(e=>this.__isInput(e))}__setInputsFromSlot(){this._setInputs(this.__getInputsFromSlot()),this.__setValue()}__toggleHasValue(e){this.toggleAttribute("has-value",e!==null&&e.trim()!=="")}__valueChanged(e,t){if(this.__settingValue||!this.inputs)return;this.__toggleHasValue(e);const r=(this.parseValue||this.i18n.parseValue).apply(this,[e]);if(!r||r.length===0){console.warn("Value parser has not provided values array");return}this.inputs.forEach((o,l)=>{o.value=r[l]}),t!==void 0&&this.validate()}}customElements.define(Wi.is,Wi);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Tn=m`
  [part~='toggle-button']::before {
    content: var(--lumo-icons-clock);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;c("vaadin-time-picker",[$,Tn],{moduleId:"lumo-time-picker"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ji extends Ue{static get is(){return"vaadin-time-picker-item"}}customElements.define(ji.is,ji);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Yi extends je{static get is(){return"vaadin-time-picker-scroller"}}customElements.define(Yi.is,Yi);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */c("vaadin-time-picker-overlay",m`
    #overlay {
      width: var(--vaadin-time-picker-overlay-width, var(--_vaadin-time-picker-overlay-default-width, auto));
    }
  `,{moduleId:"vaadin-time-picker-overlay-styles"});class Gi extends We{static get is(){return"vaadin-time-picker-overlay"}}customElements.define(Gi.is,Gi);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ki extends ei(v(g)){static get is(){return"vaadin-time-picker-combo-box"}static get template(){return _`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-time-picker-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[positionTarget]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-time-picker-overlay>
    `}static get properties(){return{positionTarget:{type:Object}}}get _tagNamePrefix(){return"vaadin-time-picker"}get clearElement(){return this.querySelector('[part="clear-button"]')}ready(){super.ready(),this.allowCustomValue=!0,this._toggleElement=this.querySelector(".toggle-button"),this.setAttribute("dir","ltr")}}customElements.define(Ki.is,Ki);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ji="00:00:00.000",Xi="23:59:59.999";c("vaadin-time-picker",ie,{moduleId:"vaadin-time-picker-styles"});class Q extends qt(Ut(v(w(g)))){static get is(){return"vaadin-time-picker"}static get template(){return _`
      <style>
        /* See https://github.com/vaadin/vaadin-time-picker/issues/145 */
        :host([dir='rtl']) [part='input-field'] {
          direction: ltr;
        }

        :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
          direction: rtl;
          text-align: left;
        }

        [part~='toggle-button'] {
          cursor: pointer;
        }
      </style>

      <div class="vaadin-time-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-time-picker-combo-box
          id="comboBox"
          filtered-items="[[__dropdownItems]]"
          value="{{_comboBoxValue}}"
          opened="{{opened}}"
          disabled="[[disabled]]"
          readonly="[[readonly]]"
          clear-button-visible="[[clearButtonVisible]]"
          auto-open-disabled="[[autoOpenDisabled]]"
          position-target="[[_inputContainer]]"
          theme$="[[_theme]]"
          on-change="__onComboBoxChange"
        >
          <vaadin-input-container
            part="input-field"
            readonly="[[readonly]]"
            disabled="[[disabled]]"
            invalid="[[invalid]]"
            theme$="[[_theme]]"
          >
            <slot name="prefix" slot="prefix"></slot>
            <slot name="input"></slot>
            <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
            <div id="toggleButton" class="toggle-button" part="toggle-button" slot="suffix" aria-hidden="true"></div>
          </vaadin-input-container>
        </vaadin-time-picker-combo-box>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}static get properties(){return{value:{type:String,notify:!0,value:""},opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},min:{type:String,value:""},max:{type:String,value:""},step:{type:Number},autoOpenDisabled:Boolean,__dropdownItems:{type:Array},i18n:{type:Object,value:()=>({formatTime:e=>{if(!e)return;const t=(r=0,o="00")=>(o+r).substr((o+r).length-o.length);let i=`${t(e.hours)}:${t(e.minutes)}`;return e.seconds!==void 0&&(i+=`:${t(e.seconds)}`),e.milliseconds!==void 0&&(i+=`.${t(e.milliseconds,"000")}`),i},parseTime:e=>{const t="(\\d|[0-1]\\d|2[0-3])",i="(\\d|[0-5]\\d)",r=i,o="(\\d{1,3})",a=new RegExp(`^${t}(?::${i}(?::${r}(?:\\.${o})?)?)?$`).exec(e);if(a){if(a[4])for(;a[4].length<3;)a[4]+="0";return{hours:a[1],minutes:a[2],seconds:a[3],milliseconds:a[4]}}}})},_comboBoxValue:{type:String,observer:"__comboBoxValueChanged"},_inputContainer:Object}}static get observers(){return["__updateDropdownItems(i18n.*, min, max, step)"]}static get constraints(){return[...super.constraints,"min","max"]}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new et(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new we(this.inputElement,this._labelController)),this._inputContainer=this.shadowRoot.querySelector('[part~="input-field"]'),this._tooltipController=new O(this),this._tooltipController.setShouldShow(e=>!e.opened),this._tooltipController.setPosition("top"),this.addController(this._tooltipController)}_inputElementChanged(e){super._inputElementChanged(e),e&&this.$.comboBox._setInputElement(e)}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.opened=!1}checkValidity(){return!!(this.inputElement.checkValidity()&&(!this.value||this._timeAllowed(this.i18n.parseTime(this.value)))&&(!this._comboBoxValue||this.i18n.parseTime(this._comboBoxValue)))}_setFocused(e){super._setFocused(e),e||this.validate()}__validDayDivisor(e){return!e||24*3600%e===0||e<1&&e%1*1e3%1===0}_onKeyDown(e){if(super._onKeyDown(e),this.readonly||this.disabled||this.__dropdownItems.length)return;const t=this.__validDayDivisor(this.step)&&this.step||60;e.keyCode===40?this.__onArrowPressWithStep(-t):e.keyCode===38&&this.__onArrowPressWithStep(t)}_onEscape(){}__onArrowPressWithStep(e){const t=this.__addStep(this.__getMsec(this.__memoValue),e,!0);this.__memoValue=t,this.inputElement.value=this.i18n.formatTime(this.__validateTime(t)),this.__dispatchChange()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__getMsec(e){let t=(e&&e.hours||0)*60*60*1e3;return t+=(e&&e.minutes||0)*60*1e3,t+=(e&&e.seconds||0)*1e3,t+=e&&parseInt(e.milliseconds)||0,t}__getSec(e){let t=(e&&e.hours||0)*60*60;return t+=(e&&e.minutes||0)*60,t+=e&&e.seconds||0,t+=e&&e.milliseconds/1e3||0,t}__addStep(e,t,i){e===0&&t<0&&(e=24*60*60*1e3);const r=t*1e3,o=e%r;r<0&&o&&i?e-=o:r>0&&o&&i?e-=o-r:e+=r;const l=Math.floor(e/1e3/60/60);e-=l*1e3*60*60;const a=Math.floor(e/1e3/60);e-=a*1e3*60;const n=Math.floor(e/1e3);return e-=n*1e3,{hours:l<24?l:0,minutes:a,seconds:n,milliseconds:e}}__updateDropdownItems(e,t,i,r){const o=this.__validateTime(this.__parseISO(t||Ji)),l=this.__getSec(o),a=this.__validateTime(this.__parseISO(i||Xi)),n=this.__getSec(a);if(this.__adjustValue(l,n,o,a),this.__dropdownItems=this.__generateDropdownList(l,n,r),r!==this.__oldStep){this.__oldStep=r;const d=this.__validateTime(this.__parseISO(this.value));this.__updateValue(d)}this.value&&(this._comboBoxValue=this.i18n.formatTime(this.i18n.parseTime(this.value)))}__generateDropdownList(e,t,i){if(i<15*60||!this.__validDayDivisor(i))return[];const r=[];i=i||3600;let o=-i+e;for(;o+i>=e&&o+i<=t;){const l=this.__validateTime(this.__addStep(o*1e3,i));o+=i;const a=this.i18n.formatTime(l);r.push({label:a,value:a})}return r}__adjustValue(e,t,i,r){if(!this.__memoValue)return;const o=this.__getSec(this.__memoValue);o<e?this.__updateValue(i):o>t&&this.__updateValue(r)}_valueChanged(e,t){const i=this.__memoValue=this.__parseISO(e),r=this.__formatISO(i)||"";e!==""&&e!==null&&!i?this.value=t===void 0?"":t:e!==r?this.value=r:this.__keepInvalidInput?delete this.__keepInvalidInput:this.__updateInputValue(i),this._toggleHasValue(this._hasValue)}__comboBoxValueChanged(e,t){if(e===""&&t===void 0)return;const i=this.i18n.parseTime(e),r=this.i18n.formatTime(i)||"";i?e!==r?this._comboBoxValue=r:this.__updateValue(i):(e!==""&&(this.__keepInvalidInput=!0),this.value="")}__onComboBoxChange(e){e.stopPropagation(),this.validate(),this.__dispatchChange()}__updateValue(e){const t=this.__formatISO(this.__validateTime(e))||"";this.value=t}__updateInputValue(e){const t=this.i18n.formatTime(this.__validateTime(e))||"";this._comboBoxValue=t}__validateTime(e){return e&&(e.hours=parseInt(e.hours),e.minutes=parseInt(e.minutes||0),e.seconds=this.__stepSegment<3?void 0:parseInt(e.seconds||0),e.milliseconds=this.__stepSegment<4?void 0:parseInt(e.milliseconds||0)),e}get __stepSegment(){if(this.step%3600===0)return 1;if(this.step%60===0||!this.step)return 2;if(this.step%1===0)return 3;if(this.step<1)return 4}__formatISO(e){return Q.properties.i18n.value().formatTime(e)}__parseISO(e){return Q.properties.i18n.value().parseTime(e)}_timeAllowed(e){const t=this.i18n.parseTime(this.min||Ji),i=this.i18n.parseTime(this.max||Xi);return(!this.__getMsec(t)||this.__getMsec(e)>=this.__getMsec(t))&&(!this.__getMsec(i)||this.__getMsec(e)<=this.__getMsec(i))}_onClearButtonClick(){}_onChange(){}_onInput(){this._checkInputValue()}}customElements.define(Q.is,Q);c("vaadin-date-time-picker",[$t,Ht,Rr],{moduleId:"lumo-date-time-picker"});c("vaadin-date-time-picker-date-picker",m`
    :host {
      margin-right: 2px;
    }

    /* RTL specific styles */
    :host([dir='rtl']) {
      margin-right: auto;
      margin-left: 2px;
    }

    [part~='input-field'] {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    /* RTL specific styles */
    :host([dir='rtl']) [part~='input-field'] {
      border-radius: var(--lumo-border-radius-m);
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  `,{moduleId:"lumo-date-time-picker-date-picker"});c("vaadin-date-time-picker-time-picker",m`
    [part~='input-field'] {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    /* RTL specific styles */
    :host([dir='rtl']) [part~='input-field'] {
      border-radius: var(--lumo-border-radius-m);
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  `,{moduleId:"lumo-date-time-picker-time-picker"});/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Qi extends So{static get is(){return"vaadin-date-time-picker-date-picker"}}customElements.define(Qi.is,Qi);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Zi extends Q{static get is(){return"vaadin-date-time-picker-time-picker"}}customElements.define(Zi.is,Zi);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */c("vaadin-date-time-picker",ie,{moduleId:"vaadin-date-time-picker"});function Nr(s,e){for(;s;){if(s.properties&&s.properties[e])return s.properties[e];s=Object.getPrototypeOf(s)}}const $r=customElements.get("vaadin-date-time-picker-date-picker"),Pn=customElements.get("vaadin-date-time-picker-time-picker"),Hr=Nr($r,"i18n").value(),Me=Nr(Pn,"i18n").value(),es=Object.keys(Hr),ts=Object.keys(Me);class is extends Xe(Vr(Qe(W(v(w(g)))))){static get template(){return _`
      <style>
        .vaadin-date-time-picker-container {
          --vaadin-field-default-width: auto;
        }

        .slots {
          display: flex;
          --vaadin-field-default-width: 12em;
        }

        .slots ::slotted([slot='date-picker']) {
          min-width: 0;
          flex: 1 1 auto;
        }

        .slots ::slotted([slot='time-picker']) {
          min-width: 0;
          flex: 1 1.65 auto;
        }
      </style>

      <div class="vaadin-date-time-picker-container">
        <div part="label" on-click="focus">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div class="slots">
          <slot name="date-picker" id="dateSlot"></slot>
          <slot name="time-picker" id="timeSlot"></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-date-time-picker"}static get properties(){return{name:{type:String},value:{type:String,notify:!0,value:"",observer:"__valueChanged"},min:{type:String,observer:"__minChanged"},max:{type:String,observer:"__maxChanged"},__minDateTime:{type:Date,value:""},__maxDateTime:{type:Date,value:""},datePlaceholder:{type:String},timePlaceholder:{type:String},step:{type:Number},initialPosition:String,showWeekNumbers:{type:Boolean},autoOpenDisabled:Boolean,readonly:{type:Boolean,value:!1,reflectToAttribute:!0},autofocus:{type:Boolean},__selectedDateTime:{type:Date},i18n:{type:Object,value:()=>({...Hr,...Me})},__datePicker:{type:HTMLElement,observer:"__datePickerChanged"},__timePicker:{type:HTMLElement,observer:"__timePickerChanged"}}}static get observers(){return["__selectedDateTimeChanged(__selectedDateTime)","__datePlaceholderChanged(datePlaceholder)","__timePlaceholderChanged(timePlaceholder)","__stepChanged(step)","__initialPositionChanged(initialPosition)","__showWeekNumbersChanged(showWeekNumbers)","__requiredChanged(required)","__invalidChanged(invalid)","__disabledChanged(disabled)","__readonlyChanged(readonly)","__i18nChanged(i18n.*)","__autoOpenDisabledChanged(autoOpenDisabled)","__themeChanged(_theme, __datePicker, __timePicker)","__pickersChanged(__datePicker, __timePicker)"]}get slots(){return{...super.slots,"date-picker":()=>{const e=document.createElement("vaadin-date-time-picker-date-picker");return e.__defaultPicker=!0,e},"time-picker":()=>{const e=document.createElement("vaadin-date-time-picker-time-picker");return e.__defaultPicker=!0,e}}}constructor(){super(),this.__defaultDateMinMaxValue=void 0,this.__defaultTimeMinValue="00:00:00.000",this.__defaultTimeMaxValue="23:59:59.999",this.__changeEventHandler=this.__changeEventHandler.bind(this),this.__valueChangedEventHandler=this.__valueChangedEventHandler.bind(this),this._observer=new T(this,e=>{this.__onDomChange(e.addedNodes)})}ready(){super.ready(),this.__datePicker=this._getDirectSlotChild("date-picker"),this.__timePicker=this._getDirectSlotChild("time-picker"),this.autofocus&&!this.disabled&&window.requestAnimationFrame(()=>this.focus()),this.setAttribute("role","group"),this._tooltipController=new O(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setShouldShow(e=>e.__datePicker&&!e.__datePicker.opened&&e.__timePicker&&!e.__timePicker.opened),this.ariaTarget=this}focus(){this.__datePicker.focus()}_setFocused(e){super._setFocused(e),e||this.validate()}_shouldRemoveFocus(e){const t=e.relatedTarget;return!(this.__datePicker.contains(t)||this.__timePicker.contains(t)||t===this.__datePicker.$.overlay)}__syncI18n(e,t,i){i=i||Object.keys(t.i18n),i.forEach(r=>{t.i18n&&t.i18n.hasOwnProperty(r)&&e.set(`i18n.${r}`,t.i18n[r])})}__changeEventHandler(e){e.stopPropagation(),this.__dispatchChangeForValue===this.value&&(this.__dispatchChange(),this.validate()),this.__dispatchChangeForValue=void 0}__addInputListeners(e){e.addEventListener("change",this.__changeEventHandler),e.addEventListener("value-changed",this.__valueChangedEventHandler)}__removeInputListeners(e){e.removeEventListener("change",this.__changeEventHandler),e.removeEventListener("value-changed",this.__valueChangedEventHandler)}__onDomChange(e){e.filter(t=>t.nodeType===Node.ELEMENT_NODE).forEach(t=>{const i=t.getAttribute("slot");i==="date-picker"?this.__datePicker=t:i==="time-picker"&&(this.__timePicker=t)}),this.value&&(this.min||this.max)&&this.validate()}__datePickerChanged(e,t){!e||(t&&(this.__removeInputListeners(t),t.remove()),this.__addInputListeners(e),e.__defaultPicker?(e.placeholder=this.datePlaceholder,e.invalid=this.invalid,e.initialPosition=this.initialPosition,e.showWeekNumbers=this.showWeekNumbers,this.__syncI18n(e,this,es)):(this.datePlaceholder=e.placeholder,this.initialPosition=e.initialPosition,this.showWeekNumbers=e.showWeekNumbers,this.__syncI18n(this,e,es)),e.min=this.__formatDateISO(this.__minDateTime,this.__defaultDateMinMaxValue),e.max=this.__formatDateISO(this.__maxDateTime,this.__defaultDateMinMaxValue),e.required=this.required,e.disabled=this.disabled,e.readonly=this.readonly,e.autoOpenDisabled=this.autoOpenDisabled,e.validate=()=>{},e._validateInput=()=>{})}__timePickerChanged(e,t){!e||(t&&(this.__removeInputListeners(t),t.remove()),this.__addInputListeners(e),e.__defaultPicker?(e.placeholder=this.timePlaceholder,e.step=this.step,e.invalid=this.invalid,this.__syncI18n(e,this,ts)):(this.timePlaceholder=e.placeholder,this.step=e.step,this.__syncI18n(this,e,ts)),this.__updateTimePickerMinMax(),e.required=this.required,e.disabled=this.disabled,e.readonly=this.readonly,e.autoOpenDisabled=this.autoOpenDisabled,e.validate=()=>{})}__updateTimePickerMinMax(){if(this.__timePicker&&this.__datePicker){const e=this.__parseDate(this.__datePicker.value),t=Ie(this.__minDateTime,this.__maxDateTime),i=this.__timePicker.value;this.__minDateTime&&Ie(e,this.__minDateTime)||t?this.__timePicker.min=this.__dateToIsoTimeString(this.__minDateTime):this.__timePicker.min=this.__defaultTimeMinValue,this.__maxDateTime&&Ie(e,this.__maxDateTime)||t?this.__timePicker.max=this.__dateToIsoTimeString(this.__maxDateTime):this.__timePicker.max=this.__defaultTimeMaxValue,this.__timePicker.value!==i&&(this.__timePicker.value=i)}}__i18nChanged(e){this.__datePicker&&this.__datePicker.set(e.path,e.value),this.__timePicker&&this.__timePicker.set(e.path,e.value)}__datePlaceholderChanged(e){this.__datePicker&&(this.__datePicker.placeholder=e)}__timePlaceholderChanged(e){this.__timePicker&&(this.__timePicker.placeholder=e)}__stepChanged(e){this.__timePicker&&this.__timePicker.step!==e&&(this.__timePicker.step=e)}__initialPositionChanged(e){this.__datePicker&&(this.__datePicker.initialPosition=e)}__showWeekNumbersChanged(e){this.__datePicker&&(this.__datePicker.showWeekNumbers=e)}__invalidChanged(e){this.__datePicker&&(this.__datePicker.invalid=e),this.__timePicker&&(this.__timePicker.invalid=e)}__requiredChanged(e){this.__datePicker&&(this.__datePicker.required=e),this.__timePicker&&(this.__timePicker.required=e)}__disabledChanged(e){this.__datePicker&&(this.__datePicker.disabled=e),this.__timePicker&&(this.__timePicker.disabled=e)}__readonlyChanged(e){this.__datePicker&&(this.__datePicker.readonly=e),this.__timePicker&&(this.__timePicker.readonly=e)}__parseDate(e){return Eo(e)}__formatDateISO(e,t){return e?$r.prototype._formatISO(e):t}__formatTimeISO(e){return Me.formatTime(e)}__parseTimeISO(e){return Me.parseTime(e)}__parseDateTime(e){const[t,i]=e.split("T");if(!(t&&i))return;const r=this.__parseDate(t);if(!r)return;const o=this.__parseTimeISO(i);if(!!o)return r.setHours(parseInt(o.hours)),r.setMinutes(parseInt(o.minutes||0)),r.setSeconds(parseInt(o.seconds||0)),r.setMilliseconds(parseInt(o.milliseconds||0)),r}__formatDateTime(e){if(!e)return"";const t=this.__formatDateISO(e,""),i=this.__dateToIsoTimeString(e);return`${t}T${i}`}__dateToIsoTimeString(e){return this.__formatTimeISO(this.__validateTime({hours:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds(),milliseconds:e.getMilliseconds()}))}__validateTime(e){return e&&(e.seconds=this.__stepSegment<3?void 0:e.seconds,e.milliseconds=this.__stepSegment<4?void 0:e.milliseconds),e}get __inputs(){return[this.__datePicker,this.__timePicker]}checkValidity(){const e=this.__inputs.some(i=>!i.checkValidity()),t=this.required&&this.__inputs.some(i=>!i.value);return!(e||t)}get __stepSegment(){const e=this.step==null?60:parseFloat(this.step);if(e%3600===0)return 1;if(e%60===0||!e)return 2;if(e%1===0)return 3;if(e<1)return 4}__dateTimeEquals(e,t){return Ie(e,t)?e.getHours()===t.getHours()&&e.getMinutes()===t.getMinutes()&&e.getSeconds()===t.getSeconds()&&e.getMilliseconds()===t.getMilliseconds():!1}__handleDateTimeChange(e,t,i,r){if(!i){this[e]="",this[t]="";return}const o=this.__parseDateTime(i);if(!o){this[e]=r;return}this.__dateTimeEquals(this[t],o)||(this[t]=o)}__valueChanged(e,t){this.__handleDateTimeChange("value","__selectedDateTime",e,t),t!==void 0&&(this.__dispatchChangeForValue=e),this.toggleAttribute("has-value",!!e),this.__updateTimePickerMinMax()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__minChanged(e,t){this.__handleDateTimeChange("min","__minDateTime",e,t),this.__datePicker&&(this.__datePicker.min=this.__formatDateISO(this.__minDateTime,this.__defaultDateMinMaxValue)),this.__updateTimePickerMinMax(),this.__datePicker&&this.__timePicker&&this.value&&this.validate()}__maxChanged(e,t){this.__handleDateTimeChange("max","__maxDateTime",e,t),this.__datePicker&&(this.__datePicker.max=this.__formatDateISO(this.__maxDateTime,this.__defaultDateMinMaxValue)),this.__updateTimePickerMinMax(),this.__datePicker&&this.__timePicker&&this.value&&this.validate()}__selectedDateTimeChanged(e){const t=this.__formatDateTime(e);if(this.value!==t&&(this.value=t),Boolean(this.__datePicker&&this.__datePicker.$)&&!this.__ignoreInputValueChange){this.__ignoreInputValueChange=!0;const[r,o]=this.value.split("T");this.__datePicker.value=r||"",this.__timePicker.value=o||"",this.__ignoreInputValueChange=!1}}get __formattedValue(){const e=this.__datePicker.value,t=this.__timePicker.value;return e&&t?[e,t].join("T"):""}__valueChangedEventHandler(){if(this.__ignoreInputValueChange)return;const e=this.__formattedValue,[t,i]=e.split("T");this.__ignoreInputValueChange=!0,this.__updateTimePickerMinMax(),t&&i?e!==this.value&&(this.value=e):this.value="",this.__ignoreInputValueChange=!1}__autoOpenDisabledChanged(e){this.__datePicker&&(this.__datePicker.autoOpenDisabled=e),this.__timePicker&&(this.__timePicker.autoOpenDisabled=e)}__themeChanged(e,t,i){!t||!i||[t,i].forEach(r=>{e?r.setAttribute("theme",e):r.removeAttribute("theme")})}__pickersChanged(e,t){!e||!t||e.__defaultPicker===t.__defaultPicker&&(e.value?this.__valueChangedEventHandler():this.value&&this.__selectedDateTimeChanged(this.__selectedDateTime))}}customElements.define(is.is,is);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const On=m`
  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }
`;c("vaadin-email-field",[$,On],{moduleId:"lumo-email-field"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */c("vaadin-email-field",m`
    :host([dir='rtl']) [part='input-field'] {
      direction: ltr;
    }

    :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
      direction: rtl;
      text-align: left;
    }
  `,{moduleId:"vaadin-email-field-styles"});class Ln extends Js{static get is(){return"vaadin-email-field"}constructor(){super(),this._setType("email"),this.pattern="^([a-zA-Z0-9_\\.\\-+])+@[a-zA-Z0-9-.]+\\.[a-zA-Z0-9-]{2,}$"}ready(){super.ready(),this.inputElement&&(this.inputElement.autocapitalize="off")}}customElements.define("vaadin-email-field",Ln);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */c("vaadin-field-outline",m`
    :host {
      transition: opacity 0.3s;
      -webkit-mask-image: none !important;
      mask-image: none !important;
    }

    :host::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      box-shadow: 0 0 0 2px var(--_active-user-color);
      border-radius: var(--lumo-border-radius);
      transition: box-shadow 0.3s;
    }

    :host([context$='checkbox'])::before {
      box-shadow: 0 0 0 2px var(--lumo-base-color), 0 0 0 4px var(--_active-user-color);
    }

    :host([context$='radio-button'])::before {
      border-radius: 50%;
      box-shadow: 0 0 0 3px var(--lumo-base-color), 0 0 0 5px var(--_active-user-color);
    }

    :host([context$='item'])::before {
      box-shadow: inset 0 0 0 2px var(--_active-user-color);
    }
  `,{moduleId:"lumo-field-outline"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */c("vaadin-user-tags-overlay",m`
    [part='overlay'] {
      will-change: opacity, transform;
    }

    :host([opening]) [part='overlay'] {
      animation: 0.1s lumo-user-tags-enter ease-out both;
    }

    @keyframes lumo-user-tags-enter {
      0% {
        opacity: 0;
      }
    }

    :host([closing]) [part='overlay'] {
      animation: 0.1s lumo-user-tags-exit both;
    }

    @keyframes lumo-user-tags-exit {
      100% {
        opacity: 0;
      }
    }
  `,{moduleId:"lumo-user-tags-overlay"});c("vaadin-user-tag",m`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      border-radius: var(--lumo-border-radius-s);
      box-shadow: var(--lumo-box-shadow-xs);
      --vaadin-user-tag-offset: var(--lumo-space-xs);
    }

    [part='name'] {
      color: var(--lumo-primary-contrast-color);
      padding: 0.3em calc(0.3em + var(--lumo-border-radius-s) / 4);
      line-height: 1;
      font-weight: 500;
      min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
    }
  `,{moduleId:"lumo-user-tag"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ss extends v(Ze(g)){static get is(){return"vaadin-user-tag"}static get template(){return _`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          margin: 0 0 var(--vaadin-user-tag-offset);
          opacity: 0;
          height: 1.3rem;
          transition: opacity 0.2s ease-in-out;
          background-color: var(--vaadin-user-tag-color);
          color: #fff;
          cursor: default;
          -webkit-user-select: none;
          user-select: none;
          --vaadin-user-tag-offset: 4px;
        }

        :host(.show) {
          opacity: 1;
        }

        :host(:last-of-type) {
          margin-bottom: 0;
        }

        [part='name'] {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          box-sizing: border-box;
          padding: 2px 4px;
          height: 1.3rem;
          font-size: 13px;
        }
      </style>
      <div part="name">[[name]]</div>
    `}static get properties(){return{name:{type:String},uid:{type:String},colorIndex:{type:Number,observer:"_colorIndexChanged"}}}ready(){super.ready(),this.addEventListener("mousedown",this._onClick.bind(this),!0)}_colorIndexChanged(e){e!=null&&this.style.setProperty("--vaadin-user-tag-color",`var(--vaadin-user-color-${e})`)}_onClick(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("user-tag-click",{bubbles:!0,composed:!0,detail:{name:this.name}}))}}customElements.define(ss.is,ss);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */c("vaadin-user-tags-overlay",m`
    :host {
      background: transparent;
      box-shadow: none;
    }

    [part='overlay'] {
      box-shadow: none;
      background: transparent;
      position: relative;
      left: -4px;
      padding: 4px;
      outline: none;
      overflow: visible;
    }

    ::slotted([part='tags']) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    :host([dir='rtl']) [part='overlay'] {
      left: auto;
      right: -4px;
    }

    [part='content'] {
      padding: 0;
    }

    :host([opening]),
    :host([closing]) {
      animation: 0.14s user-tags-overlay-dummy-animation;
    }

    @keyframes user-tags-overlay-dummy-animation {
      0% {
        opacity: 1;
      }

      100% {
        opacity: 1;
      }
    }
  `);class rs extends Je(ee){static get is(){return"vaadin-user-tags-overlay"}ready(){super.ready(),this.$.overlay.setAttribute("tabindex","-1")}}customElements.define(rs.is,rs);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const os=(s,e)=>new Promise(t=>{const i=()=>{s.removeEventListener(e,i),t()};s.addEventListener(e,i)});class as extends g{static get is(){return"vaadin-user-tags"}static get template(){return _`
      <style>
        :host {
          position: absolute;
        }
      </style>
      <vaadin-user-tags-overlay
        id="overlay"
        modeless
        opened="[[opened]]"
        no-vertical-overlap
        on-vaadin-overlay-open="_onOverlayOpen"
      ></vaadin-user-tags-overlay>
    `}static get properties(){return{hasFocus:{type:Boolean,value:!1,observer:"_hasFocusChanged"},opened:{type:Boolean,value:!1},flashing:{type:Boolean,value:!1},target:{type:Object,observer:"__targetChanged"},users:{type:Array,value:()=>[]},duration:{type:Number,value:200},delay:{type:Number,value:2e3},__flashQueue:{type:Array,value:()=>[]},__isTargetVisible:{type:Boolean,value:!1}}}constructor(){super(),this.__targetVisibilityObserver=new IntersectionObserver(([e])=>{this.__onTargetVisibilityChange(e.isIntersecting)},{threshold:1})}connectedCallback(){super.connectedCallback(),this.target&&this.__targetVisibilityObserver.observe(this.target)}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1,this.target&&this.__targetVisibilityObserver.unobserve(this.target)}ready(){super.ready(),this.$.overlay.renderer=e=>{if(!e.firstChild){const t=document.createElement("div");t.setAttribute("part","tags"),e.appendChild(t)}},this.$.overlay.requestContentUpdate()}__onTargetVisibilityChange(e){if(this.__isTargetVisible=e,e&&this.__flashQueue.length>0&&!this.flashing){this.flashTags(this.__flashQueue.shift());return}if(e&&this.hasFocus){this.opened=!0;return}!e&&this.opened&&(this.opened=!1)}__targetChanged(e,t){this.$.overlay.positionTarget=e,t&&this.__targetVisibilityObserver.unobserve(t),e&&this.__targetVisibilityObserver.observe(e)}_hasFocusChanged(e){e&&this.flashing&&this.stopFlash()}get wrapper(){return this.$.overlay.content.querySelector('[part="tags"]')}createUserTag(e){const t=document.createElement("vaadin-user-tag");return t.name=e.name,t.uid=e.id,t.colorIndex=e.colorIndex,t}getTagForUser(e){return Array.from(this.wrapper.children).find(t=>t.uid===e.id)}getChangedTags(e,t){const i=t.map(o=>this.getTagForUser(o));return{added:e.map(o=>this.getTagForUser(o)||this.createUserTag(o)),removed:i}}getChangedUsers(e,t){const i=[],r=[];t.forEach(a=>{for(let n=0;n<a.removed.length;n++)r.push(a.removed[n]);for(let n=a.addedCount-1;n>=0;n--)i.push(e[a.index+n])});const o=i.filter(a=>!r.some(n=>a.id===n.id)),l=r.filter(a=>!i.some(n=>a.id===n.id));return{addedUsers:o,removedUsers:l}}applyTagsStart({added:e,removed:t}){const i=this.wrapper;t.forEach(r=>{r&&(r.classList.add("removing"),r.classList.remove("show"))}),e.forEach(r=>i.insertBefore(r,i.firstChild))}applyTagsEnd({added:e,removed:t}){const i=this.wrapper;t.forEach(r=>{r&&r.parentNode===i&&i.removeChild(r)}),e.forEach(r=>r&&r.classList.add("show"))}setUsers(e){this.requestContentUpdate();const t=Mt(e,this.users);if(t.length===0)return;const{addedUsers:i,removedUsers:r}=this.getChangedUsers(e,t);if(i.length===0&&r.length===0)return;const o=this.getChangedTags(i,r);if(this.__flashQueue.length>0){for(let l=0;l<r.length;l++)if(o.removed[l]===null)for(let a=0;a<this.__flashQueue.length;a++)this.__flashQueue[a].some(n=>n.uid===r[l].id)&&this.splice("__flashQueue",l,1)}if(this.opened&&this.hasFocus)this.updateTags(e,o);else if(i.length>0&&document.visibilityState!=="hidden"){const l=o.added,a=o.removed;this.updateTagsSync(e,{added:[],removed:a}),this.flashing||!this.__isTargetVisible?this.push("__flashQueue",l):this.flashTags(l)}else this.updateTagsSync(e,o)}_onOverlayOpen(){Array.from(this.wrapper.children).forEach(e=>{e.classList.contains("removing")||e.classList.add("show")})}flashTags(e){this.flashing=!0;const t=this.wrapper,i=Array.from(t.children);i.forEach(r=>{r.style.display="none"}),e.forEach(r=>{t.insertBefore(r,t.firstChild)}),this.flashPromise=new Promise(r=>{os(this.$.overlay,"vaadin-overlay-open").then(()=>{this._debounceFlashStart=K.debounce(this._debounceFlashStart,ue.after(this.duration+this.delay),()=>{this.hasFocus||e.forEach(o=>o.classList.remove("show")),this._debounceFlashEnd=K.debounce(this._debounceFlashEnd,ue.after(this.duration),()=>{const o=()=>{i.forEach(l=>{l.style.display="block"}),this.flashing=!1,r()};this.hasFocus?o():(os(this.$.overlay,"animationend").then(()=>{o()}),this.opened=!1)})})})}).then(()=>{if(this.__flashQueue.length>0){const r=this.__flashQueue[0];this.splice("__flashQueue",0,1),this.flashTags(r)}}),this.opened=!0}stopFlash(){this._debounceFlashStart&&this._debounceFlashStart.flush(),this._debounceFlashEnd&&this._debounceFlashEnd.flush(),this.$.overlay._flushAnimation("closing")}updateTags(e,t){this.applyTagsStart(t),this._debounceRender=K.debounce(this._debounceRender,ue.after(this.duration),()=>{this.set("users",e),this.applyTagsEnd(t),e.length===0&&this.opened&&(this.opened=!1)})}updateTagsSync(e,t){this.applyTagsStart(t),this.set("users",e),this.applyTagsEnd(t)}show(){this.hasFocus=!0,this.__isTargetVisible&&(this.opened=!0)}hide(){this.hasFocus=!1,this.opened=!1}requestContentUpdate(){this._debounceRender&&this._debounceRender.isActive()&&this._debounceRender.flush()}}customElements.define(as.is,as);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ns extends v(Ze(g)){static get is(){return"vaadin-field-outline"}static get template(){return _`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          user-select: none;
          opacity: 0;
          --_active-user-color: transparent;
        }

        :host([has-active-user]) {
          opacity: 1;
        }
      </style>
    `}static get properties(){return{user:{type:Object,value:null,observer:"_userChanged"}}}ready(){super.ready(),this.setAttribute("part","outline"),this._field=this.getRootNode().host}_userChanged(e){this.toggleAttribute("has-active-user",Boolean(e));const t=e?`var(--vaadin-user-color-${e.colorIndex})`:"transparent",i="--_active-user-color";this.style.setProperty(i,t),this._field&&this._field.style.setProperty(i,t)}}customElements.define(ns.is,ns);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zn=(s,e)=>{switch(e){case"vaadin-big-decimal-field":case"vaadin-combo-box":case"vaadin-date-picker":case"vaadin-date-time-picker-date-picker":case"vaadin-date-time-picker-time-picker":case"vaadin-email-field":case"vaadin-integer-field":case"vaadin-number-field":case"vaadin-password-field":case"vaadin-select":case"vaadin-text-area":case"vaadin-text-field":case"vaadin-time-picker":return s.shadowRoot.querySelector('[part="input-field"]');case"vaadin-checkbox":return s.shadowRoot.querySelector('[part="checkbox"]');case"vaadin-radio-button":return s.shadowRoot.querySelector('[part="radio"]');default:return s}},ct=new WeakMap,Bn=s=>{if(!ct.has(s)){const e=s.tagName.toLowerCase(),t=zn(s,e);t.style.position="relative",e.endsWith("text-area")&&(t.style.overflow="visible");const i=document.createElement("style");i.textContent=`
      :host([active]) [part="outline"],
      :host([focus-ring]) [part="outline"] {
        display: none;
      }
    `,s.shadowRoot.appendChild(i);const r=document.createElement("vaadin-field-outline");(t===s?s.shadowRoot:t).appendChild(r),r.setAttribute("context",e),ct.set(s,{root:s,target:t,outline:r})}return ct.get(s)};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ti{constructor(e){this.component=e,this.initTags(e)}getFields(){return[this.component]}getFieldIndex(e){return this.getFields().indexOf(e)}getFocusTarget(e){return this.component}initTags(e){const t=document.createElement("vaadin-user-tags");e.shadowRoot.appendChild(t),t.target=e,this._tags=t,e.addEventListener("mouseenter",i=>{i.relatedTarget!==this._tags.$.overlay&&(this._mouse=!0,this._mouseDebouncer=K.debounce(this._mouseDebouncer,ue.after(200),()=>{this._mouse&&this._tags.show()}))}),e.addEventListener("mouseleave",i=>{i.relatedTarget!==this._tags.$.overlay&&(this._mouse=!1,this._hasFocus||this._tags.hide())}),e.addEventListener("vaadin-highlight-show",i=>{this._hasFocus=!0,this._debouncer&&this._debouncer.isActive()?this._debouncer.cancel():this._tags.show()}),e.addEventListener("vaadin-highlight-hide",i=>{this._hasFocus=!1,this._mouse||(this._debouncer=K.debounce(this._debouncer,ue.after(1),()=>{this._tags.hide()}))}),this._tags.$.overlay.addEventListener("mouseleave",i=>{i.relatedTarget!==e&&(this._mouse=!1,e.hasAttribute("focused")||this._tags.hide())})}setOutlines(e){const t=this.getFields();t.forEach((i,r)=>{const{outline:o}=Bn(i),l=t.length===1?0:e.map(a=>a.fieldIndex).indexOf(r);o.user=e[l]})}showOutline(e){this.fire("show",e)}hideOutline(e){this.fire("hide",e)}fire(e,t){this.component.dispatchEvent(new CustomEvent(`vaadin-highlight-${e}`,{bubbles:!0,composed:!0,detail:{fieldIndex:this.getFieldIndex(t)}}))}redraw(e){this._tags.setUsers(e),this.setOutlines(e)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class se extends ti{constructor(e){super(e),this.addListeners(e)}addListeners(e){e.addEventListener("focusin",t=>this.onFocusIn(t)),e.addEventListener("focusout",t=>this.onFocusOut(t))}onFocusIn(e){const t=this.getFocusTarget(e);this.showOutline(t)}onFocusOut(e){const t=this.getFocusTarget(e);this.hideOutline(t)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Mn extends se{getFields(){return this.component.__checkboxes}getFocusTarget(e){const t=this.getFields();return Array.from(e.composedPath()).find(i=>t.includes(i))}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class qr extends ti{constructor(e){super(e),this.datePicker=e,this.fullscreenFocus=!1,this.blurWhileOpened=!1,this.addListeners(e)}addListeners(e){this.overlay=e.$.overlay,e.addEventListener("blur",t=>this.onBlur(t),!0),e.addEventListener("opened-changed",t=>this.onOpenedChanged(t)),this.overlay.addEventListener("focusout",t=>this.onOverlayFocusOut(t)),e.addEventListener("focusin",t=>this.onFocusIn(t)),e.addEventListener("focusout",t=>this.onFocusOut(t))}onBlur(e){this.datePicker._fullscreen&&e.relatedTarget!==this.overlay&&(this.fullscreenFocus=!0)}onFocusIn(e){if(e.relatedTarget!==this.overlay){if(this.blurWhileOpened){this.blurWhileOpened=!1;return}this.showOutline(this.datePicker)}}onFocusOut(e){this.fullscreenFocus||e.relatedTarget===this.overlay||(this.datePicker.opened?this.blurWhileOpened=!0:this.hideOutline(this.datePicker))}onOverlayFocusOut(e){this.datePicker.contains(e.relatedTarget)||(this.blurWhileOpened=!0)}onOpenedChanged(e){e.detail.value===!0&&this.fullscreenFocus&&(this.fullscreenFocus=!1,this.showOutline(this.datePicker)),e.detail.value===!1&&this.blurWhileOpened&&(this.blurWhileOpened=!1,this.hideOutline(this.datePicker))}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Fn extends qr{constructor(e,t){super(e),this.component=t}getFieldIndex(){return 0}}class Dn extends se{constructor(e,t){super(e),this.component=t,this.timePicker=e}getFocusTarget(e){return this.timePicker}getFieldIndex(){return 1}}class Vn extends ti{constructor(e){super(e);const[t,i]=this.getFields();this.dateObserver=new Fn(t,e),this.timeObserver=new Dn(i,e)}getFields(){return this.component.__inputs}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Rn extends se{getFields(){return this.component.items||[]}getFocusTarget(e){const t=this.getFields();return Array.from(e.composedPath()).find(i=>t.includes(i))}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Nn extends se{getFields(){return this.component.__radioButtons}getFocusTarget(e){const t=this.getFields();return Array.from(e.composedPath()).find(i=>t.includes(i))}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class $n extends se{constructor(e){super(e),this.blurWhileOpened=!1,this.overlay=e._overlayElement}addListeners(e){super.addListeners(e),e.addEventListener("opened-changed",t=>{e._phone&&t.detail.value===!1&&this.hideOutline(e)})}onFocusIn(e){this.overlay.contains(e.relatedTarget)||!this.component._phone&&this.overlay.hasAttribute("closing")||super.onFocusIn(e)}onFocusOut(e){this.overlay.contains(e.relatedTarget)||super.onFocusOut(e)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Hn=s=>{let e;switch(s.tagName.toLowerCase()){case"vaadin-date-picker":e=new qr(s);break;case"vaadin-date-time-picker":e=new Vn(s);break;case"vaadin-select":e=new $n(s);break;case"vaadin-checkbox-group":e=new Mn(s);break;case"vaadin-radio-group":e=new Nn(s);break;case"vaadin-list-box":e=new Rn(s);break;default:e=new se(s)}return e};class qn{get user(){return this._user}set user(e){if(this._user=e,e){const t=`${e.name} started editing`,{label:i}=this.host;he(i?`${t} ${i}`:t)}}constructor(e){this.host=e,this.user=null,this.users=[]}hostConnected(){this.redraw()}addUser(e){e&&(this.users.push(e),this.redraw(),this.user=e)}setUsers(e){Array.isArray(e)&&(this.users=e,this.redraw(),this.user=e[e.length-1]||null)}removeUser(e){if(e&&e.id!==void 0){let t;for(let i=0;i<this.users.length;i++)if(this.users[i].id===e.id){t=i;break}t!==void 0&&(this.users.splice(t,1),this.redraw(),this.users.length>0?this.user=this.users[this.users.length-1]:this.user=null)}}redraw(){this.observer.redraw([...this.users].reverse())}}class Un extends HTMLElement{static init(e){if(!e._highlighterController){const t=new qn(e);e.setAttribute("has-highlighter",""),t.observer=Hn(e),e.addController(t),e._highlighterController=t}return e._highlighterController}static addUser(e,t){this.init(e).addUser(t)}static removeUser(e,t){this.init(e).removeUser(t)}static setUsers(e,t){this.init(e).setUsers(t)}}customElements.define("vaadin-field-highlighter",Un);c("vaadin-form-item",m`
    :host {
      --vaadin-form-item-row-spacing: 0;
    }

    /* font-weight, margin-bottom, transition and line-height same as for part label in text-field */
    [part='label'] {
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
      margin-top: var(--lumo-space-m);
      margin-left: calc(var(--lumo-border-radius-m) / 4);
      margin-bottom: var(--lumo-space-xs);
      transition: color 0.4s;
      line-height: 1.333;
    }

    [part='required-indicator']::after {
      content: var(--lumo-required-field-indicator, '•');
      transition: opacity 0.2s;
      opacity: 0;
      color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
      position: relative;
      width: 1em;
      text-align: center;
    }

    :host([required]) [part='required-indicator']::after {
      opacity: 1;
    }

    :host([invalid]) [part='required-indicator']::after {
      color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
    }
  `,{moduleId:"lumo-form-item"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ls extends v(g){static get template(){return _`
      <style>
        :host {
          display: inline-flex;
          flex-direction: row;
          align-items: baseline;
          margin: calc(0.5 * var(--vaadin-form-item-row-spacing, 1em)) 0;
        }

        :host([label-position='top']) {
          flex-direction: column;
          align-items: stretch;
        }

        :host([hidden]) {
          display: none !important;
        }

        #label {
          width: var(--vaadin-form-item-label-width, 8em);
          flex: 0 0 auto;
        }

        :host([label-position='top']) #label {
          width: auto;
        }

        #spacing {
          width: var(--vaadin-form-item-label-spacing, 1em);
          flex: 0 0 auto;
        }

        #content {
          flex: 1 1 auto;
        }

        #content ::slotted(.full-width) {
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
        }
      </style>
      <div id="label" part="label" on-click="__onLabelClick">
        <slot name="label" id="labelSlot" on-slotchange="__onLabelSlotChange"></slot>
        <span part="required-indicator" aria-hidden="true"></span>
      </div>
      <div id="spacing"></div>
      <div id="content">
        <slot id="contentSlot" on-slotchange="__onContentSlotChange"></slot>
      </div>
    `}static get is(){return"vaadin-form-item"}constructor(){super(),this.__updateInvalidState=this.__updateInvalidState.bind(this),this.__fieldNodeObserver=new MutationObserver(()=>this.__updateRequiredState(this.__fieldNode.required)),this.__labelNode=null,this.__fieldNode=null}_getFieldAriaTarget(e){return e.ariaTarget||e}__linkLabelToField(e){ko(this._getFieldAriaTarget(e),"aria-labelledby",this.__labelId)}__unlinkLabelFromField(e){To(this._getFieldAriaTarget(e),"aria-labelledby",this.__labelId)}__onLabelClick(){const e=this.__fieldNode;e&&(e.focus(),e.click())}__getValidateFunction(e){return e.validate||e.checkValidity}__onLabelSlotChange(){this.__labelNode&&(this.__labelNode=null,this.__fieldNode&&this.__unlinkLabelFromField(this.__fieldNode));const e=this.$.labelSlot.assignedElements()[0];e&&(this.__labelNode=e,this.__labelNode.id?this.__labelId=this.__labelNode.id:(this.__labelId=`label-${this.localName}-${be()}`,this.__labelNode.id=this.__labelId),this.__fieldNode&&this.__linkLabelToField(this.__fieldNode))}__onContentSlotChange(){this.__fieldNode&&(this.__unlinkLabelFromField(this.__fieldNode),this.__updateRequiredState(!1),this.__fieldNodeObserver.disconnect(),this.__fieldNode=null);const e=this.$.contentSlot.assignedElements();e.length>1&&console.warn(`WARNING: Since Vaadin 23, placing multiple fields directly to a <vaadin-form-item> is deprecated.
Please wrap fields with a <vaadin-custom-field> instead.`);const t=e.find(i=>!!this.__getValidateFunction(i));t&&(this.__fieldNode=t,this.__updateRequiredState(this.__fieldNode.required),this.__fieldNodeObserver.observe(this.__fieldNode,{attributes:!0,attributeFilter:["required"]}),this.__labelNode&&this.__linkLabelToField(this.__fieldNode))}__updateRequiredState(e){e?(this.setAttribute("required",""),this.__fieldNode.addEventListener("blur",this.__updateInvalidState),this.__fieldNode.addEventListener("change",this.__updateInvalidState)):(this.removeAttribute("invalid"),this.removeAttribute("required"),this.__fieldNode.removeEventListener("blur",this.__updateInvalidState),this.__fieldNode.removeEventListener("change",this.__updateInvalidState))}__updateInvalidState(){const e=this.__getValidateFunction(this.__fieldNode).call(this.__fieldNode);this.toggleAttribute("invalid",e===!1)}}customElements.define(ls.is,ls);c("vaadin-form-layout",m`
    :host {
      --vaadin-form-layout-column-spacing: var(--lumo-space-l);
    }
  `,{moduleId:"lumo-form-layout"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ds extends te(w(v(g))){static get template(){return _`
      <style>
        :host {
          display: block;
          max-width: 100%;
          animation: 1ms vaadin-form-layout-appear;
          /* CSS API for host */
          --vaadin-form-item-label-width: 8em;
          --vaadin-form-item-label-spacing: 1em;
          --vaadin-form-item-row-spacing: 1em;
          --vaadin-form-layout-column-spacing: 2em; /* (default) */
          align-self: stretch;
        }

        @keyframes vaadin-form-layout-appear {
          to {
            opacity: 1 !important; /* stylelint-disable-line keyframe-declaration-no-important */
          }
        }

        :host([hidden]) {
          display: none !important;
        }

        #layout {
          display: flex;

          align-items: baseline; /* default \`stretch\` is not appropriate */

          flex-wrap: wrap; /* the items should wrap */
        }

        #layout ::slotted(*) {
          /* Items should neither grow nor shrink. */
          flex-grow: 0;
          flex-shrink: 0;

          /* Margins make spacing between the columns */
          margin-left: calc(0.5 * var(--vaadin-form-layout-column-spacing));
          margin-right: calc(0.5 * var(--vaadin-form-layout-column-spacing));
        }

        #layout ::slotted(br) {
          display: none;
        }
      </style>
      <div id="layout">
        <slot id="slot"></slot>
      </div>
    `}static get is(){return"vaadin-form-layout"}static get properties(){return{responsiveSteps:{type:Array,value(){return[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}]},observer:"_responsiveStepsChanged"},_columnCount:{type:Number},_labelsOnTop:{type:Boolean}}}static get observers(){return["_invokeUpdateLayout(_columnCount, _labelsOnTop)"]}ready(){this._styleElement=document.createElement("style"),this.appendChild(this._styleElement),this._styleElement.textContent=" ",super.ready(),this.addEventListener("animationend",this.__onAnimationEnd)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>this._selectResponsiveStep()),requestAnimationFrame(()=>this._updateLayout()),this._observeChildrenColspanChange()}disconnectedCallback(){super.disconnectedCallback(),this.__mutationObserver.disconnect(),this.__childObserver.disconnect()}_observeChildrenColspanChange(){const e={attributes:!0};this.__mutationObserver=new MutationObserver(t=>{t.forEach(i=>{i.type==="attributes"&&(i.attributeName==="colspan"||i.attributeName==="hidden")&&this._updateLayout()})}),this.__childObserver=new T(this,t=>{const i=this._getObservableNodes(t.addedNodes),r=this._getObservableNodes(t.removedNodes);i.forEach(o=>{this.__mutationObserver.observe(o,e)}),(i.length>0||r.length>0)&&this._updateLayout()})}_getObservableNodes(e){const t=["template","style","dom-repeat","dom-if"];return Array.from(e).filter(i=>i.nodeType===Node.ELEMENT_NODE&&t.indexOf(i.localName.toLowerCase())===-1)}_naturalNumberOrOne(e){return typeof e=="number"&&e>=1&&e<1/0?Math.floor(e):1}_isValidCSSLength(e){return e==="inherit"||e==="normal"?!1:(this._styleElement.firstChild.nodeValue=`#styleElement { word-spacing: ${e}; }`,this._styleElement.sheet?["",null].indexOf(this._styleElement.sheet.cssRules[0].style.getPropertyValue("word-spacing"))<0:!0)}_responsiveStepsChanged(e,t){try{if(!Array.isArray(e))throw new Error('Invalid "responsiveSteps" type, an Array is required.');if(e.length<1)throw new Error('Invalid empty "responsiveSteps" array, at least one item is required.');e.forEach(i=>{if(this._naturalNumberOrOne(i.columns)!==i.columns)throw new Error(`Invalid 'columns' value of ${i.columns}, a natural number is required.`);if(i.minWidth!==void 0&&!this._isValidCSSLength(i.minWidth))throw new Error(`Invalid 'minWidth' value of ${i.minWidth}, a valid CSS length required.`);if(i.labelsPosition!==void 0&&["aside","top"].indexOf(i.labelsPosition)===-1)throw new Error(`Invalid 'labelsPosition' value of ${i.labelsPosition}, 'aside' or 'top' string is required.`)})}catch(i){t&&t!==e?(console.warn(`${i.message} Using previously set 'responsiveSteps' instead.`),this.responsiveSteps=t):(console.warn(`${i.message} Using default 'responsiveSteps' instead.`),this.responsiveSteps=[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}])}this._selectResponsiveStep()}__onAnimationEnd(e){e.animationName.indexOf("vaadin-form-layout-appear")===0&&this._selectResponsiveStep()}_selectResponsiveStep(){let e;const t="background-position";this.responsiveSteps.forEach(i=>{this.$.layout.style.setProperty(t,i.minWidth),parseFloat(getComputedStyle(this.$.layout).getPropertyValue(t))<=this.offsetWidth&&(e=i)}),this.$.layout.style.removeProperty(t),e&&(this._columnCount=e.columns,this._labelsOnTop=e.labelsPosition==="top")}_invokeUpdateLayout(){this._updateLayout()}updateStyles(e={}){console.warn("WARNING: Since Vaadin 23, updateStyles() is deprecated. Use the native element.style.setProperty API to set custom CSS property values."),Object.entries(e).forEach(([t,i])=>{this.style.setProperty(t,i)}),this._updateLayout()}_updateLayout(){const e=getComputedStyle(this),t=e.getPropertyValue("--vaadin-form-layout-column-spacing"),i=e.direction,r=`margin-${i==="ltr"?"left":"right"}`,o=`margin-${i==="ltr"?"right":"left"}`,l=this.offsetWidth;let a=0;Array.from(this.children).filter(n=>n.localName==="br"||getComputedStyle(n).display!=="none").forEach((n,d,h)=>{if(n.localName==="br"){a=0;return}let u;u=this._naturalNumberOrOne(parseFloat(n.getAttribute("colspan"))),u=Math.min(u,this._columnCount);const p=u/this._columnCount;n.style.width=`calc(${p*99.9}% - ${1-p} * ${t})`,a+u>this._columnCount&&(a=0),a===0?n.style.setProperty(r,"0px"):n.style.removeProperty(r);const f=d+1,y=f<h.length&&h[f].localName==="br";if(a+u===this._columnCount)n.style.setProperty(o,"0px");else if(y){const b=(this._columnCount-a-u)/this._columnCount;n.style.setProperty(o,`calc(${b*l}px + ${b} * ${t})`)}else n.style.removeProperty(o);a=(a+u)%this._columnCount,n.localName==="vaadin-form-item"&&(this._labelsOnTop?n.getAttribute("label-position")!=="top"&&(n.__useLayoutLabelPosition=!0,n.setAttribute("label-position","top")):n.__useLayoutLabelPosition&&(delete n.__useLayoutLabelPosition,n.removeAttribute("label-position")))})}_onResize(){this._selectResponsiveStep()}}customElements.define(ds.is,ds);c("vaadin-grid-tree-toggle",m`
    :host {
      --vaadin-grid-tree-toggle-level-offset: 2em;
      align-items: center;
      vertical-align: middle;
      transform: translateX(calc(var(--lumo-space-s) * -1));
      -webkit-tap-highlight-color: transparent;
    }

    :host(:not([leaf])) {
      cursor: default;
    }

    [part='toggle'] {
      display: inline-block;
      font-size: 1.5em;
      line-height: 1;
      width: 1em;
      height: 1em;
      text-align: center;
      color: var(--lumo-contrast-50pct);
      cursor: var(--lumo-clickable-cursor);
      /* Increase touch target area */
      padding: calc(1em / 3);
      margin: calc(1em / -3);
    }

    :host(:not([dir='rtl'])) [part='toggle'] {
      margin-right: 0;
    }

    @media (hover: hover) {
      :host(:hover) [part='toggle'] {
        color: var(--lumo-contrast-80pct);
      }
    }

    [part='toggle']::before {
      font-family: 'lumo-icons';
      display: inline-block;
      height: 100%;
    }

    :host(:not([expanded])) [part='toggle']::before {
      content: var(--lumo-icons-angle-right);
    }

    :host([expanded]) [part='toggle']::before {
      content: var(--lumo-icons-angle-right);
      transform: rotate(90deg);
    }

    /* Experimental support for hierarchy connectors, using an unsupported selector */
    :host([theme~='connectors']) #level-spacer {
      position: relative;
      z-index: -1;
      font-size: 1em;
      height: 1.5em;
    }

    :host([theme~='connectors']) #level-spacer::before {
      display: block;
      content: '';
      margin-top: calc(var(--lumo-space-m) * -1);
      height: calc(var(--lumo-space-m) + 3em);
      background-image: linear-gradient(
        to right,
        transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px),
        var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px)
      );
      background-size: var(--vaadin-grid-tree-toggle-level-offset) var(--vaadin-grid-tree-toggle-level-offset);
      background-position: calc(var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px) 0;
    }

    /* RTL specific styles */

    :host([dir='rtl']) {
      margin-left: 0;
      margin-right: calc(var(--lumo-space-s) * -1);
    }

    :host([dir='rtl']) [part='toggle'] {
      margin-left: 0;
    }

    :host([dir='rtl'][expanded]) [part='toggle']::before {
      transform: rotate(-90deg);
    }

    :host([dir='rtl'][theme~='connectors']) #level-spacer::before {
      background-image: linear-gradient(
        to left,
        transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px),
        var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px)
      );
      background-position: calc(100% - (var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px)) 0;
    }

    :host([dir='rtl']:not([expanded])) [part='toggle']::before,
    :host([dir='rtl'][expanded]) [part='toggle']::before {
      content: var(--lumo-icons-angle-left);
    }
  `,{moduleId:"lumo-grid-tree-toggle"});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ur=document.createElement("template");Ur.innerHTML=`
  <style>
    @font-face {
      font-family: "vaadin-grid-tree-icons";
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQkAA0AAAAABrwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAECAAAABoAAAAcgHwa6EdERUYAAAPsAAAAHAAAAB4AJwAOT1MvMgAAAZQAAAA/AAAAYA8TBIJjbWFwAAAB8AAAAFUAAAFeGJvXWmdhc3AAAAPkAAAACAAAAAgAAAAQZ2x5ZgAAAlwAAABLAAAAhIrPOhFoZWFkAAABMAAAACsAAAA2DsJI02hoZWEAAAFcAAAAHQAAACQHAgPHaG10eAAAAdQAAAAZAAAAHAxVAgBsb2NhAAACSAAAABIAAAASAIAAVG1heHAAAAF8AAAAGAAAACAACgAFbmFtZQAAAqgAAAECAAACTwflzbdwb3N0AAADrAAAADYAAABZQ7Ajh3icY2BkYGAA4twv3Vfi+W2+MnCzMIDANSOmbGSa2YEZRHEwMIEoAAoiB6sAeJxjYGRgYD7w/wADAwsDCDA7MDAyoAI2AFEEAtIAAAB4nGNgZGBg4GBgZgDRDAxMDGgAAAGbABB4nGNgZp7JOIGBlYGBaSbTGQYGhn4IzfiawZiRkwEVMAqgCTA4MDA+38d84P8BBgdmIAapQZJVYGAEAGc/C54AeJxjYYAAxlAIzQTELAwMBxgZGB0ACy0BYwAAAHicY2BgYGaAYBkGRgYQiADyGMF8FgYbIM3FwMHABISMDArP9/3/+/8/WJXC8z0Q9v8nEp5gHVwMMMAIMo+RDYiZoQJMQIKJARUA7WBhGN4AACFKDtoAAAAAAAAAAAgACAAQABgAJgA0AEIAAHichYvBEYBADAKBVHBjBT4swl9KS2k05o0XHd/yW1hAfBFwCv9sIlJu3nZaNS3PXAaXXHI8Lge7DlzF7C1RgXc7xkK6+gvcD2URmQB4nK2RQWoCMRiFX3RUqtCli65yADModOMBLLgQSqHddRFnQghIAnEUvEA3vUUP0LP0Fj1G+yb8R5iEhO9/ef/7FwFwj28o9EthiVp4hBlehcfUP4Ur8o/wBAv8CU+xVFvhOR7UB7tUdUdlVRJ6HnHWTnhM/V24In8JT5j/KzzFSi2E53hUz7jCcrcIiDDwyKSW1JEct2HdIPH1DFytbUM0PofWdNk5E5oUqb/Q6HHBiVGZpfOXkyUMEj5IyBuNmYZQjBobfsuassvnkKLe1OuBBj0VQ8cRni2xjLWsHaM0jrjx3peYA0/vrdmUYqe9iy7bzrX6eNP7Jh1SijX+AaUVbB8AAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSruZMzlHaB0q4A76kLlwAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKxJigiD6mhFTNowGACmcA/8AAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(Ur.content);class hs extends v(Ze(g)){static get template(){return _`
      <style>
        :host {
          display: inline-flex;
          align-items: baseline;
          max-width: 100%;

          /* CSS API for :host */
          --vaadin-grid-tree-toggle-level-offset: 1em;
          --_collapsed-icon: '\\e7be\\00a0';
        }

        :host([dir='rtl']) {
          --_collapsed-icon: '\\e7bd\\00a0';
        }

        :host([hidden]) {
          display: none !important;
        }

        :host(:not([leaf])) {
          cursor: pointer;
        }

        #level-spacer,
        [part='toggle'] {
          flex: none;
        }

        #level-spacer {
          display: inline-block;
          width: calc(var(---level, '0') * var(--vaadin-grid-tree-toggle-level-offset));
        }

        [part='toggle']::before {
          font-family: 'vaadin-grid-tree-icons';
          line-height: 1em; /* make icon font metrics not affect baseline */
        }

        :host(:not([expanded])) [part='toggle']::before {
          content: var(--_collapsed-icon);
        }

        :host([expanded]) [part='toggle']::before {
          content: '\\e7bc\\00a0'; /* icon glyph + single non-breaking space */
        }

        :host([leaf]) [part='toggle'] {
          visibility: hidden;
        }

        slot {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>

      <span id="level-spacer"></span>
      <span part="toggle"></span>
      <slot></slot>
    `}static get is(){return"vaadin-grid-tree-toggle"}static get properties(){return{level:{type:Number,value:0,observer:"_levelChanged"},leaf:{type:Boolean,value:!1,reflectToAttribute:!0},expanded:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0}}}ready(){super.ready(),this.addEventListener("click",e=>this._onClick(e))}_onClick(e){this.leaf||Po(e.target)||e.target instanceof HTMLLabelElement||(e.preventDefault(),this.expanded=!this.expanded)}_levelChanged(e){const t=Number(e).toString();this.style.setProperty("---level",t)}}customElements.define(hs.is,hs);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wn=m`
  :host {
    width: 8em;
  }

  :host([step-buttons-visible]:not([theme~='align-right'])) ::slotted(input),
  :host([has-controls]:not([theme~='align-right'])) ::slotted(input) {
    text-align: center;
  }

  [part$='button'][disabled] {
    opacity: 0.2;
  }

  :host([step-buttons-visible]) [part='input-field'],
  :host([has-controls]) [part='input-field'] {
    padding: 0;
  }

  [part\$='button'] {
    cursor: pointer;
    font-size: var(--lumo-icon-size-s);
    width: 1.6em;
    height: 1.6em;
  }

  [part\$='button']::before {
    margin-top: 0.3em;
  }

  [part='decrease-button']::before {
    content: var(--lumo-icons-minus);
  }

  [part='increase-button']::before {
    content: var(--lumo-icons-plus);
  }

  /* RTL specific styles */
  :host([dir='rtl']:not([theme~='align-right'])) ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;c("vaadin-number-field",[$,Xs,Wn],{moduleId:"lumo-number-field"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */c("vaadin-number-field",ie,{moduleId:"vaadin-number-field-styles"});class Pt extends Qs(v(w(g))){static get is(){return"vaadin-number-field"}static get template(){return _`
      <style>
        :host([readonly]) [part$='button'] {
          pointer-events: none;
        }

        [part='decrease-button']::before {
          content: '−';
        }

        [part='increase-button']::before {
          content: '+';
        }

        [part='decrease-button'],
        [part='increase-button'] {
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([dir='rtl']) [part='input-field'] {
          direction: ltr;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <div
            disabled$="[[!_allowed(-1, value, min, max, step)]]"
            part="decrease-button"
            on-click="_decreaseValue"
            on-touchend="_decreaseButtonTouchend"
            hidden$="[[!_isStepButtonVisible(hasControls, stepButtonsVisible)]]"
            aria-hidden="true"
            slot="prefix"
          ></div>
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div
            disabled$="[[!_allowed(1, value, min, max, step)]]"
            part="increase-button"
            on-click="_increaseValue"
            on-touchend="_increaseButtonTouchend"
            hidden$="[[!_isStepButtonVisible(hasControls, stepButtonsVisible)]]"
            aria-hidden="true"
            slot="suffix"
          ></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{hasControls:{type:Boolean,value:!1,reflectToAttribute:!0},stepButtonsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},min:{type:Number},max:{type:Number},step:{type:Number}}}static get observers(){return["_stepChanged(step, inputElement)"]}static get delegateProps(){return[...super.delegateProps,"min","max"]}static get constraints(){return[...super.constraints,"min","max","step"]}constructor(){super(),this._setType("number")}get slotStyles(){const e=this.localName;return[...super.slotStyles,`
        ${e} input[type="number"]::-webkit-outer-spin-button,
        ${e} input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        ${e} input[type="number"] {
          -moz-appearance: textfield;
        }

        ${e}[dir='rtl'] input[type="number"]::placeholder {
          direction: rtl;
        }

        ${e}[dir='rtl']:not([step-buttons-visible]):not([has-controls]) input[type="number"]::placeholder {
          text-align: left;
        }
      `]}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new et(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new we(this.inputElement,this._labelController)),this._tooltipController=new O(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top")}checkValidity(){return this.inputElement?this.inputElement.checkValidity():!this.invalid}_decreaseButtonTouchend(e){e.preventDefault(),this._decreaseValue()}_increaseButtonTouchend(e){e.preventDefault(),this._increaseValue()}_decreaseValue(){this._incrementValue(-1)}_increaseValue(){this._incrementValue(1)}_incrementValue(e){if(this.disabled||this.readonly)return;const t=this.step||1;let i=parseFloat(this.value);this.value?i<this.min?(e=0,i=this.min):i>this.max&&(e=0,i=this.max):this.min===0&&e<0||this.max===0&&e>0||this.max===0&&this.min===0?(e=0,i=0):(this.max==null||this.max>=0)&&(this.min==null||this.min<=0)?i=0:this.min>0?(i=this.min,this.max<0&&e<0&&(i=this.max),e=0):this.max<0&&(i=this.max,e<0?e=0:this._getIncrement(1,i-t)>this.max?i-=2*t:i-=t);const r=this._getIncrement(e,i);(!this.value||e===0||this._incrementIsInsideTheLimits(e,i))&&this._setValue(r)}_setValue(e){this.value=this.inputElement.value=String(parseFloat(e)),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_getIncrement(e,t){let i=this.step||1,r=this.min||0;const o=Math.max(this._getMultiplier(t),this._getMultiplier(i),this._getMultiplier(r));i*=o,t=Math.round(t*o),r*=o;const l=(t-r)%i;return e>0?(t-l+i)/o:e<0?(t-(l||i))/o:t/o}_getDecimalCount(e){const t=String(e),i=t.indexOf(".");return i===-1?1:t.length-i-1}_getMultiplier(e){if(!isNaN(e))return 10**this._getDecimalCount(e)}_incrementIsInsideTheLimits(e,t){return e<0?this.min==null||this._getIncrement(e,t)>=this.min:e>0?this.max==null||this._getIncrement(e,t)<=this.max:this._getIncrement(e,t)<=this.max&&this._getIncrement(e,t)>=this.min}_allowed(e){const t=e*(this.step||1),i=parseFloat(this.value);return!this.value||!this.disabled&&this._incrementIsInsideTheLimits(t,i)}_stepChanged(e,t){t&&(t.step=e||"any")}_valueChanged(e,t){e&&isNaN(parseFloat(e))?this.value="":typeof this.value!="string"&&(this.value=String(this.value)),super._valueChanged(this.value,t)}_onKeyDown(e){e.key==="ArrowUp"?(e.preventDefault(),this._increaseValue()):e.key==="ArrowDown"&&(e.preventDefault(),this._decreaseValue()),super._onKeyDown(e)}_isStepButtonVisible(e,t){return e||t}_setHasInputValue(e){const t=e.composedPath()[0];this._hasInputValue=t.value.length>0||t.validity.badInput}}customElements.define(Pt.is,Pt);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class us extends Pt{static get is(){return"vaadin-integer-field"}constructor(){super(),this.allowedCharPattern="[-+\\d]"}_valueChanged(e,t){if(e!==""&&!this.__isInteger(e)){console.warn(`Trying to set non-integer value "${e}" to <vaadin-integer-field>. Clearing the value.`),this.value="";return}super._valueChanged(e,t)}_stepChanged(e,t){if(e!=null&&!this.__hasOnlyDigits(e)){console.warn(`<vaadin-integer-field> The \`step\` property must be a positive integer but \`${e}\` was provided, so the property was reset to \`null\`.`),this.step=null;return}super._stepChanged(e,t)}__isInteger(e){return/^(-\d)?\d*$/.test(String(e))}__hasOnlyDigits(e){return/^\d+$/.test(String(e))}}customElements.define(us.is,us);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jn=m`
  :host {
    position: absolute;
    right: 0;
    top: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    min-width: auto;
    background: transparent;
    outline: none;
  }
`;c("vaadin-password-field-button",[Rt,jn],{moduleId:"lumo-password-field-button"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Yn=m`
  [part='reveal-button']::before {
    content: var(--lumo-icons-eye);
  }

  :host([password-visible]) [part='reveal-button']::before {
    content: var(--lumo-icons-eye-disabled);
  }

  /* Make it easy to hide the button across the whole app */
  [part='reveal-button'] {
    position: relative;
    display: var(--lumo-password-field-reveal-button-display, block);
  }

  [part='reveal-button'][hidden] {
    display: none !important;
  }
`;c("vaadin-password-field",[$,Yn],{moduleId:"lumo-password-field"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class cs extends Ke{static get is(){return"vaadin-password-field-button"}static get template(){return _`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <slot name="tooltip"></slot>
    `}}customElements.define(cs.is,cs);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gn=_`
  <div part="reveal-button" slot="suffix">
    <slot name="reveal"></slot>
  </div>
`;let Pe;class ps extends Js{static get is(){return"vaadin-password-field"}static get template(){if(!Pe){Pe=super.template.cloneNode(!0);const e=Gn.content.querySelector('[part="reveal-button"]');Pe.content.querySelector('[part="input-field"]').appendChild(e)}return Pe}static get properties(){return{revealButtonHidden:{type:Boolean,observer:"_revealButtonHiddenChanged",value:!1},passwordVisible:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_passwordVisibleChanged",readOnly:!0},i18n:{type:Object,value:()=>({reveal:"Show password"})}}}static get observers(){return["__i18nChanged(i18n.*)"]}get slotStyles(){const e=this.localName;return[...super.slotStyles,`
        ${e} [slot="input"]::-ms-reveal {
          display: none;
        }
      `]}get _revealNode(){return this._revealButtonController&&this._revealButtonController.node}constructor(){super(),this._setType("password"),this.__boundRevealButtonClick=this._onRevealButtonClick.bind(this),this.__boundRevealButtonTouchend=this._onRevealButtonTouchend.bind(this)}ready(){super.ready(),this._revealPart=this.shadowRoot.querySelector('[part="reveal-button"]'),this._revealButtonController=new tt(this,"reveal",()=>document.createElement("vaadin-password-field-button"),(e,t)=>{t.disabled=e.disabled,t.addEventListener("click",e.__boundRevealButtonClick),t.addEventListener("touchend",e.__boundRevealButtonTouchend)}),this.addController(this._revealButtonController),this.__updateAriaLabel(this.i18n),this._updateToggleState(!1),this._toggleRevealHidden(this.revealButtonHidden),this.inputElement&&(this.inputElement.autocapitalize="off")}_shouldSetFocus(e){return e.target===this.inputElement||e.target===this._revealNode}_shouldRemoveFocus(e){return!(e.relatedTarget===this._revealNode||e.relatedTarget===this.inputElement&&e.target===this._revealNode)}_setFocused(e){if(super._setFocused(e),!e)this._setPasswordVisible(!1);else{const t=this.getRootNode().activeElement===this._revealNode;this.toggleAttribute("focus-ring",this._keyboardActive&&!t)}}__updateAriaLabel(e){e.reveal&&this._revealNode&&this._revealNode.setAttribute("aria-label",e.reveal)}__i18nChanged(e){this.__updateAriaLabel(e.base)}_revealButtonHiddenChanged(e){this._toggleRevealHidden(e)}_togglePasswordVisibility(){this._setPasswordVisible(!this.passwordVisible)}_onRevealButtonClick(){this._togglePasswordVisibility()}_onRevealButtonTouchend(e){e.preventDefault(),this._togglePasswordVisibility(),this.inputElement.focus()}_toggleRevealHidden(e){this._revealNode&&(e?(this._revealPart.setAttribute("hidden",""),this._revealNode.setAttribute("tabindex","-1"),this._revealNode.setAttribute("aria-hidden","true")):(this._revealPart.removeAttribute("hidden"),this._revealNode.setAttribute("tabindex","0"),this._revealNode.removeAttribute("aria-hidden")))}_updateToggleState(e){this._revealNode&&this._revealNode.setAttribute("aria-pressed",e?"true":"false")}_passwordVisibleChanged(e){this._setType(e?"text":"password"),this._updateToggleState(e)}_disabledChanged(e,t){super._disabledChanged(e,t),this._revealNode&&(this._revealNode.disabled=e)}}customElements.define(ps.is,ps);const Kn=m`
  :host {
    max-width: calc(var(--lumo-size-m) * 10);
    background: var(--lumo-base-color) linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
  }

  [part='form'] {
    padding: var(--lumo-space-l);
  }

  [part='form-title'] {
    margin-top: calc(var(--lumo-font-size-xxxl) - var(--lumo-font-size-xxl));
  }

  #forgotPasswordButton {
    margin: var(--lumo-space-s) auto;
  }

  [part='error-message'] {
    background-color: var(--lumo-error-color-10pct);
    padding: var(--lumo-space-m);
    border-radius: var(--lumo-border-radius-m);
    margin-top: var(--lumo-space-m);
    margin-bottom: var(--lumo-space-s);
    color: var(--lumo-error-text-color);
  }

  :host(:not([dir='rtl'])) [part='error-message'] {
    padding-left: var(--lumo-size-m);
  }

  :host([dir='rtl']) [part='error-message'] {
    padding-right: var(--lumo-size-m);
  }

  [part='error-message']::before {
    content: var(--lumo-icons-error);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    position: absolute;
    width: var(--lumo-size-m);
    height: 1em;
    line-height: 1;
    text-align: center;
  }

  :host(:not([dir='rtl'])) [part='error-message']::before {
    /* Visual centering */
    margin-left: calc(var(--lumo-size-m) * -0.95);
  }

  :host([dir='rtl']) [part='error-message']::before {
    /* Visual centering */
    margin-right: calc(var(--lumo-size-m) * -0.95);
  }

  [part='error-message-title'] {
    margin: 0 0 0.25em;
    color: inherit;
  }

  [part='error-message-description'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
    margin: 0;
    opacity: 0.9;
  }

  [part='footer'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-s);
    color: var(--lumo-secondary-text-color);
  }
`;c("vaadin-login-form-wrapper",[Wt,jt,Kn],{moduleId:"lumo-login-form-wrapper"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ii=s=>class extends s{static get properties(){return{action:{type:String,value:null},disabled:{type:Boolean,value:!1,notify:!0},error:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0},noForgotPassword:{type:Boolean,value:!1},noAutofocus:{type:Boolean,value:!1},i18n:{type:Object,value(){return{form:{title:"Log in",username:"Username",password:"Password",submit:"Log in",forgotPassword:"Forgot password"},errorMessage:{title:"Incorrect username or password",message:"Check that you have entered the correct username and password and try again."}}}},_preventAutoEnable:{type:Boolean,value:!1}}}_retargetEvent(t){t.stopPropagation();const{detail:i,composed:r,cancelable:o,bubbles:l}=t;this.dispatchEvent(new CustomEvent(t.type,{bubbles:l,cancelable:o,composed:r,detail:i}))||t.preventDefault()}};/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ms extends ii(w(v(g))){static get template(){return _`
      <style>
        :host {
          overflow: hidden;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='form'] {
          flex: 1;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        [part='form-title'] {
          margin: 0;
        }

        [part='error-message'] {
          position: relative;
        }
      </style>
      <section part="form">
        <h2 part="form-title">[[i18n.form.title]]</h2>
        <div part="error-message" hidden$="[[!error]]">
          <h5 part="error-message-title">[[i18n.errorMessage.title]]</h5>
          <p part="error-message-description">[[i18n.errorMessage.message]]</p>
        </div>

        <slot name="form"></slot>

        <vaadin-button
          id="forgotPasswordButton"
          theme="tertiary small forgot-password"
          on-click="_forgotPassword"
          hidden$="[[noForgotPassword]]"
          >[[i18n.form.forgotPassword]]</vaadin-button
        >

        <div part="footer">
          <p>[[i18n.additionalInformation]]</p>
        </div>
      </section>
    `}static get is(){return"vaadin-login-form-wrapper"}_forgotPassword(){this.dispatchEvent(new CustomEvent("forgot-password"))}}customElements.define(ms.is,ms);c("vaadin-login-form",m`
    vaadin-button[part='vaadin-login-submit'] {
      margin-top: var(--lumo-space-l);
      margin-bottom: var(--lumo-space-s);
    }
  `,{moduleId:"lumo-login-form"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class fs extends ii(w(v(g))){static get template(){return _`
      <style>
        [part='vaadin-login-native-form'] * {
          width: 100%;
        }
      </style>
      <vaadin-login-form-wrapper
        theme$="[[_theme]]"
        part="vaadin-login-native-form-wrapper"
        error="[[error]]"
        no-forgot-password="[[noForgotPassword]]"
        i18n="[[i18n]]"
        on-login="_retargetEvent"
        on-forgot-password="_retargetEvent"
      >
        <form part="vaadin-login-native-form" method="POST" action$="[[action]]" slot="form">
          <input id="csrf" type="hidden" />
          <vaadin-text-field
            name="username"
            label="[[i18n.form.username]]"
            id="vaadinLoginUsername"
            required
            on-keydown="_handleInputKeydown"
            autocapitalize="none"
            autocorrect="off"
            spellcheck="false"
            autocomplete="username"
          >
            <input type="text" slot="input" on-keyup="_handleInputKeyup" />
          </vaadin-text-field>

          <vaadin-password-field
            name="password"
            label="[[i18n.form.password]]"
            id="vaadinLoginPassword"
            required
            on-keydown="_handleInputKeydown"
            spellcheck="false"
            autocomplete="current-password"
          >
            <input type="password" slot="input" on-keyup="_handleInputKeyup" />
          </vaadin-password-field>

          <vaadin-button part="vaadin-login-submit" theme="primary contained" on-click="submit" disabled$="[[disabled]]"
            >[[i18n.form.submit]]</vaadin-button
          >
        </form>
      </vaadin-login-form-wrapper>
    `}static get is(){return"vaadin-login-form"}connectedCallback(){super.connectedCallback(),this.noAutofocus||this.$.vaadinLoginUsername.focus()}_attachDom(e){this.appendChild(e)}static get observers(){return["_errorChanged(error)"]}_errorChanged(){this.error&&!this._preventAutoEnable&&(this.disabled=!1)}submit(){const e=this.$.vaadinLoginUsername,t=this.$.vaadinLoginPassword;if(this.disabled||!(e.validate()&&t.validate()))return;this.error=!1,this.disabled=!0;const i={bubbles:!0,cancelable:!0,detail:{username:e.value,password:t.value}},r=this.dispatchEvent(new CustomEvent("login",i));if(this.action&&r){const o=document.querySelector("meta[name=_csrf_parameter]"),l=document.querySelector("meta[name=_csrf]");o&&l&&(this.$.csrf.name=o.content,this.$.csrf.value=l.content),this.querySelector('[part="vaadin-login-native-form"]').submit()}}_handleInputKeydown(e){if(e.key==="Enter"){const{currentTarget:t}=e,i=t.id==="vaadinLoginUsername"?this.$.vaadinLoginPassword:this.$.vaadinLoginUsername;t.validate()&&(i.validate()?this.submit():i.focus())}}_handleInputKeyup(e){const t=e.currentTarget;e.key==="Tab"&&t instanceof HTMLInputElement&&t.select()}}customElements.define(fs.is,fs);const Jn=m`
  :host {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  [part='backdrop'] {
    background: var(--lumo-base-color) linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
  }

  [part='content'] {
    padding: 0;
  }

  [part='overlay'] {
    background: none;
    border-radius: 0;
    box-shadow: none;
    width: 100%;
    height: 100%;
  }

  [part='card'] {
    width: calc(var(--lumo-size-m) * 10);
    background: var(--lumo-base-color) linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
  }

  [part='brand'] {
    padding: var(--lumo-space-l) var(--lumo-space-xl) var(--lumo-space-l) var(--lumo-space-l);
    background-color: var(--lumo-primary-color);
    color: var(--lumo-primary-contrast-color);
    min-height: calc(var(--lumo-size-m) * 5);
  }

  [part='description'] {
    line-height: var(--lumo-line-height-s);
    color: var(--lumo-tint-70pct);
    margin-bottom: 0;
  }

  [part='content'] {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  [part='card'] {
    border-radius: var(--lumo-border-radius-l);
    box-shadow: var(--lumo-box-shadow-s);
    margin: var(--lumo-space-s);
    height: auto;
  }

  /* Small screen */
  @media only screen and (max-width: 500px) {
    [part='overlay'],
    [part='content'] {
      height: 100%;
    }

    [part='content'] {
      min-height: 100%;
      background: var(--lumo-base-color);
      align-items: flex-start;
    }

    [part='card'],
    [part='overlay'] {
      width: 100%;
      border-radius: 0;
      box-shadow: none;
      margin: 0;
    }

    /* RTL styles */
    :host([dir='rtl']) [part='brand'] {
      padding: var(--lumo-space-l) var(--lumo-space-l) var(--lumo-space-l) var(--lumo-space-xl);
    }
  }

  /* Landscape small screen */
  @media only screen and (max-height: 600px) and (min-width: 600px) and (orientation: landscape) {
    [part='card'] {
      flex-direction: row;
      align-items: stretch;
      max-width: calc(var(--lumo-size-m) * 16);
      width: 100%;
    }

    [part='brand'],
    [part='form'] {
      flex: auto;
      flex-basis: 0;
      box-sizing: border-box;
    }

    [part='brand'] {
      justify-content: flex-start;
    }

    [part='form'] {
      padding: var(--lumo-space-l);
      overflow: auto;
    }
  }

  /* Landscape really small screen */
  @media only screen and (max-height: 500px) and (min-width: 600px) and (orientation: landscape),
    only screen and (max-width: 600px) and (min-width: 600px) and (orientation: landscape) {
    [part='content'] {
      height: 100vh;
    }

    [part='card'] {
      margin: 0;
      width: 100%;
      max-width: none;
      height: 100%;
      flex: auto;
      border-radius: 0;
      box-shadow: none;
    }

    [part='form'] {
      height: 100%;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }
  }

  /* Handle iPhone X notch */
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    [part='card'] {
      padding-right: constant(safe-area-inset-right);
      padding-right: env(safe-area-inset-right);

      padding-left: constant(safe-area-inset-left);
      padding-left: env(safe-area-inset-left);
    }

    [part='brand'] {
      margin-left: calc(constant(safe-area-inset-left) * -1);
      margin-left: calc(env(safe-area-inset-left) * -1);

      padding-left: calc(var(--lumo-space-l) + constant(safe-area-inset-left));
      padding-left: calc(var(--lumo-space-l) + env(safe-area-inset-left));
    }

    /* RTL styles */
    :host([dir='rtl']) [part='card'] {
      padding-left: constant(safe-area-inset-right);
      padding-left: env(safe-area-inset-right);
      padding-right: constant(safe-area-inset-left);
      padding-right: env(safe-area-inset-left);
    }

    :host([dir='rtl']) [part='brand'] {
      margin-right: calc(constant(safe-area-inset-left) * -1);
      margin-right: calc(env(safe-area-inset-left) * -1);
      padding-right: calc(var(--lumo-space-l) + constant(safe-area-inset-left));
      padding-right: calc(var(--lumo-space-l) + env(safe-area-inset-left));
    }
  }
`;c("vaadin-login-overlay-wrapper",[Wt,jt,Jn],{moduleId:"vaadin-login-overlay-wrapper-lumo-styles"});const Xn=m`
  :host([theme~='with-overlay']) {
    min-height: 100%;
    display: flex;
    justify-content: center;
    max-width: 100%;
  }

  /* Landscape small screen */
  @media only screen and (max-height: 600px) and (min-width: 600px) and (orientation: landscape) {
    :host([theme~='with-overlay']) [part='form'] {
      height: 100%;
      -webkit-overflow-scrolling: touch;
      flex: 1;
      padding: 2px;
    }
  }
`;c("vaadin-login-form-wrapper",[Wt,jt,Xn],{moduleId:"lumo-login-overlay"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wr=document.createElement("template");Wr.innerHTML=`<dom-module id="vaadin-login-overlay-wrapper-template">
  <template>
    <style>
      [part="overlay"] {
        outline: none;
      }

      [part="card"] {
        max-width: 100%;
        box-sizing: border-box;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      [part="brand"] {
        box-sizing: border-box;
        overflow: hidden;
        flex-grow: 1;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }

      [part="brand"] h1 {
        color: inherit;
        margin: 0;
      }
    </style>
    <section part="card">
      <div part="brand">
        <slot name="title">
          <h1 part="title">[[title]]</h1>
        </slot>
        <p part="description">[[description]]</p>
      </div>
      <div part="form">
        <slot></slot>
      </div>
    </section>
  </template>
</dom-module>`;document.head.appendChild(Wr.content);let Oe;class _s extends ee{static get is(){return"vaadin-login-overlay-wrapper"}static get properties(){return{title:{type:String},description:{type:String}}}static get template(){if(!Oe){Oe=super.template.cloneNode(!0);const e=Oo.import(`${this.is}-template`,"template"),t=e.content.querySelector("[part=card]"),i=e.content.querySelector("style"),r=Oe.content.querySelector("#content");r.replaceChild(t,r.children[0]),r.appendChild(i)}return Oe}}customElements.define(_s.is,_s);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class gs extends ii(w(v(g))){static get template(){return _`
      <vaadin-login-overlay-wrapper
        id="vaadinLoginOverlayWrapper"
        opened="{{opened}}"
        focus-trap
        with-backdrop
        title="[[title]]"
        description="[[description]]"
        theme$="[[_theme]]"
      >
        <vaadin-login-form
          theme="with-overlay"
          id="vaadinLoginForm"
          action="[[action]]"
          disabled="{{disabled}}"
          error="{{error}}"
          no-autofocus="[[noAutofocus]]"
          no-forgot-password="[[noForgotPassword]]"
          i18n="{{i18n}}"
          on-login="_retargetEvent"
          on-forgot-password="_retargetEvent"
        ></vaadin-login-form>
      </vaadin-login-overlay-wrapper>
    `}static get is(){return"vaadin-login-overlay"}static get properties(){return{description:{type:String,value:"Application description",notify:!0},opened:{type:Boolean,value:!1,observer:"_onOpenedChange"},title:{type:String,value:"App name"}}}static get observers(){return["__i18nChanged(i18n.header.*)"]}ready(){super.ready(),this._preventClosingLogin=this._preventClosingLogin.bind(this)}connectedCallback(){super.connectedCallback(),this.$.vaadinLoginOverlayWrapper.addEventListener("vaadin-overlay-outside-click",this._preventClosingLogin),this.$.vaadinLoginOverlayWrapper.addEventListener("vaadin-overlay-escape-press",this._preventClosingLogin),this.__restoreOpened&&(this.$.vaadinLoginOverlayWrapper.opened=!0)}disconnectedCallback(){super.disconnectedCallback(),this.$.vaadinLoginOverlayWrapper.removeEventListener("vaadin-overlay-outside-click",this._preventClosingLogin),this.$.vaadinLoginOverlayWrapper.removeEventListener("vaadin-overlay-escape-press",this._preventClosingLogin),this.__restoreOpened=this.$.vaadinLoginOverlayWrapper.opened,this.$.vaadinLoginOverlayWrapper.opened=!1}__i18nChanged(e){const t=e.base;!t||(this.title=t.title,this.description=t.description)}_preventClosingLogin(e){e.preventDefault()}_onOpenedChange(){this.opened?(this._undoTeleport=this._teleport(this._getElementsToTeleport()),document.body.style.pointerEvents=this.$.vaadinLoginOverlayWrapper._previousDocumentPointerEvents):(this.$.vaadinLoginForm.$.vaadinLoginUsername.value="",this.$.vaadinLoginForm.$.vaadinLoginPassword.value="",this.disabled=!1,this._undoTeleport&&this._undoTeleport())}_teleport(e){const t=Array.from(e).map(i=>this.$.vaadinLoginOverlayWrapper.appendChild(i));return()=>{for(;t.length>0;)this.appendChild(t.shift())}}_getElementsToTeleport(){return this.querySelectorAll("[slot=title]")}}customElements.define(gs.is,gs);const Qn=m`
  :host {
    margin: calc(var(--lumo-space-xs) / 2);
    margin-left: 0;
    border-radius: 0;
  }

  [part='label'] {
    width: 100%;
  }

  /* NOTE(web-padawan): avoid using shorthand padding property for IE11 */
  [part='label'] ::slotted(vaadin-context-menu-item) {
    justify-content: center;
    background-color: transparent;
    height: var(--lumo-button-size);
    margin: 0 calc((var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2) * -1);
    padding-left: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2);
    padding-right: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2);
  }

  :host([theme~='small']) [part='label'] ::slotted(vaadin-context-menu-item) {
    min-height: var(--lumo-size-s);
    margin: 0 calc((var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2) * -1);
    padding-left: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2);
    padding-right: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2);
  }

  :host([theme~='tertiary']) [part='label'] ::slotted(vaadin-context-menu-item) {
    margin: 0 calc((var(--lumo-button-size) / 6) * -1);
    padding-left: calc(var(--lumo-button-size) / 6);
    padding-right: calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline']) {
    margin-top: calc(var(--lumo-space-xs) / 2);
    margin-bottom: calc(var(--lumo-space-xs) / 2);
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([theme~='tertiary-inline']) [part='label'] ::slotted(vaadin-context-menu-item) {
    margin: 0;
    padding: 0;
  }

  :host(:first-of-type) {
    border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);

    /* Needed to retain the focus-ring with border-radius */
    margin-left: calc(var(--lumo-space-xs) / 2);
  }

  :host(:nth-last-of-type(2)),
  :host([part='overflow-button']) {
    border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;
  }

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    border-radius: var(--lumo-border-radius-m);
  }

  :host([part='overflow-button']) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([part='overflow-button']) ::slotted(*) {
    font-size: var(--lumo-font-size-xl);
  }

  :host([part='overflow-button']) [part='prefix'],
  :host([part='overflow-button']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL styles */
  :host([dir='rtl']) {
    margin-left: calc(var(--lumo-space-xs) / 2);
    margin-right: 0;
    border-radius: 0;
  }

  :host([dir='rtl']:first-of-type) {
    border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([dir='rtl']:nth-last-of-type(2)),
  :host([dir='rtl'][part='overflow-button']) {
    border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);
  }
`;c("vaadin-menu-bar-button",[Rt,Qn],{moduleId:"lumo-menu-bar-button"});/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */c("vaadin-menu-bar-button",m`
    [part='label'] ::slotted(vaadin-context-menu-item) {
      position: relative;
      z-index: 1;
    }
  `,{moduleId:"vaadin-menu-bar-button-styles"});class vs extends Ke{static get is(){return"vaadin-menu-bar-button"}}customElements.define(vs.is,vs);c("vaadin-context-menu-item",m`
    :host([theme='menu-bar-item']) [part='content'] {
      display: flex;
      /* tweak to inherit centering from menu bar button */
      align-items: inherit;
      justify-content: inherit;
    }

    :host([theme='menu-bar-item']) [part='content'] ::slotted(vaadin-icon),
    :host([theme='menu-bar-item']) [part='content'] ::slotted(iron-icon) {
      display: inline-block;
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    :host([theme='menu-bar-item']) [part='content'] ::slotted(vaadin-icon[icon^='vaadin:']),
    :host([theme='menu-bar-item']) [part='content'] ::slotted(iron-icon[icon^='vaadin:']) {
      padding: var(--lumo-space-xs);
      box-sizing: border-box !important;
    }
  `,{moduleId:"lumo-menu-bar-item"});c("vaadin-context-menu-overlay",m`
    :host(:first-of-type) {
      padding-top: var(--lumo-space-xs);
    }
  `,{moduleId:"lumo-menu-bar-overlay"});c("vaadin-menu-bar",m`
    :host([has-single-button]) [part$='button'] {
      border-radius: var(--lumo-border-radius-m);
    }

    :host([theme~='end-aligned']) [part$='button']:first-child,
    :host([theme~='end-aligned'][has-single-button]) [part$='button'] {
      margin-inline-start: auto;
    }
  `,{moduleId:"lumo-menu-bar"});/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class bs extends Lo{static get is(){return"vaadin-menu-bar-submenu"}constructor(){super(),this.openOn="opensubmenu"}_openedChanged(e){this.$.overlay.opened=e}close(){super.close(),this.hasAttribute("is-root")&&this.getRootNode().host._close()}}customElements.define(bs.is,bs);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zn=s=>class extends te(s){static get properties(){return{_hasOverflow:{type:Boolean,value:!1}}}static get observers(){return["_menuItemsChanged(items, items.splices)"]}get _observeParent(){return!0}ready(){super.ready(),this.setAttribute("role","menubar")}connectedCallback(){super.connectedCallback(),this._initButtonAttrs(this._overflow)}get _buttons(){return Array.from(this.shadowRoot.querySelectorAll('[part$="button"]'))}get _container(){return this.shadowRoot.querySelector('[part="container"]')}get _overflow(){return this.shadowRoot.querySelector('[part="overflow-button"]')}_menuItemsChanged(e){e!==this._oldItems&&(this._oldItems=e,this.__renderButtons(e))}__getOverflowCount(e){return e.item&&e.item.children&&e.item.children.length||0}__restoreButtons(e){for(let t=0;t<e.length;t++){const i=e[t];i.disabled=i.item&&i.item.disabled||this.disabled,i.style.visibility="",i.style.position="";const r=i.item&&i.item.component;r instanceof HTMLElement&&r.classList.contains("vaadin-menu-item")&&(i.appendChild(r),r.classList.remove("vaadin-menu-item"))}this.__updateOverflow([])}__updateOverflow(e){this._overflow.item={children:e},this._hasOverflow=e.length>0}__setOverflowItems(e,t){const i=this._container;if(i.offsetWidth<i.scrollWidth){this._hasOverflow=!0;const r=this.getAttribute("dir")==="rtl";let o;for(o=e.length;o>0;o--){const a=e[o-1],n=getComputedStyle(a);if(!r&&a.offsetLeft+a.offsetWidth<i.offsetWidth-t.offsetWidth||r&&a.offsetLeft>=t.offsetWidth)break;a.disabled=!0,a.style.visibility="hidden",a.style.position="absolute",a.style.width=n.width}const l=e.filter((a,n)=>n>=o).map(a=>a.item);this.__updateOverflow(l)}}__detectOverflow(){const e=this._overflow,t=this._buttons.filter(l=>l!==e),i=this.__getOverflowCount(e);this.__restoreButtons(t),this.__setOverflowItems(t,e);const r=this.__getOverflowCount(e);i!==r&&this._subMenu.opened&&this._subMenu.close();const o=r===t.length||r===0&&t.length===1;this.toggleAttribute("has-single-button",o)}_removeButtons(){const e=this._container;for(;e.children.length>1;)e.removeChild(e.firstElementChild)}_initButton(e){const t=document.createElement("vaadin-menu-bar-button");t.setAttribute("part","menu-bar-button");const i={...e};if(t.item=i,e.component){const r=this.__getComponent(i);i.component=r,r.item=i,t.appendChild(r)}else e.text&&(t.textContent=e.text);return t}_initButtonAttrs(e){e.setAttribute("role","menuitem"),(e===this._overflow||e.item&&e.item.children)&&(e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded","false"))}_setButtonDisabled(e,t){e.disabled=t,e.setAttribute("tabindex",t?"-1":"0")}_setButtonTheme(e,t){let i=t;const r=e.item&&e.item.theme;r!=null&&(i=Array.isArray(r)?r.join(" "):r),i?e.setAttribute("theme",i):e.removeAttribute("theme")}_appendButton(e){this._container.insertBefore(e,this._overflow)}__getComponent(e){const t=e.component;let i;const r=t instanceof HTMLElement;if(r&&t.localName==="vaadin-context-menu-item"?i=t:(i=document.createElement("vaadin-context-menu-item"),i.appendChild(r?t:document.createElement(t))),e.text){const o=i.firstChild||i;o.textContent=e.text}return i.setAttribute("theme","menu-bar-item"),i}__renderButtons(e=[]){this._removeButtons(),e.length!==0&&(e.forEach(t=>{const i=this._initButton(t);this._appendButton(i),this._setButtonDisabled(i,t.disabled),this._initButtonAttrs(i),this._setButtonTheme(i,this._theme)}),this.__detectOverflow())}_onResize(){this.__detectOverflow()}};/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const el=s=>class extends Dt(W(s)){static get properties(){return{openOnHover:{type:Boolean}}}constructor(){super(),this.__boundOnContextMenuKeydown=this.__onContextMenuKeydown.bind(this)}static get observers(){return["_itemsChanged(items, items.splices)"]}ready(){super.ready(),this.addEventListener("mousedown",()=>this._hideTooltip()),this.addEventListener("mouseleave",()=>this._hideTooltip()),this._subMenu.addEventListener("item-selected",this.__onItemSelected.bind(this)),this._subMenu.addEventListener("close-all-menus",this.__onEscapeClose.bind(this)),this._subMenu.$.overlay.addEventListener("keydown",this.__boundOnContextMenuKeydown);const i=this._container;i.addEventListener("click",this.__onButtonClick.bind(this)),i.addEventListener("mouseover",r=>this._onMouseOver(r))}get focused(){return this.shadowRoot.activeElement||this._expandedButton}get _vertical(){return!1}_getItems(){return this._buttons}get __isRTL(){return this.getAttribute("dir")==="rtl"}disconnectedCallback(){super.disconnectedCallback(),this._hideTooltip(!0)}_showTooltip(t,i){const r=this._tooltipController.node;r&&r.isConnected&&(r.generator===void 0&&(r.generator=({item:o})=>o&&o.tooltip),this._subMenu.opened||(this._tooltipController.setTarget(t),this._tooltipController.setContext({item:t.item}),r._stateController.open({hover:i,focus:!i})))}_hideTooltip(t){const i=this._tooltipController.node;i&&i._stateController.close(t)}_setExpanded(t,i){t.toggleAttribute("expanded",i),t.toggleAttribute("active",i),t.setAttribute("aria-expanded",i?"true":"false")}_setTabindex(t,i){t.setAttribute("tabindex",i?"0":"-1")}_focusItem(t,i){const r=i&&this.focused===this._expandedButton;r&&this._close(),super._focusItem(t,i),this._buttons.forEach(o=>{this._setTabindex(o,o===t)}),r&&t.item&&t.item.children?this.__openSubMenu(t,!0,{keepFocus:!0}):t===this._overflow?this._hideTooltip():this._showTooltip(t)}_getButtonFromEvent(t){return Array.from(t.composedPath()).find(i=>i.localName==="vaadin-menu-bar-button")}_setFocused(t){if(t){const i=this.shadowRoot.querySelector('[part$="button"][tabindex="0"]');i&&this._buttons.forEach(r=>{this._setTabindex(r,r===i),r===i&&r!==this._overflow&&zo()&&this._showTooltip(r)})}else this._hideTooltip()}_onArrowDown(t){t.preventDefault();const i=this._getButtonFromEvent(t);i===this._expandedButton?this._focusFirstItem():this.__openSubMenu(i,!0)}_onArrowUp(t){t.preventDefault();const i=this._getButtonFromEvent(t);i===this._expandedButton?this._focusLastItem():this.__openSubMenu(i,!0,{focusLast:!0})}_onEscape(t){t.composedPath().includes(this._expandedButton)&&this._close(!0),this._hideTooltip(!0)}_onKeyDown(t){switch(t.key){case"ArrowDown":this._onArrowDown(t);break;case"ArrowUp":this._onArrowUp(t);break;default:super._onKeyDown(t);break}}get _subMenu(){return this.shadowRoot.querySelector("vaadin-menu-bar-submenu")}_itemsChanged(){const t=this._subMenu;t&&t.opened&&t.close()}_onMouseOver(t){const i=this._getButtonFromEvent(t);if(!i)this._hideTooltip();else if(i!==this._expandedButton){const r=this._subMenu.opened;i.item.children&&(this.openOnHover||r)?this.__openSubMenu(i,!1):r&&this._close(),i===this._overflow||this.openOnHover&&i.item.children?this._hideTooltip():this._showTooltip(i,!0)}}__onContextMenuKeydown(t){const i=Array.from(t.composedPath()).find(r=>r._item);if(i){const r=i.parentNode;t.keyCode===38&&i===r.items[0]&&this._close(!0),(t.keyCode===37||t.keyCode===39&&!i._item.children)&&(t.stopImmediatePropagation(),this._onKeyDown(t))}}__fireItemSelected(t){this.dispatchEvent(new CustomEvent("item-selected",{detail:{value:t}}))}__onButtonClick(t){t.stopPropagation();const i=this._getButtonFromEvent(t);i&&this.__openSubMenu(i,!1)}__openSubMenu(t,i,r={}){const o=this._subMenu,l=t.item;if(o.opened&&(this._close(),o.listenOn===t))return;const a=l&&l.children;if(!a||a.length===0){this.__fireItemSelected(l);return}o.items=a,o.listenOn=t;const n=o.$.overlay;n.positionTarget=t,n.noVerticalOverlap=!0,this._expandedButton=t,requestAnimationFrame(()=>{t.dispatchEvent(new CustomEvent("opensubmenu",{detail:{children:a}})),this._hideTooltip(!0),this._setExpanded(t,!0)}),this.style.pointerEvents="auto",n.addEventListener("vaadin-overlay-open",()=>{r.focusLast&&this._focusLastItem(),r.keepFocus&&this._focusItem(this._expandedButton,!1),i||n.$.overlay.focus(),n._updatePosition()},{once:!0})}_focusFirstItem(){this._subMenu.$.overlay.firstElementChild.focus()}_focusLastItem(){const t=this._subMenu.$.overlay.firstElementChild,i=t.items[t.items.length-1];i&&i.focus()}__onItemSelected(t){t.stopPropagation(),this._close(),this.__fireItemSelected(t.detail.value)}__onEscapeClose(){this.__deactivateButton(!0)}__deactivateButton(t){const i=this._expandedButton;i&&i.hasAttribute("expanded")&&(this._setExpanded(i,!1),t&&this._focusItem(i,!1),this._expandedButton=null)}_close(t){this.style.pointerEvents="",this.__deactivateButton(t),this._subMenu.opened&&this._subMenu.close()}};/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ys extends Zn(Qe(el(w(v(z(g)))))){static get template(){return _`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='container'] {
          position: relative;
          display: flex;
          width: 100%;
          flex-wrap: nowrap;
          overflow: hidden;
        }

        [part$='button'] {
          flex-shrink: 0;
        }

        [part='overflow-button'] {
          margin-right: 0;
        }

        .dots::before {
          display: block;
          content: '\\00B7\\00B7\\00B7';
          font-size: inherit;
          line-height: inherit;
        }
      </style>

      <div part="container">
        <vaadin-menu-bar-button part="overflow-button" hidden$="[[!_hasOverflow]]" aria-label$="[[i18n.moreOptions]]">
          <div class="dots"></div>
        </vaadin-menu-bar-button>
      </div>
      <vaadin-menu-bar-submenu is-root=""></vaadin-menu-bar-submenu>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-menu-bar"}static get properties(){return{items:{type:Array,value:()=>[]},i18n:{type:Object,value:()=>({moreOptions:"More options"})}}}static get observers(){return["_themeChanged(_theme)"]}ready(){super.ready(),this._tooltipController=new O(this),this._tooltipController.setManual(!0),this.addController(this._tooltipController)}_disabledChanged(e,t){super._disabledChanged(e,t),t!==e&&this.__updateButtonsDisabled(e)}_themeChanged(e){this.shadowRoot&&(this._buttons.forEach(t=>this._setButtonTheme(t,e)),this.__detectOverflow()),e?this._subMenu.setAttribute("theme",e):this._subMenu.removeAttribute("theme")}__updateButtonsDisabled(e){this._buttons.forEach(t=>{t.disabled=e||t.item&&t.item.disabled})}}customElements.define(ys.is,ys);c("vaadin-message-input",m`
    :host {
      padding: var(--lumo-space-s) var(--lumo-space-m);
    }
  `,{moduleId:"lumo-message-input"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const tl=m`
  [part='input-field'],
  [part='input-field'] ::slotted(textarea) {
    height: auto;
    box-sizing: border-box;
  }

  [part='input-field'] {
    /* Equal to the implicit padding in vaadin-text-field */
    padding-top: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
    padding-bottom: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
    transition: background-color 0.1s;
    line-height: var(--lumo-line-height-s);
  }

  :host(:not([readonly])) [part='input-field']::after {
    display: none;
  }

  :host([readonly]) [part='input-field'] {
    border: 1px dashed var(--lumo-contrast-30pct);
  }

  :host([readonly]) [part='input-field']::after {
    border: none;
  }

  :host(:hover:not([readonly]):not([focused]):not([invalid])) [part='input-field'] {
    background-color: var(--lumo-contrast-20pct);
  }

  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused]):not([invalid])) [part='input-field'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field'] {
      background-color: var(--lumo-contrast-20pct);
    }
  }

  [part='input-field'] ::slotted(textarea) {
    line-height: inherit;
    --_lumo-text-field-overflow-mask-image: none;
  }

  /* Vertically align icon prefix/suffix with the first line of text */
  [part='input-field'] ::slotted(iron-icon),
  [part='input-field'] ::slotted(vaadin-icon) {
    margin-top: calc((var(--lumo-icon-size-m) - 1em * var(--lumo-line-height-s)) / -2);
  }
`;c("vaadin-text-area",[$,tl],{moduleId:"lumo-text-area"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class il extends tt{constructor(e,t){super(e,"textarea",()=>document.createElement("textarea"),(i,r)=>{const o=i.getAttribute("value");o&&(r.value=o);const l=i.getAttribute("name");l&&r.setAttribute("name",l),r.id=this.defaultId,typeof t=="function"&&t(r)},!0)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */c("vaadin-text-area",ie,{moduleId:"vaadin-text-area-styles"});class Ot extends te(qt(Qs(v(w(g))))){static get is(){return"vaadin-text-area"}static get template(){return _`
      <style>
        :host {
          animation: 1ms vaadin-text-area-appear;
        }

        .vaadin-text-area-container {
          flex: auto;
        }

        /* The label, helper text and the error message should neither grow nor shrink. */
        [part='label'],
        [part='helper-text'],
        [part='error-message'] {
          flex: none;
        }

        [part='input-field'] {
          flex: auto;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }

        ::slotted(textarea) {
          -webkit-appearance: none;
          -moz-appearance: none;
          flex: auto;
          overflow: hidden;
          width: 100%;
          height: 100%;
          outline: none;
          resize: none;
          margin: 0;
          padding: 0 0.25em;
          border: 0;
          border-radius: 0;
          min-width: 0;
          font: inherit;
          font-size: 1em;
          line-height: normal;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        /* Override styles from <vaadin-input-container> */
        [part='input-field'] ::slotted(textarea) {
          align-self: stretch;
          white-space: pre-wrap;
        }

        [part='input-field'] ::slotted(:not(textarea)) {
          align-self: flex-start;
        }

        /* Workaround https://bugzilla.mozilla.org/show_bug.cgi?id=1739079 */
        :host([disabled]) ::slotted(textarea) {
          user-select: none;
        }

        @keyframes vaadin-text-area-appear {
          to {
            opacity: 1;
          }
        }
      </style>

      <div class="vaadin-text-area-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
          on-scroll="__scrollPositionUpdated"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="textarea"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength"]}static get constraints(){return[...super.constraints,"maxlength","minlength"]}get clearElement(){return this.$.clearButton}_onResize(){this.__scrollPositionUpdated()}ready(){super.ready(),this.addController(new il(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new we(this.inputElement,this._labelController)),this._tooltipController=new O(this),this._tooltipController.setPosition("top"),this.addController(this._tooltipController),this.addEventListener("animationend",this._onAnimationEnd),this._inputField=this.shadowRoot.querySelector("[part=input-field]"),this._inputField.addEventListener("wheel",e=>{const t=this._inputField.scrollTop;this._inputField.scrollTop+=e.deltaY,t!==this._inputField.scrollTop&&(e.preventDefault(),this.__scrollPositionUpdated())}),this._updateHeight(),this.__scrollPositionUpdated()}__scrollPositionUpdated(){this._inputField.style.setProperty("--_text-area-vertical-scroll-position","0px"),this._inputField.style.setProperty("--_text-area-vertical-scroll-position",`${this._inputField.scrollTop}px`)}_onAnimationEnd(e){e.animationName.indexOf("vaadin-text-area-appear")===0&&this._updateHeight()}_valueChanged(e,t){super._valueChanged(e,t),this._updateHeight()}_updateHeight(){const e=this.inputElement,t=this._inputField;if(!e||!t)return;const i=t.scrollTop,r=this.value?this.value.length:0;if(this._oldValueLength>=r){const l=getComputedStyle(t).height,a=getComputedStyle(e).width;t.style.display="block",t.style.height=l,e.style.maxWidth=a,e.style.height="auto"}this._oldValueLength=r;const o=e.scrollHeight;o>e.clientHeight&&(e.style.height=`${o}px`),e.style.removeProperty("max-width"),t.style.removeProperty("display"),t.style.removeProperty("height"),t.scrollTop=i}checkValidity(){if(!super.checkValidity())return!1;if(!this.pattern||!this.inputElement.value)return!0;try{const e=this.inputElement.value.match(this.pattern);return e?e[0]===e.input:!1}catch{return!0}}}customElements.define(Ot.is,Ot);c("vaadin-message-input-text-area",m`
    :host {
      margin: 0 var(--lumo-space-s) 0 0;
    }

    :host([dir='rtl']) {
      margin: 0 0 0 var(--lumo-space-s);
    }
  `,{moduleId:"lumo-message-input-text-area"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */c("vaadin-message-input-text-area",m`
    :host {
      align-self: stretch;
      flex-grow: 1;
    }

    .textarea-wrapper {
      min-height: 0;
    }
  `,{moduleId:"vaadin-message-input-text-area-styles"});class ws extends Ot{static get is(){return"vaadin-message-input-text-area"}static get properties(){return{ariaLabel:{type:String,observer:"__ariaLabelChanged"}}}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.removeAttribute("aria-labelledby"),e.setAttribute("rows",1),e.style.minHeight="0",this.__updateAriaLabel(this.ariaLabel))}_onKeyDown(e){e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new CustomEvent("enter"))),super._onKeyDown(e)}__updateAriaLabel(e){e?this.inputElement.setAttribute("aria-label",e):this.inputElement.removeAttribute("aria-label")}__ariaLabelChanged(e){!this.inputElement||this.__updateAriaLabel(e)}}customElements.define(ws.is,ws);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */c("vaadin-message-input-button",m`
    :host {
      flex-shrink: 0;
    }
  `,{moduleId:"vaadin-message-input-button-styles"});class xs extends Ke{static get is(){return"vaadin-message-input-button"}}customElements.define(xs.is,xs);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Cs extends w(v(z(g))){static get properties(){return{value:{type:String},i18n:{type:Object,value:()=>({send:"Send",message:"Message"})},disabled:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get template(){return _`
      <style>
        :host {
          align-items: flex-start;
          box-sizing: border-box;
          display: flex;
          max-height: 50vh;
          overflow: hidden;
          flex-shrink: 0;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <vaadin-message-input-text-area
        disabled="[[disabled]]"
        value="{{value}}"
        placeholder="[[i18n.message]]"
        aria-label="[[i18n.message]]"
        on-enter="__submit"
      ></vaadin-message-input-text-area>
      <vaadin-message-input-button disabled="[[disabled]]" theme="primary contained" on-click="__submit"
        >[[i18n.send]]</vaadin-message-input-button
      >

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-message-input"}ready(){super.ready(),this._tooltipController=new O(this),this.addController(this._tooltipController)}__submit(){this.value!==""&&(this.dispatchEvent(new CustomEvent("submit",{detail:{value:this.value}})),this.value=""),this.shadowRoot.querySelector("vaadin-message-input-text-area").focus()}}customElements.define(Cs.is,Cs);c("vaadin-message-avatar",m`
    :host {
      margin-right: calc(var(--lumo-space-m) - var(--vaadin-avatar-outline-width));
      margin-top: calc(var(--lumo-space-s) - var(--vaadin-avatar-outline-width));
    }

    :host([dir='rtl']) {
      margin-left: calc(var(--lumo-space-m) - var(--vaadin-avatar-outline-width));
      margin-right: calc(var(--vaadin-avatar-outline-width) * -1);
    }
  `,{moduleId:"lumo-message-avatar"});c("vaadin-message",m`
    :host {
      color: var(--lumo-body-text-color);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-m);
      padding: var(--lumo-space-s) var(--lumo-space-m);
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
    }

    :host([focus-ring]) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    [part='header'] {
      min-height: calc(var(--lumo-font-size-m) * var(--lumo-line-height-m));
    }

    [part='name'] {
      margin-right: var(--lumo-space-s);
    }

    [part='name']:empty {
      margin-right: 0;
    }

    :host([dir='rtl']) [part='name'] {
      margin-left: var(--lumo-space-s);
      margin-right: 0;
    }

    :host([dir='rtl']) [part='name']:empty {
      margin-left: 0;
    }

    [part='time'] {
      color: var(--lumo-secondary-text-color);
      font-size: var(--lumo-font-size-s);
    }
  `,{moduleId:"lumo-message"});c("vaadin-message-list",m``,{moduleId:"lumo-message-list"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */c("vaadin-message-avatar",m`
    :host {
      --vaadin-avatar-outline-width: 0px; /* stylelint-disable-line length-zero-no-unit */
      flex-shrink: 0;
    }
  `,{moduleId:"vaadin-message-avatar-styles"});class As extends Et{static get is(){return"vaadin-message-avatar"}}customElements.define(As.is,As);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Lt extends W(w(v(g))){static get properties(){return{time:{type:String},userName:{type:String},userAbbr:{type:String},userImg:{type:String},userColorIndex:{type:Number}}}static get template(){return _`
      <style>
        :host {
          display: flex;
          flex-direction: row;
          outline: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='content'] {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        [part='header'] {
          align-items: baseline;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        [part='name'] {
          font-weight: 500;
        }

        [part='message'] {
          white-space: pre-wrap;
        }
      </style>
      <vaadin-message-avatar
        part="avatar"
        name="[[userName]]"
        abbr="[[userAbbr]]"
        img="[[userImg]]"
        color-index="[[userColorIndex]]"
        tabindex="-1"
        aria-hidden="true"
      ></vaadin-message-avatar>
      <div part="content">
        <div part="header">
          <span part="name">[[userName]]</span>
          <span part="time">[[time]]</span>
        </div>
        <div part="message"><slot></slot></div>
      </div>
    `}static get is(){return"vaadin-message"}}customElements.define(Lt.is,Lt);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Is extends Dt(w(v(g))){static get is(){return"vaadin-message-list"}static get properties(){return{items:{type:Array,value:()=>[],observer:"_itemsChanged"}}}static get template(){return _`
      <style>
        :host {
          display: block;
          overflow: auto;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <div part="list" role="list">
        <template is="dom-repeat" items="[[items]]">
          <vaadin-message
            time="[[item.time]]"
            user-name="[[item.userName]]"
            user-abbr="[[item.userAbbr]]"
            user-img="[[item.userImg]]"
            user-color-index="[[item.userColorIndex]]"
            theme$="[[item.theme]]"
            role="listitem"
            on-focusin="_handleFocusEvent"
            >[[item.text]]</vaadin-message
          >
        </template>
      </div>
    `}ready(){super.ready(),this.setAttribute("aria-relevant","additions"),this.setAttribute("role","log")}_getItems(){return this._messages}get _messages(){return Array.from(this.shadowRoot.querySelectorAll("vaadin-message"))}_itemsChanged(e,t){const i=this._getIndexOfFocusableElement();if(e&&e.length){const r=!t||e.length>t.length,o=this.scrollHeight<this.clientHeight+this.scrollTop+50;Bo.run(()=>{this._setTabIndexesByIndex(i),r&&o&&this._scrollToLastMessage()})}}_scrollToLastMessage(){this.items.length>0&&(this.scrollTop=this.scrollHeight-this.clientHeight)}_handleFocusEvent(e){const t=e.composedPath().find(i=>i instanceof Lt);this._setTabIndexesByMessage(t)}_setTabIndexesByIndex(e){const t=this._messages[e]||this._messages[0];this._setTabIndexesByMessage(t)}_setTabIndexesByMessage(e){this._messages.forEach(t=>{t.tabIndex=t===e?0:-1})}_getIndexOfFocusableElement(){const e=this._messages.findIndex(t=>t.tabIndex===0);return e!==-1?e:0}}customElements.define(Is.is,Is);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sl=m`
  :host {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
    padding: 0.3125em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-body-text-color);
    border-radius: var(--lumo-border-radius-s);
    background-color: var(--lumo-contrast-20pct);
    cursor: var(--lumo-clickable-cursor);
  }

  :host([focused]) {
    background-color: var(--lumo-primary-color);
    color: var(--lumo-primary-contrast-color);
  }

  :host([focused]) [part='remove-button'] {
    color: inherit;
  }

  :host(:not([part~='overflow']):not([readonly]):not([disabled])) {
    padding-inline-end: 0;
  }

  :host([part~='overflow']) {
    position: relative;
    min-width: var(--lumo-size-xxs);
    margin-inline-start: var(--lumo-space-s);
  }

  :host([part~='overflow'])::before,
  :host([part~='overflow'])::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border-left: calc(var(--lumo-space-s) / 4) solid;
    border-radius: var(--lumo-border-radius-s);
    border-color: var(--lumo-contrast-30pct);
  }

  :host([part~='overflow'])::before {
    left: calc(-1 * var(--lumo-space-s) / 2);
  }

  :host([part~='overflow'])::after {
    left: calc(-1 * var(--lumo-space-s));
  }

  :host([part~='overflow-two']) {
    margin-inline-start: calc(var(--lumo-space-s) / 2);
  }

  :host([part~='overflow-two'])::after {
    display: none;
  }

  :host([part~='overflow-one']) {
    margin-inline-start: 0;
  }

  :host([part~='overflow-one'])::before,
  :host([part~='overflow-one'])::after {
    display: none;
  }

  [part='label'] {
    font-weight: 500;
    line-height: 1.25;
  }

  [part='remove-button'] {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -0.3125em;
    margin-bottom: -0.3125em;
    margin-inline-start: auto;
    width: 1.25em;
    height: 1.25em;
    font-size: 1.5em;
    transition: none;
  }

  [part='remove-button']::before {
    content: var(--lumo-icons-cross);
  }

  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
    pointer-events: none;
  }
`;c("vaadin-multi-select-combo-box-chip",[Xs,sl],{moduleId:"lumo-multi-select-combo-box-chip"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */c("vaadin-multi-select-combo-box-item",m`
    @media (any-hover: hover) {
      :host(:hover[readonly]) {
        background-color: transparent;
        cursor: default;
      }
    }
  `,{moduleId:"lumo-multi-select-combo-box-item"});const rl=m`
  :host([has-value]) {
    padding-inline-start: 0;
  }

  :host([has-value]) ::slotted(input:placeholder-shown) {
    caret-color: var(--lumo-body-text-color) !important;
  }

  [part~='chip']:not(:last-of-type) {
    margin-inline-end: var(--lumo-space-xs);
  }

  [part~='overflow']:not([hidden]) + :not(:empty) {
    margin-inline-start: var(--lumo-space-xs);
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }

  :host([readonly][has-value]) [part='toggle-button'] {
    color: var(--lumo-contrast-60pct);
    cursor: var(--lumo-clickable-cursor);
  }
`;c("vaadin-multi-select-combo-box",[$,rl],{moduleId:"lumo-multi-select-combo-box"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ss extends v(g){static get is(){return"vaadin-multi-select-combo-box-chip"}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},label:{type:String},item:{type:Object}}}static get template(){return _`
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          align-self: center;
          white-space: nowrap;
          box-sizing: border-box;
        }

        [part='label'] {
          overflow: hidden;
          text-overflow: ellipsis;
        }

        :host(:is([readonly], [disabled], [part~='overflow'])) [part='remove-button'] {
          display: none !important;
        }
      </style>
      <div part="label">[[label]]</div>
      <div part="remove-button" role="button" on-click="_onRemoveClick"></div>
    `}_onRemoveClick(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("item-removed",{detail:{item:this.item},bubbles:!0,composed:!0}))}}customElements.define(Ss.is,Ss);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */c("vaadin-multi-select-combo-box-container",m`
    #wrapper {
      display: flex;
      width: 100%;
    }
  `,{moduleId:"vaadin-multi-select-combo-box-container-styles"});let Le;class Es extends Mo{static get is(){return"vaadin-multi-select-combo-box-container"}static get template(){if(!Le){Le=super.template.cloneNode(!0);const e=Le.content,t=e.querySelectorAll("slot"),i=document.createElement("div");i.setAttribute("id","wrapper"),e.insertBefore(i,t[2]),i.appendChild(t[0]),i.appendChild(t[1])}return Le}}customElements.define(Es.is,Es);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ks extends Ue{static get is(){return"vaadin-multi-select-combo-box-item"}}customElements.define(ks.is,ks);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */c("vaadin-multi-select-combo-box-overlay",m`
    #overlay {
      width: var(
        --vaadin-multi-select-combo-box-overlay-width,
        var(--_vaadin-multi-select-combo-box-overlay-default-width, auto)
      );
    }
  `,{moduleId:"vaadin-multi-select-combo-box-overlay-styles"});class Ts extends We{static get is(){return"vaadin-multi-select-combo-box-overlay"}}customElements.define(Ts.is,Ts);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ps extends je{static get is(){return"vaadin-multi-select-combo-box-scroller"}ready(){super.ready(),this.setAttribute("aria-multiselectable","true")}__getAriaSelected(e,t){const i=this.items[t];return this.__isItemSelected(i,null,this.itemIdPath).toString()}__isItemSelected(e,t,i){return e instanceof M||this.comboBox.readonly?!1:this.comboBox._findIndex(e,this.comboBox.selectedItems,i)>-1}__updateElement(e,t){super.__updateElement(e,t),e.toggleAttribute("readonly",this.comboBox.readonly)}}customElements.define(Ps.is,Ps);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Os extends Fr(ei(v(g))){static get is(){return"vaadin-multi-select-combo-box-internal"}static get template(){return _`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-multi-select-combo-box-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[_target]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-multi-select-combo-box-overlay>
    `}static get properties(){return{filteredItems:{type:Array,notify:!0},loading:{type:Boolean,notify:!0},size:{type:Number,notify:!0},selectedItems:{type:Array,value:()=>[]},lastFilter:{type:String,notify:!0},_target:{type:Object}}}get clearElement(){return this.querySelector('[part="clear-button"]')}get _tagNamePrefix(){return"vaadin-multi-select-combo-box"}open(){!this.disabled&&!(this.readonly&&this.selectedItems.length===0)&&(this.opened=!0)}ready(){super.ready(),this._target=this,this._toggleElement=this.querySelector(".toggle-button")}_initScroller(){const e=this.getRootNode().host;super._initScroller(e)}clear(){super.clear(),this.inputElement&&(this.inputElement.value="")}_onEnter(e){this.__enterPressed=!0,super._onEnter(e)}_closeOrCommit(){if(this.readonly){this.close();return}if(this.__enterPressed){this.__enterPressed=null;const e=this.filteredItems[this._focusedIndex];this._commitValue(),this._focusedIndex=this.filteredItems.indexOf(e);return}super._closeOrCommit()}_commitValue(){this.lastFilter=this.filter,super._commitValue()}_onArrowDown(){this.readonly?this.opened||this.open():super._onArrowDown()}_onArrowUp(){this.readonly?this.opened||this.open():super._onArrowUp()}_onFocusout(e){this._ignoreCommitValue=!0,super._onFocusout(e),this.readonly&&!this._closeOnBlurIsPrevented&&this.close()}_detectAndDispatchChange(){if(this._ignoreCommitValue){this._ignoreCommitValue=!1,this.selectedItem=null,this._inputElementValue="";return}super._detectAndDispatchChange()}_overlaySelectedItemChanged(e){e.stopPropagation(),!this.readonly&&(e.detail.item instanceof M||this.opened&&this.dispatchEvent(new CustomEvent("combo-box-item-selected",{detail:{item:e.detail.item}})))}_shouldLoadPage(e){return this.readonly?!1:super._shouldLoadPage(e)}clearCache(){this.readonly||super.clearCache()}}customElements.define(Os.is,Os);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ol=m`
  :host {
    --input-min-width: var(--vaadin-multi-select-combo-box-input-min-width, 4em);
  }

  [hidden] {
    display: none !important;
  }

  #chips {
    display: flex;
    align-items: center;
  }

  ::slotted(input) {
    box-sizing: border-box;
    flex: 1 0 var(--input-min-width);
  }

  [part='chip'] {
    flex: 0 1 auto;
  }

  :host(:is([readonly], [disabled])) ::slotted(input) {
    flex-grow: 0;
    flex-basis: 0;
    padding: 0;
  }
`;c("vaadin-multi-select-combo-box",[ie,ol],{moduleId:"vaadin-multi-select-combo-box-styles"});class Ls extends te(Ut(v(w(g)))){static get is(){return"vaadin-multi-select-combo-box"}static get template(){return _`
      <div class="vaadin-multi-select-combo-box-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-multi-select-combo-box-internal
          id="comboBox"
          items="[[__effectiveItems]]"
          item-id-path="[[itemIdPath]]"
          item-label-path="[[itemLabelPath]]"
          item-value-path="[[itemValuePath]]"
          disabled="[[disabled]]"
          readonly="[[readonly]]"
          auto-open-disabled="[[autoOpenDisabled]]"
          allow-custom-value="[[allowCustomValue]]"
          data-provider="[[dataProvider]]"
          filter="{{filter}}"
          last-filter="{{_lastFilter}}"
          loading="{{loading}}"
          size="{{size}}"
          filtered-items="[[__effectiveFilteredItems]]"
          selected-items="[[selectedItems]]"
          opened="{{opened}}"
          renderer="[[renderer]]"
          theme$="[[_theme]]"
          on-combo-box-item-selected="_onComboBoxItemSelected"
          on-change="_onComboBoxChange"
          on-custom-value-set="_onCustomValueSet"
          on-filtered-items-changed="_onFilteredItemsChanged"
        >
          <vaadin-multi-select-combo-box-container
            part="input-field"
            readonly="[[readonly]]"
            disabled="[[disabled]]"
            invalid="[[invalid]]"
            theme$="[[_theme]]"
          >
            <vaadin-multi-select-combo-box-chip
              id="overflow"
              slot="prefix"
              part$="[[_getOverflowPart(_overflowItems.length)]]"
              disabled="[[disabled]]"
              readonly="[[readonly]]"
              label="[[_getOverflowLabel(_overflowItems.length)]]"
              title$="[[_getOverflowTitle(_overflowItems)]]"
              hidden$="[[_isOverflowHidden(_overflowItems.length)]]"
              on-mousedown="_preventBlur"
            ></vaadin-multi-select-combo-box-chip>
            <div id="chips" part="chips" slot="prefix"></div>
            <slot name="input"></slot>
            <div
              id="clearButton"
              part="clear-button"
              slot="suffix"
              on-touchend="_onClearButtonTouchend"
              aria-hidden="true"
            ></div>
            <div id="toggleButton" class="toggle-button" part="toggle-button" slot="suffix" aria-hidden="true"></div>
          </vaadin-multi-select-combo-box-container>
        </vaadin-multi-select-combo-box-internal>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{autoOpenDisabled:Boolean,clearButtonVisible:{type:Boolean,reflectToAttribute:!0,observer:"_clearButtonVisibleChanged",value:!1},items:{type:Array},itemLabelPath:{type:String,value:"label"},itemValuePath:{type:String,value:"value"},itemIdPath:{type:String},i18n:{type:Object,value:()=>({cleared:"Selection cleared",focused:"focused. Press Backspace to remove",selected:"added to selection",deselected:"removed from selection",total:"{count} items selected"})},loading:{type:Boolean,value:!1,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,observer:"_readonlyChanged",reflectToAttribute:!0},selectedItems:{type:Array,value:()=>[],notify:!0},opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},size:{type:Number},pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object},allowCustomValue:{type:Boolean,value:!1},placeholder:{type:String,value:"",observer:"_placeholderChanged"},renderer:Function,filter:{type:String,value:"",notify:!0},filteredItems:Array,value:{type:String},__effectiveItems:{type:Array,computed:"__computeEffectiveItems(items, selectedItems, readonly)"},__effectiveFilteredItems:{type:Array,computed:"__computeEffectiveFilteredItems(items, filteredItems, selectedItems, readonly)"},_overflowItems:{type:Array,value:()=>[]},_focusedChipIndex:{type:Number,value:-1,observer:"_focusedChipIndexChanged"},_lastFilter:{type:String}}}static get observers(){return["_selectedItemsChanged(selectedItems, selectedItems.*)"]}get slotStyles(){const e=this.localName;return[...super.slotStyles,`
        ${e}[has-value] input::placeholder {
          color: transparent !important;
        }
      `]}get clearElement(){return this.$.clearButton}get _chips(){return this.shadowRoot.querySelectorAll('[part~="chip"]')}ready(){super.ready(),this.addController(new et(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new we(this.inputElement,this._labelController)),this._tooltipController=new O(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setShouldShow(e=>!e.opened),this._inputField=this.shadowRoot.querySelector('[part="input-field"]'),this.__updateChips(),ye(this)}checkValidity(){return this.required&&!this.readonly?this._hasValue:!0}clear(){this.__updateSelection([]),he(this.i18n.cleared)}clearCache(){this.$&&this.$.comboBox&&this.$.comboBox.clearCache()}requestContentUpdate(){this.$&&this.$.comboBox&&this.$.comboBox.requestContentUpdate()}_disabledChanged(e,t){super._disabledChanged(e,t),(e||t)&&this.__updateChips()}_inputElementChanged(e){super._inputElementChanged(e),e&&this.$.comboBox._setInputElement(e)}_setFocused(e){super._setFocused(e),e||(this._focusedChipIndex=-1,this.validate())}_onResize(){this.__updateChips()}_delegateAttribute(e,t){if(!!this.stateTarget){if(e==="required"){this._delegateAttribute("aria-required",t?"true":!1);return}super._delegateAttribute(e,t)}}_clearButtonVisibleChanged(e,t){(e||t)&&this.__updateChips()}_onFilteredItemsChanged(e){const{value:t}=e.detail;(Array.isArray(t)||t==null)&&(this.filteredItems=t)}_readonlyChanged(e,t){(e||t)&&this.__updateChips(),this.dataProvider&&this.clearCache()}_pageSizeChanged(e,t){(Math.floor(e)!==e||e<=0)&&(this.pageSize=t,console.error('"pageSize" value must be an integer > 0')),this.$.comboBox.pageSize=this.pageSize}_placeholderChanged(e){const t=this.__tmpA11yPlaceholder;t!==e&&(this.__savedPlaceholder=e,t&&(this.placeholder=t))}_selectedItemsChanged(e){if(this._toggleHasValue(this._hasValue),this._hasValue){const t=this._mergeItemLabels(e);this.__tmpA11yPlaceholder=t,this.placeholder=t}else delete this.__tmpA11yPlaceholder,this.placeholder=this.__savedPlaceholder;this.__updateChips(),this.requestContentUpdate()}_getItemLabel(e){return this.$.comboBox._getItemLabel(e)}_getOverflowLabel(e){return e}_getOverflowPart(e){let t="chip overflow";return e===1?t+=" overflow-one":e===2&&(t+=" overflow-two"),t}_getOverflowTitle(e){return this._mergeItemLabels(e)}_isOverflowHidden(e){return e===0}_mergeItemLabels(e){return e.map(t=>this._getItemLabel(t)).join(", ")}_findIndex(e,t,i){if(i&&e){for(let r=0;r<t.length;r++)if(t[r]&&t[r][i]===e[i])return r;return-1}return t.indexOf(e)}__clearFilter(){this.filter="",this.$.comboBox.clear()}__announceItem(e,t,i){const r=t?"selected":"deselected",o=this.i18n.total.replace("{count}",i||0);he(`${e} ${this.i18n[r]} ${o}`)}__removeItem(e){const t=[...this.selectedItems];t.splice(t.indexOf(e),1),this.__updateSelection(t);const i=this._getItemLabel(e);this.__announceItem(i,!1,t.length)}__selectItem(e){const t=[...this.selectedItems],i=this._findIndex(e,t,this.itemIdPath),r=this._getItemLabel(e);let o=!1;if(i!==-1){const l=this._lastFilter;if(l&&l.toLowerCase()===r.toLowerCase()){this.__clearFilter();return}t.splice(i,1)}else t.push(e),o=!0;this.__updateSelection(t),this.__clearFilter(),this.__announceItem(r,o,t.length)}__updateSelection(e){this.selectedItems=e,this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__createChip(e){const t=document.createElement("vaadin-multi-select-combo-box-chip");t.setAttribute("part","chip"),t.setAttribute("slot","prefix"),t.item=e,t.disabled=this.disabled,t.readonly=this.readonly;const i=this._getItemLabel(e);return t.label=i,t.setAttribute("title",i),t.addEventListener("item-removed",r=>this._onItemRemoved(r)),t.addEventListener("mousedown",r=>this._preventBlur(r)),t}__getOverflowWidth(){const e=this.$.overflow;e.style.visibility="hidden",e.removeAttribute("hidden"),e.setAttribute("part","chip overflow");const t=getComputedStyle(e),i=e.clientWidth+parseInt(t.marginInlineStart);return e.setAttribute("hidden",""),e.style.visibility="",i}__updateChips(){if(!this._inputField||!this.inputElement)return;Array.from(this._chips).forEach(o=>{o!==this.$.overflow&&o.remove()});const e=[...this.selectedItems],t=this._inputField.$.wrapper.clientWidth,i=parseInt(getComputedStyle(this.inputElement).flexBasis);let r=t-i;e.length>1&&(r-=this.__getOverflowWidth());for(let o=e.length-1,l=null;o>=0;o--){const a=this.__createChip(e[o]);if(this.$.chips.insertBefore(a,l),this.$.chips.clientWidth>r){a.remove();break}e.pop(),l=a}this._overflowItems=e}_onClearButtonTouchend(e){e.preventDefault(),this.clear()}_onClearButtonClick(e){e.stopPropagation(),this.clear()}_onChange(e){e.stopPropagation()}_onEscape(e){this.clearButtonVisible&&this.selectedItems&&this.selectedItems.length&&(e.stopPropagation(),this.selectedItems=[])}_onKeyDown(e){super._onKeyDown(e);const t=Array.from(this._chips).slice(1);if(!this.readonly&&t.length>0)switch(e.key){case"Backspace":this._onBackSpace(t);break;case"ArrowLeft":this._onArrowLeft(t,e);break;case"ArrowRight":this._onArrowRight(t,e);break;default:this._focusedChipIndex=-1;break}}_onArrowLeft(e,t){if(this.inputElement.selectionStart!==0)return;const i=this._focusedChipIndex;i!==-1&&t.preventDefault();let r;this.getAttribute("dir")!=="rtl"?i===-1?r=e.length-1:i>0&&(r=i-1):i===e.length-1?r=-1:i>-1&&(r=i+1),r!==void 0&&(this._focusedChipIndex=r)}_onArrowRight(e,t){if(this.inputElement.selectionStart!==0)return;const i=this._focusedChipIndex;i!==-1&&t.preventDefault();let r;this.getAttribute("dir")==="rtl"?i===-1?r=e.length-1:i>0&&(r=i-1):i===e.length-1?r=-1:i>-1&&(r=i+1),r!==void 0&&(this._focusedChipIndex=r)}_onBackSpace(e){if(this.inputElement.selectionStart!==0)return;const t=this._focusedChipIndex;t===-1?this._focusedChipIndex=e.length-1:(this.__removeItem(e[t].item),this._focusedChipIndex=-1)}_focusedChipIndexChanged(e,t){if(e>-1||t>-1){const i=Array.from(this._chips).slice(1);if(i.forEach((r,o)=>{r.toggleAttribute("focused",o===e)}),e>-1){const r=i[e].item,o=this._getItemLabel(r);he(`${o} ${this.i18n.focused}`)}}}_onComboBoxChange(){const e=this.$.comboBox.selectedItem;e&&this.__selectItem(e)}_onComboBoxItemSelected(e){this.__selectItem(e.detail.item)}_onCustomValueSet(e){e.preventDefault(),e.stopPropagation(),this.__clearFilter(),this.dispatchEvent(new CustomEvent("custom-value-set",{detail:e.detail,composed:!0,bubbles:!0}))}_onItemRemoved(e){this.__removeItem(e.detail.item)}_preventBlur(e){e.preventDefault()}__computeEffectiveItems(e,t,i){return e&&i?t:e}__computeEffectiveFilteredItems(e,t,i,r){return!e&&r?i:t}get _hasValue(){return this.selectedItems&&this.selectedItems.length>0}}customElements.define(Ls.is,Ls);const al=m`
  :host {
    outline: none;
  }

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }
`;c("vaadin-scroller",al,{moduleId:"lumo-scroller"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class si{constructor(e,t){this.host=e,this.scrollTarget=t||e,this.__boundOnScroll=this.__onScroll.bind(this)}hostConnected(){this.initialized||(this.initialized=!0,this.observe())}observe(){this.__resizeObserver=new ResizeObserver(()=>{this.__debounceOverflow=K.debounce(this.__debounceOverflow,Fo,()=>{this.__updateOverflow()})}),this.__resizeObserver.observe(this.host),this.__childObserver=new T(this.host,e=>{e.addedNodes.forEach(t=>{t.nodeType===Node.ELEMENT_NODE&&this.__resizeObserver.observe(t)}),e.removedNodes.forEach(t=>{t.nodeType===Node.ELEMENT_NODE&&this.__resizeObserver.unobserve(t)}),this.__updateOverflow()}),this.scrollTarget.addEventListener("scroll",this.__boundOnScroll),this.__updateOverflow()}__onScroll(){this.__updateOverflow()}__updateOverflow(){const e=this.scrollTarget;let t="";e.scrollTop>0&&(t+=" top"),Math.ceil(e.scrollTop)<Math.ceil(e.scrollHeight-e.clientHeight)&&(t+=" bottom");const i=Math.abs(e.scrollLeft);i>0&&(t+=" start"),Math.ceil(i)<Math.ceil(e.scrollWidth-e.clientWidth)&&(t+=" end"),t=t.trim(),t.length>0&&this.host.getAttribute("overflow")!==t?this.host.setAttribute("overflow",t):t.length===0&&this.host.hasAttribute("overflow")&&this.host.removeAttribute("overflow")}}/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class zt extends W(w(z(v(g)))){static get template(){return _`
      <style>
        :host([hidden]) {
          display: none !important;
        }

        :host {
          display: block;
          overflow: auto;
        }

        :host([scroll-direction='vertical']) {
          overflow-x: hidden;
        }

        :host([scroll-direction='horizontal']) {
          overflow-y: hidden;
        }

        :host([scroll-direction='none']) {
          overflow: hidden;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-scroller"}static get properties(){return{scrollDirection:{type:String,reflectToAttribute:!0},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}ready(){super.ready(),this.__overflowController=new si(this),this.addController(this.__overflowController)}_shouldSetFocus(e){return e.target===this}}customElements.define(zt.is,zt);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nl=m`
  :host(:not([theme*='align'])) ::slotted([slot='value']) {
    text-align: start;
  }

  [part='input-field'] {
    cursor: var(--lumo-clickable-cursor);
  }

  [part='input-field'] ::slotted([slot='value']) {
    font-weight: 500;
  }

  [part='input-field'] ::slotted([slot='value']:not([placeholder])) {
    color: var(--lumo-body-text-color);
  }

  :host([readonly]) [part='input-field'] ::slotted([slot='value']:not([placeholder])) {
    color: var(--lumo-secondary-text-color);
  }

  /* placeholder styles */
  [part='input-field'] ::slotted([slot='value'][placeholder]) {
    color: inherit;
    transition: opacity 0.175s 0.1s;
    opacity: 0.5;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }

  /* Highlight the toggle button when hovering over the entire component */
  :host(:hover:not([readonly]):not([disabled])) [part='toggle-button'] {
    color: var(--lumo-contrast-80pct);
  }

  :host([theme~='small']) [part='input-field'] ::slotted([slot='value']) {
    --_lumo-selected-item-height: var(--lumo-size-s);
    --_lumo-selected-item-padding: 0;
  }
`;c("vaadin-select",[$,nl],{moduleId:"lumo-select"});c("vaadin-select-value-button",m`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      padding: 0 0.25em;
      --_lumo-selected-item-height: var(--lumo-size-m);
      --_lumo-selected-item-padding: 0.5em;
    }

    ::slotted(*) {
      min-height: var(--_lumo-selected-item-height);
      padding-top: var(--_lumo-selected-item-padding);
      padding-bottom: var(--_lumo-selected-item-padding);
    }

    ::slotted(*:hover) {
      background-color: transparent;
    }
  `,{moduleId:"lumo-select-value-button"});const ll=m`
  :host {
    --_lumo-item-selected-icon-display: block;
  }

  [part~='overlay'] {
    min-width: var(--vaadin-select-text-field-width);
  }

  /* Small viewport adjustment */
  :host([phone]) {
    top: 0 !important;
    right: 0 !important;
    bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
    left: 0 !important;
    align-items: stretch;
    justify-content: flex-end;
  }

  :host([theme~='align-left']) {
    text-align: left;
  }

  :host([theme~='align-right']) {
    text-align: right;
  }

  :host([theme~='align-center']) {
    text-align: center;
  }
`;c("vaadin-select-overlay",[Do,ll],{moduleId:"lumo-select-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class zs extends Vo{static get is(){return"vaadin-select-item"}}customElements.define(zs.is,zs);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Bs extends Ys{static get is(){return"vaadin-select-list-box"}}customElements.define(Bs.is,Bs);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */c("vaadin-select-overlay",m`
    :host {
      align-items: flex-start;
      justify-content: flex-start;
    }
  `,{moduleId:"vaadin-select-overlay-styles"});class Ms extends Je(ee){static get is(){return"vaadin-select-overlay"}requestContentUpdate(){if(super.requestContentUpdate(),this.owner){const e=this._getMenuElement();this.owner._assignMenuElement(e)}}_getMenuElement(){return Array.from(this.children).find(e=>e.localName!=="style")}}customElements.define(Ms.is,Ms);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Fs extends Ro(v(g)){static get is(){return"vaadin-select-value-button"}static get template(){return _`
      <style>
        :host {
          display: inline-block;
          position: relative;
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
          min-width: 0;
          width: 0;
        }

        ::slotted(*) {
          padding-left: 0;
          padding-right: 0;
          flex: auto;
        }

        /* placeholder styles */
        ::slotted(*:not([selected])) {
          line-height: 1;
        }

        .vaadin-button-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: inherit;
          width: 100%;
          height: 100%;
          min-height: inherit;
          text-shadow: inherit;
        }

        [part='label'] {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
          line-height: inherit;
        }
      </style>
      <div class="vaadin-button-container">
        <span part="label">
          <slot></slot>
        </span>
      </div>
    `}}customElements.define(Fs.is,Fs);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */c("vaadin-select",[$o,Ho],{moduleId:"vaadin-select-styles"});class Ds extends Ws(Zs(Xe(w(v(g))))){static get is(){return"vaadin-select"}static get template(){return _`
      <style>
        ::slotted([slot='value']) {
          flex-grow: 1;
        }
      </style>

      <div class="vaadin-select-container">
        <div part="label" on-click="_onClick">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
          on-click="_onClick"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="value"></slot>
          <div part="toggle-button" slot="suffix" aria-hidden="true" on-mousedown="_onToggleMouseDown"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-select-overlay
        position-target="[[_inputContainer]]"
        opened="{{opened}}"
        with-backdrop="[[_phone]]"
        phone$="[[_phone]]"
        theme$="[[_theme]]"
      ></vaadin-select-overlay>

      <slot name="tooltip"></slot>
    `}static get properties(){return{items:{type:Array,observer:"__itemsChanged"},opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0,observer:"_openedChanged"},renderer:Function,value:{type:String,value:"",notify:!0,observer:"_valueChanged"},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},_phone:Boolean,_phoneMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_overlayElement:Object,_inputContainer:Object,_items:Object}}static get delegateAttrs(){return[...super.delegateAttrs,"invalid"]}static get observers(){return["_updateAriaExpanded(opened)","_updateSelectedItem(value, _items, placeholder)","_rendererChanged(renderer, _overlayElement)"]}get _valueButton(){return this._valueButtonController&&this._valueButtonController.node}constructor(){super(),this._fieldId=`${this.localName}-${be()}`,this._boundOnKeyDown=this._onKeyDown.bind(this)}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}ready(){super.ready(),this._overlayElement=this.shadowRoot.querySelector("vaadin-select-overlay"),this._inputContainer=this.shadowRoot.querySelector('[part~="input-field"]'),this._valueButtonController=new tt(this,"value",()=>document.createElement("vaadin-select-value-button"),(e,t)=>{this._setFocusElement(t),this.ariaTarget=t,this.stateTarget=t,t.setAttribute("aria-haspopup","listbox"),t.setAttribute("aria-labelledby",`${this._labelId} ${this._fieldId}`),this._updateAriaExpanded(e.opened),t.addEventListener("keydown",this._boundOnKeyDown)}),this.addController(this._valueButtonController),this.addController(new No(this._phoneMediaQuery,e=>{this._phone=e})),ye(this),this._tooltipController=new O(this),this._tooltipController.setPosition("top"),this.addController(this._tooltipController)}requestContentUpdate(){!this._overlayElement||(this._overlayElement.requestContentUpdate(),this._menuElement&&this._menuElement.items&&this._updateSelectedItem(this.value,this._menuElement.items))}_requiredChanged(e){super._requiredChanged(e),e===!1&&this.validate()}_rendererChanged(e,t){!t||(t.setProperties({owner:this,renderer:e||this.__defaultRenderer}),this.requestContentUpdate())}__itemsChanged(e,t){(e||t)&&this.requestContentUpdate()}_assignMenuElement(e){e&&e!==this.__lastMenuElement&&(this._menuElement=e,this.__initMenuItems(e),e.addEventListener("items-changed",()=>{this.__initMenuItems(e)}),e.addEventListener("selected-changed",()=>this.__updateValueButton()),e.addEventListener("keydown",t=>this._onKeyDownInside(t),!0),e.addEventListener("click",()=>{this.__userInteraction=!0,this.opened=!1},!0),e.setAttribute("role","listbox"),this.__lastMenuElement=e)}__initMenuItems(e){e.items&&(this._items=e.items,this._items.forEach(t=>t.setAttribute("role","option")))}_valueChanged(e,t){this.toggleAttribute("has-value",Boolean(e)),t!==void 0&&this.validate()}_onClick(e){e.preventDefault(),this.opened=!this.readonly}_onToggleMouseDown(e){e.preventDefault()}_onKeyDown(e){if(!this.readonly&&!this.opened){if(/^(Enter|SpaceBar|\s|ArrowDown|Down|ArrowUp|Up)$/.test(e.key))e.preventDefault(),this.opened=!0;else if(/[\p{L}\p{Nd}]/u.test(e.key)&&e.key.length===1){const t=this._menuElement.selected,i=t!==void 0?t:-1,r=this._menuElement._searchKey(i,e.key);r>=0&&(this.__userInteraction=!0,this._updateAriaLive(!0),this._menuElement.selected=r)}}}_onKeyDownInside(e){/^(Tab)$/.test(e.key)&&(this.opened=!1)}_openedChanged(e,t){if(e){if(this._updateAriaLive(!1),!this._overlayElement||!this._menuElement||!this.focusElement||this.disabled||this.readonly){this.opened=!1;return}this._overlayElement.style.setProperty("--vaadin-select-text-field-width",`${this._inputContainer.offsetWidth}px`);const i=this.hasAttribute("focus-ring");this._openedWithFocusRing=i,i&&this.removeAttribute("focus-ring"),this._menuElement.focus()}else t&&(this.focus(),this._openedWithFocusRing&&this.setAttribute("focus-ring",""),this.validate())}_updateAriaExpanded(e){this._valueButton&&this._valueButton.setAttribute("aria-expanded",e?"true":"false")}_updateAriaLive(e){this._valueButton&&(e?this._valueButton.setAttribute("aria-live","polite"):this._valueButton.removeAttribute("aria-live"))}__attachSelectedItem(e){let t;const i=e.getAttribute("label");i?t=this.__createItemElement({label:i}):t=e.cloneNode(!0),t._sourceItem=e,this.__appendValueItemElement(t),t.selected=!0}__createItemElement(e){const t=document.createElement(e.component||"vaadin-select-item");return e.label&&(t.textContent=e.label),e.value&&(t.value=e.value),e.disabled&&(t.disabled=e.disabled),t}__appendValueItemElement(e){e.removeAttribute("tabindex"),e.removeAttribute("role"),e.setAttribute("id",this._fieldId),this._valueButton.appendChild(e)}__updateValueButton(){if(!this._valueButton)return;this._valueButton.innerHTML="";const e=this._items[this._menuElement.selected];if(this._valueButton.removeAttribute("placeholder"),e)this.__attachSelectedItem(e),this._valueChanging||(this._selectedChanging=!0,this.value=e.value||"",this.__userInteraction&&(this.opened=!1,this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__userInteraction=!1),delete this._selectedChanging);else if(this.placeholder){const t=this.__createItemElement({label:this.placeholder});this.__appendValueItemElement(t),this._valueButton.setAttribute("placeholder","")}}_updateSelectedItem(e,t){if(t){const i=e==null?e:e.toString();this._menuElement.selected=t.reduce((r,o,l)=>r===void 0&&o.value===i?l:r,void 0),this._selectedChanging||(this._valueChanging=!0,this.__updateValueButton(),delete this._valueChanging)}}_shouldRemoveFocus(){return!this.opened}_setFocused(e){super._setFocused(e),e||this.validate()}checkValidity(){return!this.required||this.readonly||!!this.value}__defaultRenderer(e,t){if(!this.items||this.items.length===0){e.textContent="";return}let i=e.firstElementChild;i||(i=document.createElement("vaadin-select-list-box"),e.appendChild(i)),i.textContent="",this.items.forEach(r=>{i.appendChild(this.__createItemElement(r))})}}customElements.define(Ds.is,Ds);c("vaadin-split-layout",m`
    [part='splitter'] {
      min-width: var(--lumo-space-s);
      min-height: var(--lumo-space-s);
      background-color: var(--lumo-contrast-5pct);
      transition: 0.1s background-color;
    }

    [part='handle'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--lumo-size-m);
      height: var(--lumo-size-m);
    }

    [part='handle']::after {
      content: '';
      display: block;
      width: 4px;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-30pct);
      transition: 0.1s opacity, 0.1s background-color;
    }

    :host([orientation='vertical']) [part='handle']::after {
      width: 100%;
      height: 4px;
    }

    /* Hover style */
    [part='splitter']:hover [part='handle']::after {
      background-color: var(--lumo-contrast-40pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      [part='splitter']:hover [part='handle']::after {
        background-color: var(--lumo-contrast-30pct);
      }
    }

    /* Active style */
    [part='splitter']:active [part='handle']::after {
      background-color: var(--lumo-contrast-50pct);
    }

    /* Small/minimal */
    :host([theme~='small']) > [part='splitter'] {
      border-left: 1px solid var(--lumo-contrast-10pct);
      border-top: 1px solid var(--lumo-contrast-10pct);
    }

    :host([theme~='small']) > [part='splitter'],
    :host([theme~='minimal']) > [part='splitter'] {
      min-width: 0;
      min-height: 0;
      background-color: transparent;
    }

    :host([theme~='small']) > [part='splitter']::after,
    :host([theme~='minimal']) > [part='splitter']::after {
      content: '';
      position: absolute;
      top: -4px;
      right: -4px;
      bottom: -4px;
      left: -4px;
    }

    :host([theme~='small']) > [part='splitter'] > [part='handle']::after,
    :host([theme~='minimal']) > [part='splitter'] > [part='handle']::after {
      opacity: 0;
    }

    :host([theme~='small']) > [part='splitter']:hover > [part='handle']::after,
    :host([theme~='small']) > [part='splitter']:active > [part='handle']::after,
    :host([theme~='minimal']) > [part='splitter']:hover > [part='handle']::after,
    :host([theme~='minimal']) > [part='splitter']:active > [part='handle']::after {
      opacity: 1;
    }

    /* RTL specific styles */
    :host([theme~='small'][dir='rtl']) > [part='splitter'] {
      border-left: auto;
      border-right: 1px solid var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-split-layout"});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ge extends w(v(g)){static get template(){return _`
      <style>
        :host {
          display: flex;
          overflow: hidden !important;
          transform: translateZ(0);
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([orientation='vertical']) {
          flex-direction: column;
        }

        :host ::slotted(*) {
          flex: 1 1 auto;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }

        [part='splitter'] {
          flex: none;
          position: relative;
          z-index: 1;
          overflow: visible;
          min-width: 8px;
          min-height: 8px;
        }

        :host(:not([orientation='vertical'])) > [part='splitter'] {
          cursor: ew-resize;
        }

        :host([orientation='vertical']) > [part='splitter'] {
          cursor: ns-resize;
        }

        [part='handle'] {
          width: 40px;
          height: 40px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
        }
      </style>
      <slot id="primary" name="primary"></slot>
      <div part="splitter" id="splitter">
        <div part="handle"></div>
      </div>
      <slot id="secondary" name="secondary"></slot>
    `}static get is(){return"vaadin-split-layout"}static get properties(){return{orientation:{type:String,reflectToAttribute:!0,value:"horizontal"},_previousPrimaryPointerEvents:String,_previousSecondaryPointerEvents:String}}ready(){super.ready(),this.__observer=new T(this,t=>{this._cleanupNodes(t.removedNodes),this._processChildren()});const e=this.$.splitter;ot(e,"track",this._onHandleTrack.bind(this)),ot(e,"down",this._setPointerEventsNone.bind(this)),ot(e,"up",this._restorePointerEvents.bind(this))}_cleanupNodes(e){e.forEach(t=>{t.parentElement instanceof Ge||t.removeAttribute("slot")})}_processChildren(){[...this.children].forEach((e,t)=>{t===0?(this._primaryChild=e,e.setAttribute("slot","primary")):t===1?(this._secondaryChild=e,e.setAttribute("slot","secondary")):e.removeAttribute("slot")})}_setFlexBasis(e,t,i){t=Math.max(0,Math.min(t,i)),t===0&&(t=1e-6),e.style.flex=`1 1 ${t}px`}_setPointerEventsNone(e){!this._primaryChild||!this._secondaryChild||(this._previousPrimaryPointerEvents=this._primaryChild.style.pointerEvents,this._previousSecondaryPointerEvents=this._secondaryChild.style.pointerEvents,this._primaryChild.style.pointerEvents="none",this._secondaryChild.style.pointerEvents="none",e.preventDefault())}_restorePointerEvents(){!this._primaryChild||!this._secondaryChild||(this._primaryChild.style.pointerEvents=this._previousPrimaryPointerEvents,this._secondaryChild.style.pointerEvents=this._previousSecondaryPointerEvents)}_onHandleTrack(e){if(!this._primaryChild||!this._secondaryChild)return;const t=this.orientation==="vertical"?"height":"width";if(e.detail.state==="start"){this._startSize={container:this.getBoundingClientRect()[t]-this.$.splitter.getBoundingClientRect()[t],primary:this._primaryChild.getBoundingClientRect()[t],secondary:this._secondaryChild.getBoundingClientRect()[t]};return}const i=this.orientation==="vertical"?e.detail.dy:e.detail.dx,o=this.orientation!=="vertical"&&this.getAttribute("dir")==="rtl"?-i:i;this._setFlexBasis(this._primaryChild,this._startSize.primary+o,this._startSize.container),this._setFlexBasis(this._secondaryChild,this._startSize.secondary-o,this._startSize.container),e.detail.state==="end"&&(this.dispatchEvent(new CustomEvent("splitter-dragend")),delete this._startSize)}notifyResize(){console.warn("WARNING: Since Vaadin 23, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}}customElements.define(Ge.is,Ge);c("vaadin-tab",m`
    :host {
      box-sizing: border-box;
      padding: 0.5rem 0.75rem;
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-xs);
      font-weight: 500;
      opacity: 1;
      color: var(--lumo-secondary-text-color);
      transition: 0.15s color, 0.2s transform;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      position: relative;
      cursor: var(--lumo-clickable-cursor);
      transform-origin: 50% 100%;
      outline: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow: hidden;
      min-width: var(--lumo-size-m);
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }

    :host(:not([orientation='vertical'])) {
      text-align: center;
    }

    :host([orientation='vertical']) {
      transform-origin: 0% 50%;
      padding: 0.25rem 1rem;
      min-height: var(--lumo-size-m);
      min-width: 0;
    }

    :host(:hover),
    :host([focus-ring]) {
      color: var(--lumo-body-text-color);
    }

    :host([selected]) {
      color: var(--lumo-primary-text-color);
      transition: 0.6s color;
    }

    :host([active]:not([selected])) {
      color: var(--lumo-primary-text-color);
      transition-duration: 0.1s;
    }

    :host::before,
    :host::after {
      content: '';
      position: absolute;
      display: var(--_lumo-tab-marker-display, block);
      bottom: 0;
      left: 50%;
      width: var(--lumo-size-s);
      height: 2px;
      background-color: var(--lumo-contrast-60pct);
      border-radius: var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0 0;
      transform: translateX(-50%) scale(0);
      transform-origin: 50% 100%;
      transition: 0.14s transform cubic-bezier(0.12, 0.32, 0.54, 1);
      will-change: transform;
    }

    :host([selected])::before,
    :host([selected])::after {
      background-color: var(--lumo-primary-color);
    }

    :host([orientation='vertical'])::before,
    :host([orientation='vertical'])::after {
      left: 0;
      bottom: 50%;
      transform: translateY(50%) scale(0);
      width: 2px;
      height: var(--lumo-size-xs);
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
      transform-origin: 100% 50%;
    }

    :host::after {
      box-shadow: 0 0 0 4px var(--lumo-primary-color);
      opacity: 0.15;
      transition: 0.15s 0.02s transform, 0.8s 0.17s opacity;
    }

    :host([selected])::before,
    :host([selected])::after {
      transform: translateX(-50%) scale(1);
      transition-timing-function: cubic-bezier(0.12, 0.32, 0.54, 1.5);
    }

    :host([orientation='vertical'][selected])::before,
    :host([orientation='vertical'][selected])::after {
      transform: translateY(50%) scale(1);
    }

    :host([selected]:not([active]))::after {
      opacity: 0;
    }

    :host(:not([orientation='vertical'])) ::slotted(a[href]) {
      justify-content: center;
    }

    :host ::slotted(a) {
      display: flex;
      width: 100%;
      align-items: center;
      height: 100%;
      margin: -0.5rem -0.75rem;
      padding: 0.5rem 0.75rem;
      outline: none;

      /*
          Override the CSS inherited from \`lumo-color\` and \`lumo-typography\`.
          Note: \`!important\` is needed because of the \`:slotted\` specificity.
        */
      text-decoration: none !important;
      color: inherit !important;
    }

    :host ::slotted(vaadin-icon),
    :host ::slotted(iron-icon) {
      margin: 0 4px;
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    :host ::slotted(vaadin-icon[icon^='vaadin:']),
    :host ::slotted(iron-icon[icon^='vaadin:']) {
      padding: 0.25rem;
      box-sizing: border-box !important;
    }

    :host(:not([dir='rtl'])) ::slotted(vaadin-icon:first-child),
    :host(:not([dir='rtl'])) ::slotted(iron-icon:first-child) {
      margin-left: 0;
    }

    :host(:not([dir='rtl'])) ::slotted(vaadin-icon:last-child),
    :host(:not([dir='rtl'])) ::slotted(iron-icon:last-child) {
      margin-right: 0;
    }

    :host([theme~='icon-on-top']) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      text-align: center;
      padding-bottom: 0.5rem;
      padding-top: 0.25rem;
    }

    :host([theme~='icon-on-top']) ::slotted(a) {
      flex-direction: column;
      align-items: center;
      margin-top: -0.25rem;
      padding-top: 0.25rem;
    }

    :host([theme~='icon-on-top']) ::slotted(vaadin-icon),
    :host([theme~='icon-on-top']) ::slotted(iron-icon) {
      margin: 0;
    }

    /* Disabled */

    :host([disabled]) {
      pointer-events: none;
      opacity: 1;
      color: var(--lumo-disabled-text-color);
    }

    /* Focus-ring */

    :host([focus-ring]) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      border-radius: var(--lumo-border-radius-m);
    }

    /* RTL specific styles */

    :host([dir='rtl'])::before,
    :host([dir='rtl'])::after {
      left: auto;
      right: 50%;
      transform: translateX(50%) scale(0);
    }

    :host([dir='rtl'][selected]:not([orientation='vertical']))::before,
    :host([dir='rtl'][selected]:not([orientation='vertical']))::after {
      transform: translateX(50%) scale(1);
    }

    :host([dir='rtl']) ::slotted(vaadin-icon:first-child),
    :host([dir='rtl']) ::slotted(iron-icon:first-child) {
      margin-right: 0;
    }

    :host([dir='rtl']) ::slotted(vaadin-icon:last-child),
    :host([dir='rtl']) ::slotted(iron-icon:last-child) {
      margin-left: 0;
    }

    :host([orientation='vertical'][dir='rtl']) {
      transform-origin: 100% 50%;
    }

    :host([dir='rtl'][orientation='vertical'])::before,
    :host([dir='rtl'][orientation='vertical'])::after {
      left: auto;
      right: 0;
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
      transform-origin: 0% 50%;
    }
  `,{moduleId:"lumo-tab"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Vs extends w(v(qo(z(g)))){static get template(){return _`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <slot></slot>
      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-tab"}ready(){super.ready(),this.setAttribute("role","tab"),this._tooltipController=new O(this),this.addController(this._tooltipController)}_onKeyUp(e){const t=this.hasAttribute("active");if(super._onKeyUp(e),t){const i=this.querySelector("a");i&&i.click()}}}customElements.define(Vs.is,Vs);c("vaadin-tabs",m`
    :host {
      -webkit-tap-highlight-color: transparent;
    }

    :host(:not([orientation='vertical'])) {
      box-shadow: inset 0 -1px 0 0 var(--lumo-contrast-10pct);
      position: relative;
      min-height: var(--lumo-size-l);
    }

    :host([orientation='horizontal']) [part='tabs'] ::slotted(vaadin-tab:not([theme~='icon-on-top'])) {
      justify-content: center;
    }

    :host([orientation='vertical']) {
      box-shadow: -1px 0 0 0 var(--lumo-contrast-10pct);
    }

    :host([orientation='horizontal']) [part='tabs'] {
      margin: 0 0.75rem;
    }

    :host([orientation='vertical']) [part='tabs'] {
      width: 100%;
      margin: 0.5rem 0;
    }

    [part='forward-button'],
    [part='back-button'] {
      position: absolute;
      z-index: 1;
      font-family: lumo-icons;
      color: var(--lumo-tertiary-text-color);
      font-size: var(--lumo-icon-size-m);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.5em;
      height: 100%;
      transition: 0.2s opacity;
      top: 0;
    }

    [part='forward-button']:hover,
    [part='back-button']:hover {
      color: inherit;
    }

    :host(:not([dir='rtl'])) [part='forward-button'] {
      right: 0;
    }

    [part='forward-button']::after {
      content: var(--lumo-icons-angle-right);
    }

    [part='back-button']::after {
      content: var(--lumo-icons-angle-left);
    }

    /* Tabs overflow */

    [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: none;
      -webkit-mask-image: var(--_lumo-tabs-overflow-mask-image);
      mask-image: var(--_lumo-tabs-overflow-mask-image);
    }

    /* Horizontal tabs overflow */

    /* Both ends overflowing */
    :host([overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        90deg,
        transparent 2em,
        #000 4em,
        #000 calc(100% - 4em),
        transparent calc(100% - 2em)
      );
    }

    /* End overflowing */
    :host([overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
    }

    /* Start overflowing */
    :host([overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent 2em, #000 4em);
    }

    /* Vertical tabs overflow */

    /* Both ends overflowing */
    :host([overflow~='start'][overflow~='end'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em, #000 calc(100% - 2em), transparent);
    }

    /* End overflowing */
    :host([overflow~='end'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(#000 calc(100% - 2em), transparent);
    }

    /* Start overflowing */
    :host([overflow~='start'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em);
    }

    :host [part='tabs'] ::slotted(:not(vaadin-tab)) {
      margin-left: var(--lumo-space-m);
    }

    /* Centered */

    :host([theme~='centered'][orientation='horizontal']) ::slotted(vaadin-tab:first-of-type) {
      margin-inline-start: auto;
    }

    :host([theme~='centered'][orientation='horizontal']) ::slotted(vaadin-tab:last-of-type) {
      margin-inline-end: auto;
    }

    /* Small */

    :host([theme~='small']),
    :host([theme~='small']) [part='tabs'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='small']) [part='tabs'] ::slotted(vaadin-tab) {
      font-size: var(--lumo-font-size-s);
    }

    /* Minimal */

    :host([theme~='minimal']) {
      box-shadow: none;
      --_lumo-tab-marker-display: none;
    }

    /* Hide-scroll-buttons */

    :host([theme~='hide-scroll-buttons']) [part='back-button'],
    :host([theme~='hide-scroll-buttons']) [part='forward-button'] {
      display: none;
    }

    /* prettier-ignore */
    :host([theme~='hide-scroll-buttons'][overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        90deg,
        transparent,
        #000 2em,
        #000 calc(100% - 2em),
        transparent 100%
      );
    }

    :host([theme~='hide-scroll-buttons'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 2em), transparent 100%);
    }

    :host([theme~='hide-scroll-buttons'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent, #000 2em);
    }

    /* Equal-width tabs */
    :host([theme~='equal-width-tabs']) {
      flex: auto;
    }

    :host([theme~='equal-width-tabs']) [part='tabs'] ::slotted(vaadin-tab) {
      flex: 1 0 0%;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='forward-button']::after {
      content: var(--lumo-icons-angle-left);
    }

    :host([dir='rtl']) [part='back-button']::after {
      content: var(--lumo-icons-angle-right);
    }

    :host([orientation='vertical'][dir='rtl']) {
      box-shadow: 1px 0 0 0 var(--lumo-contrast-10pct);
    }

    :host([dir='rtl']) [part='forward-button'] {
      left: 0;
    }

    :host([dir='rtl']) [part='tabs'] ::slotted(:not(vaadin-tab)) {
      margin-left: 0;
      margin-right: var(--lumo-space-m);
    }

    /* Both ends overflowing */
    :host([dir='rtl'][overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        -90deg,
        transparent 2em,
        #000 4em,
        #000 calc(100% - 4em),
        transparent calc(100% - 2em)
      );
    }

    /* End overflowing */
    :host([dir='rtl'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
    }

    /* Start overflowing */
    :host([dir='rtl'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent 2em, #000 4em);
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='start'][overflow~='end']:not([orientation='vertical']))
      [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        -90deg,
        transparent,
        #000 2em,
        #000 calc(100% - 2em),
        transparent 100%
      );
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 2em), transparent 100%);
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent, #000 2em);
    }
  `,{moduleId:"lumo-tabs"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Bt extends te(w(Uo(v(g)))){static get template(){return _`
      <style>
        :host {
          display: flex;
          align-items: center;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([orientation='vertical']) {
          display: block;
        }

        :host([orientation='horizontal']) [part='tabs'] {
          flex-grow: 1;
          display: flex;
          align-self: stretch;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        /* This seems more future-proof than \`overflow: -moz-scrollbars-none\` which is marked obsolete
         and is no longer guaranteed to work:
         https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#Mozilla_Extensions */
        @-moz-document url-prefix() {
          :host([orientation='horizontal']) [part='tabs'] {
            overflow: hidden;
          }
        }

        :host([orientation='horizontal']) [part='tabs']::-webkit-scrollbar {
          display: none;
        }

        :host([orientation='vertical']) [part='tabs'] {
          height: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        [part='back-button'],
        [part='forward-button'] {
          pointer-events: none;
          opacity: 0;
          cursor: default;
        }

        :host([overflow~='start']) [part='back-button'],
        :host([overflow~='end']) [part='forward-button'] {
          pointer-events: auto;
          opacity: 1;
        }

        [part='back-button']::after {
          content: '◀';
        }

        [part='forward-button']::after {
          content: '▶';
        }

        :host([orientation='vertical']) [part='back-button'],
        :host([orientation='vertical']) [part='forward-button'] {
          display: none;
        }

        /* RTL specific styles */

        :host([dir='rtl']) [part='back-button']::after {
          content: '▶';
        }

        :host([dir='rtl']) [part='forward-button']::after {
          content: '◀';
        }
      </style>
      <div on-click="_scrollBack" part="back-button" aria-hidden="true"></div>

      <div id="scroll" part="tabs">
        <slot></slot>
      </div>

      <div on-click="_scrollForward" part="forward-button" aria-hidden="true"></div>
    `}static get is(){return"vaadin-tabs"}static get properties(){return{orientation:{value:"horizontal",type:String},selected:{value:0,type:Number}}}static get observers(){return["__tabsItemsChanged(items, items.*)"]}constructor(){super(),this.__itemsResizeObserver=new ResizeObserver(()=>{setTimeout(()=>this._updateOverflow())})}ready(){super.ready(),this._scrollerElement.addEventListener("scroll",()=>this._updateOverflow()),this.setAttribute("role","tablist"),Vt(this,()=>{this._updateOverflow()})}_onResize(){this._updateOverflow()}__tabsItemsChanged(e){this.__itemsResizeObserver.disconnect(),(e||[]).forEach(t=>{this.__itemsResizeObserver.observe(t)}),this._updateOverflow()}_scrollForward(){this._scroll(-this.__direction*this._scrollOffset)}_scrollBack(){this._scroll(this.__direction*this._scrollOffset)}get _scrollOffset(){return this._vertical?this._scrollerElement.offsetHeight:this._scrollerElement.offsetWidth}get _scrollerElement(){return this.$.scroll}get __direction(){return!this._vertical&&this.getAttribute("dir")==="rtl"?1:-1}_updateOverflow(){const e=this._vertical?this._scrollerElement.scrollTop:this.__getNormalizedScrollLeft(this._scrollerElement),t=this._vertical?this._scrollerElement.scrollHeight:this._scrollerElement.scrollWidth;let i=e>0?"start":"";i+=e+this._scrollOffset<t?" end":"",this.__direction===1&&(i=i.replace(/start|end/gi,r=>r==="start"?"end":"start")),i?this.setAttribute("overflow",i.trim()):this.removeAttribute("overflow")}}customElements.define(Bt.is,Bt);const dl=m`
  :host {
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    font-family: var(--lumo-font-family);
  }

  :host([theme~='bordered']) {
    border: 1px solid var(--lumo-contrast-20pct);
    border-radius: var(--lumo-border-radius-l);
  }

  [part='tabs-container'] {
    box-shadow: inset 0 -1px 0 0 var(--lumo-contrast-10pct);
    padding: var(--lumo-space-xs) var(--lumo-space-s);
    gap: var(--lumo-space-s);
  }

  ::slotted([slot='tabs']) {
    box-shadow: initial;
    margin: calc(var(--lumo-space-xs) * -1) calc(var(--lumo-space-s) * -1);
  }

  [part='content'] {
    padding: var(--lumo-space-s) var(--lumo-space-m);
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  :host([loading]) [part='content'] {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;c("vaadin-tabsheet",[dl,Mr],{moduleId:"lumo-tabsheet"});/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Rs extends zt{static get is(){return"vaadin-tabsheet-scroller"}}customElements.define(Rs.is,Rs);/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class hl extends tt{constructor(e){super(e,"tabs"),this.__tabsItemsChangedListener=this.__tabsItemsChangedListener.bind(this),this.__tabsSelectedChangedListener=this.__tabsSelectedChangedListener.bind(this)}__tabsItemsChangedListener(){this.host._setItems(this.tabs.items)}__tabsSelectedChangedListener(){this.host.selected=this.tabs.selected}initCustomNode(e){if(!(e instanceof Bt))throw Error('The "tabs" slot of a <vaadin-tabsheet> must only contain a <vaadin-tabs> element!');this.tabs=e,e.addEventListener("items-changed",this.__tabsItemsChangedListener),e.addEventListener("selected-changed",this.__tabsSelectedChangedListener),this.host.__tabs=e,this.host.stateTarget=e,this.__tabsItemsChangedListener()}teardownNode(e){this.tabs=null,e.removeEventListener("items-changed",this.__tabsItemsChangedListener),e.removeEventListener("selected-changed",this.__tabsSelectedChangedListener),this.host.__tabs=null,this.host._setItems([]),this.host.stateTarget=void 0}}class Ns extends z(Zs(w(v(g)))){static get template(){return _`
      <style>
        :host([hidden]) {
          display: none !important;
        }

        :host {
          display: flex;
          flex-direction: column;
        }

        [part='tabs-container'] {
          position: relative;
          display: flex;
          align-items: center;
        }

        ::slotted([slot='tabs']) {
          flex: 1;
          align-self: stretch;
          min-width: 8em;
        }

        [part='content'] {
          position: relative;
          flex: 1;
          box-sizing: border-box;
        }
      </style>

      <div part="tabs-container">
        <slot name="prefix"></slot>
        <slot name="tabs"></slot>
        <slot name="suffix"></slot>
      </div>

      <vaadin-tabsheet-scroller part="content">
        <div part="loader"></div>
        <slot id="panel-slot"></slot>
      </vaadin-tabsheet-scroller>
    `}static get is(){return"vaadin-tabsheet"}static get properties(){return{items:{type:Array,readOnly:!0,notify:!0},selected:{value:0,type:Number,notify:!0},__tabs:{type:Object},__panels:{type:Array}}}static get delegateProps(){return["selected"]}static get delegateAttrs(){return["theme"]}ready(){super.ready(),this.__overflowController=new si(this,this.shadowRoot.querySelector('[part="content"]')),this.addController(this.__overflowController),this._tabsSlotController=new hl(this),this.addController(this._tabsSlotController);const e=this.shadowRoot.querySelector("#panel-slot");this.__panelsObserver=new T(e,()=>{this.__panels=Array.from(e.assignedNodes({flatten:!0})).filter(t=>t.nodeType===Node.ELEMENT_NODE)})}static get observers(){return["__itemsOrPanelsChanged(items, __panels)","__selectedTabItemChanged(selected, items, __panels)"]}__itemsOrPanelsChanged(e,t){!e||!t||e.forEach(i=>{const r=t.find(o=>o.getAttribute("tab")===i.id);r&&(r.role="tabpanel",r.id=r.id||`tabsheet-panel-${be()}`,r.setAttribute("aria-labelledby",i.id),i.setAttribute("aria-controls",r.id))})}__selectedTabItemChanged(e,t,i){if(!t||!i||e===void 0)return;const r=this.shadowRoot.querySelector('[part="content"]'),o=t[e],l=o?o.id:"",a=i.find(d=>d.getAttribute("tab")===l);this.toggleAttribute("loading",!a);const n=i.filter(d=>!d.hidden).length===1;a?r.style.minHeight="":n&&(r.style.minHeight=`${r.offsetHeight}px`),i.forEach(d=>{d.hidden=d!==a})}}customElements.define(Ns.is,Ns);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class $s extends w(z(v(g))){static get template(){return _`
      <style>
        :host {
          display: block;
          height: 400px;
          overflow: auto;
          flex: auto;
          align-self: stretch;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host(:not([grid])) #items > ::slotted(*) {
          width: 100%;
        }
      </style>

      <div id="items">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-virtual-list"}static get properties(){return{items:{type:Array},renderer:Function,__virtualizer:Object}}static get observers(){return["__itemsOrRendererChanged(items, renderer, __virtualizer)"]}ready(){super.ready(),this.__virtualizer=new Gs({createElements:this.__createElements,updateElement:this.__updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.shadowRoot.querySelector("#items")}),this.__overflowController=new si(this),this.addController(this.__overflowController),ye(this)}scrollToIndex(e){this.__virtualizer.scrollToIndex(e)}__createElements(e){return[...Array(e)].map(()=>document.createElement("div"))}__updateElement(e,t){e.__renderer!==this.renderer&&(e.__renderer=this.renderer,this.__clearRenderTargetContent(e)),this.renderer&&this.renderer(e,this,{item:this.items[t],index:t})}__clearRenderTargetContent(e){e.innerHTML="",delete e._$litPart$}__itemsOrRendererChanged(e,t,i){const r=this.childElementCount>0;(t||r)&&i&&(i.size=(e||[]).length,i.update())}get firstVisibleIndex(){return this.__virtualizer.firstVisibleIndex}get lastVisibleIndex(){return this.__virtualizer.lastVisibleIndex}requestContentUpdate(){this.__virtualizer&&this.__virtualizer.update()}}customElements.define($s.is,$s);(function(){const s=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Combo Box")};window.Vaadin.Flow.comboBoxConnector={initLazy:e=>s(function(t){if(t.$connector)return;t.$connector={};const i={};let r={},o="";const l=new window.Vaadin.ComboBoxPlaceholder,a=(()=>{let u="",p=!1;return{needsDataCommunicatorReset:()=>p=!0,getLastFilterSentToServer:()=>u,requestData:(C,E,I)=>{const F=E-C,D=I.filter;t.$server.setRequestedRange(C,F,D),u=D,p&&(t.$server.resetDataCommunicator(),p=!1)}}})(),n=(u=Object.keys(i))=>{u.forEach(p=>{i[p]([],t.size),delete i[p];const f=parseInt(p)*t.pageSize,y=f+t.pageSize,b=Math.min(y,t.filteredItems.length);for(let C=f;C<b;C++)t.filteredItems[C]=l})};t.dataProvider=function(u,p){if(u.pageSize!=t.pageSize)throw"Invalid pageSize";if(t._clientSideFilter)if(r[0]){h(r[0],u.filter,p);return}else u.filter="";if(u.filter!==o){r={},o=u.filter,this._filterDebouncer=Z.debounce(this._filterDebouncer,q.after(500),()=>{if(a.getLastFilterSentToServer()===u.filter&&a.needsDataCommunicatorReset(),u.filter!==o)throw new Error("Expected params.filter to be '"+o+"' but was '"+u.filter+"'");this._filterDebouncer=void 0,n(),t.dataProvider(u,p)});return}if(this._filterDebouncer){i[u.page]=p;return}if(r[u.page])d(u.page,p);else{i[u.page]=p;const y=Math.max(u.pageSize*2,500),b=Object.keys(i).map(I=>parseInt(I)),C=Math.min(...b),E=Math.max(...b);if(b.length*u.pageSize>y)u.page===C?n([String(E)]):n([String(C)]),t.dataProvider(u,p);else if(E-C+1!==b.length)n();else{const I=u.pageSize*C,F=u.pageSize*(E+1);a.requestData(I,F,u)}}},t.$connector.clear=s((u,p)=>{const f=Math.floor(u/t.pageSize),y=Math.ceil(p/t.pageSize);for(let b=f;b<f+y;b++)delete r[b]}),t.$connector.filter=s(function(u,p){return p=p?p.toString().toLowerCase():"",t._getItemLabel(u,t.itemLabelPath).toString().toLowerCase().indexOf(p)>-1}),t.$connector.set=s(function(u,p,f){if(f!=a.getLastFilterSentToServer())return;if(u%t.pageSize!=0)throw"Got new data to index "+u+" which is not aligned with the page size of "+t.pageSize;if(u===0&&p.length===0&&i[0]){r[0]=[];return}const y=u/t.pageSize,b=Math.ceil(p.length/t.pageSize);for(let C=0;C<b;C++){let E=y+C,I=p.slice(C*t.pageSize,(C+1)*t.pageSize);r[E]=I}}),t.$connector.updateData=s(function(u){const p=new Map(u.map(f=>[f.key,f]));t.filteredItems=t.filteredItems.map(f=>p.get(f.key)||f)}),t.$connector.updateSize=s(function(u){t._clientSideFilter||(t.size=u)}),t.$connector.reset=s(function(){n(),r={},t.clearCache()}),t.$connector.confirm=s(function(u,p){if(p!=a.getLastFilterSentToServer())return;let f=Object.getOwnPropertyNames(i);for(let y=0;y<f.length;y++){let b=f[y];r[b]&&d(b,i[b])}t.$server.confirmUpdate(u)});const d=s(function(u,p){let f=r[u];t._clientSideFilter?h(f,t.filter,p):(delete r[u],p(f,t.size))}),h=s(function(u,p,f){let y=u;p&&(y=u.filter(b=>t.$connector.filter(b,p))),f(y,y.length)});t.addEventListener("custom-value-set",s(u=>u.preventDefault()))})(e)}})();window.Vaadin.ComboBoxPlaceholder=M;(function(){function s(t){const i=t._overlayElement;i&&(i.className=t.className)}const e=new MutationObserver(t=>{t.forEach(i=>{i.type==="attributes"&&i.attributeName==="class"&&s(i.target)})});window.Vaadin.Flow.confirmDialogConnector={initLazy:function(t){t.$connector||(t.$connector={},t.addEventListener("opened-changed",i=>{i.detail.value&&s(t)}),e.observe(t,{attributes:!0,attributeFilter:["class"]}),s(t))}}})();(function(){function s(t){const i=t.$.overlay;i&&(i.className=t.className)}const e=new MutationObserver(t=>{t.forEach(i=>{i.type==="attributes"&&i.attributeName==="class"&&s(i.target)})});window.Vaadin.Flow.dialogConnector={initLazy:function(t){t.$connector||(t.$connector={},t.addEventListener("opened-changed",i=>{i.detail.value&&s(t)}),e.observe(t,{attributes:!0,attributeFilter:["class"]}),s(t))}}})();window.Vaadin.Flow.ironListConnector={initLazy:function(s){if(s.$connector)return;const e=20;let t=[0,0];s.$connector={},s.$connector.placeholderItem={__placeholder:!0};const i=function(){let a=s._virtualStart,n=s._virtualEnd,d=Math.max(0,a-e),h=Math.min(n+e,s.items.length);if(t[0]!=d||t[1]!=h){t=[d,h];const u=1+h-d;s.$server.setRequestedRange(d,u)}};let r;const o=function(){r=Z.debounce(r,q.after(10),i)},l=s._assignModels;s._assignModels=function(){const a=[],n=s._virtualStart,d=Math.min(s.items.length,s._physicalCount);for(let h=0;h<d;h++)s.items[n+h]===void 0&&(a.push(h),s.items[n+h]=s.$connector.placeholderItem);l.apply(s,arguments);for(let h=0;h<a.length;h++)delete s.items[n+a[h]];o()},s.items=[],s.$connector.set=function(a,n){for(let d=0;d<n.length;d++){const h=a+d;s.items[h]=n[d]}s._render()},s.$connector.updateData=function(a){const n=s.items,d={};let h=a.length;for(let u=0;u<a.length;u++){const p=a[u];d[p.key]=p}for(let u=0;u<n.length;u++){const p=n[u],f=d[p.key];if(f&&(s.items[u]=f,s.notifyPath("items."+u),h--,h==0))break}},s.$connector.clear=function(a,n){for(let d=0;d<n;d++){const h=a+d;delete s.items[h],s.notifyPath("items."+h)}},s.$connector.updateSize=function(a){const n=a-s.items.length;if(n>0)s.items.length=a,s.notifySplices("items",[{index:a-n,removed:[],addedCount:n,object:s.items,type:"splice"}]);else if(n<0){const d=s.items.slice(a,s.items.length);s.items.splice(a),s.notifySplices("items",[{index:a,removed:d,addedCount:0,object:s.items,type:"splice"}])}},s.$connector.setPlaceholderItem=function(a){a||(a={}),a.__placeholder=!0,s.$connector.placeholderItem=a}}};const jr=document.createElement("template");jr.innerHTML=`<style>
/* Fixes zero width in flex layouts */
iron-list {
  flex: auto;
  align-self: stretch;
}
</style>`;document.head.appendChild(jr.content);(function(){function s(t){const i=t.$.vaadinLoginOverlayWrapper;i&&(i.className=t.className)}const e=new MutationObserver(t=>{t.forEach(i=>{i.type==="attributes"&&i.attributeName==="class"&&s(i.target)})});window.Vaadin.Flow.loginOverlayConnector={initLazy:function(t){t.$connector||(t.$connector={},t.addEventListener("opened-changed",i=>{i.detail.value&&s(t)}),e.observe(t,{attributes:!0,attributeFilter:["class"]}),s(t))}}})();(function(){const s=function(t){return window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Menu Bar")};function e(t,i){if(t.$connector)return;const r=new MutationObserver(o=>{o.some(a=>{const n=a.oldValue,d=a.target.getAttribute(a.attributeName);return n!==d})&&t.$connector.generateItems()});t.$connector={generateItems:s(o=>{if(!t.shadowRoot){setTimeout(()=>t.$connector.generateItems(o));return}o&&(t.__generatedItems=window.Vaadin.Flow.contextMenuConnector.generateItemsTree(i,o));let l=t.__generatedItems||[];l.forEach(a=>a.disabled=a.component.disabled),l=l.filter(a=>!a.component.hidden),l.forEach(a=>{r.observe(a.component,{attributeFilter:["hidden","disabled"],attributeOldValue:!0})}),t.items=l,t._buttons.forEach(a=>{a.item&&a.item.component&&a.addEventListener("click",n=>{n.composedPath().indexOf(a.item.component)===-1&&(a.item.component.click(),n.stopPropagation())})})})}}window.Vaadin.Flow.menubarConnector={initLazy(...t){return s(e)(...t)}}})();(function(){const s=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Message List")};window.Vaadin.Flow.messageListConnector={setItems:(e,t,i)=>s(function(r,o,l){const a=new Intl.DateTimeFormat(l,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"});r.items=o.map(n=>n.time?Object.assign(n,{time:a.format(new Date(n.time))}):n)})(e,t,i)}})();(function(){const s=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Select")};window.Vaadin.Flow.selectConnector={initLazy:e=>s(function(t){const i=s(function(){for(let r=0;r<t.childElementCount;r++){const o=t.children[r];if(o.tagName.toUpperCase()==="VAADIN-SELECT-LIST-BOX")return o}});t.$connector||(t.$connector={},t.renderer=s(function(r){const o=i();o&&(r.firstChild&&r.removeChild(r.firstChild),r.appendChild(o))}))})(e)}})();const ge=window;ge.Vaadin=ge.Vaadin||{};ge.Vaadin.Flow=ge.Vaadin.Flow||{};ge.Vaadin.Flow.tooltip={setDefaultHideDelay:s=>at.setDefaultHideDelay(s),setDefaultFocusDelay:s=>at.setDefaultFocusDelay(s),setDefaultHoverDelay:s=>at.setDefaultHoverDelay(s)};(function(){let s;customElements.whenDefined("vaadin-text-field").then(()=>{class e extends customElements.get("vaadin-text-field"){static get template(){return s||(s=super.template.cloneNode(!0),s.innerHTML+=`<style>
                  :host {
                    width: 8em;
                  }

                  :host([dir="rtl"]) [part="input-field"] {
                    direction: ltr;
                  }

                  :host([dir="rtl"]) [part="input-field"] ::slotted(input) {
                    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em) !important;
                  }
            </style>`),s}static get is(){return"vaadin-big-decimal-field"}static get properties(){return{_decimalSeparator:{type:String,value:".",observer:"__decimalSeparatorChanged"}}}ready(){super.ready(),this.inputElement.setAttribute("inputmode","decimal")}__decimalSeparatorChanged(i,r){this.allowedCharPattern="[\\d-+"+i+"]",this.value&&r&&(this.value=this.value.split(r).join(i))}}customElements.define(e.is,e)})})();const ul={"\\u0660":"0","\\u0661":"1","\\u0662":"2","\\u0663":"3","\\u0664":"4","\\u0665":"5","\\u0666":"6","\\u0667":"7","\\u0668":"8","\\u0669":"9"};function cl(s){return s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Yr(s){return s.replace(/[\u0660-\u0669]/g,function(e){const t="\\u0"+e.charCodeAt(0).toString(16);return ul[t]})}function Gr(s,e){const t=e.toLocaleTimeString(s),i=/[^\d\u0660-\u0669]/,r=t.match(new RegExp(`${i.source}+$`,"g"))||t.match(new RegExp(`^${i.source}+`,"g"));return r&&r[0].trim()}function pl(s){let e=ri.toLocaleTimeString(s);const t=Kr(s);t&&e.startsWith(t)&&(e=e.replace(t,""));const i=e.match(/[^\u0660-\u0669\s\d]/);return i&&i[0]}function Hs(s,e){if(!e)return null;const t=e.split(/\s*/).map(cl).join("\\s*"),i=new RegExp(t,"i"),r=s.match(i);if(r)return r[0]}const ri=new Date("August 19, 1975 23:15:30"),ml=new Date("August 19, 1975 05:15:30");function Kr(s){return Gr(s,ri)}function fl(s){return Gr(s,ml)}function pt(s){return parseInt(Yr(s))}function _l(s){return s=Yr(s),s.length===1?s+="00":s.length===2&&(s+="0"),parseInt(s)}function gl(s,e,t,i){let r=s;if(s.endsWith(t)?r=s.replace(" "+t,""):s.endsWith(i)&&(r=s.replace(" "+i,"")),e){let o=e<10?"0":"";o+=e<100?"0":"",o+=e,r+="."+o}else r+=".000";return s.endsWith(t)?r=r+" "+t:s.endsWith(i)&&(r=r+" "+i),r}(function(){const s=function(t){return window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Time Picker")};function e(t,i,r=0){t()?i():setTimeout(()=>e(t,i,200),r)}window.Vaadin.Flow.timepickerConnector={initLazy:t=>s(function(i){i.$connector||(i.$connector={},i.$connector.setLocale=s(function(r){let o;i.value&&i.value!==""&&(o=i.i18n.parseTime(i.value));try{ri.toLocaleTimeString(r)}catch{throw r="en-US",new Error("vaadin-time-picker: The locale "+r+" is not supported, falling back to default locale setting(en-US).")}const l=Kr(r),a=fl(r),n=pl(r),d=function(){return i.step&&i.step<60},h=function(){return i.step&&i.step<1};let u,p;i.i18n={formatTime:s(function(f){if(!f)return;const y=new Date;y.setHours(f.hours),y.setMinutes(f.minutes),y.setSeconds(f.seconds!==void 0?f.seconds:0);let b=y.toLocaleTimeString(r,{hour:"numeric",minute:"numeric",second:d()?"numeric":void 0});return h()&&(b=gl(b,f.milliseconds,a,l)),b}),parseTime:s(function(f){if(f&&f===u&&p)return p;if(!f)return;const y=Hs(f,a),b=Hs(f,l),C=f.replace(y||"","").replace(b||"","").trim(),E=new RegExp("([\\d\\u0660-\\u0669]){1,2}(?:"+n+")?","g");let I=E.exec(C);if(I){I=pt(I[0].replace(n,"")),y!==b&&(I===12&&y&&(I=0),I!==12&&b&&(I+=12));const F=E.exec(C),D=F&&E.exec(C),Jr=/[[\.][\d\u0660-\u0669]{1,3}$/;let re=D&&h()&&Jr.exec(C);return re&&re.index<=D.index&&(re=void 0),p=I!==void 0&&{hours:I,minutes:F?pt(F[0].replace(n,"")):0,seconds:D?pt(D[0].replace(n,"")):0,milliseconds:F&&D&&re?_l(re[0].replace(".","")):0},u=f,p}})},o&&e(()=>i.$,()=>{const f=i.i18n.formatTime(o);i.inputElement.value!==f&&(i.inputElement.value=f,i.$.comboBox.value=f)})}))})(t)}})();window.Vaadin.Flow.virtualListConnector={initLazy:function(s){if(s.$connector)return;const e=20;let t=[0,0];s.$connector={},s.$connector.placeholderItem={__placeholder:!0};const i=function(){const o=[...s.children].filter(h=>"__virtualListIndex"in h).map(h=>h.__virtualListIndex),l=Math.min(...o),a=Math.max(...o);let n=Math.max(0,l-e),d=Math.min(a+e,s.items.length);if(t[0]!=n||t[1]!=d){t=[n,d];const h=1+d-n;s.$server.setRequestedRange(n,h)}},r=function(){s.__requestDebounce=Z.debounce(s.__requestDebounce,q.after(50),i)};requestAnimationFrame(()=>i),s.patchVirtualListRenderer=function(){if(!s.renderer||s.renderer.__virtualListConnectorPatched)return;const o=s.renderer,l=(a,n,d)=>{a.__virtualListIndex=d.index,d.item===void 0?o.call(n,a,n,{...d,item:n.$connector.placeholderItem}):o.call(n,a,n,d),r()};l.__virtualListConnectorPatched=!0,l.__rendererId=o.__rendererId,s.renderer=l},s._createPropertyObserver("renderer","patchVirtualListRenderer",!0),s.patchVirtualListRenderer(),s.items=[],s.$connector.set=function(o,l){s.items.splice(o,l.length,...l),s.items=[...s.items]},s.$connector.clear=function(o,l){const a=Math.min(l,s.items.length-o);s.$connector.set(o,[...Array(a)])},s.$connector.updateData=function(o){const l=o.reduce((a,n)=>(a[n.key]=n,a),{});s.items=s.items.map(a=>a&&(l[a.key]||a))},s.$connector.updateSize=function(o){const l=o-s.items.length;l>0?s.items=[...s.items,...Array(l)]:l<0&&(s.items=s.items.slice(0,o))},s.$connector.setPlaceholderItem=function(o={}){o.__placeholder=!0,s.$connector.placeholderItem=o}}};const Tl=function(s,e=!1){const t=document.createElement("template");t.innerHTML=s,document.head[e?"insertBefore":"appendChild"](t.content,document.head.firstChild)};export{Tl as addCssBlock};
