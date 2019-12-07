const Home = require('./functions');

test('Returning Home label',() =>{
    expect(Home.getHomeLabel()).toEqual('Home');
});