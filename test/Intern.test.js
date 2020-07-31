const Intern = require("../lib/Intern");

test("test returns Intern as an object", () => {
    const intern = new Intern();
    expect(typeof intern).toBe("object");
});

test("intern name can be set", () => {
    const person = "Jackie";
    const intern = new Intern(person);
    expect(intern.name).toBe(person);
});

test("intern name can be returned", () => {
    const person = "Jackie";
    const intern = new Intern(person);
    expect(intern.getName()).toBe(person);
});

test("school info can be returned", () => {
    const school = "school";
    const intern = new Intern("Jackie", 1, "jackie@test.com", school);
    expect(intern.getSchool()).toBe(school);
});

test("getRole returns 'Inter' ", () => {
    const role = "Intern";
    const intern = new Intern(role);
    expect(intern.getRole()).toBe(role);
});