const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString(str) {
  function cleanInputString(str) {
  const regex = /[+\-\s]/g;
  console.log("original string: ", str);
  return str.replace(regex, '');
}
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}
