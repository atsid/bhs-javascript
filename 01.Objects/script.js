// Create variables to hold car data.
var carColor = 'white';
var carMake = 'Toyota';
var carModel = '4Runner';
var carYear = '1994';

// Function to output the current car data
function outputCarData(carColor, carMake, carModel, carYear) {
  document.body.innerHTML += "You have a " + carColor + " " + carMake + " " + carModel + " made in " + carYear + ".<br/>";
}

// Function to change the color of the car.
function paintCar(carColor, carMake, carModel, carYear, newColor) {
  document.body.innerHTML += "You are painting a " + carColor + " " + carMake + " " + carModel + " made in " + carYear + " " + newColor + ".<br/>";
  return newColor;
}

outputCarData(carColor, carMake, carModel, carYear);
carColor = paintCar(carColor, carMake, carModel, carYear, 'red');
outputCarData(carColor, carMake, carModel, carYear);

document.body.innerHTML += "<br/>----- Use an object ----<br/><br/>";

// Create a car object (data structure) to hold the car data.
var car = {};
car.color = 'white';
car.make = 'Toyota';
car.model = '4Runner';
car.year = '1994';

function outputCarData2(car) {
  document.body.innerHTML += "You have a " + car.color + " " + car.make + " " + car.model + " made in " + car.year + ".<br/>";
}

function paintCar2(car, newColor) {
  document.body.innerHTML += "You are painting a " + car.color + " " + car.make + " " + car.model + " made in " + car.year + " " + newColor + ".<br/>";
  car.color = newColor;
}

outputCarData2(car);
paintCar2(car, 'green');
outputCarData2(car);
