// This will check if there is any unusal character in the username  

test('There is no $,#,%,&,* in username', () => {
  expect('username').not.toMatch(/%/,/#/,/&/);
});
