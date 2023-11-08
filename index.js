// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "email",
        message: "Please enter your email.",
    },
    {
        type: "input",
        name: "gitUser",
        message: "Please enter your GitHub username.",
    },
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "projectDescription",
        message: "Enter a description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Enter required steps for project installation.",
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter information on the usage of this project.",
    },
    {
        type: "input",
        name: "contributions",
        message: "Please enter any credits for contributions to this project.",
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter any testing instructions for this project.",
    },
    {
        type: "list",
        name: "license",
        message: "Select which licensing applies to this project.",
        choices: ["Apache", "BSD", "GNU", "MIT"]
    },
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success, your README has been created!'))
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        let readmeConent = generateMarkdown(answers);
        writeToFile('README.md', readmeConent);
    });
}

// Function call to initialize app
init();