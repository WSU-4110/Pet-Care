const Events = require('./functions');


test('Returning Events label',() =>{
    expect(Events.getEventsLabel()).toEqual('Events');
});


