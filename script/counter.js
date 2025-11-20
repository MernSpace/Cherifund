function animateCounter(element, duration = 2000) {
    const target = +element.getAttribute("data-target");
    let start = 0;
    let step = Math.max(1, Math.floor(target / (duration / 16)));

    function update() {
        start += step;
        element.textContent = start;

        if (start < target) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }

    update();
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll(".counter").forEach(counter => {
                animateCounter(counter);
            });
            observer.disconnect(); // Run only once
        }
    });
}, { threshold: 0.3 });

observer.observe(document.querySelector(".animate-count"));