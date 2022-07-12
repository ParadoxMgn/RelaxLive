(()=>{"use strict";const e=({timing:e,draw:t,duration:o})=>{let r=performance.now();requestAnimationFrame((function s(l){let n=(l-r)/o;n>1&&(n=1);let a=e(n);t(a),n<1&&requestAnimationFrame(s)}))},t=e=>{let t=!0;return e.forEach((o=>{""===o.value.trim()&&o.setCustomValidity("Поле не должно быть пустым!"),"tel"===o.type&&""!==o.value.trim()&&(e=>{let t=0,o=0,r=[];return r=e.value.split(""),r.forEach(((e,r)=>{/[0-9]/.test(e)&&t++,t<=13&&(o=r+1)})),e.value=r.join("").slice(0,o),t<11})(o)&&o.setCustomValidity("Номер телефона должен быть не меньше 11 цифр!"),o.addEventListener("invalid",(()=>{o.style.border="2px solid red"})),"checkbox"===o.type||o.checkValidity()||(t=!1),o.addEventListener("input",(t=>{e.forEach((e=>{t.target===e&&"checkbox"!==t.target.type&&(e.setCustomValidity(""),e.style.border="none")}))}))})),t};(()=>{const e=document.querySelector(".header-contacts__arrow"),t=document.querySelector(".header-contacts__phone-number-accord"),o=t.querySelector(".header-contacts__phone-number");e.addEventListener("click",(r=>{r.target.closest(".header-contacts__arrow")&&!e.dataset.key?(e.dataset.key="1",e.querySelector("img").style.margin="12px 5px",e.style.transform="rotate(180deg)",t.style.top="30px",o.style.opacity="1"):(e.removeAttribute("data-key"),e.style.transform="rotate(0deg)",t.style.top="0",o.style.opacity="0")}))})(),(()=>{const e=document.querySelector(".popup-dialog-menu");document.addEventListener("click",(t=>{t.target.closest(".menu__icon")?(e.style.transform="translate3d(0, 0, 0)",document.body.style.overflow="hidden"):((t.target.closest(".close-menu")||t.target.closest(".menu-link")||!t.target.closest(".popup-dialog-menu"))&&document.documentElement.clientWidth>=576&&(e.style.transform="translate3d(645px, 0, 0)",document.body.style.overflow="auto"),(t.target.closest(".close-menu")||t.target.closest(".menu-link")||!t.target.closest(".popup-dialog-menu"))&&document.documentElement.clientWidth<576&&(e.style.transform="translate3d(0, -100vh, 0)",document.body.style.overflow="auto"))})),window.addEventListener("resize",(()=>{document.documentElement.clientWidth<576?e.style.transform="translate3d(0, -100vh, 0)":e.style.transform="translate3d(645px, 0, 0)"}))})(),document.addEventListener("click",(t=>{let o=document.documentElement.scrollTop;if(t.target.closest(".menu-link")&&!t.target.closest(".no-overflow")){const r=t.target.href.slice(t.target.href.lastIndexOf("#")+1),s=document.getElementById(r),l=s.offsetTop<3e3?s.offsetTop/4:s.offsetTop/6;e({duration:l,timing:e=>e,draw(e){document.documentElement.scrollTop=o+e*(s.offsetTop-o)}})}t.target.closest(".button-footer")&&e({duration:1500,timing:e=>e,draw(e){document.documentElement.scrollTop=(1-e)*o}})})),(()=>{const t=document.querySelector(".popup-repair-types"),o=document.querySelector(".popup-dialog-repair-types");document.addEventListener("click",(r=>{(r.target.closest(".popup-repair-types .close")||r.target===t)&&(t.style.visibility="hidden",document.body.style.overflow="auto"),(r.target.closest(".no-overflow")||r.target.closest(".link-list-repair a"))&&(t.style.visibility="visible",document.body.style.overflow="hidden",o.style.opacity="0",e({duration:500,timing:e=>e,draw(e){o.style.opacity=e}}))}))})(),(()=>{const e=document.querySelectorAll("input[name=phone]"),t=function(e){const t=e.keyCode,o="+7 (___) ___-__-__",r=o.replace(/\D/g,""),s=this.value.replace(/\D/g,"");let l=0,n=o.replace(/[_\d]/g,(e=>l<s.length?s.charAt(l++)||r.charAt(l):e));l=n.indexOf("_"),-1!==l&&(n=n.slice(0,l));let a=o.substr(0,this.value.length).replace(/_+/g,(e=>"\\d{1,"+e.length+"}")).replace(/[+()]/g,"\\$&");a=new RegExp("^"+a+"$"),(!a.test(this.value)||this.value.length<5||t>47&&t<58)&&(this.value=n),"blur"===e.type&&this.value.length<5&&(this.value="")};for(const o of e)o.addEventListener("input",t),o.addEventListener("focus",t),o.addEventListener("blur",t)})(),(()=>{const e=document.querySelector(".repair-types"),t=e.querySelector(".nav-list-repair"),o=document.querySelectorAll(".repair-types-nav__item"),r=document.querySelectorAll(".types-repair"),s=document.querySelector(".slider-counter-content__current"),l=document.querySelector(".slider-counter-content__total");let n,a=0,c=0,i=0,d=0,u=0;const y=e=>{e.hasAttribute("data-key")&&(n=e.querySelectorAll(".repair-types-slider__slide"),l.textContent=n.length,n.forEach(((e,t)=>{e.style.display=t?"none":"block"})))},m=(e,t,o,r,s)=>{e.forEach((e=>{e.style.display="none"})),c+=o,c===r?(c=s,e[c].style.display="block",t.textContent=c+1):(e[c].style.display="block",t.textContent=c+1)},p=(e,t,o,r)=>{let s=getComputedStyle(e);r.classList.contains("repair-types-nav__item-1")&&(a=0,o.style.transform=`translateX(${a}px)`),r.classList.contains("repair-types-nav__item-5")&&(a=-839,o.style.transform=`translateX(${a}px)`),r.classList.contains("repair-types-nav__item-1")||r.classList.contains("repair-types-nav__item-5")||(a+=(+s.width.slice(0,-2)+12)*t,o.style.transform=`translateX(${a}px)`)},h=(e,l,n,y,m,p)=>{if(o.forEach(((e,t)=>{e.classList.remove("active"),r[t].removeAttribute("data-key"),r[t].style.display="none"})),i+=e,i===l)i=n,r[i].style.display="block",a=y;else{let e=getComputedStyle(o[i+p]);a+=(+e.width.slice(0,-2)+12)*m}0===i&&(a=0),5===i&&(a=-839),t.style.transform=`translateX(${a}px)`,o[i].classList.add("active"),r[i].dataset.key="",r[i].style.display="block",s.textContent=1,c=0,d=u,u=i};r.forEach(((e,t)=>{t?e.style.display="none":(e.style.display="block",e.dataset.key=""),y(e)})),e.addEventListener("click",(e=>{e.target.closest(".repair-types-nav__item")&&(o.forEach(((s,l)=>{s.classList.remove("active"),r[l].removeAttribute("data-key"),r[l].style.display="none",e.target===s&&(s.classList.add("active"),r[l].dataset.key="",r[l].style.display="block",c=0,i=l,d=u,u=l,document.documentElement.clientWidth<=1024&&u>d&&p(o[i-1],-1,t,e.target),document.documentElement.clientWidth<=1024&&u<d&&p(o[i],1,t,e.target))})),s.textContent=1),document.documentElement.clientWidth<=1024&&(e.target.closest(".nav-arrow_right")&&h(1,o.length,0,0,-1,-1),e.target.closest(".nav-arrow_left")&&h(-1,-1,o.length-1,-839,1,0)),r.forEach((e=>y(e))),e.target.closest(".slider-arrow_right")&&m(n,s,1,n.length,0),e.target.closest(".slider-arrow_left")&&m(n,s,-1,-1,n.length-1)}))})(),(()=>{const e=document.querySelectorAll("form"),o=e=>{const o=e.querySelectorAll("input"),r=e.querySelector("button"),s=e.querySelector(".checkbox__input");s.removeAttribute("required");try{if(!e)throw new Error("Форма не найдена!");e.addEventListener("click",(e=>{e.target==r&&t(o),e.target.closest(".checkbox__input")&&(s.checked=!!s.checked)})),e.addEventListener("submit",(r=>{r.preventDefault(),(e=>{const r=new FormData(e),l={};var n;r.forEach(((e,t)=>{e&&(l[t]=e)})),t(o)&&(s.checked?(n={formBody:l},fetch("https://jsonplaceholder.typicode.com/todos/",{method:"POST",body:JSON.stringify(n),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((e=>e.json()))).then((t=>{e.reset()})).catch((e=>{alert(e)})):alert("Нужно согласиться с политикой конфиденциальности"))})(e)}))}catch(e){alert(e.message)}};e.forEach((e=>{o(e)}))})()})();