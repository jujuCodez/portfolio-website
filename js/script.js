document.addEventListener("DOMContentLoaded", function() {
    // Initialize AOS
    AOS.init({
        duration: 1200,  // Global duration of animations in milliseconds
        once: true,      // Whether animation should happen only once - while scrolling down
        mirror: false,   // Whether elements should animate out while scrolling past them
    });

    // Ensure the navbar element exists
    const navbar = document.querySelector('.top-right-nav');
    if (!navbar) {
        console.error('Navbar element not found');
        return;
    }

    // Hover effect
    navbar.addEventListener('mouseenter', function() {
        navbar.style.transform = 'translateY(-10px)';
        navbar.style.boxShadow = '0 8px 16px rgba(0,0,0,0.6)';
    });

    navbar.addEventListener('mouseleave', function() {
        navbar.style.transform = 'translateY(0px)';
        navbar.style.boxShadow = '0 4px 8px rgba(0,0,0,0.5)';
    });

    // Click effect
    navbar.addEventListener('click', function() {
        navbar.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            navbar.style.transform = 'translateY(0px)';
        }, 200); // Reset after 200ms
    });

    // Highlight effect
    const links = document.querySelectorAll('.nav-link');
    const highlight = document.querySelector('.nav-highlight');
    links.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            const linkRect = e.target.getBoundingClientRect();
            const navbarRect = navbar.getBoundingClientRect();
            highlight.style.width = `${linkRect.width}px`;
            highlight.style.left = `${linkRect.left - navbarRect.left}px`;
            highlight.style.height = `${linkRect.height}px`;
        });
    });

    // Reset highlight on mouse leave
    navbar.addEventListener('mouseleave', () => {
        highlight.style.width = '0';
        highlight.style.left = '0';
    });
});
