// Global variable for slider
let slideIndex = 1;

// Funciones para el slider de testimonios
function plusSlides(n) {
    // Use the global slideIndex
    showSlides(slideIndex += n);
}

// showSlides function now correctly accesses the global slideIndex
function showSlides(n) {
    let i;
    const slides = document.querySelectorAll('.testimonio-slide');
    const dots = document.querySelectorAll('.dot');

    if (!slides.length && !dots.length) return; // Exit if no slides or dots

    // Ensure slideIndex is correctly bounded
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Ocultar todos los slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Quitar la clase active de todos los dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Mostrar el slide actual y activar el dot correspondiente
    // Check if slides and dots elements exist at the current index
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
    }
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
    }
}

// Consolidated DOMContentLoaded listener
document.addEventListener('DOMContentLoaded', function() {
    // Variables from original first DOMContentLoaded
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptCookiesBtn = document.getElementById('acceptCookies');

    // Initialize slider (now uses global slideIndex)
    // Ensure slides and dots are present before calling
    if (document.querySelectorAll('.testimonio-slide').length > 0 && document.querySelectorAll('.dot').length > 0) {
        showSlides(slideIndex);
    }
    
    // Evento para el menú móvil
    if (menuToggle && navLinks) { // Added check for navLinks
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach(span => {
                span.classList.toggle('active');
            });
        });
    }
    
    // Cerrar el menú al hacer clic en un enlace (en móvil)
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 767 && navLinks && navLinks.classList.contains('active')) { // Added check for navLinks
                navLinks.classList.remove('active');
                
                if (menuToggle) { // Added check for menuToggle
                    const spans = menuToggle.querySelectorAll('span');
                    spans.forEach(span => {
                        span.classList.remove('active');
                    });
                }
            }
        });
    });
    
    // Evento para aceptar cookies
    if (cookieBanner && acceptCookiesBtn) { // Added check for cookieBanner
        acceptCookiesBtn.addEventListener('click', function() {
            cookieBanner.style.display = 'none';
            localStorage.setItem('cookiesAccepted', 'true');
        });
    }
    
    // Comprobar si ya se aceptaron las cookies
    if (localStorage.getItem('cookiesAccepted') === 'true' && cookieBanner) { // Added check for cookieBanner
        cookieBanner.style.display = 'none';
    }
    
    // Cambiar header al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (header) { // Added check for header
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
    
    // Iniciar el slider automáticamente
    // Ensure plusSlides is defined and there are slides before setting interval
    if (typeof plusSlides === 'function' && document.querySelectorAll('.testimonio-slide').length > 0) {
        setInterval(function() {
            plusSlides(1);
        }, 5000);
    }

    // Animación de aparición al hacer scroll (originally second DOMContentLoaded)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
        section.classList.add('fade-in');
    });
    
    const animatedElements = document.querySelectorAll('.feature-item, .servicio-item, .testimonio-content');
    animatedElements.forEach(el => {
        observer.observe(el);
        el.classList.add('fade-in');
    });

    // The block for CSS injection via JavaScript has been removed.
});
