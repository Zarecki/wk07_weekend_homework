const Request = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');
const APIKey = require('../helpers/api_key.js');

const Rovers = function () {
  this.data = null;
};

Rovers.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:submit', (evt) => {
    this.getData(evt);
    // const selectedRoverImage = evt
    // PubSub.publish('Rovers:selected-image', selectedRoverImage);
  });
};

Rovers.prototype.getData = function (evt) {
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${evt.detail[0]}/photos?sol=${evt.detail[2]}&camera=${evt.detail[1]}&api_key=${APIKey}`;
  const request = new Request(url);
  request.get().then((roverImageData) => {
    // console.log(roverImageData);
    // this.data = this.handleDataReady(roverImageData);
    PubSub.publish('Rovers:selected-image', roverImageData.photos);
  })
  .catch((err) => {
    PubSub.publish('Rovers:error', err);
  });
};


//   const roverDetails = this.getRoverData(rover);
//   this.modelRover(rover, roverDetails);
// };

// Rovers.prototype.handleDataReady = function (roverImageData) {
//   const roverImages = this.getRoverImage(roverImageData);
//   console.log(roverImages);
//   return roverImages;
//   // this.modelImage(roverImageData, roverImages);
// };
//
// Rovers.prototype.getRoverImage = function (roverImageData) {
//   console.log(roverImageData.photos);
//   const images = roverImageData.photos;
//   images.forEach();


  // console.log(roverImageData);
  // return roverImageData
  // .map(roverImageData => roverImageData.img_src)
  // .filter((image, index, images) => images.indexOf(image) === index);
// };

// Rovers.prototype.modelImage = function (roverImageData, roverImages) {
//   this.data = roverImages.map((roverImage) => {
//     return {
//       images: this.RoverImageValue(roverImageData, roverImage)
//     };
//   });
// };
//
// Rovers.prototype.RoverImageValue = function (roverImageData, roverImage) {
//   return roverImageData.filter(image => roverImageData.src === roverImage);
// };

// Rovers.prototype.publishImageDetail = function (selectedRoverImage) {
//   const selectedRegion = this.data[selectedIndex];
//   PubSub.publish('Munros:selected-region-detail', selectedRegion);
// };

module.exports = Rovers;
