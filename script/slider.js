const slides = [
      {
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&h=900&fit=crop",
        topTitle: "Innovation Meets Excellence",
        title: "Transform Your Business with Cutting-Edge Technology",
        buttonText: "Get Started",
        buttonStyle: "primary",
        alignment: "left",
        imageAnimation: "zoom-in"
      },
      {
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&h=900&fit=crop",
        topTitle: "Empowering Your Future",
        title: "Leading Digital Solutions for Modern Enterprises",
        buttonText: "Learn More",
        buttonStyle: "primary",
        alignment: "center",
        imageAnimation: "zoom-out"
      },
      {
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&h=900&fit=crop",
        topTitle: "Excellence in Every Detail",
        title: "Your Partner in Digital Transformation",
        buttonText: "Discover More",
        buttonStyle: "primary",
        alignment: "right",
        imageAnimation: "zoom-in"
      }
    ];

    let currentSlide = 0;
    let isAnimating = false;

    const slidesContainer = document.getElementById("slides-container");
    const dotsContainer = document.getElementById("slider-dots");

    function getAlignmentClass(alignment) {
      if (alignment === "left") return "left-4 sm:left-6 md:left-[8%] lg:left-[12%] xl:left-[15%] text-left";
      if (alignment === "right") return "right-4 sm:right-6 md:right-[8%] lg:right-[12%] xl:right-[15%] text-right";
      return "left-1/2 -translate-x-1/2 text-center px-4";
    }

    function getButtonClass(style) {
      return "bg-[#FFD700] text-blue-900 hover:bg-blue-50 shadow-lg";
    }

    function renderSlides() {
      slidesContainer.innerHTML = slides
        .map((slide, index) => `
          <div class="absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"}">
            <div class="absolute inset-0 overflow-hidden">
              <img src="${slide.image}" alt="Slide ${index + 1}" class="w-full h-full object-cover"
                style="animation: ${index === currentSlide
                  ? slide.imageAnimation === "zoom-in"
                    ? "zoomIn 5s ease-out forwards"
                    : "zoomOut 5s ease-out forwards"
                  : "none"
                }" />

              <div class="absolute inset-0 bg-gradient-to-r from-[#01705D]/70 to-[#01705D]/50"></div>
            </div>

            <div class="absolute top-1/2 -translate-y-1/2 z-20 w-full max-w-[90%] sm:max-w-[85%] md:max-w-3xl lg:max-w-4xl xl:max-w-5xl ${getAlignmentClass(slide.alignment)}">
              <p class="font-serif italic text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2 sm:mb-3 text-blue-200 ${index === currentSlide ? "animate-fadeInUp" : "opacity-0"}" style="animation-delay:0.2s;">
                ${slide.topTitle}
              </p>
              <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight text-[#FFD700] ${index === currentSlide ? "animate-fadeInUp" : "opacity-0"}" style="animation-delay:0.4s;">
                ${slide.title}
              </h2>
              <button class="px-6 sm:px-7 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-sm sm:text-base md:text-lg font-semibold bg-[#FFD700] text-blue-900 rounded-lg transition transform hover:scale-105">
                ${slide.buttonText}
              </button>
            </div>
          </div>
        `)
        .join("");

      renderDots();
    }

    function renderDots() {
      dotsContainer.innerHTML = slides
        .map(
          (_, i) => `
          <button class="h-0.5 sm:h-1 rounded-full transition-all duration-300 ${
            i === currentSlide ? "w-8 sm:w-10 md:w-12 bg-white" : "w-6 sm:w-7 md:w-8 bg-white/40 hover:bg-white/70"
          }" onclick="goToSlide(${i})"></button>
        `
        )
        .join("");
    }

    function nextSlide() {
      if (isAnimating) return;
      isAnimating = true;

      currentSlide = (currentSlide + 1) % slides.length;
      renderSlides();

      setTimeout(() => (isAnimating = false), 800);
    }

    function prevSlide() {
      if (isAnimating) return;
      isAnimating = true;

      currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
      renderSlides();

      setTimeout(() => (isAnimating = false), 800);
    }

    function goToSlide(i) {
      if (isAnimating) return;
      currentSlide = i;
      renderSlides();
    }

    document.getElementById("next-btn").addEventListener("click", nextSlide);
    document.getElementById("prev-btn").addEventListener("click", prevSlide);

    setInterval(nextSlide, 5000);

    renderSlides();