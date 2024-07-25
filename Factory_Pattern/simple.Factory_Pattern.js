// mo hinh simple factory

class ServiceLogistics {
    constructor(doors = 6, price = "100.000 VND", name = "Truck") {
        this.doors = doors,
        this.price = price,
        this.name = name
    }
    static getTransport(CargoVolumn) {
        switch (CargoVolumn) {
            case '10':
                return new ServiceLogistics();
            case '20':
                return new ServiceLogistics(20,'600.000 VND' , 'Container');
        }
    }
};


console.log("level xxx :::", ServiceLogistics.getTransport('20'));