!function(){"use strict";class e{constructor(){this.pageRootQuery=void 0,this.cardNumberQuery=void 0,this.cardCVVQuery=void 0,this.cardExpiredTimeQuery=void 0,this.addressFirstNameQuery=void 0,this.addressLastNameQuery=void 0,this.addressAddress1Query=void 0,this.addressAddress2Query=void 0,this.addressCityQuery=void 0,this.addressStateQuery=void 0,this.addressPostalCodeQuery=void 0,this.addressCountryQuery=void 0,this.addressNameQuery=void 0,this.totalAmountQuery=void 0,this.prefillAmount=void 0}static Create(t){const r=new e;return t&&(e.SetValue("pageRootQuery",t,r),e.SetValue("cardNumberQuery",t,r),e.SetValue("cardCVVQuery",t,r),e.SetValue("cardExpiredTimeQuery",t,r),e.SetValue("addressFirstNameQuery",t,r),e.SetValue("addressLastNameQuery",t,r),e.SetValue("addressAddress1Query",t,r),e.SetValue("addressAddress2Query",t,r),e.SetValue("addressCityQuery",t,r),e.SetValue("addressStateQuery",t,r),e.SetValue("addressPostalCodeQuery",t,r),e.SetValue("addressCountryQuery",t,r),e.SetValue("addressNameQuery",t,r),e.SetValue("totalAmountQuery",t,r),e.SetValue("prefillAmount",t,r)),r}static SetValue(e,t,r){t[e]&&(r[e]=t[e])}}var t=e;class r{constructor(){this.loadingTitle=void 0,this.loadingDetail=void 0,this.footerDescription=void 0}static Create(e){const t=new r;return e&&(e.loadingTitle&&(t.loadingTitle=e.loadingTitle),e.loadingDetail&&(t.loadingDetail=e.loadingDetail),e.footerDescription&&(t.footerDescription=e.footerDescription)),t}}var s=r;class i{constructor(){this.isFromWalletECPane=void 0}static Create(e){const t=new i;return e&&e.isFromWalletECPane&&(t.isFromWalletECPane=e.isFromWalletECPane),t}}var a=i;const n="edge_loading_element",o="edge_loading_style";function d(e){return!e||0===e.length}function l(e,t){return d(e)===d(t)}function u(e,t=!1){let r=null;return e&&(r=document.querySelector(e)?.textContent||null,t&&!d(r)&&(r=r.replaceAll(" ",""))),{value:r,isValid:l(e,r)}}function c(e){const r=e&&e[0],s=r?JSON.parse(r):{};return t.Create(s)}function p(e){const t=e.replace(/[\s,]/g,""),r=t.startsWith("$")?t.slice(1):t;return parseFloat(r)}window.ExecuteBNPLPageParse=function(e){const t=c(e);window.WalletPageParserRuntime.postMessageToHost("LogScriptTelemetry",["PageParserVirtualCardStarted"]);let r=0;const s=setInterval((()=>{const{value:e,isValid:i}=u(t.cardNumberQuery,!0),{value:a,isValid:n}=u(t.cardCVVQuery,!0),{value:o,isValid:l}=u(t.cardExpiredTimeQuery,!0),{value:c,isValid:m}=u(t.addressAddress1Query),{value:g,isValid:w}=u(t.addressAddress2Query),{value:h,isValid:C}=u(t.addressCityQuery),{value:y,isValid:v}=u(t.addressCountryQuery),{value:A,isValid:b}=u(t.addressFirstNameQuery),{value:f,isValid:S}=u(t.addressLastNameQuery),{value:N,isValid:x}=u(t.addressPostalCodeQuery,!0),{value:Q,isValid:E}=u(t.addressStateQuery),{value:V,isValid:P}=u(t.addressNameQuery),{value:_,isValid:T}=function({totalAmountQuery:e}){let{value:t,isValid:r}=u(e);return r||(r=!1,t=[...document.querySelectorAll("p")].map((e=>e.innerHTML)).filter((e=>e.includes("card is for the exclusive use")))?.[0]?.split(">")?.[1]?.split("<")?.[0],d(t)||(r=!0)),{value:t,isValid:r}}({totalAmountQuery:t.totalAmountQuery});let D=!0;if(T){const e=p(t.prefillAmount),r=p(_);if(D=!(!isNaN(e)&&!isNaN(r))||r>=e,!D){clearInterval(s),window.WalletPageParserRuntime.postMessageToHost("LogScriptTelemetry",["VirtualCardAmountNotEnough"]);const e=document.querySelector(t.pageRootQuery);e?.removeAttribute("style"),e?.removeAttribute("aria-hidden");const r=document.querySelector("#edge_loading_element"),i=document.querySelector("#edge_loading_style");return r?.remove(),void i?.remove()}}if(800===r||i&&n&&l&&m&&w&&C&&v&&b&&S&&x&&E&&P){let t,r;if(clearInterval(s),!d(o)){const[e,s]=o.split("/");t=e?Number(e):null,r=s?Number(s):null}window.WalletPageParserRuntime.postMessageToHost("PageParserVirtualCardInfo",[JSON.stringify({card:{number:e,cvc:a,expiredTime:o,expirationMonth:t,expirationYear:r},cardholder:{name:V,firstName:A,lastName:f,address1:c,address2:g,city:h,state:Q,postalCode:N,country:y}})])}r++}),200)},window.HideRootPage=function(e){const t=c(e),r=function(e){const t=e&&e[1],r=t?JSON.parse(t):{};return s.Create(r)}(e),i=function(e){const t=e&&e[2],r=t?JSON.parse(t):{};return a.Create(r)}(e);let d=0;const l=setInterval((()=>{const e=document.querySelector(t.pageRootQuery);if(500===d&&clearInterval(l),e){clearInterval(l),e.setAttribute("style","display: none"),e.setAttribute("aria-hidden","true");const t=document.createElement("div");t.id=n;const s=document.createElement("div"),a=document.createElement("div"),d=document.createElement("div"),u=document.createElement("div");a.setAttribute("style","border: 3px solid #CDE6F7;\n        border-radius: 50%;\n        border-top: 3px solid #0078D4;\n        width: 56px;\n        height: 56px;\n        animation: spin 2s linear infinite;\n        margin: auto;"),s.setAttribute("style","margin: 150px auto 100px; width: 350px;height: 200px;");const c="text-align: center;margin: auto;word-wrap: break-word;";if(d.setAttribute("style",c+"font-weight: 600;font-size: 28px;line-height: 36px;margin-top: 24px;"),u.setAttribute("style",c+"font-weight: 500;font-size: 16px;line-height: 22px;margin-top: 16px;"),d.textContent=r.loadingTitle,u.textContent=r.loadingDetail,s.appendChild(a),s.appendChild(d),s.appendChild(u),t.appendChild(s),!i.isFromWalletECPane){const e=document.createElement("div"),s=document.createElement("div"),i="display: flex;padding: 10px;border: 1px solid #ECECEC;position: absolute;bottom: 0;width: 100%;";e.setAttribute("style",i),s.setAttribute("style","margin: 10px;font-weight: 400;font-size: 14px;line-height: 20px;");const a=function(){const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("style","margin: 10px;"),e.setAttribute("width","23"),e.setAttribute("height","22"),e.setAttribute("viewBox","0 0 23 22"),e.setAttribute("xmlns","http://www.w3.org/2000/svg");const t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d","M19.953 16.3747C19.6624 16.5263 19.3589 16.6619 19.0434 16.7799C18.0952 17.1344 17.048 17.3354 15.9433 17.3354C11.8569 17.3354 8.2973 14.5379 8.2973 10.9482C8.2973 9.93879 8.88418 9.06384 9.71571 8.60303C6.02014 8.75719 5.07013 12.5906 5.07013 14.8361C5.07013 21.1847 10.9499 21.829 12.2168 21.829C12.8996 21.829 13.9302 21.6311 14.5511 21.4373C14.589 21.4248 14.6266 21.4121 14.6642 21.3991C17.0614 20.5764 19.0845 18.9579 20.4145 16.8599C20.6051 16.559 20.2698 16.2095 19.953 16.3747Z"),t.setAttribute("fill","url(#paint0_linear_6328_71999)");const r=document.createElementNS("http://www.w3.org/2000/svg","path");r.setAttribute("d","M9.12864 20.7463C8.36054 20.2725 7.69379 19.6477 7.16531 18.9093C6.34754 17.7667 5.85864 16.3611 5.85864 14.8351C5.85864 12.5895 6.90936 10.6005 8.52899 9.34032C8.89686 9.0541 9.36783 8.76542 9.7149 8.60196C9.98427 8.47499 10.4452 8.24638 11.0572 8.25502C12.0721 8.26934 12.8388 8.78425 13.2753 9.36892C13.6106 9.81828 13.8174 10.3718 13.8243 10.9727C13.8245 10.9546 15.9369 4.13159 6.91173 4.13159C3.12139 4.13159 0 7.71262 0 10.8533C0 12.8455 0.464523 14.4361 1.04614 15.6688C2.34152 18.4145 4.74365 20.5396 7.68209 21.476C8.74621 21.815 9.87982 21.9998 11.0572 21.9998C12.2784 21.9998 13.4519 21.7999 14.5501 21.4362C13.9293 21.6301 13.2709 21.7362 12.5883 21.7362C11.3214 21.7362 10.1405 21.3706 9.12864 20.7463Z"),r.setAttribute("fill","url(#paint1_linear_6328_71999)");const s=document.createElementNS("http://www.w3.org/2000/svg","path");s.setAttribute("d","M13.1538 12.7927C13.0838 12.8829 12.8685 13.0073 12.8685 13.2794C12.8685 13.5033 13.0153 13.7192 13.2761 13.9004C14.5181 14.7629 16.8587 14.6467 16.865 14.6467C17.8313 14.6433 18.7005 14.3789 19.4792 13.9258C19.8335 13.7197 20.1613 13.4749 20.4569 13.1954C21.4713 12.236 22.0898 10.8841 22.1069 9.38197C22.129 7.45563 21.4196 6.17496 21.1279 5.60788C19.2979 2.04844 15.3475 0 11.0522 0C4.99753 0 0.082523 4.84234 0.00128174 10.8455C0.0423224 7.70508 3.17857 5.16912 6.90667 5.16912C7.20895 5.16912 8.93276 5.19846 10.534 6.03483C11.9445 6.77156 12.684 7.66179 13.198 8.5449C13.7317 9.46194 13.8267 10.62 13.8267 11.0818C13.8267 11.5435 13.5928 12.2271 13.1538 12.7927Z"),s.setAttribute("fill","url(#paint2_linear_6328_71999)");const i=document.createElementNS("http://www.w3.org/2000/svg","defs"),a=document.createElementNS("http://www.w3.org/2000/svg","linearGradient"),n=document.createElementNS("http://www.w3.org/2000/svg","linearGradient"),o=document.createElementNS("http://www.w3.org/2000/svg","linearGradient"),d=document.createElementNS("http://www.w3.org/2000/svg","stop"),l=document.createElementNS("http://www.w3.org/2000/svg","stop"),u=document.createElementNS("http://www.w3.org/2000/svg","stop");d.setAttribute("stop-color","#094987"),l.setAttribute("stop-color","#0C59A4"),l.setAttribute("offset","0.245021"),u.setAttribute("stop-color","#114A8B"),u.setAttribute("offset","1"),a.id="paint0_linear_6328_71999",a.setAttribute("x1","5.07013"),a.setAttribute("y1","15.2161"),a.setAttribute("x2","20.4701"),a.setAttribute("y3","15.2161"),a.setAttribute("gradientUnits","userSpaceOnUse"),a.appendChild(d),a.appendChild(l),a.appendChild(u),n.id="paint1_linear_6328_71999";const c=document.createElementNS("http://www.w3.org/2000/svg","stop"),p=document.createElementNS("http://www.w3.org/2000/svg","stop"),m=document.createElementNS("http://www.w3.org/2000/svg","stop");c.setAttribute("stop-color","#117FBA"),p.setAttribute("stop-color","#1797E0"),p.setAttribute("offset","0.223416"),m.setAttribute("stop-color","#0078D4"),m.setAttribute("offset","0.947917"),n.setAttribute("x1","6.63194"),n.setAttribute("y1","4.39798"),n.setAttribute("x2","3.59701"),n.setAttribute("y3","18.9995"),n.setAttribute("gradientUnits","userSpaceOnUse"),n.appendChild(c),n.appendChild(p),n.appendChild(m),o.id="paint2_linear_6328_71999";const g=document.createElementNS("http://www.w3.org/2000/svg","stop"),w=document.createElementNS("http://www.w3.org/2000/svg","stop");return g.setAttribute("stop-color","#48D566"),w.setAttribute("stop-color","#35C1F1"),w.setAttribute("offset","1"),o.setAttribute("x1","22.1067"),o.setAttribute("y1","8.79863"),o.setAttribute("x2","6.64618"),o.setAttribute("y3","3.80518"),o.setAttribute("gradientUnits","userSpaceOnUse"),o.appendChild(g),o.appendChild(w),i.appendChild(a),i.appendChild(n),i.appendChild(o),e.appendChild(t),e.appendChild(r),e.appendChild(s),e.appendChild(i),e}();s.textContent=r.footerDescription,e.appendChild(a),e.appendChild(s),t.appendChild(e)}document.body.appendChild(t);const p=document.createElement("style");p.id=o,document.head.appendChild(p),p?.sheet?.insertRule("@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }",0),p?.sheet?.insertRule("body { color: white; }",1),p?.sheet?.insertRule('@media screen and (prefers-color-scheme: light) { body { color: black; font-family: "system-ui", sans-serif; } }',2),p?.sheet?.insertRule("@media screen and (prefers-color-scheme: light) { html { height: 400px; } }",3)}d++}),200)},window.WalletPageParserRuntime=new class{raiseMessageFromHost(e){const t=e.shift();if(t&&"WalletPageParser"===t)try{"interactive"===document.readyState||"complete"===document.readyState?window.ExecuteBNPLPageParse(e):window.addEventListener&&window.addEventListener("DOMContentLoaded",(()=>{window.ExecuteBNPLPageParse(e)}))}catch(e){}}postMessageToHost(e,t){try{walletPageParserNativeHandler&&walletPageParserNativeHandler.sendMessageToHost(e,t)}catch(e){}}initialize(e){e.splice(0,2);try{window.HideRootPage(e)}catch(e){return!1}return!0}}}();