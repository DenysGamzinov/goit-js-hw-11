import{a as f,S as m,i as c}from"./assets/vendor-5YrzWRhu.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const i={form:document.querySelector(".form"),input:document.querySelector("#user-input"),button:document.querySelector(".search-button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},p="42305784-5d55228baaa9a6392a5b2668b",h="https://pixabay.com/api/";async function y(a){const o={key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await f.get(h,{params:o})).data}catch(t){throw console.error("Error fetching images from Pixabay API:",t),t}}let l;function g(a){const o=a.map(({webformatURL:t,largeImageURL:s,tags:e,likes:r,views:n,comments:u,downloads:d})=>`<li class="gallery-item">
        <a href="${s}">
          <img src="${t}" alt="${e}" title="${e}"/>
          <div class="info">
            <h3>Likes</h3>
            <p>${r}</p>
            <h3>Views</h3>
            <p>${n}</p>
            <h3>Comments</h3>
            <p>${u}</p>
            <h3>Downloads</h3>
            <p>${d}</p>
          </div>
        </a>
      </li>`).join("");i.gallery.innerHTML=o,l?l.refresh():l=new m(".gallery a",{captionsData:"alt",captionDelay:250})}function L(){i.gallery.innerHTML=""}function b(){i.loader.classList.remove("is-hidden")}function S(){i.loader.classList.add("is-hidden")}async function P(a){a.preventDefault();const o=i.input.value.trim();if(o===""){c.error({message:"Please enter something to search for images!",position:"topRight"});return}L(),b();try{const t=await y(o);if(t.hits.length===0){c.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits)}catch(t){console.error("Error during image search:",t),c.error({message:"Unfortunately, there was an error loading images. Please try again later!",position:"topRight"})}finally{S()}}i.form.addEventListener("submit",P);
//# sourceMappingURL=index.js.map
