// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "what is the readME title?",
  },
  {
    type: "input",
    name: "description",
    message: "how would you describe the generator",
  },
  {
    type: "input",
    name: "installation",
    message: "how would you install this generator?",
  },
  {
    type: "input",
    name: "usage",
    message: "how would you use the generator?",
  },
  {
    type: "input",
    name: "contributing",
    message: "how would users contribute?",
  },
  {
    type: "input",
    name: "tests",
    message: "how can you run tests?",
  },
  {
    type: "list",
    name: "license",
    message: "what license does this use?",
    choices: [
      "MIT",
      "Apache License 2.0",
      "GNU General Public v3.0",
      "BSD 2",
      "BSD 3",
    ],
  },
  {
    type: "input",
    name: "username",
    message: "what is your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "what is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    let markdown = generateMarkdown(responses);
    fs.writeFile("./generated/readme.MD", markdown, (err) => {
      if (err) {
        console.log(err);
      }
      console.log("readME generated");
    });
  });
}

// Function call to initialize app
init();
