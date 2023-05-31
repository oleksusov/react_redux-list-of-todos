(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(8),a=c.n(n),r=c(7),s=c(17),l=c(6),o=c(15),i=c(16),d=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/REMOVE":return null;case"currentTodo/SET":return t.payload;default:return e}},h=c(4),b=function(e){return{type:"filter/SET_STATUS",payload:e}},f=function(e){return{type:"filter/SET_QUERY",payload:e}},O={query:"",status:"all"},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/SET_QUERY":return Object(h.a)(Object(h.a)({},e),{},{query:t.payload});case"filter/SET_STATUS":return Object(h.a)(Object(h.a)({},e),{},{status:t.payload});default:return e}},x=function(e){return{type:"todos/LOAD",payload:e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/LOAD"===t.type?t.payload:e},v=Object(l.combineReducers)({currentTodo:j,filter:m,todos:p}),y=Object(l.createStore)(v,Object(o.composeWithDevTools)(Object(l.applyMiddleware)(i.a))),N=c(9),g=c(5),T=c.n(g),E=c(0);c(26),c(27);function w(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var k,S=r.b,C=r.c,L=c(13),A=c.n(L);!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(k||(k={}));var _=c(1),D=function(){var e=S(),t=C((function(e){return e.todos})),c=C((function(e){return e.filter.status})),n=C((function(e){return e.filter.query})),a=C((function(e){return e.currentTodo})),r=t.filter((function(e){switch(c){case k.ACTIVE:return!e.completed;case k.COMPLETED:return e.completed;default:return!0}}));return n&&(r=r.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())}))),Object(_.jsx)(_.Fragment,{children:r.length?Object(_.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(_.jsx)("thead",{children:Object(_.jsxs)("tr",{children:[Object(_.jsx)("th",{children:"#"}),Object(_.jsx)("th",{children:Object(_.jsx)("span",{className:"icon",children:Object(_.jsx)("i",{className:"fas fa-check"})})}),Object(_.jsx)("th",{children:"Title"}),Object(_.jsx)("th",{children:" "})]})}),Object(_.jsx)("tbody",{children:r.map((function(t){var c=t.id,n=t.title,r=t.completed;return Object(_.jsxs)("tr",{"data-cy":"todo",className:A()({"has-background-info-light":a&&a.id===c}),children:[Object(_.jsx)("td",{className:"is-vcentered",children:c}),Object(_.jsx)("td",{className:"is-vcentered",children:r&&Object(_.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(_.jsx)("i",{className:"fas fa-check"})})}),Object(_.jsx)("td",{className:"is-vcentered is-expanded",children:Object(_.jsx)("p",{className:A()({"has-text-danger":!r},{"has-text-success":r}),children:n})}),Object(_.jsx)("td",{className:"has-text-right is-vcentered",children:Object(_.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(t){return e(d(t))}(t)},children:Object(_.jsx)("span",{className:"icon",children:Object(_.jsx)("i",{className:a&&a.id===c?"far fa-eye-slash":"far fa-eye"})})})})]},c)}))})]}):Object(_.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"})})},I=function(){var e=S(),t=C((function(e){return e.filter.status})),c=C((function(e){return e.filter.query})),n=function(t){return e(f(t))};return Object(_.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(_.jsx)("p",{className:"control",children:Object(_.jsx)("span",{className:"select",children:Object(_.jsxs)("select",{"data-cy":"statusSelect",name:"statusSelect",value:t,onChange:function(t){var c;c=t.target.value,e(b(c))},children:[Object(_.jsx)("option",{value:k.ALL,children:"All"}),Object(_.jsx)("option",{value:k.ACTIVE,children:"Active"}),Object(_.jsx)("option",{value:k.COMPLETED,children:"Completed"})]})})}),Object(_.jsxs)("p",{className:" control is-expanded has-icons-left has-icons-right ",children:[Object(_.jsx)("input",{"data-cy":"searchInput",type:"text",name:"queryInput",className:"input",placeholder:"Search...",value:c,onChange:function(e){n(e.target.value)}}),Object(_.jsx)("span",{className:"icon is-left",children:Object(_.jsx)("i",{className:"fas fa-magnifying-glass"})}),c&&Object(_.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(_.jsx)("button",{"aria-label":"delete","data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return n("")}})})]})]})},M=c(3),U=(c(29),function(){return Object(_.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(_.jsx)("div",{className:"Loader__content"})})}),q=function(){var e=S(),t=C((function(e){return e.currentTodo})),c=Object(E.useState)(null),n=Object(M.a)(c,2),a=n[0],r=n[1],s=function(){var e=Object(N.a)(T.a.mark((function e(){var c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=6;break}return e.next=4,n=t.userId,w("/users/".concat(n));case 4:c=e.sent,r(c);case 6:e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Error! Unable to upload user!");case 11:case"end":return e.stop()}var n}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(E.useEffect)((function(){s()}),[]),Object(_.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(_.jsx)("div",{className:"modal-background"}),a?Object(_.jsxs)("div",{className:"modal-card",children:[Object(_.jsxs)("header",{className:"modal-card-head",children:[Object(_.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(_.jsx)("button",{"aria-label":"delete",type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return e(u())}})]}),Object(_.jsxs)("div",{className:"modal-card-body",children:[Object(_.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(_.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(_.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(_.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(_.jsx)("a",{href:"mailto:".concat(a.email),children:a.name})]})]})]}):Object(_.jsx)(U,{})]})},P=function(){var e=S(),t=C((function(e){return e.todos})),c=C((function(e){return e.currentTodo})),n=function(t){return e(x(t))},a=function(){var e=Object(N.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w("/todos");case 3:t=e.sent,n(t),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Error! Unable to upload todos!");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(E.useEffect)((function(){a()}),[]),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{className:"section",children:Object(_.jsx)("div",{className:"container",children:Object(_.jsx)("div",{className:"box",children:Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("h1",{className:"title",children:"Todos:"}),Object(_.jsx)("div",{className:"block",children:Object(_.jsx)(I,{})}),Object(_.jsx)("div",{className:"block",children:t.length?Object(_.jsx)(D,{}):Object(_.jsx)(U,{})})]})})})}),c&&Object(_.jsx)(q,{})]})},R=function(){return Object(_.jsx)(r.a,{store:y,children:Object(_.jsx)(s.a,{children:Object(_.jsx)(P,{})})})};a.a.render(Object(_.jsx)(R,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.3eb6fdd7.chunk.js.map