const Employee = require("../lib/Employee");

test("test will return Employee as an object", () => {
  const employee = new Employee();
  expect(typeof employee).toBe("object");
});

test("can employee name be set", () => {
  const person = "Frankie";
  const employee = new Employee(person);
  expect(employee.name).toBe(person);
});

test("can name be returned from function", () => {
  const person = "Frankie";
  const employee = new Employee(person);
  expect(employee.getName()).toBe(person);
});
