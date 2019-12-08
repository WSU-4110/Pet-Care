const Santhosh = require('./main');

test('Testing method for job title', () => {
    expect(Santhosh.getTitle()).toEqual('Software Developer');
});

test('Testing method for full name', () => {
    expect(Santhosh.getFullName()).toEqual('Santhosh Abraham');
});


test("Testing method for user's age", () => {
    expect(Santhosh.getAge()).toEqual(22);
});

test("Testing method for user's input", () => {
    expect(Santhosh.getNationality()).toEqual('American');
});


test("Testing method for user's input", () => {
    expect(Santhosh.getUniversity()).toEqual('Wayne State University');
});


test("Testing method for user's input", () => {
    expect(Santhosh.getDescription()).toEqual('Student');
});



