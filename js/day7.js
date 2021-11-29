const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');


console.log(`left:${left}`);
console.log(`r:${right}`);
console.log(`c:${container}`);


left.addEventListener('mouseenter',(e)=> container.classList.add('left-focus'));
left.addEventListener('mouseleave',(e)=> container.classList.remove('left-focus'));


right.addEventListener('mouseenter',(e)=> container.classList.add('right-focus'));
right.addEventListener('mouseleave',(e)=> container.classList.remove('right-focus'));