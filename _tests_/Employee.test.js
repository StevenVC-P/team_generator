const Employee = require('../lib/employee');

describe('getName',() => {
    it('should return the name given from the user', () => {
        const empl = new Employee("Steven", 15, "myemail@email.com");
        expect(empl.getName()).toEqual("Steven");
    })
}); 

describe('getId',() => {
    it('should return the id given from the user', () => {
        const empl = new Employee("Steven", 15, "myemail@email.com");
        expect(empl.getId()).toEqual(15);
    })
});

describe('getEmail',() => {
    it('should return the email given from the user', () => {
        const empl = new Employee("Steven", 15, "myemail@email.com");
        expect(empl.getEmail()).toEqual("myemail@email.com");
    })
});

describe('getRole',() => {
    it('should return Employee until a role has been determined', () => {
        const empl = new Employee("Steven", 15, "myemail@email.com");
        expect(empl.getRole()).toEqual("Employee")
    })
});