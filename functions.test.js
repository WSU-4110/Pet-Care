const Hassan = require('./functions');

//get full name
test('Returns first and last name', () => {
    expect(Hassan.getFullName()).toEqual('Hassan Bachir');
});

//get title
test('Returns title', () => {
    expect(Hassan.getTitle()).toEqual('Software Developer');
});

//get description
test('Returns description', () => {
    expect(Hassan.getDescription()).toEqual('Hassan is a Software Engineer on the Pet-Care Team working towards bringing all Pet stop shops into one simple location. Hassan is passionate about pets, his favorite pets is Fish.');
});

//get age
test('Returns age', () => {
    expect(Hassan.getAge()).toEqual(24);
});

//get nationality
test('Returns nationality', () => {
    expect(Hassan.getNationality()).toEqual('Lebanese');
});

//get university
test('Returns university', () => {
    expect(Hassan.getUniversity()).toEqual('Wayne State University');
});

