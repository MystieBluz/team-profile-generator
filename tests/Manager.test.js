const Manager = require('../lib/Manager');
  
test('manager object', () => {
    const manager = new Manager('Misty', 1, 'misty.duhart@gmail', 1);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('employee role', () => {
    const manager = new Manager('Misty', 1, 'misty.duhart@gmail', 1);

    expect(manager.getRole()).toEqual("Manager");
}); 