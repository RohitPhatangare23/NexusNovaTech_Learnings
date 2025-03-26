class Car {
    constructor(brand, model, fuel) {
        this.brand = brand;
        this.model = model;
        this.fuel = fuel;
    }

    // Abstracting complex functionality into a simple method
    startCar() {
        console.log(`Starting ${this.brand} ${this.model}...`);
        this.#checkEngine();      // Internal implementation hidden
        this.#fuelCheck();
        console.log("Car started successfully!");
    }

    // Private methods (implementation details hidden)
    #checkEngine() {
        console.log("Checking engine status...");
    }

    #fuelCheck() {
        console.log(`Fuel level: ${this.fuel}%`);
    }
}

const myCar = new Car("Tesla", "Model 3", 80);
myCar.startCar();

// ❌ Cannot access private methods directly
// myCar.#checkEngine();    // Syntax Error: Private field
