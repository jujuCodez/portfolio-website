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

let isSlideshowOn = false;

function toggleSlideshow() {
    const toggleBtn = document.getElementById('slideshowToggleBtn');

    if (isSlideshowOn) {
        $('.slider-for').slick('slickPause');
        toggleBtn.textContent = 'Slideshow Off';
    } else {
        $('.slider-for').slick('slickPlay');
        toggleBtn.textContent = 'Slideshow On';
    }

    isSlideshowOn = !isSlideshowOn;
}

function initializeSliders() {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

    $('a[data-slide]').click(function(e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.slider-nav').slick('slickGoTo', slideno - 1);
    });
}

function showContent(item) {
    const photoAlbumContent = document.getElementById('photo-album-content');
    let albumContent;

    switch(item) {
        case 'liella':
            albumContent = `
                <div class="small-slider-container">
                <h1> Liella! Members </h1>
                    <div class="slider slider-for">
                        <div><img src="images/photoalbum/liella1.png"></div>
                        <div><img src="images/photoalbum/liella2.png"></div>
                        <div><img src="images/photoalbum/liella3.png"></div>
                        <div><img src="images/photoalbum/liella4.png"></div>
                        <div><img src="images/photoalbum/liella5.png"></div>
                        <div><img src="images/photoalbum/liella6.png"></div>
                        <div><img src="images/photoalbum/liella7.png"></div>
                        <div><img src="images/photoalbum/liella8.png"></div>
                        <div><img src="images/photoalbum/liella9.png"></div>
                        <div><img src="images/photoalbum/liella10.png"></div>
                    </div>
                    <div class="slider slider-nav">
                        <div><img src="images/photoalbum/liella1.png"></div>
                        <div><img src="images/photoalbum/liella2.png"></div>
                        <div><img src="images/photoalbum/liella3.png"></div>
                        <div><img src="images/photoalbum/liella4.png"></div>
                        <div><img src="images/photoalbum/liella5.png"></div>
                        <div><img src="images/photoalbum/liella6.png"></div>
                        <div><img src="images/photoalbum/liella7.png"></div>
                        <div><img src="images/photoalbum/liella8.png"></div>
                        <div><img src="images/photoalbum/liella9.png"></div>
                        <div><img src="images/photoalbum/liella10.png"></div>
                    </div>
                </div>`;
            break;
        case 'nendo':
            albumContent = `
                <div class="small-slider-container">
                    <h1> Random Nendoroids </h1>
                    <div class="slider slider-for">
                        <div><img src="images/photoalbum/1.jpg"></div>
                        <div><img src="images/photoalbum/2.jpg"></div>
                        <div><img src="images/photoalbum/3.jpg"></div>
                        <div><img src="images/photoalbum/4.jpg"></div>
                        <div><img src="images/photoalbum/5.jpg"></div>
                        <div><img src="images/photoalbum/6.jpg"></div>
                        <div><img src="images/photoalbum/7.jpg"></div>
                        <div><img src="images/photoalbum/8.jpg"></div>
                        <div><img src="images/photoalbum/9.jpg"></div>
                        <div><img src="images/photoalbum/10.jpg"></div>
                    </div>
                    <div class="slider slider-nav">
                        <div><img src="images/photoalbum/1.jpg"></div>
                        <div><img src="images/photoalbum/2.jpg"></div>
                        <div><img src="images/photoalbum/3.jpg"></div>
                        <div><img src="images/photoalbum/4.jpg"></div>
                        <div><img src="images/photoalbum/5.jpg"></div>
                        <div><img src="images/photoalbum/6.jpg"></div>
                        <div><img src="images/photoalbum/7.jpg"></div>
                        <div><img src="images/photoalbum/8.jpg"></div>
                        <div><img src="images/photoalbum/9.jpg"></div>
                        <div><img src="images/photoalbum/10.jpg"></div>
                    </div>`;
            break;
        case 'item3':
            albumContent = `
                <div class="album-content">
                    <h2>キミノタメボクノタメ (KIMINOTAMEBOKUNOTAME)</h2>
                    <p>Photos from Album KIMINOTAMEBOKUNOTAME.</p>
                    <div class="photo-album slider-for">
                        <div><img src="images/kimi1.jpg" alt="Kimi 1"></div>
                        <div><img src="images/kimi2.jpg" alt="Kimi 2"></div>
                        <div><img src="images/kimi3.jpg" alt="Kimi 3"></div>
                    </div>
                    <div class="photo-nav slider-nav mt-3">
                        <div><img src="images/kimi1.jpg" alt="Kimi 1"></div>
                        <div><img src="images/kimi2.jpg" alt="Kimi 2"></div>
                        <div><img src="images/kimi3.jpg" alt="Kimi 3"></div>
                    </div>
                </div>`;
            break;
        case 'item4':
            albumContent = `
                <div class="album-content">
                    <h2>JQuery Image Carousel</h2>
                    <p>Photos from Album JQuery Image Carousel.</p>
                    <div class="photo-album slider-for">
                        <div><img src="images/jquery1.jpg" alt="Carousel 1"></div>
                        <div><img src="images/jquery2.jpg" alt="Carousel 2"></div>
                        <div><img src="images/jquery3.jpg" alt="Carousel 3"></div>
                    </div>
                    <div class="photo-nav slider-nav mt-3">
                        <div><img src="images/jquery1.jpg" alt="Carousel 1"></div>
                        <div><img src="images/jquery2.jpg" alt="Carousel 2"></div>
                        <div><img src="images/jquery3.jpg" alt="Carousel 3"></div>
                    </div>
                </div>`;
            break;
        default:
            albumContent = `
                <div class="album-content">
                    <h2>Welcome to the Photo Album</h2>
                    <p>Select an album from the navigation to view the photos.</p>
                </div>`;
    }

    photoAlbumContent.innerHTML = albumContent;

    // Initialize the slider again after content is changed
    initializeSliders();
}
