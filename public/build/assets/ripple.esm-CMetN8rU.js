import{p as he,s as we,d as c,f as X,u as B,h as Pe,O as w,D as _,i as U,e as ne}from"./api.esm-D4tNrOrE.js";var Se=we();const on=he(Se);function Oe(n){if(Array.isArray(n))return n}function xe(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,i,u,a,o=[],l=!0,p=!1;try{if(u=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=u.call(t)).done)&&(o.push(r.value),o.length!==e);l=!0);}catch(s){p=!0,i=s}finally{try{if(!l&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(p)throw i}}return o}}function te(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function ve(n,e){if(n){if(typeof n=="string")return te(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?te(n,e):void 0}}function Ee(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A(n,e){return Oe(n)||xe(n,e)||ve(n,e)||Ee()}var q=function(e){var t=c.useRef(null);return c.useEffect(function(){return t.current=e,function(){t.current=null}},[e]),t.current},z=function(e){return c.useEffect(function(){return e},[])},re=function(e){var t=e.target,r=t===void 0?"document":t,i=e.type,u=e.listener,a=e.options,o=e.when,l=o===void 0?!0:o,p=c.useRef(null),s=c.useRef(null),d=q(u),v=q(a),f=function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},m=b.target;w.isNotEmpty(m)&&(h(),(b.when||l)&&(p.current=_.getTargetElement(m))),!s.current&&p.current&&(s.current=function(P){return u&&u(P)},p.current.addEventListener(i,s.current,a))},h=function(){s.current&&(p.current.removeEventListener(i,s.current,a),s.current=null)},g=function(){h(),d=null,v=null},O=c.useCallback(function(){l?p.current=_.getTargetElement(r):(h(),p.current=null)},[r,l]);return c.useEffect(function(){O()},[O]),c.useEffect(function(){var y="".concat(d)!=="".concat(u),b=v!==a,m=s.current;m&&(y||b)?(h(),l&&f()):m||g()},[u,a,l]),z(function(){g()}),[f,h]},un=function(e,t){var r=c.useState(e),i=A(r,2),u=i[0],a=i[1],o=c.useState(e),l=A(o,2),p=l[0],s=l[1],d=c.useRef(!1),v=c.useRef(null),f=function(){return window.clearTimeout(v.current)};return se(function(){d.current=!0}),z(function(){f()}),c.useEffect(function(){d.current&&(f(),v.current=window.setTimeout(function(){s(u)},t))},[u,t]),[u,p,a]},K={},sn=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,r=c.useState(function(){return Pe()}),i=A(r,1),u=i[0],a=c.useState(0),o=A(a,2),l=o[0],p=o[1];return c.useEffect(function(){if(t){K[e]||(K[e]=[]);var s=K[e].push(u);return p(s),function(){delete K[e][s-1];var d=K[e].length-1,v=w.findLastIndex(K[e],function(f){return f!==void 0});v!==d&&K[e].splice(v+1),p(void 0)}}},[e,u,t]),l};function _e(n){if(Array.isArray(n))return te(n)}function Te(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Re(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ce(n){return _e(n)||Te(n)||ve(n)||Re()}var ln={SIDEBAR:100,DIALOG:300,MENU:500,PASSWORD:700,TOOLTIP:1200},ge={escKeyListeners:new Map,onGlobalKeyDown:function(e){if(e.code==="Escape"){var t=ge.escKeyListeners,r=Math.max.apply(Math,ce(t.keys())),i=t.get(r),u=Math.max.apply(Math,ce(i.keys())),a=i.get(u);a(e)}},refreshGlobalKeyDownListener:function(){var e=_.getTargetElement("document");this.escKeyListeners.size>0?e.addEventListener("keydown",this.onGlobalKeyDown):e.removeEventListener("keydown",this.onGlobalKeyDown)},addListener:function(e,t){var r=this,i=A(t,2),u=i[0],a=i[1],o=this.escKeyListeners;o.has(u)||o.set(u,new Map);var l=o.get(u);if(l.has(a))throw new Error("Unexpected: global esc key listener with priority [".concat(u,", ").concat(a,"] already exists."));return l.set(a,e),this.refreshGlobalKeyDownListener(),function(){l.delete(a),l.size===0&&o.delete(u),r.refreshGlobalKeyDownListener()}}},cn=function(e){var t=e.callback,r=e.when,i=e.priority;c.useEffect(function(){if(r)return ge.addListener(t,i)},[t,r,i])},ke=function(){var e=c.useContext(X);return function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return B(r,e==null?void 0:e.ptOptions)}},se=function(e){var t=c.useRef(!1);return c.useEffect(function(){if(!t.current)return t.current=!0,e&&e()},[])},Le=function(e){var t=e.target,r=e.listener,i=e.options,u=e.when,a=u===void 0?!0:u,o=c.useContext(X),l=c.useRef(null),p=c.useRef(null),s=c.useRef([]),d=q(r),v=q(i),f=function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(w.isNotEmpty(b.target)&&(h(),(b.when||a)&&(l.current=_.getTargetElement(b.target))),!p.current&&l.current){var m=o?o.hideOverlaysOnDocumentScrolling:U.hideOverlaysOnDocumentScrolling,P=s.current=_.getScrollableParents(l.current);P.some(function(x){return x===document.body||x===window})||P.push(m?window:document.body),p.current=function(x){return r&&r(x)},P.forEach(function(x){return x.addEventListener("scroll",p.current,i)})}},h=function(){if(p.current){var b=s.current;b.forEach(function(m){return m.removeEventListener("scroll",p.current,i)}),p.current=null}},g=function(){h(),s.current=null,d=null,v=null},O=c.useCallback(function(){a?l.current=_.getTargetElement(t):(h(),l.current=null)},[t,a]);return c.useEffect(function(){O()},[O]),c.useEffect(function(){var y="".concat(d)!=="".concat(r),b=v!==i,m=p.current;m&&(y||b)?(h(),a&&f()):m||g()},[r,i,a]),z(function(){g()}),[f,h]},Ce=function(e){var t=e.listener,r=e.when,i=r===void 0?!0:r;return re({target:"window",type:"resize",listener:t,when:i})},pn=function(e){var t=e.target,r=e.overlay,i=e.listener,u=e.when,a=u===void 0?!0:u,o=e.type,l=o===void 0?"click":o,p=c.useRef(null),s=c.useRef(null),d=re({target:"window",type:l,listener:function(L){i&&i(L,{type:"outside",valid:L.which!==3&&I(L)})},when:a}),v=A(d,2),f=v[0],h=v[1],g=Ce({listener:function(L){i&&i(L,{type:"resize",valid:!_.isTouchDevice()})},when:a}),O=A(g,2),y=O[0],b=O[1],m=re({target:"window",type:"orientationchange",listener:function(L){i&&i(L,{type:"orientationchange",valid:!0})},when:a}),P=A(m,2),x=P[0],k=P[1],D=Le({target:t,listener:function(L){i&&i(L,{type:"scroll",valid:!0})},when:a}),T=A(D,2),E=T[0],j=T[1],I=function(L){return p.current&&!(p.current.isSameNode(L.target)||p.current.contains(L.target)||s.current&&s.current.contains(L.target))},V=function(){f(),y(),x(),E()},M=function(){h(),b(),k(),j()};return c.useEffect(function(){a?(p.current=_.getTargetElement(t),s.current=_.getTargetElement(r)):(M(),p.current=s.current=null)},[t,r,a]),z(function(){M()}),[V,M]},De=0,H=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=c.useState(!1),i=A(r,2),u=i[0],a=i[1],o=c.useRef(null),l=c.useContext(X),p=_.isClient()?window.document:void 0,s=t.document,d=s===void 0?p:s,v=t.manual,f=v===void 0?!1:v,h=t.name,g=h===void 0?"style_".concat(++De):h,O=t.id,y=O===void 0?void 0:O,b=t.media,m=b===void 0?void 0:b,P=function(E){var j=E.querySelector('style[data-primereact-style-id="'.concat(g,'"]'));if(j)return j;if(y!==void 0){var I=d.getElementById(y);if(I)return I}return d.createElement("style")},x=function(E){u&&e!==E&&(o.current.textContent=E)},k=function(){if(!(!d||u)){var E=(l==null?void 0:l.styleContainer)||d.head;o.current=P(E),o.current.isConnected||(o.current.type="text/css",y&&(o.current.id=y),m&&(o.current.media=m),_.addNonce(o.current,l&&l.nonce||U.nonce),E.appendChild(o.current),g&&o.current.setAttribute("data-primereact-style-id",g)),o.current.textContent=e,a(!0)}},D=function(){!d||!o.current||(_.removeInlineStyle(o.current),a(!1))};return c.useEffect(function(){f||k()},[f]),{id:y,name:g,update:x,unload:D,load:k,isLoaded:u}},fn=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,i=c.useRef(null),u=c.useRef(null),a=c.useCallback(function(){return clearTimeout(i.current)},[i.current]);return c.useEffect(function(){u.current=e}),c.useEffect(function(){function o(){u.current()}if(r)return i.current=setTimeout(o,t),a;a()},[t,r]),z(function(){a()}),[a]},ae=function(e,t){var r=c.useRef(!1);return c.useEffect(function(){if(!r.current){r.current=!0;return}return e&&e()},t)};function ie(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function je(n){if(Array.isArray(n))return ie(n)}function Ae(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Ie(n,e){if(n){if(typeof n=="string")return ie(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ie(n,e):void 0}}function $e(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pe(n){return je(n)||Ae(n)||Ie(n)||$e()}function Y(n){"@babel/helpers - typeof";return Y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y(n)}function Ne(n,e){if(Y(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Y(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Me(n){var e=Ne(n,"string");return Y(e)=="symbol"?e:e+""}function oe(n,e,t){return(e=Me(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function fe(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function C(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?fe(Object(t),!0).forEach(function(r){oe(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):fe(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}var Ke=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    pointer-events: none;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: var(--scrollbar-width);
}
`,ze=`
.p-button {
    margin: 0;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    vertical-align: bottom;
    text-align: center;
    overflow: hidden;
    position: relative;
}

.p-button-label {
    flex: 1 1 auto;
}

.p-button-icon-right {
    order: 1;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-only {
    justify-content: center;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
    flex: 0 0 auto;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-group .p-button {
    margin: 0;
}

.p-button-group .p-button:not(:last-child) {
    border-right: 0 none;
}

.p-button-group .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-button-group .p-button:first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-button-group .p-button:last-of-type {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-button-group .p-button:focus {
    position: relative;
    z-index: 1;
}

.p-button-group-single .p-button:first-of-type {
    border-top-right-radius: var(--border-radius) !important;
    border-bottom-right-radius: var(--border-radius) !important;
}

.p-button-group-single .p-button:last-of-type {
    border-top-left-radius: var(--border-radius) !important;
    border-bottom-left-radius: var(--border-radius) !important;
}
`,Ge=`
.p-inputtext {
    margin: 0;
}

.p-fluid .p-inputtext {
    width: 100%;
}

/* InputGroup */
.p-inputgroup {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup-addon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-inputgroup .p-float-label {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-fluid .p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper,
.p-fluid .p-inputgroup .p-input {
    flex: 1 1 auto;
    width: 1%;
}

/* Floating Label */
.p-float-label {
    display: block;
    position: relative;
}

.p-float-label label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    margin-top: -0.5rem;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
}

.p-float-label textarea ~ label,
.p-float-label .p-mention ~ label {
    top: 1rem;
}

.p-float-label input:focus ~ label,
.p-float-label input:-webkit-autofill ~ label,
.p-float-label input.p-filled ~ label,
.p-float-label textarea:focus ~ label,
.p-float-label textarea.p-filled ~ label,
.p-float-label .p-inputwrapper-focus ~ label,
.p-float-label .p-inputwrapper-filled ~ label,
.p-float-label .p-tooltip-target-wrapper ~ label {
    top: -0.75rem;
    font-size: 12px;
}

.p-float-label .p-placeholder,
.p-float-label input::placeholder,
.p-float-label .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-float-label .p-focus .p-placeholder,
.p-float-label input:focus::placeholder,
.p-float-label .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}

.p-input-icon-left,
.p-input-icon-right {
    position: relative;
    display: inline-block;
}

.p-input-icon-left > i,
.p-input-icon-right > i,
.p-input-icon-left > svg,
.p-input-icon-right > svg,
.p-input-icon-left > .p-input-prefix,
.p-input-icon-right > .p-input-suffix {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}

.p-fluid .p-input-icon-left,
.p-fluid .p-input-icon-right {
    display: block;
    width: 100%;
}
`,Fe=`
.p-icon {
    display: inline-block;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

svg.p-icon {
    pointer-events: auto;
}

svg.p-icon g,
.p-disabled svg.p-icon {
    pointer-events: none;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Ue=`
@layer primereact {
    .p-component, .p-component * {
        box-sizing: border-box;
    }

    .p-hidden {
        display: none;
    }

    .p-hidden-space {
        visibility: hidden;
    }

    .p-reset {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        text-decoration: none;
        font-size: 100%;
        list-style: none;
    }

    .p-disabled, .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-component-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-unselectable-text {
        user-select: none;
    }

    .p-scrollbar-measure {
        width: 100px;
        height: 100px;
        overflow: scroll;
        position: absolute;
        top: -9999px;
    }

    @-webkit-keyframes p-fadein {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }
    @keyframes p-fadein {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }

    .p-link {
        text-align: left;
        background-color: transparent;
        margin: 0;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-link:disabled {
        cursor: default;
    }

    /* Non react overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity .1s linear;
    }

    /* React based overlay animations */
    .p-connected-overlay-enter {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-enter-active {
        opacity: 1;
        transform: scaleY(1);
        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-enter-done {
        transform: none;
    }

    .p-connected-overlay-exit {
        opacity: 1;
    }

    .p-connected-overlay-exit-active {
        opacity: 0;
        transition: opacity .1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter {
        max-height: 0;
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        max-height: 1000px;
        transition: max-height 1s ease-in-out;
    }

    .p-toggleable-content-enter-done {
        transform: none;
    }

    .p-toggleable-content-exit {
        max-height: 1000px;
    }

    .p-toggleable-content-exit-active {
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    /* @todo Refactor */
    .p-menu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    `.concat(ze,`
    `).concat(Ge,`
    `).concat(Fe,`
}
`),R={cProps:void 0,cParams:void 0,cName:void 0,defaultProps:{pt:void 0,ptOptions:void 0,unstyled:!1},context:{},globalCSS:void 0,classes:{},styles:"",extend:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.css,r=C(C({},e.defaultProps),R.defaultProps),i={},u=function(s){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return R.context=d,R.cProps=s,w.getMergedProps(s,r)},a=function(s){return w.getDiffProps(s,r)},o=function(){var s,d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;d.hasOwnProperty("pt")&&d.pt!==void 0&&(d=d.pt);var g=v,O=/./g.test(g)&&!!f[g.split(".")[0]],y=O?w.toFlatCase(g.split(".")[1]):w.toFlatCase(g),b=f.hostName&&w.toFlatCase(f.hostName),m=b||f.props&&f.props.__TYPE&&w.toFlatCase(f.props.__TYPE)||"",P=y==="transition",x="data-pc-",k=function(S){return S!=null&&S.props?S.hostName?S.props.__TYPE===S.hostName?S.props:k(S.parent):S.parent:void 0},D=function(S){var Z,ee;return((Z=f.props)===null||Z===void 0?void 0:Z[S])||((ee=k(f))===null||ee===void 0?void 0:ee[S])};R.cParams=f,R.cName=m;var T=D("ptOptions")||R.context.ptOptions||{},E=T.mergeSections,j=E===void 0?!0:E,I=T.mergeProps,V=I===void 0?!1:I,M=function(){var S=N.apply(void 0,arguments);return Array.isArray(S)?{className:ne.apply(void 0,pe(S))}:w.isString(S)?{className:S}:S!=null&&S.hasOwnProperty("className")&&Array.isArray(S.className)?{className:ne.apply(void 0,pe(S.className))}:S},$=h?O?ye(M,g,f):be(M,g,f):void 0,L=O?void 0:Q(J(d,m),M,g,f),G=!P&&C(C({},y==="root"&&oe({},"".concat(x,"name"),f.props&&f.props.__parentMetadata?w.toFlatCase(f.props.__TYPE):m)),{},oe({},"".concat(x,"section"),y));return j||!j&&L?V?B([$,L,Object.keys(G).length?G:{}],{classNameMergeFunction:(s=R.context.ptOptions)===null||s===void 0?void 0:s.classNameMergeFunction}):C(C(C({},$),L),Object.keys(G).length?G:{}):C(C({},L),Object.keys(G).length?G:{})},l=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=s.props,v=s.state,f=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return o((d||{}).pt,m,C(C({},s),P))},h=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",x=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return o(m,P,x,!1)},g=function(){return R.context.unstyled||U.unstyled||d.unstyled},O=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return g()?void 0:N(t&&t.classes,m,C({props:d,state:v},P))},y=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},x=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(x){var k,D=N(t&&t.inlineStyles,m,C({props:d,state:v},P)),T=N(i,m,C({props:d,state:v},P));return B([T,D],{classNameMergeFunction:(k=R.context.ptOptions)===null||k===void 0?void 0:k.classNameMergeFunction})}};return{ptm:f,ptmo:h,sx:y,cx:O,isUnstyled:g}};return C(C({getProps:u,getOtherProps:a,setMetaData:l},e),{},{defaultProps:r})}},N=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=String(w.toFlatCase(t)).split("."),u=i.shift(),a=w.isNotEmpty(e)?Object.keys(e).find(function(o){return w.toFlatCase(o)===u}):"";return u?w.isObject(e)?N(w.getItemValue(e[a],r),i.join("."),r):void 0:w.getItemValue(e,r)},J=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,i=e==null?void 0:e._usept,u=function(o){var l,p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=r?r(o):o,d=w.toFlatCase(t);return(l=p?d!==R.cName?s==null?void 0:s[d]:void 0:s==null?void 0:s[d])!==null&&l!==void 0?l:s};return w.isNotEmpty(i)?{_usept:i,originalValue:u(e.originalValue),value:u(e.value)}:u(e,!0)},Q=function(e,t,r,i){var u=function(g){return t(g,r,i)};if(e!=null&&e.hasOwnProperty("_usept")){var a=e._usept||R.context.ptOptions||{},o=a.mergeSections,l=o===void 0?!0:o,p=a.mergeProps,s=p===void 0?!1:p,d=a.classNameMergeFunction,v=u(e.originalValue),f=u(e.value);return v===void 0&&f===void 0?void 0:w.isString(f)?f:w.isString(v)?v:l||!l&&f?s?B([v,f],{classNameMergeFunction:d}):C(C({},v),f):f}return u(e)},Ve=function(){return J(R.context.pt||U.pt,void 0,function(e){return w.getItemValue(e,R.cParams)})},He=function(){return J(R.context.pt||U.pt,void 0,function(e){return N(e,R.cName,R.cParams)||w.getItemValue(e,R.cParams)})},ye=function(e,t,r){return Q(Ve(),e,t,r)},be=function(e,t,r){return Q(He(),e,t,r)},dn=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){},r=arguments.length>2?arguments[2]:void 0,i=r.name,u=r.styled,a=u===void 0?!1:u,o=r.hostName,l=o===void 0?"":o,p=ye(N,"global.css",R.cParams),s=w.toFlatCase(i),d=H(Ke,{name:"base",manual:!0}),v=d.load,f=H(Ue,{name:"common",manual:!0}),h=f.load,g=H(p,{name:"global",manual:!0}),O=g.load,y=H(e,{name:i,manual:!0}),b=y.load,m=function(x){if(!l){var k=Q(J((R.cProps||{}).pt,s),N,"hooks.".concat(x)),D=be(N,"hooks.".concat(x));k==null||k(),D==null||D()}};m("useMountEffect"),se(function(){v(),O(),t()||(h(),a||b())}),ae(function(){m("useUpdateEffect")}),z(function(){m("useUnmountEffect")})};function ue(){return ue=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},ue.apply(null,arguments)}function W(n){"@babel/helpers - typeof";return W=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W(n)}function Ye(n,e){if(W(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(W(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function We(n){var e=Ye(n,"string");return W(e)=="symbol"?e:e+""}function Be(n,e,t){return(e=We(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function qe(n){if(Array.isArray(n))return n}function Xe(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,i,u,a,o=[],l=!0,p=!1;try{if(u=(t=t.call(n)).next,e!==0)for(;!(l=(r=u.call(t)).done)&&(o.push(r.value),o.length!==e);l=!0);}catch(s){p=!0,i=s}finally{try{if(!l&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(p)throw i}}return o}}function de(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function Je(n,e){if(n){if(typeof n=="string")return de(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?de(n,e):void 0}}function Qe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ze(n,e){return qe(n)||Xe(n,e)||Je(n,e)||Qe()}var en=`
@layer primereact {
    .p-ripple {
        overflow: hidden;
        position: relative;
    }
    
    .p-ink {
        display: block;
        position: absolute;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 100%;
        transform: scale(0);
    }
    
    .p-ink-active {
        animation: ripple 0.4s linear;
    }
    
    .p-ripple-disabled .p-ink {
        display: none;
    }
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}

`,nn={root:"p-ink"},F=R.extend({defaultProps:{__TYPE:"Ripple",children:void 0},css:{styles:en,classes:nn},getProps:function(e){return w.getMergedProps(e,F.defaultProps)},getOtherProps:function(e){return w.getDiffProps(e,F.defaultProps)}});function me(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function tn(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?me(Object(t),!0).forEach(function(r){Be(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):me(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}var rn=c.memo(c.forwardRef(function(n,e){var t=c.useState(!1),r=Ze(t,2),i=r[0],u=r[1],a=c.useRef(null),o=c.useRef(null),l=ke(),p=c.useContext(X),s=F.getProps(n,p),d=p&&p.ripple||U.ripple,v={props:s};H(F.css.styles,{name:"ripple",manual:!d});var f=F.setMetaData(tn({},v)),h=f.ptm,g=f.cx,O=function(){return a.current&&a.current.parentElement},y=function(){o.current&&o.current.addEventListener("pointerdown",m)},b=function(){o.current&&o.current.removeEventListener("pointerdown",m)},m=function(E){var j=_.getOffset(o.current),I=E.pageX-j.left+document.body.scrollTop-_.getWidth(a.current)/2,V=E.pageY-j.top+document.body.scrollLeft-_.getHeight(a.current)/2;P(I,V)},P=function(E,j){!a.current||getComputedStyle(a.current,null).display==="none"||(_.removeClass(a.current,"p-ink-active"),k(),a.current.style.top=j+"px",a.current.style.left=E+"px",_.addClass(a.current,"p-ink-active"))},x=function(E){_.removeClass(E.currentTarget,"p-ink-active")},k=function(){if(a.current&&!_.getHeight(a.current)&&!_.getWidth(a.current)){var E=Math.max(_.getOuterWidth(o.current),_.getOuterHeight(o.current));a.current.style.height=E+"px",a.current.style.width=E+"px"}};if(c.useImperativeHandle(e,function(){return{props:s,getInk:function(){return a.current},getTarget:function(){return o.current}}}),se(function(){u(!0)}),ae(function(){i&&a.current&&(o.current=O(),k(),y())},[i]),ae(function(){a.current&&!o.current&&(o.current=O(),k(),y())}),z(function(){a.current&&(o.current=null,b())}),!d)return null;var D=l({"aria-hidden":!0,className:ne(g("root"))},F.getOtherProps(s),h("root"));return c.createElement("span",ue({role:"presentation",ref:a},D,{onAnimationEnd:x}))}));rn.displayName="Ripple";export{R as C,ln as E,rn as R,z as a,ke as b,dn as c,ae as d,se as e,q as f,pn as g,H as h,sn as i,cn as j,Ce as k,un as l,fn as m,on as n,Le as o,Se as r,re as u};
