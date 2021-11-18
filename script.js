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