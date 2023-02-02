// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Description of your project:',
        name: 'description',
    }, 
    {
        type: 'input',
        message: 'Describe your table of contents:',
        name: 'toc'
    },
    {
        type: 'input',
        message: 'Describe the installation process:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Describe the usage:',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'What license do this application have?',
        name: 'license',
        choices: ['Apache 2.0','MIT','GNU v3.0']
    },
    {
        type: 'input',
        message: 'Describe the contributions outside parties made:',
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'Describe the tests performed:',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Describe any improvements for future development:',
        name: 'improvements'
    },
    {
        type: 'input',
        message: 'Enter your GitHub profile:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Contact Information:',
        name: 'information',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        error ? console.log(error) : console.log('File has been created!');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        let template = generateMarkdown(answers);
        // console.log(template);
        writeToFile('./dist/README.md', template);
    })
}

// Function call to initialize app
init();
