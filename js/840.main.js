(self.webpackChunkgulp_builder=self.webpackChunkgulp_builder||[]).push([[840],{189:(e,r,t)=>{var l,o,s=!1;function n(){l=[],Promise.all([t.e(265),t.e(273)]).then(function(){o=t(273);for(var e=0,r=l.length;e<r;e++)l[e].success(o);s=!1,l=null}.bind(null,t)).catch((function(){for(var e=0,r=l.length;e<r;e++)l[e].error.apply(this,arguments);s=!0,l=null}))}e.exports=function(e,r){r=r||function(){},o?e(o):(s&&n(),l.push({success:e,error:r}))},n()},840:(e,r,t)=>{"use strict";t.r(r);var l=t(42),o=t(382),s=t.n(o),n=t(189),a=t(523);t.n(a)().polyfill(),function(){const e=document.querySelector(".form__textarea--comment"),r=document.querySelector(".comment__symbol-counter");e.addEventListener("input",(e=>{let t=e.target.value.length;t>=0&&(r.textContent=`Использовано ${t}/142 символов`,r.style.color=null),142===t&&(r.textContent="Вы привысили лимит символов!",r.style.color="#D92C2C")})),(()=>{const e=document.querySelector(":root").style.getPropertyValue("--red"),r=document.querySelector(":root").style.getPropertyValue("--green"),t=document.querySelector("#form"),o=document.querySelector("input[type=tel]");new(s())("+7 (999) 999-99-99").mask(o),new l.ZP(t,{errorFieldCssClass:"is-input-invalid",successFieldCssClass:"is-input-valid",errorLabelCssClass:"is-label-invalid",successLabelCssClass:"is-label-valid",focusInvalidField:!0,validateBeforeSubmitting:!0,errorLabelStyle:{color:e},errorFieldStyle:{border:e},successFieldStyle:{border:r}}).addField(".form__input--name",[{rule:"required",errorMessage:"Введите имя!"}]).addField(".form__input--surname",[{rule:"required",errorMessage:"Введите фамилию!"}]).addField(".form__input--tel",[{rule:"required",errorMessage:"Телефон обязателен!"},{rule:"function",validator:function(){return 10===o.inputmask.unmaskedvalue().length},errorMessage:"Введите корректный телефон!"}]).addField(".form__input--mail",[{rule:"required",errorMessage:"Почта обязательна!"},{rule:"email",errorMessage:"Введите корректную почту!"}]).addField(".form__textarea--address",[{rule:"required",errorMessage:"Необходимо указать адрес доставки!"}]).addField(".form__textarea--comment",[{rule:"maxLength",value:142,errorMessage:"Вы привысили лимит символов!"}]).onFail((()=>{t.scrollIntoView({behavior:"smooth",block:"start",inline:"start"})})).onSuccess((e=>{e.preventDefault();let r=new FormData(t);document.querySelectorAll(".payment__input").forEach((e=>{if(e.checked){let t=e.closest(".form__label--payment");r.append("Тип оплаты",t.textContent)}}));for(let[e,t]of r)console.log(`${e} : ${t}`);e.target.reset(),(0,n.modalGenerator)(t)})).refresh()})()}()}}]);