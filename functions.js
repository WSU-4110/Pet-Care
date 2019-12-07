const Hassan = {
   
    firstName: 'Hassan',
    lastName: 'Bachir',
    fullName: this.firstName + ' ' + this.lastName,
    title: 'Software Developer',
    description: 'Hassan is a Software Engineer on the Pet-Care Team working towards bringing all Pet stop shops into one simple location. Hassan is passionate about pets, his favorite pets is Fish.',
  
    getFullName: function(){
        return 'Hassan Bachir';
    },
    getDescription: function(){
        return 'Hassan is a Software Engineer on the Pet-Care Team working towards bringing all Pet stop shops into one simple location. Hassan is passionate about pets, his favorite pets is Fish.';
    },
    getTitle: function(){
        return 'Software Developer';
    },
    getAge: function(){
        return 24;
    },
    getNationality: function(){
        return 'Lebanese';
    },

    getUniversity: function(){
        return 'Wayne State University';
    }
};

module.exports = Hassan;
