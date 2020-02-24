const bowlingModule = require('../src/Bowling.js');
const Bowling = bowlingModule.Bowling;

describe('Bowling', function() {
  it('returns 0 for a gutter game', function(){
    var game = new Bowling;
    expect(game.calculate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])).toEqual(0);
  });
});
