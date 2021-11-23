cards = document.querySelectorAll('.projects-cards');
//為什麼我下const會錯...
//Uncaught SyntaxError: Identifier 'cards' has already been declared

cards.forEach((item)=>{
    console.log(item);
    item.addEventListener('click',(e)=>{
        cleanCardState();
        item.classList.add('active');
    });
});


function cleanCardState(){
    cards.forEach((item)=>{
        item.classList.remove('active');
    });
}

// -- for mobile scroll animation -- //
const listCards = document.querySelectorAll('.scroll-anima');
window.addEventListener('scroll', checkShow);

checkShow();

function checkShow() {
    console.log('show area');
    const triggerPoint = window.innerHeight * 0.8;

    listCards.forEach((item)=>{
        const cardTop = item.getBoundingClientRect().top;
        if( cardTop < triggerPoint){
            item.classList.add('show');
        } else{
            item.classList.remove('show');
        }
    });
}