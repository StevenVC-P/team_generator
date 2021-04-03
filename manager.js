const inquirer = require ('inquirer');
const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, employeeId, email, number) {
    super(name, employeeId, email);

    this.number = number
    this.managerCard = () => {
        console.log(`Name: ${this.name} Id: ${this.employeeId} E-mail: ${this.email} Phone: ${this.number}`)
    }
  }
}

// TODO: Create a new object using the 'Developer' constructor
const managerGeneration = [
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
    // {
    // type: 'choice'
    // message: "Add a intern or engineer?"
    // choice:
    //     intern
    //     engineer
    //     no thank you
    // }
]
inquirer.prompt(managerGeneration)
    .then ((response) => {
        const boss = new Manager(response.name, response.id, response.email, response.phone)
        boss.managerCard();

    });