const Manager = require("../lib/Manager");


test("test will return Manager as an object", () => {
    const manager = new Manager();
    expect(typeof manager).toBe("object");
  });

test("can manager name be set", () => {
    const person = "Dave";
    const manager = new Manager(person);
    expect(manager.name).toBe(person);
});

test("can name be returned from function", () => {
    const person = "Dave";
    const manager = new Manager(person);
    expect(manager.getName()).toBe(person);
});

test("can office be set", () => {
    const door = "255";
    const manager = new Manager("Dave", 1, "dave@test.com", door);
    expect(manager.getOffice()).toBe(door);
});

test("does getRole return 'Manager' ", () => {
    const role = "Manager";
    const manager = new Manager(role); 
    expect(manager.getRole()).toBe(role);
});

