(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),r=n(5),i=n.n(r),o=n(2),j=(n(4),n(0)),u=function(t){var e=Object(c.useState)([]),n=Object(o.a)(e,2),s=n[0],r=n[1];return Object(c.useEffect)((function(){console.log("props",t.id),fetch("https://hacker-news.firebaseio.com/v0/item/".concat(t.id,".json?print=pretty")).then((function(t){return t.json()})).then((function(t){return r(t)}))}),[t.id]),Object(j.jsxs)("div",{className:"Comments",children:[Object(j.jsx)("span",{children:"Top Comments:"}),s&&s.title]})},a=s.a.memo(u),h=function(){var t=Object(c.useState)([]),e=Object(o.a)(t,2),n=e[0],s=e[1];return Object(c.useEffect)((function(){fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty").then((function(t){return t.json()})).then((function(t){return s(t)}))}),[]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Top 10 Stories:"}),Object(j.jsx)("ul",{children:n.slice(0,10).map((function(t,e){return Object(j.jsxs)("li",{children:["".concat(t," :")," ",Object(j.jsx)(a,{id:t}),Object(j.jsx)("hr",{})]},e)}))})]})},b=document.getElementById("root");i.a.render(Object(j.jsx)(c.StrictMode,{children:Object(j.jsx)(h,{})}),b)},4:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.6a2c7b43.chunk.js.map