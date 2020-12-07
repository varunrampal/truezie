(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{287:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(0),r=a.n(n),c=a(193),o=a(123),l=Object(o.a)({container:{position:"relative",padding:"1rem",height:function(e){return e.height},borderRadius:"1rem"},title:{fontSize:"0.8rem",color:"#38cc89"}});function i(e){var t=e.height,a=l({height:t||"16rem"});return r.a.createElement(c.a,{className:a.container},e.title&&r.a.createElement("h4",{className:a.title},e.title),e.children)}},317:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(0),r=a.n(n),c=a(240),o=a(690),l=a(244),i=a(683),u=a(123),s=Object(u.a)(function(e){return{formControl:{position:"absolute",top:function(e){return"".concat(e.top)},right:function(e){return"".concat(e.right)},margin:e.spacing(1),minWidth:120,textAlign:"center"}}});function m(e){var t=e.top,a=e.right,n=e.value,u=e.onChange,m=s({top:t,right:a});return r.a.createElement(c.a,{className:m.formControl},r.a.createElement(l.a,{value:n,onChange:u},r.a.createElement(i.a,null,"2020"),r.a.createElement(o.a,{value:"2020-7"},"August"),r.a.createElement(o.a,{value:"2020-8"},"September"),r.a.createElement(i.a,null,"2019"),r.a.createElement(o.a,{value:"2019-7"},"August")))}},318:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(53),r=a(0),c=a.n(r),o=a(123),l=Object(o.a)(function(e){return{txtExpensesTotal:{margin:"1rem 0",fontSize:"2rem"},float:Object(n.a)({position:"absolute",top:0,left:"10rem"},e.breakpoints.down("xs"),{left:"5rem"})}});function i(e){var t=l(),a=e.total,n=e.float;return c.a.createElement("p",{className:"".concat(t.txtExpensesTotal," ").concat(n?t.float:"")},c.a.createElement("sup",null,"$"),a.toLocaleString())}},687:function(e,t,a){"use strict";a.r(t);var n=a(36),r=a.n(n),c=a(273),o=a(62),l=a(22),i=a(0),u=a.n(i),s=a(236),m=a(287),f=a(648),p=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],h=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return["$".concat(e.toLocaleString())].concat(a)},E=function(e,t){for(var a=new Date,n=new Date(t,e+1,0).getDate(),r=a.getDate(),c=(new Date).toDateString().slice(4,10),o=a.getMonth(),l=a.getFullYear(),i=[{id:"current_month",condition:e===o&&t===l,total:function(e){return e<=r?0:null},reference:c},{id:"past_months",condition:t<l||t===l&&e<o,total:0,reference:"".concat(p[e]," ").concat(n)},{id:"future_months",condition:t>l||t===l&&e>o,total:null,reference:"".concat(p[e]," 01")}].find(function(e){return e.condition}),u=i.total,s=i.reference,m=[{_id:"".concat(p[e]," 01"),total:0}],f=2;f<=n;f++)m.push({_id:"".concat(p[e]," ").concat(f>9?"":"0").concat(f),total:u instanceof Function?u(f):u});return{receipts:m,reference:s}};function d(e){var t=e.data,a=e.year,n=e.month,r=E(n,a),c=r.receipts,o=r.reference,s=function(e,t){return e.find(function(e){return e._id===t})},m=Object(i.useState)(c),p=Object(l.a)(m,2),d=p[0],b=p[1],g=Object(i.useState)(s(c,o).total),v=Object(l.a)(g,2),O=v[0],j=v[1];return Object(i.useEffect)(function(){b(function(e){return e.map(function(e){return s(t,e._id)||e})})},[t]),Object(i.useEffect)(function(){b(c)},[n,a]),Object(i.useEffect)(function(){var e=s(d,o).total;j(e)},[d]),u.a.createElement(f.e,{height:120,debounce:100},u.a.createElement(f.b,{data:d},u.a.createElement(f.g,{dataKey:"_id",interval:"preserveStartEnd",axisLine:{stroke:"#f0f2fa",strokeWidth:2},tickLine:!1,padding:{left:20,right:20}}),u.a.createElement(f.a,{type:"monotone",dataKey:"total",stroke:"#4366a7",strokeWidth:2,dot:!1,activeDot:{stroke:"#fff",strokeWidth:3,r:6}}),u.a.createElement(f.d,{x:o,stroke:"#f0f2fa"}),u.a.createElement(f.c,{x:o,y:O,r:5,isFront:!0,fill:"#38cc89",stroke:"none"}),u.a.createElement(f.f,{separator:": ",formatter:h})))}var b=a(246),g=a(679),v=a(680),O=a(682),j=a(678),x=a(681),w=a(123),k=a(115),S=a(274),C=a(61),y=a(85),D=a(63),N=Object(w.a)({container:{whiteSpace:"nowrap"},thead:{display:"flex",alignItems:"center"},avatar:{marginRight:"1rem",width:"1.5rem",height:"1.5rem",color:"#fff",backgroundColor:k.a[500]}});function _(e){var t=N(),a=Object(i.useContext)(S.a),n=Object(i.useContext)(C.a),c=Object(y.a)().sendRequest,s=n.userId,m=Object(i.useState)([]),f=Object(l.a)(m,2),p=f[0],h=f[1];return Object(i.useEffect)(function(){(function(){var e=Object(o.a)(r.a.mark(function e(){var t,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="http://localhost:5000/api/"+"user/topcategories/".concat(s),e.next=4,c(t,"GET",null,{Authorization:"Bearer "+n.token});case 4:a=e.sent,h(a.results.receipts),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),D.a.logErrorInRollbar(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(){return e.apply(this,arguments)}})()()},[c,s,n.token,e.receiptCount]),u.a.createElement(j.a,null,u.a.createElement(g.a,{className:t.container},u.a.createElement(v.a,null,p.map(function(e,n){var r=e.total,c=e._id||"Other";return u.a.createElement(x.a,{key:n+" "+c},u.a.createElement(O.a,{component:"th",scope:"row"},u.a.createElement("div",{className:t.thead},u.a.createElement(b.a,{className:t.avatar},a[c]),c)),u.a.createElement(O.a,null,"-$".concat(r.toLocaleString())))}))))}var A=a(384),M=a.n(A),R=Object(w.a)({container:{whiteSpace:"nowrap"},thead:{display:"flex",alignItems:"center"},avatar:{marginRight:"1rem",width:"2rem",height:"2rem",color:"#fff",backgroundColor:k.a[500]},txtCat:{color:"grey",opacity:"0.8"}}),T=function(e){var t=R(),a=Object(i.useContext)(S.a),n=Object(i.useContext)(C.a),c=Object(y.a)().sendRequest,s=n.userId,m=Object(i.useState)([]),f=Object(l.a)(m,2),p=f[0],h=f[1];return Object(i.useEffect)(function(){!function(){var e=Object(o.a)(r.a.mark(function e(){var t,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="http://localhost:5000/api/"+"user/recenttransactions/".concat(s),e.next=4,c(t,"GET",null,{Authorization:"Bearer "+n.token});case 4:a=e.sent,h(a.results.transactions),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),D.a.logErrorInRollbar(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(){return e.apply(this,arguments)}}()()},[c,s,n.token,e.receiptCount]),u.a.createElement(j.a,null,u.a.createElement(g.a,{className:t.container},u.a.createElement(v.a,null,p.map(function(e,n){var r=e._id,c=e.title,o=e.amount,l=e.date,i=e.category||"Other";return u.a.createElement(x.a,{key:n+" "+r},u.a.createElement(O.a,{component:"th",scope:"row"},u.a.createElement("div",{className:t.thead},u.a.createElement(b.a,{className:t.avatar},a[i]),c)),u.a.createElement(O.a,null,"-$".concat(o.toLocaleString())),u.a.createElement(O.a,null,M()(l).format("MMMM Do, YYYY")),u.a.createElement(O.a,{className:t.txtCat},i))}))))},I=a(317),L=a(126),z=a(318),F=a(25),Y=a(242);function J(e){var t=Object(i.useState)((new Date).getMonth()),a=Object(l.a)(t,2),n=a[0],f=a[1],p=Object(i.useState)((new Date).getFullYear()),h=Object(l.a)(p,2),E=h[0],b=h[1],g=Object(i.useState)([]),v=Object(l.a)(g,2),O=v[0],j=v[1],x=Object(i.useState)(0),w=Object(l.a)(x,2),k=w[0],S=w[1],N=Object(i.useContext)(C.a),A=Object(y.a)().sendRequest,M=N.userId,R=e.receiptCount,J=Object(Y.a)(Object(F.a)().breakpoints.down("xs")),G=function(){var e=(new Date).getTimezoneOffset(),t=Math.abs(Math.floor(e/60)),a=Math.abs(e%60);return"".concat(e>0?"-":"+").concat(t>9?t:"0"+t).concat(a>9?a:"0"+a)};return Object(i.useEffect)(function(){(function(){var e=Object(o.a)(r.a.mark(function e(){var t,a,o,l,i,u;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=G(),a="".concat("http://localhost:5000/api/","user/monthlytransactions/").concat(M,"&").concat(E,"&").concat(n,"&").concat(t),e.next=5,A(a,"GET",null,{Authorization:"Bearer "+N.token});case 5:o=e.sent,l=o.receipts,i=l.map(function(e){var t=new Date(e._id).toDateString();return Object(c.a)({},e,{_id:t.slice(4,10)})}),u=l.reduce(function(e,t){return e+t.total},0),S(u),j(i),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),D.a.logErrorInRollbar(e.t0);case 16:case"end":return e.stop()}},e,null,[[0,13]])}));return function(){return e.apply(this,arguments)}})()()},[A,M,N.token,E,n,R]),u.a.createElement(u.a.Fragment,null,u.a.createElement(L.a,null,u.a.createElement(s.a,{container:!0,spacing:3,xs:12,lg:10},u.a.createElement(s.a,{item:!0,xs:12,md:6},u.a.createElement(m.a,{title:"TOTAL".concat(J?"":" EXPENSES")},u.a.createElement(I.a,{top:"1rem",right:"0.5rem",value:"".concat(E,"-").concat(n),onChange:function(e){var t=e.target.value.split("-"),a=Object(l.a)(t,2),n=a[0],r=a[1];b(+n),f(+r)}}),u.a.createElement(z.a,{total:k}),u.a.createElement(d,{year:E,month:n,data:O}))),u.a.createElement(s.a,{item:!0,xs:12,md:6},u.a.createElement(m.a,{title:"TOP CATEGORIES"},u.a.createElement(L.a,null,u.a.createElement(_,{receiptCount:R}))))),u.a.createElement(s.a,{container:!0,spacing:3,xs:12,lg:10},u.a.createElement(s.a,{item:!0,xs:12},u.a.createElement("h3",null,"Recent Transactions"))),u.a.createElement(s.a,{container:!0,spacing:3,xs:12,lg:10},u.a.createElement(s.a,{item:!0,xs:12},u.a.createElement(m.a,null,u.a.createElement(L.a,null,u.a.createElement(T,{receiptCount:R})))))))}a.d(t,"default",function(){return J})}}]);
//# sourceMappingURL=7.bea72a1b.chunk.js.map