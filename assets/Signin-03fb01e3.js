import{D as x,w as e,u as i,i as n,r as l,o as m,j as s,L as j}from"./index-0e8f3c6f.js";import{y as r,a as f,b,F as N}from"./yupFormSchemas-99bc6c52.js";import{I as c}from"./InputFormItem-4f16c4d4.js";import{B as v}from"./ButtonIcon-5e7d8a06.js";import{$ as S}from"./styled-components.browser.esm-8b345603.js";import{u as w}from"./useDispatch-b139ab9d.js";import"./FormErrors-c0ebe89e.js";const y=S`
  body {
    background-image: none !important;
  }
`,E=x().shape({email:r.string(e("user.fields.username"),{required:!0}),password:r.string(e("user.fields.password"),{required:!0}),rememberMe:r.boolean(e("user.fields.rememberMe"))});function q(){const a=w(),t=i(n.selectLoading),[u]=l.useState({email:"",password:"",rememberMe:!0});l.useEffect(()=>{a(m.doClearErrorMessage())},[a]);const o=f({resolver:b.yupResolver(E),mode:"onSubmit",defaultValues:u}),d=i(n.selectErrorMessage),h=({email:p,password:g,rememberMe:_})=>{a(m.doSigninWithEmailAndPassword(p,g,_))};return s.jsxs(s.Fragment,{children:[s.jsx(y,{}),s.jsxs("div",{className:"auth__page",children:[s.jsx("img",{src:"https://central.lightcinemas.co.uk/pictures/headers/~EDXo9mXn/Family_shot_cinema_0771.jpg",alt:""}),s.jsxs("div",{className:"auth__header",children:[s.jsx("img",{src:"/images/Login/logo.svg",alt:"",className:"non-scrolled-logo",width:"180"}),s.jsx("h1",{className:"auth__title",children:" Sign In!"})]}),s.jsx(N,{...o,children:s.jsxs("form",{onSubmit:o.handleSubmit(h),children:[s.jsxs("div",{className:"auth__form",children:[s.jsx("div",{className:"form__authgroup",children:s.jsx(c,{type:"text",name:"email",placeholder:e("user.fields.username"),className:"auth__input",externalErrorMessage:d})}),s.jsx("div",{className:"form__authgroup",children:s.jsx(c,{type:"text",name:"password",placeholder:e("user.fields.password"),className:"auth__input"})})]}),s.jsxs("div",{className:"auth__bottom",children:[s.jsxs("button",{className:"auth__button",disabled:t,type:"submit",children:[s.jsx(v,{loading:t}),s.jsx("span",{children:"Login"})]}),s.jsxs(j,{to:"/auth/signup",className:"remove__ligne",children:[s.jsx("span",{className:"auth__link",children:"Don't have an account?"}),s.jsx("label",{htmlFor:"",className:"register__now",children:"Register Now"})]})]})]})})]})]})}export{q as default};
