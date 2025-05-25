import{d as a,f as O,I as j,e as y}from"./api.esm-D4tNrOrE.js";import{b as S,C as h,c as w}from"./ripple.esm-CMetN8rU.js";function s(t){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(t)}function E(t,e){if(s(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e);if(s(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function x(t){var e=E(t,"string");return s(e)=="symbol"?e:e+""}function p(t,e,r){return(e=x(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var N={value:"p-tag-value",icon:"p-tag-icon",root:function(e){var r=e.props;return y("p-tag p-component",p(p({},"p-tag-".concat(r.severity),r.severity!==null),"p-tag-rounded",r.rounded))}},T=`
@layer primereact {
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    
    .p-tag-icon,
    .p-tag-value,
    .p-tag-icon.pi {
        line-height: 1.5;
    }
    
    .p-tag.p-tag-rounded {
        border-radius: 10rem;
    }
}
`,l=h.extend({defaultProps:{__TYPE:"Tag",value:null,severity:null,rounded:!1,icon:null,style:null,className:null,children:void 0},css:{classes:N,styles:T}});function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,n)}return r}function D(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?m(Object(r),!0).forEach(function(n){p(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}var _=a.forwardRef(function(t,e){var r=S(),n=a.useContext(O),o=l.getProps(t,n),i=l.setMetaData({props:o}),c=i.ptm,u=i.cx,g=i.isUnstyled;w(l.css.styles,g,{name:"tag"});var f=a.useRef(null),v=r({className:u("icon")},c("icon")),b=j.getJSXIcon(o.icon,D({},v),{props:o});a.useImperativeHandle(e,function(){return{props:o,getElement:function(){return f.current}}});var d=r({ref:f,className:y(o.className,u("root")),style:o.style},l.getOtherProps(o),c("root")),P=r({className:u("value")},c("value"));return a.createElement("span",d,b,a.createElement("span",P,o.value),a.createElement("span",null,o.children))});_.displayName="Tag";export{_ as T};
