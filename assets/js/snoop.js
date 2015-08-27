var Snoop = function(top, left, timeBetweenSteps, lean) {
  Rapper.call(this, top, left, timeBetweenSteps, lean);
  this.value = 'snoop dogg';
};

Snoop.prototype = Object.create(Rapper.prototype);
Snoop.prototype.constructor = Snoop;

