"use strict";(self.webpackChunkgoit_react_hw_05_movies_2=self.webpackChunkgoit_react_hw_05_movies_2||[]).push([[415],{281:function(n,t,e){e.d(t,{AR:function(){return o},PQ:function(){return f},bI:function(){return s},jc:function(){return p},r7:function(){return d}});var r=e(861),a=e(757),c=e.n(a),u=e(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="b19297acdc563e9276d9a5dae9c54e60",o=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},676:function(n,t,e){e.d(t,{O:function(){return i}});var r=e(689),a=e(87),c=e(279),u=e(184),i=function(n){var t=n.movies,e=(0,r.TH)();return(0,u.jsx)(c.iR,{children:t.map((function(n){return(0,u.jsx)(c.UK,{children:(0,u.jsxs)(a.rU,{to:"/movies/".concat(n.id),state:{from:e},children:[(0,u.jsx)(c.SR,{src:"https://image.tmdb.org/t/p/w500/".concat(n.poster_path),alt:n.title,width:"300",height:"300"}),(0,u.jsx)("p",{children:n.original_title})]})},n.id)}))})}},279:function(n,t,e){e.d(t,{SR:function(){return s},UK:function(){return p},iR:function(){return o}});var r,a,c,u=e(168),i=e(444),o=i.ZP.main(r||(r=(0,u.Z)(["\ndisplay: grid;\n  grid-template-columns: repeat(auto-fit, 300px);\n  gap: 16px;\n\n"]))),s=i.ZP.img(a||(a=(0,u.Z)(["\ndisplay: block;\n    height: auto;\n    max-width: 100%;\n"]))),p=i.ZP.div(c||(c=(0,u.Z)(["\n box-shadow: 0 4px 2px -2px gray;\n"])))},415:function(n,t,e){e.r(t);var r=e(861),a=e(439),c=e(757),u=e.n(c),i=e(791),o=e(676),s=e(281),p=e(184);t.default=function(){var n=(0,i.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1],f=(0,i.useState)(null),d=(0,a.Z)(f,2),l=d[0],h=d[1];return(0,i.useEffect)((function(){function n(){return(n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.AR)();case 3:t=n.sent,c(t.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),h("Error");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,p.jsxs)("main",{children:[(0,p.jsx)("h1",{style:{marginBottom:"40px",textAlign:"center"},children:"Trending today"}),l&&(0,p.jsx)("p",{style:{color:"red"},children:l}),e.length>0&&(0,p.jsx)(o.O,{movies:e})]})}}}]);
//# sourceMappingURL=415.eb78be53.chunk.js.map