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
        videoSrc: 'assets/Media/artgalleryvideo.mp4',
        isModalOpen: false,  // Controls if the modal is visible
        modalImage: ''       // The image to be shown in the modal
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
    },
    methods: {
        openImageModal(image) {
            // If the same image is clicked again, close the modal
            if (this.isModalOpen && this.modalImage === image) {
                this.closeImageModal();
            } else {
                this.modalImage = image;
                this.isModalOpen = true;
                document.body.classList.add('modal-open');  // Prevent page scroll when modal is open
            }
        },
        closeImageModal() {
            this.isModalOpen = false;
            document.body.classList.remove('modal-open');
        }
    }
});
