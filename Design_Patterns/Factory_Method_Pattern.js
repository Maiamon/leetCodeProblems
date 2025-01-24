class Vehicle {
  getType() {
    throw new Error("getType method must be overridden");
  }
}

class Car extends Vehicle {
  getType() {
    return "Car";
  }
}

class Bike extends Vehicle {
  getType() {
    return "Bike";
  }
}

class Truck extends Vehicle {
  getType() {
    return "Truck";
  }
}

class VehicleFactory {
  createVehicle() {
    throw new Error("createVehicle method must be overridden");
  }
}

class CarFactory extends VehicleFactory {
  createVehicle() {
    return new Car();
  }
}

class BikeFactory extends VehicleFactory {
  createVehicle() {
    return new Bike();
  }
}

class TruckFactory extends VehicleFactory {
  createVehicle() {
    return new Truck();
  }
}

const carFactory = new CarFactory();
const truckFactory = new TruckFactory();
const bikeFactory = new BikeFactory();

const myCar = carFactory.createVehicle();
const myTruck = truckFactory.createVehicle();
const myBike = bikeFactory.createVehicle();

myCar.getType(); // "Car"
myTruck.getType(); // "Truck"
myBike.getType(); // "Bike"
console.log(myCar.getType());
console.log(myTruck.getType());
console.log(myBike.getType());
