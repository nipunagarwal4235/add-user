(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={backdrop:"ErrorModal_backdrop__3t4_V",modal:"ErrorModal_modal__2vC1-",header:"ErrorModal_header__s0VPu",content:"ErrorModal_content__3-gKC",actions:"ErrorModal_actions__36qzS"}},,,,,function(e,t,n){e.exports={card:"Card_card__3SLWM"}},function(e,t,n){e.exports={button:"Button_button__2aXJI"}},function(e,t,n){e.exports={input:"AddUser_input__3T5ry"}},function(e,t,n){e.exports={users:"UsersList_users__371P8"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),s=(n(17),n(12)),i=n(2),o=n(8),l=n.n(o),d=n(0),u=function(e){return Object(d.jsx)("div",{className:"".concat(l.a.card," ").concat(e.className),children:e.children})},j=n(9),b=n.n(j),m=function(e){return Object(d.jsx)("button",{className:b.a.button,type:e.type||"button",onClick:e.onClick,children:e.children})},h=n(10),O=n.n(h),x=n(3),p=n.n(x),_=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:p.a.backdrop,onClick:e.onConfirm}),Object(d.jsxs)(u,{className:p.a.modal,children:[Object(d.jsx)("header",{className:p.a.header,children:Object(d.jsx)("h2",{children:e.title})}),Object(d.jsx)("div",{className:p.a.content,children:Object(d.jsx)("p",{children:e.message})}),Object(d.jsx)("footer",{className:p.a.actions,children:Object(d.jsx)(m,{onClick:e.onConfirm,children:"Okay"})})]})]})},f=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(""),o=Object(i.a)(s,2),l=o[0],j=o[1],b=Object(a.useState)(),h=Object(i.a)(b,2),x=h[0],p=h[1];return Object(d.jsxs)(d.Fragment,{children:[x&&Object(d.jsx)(_,{title:x.title,message:x.message,onConfirm:function(){p(null)}}),Object(d.jsx)(u,{className:O.a.input,children:Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),0!==c.trim().length&&0!==l.trim().length?+l<1?p({title:"Invalid Age",message:"Please enter a valid age (Greater than 0)."}):(e.onAddUser(c,l),j(""),r("")):p({title:"Invalid Input",message:"Please enter a valid age and name (non empty values)."})},children:[Object(d.jsx)("label",{htmlFor:"username",children:" Username"}),Object(d.jsx)("input",{id:"username",type:"text",value:c,onChange:function(e){r(e.target.value)}}),Object(d.jsx)("label",{htmlFor:"age",children:"Age (Years)"}),Object(d.jsx)("input",{id:"age",type:"number",value:l,onChange:function(e){j(e.target.value)}}),Object(d.jsx)(m,{type:"submit",children:"Add User"})]})})]})},g=n(11),v=n.n(g),C=function(e){return Object(d.jsx)(u,{className:v.a.users,children:Object(d.jsx)("ul",{children:e.users.map((function(e){return Object(d.jsxs)("li",{children:[e.name," (",e.age," years old)"]},e.id)}))})})};var k=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{onAddUser:function(e,t){c((function(n){return[].concat(Object(s.a)(n),[{name:e,age:t,id:Math.random().toString()}])}))}}),Object(d.jsx)(C,{users:n})]})};r.a.render(Object(d.jsx)(k,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.ae52e147.chunk.js.map