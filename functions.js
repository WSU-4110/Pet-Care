const Santhosh = {
   
    firstName: 'Santhosh',
    lastName: 'Abraham',
    fullName: this.firstName + ' ' + this.lastName,
    title: 'Software Developer',
  
    getFullName: function(){
        return 'Santhosh Abraham';
    },
    getDescription: function(){
        return 'Lorem Ipsum';
    },
    getTitle: function(){
        return 'Software Developer';
    },
    getAge: function(){
        return 22;
    },
    getNationality: function(){
        return 'American';
    },

    getUniversity: function(){
        return 'Wayne State University';
    }
};

module.exports = Santhosh;
