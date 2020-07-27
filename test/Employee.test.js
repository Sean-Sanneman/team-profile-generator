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

test("can ID be set", () => {
  const id = "333";
  const employee = new Employee("Frankie", id);
  expect(employee.getId()).toBe(id);
});

test("can email be set", () => {
  const email = "frankie@test.com";
  const employee = new Employee("Frankie", 1, email);
  expect(employee.getEmail()).toBe(email);
});
test("does getRole return 'Employee' ", () => {
  const role = "Employee";
  const employee = new Employee("Frankie", role);
  expect(employee.getRole()).toBe(role);
});
