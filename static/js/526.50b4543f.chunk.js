"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[526],{9526:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,o,a,i,p,u,s,x,l,c=t(9434),d=t(2791),b=t(6351),h=t(208),m=t(168),f=t(6444),g=f.ZP.li(r||(r=(0,m.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),v=f.ZP.button(o||(o=(0,m.Z)(["\n  font-weight: 700;\n  padding: 8px;\n  height: 34px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 2, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 2, 0.14), 0px 2px 1px -1px rgba(0, 0, 2, 0.12);\n  background-color: white;\n  border-radius: 15px;\n  border: none;\n  font-size: 16px;\n  cursor: pointer;\n\n    &:hover {\n        background-color: blue: \n    }\n"]))),j=t(184),Z=function(n){var e=n.id,t=n.name,r=n.number,o=(0,c.I0)();return(0,j.jsxs)(g,{children:[(0,j.jsxs)("p",{children:[t,": ",(0,j.jsx)("span",{children:r})]}),(0,j.jsx)(v,{type:"button",onClick:function(){return o((0,h.GK)(e))},children:"Delete"})]})},w=f.ZP.ul(a||(a=(0,m.Z)(["\n  padding: 15px;\n  margin-top: 0;\n  list-style: none;\n"]))),y=function(){var n=(0,c.v9)(b.AD),e=(0,c.v9)(b.KJ),t=function(){if(n){var t=n.toLowerCase();if(0!==e.length)return e.filter((function(n){return n.name.toLowerCase().includes(t)}))}return e}();return(0,j.jsx)(w,{children:t&&t.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,j.jsx)(Z,{id:e,name:t,number:r},e)}))})},k=t(6895),P=t(5984),C=f.ZP.label(i||(i=(0,m.Z)(["\n  position: relative;\n  display: block;\n  margin-bottom: 10px;\n  height: 24px;\n  text-align: start;\n"]))),z=f.ZP.input(p||(p=(0,m.Z)(["\n  position: absolute;\n  left: 165px;\n  border: 1px solid transparent;\n  outline-color: plum;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.2);\n"]))),A=(0,P.x0)(),F=function(){var n=(0,c.v9)(b.AD),e=(0,c.I0)();return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(C,{htmlFor:A,children:["Find contacts by name",(0,j.jsx)(z,{type:"text",name:"filter",value:n,onChange:function(n){return e((0,k.T)(n.target.value))},id:A})]})})},K=t(9439),D=t(1686),E=f.ZP.form(u||(u=(0,m.Z)(["\n  position: relative;\n  padding: 15px;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n"]))),I=f.ZP.label(s||(s=(0,m.Z)(["\n  display: block;\n  text-align: start;\n  margin-bottom: 10px;\n  height: 24px;\n"]))),N=f.ZP.input(x||(x=(0,m.Z)(["\n  position: absolute;\n  width: 240px;\n  left: 80px;\n  border: none;\n  outline-color: plum;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.2);\n"]))),_=f.ZP.button(l||(l=(0,m.Z)(["\n  font-weight: 700;\n  padding: 8px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 2, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 2, 0.14), 0px 2px 1px -1px rgba(0, 0, 2, 0.12);\n  background-color: white;\n  border-radius: 15px;\n  border: none;\n  font-size: 16px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: pink;\n  }\n"]))),J=function(){var n=(0,d.useState)(""),e=(0,K.Z)(n,2),t=e[0],r=e[1],o=(0,d.useState)(""),a=(0,K.Z)(o,2),i=a[0],p=a[1],u=(0,P.x0)(),s=(0,P.x0)(),x=(0,c.v9)(b.KJ),l=(0,c.I0)(),m=function(n){var e=n.target,t=e.name,o=e.value;switch(t){case"name":r(o);break;case"number":p(o);break;default:throw new Error("There isn't such option")}};return(0,j.jsxs)(E,{onSubmit:function(n){n.preventDefault(),x.find((function(n){return n.name===t}))?D.Notify.failure("".concat(t," is already in contacts.")):x.find((function(n){return n.number===i}))?D.Notify.failure("".concat(i," is already in contacts.")):(l((0,h.uK)({name:t,number:i})),r(""),p(""))},children:[(0,j.jsxs)(I,{htmlFor:u,children:["Name",(0,j.jsx)(N,{id:u,type:"text",name:"name",placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:t,onChange:m,required:!0})]}),(0,j.jsxs)(I,{htmlFor:s,children:["Number",(0,j.jsx)(N,{id:s,type:"tel",placeholder:"Enter number",name:"number",value:i,onChange:m})]}),(0,j.jsx)(_,{type:"submit",children:"Add contact"})]})},S=function(){var n=(0,c.I0)(),e=(0,c.v9)(b.xU),t=(0,c.v9)(b.zh),r=(0,c.v9)(b.KJ);return(0,d.useEffect)((function(){n((0,h.yF)())}),[n]),(0,j.jsxs)("div",{children:[(0,j.jsx)("h1",{children:"Your contacts"}),(0,j.jsx)("div",{children:(0,j.jsx)(J,{})}),(0,j.jsx)(F,{}),e&&!t&&(0,j.jsx)("b",{children:"Request in progress..."}),r.length>0&&(0,j.jsx)(y,{})]})}}}]);
//# sourceMappingURL=526.50b4543f.chunk.js.map