
// The length of first and last name the user puts it in the tab has to be a certain anmount


const functions = require('./functions');

test(' first and last name Should be under 50 characters', () => {
  firstname_length = 25;
  lastname_length = 25;
  expect(firstname_length + lastname_length).toBeLessThanOrEqual(50);
});

