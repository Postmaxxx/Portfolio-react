"use strict";(self.webpackChunkportfolio_react=self.webpackChunkportfolio_react||[]).push([[5],{2297:function(t,n,e){e.r(n),e.d(n,{setContactEmail:function(){return a},setContactMessage:function(){return l},setContactName:function(){return u},setContactSubject:function(){return i},setCurrentGallery:function(){return p},setImgLoaded:function(){return y},setModal:function(){return d},setModalDescr:function(){return f},setModalImage:function(){return s},setModalLink:function(){return E},setNavClose:function(){return c},setNavOpen:function(){return o},setSelectedPortfolio:function(){return _},setTheme:function(){return r}});var r=function(t){return{type:"SET_THEME",payload:t}},o=function(){return{type:"SET_NAV_OPEN"}},c=function(){return{type:"SET_NAV_CLOSE"}},u=function(t){return{type:"SET_CONTACT_NAME",payload:t}},a=function(t){return{type:"SET_CONTACT_EMAIL",payload:t}},i=function(t){return{type:"SET_CONTACT_SUBJECT",payload:t}},l=function(t){return{type:"SET_CONTACT_MESSAGE",payload:t}},d=function(t){return{type:"SET_MODAL",payload:t}},s=function(t){return{type:"SET_MODAL_IMAGE",payload:t}},f=function(t){return{type:"SET_MODAL_DESCR",payload:t}},E=function(t){return{type:"SET_MODAL_LINK",payload:t}},p=function(t){return{type:"SET_CURRENT_GALLERY",payload:t}},_=function(t){return{type:"SET_SELECTED_PORTFOLIO",payload:t}},y=function(t){return{type:"SET_IMG_LOADED",payload:t}}},1005:function(t,n,e){e.r(n),e.d(n,{default:function(){return d}});var r=e(2791),o=e(2297),c=e(7781),u=e(3531),a=e(4804),i=e(7892),l=(e(8677),e(184)),d=(0,u.$j)((function(t){return{store:t}}),(function(t){return{setStore:(0,c.DE)(o,t)}}))((function(t){var n=function(){t.setStore.setModal(!1)},e=function(t){"IMG"!==t.target.tagName&&n()},o=document.querySelector(".modal__background");return o&&(i.Z.getState().modal?o.classList.add("show"):o.classList.remove("show")),(0,r.useEffect)((function(){document.querySelector(".modal__background").addEventListener("click",(function(t){return t.target===t.currentTarget&&n()})),document.addEventListener("keydown",(function(t){return"Escape"===t.key&&n()}));var t=document.querySelector(".modal").childNodes[0].childNodes[0],e=document.createElement("img");t.innerHTML=(0,a.Z)(),e.onload=function(){null===t||void 0===t||t.replaceChildren(e)},e.src=i.Z.getState().modalImage,e.alt=i.Z.getState().modalDescr}),[i.Z.getState().modalImage]),(0,l.jsxs)("div",{className:"modal__background",onClick:function(t){return e(t)},children:[(0,l.jsx)("div",{className:"modal",children:(0,l.jsx)("div",{onClick:function(t){return e(t)},children:(0,l.jsx)("div",{onClick:function(t){return e(t)},children:(0,l.jsx)("img",{src:"",alt:""})})})}),(0,l.jsx)("div",{className:"modal__close",children:(0,l.jsx)("svg",{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",onClick:n,children:(0,l.jsx)("path",{onClick:n,d:"M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"})})})]})}))},8677:function(){}}]);
//# sourceMappingURL=5.fadadacf.chunk.js.map