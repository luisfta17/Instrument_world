const Instruments = require('./models/instrument_families.js');
const SelectView = require('./views/info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#instrument-families');

  const instrumentDropdown = new SelectView(selectElement);
  instrumentDropdown.bindEvents();

  const instrumentDataSource = new Instruments();
  instrumentDataSource.bindEvents();
});
