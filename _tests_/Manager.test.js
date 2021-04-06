const Manager = require('../lib/manager.js');

describe('getPhone',() => {
    it('should return the email given from the user', () => {
        const empl = new Manager("Steven", 15, "myemail@email.com", "555-1234");
        expect(empl.getEmail()).toEqual("myemail@email.com");
    })
});

describe('getRole',() => {
    it('should return Manager until a role has been determined', () => {
        const empl = new Manager("Steven", 15, "myemail@email.com", "555-1234");
        expect(empl.getRole()).toEqual("Manager")
    })
});