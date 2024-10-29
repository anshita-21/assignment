const imgs = document.querySelectorAll('#imageContainer img');
const large=document.getElementById('large');
const prev=document.getElementById('prev');
const next=document.getElementById('next');

let currIndex=0;

function showImage(index) {
    large.src = imgs[index].src;
    large.style.display = 'block'; 
}

imgs.forEach( (img, i) => {
    img.addEventListener('click', () => {
        currIndex=i;
        showImage(currIndex);
    });
});

prev.addEventListener('click', () => {
    currIndex=(currIndex-1+imgs.length)%imgs.length;
    showImage(currIndex);
});

next.addEventListener('click', () => {
    currIndex=(currIndex+1)%imgs.length;
    showImage(currIndex);
});