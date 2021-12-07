const labels = document.querySelectorAll('.form-control label');

labels.forEach((item) => {
    console.log(item.textContent);
    item.innerHTML =item.textContent.split('')
    .map((char,index)=>`<span style="transition-delay: ${index*50}ms">${char}</span>`)
    .join('')
})