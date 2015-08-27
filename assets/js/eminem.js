var Eminem = function(top, left, timeBetweenSteps, lean) {
  Rapper.call(this, top, left, timeBetweenSteps, lean);
  this.value = 'eminem'
};

Eminem.prototype = Object.create(Rapper.prototype);
Eminem.prototype.constructor = Eminem;

