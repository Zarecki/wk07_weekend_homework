const Rovers = require('./models/rovers.js');
const SelectView = require('./views/select_view.js');
const DetailView = require('./views/detail_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');


  const selectElement = document.querySelector('#form');
  const roversForm = new SelectView(selectElement);
  roversForm.submitEvents();

  const infoDiv = document.querySelector('#info-container');
  const roverInfoDisplay = new DetailView(infoDiv);
  roverInfoDisplay.bindEvents();

  const rovers = new Rovers();
  rovers.bindEvents();
});
