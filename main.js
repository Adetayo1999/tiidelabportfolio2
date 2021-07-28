const header = document.querySelector('header');
const hamTarget = document.querySelector(".hamburger__target");
const hamContent = document.querySelector(".content");
const arrowUp = document.querySelector('.arrow__up');
window.addEventListener('scroll' , () => {

           if(document.documentElement.scrollTop > 50 || document.body.scrollTop > 50){
              
               header.classList.add('dark');
           }
           else{
              
               header.classList.remove('dark')
           }


})

window.addEventListener('scroll' , () => {

    if(document.documentElement.scrollTop > 100 || document.body.scrollTop > 100){
       
        arrowUp.classList.add('show');
    }
    else{
       
        arrowUp.classList.remove('show');
    }


})

const Hamburger = document.querySelector('.ham');
const HamIcon = Hamburger.querySelector('i');
let showMenu = false;

Hamburger.addEventListener('click' , () => {
                   
        if(!showMenu){
             HamIcon.classList.remove('fa-bars');
             HamIcon.classList.add('fa-times');
             hamTarget.classList.add('open');
             hamContent.classList.add('open');

            showMenu = true;
        }
        else{
            HamIcon.classList.remove('fa-times')
            HamIcon.classList.add('fa-bars');
            hamTarget.classList.remove('open');
            hamContent.classList.remove('open');
            showMenu = false;
        }



})


   document.body.addEventListener('click' , (e) => {
        if(e.target === hamTarget){
            HamIcon.classList.remove('fa-times')
            HamIcon.classList.add('fa-bars');
            hamTarget.classList.remove('open');
            hamContent.classList.remove('open');
        }
   })