(this["webpackJsonptwitter-react"]=this["webpackJsonptwitter-react"]||[]).push([[0],{101:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){},106:function(e,t,c){},109:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c(0),n=c.n(a),i=c(25),r=c.n(i),o=(c(81),c(55)),j=c(24),l=(c(82),c(83),c(84),c(123)),d=c(60),u=c.n(d),b=c(61),h=c.n(b),x=c(62),O=c.n(x),p=c(63),m=c.n(p),f=c(64),v=c.n(f),g=Object(a.forwardRef)((function(e,t){var c=e.displayName,a=e.avatar,n=e.username,i=e.verified,r=e.text,o=e.image;return Object(s.jsxs)("div",{className:"post",ref:t,children:[Object(s.jsx)("div",{className:"post__avatar",children:Object(s.jsx)(l.a,{src:a})}),Object(s.jsxs)("div",{className:"post__body",children:[Object(s.jsxs)("div",{className:"post__header",children:[Object(s.jsx)("div",{className:"header__text",children:Object(s.jsxs)("h3",{children:[c,Object(s.jsxs)("span",{className:"post__headerSpecial",children:[i&&Object(s.jsx)(u.a,{className:"post__badge"}),"@",n]})]})}),Object(s.jsx)("div",{className:"post__headerDesc",children:Object(s.jsx)("p",{children:r})})]}),Object(s.jsx)("img",{src:o,alt:""}),Object(s.jsxs)("div",{className:"post__footer",children:[Object(s.jsx)(h.a,{fontSize:"small"}),Object(s.jsx)(O.a,{fontSize:"small"}),Object(s.jsx)(m.a,{fontSize:"small"}),Object(s.jsx)(v.a,{fontSize:"small"})]})]})]})})),_=(c(90),c(122)),w=c(47),N=c.n(w),S=N.a.initializeApp({apiKey:"AIzaSyDuvdhChy0fU5M9IrtOcDJsWn8B7Hc3kpQ",authDomain:"twitter-react-2020.firebaseapp.com",databaseURL:"https://twitter-react-2020.firebaseio.com",projectId:"twitter-react-2020",storageBucket:"twitter-react-2020.appspot.com",messagingSenderId:"702923988028",appId:"1:702923988028:web:30afb7bcecf426eacdb739",measurementId:"G-GEVJB6XEVT"}).firestore(),y=N.a.auth(),I=S;var C=function(){var e=Object(a.useState)(" "),t=Object(j.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(""),r=Object(j.a)(i,2),o=r[0],d=r[1];return Object(s.jsx)("div",{className:"tweetBox",children:Object(s.jsxs)("form",{children:[Object(s.jsxs)("div",{className:"tweetBox__input",children:[Object(s.jsx)(l.a,{src:"https://cms.qz.com/wp-content/uploads/2018/10/Hatman_Artboard-2.jpg?quality=75&strip=all&w=900&h=900&crop=1"}),Object(s.jsx)("input",{onChange:function(e){return n(e.target.value)},value:c,type:"text",placeholder:"What's happening?"})]}),Object(s.jsx)("input",{onChange:function(e){return d(e.target.value)},value:o,className:"tweetBox__inputImage",type:"text",placeholder:"Optional: enter image URL"}),Object(s.jsx)(_.a,{onClick:function(e){e.preventDefault(),I.collection("posts").add({displayName:"New User",username:"newperson",verified:!0,text:c,image:o,avatar:"https://cms.qz.com/wp-content/uploads/2018/10/Hatman_Artboard-2.jpg?quality=75&strip=all&w=900&h=900&crop=1"}),n(""),d("")},type:"submit",className:"tweetBtn",children:"Tweet"})]})})},T=c(65);var E=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){I.collection("posts").onSnapshot((function(e){return n(e.docs.map((function(e){return e.data()})))}))}),[]),Object(s.jsxs)("div",{className:"feed",children:[Object(s.jsx)("div",{className:"feed__header",children:Object(s.jsx)("h2",{children:"Home"})}),Object(s.jsx)(C,{}),Object(s.jsx)(T.a,{children:c.map((function(e){return Object(s.jsx)(g,{displayName:e.displayName,username:e.username,verified:e.verified,text:e.text,avatar:e.avatar,image:e.image},e.text)}))})]})},B=(c(101),c(40)),k=c.n(B);c(102);var D=function(e){var t=e.active,c=e.text,a=e.Icon;return Object(s.jsxs)("div",{className:"sidebarOption ".concat(t&&"sidebarOption--active"),children:[Object(s.jsx)(a,{}),Object(s.jsx)("h2",{children:c})]})},U=c(66),z=c.n(U),P=c(41),R=c.n(P),A=c(67),L=c.n(A),W=c(68),H=c.n(W),q=c(69),F=c.n(q),J=c(70),M=c.n(J),G=c(71),V=c.n(G),K=c(72),Q=c.n(K);var X=function(){return Object(s.jsxs)("div",{className:"sidebar",children:[Object(s.jsx)(k.a,{className:"twitterIcon"}),Object(s.jsx)(D,{Icon:z.a,text:"Home"}),Object(s.jsx)(D,{Icon:R.a,text:"Explore"}),Object(s.jsx)(D,{Icon:L.a,text:"Notifications"}),Object(s.jsx)(D,{Icon:H.a,text:"Messages"}),Object(s.jsx)(D,{Icon:F.a,text:"Bookmarks"}),Object(s.jsx)(D,{Icon:M.a,text:"Lists"}),Object(s.jsx)(D,{Icon:V.a,text:"Profile"}),Object(s.jsx)(D,{Icon:Q.a,text:"More"}),Object(s.jsx)(_.a,{className:"sidebar__tweet",variant:"outlined",fullWidth:!0,children:"Tweet"})]})},Y=(c(103),c(43));var Z=function(){return Object(s.jsxs)("div",{className:"widgets",children:[Object(s.jsxs)("div",{className:"widgets__input",children:[Object(s.jsx)(R.a,{className:"widgets__searchIcon"}),Object(s.jsx)("input",{placeholder:"Search Twitter",type:"text"})]}),Object(s.jsxs)("div",{className:"widgets__container",children:[Object(s.jsx)("h2",{children:"What's happening"}),Object(s.jsx)(Y.c,{tweetId:"1314536088166232067"}),Object(s.jsx)(Y.b,{sourceType:"profile",screenName:"reaperiff697",options:{height:400}}),Object(s.jsx)(Y.a,{url:"https://facebook.com/BlumeCTO",options:{text:"#webdevelopment is awesome",via:"blumecto"}})]})]})},$=c(42),ee=c(7);c(106);var te=function(){var e=Object(ee.f)(),t=Object(a.useState)(""),c=Object(j.a)(t,2),n=c[0],i=c[1],r=Object(a.useState)(""),o=Object(j.a)(r,2),l=o[0],d=o[1];return Object(s.jsxs)("div",{className:"login",children:[Object(s.jsx)($.b,{to:"/",children:Object(s.jsx)(k.a,{className:"twitterIcon"})}),Object(s.jsx)("h2",{className:"login__message",children:"Log in to Twitter"}),Object(s.jsxs)("form",{className:"login__form",children:[Object(s.jsx)("span",{children:"Email"}),Object(s.jsx)("input",{className:"login__input",type:"text",onChange:function(e){return i(e.target.value)}}),Object(s.jsx)("span",{children:"Password"}),Object(s.jsx)("input",{type:"text",className:"login__input",onChange:function(e){return d(e.target.value)}}),Object(s.jsx)(_.a,{onClick:function(t){t.preventDefault(),y.signInWithEmailAndPassword(n,l).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"loginBtn",children:"Log In"})]}),Object(s.jsx)("button",{onClick:function(t){t.preventDefault(),y.createUserWithEmailAndPassword(n,l).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__register",children:"Sign up for Twitter"}),Object(s.jsx)("footer",{className:"footer__one",children:"Disclaimer: This website was created for the purpose of testing the coder's web development capabilities. So no need to sue, honestly"}),Object(s.jsx)("footer",{className:"footer__two",children:"\xa9 Twitter Clone. No rights reserved - this is a demo"}),Object(s.jsx)("footer",{className:"footer__three",children:"Privacy \xb7 Terms \xb7 Sitemap \xb7 Details"}),Object(s.jsx)("footer",{className:"footer__last",children:"Coded by 8lum3CT0"})]})},ce=Object(a.createContext)(),se=function(e){var t=e.reducer,c=e.initialState,n=e.children;return Object(s.jsx)(ce.Provider,{value:Object(a.useReducer)(t,c),children:n})};var ae=function(){var e=Object(a.useContext)(ce),t=Object(j.a)(e,2);Object(o.a)(t[0]);var c=t[1];return Object(a.useEffect)((function(){y.onAuthStateChanged((function(e){console.log("USER >>>>>",e),c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(s.jsx)("div",{className:"app",children:Object(s.jsx)($.a,{children:Object(s.jsxs)(ee.c,{children:[Object(s.jsx)(ee.a,{path:"/login",children:Object(s.jsx)(te,{})}),Object(s.jsxs)(ee.a,{path:"/",children:[Object(s.jsx)(X,{}),Object(s.jsx)(E,{}),Object(s.jsx)(Z,{})]})]})})})},ne=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,124)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))},ie=c(50),re=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(ie.a)(Object(ie.a)({},e),{},{user:t.user});default:return e}};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(se,{initialState:{user:null},reducer:re,children:Object(s.jsx)(ae,{})})}),document.getElementById("root")),ne()},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},90:function(e,t,c){}},[[109,1,2]]]);
//# sourceMappingURL=main.671d1e91.chunk.js.map