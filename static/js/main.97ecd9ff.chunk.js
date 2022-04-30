(this.webpackJsonpkaito=this.webpackJsonpkaito||[]).push([[0],{119:function(e,t,a){e.exports=a(263)},124:function(e,t,a){},125:function(e,t,a){},250:function(e,t,a){},251:function(e,t,a){},252:function(e,t,a){},253:function(e,t,a){e.exports=a.p+"static/media/mypic.a061ebc3.jpg"},254:function(e,t,a){},255:function(e,t,a){},256:function(e,t,a){},257:function(e,t,a){},258:function(e,t,a){},263:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),l=a.n(r),i=(a(124),a(103)),o=a(104),s=a(34),m=a(117),u=a(116),d=a(276),p=a(109),E=a.n(p),h=a(36),f=a.n(h),v=a(110),g=a.n(v),y=(a(125),a(64),a(115));function b(e){var t=c.a.useState(!1),a=Object(y.a)(t,2),n=a[0],r=a[1],l=c.a.useRef();return c.a.useEffect((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&r(e.isIntersecting)}))}));return e.observe(l.current),function(){return e.unobserve(l.current)}}),[]),c.a.createElement("div",{className:"fade-in-section ".concat(n?"is-visible":""),style:{transitionDelay:"".concat(e.delay)},ref:l},e.children)}var w=window.innerWidth<600,N=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){var e=this.state.expanded,t=[c.a.createElement("a",{href:"#intro"},"$ Intro"),c.a.createElement("a",{href:"#about"},"$ About me"),c.a.createElement("a",{href:"#experience"},"$ Experience"),c.a.createElement("a",{href:"#projects"},"$ Personal Projects")];return c.a.createElement("div",{className:"sidebar-nav"},!w&&c.a.createElement(d.a,{expanded:e,defaultOpenKeys:["3","4"],activeKey:this.state.activeKey,onSelect:this.handleSelect,appearance:"subtle"},c.a.createElement(d.a.Body,null,c.a.createElement("div",{className:"sidebar-links"},t.map((function(e,t){return c.a.createElement(b,{delay:"".concat(t+1,"00ms")},c.a.createElement("div",null,e))}))))),c.a.createElement("div",{className:"sidebar-logos",href:"/"},c.a.createElement("a",{href:"https://github.com/merouanezouaid"},c.a.createElement(f.a,{style:{fontSize:19}})),c.a.createElement("a",{href:"https://www.linkedin.com/in/merouanezouaid/"},c.a.createElement(E.a,{style:{fontSize:21}})),c.a.createElement("a",{href:"https://www.twitter.com/merouanezouaid/"},c.a.createElement(g.a,{style:{fontSize:21}}))))}}]),a}(c.a.Component),k=(a(250),a(60)),S=a.n(k),j=a(111),I=a.n(j);function x(){return c.a.createElement("div",{id:"intro"},c.a.createElement(S.a,{avgTypingDelay:120},c.a.createElement("span",{className:"intro-title"},"Hello! I'm ",c.a.createElement("span",{className:"intro-name"},"Kaito."),c.a.createElement(S.a.Backspace,{count:6,delay:500}),c.a.createElement("span",{className:"intro-name"},"Merouane."))),c.a.createElement(b,null,c.a.createElement("div",{className:"intro-subtitle"},"Coding is my favorite videogame."),c.a.createElement("div",{className:"intro-desc"},"I'm a junior software engineer and MERN Stack web developer from Agadir, very passionate about all aspects of software engineering and enjoy learning new skills everyday.",c.a.createElement("div",{style:{marginTop:"10px"}},"I'm looking forward to working with you!"," ",c.a.createElement("span",{class:"wave",role:"img","aria-label":"xxxx"},"\ud83d\udc4b"))),c.a.createElement("a",{href:"mailto:marwan.zouaid@gmail.com",className:"intro-contact"},c.a.createElement(I.a,null)," Get in touch")))}function z(){return c.a.createElement("div",null,c.a.createElement("div",{class:"timeline"},[{role:"Software Enginnering Intern",place:"AjiCod",url:"https://ajicod.com/en",date:"Apr 2022 - Present"},{role:"Content Creation Lead",place:"GDSCUIZ",url:"https://gdsc.community.dev/university-of-ibn-zohr/",date:"Sep 2021 - Present"},{role:"Software Engineering Intern",place:"Atlanta Sanad",url:"https://www.atlantasanad.ma",date:"Aug 2021 - Sep 2021"}].map((function(e){return c.a.createElement("div",{class:"timeline-item"},c.a.createElement("div",{class:"job"},e.role," |"," ",c.a.createElement("strong",null,c.a.createElement("a",{href:e.url},e.place))),c.a.createElement("div",{class:"timeline-date"},e.date))}))))}a(251);function C(){return c.a.createElement("div",{id:"experience"},c.a.createElement(b,null,c.a.createElement("div",{className:"section-header "},c.a.createElement("span",{className:"section-title"},"$ Experience")),c.a.createElement(z,null)))}a(252);function O(){var e=a(253);return c.a.createElement("div",{id:"about"},c.a.createElement(b,null,c.a.createElement("div",{className:"section-header "},c.a.createElement("span",{className:"section-title"},"$ About me")),c.a.createElement("div",{className:"about-content"},c.a.createElement("div",{className:"about-description"},c.a.createElement("p",null,"Hello, I am Merouane Zouaid, a sophomore majoring in Computer Engineering at the Higher School of Technology in Agadir, Morocco."),"I currently use the following technologies:",c.a.createElement("ul",{className:"tech-stack"},["Javascript ES6+","TypeScript","React.js","Node.js","Express","MongoDB","Python","Java","HTML & CSS","Git"].map((function(e){return c.a.createElement("li",null,e)}))),c.a.createElement("p",null,"I'm interested in Web Developement, Software Engineering and I'm self-studying Machine Learning and Cyber Security. I'm also a content creator on Instagram and Twitter."),c.a.createElement("p",null,"When I'm AFK, you can find me playing Football or reading books.")),c.a.createElement("div",{className:"about-image"},c.a.createElement("img",{src:e,alt:"kaitopic"})))))}a(254);var A=a(112),M=a.n(A),P=a(113),$=a.n(P),D={"Dictme | Dictionary app":{desc:"Python web app that provides definitions of English words, as well as pronunciations, synonyms, and other features.",techStack:"Python (Flask), Bootstrap, SQLite",link:"https://github.com/merouanezouaid/dictme",open:"https://dictme.herokuapp.com"},YupTube:{desc:"Node.js web application for collecting data, converting and downloading videos from YouTube.",techStack:"Node.js, Express",link:"https://github.com/merouanezouaid/yuptube",open:"https://yuptube.herokuapp.com"},"Clinic MS":{desc:"A hospital management system desktop mini-application",techStack:"C#, SQLServer",link:"https://github.com/merouanezouaid/ClinicMS",open:""}};function L(){return c.a.createElement("div",{id:"projects"},c.a.createElement("div",{className:"section-header "},c.a.createElement("span",{className:"section-title"},"$ Projects")),c.a.createElement("div",{className:"project-container"},c.a.createElement("ul",{className:"projects-grid"},Object.keys(D).map((function(e,t){return c.a.createElement(b,{delay:"".concat(t+1,"00ms")},c.a.createElement("li",{className:"projects-card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("div",{className:"folder-icon"},c.a.createElement(M.a,{style:{fontSize:35}})),c.a.createElement("span",{className:"external-links"},c.a.createElement("a",{className:"github-icon",href:D[e].link},c.a.createElement(f.a,{style:{fontSize:20,color:"var(--lightest-slate)"}})),D[e].open&&c.a.createElement("a",{className:"open-icon",href:D[e].open},c.a.createElement($.a,{style:{fontSize:25,color:"var(--lightest-slate)"}})))),c.a.createElement("div",{className:"card-title"},e),c.a.createElement("div",{className:"card-desc"},D[e].desc),c.a.createElement("div",{className:"card-tech"},D[e].techStack)))})))))}a(255);function T(){return c.a.createElement(b,null,c.a.createElement("div",{id:"credits"},c.a.createElement("div",{className:"ending-credits"},c.a.createElement("div",null,"Made with \u2665 by Merouane Zouaid"))))}a(256);function K(){return c.a.createElement("div",{id:"contact"},c.a.createElement("div",{className:"section-header "},c.a.createElement("span",{className:"section-title"},"$ Resume")),c.a.createElement(b,null,c.a.createElement("a",{href:"https://drive.google.com/file/d/1pdGOwqqh_u1aRGSfoLbfQJDIxv42ePla/view?usp=sharing",className:"intro-contact"},"Open Resume")))}a(257),a(258),a(259);function B(){var e=Object(n.useCallback)((function(e){"f"!==e.key&&"F"!==e.key||window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ")}),[]);return Object(n.useEffect)((function(){return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[e]),c.a.createElement("div",{className:"App"},c.a.createElement("div",{id:"content"},c.a.createElement(x,null),c.a.createElement(O,null),c.a.createElement(C,null),c.a.createElement(L,null),c.a.createElement(K,null),c.a.createElement(T,null)),c.a.createElement(N,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(260);var R=a(114);l.a.render(c.a.createElement(R.a,null,c.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[119,1,2]]]);