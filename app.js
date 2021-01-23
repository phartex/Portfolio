const navClass =  document.getElementById('nav-bar')

window.addEventListener('scroll',e => {
    e.preventDefault(); 
    if (this.scrollY > 20 ){
        navClass.classList.add('sticky')
    } else {
        navClass.classList.remove('sticky')
    } 
    
})

const firstWork = document.getElementById('first-work')
const secondWork = document.getElementById('second-work')
const thirdWork = document.getElementById('third-work')
const fourthWork = document.getElementById('fourth-work')
const fifthWork = document.getElementById('fifth-work')


firstWork.addEventListener('mouseover', e=>{
    e.preventDefault();
    firstWork.classList.add('dark')
})

firstWork.addEventListener('mouseout', function(){
    firstWork.classList.remove('dark')
})


secondWork.addEventListener('mouseover', e=>{
    e.preventDefault();
    secondWork.classList.add('dark')
})

secondWork.addEventListener('mouseout', function(){
    secondWork.classList.remove('dark')
})

thirdWork.addEventListener('mouseover', e=>{
    e.preventDefault();
    thirdWork.classList.add('dark')
})

thirdWork.addEventListener('mouseout', function(){
    thirdWork.classList.remove('dark')
})


fourthWork.addEventListener('mouseover', e=>{
    e.preventDefault();
    fourthWork.classList.add('dark')
})

fourthWork.addEventListener('mouseout', function(){
    fourthWork.classList.remove('dark')
})

fifthWork.addEventListener('mouseover', e=>{
    e.preventDefault();
    fifthWork.classList.add('dark')
})

fifthWork.addEventListener('mouseout', function(){
    fifthWork.classList.remove('dark')
})