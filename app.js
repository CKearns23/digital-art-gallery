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
        new Splide('#image-carousel', {
            type: 'fade',
            heightRatio: 0.5,
            autoplay: true,
            interval: 3000,
            arrows: true,  // Enable arrows
            pagination: false  // Disable pagination dots
        }).mount();
    }
});
