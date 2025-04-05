(()=>{"use strict";var e={56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},365:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([e.id,"*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    avenir next,\n    avenir,\n    segoe ui,\n    helvetica neue,\n    Cantarell,\n    Ubuntu,\n    roboto,\n    noto,\n    helvetica,\n    arial,\n    sans-serif;\n  background: #f0f4f8;\n  color: #333;\n  padding: 2rem;\n  margin: 0;\n}\n\nform {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 1rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  margin: 0 auto 2rem;\n  max-width: 800px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n\nlabel {\n  flex: 1 1 100%;\n  font-weight: 600;\n}\n\ninput,\nselect {\n  flex: 1 1 100%;\n  padding: 0.5rem;\n  border: 1px solid #ccc;\n  border-radius: 0.5rem;\n  font-size: 1rem;\n}\n\nbutton {\n  padding: 0.6rem 1.2rem;\n  background-color: #0077cc;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-weight: bold;\n  cursor: pointer;\n  margin-top: 0.5rem;\n}\n\nbutton:hover {\n  background-color: #005fa3;\n}\n\n.error {\n  color: red;\n  margin-top: 0.5rem;\n  display: block;\n  text-align: center;\n  font-size: 1.2rem;\n}\n\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n}\n\n.container h1 {\n  text-align: center;\n  margin-bottom: 2rem;\n  font-size: 2rem;\n}\n\n.day {\n  background: white;\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  border-radius: 1rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n\n.day h2 {\n  margin-top: 0;\n  font-size: 1.2rem;\n  color: #0077cc;\n}\n\n.day div {\n  margin: 0.3rem 0;\n}\n",""]);const c=i},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},601:e=>{e.exports=function(e){return e[1]}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),c=t(659),s=t.n(c),d=t(56),l=t.n(d),u=t(540),p=t.n(u),m=t(113),f=t.n(m),h=t(365),v={};function y(e,n){e.validity.valueMissing?n.textContent="Location required":e.validity.tooShort?n.textContent=`Should be at least ${e.minLength} characters`:e.validity.tooLong&&(n.textContent=`Should be less than ${e.maxLength} characters`)}v.styleTagTransform=f(),v.setAttributes=l(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p(),o()(h.A,v),h.A&&h.A.locals&&h.A.locals;const b=document.getElementById("location"),g=document.querySelector("select"),x=document.querySelector("span.error"),w=document.querySelector("button");b.addEventListener("input",(()=>{b.validity.valid?x.textContent="":y(b,x)})),w.addEventListener("click",(e=>{e.preventDefault(),b.validity.valid?async function(e,n){const t=document.querySelector(".container"),r=document.querySelector("span.error");t.innerHTML="",r.textContent="";const o=document.createElement("h1");t.appendChild(o);let a=0;const i="Loading";o.textContent=i;const c=setInterval((()=>{a=(a+1)%4,o.textContent=i+".".repeat(a)}),500);try{const t=await async function(e,n){let t;switch(n){case"Fahrenheit":t="us";break;case"Celcius":t="metric";break;case"Kelvin":t="base"}const r=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${e}/next7days?${new URLSearchParams({contentType:"json",elements:"datetime,description,feelslike,humidity,precipprob,temp,tempmax,tempmin",include:"days",key:"6AWMSRH5Y8JP7NACGNJ3XRZ5T",unitGroup:t})}`,o=await fetch(r,{mode:"cors"});if(!o.ok)switch(o.status){case 400:throw new Error("Location not found");case 401:throw new Error("Invalid API key");case 429:throw new Error("Too many requests");case 500:throw new Error("Internal server error");default:throw new Error(`Response status: ${o.status}`)}return o.json()}(e,n);clearInterval(c),function(e,n){const t=document.querySelector(".container");t.innerHTML="";const r=document.createElement("h1");r.textContent=e.resolvedAddress,t.appendChild(r),e.days.forEach((e=>{const r=document.createElement("div");r.classList.add("day");const o=document.createElement("h2"),[a,i,c]=e.datetime.split("-").map(Number),s=new Date(a,i-1,c).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"}).replace(",","");o.textContent=`${s} - ${e.description}`;const d=document.createElement("div");let l;switch(n){case"Fahrenheit":l="F";break;case"Celcius":l="C";break;case"Kelvin":l="K"}d.textContent=`Temperature: ${e.temp}°${l} (min: ${e.tempmin}°${l} | max: ${e.tempmax}°${l} | feelslike: ${e.feelslike}°${l})`;const u=document.createElement("div");u.textContent=`Humidity: ${e.humidity}%`;const p=document.createElement("div");p.textContent=`Precip. probability: ${e.precipprob}%`,r.appendChild(o),r.appendChild(d),r.appendChild(u),r.appendChild(p),t.appendChild(r)}))}(t,n)}catch(e){clearInterval(c),t.innerHTML="",r.textContent=e.message}}(b.value.toLowerCase().trim(),g.value):y(b,x)}))})();