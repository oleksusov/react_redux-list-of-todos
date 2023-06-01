(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(8),a=c.n(n),r=c(7),s=c(17),l=c(6),o=c(15),i=c(16),d=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/REMOVE":return null;case"currentTodo/SET":return t.payload;default:return e}},h=c(4),b=function(e){return{type:"filter/SET_STATUS",payload:e}},f=function(e){return{type:"filter/SET_QUERY",payload:e}},m={query:"",status:"all"},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/SET_QUERY":return Object(h.a)(Object(h.a)({},e),{},{query:t.payload});case"filter/SET_STATUS":return Object(h.a)(Object(h.a)({},e),{},{status:t.payload});default:return e}},O=function(e){return{type:"todos/LOAD",payload:e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/LOAD"===t.type?t.payload:e},v=Object(l.combineReducers)({currentTodo:j,filter:x,todos:p}),y=Object(l.createStore)(v,Object(o.composeWithDevTools)(Object(l.applyMiddleware)(i.a))),N=c(9),g=c(5),T=c.n(g),w=c(0);c(26),c(27);function E(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var k,S=r.b,C=r.c,A=c(13),_=c.n(A);!function(e){e.All="all",e.Active="active",e.Completed="completed"}(k||(k={}));var L=c(1),U=function(){var e=S(),t=C((function(e){return e.todos})),c=C((function(e){return e.filter.status})),n=C((function(e){return e.filter.query})),a=C((function(e){return e.currentTodo})),r=t.filter((function(e){switch(c){case k.Active:return!e.completed;case k.Completed:return e.completed;default:return!0}}));return n&&(r=r.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())}))),Object(L.jsx)(L.Fragment,{children:r.length?Object(L.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(L.jsx)("thead",{children:Object(L.jsxs)("tr",{children:[Object(L.jsx)("th",{children:"#"}),Object(L.jsx)("th",{children:Object(L.jsx)("span",{className:"icon",children:Object(L.jsx)("i",{className:"fas fa-check"})})}),Object(L.jsx)("th",{children:"Title"}),Object(L.jsx)("th",{children:" "})]})}),Object(L.jsx)("tbody",{children:r.map((function(t){var c=t.id,n=t.title,r=t.completed;return Object(L.jsxs)("tr",{"data-cy":"todo",className:_()({"has-background-info-light":a&&a.id===c}),children:[Object(L.jsx)("td",{className:"is-vcentered",children:c}),Object(L.jsx)("td",{className:"is-vcentered",children:r&&Object(L.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(L.jsx)("i",{className:"fas fa-check"})})}),Object(L.jsx)("td",{className:"is-vcentered is-expanded",children:Object(L.jsx)("p",{className:_()({"has-text-danger":!r},{"has-text-success":r}),children:n})}),Object(L.jsx)("td",{className:"has-text-right is-vcentered",children:Object(L.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(t){return e(d(t))}(t)},children:Object(L.jsx)("span",{className:"icon",children:Object(L.jsx)("i",{className:a&&a.id===c?"far fa-eye-slash":"far fa-eye"})})})})]},c)}))})]}):Object(L.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"})})},q=function(){var e=S(),t=C((function(e){return e.filter.status})),c=C((function(e){return e.filter.query})),n=function(t){return e(f(t))};return Object(L.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(L.jsx)("p",{className:"control",children:Object(L.jsx)("span",{className:"select",children:Object(L.jsxs)("select",{"data-cy":"statusSelect",name:"statusSelect",value:t,onChange:function(t){var c;c=t.target.value,e(b(c))},children:[Object(L.jsx)("option",{value:k.All,children:"All"}),Object(L.jsx)("option",{value:k.Active,children:"Active"}),Object(L.jsx)("option",{value:k.Completed,children:"Completed"})]})})}),Object(L.jsxs)("p",{className:" control is-expanded has-icons-left has-icons-right ",children:[Object(L.jsx)("input",{"data-cy":"searchInput",type:"text",name:"queryInput",className:"input",placeholder:"Search...",value:c,onChange:function(e){n(e.target.value)}}),Object(L.jsx)("span",{className:"icon is-left",children:Object(L.jsx)("i",{className:"fas fa-magnifying-glass"})}),c&&Object(L.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(L.jsx)("button",{"aria-label":"delete","data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return n("")}})})]})]})},D=c(3),R=(c(29),function(){return Object(L.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(L.jsx)("div",{className:"Loader__content"})})}),I=function(){var e=S(),t=C((function(e){return e.currentTodo})),c=Object(w.useState)(null),n=Object(D.a)(c,2),a=n[0],r=n[1],s=function(){var e=Object(N.a)(T.a.mark((function e(){var c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=6;break}return e.next=4,n=t.userId,E("/users/".concat(n));case 4:c=e.sent,r(c);case 6:e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Error! Unable to upload user!");case 11:case"end":return e.stop()}var n}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(w.useEffect)((function(){s()}),[]),Object(L.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(L.jsx)("div",{className:"modal-background"}),a?Object(L.jsxs)("div",{className:"modal-card",children:[Object(L.jsxs)("header",{className:"modal-card-head",children:[Object(L.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(L.jsx)("button",{"aria-label":"delete",type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return e(u())}})]}),Object(L.jsxs)("div",{className:"modal-card-body",children:[Object(L.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(L.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(L.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(L.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(L.jsx)("a",{href:"mailto:".concat(a.email),children:a.name})]})]})]}):Object(L.jsx)(R,{})]})},B=function(){var e=S(),t=C((function(e){return e.todos})),c=C((function(e){return e.currentTodo})),n=function(t){return e(O(t))},a=function(){var e=Object(N.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E("/todos");case 3:t=e.sent,n(t),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Error! Unable to upload todos!");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(w.useEffect)((function(){a()}),[]),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("div",{className:"section",children:Object(L.jsx)("div",{className:"container",children:Object(L.jsx)("div",{className:"box",children:Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("h1",{className:"title",children:"Todos:"}),Object(L.jsx)("div",{className:"block",children:Object(L.jsx)(q,{})}),Object(L.jsx)("div",{className:"block",children:t.length?Object(L.jsx)(U,{}):Object(L.jsx)(R,{})})]})})})}),c&&Object(L.jsx)(I,{})]})},F=function(){return Object(L.jsx)(r.a,{store:y,children:Object(L.jsx)(s.a,{children:Object(L.jsx)(B,{})})})};a.a.render(Object(L.jsx)(F,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.af510698.chunk.js.map