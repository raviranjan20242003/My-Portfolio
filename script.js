// Theme toggle
const toggleButton = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

toggleButton.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
   
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-card, .contact-card').forEach(el => {
    observer.observe(el);
});
