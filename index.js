const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const manager = require(`./employees/manager.js`)
const html = './index_output/index.html'

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('HTML Started!')
    );
};  

function appendEnd(fileName, data) {
    fs.appendFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('HTML Ended!')
    );
}

const init = () => {
    manager.managerGeneration()
        .then (() => writeToFile(html, generateMarkdown.createHTML()))
        .then (() => appendEnd(html, generateMarkdown.endHTML()))
};

//     inquirer.prompt(manager.questions)
//     .then ((response) => {
//     writeToFile('./index_output/index.html', generateMarkdown.createMarkdown(response))
// });
// };

init();