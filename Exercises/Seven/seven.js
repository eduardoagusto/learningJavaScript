//Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
for (year = 2014; year <= 2050; year++) {
    var day = new Date(year, 0, 1);
    if (day.getDay() === 0) {
      console.log(`1st January start with sunday in ${year}`);
    }
  }

// 1st January start with sunday in 2017
// 1st January start with sunday in 2023
// 1st January start with sunday in 2034
// 1st January start with sunday in 2040
// 1st January start with sunday in 2045