new Vue({
    el: '#app',
    data: {
        images: [],
        galleryImages: [],
        videoSrc: ''
    },
    created() {
        fetch('assets/galleryData.json') // Make sure this path is correct for your project structure
            .then(response => response.json())
            .then(data => {
                this.images = data.images;
                this.galleryImages = data.galleryImages;
                this.videoSrc = data.videoSrc;
            });
    },
    mounted() {
        // Initialize SplideJS after the DOM is ready
        new Splide('#image-carousel', {
            type: 'fade',
            heightRatio: 0.5,
            autoplay: true,
            interval: 3000
        }).mount();
    }
});
