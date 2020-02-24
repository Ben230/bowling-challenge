class Bowling {

};

Bowling.prototype.calculate = function(score) {
  var total = 0;
  score.forEach(roll => {
    total += roll;
  });
  return total;
};

module.exports.Bowling = Bowling;
