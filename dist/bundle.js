(()=>{"use strict";var e,t=function(e){e.preventDefault();var t,u,n=document.querySelector("input[name='firstnumber']"),r=document.querySelector("input[name='secondnumber']"),o=(t=Number(n.value),u=Number(r.value),t-u),m=document.querySelector("p");m&&(m.textContent=o.toString())};null==(e=document.querySelector("form"))||e.addEventListener("submit",t)})();