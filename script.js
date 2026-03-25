let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function changeSlide(direction) {
    // Hide current slide
    slides[currentSlide].classList.remove("active");
    
    // Calculate next slide index
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    
    // Show next slide
    slides[currentSlide].classList.add("active");
}

// ARROW KEY SUPPORT
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        changeSlide(-1);
    } else if (event.key === "ArrowRight") {
        changeSlide(1);
    }
});
