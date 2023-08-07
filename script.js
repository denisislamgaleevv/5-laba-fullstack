


let nav = document.getElementById('home')
let burger = document.getElementById('burger')
let cross = document.getElementById('cross')
function viewMenu(){
    nav.classList.add('visible')
    burger.style.display = 'none';
    cross.style.display = 'block';
    
}
function hideMenu(){
    nav.classList.remove('visible')
    burger.style.display = 'block';
    cross.style.display = 'none';
}
 