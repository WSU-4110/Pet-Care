// main javascript file for Unit testing
// Validating html form using unit testing and javascript

var email = 'test@email.com';

var phone_number = '3133456079';

var phone_number_length = phone_number.length;


const functions =  {
    
    createUser: () => {
        const user = { firstName: 'John' };
        user['lastName'] = 'Doe';
        return user;
      },
    
    createUser_2: () => {
        const user = { firstName: 'Jason' };
        user['lastName'] = 'Smith';
        return user;
    },

    age_entry: () => 45,

    phone_number: () => phone_number_length,

    email: () => email,

    submit: () => true
}

module.exports = functions;