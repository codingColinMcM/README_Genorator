// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{
    'name': 'title',
    'message': 'What is the project title?'
},
{
    'name': 'description',
    'message': 'What is the description of the project?'
},
{
    'name': 'instructions',
    'message': 'What are the installation instructions?'
},
{
    'name': 'usage',
    'message': 'What is the usage information?'
},
{
    'name': 'contribution',
    'message': 'What are the contribution guidelines?'
},
{
    'name': 'test',
    'message': 'What are the test instructions?'
},
{
    'name': 'license',
    'message': 'Which licence do you want attributed to the project',
    'choices': [
        'Academic Free License v3.0',
        'Boost Software License 1.0',
        'Creative Commons license family',
        'Educational Community License v2.0',
        'ISC',
        'MIT',
        'Open Software License 3.0	',
        'PostgreSQL License	',
        'University of Illinois/NCSA Open Source License',
        'zLib License',
    ]
},
{
    'name': 'user',
    'message': 'What is your GitHub username?'
},
{
    'name': 'email',
    'message': 'What is your email?'
}
];

var data = {};


async function getAnswers() {
    for (const question of questions) {
        if ('choices' in question) {
            var response = await inquirer 
            .prompt([{
                name: question['name'],
                message: question['message'],
                type: 'list',
                choices: question['choices']
            }])
            data[question['name']] = response[question['name']]
        } else {
            var response = await inquirer 
            .prompt([{
                name: question['name'],
                message: question['message']
            }])
            data[question['name']] = response[question['name']]
        }
    }
    writeToFile(data);
}

getAnswers();

// TODO: Create a function to write README file
function writeToFile(data) {
    const readmePageContent = generateMarkdown(data);

    fs.writeFile(`${data['title']}.md`, readmePageContent, (err) =>
      err ? console.log(err) : console.log(`Successfully created ${data['title']}.md`)
    );
}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
