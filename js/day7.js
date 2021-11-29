const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');


console.log(`left:${left}`);
console.log(`r:${right}`);
console.log(`c:${container}`);


left.addEventListener('mouseenter',()=> container.classList.add('left-focus'));
left.addEventListener('mouseleave',()=> container.classList.remove('left-focus'));


right.addEventListener('mouseenter',()=> container.classList.add('right-focus'));
right.addEventListener('mouseleave',()=> container.classList.remove('right-focus'));