const Employee = require('../lib/Employee');
 
test('employee object', () => {
    const employee = new Employee('Misty', 1, 'misty.duhart@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('employee name', () => {
    const employee = new Employee('Misty', 1, 'misty.duhart@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});


test('employee ID', () => {
    const employee = new Employee('Misty', 1, 'misty.duhart@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('employee email', () => {
    const employee = new Employee('Misty', 1, 'misty.duhart@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('employee role', () => {
    const employee = new Employee('Misty', 1, 'misty.duhart@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 