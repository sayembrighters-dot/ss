// Enhanced Mobile Navigation Toggle for About Page
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

// Counter animation for stats
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

// Intersection Observer for counter animations
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.counter');
            counters.forEach(counter => {
                if (!counter.classList.contains('animated')) {
                    counter.classList.add('animated');
                    animateCounter(counter);
                }
            });
        }
    });
}, observerOptions);

// Observe stats sections
document.querySelectorAll('.stats-section').forEach(section => {
    counterObserver.observe(section);
});

// Dynamic content switching
function showContent(contentId) {
    // Hide all content
    document.querySelectorAll('.dynamic-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all badges
    document.querySelectorAll('.badge').forEach(badge => {
        badge.classList.remove('active');
    });
    
    // Show selected content
    document.getElementById(contentId).classList.add('active');
    
    // Add active class to clicked badge
    event.target.classList.add('active');
}

// Team category switching
function showCategory(categoryId) {
    // Hide all team grids
    document.querySelectorAll('.team-grid').forEach(grid => {
        grid.classList.remove('active');
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected grid
    document.getElementById(categoryId).classList.add('active');
    
    // Add active class to clicked tab
    event.target.classList.add('active');
}