let counter = 30;
function countDown() {
  if (counter >= 0) {
    document.getElementById("counter").textContent = counter;
    console.log(counter);
    counter--;
  } else {
    counter = 30;
  }
}
setInterval(countDown, 1000);
