const header = document.querySelector('header');


window.addEventListener('scroll' , () => {

           if(document.documentElement.scrollTop > 50 || document.body.scrollTop > 50){
               console.log("Greater Than 50");
               header.classList.add('dark');
           }
           else{
               console.log("Less Than 50");
               header.classList.remove('dark')
           }


})


const Hamburger = document.querySelector('.ham');
const HamIcon = Hamburger.querySelector('i');
let showMenu = false;

Hamburger.addEventListener('click' , () => {
                   
        if(!showMenu){
             HamIcon.classList.remove('fa-bars');
             HamIcon.classList.add('fa-times');
            showMenu = true;
        }
        else{
            HamIcon.classList.remove('fa-times')
            HamIcon.classList.add('fa-bars');   
            showMenu = false;
        }



})