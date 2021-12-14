const audioArr = ['applause','boo','gasp','tada','victory','wrong'];


audioArr.forEach((item)=>{
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.textContent = item;
    btn.addEventListener('click',(e)=>{
        stopAudios();
        document.getElementById(item).play();
    });

    document.querySelector('.btn-area').appendChild(btn);
});


function stopAudios(){
    audioArr.forEach((item)=>{
        const audio = document.getElementById(item);
        audio.pause();
        audio.currentTime =0;
    });
}
