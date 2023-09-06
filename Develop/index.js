// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:'
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'List the contribution guidelines:'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None']
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
      }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        const readmeContent = generateReadme(answers);
        writeToFile('README.md', readmeContent);
    })
}

// Function call to initialize app
init();
