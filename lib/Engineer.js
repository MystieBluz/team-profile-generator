// Employee is Parent to other team classes (i.e. manager, engineer and intern)
const Employee = require('./Employee')

// Creating the Engineer Constructor
class Engineer extends Employee {
    constructor (name, id, email, github){
        // Super refers to the Employee class
        super (name, id, email);
        this.github = github;
    }

    engineerGithub () {
        return this.github;
    }

    engineerTitle () {
        return "Engineer"
    }
   
};




// Engineer module.export
module.exports = Engineer;