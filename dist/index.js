"use strict";(()=>{var Ie=Object.defineProperty;var He=(e,t)=>{for(var r in t)Ie(e,r,{get:t[r],enumerable:!0})};var P={};He(P,{getAccordionTitle:()=>$,getArticleCardFromLink:()=>B,getAuthor:()=>I,getCTATactic:()=>K,getCardCategory:()=>H,getCardLinkClicked:()=>W,getCardPosition:()=>j,getCardTitle:()=>G,getClickText:()=>V,getClickURL:()=>E,getCurrentFormStep:()=>qe,getFormName:()=>k,getFormStepContents:()=>Q,getFormStepNumber:()=>z,getFormType:()=>C,getFunnelStage:()=>Y,getListType:()=>J,getPageType:()=>X,getPageURL:()=>p,getPartnerName:()=>Fe,getPositionOnPage:()=>Z,getProductName:()=>g,getPublishedDate:()=>ee,getTotalFormSteps:()=>te,isCardClick:()=>Ne,isKnowledgeClick:()=>re});var $=e=>e.firstElementChild.textContent;var B=e=>e.closest(".card");var I=()=>{if(!!window.crunchMeta)return window.crunchMeta.author};var H=e=>e.querySelector(".tag").textContent;var W=e=>{let t=e.classList;return t.contains("card__img-wrapper")?"Image":t.contains("card__h")?"Title":t.contains("card__arrow")?"Arrow":"Undefined"};var j=e=>{let t=e.parentElement,r=t.parentElement;return Array.from(r.children).indexOf(t)+1};var G=e=>e.querySelector(".card__h").textContent;var V=e=>e.textContent;var E=e=>e.href;var K=e=>{let t=e.classList,r;return t.forEach(o=>{if(o.includes("footer-callback"))r="Signup";else if(o.includes("callback"))r="Call Back";else if(o.includes("validate")){let s=e.closest("form"),a=Array.from(s.querySelectorAll(`.${o}`));a.forEach((m,f)=>{m===e&&(f<a.length-1?r="Next Step":r="Form Completion")});return}}),r};var qe=e=>[...e.querySelectorAll(".callback-form__step")].find(r=>r.style.display!=="none");var k=e=>e.dataset.name;var Q=e=>e.dataset.stepContent;var z=e=>{let r=e.closest("form").querySelectorAll(".callback-form__step");return Array.from(r).indexOf(e)+1};var C=e=>{let t;return e.closest(".modal__wrapper")?t="Popup":t="In Page",t};var Y=()=>{};var p=()=>window.location.href;var J=()=>{let e=p(),t;return e.includes("/knowledge-")?e.includes("/knowledge-category/")?t="Category Page":t="You May Also Like":e.includes(!e.includes("/knowledge/"))?t="Category Page":t="Top Reads",t};var X=()=>{let e=p();return e.includes("/knowledge")?"Knowledge":e.includes("/member-stories")?"Member Stories":document.querySelector("form[data-product]")?"Product":"Other"};var Fe=e=>e;var Z=e=>{let t="body";return e.closest(".fab__wrapper")?t="fab":e.closest(".nav__wrapper")?t="nav":e.closest("header")?t="header":e.closest("footer")?t="footer":document.querySelector("main")&&document.querySelector("main").firstElementChild.contains(e)&&(t="header"),t};var g=e=>e?e.dataset.product:document.querySelector("form[data-product]");var ee=()=>{if(!!window.crunchMeta)return window.crunchMeta.publishedDate};var te=e=>{let t=e.querySelectorAll(".callback-form__steps");return t.length>0?t.length:1};var Ne=e=>!!e.closest(".card");var re=e=>{let t=e.pathname,r="/knowledge-",o;return e.href.substr(e.href.length-1)==="#"?o=!1:t.includes(r)&&!t.includes(`${r}category/`)&&(o=!0),o};var T=(e,t,r={})=>{let o=document.createElement(e);return Object.entries(r).forEach(([s,a])=>{if(s==="class"){o.classList.add(a);return}if(s==="dataset"){Object.entries(a).forEach(([m,f])=>{o.dataset[m]=f});return}if(s==="text"){o.textContent=a;return}if(s==="callback"){o.onload=a;return}o.setAttribute(s,a)}),t.appendChild(o),o};var q=e=>{let t=window.location.search,o=new URLSearchParams(t).get(e);return o===""&&(o=!0),o};var le=e=>{!q("debug")||e.preventDefault()};var F=()=>window.location.origin.includes("webflow.io");var N=e=>{F()&&console.log(e)};var se=()=>(document.body.classList.toggle("overflow-hidden"),!document.body.classList.contains("overflow-hidden"));var d=e=>{Object.keys(e).forEach(t=>{(e[t]===void 0||e[t]===null)&&delete e[t]}),N(e),F()||window.dataLayer.push(e)};var ce=e=>{if(!e.classList.contains("accordion__header"))return;let t={event:"accordion_expand",pageURL:p(),productName:g(),accordionTitle:$(e)};d(t)};var ie=e=>{let t={event:"cta_click",pageURL:p(),clickURL:E(e),clickText:V(e),positionOnPage:Z(e),ctaTactic:K(e)};d(t)};var R=(e,t)=>{let r={event:"form_step_load",formType:C(e),formName:k(e),pageURL:p(),productName:g(e),formStepNumber:z(t),formStep:Q(t)};d(r)};var me=e=>{let t={event:"form_submit",formType:C(e),formName:k(e),pageURL:p(),productName:g(e),formStepNumber:te(e)};d(t)};var pe=e=>{if(!re(e))return;let t=B(e),r={event:"knowledge_card_click",pageURL:p(),cardCategory:H(t),cardTitle:G(t),cardLinkClicked:W(e),cardPosition:j(t),clickURL:E(e),listType:J()};d(r)};var de=()=>{let e={event:"page_load",pageType:X(),funnelStage:Y(),productName:g(),author:I(),publishedDate:ee()};d(e)};var ue=()=>{let e=".modal__wrapper",t=".callback-form",r=`${t}__step`,o=".form__lbl-wrapper.is--error",s=`${t} .form__input`,a=`${t} .radio__group`,m=`${t} .form__radio-element`,f=`${t} .button.is--validate`,U=`${t} [data-form-el="back-button"]`,h="form__input-wrapper",b=`.${h}`,v=document.querySelectorAll(t),D=document.querySelectorAll(r),oe=document.querySelectorAll(o),A=document.querySelectorAll(s),w=document.querySelectorAll(a),Ue=document.querySelectorAll(m),De=document.querySelectorAll(f),Ce=document.querySelectorAll(U);function Me(n,l){let i=n.parentElement.querySelector(o);!i||(l?i.style.display="none":i.style.removeProperty("display"))}function Te(n){n.parentElement.querySelectorAll(o).forEach(u=>{u.style.display="none"});let x=n.querySelectorAll(b);x.length!==0&&x.forEach(u=>{u.style.display="none",u.querySelector("input").required=!1})}function ne(n,l){let i=l?"0":"1",x=l?"1":"0",u=l?"0.8":"1",c=l?"none":"auto";n.querySelector(".button__text").style.opacity=i,n.querySelector(".button__loading").style.opacity=x,n.style.opacity=u,n.style.pointerEvents=c}D.forEach(n=>{let l=n.parentElement;n!==l.firstChild&&(n.style.display="none")}),oe.forEach(n=>{n.style.display="none"}),w.forEach(n=>{Te(n)}),Ue.forEach(n=>{n.onclick=()=>{let l=n.closest(a);Te(l);let i=n.nextElementSibling;if(i===null)return!1;i.classList.contains(h)&&(i.querySelector("input").required=!0,i.style.removeProperty("display"))}});function ve(n){let l=n.checkValidity();return Me(n,l),l}function Oe(n){let l=n.querySelector('input[type="radio"]:checked'),i=n.parentElement.querySelector(o);if(l){let x=n.parentElement.querySelector(o);x.style.display="none"}else i.style.removeProperty("display");return l}A.forEach(n=>{n.addEventListener("focusout",l=>{let i=n.value.trim();n.value=i,ve(n)})}),De.forEach(n=>{n.onclick=()=>{ne(n,!0);let l=n.closest(r),i=l.querySelectorAll(s),x=l.querySelectorAll(a),u=!0;i.length!==0&&i.forEach(L=>{ve(L)||(u=!1)}),x.length!==0&&x.forEach(L=>{Oe(L)||(u=!1)});let c=n.closest("form"),ae=Array.from(c.querySelectorAll(f)),Ae=ae.indexOf(n);if(u&&Ae!==ae.length-1)l.style.display="none",l.nextElementSibling.style.removeProperty("display"),R(c,l.nextElementSibling),ne(n,!1);else if(u&&Ae===ae.length-1){console.log("has passed");let L=c.querySelectorAll(".form__checkbox-wrapper");L.length!==0&&L.forEach(S=>{let y=S.id,_=S.nextElementSibling.querySelector("input"),Be=S.querySelector('input[type="checkbox"]:checked');y!==""&&(_.id=y,_.value=Be),S.querySelector("input").id=""});let M=c.querySelectorAll(a);if(M.length!==0&&M.forEach(S=>{let y=S.querySelector(":checked"),_=S.closest(b).querySelector(".form__radio-submit input");_.id=y.dataset.name,_.name=y.dataset.name,_.value=y.value,y.removeAttribute("name"),y.removeAttribute("id"),y.removeAttribute("value")}),c.querySelector('input[name="name"]').value!=="")return c.method="get",c.submit(),!1;let $e=c.closest("[data-p-end]")?atob(c.closest("[data-p-end]").getAttribute("data-p-end")):c.action;c.method="post",c.action=c.action===window.location.href?$e:c.action;let Pe=c.querySelector('input[name="originating_form"]'),O=Pe===null?document.createElement("input"):Pe;O.setAttribute("type","hidden"),O.setAttribute("name","originating_form"),O.setAttribute("value",window.location.pathname),c.appendChild(O),me(c),c.submit()}else u||ne(n,!1)}}),Ce.length!==0&&Ce.forEach(n=>{n.onclick=()=>{let l=n.closest(r);l.style.display="none",l.previousElementSibling.style.removeProperty("display")}})};var fe=()=>{[...document.querySelectorAll(".email__form")].forEach(t=>{t.addEventListener("submit",r=>{r.preventDefault(),r.stopPropagation(),t.querySelector('input[name="name"]').value===""&&t.setAttribute("action","https://www.crunch.uk/l/264772/2021-07-22/rhnlf"),t.submit()})})};var ge=()=>{let e=[...document.querySelectorAll(".accordions")];if(!e||e.length===0)return;e.forEach(r=>{var o;r.classList.contains("is--experts")||(o=r.firstElementChild)==null||o.classList.add("is--active")});let t=[...document.querySelectorAll(".accordion__header")];!t||t.length===0||t.forEach(r=>{r.onclick=()=>{let o=r.closest(".accordions");if(!o)return;let s=o.querySelector(".is--active");if(!s)return;let a=r.closest(".accordion__item");!a||(s&&s!==a&&s.classList.remove("is--active"),a.classList.toggle("is--active"))}})};var xe=()=>{let e=[...document.querySelectorAll(".card__link")];!e||e.length===0||e.forEach(t=>{if(!t)return;let r=t.textContent;[...t.closest(".card").querySelectorAll("a")].forEach(s=>{(s.getAttribute("href")==="#"||s.getAttribute("href")==="")&&s.setAttribute("href",r)})})};var ye=(e,t)=>(Array.isArray(t)||(t=[t]),t.map(o=>e.dispatchEvent(new Event(o,{bubbles:!0}))).every(o=>o));var Re=new Map([["tiny","(max-width: 479px)"],["small","(max-width: 767px)"],["medium","(max-width: 991px)"],["main","(min-width: 992px)"]]);var he=()=>{for(let[e,t]of Re)if(window.matchMedia(t).matches)return e;return"main"};var Se=()=>{let e=document.querySelector(".nav__menu"),t=()=>{e.style.height=`${window.innerHeight}px`,e.style.minHeight=`${window.innerHeight}px`},r=()=>{e.style.removeProperty("height"),e.style.removeProperty("min-height")},o=()=>{he()==="main"?(r(),window.removeEventListener("scroll",t)):(t(),window.addEventListener("scroll",t))};o(),window.addEventListener("resize",o)};var be=e=>{let a=new Date(e.getAttribute("data-countdown-end")).getTime(),m="data-countdown-value",f=e.querySelector(`[${m}="seconds"]`),U=e.querySelector(`[${m}="minutes"]`),h=e.querySelector(`[${m}="hours"]`),b=e.querySelector(`[${m}="days"]`),v=A=>A.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),D=()=>{let A=new Date().getTime(),w=a-A;b.innerText=v(Math.floor(w/864e5)),h.innerText=v(Math.floor(w%864e5/36e5)),U.innerText=v(Math.floor(w%36e5/6e4)),f.innerText=v(Math.floor(w%6e4/1e3))},oe=()=>{e.closest('[data-countdown="hide"]').style.opacity="1"};D(),oe(),setInterval(D,1e3)};var we=()=>{let e=document.querySelector(".fab__wrapper");[...document.querySelectorAll(".fab, .fab__close, .fab__item")].forEach(r=>{r.addEventListener("click",()=>{e.classList.toggle("is--open")})})};var Le=()=>{[...document.querySelectorAll("a")].forEach(t=>{(location.hostname!==t.hostname||!t.hostname.length)&&t.setAttribute("rel","noopener")})};var _e=()=>{let e=q("tab");if(!e)return;let t=document.querySelector(`#${e}`);ye(t,"click")};var Ee=()=>{[...document.querySelectorAll(".splide")].forEach(t=>{new Splide(t,{perPage:3,perMove:1,focus:"center",type:"loop",gap:"4em",arrows:!1,speed:350,dragAngleThreshold:30,rewindSpeed:700,breakpoints:{991:{perPage:2},767:{perPage:1}}}).mount()})};var ke=()=>{let e=[...document.querySelectorAll(".trustpilot__review")];if(!e||e.length===0)return;let t=(r,o)=>{if(!r||!o)return;let s=r.classList.contains("line-clamp3")?"Less":"More";r.classList.toggle("line-clamp3"),o.textContent=s};e.forEach(r=>{var m;if(!r)return;let o=(m=r==null?void 0:r.parentElement)==null?void 0:m.querySelector(".trustpilot__more");if(!o)return;let s=r.offsetHeight;r.classList.add("line-clamp3");let a=r.offsetHeight;s===a?o.classList.add("is--hidden"):(o.classList.remove("is--hidden"),o.addEventListener("click",()=>{t(r,o)}))})};window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{let e=(()=>{N("index.ts"),window.dataLayer=window.dataLayer||[],de(),[...document.querySelectorAll("a")].forEach(a=>{a.addEventListener("click",m=>{le(m),ie(a),pe(a),ce(a)})}),ge(),xe(),Se(),[...document.querySelectorAll('[data-countdown="wrapper"]')].forEach(a=>{be(a)}),we(),Le(),_e(),document.querySelector(".splide")&&(T("link",document.head,{href:"https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/css/splide.min.css",rel:"stylesheet"}),T("style",document.head,{text:".splide__pagination__page{background:#BFC6CB!important;width:10px;height:10px}.splide__pagination__page.is-active{background:#FC125E!important;transform:scale(1)}"}),T("script",document.body,{src:"https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/js/splide.min.js",callback:Ee})),[{selector:".is--callback",formSelector:".modal__wrapper.is--main form"},{selector:".is--sub-callback",formSelector:".modal__wrapper.is--sub form"},{selector:".is--footer-callback",formSelector:".modal__wrapper.is--footer form"},{selector:".modal__close"},{selector:".modal__x"}].forEach(a=>{[...document.querySelectorAll(a.selector)].forEach(f=>{f.onclick=()=>{if(se())return;let h=document.querySelector(a.formSelector),b=P.getCurrentFormStep(h);R(h,b)}})}),ke(),ue(),fe()})()});})();
