(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var o=c(0),n=c(2),s=c.n(n),l=c(12),r=c.n(l),a=c(13),i=c(3),d=c(4),u=c(7),j=c(6),b=function(e){var t=e.todo,c=e.todosArr,n=e.setTodosArr;return Object(o.jsxs)("section",{className:"todo-list",children:[Object(o.jsxs)("div",{className:"todo-clear",children:[Object(o.jsx)("button",{className:t.completed?"clearBtn":"nonClear",onClick:function(){n(c.map((function(e){return e.id===t.id?Object(i.a)(Object(i.a)({},e),{},{completed:!e.completed}):e})))},children:Object(o.jsx)(j.a,{icon:u.b,size:"2x"})}),Object(o.jsx)("input",{className:"todo-input "+(t.completed?"completed":"inCompleted"),type:"text",disabled:!0,value:t.text})]}),Object(o.jsx)("button",{className:"deleteBtn",onClick:function(){n(c.filter((function(e){return e.id!==t.id})))},children:Object(o.jsx)(j.a,{icon:u.c,size:"2x"})})]})},m=function(e){var t=e.todosArr,c=e.setTodosArr,n=e.select,s=e.setSelect,l=e.filteredTodos,r=e.countTodos,a=e.isCompleted,i=function(e){s(e)};return Object(o.jsxs)(o.Fragment,{children:[l.map((function(e){return Object(o.jsx)(b,{todo:e,todosArr:t,setTodosArr:c},e.id)})),Object(o.jsxs)("div",{className:"todoOptions",children:[Object(o.jsxs)("span",{className:"leftTodos",children:[r," left items"]}),Object(o.jsxs)("div",{className:"todosStatus",children:[Object(o.jsx)("button",{className:"All"===n?"selected":"",onClick:function(){return i("All")},children:"All"}),Object(o.jsx)("button",{className:"Active"===n?"selected":"",onClick:function(){return i("Active")},children:"Active"}),Object(o.jsx)("button",{className:"Completed"===n?"selected":"",onClick:function(){return i("Completed")},children:"Completed"})]}),Object(o.jsx)("button",{onClick:function(){c(t.filter((function(e){return!1===e.completed}))),console.log("123")},className:"clearCompleted "+(a?"visible":""),children:"Clear Completed Todos"})]})]})};var f=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],s=t[1],l=Object(n.useState)([]),r=Object(d.a)(l,2),b=r[0],f=r[1],O=Object(n.useState)("All"),p=Object(d.a)(O,2),x=p[0],h=p[1],v=Object(n.useState)([]),N=Object(d.a)(v,2),C=N[0],S=N[1],g=Object(n.useState)(0),A=Object(d.a)(g,2),k=A[0],T=A[1],I=Object(n.useState)(!1),J=Object(d.a)(I,2),y=J[0],B=J[1];Object(n.useEffect)((function(){!function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todos"));f(e)}}(),console.log("getlocal")}),[]),Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(b)),E(),s("")}),[b]),Object(n.useEffect)((function(){z(),w()}),[x,b]);var E=function(){var e=b.find((function(e){return e.completed}));B(!!e)},w=function(){var e=0;b.map((function(t){t.completed||e++})),T(e)},z=function(){switch(x){case"Active":S(b.filter((function(e){return!1===e.completed})));break;case"Completed":S(b.filter((function(e){return!0===e.completed})));break;default:S(b)}};return Object(o.jsxs)("div",{className:"todos_container",children:[Object(o.jsx)("h1",{children:"todos"}),Object(o.jsxs)("div",{className:"todoForm",children:[Object(o.jsx)("span",{className:"clearAllBtn",onClick:function(){var e=b.filter((function(e){return!1===e.completed}));console.log(e),e.length>0?f(b.map((function(e){return!1===e.completed?Object(i.a)(Object(i.a)({},e),{},{completed:!0}):e}))):f(b.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{completed:!1})})))},children:Object(o.jsx)(j.a,{icon:u.a,size:"2x"})}),Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault();var t={id:(Math.random()*(.12-.02)+.02).toFixed(4),text:c,completed:!1};f((function(e){return[].concat(Object(a.a)(e),[t])}))},className:"todos_container",children:Object(o.jsx)("input",{className:"todo--input",placeholder:"What needs to be done?",required:!0,value:c,onChange:function(e){s(e.target.value)}})})]}),Object(o.jsx)(m,{todosArr:b,filteredTodos:C,setTodosArr:f,select:x,setSelect:h,countTodos:k,isCompleted:y})]})};c(24);r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.658f0b1c.chunk.js.map