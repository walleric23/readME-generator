// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  // question for the title
  {
    type: "input",
    name: "title",
    message: "what is the readME title?",
  },
  // questions for description
  {
    type: "input",
    name: "description",
    message: "how would you describe the generator",
  },
  // question for installation
  {
    type: "input",
    name: "installation",
    message: "how would you install this generator?",
  },
  // question for how to use it
  {
    type: "input",
    name: "usage",
    message: "how would you use the generator?",
  },
  // question for how to contribute
  {
    type: "input",
    name: "contributing",
    message: "how would users contribute?",
  },
  // question for how can you test this
  {
    type: "input",
    name: "tests",
    message: "how can you run tests?",
  },
  // question for which license the user chooses to use.
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
  // enter username
  {
    type: "input",
    name: "username",
    message: "what is your Github username?",
  },
  // enter email
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
