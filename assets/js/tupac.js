var TuPac = function(top, left, timeBetweenSteps, lean) {
  Rapper.call(this, top, left, timeBetweenSteps, lean);
  this.value = 'tupac'
};

TuPac.prototype = Object.create(Rapper.prototype);
TuPac.prototype.constructor = TuPac;



