const bg = document.querySelector('.tmpBg');
const txt = document.querySelector('.loading-txt');


let timeCounter = setInterval(blurFunc,20);
let loadIndex = 0;

console.log(bg);
function blurFunc(){
    loadIndex++;
    console.log(loadIndex);
    if(loadIndex>99) clearInterval(timeCounter);

    txt.textContent = `${loadIndex} %`;
    bg.style.filter = `blur(${scale(loadIndex, 0, 100, 30, 0)}px)`;
    txt.style.opacity = scale(loadIndex,0,100,1,0);
}



// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }