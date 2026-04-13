document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Logic - Proper toggle and auto-close
    const menuToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // 2. Header Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Logo Smooth Scroll to Top
    const logoBrand = document.querySelector('.logo a');
    if (logoBrand) {
        logoBrand.addEventListener('click', (e) => {
            if (logoBrand.getAttribute('href').includes('#home')) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    }

    // 4. Active Link Highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes('#' + current)) {
                link.classList.add('active');
            }
        });
    });

    // 5. Reservation Form Handler
    const resForm = document.getElementById('res-form');
    const resSuccess = document.getElementById('res-success');
    if (resForm) {
        resForm.addEventListener('submit', (e) => {
            e.preventDefault();
            resForm.style.display = 'none';
            resSuccess.style.display = 'block';
        });
    }

});
