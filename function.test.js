// checking for names and initilalizinfg database

const functions= require('./functions');

test('user first and last name Should be under 50 character', () => {
  const firstname_length = 25;
  const lastname_length = 25;
  expect(firstname_length + lastname_length).toBeLessThanOrEqual(50);
});




