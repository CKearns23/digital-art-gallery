new Vue({
  el: '#app',
  data: {
    showHero: false,  // Controls the animation trigger
    isModalOpen: false,  // Controls whether the modal is open or not
    selectedImage: null,  // Holds the image data for the modal
    carouselItems: [
      'Images/A Bugs Life.jpg',
      'Images/Day At The Beach 1947.jpg',
      'Images/Growing Wild.jpg',
      'Images/Our Future.jpg',
      'Images/Wastin Time.jpg',
      'Images/Worn Out.jpg',
    ],
    galleryImages: []
  },
  mounted() {
    // Trigger the hero animation after the component has mounted
    setTimeout(() => {
      this.showHero = true;
    }, 500); // Delay to trigger animation after initial page load

    // Fetch mock data from the JSON file
    this.fetchGalleryData();
  },
  methods: {
    fetchGalleryData() {
      fetch('data/galleryData.json')
        .then(response => response.json())
        .then(data => {
          this.galleryImages = data.images;
        })
        .catch(error => console.error('Error fetching data:', error));
    },
    openModal(image) {
      this.selectedImage = image;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedImage = null;
    }
  }
});
