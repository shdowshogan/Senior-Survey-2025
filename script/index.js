// const menu = document.querySelector('#mobile-menu');
// const menuLinks = document.querySelector('.navbar__menu');

// menu.addEventListener('click',function(){
//     console.log('clicked')
//     menu.classList.toggle('is-active');
//     menuLinks.classList.toggle('active');
// });



        function revealOnScroll() {
            const sections = document.querySelectorAll('.section-container');
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (sectionTop < windowHeight - 100) {
                    section.classList.add('visible');
                }
            });
        }

        window.addEventListener('scroll', revealOnScroll);
        window.addEventListener('load', revealOnScroll);
