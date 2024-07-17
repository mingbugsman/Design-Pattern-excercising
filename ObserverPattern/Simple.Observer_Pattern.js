class Subject {
    constructor() {
      this.observers = [];
    }
  
    // Add an observer
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    // Remove an observer
    removeObserver(observer) {
      if (this.observers.includes(observer)) {   
        this.observers = this.observers.filter(obs => obs !== observer);
        this.notifyObservers(`${observer.name} leaves event giftaway`);
      }
    }
  
    // Notify all observers
    notifyObservers(message) {
      this.observers.forEach(observer => observer.update(message));
    }
}
  

class Observer {
    constructor(name) {
      this.name = name;
    }
  
    // The update method is called when the subject changes
    update(message) {
      console.log(`${this.name} received message: ${message}`);
    }
}
  

// Create a subject
const subject = new Subject();

// Create observers
const observer1 = new Observer("Tuấn Minh");
const observer2 = new Observer("Hoàng Thịnh");
const observer3 = new Observer("Trọng Tín");

// Add observers to the subject
subject.addObserver(observer1);
subject.addObserver(observer2);
subject.addObserver(observer3);

// Notify all observers
subject.notifyObservers("Iphone 15 mới ra đời!");
console.log("\n");
// Remove an observer
subject.removeObserver(observer2);
console.log("\n");
// Notify remaining observers
subject.notifyObservers("Iphone 16 mới ra đời!");
