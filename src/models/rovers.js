const Request = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');
const APIKey = require('../helpers/api_key.js');

const Rovers = function () {
  this.data = null;
};

Rovers.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:submit', (evt) => {
    this.getData(evt);
  });
};

Rovers.prototype.getData = function (evt) {
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${evt.detail[0]}/photos?sol=${evt.detail[2]}&camera=${evt.detail[1]}&api_key=${APIKey}`;
  const request = new Request(url);
  request.get().then((roverImageData) => {
    PubSub.publish('Rovers:selected-image', roverImageData.photos);
  })
  .catch((err) => {
    PubSub.publish('Rovers:error', err);
  });
};

module.exports = Rovers;
