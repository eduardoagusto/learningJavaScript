var divDay = document.querySelector(".day");
var divHour = document.querySelector(".hours");
var day = new Date();
var nowDay = day.getDay();
var dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday",
];
divDay.innerHTML = `Today is : ${dayList[nowDay]}.`;

function hourAtualization() {
  var hour = new Date();
  var nowHours = hour.getHours();
  var prepand = nowHours >= 12 ? " PM" : " AM";
  nowHours = nowHours >= 12 ? nowHours - 12 : nowHours;
  var nowMinutes = hour.getMinutes();
  var nowSeconds = hour.getSeconds();
  newSeconds = nowSeconds <= 9 ? "0" + nowSeconds : nowSeconds;
  divHour.innerHTML = `Current time is : ${
    nowHours + prepand
  } : ${nowMinutes} : ${nowSeconds}`;
}
setInterval(hourAtualization, 1000);