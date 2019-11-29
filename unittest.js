
// function that tests the first and last name properly for the stray animals tab


const functions = require('./functions');

test('user should be mahir chowdhury object ',()=>{

expect(functions.createuser()).toEqual({

    firstname:'mahir',
    lastname: 'chowdhury'
});    
});


// checking for names and initilalizinfg database

const functions= require('./functions');

 beforeEach(() => initDatabase());
 afterEach(() => closeDatabase());
 beforeAll(() => initDatabase());
 afterAll(() => closeDatabase());

 const initDatabase = () => console.log('Database Initialized...');
 const closeDatabase = () => console.log('Database Closed...');
const nameCheck = () => console.log('Checking Name....');
describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    const user = 'Jeff';
    expect(user).toBe('Jeff');
  });

  test('User is Karen', () => {
    const user = 'Karen';
    expect(user).toBe('Karen');
  });
});



// array that will have specific name saved when the user will save it  in the username when the user will put the name  

test('user first and last name should be in 50 characeters', () => {
  const firstname_length = 25;
  const lastname_length = 25;
  expect(firstname_length + lastname_length).toBeLessThanOrEqual(25);
});

// array that will have specific name saved when the user will save it  in the username when the user will put the name  

const functions= require('./functions');

test('user first and last name Should be under 50 character', () => {
  const firstname_length = 25;
  const lastname_length = 25;
  expect(firstname_length + lastname_length).toBeLessThanOrEqual(50);
test('mahir should be in usernames', () => {
  usernames = ['john', 'karen', 'mahir'];
  expect(usernames).toContain('mahir');
});

// This will check if there is any unusal character in the username  

test('There is no $,#,%,&,* in username', () => {
  expect('username').not.toMatch(/%/,/#/,/&/);
});




// This will fetch the username from the databse according to the profile while logged it

// Async Await
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});

});
