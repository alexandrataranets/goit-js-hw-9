import"./assets/modulepreload-polyfill-3cfb730f.js";document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".feedback-form"),m=()=>{const t={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(t))},l=()=>{const t=localStorage.getItem("feedback-form-state");if(t){const{email:a,message:s}=JSON.parse(t);e.elements.email.value=a,e.elements.message.value=s}};e.addEventListener("input",m),e.addEventListener("submit",t=>{t.preventDefault();const a=e.elements.email.value.trim(),s=e.elements.message.value.trim();if(!a){alert("Please enter your email");return}if(!s){alert("Please enter your message");return}console.log({email:a,message:s}),localStorage.removeItem("feedback-form-state"),e.reset()}),l()});
//# sourceMappingURL=commonHelpers2.js.map
