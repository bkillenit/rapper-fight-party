var RickRoss = function(top, left, timeBetweenSteps, lean) {
  Rapper.call(this, top, left, timeBetweenSteps, lean);
  this.value = 'rick ross';
};

RickRoss.prototype = Object.create(Rapper.prototype);
RickRoss.prototype.constructor = RickRoss;

