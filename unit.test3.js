// array that will have specific name saved when the user will save it  in the username when the user will put the name  

test('user first and last name should be in 50 characeters', () => {
  const firstname_length = 25;
  const lastname_length = 25;
  expect(firstname_length + lastname_length).toBeLessThanOrEqual(25);
});

