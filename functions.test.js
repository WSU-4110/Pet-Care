const Laith = require('./functions');

//get full name
test('Testing function 01', () => {
    expect(Laith.getFullName()).toEqual('Laith Rafidi');
});

//get title
test('Testing function 02', () => {
    expect(Laith.getTitle()).toEqual('Software Engineer');
});

//get description
test('Testing function 03', () => {
    expect(Laith.getDescription()).toEqual('Laith is a passionate software engineer. His favorite pet is Oscar from Pet of the Day!');
});

//get age
test('Testing function 04', () => {
    expect(Laith.getAge()).toEqual(21);
});

//get nationality
test('Testing function 05', () => {
    expect(Laith.getNationality()).toEqual('Palestinian');
});

//get university
test('Testing function 06', () => {
    expect(Laith.getUniversity()).toEqual('Wayne State University');
});

