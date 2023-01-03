//Write a JavaScript program to calculate days left until next Christmas.
var today = new Date();
var dayOfChristmas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() == 11 && today.getDate() > 25) {
  dayOfChristmas.setFullYear(dayOfChristmas.getFullYear() + 1);
}
var oneDay = 1000 * 60 * 60 * 24;
var daysLeftForChristmas = Math.ceil(
  (dayOfChristmas.getTime() - today.getTime()) / oneDay
);
console.log(`${daysLeftForChristmas} Days left to Christmas !`);