
// Scroll Progress
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('scroll-progress').style.width = scrolled + '%';
});

// Mouse Spotlight
const spotlight = document.getElementById('spotlight');
document.addEventListener('mousemove', (e) => {
    spotlight.style.left = e.clientX + 'px';
    spotlight.style.top = e.clientY + 'px';
});

// Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Intersection Observer for fade-in
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Active nav highlighting
window.addEventListener('scroll', () => {
    const sections = ['about', 'experience', 'projects', 'research', 'skills'];
    const scrollPos = window.scrollY + 150;

    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const offsetTop = section.offsetTop;
            const offsetHeight = section.offsetHeight;
            
            const navBtns = document.querySelectorAll('.nav-btn');
            if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
                navBtns.forEach(btn => btn.classList.remove('active'));
                document.querySelector(`[onclick="scrollToSection('${sectionId}')"]`).classList.add('active');
            }
        }
    });
});
