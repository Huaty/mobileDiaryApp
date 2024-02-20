class User {
  constructor({ id, name, email, password }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  // Example of a method that could exist on a model
  greet() {
    return `Hello, my name is ${this.name}!`;
  }

  // You could also include methods for validation that doesn't require DB access
  validate() {
    const errors = [];
    if (!this.name) errors.push("Name is required.");
    if (!this.email) errors.push("Email is required.");
    // Add more validation as needed
    return errors;
  }
}

module.exports = User;
