import{i as p,S as a}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const n={form:document.querySelector(".form"),input:document.querySelector("#user-input"),button:document.querySelector(".search-button"),gallery:document.querySelector(".gallery")};function m(o){const l="https://pixabay.com/api/?key="+"42305784-5d55228baaa9a6392a5b2668b"+"&q="+o+"&image_type=photo&orientation=horizontal&safesearch=true";return n.gallery.classList.add("loader"),fetch(l).then(i=>i.json())}function d(o){const r=o.hits;r.length===0?p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):h(r)}function h(o){let r=new a(".gallery a");r.refresh();const l=o.map(({webformatURL:i,largeImageURL:e,tags:t,likes:s,views:c,comments:u,downloads:f})=>`<li class="gallery-item">
        <a href="${e}">
          <img src="${i}" alt="${t}" title="${t}"/>
          <ul>
            <li>
              <h3>Likes</h3>
              <p>${s}</p>
            </li>
            <li>
              <h3>Views</h3>
              <p>${c}</p>
            </li>
            <li>
              <h3>Comments</h3>
              <p>${u}</p>
            </li>
            <li>
              <h3>Downloads</h3>
              <p>${f}</p>
            </li>
          </ul>
        </a></li>`).join("");n.gallery.innerHTML=l,r=new a(".gallery a",{captions:!1})}function y(o){o.preventDefault(),n.gallery.innerHTML="";const r=n.input.value.trim();r!==""&&m(r).then(d).catch().finally(()=>n.gallery.classList.remove("loader"))}n.form.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
