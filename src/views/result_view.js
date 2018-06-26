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
  for (instrumentName of instrument.instruments ) {
    this.createLi(instrumentName, unorderedList);
  }
  this.container.appendChild(unorderedList);
};



module.exports = InstrumentInfoView;
