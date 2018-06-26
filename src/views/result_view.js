const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container){
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Instruments:selected-instrument-ready', (evt) => {
    const instrument = evt.detail;
    console.log(instrument);
    this.render(instrument);
  });
};

InstrumentInfoView.prototype.createLi = function(textContent, ul) {
  const li = document.createElement('li');
  li.textContent = textContent;
  ul.appendChild(li);
};

InstrumentInfoView.prototype.render = function(instrument){
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = instrument.description;
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
  const unorderedList = document.createElement('ul');
  this.createLi("test", unorderedList);
  this.container.appendChild(unorderedList);
};



// PlanetInfoView.prototype.createInfoList = function(planet) {
//   const infoList = document.createElement('ul');
//
//   const liDay = this.createLi(`Day: ${planet.day} Earth days`, infoList);
//   const liOrbit = this.createLi(`Orbit: ${planet.orbit} Earth days`, infoList);
//   const liSurfaceArea = this.createLi(
//     `Surface Area: ${planet.surfaceArea} Earths`,
//     infoList
//   );
//   const liVolume = this.createLi(`Volume: ${planet.volume} Earths`, infoList);
//   const liGravity = this.createLi(`Gravity: ${planet.gravity}g`, infoList);
//   const liMoons = this.createLi(`Moons: ${planet.moons}`, infoList);
//
//   return infoList;
// };

module.exports = InstrumentInfoView;
