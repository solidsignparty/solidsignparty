(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1233:function(A,e,s){"use strict";s.d(e,{Z:function(){return B}});var t=s(3366),i=s(7462),n=s(7294),r=s(6010),a=s(9766),o=s(4780),l=s(4867),c=s(3264),h=s(9628),g=s(9707),d=s(6500),x=s(5408),z=s(8700),O=s(5893);let u=["component","direction","spacing","divider","children","className","useFlexGap"],E=(0,d.Z)(),D=(0,c.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(A,e)=>e.root});function j(A){return(0,h.Z)({props:A,name:"MuiStack",defaultTheme:E})}let f=A=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[A],w=({ownerState:A,theme:e})=>{let s=(0,i.Z)({display:"flex",flexDirection:"column"},(0,x.k9)({theme:e},(0,x.P$)({values:A.direction,breakpoints:e.breakpoints.values}),A=>({flexDirection:A})));if(A.spacing){let t=(0,z.hB)(e),i=Object.keys(e.breakpoints.values).reduce((e,s)=>(("object"==typeof A.spacing&&null!=A.spacing[s]||"object"==typeof A.direction&&null!=A.direction[s])&&(e[s]=!0),e),{}),n=(0,x.P$)({values:A.direction,base:i}),r=(0,x.P$)({values:A.spacing,base:i});"object"==typeof n&&Object.keys(n).forEach((A,e,s)=>{let t=n[A];if(!t){let t=e>0?n[s[e-1]]:"column";n[A]=t}}),s=(0,a.Z)(s,(0,x.k9)({theme:e},r,(e,s)=>A.useFlexGap?{gap:(0,z.NA)(t,e)}:{"& > :not(style) ~ :not(style)":{margin:0,[`margin${f(s?n[s]:A.direction)}`]:(0,z.NA)(t,e)}}))}return(0,x.dt)(e.breakpoints,s)};var m=s(948),p=s(1657);let Q=function(A={}){let{createStyledComponent:e=D,useThemeProps:s=j,componentName:a="MuiStack"}=A,c=()=>(0,o.Z)({root:["root"]},A=>(0,l.Z)(a,A),{}),h=e(w),d=n.forwardRef(function(A,e){let a=s(A),o=(0,g.Z)(a),{component:l="div",direction:d="column",spacing:x=0,divider:z,children:E,className:D,useFlexGap:j=!1}=o,f=(0,t.Z)(o,u),w=c();return(0,O.jsx)(h,(0,i.Z)({as:l,ownerState:{direction:d,spacing:x,useFlexGap:j},ref:e,className:(0,r.Z)(w.root,D)},f,{children:z?function(A,e){let s=n.Children.toArray(A).filter(Boolean);return s.reduce((A,t,i)=>(A.push(t),i<s.length-1&&A.push(n.cloneElement(e,{key:`separator-${i}`})),A),[])}(E,z):E}))});return d}({createStyledComponent:(0,m.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(A,e)=>e.root}),useThemeProps:A=>(0,p.Z)({props:A,name:"MuiStack"})});var B=Q},5557:function(A,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(1864)}])},8538:function(A,e,s){"use strict";s.d(e,{Z:function(){return i}});var t=s(5893),i=A=>{let{...e}=A;return(0,t.jsx)("img",{src:"/_next/static/media/logo.7b36faa9.png",...e})}},6846:function(A,e,s){"use strict";s.d(e,{Z:function(){return B}});var t=s(5893),i=s(7294),n=s(5582),r=s(9008),a=s.n(r),o=()=>(0,t.jsxs)(a(),{children:[(0,t.jsx)("link",{rel:"icon",href:"/_next/static/media/favicon.908b5de3.ico"}),(0,t.jsx)("title",{children:"SOLID SIGN"})]}),l=s(2293),c=s(155),h=s(5861),g=s(3321),d=s(7357),x=s(3946),z=s(326),O=s(1870),u=s(8462),E=s(7212),D=s(9953),j=s(8619),f=s(4020),w=s(5128),m=s(8538);let p=[{label:"СОБЫТИЯ",href:"/"},{label:"АРТИСТЫ",href:"/artists"}];var Q=()=>{let[A,e]=i.useState(!1),s=s=>{("keydown"!==s.type||"Tab"!==s.key&&"Shift"!==s.key)&&e(!A)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.Z,{component:"nav",sx:{borderBottom:1,borderColor:"#333"},children:(0,t.jsx)(n.Z,{maxWidth:"lg",children:(0,t.jsxs)(c.Z,{disableGutters:!0,children:[(0,t.jsx)("a",{href:"/",children:(0,t.jsx)(m.Z,{height:"24"})}),(0,t.jsx)(h.Z,{className:"solid-sign",noWrap:!0,component:"a",href:"/",color:"white",sx:{pl:1,flexGrow:1,textDecoration:"none"},children:"SOLID SIGN"}),(0,t.jsx)(x.Z,{sx:{p:"7px"},href:"https://vk.com/solidsign",target:"_blank",children:(0,t.jsx)("img",{height:26,width:26,src:"/_next/static/media/vk_logo.e0775aec.svg"})}),(0,t.jsx)(x.Z,{href:"https://instagram.com/solidsignru",target:"_blank",children:(0,t.jsx)(f.Z,{sx:{color:"#fff"}})}),(0,t.jsx)(x.Z,{href:"https://t.me/solidsignru",target:"_blank",children:(0,t.jsx)(w.Z,{sx:{color:"#fff"}})}),(0,t.jsx)(d.Z,{sx:{display:{xs:"none",sm:"block"}},children:p.map(A=>(0,t.jsx)(g.Z,{href:A.href,sx:{color:"#fff"},children:A.label},A.label))}),(0,t.jsx)(d.Z,{sx:{display:{xs:"flex",sm:"none"}},children:(0,t.jsx)(x.Z,{onClick:s,children:(0,t.jsx)(z.Z,{sx:{color:"#fff"}})})})]})})}),(0,t.jsx)(O.ZP,{anchor:"right",open:A,onClose:s,children:(0,t.jsx)(d.Z,{sx:{width:200},children:(0,t.jsx)(u.Z,{children:p.map(A=>(0,t.jsx)(E.ZP,{disablePadding:!0,children:(0,t.jsx)(j.Z,{component:"a",href:A.href,children:(0,t.jsx)(D.Z,{primary:A.label})})},A.label))})})})]})},B=A=>{let{children:e,maxWidth:s}=A;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o,{}),(0,t.jsx)(Q,{}),(0,t.jsx)(n.Z,{maxWidth:s||"sm",sx:{pt:10},children:e})]})}},1864:function(A,e,s){"use strict";s.r(e),s.d(e,{default:function(){return E}});var t=s(5893),i=s(1233),n=s(6846);s(7294);var r=s(7357),a=s(3321),o=s(5861);let l=A=>new Date(A.getFullYear(),A.getMonth(),A.getDate()),c=(A,e)=>l(A)>l(e),h=A=>"".concat(A.getDate().toString().padStart(2,"0"),".").concat((A.getMonth()+1).toString().padStart(2,"0"),".").concat(A.getFullYear());var g=A=>{let{date:e,img:s,href:n,...l}=A,g=!c(new Date,e);return(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(o.Z,{color:"white",children:h(e)}),(0,t.jsx)(o.Z,{color:"gray",children:g?"Следующее мероприятие":"Мероприятие состоялось"}),(0,t.jsx)(i.Z,{alignItems:"center",sx:{pt:2},children:(0,t.jsx)("img",{style:{maxWidth:"100%",...l},src:s.src})}),g&&n&&(0,t.jsx)(i.Z,{orient:"row",alignItems:"center",sx:{pt:2},children:(0,t.jsx)(a.Z,{variant:"contained",component:"a",target:"_blank",href:n,sx:{width:200},color:"button",children:"Купить билет"})})]})},d={src:"/_next/static/media/solid-sign-5.8fd6aeb6.jpg",height:1600,width:1146,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAcEAACAgIDAAAAAAAAAAAAAAAAAQIDERIEQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBf/EABcRAQEBAQAAAAAAAAAAAAAAAAEAAiH/2gAMAwEAAhEDEQA/AJuymMqWqeVDC02TXeH4ACQaTkd//9k=",blurWidth:6,blurHeight:8},x={src:"/_next/static/media/solid-sign-4.3aa6be00.jpg",height:788,width:788,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAcEAACAwADAQAAAAAAAAAAAAABAgADEQQFBtH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AoOI3nesYNx77ema12rZbbDWzqpwHM0gkHD9iIgf/2Q==",blurWidth:8,blurHeight:8},z={src:"/_next/static/media/solid-sign-3.c1aa9ab9.jpg",height:1182,width:1182,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAdEAABBAMBAQAAAAAAAAAAAAACAAEDBAUhMRES/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJWXnxUNISo2o8vOWiCtA8YgDcd2+d+8REQf/9k=",blurWidth:8,blurHeight:8},O={src:"/_next/static/media/solid-sign-2.38aff7ff.jpg",height:1180,width:1180,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAcEAACAgIDAAAAAAAAAAAAAAABAgAEAxEGEjH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQAREv/aAAwDAQACEQMRAD8AjNy5Ll00cWJ2UMzt1fRGj5ERBXLRFDRbP//Z",blurWidth:8,blurHeight:8},u={src:"/_next/static/media/solid-sign-1.0bef310c.jpg",height:1235,width:1280,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAL/xAAfEAABAwQDAQAAAAAAAAAAAAACAAMRAQQFIRIxYcH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AjC3OWsszSrLr5ADECzogjnv7XuZ8REQf/9k=",blurWidth:8,blurHeight:8},E=()=>(0,t.jsx)(n.Z,{children:(0,t.jsxs)(i.Z,{direction:"column",justifyContent:"space-around",spacing:5,children:[(0,t.jsx)(g,{date:new Date("2023-06-30"),img:d,href:"https://nabchelny.qtickets.events/75912-solid-sign-special-2"}),(0,t.jsx)(g,{date:new Date("2023-05-26"),img:x}),(0,t.jsx)(g,{date:new Date("2023-04-28"),img:z,objectPosition:"-1px -1px"}),(0,t.jsx)(g,{date:new Date("2022-09-16"),img:O}),(0,t.jsx)(g,{date:new Date("2022-02-11"),img:u})]})})}},function(A){A.O(0,[673,187,774,888,179],function(){return A(A.s=5557)}),_N_E=A.O()}]);