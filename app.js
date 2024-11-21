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
    }
});
