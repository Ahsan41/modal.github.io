const open = document.getElementById(`open`);
const close = document.getElementById(`close`);
const modal = document.getElementById(`modal-container`);

console.log(modal )
open.addEventListener(`click`, ()=>{
modal.classList.add(`show`)
})

close.addEventListener(`click`, ()=>{
    modal.classList.remove(`show`)
    })