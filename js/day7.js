const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');


console.log(`left:${left}`);
console.log(`r:${right}`);
console.log(`c:${container}`);

// -- for web -- //
left.addEventListener('mouseenter',(e)=> container.classList.add('left-focus'));
left.addEventListener('mouseleave',(e)=> container.classList.remove('left-focus'));
right.addEventListener('mouseenter',(e)=> container.classList.add('right-focus'));
right.addEventListener('mouseleave',(e)=> container.classList.remove('right-focus'));


// -- for mobile -- //
left.addEventListener('click',()=>{
    container.classList.remove('right-focus');
    container.classList.add('left-focus');
})
right.addEventListener('click',()=>{
    container.classList.remove('left-focus');
    container.classList.add('right-focus');
})