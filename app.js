new Vue({
    el: '#app',
    data: {
        images: [],
        galleryImages: [],
        videoSrc: ''
    },
    created() {
        fetch('assets/galleryData.json')
            .then(response => response.json())
            .then(data => {
                this.images = data.images;
                this.galleryImages = data.galleryImages;
                this.videoSrc = data.videoSrc;
            });
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
