let navicon = document.getElementById('nav_icon');
let navground_ = document.getElementById('nav_ground');
let icon = document.getElementById('close_icon');
let menu = document.getElementById('nav_menu');



new WOW().init();
jQuery("#responsive_headline").fitText();
jQuery("#responsive_headline").fitText(1.2, { minFontSize: '60px', maxFontSize: '20px' });

document.addEventListener('click',function(e){
   if(e.target.classList.contains('navicon')){
         menu.innerHTML+=`<div class="wow bounceInLeft ">
         <ul class="navbar-nav position-fixed">
         <li class="nav-item"><a class="c1 nav-link" href="#Home" data-scroll="home">Home</a></li>
         <li class="nav-item"><a class="c1 nav-link" href="#About" data-scroll="about">About corona</a></li>
         <li class="nav-item"><a class="c1 nav-link" href="#symptoms" data-scroll="symptoms">Symptoms</a></li>
         <li class="nav-item"><a class="c1 nav-link" href="#prevention" data-scroll="prevention">Prevention</a></li>
         <li class="nav-item"><a class="c1 nav-link" href="#treatment" data-scroll="treatment">Treatment</a></li>
         <li class="nav-item"><a class="c1 nav-link" href="#faq" data-scroll="faq">FAQ</a></li>
         <li class="nav-item"><a class="c1 nav-link" href="#latest" data-scroll="latest">News</a></li>
         <li class="nav-item"><a class="w-100 dnt nav-link" href="#protect">Do & Don’t</a>
         </li>
     </ul>
 </div>`;
 
         $('.navground').slideToggle();
         $('.nav-menu').slideToggle();
         $('.icon-c').fadeToggle();
         $('.navicon').fadeToggle();



        
   }
    
})

icon.addEventListener('click',function(){
   if(navicon.style.display=="none"){
      $('.navground').slideToggle();
         $('.nav-menu').slideToggle();
         $('.icon-c').fadeToggle();
         $('.navicon').fadeToggle();
   }
})
document.addEventListener('click',function(e){
   if(e.target.classList.contains('c1') ||e.target.classList.contains('dnt')){
         
      $('.navground').slideToggle(400);
      $('.nav-menu').slideToggle(400);
      $('.icon-c').fadeToggle(400);
      $('.navicon').fadeToggle(400);
   }})