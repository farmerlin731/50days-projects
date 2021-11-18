const search = document.querySelector(".search");
const input = document.querySelector(".search-bar");
const btn = document.querySelector(".btn");


btn.addEventListener('click',()=>{
    search.classList.toggle('active');
    input.focus();
});