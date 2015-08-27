var Snoop = function(top, left, timeBetweenSteps, lean) {
  Rapper.call(this, 'snoop-dogg', top, left, timeBetweenSteps, lean);
};

Snoop.prototype = Object.create(Rapper.prototype);
Snoop.prototype.constructor = Snoop;

