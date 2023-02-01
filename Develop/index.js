// TODO: Include packages needed for this application
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'Description',
        message: 'Description of your project:',
        name: 'Description',
    }, 
    {
        type: 'ToC',
        message: 'Describe your table of contents:',
        name: 'ToC'
    },
    {
        type: 'Installation',
        message: 'Describe the installation process:',
        name: 'Installation'
    },
    {
        type: 'Usage:',
        message: 'Describe the usage:',
        name: 'Usage'
    },
    {
        type: 'License:',
        message: 'What license do this application have?',
        name: 'License'
    },
    {
        type: 'Contributions',
        message: 'Describe the contributions outside parties made:',
        name: 'Contributions'
    },
    {
        type: 'Tests',
        message: 'Describe the tests performed:',
        name: 'Tests'
    },
    {
        type: 'Improvements',
        message: 'Describe any improvements for future development:',
        name: 'Improvements'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile('readme.txt', readdata, (error, data) )
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
