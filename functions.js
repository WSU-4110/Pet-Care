const Laith = {
   
    firstName: 'Laith',
    lastName: 'Rafidi',
    fullName: this.firstName + ' ' + this.lastName,
    title: 'Co-Owner',
  
    getFullName: function(){
        return 'Laith Rafidi';
    },
    getDescription: function(){
        return 'Laith is a passionate software engineer. His favorite pet is Oscar from Pet of the Day!';
    },
    getTitle: function(){
        return 'Software Engineer';
    },
    getAge: function(){
        return 21;
    },
    getNationality: function(){
        return 'Palestinian';
    },

    getUniversity: function(){
        return 'Wayne State University';
    }
};

module.exports = Laith;
