new Vue({
    el: '#app',
    data: {
        images: [
            'Media/A Bug\'s Life.jpg1',
            'Media/Day At The Beach 1947.jpg',
            'Media/Growing Wild.jpg',
            'Media/Our Future.jpg',
            'Media/Wastin\' Time.jpg',
            'Media/Worn Out.jpg'
        ],
        galleryImages: [
            'Media/A Bug\'s Life.jpg1',
            'Media/Day At The Beach 1947.jpg',
            'Media/Growing Wild.jpg',
            'Media/Our Future.jpg',
            'Media/Wastin\' Time.jpg',
            'Media/Worn Out.jpg'
        ]
    },
    mounted() {
        // Initialize SplideJS after the DOM is ready
        new Splide('#image-carousel', {
            type: 'fade',       // Use fade transition
            heightRatio: 0.5,    // Adjust carousel height ratio
            autoplay: true,      // Enable autoplay
            interval: 3000       // Set the interval for slide transition
        }).mount();
    }
});
