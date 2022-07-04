(()=>{"use strict";var e={669:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(645),r=t.n(o)()((function(e){return e[1]}));r.push([e.id,".news__item {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem auto;\n    margin-bottom: 1.6%;\n    background: #fff;\n    color: #333;\n    line-height: 1.4;\n    font-family: Arial, sans-serif;\n    border-radius: 5px;\n    overflow: hidden;\n}\n\n.news__item:hover .news__meta-photo {\n    transform: scale(1.3) rotate(3deg);\n}\n\n.news__item .news__meta {\n    position: relative;\n    height: 200px;\n}\n\n.news__item .news__meta-photo {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center;\n    transition: transform 0.2s;\n}\n\n.news__item .news__meta-details,\n.news__item .news__meta-details ul {\n    margin: auto;\n    padding: 0;\n    list-style: none;\n}\n\n.news__item .news__meta-details {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -120%;\n    margin: auto;\n    transition: left 0.2s;\n    background: rgba(0, 0, 0, 0.6);\n    color: #fff;\n    padding: 10px;\n    width: 100%;\n    font-size: 0.9rem;\n}\n\n.news__item .news__description {\n    padding: 1rem;\n    background: #fff;\n    position: relative;\n    z-index: 1;\n}\n\n.news__item .news__description h2 {\n    line-height: 1;\n    margin: 0;\n    font-size: 1.7rem;\n}\n\n.news__item .news__description h3 {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a2a2a2;\n    margin-top: 5px;\n}\n\n.news__item .news__description .news__read-more {\n    text-align: right;\n}\n\n.news__item .news__description .news__read-more a {\n    color: #5ad67d;\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    font-weight: 800;\n}\n\n.news__item .news__description .news__read-more a:after {\n    content: '→';\n    margin-left: -10px;\n    opacity: 0;\n    vertical-align: middle;\n    transition: margin 0.3s, opacity 0.3s;\n}\n\n.news__item .news__description .news__read-more a:hover:after {\n    margin-left: 5px;\n    opacity: 1;\n}\n\n.news__item p {\n    margin: 1rem 0 0;\n}\n\n.news__item p:first-of-type {\n    margin-top: 1.25rem;\n    position: relative;\n}\n\n.news__item p:first-of-type:before {\n    content: '';\n    position: absolute;\n    height: 5px;\n    background: #5ad67d;\n    width: 35px;\n    top: -0.75rem;\n    border-radius: 3px;\n}\n\n.news__item:hover .news__meta-details {\n    left: 0%;\n}\n\n@media (min-width: 640px) {\n    .news__item {\n        flex-direction: row;\n        max-width: 700px;\n    }\n\n    .news__item .news__meta {\n        flex-basis: 40%;\n        height: auto;\n    }\n\n    .news__item .news__description {\n        flex-basis: 60%;\n    }\n\n    .news__item .news__description:before {\n        -webkit-transform: skewX(-3deg);\n        transform: skewX(-3deg);\n        content: '';\n        background: #fff;\n        width: 30px;\n        position: absolute;\n        left: -10px;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n    }\n\n    .news__item.alt {\n        flex-direction: row-reverse;\n    }\n\n    .news__item.alt .news__description:before {\n        left: inherit;\n        right: -10px;\n        -webkit-transform: skew(3deg);\n        transform: skew(3deg);\n    }\n\n    .news__item.alt .news__meta-details {\n        padding-left: 25px;\n    }\n}\n",""]);const i=r},501:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(645),r=t.n(o)()((function(e){return e[1]}));r.push([e.id,".sources {\n    display: flex;\n    flex-wrap: nowrap;\n    width: 100%;\n    height: 120px;\n    overflow: auto;\n    align-items: center;\n    font: 300 1em 'Fira Sans', sans-serif;\n\n    scrollbar-width: auto;\n    scrollbar-color: #575b6c #3c4051;\n}\n\n.sources::-webkit-scrollbar {\n    width: 16px;\n}\n.sources::-webkit-scrollbar-track {\n    background: #3c3f4b;\n}\n.sources::-webkit-scrollbar-thumb {\n    background-color: #575b6c;\n    border-radius: 10px;\n    border: 3px solid #3c4051;\n}\n\n.source__item {\n    background: none;\n    border: 2px solid #30c5ff;\n    font: inherit;\n    line-height: 1;\n    margin: 0.5em;\n    padding: 1em 2em;\n    color: #70d6ff;\n    transition: 0.25s;\n    cursor: pointer;\n}\n\n.source__item:hover,\n.source__item:focus {\n    border-color: #3fcc59;\n    color: #69db7e;\n    box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\n    transform: translateY(-0.25em);\n}\n\n.source__item-name {\n    font-weight: 400;\n    white-space: nowrap;\n}\n\n@media (max-width: 768px) {\n    .sources {\n         flex-direction: column;\n         font-size: 0.8em;\n         height: 200px;\n    } \n    .source__item {\n         width: 60%;\n         text-align: center;\n    }\n }\n ",""]);const i=r},767:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(645),r=t.n(o)()((function(e){return e[1]}));r.push([e.id,"body {\n    color: #fff;\n    background: #17181c;\n    font-family: sans-serif;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\nheader {\n    padding: 10px 30px;\n}\n\nheader h1 {\n    font-size: 40px;\n    font-weight: 800;\n}\n\nmain {\n    flex: 1 0 auto;\n}\n\nfooter {\n    height: 100px;\n    margin: 0 auto;\n    width: 80%;\n    max-width: 1200px;\n}\nfooter .copyright {\n    font-size: 14px;\n    color: #333;\n    text-align: center;\n}\nfooter .copyright a {\n    color: #444;\n}\nfooter .copyright a:hover {\n    color: #555;\n}\nfooter .copyright:before {\n    content: '©';\n}\n.flex { \n    display: flex;\n    justify-content: space-around;\n}\n\n.github__link {\n    display: flex;\n    align-items: center;\n    color: #c0c0c0;\n}\n.github__img {\n    width: auto;\n    height: 42px;\n    margin-right: 20px;\n}\n.rss__img {\n    width: auto;\n    height: 42px;\n}\n@media (max-width: 768px) {\n    .flex {\n        flex-direction: column;\n        align-items: center;\n    }\n    .col {\n        margin-top: 10px;\n    }\n}\n \n",""]);const i=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(r[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);o&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},242:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});var o=t(379),r=t.n(o),i=t(669);r()(i.Z,{insert:"head",singleton:!1});const s=i.Z.locals||{}},595:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});var o=t(379),r=t.n(o),i=t(501);r()(i.Z,{insert:"head",singleton:!1});const s=i.Z.locals||{}},427:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});var o=t(379),r=t.n(o),i=t(767);r()(i.Z,{insert:"head",singleton:!1});const s=i.Z.locals||{}},379:(e,n,t)=>{var o,r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function s(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function a(e,n){for(var t={},o=[],r=0;r<e.length;r++){var a=e[r],c=n.base?a[0]+n.base:a[0],d=t[c]||0,l="".concat(c," ").concat(d);t[c]=d+1;var u=s(l),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:l,updater:_(f,n),references:1}),o.push(l)}return o}function c(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var s=r(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}return n}var d,l=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function u(e,n,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(n,r);else{var i=document.createTextNode(r),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(i,s[n]):e.appendChild(i)}}function f(e,n,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,m=0;function _(e,n){var t,o,r;if(n.singleton){var i=m++;t=p||(p=c(n)),o=u.bind(null,t,i,!1),r=u.bind(null,t,i,!0)}else t=c(n),o=f.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=a(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var r=s(t[o]);i[r].references--}for(var c=a(e,n),d=0;d<t.length;d++){var l=s(t[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=c}}}},717:function(e,n,t){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const r=o(t(842)),i=t(527);n.default=class{constructor(){this.controller=new r.default,this.view=new i.AppView}start(){const e=document.querySelector(".sources");if(!e)throw new Error(".sources does not exist");e.addEventListener("click",(e=>this.controller.getNews(e,(e=>this.view.drawNews(e))))),this.controller.getSources((e=>this.view.drawSources(e)))}}},853:function(e,n,t){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const r=o(t(24));class i extends r.default{constructor(){super("https://nodenews.herokuapp.com/",{apiKey:"5a1ab8b8adb14433bfa629db69429b7f"})}}n.default=i},842:function(e,n,t){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const r=o(t(853)),i=t(710);class s extends r.default{getSources(e){super.getResp({endpoint:i.Endpoint.sources},e)}getNews(e,n){let t=e.target;const o=e.currentTarget;if(t&&o)for(;t!==o;){if(t.classList.contains("source__item")){const e=t.getAttribute("data-source-id");return void(e&&o.getAttribute("data-source")!==e&&(o.setAttribute("data-source",e),super.getResp({endpoint:i.Endpoint.everything,options:{sources:e}},n)))}t=t.parentNode}}}n.default=s},24:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=class{constructor(e,n){this.baseLink=e,this.options=n}getResp({endpoint:e,options:n={}},t=(()=>{console.error("No callback for GET response")})){this.load("GET",e,t,n)}errorHandler(e){if(!e.ok)throw 401!==e.status&&404!==e.status||console.log(`Sorry, but there is ${e.status} error: ${e.statusText}`),Error(e.statusText);return e}makeUrl({options:e,endpoint:n}){const t=Object.assign(Object.assign({},this.options),e);let o=`${this.baseLink}${n}?`;return Object.keys(t).forEach((e=>{o+=`${e}=${t[e]}&`})),o.slice(0,-1)}load(e,n,t,o={}){fetch(this.makeUrl({options:o,endpoint:n}),{method:e}).then(this.errorHandler).then((e=>e.json())).then((e=>t(e))).catch((e=>console.error(e)))}}},710:(e,n)=>{var t;Object.defineProperty(n,"__esModule",{value:!0}),n.Endpoint=void 0,(t=n.Endpoint||(n.Endpoint={})).sources="sources",t.everything="everything"},527:function(e,n,t){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.AppView=void 0;const r=o(t(798)),i=o(t(53));class s{constructor(){this.news=new r.default,this.sources=new i.default}drawNews(e){const n=(null==e?void 0:e.articles)?null==e?void 0:e.articles:[];this.news.draw(n)}drawSources(e){const n=(null==e?void 0:e.sources)?null==e?void 0:e.sources:[];this.sources.draw(n)}}n.AppView=s,n.default=s},798:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),t(242),n.default=class{draw(e){const n=e.length>=10?e.filter(((e,n)=>n<10)):e,t=document.createDocumentFragment(),o=document.querySelector("#newsItemTemp"),r=document.querySelector(".news");if(!o||!r)throw new Error(".news or #newsItemTemp does not exist");n.forEach(((e,n)=>{const r=o.content.cloneNode(!0);if(!r)throw new Error("#newsItemTemp does not exist");const i=r.querySelector(".news__item");if(!i)throw new Error(".news__item does not exist");n%2&&i.classList.add("alt");const s=r.querySelector(".news__meta-photo");if(!s)throw new Error(".news__meta-photo does not exist");s.style.backgroundImage=`url(${e.urlToImage||"img/news_placeholder.jpg"})`;const a=r.querySelector(".news__meta-author");if(!a)throw new Error(".news__meta-author does not exist");a.textContent=e.author||e.source.name;const c=r.querySelector(".news__meta-date");if(!c)throw new Error(".news__meta-author does not exist");c.textContent=e.publishedAt.slice(0,10).split("-").reverse().join("-");const d=r.querySelector(".news__description-title");if(!d)throw new Error(".news__description-title does not exist");d.textContent=e.title;const l=r.querySelector(".news__description-source");if(!l)throw new Error(".news__description-source does not exist");l.textContent=e.source.name;const u=r.querySelector(".news__description-content");if(!u)throw new Error(".news__description-content does not exist");u.textContent=e.description;const f=r.querySelector(".news__read-more a");if(!f)throw new Error(".news__read-more a does not exist");f.setAttribute("href",e.url),t.append(r)})),r.innerHTML="",r.appendChild(t)}}},53:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),t(595),n.default=class{draw(e){const n=document.createDocumentFragment(),t=document.querySelector("#sourceItemTemp");if(!t)throw new Error("#sourceItemTemp does not exist");e.forEach((e=>{const o=t.content.cloneNode(!0),r=o.querySelector(".source__item-name"),i=o.querySelector(".source__item");if(!r)throw new Error(".source__item-name does not exist");if(!i)throw new Error(".source__item does not exist");r.textContent=e.name,i.setAttribute("data-source-id",e.id),n.append(o)}));const o=document.querySelector(".sources");if(!o)throw new Error(".sources does not exist");o.append(n)}}},607:function(e,n,t){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const r=o(t(717));t(427),(new r.default).start()}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nc=void 0,t(607)})();