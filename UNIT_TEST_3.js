

const UNIT_TEST_3 = {
  
  checkValue: x => x,
  createUser: () => {
    const user = { firstName: 'Brad' };
    user['lastName'] = 'Traversy';
    return user;
  },
  fetchUser: () =>
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.data)
      .catch(err => 'error')
};

module.exports = UNIT_TEST_3;