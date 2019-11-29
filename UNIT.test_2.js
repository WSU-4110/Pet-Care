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



