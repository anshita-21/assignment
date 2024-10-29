const main=document.getElementById("main");
console.log(main);

const description=document.getElementsByClassName("description");
console.log(description);
//the above logs an html collection

for(let i=0; i<description.length; i++){
    console.log(description[i].innerHTML);
}

const title=document.querySelector('.title');
console.log(title);
//".title" is different from '.title'
