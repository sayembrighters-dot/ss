// Hero Background Slider
const heroSlides = document.querySelectorAll('.hero-slide');
let currentHeroSlide = 0;

function changeHeroSlide() {
    // Remove active and prev classes from all slides
    heroSlides.forEach(slide => {
        slide.classList.remove('active', 'prev');
    });
    
    // Add prev class to current slide (exits to left)
    heroSlides[currentHeroSlide].classList.add('prev');
    
    // Move to next slide
    currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
    
    // Add active class to new slide (enters from right)
    heroSlides[currentHeroSlide].classList.add('active');
}

// Auto-change hero background every 2 seconds
setInterval(changeHeroSlide, 2000);

// Enhanced Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = 'auto';
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = 'auto';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#fff';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.15)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Count-up animation for statistics
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Active navigation highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id], footer[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Update active nav on scroll
window.addEventListener('scroll', updateActiveNavLink);

// Set initial active state
document.addEventListener('DOMContentLoaded', updateActiveNavLink);

// Intersection Observer for triggering animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add animate class to trigger animations
            entry.target.classList.add('animate');
            
            // Animate stat counters
            const counters = entry.target.querySelectorAll('.counter');
            counters.forEach(counter => {
                if (!counter.classList.contains('animated')) {
                    counter.classList.add('animated');
                    animateCounter(counter);
                }
            });
            
            // Animate stat cards
            const statCards = entry.target.querySelectorAll('.stat-card');
            statCards.forEach(card => {
                card.classList.add('animate');
            });
            
            // Animate founder cards
            const founderCards = entry.target.querySelectorAll('.founder-card');
            founderCards.forEach(card => {
                card.classList.add('animate');
            });
            
            // Animate program cards
            const programCards = entry.target.querySelectorAll('.program-detail-card');
            programCards.forEach(card => {
                card.classList.add('animate');
            });
            
            // Animate leadership title
            const leadershipTitle = entry.target.querySelector('.leadership-title');
            if (leadershipTitle) {
                leadershipTitle.classList.add('animate');
            }
        }
    });
}, observerOptions);

// Observe all sections
const sectionsToAnimate = [
    '.stats',
    '.about',
    '.programs',
    'footer'
];

sectionsToAnimate.forEach(selector => {
    const section = document.querySelector(selector);
    if (section) {
        animationObserver.observe(section);
    }
});

// Program Carousel
const programCards = document.querySelectorAll('.program-detail-card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.querySelector('.carousel-dots');
let currentSlide = 0;

// Create dots
programCards.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('carousel-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.carousel-dot');

function updateCarousel() {
    programCards.forEach((card, index) => {
        card.classList.remove('active');
        if (index === currentSlide) {
            card.classList.add('active');
        }
    });

    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentSlide) {
            dot.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % programCards.length;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + programCards.length) % programCards.length;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
}

// Auto-play carousel on mobile
let autoPlayInterval;

function startAutoPlay() {
    if (window.innerWidth <= 768) {
        autoPlayInterval = setInterval(nextSlide, 5000);
    }
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Start auto-play on load
startAutoPlay();

// Restart auto-play on window resize
window.addEventListener('resize', () => {
    stopAutoPlay();
    startAutoPlay();
});

// Pause auto-play on hover
const programSection = document.querySelector('.programs');
if (programSection) {
    programSection.addEventListener('mouseenter', stopAutoPlay);
    programSection.addEventListener('mouseleave', startAutoPlay);
}

// Touch swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

const programDetails = document.querySelector('.program-details');
if (programDetails) {
    programDetails.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    programDetails.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
}

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        nextSlide();
    }
    if (touchEndX > touchStartX + 50) {
        prevSlide();
    }
}
