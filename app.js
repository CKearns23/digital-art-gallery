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

        const modal = document.getElementById("image-modal");
        const closeModal = document.getElementById("close-modal");

        const galleryImages = document.querySelectorAll('.gallery-section img');
        galleryImages.forEach(image => {
            image.addEventListener('click', (e) => {
                const src = e.target.src;
                document.getElementById("modal-image").src = src;
                modal.style.display = "block";
            });
        });

        closeModal.addEventListener('click', (event) => {
            modal.style.display = "none";
            event.stopPropagation();
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }
});
