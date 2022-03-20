/*abre fehca o menu quando clica no icone  */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll(" nav .toggle")

/*quando clica no item do menu, esconde o menu*/
const links = document.querySelectorAll('nav ul li a')
/*mudar o header da pagina quando ser scroll*/ 
const header = document.querySelector('#header')
const navHeight = header.offsetHeight


for (const element of toggle){
    element.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
}


for(const link of links){
    link.addEventListener('click', ()=>{
        nav.classList.remove('show')
    })
}

window.addEventListener('scroll', ()=>{
    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    }else{

        header.classList.remove('scroll')
    }
})
// carrossel
const swiper = new Swiper('.swiper',{
    slidePerView: 1,
    pagination:{
        el:'.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints:{
        787:{
            slidesPerView:2,
            setWrapperSize:true,

        }
    }
})
 // ScrollReveal, mostra elementos quando rolara pagina

 const scrollReveal = ScrollReveal({
     origin: 'top', 
     distance: '30px', 
     durantion: 700,
     reset: true
 })
 
 scrollReveal.reveal(
     `#home .text,#home .image,
      #about .text, #about .image,
      #services header, #services .card,
      #testimonials header, #testimonials .testimonials,
      #contact .texto, #contact .links,
      footer .brand, footer .social`

      
      ,{interval:100})
//botao back-to -top
const backToTopButton = document.querySelector('.back-to-top')
function backToTop(){
    const backToTopButton = document.querySelector('.back-to-top')
    if(window.scrollY>= 560){
        backToTopButton.classList.add('show')
    }else{
        backToTopButton.classList.remove('show')
    }
}
const sections= document.querySelectorAll('main seciton[id]')
function activateMenuAtCurrentSection(){
    const checkpoint = window.pageYOffset +(window.innerHeight/8)*4

    for(const section of sections){
        const sectionTop =  section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId  = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd){
            document.querySelector('nav ul li a[href*='+ sectionId + ']').classList.add('active')
        }else{
            document.querySelector('nav ul li a[href*='+ sectionId + ']').classList.remove('active')
        }
    }

}

window.addEventListener('scroll', ()=>{
    backToTop()
    activateMenuAtCurrentSection()
})