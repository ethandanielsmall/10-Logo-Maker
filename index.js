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
        type: 'list',
        message: "please choose your logo's color",
        name: 'colors',
        choices: ['pink', 'green', 'cream']
    },
    {
        type: 'list',
        message: "please choose your logo's shape",
        name: 'shape',
        choices: ['circle', 'square', 'heart']
    },
]
)