!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);r(1);var n=document.querySelector(".player"),a=n.querySelector(".player-video"),i=n.querySelector(".player-video__overlay"),o=n.querySelector(".progress"),l=n.querySelector(".filled-progress"),u=n.querySelector(".toggle-play"),c=n.querySelectorAll("[data-skip]"),s=n.querySelector(".player-slider"),d=n.querySelector(".toggle-volume");function v(){var e=a.paused?"play":"pause";a[e]()}function f(){var e=document.querySelector(".toggle-play");this.paused?e.innerHTML='<svg class="" width="16" height="16" viewBox="0 0 16 16"><title>play</title><path d="M3 2l10 6-10 6z"></path></svg>':e.innerHTML='<svg width="16" height="16" viewBox="0 0 16 16"><title>pause</title><path d="M2 2h5v12H2zm7 0h5v12H9z"></path></svg>'}function p(e){a.currentTime+=parseFloat(this.dataset.skip),e.target.classList.toggle("btn-skip_active"),setTimeout((function(){return e.target.classList.toggle("btn-skip_active")}),1e3)}function h(){a[this.name]=this.value}function g(e){var t=e.offsetX/o.offsetWidth*a.duration;a.currentTime=t}a.addEventListener("click",v),a.addEventListener("play",f),a.addEventListener("pause",f),a.addEventListener("timeupdate",(function(){var e=a.currentTime/a.duration*100;l.style.flexBasis="".concat(e,"%");var t=Math.floor(a.currentTime/60/60),r=Math.floor(a.currentTime/60-60*t),n=Math.floor(a.currentTime%60);l.dataset.progress="".concat(t,":").concat(r,":").concat(n)})),a.addEventListener("volumechange",(function(){a.muted?d.innerHTML='<svg  width="16" height="16" fill="currentColor" class=" viewBox="0 0 16 16">\n        <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96V5.04zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>\n      </svg>':d.innerHTML='<svg width="16" height="16" fill="currentColor" class="" viewBox="0 0 16 16">\n        <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>\n        <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>\n        <path d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z"/>\n      </svg>'})),u.addEventListener("click",v),c.forEach((function(e){return e.addEventListener("dblclick",p)})),s.addEventListener("change",h),s.addEventListener("mousemove",h),d.addEventListener("click",(function(){a.muted=!a.muted}));var y,m=!1;o.addEventListener("click",g),o.addEventListener("mousemove",(function(e){return m&&g(e)})),o.addEventListener("mousedown",(function(){return m=!0})),o.addEventListener("mouseup",(function(){return m=!1})),y=setInterval((function(){a.readyState>=3&&(clearInterval(y),i.classList.toggle("player-video__overlay_hide"))}),500)},function(e,t,r){}]);