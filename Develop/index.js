// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "name",
        message: "Name of the project owner:"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions for your project."
    },
    {
        type: "input",
        name: "usage",
        message: "Please list all languages and technologies used in this project."
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license for your project.",
        choices: ["MIT", "Apache 2.0", "Boost", "BSD 3-Clause", "None"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide contribution guidelines for your project."
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide test instructions for your project."
    },
    {
        type: "input",
        name: "email",
        message: "Please provide a contact email."
    },
    {
        type: "input",
        name: "github",
        message: "Please provide a GitHub username and link to repository"
    }
];

// TODO: Create a function to write README file

    function writeToFile(fileName, data) {
     return fs.writeFileSync(path.join(process.cwd(), fileName), data);
 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log("Generating README...");
        writeToFile("./dist/README.md", generateMarkdown({ ...inquirerResponses }));
    });
}

// Function call to initialize app
init();
