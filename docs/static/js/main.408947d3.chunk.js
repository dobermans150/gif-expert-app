(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(8),i=n.n(a),s=n(5),u=n(2),o=n(9),j=n(0),d=function(t){var e=t.setcategories,n=Object(c.useState)(""),r=Object(u.a)(n,2),a=r[0],i=r[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("form",{onSubmit:function(t){t.preventDefault(),a.trim().length&&(e((function(t){return[a].concat(Object(s.a)(t))})),i(""))},children:Object(j.jsx)("input",{type:"text",value:a,onChange:function(t){var e=t.target;console.log(e.value),i(e.value)}})})})},l=n(11),b=n(7),p=n.n(b),h=n(10),O=function(){var t=Object(h.a)(p.a.mark((function t(e){var n,c,r,a,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=sdFCjcowD6iaUBBO8bsBzWtNHOyVxwQh&q=".concat(encodeURI(e),"&limit=10"),t.prev=1,t.next=4,fetch(n);case 4:return c=t.sent,t.next=7,c.json();case 7:return r=t.sent,a=r.data,t.next=11,a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}}));case 11:return i=t.sent,t.abrupt("return",i);case 15:t.prev=15,t.t0=t.catch(1),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e){return t.apply(this,arguments)}}(),f=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(u.a)(e,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){O(t).then((function(t){a({loading:!1,data:t})}))}),[t]),r},g=function(t){t.id;var e=t.title,n=t.url;return Object(j.jsxs)("div",{className:"card animate__animated animate__bounce",children:[Object(j.jsx)("img",{src:n,alt:e}),Object(j.jsx)("p",{children:e})]})},x=function(t){var e=t.category,n=f(e),c=n.data,r=n.loading;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{children:e}),r&&Object(j.jsx)("p",{children:"Loading..."}),Object(j.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(j.jsx)(g,Object(l.a)({},t),t.id)}))})]})},m=function(){var t=Object(o.useState)(["One Punch"]),e=Object(u.a)(t,2),n=e[0],c=e[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Git Expert App"}),Object(j.jsx)("hr",{}),Object(j.jsx)(d,{setcategories:c}),Object(j.jsx)("ol",{children:n.map((function(t){return Object(j.jsx)(x,{category:t},t)}))})]})},v=(n(18),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))});i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),v()}},[[19,1,2]]]);
//# sourceMappingURL=main.408947d3.chunk.js.map