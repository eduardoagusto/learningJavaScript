// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
function areaTriangle(base, height, lenght) {
  var perimeter = (base + height + lenght) / 2;
  var area = Math.sqrt(
    perimeter *
      ((perimeter - base) * (perimeter - height) * (perimeter - lenght))
  );
  return area;
}
console.log(areaTriangle(4, 5, 6)); //9.921567416492215