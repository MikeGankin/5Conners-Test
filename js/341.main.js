(self.webpackChunkgulp_builder=self.webpackChunkgulp_builder||[]).push([[341],{588:(e,c,r)=>{var s,o,t=!1;function n(){s=[],r.e(504).then(function(){o=r(504);for(var e=0,c=s.length;e<c;e++)s[e].success(o);t=!1,s=null}.bind(null,r)).catch((function(){for(var e=0,c=s.length;e<c;e++)s[e].error.apply(this,arguments);t=!0,s=null}))}e.exports=function(e,c){c=c||function(){},o?e(o):(t&&n(),s.push({success:e,error:c}))},n()},341:(e,c,r)=>{"use strict";r.r(c);var s=r(588);!function(){const e=document.querySelector(".footer"),c=document.querySelector(".scroll-up");new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?c.classList.add("scroll-up--active"):c.classList.remove("scroll-up--active")}))}),{threshold:.9}).observe(e);const r=(0,s.debounce)((()=>{c.classList.remove("scroll-up--active"),window.scrollTo({top:0,left:0,behavior:"smooth"})}),200);c.addEventListener("click",r)}()}}]);