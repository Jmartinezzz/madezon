import{d as a,U as k,f as Te,Z as A,i as U,O as L,e as F,I as ne,g as _e,D as re,j as oe}from"./api.esm-D4tNrOrE.js";import{b as le,C as Pe,c as Oe,d as Me,a as je,m as Re,R as ke}from"./ripple.esm-CMetN8rU.js";import{C as Ae}from"./csstransition.esm-C3XlnRuv.js";import{P as De}from"./iconbase.esm-BeFBIa8L.js";import{C as Le,T as Ue,E as Fe,I as Ve}from"./index.esm-9_mTZfcn.js";import{T as He}from"./index.esm-DEuLdZO6.js";import{_ as $e,a as Be,b as Ze,T as ae}from"./CSSTransition-Cptn3fpN.js";function Xe(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Q(e,n){var t=function(s){return n&&a.isValidElement(s)?n(s):s},o=Object.create(null);return e&&a.Children.map(e,function(r){return r}).forEach(function(r){o[r.key]=t(r)}),o}function We(e,n){e=e||{},n=n||{};function t(u){return u in n?n[u]:e[u]}var o=Object.create(null),r=[];for(var s in e)s in n?r.length&&(o[s]=r,r=[]):r.push(s);var i,l={};for(var c in n){if(o[c])for(i=0;i<o[c].length;i++){var f=o[c][i];l[o[c][i]]=t(f)}l[c]=t(c)}for(i=0;i<r.length;i++)l[r[i]]=t(r[i]);return l}function I(e,n,t){return t[n]!=null?t[n]:e.props[n]}function ze(e,n){return Q(e.children,function(t){return a.cloneElement(t,{onExited:n.bind(null,t),in:!0,appear:I(t,"appear",e),enter:I(t,"enter",e),exit:I(t,"exit",e)})})}function Je(e,n,t){var o=Q(e.children),r=We(n,o);return Object.keys(r).forEach(function(s){var i=r[s];if(a.isValidElement(i)){var l=s in n,c=s in o,f=n[s],u=a.isValidElement(f)&&!f.props.in;c&&(!l||u)?r[s]=a.cloneElement(i,{onExited:t.bind(null,i),in:!0,exit:I(i,"exit",e),enter:I(i,"enter",e)}):!c&&l&&!u?r[s]=a.cloneElement(i,{in:!1}):c&&l&&a.isValidElement(f)&&(r[s]=a.cloneElement(i,{onExited:t.bind(null,i),in:f.props.in,exit:I(i,"exit",e),enter:I(i,"enter",e)}))}}),r}var Ge=Object.values||function(e){return Object.keys(e).map(function(n){return e[n]})},Ye={component:"div",childFactory:function(n){return n}},K=function(e){$e(n,e);function n(o,r){var s;s=e.call(this,o,r)||this;var i=s.handleExited.bind(Xe(s));return s.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},s}var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(r,s){var i=s.children,l=s.handleExited,c=s.firstRender;return{children:c?ze(r,l):Je(r,i,l),firstRender:!1}},t.handleExited=function(r,s){var i=Q(this.props.children);r.key in i||(r.props.onExited&&r.props.onExited(s),this.mounted&&this.setState(function(l){var c=Be({},l.children);return delete c[r.key],{children:c}}))},t.render=function(){var r=this.props,s=r.component,i=r.childFactory,l=Ze(r,["component","childFactory"]),c=this.state.contextValue,f=Ge(this.state.children).map(i);return delete l.appear,delete l.enter,delete l.exit,s===null?k.createElement(ae.Provider,{value:c},f):k.createElement(ae.Provider,{value:c},k.createElement(s,l,f))},n}(k.Component);K.propTypes={};K.defaultProps=Ye;function G(){return G=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},G.apply(null,arguments)}function Y(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,o=Array(n);t<n;t++)o[t]=e[t];return o}function qe(e){if(Array.isArray(e))return Y(e)}function Qe(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ce(e,n){if(e){if(typeof e=="string")return Y(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Y(e,n):void 0}}function Ke(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(e){return qe(e)||Qe(e)||ce(e)||Ke()}function et(e){if(Array.isArray(e))return e}function tt(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var o,r,s,i,l=[],c=!0,f=!1;try{if(s=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(o=s.call(t)).done)&&(l.push(o.value),l.length!==n);c=!0);}catch(u){f=!0,r=u}finally{try{if(!c&&t.return!=null&&(i=t.return(),Object(i)!==i))return}finally{if(f)throw r}}return l}}function nt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(e,n){return et(e)||tt(e,n)||ce(e,n)||nt()}function _(e){"@babel/helpers - typeof";return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_(e)}function rt(e,n){if(_(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var o=t.call(e,n);if(_(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function ot(e){var n=rt(e,"string");return _(n)=="symbol"?n:n+""}function ue(e,n,t){return(n=ot(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var at=`
@layer primereact {
    .p-toast {
        width: calc(100% - var(--toast-indent, 0px));
        max-width: 25rem;
    }
    
    .p-toast-message-icon {
        flex-shrink: 0;
    }
    
    .p-toast-message-content {
        display: flex;
        align-items: flex-start;
    }
    
    .p-toast-message-text {
        flex: 1 1 auto;
    }
    
    .p-toast-summary {
        overflow-wrap: anywhere;
    }
    
    .p-toast-detail {
        overflow-wrap: anywhere;
    }
    
    .p-toast-top-center {
        transform: translateX(-50%);
    }
    
    .p-toast-bottom-center {
        transform: translateX(-50%);
    }
    
    .p-toast-center {
        min-width: 20vw;
        transform: translate(-50%, -50%);
    }
    
    .p-toast-icon-close {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }
    
    .p-toast-icon-close.p-link {
        cursor: pointer;
    }
    
    /* Animations */
    .p-toast-message-enter {
        opacity: 0;
        transform: translateY(50%);
    }
    
    .p-toast-message-enter-active {
        opacity: 1;
        transform: translateY(0);
        transition: transform 0.3s, opacity 0.3s;
    }
    
    .p-toast-message-enter-done {
        transform: none;
    }
    
    .p-toast-message-exit {
        opacity: 1;
        max-height: 1000px;
    }
    
    .p-toast .p-toast-message.p-toast-message-exit-active {
        opacity: 0;
        max-height: 0;
        margin-bottom: 0;
        overflow: hidden;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
    }
}
`,st={root:function(n){var t=n.props,o=n.context;return F("p-toast p-component p-toast-"+t.position,t.className,{"p-input-filled":o&&o.inputStyle==="filled"||U.inputStyle==="filled","p-ripple-disabled":o&&o.ripple===!1||U.ripple===!1})},message:{message:function(n){var t=n.severity;return F("p-toast-message",ue({},"p-toast-message-".concat(t),t))},content:"p-toast-message-content",buttonicon:"p-toast-icon-close-icon",closeButton:"p-toast-icon-close p-link",icon:"p-toast-message-icon",text:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail"},transition:"p-toast-message"},it={root:function(n){var t=n.props;return{position:"fixed",top:t.position==="top-right"||t.position==="top-left"||t.position==="top-center"?"20px":t.position==="center"?"50%":null,right:(t.position==="top-right"||t.position==="bottom-right")&&"20px",bottom:(t.position==="bottom-left"||t.position==="bottom-right"||t.position==="bottom-center")&&"20px",left:t.position==="top-left"||t.position==="bottom-left"?"20px":t.position==="center"||t.position==="top-center"||t.position==="bottom-center"?"50%":null}}},D=Pe.extend({defaultProps:{__TYPE:"Toast",id:null,className:null,content:null,style:null,baseZIndex:0,position:"top-right",transitionOptions:null,appendTo:"self",onClick:null,onRemove:null,onShow:null,onHide:null,onMouseEnter:null,onMouseLeave:null,children:void 0},css:{classes:st,styles:at,inlineStyles:it}});function se(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?se(Object(t),!0).forEach(function(o){ue(e,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):se(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})}return e}var me=a.memo(a.forwardRef(function(e,n){var t=le(),o=e.messageInfo,r=e.metaData,s=e.ptCallbacks,i=s.ptm,l=s.ptmo,c=s.cx,f=e.index,u=o.message,b=u.severity,V=u.content,P=u.summary,O=u.detail,H=u.closable,M=u.life,T=u.sticky,$=u.className,B=u.style,Z=u.contentClassName,X=u.contentStyle,y=u.icon,m=u.closeIcon,p=u.pt,g={index:f},v=d(d({},r),g),x=a.useState(!1),w=q(x,2),j=w[0],R=w[1],de=Re(function(){W()},M||3e3,!T&&!j),ve=q(de,1),ee=ve[0],C=function(h,E){return i(h,d({hostName:e.hostName},E))},W=function(){ee(),e.onClose&&e.onClose(o)},te=function(h){e.onClick&&!(re.hasClass(h.target,"p-toast-icon-close")||re.hasClass(h.target,"p-toast-icon-close-icon"))&&e.onClick(o.message)},ge=function(h){e.onMouseEnter&&e.onMouseEnter(h),!h.defaultPrevented&&(T||(ee(),R(!0)))},he=function(h){e.onMouseLeave&&e.onMouseLeave(h),!h.defaultPrevented&&(T||R(!1))},ye=function(){var h=t({className:c("message.buttonicon")},C("buttonicon",v),l(p,"buttonicon",d(d({},g),{},{hostName:e.hostName}))),E=m||a.createElement(He,h),S=ne.getJSXIcon(E,d({},h),{props:e}),z=t({type:"button",className:c("message.closeButton"),onClick:W,"aria-label":e.ariaCloseLabel||_e("close")},C("closeButton",v),l(p,"closeButton",d(d({},g),{},{hostName:e.hostName})));return H!==!1?a.createElement("div",null,a.createElement("button",z,S,a.createElement(ke,null))):null},be=function(){if(o){var h=L.getJSXElement(V,{message:o.message,onClick:te,onClose:W}),E=t({className:c("message.icon")},C("icon",v),l(p,"icon",d(d({},g),{},{hostName:e.hostName}))),S=y;if(!y)switch(b){case"info":S=a.createElement(Ve,E);break;case"warn":S=a.createElement(Fe,E);break;case"error":S=a.createElement(Ue,E);break;case"success":S=a.createElement(Le,E);break}var z=ne.getJSXIcon(S,d({},E),{props:e}),Ie=t({className:c("message.text")},C("text",v),l(p,"text",d(d({},g),{},{hostName:e.hostName}))),we=t({className:c("message.summary")},C("summary",v),l(p,"summary",d(d({},g),{},{hostName:e.hostName}))),Ne=t({className:c("message.detail")},C("detail",v),l(p,"detail",d(d({},g),{},{hostName:e.hostName})));return h||a.createElement(a.Fragment,null,z,a.createElement("div",Ie,a.createElement("span",we,P),O&&a.createElement("div",Ne,O)))}return null},Ee=be(),xe=ye(),Ce=t({ref:n,className:F($,c("message.message",{severity:b})),style:B,role:"alert","aria-live":"assertive","aria-atomic":"true",onClick:te,onMouseEnter:ge,onMouseLeave:he},C("message",v),l(p,"root",d(d({},g),{},{hostName:e.hostName}))),Se=t({className:F(Z,c("message.content")),style:X},C("content",v),l(p,"content",d(d({},g),{},{hostName:e.hostName})));return a.createElement("div",Ce,a.createElement("div",Se,Ee,xe))}));me.displayName="ToastMessage";var ie=0,fe=a.memo(a.forwardRef(function(e,n){var t=le(),o=a.useContext(Te),r=D.getProps(e,o),s=a.useState([]),i=q(s,2),l=i[0],c=i[1],f=a.useRef(null),u={props:r,state:{messages:l}},b=D.setMetaData(u);Oe(D.css.styles,b.isUnstyled,{name:"toast"});var V=function(m){m&&c(function(p){return P(p,m,!0)})},P=function(m,p,g){var v;if(Array.isArray(p)){var x=p.reduce(function(j,R){return j.push({_pId:ie++,message:R}),j},[]);g?v=m?[].concat(J(m),J(x)):x:v=x}else{var w={_pId:ie++,message:p};g?v=m?[].concat(J(m),[w]):[w]:v=[w]}return v},O=function(){A.clear(f.current),c([])},H=function(m){c(function(p){return P(p,m,!1)})},M=function(m){var p=L.isNotEmpty(m._pId)?m._pId:m.message||m;c(function(g){return g.filter(function(v){return v._pId!==m._pId&&!L.deepEquals(v.message,p)})}),r.onRemove&&r.onRemove(m.message||p)},T=function(m){M(m)},$=function(){r.onShow&&r.onShow()},B=function(){l.length===1&&A.clear(f.current),r.onHide&&r.onHide()};Me(function(){A.set("toast",f.current,o&&o.autoZIndex||U.autoZIndex,r.baseZIndex||o&&o.zIndex.toast||U.zIndex.toast)},[l,r.baseZIndex]),je(function(){A.clear(f.current)}),a.useImperativeHandle(n,function(){return{props:r,show:V,replace:H,remove:M,clear:O,getElement:function(){return f.current}}});var Z=function(){var m=t({ref:f,id:r.id,className:b.cx("root",{context:o}),style:b.sx("root")},D.getOtherProps(r),b.ptm("root")),p=t({classNames:b.cx("transition"),timeout:{enter:300,exit:300},options:r.transitionOptions,unmountOnExit:!0,onEntered:$,onExited:B},b.ptm("transition"));return a.createElement("div",m,a.createElement(K,null,l&&l.map(function(g,v){var x=a.createRef();return a.createElement(Ae,G({nodeRef:x,key:g._pId},p),e.content?L.getJSXElement(e.content,{message:g.message}):a.createElement(me,{hostName:"Toast",ref:x,messageInfo:g,index:v,onClick:r.onClick,onClose:T,onMouseEnter:r.onMouseEnter,onMouseLeave:r.onMouseLeave,closeIcon:r.closeIcon,ptCallbacks:b,metaData:u}))})))},X=Z();return a.createElement(De,{element:X,appendTo:r.appendTo})}));fe.displayName="Toast";const pe=a.createContext(),vt=({children:e})=>{const n=a.useRef(null),[t,o]=a.useState(null),r=(s,i,l,c=3e3)=>{o({severity:s,summary:i,detail:l,life:c})};return a.useEffect(()=>{t&&n.current&&n.current.show(t)},[t]),oe.jsxs(pe.Provider,{value:{showToast:r},children:[oe.jsx(fe,{ref:n}),e]})},gt=()=>a.useContext(pe);export{vt as T,K as a,gt as u};
