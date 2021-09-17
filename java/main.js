let navicon = document.getElementById('nav_icon');
let navground_ = document.getElementById('nav_ground');
let icon = document.getElementById('close_icon');
let menu = document.getElementById('nav_menu');
let acco = document.getElementById('acco');




var scroll = new SmoothScroll('a[href*="#"]',{
    speed :200
});

new WOW().init();
jQuery("#responsive_headline").fitText();
jQuery("#responsive_headline").fitText(1.2, { minFontSize: '60px', maxFontSize: '20px' });

document.addEventListener('click',function(e){
   if(e.target.classList.contains('navicon')){
         menu.innerHTML=`
         <ul class="navbar-nav lft" style="visibility: visible; animation-name: bounceInLeft;">
         <li class="nav-item"><a class="c1 mag nav-link" href="#Home" data-scroll="home">Home</a></li>
         <li class="nav-item"><a class="c1 mag nav-link" href="#About" data-scroll="about">About corona</a></li>
         <li class="nav-item"><a class="c1 mag nav-link" href="#symptoms" data-scroll="symptoms">Symptoms</a></li>
         <li class="nav-item"><a class="c1 mag nav-link" href="#Prevention" data-scroll="prevention">Prevention</a></li>
         <li class="nav-item"><a class="c1 mag nav-link" href="#Treatment" data-scroll="treatment">Treatment</a></li>
         <li class="nav-item"><a class="c1 mag nav-link" href="#faq" data-scroll="faq">FAQ</a></li>
         <li class="nav-item"><a class="c1 mag nav-link" href="#news" data-scroll="latest">News</a></li>
         <li class="nav-item"><a class=" dnt nav-link" href="#dos">Do & Don’t</a>
         </li>
     </ul>`;
         
         $('.navground').slideToggle();
         $('.nav-menu').slideToggle();
         $('.icon-c').fadeToggle();
         $('.navicon').fadeToggle();
   


        
   }
    
})
$(window).scroll(function(){
    x=$(window).scrollTop();
    console.log(x);
});


$(window).scroll(function(){
    if($(window).scrollTop() > 100) {
        $('.navbar').css(            
            'background',"#F7F9FE"

        )
        $('.arrow').fadeIn();
    }else{
        $('.navbar').css(
            'background',"white"


        )
        $('.arrow').fadeOut();
    }
    
});


icon.addEventListener('click',function(){
   if(navicon.style.display=="none"){
      $('.navground').slideToggle();
         $('.nav-menu').slideToggle();
         $('.icon-c').fadeToggle();
         $('.navicon').fadeToggle();
   }
});
document.addEventListener('click',function(e){
   if(e.target.classList.contains('c1') ||e.target.classList.contains('dnt')){
         
      $('.navground').slideToggle(400);
      $('.nav-menu').slideToggle(400);
      $('.icon-c').fadeToggle(400);
      $('.navicon').fadeToggle(400);
   }});
   $(document).ready(function(){
      $('.nav-i1').click(function(){
        
         acco.innerHTML=`<div class="accordion" id="accordionExample">
         <div class="card">
             <div class="card-header" id="headingOne">
                 <h5 class="mb-0">
                     <button class="bmw btn-block text-left" type="button" data-toggle="collapse"
                         data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                         What is a novel coronavirus? <span><i class="fas fa-plus"></i></span>
                     </button>
                 </h5>
             </div>

             <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                 data-parent="#accordionExample">
                 <div class="card-body">
                     <p>On February 11, 2020 the World Health Organization announced an official name for
                         the disease that is causing the 2019 novel coronavirus outbreak, first
                         identified in Wuhan China. The new name of this disease is coronavirus disease
                         2019, abbreviated as COVID-19. In COVID-19, ‘CO’ stands for ‘corona,’ ‘VI’ for
                         ‘virus,’ and ‘D’ for disease. Formerly, this disease was referred to as “2019
                         novel coronavirus” or “2019-nCoV”.
                     </p>
                     <p>A novel coronavirus is a new coronavirus that has not been previously identified.
                         The virus causing coronavirus disease 2019 (COVID-19), is not the same as the
                         coronaviruses that commonly circulate among humans and cause mild illness, like
                         the common cold.

                     </p>
                 </div>
             </div>
         </div>
         <div class="card">
             <div class="card-header" id="headingTwo">
                 <h5 class="mb-0">
                     <button class="bmw btn-block text-left collapsed" type="button"
                         data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                         aria-controls="collapseTwo">
                         Why is the disease being called coronavirus disease 2019 COVID-19?<span><i
                                 class="fas fa-plus"></i></span>
                     </button>
                 </h5>
             </div>
             <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                 data-parent="#accordionExample">
                 <div class="card-body">
                     <p>On February 11, 2020 the World Health Organization announced an official name for
                         the disease that is causing the 2019 novel coronavirus outbreak, first
                         identified in Wuhan China. The new name of this disease is coronavirus disease
                         2019, abbreviated as COVID-19. In COVID-19, ‘CO’ stands for ‘corona,’ ‘VI’ for
                         ‘virus,’ and ‘D’ for disease. Formerly, this disease was referred to as “2019
                         novel coronavirus” or “2019-nCoV”.

                     </p>
                     <p>
                         There are many types of human coronaviruses including some that commonly cause
                         mild upper-respiratory tract illnesses. COVID-19 is a new disease, caused be a
                         novel (or new) coronavirus that has not previously been seen in humans. The name
                         of this disease was selected following the World Health Organization (WHO) best
                         practiceexternal icon for naming of new human infectious diseases.


                     </p>
                 </div>
             </div>
         </div>
         <div class="card">
             <div class="card-header" id="headingThree">
                 <h5 class="mb-0">
                     <button class="bmw btn-block text-left collapsed" type="button"
                         data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                         aria-controls="collapseThree">
                         How can people help stop stigma related to COVID-19?<span><i
                                 class="fas fa-plus"></i></span>
                     </button>
                 </h5>
             </div>
             <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                 data-parent="#accordionExample">
                 <div class="card-body">
                     <p>People can fight stigma and help, not hurt, others by providing social support.
                         Counter stigma by learning and sharing facts. Communicating the facts that
                         viruses
                         do not target specific racial or ethnic groups and how COVID-19 actually spreads
                         can
                         help stop stigma.</p>
                 </div>
             </div>
         </div>
         <div class="card">
             <div class="card-header" id="headingThree">
                 <h5 class="mb-0">
                     <button class="bmw btn-block text-left collapsed" type="button"
                         data-toggle="collapse" data-target="#collapseFour" aria-expanded="false"
                         aria-controls="collapseFour">
                         Why might someone blame or avoid individuals and groups?<span><i
                                 class="fas fa-plus"></i></span>
                     </button>
                 </h5>
             </div>
             <div id="collapseFour" class="collapse" aria-labelledby="headingFour"
                 data-parent="#accordionExample">
                 <div class="card-body">
                     <p>People in the U.S. may be worried or anxious about friends and relatives who are
                         living in or visiting areas where COVID-19 is spreading. Some people are worried
                         about the disease. Fear and anxiety can lead to social stigma, for example,
                         towards Chinese or other Asian Americans or people who were in quarantine.
                     </p>
                     <p>Stigma is discrimination against an identifiable group of people, a place, or a
                         nation. Stigma is associated with a lack of knowledge about how COVID-19
                         spreads, a need to blame someone, fears about disease and death, and gossip that
                         spreads rumors and myths.
                     </p>
                     <p>
                         Stigma hurts everyone by creating more fear or anger towards ordinary people
                         instead of the disease that is causing the problem.
                     </p>
                 </div>
             </div>
         </div>
     </div>`;
     $('.acco1').hide();
     $('.acco1').fadeIn(500);
    
      })
      

     
    
   });
   $(document).ready(function(){
      $('.nav-i2').click(function(){
         acco.innerHTML = ` <div class="accordion" id="accordionExample">
         <div class="card">
             <div class="card-header" id="headingOne">
                 <h5 class="mb-0">
                     <button class="bmw btn-block text-left" type="button" data-toggle="collapse"
                         data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                         What is the source of the virus?
                         <span><i class="fas fa-plus"></i></span>
                     </button>
                 </h5>
             </div>

             <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                 data-parent="#accordionExample">
                 <div class="card-body">
                     <p>Coronaviruses are a large family of viruses. Some cause illness in people, and
                         others, such as canine and feline coronaviruses, only infect animals. Rarely,
                         animal coronaviruses that infect animals have emerged to infect people and can
                         spread between people. This is suspected to have occurred for the virus that
                         causes COVID-19. Middle East Respiratory Syndrome (MERS) and Severe Acute
                         Respiratory Syndrome (SARS) are two other examples of coronaviruses that
                         originated from animals and then spread to people. More information about the
                         source and spread of COVID-19 is available on the Situation Summary: Source and
                         Spread of the Virus.


                     </p>

                 </div>
             </div>
         </div>
         <div class="card">
             <div class="card-header" id="headingTwo">
                 <h5 class="mb-0">
                     <button class="bmw btn-block text-left collapsed" type="button"
                         data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                         aria-controls="collapseTwo">
                         How does the virus spread?

                         <span><i class="fas fa-plus"></i></span>
                     </button>
                 </h5>
             </div>
             <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                 data-parent="#accordionExample">
                 <div class="card-body">
                     <p>This virus was first detected in Wuhan City, Hubei Province, China. The first
                         infections were linked to a live animal market, but the virus is now spreading
                         from person-to-person. It’s important to note that person-to-person spread can
                         happen on a continuum. Some viruses are highly contagious (like measles), while
                         other viruses are less so.
                     </p>
                     <p>
                         The virus that causes COVID-19 seems to be spreading easily and sustainably in
                         the community (“community spread”) in some affected geographic areas. Community
                         spread means people have been infected with the virus in an area, including some
                         who are not sure how or where they became infected.
                     </p>
                     <p>Learn what is known about the spread of newly emerged coronaviruses.
                     </p>
                 </div>
             </div>
         </div>
         <div class="card">
             <div class="card-header" id="headingThree">
                 <h5 class="mb-0">
                     <button class="bmw btn-block text-left collapsed" type="button"
                         data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                         aria-controls="collapseThree">
                         Can someone who has had COVID-19 spread the illness to others?

                         <span><i class="fas fa-plus"></i></span>
                     </button>
                 </h5>
             </div>
             <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                 data-parent="#accordionExample">
                 <div class="card-body">
                     <p>The virus that causes COVID-19 is spreading from person-to-person. Someone who is
                         actively sick with COVID-19 can spread the illness to others. That is why CDC
                         recommends that these patients be isolated either in the hospital or at home
                         (depending on how sick they are) until they are better and no longer pose a risk
                         of infecting others.
                     </p>
                     <p>How long someone is actively sick can vary so the decision on when to release
                         someone from isolation is made on a case-by-case basis in consultation with
                         doctors, infection prevention and control experts, and public health officials
                         and involves considering specifics of each situation including disease severity,
                         illness signs and symptoms, and results of laboratory testing for that patient.

                     </p>
                     <p>Current CDC guidance for when it is OK to release someone from isolation is made
                         on a case by case basis and includes meeting all of the following requirements:

                     </p>
                     <p>The patient is free from fever without the use of fever-reducing medications.

                     </p>
                     <p>The patient is no longer showing symptoms, including cough.
                     </p>
                     <p>The patient has tested negative on at least two consecutive respiratory specimens
                         collected at least 24 hours apart.

                     </p>
                     <p></p>
                 </div>
             </div>
         </div>
         <div class="card">
             <div class="card-header" id="headingFour">
                 <h5 class="mb-0">
                     <button class="bmw btn-block text-left collapsed" type="button"
                         data-toggle="collapse" data-target="#collapseFour" aria-expanded="false"
                         aria-controls="collapseFour">
                         Will warm weather stop the outbreak of COVID-19?
                         <span><i class="fas fa-plus"></i></span>
                     </button>
                 </h5>
             </div>
             <div id="collapseFour" class="collapse" aria-labelledby="headingFour"
                 data-parent="#accordionExample">
                 <div class="card-body">
                     <p>
                         It is not yet known whether weather and temperature impact the spread of
                         COVID-19. Some other viruses, like the common cold and flu, spread more during
                         cold weather months but that does not mean it is impossible to become sick with
                         these viruses during other months. At this time, it is not known whether the
                         spread of COVID-19 will decrease when weather becomes warmer. There is much more
                         to learn about the transmissibility, severity, and other features associated
                         with COVID-19 and investigations are ongoing.


                     </p>
                 </div>
             </div>
         </div>
         <div class="card">
             <div class="card-header" id="headingFive">
                 <h5 class="mb-0">
                     <button class="bmw btn-block text-left collapsed" type="button"
                         data-toggle="collapse" data-target="#collapseFive" aria-expanded="false"
                         aria-controls="collapseFive">
                         Can the virus that causes COVID-19 be spread through food, including
                         refrigerated or frozen food?

                         <span><i class="fas fa-plus"></i></span>
                     </button>
                 </h5>
             </div>
             <div id="collapseFive" class="collapse" aria-labelledby="headingFive"
                 data-parent="#accordionExample">
                 <div class="card-body">
                     <p>Coronaviruses are generally thought to be spread from person-to-person through
                         respiratory droplets. Currently there is no evidence to support transmission of
                         COVID-19 associated with food. Before preparing or eating food it is important
                         to always wash your hands with soap and water for 20 seconds for general food
                         safety. Throughout the day wash your hands after blowing your nose, coughing or
                         sneezing, or going to the bathroom.
                     </p>
                     <p>It may be possible that a person can get COVID-19 by touching a surface or object
                         that has the virus on it and then touching their own mouth, nose, or possibly
                         their eyes, but this is not thought to be the main way the virus spreads.
                     </p>
                     <p>
                         In general, because of poor survivability of these coronaviruses on surfaces,
                         there is likely very low risk of spread from food products or packaging that are
                         shipped over a period of days or weeks at ambient, refrigerated, or frozen
                         temperatures.
                     </p>
                 </div>
             </div>
         </div>
         <div class="card">
             <div class="card-header" id="headingSix">
                 <h5 class="mb-0">
                     <button class="bmw btn-block text-left collapsed" type="button"
                         data-toggle="collapse" data-target="#collapseSix" aria-expanded="false"
                         aria-controls="collapseSix">
                         What is community spread?y might someone blame or avoid individuals and
                         groups?<span><i class="fas fa-plus"></i></span>
                     </button>
                 </h5>
             </div>
             <div id="collapseSix" class="collapse" aria-labelledby="headingSix"
                 data-parent="#accordionExample">
                 <div class="card-body">
                     <p>Community spread means people have been infected with the virus in an area,
                         including some who are not sure how or where they became infected.
                     </p>
                 </div>
             </div>
         </div>
     </div>`;
     $('.acco1').hide();
     $('.acco1').fadeIn(500);
     });
     
   });
   $(document).ready(function(){
      $('.nav-i3').click(function(){
       acco.innerHTML=` <div class="accordion" id="accordionExample">
       <div class="card">
           <div class="card-header" id="headingOne">
               <h5 class="mb-0">
                   <button class="bmw btn-block text-left" type="button" data-toggle="collapse"
                       data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                       What can I do to protect myself and prevent the spread of disease?

                       <span><i class="fas fa-plus"></i></span>
                   </button>
               </h5>
           </div>

           <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
               data-parent="#accordionExample">
               <div class="card-body">
                   <p>Stay aware of the latest information on the COVID-19 outbreak, available on the
                       WHO website and through your national and local public health authority. Many
                       countries around the world have seen cases of COVID-19 and several have seen
                       outbreaks. Authorities in China and some other countries have succeeded in
                       slowing or stopping their outbreaks. However, the situation is unpredictable so
                       check regularly for the latest news.
                   </p>
                   <p>You can reduce your chances of being infected or spreading COVID-19 by taking
                       some simple precautions:
                   </p>
                   <p>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash
                       them with soap and water.

                   </p>
                   <p><b>Why?</b> Washing your hands with soap and water or using alcohol-based hand
                       rub kills viruses that may be on your hands.

                   </p>
                   <p>Maintain at least 1 metre (3 feet) distance between yourself and anyone who is
                       coughing or sneezing.

                   </p>
                   <p><b>Why?</b> When someone coughs or sneezes they spray small liquid droplets from
                       their nose or mouth which may contain virus. If you are too close, you can
                       breathe in the droplets, including the COVID-19 virus if the person coughing has
                       the disease.

                   </p>
                   <p>Avoid touching eyes, nose and mouth.
                   </p>
               </div>
           </div>
       </div>
       <div class="card">
           <div class="card-header" id="headingTwo">
               <h5 class="mb-0">
                   <button class="bmw btn-block text-left collapsed" type="button"
                       data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                       aria-controls="collapseTwo">
                       What should I do if I had close contact with someone who has COVID-19?

                       <span><i class="fas fa-plus"></i></span>
                   </button>
               </h5>
           </div>
           <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
               data-parent="#accordionExample">
               <div class="card-body">
                   <p>Household members, intimate partners, and caregivers in a nonhealthcare setting
                       may have close contact2 with a person with symptomatic, laboratory-confirmed
                       COVID-19 or a person under investigation. Close contacts should monitor their
                       health; they should call their healthcare provider right away if they develop
                       symptoms suggestive of COVID-19 (e.g., fever, cough, shortness of breath)
                   </p>
                   <p>
                       Close contacts should also follow these recommendations:
                   </p>
                   <p>Make sure that you understand and can help the patient follow their healthcare
                       provider’s instructions for medication(s) and care. You should help the patient
                       with basic needs in the home and provide support for getting groceries,
                       prescriptions, and other personal needs.

                   </p>
                   <p>Monitor the patient’s symptoms. If the patient is getting sicker, call his or her
                       healthcare provider and tell them that the patient has laboratory-confirmed
                       COVID-19. This will help the healthcare provider’s office take steps to keep
                       other people in the office or waiting room from getting infected. Ask the
                       healthcare provider to call the local or state health department for additional
                       guidance. If the patient has a medical emergency and you need to call 911,
                       notify the dispatch personnel that the patient has, or is being evaluated for
                       COVID-19.

                   </p>
                   <p>Household members should stay in another room or be separated from the patient as
                       much as possible. Household members should use a separate bedroom and bathroom,
                       if available.

                   </p>
                   <p>Prohibit visitors who do not have an essential need to be in the home.
                   </p>
                   <p>Household members should care for any pets in the home. Do not handle pets or
                       other animals while sick. For more information, see COVID-19 and Animals.
                   </p>
                   <p>Make sure that shared spaces in the home have good air flow, such as by an air
                       conditioner or an opened window, weather permitting.
                   </p>
                   <p>Perform hand hygiene frequently. Wash your hands often with soap and water for at
                       least 20 seconds or use an alcohol-based hand sanitizer that contains 60 to 95%
                       alcohol, covering all surfaces of your hands and rubbing them together until
                       they feel dry. Soap and water should be used preferentially if hands are visibly
                       dirty.

                   </p>
                   <p>Avoid touching your eyes, nose, and mouth with unwashed hands.
                   </p>

               </div>
           </div>
       </div>
       <div class="card">
           <div class="card-header" id="headingThree">
               <h5 class="mb-0">
                   <button class="bmw btn-block text-left collapsed" type="button"
                       data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                       aria-controls="collapseThree">
                       Who is at higher risk for serious illness from COVID-19?

                       <span><i class="fas fa-plus"></i></span>
                   </button>
               </h5>
           </div>
           <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
               data-parent="#accordionExample">
               <div class="card-body">
                   <p><b>Older adults and people of any age who have serious underlying medical
                           conditions</b> may be at higher risk for more serious complications from
                       COVID-19. These people who may be at higher risk of getting very sick from this
                       illness, includes:</p>
                   <p><b>Older adults

                       </b></p>
                   <p><b>People who have serious underlying medical conditions like:
                       </b></p>
                   <p>Heart disease
                   </p>
                   <p>Diabetes</p>
                   <p>Lung disease
                   </p>

               </div>
           </div>
       </div>
       <div class="card">
           <div class="card-header" id="headingFour">
               <h5 class="mb-0">
                   <button class="bmw btn-block text-left collapsed" type="button"
                       data-toggle="collapse" data-target="#collapseFour" aria-expanded="false"
                       aria-controls="collapseFour">
                       What should people at higher risk of serious illness with COVID-19 do?

                       <span><i class="fas fa-plus"></i></span>
                   </button>
               </h5>
           </div>
           <div id="collapseFour" class="collapse" aria-labelledby="headingFour"
               data-parent="#accordionExample">
               <div class="card-body">
                   <p>If you are at higher risk of getting very sick from COVID-19, you should: stock
                       up on supplies; take everyday precautions to keep space between yourself and
                       others; when you go out in public, keep away from others who are sick; limit
                       close contact and wash your hands often; and avoid crowds, cruise travel, and
                       non-essential travel. If there is an outbreak in your community, stay home as
                       much as possible. Watch for symptoms and emergency signs. If you get sick, stay
                       home and call your doctor. More information on how to prepare, what to do if you
                       get sick, and how communities and caregivers can support those at higher risk is
                       available on People at Risk for Serious Illness from COVID-19.

                   </p>
               </div>
           </div>
       </div>
   </div>`;
   $('.acco1').hide();
   $('.acco1').fadeIn(500);
      });
   });
   $(document).ready(function(){
      $('.nav-i4').click(function(){
         acco.innerHTML=`  <div class="accordion" id="accordionExample">
         <div class="card">
             <div class="card-header" id="headingOne">
                 <h5 class="mb-0">
                     <button class="bmw btn-block text-left" type="button" data-toggle="collapse"
                         data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                         What are the symptoms of COVID-19?
                         <span><i class="fas fa-plus"></i></span>
                     </button>
                 </h5>
             </div>

             <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                 data-parent="#accordionExample">
                 <div class="card-body">
                     <p>The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some
                         patients may have aches and pains, nasal congestion, runny nose, sore throat or
                         diarrhea. These symptoms are usually mild and begin gradually. Some people
                         become infected but don’t develop any symptoms and don't feel unwell. Most
                         people (about 80%) recover from the disease without needing special treatment.
                         Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and
                         develops difficulty breathing. Older people, and those with underlying medical
                         problems like high blood pressure, heart problems or diabetes, are more likely
                         to develop serious illness. People with fever, cough and difficulty breathing
                         should seek medical attention.
                     </p>
                     <p>Read about COVID-19 Symptoms from CDC.gov.
                     </p>
                 </div>
             </div>
         </div>
         <div class="card">
             <div class="card-header" id="headingTwo">
                 <h5 class="mb-0">
                     <button class="bmw btn-block text-left collapsed" type="button"
                         data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                         aria-controls="collapseTwo">
                         Should I be tested for COVID-19?
                         <span><i class="fas fa-plus"></i></span>
                     </button>
                 </h5>
             </div>
             <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                 data-parent="#accordionExample">
                 <div class="card-body">
                     <p>Not everyone needs to be tested for COVID-19. For information about testing, see
                         for COVID-19.
                     </p>
                 </div>
             </div>
         </div>
         <div class="card">
             <div class="card-header" id="headingThree">
                 <h5 class="mb-0">
                     <button class="bmw btn-block text-left collapsed" type="button"
                         data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                         aria-controls="collapseThree">
                         Where can I get tested for COVID-19?
                         <span><i class="fas fa-plus"></i></span>
                     </button>
                 </h5>
             </div>
             <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                 data-parent="#accordionExample">
                 <div class="card-body">
                     <p>The process and locations for testing vary from place to place. Contact your
                         state, local, tribal, or territorial department for more information, or reach
                         out to a medical provider. State and local public health departments have
                         received tests from CDC while medical providers are getting tests developed by
                         commercial manufacturers. While supplies of these tests are increasing, it may
                         still be difficult to find someplace to get tested.

                     </p>

                 </div>
             </div>
         </div>
         <div class="card">
             <div class="card-header" id="headingFour">
                 <h5 class="mb-0">
                     <button class="bmw btn-block text-left collapsed" type="button"
                         data-toggle="collapse" data-target="#collapseFour" aria-expanded="false"
                         aria-controls="collapseFour">
                         Can a person test negative and later test positive for COVID-19?
                         <span><i class="fas fa-plus"></i></span>
                     </button>
                 </h5>
             </div>
             <div id="collapseFour" class="collapse" aria-labelledby="headingFour"
                 data-parent="#accordionExample">
                 <div class="card-body">
                     <p>Using the CDC-developed diagnostic test, a negative result means that the virus
                         that causes COVID-19 was not found in the person’s sample. In the early stages
                         of infection, it is possible the virus will not be detected.

                     </p>
                     <p>
                         For COVID-19, a negative test result for a sample collected while a person has
                         symptoms likely means that the COVID-19 virus is not causing their current
                         illness.

                     </p>
                 </div>
             </div>
         </div>
     </div>`; 
         $('.acco1').hide();
         $('.acco1').fadeIn(500);

      });
   });
   $(document).ready(function(){
      $('.nav-i5').click(function(){
            acco.innerHTML=`  <div class="accordion" id="accordionExample">
            <div class="card">
                <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        <button class="bmw btn-block text-left" type="button" data-toggle="collapse"
                            data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What should I do if there is an outbreak in my community?

                            <span><i class="fas fa-plus"></i></span>
                        </button>
                    </h5>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                    data-parent="#accordionExample">
                    <div class="card-body">
                        <p>During an outbreak, stay calm and put your preparedness plan to work. Follow the
                            steps below:
                        </p>
                        <p><b>Protect yourself and others.
                            </b></p>
                        <p>Stay home if you are sick. Keep away from people who are sick. Limit close
                            contact with others as much as possible (about 6 feet).
                        </p>
                        <p><b>Put your household plan into action.
                            </b></p>
                        <p><b>Stay informed about the local COVID-19 situation.</b>
                            Be aware of temporary school dismissals in your area, as this may affect your
                            household’s daily routine.</p>
                        <p><b>Continue practicing everyday preventive actions.</b>Cover coughs and sneezes
                            with a tissue and wash your hands often with soap and water for at least 20
                            seconds. If soap and water are not available, use a hand sanitizer that contains
                            60% alcohol. Clean frequently touched surfaces and objects daily using a regular
                            household detergent and water.</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                        <button class="bmw btn-block text-left collapsed" type="button"
                            data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                            aria-controls="collapseTwo">
                            How do I prepare my children in case of COVID-19 outbreak in our community?

                            <span><i class="fas fa-plus"></i></span>
                        </button>
                    </h5>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                    data-parent="#accordionExample">
                    <div class="card-body">
                        <p>Outbreaks can be stressful for adults and children. Talk with your children about
                            the outbreak, try to stay calm, and reassure them that they are safe. If
                            appropriate, explain to them that most illness from COVID-19 seems to be mild.
                        </p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                        <button class="bmw btn-block text-left collapsed" type="button"
                            data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                            aria-controls="collapseThree">
                            What steps should parents take to protect children during a community outbreak?

                            <span><i class="fas fa-plus"></i></span>
                        </button>
                    </h5>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                    data-parent="#accordionExample">
                    <div class="card-body">
                        <p>This is a new virus and we are still learning about it, but so far, there does
                            not seem to be a lot of illness in children. Most illness, including serious
                            illness, is happening in adults of working age and older adults. If there cases
                            of COVID-19 that impact your child’s school, the school may dismiss students.
                            Keep track of school dismissals in your community. Read or watch local media
                            sources that report school dismissals. If schools are dismissed temporarily, use
                            alternative childcare arrangements, if needed.
                        </p>
                        <p>If your child/children become sick with COVID-19, notify their childcare facility
                            or school. Talk with teachers about classroom assignments and activities they
                            can do from home to keep up with their schoolwork.

                        </p>
                        <p>Discourage children and teens from gathering in other public places while school
                            is dismissed to help slow the spread of COVID-19 in the community.

                        </p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingFour">
                    <h5 class="mb-0">
                        <button class="bmw btn-block text-left collapsed" type="button"
                            data-toggle="collapse" data-target="#collapseFour" aria-expanded="false"
                            aria-controls="collapseFour">
                            Will schools be dismissed if there is an outbreak in my community?

                            <span><i class="fas fa-plus"></i></span>
                        </button>
                    </h5>
                </div>
                <div id="collapseFour" class="collapse" aria-labelledby="headingFour"
                    data-parent="#accordionExample">
                    <div class="card-body">
                        <p>Depending on the situation, public health officials may recommend community
                            actions to reduce exposures to COVID-19, such as school dismissals. Read or
                            watch local media sources that report school dismissals or and watch for
                            communication from your child’s school. If schools are dismissed temporarily,
                            discourage students and staff from gathering or socializing anywhere, like at a
                            friend’s house, a favorite restaurant, or the local shopping mall.

                        </p>
                        
                    </div>
                </div>
            </div>
        </div>`;
        $('.acco1').hide();
        $('.acco1').fadeIn(500);
      });
   });
   $(document).ready(function(){
      $('.nav-i6').click(function(){
         acco.innerHTML=`<div class="accordion" id="accordionExample">
         <div class="card">
             <div class="card-header" id="headingOne">
                 <h5 class="mb-0">
                     <button class="bmw btn-block text-left" type="button" data-toggle="collapse"
                         data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                         COVID-19 virus can be transmitted in areas with hot and humid climates?

                         <span><i class="fas fa-plus"></i></span>
                     </button>
                 </h5>
             </div>

             <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                 data-parent="#accordionExample">
                 <div class="card-body">
                     <p>From the evidence so far, the COVID-19 virus can be transmitted in ALL AREAS,
                         including areas with hot and humid weather. Regardless of climate, adopt
                         protective measures if you live in, or travel to an area reporting COVID-19. The
                         best way to protect yourself against COVID-19 is by frequently cleaning your
                         hands. By doing this you eliminate viruses that may be on your hands and avoid
                         infection that could occur by then touching your eyes, mouth, and nose.

                     </p>
                 </div>
             </div>
         </div>
         <div class="card">
             <div class="card-header" id="headingTwo">
                 <h5 class="mb-0">
                     <button class="bmw btn-block text-left collapsed" type="button"
                         data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                         aria-controls="collapseTwo">
                         Cold weather and snow CANNOT kill the new coronavirus


                         <span><i class="fas fa-plus"></i></span>
                     </button>
                 </h5>
             </div>
             <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                 data-parent="#accordionExample">
                 <div class="card-body">
                     <p>There is no reason to believe that cold weather can kill the new coronavirus or
                         other diseases. The normal human body temperature remains around 36.5°C to 37°C,
                         regardless of the external temperature or weather. The most effective way to
                         protect yourself against the new coronavirus is by frequently cleaning your
                         hands with alcohol-based hand rub or washing them with soap and water.

                     </p>
                 </div>
             </div>
         </div>
         <div class="card">
             <div class="card-header" id="headingThree">
                 <h5 class="mb-0">
                     <button class="bmw btn-block text-left collapsed" type="button"
                         data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                         aria-controls="collapseThree">
                         Taking a hot bath does not prevent the new coronavirus disease


                         <span><i class="fas fa-plus"></i></span>
                     </button>
                 </h5>
             </div>
             <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                 data-parent="#accordionExample">
                 <div class="card-body">
                     <p>Taking a hot bath will not prevent you from catching COVID-19. Your normal body
                         temperature remains around 36.5°C to 37°C, regardless of the temperature of your
                         bath or shower. Actually, taking a hot bath with extremely hot water can be
                         harmful, as it can burn you. The best way to protect yourself against COVID-19
                         is by frequently cleaning your hands. By doing this you eliminate viruses that
                         may be on your hands and avoid infection that could occur by then touching your
                         eyes, mouth, and nose.

                     </p>
                 </div>
             </div>
         </div>
         <div class="card">
             <div class="card-header" id="headingFour">
                 <h5 class="mb-0">
                     <button class="bmw btn-block text-left collapsed" type="button"
                         data-toggle="collapse" data-target="#collapseFour" aria-expanded="false"
                         aria-controls="collapseFour">
                         The new coronavirus CANNOT be transmitted through mosquito bites.


                         <span><i class="fas fa-plus"></i></span>
                     </button>
                 </h5>
             </div>
             <div id="collapseFour" class="collapse" aria-labelledby="headingFour"
                 data-parent="#accordionExample">
                 <div class="card-body">
                     <p>To date there has been no information nor evidence to suggest that the new
                         coronavirus could be transmitted by mosquitoes. The new coronavirus is a
                         respiratory virus which spreads primarily through droplets generated when an
                         infected person coughs or sneezes, or through droplets of saliva or discharge
                         from the nose. To protect yourself, clean your hands frequently with an
                         alcohol-based hand rub or wash them with soap and water. Also, avoid close
                         contact with anyone who is coughing and sneezing.

                     </p>

                 </div>
             </div>
         </div>
         <div class="card">
             <div class="card-header" id="headingFive">
                 <h5 class="mb-0">
                     <button class="bmw btn-block text-left collapsed" type="button"
                         data-toggle="collapse" data-target="#collapseFive" aria-expanded="false"
                         aria-controls="collapseFive">
                         Are hand dryers effective in killing the new coronavirus?



                         <span><i class="fas fa-plus"></i></span>
                     </button>
                 </h5>
             </div>
             <div id="collapseFive" class="collapse" aria-labelledby="headingFive"
                 data-parent="#accordionExample">
                 <div class="card-body">
                     <p>No. Hand dryers are not effective in killing the 2019-nCoV. To protect yourself
                         against the new coronavirus, you should frequently clean your hands with an
                         alcohol-based hand rub or wash them with soap and water. Once your hands are
                         cleaned, you should dry them thoroughly by using paper towels or a warm air
                         dryer.

                     </p>

                 </div>
             </div>
         </div>
         <div class="card">
             <div class="card-header" id="headingSix">
                 <h5 class="mb-0">
                     <button class="bmw btn-block text-left collapsed" type="button"
                         data-toggle="collapse" data-target="#collapseSix" aria-expanded="false"
                         aria-controls="collapseSix">
                         Can an ultraviolet disinfection lamp kill the new coronavirus?



                         <span><i class="fas fa-plus"></i></span>
                     </button>
                 </h5>
             </div>
             <div id="collapseSix" class="collapse" aria-labelledby="headingSix"
                 data-parent="#accordionExample">
                 <div class="card-body">
                     <p>UV lamps should not be used to sterilize hands or other areas of skin as UV
                         radiation can cause skin irritation.

                     </p>
                 </div>
             </div>
         </div>
     </div>`;
     $('.acco1').hide();
     $('.acco1').fadeIn(500);
      });
   });

   