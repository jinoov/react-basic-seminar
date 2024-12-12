let count = 0;

document.querySelector('.inc').addEventListener('click', () => {
  document.querySelector('.count').innerHTML = ++count;
});
