var tunaImage = document.getElementById('tuna');

tunaImage.addEventListener('click', function() {
    // Toggle the size of the image by adding/removing a class
    tunaImage.classList.toggle('enlarged');
});


function openLightbox(imageSrc) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImage = document.getElementById('lightbox-image');

    lightboxImage.src = imageSrc;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}