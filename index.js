const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

const html = './dist/index.html'

//these functions write the index.htm
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
    );
};  

function writeManager(fileName, data){
    fs.appendFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
    );
};

function writeEngineer(fileName, data){
    fs.appendFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
    );
};

function writeIntern(fileName, data){
    fs.appendFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
    );
};

function appendEnd(fileName, data) {
    fs.appendFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
    );
};

//these are the list of questions generated in the prompt that will feed toward the variables used in writing the html
const managerQuestions = [
    {
    type: 'input',
    message: "What is the manager's name?",
    name: 'name',
    },
    {
    type: 'number',
    message: "What is the manager' Id number?",
    name: 'id',
    },
    {
    type: 'input',
    message: "What is the manager's e-mail?",
    name: 'email'
    },
    {
    type: 'input',
    message: "What is the manager's phone number?",
    name: 'phone'
    },
]

const engineerQuestions = [
    {
    type: 'input',
    message: "What is the engineer's name?",
    name: 'name',
    },
    {
    type: 'number',
    message: "What is the engineer' Id number?",
    name: 'id',
    },
    {
    type: 'input',
    message: "What is the engineer's e-mail?",
    name: 'email',
    },
    {
    type: 'input',
    message: "What is the engineer's github name?",
    name: 'github'
    },
]

const internQuestions = [
    {
    type: 'input',
    message: "What is the intern's name?",
    name: 'name',
    },
    {
    type: 'number',
    message: "What is the intern' Id number?",
    name: 'id',
    },
    {
    type: 'input',
    message: "What is the intern's e-mail?",
    name: 'email',
    },
    {
    type: 'input',
    message: "What is the intern's school?",
    name: 'school'
    },
]

// askes the user to create a new employee or end the program
const nextEmployee =() => {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add another employee?",
            choices: ["Engineer", "Intern", "Finished"],
            name: "nextEmployee",
        }
    ]).then(data => {
        const role = data.nextEmployee;
        if (role === "Engineer"){
            engineerResponse();
        }else if (role === "Intern"){
            internResponse();
        }else if (role === "Finished"){
            appendEnd(html, generateHTML.endHTML())
        };
    })
}
 

//functions that take the user inputs and move to writing the html and generating the next set of questions
function managerResponse(){
    inquirer.prompt(managerQuestions)
        .then ((response) =>{
        const boss = new Manager(response.name, response.id, response.email, response.phone)  
        writeManager(html, generateHTML.createManager(boss))
        console.log(boss)
        nextEmployee();
        })
}

function engineerResponse(){
    inquirer.prompt(engineerQuestions)
        .then ((response) =>{
        const senior = new Engineer(response.name, response.id, response.email, response.github)  
        writeEngineer(html, generateHTML.createEngineer(senior))
        nextEmployee();
    })
}

function internResponse(){
    inquirer.prompt(internQuestions)
        .then ((response) =>{
        const junior = new Intern(response.name, response.id, response.email, response.school)  
        writeIntern(html, generateHTML.createIntern(junior))
        nextEmployee();
    })
}

//begins the program
const init = () => {
    writeToFile(html, generateHTML.createHTML())
    managerResponse();
};

init();