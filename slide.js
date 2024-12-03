let slideIndex = 0;
let slideTimeout;

function showSlides() {
  let slides = document.querySelector('.slides');
  let images = document.querySelectorAll('.slide');

  // Move the slides by 100% of the container width
  slideIndex++;
  
  // Reset to 0 if we've reached the end
  if (slideIndex >= images.length) {
    slideIndex = 0;
  }

  // Apply the transformation to slide images horizontally
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;

  // Change image every 3 seconds
  slideTimeout = setTimeout(showSlides, 3000);
}

// Start the slide show when the page loads
window.onload = showSlides;

// Pause slideshow on hover
document.querySelector('.slides').addEventListener('mouseover', function() {
  clearTimeout(slideTimeout);  // Stop the timeout when hovered
});

// Resume slideshow when hover ends
document.querySelector('.slides').addEventListener('mouseout', function() {
  slideTimeout = setTimeout(showSlides, 3000);  // Restart the timeout
});
