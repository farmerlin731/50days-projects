const panels = document.querySelectorAll(".panel");


panels.forEach((panel)=>{
    panel.addEventListener('click',(e)=>{
        cleanState();
        panel.classList.add('active');
    });
});

function cleanState(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    });
}