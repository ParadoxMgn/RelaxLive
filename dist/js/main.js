(()=>{"use strict";const e=({timing:e,draw:t,duration:o})=>{let n=performance.now();requestAnimationFrame((function r(s){let c=(s-n)/o;c>1&&(c=1);let l=e(c);t(l),c<1&&requestAnimationFrame(r)}))};(()=>{const t=document.querySelector(".popup-dialog-menu");window.addEventListener("resize",(()=>{document.documentElement.clientWidth<576?t.style.transform="translate3d(0, -100vh, 0)":t.style.transform="translate3d(645px, 0, 0)"})),document.addEventListener("click",(t=>{t.preventDefault(),t.target.closest(".header-contacts__arrow")&&(e=>{const t=document.querySelector(".header-contacts__arrow"),o=document.querySelector(".header-contacts__phone-number-accord"),n=o.querySelector(".header-contacts__phone-number");e.closest(".header-contacts__arrow")&&!t.dataset.key?(t.dataset.key="1",t.querySelector("img").style.margin="12px 5px",t.style.transform="rotate(180deg)",o.style.top="30px",n.style.opacity="1"):(t.removeAttribute("data-key"),t.style.transform="rotate(0deg)",o.style.top="0",n.style.opacity="0")})(t.target),(t.target.closest(".menu__icon")||t.target.closest(".close-menu")||t.target.closest(".menu-link"))&&(e=>{const t=document.querySelector(".popup-dialog-menu");e.closest(".menu__icon")&&(t.style.transform="translate3d(0, 0, 0)"),(e.closest(".close-menu")||e.closest(".menu-link"))&&document.documentElement.clientWidth>=576&&(t.style.transform="translate3d(645px, 0, 0)"),(e.closest(".close-menu")||e.closest(".menu-link"))&&document.documentElement.clientWidth<576&&(t.style.transform="translate3d(0, -100vh, 0)")})(t.target),(t.target.closest(".menu-link")||t.target.closest(".button-footer"))&&(t=>{let o=document.documentElement.scrollTop;if(!t.closest(".no-overflow")&&!t.closest(".button-footer")){const n=t.href.slice(t.href.lastIndexOf("#")+1),r=document.getElementById(n),s=r.offsetTop<3e3?r.offsetTop/4:r.offsetTop/6;e({duration:s,timing:e=>e,draw(e){document.documentElement.scrollTop=o+e*(r.offsetTop-o)}})}t.closest(".button-footer")&&e({duration:1500,timing:e=>e,draw(e){document.documentElement.scrollTop=(1-e)*o}})})(t.target)}))})()})();