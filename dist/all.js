document.addEventListener("DOMContentLoaded",function(e){var n=document.querySelector(".hamburger-button"),t=document.querySelectorAll(".list-item"),c=document.querySelector(".nav-menu");n.addEventListener("click",function(){c.classList.add("nav-open")}),t.forEach(function(e){e.addEventListener("click",function(){c.classList.remove("nav-open")})})});