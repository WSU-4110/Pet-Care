const Home = require('./functions');
const PetParks = require('./functions');
const PetVets = require('./functions');
const lostAndfound = require('./functions');
const StrayAnimals = require('./functions');
const Events = require('./functions');



test('Returning Home label',() =>{
    expect(Home.getHomeLabel()).toEqual('Home');
});

test('Returning Pet Parks label',() =>{
    expect(PetParks.getPetParksLabel()).toEqual('Pet Parks');
});

test('Returning PetVets label',() =>{
    expect(PetVets.getPetVetsLabel()).toEqual('PetVets');
});

test('Returning lost And found label',() =>{
    expect(lostAndfound.getlostAndfoundLabel()).toEqual('Lost And Found');
});

test('Returning StrayAnimals label',() =>{
    expect(StrayAnimals.getStrayAnimalsLabel()).toEqual('Stray Animal');
});

test('Returning Events label',() =>{
    expect(Events.getEventsLabel()).toEqual('Events');
});



