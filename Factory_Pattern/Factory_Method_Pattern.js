// create service car

class ErrorVehicle extends Error {
  constructor(message) {
    super(message);
  }
}

class Vehicle {
  constructor(speed, capacity,ownerName) {
    if (new.target === Vehicle) {
      throw new TypeError("Cannot construct Vehicle instances directly");
    }
    this.ownerName = ownerName;
    this.speed = speed;
    this.capacity = capacity;
  }

  operate() {
    throw new Error("Method 'operate()' must be implemented.");
  }

  start() {
    return `${this.constructor.name} is starting.`;
  }

  stop() {
    return `${this.constructor.name} is stopping.`;
  }

  getInfo() {
    return `${this.constructor.name} operates at a speed of ${this.speed} km/h and has a capacity of ${this.capacity} passengers.`;
  }
}

class Car extends Vehicle {
  constructor(speed, capacity,ownerName) {
    console.log(speed, capacity,ownerName);
    super(speed, capacity, ownerName);
  }
  operate() {
    return "Driving a car ...";
  }
}

class Train extends Vehicle {
  constructor(speed, capacity, ownerName) {
    super(speed, capacity, ownerName);
  }
  operate() {
    return "Flying an train...";
  }
}

class Airplane extends Vehicle {
  constructor(speed, capacity, ownerName) {
    super(speed, capacity,ownerName);
  }
  operate() {
    return "Flying an airplane...";
  }
}

class VehicleLogistics {
  createVehicles(type, speed, capacity, ownerName) {
    console.log(type,speed,capacity,ownerName);
    switch (type) {
      case "car":
        return new Car(speed, capacity,ownerName);
      case "train":
        return new Train(speed, capacity, ownerName);
      case "airplane":
        return new Airplane(speed, capacity,ownerName);
      default:
        throw new ErrorVehicle("Unknown vehicle type");
    }
  }
}


const factory = new VehicleLogistics();

const myCar = factory.createVehicles('car',270,5,"Tran Tuan Minh");
console.log(myCar.operate());
console.log(myCar.start());
console.log(myCar.getInfo());
console.log(myCar.stop());
