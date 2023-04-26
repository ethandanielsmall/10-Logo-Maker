const inquirer = require('inquirer');
const fs = require('fs');

console.log("present!")

inquirer.prompt([
    {
        type: 'input',
        message: 'please enter up to three characters',
        name: 'characters'
    },
    {
        type: 'input',
        message: "please choose your logo's text color",
        name: 'textColors',
    },
    {
        type: 'input',
        message: "please choose your logo's shape's color",
        name: 'shapeColors',
    },
    {
        type: 'list',
        message: "please choose your logo's shape",
        name: 'shape',
        choices: ['circle', 'square', 'triangle', 'heart']
    },
]
)