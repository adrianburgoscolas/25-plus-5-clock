(this["webpackJsonp25-plus-5-clock"]=this["webpackJsonp25-plus-5-clock"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),i=n(5),s=n.n(i),o=(n(10),n(1)),b=n(3),a=(n(11),function(e){var t=Math.floor(e/60),n=e%60,c=t.toString(),r=n.toString();return t<10&&(c="0"+c),n<10&&(r="0"+r),c+":"+r}),u=n(0),d=60;var j=function(){var e=Object(c.useState)(5),t=Object(b.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(25),s=Object(b.a)(i,2),j=s[0],l=s[1],O=Object(c.useState)(!1),f=Object(b.a)(O,2),h=f[0],k=f[1],x=Object(c.useState)({session:1500,break:300}),p=Object(b.a)(x,2),m=p[0],v=p[1],g=Object(c.useState)(!0),S=Object(b.a)(g,2),C=S[0],w=S[1],T=document.getElementById("beep");return Object(c.useEffect)((function(){var e=setTimeout((function(){h&&(C?m.session>0?(1===m.session&&(T.currentTime=0,T.play()),v((function(e){return Object(o.a)(Object(o.a)({},e),{},{session:e.session-1})}))):(T.currentTime=0,T.play(),w((function(e){return!e})),v((function(e){return Object(o.a)(Object(o.a)({},e),{},{session:j*d})}))):m.break>0?(1===m.break&&(T.currentTime=0,T.play()),v((function(e){return Object(o.a)(Object(o.a)({},e),{},{break:e.break-1})}))):(w((function(e){return!e})),v((function(e){return Object(o.a)(Object(o.a)({},e),{},{break:n*d})}))))}),1e3);return function(){return clearTimeout(e)}})),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("div",{id:"container",children:[Object(u.jsx)("header",{className:"App-header",children:Object(u.jsx)("h1",{children:"25 + 5 Clock"})}),Object(u.jsx)("div",{id:"timer-label",children:C?"Session":"Break"}),Object(u.jsx)("div",{id:"time-left",children:a(C?m.session:m.break)}),Object(u.jsxs)("div",{id:"session-break-box",children:[Object(u.jsxs)("div",{id:"session-box",children:[Object(u.jsx)("div",{id:"session-label",children:"Session Length"}),Object(u.jsx)("div",{id:"session-length",children:j}),Object(u.jsx)("button",{id:"session-decrement",onClick:function(){h||l((function(e){return e>1?(v((function(t){return Object(o.a)(Object(o.a)({},t),{},{session:e*d-d})})),e-1):e}))},children:"-"}),Object(u.jsx)("button",{id:"session-increment",onClick:function(){h||l((function(e){return e<60?(v((function(t){return Object(o.a)(Object(o.a)({},t),{},{session:e*d+d})})),e+1):e}))},children:"+"}),Object(u.jsx)("button",{id:"start_stop",onClick:function(){k((function(e){return!e}))},children:h?"Pause":"Start"})]}),Object(u.jsxs)("div",{id:"break-box",children:[Object(u.jsx)("div",{id:"break-label",children:"Break Length"}),Object(u.jsx)("div",{id:"break-length",children:n}),Object(u.jsx)("button",{id:"break-decrement",onClick:function(){h||r((function(e){return e>1?(v((function(t){return Object(o.a)(Object(o.a)({},t),{},{break:e*d-d})})),e-1):e}))},children:"-"}),Object(u.jsx)("button",{id:"break-increment",onClick:function(){h||r((function(e){return e<60?(v((function(t){return Object(o.a)(Object(o.a)({},t),{},{break:e*d+d})})),e+1):e}))},children:"+"}),Object(u.jsx)("button",{id:"reset",onClick:function(){T.pause(),T.currentTime=0,r(5),l(25),k(!1),v({session:1500,break:300}),w(!0)},children:"Reset"})]})]}),Object(u.jsx)("audio",{id:"beep",src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav",children:"Your browser does not support the audio element."})]}),Object(u.jsx)("footer",{children:Object(u.jsx)("a",{rel:"noreferrer",href:"https://www.freecodecamp.org/fcce3ec214d-b0f9-4ddc-b526-34aea3d1e4a3",target:"_blank",children:"by Adrian Burgos"})})]})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),l()}},[[13,1,2]]]);
//# sourceMappingURL=main.f957c36b.chunk.js.map