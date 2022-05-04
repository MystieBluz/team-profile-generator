// Creating the Engineer Constructor
class Engineer extends Employee {
    constructor (name, id, email, github){
        super (name, id, email);
        this.github = github;
    }

    engineerGithub () {
        return this.github;
    }
   
};

// Employee is Parent to other team classes
const Employee = require('./Employee')


// Engineer module.export
module.exports = Engineer;