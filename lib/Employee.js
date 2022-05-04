// Creating Employee Constructor -- applied to each team member
class Employee{
    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    employeeName () {
        return this.name;
    }

    employeeId () {
        return this.id;
    }

    employeeEmail () {
        return this.email;
    }
};

// Employee Module -- each team memeber section will need to have a module.exports
module.exports = Employee;