// Anime.js Effects for Valorant-Themed Website

// Navigation Hover Animation
document.querySelectorAll('.nav a').forEach((link) => {
    link.addEventListener('mouseenter', () => {
        anime({
            targets: link,
            color: ['#f02626', '#fff'],
            duration: 300,
            easing: 'easeInOutQuad',
        });
    });
    link.addEventListener('mouseleave', () => {
        anime({
            targets: link,
            color: ['#fff', '#f02626'],
            duration: 300,
            easing: 'easeInOutQuad',
        });
    });
});



// Parallax Scroll Effect
document.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    anime({
        targets: '.profile-pic img',
        translateY: scrollTop * 0.2,
        duration: 0,
    });
    anime({
        targets: '.about-section',
        translateY: scrollTop * 0.1,
        opacity: [0.5, 1],
        easing: 'linear',
        duration: 0,
    });
});


// Gradient Background Animation
anime({
    targets: '.background',
    backgroundPosition: ['0% 50%', '100% 50%'],
    duration: 10000,
    easing: 'linear',
    loop: true,
});


// Scroll Reveal Animation
const scrollElements = document.querySelectorAll('.scroll-reveal');
window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    scrollElements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        const delay = el.getAttribute('data-delay') || 0;
        if (position < windowHeight - 100) {
            anime({
                targets: el,
                translateY: [50, 0],
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 1000,
                delay: delay,
            });
        }
    });
});

// Custom Cursor Animation
const cursor = document.querySelector('#custom-cursor');
document.addEventListener('mousemove', (e) => {
    anime({
        targets: cursor,
        translateX: e.clientX,
        translateY: e.clientY,
        duration: 50,
        easing: 'easeOutQuad',
    });
});

// Background Particle Animation
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const numberOfParticles = 100;

function createParticles() {
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2,
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2,
        });
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > canvas.width) p.speedX = -p.speedX;
        if (p.y < 0 || p.y > canvas.height) p.speedY = -p.speedY;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = '#ff4655';
        ctx.fill();
    });
    requestAnimationFrame(animateParticles);
}

createParticles();
animateParticles();
