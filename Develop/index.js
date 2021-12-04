// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project',
        message: 'What is your project called?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the name of your project');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your application.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a description of your project.');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation steps?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please describe the installation process for your users.');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide instructions and examples for use.');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Please list your collaborators, if any: ',
      },
      {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open",
            "None"
        ]
      },
      {
        type: 'input',
        name: 'features',
        message: 'Please list any features here: ',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Please describe how other developers can contribute: ',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please provide any relevant tests for your application: ',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide your GitHub username.');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide your email address.');
                return false;
            }
        }
      },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        console.log("Generate Readme...");
        writeToFile("README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
