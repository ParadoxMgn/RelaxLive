(()=>{"use strict";(()=>{const e=document.querySelector(".popup-dialog-menu");window.addEventListener("resize",(()=>{document.documentElement.clientWidth<576?e.style.transform="translate3d(0, -100vh, 0)":e.style.transform="translate3d(645px, 0, 0)"})),document.addEventListener("click",(e=>{e.target.closest(".header-contacts__arrow")&&(e=>{const t=document.querySelector(".header-contacts__arrow"),o=document.querySelector(".header-contacts__phone-number-accord"),n=o.querySelector(".header-contacts__phone-number");e.closest(".header-contacts__arrow")&&!t.dataset.key?(t.dataset.key="1",t.querySelector("img").style.margin="12px 5px",t.style.transform="rotate(180deg)",o.style.top="30px",n.style.opacity="1"):(t.removeAttribute("data-key"),t.style.transform="rotate(0deg)",o.style.top="0",n.style.opacity="0")})(e.target),(e.target.closest(".menu__icon")||e.target.closest(".close-menu")||e.target.closest(".menu-link"))&&(e=>{const t=document.querySelector(".popup-dialog-menu");e.closest(".menu__icon")&&(t.style.transform="translate3d(0, 0, 0)"),(e.closest(".close-menu")||e.closest(".menu-link"))&&document.documentElement.clientWidth>=576&&(t.style.transform="translate3d(645px, 0, 0)"),(e.closest(".close-menu")||e.closest(".menu-link"))&&document.documentElement.clientWidth<576&&(t.style.transform="translate3d(0, -100vh, 0)")})(e.target)}))})()})();