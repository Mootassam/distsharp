import{r as l,j as e}from"./index-0e8f3c6f.js";import{S as i}from"./SubHeader-eccac24b.js";function n(){const[s,a]=l.useState("all");return e.jsxs("div",{children:[e.jsx(i,{title:"Tasks",path:"/profile"}),e.jsx("div",{className:"order__list",children:e.jsxs("div",{className:"list__actions",children:[e.jsx("div",{className:s==="all"?"active__order":"",onClick:()=>a("all"),children:e.jsx("span",{className:"",children:"All"})}),e.jsxs("div",{onClick:()=>a("pending"),className:s==="pending"?"active__order":"",children:[" ",e.jsx("span",{children:"Pending"})]}),e.jsxs("div",{onClick:()=>a("completed"),className:s==="completed"?"active__order":"",children:[" ",e.jsx("span",{children:"Completed"})]}),e.jsxs("div",{onClick:()=>a("canceled"),className:s==="canceled"?"active__order":"",children:[" ",e.jsx("span",{children:"Canceled"})]})]})})]})}export{n as default};
