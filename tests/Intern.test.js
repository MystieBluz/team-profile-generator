const Intern = require('../lib/Intern');

test('intern object', () => {
    const intern = new Intern('Misty', 1, 'misty.duhart@gmail', 'NYU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('intern school', () => {
    const intern = new Intern('Misty', 1, 'misty.duhart@gmail', 'NYU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('employee role', () => {
    const intern = new Intern('Misty', 1, 'misty.duhart@gmail', 'NYU');

    expect(intern.getRole()).toEqual("Intern");
}); 