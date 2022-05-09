// Employee is Parent to other team classes (i.e. manager, engineer and intern)
const Employee = require('./Employee');

class Intern extends Employee  {
    constructor (name, id, email, school) {
        super (name, id, email); 
        this.school = school; 
    }

    getSchool () {
        return this.school;
    }

    getRole () {
        return "Intern";
    }
}



// Intern module.export
module.exports = Intern;