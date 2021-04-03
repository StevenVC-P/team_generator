//need to develop html with styling.  Probably incorportate some bootstrap
//need inqurier to generate prompts for filling in team member information
    //need to loop inqurier series for every team user wants to add
        //will need to append generated cards as they are added.
            //manager
             //then engineer or intern
//need working email link
//need working git hub link
class Employee {
    constructor(name, employeeId, email) {
      this.name = name;
      this.employeeId = employeeId;
      this.email = email
    }
}

module.exports = Employee;