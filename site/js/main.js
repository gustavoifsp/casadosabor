/* ===================================
   Casa do Sabor - Scripts
   =================================== */

// Initialize AOS Animations
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true
    });
});

// Countdown Timer - Set to next Saturday at 11:00
function getNextSaturday() {
    const now = new Date();
    const saturday = new Date(now);
    saturday.setDate(now.getDate() + (6 - now.getDay() + 7) % 7 || 7);
    saturday.setHours(11, 0, 0, 0);
    return saturday;
}

function updateCountdown() {
    const target = getNextSaturday();
    const now = new Date();
    const diff = target - now;

    if (diff <= 0) {
        document.getElementById('days').textContent = '🎉';
        document.getElementById('hours').textContent = 'JÁ';
        document.getElementById('minutes').textContent = 'ABERTO';
        document.getElementById('seconds').textContent = '!';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Start countdown
setInterval(updateCountdown, 1000);
updateCountdown();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Navbar scroll effect (if needed in future)
window.addEventListener('scroll', function() {
    const scrolled = window.scrollY > 100;
    // Can add navbar effects here
});
