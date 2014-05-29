// ********************************************************
// Example 1
// ********************************************************
console.log("Global Context", this);

// ********************************************************
// Example 2
// ********************************************************
var car = {
    make: 'mazda',
    color: 'white',
    print: function() {
        console.log("Car is ", this);
    }
};
car.print();

// ********************************************************
// Example 3
// ********************************************************
function hello() {
    console.log("Hello, I am", this)
}
var car = {
    make: 'mazda',
    color: 'white',
    print: function() {
        console.log("Car is ", this);
        hello();
    }
};
car.print();

// ********************************************************
// Example 4
// ********************************************************
function Car(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;

    this.print = function() {
        print("Make: " + make + ", Model: " + model + ", Color: " + color);
    }
}
var car = new Car('mazda', 'miata', 'black');
var car2 = new Car('pontiac', 'grand am', 'white');
car.print();
car2.print();

// ********************************************************
// Example 5
// ********************************************************
function Car(make, model, color) {
    this.getMake = function() {
        return make;
    }
    this.getModel = function() {
        return model;
    }
    this.getColor = function() {
        return color;
    }

    this.print = function() {
        console.log("Make: " + make + ", Model: " + model + ", Color: " + color);
    }
}
var car = new Car("Pontiac", "Grand Am", "white");
car.make = 'Derp';
print(car.getMake());

// ********************************************************
// Example 5
// ********************************************************
function Car(make, model, color) {
    this.__defineGetter__('make', function() {
        return make;
    });
    // TODO: define getter
    this.__defineGetter__('model', function() {
        return make;
    });
    this.__defineGetter__('color', function() {
        return color;
    });

    this.print = function() {
        print("Make: " + this.make + ", Model: " + this.model + ", Color: " + this.color);
    }
}

var myCar = new Car('Pontiac', 'Grand Am', 'white');
print("Make is : " + myCar.make);
myCar.print();
