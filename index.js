const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


const team = [];

function template() {
    startHtml();
    teamMember();
}

function teamMember() {
    inquirer.prompt ([{
        message: "What is this team member's name?",
        name: "name"
    },
    {
        type: "list",
        message: "Please select this team member's role.",
        name: "role",
        choices: ["Engineer", "Intern", "Manager"]
    },
    {
        message: "What is this team member's ID number?",
        name: "id"
    }, 
    {
        message: "Please enter employee's email address.",
        name: "email"
    }
    }])
    .then(function({name, role, id, email}) {
        let specInfo = "";
        if (role === "Engineer") {
            specInfo = "github";
        } else if (role === "Intern") {
            specInfo = "school";
        } else {
            specInfo = "office";
        }
        inquirer.prompt([{
            message: `Enter employee's ${specInfo}`,
            name: "specInfo"
        },
        {
        type: "list",
        message: "Would you like to add another person to this team?",
        name: "addPeople",
        choices: ["yes", "no"],
        }])
        .then(function({specInfo, addPeople}) {
            let newPerson;
            if (role === "Engineer") {
                newPerson = new Engineer(name, id, email, specInfo);
            } else if (role === "Intern") {
                newPerson = new Intern(name, id, email, specInfo);
            } else {
                newPerson = new Manager(name, id, email, specInfo);
            }
            team.push(newPerson);
            roleCard(newPerson).then(function() {
                if (addPeople === "yes") {
                teamMember();
                } else {
                    endPage();
                }
            });
        });
    });
}







template();
// create path to build in HTML for static webpage

