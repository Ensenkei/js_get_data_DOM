'use strict';

function parsePopulation(text) {
  return Number(text.replaceAll(',', ''));
}

const populationElements = document.querySelectorAll('.population');

const populatinNumbers = Array.from(populationElements)
  .map((el) => parsePopulation(el.textContent))
  .filter((num) => !isNaN(num));

const total = populatinNumbers.reduce((sum, num) => sum + num, 0);
const average = total / populatinNumbers.length;

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.textContent = total.toLocaleString('en-US');
averageElement.textContent = average.toLocaleString('en-US');
