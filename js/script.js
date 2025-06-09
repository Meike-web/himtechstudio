document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

// Mobile menu toggle (using Bootstrap's built-in functionality)
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');
const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
    toggle: false // We'll control it manually
});

navbarToggler.addEventListener('click', function() {
    bsCollapse.toggle();
});

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (navbarCollapse.classList.contains('show')) {
            bsCollapse.hide();
        }
    });
});

    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll animations
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .feature-box, .portfolio-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.service-card, .feature-box, .portfolio-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Trigger animations on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);

    // Sticky header on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });

    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hero typing animation (optional)
    // You can implement a typing effect for the hero title if desired
});



// WhatsApp widget animation control
const whatsappWidget = document.querySelector('.whatsapp-widget');
let previewTimeout;

whatsappWidget.addEventListener('mouseenter', () => {
  clearTimeout(previewTimeout);
});

whatsappWidget.addEventListener('mouseleave', () => {
  // Add slight delay before closing to prevent flickering
  previewTimeout = setTimeout(() => {
    const preview = document.querySelector('.whatsapp-preview');
    preview.style.width = '0';
    preview.style.height = '0';
    preview.style.opacity = '0';
    preview.style.transform = 'translateY(20px)';
  }, 300);
});



// Pricing Section Animations
gsap.utils.toArray(".pricing-card").forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1,
        ease: "back.out(1.2)"
    });
});

gsap.utils.toArray(".addon-card, .why-card").forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none"
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.1,
        ease: "power1.out"
    });
});



// Contact Page Animations
document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero animation
    gsap.from(".contact-hero h1", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
    });
    
    gsap.from(".contact-hero .lead", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "power2.out"
    });
    
    gsap.from(".response-time", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.9,
        ease: "back.out(1)"
    });
    
    gsap.from(".floating", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "elastic.out(1, 0.5)"
    });
    
    // Contact cards animation
    gsap.utils.toArray(".contact-card").forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "back.out(1.2)"
        });
    });
});


// Portfolio Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Filter projects
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filter projects
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category').includes(filterValue)) {
                    item.style.display = 'block';
                    gsap.from(item, {
                        y: 50,
                        opacity: 0,
                        duration: 0.6,
                        ease: "power1.out"
                    });
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Initialize Fancybox
    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            "zoom",
            "share",
            "slideShow",
            "fullScreen",
            "download",
            "thumbs",
            "close"
        ],
        animationEffect: "zoom-in-out",
        transitionEffect: "circular",
    });
    
    // Portfolio animations
    gsap.utils.toArray(".portfolio-item").forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "back.out(1.2)"
        });
    });
    
    // Hero animation
    gsap.from(".portfolio-hero h1", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
    });
    
    gsap.from(".portfolio-hero .lead", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "power2.out"
    });
    
    gsap.from(".floating", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "elastic.out(1, 0.5)"
    });
});