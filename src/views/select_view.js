const PubSub = require ('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element;
}

SelectView.prototype.submitEvents = function () {
  this.element.addEventListener('submit', (event) => {
    event.preventDefault();
    const data1 = event.target['rovers-container'].value;
    const data2 = event.target['cameras-container'].value;
    const data3 = event.target['sol-selection'].value;
    const selectedData = [data1, data2, data3]
    PubSub.publish('SelectView:submit', selectedData);
  });
};

module.exports = SelectView;
