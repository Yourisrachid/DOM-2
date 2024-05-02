/* Exercise 2
Write a function that displays every second that has passed on the page since it was opened. The display should be refreshed every second. 

If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed" (for 120 seconds and more), etc.

*/

const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(0) + 's';
};

const head = document.createElement('h1');
head.textContent = getElapsedTime();
head.style.textAlign = 'center';
head.style.marginTop = '20%';
document.body.appendChild(head);

const headSecond = document.createElement('h2');
headSecond.style.textAlign = 'center';
document.body.appendChild(headSecond);

function refreshTimer() {
  const elapsedSeconds = Math.floor((Date.now() - _initTime) / 1000);
  const elapsedMinutes = Math.floor(elapsedSeconds / 60);

  headSecond.textContent = `${elapsedMinutes} minute${elapsedMinutes !== 1 && elapsedMinutes !== 0 ? 's' : ''} ${elapsedMinutes !== 1 && elapsedMinutes !== 0 ? 'have' : 'has'} passed`;
  head.textContent = getElapsedTime();
}

setInterval(refreshTimer, 1000);


