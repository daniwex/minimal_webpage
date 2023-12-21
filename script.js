const items = Array.from(document.getElementsByClassName("item"));
const textOutput = document.getElementById('text-output');
let itemsArray = []

items.forEach(element => element.addEventListener('click',()=>{
   element.classList.contains('active') ? element.classList.remove('active') : element.classList.add('active')
   if(element.classList.contains('active') && !itemsArray.includes(element.innerText)){
        itemsArray.push(element.innerText)
   }
   if((!element.classList.contains('active')) && itemsArray.includes(element.innerText)){
        itemsArray = itemsArray.filter(item => item != element.innerText)
   }
   textOutput.innerText = itemsArray.join(', ');
}))