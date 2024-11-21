new Vue({
    el: '#app',
    data: {
        images: [
            'assets/Media/A Bugs Life.jpg',
            'assets/Media/Day At The Beach 1947.jpg',
            'assets/Media/Our Future.jpg',
            'assets/Media/Growing Wild.jpg',
            'assets/Media/Wastin Time.jpg',
            'assets/Media/Worn Out.jpg'
        ],
        galleryImages: [
            'assets/Media/A Bugs Life.jpg',
            'assets/Media/Day At The Beach 1947.jpg',
            'assets/Media/Our Future.jpg',
            'assets/Media/Growing Wild.jpg',
            'assets/Media/Wastin Time.jpg',
            'assets/Media/Worn Out.jpg'
        ],
        videoSrc: 'assets/Media/artgalleryvideo.mp4'
    },
    mounted() {
        // Swiper initialization
        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            }
        });

        // Get modal and close button
        const modal = document.getElementById("image-modal");
        const closeModal = document.getElementById("close-modal");

        // Add click event to each image in the gallery
        const galleryImages = document.querySelectorAll('.gallery-section img');
        galleryImages.forEach(image => {
            image.addEventListener('click', (e) => {
                // Set the image source for the modal and display the modal
                const src = e.target.src;
                document.getElementById("modal-image").src = src;
                modal.style.display = "block";
            });
        });

        // When the user clicks the "X" button, close the modal
        closeModal.addEventListener('click', () => {
            modal.style.display = "none";
        });

        // When the user clicks anywhere outside the modal, close it
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }
});
