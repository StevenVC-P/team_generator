const Engineer = require('../lib/engineer.js');

describe('getGithub',() => {
    it('should return the github given from the user', () => {
        const empl = new Engineer("Steven", 15, "myemail@email.com", "https://github.com/StevenVC-P");
        expect(empl.getGithub()).toEqual("https://github.com/StevenVC-P");
    })
});

describe('getRole',() => {
    it('should return Engineer until a role has been determined', () => {
        const empl = new Engineer("Steven", 15, "myemail@email.com", "555-1234");
        expect(empl.getRole()).toEqual("Engineer")
    })
});