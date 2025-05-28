// Funcionalidad para el menú móvil
document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptCookiesBtn = document.getElementById('acceptCookies');
    
    // Testimonios slider
    let slideIndex = 1;
    showSlides(slideIndex);
    
    // Evento para el menú móvil
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animar las barras del menú hamburguesa
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
            if (window.innerWidth <= 767) {
                navLinks.classList.remove('active');
                
                const spans = menuToggle.querySelectorAll('span');
                spans.forEach(span => {
                    span.classList.remove('active');
                });
            }
        });
    });
    
    // Evento para aceptar cookies
    if (acceptCookiesBtn) {
        acceptCookiesBtn.addEventListener('click', function() {
            cookieBanner.style.display = 'none';
            // Aquí se podría añadir código para guardar la preferencia en localStorage
            localStorage.setItem('cookiesAccepted', 'true');
        });
    }
    
    // Comprobar si ya se aceptaron las cookies
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        cookieBanner.style.display = 'none';
    }
    
    // Cambiar header al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Iniciar el slider automáticamente
    setInterval(function() {
        plusSlides(1);
    }, 5000);
});

// Funciones para el slider de testimonios
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.querySelectorAll('.testimonio-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (!slides.length) return;
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    // Ocultar todos los slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Quitar la clase active de todos los dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Mostrar el slide actual y activar el dot correspondiente
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Animación de aparición al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
    // Detectar elementos cuando entran en el viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observar secciones principales
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
        section.classList.add('fade-in');
    });
    
    // Observar elementos específicos
    const animatedElements = document.querySelectorAll('.feature-item, .servicio-item, .testimonio-content');
    animatedElements.forEach(el => {
        observer.observe(el);
        el.classList.add('fade-in');
    });
});

// Añadir estilos CSS para las animaciones
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .menu-toggle span.active:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .menu-toggle span.active:nth-child(2) {
            opacity: 0;
        }
        
        .menu-toggle span.active:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -7px);
        }
        
        .header.scrolled {
            padding: 10px 0;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
    `;
    document.head.appendChild(style);
});
