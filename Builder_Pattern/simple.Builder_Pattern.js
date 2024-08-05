class Car {
  constructor(builder) {
    this.make = builder.make;
    this.model = builder.model;
    this.year = builder.year;
    this.color = builder.color;
    this.sunroof = builder.sunroof;
    this.gps = builder.gps;
  }
}

class CarBuilder {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  setYear(year) {
    this.year = year;
    return this;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  setSunroot(sunroof) {
    this.sunroof = sunroof;
    return this;
  }

  setGPS(gps) {
    this.gps = gps;
    return this;
  }

  build() {
    return new Car(this);
  }
}

const myCar = new CarBuilder("Toyota", "Plane x Container")
  .setYear(2025)
  .setColor("red")
  .setSunroot(true)
  .setGPS(true)
  .build();

  console.log(myCar)
