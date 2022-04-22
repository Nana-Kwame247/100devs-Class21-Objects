//Create a stopwatch object that has four properties and three methods

let stopwatch = {};
// properties literal declaration
stopwatch.brand = "nike";
stopwatch.color = "black";
stopwatch.shape = "round";
stopwatch.size = "medium";

//object methods

stopwatch.start = function () {
  console.log("starting!!");
};

stopwatch.stop = function () {
  console.log("stopping");
};

stopwatch.sayBrand = function () {
  console.log(stopwatch.brand);
};
