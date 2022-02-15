// Get the elements from DOM
var theDays = document.getElementById("days");
var theHours = document.getElementById("hours");
var theMinutes = document.getElementById("minutes");
var theSeconds = document.getElementById("seconds");

var countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 8);

var x = setInterval(function () {
  //   get today's date and time
  var now = new Date().getTime();

  // find the distance between now and the count down date
  var distance = countDownDate - now;

  // time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(2, "0");
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    .toString()
    .padStart(2, "0");
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, "0");
  var seconds = Math.floor((distance % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, "0");

  //displaying the result in the elements
  theDays.innerHTML = days + " ";
  theHours.innerHTML = hours + " ";
  theMinutes.innerHTML = minutes + " ";
  theSeconds.innerHTML = seconds + " ";
}, 1000);
