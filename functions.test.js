const Santhosh = require('./functions');



//get title
test('Testing method', () => {
    expect(Santhosh.getTitle()).toEqual('Software Developer');
});


//get full name
test('Testing method', () => {
    expect(Santhosh.getFullName()).toEqual('Santhosh Abraham');
});


//get age
test('Testing method', () => {
    expect(Santhosh.getAge()).toEqual(22);
});

//get nationality
test('Testing method', () => {
    expect(Santhosh.getNationality()).toEqual('American');
});

//get university
test('Testing method', () => {
    expect(Santhosh.getUniversity()).toEqual('Wayne State University');
});



//get description
test('Testing method', () => {
    expect(Santhosh.getDescription()).toEqual('Lorem Ipsum');
});



