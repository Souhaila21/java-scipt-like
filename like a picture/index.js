let btn = document.querySelector('button');
let span=document.querySelector('span');
let cpt = 0;
btn.addEventListener('dblclick', () => {
  cpt++;
  span.innerHTML = cpt;

});