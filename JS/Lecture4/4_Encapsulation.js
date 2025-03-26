class Person {
    #name;   // Private field

    constructor(name, age) {
        this.#name = name;   // Private field assignment
        this.age = age;      // Public field
    }

    // Getter method for name
    getName() {
        return this.#name;
    }

    // Setter method for name
    setName(newName) {
        if (newName.length > 0) {
            this.#name = newName;
        } else {
            console.log("Name cannot be empty.");
        }
    }
}

const person1 = new Person("Alice", 25);

console.log(person1.getName());   // Alice
person1.setName("Bob");
console.log(person1.getName());   // Bob

// Accessing the private field directly will throw an error
// console.log(person1.#name);    // ❌ Syntax Error
