const inquirer = require ('inquirer');
const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, employeeId, email, phone) {
    super(name, employeeId, email);

    this.phone = phone
    this.managerConsole = () => {
        console.log(`Name: ${this.name} Id: ${this.employeeId} E-mail: ${this.email} Phone: ${this.phone}`)}
    this.managercard = () => {
      `
      <card>
        <h3>${this.name}</h3>
        <p>${this.employeeId}</p>
        <p>${this.email}</p>
        <p>${this.phone}</p>
      </card>
      `
    }
  }
}

// TODO: Create a new object using the 'Developer' constructor

const managerGeneration = () => {
  return inquirer.prompt([
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
  ]);
};


module.exports = {
  managerGeneration
};
// inquirer.prompt(managerGeneration)
//     .then ((response) => {
//         const boss = new Manager(response.name, response.id, response.email, response.phone)
//         boss.managerCard();

//     });