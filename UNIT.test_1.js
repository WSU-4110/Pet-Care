
// function that tests the first and last name properly for the stray animals tab


const functions = require('./functions');

test('user should be mahir chowdhury object ',()=>{

expect(functions.createuser()).toEqual({

    firstname:'mahir',
    lastname: 'chowdhury'
});    
});




