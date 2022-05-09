const Engineer = require('../lib/Engineer');
  
test('engineer object', () => {
    const engineer = new Engineer('Misty', 1, 'misty.duhart@gmail', 'mduhart82');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('engineer github', () => {
    const engineer = new Engineer('Misty', 1, 'misty.duhart@gmail', 'mduhart82');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('employee role', () => {
    const engineer = new Engineer('Misty', 1, 'misty.duhart@gmail', 'mduhart82');

    expect(engineer.getRole()).toEqual("Engineer");
});