// Creating Employee Constructor -- applied to each team member
class Employee{
    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    createName () {
        return this.name;
    }

    createId () {
        return this.id;
    }

    createEmail () {
        return this.email;
    }

    createTitle () {
        return "Employee"
    }
};

// Employee Module -- each team memeber section will need to have a module.exports
module.exports = Employee;