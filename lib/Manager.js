// Employee is Parent to other team classes (i.e. manager, engineer and intern)
const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email); 
        this.officeNumber = officeNumber; 
    }

    getRole () {
        return "Manager";
    }
}





module.exports = Manager;