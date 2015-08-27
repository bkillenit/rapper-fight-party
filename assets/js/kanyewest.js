var KanyeWest = function(top, left, timeBetweenSteps, lean) {
  Rapper.call(this, top, left, timeBetweenSteps, lean);
  this.value = 'kanye west'
};

KanyeWest.prototype = Object.create(Rapper.prototype);
KanyeWest.prototype.constructor = KanyeWest;

