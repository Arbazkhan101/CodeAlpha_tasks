

// Get modal elements
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');

// When an image is clicked, show the modal with the full-size image
const galleryImages = document.querySelectorAll('.gallery-img');
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'flex'; // Show the modal
        modalImage.src = image.src;  // Set the source of the image in the modal
    });
});

// Close the modal when the close button is clicked
function closeModal() {
    modal.style.display = 'none';  // Hide the modal
}
