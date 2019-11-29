//Testing file for index.js
//Author: Omar Rahman
//Date: 11/28/2019

const functions = require('./functions');

// Age test
test('Age should be less than or equal to 100', () => {

    expect(functions.age_entry()).toBeLessThanOrEqual(100);
});


// Phone number test
// phone number must be less 11 digits
test('Phone number digit must be less than 11', () => {

    expect(functions.phone_number()).toBeLessThan(11);
});


//Email test
test('Email should not be null', () => {
    expect(functions.email()).not.toBeNull();
});
 

// test user 1
// testing with dummy data
test('User name should be John Doe', () => {
    expect(functions.createUser()).toEqual({
      firstName: 'John',
      lastName: 'Doe'
    });
});


// test user 2
// testing with dummy data
test('User name should be Jason Smith', () => {
    expect(functions.createUser_2()).toEqual({
      firstName: 'Jason',
      lastName: 'Smith'
    });
});

// For reference with existing database users
// Users are stores in Arrays
test('Mahir should be in usernames', () => {
    usernames = ['Laith', 'Hassan', 'Mahir'];
    expect(usernames).toContain('Mahir');
});