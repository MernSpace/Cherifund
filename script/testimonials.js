document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.testimonial-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = 0;

    // Function to show a specific slide
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Remove active class from all indicators
        indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });

        // Show the selected slide
        slides[index].classList.add('active');

        // Activate the corresponding indicator
        indicators[index].classList.add('active');

        // Update current slide index
        currentSlide = index;
    }

    // Next slide function
    function nextSlide() {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= slides.length) {
            nextIndex = 0; // Loop back to first slide
        }
        showSlide(nextIndex);
    }

    // Previous slide function
    function prevSlide() {
        let prevIndex = currentSlide - 1;
        if (prevIndex < 0) {
            prevIndex = slides.length - 1; // Loop to last slide
        }
        showSlide(prevIndex);
    }

    // Event listeners for navigation buttons
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Event listeners for indicators
    indicators.forEach(indicator => {
        indicator.addEventListener('click', function () {
            const index = parseInt(this.getAttribute('data-index'));
            showSlide(index);
        });
    });

    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);
});