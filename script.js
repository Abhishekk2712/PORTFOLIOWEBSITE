// Header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})


// Typing Effect

 let typed = new Typed('.auto-input',{
strings: ['Front-End-Developer!'],
typeSpeed: 100,
bakeSpeed: 100,
backDelay: 2000,
loop: true,
})

// Active Link State On Scroll

// Get All Links
let navlinks = document.querySelector('nav ul li a')
// Get All Sections
let Sections = document.querySelector('section')


window.addEventListener('scroll', function(){
    const scrollPos = window.scrollY + 20
    Sections.forEach(Section => {
        if(scrollPos > Section.offsetTop && scrollPos < (Section.offsetTop + Section.offsetTop)){
            navlinks.forEach(link => {
                link.classList.remove('active');
                if(Section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active')
                }
            });
        }
    });
});