const main=document.getElementById('main');
const d1=document.getElementsByClassName('description1');
const d2=document.querySelector('.description2');
const change=document.getElementById('button');

change.addEventListener('click',()=>{
    d1[0].innerHTML="hello";

    d2.style.fontSize="8px";

    d1[1].classList.add('highlight');
    d2.classList.add('highlight');
    d2.classList.remove('highlight');

    main.classList.toggle('highlight');
});