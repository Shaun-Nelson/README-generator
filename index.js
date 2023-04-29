// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message:
      "Provide a short description explaining the what, why, and how of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions and examples for use.",
    name: "usage",
  },
  {
    type: "input",
    message: "What are the contributing guidelines?",
    name: "contributing",
  },
  {
    type: "input",
    message: "Provide test instructions for your project.",
    name: "tests",
  },
  {
    type: "list",
    message: "Which license to choose from?",
    name: "license",
    choices: [
      "MIT",
      "Creative Commons",
      "Apache",
      "GNU General Public License",
      "None",
    ],
  },
  {
    type: "input",
    message: "Enter your GitHub username.",
    name: "username",
  },
  {
    type: "input",
    message: "Enter your e-mail address.",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, JSON.stringify(data), (err) => {
    err ? console.error(err) : console.log("Success!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => console.log(answers));
}

// Function call to initialize app
init();
