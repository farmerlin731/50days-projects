const progress = document.getElementById('progress');
const prev = document.getElementById('btnA');
const next = document.getElementById('btnB');
const circles = document.querySelectorAll('.circle');

let activeIndex = 1; // default

next.addEventListener('click', (e) => {
    activeIndex++;
    if (activeIndex > circles.length) { activeIndex = 4 };
    updateProgress();
});


prev.addEventListener('click', (e) => {
    activeIndex--;
    if (activeIndex < 1) { activeIndex = 1 };
    updateProgress();
});


function updateProgress() {

    console.log(`index: ${activeIndex}`);
    circles.forEach((item, index) => {
        if (index < activeIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    progress.style.width = (activeIndex - 1) / (circles.length - 1) *100 + '%';

    if(activeIndex == circles.length){
        next.disabled = true;
    } else if(activeIndex == 1){
        prev.disabled = true;
    } else{
        prev.disabled = false;
        next.disabled = false;
    }

}