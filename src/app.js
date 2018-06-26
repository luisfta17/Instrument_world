const Instruments = require('./models/instrument_families.js');
const SelectView = require('./views/info_view.js');
const InstrumentInfoView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#instrument-families');
  const displayElement = document.querySelector('#instrument-info');

  const instrumentDropdown = new SelectView(selectElement);
  instrumentDropdown.bindEvents();

  const instrumentDataSource = new Instruments();
  instrumentDataSource.bindEvents();

  const instrumentInfo = new InstrumentInfoView(displayElement);
  instrumentInfo.bindEvents();
});
