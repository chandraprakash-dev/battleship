!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){const o=n(2);e.exports=function(){const e=[],t=[];for(let t=0;t<100;t++)e.push(void 0);return{board:e,ships:t,placeShip:n=>{if(n.every(t=>void 0===e[t])&&function(e){let t=!0;for(let n=1;n<e.length;n++)if(e[n]-e[n-1]!=1){t=!1;break}let n=!0;for(let t=1;t<e.length;t++)if(e[t]-e[t-1]!=10){n=!1;break}return t||n}(n)){const r=o(n);let c=t.length;n.forEach(t=>e[t]=c),t.push(r)}else console.log("one or more positions are occupied")},receiveAttack:n=>{if(void 0===e[n])e[n]="miss";else if("miss"!==e[n]&&"hit"!==e[n]){const o=e[n];t[o].hit(n),e[n]="hit"}},allShipsSunk:()=>t.every(e=>e.isSunk())}}},function(e,t,n){n(0);e.exports=function(){return{attack:(e,t)=>{e.receiveAttack(t)}}}},function(e,t){e.exports=function(e){const t={};return e.forEach(e=>t[e]=1),{hit:e=>{t[e]=0},isSunk:()=>Object.values(t).every(e=>0===e)}}},function(e,t,n){"use strict";n.r(t),n.d(t,"computerBoard",(function(){return f})),n.d(t,"humanBoard",(function(){return p}));var o=n(0),r=n.n(o);var c=function(e,t,n){const o=document.createElement("div");o.classList.add("board"),o.id=n,t.forEach((e,t=0)=>{const n=document.createElement("div");n.classList.add("cell"),n.setAttribute("data-key",t),"number"==typeof e&&n.classList.add("present"),o.appendChild(n)}),e.appendChild(o)},i=n(1),a=n.n(i);const u=a()(),l=a()();function s(e,t,n,o){e.attack(t,o);const r=t.board[o];"miss"===r?n.classList.add("miss"):"hit"===r&&n.classList.add("hit")}var d=function(e){if(p.allShipsSunk()||f.allShipsSunk()){const e=f.allShipsSunk()?"human":"computer";return void console.log("winner is "+e)}let t=e.target,n=t.getAttribute("data-key");s(u,f,t,n);const o=document.querySelector("#humanBoard");n=Math.round(100*Math.random()),t=o.querySelector(`div[data-key="${n}"]`),s(l,p,t,n)};const p=r()(),f=r()();console.log("human, place your ships"),p.placeShip([1,2,3]),p.placeShip([10,20,30]),p.placeShip([50]),f.placeShip([1]),f.placeShip([10,11]),f.placeShip([90,91,92]),console.log(p),console.log(f);const h=document.querySelector("#humanBoardContainer"),m=document.querySelector("#computerBoardContainer");c(h,p.board,"humanBoard"),c(m,f.board,"computerBoard");m.querySelector("#computerBoard").addEventListener("click",d)}]);