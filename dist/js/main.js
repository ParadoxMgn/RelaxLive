(()=>{"use strict";const e=({timing:e,draw:t,duration:o})=>{let r=performance.now();requestAnimationFrame((function l(n){let s=(n-r)/o;s>1&&(s=1);let a=e(s);t(a),s<1&&requestAnimationFrame(l)}))},t=(t=!1,o="")=>{const r=document.querySelector(".popup-portfolio-slider-wrap"),l=document.querySelector(".portfolio-slider"),n=r.querySelector(".slider-counter-content__total"),s=r.querySelectorAll(".popup-portfolio-slider__slide"),a=r.querySelector(".slider-counter-content__current"),c=document.querySelectorAll(".popup-portfolio-text");let i;const d=(t,o,r,d)=>{(t.target.closest(`${o} .close`)||t.target===document.querySelector(o))&&(document.querySelector(o).style.visibility="hidden",document.body.style.overflow="auto"),d.forEach((l=>{t.target.closest(l)&&(document.querySelector(o).style.visibility="visible",document.body.style.overflow="hidden",document.querySelector(r).style.opacity="0",e({duration:500,timing:e=>e,draw(e){document.querySelector(r).style.opacity=e}}))})),".popup-portfolio"===o&&(l.querySelectorAll(".portfolio-slider__slide-frame").forEach(((e,o)=>{t.target===e&&(i=o)})),s.forEach(((e,t)=>{e.dataset.key=t+1,t===i?(n.textContent=s.length,a.textContent=t,e.style.display="block",c[t].style.display="block"):(e.style.display="none",c[t].style.display="none")})))};t&&d(o,".popup-thank",".popup-thank-bg",["form"]),document.addEventListener("click",(e=>{d(e,".popup-repair-types",".popup-dialog-repair-types",[".no-overflow",".link-list-repair a"]),d(e,".popup-portfolio",".popup-dialog-portfolio",[".portfolio-slider__slide-frame"]),d(e,".popup-privacy",".popup-dialog-privacy",[".link-privacy"]),d(e,".popup-transparency",".popup-dialog-transparency",[".transparency-item"]),d(e,".popup-consultation",".popup-consultation .feedback-wrap",[".button_wide"]),d(e,".popup-thank",".popup-thank-bg",[])}))},o=e=>{let t=!0;return e.forEach((o=>{""===o.value.trim()&&o.setCustomValidity("Поле не должно быть пустым!"),"tel"===o.type&&""!==o.value.trim()&&(e=>{let t=0,o=0,r=[];return r=e.value.split(""),r.forEach(((e,r)=>{/[0-9]/.test(e)&&t++,t<=13&&(o=r+1)})),e.value=r.join("").slice(0,o),t<11})(o)&&o.setCustomValidity("Номер телефона должен быть не меньше 11 цифр!"),o.addEventListener("invalid",(()=>{o.style.borderBottom="3px solid red"})),"checkbox"===o.type||o.checkValidity()||(t=!1),o.addEventListener("input",(t=>{e.forEach((e=>{t.target===e&&"checkbox"!==t.target.type&&(e.setCustomValidity(""),e.style.borderBottom="3px solid rgba(50, 40, 35, 0.7)")}))}))})),t};(()=>{const e=document.querySelector(".header-contacts__arrow"),t=document.querySelector(".header-contacts__phone-number-accord"),o=t.querySelector(".header-contacts__phone-number");e.addEventListener("click",(r=>{r.target.closest(".header-contacts__arrow")&&!e.dataset.key?(e.dataset.key="1",e.querySelector("img").style.margin="12px 5px",e.style.transform="rotate(180deg)",t.style.top="30px",o.style.opacity="1"):(e.removeAttribute("data-key"),e.style.transform="rotate(0deg)",t.style.top="0",o.style.opacity="0")}))})(),(()=>{const e=document.querySelector(".popup-dialog-menu");document.addEventListener("click",(t=>{t.target.closest(".menu__icon")?(e.style.transform="translate3d(0, 0, 0)",e.dataset.openpopup=""):((t.target.closest(".close-menu")||t.target.closest(".menu-link")||!t.target.closest(".popup-dialog-menu"))&&document.documentElement.clientWidth>=576&&e.hasAttribute("data-openpopup")&&(e.style.transform="translate3d(645px, 0, 0)",e.removeAttribute("data-openpopup")),(t.target.closest(".close-menu")||t.target.closest(".menu-link")||!t.target.closest(".popup-dialog-menu"))&&document.documentElement.clientWidth<576&&e.hasAttribute("data-openpopup")&&(e.style.transform="translate3d(0, -100vh, 0)",e.removeAttribute("data-openpopup")))})),window.addEventListener("resize",(()=>{document.documentElement.clientWidth<576?e.style.transform="translate3d(0, -100vh, 0)":e.style.transform="translate3d(645px, 0, 0)"}))})(),document.addEventListener("click",(t=>{let o=document.documentElement.scrollTop;if(t.target.closest(".menu-link")&&!t.target.closest(".no-overflow")){t.preventDefault();const r=t.target.href.slice(t.target.href.lastIndexOf("#")+1),l=document.getElementById(r),n=l.offsetTop<3e3?l.offsetTop/4:l.offsetTop/6;e({duration:n,timing:e=>e,draw(e){document.documentElement.scrollTop=o+e*(l.offsetTop-o)}})}t.target.closest(".button-footer")&&(t.preventDefault(),e({duration:1500,timing:e=>e,draw(e){document.documentElement.scrollTop=(1-e)*o}}))})),t(),(()=>{const e=document.querySelectorAll("input[name=phone]"),t=function(e){const t=e.keyCode,o="+7 (___) ___-__-__",r=o.replace(/\D/g,""),l=this.value.replace(/\D/g,"");let n=0,s=o.replace(/[_\d]/g,(e=>n<l.length?l.charAt(n++)||r.charAt(n):e));n=s.indexOf("_"),-1!==n&&(s=s.slice(0,n));let a=o.substr(0,this.value.length).replace(/_+/g,(e=>"\\d{1,"+e.length+"}")).replace(/[+()]/g,"\\$&");a=new RegExp("^"+a+"$"),(!a.test(this.value)||this.value.length<5||t>47&&t<58)&&(this.value=s),"blur"===e.type&&this.value.length<5&&(this.value="")};for(const o of e)o.addEventListener("input",t),o.addEventListener("focus",t),o.addEventListener("blur",t)})(),(()=>{const e=document.querySelector(".repair-types"),t=e.querySelector(".nav-list-repair"),o=document.querySelectorAll(".repair-types-nav__item"),r=document.querySelectorAll(".types-repair"),l=document.querySelector(".slider-counter-content__current"),n=document.querySelector(".slider-counter-content__total");let s,a=0,c=0,i=0,d=0,p=0;const u=e=>{e.hasAttribute("data-key")&&(s=e.querySelectorAll(".repair-types-slider__slide"),n.textContent=s.length,s.forEach(((e,t)=>{e.style.display=t?"none":"block"})))},y=(e,t,o,r,l)=>{e.forEach((e=>{e.style.display="none"})),c+=o,c===r?(c=l,e[c].style.display="block",t.textContent=c+1):(e[c].style.display="block",t.textContent=c+1)},m=(e,t,o,r)=>{let l=getComputedStyle(e);r.classList.contains("repair-types-nav__item-1")&&(a=0,o.style.transform=`translateX(${a}px)`),r.classList.contains("repair-types-nav__item-5")&&(a=-839,o.style.transform=`translateX(${a}px)`),r.classList.contains("repair-types-nav__item-1")||r.classList.contains("repair-types-nav__item-5")||(a+=(+l.width.slice(0,-2)+12)*t,o.style.transform=`translateX(${a}px)`)},h=(e,n,s,u,y,m)=>{if(o.forEach(((e,t)=>{e.classList.remove("active"),r[t].removeAttribute("data-key"),r[t].style.display="none"})),i+=e,i===n)i=s,r[i].style.display="block",a=u;else{let e=getComputedStyle(o[i+m]);a+=(+e.width.slice(0,-2)+12)*y}0===i&&(a=0),5===i&&(a=-839),t.style.transform=`translateX(${a}px)`,o[i].classList.add("active"),r[i].dataset.key="",r[i].style.display="block",l.textContent=1,c=0,d=p,p=i};r.forEach(((e,t)=>{t?e.style.display="none":(e.style.display="block",e.dataset.key=""),u(e)})),e.addEventListener("click",(e=>{e.target.closest(".repair-types-nav__item")&&(o.forEach(((l,n)=>{l.classList.remove("active"),r[n].removeAttribute("data-key"),r[n].style.display="none",e.target===l&&(l.classList.add("active"),r[n].dataset.key="",r[n].style.display="block",c=0,i=n,d=p,p=n,document.documentElement.clientWidth<=1024&&p>d&&m(o[i-1],-1,t,e.target),document.documentElement.clientWidth<=1024&&p<d&&m(o[i],1,t,e.target))})),l.textContent=1),document.documentElement.clientWidth<=1024&&(e.target.closest(".nav-arrow_right")&&h(1,o.length,0,0,-1,-1),e.target.closest(".nav-arrow_left")&&h(-1,-1,o.length-1,-839,1,0)),r.forEach((e=>u(e))),e.target.closest(".slider-arrow_right")&&y(s,l,1,s.length,0),e.target.closest(".slider-arrow_left")&&y(s,l,-1,-1,s.length-1)}))})(),(()=>{const e=document.querySelectorAll("form"),r=e=>{const r=e.querySelectorAll("input"),l=e.querySelector("button"),n=e.querySelector(".checkbox__input"),s=e.querySelector(".checkbox"),a=e.querySelector(".checkbox__label");n.removeAttribute("required");try{if(!e)throw new Error("Форма не найдена!");e.addEventListener("click",(e=>{e.target==l&&o(r),e.target.closest(".checkbox__input")&&(n.checked=!!n.checked,a.style.border="1px solid #322823",s.style.borderBottom="none")})),e.addEventListener("submit",(l=>{l.preventDefault(),((e,l)=>{const c=new FormData(e),i={};var d;c.forEach(((e,t)=>{e&&(i[t]=e)})),o(r)&&(n.checked?(d={formBody:i},fetch("https://jsonplaceholder.typicode.com/todos/",{method:"POST",body:JSON.stringify(d),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((e=>e.json()))).then((()=>{e.reset(),document.querySelector(".popup-consultation").style.visibility="hidden",document.body.style.overflow="auto",t(!0,l)})).catch((e=>{alert(e)})):(s.style.borderBottom="2px solid red",a.style.border="2px solid red"))})(e,l)}))}catch(e){alert(e.message)}};e.forEach((e=>{r(e)}))})(),(()=>{const t=document.querySelector(".portfolio"),o=t.querySelectorAll(".portfolio-slider__slide"),r=t.querySelector(".slider-arrow_right-portfolio"),l=t.querySelector(".slider-arrow_left-portfolio");let n=0;const s=e=>{n===e&&(r.style.display="none"),n!==e&&0!==n&&(l.style.display="flex",r.style.display="flex"),0===n&&(l.style.display="none")};window.addEventListener("resize",(()=>{o.forEach((e=>{e.style.transform="translateX(0)",n=0,l.style.display="none",r.style.display="flex"}))}));const a=(t,o)=>{n="right"===o?--n:++n,document.documentElement.clientWidth>=576&&document.documentElement.clientWidth<=900&&s(-4),document.documentElement.clientWidth>=901&&document.documentElement.clientWidth<=1024&&s(-3),document.documentElement.clientWidth>=1025&&s(-2),document.documentElement.clientWidth<576&&(r.style.display="none",l.style.display="none"),t.forEach((t=>{e({duration:500,timing:e=>e,draw(e){"right"===o&&(t.style.transform=`translateX(${352*(n+1)+(352*n-352*(n+1))*e}px)`,console.log(t.style.transform)),"left"===o&&(t.style.transform=`translateX(${352*n+(352*(n-1)-352*n)*(1-e)}px)`)}})}))};t.addEventListener("click",(e=>{e.target.closest(".slider-arrow_right-portfolio")&&a(o,"right"),e.target.closest(".slider-arrow_left-portfolio")&&a(o,"left")}))})(),(()=>{const e=document.querySelector(".popup-portfolio-slider-wrap"),t=e.querySelectorAll(".popup-portfolio-slider__slide"),o=e.querySelector(".slider-counter-content__current"),r=document.querySelectorAll(".popup-portfolio-text");let l=0;const n=(e,t,o,r,n)=>{e.forEach((e=>{e.style.display="none"})),l+=o,l===r?(l=n,e[l].style.display="block",t.textContent=l+1):(e[l].style.display="block",t.textContent=l+1)};e.addEventListener("click",(e=>{e.target.closest(".popup-arrow_right")&&(n(t,o,1,t.length,0),n(r,o,1,r.length,0)),e.target.closest(".popup-arrow_left")&&(n(t,o,-1,-1,t.length-1),n(r,o,-1,-1,r.length-1))}))})(),(()=>{const e=document.querySelector(".accordion"),t=e.querySelectorAll("li"),o=e.querySelectorAll("h2");e.addEventListener("click",(e=>{t.forEach(((t,r)=>{e.target.closest(".accordion li")===t?o[r].classList.toggle("msg-active"):o[r].classList.remove("msg-active")}))}))})(),fetch("./db/db.json").then((e=>e.json())).then((e=>(e=>{const t=document.querySelector(".nav-list-popup-repair"),o=document.querySelector(".popup-repair-types-content-table__list").querySelector("tbody"),r=document.querySelector(".popup-repair-types-content__head-title"),l=(e,t="Потолок: Демонтажные работы")=>{o.innerHTML="",r.textContent=t,e.forEach((e=>{e.type===t&&o.insertAdjacentHTML("beforeend",`<tr class="mobile-row">\n             <td class="repair-types-name">${e.name}</td>\n             <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>\n             <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>\n             <td class="repair-types-value">${"м2"===e.units?e.units[0]+"<sup>"+e.units[1]:e.units}</td >\n             <td class="repair-types-value">${e.cost} руб.</td>\n           </tr > `)}))};l(e),t.addEventListener("click",(t=>{t.preventDefault(),l(e,t.target.textContent)}))})(e))).catch((e=>console.log(e))),(()=>{const e=document.querySelector(".formula"),t=e.querySelectorAll(".formula-item__icon"),o=e.querySelectorAll(".formula-item-popup");e.addEventListener("mouseover",(e=>{t.forEach(((t,r)=>{t===e.target.closest(".formula-item__icon")&&(o[r].style.visibility="visible",o[r].style.opacity=1)}))})),e.addEventListener("mouseout",(e=>{t.forEach(((t,r)=>{t===e.target.closest(".formula-item__icon")&&(o[r].style.visibility="hidden",o[r].style.opacity=0)}))}))})()})();