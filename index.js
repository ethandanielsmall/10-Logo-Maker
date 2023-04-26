const inquirer = require('inquirer');
const fs = require('fs');

console.log("present!")

inquirer.prompt([
    {
        type: 'input',
        message: 'characters',
        name: 'please enter up to three characters'
    },
    {
        type: 'list',
        message: "please choose your logo's color",
        name: 'inputTest'
    },
    {
        type: 'list',
        message: "please choose your logo's shape",
        name: 'inputTest'
    },
]
)