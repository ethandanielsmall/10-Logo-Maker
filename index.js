const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes');

inquirer.prompt([
    {
        type: 'input',
        message: 'please enter up to three characters',
        name: 'characters'
    },
    {
        type: 'input',
        message: "please choose your logo's text color",
        name: 'textColor',
    },
    {
        type: 'input',
        message: "please choose your logo's shape's color",
        name: 'shapeColor',
    },
    {
        type: 'list',
        message: "please choose your logo's shape",
        name: 'shape',
        choices: ['circle', 'square', 'triangle', 'heart']
    },
]
)

.then((data) => {
    const {characters, textColor, shape, shapeColor} = data;
    switch (shape){
        case "circle":
            generateLogo = new Circle(shapeColor, textColor, characters);
            break;
        case "square":
            generateLogo = new Square(shapeColor, textColor, characters);
            break;
        case "triangle":
            generateLogo = new Triangle(shapeColor, textColor, characters);
            break;
        case "heart":
            generateLogo = new Heart(shapeColor, textColor, characters);    
    }
    fs.writeFileSync('./examples/logo.svg', svgInstance.render());
    });