document.addEventListener('DOMContentLoaded', function () {
    // Toggle navigation menu
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Add a click event listener to the navigation toggle button
    navToggle.addEventListener('click', function () {
        // Toggle the 'show' class on the navigation menu to display or hide it
        navMenu.classList.toggle('show');
    });

    // Highlight active navigation link and trigger animations on section click
    const navLinks = document.querySelectorAll('.nav__link');

    // Add a click event listener to each navigation link
    navLinks.forEach((link) => {
        link.addEventListener('click', function (event) {
            // Prevent the default behavior of the link 
            event.preventDefault();

            // Remove active class from other links
            navLinks.forEach((otherLink) => {s
                otherLink.classList.remove('active');
            });

            // Add 'active' class to the clicked link
            link.classList.add('active');

            // Get the target section ID from the link's href attribute
            const targetSectionId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);

            // Scroll the target section into view with smooth behavior
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Trigger animations for the target section
            triggerAnimations(targetSectionId);
        });
    });

    // Initial trigger for animations on page load for the 'home' section
    triggerAnimations('home');

    // Zoom in animation
    function triggerAnimations(sectionId) {
        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
            section.classList.remove('animate__animated', 'animate__zoomIn');
        });

        // Zoom in animation for work section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('animate__animated', 'animate__zoomIn');
        }
    }
});
