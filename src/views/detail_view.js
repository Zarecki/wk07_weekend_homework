const PubSub = require ('../helpers/pub_sub.js');


const DetailView = function (container) {
  this.container = container;
}

DetailView.prototype.bindEvents = function () {
  PubSub.subscribe('Rovers:selected-image', (evt) => {
    const images = evt.detail;
    this.render(images);
  });
};

DetailView.prototype.buildElement = function (type, src) {
  let element = document.createElement(type);
  if (src) {element.src = src};
  return element;
}

DetailView.prototype.render = function (images) {
  const infoParagraph = document.querySelector('#info-container');

this.container.innerHTML = "";

  images.forEach((image) => {
    const imageItem = this.buildElement('img', image.img_src);
    infoParagraph.appendChild(imageItem);
  });
};
module.exports = DetailView;
