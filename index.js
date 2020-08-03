const inquirer = require("inquirer");
const fs = require("fs");

let infoData = [];

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

function template() {
  teamMember();
}

function roleCard(person) {
  const name = person.getName();
  const id = person.getId();
  const email = person.getEmail();
  const role = person.getRole();
  let info;

  if (role === "Engineer") {
    const github = person.getGithub();
    info = `<div class="card mx-auto" style="width: 18rem">
        <h3 class="card-header">${name}<br/><br/>Engineer</h3>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: ${email}</li>
            <li class="list-group-item">GitHub: ${github}</li>
        </ul>
        </div>`;
  } else if (role === "Intern") {
    const school = person.getSchool();
    info = ` <div class="card mx-auto" style="width: 18rem">
        <h3 class="card-header">${name}<br/><br/>Intern</h3>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: ${email}</li>
            <li class="list-group-item">School: ${school}</li>
        </ul>
        </div>`;
  } else {
    const office = person.getOffice();
    info = `<div class="card mx-auto" style="width: 18rem">
        <h3 class="card-header">${name}<br/><br/>Manager</h3>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: ${email}</li>
            <li class="list-group-item">Office: ${office}</li>
        </ul>
        </div>`;
  }
  console.log(info);
  return info;
}

const teamMember = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is this team member's name?",
        name: "name",
      },
      {
        type: "list",
        message: "Please select this team member's role.",
        name: "role",
        choices: ["Engineer", "Intern", "Manager"],
      },
      {
        type: "input",
        message: "What is this team member's ID number?",
        name: "id",
      },
      {
        type: "input",
        message: "Please enter employee's email address.",
        name: "email",
      },
    ])
    .then(function ({ name, role, id, email }) {
      let specInfo = "";
      if (role === "Engineer") {
        specInfo = "github";
      } else if (role === "Intern") {
        specInfo = "school";
      } else {
        specInfo = "office";
      }
      console.log("inside first callback");
      inquirer
        .prompt([
          {
            type: "input",
            message: `Please enter employee's ${specInfo}`,
            name: "specInfo",
          },
          {
            type: "list",
            message: "Would you like to add another person to this team?",
            name: "addPeople",
            choices: ["yes", "no"],
          },
        ])
        .then(function ({ specInfo, addPeople }) {
          let newPerson;
          if (role === "Engineer") {
            newPerson = new Engineer(name, id, email, specInfo);
          } else if (role === "Intern") {
            newPerson = new Intern(name, id, email, specInfo);
          } else {
            newPerson = new Manager(name, id, email, specInfo);
          }

          if (addPeople === "yes") {
            teamMember();
          } else {
            infoData.push(roleCard(newPerson));
            createHtml();
            endPage();
          }

          infoData.push(roleCard(newPerson));
        });

      // html creation
      function createHtml() {
        const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="../dist/style.css">
    
        <title>My Team</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-primary">
            <span class="navbar-brand mb-0 h1 w-100 text-center"><h2>Team Members</h2></span>
          </nav>
          <div class="container">`;
        infoData.join("\n");
        let content = html.concat(infoData);
        content += endPage();
        console.log(content);
        fs.writeFile("./dist/team.html", content, (err) => {
          if (err) {
            throw new Error(err);
          }
          console.log("appended to file");
        });

        console.log("start");
      }
    });
};

const endPage = () => {
  return `
            </div>
            </div>
        </body>
    </html>
    `;
};

template();
