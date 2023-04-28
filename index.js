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
        choices: ['circle', 'square', 'triangle']
    },
]
)

.then((data) => {
    const {characters, textColor, shapeColor, shape} = data;
    var svgInstance;
    switch (shape){
        case "circle":
            svgInstance = new Circle(characters, textColor, shapeColor);
            break;
        case "square":
            svgInstance = new Square(characters, textColor, shapeColor);
            break;
        case "triangle":
            svgInstance = new Triangle(characters, textColor, shapeColor);   
    }
    
    fs.writeFileSync(`./examples/${characters}-logo.svg`, svgInstance.render());
    });