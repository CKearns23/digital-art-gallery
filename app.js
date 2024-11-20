new Vue({
  el: '#app',
  data: {
      images: [
      "assets/Media/A Bug's Life.jpg1",
      "assets/Media/Day At The Beach 1947.jpg",
      "assets/Media/Growing Wild.jpg",
      "assets/Media/Our Future.jpg",
      "assets/Media/Wastin' Time.jpg",
      "assets/Media/Worn Out.jpg"
    ],
      galleryImages: [
        "assets/Media/A Bug's Life.jpg1",
        "assets/Media/Day At The Beach 1947.jpg",
        "assets/Media/Growing Wild.jpg",
        "assets/Media/Our Future.jpg",
        "assets/Media/Wastin' Time.jpg",
        "assets/Media/Worn Out.jpg"
    ],
      videoSrc: "assets/Media/artgalleryvideo.mp4"
  },
  created() {
    fetch('assets/data.json')
          .then(response => response.json())
          .then(data => {
              this.images = data.images;
              this.galleryImages = data.galleryImages;
              this.videoSrc = data.videoSrc;
              document.querySelector('.video-section iframe').src = this.videoSrc;
          });
  }
});
