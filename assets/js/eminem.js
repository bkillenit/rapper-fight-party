var Eminem = function(top, left, timeBetweenSteps, lean) {
  Rapper.call(this, 'eminem', top, left, timeBetweenSteps, lean);
};

Eminem.prototype = Object.create(Rapper.prototype);
Eminem.prototype.constructor = Eminem;
