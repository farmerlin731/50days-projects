const tmpCon = document.querySelector('.container');
const btmOpen = document.querySelector('#open');
const btmClose = document.querySelector('#close');




btmOpen.addEventListener('click',e=>{
    // alert('ya');
    tmpCon.classList.add('show-nav');
});


btmClose.addEventListener('click',e=>{
    // alert('ya');
    tmpCon.classList.remove('show-nav');
});