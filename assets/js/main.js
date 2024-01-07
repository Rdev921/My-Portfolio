/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose =document.getElementById('nav-close')
      
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(item=>item.addEventListener('click',linkAction));


/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader=()=>{
    const header = document.getElementById('header');
    this.scrollY>=50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
}
window.addEventListener('scroll',blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e)=>{
    e.preventDefault()

    emailjs.sendForm('service_zmdb2ac','template_z2g63x9','#contact-form','gaQlRFxmbPzZkrmx5')
    .then(()=>{
        contactMessage.textContent = 'Message sent successfully ✅'
    },()=>{
        contactMessage.textContent = 'Message not sent ❌ '

    })
}
contactForm.addEventListener('submit',sendEmail);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = ()=>{
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >=360 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollUp);


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true
})

sr.reveal(`.home__data, .home__social, .contact__container`)
sr.reveal(`.home__image`,{origin:'bottom'})
sr.reveal(`.about__data, .skills__data`,{origin:'left'})
sr.reveal(`.about__image, .skills__content`,{origin:'right'})
sr.reveal(`.projects__card`,{interval:100})

