(this["webpackJsonpreact-gh-pages"]=this["webpackJsonpreact-gh-pages"]||[]).push([[0],{12:function(e,t,c){},23:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(24),r=c.n(s),i=(c(33),c(34),c(25)),l=c(13),j=c.n(l),o=c(26),u=c(3),d=c(8),b=c.n(d),h=function(e){var t=Object(a.useState)(null),c=Object(u.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(null),i=Object(u.a)(r,2),l=i[0],d=i[1];return Object(a.useEffect)((function(){var t=function(){var t=Object(o.a)(j.a.mark((function t(){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.get(e);case 3:c=t.sent,s(c.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),d(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){t()}}),[e]),{apiData:n,serverError:l}},m=c(5),O=c(27),x=(c(12),c(1)),f=function(e){var t=e.children,c=e.width;return Object(x.jsx)("div",{className:"carousel-item",style:{width:c},children:t})},v=function(e){var t=e.children,c=Object(a.useState)(0),s=Object(u.a)(c,2),r=s[0],i=s[1],l=function(e){e<0?e=n.a.Children.count(t)-1:e>=n.a.Children.count(t)&&(e=0),i(e)};Object(a.useEffect)((function(){var e=setInterval((function(){l(r+1)}),5e3);return function(){e&&clearInterval(e)}}));var j=Object(O.useSwipeable)({onSwipedLeft:function(){return l(r+1)},onSwipedRight:function(){return l(r-1)}});return Object(x.jsxs)("div",Object(m.a)(Object(m.a)({},j),{},{className:"carousel",children:[Object(x.jsx)("div",{className:"inner",style:{transform:"translateX(-".concat(100*r,"%)")},children:n.a.Children.map(t,(function(e,t){return n.a.cloneElement(e,{width:"100%"})}))}),Object(x.jsx)("div",{className:"indicators",children:n.a.Children.map(t,(function(e,t){return Object(x.jsx)("button",{className:"".concat(t===r?"active":"")})}))})]}))};var p=function(){var e=h("https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge"),t=e.apiData,c=e.serverError,a={};if(t){var n,s=Object(i.a)(t.hero_slides);try{for(s.s();!(n=s.n()).done;){var r=n.value;a[r.alt]||(a[r.alt]=r.image)}}catch(l){s.e(l)}finally{s.f()}[].push(t.hero_text)}return Object(x.jsxs)("div",{className:"hero",children:[!t&&Object(x.jsx)("h1",{className:"laoding-and-error",children:"Loading Images.."}),c&&Object(x.jsx)("h1",{className:"laoding-and-error",children:"Oops, sorry something went wrong.."}),Object(x.jsx)(v,{children:Object.entries(a).map((function(e,t){return Object(x.jsxs)(f,{children:[" ",Object(x.jsx)("img",{id:"images",alt:e[0],src:e[1]})]},t)}))}),t&&Object(x.jsxs)("div",{className:"Hero-text",children:[Object(x.jsxs)("div",{id:"title",children:["Screening:",Object(x.jsx)("br",{}),"DVF Secret Agent Part 2"]})," ",Object(x.jsx)("br",{}),Object(x.jsx)("div",{id:"date",children:"October 15, 2021"})," ",Object(x.jsx)("br",{}),Object(x.jsxs)("div",{id:"subtitle",children:["Join us for a private screening of DVF Secret Agent Part 2",Object(x.jsx)("br",{})," with our special guest, director Peter Lindberg. "]})]})]})};var g=function(){return Object(x.jsx)("div",{className:"CarouselContainer",children:Object(x.jsx)(p,{})})},N=(c(55),c(14)),w=c(0),S=c.p+"static/media/logo.4ac60799.svg";var y=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),c=t[0],n=t[1],s=function(){return n(!1)};return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(w.b.Provider,{value:{color:"grey"},children:Object(x.jsx)("nav",{className:"navbar",children:Object(x.jsxs)("div",{className:"navbar-container container",children:[Object(x.jsx)("img",{src:S,className:"brand-logo",alt:"logo"}),Object(x.jsx)("div",{className:"menu-icon",onClick:function(){return n(!c)},children:c?Object(x.jsx)(N.b,{}):Object(x.jsx)(N.a,{})}),Object(x.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{href:"https://matildawangelliman.github.io/react-gh-pages/",className:"nav-links",id:"phone",onClick:s,children:"212.555.5555"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{href:"https://matildawangelliman.github.io/react-gh-pages/",className:"nav-links",id:"login",onClick:s,children:"LOGIN"})})]})]})})})})},k=c(28);c(23);var C=function(e){var t=e.item;return Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{className:"pics",alt:t.alt,src:t.image})," ",Object(x.jsx)("br",{}),Object(x.jsxs)("div",{className:"date",children:[" ",t.date,"  "]})," ",Object(x.jsx)("br",{}),Object(x.jsxs)("div",{className:"title",children:[" ",t.title," "]})," ",Object(x.jsx)("br",{}),Object(x.jsx)("div",{className:"author-display",children:Object(x.jsx)("span",{className:"ref",children:Object(x.jsx)("a",{id:"author",href:"https://matildawangelliman.github.io/react-gh-pages/",children:t.author})})}),Object(x.jsx)("div",{className:"line"})]})};var E=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){fetch("https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge").then((function(e){return e.json()})).then((function(e){e.cards.sort((function(e,t){return new Date(t.date)-new Date(e.date)})),n(e.cards)})).catch(console.log)}),[]),Object(x.jsx)("div",{className:"container",children:Object(x.jsx)(k.a,{breakpointCols:{default:3,1024:2,700:1,480:1,420:1,320:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:c.map((function(e){return Object(x.jsx)("div",{className:"item",children:Object(x.jsx)(C,{item:e})},e.image)}))})})};var F=function(){return Object(x.jsx)("div",{className:"MasonryContainer",children:Object(x.jsx)(E,{})})},I=(c(56),c(9)),D=function(e){var t={};return e.email?/\S+@\S+\.\S+/.test(e.email)||(t.email="Email is invalid. Please put in correct email format"):t.email="Email is required.",t};var A=function(e){var t=e.submitForm,c=Object(a.useState)({email:""}),n=Object(u.a)(c,2),s=n[0],r=n[1],i=Object(a.useState)({}),l=Object(u.a)(i,2),j=l[0],o=l[1],d=Object(a.useState)(!1),h=Object(u.a)(d,2),O=h[0],f=h[1];return Object(a.useEffect)((function(){0===Object.keys(j).length&&O&&(t(!0),b.a.post("https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge",{email:s.email}).then((function(e){console.log("print",e.data)})),r(""))}),[j]),Object(x.jsxs)("div",{children:[Object(x.jsxs)("form",{children:[Object(x.jsx)("input",{id:"m",placeholder:"   Email",type:"email",name:"email",value:s.email,onChange:function(e){r(Object(m.a)(Object(m.a)({},s),{},Object(I.a)({},e.target.name,e.target.value)))}}),Object(x.jsx)("button",{onClick:function(e){e.preventDefault(),o(D(s)),f(!0)},children:"SUBMIT"})]}),j.email&&Object(x.jsx)("p",{className:"error-message",children:j.email})]})},T=function(){return Object(x.jsx)("div",{children:Object(x.jsx)("h1",{className:"signUp-success",children:"Thank You For Subscribing!"})})},P=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),c=t[0],n=t[1];return Object(x.jsx)("div",{children:c?Object(x.jsx)(T,{}):Object(x.jsx)(A,{submitForm:function(){n(!0)}})})};var L=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"sign-up",children:"Sign up for our Newsletter"}),Object(x.jsx)(P,{}),Object(x.jsx)("div",{className:"footer-link-display",children:Object(x.jsxs)("span",{className:"link-ref",children:[Object(x.jsx)("span",{className:"dash",children:Object(x.jsx)("a",{id:"social",href:"https://www.instagram.com/",children:"INSTAGRAM"})}),Object(x.jsxs)("span",{className:"dash",children:[" ",Object(x.jsx)("a",{id:"social",href:"https://www.facebook.com/",children:"FACEBOOK"})]}),Object(x.jsx)("span",{className:"dash",children:Object(x.jsx)("a",{id:"social",href:"https://twitter.com/home",children:"TWITTER"})})]})})]})};var M=function(){return Object(x.jsx)("div",{className:"FooterContainer",children:Object(x.jsx)(L,{})})};var z=function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(y,{}),Object(x.jsx)(g,{}),Object(x.jsx)(F,{}),Object(x.jsx)(M,{})]})};r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(z,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.c0a38102.chunk.js.map