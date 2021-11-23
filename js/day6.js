const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', checkCards);

checkCards();

function checkCards() {
    const triggerPoint = window.innerHeight * 0.8;

    cards.forEach((card)=>{
        const cardTop = card.getBoundingClientRect().top;
        if( cardTop < triggerPoint){
            card.classList.add('active');
        } else{
            card.classList.remove('active');
        }
    });
}