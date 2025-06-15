import{r as c,b as y,P as v,C as N,c as w,O as C,e as F,q as k,u as P,S as _,j as e,a as z}from"./CheckoutSuccess-UH_ZWn28.js";import{U as E}from"./UsersLayout-CYTdijSH.js";import{B as R}from"./button.esm-X_CozGHS.js";import{I as i}from"./inputtext.esm-Dq8iMv35.js";import{D as g,I as S}from"./inputtextarea.esm-BUeJOtSq.js";import{V as r}from"./ValidationError-d-lQEeBu.js";import"./badge.esm-CxfD50GP.js";import"./inputnumber.esm-DIlhLmkU.js";import"./overlayservice.esm-Dxi-OOc8.js";import"./divider.esm-CX1oQyeT.js";import"./react-redux-BN-UCma9.js";import"./index.esm-LwxWqR-6.js";import"./index.esm-D-P8fXDn.js";var q={root:"p-float-label"},L=`
@layer primereact {
    .p-float-label {
        display: block;
        position: relative;
    }
    
    .p-float-label label {
        position: absolute;
        pointer-events: none;
        top: 50%;
        margin-top: -.5rem;
        transition-property: all;
        transition-timing-function: ease;
        line-height: 1;
    }
    
    .p-float-label:has(textarea) label {
        top: 1rem;
    }
    
    .p-float-label:has(input:focus) label,
    .p-float-label:has(input.p-filled) label,
    .p-float-label:has(input:-webkit-autofill) label,
    .p-float-label:has(textarea:focus) label,
    .p-float-label:has(textarea.p-filled) label,
    .p-float-label:has(.p-inputwrapper-focus) label,
    .p-float-label:has(.p-inputwrapper-filled) label {
        top: -.75rem;
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
}`,h=N.extend({defaultProps:{__TYPE:"FloatLabel",children:void 0},css:{classes:q,styles:L}}),n=c.memo(c.forwardRef(function(o,p){var d=y(),s=c.useContext(v),l=h.getProps(o,s),m=c.useRef(p),t=h.setMetaData({props:l}),x=t.ptm,b=t.cx,j=t.isUnstyled;w(h.css.styles,j,{name:"floatlabel"}),c.useEffect(function(){C.combinedRefs(m,p)},[m,p]);var u=d({ref:m,className:F(b("root"))},h.getOtherProps(l),x("root"));return c.createElement("span",u,l.children)}));n.displayName="FloatLabel";function $({}){var u;const o=(u=k().props)==null?void 0:u.auth.user,{showToast:p}=P(),d=c.useRef(),{data:s,setData:l,post:m,errors:t,processing:x,reset:b}=_({type:null,url:"",name:o==null?void 0:o.name,phone:"",email:o==null?void 0:o.email,paying_price:"",weight:"",quantity:"",category:"",image:null,notes:""}),j=a=>{a.preventDefault(),m(route("cotizaciones.store"),{onSuccess:()=>{p("success","Success","Cotización enviada",4e3),b(),d.current.value=null}})};return e.jsxs(E,{children:[e.jsx(z,{title:"cotizaciones"}),e.jsxs("div",{className:"mt-5",children:[e.jsxs("div",{className:"surface-0 text-700 text-center",children:[e.jsx("div",{className:"text-900 font-bold text-4xl mb-3",children:"¡Cotiza tu producto!"}),e.jsx("div",{className:"text-700 text-xl mb-5",children:"Solicita una cotización personalizada sin compromiso y descubre nuestras mejores ofertas."})]}),e.jsx("div",{className:"flex justify-content-center mt-5",children:e.jsx("div",{className:"w-12 md:w-6 text-lg",children:e.jsxs("form",{onSubmit:j,className:"mt-3",children:[e.jsxs("section",{className:"mb-5",children:[e.jsxs(n,{children:[e.jsx(g,{id:"type",value:s.type,onChange:a=>l("type",a.value),options:[{name:"Yo lo compraré",value:1},{name:"Necesito que me lo compren",value:2}],optionLabel:"name",placeholder:"Selecciona una opción",className:"w-full border-primary border-2 text-black-alpha-90"}),e.jsx("label",{htmlFor:"type",children:"¿Quién compra el producto?"})]}),e.jsx(r,{message:t.type})]}),s.type!=null&&e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"mb-5",children:[e.jsxs(n,{children:[e.jsx(i,{id:"url",className:"w-12 border-primary border-2 text-black-alpha-90 text-black-alpha-90",value:s.url,onChange:a=>l("url",a.target.value)}),e.jsx("label",{htmlFor:"url",children:"Enlace del producto"})]}),e.jsx(r,{message:t.url})]}),s.type==1&&e.jsxs("section",{className:"mb-5",children:[e.jsxs(n,{children:[e.jsx(i,{id:"paying_price",type:"number",step:.01,min:1,className:"w-12 border-primary border-2 text-black-alpha-90 text-black-alpha-90",value:s.paying_price,onChange:a=>l("paying_price",a.target.value),onBlur:a=>{const f=parseFloat(a.target.value);isNaN(f)||l("paying_price",f.toFixed(2))}}),e.jsx("label",{htmlFor:"paying_price",children:"Precio pagado"})]}),e.jsx(r,{message:t.paying_price})]}),e.jsxs("section",{className:"mb-5",children:[e.jsxs(n,{children:[e.jsx(i,{id:"weight",type:"number",min:1,step:.01,className:"w-12 border-primary border-2 text-black-alpha-90",value:s.weight,onChange:a=>l("weight",a.target.value)}),e.jsx("label",{htmlFor:"weight",children:"Peso aproximado (si se conoce)"})]}),e.jsx(r,{message:t.weight})]}),e.jsxs("section",{className:"mb-5",children:[e.jsxs(n,{children:[e.jsx(i,{type:"number",min:0,id:"quantity",className:"w-12 border-primary border-2 text-black-alpha-90",value:s.quantity,onChange:a=>l("quantity",a.target.value)}),e.jsx("label",{htmlFor:"quantity",children:"Cantidad"})]}),e.jsx(r,{message:t.quantity})]}),e.jsxs("section",{className:"mb-5",children:[e.jsxs(n,{children:[e.jsx(g,{id:"category",value:s.category,onChange:a=>l("category",a.value),options:[{name:"Electrónica",value:"electronica"},{name:"Ropa",value:"ropa"},{name:"Accesorios",value:"accesorios"},{name:"Otros",value:"otros"}],optionLabel:"name",className:"w-full border-primary border-2 text-black-alpha-90"}),e.jsx("label",{htmlFor:"category",children:"Categoría del producto"})]}),e.jsx(r,{message:t.category})]}),e.jsxs("section",{className:"mb-5",children:[e.jsx("label",{className:"text-700",htmlFor:"name",children:"Imagen del producto (opcional):"}),e.jsx("input",{ref:d,type:"file",onChange:a=>l("image",a.target.files[0]),className:"w-12 border-primary border-2 text-black-alpha-90 py-2 px-2"})]}),e.jsx("section",{className:"mb-5",children:e.jsxs(n,{children:[e.jsx(S,{id:"notes",value:s.notes,onChange:a=>l("notes",a.target.value),className:"w-12 border-primary border-2 text-black-alpha-90",rows:5,cols:30}),e.jsx("label",{htmlFor:"name",children:"Notas Adicionales"})]})}),e.jsxs("section",{className:"mb-5",children:[e.jsxs(n,{children:[e.jsx(i,{id:"name",className:"w-12 border-primary border-2 text-black-alpha-90",value:s.name,onChange:a=>l("name",a.target.value)}),e.jsx("label",{htmlFor:"name",children:"Nombre"})]}),e.jsx(r,{message:t.name})]}),e.jsxs("section",{className:"mb-5",children:[e.jsxs(n,{children:[e.jsx(i,{id:"phone",className:"w-12 border-primary border-2 text-black-alpha-90",value:s.phone,onChange:a=>l("phone",a.target.value)}),e.jsx("label",{htmlFor:"phone",children:"Teléfono"})]}),e.jsx(r,{message:t.phone})]}),e.jsxs("section",{className:"mb-5",children:[e.jsxs(n,{children:[e.jsx(i,{id:"email",className:"w-12 border-primary border-2 text-black-alpha-90",value:s.email,onChange:a=>l("email",a.target.value)}),e.jsx("label",{htmlFor:"email",children:"Correo Electrónico"})]}),e.jsx(r,{message:t.email})]}),e.jsxs("span",{className:"text-600 text-base",children:["También nos puedes consultar sobre tu producto en",e.jsx("a",{className:"no-underline",href:"https://api.whatsapp.com/send?phone=+50378676968&text=Hola, me gustaría hacer una cotización",children:" WhatsApp"})]}),e.jsx("section",{className:"flex justify-content-end mt-3",children:e.jsx(R,{label:"Cotizar",raised:!0,loading:x})})]})]})})})]})]})}export{$ as default};
