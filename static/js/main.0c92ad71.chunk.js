(this.webpackJsonpquest=this.webpackJsonpquest||[]).push([[0],{20:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s}));var a=n(17),r=n(18),c=n(0),l=n.n(c),o={},u=Object(c.createContext)(o),i=u.Provider,s=function(e){var t=e.children,n=Object(c.useReducer)((function(e,t){switch(t.type){case"SET_HINT":return Object(a.a)(Object(a.a)({},e),{},{hint:t.payload});default:throw new Error}}),o),u=Object(r.a)(n,2),s=u[0],m=u[1];return l.a.createElement(i,{value:{state:s,dispatch:m}},t)}},24:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return o}));var a=n(17),r=function(e){var t=o();t.name=e,l(t)},c={name:null,progress:[]},l=function(e){localStorage.setItem("clue-data",JSON.stringify(e))},o=function(){return JSON.parse(localStorage.getItem("clue-data")||"{}")||Object(a.a)({},c)}},33:function(e,t,n){e.exports=n.p+"static/media/logo.6184e0f0.svg"},39:function(e,t,n){e.exports=n(53)},44:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),l=n.n(c),o=n(19),u=n(4),i=n(33),s=n.n(i),m=(n(44),function(){return r.a.createElement("div",{className:"Header"},r.a.createElement("img",{className:"Logo",src:s.a,alt:"Logo"}))}),f=n(18),d=n(24),E=n(20),h=n(56),b=n(57),p=function(){var e=Object(a.useState)(null),t=Object(f.a)(e,2),n=t[0],c=t[1],l=Object(a.useContext)(E.b).state,o=Object(d.a)();Object(a.useEffect)((function(){}),[]);if(!l.hint)return null;var u=function(){return c(!1)};return r.a.createElement(r.a.Fragment,null,!n&&r.a.createElement("button",{onClick:function(){o.hintWarningConfirmed||window.confirm("You are about to recieve your first hint, are you sure?")&&(o.hintWarningConfirmed=!0,Object(d.b)(o));c(!0)}},"\ud83d\udc41\u200d\ud83d\udde8"),r.a.createElement(h.a,{style:{color:"black",fontWeight:700},show:n,onHide:u},r.a.createElement(h.a.Header,{closeButton:!0},r.a.createElement(h.a.Title,null,"HINT!")),r.a.createElement(h.a.Body,null,l.hint),r.a.createElement(h.a.Footer,null,r.a.createElement(b.a,{variant:"primary",onClick:u},"Close"))))},g=n(55),v=function(){return r.a.createElement("footer",{className:"footer mt-auto py-3 bg-dark text-white"},r.a.createElement(g.a,null,r.a.createElement(o.b,{to:"/help"},r.a.createElement("button",null,"\u260e")),r.a.createElement(p,null)))},w=r.a.lazy((function(){return n.e(4).then(n.bind(null,69))})),y=r.a.lazy((function(){return n.e(6).then(n.bind(null,66))})),O=r.a.lazy((function(){return n.e(5).then(n.bind(null,67))})),j=r.a.lazy((function(){return n.e(3).then(n.bind(null,68))}));var k=function(){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("span",null,"Loading...")},r.a.createElement(o.a,{basename:"/"},r.a.createElement(E.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement(g.a,{className:"App-Content mb-2"},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,render:function(){return r.a.createElement(w,null)}}),r.a.createElement(u.a,{path:"/clue/:id",exact:!0,render:function(e){return r.a.createElement(j,e)}}),r.a.createElement(u.a,{path:"/test",exact:!0,render:function(){return r.a.createElement(y,null)}}),r.a.createElement(u.a,{path:"/help",exact:!0,render:function(){return r.a.createElement(O,null)}}))),r.a.createElement(v,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(51),n(52);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.0c92ad71.chunk.js.map