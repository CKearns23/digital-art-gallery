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
              document.querySelector('.video-section iframe').src = this.videoSrc;
          });
  }
});
