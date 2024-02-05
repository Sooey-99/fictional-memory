const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type:'input',
        name:'title',
        message:'What is the title of your Readme?',
    },
    {
        type:'input',
        name:'description',
        message:'What is the description for this Readme?',
    },
    {
        type:'input',
        name:'contents',
        message:'What is in the contents of your Readme?',
    },
    {
        type:'input',
        name:'installation',
        message:'How do you install your Readme?',
    },
    {
        type:'input',
        name:'usage',
        message:'Provide instructions and examples for use.',
    },
    {
        type:'input',
        name:'credit',
        message:'List your collaborators, if any, with links to their GitHub profiles.',
    },
    {
        type:'input',
        name:'licence',
        message:'Add your license',
    },
];

// function to write README file
function writeToFile(fileName, data) {
  return  fs.writeFile(fileName, data, (err, result) => err ? console.log(err) : console.log(result))
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile('student.md', generateMarkdown(data))   
    })
}

// function call to initialize program
init();

// console.log(`${100 + 200} days to go`);
