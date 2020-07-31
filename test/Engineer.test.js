const Engineer = require("../lib/Engineer");

test("test will return Engineer as an object", () => {
    const engineer = new Engineer();
    expect(typeof engineer).toBe("object");
});

test("engineer name can be set", () => {
    const person = "Sean";
    const engineer = new Engineer(person);
    expect(engineer.name).toBe(person);
});

test("name can be returned", () => {
    const person = "Sean";
    const engineer = new Engineer(person);
    expect(engineer.getName()).toBe(person);
});

test("github info can be returned", () => {
    const account = "github";
    const engineer = new Engineer("Sean", 1, "sean@test.com", account);
    expect(engineer.getGithub()).toBe(account);
});

test("getRole returns 'Engineer' ", () => {
    const role = "Engineer";
    const manager = new Engineer(role);
    expect(manager.getRole()).toBe(role);
});
