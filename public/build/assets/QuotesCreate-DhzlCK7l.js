import{r as i,b as g,P as y,C as v,c as N,O as w,e as C,q as F,u as k,S as P,j as e,a as q}from"./CheckoutSuccess-rXEtfuiS.js";import{U as E}from"./UsersLayout-DUptcZ75.js";import{B as L}from"./button.esm-EpnT8914.js";import{I as o}from"./inputtext.esm-Cj1r4lqP.js";import{D as f,I as R}from"./inputtextarea.esm-B6E505Kv.js";import{V as n}from"./ValidationError-DgzGoIk_.js";import"./badge.esm-BdxBdsBv.js";import"./inputnumber.esm-DzUOtBIU.js";import"./overlayservice.esm-CDnNTBN5.js";import"./divider.esm-DkJ9-94e.js";import"./react-redux-JVYI2MZa.js";import"./index.esm-CMnwVqpi.js";import"./index.esm-Ds0sUKhn.js";var _={root:"p-float-label"},S=`
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
}`,h=v.extend({defaultProps:{__TYPE:"FloatLabel",children:void 0},css:{classes:_,styles:S}}),r=i.memo(i.forwardRef(function(m,c){var d=g(),s=i.useContext(y),l=h.getProps(m,s),p=i.useRef(c),t=h.setMetaData({props:l}),x=t.ptm,b=t.cx,j=t.isUnstyled;N(h.css.styles,j,{name:"floatlabel"}),i.useEffect(function(){w.combinedRefs(p,c)},[p,c]);var u=d({ref:p,className:C(b("root"))},h.getOtherProps(l),x("root"));return i.createElement("span",u,l.children)}));r.displayName="FloatLabel";function W({}){var u;const m=(u=F().props)==null?void 0:u.auth.user,{showToast:c}=k(),d=i.useRef(),{data:s,setData:l,post:p,errors:t,processing:x,reset:b}=P({type:null,url:"",name:m.name,phone:"",email:m.email,paying_price:"",weight:"",quantity:"",category:"",image:null,notes:""}),j=a=>{a.preventDefault(),p(route("cotizaciones.store"),{onSuccess:()=>{c("success","Success","Cotización enviada",4e3),b(),d.current.value=null}})};return e.jsxs(E,{children:[e.jsx(q,{title:"cotizaciones"}),e.jsxs("div",{className:"mt-5",children:[e.jsxs("div",{className:"surface-0 text-700 text-center",children:[e.jsx("div",{className:"text-900 font-bold text-4xl mb-3",children:"¡Cotiza tu producto!"}),e.jsx("div",{className:"text-700 text-xl mb-5",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos."})]}),e.jsx("div",{className:"flex justify-content-center mt-5",children:e.jsx("div",{className:"w-12 md:w-6 text-lg",children:e.jsxs("form",{onSubmit:j,className:"mt-3",children:[e.jsxs("section",{className:"mb-5",children:[e.jsxs(r,{children:[e.jsx(f,{id:"type",value:s.type,onChange:a=>l("type",a.value),options:[{name:"Yo lo compraré",value:1},{name:"Necesito que me lo compren",value:2}],optionLabel:"name",placeholder:"Selecciona una opción",className:"w-full border-primary border-2 text-black-alpha-90"}),e.jsx("label",{htmlFor:"type",children:"¿Quién compra el producto?"})]}),e.jsx(n,{message:t.type})]}),e.jsxs("section",{className:"mb-5",children:[e.jsxs(r,{children:[e.jsx(o,{id:"url",className:"w-12 border-primary border-2 text-black-alpha-90 text-black-alpha-90",value:s.url,onChange:a=>l("url",a.target.value)}),e.jsx("label",{htmlFor:"url",children:"Enlace del producto"})]}),e.jsx(n,{message:t.url})]}),s.type==1&&e.jsxs("section",{className:"mb-5",children:[e.jsxs(r,{children:[e.jsx(o,{id:"paying_price",type:"number",step:.01,min:1,className:"w-12 border-primary border-2 text-black-alpha-90 text-black-alpha-90",value:s.paying_price,onChange:a=>l("paying_price",a.target.value)}),e.jsx("label",{htmlFor:"paying_price",children:"Precio pagado"})]}),e.jsx(n,{message:t.paying_price})]}),e.jsxs("section",{className:"mb-5",children:[e.jsxs(r,{children:[e.jsx(o,{id:"weight",type:"number",min:1,step:.01,className:"w-12 border-primary border-2 text-black-alpha-90",value:s.weight,onChange:a=>l("weight",a.target.value)}),e.jsx("label",{htmlFor:"weight",children:"Peso aproximado (si se conoce)"})]}),e.jsx(n,{message:t.weight})]}),e.jsxs("section",{className:"mb-5",children:[e.jsxs(r,{children:[e.jsx(o,{type:"number",min:0,id:"quantity",className:"w-12 border-primary border-2 text-black-alpha-90",value:s.quantity,onChange:a=>l("quantity",a.target.value)}),e.jsx("label",{htmlFor:"quantity",children:"Cantidad"})]}),e.jsx(n,{message:t.quantity})]}),e.jsxs("section",{className:"mb-5",children:[e.jsxs(r,{children:[e.jsx(f,{id:"category",value:s.category,onChange:a=>l("category",a.value),options:[{name:"Electrónica",value:"electronica"},{name:"Ropa",value:"ropa"},{name:"Accesorios",value:"accesorios"},{name:"Otros",value:"otros"}],optionLabel:"name",className:"w-full border-primary border-2 text-black-alpha-90"}),e.jsx("label",{htmlFor:"category",children:"Categoría del producto"})]}),e.jsx(n,{message:t.category})]}),e.jsxs("section",{className:"mb-5",children:[e.jsx("label",{className:"text-700",htmlFor:"name",children:"Imagen del producto (opcional):"}),e.jsx("input",{ref:d,type:"file",onChange:a=>l("image",a.target.files[0]),className:"w-12 border-primary border-2 text-black-alpha-90 py-2 px-2"})]}),e.jsx("section",{className:"mb-5",children:e.jsxs(r,{children:[e.jsx(R,{id:"notes",value:s.notes,onChange:a=>l("notes",a.target.value),className:"w-12 border-primary border-2 text-black-alpha-90",rows:5,cols:30}),e.jsx("label",{htmlFor:"name",children:"Notas Adicionales"})]})}),e.jsxs("section",{className:"mb-5",children:[e.jsxs(r,{children:[e.jsx(o,{id:"name",className:"w-12 border-primary border-2 text-black-alpha-90",value:s.name,onChange:a=>l("name",a.target.value)}),e.jsx("label",{htmlFor:"name",children:"Nombre"})]}),e.jsx(n,{message:t.name})]}),e.jsxs("section",{className:"mb-5",children:[e.jsxs(r,{children:[e.jsx(o,{id:"phone",className:"w-12 border-primary border-2 text-black-alpha-90",value:s.phone,onChange:a=>l("phone",a.target.value)}),e.jsx("label",{htmlFor:"phone",children:"Teléfono"})]}),e.jsx(n,{message:t.phone})]}),e.jsxs("section",{className:"mb-5",children:[e.jsxs(r,{children:[e.jsx(o,{id:"email",className:"w-12 border-primary border-2 text-black-alpha-90",value:s.email,onChange:a=>l("email",a.target.value)}),e.jsx("label",{htmlFor:"email",children:"Correo Electrónico"})]}),e.jsx(n,{message:t.email})]}),e.jsxs("span",{className:"text-600 text-base",children:["También nos puedes consultar sobre tu producto en",e.jsx("a",{className:"no-underline",href:"https://api.whatsapp.com/send?phone=+50378676968&text=Hola, me gustaría hacer una cotización",children:" WhatsApp"})]}),e.jsx("section",{className:"flex justify-content-end mt-3",children:e.jsx(L,{label:"Cotizar",raised:!0,processing:x})})]})})})]})]})}export{W as default};
