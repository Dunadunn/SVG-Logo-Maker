const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

function promptUser() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'Which shape would you like for your logo?',
            choices: ['Triangle', 'Circle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the color for your shape (can be a name or hex value):'
        },
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for your logo text:',
            validate: input => {
                if (input.length <= 3) {
                    return true;
                }
                return 'Please enter no more than three characters.';
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the color for your text (can be a name or hex value):'
        }
    ]);
}

function generateSVG(answers) {
    const { shape, shapeColor, text, textColor } = answers;
    let svgContent = '<?xml version="1.0" encoding="UTF-8"?>';
    svgContent += '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

    console.log(`Generating SVG for shape: ${shape} with color: ${shapeColor}`);

    switch (shape) {
        case 'Circle':
            svgContent += new Circle(150, 100, 100, shapeColor).render();
            break;
        case 'Square':
            svgContent += new Square(50, 50, 200, shapeColor).render();
            break;
        case 'Triangle':
            svgContent += new Triangle(150, 50, 50, 150, 250, 150, shapeColor).render();
            break;
    }

    // Add text to SVG content
    const textX = 150; // Center of SVG
    const textY = 100; // Middle of SVG
    svgContent += `<text x="${textX}" y="${textY}" fill="${textColor}" text-anchor="middle" font-size="24px" font-family="Arial">${text}</text>`;
    svgContent += '</svg>';

    return svgContent;
}

function saveToSVGFile(data) {
    fs.writeFile('logo.svg', data, err => {
        if (err) throw err;
        console.log('Generated logo.svg');
    });
}

function init() {
    promptUser()
        .then(answers => generateSVG(answers))
        .then(svgData => saveToSVGFile(svgData))
        .catch(err => console.error(err));
}

// Start the application
init();
