const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./utils/generateHTML.js');
const Manager = require('./employees/manager.js');
const Engineer = require('./employees/engineer.js');
const Intern = require('./employees/intern.js');

const html = './index_output/index.html'

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
    message: "What is the engineer's github?",
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
    
const init = () => {
    writeToFile(html, generateHTML.createHTML())
    managerResponse();
};

init();