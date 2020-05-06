const minus = document.getElementById('minus-button');
const plus = document.getElementById('plus-button');
let countBox = +document.getElementById('count-box').innerHTML;

plus.addEventListener('click', () => {
  countBox++;
  document.getElementById('count-box').innerHTML = countBox;
});
minus.addEventListener('click', () => {
  countBox--;
  document.getElementById('count-box').innerHTML = countBox;
});