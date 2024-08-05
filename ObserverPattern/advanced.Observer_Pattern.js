class Subject {
    constructor() {
        this.observers = {};
    }

    addObserver(eventType, observer, handler, priority = 0) {
        if (!this.observers[eventType]) {
            this.observers[eventType] = [];
        }
        this.observers[eventType].push({observer,handler,priority});
        this.observers[eventType].sort((a,b) => b.priority - a.priority);
    }

    removeObserver(eventType, observer) {
        if (this.observers[eventType]) {
            this.observers = this.observers[eventType].filter(obs =>{ 
                console.log(obs);
                obs.observer !== observer});
        }
    }
    // Notify all observers of a specific event type asynchronously
    async notifyObservers(eventType, message) {
        if (this.observers[eventType]) {
            const notifications = this.observers[eventType].map(obs =>
                obs.handler.call(obs.observer, message)
            );
            await Promise.all(notifications);
        }
    }
}

class Observer {
    constructor(name) {
      this.name = name;
    }
  
    // Handler method for a specific event type
    handleEvent(message) {
      console.log(`${this.name} received message: ${message}`);
      return Promise.resolve();
    }
  
    // Another handler method for demonstration purposes
    handleAnotherEvent(message) {
      console.log(`${this.name} received another message: ${message}`);
      return Promise.resolve();
    }
  }
  

  // Create a subject
const subject = new Subject();

// Create observers
const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");
const observer3 = new Observer("Observer 3");



// Add observers with specific handlers and priorities
subject.addObserver("eventType1", observer1, observer1.handleEvent, 1);
subject.addObserver("eventType1", observer2, observer2.handleEvent, 2);
subject.addObserver("eventType2", observer2, observer2.handleAnotherEvent, 1);
subject.addObserver("eventType2", observer3, observer3.handleEvent, 0);


console.log(subject.observers);
console.log('\n\n\n\'');

// Notify observers of eventType1
subject.notifyObservers("eventType1", "Event Type 1 has occurred!").then(() => {
  console.log("All eventType1 notifications have been processed.");
});

// Notify observers of eventType2
subject.notifyObservers("eventType2", "Event Type 2 has occurred!").then(() => {
  console.log("All eventType2 notifications have been processed.");
});

subject.removeObserver("eventType1", observer2);


// Notify observers of eventType1 again
subject.notifyObservers("eventType1", "Event Type 1 has occurred again!").then(() => {
  console.log("All eventType1 notifications have been processed.");
});
