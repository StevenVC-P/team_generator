const Intern = require('../lib/intern.js');

describe('getSchool',() => {
    it('should return the school given from the user', () => {
        const empl = new Intern("Steven", 15, "myemail@email.com", "University of Minnesota");
        expect(empl.getSchool()).toEqual("University of Minnesota");
    })
});

describe('getRole',() => {
    it('should return Intern until a role has been determined', () => {
        const empl = new Intern("Steven", 15, "myemail@email.com", "555-1234");
        expect(empl.getRole()).toEqual("Intern")
    })
});