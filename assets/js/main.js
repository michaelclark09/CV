// Progressive enhancement: the print button only appears when JavaScript is available.
(function () {
  'use strict';

  const printButton = document.querySelector('[data-action="print"]');
  if (printButton) {
    printButton.hidden = false;
    printButton.addEventListener('click', () => window.print());
  }

  const year = document.querySelector('[data-year]');
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
