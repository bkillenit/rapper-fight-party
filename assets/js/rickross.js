var RickRoss = function(top, left, timeBetweenSteps, lean) {
  Rapper.call(this, 'rick-ross', top, left, timeBetweenSteps, lean);
};

RickRoss.prototype = Object.create(Rapper.prototype);
RickRoss.prototype.constructor = RickRoss;

