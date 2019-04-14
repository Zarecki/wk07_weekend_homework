const PubSub = {
  publish: function (channel, payload) {
    console.log('Rovers:selected-image', payload);
    const event = new CustomEvent(channel, {
      detail: payload
    });
    document.dispatchEvent(event);
  },



  subscribe: function (channel, callback) {
    document.addEventListener(channel, callback);
  }
};

module.exports = PubSub;
