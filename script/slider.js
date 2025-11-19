
const slides = [
  {
    image: "/images/bg-image.png",
    topTitle: "Innovation Meets Excellence",
    title: "Transform Your Business with Cutting-Edge Technology",
    buttonText: "Get Started",
    buttonStyle: "primary",
    alignment: "left",
    imageAnimation: "zoom-in"
  },
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1950&q=80",
    topTitle: "Powerful Software Solutions",
    title: "Build, Scale, and Succeed with Our Expert Team",
    buttonText: "Our Services",
    buttonStyle: "secondary",
    alignment: "left",
    imageAnimation: "zoom-out"
  },
  {
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1950&q=80",
    topTitle: "Digital Transformation Starts Here",
    title: "Custom Software Development for Modern Businesses",
    buttonText: "View Portfolio",
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
  if (alignment === "left") return "left-[10%] md:left-[15%] text-left";
  if (alignment === "right") return "right-[10%] md:right-[15%] text-right";
  return "left-1/2 -translate-x-1/2 text-center";
}

function getButtonClass(style) {
  return "bg-[#FFD700] text-blue-900 hover:bg-blue-50 shadow-lg";
}

function renderSlides() {
  slidesContainer.innerHTML = slides
    .map((slide, index) => `
      <div class="absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"}">
        <div class="absolute inset-0 overflow-hidden">
          <img src="${slide.image}" class="w-full h-full object-cover"
            style="animation: ${index === currentSlide
              ? slide.imageAnimation === "zoom-in"
                ? "zoomIn 5s ease-out forwards"
                : "zoomOut 5s ease-out forwards"
              : "none"
            }" />

          <div class="absolute inset-0 bg-gradient-to-r from-[#01705D]/70 to-[#01705D]/50"></div>
        </div>

        <div class="absolute top-1/2 -translate-y-1/2 z-20 px-6 md:px-8 max-w-4xl ${getAlignmentClass(slide.alignment)}">
          <p class="font-serif italic text-2xl md:text-3xl lg:text-4xl mb-3 text-blue-200 ${index === currentSlide ? "animate-fadeInUp" : "opacity-0"}" style="animation-delay:0.2s;">
            ${slide.topTitle}
          </p>
          <h2 class="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-[#FFD700] ${index === currentSlide ? "animate-fadeInUp" : "opacity-0"}" style="animation-delay:0.4s;">
            ${slide.title}
          </h2>
          <button class="px-8 md:px-10 py-3 md:py-4 text-lg font-semibold bg-[#FFD700] rounded-lg transition transform hover:scale-105">
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
      <button class="h-1 rounded-full transition-all duration-300 ${
        i === currentSlide ? "w-12 bg-white" : "w-8 bg-white/40 hover:bg-white/70"
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

