// Select all images in the #intro-left section
const images = document.querySelectorAll('#intro-left img');
let currentImageIndex = 0;

// Function to show the next image
function showNextImage() {
    // Hide the current image
    images[currentImageIndex].classList.remove('active');

    // Move to the next image
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // Show the new image
    images[currentImageIndex].classList.add('active');
}

// Start the slideshow with the first image
images[currentImageIndex].classList.add('active');

// Change images every 3 seconds
setInterval(showNextImage, 3000);
