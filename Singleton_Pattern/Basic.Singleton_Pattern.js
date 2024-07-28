class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        console.log(this.data);
        this.data = "I never change !!!!";
        Singleton.instance = this;
        return this;
    }
    getData() {
        return this.data;
    }
    setData(newData) {
        this.data= newData;
    }
}

const instance1 = new Singleton();

const instance2 = new Singleton();
console.log(instance2);